const burger = document.querySelector('.burger');
const menu = document.querySelector('.burger_menu_list');
burger.addEventListener('click', active_menu);

function active_menu(){
    burger.classList.toggle('burger_active');
    menu.classList.toggle('burger_menu_list_active');
}
