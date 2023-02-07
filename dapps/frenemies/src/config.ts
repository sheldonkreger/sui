// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { z } from "zod";

const ConfigSchema = z.object({
  /** Fullnode RPC URL to use for the dapp */
  VITE_NETWORK: z.string(),
  /** Leaderboard object: shared, contains information about 1000 top players */
  VITE_LEADERBOARD: z.string(),
  /** Name Registry: shared, used when signing up (and getting a Scorecard) */
  VITE_REGISTRY: z.string(),
  /** Frenemies Package ID */
  VITE_PKG: z.string(),
  /** Epoch length in minutes (24h x 60m default) */
  VITE_EPOCH_LEN: z.string().default("1440"),
});

export const config = ConfigSchema.parse(import.meta.env);
