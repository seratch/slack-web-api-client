// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response";
export type AppsManifestCreateResponse = SlackAPIResponse & {
  app_id?: string;
  credentials?: Credentials;
  error?: string;
  errors?: Error[];
  needed?: string;
  oauth_authorize_url?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Credentials {
  client_id?: string;
  client_secret?: string;
  signing_secret?: string;
  verification_token?: string;
}

export interface Error {
  code?: string;
  message?: string;
  pointer?: string;
}

export interface ResponseMetadata {
  messages?: string[];
}
