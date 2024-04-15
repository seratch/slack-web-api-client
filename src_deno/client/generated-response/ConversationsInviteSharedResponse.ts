// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type ConversationsInviteSharedResponse = SlackAPIResponse & {
  conf_code?: string;
  error?: string;
  invite_id?: string;
  is_legacy_shared_channel?: boolean;
  needed?: string;
  ok: boolean;
  provided?: string;
  url?: string;
};
