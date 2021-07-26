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
