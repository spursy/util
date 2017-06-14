function addDigitValue(previousValue, currentDigit, currentIndex, array) {
    var exponent = (array.length - 1) - currentIndex;
    var digitValue = currentDigit * Math.pow(10, exponent);
    return previousValue + digitValue;
}

var digits = [4, 1, 2, 5];

// Determine an integer that is computed from values in the array.
var result = digits.reduce(addDigitValue, 0);

console.log(result);
// Output: 4125