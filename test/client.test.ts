import { assert, test, describe, expect } from "vitest";
import {
  SlackAPIClient,
  SlackAPIConnectionError,
  SlackAPIError,
} from "../src/index";

describe("SlackAPIClient", () => {
  test("api.test", async () => {
    const client = new SlackAPIClient(undefined, { logLevel: "DEBUG" });
    const response = await client.api.test();
    assert.equal(response.error, undefined);
  });

  describe("auth.test w/ {throwSlackAPIError: true}", async () => {
    test("invalid_auth error as a SlackAPIError", async () => {
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
      });
      const rejects = expect(client.auth.test()).rejects;
      rejects.toThrowError(SlackAPIError);
      rejects.toThrowError(
        'Failed to call auth.test due to invalid_auth: {"ok":false,"error":"invalid_auth","headers":{}}',
      );
    });
  });

  describe("auth.test w/ {throwSlackAPIError: false}", async () => {
    test("invalid_auth error", async () => {
      const client = new SlackAPIClient(undefined, {
        logLevel: "DEBUG",
        throwSlackAPIError: false,
      });
      const response = await client.auth.test();
      assert.equal(response.error, "not_authed");
    });
    test("invalid_auth error", async () => {
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
        throwSlackAPIError: false,
      });
      const response = await client.auth.test();
      assert.equal(response.error, "invalid_auth");
    });
  });

  describe("files.uploadV2 w/ {throwSlackAPIError: true}", async () => {
    test("invalid_auth error as a SlackAPIError", async () => {
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
      });
      const rejects = expect(
        client.files.uploadV2({
          content: "foo",
          filename: "foo.txt",
        }),
      ).rejects;
      rejects.toThrowError(SlackAPIError);
      rejects.toThrowError(
        'Failed to call files.getUploadURLExternal due to invalid_auth: {"ok":false,"error":"invalid_auth","headers":{}}',
      );
    });
  });
  describe("files.uploadV2 w/ {throwSlackAPIError: false}", async () => {
    test("invalid_auth error as a SlackAPIError", async () => {
      const client = new SlackAPIClient("xoxb-invalid", {
        logLevel: "DEBUG",
        throwSlackAPIError: false,
      });
      const response = await client.files.uploadV2({
        content: "foo",
        filename: "foo.txt",
      });
      assert.equal(response.error, "invalid_auth");
    });
  });

  test("connection error (status: 404)", async () => {
    const client = new SlackAPIClient("xoxb-invalid", {
      logLevel: "DEBUG",
      baseUrl: "https://httpbin.org/status/404",
    });
    const rejects = expect(client.auth.test()).rejects;
    rejects.toThrowError(SlackAPIConnectionError);
    rejects.toThrowError(
      "Failed to call auth.test (status: 404, body: ><p>The requested URL was not found on the server.  If you entered the URL manually please check your spelling and try again.</p>)",
    );
  });

  test("connection error (type error)", async () => {
    const client = new SlackAPIClient("xoxb-invalid", {
      logLevel: "DEBUG",
      baseUrl: "http://localhost:8765/",
    });
    const rejects = expect(client.auth.test()).rejects;
    rejects.toThrowError(SlackAPIConnectionError);
    rejects.toThrowError(
      "Failed to call auth.test (cause: TypeError: fetch failed)",
    );
  });
});
