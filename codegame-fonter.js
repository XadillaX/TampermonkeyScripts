// ==UserScript==
// @name         CodeGame code font to \"Fantasque Sans Mono\"
// @updateURL    https://raw.githubusercontent.com/XadillaX/TampermonkeyScripts/master/codegame-fonter.js
// @namespace    http://xcoder.in/
// @version      0.1
// @description  Change CodeGame font to \"Fantasque Sans Mono\".
// @author       XadillaX
// @match        http://codegame.org/code/*
// @require      http://libs.useso.com/js/jquery/2.1.1/jquery.min.js
// ==/UserScript==

GM_addStyle(".CodeMirror pre { font-family: \"fantasque sans mono\"; }");
$(function() {
    $(document).keydown(function(evt) {
        evt = (evt) ? evt : ((event) ? event : null);
        if((evt.metaKey || evt.ctrlKey) && evt.keyCode === 83) {
            $(".publish-btn").click();
            return false;
        }
    });
});

