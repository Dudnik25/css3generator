const navMenu = document.getElementById('navmenu');
const menuList = navmenu.querySelectorAll('ul > li > button');
const menuButton = document.getElementById('menuButton');
const contents = document.querySelectorAll('#content > nav, #content > div');
const headline = document.getElementById('headline');

const borderRadius = {
    all: document.getElementById('BorderRadiusInputAll'),
    allProgress: document.getElementById('BorderRadiusProgressAll'),
    topLeft: document.getElementById('BorderRadiusInputTopLeft'),
    topLeftProgress: document.getElementById('BorderRadiusProgressTopLeft'),
    topRight: document.getElementById('BorderRadiusInputTopRight'),
    topRightProgress: document.getElementById('BorderRadiusProgressTopRight'),
    bottomLeft: document.getElementById('BorderRadiusInputBottomLeft'),
    bottomLeftProgress: document.getElementById('BorderRadiusProgressBottomLeft'),
    bottomRight: document.getElementById('BorderRadiusInputBottomRight'),
    bottomRightProgress: document.getElementById('BorderRadiusProgressBottomRight'),
    promo: document.getElementById('BorderRadiusPromo'),
    code: document.getElementById('BorderRadiusCode').getElementsByTagName('pre')[0],
    oninputmode: [
        'all',
        'allProgress',
        'topLeft',
        'topLeftProgress',
        'topRight',
        'topRightProgress',
        'bottomLeft',
        'bottomLeftProgress',
        'bottomRight',
        'bottomRightProgress'
    ],
    sync: function (name, value) {
        this[name].value = value;
        this[name + 'Progress'].value = value;
    },
    setAll: function (value) {
        this.oninputmode.forEach(function (e) {
            this[e].value = value;
        }, this);
    },
    clear: function () {
        this.all.value = '';
        this.allProgress.value = '0';
    }
};

//Вешаем обработчики
menuButton.onclick = openMenu;
for (let i = 0; i < menuList.length; i++) {
    menuList[i].onclick = nemuNavigation;
}
borderRadius.oninputmode.forEach(function (e) {
        borderRadius[e].oninput = calcBorderRadius;
});

//Кнопки в меню
function nemuNavigation() {
    let id = this.id + 'Block';
    navMenu.classList.add('hide');
    document.getElementById(id).classList.remove('hide');
    headline.classList.add('hide');
    headline.innerText = this.innerText;
    headline.classList.remove('hide');
}

//Кнопка "Меню"
function openMenu() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.add('hide');
    }
    navMenu.classList.remove('hide');
    headline.classList.add('hide');
    headline.innerText = 'Choose Something';
    headline.classList.remove('hide');
}

//Border Radius

function calcBorderRadius() {
    let outStyle = "border-radius: ";
    let outCode = "-webkit-border-radius: ";
    if (this.value > 100) this.value = 100;
    if (this.value < 0 || Number.isNaN(+this.value)) this.value = 0;
    borderRadius.sync(this.name, this.value);
    let tl = (borderRadius.topLeft.value === '') ? '0' : borderRadius.topLeft.value;
    let tr = (borderRadius.topRight.value === '') ? '0' : borderRadius.topRight.value;
    let bl = (borderRadius.bottomRight.value === '') ? '0' : borderRadius.bottomRight.value;
    let br = (borderRadius.bottomLeft.value === '') ? '0' : borderRadius.bottomLeft.value;

    if (this.id === borderRadius.all.id || this.id === borderRadius.allProgress.id ) {
        borderRadius.setAll(this.value);
        outStyle += `${this.value}px`;
        outCode += `${this.value}px;<br>` + outStyle;
    } else if ((tr === bl && tl === br && tr === tl)) {
        borderRadius.sync('all', tl);
        outStyle += `${tl}px`;
        outCode += `${tl}px;<br>` + outStyle;
    } else if (tr === bl && tl === br && tr !== tl) {
        borderRadius.clear();
        outStyle += `${tl}px ${tr}px;`;
        outCode += `${tl}px ${tr}px;<br>` + outStyle;
    } else if (tr === bl && tl !== br) {
        borderRadius.clear();
        outStyle += `${tl}px ${tr}px ${br}px;`;
        outCode += `${tl}px ${tr}px ${br}px;<br>` + outStyle;
    } else {
        borderRadius.clear();
        outStyle += `${tl}px ${tr}px ${bl}px ${br}px;`;
        outCode += `${tl}px ${tr}px ${bl}px ${br}px;<br>` + outStyle;
    }

    borderRadius.promo.style = outStyle;
    borderRadius.code.innerHTML = outCode;
}


