// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type ChatGetPermalinkResponse = SlackAPIResponse & {
  channel?: string;
  error?: string;
  needed?: string;
  ok: boolean;
  permalink?: string;
  provided?: string;
};
