const { returnOdds, findOddValues } = require("./sum")

// describes can nest n deep
// .only || .skip

describe("take array of ints and return array of odd ints", () => {
    test("return [3, 5]", () => {
        expect(returnOdds([2, 4, 3, 5])).toEqual([3, 5])
    })
})

describe("find the odd prices in the objects", () => {
    test("should return arrays of odd values [3, 5], [11, 7, 9]", () => {
        expect(
            findOddValues([
                {
                    id: 3,
                    name: 6,
                    price: 5,
                },
                {
                    id: 8,
                    name: 2,
                    price: 32,
                },
                {
                    id: 11,
                    name: 7,
                    price: 9,
                },
            ])
        ).toEqual([[3, 5], [], [11, 7, 9]])
    })
})
