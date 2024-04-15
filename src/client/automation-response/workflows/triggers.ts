import type { AnyTrigger } from "../types";
import type { SlackAPIResponse } from "../../response";

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
