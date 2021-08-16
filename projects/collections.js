// ##################################
// ##### ----- Future Job ----- #####
// ##################################

const jobs = [
  'astronaut',
  'firefighter',
  'police officer',
  'judge',
  'phsiotherapist',
  'farmer',
]

function futureJob() {
  let index = jobs[Math.floor(Math.random() * jobs.length)]

  alert('Your future job will be ' + index)
}

// ####################################
// ##### ----- Subject List ----- #####
// ####################################

let subjects = [
  'English',
  'Digital Technology',
  'Graphics',
  'Science',
]

function addSubject() {
  let newSubject = prompt('Pick a subject')

  // add a new subject to the end of the subjects array
  subjects.push(newSubject)

  alert(subjects)
}

function removeSubject() {
  let index = prompt('Remove a subject')

  // remove 1 subject at the index position of the subjects array
  subjects.splice(index, 1)

  alert(subjects)
}

// #####################################
// ##### ----- Number Search ----- #####
// #####################################

let numberArray = [
  1,
  100,
  1000,
  10000,
  1234567890,
]

function numberSearch() {
  let searchTarget = 2
  let searchResult = false

  numberArray.forEach((currentNumber) => {
    if (currentNumber == searchTarget) {
      searchResult = true
    }
  })
}

// #####################################
// #### ----- Subject Details ----- ####
// #####################################

let subject = {
  name: 'DigiTech',
  room: 'Room 9',
  students: 150,
}

function showSubject() {
  alert(subject.name)
}

function changeSubject() {
  let newName = prompt()
  subject.name = newName
}

// #####################################
// ####### ----- Find a Pet ----- ######
// #####################################

let petRegister = [
  { name: 'Snuggles', type: 'cat', color: 'tabby' },
  { name: 'Socks', type: 'cat', color: 'black and white' },
  { name: 'Dogan', type: 'dog', color: 'brown' },
]

function petSearch() {
  let searchType = prompt()
  let searchResult = ''

  petRegister.forEach((currentPet) => {
    if (currentPet.type == searchType) {
      searchResult += currentPet.name
    }
  })

  alert(searchResult)
}
