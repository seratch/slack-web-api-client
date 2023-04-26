## Slack Web API Client for TypeScript

[![npm version](https://badge.fury.io/js/slack-web-api-client.svg)](https://badge.fury.io/js/slack-web-api-client) 
[![deno module](https://shield.deno.dev/x/slack_web_api_client)](https://deno.land/x/slack_web_api_client)

The **slack-web-api-client** library is a type-safe Slack Web API client library. The key benefits it provides are:

* A fetch-based implementation
* Strong types for Web API responses and Block Kit
* Zero additional dependency

### Getting Started

#### npm package

You install the library by npm/yarn command as always:
```
npm i slack-web-api-client
```

```typescript
import { SlackAPIClient } from "slack-web-api-client";

const client = new SlackAPIClient(process.env.SLACK_BOT_TOKEN);
const response = await client.chat.postMessage({
  channel: "#random",
  text: ":wave: what's up?",
});
```

The second argument for more customize options is optional:

```typescript
const client = new SlackAPIClient(process.env.SLACK_BOT_TOKEN, {
  logLevel: "DEBUG",
});
```

#### Deno module

You can use this library in Slack's automation platform too!

```typescript
import { SlackFunction } from "deno-slack-sdk/mod.ts";
import { SlackAPIClient } from "https://deno.land/x/slack_web_api_client@0.1.4/mod.ts";

export const def = DefineFunction({
  callback_id: "hello",
  title: "Hello World",
  source_file: "functions/hello.ts",
  input_parameters: { properties: {}, required: [] },
  output_parameters: { properties: {}, required: [] },
});

export default SlackFunction(def, async ({ token }) => {
  const client = new SlackAPIClient(token);
  const repsonse = await client.chat.postMessage({
    channel: "#random",
    text: ":wave: what's up?",
  });

// ....
});
```
