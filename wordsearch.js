// const wordSearch = (letters, word) => {
//     const horizontalJoin = letters.map(ls => ls.join(''))
//     for (l of horizontalJoin) {
//         if (l.includes(word)) return true
//     }
// }
/////////////////////////////////////////



let arr = [];
let vertical;
let ans = false;
  
const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l === word) {
      return true;
    }
  }
  
  for (let i = 0; i < letters.length; i++) {
    for (let z = 0; z < letters[i].length; z++) {
      if (!Array.isArray(arr[i])) {
        arr[i] = [];
        arr[i].push(letters[z][i]);
      } else {
        arr[i].push(letters[z][i]);
      }
    }
  }
  vertical = arr.map(arr => arr.join(''));
  // console.log(vertical)
  for (let words of vertical) {
    //console.log(words)
    if (words === word) {
      console.log(words);
      return true;
    }
  } return ans;
};

console.log(wordSearch([['a', 'a', 'a'], ['a', 'e', 'e'], ['d', 'e', 'n']], 'aaa'));

module.exports = wordSearch;