import type { SlackAPIClientLogLevel } from "../../logging/index.ts";

export interface RetryHandlerState {
  currentAttempt: number; // zero-origin
  logLevel: SlackAPIClientLogLevel;
}

export type RetryHandlerArgs = RetryHandlerResponseArgs | RetryHandlerErrorArgs;

export interface RetryHandlerResponseArgs {
  state: RetryHandlerState;
  request: Request;
  response: Response;
  error?: Error;
}
export interface RetryHandlerErrorArgs {
  state: RetryHandlerState;
  request: Request;
  response?: Response;
  error: Error;
}

/**
 * Retry handler interface
 */
export interface RetryHandler {
  shouldRetry(args: RetryHandlerArgs): Promise<boolean>;
}
