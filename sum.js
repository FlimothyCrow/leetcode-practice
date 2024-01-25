module.exports = {
    isPalindrome,
    mockingCase,
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
    // abc returns aBc
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
