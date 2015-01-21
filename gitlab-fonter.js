// ==UserScript==
// @name         Gitlab code font to "Fantasque Sans Mono"
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/gitlab-fonter.js
// @downloadURL  https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/gitlab-fonter.js
// @namespace    http://xcoder.in/
// @version      0.5
// @description  Change gitlab font to "Fantasque Sans Mono". You may add your own gitlab address your company hosted.
// @author       XadillaX
// @match        http://gitlab.com/*
// ==/UserScript==

GM_addStyle("code, kbd, pre, samp { font-family: \"fantasque sans mono\", \"WenyueType GutiFangsong (Noncommercial Use)\"; font-size: 14px; } pre code { font-size: 14px; }");

