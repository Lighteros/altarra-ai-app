"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2663],
  {
    77805: function (t, e, n) {
      n.d(e, {
        k: function () {
          return X;
        },
      });
      var r = n(70947),
        i = n(86006),
        a = n(13751),
        o = n(48348),
        u = n(75779),
        s = n(70094),
        c = n.n(s),
        f = n(67901);
      let l = "error",
        h = "".concat("wc", "@2:").concat("universal_provider", ":"),
        p = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      var v = "u" > typeof globalThis ? globalThis : window,
        d = { exports: {} };
      /**
       * @license
       * Lodash <https://lodash.com/>
       * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
       * Released under MIT license <https://lodash.com/license>
       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
       */ !(function (t, e) {
        (function () {
          var n,
            r = "Expected a function",
            i = "__lodash_hash_undefined__",
            a = "__lodash_placeholder__",
            o = 1 / 0,
            u = 0 / 0,
            s = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            c = "[object Arguments]",
            f = "[object Array]",
            l = "[object Boolean]",
            h = "[object Date]",
            p = "[object Error]",
            d = "[object Function]",
            g = "[object GeneratorFunction]",
            _ = "[object Map]",
            m = "[object Number]",
            y = "[object Object]",
            w = "[object Promise]",
            b = "[object RegExp]",
            P = "[object Set]",
            C = "[object String]",
            I = "[object Symbol]",
            A = "[object WeakMap]",
            E = "[object ArrayBuffer]",
            j = "[object DataView]",
            x = "[object Float32Array]",
            O = "[object Float64Array]",
            H = "[object Int8Array]",
            S = "[object Int16Array]",
            k = "[object Int32Array]",
            N = "[object Uint8Array]",
            D = "[object Uint8ClampedArray]",
            q = "[object Uint16Array]",
            R = "[object Uint32Array]",
            z = /\b__p \+= '';/g,
            L = /\b(__p \+=) '' \+/g,
            U = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            T = /&(?:amp|lt|gt|quot|#39);/g,
            W = /[&<>"']/g,
            M = RegExp(T.source),
            F = RegExp(W.source),
            B = /<%-([\s\S]+?)%>/g,
            $ = /<%([\s\S]+?)%>/g,
            G = /<%=([\s\S]+?)%>/g,
            Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            J = /^\w*$/,
            K =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            V = /[\\^$.*+?()[\]{}|]/g,
            Y = RegExp(V.source),
            Q = /^\s+/,
            X = /\s/,
            tt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            te = /\{\n\/\* \[wrapped with (.+)\] \*/,
            tn = /,? & /,
            tr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            ti = /[()=,{}\[\]\/\s]/,
            ta = /\\(\\)?/g,
            to = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            tu = /\w*$/,
            ts = /^[-+]0x[0-9a-f]+$/i,
            tc = /^0b[01]+$/i,
            tf = /^\[object .+?Constructor\]$/,
            tl = /^0o[0-7]+$/i,
            th = /^(?:0|[1-9]\d*)$/,
            tp = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            tv = /($^)/,
            td = /['\n\r\u2028\u2029\\]/g,
            tg = "\ud800-\udfff",
            t_ = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            tm = "\\u2700-\\u27bf",
            ty = "a-z\\xdf-\\xf6\\xf8-\\xff",
            tw = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            tb = "\\ufe0e\\ufe0f",
            tP =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            tC = "['’]",
            tI = "[" + tP + "]",
            tA = "[" + t_ + "]",
            tE = "[" + ty + "]",
            tj = "[^" + tg + tP + "\\d+" + tm + ty + tw + "]",
            tx = "\ud83c[\udffb-\udfff]",
            tO = "[^" + tg + "]",
            tH = "(?:\ud83c[\udde6-\uddff]){2}",
            tS = "[\ud800-\udbff][\udc00-\udfff]",
            tk = "[" + tw + "]",
            tN = "\\u200d",
            tD = "(?:" + tE + "|" + tj + ")",
            tq = "(?:" + tC + "(?:d|ll|m|re|s|t|ve))?",
            tR = "(?:" + tC + "(?:D|LL|M|RE|S|T|VE))?",
            tz = "(?:" + tA + "|" + tx + ")?",
            tL = "[" + tb + "]?",
            tU =
              "(?:" +
              tN +
              "(?:" +
              [tO, tH, tS].join("|") +
              ")" +
              tL +
              tz +
              ")*",
            tT = tL + tz + tU,
            tW = "(?:" + ["[" + tm + "]", tH, tS].join("|") + ")" + tT,
            tM =
              "(?:" +
              [tO + tA + "?", tA, tH, tS, "[" + tg + "]"].join("|") +
              ")",
            tF = RegExp(tC, "g"),
            tB = RegExp(tA, "g"),
            t$ = RegExp(tx + "(?=" + tx + ")|" + tM + tT, "g"),
            tG = RegExp(
              [
                tk +
                  "?" +
                  tE +
                  "+" +
                  tq +
                  "(?=" +
                  [tI, tk, "$"].join("|") +
                  ")",
                "(?:" +
                  tk +
                  "|" +
                  tj +
                  ")+" +
                  tR +
                  "(?=" +
                  [tI, tk + tD, "$"].join("|") +
                  ")",
                tk + "?" + tD + "+" + tq,
                tk + "+" + tR,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                tW,
              ].join("|"),
              "g"
            ),
            tZ = RegExp("[" + tN + tg + t_ + tb + "]"),
            tJ =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            tK = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            tV = -1,
            tY = {};
          (tY[x] =
            tY[O] =
            tY[H] =
            tY[S] =
            tY[k] =
            tY[N] =
            tY[D] =
            tY[q] =
            tY[R] =
              !0),
            (tY[c] =
              tY[f] =
              tY[E] =
              tY[l] =
              tY[j] =
              tY[h] =
              tY[p] =
              tY[d] =
              tY[_] =
              tY[m] =
              tY[y] =
              tY[b] =
              tY[P] =
              tY[C] =
              tY[A] =
                !1);
          var tQ = {};
          (tQ[c] =
            tQ[f] =
            tQ[E] =
            tQ[j] =
            tQ[l] =
            tQ[h] =
            tQ[x] =
            tQ[O] =
            tQ[H] =
            tQ[S] =
            tQ[k] =
            tQ[_] =
            tQ[m] =
            tQ[y] =
            tQ[b] =
            tQ[P] =
            tQ[C] =
            tQ[I] =
            tQ[N] =
            tQ[D] =
            tQ[q] =
            tQ[R] =
              !0),
            (tQ[p] = tQ[d] = tQ[A] = !1);
          var tX = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            t0 = parseFloat,
            t1 = parseInt,
            t2 = "object" == typeof v && v && v.Object === Object && v,
            t9 =
              "object" == typeof self && self && self.Object === Object && self,
            t3 = t2 || t9 || Function("return this")(),
            t4 = e && !e.nodeType && e,
            t7 = t4 && t && !t.nodeType && t,
            t6 = t7 && t7.exports === t4,
            t8 = t6 && t2.process,
            t5 = (function () {
              try {
                return (
                  (t7 && t7.require && t7.require("util").types) ||
                  (t8 && t8.binding && t8.binding("util"))
                );
              } catch (t) {}
            })(),
            et = t5 && t5.isArrayBuffer,
            ee = t5 && t5.isDate,
            en = t5 && t5.isMap,
            er = t5 && t5.isRegExp,
            ei = t5 && t5.isSet,
            ea = t5 && t5.isTypedArray;
          function eo(t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e);
              case 1:
                return t.call(e, n[0]);
              case 2:
                return t.call(e, n[0], n[1]);
              case 3:
                return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
          }
          function eu(t, e, n, r) {
            for (var i = -1, a = null == t ? 0 : t.length; ++i < a; ) {
              var o = t[i];
              e(r, o, n(o), t);
            }
            return r;
          }
          function es(t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length;
              ++n < r && !1 !== e(t[n], n, t);

            );
            return t;
          }
          function ec(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (!e(t[n], n, t)) return !1;
            return !0;
          }
          function ef(t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length, i = 0, a = [];
              ++n < r;

            ) {
              var o = t[n];
              e(o, n, t) && (a[i++] = o);
            }
            return a;
          }
          function el(t, e) {
            return !!(null == t ? 0 : t.length) && eb(t, e, 0) > -1;
          }
          function eh(t, e, n) {
            for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
              if (n(e, t[r])) return !0;
            return !1;
          }
          function ep(t, e) {
            for (
              var n = -1, r = null == t ? 0 : t.length, i = Array(r);
              ++n < r;

            )
              i[n] = e(t[n], n, t);
            return i;
          }
          function ev(t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; )
              t[i + n] = e[n];
            return t;
          }
          function ed(t, e, n, r) {
            var i = -1,
              a = null == t ? 0 : t.length;
            for (r && a && (n = t[++i]); ++i < a; ) n = e(n, t[i], i, t);
            return n;
          }
          function eg(t, e, n, r) {
            var i = null == t ? 0 : t.length;
            for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t);
            return n;
          }
          function e_(t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
              if (e(t[n], n, t)) return !0;
            return !1;
          }
          var em = eA("length");
          function ey(t, e, n) {
            var r;
            return (
              n(t, function (t, n, i) {
                if (e(t, n, i)) return (r = n), !1;
              }),
              r
            );
          }
          function ew(t, e, n, r) {
            for (var i = t.length, a = n + (r ? 1 : -1); r ? a-- : ++a < i; )
              if (e(t[a], a, t)) return a;
            return -1;
          }
          function eb(t, e, n) {
            return e == e
              ? (function (t, e, n) {
                  for (var r = n - 1, i = t.length; ++r < i; )
                    if (t[r] === e) return r;
                  return -1;
                })(t, e, n)
              : ew(t, eC, n);
          }
          function eP(t, e, n, r) {
            for (var i = n - 1, a = t.length; ++i < a; )
              if (r(t[i], e)) return i;
            return -1;
          }
          function eC(t) {
            return t != t;
          }
          function eI(t, e) {
            var n = null == t ? 0 : t.length;
            return n ? ex(t, e) / n : u;
          }
          function eA(t) {
            return function (e) {
              return null == e ? n : e[t];
            };
          }
          function eE(t) {
            return function (e) {
              return null == t ? n : t[e];
            };
          }
          function ej(t, e, n, r, i) {
            return (
              i(t, function (t, i, a) {
                n = r ? ((r = !1), t) : e(n, t, i, a);
              }),
              n
            );
          }
          function ex(t, e) {
            for (var r, i = -1, a = t.length; ++i < a; ) {
              var o = e(t[i]);
              o !== n && (r = r === n ? o : r + o);
            }
            return r;
          }
          function eO(t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
          }
          function eH(t) {
            return t && t.slice(0, eG(t) + 1).replace(Q, "");
          }
          function eS(t) {
            return function (e) {
              return t(e);
            };
          }
          function ek(t, e) {
            return ep(e, function (e) {
              return t[e];
            });
          }
          function eN(t, e) {
            return t.has(e);
          }
          function eD(t, e) {
            for (var n = -1, r = t.length; ++n < r && eb(e, t[n], 0) > -1; );
            return n;
          }
          function eq(t, e) {
            for (var n = t.length; n-- && eb(e, t[n], 0) > -1; );
            return n;
          }
          var eR = eE({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            ez = eE({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function eL(t) {
            return "\\" + tX[t];
          }
          function eU(t) {
            return tZ.test(t);
          }
          function eT(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t, r) {
                n[++e] = [r, t];
              }),
              n
            );
          }
          function eW(t, e) {
            return function (n) {
              return t(e(n));
            };
          }
          function eM(t, e) {
            for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
              var u = t[n];
              (u === e || u === a) && ((t[n] = a), (o[i++] = n));
            }
            return o;
          }
          function eF(t) {
            var e = -1,
              n = Array(t.size);
            return (
              t.forEach(function (t) {
                n[++e] = t;
              }),
              n
            );
          }
          function eB(t) {
            return eU(t)
              ? (function (t) {
                  for (var e = (t$.lastIndex = 0); t$.test(t); ) ++e;
                  return e;
                })(t)
              : em(t);
          }
          function e$(t) {
            return eU(t) ? t.match(t$) || [] : t.split("");
          }
          function eG(t) {
            for (var e = t.length; e-- && X.test(t.charAt(e)); );
            return e;
          }
          var eZ = eE({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            eJ = (function t(e) {
              var v,
                X,
                tg,
                t_,
                tm = (e =
                  null == e ? t3 : eJ.defaults(t3.Object(), e, eJ.pick(t3, tK)))
                  .Array,
                ty = e.Date,
                tw = e.Error,
                tb = e.Function,
                tP = e.Math,
                tC = e.Object,
                tI = e.RegExp,
                tA = e.String,
                tE = e.TypeError,
                tj = tm.prototype,
                tx = tb.prototype,
                tO = tC.prototype,
                tH = e["__core-js_shared__"],
                tS = tx.toString,
                tk = tO.hasOwnProperty,
                tN = 0,
                tD = (v = /[^.]+$/.exec(
                  (tH && tH.keys && tH.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + v
                  : "",
                tq = tO.toString,
                tR = tS.call(tC),
                tz = t3._,
                tL = tI(
                  "^" +
                    tS
                      .call(tk)
                      .replace(V, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                tU = t6 ? e.Buffer : n,
                tT = e.Symbol,
                tW = e.Uint8Array,
                tM = tU ? tU.allocUnsafe : n,
                t$ = eW(tC.getPrototypeOf, tC),
                tZ = tC.create,
                tX = tO.propertyIsEnumerable,
                t2 = tj.splice,
                t9 = tT ? tT.isConcatSpreadable : n,
                t4 = tT ? tT.iterator : n,
                t7 = tT ? tT.toStringTag : n,
                t8 = (function () {
                  try {
                    var t = iv(tC, "defineProperty");
                    return t({}, "", {}), t;
                  } catch (t) {}
                })(),
                t5 = e.clearTimeout !== t3.clearTimeout && e.clearTimeout,
                em = ty && ty.now !== t3.Date.now && ty.now,
                eE = e.setTimeout !== t3.setTimeout && e.setTimeout,
                eK = tP.ceil,
                eV = tP.floor,
                eY = tC.getOwnPropertySymbols,
                eQ = tU ? tU.isBuffer : n,
                eX = e.isFinite,
                e0 = tj.join,
                e1 = eW(tC.keys, tC),
                e2 = tP.max,
                e9 = tP.min,
                e3 = ty.now,
                e4 = e.parseInt,
                e7 = tP.random,
                e6 = tj.reverse,
                e8 = iv(e, "DataView"),
                e5 = iv(e, "Map"),
                nt = iv(e, "Promise"),
                ne = iv(e, "Set"),
                nn = iv(e, "WeakMap"),
                nr = iv(tC, "create"),
                ni = nn && new nn(),
                na = {},
                no = iU(e8),
                nu = iU(e5),
                ns = iU(nt),
                nc = iU(ne),
                nf = iU(nn),
                nl = tT ? tT.prototype : n,
                nh = nl ? nl.valueOf : n,
                np = nl ? nl.toString : n;
              function nv(t) {
                if (aG(t) && !aq(t) && !(t instanceof nm)) {
                  if (t instanceof n_) return t;
                  if (tk.call(t, "__wrapped__")) return iT(t);
                }
                return new n_(t);
              }
              var nd = (function () {
                function t() {}
                return function (e) {
                  if (!a$(e)) return {};
                  if (tZ) return tZ(e);
                  t.prototype = e;
                  var r = new t();
                  return (t.prototype = n), r;
                };
              })();
              function ng() {}
              function n_(t, e) {
                (this.__wrapped__ = t),
                  (this.__actions__ = []),
                  (this.__chain__ = !!e),
                  (this.__index__ = 0),
                  (this.__values__ = n);
              }
              function nm(t) {
                (this.__wrapped__ = t),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function ny(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n; ) {
                  var r = t[e];
                  this.set(r[0], r[1]);
                }
              }
              function nw(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n; ) {
                  var r = t[e];
                  this.set(r[0], r[1]);
                }
              }
              function nb(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.clear(); ++e < n; ) {
                  var r = t[e];
                  this.set(r[0], r[1]);
                }
              }
              function nP(t) {
                var e = -1,
                  n = null == t ? 0 : t.length;
                for (this.__data__ = new nb(); ++e < n; ) this.add(t[e]);
              }
              function nC(t) {
                var e = (this.__data__ = new nw(t));
                this.size = e.size;
              }
              function nI(t, e) {
                var n = aq(t),
                  r = !n && aD(t),
                  i = !n && !r && aU(t),
                  a = !n && !r && !i && a0(t),
                  o = n || r || i || a,
                  u = o ? eO(t.length, tA) : [],
                  s = u.length;
                for (var c in t)
                  (e || tk.call(t, c)) &&
                    !(
                      o &&
                      ("length" == c ||
                        (i && ("offset" == c || "parent" == c)) ||
                        (a &&
                          ("buffer" == c ||
                            "byteLength" == c ||
                            "byteOffset" == c)) ||
                        ib(c, s))
                    ) &&
                    u.push(c);
                return u;
              }
              function nA(t) {
                var e = t.length;
                return e ? t[rc(0, e - 1)] : n;
              }
              function nE(t, e, r) {
                ((r === n || aS(t[e], r)) && (r !== n || e in t)) ||
                  nS(t, e, r);
              }
              function nj(t, e, r) {
                var i = t[e];
                (tk.call(t, e) && aS(i, r) && (r !== n || e in t)) ||
                  nS(t, e, r);
              }
              function nx(t, e) {
                for (var n = t.length; n--; ) if (aS(t[n][0], e)) return n;
                return -1;
              }
              function nO(t, e, n, r) {
                return (
                  nL(t, function (t, i, a) {
                    e(r, t, n(t), a);
                  }),
                  r
                );
              }
              function nH(t, e) {
                return t && rW(e, oh(e), t);
              }
              function nS(t, e, n) {
                "__proto__" == e && t8
                  ? t8(t, e, {
                      configurable: !0,
                      enumerable: !0,
                      value: n,
                      writable: !0,
                    })
                  : (t[e] = n);
              }
              function nk(t, e) {
                for (
                  var r = -1, i = e.length, a = tm(i), o = null == t;
                  ++r < i;

                )
                  a[r] = o ? n : ou(t, e[r]);
                return a;
              }
              function nN(t, e, r) {
                return (
                  t == t &&
                    (r !== n && (t = t <= r ? t : r),
                    e !== n && (t = t >= e ? t : e)),
                  t
                );
              }
              function nD(t, e, r, i, a, o) {
                var u,
                  s = 1 & e,
                  f = 2 & e,
                  p = 4 & e;
                if ((r && (u = a ? r(t, i, a, o) : r(t)), u !== n)) return u;
                if (!a$(t)) return t;
                var v = aq(t);
                if (v) {
                  if (
                    ((w = t.length),
                    (A = new t.constructor(w)),
                    w &&
                      "string" == typeof t[0] &&
                      tk.call(t, "index") &&
                      ((A.index = t.index), (A.input = t.input)),
                    (u = A),
                    !s)
                  )
                    return rT(t, u);
                } else {
                  var w,
                    A,
                    z,
                    L,
                    U,
                    T = i_(t),
                    W = T == d || T == g;
                  if (aU(t)) return rD(t, s);
                  if (T == y || T == c || (W && !a)) {
                    if (((u = f || W ? {} : iy(t)), !s))
                      return f
                        ? ((z = (U = u) && rW(t, op(t), U)), rW(t, ig(t), z))
                        : ((L = nH(u, t)), rW(t, id(t), L));
                  } else {
                    if (!tQ[T]) return a ? t : {};
                    u = (function (t, e, n) {
                      var r,
                        i,
                        a = t.constructor;
                      switch (e) {
                        case E:
                          return rq(t);
                        case l:
                        case h:
                          return new a(+t);
                        case j:
                          return (
                            (r = n ? rq(t.buffer) : t.buffer),
                            new t.constructor(r, t.byteOffset, t.byteLength)
                          );
                        case x:
                        case O:
                        case H:
                        case S:
                        case k:
                        case N:
                        case D:
                        case q:
                        case R:
                          return rR(t, n);
                        case _:
                          return new a();
                        case m:
                        case C:
                          return new a(t);
                        case b:
                          return (
                            ((i = new t.constructor(
                              t.source,
                              tu.exec(t)
                            )).lastIndex = t.lastIndex),
                            i
                          );
                        case P:
                          return new a();
                        case I:
                          return nh ? tC(nh.call(t)) : {};
                      }
                    })(t, T, s);
                  }
                }
                o || (o = new nC());
                var M = o.get(t);
                if (M) return M;
                o.set(t, u),
                  aY(t)
                    ? t.forEach(function (n) {
                        u.add(nD(n, e, r, n, t, o));
                      })
                    : aZ(t) &&
                      t.forEach(function (n, i) {
                        u.set(i, nD(n, e, r, i, t, o));
                      });
                var F = p ? (f ? io : ia) : f ? op : oh,
                  B = v ? n : F(t);
                return (
                  es(B || t, function (n, i) {
                    B && (n = t[(i = n)]), nj(u, i, nD(n, e, r, i, t, o));
                  }),
                  u
                );
              }
              function nq(t, e, r) {
                var i = r.length;
                if (null == t) return !i;
                for (t = tC(t); i--; ) {
                  var a = r[i],
                    o = e[a],
                    u = t[a];
                  if ((u === n && !(a in t)) || !o(u)) return !1;
                }
                return !0;
              }
              function nR(t, e, i) {
                if ("function" != typeof t) throw new tE(r);
                return ik(function () {
                  t.apply(n, i);
                }, e);
              }
              function nz(t, e, n, r) {
                var i = -1,
                  a = el,
                  o = !0,
                  u = t.length,
                  s = [],
                  c = e.length;
                if (!u) return s;
                n && (e = ep(e, eS(n))),
                  r
                    ? ((a = eh), (o = !1))
                    : e.length >= 200 && ((a = eN), (o = !1), (e = new nP(e)));
                t: for (; ++i < u; ) {
                  var f = t[i],
                    l = null == n ? f : n(f);
                  if (((f = r || 0 !== f ? f : 0), o && l == l)) {
                    for (var h = c; h--; ) if (e[h] === l) continue t;
                    s.push(f);
                  } else a(e, l, r) || s.push(f);
                }
                return s;
              }
              (nv.templateSettings = {
                escape: B,
                evaluate: $,
                interpolate: G,
                variable: "",
                imports: { _: nv },
              }),
                (nv.prototype = ng.prototype),
                (nv.prototype.constructor = nv),
                (n_.prototype = nd(ng.prototype)),
                (n_.prototype.constructor = n_),
                (nm.prototype = nd(ng.prototype)),
                (nm.prototype.constructor = nm),
                (ny.prototype.clear = function () {
                  (this.__data__ = nr ? nr(null) : {}), (this.size = 0);
                }),
                (ny.prototype.delete = function (t) {
                  var e = this.has(t) && delete this.__data__[t];
                  return (this.size -= e ? 1 : 0), e;
                }),
                (ny.prototype.get = function (t) {
                  var e = this.__data__;
                  if (nr) {
                    var r = e[t];
                    return r === i ? n : r;
                  }
                  return tk.call(e, t) ? e[t] : n;
                }),
                (ny.prototype.has = function (t) {
                  var e = this.__data__;
                  return nr ? e[t] !== n : tk.call(e, t);
                }),
                (ny.prototype.set = function (t, e) {
                  var r = this.__data__;
                  return (
                    (this.size += this.has(t) ? 0 : 1),
                    (r[t] = nr && e === n ? i : e),
                    this
                  );
                }),
                (nw.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (nw.prototype.delete = function (t) {
                  var e = this.__data__,
                    n = nx(e, t);
                  return (
                    !(n < 0) &&
                    (n == e.length - 1 ? e.pop() : t2.call(e, n, 1),
                    --this.size,
                    !0)
                  );
                }),
                (nw.prototype.get = function (t) {
                  var e = this.__data__,
                    r = nx(e, t);
                  return r < 0 ? n : e[r][1];
                }),
                (nw.prototype.has = function (t) {
                  return nx(this.__data__, t) > -1;
                }),
                (nw.prototype.set = function (t, e) {
                  var n = this.__data__,
                    r = nx(n, t);
                  return (
                    r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this
                  );
                }),
                (nb.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new ny(),
                      map: new (e5 || nw)(),
                      string: new ny(),
                    });
                }),
                (nb.prototype.delete = function (t) {
                  var e = ih(this, t).delete(t);
                  return (this.size -= e ? 1 : 0), e;
                }),
                (nb.prototype.get = function (t) {
                  return ih(this, t).get(t);
                }),
                (nb.prototype.has = function (t) {
                  return ih(this, t).has(t);
                }),
                (nb.prototype.set = function (t, e) {
                  var n = ih(this, t),
                    r = n.size;
                  return n.set(t, e), (this.size += n.size == r ? 0 : 1), this;
                }),
                (nP.prototype.add = nP.prototype.push =
                  function (t) {
                    return this.__data__.set(t, i), this;
                  }),
                (nP.prototype.has = function (t) {
                  return this.__data__.has(t);
                }),
                (nC.prototype.clear = function () {
                  (this.__data__ = new nw()), (this.size = 0);
                }),
                (nC.prototype.delete = function (t) {
                  var e = this.__data__,
                    n = e.delete(t);
                  return (this.size = e.size), n;
                }),
                (nC.prototype.get = function (t) {
                  return this.__data__.get(t);
                }),
                (nC.prototype.has = function (t) {
                  return this.__data__.has(t);
                }),
                (nC.prototype.set = function (t, e) {
                  var n = this.__data__;
                  if (n instanceof nw) {
                    var r = n.__data__;
                    if (!e5 || r.length < 199)
                      return r.push([t, e]), (this.size = ++n.size), this;
                    n = this.__data__ = new nb(r);
                  }
                  return n.set(t, e), (this.size = n.size), this;
                });
              var nL = rB(nG),
                nU = rB(nZ, !0);
              function nT(t, e) {
                var n = !0;
                return (
                  nL(t, function (t, r, i) {
                    return (n = !!e(t, r, i));
                  }),
                  n
                );
              }
              function nW(t, e, r) {
                for (var i = -1, a = t.length; ++i < a; ) {
                  var o = t[i],
                    u = e(o);
                  if (null != u && (s === n ? u == u && !aX(u) : r(u, s)))
                    var s = u,
                      c = o;
                }
                return c;
              }
              function nM(t, e) {
                var n = [];
                return (
                  nL(t, function (t, r, i) {
                    e(t, r, i) && n.push(t);
                  }),
                  n
                );
              }
              function nF(t, e, n, r, i) {
                var a = -1,
                  o = t.length;
                for (n || (n = iw), i || (i = []); ++a < o; ) {
                  var u = t[a];
                  e > 0 && n(u)
                    ? e > 1
                      ? nF(u, e - 1, n, r, i)
                      : ev(i, u)
                    : r || (i[i.length] = u);
                }
                return i;
              }
              var nB = r$(),
                n$ = r$(!0);
              function nG(t, e) {
                return t && nB(t, e, oh);
              }
              function nZ(t, e) {
                return t && n$(t, e, oh);
              }
              function nJ(t, e) {
                return ef(e, function (e) {
                  return aM(t[e]);
                });
              }
              function nK(t, e) {
                e = rS(e, t);
                for (var r = 0, i = e.length; null != t && r < i; )
                  t = t[iL(e[r++])];
                return r && r == i ? t : n;
              }
              function nV(t, e, n) {
                var r = e(t);
                return aq(t) ? r : ev(r, n(t));
              }
              function nY(t) {
                return null == t
                  ? t === n
                    ? "[object Undefined]"
                    : "[object Null]"
                  : t7 && t7 in tC(t)
                  ? (function (t) {
                      var e = tk.call(t, t7),
                        r = t[t7];
                      try {
                        t[t7] = n;
                        var i = !0;
                      } catch (t) {}
                      var a = tq.call(t);
                      return i && (e ? (t[t7] = r) : delete t[t7]), a;
                    })(t)
                  : tq.call(t);
              }
              function nQ(t, e) {
                return t > e;
              }
              function nX(t, e) {
                return null != t && tk.call(t, e);
              }
              function n0(t, e) {
                return null != t && e in tC(t);
              }
              function n1(t, e, r) {
                for (
                  var i = r ? eh : el,
                    a = t[0].length,
                    o = t.length,
                    u = o,
                    s = tm(o),
                    c = 1 / 0,
                    f = [];
                  u--;

                ) {
                  var l = t[u];
                  u && e && (l = ep(l, eS(e))),
                    (c = e9(l.length, c)),
                    (s[u] =
                      !r && (e || (a >= 120 && l.length >= 120))
                        ? new nP(u && l)
                        : n);
                }
                l = t[0];
                var h = -1,
                  p = s[0];
                t: for (; ++h < a && f.length < c; ) {
                  var v = l[h],
                    d = e ? e(v) : v;
                  if (
                    ((v = r || 0 !== v ? v : 0), !(p ? eN(p, d) : i(f, d, r)))
                  ) {
                    for (u = o; --u; ) {
                      var g = s[u];
                      if (!(g ? eN(g, d) : i(t[u], d, r))) continue t;
                    }
                    p && p.push(d), f.push(v);
                  }
                }
                return f;
              }
              function n2(t, e, r) {
                e = rS(e, t);
                var i = null == (t = iO(t, e)) ? t : t[iL(iY(e))];
                return null == i ? n : eo(i, t, r);
              }
              function n9(t) {
                return aG(t) && nY(t) == c;
              }
              function n3(t, e, r, i, a) {
                return (
                  t === e ||
                  (null != t && null != e && (aG(t) || aG(e))
                    ? (function (t, e, r, i, a, o) {
                        var u = aq(t),
                          s = aq(e),
                          v = u ? f : i_(t),
                          d = s ? f : i_(e);
                        (v = v == c ? y : v), (d = d == c ? y : d);
                        var g = v == y,
                          w = d == y,
                          A = v == d;
                        if (A && aU(t)) {
                          if (!aU(e)) return !1;
                          (u = !0), (g = !1);
                        }
                        if (A && !g)
                          return (
                            o || (o = new nC()),
                            u || a0(t)
                              ? ir(t, e, r, i, a, o)
                              : (function (t, e, n, r, i, a, o) {
                                  switch (n) {
                                    case j:
                                      if (
                                        t.byteLength != e.byteLength ||
                                        t.byteOffset != e.byteOffset
                                      )
                                        break;
                                      (t = t.buffer), (e = e.buffer);
                                    case E:
                                      return !(
                                        t.byteLength != e.byteLength ||
                                        !a(new tW(t), new tW(e))
                                      );
                                    case l:
                                    case h:
                                    case m:
                                      return aS(+t, +e);
                                    case p:
                                      return (
                                        t.name == e.name &&
                                        t.message == e.message
                                      );
                                    case b:
                                    case C:
                                      return t == e + "";
                                    case _:
                                      var u = eT;
                                    case P:
                                      var s = 1 & r;
                                      if (
                                        (u || (u = eF), t.size != e.size && !s)
                                      )
                                        break;
                                      var c = o.get(t);
                                      if (c) return c == e;
                                      (r |= 2), o.set(t, e);
                                      var f = ir(u(t), u(e), r, i, a, o);
                                      return o.delete(t), f;
                                    case I:
                                      if (nh) return nh.call(t) == nh.call(e);
                                  }
                                  return !1;
                                })(t, e, v, r, i, a, o)
                          );
                        if (!(1 & r)) {
                          var x = g && tk.call(t, "__wrapped__"),
                            O = w && tk.call(e, "__wrapped__");
                          if (x || O) {
                            var H = x ? t.value() : t,
                              S = O ? e.value() : e;
                            return o || (o = new nC()), a(H, S, r, i, o);
                          }
                        }
                        return (
                          !!A &&
                          (o || (o = new nC()),
                          (function (t, e, r, i, a, o) {
                            var u = 1 & r,
                              s = ia(t),
                              c = s.length;
                            if (c != ia(e).length && !u) return !1;
                            for (var f = c; f--; ) {
                              var l = s[f];
                              if (!(u ? l in e : tk.call(e, l))) return !1;
                            }
                            var h = o.get(t),
                              p = o.get(e);
                            if (h && p) return h == e && p == t;
                            var v = !0;
                            o.set(t, e), o.set(e, t);
                            for (var d = u; ++f < c; ) {
                              var g = t[(l = s[f])],
                                _ = e[l];
                              if (i)
                                var m = u
                                  ? i(_, g, l, e, t, o)
                                  : i(g, _, l, t, e, o);
                              if (
                                !(m === n ? g === _ || a(g, _, r, i, o) : m)
                              ) {
                                v = !1;
                                break;
                              }
                              d || (d = "constructor" == l);
                            }
                            if (v && !d) {
                              var y = t.constructor,
                                w = e.constructor;
                              y != w &&
                                "constructor" in t &&
                                "constructor" in e &&
                                !(
                                  "function" == typeof y &&
                                  y instanceof y &&
                                  "function" == typeof w &&
                                  w instanceof w
                                ) &&
                                (v = !1);
                            }
                            return o.delete(t), o.delete(e), v;
                          })(t, e, r, i, a, o))
                        );
                      })(t, e, r, i, n3, a)
                    : t != t && e != e)
                );
              }
              function n4(t, e, r, i) {
                var a = r.length,
                  o = a,
                  u = !i;
                if (null == t) return !o;
                for (t = tC(t); a--; ) {
                  var s = r[a];
                  if (u && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1;
                }
                for (; ++a < o; ) {
                  var c = (s = r[a])[0],
                    f = t[c],
                    l = s[1];
                  if (u && s[2]) {
                    if (f === n && !(c in t)) return !1;
                  } else {
                    var h = new nC();
                    if (i) var p = i(f, l, c, t, e, h);
                    if (!(p === n ? n3(l, f, 3, i, h) : p)) return !1;
                  }
                }
                return !0;
              }
              function n7(t) {
                return (
                  !(!a$(t) || (tD && tD in t)) && (aM(t) ? tL : tf).test(iU(t))
                );
              }
              function n6(t) {
                return "function" == typeof t
                  ? t
                  : null == t
                  ? oL
                  : "object" == typeof t
                  ? aq(t)
                    ? rn(t[0], t[1])
                    : re(t)
                  : oZ(t);
              }
              function n8(t) {
                if (!iE(t)) return e1(t);
                var e = [];
                for (var n in tC(t))
                  tk.call(t, n) && "constructor" != n && e.push(n);
                return e;
              }
              function n5(t, e) {
                return t < e;
              }
              function rt(t, e) {
                var n = -1,
                  r = az(t) ? tm(t.length) : [];
                return (
                  nL(t, function (t, i, a) {
                    r[++n] = e(t, i, a);
                  }),
                  r
                );
              }
              function re(t) {
                var e = ip(t);
                return 1 == e.length && e[0][2]
                  ? ij(e[0][0], e[0][1])
                  : function (n) {
                      return n === t || n4(n, t, e);
                    };
              }
              function rn(t, e) {
                var r;
                return iC(t) && (r = e) == r && !a$(r)
                  ? ij(iL(t), e)
                  : function (r) {
                      var i = ou(r, t);
                      return i === n && i === e ? os(r, t) : n3(e, i, 3);
                    };
              }
              function rr(t, e, r, i, a) {
                t !== e &&
                  nB(
                    e,
                    function (o, u) {
                      if ((a || (a = new nC()), a$(o)))
                        !(function (t, e, r, i, a, o, u) {
                          var s = iH(t, r),
                            c = iH(e, r),
                            f = u.get(c);
                          if (f) {
                            nE(t, r, f);
                            return;
                          }
                          var l = o ? o(s, c, r + "", t, e, u) : n,
                            h = l === n;
                          if (h) {
                            var p = aq(c),
                              v = !p && aU(c),
                              d = !p && !v && a0(c);
                            (l = c),
                              p || v || d
                                ? aq(s)
                                  ? (l = s)
                                  : aL(s)
                                  ? (l = rT(s))
                                  : v
                                  ? ((h = !1), (l = rD(c, !0)))
                                  : d
                                  ? ((h = !1), (l = rR(c, !0)))
                                  : (l = [])
                                : aK(c) || aD(c)
                                ? ((l = s),
                                  aD(s)
                                    ? (l = a8(s))
                                    : (!a$(s) || aM(s)) && (l = iy(c)))
                                : (h = !1);
                          }
                          h && (u.set(c, l), a(l, c, i, o, u), u.delete(c)),
                            nE(t, r, l);
                        })(t, e, u, r, rr, i, a);
                      else {
                        var s = i ? i(iH(t, u), o, u + "", t, e, a) : n;
                        s === n && (s = o), nE(t, u, s);
                      }
                    },
                    op
                  );
              }
              function ri(t, e) {
                var r = t.length;
                if (r) return ib((e += e < 0 ? r : 0), r) ? t[e] : n;
              }
              function ra(t, e, n) {
                e = e.length
                  ? ep(e, function (t) {
                      return aq(t)
                        ? function (e) {
                            return nK(e, 1 === t.length ? t[0] : t);
                          }
                        : t;
                    })
                  : [oL];
                var r = -1;
                return (
                  (e = ep(e, eS(il()))),
                  (function (t, e) {
                    var n = t.length;
                    for (t.sort(e); n--; ) t[n] = t[n].value;
                    return t;
                  })(
                    rt(t, function (t, n, i) {
                      return {
                        criteria: ep(e, function (e) {
                          return e(t);
                        }),
                        index: ++r,
                        value: t,
                      };
                    }),
                    function (t, e) {
                      return (function (t, e, n) {
                        for (
                          var r = -1,
                            i = t.criteria,
                            a = e.criteria,
                            o = i.length,
                            u = n.length;
                          ++r < o;

                        ) {
                          var s = rz(i[r], a[r]);
                          if (s) {
                            if (r >= u) return s;
                            return s * ("desc" == n[r] ? -1 : 1);
                          }
                        }
                        return t.index - e.index;
                      })(t, e, n);
                    }
                  )
                );
              }
              function ro(t, e, n) {
                for (var r = -1, i = e.length, a = {}; ++r < i; ) {
                  var o = e[r],
                    u = nK(t, o);
                  n(u, o) && rh(a, rS(o, t), u);
                }
                return a;
              }
              function ru(t, e, n, r) {
                var i = r ? eP : eb,
                  a = -1,
                  o = e.length,
                  u = t;
                for (t === e && (e = rT(e)), n && (u = ep(t, eS(n))); ++a < o; )
                  for (
                    var s = 0, c = e[a], f = n ? n(c) : c;
                    (s = i(u, f, s, r)) > -1;

                  )
                    u !== t && t2.call(u, s, 1), t2.call(t, s, 1);
                return t;
              }
              function rs(t, e) {
                for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                  var i = e[n];
                  if (n == r || i !== a) {
                    var a = i;
                    ib(i) ? t2.call(t, i, 1) : rC(t, i);
                  }
                }
                return t;
              }
              function rc(t, e) {
                return t + eV(e7() * (e - t + 1));
              }
              function rf(t, e) {
                var n = "";
                if (!t || e < 1 || e > 9007199254740991) return n;
                do e % 2 && (n += t), (e = eV(e / 2)) && (t += t);
                while (e);
                return n;
              }
              function rl(t, e) {
                return iN(ix(t, e, oL), t + "");
              }
              function rh(t, e, r, i) {
                if (!a$(t)) return t;
                e = rS(e, t);
                for (
                  var a = -1, o = e.length, u = o - 1, s = t;
                  null != s && ++a < o;

                ) {
                  var c = iL(e[a]),
                    f = r;
                  if (
                    "__proto__" === c ||
                    "constructor" === c ||
                    "prototype" === c
                  )
                    break;
                  if (a != u) {
                    var l = s[c];
                    (f = i ? i(l, c, s) : n) === n &&
                      (f = a$(l) ? l : ib(e[a + 1]) ? [] : {});
                  }
                  nj(s, c, f), (s = s[c]);
                }
                return t;
              }
              var rp = ni
                  ? function (t, e) {
                      return ni.set(t, e), t;
                    }
                  : oL,
                rv = t8
                  ? function (t, e) {
                      return t8(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: oq(e),
                        writable: !0,
                      });
                    }
                  : oL;
              function rd(t, e, n) {
                var r = -1,
                  i = t.length;
                e < 0 && (e = -e > i ? 0 : i + e),
                  (n = n > i ? i : n) < 0 && (n += i),
                  (i = e > n ? 0 : (n - e) >>> 0),
                  (e >>>= 0);
                for (var a = tm(i); ++r < i; ) a[r] = t[r + e];
                return a;
              }
              function rg(t, e) {
                var n;
                return (
                  nL(t, function (t, r, i) {
                    return !(n = e(t, r, i));
                  }),
                  !!n
                );
              }
              function r_(t, e, n) {
                var r = 0,
                  i = null == t ? r : t.length;
                if ("number" == typeof e && e == e && i <= 2147483647) {
                  for (; r < i; ) {
                    var a = (r + i) >>> 1,
                      o = t[a];
                    null !== o && !aX(o) && (n ? o <= e : o < e)
                      ? (r = a + 1)
                      : (i = a);
                  }
                  return i;
                }
                return rm(t, e, oL, n);
              }
              function rm(t, e, r, i) {
                var a = 0,
                  o = null == t ? 0 : t.length;
                if (0 === o) return 0;
                e = r(e);
                for (
                  var u = e != e, s = null === e, c = aX(e), f = e === n;
                  a < o;

                ) {
                  var l = eV((a + o) / 2),
                    h = r(t[l]),
                    p = h !== n,
                    v = null === h,
                    d = h == h,
                    g = aX(h);
                  if (u) var _ = i || d;
                  else
                    _ = f
                      ? d && (i || p)
                      : s
                      ? d && p && (i || !v)
                      : c
                      ? d && p && !v && (i || !g)
                      : !v && !g && (i ? h <= e : h < e);
                  _ ? (a = l + 1) : (o = l);
                }
                return e9(o, 4294967294);
              }
              function ry(t, e) {
                for (var n = -1, r = t.length, i = 0, a = []; ++n < r; ) {
                  var o = t[n],
                    u = e ? e(o) : o;
                  if (!n || !aS(u, s)) {
                    var s = u;
                    a[i++] = 0 === o ? 0 : o;
                  }
                }
                return a;
              }
              function rw(t) {
                return "number" == typeof t ? t : aX(t) ? u : +t;
              }
              function rb(t) {
                if ("string" == typeof t) return t;
                if (aq(t)) return ep(t, rb) + "";
                if (aX(t)) return np ? np.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -o ? "-0" : e;
              }
              function rP(t, e, n) {
                var r = -1,
                  i = el,
                  a = t.length,
                  o = !0,
                  u = [],
                  s = u;
                if (n) (o = !1), (i = eh);
                else if (a >= 200) {
                  var c = e ? null : r7(t);
                  if (c) return eF(c);
                  (o = !1), (i = eN), (s = new nP());
                } else s = e ? [] : u;
                t: for (; ++r < a; ) {
                  var f = t[r],
                    l = e ? e(f) : f;
                  if (((f = n || 0 !== f ? f : 0), o && l == l)) {
                    for (var h = s.length; h--; ) if (s[h] === l) continue t;
                    e && s.push(l), u.push(f);
                  } else i(s, l, n) || (s !== u && s.push(l), u.push(f));
                }
                return u;
              }
              function rC(t, e) {
                return (
                  (e = rS(e, t)), null == (t = iO(t, e)) || delete t[iL(iY(e))]
                );
              }
              function rI(t, e, n, r) {
                return rh(t, e, n(nK(t, e)), r);
              }
              function rA(t, e, n, r) {
                for (
                  var i = t.length, a = r ? i : -1;
                  (r ? a-- : ++a < i) && e(t[a], a, t);

                );
                return n
                  ? rd(t, r ? 0 : a, r ? a + 1 : i)
                  : rd(t, r ? a + 1 : 0, r ? i : a);
              }
              function rE(t, e) {
                var n = t;
                return (
                  n instanceof nm && (n = n.value()),
                  ed(
                    e,
                    function (t, e) {
                      return e.func.apply(e.thisArg, ev([t], e.args));
                    },
                    n
                  )
                );
              }
              function rj(t, e, n) {
                var r = t.length;
                if (r < 2) return r ? rP(t[0]) : [];
                for (var i = -1, a = tm(r); ++i < r; )
                  for (var o = t[i], u = -1; ++u < r; )
                    u != i && (a[i] = nz(a[i] || o, t[u], e, n));
                return rP(nF(a, 1), e, n);
              }
              function rx(t, e, r) {
                for (
                  var i = -1, a = t.length, o = e.length, u = {};
                  ++i < a;

                ) {
                  var s = i < o ? e[i] : n;
                  r(u, t[i], s);
                }
                return u;
              }
              function rO(t) {
                return aL(t) ? t : [];
              }
              function rH(t) {
                return "function" == typeof t ? t : oL;
              }
              function rS(t, e) {
                return aq(t) ? t : iC(t, e) ? [t] : iz(a5(t));
              }
              function rk(t, e, r) {
                var i = t.length;
                return (r = r === n ? i : r), !e && r >= i ? t : rd(t, e, r);
              }
              var rN =
                t5 ||
                function (t) {
                  return t3.clearTimeout(t);
                };
              function rD(t, e) {
                if (e) return t.slice();
                var n = t.length,
                  r = tM ? tM(n) : new t.constructor(n);
                return t.copy(r), r;
              }
              function rq(t) {
                var e = new t.constructor(t.byteLength);
                return new tW(e).set(new tW(t)), e;
              }
              function rR(t, e) {
                var n = e ? rq(t.buffer) : t.buffer;
                return new t.constructor(n, t.byteOffset, t.length);
              }
              function rz(t, e) {
                if (t !== e) {
                  var r = t !== n,
                    i = null === t,
                    a = t == t,
                    o = aX(t),
                    u = e !== n,
                    s = null === e,
                    c = e == e,
                    f = aX(e);
                  if (
                    (!s && !f && !o && t > e) ||
                    (o && u && c && !s && !f) ||
                    (i && u && c) ||
                    (!r && c) ||
                    !a
                  )
                    return 1;
                  if (
                    (!i && !o && !f && t < e) ||
                    (f && r && a && !i && !o) ||
                    (s && r && a) ||
                    (!u && a) ||
                    !c
                  )
                    return -1;
                }
                return 0;
              }
              function rL(t, e, n, r) {
                for (
                  var i = -1,
                    a = t.length,
                    o = n.length,
                    u = -1,
                    s = e.length,
                    c = e2(a - o, 0),
                    f = tm(s + c),
                    l = !r;
                  ++u < s;

                )
                  f[u] = e[u];
                for (; ++i < o; ) (l || i < a) && (f[n[i]] = t[i]);
                for (; c--; ) f[u++] = t[i++];
                return f;
              }
              function rU(t, e, n, r) {
                for (
                  var i = -1,
                    a = t.length,
                    o = -1,
                    u = n.length,
                    s = -1,
                    c = e.length,
                    f = e2(a - u, 0),
                    l = tm(f + c),
                    h = !r;
                  ++i < f;

                )
                  l[i] = t[i];
                for (var p = i; ++s < c; ) l[p + s] = e[s];
                for (; ++o < u; ) (h || i < a) && (l[p + n[o]] = t[i++]);
                return l;
              }
              function rT(t, e) {
                var n = -1,
                  r = t.length;
                for (e || (e = tm(r)); ++n < r; ) e[n] = t[n];
                return e;
              }
              function rW(t, e, r, i) {
                var a = !r;
                r || (r = {});
                for (var o = -1, u = e.length; ++o < u; ) {
                  var s = e[o],
                    c = i ? i(r[s], t[s], s, r, t) : n;
                  c === n && (c = t[s]), a ? nS(r, s, c) : nj(r, s, c);
                }
                return r;
              }
              function rM(t, e) {
                return function (n, r) {
                  var i = aq(n) ? eu : nO,
                    a = e ? e() : {};
                  return i(n, t, il(r, 2), a);
                };
              }
              function rF(t) {
                return rl(function (e, r) {
                  var i = -1,
                    a = r.length,
                    o = a > 1 ? r[a - 1] : n,
                    u = a > 2 ? r[2] : n;
                  for (
                    o = t.length > 3 && "function" == typeof o ? (a--, o) : n,
                      u && iP(r[0], r[1], u) && ((o = a < 3 ? n : o), (a = 1)),
                      e = tC(e);
                    ++i < a;

                  ) {
                    var s = r[i];
                    s && t(e, s, i, o);
                  }
                  return e;
                });
              }
              function rB(t, e) {
                return function (n, r) {
                  if (null == n) return n;
                  if (!az(n)) return t(n, r);
                  for (
                    var i = n.length, a = e ? i : -1, o = tC(n);
                    (e ? a-- : ++a < i) && !1 !== r(o[a], a, o);

                  );
                  return n;
                };
              }
              function r$(t) {
                return function (e, n, r) {
                  for (var i = -1, a = tC(e), o = r(e), u = o.length; u--; ) {
                    var s = o[t ? u : ++i];
                    if (!1 === n(a[s], s, a)) break;
                  }
                  return e;
                };
              }
              function rG(t) {
                return function (e) {
                  var r = eU((e = a5(e))) ? e$(e) : n,
                    i = r ? r[0] : e.charAt(0),
                    a = r ? rk(r, 1).join("") : e.slice(1);
                  return i[t]() + a;
                };
              }
              function rZ(t) {
                return function (e) {
                  return ed(ok(oI(e).replace(tF, "")), t, "");
                };
              }
              function rJ(t) {
                return function () {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return new t();
                    case 1:
                      return new t(e[0]);
                    case 2:
                      return new t(e[0], e[1]);
                    case 3:
                      return new t(e[0], e[1], e[2]);
                    case 4:
                      return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                      return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                      return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                  }
                  var n = nd(t.prototype),
                    r = t.apply(n, e);
                  return a$(r) ? r : n;
                };
              }
              function rK(t) {
                return function (e, r, i) {
                  var a = tC(e);
                  if (!az(e)) {
                    var o = il(r, 3);
                    (e = oh(e)),
                      (r = function (t) {
                        return o(a[t], t, a);
                      });
                  }
                  var u = t(e, r, i);
                  return u > -1 ? a[o ? e[u] : u] : n;
                };
              }
              function rV(t) {
                return ii(function (e) {
                  var i = e.length,
                    a = i,
                    o = n_.prototype.thru;
                  for (t && e.reverse(); a--; ) {
                    var u = e[a];
                    if ("function" != typeof u) throw new tE(r);
                    if (o && !s && "wrapper" == is(u)) var s = new n_([], !0);
                  }
                  for (a = s ? a : i; ++a < i; ) {
                    var c = is((u = e[a])),
                      f = "wrapper" == c ? iu(u) : n;
                    s =
                      f && iI(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9]
                        ? s[is(f[0])].apply(s, f[3])
                        : 1 == u.length && iI(u)
                        ? s[c]()
                        : s.thru(u);
                  }
                  return function () {
                    var t = arguments,
                      n = t[0];
                    if (s && 1 == t.length && aq(n)) return s.plant(n).value();
                    for (var r = 0, a = i ? e[r].apply(this, t) : n; ++r < i; )
                      a = e[r].call(this, a);
                    return a;
                  };
                });
              }
              function rY(t, e, r, i, a, o, u, s, c, f) {
                var l = 128 & e,
                  h = 1 & e,
                  p = 2 & e,
                  v = 24 & e,
                  d = 512 & e,
                  g = p ? n : rJ(t);
                return function _() {
                  for (var m = arguments.length, y = tm(m), w = m; w--; )
                    y[w] = arguments[w];
                  if (v)
                    var b = ic(_),
                      P = (function (t, e) {
                        for (var n = t.length, r = 0; n--; ) t[n] === e && ++r;
                        return r;
                      })(y, b);
                  if (
                    (i && (y = rL(y, i, a, v)),
                    o && (y = rU(y, o, u, v)),
                    (m -= P),
                    v && m < f)
                  ) {
                    var C = eM(y, b);
                    return r3(t, e, rY, _.placeholder, r, y, C, s, c, f - m);
                  }
                  var I = h ? r : this,
                    A = p ? I[t] : t;
                  return (
                    (m = y.length),
                    s
                      ? (y = (function (t, e) {
                          for (
                            var r = t.length, i = e9(e.length, r), a = rT(t);
                            i--;

                          ) {
                            var o = e[i];
                            t[i] = ib(o, r) ? a[o] : n;
                          }
                          return t;
                        })(y, s))
                      : d && m > 1 && y.reverse(),
                    l && c < m && (y.length = c),
                    this &&
                      this !== t3 &&
                      this instanceof _ &&
                      (A = g || rJ(A)),
                    A.apply(I, y)
                  );
                };
              }
              function rQ(t, e) {
                return function (n, r) {
                  var i, a;
                  return (
                    (i = e(r)),
                    (a = {}),
                    nG(n, function (e, n, r) {
                      t(a, i(e), n, r);
                    }),
                    a
                  );
                };
              }
              function rX(t, e) {
                return function (r, i) {
                  var a;
                  if (r === n && i === n) return e;
                  if ((r !== n && (a = r), i !== n)) {
                    if (a === n) return i;
                    "string" == typeof r || "string" == typeof i
                      ? ((r = rb(r)), (i = rb(i)))
                      : ((r = rw(r)), (i = rw(i))),
                      (a = t(r, i));
                  }
                  return a;
                };
              }
              function r0(t) {
                return ii(function (e) {
                  return (
                    (e = ep(e, eS(il()))),
                    rl(function (n) {
                      var r = this;
                      return t(e, function (t) {
                        return eo(t, r, n);
                      });
                    })
                  );
                });
              }
              function r1(t, e) {
                var r = (e = e === n ? " " : rb(e)).length;
                if (r < 2) return r ? rf(e, t) : e;
                var i = rf(e, eK(t / eB(e)));
                return eU(e) ? rk(e$(i), 0, t).join("") : i.slice(0, t);
              }
              function r2(t) {
                return function (e, r, i) {
                  return (
                    i && "number" != typeof i && iP(e, r, i) && (r = i = n),
                    (e = a3(e)),
                    r === n ? ((r = e), (e = 0)) : (r = a3(r)),
                    (i = i === n ? (e < r ? 1 : -1) : a3(i)),
                    (function (t, e, n, r) {
                      for (
                        var i = -1,
                          a = e2(eK((e - t) / (n || 1)), 0),
                          o = tm(a);
                        a--;

                      )
                        (o[r ? a : ++i] = t), (t += n);
                      return o;
                    })(e, r, i, t)
                  );
                };
              }
              function r9(t) {
                return function (e, n) {
                  return (
                    ("string" == typeof e && "string" == typeof n) ||
                      ((e = a6(e)), (n = a6(n))),
                    t(e, n)
                  );
                };
              }
              function r3(t, e, r, i, a, o, u, s, c, f) {
                var l = 8 & e,
                  h = l ? u : n,
                  p = l ? n : u,
                  v = l ? o : n,
                  d = l ? n : o;
                (e |= l ? 32 : 64), 4 & (e &= ~(l ? 64 : 32)) || (e &= -4);
                var g = [t, e, a, v, h, d, p, s, c, f],
                  _ = r.apply(n, g);
                return iI(t) && iS(_, g), (_.placeholder = i), iD(_, t, e);
              }
              function r4(t) {
                var e = tP[t];
                return function (t, n) {
                  if (
                    ((t = a6(t)), (n = null == n ? 0 : e9(a4(n), 292)) && eX(t))
                  ) {
                    var r = (a5(t) + "e").split("e");
                    return +(
                      (r = (a5(e(r[0] + "e" + (+r[1] + n))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+r[1] - n)
                    );
                  }
                  return e(t);
                };
              }
              var r7 =
                ne && 1 / eF(new ne([, -0]))[1] == o
                  ? function (t) {
                      return new ne(t);
                    }
                  : oF;
              function r6(t) {
                return function (e) {
                  var n,
                    r,
                    i = i_(e);
                  return i == _
                    ? eT(e)
                    : i == P
                    ? ((n = -1),
                      (r = Array(e.size)),
                      e.forEach(function (t) {
                        r[++n] = [t, t];
                      }),
                      r)
                    : ep(t(e), function (t) {
                        return [t, e[t]];
                      });
                };
              }
              function r8(t, e, i, o, u, s, c, f) {
                var l = 2 & e;
                if (!l && "function" != typeof t) throw new tE(r);
                var h = o ? o.length : 0;
                if (
                  (h || ((e &= -97), (o = u = n)),
                  (c = c === n ? c : e2(a4(c), 0)),
                  (f = f === n ? f : a4(f)),
                  (h -= u ? u.length : 0),
                  64 & e)
                ) {
                  var p = o,
                    v = u;
                  o = u = n;
                }
                var d = l ? n : iu(t),
                  g = [t, e, i, o, u, p, v, s, c, f];
                if (
                  (d &&
                    (function (t, e) {
                      var n = t[1],
                        r = e[1],
                        i = n | r,
                        o = i < 131,
                        u =
                          (128 == r && 8 == n) ||
                          (128 == r && 256 == n && t[7].length <= e[8]) ||
                          (384 == r && e[7].length <= e[8] && 8 == n);
                      if (o || u) {
                        1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4));
                        var s = e[3];
                        if (s) {
                          var c = t[3];
                          (t[3] = c ? rL(c, s, e[4]) : s),
                            (t[4] = c ? eM(t[3], a) : e[4]);
                        }
                        (s = e[5]) &&
                          ((c = t[5]),
                          (t[5] = c ? rU(c, s, e[6]) : s),
                          (t[6] = c ? eM(t[5], a) : e[6])),
                          (s = e[7]) && (t[7] = s),
                          128 & r &&
                            (t[8] = null == t[8] ? e[8] : e9(t[8], e[8])),
                          null == t[9] && (t[9] = e[9]),
                          (t[0] = e[0]),
                          (t[1] = i);
                      }
                    })(g, d),
                  (t = g[0]),
                  (e = g[1]),
                  (i = g[2]),
                  (o = g[3]),
                  (u = g[4]),
                  (f = g[9] =
                    g[9] === n ? (l ? 0 : t.length) : e2(g[9] - h, 0)) ||
                    !(24 & e) ||
                    (e &= -25),
                  e && 1 != e)
                )
                  8 == e || 16 == e
                    ? ((_ = t),
                      (m = e),
                      (y = f),
                      (w = rJ(_)),
                      (k = function t() {
                        for (
                          var e = arguments.length, r = tm(e), i = e, a = ic(t);
                          i--;

                        )
                          r[i] = arguments[i];
                        var o =
                          e < 3 && r[0] !== a && r[e - 1] !== a ? [] : eM(r, a);
                        return (e -= o.length) < y
                          ? r3(_, m, rY, t.placeholder, n, r, o, n, n, y - e)
                          : eo(
                              this && this !== t3 && this instanceof t ? w : _,
                              this,
                              r
                            );
                      }))
                    : (32 != e && 33 != e) || u.length
                    ? (k = rY.apply(n, g))
                    : ((b = t),
                      (P = e),
                      (C = i),
                      (I = o),
                      (A = 1 & P),
                      (E = rJ(b)),
                      (k = function t() {
                        for (
                          var e = -1,
                            n = arguments.length,
                            r = -1,
                            i = I.length,
                            a = tm(i + n),
                            o =
                              this && this !== t3 && this instanceof t ? E : b;
                          ++r < i;

                        )
                          a[r] = I[r];
                        for (; n--; ) a[r++] = arguments[++e];
                        return eo(o, A ? C : this, a);
                      }));
                else
                  var _,
                    m,
                    y,
                    w,
                    b,
                    P,
                    C,
                    I,
                    A,
                    E,
                    j,
                    x,
                    O,
                    H,
                    S,
                    k =
                      ((j = t),
                      (x = e),
                      (O = i),
                      (H = 1 & x),
                      (S = rJ(j)),
                      function t() {
                        return (
                          this && this !== t3 && this instanceof t ? S : j
                        ).apply(H ? O : this, arguments);
                      });
                return iD((d ? rp : iS)(k, g), t, e);
              }
              function r5(t, e, r, i) {
                return t === n || (aS(t, tO[r]) && !tk.call(i, r)) ? e : t;
              }
              function it(t, e, r, i, a, o) {
                return (
                  a$(t) &&
                    a$(e) &&
                    (o.set(e, t), rr(t, e, n, it, o), o.delete(e)),
                  t
                );
              }
              function ie(t) {
                return aK(t) ? n : t;
              }
              function ir(t, e, r, i, a, o) {
                var u = 1 & r,
                  s = t.length,
                  c = e.length;
                if (s != c && !(u && c > s)) return !1;
                var f = o.get(t),
                  l = o.get(e);
                if (f && l) return f == e && l == t;
                var h = -1,
                  p = !0,
                  v = 2 & r ? new nP() : n;
                for (o.set(t, e), o.set(e, t); ++h < s; ) {
                  var d = t[h],
                    g = e[h];
                  if (i) var _ = u ? i(g, d, h, e, t, o) : i(d, g, h, t, e, o);
                  if (_ !== n) {
                    if (_) continue;
                    p = !1;
                    break;
                  }
                  if (v) {
                    if (
                      !e_(e, function (t, e) {
                        if (!eN(v, e) && (d === t || a(d, t, r, i, o)))
                          return v.push(e);
                      })
                    ) {
                      p = !1;
                      break;
                    }
                  } else if (!(d === g || a(d, g, r, i, o))) {
                    p = !1;
                    break;
                  }
                }
                return o.delete(t), o.delete(e), p;
              }
              function ii(t) {
                return iN(ix(t, n, iG), t + "");
              }
              function ia(t) {
                return nV(t, oh, id);
              }
              function io(t) {
                return nV(t, op, ig);
              }
              var iu = ni
                ? function (t) {
                    return ni.get(t);
                  }
                : oF;
              function is(t) {
                for (
                  var e = t.name + "",
                    n = na[e],
                    r = tk.call(na, e) ? n.length : 0;
                  r--;

                ) {
                  var i = n[r],
                    a = i.func;
                  if (null == a || a == t) return i.name;
                }
                return e;
              }
              function ic(t) {
                return (tk.call(nv, "placeholder") ? nv : t).placeholder;
              }
              function il() {
                var t = nv.iteratee || oU;
                return (
                  (t = t === oU ? n6 : t),
                  arguments.length ? t(arguments[0], arguments[1]) : t
                );
              }
              function ih(t, e) {
                var n,
                  r = t.__data__;
                return (
                  "string" == (n = typeof e) ||
                  "number" == n ||
                  "symbol" == n ||
                  "boolean" == n
                    ? "__proto__" !== e
                    : null === e
                )
                  ? r["string" == typeof e ? "string" : "hash"]
                  : r.map;
              }
              function ip(t) {
                for (var e = oh(t), n = e.length; n--; ) {
                  var r = e[n],
                    i = t[r];
                  e[n] = [r, i, i == i && !a$(i)];
                }
                return e;
              }
              function iv(t, e) {
                var r = null == t ? n : t[e];
                return n7(r) ? r : n;
              }
              var id = eY
                  ? function (t) {
                      return null == t
                        ? []
                        : ef(eY((t = tC(t))), function (e) {
                            return tX.call(t, e);
                          });
                    }
                  : oV,
                ig = eY
                  ? function (t) {
                      for (var e = []; t; ) ev(e, id(t)), (t = t$(t));
                      return e;
                    }
                  : oV,
                i_ = nY;
              function im(t, e, n) {
                e = rS(e, t);
                for (var r = -1, i = e.length, a = !1; ++r < i; ) {
                  var o = iL(e[r]);
                  if (!(a = null != t && n(t, o))) break;
                  t = t[o];
                }
                return a || ++r != i
                  ? a
                  : !!(i = null == t ? 0 : t.length) &&
                      aB(i) &&
                      ib(o, i) &&
                      (aq(t) || aD(t));
              }
              function iy(t) {
                return "function" != typeof t.constructor || iE(t)
                  ? {}
                  : nd(t$(t));
              }
              function iw(t) {
                return aq(t) || aD(t) || !!(t9 && t && t[t9]);
              }
              function ib(t, e) {
                var n = typeof t;
                return (
                  !!(e = null != e ? e : 9007199254740991) &&
                  ("number" == n || ("symbol" != n && th.test(t))) &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t < e
                );
              }
              function iP(t, e, n) {
                if (!a$(n)) return !1;
                var r = typeof e;
                return (
                  ("number" == r
                    ? !!(az(n) && ib(e, n.length))
                    : "string" == r && e in n) && aS(n[e], t)
                );
              }
              function iC(t, e) {
                if (aq(t)) return !1;
                var n = typeof t;
                return (
                  !!(
                    "number" == n ||
                    "symbol" == n ||
                    "boolean" == n ||
                    null == t ||
                    aX(t)
                  ) ||
                  J.test(t) ||
                  !Z.test(t) ||
                  (null != e && t in tC(e))
                );
              }
              function iI(t) {
                var e = is(t),
                  n = nv[e];
                if ("function" != typeof n || !(e in nm.prototype)) return !1;
                if (t === n) return !0;
                var r = iu(n);
                return !!r && t === r[0];
              }
              ((e8 && i_(new e8(new ArrayBuffer(1))) != j) ||
                (e5 && i_(new e5()) != _) ||
                (nt && i_(nt.resolve()) != w) ||
                (ne && i_(new ne()) != P) ||
                (nn && i_(new nn()) != A)) &&
                (i_ = function (t) {
                  var e = nY(t),
                    r = e == y ? t.constructor : n,
                    i = r ? iU(r) : "";
                  if (i)
                    switch (i) {
                      case no:
                        return j;
                      case nu:
                        return _;
                      case ns:
                        return w;
                      case nc:
                        return P;
                      case nf:
                        return A;
                    }
                  return e;
                });
              var iA = tH ? aM : oY;
              function iE(t) {
                var e = t && t.constructor;
                return t === (("function" == typeof e && e.prototype) || tO);
              }
              function ij(t, e) {
                return function (r) {
                  return null != r && r[t] === e && (e !== n || t in tC(r));
                };
              }
              function ix(t, e, r) {
                return (
                  (e = e2(e === n ? t.length - 1 : e, 0)),
                  function () {
                    for (
                      var n = arguments,
                        i = -1,
                        a = e2(n.length - e, 0),
                        o = tm(a);
                      ++i < a;

                    )
                      o[i] = n[e + i];
                    i = -1;
                    for (var u = tm(e + 1); ++i < e; ) u[i] = n[i];
                    return (u[e] = r(o)), eo(t, this, u);
                  }
                );
              }
              function iO(t, e) {
                return e.length < 2 ? t : nK(t, rd(e, 0, -1));
              }
              function iH(t, e) {
                if (
                  !("constructor" === e && "function" == typeof t[e]) &&
                  "__proto__" != e
                )
                  return t[e];
              }
              var iS = iq(rp),
                ik =
                  eE ||
                  function (t, e) {
                    return t3.setTimeout(t, e);
                  },
                iN = iq(rv);
              function iD(t, e, n) {
                var r,
                  i,
                  a = e + "";
                return iN(
                  t,
                  (function (t, e) {
                    var n = e.length;
                    if (!n) return t;
                    var r = n - 1;
                    return (
                      (e[r] = (n > 1 ? "& " : "") + e[r]),
                      (e = e.join(n > 2 ? ", " : " ")),
                      t.replace(tt, "{\n/* [wrapped with " + e + "] */\n")
                    );
                  })(
                    a,
                    ((r = (i = a.match(te)) ? i[1].split(tn) : []),
                    es(s, function (t) {
                      var e = "_." + t[0];
                      n & t[1] && !el(r, e) && r.push(e);
                    }),
                    r.sort())
                  )
                );
              }
              function iq(t) {
                var e = 0,
                  r = 0;
                return function () {
                  var i = e3(),
                    a = 16 - (i - r);
                  if (((r = i), a > 0)) {
                    if (++e >= 800) return arguments[0];
                  } else e = 0;
                  return t.apply(n, arguments);
                };
              }
              function iR(t, e) {
                var r = -1,
                  i = t.length,
                  a = i - 1;
                for (e = e === n ? i : e; ++r < e; ) {
                  var o = rc(r, a),
                    u = t[o];
                  (t[o] = t[r]), (t[r] = u);
                }
                return (t.length = e), t;
              }
              var iz =
                ((tg = (X = aA(
                  function (t) {
                    var e = [];
                    return (
                      46 === t.charCodeAt(0) && e.push(""),
                      t.replace(K, function (t, n, r, i) {
                        e.push(r ? i.replace(ta, "$1") : n || t);
                      }),
                      e
                    );
                  },
                  function (t) {
                    return 500 === tg.size && tg.clear(), t;
                  }
                )).cache),
                X);
              function iL(t) {
                if ("string" == typeof t || aX(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -o ? "-0" : e;
              }
              function iU(t) {
                if (null != t) {
                  try {
                    return tS.call(t);
                  } catch (t) {}
                  try {
                    return t + "";
                  } catch (t) {}
                }
                return "";
              }
              function iT(t) {
                if (t instanceof nm) return t.clone();
                var e = new n_(t.__wrapped__, t.__chain__);
                return (
                  (e.__actions__ = rT(t.__actions__)),
                  (e.__index__ = t.__index__),
                  (e.__values__ = t.__values__),
                  e
                );
              }
              var iW = rl(function (t, e) {
                  return aL(t) ? nz(t, nF(e, 1, aL, !0)) : [];
                }),
                iM = rl(function (t, e) {
                  var r = iY(e);
                  return (
                    aL(r) && (r = n),
                    aL(t) ? nz(t, nF(e, 1, aL, !0), il(r, 2)) : []
                  );
                }),
                iF = rl(function (t, e) {
                  var r = iY(e);
                  return (
                    aL(r) && (r = n), aL(t) ? nz(t, nF(e, 1, aL, !0), n, r) : []
                  );
                });
              function iB(t, e, n) {
                var r = null == t ? 0 : t.length;
                if (!r) return -1;
                var i = null == n ? 0 : a4(n);
                return i < 0 && (i = e2(r + i, 0)), ew(t, il(e, 3), i);
              }
              function i$(t, e, r) {
                var i = null == t ? 0 : t.length;
                if (!i) return -1;
                var a = i - 1;
                return (
                  r !== n &&
                    ((a = a4(r)), (a = r < 0 ? e2(i + a, 0) : e9(a, i - 1))),
                  ew(t, il(e, 3), a, !0)
                );
              }
              function iG(t) {
                return (null == t ? 0 : t.length) ? nF(t, 1) : [];
              }
              function iZ(t) {
                return t && t.length ? t[0] : n;
              }
              var iJ = rl(function (t) {
                  var e = ep(t, rO);
                  return e.length && e[0] === t[0] ? n1(e) : [];
                }),
                iK = rl(function (t) {
                  var e = iY(t),
                    r = ep(t, rO);
                  return (
                    e === iY(r) ? (e = n) : r.pop(),
                    r.length && r[0] === t[0] ? n1(r, il(e, 2)) : []
                  );
                }),
                iV = rl(function (t) {
                  var e = iY(t),
                    r = ep(t, rO);
                  return (
                    (e = "function" == typeof e ? e : n) && r.pop(),
                    r.length && r[0] === t[0] ? n1(r, n, e) : []
                  );
                });
              function iY(t) {
                var e = null == t ? 0 : t.length;
                return e ? t[e - 1] : n;
              }
              var iQ = rl(iX);
              function iX(t, e) {
                return t && t.length && e && e.length ? ru(t, e) : t;
              }
              var i0 = ii(function (t, e) {
                var n = null == t ? 0 : t.length,
                  r = nk(t, e);
                return (
                  rs(
                    t,
                    ep(e, function (t) {
                      return ib(t, n) ? +t : t;
                    }).sort(rz)
                  ),
                  r
                );
              });
              function i1(t) {
                return null == t ? t : e6.call(t);
              }
              var i2 = rl(function (t) {
                  return rP(nF(t, 1, aL, !0));
                }),
                i9 = rl(function (t) {
                  var e = iY(t);
                  return aL(e) && (e = n), rP(nF(t, 1, aL, !0), il(e, 2));
                }),
                i3 = rl(function (t) {
                  var e = iY(t);
                  return (
                    (e = "function" == typeof e ? e : n),
                    rP(nF(t, 1, aL, !0), n, e)
                  );
                });
              function i4(t) {
                if (!(t && t.length)) return [];
                var e = 0;
                return (
                  (t = ef(t, function (t) {
                    if (aL(t)) return (e = e2(t.length, e)), !0;
                  })),
                  eO(e, function (e) {
                    return ep(t, eA(e));
                  })
                );
              }
              function i7(t, e) {
                if (!(t && t.length)) return [];
                var r = i4(t);
                return null == e
                  ? r
                  : ep(r, function (t) {
                      return eo(e, n, t);
                    });
              }
              var i6 = rl(function (t, e) {
                  return aL(t) ? nz(t, e) : [];
                }),
                i8 = rl(function (t) {
                  return rj(ef(t, aL));
                }),
                i5 = rl(function (t) {
                  var e = iY(t);
                  return aL(e) && (e = n), rj(ef(t, aL), il(e, 2));
                }),
                at = rl(function (t) {
                  var e = iY(t);
                  return (
                    (e = "function" == typeof e ? e : n), rj(ef(t, aL), n, e)
                  );
                }),
                ae = rl(i4),
                an = rl(function (t) {
                  var e = t.length,
                    r = e > 1 ? t[e - 1] : n;
                  return (
                    (r = "function" == typeof r ? (t.pop(), r) : n), i7(t, r)
                  );
                });
              function ar(t) {
                var e = nv(t);
                return (e.__chain__ = !0), e;
              }
              function ai(t, e) {
                return e(t);
              }
              var aa = ii(function (t) {
                  var e = t.length,
                    r = e ? t[0] : 0,
                    i = this.__wrapped__,
                    a = function (e) {
                      return nk(e, t);
                    };
                  return !(e > 1) &&
                    !this.__actions__.length &&
                    i instanceof nm &&
                    ib(r)
                    ? ((i = i.slice(r, +r + (e ? 1 : 0))).__actions__.push({
                        func: ai,
                        args: [a],
                        thisArg: n,
                      }),
                      new n_(i, this.__chain__).thru(function (t) {
                        return e && !t.length && t.push(n), t;
                      }))
                    : this.thru(a);
                }),
                ao = rM(function (t, e, n) {
                  tk.call(t, n) ? ++t[n] : nS(t, n, 1);
                }),
                au = rK(iB),
                as = rK(i$);
              function ac(t, e) {
                return (aq(t) ? es : nL)(t, il(e, 3));
              }
              function af(t, e) {
                return (
                  aq(t)
                    ? function (t, e) {
                        for (
                          var n = null == t ? 0 : t.length;
                          n-- && !1 !== e(t[n], n, t);

                        );
                        return t;
                      }
                    : nU
                )(t, il(e, 3));
              }
              var al = rM(function (t, e, n) {
                  tk.call(t, n) ? t[n].push(e) : nS(t, n, [e]);
                }),
                ah = rl(function (t, e, n) {
                  var r = -1,
                    i = "function" == typeof e,
                    a = az(t) ? tm(t.length) : [];
                  return (
                    nL(t, function (t) {
                      a[++r] = i ? eo(e, t, n) : n2(t, e, n);
                    }),
                    a
                  );
                }),
                ap = rM(function (t, e, n) {
                  nS(t, n, e);
                });
              function av(t, e) {
                return (aq(t) ? ep : rt)(t, il(e, 3));
              }
              var ad = rM(
                  function (t, e, n) {
                    t[n ? 0 : 1].push(e);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                ag = rl(function (t, e) {
                  if (null == t) return [];
                  var n = e.length;
                  return (
                    n > 1 && iP(t, e[0], e[1])
                      ? (e = [])
                      : n > 2 && iP(e[0], e[1], e[2]) && (e = [e[0]]),
                    ra(t, nF(e, 1), [])
                  );
                }),
                a_ =
                  em ||
                  function () {
                    return t3.Date.now();
                  };
              function am(t, e, r) {
                return (
                  (e = r ? n : e),
                  (e = t && null == e ? t.length : e),
                  r8(t, 128, n, n, n, n, e)
                );
              }
              function ay(t, e) {
                var i;
                if ("function" != typeof e) throw new tE(r);
                return (
                  (t = a4(t)),
                  function () {
                    return (
                      --t > 0 && (i = e.apply(this, arguments)),
                      t <= 1 && (e = n),
                      i
                    );
                  }
                );
              }
              var aw = rl(function (t, e, n) {
                  var r = 1;
                  if (n.length) {
                    var i = eM(n, ic(aw));
                    r |= 32;
                  }
                  return r8(t, r, e, n, i);
                }),
                ab = rl(function (t, e, n) {
                  var r = 3;
                  if (n.length) {
                    var i = eM(n, ic(ab));
                    r |= 32;
                  }
                  return r8(e, r, t, n, i);
                });
              function aP(t, e, i) {
                var a,
                  o,
                  u,
                  s,
                  c,
                  f,
                  l = 0,
                  h = !1,
                  p = !1,
                  v = !0;
                if ("function" != typeof t) throw new tE(r);
                function d(e) {
                  var r = a,
                    i = o;
                  return (a = o = n), (l = e), (s = t.apply(i, r));
                }
                function g(t) {
                  var r = t - f,
                    i = t - l;
                  return f === n || r >= e || r < 0 || (p && i >= u);
                }
                function _() {
                  var t,
                    n,
                    r,
                    i = a_();
                  if (g(i)) return m(i);
                  c = ik(
                    _,
                    ((t = i - f),
                    (n = i - l),
                    (r = e - t),
                    p ? e9(r, u - n) : r)
                  );
                }
                function m(t) {
                  return (c = n), v && a ? d(t) : ((a = o = n), s);
                }
                function y() {
                  var t,
                    r = a_(),
                    i = g(r);
                  if (((a = arguments), (o = this), (f = r), i)) {
                    if (c === n)
                      return (l = t = f), (c = ik(_, e)), h ? d(t) : s;
                    if (p) return rN(c), (c = ik(_, e)), d(f);
                  }
                  return c === n && (c = ik(_, e)), s;
                }
                return (
                  (e = a6(e) || 0),
                  a$(i) &&
                    ((h = !!i.leading),
                    (u = (p = "maxWait" in i) ? e2(a6(i.maxWait) || 0, e) : u),
                    (v = "trailing" in i ? !!i.trailing : v)),
                  (y.cancel = function () {
                    c !== n && rN(c), (l = 0), (a = f = o = c = n);
                  }),
                  (y.flush = function () {
                    return c === n ? s : m(a_());
                  }),
                  y
                );
              }
              var aC = rl(function (t, e) {
                  return nR(t, 1, e);
                }),
                aI = rl(function (t, e, n) {
                  return nR(t, a6(e) || 0, n);
                });
              function aA(t, e) {
                if (
                  "function" != typeof t ||
                  (null != e && "function" != typeof e)
                )
                  throw new tE(r);
                var n = function () {
                  var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    a = n.cache;
                  if (a.has(i)) return a.get(i);
                  var o = t.apply(this, r);
                  return (n.cache = a.set(i, o) || a), o;
                };
                return (n.cache = new (aA.Cache || nb)()), n;
              }
              function aE(t) {
                if ("function" != typeof t) throw new tE(r);
                return function () {
                  var e = arguments;
                  switch (e.length) {
                    case 0:
                      return !t.call(this);
                    case 1:
                      return !t.call(this, e[0]);
                    case 2:
                      return !t.call(this, e[0], e[1]);
                    case 3:
                      return !t.call(this, e[0], e[1], e[2]);
                  }
                  return !t.apply(this, e);
                };
              }
              aA.Cache = nb;
              var aj = rl(function (t, e) {
                  var n = (e =
                    1 == e.length && aq(e[0])
                      ? ep(e[0], eS(il()))
                      : ep(nF(e, 1), eS(il()))).length;
                  return rl(function (r) {
                    for (var i = -1, a = e9(r.length, n); ++i < a; )
                      r[i] = e[i].call(this, r[i]);
                    return eo(t, this, r);
                  });
                }),
                ax = rl(function (t, e) {
                  var r = eM(e, ic(ax));
                  return r8(t, 32, n, e, r);
                }),
                aO = rl(function (t, e) {
                  var r = eM(e, ic(aO));
                  return r8(t, 64, n, e, r);
                }),
                aH = ii(function (t, e) {
                  return r8(t, 256, n, n, n, e);
                });
              function aS(t, e) {
                return t === e || (t != t && e != e);
              }
              var ak = r9(nQ),
                aN = r9(function (t, e) {
                  return t >= e;
                }),
                aD = n9(
                  (function () {
                    return arguments;
                  })()
                )
                  ? n9
                  : function (t) {
                      return (
                        aG(t) && tk.call(t, "callee") && !tX.call(t, "callee")
                      );
                    },
                aq = tm.isArray,
                aR = et
                  ? eS(et)
                  : function (t) {
                      return aG(t) && nY(t) == E;
                    };
              function az(t) {
                return null != t && aB(t.length) && !aM(t);
              }
              function aL(t) {
                return aG(t) && az(t);
              }
              var aU = eQ || oY,
                aT = ee
                  ? eS(ee)
                  : function (t) {
                      return aG(t) && nY(t) == h;
                    };
              function aW(t) {
                if (!aG(t)) return !1;
                var e = nY(t);
                return (
                  e == p ||
                  "[object DOMException]" == e ||
                  ("string" == typeof t.message &&
                    "string" == typeof t.name &&
                    !aK(t))
                );
              }
              function aM(t) {
                if (!a$(t)) return !1;
                var e = nY(t);
                return (
                  e == d ||
                  e == g ||
                  "[object AsyncFunction]" == e ||
                  "[object Proxy]" == e
                );
              }
              function aF(t) {
                return "number" == typeof t && t == a4(t);
              }
              function aB(t) {
                return (
                  "number" == typeof t &&
                  t > -1 &&
                  t % 1 == 0 &&
                  t <= 9007199254740991
                );
              }
              function a$(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
              }
              function aG(t) {
                return null != t && "object" == typeof t;
              }
              var aZ = en
                ? eS(en)
                : function (t) {
                    return aG(t) && i_(t) == _;
                  };
              function aJ(t) {
                return "number" == typeof t || (aG(t) && nY(t) == m);
              }
              function aK(t) {
                if (!aG(t) || nY(t) != y) return !1;
                var e = t$(t);
                if (null === e) return !0;
                var n = tk.call(e, "constructor") && e.constructor;
                return (
                  "function" == typeof n && n instanceof n && tS.call(n) == tR
                );
              }
              var aV = er
                  ? eS(er)
                  : function (t) {
                      return aG(t) && nY(t) == b;
                    },
                aY = ei
                  ? eS(ei)
                  : function (t) {
                      return aG(t) && i_(t) == P;
                    };
              function aQ(t) {
                return "string" == typeof t || (!aq(t) && aG(t) && nY(t) == C);
              }
              function aX(t) {
                return "symbol" == typeof t || (aG(t) && nY(t) == I);
              }
              var a0 = ea
                  ? eS(ea)
                  : function (t) {
                      return aG(t) && aB(t.length) && !!tY[nY(t)];
                    },
                a1 = r9(n5),
                a2 = r9(function (t, e) {
                  return t <= e;
                });
              function a9(t) {
                if (!t) return [];
                if (az(t)) return aQ(t) ? e$(t) : rT(t);
                if (t4 && t[t4])
                  return (function (t) {
                    for (var e, n = []; !(e = t.next()).done; ) n.push(e.value);
                    return n;
                  })(t[t4]());
                var e = i_(t);
                return (e == _ ? eT : e == P ? eF : ob)(t);
              }
              function a3(t) {
                return t
                  ? (t = a6(t)) === o || t === -o
                    ? (t < 0 ? -1 : 1) * 17976931348623157e292
                    : t == t
                    ? t
                    : 0
                  : 0 === t
                  ? t
                  : 0;
              }
              function a4(t) {
                var e = a3(t),
                  n = e % 1;
                return e == e ? (n ? e - n : e) : 0;
              }
              function a7(t) {
                return t ? nN(a4(t), 0, 4294967295) : 0;
              }
              function a6(t) {
                if ("number" == typeof t) return t;
                if (aX(t)) return u;
                if (a$(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = a$(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = eH(t);
                var n = tc.test(t);
                return n || tl.test(t)
                  ? t1(t.slice(2), n ? 2 : 8)
                  : ts.test(t)
                  ? u
                  : +t;
              }
              function a8(t) {
                return rW(t, op(t));
              }
              function a5(t) {
                return null == t ? "" : rb(t);
              }
              var ot = rF(function (t, e) {
                  if (iE(e) || az(e)) {
                    rW(e, oh(e), t);
                    return;
                  }
                  for (var n in e) tk.call(e, n) && nj(t, n, e[n]);
                }),
                oe = rF(function (t, e) {
                  rW(e, op(e), t);
                }),
                on = rF(function (t, e, n, r) {
                  rW(e, op(e), t, r);
                }),
                or = rF(function (t, e, n, r) {
                  rW(e, oh(e), t, r);
                }),
                oi = ii(nk),
                oa = rl(function (t, e) {
                  t = tC(t);
                  var r = -1,
                    i = e.length,
                    a = i > 2 ? e[2] : n;
                  for (a && iP(e[0], e[1], a) && (i = 1); ++r < i; )
                    for (
                      var o = e[r], u = op(o), s = -1, c = u.length;
                      ++s < c;

                    ) {
                      var f = u[s],
                        l = t[f];
                      (l === n || (aS(l, tO[f]) && !tk.call(t, f))) &&
                        (t[f] = o[f]);
                    }
                  return t;
                }),
                oo = rl(function (t) {
                  return t.push(n, it), eo(od, n, t);
                });
              function ou(t, e, r) {
                var i = null == t ? n : nK(t, e);
                return i === n ? r : i;
              }
              function os(t, e) {
                return null != t && im(t, e, n0);
              }
              var oc = rQ(function (t, e, n) {
                  null != e &&
                    "function" != typeof e.toString &&
                    (e = tq.call(e)),
                    (t[e] = n);
                }, oq(oL)),
                of = rQ(function (t, e, n) {
                  null != e &&
                    "function" != typeof e.toString &&
                    (e = tq.call(e)),
                    tk.call(t, e) ? t[e].push(n) : (t[e] = [n]);
                }, il),
                ol = rl(n2);
              function oh(t) {
                return az(t) ? nI(t) : n8(t);
              }
              function op(t) {
                return az(t)
                  ? nI(t, !0)
                  : (function (t) {
                      if (!a$(t))
                        return (function (t) {
                          var e = [];
                          if (null != t) for (var n in tC(t)) e.push(n);
                          return e;
                        })(t);
                      var e = iE(t),
                        n = [];
                      for (var r in t)
                        ("constructor" == r && (e || !tk.call(t, r))) ||
                          n.push(r);
                      return n;
                    })(t);
              }
              var ov = rF(function (t, e, n) {
                  rr(t, e, n);
                }),
                od = rF(function (t, e, n, r) {
                  rr(t, e, n, r);
                }),
                og = ii(function (t, e) {
                  var n = {};
                  if (null == t) return n;
                  var r = !1;
                  (e = ep(e, function (e) {
                    return (e = rS(e, t)), r || (r = e.length > 1), e;
                  })),
                    rW(t, io(t), n),
                    r && (n = nD(n, 7, ie));
                  for (var i = e.length; i--; ) rC(n, e[i]);
                  return n;
                }),
                o_ = ii(function (t, e) {
                  return null == t
                    ? {}
                    : ro(t, e, function (e, n) {
                        return os(t, n);
                      });
                });
              function om(t, e) {
                if (null == t) return {};
                var n = ep(io(t), function (t) {
                  return [t];
                });
                return (
                  (e = il(e)),
                  ro(t, n, function (t, n) {
                    return e(t, n[0]);
                  })
                );
              }
              var oy = r6(oh),
                ow = r6(op);
              function ob(t) {
                return null == t ? [] : ek(t, oh(t));
              }
              var oP = rZ(function (t, e, n) {
                return (e = e.toLowerCase()), t + (n ? oC(e) : e);
              });
              function oC(t) {
                return oS(a5(t).toLowerCase());
              }
              function oI(t) {
                return (t = a5(t)) && t.replace(tp, eR).replace(tB, "");
              }
              var oA = rZ(function (t, e, n) {
                  return t + (n ? "-" : "") + e.toLowerCase();
                }),
                oE = rZ(function (t, e, n) {
                  return t + (n ? " " : "") + e.toLowerCase();
                }),
                oj = rG("toLowerCase"),
                ox = rZ(function (t, e, n) {
                  return t + (n ? "_" : "") + e.toLowerCase();
                }),
                oO = rZ(function (t, e, n) {
                  return t + (n ? " " : "") + oS(e);
                }),
                oH = rZ(function (t, e, n) {
                  return t + (n ? " " : "") + e.toUpperCase();
                }),
                oS = rG("toUpperCase");
              function ok(t, e, r) {
                var i;
                return (
                  (t = a5(t)),
                  (e = r ? n : e) === n
                    ? ((i = t), tJ.test(i))
                      ? t.match(tG) || []
                      : t.match(tr) || []
                    : t.match(e) || []
                );
              }
              var oN = rl(function (t, e) {
                  try {
                    return eo(t, n, e);
                  } catch (t) {
                    return aW(t) ? t : new tw(t);
                  }
                }),
                oD = ii(function (t, e) {
                  return (
                    es(e, function (e) {
                      nS(t, (e = iL(e)), aw(t[e], t));
                    }),
                    t
                  );
                });
              function oq(t) {
                return function () {
                  return t;
                };
              }
              var oR = rV(),
                oz = rV(!0);
              function oL(t) {
                return t;
              }
              function oU(t) {
                return n6("function" == typeof t ? t : nD(t, 1));
              }
              var oT = rl(function (t, e) {
                  return function (n) {
                    return n2(n, t, e);
                  };
                }),
                oW = rl(function (t, e) {
                  return function (n) {
                    return n2(t, n, e);
                  };
                });
              function oM(t, e, n) {
                var r = oh(e),
                  i = nJ(e, r);
                null != n ||
                  (a$(e) && (i.length || !r.length)) ||
                  ((n = e), (e = t), (t = this), (i = nJ(e, oh(e))));
                var a = !(a$(n) && "chain" in n) || !!n.chain,
                  o = aM(t);
                return (
                  es(i, function (n) {
                    var r = e[n];
                    (t[n] = r),
                      o &&
                        (t.prototype[n] = function () {
                          var e = this.__chain__;
                          if (a || e) {
                            var n = t(this.__wrapped__);
                            return (
                              (n.__actions__ = rT(this.__actions__)).push({
                                func: r,
                                args: arguments,
                                thisArg: t,
                              }),
                              (n.__chain__ = e),
                              n
                            );
                          }
                          return r.apply(t, ev([this.value()], arguments));
                        });
                  }),
                  t
                );
              }
              function oF() {}
              var oB = r0(ep),
                o$ = r0(ec),
                oG = r0(e_);
              function oZ(t) {
                return iC(t)
                  ? eA(iL(t))
                  : function (e) {
                      return nK(e, t);
                    };
              }
              var oJ = r2(),
                oK = r2(!0);
              function oV() {
                return [];
              }
              function oY() {
                return !1;
              }
              var oQ = rX(function (t, e) {
                  return t + e;
                }, 0),
                oX = r4("ceil"),
                o0 = rX(function (t, e) {
                  return t / e;
                }, 1),
                o1 = r4("floor"),
                o2 = rX(function (t, e) {
                  return t * e;
                }, 1),
                o9 = r4("round"),
                o3 = rX(function (t, e) {
                  return t - e;
                }, 0);
              return (
                (nv.after = function (t, e) {
                  if ("function" != typeof e) throw new tE(r);
                  return (
                    (t = a4(t)),
                    function () {
                      if (--t < 1) return e.apply(this, arguments);
                    }
                  );
                }),
                (nv.ary = am),
                (nv.assign = ot),
                (nv.assignIn = oe),
                (nv.assignInWith = on),
                (nv.assignWith = or),
                (nv.at = oi),
                (nv.before = ay),
                (nv.bind = aw),
                (nv.bindAll = oD),
                (nv.bindKey = ab),
                (nv.castArray = function () {
                  if (!arguments.length) return [];
                  var t = arguments[0];
                  return aq(t) ? t : [t];
                }),
                (nv.chain = ar),
                (nv.chunk = function (t, e, r) {
                  e = (r ? iP(t, e, r) : e === n) ? 1 : e2(a4(e), 0);
                  var i = null == t ? 0 : t.length;
                  if (!i || e < 1) return [];
                  for (var a = 0, o = 0, u = tm(eK(i / e)); a < i; )
                    u[o++] = rd(t, a, (a += e));
                  return u;
                }),
                (nv.compact = function (t) {
                  for (
                    var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
                    ++e < n;

                  ) {
                    var a = t[e];
                    a && (i[r++] = a);
                  }
                  return i;
                }),
                (nv.concat = function () {
                  var t = arguments.length;
                  if (!t) return [];
                  for (var e = tm(t - 1), n = arguments[0], r = t; r--; )
                    e[r - 1] = arguments[r];
                  return ev(aq(n) ? rT(n) : [n], nF(e, 1));
                }),
                (nv.cond = function (t) {
                  var e = null == t ? 0 : t.length,
                    n = il();
                  return (
                    (t = e
                      ? ep(t, function (t) {
                          if ("function" != typeof t[1]) throw new tE(r);
                          return [n(t[0]), t[1]];
                        })
                      : []),
                    rl(function (n) {
                      for (var r = -1; ++r < e; ) {
                        var i = t[r];
                        if (eo(i[0], this, n)) return eo(i[1], this, n);
                      }
                    })
                  );
                }),
                (nv.conforms = function (t) {
                  var e, n;
                  return (
                    (n = oh((e = nD(t, 1)))),
                    function (t) {
                      return nq(t, e, n);
                    }
                  );
                }),
                (nv.constant = oq),
                (nv.countBy = ao),
                (nv.create = function (t, e) {
                  var n = nd(t);
                  return null == e ? n : nH(n, e);
                }),
                (nv.curry = function t(e, r, i) {
                  r = i ? n : r;
                  var a = r8(e, 8, n, n, n, n, n, r);
                  return (a.placeholder = t.placeholder), a;
                }),
                (nv.curryRight = function t(e, r, i) {
                  r = i ? n : r;
                  var a = r8(e, 16, n, n, n, n, n, r);
                  return (a.placeholder = t.placeholder), a;
                }),
                (nv.debounce = aP),
                (nv.defaults = oa),
                (nv.defaultsDeep = oo),
                (nv.defer = aC),
                (nv.delay = aI),
                (nv.difference = iW),
                (nv.differenceBy = iM),
                (nv.differenceWith = iF),
                (nv.drop = function (t, e, r) {
                  var i = null == t ? 0 : t.length;
                  return i
                    ? rd(t, (e = r || e === n ? 1 : a4(e)) < 0 ? 0 : e, i)
                    : [];
                }),
                (nv.dropRight = function (t, e, r) {
                  var i = null == t ? 0 : t.length;
                  return i
                    ? rd(
                        t,
                        0,
                        (e = i - (e = r || e === n ? 1 : a4(e))) < 0 ? 0 : e
                      )
                    : [];
                }),
                (nv.dropRightWhile = function (t, e) {
                  return t && t.length ? rA(t, il(e, 3), !0, !0) : [];
                }),
                (nv.dropWhile = function (t, e) {
                  return t && t.length ? rA(t, il(e, 3), !0) : [];
                }),
                (nv.fill = function (t, e, r, i) {
                  var a = null == t ? 0 : t.length;
                  return a
                    ? (r &&
                        "number" != typeof r &&
                        iP(t, e, r) &&
                        ((r = 0), (i = a)),
                      (function (t, e, r, i) {
                        var a = t.length;
                        for (
                          (r = a4(r)) < 0 && (r = -r > a ? 0 : a + r),
                            (i = i === n || i > a ? a : a4(i)) < 0 && (i += a),
                            i = r > i ? 0 : a7(i);
                          r < i;

                        )
                          t[r++] = e;
                        return t;
                      })(t, e, r, i))
                    : [];
                }),
                (nv.filter = function (t, e) {
                  return (aq(t) ? ef : nM)(t, il(e, 3));
                }),
                (nv.flatMap = function (t, e) {
                  return nF(av(t, e), 1);
                }),
                (nv.flatMapDeep = function (t, e) {
                  return nF(av(t, e), o);
                }),
                (nv.flatMapDepth = function (t, e, r) {
                  return (r = r === n ? 1 : a4(r)), nF(av(t, e), r);
                }),
                (nv.flatten = iG),
                (nv.flattenDeep = function (t) {
                  return (null == t ? 0 : t.length) ? nF(t, o) : [];
                }),
                (nv.flattenDepth = function (t, e) {
                  return (null == t ? 0 : t.length)
                    ? nF(t, (e = e === n ? 1 : a4(e)))
                    : [];
                }),
                (nv.flip = function (t) {
                  return r8(t, 512);
                }),
                (nv.flow = oR),
                (nv.flowRight = oz),
                (nv.fromPairs = function (t) {
                  for (
                    var e = -1, n = null == t ? 0 : t.length, r = {};
                    ++e < n;

                  ) {
                    var i = t[e];
                    r[i[0]] = i[1];
                  }
                  return r;
                }),
                (nv.functions = function (t) {
                  return null == t ? [] : nJ(t, oh(t));
                }),
                (nv.functionsIn = function (t) {
                  return null == t ? [] : nJ(t, op(t));
                }),
                (nv.groupBy = al),
                (nv.initial = function (t) {
                  return (null == t ? 0 : t.length) ? rd(t, 0, -1) : [];
                }),
                (nv.intersection = iJ),
                (nv.intersectionBy = iK),
                (nv.intersectionWith = iV),
                (nv.invert = oc),
                (nv.invertBy = of),
                (nv.invokeMap = ah),
                (nv.iteratee = oU),
                (nv.keyBy = ap),
                (nv.keys = oh),
                (nv.keysIn = op),
                (nv.map = av),
                (nv.mapKeys = function (t, e) {
                  var n = {};
                  return (
                    (e = il(e, 3)),
                    nG(t, function (t, r, i) {
                      nS(n, e(t, r, i), t);
                    }),
                    n
                  );
                }),
                (nv.mapValues = function (t, e) {
                  var n = {};
                  return (
                    (e = il(e, 3)),
                    nG(t, function (t, r, i) {
                      nS(n, r, e(t, r, i));
                    }),
                    n
                  );
                }),
                (nv.matches = function (t) {
                  return re(nD(t, 1));
                }),
                (nv.matchesProperty = function (t, e) {
                  return rn(t, nD(e, 1));
                }),
                (nv.memoize = aA),
                (nv.merge = ov),
                (nv.mergeWith = od),
                (nv.method = oT),
                (nv.methodOf = oW),
                (nv.mixin = oM),
                (nv.negate = aE),
                (nv.nthArg = function (t) {
                  return (
                    (t = a4(t)),
                    rl(function (e) {
                      return ri(e, t);
                    })
                  );
                }),
                (nv.omit = og),
                (nv.omitBy = function (t, e) {
                  return om(t, aE(il(e)));
                }),
                (nv.once = function (t) {
                  return ay(2, t);
                }),
                (nv.orderBy = function (t, e, r, i) {
                  return null == t
                    ? []
                    : (aq(e) || (e = null == e ? [] : [e]),
                      aq((r = i ? n : r)) || (r = null == r ? [] : [r]),
                      ra(t, e, r));
                }),
                (nv.over = oB),
                (nv.overArgs = aj),
                (nv.overEvery = o$),
                (nv.overSome = oG),
                (nv.partial = ax),
                (nv.partialRight = aO),
                (nv.partition = ad),
                (nv.pick = o_),
                (nv.pickBy = om),
                (nv.property = oZ),
                (nv.propertyOf = function (t) {
                  return function (e) {
                    return null == t ? n : nK(t, e);
                  };
                }),
                (nv.pull = iQ),
                (nv.pullAll = iX),
                (nv.pullAllBy = function (t, e, n) {
                  return t && t.length && e && e.length
                    ? ru(t, e, il(n, 2))
                    : t;
                }),
                (nv.pullAllWith = function (t, e, r) {
                  return t && t.length && e && e.length ? ru(t, e, n, r) : t;
                }),
                (nv.pullAt = i0),
                (nv.range = oJ),
                (nv.rangeRight = oK),
                (nv.rearg = aH),
                (nv.reject = function (t, e) {
                  return (aq(t) ? ef : nM)(t, aE(il(e, 3)));
                }),
                (nv.remove = function (t, e) {
                  var n = [];
                  if (!(t && t.length)) return n;
                  var r = -1,
                    i = [],
                    a = t.length;
                  for (e = il(e, 3); ++r < a; ) {
                    var o = t[r];
                    e(o, r, t) && (n.push(o), i.push(r));
                  }
                  return rs(t, i), n;
                }),
                (nv.rest = function (t, e) {
                  if ("function" != typeof t) throw new tE(r);
                  return rl(t, (e = e === n ? e : a4(e)));
                }),
                (nv.reverse = i1),
                (nv.sampleSize = function (t, e, r) {
                  return (
                    (e = (r ? iP(t, e, r) : e === n) ? 1 : a4(e)),
                    (aq(t)
                      ? function (t, e) {
                          return iR(rT(t), nN(e, 0, t.length));
                        }
                      : function (t, e) {
                          var n = ob(t);
                          return iR(n, nN(e, 0, n.length));
                        })(t, e)
                  );
                }),
                (nv.set = function (t, e, n) {
                  return null == t ? t : rh(t, e, n);
                }),
                (nv.setWith = function (t, e, r, i) {
                  return (
                    (i = "function" == typeof i ? i : n),
                    null == t ? t : rh(t, e, r, i)
                  );
                }),
                (nv.shuffle = function (t) {
                  return (
                    aq(t)
                      ? function (t) {
                          return iR(rT(t));
                        }
                      : function (t) {
                          return iR(ob(t));
                        }
                  )(t);
                }),
                (nv.slice = function (t, e, r) {
                  var i = null == t ? 0 : t.length;
                  return i
                    ? (r && "number" != typeof r && iP(t, e, r)
                        ? ((e = 0), (r = i))
                        : ((e = null == e ? 0 : a4(e)),
                          (r = r === n ? i : a4(r))),
                      rd(t, e, r))
                    : [];
                }),
                (nv.sortBy = ag),
                (nv.sortedUniq = function (t) {
                  return t && t.length ? ry(t) : [];
                }),
                (nv.sortedUniqBy = function (t, e) {
                  return t && t.length ? ry(t, il(e, 2)) : [];
                }),
                (nv.split = function (t, e, r) {
                  return (
                    r && "number" != typeof r && iP(t, e, r) && (e = r = n),
                    (r = r === n ? 4294967295 : r >>> 0)
                      ? (t = a5(t)) &&
                        ("string" == typeof e || (null != e && !aV(e))) &&
                        !(e = rb(e)) &&
                        eU(t)
                        ? rk(e$(t), 0, r)
                        : t.split(e, r)
                      : []
                  );
                }),
                (nv.spread = function (t, e) {
                  if ("function" != typeof t) throw new tE(r);
                  return (
                    (e = null == e ? 0 : e2(a4(e), 0)),
                    rl(function (n) {
                      var r = n[e],
                        i = rk(n, 0, e);
                      return r && ev(i, r), eo(t, this, i);
                    })
                  );
                }),
                (nv.tail = function (t) {
                  var e = null == t ? 0 : t.length;
                  return e ? rd(t, 1, e) : [];
                }),
                (nv.take = function (t, e, r) {
                  return t && t.length
                    ? rd(t, 0, (e = r || e === n ? 1 : a4(e)) < 0 ? 0 : e)
                    : [];
                }),
                (nv.takeRight = function (t, e, r) {
                  var i = null == t ? 0 : t.length;
                  return i
                    ? rd(
                        t,
                        (e = i - (e = r || e === n ? 1 : a4(e))) < 0 ? 0 : e,
                        i
                      )
                    : [];
                }),
                (nv.takeRightWhile = function (t, e) {
                  return t && t.length ? rA(t, il(e, 3), !1, !0) : [];
                }),
                (nv.takeWhile = function (t, e) {
                  return t && t.length ? rA(t, il(e, 3)) : [];
                }),
                (nv.tap = function (t, e) {
                  return e(t), t;
                }),
                (nv.throttle = function (t, e, n) {
                  var i = !0,
                    a = !0;
                  if ("function" != typeof t) throw new tE(r);
                  return (
                    a$(n) &&
                      ((i = "leading" in n ? !!n.leading : i),
                      (a = "trailing" in n ? !!n.trailing : a)),
                    aP(t, e, { leading: i, maxWait: e, trailing: a })
                  );
                }),
                (nv.thru = ai),
                (nv.toArray = a9),
                (nv.toPairs = oy),
                (nv.toPairsIn = ow),
                (nv.toPath = function (t) {
                  return aq(t) ? ep(t, iL) : aX(t) ? [t] : rT(iz(a5(t)));
                }),
                (nv.toPlainObject = a8),
                (nv.transform = function (t, e, n) {
                  var r = aq(t),
                    i = r || aU(t) || a0(t);
                  if (((e = il(e, 4)), null == n)) {
                    var a = t && t.constructor;
                    n = i
                      ? r
                        ? new a()
                        : []
                      : a$(t) && aM(a)
                      ? nd(t$(t))
                      : {};
                  }
                  return (
                    (i ? es : nG)(t, function (t, r, i) {
                      return e(n, t, r, i);
                    }),
                    n
                  );
                }),
                (nv.unary = function (t) {
                  return am(t, 1);
                }),
                (nv.union = i2),
                (nv.unionBy = i9),
                (nv.unionWith = i3),
                (nv.uniq = function (t) {
                  return t && t.length ? rP(t) : [];
                }),
                (nv.uniqBy = function (t, e) {
                  return t && t.length ? rP(t, il(e, 2)) : [];
                }),
                (nv.uniqWith = function (t, e) {
                  return (
                    (e = "function" == typeof e ? e : n),
                    t && t.length ? rP(t, n, e) : []
                  );
                }),
                (nv.unset = function (t, e) {
                  return null == t || rC(t, e);
                }),
                (nv.unzip = i4),
                (nv.unzipWith = i7),
                (nv.update = function (t, e, n) {
                  return null == t ? t : rI(t, e, rH(n));
                }),
                (nv.updateWith = function (t, e, r, i) {
                  return (
                    (i = "function" == typeof i ? i : n),
                    null == t ? t : rI(t, e, rH(r), i)
                  );
                }),
                (nv.values = ob),
                (nv.valuesIn = function (t) {
                  return null == t ? [] : ek(t, op(t));
                }),
                (nv.without = i6),
                (nv.words = ok),
                (nv.wrap = function (t, e) {
                  return ax(rH(e), t);
                }),
                (nv.xor = i8),
                (nv.xorBy = i5),
                (nv.xorWith = at),
                (nv.zip = ae),
                (nv.zipObject = function (t, e) {
                  return rx(t || [], e || [], nj);
                }),
                (nv.zipObjectDeep = function (t, e) {
                  return rx(t || [], e || [], rh);
                }),
                (nv.zipWith = an),
                (nv.entries = oy),
                (nv.entriesIn = ow),
                (nv.extend = oe),
                (nv.extendWith = on),
                oM(nv, nv),
                (nv.add = oQ),
                (nv.attempt = oN),
                (nv.camelCase = oP),
                (nv.capitalize = oC),
                (nv.ceil = oX),
                (nv.clamp = function (t, e, r) {
                  return (
                    r === n && ((r = e), (e = n)),
                    r !== n && (r = (r = a6(r)) == r ? r : 0),
                    e !== n && (e = (e = a6(e)) == e ? e : 0),
                    nN(a6(t), e, r)
                  );
                }),
                (nv.clone = function (t) {
                  return nD(t, 4);
                }),
                (nv.cloneDeep = function (t) {
                  return nD(t, 5);
                }),
                (nv.cloneDeepWith = function (t, e) {
                  return nD(t, 5, (e = "function" == typeof e ? e : n));
                }),
                (nv.cloneWith = function (t, e) {
                  return nD(t, 4, (e = "function" == typeof e ? e : n));
                }),
                (nv.conformsTo = function (t, e) {
                  return null == e || nq(t, e, oh(e));
                }),
                (nv.deburr = oI),
                (nv.defaultTo = function (t, e) {
                  return null == t || t != t ? e : t;
                }),
                (nv.divide = o0),
                (nv.endsWith = function (t, e, r) {
                  (t = a5(t)), (e = rb(e));
                  var i = t.length,
                    a = (r = r === n ? i : nN(a4(r), 0, i));
                  return (r -= e.length) >= 0 && t.slice(r, a) == e;
                }),
                (nv.eq = aS),
                (nv.escape = function (t) {
                  return (t = a5(t)) && F.test(t) ? t.replace(W, ez) : t;
                }),
                (nv.escapeRegExp = function (t) {
                  return (t = a5(t)) && Y.test(t) ? t.replace(V, "\\$&") : t;
                }),
                (nv.every = function (t, e, r) {
                  var i = aq(t) ? ec : nT;
                  return r && iP(t, e, r) && (e = n), i(t, il(e, 3));
                }),
                (nv.find = au),
                (nv.findIndex = iB),
                (nv.findKey = function (t, e) {
                  return ey(t, il(e, 3), nG);
                }),
                (nv.findLast = as),
                (nv.findLastIndex = i$),
                (nv.findLastKey = function (t, e) {
                  return ey(t, il(e, 3), nZ);
                }),
                (nv.floor = o1),
                (nv.forEach = ac),
                (nv.forEachRight = af),
                (nv.forIn = function (t, e) {
                  return null == t ? t : nB(t, il(e, 3), op);
                }),
                (nv.forInRight = function (t, e) {
                  return null == t ? t : n$(t, il(e, 3), op);
                }),
                (nv.forOwn = function (t, e) {
                  return t && nG(t, il(e, 3));
                }),
                (nv.forOwnRight = function (t, e) {
                  return t && nZ(t, il(e, 3));
                }),
                (nv.get = ou),
                (nv.gt = ak),
                (nv.gte = aN),
                (nv.has = function (t, e) {
                  return null != t && im(t, e, nX);
                }),
                (nv.hasIn = os),
                (nv.head = iZ),
                (nv.identity = oL),
                (nv.includes = function (t, e, n, r) {
                  (t = az(t) ? t : ob(t)), (n = n && !r ? a4(n) : 0);
                  var i = t.length;
                  return (
                    n < 0 && (n = e2(i + n, 0)),
                    aQ(t)
                      ? n <= i && t.indexOf(e, n) > -1
                      : !!i && eb(t, e, n) > -1
                  );
                }),
                (nv.indexOf = function (t, e, n) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var i = null == n ? 0 : a4(n);
                  return i < 0 && (i = e2(r + i, 0)), eb(t, e, i);
                }),
                (nv.inRange = function (t, e, r) {
                  var i, a, o;
                  return (
                    (e = a3(e)),
                    r === n ? ((r = e), (e = 0)) : (r = a3(r)),
                    (i = t = a6(t)) >= e9((a = e), (o = r)) && i < e2(a, o)
                  );
                }),
                (nv.invoke = ol),
                (nv.isArguments = aD),
                (nv.isArray = aq),
                (nv.isArrayBuffer = aR),
                (nv.isArrayLike = az),
                (nv.isArrayLikeObject = aL),
                (nv.isBoolean = function (t) {
                  return !0 === t || !1 === t || (aG(t) && nY(t) == l);
                }),
                (nv.isBuffer = aU),
                (nv.isDate = aT),
                (nv.isElement = function (t) {
                  return aG(t) && 1 === t.nodeType && !aK(t);
                }),
                (nv.isEmpty = function (t) {
                  if (null == t) return !0;
                  if (
                    az(t) &&
                    (aq(t) ||
                      "string" == typeof t ||
                      "function" == typeof t.splice ||
                      aU(t) ||
                      a0(t) ||
                      aD(t))
                  )
                    return !t.length;
                  var e = i_(t);
                  if (e == _ || e == P) return !t.size;
                  if (iE(t)) return !n8(t).length;
                  for (var n in t) if (tk.call(t, n)) return !1;
                  return !0;
                }),
                (nv.isEqual = function (t, e) {
                  return n3(t, e);
                }),
                (nv.isEqualWith = function (t, e, r) {
                  var i = (r = "function" == typeof r ? r : n) ? r(t, e) : n;
                  return i === n ? n3(t, e, n, r) : !!i;
                }),
                (nv.isError = aW),
                (nv.isFinite = function (t) {
                  return "number" == typeof t && eX(t);
                }),
                (nv.isFunction = aM),
                (nv.isInteger = aF),
                (nv.isLength = aB),
                (nv.isMap = aZ),
                (nv.isMatch = function (t, e) {
                  return t === e || n4(t, e, ip(e));
                }),
                (nv.isMatchWith = function (t, e, r) {
                  return (
                    (r = "function" == typeof r ? r : n), n4(t, e, ip(e), r)
                  );
                }),
                (nv.isNaN = function (t) {
                  return aJ(t) && t != +t;
                }),
                (nv.isNative = function (t) {
                  if (iA(t))
                    throw new tw(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return n7(t);
                }),
                (nv.isNil = function (t) {
                  return null == t;
                }),
                (nv.isNull = function (t) {
                  return null === t;
                }),
                (nv.isNumber = aJ),
                (nv.isObject = a$),
                (nv.isObjectLike = aG),
                (nv.isPlainObject = aK),
                (nv.isRegExp = aV),
                (nv.isSafeInteger = function (t) {
                  return (
                    aF(t) && t >= -9007199254740991 && t <= 9007199254740991
                  );
                }),
                (nv.isSet = aY),
                (nv.isString = aQ),
                (nv.isSymbol = aX),
                (nv.isTypedArray = a0),
                (nv.isUndefined = function (t) {
                  return t === n;
                }),
                (nv.isWeakMap = function (t) {
                  return aG(t) && i_(t) == A;
                }),
                (nv.isWeakSet = function (t) {
                  return aG(t) && "[object WeakSet]" == nY(t);
                }),
                (nv.join = function (t, e) {
                  return null == t ? "" : e0.call(t, e);
                }),
                (nv.kebabCase = oA),
                (nv.last = iY),
                (nv.lastIndexOf = function (t, e, r) {
                  var i = null == t ? 0 : t.length;
                  if (!i) return -1;
                  var a = i;
                  return (
                    r !== n &&
                      (a = (a = a4(r)) < 0 ? e2(i + a, 0) : e9(a, i - 1)),
                    e == e
                      ? (function (t, e, n) {
                          for (var r = n + 1; r-- && t[r] !== e; );
                          return r;
                        })(t, e, a)
                      : ew(t, eC, a, !0)
                  );
                }),
                (nv.lowerCase = oE),
                (nv.lowerFirst = oj),
                (nv.lt = a1),
                (nv.lte = a2),
                (nv.max = function (t) {
                  return t && t.length ? nW(t, oL, nQ) : n;
                }),
                (nv.maxBy = function (t, e) {
                  return t && t.length ? nW(t, il(e, 2), nQ) : n;
                }),
                (nv.mean = function (t) {
                  return eI(t, oL);
                }),
                (nv.meanBy = function (t, e) {
                  return eI(t, il(e, 2));
                }),
                (nv.min = function (t) {
                  return t && t.length ? nW(t, oL, n5) : n;
                }),
                (nv.minBy = function (t, e) {
                  return t && t.length ? nW(t, il(e, 2), n5) : n;
                }),
                (nv.stubArray = oV),
                (nv.stubFalse = oY),
                (nv.stubObject = function () {
                  return {};
                }),
                (nv.stubString = function () {
                  return "";
                }),
                (nv.stubTrue = function () {
                  return !0;
                }),
                (nv.multiply = o2),
                (nv.nth = function (t, e) {
                  return t && t.length ? ri(t, a4(e)) : n;
                }),
                (nv.noConflict = function () {
                  return t3._ === this && (t3._ = tz), this;
                }),
                (nv.noop = oF),
                (nv.now = a_),
                (nv.pad = function (t, e, n) {
                  t = a5(t);
                  var r = (e = a4(e)) ? eB(t) : 0;
                  if (!e || r >= e) return t;
                  var i = (e - r) / 2;
                  return r1(eV(i), n) + t + r1(eK(i), n);
                }),
                (nv.padEnd = function (t, e, n) {
                  t = a5(t);
                  var r = (e = a4(e)) ? eB(t) : 0;
                  return e && r < e ? t + r1(e - r, n) : t;
                }),
                (nv.padStart = function (t, e, n) {
                  t = a5(t);
                  var r = (e = a4(e)) ? eB(t) : 0;
                  return e && r < e ? r1(e - r, n) + t : t;
                }),
                (nv.parseInt = function (t, e, n) {
                  return (
                    n || null == e ? (e = 0) : e && (e = +e),
                    e4(a5(t).replace(Q, ""), e || 0)
                  );
                }),
                (nv.random = function (t, e, r) {
                  if (
                    (r && "boolean" != typeof r && iP(t, e, r) && (e = r = n),
                    r === n &&
                      ("boolean" == typeof e
                        ? ((r = e), (e = n))
                        : "boolean" == typeof t && ((r = t), (t = n))),
                    t === n && e === n
                      ? ((t = 0), (e = 1))
                      : ((t = a3(t)),
                        e === n ? ((e = t), (t = 0)) : (e = a3(e))),
                    t > e)
                  ) {
                    var i = t;
                    (t = e), (e = i);
                  }
                  if (r || t % 1 || e % 1) {
                    var a = e7();
                    return e9(
                      t + a * (e - t + t0("1e-" + ((a + "").length - 1))),
                      e
                    );
                  }
                  return rc(t, e);
                }),
                (nv.reduce = function (t, e, n) {
                  var r = aq(t) ? ed : ej,
                    i = arguments.length < 3;
                  return r(t, il(e, 4), n, i, nL);
                }),
                (nv.reduceRight = function (t, e, n) {
                  var r = aq(t) ? eg : ej,
                    i = arguments.length < 3;
                  return r(t, il(e, 4), n, i, nU);
                }),
                (nv.repeat = function (t, e, r) {
                  return (
                    (e = (r ? iP(t, e, r) : e === n) ? 1 : a4(e)), rf(a5(t), e)
                  );
                }),
                (nv.replace = function () {
                  var t = arguments,
                    e = a5(t[0]);
                  return t.length < 3 ? e : e.replace(t[1], t[2]);
                }),
                (nv.result = function (t, e, r) {
                  e = rS(e, t);
                  var i = -1,
                    a = e.length;
                  for (a || ((a = 1), (t = n)); ++i < a; ) {
                    var o = null == t ? n : t[iL(e[i])];
                    o === n && ((i = a), (o = r)), (t = aM(o) ? o.call(t) : o);
                  }
                  return t;
                }),
                (nv.round = o9),
                (nv.runInContext = t),
                (nv.sample = function (t) {
                  return (
                    aq(t)
                      ? nA
                      : function (t) {
                          return nA(ob(t));
                        }
                  )(t);
                }),
                (nv.size = function (t) {
                  if (null == t) return 0;
                  if (az(t)) return aQ(t) ? eB(t) : t.length;
                  var e = i_(t);
                  return e == _ || e == P ? t.size : n8(t).length;
                }),
                (nv.snakeCase = ox),
                (nv.some = function (t, e, r) {
                  var i = aq(t) ? e_ : rg;
                  return r && iP(t, e, r) && (e = n), i(t, il(e, 3));
                }),
                (nv.sortedIndex = function (t, e) {
                  return r_(t, e);
                }),
                (nv.sortedIndexBy = function (t, e, n) {
                  return rm(t, e, il(n, 2));
                }),
                (nv.sortedIndexOf = function (t, e) {
                  var n = null == t ? 0 : t.length;
                  if (n) {
                    var r = r_(t, e);
                    if (r < n && aS(t[r], e)) return r;
                  }
                  return -1;
                }),
                (nv.sortedLastIndex = function (t, e) {
                  return r_(t, e, !0);
                }),
                (nv.sortedLastIndexBy = function (t, e, n) {
                  return rm(t, e, il(n, 2), !0);
                }),
                (nv.sortedLastIndexOf = function (t, e) {
                  if (null == t ? 0 : t.length) {
                    var n = r_(t, e, !0) - 1;
                    if (aS(t[n], e)) return n;
                  }
                  return -1;
                }),
                (nv.startCase = oO),
                (nv.startsWith = function (t, e, n) {
                  return (
                    (t = a5(t)),
                    (n = null == n ? 0 : nN(a4(n), 0, t.length)),
                    (e = rb(e)),
                    t.slice(n, n + e.length) == e
                  );
                }),
                (nv.subtract = o3),
                (nv.sum = function (t) {
                  return t && t.length ? ex(t, oL) : 0;
                }),
                (nv.sumBy = function (t, e) {
                  return t && t.length ? ex(t, il(e, 2)) : 0;
                }),
                (nv.template = function (t, e, r) {
                  var i = nv.templateSettings;
                  r && iP(t, e, r) && (e = n),
                    (t = a5(t)),
                    (e = on({}, e, i, r5));
                  var a,
                    o,
                    u = on({}, e.imports, i.imports, r5),
                    s = oh(u),
                    c = ek(u, s),
                    f = 0,
                    l = e.interpolate || tv,
                    h = "__p += '",
                    p = tI(
                      (e.escape || tv).source +
                        "|" +
                        l.source +
                        "|" +
                        (l === G ? to : tv).source +
                        "|" +
                        (e.evaluate || tv).source +
                        "|$",
                      "g"
                    ),
                    v =
                      "//# sourceURL=" +
                      (tk.call(e, "sourceURL")
                        ? (e.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++tV + "]") +
                      "\n";
                  t.replace(p, function (e, n, r, i, u, s) {
                    return (
                      r || (r = i),
                      (h += t.slice(f, s).replace(td, eL)),
                      n && ((a = !0), (h += "' +\n__e(" + n + ") +\n'")),
                      u && ((o = !0), (h += "';\n" + u + ";\n__p += '")),
                      r &&
                        (h +=
                          "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                      (f = s + e.length),
                      e
                    );
                  }),
                    (h += "';\n");
                  var d = tk.call(e, "variable") && e.variable;
                  if (d) {
                    if (ti.test(d))
                      throw new tw(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else h = "with (obj) {\n" + h + "\n}\n";
                  (h = (o ? h.replace(z, "") : h)
                    .replace(L, "$1")
                    .replace(U, "$1;")),
                    (h =
                      "function(" +
                      (d || "obj") +
                      ") {\n" +
                      (d ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (a ? ", __e = _.escape" : "") +
                      (o
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      h +
                      "return __p\n}");
                  var g = oN(function () {
                    return tb(s, v + "return " + h).apply(n, c);
                  });
                  if (((g.source = h), aW(g))) throw g;
                  return g;
                }),
                (nv.times = function (t, e) {
                  if ((t = a4(t)) < 1 || t > 9007199254740991) return [];
                  var n = 4294967295,
                    r = e9(t, 4294967295);
                  (e = il(e)), (t -= 4294967295);
                  for (var i = eO(r, e); ++n < t; ) e(n);
                  return i;
                }),
                (nv.toFinite = a3),
                (nv.toInteger = a4),
                (nv.toLength = a7),
                (nv.toLower = function (t) {
                  return a5(t).toLowerCase();
                }),
                (nv.toNumber = a6),
                (nv.toSafeInteger = function (t) {
                  return t
                    ? nN(a4(t), -9007199254740991, 9007199254740991)
                    : 0 === t
                    ? t
                    : 0;
                }),
                (nv.toString = a5),
                (nv.toUpper = function (t) {
                  return a5(t).toUpperCase();
                }),
                (nv.trim = function (t, e, r) {
                  if ((t = a5(t)) && (r || e === n)) return eH(t);
                  if (!t || !(e = rb(e))) return t;
                  var i = e$(t),
                    a = e$(e),
                    o = eD(i, a),
                    u = eq(i, a) + 1;
                  return rk(i, o, u).join("");
                }),
                (nv.trimEnd = function (t, e, r) {
                  if ((t = a5(t)) && (r || e === n))
                    return t.slice(0, eG(t) + 1);
                  if (!t || !(e = rb(e))) return t;
                  var i = e$(t),
                    a = eq(i, e$(e)) + 1;
                  return rk(i, 0, a).join("");
                }),
                (nv.trimStart = function (t, e, r) {
                  if ((t = a5(t)) && (r || e === n)) return t.replace(Q, "");
                  if (!t || !(e = rb(e))) return t;
                  var i = e$(t),
                    a = eD(i, e$(e));
                  return rk(i, a).join("");
                }),
                (nv.truncate = function (t, e) {
                  var r = 30,
                    i = "...";
                  if (a$(e)) {
                    var a = "separator" in e ? e.separator : a;
                    (r = "length" in e ? a4(e.length) : r),
                      (i = "omission" in e ? rb(e.omission) : i);
                  }
                  var o = (t = a5(t)).length;
                  if (eU(t)) {
                    var u = e$(t);
                    o = u.length;
                  }
                  if (r >= o) return t;
                  var s = r - eB(i);
                  if (s < 1) return i;
                  var c = u ? rk(u, 0, s).join("") : t.slice(0, s);
                  if (a === n) return c + i;
                  if ((u && (s += c.length - s), aV(a))) {
                    if (t.slice(s).search(a)) {
                      var f,
                        l = c;
                      for (
                        a.global || (a = tI(a.source, a5(tu.exec(a)) + "g")),
                          a.lastIndex = 0;
                        (f = a.exec(l));

                      )
                        var h = f.index;
                      c = c.slice(0, h === n ? s : h);
                    }
                  } else if (t.indexOf(rb(a), s) != s) {
                    var p = c.lastIndexOf(a);
                    p > -1 && (c = c.slice(0, p));
                  }
                  return c + i;
                }),
                (nv.unescape = function (t) {
                  return (t = a5(t)) && M.test(t) ? t.replace(T, eZ) : t;
                }),
                (nv.uniqueId = function (t) {
                  var e = ++tN;
                  return a5(t) + e;
                }),
                (nv.upperCase = oH),
                (nv.upperFirst = oS),
                (nv.each = ac),
                (nv.eachRight = af),
                (nv.first = iZ),
                oM(
                  nv,
                  ((t_ = {}),
                  nG(nv, function (t, e) {
                    tk.call(nv.prototype, e) || (t_[e] = t);
                  }),
                  t_),
                  { chain: !1 }
                ),
                (nv.VERSION = "4.17.21"),
                es(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (t) {
                    nv[t].placeholder = nv;
                  }
                ),
                es(["drop", "take"], function (t, e) {
                  (nm.prototype[t] = function (r) {
                    r = r === n ? 1 : e2(a4(r), 0);
                    var i =
                      this.__filtered__ && !e ? new nm(this) : this.clone();
                    return (
                      i.__filtered__
                        ? (i.__takeCount__ = e9(r, i.__takeCount__))
                        : i.__views__.push({
                            size: e9(r, 4294967295),
                            type: t + (i.__dir__ < 0 ? "Right" : ""),
                          }),
                      i
                    );
                  }),
                    (nm.prototype[t + "Right"] = function (e) {
                      return this.reverse()[t](e).reverse();
                    });
                }),
                es(["filter", "map", "takeWhile"], function (t, e) {
                  var n = e + 1,
                    r = 1 == n || 3 == n;
                  nm.prototype[t] = function (t) {
                    var e = this.clone();
                    return (
                      e.__iteratees__.push({ iteratee: il(t, 3), type: n }),
                      (e.__filtered__ = e.__filtered__ || r),
                      e
                    );
                  };
                }),
                es(["head", "last"], function (t, e) {
                  var n = "take" + (e ? "Right" : "");
                  nm.prototype[t] = function () {
                    return this[n](1).value()[0];
                  };
                }),
                es(["initial", "tail"], function (t, e) {
                  var n = "drop" + (e ? "" : "Right");
                  nm.prototype[t] = function () {
                    return this.__filtered__ ? new nm(this) : this[n](1);
                  };
                }),
                (nm.prototype.compact = function () {
                  return this.filter(oL);
                }),
                (nm.prototype.find = function (t) {
                  return this.filter(t).head();
                }),
                (nm.prototype.findLast = function (t) {
                  return this.reverse().find(t);
                }),
                (nm.prototype.invokeMap = rl(function (t, e) {
                  return "function" == typeof t
                    ? new nm(this)
                    : this.map(function (n) {
                        return n2(n, t, e);
                      });
                })),
                (nm.prototype.reject = function (t) {
                  return this.filter(aE(il(t)));
                }),
                (nm.prototype.slice = function (t, e) {
                  t = a4(t);
                  var r = this;
                  return r.__filtered__ && (t > 0 || e < 0)
                    ? new nm(r)
                    : (t < 0 ? (r = r.takeRight(-t)) : t && (r = r.drop(t)),
                      e !== n &&
                        (r = (e = a4(e)) < 0 ? r.dropRight(-e) : r.take(e - t)),
                      r);
                }),
                (nm.prototype.takeRightWhile = function (t) {
                  return this.reverse().takeWhile(t).reverse();
                }),
                (nm.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                nG(nm.prototype, function (t, e) {
                  var r = /^(?:filter|find|map|reject)|While$/.test(e),
                    i = /^(?:head|last)$/.test(e),
                    a = nv[i ? "take" + ("last" == e ? "Right" : "") : e],
                    o = i || /^find/.test(e);
                  a &&
                    (nv.prototype[e] = function () {
                      var e = this.__wrapped__,
                        u = i ? [1] : arguments,
                        s = e instanceof nm,
                        c = u[0],
                        f = s || aq(e),
                        l = function (t) {
                          var e = a.apply(nv, ev([t], u));
                          return i && h ? e[0] : e;
                        };
                      f &&
                        r &&
                        "function" == typeof c &&
                        1 != c.length &&
                        (s = f = !1);
                      var h = this.__chain__,
                        p = !!this.__actions__.length,
                        v = o && !h,
                        d = s && !p;
                      if (!o && f) {
                        e = d ? e : new nm(this);
                        var g = t.apply(e, u);
                        return (
                          g.__actions__.push({
                            func: ai,
                            args: [l],
                            thisArg: n,
                          }),
                          new n_(g, h)
                        );
                      }
                      return v && d
                        ? t.apply(this, u)
                        : ((g = this.thru(l)),
                          v ? (i ? g.value()[0] : g.value()) : g);
                    });
                }),
                es(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (t) {
                    var e = tj[t],
                      n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                      r = /^(?:pop|shift)$/.test(t);
                    nv.prototype[t] = function () {
                      var t = arguments;
                      if (r && !this.__chain__) {
                        var i = this.value();
                        return e.apply(aq(i) ? i : [], t);
                      }
                      return this[n](function (n) {
                        return e.apply(aq(n) ? n : [], t);
                      });
                    };
                  }
                ),
                nG(nm.prototype, function (t, e) {
                  var n = nv[e];
                  if (n) {
                    var r = n.name + "";
                    tk.call(na, r) || (na[r] = []),
                      na[r].push({ name: e, func: n });
                  }
                }),
                (na[rY(n, 2).name] = [{ name: "wrapper", func: n }]),
                (nm.prototype.clone = function () {
                  var t = new nm(this.__wrapped__);
                  return (
                    (t.__actions__ = rT(this.__actions__)),
                    (t.__dir__ = this.__dir__),
                    (t.__filtered__ = this.__filtered__),
                    (t.__iteratees__ = rT(this.__iteratees__)),
                    (t.__takeCount__ = this.__takeCount__),
                    (t.__views__ = rT(this.__views__)),
                    t
                  );
                }),
                (nm.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var t = new nm(this);
                    (t.__dir__ = -1), (t.__filtered__ = !0);
                  } else (t = this.clone()), (t.__dir__ *= -1);
                  return t;
                }),
                (nm.prototype.value = function () {
                  var t = this.__wrapped__.value(),
                    e = this.__dir__,
                    n = aq(t),
                    r = e < 0,
                    i = n ? t.length : 0,
                    a = (function (t, e, n) {
                      for (var r = -1, i = n.length; ++r < i; ) {
                        var a = n[r],
                          o = a.size;
                        switch (a.type) {
                          case "drop":
                            t += o;
                            break;
                          case "dropRight":
                            e -= o;
                            break;
                          case "take":
                            e = e9(e, t + o);
                            break;
                          case "takeRight":
                            t = e2(t, e - o);
                        }
                      }
                      return { start: t, end: e };
                    })(0, i, this.__views__),
                    o = a.start,
                    u = a.end,
                    s = u - o,
                    c = r ? u : o - 1,
                    f = this.__iteratees__,
                    l = f.length,
                    h = 0,
                    p = e9(s, this.__takeCount__);
                  if (!n || (!r && i == s && p == s))
                    return rE(t, this.__actions__);
                  var v = [];
                  t: for (; s-- && h < p; ) {
                    c += e;
                    for (var d = -1, g = t[c]; ++d < l; ) {
                      var _ = f[d],
                        m = _.iteratee,
                        y = _.type,
                        w = m(g);
                      if (2 == y) g = w;
                      else if (!w) {
                        if (1 == y) continue t;
                        break t;
                      }
                    }
                    v[h++] = g;
                  }
                  return v;
                }),
                (nv.prototype.at = aa),
                (nv.prototype.chain = function () {
                  return ar(this);
                }),
                (nv.prototype.commit = function () {
                  return new n_(this.value(), this.__chain__);
                }),
                (nv.prototype.next = function () {
                  this.__values__ === n && (this.__values__ = a9(this.value()));
                  var t = this.__index__ >= this.__values__.length,
                    e = t ? n : this.__values__[this.__index__++];
                  return { done: t, value: e };
                }),
                (nv.prototype.plant = function (t) {
                  for (var e, r = this; r instanceof ng; ) {
                    var i = iT(r);
                    (i.__index__ = 0),
                      (i.__values__ = n),
                      e ? (a.__wrapped__ = i) : (e = i);
                    var a = i;
                    r = r.__wrapped__;
                  }
                  return (a.__wrapped__ = t), e;
                }),
                (nv.prototype.reverse = function () {
                  var t = this.__wrapped__;
                  if (t instanceof nm) {
                    var e = t;
                    return (
                      this.__actions__.length && (e = new nm(this)),
                      (e = e.reverse()).__actions__.push({
                        func: ai,
                        args: [i1],
                        thisArg: n,
                      }),
                      new n_(e, this.__chain__)
                    );
                  }
                  return this.thru(i1);
                }),
                (nv.prototype.toJSON =
                  nv.prototype.valueOf =
                  nv.prototype.value =
                    function () {
                      return rE(this.__wrapped__, this.__actions__);
                    }),
                (nv.prototype.first = nv.prototype.head),
                t4 &&
                  (nv.prototype[t4] = function () {
                    return this;
                  }),
                nv
              );
            })();
          t7 ? (((t7.exports = eJ)._ = eJ), (t4._ = eJ)) : (t3._ = eJ);
        }.call(v));
      })(d, d.exports);
      var g = Object.defineProperty,
        _ = Object.defineProperties,
        m = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertySymbols,
        w = Object.prototype.hasOwnProperty,
        b = Object.prototype.propertyIsEnumerable,
        P = (t, e, n) =>
          e in t
            ? g(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        C = (t, e) => {
          for (var n in e || (e = {})) w.call(e, n) && P(t, n, e[n]);
          if (y) for (var n of y(e)) b.call(e, n) && P(t, n, e[n]);
          return t;
        },
        I = (t, e) => _(t, m(e));
      function A(t, e, n) {
        var r;
        let a = (0, i.DQ)(t);
        return (
          (null == (r = e.rpcMap) ? void 0 : r[a.reference]) ||
          ""
            .concat("https://rpc.walletconnect.com/v1/", "?chainId=")
            .concat(a.namespace, ":")
            .concat(a.reference, "&projectId=")
            .concat(n)
        );
      }
      function E(t) {
        return t.includes(":") ? t.split(":")[1] : t;
      }
      function j(t) {
        return t.map((t) =>
          "".concat(t.split(":")[0], ":").concat(t.split(":")[1])
        );
      }
      function x() {
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = O(t),
          r = O(e);
        return d.exports.merge(n, r);
      }
      function O(t) {
        var e, n, r, a;
        let o = {};
        if (!(0, i.L5)(t)) return o;
        for (let [u, s] of Object.entries(t)) {
          let t = (0, i.gp)(u) ? [u] : s.chains,
            c = s.methods || [],
            f = s.events || [],
            l = s.rpcMap || {},
            h = (0, i.M)(u);
          o[h] = I(C(C({}, o[h]), s), {
            chains: (0, i.eG)(t, null == (e = o[h]) ? void 0 : e.chains),
            methods: (0, i.eG)(c, null == (n = o[h]) ? void 0 : n.methods),
            events: (0, i.eG)(f, null == (r = o[h]) ? void 0 : r.events),
            rpcMap: C(C({}, l), null == (a = o[h]) ? void 0 : a.rpcMap),
          });
        }
        return o;
      }
      function H(t) {
        return t.includes(":") ? t.split(":")[2] : t;
      }
      function S(t) {
        return "number" == typeof t
          ? t
          : t.includes("0x")
          ? parseInt(t, 16)
          : isNaN(Number((t = t.includes(":") ? t.split(":")[1] : t)))
          ? t
          : Number(t);
      }
      let k = {},
        N = (t) => k[t],
        D = (t, e) => {
          k[t] = e;
        };
      class q {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(t)
            );
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return (
            (t &&
              t
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              let r = E(e);
              t[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || A(t, this.namespace, this.client.core.projectId);
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "polkadot"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      class R {
        async request(t) {
          switch (t.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(t);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(t.request.method)
            ? await this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(parseInt(t), e),
            (this.chainId = parseInt(t)),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(t)
            );
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        createHttpProvider(t, e) {
          let n =
            e ||
            A(
              "".concat(this.name, ":").concat(t),
              this.namespace,
              this.client.core.projectId
            );
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.k(n, N("disableProviderPing")));
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              let r = parseInt(E(e));
              t[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let t = this.chainId,
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        async handleSwitchChain(t) {
          var e, n;
          let r = t.request.params
              ? null == (e = t.request.params[0])
                ? void 0
                : e.chainId
              : "0x0",
            i = parseInt((r = r.startsWith("0x") ? r : "0x".concat(r)), 16);
          if (this.isChainApproved(i)) this.setDefaultChain("".concat(i));
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: t.topic,
              request: { method: t.request.method, params: [{ chainId: r }] },
              chainId: null == (n = this.namespace.chains) ? void 0 : n[0],
            }),
              this.setDefaultChain("".concat(i));
          else
            throw Error(
              "Failed to switch to chain 'eip155:".concat(
                i,
                "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."
              )
            );
          return null;
        }
        isChainApproved(t) {
          return this.namespace.chains.includes(
            "".concat(this.name, ":").concat(t)
          );
        }
        constructor(t) {
          (this.name = "eip155"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
      }
      class z {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(t)
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              let r = E(e);
              t[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || A(t, this.namespace, this.client.core.projectId);
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "solana"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      class L {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(this.chainId)
            );
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              let r = E(e);
              t[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || A(t, this.namespace, this.client.core.projectId);
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "cosmos"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      class U {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(this.chainId)
            );
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              let n = this.getCardanoRPCUrl(e),
                r = E(e);
              t[r] = this.createHttpProvider(r, n);
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        getCardanoRPCUrl(t) {
          let e = this.namespace.rpcMap;
          if (e) return e[t];
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || this.getCardanoRPCUrl(t);
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "cip34"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      class T {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(t)
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              let r = E(e);
              t[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || A(t, this.namespace, this.client.core.projectId);
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "elrond"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      class W {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          this.httpProviders[t] || this.setHttpProvider(t, e),
            (this.chainId = t),
            this.events.emit(
              p.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(t)
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return t
            ? [
                ...new Set(
                  t
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              let r = E(e);
              t[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || A(t, this.namespace, this.client.core.projectId);
          if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
          return new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "multiversx"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      class M {
        updateNamespace(t) {
          this.namespace = Object.assign(this.namespace, t);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let t = this.namespace.chains[0];
          if (!t) throw Error("ChainId not found");
          return t.split(":")[1];
        }
        request(t) {
          return this.namespace.methods.includes(t.request.method)
            ? this.client.request(t)
            : this.getHttpProvider().request(t.request);
        }
        setDefaultChain(t, e) {
          if (((this.chainId = t), !this.httpProviders[t])) {
            let n = e || A("".concat(this.name, ":").concat(t), this.namespace);
            if (!n) throw Error("No RPC url provided for chainId: ".concat(t));
            this.setHttpProvider(t, n);
          }
          this.events.emit(
            p.DEFAULT_CHAIN_CHANGED,
            "".concat(this.name, ":").concat(this.chainId)
          );
        }
        getAccounts() {
          let t = this.namespace.accounts;
          return (
            (t &&
              t
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let t = {};
          return (
            this.namespace.chains.forEach((e) => {
              var n;
              t[e] = this.createHttpProvider(
                e,
                null == (n = this.namespace.rpcMap) ? void 0 : n[e]
              );
            }),
            t
          );
        }
        getHttpProvider() {
          let t = "".concat(this.name, ":").concat(this.chainId),
            e = this.httpProviders[t];
          if (typeof e > "u")
            throw Error("JSON-RPC provider for ".concat(t, " not found"));
          return e;
        }
        setHttpProvider(t, e) {
          let n = this.createHttpProvider(t, e);
          n && (this.httpProviders[t] = n);
        }
        createHttpProvider(t, e) {
          let n = e || A(t, this.namespace);
          return typeof n > "u"
            ? void 0
            : new u.r(new o.Z(n, N("disableProviderPing")));
        }
        constructor(t) {
          (this.name = "near"),
            (this.namespace = t.namespace),
            (this.events = N("events")),
            (this.client = N("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
      }
      var F = Object.defineProperty,
        B = Object.defineProperties,
        $ = Object.getOwnPropertyDescriptors,
        G = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        J = Object.prototype.propertyIsEnumerable,
        K = (t, e, n) =>
          e in t
            ? F(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        V = (t, e) => {
          for (var n in e || (e = {})) Z.call(e, n) && K(t, n, e[n]);
          if (G) for (var n of G(e)) J.call(e, n) && K(t, n, e[n]);
          return t;
        },
        Y = (t, e) => B(t, $(e));
      class Q {
        static async init(t) {
          let e = new Q(t);
          return await e.initialize(), e;
        }
        async request(t, e, n) {
          let [r, i] = this.validateChain(e);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(r).request({
            request: V({}, t),
            chainId: "".concat(r, ":").concat(i),
            topic: this.session.topic,
            expiry: n,
          });
        }
        sendAsync(t, e, n, r) {
          let i = new Date().getTime();
          this.request(t, n, r)
            .then((t) => e(null, (0, f.formatJsonRpcResult)(i, t)))
            .catch((t) => e(t, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var t;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (t = this.session) ? void 0 : t.topic,
            reason: (0, i.D6)("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(t) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(t),
            await this.cleanupPendingPairings(),
            !t.skipPairing)
          )
            return await this.pair(t.pairingTopic);
        }
        on(t, e) {
          this.events.on(t, e);
        }
        once(t, e) {
          this.events.once(t, e);
        }
        removeListener(t, e) {
          this.events.removeListener(t, e);
        }
        off(t, e) {
          this.events.off(t, e);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(t) {
          this.shouldAbortPairingAttempt = !1;
          let e = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (e >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: n, approval: a } = await this.client.connect({
              pairingTopic: t,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            n && ((this.uri = n), this.events.emit("display_uri", n)),
              await a()
                .then((t) => {
                  this.session = t;
                  let e = (function (t) {
                    let e = {};
                    for (let [n, r] of Object.entries(t)) {
                      let t = r.methods || [],
                        a = r.events || [],
                        o = r.accounts || [],
                        u = (0, i.gp)(n)
                          ? [n]
                          : r.chains
                          ? r.chains
                          : j(r.accounts);
                      e[n] = { chains: u, methods: t, events: a, accounts: o };
                    }
                    return e;
                  })(t.namespaces);
                  (this.namespaces = x(this.namespaces, e)),
                    this.persist("namespaces", this.namespaces);
                })
                .catch((t) => {
                  if (t.message !== r.lO) throw t;
                  e++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(t, e) {
          try {
            if (!this.session) return;
            let [n, r] = this.validateChain(t);
            this.getProvider(n).setDefaultChain(r, e);
          } catch (t) {
            if (!/Please call connect/.test(t.message)) throw t;
          }
        }
        async cleanupPendingPairings() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger.info("Cleaning up inactive pairings...");
          let e = this.client.pairing.getAll();
          if ((0, i.qt)(e)) {
            for (let n of e)
              t.deletePairings
                ? this.client.core.expirer.set(n.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    n.topic
                  );
            this.logger.info("Inactive pairings cleared: ".concat(e.length));
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let t = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[t]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await r.ZP.init({
              logger: this.providerOpts.logger || l,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let t = [
            ...new Set(
              Object.keys(this.session.namespaces).map((t) => (0, i.M)(t))
            ),
          ];
          D("client", this.client),
            D("events", this.events),
            D("disableProviderPing", this.disableProviderPing),
            t.forEach((t) => {
              if (!this.session) return;
              let e = (function (t, e) {
                  let n = Object.keys(e.namespaces).filter((e) =>
                    e.includes(t)
                  );
                  if (!n.length) return [];
                  let r = [];
                  return (
                    n.forEach((t) => {
                      let n = e.namespaces[t].accounts;
                      r.push(...n);
                    }),
                    r
                  );
                })(t, this.session),
                n = j(e),
                r = Y(V({}, x(this.namespaces, this.optionalNamespaces)[t]), {
                  accounts: e,
                  chains: n,
                });
              switch (t) {
                case "eip155":
                  this.rpcProviders[t] = new R({ namespace: r });
                  break;
                case "solana":
                  this.rpcProviders[t] = new z({ namespace: r });
                  break;
                case "cosmos":
                  this.rpcProviders[t] = new L({ namespace: r });
                  break;
                case "polkadot":
                  this.rpcProviders[t] = new q({ namespace: r });
                  break;
                case "cip34":
                  this.rpcProviders[t] = new U({ namespace: r });
                  break;
                case "elrond":
                  this.rpcProviders[t] = new T({ namespace: r });
                  break;
                case "multiversx":
                  this.rpcProviders[t] = new W({ namespace: r });
                  break;
                case "near":
                  this.rpcProviders[t] = new M({ namespace: r });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (t) => {
            this.events.emit("session_ping", t);
          }),
            this.client.on("session_event", (t) => {
              let { params: e } = t,
                { event: n } = e;
              if ("accountsChanged" === n.name) {
                let t = n.data;
                t &&
                  (0, i.qt)(t) &&
                  this.events.emit("accountsChanged", t.map(H));
              } else if ("chainChanged" === n.name) {
                let t = e.chainId,
                  n = e.event.data,
                  r = (0, i.M)(t),
                  a = S(t) !== S(n) ? "".concat(r, ":").concat(S(n)) : t;
                this.onChainChanged(a);
              } else this.events.emit(n.name, n.data);
              this.events.emit("session_event", t);
            }),
            this.client.on("session_update", (t) => {
              var e;
              let { topic: n, params: r } = t,
                { namespaces: i } = r,
                a = null == (e = this.client) ? void 0 : e.session.get(n);
              (this.session = Y(V({}, a), { namespaces: i })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: n, params: r });
            }),
            this.client.on("session_delete", async (t) => {
              await this.cleanup(),
                this.events.emit("session_delete", t),
                this.events.emit(
                  "disconnect",
                  Y(V({}, (0, i.D6)("USER_DISCONNECTED")), { data: t.topic })
                );
            }),
            this.on(p.DEFAULT_CHAIN_CHANGED, (t) => {
              this.onChainChanged(t, !0);
            });
        }
        getProvider(t) {
          if (!this.rpcProviders[t])
            throw Error("Provider not found: ".concat(t));
          return this.rpcProviders[t];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((t) => {
            var e;
            this.getProvider(t).updateNamespace(
              null == (e = this.session) ? void 0 : e.namespaces[t]
            );
          });
        }
        setNamespaces(t) {
          let {
            namespaces: e,
            optionalNamespaces: n,
            sessionProperties: r,
          } = t;
          e && Object.keys(e).length && (this.namespaces = e),
            n && Object.keys(n).length && (this.optionalNamespaces = n),
            (this.sessionProperties = r),
            this.persist("namespaces", e),
            this.persist("optionalNamespaces", n);
        }
        validateChain(t) {
          let [e, n] = (null == t ? void 0 : t.split(":")) || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [e, n];
          if (
            e &&
            !Object.keys(this.namespaces || {})
              .map((t) => (0, i.M)(t))
              .includes(e)
          )
            throw Error(
              "Namespace '".concat(
                e,
                "' is not configured. Please call connect() first with namespace config."
              )
            );
          if (e && n) return [e, n];
          let r = (0, i.M)(Object.keys(this.namespaces)[0]),
            a = this.rpcProviders[r].getDefaultChain();
          return [r, a];
        }
        async requestAccounts() {
          let [t] = this.validateChain();
          return await this.getProvider(t).requestAccounts();
        }
        onChainChanged(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (!this.namespaces) return;
          let [n, r] = this.validateChain(t);
          r &&
            (e || this.getProvider(n).setDefaultChain(r),
            this.namespaces[n]
              ? (this.namespaces[n].defaultChain = r)
              : this.namespaces["".concat(n, ":").concat(r)]
              ? (this.namespaces["".concat(n, ":").concat(r)].defaultChain = r)
              : (this.namespaces["".concat(n, ":").concat(r)] = {
                  defaultChain: r,
                }),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", r));
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(t, e) {
          this.client.core.storage.setItem("".concat(h, "/").concat(t), e);
        }
        async getFromStore(t) {
          return await this.client.core.storage.getItem(
            "".concat(h, "/").concat(t)
          );
        }
        constructor(t) {
          (this.events = new (c())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = t),
            (this.logger =
              "u" > typeof (null == t ? void 0 : t.logger) &&
              "string" != typeof (null == t ? void 0 : t.logger)
                ? t.logger
                : (0, a.pino)(
                    (0, a.getDefaultLoggerOptions)({
                      level: (null == t ? void 0 : t.logger) || l,
                    })
                  )),
            (this.disableProviderPing =
              (null == t ? void 0 : t.disableProviderPing) || !1);
        }
      }
      let X = Q;
    },
  },
]);
