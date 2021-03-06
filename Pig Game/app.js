/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he/ she whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Creating variables

var scores, roundScores, activePlayer, dice, gamePlaying;

init();

//setting up an event listner for roll dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // generate a random number
        // defining the dice (1-6)
        var dice = Math.floor(Math.random() * 6 + 1);

        // display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //update the round score IF the rolled number was NOT 1
        if(dice !==1){
            //add score
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores; 
        }else{
            //Next player
            nextPlayer();
        }
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScores;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // check if player won the game
        if(scores[activePlayer] >= 50){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            //Next Player
            nextPlayer();
        }
    }
});


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0; //reseting the roundScore 0
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.add('active');
        //document.querySelector('.player-1-panel').classList.remove('active');
        
        //hiding the dice when the active player is changing
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    //hiding the dice on the begining of the game
    document.querySelector('.dice').style.display = 'none';

    //setting the starting score 0 to all scores
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //restting to initial UI
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    //remove the WINNER class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    //remove the ACTIVE class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    //adding the ACTIVE class to PLAYER 1
    document.querySelector('.player-0-panel').classList.add('active');
}



//manipulating the current score into random
//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';