module.exports = {
    isPalindrome,
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

// normal recursive solutions use two functions

// add arrayOfNums[0] and accum, that becomes newAccum
// remove (shift) arrayOfNums[0]
// if arrayOfNums has length, return recursiveSum[shorterArray, newAccum]
// else return accum

function recurseFlatten(nestedArrays, accum) {
    let toAdd = 0
    if (nestedArrays[0]) {
        if (!Array.isArray(nestedArrays[0])) {
            toAdd = nestedArrays[0]
            nestedArrays.shift()
            return recurseFlatten(nestedArrays, accum + toAdd)
        } else {
            toAdd = nestedArrays[0] // [1, 2]
            nestedArrays.shift()
            return recurseFlatten(toAdd, accum)
        }
    } else {
        return accum
    }
}

function flatten(nestedArrays) {
    return recurseFlatten(nestedArrays, 0)
}

function searchInsert(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
        if (target < nums[0]) {
            return 0
        }
        if (target > nums[i]) {
            if (target <= nums[i + 1]) {
                return i + 1
            }
        }
    }
    return nums.length
}

// str.replace(/[^a-z0-9]/gi, '')

function isPalindrome(s) {
    let replaced = s.replace(/[^a-z0-9]/gi, "")
    for (var i = 0; i < Math.round(replaced.length / 2); i++) {
        // - 1 only for odd lengths!

        if (replaced[i].toLowerCase() != replaced[replaced.length - 1 - i].toLowerCase()) {
            return false
        }
    }

    return true
}
