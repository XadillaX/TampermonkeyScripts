// ==UserScript==
// @name         Quip AD Removior
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/quip-ad-removior.js
// @downloadURL  https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/quip-ad-removior.js
// @namespace    http://xcoder.in/
// @version      0.2
// @description  Remove AD of quip.
// @author       XadillaX
// @match        https://quip.com/*
// ==/UserScript==

GM_addStyle("#nag-bar { display: none; } body.has-nag-bar #app { top: 0; }");
GM_addStyle("body.nag-bar > #app { top: 0; }");
