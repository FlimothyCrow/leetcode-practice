// sum.js
export function sum(a: number, b: number) {
    // return doesn't need to be typed, it's inferred from argument types
    return a + b;
}

export interface Card {
    // template for any objects named
    face: number;
    suit: string;
}

export function returnFace(card: Card): number {
    return card.face;
}

export function mockingCase(initialStr: string) {
    let accumString = "";
    let shouldBeLowerCase = true;
    initialStr.split("").forEach((char) => {
        if (char === " ") {
            accumString += char;
        } else {
            shouldBeLowerCase
                ? (accumString += char.toLowerCase())
                : (accumString += char.toUpperCase());
            shouldBeLowerCase = !shouldBeLowerCase;
        }
    });
    return accumString;
    // abc returns aBc
}

export function removeDuplicates(nums: number[]) {
    for (var firstIdx = 0; firstIdx < nums.length; firstIdx++) {
        let deleteCounter = 0;
        for (
            var secondIdx = firstIdx + 1;
            secondIdx < nums.length;
            secondIdx++
        ) {
            if (nums[firstIdx] == nums[secondIdx]) {
                deleteCounter++;
            }
        }
        nums.splice(firstIdx + 1, deleteCounter);
    }
    return nums.length;
    // could we return the finished splice? it returns final length, might skip the .length
}

export function differenceOfSums(n: number, m: number) {
    let num1 = 0;
    let num2 = 0;
    for (var i = 1; i <= n; i++) {
        i % m == 0 ? (num1 += i) : (num2 += i);
    }
    return num2 - num1;
}

export function isPalindrome(x: string): boolean {
    const xHalfLength = Math.ceil(x.length / 2);

    for (let i = 0; i < xHalfLength; i++) {
        if (x[i] != x[x.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

export function longestPalindrome(s: string): string {
    if (s.length == 1) {
        return s;
    }

    let longestSubstring = s[0];

    // returns true if palindromic
    const isPalindromeLocal = (subString: string): boolean => {
        const xHalfLength = Math.ceil(subString.length / 2);

        for (let i = 0; i < xHalfLength; i++) {
            if (subString[i] != subString[subString.length - 1 - i]) {
                return false;
            }
        }

        return true;
    };

    for (let i = 0; i < s.length; i++) {
        for (let k = i + 1; k < s.length; k++) {
            const currentSubstring = s.substring(i, k + 1);
            // print substring
            console.log(`\n current substring = ${currentSubstring}`);

            // check if substring is palindrome
            if (isPalindromeLocal(currentSubstring)) {
                console.log(`\n ${currentSubstring} is a palindrome`);
                if (currentSubstring.length > longestSubstring.length) {
                    longestSubstring = currentSubstring;
                }
            }
        }
    }

    return longestSubstring;
}
