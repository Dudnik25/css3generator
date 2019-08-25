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
    codeBlock: document.getElementById('BorderRadiusCode'),
    code: document.getElementById('BorderRadiusCode').getElementsByTagName('pre')[0],
    oninputmode: ['all', 'allProgress', 'topLeft', 'topLeftProgress', 'topRight', 'topRightProgress', 'bottomLeft', 'bottomLeftProgress', 'bottomRight', 'bottomRightProgress'],
    init: function (e) {
        let out;
        let outStyle = "border-radius: ";
        let outCode = "-webkit-border-radius: ";
        if (e.target.value > 100) e.target.value = 100;
        if (e.target.value < 0 || Number.isNaN(+e.target.value)) e.target.value = 0;
        this.sync(e.target.name, e.target.value);
        let tl = (this.topLeft.value === '') ? '0' : this.topLeft.value;
        let tr = (this.topRight.value === '') ? '0' : this.topRight.value;
        let bl = (this.bottomLeft.value === '') ? '0' : this.bottomLeft.value;
        let br = (this.bottomRight.value === '') ? '0' : this.bottomRight.value;

        if (e.target.id === this.all.id || e.target.id === this.allProgress.id ) {
            this.setAll(e.target.value);
            out = `${e.target.value}px;`;
        } else if ((tr === bl && tl === br && tr === tl)) {
            this.sync('all', tl);
            out = `${tl}px;`;
        } else if (tr === bl && tl === br && tr !== tl) {
            this.clear();
            out = `${tl}px ${tr}px;`;
        } else if (tr === bl && tl !== br) {
            this.clear();
            out = `${tl}px ${tr}px ${br}px;`;
        } else {
            this.clear();
            out = `${tl}px ${tr}px ${br}px ${bl}px;`;
        }

        outStyle += out;
        outCode += out + ' \n' + outStyle;

        this.promo.style.cssText = outStyle;
        this.code.innerText = outCode;
        this.codeBlock.classList.remove('hide');
    },
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
    codeBlock: document.getElementById('BoxShadowCode'),
    code: document.getElementById('BoxShadowCode').getElementsByTagName('pre')[0],
    oninputmode: ['horizontalLength', 'verticalLength', 'blurRadius', 'spread', 'colorType', 'rgbaR', 'rgbaG', 'rgbaB', 'rgbaA'],
    onchangemode: ['colorHex', 'inset'],
    init: function (e) {
        if (this.colorType.value === '') return;
        if (e.target.id !== 'BoxShadowCT' && e.target.id !== 'BoxShadowColorHex' && e.target.id !== 'BoxShadowInset' && Number.isNaN(+e.target.value)) e.target.value = 0;
        let color;
        let out;
        let outStyle = "box-shadow: ";
        let outCode = "-webkit-box-shadow: ";
        let hl = (this.horizontalLength.value === '' || Number.isNaN(+this.horizontalLength.value)) ? '0' : +this.horizontalLength.value;
        let vl = (this.verticalLength.value === '' || Number.isNaN(+this.verticalLength.value)) ? '0' : +this.verticalLength.value;
        let br = (this.blurRadius.value === '' || Number.isNaN(+this.blurRadius.value)) ? '0' : +this.blurRadius.value;
        let spread = (this.spread.value === '' || Number.isNaN(+this.spread.value)) ? '0' : +this.spread.value;
        if (this.inset.value === 'inset') {
            outStyle += 'inset ';
            outCode += 'inset ';
        }
        if (this.colorType.value === 'colorHex') color = this.colorHex.value;
        if (this.colorType.value === 'colorRGBA') {
            let r = (this.rgbaR.value === '' || Number.isNaN(+this.rgbaR.value) || this.rgbaR.value < 0) ? '0' : +this.rgbaR.value;
            let g = (this.rgbaG.value === '' || Number.isNaN(+this.rgbaG.value) || this.rgbaG.value < 0) ? '0' : +this.rgbaG.value;
            let b = (this.rgbaB.value === '' || Number.isNaN(+this.rgbaB.value) || this.rgbaB.value < 0) ? '0' : +this.rgbaB.value;
            let a = (this.rgbaA.value === '' || this.rgbaA.value < 0) ? '1' : this.rgbaA.value;
            color = `rgba(${r}, ${g}, ${b}, ${a})`;
        }

        out = `${hl}px ${vl}px ${br}px ${spread}px ${color};`;
        outStyle += out;
        outCode += out + ' \n' + outStyle;
        this.promo.style.cssText = outStyle;
        this.code.innerText = outCode;
        this.codeBlock.classList.remove('hide');
    }
};

