const ninjasOne = [
    { name: 'Michelangelo', belt: 'white'},
    { name: 'Donatello', belt: 'green'},
    { name: 'Raphael', belt: 'black'},
    { name: 'Leonardo', belt: 'black'},
    { name: 'Mr. Miyagi', belt: 'black'},
    { name: 'Rocky', belt: 'black'},
    { name: 'Colt', belt: 'green'},
    { name: 'Tum Tum', belt: 'white'},
    { name: 'Haru', belt: 'white'},
    { name: 'The Bride', belt: 'black'},
    { name: 'Cammy', belt: 'black'},
    { name: 'Wong Fei-hung', belt: 'green'}
  ]
  
  const ninjasTwo = [
    { name: 'Michelangelo', belt: 'white'},
    { name: 'Donatello', belt: 'green'},
    { name: 'Raphael', belt: 'black'},
    { name: 'Jim', belt: 'black' },
    { name: 'The Rat', belt: 'black'}
  ]
  
  
  // write a curried function that returns an array containing the ninjas who have a black belt
  
  function getBlackBelts(array) {
    return array.filter((ninja) => ninja.belt === 'black');
  }
  
  console.log(getBlackBelts(ninjasOne));
  
  const statusTypes = {
    white: 'grasshopper',
    green: 'warrior',
    black: 'sensei'
  }
  
  const gamerStatusTypes = {
    white: 'Noob',
    green: 'Choob',
    black: 'Legend'
  }
  
  // write a curried function that returns a new array of ninja objects with "status" added to each object. The status should be the value of whatever key in the status object matches the ninja's belt. 
  
  // Example: { name: 'Colt', belt: 'green', status: 'warrior' }

  function setStatusOfBelt(array) {
      array.forEach(element => {
        element.status = statusTypes[element.belt];    
      });

      return array;
  }

  let myArray = JSON.parse(JSON.stringify(ninjasTwo)); // deep clone
  console.log('ninjasTwo', ninjasTwo);
  console.log(setStatusOfBelt(myArray));