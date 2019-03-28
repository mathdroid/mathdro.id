module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/odi/SANDBOX/react-static-netlifycms/pages/index.js";




var SvgMathdroid = function SvgMathdroid(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-name": "Hero",
    viewBox: "0 0 580.43 89.29"
  }, props, {
    className: "jsx-678175730" + " " + (props.className != null && props.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("defs", {
    className: "jsx-678175730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("clipPath", {
    id: "clip",
    className: "jsx-678175730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M10.41 25.65h16.46l-1.79 11h.69a21.42 21.42 0 0 1 19.45-11.81c8.45 0 14.1 4.59 15 11.83h.65c3.7-7.19 11.58-11.83 20.77-11.83 11.54 0 18.41 7.72 16.14 21.26l-7 42H73.4l6.5-38.57c1.06-6.95-2.48-10.4-8-10.4-6.3 0-10.73 4.35-11.7 10.85L53.74 88.1H36.95l6.58-38.93c.93-6.14-2.24-10-8-10s-10.9 4.48-11.91 11.48l-6.34 37.47H0zM104.22 70.65c2.36-13.9 14.1-18.09 26.66-19.22 10.93-1.1 15.36-1.63 16.09-5.61v-.24c.81-5.12-2-8.09-7.8-8.09-6.18 0-10.61 3-12.48 7.19l-15.77-1.3c4.23-11.38 15.32-18.53 30.32-18.53 13.82 0 25.4 6.26 23 21.13l-7 42.11h-16.47l1.46-8.66h-.49c-4 5.81-10.65 9.84-19.87 9.84-11.87-.02-19.65-6.31-17.65-18.62zm39.5-4.88l1.06-6.62c-2.24 1.38-8.62 2.19-12.4 2.8-6.26.85-10.77 3.25-11.54 8.13-.73 4.71 2.56 7.23 8 7.23 7.58 0 13.76-5 14.9-11.55zM212.08 38.65H200.3l-5 30.24c-.81 4.8 1.42 6.1 4.88 6.1a25.29 25.29 0 0 0 4.39-.57l.65 12.88a35.06 35.06 0 0 1-9.71 1.63c-12.72.49-20-5.57-17.84-17.76l5.31-32.52h-8.54l2.19-13h8.49l2.48-15h17.31l-2.48 15h11.79zM233.78 88.08H216.5l13.82-83.23h16.78l-5.2 31.8h.69c4-7.36 11.14-11.83 20.65-11.83 13 0 20.12 8.86 17.68 23.49l-6.7 39.77h-17.24l6.1-36.66c1.26-7.68-2.15-12.19-9.14-12.19s-12.8 4.71-14.14 12.76zM290.74 56.94c3.54-21.46 16.87-32.11 30.6-32.11 10.45 0 14.43 6.22 15.85 11.3h.53l5.2-31.29h17.3l-13.8 83.24h-17.07l1.67-10h-.73c-3.29 5.2-9.47 11-19.51 11-14.31.01-23.49-11.25-20.04-32.14zm43.93-.08c1.83-11.14-1.83-18.25-10.24-18.25-8.58 0-14.23 7.44-16 18.25s1.38 18.45 9.92 18.45c8.36 0 14.5-7.31 16.33-18.45zM370.96 25.65h16.78l-1.83 10.89h.65c3.58-7.72 9.88-11.79 17-11.79a13.57 13.57 0 0 1 8 2.28l-7.48 14.22a12.8 12.8 0 0 0-5.73-1.38c-6.95 0-13.33 5.24-14.71 12.88l-5.81 35.32h-17.28zM409.43 56.82c3.09-19.18 16.87-32 35.76-32s28.69 13.09 25.52 32.51c-3.13 19.1-16.91 31.94-35.76 31.94-19.05.03-28.73-13.06-25.52-32.45zm43.85-.08c1.71-10.77-1.3-18.7-9.84-18.7-8.78 0-14.79 8.21-16.58 19.22-1.75 10.73 1.3 18.61 9.84 18.61 8.74.01 14.76-8.11 16.59-19.13zM487.29 25.65h17.31l-10.38 62.43h-17.33zm2-16.91C489.86 3.9 494.53 0 499.65 0s8.9 3.9 8.37 8.74-5.2 8.78-10.36 8.78-8.95-3.98-8.34-8.78zM510.94 56.94c3.54-21.46 16.87-32.11 30.6-32.11 10.45 0 14.43 6.22 15.85 11.3h.53l5.2-31.29h17.31l-13.81 83.24h-17.07l1.67-10h-.73c-3.29 5.2-9.47 11-19.51 11-14.31.01-23.5-11.25-20.04-32.14zm43.93-.08c1.83-11.14-1.83-18.25-10.24-18.25-8.58 0-14.23 7.44-16 18.25s1.38 18.45 9.92 18.45c8.36 0 14.49-7.31 16.32-18.45z",
    className: "jsx-678175730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    id: "my-graphic",
    clipPath: "url(#clip)",
    className: "jsx-678175730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("image", {
    xlinkHref: "/static/image.jpg",
    width: "700",
    height: "468",
    className: "jsx-678175730",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "678175730",
    __self: this
  }, "svg.jsx-678175730{max-width:48rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vZGkvU0FOREJPWC9yZWFjdC1zdGF0aWMtbmV0bGlmeWNtcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBR3lCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvb2RpL1NBTkRCT1gvcmVhY3Qtc3RhdGljLW5ldGxpZnljbXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IFN2Z01hdGhkcm9pZCA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8c3ZnIGRhdGEtbmFtZT1cIkhlcm9cIiB2aWV3Qm94PVwiMCAwIDU4MC40MyA4OS4yOVwiIHsuLi5wcm9wc30+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNDEgMjUuNjVoMTYuNDZsLTEuNzkgMTFoLjY5YTIxLjQyIDIxLjQyIDAgMCAxIDE5LjQ1LTExLjgxYzguNDUgMCAxNC4xIDQuNTkgMTUgMTEuODNoLjY1YzMuNy03LjE5IDExLjU4LTExLjgzIDIwLjc3LTExLjgzIDExLjU0IDAgMTguNDEgNy43MiAxNi4xNCAyMS4yNmwtNyA0Mkg3My40bDYuNS0zOC41N2MxLjA2LTYuOTUtMi40OC0xMC40LTgtMTAuNC02LjMgMC0xMC43MyA0LjM1LTExLjcgMTAuODVMNTMuNzQgODguMUgzNi45NWw2LjU4LTM4LjkzYy45My02LjE0LTIuMjQtMTAtOC0xMHMtMTAuOSA0LjQ4LTExLjkxIDExLjQ4bC02LjM0IDM3LjQ3SDB6TTEwNC4yMiA3MC42NWMyLjM2LTEzLjkgMTQuMS0xOC4wOSAyNi42Ni0xOS4yMiAxMC45My0xLjEgMTUuMzYtMS42MyAxNi4wOS01LjYxdi0uMjRjLjgxLTUuMTItMi04LjA5LTcuOC04LjA5LTYuMTggMC0xMC42MSAzLTEyLjQ4IDcuMTlsLTE1Ljc3LTEuM2M0LjIzLTExLjM4IDE1LjMyLTE4LjUzIDMwLjMyLTE4LjUzIDEzLjgyIDAgMjUuNCA2LjI2IDIzIDIxLjEzbC03IDQyLjExaC0xNi40N2wxLjQ2LTguNjZoLS40OWMtNCA1LjgxLTEwLjY1IDkuODQtMTkuODcgOS44NC0xMS44Ny0uMDItMTkuNjUtNi4zMS0xNy42NS0xOC42MnptMzkuNS00Ljg4bDEuMDYtNi42MmMtMi4yNCAxLjM4LTguNjIgMi4xOS0xMi40IDIuOC02LjI2Ljg1LTEwLjc3IDMuMjUtMTEuNTQgOC4xMy0uNzMgNC43MSAyLjU2IDcuMjMgOCA3LjIzIDcuNTggMCAxMy43Ni01IDE0LjktMTEuNTV6TTIxMi4wOCAzOC42NUgyMDAuM2wtNSAzMC4yNGMtLjgxIDQuOCAxLjQyIDYuMSA0Ljg4IDYuMWEyNS4yOSAyNS4yOSAwIDAgMCA0LjM5LS41N2wuNjUgMTIuODhhMzUuMDYgMzUuMDYgMCAwIDEtOS43MSAxLjYzYy0xMi43Mi40OS0yMC01LjU3LTE3Ljg0LTE3Ljc2bDUuMzEtMzIuNTJoLTguNTRsMi4xOS0xM2g4LjQ5bDIuNDgtMTVoMTcuMzFsLTIuNDggMTVoMTEuNzl6TTIzMy43OCA4OC4wOEgyMTYuNWwxMy44Mi04My4yM2gxNi43OGwtNS4yIDMxLjhoLjY5YzQtNy4zNiAxMS4xNC0xMS44MyAyMC42NS0xMS44MyAxMyAwIDIwLjEyIDguODYgMTcuNjggMjMuNDlsLTYuNyAzOS43N2gtMTcuMjRsNi4xLTM2LjY2YzEuMjYtNy42OC0yLjE1LTEyLjE5LTkuMTQtMTIuMTlzLTEyLjggNC43MS0xNC4xNCAxMi43NnpNMjkwLjc0IDU2Ljk0YzMuNTQtMjEuNDYgMTYuODctMzIuMTEgMzAuNi0zMi4xMSAxMC40NSAwIDE0LjQzIDYuMjIgMTUuODUgMTEuM2guNTNsNS4yLTMxLjI5aDE3LjNsLTEzLjggODMuMjRoLTE3LjA3bDEuNjctMTBoLS43M2MtMy4yOSA1LjItOS40NyAxMS0xOS41MSAxMS0xNC4zMS4wMS0yMy40OS0xMS4yNS0yMC4wNC0zMi4xNHptNDMuOTMtLjA4YzEuODMtMTEuMTQtMS44My0xOC4yNS0xMC4yNC0xOC4yNS04LjU4IDAtMTQuMjMgNy40NC0xNiAxOC4yNXMxLjM4IDE4LjQ1IDkuOTIgMTguNDVjOC4zNiAwIDE0LjUtNy4zMSAxNi4zMy0xOC40NXpNMzcwLjk2IDI1LjY1aDE2Ljc4bC0xLjgzIDEwLjg5aC42NWMzLjU4LTcuNzIgOS44OC0xMS43OSAxNy0xMS43OWExMy41NyAxMy41NyAwIDAgMSA4IDIuMjhsLTcuNDggMTQuMjJhMTIuOCAxMi44IDAgMCAwLTUuNzMtMS4zOGMtNi45NSAwLTEzLjMzIDUuMjQtMTQuNzEgMTIuODhsLTUuODEgMzUuMzJoLTE3LjI4ek00MDkuNDMgNTYuODJjMy4wOS0xOS4xOCAxNi44Ny0zMiAzNS43Ni0zMnMyOC42OSAxMy4wOSAyNS41MiAzMi41MWMtMy4xMyAxOS4xLTE2LjkxIDMxLjk0LTM1Ljc2IDMxLjk0LTE5LjA1LjAzLTI4LjczLTEzLjA2LTI1LjUyLTMyLjQ1em00My44NS0uMDhjMS43MS0xMC43Ny0xLjMtMTguNy05Ljg0LTE4LjctOC43OCAwLTE0Ljc5IDguMjEtMTYuNTggMTkuMjItMS43NSAxMC43MyAxLjMgMTguNjEgOS44NCAxOC42MSA4Ljc0LjAxIDE0Ljc2LTguMTEgMTYuNTktMTkuMTN6TTQ4Ny4yOSAyNS42NWgxNy4zMWwtMTAuMzggNjIuNDNoLTE3LjMzem0yLTE2LjkxQzQ4OS44NiAzLjkgNDk0LjUzIDAgNDk5LjY1IDBzOC45IDMuOSA4LjM3IDguNzQtNS4yIDguNzgtMTAuMzYgOC43OC04Ljk1LTMuOTgtOC4zNC04Ljc4ek01MTAuOTQgNTYuOTRjMy41NC0yMS40NiAxNi44Ny0zMi4xMSAzMC42LTMyLjExIDEwLjQ1IDAgMTQuNDMgNi4yMiAxNS44NSAxMS4zaC41M2w1LjItMzEuMjloMTcuMzFsLTEzLjgxIDgzLjI0aC0xNy4wN2wxLjY3LTEwaC0uNzNjLTMuMjkgNS4yLTkuNDcgMTEtMTkuNTEgMTEtMTQuMzEuMDEtMjMuNS0xMS4yNS0yMC4wNC0zMi4xNHptNDMuOTMtLjA4YzEuODMtMTEuMTQtMS44My0xOC4yNS0xMC4yNC0xOC4yNS04LjU4IDAtMTQuMjMgNy40NC0xNiAxOC4yNXMxLjM4IDE4LjQ1IDkuOTIgMTguNDVjOC4zNiAwIDE0LjQ5LTcuMzEgMTYuMzItMTguNDV6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIGlkPVwibXktZ3JhcGhpY1wiIGNsaXBQYXRoPVwidXJsKCNjbGlwKVwiPlxuICAgICAgICA8aW1hZ2UgeGxpbmtIcmVmPVwiL3N0YXRpYy9pbWFnZS5qcGdcIiB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjQ2OFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzdmcge1xuICAgICAgICBtYXgtd2lkdGg6IDQ4cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5NYXRoZHJvaWQ8L3RpdGxlPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG1hdGhkcm9pZFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBtYXRoZHJvaWRcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9tYXRoZHJvLmlkXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiSGksIG15IG5hbWUgaXMgT2RpIVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgaXMgbXkgd2Vic2l0ZS5cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL21hdGhkcm8uaWQvc3RhdGljL2NhcmQuanBnXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFN2Z01hdGhkcm9pZCBmaWxsPVwicGlua1wiIHsuLi5wcm9wc30gLz5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHksXG4gICAgICAjX19uZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/odi/SANDBOX/react-static-netlifycms/pages/index.js */"));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Mathdroid"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@mathdroid",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@mathdroid",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:url",
    content: "https://mathdro.id",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:title",
    content: "Hi, my name is Odi!",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:description",
    content: "This is my website.",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:image",
    content: "https://mathdro.id/static/card.jpg",
    className: "jsx-3873516943",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SvgMathdroid, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    fill: "pink"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3873516943",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vZGkvU0FOREJPWC9yZWFjdC1zdGF0aWMtbmV0bGlmeWNtcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3VCLEFBS29CLFdBQ0MsWUFDSCxTQUNJLDBFQUNVLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvb2RpL1NBTkRCT1gvcmVhY3Qtc3RhdGljLW5ldGxpZnljbXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IFN2Z01hdGhkcm9pZCA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8c3ZnIGRhdGEtbmFtZT1cIkhlcm9cIiB2aWV3Qm94PVwiMCAwIDU4MC40MyA4OS4yOVwiIHsuLi5wcm9wc30+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTAuNDEgMjUuNjVoMTYuNDZsLTEuNzkgMTFoLjY5YTIxLjQyIDIxLjQyIDAgMCAxIDE5LjQ1LTExLjgxYzguNDUgMCAxNC4xIDQuNTkgMTUgMTEuODNoLjY1YzMuNy03LjE5IDExLjU4LTExLjgzIDIwLjc3LTExLjgzIDExLjU0IDAgMTguNDEgNy43MiAxNi4xNCAyMS4yNmwtNyA0Mkg3My40bDYuNS0zOC41N2MxLjA2LTYuOTUtMi40OC0xMC40LTgtMTAuNC02LjMgMC0xMC43MyA0LjM1LTExLjcgMTAuODVMNTMuNzQgODguMUgzNi45NWw2LjU4LTM4LjkzYy45My02LjE0LTIuMjQtMTAtOC0xMHMtMTAuOSA0LjQ4LTExLjkxIDExLjQ4bC02LjM0IDM3LjQ3SDB6TTEwNC4yMiA3MC42NWMyLjM2LTEzLjkgMTQuMS0xOC4wOSAyNi42Ni0xOS4yMiAxMC45My0xLjEgMTUuMzYtMS42MyAxNi4wOS01LjYxdi0uMjRjLjgxLTUuMTItMi04LjA5LTcuOC04LjA5LTYuMTggMC0xMC42MSAzLTEyLjQ4IDcuMTlsLTE1Ljc3LTEuM2M0LjIzLTExLjM4IDE1LjMyLTE4LjUzIDMwLjMyLTE4LjUzIDEzLjgyIDAgMjUuNCA2LjI2IDIzIDIxLjEzbC03IDQyLjExaC0xNi40N2wxLjQ2LTguNjZoLS40OWMtNCA1LjgxLTEwLjY1IDkuODQtMTkuODcgOS44NC0xMS44Ny0uMDItMTkuNjUtNi4zMS0xNy42NS0xOC42MnptMzkuNS00Ljg4bDEuMDYtNi42MmMtMi4yNCAxLjM4LTguNjIgMi4xOS0xMi40IDIuOC02LjI2Ljg1LTEwLjc3IDMuMjUtMTEuNTQgOC4xMy0uNzMgNC43MSAyLjU2IDcuMjMgOCA3LjIzIDcuNTggMCAxMy43Ni01IDE0LjktMTEuNTV6TTIxMi4wOCAzOC42NUgyMDAuM2wtNSAzMC4yNGMtLjgxIDQuOCAxLjQyIDYuMSA0Ljg4IDYuMWEyNS4yOSAyNS4yOSAwIDAgMCA0LjM5LS41N2wuNjUgMTIuODhhMzUuMDYgMzUuMDYgMCAwIDEtOS43MSAxLjYzYy0xMi43Mi40OS0yMC01LjU3LTE3Ljg0LTE3Ljc2bDUuMzEtMzIuNTJoLTguNTRsMi4xOS0xM2g4LjQ5bDIuNDgtMTVoMTcuMzFsLTIuNDggMTVoMTEuNzl6TTIzMy43OCA4OC4wOEgyMTYuNWwxMy44Mi04My4yM2gxNi43OGwtNS4yIDMxLjhoLjY5YzQtNy4zNiAxMS4xNC0xMS44MyAyMC42NS0xMS44MyAxMyAwIDIwLjEyIDguODYgMTcuNjggMjMuNDlsLTYuNyAzOS43N2gtMTcuMjRsNi4xLTM2LjY2YzEuMjYtNy42OC0yLjE1LTEyLjE5LTkuMTQtMTIuMTlzLTEyLjggNC43MS0xNC4xNCAxMi43NnpNMjkwLjc0IDU2Ljk0YzMuNTQtMjEuNDYgMTYuODctMzIuMTEgMzAuNi0zMi4xMSAxMC40NSAwIDE0LjQzIDYuMjIgMTUuODUgMTEuM2guNTNsNS4yLTMxLjI5aDE3LjNsLTEzLjggODMuMjRoLTE3LjA3bDEuNjctMTBoLS43M2MtMy4yOSA1LjItOS40NyAxMS0xOS41MSAxMS0xNC4zMS4wMS0yMy40OS0xMS4yNS0yMC4wNC0zMi4xNHptNDMuOTMtLjA4YzEuODMtMTEuMTQtMS44My0xOC4yNS0xMC4yNC0xOC4yNS04LjU4IDAtMTQuMjMgNy40NC0xNiAxOC4yNXMxLjM4IDE4LjQ1IDkuOTIgMTguNDVjOC4zNiAwIDE0LjUtNy4zMSAxNi4zMy0xOC40NXpNMzcwLjk2IDI1LjY1aDE2Ljc4bC0xLjgzIDEwLjg5aC42NWMzLjU4LTcuNzIgOS44OC0xMS43OSAxNy0xMS43OWExMy41NyAxMy41NyAwIDAgMSA4IDIuMjhsLTcuNDggMTQuMjJhMTIuOCAxMi44IDAgMCAwLTUuNzMtMS4zOGMtNi45NSAwLTEzLjMzIDUuMjQtMTQuNzEgMTIuODhsLTUuODEgMzUuMzJoLTE3LjI4ek00MDkuNDMgNTYuODJjMy4wOS0xOS4xOCAxNi44Ny0zMiAzNS43Ni0zMnMyOC42OSAxMy4wOSAyNS41MiAzMi41MWMtMy4xMyAxOS4xLTE2LjkxIDMxLjk0LTM1Ljc2IDMxLjk0LTE5LjA1LjAzLTI4LjczLTEzLjA2LTI1LjUyLTMyLjQ1em00My44NS0uMDhjMS43MS0xMC43Ny0xLjMtMTguNy05Ljg0LTE4LjctOC43OCAwLTE0Ljc5IDguMjEtMTYuNTggMTkuMjItMS43NSAxMC43MyAxLjMgMTguNjEgOS44NCAxOC42MSA4Ljc0LjAxIDE0Ljc2LTguMTEgMTYuNTktMTkuMTN6TTQ4Ny4yOSAyNS42NWgxNy4zMWwtMTAuMzggNjIuNDNoLTE3LjMzem0yLTE2LjkxQzQ4OS44NiAzLjkgNDk0LjUzIDAgNDk5LjY1IDBzOC45IDMuOSA4LjM3IDguNzQtNS4yIDguNzgtMTAuMzYgOC43OC04Ljk1LTMuOTgtOC4zNC04Ljc4ek01MTAuOTQgNTYuOTRjMy41NC0yMS40NiAxNi44Ny0zMi4xMSAzMC42LTMyLjExIDEwLjQ1IDAgMTQuNDMgNi4yMiAxNS44NSAxMS4zaC41M2w1LjItMzEuMjloMTcuMzFsLTEzLjgxIDgzLjI0aC0xNy4wN2wxLjY3LTEwaC0uNzNjLTMuMjkgNS4yLTkuNDcgMTEtMTkuNTEgMTEtMTQuMzEuMDEtMjMuNS0xMS4yNS0yMC4wNC0zMi4xNHptNDMuOTMtLjA4YzEuODMtMTEuMTQtMS44My0xOC4yNS0xMC4yNC0xOC4yNS04LjU4IDAtMTQuMjMgNy40NC0xNiAxOC4yNXMxLjM4IDE4LjQ1IDkuOTIgMTguNDVjOC4zNiAwIDE0LjQ5LTcuMzEgMTYuMzItMTguNDV6XCIgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIGlkPVwibXktZ3JhcGhpY1wiIGNsaXBQYXRoPVwidXJsKCNjbGlwKVwiPlxuICAgICAgICA8aW1hZ2UgeGxpbmtIcmVmPVwiL3N0YXRpYy9pbWFnZS5qcGdcIiB3aWR0aD1cIjcwMFwiIGhlaWdodD1cIjQ2OFwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzdmcge1xuICAgICAgICBtYXgtd2lkdGg6IDQ4cmVtO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC8+XG4pO1xuXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5NYXRoZHJvaWQ8L3RpdGxlPlxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICBrZXk9XCJ2aWV3cG9ydFwiXG4gICAgICAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG1hdGhkcm9pZFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBtYXRoZHJvaWRcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9tYXRoZHJvLmlkXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiSGksIG15IG5hbWUgaXMgT2RpIVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRoaXMgaXMgbXkgd2Vic2l0ZS5cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL21hdGhkcm8uaWQvc3RhdGljL2NhcmQuanBnXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFN2Z01hdGhkcm9pZCBmaWxsPVwicGlua1wiIHsuLi5wcm9wc30gLz5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHksXG4gICAgICAjX19uZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/odi/SANDBOX/react-static-netlifycms/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/odi/SANDBOX/react-static-netlifycms/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map