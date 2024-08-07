// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type AdminConversationsSetTeamsResponse = SlackAPIResponse & {
  channel?: string;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};
