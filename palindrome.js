exports.palindrome = (treshold) => {
    let max = 0;
    let result = [];
    for (i = treshold; i > 0; i--) {
        for (j = i; j > 0; j--) {
            let mulitple = j * i;
            if (isPalindrome(mulitple) && mulitple > max) {
                max = i * j;
                result = {"palindrome":max, "multiplier 1":i, "multiplier 2":j};
            }
        }
    }
    return result;
}

const isPalindrome = (i) => {
    i = i.toString();
    return i === i.split("").reverse().join("");
}