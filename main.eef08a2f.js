parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),d=document.querySelector(".append-row"),a=document.querySelector(".remove-row"),u=document.querySelector("tbody");function m(){v().forEach(function(e){var t=document.createElement("td");e.appendChild(t)}),y()}function f(){v().forEach(function(e){return e.lastElementChild.remove()}),y()}function s(){u.appendChild(p()),y()}function h(){u.lastElementChild.remove(),y()}function y(){i.disabled=v()[0].children.length>=10,l.disabled=v()[0].children.length<=2,d.disabled=u.children.length>=10,a.disabled=u.children.length<=2}function p(){for(var e=document.createElement("tr"),t=0;t<v()[0].children.length;t++){var n=document.createElement("td");e.append(n)}return e}i.addEventListener("click",m),d.addEventListener("click",s),a.addEventListener("click",h),l.addEventListener("click",f);var v=function(){return e(document.querySelectorAll("tr"))};
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.eef08a2f.js.map