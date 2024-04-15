// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type AdminConversationsSearchResponse = SlackAPIResponse & {
  conversations?: Conversation[];
  error?: string;
  needed?: string;
  next_cursor?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  total_count?: number;
};

export interface Conversation {
  canvas?: Canvas;
  channel_email_addresses?: ChannelEmailAddress[];
  channel_manager_count?: number;
  connected_limited_team_ids?: string[];
  connected_team_ids?: string[];
  context_team_id?: string;
  conversation_host_id?: string;
  created?: number;
  creator_id?: string;
  external_user_count?: number;
  id?: string;
  internal_team_ids?: string[];
  internal_team_ids_count?: number;
  internal_team_ids_sample_team?: string;
  is_archived?: boolean;
  is_disconnect_in_progress?: boolean;
  is_ext_shared?: boolean;
  is_frozen?: boolean;
  is_general?: boolean;
  is_global_shared?: boolean;
  is_org_default?: boolean;
  is_org_mandatory?: boolean;
  is_org_shared?: boolean;
  is_pending_ext_shared?: boolean;
  is_private?: boolean;
  last_activity_ts?: number;
  member_count?: number;
  name?: string;
  pending_connected_team_ids?: string[];
  purpose?: string;
}

export interface Canvas {
  ownership_details?: OwnershipDetail[];
  total_count?: number;
}

export interface OwnershipDetail {
  count?: number;
  team_id?: string;
}

export interface ChannelEmailAddress {
  address?: string;
  conversation_id?: string;
  date_created?: number;
  icons?: Icons;
  name?: string;
  team_id?: string;
  user_id?: string;
}

export interface Icons {
  image_36?: string;
  image_48?: string;
  image_72?: string;
}

export interface ResponseMetadata {
  messages?: string[];
}
