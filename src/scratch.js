function input(name1, name2) {
  const fullInput = name1.concat(name2).toLowerCase();
  return fullInput;
}

input("Amber", "Nicole");

function convertToNums(input) {
  const arr = input.split("");
  return arr;
}

const example = convertToNums(input("Amber", "Nicole"));

function find_duplicate_in_array(array) {
  const count = {};
  const result = [];

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

const numbers = find_duplicate_in_array(example);
console.log(numbers);

function percentage(nums) {
  const reduce = [];
  if (nums.length === 2) {
    return nums;
  }
  for (let i = 0; nums.length > 0; i++) {
    console.log(i);
    reduce.push(nums.shift() + nums.pop());
    console.log(reduce);
  }
  percentage(reduce);
}
// if(reduce.length === 2){
// return reduce
// }
// return percentage(reduce)
// }
percentage(numbers);
