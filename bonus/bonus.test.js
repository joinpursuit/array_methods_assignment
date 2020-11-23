// Much help and code from: https://github.com/souiukoto/javascript-test-generator/tree/master/specs
const { largestNum, oddSum, transpose } = require("./bonus.js");
const { describe, test, expect, beforeEach } = require("@jest/globals");
const { spyOn } = require("jest-mock");

describe("largestNum", () => {
  test("returns the largest number in an array", () => {
    expect(largestNum([1, 2, 3])).toBe(3);
    expect(largestNum([3, 2, 1])).toBe(3);
    expect(largestNum([1, 5, 3, 2])).toBe(5);
  });
});

describe("oddSum", () => {
  test("returns the sum of all odd numbers", () => {
    expect(oddSum([1, 2, 3])).toBe(4);
    expect(oddSum([2, 4])).toBe(0);
    expect(oddSum([1, 5, 3, 2])).toBe(9);
  });
});


describe("#transpose", () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const small_arr = [
    [1, 2],
    [3, 4],
  ];
  const rect_arr = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  const tall_rect_arr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  it("should transpose a matrix", () => {
    expect(transpose(arr)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  it("should transpose a matrix of a different size", () => {
    expect(transpose(small_arr)).toEqual([
      [1, 3],
      [2, 4],
    ]);
  });

  it("should transpose a rectangular matrix", () => {
    expect(transpose(rect_arr)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });

  it("should transpose a different rectangular matrix", () => {
    expect(transpose(tall_rect_arr)).toEqual([
      [1, 3, 5],
      [2, 4, 6],
    ]);
  });

  it("should not modify the original", () => {
    transpose(small_arr);
    expect(small_arr).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});


describe("Array#myForEach", () => {
  const callback = (x) => res.push(2 * x);
  const callback2 = (x, i) => res.push(i);
  array = [1, 2, 3];

  test("it passes each element into a callback", () => {
    res = [];
    array.myForEach(callback);
    expect(res).toEqual([2, 4, 6]);
  });

  test("it passes each index into a callback", () => {
    res = [];
    array.myForEach(callback2);
    expect(res).toEqual([0, 1, 2]);
  });

  test("returns undefined", () => {
    expect(array.myForEach(callback)).toBe(undefined);
  });

  test("does not alter original array", () => {
    expect(array).toEqual([1, 2, 3]);
  });

  test("does not use the built in forEach", () => {
    const funcString = array.myForEach.toString();
    expect(funcString.includes("forEach")).toBe(false);
  });
});

describe("Array#myMap", () => {
  beforeEach(() => {
    a = [1, 2, 3];
  });

  test("it calls a callback on each element and returns a new array", () => {
    const callback = (x) => 2 * x;
    expect(a.myMap(callback)).toEqual([2, 4, 6]);
  });

  test("it passes each index into a callback", () => {
    const callback = (_, i) => i;
    expect(a.myMap(callback)).toEqual([0, 1, 2]);
  });

  test("does not alter original array", () => {
    const callback = (x) => 2 * x;
    expect(a.myMap(callback)).toEqual([2, 4, 6]);
    expect(a).toEqual([1, 2, 3]);
  });

  test("does not use the built in map", () => {
    const funcString = array.myMap.toString();
    expect(funcString.includes("map")).toBe(false);
  });

  test("uses myForEach", () => {
    const funcString = array.myMap.toString();
    expect(funcString.includes("myForEach")).toBe(true);
  });
});

describe("Array#myFilter", () => {
  beforeEach(() => {
    a = [1, 2, 3];
  });

  it("It correctly selects elements according to the passed in block", () => {
    const callback = (x) => x > 1;
    expect(a.myFilter(callback)).toEqual([2, 3]);
  });

  it("It returns an empty array if there are no matches", () => {
    const callback = (x) => x === 4;
    expect(a.myFilter(callback)).toEqual([]);
  });
});

describe("Array#myEvery", () => {
  beforeEach(() => {
    a = [2, 4, 6];
  });

  it("returns true if all elements match the block", () => {
    const callback = (x) => x % 2 === 0;
    expect(a.myEvery(callback)).toBe(true);
  });

  it("returns false if not all elementes match the block", () => {
    const callback = (x) => x % 3 === 0;
    expect(a.myEvery(callback)).toBe(false);
  });
});


describe("Array#myReduce", () => {
  let myArray;
  const noOp = (accum, el) => accum;

  const spy = {
    sum: (accum, el) => accum + el,
  };

  it("works with a sum callback and no initialValue", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(spy.sum)).toEqual(10);
  });

  it("works with a sum callback and initialValue", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(spy.sum, 5)).toEqual(15);
  });

  it("works with a multiplier callback", () => {
    myArray = [4, 4, 4];
    const times = (accum, el) => accum * el;

    expect(myArray.myReduce(times)).toEqual(64);
  });

  it("uses the first item as the accumulator if no initialValue", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp)).toEqual(1);
  });

  it("uses the initialValue as accumulator if provided", () => {
    myArray = [1, 2, 3, 4];
    expect(myArray.myReduce(noOp, "cat")).toEqual("cat");
  });

  it("does not call Array.prototype.reduce", () => {
    myArray = [1, 2, 3, 4];
    jest.spyOn(myArray, "reduce");

    myArray.myReduce(spy.sum);

    expect(myArray.reduce).not.toHaveBeenCalled();
  });
});

describe("Array#myJoin", () => {
  beforeEach(() => {
    a = ["a", "b", "c", "d"];
  });

  it("joins an array if no argument is passed", () => {
    expect(a.myJoin()).toEqual("a,b,c,d");
  });

  it("joins an array if an argument is passed", () => {
    expect(a.myJoin("$")).toEqual("a$b$c$d");
  });
});

describe("Array#mySlice", () => {
    beforeEach(() => {
        a = [1, 2, 3]
    })
    test("slices the array from the start index to the end index", () => {
        expect(a.mySlice(1, 2)).toEqual([2])
    })

    test("slices to the end of array when no second argument is passed", () => {
        expect(a.mySlice(1)).toEqual([2, 3])
    })

    test("returns an empty array when first argument is higher", () => {
        expect(a.mySlice(2, 1)).toEqual([]);
    })

    test("slices to the end of the array when second argument is greater than length", () => {
        expect(a.mySlice(1, 10)).toEqual([2, 3])
    })

    test("doesn't call built in slice", () => {
        jest.spyOn(a, "slice");
        a.mySlice(0);
        expect(a.slice).not.toHaveBeenCalled();
    })
})

describe("Array#myFlatten", () => {
  it("Flattens arrays correctly", () => {
    const array = [1, 2, 3, [4, [5, 6]], [[[7]], 8]];
    expect(array.myFlatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});