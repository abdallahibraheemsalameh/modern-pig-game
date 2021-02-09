'use strict';
const dice =document.querySelector('.dice');

let active = 1;

const score1 = document.querySelector('.Score1');
const score2 = document.querySelector('.Score2');

const container1 = document.querySelector('.Container1');
const container2 = document.querySelector('.Container2');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

// the differnece between them is in the nigative numbers only !!
console.log(Math.floor(-29.884));//-30
console.log(Math.trunc(-29.884));//-29
let currentScore = 0;

btnRoll.addEventListener('click',function(){
    
let Ran = Math.trunc(Math.random()*6)+1;

dice.classList.remove('hidden');
dice.src=`dice-${Ran}.png`;

if(Ran==1){
    document.querySelector(`.current${active}`).textContent=0;
    currentScore=0;
    active = active === 1 ? 2 :1;
    container1.classList.toggle('active');
    container2.classList.toggle('active');

}
//     if( active == 1 ){
//        active=2;
//        document.querySelector('.Container1').classList.remove('active');
//        document.querySelector('.Container2').classList.add('active');
//        document.querySelector('.current1').textContent=0;
       
        
//     }    
//   else if(active==2){
//         active=1;
//         document.querySelector('.Container2').classList.remove('active');
//         document.querySelector('.Container1').classList.add('active');
//         document.querySelector('.current2').textContent=0;
//     }




else {
    currentScore += Ran;
document.querySelector(`.current${active}`).textContent=currentScore;


}
//     if( active == 1 ){
//         currentScore += Ran;
//         document.querySelector('.current1').textContent=currentScore;
        
       
//     }
     
//     else if(active==2){
//         currentScore += Ran;
//         document.querySelector('.current2').textContent=currentScore; 
         
     
//  }


})



document.querySelector('.btn--hold').addEventListener('click',function(){


let current = Number(document.querySelector(`.current${active}`).textContent);
let scorenum =Number(document.querySelector(`.Score${active}`).textContent);
document.querySelector(`.Score${active}`).textContent=scorenum+current;
currentScore=0;
document.querySelector(`.current${active}`).textContent=0;
    active = active === 1 ? 2 :1;
    container1.classList.toggle('active');
    container2.classList.toggle('active');


});
document.querySelector('.btn--new').addEventListener('click',function(){
    active = active === 1  ? 1  : 1;
    container1.classList.add('active');
    container2.classList.remove('active')
    
    currentScore=0;
score1.textContent=0;
score2.textContent=0;
document.querySelector('.current1').textContent=0;
document.querySelector('.current2').textContent=0;
dice.classList.add('hidden');








});

dice.classList.add('hidden');
score1.textContent='0';
score2.textContent='0';
