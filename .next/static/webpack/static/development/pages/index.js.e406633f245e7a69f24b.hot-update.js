webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount /*, ...nodes */) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 2; i < arguments.length; i++) {
    walker = insert(this, walker, arguments[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/config */ "./node_modules/next-server/dist/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");














var api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");

var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_7___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig; //注意缓存在客户端和服务端公用的情况，引入isServer判断


var cacheUserRepos, cacheUserStaredRepos;
var isServer = typeof window === 'undefined';

function Index(_ref) {
  var userRepos = _ref.userRepos,
      userStaredRepos = _ref.userStaredRepos,
      user = _ref.user,
      router = _ref.router;
  console.log(userRepos, userStaredRepos, user, router);
  var tabKey = router.query.key || '1';

  var handleTabChange = function handleTabChange(activeKey) {
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/?key=".concat(activeKey));
  }; //第一次进来发现有数据就会被缓存


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if (!isServer) {
      //不是服务端的情况下，对数据进行缓存，方便再次进入不需要调接口
      cacheUserRepos = userRepos;
      cacheUserStaredRepos = userStaredRepos;
    }
  }, []);

  if (!user || !user.id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-3888340167" + " " + "root"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
      className: "jsx-3888340167"
    }, "\u4EB2\uFF0C\u60A8\u8FD8\u6CA1\u6709\u767B\u5F55\u54E6~"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      type: "primary",
      href: publicRuntimeConfig.OAUTH_URL
    }, "\u70B9\u51FB\u767B\u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "3888340167"
    }, ".root.jsx-3888340167{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ21CLEFBR3VCLGFBQ0EsMEVBQ1MsOEVBQ0MsbUdBQ0osNkZBQ3BCIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgYXBpPXJlcXVpcmUoJy4uL2xpYi9hcGknKVxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuLy/ms6jmhI/nvJPlrZjlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/lhaznlKjnmoTmg4XlhrXvvIzlvJXlhaVpc1NlcnZlcuWIpOaWrVxyXG5sZXQgY2FjaGVVc2VyUmVwb3MsY2FjaGVVc2VyU3RhcmVkUmVwb3NcclxuXHJcbmNvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3cgPT09J3VuZGVmaW5lZCdcclxuXHJcbiBmdW5jdGlvbiBJbmRleCh7dXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvcyx1c2VyLHJvdXRlcn0pe1xyXG4gIGNvbnNvbGUubG9nKHVzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3MsdXNlcixyb3V0ZXIpXHJcbiAgY29uc3QgdGFiS2V5PXJvdXRlci5xdWVyeS5rZXkgfHwgJzEnO1xyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZT0gYWN0aXZlS2V5ID0+e1xyXG4gICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKVxyXG4gIH1cclxuICAvL+esrOS4gOasoei/m+adpeWPkeeOsOacieaVsOaNruWwseS8muiiq+e8k+WtmFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzmlrnkvr/lho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6NcclxuICAgICAgY2FjaGVVc2VyUmVwb3M9dXNlclJlcG9zO1xyXG4gICAgICBjYWNoZVVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcmVkUmVwb3M7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT7ngrnlh7vnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYWNrXCI+e3VzZXIuaHRtbF91cmx9PC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucm9vdHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOjA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjojNzc3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iaW97XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmVwb3N7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OjE7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gfVxyXG4gLy/mnI3liqHnq6/lkozlrqLmiLfnq6/pg73kvJrmiafooYxcclxuIC8qKlxyXG4gICog5a6i5oi356uv5YiH5o2i5LiO6K6/6ZeuSW5kZXjpobXpnaLmnI3liqHnq6/muLLmn5Ppg73kvJrmiafooYxnZXRJbml0aWFsUHJvcHNcclxuICAqIOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAme+8jOi/kOihjOeOr+Wig+aYr+WkhOS6jm5vZGVqc+eOr+Wig++8jOiAjOS4jeaYr+WkhOS6jua1j+iniOWZqOeahOeOr+Wig1xyXG4gICog5Zyobm9kZWpz546v5aKD5LitYXhpb3MuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcp5pa55byP6K+35rGC77yM5Lya6K+35rGCJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCflnLDlnYDvvIzov5nkuKrlnLDlnYDmmI7mmL7or7fmsYLkuI3miJDlip9cclxuICAqIOino+WGs+eahOaWueW8j+aYr+ivt+axgmFwaeaXtuWIpOaWreaYr+WQpuS4uuacjeWKoeerr++8jOaPkOWPluWHuuWFrOWFseeahGxpYi9hcGkuanNcclxuICAqIOWuouaIt+err+eahOivt+axguS8muWIsHNlcnZlci9hcGkuanPkuK3lgZrlpITnkIbvvIzov5Tlm57nu5nlrqLmiLfnq69cclxuICAqIOS7peS4iuWwseaYr+WQjOaehOeahOamguW/teKAlOKAlOWwseaYr+aciemDqOWIhuS7o+eggemDveWPr+iDveS8muWcqOWuouaIt+err+WSjOacjeWKoeerr+aJp+ihjO+8jOWboOatpOi/meauteS7o+eggeWwseimgemAguW6lOa1j+iniOWZqOeahOaJp+ihjOeOr+Wig++8jOS5n+imgemAguW6lG5vZGVqc+eahOaJp+ihjOeOr+Wig++8jOWboOatpOWBmuWMuuWIhuWkhOeQhu+8jOacgOe7iOaxh+mbhuWIsOS4gOS4queCuXJlcXVlc3RHaXRodWLkuIrpnaLvvIzkv53or4HlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/pg73lj6/mraPluLjmiafooYxcclxuICAqL1xyXG4gSW5kZXguZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4LHJlZHV4U3RvcmV9KT0+e1xyXG4gIC8vICBjb25zdCByZXN1bHQ9YXdhaXQgYXhpb3NcclxuICAvLyAgLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKVxyXG4gIC8vICAudGhlbihyZXNwPT5jb25zb2xlLmxvZyhyZXNwKSlcclxuICBjb25zdCB1c2VyPXJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyOyAvL+aLv+WIsOeUqOaIt+S/oeaBr1xyXG4gIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOmZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKCFpc1NlcnZlcil7XHJcbiAgICAvL+S4jeaYr+acjeWKoeerr+eahOaDheWGteS4i++8jOWvueaVsOaNrui/m+ihjOe8k+WtmO+8jOWGjeasoei/m+WFpeS4jemcgOimgeiwg+aOpeWPo++8jOebtOaOpei/lOWbnlxyXG4gICAgaWYoY2FjaGVVc2VyUmVwb3MmJmNhY2hlVXNlclN0YXJlZFJlcG9zKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVwb3M6Y2FjaGVVc2VyUmVwb3MsXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9jdHgucmVxLGN0eC5yZXPlj6rmnInlnKjmnI3liqHnq6/muLLmn5Pml7bmiY3kvJrmnIlcclxuICAvL+iwg+eUqOW9k+WJjeeUqOaIt+eahOS7k+W6k+WIl+ihqFxyXG4gIGNvbnN0IHVzZXJSZXBvcz0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3JlcG9zJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlcyxcclxuICApXHJcbiAgLy/osIPnlKjlhbPms6jnmoTku5PlupPliJfooahcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3M9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9zdGFycmVkJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlcyxcclxuICApXHJcbiAgIHJldHVybiB7XHJcbiAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgIHVzZXJSZXBvczp1c2VyUmVwb3MuZGF0YSxcclxuICAgICB1c2VyU3RhcmVkUmVwb3M6dXNlclN0YXJlZFJlcG9zLmRhdGFcclxuICAgfVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfVxyXG4gIH0pKEluZGV4KSxcclxuKSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2096139808" + " " + "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2096139808" + " " + "user-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
    src: user.avatar_url,
    alt: "user avatar",
    className: "jsx-2096139808" + " " + "avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2096139808" + " " + "login"
  }, user.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2096139808" + " " + "name"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2096139808" + " " + "bio"
  }, user.bio), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2096139808" + " " + "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "mail",
    style: {
      marginRight: 10
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
    href: user.html_url,
    target: "_black",
    className: "jsx-2096139808"
  }, user.html_url))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2096139808" + " " + "user-repos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a, {
    activeKey: tabKey,
    onChange: handleTabChange,
    animated: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "\u4F60\u7684\u4ED3\u5E93",
    key: "1"
  }, userRepos.map(function (repo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: repo.id,
      repo: repo
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_2___default.a.TabPane, {
    tab: "\u4F60\u5173\u6CE8\u7684\u4ED3\u5E93",
    key: "2"
  }, userStaredRepos.map(function (repo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: repo.id,
      repo: repo
    });
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2096139808"
  }, ".root.jsx-2096139808{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding:20px 0;}.user-info.jsx-2096139808{width:200px;margin-right:40px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.login.jsx-2096139808{font-weight:800;font-size:20px;margin-top:20px;}.name.jsx-2096139808{font-size:16px;color:#777;}.bio.jsx-2096139808{font-size:20px;color:#333;}.avatar.jsx-2096139808{width:100%;border-radius:5px;}.user-repos.jsx-2096139808{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RXNCLEFBRzJCLEFBS0QsQUFPSSxBQUtELEFBSUEsQUFJSixBQUlDLFdBSE0sQ0FwQkEsR0FZUCxBQUlBLENBVEksVUFNaEIsQUFJQSxHQUlBLENBcEJlLENBT0UsZ0JBQ2pCLHdCQWVBLEdBN0J3QixZQU9WLDBFQUNTLHVCQVBQLGVBQ2hCLHdDQU9BIiwiZmlsZSI6IkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCdXR0b24sSWNvbixUYWJzfSBmcm9tICdhbnRkJyBcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFJvdXRlcix7d2l0aFJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMUlUgZnJvbSAnbHJ1LWNhY2hlJ1xyXG5cclxuaW1wb3J0IFJlcG8gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBvJ1xyXG5cclxuY29uc3QgYXBpPXJlcXVpcmUoJy4uL2xpYi9hcGknKVxyXG5cclxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnIH0gPSBnZXRDb25maWcoKVxyXG5cclxuLy/ms6jmhI/nvJPlrZjlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/lhaznlKjnmoTmg4XlhrXvvIzlvJXlhaVpc1NlcnZlcuWIpOaWrVxyXG5sZXQgY2FjaGVVc2VyUmVwb3MsY2FjaGVVc2VyU3RhcmVkUmVwb3NcclxuXHJcbmNvbnN0IGlzU2VydmVyPXR5cGVvZiB3aW5kb3cgPT09J3VuZGVmaW5lZCdcclxuXHJcbiBmdW5jdGlvbiBJbmRleCh7dXNlclJlcG9zLHVzZXJTdGFyZWRSZXBvcyx1c2VyLHJvdXRlcn0pe1xyXG4gIGNvbnNvbGUubG9nKHVzZXJSZXBvcyx1c2VyU3RhcmVkUmVwb3MsdXNlcixyb3V0ZXIpXHJcbiAgY29uc3QgdGFiS2V5PXJvdXRlci5xdWVyeS5rZXkgfHwgJzEnO1xyXG4gIGNvbnN0IGhhbmRsZVRhYkNoYW5nZT0gYWN0aXZlS2V5ID0+e1xyXG4gICAgIFJvdXRlci5wdXNoKGAvP2tleT0ke2FjdGl2ZUtleX1gKVxyXG4gIH1cclxuICAvL+esrOS4gOasoei/m+adpeWPkeeOsOacieaVsOaNruWwseS8muiiq+e8k+WtmFxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYoIWlzU2VydmVyKXtcclxuICAgICAgLy/kuI3mmK/mnI3liqHnq6/nmoTmg4XlhrXkuIvvvIzlr7nmlbDmja7ov5vooYznvJPlrZjvvIzmlrnkvr/lho3mrKHov5vlhaXkuI3pnIDopoHosIPmjqXlj6NcclxuICAgICAgY2FjaGVVc2VyUmVwb3M9dXNlclJlcG9zO1xyXG4gICAgICBjYWNoZVVzZXJTdGFyZWRSZXBvcz11c2VyU3RhcmVkUmVwb3M7XHJcbiAgICB9XHJcbiAgfSxbXSlcclxuICAgaWYoIXVzZXJ8fCF1c2VyLmlkKXtcclxuICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICA8cD7kurLvvIzmgqjov5jmsqHmnInnmbvlvZXlk6Z+PC9wPlxyXG4gICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGhyZWY9e3B1YmxpY1J1bnRpbWVDb25maWcuT0FVVEhfVVJMfT7ngrnlh7vnmbvlvZU8L0J1dHRvbj5cclxuICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdHtcclxuICAgICAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwidXNlciBhdmF0YXJcIiBjbGFzc05hbWU9XCJhdmF0YXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luXCI+e3VzZXIubG9naW59PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiaW9cIj57dXNlci5iaW99PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJtYWlsXCIgc3R5bGU9e3ttYXJnaW5SaWdodDoxMH19PjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYWNrXCI+e3VzZXIuaHRtbF91cmx9PC9hPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXJlcG9zXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFicyBhY3RpdmVLZXk9e3RhYktleX0gb25DaGFuZ2U9e2hhbmRsZVRhYkNoYW5nZX0gYW5pbWF0ZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDnmoTku5PlupNcIiBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgPFRhYnMuVGFiUGFuZSB0YWI9XCLkvaDlhbPms6jnmoTku5PlupNcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJTdGFyZWRSZXBvcy5tYXAocmVwbz0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJlcG8ga2V5PXtyZXBvLmlkfSByZXBvPXtyZXBvfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYnMuVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAucm9vdHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjIwcHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlci1pbmZve1xyXG4gICAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgIGZsZXgtc2hyaW5rOjA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9naW57XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmFtZXtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICBjb2xvcjojNzc3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iaW97XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzMzMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXItcmVwb3N7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OjE7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gfVxyXG4gLy/mnI3liqHnq6/lkozlrqLmiLfnq6/pg73kvJrmiafooYxcclxuIC8qKlxyXG4gICog5a6i5oi356uv5YiH5o2i5LiO6K6/6ZeuSW5kZXjpobXpnaLmnI3liqHnq6/muLLmn5Ppg73kvJrmiafooYxnZXRJbml0aWFsUHJvcHNcclxuICAqIOWcqOacjeWKoeerr+a4suafk+eahOaXtuWAme+8jOi/kOihjOeOr+Wig+aYr+WkhOS6jm5vZGVqc+eOr+Wig++8jOiAjOS4jeaYr+WkhOS6jua1j+iniOWZqOeahOeOr+Wig1xyXG4gICog5Zyobm9kZWpz546v5aKD5LitYXhpb3MuZ2V0KCcvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCcp5pa55byP6K+35rGC77yM5Lya6K+35rGCJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAvZ2l0aHViL3NlYXJjaC9yZXBvc2l0b3JpZXM/cT1yZWFjdCflnLDlnYDvvIzov5nkuKrlnLDlnYDmmI7mmL7or7fmsYLkuI3miJDlip9cclxuICAqIOino+WGs+eahOaWueW8j+aYr+ivt+axgmFwaeaXtuWIpOaWreaYr+WQpuS4uuacjeWKoeerr++8jOaPkOWPluWHuuWFrOWFseeahGxpYi9hcGkuanNcclxuICAqIOWuouaIt+err+eahOivt+axguS8muWIsHNlcnZlci9hcGkuanPkuK3lgZrlpITnkIbvvIzov5Tlm57nu5nlrqLmiLfnq69cclxuICAqIOS7peS4iuWwseaYr+WQjOaehOeahOamguW/teKAlOKAlOWwseaYr+aciemDqOWIhuS7o+eggemDveWPr+iDveS8muWcqOWuouaIt+err+WSjOacjeWKoeerr+aJp+ihjO+8jOWboOatpOi/meauteS7o+eggeWwseimgemAguW6lOa1j+iniOWZqOeahOaJp+ihjOeOr+Wig++8jOS5n+imgemAguW6lG5vZGVqc+eahOaJp+ihjOeOr+Wig++8jOWboOatpOWBmuWMuuWIhuWkhOeQhu+8jOacgOe7iOaxh+mbhuWIsOS4gOS4queCuXJlcXVlc3RHaXRodWLkuIrpnaLvvIzkv53or4HlnKjlrqLmiLfnq6/lkozmnI3liqHnq6/pg73lj6/mraPluLjmiafooYxcclxuICAqL1xyXG4gSW5kZXguZ2V0SW5pdGlhbFByb3BzPWFzeW5jICh7Y3R4LHJlZHV4U3RvcmV9KT0+e1xyXG4gIC8vICBjb25zdCByZXN1bHQ9YXdhaXQgYXhpb3NcclxuICAvLyAgLmdldCgnL2dpdGh1Yi9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9cmVhY3QnKVxyXG4gIC8vICAudGhlbihyZXNwPT5jb25zb2xlLmxvZyhyZXNwKSlcclxuICBjb25zdCB1c2VyPXJlZHV4U3RvcmUuZ2V0U3RhdGUoKS51c2VyOyAvL+aLv+WIsOeUqOaIt+S/oeaBr1xyXG4gIGlmKCF1c2VyfHwhdXNlci5pZCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0xvZ2luOmZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmKCFpc1NlcnZlcil7XHJcbiAgICAvL+S4jeaYr+acjeWKoeerr+eahOaDheWGteS4i++8jOWvueaVsOaNrui/m+ihjOe8k+WtmO+8jOWGjeasoei/m+WFpeS4jemcgOimgeiwg+aOpeWPo++8jOebtOaOpei/lOWbnlxyXG4gICAgaWYoY2FjaGVVc2VyUmVwb3MmJmNhY2hlVXNlclN0YXJlZFJlcG9zKXtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyUmVwb3M6Y2FjaGVVc2VyUmVwb3MsXHJcbiAgICAgICAgdXNlclN0YXJlZFJlcG9zOmNhY2hlVXNlclN0YXJlZFJlcG9zXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy9jdHgucmVxLGN0eC5yZXPlj6rmnInlnKjmnI3liqHnq6/muLLmn5Pml7bmiY3kvJrmnIlcclxuICAvL+iwg+eUqOW9k+WJjeeUqOaIt+eahOS7k+W6k+WIl+ihqFxyXG4gIGNvbnN0IHVzZXJSZXBvcz0gYXdhaXQgYXBpLnJlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHVybDogJy91c2VyL3JlcG9zJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlcyxcclxuICApXHJcbiAgLy/osIPnlKjlhbPms6jnmoTku5PlupPliJfooahcclxuICBjb25zdCB1c2VyU3RhcmVkUmVwb3M9IGF3YWl0IGFwaS5yZXF1ZXN0KFxyXG4gICAge1xyXG4gICAgICB1cmw6ICcvdXNlci9zdGFycmVkJyxcclxuICAgIH0sXHJcbiAgICBjdHgucmVxLFxyXG4gICAgY3R4LnJlcyxcclxuICApXHJcbiAgIHJldHVybiB7XHJcbiAgICAgaXNMb2dpbjp0cnVlLFxyXG4gICAgIHVzZXJSZXBvczp1c2VyUmVwb3MuZGF0YSxcclxuICAgICB1c2VyU3RhcmVkUmVwb3M6dXNlclN0YXJlZFJlcG9zLmRhdGFcclxuICAgfVxyXG4gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihcclxuICBjb25uZWN0KGZ1bmN0aW9uIG1hcFN0YXRlKHN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyLFxyXG4gICAgfVxyXG4gIH0pKEluZGV4KSxcclxuKSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\index.js */"));
} //服务端和客户端都会执行

