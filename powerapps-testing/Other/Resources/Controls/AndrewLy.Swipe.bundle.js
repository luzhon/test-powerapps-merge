var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Swipe/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Swipe/index.ts":
/*!************************!*\
  !*** ./Swipe/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Swipe = void 0;\nvar direction;\n\n(function (direction) {\n  direction[\"Up\"] = \"Up\";\n  direction[\"Down\"] = \"Down\";\n  direction[\"Left\"] = \"Left\";\n  direction[\"Right\"] = \"Right\";\n})(direction || (direction = {}));\n\nvar Swipe =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function Swipe() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  Swipe.prototype.init = function (context, notifyOutputChanged, state, container) {\n    // Add control initialization code\n    this._handleTouchStart = this.handleTouchStart.bind(this);\n    this._handleTouchMove = this.handleTouchMove.bind(this);\n    this._notifyOutputChanged = notifyOutputChanged;\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n    this.detectionPixelDistance = 200;\n    document.addEventListener('touchstart', this._handleTouchStart);\n    document.addEventListener('touchmove', this._handleTouchMove);\n  };\n\n  Swipe.prototype.handleTouchStart = function (event) {\n    var te = event;\n    var firstTouch = te.touches[0];\n    this.xDown = firstTouch.clientX;\n    this.yDown = firstTouch.clientY;\n    this.startX = this.xDown;\n    this.startY = this.yDown;\n  };\n\n  Swipe.prototype.handleTouchMove = function (evt) {\n    if (!this.xDown || !this.yDown) {\n      return;\n    }\n\n    var te = evt;\n    var xUp = te.touches[0].clientX;\n    var yUp = te.touches[0].clientY;\n    var xDiff = this.xDown - xUp;\n    var yDiff = this.yDown - yUp;\n\n    if (Math.abs(xDiff) > Math.abs(yDiff)) {\n      /*most significant*/\n      this.swipeDistance = xDiff;\n\n      if (xDiff > 0) {\n        /* left swipe */\n        this.touchDirection = direction.Left;\n      } else {\n        /* right swipe */\n        this.touchDirection = direction.Right;\n      }\n    } else {\n      this.swipeDistance = yDiff;\n\n      if (yDiff > 0) {\n        /* up swipe */\n        this.touchDirection = direction.Up;\n      } else {\n        /* down swipe */\n        this.touchDirection = direction.Down;\n      }\n    } //this.consoleOut();       \n\n\n    this._notifyOutputChanged();\n    /* reset values */\n\n\n    this.xDown = null;\n    this.yDown = null;\n    this.swipeDistance = null;\n  };\n\n  Swipe.prototype.consoleOut = function () {\n    /*\r\n    console.log(\"Start Coordinates - X : \" + this.startX + \", Y : \" + this.startY);\r\n    console.log(\"Window Size - Width : \" + this.windowWidth + \", Height : \" + this.windowHeight);\r\n      console.log(\"Direction : \" + this.touchDirection);\r\n    console.log(\"Distance : \" + this.swipeDistance);\r\n    */\n    if (this.startY && this.startX) {\n      switch (this.touchDirection) {\n        case direction.Down:\n          if (this.startY < this.detectionPixelDistance) {\n            console.log(\"Started from Top\");\n          }\n\n          break;\n\n        case direction.Up:\n          if (this.startY > this.windowHeight - this.detectionPixelDistance) {\n            console.log(\"Started from Bottom\");\n          }\n\n          break;\n\n        case direction.Right:\n          if (this.startX < this.detectionPixelDistance) {\n            console.log(\"Started from the Left\");\n          }\n\n          break;\n\n        case direction.Left:\n          if (this.startX > this.windowWidth - this.detectionPixelDistance) {\n            console.log(\"Started from the Right\");\n          }\n\n          break;\n\n        default:\n          break;\n      }\n    }\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  Swipe.prototype.updateView = function (context) {\n    // Add code to update control view\t\t\n    this.startFromEdge = context.parameters.startFromEdge.raw;\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  Swipe.prototype.getOutputs = function () {\n    var outDownSwipe = false;\n    var outUpSwipe = false;\n    var outLeftSwipe = false;\n    var outRightSwipe = false;\n    var outWindowHeightDetected = this.windowHeight;\n    var outWindowWidthDetected = this.windowWidth;\n    var outxStartDetected = this.startX;\n    var outyStartDetected = this.startY;\n\n    if (this.startY && this.startX) {\n      if (this.startFromEdge) {\n        switch (this.touchDirection) {\n          case direction.Down:\n            if (this.startY < this.detectionPixelDistance) {\n              outDownSwipe = true;\n            }\n\n            break;\n\n          case direction.Up:\n            if (this.startY > this.windowHeight - this.detectionPixelDistance) {\n              outUpSwipe = true;\n            }\n\n            break;\n\n          case direction.Right:\n            if (this.startX < this.detectionPixelDistance) {\n              outRightSwipe = true;\n            }\n\n            break;\n\n          case direction.Left:\n            if (this.startX > this.windowWidth - this.detectionPixelDistance) {\n              outLeftSwipe = true;\n            }\n\n            break;\n\n          default:\n            break;\n        }\n      } else {\n        switch (this.touchDirection) {\n          case direction.Down:\n            outDownSwipe = true;\n            break;\n\n          case direction.Up:\n            outUpSwipe = true;\n            break;\n\n          case direction.Right:\n            outRightSwipe = true;\n            break;\n\n          case direction.Left:\n            outLeftSwipe = true;\n            break;\n\n          default:\n            break;\n        }\n      }\n    }\n    /*\r\n    console.log(this.windowWidth);\r\n    console.log(\"start x \" + this.startX);\r\n    */\n\n\n    return {\n      downSwipe: outDownSwipe,\n      upSwipe: outUpSwipe,\n      leftSwipe: outLeftSwipe,\n      rightSwipe: outRightSwipe,\n      windowHeightDetected: outWindowHeightDetected,\n      windowWidthDetected: outWindowWidthDetected,\n      xStartDetected: outxStartDetected,\n      yStartDetected: outyStartDetected\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  Swipe.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return Swipe;\n}();\n\nexports.Swipe = Swipe;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Swipe/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('AndrewLy.Swipe', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Swipe);
} else {
	var AndrewLy = AndrewLy || {};
	AndrewLy.Swipe = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Swipe;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}