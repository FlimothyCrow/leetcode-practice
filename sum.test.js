const { sum, returnTargetIdx } = require("./sum")

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
})
