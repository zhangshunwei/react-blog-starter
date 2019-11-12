webpackHotUpdate("styles",{

/***/ "./css/pagination.scss":
/*!*****************************!*\
  !*** ./css/pagination.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"_2zSgNI0PuygwvrxCmlpfcU","page":"_2LeDk6PIR4oZjbohHTT1xV","active":"_2zqvbBEs0BGOn9c8F4b4tE"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1572686955078");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.4edb095575bef6094226.hot-update.js.map