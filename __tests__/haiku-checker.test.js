import { countVowels, isHaiku, countDips, endsWithE } from "../src/haiku-checker.js";

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

describe("endsWithE", () => {
  test("it will reduce syllable count if word ends in 'e' but not if word ends in 'le'", () => {
    expect(endsWithE("blue hue uncle bubble")).toEqual(-2)
  });
});