// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type DndSetSnoozeResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  snooze_enabled?: boolean;
  snooze_endtime?: number;
  snooze_is_indefinite?: boolean;
  snooze_remaining?: number;
};
