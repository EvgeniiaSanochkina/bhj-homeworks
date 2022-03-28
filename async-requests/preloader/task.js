const items = document.getElementById("items");
const img = document.querySelector(".loader");
img.classList.add("loader_active");
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();


xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let data = JSON.parse(xhr.response).response.Valute;
        img.classList.remove("loader_active");
        for (let key in data) {
            items.insertAdjacentHTML("beforeend", ` <div class="item">
            <div class="item__code">
            ${data[key].CharCode}
            </div>         
            <div class="item__value">
            ${data[key].Value}
            </div>         
            <div class="item__currency">
            руб.
            </div>
            <div>
            </div>`)
        }
    }
});