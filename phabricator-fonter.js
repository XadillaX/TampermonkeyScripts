// ==UserScript==
// @name         Phabricator code font to "Fantasque Sans Mono"
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/phabricator-fonter.js
// @downloadURL  https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/phabricator-fonter.js
// @namespace    http://xcoder.in/
// @version      0.2
// @description  Change phabricator font to "Fantasque Sans Mono".
// @author       XadillaX
// @match        http://phabricator.huaban.com/*
// ==/UserScript==

GM_addStyle(".PhabricatorMonospaced, .phabricator-remarkup .remarkup-code-block .remarkup-code { font-family: \"Fantasque Sans Mono\", \"WenyueType GutiFangsong (Noncommercial Use)\"; font-size: 13px; }");

