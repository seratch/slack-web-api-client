export interface Manifest {
  _metadata?: ManifestMetadata;
  display_information: ManifestDisplayInformation;
  features?: ManifestFeatures;
  oauth_config?: ManifestOAuthConfig;
  settings?: ManifestSettings;
}

export interface ManifestMetadata {
  major_version?: string;
  minor_version?: string;
}

export interface ManifestDisplayInformation {
  name: string;
  description: string;
  long_description?: string;
  background_color?: string;
}

export interface ManifestFeatures {
  app_home?: AppHome;
  bot_user?: BotUser;
  shortcuts?: Shortcut[];
  slash_commands?: SlashCommand[];
  unfurl_domains?: string[];
}

export interface AppHome {
  home_tab_enabled?: boolean;
  messages_tab_enabled?: boolean;
  messages_tab_read_only_enabled?: boolean;
}

export interface BotUser {
  display_name: string;
  always_online?: boolean;
}

export interface Shortcut {
  type: "global" | "message";
  name: string;
  callback_id: string;
  description: string;
}

export interface SlashCommand {
  command: string;
  usage_hint: string;
  description: string;
  should_escape?: boolean;
  url?: string; // can be absent when enabling Socket Mode
}

export interface ManifestOAuthConfig {
  scopes: Scopes;
  redirect_urls?: string[];
}

export interface Scopes {
  bot?: string[];
  user?: string[];
}

export interface ManifestSettings {
  allowed_ip_address_ranges?: string[];
  background_color?: string;
  description?: string;
  event_subscriptions?: EventSubscriptions;
  interactivity?: Interactivity;
  long_description?: string;
  org_deploy_enabled?: boolean;
  socket_mode_enabled?: boolean;
  token_rotation_enabled?: boolean;
}

export interface EventSubscriptions {
  bot_events?: string[];
  user_events?: string[];
  request_url?: string; // can be absent when enabling Socket Mode
}

export interface Interactivity {
  is_enabled: boolean;
  message_menu_options_url?: string;
  request_url?: string; // can be absent when enabling Socket Mode
}
