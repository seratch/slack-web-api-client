import { assert, test, describe } from "vitest";
import { SlackAPIClient } from "../src/index";

describe("SlackAPIClient", () => {
  test("api.test", async () => {
    const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
    const response = await client.api.test();
    assert.equal(response.error, undefined);
  });
});
