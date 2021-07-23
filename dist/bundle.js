/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100%;\n  margin: 0;\n}\n.card {\n  flex-basis: 20%;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  border: 1px solid gray;\n  justify-content: center;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 30px;\n  font-family: \"Nunito\", sans-serif;\n  background-image: linear-gradient(white, #f2f2f2);\n}\n\n.due {\n  margin: 5px;\n}\n\n.priority {\n  margin: 5px;\n}\nh1 {\n  font-size: 24px;\n  padding: 0;\n  margin: 0;\n}\n\n.bottom-bar {\n  width: 200px;\n  display: flex;\n  justify-content: space-evenly;\n  color: #0a5a7c;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Nunito\", sans-serif;\n  height: calc(100vh - 5px);\n  width: calc(100vw - 15px);\n}\n\n.home-header {\n  width: 100%;\n  font-size: 50px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.home-body {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: rgba(0, 255, 255, 0.5);\n  flex: 1;\n  align-content: flex-start;\n  justify-content: center;\n  padding: 15px;\n}\n\n.home-footer {\n  height: 20px;\n}\n\n.project-card {\n  flex-basis: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid gray;\n  height: 200px;\n  width: 200px;\n  border-radius: 30px;\n  margin: 10px;\n  justify-content: center;\n  text-align: center;\n  padding: 5px;\n  background-image: radial-gradient(#f2f2f2, rgb(205, 236, 236));\n}\n\n.project-title {\n  font-size: 36px;\n  font-weight: bold;\n  position: absolute;\n}\n\n.empty-plus {\n  font-size: 100px;\n  font-weight: bold;\n}\n\n.empty-description {\n  font-size: 18px;\n}\n\n.project-card:hover {\n  cursor: pointer;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: initial; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  border: 1px solid #888;\n  height: 200px;\n  width: 400px; /* Could be more or less, depending on screen size */\n}\n\n.modal-title {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n  padding: 10px;\n}\n\n.modal-name {\n  padding: 10px;\n  border: 1px solid gray;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.modal-name:focus {\n  outline: none;\n}\n.modal-button {\n  margin: 10px;\n  padding: 10px;\n  border: none;\n  background-color: aqua;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.modal-title:hover {\n  cursor: default;\n}\n\n.modal-button:hover {\n  cursor: pointer;\n}\n\n.btn-cont {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.modal-close {\n  height: 35px;\n  width: 35px;\n  border: none;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: transparent;\n}\n\n.modal-close:hover {\n  cursor: pointer;\n}\n\n.backbtn {\n  background-color: transparent;\n  border: none;\n  font-family: \"nunito\", sans-serif;\n}\n\n.backtext {\n  font-size: 14px;\n}\n\n.back-cont {\n  float: left;\n  display: flex;\n  flex-direction: row;\n  margin-top: 23px;\n  margin-left: 10px;\n}\n\n.back-cont:hover {\n  cursor: pointer;\n}\n\n.top-cont {\n  margin-bottom: auto;\n  display: none;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 100%;\n  height: 20px;\n}\n\n.delete-cont {\n  color: red;\n  font-size: 18px;\n  padding: 5px;\n  padding-right: 10px;\n}\n\n.top-todo-bar {\n  visibility: hidden;\n  position: relative;\n  top: -30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 100%;\n  height: 20px;\n}\n\n.complete-cont {\n  color: blue;\n  padding: 5px;\n  padding-left: 10px;\n  font-size: 18px;\n}\n\n.delete-cont:hover {\n  cursor: pointer;\n}\n\n.complete-cont:hover {\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap\");\n\nbody {\n  height: 100%;\n  margin: 0;\n}\n.card {\n  flex-basis: 20%;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  height: 200px;\n  align-items: center;\n  border: 1px solid gray;\n  justify-content: center;\n  font-size: 14px;\n  text-align: center;\n  border-radius: 30px;\n  font-family: \"Nunito\", sans-serif;\n  background-image: linear-gradient(white, #f2f2f2);\n}\n\n.due {\n  margin: 5px;\n}\n\n.priority {\n  margin: 5px;\n}\nh1 {\n  font-size: 24px;\n  padding: 0;\n  margin: 0;\n}\n\n.bottom-bar {\n  width: 200px;\n  display: flex;\n  justify-content: space-evenly;\n  color: #0a5a7c;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Nunito\", sans-serif;\n  height: calc(100vh - 5px);\n  width: calc(100vw - 15px);\n}\n\n.home-header {\n  width: 100%;\n  font-size: 50px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.home-body {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: rgba(0, 255, 255, 0.5);\n  flex: 1;\n  align-content: flex-start;\n  justify-content: center;\n  padding: 15px;\n}\n\n.home-footer {\n  height: 20px;\n}\n\n.project-card {\n  flex-basis: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid gray;\n  height: 200px;\n  width: 200px;\n  border-radius: 30px;\n  margin: 10px;\n  justify-content: center;\n  text-align: center;\n  padding: 5px;\n  background-image: radial-gradient(#f2f2f2, rgb(205, 236, 236));\n}\n\n.project-title {\n  font-size: 36px;\n  font-weight: bold;\n  position: absolute;\n}\n\n.empty-plus {\n  font-size: 100px;\n  font-weight: bold;\n}\n\n.empty-description {\n  font-size: 18px;\n}\n\n.project-card:hover {\n  cursor: pointer;\n}\n\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: initial; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n}\n\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fefefe;\n  margin: 15% auto; /* 15% from the top and centered */\n  border: 1px solid #888;\n  height: 200px;\n  width: 400px; /* Could be more or less, depending on screen size */\n}\n\n.modal-title {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n  padding: 10px;\n}\n\n.modal-name {\n  padding: 10px;\n  border: 1px solid gray;\n  border-radius: 10px;\n  font-size: 16px;\n  font-family: \"Nunito\", sans-serif;\n}\n\n.modal-name:focus {\n  outline: none;\n}\n.modal-button {\n  margin: 10px;\n  padding: 10px;\n  border: none;\n  background-color: aqua;\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  border-radius: 10px;\n}\n\n.modal-title:hover {\n  cursor: default;\n}\n\n.modal-button:hover {\n  cursor: pointer;\n}\n\n.btn-cont {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.modal-close {\n  height: 35px;\n  width: 35px;\n  border: none;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: transparent;\n}\n\n.modal-close:hover {\n  cursor: pointer;\n}\n\n.backbtn {\n  background-color: transparent;\n  border: none;\n  font-family: \"nunito\", sans-serif;\n}\n\n.backtext {\n  font-size: 14px;\n}\n\n.back-cont {\n  float: left;\n  display: flex;\n  flex-direction: row;\n  margin-top: 23px;\n  margin-left: 10px;\n}\n\n.back-cont:hover {\n  cursor: pointer;\n}\n\n.top-cont {\n  margin-bottom: auto;\n  display: none;\n  flex-direction: row;\n  justify-content: flex-end;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 100%;\n  height: 20px;\n}\n\n.delete-cont {\n  color: red;\n  font-size: 18px;\n  padding: 5px;\n  padding-right: 10px;\n}\n\n.top-todo-bar {\n  visibility: hidden;\n  position: relative;\n  top: -30px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  width: 100%;\n  height: 20px;\n}\n\n.complete-cont {\n  color: blue;\n  padding: 5px;\n  padding-left: 10px;\n  font-size: 18px;\n}\n\n.delete-cont:hover {\n  cursor: pointer;\n}\n\n.complete-cont:hover {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

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
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



function home() {
  const body = document.querySelector("#content");

  const head = document.createElement("div");
  head.classList.add("home-header");
  head.textContent = "Projects";

  const main = document.createElement("div");
  main.classList.add("home-body");

  const footer = document.createElement("div");
  footer.classList.add("home-footer");
  footer.textContent = "Todo list by Adam Woods";

  const modal = document.createElement("div");
  modal.classList.add("modal");

  let modal_content = document.createElement("div");
  modal_content.classList.add("modal-content");

  modal.appendChild(modal_content);

  body.appendChild(head);
  body.appendChild(main);
  body.appendChild(footer);
  body.appendChild(modal);
  displayProjects();
}

function displayProjects() {
  const body = document.querySelector(".home-body");
  body.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.Project)(
      localStorage.key(i),
      localStorage.getItem(localStorage.key(i))
    );
    body.appendChild(project.display());
  }

  body.appendChild((0,_projects__WEBPACK_IMPORTED_MODULE_1__.addProject)());
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "displayToDoList": () => (/* binding */ displayToDoList),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const Project = (name, toDoList) => {
  const getName = () => name;
  const list = () => toDoList;

  const display = () => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    let topCont = document.createElement("div");
    topCont.classList.add("top-cont");

    let deleteCont = document.createElement("div");
    deleteCont.classList.add("delete-cont");
    deleteCont.classList.add("material-icons");
    deleteCont.textContent = "delete";
    deleteCont.onclick = () => {
      if (confirm("Delete " + getName() + "?")) {
        localStorage.removeItem(getName());
      }
      location.reload();
    };

    topCont.appendChild(deleteCont);

    card.onmouseenter = () => {
      topCont.style.display = "flex";
    };

    card.onmouseleave = () => {
      topCont.style.display = "none";
    };

    card.onclick = () => {
      setTimeout(function () {
        displayToDoList(getName());
      }, 50);
    };

    let name = document.createElement("h1");
    name.classList.add("project-title");
    name.textContent = getName();

    card.appendChild(topCont);
    card.appendChild(name);

    return card;
  };

  return { display };
};

