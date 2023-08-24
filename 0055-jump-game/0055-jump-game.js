/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let zero = 0;

  if (nums.length === 1) {
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    console.log("cur:", nums[i]);
    if (nums[i] === 0) {
      // 0이면 zero 증가
      zero++;
    }

    if (zero && nums[i + 1] !== 0) {
      let j = i - zero;

      while (j >= -1) {
        console.log("cur:", nums[i], "back:", nums[j], "zero:", zero);
        // 위치에 0이 있으면 return false
        // if (nums[j] === 0 || j === -1)
        if (j === -1)
          return false;

        if (nums[j] > zero || j + nums[j] === nums.length - 1) {
          console.log(j + zero);
          // zero 전 위치에 숫자가 zero보다 커야함
          zero = 0;
          break;
        } else  {
          // zero 전 위치의 숫자가 zero보다 작다면 zero++ j--
          zero++;
          j--;
        }
      }
    }
  }

  return true;
};