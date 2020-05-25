!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){(function(e){var n=e&&e.pid?e.pid.toString(36):"";function r(){var t=Date.now(),e=r.last||t;return r.last=t>e?t:e+1}t.exports=t.exports.default=function(t,e){return(t||"")+""+n+r().toString(36)+(e||"")},t.exports.process=function(t,e){return(t||"")+n+r().toString(36)+(e||"")},t.exports.time=function(t,e){return(t||"")+r().toString(36)+(e||"")}}).call(this,n(2))},function(t,e,n){t.exports=n(3)},function(t,e){var n,r,a=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var u,s=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?s=u.concat(s):d=-1,s.length&&p())}function p(){if(!l){var t=c(f);l=!0;for(var e=s.length;e;){for(u=s,s=[];++d<e;)u&&u[d].run();d=-1,e=s.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new h(t,e)),1!==s.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(t){return[]},a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.taskArr=[]}var e,n,r;return e=t,(n=[{key:"taskObj",value:function(t,e){var n={id:a()(),title:t,text:e};return this.taskArr.push(n),this.persistData(),n}},{key:"deleteTask",value:function(t){var e=this.taskArr.findIndex((function(e){return e.id===t}));this.taskArr.splice(e,1),this.persistData()}},{key:"persistData",value:function(){localStorage.setItem("AllTasks",JSON.stringify(this.taskArr))}},{key:"readStorage",value:function(){var t=JSON.parse(localStorage.getItem("AllTasks"));t&&(this.taskArr=t)}}])&&o(e.prototype,n),r&&o(e,r),t}(),c={allCards:document.getElementById("cards"),title:document.querySelector(".card__heading--add"),text:document.querySelector(".card__input"),addBtn:document.querySelector(".card__btn--add")},u=function(t){var e='\n    <div class="card" data-itemid='.concat(t.id,'>\n            <header class="card__header">\n              <h2 class="card__heading">').concat(t.title,'</h2>\n              <button class="card__done">\n              <svg\n                class="svg card__icon card__icon--done"\n                version="1.1"\n                id="Layer_1"\n                xmlns="http://www.w3.org/2000/svg"\n                xmlns:xlink="http://www.w3.org/1999/xlink"\n                x="0px"\n                y="0px"\n                viewBox="0 0 512 512"\n                style="enable-background: new 0 0 512 512;"\n                xml:space="preserve"\n              >\n                <g>\n                  <g>\n                    <path\n                      d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0\n\t\t\tc-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7\n\t\t\tC514.5,101.703,514.499,85.494,504.502,75.496z"\n                    />\n                  </g>\n                </g>\n              </svg>\n              </button>\n            </header>\n            <article class="card__article">\n              <p class="card__paragraph">\n              ').concat(t.text,"\n              </p>\n            </article>\n          </div> \n    ");c.allCards.insertAdjacentHTML("beforeend",e)},s={};window.addEventListener("load",(function(){s.task=new i,s.task.readStorage(),s.task.taskArr.forEach((function(t){return u(t)})),l()}));var l=function(){var t=document.querySelectorAll(".card");Array.from(t).forEach((function(t){return t.addEventListener("click",(function(t){var e=t.target.closest(".card").dataset.itemid;t.target.matches(".card__done, .card__done *")&&(s.task.deleteTask(e),function(t){var e=document.querySelector('[data-itemid="'.concat(t,'"]'));e.parentElement.removeChild(e)}(e))}))}))};c.addBtn.addEventListener("click",(function(){!function(){var t=c.title.value,e=c.text.value;if(t)if(e){var n=s.task.taskObj(t,e);u(n)}else alert("uzupełnij text");else alert("uzupełnij tytuł")}(),l()}))}]);