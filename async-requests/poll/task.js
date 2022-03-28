const xhr = new XMLHttpRequest();
const ask = document.querySelector(".poll__title");
const answer = document.querySelector(".poll__answers");

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let response = xhr.response.data;
        response.answers.forEach(element => {
            answer.insertAdjacentHTML("beforeend", `<button class="poll__answer"> ${element}</button>`);
        })
        ask.insertAdjacentText("beforeend", `${response.title}`);
        const buttons = Array.from(document.querySelectorAll(".poll__answer"));
        buttons.forEach(element => {
            element.addEventListener("click", () => {
                alert('Йооу!');
                document.location.reload();
            })
        })

    }
})