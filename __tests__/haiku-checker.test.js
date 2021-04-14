import { countVowels } from "../src/haiku-checker.js";

describe("countVowels", () => {
  test("it will return the number of vowels, including y", () => {
    expect(countVowels("banana")).toEqual(3);
  });
});