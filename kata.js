// Counting Duplicates in str
/*function duplicateCount(text){
  text = text.toLowerCase().split('')
  return [...new Set(text.filter((v,i)=> text.indexOf(v) != i))].length
  //return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length
} 

console.log(duplicateCount('acdsdca'), 'acdsdca = 3')
console.log(duplicateCount(''), " '' = 0")
console.log(duplicateCount('indivisibility'), 'indivisibility = 1')
*/


// For example, if we run 9119 through the function, 811181 will come out,
// because 92 is 81 and 12 is 1. (81-1-1-81)
/*function squareDigits(num){
  return String(num).split('').map(x => x * x).join('')*1
}

console.log(squareDigits(9119))
*/

// reduce n to single output  16  -->  1 + 6 = 7
/*function digitalRoot(n) {
    let res = String(n).split('').map(Number).reduce((total,value)=> total +value,0)
    return res >= 10 ? digitalRoot(res) : res
    //return n%9;
}
console.log(digitalRoot(16))
console.log(digitalRoot(467))
*/

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