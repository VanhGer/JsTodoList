/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/forms/form.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/forms/form.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popUp {\r\n    position: fixed;\r\n    background-color: rgba(53, 48, 48, 0.151);\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.projectForm {\r\n    display:flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: rgb(205, 231, 200);\r\n    border-radius: 10px;\r\n    border:rgba(0, 0, 0, 0.6) solid;\r\n    height: 120px;\r\n    width: 20%;\r\n    box-shadow: var(rgba(0, 0, 0, 0.16) 0px 1px 4px);\r\n}\r\n\r\n.taskForm {\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: rgb(205, 231, 200);\r\n    border-radius: 10px;\r\n    border:rgba(0, 0, 0, 0.6) solid;\r\n    height: 180px;\r\n    width: 20%;\r\n    box-shadow: var(rgba(0, 0, 0, 0.16) 0px 1px 4px);\r\n}\r\n\r\n.form-title {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 18;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.projectTitle {\r\n    font-size: 17px;\r\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n\r\n.dynamicBtn {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.dynamic {\r\n    display: flex;\r\n    border: black solid;\r\n    font-size: 18px;\r\n    border-radius: 3px;\r\n    background-color:inherit;\r\n    padding: 2px;\r\n    margin-bottom: 4px;\r\n    color: black;\r\n    width: 75%;\r\n    transform: scale(1);\r\n}\r\n\r\n.dynamic:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.closeBtn {\r\n    color:black;\r\n    margin-left: 4px;\r\n    margin-right: 7px;\r\n}\r\n\r\n.closeBtn:hover {\r\n    color: red;\r\n}\r\n\r\n.addTaskBtn {\r\n    border: black 2px solid;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    width: 100px;\r\n    background-color: rgba(20, 95, 20, 0.466);\r\n    color: black;\r\n    transform: scale(1);\r\n    margin-left: 20px;\r\n    margin-top: 5px;\r\n\r\n}\r\n\r\n.addTaskBtn:hover {\r\n    filter: brightness(50%);\r\n    cursor: pointer;\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.projectContent {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\ninput {\r\n    width: 80%;\r\n    height: 20px;\r\n    font-size: 16px;\r\n    border: solid 2px black;\r\n    border-radius: 5px;\r\n    margin-top: 2px;\r\n}\r\n\r\n\r\n\r\n.taskDisplay {\r\n    display: flex;\r\n    background-color: rgba(175, 123, 56, 0.774);\r\n    width: 80%;\r\n    border: 2px black solid;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 4;\r\n    gap: 2px;\r\n}\r\n\r\n.taskHeader{\r\n    font-size: 23px;\r\n    font-weight: bold;\r\n    margin-top: 0px;\r\n}\r\n\r\n.taskDes{\r\n    font-size: 15px;\r\n    margin-top: -23px;\r\n    margin-bottom: 0%;\r\n}", "",{"version":3,"sources":["webpack://./src/forms/form.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,yCAAyC;IACzC,WAAW;IACX,YAAY;IACZ,MAAM;IACN,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,oCAAoC;IACpC,mBAAmB;IACnB,+BAA+B;IAC/B,aAAa;IACb,UAAU;IACV,gDAAgD;AACpD;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,oCAAoC;IACpC,mBAAmB;IACnB,+BAA+B;IAC/B,aAAa;IACb,UAAU;IACV,gDAAgD;AACpD;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,iBAAiB;AACrB;;;AAGA;IACI,eAAe;IACf,oGAAoG;AACxG;;;AAGA;IACI,aAAa;IACb,WAAW;AACf;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,sCAAsC;IACtC,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,yCAAyC;IACzC,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;AACnB;;;;AAIA;IACI,aAAa;IACb,2CAA2C;IAC3C,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB","sourcesContent":[".popUp {\r\n    position: fixed;\r\n    background-color: rgba(53, 48, 48, 0.151);\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.projectForm {\r\n    display:flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: rgb(205, 231, 200);\r\n    border-radius: 10px;\r\n    border:rgba(0, 0, 0, 0.6) solid;\r\n    height: 120px;\r\n    width: 20%;\r\n    box-shadow: var(rgba(0, 0, 0, 0.16) 0px 1px 4px);\r\n}\r\n\r\n.taskForm {\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-color: rgb(205, 231, 200);\r\n    border-radius: 10px;\r\n    border:rgba(0, 0, 0, 0.6) solid;\r\n    height: 180px;\r\n    width: 20%;\r\n    box-shadow: var(rgba(0, 0, 0, 0.16) 0px 1px 4px);\r\n}\r\n\r\n.form-title {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 18;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.projectTitle {\r\n    font-size: 17px;\r\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n}\r\n\r\n\r\n.dynamicBtn {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n\r\n.dynamic {\r\n    display: flex;\r\n    border: black solid;\r\n    font-size: 18px;\r\n    border-radius: 3px;\r\n    background-color:inherit;\r\n    padding: 2px;\r\n    margin-bottom: 4px;\r\n    color: black;\r\n    width: 75%;\r\n    transform: scale(1);\r\n}\r\n\r\n.dynamic:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.closeBtn {\r\n    color:black;\r\n    margin-left: 4px;\r\n    margin-right: 7px;\r\n}\r\n\r\n.closeBtn:hover {\r\n    color: red;\r\n}\r\n\r\n.addTaskBtn {\r\n    border: black 2px solid;\r\n    font-size: 14px;\r\n    border-radius: 5px;\r\n    width: 100px;\r\n    background-color: rgba(20, 95, 20, 0.466);\r\n    color: black;\r\n    transform: scale(1);\r\n    margin-left: 20px;\r\n    margin-top: 5px;\r\n\r\n}\r\n\r\n.addTaskBtn:hover {\r\n    filter: brightness(50%);\r\n    cursor: pointer;\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.projectContent {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\ninput {\r\n    width: 80%;\r\n    height: 20px;\r\n    font-size: 16px;\r\n    border: solid 2px black;\r\n    border-radius: 5px;\r\n    margin-top: 2px;\r\n}\r\n\r\n\r\n\r\n.taskDisplay {\r\n    display: flex;\r\n    background-color: rgba(175, 123, 56, 0.774);\r\n    width: 80%;\r\n    border: 2px black solid;\r\n    border-radius: 5px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 4;\r\n    gap: 2px;\r\n}\r\n\r\n.taskHeader{\r\n    font-size: 23px;\r\n    font-weight: bold;\r\n    margin-top: 0px;\r\n}\r\n\r\n.taskDes{\r\n    font-size: 15px;\r\n    margin-top: -23px;\r\n    margin-bottom: 0%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --h1-color: white;\r\n    --header-color: rgba(29, 34, 25, 0.596);\r\n    --bgr-color: rgba(233, 243, 205, 0.685);\r\n    --btn-container: rgba(250, 176, 115, 0.596);\r\n    --default-transition: all 0.2s ease-in-out;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    top: 0;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n    background-color: var(--header-color);\r\n    max-height: 20vh;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 40px;\r\n    color: white;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: center;\r\n    background-color: black;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 20;\r\n    color: white;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n}\r\n\r\n.mainContent {\r\n    display: flex;\r\n    background-color: var(--bgr-color);\r\n    flex-wrap: nowrap;\r\n    height: 100%;\r\n    width: 100%;\r\n    flex-grow: 1;\r\n}\r\n\r\n\r\n\r\n.btnContainer {\r\n    display: flex;\r\n    background-color: var(--btn-container);\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 230px;\r\n}\r\n\r\n.staticBtns {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.dynamicBtns {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    flex-grow: 25;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.dyHeading {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 25px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.staHeading {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 25px;\r\n    margin-bottom: 2px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.addBtn {\r\n    border: none;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    background-color: initial;\r\n    padding: 6px;\r\n    color: black;\r\n    width: 70%;\r\n    transform: scale(1);\r\n    margin-top: -13%;\r\n    margin-bottom: 4px;\r\n\r\n}\r\n\r\n\r\n\r\n.addBtn:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.static {\r\n    border: black solid;\r\n    font-size: 18px;\r\n    border-radius: 3px;\r\n    background-color:inherit;\r\n    padding: 4px;\r\n    margin-top: 4px;\r\n    color: black;\r\n    width: 80%;\r\n    transform: scale(1);\r\n}\r\n\r\n.static:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,uCAAuC;IACvC,uCAAuC;IACvC,2CAA2C;IAC3C,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,MAAM;IACN,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,8CAA8C;IAC9C,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,8CAA8C;IAC9C,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;;;AAIA;IACI,aAAa;IACb,sCAAsC;IACtC,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,MAAM;IACN,WAAW;AACf;;AAEA;IACI,uEAAuE;IACvE,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,uEAAuE;IACvE,eAAe;IACf,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,UAAU;IACV,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;;AAEtB;;;;AAIA;IACI,uBAAuB;IACvB,eAAe;IACf,sCAAsC;IACtC,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,sCAAsC;IACtC,qCAAqC;IACrC,qBAAqB;AACzB","sourcesContent":[":root {\r\n    --h1-color: white;\r\n    --header-color: rgba(29, 34, 25, 0.596);\r\n    --bgr-color: rgba(233, 243, 205, 0.685);\r\n    --btn-container: rgba(250, 176, 115, 0.596);\r\n    --default-transition: all 0.2s ease-in-out;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    top: 0;\r\n    min-height: 100vh;\r\n    line-height: 1.6;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n    background-color: var(--header-color);\r\n    max-height: 20vh;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 40px;\r\n    color: white;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    align-items: center;\r\n    background-color: black;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: 20;\r\n    color: white;\r\n}\r\n\r\n.content {\r\n    width: 100%;\r\n}\r\n\r\n.mainContent {\r\n    display: flex;\r\n    background-color: var(--bgr-color);\r\n    flex-wrap: nowrap;\r\n    height: 100%;\r\n    width: 100%;\r\n    flex-grow: 1;\r\n}\r\n\r\n\r\n\r\n.btnContainer {\r\n    display: flex;\r\n    background-color: var(--btn-container);\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 230px;\r\n}\r\n\r\n.staticBtns {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.dynamicBtns {\r\n    display:flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    flex-grow: 25;\r\n    flex-direction: column;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.dyHeading {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 25px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.staHeading {\r\n    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    font-size: 25px;\r\n    margin-bottom: 2px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.addBtn {\r\n    border: none;\r\n    font-size: 14px;\r\n    border-radius: 10px;\r\n    background-color: initial;\r\n    padding: 6px;\r\n    color: black;\r\n    width: 70%;\r\n    transform: scale(1);\r\n    margin-top: -13%;\r\n    margin-bottom: 4px;\r\n\r\n}\r\n\r\n\r\n\r\n.addBtn:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}\r\n\r\n.static {\r\n    border: black solid;\r\n    font-size: 18px;\r\n    border-radius: 3px;\r\n    background-color:inherit;\r\n    padding: 4px;\r\n    margin-top: 4px;\r\n    color: black;\r\n    width: 80%;\r\n    transform: scale(1);\r\n}\r\n\r\n.static:hover {\r\n    filter: brightness(80%);\r\n    cursor: pointer;\r\n    background-color: var(--btn-container);\r\n    transition: var(--default-transition);\r\n    transform: scale(1.1);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/tabs/tab.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/tabs/tab.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.newTab {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.inactive {\r\n    display: none;\r\n}\r\n\r\n\r\n.active {\r\n    display: flex;\r\n}\r\n\r\n\r\n\r\n.content {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.contentHeading {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    min-width: 100%;\r\n    font-size: 40px;\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color: white;\r\n}", "",{"version":3,"sources":["webpack://./src/tabs/tab.css"],"names":[],"mappings":";AACA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,aAAa;AACjB;;;;AAIA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,8CAA8C;IAC9C,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,8CAA8C;IAC9C,YAAY;AAChB","sourcesContent":["\r\n.newTab {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.inactive {\r\n    display: none;\r\n}\r\n\r\n\r\n.active {\r\n    display: flex;\r\n}\r\n\r\n\r\n\r\n.content {\r\n    display: flex;\r\n    justify-items: center;\r\n}\r\n\r\n.contentHeading {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    min-width: 100%;\r\n    font-size: 40px;\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color: white;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/forms/form.css":
/*!****************************!*\
  !*** ./src/forms/form.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/forms/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/tabs/tab.css":
/*!**************************!*\
  !*** ./src/tabs/tab.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tab.css */ "./node_modules/css-loader/dist/cjs.js!./src/tabs/tab.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_tab_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/forms/class.js":
/*!****************************!*\
  !*** ./src/forms/class.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }
}

class Project {
    constructor(title) {
        this.tasks = [];
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    addTask(newTask) {
        if (!this.isAlreadyIn(newTask))  this.tasks.push(newTask);
        else alert("This task is already in your project.")
    }

    removeTask(title) {
        this.tasks = this.tasks.filter((task) => task.title !== title);
    }

    getTask(title) {
        return this.tasks.filter((task) => task.title === title);
    }

    isAlreadyIn(newTask) {
        return this.tasks.some((task) => task.title === newTask.title);
    }

    indexOf(task) {
        if (this.isAlreadyIn(task)) {
            return this.tasks.indexOf(task);
        }
    }

    copy(prj) {
        this.tasks = prj.tasks;
    }

    sort() {
        this.tasks.sort(function(a, b) {
            return a > b;
        })
    }
}

class ProjectList {
    constructor() {
        this.list = [];
    }
    addProject(newProject) {
        if (!this.isAlreadyIn(newProject))  this.list.push(newProject);
        else alert("This project is already in your list.")
    }

    removeProject(title) {
        this.list = this.list.filter((project) => project.title !== title);
    }

    getProject(title) {
        return this.list.filter((project) => project.title === title);
    }

    isAlreadyIn(newProject) {
        return this.list.some((project) => project.title === newProject.title);
    }

    indexOf(project) {
        if (this.isAlreadyIn(project)) {
            return this.list.indexOf(project);
        }
    }

    copy(lst) {
        this.list = lst.list;
    }

    sz() {
        return this.list.length;
    }
}



/***/ }),

/***/ "./src/forms/management.js":
/*!*********************************!*\
  !*** ./src/forms/management.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/forms/class.js");


const list = new _class__WEBPACK_IMPORTED_MODULE_0__.ProjectList();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);

/***/ }),

/***/ "./src/forms/project.js":
/*!******************************!*\
  !*** ./src/forms/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/forms/class.js");
/* harmony import */ var _management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management */ "./src/forms/management.js");
/* harmony import */ var _static_btntab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static-btntab */ "./src/static-btntab.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/forms/task.js");





