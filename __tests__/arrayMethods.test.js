const { describe, test, expect } = require("@jest/globals");
const {
  sumArray,
  zeroCount,
  plusTen,
  stringsOnly,
  onlyEvens,
  numbersOnly,
  isAllSame,
  isAllOdd,
  targetCount,
  counterObject,
  doubled,
  tripledAndLessThan20,
  divisibleBy,
  numberTimesIdx,
  arePositiveEvenAndNonZeroEnding,
  stringsAndCaps,
} = require("../problems/arrayMethods.js");

describe("sumArray", () => {
  test("sums an array of numbers", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([])).toBe(0);
    expect(sumArray([13, 2, 5, 5])).toBe(25);
  });
  test("uses forEach", () => {
    const funcString = sumArray.toString();
    expect(funcString.includes("forEach")).toBe(true);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("zeroCount", () => {
  test("returns the correct number of zeros in an arry", () => {
    expect(zeroCount([1, 2, 3])).toBe(0);
    expect(zeroCount([])).toBe(0);
    expect(zeroCount([13, 0, 5, 0])).toBe(2);
  });
  test("uses forEach", () => {
    const funcString = zeroCount.toString();
    expect(funcString.includes("forEach")).toBe(true);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("plusTen", () => {
  test("adds ten to every element in array", () => {
    expect(plusTen([1, 2, 3])).toEqual([11, 12, 13]);
    expect(plusTen([])).toEqual([]);
    expect(plusTen([13, 0, 5, 0])).toEqual([23, 10, 15, 10]);
  });
  test("uses map", () => {
    const funcString = plusTen.toString();
    expect(funcString.includes("map")).toBe(true);
    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("stringsOnly", () => {
  test("Only strings left in array. All non strings are converted to empty strings", () => {
    expect(stringsOnly(["a", 123, "b", "c", { name: "cat" }])).toEqual([
      "a",
      "",
      "b",
      "c",
      "",
    ]);
    expect(stringsOnly([])).toEqual([]);
  });
  test("uses map", () => {
    const funcString = stringsOnly.toString();
    expect(funcString.includes("map")).toBe(true);
    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});

describe("onlyEvens", () => {
  test("Only even numbers remain", () => {
    expect(onlyEvens([13, 0, 5, 0])).toEqual([0, 0]);
    expect(onlyEvens([1, 2, 3, 4, 5])).toEqual([2, 5]);
    expect(onlyEvens([])).toEqual([]);
  });
  test("uses filter", () => {
    const funcString = onlyEvens.toString();
    expect(funcString.includes("filter")).toBe(true);
    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});
describe("numbersOnly", () => {
  test("Only numbers remain", () => {
    expect(numbersOnly(["cat", 0, { hi: "corey" }, [], 2, -3])).toEqual([
      0,
      2,
      -3,
    ]);
    expect(numbersOnly(["cat", "dog"])).toEqual([]);
    expect(numbersOnly([1, 2])).toEqual([1, 2]);
    expect(numbersOnly([])).toEqual([]);
  });
  test("uses filter", () => {
    const funcString = numbersOnly.toString();
    expect(funcString.includes("filter")).toBe(true);
    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});
describe("isAllSame", () => {
  test("determins if all elements are identical", () => {
    expect(isAllSame(["cat", "cat", "cat", "cat"])).toBe(true);
    expect(isAllSame(["cat", "dog"])).toEqual(false);
    expect(isAllSame([0, 0, 0, 0])).toEqual(true);
    expect(isAllSame([0, 0, 0, 1])).toEqual(false);
    expect(isAllSame([])).toBe(true);
  });
  test("uses filter", () => {
    const funcString = isAllSame.toString();
    expect(funcString.includes("filter")).toBe(true);
    expect(funcString.includes("forEach")).toBe(false);
    expect(funcString.includes("push")).toBe(false);
    expect(funcString.includes("unshift")).toBe(false);
    expect(funcString.includes("for(")).toBe(false);
    expect(funcString.includes("while")).toBe(false);
  });
});
