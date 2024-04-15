// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type ApiTestResponse = SlackAPIResponse & {
  args?: Args;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Args {
  error?: string;
  foo?: string;
}