/**
 * 客户端切换与访问Index页面服务端渲染都会执行getInitialProps
 * 在服务端渲染的时候，运行环境是处于nodejs环境，而不是处于浏览器的环境
 * 在nodejs环境中axios.get('/github/search/repositories?q=react')方式请求，会请求'http://localhost:80/github/search/repositories?q=react'地址，这个地址明显请求不成功
 * 解决的方式是请求api时判断是否为服务端，提取出公共的lib/api.js
 * 客户端的请求会到server/api.js中做处理，返回给客户端
 * 以上就是同构的概念——就是有部分代码都可能会在客户端和服务端执行，因此这段代码就要适应浏览器的执行环境，也要适应nodejs的执行环境，因此做区分处理，最终汇集到一个点requestGithub上面，保证在客户端和服务端都可正常执行
 */


Index.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var ctx, reduxStore, user, userRepos, userStaredRepos;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref2.ctx, reduxStore = _ref2.reduxStore;
            //  const result=await axios
            //  .get('/github/search/repositories?q=react')
            //  .then(resp=>console.log(resp))
            user = reduxStore.getState().user; //拿到用户信息

            if (!(!user || !user.id)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", {
              isLogin: false
            });

          case 4:
            if (isServer) {
              _context.next = 7;
              break;
            }

            if (!(cacheUserRepos && cacheUserStaredRepos)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", {
              userRepos: cacheUserRepos,
              userStaredRepos: cacheUserStaredRepos
            });

          case 7:
            _context.next = 9;
            return api.request({
              url: '/user/repos'
            }, ctx.req, ctx.res);

          case 9:
            userRepos = _context.sent;
            _context.next = 12;
            return api.request({
              url: '/user/starred'
            }, ctx.req, ctx.res);

          case 12:
            userStaredRepos = _context.sent;
            return _context.abrupt("return", {
              isLogin: true,
              userRepos: userRepos.data,
              userStaredRepos: userStaredRepos.data
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function mapState(state) {
  return {
    user: state.user
  };
})(Index)));

/***/ })

})
//# sourceMappingURL=index.js.e406633f245e7a69f24b.hot-update.js.map