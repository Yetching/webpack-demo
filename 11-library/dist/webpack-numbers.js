!(function (e, o) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = o(require('lodash')))
    : 'function' == typeof define && define.amd
    ? define(['lodash'], o)
    : 'object' == typeof exports
    ? (exports.webpackNumbers = o(require('lodash')))
    : (e.webpackNumbers = o(e._));
})(globalThis, function (e) {
  return (() => {
    'use strict';
    var o = {
        74: (e, o, r) => {
          r.r(o), r.d(o, { numToWord: () => d, wordToNum: () => a });
          var t = r(607),
            n = r.n(t);
          const u = JSON.parse(
            '[{"num":1,"word":"one"},{"num":2,"word":"two"}]'
          );
          function d(e) {
            return n().reduce(u, (o, r) => (r.num === e ? r.word : o), '');
          }
          function a(e) {
            return n().reduce(
              u,
              (o, r) => (r.word === e && e.toLowerCase() ? r.num : o),
              -1
            );
          }
        },
        607: (o) => {
          o.exports = e;
        },
      },
      r = {};
    function t(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var u = (r[e] = { exports: {} });
      return o[e](u, u.exports, t), u.exports;
    }
    return (
      (t.n = (e) => {
        var o = e && e.__esModule ? () => e.default : () => e;
        return t.d(o, { a: o }), o;
      }),
      (t.d = (e, o) => {
        for (var r in o)
          t.o(o, r) &&
            !t.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: o[r] });
      }),
      (t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
      (t.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      t(74)
    );
  })();
});
