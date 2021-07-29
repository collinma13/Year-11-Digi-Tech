function pupperAge () {
    let dogAge = prompt('What is your dogs age?')
  let dogyear = dogAge * 7
  dogAge = Number(dogAge)
  if (!isNaN(dogAge)) {
    if (dogAge > 0 && dogAge < 150) {
        alert('dogyear ' + dogyear )
    } else {
      alert('Error: Invalid age.')
    }
  } else {
    alert('Error: Bad input.')
  }
}

function gstCalculator () {
    let price = prompt('What is your price?')
  let gst = price * 1.15
  price = Number(price)
  if (!isNaN(price)) {
    if (price > 0 && price < 150) {
        alert('gst price ' + gst)
      } else { 
      alert('Error: Invalid price.')
      }
  } else {
    alert('Error: Bad input.')
  }
}

function lessonsToSeconds () {
    let lessons = prompt('What is the number of lessons?')
  let seconds = lessons * 3600
  lessons = Number(lessons)
  if (!isNaN(lessons)) {
    if (lessons > 0 && lessons < 150) {
        alert('seconds ' + seconds)
      } else { 
      alert('seconds ' + seconds)
      }
  } else {
    alert('Error: Bad input.')
  }
}

function lifeRemaining () {
let currentage = prompt('What is your current age?')
  let years = 82 - currentage 
currentage = Number(currentage)
if (typeof (currentage)== 'number') {
    if (currentage > 0 && currentage < 150) {
       alert('years ' + years )
      } else { 
      alert('Error: Invalid price.')
      }
  } else {
    alert('Error: Bad input.')
  }
}