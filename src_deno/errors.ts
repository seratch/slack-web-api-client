export class SlackAPIError extends Error {
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
