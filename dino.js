let score = 0;
let cro = true;
auel=new Audio('auel.mp3');
setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameover = document.querySelector('.gameover');
    let mons = document.querySelector('.mons');

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    let mx = parseInt(window.getComputedStyle(mons, null).getPropertyValue('left'));
    let my = parseInt(window.getComputedStyle(mons, null).getPropertyValue('top'));

    let offx = Math.abs(dx - mx);
    let offy = Math.abs(dy - my);
    if (offx < 93 && offy < 52) {
        gameover.style.visibility = 'visible';
        mons.classList.remove('monsani');
    } else if (offx<145 && cro) {
        score = score + 1;
        upscor(score);
        cro = false;
        setTimeout(() => {
            cro = true;
        }, 100);
    }
}, 10);

function upscor(score) {
    let scoreCon = document.querySelector('.scoreCon');
    scoreCon.innerHTML = "Your score: " + score;
}
