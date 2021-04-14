import { countVowels, isHaiku, countDips } from "../src/haiku-checker.js";

describe("countVowels", () => {
  test("it will return the number of vowels, including y", () => {
    expect(countVowels("banana")).toEqual(3);
  });
});

describe("isHaiku", () => {
  test("it will return false if number of vowels < 17", () => {
    expect(isHaiku("this is haiku")("my attempt at a")("this is haiku")).toEqual(false);
  });
});

describe("countDips", () => {
  test("it will return the number of dipthongs in a string", () => {
    expect(countDips("straw boil ouch soy")).toEqual(3);
  });
});