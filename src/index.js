module.exports = function check(str, bracketsConfig) {
  let obj = Object.fromEntries(bracketsConfig);
  let keys = Object.keys(obj);  
  let array = str.split("");
  let stack = [];

  for (let i = 0; i < array.length; i++) {
    if (keys.includes(array[i]) && obj[stack[stack.length - 1]] !== array[i]) {
      stack.push(array[i]);
    } else {
      if (obj[stack[stack.length - 1]] === array[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
};
