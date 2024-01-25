const { isPalindrome } = require("./sum")
import { expect, test } from "vitest"

// describes can nest n deep
// .only || .skip

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
