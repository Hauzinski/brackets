module.exports = function check(str, bracketsConfig) {
  let array = str.split("");
  let stack = 0;
  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let e = 0; e < array.length; e++) {
      if (array[e] === bracketsConfig[i][0]) {
        stack += 1;
      } else if (array[e] === bracketsConfig[i][1]) {
        stack -= 1;
      }
      if (stack < 0) {
        return false;
      }
    }
    stack = 0;
  }
  return true;
};
