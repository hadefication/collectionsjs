(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Collection"] = factory();
	else
		root["Collection"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Collection = function () {\n    function Collection() {\n        var items = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];\n\n        _classCallCheck(this, Collection);\n\n        this.items = items;\n    }\n\n    _createClass(Collection, [{\n        key: 'add',\n        value: function add(item) {\n            this.items.push(item);\n        }\n    }, {\n        key: 'all',\n        value: function all() {\n            return this.getItems();\n        }\n    }, {\n        key: 'average',\n        value: function average() {\n            var property = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            return this.sum(property) / this.count();\n        }\n    }, {\n        key: 'concat',\n        value: function concat(collection) {\n            if (Array.isArray(collection)) {\n                return new Collection(this.items.concat(collection));\n            }\n\n            return new Collection(this.items.concat(collection.all()));\n        }\n    }, {\n        key: 'count',\n        value: function count() {\n            return this.items.length;\n        }\n    }, {\n        key: 'each',\n        value: function each(callback) {\n            this.items.forEach(callback);\n        }\n    }, {\n        key: 'filter',\n        value: function filter(callback) {\n            return new Collection(this.items.filter(callback));\n        }\n    }, {\n        key: 'find',\n        value: function find(index) {\n            return this.items[index];\n        }\n    }, {\n        key: 'first',\n        value: function first() {\n            var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            if (!this.items.length) {\n                return null;\n            }\n\n            if (callback && typeof callback === 'function') {\n                return this.filter(callback).first();\n            }\n\n            return this.items[0];\n        }\n    }, {\n        key: 'flatten',\n        value: function flatten() {\n            var _ref;\n\n            var deep = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];\n\n            var flattened = new Collection((_ref = []).concat.apply(_ref, _toConsumableArray(this.items)));\n\n            if (deep && flattened.all().some(Array.isArray)) {\n                return flattened.flatten(true);\n            }\n\n            return flattened;\n        }\n    }, {\n        key: 'getItems',\n        value: function getItems() {\n            return this.items;\n        }\n    }, {\n        key: 'keys',\n        value: function keys() {\n            var keys = [];\n\n            if (_typeof(this.items) === 'object') {\n                keys = Object.keys(this.items);\n            } else {\n                keys = [].concat(_toConsumableArray(this.items.keys()));\n            }\n\n            return new Collection(keys);\n        }\n    }, {\n        key: 'last',\n        value: function last() {\n            var callback = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];\n\n            if (!this.items.length) {\n                return null;\n            }\n\n            if (callback && typeof callback === 'function') {\n                return this.filter(callback).last();\n            }\n\n            return this.items[this.items.length - 1];\n        }\n    }, {\n        key: 'map',\n        value: function map(callback) {\n            return new Collection(this.items.map(callback));\n        }\n    }, {\n        key: 'pluck',\n        value: function pluck(property) {\n            return this.map(function (item) {\n                return item[property];\n            });\n        }\n    }, {\n        key: 'push',\n        value: function push(item) {\n            this.add(item);\n        }\n    }, {\n        key: 'reduce',\n        value: function reduce(callback, initial) {\n            return this.items.reduce(callback, initial);\n        }\n    }, {\n        key: 'reject',\n        value: function reject(callback) {\n            var items = [];\n            this.items.forEach(function (item) {\n                if (!callback(item)) {\n                    items.push(item);\n                }\n            });\n\n            return new Collection(items);\n        }\n    }, {\n        key: 'reverse',\n        value: function reverse() {\n            return new Collection(this.items.reverse());\n        }\n    }, {\n        key: 'sum',\n        value: function sum() {\n            var property = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];\n\n            if (typeof property === 'string') {\n                return this.reduce(function (previous, current) {\n                    return previous + current[property];\n                }, 0);\n            }\n\n            if (typeof property === 'function') {\n                return this.reduce(function (previous, current) {\n                    return previous + property(current);\n                }, 0);\n            }\n\n            return this.reduce(function (previous, current) {\n                return previous + current;\n            }, 0);\n        }\n    }, {\n        key: 'take',\n        value: function take(count) {\n            if (!count) {\n                return new Collection([]);\n            }\n\n            if (count < 0) {\n                return new Collection(this.items.reverse()).take(-count);\n            }\n\n            return new Collection(this.items.slice(0, count));\n        }\n    }, {\n        key: 'toJson',\n        value: function toJson() {\n            return JSON.stringify(this.items);\n        }\n    }, {\n        key: 'where',\n        value: function where(callback) {\n            var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];\n\n            if (typeof callback === 'string') {\n                return this.filter(function (item) {\n                    return item[callback] === value;\n                });\n            }\n\n            return this.filter(callback);\n        }\n    }, {\n        key: 'zip',\n        value: function zip(array) {\n            return this.map(function (item, index) {\n                return [item, array[index]];\n            });\n        }\n    }]);\n\n    return Collection;\n}();\n\nexports.default = Collection;\nmodule.exports = exports['default'];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/collection.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/collection.js?");

/***/ }
/******/ ])
});
;