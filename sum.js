function sum(a, b) {
    return a + b
}
module.exports = { sum, returnTargetIdx, removeEvenNums }

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

// is there a way to change the test.jest error messages???
