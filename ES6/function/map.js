// Define the callback function.
function threeChars(value, index, str) {
    // Create a string that contains the previous, current,
    // and next character.
    return str.substring(index - 1, index + 2);
}

// Create a string.
var word = "Thursday";

// Apply the map method to the string.
// Each array element in the result contains a string that
// has the previous, current, and next character.
// The commented out statement shows an alternative syntax.
var result = [].map.call(word, threeChars);
// var result = Array.prototype.map.call(word, threeChars);

console.log(result);

// Output:
// Th,Thu,hur,urs,rsd,sda,day,ay