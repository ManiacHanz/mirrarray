!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define([],factory):"object"==typeof exports?exports.mirrarray=factory():root.mirrarray=factory()}(this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){"use strict";function MirrarrayError(){}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};MirrarrayError.prototype=Object.create(Error.prototype);var isValidKey=function(element){return["string","number","boolean","undefined"].includes(void 0===element?"undefined":_typeof(element))||null===element},arrayToKeyMirror=function(arr){if(!Array.isArray(arr))throw new MirrarrayError("Input to mirrarray must be an array!");return arr.reduce(function(acc,key){if(!isValidKey(key))throw new MirrarrayError("Invalid key contained within input array; each element must be either a string or number!");return acc[key]=key,acc},{})};exports.default=arrayToKeyMirror}])});