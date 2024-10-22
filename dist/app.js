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
      console.log('call check');
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
      console.log('added', this.questionData, this.mainElement.querySelector('.check-sign'));
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
const createTextInBlank = (questionData, parentElem, callback, sectionIndex, questionIndex) => {
  if (questionData.questionText.match(/_+/g).length > 1) {
    return new _MultipleTextInBlank__WEBPACK_IMPORTED_MODULE_3__["default"](questionData, parentElem, callback, false, sectionIndex, questionIndex);
  } else {
    return new _TextInBlank__WEBPACK_IMPORTED_MODULE_2__["default"](questionData, parentElem, callback, false, sectionIndex, questionIndex);
  }
};
const createQuestion = function (questionData, parentElem, callback) {
  let testMode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let sectionIndex = arguments.length > 4 ? arguments[4] : undefined;
  let questionIndex = arguments.length > 5 ? arguments[5] : undefined;
  if (testMode && questionData.questionType !== 'variants-single') {
    throw new Error(`test mode is enabled, but question' type is ${questionData.questionType}`);
  }
  console.log('qies', questionData);
  switch (questionData.questionType) {
    case 'simple-text':
      return new _SimpleText__WEBPACK_IMPORTED_MODULE_1__["default"](questionData, parentElem, callback, false, sectionIndex, questionIndex);
    case 'text-in-blank':
      return createTextInBlank(questionData, parentElem, callback, sectionIndex, questionIndex);
    case 'variants-multi':
      return new _MultiVariants__WEBPACK_IMPORTED_MODULE_5__["default"](questionData, parentElem, callback, false, sectionIndex, questionIndex);
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
      if (this.progressBar) {
        this.progressBar.setSection(sectionNumber);
      }
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
      if (this.progressBar) {
        this.progressBar.hide();
      }
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
  console.log(' to hjash', string);
  let hash = 0;
  if (string.length == 0) return hash;
  for (let i = 0; i < string.length; i++) {
    let char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  console.log(' hjash', hash);
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
    ${window.__isTestMode__ ? `<div id="start-elem" class="start-text">
      <div class="start-text-elem">English level test</div>
      <div class="start-text-elem">50 questions</div>
    </div>` : ''}
  
  <button class="button" id="start">Start</button>`;
  const container = document.querySelector('#quiz');
  container.insertAdjacentHTML('beforeend', html);
  const button = container.querySelector('#start');
  const elem = container.querySelector('#start-elem');
  button.addEventListener('click', () => {
    container.removeChild(button);
    if (elem) {
      container.removeChild(elem);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5pc2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJvZ3Jlc3NCYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9JUXVlc3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9NdWx0aVZhcmlhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vTXVsdGlwbGVUZXh0SW5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1NpbXBsZVRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL0lRdWVzdGlvbi9TaW5nbGVWYXJpYW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVlc3Rpb24vSVF1ZXN0aW9uL1RleHRJbkJsYW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9RdWVzdGlvbi9JUXVlc3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL2NoZWNrU3RyaW5nVmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1F1ZXN0aW9uL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUXVpekNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL191dGlscy9TdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9fdXRpbHMvdWlkLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiUHJvZ3Jlc3NCYXIiLCJjb25zdHJ1Y3RvciIsImNvbnRhaW5lciIsIm1heFNlY3Rpb25zIiwiZWxlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1haW5XaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImkiLCJpbm5lckVsZW0iLCJzZXRBdHRyaWJ1dGUiLCJzZXRTZWN0aW9uIiwic2VjdGlvbk51bWJlciIsImFsbEVsZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtU2VjdGlvbk51bWJlciIsImdldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImhpZGUiLCJkaXNwbGF5IiwiSVF1ZXN0aW9uIiwicXVlc3Rpb25EYXRhIiwicGFyZW50RWxlbSIsImNoZWNrQ2FsbGJhY2siLCJfdGhpcyIsInRlc3RNb2RlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2VjdGlvbkluZGV4IiwicXVlc3Rpb25JbmRleCIsIl9kZWZpbmVQcm9wZXJ0eSIsIm1haW5FbGVtZW50Iiwic2hvdWxkQ2FsbEJhY2siLCJjb25zb2xlIiwibG9nIiwiYW5zd2VyIiwiZ2V0QW5zd2VyIiwicmVzdWx0IiwiY2VydGFpbkNoZWNrIiwiY2hlY2tJbml0aWFsaXplZCIsImZpcnN0VGltZUNvcnJlY3QiLCJoaW50QnV0dG9uIiwicmVzdWx0Q29ycmVjdCIsInJlbmRlclJlc3VsdCIsImlzQ29ycmVjdCIsImVycm9yc0NvbnRhaW5lciIsInJpZ2h0QW5zd2VycyIsImh0bWwiLCJ2YWxpZGF0ZUVycm9yVGV4dCIsImhpbnRDb250YWluZXIiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlSGludHMiLCJzZXRUaW1lb3V0IiwiaW5wdXRzIiwiZSIsImNvZGUiLCJjaGVjayIsInNob3dIaW50cyIsImlkIiwic3RyaW5nVG9IYXNoIiwiaW5wdXQiLCJyZW5kZXJRdWVzdGlvbiIsInNlbGVjdGVkQW5zd2VyIiwiU3RvcmFnZSIsInJlYWQiLCJxdWVzdGlvblRlbXBsYXRlIiwiY2hlY2tTaWduQ29udGFpbmVyIiwiYmFzZUFkZExpc3RlbmVycyIsIk11bHRpVmFyaWFudHNRdWVzdGlvbiIsImluY2x1ZGVzIiwidGFyZ2V0Iiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoYW5nZUxpc3RlbmVyIiwidXNlckFuc3dlcnMiLCJjaGVja011bHRpIiwic2VsZWN0ZWQiLCJBcnJheSIsImZyb20iLCJxdWVzdGlvblRleHQiLCJtYXAiLCJ2YWx1ZSIsImFkZENlcnRhaW5MaXN0ZW5lcnMiLCJNdWx0aXBsZVRleHRJbkJsYW5rUXVlc3Rpb25zIiwidXNlckFuc3dlciIsImNvcnJlY3QiLCJjb3JyZWN0SW5kZXhlcyIsInZhbGlkYXRlTXVsdGlCbGFua3MiLCJlbCIsInVzZXJWYWx1ZSIsIlNpbXBsZVRleHRRdWVzdGlvbiIsInZhbGlkYXRlU2ltcGxlVGV4dCIsIlNpbmdsZVZhcmlhbnRRdWVzdGlvbiIsIndyaXRlIiwiY29tcGFyZVR3byIsIlRleHRJbkJsYW5rUXVlc3Rpb24iLCJ2YWxpZGF0ZVRleHRJbkJsYW5rIiwiVGV4dEJlZm9yZVF1ZXN0aW9uIiwidGV4dCIsInNwbGl0UmVnRXhwIiwiUmVnRXhwIiwic3BsaXR0ZWRUZXh0Iiwic3BsaXQiLCJzZWN0aW9uSGVhZGVyVGV4dCIsInVpZCIsImNyZWF0ZVRleHRJbkJsYW5rIiwiY2FsbGJhY2siLCJtYXRjaCIsIk11bHRpVGV4dEluQmxhbmtRdWVzdGlvbiIsImNyZWF0ZVF1ZXN0aW9uIiwicXVlc3Rpb25UeXBlIiwiRXJyb3IiLCJxdWVzVmFyaWFudHMiLCJ2YXJpYW50cyIsImV4Y2x1ZGVEYXRhIiwiU2hvcnRlbmluZ0RpY3Rpb25hcnkiLCJmaW5kU2hvcnRlbmluZ1JlZ0V4cCIsInJpZ2h0QW5zd2VyIiwid29ya2VkVXNlckFuc3dlciIsInByZXBhcmVTdHJpbmciLCJ3b3JrZWRSaWdodEFuc3dlciIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsInJlbW92ZVBvc3NpYmlsaXRpZXMiLCJzb21lIiwiZXhjbHVkZSIsInVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyIsImZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXMiLCJjb21wYXJlRWFjaFRvRWFjaCIsIndvcmtlZFVzZXJBbnN3ZXJzIiwic29ydCIsImlzRXF1YWwiLCJmaW5kTWF4UHJldmlvdXMiLCJvYmoiLCJjdXJyZW50S2V5IiwibWF4Iiwia2V5IiwiTnVtYmVyIiwidGV4dFZhcmlhbnRzIiwic2hvcnRTeWJtb2xzIiwicmVnIiwid29yZHMiLCJpbmRleFRvUHVzaEluTWFpbiIsInByZXZpb3VzVmFyaWFudCIsIm5ld1ZhcmlhbnQiLCJwdXNoIiwidmFyaWFudCIsImpvaW4iLCJ2YWxpZEluZGV4ZXMiLCJpc0FsbFZhbGlkIiwiZ2xvYmFsVkEiLCJpc09uZVRpbWVWYWxpZCIsImoiLCJ1bmlxIiwiZmlsdGVyIiwidiIsImEiLCJpbmRleE9mIiwidW5pcXVlVXNlckFuc3dlcnMiLCJjYWxjdWxhdGVXaWR0aCIsImFuc3dlcnMiLCJtYXhMZW5ndGgiLCJhbHJlYWR5V3JpdHRlbkFuc3dlciIsInNwbGl0dGVkIiwiYW5zd2VyVGVtcGxhdGVJbkJsYW5rIiwiYW5zd2VyVGVtcGxhdGUiLCJpbmRleCIsIlF1aXpDb250cm9sbGVyIiwic2VjdGlvbnMiLCJwYXJlbnRFbGVtZW50IiwiY3VycmVudFNlY3Rpb24iLCJjb252ZXJ0ZWRTZWN0aW9ucyIsInJlbmRlclNlY3Rpb24iLCJudW1iZXJUZXh0Q29udGFpbmVyIiwiaW5uZXJUZXh0IiwicHJvZ3Jlc3NCYXIiLCJ0b3AiLCJzY3JvbGxUbyIsImxlZnQiLCJiZWhhdmlvciIsInByZXZCdXR0b24iLCJtYXhTZWN0aW9uTnVtYmVyIiwiaXNMYXN0U2VjdGlvbiIsIm5leHRCdXR0b24iLCJoaWRlU2VjdGlvbiIsImNvbXBsZXRlZCIsImluaXRTZWN0aW9uIiwicmVuZGVyTmV4dFNlY3Rpb25CdXR0b24iLCJjaGVja0J1dHRvbiIsImVuZFF1aXpCdXR0b24iLCJjaGVja0NvcnJlY3QiLCJjaGFuZ2VTZWN0aW9uIiwicXVlc3Rpb25zQ29udGFpbmVyIiwicmVuZGVyRW5kT2ZUZXN0IiwicmVuZGVyQ29uZ3JhdHMiLCJzZWN0aW9uIiwiYWxsUXVlc3Rpb25zIiwiY29udmVydGVkUXVlc3Rpb25zIiwiYWxsUXVlc3Rpb25zTGVuZ3RoIiwiY29ycmVjdENvdW50IiwicXVlc3QiLCJyZXN1bHRMZXZlbCIsIm9sZExhc3RNZXNzYWdlIiwicmVtb3ZlQ2hpbGQiLCJmaXJzdFRpbWVDb3JyZWN0Q291bnQiLCJwZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwicmVuZGVyTWFpbkNvbnRyb2xzIiwiU2VjdGlvbiIsInNlY3Rpb25EYXRhIiwiYWxsUmlnaHRDYWxsQmFjayIsIm51bWJlciIsInF1ZXMiLCJmYWxzZVZhbHVlcyIsImZpbmRBbGxGYWxzZSIsImlzQ2hhbmdlZFF1ZXN0aW9uQ29ycmVjdCIsInJlbmRlcmVkIiwic2VjdGlvbkNvbnRhaW5lciIsImhlYWRlciIsInF1ZXN0aW9ucyIsInF1ZXN0aW9uIiwicXVlc3Rpb25DYWxsYmFjayIsInJlbmRlclF1aXoiLCJTdG9yYWdlTWFuYWdlciIsInN0b3JhZ2VLZXkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic3RvcmFnZURhdGEiLCJwYXJzZSIsInJlYWRBbGwiLCJtYWtlaWQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNoYXJBdCIsImZsb29yIiwicmFuZG9tIiwic3RyaW5nIiwiaGFzaCIsImNoYXIiLCJjaGFyQ29kZUF0IiwiYXBwZW5kU3R5bGVzIiwic2NzcyIsInJlcXVpcmUiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZUVsZW0iLCJpbm5lckhUTUwiLCJzY3JpcHQiLCJzcmMiLCJfX2lzVGVzdE1vZGVfXyIsImJ1dHRvbiIsInRlc3REYXRhIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsb0JBQW9CLG1CQUFPLENBQUMsa0ZBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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TUFBTXhELElBQUksR0FBR0YsU0FBUyxDQUFDMEQsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUVuRDhNLE1BQU0sQ0FBQzdNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3JDM0QsU0FBUyxDQUFDb04sV0FBVyxDQUFDb0QsTUFBTSxDQUFDO0lBQzdCLElBQUd0USxJQUFJLEVBQUM7TUFDTkYsU0FBUyxDQUFDb04sV0FBVyxDQUFDbE4sSUFBSSxDQUFDO0lBQzdCO0lBR0EsSUFBSThLLHVEQUFjLENBQUNoRyxNQUFNLENBQUN5TCxRQUFRLEVBQUV6USxTQUFTLEVBQUVnRixNQUFNLENBQUN1TCxjQUFjLElBQUksS0FBSyxDQUFDO0VBQ2hGLENBQUMsQ0FBQztBQUlKLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ2pGRiw2bUwiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoXCIuL3RvUHJvcGVydHlLZXkuanNcIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdG9QcmltaXRpdmUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gdG9Qcm9wZXJ0eUtleSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvKipcbiAqIExvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcy5mb3VuZGF0aW9uLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBTeW1ib2wgPSByb290LlN5bWJvbCxcbiAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2UsXG4gICAgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlXG4gKiBlcXVpdmFsZW50LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBzdXBwb3J0cyBjb21wYXJpbmcgYXJyYXlzLCBhcnJheSBidWZmZXJzLCBib29sZWFucyxcbiAqIGRhdGUgb2JqZWN0cywgZXJyb3Igb2JqZWN0cywgbWFwcywgbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcyxcbiAqIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZCBhcnJheXMuIGBPYmplY3RgIG9iamVjdHMgYXJlIGNvbXBhcmVkXG4gKiBieSB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRnVuY3Rpb25zIGFuZCBET01cbiAqIG5vZGVzIGFyZSBjb21wYXJlZCBieSBzdHJpY3QgZXF1YWxpdHksIGkuZS4gYD09PWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uaXNFcXVhbChvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBvYmplY3QgPT09IG90aGVyO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbDtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhcntcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgbWF4U2VjdGlvbnMpe1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5tYXhTZWN0aW9ucyA9IG1heFNlY3Rpb25zO1xuXG4gICAgICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsZW0uY2xhc3NOYW1lID0gJ3Byb2dyZXNzRWxlbUJHJztcbiAgICAgICAgdGhpcy5tYWluV2lkdGggPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgdGhpcy5lbGVtLnN0eWxlLndpZHRoID0gYCR7dGhpcy5tYWluV2lkdGh9cHhgXG5cbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtKVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8bWF4U2VjdGlvbnM7IGkrKyl7XG4gICAgICAgICAgICBsZXQgaW5uZXJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbm5lckVsZW0uY2xhc3NOYW1lID0gJ3Byb2dyZXNzRWxlbSc7XG4gICAgICAgICAgICBpbm5lckVsZW0uc2V0QXR0cmlidXRlKCdzZWN0aW9uTnVtYmVyJywgaSlcbiAgICBcbiAgICAgICAgICAgIHRoaXMuZWxlbS5hcHBlbmRDaGlsZChpbm5lckVsZW0pXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFNlY3Rpb24oc2VjdGlvbk51bWJlcil7XG5cbiAgICAgICAgdGhpcy5tYWluV2lkdGggPSB0aGlzLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICB0aGlzLmVsZW0uc3R5bGUud2lkdGggPSBgJHt0aGlzLm1haW5XaWR0aH1weGBcblxuICAgICAgICBsZXQgd2lkdGggPSAodGhpcy5tYWluV2lkdGggLSAoKHRoaXMubWF4U2VjdGlvbnMpKiA1KSkgIC8gdGhpcy5tYXhTZWN0aW9ucztcbiAgICAgICAgbGV0IGFsbEVsZW1zID0gdGhpcy5lbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzc0VsZW0nKVxuICAgICAgICBhbGxFbGVtcy5mb3JFYWNoKGVsZW0gPT57XG4gICAgICAgICAgICBsZXQgZWxlbVNlY3Rpb25OdW1iZXIgPSBlbGVtLmdldEF0dHJpYnV0ZSgnc2VjdGlvbk51bWJlcicpXG4gICAgICAgICAgICBpZihlbGVtU2VjdGlvbk51bWJlciA8IHNlY3Rpb25OdW1iZXIpe1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGBcbiAgICAgICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2dyZXNzRWxlbUxhc3QnKVxuICAgICAgICAgICAgfWVsc2UgaWYgKGVsZW1TZWN0aW9uTnVtYmVyID09ICBzZWN0aW9uTnVtYmVyKXtcbiAgICAgICAgICAgICAgICBlbGVtLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgXG4gICAgICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzc0VsZW1MYXN0JylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBgMHB4YFxuICAgICAgICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgncHJvZ3Jlc3NFbGVtTGFzdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGlkZSgpe1xuICAgICAgICB0aGlzLmVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi4vLi4vX3V0aWxzL1N0b3JhZ2UnO1xuaW1wb3J0IHVpZCwgeyBzdHJpbmdUb0hhc2ggfSBmcm9tICcuLi8uLi9fdXRpbHMvdWlkJztcbmltcG9ydCB7IHZhbGlkYXRlRXJyb3JUZXh0IH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVF1ZXN0aW9uIHtcbiAgY29uc3RydWN0b3IocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjaGVja0NhbGxiYWNrLCB0ZXN0TW9kZSA9IGZhbHNlLCBzZWN0aW9uSW5kZXgsIHF1ZXN0aW9uSW5kZXgpIHtcbiAgICB0aGlzLnF1ZXN0aW9uRGF0YSA9IHF1ZXN0aW9uRGF0YTtcbiAgICB0aGlzLnBhcmVudEVsZW0gPSBwYXJlbnRFbGVtO1xuICAgIHRoaXMuaWQgPSBgaWQtJHtzdHJpbmdUb0hhc2goYCR7c2VjdGlvbkluZGV4fS0ke3F1ZXN0aW9uSW5kZXh9YCl9YDtcbiAgICB0aGlzLnNlY3Rpb25JbmRleCA9IHNlY3Rpb25JbmRleDtcbiAgICB0aGlzLnF1ZXN0aW9uSW5kZXggPSBxdWVzdGlvbkluZGV4O1xuICAgIHRoaXMucmVzdWx0Q29ycmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuY2hlY2tJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHRoaXMuZmlyc3RUaW1lQ29ycmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuaW5wdXQgPSBudWxsO1xuICAgIHRoaXMuY2hlY2tDYWxsYmFjayA9IGNoZWNrQ2FsbGJhY2s7XG4gICAgdGhpcy50ZXN0TW9kZSA9IHRlc3RNb2RlXG4gIH1cblxuICBoaWRlID0gKCkgPT4ge1xuICAgIHRoaXMubWFpbkVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgY2hlY2sgPSAoc2hvdWxkQ2FsbEJhY2sgPSB0cnVlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NhbGwgY2hlY2snKVxuICAgIGNvbnN0IGFuc3dlciA9IHRoaXMuZ2V0QW5zd2VyKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jZXJ0YWluQ2hlY2soYW5zd2VyKTtcbiAgICBpZiAoIXRoaXMuY2hlY2tJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5jaGVja0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyc3RUaW1lQ29ycmVjdCA9IHJlc3VsdDtcbiAgICAgIHRoaXMuaGludEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gICAgdGhpcy5yZXN1bHRDb3JyZWN0ID0gcmVzdWx0O1xuICAgIHRoaXMucmVuZGVyUmVzdWx0KHJlc3VsdCk7XG4gICAgaWYgKHNob3VsZENhbGxCYWNrKSB7XG4gICAgICB0aGlzLmNoZWNrQ2FsbGJhY2socmVzdWx0KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJSZXN1bHQgPSAoaXNDb3JyZWN0KSA9PiB7XG4gICAgaWYgKGlzQ29ycmVjdCkge1xuXG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICB9XG5cbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uKCkge1xuXG4gICAgbGV0IHNlbGVjdGVkQW5zd2VyO1xuICAgIGlmKHRoaXMudGVzdE1vZGUpe1xuICAgICAgc2VsZWN0ZWRBbnN3ZXIgPSBTdG9yYWdlLnJlYWQodGhpcy5zZWN0aW9uSW5kZXgsIHRoaXMucXVlc3Rpb25JbmRleCk7XG4gICAgfVxuXG5cbiAgICBjb25zdCBodG1sID0gdGhpcy5xdWVzdGlvblRlbXBsYXRlKHRoaXMucXVlc3Rpb25EYXRhLCB0aGlzLmlkLCBzZWxlY3RlZEFuc3dlcik7XG4gICAgdGhpcy5wYXJlbnRFbGVtLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgY29uc3QgbWFpbkVsZW1lbnQgPSB0aGlzLnBhcmVudEVsZW0ucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKTtcbiAgICB0aGlzLm1haW5FbGVtZW50ID0gbWFpbkVsZW1lbnQ7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICB0aGlzLmhpbnRCdXR0b24gPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaW50LXNpZ24nKTtcbiAgICB0aGlzLmhpbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLmhpbnRDb250YWluZXIgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaW50LWNvbnRhaW5lcicpO1xuICAgIHRoaXMuY2hlY2tTaWduQ29udGFpbmVyID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2stc2lnbicpO1xuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICB0aGlzLmhpbnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuY2hlY2tTaWduQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgIHRoaXMuYmFzZUFkZExpc3RlbmVycygpO1xuICB9XG5cbiAgc2hvd0hpbnRzID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKCF0aGlzLmVycm9yc0NvbnRhaW5lcikge1xuICAgICAgY29uc3QgeyByaWdodEFuc3dlcnMgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgICAgY29uc3QgaHRtbCA9IHZhbGlkYXRlRXJyb3JUZXh0KHJpZ2h0QW5zd2Vycyk7XG4gICAgICB0aGlzLmhpbnRDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgICAgIHRoaXMuZXJyb3JzQ29udGFpbmVyID0gdGhpcy5oaW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5oaW50cy1hbnN3ZXJzLWNvbnRhaW5lcicpO1xuICAgIH1cbiAgICB0aGlzLmhpbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy5oaW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbG9zZUhpbnRzKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xvc2VIaW50cygpO1xuICAgIH0sIDI1MDApO1xuICB9XG5cbiAgY2xvc2VIaW50cyA9ICgpID0+IHtcbiAgICB0aGlzLmhpbnRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGJhc2VBZGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudGVzdE1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRzID0gdGhpcy5tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGlmIChpbnB1dHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7IGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikgeyB0aGlzLmNoZWNrKCk7IH0gfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdhZGRlZCcsIHRoaXMucXVlc3Rpb25EYXRhLCB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1zaWduJykpO1xuICAgIHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLXNpZ24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hlY2spO1xuICAgIHRoaXMuaGludEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2hvd0hpbnRzKTtcbiAgfVxuXG59IiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG5pbXBvcnQgeyBxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dCB9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZVNpbXBsZVRleHQsIHZhbGlkYXRlVGV4dEluQmxhbmssIGNoZWNrTXVsdGkgfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aVZhcmlhbnRzUXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb24ge1xuXG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgIHJldHVybiBxdWVzdGlvblRlbXBsYXRlKC4uLmFyZ3MpO1xuICB9XG5cbiAgZ2V0QW5zd2VyKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkID0gQXJyYXkuZnJvbSh0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9XCIke3RoaXMucXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIl06Y2hlY2tlZGApKTtcbiAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQubWFwKChlbGVtKSA9PiBlbGVtLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY2hhbmdlTGlzdGVuZXIgPSAoZSkgPT4ge1xuICAgIGlmICghdGhpcy5pbnB1dHMuaW5jbHVkZXMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNoZWNrKCk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGFkZENlcnRhaW5MaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gIH1cblxuICBoaWRlID0gKCkgPT4ge1xuICAgIHN1cGVyLmhpZGUoKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgfVxuXG4gIHJlbmRlclF1ZXN0aW9uKCkge1xuICAgIHN1cGVyLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgdGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgdGhpcy5hZGRDZXJ0YWluTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjZXJ0YWluQ2hlY2sgPSAodXNlckFuc3dlcnMpID0+IHtcbiAgICBjb25zdCB7IHJpZ2h0QW5zd2VycyB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgcmV0dXJuIGNoZWNrTXVsdGkodXNlckFuc3dlcnMsIHJpZ2h0QW5zd2Vycyk7XG4gIH1cblxufSIsImltcG9ydCB7cXVlc3Rpb25UZW1wbGF0ZSwgdmFsaWRhdGVFcnJvclRleHR9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQge3ZhbGlkYXRlTXVsdGlCbGFua3N9IGZyb20gJy4uL2NoZWNrU3RyaW5nVmFsaWQnO1xuaW1wb3J0IElRdWVzdGlvbiBmcm9tICcuL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxlVGV4dEluQmxhbmtRdWVzdGlvbnMgZXh0ZW5kcyBJUXVlc3Rpb257XG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAgKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpe1xuICAgIHJldHVybiB0aGlzLmlucHV0cy5tYXAoKGlucHV0KT0+IGlucHV0LnZhbHVlKTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VyKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMsIHF1ZXN0aW9uVGV4dCB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgY29uc3Qge2NvcnJlY3QsIGNvcnJlY3RJbmRleGVzfSA9IHZhbGlkYXRlTXVsdGlCbGFua3ModXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQpO1xuICAgIHRoaXMuY29ycmVjdEluZGV4ZXMgPSBjb3JyZWN0SW5kZXhlcztcbiAgICByZXR1cm4gY29ycmVjdDtcbiAgfVxuXG4gIHJlbmRlclJlc3VsdCA9IChpc0NvcnJlY3QpID0+e1xuICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5pbnB1dHMubGVuZ3RoOyBpKyspe1xuICAgICAgaWYodGhpcy5jb3JyZWN0SW5kZXhlcy5pbmNsdWRlcyhpKSl7XG4gICAgICAgIHRoaXMuaW5wdXRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2luY29ycmVjdCcpO1xuICAgICAgICB0aGlzLmlucHV0c1tpXS5jbGFzc0xpc3QuYWRkKCdjb3JyZWN0Jyk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5pbnB1dHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgICB0aGlzLmlucHV0c1tpXS5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoaXNDb3JyZWN0KXtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW5jb3JyZWN0Jyk7XG4gICAgICB0aGlzLm1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvcnJlY3QnKTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29ycmVjdCcpO1xuICAgICAgdGhpcy5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbmNvcnJlY3QnKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VMaXN0ZW5lciA9IChlKT0+e1xuICAgIGlmKCF0aGlzLmlucHV0cy5pbmNsdWRlcyhlLnRhcmdldCkpe1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBhZGRDZXJ0YWluTGlzdGVuZXJzID0gKCkgPT57XG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoaW5wdXQpPT57XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSk9PntcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PntcbiAgICBzdXBlci5oaWRlKCk7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICByZW5kZXJRdWVzdGlvbigpe1xuICAgIHN1cGVyLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgdGhpcy5pbnB1dHMgPSBBcnJheS5mcm9tKHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgdGhpcy5hZGRDZXJ0YWluTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyICA9IChlbCkgPT57XG4gICAgY29uc3QgdXNlclZhbHVlID0gZWwudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMudXNlclZhbHVlID0gdXNlclZhbHVlO1xuICAgIHRoaXMuY2hlY2sodXNlclZhbHVlKTtcbiAgfVxuXG59IiwiaW1wb3J0IHtxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7dmFsaWRhdGVTaW1wbGVUZXh0LCB2YWxpZGF0ZVRleHRJbkJsYW5rfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVUZXh0UXVlc3Rpb24gZXh0ZW5kcyBJUXVlc3Rpb257XG4gIC8vIGNvbnN0cnVjdG9yKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSl7XG4gIC8vICAgc3VwZXIoKVxuICAvLyB9XG4gIHF1ZXN0aW9uVGVtcGxhdGUgPSAgKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpe1xuICAgIHJldHVybiB0aGlzLmlucHV0LnZhbHVlO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXIpID0+eyAgXG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMgfSA9IHRoaXMucXVlc3Rpb25EYXRhO1xuICAgIHJldHVybiB2YWxpZGF0ZVNpbXBsZVRleHQodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgID0gKGVsKSA9PntcblxuICAgIGNvbnN0IHVzZXJWYWx1ZSA9IGVsLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnVzZXJWYWx1ZSA9IHVzZXJWYWx1ZTtcbiAgICB0aGlzLmNoZWNrKHVzZXJWYWx1ZSk7XG4gIH1cblxufSAiLCJpbXBvcnQgeyBxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dCB9IGZyb20gJy4uL3RlbXBsYXRlcyc7XG5pbXBvcnQgeyB2YWxpZGF0ZVNpbXBsZVRleHQsIHZhbGlkYXRlVGV4dEluQmxhbmssIGNvbXBhcmVUd28gfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4uLy4uL191dGlscy9TdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlVmFyaWFudFF1ZXN0aW9uIGV4dGVuZHMgSVF1ZXN0aW9uIHtcblxuICBxdWVzdGlvblRlbXBsYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICByZXR1cm4gcXVlc3Rpb25UZW1wbGF0ZSguLi5hcmdzKTtcbiAgfVxuXG4gIGdldEFuc3dlcigpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMubWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cIiR7dGhpcy5xdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiXTpjaGVja2VkYCk7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWQudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjaGFuZ2VMaXN0ZW5lciA9IChlKSA9PiB7XG5cbiAgICBpZiAodGhpcy50ZXN0TW9kZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCIke3RoaXMucXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH1cIl06Y2hlY2tlZGApO1xuICAgICAgU3RvcmFnZS53cml0ZSh0aGlzLnNlY3Rpb25JbmRleCwgdGhpcy5xdWVzdGlvbkluZGV4LCBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogdW5kZWZpbmVkKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXRoaXMuaW5wdXRzLmluY2x1ZGVzKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCB0aGlzLmNoYW5nZUxpc3RlbmVyKTtcbiAgICB9XG4gIH1cblxuICBhZGRDZXJ0YWluTGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMuaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgaGlkZSA9ICgpID0+IHtcbiAgICBzdXBlci5oaWRlKCk7XG4gICAgd2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTGlzdGVuZXIpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5jaGFuZ2VMaXN0ZW5lcik7XG4gIH1cblxuICByZW5kZXJRdWVzdGlvbigpIHtcbiAgICBzdXBlci5yZW5kZXJRdWVzdGlvbigpO1xuICAgIHRoaXMuaW5wdXRzID0gQXJyYXkuZnJvbSh0aGlzLm1haW5FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgIHRoaXMuYWRkQ2VydGFpbkxpc3RlbmVycygpO1xuICB9XG5cbiAgY2VydGFpbkNoZWNrID0gKHVzZXJBbnN3ZXIpID0+IHtcbiAgICBjb25zdCB7IHJpZ2h0QW5zd2VycyB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgcmV0dXJuIGNvbXBhcmVUd28odXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzWzBdKTtcbiAgfVxuXG59IiwiaW1wb3J0IHtxdWVzdGlvblRlbXBsYXRlLCB2YWxpZGF0ZUVycm9yVGV4dH0gZnJvbSAnLi4vdGVtcGxhdGVzJztcbmltcG9ydCB7dmFsaWRhdGVTaW1wbGVUZXh0LCB2YWxpZGF0ZVRleHRJbkJsYW5rfSBmcm9tICcuLi9jaGVja1N0cmluZ1ZhbGlkJztcbmltcG9ydCBJUXVlc3Rpb24gZnJvbSAnLi9JUXVlc3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0SW5CbGFua1F1ZXN0aW9uIGV4dGVuZHMgSVF1ZXN0aW9ue1xuICBxdWVzdGlvblRlbXBsYXRlID0gICguLi5hcmdzKSA9PiB7XG4gICAgcmV0dXJuIHF1ZXN0aW9uVGVtcGxhdGUoLi4uYXJncyk7XG4gIH1cblxuICBnZXRBbnN3ZXIoKXtcbiAgICByZXR1cm4gdGhpcy5pbnB1dC52YWx1ZTtcbiAgfVxuXG4gIGNlcnRhaW5DaGVjayA9ICh1c2VyQW5zd2VyKSA9PiB7XG4gICAgY29uc3QgeyByaWdodEFuc3dlcnMsIHF1ZXN0aW9uVGV4dCB9ID0gdGhpcy5xdWVzdGlvbkRhdGE7XG4gICAgcmV0dXJuIHZhbGlkYXRlVGV4dEluQmxhbmsodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzLCBxdWVzdGlvblRleHQpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciAgPSAoZWwpID0+e1xuICAgIGNvbnN0IHVzZXJWYWx1ZSA9IGVsLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnVzZXJWYWx1ZSA9IHVzZXJWYWx1ZTtcbiAgICB0aGlzLmNoZWNrKHVzZXJWYWx1ZSk7XG4gIH1cblxufSIsImltcG9ydCBTaW1wbGVUZXh0UXVlc3Rpb24gZnJvbSAnLi9TaW1wbGVUZXh0JztcbmltcG9ydCBUZXh0SW5CbGFua1F1ZXN0aW9uIGZyb20gJy4vVGV4dEluQmxhbmsnO1xuaW1wb3J0IE11bHRpVGV4dEluQmxhbmtRdWVzdGlvbiBmcm9tICcuL011bHRpcGxlVGV4dEluQmxhbmsnO1xuaW1wb3J0IFNpbmdsZVZhcmlhbnRRdWVzdGlvbiBmcm9tICcuL1NpbmdsZVZhcmlhbnRzJztcbmltcG9ydCBNdWx0aVZhcmlhbnRzUXVlc3Rpb24gZnJvbSAnLi9NdWx0aVZhcmlhbnRzJztcbmltcG9ydCB1aWQgZnJvbSAnLi4vLi4vX3V0aWxzL3VpZCc7XG5cblxuXG5leHBvcnQgY2xhc3MgVGV4dEJlZm9yZVF1ZXN0aW9ue1xuICBjb25zdHJ1Y3Rvcih0ZXh0LCBwYXJlbnRFbGVtKXtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMucGFyZW50RWxlbSA9IHBhcmVudEVsZW07XG4gICAgdGhpcy5yZXN1bHRDb3JyZWN0ID0gdHJ1ZTtcbiAgICB0aGlzLmZpcnN0VGltZUNvcnJlY3QgPSB0cnVlO1xuICAgIHRoaXMudWlkID0gdWlkKCk7XG4gIH1cblxuICBoaWRlID0gKCkgPT57XG4gICAgdGhpcy5tYWluRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBjaGVjayA9ICgpID0+e1xuICAgIFxuICB9XG5cbiAgcmVuZGVyUXVlc3Rpb24gPSAoKSA9PntcbiAgICBjb25zdCBzcGxpdFJlZ0V4cCA9IG5ldyBSZWdFeHAoLyhNaXNzaW9uIFswLTkuXSspIC8pO1xuICAgIGxldCBzcGxpdHRlZFRleHQgPSB0aGlzLnRleHQuc3BsaXQoc3BsaXRSZWdFeHApO1xuICAgIGlmKHNwbGl0dGVkVGV4dC5sZW5ndGggIT09IDMpe1xuICAgICAgc3BsaXR0ZWRUZXh0ID0gdGhpcy50ZXh0O1xuICAgIH1lbHNle1xuICAgICAgc3BsaXR0ZWRUZXh0ID0gYCR7c3BsaXR0ZWRUZXh0WzBdfSR7c3BsaXR0ZWRUZXh0WzFdfSA8L2JyPiA8c3BhbiBjbGFzcz1cInRleHQtcXVlc3Rpb24taXRhbGljXCI+JHtzcGxpdHRlZFRleHRbMl19PC9zcGFuPmA7XG4gICAgfVxuICAgIGNvbnN0IHNlY3Rpb25IZWFkZXJUZXh0ID0gYDxkaXYgY2xhc3M9XCJxdWVzdGlvbiBzZWN0aW9uLWhlYWRlclwiIGlkPVwiJHt0aGlzLnVpZH1cIj4ke3NwbGl0dGVkVGV4dH08L2Rpdj5gO1xuICAgIHRoaXMucGFyZW50RWxlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNlY3Rpb25IZWFkZXJUZXh0KTtcbiAgICB0aGlzLm1haW5FbGVtZW50ID0gdGhpcy5wYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMudWlkfWApO1xuICB9XG59XG5cblxuY29uc3QgY3JlYXRlVGV4dEluQmxhbmsgPSAocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgc2VjdGlvbkluZGV4LCBxdWVzdGlvbkluZGV4KSA9PntcbiAgaWYocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dC5tYXRjaCgvXysvZykubGVuZ3RoID4gMSl7XG4gICAgcmV0dXJuIG5ldyBNdWx0aVRleHRJbkJsYW5rUXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgZmFsc2UsIHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCk7XG4gIH1lbHNlIHtcbiAgICByZXR1cm4gbmV3IFRleHRJbkJsYW5rUXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgZmFsc2UsIHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVF1ZXN0aW9uID0gKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2ssIHRlc3RNb2RlPWZhbHNlLCBzZWN0aW9uSW5kZXgsIHF1ZXN0aW9uSW5kZXgpID0+e1xuICBpZih0ZXN0TW9kZSAmJiBxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlICE9PSAndmFyaWFudHMtc2luZ2xlJyl7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB0ZXN0IG1vZGUgaXMgZW5hYmxlZCwgYnV0IHF1ZXN0aW9uJyB0eXBlIGlzICR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSB9YClcbiAgfVxuICBjb25zb2xlLmxvZygncWllcycsIHF1ZXN0aW9uRGF0YSk7XG4gIHN3aXRjaChxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlKXtcbiAgICBjYXNlICdzaW1wbGUtdGV4dCc6XG4gICAgICByZXR1cm4gbmV3IFNpbXBsZVRleHRRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrLCBmYWxzZSwgc2VjdGlvbkluZGV4LCBxdWVzdGlvbkluZGV4KTtcbiAgICBjYXNlICd0ZXh0LWluLWJsYW5rJzpcbiAgICAgIHJldHVybiBjcmVhdGVUZXh0SW5CbGFuayhxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrLCBzZWN0aW9uSW5kZXgsIHF1ZXN0aW9uSW5kZXgpXG4gICAgY2FzZSAndmFyaWFudHMtbXVsdGknOlxuICAgICAgcmV0dXJuIG5ldyBNdWx0aVZhcmlhbnRzUXVlc3Rpb24ocXVlc3Rpb25EYXRhLCBwYXJlbnRFbGVtLCBjYWxsYmFjaywgZmFsc2UsIHNlY3Rpb25JbmRleCwgcXVlc3Rpb25JbmRleCk7XG4gICAgY2FzZSAndmFyaWFudHMtc2luZ2xlJzpcbiAgICAgIGxldCBxdWVzVmFyaWFudHM7XG4gICAgICBpZihxdWVzdGlvbkRhdGFbJ3ZhcmlhbnRzXFxyJ10gKXtcbiAgICAgICAgcXVlc1ZhcmlhbnRzID0gcXVlc3Rpb25EYXRhWyd2YXJpYW50c1xcciddXG4gICAgICB9ZWxzZSBpZihxdWVzdGlvbkRhdGFbJ3ZhcmlhbnRzJ10pe1xuICAgICAgICBxdWVzVmFyaWFudHMgPSBxdWVzdGlvbkRhdGFbJ3ZhcmlhbnRzJ107XG4gICAgICB9XG5cbiAgICAgIGlmKHR5cGVvZiBxdWVzVmFyaWFudHMgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgcXVlc3Rpb25EYXRhLnZhcmlhbnRzID0gcXVlc1ZhcmlhbnRzLnNwbGl0KCd8fCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFNpbmdsZVZhcmlhbnRRdWVzdGlvbihxdWVzdGlvbkRhdGEsIHBhcmVudEVsZW0sIGNhbGxiYWNrLCB0ZXN0TW9kZSwgc2VjdGlvbkluZGV4LCBxdWVzdGlvbkluZGV4KTtcbiAgICAgIC8vcmV0dXJuIG5ldyBUZXh0SW5CbGFua1F1ZXN0aW9uKHF1ZXN0aW9uRGF0YSwgcGFyZW50RWxlbSwgY2FsbGJhY2spO1xuICB9XG59IiwiaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG5jb25zdCBleGNsdWRlRGF0YSA9IFtcbiAgXCJtYXJpYSdyZVwiLFxuICAnbWFyaWFcInJlJyxcbiAgJ21hcmlhYHJlJyxcbl07XG5cbmNvbnN0IFNob3J0ZW5pbmdEaWN0aW9uYXJ5ID0ge1xuICAnY2FuIG5vdCc6IGBjYW4ndGAsXG4gICdjYW5ub3QnOiBgY2FuJ3RgLFxuICAnd2lsbCBub3QnOiBgd29uJ3RgLFxuICAnIGlzJzogYCdzYCxcbiAgJ1xcJ3MnOiBgJ3NgLFxuICAnIGhhdmUnOiBgJ3ZlYCxcbiAgJyBoYXMnOiBgJ3NgLFxuICAnIHdvdWxkJzogYCdkYCxcbiAgJyBoYWQnOiBgJ2RgLFxuICAnIGFyZSc6IGAncmVgLFxuICAnIHdpbGwnOiBgJ2xsYCxcbiAgJyBhbSc6IGAnbWAsXG4gICdpcyBub3QnOiBgaXNuJ3RgLFxuICAnYXJlIG5vdCc6IGBhcmVuJ3RgLFxuICAnd2FzIG5vdCc6IGB3YXNuJ3RgLFxuICAnd2VyZSBub3QnOiBgd2VyZW4ndGAsXG4gICdoYXMgbm90JzogYGhhc24ndGAsXG4gICdoYXZlIG5vdCc6IGBoYXZlbid0YCxcblxuICAnaGFkIG5vdCc6IGBoYWRuJ3RgLFxuICAnZG9lcyBub3QnOiBgZG9lc24ndGAsXG4gICdkbyBub3QnOiBgZG9uJ3RgLFxuICAnZGlkIG5vdCc6IGBkaWRuJ3RgLFxuICAnY291bGQgbm90JzogYGNvdWxkbid0YCxcbiAgJ3dvdWxkIG5vdCc6IGB3b3VsZG4ndGAsXG4gICdtdXN0IG5vdCc6IGBtdXN0bid0YCxcbiAgJ25lZWQgbm90JzogYG5lZWRuJ3RgLFxuICAnc2hvdWxkIG5vdCc6IGBzaG91bGRuJ3RgLFxuICAnbWlnaHQgbm90JzogYG1pZ2h0bid0YCxcbiAgJ2RhcmUgbm90JzogYGRhcmVuJ3RgLFxufVxuXG5cbnZhciBmaW5kU2hvcnRlbmluZ1JlZ0V4cCA9IG5ldyBSZWdFeHAoL1xcdysoPz0nXFx3KykvZyk7XG5cblxuXG5leHBvcnQgY29uc3QgY29tcGFyZVR3byA9ICh1c2VyQW5zd2VyLCByaWdodEFuc3dlcikgPT4ge1xuICBpZiAoIXVzZXJBbnN3ZXIpIHtcbiAgICB1c2VyQW5zd2VyID0gJyc7XG4gIH1cbiAgbGV0IHdvcmtlZFVzZXJBbnN3ZXIgPSBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpO1xuICBsZXQgd29ya2VkUmlnaHRBbnN3ZXIgPSBwcmVwYXJlU3RyaW5nKHJpZ2h0QW5zd2VyKTtcbiAgcmV0dXJuIHdvcmtlZFVzZXJBbnN3ZXIgPT09IHdvcmtlZFJpZ2h0QW5zd2VyO1xufVxuXG5cbi8vIG1ha2UgdHJpbSwgcmVtb3ZlIGRvdCBvbiB0aGUgZW5kLCBsb3dlcmNhc2UsIC4uLmV0Y1xuY29uc3QgcHJlcGFyZVN0cmluZyA9IChhbnN3ZXIpID0+IHtcbiAgcmV0dXJuIGFuc3dlci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLCAnJykucmVwbGFjZSgvICsvZywgJyAnKS5yZXBsYWNlKC8gJC8sICcnKS5yZXBsYWNlKC9eIC8sICcnKS5yZXBsYWNlKC9cXC4kLywgJycpLnJlcGxhY2UoL1xcbiQvLCAnJykucmVwbGFjZSgvXFw/L2csICcnKS5yZXBsYWNlKC9cXCwvZywgJycpO1xufVxuXG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVNpbXBsZVRleHQgPSAodXNlckFuc3dlciwgcmlnaHRBbnN3ZXJzKSA9PiB7XG4gIGxldCByZW1vdmVQb3NzaWJpbGl0aWVzID0gZmFsc2U7XG4gIGlmIChleGNsdWRlRGF0YS5zb21lKChleGNsdWRlKSA9PiBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpLmluY2x1ZGVzKHByZXBhcmVTdHJpbmcoZXhjbHVkZSkpKSkge1xuICAgIHJlbW92ZVBvc3NpYmlsaXRpZXMgPSB0cnVlO1xuICB9XG4gIGxldCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXM7XG4gIGlmICghcmVtb3ZlUG9zc2liaWxpdGllcykge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcik7XG4gIH0gZWxzZSB7XG4gICAgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gW3VzZXJBbnN3ZXJdO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKCd2YWxpZGF0ZSBzaW1wbGUnLCB1c2VyQW5zd2VyLCByaWdodEFuc3dlcnMpO1xuICAvLyBjb25zdCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMgPSBbdXNlckFuc3dlciwgcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKSwgLi4uZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyh1c2VyQW5zd2VyKV07XG4gIC8vIGNvbnNvbGUubG9nKCdwb3NzaScsIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyk7XG4gIHJldHVybiBjb21wYXJlRWFjaFRvRWFjaChbLi4udXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzLCB1c2VyQW5zd2VyXSwgcmlnaHRBbnN3ZXJzKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrTXVsdGkgPSAodXNlckFuc3dlcnMsIHJpZ2h0QW5zd2VycykgPT4ge1xuICBsZXQgd29ya2VkVXNlckFuc3dlcnMgPSB1c2VyQW5zd2Vycy5zb3J0KCkubWFwKChhbnN3ZXIpID0+IHByZXBhcmVTdHJpbmcoYW5zd2VyKSk7XG4gIGxldCB3b3JrZWRSaWdodEFuc3dlciA9IHJpZ2h0QW5zd2Vycy5zb3J0KCkubWFwKChhbnN3ZXIpID0+IHByZXBhcmVTdHJpbmcoYW5zd2VyKSk7XG4gIHJldHVybiBpc0VxdWFsKHdvcmtlZFVzZXJBbnN3ZXJzLCB3b3JrZWRSaWdodEFuc3dlcik7XG5cbn1cblxuY29uc3QgZmluZE1heFByZXZpb3VzID0gKG9iaiwgY3VycmVudEtleSkgPT4ge1xuICBsZXQgbWF4ID0gLTE7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBpZiAoTnVtYmVyKGtleSkgPiBOdW1iZXIobWF4KSAmJiBvYmpba2V5XS5sZW5ndGggPiAwICYmIGtleSAhPSBjdXJyZW50S2V5KSB7XG4gICAgICBtYXggPSBrZXk7XG4gICAgfVxuICB9XG4gIGlmIChtYXggPT09IC0xKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cblxuXG5sZXQgZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyA9ICh1c2VyQW5zd2VyKSA9PiB7XG4gIHVzZXJBbnN3ZXIgPSBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpO1xuICBsZXQgdGV4dFZhcmlhbnRzID0ge307XG4gIGNvbnN0IHNob3J0U3libW9scyA9IFsn4oCZJywgJ1xcJycsICdgJywgJ1wiJ107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hvcnRTeWJtb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHJlZyA9IG5ldyBSZWdFeHAoc2hvcnRTeWJtb2xzW2ldLCAnZycpO1xuICAgIHVzZXJBbnN3ZXIgPSB1c2VyQW5zd2VyLnJlcGxhY2UocmVnLCAnXFwnJyk7XG4gIH1cbiAgY29uc3Qgd29yZHMgPSB1c2VyQW5zd2VyLnNwbGl0KCcgJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcblxuICAgIGlmICh3b3Jkc1tpXS5tYXRjaChmaW5kU2hvcnRlbmluZ1JlZ0V4cCkpIHtcbiAgICAgIGZvciAobGV0IGtleSBpbiBTaG9ydGVuaW5nRGljdGlvbmFyeSkge1xuICAgICAgICBpZiAod29yZHNbaV0uaW5jbHVkZXMoU2hvcnRlbmluZ0RpY3Rpb25hcnlba2V5XSkpIHtcblxuICAgICAgICAgIHZhciBpbmRleFRvUHVzaEluTWFpbiA9IGk7XG4gICAgICAgICAgaWYgKCF0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dKSB7XG4gICAgICAgICAgICB0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaW5kTWF4UHJldmlvdXModGV4dFZhcmlhbnRzLCBpKSkge1xuICAgICAgICAgICAgdGV4dFZhcmlhbnRzW2ZpbmRNYXhQcmV2aW91cyh0ZXh0VmFyaWFudHMsIGkpXS5mb3JFYWNoKChwcmV2aW91c1ZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG5ld1ZhcmlhbnQgPSBbLi4ucHJldmlvdXNWYXJpYW50XTtcbiAgICAgICAgICAgICAgbmV3VmFyaWFudFtpXSA9IHByZXZpb3VzVmFyaWFudFtpXS5yZXBsYWNlKFNob3J0ZW5pbmdEaWN0aW9uYXJ5W2tleV0sIGtleSk7XG4gICAgICAgICAgICAgIHRleHRWYXJpYW50c1tpbmRleFRvUHVzaEluTWFpbl0ucHVzaChuZXdWYXJpYW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBuZXdWYXJpYW50ID0gWy4uLndvcmRzXTtcbiAgICAgICAgICAgIG5ld1ZhcmlhbnRbaV0gPSB3b3Jkc1tpXS5yZXBsYWNlKFNob3J0ZW5pbmdEaWN0aW9uYXJ5W2tleV0sIGtleSk7XG4gICAgICAgICAgICB0ZXh0VmFyaWFudHNbaW5kZXhUb1B1c2hJbk1haW5dLnB1c2gobmV3VmFyaWFudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGZvciBvbmUgc2hvcnRlbmluZy5cbiAgaWYgKGZpbmRNYXhQcmV2aW91cyh0ZXh0VmFyaWFudHMsIDk5OSkpIHtcbiAgICByZXR1cm4gdGV4dFZhcmlhbnRzW2ZpbmRNYXhQcmV2aW91cyh0ZXh0VmFyaWFudHMsIDk5OSldLm1hcCgodmFyaWFudCkgPT4gdmFyaWFudC5qb2luKCcgJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbdXNlckFuc3dlcl07XG4gIH1cblxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVUZXh0SW5CbGFuayA9ICh1c2VyQW5zd2VyLCByaWdodEFuc3dlcnMsIHF1ZXN0aW9uVGV4dCkgPT4ge1xuICByaWdodEFuc3dlcnMgPSBbLi4ucmlnaHRBbnN3ZXJzLCAuLi5yaWdodEFuc3dlcnMubWFwKChyaWdodEFuc3dlcikgPT4gcXVlc3Rpb25UZXh0LnJlcGxhY2UoL18rL2csIHJpZ2h0QW5zd2VyKSldO1xuICBsZXQgcmVtb3ZlUG9zc2liaWxpdGllcyA9IGZhbHNlO1xuICBjb25zb2xlLmxvZygnZXgnLCBleGNsdWRlRGF0YSwgdXNlckFuc3dlciwgcHJlcGFyZVN0cmluZyh1c2VyQW5zd2VyKSk7XG4gIGlmIChleGNsdWRlRGF0YS5zb21lKChleGNsdWRlKSA9PiBwcmVwYXJlU3RyaW5nKHVzZXJBbnN3ZXIpLmluY2x1ZGVzKHByZXBhcmVTdHJpbmcoZXhjbHVkZSkpKSkge1xuICAgIHJlbW92ZVBvc3NpYmlsaXRpZXMgPSB0cnVlO1xuICB9XG4gIGxldCB1c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXM7XG4gIGlmICghcmVtb3ZlUG9zc2liaWxpdGllcykge1xuICAgIHVzZXJBbnN3ZXJzUG9zc2liaWxpdGllcyA9IGZpbmRTaG9ydGVuaW5nc1Bvc3NpYmlsaXRpZXModXNlckFuc3dlcik7XG4gIH0gZWxzZSB7XG4gICAgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gW107XG4gIH1cbiAgLy8gY29uc3QgdXNlckFuc3dlcnNQb3NzaWJpbGl0aWVzID0gZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcyh1c2VyQW5zd2VyKTtcbiAgcmV0dXJuIGNvbXBhcmVFYWNoVG9FYWNoKFsuLi51c2VyQW5zd2Vyc1Bvc3NpYmlsaXRpZXMsIHVzZXJBbnN3ZXIsIHByZXBhcmVTdHJpbmcodXNlckFuc3dlcildLCByaWdodEFuc3dlcnMpO1xufVxuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVNdWx0aUJsYW5rcyA9ICh1c2VyQW5zd2VycywgcmlnaHRBbnN3ZXJzKSA9PiB7XG4gIGxldCB2YWxpZEluZGV4ZXMgPSBbXTtcbiAgbGV0IGlzQWxsVmFsaWQgPSBmYWxzZTtcbiAgaWYgKHVzZXJBbnN3ZXJzLmxlbmd0aCA+IHJpZ2h0QW5zd2Vycy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ycmVjdDogdHJ1ZSxcbiAgICAgIGNvcnJlY3RJbmRleGVzOiAtMSxcbiAgICB9XG4gIH1cblxuICBpZiAocmlnaHRBbnN3ZXJzLmxlbmd0aCAlIHVzZXJBbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29ycmVjdDogdHJ1ZSxcbiAgICAgIGNvcnJlY3RJbmRleGVzOiAtMSxcbiAgICB9XG4gIH07XG5cbiAgbGV0IGdsb2JhbFZBID0ge1xuICAgIGlzT25lVGltZVZhbGlkOiBmYWxzZSxcbiAgICB2YWxpZEluZGV4ZXM6IFtdLFxuICB9XG5cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJpZ2h0QW5zd2Vycy5sZW5ndGg7IGkgKz0gdXNlckFuc3dlcnMubGVuZ3RoKSB7XG4gICAgdmFsaWRJbmRleGVzID0gW107XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVzZXJBbnN3ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAodmFsaWRhdGVTaW1wbGVUZXh0KHVzZXJBbnN3ZXJzW2pdLCBbcmlnaHRBbnN3ZXJzW2ogKyBpXV0pKSB7XG4gICAgICAgIHZhbGlkSW5kZXhlcy5wdXNoKGopO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsaWRJbmRleGVzLmxlbmd0aCA9PT0gdXNlckFuc3dlcnMubGVuZ3RoKSB7XG4gICAgICBnbG9iYWxWQS5pc09uZVRpbWVWYWxpZCA9IHRydWU7XG4gICAgICBnbG9iYWxWQS52YWxpZEluZGV4ZXMgPSB2YWxpZEluZGV4ZXM7XG4gICAgICBicmVhaztcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVkEudmFsaWRJbmRleGVzLnB1c2goLi4udmFsaWRJbmRleGVzKTtcbiAgICB9XG4gIH1cblxuXG4gIGlmIChnbG9iYWxWQS5pc09uZVRpbWVWYWxpZCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3JyZWN0OiB0cnVlLFxuICAgICAgY29ycmVjdEluZGV4ZXM6IHZhbGlkSW5kZXhlcyxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdW5pcSA9IGdsb2JhbFZBLnZhbGlkSW5kZXhlcy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG4gICAgaWYgKHVuaXEubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICAgIGxldCB1bmlxdWVVc2VyQW5zd2VycyA9IHVzZXJBbnN3ZXJzLm1hcCgoYW5zd2VyKSA9PiBwcmVwYXJlU3RyaW5nKGFuc3dlcikpLmZpbHRlcigodiwgaSwgYSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcbiAgICAgIGlmICh1bmlxdWVVc2VyQW5zd2Vycy5sZW5ndGggPT09IHVzZXJBbnN3ZXJzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvcnJlY3Q6IHRydWUsXG4gICAgICAgICAgY29ycmVjdEluZGV4ZXM6IHZhbGlkSW5kZXhlcyxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb3JyZWN0OiBmYWxzZSxcbiAgICAgICAgICBjb3JyZWN0SW5kZXhlczogW10sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29ycmVjdDogZmFsc2UsXG4gICAgICAgIGNvcnJlY3RJbmRleGVzOiB1bmlxLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvcihsZXQgaSA9IDA7IGk8dXNlckFuc3dlcnMubGVuZ3RoOyBpKyspe1xuICAvLyAgIGlmKHZhbGlkYXRlU2ltcGxlVGV4dCh1c2VyQW5zd2Vyc1tpXSwgW3JpZ2h0QW5zd2Vyc1tpXV0pKXtcbiAgLy8gICAgIHZhbGlkSW5kZXhlcy5wdXNoKGkpO1xuICAvLyAgIH1cbiAgLy8gfVxuXG4gIGlmICh2YWxpZEluZGV4ZXMubGVuZ3RoID09PSB1c2VyQW5zd2Vycy5sZW5ndGgpIHtcbiAgICBpc0FsbFZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvcnJlY3Q6IGlzQWxsVmFsaWQsXG4gICAgY29ycmVjdEluZGV4ZXM6IHZhbGlkSW5kZXhlcyxcbiAgfVxufVxuXG5cbmNvbnN0IGNvbXBhcmVFYWNoVG9FYWNoID0gKHVzZXJBbnN3ZXJzLCByaWdodEFuc3dlcnMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyQW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcmlnaHRBbnN3ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoY29tcGFyZVR3byh1c2VyQW5zd2Vyc1tpXSwgcmlnaHRBbnN3ZXJzW2pdKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuLy8gZmluZFNob3J0ZW5pbmdzUG9zc2liaWxpdGllcygnSWBkIGJlZW4gbWFkIGlcImQgSWBkJylcbiIsIlxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRXJyb3JUZXh0ID0gKHJpZ2h0QW5zd2VycykgPT4ge1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJoaW50cy1hbnN3ZXJzLWNvbnRhaW5lclwiPlxuICAgICAgJHtyaWdodEFuc3dlcnMubWFwKChhbnN3ZXIpID0+IGA8ZGl2IGNsYXNzPVwiaGludFwiPiR7YW5zd2VyfTwvZGl2PmApLmpvaW4oJyAnKX1cbiAgICA8L2Rpdj5cbiAgYDtcbiAgLy8gcmV0dXJuIGByaWdodCBhbnN3ZXIgYXJlICR7cmlnaHRBbnN3ZXJzLmpvaW4oJywgJyl9YDtcbn1cblxuY29uc3QgY2FsY3VsYXRlV2lkdGggPSAoYW5zd2VycykgPT4ge1xuICBsZXQgbWF4TGVuZ3RoID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFuc3dlcnNbaV0ubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICBtYXhMZW5ndGggPSBhbnN3ZXJzW2ldLmxlbmd0aDtcbiAgICB9XG4gIH1cbiAgaWYgKG1heExlbmd0aCA8IDcpIHtcbiAgICByZXR1cm4gNjA7XG4gIH1cbiAgaWYgKG1heExlbmd0aCA8IDEwKSB7XG4gICAgcmV0dXJuIDkwO1xuICB9XG4gIGlmIChtYXhMZW5ndGggPCAxOCkge1xuICAgIHJldHVybiAxNTA7XG4gIH1cbiAgaWYgKG1heExlbmd0aCA8IDI1KSB7XG4gICAgcmV0dXJuIDIwMDtcbiAgfVxuICByZXR1cm4gMjEwO1xufVxuXG5leHBvcnQgY29uc3QgcXVlc3Rpb25UZW1wbGF0ZSA9IChxdWVzdGlvbkRhdGEsIGlkLCBhbHJlYWR5V3JpdHRlbkFuc3dlcikgPT4ge1xuICBpZiAocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3RleHQtaW4tYmxhbmsnKSB7XG4gICAgY29uc3Qgc3BsaXR0ZWQgPSBxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0LnNwbGl0KC9fKy8pO1xuICAgIGNvbnN0IHdpZHRoID0gY2FsY3VsYXRlV2lkdGgocXVlc3Rpb25EYXRhLnJpZ2h0QW5zd2Vycyk7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzID0gXCJxdWVzdGlvbiBpbi1ibGFua1wiIGlkPVwiJHtpZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi10ZXh0XCI+JHtzcGxpdHRlZC5qb2luKGAke2Fuc3dlclRlbXBsYXRlSW5CbGFuayhhbnN3ZXJUZW1wbGF0ZUluQmxhbmssIHdpZHRoKX1gKX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1zaWduXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGludC1zaWduXCI+PGkgY2xhc3M9XCJmYXIgZmEtcXVlc3Rpb24tY2lyY2xlXCI+PC9pPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImhpbnQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzID0gXCJxdWVzdGlvblwiIGlkPVwiJHtpZH1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbi10ZXh0XCI+JHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxuICAgICAgICAke2Fuc3dlclRlbXBsYXRlKHF1ZXN0aW9uRGF0YSwgaWQsIGFscmVhZHlXcml0dGVuQW5zd2VyKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNoZWNrLXNpZ25cIj48aSBjbGFzcz1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoaW50LXNpZ25cIj48aSBjbGFzcz1cImZhciBmYS1xdWVzdGlvbi1jaXJjbGVcIj48L2k+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGludC1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgfVxuXG59XG5cbmV4cG9ydCBjb25zdCBhbnN3ZXJUZW1wbGF0ZUluQmxhbmsgPSAocXVlc3Rpb25EYXRhLCB3aWR0aCkgPT4ge1xuICByZXR1cm4gYFxuICA8ZGl2IHN0eWxlPVwid2lkdGg6JHt3aWR0aH1weDtcIiBjbGFzcyA9IFwiYW5zd2VyLXRleHQgaW4tYmxhbmtcIj5cbiAgICA8aW5wdXQgY2xhc3MgPSBcImFuc3dlci10ZXh0LWlucHV0IGluLWJsYW5rXCIgLz5cbiAgPC9kaXY+XG5gXG59XG5cbmV4cG9ydCBjb25zdCBhbnN3ZXJUZW1wbGF0ZSA9IChxdWVzdGlvbkRhdGEsIGlkLCBhbHJlYWR5V3JpdHRlbkFuc3dlcikgPT4ge1xuICBpZiAocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3NpbXBsZS10ZXh0JyB8fCBxdWVzdGlvbkRhdGEucXVlc3Rpb25UeXBlID09PSAndGV4dC1pbi1ibGFuaycpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcyA9IFwiYW5zd2VyLXRleHRcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzID0gXCJhbnN3ZXItdGV4dC1pbnB1dCBcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBpZiAocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3ZhcmlhbnRzLXNpbmdsZScpIHtcblxuICAgIHJldHVybiBgXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3F1ZXN0aW9uRGF0YS52YXJpYW50cy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dCAke2FscmVhZHlXcml0dGVuQW5zd2VyID09PSB2YWx1ZSA/ICdjaGVja2VkJyA6ICcnfSB0eXBlPVwicmFkaW9cIiBpZD1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH0tJHtpbmRleH0tJHtpZH1cIlxuICAgICAgICAgICAgICBuYW1lPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fVwiIHZhbHVlPVwiJHt2YWx1ZX1cIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7cXVlc3Rpb25EYXRhLnF1ZXN0aW9uVGV4dH0tJHtpbmRleH0tJHtpZH1cIj4ke3ZhbHVlfTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgKS5qb2luKCcgJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG4gIH1cblxuICBpZiAocXVlc3Rpb25EYXRhLnF1ZXN0aW9uVHlwZSA9PT0gJ3ZhcmlhbnRzLW11bHRpJykge1xuICAgIHJldHVybiBgXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3F1ZXN0aW9uRGF0YS52YXJpYW50cy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gYFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fS0ke2luZGV4fVwiXG4gICAgICAgICAgICAgIG5hbWU9XCIke3F1ZXN0aW9uRGF0YS5xdWVzdGlvblRleHR9XCIgdmFsdWU9XCIke3ZhbHVlfVwiIC8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiJHtxdWVzdGlvbkRhdGEucXVlc3Rpb25UZXh0fS0ke2luZGV4fVwiPiR7dmFsdWV9PC9sYWJlbD5cbiAgICAgICAgICBgKS5qb2luKCcgJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIGA7XG4gIH1cbn1cbiIsIlxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9uJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9Qcm9ncmVzc0Jhcic7XG5jbGFzcyBRdWl6Q29udHJvbGxlciB7XG5cbiAgcXVlc3Rpb25zID0gW107XG4gIGNvbnZlcnRlZFF1ZXN0aW9ucyA9IFtdO1xuICBvbGRRdWVzdGlvbnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihzZWN0aW9ucyA9IFtdLCBwYXJlbnRFbGVtZW50LCB0ZXN0TW9kZSA9IGZhbHNlKSB7XG4gICAgdGhpcy5zZWN0aW9ucyA9IHNlY3Rpb25zO1xuICAgIHRoaXMubWF4U2VjdGlvbk51bWJlciA9IHNlY3Rpb25zLmxlbmd0aCAtIDE7XG4gICAgdGhpcy50ZXN0TW9kZSA9IHRlc3RNb2RlXG5cbiAgICBpZiAodGhpcy5tYXhTZWN0aW9uTnVtYmVyID09PSAwKSB7XG4gICAgICB0aGlzLmlzTGFzdFNlY3Rpb24gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50O1xuXG4gICAgdGhpcy5yZW5kZXJNYWluQ29udHJvbHMoKTtcbiAgICB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zID0gc2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBTZWN0aW9uKHNlY3Rpb24sIHRoaXMucXVlc3Rpb25zQ29udGFpbmVyLCB0aGlzLnJlbmRlck5leHRTZWN0aW9uQnV0dG9uLCBpbmRleCwgdGVzdE1vZGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlc3RNb2RlKSB7XG4gICAgICB0aGlzLnByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc0JhckNvbnRhaW5lcicpLCBzZWN0aW9ucy5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuY3VycmVudFNlY3Rpb24gPSAwO1xuICAgIHRoaXMuY2hhbmdlU2VjdGlvbigwKTtcblxuICAgIGlmICh0ZXN0TW9kZSkge1xuICAgICAgdGhpcy5yZW5kZXJOZXh0U2VjdGlvbkJ1dHRvbigpXG4gICAgfVxuICB9XG5cbiAgaW5pdFNlY3Rpb24gPSAoc2VjdGlvbk51bWJlcikgPT4ge1xuICAgIHRoaXMuY3VycmVudFNlY3Rpb24gPSBzZWN0aW9uTnVtYmVyO1xuXG4gICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1tzZWN0aW9uTnVtYmVyXS5yZW5kZXJTZWN0aW9uKCk7XG5cbiAgICB0aGlzLm51bWJlclRleHRDb250YWluZXIuaW5uZXJUZXh0ID0gYFNlY3Rpb24gJHtzZWN0aW9uTnVtYmVyICsgMX0gb2YgJHt0aGlzLmNvbnZlcnRlZFNlY3Rpb25zLmxlbmd0aH1gO1xuICAgIGlmICh0aGlzLnByb2dyZXNzQmFyKSB7XG4gICAgICB0aGlzLnByb2dyZXNzQmFyLnNldFNlY3Rpb24oc2VjdGlvbk51bWJlcilcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiB0aGlzLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSwgMjApXG5cbiAgfVxuXG4gIGNoYW5nZVNlY3Rpb24gPSAoc2VjdGlvbk51bWJlcikgPT4ge1xuICAgIHRoaXMuc2VjdGlvbk51bWJlciA9IHNlY3Rpb25OdW1iZXI7XG4gICAgaWYgKHNlY3Rpb25OdW1iZXIgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzZWN0aW9uTnVtYmVyID4gMCkge1xuICAgICAgdGhpcy5wcmV2QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXZCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoc2VjdGlvbk51bWJlciA+IHRoaXMuY3VycmVudFNlY3Rpb24pIHtcbiAgICAgIGlmICh0aGlzLm1heFNlY3Rpb25OdW1iZXIgPT09IHNlY3Rpb25OdW1iZXIpIHtcbiAgICAgICAgdGhpcy5pc0xhc3RTZWN0aW9uID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWN0aW9uTnVtYmVyID4gdGhpcy5tYXhTZWN0aW9uTnVtYmVyKSB7XG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFNlY3Rpb24gIT09IHVuZGVmaW5lZCAmJiB0aGlzLmN1cnJlbnRTZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zW3RoaXMuY3VycmVudFNlY3Rpb25dLmhpZGVTZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNvbnZlcnRlZFNlY3Rpb25zW3NlY3Rpb25OdW1iZXJdLmNvbXBsZXRlZCkge1xuICAgICAgdGhpcy5uZXh0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKHNlY3Rpb25OdW1iZXIgPj0gdGhpcy5tYXhTZWN0aW9uTnVtYmVyKSkge1xuICAgICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuaW5pdFNlY3Rpb24oc2VjdGlvbk51bWJlcik7XG4gICAgaWYgKHRoaXMudGVzdE1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyTmV4dFNlY3Rpb25CdXR0b24oKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1haW5Db250cm9scyA9ICgpID0+IHtcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPGRpdiBjbGFzcyA9IFwicXVlc3Rpb25zLWxpc3RcIj4gPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb2dyZXNzQmFyQ29udGFpbmVyXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIm51bWJlci1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwicHJldi1zZWN0aW9uXCI+UHJldiBTZWN0aW9uPC9idXR0b24+IFxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiY2hlY2tfYnV0dG9uXCI+Q2hlY2sgdGhlIGFuc3dlcnM8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBpZD1cIm5leHQtc2VjdGlvblwiPk5leHQgU2VjdGlvbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwiZW5kLXF1aXpcIj5FbmQgcXVpejwvYnV0dG9uPiBcbiAgICA8L2Rpdj5cbiAgICBgXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG5cbiAgICB0aGlzLmNoZWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrX2J1dHRvbicpO1xuICAgIGlmICh0aGlzLnRlc3RNb2RlKSB7XG4gICAgICB0aGlzLmNoZWNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG5cbiAgICB0aGlzLmVuZFF1aXpCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5kLXF1aXonKTtcbiAgICB0aGlzLmVuZFF1aXpCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMubmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0LXNlY3Rpb24nKTtcbiAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMucHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2LXNlY3Rpb24nKTtcbiAgICB0aGlzLnByZXZCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMubnVtYmVyVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNudW1iZXItY29udGFpbmVyJyk7XG5cbiAgICB0aGlzLmNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jb252ZXJ0ZWRTZWN0aW9uc1t0aGlzLmN1cnJlbnRTZWN0aW9uXS5jaGVja0NvcnJlY3QoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuY2hhbmdlU2VjdGlvbih0aGlzLmN1cnJlbnRTZWN0aW9uICsgMSk7IH0pO1xuICAgIHRoaXMucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5jaGFuZ2VTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24gLSAxKTsgfSk7XG5cbiAgICB0aGlzLnF1ZXN0aW9uc0NvbnRhaW5lciA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3Rpb25zLWxpc3QnKTtcbiAgfVxuXG4gIHJlbmRlck5leHRTZWN0aW9uQnV0dG9uID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5pc0xhc3RTZWN0aW9uKSB7XG4gICAgICB0aGlzLm5leHRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kUXVpekJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZW5kUXVpekJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMudGVzdE1vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckVuZE9mVGVzdCgpXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbmdyYXRzKCk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICByZW5kZXJFbmRPZlRlc3QgPSAoKSA9PiB7XG4gICAgdGhpcy5xdWVzdGlvbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLm51bWJlclRleHRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpZih0aGlzLnByb2dyZXNzQmFyKXtcbiAgICAgIHRoaXMucHJvZ3Jlc3NCYXIuaGlkZSgpXG4gICAgfVxuXG4gICAgdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMuY29udmVydGVkU2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgc2VjdGlvbi5jaGVja0NvcnJlY3QoKVxuICAgIH0pO1xuXG4gICAgbGV0IGFsbFF1ZXN0aW9ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb252ZXJ0ZWRTZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuXG4gICAgICBhbGxRdWVzdGlvbnMgPSBbLi4uYWxsUXVlc3Rpb25zLCAuLi50aGlzLmNvbnZlcnRlZFNlY3Rpb25zW2ldLmNvbnZlcnRlZFF1ZXN0aW9uc107XG4gICAgfVxuICAgIGxldCBhbGxRdWVzdGlvbnNMZW5ndGggPSBhbGxRdWVzdGlvbnMubGVuZ3RoIC0gdGhpcy5jb252ZXJ0ZWRTZWN0aW9ucy5sZW5ndGg7XG5cblxuICAgIGxldCBjb3JyZWN0Q291bnQgPSBhbGxRdWVzdGlvbnMuZmlsdGVyKChxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIHF1ZXN0LnJlc3VsdENvcnJlY3Q7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgY29ycmVjdENvdW50ID0gY29ycmVjdENvdW50IC0gdGhpcy5zZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBsZXQgcmVzdWx0TGV2ZWwgPSAnQkVHSU5ORVIgKEEwKSdcblxuICAgIGlmIChjb3JyZWN0Q291bnQgPj0gNykge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnRUxFTUVOVEFSWSAoQTEpJ1xuICAgIH1cbiAgICBpZiAoY29ycmVjdENvdW50ID49IDE0KSB7XG4gICAgICByZXN1bHRMZXZlbCA9ICdQUkUtSU5URVJNRURJQVRFIChBMiknXG4gICAgfVxuICAgIGlmIChjb3JyZWN0Q291bnQgPj0gMjIpIHtcbiAgICAgIHJlc3VsdExldmVsID0gJ0lOVEVSTUVESUFURSAoQjEpJ1xuICAgIH1cbiAgICBpZiAoY29ycmVjdENvdW50ID49IDMwKSB7XG4gICAgICByZXN1bHRMZXZlbCA9ICdVUFBFUiBJTlRFUk1FRElBVEUgKEIyKSdcbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb3VudCA+PSAzOCkge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnQURWQU5DRUQgKEMxKSdcbiAgICB9XG4gICAgaWYgKGNvcnJlY3RDb3VudCA+PSA0NSkge1xuICAgICAgcmVzdWx0TGV2ZWwgPSAnUFJPRklDSUVOVCAoQzIpJ1xuICAgIH1cblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwibGFzdC1tZXNzYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgVGhlIHRlc3QgaXMgY29tcGxldGVkIVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UgZ290XCI+XG4gICAgICAgICAgWW91IGdvdDpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgPGI+JHtjb3JyZWN0Q291bnR9PC9iPiBjb3JyZWN0IGFuc3dlcnMgb3V0IG9mIDxiPiR7YWxsUXVlc3Rpb25zTGVuZ3RofTwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgWW91ciBsZXZlbDpcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCI+XG4gICAgICAgICAgPGI+JHtyZXN1bHRMZXZlbH08L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb25zdCBvbGRMYXN0TWVzc2FnZSA9IHRoaXMucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGFzdC1tZXNzYWdlJyk7XG4gICAgaWYgKG9sZExhc3RNZXNzYWdlKSB7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQob2xkTGFzdE1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50RWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xuICB9XG5cbiAgcmVuZGVyQ29uZ3JhdHMgPSAoKSA9PiB7XG4gICAgdGhpcy5xdWVzdGlvbnNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLm51bWJlclRleHRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxldCBhbGxRdWVzdGlvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29udmVydGVkU2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGFsbFF1ZXN0aW9uc0xlbmd0aCArPSB0aGlzLmNvbnZlcnRlZFNlY3Rpb25zW2ldLmNvbnZlcnRlZFF1ZXN0aW9ucy5sZW5ndGg7XG4gICAgICBhbGxRdWVzdGlvbnMgPSBbLi4uYWxsUXVlc3Rpb25zLCAuLi50aGlzLmNvbnZlcnRlZFNlY3Rpb25zW2ldLmNvbnZlcnRlZFF1ZXN0aW9uc107XG4gICAgfVxuICAgIGxldCBhbGxRdWVzdGlvbnNMZW5ndGggPSBhbGxRdWVzdGlvbnMubGVuZ3RoIC0gdGhpcy5jb252ZXJ0ZWRTZWN0aW9ucy5sZW5ndGg7XG5cblxuICAgIGxldCBmaXJzdFRpbWVDb3JyZWN0Q291bnQgPSBhbGxRdWVzdGlvbnMuZmlsdGVyKChxdWVzdCkgPT4ge1xuICAgICAgcmV0dXJuIHF1ZXN0LmZpcnN0VGltZUNvcnJlY3Q7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgZmlyc3RUaW1lQ29ycmVjdENvdW50ID0gZmlyc3RUaW1lQ29ycmVjdENvdW50IC0gdGhpcy5zZWN0aW9ucy5sZW5ndGg7XG4gICAgY29uc3QgcGVyY2VudGFnZSA9IChmaXJzdFRpbWVDb3JyZWN0Q291bnQgLyBhbGxRdWVzdGlvbnNMZW5ndGgpICogMTAwO1xuXG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJsYXN0LW1lc3NhZ2VcIj5cbiAgICAgICAgR3JhdHMsIHlvdSBoYXZlIGNvbXBsZXRlZCB0aGUgdGVzdCFcbiAgICAgICAgJHtNYXRoLnJvdW5kKHBlcmNlbnRhZ2UpfSUgY29ycmVjdCFcbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgY29uc3Qgb2xkTGFzdE1lc3NhZ2UgPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmxhc3QtbWVzc2FnZScpO1xuICAgIGlmIChvbGRMYXN0TWVzc2FnZSkge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKG9sZExhc3RNZXNzYWdlKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudEVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBodG1sKTtcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVpekNvbnRyb2xsZXI7XG4iLCJpbXBvcnQge2NyZWF0ZVF1ZXN0aW9uLCBUZXh0QmVmb3JlUXVlc3Rpb259IGZyb20gJy4uL1F1ZXN0aW9uL0lRdWVzdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb257XG4gIHF1ZXN0aW9ucyA9IFtdO1xuICBjb252ZXJ0ZWRRdWVzdGlvbnMgPSBbXTtcbiAgcmVuZGVyZWQgPSBmYWxzZTtcbiAgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc2VjdGlvbkRhdGEsIGNvbnRhaW5lciwgYWxsUmlnaHRDYWxsQmFjaywgbnVtYmVyLCB0ZXN0TW9kZT1mYWxzZSl7XG4gICAgdGhpcy5oZWFkZXIgPSBzZWN0aW9uRGF0YS5oZWFkZXI7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5xdWVzdGlvbnMgPSBzZWN0aW9uRGF0YS5xdWVzdGlvbnM7XG4gICAgdGhpcy5hbGxSaWdodENhbGxCYWNrID0gYWxsUmlnaHRDYWxsQmFjaztcbiAgICB0aGlzLnRlc3RNb2RlID0gdGVzdE1vZGVcbiAgICBpZih0ZXN0TW9kZSl7XG4gICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICBoaWRlU2VjdGlvbigpe1xuICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgZmluZEFsbEZhbHNlID0gKCkgPT57XG4gICAgcmV0dXJuIHRoaXMuY29udmVydGVkUXVlc3Rpb25zLmZpbHRlcigocXVlcyk9PiAhcXVlcy5yZXN1bHRDb3JyZWN0KTtcbiAgfVxuXG4gIGNoZWNrQ29ycmVjdCA9ICgpID0+e1xuICAgIC8vIGlmKHRoaXMudGVzdE1vZGUpe1xuICAgIC8vICAgcmV0dXJuXG4gICAgLy8gfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucy5sZW5ndGg7IGkrKyl7XG4gICAgICB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9uc1tpXS5jaGVjayhmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGZhbHNlVmFsdWVzID0gdGhpcy5maW5kQWxsRmFsc2UoKTtcbiAgICBpZighZmFsc2VWYWx1ZXMubGVuZ3RoKXtcbiAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWxsUmlnaHRDYWxsQmFjaygpO1xuICAgICAgLy90aGlzLnJlbmRlck5leHRTZWN0aW9uQnV0dG9uKCk7XG4gICAgfVxuXG4gIH1cbiAgXG4gIHF1ZXN0aW9uQ2FsbGJhY2sgPSAoaXNDaGFuZ2VkUXVlc3Rpb25Db3JyZWN0KSA9PiB7XG4gICAgaWYoaXNDaGFuZ2VkUXVlc3Rpb25Db3JyZWN0KXtcbiAgICAgIGNvbnN0IGZhbHNlVmFsdWVzID0gIHRoaXMuZmluZEFsbEZhbHNlKCk7XG4gICAgICBpZighZmFsc2VWYWx1ZXMubGVuZ3RoKXtcbiAgICAgICAgdGhpcy5jaGVja0NvcnJlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBcbiAgcmVuZGVyUXVpeiA9ICgpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpPHRoaXMuY29udmVydGVkUXVlc3Rpb25zLmxlbmd0aDsgaSsrKXtcbiAgICAgIHRoaXMuY29udmVydGVkUXVlc3Rpb25zW2ldLnJlbmRlclF1ZXN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2VjdGlvbiA9ICgpID0+e1xuICAgIGlmKHRoaXMucmVuZGVyZWQgJiYgdGhpcy5zZWN0aW9uQ29udGFpbmVyKXtcbiAgICAgIHRoaXMuc2VjdGlvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxkaXYgY2xhc3MgPSBcInNlY3Rpb24tJHt0aGlzLm51bWJlcn1cIj4gPC9kaXY+XG4gICAgYFxuICAgIHRoaXMuY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gICAgdGhpcy5zZWN0aW9uQ29udGFpbmVyID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHt0aGlzLm51bWJlcn1gKTtcbiAgICB0aGlzLmNvbnZlcnRlZFF1ZXN0aW9ucyA9IFtuZXcgVGV4dEJlZm9yZVF1ZXN0aW9uKHRoaXMuaGVhZGVyLCB0aGlzLnNlY3Rpb25Db250YWluZXIpLCAuLi50aGlzLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCk9PntcbiAgICAgIHJldHVybiBjcmVhdGVRdWVzdGlvbihxdWVzdGlvbiwgdGhpcy5zZWN0aW9uQ29udGFpbmVyLCB0aGlzLnF1ZXN0aW9uQ2FsbGJhY2ssIHRoaXMudGVzdE1vZGUsIHRoaXMubnVtYmVyLCBpbmRleCk7XG4gICAgfSldO1xuICAgIHRoaXMucmVuZGVyZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5yZW5kZXJRdWl6KCk7XG4gICAgLy8gc2VjdGlvbkRhdGEucXVlc3Rpb25zO1xuICB9XG59IiwiIGNsYXNzIFN0b3JhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMuc3RvcmFnZUtleSA9ICd2YnctdGVzdC1zYXZlZCc7XG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBzdG9yYWdlIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBXcml0ZSBkYXRhIHRvIHRoZSBsb2NhbCBzdG9yYWdlIHdpdGggc2VjdGlvbkluZGV4IGFuZCBxdWVzdGlvbkluZGV4XG4gICAgd3JpdGUoc2VjdGlvbkluZGV4LCBxdWVzdGlvbkluZGV4LCBkYXRhKSB7XG4gICAgICBjb25zdCBzdG9yYWdlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KSk7XG4gIFxuICAgICAgaWYgKCFzdG9yYWdlRGF0YVtzZWN0aW9uSW5kZXhdKSB7XG4gICAgICAgIHN0b3JhZ2VEYXRhW3NlY3Rpb25JbmRleF0gPSB7fTtcbiAgICAgIH1cbiAgXG4gICAgICBzdG9yYWdlRGF0YVtzZWN0aW9uSW5kZXhdW3F1ZXN0aW9uSW5kZXhdID0gZGF0YTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZURhdGEpKTtcbiAgICB9XG4gIFxuICAgIC8vIFJlYWQgc3BlY2lmaWMgZGF0YSBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIHVzaW5nIHNlY3Rpb25JbmRleCBhbmQgcXVlc3Rpb25JbmRleFxuICAgIHJlYWQoc2VjdGlvbkluZGV4LCBxdWVzdGlvbkluZGV4KSB7XG4gICAgICBjb25zdCBzdG9yYWdlRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5KSk7XG4gICAgICBpZiAoc3RvcmFnZURhdGFbc2VjdGlvbkluZGV4XSAmJiBzdG9yYWdlRGF0YVtzZWN0aW9uSW5kZXhdW3F1ZXN0aW9uSW5kZXhdKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlRGF0YVtzZWN0aW9uSW5kZXhdW3F1ZXN0aW9uSW5kZXhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBSZWFkIGFsbCBkYXRhIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2UgaW4gYSBtYXRyaXggZm9ybWF0XG4gICAgcmVhZEFsbCgpIHtcbiAgICAgIGNvbnN0IHN0b3JhZ2VEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXkpKTtcbiAgICAgIHJldHVybiBzdG9yYWdlRGF0YTtcbiAgICB9XG4gIH1cbiAgXG5cbiAgZXhwb3J0IGNvbnN0IFN0b3JhZ2UgPSBuZXcgU3RvcmFnZU1hbmFnZXIoKTsiLCJmdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eic7XG4gIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIG1ha2VpZCgxMCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvSGFzaChzdHJpbmcpIHtcbiAgY29uc29sZS5sb2coJyB0byBoamFzaCcsXG4gICAgc3RyaW5nXG4gIClcbiAgbGV0IGhhc2ggPSAwO1xuXG4gIGlmIChzdHJpbmcubGVuZ3RoID09IDApIHJldHVybiBoYXNoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYXIgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBjaGFyO1xuICAgIGhhc2ggPSBoYXNoICYgaGFzaDtcbiAgfVxuICBjb25zb2xlLmxvZygnIGhqYXNoJyxcbiAgICBoYXNoXG4gIClcbiAgcmV0dXJuIGhhc2g7XG59IiwiaW1wb3J0IFF1aXpDb250cm9sbGVyIGZyb20gJy4vUXVpekNvbnRyb2xsZXInO1xuXG4vKlxubW9kdWxlczpcbiAgMS4gbW9kdWxlIHRvIHBhcnNlIGRhdGEgZnJvbSBjc3Ygb3IgZXRjXG4gIDIuIG1vZHVsZSB0byBzaG93IHF1aXogZGF0YSwgcGFnaW5hdGlvbiwgZXRjLlxuICAzLiBtb2R1bGUgdG8gY2hlY2sgYW5zd2VyLlxuICA0LiBtb2R1bGUgdG8gc2VuZCBkYXRhIHRvIHNlcnZlciAob3Igc210aCBsaWtlIHRoaXMpXG5cbiovXG5cbi8vIGNvbnN0IHRlc3RRdWVzaW9ucyA9IFtcbi8vICAge1xuLy8gICAgIHF1ZXN0aW9uVHlwZTogJ3NpbXBsZS10ZXh0Jyxcbi8vICAgICBxdWVzdGlvblRleHQ6ICdJIHdlbnQgb3V0IGluIHRoZSBjb2xkIHdpdGhvdXQgYSBjb2F0LiAoc2lsbHkpJyxcbi8vICAgICByaWdodEFuc3dlcnM6IFsnSXQgd2FzIHNpbGx5IG9mIG1lIHRvIGdvIG91dCBpbiB0aGUgY29sZCB3aXRob3V0IGEgY29hdCddLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgcXVlc3Rpb25UeXBlOiAndGV4dC1pbi1ibGFuaycsXG4vLyAgICAgcXVlc3Rpb25UZXh0OiAnVGhlcmUgYXJlIG5vdCBtYW55IHRoaW5ncyBwZW9wbGUgd2lsbCBub3QgZG8gX19fXyBmZWFyLicsXG4vLyAgICAgcmlnaHRBbnN3ZXJzOiBbJ291dCBvZiddLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgcXVlc3Rpb25UeXBlOiAndmFyaWFudHMtc2luZ2xlJyxcbi8vICAgICBxdWVzdGlvblRleHQ6ICdJIGxpdmUgaW4gYSB2ZXJ5IHNtYWxsIHZpbGxhZ2UuIFlvdSBwcm9iYWJseSB3b27igJl0IGZpbmQgaXQgX18geW91ciBtYXAuJyxcbi8vICAgICByaWdodEFuc3dlcnM6IFsnb24nXSxcbi8vICAgICB2YXJpYW50czogWydpbicsICdvbiddLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgcXVlc3Rpb25UeXBlOiAndmFyaWFudHMtbXVsdGknLFxuLy8gICAgIHF1ZXN0aW9uVGV4dDogJ3Rlc3QgbXVsdGkgdmFyaWFudCcsXG4vLyAgICAgcmlnaHRBbnN3ZXJzOiBbJ29uJywgJ2luJ10sXG4vLyAgICAgdmFyaWFudHM6IFsnaW4nLCAnb24nXSxcbi8vICAgfVxuLy8gXSBcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAvLyBpbmplY3Qgc3R5bGVzIHRvIHBhZ2VcbiAgY29uc3QgYXBwZW5kU3R5bGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNjc3MgPSByZXF1aXJlKCcuL3N0eWxlcy9pbmRleC5zY3NzJyk7XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5cbiAgICBjb25zdCBzdHlsZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWxlbS5pbm5lckhUTUwgPSBzY3NzO1xuXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE3NDVhYzM5NGEuanNcIjtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICBhcHBlbmRTdHlsZXMoKTtcblxuICBjb25zdCBodG1sID0gYFxuICAgICR7d2luZG93Ll9faXNUZXN0TW9kZV9fID8gYDxkaXYgaWQ9XCJzdGFydC1lbGVtXCIgY2xhc3M9XCJzdGFydC10ZXh0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhcnQtdGV4dC1lbGVtXCI+RW5nbGlzaCBsZXZlbCB0ZXN0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic3RhcnQtdGV4dC1lbGVtXCI+NTAgcXVlc3Rpb25zPC9kaXY+XG4gICAgPC9kaXY+YCA6ICcnfVxuICBcbiAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGlkPVwic3RhcnRcIj5TdGFydDwvYnV0dG9uPmBcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXonKTtcbiAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgaHRtbCk7XG4gIGNvbnN0IGJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc3RhcnQnKTtcbiAgY29uc3QgZWxlbSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjc3RhcnQtZWxlbScpO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbiAgICBpZihlbGVtKXtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICB9XG5cblxuICAgIG5ldyBRdWl6Q29udHJvbGxlcih3aW5kb3cudGVzdERhdGEsIGNvbnRhaW5lciwgd2luZG93Ll9faXNUZXN0TW9kZV9fIHx8IGZhbHNlKTtcbiAgfSk7XG5cblxuXG59KTtcblxuIiwiIG1vZHVsZS5leHBvcnRzID0gZGVjb2RlVVJJQ29tcG9uZW50KFwiYm9keSU3QmJhY2tncm91bmQtY29sb3IlM0ElMjNlZmVlZTklM0JiYWNrZ3JvdW5kLWltYWdlJTNBdXJsKCUyMmh0dHBzJTNBJTJGJTJGdWNhcmVjZG4uY29tJTJGNmNhZDBkOGYtNGFjMS00N2E4LWFhMjYtNmZjMTRiNmI2ZDU2JTJGJTIyKSUzQmJhY2tncm91bmQtYXR0YWNobWVudCUzQWZpeGVkJTNCYmFja2dyb3VuZC1wb3NpdGlvbiUzQWNlbnRlciU3RCU0MG1lZGlhJTIwc2NyZWVuJTIwYW5kJTIwKG1pbi1hc3BlY3QtcmF0aW8lM0ElMjAxLjIpJTdCYm9keSU3QmJhY2tncm91bmQtaW1hZ2UlM0F1cmwoJTIyaHR0cHMlM0ElMkYlMkZ1Y2FyZWNkbi5jb20lMkYxNDQyYzA4Ni1mMmI4LTRhZTUtOTg2Ny0zMTk4Yjc1ODU4N2YlMkYlMjIpJTdEJTdEJTIzcXVpeiU3QmRpc3BsYXklM0FmbGV4JTNCbWF4LXdpZHRoJTNBODAwcHglM0JtaW4td2lkdGglM0EzMDBweCUzQm1hcmdpbiUzQTAlMjBhdXRvJTNCZmxleC1kaXJlY3Rpb24lM0Fjb2x1bW4lM0Jmb250LWZhbWlseSUzQSUyMk9wZW4lMjBTYW5zJTIyJTJDJTIwc2Fucy1zZXJpZiUzQmZvbnQtc2l6ZSUzQTE2cHglM0JtYXJnaW4tdG9wJTNBNDBweCUzQm1hcmdpbi1ib3R0b20lM0E0MHB4JTdELnRleHQtcXVlc3Rpb24taXRhbGljJTdCZm9udC13ZWlnaHQlM0E0MDAlN0QucXVlc3Rpb24lN0Jwb3NpdGlvbiUzQXJlbGF0aXZlJTNCYmFja2dyb3VuZC1jb2xvciUzQSUyM2ZmZiUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTNCYm9yZGVyLXJhZGl1cyUzQTEwcHglM0JtYXJnaW4tYm90dG9tJTNBMTJweCUzQnBhZGRpbmclM0EyNHB4JTNCcGFnZS1icmVhay1pbnNpZGUlM0Fhdm9pZCUzQm92ZXJmbG93JTNBaGlkZGVuJTdELnF1ZXN0aW9uLnNlY3Rpb24taGVhZGVyJTdCZm9udC1zaXplJTNBMTlweCUzQmZvbnQtd2VpZ2h0JTNBYm9sZCU3RC5oaW50LWNvbnRhaW5lciU3QnBvc2l0aW9uJTNBYWJzb2x1dGUlM0JkaXNwbGF5JTNBbm9uZSUzQmJhY2tncm91bmQtY29sb3IlM0F3aGl0ZSUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzNWQ2MzZmJTNCd2lkdGglM0E1MCUyNSUzQmhlaWdodCUzQTcwJTI1JTNCYm9yZGVyLXJhZGl1cyUzQTVweCUzQnBhZGRpbmclM0E1cHglM0Jjb2xvciUzQSUyMzI4YTc0NSUzQnRvcCUzQTVweCUzQnJpZ2h0JTNBMy42JTI1JTNCYW5pbWF0aW9uJTNBaGludCUyMDAuM3MlMjBlYXNlLWluLW91dCUyMDElN0QubGFzdC1tZXNzYWdlJTdCcGFkZGluZyUzQTE2cHglM0Jmb250LXNpemUlM0EyNXB4JTdELmxhc3QtbWVzc2FnZSUyMC5tZXNzYWdlJTdCbWFyZ2luLWJvdHRvbSUzQTIwcHglM0Jmb250LXNpemUlM0EyNXB4JTNCdGV4dC1hbGlnbiUzQWNlbnRlciU3RC5sYXN0LW1lc3NhZ2UlMjAubWVzc2FnZS5nb3QlN0JtYXJnaW4tYm90dG9tJTNBNXB4JTdEJTQwa2V5ZnJhbWVzJTIwaGludCU3QjAlMjUlN0JyaWdodCUzQS03MCUyNSU3RDk5JTI1JTdCcmlnaHQlM0EzLjYlMjUlN0QlN0QucXVlc3Rpb24lMjAuY2hlY2stc2lnbiU3QmN1cnNvciUzQXBvaW50ZXIlM0Jjb2xvciUzQSUyMzI4YTc0NSUzQnBvc2l0aW9uJTNBYWJzb2x1dGUlM0Jib3R0b20lM0EwLjV2dyUzQnJpZ2h0JTNBMC42dnclM0Jmb250LXNpemUlM0EyMHB4JTNCd2lkdGglM0EyMHB4JTNCaGVpZ2h0JTNBMjBweCU3RC5xdWVzdGlvbiUyMC5oaW50LXNpZ24lN0JjdXJzb3IlM0Fwb2ludGVyJTNCY29sb3IlM0FncmV5JTNCcG9zaXRpb24lM0FhYnNvbHV0ZSUzQnRvcCUzQTAuNXZ3JTNCcmlnaHQlM0EwLjZ2dyUzQmZvbnQtc2l6ZSUzQTIwcHglN0QucXVlc3Rpb24uY29ycmVjdCU3QmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzMjhhNzQ1JTdELnF1ZXN0aW9uLmNvcnJlY3QlN0Jib3JkZXIlM0ExcHglMjBzb2xpZCUyMCUyMzI4YTc0NSUzQmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDQwJTJDMTY3JTJDNjklMkMwLjIpJTdELnF1ZXN0aW9uLmluY29ycmVjdCU3QmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGMzNTQ1JTNCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoMjIwJTJDNTMlMkM2OSUyQzAuMiklN0QucXVlc3Rpb24uaW5jb3JyZWN0JTIwLmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rJTdCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoMjIwJTJDNTMlMkM2OSUyQzAuNSklN0QucXVlc3Rpb24lMjAuYW5zd2VyLXRleHQtaW5wdXQuaW4tYmxhbmsuaW5jb3JyZWN0JTdCYmFja2dyb3VuZC1jb2xvciUzQXJnYmEoMjIwJTJDNTMlMkM2OSUyQzAuNSklN0RkaXYucXVlc3Rpb24uY29ycmVjdCUyMC5hbnN3ZXItdGV4dC1pbnB1dC5pbi1ibGFuayU3QmJhY2tncm91bmQtY29sb3IlM0FyZ2JhKDQwJTJDMTY3JTJDNjklMkMwLjUpJTdEZGl2LnF1ZXN0aW9uJTIwLmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rLmNvcnJlY3QlN0JiYWNrZ3JvdW5kLWNvbG9yJTNBcmdiYSg0MCUyQzE2NyUyQzY5JTJDMC41KSU3RC5jaGVja2JveC1jb250YWluZXIlN0JtYXJnaW4tYm90dG9tJTNBMTZweCU3RC5jaGVja2JveC1jb250YWluZXIlMjBpbnB1dCU3QmN1cnNvciUzQXBvaW50ZXIlN0QuY2hlY2tib3gtY29udGFpbmVyJTIwbGFiZWwlN0Jwb3NpdGlvbiUzQXJlbGF0aXZlJTNCYm90dG9tJTNBMXB4JTNCcGFkZGluZy1sZWZ0JTNBNHB4JTNCY3Vyc29yJTNBcG9pbnRlciU3RC5xdWVzdGlvbi10ZXh0JTdCZm9udC1zaXplJTNBMTZweCUzQmZvbnQtd2VpZ2h0JTNBNTAwJTNCbGV0dGVyLXNwYWNpbmclM0EuMXB4JTNCbGluZS1oZWlnaHQlM0EyNHB4JTNCY29sb3IlM0ElMjMyMDIxMjQlM0Jmb250LXdlaWdodCUzQTQwMCUzQndpZHRoJTNBMTAwJTI1JTNCd29yZC1icmVhayUzQWJyZWFrLXdvcmQlM0JtYXJnaW4tYm90dG9tJTNBMTZweCU3RC5xdWVzdGlvbi5pbi1ibGFuayUyMC5xdWVzdGlvbi10ZXh0JTdCbWFyZ2luLWJvdHRvbSUzQTBweCU3RC5xdWVzdGlvbi5pbmNvcnJlY3QlMjAuY2hlY2stc2lnbiU3QmNvbG9yJTNBJTIzZGMzNTQ1JTdELmFuc3dlciU3QmRpc3BsYXklM0FmbGV4JTNCZmxleC1kaXJlY3Rpb24lM0Fjb2x1bW4lN0QuYW5zd2VyLXRleHQlN0J3aWR0aCUzQTYwJTI1JTdELmFuc3dlci10ZXh0LmluLWJsYW5rJTdCZGlzcGxheSUzQWlubGluZS1ibG9jayUzQndpZHRoJTNBYXV0byUzQm1hcmdpbi1yaWdodCUzQTVweCU3RC5hbnN3ZXItdGV4dC1pbnB1dCU3QmJhY2tncm91bmQlM0F0cmFuc3BhcmVudCUzQnBhZGRpbmclM0EycHglM0Jib3JkZXIlM0EwJTNCYm9yZGVyLWJvdHRvbSUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTNCd2lkdGglM0ExMDAlMjUlN0QuYW5zd2VyLXRleHQtaW5wdXQuaW4tYmxhbmslN0JwYWRkaW5nJTNBMnB4JTNCYm9yZGVyJTNBMCUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTNCd2lkdGglM0ExMDAlMjUlN0QuYW5zd2VyLXRleHQtaW5wdXQlM0Fmb2N1cyU3Qm91dGxpbmUlM0Fub25lJTNCYm9yZGVyLWJvdHRvbSUzQTFweCUyMHNvbGlkJTIwJTIzNWQ2MzZmJTdELmFuc3dlci10ZXh0LWlucHV0LmluLWJsYW5rJTNBZm9jdXMlN0JvdXRsaW5lJTNBbm9uZSUzQmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzZGFkY2UwJTdELmVycm9yLXRleHQlN0Jjb2xvciUzQXJlZCUzQmZvbnQtc2l6ZSUzQTEycHglM0J3aWR0aCUzQTU1JTI1JTNCcGFkZGluZy10b3AlM0ExMHB4JTdELmJ1dHRvbiU3QndpZHRoJTNBMTgwcHglM0JoZWlnaHQlM0E0MHB4JTNCYm9yZGVyLXJhZGl1cyUzQTEwcHglM0Jib3JkZXIlM0Fub25lJTNCYmFja2dyb3VuZC1jb2xvciUzQXdoaXRlJTNCY3Vyc29yJTNBcG9pbnRlciU3RCUyM3N0YXJ0JTdCZm9udC1zaXplJTNBMjBweCUzQndpZHRoJTNBMjAwcHglM0JoZWlnaHQlM0E1NXB4JTNCYm9yZGVyLXJhZGl1cyUzQTVweCUzQmFsaWduLXNlbGYlM0FjZW50ZXIlM0JiYWNrZ3JvdW5kLWNvbG9yJTNBdHJhbnNwYXJlbnQlM0JiYWNrZ3JvdW5kLWltYWdlJTNBdXJsKCUyMmRhdGElM0FpbWFnZSUyRnN2ZyUyQnhtbCUyQyUyNTNjc3ZnJTIwd2lkdGglM0QnMTAwJTI1MjUnJTIwaGVpZ2h0JTNEJzEwMCUyNTI1JyUyMHhtbG5zJTNEJ2h0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyclMjUzZSUyNTNjcmVjdCUyMHdpZHRoJTNEJzEwMCUyNTI1JyUyMGhlaWdodCUzRCcxMDAlMjUyNSclMjBmaWxsJTNEJ25vbmUnJTIwc3Ryb2tlJTNEJyUyNTIzMzMzJyUyMHN0cm9rZS13aWR0aCUzRCc2JyUyMHN0cm9rZS1kYXNoYXJyYXklM0QnMSUyNTJjJTIwOSclMjBzdHJva2UtZGFzaG9mZnNldCUzRCc0NyclMjBzdHJva2UtbGluZWNhcCUzRCdzcXVhcmUnJTJGJTI1M2UlMjUzYyUyRnN2ZyUyNTNlJTIyKSU3RC5idXR0b24lM0Fmb2N1cyU3Qm91dGxpbmUlM0Fub25lJTdELmJ1dHRvbiUzQWFjdGl2ZSU3QmJvcmRlciUzQTFweCUyMHNvbGlkJTIwJTIzNWQ2MzZmJTdELmJ1dHRvbi1jb250YWluZXIlN0JkaXNwbGF5JTNBZmxleCUzQmp1c3RpZnktY29udGVudCUzQXNwYWNlLWFyb3VuZCU3RCU0MG1lZGlhJTIwKG1heC13aWR0aCUzQSUyMDYwMHB4KSU3Qi5hbnN3ZXItdGV4dCU3QndpZHRoJTNBOTAlMjUlN0QucXVlc3Rpb24lMjAuY2hlY2stc2lnbiU3QnJpZ2h0JTNBMzBweCUzQmZvbnQtc2l6ZSUzQTI1cHglM0Jib3R0b20lM0EzdnclN0QucXVlc3Rpb24lMjAuaGludC1zaWduJTdCcmlnaHQlM0EzMHB4JTNCZm9udC1zaXplJTNBMjVweCUzQmJvdHRvbSUzQTN2dyU3RC5xdWVzdGlvbi5pbi1ibGFuayUyMC5xdWVzdGlvbi10ZXh0JTdCbWFyZ2luLWJvdHRvbSUzQTEycHglN0QlN0QlNDBtZWRpYSUyMChtYXgtd2lkdGglM0ElMjA1MDBweCklN0IucXVlc3Rpb24lN0JwYWRkaW5nLXJpZ2h0JTNBNDVweCU3RC5xdWVzdGlvbiUyMC5jaGVjay1zaWduJTdCcmlnaHQlM0EyMHB4JTNCZm9udC1zaXplJTNBMjJweCU3RC5xdWVzdGlvbiUyMC5oaW50LXNpZ24lN0JyaWdodCUzQTIwcHglM0Jmb250LXNpemUlM0EyMnB4JTdELmJ1dHRvbiU3QndpZHRoJTNBMTMwcHglM0JoZWlnaHQlM0E0MHB4JTNCZm9udC1zaXplJTNBMTJweCU3RCU3RC5wcm9ncmVzc0VsZW1CRyU3QmhlaWdodCUzQTEwcHglM0JkaXNwbGF5JTNBZmxleCU3RC5wcm9ncmVzc0VsZW1CRyUyMC5wcm9ncmVzc0VsZW0lN0J3aWR0aCUzQTBweCUzQmhlaWdodCUzQTEwcHglM0JiYWNrZ3JvdW5kLWNvbG9yJTNBJTIzMjgyODI4JTNCdHJhbnNpdGlvbiUzQXdpZHRoJTIwMC40cyUyQyUyMGJhY2tncm91bmQtY29sb3IlMjAwLjRzJTNCbWFyZ2luLWxlZnQlM0E1cHglN0QucHJvZ3Jlc3NFbGVtQkclMjAucHJvZ3Jlc3NFbGVtJTNBZmlyc3QtY2hpbGQlN0Jib3JkZXItcmFkaXVzJTNBMTBweCUyMDBweCUyMDBweCUyMDEwcHglN0QucHJvZ3Jlc3NFbGVtQkclMjAucHJvZ3Jlc3NFbGVtJTNBbGFzdC1jaGlsZCU3QmJvcmRlci1yYWRpdXMlM0EwcHglMjAxMHB4JTIwMTBweCUyMDBweCU3RC5wcm9ncmVzc0VsZW1CRyUyMC5wcm9ncmVzc0VsZW1MYXN0JTdCd2lkdGglM0EwcHglM0JoZWlnaHQlM0ExMHB4JTNCYmFja2dyb3VuZC1jb2xvciUzQWdyYXklN0QlMjNudW1iZXItY29udGFpbmVyJTdCbWFyZ2luLXRvcCUzQTVweCUzQm1hcmdpbi1sZWZ0JTNBNXB4JTdELnN0YXJ0LXRleHQlMjAuc3RhcnQtdGV4dC1lbGVtJTdCdGV4dC1hbGlnbiUzQWNlbnRlciUzQm1hcmdpbiUzQTMwcHglMjAwcHglM0Jmb250LXNpemUlM0EyNXB4JTdELnN0YXJ0LXRleHQlMjAuc3RhcnQtdGV4dC1lbGVtJTNBbGFzdC1jaGlsZCU3Qm1hcmdpbi1ib3R0b20lM0E1MHB4JTdEJTBBXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=