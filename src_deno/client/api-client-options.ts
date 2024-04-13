export type SlackAPIClientLogLevel =
  | "DEBUG"
  | "INFO"
  | "WARN"
  | "ERROR"
  | "debug"
  | "info"
  | "warn"
  | "error";

export interface SlackAPIClientOptions {
  logLevel?: SlackAPIClientLogLevel;
  throwSlackAPIError?: boolean;
  baseUrl?: string;
}
