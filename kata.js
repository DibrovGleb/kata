


// Returnes new array with all positive numbers
/*function filter_list(l) {
  return l.filter(x => typeof x == 'number' && x > -1)
}

console.log(filter_list([1,2,'aasf','1','123',123, -1, 0, -2]))
*/

// smallest word in string
/*function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
  return s.split(' ').map(x => x.length).sort((a,b)=> a-b)[0]
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
console.log(findShort('Bitcoin DarkCoin Classic Steem Ripple Dogecoin Waves ProofOfWork Dogecoin LiteCoin BTC ProofOfWork Dogecoin Classic Classic Mine Lisk Steem Factom MadeSafeCoin'))
*/

// Duplicate symbols encode
/*function duplicateEncode(word){
    arr = [...word.toLowerCase()]
    return arr.map(x => (arr.filter(e => e == x)).length > 1 ? ')' : '(').join('')
}

console.log(duplicateEncode('Success'))
console.log(duplicateEncode('Supralapsarian'))
console.log(duplicateEncode('k(zOHOIOOuOOJR'))
*/

// Narcissistic number
/*function narcissistic(value) {
  let str = value.toString(), 
  strlen = str.length, 
  res = 0
  for (let i = 0; i < strlen; i++) res += Math.pow(str[i], strlen)
  return res == value ? true : false
}

module.exports = narcissistic;
*/