//set active for form.
function setActive(popUp, projectForm) {
    return function active() {
        if (popUp.classList.contains('active') && projectForm.classList.contains('active')) {
            return;
        }
        if (! projectForm.classList.contains('active')) projectForm.classList.add('active');
        if (! popUp.classList.contains('active')) popUp.classList.add('active');
    }
}

function staticPrj(project) {
    if (project.title === 'Today') return true;
    if (project.title === 'Week') return true;
    if (project.title === 'All') return true;
    return false;
}
// show project list.
function showProjectList() {
    const dynamicBtns = document.getElementById('dynamicBtns');

    dynamicBtns.innerHTML = '';
    for (let project of _management__WEBPACK_IMPORTED_MODULE_1__["default"].list) {
        if (staticPrj(project)) {
            continue;
        }
        renderProject(project, dynamicBtns);
    }
}

// render project
function renderProject(project, dynamicBtns) {

    const newPrjBtn = document.createElement('div');
    newPrjBtn.classList.add('dynamicBtn');

    const newPrj = document.createElement('div');
    newPrj.classList.add('dynamic');

    const close = document.createElement('div');
    close.textContent = "☒";
    close.classList.add('closeBtn');
    newPrjBtn.appendChild(close);


    //close
    close.addEventListener('click', () => {
        _management__WEBPACK_IMPORTED_MODULE_1__["default"].list.splice(_management__WEBPACK_IMPORTED_MODULE_1__["default"].indexOf(project), 1);
        const content = document.getElementById('content');
        content.innerHTML = '';
        console.log("cc");
        //setData();
        showProjectList();
    })

    const title = document.createElement('div');
    title.textContent = project.title;
    title.classList.add('projectTitle');
    newPrj.appendChild(title);
    newPrjBtn.appendChild(newPrj)
    dynamicBtns.appendChild(newPrjBtn);

    // link to new Tab
    const prjTab = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_2__.createTab)(project.title);
    const heading = document.createElement('p');
    heading.textContent = project.title;
    heading.classList.add('contentHeading');
    prjTab.appendChild(heading);

    const mainContent = document.createElement('div');
    mainContent.classList.add('projectContent');
    mainContent.setAttribute('id', 'projectContent')
    prjTab.appendChild(mainContent);

    (0,_static_btntab__WEBPACK_IMPORTED_MODULE_2__.addOnClick)(newPrj, prjTab, project);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "＋ Add task";
    addTaskBtn.classList.add('addTaskBtn');
    prjTab.appendChild(addTaskBtn);
    (0,_task__WEBPACK_IMPORTED_MODULE_3__.addTaskBtnOnClick)(addTaskBtn, project);
    
}


