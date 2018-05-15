
var rps = ['rock', 'paper', 'scissors']
var cresults = document.getElementById('comresult')
var presults = document.getElementById('perresults')
var win = document.getElementById('winner')

var rockButton = document.getElementById('rockbtn')
rockbtn.addEventListener('click', function() {
  startGame(0)
  userOutput('rock')
  console.log("Rock")
})

var paperButton = document.getElementById('paperbtn')
paperbtn.addEventListener('click', function() {
  startGame(1)
  userOutput('paper')
  console.log("Paper")
})

var scissorsButton = document.getElementById('scissorsbtn')
scissorsbtn.addEventListener('click', function() {
  startGame(2)
  userOutput('scissors')
  console.log("Scissors")
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
  winner(cNum, opt)
}
function winner(cNum, opt) {
  // debugger
    if (rps[opt] === rps[cNum]) {
      win.innerHTML = "It's a tie! Try again."
    } else if (rps[opt] < rps[cNum]){
      win.innerHTML = "You lose, try again."
    } else if (rps[opt] > rps[cNum]){
      win.innerHTML = "You win!"
    } else {
      win.innerHTML = "Not sure"
    }
  }


    // var (if else for winner)

function userOutput(choice) {
  presults.innerHTML = ("You chose " + choice)
}

/* 
paper beats rock
rock beats scissors
scissors beats paper
tie
*/