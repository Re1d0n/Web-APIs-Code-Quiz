let score = 0;

let ginger = 0;

document.getElementById("score").innerHTML = score





document.getElementById("startButton").addEventListener("click", function() {
if(ginger === 0){ 
    ginger++
    document.getElementById("score").innerHTML = score
    document.getElementById("questionButton1").innerHTML = 'Yes but no.'
    document.getElementById("questionButton2").innerHTML = 'No why would you even ask that.'
    document.getElementById("questionButton3").innerHTML = 'Absolutely yes you fool'
    document.getElementById("questionButton4").innerHTML = 'Maybe or they are worms but bigger.'
    document.getElementById("questionButton5").innerHTML = 'Maple syrup is the key.'
    document.getElementById("questions").innerHTML = 'Are snakes rats without legs?'
   

}})


document.getElementById("questionButton2").addEventListener("click", function() {
    if(score === 0){ 
        score++
        document.getElementById("score").innerHTML = score
        document.getElementById("questionButton1").innerHTML = 'Its my dog?'
        document.getElementById("questionButton2").innerHTML = 'Its a demon!'
        document.getElementById("questionButton3").innerHTML = 'Me but not me?'
        document.getElementById("questionButton4").innerHTML = 'Its rats in the shape of me.'
        document.getElementById("questionButton5").innerHTML = 'Me but probably evil.'
        document.getElementById("questions").innerHTML = 'Is it you in the mirror or someone else?'
       
    
    }
    })



        document.getElementById("questionButton4").addEventListener("click", function() {
            if(score === 1){ 
                score++
                document.getElementById("score").innerHTML = score
                document.getElementById("questionButton1").innerHTML = 'No its probably just rats.'
                document.getElementById("questionButton2").innerHTML = 'Dont think so probably just gerald, he sleeps in there.'
                document.getElementById("questionButton3").innerHTML = 'Try playing Lake Shore Drive that will fix it.'
                document.getElementById("questionButton4").innerHTML = 'Ex Machina.'
                document.getElementById("questionButton5").innerHTML = 'Is your shower running?'
                document.getElementById("questions").innerHTML = 'Is my computer haunted?'
               
            
            }
            })


            document.getElementById("questionButton5").addEventListener("click", function() {
                if(score === 2){
                score++
                document.getElementById("score").innerHTML = score
                document.getElementById("questionButton1").innerHTML = ''
                document.getElementById("questionButton2").innerHTML = ''
                document.getElementById("questionButton3").innerHTML = ''
                document.getElementById("questionButton4").innerHTML = ''
                document.getElementById("questionButton5").innerHTML = ''
                document.getElementById("questions").innerHTML = 'Game Over your score is ' + score 
               
            
            }})          

            

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        
        seconds = parseInt(timer % 50, 10);

        
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 50 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};