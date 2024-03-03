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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/ProgressBar/index.js":
/*!**********************************!*\
  !*** ./src/ProgressBar/index.js ***!
  \**********************************/
/*! exports provided: ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
class ProgressBar {
  constructor(container, maxSections) {
    this.container = container;
    this.maxSections = maxSections;
    this.elem = document.createElement('div');
    this.elem.className = 'progressElemBG';
    this.mainWidth = container.getBoundingClientRect().width;
    this.elem.style.width = `${this.mainWidth}px`;
    this.container.appendChild(this.elem);
    for (let i = 0; i < maxSections; i++) {
      let innerElem = document.createElement('div');
      innerElem.className = 'progressElem';
      innerElem.setAttribute('sectionNumber', i);
      this.elem.appendChild(innerElem);
    }
  }
  setSection(sectionNumber) {
    this.mainWidth = this.container.getBoundingClientRect().width;
    this.elem.style.width = `${this.mainWidth}px`;
    let width = (this.mainWidth - this.maxSections * 5) / this.maxSections;
    let allElems = this.elem.querySelectorAll('.progressElem');
    allElems.forEach(elem => {
      let elemSectionNumber = elem.getAttribute('sectionNumber');
      if (elemSectionNumber < sectionNumber) {
        elem.style.width = `${width}px`;
        elem.classList.remove('progressElemLast');
      } else if (elemSectionNumber == sectionNumber) {
        elem.style.width = `${width}px`;
        elem.classList.add('progressElemLast');
      } else {
        elem.style.width = `0px`;
        elem.classList.remove('progressElemLast');
      }
    });
  }
  hide() {
    this.elem.style.display = 'none';
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/IQuestion.js":
/*!*********************************************!*\
  !*** ./src/Question/IQuestion/IQuestion.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IQuestion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils/uid */ "./src/_utils/uid.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");



class IQuestion {
  constructor(questionData, parentElem, checkCallback) {
    var _this = this;
    let testMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hide", () => {
      this.mainElement.style.display = "none";
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "check", function () {
      let shouldCallBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      const answer = _this.getAnswer();
      const result = _this.certainCheck(answer);
      if (!_this.checkInitialized) {
        _this.checkInitialized = true;
        _this.firstTimeCorrect = result;
        _this.hintButton.style.display = 'block';
      }
      _this.resultCorrect = result;
      _this.renderResult(result);
      if (shouldCallBack) {
        _this.checkCallback(result);
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderResult", isCorrect => {
      if (isCorrect) {
        this.mainElement.classList.remove('incorrect');
        this.mainElement.classList.add('correct');
      } else {
        this.mainElement.classList.remove('correct');
        this.mainElement.classList.add('incorrect');
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "showHints", () => {
      if (this.testMode) {
        return false;
      }
      if (!this.errorsContainer) {
        const {
          rightAnswers
        } = this.questionData;
        const html = Object(_templates__WEBPACK_IMPORTED_MODULE_2__["validateErrorText"])(rightAnswers);
        this.hintContainer.insertAdjacentHTML('beforeend', html);
        this.errorsContainer = this.hintContainer.querySelector('.hints-answers-container');
      }
      this.hintContainer.style.display = 'block';
      this.hintContainer.addEventListener('click', this.closeHints);
      setTimeout(() => {
        this.closeHints();
      }, 2500);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "closeHints", () => {
      this.hintContainer.style.display = 'none';
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "baseAddListeners", () => {
      if (this.testMode) {
        return;
      }
      const inputs = this.mainElement.querySelectorAll('input');
      if (inputs.length === 1) {
        this.mainElement.querySelector('input').addEventListener('keydown', e => {
          if (e.code === "Enter") {
            this.check();
          }
        });
      }
      this.mainElement.querySelector('.check-sign').addEventListener('click', this.check);
      this.hintButton.addEventListener('click', this.showHints);
    });
    this.questionData = questionData;
    this.parentElem = parentElem;
    this.id = Object(_utils_uid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.resultCorrect = false;
    this.checkInitialized = false;
    this.firstTimeCorrect = false;
    this.input = null;
    this.checkCallback = checkCallback;
    this.testMode = testMode;
  }
  renderQuestion() {
    const html = this.questionTemplate(this.questionData, this.id);
    this.parentElem.insertAdjacentHTML('beforeend', html);
    const mainElement = this.parentElem.querySelector(`#${this.id}`);
    this.mainElement = mainElement;
    this.input = this.mainElement.querySelector('input');
    this.hintButton = this.mainElement.querySelector('.hint-sign');
    this.hintButton.style.display = 'none';
    this.hintContainer = this.mainElement.querySelector('.hint-container');
    this.checkSignContainer = this.mainElement.querySelector('.check-sign');
    console.log('testMode', this.testMode);
    if (this.testMode) {
      this.hintButton.style.display = 'none';
      this.checkSignContainer.style.display = 'none';
    }
    this.baseAddListeners();
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/MultiVariants.js":
/*!*************************************************!*\
  !*** ./src/Question/IQuestion/MultiVariants.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiVariantsQuestion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");
/* harmony import */ var _checkStringValid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../checkStringValid */ "./src/Question/checkStringValid.js");
/* harmony import */ var _IQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IQuestion */ "./src/Question/IQuestion/IQuestion.js");





class MultiVariantsQuestion extends _IQuestion__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super(...arguments);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionTemplate", function () {
      return Object(_templates__WEBPACK_IMPORTED_MODULE_2__["questionTemplate"])(...arguments);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeListener", e => {
      if (!this.inputs.includes(e.target)) {
        this.check();
        window.document.removeEventListener('change', this.changeListener);
        window.document.removeEventListener('focusin', this.changeListener);
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "addCertainListeners", () => {
      this.inputs.forEach(input => {
        input.addEventListener('change', e => {
          window.document.addEventListener('change', this.changeListener);
          window.document.addEventListener('focusin', this.changeListener);
        });
      });
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hide", () => {
      super.hide();
      window.document.removeEventListener('change', this.changeListener);
      window.document.removeEventListener('focusin', this.changeListener);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "certainCheck", userAnswers => {
      const {
        rightAnswers
      } = this.questionData;
      return Object(_checkStringValid__WEBPACK_IMPORTED_MODULE_3__["checkMulti"])(userAnswers, rightAnswers);
    });
  }
  getAnswer() {
    const selected = Array.from(this.mainElement.querySelectorAll(`input[name="${this.questionData.questionText}"]:checked`));
    if (selected.length) {
      return selected.map(elem => elem.value);
    }
    return [];
  }
  renderQuestion() {
    super.renderQuestion();
    this.inputs = Array.from(this.mainElement.querySelectorAll('input'));
    this.addCertainListeners();
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/MultipleTextInBlank.js":
/*!*******************************************************!*\
  !*** ./src/Question/IQuestion/MultipleTextInBlank.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultipleTextInBlankQuestions; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");
/* harmony import */ var _checkStringValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkStringValid */ "./src/Question/checkStringValid.js");
/* harmony import */ var _IQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IQuestion */ "./src/Question/IQuestion/IQuestion.js");




class MultipleTextInBlankQuestions extends _IQuestion__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionTemplate", function () {
      return Object(_templates__WEBPACK_IMPORTED_MODULE_1__["questionTemplate"])(...arguments);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "certainCheck", userAnswer => {
      const {
        rightAnswers,
        questionText
      } = this.questionData;
      const {
        correct,
        correctIndexes
      } = Object(_checkStringValid__WEBPACK_IMPORTED_MODULE_2__["validateMultiBlanks"])(userAnswer, rightAnswers, questionText);
      this.correctIndexes = correctIndexes;
      return correct;
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderResult", isCorrect => {
      for (let i = 0; i < this.inputs.length; i++) {
        if (this.correctIndexes.includes(i)) {
          this.inputs[i].classList.remove('incorrect');
          this.inputs[i].classList.add('correct');
        } else {
          this.inputs[i].classList.remove('correct');
          this.inputs[i].classList.add('incorrect');
        }
      }
      if (isCorrect) {
        this.mainElement.classList.remove('incorrect');
        this.mainElement.classList.add('correct');
      } else {
        this.mainElement.classList.remove('correct');
        this.mainElement.classList.add('incorrect');
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeListener", e => {
      if (!this.inputs.includes(e.target)) {
        this.check();
        window.document.removeEventListener('change', this.changeListener);
        window.document.removeEventListener('focusin', this.changeListener);
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "addCertainListeners", () => {
      this.inputs.forEach(input => {
        input.addEventListener('change', e => {
          window.document.addEventListener('change', this.changeListener);
          window.document.addEventListener('focusin', this.changeListener);
        });
      });
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hide", () => {
      super.hide();
      window.document.removeEventListener('change', this.changeListener);
      window.document.removeEventListener('focusin', this.changeListener);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeHandler", el => {
      const userValue = el.target.value;
      this.userValue = userValue;
      this.check(userValue);
    });
  }
  getAnswer() {
    return this.inputs.map(input => input.value);
  }
  renderQuestion() {
    super.renderQuestion();
    this.inputs = Array.from(this.mainElement.querySelectorAll('input'));
    this.addCertainListeners();
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/SimpleText.js":
/*!**********************************************!*\
  !*** ./src/Question/IQuestion/SimpleText.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleTextQuestion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");
/* harmony import */ var _checkStringValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkStringValid */ "./src/Question/checkStringValid.js");
/* harmony import */ var _IQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IQuestion */ "./src/Question/IQuestion/IQuestion.js");




class SimpleTextQuestion extends _IQuestion__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    // constructor(questionData, parentElem){
    //   super()
    // }
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionTemplate", function () {
      return Object(_templates__WEBPACK_IMPORTED_MODULE_1__["questionTemplate"])(...arguments);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "certainCheck", userAnswer => {
      const {
        rightAnswers
      } = this.questionData;
      return Object(_checkStringValid__WEBPACK_IMPORTED_MODULE_2__["validateSimpleText"])(userAnswer, rightAnswers);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeHandler", el => {
      const userValue = el.target.value;
      this.userValue = userValue;
      this.check(userValue);
    });
  }
  getAnswer() {
    return this.input.value;
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/SingleVariants.js":
/*!**************************************************!*\
  !*** ./src/Question/IQuestion/SingleVariants.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleVariantQuestion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");
/* harmony import */ var _checkStringValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkStringValid */ "./src/Question/checkStringValid.js");
/* harmony import */ var _IQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IQuestion */ "./src/Question/IQuestion/IQuestion.js");




class SingleVariantQuestion extends _IQuestion__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionTemplate", function () {
      return Object(_templates__WEBPACK_IMPORTED_MODULE_1__["questionTemplate"])(...arguments);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeListener", e => {
      if (this.testMode) {
        return;
      }
      if (!this.inputs.includes(e.target)) {
        this.check();
        window.document.removeEventListener('change', this.changeListener);
        window.document.removeEventListener('focusin', this.changeListener);
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "addCertainListeners", () => {
      this.inputs.forEach(input => {
        input.addEventListener('change', e => {
          window.document.addEventListener('change', this.changeListener);
          window.document.addEventListener('focusin', this.changeListener);
        });
      });
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hide", () => {
      super.hide();
      window.document.removeEventListener('change', this.changeListener);
      window.document.removeEventListener('focusin', this.changeListener);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "certainCheck", userAnswer => {
      const {
        rightAnswers
      } = this.questionData;
      return Object(_checkStringValid__WEBPACK_IMPORTED_MODULE_2__["compareTwo"])(userAnswer, rightAnswers[0]);
    });
  }
  getAnswer() {
    const selected = this.mainElement.querySelector(`input[name="${this.questionData.questionText}"]:checked`);
    if (selected) {
      return selected.value;
    }
    return undefined;
  }
  renderQuestion() {
    super.renderQuestion();
    this.inputs = Array.from(this.mainElement.querySelectorAll('input'));
    this.addCertainListeners();
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/TextInBlank.js":
/*!***********************************************!*\
  !*** ./src/Question/IQuestion/TextInBlank.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextInBlankQuestion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");
/* harmony import */ var _checkStringValid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkStringValid */ "./src/Question/checkStringValid.js");
/* harmony import */ var _IQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IQuestion */ "./src/Question/IQuestion/IQuestion.js");




class TextInBlankQuestion extends _IQuestion__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionTemplate", function () {
      return Object(_templates__WEBPACK_IMPORTED_MODULE_1__["questionTemplate"])(...arguments);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "certainCheck", userAnswer => {
      const {
        rightAnswers,
        questionText
      } = this.questionData;
      return Object(_checkStringValid__WEBPACK_IMPORTED_MODULE_2__["validateTextInBlank"])(userAnswer, rightAnswers, questionText);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeHandler", el => {
      const userValue = el.target.value;
      this.userValue = userValue;
      this.check(userValue);
    });
  }
  getAnswer() {
    return this.input.value;
  }
}

/***/ }),

/***/ "./src/Question/IQuestion/index.js":
/*!*****************************************!*\
  !*** ./src/Question/IQuestion/index.js ***!
  \*****************************************/
/*! exports provided: TextBeforeQuestion, createQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBeforeQuestion", function() { return TextBeforeQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuestion", function() { return createQuestion; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SimpleText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimpleText */ "./src/Question/IQuestion/SimpleText.js");
/* harmony import */ var _TextInBlank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextInBlank */ "./src/Question/IQuestion/TextInBlank.js");
/* harmony import */ var _MultipleTextInBlank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MultipleTextInBlank */ "./src/Question/IQuestion/MultipleTextInBlank.js");
/* harmony import */ var _SingleVariants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleVariants */ "./src/Question/IQuestion/SingleVariants.js");
/* harmony import */ var _MultiVariants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MultiVariants */ "./src/Question/IQuestion/MultiVariants.js");
/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_utils/uid */ "./src/_utils/uid.js");







class TextBeforeQuestion {
  constructor(text, parentElem) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "hide", () => {
      this.mainElement.style.display = "none";
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "check", () => {});
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderQuestion", () => {
      const splitRegExp = new RegExp(/(Mission [0-9.]+) /);
      let splittedText = this.text.split(splitRegExp);
      if (splittedText.length !== 3) {
        splittedText = this.text;
      } else {
        splittedText = `${splittedText[0]}${splittedText[1]} </br> <span class="text-question-italic">${splittedText[2]}</span>`;
      }
      const sectionHeaderText = `<div class="question section-header" id="${this.uid}">${splittedText}</div>`;
      this.parentElem.insertAdjacentHTML('beforeend', sectionHeaderText);
      this.mainElement = this.parentElem.querySelector(`#${this.uid}`);
    });
    this.text = text;
    this.parentElem = parentElem;
    this.resultCorrect = true;
    this.firstTimeCorrect = true;
    this.uid = Object(_utils_uid__WEBPACK_IMPORTED_MODULE_6__["default"])();
  }
}
const createTextInBlank = (questionData, parentElem, callback) => {
  if (questionData.questionText.match(/_+/g).length > 1) {
    return new _MultipleTextInBlank__WEBPACK_IMPORTED_MODULE_3__["default"](questionData, parentElem, callback);
  } else {
    return new _TextInBlank__WEBPACK_IMPORTED_MODULE_2__["default"](questionData, parentElem, callback);
  }
};
const createQuestion = function (questionData, parentElem, callback) {
  let testMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (testMode && questionData.questionType !== 'variants-single') {
    throw new Error(`test mode is enabled, but question' type is ${questionData.questionType}`);
  }
  switch (questionData.questionType) {
    case 'simple-text':
      return new _SimpleText__WEBPACK_IMPORTED_MODULE_1__["default"](questionData, parentElem, callback);
    case 'text-in-blank':
      return createTextInBlank(questionData, parentElem, callback);
    case 'variants-multi':
      return new _MultiVariants__WEBPACK_IMPORTED_MODULE_5__["default"](questionData, parentElem, callback);
    case 'variants-single':
      let quesVariants;
      if (questionData['variants\r']) {
        quesVariants = questionData['variants\r'];
      } else if (questionData['variants']) {
        quesVariants = questionData['variants'];
      }
      if (typeof quesVariants === 'string') {
        questionData.variants = quesVariants.split('||');
      }
      return new _SingleVariants__WEBPACK_IMPORTED_MODULE_4__["default"](questionData, parentElem, callback, testMode);
    //return new TextInBlankQuestion(questionData, parentElem, callback);
  }
};

/***/ }),

/***/ "./src/Question/checkStringValid.js":
/*!******************************************!*\
  !*** ./src/Question/checkStringValid.js ***!
  \******************************************/
