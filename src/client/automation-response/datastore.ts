// deno-lint-ignore-file ban-unused-ignore no-explicit-any no-empty-interface
import { SlackAPIResponse } from "../response";

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
  items: Record<string, any>[];
}

export type AppsDatastoreGetResponse = SlackAPIResponse &
  (SingleItemRepsonse | ErrorResponse);
export type AppsDatastorePutResponse = SlackAPIResponse &
  (SingleItemRepsonse | ErrorResponse);
export type AppsDatastoreQueryResponse = SlackAPIResponse &
  (ListItemRepsonse | ErrorResponse);
export type AppsDatastoreDeleteResponse = SlackAPIResponse;
