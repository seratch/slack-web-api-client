// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type BotsInfoResponse = SlackAPIResponse & {
  bot?: Bot;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Bot {
  app_id?: string;
  deleted?: boolean;
  icons?: Icons;
  id?: string;
  name?: string;
  updated?: number;
  user_id?: string;
}

export interface Icons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}
