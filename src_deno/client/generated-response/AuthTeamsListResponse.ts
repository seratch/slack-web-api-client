// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type AuthTeamsListResponse = SlackAPIResponse & {
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
  icon?: Icon;
  id?: string;
  name?: string;
}

export interface Icon {
  image_102?: string;
  image_132?: string;
  image_230?: string;
  image_34?: string;
  image_44?: string;
  image_68?: string;
  image_88?: string;
  image_default?: boolean;
}