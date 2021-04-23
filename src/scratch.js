export function input(name1, name2) {
  const fullInput = name1.concat(name2).toLowerCase();
  return fullInput;
}

// input("Nathan", "Caitlin");

export function convertToChars(input) {
  const arr = input.split("");
  return arr;
}

// const example = convertToChars(input("Nathan", "Caitlin"));

export function find_duplicate_in_array(array) {
  const count = {};
  // const result = [];

  array.forEach((item) => {
    if (count[item]) {
      count[item] += 1;
      return;
    }
    count[item] = 1;
  });

  // console.log(count)
  const nums = Object.values(count);
  console.log(nums);
  return nums;
}

// const numbers = find_duplicate_in_array(example);
// console.log(numbers);

export function percentage(nums) {
  const reduce = [];
  if (nums.length === 2) {
    console.log("two", nums);
    return nums;
  } else {
    if (nums.length % 2 !== 0) {
      for (let i = 0; nums.length > 1; i++) {
        // console.log(i);
        reduce.push(nums.shift() + nums.pop());
        console.log("odd", reduce);
      }
      reduce.push(nums[0]);
      console.log("odd", reduce);
      return percentage(reduce);
    } else {
      for (let i = 0; nums.length > 0; i++) {
        // console.log(i);
        reduce.push(nums.shift() + nums.pop());
        console.log("even", reduce);
      }
      return percentage(reduce);
    }
  }
}
// const result = percentage(numbers);
// console.log(result.join("") + "%");
