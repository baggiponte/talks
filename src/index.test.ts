import assert from "node:assert/strict";
import { test } from "node:test";
import { destination } from "./index.ts";

test("keeps the path and the query under /talks", () => {
  const at = (path: string) => destination(new URL(path, "https://talks.baggiponte.com"));
  assert.equal(at("/"), "https://baggiponte.com/talks/");
  assert.equal(at("/pbg-polars/12?clicks=1"), "https://baggiponte.com/talks/pbg-polars/12?clicks=1");
  assert.equal(at("/logos/pydata.png"), "https://baggiponte.com/talks/logos/pydata.png");
});