function projectConfirmOnClick(popUp, projectForm) {
    return function confirm() {
        const title = document.getElementById('project-title-input').value;
        if (title === '') {
            alert("please enter the title");
            return;
        }

        const newprj = new _class__WEBPACK_IMPORTED_MODULE_0__.Project(title);
        popUp.classList.remove('active');
        projectForm.classList.remove('active');
        _management__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(newprj); 
        projectForm.reset();
        //setData()
        showProjectList();
    }
}

function projectCancelOnClick(form, project) {
    return function confirm() {
        project.classList.remove('active');
        form.classList.remove('active');
        project.reset();
        showProjectList();
    }
}

function setProjectForm() {
    //setTaskForm();
    const addBtn = document.getElementById('addBtn');

    const taskPopUp = document.createElement('div');
    taskPopUp.classList.add('popUp');
    taskPopUp.setAttribute('id', 'taskPopUp');
    taskPopUp.classList.add('inactive');

    const popUp = document.createElement('div');
    popUp.classList.add('popUp');
    popUp.setAttribute('id', 'popUp');
    popUp.classList.add('inactive');


    const projectForm = document.createElement('form');
    projectForm.classList.add('projectForm');
    projectForm.classList.add('inactive');
    projectForm.setAttribute('id', 'projectForm');
    
    const formTitle = document.createElement('div');
    formTitle.textContent = 'Add a project';
    formTitle.classList.add('form-title');
    projectForm.appendChild(formTitle);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('maxlength', '15');
    title.id = 'project-title-input';
    title.required = true;
    projectForm.appendChild(title);


    popUp.appendChild(projectForm);
    document.body.appendChild(popUp);
    document.body.appendChild(taskPopUp);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('form-btn-container');
    projectForm.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('form-confirm-btn');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.addEventListener('click', projectConfirmOnClick(popUp, projectForm));
    confirmBtn.textContent = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('form-cancel-btn');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', projectCancelOnClick(popUp, projectForm));
    cancelBtn.textContent = 'Cancel';
    btnContainer.appendChild(cancelBtn);


    addBtn.addEventListener('click', setActive(popUp, projectForm));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setProjectForm);

/***/ }),

/***/ "./src/forms/task.js":
/*!***************************!*\
  !*** ./src/forms/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskBtnOnClick": () => (/* binding */ addTaskBtnOnClick),
/* harmony export */   "showProject": () => (/* binding */ showProject)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/forms/class.js");
/* harmony import */ var _management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./management */ "./src/forms/management.js");
/* harmony import */ var _tabs_tab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/tab.css */ "./src/tabs/tab.css");







function addTaskBtnOnClick(addTaskBtn,  project) {
    addTaskBtn.addEventListener('click', () => {
        console.log('vg');
        const taskForm = createTaskForm(project);
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.innerHTML = '';
        taskPopUp.appendChild(taskForm);
        if (! taskPopUp.classList.contains('active')) taskPopUp.classList.add('active');
        if (! taskForm.classList.contains('active')) taskForm.classList.add('active');
    })
}

function addStaticTask(task) {
    const allPrj = _management__WEBPACK_IMPORTED_MODULE_1__["default"].getProject('All');
    const weekPrj = _management__WEBPACK_IMPORTED_MODULE_1__["default"].getProject('Week');
    const todayPrj = _management__WEBPACK_IMPORTED_MODULE_1__["default"].getProject('Today');
    if (allPrj) console.log(allPrj.title);
    else console.log('deo ok');
    if (task) console.log(task);
    else console.log('task deo ok');
    //allPrj.addTask(task);

    // const itemDate = new Date(task.date);
    // itemDate.setHours(0, 0, 0, 0);
    // const date = new Date();
    // date.setHours(0, 0, 0, 0);
    // if (itemDate.getTime() === date.getTime()) {
    //   todayPrj.addItem(item);
    // }

    // const nextWeek = add(date, { days: 7 });
    // const lastWeek = add(date, { days: -7 });
    // if (lastWeek < itemDate && itemDate < nextWeek) {
    //   weekPrj.addItem(item);
    // }
}

function staticPrj(project) {
    if (project.title === 'Today') return true;
    if (project.title === 'Week') return true;
    if (project.title === 'All') return true;
    return false;
}

function displayTask(task, project) {  
    const newTask = document.createElement('div');
    newTask.classList.add('taskDisplay');

    const close = document.createElement('div');
    if (staticPrj(project) == false) {

        close.textContent = "☒";
        close.classList.add('closeBtn');

        close.addEventListener('click', () => {
            project.tasks.splice(project.indexOf(task), 1);
            //setData();
            showProject(project);
        })
    }

    const head = document.createElement('p');
    head.classList.add('taskHeader');
    head.textContent = task.title;

    const des = document.createElement('p');
    des.classList.add('taskDes');
    des.textContent = task.description;

    const date = document.createElement('p');
    date.classList.add('taskDate');
    date.textContent = task.date;

    const content = document.createElement('div');
    content.classList.add('taskContent');
    content.appendChild(head);
    content.appendChild(des);
    newTask.appendChild(content);
    newTask.appendChild(date);
    if (staticPrj(project) == false) {newTask.appendChild(close);}

    return newTask;
}

function renderTask(task, mainContent, project) {
    const curTask = displayTask(task, project);
    mainContent.appendChild(curTask);
}

