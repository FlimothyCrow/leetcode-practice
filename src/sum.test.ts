// sum.test.js
import { describe, expect, test } from "vitest";
import {
    returnFace,
    sum,
    mockingCase,
    updateTargetObject,
    sortTaskArray,
    fizzBuzz,
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

test("return array of strings starting from 1 > n with fizzBuzz logic", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    expect(fizzBuzz(6)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz"]);
    expect(fizzBuzz(15)).toEqual([
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz",
    ]);
});
