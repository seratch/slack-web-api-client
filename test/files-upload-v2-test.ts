// brew install deno
// deno run --allow-env --allow-read --allow-net test/files-upload-v2-test.ts

import { load } from "https://deno.land/std@0.222.1/dotenv/mod.ts";
console.log(await load({ export: true }));

import { delay } from "https://deno.land/std@0.222.1/async/mod.ts";
import { SlackAPIClient } from "../src_deno/mod.ts";

const client = new SlackAPIClient(Deno.env.get("SLACK_BOT_TOKEN"), {
  logLevel: "DEBUG",
});
const authTest = await client.auth.test();
console.log(authTest);

const channelId = "CHE2DUW5V";

const content = await client.files.uploadV2({
  channel_id: channelId,
  initial_comment: "1: Here is the content :wave:",
  content: "Hey!",
  filename: "hey.txt",
});
console.log(content);

const uploadedFile = content.files![0];
let shares = uploadedFile.shares;
while (!shares || Object.keys(shares).length === 0) {
  await delay(1000);
  const response = await client.files.info({ file: uploadedFile.id! });
  shares = response.file?.shares;
}
const threadTs = shares.public
  ? shares.public[Object.keys(shares.public)[0]][0].ts
  : undefined;

const file = await client.files.uploadV2({
  channel_id: channelId,
  initial_comment: "2: Here is the text file :wave:",
  thread_ts: threadTs,
  file: new Blob(["Hey!"], { type: "text/plain" }),
  filename: "hey.txt",
});
console.log(file);

const bin = await client.files.uploadV2({
  channel_id: channelId,
  initial_comment: "3: Here is the binary file :wave:",
  thread_ts: threadTs,
  file: await Deno.readFile("./test/slack.jpg"),
  filename: "slack.jpg",
});
console.log(bin);

const files = await client.files.uploadV2({
  channel_id: channelId,
  initial_comment: "4: Here are the files :wave:",
  files: [
    {
      content: "Hey!",
      filename: "hey.txt",
    },
    {
      file: new Blob(["Hey!"], { type: "text/plain" }),
      filename: "hey.txt",
    },
    {
      file: await Deno.readFile("./test/slack.jpg"),
      filename: "slack.jpg",
    },
  ],
});
console.log(files);
