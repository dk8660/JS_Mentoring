let grade = prompt("학년")
let score = prompt("점수")

if(grade === 4) {
  if(score >= 70)
    console.log(`합격입니다.`)
  else if(score > 100 && score < 0)
    console.log(`점수가 잘못되었습니다.`)
  else
    console.log(`불합격입니다.`)
}
else
  if(score >= 70)
  console.log(`합격입니다.`)
  else if(score > 100 && score < 0)
  console.log(`점수가 잘못되었습니다.`)
  else
    console.log(`불합격입니다.`)
