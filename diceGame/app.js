/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he/ she whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
AND NOW: EXTRA TASK

Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to figure this out.

3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

//Creating variables

var scores, roundScores, activePlayer, dice, gamePlaying;

init();


var lastDice; // for storing the last dice value

//setting up an event listner for roll dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        // generate a random number
        // defining the dice (1-6)
        var dice1 = Math.floor(Math.random() * 6 + 1);
        var dice2 = Math.floor(Math.random() * 6 + 1);

        // display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';        
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        
        // update the round score IF the rolled number was NOT a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScores += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
            //Next player
            nextPlayer();
        }
        // set rules to loose scores if two 6 comes
        /*if(dice === 6 && lastDice === 6){
            // current player looses ENTIRE score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();
        } else if(dice !==1){
            // update the round score IF the rolled number was NOT 1
            //add score
            roundScores += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores; 
        }else{
            //Next player
            nextPlayer();
        }
        
        // to store the end value
        lastDice = dice;
        */
    }    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScores;

        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // input from the user defined score
        var input = document.querySelector('.final-score').value;
        var winningScore;
        
        // if any value (undefined, 0, null or "") comes it will set to false
        if(input){
            winningScore = input;
        }else{
            winningScore = 100;
        } 

        // check if player won the game
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            hideDice();
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
        hideDice();
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0, 0];
    roundScores = 0;
    activePlayer = 0;
    gamePlaying = true;  
    
    //hiding the dice on the begining of the game
    hideDice();
    
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

function hideDice(){
    //hiding the dice on the begining of the game
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}



//manipulating the current score into random
//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';