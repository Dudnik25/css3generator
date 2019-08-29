const navMenu = document.getElementById('navmenu');
const menuList = navmenu.querySelectorAll('ul > li > button');
const menuButton = document.getElementById('menuButton');
const contents = document.querySelectorAll('#content > nav, #content > div');
const headline = document.getElementById('headline');
const copyBtn = document.getElementsByClassName('copyCode');
let currentBlock = null;

const siteBlock = {
    setPromoStyle: function (style) {
        this.promo.style.cssText = style;
    },
    setCode: function (code) {
        this.codeBlock.getElementsByTagName('pre')[0].innerText = code;
    },
    showCode: function () {
        this.codeBlock.classList.remove('hide');
    }
};

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
    inputEvent: ['all', 'allProgress', 'topLeft', 'topLeftProgress', 'topRight', 'topRightProgress', 'bottomLeft', 'bottomLeftProgress', 'bottomRight', 'bottomRightProgress'],
    __proto__: siteBlock,
    init: function (event) {
        let out;
        let outStyle = "border-radius: ";
        let outCode = "-webkit-border-radius: ";

        event.target.value = Math.floor(event.target.value);
        if (event.target.value > 100) event.target.value = 100;
        if (event.target.value < 0 || isNaN(+event.target.value)) event.target.value = 0;
        this.sync(event.target.name, event.target.value);

        let tl = (this.topLeft.value === '') ? '0' : this.topLeft.value;
        let tr = (this.topRight.value === '') ? '0' : this.topRight.value;
        let bl = (this.bottomLeft.value === '') ? '0' : this.bottomLeft.value;
        let br = (this.bottomRight.value === '') ? '0' : this.bottomRight.value;

        if (event.target.id === this.all.id || event.target.id === this.allProgress.id ) {
            this.setAll(event.target.value);
            out = (event.target.value === '0') ? 'none;' : `${event.target.value}px;`;
        } else if ((tr === bl && tl === br && tr === tl)) {
            this.sync('all', tl);
            out = (tl === '0') ? 'none;' : `${tl}px;`;
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

        this.setPromoStyle(outStyle);
        this.setCode(outCode);
        this.showCode();
    },
    sync: function (name, value) {
        this[name].value = (value === '0') ? '' : value;
        this[name + 'Progress'].value = (value === '') ? '0' : value;
    },
    setAll: function (value) {
        this.inputEvent.forEach( e => {
            if (e.indexOf('Progress') + 1) {
                this[e].value = (value === '') ? '0' : value;
            } else {
                this[e].value = (value === '0') ? '' : value;
            }

        });
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
    inputEvent: ['horizontalLength', 'verticalLength', 'blurRadius', 'spread', 'colorType', 'rgbaR', 'rgbaG', 'rgbaB', 'rgbaA'],
    changeEvent: ['colorHex', 'inset'],
    __proto__: siteBlock,
    init: function (e) {
        if (this.validate()) {
            let color, out, outStyle = "box-shadow: ";
            let outCode = "-webkit-box-shadow: ";
            let hl = (this.horizontalLength.value === '' || isNaN(+this.horizontalLength.value)) ? '0' : +this.horizontalLength.value;
            let vl = (this.verticalLength.value === '' || isNaN(+this.verticalLength.value)) ? '0' : +this.verticalLength.value;
            let br = (this.blurRadius.value === '' || isNaN(+this.blurRadius.value)) ? '0' : +this.blurRadius.value;
            let spread = (this.spread.value === '' || isNaN(+this.spread.value)) ? '0' : +this.spread.value;
            if (hl !== '0' || vl !== '0' || br !== '0' || spread !== '0') {
                if (this.inset.value === 'inset') {
                    outStyle += 'inset ';
                    outCode += 'inset ';
                }
                if (this.colorType.value === 'colorHex') color = this.colorHex.value;
                if (this.colorType.value === 'colorRGBA') {
                    let r = (this.rgbaR.value === '') ? '0' : this.rgbaR.value;
                    let g = (this.rgbaG.value === '') ? '0' : this.rgbaG.value;
                    let b = (this.rgbaB.value === '') ? '0' : this.rgbaB.value;
                    let a = (this.rgbaA.value === '') ? '1' : this.rgbaA.value;
                    color = `rgba(${r}, ${g}, ${b}, ${a})`;
                }

                out = `${hl}px ${vl}px ${br}px ${spread}px ${color};`;
            } else {
                out = 'none;';
            }

            outStyle += out;
            outCode += out + ' \n' + outStyle;

            this.setPromoStyle(outStyle);
            this.setCode(outCode);
            this.showCode();
        }
    },
    validate: function () {
        let result = true;
        if (this.colorType.value === '') result = false;
        if (this.colorType.value === 'colorHex' && this.colorHex.value === '') result = false;
        if (this.colorType.value === 'colorRGBA' && this.rgbaR.value === '' && this.rgbaG.value === '' && this.rgbaB.value === '') result = false;
        if (this.colorType.value === 'colorRGBA') {
            let arr = ['rgbaR', 'rgbaG', 'rgbaB'];
            arr.forEach((e) => {
                this[e].value = (this[e].value === '0' || this[e].value === '') ? this[e].value : Math.floor(this[e].value);
                if (this[e].value < 0 || isNaN(this[e].value) || this[e].value === '') this[e].value = '';
                if (this[e].value > 255) this[e].value = '255'
            });
            if (this.rgbaA.value < 0 || isNaN(this.rgbaA.value)) this.rgbaA.value = '';
            if (this.rgbaA.value > 1) this.rgbaA.value = '1';
        }
        return result;
    }
};

const textShadow = {
    horizontalLength: document.getElementById('TextShadowHL'),
    verticalLength: document.getElementById('TextShadowVL'),
    blurRadius: document.getElementById('TextShadowBR'),
    shadowColor: document.getElementById('TextShadowColor'),
    promo: document.getElementById('TextShadowPromo'),
    codeBlock: document.getElementById('TextShadowCode'),
    inputEvent: ['horizontalLength', 'verticalLength', 'blurRadius'],
    changeEvent: ['shadowColor'],
    __proto__: siteBlock,
    init: function () {
        let out = "text-shadow: ";

        if (this.horizontalLength.value === '' && this.verticalLength.value === '' && this.blurRadius.value === '' && this.shadowColor.value === '') {
            out += 'none;';
        } else {
            let hl = (this.horizontalLength.value === '') ? '0' : this.horizontalLength.value;
            let vl = (this.verticalLength.value === '') ? '0' : this.verticalLength.value;
            let br = (this.blurRadius.value === '') ? '0' : this.blurRadius.value;
            let color = (this.shadowColor.value === '') ? '' : ' ' + this.shadowColor.value;
            out += `${hl}px ${vl}px ${br}px${color};`;
        }

        this.setPromoStyle(out);
        this.setCode(out);
        this.showCode();
    },
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
    promo: document.getElementById('RGBAPromoBlock'),
    codeBlock: document.getElementById('RGBACode'),
    inputEvent: ['r', 'rProgress', 'g', 'gProgress', 'b', 'bProgress', 'a', 'aProgress'],
    __proto__: siteBlock,
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
            this.promoText.style.cssText = outColor;
            this.setPromoStyle(outBackground);
            this.setCode(outCode);
            this.showCode();
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
            if (this[e].value === '' || this[e].value < 0 || isNaN(+this[e].value) || !Number.isInteger(+this[e].value)) {
                this[e].value = '';
                this[e + 'Progress'].value = '0';
                result = false;
            } else if (this[e].value > 255) {
                this[e].value = '255';
                this[e + 'Progress'].value = '255';
                result = false;
            }
        }, this);
        if (this.a.value === '' || this.a.value < 0 || isNaN(+this.a.value)) {
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
    fontFamily: document.getElementById('FontFaceFontFamily'),
    fontName: document.getElementById('FontFaceFontName'),
    codeBlock: document.getElementById('FontFaceCode'),
    inputEvent: ['fontFamily', 'fontName'],
    __proto__: siteBlock,
    init: function () {
        let out = `@font-face {\n\tfont-family: "${this.fontFamily.value}";\n\t` +
            `src: url("${this.fontName.value}.eot?") format("eot"),\n\t` +
            `url("${this.fontName.value}.woff") format("woff"),\n\t` +
            `url("${this.fontName.value}.ttf") format("truetype");\n}`;
        this.setCode(out);
        this.showCode();
    },

};

