function count_digits(number) {
  let count = 0
  while(number % 10 != 0) {
    number /= 10
    number = Math.floor(number)
    count++
  }
  return count
}

var input = Number(prompt("숫자"))

console.log(`${input}의 자리수는 ${count_digits(input)}개 입니다.`)