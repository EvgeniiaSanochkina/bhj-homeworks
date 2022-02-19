let menuItem = Array.from(document.querySelectorAll('.menu__item'));
//let menuSub = Array.from(document.querySelectorAll('.menu_sub'));


for (let i = 0; i < menuItem.length; i++) {
    if (menuItem[i].querySelector('.menu_sub')) {
        menuItem[i].querySelector('.menu__link').onclick = function() {
            menuItem[i].querySelector('.menu_sub').classList.toggle('menu_active');
            return false
        }
    }
}


//for (let i = 0; i < menuItem.length; i++) {
//  if (menuItem[i].querySelector('.menu__link')) {
//    menuItem[i].onclick = function() {
//      menuItem[i].querySelector('.menu__link').classList.toggle('menu_active');
//    return false
// }
// }
//}