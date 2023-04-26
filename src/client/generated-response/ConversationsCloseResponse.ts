///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type ConversationsCloseResponse = SlackAPIResponse & {
  already_closed?: boolean;
  error?: string;
  needed?: string;
  no_op?: boolean;
  ok: boolean;
  provided?: string;
};
