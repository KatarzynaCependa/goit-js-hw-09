function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("19McP");document.querySelector("input[name=delay]"),document.querySelector("input[name=step]"),document.querySelector("input[name=amount]");const l=document.querySelector("button[type=submit]"),u=(e,n)=>new Promise(((t,o)=>{Math.random()>.3?t(`✅ Fulfilled promise ${e} in ${n}ms`):o(`❌ Rejected promise ${e} in ${n}ms`)}));u().then((({position:n,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)})),l.addEventListener("click",u());
//# sourceMappingURL=03-promises.61c4bb62.js.map
