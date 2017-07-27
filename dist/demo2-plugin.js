var Demo2Plugin =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const component = __webpack_require__(1);

module.exports = {
  config: {
    adType: 'demo2',
    campaignType: 'video',
    creativeType: 'web_interstitial',
  },
  component
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(2)
}
var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(14),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3e6fc7bd",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/cades/job/vm5/vm5-adn-web-sdk-plugin-starter-kit/demos/Demo2Plugin.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Demo2Plugin.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e6fc7bd", Component.options)
  } else {
    hotAPI.reload("data-v-3e6fc7bd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("4ddf88d4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e6fc7bd\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Demo2Plugin.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e6fc7bd\",\"scoped\":true,\"hasInlineConfig\":false}!../node_modules/sass-loader/index.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Demo2Plugin.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "\n.interstitial-layout[data-v-3e6fc7bd] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 999999;\n}\n.interstitial-layout .content-box[data-v-3e6fc7bd] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    padding-top: 0;\n}\n.vm5-ad-card-interstitial-card[data-v-3e6fc7bd] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #444444;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.vm5-ad-card-interstitial-card-outer[data-v-3e6fc7bd] {\n  position: relative;\n}\n.vm5-ad-card-interstitial-card-inner[data-v-3e6fc7bd] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.vm5-ad-card-interstitial-card-content[data-v-3e6fc7bd] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 5px;\n  overflow: hidden;\n}\n.vm5-ad-card-interstitial-video-player[data-v-3e6fc7bd] {\n  position: absolute;\n  top: 18.86792%;\n  width: 100%;\n  height: 50%;\n}\n.vm5-ad-card-interstitial-card-close-button[data-v-3e6fc7bd] {\n  position: absolute;\n  right: 0;\n  bottom: 100%;\n  width: 30px;\n  height: 28px;\n  background: url(" + __webpack_require__(5) + ") center center no-repeat;\n  background-size: 22px 22px;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_raf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_raf__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

  props: {
    isPrepared: {
      type: Boolean,
      required: true
    },
    placeholderImage: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      cardWidth: 0,
      cardHeight: 0,
      containerElem: null
    };
  },

  computed: {
    backgroundImage() {
      return this.placeholderImage ? `url(${this.placeholderImage})` : 'none';
    },
    cardWidthStyle() {
      return `${this.cardWidth}px`;
    },
    cardHeightStyle() {
      return `${this.cardHeight}px`;
    },
    innerCardWidthStyle() {
      return `${this.cardWidth}px`;
    },
    innerCardHeightStyle() {
      return `${this.cardHeight}px`;
    }
  },

  methods: {
    onCloseTapped() {
      this.containerElem.style.transform = 'rotateY(0deg)';
      setTimeout(() => this.$emit('close'), 1000);
    },

    onCardTapped() {
      logMessage('onCardTapped');
      this.$emit('cta');
    },

    checkCardContainerSize() {
      const vm = this;
      const wrapper = vm.$refs.interstitialWrapper;
      if (!wrapper) return;
      const viewportW = wrapper.clientWidth;
      const viewportH = wrapper.clientHeight;

      const minHorizontalMargin = 11;
      const minVerticalMargin = 28;

      let cardWidth = viewportW - minHorizontalMargin * 2;
      let cardHeight = cardWidth / (2 / 3);

      if (cardHeight > viewportH - minVerticalMargin * 2) {
        cardHeight = viewportH - minVerticalMargin * 2;
        cardWidth = cardHeight * (2 / 3);
      }

      vm.cardWidth = cardWidth;
      vm.cardHeight = cardHeight;
    },

    prepareFlipCard() {
      console.warn('flip card start');
      var container = document.getElementsByTagName('body')[0];
      container.className += ' flipcard-container';
      var originalContent = document.getElementsByClassName('page-container')[0];
      originalContent.className += ' flipcard-original-content';
      var adContent = this.$el.parentNode.parentNode.parentNode;
      adContent.className += ' flipcard-ad-content';

      setContainerStyle(container);
      setFlipCardStyle(originalContent);
      setFlipCardStyle(adContent);
      setFlipCardBackSideStyle(adContent);

      function setContainerStyle(elem) {
        elem.style.position = 'relative';
        elem.style.width = screen.width + 'px';
        elem.style.height = screen.height + 'px';
        elem.style.transformStyle = 'preserve-3d';
        elem.style.transition = 'all 1.0s linear';
      }

      function setFlipCardStyle(elem) {
        elem.style.position = 'absolute';
        elem.style.width = '100%';
        elem.style.height = '100%';
        elem.style.backfaceVisibility = 'hidden';
      }

      function setFlipCardBackSideStyle(elem) {
        elem.style.display = 'block';
        elem.style.transform = 'rotateY(180deg)';
        elem.style.boxSizing = 'border-box';
      }

      console.warn('flip card done');
      return container;
    }
  },

  watch: {
    isPrepared() {
      this.$emit('videoEnterViewport');
      const containerElem = this.prepareFlipCard();
      this.containerElem = containerElem;
      setTimeout(() => {
        containerElem.style.transform = 'rotateY(180deg)';
      }, 1000);
    }
  },

  mounted() {
    const vm = this;

    __WEBPACK_IMPORTED_MODULE_0_raf___default()(function checkCardSize() {
      vm.checkCardContainerSize();
      __WEBPACK_IMPORTED_MODULE_0_raf___default()(checkCardSize);
    });
  }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(12)
  , root = typeof window === 'undefined' ? global : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function() {
  root.requestAnimationFrame = raf
  root.cancelAnimationFrame = caf
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "interstitial-layout"
  }, [_c('div', {
    staticClass: "content-box"
  }, [_c('div', {
    ref: "interstitialWrapper",
    staticClass: "vm5-ad-card-interstitial-card"
  }, [_c('div', {
    staticClass: "vm5-ad-card-interstitial-card-outer",
    style: ({
      width: _vm.cardWidthStyle,
      height: _vm.cardHeightStyle
    })
  }, [_c('div', {
    staticClass: "vm5-ad-card-interstitial-card-inner",
    style: ({
      width: _vm.innerCardWidthStyle,
      height: _vm.innerCardHeightStyle
    })
  }, [_c('div', {
    staticClass: "vm5-ad-card-interstitial-card-content",
    style: ({
      backgroundImage: _vm.backgroundImage
    }),
    on: {
      "click": _vm.onCardTapped
    }
  }, [_c('div', {
    staticClass: "vm5-ad-card-interstitial-video-player"
  }, [_vm._t("player", [_vm._v("'This will only be displayed if there is no content to be distributed.'")])], 2)]), (_vm.cardWidth > 0 && _vm.cardHeight > 0) ? _c('div', {
    staticClass: "vm5-ad-card-interstitial-card-close-button",
    on: {
      "click": _vm.onCloseTapped
    }
  }) : _vm._e()]), (_vm.cardWidth > 0 && _vm.cardHeight > 0) ? _vm._t("vm5-logo", null, {
    size: "27px",
    iconSize: "24px",
    alignRight: "align-right",
    alignBottom: "align-bottom"
  }) : _vm._e()], 2)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e6fc7bd", module.exports)
  }
}

/***/ })
/******/ ]);