function showProject(project) {  
    const mainContent = document.getElementById('projectContent');
    mainContent.innerHTML = '';
    for (let task of project.tasks) {
        renderTask(task, mainContent, project);
    }
}

function taskConfirmOnClick(taskForm, project) {
    return function confirm() {
        const title = document.getElementById('task-title-input').value;
        const description = document.getElementById('task-description-input').value;
        const date = document.getElementById('task-date-input').value;

        if (title === '') {
            alert("please enter the title");
            return;
        }

        if (date === '') {
            alert("please choose the date");
            return;
        }

        const newTask = new _class__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, date);
        const taskPopUp = document.getElementById('taskPopUp');
        taskForm.classList.remove('active');
        taskPopUp.classList.remove('active');
        taskPopUp.innerHTML = '';
        project.addTask(newTask);
        addStaticTask(newTask);
        taskForm.reset();
        //setData()
        showProject(project);
    }
}



function taskCancelOnClick(taskForm) {
    return function confirm() {
        taskForm.classList.remove('active');
        taskForm.reset();
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.classList.remove('active');
        taskPopUp.innerHTML = '';
        //showProject();
    }
}

function createTaskForm(project) {

    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');
    taskForm.classList.add('inactive');
    taskForm.setAttribute('id', 'taskForm');
    
    //set attribute for form
    const formTitle = document.createElement('div');
    formTitle.textContent = 'Add a task';
    formTitle.classList.add('form-title');
    taskForm.appendChild(formTitle);

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('maxlength', '20');
    title.id = 'task-title-input';
    taskForm.appendChild(title);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Description (Optional)');
    description.setAttribute('maxlength', '50');
    description.id = 'task-description-input';
    taskForm.appendChild(description);

    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.id = 'task-date-input';
    taskForm.appendChild(date);

    //set button
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('form-btn-container');
    taskForm.appendChild(btnContainer);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('form-confirm-btn');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.id = "task-confirmBtn";
    confirmBtn.addEventListener('click', taskConfirmOnClick(taskForm, project));
    confirmBtn.textContent = 'Confirm';
    btnContainer.appendChild(confirmBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('form-cancel-btn');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.addEventListener('click', taskCancelOnClick(taskForm));
    cancelBtn.textContent = 'Cancel';
    btnContainer.appendChild(cancelBtn);

    return taskForm;
}



/***/ }),

/***/ "./src/static-btntab.js":
/*!******************************!*\
  !*** ./src/static-btntab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addOnClick": () => (/* binding */ addOnClick),
/* harmony export */   "createTab": () => (/* binding */ createTab),
/* harmony export */   "createTabBtn": () => (/* binding */ createTabBtn)
/* harmony export */ });
/* harmony import */ var _forms_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/task */ "./src/forms/task.js");



function createTabBtn(name, className) {
    const staticBtns = document.getElementById('staticBtns');
    const newBtn = document.createElement('button');
    newBtn.classList.add(className);
    newBtn.textContent = name;
    staticBtns.appendChild(newBtn);
    return newBtn;
}

function createTab(name) {
    const tmpTab = document.createElement('div');
    tmpTab.classList.add(name);
    tmpTab.classList.add('newTab');
    return tmpTab;
}


function addOnClick(btn, tab, project) {
    btn.addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '';
        content.appendChild(tab);

        (0,_forms_task__WEBPACK_IMPORTED_MODULE_0__.showProject)(project);
    });
}



/***/ }),

/***/ "./src/structure.js":
/*!**************************!*\
  !*** ./src/structure.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createStructure() {
    const header = document.createElement('header');
    const title  = document.createElement('h1');
    title.textContent = "Todo List";
    header.appendChild(title);

    const mn = document.createElement('div');
    mn.classList.add('mainContent');


    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btnContainer');
    btnContainer.setAttribute('id', 'btnContainer');

    const staticBtns = document.createElement('div');
    staticBtns.classList.add('staticBtns');
    staticBtns.setAttribute('id', 'staticBtns');

    const homeHeading = document.createElement('p');
    homeHeading.textContent = "Home";
    homeHeading.classList.add('staHeading');
    staticBtns.appendChild(homeHeading);

    btnContainer.appendChild(staticBtns);

    const dynamicBtns = document.createElement('div');
    dynamicBtns.classList.add('dynamicBtns');
    dynamicBtns.setAttribute('id', 'dynamicBtns');
    //create heading
    const heading = document.createElement('p');
    heading.textContent = "Projects";
    heading.classList.add('dyHeading');
    btnContainer.appendChild(heading);
    //create add button
    const addBtn = document.createElement('button');
    addBtn.textContent = "＋ Add project";
    addBtn.classList.add('addBtn');
    addBtn.setAttribute('id', 'addBtn');
    btnContainer.appendChild(addBtn);
    btnContainer.appendChild(dynamicBtns); 

    mn.appendChild(btnContainer);

    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id', 'content');
    mn.appendChild(content);

    const footer = document.createElement('footer');
    const titleF = document.createElement('h3');
    titleF.textContent = "Made by Vanhger";
    footer.appendChild(titleF);

    document.body.appendChild(header);
    document.body.appendChild(mn);
    document.body.appendChild(footer);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStructure);

/***/ }),

/***/ "./src/tabs/all.js":
/*!*************************!*\
  !*** ./src/tabs/all.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function makeAllTab(curTab) {


    curTab.setAttribute('id', 'allTab');

    const content = document.createElement('div');
    content.classList.add('projectContent');
    content.setAttribute('id', 'projectContent');

    const heading = document.createElement('p');
    heading.textContent = "All";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);
    
    curTab.classList.remove('all');
    curTab.classList.add('allTab');

    return curTab;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeAllTab);

/***/ }),

/***/ "./src/tabs/today.js":
/*!***************************!*\
  !*** ./src/tabs/today.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeTodayTab(curTab) {
    
    const content = document.createElement('div');
    content.classList.add('projectContent');
    content.setAttribute('id', 'projectContent');
    
    const heading = document.createElement('p');
    heading.textContent = "Today";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);

    curTab.classList.remove('today');
    curTab.classList.add('todayTab');
    return curTab;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeTodayTab);

/***/ }),

/***/ "./src/tabs/week.js":
/*!**************************!*\
  !*** ./src/tabs/week.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeWeekTab(curTab) {
    
    curTab.setAttribute('id', 'weekTab');

    const content = document.createElement('div');
    content.classList.add('projectContent');
    content.setAttribute('id', 'projectContent');

    const heading = document.createElement('p');
    heading.textContent = "This week";
    heading.classList.add('contentHeading');

    curTab.appendChild(heading);
    curTab.appendChild(content);

    curTab.classList.remove('week');
    curTab.classList.add('weekTab');
    return curTab;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeWeekTab);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tabs_tab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tab.css */ "./src/tabs/tab.css");
/* harmony import */ var _forms_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/form.css */ "./src/forms/form.css");
/* harmony import */ var _structure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structure */ "./src/structure.js");
/* harmony import */ var _static_btntab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-btntab */ "./src/static-btntab.js");
/* harmony import */ var _tabs_today__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/today */ "./src/tabs/today.js");
/* harmony import */ var _tabs_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/week */ "./src/tabs/week.js");
/* harmony import */ var _tabs_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/all */ "./src/tabs/all.js");
/* harmony import */ var _forms_project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forms/project */ "./src/forms/project.js");
/* harmony import */ var _forms_management__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/management */ "./src/forms/management.js");
/* harmony import */ var _forms_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/class */ "./src/forms/class.js");












(0,_structure__WEBPACK_IMPORTED_MODULE_3__["default"])();

