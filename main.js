!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){for(var t=window.location.search.substring(1).split("&"),n=0;n<t.length;n++){var r=t[n].split("=");if(decodeURIComponent(r[0])==e)return decodeURIComponent(r[1])}}if(n(1),qt=r("t"))var o=60*Number(qt)*1e3;else o=Number(60*prompt("분을 알려주세요.")*1e3);var i=(new Date).getTime()/1e3*1e3+o,a=new Date(i),s=a.getHours()+":"+("0"+a.getMinutes()).slice(-2);(bg=r("bg"))?document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+bg+")":document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?structure')";var c=document.querySelector("#container"),u=!1,l=!1,d=!1,f=new ProgressBar.Circle(c,{duration:o,svgStyle:{display:"block",width:"400px"},strokeWidth:10,trailColor:"rgba(0,0,0,0.8)",color:"rgba(0,255,0,0.8)",text:{value:"Text"},step:function(e,t,n){var r=Math.floor(o*(1-t.value())/1e3),i=Math.floor(r/60),a=r%60;u||0!==i||(u=!0,document.querySelector("body").style.backgroundImage="url('https://source.unsplash.com/1600x900/?code')",document.querySelector("body").style.backgroundSize="cover"),!l&&0===i&&a<30&&(document.querySelector("#container").classList.add("animated"),document.querySelector("#container").classList.add("infinite"),document.querySelector("#container").classList.add("flip"),l=!0),d||0!==i||0!==a||(document.querySelector("#container").className="",document.querySelector("#container").classList.add("animated"),document.querySelector("#container").classList.add("infinite"),document.querySelector("#container").classList.add("pulse"),document.querySelector("#container").classList.add("delay-1s"),d=!0,document.querySelector(".o2info").style.display="block"),0===i?(t.setText(a),f&&(f.text.style.color="rgba(255,0,0,1)",f.path.setAttribute("stroke","rgba(255,0,0,1)"))):(destElem='<div class="dest">'+s+"</div>",t.setText(destElem+i+":"+a))}});f.animate(1)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=e.exports=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Bungee&display=swap);",""]),t.push([e.i,"#hor {\n    display: grid;\n    grid-template-columns: 1fr 400px 1fr;\n}\n#ver{\n    display: grid;\n    grid-template-rows: 1fr 400px 1fr;\n    height:100vh;\n}\n.o2info{\n    display: none;\n    text-decoration: none;\n    width: 100%;\n    text-align: center;\n    font-size: 1em;\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    font-size:1rem;\n}\n.githubinfo a{\n    color:white;\n    text-decoration: none;\n    font-family: 'Open Sans Condensed', sans-serif;\n\n}\n.dest{\n    padding: 0;\n    color: white;\n    font-size: 0.5em;\n    text-align: center;\n    /* height: 0; */\n    height:0;\n    position: absolute;\n    width: 100%;\n    top:-48px;\n    font-family: 'Open Sans Condensed', cursive;\n    \n}\nbody{\n    font-family: 'Bungee', cursive;\n    font-size:6rem;\n    margin:0;\n    /*\n    background-image:url('https://source.unsplash.com/1600x900/?puppy');\n    background-image:url('https://source.unsplash.com/1600x900/?relax'); \n    */\n\n    background-size:cover;\n    overflow:hidden;\n    backdrop-filter: grayscale(100%);\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],t))}else{for(var s=[];a<r.parts.length;a++)s.push(g(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=m||(m=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return c(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i],u=o[a.id];u&&(u.refs--,r.push(u))}e&&c(s(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}}]);