const textShadow = {
    horizontalLength: document.getElementById('TextShadowHL'),
    verticalLength: document.getElementById('TextShadowVL'),
    blurRadius: document.getElementById('TextShadowBR'),
    shadowColor: document.getElementById('TextShadowColor'),
    promo: document.getElementById('TextShadowPromo'),
    codeBlock: document.getElementById('TextShadowCode'),
    code: document.getElementById('TextShadowCode').getElementsByTagName('pre')[0],
    oninputmode: ['horizontalLength', 'verticalLength', 'blurRadius'],
    onchangemode: ['shadowColor'],
    init: function () {
        let out = "text-shadow: ";
        if (this.validate()) {
            out += `${this.horizontalLength.value}px ${this.verticalLength.value}px ${this.blurRadius.value}px ${this.shadowColor.value};`;
            this.promo.style.cssText = out;
            this.code.innerText = out;
            this.codeBlock.classList.remove('hide');
        }
    },
    validate: function () {
        if (this.horizontalLength.value === '') return false;
        if (this.verticalLength.value === '') return false;
        if (this.blurRadius.value === '') return false;
        if (this.shadowColor.value === '') return false;
        return true;
    }
};

const rgba = {
    r: document.getElementById('RGBA-R'),
    rProgress: document.getElementById('RGBAProgress-R'),
    g: document.getElementById('RGBA-G'),
    gProgress: document.getElementById('RGBAProgress-G'),
    b: document.getElementById('RGBA-B'),
    bProgress: document.getElementById('RGBAProgress-B'),
    a: document.getElementById('RGBA-Opacity'),
    aProgress: document.getElementById('RGBAProgress-Opacity'),
    promoText: document.getElementById('RGBAPromoText'),
    promoBlock: document.getElementById('RGBAPromoBlock'),
    codeBlock: document.getElementById('RGBACode'),
    code: document.getElementById('RGBACode').getElementsByTagName('pre')[0],
    oninputmode: ['r', 'rProgress', 'g', 'gProgress', 'b', 'bProgress', 'a', 'aProgress'],
    init: function (e) {
        let out, outCode;
        let outBackground = "background-color: ";
        let outColor = "color: ";
        this.sync(e.target.name, e.target.value);
        if (this.validate()) {
            out = `rgba(${this.r.value}, ${this.g.value}, ${this.b.value}, ${this.a.value});`;
            outBackground += out;
            outColor += out;
            outCode = outBackground + ' \n' + outColor;
            this.promoBlock.style.cssText = outBackground;
            this.promoText.style.cssText = outColor;
            this.code.innerText = outCode;
            this.codeBlock.classList.remove('hide');
        }
    },
    sync: function (name, value) {
        this[name].value = value;
        this[name + 'Progress'].value = value;
    },
    validate: function () {
        let arr = ['r', 'g', 'b'];
        let result = true;
        arr.forEach(function (e) {
            if (this[e].value === '' || this[e].value < 0 || Number.isNaN(+this[e].value) || !Number.isInteger(+this[e].value)) {
                this[e].value = '';
                this[e + 'Progress'].value = '0';
                result = false;
            } else if (this[e].value > 255) {
                this[e].value = '255';
                this[e + 'Progress'].value = '255';
                result = false;
            }
        }, this);
        if (this.a.value === '' || this.a.value < 0 || Number.isNaN(+this.a.value)) {
            this.a.value = '';
            this.aProgress.value = '0';
            result = false;
        } else if (this.a.value > 1) {
            this.a.value = '1';
            this.aProgress.value = '1';
            result = false;
        }
        return result;
    }
};

