// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/products.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var results, data, products;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("./data/products.json");

          case 3:
            results = _context.sent;
            _context.next = 6;
            return results.json();

          case 6:
            data = _context.sent;
            products = data.products;
            return _context.abrupt("return", products);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getProducts() {
    return _ref.apply(this, arguments);
  };
}();
/*
=============
Load Category Products
=============
 */


var categoryCenter = document.querySelector(".category__center");
window.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  var products;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getProducts();

        case 2:
          products = _context2.sent;
          displayProductItems(products);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

var displayProductItems = function displayProductItems(items) {
  var displayProduct = items.map(function (product) {
    return " \n                  <div class=\"product category__products\">\n                    <div class=\"product__header\">\n                      <img src=".concat(product.image, " alt=\"product\">\n                    </div>\n                    <div class=\"product__footer\">\n                      <h3>").concat(product.title, "</h3>\n                      <div class=\"rating\">\n                        <svg>\n                          <use xlink:href=\"./images/sprite.svg#icon-star-full\"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href=\"./images/sprite.svg#icon-star-full\"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href=\"./images/sprite.svg#icon-star-full\"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href=\"./images/sprite.svg#icon-star-full\"></use>\n                        </svg>\n                        <svg>\n                          <use xlink:href=\"./images/sprite.svg#icon-star-empty\"></use>\n                        </svg>\n                      </div>\n                      <div class=\"product__price\">\n                        <h4>$").concat(product.price, "</h4>\n                      </div>\n                      <a href=\"#\"><button type=\"submit\" class=\"product__btn\">Add To Cart</button></a>\n                    </div>\n                  <ul>\n                      <li>\n                        <a data-tip=\"Quick View\" data-place=\"left\" href=\"#\">\n                          <svg>\n                            <use xlink:href=\"./images/sprite.svg#icon-eye\"></use>\n                          </svg>\n                        </a>\n                      </li>\n                      <li>\n                        <a data-tip=\"Add To Wishlist\" data-place=\"left\" href=\"#\">\n                          <svg>\n                            <use xlink:href=\"./images/sprite.svg#icon-heart-o\"></use>\n                          </svg>\n                        </a>\n                      </li>\n                      <li>\n                        <a data-tip=\"Add To Compare\" data-place=\"left\" href=\"#\">\n                          <svg>\n                            <use xlink:href=\"./images/sprite.svg#icon-loop2\"></use>\n                          </svg>\n                        </a>\n                      </li>\n                  </ul>\n                  </div>\n                  ");
  });
  displayProduct = displayProduct.join("");

  if (categoryCenter) {
    categoryCenter.innerHTML = displayProduct;
  }
};
/*
=============
Filtering
=============
 */


var filterBtn = document.querySelectorAll(".filter-btn");
var categoryContainer = document.getElementById("category");

if (categoryContainer) {
  categoryContainer.addEventListener("click", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
      var target, id, products, menuCategory;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              target = e.target.closest(".section__title");

              if (target) {
                _context3.next = 3;
                break;
              }

              return _context3.abrupt("return");

            case 3:
              id = target.dataset.id;
              _context3.next = 6;
              return getProducts();

            case 6:
              products = _context3.sent;

              if (id) {
                // remove active from buttons
                Array.from(filterBtn).forEach(function (btn) {
                  btn.classList.remove("active");
                });
                target.classList.add("active"); // Load Products

                menuCategory = products.filter(function (product) {
                  if (product.category === id) {
                    return product;
                  }
                });

                if (id === "All Products") {
                  displayProductItems(products);
                } else {
                  displayProductItems(menuCategory);
                }
              }

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }());
}
/*
=============
Product Details Left
=============
 */


var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic5 = document.getElementById("pic5");
var picContainer = document.querySelector(".product__pictures");
var zoom = document.getElementById("zoom");
var pic = document.getElementById("pic"); // Picture List

var picList = [pic1, pic2, pic3, pic4, pic5]; // Active Picture

var picActive = 1;
["mouseover", "touchstart"].forEach(function (event) {
  if (picContainer) {
    picContainer.addEventListener(event, function (e) {
      var target = e.target.closest("img");
      if (!target) return;
      var id = target.id.slice(3);
      changeImage("./images/products/iPhone/iphone".concat(id, ".jpeg"), id);
    });
  }
}); // change active image

var changeImage = function changeImage(imgSrc, n) {
  // change the main image
  pic.src = imgSrc; // change the background-image

  zoom.style.backgroundImage = "url(".concat(imgSrc, ")"); //   remove the border from the previous active side image

  picList[picActive - 1].classList.remove("img-active"); // add to the active image

  picList[n - 1].classList.add("img-active"); //   update the active side picture

  picActive = n;
};
/*
=============
Product Details Bottom
=============
 */


var btns = document.querySelectorAll(".detail-btn");
var detail = document.querySelector(".product-detail__bottom");
var contents = document.querySelectorAll(".content");

if (detail) {
  detail.addEventListener("click", function (e) {
    var target = e.target.closest(".detail-btn");
    if (!target) return;
    var id = target.dataset.id;

    if (id) {
      Array.from(btns).forEach(function (btn) {
        // remove active from all btn
        btn.classList.remove("active");
        e.target.closest(".detail-btn").classList.add("active");
      }); // hide other active

      Array.from(contents).forEach(function (content) {
        content.classList.remove("active");
      });
      var element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
},{}],"../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51652" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","js/products.js"], null)
//# sourceMappingURL=/products.556f8683.js.map