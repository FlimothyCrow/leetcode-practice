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
