import type { SlackAPIResponse } from "../../response.ts";

interface ErrorResponse {
  ok: false;
  error: string;
  warnings?: string[];
  response_metadata?: {
    warnings?: string[];
    messages?: string[];
  };
}

interface SingleItemRepsonse {
  ok: boolean;
  warnings?: string[];
  response_metadata?: {
    warnings?: string[];
    messages?: string[];
  };
  datastore: string;
  // deno-lint-ignore no-explicit-any
  item: Record<string, any>;
}

interface ListItemRepsonse {
  ok: boolean;
  warnings?: string[];
  response_metadata?: {
    warnings?: string[];
    messages?: string[];
  };
  datastore: string;
  // deno-lint-ignore no-explicit-any
  items: Record<string, any>[];
}

export type AppsDatastoreGetResponse =
  & SlackAPIResponse
  & (SingleItemRepsonse | ErrorResponse);
export type AppsDatastorePutResponse =
  & SlackAPIResponse
  & (SingleItemRepsonse | ErrorResponse);
export type AppsDatastoreUpdateResponse =
  & SlackAPIResponse
  & (SingleItemRepsonse | ErrorResponse);
export type AppsDatastoreQueryResponse =
  & SlackAPIResponse
  & (ListItemRepsonse | ErrorResponse);
export type AppsDatastoreDeleteResponse = SlackAPIResponse;
