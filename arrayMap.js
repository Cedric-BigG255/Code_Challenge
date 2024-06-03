function hasContiguousSubarrayWithSum(arr, target) {
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        // Shrink the window as long as the current sum is greater than the target
        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        // Check if the current sum equals the target
        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
console.log(hasContiguousSubarrayWithSum(arr, target)); // Output: true
