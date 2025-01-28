/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: #ffffff;
}

::-webkit-scrollbar-thumb {
  background-color: #d65a9c;
}

body {
  background-color: #ffffff;
  font-family: "Roboto Mono", monospace;
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  overflow-y: auto;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
}
.nav-container p {
  font-weight: bold;
}

.nav-unordered-list {
  list-style: none;
  text-align: right;
}
.nav-unordered-list li {
  display: inline;
  padding: 10px;
}

.link {
  text-decoration: none;
  color: black;
}

.link-active {
  color: #d65a9c;
}

.profile-image-container {
  display: block;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.profile-image-container img {
  width: 100%;
  height: auto;
  display: block;
}

.main-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  gap: 10px;
}

.about-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  gap: 10px;
  height: 500px;
}

.projects-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  gap: 10px;
}

.main-header-div {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
  width: 100%;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.header-content button {
  border-radius: 5px;
  color: #ffffff;
  background-color: #d65a9c;
  padding: 10px 20px;
  border: 1px solid #d65a9c;
  cursor: pointer;
}
.header-content button:hover {
  color: #d65a9c;
  background-color: #ffffff;
  border: 0.1px solid #d65a9c;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  padding: 100px 50px;
  background-color: #fadeed;
}

.tech-stack-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.tech-stack-images img {
  width: 150px;
  height: 150px;
}

.about {
  display: flex;
  flex-direction: column;
  background-color: #cad5e2;
  padding: 100px 50px;
}

.projects {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 100px 50px;
  align-items: flex-start;
}
.projects button {
  border-radius: 5px;
  color: #ffffff;
  background-color: #d65a9c;
  padding: 10px 20px;
  border: 1px solid #d65a9c;
  cursor: pointer;
}
.projects button:hover {
  color: #d65a9c;
  background-color: #ffffff;
  border: 0.1px solid #d65a9c;
}

.footer {
  padding: 50px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 300px;
  color: white;
  background-color: #6a3ad3;
  gap: 10px;
}
.footer span {
  margin-top: 50px;
  font-size: 10px;
}

.footer-logos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}
.footer-logos img {
  width: 50px;
  height: 50px;
}

.projects-div {
  margin-bottom: 50px;
}

.projects-card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  width: 300px;
  margin: 32px;
  padding: 16px;
  height: 300px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