const fontFace = {
    fontFamoly: document.getElementById('FontFaceFontFamily'),
    fontName: document.getElementById('FontFaceFontName'),
    codeBlock: document.getElementById('FontFaceCode'),
    code: document.getElementById('FontFaceCode').getElementsByTagName('pre')[0],
    init: function () {
        if (this.validate()) {
            let out = `@font-face {\n\tfont-family: "${this.fontFamoly.value}";\n\t` +
                `src: url("${this.fontName.value}.eot?") format("eot"),\n\t` +
                `url("${this.fontName.value}.woff") format("woff"),\n\t` +
                `url("${this.fontName.value}.ttf") format("truetype");\n}`;
            this.code.innerText = out;
            this.codeBlock.classList.remove('hide');
        }
    },
    oninputmode: ['fontFamoly', 'fontName'],
    validate: function () {
        if (this.fontFamoly.value === '' || this.fontName.value === '') return false;
        return true;
    }

};

const multiColumn = {
    number: document.getElementById('MultipleColumnNumber'),
    gap: document.getElementById('MultipleColumnGap'),
    promo: document.getElementById('MultipleColumnPromo'),
    codeBlock: document.getElementById('MultipleColumnCode'),
    code: document.getElementById('MultipleColumnCode').getElementsByTagName('pre')[0],
    oninputmode: ['number', 'gap'],
    init: function (e) {
        if (this.validate()) {
            let outStyle = `column-count: ${this.number.value};\ncolumn-gap: ${this.gap.value}px;`;
            let outCode = `-moz-column-count: ${this.number.value};\n-moz-column-gap: ${this.gap.value}px;\n` +
                `-webkit-column-count: ${this.number.value};\n-webkit-column-gap: ${this.gap.value}px;\n` + outStyle;
            this.promo.style.cssText = outStyle;
            this.code.innerText = outCode;
            this.codeBlock.classList.remove('hide');
        }
    },
    validate: function () {
        if (this.number.value === '' || Number.isNaN(+this.number.value) || !Number.isInteger(+this.number.value)) return false;
        if (this.gap.value === '' || Number.isNaN(+this.gap.value) || !Number.isInteger(+this.gap.value)) return false;
        return true;
    }
};

const boxResize = {
    resize: document.getElementById('BoxResizeR'),
    overflow: document.getElementById('BoxResizeO'),
    minWidth: document.getElementById('BoxResizeMinW'),
    minHeight: document.getElementById('BoxResizeMinH'),
    promo: document.getElementById('BoxResizePromo'),
    codeBlock: document.getElementById('BoxResizeCode'),
    code: document.getElementById('BoxResizeCode').getElementsByTagName('pre')[0],
    onchangemode: ['resize', 'overflow', 'minWidth', 'minHeight'],
    init: function (e) {
        if (this.resize.value !== '') {
            this.validate();
            let minW = (this.minWidth.value === '') ? '0' : +this.minWidth.value;
            let minH = (this.minHeight.value === '') ? '0' : +this.minHeight.value;
            let out = `resize: ${this.resize.value};\noverflow: ${this.overflow.value};\n` +
            `min-width: ${minW}px;\nmin-height: ${minH}px;`;
            this.promo.style.cssText = out;
            this.code.innerText = out;
            this.codeBlock.classList.remove('hide');
        }
    },
    validate: function () {
        if (this.minWidth.value < 0 || Number.isNaN(+this.minWidth.value)) {
            this.minWidth.value = '0';
            return false;
        }
        if (this.minHeight.value < 0 || Number.isNaN(+this.minHeight.value)) {
            this.minHeight.value = '0';
            return false;
        }
        return true;
    }
};

