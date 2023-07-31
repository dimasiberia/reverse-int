module.exports = function reverse (n) {
let str = String(n).replace("-",'');
let size = str.length;
let answer = '';
for(let i = 0; size-1 >= i; size--){
answer += str[size-1];
}
return answer;
}
