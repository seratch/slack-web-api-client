// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type AdminConversationsWhitelistListGroupsLinkedToChannelResponse = SlackAPIResponse & {
  error?: string;
  group_ids?: string[];
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  warning?: string;
};

export interface ResponseMetadata {
  messages?: string[];
  warnings?: string[];
}