function addProject() {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.onclick = function () {
    newProject();
  };

  let name = document.createElement("h1");
  name.classList.add("empty-plus");
  name.textContent = "+";

  let desc = document.createElement("div");
  desc.classList.add("empty-description");
  desc.textContent = "Add new project";

  card.appendChild(name);
  card.appendChild(desc);

  return card;
}

function newProject() {
  let val = "";
  let item = document.querySelector(".modal");
  item.style.display = "block";

  let content = document.querySelector(".modal-content");

  let btnCont = document.createElement("div");
  btnCont.classList.add("btn-cont");

  let closeBtn = document.createElement("button");
  closeBtn.classList.add("modal-close");
  closeBtn.textContent = "✕";
  closeBtn.onclick = () => {
    item.style.display = "none";
    content.innerHTML = "";
  };

  btnCont.appendChild(closeBtn);

  let title = document.createElement("div");
  title.classList.add("modal-title");
  title.textContent = "Enter project title: ";

  let modal_main = document.createElement("div");

  let form = document.createElement("form");

  var name = document.createElement("input");
  name.setAttribute("type", "text");
  name.classList.add("modal-name");

  let submit = document.createElement("input");
  submit.classList.add("modal-button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Create project");
  submit.onclick = () => {
    localStorage.setItem(name.value, "");
    console.log(localStorage);
    item.style.display = "none";
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
    content.innerHTML = "";
  };

  content.appendChild(btnCont);
  content.appendChild(title);
  content.appendChild(name);
  content.appendChild(submit);

  return val;
}

