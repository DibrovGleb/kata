/*snail = function(a) {
  r =[]
  for (let x = 0; x < array.length; x++) {
    for (let y = 0; y < array.length; y++) {
      
    }
  }
}
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9],[2,2,2,2,22]]), '[1, 2, 3, 6, 9, 8, 7, 4, 5]')
*/

//A format for expressing an ordered list of integers is to use a comma separated list of either 
//individual integers or a range of integers denoted by the starting integer separated 
//from the end integer in the range by a dash, '-'. 
//The range includes all integers in the interval including both endpoints. 
//It is not considered a range unless it spans at least 3 numbers.
// For example
/*solution1 = (list)=>list.reduce((acc,curr,i) => {
  if (i==0) return curr.toString();
  if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
  if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
  return acc+","+curr;
});
console.log('solution1\n',solution1([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "\n-6,-3-1,3-5,7-11,14,15,17-20")
function solution(l){
  arr=[]
  result =[]
  s=0
  for (let i = 0; i < l.length; i++) 
  (l[i] == l[i-1]+1 || l[i] == l[i-1]-1)==true && (l[i] == l[i+1]+1 || l[i]==l[i+1]-1)==true ? s==0 ? (s=1, arr.splice(i,1,l[i-1]+'-')) : 0 : s==1 ? (s=0, arr.push(l[i])) : arr.push(l[i]);
  arr.map((x,i,y)=> typeof y[i+1] == 'string' || typeof y[i-1] == 'string' ? 0 : typeof x == 'string' ? result.push(x+y[i+1]) : result.push(x))
  return result.join(',')
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "\n-6,-3-1,3-5,7-11,14,15,17-20")
*/

// Takes in a positive parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.
/*function persistence(num) {
  if(num <= 10) 0
  i = 0 
    while (num >= 10) num = [...num+''].reduce((x,y)=> x*y), i++
    return i
}

console.log(persistence(39), '39 -> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)')
console.log(persistence(999), '999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)')
console.log(persistence(4), '4 --> 0 (because 4 is already a one-digit number)')
console.log(persistence(38), '38 -> 2 (because 3*8 = 24, 2*4 = 8)')
console.log(persistence(1146719), '-> 3')
*/

// Finding a tribonacci arr with indicated step n or signature[1]
/*function tribonacci(signature,n){
  arr = signature[0]
  for (let i = 0; i < signature[1]-3; i++) {
    arr.push(arr.slice(i,i+3).reduce((x,y)=>x+y))
  }
  return arr.slice(0,signature[1])
}

console.log(tribonacci([[1,1,1], 10]),'[1,1,1,3,5,9,17,31,57,105]')
console.log(tribonacci([[0,0,1], 10]), '[0,0,1,1,2,4,7,13,24,44]')
console.log(tribonacci([[0,0,0], 1]), '[0]')
console.log(tribonacci([[0,0,0], 0]), '[]')
*/

// Calculation with functions
/*function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return (a) => { return a + b; }; }
function minus( b )     { return (a) => { return a - b; }; }
function times( b )     { return (a) =>{ return a * b; }; }
function dividedBy( b ) { return (a) =>{ return Math.floor(a / b); }; }

console.log(seven(times(five()))) // must return 35
console.log(four(plus(nine()))) // must return 13
eight(minus(three())); // must return 5
console.log(six(dividedBy(two()))); // must return 3
*/

// rgb to hex converter
/*function rgb(r, g, b) {
  return [r,g,b].map(x=> x <= 0 ? '00' : x >255 ? 'ff' : x <= 14 ? '0'+x.toString(16) : x.toString(16)).join('').toUpperCase()
}

console.log(rgb(255,   255,   255), 'FFFFFF')
console.log(rgb(300,   255,   255), 'FFFFFF')
console.log(rgb(0,   0,  0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(173, 255,  47), 'ADFF2F')
*/

// returned true if walk 10 blocks and back to start
/*function isValidWalk(walk) {
  //return walk.length != 10 ? false : walk.filter(e=> e === walk[0]).length != walk.length/2 ? false : true
  i = 0
  return walk.length != 10 ? false : walk.map(x=> x == 'n' || x == 'w' ? ++i : --i) //!= 0 ? false : true
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true')
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false')
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false')
console.log(isValidWalk(['n','n','n','n','s','s','n','n','n','s']), 'should return true')
*/

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