const multiColumn = {
    number: document.getElementById('MultipleColumnNumber'),
    gap: document.getElementById('MultipleColumnGap'),
    promo: document.getElementById('MultipleColumnPromo'),
    codeBlock: document.getElementById('MultipleColumnCode'),
    inputEvent: ['number', 'gap'],
    __proto__: siteBlock,
    init: function (e) {
        let number = (this.number.value === '') ? '0' : this.number.value;
        let gap = (this.gap.value === '') ? '0' : this.gap.value;
        let outStyle = `column-count: ${number};\ncolumn-gap: ${gap}px;`;
        let outCode = `-moz-column-count: ${number};\n-moz-column-gap: ${gap}px;\n` +
            `-webkit-column-count: ${number};\n-webkit-column-gap: ${gap}px;\n` + outStyle;
        this.setPromoStyle(outStyle);
        this.setCode(outCode);
        this.showCode();
    }
};

const boxResize = {
    resize: document.getElementById('BoxResizeR'),
    overflow: document.getElementById('BoxResizeO'),
    minWidth: document.getElementById('BoxResizeMinW'),
    minHeight: document.getElementById('BoxResizeMinH'),
    promo: document.getElementById('BoxResizePromo'),
    codeBlock: document.getElementById('BoxResizeCode'),
    inputEvent: ['minWidth', 'minHeight'],
    changeEvent: ['resize', 'overflow'],
    __proto__: siteBlock,
    init: function (e) {
        if (this.resize.value !== '') {
            if (this.minWidth.value < 0 || isNaN(+this.minWidth.value)) this.minWidth.value = '0';
            if (this.minHeight.value < 0 || isNaN(+this.minHeight.value)) this.minHeight.value = '0';
            let minW = (this.minWidth.value === '') ? '0' : +this.minWidth.value;
            let minH = (this.minHeight.value === '') ? '0' : +this.minHeight.value;
            let out = `resize: ${this.resize.value};\noverflow: ${this.overflow.value};\n` +
            `min-width: ${minW}px;\nmin-height: ${minH}px;`;
            this.setPromoStyle(out);
            this.setCode(out);
            this.showCode();
        }
    }
};

