!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.propsToCamelCase=r():e.propsToCamelCase=r()}("undefined"!=typeof self?self:this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function u(e){return i(e)?Object.assign.apply(Object,[{}].concat(o(Object.keys(e).map(function(r){return n({},a(r),i(e[r])?u(e[r]):Array.isArray(e[r])?f(e[r]):e[r])})))):f(e)}function f(e){return e.map(function(e){return i(e)?u(e):e})}function i(e){return null!==e&&"object"===(void 0===e?"undefined":s(e))&&!Array.isArray(e)}function c(e){return!!e&&("object"===(void 0===e?"undefined":s(e))||"function"==typeof e)&&"function"==typeof e.then}function a(e){for(var r=e.split(/[_]/),t="",n=1;n<r.length;n++)t+=r[n].charAt(0).toUpperCase()+r[n].slice(1);return r[0]+t}function p(e){try{if(!c(e)&&!i(e)&&!Array.isArray(e))throw new TypeError("Function takes only objects, arrays and promises");return i(e)?u(e):Array.isArray(e)?f(e):e.then(function(e){return Promise.resolve(u(e))})}catch(e){return e}}Object.defineProperty(r,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=p}])});