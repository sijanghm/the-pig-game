'use strict';
// selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

const btnHold = document.querySelector('.btn--hold');

const dice = document.querySelector('.dice');
const currenScore00 = document.querySelector('#current--0');
const currenScore11 = document.querySelector('#current--1');
let score, currentScore, activePlayer, playing;
// let score = [0,0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;


//setting score

// score0.textContent = 0;
// score1.textContent = 0;
// dice.classList.add('hidden');
function init(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currenScore00.textContent = 0;
    currenScore11.textContent = 0;
    
    dice.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

}

init();

//rolling dice 

btnRoll.addEventListener('click', function(){
    if(playing){
    const rolledDice = Math.trunc(Math.random()* 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${rolledDice}.png`;
    
    if(rolledDice !== 1){
        currentScore += rolledDice;
        document.getElementById(`current--${activePlayer}`).textContent =  currentScore;
    }
    else{
        //switching active player
        switchingPlayer();
        
    }
}

});

btnHold.addEventListener('click', function(){
    if(playing){
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

    if(score[activePlayer] >= 10){
        playing = false;
        dice.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }

    else{
        switchingPlayer();
    }
}
});

//reset game

btnNew.addEventListener('click', init);
    // score = [0,0];
    // currentScore = 0;
    // activePlayer = 0;

    // score0.textContent = 0;
    // score1.textContent = 0;
    // currenScore00.textContent = 0;
    // currenScore11.textContent = 0;
    
    // dice.classList.add('hidden');
    // player0.classList.add('player--active');
    // player1.classList.remove('player--active');
    // player0.classList.remove('player--winner');
    // player1.classList.remove('player--winner');




function switchingPlayer(){
    currentScore = 0;
        
        document.getElementById(`current--${activePlayer}`).textContent =  0;
        if(activePlayer === 0){
            activePlayer = 1;
        }
        else{
            activePlayer = 0;   
        }

            
        
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}


