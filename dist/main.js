/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvasmanager.mjs":
/*!*******************************!*\
  !*** ./src/canvasmanager.mjs ***!
  \*******************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// const canvas = document.querySelector('#rink-canvas');\r\n\r\n// window.addEventListener('resize', function () {\r\n//     canvas.width = window.innerWidth;\r\n//     canvas.height = window.innerHeight;\r\n// });\n\n//# sourceURL=webpack:///./src/canvasmanager.mjs?");

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvasmanager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasmanager.mjs */ \"./src/canvasmanager.mjs\");\n/* harmony import */ var _objects_skater_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects/skater.mjs */ \"./src/objects/skater.mjs\");\n/* harmony import */ var _objects_rink_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/rink.mjs */ \"./src/objects/rink.mjs\");\n\r\n\r\n\r\n\r\n\r\nconst rink = new _objects_rink_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst skater = new _objects_skater_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n\r\n\r\n\r\nconst leanXTxt = document.querySelector('#leanx');\r\n\r\nconst interval = 33;\r\n\r\nconst canvas = document.querySelector('#rink-canvas');\r\nconst ctx = canvas.getContext('2d');\r\nsetInterval(function () {\r\n    skater.tick(interval);\r\n    if (skater.x < 0 || skater.x > _objects_rink_mjs__WEBPACK_IMPORTED_MODULE_2__[\"WIDTH\"] || skater.y < 0 || skater.y > _objects_rink_mjs__WEBPACK_IMPORTED_MODULE_2__[\"HEIGHT\"]) {\r\n        skater.x = 400;\r\n        skater.y = 300;\r\n    }\r\n\r\n    ctx.setTransform(1, 0, 0, 1, 0, 0);\r\n    rink.render(ctx);\r\n    ctx.setTransform(1, 0, 0, 1, 0, 0);\r\n    skater.render(ctx);\r\n    leanXTxt.innerHTML = skater.lean.x;\r\n}, interval);\r\n\r\n/*\r\nStates\r\n    Body Angular Momentum\r\n    Angular Velocity\r\n    Skate forward/backward speed\r\n    Lean (consider angle of skate now, weight/muscle tension should be considered later)\r\n        Side\r\n        Forward/Backward\r\n    Blade radius at current vertical lean\r\n    Skate Orientation\r\n    Skate Position\r\n\r\nState for frame\r\n    Skate Forward/Backward Speed\r\n        get value from last frame\r\n        modified by lean\r\n    Angular Velocity\r\n        value from last frame\r\n        + lean modifier\r\n        +/- Restriction from \r\n    Skate Orientation\r\n        Old Value\r\n        + Angular Momentum Modifier\r\n    Lean\r\n        Old value\r\n        + Arrow key modifier\r\n        [] Restrain within limits\r\n    Skate Position\r\n        New Orientation * Forward/Backward Speed\r\n    \r\n\r\n    Future Ideas\r\n        Lean is \"steered\" or biased by how body wants to balance in frame\r\n\r\n    Two current thoughts of simulation\r\n        One - Angular velocity + linear velocity\r\n        Two - Angular Velocity + body mass momentum + linear velocity\r\n*/\r\n\n\n//# sourceURL=webpack:///./src/index.mjs?");

/***/ }),

/***/ "./src/objects/rink.mjs":
/*!******************************!*\
  !*** ./src/objects/rink.mjs ***!
  \******************************/
/*! exports provided: default, WIDTH, HEIGHT */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WIDTH\", function() { return WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HEIGHT\", function() { return HEIGHT; });\nconst WIDTH = 600;\r\nconst HEIGHT = 300;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\r\n    constructor() {\r\n\r\n    }\r\n\r\n    render(ctx) {\r\n        ctx.fillStyle = 'lightblue';\r\n        ctx.fillRect(0, 0, WIDTH, HEIGHT);\r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/objects/rink.mjs?");

/***/ }),

