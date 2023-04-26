import { AnyHomeTabBlock, AnyModalBlock } from "./blocks.ts"
import { PlainTextField } from "./text-fields.ts"

export interface HomeTabView {
  type: "home";
  blocks: AnyHomeTabBlock[];
  private_metadata?: string;
  callback_id?: string;
  external_id?: string;
}

export interface ModalView {
  type: "modal";
  title: PlainTextField;
  blocks: AnyModalBlock[];
  close?: PlainTextField;
  submit?: PlainTextField;
  private_metadata?: string;
  callback_id?: string;
  clear_on_close?: boolean;
  notify_on_close?: boolean;
  external_id?: string;
}
