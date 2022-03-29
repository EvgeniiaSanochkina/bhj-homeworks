let modalActive = Array.from(document.getElementsByClassName('modal_active'));
let arr = Array.from(document.getElementsByClassName('modal__close'));


for (let i = 0; i < arr.length; i++) {
    arr[i].onclick = function() {
        modalActive[0].className = 'modal';
        //  document.cookie = 'popup' + '=' + 'false';
    }
}

//function setCookie(name, value) {
//  document.cookie = name + '=' + encodeURIComponent(value)
//}