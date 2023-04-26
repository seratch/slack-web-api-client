import type { SlackAPIClientOptions } from "../client/api-client-options";

export type TokenRotatorOptions = SlackAPIClientOptions & {
  clientId: string;
  clientSecret: string;
};
