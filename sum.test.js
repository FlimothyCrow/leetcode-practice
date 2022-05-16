const { sum, returnTargetIdx, removeEvenNums } = require("./sum")

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
