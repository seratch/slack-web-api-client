import { PlainTextField, AnyTextField } from "./text-fields.ts"

export interface Confirm {
  title?: PlainTextField;
  text: AnyTextField;
  confirm?: PlainTextField;
  deny?: PlainTextField;
  style?: "primary" | "danger";
}
