import type { AnyTrigger } from "../types.ts";
import type { SlackAPIResponse } from "../../response.ts";

export interface WorkflowsTriggersCreateResponse extends SlackAPIResponse {
  trigger: AnyTrigger;
}
export interface WorkflowsTriggersUpdateResponse extends SlackAPIResponse {
  trigger: AnyTrigger;
}
export type WorkflowsTriggersDeleteResponse = SlackAPIResponse;
export interface WorkflowsTriggersListResponse extends SlackAPIResponse {
  triggers: AnyTrigger[];
}
