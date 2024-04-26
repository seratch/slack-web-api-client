import type { SlackAPIClientLogLevel } from "../logging/index";
import type { RetryHandler } from "./retry-handler/index";

export interface SlackAPIClientOptions {
  logLevel?: SlackAPIClientLogLevel;
  throwSlackAPIError?: boolean;
  baseUrl?: string;
  retryHandlers?: RetryHandler[];
}
