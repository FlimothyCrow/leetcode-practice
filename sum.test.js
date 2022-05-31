const {
    sum,
    returnTargetIdx,
    removeEvenNums,
    intersect,
    countStrings,
    firstUniqChar,
    highestWordCount,
    rearrangeInts,
    returnSum,
} = require("./sum")

// describes can nest n deep
// .only || .skip

describe("add two arguments", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3)
    })

    test("adds 2 + 2 to equal 4", () => {
        expect(sum(2, 2)).toBe(4)
    })
})

describe("return last element from list", () => {
    test("should return 4 from array", () => {
        expect(returnTargetIdx([1, 2, 3, 4], 0)).toBe(1)
    })
    test("should return error for out-of-length index", () => {
        expect(returnTargetIdx([1, 2, 3], 8)).toBe("error")
    })
})

describe("remove odd and even numbers and zero", () => {
    test("even numbers should be removed", () => {
        expect(removeEvenNums([3, 2, 5, 4, 0, 7], "odd")).toEqual([3, 5, 0, 7])
    })
    test("odd numbers and zeros should be removed", () => {
        expect(removeEvenNums([3, 2, 5, 4, 0, 7], "even")).toEqual([2, 4])
    })
})

describe("return array of all intersections", () => {
    test("each array contains 0 and 7, return [0, 7]", () => {
        expect(intersect([4, 0, 7], [3, 5, 0, 7])).toEqual([0, 7])
    })
    test("both contain two 4s and one 7, return [4, 4, 7]", () => {
        expect(intersect([4, 4, 7], [4, 5, 4, 4, 7])).toEqual([4, 4, 7])
    })
})

describe("count occurrences of strings", () => {
    test("1 apples, 2 oranges, 1 fruit", () => {
        expect(countStrings(["apples", "oranges", "oranges", "fruit"])).toEqual({ apples: 1, oranges: 2, fruit: 1 })
    })
})

describe("return the index of the first unique character", () => {
    test("c doesn't repeat, so return its index [4]", () => {
        expect(firstUniqChar("aabbce")).toEqual(4)
    })
    test("no repeating characters, return -1", () => {
        expect(firstUniqChar("aabbee")).toEqual(-1)
    })
})

describe("return the highest word count", () => {
    test("the longest string has 4 words, return 4", () => {
        expect(highestWordCount(["aaa", "a gief five", "three two one zero"])).toEqual(4)
    })
    test("the longest string has 3 words, return 3", () => {
        expect(highestWordCount(["aaa", "a bij eke", "five"])).toEqual(3)
    })
})

describe("rearrange integers to return highest value", () => {
    test("rearrange 295 and return 592", () => {
        expect(rearrangeInts(295)).toEqual(952)
    })
    test("rearrange 222 and return 222", () => {
        expect(rearrangeInts(222)).toEqual(222)
    })
    test("rearrange 3 and return 3", () => {
        expect(rearrangeInts(3)).toEqual(3)
    })
    test("rearrange 5001 and return 5100", () => {
        expect(rearrangeInts(5001)).toEqual(5100)
    })
})

describe("use reduce to sum even numbers", () => {
    test("2 + 4 = return 6", () => {
        expect(returnSum([2, 4, 3, 5])).toEqual(6)
    })
})
