// ==UserScript==
// @name         Github code font to \"Fantasque Sans Mono\"
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/github-fonter.js
// @downloadURL  https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/github-fonter.js
// @namespace    http://xcoder.in/
// @version      0.2
// @description  Change github font to \"Fantasque Sans Mono\".
// @author       XadillaX
// @match        https://github.com/*
// ==/UserScript==

GM_addStyle(".blob-code, pre { font-family: \"fantasque sans mono\"; font-size: 13px; }");

