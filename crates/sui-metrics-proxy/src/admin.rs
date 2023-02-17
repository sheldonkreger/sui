use axum::{routing::post as axum_post, Router};
use std::sync::Arc;
use tokio::{signal, sync::mpsc};
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

use crate::channels::UpstreamConsumer;
use crate::handlers::publish_metrics;

/// Configure tracing options for main
pub fn set_tracing() {
    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::INFO)
        .finish();
    tracing::subscriber::set_global_default(subscriber).expect("setting default subscriber failed");
}

/// Configure our graceful shutdown scenarios
pub async fn shutdown_signal() {
    let ctrl_c = async {
        signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)]
    let terminate = async {
        signal::unix::signal(signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }

    info!("signal received, starting graceful shutdown");
}

/// App will configure our routes and create our mpsc channels.  This fn is also used to instrument
/// our tests
pub fn app(buffer_size: usize) -> Router {
    // we accept data on our UpstreamConsumer up to our buffer size.
    let (sender, receiver) = mpsc::channel(buffer_size);
    let mut consumer = UpstreamConsumer::new(receiver);

    tokio::spawn(async move { consumer.run().await });

    // build our application with a route and our sender mpsc
    Router::new()
        .route("/publish/metrics", axum_post(publish_metrics))
        .with_state(Arc::new(sender))
}
