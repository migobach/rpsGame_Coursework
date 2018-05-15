
var rps = ['rock', 'paper', 'scissors']
var cresults = document.getElementById('comresult')
var presults = document.getElementById('perresults')
var win = document.getElementById('winner')
var cNum
var opt 

var rockButton = document.getElementById('rockbtn')
rockbtn.addEventListener('click', function() {
  opt = 0
  startGame(0)
  userOutput('rock')
  console.log("Rock")
  winner(cNum, opt);
})

var paperButton = document.getElementById('paperbtn')
paperbtn.addEventListener('click', function() {
  opt = 1
  startGame(1)
  userOutput('paper')
  console.log("Paper")
  winner(cNum, opt)
})

var scissorsButton = document.getElementById('scissorsbtn')
scissorsbtn.addEventListener('click', function() {
  opt = 2
  startGame(2)
  userOutput('scissors')
  console.log("Scissors")
  winner(cNum, opt)
})

function startGame(opt) {
  cNum = Math.floor(Math.random()*rps.length);
  console.log("You chose " + rps[opt] + "; the computer chose " + rps[cNum] + ".")
  if(cNum === 0){
    cresults.innerHTML = "The computer chose rock"
  } else if (cNum === 1){
    cresults.innerHTML = "The computer chose paper"
  } else {
    cresults.innerHTML = "The computer chose scissors"
  }
}

function winner(cNum, opt) {
  switch(opt) {
    case 0: 
      if (cNum === 0) { win.innerHTML = "It's a tie!"}
      else if (cNum === 1) { win.innerHTML = "You lose, try again."}
      else { win.innerHTML = "You win!"}
      break
    case 1: 
      if (cNum === 0) { win.innerHTML = "You win! Great job!"}
      else if (cNum === 1) { win.innerHTML = "It's a tie! Try your luck again."}
      else { win.innerHTIML = "Sorry, you lose, try again."}
      break
    case 2:
      if (cNum === 0) { win.innerHTML = "Loser!"}
      else if (cNum === 1) { win.innerHTML = "You a winner! Congrats!"}
      else { win.innerHTIML = "It's a tie! Try again."} 
      break
    }
  }

  function userOutput(choice) {
    presults.innerHTML = ("You chose " + choice)
  }  
      




  //   if (rps[opt] === rps[cNum]) {
  //     win.innerHTML = "It's a tie! Try again."
  //   } else if (rps[opt] === 0 ||rps[opt] === 1) < (rps[cNum] === 1 ||rps[cNum] === 2){
  //     win.innerHTML = "You lose, try again."
  //   } else if (rps[opt] === 0 || 1) > rps[cNum] === 2){
  //     win.innerHTML = "You win!"
  //   } else {
  //     win.innerHTML = "Not sure"
  //   }
  // }

 
    // var (if else for winner)



/* 
paper beats rock
rock beats scissors
scissors beats paper
tie
*/