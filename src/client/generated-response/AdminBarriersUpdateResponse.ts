// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminBarriersUpdateResponse = SlackAPIResponse & {
  barrier?: Barrier;
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};

export interface Barrier {
  barriered_from_usergroups?: Usergroup[];
  date_update?: number;
  enterprise_id?: string;
  id?: string;
  primary_usergroup?: Usergroup;
  restricted_subjects?: string[];
}

export interface Usergroup {
  id?: string;
  name?: string;
}
