module.exports = function reverse (n) {
let size = String(n).replace("-",'').length;
let answer = '';
for(let i = size-1; i<size; i--){
answer += n[i];
}
return Number(answer);
}
