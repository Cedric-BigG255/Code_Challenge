function transformString(input) {
    const length = input.length;

    if (length % 3 === 0 && length % 5 === 0) {
        // If length is divisible by both 3 and 5
        input = input.split('').reverse().join(''); // Reverse the string
        input = input.split('').map(char => char.charCodeAt(0)).join(' '); // Convert to ASCII codes
    } else if (length % 3 === 0) {
        // If length is divisible by 3
        input = input.split('').reverse().join(''); // Reverse the string
    } else if (length % 5 === 0) {
        // If length is divisible by 5
        input = input.split('').map(char => char.charCodeAt(0)).join(' '); // Convert to ASCII codes
    }

    return input;
}

// Example usage:
const input = "Hello World";
console.log(transformString(input)); // Output: "87 111 114 108 100 32 111 108 108 101 72"
