import { countVowels, isHaiku } from "../src/haiku-checker.js";

describe("countVowels", () => {
  test("it will return the number of vowels, including y", () => {
    expect(countVowels("banana")).toEqual(3);
  });
});

describe("isHaiku", () => {
  test("it will return false if number of vowels < 17", () => {
    expect(isHaiku("this is / my attempt at / not haiku")).toEqual(false);
    });
});