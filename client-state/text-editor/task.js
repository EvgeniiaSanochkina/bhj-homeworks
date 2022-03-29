let textArea = document.getElementById("editor");
let clear = document.getElementById("clear");
textArea.value = localStorage.getItem('text');

textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value);
})

clear.addEventListener('click', () => {
    textArea.value = '';
    delete localStorage.text;
})