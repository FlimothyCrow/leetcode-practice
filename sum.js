module.exports = {
    longestCommonPrefix,
    reverseString,
    reverseStringOutOfPlace,
    mockingCase,
    sum,
}

function sum(int0, int1) {
    return int0 + int1
}

function longestCommonPrefix(strs) {
    let sortedStrs = strs.sort((a, b) => a.length - b.length)
    let strToReturn = ""
    if (strs.length === 1) {
        return strs[0]
    }
    loop1: for (var i = 0; i < sortedStrs[0].length; i++) {
        let targetChar = sortedStrs[0][i]
        loop2: for (var k = 1; k < sortedStrs.length; k++) {
            if (targetChar === sortedStrs[k][i]) {
                if (k === sortedStrs.length - 1) {
                    strToReturn += targetChar
                }
            } else {
                return strToReturn
            }
        }
    }
    return strToReturn
}

function reverseString(str) {
    str = str.split("")
    let length = str.length
    for (var i = 0; i < str.length / 2; i++) {
        let last = str[length - i] // "c" > "abc"
        str[length - i] = str[i] // str[2] = "a" > "aba"
        str[i] = last // "c" > "cba"
    }
    return str.join("")
}

function reverseStringOutOfPlace(str) {
    let orderedString = ""
    for (var i = 0; i < str.length; i++) {
        orderedString = str[i] + orderedString
        //orderedString = replaceCharAtIdx(str, str[i], i)
    }
    return orderedString
}

function mockingCase(str) {
    let accumString = ""
    let shouldBeLowerCase = true
    str.split("").forEach((char) => {
        shouldBeLowerCase ? (accumString += char.toLowerCase()) : (accumString += char.toUpperCase())
        shouldBeLowerCase = !shouldBeLowerCase
    })
    return accumString
}
