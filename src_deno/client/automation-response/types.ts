export interface ScheduleTriggerSettings {
  start_time: string; // ISO date string
  end_time?: string; // ISO date string
  timezone?: string;
  occurrence_count?: number;
  frequency?:
    | { type: "once" }
    | {
      type: "hourly" | "daily" | "weekly" | "monthly" | "yearly";
      repeats_every?: number;
      on_days?: string[];
      on_week_num?: number;
    };
}

export interface EventTriggerSettings {
  event_type: string; // "slack#/events/reaction_added"
  channel_ids?: string[];
  team_ids?: string[];
  filter?: { version: number; root: { statement: string } };
}

export interface WebhookTriggerSettings {
  filter?: Filter;
}

export interface Filter {
  version: number;
  root: { statement: string };
}

export interface Trigger {
  id: string;
  name: string;
  description: string;
  inputs: {
    [key: string]: {
      value: string;
      locked: boolean;
      hidden: boolean;
    };
  };
  outputs: {
    [key: string]: {
      type: string;
      name: string;
      title: string;
      enum?: string[];
      is_hidden?: boolean;
      nullable?: boolean;
      is_required: boolean;
      description: string;
    };
  };
  available_data: {
    [key: string]: {
      type: string;
      name: string;
      title: string;
      enum?: string[];
      is_hidden?: boolean;
      nullable?: boolean;
      is_required: boolean;
      description: string;
    };
  };
  workflow: {
    id: string;
    workflow_id: string;
    callback_id: string;
    title: string;
    description: string;
    type: string;
    input_parameters: {
      type: string;
      name: string;
      title: string;
      description?: string;
      is_required: boolean;
    }[];
    // deno-lint-ignore no-explicit-any
    output_parameters: Record<string, any>[];
    app_id: string;
    app: {
      id: string;
      name: string;
      icons: {
        image_32: string;
        image_48: string;
        image_64: string;
        image_72: string;
      };
      is_workflow_app: boolean;
    };
    date_created: number;
    date_updated: number;
    date_deleted: number; // can be 0 when it's not deleted
  };
  date_created: number;
  date_updated: number;
  owning_team_id: string;
}

export interface LinkTrigger extends Trigger {
  type: "shortcut";
  shortcut_url: string;
}
export interface EventTrigger extends Trigger {
  type: "event";
  event_type: string;
  team_ids?: string[]; // TODO: better typing based on the event_type
  channel_ids?: string[]; // TODO: better typing based on the event_type
}
export interface WebhookTrigger extends Trigger {
  type: "webhook";
  webhook_url: string;
  webhook?: WebhookTriggerSettings;
}
export interface ScheduledTrigger extends Trigger {
  type: "scheduled";
  schedule: ScheduleTriggerSettings;
}
export type AnyTrigger =
  | LinkTrigger
  | EventTrigger
  | WebhookTrigger
  | ScheduledTrigger;
