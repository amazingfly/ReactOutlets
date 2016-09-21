/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var MainPage_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(MainPage_1.MainPage, null), document.getElementById("outlets"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ButtonPanel_1 = __webpack_require__(4);
	var MainPage = (function (_super) {
	    __extends(MainPage, _super);
	    function MainPage() {
	        _super.call(this);
	        this.state = {
	            "Count": 0,
	            "Outlets": [],
	        };
	    }
	    MainPage.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {ref: function (c) { return _this._el = c; }}, React.createElement(ButtonPanel_1.ButtonPanel, null));
	    };
	    return MainPage;
	}(React.Component));
	exports.MainPage = MainPage;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var ButtonPair_1 = __webpack_require__(5);
	var share_1 = __webpack_require__(7);
	var ButtonPanel = (function (_super) {
	    __extends(ButtonPanel, _super);
	    function ButtonPanel() {
	        var _this = this;
	        _super.call(this);
	        this.componentDidMount = function () {
	            _this._el.addEventListener('click', _this.clickHandler);
	            share_1.OutletCall("getOutlets", { name: "grots" }, function (result) {
	                _this.setState(result);
	                console.log(_this.state.Outlets);
	            });
	        };
	        this.clickHandler = function (ev) {
	            //console.log(ev);
	            //console.log("target: "+ev.target);
	            var elm = ev.target;
	            //console.log(elm.className);
	            var command = elm.getAttribute("data-id");
	            share_1.OutletCall("pressOutlets", { command: command }, function (result) {
	                console.log(result);
	            });
	        };
	        this.state = {
	            "Outlets": [],
	        };
	    }
	    ButtonPanel.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {ref: function (c) { return _this._el = c; }}, this.state.Outlets.map(function (v, i) {
	            return React.createElement(ButtonPair_1.ButtonPair, {key: i, outlet: v});
	        }));
	    };
	    return ButtonPanel;
	}(React.Component));
	exports.ButtonPanel = ButtonPanel;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Button_1 = __webpack_require__(6);
	var ButtonPair = (function (_super) {
	    __extends(ButtonPair, _super);
	    function ButtonPair() {
	        _super.call(this);
	        this.componentDidMount = function () {
	            //var id = this.props.outlets;
	            //var idOn = id + "On";
	            //var idOff = id + "Off";
	            //console.log(id);
	            //console.log(idOn);
	            //console.log(idOff);
	        };
	    }
	    ButtonPair.prototype.render = function () {
	        return React.createElement("div", null, React.createElement("div", null, React.createElement("div", {className: "ButtonPairArea"}, React.createElement("div", null, React.createElement(Button_1.Button, {className: "on", button: "OnButton", outlet: this.props.outlet})), React.createElement("div", null, React.createElement(Button_1.Button, {className: "off", button: "OffButton", outlet: this.props.outlet})))));
	    };
	    return ButtonPair;
	}(React.Component));
	exports.ButtonPair = ButtonPair;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Button = (function (_super) {
	    __extends(Button, _super);
	    function Button() {
	        _super.call(this);
	    }
	    Button.prototype.render = function () {
	        return React.createElement("div", null, React.createElement("div", {className: this.props.button}, React.createElement("div", {"data-id": this.props.outlet.Name + this.props.button, className: "center"}, this.props.outlet.Name)));
	    };
	    return Button;
	}(React.Component));
	exports.Button = Button;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var outletUrlBase = "http://" + window.location.hostname + ":9873/";
	var username = "publicweb";
	var userkey = "webaccess1";
	//var retryMs:number = 1000;
	function OutletCall(apicall, payload, resultcb) {
	    var request = new XMLHttpRequest();
	    var URL = outletUrlBase + apicall;
	    var data = JSON.stringify(payload);
	    request.open("POST", URL, true);
	    //request.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + userkey))
	    request.send(data);
	    request.onload = function () {
	        if (request.status >= 200 && request.status < 400) {
	            // Success!
	            var resp = JSON.parse(request.response);
	            if (resp.Complete) {
	                resultcb(resp);
	            }
	        }
	        else {
	            console.log("darn");
	        }
	    };
	}
	exports.OutletCall = OutletCall;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map