parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
var t={LIGHT:"light-theme",DARK:"dark-theme"},e=document.getElementById("theme-switch-toggle"),o=document.querySelector("js-menu"),s=e.addEventListener("change",a),c=localStorage.getItem("my-data"),d=JSON.parse(c);function a(){if(document.body.classList.contains(t.DARK)||""===document.body.classList)return document.body.classList.toggle(t.LIGHT),document.body.classList.remove(t.DARK),void localStorage.setItem("my-data",JSON.stringify(t.LIGHT));document.body.classList.toggle(t.DARK),document.body.classList.remove(t.LIGHT),localStorage.setItem("my-data",JSON.stringify(t.DARK))}document.body.classList.add(d),document.body.classList.contains(t.DARK)&&(e.checked=!0);
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/js.bad709c8.js.map