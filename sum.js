function sum(a, b) {
    return a + b
}
module.exports = { sum, returnTargetIdx }

function returnTargetIdx(arrayOfInts, targetIdx) {
    return arrayOfInts[targetIdx] ? arrayOfInts[targetIdx] : "error"
}
