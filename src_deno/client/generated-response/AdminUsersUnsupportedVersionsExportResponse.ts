// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response.ts";
export type AdminUsersUnsupportedVersionsExportResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
};
