// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use anyhow::Result;
use clap::Parser;
use std::net::SocketAddr;
use sui_metrics_proxy::admin::{app, set_tracing, shutdown_signal};
use tracing::info;

const GIT_REVISION: &str = {
    if let Some(revision) = option_env!("GIT_REVISION") {
        revision
    } else {
        let version = git_version::git_version!(
            args = ["--always", "--dirty", "--exclude", "*"],
            fallback = ""
        );

        if version.is_empty() {
            panic!("unable to query git revision");
        }
        version
    }
};
const VERSION: &str = const_str::concat!(env!("CARGO_PKG_VERSION"), "-", GIT_REVISION);

#[derive(Parser, Debug)]
#[clap(rename_all = "kebab-case")]
#[clap(name = env!("CARGO_BIN_NAME"))]
#[clap(version = VERSION)]
struct Args {
    #[clap(long, short, help = "Specify address to listen on")]
    listen_address: SocketAddr,
    #[clap(long, short, help = "Specify an upstream address to send to")]
    upstream_address: SocketAddr,
    #[clap(long, short, help = "mpsc buffer size - ideally set above our max rps")]
    buffer_size: usize,
}

// basic interactive testing
/*
curl -v -X POST localhost:8080/publish/metrics \
    -H 'Content-Type: application/json' \
    -H 'Connection: close' \
    -d '{"some":"data", "mystery":"fooman"}'
 */

#[tokio::main]
async fn main() -> Result<()> {
    let args = Args::parse();
    set_tracing();

    info!(
        "listen on {:?} send to {:?}",
        args.listen_address, args.upstream_address
    );

    // create a multiple producer, single consumer channel
    // we use this to receive data from nodes and immediately return
    // StatusCode::OK. The http handlers will then process
    // it and send it upstream
    let app = app(args.buffer_size);

    axum::Server::bind(&args.listen_address)
        .serve(app.into_make_service())
        .with_graceful_shutdown(shutdown_signal())
        .await
        .unwrap();

    Ok(())
}