/***/ "./src/objects/skater.mjs":
/*!********************************!*\
  !*** ./src/objects/skater.mjs ***!
  \********************************/
/*! exports provided: default, FLENGTH, FWIDTH */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FLENGTH\", function() { return FLENGTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FWIDTH\", function() { return FWIDTH; });\nconst lxModifier = 0.1;\r\nconst lyModifier = 0.1;\r\nconst FWIDTH = 80;\r\nconst FLENGTH = 160;\r\nconst ROCKER_START = 0.8;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\r\n    constructor() {\r\n        this.x = 300;\r\n        this.y = 150;\r\n        this.velocity = 40;\r\n        this.angVel = 0;\r\n        this.lean = {\r\n            x: 0,\r\n            y: 0\r\n        };\r\n        this.orientation = Math.PI * 3 / 2;\r\n\r\n        this.skateCanvas = document.querySelector('#skate-canvas');\r\n        this.sctx = this.skateCanvas.getContext('2d');\r\n\r\n        document.addEventListener('keydown', e => this.keydown(e));\r\n    }\r\n\r\n    tick(timeStep) {\r\n        const ticksPerSecond = 1000 / timeStep;\r\n\r\n        this.angVel = this.lean.x * Math.PI;\r\n\r\n        const sAngVel = this.angVel / ticksPerSecond;\r\n        this.orientation += sAngVel;\r\n    \r\n        const sVel = this.velocity / ticksPerSecond;\r\n        this.x += Math.cos(this.orientation) * sVel;\r\n        this.y += Math.sin(this.orientation) * sVel;\r\n    }\r\n\r\n    keydown(e) {\r\n        if (e.keyCode === 37) {\r\n            this.lean.x -= lxModifier;\r\n        } else if (e.keyCode === 39) {\r\n            this.lean.x += lxModifier;\r\n        } else if (e.keyCode === 38) {\r\n            this.lean.y += lyModifier;\r\n        } else if (e.keyCode === 40) {\r\n            this.lean.y -= lyModifier;\r\n        }\r\n    console.log(e.keyCode);\r\n        this.lean.x = Math.min(this.lean.x, 1);\r\n        this.lean.x = Math.max(this.lean.x, -1);\r\n        this.lean.y = Math.min(this.lean.y, 1);\r\n        this.lean.y = Math.max(this.lean.y, -1);\r\n    }\r\n\r\n    render(ctx) {\r\n        ctx.translate(this.x, this.y);\r\n        ctx.rotate(this.orientation);\r\n    \r\n        ctx.fillStyle = 'red';\r\n        ctx.fillRect(-5, -5, 10, 10);\r\n\r\n        this.renderSkateDiagram();\r\n    }\r\n    \r\n    renderSkateDiagram() {\r\n        const sctx = this.sctx;\r\n        sctx.setTransform(1, 0, 0, 1, 0, 0);\r\n        sctx.fillStyle = 'black';\r\n        sctx.fillRect(0, 0, 80, 200);\r\n    \r\n        // TODO: Draw line for rocker starting point/range\r\n    \r\n        const rocker = FLENGTH - ROCKER_START * FLENGTH;\r\n        sctx.fillStyle = 'green';\r\n        sctx.fillRect(0, rocker - 2, FWIDTH, 4);\r\n    \r\n        sctx.fillStyle = 'lightgrey';\r\n        sctx.fillRect(FWIDTH / 2 - 2, 0, 4, FLENGTH);\r\n    \r\n        sctx.translate(FWIDTH / 2, FLENGTH / 2);\r\n        sctx.translate(this.lean.x * FWIDTH / 2, -this.lean.y * FLENGTH / 2);\r\n    \r\n        sctx.fillStyle = 'red';\r\n        sctx.fillRect(-5, -5, 10, 10);\r\n    \r\n        // sctx.translate();\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/objects/skater.mjs?");

/***/ })

/******/ });