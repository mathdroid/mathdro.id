webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-tilt/dist/tilt.js":
/*!**********************************************!*\
  !*** ./node_modules/react-tilt/dist/tilt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tilt = function (_Component) {
  _inherits(Tilt, _Component);

  function Tilt(props) {
    _classCallCheck(this, Tilt);

    var _this = _possibleConstructorReturn(this, (Tilt.__proto__ || Object.getPrototypeOf(Tilt)).call(this, props));

    _this.state = {
      style: {}
    };

    var defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1000,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: "1.1",
      speed: "1000",
      transition: true,
      axis: null,
      reset: true
    };

    _this.width = null;
    _this.height = null;
    _this.left = null;
    _this.top = null;
    _this.transitionTimeout = null;
    _this.updateCall = null;
    _this.element = null;
    _this.settings = Object.assign({}, defaultSettings, _this.props.options);
    _this.reverse = _this.settings.reverse ? -1 : 1;

    // Events
    _this.onMouseEnter = _this.onMouseEnter.bind(_this, _this.props.onMouseEnter);
    _this.onMouseMove = _this.onMouseMove.bind(_this, _this.props.onMouseMove);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this, _this.props.onMouseLeave);
    return _this;
  }

  _createClass(Tilt, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.element = (0, _reactDom.findDOMNode)(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTimeout);
      cancelAnimationFrame(this.updateCall);
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var e = arguments[1];

      this.updateElementPosition();

      this.setState(Object.assign({}, this.state, {
        style: _extends({}, this.state.style, {
          willChange: "transform"
        })
      }));

      this.setTransition();

      return cb(e);
    }
  }, {
    key: 'reset',
    value: function reset() {
      var _this2 = this;

      window.requestAnimationFrame(function () {
        _this2.setState(Object.assign({}, _this2.state, {
          style: _extends({}, _this2.state.style, {
            transform: "perspective(" + _this2.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)" })
        }));
      });
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var e = arguments[1];

      e.persist();

      if (this.updateCall !== null) {
        window.cancelAnimationFrame(this.updateCall);
      }

      this.event = e;
      this.updateCall = requestAnimationFrame(this.update.bind(this, e));

      return cb(e);
    }
  }, {
    key: 'setTransition',
    value: function setTransition() {
      var _this3 = this;

      clearTimeout(this.transitionTimeout);

      this.setState(Object.assign({}, this.state, {
        style: _extends({}, this.state.style, {
          transition: this.settings.speed + "ms " + this.settings.easing
        })
      }));

      this.transitionTimeout = setTimeout(function () {
        _this3.setState(Object.assign({}, _this3.state, {
          style: _extends({}, _this3.state.style, {
            transition: ''
          })
        }));
      }, this.settings.speed);
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var e = arguments[1];

      this.setTransition();

      if (this.settings.reset) {
        this.reset();
      }
      return cb(e);
    }
  }, {
    key: 'getValues',
    value: function getValues(e) {
      var x = (e.nativeEvent.clientX - this.left) / this.width;
      var y = (e.nativeEvent.clientY - this.top) / this.height;
      var _x = Math.min(Math.max(x, 0), 1);
      var _y = Math.min(Math.max(y, 0), 1);

      var tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);
      var tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);

      var percentageX = _x * 100;
      var percentageY = _y * 100;

      return {
        tiltX: tiltX,
        tiltY: tiltY,
        percentageX: percentageX,
        percentageY: percentageY
      };
    }
  }, {
    key: 'updateElementPosition',
    value: function updateElementPosition() {
      var rect = this.element.getBoundingClientRect();
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.left = rect.left;
      this.top = rect.top;
    }
  }, {
    key: 'update',
    value: function update(e) {
      var values = this.getValues(e);

      this.setState(Object.assign({}, this.state, {
        style: _extends({}, this.state.style, {
          transform: "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")"
        })
      }));

      this.updateCall = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var style = Object.assign({}, this.props.style, this.state.style);
      return _react2.default.createElement(
        'div',
        { style: style,
          className: this.props.className,
          onMouseEnter: this.onMouseEnter,
          onMouseMove: this.onMouseMove,
          onMouseLeave: this.onMouseLeave
        },
        this.props.children
      );
    }
  }]);

  return Tilt;
}(_react.Component);

exports.default = Tilt;

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tilt */ "./node_modules/react-tilt/dist/tilt.js");
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tilt__WEBPACK_IMPORTED_MODULE_3__);

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
  }, "svg.jsx-678175730{max-width:48rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vZGkvU0FOREJPWC9yZWFjdC1zdGF0aWMtbmV0bGlmeWNtcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmdCLEFBR3lCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvb2RpL1NBTkRCT1gvcmVhY3Qtc3RhdGljLW5ldGxpZnljbXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlsdCBmcm9tICdyZWFjdC10aWx0J1xuXG5jb25zdCBTdmdNYXRoZHJvaWQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPHN2ZyBkYXRhLW5hbWU9XCJIZXJvXCIgdmlld0JveD1cIjAgMCA1ODAuNDMgODkuMjlcIiB7Li4ucHJvcHN9PlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEwLjQxIDI1LjY1aDE2LjQ2bC0xLjc5IDExaC42OWEyMS40MiAyMS40MiAwIDAgMSAxOS40NS0xMS44MWM4LjQ1IDAgMTQuMSA0LjU5IDE1IDExLjgzaC42NWMzLjctNy4xOSAxMS41OC0xMS44MyAyMC43Ny0xMS44MyAxMS41NCAwIDE4LjQxIDcuNzIgMTYuMTQgMjEuMjZsLTcgNDJINzMuNGw2LjUtMzguNTdjMS4wNi02Ljk1LTIuNDgtMTAuNC04LTEwLjQtNi4zIDAtMTAuNzMgNC4zNS0xMS43IDEwLjg1TDUzLjc0IDg4LjFIMzYuOTVsNi41OC0zOC45M2MuOTMtNi4xNC0yLjI0LTEwLTgtMTBzLTEwLjkgNC40OC0xMS45MSAxMS40OGwtNi4zNCAzNy40N0gwek0xMDQuMjIgNzAuNjVjMi4zNi0xMy45IDE0LjEtMTguMDkgMjYuNjYtMTkuMjIgMTAuOTMtMS4xIDE1LjM2LTEuNjMgMTYuMDktNS42MXYtLjI0Yy44MS01LjEyLTItOC4wOS03LjgtOC4wOS02LjE4IDAtMTAuNjEgMy0xMi40OCA3LjE5bC0xNS43Ny0xLjNjNC4yMy0xMS4zOCAxNS4zMi0xOC41MyAzMC4zMi0xOC41MyAxMy44MiAwIDI1LjQgNi4yNiAyMyAyMS4xM2wtNyA0Mi4xMWgtMTYuNDdsMS40Ni04LjY2aC0uNDljLTQgNS44MS0xMC42NSA5Ljg0LTE5Ljg3IDkuODQtMTEuODctLjAyLTE5LjY1LTYuMzEtMTcuNjUtMTguNjJ6bTM5LjUtNC44OGwxLjA2LTYuNjJjLTIuMjQgMS4zOC04LjYyIDIuMTktMTIuNCAyLjgtNi4yNi44NS0xMC43NyAzLjI1LTExLjU0IDguMTMtLjczIDQuNzEgMi41NiA3LjIzIDggNy4yMyA3LjU4IDAgMTMuNzYtNSAxNC45LTExLjU1ek0yMTIuMDggMzguNjVIMjAwLjNsLTUgMzAuMjRjLS44MSA0LjggMS40MiA2LjEgNC44OCA2LjFhMjUuMjkgMjUuMjkgMCAwIDAgNC4zOS0uNTdsLjY1IDEyLjg4YTM1LjA2IDM1LjA2IDAgMCAxLTkuNzEgMS42M2MtMTIuNzIuNDktMjAtNS41Ny0xNy44NC0xNy43Nmw1LjMxLTMyLjUyaC04LjU0bDIuMTktMTNoOC40OWwyLjQ4LTE1aDE3LjMxbC0yLjQ4IDE1aDExLjc5ek0yMzMuNzggODguMDhIMjE2LjVsMTMuODItODMuMjNoMTYuNzhsLTUuMiAzMS44aC42OWM0LTcuMzYgMTEuMTQtMTEuODMgMjAuNjUtMTEuODMgMTMgMCAyMC4xMiA4Ljg2IDE3LjY4IDIzLjQ5bC02LjcgMzkuNzdoLTE3LjI0bDYuMS0zNi42NmMxLjI2LTcuNjgtMi4xNS0xMi4xOS05LjE0LTEyLjE5cy0xMi44IDQuNzEtMTQuMTQgMTIuNzZ6TTI5MC43NCA1Ni45NGMzLjU0LTIxLjQ2IDE2Ljg3LTMyLjExIDMwLjYtMzIuMTEgMTAuNDUgMCAxNC40MyA2LjIyIDE1Ljg1IDExLjNoLjUzbDUuMi0zMS4yOWgxNy4zbC0xMy44IDgzLjI0aC0xNy4wN2wxLjY3LTEwaC0uNzNjLTMuMjkgNS4yLTkuNDcgMTEtMTkuNTEgMTEtMTQuMzEuMDEtMjMuNDktMTEuMjUtMjAuMDQtMzIuMTR6bTQzLjkzLS4wOGMxLjgzLTExLjE0LTEuODMtMTguMjUtMTAuMjQtMTguMjUtOC41OCAwLTE0LjIzIDcuNDQtMTYgMTguMjVzMS4zOCAxOC40NSA5LjkyIDE4LjQ1YzguMzYgMCAxNC41LTcuMzEgMTYuMzMtMTguNDV6TTM3MC45NiAyNS42NWgxNi43OGwtMS44MyAxMC44OWguNjVjMy41OC03LjcyIDkuODgtMTEuNzkgMTctMTEuNzlhMTMuNTcgMTMuNTcgMCAwIDEgOCAyLjI4bC03LjQ4IDE0LjIyYTEyLjggMTIuOCAwIDAgMC01LjczLTEuMzhjLTYuOTUgMC0xMy4zMyA1LjI0LTE0LjcxIDEyLjg4bC01LjgxIDM1LjMyaC0xNy4yOHpNNDA5LjQzIDU2LjgyYzMuMDktMTkuMTggMTYuODctMzIgMzUuNzYtMzJzMjguNjkgMTMuMDkgMjUuNTIgMzIuNTFjLTMuMTMgMTkuMS0xNi45MSAzMS45NC0zNS43NiAzMS45NC0xOS4wNS4wMy0yOC43My0xMy4wNi0yNS41Mi0zMi40NXptNDMuODUtLjA4YzEuNzEtMTAuNzctMS4zLTE4LjctOS44NC0xOC43LTguNzggMC0xNC43OSA4LjIxLTE2LjU4IDE5LjIyLTEuNzUgMTAuNzMgMS4zIDE4LjYxIDkuODQgMTguNjEgOC43NC4wMSAxNC43Ni04LjExIDE2LjU5LTE5LjEzek00ODcuMjkgMjUuNjVoMTcuMzFsLTEwLjM4IDYyLjQzaC0xNy4zM3ptMi0xNi45MUM0ODkuODYgMy45IDQ5NC41MyAwIDQ5OS42NSAwczguOSAzLjkgOC4zNyA4Ljc0LTUuMiA4Ljc4LTEwLjM2IDguNzgtOC45NS0zLjk4LTguMzQtOC43OHpNNTEwLjk0IDU2Ljk0YzMuNTQtMjEuNDYgMTYuODctMzIuMTEgMzAuNi0zMi4xMSAxMC40NSAwIDE0LjQzIDYuMjIgMTUuODUgMTEuM2guNTNsNS4yLTMxLjI5aDE3LjMxbC0xMy44MSA4My4yNGgtMTcuMDdsMS42Ny0xMGgtLjczYy0zLjI5IDUuMi05LjQ3IDExLTE5LjUxIDExLTE0LjMxLjAxLTIzLjUtMTEuMjUtMjAuMDQtMzIuMTR6bTQzLjkzLS4wOGMxLjgzLTExLjE0LTEuODMtMTguMjUtMTAuMjQtMTguMjUtOC41OCAwLTE0LjIzIDcuNDQtMTYgMTguMjVzMS4zOCAxOC40NSA5LjkyIDE4LjQ1YzguMzYgMCAxNC40OS03LjMxIDE2LjMyLTE4LjQ1elwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBpZD1cIm15LWdyYXBoaWNcIiBjbGlwUGF0aD1cInVybCgjY2xpcClcIj5cbiAgICAgIDxpbWFnZSB4bGlua0hyZWY9XCIvc3RhdGljL2ltYWdlLmpwZ1wiIHdpZHRoPVwiNzAwXCIgaGVpZ2h0PVwiNDY4XCIvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc3ZnIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0OHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDw+XG4gIDxUaWx0IGNsYXNzTmFtZT1cIlRpbHRcIiBvcHRpb25zPXt7IG1heCA6IDI1IH19ID5cblxuICAgIDxTdmdNYXRoZHJvaWQgZmlsbD1cInBpbmtcIiB7Li4ucHJvcHN9IC8+XG4gIDwvVGlsdD5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHksXG4gICAgICAjX19uZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/odi/SANDBOX/react-static-netlifycms/pages/index.js */"));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_tilt__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "Tilt",
    options: {
      max: 25
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SvgMathdroid, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    fill: "pink"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3873516943",
    __self: this
  }, "html,body,#__next{width:100%;height:100%;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vZGkvU0FOREJPWC9yZWFjdC1zdGF0aWMtbmV0bGlmeWNtcy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnVCLEFBS29CLFdBQ0MsWUFDSCxTQUNJLDBFQUNVLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvb2RpL1NBTkRCT1gvcmVhY3Qtc3RhdGljLW5ldGxpZnljbXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlsdCBmcm9tICdyZWFjdC10aWx0J1xuXG5jb25zdCBTdmdNYXRoZHJvaWQgPSBwcm9wcyA9PiAoXG4gIDw+XG4gICAgPHN2ZyBkYXRhLW5hbWU9XCJIZXJvXCIgdmlld0JveD1cIjAgMCA1ODAuNDMgODkuMjlcIiB7Li4ucHJvcHN9PlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTEwLjQxIDI1LjY1aDE2LjQ2bC0xLjc5IDExaC42OWEyMS40MiAyMS40MiAwIDAgMSAxOS40NS0xMS44MWM4LjQ1IDAgMTQuMSA0LjU5IDE1IDExLjgzaC42NWMzLjctNy4xOSAxMS41OC0xMS44MyAyMC43Ny0xMS44MyAxMS41NCAwIDE4LjQxIDcuNzIgMTYuMTQgMjEuMjZsLTcgNDJINzMuNGw2LjUtMzguNTdjMS4wNi02Ljk1LTIuNDgtMTAuNC04LTEwLjQtNi4zIDAtMTAuNzMgNC4zNS0xMS43IDEwLjg1TDUzLjc0IDg4LjFIMzYuOTVsNi41OC0zOC45M2MuOTMtNi4xNC0yLjI0LTEwLTgtMTBzLTEwLjkgNC40OC0xMS45MSAxMS40OGwtNi4zNCAzNy40N0gwek0xMDQuMjIgNzAuNjVjMi4zNi0xMy45IDE0LjEtMTguMDkgMjYuNjYtMTkuMjIgMTAuOTMtMS4xIDE1LjM2LTEuNjMgMTYuMDktNS42MXYtLjI0Yy44MS01LjEyLTItOC4wOS03LjgtOC4wOS02LjE4IDAtMTAuNjEgMy0xMi40OCA3LjE5bC0xNS43Ny0xLjNjNC4yMy0xMS4zOCAxNS4zMi0xOC41MyAzMC4zMi0xOC41MyAxMy44MiAwIDI1LjQgNi4yNiAyMyAyMS4xM2wtNyA0Mi4xMWgtMTYuNDdsMS40Ni04LjY2aC0uNDljLTQgNS44MS0xMC42NSA5Ljg0LTE5Ljg3IDkuODQtMTEuODctLjAyLTE5LjY1LTYuMzEtMTcuNjUtMTguNjJ6bTM5LjUtNC44OGwxLjA2LTYuNjJjLTIuMjQgMS4zOC04LjYyIDIuMTktMTIuNCAyLjgtNi4yNi44NS0xMC43NyAzLjI1LTExLjU0IDguMTMtLjczIDQuNzEgMi41NiA3LjIzIDggNy4yMyA3LjU4IDAgMTMuNzYtNSAxNC45LTExLjU1ek0yMTIuMDggMzguNjVIMjAwLjNsLTUgMzAuMjRjLS44MSA0LjggMS40MiA2LjEgNC44OCA2LjFhMjUuMjkgMjUuMjkgMCAwIDAgNC4zOS0uNTdsLjY1IDEyLjg4YTM1LjA2IDM1LjA2IDAgMCAxLTkuNzEgMS42M2MtMTIuNzIuNDktMjAtNS41Ny0xNy44NC0xNy43Nmw1LjMxLTMyLjUyaC04LjU0bDIuMTktMTNoOC40OWwyLjQ4LTE1aDE3LjMxbC0yLjQ4IDE1aDExLjc5ek0yMzMuNzggODguMDhIMjE2LjVsMTMuODItODMuMjNoMTYuNzhsLTUuMiAzMS44aC42OWM0LTcuMzYgMTEuMTQtMTEuODMgMjAuNjUtMTEuODMgMTMgMCAyMC4xMiA4Ljg2IDE3LjY4IDIzLjQ5bC02LjcgMzkuNzdoLTE3LjI0bDYuMS0zNi42NmMxLjI2LTcuNjgtMi4xNS0xMi4xOS05LjE0LTEyLjE5cy0xMi44IDQuNzEtMTQuMTQgMTIuNzZ6TTI5MC43NCA1Ni45NGMzLjU0LTIxLjQ2IDE2Ljg3LTMyLjExIDMwLjYtMzIuMTEgMTAuNDUgMCAxNC40MyA2LjIyIDE1Ljg1IDExLjNoLjUzbDUuMi0zMS4yOWgxNy4zbC0xMy44IDgzLjI0aC0xNy4wN2wxLjY3LTEwaC0uNzNjLTMuMjkgNS4yLTkuNDcgMTEtMTkuNTEgMTEtMTQuMzEuMDEtMjMuNDktMTEuMjUtMjAuMDQtMzIuMTR6bTQzLjkzLS4wOGMxLjgzLTExLjE0LTEuODMtMTguMjUtMTAuMjQtMTguMjUtOC41OCAwLTE0LjIzIDcuNDQtMTYgMTguMjVzMS4zOCAxOC40NSA5LjkyIDE4LjQ1YzguMzYgMCAxNC41LTcuMzEgMTYuMzMtMTguNDV6TTM3MC45NiAyNS42NWgxNi43OGwtMS44MyAxMC44OWguNjVjMy41OC03LjcyIDkuODgtMTEuNzkgMTctMTEuNzlhMTMuNTcgMTMuNTcgMCAwIDEgOCAyLjI4bC03LjQ4IDE0LjIyYTEyLjggMTIuOCAwIDAgMC01LjczLTEuMzhjLTYuOTUgMC0xMy4zMyA1LjI0LTE0LjcxIDEyLjg4bC01LjgxIDM1LjMyaC0xNy4yOHpNNDA5LjQzIDU2LjgyYzMuMDktMTkuMTggMTYuODctMzIgMzUuNzYtMzJzMjguNjkgMTMuMDkgMjUuNTIgMzIuNTFjLTMuMTMgMTkuMS0xNi45MSAzMS45NC0zNS43NiAzMS45NC0xOS4wNS4wMy0yOC43My0xMy4wNi0yNS41Mi0zMi40NXptNDMuODUtLjA4YzEuNzEtMTAuNzctMS4zLTE4LjctOS44NC0xOC43LTguNzggMC0xNC43OSA4LjIxLTE2LjU4IDE5LjIyLTEuNzUgMTAuNzMgMS4zIDE4LjYxIDkuODQgMTguNjEgOC43NC4wMSAxNC43Ni04LjExIDE2LjU5LTE5LjEzek00ODcuMjkgMjUuNjVoMTcuMzFsLTEwLjM4IDYyLjQzaC0xNy4zM3ptMi0xNi45MUM0ODkuODYgMy45IDQ5NC41MyAwIDQ5OS42NSAwczguOSAzLjkgOC4zNyA4Ljc0LTUuMiA4Ljc4LTEwLjM2IDguNzgtOC45NS0zLjk4LTguMzQtOC43OHpNNTEwLjk0IDU2Ljk0YzMuNTQtMjEuNDYgMTYuODctMzIuMTEgMzAuNi0zMi4xMSAxMC40NSAwIDE0LjQzIDYuMjIgMTUuODUgMTEuM2guNTNsNS4yLTMxLjI5aDE3LjMxbC0xMy44MSA4My4yNGgtMTcuMDdsMS42Ny0xMGgtLjczYy0zLjI5IDUuMi05LjQ3IDExLTE5LjUxIDExLTE0LjMxLjAxLTIzLjUtMTEuMjUtMjAuMDQtMzIuMTR6bTQzLjkzLS4wOGMxLjgzLTExLjE0LTEuODMtMTguMjUtMTAuMjQtMTguMjUtOC41OCAwLTE0LjIzIDcuNDQtMTYgMTguMjVzMS4zOCAxOC40NSA5LjkyIDE4LjQ1YzguMzYgMCAxNC40OS03LjMxIDE2LjMyLTE4LjQ1elwiIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBpZD1cIm15LWdyYXBoaWNcIiBjbGlwUGF0aD1cInVybCgjY2xpcClcIj5cbiAgICAgIDxpbWFnZSB4bGlua0hyZWY9XCIvc3RhdGljL2ltYWdlLmpwZ1wiIHdpZHRoPVwiNzAwXCIgaGVpZ2h0PVwiNDY4XCIvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgc3ZnIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0OHJlbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDw+XG4gIDxUaWx0IGNsYXNzTmFtZT1cIlRpbHRcIiBvcHRpb25zPXt7IG1heCA6IDI1IH19ID5cblxuICAgIDxTdmdNYXRoZHJvaWQgZmlsbD1cInBpbmtcIiB7Li4ucHJvcHN9IC8+XG4gIDwvVGlsdD5cbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgaHRtbCxcbiAgICAgIGJvZHksXG4gICAgICAjX19uZXh0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/odi/SANDBOX/react-static-netlifycms/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.30f684dccf355f4e3f1c.hot-update.js.map