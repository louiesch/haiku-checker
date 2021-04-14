import { countVowels, isHaiku, countDips } from "../src/haiku-checker.js";

describe("countVowels", () => {
  test("it will return the number of vowels, including y", () => {
    expect(countVowels("banana")).toEqual(3);
  });
});

describe("isHaiku", () => {
  test("it will return false if number of vowels < 17", () => {
    expect(isHaiku("u u u u u")("a a a a a a a")("e e e e")).toEqual(false);
    expect(isHaiku("i i i i i")("i")("i i i i i i i")).toEqual(false);
    expect(isHaiku("i")("i i i i i i")("i i i i i")).toEqual(false);
    expect(isHaiku("this is haiku")("my attempt at a a a")("this is haiku")).toEqual(true);
  });
});

// describe("countDips", () => {
//   test("it will return a string")
// });