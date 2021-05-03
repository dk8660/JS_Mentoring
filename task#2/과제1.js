function is_prime(n) {
  for(let i=2;i<n;i++) {
    if(n % i == 0)
      return false
  }
  return true
}

var input = prompt("숫자")

if(is_prime(input))
  console.log(`${input}는 소수입니다.`)
else
  console.log(`${input}는 소수가 아닙니다.`)
