import type { AnyRichTextBlockElement } from "./block-elements";
import type { Block } from "./blocks";

export interface RichTextBlock extends Block<"rich_text"> {
  type: "rich_text";
  elements: AnyRichTextBlockElement[];
}
