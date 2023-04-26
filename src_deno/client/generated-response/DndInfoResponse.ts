// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type DndInfoResponse = SlackAPIResponse & {
  dnd_enabled?: boolean;
  error?: string;
  needed?: string;
  next_dnd_end_ts?: number;
  next_dnd_start_ts?: number;
  ok: boolean;
  provided?: string;
};
