///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminTeamsListResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  teams?: Team[];
};

export interface ResponseMetadata {
  next_cursor?: string;
}

export interface Team {
  discoverability?: string;
  id?: string;
  name?: string;
  primary_owner?: PrimaryOwner;
  team_url?: string;
}

export interface PrimaryOwner {
  email?: string;
  user_id?: string;
}
