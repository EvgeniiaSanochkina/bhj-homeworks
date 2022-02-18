let modalActive = Array.from(document.getElementsByClassName('modal_active'));
let arr = Array.from(document.getElementsByClassName('modal__close'));

//let showSuccess = document.getElementsByClassName('show-success');
let modalSuccess = document.getElementById('modal_success');

for (let i = 0; i < arr.length; i++) {
    if (arr[i].className != 'btn btn_danger modal__close show-success') {
        arr[i].onclick = function() {
            modalActive[0].className = 'modal';
            modalSuccess.className = 'modal';

        }
    } else {
        arr[i].onclick = function() {
            modalSuccess.className = 'modal modal_active';
        }
    }
}