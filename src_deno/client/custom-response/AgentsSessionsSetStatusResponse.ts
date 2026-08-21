// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface

import type { SlackAPIResponse } from "../response.ts";

export type AgentSessionStatus =
  | "active"
  | "processing"
  | "suspended"
  | "closed";

export type AgentsSessionsSetStatusResponse = SlackAPIResponse & {
  ok: boolean;
  error?: string;
  needed?: string;
  provided?: string;

  /** Session-wide status across every agent present, with precedence suspended > processing > active > closed. */
  status?: AgentSessionStatus;
  /** The calling agent's own status, the value this call just wrote. */
  agent_status?: AgentSessionStatus;
  title?: string;
};