/*! exports provided: compareTwo, validateSimpleText, checkMulti, validateTextInBlank, validateMultiBlanks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTwo", function() { return compareTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSimpleText", function() { return validateSimpleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMulti", function() { return checkMulti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTextInBlank", function() { return validateTextInBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateMultiBlanks", function() { return validateMultiBlanks; });
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_0__);

const excludeData = ["maria're", 'maria"re', 'maria`re'];
const ShorteningDictionary = {
  'can not': `can't`,
  'cannot': `can't`,
  'will not': `won't`,
  ' is': `'s`,
  '\'s': `'s`,
  ' have': `'ve`,
  ' has': `'s`,
  ' would': `'d`,
  ' had': `'d`,
  ' are': `'re`,
  ' will': `'ll`,
  ' am': `'m`,
  'is not': `isn't`,
  'are not': `aren't`,
  'was not': `wasn't`,
  'were not': `weren't`,
  'has not': `hasn't`,
  'have not': `haven't`,
  'had not': `hadn't`,
  'does not': `doesn't`,
  'do not': `don't`,
  'did not': `didn't`,
  'could not': `couldn't`,
  'would not': `wouldn't`,
  'must not': `mustn't`,
  'need not': `needn't`,
  'should not': `shouldn't`,
  'might not': `mightn't`,
  'dare not': `daren't`
};
var findShorteningRegExp = new RegExp(/\w+(?='\w+)/g);
const compareTwo = (userAnswer, rightAnswer) => {
  if (!userAnswer) {
    userAnswer = '';
  }
  let workedUserAnswer = prepareString(userAnswer);
  let workedRightAnswer = prepareString(rightAnswer);
  return workedUserAnswer === workedRightAnswer;
};

// make trim, remove dot on the end, lowercase, ...etc
const prepareString = answer => {
  return answer.toLowerCase().replace(/\.$/, '').replace(/ +/g, ' ').replace(/ $/, '').replace(/^ /, '').replace(/\.$/, '').replace(/\n$/, '').replace(/\?/g, '').replace(/\,/g, '');
};
const validateSimpleText = (userAnswer, rightAnswers) => {
  let removePossibilities = false;
  if (excludeData.some(exclude => prepareString(userAnswer).includes(prepareString(exclude)))) {
    removePossibilities = true;
  }
  let userAnswersPossibilities;
  if (!removePossibilities) {
    userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
    console.log('userAnswer', userAnswersPossibilities);
  } else {
    userAnswersPossibilities = [userAnswer];
  }
  // console.log('validate simple', userAnswer, rightAnswers);
  // const userAnswersPossibilities = [userAnswer, prepareString(userAnswer), ...findShorteningsPossibilities(userAnswer)];
  // console.log('possi', userAnswersPossibilities);
  return compareEachToEach([...userAnswersPossibilities, userAnswer], rightAnswers);
};
const checkMulti = (userAnswers, rightAnswers) => {
  let workedUserAnswers = userAnswers.sort().map(answer => prepareString(answer));
  let workedRightAnswer = rightAnswers.sort().map(answer => prepareString(answer));
  return lodash_isequal__WEBPACK_IMPORTED_MODULE_0___default()(workedUserAnswers, workedRightAnswer);
};
const findMaxPrevious = (obj, currentKey) => {
  let max = -1;
  for (let key in obj) {
    if (Number(key) > Number(max) && obj[key].length > 0 && key != currentKey) {
      max = key;
    }
  }
  if (max === -1) {
    return null;
  }
  return max;
};
let findShorteningsPossibilities = userAnswer => {
  userAnswer = prepareString(userAnswer);
  let textVariants = {};
  const shortSybmols = ['’', '\'', '`', '"'];
  for (let i = 0; i < shortSybmols.length; i++) {
    let reg = new RegExp(shortSybmols[i], 'g');
    userAnswer = userAnswer.replace(reg, '\'');
  }
  const words = userAnswer.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(findShorteningRegExp)) {
      for (let key in ShorteningDictionary) {
        if (words[i].includes(ShorteningDictionary[key])) {
          var indexToPushInMain = i;
          if (!textVariants[indexToPushInMain]) {
            textVariants[indexToPushInMain] = [];
          }
          if (findMaxPrevious(textVariants, i)) {
            textVariants[findMaxPrevious(textVariants, i)].forEach(previousVariant => {
              let newVariant = [...previousVariant];
              newVariant[i] = previousVariant[i].replace(ShorteningDictionary[key], key);
              textVariants[indexToPushInMain].push(newVariant);
            });
          } else {
            let newVariant = [...words];
            newVariant[i] = words[i].replace(ShorteningDictionary[key], key);
            textVariants[indexToPushInMain].push(newVariant);
          }
        }
      }
    }
  }
  console.log('fdsfsd', textVariants, findMaxPrevious(textVariants, 999));
  // for one shortening.
  if (findMaxPrevious(textVariants, 999)) {
    return textVariants[findMaxPrevious(textVariants, 999)].map(variant => variant.join(' '));
  } else {
    return [userAnswer];
  }
};
const validateTextInBlank = (userAnswer, rightAnswers, questionText) => {
  rightAnswers = [...rightAnswers, ...rightAnswers.map(rightAnswer => questionText.replace(/_+/g, rightAnswer))];
  let removePossibilities = false;
  console.log('ex', excludeData, userAnswer, prepareString(userAnswer));
  if (excludeData.some(exclude => prepareString(userAnswer).includes(prepareString(exclude)))) {
    removePossibilities = true;
  }
  let userAnswersPossibilities;
  if (!removePossibilities) {
    userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
  } else {
    userAnswersPossibilities = [];
  }
  // const userAnswersPossibilities = findShorteningsPossibilities(userAnswer);
  return compareEachToEach([...userAnswersPossibilities, userAnswer, prepareString(userAnswer)], rightAnswers);
};
const validateMultiBlanks = (userAnswers, rightAnswers) => {
  console.log('user', userAnswers, rightAnswers);
  let validIndexes = [];
  let isAllValid = false;
  if (userAnswers.length > rightAnswers.length) {
    return {
      correct: true,
      correctIndexes: -1
    };
  }
  if (rightAnswers.length % userAnswers.length > 0) {
    return {
      correct: true,
      correctIndexes: -1
    };
  }
  ;
  let globalVA = {
    isOneTimeValid: false,
    validIndexes: []
  };
  for (let i = 0; i < rightAnswers.length; i += userAnswers.length) {
    validIndexes = [];
    for (let j = 0; j < userAnswers.length; j++) {
      if (validateSimpleText(userAnswers[j], [rightAnswers[j + i]])) {
        validIndexes.push(j);
      }
    }
    if (validIndexes.length === userAnswers.length) {
      globalVA.isOneTimeValid = true;
      globalVA.validIndexes = validIndexes;
      break;
    } else {
      globalVA.validIndexes.push(...validIndexes);
    }
  }
  console.log('globalVa', globalVA);
  if (globalVA.isOneTimeValid) {
    return {
      correct: true,
      correctIndexes: validIndexes
    };
  } else {
    const uniq = globalVA.validIndexes.filter((v, i, a) => a.indexOf(v) === i);
    if (uniq.length === userAnswers.length) {
      let uniqueUserAnswers = userAnswers.map(answer => prepareString(answer)).filter((v, i, a) => a.indexOf(v) === i);
      if (uniqueUserAnswers.length === userAnswers.length) {
        return {
          correct: true,
          correctIndexes: validIndexes
        };
      } else {
        return {
          correct: false,
          correctIndexes: []
        };
      }
    } else {
      return {
        correct: false,
        correctIndexes: uniq
      };
    }
  }

  // for(let i = 0; i<userAnswers.length; i++){
  //   if(validateSimpleText(userAnswers[i], [rightAnswers[i]])){
  //     validIndexes.push(i);
  //   }
  // }

  if (validIndexes.length === userAnswers.length) {
    isAllValid = true;
  }
  return {
    correct: isAllValid,
    correctIndexes: validIndexes
  };
};
const compareEachToEach = (userAnswers, rightAnswers) => {
  for (let i = 0; i < userAnswers.length; i++) {
    for (let j = 0; j < rightAnswers.length; j++) {
      if (compareTwo(userAnswers[i], rightAnswers[j])) {
        return true;
      }
    }
  }
  return false;
};
// findShorteningsPossibilities('I`d been mad i"d I`d')

/***/ }),

/***/ "./src/Question/templates.js":
/*!***********************************!*\
  !*** ./src/Question/templates.js ***!
  \***********************************/
/*! exports provided: validateErrorText, questionTemplate, answerTemplateInBlank, answerTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateErrorText", function() { return validateErrorText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionTemplate", function() { return questionTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerTemplateInBlank", function() { return answerTemplateInBlank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerTemplate", function() { return answerTemplate; });
const validateErrorText = rightAnswers => {
  return `
    <div class="hints-answers-container">
      ${rightAnswers.map(answer => `<div class="hint">${answer}</div>`).join(' ')}
    </div>
  `;
  // return `right answer are ${rightAnswers.join(', ')}`;
};
const calculateWidth = answers => {
  let maxLength = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].length > maxLength) {
      maxLength = answers[i].length;
    }
  }
  if (maxLength < 7) {
    return 60;
  }
  if (maxLength < 10) {
    return 90;
  }
  if (maxLength < 18) {
    return 150;
  }
  if (maxLength < 25) {
    return 200;
  }
  return 210;
};
const questionTemplate = (questionData, id) => {
  if (questionData.questionType === 'text-in-blank') {
    const splitted = questionData.questionText.split(/_+/);
    const width = calculateWidth(questionData.rightAnswers);
    return `
    <div class = "question in-blank" id="${id}">
      <div class="question-text">${splitted.join(`${answerTemplateInBlank(answerTemplateInBlank, width)}`)}</div>
      <div class="check-sign"><i class="fas fa-sign-in-alt"></i></div>
      <div class="hint-sign"><i class="far fa-question-circle"></i></div>
      <div class="hint-container"></div>
    </div>
  `;
  } else {
    return `
    <div class = "question" id="${id}">
      <div class="question-text">${questionData.questionText}</div>
      <div class="answer">
        ${answerTemplate(questionData)}
      </div>
      <div class="check-sign"><i class="fas fa-sign-in-alt"></i></div>
      <div class="hint-sign"><i class="far fa-question-circle"></i></div>
      <div class="hint-container"></div>
    </div>
  `;
  }
};
const answerTemplateInBlank = (questionData, width) => {
  return `
  <div style="width:${width}px;" class = "answer-text in-blank">
    <input class = "answer-text-input in-blank" />
  </div>
`;
};
const answerTemplate = questionData => {
  if (questionData.questionType === 'simple-text' || questionData.questionType === 'text-in-blank') {
    return `
      <div class = "answer-text">
        <input class = "answer-text-input " />
      </div>
    `;
  }
  if (questionData.questionType === 'variants-single') {
    return `
      <form>
        <div>
          ${questionData.variants.map((value, index) => `
          <div class="checkbox-container">
            <input type="radio" id="${questionData.questionText}-${index}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}">${value}</label>
            </div>
          `).join(' ')}
        </div>
      </form>
    `;
  }
  if (questionData.questionType === 'variants-multi') {
    return `
      <form>
        <div>
          ${questionData.variants.map((value, index) => `
            <input type="checkbox" id="${questionData.questionText}-${index}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}">${value}</label>
          `).join(' ')}
        </div>
      </form>
    `;
  }
};

/***/ }),

/***/ "./src/QuizController.js":
/*!*******************************!*\
  !*** ./src/QuizController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Section */ "./src/Section/index.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ "./src/ProgressBar/index.js");



