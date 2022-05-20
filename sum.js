function sum(a, b) {
    return a + b
}
module.exports = {
    sum,
    rearrangeInts,
    returnTargetIdx,
    removeEvenNums,
    intersect,
    highestWordCount,
    countStrings,
    firstUniqChar,
}

function returnTargetIdx(arrayOfInts, targetIdx) {
    return arrayOfInts[targetIdx] ? arrayOfInts[targetIdx] : "error"
}

function removeEvenNums(arrayofInts, checkOddOrEven) {
    if (checkOddOrEven === "odd") {
        return arrayofInts.filter((integer) => integer % 2 !== 0 || integer === 0)
    } else if (checkOddOrEven === "even") {
        return arrayofInts.filter((integer) => integer % 2 == 0 && integer !== 0)
    }
}

function intersect(nums1, nums2) {
    let counterObject1 = {}
    let counterObject2 = {}
    let arrayToReturn = []

    nums1.forEach((num) => {
        counterObject1[num] ? (counterObject1[num] += 1) : (counterObject1[num] = 1)
    })
    nums2.forEach((num) => {
        counterObject2[num] ? (counterObject2[num] += 1) : (counterObject2[num] = 1)
    })

    Object.keys(counterObject1).forEach((key) => {
        if (key in counterObject2) {
            for (var i = 0; i < Math.min(counterObject1[key], counterObject2[key]); i++) {
                arrayToReturn.push(parseInt(key))
            }
        }
    })
    return arrayToReturn
}

function countStrings(arrayOfStrings) {
    let counterObject = {}
    arrayOfStrings.forEach((str) => {
        counterObject[str] ? (counterObject[str] += 1) : (counterObject[str] = 1)
    })
    return counterObject
}

// is there a way to change the test.jest error messages???

function firstUniqChar(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return s.indexOf(s[i])
        }
    }
    return -1
}

function highestWordCount(sentences) {
    let longest = 0
    sentences.forEach((sentence) => {
        let wordCount = sentence.split(" ").length
        if (wordCount > longest) {
            longest = wordCount
        }
    })
    return longest
}

function rearrangeInts(int) {
    let sortedArray = Array.from(String(int)).sort((a, b) => {
        return b - a
    })
    return Number(sortedArray.join(""))
}