.project-card button {
  border-radius: 5px;
  color: #ffffff;
  background-color: #d65a9c;
  padding: 10px 20px;
  border: 1px solid #d65a9c;
  cursor: pointer;
}
.project-card button:hover {
  color: #d65a9c;
  background-color: #ffffff;
  border: 0.1px solid #d65a9c;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_variables.scss"],"names":[],"mappings":"AAGA;EACE,sBAAA;AADF;;AAIA;EACE,oDAAA;EACA,yBCRgB;ADOlB;;AAIA;EACE,UAAA;EACA,yBCbgB;ADYlB;;AAIA;EACE,yBClBc;ADiBhB;;AAkBA;EACE,yBCnCgB;EDoChB,qCAAA;EAKA,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,SAAA;EACA,gBAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;AAnBF;AAoBE;EACE,iBAAA;AAlBJ;;AAsBA;EACE,gBAAA;EACA,iBAAA;AAnBF;AAoBE;EACE,eAAA;EACA,aAAA;AAlBJ;;AAsBA;EACE,qBAAA;EACA,YAAA;AAnBF;;AAsBA;EACE,cC3Ec;ADwDhB;;AAsBA;EACE,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,uBAAA;EACA,sCAAA;AAnBF;AAoBE;EACE,WAAA;EACA,YAAA;EACA,cAAA;AAlBJ;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,SAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;EACA,SAAA;EACA,aAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,SAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,mBAAA;EACA,WAAA;AAnBF;;AAsBA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,QAAA;AAnBF;AAoBE;EA3GA,kBAAA;EACA,cCtBgB;EDuBhB,yBCxBc;EDyBd,kBAAA;EACA,yBAAA;EACA,eAAA;AA0FF;AAzFE;EACE,cC7BY;ED8BZ,yBC7Bc;ED8Bd,2BAAA;AA2FJ;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;EACA,SAAA;EACA,mBAAA;EACA,yBC1IgB;ADiIlB;;AAYA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AATF;AAUE;EACE,YAAA;EACA,aAAA;AARJ;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,yBC7Jc;ED8Jd,mBAAA;AATF;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,yBCrKgB;EDsKhB,mBAAA;EACA,uBAAA;AATF;AAUE;EAnJA,kBAAA;EACA,cCtBgB;EDuBhB,yBCxBc;EDyBd,kBAAA;EACA,yBAAA;EACA,eAAA;AA4IF;AA3IE;EACE,cC7BY;ED8BZ,yBC7Bc;ED8Bd,2BAAA;AA6IJ;;AAEA;EACE,aAAA;EACA,aAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,SAAA;AACF;AAAE;EACE,gBAAA;EACA,eAAA;AAEJ;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,SAAA;AACF;AAAE;EACE,WAAA;EACA,YAAA;AAEJ;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,qBAAA;EACA,4EAAA;AACF;AAAE;EA5MA,kBAAA;EACA,cCtBgB;EDuBhB,yBCxBc;EDyBd,kBAAA;EACA,yBAAA;EACA,eAAA;AA+MF;AA9ME;EACE,cC7BY;ED8BZ,yBC7Bc;ED8Bd,2BAAA;AAgNJ","sourcesContent":["@import \"variables\";\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap\");\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  background-color: $secondary-color;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 6px;\r\n  background-color: $secondary-color;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: $primary-color;\r\n}\r\n\r\n@mixin custom-button($main-color, $hover-color) {\r\n  border-radius: 5px;\r\n  color: $hover-color;\r\n  background-color: $main-color;\r\n  padding: 10px 20px;\r\n  border: 1px solid $main-color;\r\n  cursor: pointer;\r\n  &:hover {\r\n    color: $main-color;\r\n    background-color: $hover-color;\r\n    border: 0.1px solid $main-color;\r\n  }\r\n}\r\n\r\nbody {\r\n  background-color: $secondary-color;\r\n  font-family: \"Roboto Mono\", monospace;\r\n  // display: flex;\r\n  // flex-direction: column;\r\n  // align-items: center;\r\n  // justify-content: center;\r\n  position: relative;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  overflow-y: auto;\r\n}\r\n\r\n.nav-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  padding: 10px;\r\n  p {\r\n    font-weight: bold;\r\n  }\r\n}\r\n\r\n.nav-unordered-list {\r\n  list-style: none;\r\n  text-align: right;\r\n  li {\r\n    display: inline;\r\n    padding: 10px;\r\n  }\r\n}\r\n\r\n.link {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.link-active {\r\n  color: $primary-color;\r\n}\r\n\r\n.profile-image-container {\r\n  display: block;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  background-color: white;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n  img {\r\n    width: 100%;\r\n    height: auto;\r\n    display: block;\r\n  }\r\n}\r\n\r\n.main-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  padding: 50px;\r\n  gap: 10px;\r\n}\r\n\r\n.about-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  padding: 50px;\r\n  gap: 10px;\r\n  height: 500px;\r\n}\r\n\r\n.projects-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 50px;\r\n  gap: 10px;\r\n}\r\n\r\n.main-header-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  gap: 30px;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.header-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 5px;\r\n  button {\r\n    @include custom-button($primary-color, $secondary-color);\r\n  }\r\n}\r\n\r\n.tech-stack {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  padding: 100px 50px;\r\n  background-color: $section-color-2;\r\n}\r\n\r\n.tech-stack-images {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  img {\r\n    width: 150px;\r\n    height: 150px;\r\n  }\r\n}\r\n\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: $section-color;\r\n  padding: 100px 50px;\r\n}\r\n\r\n.projects {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: $secondary-color;\r\n  padding: 100px 50px;\r\n  align-items: flex-start;\r\n  button {\r\n    @include custom-button($primary-color, $secondary-color);\r\n  }\r\n}\r\n\r\n.footer {\r\n  padding: 50px;\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  height: 300px;\r\n  color: white;\r\n  background-color: #6a3ad3;\r\n  gap: 10px;\r\n  span {\r\n    margin-top: 50px;\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\n.footer-logos {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 20px;\r\n  img {\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n}\r\n\r\n.projects-div {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.projects-card-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.project-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-align: center;\r\n  gap: 10px;\r\n  width: 300px;\r\n  margin: 32px;\r\n  padding: 16px;\r\n  height: 300px;\r\n  border-radius: 0.5rem;\r\n  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n  button {\r\n    @include custom-button($primary-color, $secondary-color);\r\n  }\r\n}\r\n","$primary-color: #d65a9c;\r\n$secondary-color: #ffffff;\r\n$section-color: #cad5e2;\r\n$section-color-2: #fadeed;\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/css-logo.jpg":
/*!*********************************!*\
  !*** ./src/assets/css-logo.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "css-logo.jpg";

/***/ }),

/***/ "./src/assets/github-logo.svg":
/*!************************************!*\
  !*** ./src/assets/github-logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-logo.svg";

/***/ }),

/***/ "./src/assets/html-logo.jpg":
/*!**********************************!*\
  !*** ./src/assets/html-logo.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "html-logo.jpg";

/***/ }),

/***/ "./src/assets/js-logo.jpg":
/*!********************************!*\
  !*** ./src/assets/js-logo.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "js-logo.jpg";

/***/ }),

/***/ "./src/assets/linkedin-logo.svg":
/*!**************************************!*\
  !*** ./src/assets/linkedin-logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "linkedin-logo.svg";

/***/ }),

/***/ "./src/assets/profile.jpg":
/*!********************************!*\
  !*** ./src/assets/profile.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "profile.jpg";

/***/ }),

/***/ "./src/assets/react-logo.jpg":
/*!***********************************!*\
  !*** ./src/assets/react-logo.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "react-logo.jpg";

/***/ }),

/***/ "./src/assets/resume.pdf":
/*!*******************************!*\
  !*** ./src/assets/resume.pdf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "resume.pdf";

/***/ }),

