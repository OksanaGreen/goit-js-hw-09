function e(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),d=document.querySelector("body");let r=null;console.log(d);document.querySelector("[data-days]"),document.querySelector("[data-hours]"),document.querySelector("[data-minutes]"),document.querySelector("[data-seconds]");t.addEventListener("click",(function(a){d.style.backgroundColor=e(),t.disabled=!0,o.disabled=!1,r=setInterval((()=>{d.style.backgroundColor=e()}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),t.disabled=!1,o.disabled=!0}));
//# sourceMappingURL=01-color-switcher.272c459b.js.map