function displayToDoList(key) {
  let header = document.querySelector(".home-header");
  header.textContent = key;

  let backContainer = document.createElement("div");
  backContainer.classList.add("back-cont");
  backContainer.onclick = () => {
    location.reload();
  };

  let backBtn = document.createElement("button");
  backBtn.classList.add("backbtn");
  backBtn.textContent = "🠔";
  backContainer.appendChild(backBtn);

  let backtext = document.createElement("div");
  backtext.textContent = "home";
  backtext.classList.add("backtext");
  backContainer.appendChild(backtext);

  header.appendChild(backContainer);

  let home = document.querySelector(".home-body");
  home.textContent = "";

  let str = localStorage.getItem(key);
  let arr = str.split(",");

  if (str != "") {
    for (let i = 0; i < arr.length; i += 6) {
      let item = (0,_todo__WEBPACK_IMPORTED_MODULE_1__.ToDo)(
        arr[i],
        arr[i + 1],
        arr[i + 2],
        arr[i + 3],
        arr[i + 4],
        arr[i + 5]
      );

      home.appendChild(item.display());
    }
  }
  home.appendChild(addToDo(key));
}

function addToDo(key) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.onclick = function () {
    handleAddToDo(key);
  };

  let name = document.createElement("h1");
  name.classList.add("empty-plus");
  name.textContent = "+";

  let desc = document.createElement("div");
  desc.classList.add("empty-description");
  desc.textContent = "Create item";

  card.appendChild(name);
  card.appendChild(desc);

  return card;
}

function handleAddToDo(key) {
  toDoModal(key);
}

