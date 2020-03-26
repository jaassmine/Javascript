/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain number of guesses 
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

//UI Elements
const UIgame = document.querySelector('#game'),
    UIminNum = document.querySelector('.min-num'),
    UImaxNum = document.querySelector('.max-num'),
    UIguessBtn = document.querySelector('#guess-btn'),
    UIguessInput = document.querySelector('#guess-input')
    UImessage = document.querySelector('.message');

//Assign UI min amd max
UIminNum.textContent = min;
UImaxNum.textContent = max;


//Play Again Event Listener
UIgame.addEventListener('click',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
        console.log(e)
    }
});

//Listen for guess
UIguessBtn.addEventListener('click' , function(){
    let guess = parseInt(UIguessInput.value);

    //Validate
    if(isNaN(guess) || guess<min || guess >max ){
        setMessage(`Please Enter a number between ${min} and ${max}` ,'red');
    }

    //Check if won
    if(guess === winningNum){
        gameOver(true , `${winningNum} is correct, You Win!`);
    }else{
        //Wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
             //Game over - Lost
            gameOver(false, `Game Over , YOU Lost. The Correct number was ${winningNum}`);
            // UIguessInput.disabled = true;
            // UIguessInput.style.borderColor = 'red';
            // setMessage(`Game Over , YOU Lost. The Correct number was ${winningNum}`, 'red');
        }
        else{
            //Game Continues - answer wrong
            UIguessInput.style.borderColor = 'red';
            UIguessInput.value='';
            setMessage(`${guess} is not correct ${guessesLeft} Guesses left`,'red');
        }
    }
});

function setMessage(msg , color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}

//Game Over
function gameOver(won , msg){
    let color ;
    won === true ? color = 'green' : color = 'red';

    UIguessInput.disabled = true;
    UIguessInput.style.color = color;
    UImessage.style.color = color;
    UIguessInput.style.borderColor = color;
    setMessage(msg);

    // Play Again
    UIguessBtn.value = 'Play Again';
    UIguessBtn.className += 'play-again';

}

//Get WinnigNum
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}