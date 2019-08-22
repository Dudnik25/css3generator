<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="CSS3 Generator by Andrei Dudnik" />
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="css//libs/libs.min.css" rel="stylesheet" type="text/css">
    <link href="css/main.min.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="image/favicon.png" type="image/x-icon">
    <title>CSS3 | Generator</title>
</head>
<body>
<div class="wrapper">
    <header>
        <h1>CSS3 Generator</h1>
        <div class="header">
            <h2 id="headline" class="animated flipInX">Choose Something</h2>
            <div id="menuButton" class="clearfix">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
    <section id="content">

        <nav id="navmenu" class="animated bounceInUp">
            <ul class="clearfix">
                <li><button id="BorderRadius">Border Radius</button></li>
                <li><button id="BoxShadow">Box Shadow</button></li>
                <li><button id="TextShadow">Text Shadow</button></li>
                <li><button id="RGBA">RGBA</button></li>
                <li><button id="FontFace">@Font Face</button></li>
                <li><button id="MultipleColumn">Multiple Column</button></li>
                <li><button id="BoxResize">Box Resize</button></li>
                <li><button id="BoxSizing">Box Sizing</button></li>
                <li><button id="Outline">Outline</button></li>
                <li><button id="Transition">Transition</button></li>
                <li><button id="Transform">Transform</button></li>
                <li><button id="Flexbox">Flexbox</button></li>
            </ul>
        </nav>

        <div id="BorderRadiusBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="BorderRadiusInputAll">All:</label>
                    <input name="all" type="text" id="BorderRadiusInputAll" value="" size="1">px
                    <input name="all" id="BorderRadiusProgressAll" type="range" min="0" max="100" step="1" value="0">
                </li>
                <li>
                    <label for="BorderRadiusInputTopLeft">Top Left:</label>
                    <input name="topLeft" type="text" id="BorderRadiusInputTopLeft" value="" size="1">px
                    <input name="topLeft" id="BorderRadiusProgressTopLeft" type="range" min="0" max="100" step="1" value="0">
                </li>
                <li>
                    <label for="BorderRadiusInputTopRight">Top Right:</label>
                    <input name="topRight" type="text" id="BorderRadiusInputTopRight" value="" size="1">px
                    <input name="topRight" id="BorderRadiusProgressTopRight" type="range" min="0" max="100" step="1" value="0">
                </li>
                <li>
                    <label for="BorderRadiusInputBottomLeft">Bottom Left:</label>
                    <input name="bottomLeft" type="text" id="BorderRadiusInputBottomLeft" value="" size="1">px
                    <input name="bottomLeft" id="BorderRadiusProgressBottomLeft" type="range" min="0" max="100" step="1" value="0">
                </li>
                <li>
                    <label for="BorderRadiusInputeBottomRight">Bottom Right:</label>
                    <input name="bottomRight" type="text" id="BorderRadiusInputBottomRight" value="" size="1">px
                    <input name="bottomRight" id="BorderRadiusProgressBottomRight" type="range" min="0" max="100" step="1" value="0">
                </li>
            </ul>
            <div id="BorderRadiusPromo" class="promoBlock"></div>
            <div id="BorderRadiusCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="BoxShadowBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="BoxShadowInset">Inset:</label>
                    <select id="BoxShadowInset">
                        <option value="0" selected>No</option>
                        <option value="1">Inset</option>
                    </select>
                </li>
                <li>
                    <label for="BoxShadowHL">Horizontal Length:</label>
                    <input type="text" id="BoxShadowHL" value="" size="2">px
                </li>
                <li>
                    <label for="BoxShadowVL">Vertical Length:</label>
                    <input type="text" id="BoxShadowVL" value="" size="2">px
                </li>
                <li>
                    <label for="BoxShadowBR">Blur Radius:</label>
                    <input type="text" id="BoxShadowBR" value="" size="2">px
                </li>
                <li>
                    <label for="BoxShadowSpread">Spread:</label>
                    <input type="text" id="BoxShadowSpread" value="" size="2">px
                </li>
                <li>
                    <label for="BoxShadowCT">Color Type:</label>
                    <select name="" id="BoxShadowCT">
                        <option value="0" selected>Hex</option>
                        <option value="1">RGBA</option>
                    </select>
                </li>
                <li id="BoxShadowColorHexBlock" class="hide">
                    <label for="BoxShadowColorHex">Hex Color:</label>
                    <input type="text" id="BoxShadowColorHex" value="" size="4">
                </li>
                <li id="BoxShadowColorRGBABlock" class="hide">
                    <label for="BoxShadowColorRGBA">Hex Color:</label>(
                    <input type="text" id="BoxShadowColorRGBA" value="" size="1">,
                    <input type="text" id="BoxShadowColorRGBA" value="" size="1">,
                    <input type="text" id="BoxShadowColorRGBA" value="" size="1">,
                    <input type="text" id="BoxShadowColorRGBA" value="" size="1">)
                </li>
            </ul>
            <div id="BoxShadowPromo" class="promoBlock"></div>
            <div id="BoxShadowCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="TextShadowBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="TextShadowHL">Horizontal Length:</label>
                    <input type="text" id="TextShadowHL" value="" size="2">px
                </li>
                <li>
                    <label for="TextShadowVL">Vertical Length:</label>
                    <input type="text" id="TextShadowVL" value="" size="2">px
                </li>
                <li>
                    <label for="TextShadowBR">Blur Radius:</label>
                    <input type="text" id="TextShadowBR" value="" size="2">px
                </li>
                <li id="TextShadowColorBlock">
                    <label for="TextShadowColor">Shadow Color:</label>
                    <input type="text" id="TextShadowColor" value="" size="4">
                </li>
            </ul>
            <div id="TextShadowPromo" class="promoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis nulla, ut bibendum turpis.
                Integer tincidunt enim a tincidunt eleifend. Quisque at finibus urna.
                Aliquam bibendum ligula non viverra suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Maecenas quis ligula vitae orci dignissim tempor. Donec convallis tincidunt elit, eu tincidunt quam lacinia in.
                Aliquam purus ante, sagittis vitae pretium in, volutpat eget dolor.
                Fusce accumsan odio vitae nibh dapibus, in efficitur massa tristique.
            </div>
            <div id="TextShadowCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="RGBABlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="RGBA-R">R:</label>
                    <input type="text" id="RGBA-R" value="" size="2">
                    <input id="RGBAProgress-R" type="range" min="0" max="255" step="1" value="0">
                </li>
                <li>
                    <label for="RGBA-G">G:</label>
                    <input type="text" id="RGBA-G" value="" size="2">
                    <input id="RGBAProgress-G" type="range" min="0" max="255" step="1" value="0">
                </li>
                <li>
                    <label for="RGBA-B">B:</label>
                    <input type="text" id="RGBA-B" value="" size="2">
                    <input id="RGBAProgress-B" type="range" min="0" max="255" step="1" value="0">
                </li>
                <li>
                    <label for="RGBA-Opacity">Opacity:</label>
                    <input type="text" id="RGBA-Opacity" value="" size="2">
                    <input id="RGBAProgress-Opacity" type="range" min="0" max="255" step="1" value="0">
                </li>
            </ul>
            <div id="RGBAPromo" class="promoText"></div>
            <div id="RGBACode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="FontFaceBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="FontFaceFontFamily">Font Family:</label>
                    <input type="text" id="FontFaceFontFamily" value="" size="10">
                </li>
                <li>
                    <label for="FontFaceFontName">Font Name:</label>
                    <input type="text" id="FontFaceFontFamily" value="" size="10">
                </li>
            </ul>
            <div id="RGBACode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="MultipleColumnBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="MultipleColumnNumber">Number of Columns:</label>
                    <input type="text" id="MultipleColumnNumber" value="" size="2">
                </li>
                <li>
                    <label for="MultipleColumnGap">Column Gap:</label>
                    <input type="text" id="MultipleColumnGap" value="" size="2">px
                </li>
            </ul>
            <div id="MultipleColumnPromo" class="promoText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis nulla, ut bibendum turpis.
                Integer tincidunt enim a tincidunt eleifend. Quisque at finibus urna.
                Aliquam bibendum ligula non viverra suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Maecenas quis ligula vitae orci dignissim tempor. Donec convallis tincidunt elit, eu tincidunt quam lacinia in.
                Aliquam purus ante, sagittis vitae pretium in, volutpat eget dolor.
                Fusce accumsan odio vitae nibh dapibus, in efficitur massa tristique.
            </div>
            <div id="MultipleColumnCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="BoxResizeBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="BoxResizeR">Box Resize:</label>
                    <select id="BoxResizeR">
                        <option value="none" selected>None</option>
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical">Vertical</option>
                        <option value="both">Both</option>
                    </select>
                </li>
                <li>
                    <label for="BoxResizeO">Overflow:</label>
                    <select id="BoxResizeO">
                        <option value="auto" selected>auto</option>
                        <option value="visible">visible</option>
                        <option value="hidden">hidden</option>
                        <option value="scroll">scroll</option>
                    </select>
                </li>
                <li>
                    <label for="BoxResizeMinW">Min Width:</label>
                    <input type="text" id="BoxResizeMinW" value="" size="2">px
                </li>
                <li>
                    <label for="BoxResizeMinH">Min Height:</label>
                    <input type="text" id="BoxResizeMinH" value="" size="2">px
                </li>
            </ul>
            <div id="BoxResizePromo" class="promoBlock"></div>
            <div id="BoxResizeCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="BoxSizingBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="BoxSizingS">Box Resize:</label>
                    <select id="BoxSizingS">
                        <option disabled selected></option>
                        <option value="border-box">Border Box</option>
                        <option value="content-box">Content Box</option>
                    </select>
                </li>
            </ul>
            <div id="BoxSizingCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="OutlineBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="OutlineStyle">Outline Style:</label>
                    <select id="OutlineStyle">
                        <option disabled selected></option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                        <option value="solid">Solid</option>
                        <option value="double">Double</option>
                        <option value="groove">Groove</option>
                        <option value="ridge">Ridge</option>
                        <option value="inset">Inset</option>
                        <option value="outset">Outset</option>
                        <option value="auto">Auto</option>
                    </select>
                </li>
                <li>
                    <label for="OutlineWidth">Outline Width:</label>
                    <input type="text" id="OutlineWidth" value="" size="2">px
                </li>
                <li>
                    <label for="OutlineColor">Outline Color:</label>
                    <input type="text" id="OutlineColor" value="" size="2">
                </li>
                <li>
                    <label for="OutlineOffset">Outline Offset:</label>
                    <input type="text" id="OutlineOffset" value="" size="2">px
                </li>
            </ul>
            <div id="OutlinePromo" class="promoBlock"></div>
            <div id="OutlineCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="TransitionBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="TransitionProperty">Property:</label>
                    <select id="TransitionProperty">
                        <option disabled selected></option>
                        <option value="all" selected>All</option>
                        <option value="background">Background</option>
                        <option value="color">Color</option>
                        <option value="outline">Outline</option>
                        <option value="width">Width</option>
                        <option value="height">Height</option>
                    </select>
                </li>
                <li>
                    <label for="TransitionPropertyFunction">Timing Function:</label>
                    <select id="TransitionPropertyFunction">
                        <option disabled selected></option>
                        <option value="ease">Ease</option>
                        <option value="linear">Linear</option>
                        <option value="ease-in">Ease-in</option>
                        <option value="ease-out">Ease-out</option>
                        <option value="ease-in-out">Ease-in-out</option>
                    </select>
                </li>
                <li>
                    <label for="TransitionDuration">Duration:</label>
                    <input type="text" id="TransitionDuration" value="" size="2">
                    <select id="TransitionDurationTime">
                        <option disabled selected></option>
                        <option value="s">Seconds</option>
                        <option value="ms">Miliseconds</option>
                    </select>
                </li>
                <li>
                    <label for="TransitionDelay">Delay:</label>
                    <input type="text" id="TransitionDelay" value="" size="2">
                    <select id="TransitionDelayTime">
                        <option disabled selected></option>
                        <option value="s">Seconds</option>
                        <option value="ms">Miliseconds</option>
                    </select>
                </li>
            </ul>
            <div id="TransitionPromo" class="promoBlock"></div>
            <div id="TransitionCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="TransformBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="TransformScale">Scale:</label>
                    <input type="text" id="TransformScale" value="" size="2">
                </li>
                <li>
                    <label for="TransformRotate">Rotate:</label>
                    <input type="text" id="TransformRotate" value="" size="2">deg
                </li>
                <li>
                    <label for="TransformTranslate">Translate:</label>
                    <input type="text" id="TransformTranslateX" value="" size="2">px&nbsp;&nbsp;
                    <input type="text" id="TransformTranslateY" value="" size="2">px
                </li>
                <li>
                    <label for="TransformSkew">Skew:</label>
                    <input type="text" id="TransformSkewX" value="" size="2">deg
                    <input type="text" id="TransformSkewY" value="" size="2">deg
                </li>
            </ul>
            <div id="BorderRadiusPromo" class="promoBlock"></div>
            <div id="BorderRadiusCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

        <div id="FlexboxBlock" class="hide animatedFast fadeInUp">
            <ul class="settings">
                <li>
                    <label for="FlexboxDisplay">Flex Display:</label>
                    <select id="FlexboxDisplay">
                        <option value="flex" selected>Flex</option>
                        <option value="inline-flex">Inline Flex</option>
                    </select>
                </li>
                <li>
                    <label for="FlexboxDirection">Flex Direction:</label>
                    <select id="FlexboxDirection">
                        <option value="row" selected>Row</option>
                        <option value="row-reverse" selected>Row Reverse</option>
                        <option value="column">Column</option>
                        <option value="column-reverse">Column Reverse</option>
                    </select>
                </li>
                <li>
                    <label for="FlexboxWrap">Flex Wrap:</label>
                    <select id="FlexboxWrap">
                        <option value="wrap" selected>Wrap</option>
                        <option value="nowrap">Nowrap</option>
                        <option value="wrap-reverse">Wrap Reverse</option>
                    </select>
                </li>
                <li>
                    <label for="FlexboxDisplayJC">Justify Content:</label>
                    <select id="FlexboxDisplayJC">
                        <option value="flex-start" selected>Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                        <option value="space-between">Space Between</option>
                        <option value="space-around">Space Around</option>
                    </select>
                </li>
                <li>
                    <label for="FlexboxDisplayAI">Align Items:</label>
                    <select id="FlexboxDisplayAI">
                        <option value="flex-start" selected>Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                        <option value="baseline">Baseline</option>
                        <option value="stretch">Stretch</option>
                    </select>
                </li>
                <li>
                    <label for="FlexboxDisplayAC">Align Content:</label>
                    <select id="FlexboxDisplayAC">
                        <option value="flex-start" selected>Flex Start</option>
                        <option value="flex-end">Flex End</option>
                        <option value="center">Center</option>
                        <option value="space-between">Space Between</option>
                        <option value="space-around">Space Around</option>
                        <option value="stretch">Stretch</option>
                    </select>
                </li>
            </ul>
            <div id="FlexboxPromo" class="promoFlex">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
            <div id="FlexboxCode" class="codeBlock">
                <pre></pre>
                <div class="copyCode">Copy</div>
            </div>
        </div>

    </section>
</div>


<script src="js/main.min.js" defer></script>
</body>
</html>