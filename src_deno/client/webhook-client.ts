import { WebhookError } from "../errors.ts";
import type { AnyMessageBlock } from "../block-kit/blocks.ts";
import type { MessageAttachment } from "../block-kit/message-attachment.ts";
import type { MessageMetadata } from "../block-kit/message-metadata.ts";

export class WebhookSender {
  #url: string;

  constructor(url: string) {
    this.#url = url;
  }

  async call(params: WebhookParams): Promise<Response> {
    try {
      const response = await fetch(this.#url, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(params),
      });
      const responseBody = await response.text();
      const body = responseBody.toLowerCase();
      if (
        response.status != 200 ||
        (body !== "ok" && body.toLowerCase() !== '{"ok":true}')
      ) {
        throw new WebhookError(response.status, responseBody);
      }
      return response;
    } catch (e) {
      throw new WebhookError(-1, "", e as Error);
    }
  }
}

export const ResponseUrlSender = WebhookSender;

export interface WebhookPostUpdateParams {
  response_type?: "ephemeral" | "in_channel";
  text: string;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
  replace_original?: boolean;
  unfurl_links?: boolean;
  unfurl_media?: boolean;
}
export interface WebhookDeleteParams {
  delete_original: boolean;
}
export type WebhookParams = WebhookPostUpdateParams | WebhookDeleteParams;
