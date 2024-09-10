import type { PlainTextField } from "./text-fields";

export interface Confirm {
  title?: PlainTextField;
  text: PlainTextField;
  confirm?: PlainTextField;
  deny?: PlainTextField;
  style?: "primary" | "danger";
}
