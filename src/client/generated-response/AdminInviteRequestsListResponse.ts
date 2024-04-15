// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type AdminInviteRequestsListResponse = SlackAPIResponse & {
  error?: string;
  invite_requests?: InviteRequest[];
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface InviteRequest {
  channel_ids?: string[];
  date_created?: number;
  date_expire?: number;
  email?: string;
  id?: string;
  invite_type?: string;
  request_reason?: string;
  requester_ids?: string[];
}
