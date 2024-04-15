// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type TeamBillingInfoResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  plan?: string;
  provided?: string;
};
