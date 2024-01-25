// sum.test.js
import { describe, expect, test } from "vitest"
import { returnFace, sum, mockingCase, removeDuplicates } from "./sum"

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
})
describe("remove duplicates in place and return new length", () => {
    test("[1, 2, 3, 3] modifies in place to [1, 2, 3] and return length 3", () => {
        expect(removeDuplicates([1, 2, 3, 3])).toBe(3)
    })

    test("[5, 5, 6, 6, 6, 7] modifies in place to [5, 6, 7] and return length 3", () => {
        expect(removeDuplicates([5, 5, 6, 6, 6, 7])).toBe(3)
    })
})
