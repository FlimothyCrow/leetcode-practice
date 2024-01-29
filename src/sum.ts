// sum.js
export function sum(a: number, b: number) {
    // return doesn't need to be typed, it's inferred from argument types
    return a + b
}

export interface Card {
    // template for any objects named
    face: number
    suit: string
}

export function returnFace(card: Card): number {
    return card.face
}

export function mockingCase(initialStr: string) {
    let accumString = ""
    let shouldBeLowerCase = true
    initialStr.split("").forEach((char) => {
        if (char === " ") {
            accumString += char
        } else {
            shouldBeLowerCase ? (accumString += char.toLowerCase()) : (accumString += char.toUpperCase())
            shouldBeLowerCase = !shouldBeLowerCase
        }
    })
    return accumString
    // abc returns aBc
}

export function removeDuplicates(nums: number[]) {
    for (var firstIdx = 0; firstIdx < nums.length; firstIdx++) {
        let deleteCounter = 0
        for (var secondIdx = firstIdx + 1; secondIdx < nums.length; secondIdx++) {
            if (nums[firstIdx] == nums[secondIdx]) {
                deleteCounter++
            }
        }
        nums.splice(firstIdx + 1, deleteCounter)
    }
    return nums.length
    // could we return the finished splice? it returns final length, might skip the .length
}

export function differenceOfSums(n: number, m: number) {
    let num1 = 0
    let num2 = 0
    for (var i = 1; i <= n; i++) {
        i % m == 0 ? (num1 += i) : (num2 += i)
    }
    return num2 - num1
}
