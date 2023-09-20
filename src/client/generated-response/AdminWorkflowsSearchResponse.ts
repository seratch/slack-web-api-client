// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
///////////////////////////////////
// !!! DO NOT EDIT THIS FILE !!! //
///////////////////////////////////

import { SlackAPIResponse } from "../response";
export type AdminWorkflowsSearchResponse = SlackAPIResponse & {
  error?: string;
  needed?: string;
  ok: boolean;
  provided?: string;
  response_metadata?: ResponseMetadata;
  total_found?: number;
  workflows?: Workflow[];
};

export interface ResponseMetadata {
  messages?: string[];
  next_cursor?: string;
}

export interface Workflow {
  app_id?: string;
  billing_type?: string;
  callback_id?: string;
  collaborators?: string[];
  date_updated?: number;
  description?: string;
  icons?: Icons;
  id?: string;
  input_parameters?: { [key: string]: InputParameter };
  is_billable?: boolean;
  is_published?: boolean;
  is_sales_home_workflow?: boolean;
  last_published_date?: string;
  last_published_version_id?: string;
  last_updated_by?: string;
  source?: string;
  steps?: Step[];
  team_id?: string;
  title?: string;
  trigger_ids?: string[];
  unpublished_change_count?: number;
  workflow_function_id?: string;
}

export interface Icons {
  image_192?: string;
  image_96?: string;
}

export interface InputParameter {
  description?: string;
  is_hidden?: boolean;
  is_required?: boolean;
  name?: string;
  title?: string;
  type?: string;
}

export interface Step {
  function_id?: string;
  id?: string;
  inputs?: { [key: string]: Input };
  is_pristine?: boolean;
}

export interface Input {
  hidden?: boolean;
  locked?: boolean;
}
