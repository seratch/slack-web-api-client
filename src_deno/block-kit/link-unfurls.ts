import { MessageAttachment } from "./message-attachment.ts"

export interface LinkUnfurls {
  [linkUrl: string]: MessageAttachment;
}
