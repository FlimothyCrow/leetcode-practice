// sum.test.js
import { describe, expect, test } from "vitest"
import { returnFace, sum, mockingCase, removeDuplicates, differenceOfSums, isPalindrome } from "./sum"

test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3)
})

test("Card{ face: 5, suit: 'diamonds' } should return 5", () => {
    expect(returnFace({ face: 5, suit: "diamonds" })).toBe(5)
})
describe("mockingCase tests", () => {
    test("abc should be aBc", () => {
        expect(mockingCase("abc")).toBe("aBc")
    })

    test("abc def ghi should be aBc DeF gHi", () => {
        expect(mockingCase("abc def ghi")).toBe("aBc DeF gHi")
    })

    test("123", () => {
        expect(mockingCase("123")).toBe("123")
    })
})
describe("remove duplicates in place and return new length", () => {
    test("[1, 2, 3, 3] modifies in place to [1, 2, 3] and return length 3", () => {
        expect(removeDuplicates([1, 2, 3, 3])).toBe(3)
    })

    test("[5, 5, 6, 6, 6, 7] modifies in place to [5, 6, 7] and return length 3", () => {
        expect(removeDuplicates([5, 5, 6, 6, 6, 7])).toBe(3)
    })
})

describe("returns the difference between m-divisible ints betwen 1-n and non-m-divisible ints between 1-m ", () => {
    test("[1, 2, 4, 5, 7, 8, 10] - [3, 6, 9] = 19", () => {
        expect(differenceOfSums(10, 3)).toBe(19)
    })
    test("[1, 2, 3, 4, 5] - [] = 15", () => {
        expect(differenceOfSums(5, 6)).toBe(15)
    })

})

describe("returns true if a number is palindromic, else returns false", () => {
    test("979 should return true", () => {
        expect(isPalindrome(979)).toBe(true)
    })
    test("456 should return false", () => {
        expect(isPalindrome(456)).toBe(false)
    })
    test("456 should return false", () => {
        expect(isPalindrome(-121)).toBe(false)
    })
    test("1221 should return true", () => {
        expect(isPalindrome(1221)).toBe(true)
    })
})
