function sum(a, b) {
    return a + b
}
module.exports = { sum, returnTargetIdx, replaceElement }

function returnTargetIdx(arrayOfInts, targetIdx) {
    return arrayOfInts[targetIdx] ? arrayOfInts[targetIdx] : "error"
}

function replaceElement(arrayOfInts) {
    for (var i = 0; i < arrayOfInts.length; i++) {
        console.log(arrayOfInts[i])
    }
}
