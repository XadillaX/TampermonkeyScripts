// ==UserScript==
// @name         Coding code font to "Fantasque Sans Mono"
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/coding-fonter.js
// @downloadURL  https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/coding-fonter.js
// @namespace    http://xcoder.in/
// @version      0.1
// @description  Change coding font to "Fantasque Sans Mono".
// @author       XadillaX
// @match        https://coding.net/*
// ==/UserScript==

GM_addStyle(".blob-body pre .line, .blob-nums { font-family: \"Fantasque Sans Mono\"; font-size: 13px; }");

