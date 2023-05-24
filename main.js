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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2, arguments);
  if (!duration || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(duration.seconds) : 0;

  // Add years and months
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, months + years * 12) : date;

  // Add weeks and days
  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
        if (!this.isAlreadyIn(newTask))  {
            this.tasks.push(newTask);
            this.sortByDate();
        } 
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

    sortByDate() {
        this.tasks.sort(function(a, b) {
            return new Date(a.date) - new Date(b.date);
        })
    }
}

class ProjectList {
    constructor() {
        this.list = [];
    }

    static createNew(newList) {
        const obj = new ProjectList();
        obj.list - newList.list;
        return obj;
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
/* harmony export */   "restore": () => (/* binding */ restore),
/* harmony export */   "setData": () => (/* binding */ setData)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/forms/class.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/forms/project.js");



function setData(list) {  
    localStorage.clear();
    localStorage.setItem('myList', JSON.stringify(list));
}

function restore() {
    if (!localStorage.myList) {
        return new _class__WEBPACK_IMPORTED_MODULE_0__.ProjectList();
    } else {
        let obj = JSON.parse(localStorage.getItem('myList'));
        return obj;
    }
}



/***/ }),

/***/ "./src/forms/project.js":
/*!******************************!*\
  !*** ./src/forms/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setProjectForm": () => (/* binding */ setProjectForm),
/* harmony export */   "showProjectList": () => (/* binding */ showProjectList)
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

    const list = (0,_management__WEBPACK_IMPORTED_MODULE_1__.restore)();
    const dynamicBtns = document.getElementById('dynamicBtns');

    dynamicBtns.innerHTML = '';
    for (let project of list.list) {
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
        list.list.splice(list.indexOf(project), 1);
        const content = document.getElementById('content');
        content.innerHTML = '';
        console.log("cc");
        (0,_management__WEBPACK_IMPORTED_MODULE_1__.setData)();
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


function projectConfirmOnClick(popUp, projectForm, list) {
    return function confirm() {
        const title = document.getElementById('project-title-input').value;
        if (title === '') {
            alert("please enter the title");
            return;
        }

        const newprj = new _class__WEBPACK_IMPORTED_MODULE_0__.Project(title);
        popUp.classList.remove('active');
        projectForm.classList.remove('active');
        list.addProject(newprj); 
        projectForm.reset();
        (0,_management__WEBPACK_IMPORTED_MODULE_1__.setData)()
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

function setProjectForm(list) {
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
    confirmBtn.addEventListener('click', projectConfirmOnClick(popUp, projectForm, list));
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
/* harmony import */ var date_fns_add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/add */ "./node_modules/date-fns/esm/add/index.js");







function addTaskBtnOnClick(addTaskBtn,  project) {
    addTaskBtn.addEventListener('click', () => {
        const taskForm = createTaskForm(project);
        const taskPopUp = document.getElementById('taskPopUp');
        taskPopUp.innerHTML = '';
        taskPopUp.appendChild(taskForm);
        if (! taskPopUp.classList.contains('active')) taskPopUp.classList.add('active');
        if (! taskForm.classList.contains('active')) taskForm.classList.add('active');
    })
}

function addStaticTask(task) {
    const allPrj = _management__WEBPACK_IMPORTED_MODULE_1__.list.getProject('All')[0];
    const weekPrj = _management__WEBPACK_IMPORTED_MODULE_1__.list.getProject('Week')[0];
    const todayPrj = _management__WEBPACK_IMPORTED_MODULE_1__.list.getProject('Today')[0];
    if (allPrj) {
        for (let taskk of allPrj.tasks) {
            console.log(taskk);
        }
    }
    else console.log('cc');
    allPrj.addTask(task);
    console.log('ok');

    const itemDate = new Date(task.date);
    itemDate.setHours(0, 0, 0, 0);
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    if (itemDate.getTime() === date.getTime()) {
      todayPrj.addTask(task);
    }

    const nextWeek = (0,date_fns_add__WEBPACK_IMPORTED_MODULE_3__["default"])(date, { days: 7 });
    const lastWeek = (0,date_fns_add__WEBPACK_IMPORTED_MODULE_3__["default"])(date, { days: -7 });
    if (lastWeek < itemDate && itemDate < nextWeek) {
      weekPrj.addTask(task);
    } 
    (0,_management__WEBPACK_IMPORTED_MODULE_1__.setData)();
}

function removeStaticTask(task) {
    const allPrj = _management__WEBPACK_IMPORTED_MODULE_1__.list.getProject('All')[0];
    const weekPrj = _management__WEBPACK_IMPORTED_MODULE_1__.list.getProject('Week')[0];
    const todayPrj = _management__WEBPACK_IMPORTED_MODULE_1__.list.getProject('Today')[0];


    allPrj.tasks.splice(allPrj.indexOf(task), 1);
    weekPrj.tasks.splice(weekPrj.indexOf(task), 1);
    todayPrj.tasks.splice(todayPrj.indexOf(task), 1);

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
            removeStaticTask(task);
            (0,_management__WEBPACK_IMPORTED_MODULE_1__.setData)();
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
        (0,_management__WEBPACK_IMPORTED_MODULE_1__.setData)()
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/* harmony import */ var _forms_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forms/class */ "./src/forms/class.js");
/* harmony import */ var _forms_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/management */ "./src/forms/management.js");












(0,_structure__WEBPACK_IMPORTED_MODULE_3__["default"])();

const content= document.getElementById('content');
const todayBtn = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTabBtn)('Today', 'static');
const weekBtn = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTabBtn)('This week', 'static');
const allBtn = (0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTabBtn)('All', 'static');

const todayTab = (0,_tabs_today__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTab)('today'));
const weekTab = (0,_tabs_week__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTab)('week'));
const allTab = (0,_tabs_all__WEBPACK_IMPORTED_MODULE_7__["default"])((0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.createTab)('all'));

const todayPrj = new _forms_class__WEBPACK_IMPORTED_MODULE_9__.Project('Today');
const weekPrj = new _forms_class__WEBPACK_IMPORTED_MODULE_9__.Project('Week');
const allPrj = new _forms_class__WEBPACK_IMPORTED_MODULE_9__.Project('All');


const list = new _forms_class__WEBPACK_IMPORTED_MODULE_9__.ProjectList((0,_forms_management__WEBPACK_IMPORTED_MODULE_10__.restore)());
console.log(list);
list.addProject(todayPrj);
list.addProject(weekPrj);
list.addProject(allPrj);
(0,_forms_management__WEBPACK_IMPORTED_MODULE_10__.setData)(list);

(0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.addOnClick)(todayBtn, todayTab, todayPrj);
(0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.addOnClick)(weekBtn, weekTab, weekPrj);
(0,_static_btntab__WEBPACK_IMPORTED_MODULE_4__.addOnClick)(allBtn, allTab, allPrj);

content.appendChild(todayTab);


(0,_forms_project__WEBPACK_IMPORTED_MODULE_8__.setProjectForm)(list);

