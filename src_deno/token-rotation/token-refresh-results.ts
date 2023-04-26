export interface TokenRefreshResults {
  bot?: {
    access_token: string;
    refresh_token: string;
    token_expires_at: number;
  };
  user?: {
    access_token: string;
    refresh_token: string;
    token_expires_at: number;
  };
}
