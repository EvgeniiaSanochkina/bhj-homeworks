let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = function() {
    let clicks = clickerCounter.textContent++;
    if (clicks % 2 == 0) {
        cookie.width = 190;
    } else {
        cookie.width = 200;
    }

}