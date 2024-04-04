import type { MrkdwnTextField, PlainTextField } from "./text-fields";

export interface BaseMrkdwnOption {
  text: MrkdwnTextField;
  value?: string;
  url?: string;
}

export interface BasePlainTextOption {
  text: PlainTextField;
  value?: string;
  url?: string;
}

export interface MrkdwnOption extends BaseMrkdwnOption {
  description?: PlainTextField;
}

export interface PlainTextOption extends BasePlainTextOption {
  description?: PlainTextField;
}

export interface AnyDescriptionMrkdwnOption extends BaseMrkdwnOption {
  description?: PlainTextField | MrkdwnTextField;
}

export interface AnyDescriptionPlainTextOption extends BasePlainTextOption {
  description?: PlainTextField | MrkdwnTextField;
}

export declare type AnyOption = MrkdwnOption | PlainTextOption;

export declare type AnyDescriptionOption =
  | AnyDescriptionMrkdwnOption
  | AnyDescriptionPlainTextOption;
