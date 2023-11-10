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
  app_home?: ManifestAppHome;
  bot_user?: ManifestBotUser;
  shortcuts?: ManifestShortcut[];
  slash_commands?: ManifestSlashCommand[];
  unfurl_domains?: string[];
}

export interface ManifestAppHome {
  home_tab_enabled?: boolean;
  messages_tab_enabled?: boolean;
  messages_tab_read_only_enabled?: boolean;
}

export interface ManifestBotUser {
  display_name: string;
  always_online?: boolean;
}

export interface ManifestShortcut {
  type: "global" | "message";
  name: string;
  callback_id: string;
  description: string;
}

export interface ManifestSlashCommand {
  command: string;
  usage_hint: string;
  description: string;
  should_escape?: boolean;
  url?: string; // can be absent when enabling Socket Mode
}

export interface ManifestOAuthConfig {
  scopes: ManifestOAuthScopes;
  redirect_urls?: string[];
}

export interface ManifestOAuthScopes {
  bot?: string[];
  user?: string[];
}

export interface ManifestSettings {
  allowed_ip_address_ranges?: string[];
  background_color?: string;
  description?: string;
  event_subscriptions?: ManifestEventSubscriptions;
  interactivity?: ManifestInteractivity;
  long_description?: string;
  org_deploy_enabled?: boolean;
  socket_mode_enabled?: boolean;
  token_rotation_enabled?: boolean;
}

export interface ManifestEventSubscriptions {
  bot_events?: string[];
  user_events?: string[];
  request_url?: string; // can be absent when enabling Socket Mode
}

export interface ManifestInteractivity {
  is_enabled: boolean;
  message_menu_options_url?: string;
  request_url?: string; // can be absent when enabling Socket Mode
}
