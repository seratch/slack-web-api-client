import type { SlackAPIClientLogLevel } from "../logging/index.ts";
import type { RetryHandler } from "./retry-handler/index.ts";

export interface SlackAPIClientOptions {
  logLevel?: SlackAPIClientLogLevel;
  throwSlackAPIError?: boolean;
  baseUrl?: string;
  retryHandlers?: RetryHandler[];
}
