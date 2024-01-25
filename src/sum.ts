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
            console.log("firstIdx is " + nums[firstIdx] + " and secondIdx is " + nums[secondIdx])
            if (nums[firstIdx] == nums[secondIdx]) {
                deleteCounter++
                console.log("deleteCounter = " + deleteCounter)
            }
        }
        console.log(`removing ${deleteCounter} at ${secondIdx}`)
        nums.splice(firstIdx + 1, deleteCounter)
        console.log(`${nums} new length ${nums.length}`)
    }
    return nums.length
    // could we return the finished splice? it returns final length, might skip the .length
}
