var int1 = prompt("첫 번째 정수를 입력하세요")
var int2 = prompt("두 번째 정수를 입력하세요")
var int3 = prompt("세 번째 정수를 입력하세요")

let int_array = [int1, int2, int3]

let max = int_array[0]
let min = int_array[0]
let sum = 0
let avr = 0

for(let i=0;i<int_array.length;i++) {
  if(max < int_array[i]) {
    max = int_array[i]
  }
  if(min > int_array[i]) {
    min = int_array[i]
  }
  sum += Number(int_array[i])
}

avr = sum / int_array.length

console.log(`최대값:${max}, 최소값:${min}, 합계:${sum}, 평균:${avr}`)