const boxSizing = {
    sizing: document.getElementById('BoxSizingS'),
    promo: document.getElementById('BoxSizingPromo'),
    codeBlock: document.getElementById('BoxSizingCode'),
    changeEvent: ['sizing'],
    __proto__: siteBlock,
    init: function (e) {
        let outStyle = `box-sizing: ${this.sizing.value};`;
        let outCode = `-moz-box-sizing: ${this.sizing.value};\n-webkit-box-sizing: ${this.sizing.value};\n` + outStyle;

        this.setPromoStyle(outStyle);
        this.setCode(outCode);
        this.showCode();
    }
};

const outline = {
    style: document.getElementById('OutlineStyle'),
    width: document.getElementById('OutlineWidth'),
    color: document.getElementById('OutlineColor'),
    offset: document.getElementById('OutlineOffset'),
    promo: document.getElementById('OutlinePromo'),
    codeBlock: document.getElementById('OutlineCode'),
    inputEvent: ['width', 'offset'],
    changeEvent: ['color', 'style'],
    __proto__: siteBlock,
    init: function (e) {
        if (this.validate()) {
            let width = (this.width.value === '') ? '0' : +this.width.value;
            let color = (this.color.value === '') ? '' : ' ' + this.color.value;
            let out = `outline: ${width}px ${this.style.value}${color};`;

            if (this.offset.value !== '') {
                out += `\noutline-offset: ${this.offset.value}px;`;
            }

            this.setPromoStyle(out);
            this.setCode(out);
            this.showCode();
        }
    },
    validate: function () {
        let result = true;
        if (this.style.value === '') result = false;
        if (this.color.value === '' && this.style.value === '') result = false;
        if (this.width.value === '' || isNaN(+this.width.value) || this.width.value < 0) this.width.value = '';
        if (isNaN(+this.offset.value) && this.offset.value !== '-') this.offset.value = '';
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
    inputEvent: ['duration', 'delay'],
    changeEvent: ['property', 'timingF', 'durationTime', 'delayTime'],
    __proto__: siteBlock,
    init: function (e) {
        if (this.validate()) {
            let out, outCode, outStyle = 'transition: ';
            let duration = (this.duration.value === '') ? '0' : +this.duration.value;
            let delay = (this.delay.value === '') ? '' : ' ' + this.delay.value + this.delayTime.value;

            if (duration !== '0' || this.delay.value !== '') {
                out = `${this.property.value} ${duration}${this.durationTime.value} ${this.timingF.value}${delay};`;
            } else {
                out = 'none;';
            }

            outStyle += out;
            outCode = `-webkit-transition: ${out}\n-moz-transition: ${out}\n-ms-transition: ${out}\n-o-transition: ${out}\n` + outStyle;
            this.setPromoStyle(outStyle);
            this.setCode(outCode);
            this.showCode();
        }
    },
    validate: function () {
        if (this.duration.value === '' || this.duration.value < 0 || isNaN(+this.duration.value)) this.duration.value = '';
        if (this.delay.value < 0 || isNaN(+this.delay.value)) this.delay.value = '';
        if (this.property.value === '' || this.timingF.value === '') return false;
        return true;
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
    inputEvent: ['scale', 'rotate', 'translateX', 'translateY', 'skewX', 'skewY'],
    __proto__: siteBlock,
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

        this.setPromoStyle(outStyle);
        this.setCode(outCode);
        this.showCode();
    },
    validate: function () {
        this.inputEvent.forEach( (e) => {
            if (isNaN(+this[e].value) && this[e].value !== '-') {
                this[e].value = '';
            }
        });
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
    changeEvent: ['display', 'direction', 'wrap', 'justifyContent', 'alignItems', 'alignContent'],
    __proto__: siteBlock,
    init: function (e) {
        let out = `display: ${this.display.value};`;

        if (this.direction.value !== '') out += `\nflex-direction: ${this.direction.value};`;
        if (this.wrap.value !== '') out += `\nflex-wrap: ${this.wrap.value};`;
        if (this.justifyContent.value !== '') out += `\njustify-content: ${this.justifyContent.value};`;
        if (this.alignItems.value !== '') out += `\nalign-items: ${this.alignItems.value};`;
        if (this.alignContent.value !== '') out += `\nalign-content: ${this.alignContent.value};`;

        this.setPromoStyle(out);
        this.setCode(out);
        this.showCode();
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
    if (obj.hasOwnProperty('inputEvent')) {
        obj.inputEvent.forEach( element => {
            obj[element].addEventListener('input', e => obj.init(e));
            if (element.indexOf('Progress') + 1) {
                obj[element].addEventListener('change', e => obj.init(e));
            }
        });
    }
    if (obj.hasOwnProperty('changeEvent')) {
        obj.changeEvent.forEach(function (e) {
            obj[e].addEventListener('change', e => obj.init(e));
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
    currentBlock = id;
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
    if (currentBlock !== null) {
        resetBlock(currentBlock);
        currentBlock = null;
    }
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

//
function resetBlock(id) {
    let block = document.getElementById(id);
    block.querySelector('form').reset();
    block.querySelector('.codeBlock').classList.add('hide');
    block.querySelector('.codeBlock pre').innerText = '';
    if (id === 'MultipleColumnBlock') {
        block.querySelector('.promoText').style.cssText = '';
    } else if (id === 'FontFaceBlock') {
    } else if (id === 'TextShadowBlock') {
        block.querySelector('.promoText').style.cssText = '';
        block.querySelector('.jscolor').style.cssText = '';
    } else if (id === 'BoxShadowBlock' || id === 'OutlineBlock') {
        block.querySelector('.promoBlock').style.cssText = '';
        block.querySelector('.jscolor').style.cssText = '';
    } else if (id === 'RgbaBlock') {
        block.querySelector('.promoText').style.cssText = '';
        block.querySelector('.promoBlock').style.cssText = '';
    } else if (id === 'FlexboxBlock') {
        block.querySelector('.promoFlex').style.cssText = '';
    } else {
        block.querySelector('.promoBlock').style.cssText = '';
    }
}