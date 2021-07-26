function maoriMihi() {
  let mountain = prompt('What is your mountain?')
  let water = prompt('What is your river/ocean/lake/bay-harbour?')
  let vessel = prompt('What is your vessel?')
  let people = prompt('What is your people?')

  let hometown = prompt('What is your hometown?')
  let name = prompt('What is your full name?') 
  
  alert('Ko ' + mountain + 'te maunga\n' +
  'Ko ' + water + 'te awa/moana/roto/whanga\n' +
  'Ko ' + vessel + 'te waka\n' +
  'Ko ' + people + 'te iwi\n' +

  'Nō ' + hometown + 'au\n' +
  'Ko ' + name + ' tōku ingoa\n' +

  'Tēnā koutou\n' +
  'Tēnā koutou\n' +
  'Tēnā koutou, katoa.\n')
}

function nonMaoriMihi() {
  
}

function theRepeater() {
  let something = prompt ('Say something')
  something = Number(something)
  if(typeof something != 'number' ) {
    if (something != '') {
        alert (something)
    } else {    
        alert('Error: Invalid price.')
        }
    } else {
      alert('Error: Bad input.')
    }
}

function madLibs() {
  
}

function converstion() {
  let name = 'Mary'
  alert('We want to know if you like programming!')
  alert('Do you like programming ' + name + '?')
  let answer = prompt()
  alert('Great, you said ' + answer + '!')
  alert("Let's learn some code today.")
}