const boxSizing = {
    sizing: document.getElementById('BoxSizingS'),
    promo: document.getElementById('BoxSizingPromo'),
    codeBlock: document.getElementById('BoxSizingCode'),
    code: document.getElementById('BoxSizingCode').getElementsByTagName('pre')[0],
    onchangemode: ['sizing'],
    init: function (e) {
        let outStyle = `box-sizing: ${this.sizing.value};`;
        let outCode = `-moz-box-sizing: ${this.sizing.value};\n-webkit-box-sizing: ${this.sizing.value};\n` + outStyle;
        this.promo.style.cssText = outStyle;
        this.code.innerText = outCode;
        this.codeBlock.classList.remove('hide');
    }
};

const outline = {
    style: document.getElementById('OutlineStyle'),
    width: document.getElementById('OutlineWidth'),
    color: document.getElementById('OutlineColor'),
    offset: document.getElementById('OutlineOffset'),
    promo: document.getElementById('OutlinePromo'),
    codeBlock: document.getElementById('OutlineCode'),
    code: document.getElementById('OutlineCode').getElementsByTagName('pre')[0],
    oninputmode: ['width', 'offset'],
    onchangemode: ['color', 'style'],
    init: function (e) {
        if (this.validate()) {
            let out = `outline: ${this.width.value}px ${this.style.value} ${this.color.value};`;
            if (this.offset.value !== '') {
                out += `\noutline-offset: ${this.offset.value}px;`;
            }
            this.promo.style.cssText = out;
            this.code.innerText = out;
            this.codeBlock.classList.remove('hide');
        }
    },
    validate: function () {
        let result = true;
        if (this.style.value === '') result = false;
        if (this.color.value === '') result = false;
        if (this.width.value === '' || Number.isNaN(+this.width.value) || this.width.value < 0) {
            this.width.value = '';
            result = false;
        }
        if (Number.isNaN(+this.offset.value) && this.offset.value !== '-') {
            this.offset.value = '';
            result = false;
        }
        return result;
    }
};

const transition = {
    property: document.getElementById('TransitionProperty'),
    timingF: document.getElementById('TransitionTimingFunction'),
    duration: document.getElementById('TransitionDuration'),
    durationTime: document.getElementById('TransitionDurationTime'),
    delay: document.getElementById('TransitionDelay'),
    delayTime: document.getElementById('TransitionDelayTime'),
    promo: document.getElementById('TransitionPromo'),
    codeBlock: document.getElementById('TransitionCode'),
    code: document.getElementById('TransitionCode').getElementsByTagName('pre')[0],
    oninputmode: ['duration', 'delay'],
    onchangemode: ['property', 'timingF', 'durationTime', 'delayTime'],
    init: function (e) {
        if (this.validate()) {
            let outCode, outStyle = 'transition: ';
            let delay = (this.delay.value === '') ? '' : ' ' + this.delay.value + this.delayTime.value;
            let out = `${this.property.value} ${this.duration.value}${this.durationTime.value} ${this.timingF.value}${delay};`;
            outStyle += out;
            outCode = `-webkit-transition: ${out}\n-moz-transition: ${out}\n-ms-transition: ${out}\n-o-transition: ${out}\n` + outStyle;
            this.promo.style.cssText = outStyle;
            this.code.innerText = outCode;
            this.codeBlock.classList.remove('hide');
        }
    },
    validate: function () {
        let result = true;
        if (this.property.value === '' || this.timingF.value === '') result = false;
        if (this.duration.value === '' || this.duration.value < 0 || Number.isNaN(+this.duration.value)) {
            this.duration.value = '';
            result = false;
        }
        if (this.delay.value < 0 || Number.isNaN(+this.delay.value)) this.delay.value = '';
        return result;
    }
};

