!function(){var t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};t.start.addEventListener("click",(function(e){t.start.setAttribute("disabled","true"),timerId=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.stop.addEventListener("click",(function(e){clearInterval(timerId),t.start.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.e08db4b2.js.map
