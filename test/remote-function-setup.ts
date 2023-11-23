// https://api.slack.com/reference/manifests#config-tokens
// echo 'SLACK_TOOLING_REFRESH_TOKEN=xoxe-1-...' > .env
// brew install deno
// deno run --allow-env --allow-read --allow-write --allow-net test/remote-function-setup.ts

import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts";
console.log(await load({ export: true }));

import {
    ManifestParams,
    SlackAPIClient,
    SlackAPIClientOptions,
} from "../src_deno/mod.ts";

const clientOptions: SlackAPIClientOptions = { logLevel: "DEBUG" };
const noTokenClient = new SlackAPIClient(undefined, clientOptions);

let accessToken = Deno.env.get("SLACK_TOOLING_ACCESS_TOKEN");
let needRefresh = true;
if (accessToken) {
    try {
        await noTokenClient.auth.test({ token: accessToken });
        needRefresh = false;
    } catch (e) {
        needRefresh = true;
    }
}
if (needRefresh) {
    const refreshToken = Deno.env.get("SLACK_TOOLING_REFRESH_TOKEN");
    const response = await noTokenClient.tooling.tokens.rotate({
        refresh_token: refreshToken,
    });
    await Deno.writeTextFile(
        ".env",
        `SLACK_TOOLING_ACCESS_TOKEN=${response.token}\nSLACK_TOOLING_REFRESH_TOKEN=${response.refresh_token}\n`,
    );
    accessToken = response.token;
}

const client = new SlackAPIClient(accessToken, clientOptions);
const authTest = await client.auth.test();

const manifest: ManifestParams = {
    _metadata: { major_version: 2 },
    display_information: { name: "My Remote Function App" },
    settings: {
        org_deploy_enabled: true,
        interactivity: {
            is_enabled: true,
            // brew install cloudflare/cloudflare/cloudflared
            // cloudflared tunnel --url http://localhost:3000
            request_url: "https://willow-bay-eastern-const.trycloudflare.com/",
        },
        event_subscriptions: {
            // brew install cloudflare/cloudflare/cloudflared
            // cloudflared tunnel --url http://localhost:3000
            request_url: "https://willow-bay-eastern-const.trycloudflare.com/",
            bot_events: ["app_mention"],
        },
    },
    features: {
        bot_user: { display_name: "Remote App" },
    },
    oauth_config: {
        scopes: {
            bot: [
                "commands",
                "app_mentions:read",
                "chat:write",
                "chat:write.public",
            ],
        },
    },
    functions: {
        hello: {
            title: "Say hello",
            description: "Say hello",
            input_parameters: {
                properties: {
                    user_id: { type: "slack#/types/user_id" },
                },
                required: ["user_id"],
            },
            output_parameters: {
                properties: {
                    user_id: { type: "slack#/types/user_id" },
                },
                required: ["user_id"],
            },
        },
    },
};
const creation = await client.apps.manifest.create({ manifest });
// const deletion = await client.apps.manifest.delete({ app_id: creation.app_id! });

// $ npx wrangler generate my-remote-func
// $ cd my-remote-func
// $ npm i slack-cloudflare-workers@latest
// $ edit src/index.ts
// $ add .dev.vars
// $ wrangler dev --port 3000