/***/ "./src/assets/ts-logo.jpg":
/*!********************************!*\
  !*** ./src/assets/ts-logo.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ts-logo.jpg";

/***/ }),

/***/ "./src/assets/twitter-logo.svg":
/*!*************************************!*\
  !*** ./src/assets/twitter-logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter-logo.svg";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/portfolio/";
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
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_profile_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/profile.jpg */ "./src/assets/profile.jpg");
/* harmony import */ var _assets_css_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/css-logo.jpg */ "./src/assets/css-logo.jpg");
/* harmony import */ var _assets_html_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/html-logo.jpg */ "./src/assets/html-logo.jpg");
/* harmony import */ var _assets_js_logo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/js-logo.jpg */ "./src/assets/js-logo.jpg");
/* harmony import */ var _assets_react_logo_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/react-logo.jpg */ "./src/assets/react-logo.jpg");
/* harmony import */ var _assets_ts_logo_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/ts-logo.jpg */ "./src/assets/ts-logo.jpg");
/* harmony import */ var _assets_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/twitter-logo.svg */ "./src/assets/twitter-logo.svg");
/* harmony import */ var _assets_github_logo_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/github-logo.svg */ "./src/assets/github-logo.svg");
/* harmony import */ var _assets_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/linkedin-logo.svg */ "./src/assets/linkedin-logo.svg");
/* harmony import */ var _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/resume.pdf */ "./src/assets/resume.pdf");











var homePageLink = document.getElementById("homePageLink");
homePageLink === null || homePageLink === void 0 || homePageLink.setAttribute("href", "/portfolio/");
var aboutPageLink = document.getElementById("aboutPageLink");
aboutPageLink === null || aboutPageLink === void 0 || aboutPageLink.setAttribute("href", "/portfolio/about");
var projectsPageLink = document.getElementById("projectPageLink");
projectsPageLink === null || projectsPageLink === void 0 || projectsPageLink.setAttribute("href", "/portfolio/projects");
var projectPageLinkButton = document.getElementById("projectPageLinkButton");
projectPageLinkButton === null || projectPageLinkButton === void 0 || projectPageLinkButton.setAttribute("href", "/portfolio/projects");
var currentPath = location.pathname;
var linksArr = document.getElementsByClassName("link");
var activeLink = Array.from(linksArr).find(function (link) {
  return link.pathname === (currentPath || currentPath.split("/")[2]);
});
if (activeLink) {
  activeLink.classList.add("link-active");
}
var profileImg = document.getElementById("profileImg");
profileImg === null || profileImg === void 0 || profileImg.setAttribute("src", _assets_profile_jpg__WEBPACK_IMPORTED_MODULE_1__);
var cssLogoImg = document.getElementById("css3Img");
cssLogoImg === null || cssLogoImg === void 0 || cssLogoImg.setAttribute("src", _assets_css_logo_jpg__WEBPACK_IMPORTED_MODULE_2__);
var htmlLogoImg = document.getElementById("html5Img");
htmlLogoImg === null || htmlLogoImg === void 0 || htmlLogoImg.setAttribute("src", _assets_html_logo_jpg__WEBPACK_IMPORTED_MODULE_3__);
var jsLogoImg = document.getElementById("jsImg");
jsLogoImg === null || jsLogoImg === void 0 || jsLogoImg.setAttribute("src", _assets_js_logo_jpg__WEBPACK_IMPORTED_MODULE_4__);
var reactJsLogoImg = document.getElementById("reactImg");
reactJsLogoImg === null || reactJsLogoImg === void 0 || reactJsLogoImg.setAttribute("src", _assets_react_logo_jpg__WEBPACK_IMPORTED_MODULE_5__);
var tsLogoImg = document.getElementById("tsImg");
tsLogoImg === null || tsLogoImg === void 0 || tsLogoImg.setAttribute("src", _assets_ts_logo_jpg__WEBPACK_IMPORTED_MODULE_6__);
var gitLogoSvg = document.getElementById("gitLogo");
gitLogoSvg === null || gitLogoSvg === void 0 || gitLogoSvg.setAttribute("src", _assets_github_logo_svg__WEBPACK_IMPORTED_MODULE_8__);
var twitterLogoSvg = document.getElementById("twitterLogo");
twitterLogoSvg === null || twitterLogoSvg === void 0 || twitterLogoSvg.setAttribute("src", _assets_twitter_logo_svg__WEBPACK_IMPORTED_MODULE_7__);
var linkedinLogoSvg = document.getElementById("linkedinLogo");
linkedinLogoSvg === null || linkedinLogoSvg === void 0 || linkedinLogoSvg.setAttribute("src", _assets_linkedin_logo_svg__WEBPACK_IMPORTED_MODULE_9__);
var resumeLink = document.getElementById("resumeLink");
resumeLink === null || resumeLink === void 0 ? void 0 : resumeLink.setAttribute("href", _assets_resume_pdf__WEBPACK_IMPORTED_MODULE_10__);
})();

/******/ })()
;
//# sourceMappingURL=bundle680676438048943a72e5.js.map