import type { MessageAttachment } from "./message-attachment";

export interface LinkUnfurls {
  [linkUrl: string]: MessageAttachment;
}