//restore();
//console.log(list.sz());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHdCQUF3QixrREFBa0Qsb0JBQW9CLHFCQUFxQixlQUFlLDRCQUE0QixnQ0FBZ0MsS0FBSyxzQkFBc0IscUJBQXFCLDRCQUE0QiwrQkFBK0IsNkNBQTZDLDRCQUE0Qix3Q0FBd0Msc0JBQXNCLG1CQUFtQix5REFBeUQsS0FBSyxtQkFBbUIsNEJBQTRCLCtCQUErQiw2Q0FBNkMsNEJBQTRCLHdDQUF3QyxzQkFBc0IsbUJBQW1CLHlEQUF5RCxLQUFLLHFCQUFxQix1REFBdUQsc0JBQXNCLDBCQUEwQixLQUFLLDJCQUEyQix3QkFBd0IsNkdBQTZHLEtBQUsseUJBQXlCLHNCQUFzQixvQkFBb0IsS0FBSyxzQkFBc0Isc0JBQXNCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLGlDQUFpQyxxQkFBcUIsMkJBQTJCLHFCQUFxQixtQkFBbUIsNEJBQTRCLEtBQUssd0JBQXdCLGdDQUFnQyx3QkFBd0IsK0NBQStDLDhDQUE4Qyw4QkFBOEIsS0FBSyxtQkFBbUIsb0JBQW9CLHlCQUF5QiwwQkFBMEIsS0FBSyx5QkFBeUIsbUJBQW1CLEtBQUsscUJBQXFCLGdDQUFnQyx3QkFBd0IsMkJBQTJCLHFCQUFxQixrREFBa0QscUJBQXFCLDRCQUE0QiwwQkFBMEIsd0JBQXdCLFNBQVMsMkJBQTJCLGdDQUFnQyx3QkFBd0IsOENBQThDLDhCQUE4QixLQUFLLHlCQUF5QixvQkFBb0Isc0JBQXNCLCtCQUErQiw0QkFBNEIsS0FBSyxlQUFlLG1CQUFtQixxQkFBcUIsd0JBQXdCLGdDQUFnQywyQkFBMkIsd0JBQXdCLEtBQUssOEJBQThCLHNCQUFzQixvREFBb0QsbUJBQW1CLGdDQUFnQywyQkFBMkIsMkJBQTJCLEtBQUssc0JBQXNCLHNCQUFzQiwrQkFBK0IscUJBQXFCLGlCQUFpQixLQUFLLG9CQUFvQix3QkFBd0IsMEJBQTBCLHdCQUF3QixLQUFLLGlCQUFpQix3QkFBd0IsMEJBQTBCLDBCQUEwQixLQUFLLE9BQU8scUZBQXFGLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGtDQUFrQyx3QkFBd0Isa0RBQWtELG9CQUFvQixxQkFBcUIsZUFBZSw0QkFBNEIsZ0NBQWdDLEtBQUssc0JBQXNCLHFCQUFxQiw0QkFBNEIsK0JBQStCLDZDQUE2Qyw0QkFBNEIsd0NBQXdDLHNCQUFzQixtQkFBbUIseURBQXlELEtBQUssbUJBQW1CLDRCQUE0QiwrQkFBK0IsNkNBQTZDLDRCQUE0Qix3Q0FBd0Msc0JBQXNCLG1CQUFtQix5REFBeUQsS0FBSyxxQkFBcUIsdURBQXVELHNCQUFzQiwwQkFBMEIsS0FBSywyQkFBMkIsd0JBQXdCLDZHQUE2RyxLQUFLLHlCQUF5QixzQkFBc0Isb0JBQW9CLEtBQUssc0JBQXNCLHNCQUFzQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixpQ0FBaUMscUJBQXFCLDJCQUEyQixxQkFBcUIsbUJBQW1CLDRCQUE0QixLQUFLLHdCQUF3QixnQ0FBZ0Msd0JBQXdCLCtDQUErQyw4Q0FBOEMsOEJBQThCLEtBQUssbUJBQW1CLG9CQUFvQix5QkFBeUIsMEJBQTBCLEtBQUsseUJBQXlCLG1CQUFtQixLQUFLLHFCQUFxQixnQ0FBZ0Msd0JBQXdCLDJCQUEyQixxQkFBcUIsa0RBQWtELHFCQUFxQiw0QkFBNEIsMEJBQTBCLHdCQUF3QixTQUFTLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLDhDQUE4Qyw4QkFBOEIsS0FBSyx5QkFBeUIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsNEJBQTRCLEtBQUssZUFBZSxtQkFBbUIscUJBQXFCLHdCQUF3QixnQ0FBZ0MsMkJBQTJCLHdCQUF3QixLQUFLLDhCQUE4QixzQkFBc0Isb0RBQW9ELG1CQUFtQixnQ0FBZ0MsMkJBQTJCLDJCQUEyQixLQUFLLHNCQUFzQixzQkFBc0IsK0JBQStCLHFCQUFxQixpQkFBaUIsS0FBSyxvQkFBb0Isd0JBQXdCLDBCQUEwQix3QkFBd0IsS0FBSyxpQkFBaUIsd0JBQXdCLDBCQUEwQiwwQkFBMEIsS0FBSyxtQkFBbUI7QUFDMzVPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQdkM7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCwwQkFBMEIsZ0RBQWdELGdEQUFnRCxvREFBb0QsbURBQW1ELEtBQUssY0FBYyxzQkFBc0IsaUNBQWlDLGVBQWUsMEJBQTBCLHlCQUF5QixLQUFLLGdCQUFnQixzQkFBc0IsaUNBQWlDLDRCQUE0Qiw4Q0FBOEMseUJBQXlCLEtBQUssWUFBWSx1REFBdUQsd0JBQXdCLHFCQUFxQixLQUFLLGdCQUFnQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0MsS0FBSyxZQUFZLHVEQUF1RCxzQkFBc0IscUJBQXFCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLHNCQUFzQixzQkFBc0IsMkNBQTJDLDBCQUEwQixxQkFBcUIsb0JBQW9CLHFCQUFxQixLQUFLLCtCQUErQixzQkFBc0IsK0NBQStDLDBCQUEwQiwrQkFBK0IsNEJBQTRCLHFCQUFxQixLQUFLLHFCQUFxQixxQkFBcUIsMEJBQTBCLDRCQUE0QixxQkFBcUIsK0JBQStCLG9CQUFvQixLQUFLLHNCQUFzQixxQkFBcUIsMEJBQTBCLDRCQUE0QixzQkFBc0IsK0JBQStCLGVBQWUsb0JBQW9CLEtBQUssb0JBQW9CLGdGQUFnRix3QkFBd0Isd0JBQXdCLEtBQUsscUJBQXFCLGdGQUFnRix3QkFBd0IsMkJBQTJCLHdCQUF3QixLQUFLLGlCQUFpQixxQkFBcUIsd0JBQXdCLDRCQUE0QixrQ0FBa0MscUJBQXFCLHFCQUFxQixtQkFBbUIsNEJBQTRCLHlCQUF5QiwyQkFBMkIsU0FBUywrQkFBK0IsZ0NBQWdDLHdCQUF3QiwrQ0FBK0MsOENBQThDLDhCQUE4QixLQUFLLGlCQUFpQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixpQ0FBaUMscUJBQXFCLHdCQUF3QixxQkFBcUIsbUJBQW1CLDRCQUE0QixLQUFLLHVCQUF1QixnQ0FBZ0Msd0JBQXdCLCtDQUErQyw4Q0FBOEMsOEJBQThCLEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsY0FBYyxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGlDQUFpQywwQkFBMEIsZ0RBQWdELGdEQUFnRCxvREFBb0QsbURBQW1ELEtBQUssY0FBYyxzQkFBc0IsaUNBQWlDLGVBQWUsMEJBQTBCLHlCQUF5QixLQUFLLGdCQUFnQixzQkFBc0IsaUNBQWlDLDRCQUE0Qiw4Q0FBOEMseUJBQXlCLEtBQUssWUFBWSx1REFBdUQsd0JBQXdCLHFCQUFxQixLQUFLLGdCQUFnQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0MsS0FBSyxZQUFZLHVEQUF1RCxzQkFBc0IscUJBQXFCLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLHNCQUFzQixzQkFBc0IsMkNBQTJDLDBCQUEwQixxQkFBcUIsb0JBQW9CLHFCQUFxQixLQUFLLCtCQUErQixzQkFBc0IsK0NBQStDLDBCQUEwQiwrQkFBK0IsNEJBQTRCLHFCQUFxQixLQUFLLHFCQUFxQixxQkFBcUIsMEJBQTBCLDRCQUE0QixxQkFBcUIsK0JBQStCLG9CQUFvQixLQUFLLHNCQUFzQixxQkFBcUIsMEJBQTBCLDRCQUE0QixzQkFBc0IsK0JBQStCLGVBQWUsb0JBQW9CLEtBQUssb0JBQW9CLGdGQUFnRix3QkFBd0Isd0JBQXdCLEtBQUsscUJBQXFCLGdGQUFnRix3QkFBd0IsMkJBQTJCLHdCQUF3QixLQUFLLGlCQUFpQixxQkFBcUIsd0JBQXdCLDRCQUE0QixrQ0FBa0MscUJBQXFCLHFCQUFxQixtQkFBbUIsNEJBQTRCLHlCQUF5QiwyQkFBMkIsU0FBUywrQkFBK0IsZ0NBQWdDLHdCQUF3QiwrQ0FBK0MsOENBQThDLDhCQUE4QixLQUFLLGlCQUFpQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixpQ0FBaUMscUJBQXFCLHdCQUF3QixxQkFBcUIsbUJBQW1CLDRCQUE0QixLQUFLLHVCQUF1QixnQ0FBZ0Msd0JBQXdCLCtDQUErQyw4Q0FBOEMsOEJBQThCLEtBQUssbUJBQW1CO0FBQ2pzTztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSx1REFBdUQsb0JBQW9CLHFCQUFxQixzQkFBc0IsK0JBQStCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLHFCQUFxQixzQkFBc0IsS0FBSywwQkFBMEIsc0JBQXNCLDhCQUE4QixLQUFLLHlCQUF5Qix1REFBdUQsd0JBQXdCLHdCQUF3Qix5QkFBeUIsMEJBQTBCLDRCQUE0QiwwQkFBMEIsS0FBSyxZQUFZLHVEQUF1RCxxQkFBcUIsS0FBSyxPQUFPLCtFQUErRSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLHVDQUF1QyxvQkFBb0IscUJBQXFCLHNCQUFzQiwrQkFBK0IsS0FBSyxtQkFBbUIsc0JBQXNCLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLDBCQUEwQixzQkFBc0IsOEJBQThCLEtBQUsseUJBQXlCLHVEQUF1RCx3QkFBd0Isd0JBQXdCLHlCQUF5QiwwQkFBMEIsNEJBQTRCLDBCQUEwQixLQUFLLFlBQVksdURBQXVELHFCQUFxQixLQUFLLG1CQUFtQjtBQUN4b0Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RtRDtBQUNYO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixlQUFlLG1FQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsZUFBZSxtRUFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEd0Q7QUFDZDtBQUNJO0FBQ047QUFDaUI7QUFDTjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ2U7QUFDZixFQUFFLHNFQUFZO0FBQ2QsbUJBQW1CLDZFQUFPO0FBQzFCLCtCQUErQixtRUFBUztBQUN4QyxpQ0FBaUMsbUVBQVM7QUFDMUMsK0JBQStCLG1FQUFTO0FBQ3hDLDZCQUE2QixtRUFBUztBQUN0QywrQkFBK0IsbUVBQVM7QUFDeEMsbUNBQW1DLG1FQUFTO0FBQzVDLG1DQUFtQyxtRUFBUzs7QUFFNUM7QUFDQSxhQUFhLDREQUFNO0FBQ25CLHlDQUF5QywrREFBUzs7QUFFbEQ7QUFDQSxxQ0FBcUMsNkRBQU87O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckV3RDtBQUNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkOztBQUVBO0FBQ0Esa0NBQWtDLDZFQUFPO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMscUZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSxxRkFBTyxJQUFJLDRGQUFjLEdBQUcsNEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSwyRkFBYyxHQUFHLDJGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHcUQ7QUFDVDtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtDQUFXO0FBQzlCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcUQ7QUFDTjtBQUNVO0FBQ2Y7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TnFDO0FBQ007QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQixLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUMxRDlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDeEJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ2xCM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDcEJYO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDRztBQUNFO0FBQ2dCO0FBQzJCO0FBQzdCO0FBQ0Y7QUFDRjtBQUNXO0FBQ007QUFDQztBQUN0RDtBQUNBLHNEQUFlO0FBQ2Y7QUFDQTtBQUNBLGlCQUFpQiw0REFBWTtBQUM3QixnQkFBZ0IsNERBQVk7QUFDNUIsZUFBZSw0REFBWTtBQUMzQjtBQUNBLGlCQUFpQix1REFBWSxDQUFDLHlEQUFTO0FBQ3ZDLGdCQUFnQixzREFBVyxDQUFDLHlEQUFTO0FBQ3JDLGVBQWUscURBQVUsQ0FBQyx5REFBUztBQUNuQztBQUNBLHFCQUFxQixpREFBTztBQUM1QixvQkFBb0IsaURBQU87QUFDM0IsbUJBQW1CLGlEQUFPO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUIscURBQVcsQ0FBQywyREFBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUFPO0FBQ1A7QUFDQSwwREFBVTtBQUNWLDBEQUFVO0FBQ1YsMERBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUFjO0FBQ2Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9mb3Jtcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3RhYnMvdGFiLmNzcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkL2luZGV4LmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL2Zvcm1zL2Zvcm0uY3NzPzcxZWUiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3RhYnMvdGFiLmNzcz82YzYxIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9mb3Jtcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL2Zvcm1zL21hbmFnZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9mb3Jtcy9wcm9qZWN0LmpzIiwid2VicGFjazovL2pzdG9kb2xpc3QvLi9zcmMvZm9ybXMvdGFzay5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3N0YXRpYy1idG50YWIuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9zdHJ1Y3R1cmUuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy90YWJzL2FsbC5qcyIsIndlYnBhY2s6Ly9qc3RvZG9saXN0Ly4vc3JjL3RhYnMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy90YWJzL3dlZWsuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qc3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qc3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanN0b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wb3BVcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MywgNDgsIDQ4LCAwLjE1MSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Rm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjMxLCAyMDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjYpIHNvbGlkO1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIocmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrRm9ybSB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIzMSwgMjAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC42KSBzb2xpZDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdFRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHluYW1pY0J0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHluYW1pYyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5keW5hbWljOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuIHtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG46aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFza0J0biB7XFxyXFxuICAgIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCA5NSwgMjAsIDAuNDY2KTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFza0J0bjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnRhc2tEaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDEyMywgNTYsIDAuNzc0KTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LWdyb3c6IDQ7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0Rlc3tcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb3Jtcy9mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGVBQWU7SUFDZix5Q0FBeUM7SUFDekMsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixvR0FBb0c7QUFDeEc7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQ0FBcUM7SUFDckMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wb3BVcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MywgNDgsIDQ4LCAwLjE1MSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Rm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMjMxLCAyMDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6cmdiYSgwLCAwLCAwLCAwLjYpIHNvbGlkO1xcclxcbiAgICBoZWlnaHQ6IDEyMHB4O1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBib3gtc2hhZG93OiB2YXIocmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDRweCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrRm9ybSB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDUsIDIzMSwgMjAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOnJnYmEoMCwgMCwgMCwgMC42KSBzb2xpZDtcXHJcXG4gICAgaGVpZ2h0OiAxODBweDtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogdmFyKHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCA0cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdFRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHluYW1pY0J0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZHluYW1pYyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA3NSU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5keW5hbWljOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRuIHtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG46aG92ZXIge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFza0J0biB7XFxyXFxuICAgIGJvcmRlcjogYmxhY2sgMnB4IHNvbGlkO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwLCA5NSwgMjAsIDAuNDY2KTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFza0J0bjpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnRhc2tEaXNwbGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzUsIDEyMywgNTYsIDAuNzc0KTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyOiAycHggYmxhY2sgc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LWdyb3c6IDQ7XFxyXFxuICAgIGdhcDogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0hlYWRlcntcXHJcXG4gICAgZm9udC1zaXplOiAyM3B4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0Rlc3tcXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMjNweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS1oMS1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC0taGVhZGVyLWNvbG9yOiByZ2JhKDI5LCAzNCwgMjUsIDAuNTk2KTtcXHJcXG4gICAgLS1iZ3ItY29sb3I6IHJnYmEoMjMzLCAyNDMsIDIwNSwgMC42ODUpO1xcclxcbiAgICAtLWJ0bi1jb250YWluZXI6IHJnYmEoMjUwLCAxNzYsIDExNSwgMC41OTYpO1xcclxcbiAgICAtLWRlZmF1bHQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ3ItY29sb3IpO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnRuQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0aWNCdG5zIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR5bmFtaWNCdG5zIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAyNTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR5SGVhZGluZyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YUhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEzJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRpYyB7XFxyXFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0aWM6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29udGFpbmVyKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHVDQUF1QztJQUN2Qyx1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVFQUF1RTtJQUN2RSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVFQUF1RTtJQUN2RSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCOzs7O0FBSUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxxQ0FBcUM7SUFDckMscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1oMS1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC0taGVhZGVyLWNvbG9yOiByZ2JhKDI5LCAzNCwgMjUsIDAuNTk2KTtcXHJcXG4gICAgLS1iZ3ItY29sb3I6IHJnYmEoMjMzLCAyNDMsIDIwNSwgMC42ODUpO1xcclxcbiAgICAtLWJ0bi1jb250YWluZXI6IHJnYmEoMjUwLCAxNzYsIDExNSwgMC41OTYpO1xcclxcbiAgICAtLWRlZmF1bHQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ3ItY29sb3IpO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnRuQ29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMjMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdGF0aWNCdG5zIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR5bmFtaWNCdG5zIHtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1ncm93OiAyNTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmR5SGVhZGluZyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OidGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YUhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTonRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZEJ0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEzJTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYWRkQnRuOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLWNvbnRhaW5lcik7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWRlZmF1bHQtdHJhbnNpdGlvbik7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXRpYyB7XFxyXFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi5zdGF0aWM6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tY29udGFpbmVyKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tZGVmYXVsdC10cmFuc2l0aW9uKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4ubmV3VGFiIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudEhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RhYnMvdGFiLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsZUFBZTtJQUNmLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4ubmV3VGFiIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmluYWN0aXZlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudEhlYWRpbmcge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGhzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA1IG1vbnRocyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBtb250aHMsIG5vLW9wIHRvIGF2b2lkIGNoYW5naW5nIHRpbWVzIGluIHRoZSBob3VyIGJlZm9yZSBlbmQgb2YgRFNUXG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTtcblxuICAvLyBUaGUgSlMgRGF0ZSBvYmplY3Qgc3VwcG9ydHMgZGF0ZSBtYXRoIGJ5IGFjY2VwdGluZyBvdXQtb2YtYm91bmRzIHZhbHVlcyBmb3JcbiAgLy8gbW9udGgsIGRheSwgZXRjLiBGb3IgZXhhbXBsZSwgbmV3IERhdGUoMjAyMCwgMCwgMCkgcmV0dXJucyAzMSBEZWMgMjAxOSBhbmRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDEpIHJldHVybnMgMSBGZWIgMjAyMS4gIFRoaXMgaXMgKmFsbW9zdCogdGhlIGJlaGF2aW9yIHdlXG4gIC8vIHdhbnQgZXhjZXB0IHRoYXQgZGF0ZXMgd2lsbCB3cmFwIGFyb3VuZCB0aGUgZW5kIG9mIGEgbW9udGgsIG1lYW5pbmcgdGhhdFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMzEpIHdpbGwgcmV0dXJuIDMgTWFyIDIwMjEgbm90IDI4IEZlYiAyMDIxIGFzIGRlc2lyZWQuIFNvXG4gIC8vIHdlJ2xsIGRlZmF1bHQgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZCBtb250aCBieSBhZGRpbmcgMSB0byB0aGUgZGVzaXJlZFxuICAvLyBtb250aCBhbmQgdXNpbmcgYSBkYXRlIG9mIDAgdG8gYmFjayB1cCBvbmUgZGF5IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWRcbiAgLy8gbW9udGguXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcbiAgaWYgKGRheU9mTW9udGggPj0gZGF5c0luTW9udGgpIHtcbiAgICAvLyBJZiB3ZSdyZSBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGVuIHRoaXMgaXMgdGhlIGNvcnJlY3QgZGF0ZVxuICAgIC8vIGFuZCB3ZSdyZSBkb25lLlxuICAgIHJldHVybiBlbmRPZkRlc2lyZWRNb250aDtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHdlIG5vdyBrbm93IHRoYXQgc2V0dGluZyB0aGUgb3JpZ2luYWwgZGF5LW9mLW1vbnRoIHZhbHVlIHdvbid0XG4gICAgLy8gY2F1c2UgYW4gb3ZlcmZsb3csIHNvIHNldCB0aGUgZGVzaXJlZCBkYXktb2YtbW9udGguIE5vdGUgdGhhdCB3ZSBjYW4ndFxuICAgIC8vIGp1c3Qgc2V0IHRoZSBkYXRlIG9mIGBlbmRPZkRlc2lyZWRNb250aGAgYmVjYXVzZSB0aGF0IG9iamVjdCBtYXkgaGF2ZSBoYWRcbiAgICAvLyBpdHMgdGltZSBjaGFuZ2VkIGluIHRoZSB1bnVzdWFsIGNhc2Ugd2hlcmUgd2hlcmUgYSBEU1QgdHJhbnNpdGlvbiB3YXMgb25cbiAgICAvLyB0aGUgbGFzdCBkYXkgb2YgdGhlIG1vbnRoIGFuZCBpdHMgbG9jYWwgdGltZSB3YXMgaW4gdGhlIGhvdXIgc2tpcHBlZCBvclxuICAgIC8vIHJlcGVhdGVkIG5leHQgdG8gYSBEU1QgdHJhbnNpdGlvbi4gIFNvIHdlIHVzZSBgZGF0ZWAgaW5zdGVhZCB3aGljaCBpc1xuICAgIC8vIGd1YXJhbnRlZWQgdG8gc3RpbGwgaGF2ZSB0aGUgb3JpZ2luYWwgdGltZS5cbiAgICBkYXRlLnNldEZ1bGxZZWFyKGVuZE9mRGVzaXJlZE1vbnRoLmdldEZ1bGxZZWFyKCksIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksIGRheU9mTW9udGgpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNb250aHMgZnJvbSBcIi4uL2FkZE1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtEdXJhdGlvbn0gZHVyYXRpb24gLSB0aGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKlxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCB0aGUgZm9sbG93aW5nIGR1cmF0aW9uIHRvIDEgU2VwdGVtYmVyIDIwMTQsIDEwOjE5OjUwXG4gKiBjb25zdCByZXN1bHQgPSBhZGQobmV3IERhdGUoMjAxNCwgOCwgMSwgMTAsIDE5LCA1MCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMCxcbiAqIH0pXG4gKiAvLz0+IFRodSBKdW4gMTUgMjAxNyAxNToyOToyMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGQoZGlydHlEYXRlLCBkdXJhdGlvbikge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgaWYgKCFkdXJhdGlvbiB8fCBfdHlwZW9mKGR1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgeWVhcnMgPSBkdXJhdGlvbi55ZWFycyA/IHRvSW50ZWdlcihkdXJhdGlvbi55ZWFycykgOiAwO1xuICB2YXIgbW9udGhzID0gZHVyYXRpb24ubW9udGhzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLm1vbnRocykgOiAwO1xuICB2YXIgd2Vla3MgPSBkdXJhdGlvbi53ZWVrcyA/IHRvSW50ZWdlcihkdXJhdGlvbi53ZWVrcykgOiAwO1xuICB2YXIgZGF5cyA9IGR1cmF0aW9uLmRheXMgPyB0b0ludGVnZXIoZHVyYXRpb24uZGF5cykgOiAwO1xuICB2YXIgaG91cnMgPSBkdXJhdGlvbi5ob3VycyA/IHRvSW50ZWdlcihkdXJhdGlvbi5ob3VycykgOiAwO1xuICB2YXIgbWludXRlcyA9IGR1cmF0aW9uLm1pbnV0ZXMgPyB0b0ludGVnZXIoZHVyYXRpb24ubWludXRlcykgOiAwO1xuICB2YXIgc2Vjb25kcyA9IGR1cmF0aW9uLnNlY29uZHMgPyB0b0ludGVnZXIoZHVyYXRpb24uc2Vjb25kcykgOiAwO1xuXG4gIC8vIEFkZCB5ZWFycyBhbmQgbW9udGhzXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlV2l0aE1vbnRocyA9IG1vbnRocyB8fCB5ZWFycyA/IGFkZE1vbnRocyhkYXRlLCBtb250aHMgKyB5ZWFycyAqIDEyKSA6IGRhdGU7XG5cbiAgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG4gIHZhciBkYXRlV2l0aERheXMgPSBkYXlzIHx8IHdlZWtzID8gYWRkRGF5cyhkYXRlV2l0aE1vbnRocywgZGF5cyArIHdlZWtzICogNykgOiBkYXRlV2l0aE1vbnRocztcblxuICAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAgdmFyIG1pbnV0ZXNUb0FkZCA9IG1pbnV0ZXMgKyBob3VycyAqIDYwO1xuICB2YXIgc2Vjb25kc1RvQWRkID0gc2Vjb25kcyArIG1pbnV0ZXNUb0FkZCAqIDYwO1xuICB2YXIgbXNUb0FkZCA9IHNlY29uZHNUb0FkZCAqIDEwMDA7XG4gIHZhciBmaW5hbERhdGUgPSBuZXcgRGF0ZShkYXRlV2l0aERheXMuZ2V0VGltZSgpICsgbXNUb0FkZCk7XG4gIHJldHVybiBmaW5hbERhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YWIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayhuZXdUYXNrKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQWxyZWFkeUluKG5ld1Rhc2spKSAge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydEJ5RGF0ZSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZWxzZSBhbGVydChcIlRoaXMgdGFzayBpcyBhbHJlYWR5IGluIHlvdXIgcHJvamVjdC5cIilcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRpdGxlICE9PSB0aXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayh0aXRsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50aXRsZSA9PT0gdGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQWxyZWFkeUluKG5ld1Rhc2spIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5zb21lKCh0YXNrKSA9PiB0YXNrLnRpdGxlID09PSBuZXdUYXNrLnRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKHRhc2spIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FscmVhZHlJbih0YXNrKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5pbmRleE9mKHRhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb3B5KHByaikge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBwcmoudGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydEJ5RGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdExpc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU5ldyhuZXdMaXN0KSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gbmV3IFByb2plY3RMaXN0KCk7XHJcbiAgICAgICAgb2JqLmxpc3QgLSBuZXdMaXN0Lmxpc3Q7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIGFkZFByb2plY3QobmV3UHJvamVjdCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0FscmVhZHlJbihuZXdQcm9qZWN0KSkgIHRoaXMubGlzdC5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIGVsc2UgYWxlcnQoXCJUaGlzIHByb2plY3QgaXMgYWxyZWFkeSBpbiB5b3VyIGxpc3QuXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdCh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgIT09IHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QudGl0bGUgPT09IHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0FscmVhZHlJbihuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSBuZXdQcm9qZWN0LnRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmRleE9mKHByb2plY3QpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FscmVhZHlJbihwcm9qZWN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0LmluZGV4T2YocHJvamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvcHkobHN0KSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gbHN0Lmxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3ooKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7VGFzaywgUHJvamVjdExpc3QsIFByb2plY3R9OyIsImltcG9ydCB7IFRhc2ssIFByb2plY3QsIFByb2plY3RMaXN0IH0gZnJvbSBcIi4vY2xhc3NcIjtcclxuaW1wb3J0IHsgc2hvd1Byb2plY3RMaXN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZnVuY3Rpb24gc2V0RGF0YShsaXN0KSB7ICBcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TGlzdCcsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzdG9yZSgpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLm15TGlzdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvamVjdExpc3QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TGlzdCcpKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzZXREYXRhLCByZXN0b3JlfTsiLCJpbXBvcnQgeyBUYXNrLCBQcm9qZWN0LCBQcm9qZWN0TGlzdCB9IGZyb20gXCIuL2NsYXNzXCI7XHJcbmltcG9ydCB7cmVzdG9yZSwgc2V0RGF0YX0gIGZyb20gXCIuL21hbmFnZW1lbnRcIjtcclxuaW1wb3J0IHsgYWRkT25DbGljaywgY3JlYXRlVGFiIH0gZnJvbSBcIi4uL3N0YXRpYy1idG50YWJcIjtcclxuaW1wb3J0IHsgYWRkVGFza0J0bk9uQ2xpY2t9IGZyb20gXCIuL3Rhc2tcIjtcclxuLy9zZXQgYWN0aXZlIGZvciBmb3JtLlxyXG5mdW5jdGlvbiBzZXRBY3RpdmUocG9wVXAsIHByb2plY3RGb3JtKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gYWN0aXZlKCkge1xyXG4gICAgICAgIGlmIChwb3BVcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpICYmIHByb2plY3RGb3JtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoISBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoISBwb3BVcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSBwb3BVcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3RhdGljUHJqKHByb2plY3QpIHtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSAnVG9kYXknKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChwcm9qZWN0LnRpdGxlID09PSAnV2VlaycpIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT09ICdBbGwnKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG4vLyBzaG93IHByb2plY3QgbGlzdC5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RMaXN0KCkge1xyXG5cclxuICAgIGNvbnN0IGxpc3QgPSByZXN0b3JlKCk7XHJcbiAgICBjb25zdCBkeW5hbWljQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkeW5hbWljQnRucycpO1xyXG5cclxuICAgIGR5bmFtaWNCdG5zLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBsaXN0Lmxpc3QpIHtcclxuICAgICAgICBpZiAoc3RhdGljUHJqKHByb2plY3QpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJQcm9qZWN0KHByb2plY3QsIGR5bmFtaWNCdG5zKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gcmVuZGVyIHByb2plY3RcclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChwcm9qZWN0LCBkeW5hbWljQnRucykge1xyXG5cclxuICAgIGNvbnN0IG5ld1ByakJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmV3UHJqQnRuLmNsYXNzTGlzdC5hZGQoJ2R5bmFtaWNCdG4nKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcmogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Byai5jbGFzc0xpc3QuYWRkKCdkeW5hbWljJyk7XHJcblxyXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsb3NlLnRleHRDb250ZW50ID0gXCLimJJcIjtcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnRuJyk7XHJcbiAgICBuZXdQcmpCdG4uYXBwZW5kQ2hpbGQoY2xvc2UpO1xyXG5cclxuXHJcbiAgICAvL2Nsb3NlXHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsaXN0Lmxpc3Quc3BsaWNlKGxpc3QuaW5kZXhPZihwcm9qZWN0KSwgMSk7XHJcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNjXCIpO1xyXG4gICAgICAgIHNldERhdGEoKTtcclxuICAgICAgICBzaG93UHJvamVjdExpc3QoKTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xyXG4gICAgbmV3UHJqLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIG5ld1ByakJ0bi5hcHBlbmRDaGlsZChuZXdQcmopXHJcbiAgICBkeW5hbWljQnRucy5hcHBlbmRDaGlsZChuZXdQcmpCdG4pO1xyXG5cclxuICAgIC8vIGxpbmsgdG8gbmV3IFRhYlxyXG4gICAgY29uc3QgcHJqVGFiID0gY3JlYXRlVGFiKHByb2plY3QudGl0bGUpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250ZW50SGVhZGluZycpO1xyXG4gICAgcHJqVGFiLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG5cclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Q29udGVudCcpXHJcbiAgICBwcmpUYWIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xyXG5cclxuICAgIGFkZE9uQ2xpY2sobmV3UHJqLCBwcmpUYWIsIHByb2plY3QpO1xyXG5cclxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIu+8iyBBZGQgdGFza1wiO1xyXG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnRuJyk7XHJcbiAgICBwcmpUYWIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XHJcbiAgICBhZGRUYXNrQnRuT25DbGljayhhZGRUYXNrQnRuLCBwcm9qZWN0KTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcHJvamVjdENvbmZpcm1PbkNsaWNrKHBvcFVwLCBwcm9qZWN0Rm9ybSwgbGlzdCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNvbmZpcm0oKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZS1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJwbGVhc2UgZW50ZXIgdGhlIHRpdGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdwcmogPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgbGlzdC5hZGRQcm9qZWN0KG5ld3Byaik7IFxyXG4gICAgICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgc2V0RGF0YSgpXHJcbiAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RDYW5jZWxPbkNsaWNrKGZvcm0sIHByb2plY3QpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjb25maXJtKCkge1xyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBwcm9qZWN0LnJlc2V0KCk7XHJcbiAgICAgICAgc2hvd1Byb2plY3RMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RGb3JtKGxpc3QpIHtcclxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCdG4nKTtcclxuXHJcbiAgICBjb25zdCB0YXNrUG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tQb3BVcC5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gICAgdGFza1BvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza1BvcFVwJyk7XHJcbiAgICB0YXNrUG9wVXAuY2xhc3NMaXN0LmFkZCgnaW5hY3RpdmUnKTtcclxuXHJcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcG9wVXAuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcclxuICAgIHBvcFVwLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wVXAnKTtcclxuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcclxuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XHJcbiAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RGb3JtJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBhIHByb2plY3QnO1xyXG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcclxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzE1Jyk7XHJcbiAgICB0aXRsZS5pZCA9ICdwcm9qZWN0LXRpdGxlLWlucHV0JztcclxuICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcblxyXG4gICAgcG9wVXAuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3BVcCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhc2tQb3BVcCk7XHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1idG4tY29udGFpbmVyJyk7XHJcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb25maXJtLWJ0bicpO1xyXG4gICAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbmZpcm1PbkNsaWNrKHBvcFVwLCBwcm9qZWN0Rm9ybSwgbGlzdCkpO1xyXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25maXJtQnRuKTtcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWNhbmNlbC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q2FuY2VsT25DbGljayhwb3BVcCwgcHJvamVjdEZvcm0pKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG5cclxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEFjdGl2ZShwb3BVcCwgcHJvamVjdEZvcm0pKTtcclxufVxyXG5cclxuZXhwb3J0IHtzZXRQcm9qZWN0Rm9ybSwgc2hvd1Byb2plY3RMaXN0fTsiLCJpbXBvcnQgeyBkZSB9IGZyb20gXCJkYXRlLWZucy9sb2NhbGVcIjtcclxuaW1wb3J0IHsgVGFzaywgUHJvamVjdCwgUHJvamVjdExpc3QgfSBmcm9tIFwiLi9jbGFzc1wiO1xyXG5pbXBvcnQge2xpc3QsIHNldERhdGF9IGZyb20gXCIuL21hbmFnZW1lbnRcIjtcclxuaW1wb3J0ICcuLi90YWJzL3RhYi5jc3MnO1xyXG5pbXBvcnQgeyBwYXJzZUpTT04gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IGFkZCBmcm9tICdkYXRlLWZucy9hZGQnO1xyXG5cclxuZnVuY3Rpb24gYWRkVGFza0J0bk9uQ2xpY2soYWRkVGFza0J0biwgIHByb2plY3QpIHtcclxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBjcmVhdGVUYXNrRm9ybShwcm9qZWN0KTtcclxuICAgICAgICBjb25zdCB0YXNrUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcFVwJyk7XHJcbiAgICAgICAgdGFza1BvcFVwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRhc2tQb3BVcC5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XHJcbiAgICAgICAgaWYgKCEgdGFza1BvcFVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHRhc2tQb3BVcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBpZiAoISB0YXNrRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0YXRpY1Rhc2sodGFzaykge1xyXG4gICAgY29uc3QgYWxsUHJqID0gbGlzdC5nZXRQcm9qZWN0KCdBbGwnKVswXTtcclxuICAgIGNvbnN0IHdlZWtQcmogPSBsaXN0LmdldFByb2plY3QoJ1dlZWsnKVswXTtcclxuICAgIGNvbnN0IHRvZGF5UHJqID0gbGlzdC5nZXRQcm9qZWN0KCdUb2RheScpWzBdO1xyXG4gICAgaWYgKGFsbFByaikge1xyXG4gICAgICAgIGZvciAobGV0IHRhc2trIG9mIGFsbFByai50YXNrcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBjb25zb2xlLmxvZygnY2MnKTtcclxuICAgIGFsbFByai5hZGRUYXNrKHRhc2spO1xyXG4gICAgY29uc29sZS5sb2coJ29rJyk7XHJcblxyXG4gICAgY29uc3QgaXRlbURhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xyXG4gICAgaXRlbURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICBpZiAoaXRlbURhdGUuZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICB0b2RheVByai5hZGRUYXNrKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5leHRXZWVrID0gYWRkKGRhdGUsIHsgZGF5czogNyB9KTtcclxuICAgIGNvbnN0IGxhc3RXZWVrID0gYWRkKGRhdGUsIHsgZGF5czogLTcgfSk7XHJcbiAgICBpZiAobGFzdFdlZWsgPCBpdGVtRGF0ZSAmJiBpdGVtRGF0ZSA8IG5leHRXZWVrKSB7XHJcbiAgICAgIHdlZWtQcmouYWRkVGFzayh0YXNrKTtcclxuICAgIH0gXHJcbiAgICBzZXREYXRhKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0YXRpY1Rhc2sodGFzaykge1xyXG4gICAgY29uc3QgYWxsUHJqID0gbGlzdC5nZXRQcm9qZWN0KCdBbGwnKVswXTtcclxuICAgIGNvbnN0IHdlZWtQcmogPSBsaXN0LmdldFByb2plY3QoJ1dlZWsnKVswXTtcclxuICAgIGNvbnN0IHRvZGF5UHJqID0gbGlzdC5nZXRQcm9qZWN0KCdUb2RheScpWzBdO1xyXG5cclxuXHJcbiAgICBhbGxQcmoudGFza3Muc3BsaWNlKGFsbFByai5pbmRleE9mKHRhc2spLCAxKTtcclxuICAgIHdlZWtQcmoudGFza3Muc3BsaWNlKHdlZWtQcmouaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICB0b2RheVByai50YXNrcy5zcGxpY2UodG9kYXlQcmouaW5kZXhPZih0YXNrKSwgMSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBzdGF0aWNQcmoocHJvamVjdCkge1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT09ICdUb2RheScpIHJldHVybiB0cnVlO1xyXG4gICAgaWYgKHByb2plY3QudGl0bGUgPT09ICdXZWVrJykgcmV0dXJuIHRydWU7XHJcbiAgICBpZiAocHJvamVjdC50aXRsZSA9PT0gJ0FsbCcpIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VGFzayh0YXNrLCBwcm9qZWN0KSB7ICBcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgndGFza0Rpc3BsYXknKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaWYgKHN0YXRpY1Byaihwcm9qZWN0KSA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICBjbG9zZS50ZXh0Q29udGVudCA9IFwi4piSXCI7XHJcbiAgICAgICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2VCdG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgICAgICAgICAgIHJlbW92ZVN0YXRpY1Rhc2sodGFzayk7XHJcbiAgICAgICAgICAgIHNldERhdGEoKTtcclxuICAgICAgICAgICAgc2hvd1Byb2plY3QocHJvamVjdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaGVhZC5jbGFzc0xpc3QuYWRkKCd0YXNrSGVhZGVyJyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXMuY2xhc3NMaXN0LmFkZCgndGFza0RlcycpO1xyXG4gICAgZGVzLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRGF0ZScpO1xyXG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZGF0ZTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXMpO1xyXG4gICAgbmV3VGFzay5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG5ld1Rhc2suYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICBpZiAoc3RhdGljUHJqKHByb2plY3QpID09IGZhbHNlKSB7bmV3VGFzay5hcHBlbmRDaGlsZChjbG9zZSk7fVxyXG5cclxuICAgIHJldHVybiBuZXdUYXNrO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYXNrKHRhc2ssIG1haW5Db250ZW50LCBwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBjdXJUYXNrID0gZGlzcGxheVRhc2sodGFzaywgcHJvamVjdCk7XHJcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjdXJUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3QocHJvamVjdCkgeyAgXHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcclxuICAgICAgICByZW5kZXJUYXNrKHRhc2ssIG1haW5Db250ZW50LCBwcm9qZWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0NvbmZpcm1PbkNsaWNrKHRhc2tGb3JtLCBwcm9qZWN0KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY29uZmlybSgpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXRpdGxlLWlucHV0JykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlLWlucHV0JykudmFsdWU7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJwbGVhc2UgZW50ZXIgdGhlIHRpdGxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJwbGVhc2UgY2hvb3NlIHRoZSBkYXRlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlKTtcclxuICAgICAgICBjb25zdCB0YXNrUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1BvcFVwJyk7XHJcbiAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGFza1BvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHRhc2tQb3BVcC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwcm9qZWN0LmFkZFRhc2sobmV3VGFzayk7XHJcbiAgICAgICAgYWRkU3RhdGljVGFzayhuZXdUYXNrKTtcclxuICAgICAgICB0YXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIHNldERhdGEoKVxyXG4gICAgICAgIHNob3dQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRhc2tDYW5jZWxPbkNsaWNrKHRhc2tGb3JtKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY29uZmlybSgpIHtcclxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB0YXNrRm9ybS5yZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IHRhc2tQb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUG9wVXAnKTtcclxuICAgICAgICB0YXNrUG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGFza1BvcFVwLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIC8vc2hvd1Byb2plY3QoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0ocHJvamVjdCkge1xyXG5cclxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgdGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgndGFza0Zvcm0nKTtcclxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2luYWN0aXZlJyk7XHJcbiAgICB0YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tGb3JtJyk7XHJcbiAgICBcclxuICAgIC8vc2V0IGF0dHJpYnV0ZSBmb3IgZm9ybVxyXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIGEgdGFzayc7XHJcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAnKTtcclxuICAgIHRpdGxlLmlkID0gJ3Rhc2stdGl0bGUtaW5wdXQnO1xyXG4gICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uIChPcHRpb25hbCknKTtcclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzUwJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uLWlucHV0JztcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgIGRhdGUuaWQgPSAndGFzay1kYXRlLWlucHV0JztcclxuICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xyXG5cclxuICAgIC8vc2V0IGJ1dHRvblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1idG4tY29udGFpbmVyJyk7XHJcbiAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnZm9ybS1jb25maXJtLWJ0bicpO1xyXG4gICAgY29uZmlybUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBjb25maXJtQnRuLmlkID0gXCJ0YXNrLWNvbmZpcm1CdG5cIjtcclxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YXNrQ29uZmlybU9uQ2xpY2sodGFza0Zvcm0sIHByb2plY3QpKTtcclxuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29uZmlybUJ0bik7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnZm9ybS1jYW5jZWwtYnRuJyk7XHJcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGFza0NhbmNlbE9uQ2xpY2sodGFza0Zvcm0pKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tGb3JtO1xyXG59XHJcblxyXG5leHBvcnQge2FkZFRhc2tCdG5PbkNsaWNrLCBzaG93UHJvamVjdH07IiwiaW1wb3J0IHsgdGEgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XHJcbmltcG9ydCB7IHNob3dQcm9qZWN0IH0gZnJvbSBcIi4vZm9ybXMvdGFza1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFiQnRuKG5hbWUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3Qgc3RhdGljQnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0aWNCdG5zJyk7XHJcbiAgICBjb25zdCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICBuZXdCdG4udGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3RhdGljQnRucy5hcHBlbmRDaGlsZChuZXdCdG4pO1xyXG4gICAgcmV0dXJuIG5ld0J0bjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFiKG5hbWUpIHtcclxuICAgIGNvbnN0IHRtcFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG1wVGFiLmNsYXNzTGlzdC5hZGQobmFtZSk7XHJcbiAgICB0bXBUYWIuY2xhc3NMaXN0LmFkZCgnbmV3VGFiJyk7XHJcbiAgICByZXR1cm4gdG1wVGFiO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkT25DbGljayhidG4sIHRhYiwgcHJvamVjdCkge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWIpO1xyXG5cclxuICAgICAgICBzaG93UHJvamVjdChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZVRhYkJ0biwgY3JlYXRlVGFiLCBhZGRPbkNsaWNrfTsiLCJmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IHRpdGxlICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kbyBMaXN0XCI7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IG1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtbi5jbGFzc0xpc3QuYWRkKCdtYWluQ29udGVudCcpO1xyXG5cclxuXHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG5Db250YWluZXInKTtcclxuICAgIGJ0bkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bkNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHN0YXRpY0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN0YXRpY0J0bnMuY2xhc3NMaXN0LmFkZCgnc3RhdGljQnRucycpO1xyXG4gICAgc3RhdGljQnRucy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N0YXRpY0J0bnMnKTtcclxuXHJcbiAgICBjb25zdCBob21lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhvbWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBob21lSGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzdGFIZWFkaW5nJyk7XHJcbiAgICBzdGF0aWNCdG5zLmFwcGVuZENoaWxkKGhvbWVIZWFkaW5nKTtcclxuXHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdGljQnRucyk7XHJcblxyXG4gICAgY29uc3QgZHluYW1pY0J0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGR5bmFtaWNCdG5zLmNsYXNzTGlzdC5hZGQoJ2R5bmFtaWNCdG5zJyk7XHJcbiAgICBkeW5hbWljQnRucy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R5bmFtaWNCdG5zJyk7XHJcbiAgICAvL2NyZWF0ZSBoZWFkaW5nXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZHlIZWFkaW5nJyk7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICAvL2NyZWF0ZSBhZGQgYnV0dG9uXHJcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwi77yLIEFkZCBwcm9qZWN0XCI7XHJcbiAgICBhZGRCdG4uY2xhc3NMaXN0LmFkZCgnYWRkQnRuJyk7XHJcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRCdG4nKTtcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGR5bmFtaWNCdG5zKTsgXHJcblxyXG4gICAgbW4uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcbiAgICBtbi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGNvbnN0IHRpdGxlRiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICB0aXRsZUYudGV4dENvbnRlbnQgPSBcIk1hZGUgYnkgVmFuaGdlclwiO1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHRpdGxlRik7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtbik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0cnVjdHVyZTsiLCJcclxuXHJcbmZ1bmN0aW9uIG1ha2VBbGxUYWIoY3VyVGFiKSB7XHJcblxyXG5cclxuICAgIGN1clRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FsbFRhYicpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Q29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGxcIjtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnY29udGVudEhlYWRpbmcnKTtcclxuXHJcbiAgICBjdXJUYWIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBjdXJUYWIuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBcclxuICAgIGN1clRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhbGwnKTtcclxuICAgIGN1clRhYi5jbGFzc0xpc3QuYWRkKCdhbGxUYWInKTtcclxuXHJcbiAgICByZXR1cm4gY3VyVGFiO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlQWxsVGFiOyIsImZ1bmN0aW9uIG1ha2VUb2RheVRhYihjdXJUYWIpIHtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RDb250ZW50Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250ZW50SGVhZGluZycpO1xyXG5cclxuICAgIGN1clRhYi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGN1clRhYi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICBjdXJUYWIuY2xhc3NMaXN0LnJlbW92ZSgndG9kYXknKTtcclxuICAgIGN1clRhYi5jbGFzc0xpc3QuYWRkKCd0b2RheVRhYicpO1xyXG4gICAgcmV0dXJuIGN1clRhYjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFrZVRvZGF5VGFiOyIsImZ1bmN0aW9uIG1ha2VXZWVrVGFiKGN1clRhYikge1xyXG4gICAgXHJcbiAgICBjdXJUYWIuc2V0QXR0cmlidXRlKCdpZCcsICd3ZWVrVGFiJyk7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RDb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRoaXMgd2Vla1wiO1xyXG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjb250ZW50SGVhZGluZycpO1xyXG5cclxuICAgIGN1clRhYi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGN1clRhYi5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuXHJcbiAgICBjdXJUYWIuY2xhc3NMaXN0LnJlbW92ZSgnd2VlaycpO1xyXG4gICAgY3VyVGFiLmNsYXNzTGlzdC5hZGQoJ3dlZWtUYWInKTtcclxuICAgIHJldHVybiBjdXJUYWI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VXZWVrVGFiOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi90YWJzL3RhYi5jc3MnO1xyXG5pbXBvcnQgJy4vZm9ybXMvZm9ybS5jc3MnO1xyXG5pbXBvcnQgY3JlYXRlU3RydWN0dXJlIGZyb20gJy4vc3RydWN0dXJlJztcclxuaW1wb3J0IHsgY3JlYXRlVGFiQnRuLCBjcmVhdGVUYWIsIGFkZE9uQ2xpY2t9IGZyb20gXCIuL3N0YXRpYy1idG50YWJcIjtcclxuaW1wb3J0IG1ha2VUb2RheVRhYiBmcm9tICcuL3RhYnMvdG9kYXknO1xyXG5pbXBvcnQgbWFrZVdlZWtUYWIgZnJvbSAnLi90YWJzL3dlZWsnO1xyXG5pbXBvcnQgbWFrZUFsbFRhYiBmcm9tICcuL3RhYnMvYWxsJztcclxuaW1wb3J0IHtzZXRQcm9qZWN0Rm9ybX0gZnJvbSAnLi9mb3Jtcy9wcm9qZWN0JztcclxuaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdExpc3QgfSBmcm9tICcuL2Zvcm1zL2NsYXNzJztcclxuaW1wb3J0IHsgc2V0RGF0YSwgcmVzdG9yZSB9IGZyb20gJy4vZm9ybXMvbWFuYWdlbWVudCc7XHJcblxyXG5jcmVhdGVTdHJ1Y3R1cmUoKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQ9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmNvbnN0IHRvZGF5QnRuID0gY3JlYXRlVGFiQnRuKCdUb2RheScsICdzdGF0aWMnKTtcclxuY29uc3Qgd2Vla0J0biA9IGNyZWF0ZVRhYkJ0bignVGhpcyB3ZWVrJywgJ3N0YXRpYycpO1xyXG5jb25zdCBhbGxCdG4gPSBjcmVhdGVUYWJCdG4oJ0FsbCcsICdzdGF0aWMnKTtcclxuXHJcbmNvbnN0IHRvZGF5VGFiID0gbWFrZVRvZGF5VGFiKGNyZWF0ZVRhYigndG9kYXknKSk7XHJcbmNvbnN0IHdlZWtUYWIgPSBtYWtlV2Vla1RhYihjcmVhdGVUYWIoJ3dlZWsnKSk7XHJcbmNvbnN0IGFsbFRhYiA9IG1ha2VBbGxUYWIoY3JlYXRlVGFiKCdhbGwnKSk7XHJcblxyXG5jb25zdCB0b2RheVByaiA9IG5ldyBQcm9qZWN0KCdUb2RheScpO1xyXG5jb25zdCB3ZWVrUHJqID0gbmV3IFByb2plY3QoJ1dlZWsnKTtcclxuY29uc3QgYWxsUHJqID0gbmV3IFByb2plY3QoJ0FsbCcpO1xyXG5cclxuXHJcbmNvbnN0IGxpc3QgPSBuZXcgUHJvamVjdExpc3QocmVzdG9yZSgpKTtcclxuY29uc29sZS5sb2cobGlzdCk7XHJcbmxpc3QuYWRkUHJvamVjdCh0b2RheVByaik7XHJcbmxpc3QuYWRkUHJvamVjdCh3ZWVrUHJqKTtcclxubGlzdC5hZGRQcm9qZWN0KGFsbFByaik7XHJcbnNldERhdGEobGlzdCk7XHJcblxyXG5hZGRPbkNsaWNrKHRvZGF5QnRuLCB0b2RheVRhYiwgdG9kYXlQcmopO1xyXG5hZGRPbkNsaWNrKHdlZWtCdG4sIHdlZWtUYWIsIHdlZWtQcmopO1xyXG5hZGRPbkNsaWNrKGFsbEJ0biwgYWxsVGFiLCBhbGxQcmopO1xyXG5cclxuY29udGVudC5hcHBlbmRDaGlsZCh0b2RheVRhYik7XHJcblxyXG5cclxuc2V0UHJvamVjdEZvcm0obGlzdCk7XHJcblxyXG4vL3Jlc3RvcmUoKTtcclxuLy9jb25zb2xlLmxvZyhsaXN0LnN6KCkpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=