// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type UsersGetPresenceResponse = SlackAPIResponse & {
  auto_away?: boolean;
  connection_count?: number;
  error?: string;
  last_activity?: number;
  manual_away?: boolean;
  needed?: string;
  ok: boolean;
  online?: boolean;
  presence?: string;
  provided?: string;
  warning?: string;
};
