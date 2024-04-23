var lv, MAX_GUESS, num, fnum, i,chg_Guess;
var hint = document.getElementById("hint");
var head = document.getElementById("head");
var Guess = document.getElementById("guess");
// const cong = document.getElementsByName("input").addEventListener("submit", checkGuess);

// export default fnum;
// export { fnum };


function getLv(level) {
    lv = level;
    switch (lv) {
    case 1:
        MAX_GUESS = 15;
        num = Math.floor(Math.random() * 100);
        hint.innerHTML = "Hints: The number is between 0 to 100";
        Guess.innerHTML = "Guess left : 15";
        break;  

    case 2:
        MAX_GUESS = 10;
        num = Math.floor(Math.random() * 1000);
        hint.innerHTML = "Hints: The number is between 0 to 1000"; 
        Guess.innerHTML = "Guess left : 10";
        break;

    case 3:
        MAX_GUESS = 5;
        num = Math.floor(Math.random() * 9000);
        hint.innerHTML = "Hints: The number is between 0 to 9000"; 
        Guess.innerHTML = "Guess left : 5";
        break;

    case 4:
        MAX_GUESS = 3;
        num = Math.floor(Math.random() * 90000);
        hint.innerHTML = "Hints: The number is between 0 to 90000"; 
        Guess.innerHTML = "Guess left : 3";
        break;
    }    
}



document.getElementById("btnRefresh").addEventListener("click", function(){
    location.reload();
});

document.getElementById("guessform").addEventListener("submit",function(event){
    event.preventDefault();
    // fnum = parseInt(document.getElementById("inputfield").value);
    // var myVariable = fnum;
    // localStorage.setItem('myVariable', myVariable);
    // window.num = num;
    // window.fnum = fnum;
    checkGuess();
    // window.location.href = "cong.html?data=" + encodeURIComponent(myVariable);
})



 function checkGuess() {
     fnum = parseInt(document.getElementById("inputfield").value);
     let G = MAX_GUESS;
     chg_Guess = --G;
     changeGuess(chg_Guess);

     if(num == fnum && MAX_GUESS == chg_Guess){
        window.location.href = "cong.html";
        return;
     }
    
    if (num == fnum) {   
        head.innerHTML = "Congratulation You guessed the number!!!!!";
        hint.innerHTML = "So the number is " + num;
        return;
    }
    else if (fnum < num) {
           hint.innerHTML = "Your number "+ fnum +" is less than the number.";
    }
    else {
       hint.innerHTML = "Your number "+ fnum +" is greater than the number.";
    }

    if(chg_Guess == 0) {
        head.innerHTML ="Uh you loser idiot no brainer.";
        hint.innerHTML = "The number is "+ num;
    }

}

 function changeGuess(newGuess) {
    Guess.innerHTML = "Guess left : " + newGuess;
}   

// module.exports = {fnum};