function toDoModal(key) {
  let item = document.querySelector(".modal");
  item.classList.add(".todo-modal");
  item.style.display = "block";

  let content = document.querySelector(".modal-content");
  content.classList.add(".todo-modal-content");
  content.style.height = "300px";

  let btnCont = document.createElement("div");
  btnCont.classList.add("btn-cont");

  let closeBtn = document.createElement("button");
  closeBtn.classList.add("modal-close");
  closeBtn.textContent = "✕";
  closeBtn.onclick = () => {
    item.style.display = "none";
    content.innerHTML = "";
  };

  btnCont.appendChild(closeBtn);

  let title = document.createElement("div");
  title.classList.add("new-todo-name");
  title.textContent = "Name: ";

  let titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.classList.add("todo-name-input");

  let description = document.createElement("div");
  description.classList.add("new-todo-description");
  description.textContent = "Description: ";

  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.classList.add("todo-description-input");

  let date = document.createElement("div");
  date.classList.add("new-todo-date");
  date.textContent = "Due date: ";

  let dateInput = document.createElement("input");
  dateInput.setAttribute("type", "text");
  dateInput.classList.add("todo-date-input");

  let priority = document.createElement("div");
  priority.classList.add("new-todo-priority");
  priority.textContent = "Priority: ";

  let priorityInput = document.createElement("input");
  priorityInput.setAttribute("type", "text");
  priorityInput.classList.add("todo-priority-input");

  let submit = document.createElement("input");
  submit.classList.add("modal-button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("value", "Create item");
  submit.onclick = () => {
    item.style.display = "none";
    content.innerHTML = "";
    content.style.height = "200px";
    localStorage.setItem(
      key,
      addCurrent(key) +
        key +
        "," +
        addIndex(key) +
        "," +
        titleInput.value +
        "," +
        descriptionInput.value +
        "," +
        dateInput.value +
        "," +
        priorityInput.value
    );
    console.log(localStorage.getItem(key));
    displayToDoList(key);
  };

  content.appendChild(btnCont);
  content.appendChild(title);
  content.appendChild(titleInput);
  content.appendChild(description);
  content.appendChild(descriptionInput);
  content.appendChild(date);
  content.appendChild(dateInput);
  content.appendChild(priority);
  content.appendChild(priorityInput);
  content.appendChild(submit);
}

function addCurrent(key) {
  if (localStorage.getItem(key) === "") {
    return "";
  } else {
    return localStorage.getItem(key) + ",";
  }
}

function addIndex(key) {
  let arr = localStorage.getItem(key).split(",");
  if (localStorage.getItem(key) === "") {
    return 0;
  } else {
    return arr.length / 6;
  }
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDo": () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");

const ToDo = (key, index, title, description, due, priority) => {
  const getKey = () => key;
  const getIndex = () => index;
  const getTitle = () => title;
  const getDescription = () => description;
  const getDue = () => due;
  const getPriority = () => priority;

  const display = () => {
    const card = document.createElement("div");
    card.classList.add("card");

    let top = document.createElement("div");
    top.classList.add("top-todo-bar");

    let deleteCont = document.createElement("div");
    deleteCont.classList.add("material-icons");
    deleteCont.textContent = "delete";
    deleteCont.classList.add("delete-cont");

    let completeCont = document.createElement("div");
    completeCont.classList.add("material-icons");
    completeCont.classList.add("complete-cont");
    completeCont.textContent = "edit";

    top.appendChild(completeCont);
    top.appendChild(deleteCont);

    card.onmouseenter = () => {
      top.style.visibility = "visible";
    };

    card.onmouseleave = () => {
      top.style.visibility = "hidden";
    };

    deleteCont.onclick = () => {
      if (confirm("Delete " + getTitle() + " ?")) {
        let arr = localStorage.getItem(getKey()).split(",");
        arr.splice(getIndex() * 6, 6);
        for (let i = 0; i * 6 < arr.length; i++) {
          arr[i * 6 + 1] = i;
        }

        localStorage.setItem(getKey(), arr);
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.displayToDoList)(getKey());
      }
    };

    completeCont.onclick = () => {
      edit();
    };

    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = getTitle();

    let description = document.createElement("P");
    description.classList.add("description");
    description.textContent = getDescription();

    let bottom = document.createElement("div");
    bottom.classList.add("bottom-bar");

    let due = document.createElement("div");
    due.classList.add("due");
    due.textContent = "Due: " + getDue();

    let priority = document.createElement("div");
    priority.classList.add("priority");
    priority.textContent = "Priority: " + getPriority();

    bottom.appendChild(due);
    bottom.appendChild(priority);

    card.appendChild(top);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(bottom);

    return card;
  };

  const edit = () => {
    let item = document.querySelector(".modal");
    item.classList.add(".todo-modal");
    item.style.display = "block";

    let content = document.querySelector(".modal-content");
    content.classList.add(".todo-modal-content");
    content.style.height = "300px";

    let btnCont = document.createElement("div");
    btnCont.classList.add("btn-cont");

    let closeBtn = document.createElement("button");
    closeBtn.classList.add("modal-close");
    closeBtn.textContent = "✕";
    closeBtn.onclick = () => {
      item.style.display = "none";
      content.innerHTML = "";
    };

    btnCont.appendChild(closeBtn);

    let title = document.createElement("div");
    title.classList.add("new-todo-name");
    title.textContent = "Name: ";

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.classList.add("todo-name-input");

    let description = document.createElement("div");
    description.classList.add("new-todo-description");
    description.textContent = "Description: ";

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.classList.add("todo-description-input");

    let date = document.createElement("div");
    date.classList.add("new-todo-date");
    date.textContent = "Due date: ";

    let dateInput = document.createElement("input");
    dateInput.setAttribute("type", "text");
    dateInput.classList.add("todo-date-input");

    let priority = document.createElement("div");
    priority.classList.add("new-todo-priority");
    priority.textContent = "Priority: ";

    let priorityInput = document.createElement("input");
    priorityInput.setAttribute("type", "text");
    priorityInput.classList.add("todo-priority-input");

    let submit = document.createElement("input");
    submit.classList.add("modal-button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Edit item");
    submit.onclick = () => {
      item.style.display = "none";
      content.innerHTML = "";
      content.style.height = "200px";
      let arr = localStorage.getItem(getKey()).split(",");
      console.log("Pre op: " + arr);
      if (titleInput.value != "") {
        arr[getIndex() * 6 + 2] = titleInput.value;
      }
      if (descriptionInput.value != "") {
        arr[getIndex() * 6 + 3] = descriptionInput.value;
      }
      if (dateInput.value != "") {
        arr[getIndex() * 6 + 4] = dateInput.value;
      }
      if (priorityInput.value != "") {
        arr[getIndex() * 6 + 5] = priorityInput.value;
      }
      localStorage.setItem(key, arr.join(","));
      (0,_projects__WEBPACK_IMPORTED_MODULE_0__.displayToDoList)(key);
    };

    content.appendChild(btnCont);
    content.appendChild(title);
    content.appendChild(titleInput);
    content.appendChild(description);
    content.appendChild(descriptionInput);
    content.appendChild(date);
    content.appendChild(dateInput);
    content.appendChild(priority);
    content.appendChild(priorityInput);
    content.appendChild(submit);
  };

  return { display, edit };
};




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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");




const content = document.querySelector("#content");

