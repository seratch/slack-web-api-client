// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type AdminConversationsGetCustomRetentionResponse = SlackAPIResponse & {
  duration_days?: number;
  error?: string;
  is_policy_enabled?: boolean;
  needed?: string;
  ok: boolean;
  provided?: string;
};
