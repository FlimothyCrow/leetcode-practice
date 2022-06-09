const { longestCommonPrefix, reverseString, reverseStringOutOfPlace, mockingCase } = require("./sum")

// describes can nest n deep
// .only || .skip

describe("find longest common prefix in arrayOfStrings", () => {
    test("each string starts with fl, return fl", () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl")
        // ["flow", "flower", "flight"]
    })
    test("no common prefix, return empty string", () => {
        expect(longestCommonPrefix(["flow", "thing", "cheese"])).toEqual("")
    })
    test("['a'] should return empty string", () => {
        expect(longestCommonPrefix(["a"])).toEqual("a")
    })
})

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
        expect(mockingCase("aaa bbb  ccc")).toBe("aAa bBb  CcC")
    })
})
