!function(){var t={btnStartEl:document.querySelector("button[data-start]"),btnStopEl:document.querySelector("button[data-stop]"),bodyBckgrdEl:document.querySelector("body")};t.btnStartEl.addEventListener("click",(function(){t.bodyBckgrdEl.style.backgroundColor=o(),t.btnStartEl.disabled=!0,n=setInterval((function(){t.bodyBckgrdEl.style.backgroundColor=o()}),1e3)})),t.btnStopEl.addEventListener("click",(function(){clearInterval(n),t.btnStartEl.disabled=!1}));var n=0;function o(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.2c5c09ae.js.map