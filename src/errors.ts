export class SlackAPIError extends Error {
  // deno-lint-ignore no-explicit-any
  constructor(apiName: string, error: string, result: any) {
    const message = `Failed to call ${apiName} due to ${error}: ${JSON.stringify(
      result
    )}`;
    super(message);
    this.name = "SlackAPIError";
  }
}

export class TokenRotationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TokenRotationError";
  }
}

export class WebhookError extends Error {
  constructor(status: number, body: string) {
    const message = `Failed to send a message using incoming webhook/response_url (status: ${status}, body: ${body})`;
    super(message);
    this.name = "ResponseUrlError";
  }
}
