import { assert, test, describe } from "vitest";
import {
  SlackAPIError,
  SlackAPIResponse,
  TokenRotationError,
  WebhookError,
} from "../src/index";

describe("Errors", () => {
  test("SlackAPIError", async () => {
    const response: SlackAPIResponse = {
      ok: false,
      error: "invalid_auth",
      headers: {} as Headers,
    };
    const error = new SlackAPIError("auth.test", "invalid_auth", response);
    assert.equal(response.error, error.error);
  });
  test("TokenRotationError", async () => {
    const error = new TokenRotationError("error");
    assert.equal("error", error.message);
  });
  test("WebhookError", async () => {
    const error = new WebhookError(400, "error");
    assert.equal(400, error.status);
  });
});
