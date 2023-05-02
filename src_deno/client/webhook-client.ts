import { WebhookError } from "../errors.ts";
import { AnyMessageBlock } from "../block-kit/blocks.ts";
import { MessageAttachment } from "../block-kit/message-attachment.ts";
import { MessageMetadata } from "../block-kit/message-metadata.ts";

export class WebhookSender {
  #url: string;

  constructor(url: string) {
    this.#url = url;
  }

  async call(params: WebhookParams): Promise<Response> {
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
  }
}

export const ResponseUrlSender = WebhookSender;

export interface WebhookParams {
  response_type?: "ephemeral" | "in_channel";
  text: string;
  blocks?: AnyMessageBlock[];
  attachments?: MessageAttachment[];
  metadata?: MessageMetadata;
  replace_original?: boolean;
  delete_original?: boolean;
  unfurl_links?: boolean;
  unfurl_media?: boolean;
}
