// ==UserScript==
// @name         Github code font to \"Fantasque Sans Mono\"
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/github-fonter.js
// @namespace    https://xcoder.in/
// @version      0.1
// @description  Change github font to \"Fantasque Sans Mono\".
// @author       XadillaX
// @match        https://github.com/*
// ==/UserScript==

$(function() {
    $(".blob-code").css("font-family", "fantasque sans mono");
    $(".blob-code").css("font-size", 12.5);
});

