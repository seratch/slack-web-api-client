// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type AdminRolesListAssignmentsResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  role_assignments?: RoleAssignment[];
};

export interface ResponseMetadata {
  messages?: string[];
  next_cursor?: string;
}

export interface RoleAssignment {
  date_create?: number;
  entity_id?: string;
  role_id?: string;
  user_id?: string;
}
