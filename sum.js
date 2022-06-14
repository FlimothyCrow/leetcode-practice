module.exports = {
    longestCommonPrefix,
    reverseString,
    reverseStringOutOfPlace,
    mockingCase,
    sum,
    recursiveSum,
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
        if (char === " ") {
            accumString += char
        } else {
            shouldBeLowerCase ? (accumString += char.toLowerCase()) : (accumString += char.toUpperCase())
            shouldBeLowerCase = !shouldBeLowerCase
        }
    })
    return accumString
}

function recursiveSum(arrayOfNums, accum) {
    // add next (always 0th) from arrayOfNums to accumulator
    let newAccum = (accum += arrayOfNums[0])
    // remove next / 0th from arrayOfNums so it can't be iterated twice
    arrayOfNums.shift()
    // if arrayOfNums has remaining ints, recurse the function
    // return recursiveSum with shortened array and increased accumulate
    if (arrayOfNums.length) {
        return recursiveSum(arrayOfNums, newAccum)
        // if arrayOfNums is shortened to [], return the final accumulate
    } else {
        return newAccum
    }
}

function sum(arrayOfNums) {
    return recursiveSum(arrayOfNums, 0)
    // this wrapper function prevents incorrect accum params being passed
    // it also allows recursiveSum() to be "called" without being exported / public
}

// normal recursive solutions use two functions

// add arrayOfNums[0] and accum, that becomes newAccum
// remove (shift) arrayOfNums[0]
// if arrayOfNums has length, return recursiveSum[shorterArray, newAccum]
// else return accum
