import { TokenRotationError } from "../errors.ts"
import { SlackAPIClient } from "../client/api-client.ts"
import type { TokenRotatorOptions } from "./token-rotator-options.ts"
import type { TokenRefreshResults } from "./token-refresh-results.ts"
import type { TokenRefreshTargets } from "./token-refresh-targets.ts"

export class TokenRotator {
  #clientId: string;
  #clientSecret: string;
  #client: SlackAPIClient;

  constructor(options: TokenRotatorOptions) {
    this.#clientId = options.clientId;
    this.#clientSecret = options.clientSecret;
    this.#client = new SlackAPIClient(undefined, options);
  }

  async performRotation(
    targets: TokenRefreshTargets
  ): Promise<TokenRefreshResults> {
    const refreshResults: TokenRefreshResults = {};
    const randomSeconds = Math.round(
      crypto.getRandomValues(new Uint16Array(1))[0] / 100
    );
    const expireAt = new Date().getTime() / 1000 + randomSeconds;
    if (targets.bot && targets.bot.token_expires_at < expireAt) {
      try {
        const response = await this.#client.oauth.v2.access({
          client_id: this.#clientId,
          client_secret: this.#clientSecret,
          grant_type: "refresh_token",
          refresh_token: targets.bot.refresh_token,
        });
        if (
          response &&
          response.access_token &&
          response.refresh_token &&
          response.expires_in
        ) {
          refreshResults.bot = {
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            token_expires_at: new Date().getTime() / 1000 + response.expires_in,
          };
        }
      } catch (e) {
        throw new TokenRotationError(`Failed to refresh a bot token: ${e}`);
      }
    }
    if (targets.user && targets.user.token_expires_at < expireAt) {
      try {
        const response = await this.#client.oauth.v2.access({
          client_id: this.#clientId,
          client_secret: this.#clientSecret,
          grant_type: "refresh_token",
          refresh_token: targets.user.refresh_token,
        });
        if (
          response &&
          response.access_token &&
          response.refresh_token &&
          response.expires_in
        ) {
          refreshResults.user = {
            access_token: response.access_token,
            refresh_token: response.refresh_token,
            token_expires_at: new Date().getTime() / 1000 + response.expires_in,
          };
        }
      } catch (e) {
        throw new TokenRotationError(`Failed to refresh a user token: ${e}`);
      }
    }
    return refreshResults;
  }
}
