let secretNumber= Math.trunc(Math.random()*20)+1;
let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
const guess =   Number(document.querySelector('.guess').value);
console.log(guess);

if( !guess ){
    document.querySelector('.message').textContent = (`🚫 No Number Entered`);
}
else if(guess> secretNumber){
    if(score>1){
    console.log(document.querySelector('.message').textContent= 'Too High');
    score--;
    document.querySelector('.score').textContent = score;
    } else{
        score--;
        console.log(document.querySelector('.message').textContent = 'You lost the game');
        document.querySelector('.score').textContent = score
    }
}else if(guess< secretNumber){
    if(score>1){
    console.log(document.querySelector('.message').textContent= 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
    } else{
        score--;
        console.log(document.querySelector('.message').textContent = 'You lost the game');
        document.querySelector('.score').textContent = score;
    }
}else if(guess=== secretNumber){
    
    console.log(document.querySelector('.message').textContent= 'Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent= secretNumber;
    if(score>highscore){
    highscore = score;
    document.querySelector('.highscore').textContent= highscore;
}
}
})
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
})