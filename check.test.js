const { sum } = require("./sum")

// describes can nest n deep
// .only || .skip

describe("add two arguments", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3)
    })
})
