/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const insertValueToNums1 = function (nums1, nums2, index, startIndex) {
  let endIndex = nums1.length - 1;

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (nums2[index] >= nums1[middleIndex - 1] && nums2[index] <= nums1[middleIndex]) {
      nums1.splice(middleIndex, 0, nums2[index]);
      startIndex = middleIndex + 1;
      break;
    }

    if (nums2[index] < nums1[middleIndex]) {
      endIndex = middleIndex - 1;
    } else if (nums2[index] > nums1[middleIndex]){
      startIndex = middleIndex + 1;
    }
  }

  return {nums1, startIndex};
}

var merge = function(nums1, m, nums2, n) {
  // nums1 = nums1.slice(0, m);
  // nums2 = nums2.slice(0, n);
  nums1.splice(m, nums1.length - m);

  if (n === 0) {
    return;
  }

  let startIndex = 0;
  for (let index = 0; index < n; index++) {
    console.log(nums2[index]);  
    if (nums1[nums1.length - 1] <= nums2[index] || nums1.length === 0) {
      // 제일 마지막이 nums2보다 크면 바로 push
      nums1.push(nums2[index]);
    } else if (nums1[0] >= nums2[index]) {
      // 제일 처음이 nums2보다 크면 바로 push
      nums1.splice(0, 0, nums2[index]);
    } else {
      const result = insertValueToNums1(nums1, nums2, index, startIndex);
      nums1 = result.nums1;
      startIndex = result.startIndex;
    }
  }

  console.log(nums1);
  return;
};