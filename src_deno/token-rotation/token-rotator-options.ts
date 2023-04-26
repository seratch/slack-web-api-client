import { SlackAPIClientOptions } from "../client/api-client-options.ts"

export type TokenRotatorOptions = SlackAPIClientOptions & {
  clientId: string;
  clientSecret: string;
};
