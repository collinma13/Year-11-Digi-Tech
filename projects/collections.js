

const jobs = [
    'astronaut',
    'firefighter',
    'police officer',
    'judge',
    'phsiotherapist',
    'farmer', 
  ]
  
  function futureJob() {
    let index = 0
  
    alert('Your future job will be' + jobs[5])
  }
  
  let subjects = [
    'English',
    'Digital Technology',
  ]
  
  function addSubject() {
    let newSubject = 'Maths'
  
    subjects.push(newSubject)
  }
  
  function removeSubject() {
    let index = 0
  
    subjects.splice(index, 1)
  }
  
  let numberArray = [
    1,
    100,
    1000,
    10000,
    1234567890,
  ]
  
  function numberSearch() {
    let searchTarget = 1
    let searchResult = false
    
    numberArray.forEach( (currentNumber) => {
      if (currentNumber == searchTarget) {
        searchResult = true
      }
    })
  }
  