// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import type { SlackAPIResponse } from "../response.ts";
export type AdminAppsConfigLookupResponse = SlackAPIResponse & {
  configs?: Config[];
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
};

export interface Config {
  app_id?: string;
  domain_restrictions?: DomainRestrictions;
  workflow_auth_strategy?: string;
}

export interface DomainRestrictions {
  emails?: string[];
  urls?: string[];
}

export interface ResponseMetadata {
  messages?: string[];
}
