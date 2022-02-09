(() => {
    getHole = i => document.getElementById(`hole${i}`);
    //const inputs = document.querySelectorAll('div > .hole');
    for (let i = 0; i++; i < 10) {
        getHole(i).addEventListener("click", myFunction);
    }

    function myFunction() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (dead.textContent < 10 & lost.textContent < 5) {
            if (hole.className.includes('hole_has-mole')
                // или this.className == "hole hole_has-mole"
            ) {
                dead.textContent++;
            } else {
                lost.textContent++;
            }
        } else
        if (dead.textContent >= 10) {
            alert('Вы выиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent >= 3) {
            alert('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
})();