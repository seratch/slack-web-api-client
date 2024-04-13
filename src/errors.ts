import { SlackAPIResponse } from "./client/response";

export class SlackAPIConnectionError extends Error {
  apiName: string;
  status: number;
  body: string;
  headers: Headers | undefined;
  cause: Error | undefined;

  constructor(
    apiName: string,
    status: number,
    body: string,
    headers: Headers | undefined,
    cause: Error | undefined,
  ) {
    const substring = body
      .replaceAll("\r", "")
      .replaceAll("\n", "")
      .substring(100);
    const bodyToPrint =
      substring.length === 1000 ? substring + " ..." : substring;
    const message =
      cause !== undefined
        ? `Failed to call ${apiName} (cause: ${cause})`
        : `Failed to call ${apiName} (status: ${status}, body: ${bodyToPrint})`;
    super(message);
    this.name = "SlackAPIConnectionError";
    this.apiName = apiName;
    this.status = status;
    this.body = body;
    this.headers = headers;
    this.cause = cause;
  }
}

export class SlackAPIError extends Error {
  apiName: string;
  error: string;
  result: SlackAPIResponse;
  constructor(apiName: string, error: string, result: SlackAPIResponse) {
    const message = `Failed to call ${apiName} due to ${error}: ${JSON.stringify(
      result,
    )}`;
    super(message);
    this.name = "SlackAPIError";
    this.apiName = apiName;
    this.error = error;
    this.result = result;
  }
}

export class TokenRotationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TokenRotationError";
  }
}

export class WebhookError extends Error {
  status: number;
  body: string;
  constructor(status: number, body: string) {
    const message = `Failed to send a message using incoming webhook/response_url (status: ${status}, body: ${body})`;
    super(message);
    this.name = "ResponseUrlError";
    this.status = status;
    this.body = body;
  }
}
