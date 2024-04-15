// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type UsersLookupByEmailResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  user?: User;
};

export interface ResponseMetadata {
  messages?: string[];
}

export interface User {
  color?: string;
  deleted?: boolean;
  has_2fa?: boolean;
  id?: string;
  is_admin?: boolean;
  is_app_user?: boolean;
  is_bot?: boolean;
  is_email_confirmed?: boolean;
  is_invited_user?: boolean;
  is_owner?: boolean;
  is_primary_owner?: boolean;
  is_restricted?: boolean;
  is_ultra_restricted?: boolean;
  name?: string;
  profile?: Profile;
  real_name?: string;
  team_id?: string;
  tz?: string;
  tz_label?: string;
  tz_offset?: number;
  updated?: number;
  who_can_share_contact_card?: string;
}

export interface Profile {
  avatar_hash?: string;
  display_name?: string;
  display_name_normalized?: string;
  email?: string;
  first_name?: string;
  guest_invited_by?: string;
  huddle_state?: string;
  huddle_state_expiration_ts?: number;
  image_1024?: string;
  image_192?: string;
  image_24?: string;
  image_32?: string;
  image_48?: string;
  image_512?: string;
  image_72?: string;
  image_original?: string;
  is_custom_image?: boolean;
  last_name?: string;
  phone?: string;
  pronouns?: string;
  real_name?: string;
  real_name_normalized?: string;
  skype?: string;
  status_emoji?: string;
  status_emoji_display_info?: StatusEmojiDisplayInfo[];
  status_emoji_url?: string;
  status_expiration?: number;
  status_text?: string;
  status_text_canonical?: string;
  team?: string;
  title?: string;
}

export interface StatusEmojiDisplayInfo {
  display_alias?: string;
  display_url?: string;
  emoji_name?: string;
  unicode?: string;
}
