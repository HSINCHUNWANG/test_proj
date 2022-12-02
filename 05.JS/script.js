'use strict';

//選擇元素
const play0El = document.querySelector('.player--0'); 
const play1El = document.querySelector('.player--1'); 
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew  = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function(){
  // 定義一組總分[玩家0的總分,玩家1的總分]; 
  // 利用activePlayer當索引，動態選擇當前玩家的總分
  scores = [0,0];
  currentScore = 0;
  activePlayer = 0;
  // 設定一個狀態給遊戲，true才能執行遊戲
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  play0El.classList.remove('player--winner');
  play1El.classList.remove('player--winner');
  play0El.classList.add('player--active');
  play1El.classList.remove('player--active');
};
init();

const switchPlayer = function (){
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; 
  play0El.classList.toggle('player--active');
  play1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function(){
  if(playing){
    // 隨機產生點數 
    const dice = Math.trunc( Math.random() * 6 ) + 1;
  
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
  
    if (dice !== 1) {
      // 當前分數累加 
      // currentScore = currentScore + dice; 
      currentScore += dice; 
  
      // 動態選擇當前玩家
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
      
    }else{
      // 切換玩家
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function(){
  if(playing){
    // 總積分累加  
    // score[0] = score[0] + currentScore; 
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 20 ){
      // 贏家結束遊戲
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{
      // 切換玩家
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);


