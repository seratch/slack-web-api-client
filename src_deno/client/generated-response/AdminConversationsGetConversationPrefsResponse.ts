// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type AdminConversationsGetConversationPrefsResponse =
  & SlackAPIResponse
  & {
    error?: string;
    needed?: string;
    ok: boolean;
    prefs?: Prefs;
    provided?: string;
  };

export interface Prefs {
  can_thread?: CanThread;
  who_can_post?: CanThread;
}

export interface CanThread {
  type?: string[];
  user?: string[];
}
