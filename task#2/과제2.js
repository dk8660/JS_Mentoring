function gcd(a, b) {
  let tmp
  if(a < b) {
    tmp = a
    a = b
    b = tmp
  }
  while(b != 0) {
    tmp = a % b
    a = b
    b = tmp
  }
  return a
}
function lcm(a, b) {
  let GCD = gcd(a, b)
  let LCM = a * b / GCD
  return LCM
}

var a = Number(prompt("첫 번째 정수를 입력하세요:"))
var b = Number(prompt("두 번째 정수를 입력하세요:"))

console.log(`${a}와 ${b}의 최대공약수는 ${gcd(a, b)}, 최소공배수는 ${lcm(a, b)}입니다.`)