const content= document.getElementById('content');
const todayBtn = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTabBtn)('Today', 'static');
const weekBtn = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTabBtn)('This week', 'static');
const allBtn = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTabBtn)('All', 'static');

const todayTab = (0,_tabs_today__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTab)('today'));
const weekTab = (0,_tabs_week__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTab)('week'));
const allTab = (0,_tabs_all__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTab)('all'));

const todayPrj = new _forms_class__WEBPACK_IMPORTED_MODULE_10__.Project('Today');
const weekPrj = new _forms_class__WEBPACK_IMPORTED_MODULE_10__.Project('Week');
const allPrj = new _forms_class__WEBPACK_IMPORTED_MODULE_10__.Project('All');

_forms_management__WEBPACK_IMPORTED_MODULE_9__["default"].addProject(todayPrj);
_forms_management__WEBPACK_IMPORTED_MODULE_9__["default"].addProject(weekPrj);
_forms_management__WEBPACK_IMPORTED_MODULE_9__["default"].addProject(allPrj);


(0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.addOnClick)(todayBtn, todayTab, todayPrj);
(0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.addOnClick)(weekBtn, weekTab, weekPrj);
(0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.addOnClick)(allBtn, allTab, allPrj);

content.appendChild(todayTab);


(0,_forms_project__WEBPACK_IMPORTED_MODULE_8__["default"])();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RnFEO0FBQ3JEO0FBQ0EsaUJBQWlCLCtDQUFXO0FBQzVCO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmtDO0FBQ3JCO0FBQ3lCO0FBQ2Y7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNcUM7QUFDTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFXO0FBQ25CLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7OztBQzFEOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN4QnpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7O0FDbEIzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7O1VDcEIxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNHO0FBQ0U7QUFDZ0I7QUFDMkI7QUFDN0I7QUFDRjtBQUNGO0FBQ1M7QUFDUDtBQUNFO0FBQ3hDO0FBQ0Esc0RBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLDREQUFZO0FBQzdCLGdCQUFnQiw0REFBWTtBQUM1QixlQUFlLDREQUFZO0FBQzNCO0FBQ0EsaUJBQWlCLHVEQUFZLENBQUMseURBQVM7QUFDdkMsZ0JBQWdCLHNEQUFXLENBQUMseURBQVM7QUFDckMsZUFBZSxxREFBVSxDQUFDLHlEQUFTO0FBQ25DO0FBQ0EscUJBQXFCLGtEQUFPO0FBQzVCLG9CQUFvQixrREFBTztBQUMzQixtQkFBbUIsa0RBQU87QUFDMUI7QUFDQSxvRUFBZTtBQUNmLG9FQUFlO0FBQ2Ysb0VBQWU7QUFDZjtBQUNBO0FBQ0EsMERBQVU7QUFDViwwREFBVTtBQUNWLDBEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBYztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9mb3Jtcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3RhYnMvdGFiLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9mb3Jtcy9mb3JtLmNzcz83MWVlIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy90YWJzL3RhYi5jc3M/NmM2MSIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvZm9ybXMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9mb3Jtcy9tYW5hZ2VtZW50LmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvZm9ybXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL2Zvcm1zL3Rhc2suanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9zdGF0aWMtYnRudGFiLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvc3RydWN0dXJlLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvdGFicy9hbGwuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy90YWJzL3RvZGF5LmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvdGFicy93ZWVrLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qc3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucG9wVXAge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDQ4LCA0OCwgMC4xNTEpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEZvcm0ge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIzMSwgMjAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC42KSBzb2xpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0Zvcm0ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMzEsIDIwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuNikgc29saWQ7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcihyZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmR5bmFtaWNCdG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmR5bmFtaWMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHluYW1pYzpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb250YWluZXIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0biB7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2tCdG4ge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgOTUsIDIwLCAwLjQ2Nik7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi50YXNrRGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAxMjMsIDU2LCAwLjc3NCk7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1ncm93OiA0O1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tEZXN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9ybXMvZm9ybS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLFVBQVU7SUFDVixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2Ysb0dBQW9HO0FBQ3hHOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLDJDQUEyQztJQUMzQyxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucG9wVXAge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTMsIDQ4LCA0OCwgMC4xNTEpO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdEZvcm0ge1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIzMSwgMjAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC42KSBzb2xpZDtcXHJcXG4gICAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0Zvcm0ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA1LCAyMzEsIDIwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjpyZ2JhKDAsIDAsIDAsIDAuNikgc29saWQ7XFxyXFxuICAgIGhlaWdodDogMTgwcHg7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcihyZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDE4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3RUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmR5bmFtaWNCdG4ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmR5bmFtaWMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB3aWR0aDogNzUlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uZHluYW1pYzpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb250YWluZXIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0biB7XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2tCdG4ge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIDJweCBzb2xpZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMCwgOTUsIDIwLCAwLjQ2Nik7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi50YXNrRGlzcGxheSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc1LCAxMjMsIDU2LCAwLjc3NCk7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogMnB4IGJsYWNrIHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1ncm93OiA0O1xcclxcbiAgICBnYXA6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tIZWFkZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjNweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tEZXN7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTIzcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0taDEtY29sb3I6IHdoaXRlO1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiYSgyOSwgMzQsIDI1LCAwLjU5Nik7XFxyXFxuICAgIC0tYmdyLWNvbG9yOiByZ2JhKDIzMywgMjQzLCAyMDUsIDAuNjg1KTtcXHJcXG4gICAgLS1idG4tY29udGFpbmVyOiByZ2JhKDI1MCwgMTc2LCAxMTUsIDAuNTk2KTtcXHJcXG4gICAgLS1kZWZhdWx0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdyLWNvbG9yKTtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb250YWluZXIpO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGljQnRucyB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5keW5hbWljQnRucyB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMjU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5keUhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFIZWFkaW5nIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMyU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb250YWluZXIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0aWMge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGljOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQix1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLE1BQU07SUFDTixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1RUFBdUU7SUFDdkUsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1RUFBdUU7SUFDdkUsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0Qjs7OztBQUlBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0taDEtY29sb3I6IHdoaXRlO1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiYSgyOSwgMzQsIDI1LCAwLjU5Nik7XFxyXFxuICAgIC0tYmdyLWNvbG9yOiByZ2JhKDIzMywgMjQzLCAyMDUsIDAuNjg1KTtcXHJcXG4gICAgLS1idG4tY29udGFpbmVyOiByZ2JhKDI1MCwgMTc2LCAxMTUsIDAuNTk2KTtcXHJcXG4gICAgLS1kZWZhdWx0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDIwdmg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdyLWNvbG9yKTtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJ0bkNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb250YWluZXIpO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDIzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGljQnRucyB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5keW5hbWljQnRucyB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMjU7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5keUhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5zdGFIZWFkaW5nIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6J0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdG4ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xMyU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmFkZEJ0bjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1jb250YWluZXIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1kZWZhdWx0LXRyYW5zaXRpb24pO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0aWMge1xcclxcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdGljOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxyXFxuLm5ld1RhYiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRIZWFkaW5nIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90YWJzL3RhYi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuLm5ld1RhYiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5pbmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRIZWFkaW5nIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWxyZWFkeUluKG5ld1Rhc2spKSAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xyXG4gICAgICAgIGVsc2UgYWxlcnQoXCJUaGlzIHRhc2sgaXMgYWxyZWFkeSBpbiB5b3VyIHByb2plY3QuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSAhPT0gdGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2sodGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGl0bGUgPT09IHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FscmVhZHlJbihuZXdUYXNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay50aXRsZSA9PT0gbmV3VGFzay50aXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5kZXhPZih0YXNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBbHJlYWR5SW4odGFzaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuaW5kZXhPZih0YXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29weShwcmopIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gcHJqLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPiBiO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3RMaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkUHJvamVjdChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWxyZWFkeUluKG5ld1Byb2plY3QpKSAgdGhpcy5saXN0LnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgICAgZWxzZSBhbGVydChcIlRoaXMgcHJvamVjdCBpcyBhbHJlYWR5IGluIHlvdXIgbGlzdC5cIilcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gdGhpcy5saXN0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSAhPT0gdGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QodGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC50aXRsZSA9PT0gdGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWxyZWFkeUluKG5ld1Byb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnNvbWUoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IG5ld1Byb2plY3QudGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZGV4T2YocHJvamVjdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQWxyZWFkeUluKHByb2plY3QpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3QuaW5kZXhPZihwcm9qZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29weShsc3QpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsc3QubGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBzeigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtUYXNrLCBQcm9qZWN0TGlzdCwgUHJvamVjdH07IiwiaW1wb3J0IHsgVGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5cclxuY29uc3QgbGlzdCA9IG5ldyBQcm9qZWN0TGlzdCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbGlzdDsiLCJpbXBvcnQgeyBUYXNrLCBQcm9qZWN0LCBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NsYXNzXCI7XHJcbmltcG9ydCBsaXN0IGZyb20gXCIuL21hbmFnZW1lbnRcIjtcclxuaW1wb3J0IHsgYWRkT25DbGljaywgY3JlYXRlVGFiIH0gZnJvbSBcIi4uL3N0YXRpYy1idG50YWJcIjtcclxuaW1wb3J0IHsgYWRkVGFza0J0bk9uQ2xpY2t9IGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbi8vc2V0IGFjdGl2ZSBmb3IgZm9ybS5cclxuZnVuY3Rpb24gc2V0QWN0aXZlKHBvcFVwLCBwcm9qZWN0Rm9ybSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGFjdGl2ZSgpIHtcclxuICAgICAgICBpZiAocG9wVXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSAmJiBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKCEgcG9wVXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcG9wVXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXRpY1Byaihwcm9qZWN0KSB7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gJ1RvZGF5JykgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gJ1dlZWsnKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSAnQWxsJykgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuLy8gc2hvdyBwcm9qZWN0IGxpc3QuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0TGlzdCgpIHtcclxuICAgIGNvbnN0IGR5bmFtaWNCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R5bmFtaWNCdG5zJyk7XHJcblxyXG4gICAgZHluYW1pY0J0bnMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIGxpc3QubGlzdCkge1xyXG4gICAgICAgIGlmIChzdGF0aWNQcmoocHJvamVjdCkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdCwgZHluYW1pY0J0bnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyByZW5kZXIgcHJvamVjdFxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHByb2plY3QsIGR5bmFtaWNCdG5zKSB7XHJcblxyXG4gICAgY29uc3QgbmV3UHJqQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdQcmpCdG4uY2xhc3NMaXN0LmFkZCgnZHluYW1pY0J0bicpO1xyXG5cclxuICAgIGNvbnN0IG5ld1ByaiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJqLmNsYXNzTGlzdC5hZGQoJ2R5bmFtaWMnKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSBcIuKYklwiO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VCdG4nKTtcclxuICAgIG5ld1ByakJ0bi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcblxyXG5cclxuICAgIC8vY2xvc2VcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxpc3QubGlzdC5zcGxpY2UobGlzdC5pbmRleE9mKHByb2plY3QpLCAxKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2NcIik7XHJcbiAgICAgICAgLy9zZXREYXRhKCk7XHJcbiAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcclxuICAgIG5ld1Byai5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBuZXdQcmpCdG4uYXBwZW5kQ2hpbGQobmV3UHJqKVxyXG4gICAgZHluYW1pY0J0bnMuYXBwZW5kQ2hpbGQobmV3UHJqQnRuKTtcclxuXHJcbiAgICAvLyBsaW5rIHRvIG5ldyBUYWJcclxuICAgIGNvbnN0IHByalRhYiA9IGNyZWF0ZVRhYihwcm9qZWN0LnRpdGxlKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGVudEhlYWRpbmcnKTtcclxuICAgIHByalRhYi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRlbnQnKTtcclxuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdENvbnRlbnQnKVxyXG4gICAgcHJqVGFiLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcclxuXHJcbiAgICBhZGRPbkNsaWNrKG5ld1ByaiwgcHJqVGFiLCBwcm9qZWN0KTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCLvvIsgQWRkIHRhc2tcIjtcclxuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J0bicpO1xyXG4gICAgcHJqVGFiLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG4gICAgYWRkVGFza0J0bk9uQ2xpY2soYWRkVGFza0J0biwgcHJvamVjdCk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RDb25maXJtT25DbGljayhwb3BVcCwgcHJvamVjdEZvcm0pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjb25maXJtKCkge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUtaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBpZiAodGl0bGUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwicGxlYXNlIGVudGVyIHRoZSB0aXRsZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV3cHJqID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGxpc3QuYWRkUHJvamVjdChuZXdwcmopOyBcclxuICAgICAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xyXG4gICAgICAgIC8vc2V0RGF0YSgpXHJcbiAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RDYW5jZWxPbkNsaWNrKGZvcm0sIHByb2plY3QpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjb25maXJtKCkge1xyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBwcm9qZWN0LnJlc2V0KCk7XHJcbiAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RGb3JtKCkge1xyXG4gICAgLy9zZXRUYXNrRm9ybSgpO1xyXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ0bicpO1xyXG5cclxuICAgIGNvbnN0IHRhc2tQb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza1BvcFVwLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XHJcbiAgICB0YXNrUG9wVXAuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrUG9wVXAnKTtcclxuICAgIHRhc2tQb3BVcC5jbGFzc0xpc3QuYWRkKCdpbmFjdGl2ZScpO1xyXG5cclxuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gICAgcG9wVXAuc2V0QXR0cmlidXRlKCdpZCcsICdwb3BVcCcpO1xyXG4gICAgcG9wVXAuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcclxuXHJcblxyXG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcclxuICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdEZvcm0nKTtcclxuICAgIFxyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIGEgcHJvamVjdCc7XHJcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xyXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTUnKTtcclxuICAgIHRpdGxlLmlkID0gJ3Byb2plY3QtdGl0bGUtaW5wdXQnO1xyXG4gICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuXHJcbiAgICBwb3BVcC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcFVwKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza1BvcFVwKTtcclxuXHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ0bi1jb250YWluZXInKTtcclxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbmZpcm0tYnRuJyk7XHJcbiAgICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29uZmlybU9uQ2xpY2socG9wVXAsIHByb2plY3RGb3JtKSk7XHJcbiAgICBjb25maXJtQnRuLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbmZpcm1CdG4pO1xyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY2FuY2VsLWJ0bicpO1xyXG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RDYW5jZWxPbkNsaWNrKHBvcFVwLCBwcm9qZWN0Rm9ybSkpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuXHJcblxyXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0QWN0aXZlKHBvcFVwLCBwcm9qZWN0Rm9ybSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXRQcm9qZWN0Rm9ybTsiLCJpbXBvcnQgeyBkZSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHsgVGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQgbGlzdCBmcm9tIFwiLi9tYW5hZ2VtZW50XCI7XHJcbmltcG9ydCAnLi4vdGFicy90YWIuY3NzJztcclxuaW1wb3J0IHsgcGFyc2VKU09OIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVGFza0J0bk9uQ2xpY2soYWRkVGFza0J0biwgIHByb2plY3QpIHtcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3ZnJyk7XHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBjcmVhdGVUYXNrRm9ybShwcm9qZWN0KTtcclxuICAgICAgICBjb25zdCB0YXNrUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcFVwJyk7XHJcbiAgICAgICAgdGFza1BvcFVwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRhc2tQb3BVcC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XHJcbiAgICAgICAgaWYgKCEgdGFza1BvcFVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHRhc2tQb3BVcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoISB0YXNrRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0YXRpY1Rhc2sodGFzaykge1xyXG4gICAgY29uc3QgYWxsUHJqID0gbGlzdC5nZXRQcm9qZWN0KCdBbGwnKTtcclxuICAgIGNvbnN0IHdlZWtQcmogPSBsaXN0LmdldFByb2plY3QoJ1dlZWsnKTtcclxuICAgIGNvbnN0IHRvZGF5UHJqID0gbGlzdC5nZXRQcm9qZWN0KCdUb2RheScpO1xyXG4gICAgaWYgKGFsbFByaikgY29uc29sZS5sb2coYWxsUHJqLnRpdGxlKTtcclxuICAgIGVsc2UgY29uc29sZS5sb2coJ2RlbyBvaycpO1xyXG4gICAgaWYgKHRhc2spIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gICAgZWxzZSBjb25zb2xlLmxvZygndGFzayBkZW8gb2snKTtcclxuICAgIC8vYWxsUHJqLmFkZFRhc2sodGFzayk7XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbURhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xyXG4gICAgLy8gaXRlbURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIC8vIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAvLyBpZiAoaXRlbURhdGUuZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKSkge1xyXG4gICAgLy8gICB0b2RheVByai5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnN0IG5leHRXZWVrID0gYWRkKGRhdGUsIHsgZGF5czogNyB9KTtcclxuICAgIC8vIGNvbnN0IGxhc3RXZWVrID0gYWRkKGRhdGUsIHsgZGF5czogLTcgfSk7XHJcbiAgICAvLyBpZiAobGFzdFdlZWsgPCBpdGVtRGF0ZSAmJiBpdGVtRGF0ZSA8IG5leHRXZWVrKSB7XHJcbiAgICAvLyAgIHdlZWtQcmouYWRkSXRlbShpdGVtKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhdGljUHJqKHByb2plY3QpIHtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSAnVG9kYXknKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSAnV2VlaycpIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT09ICdBbGwnKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRhc2sodGFzaywgcHJvamVjdCkgeyAgXHJcbiAgICBjb25zdCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEaXNwbGF5Jyk7XHJcblxyXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGlmIChzdGF0aWNQcmoocHJvamVjdCkgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgY2xvc2UudGV4dENvbnRlbnQgPSBcIuKYklwiO1xyXG4gICAgICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShwcm9qZWN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gICAgICAgICAgICAvL3NldERhdGEoKTtcclxuICAgICAgICAgICAgc2hvd1Byb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKCd0YXNrSGVhZGVyJyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXMuY2xhc3NMaXN0LmFkZCgndGFza0RlcycpO1xyXG4gICAgZGVzLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpO1xyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXMpO1xyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICBpZiAoc3RhdGljUHJqKHByb2plY3QpID09IGZhbHNlKSB7bmV3VGFzay5hcHBlbmRDaGlsZChjbG9zZSk7fVxyXG5cclxuICAgIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrKHRhc2ssIG1haW5Db250ZW50LCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBjdXJUYXNrID0gZGlzcGxheVRhc2sodGFzaywgcHJvamVjdCk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjdXJUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3QocHJvamVjdCkgeyAgXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcclxuICAgICAgICByZW5kZXJUYXNrKHRhc2ssIG1haW5Db250ZW50LCBwcm9qZWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0NvbmZpcm1PbkNsaWNrKHRhc2tGb3JtLCBwcm9qZWN0KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY29uZmlybSgpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlLWlucHV0JykudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJwbGVhc2UgZW50ZXIgdGhlIHRpdGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJwbGVhc2UgY2hvb3NlIHRoZSBkYXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcclxuICAgICAgICBjb25zdCB0YXNrUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcFVwJyk7XHJcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGFza1BvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRhc2tQb3BVcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XHJcbiAgICAgICAgYWRkU3RhdGljVGFzayhuZXdUYXNrKTtcclxuICAgICAgICB0YXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIC8vc2V0RGF0YSgpXHJcbiAgICAgICAgc2hvd1Byb2plY3QocHJvamVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGFza0NhbmNlbE9uQ2xpY2sodGFza0Zvcm0pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjb25maXJtKCkge1xyXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRhc2tGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgY29uc3QgdGFza1BvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tQb3BVcCcpO1xyXG4gICAgICAgIHRhc2tQb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0YXNrUG9wVXAuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgLy9zaG93UHJvamVjdCgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybShwcm9qZWN0KSB7XHJcblxyXG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybScpO1xyXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcclxuICAgIHRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0Zvcm0nKTtcclxuICAgIFxyXG4gICAgLy9zZXQgYXR0cmlidXRlIGZvciBmb3JtXHJcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9ICdBZGQgYSB0YXNrJztcclxuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyMCcpO1xyXG4gICAgdGl0bGUuaWQgPSAndGFzay10aXRsZS1pbnB1dCc7XHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24gKE9wdGlvbmFsKScpO1xyXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnNTAnKTtcclxuICAgIGRlc2NyaXB0aW9uLmlkID0gJ3Rhc2stZGVzY3JpcHRpb24taW5wdXQnO1xyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgZGF0ZS5pZCA9ICd0YXNrLWRhdGUtaW5wdXQnO1xyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcblxyXG4gICAgLy9zZXQgYnV0dG9uXHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ0bi1jb250YWluZXInKTtcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbmZpcm0tYnRuJyk7XHJcbiAgICBjb25maXJtQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uaWQgPSBcInRhc2stY29uZmlybUJ0blwiO1xyXG4gICAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRhc2tDb25maXJtT25DbGljayh0YXNrRm9ybSwgcHJvamVjdCkpO1xyXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWNhbmNlbC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ2FuY2VsT25DbGljayh0YXNrRm9ybSkpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcclxuXHJcbiAgICByZXR1cm4gdGFza0Zvcm07XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkVGFza0J0bk9uQ2xpY2ssIHNob3dQcm9qZWN0fTsiLCJpbXBvcnQgeyB0YSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHsgc2hvd1Byb2plY3QgfSBmcm9tIFwiLi9mb3Jtcy90YXNrXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJCdG4obmFtZSwgY2xhc3NOYW1lKSB7XHJcbiAgICBjb25zdCBzdGF0aWNCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRpY0J0bnMnKTtcclxuICAgIGNvbnN0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmV3QnRuLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIG5ld0J0bi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBzdGF0aWNCdG5zLmFwcGVuZENoaWxkKG5ld0J0bik7XHJcbiAgICByZXR1cm4gbmV3QnRuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWIobmFtZSkge1xyXG4gICAgY29uc3QgdG1wVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0bXBUYWIuY2xhc3NMaXN0LmFkZChuYW1lKTtcclxuICAgIHRtcFRhYi5jbGFzc0xpc3QuYWRkKCduZXdUYWInKTtcclxuICAgIHJldHVybiB0bXBUYWI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRPbkNsaWNrKGJ0biwgdGFiLCBwcm9qZWN0KSB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhYik7XHJcblxyXG4gICAgICAgIHNob3dQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlVGFiQnRuLCBjcmVhdGVUYWIsIGFkZE9uQ2xpY2t9OyIsImZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSgpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgdGl0bGUgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RvIExpc3RcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgbW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1uLmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50Jyk7XHJcblxyXG5cclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bkNvbnRhaW5lcicpO1xyXG4gICAgYnRuQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuQ29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3Qgc3RhdGljQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3RhdGljQnRucy5jbGFzc0xpc3QuYWRkKCdzdGF0aWNCdG5zJyk7XHJcbiAgICBzdGF0aWNCdG5zLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3RhdGljQnRucycpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaG9tZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICAgIGhvbWVIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3N0YUhlYWRpbmcnKTtcclxuICAgIHN0YXRpY0J0bnMuYXBwZW5kQ2hpbGQoaG9tZUhlYWRpbmcpO1xyXG5cclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0aWNCdG5zKTtcclxuXHJcbiAgICBjb25zdCBkeW5hbWljQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHluYW1pY0J0bnMuY2xhc3NMaXN0LmFkZCgnZHluYW1pY0J0bnMnKTtcclxuICAgIGR5bmFtaWNCdG5zLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHluYW1pY0J0bnMnKTtcclxuICAgIC8vY3JlYXRlIGhlYWRpbmdcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdkeUhlYWRpbmcnKTtcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIC8vY3JlYXRlIGFkZCBidXR0b25cclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCLvvIsgQWRkIHByb2plY3RcIjtcclxuICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRCdG4nKTtcclxuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZEJ0bicpO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoZHluYW1pY0J0bnMpOyBcclxuXHJcbiAgICBtbi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuICAgIG1uLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3QgdGl0bGVGID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHRpdGxlRi50ZXh0Q29udGVudCA9IFwiTWFkZSBieSBWYW5oZ2VyXCI7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQodGl0bGVGKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1uKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RydWN0dXJlOyIsIlxyXG5cclxuZnVuY3Rpb24gbWFrZUFsbFRhYihjdXJUYWIpIHtcclxuXHJcblxyXG4gICAgY3VyVGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxsVGFiJyk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RDb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFsbFwiO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250ZW50SGVhZGluZycpO1xyXG5cclxuICAgIGN1clRhYi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGN1clRhYi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIFxyXG4gICAgY3VyVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpO1xyXG4gICAgY3VyVGFiLmNsYXNzTGlzdC5hZGQoJ2FsbFRhYicpO1xyXG5cclxuICAgIHJldHVybiBjdXJUYWI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VBbGxUYWI7IiwiZnVuY3Rpb24gbWFrZVRvZGF5VGFiKGN1clRhYikge1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdENvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XHJcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRIZWFkaW5nJyk7XHJcblxyXG4gICAgY3VyVGFiLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY3VyVGFiLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIGN1clRhYi5jbGFzc0xpc3QucmVtb3ZlKCd0b2RheScpO1xyXG4gICAgY3VyVGFiLmNsYXNzTGlzdC5hZGQoJ3RvZGF5VGFiJyk7XHJcbiAgICByZXR1cm4gY3VyVGFiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlVG9kYXlUYWI7IiwiZnVuY3Rpb24gbWFrZVdlZWtUYWIoY3VyVGFiKSB7XHJcbiAgICBcclxuICAgIGN1clRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWtUYWInKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250ZW50Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdENvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVGhpcyB3ZWVrXCI7XHJcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRIZWFkaW5nJyk7XHJcblxyXG4gICAgY3VyVGFiLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY3VyVGFiLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuICAgIGN1clRhYi5jbGFzc0xpc3QucmVtb3ZlKCd3ZWVrJyk7XHJcbiAgICBjdXJUYWIuY2xhc3NMaXN0LmFkZCgnd2Vla1RhYicpO1xyXG4gICAgcmV0dXJuIGN1clRhYjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVdlZWtUYWI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi90YWJzL3RhYi5jc3MnO1xyXG5pbXBvcnQgJy4vZm9ybXMvZm9ybS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlU3RydWN0dXJlIGZyb20gJy4vc3RydWN0dXJlJztcclxuaW1wb3J0IHsgY3JlYXRlVGFiQnRuLCBjcmVhdGVUYWIsIGFkZE9uQ2xpY2t9IGZyb20gXCIuL3N0YXRpYy1idG50YWJcIjtcclxuaW1wb3J0IG1ha2VUb2RheVRhYiBmcm9tICcuL3RhYnMvdG9kYXknO1xyXG5pbXBvcnQgbWFrZVdlZWtUYWIgZnJvbSAnLi90YWJzL3dlZWsnO1xyXG5pbXBvcnQgbWFrZUFsbFRhYiBmcm9tICcuL3RhYnMvYWxsJztcclxuaW1wb3J0IHNldFByb2plY3RGb3JtIGZyb20gJy4vZm9ybXMvcHJvamVjdCc7XHJcbmltcG9ydCBsaXN0IGZyb20gJy4vZm9ybXMvbWFuYWdlbWVudCc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2Zvcm1zL2NsYXNzJztcclxuXHJcbmNyZWF0ZVN0cnVjdHVyZSgpO1xyXG5cclxuY29uc3QgY29udGVudD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuY29uc3QgdG9kYXlCdG4gPSBjcmVhdGVUYWJCdG4oJ1RvZGF5JywgJ3N0YXRpYycpO1xyXG5jb25zdCB3ZWVrQnRuID0gY3JlYXRlVGFiQnRuKCdUaGlzIHdlZWsnLCAnc3RhdGljJyk7XHJcbmNvbnN0IGFsbEJ0biA9IGNyZWF0ZVRhYkJ0bignQWxsJywgJ3N0YXRpYycpO1xyXG5cclxuY29uc3QgdG9kYXlUYWIgPSBtYWtlVG9kYXlUYWIoY3JlYXRlVGFiKCd0b2RheScpKTtcclxuY29uc3Qgd2Vla1RhYiA9IG1ha2VXZWVrVGFiKGNyZWF0ZVRhYignd2VlaycpKTtcclxuY29uc3QgYWxsVGFiID0gbWFrZUFsbFRhYihjcmVhdGVUYWIoJ2FsbCcpKTtcclxuXHJcbmNvbnN0IHRvZGF5UHJqID0gbmV3IFByb2plY3QoJ1RvZGF5Jyk7XHJcbmNvbnN0IHdlZWtQcmogPSBuZXcgUHJvamVjdCgnV2VlaycpO1xyXG5jb25zdCBhbGxQcmogPSBuZXcgUHJvamVjdCgnQWxsJyk7XHJcblxyXG5saXN0LmFkZFByb2plY3QodG9kYXlQcmopO1xyXG5saXN0LmFkZFByb2plY3Qod2Vla1Byaik7XHJcbmxpc3QuYWRkUHJvamVjdChhbGxQcmopO1xyXG5cclxuXHJcbmFkZE9uQ2xpY2sodG9kYXlCdG4sIHRvZGF5VGFiLCB0b2RheVByaik7XHJcbmFkZE9uQ2xpY2sod2Vla0J0biwgd2Vla1RhYiwgd2Vla1Byaik7XHJcbmFkZE9uQ2xpY2soYWxsQnRuLCBhbGxUYWIsIGFsbFByaik7XHJcblxyXG5jb250ZW50LmFwcGVuZENoaWxkKHRvZGF5VGFiKTtcclxuXHJcblxyXG5zZXRQcm9qZWN0Rm9ybSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9