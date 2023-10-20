let ball= document.getElementById('ball');
let rod1 = document.getElementById('rod1');
let rod2 = document.getElementById('rod2');
let scorespan=document.getElementById('score-span');
let maxscorespan=document.getElementById('maxscore-span');
let ballRect = ball.getBoundingClientRect();
let ballX = ballRect.x;
let ballY = ballRect.y;
let ballDia = ballRect.width;
let windowWidth = window.innerWidth,
    windowHeight = window.innerHeight;
let speedx=1.4;
let speedy=1.3;
let game=false;
let score=0;
const storeScore ="PPMaxScore";
let maxScore;
maxScore = localStorage.getItem(storeScore);

 


if(maxScore==="null"){
    maxScore=0;
    maxscorespan.innerText="MaxScore:Welcome";

}
else{
    maxscorespan.innerText="MaxScore: " + maxScore; 
}
function reset(){
      game=false;
      score.innerText="Score:"+ 0;
      speedx=1.4;
      speedy=1.3;
      rod1.style.left = (window.innerWidth - rod1.offsetWidth) / 2 + 'px';
      rod2.style.left = (window.innerWidth - rod2.offsetWidth) / 2 + 'px';
      ball.style.left = (windowWidth) / 2 + 'px';
      ball.style.top=rodHeight+1+'px';

      if (score>maxScore) {
        maxScore = score;
        localStorage.setItem(storeScore, maxScore);
    }
       maxscorespan.innerText="MaxScore:"+ maxScore; 
}

function movement(){
   
 ballRect = ball.getBoundingClientRect();
 ballX = ballRect.x;
 ballY = ballRect.y;
 ballDia = ballRect.width;
 windowWidth = window.innerWidth;
 windowHeight = window.innerHeight;

rodRect = rod1.getBoundingClientRect();
rodHeight=rodRect.height;
rodWidth=rodRect.width;
rodX=rodRect.x;


if(ballX+ballDia<rodX||ballX>rodX+rodWidth){
if(ballY<rodHeight||ballY>windowHeight-rodHeight-ballDia){
    alert('Your score: '+score);
    clearInterval(x);
    reset()
}
} 
//movment rule
if(game===true){
if(ballX>=windowWidth-ballDia||ballX<=0){
    speedx=-speedx;
}
if(ballY>windowHeight-rodHeight-ballDia||ballY<rodHeight){
    score+=10;
    scorespan.innerText="Score:"+ score;
    speedy=-speedy;
}

    ball.style.left=ballX-speedx+'px';
    ball.style.top= ballY+speedy+'px';
    
}
}
//rod control
addEventListener('keypress',function(){
    let rodSpeed = 20;
   let rodRect = rod1.getBoundingClientRect();
    if (event.code === "KeyJ" && ((rodRect.x + rodRect.width) < window.innerWidth)) {
        rod1.style.left = (rodRect.x) + rodSpeed + 'px';
        rod2.style.left = rod1.style.left;
    } 
    else if (event.code === "KeyF" && (rodRect.x > 0)) {
        rod1.style.left = (rodRect.x) - rodSpeed + 'px';
        rod2.style.left = rod1.style.left;
    }
});
   
//setinterval
let x;
addEventListener('keypress',function(){
   if(event.code ==="Enter"&& game===false ){
      game=true; score=0;
      scorespan.innerText="Score:"+ score;
      x = setInterval(movement ,1);
    }
});
 
 

 