class QuizController {
  constructor() {
    let sections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let parentElement = arguments.length > 1 ? arguments[1] : undefined;
    let testMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questions", []);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "convertedQuestions", []);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "oldQuestions", []);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "initSection", sectionNumber => {
      this.currentSection = sectionNumber;
      this.convertedSections[sectionNumber].renderSection();
      this.numberTextContainer.innerText = `Section ${sectionNumber + 1} of ${this.convertedSections.length}`;
      this.progressBar.setSection(sectionNumber);
      setTimeout(() => {
        if (this.parentElement.getBoundingClientRect().top) {
          window.scrollTo({
            top: this.parentElement.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 20);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeSection", sectionNumber => {
      this.sectionNumber = sectionNumber;
      if (sectionNumber < 0) {
        return;
      }
      if (sectionNumber > 0) {
        this.prevButton.style.display = 'block';
      } else {
        this.prevButton.style.display = 'none';
      }
      if (sectionNumber > this.currentSection) {
        if (this.maxSectionNumber === sectionNumber) {
          this.isLastSection = true;
        } else if (this.sectionNumber > this.maxSectionNumber) {
          this.nextButton.style.display = 'none';
          return;
        }
      }
      if (this.currentSection !== undefined && this.currentSection !== null) {
        this.convertedSections[this.currentSection].hideSection();
      }
      if (!this.convertedSections[sectionNumber].completed) {
        this.nextButton.style.display = 'none';
      } else {
        if (!(sectionNumber >= this.maxSectionNumber)) {
          this.nextButton.style.display = 'block';
        } else {
          this.nextButton.style.display = 'none';
        }
      }
      this.initSection(sectionNumber);
      if (this.testMode) {
        this.renderNextSectionButton();
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderMainControls", () => {
      const html = `
    <div class = "questions-list"> </div>
    <div class="progressBarContainer"></div>
    <div id="number-container"></div>
    <div class="button-container">
      <button class="button" id="prev-section">Prev Section</button> 
      <button class="button" id="check_button">Check the answers</button>
      <button class="button" id="next-section">Next Section</button>
      <button class="button" id="end-quiz">End quiz</button> 
    </div>
    `;
      this.parentElement.insertAdjacentHTML('beforeend', html);
      this.checkButton = document.querySelector('#check_button');
      if (this.testMode) {
        this.checkButton.style.display = 'none';
      }
      this.endQuizButton = document.querySelector('#end-quiz');
      this.endQuizButton.style.display = 'none';
      this.nextButton = document.querySelector('#next-section');
      this.nextButton.style.display = 'none';
      this.prevButton = document.querySelector('#prev-section');
      this.prevButton.style.display = 'none';
      this.numberTextContainer = document.querySelector('#number-container');
      this.checkButton.addEventListener('click', () => {
        this.convertedSections[this.currentSection].checkCorrect();
      });
      this.nextButton.addEventListener('click', () => {
        this.changeSection(this.currentSection + 1);
      });
      this.prevButton.addEventListener('click', () => {
        this.changeSection(this.currentSection - 1);
      });
      this.questionsContainer = this.parentElement.querySelector('.questions-list');
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderNextSectionButton", () => {
      console.log('render', this.isLastSection);
      if (!this.isLastSection) {
        this.nextButton.style.display = 'block';
      } else {
        this.endQuizButton.style.display = 'block';
        this.endQuizButton.addEventListener('click', () => {
          if (this.testMode) {
            this.renderEndOfTest();
          } else {
            this.renderCongrats();
          }
        });
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderEndOfTest", () => {
      this.questionsContainer.style.display = 'none';
      this.numberTextContainer.style.display = 'none';
      this.progressBar.hide();
      this.parentElement.querySelector('.button-container').style.display = 'none';
      this.convertedSections.forEach(section => {
        section.checkCorrect();
      });
      let allQuestions = [];
      for (let i = 0; i < this.convertedSections.length; i++) {
        allQuestions = [...allQuestions, ...this.convertedSections[i].convertedQuestions];
      }
      let allQuestionsLength = allQuestions.length - this.convertedSections.length;
      let correctCount = allQuestions.filter(quest => {
        return quest.resultCorrect;
      }).length;
      correctCount = correctCount - this.sections.length;
      console.log(`result: ${correctCount} out of ${allQuestionsLength}`);
      let resultLevel = 'BEGINNER (A0)';
      if (correctCount >= 7) {
        resultLevel = 'ELEMENTARY (A1)';
      }
      if (correctCount >= 14) {
        resultLevel = 'PRE-INTERMEDIATE (A2)';
      }
      if (correctCount >= 22) {
        resultLevel = 'INTERMEDIATE (B1)';
      }
      if (correctCount >= 30) {
        resultLevel = 'UPPER INTERMEDIATE (B2)';
      }
      if (correctCount >= 38) {
        resultLevel = 'ADVANCED (C1)';
      }
      if (correctCount >= 45) {
        resultLevel = 'PROFICIENT (C2)';
      }
      const html = `
      <div class="last-message">
        <div class="message">
          The test is completed!
        </div>
        <div class="message got">
          You got:
        </div>
        <div class="message">
          <b>${correctCount}</b> correct answers out of <b>${allQuestionsLength}</b>
        </div>
        <div class="message">
          Your level:
        </div>
        <div class="message">
          <b>${resultLevel}</b>
        </div>
      </div>
    `;
      const oldLastMessage = this.parentElement.querySelector('.last-message');
      if (oldLastMessage) {
        this.parentElement.removeChild(oldLastMessage);
      }
      this.parentElement.insertAdjacentHTML('beforeend', html);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderCongrats", () => {
      this.questionsContainer.style.display = 'none';
      this.numberTextContainer.style.display = 'none';
      this.parentElement.querySelector('.button-container').style.display = 'none';
      let allQuestions = [];
      for (let i = 0; i < this.convertedSections.length; i++) {
        // allQuestionsLength += this.convertedSections[i].convertedQuestions.length;
        allQuestions = [...allQuestions, ...this.convertedSections[i].convertedQuestions];
      }
      let allQuestionsLength = allQuestions.length - this.convertedSections.length;
      let firstTimeCorrectCount = allQuestions.filter(quest => {
        return quest.firstTimeCorrect;
      }).length;
      firstTimeCorrectCount = firstTimeCorrectCount - this.sections.length;
      const percentage = firstTimeCorrectCount / allQuestionsLength * 100;
      const html = `
      <div class="last-message">
        Grats, you have completed the test!
        ${Math.round(percentage)}% correct!
      </div>
    `;
      const oldLastMessage = this.parentElement.querySelector('.last-message');
      if (oldLastMessage) {
        this.parentElement.removeChild(oldLastMessage);
      }
      this.parentElement.insertAdjacentHTML('beforeend', html);
    });
    this.sections = sections;
    this.maxSectionNumber = sections.length - 1;
    this.testMode = testMode;
    if (this.maxSectionNumber === 0) {
      this.isLastSection = true;
    }
    this.parentElement = parentElement;
    this.renderMainControls();
    this.convertedSections = sections.map((section, index) => {
      return new _Section__WEBPACK_IMPORTED_MODULE_1__["default"](section, this.questionsContainer, this.renderNextSectionButton, index, testMode);
    });
    if (testMode) {
      this.progressBar = new _ProgressBar__WEBPACK_IMPORTED_MODULE_2__["ProgressBar"](document.querySelector('.progressBarContainer'), sections.length);
    }

    // this.currentSection = 0;
    this.changeSection(0);
    if (testMode) {
      this.renderNextSectionButton();
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = (QuizController);

/***/ }),

/***/ "./src/Section/index.js":
/*!******************************!*\
  !*** ./src/Section/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Question_IQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Question/IQuestion */ "./src/Question/IQuestion/index.js");


class Section {
  constructor(sectionData, container, allRightCallBack, number) {
    let testMode = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questions", []);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "convertedQuestions", []);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "rendered", false);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "completed", false);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "findAllFalse", () => {
      return this.convertedQuestions.filter(ques => !ques.resultCorrect);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "checkCorrect", () => {
      // if(this.testMode){
      //   return
      // }
      for (let i = 0; i < this.convertedQuestions.length; i++) {
        this.convertedQuestions[i].check(false);
      }
      const falseValues = this.findAllFalse();
      if (!falseValues.length) {
        this.completed = true;
        this.allRightCallBack();
        //this.renderNextSectionButton();
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionCallback", isChangedQuestionCorrect => {
      if (isChangedQuestionCorrect) {
        const falseValues = this.findAllFalse();
        if (!falseValues.length) {
          this.checkCorrect();
        }
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderQuiz", () => {
      for (let i = 0; i < this.convertedQuestions.length; i++) {
        this.convertedQuestions[i].renderQuestion();
      }
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "renderSection", () => {
      if (this.rendered && this.sectionContainer) {
        this.sectionContainer.style.display = 'block';
        return;
      }
      const html = `
      <div class = "section-${this.number}"> </div>
    `;
      this.container.insertAdjacentHTML('beforeend', html);
      this.sectionContainer = this.container.querySelector(`.section-${this.number}`);
      this.convertedQuestions = [new _Question_IQuestion__WEBPACK_IMPORTED_MODULE_1__["TextBeforeQuestion"](this.header, this.sectionContainer), ...this.questions.map(question => {
        return Object(_Question_IQuestion__WEBPACK_IMPORTED_MODULE_1__["createQuestion"])(question, this.sectionContainer, this.questionCallback, this.testMode);
      })];
      this.rendered = true;
      this.renderQuiz();
      // sectionData.questions;
    });
    this.header = sectionData.header;
    this.number = number;
    this.container = container;
    this.questions = sectionData.questions;
    this.allRightCallBack = allRightCallBack;
    this.testMode = testMode;
    if (testMode) {
      this.completed = true;
    }
  }
  hideSection() {
    this.sectionContainer.style.display = 'none';
  }
}

/***/ }),

/***/ "./src/_utils/uid.js":
/*!***************************!*\
  !*** ./src/_utils/uid.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return makeid(10);
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuizController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuizController */ "./src/QuizController.js");


/*
modules:
  1. module to parse data from csv or etc
  2. module to show quiz data, pagination, etc.
  3. module to check answer.
  4. module to send data to server (or smth like this)

*/

// const testQuesions = [
//   {
//     questionType: 'simple-text',
//     questionText: 'I went out in the cold without a coat. (silly)',
//     rightAnswers: ['It was silly of me to go out in the cold without a coat'],
//   },
//   {
//     questionType: 'text-in-blank',
//     questionText: 'There are not many things people will not do ____ fear.',
//     rightAnswers: ['out of'],
//   },
//   {
//     questionType: 'variants-single',
//     questionText: 'I live in a very small village. You probably won’t find it __ your map.',
//     rightAnswers: ['on'],
//     variants: ['in', 'on'],
//   },
//   {
//     questionType: 'variants-multi',
//     questionText: 'test multi variant',
//     rightAnswers: ['on', 'in'],
//     variants: ['in', 'on'],
//   }
// ] 

document.addEventListener("DOMContentLoaded", () => {
  // inject styles to page
  const appendStyles = () => {
    const scss = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
    const head = document.getElementsByTagName('head')[0];
    const styleElem = document.createElement('style');
    styleElem.innerHTML = scss;
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/1745ac394a.js";
    head.appendChild(styleElem);
    head.appendChild(script);
  };
  appendStyles();
  const html = `<button class="button" id="start">Start</button>`;
  const container = document.querySelector('#quiz');
  container.insertAdjacentHTML('beforeend', html);
  const button = container.querySelector('#start');
  start.addEventListener('click', () => {
    container.removeChild(button);
    new _QuizController__WEBPACK_IMPORTED_MODULE_0__["default"](window.testData, container, window.__isTestMode__ || false);
  });
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

 module.exports = decodeURIComponent("body%7Bbackground-color%3A%23efeee9%3Bbackground-image%3Aurl(https%3A%2F%2Fucarecdn.com%2F043a20be-635c-4622-81f1-5046155e47a8%2F)%3Bbackground-attachment%3Afixed%7D%23quiz%7Bdisplay%3Aflex%3Bmax-width%3A800px%3Bmin-width%3A300px%3Bmargin%3A0%20auto%3Bflex-direction%3Acolumn%3Bfont-family%3A%22Open%20Sans%22%2C%20sans-serif%3Bfont-size%3A16px%3Bmargin-top%3A40px%3Bmargin-bottom%3A40px%7D.text-question-italic%7Bfont-weight%3A400%7D.question%7Bposition%3Arelative%3Bbackground-color%3A%23fff%3Bborder%3A1px%20solid%20%23dadce0%3Bborder-radius%3A10px%3Bmargin-bottom%3A12px%3Bpadding%3A24px%3Bpage-break-inside%3Aavoid%3Boverflow%3Ahidden%7D.question.section-header%7Bfont-size%3A19px%3Bfont-weight%3Abold%7D.hint-container%7Bposition%3Aabsolute%3Bdisplay%3Anone%3Bbackground-color%3Awhite%3Bborder%3A1px%20solid%20%235d636f%3Bwidth%3A50%25%3Bheight%3A70%25%3Bborder-radius%3A5px%3Bpadding%3A5px%3Bcolor%3A%2328a745%3Btop%3A5px%3Bright%3A3.6%25%3Banimation%3Ahint%200.3s%20ease-in-out%201%7D.last-message%7Bpadding%3A16px%3Bfont-size%3A25px%7D.last-message%20.message%7Bmargin-bottom%3A20px%3Bfont-size%3A25px%3Btext-align%3Acenter%7D.last-message%20.message.got%7Bmargin-bottom%3A5px%7D%40keyframes%20hint%7B0%25%7Bright%3A-70%25%7D99%25%7Bright%3A3.6%25%7D%7D.question%20.check-sign%7Bcursor%3Apointer%3Bcolor%3A%2328a745%3Bposition%3Aabsolute%3Bbottom%3A0.5vw%3Bright%3A0.6vw%3Bfont-size%3A20px%3Bwidth%3A20px%3Bheight%3A20px%7D.question%20.hint-sign%7Bcursor%3Apointer%3Bcolor%3Agrey%3Bposition%3Aabsolute%3Btop%3A0.5vw%3Bright%3A0.6vw%3Bfont-size%3A20px%7D.question.correct%7Bborder%3A1px%20solid%20%2328a745%7D.question.correct%7Bborder%3A1px%20solid%20%2328a745%3Bbackground-color%3Argba(40%2C167%2C69%2C0.2)%7D.question.incorrect%7Bborder%3A1px%20solid%20%23dc3545%3Bbackground-color%3Argba(220%2C53%2C69%2C0.2)%7D.question.incorrect%20.answer-text-input.in-blank%7Bbackground-color%3Argba(220%2C53%2C69%2C0.5)%7D.question%20.answer-text-input.in-blank.incorrect%7Bbackground-color%3Argba(220%2C53%2C69%2C0.5)%7Ddiv.question.correct%20.answer-text-input.in-blank%7Bbackground-color%3Argba(40%2C167%2C69%2C0.5)%7Ddiv.question%20.answer-text-input.in-blank.correct%7Bbackground-color%3Argba(40%2C167%2C69%2C0.5)%7D.checkbox-container%7Bmargin-bottom%3A16px%7D.checkbox-container%20input%7Bcursor%3Apointer%7D.checkbox-container%20label%7Bposition%3Arelative%3Bbottom%3A1px%3Bpadding-left%3A4px%3Bcursor%3Apointer%7D.question-text%7Bfont-size%3A16px%3Bfont-weight%3A500%3Bletter-spacing%3A.1px%3Bline-height%3A24px%3Bcolor%3A%23202124%3Bfont-weight%3A400%3Bwidth%3A100%25%3Bword-break%3Abreak-word%3Bmargin-bottom%3A16px%7D.question.in-blank%20.question-text%7Bmargin-bottom%3A0px%7D.question.incorrect%20.check-sign%7Bcolor%3A%23dc3545%7D.answer%7Bdisplay%3Aflex%3Bflex-direction%3Acolumn%7D.answer-text%7Bwidth%3A60%25%7D.answer-text.in-blank%7Bdisplay%3Ainline-block%3Bwidth%3Aauto%3Bmargin-right%3A5px%7D.answer-text-input%7Bbackground%3Atransparent%3Bpadding%3A2px%3Bborder%3A0%3Bborder-bottom%3A1px%20solid%20%23dadce0%3Bwidth%3A100%25%7D.answer-text-input.in-blank%7Bpadding%3A2px%3Bborder%3A0%3Bborder%3A1px%20solid%20%23dadce0%3Bwidth%3A100%25%7D.answer-text-input%3Afocus%7Boutline%3Anone%3Bborder-bottom%3A1px%20solid%20%235d636f%7D.answer-text-input.in-blank%3Afocus%7Boutline%3Anone%3Bborder%3A1px%20solid%20%23dadce0%7D.error-text%7Bcolor%3Ared%3Bfont-size%3A12px%3Bwidth%3A55%25%3Bpadding-top%3A10px%7D.button%7Bwidth%3A180px%3Bheight%3A40px%3Bborder-radius%3A10px%3Bborder%3Anone%3Bbackground-color%3Awhite%3Bcursor%3Apointer%7D%23start%7Bfont-size%3A20px%3Bwidth%3A200px%3Bheight%3A55px%3Bborder-radius%3A5px%3Balign-self%3Acenter%3Bbackground-color%3Atransparent%3Bbackground-image%3Aurl(%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg%20width%3D'100%2525'%20height%3D'100%2525'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%253e%253crect%20width%3D'100%2525'%20height%3D'100%2525'%20fill%3D'none'%20stroke%3D'%2523333'%20stroke-width%3D'6'%20stroke-dasharray%3D'1%252c%209'%20stroke-dashoffset%3D'47'%20stroke-linecap%3D'square'%2F%253e%253c%2Fsvg%253e%22)%7D.button%3Afocus%7Boutline%3Anone%7D.button%3Aactive%7Bborder%3A1px%20solid%20%235d636f%7D.button-container%7Bdisplay%3Aflex%3Bjustify-content%3Aspace-around%7D%40media%20(max-width%3A%20600px)%7B.answer-text%7Bwidth%3A90%25%7D.question%20.check-sign%7Bright%3A30px%3Bfont-size%3A25px%3Bbottom%3A3vw%7D.question%20.hint-sign%7Bright%3A30px%3Bfont-size%3A25px%3Bbottom%3A3vw%7D.question.in-blank%20.question-text%7Bmargin-bottom%3A12px%7D%7D%40media%20(max-width%3A%20500px)%7B.question%7Bpadding-right%3A45px%7D.question%20.check-sign%7Bright%3A20px%3Bfont-size%3A22px%7D.question%20.hint-sign%7Bright%3A20px%3Bfont-size%3A22px%7D.button%7Bwidth%3A130px%3Bheight%3A40px%3Bfont-size%3A12px%7D%7D.progressElemBG%7Bheight%3A25px%3Bdisplay%3Aflex%7D.progressElemBG%20.progressElem%7Bwidth%3A0px%3Bheight%3A25px%3Bbackground-color%3A%23282828%3Btransition%3Awidth%200.4s%2C%20background-color%200.4s%3Bmargin-left%3A5px%7D.progressElemBG%20.progressElem%3Afirst-child%7Bborder-radius%3A10px%200px%200px%2010px%7D.progressElemBG%20.progressElem%3Alast-child%7Bborder-radius%3A0px%2010px%2010px%200px%7D.progressElemBG%20.progressElemLast%7Bwidth%3A0px%3Bheight%3A25px%3Bbackground-color%3Agray%7D%23number-container%7Bmargin-top%3A5px%3Bmargin-left%3A5px%7D%0A");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5pc2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZ3Jlc3NCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9JUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9NdWx0aVZhcmlhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vTXVsdGlwbGVUZXh0SW5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1NpbXBsZVRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9TaW5nbGVWYXJpYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1RleHRJbkJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL2NoZWNrU3RyaW5nVmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpekNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL191dGlscy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJQcm9ncmVzc0JhciIsImNvbnN0cnVjdG9yIiwiY29udGFpbmVyIiwibWF4U2VjdGlvbnMiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFpbldpZHRoIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzdHlsZSIsImFwcGVuZENoaWxkIiwiaSIsImlubmVyRWxlbSIsInNldEF0dHJpYnV0ZSIsInNldFNlY3Rpb24iLCJzZWN0aW9uTnVtYmVyIiwiYWxsRWxlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1TZWN0aW9uTnVtYmVyIiwiZ2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaGlkZSIsImRpc3BsYXkiLCJJUXVlc3Rpb24iLCJxdWVzdGlvbkRhdGEiLCJwYXJlbnRFbGVtIiwiY2hlY2tDYWxsYmFjayIsIl90aGlzIiwidGVzdE1vZGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmaW5lUHJvcGVydHkiLCJtYWluRWxlbWVudCIsInNob3VsZENhbGxCYWNrIiwiYW5zd2VyIiwiZ2V0QW5zd2VyIiwicmVzdWx0IiwiY2VydGFpbkNoZWNrIiwiY2hlY2tJbml0aWFsaXplZCIsImZpcnN0VGltZUNvcnJlY3QiLCJoaW50QnV0dG9uIiwicmVzdWx0Q29ycmVjdCIsInJlbmRlclJlc3VsdCIsImlzQ29ycmVjdCIsImVycm9yc0NvbnRhaW5lciIsInJpZ2h0QW5zd2VycyIsImh0bWwiLCJ2YWxpZGF0ZUVycm9yVGV4dCIsImhpbnRDb250YWluZXIiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlSGludHMiLCJzZXRUaW1lb3V0IiwiaW5wdXRzIiwiZSIsImNvZGUiLCJjaGVjayIsInNob3dIaW50cyIsImlkIiwidWlkIiwiaW5wdXQiLCJyZW5kZXJRdWVzdGlvbiIsInF1ZXN0aW9uVGVtcGxhdGUiLCJjaGVja1NpZ25Db250YWluZXIiLCJjb25zb2xlIiwibG9nIiwiYmFzZUFkZExpc3RlbmVycyIsIk11bHRpVmFyaWFudHNRdWVzdGlvbiIsImluY2x1ZGVzIiwidGFyZ2V0Iiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoYW5nZUxpc3RlbmVyIiwidXNlckFuc3dlcnMiLCJjaGVja011bHRpIiwic2VsZWN0ZWQiLCJBcnJheSIsImZyb20iLCJxdWVzdGlvblRleHQiLCJtYXAiLCJ2YWx1ZSIsImFkZENlcnRhaW5MaXN0ZW5lcnMiLCJNdWx0aXBsZVRleHRJbkJsYW5rUXVlc3Rpb25zIiwidXNlckFuc3dlciIsImNvcnJlY3QiLCJjb3JyZWN0SW5kZXhlcyIsInZhbGlkYXRlTXVsdGlCbGFua3MiLCJlbCIsInVzZXJWYWx1ZSIsIlNpbXBsZVRleHRRdWVzdGlvbiIsInZhbGlkYXRlU2ltcGxlVGV4dCIsIlNpbmdsZVZhcmlhbnRRdWVzdGlvbiIsImNvbXBhcmVUd28iLCJUZXh0SW5CbGFua1F1ZXN0aW9uIiwidmFsaWRhdGVUZXh0SW5CbGFuayIsIlRleHRCZWZvcmVRdWVzdGlvbiIsInRleHQiLCJzcGxpdFJlZ0V4cCIsIlJlZ0V4cCIsInNwbGl0dGVkVGV4dCIsInNwbGl0Iiwic2VjdGlvbkhlYWRlclRleHQiLCJjcmVhdGVUZXh0SW5CbGFuayIsImNhbGxiYWNrIiwibWF0Y2giLCJNdWx0aVRleHRJbkJsYW5rUXVlc3Rpb24iLCJjcmVhdGVRdWVzdGlvbiIsInF1ZXN0aW9uVHlwZSIsIkVycm9yIiwicXVlc1ZhcmlhbnRzIiwidmFyaWFudHMiLCJleGNsdWRlRGF0YSIsIlNob3J0ZW5pbmdEaWN0aW9uYXJ5IiwiZmluZFNob3J0ZW5pbmdSZWdFeHAiLCJyaWdodEFuc3dlciIsIndvcmtlZFVzZXJBbnN3ZXIiLCJwcmVwYXJlU3RyaW5nIiwid29ya2VkUmlnaHRBbnN3ZXIiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJyZW1vdmVQb3NzaWJpbGl0aWVzIiwic29tZSIsImV4Y2x1ZGUiLCJ1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMiLCJmaW5kU2hvcnRlbmluZ3NQb3NzaWJpbGl0aWVzIiwiY29tcGFyZUVhY2hUb0VhY2giLCJ3b3JrZWRVc2VyQW5zd2VycyIsInNvcnQiLCJpc0VxdWFsIiwiZmluZE1heFByZXZpb3VzIiwib2JqIiwiY3VycmVudEtleSIsIm1heCIsImtleSIsIk51bWJlciIsInRleHRWYXJpYW50cyIsInNob3J0U3libW9scyIsInJlZyIsIndvcmRzIiwiaW5kZXhUb1B1c2hJbk1haW4iLCJwcmV2aW91c1ZhcmlhbnQiLCJuZXdWYXJpYW50IiwicHVzaCIsInZhcmlhbnQiLCJqb2luIiwidmFsaWRJbmRleGVzIiwiaXNBbGxWYWxpZCIsImdsb2JhbFZBIiwiaXNPbmVUaW1lVmFsaWQiLCJqIiwidW5pcSIsImZpbHRlciIsInYiLCJhIiwiaW5kZXhPZiIsInVuaXF1ZVVzZXJBbnN3ZXJzIiwiY2FsY3VsYXRlV2lkdGgiLCJhbnN3ZXJzIiwibWF4TGVuZ3RoIiwic3BsaXR0ZWQiLCJhbnN3ZXJUZW1wbGF0ZUluQmxhbmsiLCJhbnN3ZXJUZW1wbGF0ZSIsImluZGV4IiwiUXVpekNvbnRyb2xsZXIiLCJzZWN0aW9ucyIsInBhcmVudEVsZW1lbnQiLCJjdXJyZW50U2VjdGlvbiIsImNvbnZlcnRlZFNlY3Rpb25zIiwicmVuZGVyU2VjdGlvbiIsIm51bWJlclRleHRDb250YWluZXIiLCJpbm5lclRleHQiLCJwcm9ncmVzc0JhciIsInRvcCIsInNjcm9sbFRvIiwibGVmdCIsImJlaGF2aW9yIiwicHJldkJ1dHRvbiIsIm1heFNlY3Rpb25OdW1iZXIiLCJpc0xhc3RTZWN0aW9uIiwibmV4dEJ1dHRvbiIsImhpZGVTZWN0aW9uIiwiY29tcGxldGVkIiwiaW5pdFNlY3Rpb24iLCJyZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbiIsImNoZWNrQnV0dG9uIiwiZW5kUXVpekJ1dHRvbiIsImNoZWNrQ29ycmVjdCIsImNoYW5nZVNlY3Rpb24iLCJxdWVzdGlvbnNDb250YWluZXIiLCJyZW5kZXJFbmRPZlRlc3QiLCJyZW5kZXJDb25ncmF0cyIsInNlY3Rpb24iLCJhbGxRdWVzdGlvbnMiLCJjb252ZXJ0ZWRRdWVzdGlvbnMiLCJhbGxRdWVzdGlvbnNMZW5ndGgiLCJjb3JyZWN0Q291bnQiLCJxdWVzdCIsInJlc3VsdExldmVsIiwib2xkTGFzdE1lc3NhZ2UiLCJyZW1vdmVDaGlsZCIsImZpcnN0VGltZUNvcnJlY3RDb3VudCIsInBlcmNlbnRhZ2UiLCJNYXRoIiwicm91bmQiLCJyZW5kZXJNYWluQ29udHJvbHMiLCJTZWN0aW9uIiwic2VjdGlvbkRhdGEiLCJhbGxSaWdodENhbGxCYWNrIiwibnVtYmVyIiwicXVlcyIsImZhbHNlVmFsdWVzIiwiZmluZEFsbEZhbHNlIiwiaXNDaGFuZ2VkUXVlc3Rpb25Db3JyZWN0IiwicmVuZGVyZWQiLCJzZWN0aW9uQ29udGFpbmVyIiwiaGVhZGVyIiwicXVlc3Rpb25zIiwicXVlc3Rpb24iLCJxdWVzdGlvbkNhbGxiYWNrIiwicmVuZGVyUXVpeiIsIm1ha2VpZCIsImNoYXJhY3RlcnMiLCJjaGFyYWN0ZXJzTGVuZ3RoIiwiY2hhckF0IiwiZmxvb3IiLCJyYW5kb20iLCJhcHBlbmRTdHlsZXMiLCJzY3NzIiwicmVxdWlyZSIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlRWxlbSIsImlubmVySFRNTCIsInNjcmlwdCIsInNyYyIsImJ1dHRvbiIsInN0YXJ0IiwidGVzdERhdGEiLCJfX2lzVGVzdE1vZGVfXyJdLCJtYXBw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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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LElBQUksR0FBR3ZPLFFBQVEsQ0FBQ3dPLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRCxNQUFNQyxTQUFTLEdBQUd6TyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDakR3TyxTQUFTLENBQUNDLFNBQVMsR0FBR0wsSUFBSTtJQUUxQixNQUFNTSxNQUFNLEdBQUczTyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDL0MwTyxNQUFNLENBQUNDLEdBQUcsR0FBQywyQ0FBMkM7SUFFdERMLElBQUksQ0FBQ2hPLFdBQVcsQ0FBQ2tPLFNBQVMsQ0FBQztJQUMzQkYsSUFBSSxDQUFDaE8sV0FBVyxDQUFDb08sTUFBTSxDQUFDO0VBQzFCLENBQUM7RUFFRFAsWUFBWSxDQUFDLENBQUM7RUFFZCxNQUFNckwsSUFBSSxHQUFJLGtEQUFpRDtFQUMvRCxNQUFNbEQsU0FBUyxHQUFHRyxRQUFRLENBQUNtRCxhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ2pEdEQsU0FBUyxDQUFDcUQsa0JBQWtCLENBQUMsV0FBVyxFQUFFSCxJQUFJLENBQUM7RUFDL0MsTUFBTThMLE1BQU0sR0FBR2hQLFNBQVMsQ0FBQ3NELGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFFaEQyTCxLQUFLLENBQUMxTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSTtJQUNsQ3ZELFNBQVMsQ0FBQzRNLFdBQVcsQ0FBQ29DLE1BQU0sQ0FBQztJQUM3QixJQUFJeEUsdURBQWMsQ0FBQzdGLE1BQU0sQ0FBQ3VLLFFBQVEsRUFBRWxQLFNBQVMsRUFBRTJFLE1BQU0sQ0FBQ3dLLGNBQWMsSUFBSSxLQUFLLENBQUM7RUFDaEYsQ0FBQyxDQUFDO0FBSUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDckVGLDR2SyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFye1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBtYXhTZWN0aW9ucyl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLm1heFNlY3Rpb25zID0gbWF4U2VjdGlvbnM7XG5cbiAgICAgICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbS5jbGFzc05hbWUgPSAncHJvZ3Jlc3NFbGVtQkcnO1xuICAgICAgICB0aGlzLm1haW5XaWR0aCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICB0aGlzLmVsZW0uc3R5bGUud2lkdGggPSBgJHt0aGlzLm1haW5XaWR0aH1weGBcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxtYXhTZWN0aW9uczsgaSsrKXtcbiAgICAgICAgICAgIGxldCBpbm5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlubmVyRWxlbS5jbGFzc05hbWUgPSAncHJvZ3Jlc3NFbGVtJztcbiAgICAgICAgICAgIGlubmVyRWxlbS5zZXRBdHRyaWJ1dGUoJ3NlY3Rpb25OdW1iZXInLCBpKVxuICAgIFxuICAgICAgICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGlubmVyRWxlbSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0U2VjdGlvbihzZWN0aW9uTnVtYmVyKXtcblxuICAgICAgICB0aGlzLm1haW5XaWR0aCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS53aWR0aCA9IGAke3RoaXMubWFpbldpZHRofXB4YFxuXG4gICAgICAgIGxldCB3aWR0aCA9ICh0aGlzLm1haW5XaWR0aCAtICgodGhpcy5tYXhTZWN0aW9ucykqIDUpKSAgLyB0aGlzLm1heFNlY3Rpb25zO1xuICAgICAgICBsZXQgYWxsRWxlbXMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzRWxlbScpXG4gICAgICAgIGFsbEVsZW1zLmZvckVhY2goZWxlbSA9PntcbiAgICAgICAgICAgIGxldCBlbGVtU2VjdGlvbk51bWJlciA9IGVsZW0uZ2V0QXR0cmlidXRlKCdzZWN0aW9uTnVtYmVyJylcbiAgICAgICAgICAgIGlmKGVsZW1TZWN0aW9uTnVtYmVyIDwgc2VjdGlvbk51bWJlcil7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YFxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncHJvZ3Jlc3NFbGVtTGFzdCcpXG4gICAgICAgICAgICB9ZWxzZSBpZiAoZWxlbVNlY3Rpb25OdW1iZXIgPT0gIHNlY3Rpb25OdW1iZXIpe1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzRWxlbUxhc3QnKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IGAwcHhgXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9ncmVzc0VsZW1MYXN0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoaWRlKCl7XG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxufSIsImltcG9ydCB1aWQgZnJvbSAnLi4vLi4vX3V0aWxzL3VpZCc7XG5pbXBvcnQgeyB2YWxpZGF0ZUVycm9yVGV4dCB9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElRdWVzdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2hlY2tDYWxsYmFjaywgdGVzdE1vZGU9ZmFsc2UpIHtcbiAgICB0aGlzLnF1ZXN0aW9uRGF0YSA9IHF1ZXN0aW9uRGF0YTtcbiAgICB0aGlzLnBhcmVudEVsZW0gPSBwYXJlbnRFbGVtO1xuICAgIHRoaXMuaWQgPSB1aWQoKTtcbiAgICB0aGlzLnJlc3VsdENvcnJlY3QgPSBmYWxzZTtcbiAgICB0aGlzLmNoZWNrSW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZpcnN0VGltZUNvcnJlY3QgPSBmYWxzZTtcbiAgICB0aGlzLmlucHV0ID0gbnVsbDtcbiAgICB0aGlzLmNoZWNrQ2FsbGJhY2sgPSBjaGVja0NhbGxiYWNrO1xuICAgIHRoaXMudGVzdE1vZGUgPSB0ZXN0TW9kZVxuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICB0aGlzLm1haW5FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGNoZWNrID0gKHNob3VsZENhbGxCYWNrID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IGFuc3dlciA9IHRoaXMuZ2V0QW5zd2VyKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jZXJ0YWluQ2hlY2soYW5zd2VyKTtcbiAgICBpZiAoIXRoaXMuY2hlY2tJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5jaGVja0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyc3RUaW1lQ29ycmVjdCA9IHJlc3VsdDtcbiAgICAgIHRoaXMuaGludEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgdGhpcy5yZXN1bHRDb3JyZWN0ID0gcmVzdWx0O1xuICAgIHRoaXMucmVuZGVyUmVzdWx0KHJlc3VsdCk7XG4gICAgaWYgKHNob3VsZENhbGxCYWNrKSB7XG4gICAgICB0aGlzLmNoZWNrQ2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJSZXN1bHQgPSAoaXNDb3JyZWN0KSA9PiB7XG4gICAgaWYgKGlzQ29ycmVjdCkge1xuXG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uKCkge1xuICAgIGNvbnN0IGh0bWwgPSB0aGlzLnF1ZXN0aW9uVGVtcGxhdGUodGhpcy5xdWVzdGlvbkRhdGEsIHRoaXMuaWQpO1xuICAgIHRoaXMucGFyZW50RWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gdGhpcy5wYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5tYWluRWxlbWVudCA9IG1haW5FbGVtZW50O1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgdGhpcy5oaW50QnV0dG9uID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGludC1zaWduJyk7XG4gICAgdGhpcy5oaW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5oaW50Q29udGFpbmVyID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGludC1jb250YWluZXInKTtcbiAgICB0aGlzLmNoZWNrU2lnbkNvbnRhaW5lciA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLXNpZ24nKTtcbiAgICBjb25zb2xlLmxvZygndGVzdE1vZGUnLCB0aGlzLnRlc3RNb2RlKVxuICAgIGlmKHRoaXMudGVzdE1vZGUpe1xuICAgICAgdGhpcy5oaW50QnV0dG9uLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgICAgdGhpcy5jaGVja1NpZ25Db250YWluZXIuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG4gICAgfVxuICAgIHRoaXMuYmFzZUFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgc2hvd0hpbnRzID0gKCkgPT4ge1xuICAgIGlmKHRoaXMudGVzdE1vZGUpe1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghdGhpcy5lcnJvcnNDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0ZUVycm9yVGV4dChyaWdodEFuc3dlcnMpO1xuICAgICAgdGhpcy5oaW50Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgICB0aGlzLmVycm9yc0NvbnRhaW5lciA9IHRoaXMuaGludENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGludHMtYW5zd2Vycy1jb250YWluZXInKTtcbiAgICB9XG4gICAgdGhpcy5oaW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuaGludENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VIaW50cyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlSGludHMoKTtcbiAgICB9LCAyNTAwKTtcbiAgfVxuXG4gIGNsb3NlSGludHMgPSAoKSA9PiB7XG4gICAgdGhpcy5oaW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBiYXNlQWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGlmKHRoaXMudGVzdE1vZGUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKGlucHV0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHsgaWYoZS5jb2RlID09PSBcIkVudGVyXCIpIHt0aGlzLmNoZWNrKCk7fSB9KTtcbiAgICB9XG4gICAgdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stc2lnbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGVjayk7XG4gICAgdGhpcy5oaW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93SGludHMpO1xuICB9XG5cbn0iLCJpbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2guaXNlcXVhbCc7XG5cbmltcG9ydCB7IHF1ZXN0aW9uVGVtcGxhdGUsIHZhbGlkYXRlRXJyb3JUZXh0IH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7IHZhbGlkYXRlU2ltcGxlVGV4dCwgdmFsaWRhdGVUZXh0SW5CbGFuaywgY2hlY2tNdWx0aSB9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpVmFyaWFudHNRdWVzdGlvbiBleHRlbmRzIElRdWVzdGlvbiB7XG5cbiAgcXVlc3Rpb25UZW1wbGF0ZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uVGVtcGxhdGUoLi4uYXJncyk7XG4gIH1cblxuICBnZXRBbnN3ZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbbmFtZT1cIiR7dGhpcy5xdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiXTpjaGVja2VkYCkpO1xuICAgIGlmIChzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZC5tYXAoKGVsZW0pID0+IGVsZW0udmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjaGFuZ2VMaXN0ZW5lciA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLmlucHV0cy5pbmNsdWRlcyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2VydGFpbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgc3VwZXIuaGlkZSgpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgcmVuZGVyUXVlc3Rpb24oKSB7XG4gICAgc3VwZXIucmVuZGVyUXVlc3Rpb24oKTtcbiAgICB0aGlzLmlucHV0cyA9IEFycmF5LmZyb20odGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICB0aGlzLmFkZENlcnRhaW5MaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VycykgPT4ge1xuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gY2hlY2tNdWx0aSh1c2VyQW5zd2VycywgcmlnaHRBbnN3ZXJzKTtcbiAgfVxuXG59IiwiaW1wb3J0IHtxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7dmFsaWRhdGVNdWx0aUJsYW5rc30gZnJvbSAnLi4vY2hlY2tTdHJpbmdWYWxpZCc7XG5pbXBvcnQgSVF1ZXN0aW9uIGZyb20gJy4vSVF1ZXN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGVUZXh0SW5CbGFua1F1ZXN0aW9ucyBleHRlbmRzIElRdWVzdGlvbntcbiAgcXVlc3Rpb25UZW1wbGF0ZSA9ICAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBxdWVzdGlvblRlbXBsYXRlKC4uLmFyZ3MpO1xuICB9XG5cbiAgZ2V0QW5zd2VyKCl7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRzLm1hcCgoaW5wdXQpPT4gaW5wdXQudmFsdWUpO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXIpID0+IHtcbiAgICBjb25zdCB7IHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0IH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICBjb25zdCB7Y29ycmVjdCwgY29ycmVjdEluZGV4ZXN9ID0gIHZhbGlkYXRlTXVsdGlCbGFua3ModXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQpO1xuICAgIHRoaXMuY29ycmVjdEluZGV4ZXMgPSBjb3JyZWN0SW5kZXhlcztcbiAgICByZXR1cm4gY29ycmVjdDtcbiAgfVxuXG4gIHJlbmRlclJlc3VsdCA9IChpc0NvcnJlY3QpID0+e1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbnB1dHMubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5jb3JyZWN0SW5kZXhlcy5pbmNsdWRlcyhpKSl7XG4gICAgICAgIHRoaXMuaW5wdXRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgICAgICB0aGlzLmlucHV0c1tpXS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5pbnB1dHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgICB0aGlzLmlucHV0c1tpXS5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoaXNDb3JyZWN0KXtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW5jb3JyZWN0Jyk7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VMaXN0ZW5lciA9IChlKT0+e1xuICAgIGlmKCF0aGlzLmlucHV0cy5pbmNsdWRlcyhlLnRhcmdldCkpe1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBhZGRDZXJ0YWluTGlzdGVuZXJzID0gKCkgPT57XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpPT57XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSk9PntcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PntcbiAgICBzdXBlci5oaWRlKCk7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICByZW5kZXJRdWVzdGlvbigpe1xuICAgIHN1cGVyLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgdGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgdGhpcy5hZGRDZXJ0YWluTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyICA9IChlbCkgPT57XG4gICAgY29uc3QgdXNlclZhbHVlID0gZWwudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudXNlclZhbHVlID0gdXNlclZhbHVlO1xuICAgIHRoaXMuY2hlY2sodXNlclZhbHVlKTtcbiAgfVxuXG59IiwiaW1wb3J0IHtxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7dmFsaWRhdGVTaW1wbGVUZXh0LCB2YWxpZGF0ZVRleHRJbkJsYW5rfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVUZXh0UXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb257XG4gIC8vIGNvbnN0cnVjdG9yKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSl7XG4gIC8vICAgc3VwZXIoKVxuICAvLyB9XG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAgKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpe1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXIpID0+eyAgXG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgIHJldHVybiB2YWxpZGF0ZVNpbXBsZVRleHQodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgID0gKGVsKSA9PntcbiAgICBjb25zdCB1c2VyVmFsdWUgPSBlbC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy51c2VyVmFsdWUgPSB1c2VyVmFsdWU7XG4gICAgdGhpcy5jaGVjayh1c2VyVmFsdWUpO1xuICB9XG5cbn0gIiwiaW1wb3J0IHsgcXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHQgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgdmFsaWRhdGVTaW1wbGVUZXh0LCB2YWxpZGF0ZVRleHRJbkJsYW5rLCBjb21wYXJlVHdvIH0gZnJvbSAnLi4vY2hlY2tTdHJpbmdWYWxpZCc7XG5pbXBvcnQgSVF1ZXN0aW9uIGZyb20gJy4vSVF1ZXN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmFyaWFudFF1ZXN0aW9uIGV4dGVuZHMgSVF1ZXN0aW9uIHtcblxuICBxdWVzdGlvblRlbXBsYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cIiR7dGhpcy5xdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiXTpjaGVja2VkYCk7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjaGFuZ2VMaXN0ZW5lciA9IChlKSA9PiB7XG5cbiAgICBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAgIHJldHVybiBcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlucHV0cy5pbmNsdWRlcyhlLnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2VydGFpbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLmlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgc3VwZXIuaGlkZSgpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgcmVuZGVyUXVlc3Rpb24oKSB7XG4gICAgc3VwZXIucmVuZGVyUXVlc3Rpb24oKTtcbiAgICB0aGlzLmlucHV0cyA9IEFycmF5LmZyb20odGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICB0aGlzLmFkZENlcnRhaW5MaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VyKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgIHJldHVybiBjb21wYXJlVHdvKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2Vyc1swXSk7XG4gIH1cblxufSIsImltcG9ydCB7cXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHR9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQge3ZhbGlkYXRlU2ltcGxlVGV4dCwgdmFsaWRhdGVUZXh0SW5CbGFua30gZnJvbSAnLi4vY2hlY2tTdHJpbmdWYWxpZCc7XG5pbXBvcnQgSVF1ZXN0aW9uIGZyb20gJy4vSVF1ZXN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEluQmxhbmtRdWVzdGlvbiBleHRlbmRzIElRdWVzdGlvbntcbiAgcXVlc3Rpb25UZW1wbGF0ZSA9ICAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBxdWVzdGlvblRlbXBsYXRlKC4uLmFyZ3MpO1xuICB9XG5cbiAgZ2V0QW5zd2VyKCl7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXQudmFsdWU7XG4gIH1cblxuICBjZXJ0YWluQ2hlY2sgPSAodXNlckFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgIHJldHVybiB2YWxpZGF0ZVRleHRJbkJsYW5rKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0KTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgID0gKGVsKSA9PntcbiAgICBjb25zdCB1c2VyVmFsdWUgPSBlbC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy51c2VyVmFsdWUgPSB1c2VyVmFsdWU7XG4gICAgdGhpcy5jaGVjayh1c2VyVmFsdWUpO1xuICB9XG5cbn0iLCJpbXBvcnQgU2ltcGxlVGV4dFF1ZXN0aW9uIGZyb20gJy4vU2ltcGxlVGV4dCc7XG5pbXBvcnQgVGV4dEluQmxhbmtRdWVzdGlvbiBmcm9tICcuL1RleHRJbkJsYW5rJztcbmltcG9ydCBNdWx0aVRleHRJbkJsYW5rUXVlc3Rpb24gZnJvbSAnLi9NdWx0aXBsZVRleHRJbkJsYW5rJztcbmltcG9ydCBTaW5nbGVWYXJpYW50UXVlc3Rpb24gZnJvbSAnLi9TaW5nbGVWYXJpYW50cyc7XG5pbXBvcnQgTXVsdGlWYXJpYW50c1F1ZXN0aW9uIGZyb20gJy4vTXVsdGlWYXJpYW50cyc7XG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL191dGlscy91aWQnO1xuXG5cblxuZXhwb3J0IGNsYXNzIFRleHRCZWZvcmVRdWVzdGlvbntcbiAgY29uc3RydWN0b3IodGV4dCwgcGFyZW50RWxlbSl7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLnBhcmVudEVsZW0gPSBwYXJlbnRFbGVtO1xuICAgIHRoaXMucmVzdWx0Q29ycmVjdCA9IHRydWU7XG4gICAgdGhpcy5maXJzdFRpbWVDb3JyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLnVpZCA9IHVpZCgpO1xuICB9XG5cbiAgaGlkZSA9ICgpID0+e1xuICAgIHRoaXMubWFpbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgY2hlY2sgPSAoKSA9PntcbiAgICBcbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uID0gKCkgPT57XG4gICAgY29uc3Qgc3BsaXRSZWdFeHAgPSBuZXcgUmVnRXhwKC8oTWlzc2lvbiBbMC05Ll0rKSAvKTtcbiAgICBsZXQgc3BsaXR0ZWRUZXh0ID0gdGhpcy50ZXh0LnNwbGl0KHNwbGl0UmVnRXhwKTtcbiAgICBpZihzcGxpdHRlZFRleHQubGVuZ3RoICE9PSAzKXtcbiAgICAgIHNwbGl0dGVkVGV4dCA9IHRoaXMudGV4dDtcbiAgICB9ZWxzZXtcbiAgICAgIHNwbGl0dGVkVGV4dCA9IGAke3NwbGl0dGVkVGV4dFswXX0ke3NwbGl0dGVkVGV4dFsxXX0gPC9icj4gPHNwYW4gY2xhc3M9XCJ0ZXh0LXF1ZXN0aW9uLWl0YWxpY1wiPiR7c3BsaXR0ZWRUZXh0WzJdfTwvc3Bhbj5gO1xuICAgIH1cbiAgICBjb25zdCBzZWN0aW9uSGVhZGVyVGV4dCA9IGA8ZGl2IGNsYXNzPVwicXVlc3Rpb24gc2VjdGlvbi1oZWFkZXJcIiBpZD1cIiR7dGhpcy51aWR9XCI+JHtzcGxpdHRlZFRleHR9PC9kaXY+YDtcbiAgICB0aGlzLnBhcmVudEVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzZWN0aW9uSGVhZGVyVGV4dCk7XG4gICAgdGhpcy5tYWluRWxlbWVudCA9IHRoaXMucGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnVpZH1gKTtcbiAgfVxufVxuXG5cbmNvbnN0IGNyZWF0ZVRleHRJbkJsYW5rID0gKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2spID0+e1xuICBpZihxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0Lm1hdGNoKC9fKy9nKS5sZW5ndGggPiAxKXtcbiAgICByZXR1cm4gbmV3IE11bHRpVGV4dEluQmxhbmtRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIG5ldyBUZXh0SW5CbGFua1F1ZXN0aW9uKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVRdWVzdGlvbiA9IChxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrLCB0ZXN0TW9kZT1mYWxzZSkgPT57XG4gIGlmKHRlc3RNb2RlICYmIHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgIT09ICd2YXJpYW50cy1zaW5nbGUnKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHRlc3QgbW9kZSBpcyBlbmFibGVkLCBidXQgcXVlc3Rpb24nIHR5cGUgaXMgJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlIH1gKVxuICB9XG4gIHN3aXRjaChxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlKXtcbiAgICBjYXNlICdzaW1wbGUtdGV4dCc6XG4gICAgICByZXR1cm4gbmV3IFNpbXBsZVRleHRRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgICBjYXNlICd0ZXh0LWluLWJsYW5rJzpcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0SW5CbGFuayhxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKVxuICAgIGNhc2UgJ3ZhcmlhbnRzLW11bHRpJzpcbiAgICAgIHJldHVybiBuZXcgTXVsdGlWYXJpYW50c1F1ZXN0aW9uKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2spO1xuICAgIGNhc2UgJ3ZhcmlhbnRzLXNpbmdsZSc6XG4gICAgICBsZXQgcXVlc1ZhcmlhbnRzO1xuICAgICAgaWYocXVlc3Rpb25EYXRhWyd2YXJpYW50c1xcciddICl7XG4gICAgICAgIHF1ZXNWYXJpYW50cyA9IHF1ZXN0aW9uRGF0YVsndmFyaWFudHNcXHInXVxuICAgICAgfWVsc2UgaWYocXVlc3Rpb25EYXRhWyd2YXJpYW50cyddKXtcbiAgICAgICAgcXVlc1ZhcmlhbnRzID0gcXVlc3Rpb25EYXRhWyd2YXJpYW50cyddO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgcXVlc1ZhcmlhbnRzID09PSAnc3RyaW5nJyl7XG4gICAgICAgIHF1ZXN0aW9uRGF0YS52YXJpYW50cyA9IHF1ZXNWYXJpYW50cy5zcGxpdCgnfHwnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTaW5nbGVWYXJpYW50UXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgdGVzdE1vZGUpO1xuICAgICAgLy9yZXR1cm4gbmV3IFRleHRJbkJsYW5rUXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjayk7XG4gIH1cbn0iLCJpbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2guaXNlcXVhbCc7XG5cbmNvbnN0IGV4Y2x1ZGVEYXRhID0gW1xuICBcIm1hcmlhJ3JlXCIsXG4gICdtYXJpYVwicmUnLFxuICAnbWFyaWFgcmUnLFxuXTtcblxuY29uc3QgU2hvcnRlbmluZ0RpY3Rpb25hcnkgPSB7XG4gICdjYW4gbm90JzogYGNhbid0YCxcbiAgJ2Nhbm5vdCc6IGBjYW4ndGAsXG4gICd3aWxsIG5vdCc6IGB3b24ndGAsXG4gICcgaXMnOiBgJ3NgLFxuICAnXFwncyc6IGAnc2AsXG4gICcgaGF2ZSc6IGAndmVgLFxuICAnIGhhcyc6IGAnc2AsXG4gICcgd291bGQnOiBgJ2RgLFxuICAnIGhhZCc6IGAnZGAsXG4gICcgYXJlJzogYCdyZWAsXG4gICcgd2lsbCc6IGAnbGxgLFxuICAnIGFtJzogYCdtYCxcbiAgJ2lzIG5vdCc6IGBpc24ndGAsXG4gICdhcmUgbm90JzogYGFyZW4ndGAsXG4gICd3YXMgbm90JzogYHdhc24ndGAsXG4gICd3ZXJlIG5vdCc6IGB3ZXJlbid0YCxcbiAgJ2hhcyBub3QnOiBgaGFzbid0YCxcbiAgJ2hhdmUgbm90JzogYGhhdmVuJ3RgLFxuXG4gICdoYWQgbm90JzogYGhhZG4ndGAsXG4gICdkb2VzIG5vdCc6IGBkb2Vzbid0YCxcbiAgJ2RvIG5vdCc6IGBkb24ndGAsXG4gICdkaWQgbm90JzogYGRpZG4ndGAsXG4gICdjb3VsZCBub3QnOiBgY291bGRuJ3RgLFxuICAnd291bGQgbm90JzogYHdvdWxkbid0YCxcbiAgJ211c3Qgbm90JzogYG11c3RuJ3RgLFxuICAnbmVlZCBub3QnOiBgbmVlZG4ndGAsXG4gICdzaG91bGQgbm90JzogYHNob3VsZG4ndGAsXG4gICdtaWdodCBub3QnOiBgbWlnaHRuJ3RgLFxuICAnZGFyZSBub3QnOiBgZGFyZW4ndGAsXG59XG5cblxudmFyIGZpbmRTaG9ydGVuaW5nUmVnRXhwID0gbmV3IFJlZ0V4cCgvXFx3Kyg/PSdcXHcrKS9nKTtcblxuXG5cbmV4cG9ydCBjb25zdCBjb21wYXJlVHdvID0gKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2VyKSA9PiB7XG4gIGlmICghdXNlckFuc3dlcikge1xuICAgIHVzZXJBbnN3ZXIgPSAnJztcbiAgfVxuICBsZXQgd29ya2VkVXNlckFuc3dlciA9IHByZXBhcmVTdHJpbmcodXNlckFuc3dlcik7XG4gIGxldCB3b3JrZWRSaWdodEFuc3dlciA9IHByZXBhcmVTdHJpbmcocmlnaHRBbnN3ZXIpO1xuICByZXR1cm4gd29ya2VkVXNlckFuc3dlciA9PT0gd29ya2VkUmlnaHRBbnN3ZXI7XG59XG5cblxuLy8gbWFrZSB0cmltLCByZW1vdmUgZG90IG9uIHRoZSBlbmQsIGxvd2VyY2FzZSwgLi4uZXRjXG5jb25zdCBwcmVwYXJlU3RyaW5nID0gKGFuc3dlcikgPT4ge1xuICByZXR1cm4gYW5zd2VyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sICcnKS5yZXBsYWNlKC8gKy9nLCAnICcpLnJlcGxhY2UoLyAkLywgJycpLnJlcGxhY2UoL14gLywgJycpLnJlcGxhY2UoL1xcLiQvLCAnJykucmVwbGFjZSgvXFxuJC8sICcnKS5yZXBsYWNlKC9cXD8vZywgJycpLnJlcGxhY2UoL1xcLC9nLCAnJyk7XG59XG5cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlU2ltcGxlVGV4dCA9ICh1c2VyQW5zd2VyLCByaWdodEFuc3dlcnMpID0+IHtcbiAgbGV0IHJlbW92ZVBvc3NpYmlsaXRpZXMgPSBmYWxzZTtcbiAgaWYgKGV4Y2x1ZGVEYXRhLnNvbWUoKGV4Y2x1ZGUpID0+IHByZXBhcmVTdHJpbmcodXNlckFuc3dlcikuaW5jbHVkZXMocHJlcGFyZVN0cmluZyhleGNsdWRlKSkpKSB7XG4gICAgcmVtb3ZlUG9zc2liaWxpdGllcyA9IHRydWU7XG4gIH1cbiAgbGV0IHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcztcbiAgaWYgKCFyZW1vdmVQb3NzaWJpbGl0aWVzKSB7XG4gICAgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyh1c2VyQW5zd2VyKTtcbiAgICBjb25zb2xlLmxvZygndXNlckFuc3dlcicsIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyk7XG4gIH0gZWxzZSB7XG4gICAgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gW3VzZXJBbnN3ZXJdO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKCd2YWxpZGF0ZSBzaW1wbGUnLCB1c2VyQW5zd2VyLCByaWdodEFuc3dlcnMpO1xuICAvLyBjb25zdCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBbdXNlckFuc3dlciwgcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKSwgLi4uZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyh1c2VyQW5zd2VyKV07XG4gIC8vIGNvbnNvbGUubG9nKCdwb3NzaScsIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyk7XG4gIHJldHVybiBjb21wYXJlRWFjaFRvRWFjaChbLi4udXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzLCB1c2VyQW5zd2VyXSwgcmlnaHRBbnN3ZXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrTXVsdGkgPSAodXNlckFuc3dlcnMsIHJpZ2h0QW5zd2VycykgPT4ge1xuICBsZXQgd29ya2VkVXNlckFuc3dlcnMgPSB1c2VyQW5zd2Vycy5zb3J0KCkubWFwKChhbnN3ZXIpID0+IHByZXBhcmVTdHJpbmcoYW5zd2VyKSk7XG4gIGxldCB3b3JrZWRSaWdodEFuc3dlciA9IHJpZ2h0QW5zd2Vycy5zb3J0KCkubWFwKChhbnN3ZXIpID0+IHByZXBhcmVTdHJpbmcoYW5zd2VyKSk7XG4gIHJldHVybiBpc0VxdWFsKHdvcmtlZFVzZXJBbnN3ZXJzLCB3b3JrZWRSaWdodEFuc3dlcik7XG5cbn1cblxuY29uc3QgZmluZE1heFByZXZpb3VzID0gKG9iaiwgY3VycmVudEtleSkgPT4ge1xuICBsZXQgbWF4ID0gLTE7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoTnVtYmVyKGtleSkgPiBOdW1iZXIobWF4KSAmJiBvYmpba2V5XS5sZW5ndGggPiAwICYmIGtleSAhPSBjdXJyZW50S2V5KSB7XG4gICAgICBtYXggPSBrZXk7XG4gICAgfVxuICB9XG4gIGlmIChtYXggPT09IC0xKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cblxuXG5sZXQgZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyA9ICh1c2VyQW5zd2VyKSA9PiB7XG4gIHVzZXJBbnN3ZXIgPSBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpO1xuICBsZXQgdGV4dFZhcmlhbnRzID0ge307XG4gIGNvbnN0IHNob3J0U3libW9scyA9IFsn4oCZJywgJ1xcJycsICdgJywgJ1wiJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hvcnRTeWJtb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoc2hvcnRTeWJtb2xzW2ldLCAnZycpO1xuICAgIHVzZXJBbnN3ZXIgPSB1c2VyQW5zd2VyLnJlcGxhY2UocmVnLCAnXFwnJyk7XG4gIH1cbiAgY29uc3Qgd29yZHMgPSB1c2VyQW5zd2VyLnNwbGl0KCcgJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcblxuICAgIGlmICh3b3Jkc1tpXS5tYXRjaChmaW5kU2hvcnRlbmluZ1JlZ0V4cCkpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBTaG9ydGVuaW5nRGljdGlvbmFyeSkge1xuICAgICAgICBpZiAod29yZHNbaV0uaW5jbHVkZXMoU2hvcnRlbmluZ0RpY3Rpb25hcnlba2V5XSkpIHtcblxuICAgICAgICAgIHZhciBpbmRleFRvUHVzaEluTWFpbiA9IGk7XG4gICAgICAgICAgaWYgKCF0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dKSB7XG4gICAgICAgICAgICB0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCBpKSkge1xuICAgICAgICAgICAgdGV4dFZhcmlhbnRzW2ZpbmRNYXhQcmV2aW91cyh0ZXh0VmFyaWFudHMsIGkpXS5mb3JFYWNoKChwcmV2aW91c1ZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhcmlhbnQgPSBbLi4ucHJldmlvdXNWYXJpYW50XTtcbiAgICAgICAgICAgICAgbmV3VmFyaWFudFtpXSA9IHByZXZpb3VzVmFyaWFudFtpXS5yZXBsYWNlKFNob3J0ZW5pbmdEaWN0aW9uYXJ5W2tleV0sIGtleSk7XG4gICAgICAgICAgICAgIHRleHRWYXJpYW50c1tpbmRleFRvUHVzaEluTWFpbl0ucHVzaChuZXdWYXJpYW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdWYXJpYW50ID0gWy4uLndvcmRzXTtcbiAgICAgICAgICAgIG5ld1ZhcmlhbnRbaV0gPSB3b3Jkc1tpXS5yZXBsYWNlKFNob3J0ZW5pbmdEaWN0aW9uYXJ5W2tleV0sIGtleSk7XG4gICAgICAgICAgICB0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dLnB1c2gobmV3VmFyaWFudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKCdmZHNmc2QnLCB0ZXh0VmFyaWFudHMsIGZpbmRNYXhQcmV2aW91cyh0ZXh0VmFyaWFudHMsIDk5OSkpO1xuICAvLyBmb3Igb25lIHNob3J0ZW5pbmcuXG4gIGlmIChmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCA5OTkpKSB7XG4gICAgcmV0dXJuIHRleHRWYXJpYW50c1tmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCA5OTkpXS5tYXAoKHZhcmlhbnQpID0+IHZhcmlhbnQuam9pbignICcpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW3VzZXJBbnN3ZXJdO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVGV4dEluQmxhbmsgPSAodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQpID0+IHtcbiAgcmlnaHRBbnN3ZXJzID0gWy4uLnJpZ2h0QW5zd2VycywgLi4ucmlnaHRBbnN3ZXJzLm1hcCgocmlnaHRBbnN3ZXIpID0+IHF1ZXN0aW9uVGV4dC5yZXBsYWNlKC9fKy9nLCByaWdodEFuc3dlcikpXTtcbiAgbGV0IHJlbW92ZVBvc3NpYmlsaXRpZXMgPSBmYWxzZTtcbiAgY29uc29sZS5sb2coJ2V4JywgZXhjbHVkZURhdGEsIHVzZXJBbnN3ZXIsIHByZXBhcmVTdHJpbmcodXNlckFuc3dlcikpO1xuICBpZiAoZXhjbHVkZURhdGEuc29tZSgoZXhjbHVkZSkgPT4gcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKS5pbmNsdWRlcyhwcmVwYXJlU3RyaW5nKGV4Y2x1ZGUpKSkpIHtcbiAgICByZW1vdmVQb3NzaWJpbGl0aWVzID0gdHJ1ZTtcbiAgfVxuICBsZXQgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzO1xuICBpZiAoIXJlbW92ZVBvc3NpYmlsaXRpZXMpIHtcbiAgICB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBmaW5kU2hvcnRlbmluZ3NQb3NzaWJpbGl0aWVzKHVzZXJBbnN3ZXIpO1xuICB9IGVsc2Uge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IFtdO1xuICB9XG4gIC8vIGNvbnN0IHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcik7XG4gIHJldHVybiBjb21wYXJlRWFjaFRvRWFjaChbLi4udXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzLCB1c2VyQW5zd2VyLCBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpXSwgcmlnaHRBbnN3ZXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlTXVsdGlCbGFua3MgPSAodXNlckFuc3dlcnMsIHJpZ2h0QW5zd2VycykgPT4ge1xuICBjb25zb2xlLmxvZygndXNlcicsIHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpO1xuICBsZXQgdmFsaWRJbmRleGVzID0gW107XG4gIGxldCBpc0FsbFZhbGlkID0gZmFsc2U7XG4gIGlmICh1c2VyQW5zd2Vycy5sZW5ndGggPiByaWdodEFuc3dlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICBjb3JyZWN0SW5kZXhlczogLTEsXG4gICAgfVxuICB9XG5cbiAgaWYgKHJpZ2h0QW5zd2Vycy5sZW5ndGggJSB1c2VyQW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICBjb3JyZWN0SW5kZXhlczogLTEsXG4gICAgfVxuICB9O1xuXG4gIGxldCBnbG9iYWxWQSA9IHtcbiAgICBpc09uZVRpbWVWYWxpZDogZmFsc2UsXG4gICAgdmFsaWRJbmRleGVzOiBbXSxcbiAgfVxuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodEFuc3dlcnMubGVuZ3RoOyBpICs9IHVzZXJBbnN3ZXJzLmxlbmd0aCkge1xuICAgIHZhbGlkSW5kZXhlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB1c2VyQW5zd2Vycy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHZhbGlkYXRlU2ltcGxlVGV4dCh1c2VyQW5zd2Vyc1tqXSwgW3JpZ2h0QW5zd2Vyc1tqICsgaV1dKSkge1xuICAgICAgICB2YWxpZEluZGV4ZXMucHVzaChqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbGlkSW5kZXhlcy5sZW5ndGggPT09IHVzZXJBbnN3ZXJzLmxlbmd0aCkge1xuICAgICAgZ2xvYmFsVkEuaXNPbmVUaW1lVmFsaWQgPSB0cnVlO1xuICAgICAgZ2xvYmFsVkEudmFsaWRJbmRleGVzID0gdmFsaWRJbmRleGVzO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFZBLnZhbGlkSW5kZXhlcy5wdXNoKC4uLnZhbGlkSW5kZXhlcyk7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ2dsb2JhbFZhJywgZ2xvYmFsVkEpO1xuXG4gIGlmIChnbG9iYWxWQS5pc09uZVRpbWVWYWxpZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3JyZWN0OiB0cnVlLFxuICAgICAgY29ycmVjdEluZGV4ZXM6IHZhbGlkSW5kZXhlcyxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdW5pcSA9IGdsb2JhbFZBLnZhbGlkSW5kZXhlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG4gICAgaWYgKHVuaXEubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICAgIGxldCB1bmlxdWVVc2VyQW5zd2VycyA9IHVzZXJBbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBwcmVwYXJlU3RyaW5nKGFuc3dlcikpLmZpbHRlcigodiwgaSwgYSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcbiAgICAgIGlmICh1bmlxdWVVc2VyQW5zd2Vycy5sZW5ndGggPT09IHVzZXJBbnN3ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICAgICAgY29ycmVjdEluZGV4ZXM6IHZhbGlkSW5kZXhlcyxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgICBjb3JyZWN0SW5kZXhlczogW10sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29ycmVjdDogZmFsc2UsXG4gICAgICAgIGNvcnJlY3RJbmRleGVzOiB1bmlxLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvcihsZXQgaSA9IDA7IGk8dXNlckFuc3dlcnMubGVuZ3RoOyBpKyspe1xuICAvLyAgIGlmKHZhbGlkYXRlU2ltcGxlVGV4dCh1c2VyQW5zd2Vyc1tpXSwgW3JpZ2h0QW5zd2Vyc1tpXV0pKXtcbiAgLy8gICAgIHZhbGlkSW5kZXhlcy5wdXNoKGkpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGlmICh2YWxpZEluZGV4ZXMubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICBpc0FsbFZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvcnJlY3Q6IGlzQWxsVmFsaWQsXG4gICAgY29ycmVjdEluZGV4ZXM6IHZhbGlkSW5kZXhlcyxcbiAgfVxufVxuXG5cbmNvbnN0IGNvbXBhcmVFYWNoVG9FYWNoID0gKHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyQW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmlnaHRBbnN3ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoY29tcGFyZVR3byh1c2VyQW5zd2Vyc1tpXSwgcmlnaHRBbnN3ZXJzW2pdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuLy8gZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcygnSWBkIGJlZW4gbWFkIGlcImQgSWBkJylcbiIsIlxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRXJyb3JUZXh0ID0gKHJpZ2h0QW5zd2VycykgPT57XG4gIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cImhpbnRzLWFuc3dlcnMtY29udGFpbmVyXCI+XG4gICAgICAke3JpZ2h0QW5zd2Vycy5tYXAoKGFuc3dlcik9PiBgPGRpdiBjbGFzcz1cImhpbnRcIj4ke2Fuc3dlcn08L2Rpdj5gKS5qb2luKCcgJyl9XG4gICAgPC9kaXY+XG4gIGA7XG4gIC8vIHJldHVybiBgcmlnaHQgYW5zd2VyIGFyZSAke3JpZ2h0QW5zd2Vycy5qb2luKCcsICcpfWA7XG59XG5cbmNvbnN0IGNhbGN1bGF0ZVdpZHRoID0gIChhbnN3ZXJzKSA9PntcbiAgbGV0IG1heExlbmd0aCA9IDA7XG4gIGZvcihsZXQgaSA9IDA7IGk8YW5zd2Vycy5sZW5ndGg7IGkrKyl7XG4gICAgaWYoYW5zd2Vyc1tpXS5sZW5ndGggPiBtYXhMZW5ndGgpe1xuICAgICAgbWF4TGVuZ3RoID0gYW5zd2Vyc1tpXS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIGlmKG1heExlbmd0aCA8IDcpe1xuICAgIHJldHVybiA2MDtcbiAgfVxuICBpZihtYXhMZW5ndGggPCAxMCl7XG4gICAgcmV0dXJuIDkwO1xuICB9XG4gIGlmKG1heExlbmd0aCA8IDE4KXtcbiAgICByZXR1cm4gMTUwO1xuICB9XG4gIGlmKG1heExlbmd0aCA8IDI1KXtcbiAgICByZXR1cm4gMjAwO1xuICB9XG4gIHJldHVybiAyMTA7XG59XG5cbmV4cG9ydCBjb25zdCBxdWVzdGlvblRlbXBsYXRlID0gKHF1ZXN0aW9uRGF0YSwgaWQpID0+IHtcbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3RleHQtaW4tYmxhbmsnKXtcbiAgICBjb25zdCBzcGxpdHRlZCA9IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHQuc3BsaXQoL18rLyk7XG4gICAgY29uc3Qgd2lkdGggPSBjYWxjdWxhdGVXaWR0aChxdWVzdGlvbkRhdGEucmlnaHRBbnN3ZXJzKTtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3MgPSBcInF1ZXN0aW9uIGluLWJsYW5rXCIgaWQ9XCIke2lkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uLXRleHRcIj4ke3NwbGl0dGVkLmpvaW4oYCR7YW5zd2VyVGVtcGxhdGVJbkJsYW5rKGFuc3dlclRlbXBsYXRlSW5CbGFuaywgd2lkdGgpfWApfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrLXNpZ25cIj48aSBjbGFzcz1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoaW50LXNpZ25cIj48aSBjbGFzcz1cImZhciBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGludC1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzID0gXCJxdWVzdGlvblwiIGlkPVwiJHtpZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi10ZXh0XCI+JHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxuICAgICAgICAke2Fuc3dlclRlbXBsYXRlKHF1ZXN0aW9uRGF0YSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1zaWduXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGludC1zaWduXCI+PGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlXCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpbnQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgYW5zd2VyVGVtcGxhdGVJbkJsYW5rID0gKHF1ZXN0aW9uRGF0YSwgd2lkdGgpID0+e1xuICByZXR1cm4gYFxuICA8ZGl2IHN0eWxlPVwid2lkdGg6JHt3aWR0aH1weDtcIiBjbGFzcyA9IFwiYW5zd2VyLXRleHQgaW4tYmxhbmtcIj5cbiAgICA8aW5wdXQgY2xhc3MgPSBcImFuc3dlci10ZXh0LWlucHV0IGluLWJsYW5rXCIgLz5cbiAgPC9kaXY+XG5gXG59XG5cbmV4cG9ydCBjb25zdCBhbnN3ZXJUZW1wbGF0ZSA9IChxdWVzdGlvbkRhdGEpID0+e1xuICBpZihxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlID09PSAnc2ltcGxlLXRleHQnIHx8IHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICd0ZXh0LWluLWJsYW5rJyl7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3MgPSBcImFuc3dlci10ZXh0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcyA9IFwiYW5zd2VyLXRleHQtaW5wdXQgXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3ZhcmlhbnRzLXNpbmdsZScpe1xuXG4gICAgcmV0dXJuIGBcbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7cXVlc3Rpb25EYXRhLnZhcmlhbnRzLm1hcCgodmFsdWUsIGluZGV4KT0+YFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH0tJHtpbmRleH1cIlxuICAgICAgICAgICAgICBuYW1lPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiIHZhbHVlPVwiJHt2YWx1ZX1cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH0tJHtpbmRleH1cIj4ke3ZhbHVlfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgKS5qb2luKCcgJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG4gIH1cblxuICBpZihxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlID09PSAndmFyaWFudHMtbXVsdGknKXtcbiAgICByZXR1cm4gYFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtxdWVzdGlvbkRhdGEudmFyaWFudHMubWFwKCh2YWx1ZSwgaW5kZXgpPT5gXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9LSR7aW5kZXh9XCJcbiAgICAgICAgICAgICAgbmFtZT1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIiB2YWx1ZT1cIiR7dmFsdWV9XCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9LSR7aW5kZXh9XCI+JHt2YWx1ZX08L2xhYmVsPlxuICAgICAgICAgIGApLmpvaW4oJyAnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgYDtcbiAgfVxufVxuIiwiXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL1NlY3Rpb24nO1xuaW1wb3J0IHsgUHJvZ3Jlc3NCYXIgfSBmcm9tICcuL1Byb2dyZXNzQmFyJztcbmNsYXNzIFF1aXpDb250cm9sbGVyIHtcblxuICBxdWVzdGlvbnMgPSBbXTtcbiAgY29udmVydGVkUXVlc3Rpb25zID0gW107XG4gIG9sZFF1ZXN0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNlY3Rpb25zID0gW10sIHBhcmVudEVsZW1lbnQsIHRlc3RNb2RlID0gZmFsc2UpIHtcbiAgICB0aGlzLnNlY3Rpb25zID0gc2VjdGlvbnM7XG4gICAgdGhpcy5tYXhTZWN0aW9uTnVtYmVyID0gc2VjdGlvbnMubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnRlc3RNb2RlID0gdGVzdE1vZGVcblxuICAgIGlmICh0aGlzLm1heFNlY3Rpb25OdW1iZXIgPT09IDApIHtcbiAgICAgIHRoaXMuaXNMYXN0U2VjdGlvbiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlck1haW5Db250cm9scygpO1xuICAgIHRoaXMuY29udmVydGVkU2VjdGlvbnMgPSBzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFNlY3Rpb24oc2VjdGlvbiwgdGhpcy5xdWVzdGlvbnNDb250YWluZXIsIHRoaXMucmVuZGVyTmV4dFNlY3Rpb25CdXR0b24sIGluZGV4LCB0ZXN0TW9kZSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGVzdE1vZGUpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzQmFyQ29udGFpbmVyJyksIHNlY3Rpb25zLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5jdXJyZW50U2VjdGlvbiA9IDA7XG4gICAgdGhpcy5jaGFuZ2VTZWN0aW9uKDApO1xuXG4gICAgaWYgKHRlc3RNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlck5leHRTZWN0aW9uQnV0dG9uKClcbiAgICB9XG4gIH1cblxuICBpbml0U2VjdGlvbiA9IChzZWN0aW9uTnVtYmVyKSA9PiB7XG4gICAgdGhpcy5jdXJyZW50U2VjdGlvbiA9IHNlY3Rpb25OdW1iZXI7XG5cbiAgICB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zW3NlY3Rpb25OdW1iZXJdLnJlbmRlclNlY3Rpb24oKTtcblxuICAgIHRoaXMubnVtYmVyVGV4dENvbnRhaW5lci5pbm5lclRleHQgPSBgU2VjdGlvbiAke3NlY3Rpb25OdW1iZXIgKyAxfSBvZiAke3RoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RofWA7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5zZXRTZWN0aW9uKHNlY3Rpb25OdW1iZXIpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogdGhpcy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sIDIwKVxuXG4gIH1cblxuICBjaGFuZ2VTZWN0aW9uID0gKHNlY3Rpb25OdW1iZXIpID0+IHtcbiAgICB0aGlzLnNlY3Rpb25OdW1iZXIgPSBzZWN0aW9uTnVtYmVyO1xuICAgIGlmIChzZWN0aW9uTnVtYmVyIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2VjdGlvbk51bWJlciA+IDApIHtcbiAgICAgIHRoaXMucHJldkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmV2QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKHNlY3Rpb25OdW1iZXIgPiB0aGlzLmN1cnJlbnRTZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5tYXhTZWN0aW9uTnVtYmVyID09PSBzZWN0aW9uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaXNMYXN0U2VjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VjdGlvbk51bWJlciA+IHRoaXMubWF4U2VjdGlvbk51bWJlcikge1xuICAgICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnRTZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jdXJyZW50U2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1t0aGlzLmN1cnJlbnRTZWN0aW9uXS5oaWRlU2VjdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tzZWN0aW9uTnVtYmVyXS5jb21wbGV0ZWQpIHtcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShzZWN0aW9uTnVtYmVyID49IHRoaXMubWF4U2VjdGlvbk51bWJlcikpIHtcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmluaXRTZWN0aW9uKHNlY3Rpb25OdW1iZXIpO1xuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlck5leHRTZWN0aW9uQnV0dG9uKClcbiAgICB9XG4gIH1cblxuICByZW5kZXJNYWluQ29udHJvbHMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBodG1sID0gYFxuICAgIDxkaXYgY2xhc3MgPSBcInF1ZXN0aW9ucy1saXN0XCI+IDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc0JhckNvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxkaXYgaWQ9XCJudW1iZXItY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInByZXYtc2VjdGlvblwiPlByZXYgU2VjdGlvbjwvYnV0dG9uPiBcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cImNoZWNrX2J1dHRvblwiPkNoZWNrIHRoZSBhbnN3ZXJzPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJuZXh0LXNlY3Rpb25cIj5OZXh0IFNlY3Rpb248L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cImVuZC1xdWl6XCI+RW5kIHF1aXo8L2J1dHRvbj4gXG4gICAgPC9kaXY+XG4gICAgYFxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuXG4gICAgdGhpcy5jaGVja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja19idXR0b24nKTtcbiAgICBpZiAodGhpcy50ZXN0TW9kZSkge1xuICAgICAgdGhpcy5jaGVja0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfVxuXG4gICAgdGhpcy5lbmRRdWl6QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1xdWl6Jyk7XG4gICAgdGhpcy5lbmRRdWl6QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB0aGlzLm5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV4dC1zZWN0aW9uJyk7XG4gICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB0aGlzLnByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldi1zZWN0aW9uJyk7XG4gICAgdGhpcy5wcmV2QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB0aGlzLm51bWJlclRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbnVtYmVyLWNvbnRhaW5lcicpO1xuXG4gICAgdGhpcy5jaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY29udmVydGVkU2VjdGlvbnNbdGhpcy5jdXJyZW50U2VjdGlvbl0uY2hlY2tDb3JyZWN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmNoYW5nZVNlY3Rpb24odGhpcy5jdXJyZW50U2VjdGlvbiArIDEpOyB9KTtcbiAgICB0aGlzLnByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hhbmdlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uIC0gMSk7IH0pO1xuXG4gICAgdGhpcy5xdWVzdGlvbnNDb250YWluZXIgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9ucy1saXN0Jyk7XG4gIH1cblxuICByZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmVuZGVyJywgdGhpcy5pc0xhc3RTZWN0aW9uKVxuICAgIGlmICghdGhpcy5pc0xhc3RTZWN0aW9uKSB7XG4gICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kUXVpekJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZW5kUXVpekJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE1vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckVuZE9mVGVzdCgpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbmdyYXRzKCk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXJFbmRPZlRlc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5xdWVzdGlvbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLm51bWJlclRleHRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnByb2dyZXNzQmFyLmhpZGUoKVxuICAgIHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uY2hlY2tDb3JyZWN0KClcbiAgICB9KTtcblxuICAgIGxldCBhbGxRdWVzdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgYWxsUXVlc3Rpb25zID0gWy4uLmFsbFF1ZXN0aW9ucywgLi4udGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnNdO1xuICAgIH1cbiAgICBsZXQgYWxsUXVlc3Rpb25zTGVuZ3RoID0gYWxsUXVlc3Rpb25zLmxlbmd0aCAtIHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoO1xuXG5cbiAgICBsZXQgY29ycmVjdENvdW50ID0gYWxsUXVlc3Rpb25zLmZpbHRlcigocXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBxdWVzdC5yZXN1bHRDb3JyZWN0O1xuICAgIH0pLmxlbmd0aDtcblxuICAgIGNvcnJlY3RDb3VudCA9IGNvcnJlY3RDb3VudCAtIHRoaXMuc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgY29uc29sZS5sb2coYHJlc3VsdDogJHtjb3JyZWN0Q291bnR9IG91dCBvZiAke2FsbFF1ZXN0aW9uc0xlbmd0aH1gKVxuXG4gICAgbGV0IHJlc3VsdExldmVsID0gJ0JFR0lOTkVSIChBMCknXG5cbiAgICBpZiAoY29ycmVjdENvdW50ID49IDcpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ0VMRU1FTlRBUlkgKEExKSdcbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb3VudCA+PSAxNCkge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnUFJFLUlOVEVSTUVESUFURSAoQTIpJ1xuICAgIH1cbiAgICBpZiAoY29ycmVjdENvdW50ID49IDIyKSB7XG4gICAgICByZXN1bHRMZXZlbCA9ICdJTlRFUk1FRElBVEUgKEIxKSdcbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb3VudCA+PSAzMCkge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnVVBQRVIgSU5URVJNRURJQVRFIChCMiknXG4gICAgfVxuICAgIGlmIChjb3JyZWN0Q291bnQgPj0gMzgpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ0FEVkFOQ0VEIChDMSknXG4gICAgfVxuICAgIGlmIChjb3JyZWN0Q291bnQgPj0gNDUpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ1BST0ZJQ0lFTlQgKEMyKSdcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImxhc3QtbWVzc2FnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIFRoZSB0ZXN0IGlzIGNvbXBsZXRlZCFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlIGdvdFwiPlxuICAgICAgICAgIFlvdSBnb3Q6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIDxiPiR7Y29ycmVjdENvdW50fTwvYj4gY29ycmVjdCBhbnN3ZXJzIG91dCBvZiA8Yj4ke2FsbFF1ZXN0aW9uc0xlbmd0aH08L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIFlvdXIgbGV2ZWw6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIDxiPiR7cmVzdWx0TGV2ZWx9PC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3Qgb2xkTGFzdE1lc3NhZ2UgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtbWVzc2FnZScpO1xuICAgIGlmIChvbGRMYXN0TWVzc2FnZSkge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG9sZExhc3RNZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgfVxuXG4gIHJlbmRlckNvbmdyYXRzID0gKCkgPT4ge1xuICAgIHRoaXMucXVlc3Rpb25zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5udW1iZXJUZXh0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZXQgYWxsUXVlc3Rpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBhbGxRdWVzdGlvbnNMZW5ndGggKz0gdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnMubGVuZ3RoO1xuICAgICAgYWxsUXVlc3Rpb25zID0gWy4uLmFsbFF1ZXN0aW9ucywgLi4udGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnNdO1xuICAgIH1cbiAgICBsZXQgYWxsUXVlc3Rpb25zTGVuZ3RoID0gYWxsUXVlc3Rpb25zLmxlbmd0aCAtIHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoO1xuXG5cbiAgICBsZXQgZmlyc3RUaW1lQ29ycmVjdENvdW50ID0gYWxsUXVlc3Rpb25zLmZpbHRlcigocXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBxdWVzdC5maXJzdFRpbWVDb3JyZWN0O1xuICAgIH0pLmxlbmd0aDtcblxuICAgIGZpcnN0VGltZUNvcnJlY3RDb3VudCA9IGZpcnN0VGltZUNvcnJlY3RDb3VudCAtIHRoaXMuc2VjdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoZmlyc3RUaW1lQ29ycmVjdENvdW50IC8gYWxsUXVlc3Rpb25zTGVuZ3RoKSAqIDEwMDtcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibGFzdC1tZXNzYWdlXCI+XG4gICAgICAgIEdyYXRzLCB5b3UgaGF2ZSBjb21wbGV0ZWQgdGhlIHRlc3QhXG4gICAgICAgICR7TWF0aC5yb3VuZChwZXJjZW50YWdlKX0lIGNvcnJlY3QhXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IG9sZExhc3RNZXNzYWdlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKTtcbiAgICBpZiAob2xkTGFzdE1lc3NhZ2UpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvbGRMYXN0TWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXpDb250cm9sbGVyO1xuIiwiaW1wb3J0IHtjcmVhdGVRdWVzdGlvbiwgVGV4dEJlZm9yZVF1ZXN0aW9ufSBmcm9tICcuLi9RdWVzdGlvbi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ue1xuICBxdWVzdGlvbnMgPSBbXTtcbiAgY29udmVydGVkUXVlc3Rpb25zID0gW107XG4gIHJlbmRlcmVkID0gZmFsc2U7XG4gIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHNlY3Rpb25EYXRhLCBjb250YWluZXIsIGFsbFJpZ2h0Q2FsbEJhY2ssIG51bWJlciwgdGVzdE1vZGU9ZmFsc2Upe1xuICAgIHRoaXMuaGVhZGVyID0gc2VjdGlvbkRhdGEuaGVhZGVyO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucXVlc3Rpb25zID0gc2VjdGlvbkRhdGEucXVlc3Rpb25zO1xuICAgIHRoaXMuYWxsUmlnaHRDYWxsQmFjayA9IGFsbFJpZ2h0Q2FsbEJhY2s7XG4gICAgdGhpcy50ZXN0TW9kZSA9IHRlc3RNb2RlXG4gICAgaWYodGVzdE1vZGUpe1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaGlkZVNlY3Rpb24oKXtcbiAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGZpbmRBbGxGYWxzZSA9ICgpID0+e1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXMpPT4gIXF1ZXMucmVzdWx0Q29ycmVjdCk7XG4gIH1cblxuICBjaGVja0NvcnJlY3QgPSAoKSA9PntcbiAgICAvLyBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAvLyAgIHJldHVyblxuICAgIC8vIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnNbaV0uY2hlY2soZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBmYWxzZVZhbHVlcyA9IHRoaXMuZmluZEFsbEZhbHNlKCk7XG4gICAgaWYoIWZhbHNlVmFsdWVzLmxlbmd0aCl7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFsbFJpZ2h0Q2FsbEJhY2soKTtcbiAgICAgIC8vdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbigpO1xuICAgIH1cblxuICB9XG4gIFxuICBxdWVzdGlvbkNhbGxiYWNrID0gKGlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCkgPT4ge1xuICAgIGlmKGlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCl7XG4gICAgICBjb25zdCBmYWxzZVZhbHVlcyA9ICB0aGlzLmZpbmRBbGxGYWxzZSgpO1xuICAgICAgaWYoIWZhbHNlVmFsdWVzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuY2hlY2tDb3JyZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgXG4gIHJlbmRlclF1aXogPSAoKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9uc1tpXS5yZW5kZXJRdWVzdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNlY3Rpb24gPSAoKSA9PntcbiAgICBpZih0aGlzLnJlbmRlcmVkICYmIHRoaXMuc2VjdGlvbkNvbnRhaW5lcil7XG4gICAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uLSR7dGhpcy5udW1iZXJ9XCI+IDwvZGl2PlxuICAgIGBcbiAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5udW1iZXJ9YCk7XG4gICAgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnMgPSBbbmV3IFRleHRCZWZvcmVRdWVzdGlvbih0aGlzLmhlYWRlciwgdGhpcy5zZWN0aW9uQ29udGFpbmVyKSwgLi4udGhpcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbik9PntcbiAgICAgIHJldHVybiBjcmVhdGVRdWVzdGlvbihxdWVzdGlvbiwgdGhpcy5zZWN0aW9uQ29udGFpbmVyLCB0aGlzLnF1ZXN0aW9uQ2FsbGJhY2ssIHRoaXMudGVzdE1vZGUpO1xuICAgIH0pXTtcbiAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVuZGVyUXVpeigpO1xuICAgIC8vIHNlY3Rpb25EYXRhLnF1ZXN0aW9ucztcbiAgfVxufSIsImZ1bmN0aW9uIG1ha2VpZChsZW5ndGgpIHtcbiAgdmFyIHJlc3VsdCAgICAgICAgICAgPSAnJztcbiAgdmFyIGNoYXJhY3RlcnMgICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+e1xuICByZXR1cm4gbWFrZWlkKDEwKTtcbn0iLCJpbXBvcnQgUXVpekNvbnRyb2xsZXIgZnJvbSAnLi9RdWl6Q29udHJvbGxlcic7XG5cbi8qXG5tb2R1bGVzOlxuICAxLiBtb2R1bGUgdG8gcGFyc2UgZGF0YSBmcm9tIGNzdiBvciBldGNcbiAgMi4gbW9kdWxlIHRvIHNob3cgcXVpeiBkYXRhLCBwYWdpbmF0aW9uLCBldGMuXG4gIDMuIG1vZHVsZSB0byBjaGVjayBhbnN3ZXIuXG4gIDQuIG1vZHVsZSB0byBzZW5kIGRhdGEgdG8gc2VydmVyIChvciBzbXRoIGxpa2UgdGhpcylcblxuKi9cblxuLy8gY29uc3QgdGVzdFF1ZXNpb25zID0gW1xuLy8gICB7XG4vLyAgICAgcXVlc3Rpb25UeXBlOiAnc2ltcGxlLXRleHQnLFxuLy8gICAgIHF1ZXN0aW9uVGV4dDogJ0kgd2VudCBvdXQgaW4gdGhlIGNvbGQgd2l0aG91dCBhIGNvYXQuIChzaWxseSknLFxuLy8gICAgIHJpZ2h0QW5zd2VyczogWydJdCB3YXMgc2lsbHkgb2YgbWUgdG8gZ28gb3V0IGluIHRoZSBjb2xkIHdpdGhvdXQgYSBjb2F0J10sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICd0ZXh0LWluLWJsYW5rJyxcbi8vICAgICBxdWVzdGlvblRleHQ6ICdUaGVyZSBhcmUgbm90IG1hbnkgdGhpbmdzIHBlb3BsZSB3aWxsIG5vdCBkbyBfX19fIGZlYXIuJyxcbi8vICAgICByaWdodEFuc3dlcnM6IFsnb3V0IG9mJ10sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICd2YXJpYW50cy1zaW5nbGUnLFxuLy8gICAgIHF1ZXN0aW9uVGV4dDogJ0kgbGl2ZSBpbiBhIHZlcnkgc21hbGwgdmlsbGFnZS4gWW91IHByb2JhYmx5IHdvbuKAmXQgZmluZCBpdCBfXyB5b3VyIG1hcC4nLFxuLy8gICAgIHJpZ2h0QW5zd2VyczogWydvbiddLFxuLy8gICAgIHZhcmlhbnRzOiBbJ2luJywgJ29uJ10sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICd2YXJpYW50cy1tdWx0aScsXG4vLyAgICAgcXVlc3Rpb25UZXh0OiAndGVzdCBtdWx0aSB2YXJpYW50Jyxcbi8vICAgICByaWdodEFuc3dlcnM6IFsnb24nLCAnaW4nXSxcbi8vICAgICB2YXJpYW50czogWydpbicsICdvbiddLFxuLy8gICB9XG4vLyBdIFxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcblxuICAvLyBpbmplY3Qgc3R5bGVzIHRvIHBhZ2VcbiAgY29uc3QgYXBwZW5kU3R5bGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjc3MgPSByZXF1aXJlKCcuL3N0eWxlcy9pbmRleC5zY3NzJyk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgICBjb25zdCBzdHlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbS5pbm5lckhUTUwgPSBzY3NzO1xuXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNzQ1YWMzOTRhLmpzXCI7XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbSk7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG4gIFxuICBhcHBlbmRTdHlsZXMoKTtcblxuICBjb25zdCBodG1sID0gYDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInN0YXJ0XCI+U3RhcnQ8L2J1dHRvbj5gXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWl6Jyk7XG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICBjb25zdCBidXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XG5cbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgIG5ldyBRdWl6Q29udHJvbGxlcih3aW5kb3cudGVzdERhdGEsIGNvbnRhaW5lciwgd2luZG93Ll9faXNUZXN0TW9kZV9fIHx8IGZhbHNlKTtcbiAgfSk7XG5cblxuXG59KTtcblxuIiwiIG1vZHVsZS5leHBvcnRzID0gZGVjb2RlVVJJQ29tcG9uZW50KFwiYm9keSU3QmJhY2tncm91bmQtY29sb3IlM0ElMjNlZmVlZTklM0JiYWNrZ3JvdW5kLWltYWdlJTNBdXJsKGh0dHBzJTNBJTJGJTJGdWNhcmVjZG4uY29tJTJGMDQzYTIwYmUtNjM1Yy00NjIyLTgxZjEtNTA0NjE1NWU0N2E4JTJGKSUzQmJhY2tncm91bmQtYXR0YWNobWVudCUzQWZpeGVkJTdEJTIzcXVpeiU3QmRpc3BsYXklM0FmbGV4JTNCbWF4LXdpZHRoJTNBODAwcHglM0JtaW4td2lkdGglM0EzMDBweCUzQm1hcmdpbiUzQTAlMjBhdXRvJTNCZmxleC1kaXJlY3Rpb24lM0Fjb2x1bW4lM0Jmb250LWZhbWlseSUzQSUyMk9wZW4lMjBTYW5zJTIyJTJDJTIwc2Fucy1zZXJpZiUzQmZvbnQtc2l6ZSUzQTE2cHglM0JtYXJnaW4tdG9wJTNBNDBweCUzQm1hcmdpbi1ib3R0b20lM0E0MHB4JTdELnRleHQtcXVlc3Rpb24taXRhbGljJTdCZm9udC13ZWlnaHQlM0E0MDAlN0QucXVlc3Rpb24lN0Jwb3NpdGlvbiUzQXJlbGF0aXZlJTNCYmFja2dyb3VuZC1jb2xvciUzQSUyM2ZmZiUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTNCYm9yZGVyLXJhZGl1cyUzQTEwcHglM0JtYXJnaW4tYm90dG9tJTNBMTJweCUzQnBhZGRpbmclM0EyNHB4JTNCcGFnZS1icmVhay1pbnNpZGUlM0Fhdm9pZCUzQm92ZXJmbG93JTNBaGlkZGVuJTdELnF1ZXN0aW9uLnNlY3Rpb24taGVhZGVyJTdCZm9udC1zaXplJTNBMTlweCUzQmZvbnQtd2VpZ2h0JTNBYm9sZCU3RC5oaW50LWNvbnRhaW5lciU3QnBvc2l0aW9uJTNBYWJzb2x1dGUlM0JkaXNwbGF5JTNBbm9uZSUzQmJhY2tncm91bmQtY29sb3IlM0F3aGl0ZSUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzNWQ2MzZmJTNCd2lkdGglM0E1MCUyNSUzQmhlaWdodCUzQTcwJTI1JTNCYm9yZGVyLXJhZGl1cyUzQTVweCUzQnBhZGRpbmclM0E1cHglM0Jjb2xvciUzQSUyMzI4YTc0NSUzQnRvcCUzQTVweCUzQnJpZ2h0JTNBMy42JTI1JTNCYW5pbWF0aW9uJTNBaGludCUyMDAuM3MlMjBlYXNlLWluLW91dCUyMDElN0QubGFzdC1tZXNzYWdlJTdCcGFkZGluZyUzQTE2cHglM0Jmb250LXNpemUlM0EyNXB4JTdELmxhc3QtbWVzc2FnZSUyMC5tZXNzYWdlJTdCbWFyZ2luLWJvdHRvbSUzQTIwcHglM0Jmb250LXNpemUlM0EyNXB4JTNCdGV4dC1hbGlnbiUzQWNlbnRlciU3RC5sYXN0LW1lc3NhZ2UlMjAubWVzc2FnZS5nb3QlN0JtYXJnaW4tYm90dG9tJTNBNXB4JTdEJTQwa2V5ZnJhbWVzJTIwaGludCU3QjAlMjUlN0JyaWdodCUzQS03MCUyNSU3RDk5JTI1JTdCcmlnaHQlM0EzLjYlMjUlN0QlN0QucXVlc3Rpb24lMjAuY2hlY2stc2lnbiU3QmN1cnNvciUzQXBvaW50ZXIlM0Jjb2xvciUzQSUyMzI4YTc0NSUzQnBvc2l0aW9uJTNBYWJzb2x1dGUlM0Jib3R0b20lM0EwLjV2dyUzQnJpZ2h0JTNBMC42dnclM0Jmb250LXNpemUlM0EyMHB4JTNCd2lkdGglM0EyMHB4JTNCaGVpZ2h0JTNBMjBweCU3RC5xdWVzdGlvbiUyMC5oaW50LXNpZ24lN0JjdXJzb3IlM0Fwb2ludGVyJTNCY29sb3IlM0FncmV5JTNCcG9zaXRpb24lM0FhYnNvbHV0ZSUzQnRvcCUzQTAuNXZ3JTNCcmlnaHQlM0EwLjZ2dyUzQmZvbnQtc2l6ZSUzQTIwcHglN0QucXVlc3Rpb24uY29ycmVjdCU3QmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzMjhhNzQ1JTdELnF1ZXN0aW9uLmNvcnJlY3QlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzI4YTc0NSUzQmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDQwJTJDMTY3JTJDNjklMkMwLjIpJTdELnF1ZXN0aW9uLmluY29ycmVjdCU3QmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGMzNTQ1JTNCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoMjIwJTJDNTMlMkM2OSUyQzAuMiklN0QucXVlc3Rpb24uaW5jb3JyZWN0JTIwLmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rJTdCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoMjIwJTJDNTMlMkM2OSUyQzAuNSklN0QucXVlc3Rpb24lMjAuYW5zd2VyLXRleHQtaW5wdXQuaW4tYmxhbmsuaW5jb3JyZWN0JTdCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoMjIwJTJDNTMlMkM2OSUyQzAuNSklN0RkaXYucXVlc3Rpb24uY29ycmVjdCUyMC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuayU3QmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDQwJTJDMTY3JTJDNjklMkMwLjUpJTdEZGl2LnF1ZXN0aW9uJTIwLmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rLmNvcnJlY3QlN0JiYWNrZ3JvdW5kLWNvbG9yJTNBcmdiYSg0MCUyQzE2NyUyQzY5JTJDMC41KSU3RC5jaGVja2JveC1jb250YWluZXIlN0JtYXJnaW4tYm90dG9tJTNBMTZweCU3RC5jaGVja2JveC1jb250YWluZXIlMjBpbnB1dCU3QmN1cnNvciUzQXBvaW50ZXIlN0QuY2hlY2tib3gtY29udGFpbmVyJTIwbGFiZWwlN0Jwb3NpdGlvbiUzQXJlbGF0aXZlJTNCYm90dG9tJTNBMXB4JTNCcGFkZGluZy1sZWZ0JTNBNHB4JTNCY3Vyc29yJTNBcG9pbnRlciU3RC5xdWVzdGlvbi10ZXh0JTdCZm9udC1zaXplJTNBMTZweCUzQmZvbnQtd2VpZ2h0JTNBNTAwJTNCbGV0dGVyLXNwYWNpbmclM0EuMXB4JTNCbGluZS1oZWlnaHQlM0EyNHB4JTNCY29sb3IlM0ElMjMyMDIxMjQlM0Jmb250LXdlaWdodCUzQTQwMCUzQndpZHRoJTNBMTAwJTI1JTNCd29yZC1icmVhayUzQWJyZWFrLXdvcmQlM0JtYXJnaW4tYm90dG9tJTNBMTZweCU3RC5xdWVzdGlvbi5pbi1ibGFuayUyMC5xdWVzdGlvbi10ZXh0JTdCbWFyZ2luLWJvdHRvbSUzQTBweCU3RC5xdWVzdGlvbi5pbmNvcnJlY3QlMjAuY2hlY2stc2lnbiU3QmNvbG9yJTNBJTIzZGMzNTQ1JTdELmFuc3dlciU3QmRpc3BsYXklM0FmbGV4JTNCZmxleC1kaXJlY3Rpb24lM0Fjb2x1bW4lN0QuYW5zd2VyLXRleHQlN0J3aWR0aCUzQTYwJTI1JTdELmFuc3dlci10ZXh0LmluLWJsYW5rJTdCZGlzcGxheSUzQWlubGluZS1ibG9jayUzQndpZHRoJTNBYXV0byUzQm1hcmdpbi1yaWdodCUzQTVweCU3RC5hbnN3ZXItdGV4dC1pbnB1dCU3QmJhY2tncm91bmQlM0F0cmFuc3BhcmVudCUzQnBhZGRpbmclM0EycHglM0Jib3JkZXIlM0EwJTNCYm9yZGVyLWJvdHRvbSUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTNCd2lkdGglM0ExMDAlMjUlN0QuYW5zd2VyLXRleHQtaW5wdXQuaW4tYmxhbmslN0JwYWRkaW5nJTNBMnB4JTNCYm9yZGVyJTNBMCUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTNCd2lkdGglM0ExMDAlMjUlN0QuYW5zd2VyLXRleHQtaW5wdXQlM0Fmb2N1cyU3Qm91dGxpbmUlM0Fub25lJTNCYm9yZGVyLWJvdHRvbSUzQTFweCUyMHNvbGlkJTIwJTIzNWQ2MzZmJTdELmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rJTNBZm9jdXMlN0JvdXRsaW5lJTNBbm9uZSUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTdELmVycm9yLXRleHQlN0Jjb2xvciUzQXJlZCUzQmZvbnQtc2l6ZSUzQTEycHglM0J3aWR0aCUzQTU1JTI1JTNCcGFkZGluZy10b3AlM0ExMHB4JTdELmJ1dHRvbiU3QndpZHRoJTNBMTgwcHglM0JoZWlnaHQlM0E0MHB4JTNCYm9yZGVyLXJhZGl1cyUzQTEwcHglM0Jib3JkZXIlM0Fub25lJTNCYmFja2dyb3VuZC1jb2xvciUzQXdoaXRlJTNCY3Vyc29yJTNBcG9pbnRlciU3RCUyM3N0YXJ0JTdCZm9udC1zaXplJTNBMjBweCUzQndpZHRoJTNBMjAwcHglM0JoZWlnaHQlM0E1NXB4JTNCYm9yZGVyLXJhZGl1cyUzQTVweCUzQmFsaWduLXNlbGYlM0FjZW50ZXIlM0JiYWNrZ3JvdW5kLWNvbG9yJTNBdHJhbnNwYXJlbnQlM0JiYWNrZ3JvdW5kLWltYWdlJTNBdXJsKCUyMmRhdGElM0FpbWFnZSUyRnN2ZyUyQnhtbCUyQyUyNTNjc3ZnJTIwd2lkdGglM0QnMTAwJTI1MjUnJTIwaGVpZ2h0JTNEJzEwMCUyNTI1JyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjUzZSUyNTNjcmVjdCUyMHdpZHRoJTNEJzEwMCUyNTI1JyUyMGhlaWdodCUzRCcxMDAlMjUyNSclMjBmaWxsJTNEJ25vbmUnJTIwc3Ryb2tlJTNEJyUyNTIzMzMzJyUyMHN0cm9rZS13aWR0aCUzRCc2JyUyMHN0cm9rZS1kYXNoYXJyYXklM0QnMSUyNTJjJTIwOSclMjBzdHJva2UtZGFzaG9mZnNldCUzRCc0NyclMjBzdHJva2UtbGluZWNhcCUzRCdzcXVhcmUnJTJGJTI1M2UlMjUzYyUyRnN2ZyUyNTNlJTIyKSU3RC5idXR0b24lM0Fmb2N1cyU3Qm91dGxpbmUlM0Fub25lJTdELmJ1dHRvbiUzQWFjdGl2ZSU3QmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzNWQ2MzZmJTdELmJ1dHRvbi1jb250YWluZXIlN0JkaXNwbGF5JTNBZmxleCUzQmp1c3RpZnktY29udGVudCUzQXNwYWNlLWFyb3VuZCU3RCU0MG1lZGlhJTIwKG1heC13aWR0aCUzQSUyMDYwMHB4KSU3Qi5hbnN3ZXItdGV4dCU3QndpZHRoJTNBOTAlMjUlN0QucXVlc3Rpb24lMjAuY2hlY2stc2lnbiU3QnJpZ2h0JTNBMzBweCUzQmZvbnQtc2l6ZSUzQTI1cHglM0Jib3R0b20lM0EzdnclN0QucXVlc3Rpb24lMjAuaGludC1zaWduJTdCcmlnaHQlM0EzMHB4JTNCZm9udC1zaXplJTNBMjVweCUzQmJvdHRvbSUzQTN2dyU3RC5xdWVzdGlvbi5pbi1ibGFuayUyMC5xdWVzdGlvbi10ZXh0JTdCbWFyZ2luLWJvdHRvbSUzQTEycHglN0QlN0QlNDBtZWRpYSUyMChtYXgtd2lkdGglM0ElMjA1MDBweCklN0IucXVlc3Rpb24lN0JwYWRkaW5nLXJpZ2h0JTNBNDVweCU3RC5xdWVzdGlvbiUyMC5jaGVjay1zaWduJTdCcmlnaHQlM0EyMHB4JTNCZm9udC1zaXplJTNBMjJweCU3RC5xdWVzdGlvbiUyMC5oaW50LXNpZ24lN0JyaWdodCUzQTIwcHglM0Jmb250LXNpemUlM0EyMnB4JTdELmJ1dHRvbiU3QndpZHRoJTNBMTMwcHglM0JoZWlnaHQlM0E0MHB4JTNCZm9udC1zaXplJTNBMTJweCU3RCU3RC5wcm9ncmVzc0VsZW1CRyU3QmhlaWdodCUzQTI1cHglM0JkaXNwbGF5JTNBZmxleCU3RC5wcm9ncmVzc0VsZW1CRyUyMC5wcm9ncmVzc0VsZW0lN0J3aWR0aCUzQTBweCUzQmhlaWdodCUzQTI1cHglM0JiYWNrZ3JvdW5kLWNvbG9yJTNBJTIzMjgyODI4JTNCdHJhbnNpdGlvbiUzQXdpZHRoJTIwMC40cyUyQyUyMGJhY2tncm91bmQtY29sb3IlMjAwLjRzJTNCbWFyZ2luLWxlZnQlM0E1cHglN0QucHJvZ3Jlc3NFbGVtQkclMjAucHJvZ3Jlc3NFbGVtJTNBZmlyc3QtY2hpbGQlN0Jib3JkZXItcmFkaXVzJTNBMTBweCUyMDBweCUyMDBweCUyMDEwcHglN0QucHJvZ3Jlc3NFbGVtQkclMjAucHJvZ3Jlc3NFbGVtJTNBbGFzdC1jaGlsZCU3QmJvcmRlci1yYWRpdXMlM0EwcHglMjAxMHB4JTIwMTBweCUyMDBweCU3RC5wcm9ncmVzc0VsZW1CRyUyMC5wcm9ncmVzc0VsZW1MYXN0JTdCd2lkdGglM0EwcHglM0JoZWlnaHQlM0EyNXB4JTNCYmFja2dyb3VuZC1jb2xvciUzQWdyYXklN0QlMjNudW1iZXItY29udGFpbmVyJTdCbWFyZ2luLXRvcCUzQTVweCUzQm1hcmdpbi1sZWZ0JTNBNXB4JTdEJTBBXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=