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
      let resultLevel = 'A0';
      if (correctCount >= 10) {
        resultLevel = 'A1';
      }
      if (correctCount >= 20) {
        resultLevel = 'A2';
      }
      if (correctCount >= 25) {
        resultLevel = 'B1';
      }
      if (correctCount >= 35) {
        resultLevel = 'B2';
      }
      if (correctCount >= 42) {
        resultLevel = 'C1';
      }
      if (correctCount >= 47) {
        resultLevel = 'C2';
      }
      const html = `
      <div class="last-message">
        <div class="message">
          Grats, you have completed the test!
        </div>
        <div class="message">
        You got ${correctCount} out of ${allQuestionsLength}
        </div>
        <div class="message">
        Your level is ${resultLevel}
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
    new _QuizController__WEBPACK_IMPORTED_MODULE_0__["default"](window.testData, container, true);
  });
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

 module.exports = decodeURIComponent("body%7Bbackground-color%3A%23efeee9%3Bbackground-image%3Aurl(https%3A%2F%2Fucarecdn.com%2F043a20be-635c-4622-81f1-5046155e47a8%2F)%7D%23quiz%7Bdisplay%3Aflex%3Bmax-width%3A800px%3Bmin-width%3A300px%3Bmargin%3A0%20auto%3Bflex-direction%3Acolumn%3Bfont-family%3A%22Open%20Sans%22%2C%20sans-serif%3Bfont-size%3A16px%3Bmargin-top%3A40px%3Bmargin-bottom%3A40px%7D.text-question-italic%7Bfont-weight%3A400%7D.question%7Bposition%3Arelative%3Bbackground-color%3A%23fff%3Bborder%3A1px%20solid%20%23dadce0%3Bborder-radius%3A10px%3Bmargin-bottom%3A12px%3Bpadding%3A24px%3Bpage-break-inside%3Aavoid%3Boverflow%3Ahidden%7D.question.section-header%7Bfont-size%3A19px%3Bfont-weight%3Abold%7D.hint-container%7Bposition%3Aabsolute%3Bdisplay%3Anone%3Bbackground-color%3Awhite%3Bborder%3A1px%20solid%20%235d636f%3Bwidth%3A50%25%3Bheight%3A70%25%3Bborder-radius%3A5px%3Bpadding%3A5px%3Bcolor%3A%2328a745%3Btop%3A5px%3Bright%3A3.6%25%3Banimation%3Ahint%200.3s%20ease-in-out%201%7D.last-message%7Bpadding%3A16px%3Bfont-size%3A25px%7D.last-message%20.message%7Bmargin-bottom%3A20px%3Bfont-size%3A35px%3Bdisplay%3Aflex%3Bjustify-content%3Acenter%7D%40keyframes%20hint%7B0%25%7Bright%3A-70%25%7D99%25%7Bright%3A3.6%25%7D%7D.question%20.check-sign%7Bcursor%3Apointer%3Bcolor%3A%2328a745%3Bposition%3Aabsolute%3Bbottom%3A0.5vw%3Bright%3A0.6vw%3Bfont-size%3A20px%3Bwidth%3A20px%3Bheight%3A20px%7D.question%20.hint-sign%7Bcursor%3Apointer%3Bcolor%3Agrey%3Bposition%3Aabsolute%3Btop%3A0.5vw%3Bright%3A0.6vw%3Bfont-size%3A20px%7D.question.correct%7Bborder%3A1px%20solid%20%2328a745%7D.question.correct%7Bborder%3A1px%20solid%20%2328a745%3Bbackground-color%3Argba(40%2C167%2C69%2C0.2)%7D.question.incorrect%7Bborder%3A1px%20solid%20%23dc3545%3Bbackground-color%3Argba(220%2C53%2C69%2C0.2)%7D.question.incorrect%20.answer-text-input.in-blank%7Bbackground-color%3Argba(220%2C53%2C69%2C0.5)%7D.question%20.answer-text-input.in-blank.incorrect%7Bbackground-color%3Argba(220%2C53%2C69%2C0.5)%7Ddiv.question.correct%20.answer-text-input.in-blank%7Bbackground-color%3Argba(40%2C167%2C69%2C0.5)%7Ddiv.question%20.answer-text-input.in-blank.correct%7Bbackground-color%3Argba(40%2C167%2C69%2C0.5)%7D.checkbox-container%7Bmargin-bottom%3A4px%7D.checkbox-container%20label%7Bposition%3Arelative%3Bbottom%3A1px%7D.question-text%7Bfont-size%3A16px%3Bfont-weight%3A500%3Bletter-spacing%3A.1px%3Bline-height%3A24px%3Bcolor%3A%23202124%3Bfont-weight%3A400%3Bwidth%3A100%25%3Bword-break%3Abreak-word%3Bmargin-bottom%3A16px%7D.question.in-blank%20.question-text%7Bmargin-bottom%3A0px%7D.question.incorrect%20.check-sign%7Bcolor%3A%23dc3545%7D.answer%7Bdisplay%3Aflex%3Bflex-direction%3Acolumn%7D.answer-text%7Bwidth%3A60%25%7D.answer-text.in-blank%7Bdisplay%3Ainline-block%3Bwidth%3Aauto%3Bmargin-right%3A5px%7D.answer-text-input%7Bbackground%3Atransparent%3Bpadding%3A2px%3Bborder%3A0%3Bborder-bottom%3A1px%20solid%20%23dadce0%3Bwidth%3A100%25%7D.answer-text-input.in-blank%7Bpadding%3A2px%3Bborder%3A0%3Bborder%3A1px%20solid%20%23dadce0%3Bwidth%3A100%25%7D.answer-text-input%3Afocus%7Boutline%3Anone%3Bborder-bottom%3A1px%20solid%20%235d636f%7D.answer-text-input.in-blank%3Afocus%7Boutline%3Anone%3Bborder%3A1px%20solid%20%23dadce0%7D.error-text%7Bcolor%3Ared%3Bfont-size%3A12px%3Bwidth%3A55%25%3Bpadding-top%3A10px%7D.button%7Bwidth%3A180px%3Bheight%3A40px%3Bborder-radius%3A10px%3Bborder%3Anone%3Bbackground-color%3Awhite%3Bcursor%3Apointer%7D%23start%7Bfont-size%3A20px%3Bwidth%3A200px%3Bheight%3A55px%3Balign-self%3Acenter%3Btext-transform%3Auppercase%3Bborder-radius%3A0%3Bbackground-color%3Atransparent%3Bbackground-image%3Aurl(%22data%3Aimage%2Fsvg%2Bxml%2C%253csvg%20width%3D'100%2525'%20height%3D'100%2525'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%253e%253crect%20width%3D'100%2525'%20height%3D'100%2525'%20fill%3D'none'%20stroke%3D'%2523333'%20stroke-width%3D'6'%20stroke-dasharray%3D'1%252c%209'%20stroke-dashoffset%3D'47'%20stroke-linecap%3D'square'%2F%253e%253c%2Fsvg%253e%22)%7D.button%3Afocus%7Boutline%3Anone%7D.button%3Aactive%7Bborder%3A1px%20solid%20%235d636f%7D.button-container%7Bdisplay%3Aflex%3Bjustify-content%3Aspace-around%7D%40media%20(max-width%3A%20600px)%7B.answer-text%7Bwidth%3A90%25%7D.question%20.check-sign%7Bright%3A30px%3Bfont-size%3A25px%3Bbottom%3A3vw%7D.question%20.hint-sign%7Bright%3A30px%3Bfont-size%3A25px%3Bbottom%3A3vw%7D.question.in-blank%20.question-text%7Bmargin-bottom%3A12px%7D%7D%40media%20(max-width%3A%20500px)%7B.question%7Bpadding-right%3A45px%7D.question%20.check-sign%7Bright%3A20px%3Bfont-size%3A22px%7D.question%20.hint-sign%7Bright%3A20px%3Bfont-size%3A22px%7D.button%7Bwidth%3A130px%3Bheight%3A40px%3Bfont-size%3A12px%7D%7D%0A");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5pc2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL0lRdWVzdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL011bHRpVmFyaWFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9NdWx0aXBsZVRleHRJbkJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vU2ltcGxlVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1NpbmdsZVZhcmlhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vVGV4dEluQmxhbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vY2hlY2tTdHJpbmdWYWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWl6Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvX3V0aWxzL3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIklRdWVzdGlvbiIsImNvbnN0cnVjdG9yIiwicXVlc3Rpb25EYXRhIiwicGFyZW50RWxlbSIsImNoZWNrQ2FsbGJhY2siLCJfdGhpcyIsInRlc3RNb2RlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmluZVByb3BlcnR5IiwibWFpbkVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJzaG91bGRDYWxsQmFjayIsImFuc3dlciIsImdldEFuc3dlciIsInJlc3VsdCIsImNlcnRhaW5DaGVjayIsImNoZWNrSW5pdGlhbGl6ZWQiLCJmaXJzdFRpbWVDb3JyZWN0IiwiaGludEJ1dHRvbiIsInJlc3VsdENvcnJlY3QiLCJyZW5kZXJSZXN1bHQiLCJpc0NvcnJlY3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJlcnJvcnNDb250YWluZXIiLCJyaWdodEFuc3dlcnMiLCJodG1sIiwidmFsaWRhdGVFcnJvclRleHQiLCJoaW50Q29udGFpbmVyIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZUhpbnRzIiwic2V0VGltZW91dCIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwiY29kZSIsImNoZWNrIiwic2hvd0hpbnRzIiwiaWQiLCJ1aWQiLCJpbnB1dCIsInJlbmRlclF1ZXN0aW9uIiwicXVlc3Rpb25UZW1wbGF0ZSIsImNoZWNrU2lnbkNvbnRhaW5lciIsImNvbnNvbGUiLCJsb2ciLCJiYXNlQWRkTGlzdGVuZXJzIiwiTXVsdGlWYXJpYW50c1F1ZXN0aW9uIiwiaW5jbHVkZXMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGFuZ2VMaXN0ZW5lciIsImZvckVhY2giLCJoaWRlIiwidXNlckFuc3dlcnMiLCJjaGVja011bHRpIiwic2VsZWN0ZWQiLCJBcnJheSIsImZyb20iLCJxdWVzdGlvblRleHQiLCJtYXAiLCJlbGVtIiwidmFsdWUiLCJhZGRDZXJ0YWluTGlzdGVuZXJzIiwiTXVsdGlwbGVUZXh0SW5CbGFua1F1ZXN0aW9ucyIsInVzZXJBbnN3ZXIiLCJjb3JyZWN0IiwiY29ycmVjdEluZGV4ZXMiLCJ2YWxpZGF0ZU11bHRpQmxhbmtzIiwiaSIsImVsIiwidXNlclZhbHVlIiwiU2ltcGxlVGV4dFF1ZXN0aW9uIiwidmFsaWRhdGVTaW1wbGVUZXh0IiwiU2luZ2xlVmFyaWFudFF1ZXN0aW9uIiwiY29tcGFyZVR3byIsIlRleHRJbkJsYW5rUXVlc3Rpb24iLCJ2YWxpZGF0ZVRleHRJbkJsYW5rIiwiVGV4dEJlZm9yZVF1ZXN0aW9uIiwidGV4dCIsInNwbGl0UmVnRXhwIiwiUmVnRXhwIiwic3BsaXR0ZWRUZXh0Iiwic3BsaXQiLCJzZWN0aW9uSGVhZGVyVGV4dCIsImNyZWF0ZVRleHRJbkJsYW5rIiwiY2FsbGJhY2siLCJtYXRjaCIsIk11bHRpVGV4dEluQmxhbmtRdWVzdGlvbiIsImNyZWF0ZVF1ZXN0aW9uIiwicXVlc3Rpb25UeXBlIiwiRXJyb3IiLCJxdWVzVmFyaWFudHMiLCJ2YXJpYW50cyIsImV4Y2x1ZGVEYXRhIiwiU2hvcnRlbmluZ0RpY3Rpb25hcnkiLCJmaW5kU2hvcnRlbmluZ1JlZ0V4cCIsInJpZ2h0QW5zd2VyIiwid29ya2VkVXNlckFuc3dlciIsInByZXBhcmVTdHJpbmciLCJ3b3JrZWRSaWdodEFuc3dlciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInJlbW92ZVBvc3NpYmlsaXRpZXMiLCJzb21lIiwiZXhjbHVkZSIsInVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyIsImZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXMiLCJjb21wYXJlRWFjaFRvRWFjaCIsIndvcmtlZFVzZXJBbnN3ZXJzIiwic29ydCIsImlzRXF1YWwiLCJmaW5kTWF4UHJldmlvdXMiLCJvYmoiLCJjdXJyZW50S2V5IiwibWF4Iiwia2V5IiwiTnVtYmVyIiwidGV4dFZhcmlhbnRzIiwic2hvcnRTeWJtb2xzIiwicmVnIiwid29yZHMiLCJpbmRleFRvUHVzaEluTWFpbiIsInByZXZpb3VzVmFyaWFudCIsIm5ld1ZhcmlhbnQiLCJwdXNoIiwidmFyaWFudCIsImpvaW4iLCJ2YWxpZEluZGV4ZXMiLCJpc0FsbFZhbGlkIiwiZ2xvYmFsVkEiLCJpc09uZVRpbWVWYWxpZCIsImoiLCJ1bmlxIiwiZmlsdGVyIiwidiIsImEiLCJpbmRleE9mIiwidW5pcXVlVXNlckFuc3dlcnMiLCJjYWxjdWxhdGVXaWR0aCIsImFuc3dlcnMiLCJtYXhMZW5ndGgiLCJzcGxpdHRlZCIsIndpZHRoIiwiYW5zd2VyVGVtcGxhdGVJbkJsYW5rIiwiYW5zd2VyVGVtcGxhdGUiLCJpbmRleCIsIlF1aXpDb250cm9sbGVyIiwic2VjdGlvbnMiLCJwYXJlbnRFbGVtZW50Iiwic2VjdGlvbk51bWJlciIsImN1cnJlbnRTZWN0aW9uIiwiY29udmVydGVkU2VjdGlvbnMiLCJyZW5kZXJTZWN0aW9uIiwibnVtYmVyVGV4dENvbnRhaW5lciIsImlubmVyVGV4dCIsInByZXZCdXR0b24iLCJtYXhTZWN0aW9uTnVtYmVyIiwiaXNMYXN0U2VjdGlvbiIsIm5leHRCdXR0b24iLCJoaWRlU2VjdGlvbiIsImNvbXBsZXRlZCIsImluaXRTZWN0aW9uIiwicmVuZGVyTmV4dFNlY3Rpb25CdXR0b24iLCJjaGVja0J1dHRvbiIsImVuZFF1aXpCdXR0b24iLCJjaGVja0NvcnJlY3QiLCJjaGFuZ2VTZWN0aW9uIiwicXVlc3Rpb25zQ29udGFpbmVyIiwicmVuZGVyRW5kT2ZUZXN0IiwicmVuZGVyQ29uZ3JhdHMiLCJzZWN0aW9uIiwiYWxsUXVlc3Rpb25zIiwiY29udmVydGVkUXVlc3Rpb25zIiwiYWxsUXVlc3Rpb25zTGVuZ3RoIiwiY29ycmVjdENvdW50IiwicXVlc3QiLCJyZXN1bHRMZXZlbCIsIm9sZExhc3RNZXNzYWdlIiwicmVtb3ZlQ2hpbGQiLCJmaXJzdFRpbWVDb3JyZWN0Q291bnQiLCJwZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwicmVuZGVyTWFpbkNvbnRyb2xzIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiY29udGFpbmVyIiwiYWxsUmlnaHRDYWxsQmFjayIsIm51bWJlciIsInF1ZXMiLCJmYWxzZVZhbHVlcyIsImZpbmRBbGxGYWxzZSIsImlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCIsInJlbmRlcmVkIiwic2VjdGlvbkNvbnRhaW5lciIsImhlYWRlciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwicXVlc3Rpb25DYWxsYmFjayIsInJlbmRlclF1aXoiLCJtYWtlaWQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwiYXBwZW5kU3R5bGVzIiwic2NzcyIsInJlcXVpcmUiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZUVsZW0iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic2NyaXB0Iiwic3JjIiwiYXBwZW5kQ2hpbGQiLCJidXR0b24iLCJzdGFydCIsInRlc3REYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCLEVBQUU7QUFDbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDdnpEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJtQztBQUNjO0FBRWxDLE1BQU1BLFNBQVMsQ0FBQztFQUM3QkMsV0FBV0EsQ0FBQ0MsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBa0I7SUFBQSxJQUFBQyxLQUFBO0lBQUEsSUFBaEJDLFFBQVEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUMsS0FBSztJQUFBRyw0RUFBQSxlQVk1RCxNQUFNO01BQ1gsSUFBSSxDQUFDQyxXQUFXLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDekMsQ0FBQztJQUFBSCw0RUFBQSxnQkFFTyxZQUEyQjtNQUFBLElBQTFCSSxjQUFjLEdBQUFQLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUk7TUFDNUIsTUFBTVEsTUFBTSxHQUFHVixLQUFJLENBQUNXLFNBQVMsQ0FBQyxDQUFDO01BQy9CLE1BQU1DLE1BQU0sR0FBR1osS0FBSSxDQUFDYSxZQUFZLENBQUNILE1BQU0sQ0FBQztNQUN4QyxJQUFJLENBQUNWLEtBQUksQ0FBQ2MsZ0JBQWdCLEVBQUU7UUFDMUJkLEtBQUksQ0FBQ2MsZ0JBQWdCLEdBQUcsSUFBSTtRQUM1QmQsS0FBSSxDQUFDZSxnQkFBZ0IsR0FBR0gsTUFBTTtRQUM5QlosS0FBSSxDQUFDZ0IsVUFBVSxDQUFDVCxLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQ3pDO01BQ0FSLEtBQUksQ0FBQ2lCLGFBQWEsR0FBR0wsTUFBTTtNQUMzQlosS0FBSSxDQUFDa0IsWUFBWSxDQUFDTixNQUFNLENBQUM7TUFDekIsSUFBSUgsY0FBYyxFQUFFO1FBQ2xCVCxLQUFJLENBQUNELGFBQWEsQ0FBQ2EsTUFBTSxDQUFDO01BQzVCO0lBQ0YsQ0FBQztJQUFBUCw0RUFBQSx1QkFFZWMsU0FBUyxJQUFLO01BQzVCLElBQUlBLFNBQVMsRUFBRTtRQUViLElBQUksQ0FBQ2IsV0FBVyxDQUFDYyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDOUMsSUFBSSxDQUFDZixXQUFXLENBQUNjLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUMzQyxDQUFDLE1BQU07UUFDTCxJQUFJLENBQUNoQixXQUFXLENBQUNjLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxJQUFJLENBQUNmLFdBQVcsQ0FBQ2MsU0FBUyxDQUFDRSxHQUFHLENBQUMsV0FBVyxDQUFDO01BQzdDO0lBRUYsQ0FBQztJQUFBakIsNEVBQUEsb0JBb0JXLE1BQU07TUFDaEIsSUFBRyxJQUFJLENBQUNKLFFBQVEsRUFBQztRQUNmLE9BQU8sS0FBSztNQUNkO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ3NCLGVBQWUsRUFBRTtRQUN6QixNQUFNO1VBQUVDO1FBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzNCLFlBQVk7UUFDMUMsTUFBTTRCLElBQUksR0FBR0Msb0VBQWlCLENBQUNGLFlBQVksQ0FBQztRQUM1QyxJQUFJLENBQUNHLGFBQWEsQ0FBQ0Msa0JBQWtCLENBQUMsV0FBVyxFQUFFSCxJQUFJLENBQUM7UUFDeEQsSUFBSSxDQUFDRixlQUFlLEdBQUcsSUFBSSxDQUFDSSxhQUFhLENBQUNFLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztNQUNyRjtNQUNBLElBQUksQ0FBQ0YsYUFBYSxDQUFDcEIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztNQUMxQyxJQUFJLENBQUNtQixhQUFhLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLFVBQVUsQ0FBQztNQUM3REMsVUFBVSxDQUFDLE1BQU07UUFDZixJQUFJLENBQUNELFVBQVUsQ0FBQyxDQUFDO01BQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDVixDQUFDO0lBQUExQiw0RUFBQSxxQkFFWSxNQUFNO01BQ2pCLElBQUksQ0FBQ3NCLGFBQWEsQ0FBQ3BCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07SUFDM0MsQ0FBQztJQUFBSCw0RUFBQSwyQkFFa0IsTUFBTTtNQUN2QixJQUFHLElBQUksQ0FBQ0osUUFBUSxFQUFDO1FBQ2Y7TUFDRjtNQUNBLE1BQU1nQyxNQUFNLEdBQUcsSUFBSSxDQUFDM0IsV0FBVyxDQUFDNEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO01BQ3pELElBQUlELE1BQU0sQ0FBQzlCLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDdkIsSUFBSSxDQUFDRyxXQUFXLENBQUN1QixhQUFhLENBQUMsT0FBTyxDQUFDLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBR0ssQ0FBQyxJQUFLO1VBQUUsSUFBR0EsQ0FBQyxDQUFDQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQztVQUFDO1FBQUUsQ0FBQyxDQUFDO01BQ3hIO01BQ0EsSUFBSSxDQUFDL0IsV0FBVyxDQUFDdUIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDTyxLQUFLLENBQUM7TUFDbkYsSUFBSSxDQUFDckIsVUFBVSxDQUFDYyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDUSxTQUFTLENBQUM7SUFDM0QsQ0FBQztJQTNGQyxJQUFJLENBQUN6QyxZQUFZLEdBQUdBLFlBQVk7SUFDaEMsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7SUFDNUIsSUFBSSxDQUFDeUMsRUFBRSxHQUFHQywwREFBRyxDQUFDLENBQUM7SUFDZixJQUFJLENBQUN2QixhQUFhLEdBQUcsS0FBSztJQUMxQixJQUFJLENBQUNILGdCQUFnQixHQUFHLEtBQUs7SUFDN0IsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBRyxLQUFLO0lBQzdCLElBQUksQ0FBQzBCLEtBQUssR0FBRyxJQUFJO0lBQ2pCLElBQUksQ0FBQzFDLGFBQWEsR0FBR0EsYUFBYTtJQUNsQyxJQUFJLENBQUNFLFFBQVEsR0FBR0EsUUFBUTtFQUMxQjtFQWlDQXlDLGNBQWNBLENBQUEsRUFBRztJQUNmLE1BQU1qQixJQUFJLEdBQUcsSUFBSSxDQUFDa0IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDOUMsWUFBWSxFQUFFLElBQUksQ0FBQzBDLEVBQUUsQ0FBQztJQUM5RCxJQUFJLENBQUN6QyxVQUFVLENBQUM4QixrQkFBa0IsQ0FBQyxXQUFXLEVBQUVILElBQUksQ0FBQztJQUNyRCxNQUFNbkIsV0FBVyxHQUFHLElBQUksQ0FBQ1IsVUFBVSxDQUFDK0IsYUFBYSxDQUFFLElBQUcsSUFBSSxDQUFDVSxFQUFHLEVBQUMsQ0FBQztJQUNoRSxJQUFJLENBQUNqQyxXQUFXLEdBQUdBLFdBQVc7SUFDOUIsSUFBSSxDQUFDbUMsS0FBSyxHQUFHLElBQUksQ0FBQ25DLFdBQVcsQ0FBQ3VCLGFBQWEsQ0FBQyxPQUFPLENBQUM7SUFDcEQsSUFBSSxDQUFDYixVQUFVLEdBQUcsSUFBSSxDQUFDVixXQUFXLENBQUN1QixhQUFhLENBQUMsWUFBWSxDQUFDO0lBQzlELElBQUksQ0FBQ2IsVUFBVSxDQUFDVCxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3RDLElBQUksQ0FBQ21CLGFBQWEsR0FBRyxJQUFJLENBQUNyQixXQUFXLENBQUN1QixhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFDdEUsSUFBSSxDQUFDZSxrQkFBa0IsR0FBRyxJQUFJLENBQUN0QyxXQUFXLENBQUN1QixhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3ZFZ0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQzdDLFFBQVEsQ0FBQztJQUN0QyxJQUFHLElBQUksQ0FBQ0EsUUFBUSxFQUFDO01BQ2YsSUFBSSxDQUFDZSxVQUFVLENBQUNULEtBQUssQ0FBQ0MsT0FBTyxHQUFDLE1BQU07TUFDcEMsSUFBSSxDQUFDb0Msa0JBQWtCLENBQUNyQyxLQUFLLENBQUNDLE9BQU8sR0FBQyxNQUFNO0lBQzlDO0lBQ0EsSUFBSSxDQUFDdUMsZ0JBQWdCLENBQUMsQ0FBQztFQUN6QjtBQW1DRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdxQztBQUU4QjtBQUN1QjtBQUN0RDtBQUVyQixNQUFNQyxxQkFBcUIsU0FBU3JELGtEQUFTLENBQUM7RUFBQUMsWUFBQTtJQUFBLFNBQUFNLFNBQUE7SUFBQUcsNEVBQUEsMkJBRXhDLFlBQWE7TUFDOUIsT0FBT3NDLG1FQUFnQixDQUFDLEdBQUF6QyxTQUFPLENBQUM7SUFDbEMsQ0FBQztJQUFBRyw0RUFBQSx5QkFVaUI4QixDQUFDLElBQUs7TUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQ0YsTUFBTSxDQUFDZ0IsUUFBUSxDQUFDZCxDQUFDLENBQUNlLE1BQU0sQ0FBQyxFQUFFO1FBQ25DLElBQUksQ0FBQ2IsS0FBSyxDQUFDLENBQUM7UUFDWmMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQztRQUNsRUgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQztNQUNyRTtJQUNGLENBQUM7SUFBQWpELDRFQUFBLDhCQUVxQixNQUFNO01BQzFCLElBQUksQ0FBQzRCLE1BQU0sQ0FBQ3NCLE9BQU8sQ0FBRWQsS0FBSyxJQUFLO1FBQzdCQSxLQUFLLENBQUNYLGdCQUFnQixDQUFDLFFBQVEsRUFBR0ssQ0FBQyxJQUFLO1VBQ3RDZ0IsTUFBTSxDQUFDQyxRQUFRLENBQUN0QixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDd0IsY0FBYyxDQUFDO1VBQy9ESCxNQUFNLENBQUNDLFFBQVEsQ0FBQ3RCLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUN3QixjQUFjLENBQUM7UUFDbEUsQ0FBQyxDQUFDO01BQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFBakQsNEVBQUEsZUFFTSxNQUFNO01BQ1gsS0FBSyxDQUFDbUQsSUFBSSxDQUFDLENBQUM7TUFDWkwsTUFBTSxDQUFDQyxRQUFRLENBQUNDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQztNQUNsRUgsTUFBTSxDQUFDQyxRQUFRLENBQUNDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQztJQUNyRSxDQUFDO0lBQUFqRCw0RUFBQSx1QkFRZW9ELFdBQVcsSUFBSztNQUM5QixNQUFNO1FBQUVqQztNQUFhLENBQUMsR0FBRyxJQUFJLENBQUMzQixZQUFZO01BQzFDLE9BQU82RCxvRUFBVSxDQUFDRCxXQUFXLEVBQUVqQyxZQUFZLENBQUM7SUFDOUMsQ0FBQztFQUFBO0VBeENEYixTQUFTQSxDQUFBLEVBQUc7SUFDVixNQUFNZ0QsUUFBUSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN2RCxXQUFXLENBQUM0QixnQkFBZ0IsQ0FBRSxlQUFjLElBQUksQ0FBQ3JDLFlBQVksQ0FBQ2lFLFlBQWEsWUFBVyxDQUFDLENBQUM7SUFDekgsSUFBSUgsUUFBUSxDQUFDeEQsTUFBTSxFQUFFO01BQ25CLE9BQU93RCxRQUFRLENBQUNJLEdBQUcsQ0FBRUMsSUFBSSxJQUFLQSxJQUFJLENBQUNDLEtBQUssQ0FBQztJQUMzQztJQUNBLE9BQU8sRUFBRTtFQUNYO0VBeUJBdkIsY0FBY0EsQ0FBQSxFQUFHO0lBQ2YsS0FBSyxDQUFDQSxjQUFjLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNULE1BQU0sR0FBRzJCLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3ZELFdBQVcsQ0FBQzRCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BFLElBQUksQ0FBQ2dDLG1CQUFtQixDQUFDLENBQUM7RUFDNUI7QUFPRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REaUU7QUFDVDtBQUNwQjtBQUVyQixNQUFNQyw0QkFBNEIsU0FBU3hFLGtEQUFTO0VBQUFDLFlBQUE7SUFBQSxTQUFBTSxTQUFBO0lBQUFHLDRFQUFBLDJCQUM3QyxZQUFhO01BQy9CLE9BQU9zQyxtRUFBZ0IsQ0FBQyxHQUFBekMsU0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFBQUcsNEVBQUEsdUJBTWUrRCxVQUFVLElBQUs7TUFDN0IsTUFBTTtRQUFFNUMsWUFBWTtRQUFFc0M7TUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDakUsWUFBWTtNQUN4RCxNQUFNO1FBQUN3RSxPQUFPO1FBQUVDO01BQWMsQ0FBQyxHQUFJQyw2RUFBbUIsQ0FBQ0gsVUFBVSxFQUFFNUMsWUFBWSxFQUFFc0MsWUFBWSxDQUFDO01BQzlGLElBQUksQ0FBQ1EsY0FBYyxHQUFHQSxjQUFjO01BQ3BDLE9BQU9ELE9BQU87SUFDaEIsQ0FBQztJQUFBaEUsNEVBQUEsdUJBRWVjLFNBQVMsSUFBSTtNQUMzQixLQUFJLElBQUlxRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUMsSUFBSSxDQUFDdkMsTUFBTSxDQUFDOUIsTUFBTSxFQUFFcUUsQ0FBQyxFQUFFLEVBQUM7UUFDdkMsSUFBRyxJQUFJLENBQUNGLGNBQWMsQ0FBQ3JCLFFBQVEsQ0FBQ3VCLENBQUMsQ0FBQyxFQUFDO1VBQ2pDLElBQUksQ0FBQ3ZDLE1BQU0sQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDcEQsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO1VBQzVDLElBQUksQ0FBQ1ksTUFBTSxDQUFDdUMsQ0FBQyxDQUFDLENBQUNwRCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUM7UUFDekMsQ0FBQyxNQUFJO1VBQ0gsSUFBSSxDQUFDVyxNQUFNLENBQUN1QyxDQUFDLENBQUMsQ0FBQ3BELFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUMxQyxJQUFJLENBQUNZLE1BQU0sQ0FBQ3VDLENBQUMsQ0FBQyxDQUFDcEQsU0FBUyxDQUFDRSxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzNDO01BQ0Y7TUFDQSxJQUFHSCxTQUFTLEVBQUM7UUFDWCxJQUFJLENBQUNiLFdBQVcsQ0FBQ2MsU0FBUyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQzlDLElBQUksQ0FBQ2YsV0FBVyxDQUFDYyxTQUFTLENBQUNFLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFDM0MsQ0FBQyxNQUFJO1FBQ0gsSUFBSSxDQUFDaEIsV0FBVyxDQUFDYyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxDQUFDZixXQUFXLENBQUNjLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDLFdBQVcsQ0FBQztNQUM3QztJQUNGLENBQUM7SUFBQWpCLDRFQUFBLHlCQUVpQjhCLENBQUMsSUFBRztNQUNwQixJQUFHLENBQUMsSUFBSSxDQUFDRixNQUFNLENBQUNnQixRQUFRLENBQUNkLENBQUMsQ0FBQ2UsTUFBTSxDQUFDLEVBQUM7UUFDakMsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQztRQUNaYyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO1FBQ2xFSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO01BQ3JFO0lBQ0YsQ0FBQztJQUFBakQsNEVBQUEsOEJBRXFCLE1BQUs7TUFDekIsSUFBSSxDQUFDNEIsTUFBTSxDQUFDc0IsT0FBTyxDQUFFZCxLQUFLLElBQUc7UUFDM0JBLEtBQUssQ0FBQ1gsZ0JBQWdCLENBQUMsUUFBUSxFQUFHSyxDQUFDLElBQUc7VUFDcENnQixNQUFNLENBQUNDLFFBQVEsQ0FBQ3RCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUN3QixjQUFjLENBQUM7VUFDL0RILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDdEIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ3dCLGNBQWMsQ0FBQztRQUNsRSxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBQUFqRCw0RUFBQSxlQUVNLE1BQUs7TUFDVixLQUFLLENBQUNtRCxJQUFJLENBQUMsQ0FBQztNQUNaTCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO01BQ2xFSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO0lBQ3JFLENBQUM7SUFBQWpELDRFQUFBLHdCQVFpQm9FLEVBQUUsSUFBSTtNQUN0QixNQUFNQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ3ZCLE1BQU0sQ0FBQ2UsS0FBSztNQUNqQyxJQUFJLENBQUNTLFNBQVMsR0FBR0EsU0FBUztNQUMxQixJQUFJLENBQUNyQyxLQUFLLENBQUNxQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztFQUFBO0VBL0REL0QsU0FBU0EsQ0FBQSxFQUFFO0lBQ1QsT0FBTyxJQUFJLENBQUNzQixNQUFNLENBQUM4QixHQUFHLENBQUV0QixLQUFLLElBQUlBLEtBQUssQ0FBQ3dCLEtBQUssQ0FBQztFQUMvQztFQW1EQXZCLGNBQWNBLENBQUEsRUFBRTtJQUNkLEtBQUssQ0FBQ0EsY0FBYyxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDVCxNQUFNLEdBQUcyQixLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN2RCxXQUFXLENBQUM0QixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRSxJQUFJLENBQUNnQyxtQkFBbUIsQ0FBQyxDQUFDO0VBQzVCO0FBUUYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRWlFO0FBQ1c7QUFDeEM7QUFFckIsTUFBTVMsa0JBQWtCLFNBQVNoRixrREFBUztFQUFBQyxZQUFBO0lBQUEsU0FBQU0sU0FBQTtJQUN2RDtJQUNBO0lBQ0E7SUFBQUcsNEVBQUEsMkJBQ29CLFlBQWE7TUFDL0IsT0FBT3NDLG1FQUFnQixDQUFDLEdBQUF6QyxTQUFPLENBQUM7SUFDbEMsQ0FBQztJQUFBRyw0RUFBQSx1QkFNZStELFVBQVUsSUFBSTtNQUM1QixNQUFNO1FBQUU1QztNQUFhLENBQUMsR0FBRyxJQUFJLENBQUMzQixZQUFZO01BQzFDLE9BQU8rRSw0RUFBa0IsQ0FBQ1IsVUFBVSxFQUFFNUMsWUFBWSxDQUFDO0lBQ3JELENBQUM7SUFBQW5CLDRFQUFBLHdCQUVpQm9FLEVBQUUsSUFBSTtNQUN0QixNQUFNQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ3ZCLE1BQU0sQ0FBQ2UsS0FBSztNQUNqQyxJQUFJLENBQUNTLFNBQVMsR0FBR0EsU0FBUztNQUMxQixJQUFJLENBQUNyQyxLQUFLLENBQUNxQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztFQUFBO0VBYkQvRCxTQUFTQSxDQUFBLEVBQUU7SUFDVCxPQUFPLElBQUksQ0FBQzhCLEtBQUssQ0FBQ3dCLEtBQUs7RUFDekI7QUFhRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCbUU7QUFDdUI7QUFDdEQ7QUFFckIsTUFBTVkscUJBQXFCLFNBQVNsRixrREFBUyxDQUFDO0VBQUFDLFlBQUE7SUFBQSxTQUFBTSxTQUFBO0lBQUFHLDRFQUFBLDJCQUV4QyxZQUFhO01BQzlCLE9BQU9zQyxtRUFBZ0IsQ0FBQyxHQUFBekMsU0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFBQUcsNEVBQUEseUJBVWlCOEIsQ0FBQyxJQUFLO01BRXRCLElBQUcsSUFBSSxDQUFDbEMsUUFBUSxFQUFDO1FBQ2Y7TUFDRjtNQUNBLElBQUksQ0FBQyxJQUFJLENBQUNnQyxNQUFNLENBQUNnQixRQUFRLENBQUNkLENBQUMsQ0FBQ2UsTUFBTSxDQUFDLEVBQUU7UUFDbkMsSUFBSSxDQUFDYixLQUFLLENBQUMsQ0FBQztRQUNaYyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO1FBQ2xFSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO01BQ3JFO0lBQ0YsQ0FBQztJQUFBakQsNEVBQUEsOEJBRXFCLE1BQU07TUFDMUIsSUFBSSxDQUFDNEIsTUFBTSxDQUFDc0IsT0FBTyxDQUFFZCxLQUFLLElBQUs7UUFDN0JBLEtBQUssQ0FBQ1gsZ0JBQWdCLENBQUMsUUFBUSxFQUFHSyxDQUFDLElBQUs7VUFDdENnQixNQUFNLENBQUNDLFFBQVEsQ0FBQ3RCLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUN3QixjQUFjLENBQUM7VUFDL0RILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDdEIsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ3dCLGNBQWMsQ0FBQztRQUNsRSxDQUFDLENBQUM7TUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBQUFqRCw0RUFBQSxlQUVNLE1BQU07TUFDWCxLQUFLLENBQUNtRCxJQUFJLENBQUMsQ0FBQztNQUNaTCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO01BQ2xFSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsY0FBYyxDQUFDO0lBQ3JFLENBQUM7SUFBQWpELDRFQUFBLHVCQVFlK0QsVUFBVSxJQUFLO01BQzdCLE1BQU07UUFBRTVDO01BQWEsQ0FBQyxHQUFHLElBQUksQ0FBQzNCLFlBQVk7TUFDMUMsT0FBT2lGLG9FQUFVLENBQUNWLFVBQVUsRUFBRTVDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0VBQUE7RUE1Q0RiLFNBQVNBLENBQUEsRUFBRztJQUNWLE1BQU1nRCxRQUFRLEdBQUcsSUFBSSxDQUFDckQsV0FBVyxDQUFDdUIsYUFBYSxDQUFFLGVBQWMsSUFBSSxDQUFDaEMsWUFBWSxDQUFDaUUsWUFBYSxZQUFXLENBQUM7SUFDMUcsSUFBSUgsUUFBUSxFQUFFO01BQ1osT0FBT0EsUUFBUSxDQUFDTSxLQUFLO0lBQ3ZCO0lBQ0EsT0FBTzdELFNBQVM7RUFDbEI7RUE2QkFzQyxjQUFjQSxDQUFBLEVBQUc7SUFDZixLQUFLLENBQUNBLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCLElBQUksQ0FBQ1QsTUFBTSxHQUFHMkIsS0FBSyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDdkQsV0FBVyxDQUFDNEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEUsSUFBSSxDQUFDZ0MsbUJBQW1CLENBQUMsQ0FBQztFQUM1QjtBQU9GLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERpRTtBQUNXO0FBQ3hDO0FBRXJCLE1BQU1hLG1CQUFtQixTQUFTcEYsa0RBQVM7RUFBQUMsWUFBQTtJQUFBLFNBQUFNLFNBQUE7SUFBQUcsNEVBQUEsMkJBQ3BDLFlBQWE7TUFDL0IsT0FBT3NDLG1FQUFnQixDQUFDLEdBQUF6QyxTQUFPLENBQUM7SUFDbEMsQ0FBQztJQUFBRyw0RUFBQSx1QkFNZStELFVBQVUsSUFBSztNQUM3QixNQUFNO1FBQUU1QyxZQUFZO1FBQUVzQztNQUFhLENBQUMsR0FBRyxJQUFJLENBQUNqRSxZQUFZO01BQ3hELE9BQU9tRiw2RUFBbUIsQ0FBQ1osVUFBVSxFQUFFNUMsWUFBWSxFQUFFc0MsWUFBWSxDQUFDO0lBQ3BFLENBQUM7SUFBQXpELDRFQUFBLHdCQUVpQm9FLEVBQUUsSUFBSTtNQUN0QixNQUFNQyxTQUFTLEdBQUdELEVBQUUsQ0FBQ3ZCLE1BQU0sQ0FBQ2UsS0FBSztNQUNqQyxJQUFJLENBQUNTLFNBQVMsR0FBR0EsU0FBUztNQUMxQixJQUFJLENBQUNyQyxLQUFLLENBQUNxQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztFQUFBO0VBYkQvRCxTQUFTQSxDQUFBLEVBQUU7SUFDVCxPQUFPLElBQUksQ0FBQzhCLEtBQUssQ0FBQ3dCLEtBQUs7RUFDekI7QUFhRixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjhDO0FBQ0U7QUFDYTtBQUNSO0FBQ0Q7QUFDakI7QUFJNUIsTUFBTWdCLGtCQUFrQjtFQUM3QnJGLFdBQVdBLENBQUNzRixJQUFJLEVBQUVwRixVQUFVLEVBQUM7SUFBQU8sNEVBQUEsZUFRdEIsTUFBSztNQUNWLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3pDLENBQUM7SUFBQUgsNEVBQUEsZ0JBRU8sTUFBSyxDQUViLENBQUM7SUFBQUEsNEVBQUEseUJBRWdCLE1BQUs7TUFDcEIsTUFBTThFLFdBQVcsR0FBRyxJQUFJQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7TUFDcEQsSUFBSUMsWUFBWSxHQUFHLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxLQUFLLENBQUNILFdBQVcsQ0FBQztNQUMvQyxJQUFHRSxZQUFZLENBQUNsRixNQUFNLEtBQUssQ0FBQyxFQUFDO1FBQzNCa0YsWUFBWSxHQUFHLElBQUksQ0FBQ0gsSUFBSTtNQUMxQixDQUFDLE1BQUk7UUFDSEcsWUFBWSxHQUFJLEdBQUVBLFlBQVksQ0FBQyxDQUFDLENBQUUsR0FBRUEsWUFBWSxDQUFDLENBQUMsQ0FBRSw2Q0FBNENBLFlBQVksQ0FBQyxDQUFDLENBQUUsU0FBUTtNQUMxSDtNQUNBLE1BQU1FLGlCQUFpQixHQUFJLDRDQUEyQyxJQUFJLENBQUMvQyxHQUFJLEtBQUk2QyxZQUFhLFFBQU87TUFDdkcsSUFBSSxDQUFDdkYsVUFBVSxDQUFDOEIsa0JBQWtCLENBQUMsV0FBVyxFQUFFMkQsaUJBQWlCLENBQUM7TUFDbEUsSUFBSSxDQUFDakYsV0FBVyxHQUFHLElBQUksQ0FBQ1IsVUFBVSxDQUFDK0IsYUFBYSxDQUFFLElBQUcsSUFBSSxDQUFDVyxHQUFJLEVBQUMsQ0FBQztJQUNsRSxDQUFDO0lBMUJDLElBQUksQ0FBQzBDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNwRixVQUFVLEdBQUdBLFVBQVU7SUFDNUIsSUFBSSxDQUFDbUIsYUFBYSxHQUFHLElBQUk7SUFDekIsSUFBSSxDQUFDRixnQkFBZ0IsR0FBRyxJQUFJO0lBQzVCLElBQUksQ0FBQ3lCLEdBQUcsR0FBR0EsMERBQUcsQ0FBQyxDQUFDO0VBQ2xCO0FBc0JGO0FBR0EsTUFBTWdELGlCQUFpQixHQUFHQSxDQUFDM0YsWUFBWSxFQUFFQyxVQUFVLEVBQUUyRixRQUFRLEtBQUk7RUFDL0QsSUFBRzVGLFlBQVksQ0FBQ2lFLFlBQVksQ0FBQzRCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQ3ZGLE1BQU0sR0FBRyxDQUFDLEVBQUM7SUFDbkQsT0FBTyxJQUFJd0YsNERBQXdCLENBQUM5RixZQUFZLEVBQUVDLFVBQVUsRUFBRTJGLFFBQVEsQ0FBQztFQUN6RSxDQUFDLE1BQUk7SUFDSCxPQUFPLElBQUlWLG9EQUFtQixDQUFDbEYsWUFBWSxFQUFFQyxVQUFVLEVBQUUyRixRQUFRLENBQUM7RUFDcEU7QUFDRixDQUFDO0FBRU0sTUFBTUcsY0FBYyxHQUFHLFNBQUFBLENBQUMvRixZQUFZLEVBQUVDLFVBQVUsRUFBRTJGLFFBQVEsRUFBb0I7RUFBQSxJQUFsQnhGLFFBQVEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUMsS0FBSztFQUMvRSxJQUFHRCxRQUFRLElBQUlKLFlBQVksQ0FBQ2dHLFlBQVksS0FBSyxpQkFBaUIsRUFBQztJQUM3RCxNQUFNLElBQUlDLEtBQUssQ0FBRSwrQ0FBOENqRyxZQUFZLENBQUNnRyxZQUFjLEVBQUMsQ0FBQztFQUM5RjtFQUNBLFFBQU9oRyxZQUFZLENBQUNnRyxZQUFZO0lBQzlCLEtBQUssYUFBYTtNQUNoQixPQUFPLElBQUlsQixtREFBa0IsQ0FBQzlFLFlBQVksRUFBRUMsVUFBVSxFQUFFMkYsUUFBUSxDQUFDO0lBQ25FLEtBQUssZUFBZTtNQUNsQixPQUFPRCxpQkFBaUIsQ0FBQzNGLFlBQVksRUFBRUMsVUFBVSxFQUFFMkYsUUFBUSxDQUFDO0lBQzlELEtBQUssZ0JBQWdCO01BQ25CLE9BQU8sSUFBSXpDLHNEQUFxQixDQUFDbkQsWUFBWSxFQUFFQyxVQUFVLEVBQUUyRixRQUFRLENBQUM7SUFDdEUsS0FBSyxpQkFBaUI7TUFDcEIsSUFBSU0sWUFBWTtNQUNoQixJQUFHbEcsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzdCa0csWUFBWSxHQUFHbEcsWUFBWSxDQUFDLFlBQVksQ0FBQztNQUMzQyxDQUFDLE1BQUssSUFBR0EsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFDO1FBQ2hDa0csWUFBWSxHQUFHbEcsWUFBWSxDQUFDLFVBQVUsQ0FBQztNQUN6QztNQUVBLElBQUcsT0FBT2tHLFlBQVksS0FBSyxRQUFRLEVBQUM7UUFDbENsRyxZQUFZLENBQUNtRyxRQUFRLEdBQUdELFlBQVksQ0FBQ1QsS0FBSyxDQUFDLElBQUksQ0FBQztNQUNsRDtNQUVBLE9BQU8sSUFBSVQsdURBQXFCLENBQUNoRixZQUFZLEVBQUVDLFVBQVUsRUFBRTJGLFFBQVEsRUFBRXhGLFFBQVEsQ0FBQztJQUM5RTtFQUNKO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUMzRUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUVyQyxNQUFNZ0csV0FBVyxHQUFHLENBQ2xCLFVBQVUsRUFDVixVQUFVLEVBQ1YsVUFBVSxDQUNYO0FBRUQsTUFBTUMsb0JBQW9CLEdBQUc7RUFDM0IsU0FBUyxFQUFHLE9BQU07RUFDbEIsUUFBUSxFQUFHLE9BQU07RUFDakIsVUFBVSxFQUFHLE9BQU07RUFDbkIsS0FBSyxFQUFHLElBQUc7RUFDWCxLQUFLLEVBQUcsSUFBRztFQUNYLE9BQU8sRUFBRyxLQUFJO0VBQ2QsTUFBTSxFQUFHLElBQUc7RUFDWixRQUFRLEVBQUcsSUFBRztFQUNkLE1BQU0sRUFBRyxJQUFHO0VBQ1osTUFBTSxFQUFHLEtBQUk7RUFDYixPQUFPLEVBQUcsS0FBSTtFQUNkLEtBQUssRUFBRyxJQUFHO0VBQ1gsUUFBUSxFQUFHLE9BQU07RUFDakIsU0FBUyxFQUFHLFFBQU87RUFDbkIsU0FBUyxFQUFHLFFBQU87RUFDbkIsVUFBVSxFQUFHLFNBQVE7RUFDckIsU0FBUyxFQUFHLFFBQU87RUFDbkIsVUFBVSxFQUFHLFNBQVE7RUFFckIsU0FBUyxFQUFHLFFBQU87RUFDbkIsVUFBVSxFQUFHLFNBQVE7RUFDckIsUUFBUSxFQUFHLE9BQU07RUFDakIsU0FBUyxFQUFHLFFBQU87RUFDbkIsV0FBVyxFQUFHLFVBQVM7RUFDdkIsV0FBVyxFQUFHLFVBQVM7RUFDdkIsVUFBVSxFQUFHLFNBQVE7RUFDckIsVUFBVSxFQUFHLFNBQVE7RUFDckIsWUFBWSxFQUFHLFdBQVU7RUFDekIsV0FBVyxFQUFHLFVBQVM7RUFDdkIsVUFBVSxFQUFHO0FBQ2YsQ0FBQztBQUdELElBQUlDLG9CQUFvQixHQUFHLElBQUlmLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFJOUMsTUFBTU4sVUFBVSxHQUFHQSxDQUFDVixVQUFVLEVBQUVnQyxXQUFXLEtBQUs7RUFDckQsSUFBSSxDQUFDaEMsVUFBVSxFQUFFO0lBQ2ZBLFVBQVUsR0FBRyxFQUFFO0VBQ2pCO0VBQ0EsSUFBSWlDLGdCQUFnQixHQUFHQyxhQUFhLENBQUNsQyxVQUFVLENBQUM7RUFDaEQsSUFBSW1DLGlCQUFpQixHQUFHRCxhQUFhLENBQUNGLFdBQVcsQ0FBQztFQUNsRCxPQUFPQyxnQkFBZ0IsS0FBS0UsaUJBQWlCO0FBQy9DLENBQUM7O0FBR0Q7QUFDQSxNQUFNRCxhQUFhLEdBQUk1RixNQUFNLElBQUs7RUFDaEMsT0FBT0EsTUFBTSxDQUFDOEYsV0FBVyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7QUFDcEwsQ0FBQztBQUdNLE1BQU03QixrQkFBa0IsR0FBR0EsQ0FBQ1IsVUFBVSxFQUFFNUMsWUFBWSxLQUFLO0VBQzlELElBQUlrRixtQkFBbUIsR0FBRyxLQUFLO0VBQy9CLElBQUlULFdBQVcsQ0FBQ1UsSUFBSSxDQUFFQyxPQUFPLElBQUtOLGFBQWEsQ0FBQ2xDLFVBQVUsQ0FBQyxDQUFDbkIsUUFBUSxDQUFDcUQsYUFBYSxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDN0ZGLG1CQUFtQixHQUFHLElBQUk7RUFDNUI7RUFDQSxJQUFJRyx3QkFBd0I7RUFDNUIsSUFBSSxDQUFDSCxtQkFBbUIsRUFBRTtJQUN4Qkcsd0JBQXdCLEdBQUdDLDRCQUE0QixDQUFDMUMsVUFBVSxDQUFDO0lBQ25FdkIsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFK0Qsd0JBQXdCLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0xBLHdCQUF3QixHQUFHLENBQUN6QyxVQUFVLENBQUM7RUFDekM7RUFDQTtFQUNBO0VBQ0E7RUFDQSxPQUFPMkMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHRix3QkFBd0IsRUFBRXpDLFVBQVUsQ0FBQyxFQUFFNUMsWUFBWSxDQUFDO0FBQ25GLENBQUM7QUFFTSxNQUFNa0MsVUFBVSxHQUFHQSxDQUFDRCxXQUFXLEVBQUVqQyxZQUFZLEtBQUs7RUFDdkQsSUFBSXdGLGlCQUFpQixHQUFHdkQsV0FBVyxDQUFDd0QsSUFBSSxDQUFDLENBQUMsQ0FBQ2xELEdBQUcsQ0FBRXJELE1BQU0sSUFBSzRGLGFBQWEsQ0FBQzVGLE1BQU0sQ0FBQyxDQUFDO0VBQ2pGLElBQUk2RixpQkFBaUIsR0FBRy9FLFlBQVksQ0FBQ3lGLElBQUksQ0FBQyxDQUFDLENBQUNsRCxHQUFHLENBQUVyRCxNQUFNLElBQUs0RixhQUFhLENBQUM1RixNQUFNLENBQUMsQ0FBQztFQUNsRixPQUFPd0cscURBQU8sQ0FBQ0YsaUJBQWlCLEVBQUVULGlCQUFpQixDQUFDO0FBRXRELENBQUM7QUFFRCxNQUFNWSxlQUFlLEdBQUdBLENBQUNDLEdBQUcsRUFBRUMsVUFBVSxLQUFLO0VBQzNDLElBQUlDLEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDWixLQUFLLElBQUlDLEdBQUcsSUFBSUgsR0FBRyxFQUFFO0lBQ25CLElBQUlJLE1BQU0sQ0FBQ0QsR0FBRyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDLElBQUlGLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLENBQUNwSCxNQUFNLEdBQUcsQ0FBQyxJQUFJb0gsR0FBRyxJQUFJRixVQUFVLEVBQUU7TUFDekVDLEdBQUcsR0FBR0MsR0FBRztJQUNYO0VBQ0Y7RUFDQSxJQUFJRCxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDZCxPQUFPLElBQUk7RUFDYjtFQUNBLE9BQU9BLEdBQUc7QUFDWixDQUFDO0FBR0QsSUFBSVIsNEJBQTRCLEdBQUkxQyxVQUFVLElBQUs7RUFDakRBLFVBQVUsR0FBR2tDLGFBQWEsQ0FBQ2xDLFVBQVUsQ0FBQztFQUN0QyxJQUFJcUQsWUFBWSxHQUFHLENBQUMsQ0FBQztFQUNyQixNQUFNQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDMUMsS0FBSyxJQUFJbEQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHa0QsWUFBWSxDQUFDdkgsTUFBTSxFQUFFcUUsQ0FBQyxFQUFFLEVBQUU7SUFDNUMsSUFBSW1ELEdBQUcsR0FBRyxJQUFJdkMsTUFBTSxDQUFDc0MsWUFBWSxDQUFDbEQsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzFDSixVQUFVLEdBQUdBLFVBQVUsQ0FBQ3FDLE9BQU8sQ0FBQ2tCLEdBQUcsRUFBRSxJQUFJLENBQUM7RUFDNUM7RUFDQSxNQUFNQyxLQUFLLEdBQUd4RCxVQUFVLENBQUNrQixLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ25DLEtBQUssSUFBSWQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHb0QsS0FBSyxDQUFDekgsTUFBTSxFQUFFcUUsQ0FBQyxFQUFFLEVBQUU7SUFFckMsSUFBSW9ELEtBQUssQ0FBQ3BELENBQUMsQ0FBQyxDQUFDa0IsS0FBSyxDQUFDUyxvQkFBb0IsQ0FBQyxFQUFFO01BQ3hDLEtBQUssSUFBSW9CLEdBQUcsSUFBSXJCLG9CQUFvQixFQUFFO1FBQ3BDLElBQUkwQixLQUFLLENBQUNwRCxDQUFDLENBQUMsQ0FBQ3ZCLFFBQVEsQ0FBQ2lELG9CQUFvQixDQUFDcUIsR0FBRyxDQUFDLENBQUMsRUFBRTtVQUVoRCxJQUFJTSxpQkFBaUIsR0FBR3JELENBQUM7VUFDekIsSUFBSSxDQUFDaUQsWUFBWSxDQUFDSSxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3BDSixZQUFZLENBQUNJLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtVQUN0QztVQUNBLElBQUlWLGVBQWUsQ0FBQ00sWUFBWSxFQUFFakQsQ0FBQyxDQUFDLEVBQUU7WUFDcENpRCxZQUFZLENBQUNOLGVBQWUsQ0FBQ00sWUFBWSxFQUFFakQsQ0FBQyxDQUFDLENBQUMsQ0FBQ2pCLE9BQU8sQ0FBRXVFLGVBQWUsSUFBSztjQUMxRSxJQUFJQyxVQUFVLEdBQUcsQ0FBQyxHQUFHRCxlQUFlLENBQUM7Y0FDckNDLFVBQVUsQ0FBQ3ZELENBQUMsQ0FBQyxHQUFHc0QsZUFBZSxDQUFDdEQsQ0FBQyxDQUFDLENBQUNpQyxPQUFPLENBQUNQLG9CQUFvQixDQUFDcUIsR0FBRyxDQUFDLEVBQUVBLEdBQUcsQ0FBQztjQUMxRUUsWUFBWSxDQUFDSSxpQkFBaUIsQ0FBQyxDQUFDRyxJQUFJLENBQUNELFVBQVUsQ0FBQztZQUNsRCxDQUFDLENBQUM7VUFDSixDQUFDLE1BQU07WUFDTCxJQUFJQSxVQUFVLEdBQUcsQ0FBQyxHQUFHSCxLQUFLLENBQUM7WUFDM0JHLFVBQVUsQ0FBQ3ZELENBQUMsQ0FBQyxHQUFHb0QsS0FBSyxDQUFDcEQsQ0FBQyxDQUFDLENBQUNpQyxPQUFPLENBQUNQLG9CQUFvQixDQUFDcUIsR0FBRyxDQUFDLEVBQUVBLEdBQUcsQ0FBQztZQUNoRUUsWUFBWSxDQUFDSSxpQkFBaUIsQ0FBQyxDQUFDRyxJQUFJLENBQUNELFVBQVUsQ0FBQztVQUNsRDtRQUNGO01BQ0Y7SUFDRjtFQUNGO0VBQ0FsRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUUyRSxZQUFZLEVBQUVOLGVBQWUsQ0FBQ00sWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0VBQ3ZFO0VBQ0EsSUFBSU4sZUFBZSxDQUFDTSxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUU7SUFDdEMsT0FBT0EsWUFBWSxDQUFDTixlQUFlLENBQUNNLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDMUQsR0FBRyxDQUFFa0UsT0FBTyxJQUFLQSxPQUFPLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUM3RixDQUFDLE1BQU07SUFDTCxPQUFPLENBQUM5RCxVQUFVLENBQUM7RUFDckI7QUFFRixDQUFDO0FBRU0sTUFBTVksbUJBQW1CLEdBQUdBLENBQUNaLFVBQVUsRUFBRTVDLFlBQVksRUFBRXNDLFlBQVksS0FBSztFQUM3RXRDLFlBQVksR0FBRyxDQUFDLEdBQUdBLFlBQVksRUFBRSxHQUFHQSxZQUFZLENBQUN1QyxHQUFHLENBQUVxQyxXQUFXLElBQUt0QyxZQUFZLENBQUMyQyxPQUFPLENBQUMsS0FBSyxFQUFFTCxXQUFXLENBQUMsQ0FBQyxDQUFDO0VBQ2hILElBQUlNLG1CQUFtQixHQUFHLEtBQUs7RUFDL0I3RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLEVBQUVtRCxXQUFXLEVBQUU3QixVQUFVLEVBQUVrQyxhQUFhLENBQUNsQyxVQUFVLENBQUMsQ0FBQztFQUNyRSxJQUFJNkIsV0FBVyxDQUFDVSxJQUFJLENBQUVDLE9BQU8sSUFBS04sYUFBYSxDQUFDbEMsVUFBVSxDQUFDLENBQUNuQixRQUFRLENBQUNxRCxhQUFhLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUM3RkYsbUJBQW1CLEdBQUcsSUFBSTtFQUM1QjtFQUNBLElBQUlHLHdCQUF3QjtFQUM1QixJQUFJLENBQUNILG1CQUFtQixFQUFFO0lBQ3hCRyx3QkFBd0IsR0FBR0MsNEJBQTRCLENBQUMxQyxVQUFVLENBQUM7RUFDckUsQ0FBQyxNQUFNO0lBQ0x5Qyx3QkFBd0IsR0FBRyxFQUFFO0VBQy9CO0VBQ0E7RUFDQSxPQUFPRSxpQkFBaUIsQ0FBQyxDQUFDLEdBQUdGLHdCQUF3QixFQUFFekMsVUFBVSxFQUFFa0MsYUFBYSxDQUFDbEMsVUFBVSxDQUFDLENBQUMsRUFBRTVDLFlBQVksQ0FBQztBQUM5RyxDQUFDO0FBRU0sTUFBTStDLG1CQUFtQixHQUFHQSxDQUFDZCxXQUFXLEVBQUVqQyxZQUFZLEtBQUs7RUFDaEVxQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVXLFdBQVcsRUFBRWpDLFlBQVksQ0FBQztFQUM5QyxJQUFJMkcsWUFBWSxHQUFHLEVBQUU7RUFDckIsSUFBSUMsVUFBVSxHQUFHLEtBQUs7RUFDdEIsSUFBSTNFLFdBQVcsQ0FBQ3RELE1BQU0sR0FBR3FCLFlBQVksQ0FBQ3JCLE1BQU0sRUFBRTtJQUM1QyxPQUFPO01BQ0xrRSxPQUFPLEVBQUUsSUFBSTtNQUNiQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixDQUFDO0VBQ0g7RUFFQSxJQUFJOUMsWUFBWSxDQUFDckIsTUFBTSxHQUFHc0QsV0FBVyxDQUFDdEQsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNoRCxPQUFPO01BQ0xrRSxPQUFPLEVBQUUsSUFBSTtNQUNiQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixDQUFDO0VBQ0g7RUFBQztFQUVELElBQUkrRCxRQUFRLEdBQUc7SUFDYkMsY0FBYyxFQUFFLEtBQUs7SUFDckJILFlBQVksRUFBRTtFQUNoQixDQUFDO0VBR0QsS0FBSyxJQUFJM0QsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaEQsWUFBWSxDQUFDckIsTUFBTSxFQUFFcUUsQ0FBQyxJQUFJZixXQUFXLENBQUN0RCxNQUFNLEVBQUU7SUFDaEVnSSxZQUFZLEdBQUcsRUFBRTtJQUVqQixLQUFLLElBQUlJLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzlFLFdBQVcsQ0FBQ3RELE1BQU0sRUFBRW9JLENBQUMsRUFBRSxFQUFFO01BQzNDLElBQUkzRCxrQkFBa0IsQ0FBQ25CLFdBQVcsQ0FBQzhFLENBQUMsQ0FBQyxFQUFFLENBQUMvRyxZQUFZLENBQUMrRyxDQUFDLEdBQUcvRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDN0QyRCxZQUFZLENBQUNILElBQUksQ0FBQ08sQ0FBQyxDQUFDO01BQ3RCO0lBQ0Y7SUFDQSxJQUFJSixZQUFZLENBQUNoSSxNQUFNLEtBQUtzRCxXQUFXLENBQUN0RCxNQUFNLEVBQUU7TUFDOUNrSSxRQUFRLENBQUNDLGNBQWMsR0FBRyxJQUFJO01BQzlCRCxRQUFRLENBQUNGLFlBQVksR0FBR0EsWUFBWTtNQUNwQztJQUNGLENBQUMsTUFBTTtNQUNMRSxRQUFRLENBQUNGLFlBQVksQ0FBQ0gsSUFBSSxDQUFDLEdBQUdHLFlBQVksQ0FBQztJQUM3QztFQUNGO0VBRUF0RixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFVLEVBQUV1RixRQUFRLENBQUM7RUFFakMsSUFBSUEsUUFBUSxDQUFDQyxjQUFjLEVBQUU7SUFDM0IsT0FBTztNQUNMakUsT0FBTyxFQUFFLElBQUk7TUFDYkMsY0FBYyxFQUFFNkQ7SUFDbEIsQ0FBQztFQUNILENBQUMsTUFBTTtJQUNMLE1BQU1LLElBQUksR0FBR0gsUUFBUSxDQUFDRixZQUFZLENBQUNNLE1BQU0sQ0FBQyxDQUFDQyxDQUFDLEVBQUVsRSxDQUFDLEVBQUVtRSxDQUFDLEtBQUtBLENBQUMsQ0FBQ0MsT0FBTyxDQUFDRixDQUFDLENBQUMsS0FBS2xFLENBQUMsQ0FBQztJQUMxRSxJQUFJZ0UsSUFBSSxDQUFDckksTUFBTSxLQUFLc0QsV0FBVyxDQUFDdEQsTUFBTSxFQUFFO01BQ3RDLElBQUkwSSxpQkFBaUIsR0FBR3BGLFdBQVcsQ0FBQ00sR0FBRyxDQUFFckQsTUFBTSxJQUFLNEYsYUFBYSxDQUFDNUYsTUFBTSxDQUFDLENBQUMsQ0FBQytILE1BQU0sQ0FBQyxDQUFDQyxDQUFDLEVBQUVsRSxDQUFDLEVBQUVtRSxDQUFDLEtBQUtBLENBQUMsQ0FBQ0MsT0FBTyxDQUFDRixDQUFDLENBQUMsS0FBS2xFLENBQUMsQ0FBQztNQUNsSCxJQUFJcUUsaUJBQWlCLENBQUMxSSxNQUFNLEtBQUtzRCxXQUFXLENBQUN0RCxNQUFNLEVBQUU7UUFDbkQsT0FBTztVQUNMa0UsT0FBTyxFQUFFLElBQUk7VUFDYkMsY0FBYyxFQUFFNkQ7UUFDbEIsQ0FBQztNQUNILENBQUMsTUFBTTtRQUNMLE9BQU87VUFDTDlELE9BQU8sRUFBRSxLQUFLO1VBQ2RDLGNBQWMsRUFBRTtRQUNsQixDQUFDO01BQ0g7SUFDRixDQUFDLE1BQU07TUFDTCxPQUFPO1FBQ0xELE9BQU8sRUFBRSxLQUFLO1FBQ2RDLGNBQWMsRUFBRWtFO01BQ2xCLENBQUM7SUFDSDtFQUNGOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsSUFBSUwsWUFBWSxDQUFDaEksTUFBTSxLQUFLc0QsV0FBVyxDQUFDdEQsTUFBTSxFQUFFO0lBQzlDaUksVUFBVSxHQUFHLElBQUk7RUFDbkI7RUFDQSxPQUFPO0lBQ0wvRCxPQUFPLEVBQUUrRCxVQUFVO0lBQ25COUQsY0FBYyxFQUFFNkQ7RUFDbEIsQ0FBQztBQUNILENBQUM7QUFHRCxNQUFNcEIsaUJBQWlCLEdBQUdBLENBQUN0RCxXQUFXLEVBQUVqQyxZQUFZLEtBQUs7RUFDdkQsS0FBSyxJQUFJZ0QsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHZixXQUFXLENBQUN0RCxNQUFNLEVBQUVxRSxDQUFDLEVBQUUsRUFBRTtJQUMzQyxLQUFLLElBQUkrRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcvRyxZQUFZLENBQUNyQixNQUFNLEVBQUVvSSxDQUFDLEVBQUUsRUFBRTtNQUM1QyxJQUFJekQsVUFBVSxDQUFDckIsV0FBVyxDQUFDZSxDQUFDLENBQUMsRUFBRWhELFlBQVksQ0FBQytHLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDL0MsT0FBTyxJQUFJO01BQ2I7SUFDRjtFQUNGO0VBQ0EsT0FBTyxLQUFLO0FBQ2QsQ0FBQztBQUNELHVEOzs7Ozs7Ozs7Ozs7QUNsUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU03RyxpQkFBaUIsR0FBSUYsWUFBWSxJQUFJO0VBQ2hELE9BQVE7QUFDVjtBQUNBLFFBQVFBLFlBQVksQ0FBQ3VDLEdBQUcsQ0FBRXJELE1BQU0sSUFBSyxxQkFBb0JBLE1BQU8sUUFBTyxDQUFDLENBQUN3SCxJQUFJLENBQUMsR0FBRyxDQUFFO0FBQ25GO0FBQ0EsR0FBRztFQUNEO0FBQ0YsQ0FBQztBQUVELE1BQU1ZLGNBQWMsR0FBS0MsT0FBTyxJQUFJO0VBQ2xDLElBQUlDLFNBQVMsR0FBRyxDQUFDO0VBQ2pCLEtBQUksSUFBSXhFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBQ3VFLE9BQU8sQ0FBQzVJLE1BQU0sRUFBRXFFLENBQUMsRUFBRSxFQUFDO0lBQ25DLElBQUd1RSxPQUFPLENBQUN2RSxDQUFDLENBQUMsQ0FBQ3JFLE1BQU0sR0FBRzZJLFNBQVMsRUFBQztNQUMvQkEsU0FBUyxHQUFHRCxPQUFPLENBQUN2RSxDQUFDLENBQUMsQ0FBQ3JFLE1BQU07SUFDL0I7RUFDRjtFQUNBLElBQUc2SSxTQUFTLEdBQUcsQ0FBQyxFQUFDO0lBQ2YsT0FBTyxFQUFFO0VBQ1g7RUFDQSxJQUFHQSxTQUFTLEdBQUcsRUFBRSxFQUFDO0lBQ2hCLE9BQU8sRUFBRTtFQUNYO0VBQ0EsSUFBR0EsU0FBUyxHQUFHLEVBQUUsRUFBQztJQUNoQixPQUFPLEdBQUc7RUFDWjtFQUNBLElBQUdBLFNBQVMsR0FBRyxFQUFFLEVBQUM7SUFDaEIsT0FBTyxHQUFHO0VBQ1o7RUFDQSxPQUFPLEdBQUc7QUFDWixDQUFDO0FBRU0sTUFBTXJHLGdCQUFnQixHQUFHQSxDQUFDOUMsWUFBWSxFQUFFMEMsRUFBRSxLQUFLO0VBQ3BELElBQUcxQyxZQUFZLENBQUNnRyxZQUFZLEtBQUssZUFBZSxFQUFDO0lBQy9DLE1BQU1vRCxRQUFRLEdBQUdwSixZQUFZLENBQUNpRSxZQUFZLENBQUN3QixLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3RELE1BQU00RCxLQUFLLEdBQUdKLGNBQWMsQ0FBQ2pKLFlBQVksQ0FBQzJCLFlBQVksQ0FBQztJQUN2RCxPQUFRO0FBQ1osMkNBQTJDZSxFQUFHO0FBQzlDLG1DQUFtQzBHLFFBQVEsQ0FBQ2YsSUFBSSxDQUFFLEdBQUVpQixxQkFBcUIsQ0FBQ0EscUJBQXFCLEVBQUVELEtBQUssQ0FBRSxFQUFDLENBQUU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0VBQ0QsQ0FBQyxNQUFJO0lBQ0gsT0FBUTtBQUNaLGtDQUFrQzNHLEVBQUc7QUFDckMsbUNBQW1DMUMsWUFBWSxDQUFDaUUsWUFBYTtBQUM3RDtBQUNBLFVBQVVzRixjQUFjLENBQUN2SixZQUFZLENBQUU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7RUFDRDtBQUVGLENBQUM7QUFFTSxNQUFNc0oscUJBQXFCLEdBQUdBLENBQUN0SixZQUFZLEVBQUVxSixLQUFLLEtBQUk7RUFDM0QsT0FBUTtBQUNWLHNCQUFzQkEsS0FBTTtBQUM1QjtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFFTSxNQUFNRSxjQUFjLEdBQUl2SixZQUFZLElBQUk7RUFDN0MsSUFBR0EsWUFBWSxDQUFDZ0csWUFBWSxLQUFLLGFBQWEsSUFBSWhHLFlBQVksQ0FBQ2dHLFlBQVksS0FBSyxlQUFlLEVBQUM7SUFDOUYsT0FBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLEtBQUs7RUFDSDtFQUNBLElBQUdoRyxZQUFZLENBQUNnRyxZQUFZLEtBQUssaUJBQWlCLEVBQUM7SUFFakQsT0FBUTtBQUNaO0FBQ0E7QUFDQSxZQUFZaEcsWUFBWSxDQUFDbUcsUUFBUSxDQUFDakMsR0FBRyxDQUFDLENBQUNFLEtBQUssRUFBRW9GLEtBQUssS0FBSTtBQUN2RDtBQUNBLHNDQUFzQ3hKLFlBQVksQ0FBQ2lFLFlBQWEsSUFBR3VGLEtBQU07QUFDekUsc0JBQXNCeEosWUFBWSxDQUFDaUUsWUFBYSxZQUFXRyxLQUFNO0FBQ2pFLDBCQUEwQnBFLFlBQVksQ0FBQ2lFLFlBQWEsSUFBR3VGLEtBQU0sS0FBSXBGLEtBQU07QUFDdkU7QUFDQSxXQUFXLENBQUMsQ0FBQ2lFLElBQUksQ0FBQyxHQUFHLENBQUU7QUFDdkI7QUFDQTtBQUNBLEtBQUs7RUFDSDtFQUVBLElBQUdySSxZQUFZLENBQUNnRyxZQUFZLEtBQUssZ0JBQWdCLEVBQUM7SUFDaEQsT0FBUTtBQUNaO0FBQ0E7QUFDQSxZQUFZaEcsWUFBWSxDQUFDbUcsUUFBUSxDQUFDakMsR0FBRyxDQUFDLENBQUNFLEtBQUssRUFBRW9GLEtBQUssS0FBSTtBQUN2RCx5Q0FBeUN4SixZQUFZLENBQUNpRSxZQUFhLElBQUd1RixLQUFNO0FBQzVFLHNCQUFzQnhKLFlBQVksQ0FBQ2lFLFlBQWEsWUFBV0csS0FBTTtBQUNqRSwwQkFBMEJwRSxZQUFZLENBQUNpRSxZQUFhLElBQUd1RixLQUFNLEtBQUlwRixLQUFNO0FBQ3ZFLFdBQVcsQ0FBQyxDQUFDaUUsSUFBSSxDQUFDLEdBQUcsQ0FBRTtBQUN2QjtBQUNBO0FBQ0EsS0FBSztFQUNIO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHK0I7QUFDaEMsTUFBTW9CLGNBQWMsQ0FBQztFQU1uQjFKLFdBQVdBLENBQUEsRUFBK0M7SUFBQSxJQUE5QzJKLFFBQVEsR0FBQXJKLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7SUFBQSxJQUFFc0osYUFBYSxHQUFBdEosU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtJQUFBLElBQUVILFFBQVEsR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUMsS0FBSztJQUFBRyw0RUFBQSxvQkFKNUMsRUFBRTtJQUFBQSw0RUFBQSw2QkFDTyxFQUFFO0lBQUFBLDRFQUFBLHVCQUNSLEVBQUU7SUFBQUEsNEVBQUEsc0JBd0JGb0osYUFBYSxJQUFLO01BQy9CLElBQUksQ0FBQ0MsY0FBYyxHQUFHRCxhQUFhO01BRW5DLElBQUksQ0FBQ0UsaUJBQWlCLENBQUNGLGFBQWEsQ0FBQyxDQUFDRyxhQUFhLENBQUMsQ0FBQztNQUVyRCxJQUFJLENBQUNDLG1CQUFtQixDQUFDQyxTQUFTLEdBQUksV0FBVUwsYUFBYSxHQUFHLENBQUUsT0FBTSxJQUFJLENBQUNFLGlCQUFpQixDQUFDeEosTUFBTyxFQUFDO0lBRXpHLENBQUM7SUFBQUUsNEVBQUEsd0JBRWdCb0osYUFBYSxJQUFLO01BQ2pDLElBQUksQ0FBQ0EsYUFBYSxHQUFHQSxhQUFhO01BQ2xDLElBQUlBLGFBQWEsR0FBRyxDQUFDLEVBQUU7UUFDckI7TUFDRjtNQUNBLElBQUlBLGFBQWEsR0FBRyxDQUFDLEVBQUU7UUFDckIsSUFBSSxDQUFDTSxVQUFVLENBQUN4SixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQ3pDLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ3VKLFVBQVUsQ0FBQ3hKLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDeEM7TUFFQSxJQUFJaUosYUFBYSxHQUFHLElBQUksQ0FBQ0MsY0FBYyxFQUFFO1FBQ3ZDLElBQUksSUFBSSxDQUFDTSxnQkFBZ0IsS0FBS1AsYUFBYSxFQUFFO1VBQzNDLElBQUksQ0FBQ1EsYUFBYSxHQUFHLElBQUk7UUFDM0IsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDUixhQUFhLEdBQUcsSUFBSSxDQUFDTyxnQkFBZ0IsRUFBRTtVQUNyRCxJQUFJLENBQUNFLFVBQVUsQ0FBQzNKLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07VUFDdEM7UUFDRjtNQUNGO01BRUEsSUFBSSxJQUFJLENBQUNrSixjQUFjLEtBQUt0SixTQUFTLElBQUksSUFBSSxDQUFDc0osY0FBYyxLQUFLLElBQUksRUFBRTtRQUNyRSxJQUFJLENBQUNDLGlCQUFpQixDQUFDLElBQUksQ0FBQ0QsY0FBYyxDQUFDLENBQUNTLFdBQVcsQ0FBQyxDQUFDO01BQzNEO01BRUEsSUFBSSxDQUFDLElBQUksQ0FBQ1IsaUJBQWlCLENBQUNGLGFBQWEsQ0FBQyxDQUFDVyxTQUFTLEVBQUU7UUFDcEQsSUFBSSxDQUFDRixVQUFVLENBQUMzSixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQ3hDLENBQUMsTUFBTTtRQUNMLElBQUksRUFBRWlKLGFBQWEsSUFBSSxJQUFJLENBQUNPLGdCQUFnQixDQUFDLEVBQUU7VUFDN0MsSUFBSSxDQUFDRSxVQUFVLENBQUMzSixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO1FBQ3pDLENBQUMsTUFBTTtVQUNMLElBQUksQ0FBQzBKLFVBQVUsQ0FBQzNKLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07UUFDeEM7TUFFRjtNQUVBLElBQUksQ0FBQzZKLFdBQVcsQ0FBQ1osYUFBYSxDQUFDO01BQy9CLElBQUcsSUFBSSxDQUFDeEosUUFBUSxFQUFDO1FBQ2YsSUFBSSxDQUFDcUssdUJBQXVCLENBQUMsQ0FBQztNQUNoQztJQUNGLENBQUM7SUFBQWpLLDRFQUFBLDZCQUVvQixNQUFNO01BRXpCLE1BQU1vQixJQUFJLEdBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7TUFDRCxJQUFJLENBQUMrSCxhQUFhLENBQUM1SCxrQkFBa0IsQ0FBQyxXQUFXLEVBQUVILElBQUksQ0FBQztNQUV4RCxJQUFJLENBQUM4SSxXQUFXLEdBQUduSCxRQUFRLENBQUN2QixhQUFhLENBQUMsZUFBZSxDQUFDO01BQzFELElBQUcsSUFBSSxDQUFDNUIsUUFBUSxFQUFDO1FBQ2YsSUFBSSxDQUFDc0ssV0FBVyxDQUFDaEssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUN6QztNQUVBLElBQUksQ0FBQ2dLLGFBQWEsR0FBR3BILFFBQVEsQ0FBQ3ZCLGFBQWEsQ0FBQyxXQUFXLENBQUM7TUFDeEQsSUFBSSxDQUFDMkksYUFBYSxDQUFDakssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUV6QyxJQUFJLENBQUMwSixVQUFVLEdBQUc5RyxRQUFRLENBQUN2QixhQUFhLENBQUMsZUFBZSxDQUFDO01BQ3pELElBQUksQ0FBQ3FJLFVBQVUsQ0FBQzNKLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFFdEMsSUFBSSxDQUFDdUosVUFBVSxHQUFHM0csUUFBUSxDQUFDdkIsYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN6RCxJQUFJLENBQUNrSSxVQUFVLENBQUN4SixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BRXRDLElBQUksQ0FBQ3FKLG1CQUFtQixHQUFHekcsUUFBUSxDQUFDdkIsYUFBYSxDQUFDLG1CQUFtQixDQUFDO01BRXRFLElBQUksQ0FBQzBJLFdBQVcsQ0FBQ3pJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9DLElBQUksQ0FBQzZILGlCQUFpQixDQUFDLElBQUksQ0FBQ0QsY0FBYyxDQUFDLENBQUNlLFlBQVksQ0FBQyxDQUFDO01BQzVELENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ1AsVUFBVSxDQUFDcEksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07UUFBRSxJQUFJLENBQUM0SSxhQUFhLENBQUMsSUFBSSxDQUFDaEIsY0FBYyxHQUFHLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQztNQUNqRyxJQUFJLENBQUNLLFVBQVUsQ0FBQ2pJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO1FBQUUsSUFBSSxDQUFDNEksYUFBYSxDQUFDLElBQUksQ0FBQ2hCLGNBQWMsR0FBRyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUM7TUFFakcsSUFBSSxDQUFDaUIsa0JBQWtCLEdBQUcsSUFBSSxDQUFDbkIsYUFBYSxDQUFDM0gsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQy9FLENBQUM7SUFBQXhCLDRFQUFBLGtDQUV5QixNQUFNO01BQzlCd0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ21ILGFBQWEsQ0FBQztNQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDQSxhQUFhLEVBQUU7UUFDdkIsSUFBSSxDQUFDQyxVQUFVLENBQUMzSixLQUFLLENBQUNDLE9BQU8sR0FBRyxPQUFPO01BQ3pDLENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ2dLLGFBQWEsQ0FBQ2pLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87UUFDMUMsSUFBSSxDQUFDZ0ssYUFBYSxDQUFDMUksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07VUFDakQsSUFBRyxJQUFJLENBQUM3QixRQUFRLEVBQUM7WUFDZixJQUFJLENBQUMySyxlQUFlLENBQUMsQ0FBQztVQUV4QixDQUFDLE1BQUk7WUFDSCxJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1VBQ3ZCO1FBRUYsQ0FBQyxDQUFDO01BQ0o7SUFFRixDQUFDO0lBQUF4Syw0RUFBQSwwQkFFaUIsTUFBSztNQUNyQixJQUFJLENBQUNzSyxrQkFBa0IsQ0FBQ3BLLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDOUMsSUFBSSxDQUFDcUosbUJBQW1CLENBQUN0SixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQy9DLElBQUksQ0FBQ2dKLGFBQWEsQ0FBQzNILGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDdEIsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUU1RSxJQUFJLENBQUNtSixpQkFBaUIsQ0FBQ3BHLE9BQU8sQ0FBRXVILE9BQU8sSUFBRztRQUN4Q0EsT0FBTyxDQUFDTCxZQUFZLENBQUMsQ0FBQztNQUN4QixDQUFDLENBQUM7TUFFRixJQUFJTSxZQUFZLEdBQUcsRUFBRTtNQUNyQixLQUFLLElBQUl2RyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDbUYsaUJBQWlCLENBQUN4SixNQUFNLEVBQUVxRSxDQUFDLEVBQUUsRUFBRTtRQUV0RHVHLFlBQVksR0FBRyxDQUFDLEdBQUdBLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQ3BCLGlCQUFpQixDQUFDbkYsQ0FBQyxDQUFDLENBQUN3RyxrQkFBa0IsQ0FBQztNQUNuRjtNQUNBLElBQUlDLGtCQUFrQixHQUFHRixZQUFZLENBQUM1SyxNQUFNLEdBQUcsSUFBSSxDQUFDd0osaUJBQWlCLENBQUN4SixNQUFNO01BRzVFLElBQUkrSyxZQUFZLEdBQUdILFlBQVksQ0FBQ3RDLE1BQU0sQ0FBRTBDLEtBQUssSUFBSztRQUNoRCxPQUFPQSxLQUFLLENBQUNsSyxhQUFhO01BQzVCLENBQUMsQ0FBQyxDQUFDZCxNQUFNO01BRVQrSyxZQUFZLEdBQUdBLFlBQVksR0FBRyxJQUFJLENBQUMzQixRQUFRLENBQUNwSixNQUFNO01BRWxEMEMsT0FBTyxDQUFDQyxHQUFHLENBQUUsV0FBVW9JLFlBQWEsV0FBVUQsa0JBQW1CLEVBQUMsQ0FBQztNQUVuRSxJQUFJRyxXQUFXLEdBQUcsSUFBSTtNQUV0QixJQUFHRixZQUFZLElBQUksRUFBRSxFQUFDO1FBQ3BCRSxXQUFXLEdBQUcsSUFBSTtNQUNwQjtNQUNBLElBQUdGLFlBQVksSUFBSSxFQUFFLEVBQUM7UUFDcEJFLFdBQVcsR0FBRyxJQUFJO01BQ3BCO01BQ0EsSUFBR0YsWUFBWSxJQUFJLEVBQUUsRUFBQztRQUNwQkUsV0FBVyxHQUFHLElBQUk7TUFDcEI7TUFDQSxJQUFHRixZQUFZLElBQUksRUFBRSxFQUFDO1FBQ3BCRSxXQUFXLEdBQUcsSUFBSTtNQUNwQjtNQUNBLElBQUdGLFlBQVksSUFBSSxFQUFFLEVBQUM7UUFDcEJFLFdBQVcsR0FBRyxJQUFJO01BQ3BCO01BQ0EsSUFBR0YsWUFBWSxJQUFJLEVBQUUsRUFBQztRQUNwQkUsV0FBVyxHQUFHLElBQUk7TUFDcEI7TUFFQSxNQUFNM0osSUFBSSxHQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0J5SixZQUFhLFdBQVVELGtCQUFtQjtBQUM1RDtBQUNBO0FBQ0Esd0JBQXdCRyxXQUFZO0FBQ3BDO0FBQ0E7QUFDQSxLQUFLO01BQ0QsTUFBTUMsY0FBYyxHQUFHLElBQUksQ0FBQzdCLGFBQWEsQ0FBQzNILGFBQWEsQ0FBQyxlQUFlLENBQUM7TUFDeEUsSUFBSXdKLGNBQWMsRUFBRTtRQUNsQixJQUFJLENBQUM3QixhQUFhLENBQUM4QixXQUFXLENBQUNELGNBQWMsQ0FBQztNQUNoRDtNQUVBLElBQUksQ0FBQzdCLGFBQWEsQ0FBQzVILGtCQUFrQixDQUFDLFdBQVcsRUFBRUgsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFBQXBCLDRFQUFBLHlCQUVnQixNQUFNO01BQ3JCLElBQUksQ0FBQ3NLLGtCQUFrQixDQUFDcEssS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtNQUM5QyxJQUFJLENBQUNxSixtQkFBbUIsQ0FBQ3RKLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDL0MsSUFBSSxDQUFDZ0osYUFBYSxDQUFDM0gsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUN0QixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO01BQzVFLElBQUl1SyxZQUFZLEdBQUcsRUFBRTtNQUNyQixLQUFLLElBQUl2RyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDbUYsaUJBQWlCLENBQUN4SixNQUFNLEVBQUVxRSxDQUFDLEVBQUUsRUFBRTtRQUN0RDtRQUNBdUcsWUFBWSxHQUFHLENBQUMsR0FBR0EsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDcEIsaUJBQWlCLENBQUNuRixDQUFDLENBQUMsQ0FBQ3dHLGtCQUFrQixDQUFDO01BQ25GO01BQ0EsSUFBSUMsa0JBQWtCLEdBQUdGLFlBQVksQ0FBQzVLLE1BQU0sR0FBRyxJQUFJLENBQUN3SixpQkFBaUIsQ0FBQ3hKLE1BQU07TUFHNUUsSUFBSW9MLHFCQUFxQixHQUFHUixZQUFZLENBQUN0QyxNQUFNLENBQUUwQyxLQUFLLElBQUs7UUFDekQsT0FBT0EsS0FBSyxDQUFDcEssZ0JBQWdCO01BQy9CLENBQUMsQ0FBQyxDQUFDWixNQUFNO01BRVRvTCxxQkFBcUIsR0FBR0EscUJBQXFCLEdBQUcsSUFBSSxDQUFDaEMsUUFBUSxDQUFDcEosTUFBTTtNQUNwRSxNQUFNcUwsVUFBVSxHQUFJRCxxQkFBcUIsR0FBR04sa0JBQWtCLEdBQUksR0FBRztNQUVyRSxNQUFNeEosSUFBSSxHQUFJO0FBQ2xCO0FBQ0E7QUFDQSxVQUFVZ0ssSUFBSSxDQUFDQyxLQUFLLENBQUNGLFVBQVUsQ0FBRTtBQUNqQztBQUNBLEtBQUs7TUFDRCxNQUFNSCxjQUFjLEdBQUcsSUFBSSxDQUFDN0IsYUFBYSxDQUFDM0gsYUFBYSxDQUFDLGVBQWUsQ0FBQztNQUN4RSxJQUFJd0osY0FBYyxFQUFFO1FBQ2xCLElBQUksQ0FBQzdCLGFBQWEsQ0FBQzhCLFdBQVcsQ0FBQ0QsY0FBYyxDQUFDO01BQ2hEO01BRUEsSUFBSSxDQUFDN0IsYUFBYSxDQUFDNUgsa0JBQWtCLENBQUMsV0FBVyxFQUFFSCxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQW5PQyxJQUFJLENBQUM4SCxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDUyxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDcEosTUFBTSxHQUFHLENBQUM7SUFDM0MsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxJQUFJLENBQUMrSixnQkFBZ0IsS0FBSyxDQUFDLEVBQUU7TUFDL0IsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSTtJQUMzQjtJQUNBLElBQUksQ0FBQ1QsYUFBYSxHQUFHQSxhQUFhO0lBRWxDLElBQUksQ0FBQ21DLGtCQUFrQixDQUFDLENBQUM7SUFDekIsSUFBSSxDQUFDaEMsaUJBQWlCLEdBQUdKLFFBQVEsQ0FBQ3hGLEdBQUcsQ0FBQyxDQUFDK0csT0FBTyxFQUFFekIsS0FBSyxLQUFLO01BQ3hELE9BQU8sSUFBSXVDLGdEQUFPLENBQUNkLE9BQU8sRUFBRSxJQUFJLENBQUNILGtCQUFrQixFQUFFLElBQUksQ0FBQ0wsdUJBQXVCLEVBQUVqQixLQUFLLEVBQUVwSixRQUFRLENBQUM7SUFDckcsQ0FBQyxDQUFDOztJQUVGO0lBQ0EsSUFBSSxDQUFDeUssYUFBYSxDQUFDLENBQUMsQ0FBQztJQUVyQixJQUFHekssUUFBUSxFQUFDO01BQ1YsSUFBSSxDQUFDcUssdUJBQXVCLENBQUMsQ0FBQztJQUNoQztFQUNGO0FBbU5GO0FBRWVoQiw2RUFBYyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUDRDO0FBRTFELE1BQU1zQyxPQUFPO0VBTTFCaE0sV0FBV0EsQ0FBQ2lNLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxnQkFBZ0IsRUFBRUMsTUFBTSxFQUFpQjtJQUFBLElBQWYvTCxRQUFRLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFDLEtBQUs7SUFBQUcsNEVBQUEsb0JBTGhFLEVBQUU7SUFBQUEsNEVBQUEsNkJBQ08sRUFBRTtJQUFBQSw0RUFBQSxtQkFDWixLQUFLO0lBQUFBLDRFQUFBLG9CQUNKLEtBQUs7SUFBQUEsNEVBQUEsdUJBa0JGLE1BQUs7TUFDbEIsT0FBTyxJQUFJLENBQUMySyxrQkFBa0IsQ0FBQ3ZDLE1BQU0sQ0FBRXdELElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNoTCxhQUFhLENBQUM7SUFDckUsQ0FBQztJQUFBWiw0RUFBQSx1QkFFYyxNQUFLO01BQ2xCO01BQ0E7TUFDQTtNQUNBLEtBQUksSUFBSW1FLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUN3RyxrQkFBa0IsQ0FBQzdLLE1BQU0sRUFBRXFFLENBQUMsRUFBRSxFQUFDO1FBQ3JELElBQUksQ0FBQ3dHLGtCQUFrQixDQUFDeEcsQ0FBQyxDQUFDLENBQUNuQyxLQUFLLENBQUMsS0FBSyxDQUFDO01BQ3pDO01BQ0EsTUFBTTZKLFdBQVcsR0FBRyxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO01BQ3ZDLElBQUcsQ0FBQ0QsV0FBVyxDQUFDL0wsTUFBTSxFQUFDO1FBQ3JCLElBQUksQ0FBQ2lLLFNBQVMsR0FBRyxJQUFJO1FBQ3JCLElBQUksQ0FBQzJCLGdCQUFnQixDQUFDLENBQUM7UUFDdkI7TUFDRjtJQUVGLENBQUM7SUFBQTFMLDRFQUFBLDJCQUVtQitMLHdCQUF3QixJQUFLO01BQy9DLElBQUdBLHdCQUF3QixFQUFDO1FBQzFCLE1BQU1GLFdBQVcsR0FBSSxJQUFJLENBQUNDLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLElBQUcsQ0FBQ0QsV0FBVyxDQUFDL0wsTUFBTSxFQUFDO1VBQ3JCLElBQUksQ0FBQ3NLLFlBQVksQ0FBQyxDQUFDO1FBQ3JCO01BQ0Y7SUFDRixDQUFDO0lBQUFwSyw0RUFBQSxxQkFHWSxNQUFNO01BQ2pCLEtBQUksSUFBSW1FLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBQyxJQUFJLENBQUN3RyxrQkFBa0IsQ0FBQzdLLE1BQU0sRUFBRXFFLENBQUMsRUFBRSxFQUFDO1FBQ25ELElBQUksQ0FBQ3dHLGtCQUFrQixDQUFDeEcsQ0FBQyxDQUFDLENBQUM5QixjQUFjLENBQUMsQ0FBQztNQUM3QztJQUNGLENBQUM7SUFBQXJDLDRFQUFBLHdCQUVlLE1BQUs7TUFDbkIsSUFBRyxJQUFJLENBQUNnTSxRQUFRLElBQUksSUFBSSxDQUFDQyxnQkFBZ0IsRUFBQztRQUN4QyxJQUFJLENBQUNBLGdCQUFnQixDQUFDL0wsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztRQUM3QztNQUNGO01BQ0EsTUFBTWlCLElBQUksR0FBSTtBQUNsQiw4QkFBOEIsSUFBSSxDQUFDdUssTUFBTztBQUMxQyxLQUFLO01BQ0QsSUFBSSxDQUFDRixTQUFTLENBQUNsSyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUVILElBQUksQ0FBQztNQUNwRCxJQUFJLENBQUM2SyxnQkFBZ0IsR0FBRyxJQUFJLENBQUNSLFNBQVMsQ0FBQ2pLLGFBQWEsQ0FBRSxZQUFXLElBQUksQ0FBQ21LLE1BQU8sRUFBQyxDQUFDO01BQy9FLElBQUksQ0FBQ2hCLGtCQUFrQixHQUFHLENBQUMsSUFBSS9GLHNFQUFrQixDQUFDLElBQUksQ0FBQ3NILE1BQU0sRUFBRSxJQUFJLENBQUNELGdCQUFnQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUNFLFNBQVMsQ0FBQ3pJLEdBQUcsQ0FBRTBJLFFBQVEsSUFBRztRQUN2SCxPQUFPN0csMEVBQWMsQ0FBQzZHLFFBQVEsRUFBRSxJQUFJLENBQUNILGdCQUFnQixFQUFFLElBQUksQ0FBQ0ksZ0JBQWdCLEVBQUUsSUFBSSxDQUFDek0sUUFBUSxDQUFDO01BQzlGLENBQUMsQ0FBQyxDQUFDO01BQ0gsSUFBSSxDQUFDb00sUUFBUSxHQUFHLElBQUk7TUFFcEIsSUFBSSxDQUFDTSxVQUFVLENBQUMsQ0FBQztNQUNqQjtJQUNGLENBQUM7SUFwRUMsSUFBSSxDQUFDSixNQUFNLEdBQUdWLFdBQVcsQ0FBQ1UsTUFBTTtJQUNoQyxJQUFJLENBQUNQLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNGLFNBQVMsR0FBR0EsU0FBUztJQUMxQixJQUFJLENBQUNVLFNBQVMsR0FBR1gsV0FBVyxDQUFDVyxTQUFTO0lBQ3RDLElBQUksQ0FBQ1QsZ0JBQWdCLEdBQUdBLGdCQUFnQjtJQUN4QyxJQUFJLENBQUM5TCxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBR0EsUUFBUSxFQUFDO01BQ1YsSUFBSSxDQUFDbUssU0FBUyxHQUFHLElBQUk7SUFDdkI7RUFDRjtFQUVBRCxXQUFXQSxDQUFBLEVBQUU7SUFDWCxJQUFJLENBQUNtQyxnQkFBZ0IsQ0FBQy9MLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDOUM7QUF3REYsQzs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUEsU0FBU29NLE1BQU1BLENBQUN6TSxNQUFNLEVBQUU7RUFDdEIsSUFBSVMsTUFBTSxHQUFhLEVBQUU7RUFDekIsSUFBSWlNLFVBQVUsR0FBUyxzREFBc0Q7RUFDN0UsSUFBSUMsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQzFNLE1BQU07RUFDeEMsS0FBTSxJQUFJcUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHckUsTUFBTSxFQUFFcUUsQ0FBQyxFQUFFLEVBQUc7SUFDaEM1RCxNQUFNLElBQUlpTSxVQUFVLENBQUNFLE1BQU0sQ0FBQ3RCLElBQUksQ0FBQ3VCLEtBQUssQ0FBQ3ZCLElBQUksQ0FBQ3dCLE1BQU0sQ0FBQyxDQUFDLEdBQUdILGdCQUFnQixDQUFDLENBQUM7RUFDNUU7RUFDQSxPQUFPbE0sTUFBTTtBQUNmO0FBRWUscUVBQUs7RUFDbEIsT0FBT2dNLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNaRDtBQUFBO0FBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQXhKLFFBQVEsQ0FBQ3RCLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQUk7RUFFaEQ7RUFDQSxNQUFNb0wsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekIsTUFBTUMsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLG9EQUFxQixDQUFDO0lBQzNDLE1BQU1DLElBQUksR0FBR2pLLFFBQVEsQ0FBQ2tLLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVyRCxNQUFNQyxTQUFTLEdBQUduSyxRQUFRLENBQUNvSyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ2pERCxTQUFTLENBQUNFLFNBQVMsR0FBR04sSUFBSTtJQUUxQixNQUFNTyxNQUFNLEdBQUd0SyxRQUFRLENBQUNvSyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQy9DRSxNQUFNLENBQUNDLEdBQUcsR0FBQywyQ0FBMkM7SUFFdEROLElBQUksQ0FBQ08sV0FBVyxDQUFDTCxTQUFTLENBQUM7SUFDM0JGLElBQUksQ0FBQ08sV0FBVyxDQUFDRixNQUFNLENBQUM7RUFDMUIsQ0FBQztFQUVEUixZQUFZLENBQUMsQ0FBQztFQUVkLE1BQU16TCxJQUFJLEdBQUksa0RBQWlEO0VBQy9ELE1BQU1xSyxTQUFTLEdBQUcxSSxRQUFRLENBQUN2QixhQUFhLENBQUMsT0FBTyxDQUFDO0VBQ2pEaUssU0FBUyxDQUFDbEssa0JBQWtCLENBQUMsV0FBVyxFQUFFSCxJQUFJLENBQUM7RUFDL0MsTUFBTW9NLE1BQU0sR0FBRy9CLFNBQVMsQ0FBQ2pLLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFFaERpTSxLQUFLLENBQUNoTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBSTtJQUNsQ2dLLFNBQVMsQ0FBQ1IsV0FBVyxDQUFDdUMsTUFBTSxDQUFDO0lBQzdCLElBQUl2RSx1REFBYyxDQUFDbkcsTUFBTSxDQUFDNEssUUFBUSxFQUFFakMsU0FBUyxFQUFFLElBQUksQ0FBQztFQUN0RCxDQUFDLENBQUM7QUFJSixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7QUNyRUYsaWxKIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKFwiLi90b1Byb3BlcnR5S2V5LmpzXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRvUHJpbWl0aXZlLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZShcIi4vdG9QcmltaXRpdmUuanNcIik7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IHRvUHJvcGVydHlLZXksIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLyoqXG4gKiBMb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanMuZm91bmRhdGlvbi8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlLFxuICAgIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKSxcbiAgICBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpLFxuICAgIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgdWlkIGZyb20gJy4uLy4uL191dGlscy91aWQnO1xuaW1wb3J0IHsgdmFsaWRhdGVFcnJvclRleHQgfSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUXVlc3Rpb24ge1xuICBjb25zdHJ1Y3RvcihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNoZWNrQ2FsbGJhY2ssIHRlc3RNb2RlPWZhbHNlKSB7XG4gICAgdGhpcy5xdWVzdGlvbkRhdGEgPSBxdWVzdGlvbkRhdGE7XG4gICAgdGhpcy5wYXJlbnRFbGVtID0gcGFyZW50RWxlbTtcbiAgICB0aGlzLmlkID0gdWlkKCk7XG4gICAgdGhpcy5yZXN1bHRDb3JyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5jaGVja0luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgdGhpcy5maXJzdFRpbWVDb3JyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgdGhpcy5jaGVja0NhbGxiYWNrID0gY2hlY2tDYWxsYmFjaztcbiAgICB0aGlzLnRlc3RNb2RlID0gdGVzdE1vZGVcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjaGVjayA9IChzaG91bGRDYWxsQmFjayA9IHRydWUpID0+IHtcbiAgICBjb25zdCBhbnN3ZXIgPSB0aGlzLmdldEFuc3dlcigpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2VydGFpbkNoZWNrKGFuc3dlcik7XG4gICAgaWYgKCF0aGlzLmNoZWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmZpcnN0VGltZUNvcnJlY3QgPSByZXN1bHQ7XG4gICAgICB0aGlzLmhpbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICAgIHRoaXMucmVzdWx0Q29ycmVjdCA9IHJlc3VsdDtcbiAgICB0aGlzLnJlbmRlclJlc3VsdChyZXN1bHQpO1xuICAgIGlmIChzaG91bGRDYWxsQmFjaykge1xuICAgICAgdGhpcy5jaGVja0NhbGxiYWNrKHJlc3VsdCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUmVzdWx0ID0gKGlzQ29ycmVjdCkgPT4ge1xuICAgIGlmIChpc0NvcnJlY3QpIHtcblxuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXJRdWVzdGlvbigpIHtcbiAgICBjb25zdCBodG1sID0gdGhpcy5xdWVzdGlvblRlbXBsYXRlKHRoaXMucXVlc3Rpb25EYXRhLCB0aGlzLmlkKTtcbiAgICB0aGlzLnBhcmVudEVsZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IHRoaXMucGFyZW50RWxlbS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApO1xuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBtYWluRWxlbWVudDtcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHRoaXMuaGludEJ1dHRvbiA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhpbnQtc2lnbicpO1xuICAgIHRoaXMuaGludEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuaGludENvbnRhaW5lciA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhpbnQtY29udGFpbmVyJyk7XG4gICAgdGhpcy5jaGVja1NpZ25Db250YWluZXIgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1zaWduJyk7XG4gICAgY29uc29sZS5sb2coJ3Rlc3RNb2RlJywgdGhpcy50ZXN0TW9kZSlcbiAgICBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAgIHRoaXMuaGludEJ1dHRvbi5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgIHRoaXMuY2hlY2tTaWduQ29udGFpbmVyLnN0eWxlLmRpc3BsYXk9J25vbmUnO1xuICAgIH1cbiAgICB0aGlzLmJhc2VBZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHNob3dIaW50cyA9ICgpID0+IHtcbiAgICBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAoIXRoaXMuZXJyb3JzQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCB7IHJpZ2h0QW5zd2VycyB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgICBjb25zdCBodG1sID0gdmFsaWRhdGVFcnJvclRleHQocmlnaHRBbnN3ZXJzKTtcbiAgICAgIHRoaXMuaGludENvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgICAgdGhpcy5lcnJvcnNDb250YWluZXIgPSB0aGlzLmhpbnRDb250YWluZXIucXVlcnlTZWxlY3RvcignLmhpbnRzLWFuc3dlcnMtY29udGFpbmVyJyk7XG4gICAgfVxuICAgIHRoaXMuaGludENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLmhpbnRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsb3NlSGludHMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZUhpbnRzKCk7XG4gICAgfSwgMjUwMCk7XG4gIH1cblxuICBjbG9zZUhpbnRzID0gKCkgPT4ge1xuICAgIHRoaXMuaGludENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgYmFzZUFkZExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IGlmKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7dGhpcy5jaGVjaygpO30gfSk7XG4gICAgfVxuICAgIHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLXNpZ24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hlY2spO1xuICAgIHRoaXMuaGludEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0hpbnRzKTtcbiAgfVxuXG59IiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG5pbXBvcnQgeyBxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dCB9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZVNpbXBsZVRleHQsIHZhbGlkYXRlVGV4dEluQmxhbmssIGNoZWNrTXVsdGkgfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aVZhcmlhbnRzUXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb24ge1xuXG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBxdWVzdGlvblRlbXBsYXRlKC4uLmFyZ3MpO1xuICB9XG5cbiAgZ2V0QW5zd2VyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gQXJyYXkuZnJvbSh0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9XCIke3RoaXMucXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIl06Y2hlY2tlZGApKTtcbiAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQubWFwKChlbGVtKSA9PiBlbGVtLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY2hhbmdlTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5pbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENlcnRhaW5MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBoaWRlID0gKCkgPT4ge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uKCkge1xuICAgIHN1cGVyLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgdGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgdGhpcy5hZGRDZXJ0YWluTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjZXJ0YWluQ2hlY2sgPSAodXNlckFuc3dlcnMpID0+IHtcbiAgICBjb25zdCB7IHJpZ2h0QW5zd2VycyB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgcmV0dXJuIGNoZWNrTXVsdGkodXNlckFuc3dlcnMsIHJpZ2h0QW5zd2Vycyk7XG4gIH1cblxufSIsImltcG9ydCB7cXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHR9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQge3ZhbGlkYXRlTXVsdGlCbGFua3N9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxlVGV4dEluQmxhbmtRdWVzdGlvbnMgZXh0ZW5kcyBJUXVlc3Rpb257XG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAgKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpe1xuICAgIHJldHVybiB0aGlzLmlucHV0cy5tYXAoKGlucHV0KT0+IGlucHV0LnZhbHVlKTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VyKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMsIHF1ZXN0aW9uVGV4dCB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgY29uc3Qge2NvcnJlY3QsIGNvcnJlY3RJbmRleGVzfSA9ICB2YWxpZGF0ZU11bHRpQmxhbmtzKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0KTtcbiAgICB0aGlzLmNvcnJlY3RJbmRleGVzID0gY29ycmVjdEluZGV4ZXM7XG4gICAgcmV0dXJuIGNvcnJlY3Q7XG4gIH1cblxuICByZW5kZXJSZXN1bHQgPSAoaXNDb3JyZWN0KSA9PntcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuaW5wdXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmKHRoaXMuY29ycmVjdEluZGV4ZXMuaW5jbHVkZXMoaSkpe1xuICAgICAgICB0aGlzLmlucHV0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvcnJlY3QnKTtcbiAgICAgICAgdGhpcy5pbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnY29ycmVjdCcpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHRoaXMuaW5wdXRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgICAgdGhpcy5pbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGlzQ29ycmVjdCl7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3QnKTtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW5jb3JyZWN0Jyk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlTGlzdGVuZXIgPSAoZSk9PntcbiAgICBpZighdGhpcy5pbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQpKXtcbiAgICAgIHRoaXMuY2hlY2soKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgfVxuICB9XG5cbiAgYWRkQ2VydGFpbkxpc3RlbmVycyA9ICgpID0+e1xuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0KT0+e1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpPT57XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBoaWRlID0gKCkgPT57XG4gICAgc3VwZXIuaGlkZSgpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICB9XG5cbiAgcmVuZGVyUXVlc3Rpb24oKXtcbiAgICBzdXBlci5yZW5kZXJRdWVzdGlvbigpO1xuICAgIHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgIHRoaXMuYWRkQ2VydGFpbkxpc3RlbmVycygpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciAgPSAoZWwpID0+e1xuICAgIGNvbnN0IHVzZXJWYWx1ZSA9IGVsLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnVzZXJWYWx1ZSA9IHVzZXJWYWx1ZTtcbiAgICB0aGlzLmNoZWNrKHVzZXJWYWx1ZSk7XG4gIH1cblxufSIsImltcG9ydCB7cXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHR9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQge3ZhbGlkYXRlU2ltcGxlVGV4dCwgdmFsaWRhdGVUZXh0SW5CbGFua30gZnJvbSAnLi4vY2hlY2tTdHJpbmdWYWxpZCc7XG5pbXBvcnQgSVF1ZXN0aW9uIGZyb20gJy4vSVF1ZXN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlVGV4dFF1ZXN0aW9uIGV4dGVuZHMgSVF1ZXN0aW9ue1xuICAvLyBjb25zdHJ1Y3RvcihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0pe1xuICAvLyAgIHN1cGVyKClcbiAgLy8gfVxuICBxdWVzdGlvblRlbXBsYXRlID0gICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uVGVtcGxhdGUoLi4uYXJncyk7XG4gIH1cblxuICBnZXRBbnN3ZXIoKXtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VyKSA9PnsgIFxuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gdmFsaWRhdGVTaW1wbGVUZXh0KHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2Vycyk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyICA9IChlbCkgPT57XG4gICAgY29uc3QgdXNlclZhbHVlID0gZWwudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudXNlclZhbHVlID0gdXNlclZhbHVlO1xuICAgIHRoaXMuY2hlY2sodXNlclZhbHVlKTtcbiAgfVxuXG59ICIsImltcG9ydCB7IHF1ZXN0aW9uVGVtcGxhdGUsIHZhbGlkYXRlRXJyb3JUZXh0IH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7IHZhbGlkYXRlU2ltcGxlVGV4dCwgdmFsaWRhdGVUZXh0SW5CbGFuaywgY29tcGFyZVR3byB9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVZhcmlhbnRRdWVzdGlvbiBleHRlbmRzIElRdWVzdGlvbiB7XG5cbiAgcXVlc3Rpb25UZW1wbGF0ZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uVGVtcGxhdGUoLi4uYXJncyk7XG4gIH1cblxuICBnZXRBbnN3ZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke3RoaXMucXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIl06Y2hlY2tlZGApO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY2hhbmdlTGlzdGVuZXIgPSAoZSkgPT4ge1xuXG4gICAgaWYodGhpcy50ZXN0TW9kZSl7XG4gICAgICByZXR1cm4gXG4gICAgfVxuICAgIGlmICghdGhpcy5pbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENlcnRhaW5MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBoaWRlID0gKCkgPT4ge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uKCkge1xuICAgIHN1cGVyLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgdGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgdGhpcy5hZGRDZXJ0YWluTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjZXJ0YWluQ2hlY2sgPSAodXNlckFuc3dlcikgPT4ge1xuICAgIGNvbnN0IHsgcmlnaHRBbnN3ZXJzIH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gY29tcGFyZVR3byh1c2VyQW5zd2VyLCByaWdodEFuc3dlcnNbMF0pO1xuICB9XG5cbn0iLCJpbXBvcnQge3F1ZXN0aW9uVGVtcGxhdGUsIHZhbGlkYXRlRXJyb3JUZXh0fSBmcm9tICcuLi90ZW1wbGF0ZXMnO1xuaW1wb3J0IHt2YWxpZGF0ZVNpbXBsZVRleHQsIHZhbGlkYXRlVGV4dEluQmxhbmt9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRJbkJsYW5rUXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb257XG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAgKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpe1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXIpID0+IHtcbiAgICBjb25zdCB7IHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0IH0gPSB0aGlzLnF1ZXN0aW9uRGF0YTtcbiAgICByZXR1cm4gdmFsaWRhdGVUZXh0SW5CbGFuayh1c2VyQW5zd2VyLCByaWdodEFuc3dlcnMsIHF1ZXN0aW9uVGV4dCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyICA9IChlbCkgPT57XG4gICAgY29uc3QgdXNlclZhbHVlID0gZWwudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudXNlclZhbHVlID0gdXNlclZhbHVlO1xuICAgIHRoaXMuY2hlY2sodXNlclZhbHVlKTtcbiAgfVxuXG59IiwiaW1wb3J0IFNpbXBsZVRleHRRdWVzdGlvbiBmcm9tICcuL1NpbXBsZVRleHQnO1xuaW1wb3J0IFRleHRJbkJsYW5rUXVlc3Rpb24gZnJvbSAnLi9UZXh0SW5CbGFuayc7XG5pbXBvcnQgTXVsdGlUZXh0SW5CbGFua1F1ZXN0aW9uIGZyb20gJy4vTXVsdGlwbGVUZXh0SW5CbGFuayc7XG5pbXBvcnQgU2luZ2xlVmFyaWFudFF1ZXN0aW9uIGZyb20gJy4vU2luZ2xlVmFyaWFudHMnO1xuaW1wb3J0IE11bHRpVmFyaWFudHNRdWVzdGlvbiBmcm9tICcuL011bHRpVmFyaWFudHMnO1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi9fdXRpbHMvdWlkJztcblxuXG5cbmV4cG9ydCBjbGFzcyBUZXh0QmVmb3JlUXVlc3Rpb257XG4gIGNvbnN0cnVjdG9yKHRleHQsIHBhcmVudEVsZW0pe1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5wYXJlbnRFbGVtID0gcGFyZW50RWxlbTtcbiAgICB0aGlzLnJlc3VsdENvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMuZmlyc3RUaW1lQ29ycmVjdCA9IHRydWU7XG4gICAgdGhpcy51aWQgPSB1aWQoKTtcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PntcbiAgICB0aGlzLm1haW5FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGNoZWNrID0gKCkgPT57XG4gICAgXG4gIH1cblxuICByZW5kZXJRdWVzdGlvbiA9ICgpID0+e1xuICAgIGNvbnN0IHNwbGl0UmVnRXhwID0gbmV3IFJlZ0V4cCgvKE1pc3Npb24gWzAtOS5dKykgLyk7XG4gICAgbGV0IHNwbGl0dGVkVGV4dCA9IHRoaXMudGV4dC5zcGxpdChzcGxpdFJlZ0V4cCk7XG4gICAgaWYoc3BsaXR0ZWRUZXh0Lmxlbmd0aCAhPT0gMyl7XG4gICAgICBzcGxpdHRlZFRleHQgPSB0aGlzLnRleHQ7XG4gICAgfWVsc2V7XG4gICAgICBzcGxpdHRlZFRleHQgPSBgJHtzcGxpdHRlZFRleHRbMF19JHtzcGxpdHRlZFRleHRbMV19IDwvYnI+IDxzcGFuIGNsYXNzPVwidGV4dC1xdWVzdGlvbi1pdGFsaWNcIj4ke3NwbGl0dGVkVGV4dFsyXX08L3NwYW4+YDtcbiAgICB9XG4gICAgY29uc3Qgc2VjdGlvbkhlYWRlclRleHQgPSBgPGRpdiBjbGFzcz1cInF1ZXN0aW9uIHNlY3Rpb24taGVhZGVyXCIgaWQ9XCIke3RoaXMudWlkfVwiPiR7c3BsaXR0ZWRUZXh0fTwvZGl2PmA7XG4gICAgdGhpcy5wYXJlbnRFbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc2VjdGlvbkhlYWRlclRleHQpO1xuICAgIHRoaXMubWFpbkVsZW1lbnQgPSB0aGlzLnBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihgIyR7dGhpcy51aWR9YCk7XG4gIH1cbn1cblxuXG5jb25zdCBjcmVhdGVUZXh0SW5CbGFuayA9IChxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKSA9PntcbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dC5tYXRjaCgvXysvZykubGVuZ3RoID4gMSl7XG4gICAgcmV0dXJuIG5ldyBNdWx0aVRleHRJbkJsYW5rUXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjayk7XG4gIH1lbHNle1xuICAgIHJldHVybiBuZXcgVGV4dEluQmxhbmtRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUXVlc3Rpb24gPSAocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgdGVzdE1vZGU9ZmFsc2UpID0+e1xuICBpZih0ZXN0TW9kZSAmJiBxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlICE9PSAndmFyaWFudHMtc2luZ2xlJyl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB0ZXN0IG1vZGUgaXMgZW5hYmxlZCwgYnV0IHF1ZXN0aW9uJyB0eXBlIGlzICR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSB9YClcbiAgfVxuICBzd2l0Y2gocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSl7XG4gICAgY2FzZSAnc2ltcGxlLXRleHQnOlxuICAgICAgcmV0dXJuIG5ldyBTaW1wbGVUZXh0UXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjayk7XG4gICAgY2FzZSAndGV4dC1pbi1ibGFuayc6XG4gICAgICByZXR1cm4gY3JlYXRlVGV4dEluQmxhbmsocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaylcbiAgICBjYXNlICd2YXJpYW50cy1tdWx0aSc6XG4gICAgICByZXR1cm4gbmV3IE11bHRpVmFyaWFudHNRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrKTtcbiAgICBjYXNlICd2YXJpYW50cy1zaW5nbGUnOlxuICAgICAgbGV0IHF1ZXNWYXJpYW50cztcbiAgICAgIGlmKHF1ZXN0aW9uRGF0YVsndmFyaWFudHNcXHInXSApe1xuICAgICAgICBxdWVzVmFyaWFudHMgPSBxdWVzdGlvbkRhdGFbJ3ZhcmlhbnRzXFxyJ11cbiAgICAgIH1lbHNlIGlmKHF1ZXN0aW9uRGF0YVsndmFyaWFudHMnXSl7XG4gICAgICAgIHF1ZXNWYXJpYW50cyA9IHF1ZXN0aW9uRGF0YVsndmFyaWFudHMnXTtcbiAgICAgIH1cblxuICAgICAgaWYodHlwZW9mIHF1ZXNWYXJpYW50cyA9PT0gJ3N0cmluZycpe1xuICAgICAgICBxdWVzdGlvbkRhdGEudmFyaWFudHMgPSBxdWVzVmFyaWFudHMuc3BsaXQoJ3x8Jyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgU2luZ2xlVmFyaWFudFF1ZXN0aW9uKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2ssIHRlc3RNb2RlKTtcbiAgICAgIC8vcmV0dXJuIG5ldyBUZXh0SW5CbGFua1F1ZXN0aW9uKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2spO1xuICB9XG59IiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG5jb25zdCBleGNsdWRlRGF0YSA9IFtcbiAgXCJtYXJpYSdyZVwiLFxuICAnbWFyaWFcInJlJyxcbiAgJ21hcmlhYHJlJyxcbl07XG5cbmNvbnN0IFNob3J0ZW5pbmdEaWN0aW9uYXJ5ID0ge1xuICAnY2FuIG5vdCc6IGBjYW4ndGAsXG4gICdjYW5ub3QnOiBgY2FuJ3RgLFxuICAnd2lsbCBub3QnOiBgd29uJ3RgLFxuICAnIGlzJzogYCdzYCxcbiAgJ1xcJ3MnOiBgJ3NgLFxuICAnIGhhdmUnOiBgJ3ZlYCxcbiAgJyBoYXMnOiBgJ3NgLFxuICAnIHdvdWxkJzogYCdkYCxcbiAgJyBoYWQnOiBgJ2RgLFxuICAnIGFyZSc6IGAncmVgLFxuICAnIHdpbGwnOiBgJ2xsYCxcbiAgJyBhbSc6IGAnbWAsXG4gICdpcyBub3QnOiBgaXNuJ3RgLFxuICAnYXJlIG5vdCc6IGBhcmVuJ3RgLFxuICAnd2FzIG5vdCc6IGB3YXNuJ3RgLFxuICAnd2VyZSBub3QnOiBgd2VyZW4ndGAsXG4gICdoYXMgbm90JzogYGhhc24ndGAsXG4gICdoYXZlIG5vdCc6IGBoYXZlbid0YCxcblxuICAnaGFkIG5vdCc6IGBoYWRuJ3RgLFxuICAnZG9lcyBub3QnOiBgZG9lc24ndGAsXG4gICdkbyBub3QnOiBgZG9uJ3RgLFxuICAnZGlkIG5vdCc6IGBkaWRuJ3RgLFxuICAnY291bGQgbm90JzogYGNvdWxkbid0YCxcbiAgJ3dvdWxkIG5vdCc6IGB3b3VsZG4ndGAsXG4gICdtdXN0IG5vdCc6IGBtdXN0bid0YCxcbiAgJ25lZWQgbm90JzogYG5lZWRuJ3RgLFxuICAnc2hvdWxkIG5vdCc6IGBzaG91bGRuJ3RgLFxuICAnbWlnaHQgbm90JzogYG1pZ2h0bid0YCxcbiAgJ2RhcmUgbm90JzogYGRhcmVuJ3RgLFxufVxuXG5cbnZhciBmaW5kU2hvcnRlbmluZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoL1xcdysoPz0nXFx3KykvZyk7XG5cblxuXG5leHBvcnQgY29uc3QgY29tcGFyZVR3byA9ICh1c2VyQW5zd2VyLCByaWdodEFuc3dlcikgPT4ge1xuICBpZiAoIXVzZXJBbnN3ZXIpIHtcbiAgICB1c2VyQW5zd2VyID0gJyc7XG4gIH1cbiAgbGV0IHdvcmtlZFVzZXJBbnN3ZXIgPSBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpO1xuICBsZXQgd29ya2VkUmlnaHRBbnN3ZXIgPSBwcmVwYXJlU3RyaW5nKHJpZ2h0QW5zd2VyKTtcbiAgcmV0dXJuIHdvcmtlZFVzZXJBbnN3ZXIgPT09IHdvcmtlZFJpZ2h0QW5zd2VyO1xufVxuXG5cbi8vIG1ha2UgdHJpbSwgcmVtb3ZlIGRvdCBvbiB0aGUgZW5kLCBsb3dlcmNhc2UsIC4uLmV0Y1xuY29uc3QgcHJlcGFyZVN0cmluZyA9IChhbnN3ZXIpID0+IHtcbiAgcmV0dXJuIGFuc3dlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLCAnJykucmVwbGFjZSgvICsvZywgJyAnKS5yZXBsYWNlKC8gJC8sICcnKS5yZXBsYWNlKC9eIC8sICcnKS5yZXBsYWNlKC9cXC4kLywgJycpLnJlcGxhY2UoL1xcbiQvLCAnJykucmVwbGFjZSgvXFw/L2csICcnKS5yZXBsYWNlKC9cXCwvZywgJycpO1xufVxuXG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNpbXBsZVRleHQgPSAodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzKSA9PiB7XG4gIGxldCByZW1vdmVQb3NzaWJpbGl0aWVzID0gZmFsc2U7XG4gIGlmIChleGNsdWRlRGF0YS5zb21lKChleGNsdWRlKSA9PiBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpLmluY2x1ZGVzKHByZXBhcmVTdHJpbmcoZXhjbHVkZSkpKSkge1xuICAgIHJlbW92ZVBvc3NpYmlsaXRpZXMgPSB0cnVlO1xuICB9XG4gIGxldCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXM7XG4gIGlmICghcmVtb3ZlUG9zc2liaWxpdGllcykge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcik7XG4gICAgY29uc29sZS5sb2coJ3VzZXJBbnN3ZXInLCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMpO1xuICB9IGVsc2Uge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IFt1c2VyQW5zd2VyXTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZygndmFsaWRhdGUgc2ltcGxlJywgdXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzKTtcbiAgLy8gY29uc3QgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gW3VzZXJBbnN3ZXIsIHByZXBhcmVTdHJpbmcodXNlckFuc3dlciksIC4uLmZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcildO1xuICAvLyBjb25zb2xlLmxvZygncG9zc2knLCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMpO1xuICByZXR1cm4gY29tcGFyZUVhY2hUb0VhY2goWy4uLnVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcywgdXNlckFuc3dlcl0sIHJpZ2h0QW5zd2Vycyk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja011bHRpID0gKHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpID0+IHtcbiAgbGV0IHdvcmtlZFVzZXJBbnN3ZXJzID0gdXNlckFuc3dlcnMuc29ydCgpLm1hcCgoYW5zd2VyKSA9PiBwcmVwYXJlU3RyaW5nKGFuc3dlcikpO1xuICBsZXQgd29ya2VkUmlnaHRBbnN3ZXIgPSByaWdodEFuc3dlcnMuc29ydCgpLm1hcCgoYW5zd2VyKSA9PiBwcmVwYXJlU3RyaW5nKGFuc3dlcikpO1xuICByZXR1cm4gaXNFcXVhbCh3b3JrZWRVc2VyQW5zd2Vycywgd29ya2VkUmlnaHRBbnN3ZXIpO1xuXG59XG5cbmNvbnN0IGZpbmRNYXhQcmV2aW91cyA9IChvYmosIGN1cnJlbnRLZXkpID0+IHtcbiAgbGV0IG1heCA9IC0xO1xuICBmb3IgKGxldCBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE51bWJlcihrZXkpID4gTnVtYmVyKG1heCkgJiYgb2JqW2tleV0ubGVuZ3RoID4gMCAmJiBrZXkgIT0gY3VycmVudEtleSkge1xuICAgICAgbWF4ID0ga2V5O1xuICAgIH1cbiAgfVxuICBpZiAobWF4ID09PSAtMSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBtYXg7XG59XG5cblxubGV0IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXMgPSAodXNlckFuc3dlcikgPT4ge1xuICB1c2VyQW5zd2VyID0gcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKTtcbiAgbGV0IHRleHRWYXJpYW50cyA9IHt9O1xuICBjb25zdCBzaG9ydFN5Ym1vbHMgPSBbJ+KAmScsICdcXCcnLCAnYCcsICdcIiddO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3J0U3libW9scy5sZW5ndGg7IGkrKykge1xuICAgIGxldCByZWcgPSBuZXcgUmVnRXhwKHNob3J0U3libW9sc1tpXSwgJ2cnKTtcbiAgICB1c2VyQW5zd2VyID0gdXNlckFuc3dlci5yZXBsYWNlKHJlZywgJ1xcJycpO1xuICB9XG4gIGNvbnN0IHdvcmRzID0gdXNlckFuc3dlci5zcGxpdCgnICcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICBpZiAod29yZHNbaV0ubWF0Y2goZmluZFNob3J0ZW5pbmdSZWdFeHApKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gU2hvcnRlbmluZ0RpY3Rpb25hcnkpIHtcbiAgICAgICAgaWYgKHdvcmRzW2ldLmluY2x1ZGVzKFNob3J0ZW5pbmdEaWN0aW9uYXJ5W2tleV0pKSB7XG5cbiAgICAgICAgICB2YXIgaW5kZXhUb1B1c2hJbk1haW4gPSBpO1xuICAgICAgICAgIGlmICghdGV4dFZhcmlhbnRzW2luZGV4VG9QdXNoSW5NYWluXSkge1xuICAgICAgICAgICAgdGV4dFZhcmlhbnRzW2luZGV4VG9QdXNoSW5NYWluXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmluZE1heFByZXZpb3VzKHRleHRWYXJpYW50cywgaSkpIHtcbiAgICAgICAgICAgIHRleHRWYXJpYW50c1tmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCBpKV0uZm9yRWFjaCgocHJldmlvdXNWYXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBuZXdWYXJpYW50ID0gWy4uLnByZXZpb3VzVmFyaWFudF07XG4gICAgICAgICAgICAgIG5ld1ZhcmlhbnRbaV0gPSBwcmV2aW91c1ZhcmlhbnRbaV0ucmVwbGFjZShTaG9ydGVuaW5nRGljdGlvbmFyeVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgICB0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dLnB1c2gobmV3VmFyaWFudCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3VmFyaWFudCA9IFsuLi53b3Jkc107XG4gICAgICAgICAgICBuZXdWYXJpYW50W2ldID0gd29yZHNbaV0ucmVwbGFjZShTaG9ydGVuaW5nRGljdGlvbmFyeVtrZXldLCBrZXkpO1xuICAgICAgICAgICAgdGV4dFZhcmlhbnRzW2luZGV4VG9QdXNoSW5NYWluXS5wdXNoKG5ld1ZhcmlhbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZygnZmRzZnNkJywgdGV4dFZhcmlhbnRzLCBmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCA5OTkpKTtcbiAgLy8gZm9yIG9uZSBzaG9ydGVuaW5nLlxuICBpZiAoZmluZE1heFByZXZpb3VzKHRleHRWYXJpYW50cywgOTk5KSkge1xuICAgIHJldHVybiB0ZXh0VmFyaWFudHNbZmluZE1heFByZXZpb3VzKHRleHRWYXJpYW50cywgOTk5KV0ubWFwKCh2YXJpYW50KSA9PiB2YXJpYW50LmpvaW4oJyAnKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFt1c2VyQW5zd2VyXTtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVRleHRJbkJsYW5rID0gKHVzZXJBbnN3ZXIsIHJpZ2h0QW5zd2VycywgcXVlc3Rpb25UZXh0KSA9PiB7XG4gIHJpZ2h0QW5zd2VycyA9IFsuLi5yaWdodEFuc3dlcnMsIC4uLnJpZ2h0QW5zd2Vycy5tYXAoKHJpZ2h0QW5zd2VyKSA9PiBxdWVzdGlvblRleHQucmVwbGFjZSgvXysvZywgcmlnaHRBbnN3ZXIpKV07XG4gIGxldCByZW1vdmVQb3NzaWJpbGl0aWVzID0gZmFsc2U7XG4gIGNvbnNvbGUubG9nKCdleCcsIGV4Y2x1ZGVEYXRhLCB1c2VyQW5zd2VyLCBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpKTtcbiAgaWYgKGV4Y2x1ZGVEYXRhLnNvbWUoKGV4Y2x1ZGUpID0+IHByZXBhcmVTdHJpbmcodXNlckFuc3dlcikuaW5jbHVkZXMocHJlcGFyZVN0cmluZyhleGNsdWRlKSkpKSB7XG4gICAgcmVtb3ZlUG9zc2liaWxpdGllcyA9IHRydWU7XG4gIH1cbiAgbGV0IHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcztcbiAgaWYgKCFyZW1vdmVQb3NzaWJpbGl0aWVzKSB7XG4gICAgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyh1c2VyQW5zd2VyKTtcbiAgfSBlbHNlIHtcbiAgICB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBbXTtcbiAgfVxuICAvLyBjb25zdCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBmaW5kU2hvcnRlbmluZ3NQb3NzaWJpbGl0aWVzKHVzZXJBbnN3ZXIpO1xuICByZXR1cm4gY29tcGFyZUVhY2hUb0VhY2goWy4uLnVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcywgdXNlckFuc3dlciwgcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKV0sIHJpZ2h0QW5zd2Vycyk7XG59XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZU11bHRpQmxhbmtzID0gKHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpID0+IHtcbiAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyQW5zd2VycywgcmlnaHRBbnN3ZXJzKTtcbiAgbGV0IHZhbGlkSW5kZXhlcyA9IFtdO1xuICBsZXQgaXNBbGxWYWxpZCA9IGZhbHNlO1xuICBpZiAodXNlckFuc3dlcnMubGVuZ3RoID4gcmlnaHRBbnN3ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3JyZWN0OiB0cnVlLFxuICAgICAgY29ycmVjdEluZGV4ZXM6IC0xLFxuICAgIH1cbiAgfVxuXG4gIGlmIChyaWdodEFuc3dlcnMubGVuZ3RoICUgdXNlckFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3JyZWN0OiB0cnVlLFxuICAgICAgY29ycmVjdEluZGV4ZXM6IC0xLFxuICAgIH1cbiAgfTtcblxuICBsZXQgZ2xvYmFsVkEgPSB7XG4gICAgaXNPbmVUaW1lVmFsaWQ6IGZhbHNlLFxuICAgIHZhbGlkSW5kZXhlczogW10sXG4gIH1cblxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmlnaHRBbnN3ZXJzLmxlbmd0aDsgaSArPSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICB2YWxpZEluZGV4ZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdXNlckFuc3dlcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICh2YWxpZGF0ZVNpbXBsZVRleHQodXNlckFuc3dlcnNbal0sIFtyaWdodEFuc3dlcnNbaiArIGldXSkpIHtcbiAgICAgICAgdmFsaWRJbmRleGVzLnB1c2goaik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2YWxpZEluZGV4ZXMubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICAgIGdsb2JhbFZBLmlzT25lVGltZVZhbGlkID0gdHJ1ZTtcbiAgICAgIGdsb2JhbFZBLnZhbGlkSW5kZXhlcyA9IHZhbGlkSW5kZXhlcztcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxWQS52YWxpZEluZGV4ZXMucHVzaCguLi52YWxpZEluZGV4ZXMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdnbG9iYWxWYScsIGdsb2JhbFZBKTtcblxuICBpZiAoZ2xvYmFsVkEuaXNPbmVUaW1lVmFsaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ycmVjdDogdHJ1ZSxcbiAgICAgIGNvcnJlY3RJbmRleGVzOiB2YWxpZEluZGV4ZXMsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVuaXEgPSBnbG9iYWxWQS52YWxpZEluZGV4ZXMuZmlsdGVyKCh2LCBpLCBhKSA9PiBhLmluZGV4T2YodikgPT09IGkpO1xuICAgIGlmICh1bmlxLmxlbmd0aCA9PT0gdXNlckFuc3dlcnMubGVuZ3RoKSB7XG4gICAgICBsZXQgdW5pcXVlVXNlckFuc3dlcnMgPSB1c2VyQW5zd2Vycy5tYXAoKGFuc3dlcikgPT4gcHJlcGFyZVN0cmluZyhhbnN3ZXIpKS5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG4gICAgICBpZiAodW5pcXVlVXNlckFuc3dlcnMubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb3JyZWN0OiB0cnVlLFxuICAgICAgICAgIGNvcnJlY3RJbmRleGVzOiB2YWxpZEluZGV4ZXMsXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29ycmVjdDogZmFsc2UsXG4gICAgICAgICAgY29ycmVjdEluZGV4ZXM6IFtdLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvcnJlY3Q6IGZhbHNlLFxuICAgICAgICBjb3JyZWN0SW5kZXhlczogdW5pcSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmb3IobGV0IGkgPSAwOyBpPHVzZXJBbnN3ZXJzLmxlbmd0aDsgaSsrKXtcbiAgLy8gICBpZih2YWxpZGF0ZVNpbXBsZVRleHQodXNlckFuc3dlcnNbaV0sIFtyaWdodEFuc3dlcnNbaV1dKSl7XG4gIC8vICAgICB2YWxpZEluZGV4ZXMucHVzaChpKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBpZiAodmFsaWRJbmRleGVzLmxlbmd0aCA9PT0gdXNlckFuc3dlcnMubGVuZ3RoKSB7XG4gICAgaXNBbGxWYWxpZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb3JyZWN0OiBpc0FsbFZhbGlkLFxuICAgIGNvcnJlY3RJbmRleGVzOiB2YWxpZEluZGV4ZXMsXG4gIH1cbn1cblxuXG5jb25zdCBjb21wYXJlRWFjaFRvRWFjaCA9ICh1c2VyQW5zd2VycywgcmlnaHRBbnN3ZXJzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckFuc3dlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJpZ2h0QW5zd2Vycy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGNvbXBhcmVUd28odXNlckFuc3dlcnNbaV0sIHJpZ2h0QW5zd2Vyc1tqXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbi8vIGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXMoJ0lgZCBiZWVuIG1hZCBpXCJkIElgZCcpXG4iLCJcbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUVycm9yVGV4dCA9IChyaWdodEFuc3dlcnMpID0+e1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJoaW50cy1hbnN3ZXJzLWNvbnRhaW5lclwiPlxuICAgICAgJHtyaWdodEFuc3dlcnMubWFwKChhbnN3ZXIpPT4gYDxkaXYgY2xhc3M9XCJoaW50XCI+JHthbnN3ZXJ9PC9kaXY+YCkuam9pbignICcpfVxuICAgIDwvZGl2PlxuICBgO1xuICAvLyByZXR1cm4gYHJpZ2h0IGFuc3dlciBhcmUgJHtyaWdodEFuc3dlcnMuam9pbignLCAnKX1gO1xufVxuXG5jb25zdCBjYWxjdWxhdGVXaWR0aCA9ICAoYW5zd2VycykgPT57XG4gIGxldCBtYXhMZW5ndGggPSAwO1xuICBmb3IobGV0IGkgPSAwOyBpPGFuc3dlcnMubGVuZ3RoOyBpKyspe1xuICAgIGlmKGFuc3dlcnNbaV0ubGVuZ3RoID4gbWF4TGVuZ3RoKXtcbiAgICAgIG1heExlbmd0aCA9IGFuc3dlcnNbaV0ubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBpZihtYXhMZW5ndGggPCA3KXtcbiAgICByZXR1cm4gNjA7XG4gIH1cbiAgaWYobWF4TGVuZ3RoIDwgMTApe1xuICAgIHJldHVybiA5MDtcbiAgfVxuICBpZihtYXhMZW5ndGggPCAxOCl7XG4gICAgcmV0dXJuIDE1MDtcbiAgfVxuICBpZihtYXhMZW5ndGggPCAyNSl7XG4gICAgcmV0dXJuIDIwMDtcbiAgfVxuICByZXR1cm4gMjEwO1xufVxuXG5leHBvcnQgY29uc3QgcXVlc3Rpb25UZW1wbGF0ZSA9IChxdWVzdGlvbkRhdGEsIGlkKSA9PiB7XG4gIGlmKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICd0ZXh0LWluLWJsYW5rJyl7XG4gICAgY29uc3Qgc3BsaXR0ZWQgPSBxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0LnNwbGl0KC9fKy8pO1xuICAgIGNvbnN0IHdpZHRoID0gY2FsY3VsYXRlV2lkdGgocXVlc3Rpb25EYXRhLnJpZ2h0QW5zd2Vycyk7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzID0gXCJxdWVzdGlvbiBpbi1ibGFua1wiIGlkPVwiJHtpZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi10ZXh0XCI+JHtzcGxpdHRlZC5qb2luKGAke2Fuc3dlclRlbXBsYXRlSW5CbGFuayhhbnN3ZXJUZW1wbGF0ZUluQmxhbmssIHdpZHRoKX1gKX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1zaWduXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGludC1zaWduXCI+PGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlXCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpbnQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIH1lbHNle1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcyA9IFwicXVlc3Rpb25cIiBpZD1cIiR7aWR9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb24tdGV4dFwiPiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIj5cbiAgICAgICAgJHthbnN3ZXJUZW1wbGF0ZShxdWVzdGlvbkRhdGEpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stc2lnblwiPjxpIGNsYXNzPVwiZmFzIGZhLXNpZ24taW4tYWx0XCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpbnQtc2lnblwiPjxpIGNsYXNzPVwiZmFyIGZhLXF1ZXN0aW9uLWNpcmNsZVwiPjwvaT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoaW50LWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGFuc3dlclRlbXBsYXRlSW5CbGFuayA9IChxdWVzdGlvbkRhdGEsIHdpZHRoKSA9PntcbiAgcmV0dXJuIGBcbiAgPGRpdiBzdHlsZT1cIndpZHRoOiR7d2lkdGh9cHg7XCIgY2xhc3MgPSBcImFuc3dlci10ZXh0IGluLWJsYW5rXCI+XG4gICAgPGlucHV0IGNsYXNzID0gXCJhbnN3ZXItdGV4dC1pbnB1dCBpbi1ibGFua1wiIC8+XG4gIDwvZGl2PlxuYFxufVxuXG5leHBvcnQgY29uc3QgYW5zd2VyVGVtcGxhdGUgPSAocXVlc3Rpb25EYXRhKSA9PntcbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3NpbXBsZS10ZXh0JyB8fCBxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlID09PSAndGV4dC1pbi1ibGFuaycpe1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzID0gXCJhbnN3ZXItdGV4dFwiPlxuICAgICAgICA8aW5wdXQgY2xhc3MgPSBcImFuc3dlci10ZXh0LWlucHV0IFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG4gIGlmKHF1ZXN0aW9uRGF0YS5xdWVzdGlvblR5cGUgPT09ICd2YXJpYW50cy1zaW5nbGUnKXtcblxuICAgIHJldHVybiBgXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3F1ZXN0aW9uRGF0YS52YXJpYW50cy5tYXAoKHZhbHVlLCBpbmRleCk9PmBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9LSR7aW5kZXh9XCJcbiAgICAgICAgICAgICAgbmFtZT1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIiB2YWx1ZT1cIiR7dmFsdWV9XCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9LSR7aW5kZXh9XCI+JHt2YWx1ZX08L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYCkuam9pbignICcpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICBgO1xuICB9XG5cbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3ZhcmlhbnRzLW11bHRpJyl7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7cXVlc3Rpb25EYXRhLnZhcmlhbnRzLm1hcCgodmFsdWUsIGluZGV4KT0+YFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fS0ke2luZGV4fVwiXG4gICAgICAgICAgICAgIG5hbWU9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9XCIgdmFsdWU9XCIke3ZhbHVlfVwiIC8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fS0ke2luZGV4fVwiPiR7dmFsdWV9PC9sYWJlbD5cbiAgICAgICAgICBgKS5qb2luKCcgJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmNsYXNzIFF1aXpDb250cm9sbGVyIHtcblxuICBxdWVzdGlvbnMgPSBbXTtcbiAgY29udmVydGVkUXVlc3Rpb25zID0gW107XG4gIG9sZFF1ZXN0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNlY3Rpb25zID0gW10sIHBhcmVudEVsZW1lbnQsIHRlc3RNb2RlPWZhbHNlKSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IHNlY3Rpb25zO1xuICAgIHRoaXMubWF4U2VjdGlvbk51bWJlciA9IHNlY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgdGhpcy50ZXN0TW9kZSA9IHRlc3RNb2RlXG4gICAgaWYgKHRoaXMubWF4U2VjdGlvbk51bWJlciA9PT0gMCkge1xuICAgICAgdGhpcy5pc0xhc3RTZWN0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudDtcblxuICAgIHRoaXMucmVuZGVyTWFpbkNvbnRyb2xzKCk7XG4gICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9ucyA9IHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgU2VjdGlvbihzZWN0aW9uLCB0aGlzLnF1ZXN0aW9uc0NvbnRhaW5lciwgdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbiwgaW5kZXgsIHRlc3RNb2RlKTtcbiAgICB9KTtcblxuICAgIC8vIHRoaXMuY3VycmVudFNlY3Rpb24gPSAwO1xuICAgIHRoaXMuY2hhbmdlU2VjdGlvbigwKTtcblxuICAgIGlmKHRlc3RNb2RlKXtcbiAgICAgIHRoaXMucmVuZGVyTmV4dFNlY3Rpb25CdXR0b24oKVxuICAgIH1cbiAgfVxuXG4gIGluaXRTZWN0aW9uID0gKHNlY3Rpb25OdW1iZXIpID0+IHtcbiAgICB0aGlzLmN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbk51bWJlcjtcblxuICAgIHRoaXMuY29udmVydGVkU2VjdGlvbnNbc2VjdGlvbk51bWJlcl0ucmVuZGVyU2VjdGlvbigpO1xuXG4gICAgdGhpcy5udW1iZXJUZXh0Q29udGFpbmVyLmlubmVyVGV4dCA9IGBTZWN0aW9uICR7c2VjdGlvbk51bWJlciArIDF9IG9mICR7dGhpcy5jb252ZXJ0ZWRTZWN0aW9ucy5sZW5ndGh9YDtcblxuICB9XG5cbiAgY2hhbmdlU2VjdGlvbiA9IChzZWN0aW9uTnVtYmVyKSA9PiB7XG4gICAgdGhpcy5zZWN0aW9uTnVtYmVyID0gc2VjdGlvbk51bWJlcjtcbiAgICBpZiAoc2VjdGlvbk51bWJlciA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHNlY3Rpb25OdW1iZXIgPiAwKSB7XG4gICAgICB0aGlzLnByZXZCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJldkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgXG4gICAgaWYgKHNlY3Rpb25OdW1iZXIgPiB0aGlzLmN1cnJlbnRTZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5tYXhTZWN0aW9uTnVtYmVyID09PSBzZWN0aW9uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaXNMYXN0U2VjdGlvbiA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2VjdGlvbk51bWJlciA+IHRoaXMubWF4U2VjdGlvbk51bWJlcikge1xuICAgICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJlbnRTZWN0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5jdXJyZW50U2VjdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1t0aGlzLmN1cnJlbnRTZWN0aW9uXS5oaWRlU2VjdGlvbigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tzZWN0aW9uTnVtYmVyXS5jb21wbGV0ZWQpIHtcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShzZWN0aW9uTnVtYmVyID49IHRoaXMubWF4U2VjdGlvbk51bWJlcikpIHtcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmluaXRTZWN0aW9uKHNlY3Rpb25OdW1iZXIpO1xuICAgIGlmKHRoaXMudGVzdE1vZGUpe1xuICAgICAgdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbigpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyTWFpbkNvbnRyb2xzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICA8ZGl2IGNsYXNzID0gXCJxdWVzdGlvbnMtbGlzdFwiPiA8L2Rpdj5cbiAgICA8ZGl2IGlkPVwibnVtYmVyLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJwcmV2LXNlY3Rpb25cIj5QcmV2IFNlY3Rpb248L2J1dHRvbj4gXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJjaGVja19idXR0b25cIj5DaGVjayB0aGUgYW5zd2VyczwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwibmV4dC1zZWN0aW9uXCI+TmV4dCBTZWN0aW9uPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgaWQ9XCJlbmQtcXVpelwiPkVuZCBxdWl6PC9idXR0b24+IFxuICAgIDwvZGl2PlxuICAgIGBcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcblxuICAgIHRoaXMuY2hlY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tfYnV0dG9uJyk7XG4gICAgaWYodGhpcy50ZXN0TW9kZSl7XG4gICAgICB0aGlzLmNoZWNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICB0aGlzLmVuZFF1aXpCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXF1aXonKTtcbiAgICB0aGlzLmVuZFF1aXpCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMubmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LXNlY3Rpb24nKTtcbiAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMucHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2LXNlY3Rpb24nKTtcbiAgICB0aGlzLnByZXZCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMubnVtYmVyVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXItY29udGFpbmVyJyk7XG5cbiAgICB0aGlzLmNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1t0aGlzLmN1cnJlbnRTZWN0aW9uXS5jaGVja0NvcnJlY3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hhbmdlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uICsgMSk7IH0pO1xuICAgIHRoaXMucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5jaGFuZ2VTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24gLSAxKTsgfSk7XG5cbiAgICB0aGlzLnF1ZXN0aW9uc0NvbnRhaW5lciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25zLWxpc3QnKTtcbiAgfVxuXG4gIHJlbmRlck5leHRTZWN0aW9uQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZW5kZXInLCB0aGlzLmlzTGFzdFNlY3Rpb24pXG4gICAgaWYgKCF0aGlzLmlzTGFzdFNlY3Rpb24pIHtcbiAgICAgIHRoaXMubmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRRdWl6QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5lbmRRdWl6QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAgICAgICB0aGlzLnJlbmRlckVuZE9mVGVzdCgpXG4gICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMucmVuZGVyQ29uZ3JhdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlckVuZE9mVGVzdCA9ICgpID0+e1xuICAgIHRoaXMucXVlc3Rpb25zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5udW1iZXJUZXh0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMuY29udmVydGVkU2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbik9PntcbiAgICAgIHNlY3Rpb24uY2hlY2tDb3JyZWN0KClcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgYWxsUXVlc3Rpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGFsbFF1ZXN0aW9ucyA9IFsuLi5hbGxRdWVzdGlvbnMsIC4uLnRoaXMuY29udmVydGVkU2VjdGlvbnNbaV0uY29udmVydGVkUXVlc3Rpb25zXTtcbiAgICB9XG4gICAgbGV0IGFsbFF1ZXN0aW9uc0xlbmd0aCA9IGFsbFF1ZXN0aW9ucy5sZW5ndGggLSB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmxlbmd0aDtcblxuXG4gICAgbGV0IGNvcnJlY3RDb3VudCA9IGFsbFF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXN0KSA9PiB7XG4gICAgICByZXR1cm4gcXVlc3QucmVzdWx0Q29ycmVjdDtcbiAgICB9KS5sZW5ndGg7XG5cbiAgICBjb3JyZWN0Q291bnQgPSBjb3JyZWN0Q291bnQgLSB0aGlzLnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIGNvbnNvbGUubG9nKGByZXN1bHQ6ICR7Y29ycmVjdENvdW50fSBvdXQgb2YgJHthbGxRdWVzdGlvbnNMZW5ndGh9YClcblxuICAgIGxldCByZXN1bHRMZXZlbCA9ICdBMCdcblxuICAgIGlmKGNvcnJlY3RDb3VudCA+PSAxMCl7XG4gICAgICByZXN1bHRMZXZlbCA9ICdBMSdcbiAgICB9XG4gICAgaWYoY29ycmVjdENvdW50ID49IDIwKXtcbiAgICAgIHJlc3VsdExldmVsID0gJ0EyJ1xuICAgIH1cbiAgICBpZihjb3JyZWN0Q291bnQgPj0gMjUpe1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnQjEnXG4gICAgfVxuICAgIGlmKGNvcnJlY3RDb3VudCA+PSAzNSl7XG4gICAgICByZXN1bHRMZXZlbCA9ICdCMidcbiAgICB9XG4gICAgaWYoY29ycmVjdENvdW50ID49IDQyKXtcbiAgICAgIHJlc3VsdExldmVsID0gJ0MxJ1xuICAgIH1cbiAgICBpZihjb3JyZWN0Q291bnQgPj0gNDcpe1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnQzInXG4gICAgfVxuXG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJsYXN0LW1lc3NhZ2VcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICBHcmF0cywgeW91IGhhdmUgY29tcGxldGVkIHRoZSB0ZXN0IVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgWW91IGdvdCAke2NvcnJlY3RDb3VudH0gb3V0IG9mICR7YWxsUXVlc3Rpb25zTGVuZ3RofVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgWW91ciBsZXZlbCBpcyAke3Jlc3VsdExldmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3Qgb2xkTGFzdE1lc3NhZ2UgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtbWVzc2FnZScpO1xuICAgIGlmIChvbGRMYXN0TWVzc2FnZSkge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG9sZExhc3RNZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgfVxuXG4gIHJlbmRlckNvbmdyYXRzID0gKCkgPT4ge1xuICAgIHRoaXMucXVlc3Rpb25zQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5udW1iZXJUZXh0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBsZXQgYWxsUXVlc3Rpb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBhbGxRdWVzdGlvbnNMZW5ndGggKz0gdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnMubGVuZ3RoO1xuICAgICAgYWxsUXVlc3Rpb25zID0gWy4uLmFsbFF1ZXN0aW9ucywgLi4udGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tpXS5jb252ZXJ0ZWRRdWVzdGlvbnNdO1xuICAgIH1cbiAgICBsZXQgYWxsUXVlc3Rpb25zTGVuZ3RoID0gYWxsUXVlc3Rpb25zLmxlbmd0aCAtIHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoO1xuXG5cbiAgICBsZXQgZmlyc3RUaW1lQ29ycmVjdENvdW50ID0gYWxsUXVlc3Rpb25zLmZpbHRlcigocXVlc3QpID0+IHtcbiAgICAgIHJldHVybiBxdWVzdC5maXJzdFRpbWVDb3JyZWN0O1xuICAgIH0pLmxlbmd0aDtcblxuICAgIGZpcnN0VGltZUNvcnJlY3RDb3VudCA9IGZpcnN0VGltZUNvcnJlY3RDb3VudCAtIHRoaXMuc2VjdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAoZmlyc3RUaW1lQ29ycmVjdENvdW50IC8gYWxsUXVlc3Rpb25zTGVuZ3RoKSAqIDEwMDtcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibGFzdC1tZXNzYWdlXCI+XG4gICAgICAgIEdyYXRzLCB5b3UgaGF2ZSBjb21wbGV0ZWQgdGhlIHRlc3QhXG4gICAgICAgICR7TWF0aC5yb3VuZChwZXJjZW50YWdlKX0lIGNvcnJlY3QhXG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IG9sZExhc3RNZXNzYWdlID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKTtcbiAgICBpZiAob2xkTGFzdE1lc3NhZ2UpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChvbGRMYXN0TWVzc2FnZSk7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1aXpDb250cm9sbGVyO1xuIiwiaW1wb3J0IHtjcmVhdGVRdWVzdGlvbiwgVGV4dEJlZm9yZVF1ZXN0aW9ufSBmcm9tICcuLi9RdWVzdGlvbi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9ue1xuICBxdWVzdGlvbnMgPSBbXTtcbiAgY29udmVydGVkUXVlc3Rpb25zID0gW107XG4gIHJlbmRlcmVkID0gZmFsc2U7XG4gIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHNlY3Rpb25EYXRhLCBjb250YWluZXIsIGFsbFJpZ2h0Q2FsbEJhY2ssIG51bWJlciwgdGVzdE1vZGU9ZmFsc2Upe1xuICAgIHRoaXMuaGVhZGVyID0gc2VjdGlvbkRhdGEuaGVhZGVyO1xuICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMucXVlc3Rpb25zID0gc2VjdGlvbkRhdGEucXVlc3Rpb25zO1xuICAgIHRoaXMuYWxsUmlnaHRDYWxsQmFjayA9IGFsbFJpZ2h0Q2FsbEJhY2s7XG4gICAgdGhpcy50ZXN0TW9kZSA9IHRlc3RNb2RlXG4gICAgaWYodGVzdE1vZGUpe1xuICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaGlkZVNlY3Rpb24oKXtcbiAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGZpbmRBbGxGYWxzZSA9ICgpID0+e1xuICAgIHJldHVybiB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5maWx0ZXIoKHF1ZXMpPT4gIXF1ZXMucmVzdWx0Q29ycmVjdCk7XG4gIH1cblxuICBjaGVja0NvcnJlY3QgPSAoKSA9PntcbiAgICAvLyBpZih0aGlzLnRlc3RNb2RlKXtcbiAgICAvLyAgIHJldHVyblxuICAgIC8vIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnNbaV0uY2hlY2soZmFsc2UpO1xuICAgIH1cbiAgICBjb25zdCBmYWxzZVZhbHVlcyA9IHRoaXMuZmluZEFsbEZhbHNlKCk7XG4gICAgaWYoIWZhbHNlVmFsdWVzLmxlbmd0aCl7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICB0aGlzLmFsbFJpZ2h0Q2FsbEJhY2soKTtcbiAgICAgIC8vdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbigpO1xuICAgIH1cblxuICB9XG4gIFxuICBxdWVzdGlvbkNhbGxiYWNrID0gKGlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCkgPT4ge1xuICAgIGlmKGlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCl7XG4gICAgICBjb25zdCBmYWxzZVZhbHVlcyA9ICB0aGlzLmZpbmRBbGxGYWxzZSgpO1xuICAgICAgaWYoIWZhbHNlVmFsdWVzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMuY2hlY2tDb3JyZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgXG4gIHJlbmRlclF1aXogPSAoKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaTx0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9uc1tpXS5yZW5kZXJRdWVzdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclNlY3Rpb24gPSAoKSA9PntcbiAgICBpZih0aGlzLnJlbmRlcmVkICYmIHRoaXMuc2VjdGlvbkNvbnRhaW5lcil7XG4gICAgICB0aGlzLnNlY3Rpb25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzID0gXCJzZWN0aW9uLSR7dGhpcy5udW1iZXJ9XCI+IDwvZGl2PlxuICAgIGBcbiAgICB0aGlzLmNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7dGhpcy5udW1iZXJ9YCk7XG4gICAgdGhpcy5jb252ZXJ0ZWRRdWVzdGlvbnMgPSBbbmV3IFRleHRCZWZvcmVRdWVzdGlvbih0aGlzLmhlYWRlciwgdGhpcy5zZWN0aW9uQ29udGFpbmVyKSwgLi4udGhpcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbik9PntcbiAgICAgIHJldHVybiBjcmVhdGVRdWVzdGlvbihxdWVzdGlvbiwgdGhpcy5zZWN0aW9uQ29udGFpbmVyLCB0aGlzLnF1ZXN0aW9uQ2FsbGJhY2ssIHRoaXMudGVzdE1vZGUpO1xuICAgIH0pXTtcbiAgICB0aGlzLnJlbmRlcmVkID0gdHJ1ZTtcblxuICAgIHRoaXMucmVuZGVyUXVpeigpO1xuICAgIC8vIHNlY3Rpb25EYXRhLnF1ZXN0aW9ucztcbiAgfVxufSIsImZ1bmN0aW9uIG1ha2VpZChsZW5ndGgpIHtcbiAgdmFyIHJlc3VsdCAgICAgICAgICAgPSAnJztcbiAgdmFyIGNoYXJhY3RlcnMgICAgICAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+e1xuICByZXR1cm4gbWFrZWlkKDEwKTtcbn0iLCJpbXBvcnQgUXVpekNvbnRyb2xsZXIgZnJvbSAnLi9RdWl6Q29udHJvbGxlcic7XG5cbi8qXG5tb2R1bGVzOlxuICAxLiBtb2R1bGUgdG8gcGFyc2UgZGF0YSBmcm9tIGNzdiBvciBldGNcbiAgMi4gbW9kdWxlIHRvIHNob3cgcXVpeiBkYXRhLCBwYWdpbmF0aW9uLCBldGMuXG4gIDMuIG1vZHVsZSB0byBjaGVjayBhbnN3ZXIuXG4gIDQuIG1vZHVsZSB0byBzZW5kIGRhdGEgdG8gc2VydmVyIChvciBzbXRoIGxpa2UgdGhpcylcblxuKi9cblxuLy8gY29uc3QgdGVzdFF1ZXNpb25zID0gW1xuLy8gICB7XG4vLyAgICAgcXVlc3Rpb25UeXBlOiAnc2ltcGxlLXRleHQnLFxuLy8gICAgIHF1ZXN0aW9uVGV4dDogJ0kgd2VudCBvdXQgaW4gdGhlIGNvbGQgd2l0aG91dCBhIGNvYXQuIChzaWxseSknLFxuLy8gICAgIHJpZ2h0QW5zd2VyczogWydJdCB3YXMgc2lsbHkgb2YgbWUgdG8gZ28gb3V0IGluIHRoZSBjb2xkIHdpdGhvdXQgYSBjb2F0J10sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICd0ZXh0LWluLWJsYW5rJyxcbi8vICAgICBxdWVzdGlvblRleHQ6ICdUaGVyZSBhcmUgbm90IG1hbnkgdGhpbmdzIHBlb3BsZSB3aWxsIG5vdCBkbyBfX19fIGZlYXIuJyxcbi8vICAgICByaWdodEFuc3dlcnM6IFsnb3V0IG9mJ10sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICd2YXJpYW50cy1zaW5nbGUnLFxuLy8gICAgIHF1ZXN0aW9uVGV4dDogJ0kgbGl2ZSBpbiBhIHZlcnkgc21hbGwgdmlsbGFnZS4gWW91IHByb2JhYmx5IHdvbuKAmXQgZmluZCBpdCBfXyB5b3VyIG1hcC4nLFxuLy8gICAgIHJpZ2h0QW5zd2VyczogWydvbiddLFxuLy8gICAgIHZhcmlhbnRzOiBbJ2luJywgJ29uJ10sXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBxdWVzdGlvblR5cGU6ICd2YXJpYW50cy1tdWx0aScsXG4vLyAgICAgcXVlc3Rpb25UZXh0OiAndGVzdCBtdWx0aSB2YXJpYW50Jyxcbi8vICAgICByaWdodEFuc3dlcnM6IFsnb24nLCAnaW4nXSxcbi8vICAgICB2YXJpYW50czogWydpbicsICdvbiddLFxuLy8gICB9XG4vLyBdIFxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcblxuICAvLyBpbmplY3Qgc3R5bGVzIHRvIHBhZ2VcbiAgY29uc3QgYXBwZW5kU3R5bGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjc3MgPSByZXF1aXJlKCcuL3N0eWxlcy9pbmRleC5zY3NzJyk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgICBjb25zdCBzdHlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbS5pbm5lckhUTUwgPSBzY3NzO1xuXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNzQ1YWMzOTRhLmpzXCI7XG5cbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbSk7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG4gIFxuICBhcHBlbmRTdHlsZXMoKTtcblxuICBjb25zdCBodG1sID0gYDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cInN0YXJ0XCI+U3RhcnQ8L2J1dHRvbj5gXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWl6Jyk7XG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICBjb25zdCBidXR0b24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignI3N0YXJ0Jyk7XG5cbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChidXR0b24pO1xuICAgIG5ldyBRdWl6Q29udHJvbGxlcih3aW5kb3cudGVzdERhdGEsIGNvbnRhaW5lciwgdHJ1ZSk7XG4gIH0pO1xuXG5cblxufSk7XG5cbiIsIiBtb2R1bGUuZXhwb3J0cyA9IGRlY29kZVVSSUNvbXBvbmVudChcImJvZHklN0JiYWNrZ3JvdW5kLWNvbG9yJTNBJTIzZWZlZWU5JTNCYmFja2dyb3VuZC1pbWFnZSUzQXVybChodHRwcyUzQSUyRiUyRnVjYXJlY2RuLmNvbSUyRjA0M2EyMGJlLTYzNWMtNDYyMi04MWYxLTUwNDYxNTVlNDdhOCUyRiklN0QlMjNxdWl6JTdCZGlzcGxheSUzQWZsZXglM0JtYXgtd2lkdGglM0E4MDBweCUzQm1pbi13aWR0aCUzQTMwMHB4JTNCbWFyZ2luJTNBMCUyMGF1dG8lM0JmbGV4LWRpcmVjdGlvbiUzQWNvbHVtbiUzQmZvbnQtZmFtaWx5JTNBJTIyT3BlbiUyMFNhbnMlMjIlMkMlMjBzYW5zLXNlcmlmJTNCZm9udC1zaXplJTNBMTZweCUzQm1hcmdpbi10b3AlM0E0MHB4JTNCbWFyZ2luLWJvdHRvbSUzQTQwcHglN0QudGV4dC1xdWVzdGlvbi1pdGFsaWMlN0Jmb250LXdlaWdodCUzQTQwMCU3RC5xdWVzdGlvbiU3QnBvc2l0aW9uJTNBcmVsYXRpdmUlM0JiYWNrZ3JvdW5kLWNvbG9yJTNBJTIzZmZmJTNCYm9yZGVyJTNBMXB4JTIwc29saWQlMjAlMjNkYWRjZTAlM0Jib3JkZXItcmFkaXVzJTNBMTBweCUzQm1hcmdpbi1ib3R0b20lM0ExMnB4JTNCcGFkZGluZyUzQTI0cHglM0JwYWdlLWJyZWFrLWluc2lkZSUzQWF2b2lkJTNCb3ZlcmZsb3clM0FoaWRkZW4lN0QucXVlc3Rpb24uc2VjdGlvbi1oZWFkZXIlN0Jmb250LXNpemUlM0ExOXB4JTNCZm9udC13ZWlnaHQlM0Fib2xkJTdELmhpbnQtY29udGFpbmVyJTdCcG9zaXRpb24lM0FhYnNvbHV0ZSUzQmRpc3BsYXklM0Fub25lJTNCYmFja2dyb3VuZC1jb2xvciUzQXdoaXRlJTNCYm9yZGVyJTNBMXB4JTIwc29saWQlMjAlMjM1ZDYzNmYlM0J3aWR0aCUzQTUwJTI1JTNCaGVpZ2h0JTNBNzAlMjUlM0Jib3JkZXItcmFkaXVzJTNBNXB4JTNCcGFkZGluZyUzQTVweCUzQmNvbG9yJTNBJTIzMjhhNzQ1JTNCdG9wJTNBNXB4JTNCcmlnaHQlM0EzLjYlMjUlM0JhbmltYXRpb24lM0FoaW50JTIwMC4zcyUyMGVhc2UtaW4tb3V0JTIwMSU3RC5sYXN0LW1lc3NhZ2UlN0JwYWRkaW5nJTNBMTZweCUzQmZvbnQtc2l6ZSUzQTI1cHglN0QubGFzdC1tZXNzYWdlJTIwLm1lc3NhZ2UlN0JtYXJnaW4tYm90dG9tJTNBMjBweCUzQmZvbnQtc2l6ZSUzQTM1cHglM0JkaXNwbGF5JTNBZmxleCUzQmp1c3RpZnktY29udGVudCUzQWNlbnRlciU3RCU0MGtleWZyYW1lcyUyMGhpbnQlN0IwJTI1JTdCcmlnaHQlM0EtNzAlMjUlN0Q5OSUyNSU3QnJpZ2h0JTNBMy42JTI1JTdEJTdELnF1ZXN0aW9uJTIwLmNoZWNrLXNpZ24lN0JjdXJzb3IlM0Fwb2ludGVyJTNCY29sb3IlM0ElMjMyOGE3NDUlM0Jwb3NpdGlvbiUzQWFic29sdXRlJTNCYm90dG9tJTNBMC41dnclM0JyaWdodCUzQTAuNnZ3JTNCZm9udC1zaXplJTNBMjBweCUzQndpZHRoJTNBMjBweCUzQmhlaWdodCUzQTIwcHglN0QucXVlc3Rpb24lMjAuaGludC1zaWduJTdCY3Vyc29yJTNBcG9pbnRlciUzQmNvbG9yJTNBZ3JleSUzQnBvc2l0aW9uJTNBYWJzb2x1dGUlM0J0b3AlM0EwLjV2dyUzQnJpZ2h0JTNBMC42dnclM0Jmb250LXNpemUlM0EyMHB4JTdELnF1ZXN0aW9uLmNvcnJlY3QlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzI4YTc0NSU3RC5xdWVzdGlvbi5jb3JyZWN0JTdCYm9yZGVyJTNBMXB4JTIwc29saWQlMjAlMjMyOGE3NDUlM0JiYWNrZ3JvdW5kLWNvbG9yJTNBcmdiYSg0MCUyQzE2NyUyQzY5JTJDMC4yKSU3RC5xdWVzdGlvbi5pbmNvcnJlY3QlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RjMzU0NSUzQmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDIyMCUyQzUzJTJDNjklMkMwLjIpJTdELnF1ZXN0aW9uLmluY29ycmVjdCUyMC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuayU3QmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDIyMCUyQzUzJTJDNjklMkMwLjUpJTdELnF1ZXN0aW9uJTIwLmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rLmluY29ycmVjdCU3QmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDIyMCUyQzUzJTJDNjklMkMwLjUpJTdEZGl2LnF1ZXN0aW9uLmNvcnJlY3QlMjAuYW5zd2VyLXRleHQtaW5wdXQuaW4tYmxhbmslN0JiYWNrZ3JvdW5kLWNvbG9yJTNBcmdiYSg0MCUyQzE2NyUyQzY5JTJDMC41KSU3RGRpdi5xdWVzdGlvbiUyMC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuay5jb3JyZWN0JTdCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoNDAlMkMxNjclMkM2OSUyQzAuNSklN0QuY2hlY2tib3gtY29udGFpbmVyJTdCbWFyZ2luLWJvdHRvbSUzQTRweCU3RC5jaGVja2JveC1jb250YWluZXIlMjBsYWJlbCU3QnBvc2l0aW9uJTNBcmVsYXRpdmUlM0Jib3R0b20lM0ExcHglN0QucXVlc3Rpb24tdGV4dCU3QmZvbnQtc2l6ZSUzQTE2cHglM0Jmb250LXdlaWdodCUzQTUwMCUzQmxldHRlci1zcGFjaW5nJTNBLjFweCUzQmxpbmUtaGVpZ2h0JTNBMjRweCUzQmNvbG9yJTNBJTIzMjAyMTI0JTNCZm9udC13ZWlnaHQlM0E0MDAlM0J3aWR0aCUzQTEwMCUyNSUzQndvcmQtYnJlYWslM0FicmVhay13b3JkJTNCbWFyZ2luLWJvdHRvbSUzQTE2cHglN0QucXVlc3Rpb24uaW4tYmxhbmslMjAucXVlc3Rpb24tdGV4dCU3Qm1hcmdpbi1ib3R0b20lM0EwcHglN0QucXVlc3Rpb24uaW5jb3JyZWN0JTIwLmNoZWNrLXNpZ24lN0Jjb2xvciUzQSUyM2RjMzU0NSU3RC5hbnN3ZXIlN0JkaXNwbGF5JTNBZmxleCUzQmZsZXgtZGlyZWN0aW9uJTNBY29sdW1uJTdELmFuc3dlci10ZXh0JTdCd2lkdGglM0E2MCUyNSU3RC5hbnN3ZXItdGV4dC5pbi1ibGFuayU3QmRpc3BsYXklM0FpbmxpbmUtYmxvY2slM0J3aWR0aCUzQWF1dG8lM0JtYXJnaW4tcmlnaHQlM0E1cHglN0QuYW5zd2VyLXRleHQtaW5wdXQlN0JiYWNrZ3JvdW5kJTNBdHJhbnNwYXJlbnQlM0JwYWRkaW5nJTNBMnB4JTNCYm9yZGVyJTNBMCUzQmJvcmRlci1ib3R0b20lM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCUzQndpZHRoJTNBMTAwJTI1JTdELmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rJTdCcGFkZGluZyUzQTJweCUzQmJvcmRlciUzQTAlM0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCUzQndpZHRoJTNBMTAwJTI1JTdELmFuc3dlci10ZXh0LWlucHV0JTNBZm9jdXMlN0JvdXRsaW5lJTNBbm9uZSUzQmJvcmRlci1ib3R0b20lM0ExcHglMjBzb2xpZCUyMCUyMzVkNjM2ZiU3RC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuayUzQWZvY3VzJTdCb3V0bGluZSUzQW5vbmUlM0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyM2RhZGNlMCU3RC5lcnJvci10ZXh0JTdCY29sb3IlM0FyZWQlM0Jmb250LXNpemUlM0ExMnB4JTNCd2lkdGglM0E1NSUyNSUzQnBhZGRpbmctdG9wJTNBMTBweCU3RC5idXR0b24lN0J3aWR0aCUzQTE4MHB4JTNCaGVpZ2h0JTNBNDBweCUzQmJvcmRlci1yYWRpdXMlM0ExMHB4JTNCYm9yZGVyJTNBbm9uZSUzQmJhY2tncm91bmQtY29sb3IlM0F3aGl0ZSUzQmN1cnNvciUzQXBvaW50ZXIlN0QlMjNzdGFydCU3QmZvbnQtc2l6ZSUzQTIwcHglM0J3aWR0aCUzQTIwMHB4JTNCaGVpZ2h0JTNBNTVweCUzQmFsaWduLXNlbGYlM0FjZW50ZXIlM0J0ZXh0LXRyYW5zZm9ybSUzQXVwcGVyY2FzZSUzQmJvcmRlci1yYWRpdXMlM0EwJTNCYmFja2dyb3VuZC1jb2xvciUzQXRyYW5zcGFyZW50JTNCYmFja2dyb3VuZC1pbWFnZSUzQXVybCglMjJkYXRhJTNBaW1hZ2UlMkZzdmclMkJ4bWwlMkMlMjUzY3N2ZyUyMHdpZHRoJTNEJzEwMCUyNTI1JyUyMGhlaWdodCUzRCcxMDAlMjUyNSclMjB4bWxucyUzRCdodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmcnJTI1M2UlMjUzY3JlY3QlMjB3aWR0aCUzRCcxMDAlMjUyNSclMjBoZWlnaHQlM0QnMTAwJTI1MjUnJTIwZmlsbCUzRCdub25lJyUyMHN0cm9rZSUzRCclMjUyMzMzMyclMjBzdHJva2Utd2lkdGglM0QnNiclMjBzdHJva2UtZGFzaGFycmF5JTNEJzElMjUyYyUyMDknJTIwc3Ryb2tlLWRhc2hvZmZzZXQlM0QnNDcnJTIwc3Ryb2tlLWxpbmVjYXAlM0Qnc3F1YXJlJyUyRiUyNTNlJTI1M2MlMkZzdmclMjUzZSUyMiklN0QuYnV0dG9uJTNBZm9jdXMlN0JvdXRsaW5lJTNBbm9uZSU3RC5idXR0b24lM0FhY3RpdmUlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzVkNjM2ZiU3RC5idXR0b24tY29udGFpbmVyJTdCZGlzcGxheSUzQWZsZXglM0JqdXN0aWZ5LWNvbnRlbnQlM0FzcGFjZS1hcm91bmQlN0QlNDBtZWRpYSUyMChtYXgtd2lkdGglM0ElMjA2MDBweCklN0IuYW5zd2VyLXRleHQlN0J3aWR0aCUzQTkwJTI1JTdELnF1ZXN0aW9uJTIwLmNoZWNrLXNpZ24lN0JyaWdodCUzQTMwcHglM0Jmb250LXNpemUlM0EyNXB4JTNCYm90dG9tJTNBM3Z3JTdELnF1ZXN0aW9uJTIwLmhpbnQtc2lnbiU3QnJpZ2h0JTNBMzBweCUzQmZvbnQtc2l6ZSUzQTI1cHglM0Jib3R0b20lM0EzdnclN0QucXVlc3Rpb24uaW4tYmxhbmslMjAucXVlc3Rpb24tdGV4dCU3Qm1hcmdpbi1ib3R0b20lM0ExMnB4JTdEJTdEJTQwbWVkaWElMjAobWF4LXdpZHRoJTNBJTIwNTAwcHgpJTdCLnF1ZXN0aW9uJTdCcGFkZGluZy1yaWdodCUzQTQ1cHglN0QucXVlc3Rpb24lMjAuY2hlY2stc2lnbiU3QnJpZ2h0JTNBMjBweCUzQmZvbnQtc2l6ZSUzQTIycHglN0QucXVlc3Rpb24lMjAuaGludC1zaWduJTdCcmlnaHQlM0EyMHB4JTNCZm9udC1zaXplJTNBMjJweCU3RC5idXR0b24lN0J3aWR0aCUzQTEzMHB4JTNCaGVpZ2h0JTNBNDBweCUzQmZvbnQtc2l6ZSUzQTEycHglN0QlN0QlMEFcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==