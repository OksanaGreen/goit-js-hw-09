!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i={startBtn:document.querySelector("button"),form:document.querySelector("form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]')};function u(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.form.addEventListener("submit",(function(e){e.preventDefault();var n=Number(i.delayInput.value),t=Number(i.stepInput.value),o=Number(i.amountInput.value);if(console.log(n,t,o),n<0||t<0||o<0)r.Notify.warning("Enter number more than 0");else if(0===Number(o))r.Notify.warning("Enter number more than 0");else for(var a=0;a<o;a+=1){u(a,n+t*a).then((function(e){var n=e.position,t=e.delay;console.log({position:n,delay:t}),r.Notify.success("✅ Fulfilled promise ".concat(n+1," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log({position:n,delay:t}),r.Notify.failure("❌ Rejected promise ".concat(n+1," in ").concat(t,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.fb20506a.js.map