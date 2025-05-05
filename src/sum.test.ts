// sum.test.js
import { describe, expect, test } from "vitest";
import {
    returnFace,
    sum,
    mockingCase,
    removeDuplicates,
    differenceOfSums,
    isPalindrome,
    longestPalindrome,
    containsDuplicate,
    updateTargetObject,
    sortTaskArray,
    missingNumber,
} from "./sum";

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("Card{ face: 5, suit: 'diamonds' } should return 5", () => {
    expect(returnFace({ face: 5, suit: "diamonds" })).toBe(5);
});
describe("mockingCase tests", () => {
    test("abc should be aBc", () => {
        expect(mockingCase("abc")).toBe("aBc");
    });

    test("abc def ghi should be aBc DeF gHi", () => {
        expect(mockingCase("abc def ghi")).toBe("aBc DeF gHi");
    });

    test("123", () => {
        expect(mockingCase("123")).toBe("123");
    });
});
describe("remove duplicates in place and return new length", () => {
    test("[1, 2, 3, 3] modifies in place to [1, 2, 3] and return length 3", () => {
        expect(removeDuplicates([1, 2, 3, 3])).toBe(3);
    });

    test("[5, 5, 6, 6, 6, 7] modifies in place to [5, 6, 7] and return length 3", () => {
        expect(removeDuplicates([5, 5, 6, 6, 6, 7])).toBe(3);
    });
});

describe("returns the difference between m-divisible ints betwen 1-n and non-m-divisible ints between 1-m ", () => {
    test("[1, 2, 4, 5, 7, 8, 10] - [3, 6, 9] = 19", () => {
        expect(differenceOfSums(10, 3)).toBe(19);
    });
    test("[1, 2, 3, 4, 5] - [] = 15", () => {
        expect(differenceOfSums(5, 6)).toBe(15);
    });
});

describe("returns true if a string is palindromic, else returns false", () => {
    test("aba should return true", () => {
        expect(isPalindrome("aba")).toBe(true);
    });
    test("aab should return false", () => {
        expect(isPalindrome("aab")).toBe(false);
    });
    test("' cdc' should return false", () => {
        expect(isPalindrome(" cdc")).toBe(false);
    });
    test("fkkf should return true", () => {
        expect(isPalindrome("fkkf")).toBe(true);
    });
});

describe("returns longest palindromic substring", () => {
    test("cbbd should return bb", () => {
        expect(longestPalindrome("cbbd")).toBe("bb");
    });
    test("aaaaa should return aaaaa", () => {
        expect(longestPalindrome("aaaaa")).toBe("aaaaa");
    });
    test("abc should return ''", () => {
        expect(longestPalindrome("abcde")).toBe("a");
    });
    test("abcc should return cc", () => {
        expect(longestPalindrome("abcc")).toBe("cc");
    });
    test("abc c should return ''", () => {
        expect(longestPalindrome("abc c")).toBe("c c");
    });
    test("things sgniht should return things sgniht", () => {
        expect(longestPalindrome("things sgniht")).toBe("things sgniht");
    });
    test("a should return a", () => {
        expect(longestPalindrome("a")).toBe("a");
    });
});

describe("returns true if [nums] contains any duplicates", () => {
    test("[1, 2, 1, 3] should return true", () => {
        expect(containsDuplicate([1, 2, 1, 3])).toBe(true);
    });
    test("[1, 2, 3] should return false", () => {
        expect(containsDuplicate([1, 2, 3])).toBe(false);
    });
    test("[] should return true", () => {
        expect(containsDuplicate([])).toBe(false);
    });
});

describe("updates target object in array with key:value as args", () => {
    test("any object with UUID = 238 should have its completed value flipped", () => {
        expect(
            updateTargetObject(
                [
                    { UUID: "545", color: "red", completed: false },
                    { UUID: "238", color: "blue", completed: true },
                ],
                "238"
            )
        ).toStrictEqual([
            { UUID: "545", color: "red", completed: false },
            { UUID: "238", color: "blue", completed: false },
        ]);
    });

    test("any object with UUID = 909 should have its completed value flipped", () => {
        expect(
            updateTargetObject(
                [
                    { UUID: "545", color: "red", completed: false },
                    { UUID: "238", color: "blue", completed: true },
                ],
                "909"
            )
        ).toStrictEqual([
            { UUID: "545", color: "red", completed: false },
            { UUID: "238", color: "blue", completed: true },
        ]);
    });
});

describe("array of objects is sorted by given key and order", () => {
    let arrayOfTasks = [
        { UUID: "238", title: "blue", completed: true },
        { UUID: "545", title: "red", completed: false },
        { UUID: "333", title: "green", completed: false },
    ];
    test("new array should be sorted ascending by title", () => {
        expect(sortTaskArray(arrayOfTasks, "title", true)).toStrictEqual([
            { UUID: "238", title: "blue", completed: true },
            { UUID: "333", title: "green", completed: false },
            { UUID: "545", title: "red", completed: false },
        ]);
    });
    test("new array should be sorted descending by title", () => {
        expect(sortTaskArray(arrayOfTasks, "title", false)).toStrictEqual([
            { UUID: "545", title: "red", completed: false },
            { UUID: "333", title: "green", completed: false },
            { UUID: "238", title: "blue", completed: true },
        ]);
    });
    test("new array should be sorted ascending by UUID", () => {
        expect(sortTaskArray(arrayOfTasks, "UUID", true)).toStrictEqual([
            { UUID: "238", title: "blue", completed: true },
            { UUID: "333", title: "green", completed: false },
            { UUID: "545", title: "red", completed: false },
        ]);
    });
    test("new array should be sorted ascending by UUID", () => {
        expect(sortTaskArray(arrayOfTasks, "UUID", false)).toStrictEqual([
            { UUID: "545", title: "red", completed: false },
            { UUID: "333", title: "green", completed: false },
            { UUID: "238", title: "blue", completed: true },
        ]);
    });
    test("new array should be sorted ascending by completed", () => {
        expect(sortTaskArray(arrayOfTasks, "completed", true)).toStrictEqual([
            { UUID: "545", title: "red", completed: false },
            { UUID: "333", title: "green", completed: false },
            { UUID: "238", title: "blue", completed: true },
        ]);
    });
    test("new array should be sorted ascending by completed", () => {
        expect(sortTaskArray(arrayOfTasks, "completed", false)).toStrictEqual([
            { UUID: "238", title: "blue", completed: true },
            { UUID: "545", title: "red", completed: false },
            { UUID: "333", title: "green", completed: false },
        ]);
    });
});

describe("returns missing number from range in array, 0 > n", () => {
    test("[0, 1, 3, 4] should return 2", () => {
        expect(missingNumber([0, 3, 4, 1])).toBe(2);
    });
    test("[1, 2, 3, 4] should return 2", () => {
        expect(missingNumber([1, 4, 2, 3])).toBe(0);
    });
    test("[0, 1] should return 2", () => {
        expect(missingNumber([0, 1])).toBe(2);
    });
});
// 0, 1, 3, 4
// 0, 1, 2, 3, 4