const transform = {
    scale: document.getElementById('TransformScale'),
    rotate: document.getElementById('TransformRotate'),
    translateX: document.getElementById('TransformTranslateX'),
    translateY: document.getElementById('TransformTranslateY'),
    skewX: document.getElementById('TransformSkewX'),
    skewY: document.getElementById('TransformSkewY'),
    promo: document.getElementById('TransformPromo'),
    codeBlock: document.getElementById('TransformCode'),
    code: document.getElementById('TransformCode').getElementsByTagName('pre')[0],
    oninputmode: ['scale', 'rotate', 'translateX', 'translateY', 'skewX', 'skewY'],
    init: function (e) {
        let outCode, out = '';
        let outStyle = 'transform:';

        this.validate();

        if (this.scale.value !== '') out += ` scale(${this.scale.value})`;
        if (this.rotate.value !== '') out += ` rotate(${this.rotate.value}deg)`;
        if (this.translateX.value !== '') out += ` translateX(${this.translateX.value}px)`;
        if (this.translateY.value !== '') out += ` translateY(${this.translateY.value}px)`;
        if (this.skewX.value !== '') out += ` skewX(${this.skewX.value}deg)`;
        if (this.skewY.value !== '') out += ` skewY(${this.skewY.value}deg)`;
        if (out === '') out = ' none';

        outStyle += out + ';';
        outCode = `-moz-transform:${out};\n-webkit-transform:${out};\n-o-transform:${out};\n-ms-transform:${out};\n` + outStyle;

        this.promo.style.cssText = outStyle;
        this.code.innerText = outCode;
        this.codeBlock.classList.remove('hide');
    },
    validate: function () {
        this.oninputmode.forEach(function (e) {
            if (Number.isNaN(+this[e].value) && this[e].value !== '-') {
                this[e].value = '';
            }
        }, this);
        if (this.rotate.value < -180) this.rotate.value = '-180';
        if (this.rotate.value > 180) this.rotate.value = '180';
    }
};

const flexbox = {
    display: document.getElementById('FlexboxDisplay'),
    direction: document.getElementById('FlexboxDirection'),
    wrap: document.getElementById('FlexboxWrap'),
    justifyContent: document.getElementById('FlexboxDisplayJC'),
    alignItems: document.getElementById('FlexboxDisplayAI'),
    alignContent: document.getElementById('FlexboxDisplayAC'),
    promo: document.getElementById('FlexboxPromo'),
    codeBlock: document.getElementById('FlexboxCode'),
    code: document.getElementById('FlexboxCode').getElementsByTagName('pre')[0],
    onchangemode: ['display', 'direction', 'wrap', 'justifyContent', 'alignItems', 'alignContent'],
    init: function (e) {
        let out = `display: ${this.display.value};`;
        if (this.direction.value !== '') out += `\nflex-direction: ${this.direction.value};`;
        if (this.wrap.value !== '') out += `\nflex-wrap: ${this.wrap.value};`;
        if (this.justifyContent.value !== '') out += `\njustify-content: ${this.justifyContent.value};`;
        if (this.alignItems.value !== '') out += `\nalign-items: ${this.alignItems.value};`;
        if (this.alignContent.value !== '') out += `\nalign-content: ${this.alignContent.value};`;
        this.promo.style.cssText = out;
        this.code.innerText = out;
        this.codeBlock.classList.remove('hide');
    }
};

//Вешаем обработчики
menuButton.addEventListener('click', openMenu);

Object.keys(menuList).forEach(function (e) {
   menuList[e].addEventListener('click', nemuNavigation);
});
Object.keys(copyBtn).forEach(function (e) {
    copyBtn[e].addEventListener('click', copyText);
});

boxShadow.colorType.addEventListener('change', choiceColorType);

addEvents(borderRadius);
addEvents(boxShadow);
addEvents(textShadow);
addEvents(rgba);
addEvents(fontFace);
addEvents(multiColumn);
addEvents(boxResize);
addEvents(boxSizing);
addEvents(outline);
addEvents(transition);
addEvents(transform);
addEvents(flexbox);

//Функция вешает обработчик на объект
function addEvents(obj) {
    if (obj.hasOwnProperty('oninputmode')) {
        obj.oninputmode.forEach(function (e) {
            obj[e].addEventListener('input', function (e) {
                obj.init(e);
            });
        });
    }
    if (obj.hasOwnProperty('onchangemode')) {
        obj.onchangemode.forEach(function (e) {
            obj[e].addEventListener('change', function (e) {
                obj.init(e);
            });
        });
    }

}

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
    document.getElementById("copyOK").classList.remove("hide");
    setTimeout(function () {
        document.getElementById("copyOK").classList.add("hide");
    }, 1000);
}