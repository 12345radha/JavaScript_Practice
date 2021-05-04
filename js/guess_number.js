let randomnumber = Math.floor(Math.random() * 100) + 1;
let button = document.getElementById("btn");
let guessfield = document.querySelector('.guessfield');
//result div
let guesses = document.querySelector('.guesses');
let lastresult = document.querySelector('.lastresult');
let loworhi = document.querySelector(".loworhi");

//create a new div element;
newgame_div = document.createElement('div');
newgame_div.id = "new_div";
document.body.append(newgame_div);
let resetbutton;
//count start from 1
let guesscount = 1;
button.addEventListener('click', checkguess);

//defining checkguess function
function checkguess(e) {
    e.preventDefault();
    let userguess = Number(guessfield.value);
    if (guesscount === 1) {
        guesses.textContent = "Previous guesses - ";
    }
    guesses.textContent += userguess + ' ';
    if (userguess === randomnumber) {
        lastresult.textContent = "Congratulations! You got it right!";
        lastresult.style.backgroundColor = 'green';
        loworhi.textContent = '';
        setgameover();
    }
    else if (guesscount === 10) {
        lastresult.textContent = "!!!Game Over!!!";
        setgameover();
    }
    else {
        lastresult.textContent == "wrong!";
        lastresult.style.backgroundColor = "red";
        if (userguess < randomnumber)
            loworhi.innerHTML = 'Last guess was too low';
        else
            loworhi.textContent = "Last guess was too high";
    }
    guesscount++;
    guessfield.value = '';
    guessfield.focus();



}
//setgameover function
function setgameover() {
    guessfield.disabled = true;
    button.disabled = true;
    resetbutton = document.createElement('button');
    resetbutton.id="start_new_game";
    resetbutton.textContent = "Start new game";
    guess_box.appendChild(resetbutton);
    resetbutton.addEventListener('click', resetgame);

}
//resetgame function
function resetgame() {
    guesscount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetbutton.parentNode.removeChild(resetbutton);
    guessfield.disabled=false;
    button.disabled=false;
    guessfield.value='';
    guessfield.focus();

    lastresult.style.backgroundColor="white";
    randomnumber = Math.floor(Math.random() * 100) + 1;

}
