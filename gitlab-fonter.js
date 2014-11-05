// ==UserScript==
// @name         Gitlab code font to \"Fantasque Sans Mono\"
// @namespace    http://xcoder.in/
// @version      0.1
// @description  Change gitlab font to \"Fantasque Sans Mono\". You may add your own gitlab address your company hosted.
// @author       XadillaX
// @match        http://gitlab.com/*
// @require      http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

$(function() {
    $("code").css("font-family", "fantasque sans mono");
    $("code").css("font-size", 14);
});

