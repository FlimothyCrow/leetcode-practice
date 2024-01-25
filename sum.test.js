const { isPalindrome, mockingCase } = require("./sum")
import { it, describe, expect, test } from "vitest"

// describes can nest n deep
// .only || .skip
describe("this method returns true if a string is a palindrome", () => {
    test("abcba returns true", () => {
        expect(isPalindrome("abcba")).toEqual(true)
    })
    test("aaab returns false", () => {
        expect(isPalindrome("aaab")).toEqual(false)
    })
    test("A man, a plan, a canal: Panama returns true", () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true)
    })
    test("race a car returns false", () => {
        expect(isPalindrome("race a car")).toEqual(false)
    })
})

describe("this method alternates lower and upper case in a string", () => {
    test("abc returns aBc", () => {
        expect(mockingCase("abc")).toEqual("aBc")
    })
    test("aaa bbb  ccc should be aAa bBb  CcC", () => {
        expect(mockingCase("aaa bbb  ccc")).toBe("aAa BbB  cCc")
    })
})
