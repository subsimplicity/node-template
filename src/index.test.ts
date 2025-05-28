import { describe, expect, test } from "bun:test";
import { handler } from "./index";

describe("handler", () => {
  test("should return 'Welcome to Bun!'", async () => {
    const response = handler();
    const text = await response.text();
    expect(text).toBe("Welcome to Bun!");
    expect(response.status).toBe(200);
  });
});
