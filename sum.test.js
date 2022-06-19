const { reverseString, reverseStringOutOfPlace, mockingCase, flatten, searchInsert } = require("./sum")

// describes can nest n deep
// .only || .skip

describe("reverse string with loop", () => {
    test("abc becomes cba", () => {
        expect(reverseString("abc")).toEqual("cba")
    })
    test("aaff becomes ffaa", () => {
        expect(reverseString("aaff")).toEqual("ffaa")
    })
})

describe("reverse string with loop", () => {
    test("abc becomes cba", () => {
        expect(reverseStringOutOfPlace("abc")).toEqual("cba")
    })
})

describe("alternate lower > uppercase", () => {
    test("abcde becomes aBcDe", () => {
        expect(mockingCase("abcde")).toBe("aBcDe")
    })
    test("aaa bbb  ccc should be aAa bBb  CcC", () => {
        expect(mockingCase("aaa bbb  ccc")).toBe("aAa BbB  cCc")
    })
})

describe.skip("sum nested arrays to int using recurseFlatten()", () => {
    test("[1, 9, [1, 2]]", () => {
        expect(flatten([1, 9, [1, 2]])).toEqual(13)
    })
    test("[1, [3, [5, 9]]]", () => {
        expect(flatten([1, [3, [5, 9]]])).toEqual(18)
    })
    test("[[3, [5, 9]]]", () => {
        expect(flatten([[3, [5, 9]]])).toEqual(17)
    })
    test("[1, [3, 5], 39, [2, [3, 5]]]", () => {
        // currently sums 9
        expect(flatten([1, [3, 5], 39, [2, [3, 5]]])).toEqual(58)
    })
})

describe("return insert position for increasing order", () => {
    test("[1,3,5,6], 5 returns 2", () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2)
    })
    test("[1,3,5,6], 2 returns 1", () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1)
    })
    test("[1,3,5,6], 7 returns 4", () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4)
    })
    test("[1,3,5,6], 7 returns 4", () => {
        expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0)
    })
})
