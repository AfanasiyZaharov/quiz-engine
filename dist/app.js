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
/* harmony import */ var _utils_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_utils/Storage */ "./src/_utils/Storage.js");
/* harmony import */ var _utils_uid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_utils/uid */ "./src/_utils/uid.js");
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates */ "./src/Question/templates.js");




class IQuestion {
  constructor(questionData, parentElem, checkCallback) {
    var _this = this;
    let testMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let sectionIndex = arguments.length > 4 ? arguments[4] : undefined;
    let questionIndex = arguments.length > 5 ? arguments[5] : undefined;
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
        const html = Object(_templates__WEBPACK_IMPORTED_MODULE_3__["validateErrorText"])(rightAnswers);
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
    this.id = `id-${Object(_utils_uid__WEBPACK_IMPORTED_MODULE_2__["stringToHash"])(`${sectionIndex}-${questionIndex}`)}`;
    this.sectionIndex = sectionIndex;
    this.questionIndex = questionIndex;
    this.resultCorrect = false;
    this.checkInitialized = false;
    this.firstTimeCorrect = false;
    this.input = null;
    this.checkCallback = checkCallback;
    this.testMode = testMode;
  }
  renderQuestion() {
    let selectedAnswer;
    if (this.testMode) {
      selectedAnswer = _utils_Storage__WEBPACK_IMPORTED_MODULE_1__["Storage"].read(this.sectionIndex, this.questionIndex);
    }
    const html = this.questionTemplate(this.questionData, this.id, selectedAnswer);
    this.parentElem.insertAdjacentHTML('beforeend', html);
    const mainElement = this.parentElem.querySelector(`#${this.id}`);
    this.mainElement = mainElement;
    this.input = this.mainElement.querySelector('input');
    this.hintButton = this.mainElement.querySelector('.hint-sign');
    this.hintButton.style.display = 'none';
    this.hintContainer = this.mainElement.querySelector('.hint-container');
    this.checkSignContainer = this.mainElement.querySelector('.check-sign');
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
/* harmony import */ var _utils_Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_utils/Storage */ "./src/_utils/Storage.js");





class SingleVariantQuestion extends _IQuestion__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "questionTemplate", function () {
      return Object(_templates__WEBPACK_IMPORTED_MODULE_1__["questionTemplate"])(...arguments);
    });
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "changeListener", e => {
      if (this.testMode) {
        const selected = this.mainElement.querySelector(`input[name="${this.questionData.questionText}"]:checked`);
        _utils_Storage__WEBPACK_IMPORTED_MODULE_4__["Storage"].write(this.sectionIndex, this.questionIndex, selected ? selected.value : undefined);
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
  let sectionIndex = arguments.length > 4 ? arguments[4] : undefined;
  let questionIndex = arguments.length > 5 ? arguments[5] : undefined;
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
      return new _SingleVariants__WEBPACK_IMPORTED_MODULE_4__["default"](questionData, parentElem, callback, testMode, sectionIndex, questionIndex);
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
const questionTemplate = (questionData, id, alreadyWrittenAnswer) => {
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
        ${answerTemplate(questionData, id, alreadyWrittenAnswer)}
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
const answerTemplate = (questionData, id, alreadyWrittenAnswer) => {
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
            <input ${alreadyWrittenAnswer === value ? 'checked' : ''} type="radio" id="${questionData.questionText}-${index}-${id}"
              name="${questionData.questionText}" value="${value}" />
            <label for="${questionData.questionText}-${index}-${id}">${value}</label>
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
      this.convertedQuestions = [new _Question_IQuestion__WEBPACK_IMPORTED_MODULE_1__["TextBeforeQuestion"](this.header, this.sectionContainer), ...this.questions.map((question, index) => {
        return Object(_Question_IQuestion__WEBPACK_IMPORTED_MODULE_1__["createQuestion"])(question, this.sectionContainer, this.questionCallback, this.testMode, this.number, index);
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

/***/ "./src/_utils/Storage.js":
/*!*******************************!*\
  !*** ./src/_utils/Storage.js ***!
  \*******************************/
/*! exports provided: Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
class StorageManager {
  constructor() {
    this.storageKey = 'vbw-test-saved';
    // Initialize the storage if it doesn't exist
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify({}));
    }
  }

  // Write data to the local storage with sectionIndex and questionIndex
  write(sectionIndex, questionIndex, data) {
    const storageData = JSON.parse(localStorage.getItem(this.storageKey));
    if (!storageData[sectionIndex]) {
      storageData[sectionIndex] = {};
    }
    storageData[sectionIndex][questionIndex] = data;
    localStorage.setItem(this.storageKey, JSON.stringify(storageData));
  }

  // Read specific data from the local storage using sectionIndex and questionIndex
  read(sectionIndex, questionIndex) {
    const storageData = JSON.parse(localStorage.getItem(this.storageKey));
    if (storageData[sectionIndex] && storageData[sectionIndex][questionIndex]) {
      return storageData[sectionIndex][questionIndex];
    } else {
      return null;
    }
  }

  // Read all data from the local storage in a matrix format
  readAll() {
    const storageData = JSON.parse(localStorage.getItem(this.storageKey));
    return storageData;
  }
}
const Storage = new StorageManager();

/***/ }),

/***/ "./src/_utils/uid.js":
/*!***************************!*\
  !*** ./src/_utils/uid.js ***!
  \***************************/
/*! exports provided: default, stringToHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToHash", function() { return stringToHash; });
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
function stringToHash(string) {
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

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
  const html = `
    <div id="start-elem" class="start-text">
      <div class="start-text-elem">English level test</div>
      <div class="start-text-elem">50 questions</div>
    </div>
  
  <button class="button" id="start">Start</button>`;
  const container = document.querySelector('#quiz');
  container.insertAdjacentHTML('beforeend', html);
  const button = container.querySelector('#start');
  const elem = container.querySelector('#start-elem');
  button.addEventListener('click', () => {
    container.removeChild(button);
    container.removeChild(elem);
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

 module.exports = decodeURIComponent("body%7Bbackground-color%3A%23efeee9%3Bbackground-image%3Aurl(%22https%3A%2F%2Fucarecdn.com%2F6cad0d8f-4ac1-47a8-aa26-6fc14b6b6d56%2F%22)%3Bbackground-attachment%3Afixed%3Bbackground-position%3Acenter%7D%40media%20screen%20and%20(min-aspect-ratio%3A%201.2)%7Bbody%7Bbackground-image%3Aurl(%22https%3A%2F%2Fucarecdn.com%2F1442c086-f2b8-4ae5-9867-3198b758587f%2F%22)%7D%7D%23quiz%7Bdisplay%3Aflex%3Bmax-width%3A800px%3Bmin-width%3A300px%3Bmargin%3A0%20auto%3Bflex-direction%3Acolumn%3Bfont-family%3A%22Open%20Sans%22%2C%20sans-serif%3Bfont-size%3A16px%3Bmargin-top%3A40px%3Bmargin-bottom%3A40px%7D.text-question-italic%7Bfont-weight%3A400%7D.question%7Bposition%3Arelative%3Bbackground-color%3A%23fff%3Bborder%3A1px%20solid%20%23dadce0%3Bborder-radius%3A10px%3Bmargin-bottom%3A12px%3Bpadding%3A24px%3Bpage-break-inside%3Aavoid%3Boverflow%3Ahidden%7D.question.section-header%7Bfont-size%3A19px%3Bfont-weight%3Abold%7D.hint-container%7Bposition%3Aabsolute%3Bdisplay%3Anone%3Bbackground-color%3Awhite%3Bborder%3A1px%20solid%20%235d636f%3Bwidth%3A50%25%3Bheight%3A70%25%3Bborder-radius%3A5px%3Bpadding%3A5px%3Bcolor%3A%2328a745%3Btop%3A5px%3Bright%3A3.6%25%3Banimation%3Ahint%200.3s%20ease-in-out%201%7D.last-message%7Bpadding%3A16px%3Bfont-size%3A25px%7D.last-message%20.message%7Bmargin-bottom%3A20px%3Bfont-size%3A25px%3Btext-align%3Acenter%7D.last-message%20.message.got%7Bmargin-bottom%3A5px%7D%40keyframes%20hint%7B0%25%7Bright%3A-70%25%7D99%25%7Bright%3A3.6%25%7D%7D.question%20.check-sign%7Bcursor%3Apointer%3Bcolor%3A%2328a745%3Bposition%3Aabsolute%3Bbottom%3A0.5vw%3Bright%3A0.6vw%3Bfont-size%3A20px%3Bwidth%3A20px%3Bheight%3A20px%7D.question%20.hint-sign%7Bcursor%3Apointer%3Bcolor%3Agrey%3Bposition%3Aabsolute%3Btop%3A0.5vw%3Bright%3A0.6vw%3Bfont-size%3A20px%7D.question.correct%7Bborder%3A1px%20solid%20%2328a745%7D.question.correct%7Bborder%3A1px%20solid%20%2328a745%3Bbackground-color%3Argba(40%2C167%2C69%2C0.2)%7D.question.incorrect%7Bborder%3A1px%20solid%20%23dc3545%3Bbackground-color%3Argba(220%2C53%2C69%2C0.2)%7D.question.incorrect%20.answer-text-input.in-blank%7Bbackground-color%3Argba(220%2C53%2C69%2C0.5)%7D.question%20.answer-text-input.in-blank.incorrect%7Bbackground-color%3Argba(220%2C53%2C69%2C0.5)%7Ddiv.question.correct%20.answer-text-input.in-blank%7Bbackground-color%3Argba(40%2C167%2C69%2C0.5)%7Ddiv.question%20.answer-text-input.in-blank.correct%7Bbackground-color%3Argba(40%2C167%2C69%2C0.5)%7D.checkbox-container%7Bmargin-bottom%3A16px%7D.checkbox-container%20input%7Bcursor%3Apointer%7D.checkbox-container%20label%7Bposition%3Arelative%3Bbottom%3A1px%3Bpadding-left%3A4px%3Bcursor%3Apointer%7D.question-text%7Bfont-size%3A16px%3Bfont-weight%3A500%3Bletter-spacing%3A.1px%3Bline-height%3A24px%3Bcolor%3A%23202124%3Bfont-weight%3A400%3Bwidth%3A100%25%3Bword-break%3Abreak-word%3Bmargin-bottom%3A16px%7D.question.in-blank%20.question-text%7Bmargin-bottom%3A0px%7D.question.incorrect%20.check-sign%7Bcolor%3A%23dc3545%7D.answer%7Bdisplay%3Aflex%3Bflex-direction%3Acolumn%7D.answer-text%7Bwidth%3A60%25%7D.answer-text.in-blank%7Bdisplay%3Ainline-block%3Bwidth%3Aauto%3Bmargin-right%3A5px%7D.answer-text-input%7Bbackground%3Atransparent%3Bpadding%3A2px%3Bborder%3A0%3Bborder-bottom%3A1px%20solid%20%23dadce0%3Bwidth%3A100%25%7D.answer-text-input.in-blank%7Bpadding%3A2px%3Bborder%3A0%3Bborder%3A1px%20solid%20%23dadce0%3Bwidth%3A100%25%7D.answer-text-input%3Afocus%7Boutline%3Anone%3Bborder-bottom%3A1px%20solid%20%235d636f%7D.answer-text-input.in-blank%3Afocus%7Boutline%3Anone%3Bborder%3A1px%20solid%20%23dadce0%7D.error-text%7Bcolor%3Ared%3Bfont-size%3A12px%3Bwidth%3A55%25%3Bpadding-top%3A10px%7D.button%7Bwidth%3A180px%3Bheight%3A40px%3Bborder-radius%3A10px%3Bborder%3Anone%3Bbackground-color%3Awhite%3Bcursor%3Apointer%7D%23start%7Bfont-size%3A20px%3Bwidth%3A200px%3Bheight%3A55px%3Bborder-radius%3A5px%3Balign-self%3Acenter%3Bbackground-color%3Atransparent%3Bbackground-image%3Aurl(%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg%20width%3D'100%2525'%20height%3D'100%2525'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%253e%253crect%20width%3D'100%2525'%20height%3D'100%2525'%20fill%3D'none'%20stroke%3D'%2523333'%20stroke-width%3D'6'%20stroke-dasharray%3D'1%252c%209'%20stroke-dashoffset%3D'47'%20stroke-linecap%3D'square'%2F%253e%253c%2Fsvg%253e%22)%7D.button%3Afocus%7Boutline%3Anone%7D.button%3Aactive%7Bborder%3A1px%20solid%20%235d636f%7D.button-container%7Bdisplay%3Aflex%3Bjustify-content%3Aspace-around%7D%40media%20(max-width%3A%20600px)%7B.answer-text%7Bwidth%3A90%25%7D.question%20.check-sign%7Bright%3A30px%3Bfont-size%3A25px%3Bbottom%3A3vw%7D.question%20.hint-sign%7Bright%3A30px%3Bfont-size%3A25px%3Bbottom%3A3vw%7D.question.in-blank%20.question-text%7Bmargin-bottom%3A12px%7D%7D%40media%20(max-width%3A%20500px)%7B.question%7Bpadding-right%3A45px%7D.question%20.check-sign%7Bright%3A20px%3Bfont-size%3A22px%7D.question%20.hint-sign%7Bright%3A20px%3Bfont-size%3A22px%7D.button%7Bwidth%3A130px%3Bheight%3A40px%3Bfont-size%3A12px%7D%7D.progressElemBG%7Bheight%3A10px%3Bdisplay%3Aflex%7D.progressElemBG%20.progressElem%7Bwidth%3A0px%3Bheight%3A10px%3Bbackground-color%3A%23282828%3Btransition%3Awidth%200.4s%2C%20background-color%200.4s%3Bmargin-left%3A5px%7D.progressElemBG%20.progressElem%3Afirst-child%7Bborder-radius%3A10px%200px%200px%2010px%7D.progressElemBG%20.progressElem%3Alast-child%7Bborder-radius%3A0px%2010px%2010px%200px%7D.progressElemBG%20.progressElemLast%7Bwidth%3A0px%3Bheight%3A10px%3Bbackground-color%3Agray%7D%23number-container%7Bmargin-top%3A5px%3Bmargin-left%3A5px%7D.start-text%20.start-text-elem%7Btext-align%3Acenter%3Bmargin%3A30px%200px%3Bfont-size%3A25px%7D.start-text%20.start-text-elem%3Alast-child%7Bmargin-bottom%3A50px%7D%0A");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5pc2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZ3Jlc3NCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9JUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9NdWx0aVZhcmlhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vTXVsdGlwbGVUZXh0SW5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1NpbXBsZVRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9TaW5nbGVWYXJpYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1RleHRJbkJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL2NoZWNrU3RyaW5nVmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpekNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL191dGlscy9TdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvdWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiUHJvZ3Jlc3NCYXIiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsIm1heFNlY3Rpb25zIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1haW5XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImkiLCJpbm5lckVsZW0iLCJzZXRBdHRyaWJ1dGUiLCJzZXRTZWN0aW9uIiwic2VjdGlvbk51bWJlciIsImFsbEVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtU2VjdGlvbk51bWJlciIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhpZGUiLCJkaXNwbGF5IiwiSVF1ZXN0aW9uIiwicXVlc3Rpb25EYXRhIiwicGFyZW50RWxlbSIsImNoZWNrQ2FsbGJhY2siLCJfdGhpcyIsInRlc3RNb2RlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VjdGlvbkluZGV4IiwicXVlc3Rpb25JbmRleCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm1haW5FbGVtZW50Iiwic2hvdWxkQ2FsbEJhY2siLCJhbnN3ZXIiLCJnZXRBbnN3ZXIiLCJyZXN1bHQiLCJjZXJ0YWluQ2hlY2siLCJjaGVja0luaXRpYWxpemVkIiwiZmlyc3RUaW1lQ29ycmVjdCIsImhpbnRCdXR0b24iLCJyZXN1bHRDb3JyZWN0IiwicmVuZGVyUmVzdWx0IiwiaXNDb3JyZWN0IiwiZXJyb3JzQ29udGFpbmVyIiwicmlnaHRBbnN3ZXJzIiwiaHRtbCIsInZhbGlkYXRlRXJyb3JUZXh0IiwiaGludENvbnRhaW5lciIsImluc2VydEFkamFjZW50SFRNTCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VIaW50cyIsInNldFRpbWVvdXQiLCJpbnB1dHMiLCJlIiwiY29kZSIsImNoZWNrIiwic2hvd0hpbnRzIiwiaWQiLCJzdHJpbmdUb0hhc2giLCJpbnB1dCIsInJlbmRlclF1ZXN0aW9uIiwic2VsZWN0ZWRBbnN3ZXIiLCJTdG9yYWdlIiwicmVhZCIsInF1ZXN0aW9uVGVtcGxhdGUiLCJjaGVja1NpZ25Db250YWluZXIiLCJiYXNlQWRkTGlzdGVuZXJzIiwiTXVsdGlWYXJpYW50c1F1ZXN0aW9uIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hhbmdlTGlzdGVuZXIiLCJ1c2VyQW5zd2VycyIsImNoZWNrTXVsdGkiLCJzZWxlY3RlZCIsIkFycmF5IiwiZnJvbSIsInF1ZXN0aW9uVGV4dCIsIm1hcCIsInZhbHVlIiwiYWRkQ2VydGFpbkxpc3RlbmVycyIsIk11bHRpcGxlVGV4dEluQmxhbmtRdWVzdGlvbnMiLCJ1c2VyQW5zd2VyIiwiY29ycmVjdCIsImNvcnJlY3RJbmRleGVzIiwidmFsaWRhdGVNdWx0aUJsYW5rcyIsImVsIiwidXNlclZhbHVlIiwiU2ltcGxlVGV4dFF1ZXN0aW9uIiwidmFsaWRhdGVTaW1wbGVUZXh0IiwiU2luZ2xlVmFyaWFudFF1ZXN0aW9uIiwid3JpdGUiLCJjb21wYXJlVHdvIiwiVGV4dEluQmxhbmtRdWVzdGlvbiIsInZhbGlkYXRlVGV4dEluQmxhbmsiLCJUZXh0QmVmb3JlUXVlc3Rpb24iLCJ0ZXh0Iiwic3BsaXRSZWdFeHAiLCJSZWdFeHAiLCJzcGxpdHRlZFRleHQiLCJzcGxpdCIsInNlY3Rpb25IZWFkZXJUZXh0IiwidWlkIiwiY3JlYXRlVGV4dEluQmxhbmsiLCJjYWxsYmFjayIsIm1hdGNoIiwiTXVsdGlUZXh0SW5CbGFua1F1ZXN0aW9uIiwiY3JlYXRlUXVlc3Rpb24iLCJxdWVzdGlvblR5cGUiLCJFcnJvciIsInF1ZXNWYXJpYW50cyIsInZhcmlhbnRzIiwiZXhjbHVkZURhdGEiLCJTaG9ydGVuaW5nRGljdGlvbmFyeSIsImZpbmRTaG9ydGVuaW5nUmVnRXhwIiwicmlnaHRBbnN3ZXIiLCJ3b3JrZWRVc2VyQW5zd2VyIiwicHJlcGFyZVN0cmluZyIsIndvcmtlZFJpZ2h0QW5zd2VyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwicmVtb3ZlUG9zc2liaWxpdGllcyIsInNvbWUiLCJleGNsdWRlIiwidXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzIiwiZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyIsImNvbXBhcmVFYWNoVG9FYWNoIiwid29ya2VkVXNlckFuc3dlcnMiLCJzb3J0IiwiaXNFcXVhbCIsImZpbmRNYXhQcmV2aW91cyIsIm9iaiIsImN1cnJlbnRLZXkiLCJtYXgiLCJrZXkiLCJOdW1iZXIiLCJ0ZXh0VmFyaWFudHMiLCJzaG9ydFN5Ym1vbHMiLCJyZWciLCJ3b3JkcyIsImluZGV4VG9QdXNoSW5NYWluIiwicHJldmlvdXNWYXJpYW50IiwibmV3VmFyaWFudCIsInB1c2giLCJ2YXJpYW50Iiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZEluZGV4ZXMiLCJpc0FsbFZhbGlkIiwiZ2xvYmFsVkEiLCJpc09uZVRpbWVWYWxpZCIsImoiLCJ1bmlxIiwiZmlsdGVyIiwidiIsImEiLCJpbmRleE9mIiwidW5pcXVlVXNlckFuc3dlcnMiLCJjYWxjdWxhdGVXaWR0aCIsImFuc3dlcnMiLCJtYXhMZW5ndGgiLCJhbHJlYWR5V3JpdHRlbkFuc3dlciIsInNwbGl0dGVkIiwiYW5zd2VyVGVtcGxhdGVJbkJsYW5rIiwiYW5zd2VyVGVtcGxhdGUiLCJpbmRleCIsIlF1aXpDb250cm9sbGVyIiwic2VjdGlvbnMiLCJwYXJlbnRFbGVtZW50IiwiY3VycmVudFNlY3Rpb24iLCJjb252ZXJ0ZWRTZWN0aW9ucyIsInJlbmRlclNlY3Rpb24iLCJudW1iZXJUZXh0Q29udGFpbmVyIiwiaW5uZXJUZXh0IiwicHJvZ3Jlc3NCYXIiLCJ0b3AiLCJzY3JvbGxUbyIsImxlZnQiLCJiZWhhdmlvciIsInByZXZCdXR0b24iLCJtYXhTZWN0aW9uTnVtYmVyIiwiaXNMYXN0U2VjdGlvbiIsIm5leHRCdXR0b24iLCJoaWRlU2VjdGlvbiIsImNvbXBsZXRlZCIsImluaXRTZWN0aW9uIiwicmVuZGVyTmV4dFNlY3Rpb25CdXR0b24iLCJjaGVja0J1dHRvbiIsImVuZFF1aXpCdXR0b24iLCJjaGVja0NvcnJlY3QiLCJjaGFuZ2VTZWN0aW9uIiwicXVlc3Rpb25zQ29udGFpbmVyIiwicmVuZGVyRW5kT2ZUZXN0IiwicmVuZGVyQ29uZ3JhdHMiLCJzZWN0aW9uIiwiYWxsUXVlc3Rpb25zIiwiY29udmVydGVkUXVlc3Rpb25zIiwiYWxsUXVlc3Rpb25zTGVuZ3RoIiwiY29ycmVjdENvdW50IiwicXVlc3QiLCJyZXN1bHRMZXZlbCIsIm9sZExhc3RNZXNzYWdlIiwicmVtb3ZlQ2hpbGQiLCJmaXJzdFRpbWVDb3JyZWN0Q291bnQiLCJwZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwicmVuZGVyTWFpbkNvbnRyb2xzIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiYWxsUmlnaHRDYWxsQmFjayIsIm51bWJlciIsInF1ZXMiLCJmYWxzZVZhbHVlcyIsImZpbmRBbGxGYWxzZSIsImlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCIsInJlbmRlcmVkIiwic2VjdGlvbkNvbnRhaW5lciIsImhlYWRlciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwicXVlc3Rpb25DYWxsYmFjayIsInJlbmRlclF1aXoiLCJTdG9yYWdlTWFuYWdlciIsInN0b3JhZ2VLZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3RvcmFnZURhdGEiLCJwYXJzZSIsInJlYWRBbGwiLCJtYWtlaWQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwic3RyaW5nIiwiaGFzaCIsImNoYXIiLCJjaGFyQ29kZUF0IiwiYXBwZW5kU3R5bGVzIiwic2NzcyIsInJlcXVpcmUiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZUVsZW0iLCJpbm5lckhUTUwiLCJzY3JpcHQiLCJzcmMiLCJidXR0b24iLCJ0ZXN0RGF0YSIsIl9faXNUZXN0TW9kZV9fIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsb0JBQW9CLG1CQUFPLENBQUMsa0ZBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDdlAsV0FBVyxDQUFDMlAsTUFBTSxDQUFDO0VBQzFCLENBQUM7RUFFRFAsWUFBWSxDQUFDLENBQUM7RUFFZCxNQUFNMU0sSUFBSSxHQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7RUFDakQsTUFBTXBELFNBQVMsR0FBR0csUUFBUSxDQUFDcUQsYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUNqRHhELFNBQVMsQ0FBQ3VELGtCQUFrQixDQUFDLFdBQVcsRUFBRUgsSUFBSSxDQUFDO0VBQy9DLE1BQU1tTixNQUFNLEdBQUd2USxTQUFTLENBQUN3RCxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ2hELE1BQU10RCxJQUFJLEdBQUdGLFNBQVMsQ0FBQ3dELGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFFbkQrTSxNQUFNLENBQUM5TSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSTtJQUNuQ3pELFNBQVMsQ0FBQ29OLFdBQVcsQ0FBQ21ELE1BQU0sQ0FBQztJQUM3QnZRLFNBQVMsQ0FBQ29OLFdBQVcsQ0FBQ2xOLElBQUksQ0FBQztJQUUzQixJQUFJOEssdURBQWMsQ0FBQ2xHLE1BQU0sQ0FBQzBMLFFBQVEsRUFBRXhRLFNBQVMsRUFBRThFLE1BQU0sQ0FBQzJMLGNBQWMsSUFBSSxLQUFLLENBQUM7RUFDaEYsQ0FBQyxDQUFDO0FBSUosQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDOUVGLDZtTCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZShcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1ByaW1pdGl2ZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogU3RyaW5nKGkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSB0b1Byb3BlcnR5S2V5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8qKlxuICogTG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pzLmZvdW5kYXRpb24vPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXksXG4gICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZSxcbiAgICBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3JyksXG4gICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyksXG4gICAgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKSxcbiAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGFkZFxuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAYWxpYXMgcHVzaFxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVBZGQodmFsdWUpIHtcbiAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGEgZGVlcCBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmVcbiAqIGVxdWl2YWxlbnQuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHN1cHBvcnRzIGNvbXBhcmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLFxuICogZGF0ZSBvYmplY3RzLCBlcnJvciBvYmplY3RzLCBtYXBzLCBudW1iZXJzLCBgT2JqZWN0YCBvYmplY3RzLCByZWdleGVzLFxuICogc2V0cywgc3RyaW5ncywgc3ltYm9scywgYW5kIHR5cGVkIGFycmF5cy4gYE9iamVjdGAgb2JqZWN0cyBhcmUgY29tcGFyZWRcbiAqIGJ5IHRoZWlyIG93biwgbm90IGluaGVyaXRlZCwgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLiBGdW5jdGlvbnMgYW5kIERPTVxuICogbm9kZXMgYXJlIGNvbXBhcmVkIGJ5IHN0cmljdCBlcXVhbGl0eSwgaS5lLiBgPT09YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5pc0VxdWFsKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIG9iamVjdCA9PT0gb3RoZXI7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VxdWFsO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFye1xuXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBtYXhTZWN0aW9ucyl7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLm1heFNlY3Rpb25zID0gbWF4U2VjdGlvbnM7XG5cbiAgICAgICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWxlbS5jbGFzc05hbWUgPSAncHJvZ3Jlc3NFbGVtQkcnO1xuICAgICAgICB0aGlzLm1haW5XaWR0aCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICB0aGlzLmVsZW0uc3R5bGUud2lkdGggPSBgJHt0aGlzLm1haW5XaWR0aH1weGBcblxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW0pXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxtYXhTZWN0aW9uczsgaSsrKXtcbiAgICAgICAgICAgIGxldCBpbm5lckVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGlubmVyRWxlbS5jbGFzc05hbWUgPSAncHJvZ3Jlc3NFbGVtJztcbiAgICAgICAgICAgIGlubmVyRWxlbS5zZXRBdHRyaWJ1dGUoJ3NlY3Rpb25OdW1iZXInLCBpKVxuICAgIFxuICAgICAgICAgICAgdGhpcy5lbGVtLmFwcGVuZENoaWxkKGlubmVyRWxlbSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0U2VjdGlvbihzZWN0aW9uTnVtYmVyKXtcblxuICAgICAgICB0aGlzLm1haW5XaWR0aCA9IHRoaXMuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS53aWR0aCA9IGAke3RoaXMubWFpbldpZHRofXB4YFxuXG4gICAgICAgIGxldCB3aWR0aCA9ICh0aGlzLm1haW5XaWR0aCAtICgodGhpcy5tYXhTZWN0aW9ucykqIDUpKSAgLyB0aGlzLm1heFNlY3Rpb25zO1xuICAgICAgICBsZXQgYWxsRWxlbXMgPSB0aGlzLmVsZW0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzRWxlbScpXG4gICAgICAgIGFsbEVsZW1zLmZvckVhY2goZWxlbSA9PntcbiAgICAgICAgICAgIGxldCBlbGVtU2VjdGlvbk51bWJlciA9IGVsZW0uZ2V0QXR0cmlidXRlKCdzZWN0aW9uTnVtYmVyJylcbiAgICAgICAgICAgIGlmKGVsZW1TZWN0aW9uTnVtYmVyIDwgc2VjdGlvbk51bWJlcil7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YFxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncHJvZ3Jlc3NFbGVtTGFzdCcpXG4gICAgICAgICAgICB9ZWxzZSBpZiAoZWxlbVNlY3Rpb25OdW1iZXIgPT0gIHNlY3Rpb25OdW1iZXIpe1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzRWxlbUxhc3QnKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS53aWR0aCA9IGAwcHhgXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdwcm9ncmVzc0VsZW1MYXN0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoaWRlKCl7XG4gICAgICAgIHRoaXMuZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxufSIsImltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuLi8uLi9fdXRpbHMvU3RvcmFnZSc7XG5pbXBvcnQgdWlkLCB7IHN0cmluZ1RvSGFzaCB9IGZyb20gJy4uLy4uL191dGlscy91aWQnO1xuaW1wb3J0IHsgdmFsaWRhdGVFcnJvclRleHQgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUXVlc3Rpb24ge1xuICBjb25zdHJ1Y3RvcihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNoZWNrQ2FsbGJhY2ssIHRlc3RNb2RlID0gZmFsc2UsIHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCkge1xuICAgIHRoaXMucXVlc3Rpb25EYXRhID0gcXVlc3Rpb25EYXRhO1xuICAgIHRoaXMucGFyZW50RWxlbSA9IHBhcmVudEVsZW07XG4gICAgdGhpcy5pZCA9IGBpZC0ke3N0cmluZ1RvSGFzaChgJHtzZWN0aW9uSW5kZXh9LSR7cXVlc3Rpb25JbmRleH1gKX1gO1xuICAgIHRoaXMuc2VjdGlvbkluZGV4ID0gc2VjdGlvbkluZGV4O1xuICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IHF1ZXN0aW9uSW5kZXg7XG4gICAgdGhpcy5yZXN1bHRDb3JyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5jaGVja0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFRpbWVDb3JyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5jaGVja0NhbGxiYWNrID0gY2hlY2tDYWxsYmFjaztcbiAgICB0aGlzLnRlc3RNb2RlID0gdGVzdE1vZGVcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjaGVjayA9IChzaG91bGRDYWxsQmFjayA9IHRydWUpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSB0aGlzLmdldEFuc3dlcigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2VydGFpbkNoZWNrKGFuc3dlcik7XG4gICAgaWYgKCF0aGlzLmNoZWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmZpcnN0VGltZUNvcnJlY3QgPSByZXN1bHQ7XG4gICAgICB0aGlzLmhpbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIHRoaXMucmVzdWx0Q29ycmVjdCA9IHJlc3VsdDtcbiAgICB0aGlzLnJlbmRlclJlc3VsdChyZXN1bHQpO1xuICAgIGlmIChzaG91bGRDYWxsQmFjaykge1xuICAgICAgdGhpcy5jaGVja0NhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUmVzdWx0ID0gKGlzQ29ycmVjdCkgPT4ge1xuICAgIGlmIChpc0NvcnJlY3QpIHtcblxuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXJRdWVzdGlvbigpIHtcblxuICAgIGxldCBzZWxlY3RlZEFuc3dlcjtcbiAgICBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAgIHNlbGVjdGVkQW5zd2VyID0gU3RvcmFnZS5yZWFkKHRoaXMuc2VjdGlvbkluZGV4LCB0aGlzLnF1ZXN0aW9uSW5kZXgpO1xuICAgIH1cblxuXG4gICAgY29uc3QgaHRtbCA9IHRoaXMucXVlc3Rpb25UZW1wbGF0ZSh0aGlzLnF1ZXN0aW9uRGF0YSwgdGhpcy5pZCwgc2VsZWN0ZWRBbnN3ZXIpO1xuICAgIHRoaXMucGFyZW50RWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIGNvbnN0IG1haW5FbGVtZW50ID0gdGhpcy5wYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCk7XG4gICAgdGhpcy5tYWluRWxlbWVudCA9IG1haW5FbGVtZW50O1xuICAgIHRoaXMuaW5wdXQgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgdGhpcy5oaW50QnV0dG9uID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGludC1zaWduJyk7XG4gICAgdGhpcy5oaW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5oaW50Q29udGFpbmVyID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaGludC1jb250YWluZXInKTtcbiAgICB0aGlzLmNoZWNrU2lnbkNvbnRhaW5lciA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLXNpZ24nKTtcbiAgICBpZiAodGhpcy50ZXN0TW9kZSkge1xuICAgICAgdGhpcy5oaW50QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmNoZWNrU2lnbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICB0aGlzLmJhc2VBZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNob3dIaW50cyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy50ZXN0TW9kZSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmICghdGhpcy5lcnJvcnNDb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0ZUVycm9yVGV4dChyaWdodEFuc3dlcnMpO1xuICAgICAgdGhpcy5oaW50Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgICB0aGlzLmVycm9yc0NvbnRhaW5lciA9IHRoaXMuaGludENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaGludHMtYW5zd2Vycy1jb250YWluZXInKTtcbiAgICB9XG4gICAgdGhpcy5oaW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuaGludENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2VIaW50cyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNsb3NlSGludHMoKTtcbiAgICB9LCAyNTAwKTtcbiAgfVxuXG4gIGNsb3NlSGludHMgPSAoKSA9PiB7XG4gICAgdGhpcy5oaW50Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBiYXNlQWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlucHV0cyA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBpZiAoaW5wdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4geyBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHsgdGhpcy5jaGVjaygpOyB9IH0pO1xuICAgIH1cbiAgICB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1zaWduJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoZWNrKTtcbiAgICB0aGlzLmhpbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob3dIaW50cyk7XG4gIH1cblxufSIsImltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcblxuaW1wb3J0IHsgcXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHQgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHsgdmFsaWRhdGVTaW1wbGVUZXh0LCB2YWxpZGF0ZVRleHRJbkJsYW5rLCBjaGVja011bHRpIH0gZnJvbSAnLi4vY2hlY2tTdHJpbmdWYWxpZCc7XG5pbXBvcnQgSVF1ZXN0aW9uIGZyb20gJy4vSVF1ZXN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlWYXJpYW50c1F1ZXN0aW9uIGV4dGVuZHMgSVF1ZXN0aW9uIHtcblxuICBxdWVzdGlvblRlbXBsYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IEFycmF5LmZyb20odGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dFtuYW1lPVwiJHt0aGlzLnF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9XCJdOmNoZWNrZWRgKSk7XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkLm1hcCgoZWxlbSkgPT4gZWxlbS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNoYW5nZUxpc3RlbmVyID0gKGUpID0+IHtcbiAgICBpZiAoIXRoaXMuaW5wdXRzLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBhZGRDZXJ0YWluTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICBzdXBlci5oaWRlKCk7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICByZW5kZXJRdWVzdGlvbigpIHtcbiAgICBzdXBlci5yZW5kZXJRdWVzdGlvbigpO1xuICAgIHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgIHRoaXMuYWRkQ2VydGFpbkxpc3RlbmVycygpO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXJzKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgIHJldHVybiBjaGVja011bHRpKHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpO1xuICB9XG5cbn0iLCJpbXBvcnQge3F1ZXN0aW9uVGVtcGxhdGUsIHZhbGlkYXRlRXJyb3JUZXh0fSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHt2YWxpZGF0ZU11bHRpQmxhbmtzfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsZVRleHRJbkJsYW5rUXVlc3Rpb25zIGV4dGVuZHMgSVF1ZXN0aW9ue1xuICBxdWVzdGlvblRlbXBsYXRlID0gICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uVGVtcGxhdGUoLi4uYXJncyk7XG4gIH1cblxuICBnZXRBbnN3ZXIoKXtcbiAgICByZXR1cm4gdGhpcy5pbnB1dHMubWFwKChpbnB1dCk9PiBpbnB1dC52YWx1ZSk7XG4gIH1cblxuICBjZXJ0YWluQ2hlY2sgPSAodXNlckFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgIGNvbnN0IHtjb3JyZWN0LCBjb3JyZWN0SW5kZXhlc30gPSB2YWxpZGF0ZU11bHRpQmxhbmtzKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0KTtcbiAgICB0aGlzLmNvcnJlY3RJbmRleGVzID0gY29ycmVjdEluZGV4ZXM7XG4gICAgcmV0dXJuIGNvcnJlY3Q7XG4gIH1cblxuICByZW5kZXJSZXN1bHQgPSAoaXNDb3JyZWN0KSA9PntcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW5wdXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKHRoaXMuY29ycmVjdEluZGV4ZXMuaW5jbHVkZXMoaSkpe1xuICAgICAgICB0aGlzLmlucHV0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICAgICAgdGhpcy5pbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuaW5wdXRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgICAgdGhpcy5pbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGlzQ29ycmVjdCl7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTGlzdGVuZXIgPSAoZSk9PntcbiAgICBpZighdGhpcy5pbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQpKXtcbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2VydGFpbkxpc3RlbmVycyA9ICgpID0+e1xuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0KT0+e1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT57XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBoaWRlID0gKCkgPT57XG4gICAgc3VwZXIuaGlkZSgpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgcmVuZGVyUXVlc3Rpb24oKXtcbiAgICBzdXBlci5yZW5kZXJRdWVzdGlvbigpO1xuICAgIHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgIHRoaXMuYWRkQ2VydGFpbkxpc3RlbmVycygpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciAgPSAoZWwpID0+e1xuICAgIGNvbnN0IHVzZXJWYWx1ZSA9IGVsLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnVzZXJWYWx1ZSA9IHVzZXJWYWx1ZTtcbiAgICB0aGlzLmNoZWNrKHVzZXJWYWx1ZSk7XG4gIH1cblxufSIsImltcG9ydCB7cXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHR9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQge3ZhbGlkYXRlU2ltcGxlVGV4dCwgdmFsaWRhdGVUZXh0SW5CbGFua30gZnJvbSAnLi4vY2hlY2tTdHJpbmdWYWxpZCc7XG5pbXBvcnQgSVF1ZXN0aW9uIGZyb20gJy4vSVF1ZXN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlVGV4dFF1ZXN0aW9uIGV4dGVuZHMgSVF1ZXN0aW9ue1xuICAvLyBjb25zdHJ1Y3RvcihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0pe1xuICAvLyAgIHN1cGVyKClcbiAgLy8gfVxuICBxdWVzdGlvblRlbXBsYXRlID0gICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uVGVtcGxhdGUoLi4uYXJncyk7XG4gIH1cblxuICBnZXRBbnN3ZXIoKXtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VyKSA9PnsgIFxuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gdmFsaWRhdGVTaW1wbGVUZXh0KHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2Vycyk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyICA9IChlbCkgPT57XG4gICAgY29uc3QgdXNlclZhbHVlID0gZWwudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudXNlclZhbHVlID0gdXNlclZhbHVlO1xuICAgIHRoaXMuY2hlY2sodXNlclZhbHVlKTtcbiAgfVxuXG59ICIsImltcG9ydCB7IHF1ZXN0aW9uVGVtcGxhdGUsIHZhbGlkYXRlRXJyb3JUZXh0IH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7IHZhbGlkYXRlU2ltcGxlVGV4dCwgdmFsaWRhdGVUZXh0SW5CbGFuaywgY29tcGFyZVR3byB9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi4vLi4vX3V0aWxzL1N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVWYXJpYW50UXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb24ge1xuXG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBxdWVzdGlvblRlbXBsYXRlKC4uLmFyZ3MpO1xuICB9XG5cbiAgZ2V0QW5zd2VyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwiJHt0aGlzLnF1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9XCJdOmNoZWNrZWRgKTtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZC52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGNoYW5nZUxpc3RlbmVyID0gKGUpID0+IHtcblxuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cIiR7dGhpcy5xdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiXTpjaGVja2VkYCk7XG4gICAgICBTdG9yYWdlLndyaXRlKHRoaXMuc2VjdGlvbkluZGV4LCB0aGlzLnF1ZXN0aW9uSW5kZXgsIHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiB1bmRlZmluZWQpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICghdGhpcy5pbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENlcnRhaW5MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBoaWRlID0gKCkgPT4ge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uKCkge1xuICAgIHN1cGVyLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgdGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgdGhpcy5hZGRDZXJ0YWluTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjZXJ0YWluQ2hlY2sgPSAodXNlckFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gY29tcGFyZVR3byh1c2VyQW5zd2VyLCByaWdodEFuc3dlcnNbMF0pO1xuICB9XG5cbn0iLCJpbXBvcnQge3F1ZXN0aW9uVGVtcGxhdGUsIHZhbGlkYXRlRXJyb3JUZXh0fSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHt2YWxpZGF0ZVNpbXBsZVRleHQsIHZhbGlkYXRlVGV4dEluQmxhbmt9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbkJsYW5rUXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb257XG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAgKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpe1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXIpID0+IHtcbiAgICBjb25zdCB7IHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0IH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gdmFsaWRhdGVUZXh0SW5CbGFuayh1c2VyQW5zd2VyLCByaWdodEFuc3dlcnMsIHF1ZXN0aW9uVGV4dCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyICA9IChlbCkgPT57XG4gICAgY29uc3QgdXNlclZhbHVlID0gZWwudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudXNlclZhbHVlID0gdXNlclZhbHVlO1xuICAgIHRoaXMuY2hlY2sodXNlclZhbHVlKTtcbiAgfVxuXG59IiwiaW1wb3J0IFNpbXBsZVRleHRRdWVzdGlvbiBmcm9tICcuL1NpbXBsZVRleHQnO1xuaW1wb3J0IFRleHRJbkJsYW5rUXVlc3Rpb24gZnJvbSAnLi9UZXh0SW5CbGFuayc7XG5pbXBvcnQgTXVsdGlUZXh0SW5CbGFua1F1ZXN0aW9uIGZyb20gJy4vTXVsdGlwbGVUZXh0SW5CbGFuayc7XG5pbXBvcnQgU2luZ2xlVmFyaWFudFF1ZXN0aW9uIGZyb20gJy4vU2luZ2xlVmFyaWFudHMnO1xuaW1wb3J0IE11bHRpVmFyaWFudHNRdWVzdGlvbiBmcm9tICcuL011bHRpVmFyaWFudHMnO1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi9fdXRpbHMvdWlkJztcblxuXG5cbmV4cG9ydCBjbGFzcyBUZXh0QmVmb3JlUXVlc3Rpb257XG4gIGNvbnN0cnVjdG9yKHRleHQsIHBhcmVudEVsZW0pe1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5wYXJlbnRFbGVtID0gcGFyZW50RWxlbTtcbiAgICB0aGlzLnJlc3VsdENvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMuZmlyc3RUaW1lQ29ycmVjdCA9IHRydWU7XG4gICAgdGhpcy51aWQgPSB1aWQoKTtcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PntcbiAgICB0aGlzLm1haW5FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGNoZWNrID0gKCkgPT57XG4gICAgXG4gIH1cblxuICByZW5kZXJRdWVzdGlvbiA9ICgpID0+e1xuICAgIGNvbnN0IHNwbGl0UmVnRXhwID0gbmV3IFJlZ0V4cCgvKE1pc3Npb24gWzAtOS5dKykgLyk7XG4gICAgbGV0IHNwbGl0dGVkVGV4dCA9IHRoaXMudGV4dC5zcGxpdChzcGxpdFJlZ0V4cCk7XG4gICAgaWYoc3BsaXR0ZWRUZXh0Lmxlbmd0aCAhPT0gMyl7XG4gICAgICBzcGxpdHRlZFRleHQgPSB0aGlzLnRleHQ7XG4gICAgfWVsc2V7XG4gICAgICBzcGxpdHRlZFRleHQgPSBgJHtzcGxpdHRlZFRleHRbMF19JHtzcGxpdHRlZFRleHRbMV19IDwvYnI+IDxzcGFuIGNsYXNzPVwidGV4dC1xdWVzdGlvbi1pdGFsaWNcIj4ke3NwbGl0dGVkVGV4dFsyXX08L3NwYW4+YDtcbiAgICB9XG4gICAgY29uc3Qgc2VjdGlvbkhlYWRlclRleHQgPSBgPGRpdiBjbGFzcz1cInF1ZXN0aW9uIHNlY3Rpb24taGVhZGVyXCIgaWQ9XCIke3RoaXMudWlkfVwiPiR7c3BsaXR0ZWRUZXh0fTwvZGl2PmA7XG4gICAgdGhpcy5wYXJlbnRFbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc2VjdGlvbkhlYWRlclRleHQpO1xuICAgIHRoaXMubWFpbkVsZW1lbnQgPSB0aGlzLnBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihgIyR7dGhpcy51aWR9YCk7XG4gIH1cbn1cblxuXG5jb25zdCBjcmVhdGVUZXh0SW5CbGFuayA9IChxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKSA9PntcbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dC5tYXRjaCgvXysvZykubGVuZ3RoID4gMSl7XG4gICAgcmV0dXJuIG5ldyBNdWx0aVRleHRJbkJsYW5rUXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjayk7XG4gIH1lbHNle1xuICAgIHJldHVybiBuZXcgVGV4dEluQmxhbmtRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUXVlc3Rpb24gPSAocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgdGVzdE1vZGU9ZmFsc2UsIHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCkgPT57XG4gIGlmKHRlc3RNb2RlICYmIHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgIT09ICd2YXJpYW50cy1zaW5nbGUnKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYHRlc3QgbW9kZSBpcyBlbmFibGVkLCBidXQgcXVlc3Rpb24nIHR5cGUgaXMgJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlIH1gKVxuICB9XG4gIHN3aXRjaChxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlKXtcbiAgICBjYXNlICdzaW1wbGUtdGV4dCc6XG4gICAgICByZXR1cm4gbmV3IFNpbXBsZVRleHRRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgICBjYXNlICd0ZXh0LWluLWJsYW5rJzpcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0SW5CbGFuayhxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKVxuICAgIGNhc2UgJ3ZhcmlhbnRzLW11bHRpJzpcbiAgICAgIHJldHVybiBuZXcgTXVsdGlWYXJpYW50c1F1ZXN0aW9uKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2spO1xuICAgIGNhc2UgJ3ZhcmlhbnRzLXNpbmdsZSc6XG4gICAgICBsZXQgcXVlc1ZhcmlhbnRzO1xuICAgICAgaWYocXVlc3Rpb25EYXRhWyd2YXJpYW50c1xcciddICl7XG4gICAgICAgIHF1ZXNWYXJpYW50cyA9IHF1ZXN0aW9uRGF0YVsndmFyaWFudHNcXHInXVxuICAgICAgfWVsc2UgaWYocXVlc3Rpb25EYXRhWyd2YXJpYW50cyddKXtcbiAgICAgICAgcXVlc1ZhcmlhbnRzID0gcXVlc3Rpb25EYXRhWyd2YXJpYW50cyddO1xuICAgICAgfVxuXG4gICAgICBpZih0eXBlb2YgcXVlc1ZhcmlhbnRzID09PSAnc3RyaW5nJyl7XG4gICAgICAgIHF1ZXN0aW9uRGF0YS52YXJpYW50cyA9IHF1ZXNWYXJpYW50cy5zcGxpdCgnfHwnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBTaW5nbGVWYXJpYW50UXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgdGVzdE1vZGUsIHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCk7XG4gICAgICAvL3JldHVybiBuZXcgVGV4dEluQmxhbmtRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgfVxufSIsImltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcblxuY29uc3QgZXhjbHVkZURhdGEgPSBbXG4gIFwibWFyaWEncmVcIixcbiAgJ21hcmlhXCJyZScsXG4gICdtYXJpYWByZScsXG5dO1xuXG5jb25zdCBTaG9ydGVuaW5nRGljdGlvbmFyeSA9IHtcbiAgJ2NhbiBub3QnOiBgY2FuJ3RgLFxuICAnY2Fubm90JzogYGNhbid0YCxcbiAgJ3dpbGwgbm90JzogYHdvbid0YCxcbiAgJyBpcyc6IGAnc2AsXG4gICdcXCdzJzogYCdzYCxcbiAgJyBoYXZlJzogYCd2ZWAsXG4gICcgaGFzJzogYCdzYCxcbiAgJyB3b3VsZCc6IGAnZGAsXG4gICcgaGFkJzogYCdkYCxcbiAgJyBhcmUnOiBgJ3JlYCxcbiAgJyB3aWxsJzogYCdsbGAsXG4gICcgYW0nOiBgJ21gLFxuICAnaXMgbm90JzogYGlzbid0YCxcbiAgJ2FyZSBub3QnOiBgYXJlbid0YCxcbiAgJ3dhcyBub3QnOiBgd2Fzbid0YCxcbiAgJ3dlcmUgbm90JzogYHdlcmVuJ3RgLFxuICAnaGFzIG5vdCc6IGBoYXNuJ3RgLFxuICAnaGF2ZSBub3QnOiBgaGF2ZW4ndGAsXG5cbiAgJ2hhZCBub3QnOiBgaGFkbid0YCxcbiAgJ2RvZXMgbm90JzogYGRvZXNuJ3RgLFxuICAnZG8gbm90JzogYGRvbid0YCxcbiAgJ2RpZCBub3QnOiBgZGlkbid0YCxcbiAgJ2NvdWxkIG5vdCc6IGBjb3VsZG4ndGAsXG4gICd3b3VsZCBub3QnOiBgd291bGRuJ3RgLFxuICAnbXVzdCBub3QnOiBgbXVzdG4ndGAsXG4gICduZWVkIG5vdCc6IGBuZWVkbid0YCxcbiAgJ3Nob3VsZCBub3QnOiBgc2hvdWxkbid0YCxcbiAgJ21pZ2h0IG5vdCc6IGBtaWdodG4ndGAsXG4gICdkYXJlIG5vdCc6IGBkYXJlbid0YCxcbn1cblxuXG52YXIgZmluZFNob3J0ZW5pbmdSZWdFeHAgPSBuZXcgUmVnRXhwKC9cXHcrKD89J1xcdyspL2cpO1xuXG5cblxuZXhwb3J0IGNvbnN0IGNvbXBhcmVUd28gPSAodXNlckFuc3dlciwgcmlnaHRBbnN3ZXIpID0+IHtcbiAgaWYgKCF1c2VyQW5zd2VyKSB7XG4gICAgdXNlckFuc3dlciA9ICcnO1xuICB9XG4gIGxldCB3b3JrZWRVc2VyQW5zd2VyID0gcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKTtcbiAgbGV0IHdvcmtlZFJpZ2h0QW5zd2VyID0gcHJlcGFyZVN0cmluZyhyaWdodEFuc3dlcik7XG4gIHJldHVybiB3b3JrZWRVc2VyQW5zd2VyID09PSB3b3JrZWRSaWdodEFuc3dlcjtcbn1cblxuXG4vLyBtYWtlIHRyaW0sIHJlbW92ZSBkb3Qgb24gdGhlIGVuZCwgbG93ZXJjYXNlLCAuLi5ldGNcbmNvbnN0IHByZXBhcmVTdHJpbmcgPSAoYW5zd2VyKSA9PiB7XG4gIHJldHVybiBhbnN3ZXIudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC4kLywgJycpLnJlcGxhY2UoLyArL2csICcgJykucmVwbGFjZSgvICQvLCAnJykucmVwbGFjZSgvXiAvLCAnJykucmVwbGFjZSgvXFwuJC8sICcnKS5yZXBsYWNlKC9cXG4kLywgJycpLnJlcGxhY2UoL1xcPy9nLCAnJykucmVwbGFjZSgvXFwsL2csICcnKTtcbn1cblxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTaW1wbGVUZXh0ID0gKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2VycykgPT4ge1xuICBsZXQgcmVtb3ZlUG9zc2liaWxpdGllcyA9IGZhbHNlO1xuICBpZiAoZXhjbHVkZURhdGEuc29tZSgoZXhjbHVkZSkgPT4gcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKS5pbmNsdWRlcyhwcmVwYXJlU3RyaW5nKGV4Y2x1ZGUpKSkpIHtcbiAgICByZW1vdmVQb3NzaWJpbGl0aWVzID0gdHJ1ZTtcbiAgfVxuICBsZXQgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzO1xuICBpZiAoIXJlbW92ZVBvc3NpYmlsaXRpZXMpIHtcbiAgICB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBmaW5kU2hvcnRlbmluZ3NQb3NzaWJpbGl0aWVzKHVzZXJBbnN3ZXIpO1xuICB9IGVsc2Uge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IFt1c2VyQW5zd2VyXTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZygndmFsaWRhdGUgc2ltcGxlJywgdXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzKTtcbiAgLy8gY29uc3QgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gW3VzZXJBbnN3ZXIsIHByZXBhcmVTdHJpbmcodXNlckFuc3dlciksIC4uLmZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcildO1xuICAvLyBjb25zb2xlLmxvZygncG9zc2knLCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMpO1xuICByZXR1cm4gY29tcGFyZUVhY2hUb0VhY2goWy4uLnVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcywgdXNlckFuc3dlcl0sIHJpZ2h0QW5zd2Vycyk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja011bHRpID0gKHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpID0+IHtcbiAgbGV0IHdvcmtlZFVzZXJBbnN3ZXJzID0gdXNlckFuc3dlcnMuc29ydCgpLm1hcCgoYW5zd2VyKSA9PiBwcmVwYXJlU3RyaW5nKGFuc3dlcikpO1xuICBsZXQgd29ya2VkUmlnaHRBbnN3ZXIgPSByaWdodEFuc3dlcnMuc29ydCgpLm1hcCgoYW5zd2VyKSA9PiBwcmVwYXJlU3RyaW5nKGFuc3dlcikpO1xuICByZXR1cm4gaXNFcXVhbCh3b3JrZWRVc2VyQW5zd2Vycywgd29ya2VkUmlnaHRBbnN3ZXIpO1xuXG59XG5cbmNvbnN0IGZpbmRNYXhQcmV2aW91cyA9IChvYmosIGN1cnJlbnRLZXkpID0+IHtcbiAgbGV0IG1heCA9IC0xO1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE51bWJlcihrZXkpID4gTnVtYmVyKG1heCkgJiYgb2JqW2tleV0ubGVuZ3RoID4gMCAmJiBrZXkgIT0gY3VycmVudEtleSkge1xuICAgICAgbWF4ID0ga2V5O1xuICAgIH1cbiAgfVxuICBpZiAobWF4ID09PSAtMSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBtYXg7XG59XG5cblxubGV0IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXMgPSAodXNlckFuc3dlcikgPT4ge1xuICB1c2VyQW5zd2VyID0gcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKTtcbiAgbGV0IHRleHRWYXJpYW50cyA9IHt9O1xuICBjb25zdCBzaG9ydFN5Ym1vbHMgPSBbJ+KAmScsICdcXCcnLCAnYCcsICdcIiddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3J0U3libW9scy5sZW5ndGg7IGkrKykge1xuICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKHNob3J0U3libW9sc1tpXSwgJ2cnKTtcbiAgICB1c2VyQW5zd2VyID0gdXNlckFuc3dlci5yZXBsYWNlKHJlZywgJ1xcJycpO1xuICB9XG4gIGNvbnN0IHdvcmRzID0gdXNlckFuc3dlci5zcGxpdCgnICcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBpZiAod29yZHNbaV0ubWF0Y2goZmluZFNob3J0ZW5pbmdSZWdFeHApKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gU2hvcnRlbmluZ0RpY3Rpb25hcnkpIHtcbiAgICAgICAgaWYgKHdvcmRzW2ldLmluY2x1ZGVzKFNob3J0ZW5pbmdEaWN0aW9uYXJ5W2tleV0pKSB7XG5cbiAgICAgICAgICB2YXIgaW5kZXhUb1B1c2hJbk1haW4gPSBpO1xuICAgICAgICAgIGlmICghdGV4dFZhcmlhbnRzW2luZGV4VG9QdXNoSW5NYWluXSkge1xuICAgICAgICAgICAgdGV4dFZhcmlhbnRzW2luZGV4VG9QdXNoSW5NYWluXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmluZE1heFByZXZpb3VzKHRleHRWYXJpYW50cywgaSkpIHtcbiAgICAgICAgICAgIHRleHRWYXJpYW50c1tmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCBpKV0uZm9yRWFjaCgocHJldmlvdXNWYXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdWYXJpYW50ID0gWy4uLnByZXZpb3VzVmFyaWFudF07XG4gICAgICAgICAgICAgIG5ld1ZhcmlhbnRbaV0gPSBwcmV2aW91c1ZhcmlhbnRbaV0ucmVwbGFjZShTaG9ydGVuaW5nRGljdGlvbmFyeVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgICB0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dLnB1c2gobmV3VmFyaWFudCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3VmFyaWFudCA9IFsuLi53b3Jkc107XG4gICAgICAgICAgICBuZXdWYXJpYW50W2ldID0gd29yZHNbaV0ucmVwbGFjZShTaG9ydGVuaW5nRGljdGlvbmFyeVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgdGV4dFZhcmlhbnRzW2luZGV4VG9QdXNoSW5NYWluXS5wdXNoKG5ld1ZhcmlhbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmb3Igb25lIHNob3J0ZW5pbmcuXG4gIGlmIChmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCA5OTkpKSB7XG4gICAgcmV0dXJuIHRleHRWYXJpYW50c1tmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCA5OTkpXS5tYXAoKHZhcmlhbnQpID0+IHZhcmlhbnQuam9pbignICcpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW3VzZXJBbnN3ZXJdO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlVGV4dEluQmxhbmsgPSAodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQpID0+IHtcbiAgcmlnaHRBbnN3ZXJzID0gWy4uLnJpZ2h0QW5zd2VycywgLi4ucmlnaHRBbnN3ZXJzLm1hcCgocmlnaHRBbnN3ZXIpID0+IHF1ZXN0aW9uVGV4dC5yZXBsYWNlKC9fKy9nLCByaWdodEFuc3dlcikpXTtcbiAgbGV0IHJlbW92ZVBvc3NpYmlsaXRpZXMgPSBmYWxzZTtcbiAgY29uc29sZS5sb2coJ2V4JywgZXhjbHVkZURhdGEsIHVzZXJBbnN3ZXIsIHByZXBhcmVTdHJpbmcodXNlckFuc3dlcikpO1xuICBpZiAoZXhjbHVkZURhdGEuc29tZSgoZXhjbHVkZSkgPT4gcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKS5pbmNsdWRlcyhwcmVwYXJlU3RyaW5nKGV4Y2x1ZGUpKSkpIHtcbiAgICByZW1vdmVQb3NzaWJpbGl0aWVzID0gdHJ1ZTtcbiAgfVxuICBsZXQgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzO1xuICBpZiAoIXJlbW92ZVBvc3NpYmlsaXRpZXMpIHtcbiAgICB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBmaW5kU2hvcnRlbmluZ3NQb3NzaWJpbGl0aWVzKHVzZXJBbnN3ZXIpO1xuICB9IGVsc2Uge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IFtdO1xuICB9XG4gIC8vIGNvbnN0IHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcik7XG4gIHJldHVybiBjb21wYXJlRWFjaFRvRWFjaChbLi4udXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzLCB1c2VyQW5zd2VyLCBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpXSwgcmlnaHRBbnN3ZXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlTXVsdGlCbGFua3MgPSAodXNlckFuc3dlcnMsIHJpZ2h0QW5zd2VycykgPT4ge1xuICBsZXQgdmFsaWRJbmRleGVzID0gW107XG4gIGxldCBpc0FsbFZhbGlkID0gZmFsc2U7XG4gIGlmICh1c2VyQW5zd2Vycy5sZW5ndGggPiByaWdodEFuc3dlcnMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICBjb3JyZWN0SW5kZXhlczogLTEsXG4gICAgfVxuICB9XG5cbiAgaWYgKHJpZ2h0QW5zd2Vycy5sZW5ndGggJSB1c2VyQW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICBjb3JyZWN0SW5kZXhlczogLTEsXG4gICAgfVxuICB9O1xuXG4gIGxldCBnbG9iYWxWQSA9IHtcbiAgICBpc09uZVRpbWVWYWxpZDogZmFsc2UsXG4gICAgdmFsaWRJbmRleGVzOiBbXSxcbiAgfVxuXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByaWdodEFuc3dlcnMubGVuZ3RoOyBpICs9IHVzZXJBbnN3ZXJzLmxlbmd0aCkge1xuICAgIHZhbGlkSW5kZXhlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB1c2VyQW5zd2Vycy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHZhbGlkYXRlU2ltcGxlVGV4dCh1c2VyQW5zd2Vyc1tqXSwgW3JpZ2h0QW5zd2Vyc1tqICsgaV1dKSkge1xuICAgICAgICB2YWxpZEluZGV4ZXMucHVzaChqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZhbGlkSW5kZXhlcy5sZW5ndGggPT09IHVzZXJBbnN3ZXJzLmxlbmd0aCkge1xuICAgICAgZ2xvYmFsVkEuaXNPbmVUaW1lVmFsaWQgPSB0cnVlO1xuICAgICAgZ2xvYmFsVkEudmFsaWRJbmRleGVzID0gdmFsaWRJbmRleGVzO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdsb2JhbFZBLnZhbGlkSW5kZXhlcy5wdXNoKC4uLnZhbGlkSW5kZXhlcyk7XG4gICAgfVxuICB9XG5cblxuICBpZiAoZ2xvYmFsVkEuaXNPbmVUaW1lVmFsaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ycmVjdDogdHJ1ZSxcbiAgICAgIGNvcnJlY3RJbmRleGVzOiB2YWxpZEluZGV4ZXMsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVuaXEgPSBnbG9iYWxWQS52YWxpZEluZGV4ZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuICAgIGlmICh1bmlxLmxlbmd0aCA9PT0gdXNlckFuc3dlcnMubGVuZ3RoKSB7XG4gICAgICBsZXQgdW5pcXVlVXNlckFuc3dlcnMgPSB1c2VyQW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gcHJlcGFyZVN0cmluZyhhbnN3ZXIpKS5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG4gICAgICBpZiAodW5pcXVlVXNlckFuc3dlcnMubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb3JyZWN0OiB0cnVlLFxuICAgICAgICAgIGNvcnJlY3RJbmRleGVzOiB2YWxpZEluZGV4ZXMsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29ycmVjdDogZmFsc2UsXG4gICAgICAgICAgY29ycmVjdEluZGV4ZXM6IFtdLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvcnJlY3Q6IGZhbHNlLFxuICAgICAgICBjb3JyZWN0SW5kZXhlczogdW5pcSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmb3IobGV0IGkgPSAwOyBpPHVzZXJBbnN3ZXJzLmxlbmd0aDsgaSsrKXtcbiAgLy8gICBpZih2YWxpZGF0ZVNpbXBsZVRleHQodXNlckFuc3dlcnNbaV0sIFtyaWdodEFuc3dlcnNbaV1dKSl7XG4gIC8vICAgICB2YWxpZEluZGV4ZXMucHVzaChpKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBpZiAodmFsaWRJbmRleGVzLmxlbmd0aCA9PT0gdXNlckFuc3dlcnMubGVuZ3RoKSB7XG4gICAgaXNBbGxWYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb3JyZWN0OiBpc0FsbFZhbGlkLFxuICAgIGNvcnJlY3RJbmRleGVzOiB2YWxpZEluZGV4ZXMsXG4gIH1cbn1cblxuXG5jb25zdCBjb21wYXJlRWFjaFRvRWFjaCA9ICh1c2VyQW5zd2VycywgcmlnaHRBbnN3ZXJzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJpZ2h0QW5zd2Vycy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGNvbXBhcmVUd28odXNlckFuc3dlcnNbaV0sIHJpZ2h0QW5zd2Vyc1tqXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXMoJ0lgZCBiZWVuIG1hZCBpXCJkIElgZCcpXG4iLCJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVycm9yVGV4dCA9IChyaWdodEFuc3dlcnMpID0+IHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGludHMtYW5zd2Vycy1jb250YWluZXJcIj5cbiAgICAgICR7cmlnaHRBbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBgPGRpdiBjbGFzcz1cImhpbnRcIj4ke2Fuc3dlcn08L2Rpdj5gKS5qb2luKCcgJyl9XG4gICAgPC9kaXY+XG4gIGA7XG4gIC8vIHJldHVybiBgcmlnaHQgYW5zd2VyIGFyZSAke3JpZ2h0QW5zd2Vycy5qb2luKCcsICcpfWA7XG59XG5cbmNvbnN0IGNhbGN1bGF0ZVdpZHRoID0gKGFuc3dlcnMpID0+IHtcbiAgbGV0IG1heExlbmd0aCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbnN3ZXJzW2ldLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgbWF4TGVuZ3RoID0gYW5zd2Vyc1tpXS5sZW5ndGg7XG4gICAgfVxuICB9XG4gIGlmIChtYXhMZW5ndGggPCA3KSB7XG4gICAgcmV0dXJuIDYwO1xuICB9XG4gIGlmIChtYXhMZW5ndGggPCAxMCkge1xuICAgIHJldHVybiA5MDtcbiAgfVxuICBpZiAobWF4TGVuZ3RoIDwgMTgpIHtcbiAgICByZXR1cm4gMTUwO1xuICB9XG4gIGlmIChtYXhMZW5ndGggPCAyNSkge1xuICAgIHJldHVybiAyMDA7XG4gIH1cbiAgcmV0dXJuIDIxMDtcbn1cblxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uVGVtcGxhdGUgPSAocXVlc3Rpb25EYXRhLCBpZCwgYWxyZWFkeVdyaXR0ZW5BbnN3ZXIpID0+IHtcbiAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICd0ZXh0LWluLWJsYW5rJykge1xuICAgIGNvbnN0IHNwbGl0dGVkID0gcXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dC5zcGxpdCgvXysvKTtcbiAgICBjb25zdCB3aWR0aCA9IGNhbGN1bGF0ZVdpZHRoKHF1ZXN0aW9uRGF0YS5yaWdodEFuc3dlcnMpO1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcyA9IFwicXVlc3Rpb24gaW4tYmxhbmtcIiBpZD1cIiR7aWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tdGV4dFwiPiR7c3BsaXR0ZWQuam9pbihgJHthbnN3ZXJUZW1wbGF0ZUluQmxhbmsoYW5zd2VyVGVtcGxhdGVJbkJsYW5rLCB3aWR0aCl9YCl9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stc2lnblwiPjxpIGNsYXNzPVwiZmFzIGZhLXNpZ24taW4tYWx0XCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpbnQtc2lnblwiPjxpIGNsYXNzPVwiZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoaW50LWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcyA9IFwicXVlc3Rpb25cIiBpZD1cIiR7aWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tdGV4dFwiPiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIj5cbiAgICAgICAgJHthbnN3ZXJUZW1wbGF0ZShxdWVzdGlvbkRhdGEsIGlkLCBhbHJlYWR5V3JpdHRlbkFuc3dlcil9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1zaWduXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGludC1zaWduXCI+PGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlXCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpbnQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgYW5zd2VyVGVtcGxhdGVJbkJsYW5rID0gKHF1ZXN0aW9uRGF0YSwgd2lkdGgpID0+IHtcbiAgcmV0dXJuIGBcbiAgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7XCIgY2xhc3MgPSBcImFuc3dlci10ZXh0IGluLWJsYW5rXCI+XG4gICAgPGlucHV0IGNsYXNzID0gXCJhbnN3ZXItdGV4dC1pbnB1dCBpbi1ibGFua1wiIC8+XG4gIDwvZGl2PlxuYFxufVxuXG5leHBvcnQgY29uc3QgYW5zd2VyVGVtcGxhdGUgPSAocXVlc3Rpb25EYXRhLCBpZCwgYWxyZWFkeVdyaXR0ZW5BbnN3ZXIpID0+IHtcbiAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICdzaW1wbGUtdGV4dCcgfHwgcXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3RleHQtaW4tYmxhbmsnKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3MgPSBcImFuc3dlci10ZXh0XCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcyA9IFwiYW5zd2VyLXRleHQtaW5wdXQgXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICd2YXJpYW50cy1zaW5nbGUnKSB7XG5cbiAgICByZXR1cm4gYFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtxdWVzdGlvbkRhdGEudmFyaWFudHMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgJHthbHJlYWR5V3JpdHRlbkFuc3dlciA9PT0gdmFsdWUgPyAnY2hlY2tlZCcgOiAnJ30gdHlwZT1cInJhZGlvXCIgaWQ9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9LSR7aW5kZXh9LSR7aWR9XCJcbiAgICAgICAgICAgICAgbmFtZT1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIiB2YWx1ZT1cIiR7dmFsdWV9XCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9LSR7aW5kZXh9LSR7aWR9XCI+JHt2YWx1ZX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCkuam9pbignICcpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICBgO1xuICB9XG5cbiAgaWYgKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICd2YXJpYW50cy1tdWx0aScpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtxdWVzdGlvbkRhdGEudmFyaWFudHMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IGBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH0tJHtpbmRleH1cIlxuICAgICAgICAgICAgICBuYW1lPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiIHZhbHVlPVwiJHt2YWx1ZX1cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH0tJHtpbmRleH1cIj4ke3ZhbHVlfTwvbGFiZWw+XG4gICAgICAgICAgYCkuam9pbignICcpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICBgO1xuICB9XG59XG4iLCJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vU2VjdGlvbic7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuY2xhc3MgUXVpekNvbnRyb2xsZXIge1xuXG4gIHF1ZXN0aW9ucyA9IFtdO1xuICBjb252ZXJ0ZWRRdWVzdGlvbnMgPSBbXTtcbiAgb2xkUXVlc3Rpb25zID0gW107XG5cbiAgY29uc3RydWN0b3Ioc2VjdGlvbnMgPSBbXSwgcGFyZW50RWxlbWVudCwgdGVzdE1vZGUgPSBmYWxzZSkge1xuICAgIHRoaXMuc2VjdGlvbnMgPSBzZWN0aW9ucztcbiAgICB0aGlzLm1heFNlY3Rpb25OdW1iZXIgPSBzZWN0aW9ucy5sZW5ndGggLSAxO1xuICAgIHRoaXMudGVzdE1vZGUgPSB0ZXN0TW9kZVxuXG4gICAgaWYgKHRoaXMubWF4U2VjdGlvbk51bWJlciA9PT0gMCkge1xuICAgICAgdGhpcy5pc0xhc3RTZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyTWFpbkNvbnRyb2xzKCk7XG4gICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9ucyA9IHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihzZWN0aW9uLCB0aGlzLnF1ZXN0aW9uc0NvbnRhaW5lciwgdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbiwgaW5kZXgsIHRlc3RNb2RlKTtcbiAgICB9KTtcblxuICAgIGlmICh0ZXN0TW9kZSkge1xuICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IG5ldyBQcm9ncmVzc0Jhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NCYXJDb250YWluZXInKSwgc2VjdGlvbnMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmN1cnJlbnRTZWN0aW9uID0gMDtcbiAgICB0aGlzLmNoYW5nZVNlY3Rpb24oMCk7XG5cbiAgICBpZiAodGVzdE1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyTmV4dFNlY3Rpb25CdXR0b24oKVxuICAgIH1cbiAgfVxuXG4gIGluaXRTZWN0aW9uID0gKHNlY3Rpb25OdW1iZXIpID0+IHtcbiAgICB0aGlzLmN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbk51bWJlcjtcblxuICAgIHRoaXMuY29udmVydGVkU2VjdGlvbnNbc2VjdGlvbk51bWJlcl0ucmVuZGVyU2VjdGlvbigpO1xuXG4gICAgdGhpcy5udW1iZXJUZXh0Q29udGFpbmVyLmlubmVyVGV4dCA9IGBTZWN0aW9uICR7c2VjdGlvbk51bWJlciArIDF9IG9mICR7dGhpcy5jb252ZXJ0ZWRTZWN0aW9ucy5sZW5ndGh9YDtcbiAgICB0aGlzLnByb2dyZXNzQmFyLnNldFNlY3Rpb24oc2VjdGlvbk51bWJlcilcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiB0aGlzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgMjApXG5cbiAgfVxuXG4gIGNoYW5nZVNlY3Rpb24gPSAoc2VjdGlvbk51bWJlcikgPT4ge1xuICAgIHRoaXMuc2VjdGlvbk51bWJlciA9IHNlY3Rpb25OdW1iZXI7XG4gICAgaWYgKHNlY3Rpb25OdW1iZXIgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWN0aW9uTnVtYmVyID4gMCkge1xuICAgICAgdGhpcy5wcmV2QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXZCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoc2VjdGlvbk51bWJlciA+IHRoaXMuY3VycmVudFNlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLm1heFNlY3Rpb25OdW1iZXIgPT09IHNlY3Rpb25OdW1iZXIpIHtcbiAgICAgICAgdGhpcy5pc0xhc3RTZWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWN0aW9uTnVtYmVyID4gdGhpcy5tYXhTZWN0aW9uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFNlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiB0aGlzLmN1cnJlbnRTZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zW3RoaXMuY3VycmVudFNlY3Rpb25dLmhpZGVTZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbnZlcnRlZFNlY3Rpb25zW3NlY3Rpb25OdW1iZXJdLmNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKHNlY3Rpb25OdW1iZXIgPj0gdGhpcy5tYXhTZWN0aW9uTnVtYmVyKSkge1xuICAgICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuaW5pdFNlY3Rpb24oc2VjdGlvbk51bWJlcik7XG4gICAgaWYgKHRoaXMudGVzdE1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyTmV4dFNlY3Rpb25CdXR0b24oKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1haW5Db250cm9scyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcyA9IFwicXVlc3Rpb25zLWxpc3RcIj4gPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzQmFyQ29udGFpbmVyXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm51bWJlci1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwicHJldi1zZWN0aW9uXCI+UHJldiBTZWN0aW9uPC9idXR0b24+IFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiY2hlY2tfYnV0dG9uXCI+Q2hlY2sgdGhlIGFuc3dlcnM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cIm5leHQtc2VjdGlvblwiPk5leHQgU2VjdGlvbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiZW5kLXF1aXpcIj5FbmQgcXVpejwvYnV0dG9uPiBcbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG5cbiAgICB0aGlzLmNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrX2J1dHRvbicpO1xuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICB0aGlzLmNoZWNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICB0aGlzLmVuZFF1aXpCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXF1aXonKTtcbiAgICB0aGlzLmVuZFF1aXpCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMubmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LXNlY3Rpb24nKTtcbiAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMucHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2LXNlY3Rpb24nKTtcbiAgICB0aGlzLnByZXZCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMubnVtYmVyVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXItY29udGFpbmVyJyk7XG5cbiAgICB0aGlzLmNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1t0aGlzLmN1cnJlbnRTZWN0aW9uXS5jaGVja0NvcnJlY3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hhbmdlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uICsgMSk7IH0pO1xuICAgIHRoaXMucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5jaGFuZ2VTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24gLSAxKTsgfSk7XG5cbiAgICB0aGlzLnF1ZXN0aW9uc0NvbnRhaW5lciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25zLWxpc3QnKTtcbiAgfVxuXG4gIHJlbmRlck5leHRTZWN0aW9uQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5pc0xhc3RTZWN0aW9uKSB7XG4gICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kUXVpekJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZW5kUXVpekJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE1vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckVuZE9mVGVzdCgpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbmdyYXRzKCk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXJFbmRPZlRlc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5xdWVzdGlvbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLm51bWJlclRleHRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnByb2dyZXNzQmFyLmhpZGUoKVxuICAgIHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcbiAgICAgIHNlY3Rpb24uY2hlY2tDb3JyZWN0KClcbiAgICB9KTtcblxuICAgIGxldCBhbGxRdWVzdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgYWxsUXVlc3Rpb25zID0gWy4uLmFsbFF1ZXN0aW9ucywgLi4udGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnNdO1xuICAgIH1cbiAgICBsZXQgYWxsUXVlc3Rpb25zTGVuZ3RoID0gYWxsUXVlc3Rpb25zLmxlbmd0aCAtIHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoO1xuXG5cbiAgICBsZXQgY29ycmVjdENvdW50ID0gYWxsUXVlc3Rpb25zLmZpbHRlcigocXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBxdWVzdC5yZXN1bHRDb3JyZWN0O1xuICAgIH0pLmxlbmd0aDtcblxuICAgIGNvcnJlY3RDb3VudCA9IGNvcnJlY3RDb3VudCAtIHRoaXMuc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgbGV0IHJlc3VsdExldmVsID0gJ0JFR0lOTkVSIChBMCknXG5cbiAgICBpZiAoY29ycmVjdENvdW50ID49IDcpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ0VMRU1FTlRBUlkgKEExKSdcbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb3VudCA+PSAxNCkge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnUFJFLUlOVEVSTUVESUFURSAoQTIpJ1xuICAgIH1cbiAgICBpZiAoY29ycmVjdENvdW50ID49IDIyKSB7XG4gICAgICByZXN1bHRMZXZlbCA9ICdJTlRFUk1FRElBVEUgKEIxKSdcbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb3VudCA+PSAzMCkge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnVVBQRVIgSU5URVJNRURJQVRFIChCMiknXG4gICAgfVxuICAgIGlmIChjb3JyZWN0Q291bnQgPj0gMzgpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ0FEVkFOQ0VEIChDMSknXG4gICAgfVxuICAgIGlmIChjb3JyZWN0Q291bnQgPj0gNDUpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ1BST0ZJQ0lFTlQgKEMyKSdcbiAgICB9XG5cbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPGRpdiBjbGFzcz1cImxhc3QtbWVzc2FnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIFRoZSB0ZXN0IGlzIGNvbXBsZXRlZCFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlIGdvdFwiPlxuICAgICAgICAgIFlvdSBnb3Q6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIDxiPiR7Y29ycmVjdENvdW50fTwvYj4gY29ycmVjdCBhbnN3ZXJzIG91dCBvZiA8Yj4ke2FsbFF1ZXN0aW9uc0xlbmd0aH08L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIFlvdXIgbGV2ZWw6XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICAgIDxiPiR7cmVzdWx0TGV2ZWx9PC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3Qgb2xkTGFzdE1lc3NhZ2UgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtbWVzc2FnZScpO1xuICAgIGlmIChvbGRMYXN0TWVzc2FnZSkge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG9sZExhc3RNZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgfVxuXG4gIHJlbmRlckNvbmdyYXRzID0gKCkgPT4ge1xuICAgIHRoaXMucXVlc3Rpb25zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5udW1iZXJUZXh0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZXQgYWxsUXVlc3Rpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBhbGxRdWVzdGlvbnNMZW5ndGggKz0gdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnMubGVuZ3RoO1xuICAgICAgYWxsUXVlc3Rpb25zID0gWy4uLmFsbFF1ZXN0aW9ucywgLi4udGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnNdO1xuICAgIH1cbiAgICBsZXQgYWxsUXVlc3Rpb25zTGVuZ3RoID0gYWxsUXVlc3Rpb25zLmxlbmd0aCAtIHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoO1xuXG5cbiAgICBsZXQgZmlyc3RUaW1lQ29ycmVjdENvdW50ID0gYWxsUXVlc3Rpb25zLmZpbHRlcigocXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBxdWVzdC5maXJzdFRpbWVDb3JyZWN0O1xuICAgIH0pLmxlbmd0aDtcblxuICAgIGZpcnN0VGltZUNvcnJlY3RDb3VudCA9IGZpcnN0VGltZUNvcnJlY3RDb3VudCAtIHRoaXMuc2VjdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoZmlyc3RUaW1lQ29ycmVjdENvdW50IC8gYWxsUXVlc3Rpb25zTGVuZ3RoKSAqIDEwMDtcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibGFzdC1tZXNzYWdlXCI+XG4gICAgICAgIEdyYXRzLCB5b3UgaGF2ZSBjb21wbGV0ZWQgdGhlIHRlc3QhXG4gICAgICAgICR7TWF0aC5yb3VuZChwZXJjZW50YWdlKX0lIGNvcnJlY3QhXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IG9sZExhc3RNZXNzYWdlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKTtcbiAgICBpZiAob2xkTGFzdE1lc3NhZ2UpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvbGRMYXN0TWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXpDb250cm9sbGVyO1xuIiwiaW1wb3J0IHtjcmVhdGVRdWVzdGlvbiwgVGV4dEJlZm9yZVF1ZXN0aW9ufSBmcm9tICcuLi9RdWVzdGlvbi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ue1xuICBxdWVzdGlvbnMgPSBbXTtcbiAgY29udmVydGVkUXVlc3Rpb25zID0gW107XG4gIHJlbmRlcmVkID0gZmFsc2U7XG4gIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHNlY3Rpb25EYXRhLCBjb250YWluZXIsIGFsbFJpZ2h0Q2FsbEJhY2ssIG51bWJlciwgdGVzdE1vZGU9ZmFsc2Upe1xuICAgIHRoaXMuaGVhZGVyID0gc2VjdGlvbkRhdGEuaGVhZGVyO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucXVlc3Rpb25zID0gc2VjdGlvbkRhdGEucXVlc3Rpb25zO1xuICAgIHRoaXMuYWxsUmlnaHRDYWxsQmFjayA9IGFsbFJpZ2h0Q2FsbEJhY2s7XG4gICAgdGhpcy50ZXN0TW9kZSA9IHRlc3RNb2RlXG4gICAgaWYodGVzdE1vZGUpe1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaGlkZVNlY3Rpb24oKXtcbiAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGZpbmRBbGxGYWxzZSA9ICgpID0+e1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXMpPT4gIXF1ZXMucmVzdWx0Q29ycmVjdCk7XG4gIH1cblxuICBjaGVja0NvcnJlY3QgPSAoKSA9PntcbiAgICAvLyBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAvLyAgIHJldHVyblxuICAgIC8vIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnNbaV0uY2hlY2soZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBmYWxzZVZhbHVlcyA9IHRoaXMuZmluZEFsbEZhbHNlKCk7XG4gICAgaWYoIWZhbHNlVmFsdWVzLmxlbmd0aCl7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFsbFJpZ2h0Q2FsbEJhY2soKTtcbiAgICAgIC8vdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbigpO1xuICAgIH1cblxuICB9XG4gIFxuICBxdWVzdGlvbkNhbGxiYWNrID0gKGlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCkgPT4ge1xuICAgIGlmKGlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCl7XG4gICAgICBjb25zdCBmYWxzZVZhbHVlcyA9ICB0aGlzLmZpbmRBbGxGYWxzZSgpO1xuICAgICAgaWYoIWZhbHNlVmFsdWVzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuY2hlY2tDb3JyZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgXG4gIHJlbmRlclF1aXogPSAoKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9uc1tpXS5yZW5kZXJRdWVzdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNlY3Rpb24gPSAoKSA9PntcbiAgICBpZih0aGlzLnJlbmRlcmVkICYmIHRoaXMuc2VjdGlvbkNvbnRhaW5lcil7XG4gICAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uLSR7dGhpcy5udW1iZXJ9XCI+IDwvZGl2PlxuICAgIGBcbiAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5udW1iZXJ9YCk7XG4gICAgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnMgPSBbbmV3IFRleHRCZWZvcmVRdWVzdGlvbih0aGlzLmhlYWRlciwgdGhpcy5zZWN0aW9uQ29udGFpbmVyKSwgLi4udGhpcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpPT57XG4gICAgICByZXR1cm4gY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb24sIHRoaXMuc2VjdGlvbkNvbnRhaW5lciwgdGhpcy5xdWVzdGlvbkNhbGxiYWNrLCB0aGlzLnRlc3RNb2RlLCB0aGlzLm51bWJlciwgaW5kZXgpO1xuICAgIH0pXTtcbiAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVuZGVyUXVpeigpO1xuICAgIC8vIHNlY3Rpb25EYXRhLnF1ZXN0aW9ucztcbiAgfVxufSIsIiBjbGFzcyBTdG9yYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnN0b3JhZ2VLZXkgPSAndmJ3LXRlc3Qtc2F2ZWQnO1xuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc3RvcmFnZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy8gV3JpdGUgZGF0YSB0byB0aGUgbG9jYWwgc3RvcmFnZSB3aXRoIHNlY3Rpb25JbmRleCBhbmQgcXVlc3Rpb25JbmRleFxuICAgIHdyaXRlKHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCwgZGF0YSkge1xuICAgICAgY29uc3Qgc3RvcmFnZURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSkpO1xuICBcbiAgICAgIGlmICghc3RvcmFnZURhdGFbc2VjdGlvbkluZGV4XSkge1xuICAgICAgICBzdG9yYWdlRGF0YVtzZWN0aW9uSW5kZXhdID0ge307XG4gICAgICB9XG4gIFxuICAgICAgc3RvcmFnZURhdGFbc2VjdGlvbkluZGV4XVtxdWVzdGlvbkluZGV4XSA9IGRhdGE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VEYXRhKSk7XG4gICAgfVxuICBcbiAgICAvLyBSZWFkIHNwZWNpZmljIGRhdGEgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZSB1c2luZyBzZWN0aW9uSW5kZXggYW5kIHF1ZXN0aW9uSW5kZXhcbiAgICByZWFkKHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCkge1xuICAgICAgY29uc3Qgc3RvcmFnZURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RvcmFnZUtleSkpO1xuICAgICAgaWYgKHN0b3JhZ2VEYXRhW3NlY3Rpb25JbmRleF0gJiYgc3RvcmFnZURhdGFbc2VjdGlvbkluZGV4XVtxdWVzdGlvbkluZGV4XSkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZURhdGFbc2VjdGlvbkluZGV4XVtxdWVzdGlvbkluZGV4XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy8gUmVhZCBhbGwgZGF0YSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGluIGEgbWF0cml4IGZvcm1hdFxuICAgIHJlYWRBbGwoKSB7XG4gICAgICBjb25zdCBzdG9yYWdlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KSk7XG4gICAgICByZXR1cm4gc3RvcmFnZURhdGE7XG4gICAgfVxuICB9XG4gIFxuXG4gIGV4cG9ydCBjb25zdCBTdG9yYWdlID0gbmV3IFN0b3JhZ2VNYW5hZ2VyKCk7IiwiZnVuY3Rpb24gbWFrZWlkKGxlbmd0aCkge1xuICB2YXIgcmVzdWx0ICAgICAgICAgICA9ICcnO1xuICB2YXIgY2hhcmFjdGVycyAgICAgICA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JztcbiAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG4gICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT57XG4gIHJldHVybiBtYWtlaWQoMTApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb0hhc2goc3RyaW5nKSB7XG5cbiAgbGV0IGhhc2ggPSAwO1xuXG4gIGlmIChzdHJpbmcubGVuZ3RoID09IDApIHJldHVybiBoYXNoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgY2hhciA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgY2hhcjtcbiAgICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgfVxuXG4gIHJldHVybiBoYXNoO1xufSIsImltcG9ydCBRdWl6Q29udHJvbGxlciBmcm9tICcuL1F1aXpDb250cm9sbGVyJztcblxuLypcbm1vZHVsZXM6XG4gIDEuIG1vZHVsZSB0byBwYXJzZSBkYXRhIGZyb20gY3N2IG9yIGV0Y1xuICAyLiBtb2R1bGUgdG8gc2hvdyBxdWl6IGRhdGEsIHBhZ2luYXRpb24sIGV0Yy5cbiAgMy4gbW9kdWxlIHRvIGNoZWNrIGFuc3dlci5cbiAgNC4gbW9kdWxlIHRvIHNlbmQgZGF0YSB0byBzZXJ2ZXIgKG9yIHNtdGggbGlrZSB0aGlzKVxuXG4qL1xuXG4vLyBjb25zdCB0ZXN0UXVlc2lvbnMgPSBbXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICdzaW1wbGUtdGV4dCcsXG4vLyAgICAgcXVlc3Rpb25UZXh0OiAnSSB3ZW50IG91dCBpbiB0aGUgY29sZCB3aXRob3V0IGEgY29hdC4gKHNpbGx5KScsXG4vLyAgICAgcmlnaHRBbnN3ZXJzOiBbJ0l0IHdhcyBzaWxseSBvZiBtZSB0byBnbyBvdXQgaW4gdGhlIGNvbGQgd2l0aG91dCBhIGNvYXQnXSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHF1ZXN0aW9uVHlwZTogJ3RleHQtaW4tYmxhbmsnLFxuLy8gICAgIHF1ZXN0aW9uVGV4dDogJ1RoZXJlIGFyZSBub3QgbWFueSB0aGluZ3MgcGVvcGxlIHdpbGwgbm90IGRvIF9fX18gZmVhci4nLFxuLy8gICAgIHJpZ2h0QW5zd2VyczogWydvdXQgb2YnXSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHF1ZXN0aW9uVHlwZTogJ3ZhcmlhbnRzLXNpbmdsZScsXG4vLyAgICAgcXVlc3Rpb25UZXh0OiAnSSBsaXZlIGluIGEgdmVyeSBzbWFsbCB2aWxsYWdlLiBZb3UgcHJvYmFibHkgd29u4oCZdCBmaW5kIGl0IF9fIHlvdXIgbWFwLicsXG4vLyAgICAgcmlnaHRBbnN3ZXJzOiBbJ29uJ10sXG4vLyAgICAgdmFyaWFudHM6IFsnaW4nLCAnb24nXSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIHF1ZXN0aW9uVHlwZTogJ3ZhcmlhbnRzLW11bHRpJyxcbi8vICAgICBxdWVzdGlvblRleHQ6ICd0ZXN0IG11bHRpIHZhcmlhbnQnLFxuLy8gICAgIHJpZ2h0QW5zd2VyczogWydvbicsICdpbiddLFxuLy8gICAgIHZhcmlhbnRzOiBbJ2luJywgJ29uJ10sXG4vLyAgIH1cbi8vIF0gXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuXG4gIC8vIGluamVjdCBzdHlsZXMgdG8gcGFnZVxuICBjb25zdCBhcHBlbmRTdHlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2NzcyA9IHJlcXVpcmUoJy4vc3R5bGVzL2luZGV4LnNjc3MnKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcblxuICAgIGNvbnN0IHN0eWxlRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGVFbGVtLmlubmVySFRNTCA9IHNjc3M7XG5cbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE3NDVhYzM5NGEuanNcIjtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbiAgXG4gIGFwcGVuZFN0eWxlcygpO1xuXG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBpZD1cInN0YXJ0LWVsZW1cIiBjbGFzcz1cInN0YXJ0LXRleHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGFydC10ZXh0LWVsZW1cIj5FbmdsaXNoIGxldmVsIHRlc3Q8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGFydC10ZXh0LWVsZW1cIj41MCBxdWVzdGlvbnM8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXG4gIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInN0YXJ0XCI+U3RhcnQ8L2J1dHRvbj5gXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWl6Jyk7XG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICBjb25zdCBidXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XG4gIGNvbnN0IGVsZW0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI3N0YXJ0LWVsZW0nKTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICBcbiAgICBuZXcgUXVpekNvbnRyb2xsZXIod2luZG93LnRlc3REYXRhLCBjb250YWluZXIsIHdpbmRvdy5fX2lzVGVzdE1vZGVfXyB8fCBmYWxzZSk7XG4gIH0pO1xuXG5cblxufSk7XG5cbiIsIiBtb2R1bGUuZXhwb3J0cyA9IGRlY29kZVVSSUNvbXBvbmVudChcImJvZHklN0JiYWNrZ3JvdW5kLWNvbG9yJTNBJTIzZWZlZWU5JTNCYmFja2dyb3VuZC1pbWFnZSUzQXVybCglMjJodHRwcyUzQSUyRiUyRnVjYXJlY2RuLmNvbSUyRjZjYWQwZDhmLTRhYzEtNDdhOC1hYTI2LTZmYzE0YjZiNmQ1NiUyRiUyMiklM0JiYWNrZ3JvdW5kLWF0dGFjaG1lbnQlM0FmaXhlZCUzQmJhY2tncm91bmQtcG9zaXRpb24lM0FjZW50ZXIlN0QlNDBtZWRpYSUyMHNjcmVlbiUyMGFuZCUyMChtaW4tYXNwZWN0LXJhdGlvJTNBJTIwMS4yKSU3QmJvZHklN0JiYWNrZ3JvdW5kLWltYWdlJTNBdXJsKCUyMmh0dHBzJTNBJTJGJTJGdWNhcmVjZG4uY29tJTJGMTQ0MmMwODYtZjJiOC00YWU1LTk4NjctMzE5OGI3NTg1ODdmJTJGJTIyKSU3RCU3RCUyM3F1aXolN0JkaXNwbGF5JTNBZmxleCUzQm1heC13aWR0aCUzQTgwMHB4JTNCbWluLXdpZHRoJTNBMzAwcHglM0JtYXJnaW4lM0EwJTIwYXV0byUzQmZsZXgtZGlyZWN0aW9uJTNBY29sdW1uJTNCZm9udC1mYW1pbHklM0ElMjJPcGVuJTIwU2FucyUyMiUyQyUyMHNhbnMtc2VyaWYlM0Jmb250LXNpemUlM0ExNnB4JTNCbWFyZ2luLXRvcCUzQTQwcHglM0JtYXJnaW4tYm90dG9tJTNBNDBweCU3RC50ZXh0LXF1ZXN0aW9uLWl0YWxpYyU3QmZvbnQtd2VpZ2h0JTNBNDAwJTdELnF1ZXN0aW9uJTdCcG9zaXRpb24lM0FyZWxhdGl2ZSUzQmJhY2tncm91bmQtY29sb3IlM0ElMjNmZmYlM0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCUzQmJvcmRlci1yYWRpdXMlM0ExMHB4JTNCbWFyZ2luLWJvdHRvbSUzQTEycHglM0JwYWRkaW5nJTNBMjRweCUzQnBhZ2UtYnJlYWstaW5zaWRlJTNBYXZvaWQlM0JvdmVyZmxvdyUzQWhpZGRlbiU3RC5xdWVzdGlvbi5zZWN0aW9uLWhlYWRlciU3QmZvbnQtc2l6ZSUzQTE5cHglM0Jmb250LXdlaWdodCUzQWJvbGQlN0QuaGludC1jb250YWluZXIlN0Jwb3NpdGlvbiUzQWFic29sdXRlJTNCZGlzcGxheSUzQW5vbmUlM0JiYWNrZ3JvdW5kLWNvbG9yJTNBd2hpdGUlM0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzVkNjM2ZiUzQndpZHRoJTNBNTAlMjUlM0JoZWlnaHQlM0E3MCUyNSUzQmJvcmRlci1yYWRpdXMlM0E1cHglM0JwYWRkaW5nJTNBNXB4JTNCY29sb3IlM0ElMjMyOGE3NDUlM0J0b3AlM0E1cHglM0JyaWdodCUzQTMuNiUyNSUzQmFuaW1hdGlvbiUzQWhpbnQlMjAwLjNzJTIwZWFzZS1pbi1vdXQlMjAxJTdELmxhc3QtbWVzc2FnZSU3QnBhZGRpbmclM0ExNnB4JTNCZm9udC1zaXplJTNBMjVweCU3RC5sYXN0LW1lc3NhZ2UlMjAubWVzc2FnZSU3Qm1hcmdpbi1ib3R0b20lM0EyMHB4JTNCZm9udC1zaXplJTNBMjVweCUzQnRleHQtYWxpZ24lM0FjZW50ZXIlN0QubGFzdC1tZXNzYWdlJTIwLm1lc3NhZ2UuZ290JTdCbWFyZ2luLWJvdHRvbSUzQTVweCU3RCU0MGtleWZyYW1lcyUyMGhpbnQlN0IwJTI1JTdCcmlnaHQlM0EtNzAlMjUlN0Q5OSUyNSU3QnJpZ2h0JTNBMy42JTI1JTdEJTdELnF1ZXN0aW9uJTIwLmNoZWNrLXNpZ24lN0JjdXJzb3IlM0Fwb2ludGVyJTNCY29sb3IlM0ElMjMyOGE3NDUlM0Jwb3NpdGlvbiUzQWFic29sdXRlJTNCYm90dG9tJTNBMC41dnclM0JyaWdodCUzQTAuNnZ3JTNCZm9udC1zaXplJTNBMjBweCUzQndpZHRoJTNBMjBweCUzQmhlaWdodCUzQTIwcHglN0QucXVlc3Rpb24lMjAuaGludC1zaWduJTdCY3Vyc29yJTNBcG9pbnRlciUzQmNvbG9yJTNBZ3JleSUzQnBvc2l0aW9uJTNBYWJzb2x1dGUlM0J0b3AlM0EwLjV2dyUzQnJpZ2h0JTNBMC42dnclM0Jmb250LXNpemUlM0EyMHB4JTdELnF1ZXN0aW9uLmNvcnJlY3QlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzI4YTc0NSU3RC5xdWVzdGlvbi5jb3JyZWN0JTdCYm9yZGVyJTNBMXB4JTIwc29saWQlMjAlMjMyOGE3NDUlM0JiYWNrZ3JvdW5kLWNvbG9yJTNBcmdiYSg0MCUyQzE2NyUyQzY5JTJDMC4yKSU3RC5xdWVzdGlvbi5pbmNvcnJlY3QlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RjMzU0NSUzQmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDIyMCUyQzUzJTJDNjklMkMwLjIpJTdELnF1ZXN0aW9uLmluY29ycmVjdCUyMC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuayU3QmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDIyMCUyQzUzJTJDNjklMkMwLjUpJTdELnF1ZXN0aW9uJTIwLmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rLmluY29ycmVjdCU3QmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDIyMCUyQzUzJTJDNjklMkMwLjUpJTdEZGl2LnF1ZXN0aW9uLmNvcnJlY3QlMjAuYW5zd2VyLXRleHQtaW5wdXQuaW4tYmxhbmslN0JiYWNrZ3JvdW5kLWNvbG9yJTNBcmdiYSg0MCUyQzE2NyUyQzY5JTJDMC41KSU3RGRpdi5xdWVzdGlvbiUyMC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuay5jb3JyZWN0JTdCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoNDAlMkMxNjclMkM2OSUyQzAuNSklN0QuY2hlY2tib3gtY29udGFpbmVyJTdCbWFyZ2luLWJvdHRvbSUzQTE2cHglN0QuY2hlY2tib3gtY29udGFpbmVyJTIwaW5wdXQlN0JjdXJzb3IlM0Fwb2ludGVyJTdELmNoZWNrYm94LWNvbnRhaW5lciUyMGxhYmVsJTdCcG9zaXRpb24lM0FyZWxhdGl2ZSUzQmJvdHRvbSUzQTFweCUzQnBhZGRpbmctbGVmdCUzQTRweCUzQmN1cnNvciUzQXBvaW50ZXIlN0QucXVlc3Rpb24tdGV4dCU3QmZvbnQtc2l6ZSUzQTE2cHglM0Jmb250LXdlaWdodCUzQTUwMCUzQmxldHRlci1zcGFjaW5nJTNBLjFweCUzQmxpbmUtaGVpZ2h0JTNBMjRweCUzQmNvbG9yJTNBJTIzMjAyMTI0JTNCZm9udC13ZWlnaHQlM0E0MDAlM0J3aWR0aCUzQTEwMCUyNSUzQndvcmQtYnJlYWslM0FicmVhay13b3JkJTNCbWFyZ2luLWJvdHRvbSUzQTE2cHglN0QucXVlc3Rpb24uaW4tYmxhbmslMjAucXVlc3Rpb24tdGV4dCU3Qm1hcmdpbi1ib3R0b20lM0EwcHglN0QucXVlc3Rpb24uaW5jb3JyZWN0JTIwLmNoZWNrLXNpZ24lN0Jjb2xvciUzQSUyM2RjMzU0NSU3RC5hbnN3ZXIlN0JkaXNwbGF5JTNBZmxleCUzQmZsZXgtZGlyZWN0aW9uJTNBY29sdW1uJTdELmFuc3dlci10ZXh0JTdCd2lkdGglM0E2MCUyNSU3RC5hbnN3ZXItdGV4dC5pbi1ibGFuayU3QmRpc3BsYXklM0FpbmxpbmUtYmxvY2slM0J3aWR0aCUzQWF1dG8lM0JtYXJnaW4tcmlnaHQlM0E1cHglN0QuYW5zd2VyLXRleHQtaW5wdXQlN0JiYWNrZ3JvdW5kJTNBdHJhbnNwYXJlbnQlM0JwYWRkaW5nJTNBMnB4JTNCYm9yZGVyJTNBMCUzQmJvcmRlci1ib3R0b20lM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCUzQndpZHRoJTNBMTAwJTI1JTdELmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rJTdCcGFkZGluZyUzQTJweCUzQmJvcmRlciUzQTAlM0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCUzQndpZHRoJTNBMTAwJTI1JTdELmFuc3dlci10ZXh0LWlucHV0JTNBZm9jdXMlN0JvdXRsaW5lJTNBbm9uZSUzQmJvcmRlci1ib3R0b20lM0ExcHglMjBzb2xpZCUyMCUyMzVkNjM2ZiU3RC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuayUzQWZvY3VzJTdCb3V0bGluZSUzQW5vbmUlM0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCU3RC5lcnJvci10ZXh0JTdCY29sb3IlM0FyZWQlM0Jmb250LXNpemUlM0ExMnB4JTNCd2lkdGglM0E1NSUyNSUzQnBhZGRpbmctdG9wJTNBMTBweCU3RC5idXR0b24lN0J3aWR0aCUzQTE4MHB4JTNCaGVpZ2h0JTNBNDBweCUzQmJvcmRlci1yYWRpdXMlM0ExMHB4JTNCYm9yZGVyJTNBbm9uZSUzQmJhY2tncm91bmQtY29sb3IlM0F3aGl0ZSUzQmN1cnNvciUzQXBvaW50ZXIlN0QlMjNzdGFydCU3QmZvbnQtc2l6ZSUzQTIwcHglM0J3aWR0aCUzQTIwMHB4JTNCaGVpZ2h0JTNBNTVweCUzQmJvcmRlci1yYWRpdXMlM0E1cHglM0JhbGlnbi1zZWxmJTNBY2VudGVyJTNCYmFja2dyb3VuZC1jb2xvciUzQXRyYW5zcGFyZW50JTNCYmFja2dyb3VuZC1pbWFnZSUzQXVybCglMjJkYXRhJTNBaW1hZ2UlMkZzdmclMkJ4bWwlMkMlMjUzY3N2ZyUyMHdpZHRoJTNEJzEwMCUyNTI1JyUyMGhlaWdodCUzRCcxMDAlMjUyNSclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTI1M2UlMjUzY3JlY3QlMjB3aWR0aCUzRCcxMDAlMjUyNSclMjBoZWlnaHQlM0QnMTAwJTI1MjUnJTIwZmlsbCUzRCdub25lJyUyMHN0cm9rZSUzRCclMjUyMzMzMyclMjBzdHJva2Utd2lkdGglM0QnNiclMjBzdHJva2UtZGFzaGFycmF5JTNEJzElMjUyYyUyMDknJTIwc3Ryb2tlLWRhc2hvZmZzZXQlM0QnNDcnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qnc3F1YXJlJyUyRiUyNTNlJTI1M2MlMkZzdmclMjUzZSUyMiklN0QuYnV0dG9uJTNBZm9jdXMlN0JvdXRsaW5lJTNBbm9uZSU3RC5idXR0b24lM0FhY3RpdmUlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzVkNjM2ZiU3RC5idXR0b24tY29udGFpbmVyJTdCZGlzcGxheSUzQWZsZXglM0JqdXN0aWZ5LWNvbnRlbnQlM0FzcGFjZS1hcm91bmQlN0QlNDBtZWRpYSUyMChtYXgtd2lkdGglM0ElMjA2MDBweCklN0IuYW5zd2VyLXRleHQlN0J3aWR0aCUzQTkwJTI1JTdELnF1ZXN0aW9uJTIwLmNoZWNrLXNpZ24lN0JyaWdodCUzQTMwcHglM0Jmb250LXNpemUlM0EyNXB4JTNCYm90dG9tJTNBM3Z3JTdELnF1ZXN0aW9uJTIwLmhpbnQtc2lnbiU3QnJpZ2h0JTNBMzBweCUzQmZvbnQtc2l6ZSUzQTI1cHglM0Jib3R0b20lM0EzdnclN0QucXVlc3Rpb24uaW4tYmxhbmslMjAucXVlc3Rpb24tdGV4dCU3Qm1hcmdpbi1ib3R0b20lM0ExMnB4JTdEJTdEJTQwbWVkaWElMjAobWF4LXdpZHRoJTNBJTIwNTAwcHgpJTdCLnF1ZXN0aW9uJTdCcGFkZGluZy1yaWdodCUzQTQ1cHglN0QucXVlc3Rpb24lMjAuY2hlY2stc2lnbiU3QnJpZ2h0JTNBMjBweCUzQmZvbnQtc2l6ZSUzQTIycHglN0QucXVlc3Rpb24lMjAuaGludC1zaWduJTdCcmlnaHQlM0EyMHB4JTNCZm9udC1zaXplJTNBMjJweCU3RC5idXR0b24lN0J3aWR0aCUzQTEzMHB4JTNCaGVpZ2h0JTNBNDBweCUzQmZvbnQtc2l6ZSUzQTEycHglN0QlN0QucHJvZ3Jlc3NFbGVtQkclN0JoZWlnaHQlM0ExMHB4JTNCZGlzcGxheSUzQWZsZXglN0QucHJvZ3Jlc3NFbGVtQkclMjAucHJvZ3Jlc3NFbGVtJTdCd2lkdGglM0EwcHglM0JoZWlnaHQlM0ExMHB4JTNCYmFja2dyb3VuZC1jb2xvciUzQSUyMzI4MjgyOCUzQnRyYW5zaXRpb24lM0F3aWR0aCUyMDAuNHMlMkMlMjBiYWNrZ3JvdW5kLWNvbG9yJTIwMC40cyUzQm1hcmdpbi1sZWZ0JTNBNXB4JTdELnByb2dyZXNzRWxlbUJHJTIwLnByb2dyZXNzRWxlbSUzQWZpcnN0LWNoaWxkJTdCYm9yZGVyLXJhZGl1cyUzQTEwcHglMjAwcHglMjAwcHglMjAxMHB4JTdELnByb2dyZXNzRWxlbUJHJTIwLnByb2dyZXNzRWxlbSUzQWxhc3QtY2hpbGQlN0Jib3JkZXItcmFkaXVzJTNBMHB4JTIwMTBweCUyMDEwcHglMjAwcHglN0QucHJvZ3Jlc3NFbGVtQkclMjAucHJvZ3Jlc3NFbGVtTGFzdCU3QndpZHRoJTNBMHB4JTNCaGVpZ2h0JTNBMTBweCUzQmJhY2tncm91bmQtY29sb3IlM0FncmF5JTdEJTIzbnVtYmVyLWNvbnRhaW5lciU3Qm1hcmdpbi10b3AlM0E1cHglM0JtYXJnaW4tbGVmdCUzQTVweCU3RC5zdGFydC10ZXh0JTIwLnN0YXJ0LXRleHQtZWxlbSU3QnRleHQtYWxpZ24lM0FjZW50ZXIlM0JtYXJnaW4lM0EzMHB4JTIwMHB4JTNCZm9udC1zaXplJTNBMjVweCU3RC5zdGFydC10ZXh0JTIwLnN0YXJ0LXRleHQtZWxlbSUzQWxhc3QtY2hpbGQlN0JtYXJnaW4tYm90dG9tJTNBNTBweCU3RCUwQVwiKTsiXSwic291cmNlUm9vdCI6IiJ9