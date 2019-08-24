const navMenu = document.getElementById('navmenu');
const menuList = navmenu.querySelectorAll('ul > li > button');
const menuButton = document.getElementById('menuButton');
const contents = document.querySelectorAll('#content > nav, #content > div');
const headline = document.getElementById('headline');
const copyBtn = document.getElementsByClassName('copyCode');

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

const boxShadow = {
    inset: document.getElementById('BoxShadowInset'),
    horizontalLength: document.getElementById('BoxShadowHL'),
    verticalLength: document.getElementById('BoxShadowVL'),
    blurRadius: document.getElementById('BoxShadowBR'),
    spread: document.getElementById('BoxShadowSpread'),
    colorType: document.getElementById('BoxShadowCT'),
    colorHex: document.getElementById('BoxShadowColorHex'),
    rgbaR: document.getElementById('BoxShadowColorR'),
    rgbaG: document.getElementById('BoxShadowColorG'),
    rgbaB: document.getElementById('BoxShadowColorB'),
    rgbaA: document.getElementById('BoxShadowColorA'),
    promo: document.getElementById('BoxShadowPromo'),
    code: document.getElementById('BoxShadowCode').getElementsByTagName('pre')[0],
    oninputmode: [
        'inset',
        'horizontalLength',
        'verticalLength',
        'blurRadius',
        'spread',
        'colorType',
        'rgbaR',
        'rgbaG',
        'rgbaB',
        'rgbaA',
    ],
};

//Вешаем обработчики
menuButton.onclick = openMenu;
for (let i = 0; i < menuList.length; i++) {
    menuList[i].addEventListener('click', nemuNavigation);
}
for (let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', copyText);
}
borderRadius.oninputmode.forEach(function (e) {
        borderRadius[e].oninput = calcBorderRadius;
});
boxShadow.colorType.addEventListener('input', choiceColorType);
boxShadow.oninputmode.forEach(function (e) {
    boxShadow[e].addEventListener('input', calcBoxShadow);
});
boxShadow.colorHex.addEventListener('change', calcBoxShadow);

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

// Color Type
function choiceColorType() {
    let parent = this.closest('.settings');
    parent.querySelector('.colorHex').classList.add('hide');
    parent.querySelector('.colorRGBA').classList.add('hide');
    parent.querySelector('.' + this.value).classList.remove('hide');
}

// Copy Text
function copyText() {
    let copyText = this.parentNode.getElementsByTagName('pre')[0].innerText;
    let fake = document.createElement('textarea');
    fake.style.cssText = 'position: fixed; left: -9999px;';
    fake.innerHTML = copyText;
    document.body.appendChild(fake);
    fake.select();
    document.execCommand('cut');
    document.body.removeChild(fake);
}

//Border Radius
function calcBorderRadius() {
    let out;
    let outStyle = "border-radius: ";
    let outCode = "-webkit-border-radius: ";
    if (this.value > 100) this.value = 100;
    if (this.value < 0 || Number.isNaN(+this.value)) this.value = 0;
    borderRadius.sync(this.name, this.value);
    let tl = (borderRadius.topLeft.value === '') ? '0' : borderRadius.topLeft.value;
    let tr = (borderRadius.topRight.value === '') ? '0' : borderRadius.topRight.value;
    let bl = (borderRadius.bottomLeft.value === '') ? '0' : borderRadius.bottomLeft.value;
    let br = (borderRadius.bottomRight.value === '') ? '0' : borderRadius.bottomRight.value;

    if (this.id === borderRadius.all.id || this.id === borderRadius.allProgress.id ) {
        borderRadius.setAll(this.value);
        out = `${this.value}px;`;
    } else if ((tr === bl && tl === br && tr === tl)) {
        borderRadius.sync('all', tl);
        out = `${tl}px;`;
    } else if (tr === bl && tl === br && tr !== tl) {
        borderRadius.clear();
        out = `${tl}px ${tr}px;`;
    } else if (tr === bl && tl !== br) {
        borderRadius.clear();
        out = `${tl}px ${tr}px ${br}px;`;
    } else {
        borderRadius.clear();
        out = `${tl}px ${tr}px ${br}px ${bl}px;`;
    }

    outStyle += out;
    outCode += out + ' \n' + outStyle;

    borderRadius.promo.style.cssText = outStyle;
    borderRadius.code.innerText = outCode;
}

//Border Radius

function calcBoxShadow() {
    if (boxShadow.colorType.value === '') return;
    if (this.id !== 'BoxShadowCT' && this.id !== 'BoxShadowColorHex' && this.id !== 'BoxShadowInset' && Number.isNaN(+this.value)) this.value = 0;
    let color;
    let out;
    let outStyle = "box-shadow: ";
    let outCode = "-webkit-box-shadow: ";
    let hl = (boxShadow.horizontalLength.value === '' || Number.isNaN(+boxShadow.horizontalLength.value)) ? '0' : +boxShadow.horizontalLength.value;
    let vl = (boxShadow.verticalLength.value === '' || Number.isNaN(+boxShadow.verticalLength.value)) ? '0' : +boxShadow.verticalLength.value;
    let br = (boxShadow.blurRadius.value === '' || Number.isNaN(+boxShadow.blurRadius.value)) ? '0' : +boxShadow.blurRadius.value;
    let spread = (boxShadow.spread.value === '' || Number.isNaN(+boxShadow.spread.value)) ? '0' : +boxShadow.spread.value;
    if (boxShadow.inset.value === 'inset') {
        outStyle += 'inset ';
        outCode += 'inset ';
    }
    if (boxShadow.colorType.value === 'colorHex') color = boxShadow.colorHex.value;
    if (boxShadow.colorType.value === 'colorRGBA') {
        let r = (boxShadow.rgbaR.value === '' || Number.isNaN(+boxShadow.rgbaR.value) || boxShadow.rgbaR.value < 0) ? '0' : +boxShadow.rgbaR.value;
        let g = (boxShadow.rgbaG.value === '' || Number.isNaN(+boxShadow.rgbaG.value) || boxShadow.rgbaG.value < 0) ? '0' : +boxShadow.rgbaG.value;
        let b = (boxShadow.rgbaB.value === '' || Number.isNaN(+boxShadow.rgbaB.value) || boxShadow.rgbaB.value < 0) ? '0' : +boxShadow.rgbaB.value;
        let a = (boxShadow.rgbaA.value === '' || boxShadow.rgbaA.value < 0) ? '1' : boxShadow.rgbaA.value;
        color = `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    out = `${hl}px ${vl}px ${br}px ${spread}px ${color};`;
    outStyle += out;
    outCode += out + ' \n' + outStyle;
    boxShadow.promo.style.cssText = outStyle;
    boxShadow.code.innerText = outCode;
}