import { SlackAPIConnectionError } from "../../errors.ts";
import type { RetryHandler, RetryHandlerArgs } from "./retry-handler.ts";

export interface BasicRetryHandlerOptions {
  maxAttempts: number;
}
export const DefaultBasicRetryHandlerOptions: BasicRetryHandlerOptions = {
  maxAttempts: 1,
};

export interface FixedIntervalRetryHandlerOptions {
  maxAttempts: number;
  intervalSeconds: number;
}
export const DefaultFixedIntervalRetryHandlerOptions:
  FixedIntervalRetryHandlerOptions = {
    maxAttempts: 1,
    intervalSeconds: 0.3,
  };

export class RatelimitRetryHandler implements RetryHandler {
  #maxAttempts: number;

  constructor(
    options: BasicRetryHandlerOptions = DefaultBasicRetryHandlerOptions,
  ) {
    this.#maxAttempts = options.maxAttempts;
  }
  async shouldRetry({ state, response }: RetryHandlerArgs): Promise<boolean> {
    if (state.currentAttempt >= this.#maxAttempts || !response) {
      return false;
    }
    if (response.status !== 429) {
      return false;
    }
    const retryAfter = response.headers.get("retry-after") ||
      response.headers.get("Retry-After");
    if (!retryAfter || Number.isNaN(retryAfter)) {
      // This could be a Slack server-side issue
      // because the retry-after header is missing while the status is 429
      return false;
    }
    const sleepSeconds = Number.parseFloat(retryAfter);
    await sleep(sleepSeconds);

    return true;
  }
}

export class ConnectionErrorRetryHandler implements RetryHandler {
  #maxAttempts: number;
  #intervalSeconds: number;

  constructor(
    options: FixedIntervalRetryHandlerOptions =
      DefaultFixedIntervalRetryHandlerOptions,
  ) {
    this.#maxAttempts = options.maxAttempts;
    this.#intervalSeconds = options.intervalSeconds;
  }
  async shouldRetry({ state, error }: RetryHandlerArgs): Promise<boolean> {
    if (state.currentAttempt >= this.#maxAttempts || !error) {
      return false;
    }
    if (error instanceof SlackAPIConnectionError) {
      await sleep(this.#intervalSeconds);
      return true;
    }
    return false;
  }
}

export class ServerErrorRetryHandler implements RetryHandler {
  #maxAttempts: number;
  #intervalSeconds: number;

  constructor(
    options: FixedIntervalRetryHandlerOptions =
      DefaultFixedIntervalRetryHandlerOptions,
  ) {
    this.#maxAttempts = options.maxAttempts;
    this.#intervalSeconds = options.intervalSeconds;
  }
  async shouldRetry({ state, response }: RetryHandlerArgs): Promise<boolean> {
    if (state.currentAttempt >= this.#maxAttempts || !response) {
      return false;
    }
    if (response.status >= 500) {
      await sleep(this.#intervalSeconds);
      return true;
    }
    return false;
  }
}

const sleep = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
