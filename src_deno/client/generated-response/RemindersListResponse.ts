// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type RemindersListResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  reminders?: Reminder[];
};

export interface Reminder {
  channel?: string;
  complete_ts?: number;
  creator?: string;
  id?: string;
  recurrence?: Recurrence;
  recurring?: boolean;
  text?: string;
  time?: number;
  user?: string;
}

export interface Recurrence {
  frequency?: string;
  weekdays?: string[];
}
