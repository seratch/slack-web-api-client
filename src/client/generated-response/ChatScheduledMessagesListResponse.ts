///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type ChatScheduledMessagesListResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  scheduled_messages?: ScheduledMessage[];
};

export interface ResponseMetadata {
  next_cursor?: string;
}

export interface ScheduledMessage {
  channel_id?: string;
  date_created?: number;
  id?: string;
  post_at?: number;
  text?: string;
}
