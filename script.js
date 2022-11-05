//BY ELMAHDI AMARJANE
let caree = document.querySelector(".caree");
let balle = document.querySelector(".balle");
let part = document.querySelector(".part");
let partseting = document.querySelector(".partseting");
let score = document.querySelector(".score");
let gameOver= document.querySelector(".gameOver");
let replay = document.querySelector(".replay");
let audio1= document.querySelector(".audio1");
let audio2=document.querySelector(".audio2");
let left_b = Math.floor(Math.random()*600);
let left_p=0;
let top_b=0;
let scoreCount=0;
function movePart(e){
    part.style.left=e.clientX +"px";
     left_p=e.clientX;
}
partseting.addEventListener("mousemove" ,movePart );

function moveballe(e){
   audio2.play();
    console.log(left_p);
    top_b=top_b+10;
    balle.style.left= left_b +"px";
    balle.style.top= top_b +"px";
    if(top_b > 550 && left_b > left_p && left_b<left_p +60){
        console.log("touch");
       scoreCount++;
       score.innerHTML=`score: ${scoreCount}`;
       top_b=0;
       
     left_b = Math.floor(Math.random()*600);
       moveballe();
      }
      else if(top_b > 550 && (left_b < left_p || left_b>left_p +60)){
        scoreCount--;
        score.innerHTML=`SCORE: ${scoreCount}`;
        top_b=0;
       
        left_b = Math.floor(Math.random()*600);
          moveballe();

      } 
      if(scoreCount <= -1){
        replay.style.display="block";
        audio2.pause() ;
        audio1.play();
        setInterval(function(){gameOver.style.display="block" },10);
        setInterval(function(){gameOver.style.display="none" },15);

        clearInterval(moveballeInterval);
      }
}
var moveballeInterval=setInterval(moveballe , 20);

function refreshPage(){
    window.location.reload();
} 
replay.addEventListener("click" ,refreshPage);
