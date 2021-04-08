
let [computer_score,user_score]=[0,0];

let choices_obj={
  'rock':{
    'rock':'draw',
    'paper':'lose',
    'scissor' :'win' 
  },
  'paper':{
    'rock':'win',
    'paper':'draw',
    'scissor' :'lose' 
  },
  'scissor':{
    'rock':'lose',
    'paper':'win',
    'scissor' :'draw' 
  }
}


function checker(input){
  const audio = new Audio("sound/beep.mp3");
    audio.play();
  var choices=["rock","paper","scissor"];
  var num=Math.floor(Math.random()*3);

  document.getElementById('choose').innerHTML=`You choose <span>${input.toUpperCase()} </span> <br><br>Computer chooses <span>${choices[num].toUpperCase()}</span>`;

  let Computer_choice = choices[num];

   switch(choices_obj[input][Computer_choice]){

    case 'win':
      document.getElementById('result').innerHTML=`YOU WIN !`;
      user_score++;
      break;
    case 'lose':
      document.getElementById('result').innerHTML=`YOU LOSE !`;
      computer_score++;
      break;
    case 'draw':
      document.getElementById('result').innerHTML=`IT'S A TIE !`;
       break;
   }
document.getElementById('youscore').innerHTML=user_score;
document.getElementById('compscore').innerHTML=computer_score;
}
