import type { AnyRichTextBlockElement } from "./block-elements.ts";
import type { Block } from "./blocks.ts";

export interface RichTextBlock extends Block<"rich_text"> {
  type: "rich_text";
  elements: AnyRichTextBlockElement[];
}
