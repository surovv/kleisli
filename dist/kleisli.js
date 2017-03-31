(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _applicative = __webpack_require__(2);\n\nvar _applicative2 = _interopRequireDefault(_applicative);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Monad = function (_Applicative) {\n  _inherits(Monad, _Applicative);\n\n  function Monad() {\n    _classCallCheck(this, Monad);\n\n    return _possibleConstructorReturn(this, (Monad.__proto__ || Object.getPrototypeOf(Monad)).apply(this, arguments));\n  }\n\n  _createClass(Monad, [{\n    key: 'bind',\n    value: function bind(fn) {\n      throw new Error('bind must be implemented');\n    }\n  }, {\n    key: 'sbind',\n    value: function sbind(fn) {\n      throw new Error('sbind must be implemented');\n    }\n  }, {\n    key: 'compose',\n    value: function compose(fn) {\n      throw new Error('compose must be implemented');\n    }\n  }, {\n    key: 'join',\n    value: function join(val) {\n      throw new Error('join must be implemented');\n    }\n  }, {\n    key: 'fail',\n    value: function fail(str) {\n      throw new Error('fail must be implemented');\n    }\n  }]);\n\n  return Monad;\n}(_applicative2.default);\n\nexports.default = Monad;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/monad.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/monad.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.monadenize = undefined;\n\nvar _fn = __webpack_require__(3);\n\nvar defaultInstanceMethods = function defaultInstanceMethods(val, instanceConstructor) {\n  var ma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : instanceConstructor(val);\n  return {\n    bind: function bind(fn) {\n      return fn(val);\n    },\n    sbind: function sbind(fn) {\n      return fn();\n    },\n    apply: function apply(ffn) {\n      return ffn.fmap(function (fn) {\n        return fn(val);\n      });\n    },\n    join: function join() {\n      return ma.fmap(function (x) {\n        return x;\n      }).constructor.name == val.constructor.name ? val : ma;\n    }\n    //  id\n  };\n};\n\nvar monadInstanceMethods = function monadInstanceMethods(ma) {\n  return {\n    compose: function compose(fns) {\n      return fns.reduce(function (mb, fn) {\n        return mb.bind(fn);\n      }, ma);\n    }\n  };\n};\n\nvar defaultTypeMethods = function defaultTypeMethods(instanceConstructor) {\n  return {\n    unit: function unit(arg) {\n      return instanceConstructor(arg);\n    },\n\n    fmap: function fmap(ma, fn) {\n      return ma.fmap(fn);\n    },\n    bind: function bind(ma, fn) {\n      return ma.bind(fn);\n    },\n    sbind: function sbind(ma, fn) {\n      return ma.sbind(fn);\n    },\n    compose: function compose(ma, fn) {\n      return ma.compose(fn);\n    },\n    lift: function lift(fn) {\n      return function (ma) {\n        for (var _len = arguments.length, mArgs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n          mArgs[_key - 1] = arguments[_key];\n        }\n\n        return mArgs.reduce(function (mCrrdFn, mb) {\n          return mb.apply(mCrrdFn);\n        }, ma.fmap(function (x) {\n          return (0, _fn.curry)(fn)(x);\n        }));\n      };\n    },\n    join: function join(ma, fn) {\n      return ma.join(fn);\n    }\n  };\n};\n\nvar monadenize = exports.monadenize = function monadenize(type, instanceConstructor) {\n  var typeMethods = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  return Object.assign(function (val) {\n    return Object.assign(new type(), defaultInstanceMethods(val, instanceConstructor), instanceConstructor(val), monadInstanceMethods(instanceConstructor(val)));\n  }, Object.assign(defaultTypeMethods(instanceConstructor), typeMethods));\n};\n\nexports.default = monadenize;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/monadenize.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/monadenize.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _functor = __webpack_require__(4);\n\nvar _functor2 = _interopRequireDefault(_functor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Applicative = function (_Functor) {\n  _inherits(Applicative, _Functor);\n\n  function Applicative() {\n    _classCallCheck(this, Applicative);\n\n    return _possibleConstructorReturn(this, (Applicative.__proto__ || Object.getPrototypeOf(Applicative)).apply(this, arguments));\n  }\n\n  _createClass(Applicative, [{\n    key: 'apply',\n    value: function apply(ffn) {\n      throw new Error('apply must be implemented');\n    }\n  }]);\n\n  return Applicative;\n}(_functor2.default);\n\nexports.default = Applicative;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/applicative.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/applicative.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar flip = exports.flip = function flip(fn, args) {\n  return fn([].concat(_toConsumableArray(args)).reverse());\n};\n\nvar compose = exports.compose = function compose(fns) {\n  return fns.reduce(function (f, g) {\n    return function (args) {\n      return f(g.apply(undefined, _toConsumableArray(args)));\n    };\n  });\n};\nvar composeLeft = exports.composeLeft = function composeLeft(fns) {\n  return flip(compose, fns);\n};\n\nvar apply = exports.apply = function apply(fn, args) {\n  return fn.apply(undefined, _toConsumableArray(args));\n};\n\nvar curry = exports.curry = function curry(fn) {\n  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  return args.length === fn.length ? fn.apply(undefined, args) : function () {\n    for (var _len2 = arguments.length, nextArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      nextArgs[_key2] = arguments[_key2];\n    }\n\n    return curry.apply(undefined, [fn].concat(args, nextArgs));\n  };\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/fn.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/fn.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Functor = function () {\n  function Functor() {\n    _classCallCheck(this, Functor);\n  }\n\n  _createClass(Functor, [{\n    key: 'fmap',\n    value: function fmap(fn) {\n      throw new Error('fmap must be implemented');\n    }\n  }]);\n\n  return Functor;\n}();\n\nexports.default = Functor;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/functor.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/functor.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _monad = __webpack_require__(0);\n\nvar _monad2 = _interopRequireDefault(_monad);\n\nvar _monadenize = __webpack_require__(1);\n\nvar _monadenize2 = _interopRequireDefault(_monadenize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar type = function (_Monad) {\n  _inherits(Identity, _Monad);\n\n  function Identity() {\n    _classCallCheck(this, Identity);\n\n    return _possibleConstructorReturn(this, (Identity.__proto__ || Object.getPrototypeOf(Identity)).apply(this, arguments));\n  }\n\n  return Identity;\n}(_monad2.default);\n\nvar instanceConstructor = function instanceConstructor(val) {\n  return {\n    fmap: function fmap(fn) {\n      return Identity(fn(val));\n    },\n    toString: function toString() {\n      return val;\n    }\n  };\n};\n\nvar Identity = (0, _monadenize2.default)(type, instanceConstructor);\n\nexports.default = Identity;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/identity.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/identity.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Nothing = exports.Just = undefined;\n\nvar _monad = __webpack_require__(0);\n\nvar _monad2 = _interopRequireDefault(_monad);\n\nvar _monadenize = __webpack_require__(1);\n\nvar _monadenize2 = _interopRequireDefault(_monadenize);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar maybeType = function (_Monad) {\n  _inherits(Maybe, _Monad);\n\n  function Maybe() {\n    _classCallCheck(this, Maybe);\n\n    return _possibleConstructorReturn(this, (Maybe.__proto__ || Object.getPrototypeOf(Maybe)).apply(this, arguments));\n  }\n\n  return Maybe;\n}(_monad2.default);\nvar maybeTypeConstructor = function maybeTypeConstructor(val) {\n  return val ? Just(val) : Nothing();\n};\n\nvar Maybe = (0, _monadenize2.default)(maybeType, maybeTypeConstructor);\nexports.default = Maybe;\n\n\nvar justType = function (_maybeType) {\n  _inherits(Just, _maybeType);\n\n  function Just() {\n    _classCallCheck(this, Just);\n\n    return _possibleConstructorReturn(this, (Just.__proto__ || Object.getPrototypeOf(Just)).apply(this, arguments));\n  }\n\n  return Just;\n}(maybeType);\nvar justConstructor = function justConstructor(val) {\n  return {\n    fmap: function fmap(fn) {\n      return Maybe(fn(val));\n    },\n    toString: function toString() {\n      return 'Just ' + val;\n    }\n  };\n};\n\nvar Just = exports.Just = (0, _monadenize2.default)(justType, justConstructor);\n\nvar nothingType = function (_maybeType2) {\n  _inherits(Nothing, _maybeType2);\n\n  function Nothing() {\n    _classCallCheck(this, Nothing);\n\n    return _possibleConstructorReturn(this, (Nothing.__proto__ || Object.getPrototypeOf(Nothing)).apply(this, arguments));\n  }\n\n  return Nothing;\n}(maybeType);\nvar nothingConstructor = function nothingConstructor(_) {\n  return {\n    toString: function toString() {\n      return 'Nothing';\n    },\n    fmap: function fmap(_) {\n      return Nothing();\n    }\n  };\n};\n\nvar Nothing = exports.Nothing = (0, _monadenize2.default)(nothingType, nothingConstructor);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/lib/maybe.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/lib/maybe.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Nothing = exports.Just = exports.Maybe = exports.Identity = exports.Monad = exports.Applicative = exports.Functor = exports.monadenize = exports.F = undefined;\n\nvar _maybe = __webpack_require__(6);\n\nObject.defineProperty(exports, 'Just', {\n  enumerable: true,\n  get: function get() {\n    return _maybe.Just;\n  }\n});\nObject.defineProperty(exports, 'Nothing', {\n  enumerable: true,\n  get: function get() {\n    return _maybe.Nothing;\n  }\n});\n\nvar _fn = __webpack_require__(3);\n\nvar _F = _interopRequireWildcard(_fn);\n\nvar _monadenize2 = __webpack_require__(1);\n\nvar _monadenize3 = _interopRequireDefault(_monadenize2);\n\nvar _functor = __webpack_require__(4);\n\nvar _functor2 = _interopRequireDefault(_functor);\n\nvar _applicative = __webpack_require__(2);\n\nvar _applicative2 = _interopRequireDefault(_applicative);\n\nvar _monad = __webpack_require__(0);\n\nvar _monad2 = _interopRequireDefault(_monad);\n\nvar _identity = __webpack_require__(5);\n\nvar _identity2 = _interopRequireDefault(_identity);\n\nvar _maybe2 = _interopRequireDefault(_maybe);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.F = _F;\nexports.monadenize = _monadenize3.default;\nexports.Functor = _functor2.default;\nexports.Applicative = _applicative2.default;\nexports.Monad = _monad2.default;\nexports.Identity = _identity2.default;\nexports.Maybe = _maybe2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })
/******/ ]);
});