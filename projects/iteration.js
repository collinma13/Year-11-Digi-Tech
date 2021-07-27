function counting () {
let number = 1
  while (number <= 10) {
  alert(number) 
    number +=1
  }
}

function squareSeries () {
let numberEnd = prompt('End number?')
 let outputSeries = ' '
 let squareNumber = 1 
 
 while (squareNumber <= numberEnd) {
   outputSeries += squareNumber **2
   outputSeries += ', '
   squareNumber += 1
 }
 alert('squareSeries of ' + numberEnd + 'is ' + outputSeries)
}


function factorial () {
    let userInput = prompt('Pick a number to be multiplied?')
let facResult = userInput
let nextMul = userInput - 1 

while (nextMul > 1) {
  facResult = facResult * nextMul
  nextMul -= 1
} 

 alert(facResult + ' Is The End Result')
}

function fibonacci () {
    let firstNum = prompt('Give me a number?')
let output = ''
let currentNum = 1
let preNum = 1
while (currentNum < firstNum) {
    currentNum = currentNum + preNum
    preNum = currentNum - preNum
    output = output + currentNum + ','
}
alert('The finish number is ' + output)
}