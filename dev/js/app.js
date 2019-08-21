const navmenu = document.getElementById('navmenu');
const menuList = navmenu.querySelectorAll('ul > li > button');
const menuButton = document.getElementById('menuButton');
const contents = document.querySelectorAll('#content > nav, #content > div');
const headline = document.getElementById('headline');

menuButton.onclick = openMenu;
for (let i = 0; i < menuList.length; i++) {
    menuList[i].onclick = nemuNavigation;
}

function nemuNavigation() {
    let id = this.id + 'Block';
    navmenu.classList.add('hide');
    document.getElementById(id).classList.remove('hide');
    headline.innerText = this.innerText;
}

function openMenu() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.add('hide');
    }
    navmenu.classList.remove('hide');
    headline.innerText = 'Choose Something';
}