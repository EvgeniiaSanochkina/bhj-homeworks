let t;
let x = 59;
countdown();

function countdown() {
    document.getElementById("timer").innerHTML = x;
    x--;
    if (x < 0) {
        clearTimeout(t);
        alert("Вы победили в конкурсе");
    } else {
        t = setTimeout(countdown, 1000);
    }
}