(0,_home__WEBPACK_IMPORTED_MODULE_3__.home)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3Bh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QVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIscUJBQXFCLFdBQVcsVUFBVSxvQkFBb0IsdUJBQXVCLHlCQUF5Qix5QkFBeUIseUJBQXlCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLHlCQUF5QixhQUFhLFdBQVcsc0JBQXNCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsaUhBQWlILFVBQVUsaUJBQWlCLGNBQWMsR0FBRyxTQUFTLG9CQUFvQixpQkFBaUIsa0JBQWtCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHdCQUF3QiwyQkFBMkIsNEJBQTRCLG9CQUFvQix1QkFBdUIsd0JBQXdCLHdDQUF3QyxzREFBc0QsR0FBRyxVQUFVLGdCQUFnQixHQUFHLGVBQWUsZ0JBQWdCLEdBQUcsTUFBTSxvQkFBb0IsZUFBZSxjQUFjLEdBQUcsaUJBQWlCLGlCQUFpQixrQkFBa0Isa0NBQWtDLG1CQUFtQixvQkFBb0IscUJBQXFCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLHdCQUF3Qix3Q0FBd0MsOEJBQThCLDhCQUE4QixHQUFHLGtCQUFrQixnQkFBZ0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQix3QkFBd0Isb0JBQW9CLDZDQUE2QyxZQUFZLDhCQUE4Qiw0QkFBNEIsa0JBQWtCLEdBQUcsa0JBQWtCLGlCQUFpQixHQUFHLG1CQUFtQixvQkFBb0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsMkJBQTJCLGtCQUFrQixpQkFBaUIsd0JBQXdCLGlCQUFpQiw0QkFBNEIsdUJBQXVCLGlCQUFpQixtRUFBbUUsR0FBRyxvQkFBb0Isb0JBQW9CLHNCQUFzQix1QkFBdUIsR0FBRyxpQkFBaUIscUJBQXFCLHNCQUFzQixHQUFHLHdCQUF3QixvQkFBb0IsR0FBRyx5QkFBeUIsb0JBQW9CLEdBQUcsWUFBWSxrQkFBa0IsNENBQTRDLG1DQUFtQyw2QkFBNkIsV0FBVyxnQkFBZ0Isa0NBQWtDLHdDQUF3QyxpRUFBaUUsOERBQThELDBCQUEwQixvQkFBb0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsOEJBQThCLHFCQUFxQiwrREFBK0Qsa0JBQWtCLGlCQUFpQix5REFBeUQsa0JBQWtCLG9CQUFvQixzQkFBc0IsdUJBQXVCLGtCQUFrQixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3QixvQkFBb0Isd0NBQXdDLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLGlCQUFpQixpQkFBaUIsa0JBQWtCLGlCQUFpQiwyQkFBMkIsd0NBQXdDLHFCQUFxQixvQkFBb0Isd0JBQXdCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLHlCQUF5QixvQkFBb0IsR0FBRyxlQUFlLGdCQUFnQixrQkFBa0IsOEJBQThCLEdBQUcsa0JBQWtCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGlCQUFpQix1QkFBdUIsa0NBQWtDLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLGNBQWMsa0NBQWtDLGlCQUFpQix3Q0FBd0MsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGdCQUFnQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixxQkFBcUIsc0JBQXNCLEdBQUcsc0JBQXNCLG9CQUFvQixHQUFHLGVBQWUsd0JBQXdCLGtCQUFrQix3QkFBd0IsOEJBQThCLGlDQUFpQyxrQ0FBa0MsZ0JBQWdCLGlCQUFpQixHQUFHLGtCQUFrQixlQUFlLG9CQUFvQixpQkFBaUIsd0JBQXdCLEdBQUcsbUJBQW1CLHVCQUF1Qix1QkFBdUIsZUFBZSxrQkFBa0Isd0JBQXdCLG1DQUFtQyxpQ0FBaUMsa0NBQWtDLGdCQUFnQixpQkFBaUIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLDBCQUEwQixvQkFBb0IsR0FBRyxxQkFBcUI7QUFDMXJXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFbmYsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBc0Y7QUFDdEYsTUFBd0c7QUFDeEcsTUFBbUc7Ozs7QUFJbkc7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRTdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkZBQVM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxtRkFBTyxJQUFJLDBGQUFjLEdBQUcsMEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQ2pEaEU7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7OztBQzFCYTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0M7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NxQztBQUM0Qjs7QUFFakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUJBQXlCO0FBQzFDLGtCQUFrQixrREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixxREFBVTtBQUM3Qjs7QUFFaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q1E7QUFDRjs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkMsaUJBQWlCLDJDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNnRDs7Ozs7Ozs7Ozs7Ozs7OztBQ2xUSDtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDBEQUFlO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBEQUFlO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVnQjs7Ozs7OztVQ25MaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNjO0FBQ2hDO0FBQ1M7QUFDOUI7O0FBRUEsMkNBQUkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbi5jYXJkIHtcXG4gIGZsZXgtYmFzaXM6IDIwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCAjZjJmMmYyKTtcXG59XFxuXFxuLmR1ZSB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm90dG9tLWJhciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2xvcjogIzBhNWE3YztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDVweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDE1cHgpO1xcbn1cXG5cXG4uaG9tZS1oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC41KTtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uaG9tZS1mb290ZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIGZsZXgtYmFzaXM6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCNmMmYyZjIsIHJnYigyMDUsIDIzNiwgMjM2KSk7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZW1wdHktcGx1cyB7XFxuICBmb250LXNpemU6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lbXB0eS1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogaW5pdGlhbDsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDQwMHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtbmFtZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbC1uYW1lOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tb2RhbC1idXR0b24ge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLXRpdGxlOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tY29udCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJhY2tidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIm51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5iYWNrdGV4dCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5iYWNrLWNvbnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIzcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmJhY2stY29udDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b3AtY29udCB7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5kZWxldGUtY29udCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvcC10b2RvLWJhciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0zMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNvbXBsZXRlLWNvbnQge1xcbiAgY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kZWxldGUtY29udDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1jb250OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3Q0FBd0M7RUFDeEMsT0FBTztFQUNQLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osOERBQThEO0FBQ2hFOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhLEVBQUUsc0JBQXNCO0VBQ3JDLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0IsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXLEVBQUUsZUFBZTtFQUM1QixZQUFZLEVBQUUsZ0JBQWdCO0VBQzlCLGlCQUFpQixFQUFFLDRCQUE0QjtFQUMvQyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztFQUNwRCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVksRUFBRSxvREFBb0Q7QUFDcEU7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG86d2dodEAyMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxufVxcbi5jYXJkIHtcXG4gIGZsZXgtYmFzaXM6IDIwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCAjZjJmMmYyKTtcXG59XFxuXFxuLmR1ZSB7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uYm90dG9tLWJhciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBjb2xvcjogIzBhNWE3YztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTnVuaXRvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDVweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDE1cHgpO1xcbn1cXG5cXG4uaG9tZS1oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDUwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC41KTtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4uaG9tZS1mb290ZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIGZsZXgtYmFzaXM6IDIwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCNmMmYyZjIsIHJnYigyMDUsIDIzNiwgMjM2KSk7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZW1wdHktcGx1cyB7XFxuICBmb250LXNpemU6IDEwMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lbXB0eS1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogaW5pdGlhbDsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDQwMHB4OyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubW9kYWwtbmFtZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5tb2RhbC1uYW1lOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5tb2RhbC1idXR0b24ge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1vZGFsLXRpdGxlOmhvdmVyIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tY29udCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubW9kYWwtY2xvc2Uge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLm1vZGFsLWNsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJhY2tidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIm51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5iYWNrdGV4dCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5iYWNrLWNvbnQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1hcmdpbi10b3A6IDIzcHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmJhY2stY29udDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b3AtY29udCB7XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5kZWxldGUtY29udCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLnRvcC10b2RvLWJhciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0zMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmNvbXBsZXRlLWNvbnQge1xcbiAgY29sb3I6IGJsdWU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kZWxldGUtY29udDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS1jb250OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IHsgZGlzcGxheVRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBQcm9qZWN0LCBhZGRQcm9qZWN0LCBkaXNwbGF5UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWQuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVhZGVyXCIpO1xuICBoZWFkLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJob21lLWJvZHlcIik7XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJUb2RvIGxpc3QgYnkgQWRhbSBXb29kc1wiO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuXG4gIGxldCBtb2RhbF9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxfY29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcblxuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbF9jb250ZW50KTtcblxuICBib2R5LmFwcGVuZENoaWxkKGhlYWQpO1xuICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICBkaXNwbGF5UHJvamVjdHMoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWJvZHlcIik7XG4gIGJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3QoXG4gICAgICBsb2NhbFN0b3JhZ2Uua2V5KGkpLFxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSlcbiAgICApO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdC5kaXNwbGF5KCkpO1xuICB9XG5cbiAgYm9keS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KCkpO1xufVxuXG5leHBvcnQgeyBob21lLCBkaXNwbGF5UHJvamVjdHMgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGRpc3BsYXksIFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmNvbnN0IFByb2plY3QgPSAobmFtZSwgdG9Eb0xpc3QpID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGxpc3QgPSAoKSA9PiB0b0RvTGlzdDtcblxuICBjb25zdCBkaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcblxuICAgIGxldCB0b3BDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3BDb250LmNsYXNzTGlzdC5hZGQoXCJ0b3AtY29udFwiKTtcblxuICAgIGxldCBkZWxldGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVDb250LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY29udFwiKTtcbiAgICBkZWxldGVDb250LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcbiAgICBkZWxldGVDb250LnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBkZWxldGVDb250Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoY29uZmlybShcIkRlbGV0ZSBcIiArIGdldE5hbWUoKSArIFwiP1wiKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShnZXROYW1lKCkpO1xuICAgICAgfVxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfTtcblxuICAgIHRvcENvbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQ29udCk7XG5cbiAgICBjYXJkLm9ubW91c2VlbnRlciA9ICgpID0+IHtcbiAgICAgIHRvcENvbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH07XG5cbiAgICBjYXJkLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcbiAgICAgIHRvcENvbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH07XG5cbiAgICBjYXJkLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzcGxheVRvRG9MaXN0KGdldE5hbWUoKSk7XG4gICAgICB9LCA1MCk7XG4gICAgfTtcblxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGdldE5hbWUoKTtcblxuICAgIGNhcmQuYXBwZW5kQ2hpbGQodG9wQ29udCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9O1xuXG4gIHJldHVybiB7IGRpc3BsYXkgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XG4gIGNhcmQub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBuZXdQcm9qZWN0KCk7XG4gIH07XG5cbiAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZChcImVtcHR5LXBsdXNcIik7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBcIitcIjtcblxuICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2MuY2xhc3NMaXN0LmFkZChcImVtcHR5LWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjLnRleHRDb250ZW50ID0gXCJBZGQgbmV3IHByb2plY3RcIjtcblxuICBjYXJkLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjYXJkLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gIHJldHVybiBjYXJkO1xufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuICBsZXQgdmFsID0gXCJcIjtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XG5cbiAgbGV0IGJ0bkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5Db250LmNsYXNzTGlzdC5hZGQoXCJidG4tY29udFwiKTtcblxuICBsZXQgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY2xvc2VcIik7XG4gIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCLinJVcIjtcbiAgY2xvc2VCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgYnRuQ29udC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiRW50ZXIgcHJvamVjdCB0aXRsZTogXCI7XG5cbiAgbGV0IG1vZGFsX21haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIG5hbWUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZChcIm1vZGFsLW5hbWVcIik7XG5cbiAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgc3VibWl0LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1idXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJDcmVhdGUgcHJvamVjdFwiKTtcbiAgc3VibWl0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZS52YWx1ZSwgXCJcIik7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChidG5Db250KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICByZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb0xpc3Qoa2V5KSB7XG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBrZXk7XG5cbiAgbGV0IGJhY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWNvbnRcIik7XG4gIGJhY2tDb250YWluZXIub25jbGljayA9ICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfTtcblxuICBsZXQgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2tidG5cIik7XG4gIGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIvCfoJRcIjtcbiAgYmFja0NvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcblxuICBsZXQgYmFja3RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiYWNrdGV4dC50ZXh0Q29udGVudCA9IFwiaG9tZVwiO1xuICBiYWNrdGV4dC5jbGFzc0xpc3QuYWRkKFwiYmFja3RleHRcIik7XG4gIGJhY2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja3RleHQpO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQ29udGFpbmVyKTtcblxuICBsZXQgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1ib2R5XCIpO1xuICBob21lLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBsZXQgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgbGV0IGFyciA9IHN0ci5zcGxpdChcIixcIik7XG5cbiAgaWYgKHN0ciAhPSBcIlwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDYpIHtcbiAgICAgIGxldCBpdGVtID0gVG9EbyhcbiAgICAgICAgYXJyW2ldLFxuICAgICAgICBhcnJbaSArIDFdLFxuICAgICAgICBhcnJbaSArIDJdLFxuICAgICAgICBhcnJbaSArIDNdLFxuICAgICAgICBhcnJbaSArIDRdLFxuICAgICAgICBhcnJbaSArIDVdXG4gICAgICApO1xuXG4gICAgICBob21lLmFwcGVuZENoaWxkKGl0ZW0uZGlzcGxheSgpKTtcbiAgICB9XG4gIH1cbiAgaG9tZS5hcHBlbmRDaGlsZChhZGRUb0RvKGtleSkpO1xufVxuXG5mdW5jdGlvbiBhZGRUb0RvKGtleSkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgY2FyZC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZUFkZFRvRG8oa2V5KTtcbiAgfTtcblxuICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmFtZS5jbGFzc0xpc3QuYWRkKFwiZW1wdHktcGx1c1wiKTtcbiAgbmFtZS50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIGxldCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzYy5jbGFzc0xpc3QuYWRkKFwiZW1wdHktZGVzY3JpcHRpb25cIik7XG4gIGRlc2MudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBpdGVtXCI7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChkZXNjKTtcblxuICByZXR1cm4gY2FyZDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQWRkVG9EbyhrZXkpIHtcbiAgdG9Eb01vZGFsKGtleSk7XG59XG5cbmZ1bmN0aW9uIHRvRG9Nb2RhbChrZXkpIHtcbiAgbGV0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsXCIpO1xuICBpdGVtLmNsYXNzTGlzdC5hZGQoXCIudG9kby1tb2RhbFwiKTtcbiAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCIudG9kby1tb2RhbC1jb250ZW50XCIpO1xuICBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiMzAwcHhcIjtcblxuICBsZXQgYnRuQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnQuY2xhc3NMaXN0LmFkZChcImJ0bi1jb250XCIpO1xuXG4gIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jbG9zZVwiKTtcbiAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIuKclVwiO1xuICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgfTtcblxuICBidG5Db250LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcblxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tbmFtZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk5hbWU6IFwiO1xuXG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5hbWUtaW5wdXRcIik7XG5cbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xuXG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uLWlucHV0XCIpO1xuXG4gIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tZGF0ZVwiKTtcbiAgZGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGU6IFwiO1xuXG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGUtaW5wdXRcIik7XG5cbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLXByaW9yaXR5XCIpO1xuICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xuXG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICBwcmlvcml0eUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByaW9yaXR5LWlucHV0XCIpO1xuXG4gIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uXCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ3JlYXRlIGl0ZW1cIik7XG4gIHN1Ym1pdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiMjAwcHhcIjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIGtleSxcbiAgICAgIGFkZEN1cnJlbnQoa2V5KSArXG4gICAgICAgIGtleSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgYWRkSW5kZXgoa2V5KSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSArXG4gICAgICAgIFwiLFwiICtcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlICtcbiAgICAgICAgXCIsXCIgK1xuICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICBkaXNwbGF5VG9Eb0xpc3Qoa2V5KTtcbiAgfTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGJ0bkNvbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0KTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VycmVudChrZXkpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSArIFwiLFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEluZGV4KGtleSkge1xuICBsZXQgYXJyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KS5zcGxpdChcIixcIik7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFyci5sZW5ndGggLyA2O1xuICB9XG59XG5leHBvcnQgeyBhZGRQcm9qZWN0LCBkaXNwbGF5VG9Eb0xpc3QsIFByb2plY3QgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlUb0RvTGlzdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5jb25zdCBUb0RvID0gKGtleSwgaW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBwcmlvcml0eSkgPT4ge1xuICBjb25zdCBnZXRLZXkgPSAoKSA9PiBrZXk7XG4gIGNvbnN0IGdldEluZGV4ID0gKCkgPT4gaW5kZXg7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZSA9ICgpID0+IGR1ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICBjb25zdCBkaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICBsZXQgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b3AuY2xhc3NMaXN0LmFkZChcInRvcC10b2RvLWJhclwiKTtcblxuICAgIGxldCBkZWxldGVDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVDb250LmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1pY29uc1wiKTtcbiAgICBkZWxldGVDb250LnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBkZWxldGVDb250LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY29udFwiKTtcblxuICAgIGxldCBjb21wbGV0ZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXBsZXRlQ29udC5jbGFzc0xpc3QuYWRkKFwibWF0ZXJpYWwtaWNvbnNcIik7XG4gICAgY29tcGxldGVDb250LmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZS1jb250XCIpO1xuICAgIGNvbXBsZXRlQ29udC50ZXh0Q29udGVudCA9IFwiZWRpdFwiO1xuXG4gICAgdG9wLmFwcGVuZENoaWxkKGNvbXBsZXRlQ29udCk7XG4gICAgdG9wLmFwcGVuZENoaWxkKGRlbGV0ZUNvbnQpO1xuXG4gICAgY2FyZC5vbm1vdXNlZW50ZXIgPSAoKSA9PiB7XG4gICAgICB0b3Auc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH07XG5cbiAgICBjYXJkLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcbiAgICAgIHRvcC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9O1xuXG4gICAgZGVsZXRlQ29udC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGNvbmZpcm0oXCJEZWxldGUgXCIgKyBnZXRUaXRsZSgpICsgXCIgP1wiKSkge1xuICAgICAgICBsZXQgYXJyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0S2V5KCkpLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgYXJyLnNwbGljZShnZXRJbmRleCgpICogNiwgNik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpICogNiA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFycltpICogNiArIDFdID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdldEtleSgpLCBhcnIpO1xuICAgICAgICBkaXNwbGF5VG9Eb0xpc3QoZ2V0S2V5KCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb21wbGV0ZUNvbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgIGVkaXQoKTtcbiAgICB9O1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGdldFRpdGxlKCk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiUFwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXREZXNjcmlwdGlvbigpO1xuXG4gICAgbGV0IGJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tYmFyXCIpO1xuXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZHVlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG4gICAgZHVlLnRleHRDb250ZW50ID0gXCJEdWU6IFwiICsgZ2V0RHVlKCk7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiICsgZ2V0UHJpb3JpdHkoKTtcblxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZChkdWUpO1xuICAgIGJvdHRvbS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjYXJkLmFwcGVuZENoaWxkKHRvcCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChib3R0b20pO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH07XG5cbiAgY29uc3QgZWRpdCA9ICgpID0+IHtcbiAgICBsZXQgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiLnRvZG8tbW9kYWxcIik7XG4gICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiLnRvZG8tbW9kYWwtY29udGVudFwiKTtcbiAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiMzAwcHhcIjtcblxuICAgIGxldCBidG5Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5Db250LmNsYXNzTGlzdC5hZGQoXCJidG4tY29udFwiKTtcblxuICAgIGxldCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNsb3NlXCIpO1xuICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gXCLinJVcIjtcbiAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfTtcblxuICAgIGJ0bkNvbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tbmFtZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTmFtZTogXCI7XG5cbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZG8tbmFtZS1pbnB1dFwiKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCI7XG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb24taW5wdXRcIik7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8tZGF0ZVwiKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG5cbiAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1pbnB1dFwiKTtcblxuICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLXByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogXCI7XG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHktaW5wdXRcIik7XG5cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYnV0dG9uXCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkVkaXQgaXRlbVwiKTtcbiAgICBzdWJtaXQub25jbGljayA9ICgpID0+IHtcbiAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSBcIjIwMHB4XCI7XG4gICAgICBsZXQgYXJyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0S2V5KCkpLnNwbGl0KFwiLFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJlIG9wOiBcIiArIGFycik7XG4gICAgICBpZiAodGl0bGVJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgIGFycltnZXRJbmRleCgpICogNiArIDJdID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChkZXNjcmlwdGlvbklucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgYXJyW2dldEluZGV4KCkgKiA2ICsgM10gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGVJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgIGFycltnZXRJbmRleCgpICogNiArIDRdID0gZGF0ZUlucHV0LnZhbHVlO1xuICAgICAgfVxuICAgICAgaWYgKHByaW9yaXR5SW5wdXQudmFsdWUgIT0gXCJcIikge1xuICAgICAgICBhcnJbZ2V0SW5kZXgoKSAqIDYgKyA1XSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGFyci5qb2luKFwiLFwiKSk7XG4gICAgICBkaXNwbGF5VG9Eb0xpc3Qoa2V5KTtcbiAgICB9O1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidG5Db250KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZGlzcGxheSwgZWRpdCB9O1xufTtcblxuZXhwb3J0IHsgVG9EbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXksIFRvRG8gfSBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCwgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgaG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmhvbWUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=