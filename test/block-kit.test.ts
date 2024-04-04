import { assert, test, describe } from "vitest";
import {
  AnyMessageBlock,
  MessageInputBlock,
  RichTextBlock,
} from "../src/index";

describe("Block Kit types", () => {
  test("parse rich text ones", async () => {
    // Verify if this compiles
    const blocks: RichTextBlock[] = [
      {
        type: "rich_text",
        elements: [
          {
            type: "rich_text_section",
            elements: [
              {
                type: "text",
                text: "Hello world",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                  code: true,
                },
              },
              {
                type: "channel",
                channel_id: "C0123456789",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "user",
                user_id: "U0123456789",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "emoji",
                name: "+1",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "link",
                url: "https:///www.slack.com",
                text: "Link here",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                  code: true,
                },
              },
              {
                type: "team",
                team_id: "T0123456789",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "usergroup",
                usergroup_id: "S0123456789",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "date",
                timestamp: 1703908656,
                format: "YYYY-MM-DD",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                  code: true,
                },
              },
              {
                type: "broadcast",
                range: "here",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
              {
                type: "color",
                value: "red",
                style: {
                  bold: true,
                  italic: true,
                  strike: true,
                },
              },
            ],
          },
        ],
      },
    ];
    assert.equal(blocks.length, 1);
  });
  test("parse image blocks/elements", async () => {
    // Verify if this compiles
    const blocks: AnyMessageBlock[] = [
      {
        type: "image",
        image_url: "https://example.com",
        alt_text: "alt",
      },
      {
        type: "image",
        slack_file: { url: "https://slack.com" },
        alt_text: "alt",
      },
      {
        type: "image",
        slack_file: { id: "F111" },
        alt_text: "alt",
      },
      {
        type: "section",
        accessory: {
          type: "image",
          image_url: "https://example.com",
          alt_text: "alt",
        },
      },
      {
        type: "section",
        accessory: {
          type: "image",
          slack_file: { url: "https://slack.com" },
          alt_text: "alt",
        },
      },
      {
        type: "section",
        accessory: {
          type: "image",
          slack_file: { id: "F111" },
          alt_text: "alt",
        },
      },
    ];
    assert.equal(blocks.length, 6);
  });

  test("parse description for an option", async () => {
    // Verify if this compiles
    const blocks: MessageInputBlock[] = [
      {
        type: "input",
        block_id: "1",
        label: { type: "plain_text", text: "Checkbox" },
        element: {
          type: "checkboxes",
          options: [
            {
              text: { type: "plain_text", text: "1-p-p" },
              description: { type: "plain_text", text: "1-p-p" },
            },
            {
              text: { type: "plain_text", text: "1-p-m" },
              description: { type: "mrkdwn", text: "1-p-m" },
            },
            {
              text: { type: "mrkdwn", text: "1-m-p" },
              description: { type: "plain_text", text: "1-m-p" },
            },
            {
              text: { type: "mrkdwn", text: "1-m-m" },
              description: { type: "mrkdwn", text: "1-m-m" },
            },
          ],
        },
      },
      {
        type: "input",
        block_id: "2",
        label: { type: "plain_text", text: "Radio Buttons" },
        element: {
          type: "radio_buttons",
          options: [
            {
              text: { type: "plain_text", text: "2-p-p" },
              description: { type: "plain_text", text: "2-p-p" },
            },
            {
              text: { type: "plain_text", text: "2-p-m" },
              description: { type: "mrkdwn", text: "2-p-m" },
            },
            {
              text: { type: "mrkdwn", text: "2-m-p" },
              description: { type: "plain_text", text: "2-m-p" },
            },
            {
              text: { type: "mrkdwn", text: "2-m-m" },
              description: { type: "mrkdwn", text: "2-m-m" },
            },
          ],
        },
      },
      {
        type: "input",
        block_id: "3",
        label: { type: "plain_text", text: "Static Select" },
        element: {
          type: "radio_buttons",
          options: [
            {
              text: { type: "plain_text", text: "3-p-p" },
              description: { type: "plain_text", text: "3-p-p" },
            },
            {
              text: { type: "mrkdwn", text: "3-m-p" },
              description: { type: "plain_text", text: "3-m-p" },
            },
          ],
        },
      },
    ];
    assert.isTrue(blocks.length > 0);
  });
});
