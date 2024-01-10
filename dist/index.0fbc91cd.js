// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aJ0Tr":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6e8a5cd20fbc91cd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fFaKF":[function(require,module,exports) {
// HighwayJS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "highway", ()=>highway);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
//My Custom Transitions
var _transitions = require("./transitions");
var _transitionsDefault = parcelHelpers.interopDefault(_transitions);
var _renderer = require("./renderer");
const highway = new (0, _highwayDefault.default).Core({
    transitions: {
        default: (0, _transitionsDefault.default)
    },
    renderers: {
        "blogs-page": (0, _renderer.BlogsRenderer)
    }
});

},{"@dogstudio/highway":"26LRT","./transitions":"jJ3Qo","./renderer":"1bM7w","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26LRT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function t() {}
t.prototype = {
    on: function(t, e, r) {
        var i = this.e || (this.e = {});
        return (i[t] || (i[t] = [])).push({
            fn: e,
            ctx: r
        }), this;
    },
    once: function(t, e, r) {
        var i = this;
        function n() {
            i.off(t, n), e.apply(r, arguments);
        }
        return n._ = e, this.on(t, n, r);
    },
    emit: function(t) {
        for(var e = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, n = r.length; i < n; i++)r[i].fn.apply(r[i].ctx, e);
        return this;
    },
    off: function(t, e) {
        var r = this.e || (this.e = {}), i = r[t], n = [];
        if (i && e) for(var o = 0, s = i.length; o < s; o++)i[o].fn !== e && i[o].fn._ !== e && n.push(i[o]);
        return n.length ? r[t] = n : delete r[t], this;
    }
};
var e = t;
e.TinyEmitter = t;
var r = function(t) {
    this.wrap = document.querySelector("[data-router-wrapper]"), this.properties = t, this.Transition = t.transition ? new t.transition.class(this.wrap, t.transition.name) : null;
};
r.prototype.setup = function() {
    this.onEnter && this.onEnter(), this.onEnterCompleted && this.onEnterCompleted();
}, r.prototype.add = function() {
    this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML);
}, r.prototype.update = function() {
    document.title = this.properties.page.title;
}, r.prototype.show = function(t) {
    var e = this;
    return new Promise(function(r) {
        try {
            function i(t) {
                e.onEnterCompleted && e.onEnterCompleted(), r();
            }
            return e.update(), e.onEnter && e.onEnter(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.show(t)).then(i) : i());
        } catch (t) {
            return Promise.reject(t);
        }
    });
}, r.prototype.hide = function(t) {
    var e = this;
    return new Promise(function(r) {
        try {
            function i(t) {
                e.onLeaveCompleted && e.onLeaveCompleted(), r();
            }
            return e.onLeave && e.onLeave(), Promise.resolve(e.Transition ? Promise.resolve(e.Transition.hide(t)).then(i) : i());
        } catch (t) {
            return Promise.reject(t);
        }
    });
};
var i = new window.DOMParser, n = function(t, e) {
    this.renderers = t, this.transitions = e;
};
n.prototype.getOrigin = function(t) {
    var e = t.match(/(https?:\/\/[\w\-.]+)/);
    return e ? e[1].replace(/https?:\/\//, "") : null;
}, n.prototype.getPathname = function(t) {
    var e = t.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
    return e ? e[1] : "/";
}, n.prototype.getAnchor = function(t) {
    var e = t.match(/(#.*)$/);
    return e ? e[1] : null;
}, n.prototype.getParams = function(t) {
    var e = t.match(/\?([\w_\-.=&]+)/);
    if (!e) return null;
    for(var r = e[1].split("&"), i = {}, n = 0; n < r.length; n++){
        var o = r[n].split("=");
        i[o[0]] = o[1];
    }
    return i;
}, n.prototype.getDOM = function(t) {
    return "string" == typeof t ? i.parseFromString(t, "text/html") : t;
}, n.prototype.getView = function(t) {
    return t.querySelector("[data-router-view]");
}, n.prototype.getSlug = function(t) {
    return t.getAttribute("data-router-view");
}, n.prototype.getRenderer = function(t) {
    if (!this.renderers) return Promise.resolve(r);
    if (t in this.renderers) {
        var e = this.renderers[t];
        return "function" != typeof e || r.isPrototypeOf(e) ? "function" == typeof e.then ? Promise.resolve(e).then(function(t) {
            return t.default;
        }) : Promise.resolve(e) : Promise.resolve(e()).then(function(t) {
            return t.default;
        });
    }
    return Promise.resolve(r);
}, n.prototype.getTransition = function(t) {
    return this.transitions ? t in this.transitions ? {
        class: this.transitions[t],
        name: t
    } : "default" in this.transitions ? {
        class: this.transitions.default,
        name: "default"
    } : null : null;
}, n.prototype.getProperties = function(t) {
    var e = this.getDOM(t), r = this.getView(e), i = this.getSlug(r);
    return {
        page: e,
        view: r,
        slug: i,
        renderer: this.getRenderer(i, this.renderers),
        transition: this.getTransition(i, this.transitions)
    };
}, n.prototype.getLocation = function(t) {
    return {
        href: t,
        anchor: this.getAnchor(t),
        origin: this.getOrigin(t),
        params: this.getParams(t),
        pathname: this.getPathname(t)
    };
};
var o = function(t) {
    function e(e) {
        var r = this;
        void 0 === e && (e = {});
        var i = e.renderers, o = e.transitions;
        t.call(this), this.Helpers = new n(i, o), this.Transitions = o, this.Contextual = !1, this.location = this.Helpers.getLocation(window.location.href), this.properties = this.Helpers.getProperties(document.cloneNode(!0)), this.popping = !1, this.running = !1, this.trigger = null, this.cache = new Map, this.cache.set(this.location.href, this.properties), this.properties.renderer.then(function(t) {
            r.From = new t(r.properties), r.From.setup();
        }), this._navigate = this.navigate.bind(this), window.addEventListener("popstate", this.popState.bind(this)), this.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), this.attach(this.links);
    }
    return t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e, e.prototype.attach = function(t) {
        for(var e = 0, r = t; e < r.length; e += 1)r[e].addEventListener("click", this._navigate);
    }, e.prototype.detach = function(t) {
        for(var e = 0, r = t; e < r.length; e += 1)r[e].removeEventListener("click", this._navigate);
    }, e.prototype.navigate = function(t) {
        if (!t.metaKey && !t.ctrlKey) {
            t.preventDefault();
            var e = !!t.currentTarget.hasAttribute("data-transition") && t.currentTarget.dataset.transition;
            this.redirect(t.currentTarget.href, e, t.currentTarget);
        }
    }, e.prototype.redirect = function(t, e, r) {
        if (void 0 === e && (e = !1), void 0 === r && (r = "script"), this.trigger = r, !this.running && t !== this.location.href) {
            var i = this.Helpers.getLocation(t);
            this.Contextual = !1, e && (this.Contextual = this.Transitions.contextual[e].prototype, this.Contextual.name = e), i.origin !== this.location.origin || i.anchor && i.pathname === this.location.pathname ? window.location.href = t : (this.location = i, this.beforeFetch());
        }
    }, e.prototype.popState = function() {
        this.trigger = "popstate", this.Contextual = !1;
        var t = this.Helpers.getLocation(window.location.href);
        this.location.pathname !== t.pathname || !this.location.anchor && !t.anchor ? (this.popping = !0, this.location = t, this.beforeFetch()) : this.location = t;
    }, e.prototype.pushState = function() {
        this.popping || window.history.pushState(this.location, "", this.location.href);
    }, e.prototype.fetch = function() {
        try {
            var t = this;
            return Promise.resolve(fetch(t.location.href, {
                mode: "same-origin",
                method: "GET",
                headers: {
                    "X-Requested-With": "Highway"
                },
                credentials: "same-origin"
            })).then(function(e) {
                if (e.status >= 200 && e.status < 300) return e.text();
                window.location.href = t.location.href;
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }, e.prototype.beforeFetch = function() {
        try {
            var t = this;
            function e() {
                t.afterFetch();
            }
            t.pushState(), t.running = !0, t.emit("NAVIGATE_OUT", {
                from: {
                    page: t.From.properties.page,
                    view: t.From.properties.view
                },
                trigger: t.trigger,
                location: t.location
            });
            var r = {
                trigger: t.trigger,
                contextual: t.Contextual
            }, i = t.cache.has(t.location.href) ? Promise.resolve(t.From.hide(r)).then(function() {
                t.properties = t.cache.get(t.location.href);
            }) : Promise.resolve(Promise.all([
                t.fetch(),
                t.From.hide(r)
            ])).then(function(e) {
                t.properties = t.Helpers.getProperties(e[0]), t.cache.set(t.location.href, t.properties);
            });
            return Promise.resolve(i && i.then ? i.then(e) : e());
        } catch (t) {
            return Promise.reject(t);
        }
    }, e.prototype.afterFetch = function() {
        try {
            var t = this;
            return Promise.resolve(t.properties.renderer).then(function(e) {
                return t.To = new e(t.properties), t.To.add(), t.emit("NAVIGATE_IN", {
                    to: {
                        page: t.To.properties.page,
                        view: t.To.wrap.lastElementChild
                    },
                    trigger: t.trigger,
                    location: t.location
                }), Promise.resolve(t.To.show({
                    trigger: t.trigger,
                    contextual: t.Contextual
                })).then(function() {
                    t.popping = !1, t.running = !1, t.detach(t.links), t.links = document.querySelectorAll("a:not([target]):not([data-router-disabled])"), t.attach(t.links), t.emit("NAVIGATE_END", {
                        to: {
                            page: t.To.properties.page,
                            view: t.To.wrap.lastElementChild
                        },
                        from: {
                            page: t.From.properties.page,
                            view: t.From.properties.view
                        },
                        trigger: t.trigger,
                        location: t.location
                    }), t.From = t.To, t.trigger = null;
                });
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }, e;
}(e), s = function(t, e) {
    this.wrap = t, this.name = e;
};
s.prototype.show = function(t) {
    var e = this, r = t.trigger, i = t.contextual, n = this.wrap.lastElementChild, o = this.wrap.firstElementChild;
    return new Promise(function(t) {
        i ? (n.setAttribute("data-transition-in", i.name), n.removeAttribute("data-transition-out", i.name), i.in && i.in({
            to: n,
            from: o,
            trigger: r,
            done: t
        })) : (n.setAttribute("data-transition-in", e.name), n.removeAttribute("data-transition-out", e.name), e.in && e.in({
            to: n,
            from: o,
            trigger: r,
            done: t
        }));
    });
}, s.prototype.hide = function(t) {
    var e = this, r = t.trigger, i = t.contextual, n = this.wrap.firstElementChild;
    return new Promise(function(t) {
        i ? (n.setAttribute("data-transition-out", i.name), n.removeAttribute("data-transition-in", i.name), i.out && i.out({
            from: n,
            trigger: r,
            done: t
        })) : (n.setAttribute("data-transition-out", e.name), n.removeAttribute("data-transition-in", e.name), e.out && e.out({
            from: n,
            trigger: r,
            done: t
        }));
    });
}, console.log("Highway v2.2.0");
exports.default = {
    Core: o,
    Helpers: n,
    Renderer: r,
    Transition: s
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jJ3Qo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
class CustomTransition extends (0, _highwayDefault.default).Transition {
    // Built-in methods
    in({ from, to, trigger, done }) {
        // [...]
        if (trigger === "popstate") from.remove();
        window.setTimeout(()=>{
            from.remove();
            done();
        }, 1500);
    }
    out({ from, trigger, done }) {
        // [...]
        done();
    }
}
// Don`t forget to export your transition
exports.default = CustomTransition;

},{"@dogstudio/highway":"26LRT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1bM7w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BlogsRenderer", ()=>BlogsRenderer);
var _highway = require("@dogstudio/highway");
var _highwayDefault = parcelHelpers.interopDefault(_highway);
var _blog = require("./blog");
class BlogsRenderer extends (0, _highwayDefault.default).Renderer {
    onEnter() {
        console.log("In here");
        (0, _blog.loadBlogs)();
    }
}

},{"@dogstudio/highway":"26LRT","./blog":"iTnKt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTnKt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadBlogs", ()=>loadBlogs);
var _blogs = require("../pages/blogs/blogs");
async function loadBlogs() {
    let blogsHtml = ``;
    (0, _blogs.blogs).map((blog)=>{
        blogsHtml += `
        <div class="flex items-center border rounded-xl bg-white shadow-md">
                        <div class="w-1/3 h-full relative flex overflow-hidden">
                            <div class="absolute w-full">
                                <div class="">
                                    <img src="data:image/png;base64,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"
                                        class="rounded-full aspect-square object-cover -ml-10 -mt-8" />
                                </div>
                            </div>
                        </div>
                        <div class="w-2/3 flex h-full flex-col justify-center flex-wrap gap-y-5 py-5 pr-5">
                            <a href="${blog.data.slug}.html">
                                <div class="text-[#697480] font-dmono font-extrabold text-2xl">
                                    ${blog?.data?.title}
                                </div>
                            </a>
                            <div class="text-gray-800">
                                ${blog?.data?.description}
                            </div>
                            <div class="flex gap-x-2">
                                ${blog?.data?.tags?.map((tag)=>{
            return '<div class="text-[#A25D76] bg-[#ecdfe4] p-1 px-2 rounded-md border border-[#A25D76]">' + tag + "</div>";
        }).join("")}
                            </div>
                        </div>
                    </div>
        `;
    });
    document.getElementById("blogs").innerHTML += blogsHtml;
}

},{"../pages/blogs/blogs":"kFFUy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kFFUy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blogs", ()=>blogs);
const blogs = [
    {
        "content": "<h1>Hello world Twice!</h1>",
        "data": {
            "title": "How to integrate the Mpesa STK push API in Nodejs",
            "description": "By the end of this guide, you should be able to integrate the Mpesa express API in Nodejs and express. You will achieve this in several steps",
            "slug": "example-two",
            "tags": [
                "beginner",
                "cool"
            ]
        },
        "isEmpty": false,
        "excerpt": "",
        "id": "example-two.markdown"
    },
    {
        "content": "<h1>Hello world Twice!</h1>",
        "data": {
            "title": "How to download large files on Linux from the terminal",
            "description": "Are you tired of waiting forever for large files to download on Linux? The terminal has some powerful tools that can help you maximize your bandwidth.",
            "slug": "example-one",
            "tags": [
                "beginner",
                "cool"
            ]
        },
        "isEmpty": false,
        "excerpt": "",
        "id": "third-example.markdown"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aJ0Tr","fFaKF"], "fFaKF", "parcelRequire4699")

//# sourceMappingURL=index.0fbc91cd.js.map
