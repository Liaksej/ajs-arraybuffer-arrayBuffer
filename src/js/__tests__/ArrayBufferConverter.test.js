import { ArrayBufferConverter } from "../ArrayBufferConverter.js";
import { getBuffer } from "../arr.js";

test("testing working status of ArrayBufferConverter class", () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());
  expect(converter.toString()).toBe(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}'
  );
});
