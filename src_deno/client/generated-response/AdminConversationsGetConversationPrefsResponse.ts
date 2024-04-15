// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
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
  can_huddle?: CanHuddle;
  can_thread?: CanThread;
  enable_at_channel?: CanHuddle;
  enable_at_here?: CanHuddle;
  membership_limit?: MembershipLimit;
  who_can_post?: CanThread;
}

export interface CanHuddle {
  enabled?: boolean;
}

export interface CanThread {
  type?: string[];
  user?: string[];
}

export interface MembershipLimit {
  value?: number;
}
