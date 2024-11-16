function addUpTo(nums, target) {
    for (let ptr1 = 0; ptr1 < nums.length; ptr1++) {
        let numToFind = target - nums[ptr1];
        for (let ptr2 = ptr1 + 1; ptr2 < nums.length; ptr2++) {
            if (numToFind === nums[ptr2]) {
                return [ptr1, ptr2];
            }
        }
    }
    return null;
}
console.log(addUpTo([1, 3, 7, 9, 2], 11));
  