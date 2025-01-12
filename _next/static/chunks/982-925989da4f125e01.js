"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [982],
  {
    34451: function (e, t, r) {
      r.r(t),
        r.d(t, {
          ErrorCode: function () {
            return p;
          },
          FormatError: function () {
            return ep;
          },
          IntlMessageFormat: function () {
            return eT;
          },
          InvalidValueError: function () {
            return eE;
          },
          InvalidValueTypeError: function () {
            return em;
          },
          MissingValueError: function () {
            return eg;
          },
          PART_TYPE: function () {
            return E;
          },
          default: function () {
            return ev;
          },
          formatToParts: function () {
            return eb;
          },
          isFormatXMLElementFn: function () {
            return e_;
          },
        });
      var n,
        i,
        o,
        s,
        a,
        h,
        u,
        l,
        c,
        f,
        p,
        E,
        m = r(69703);
      function g(e) {
        return e.type === u.literal;
      }
      function _(e) {
        return e.type === u.number;
      }
      function b(e) {
        return e.type === u.date;
      }
      function d(e) {
        return e.type === u.time;
      }
      function T(e) {
        return e.type === u.select;
      }
      function v(e) {
        return e.type === u.plural;
      }
      function y(e) {
        return e.type === u.tag;
      }
      function A(e) {
        return !!(e && "object" == typeof e && e.type === l.number);
      }
      function H(e) {
        return !!(e && "object" == typeof e && e.type === l.dateTime);
      }
      ((n = h || (h = {}))[(n.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
        "EXPECT_ARGUMENT_CLOSING_BRACE"),
        (n[(n.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
        (n[(n.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
        (n[(n.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
        (n[(n.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
        (n[(n.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
        (n[(n.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
        (n[(n.INVALID_DATE_TIME_SKELETON = 8)] = "INVALID_DATE_TIME_SKELETON"),
        (n[(n.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
        (n[(n.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
        (n[(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
          "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
        (n[(n.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
          "EXPECT_SELECT_ARGUMENT_OPTIONS"),
        (n[(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
          "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (n[(n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
          "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
        (n[(n.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR"),
        (n[(n.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
        (n[(n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
          "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
        (n[(n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
          "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
        (n[(n.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
          "INVALID_PLURAL_ARGUMENT_SELECTOR"),
        (n[(n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
          "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
        (n[(n.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
          "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
        (n[(n.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
        (n[(n.INVALID_TAG = 23)] = "INVALID_TAG"),
        (n[(n.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
        (n[(n.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
        (n[(n.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG"),
        ((i = u || (u = {}))[(i.literal = 0)] = "literal"),
        (i[(i.argument = 1)] = "argument"),
        (i[(i.number = 2)] = "number"),
        (i[(i.date = 3)] = "date"),
        (i[(i.time = 4)] = "time"),
        (i[(i.select = 5)] = "select"),
        (i[(i.plural = 6)] = "plural"),
        (i[(i.pound = 7)] = "pound"),
        (i[(i.tag = 8)] = "tag"),
        ((o = l || (l = {}))[(o.number = 0)] = "number"),
        (o[(o.dateTime = 1)] = "dateTime");
      var I = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        B =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
        S = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
        N = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        L = /^(@+)?(\+|#+)?[rs]?$/g,
        P = /(\*)(0+)|(#+)(0+)|(0+)/g,
        M = /^(0+)$/;
      function C(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(L, function (e, r, n) {
            return (
              "string" != typeof n
                ? ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits = r.length))
                : "+" === n
                ? (t.minimumSignificantDigits = r.length)
                : "#" === r[0]
                ? (t.maximumSignificantDigits = r.length)
                : ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits =
                    r.length + ("string" == typeof n ? n.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function R(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function O(e) {
        return R(e) || {};
      }
      var G = {
          AX: ["H"],
          BQ: ["H"],
          CP: ["H"],
          CZ: ["H"],
          DK: ["H"],
          FI: ["H"],
          ID: ["H"],
          IS: ["H"],
          ML: ["H"],
          NE: ["H"],
          RU: ["H"],
          SE: ["H"],
          SJ: ["H"],
          SK: ["H"],
          AS: ["h", "H"],
          BT: ["h", "H"],
          DJ: ["h", "H"],
          ER: ["h", "H"],
          GH: ["h", "H"],
          IN: ["h", "H"],
          LS: ["h", "H"],
          PG: ["h", "H"],
          PW: ["h", "H"],
          SO: ["h", "H"],
          TO: ["h", "H"],
          VU: ["h", "H"],
          WS: ["h", "H"],
          "001": ["H", "h"],
          AL: ["h", "H", "hB"],
          TD: ["h", "H", "hB"],
          "ca-ES": ["H", "h", "hB"],
          CF: ["H", "h", "hB"],
          CM: ["H", "h", "hB"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          LU: ["H", "h", "hB"],
          NP: ["H", "h", "hB"],
          PF: ["H", "h", "hB"],
          SC: ["H", "h", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          TF: ["H", "h", "hB"],
          VA: ["H", "h", "hB"],
          CY: ["h", "H", "hb", "hB"],
          GR: ["h", "H", "hb", "hB"],
          CO: ["h", "H", "hB", "hb"],
          DO: ["h", "H", "hB", "hb"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          NA: ["h", "H", "hB", "hb"],
          PA: ["h", "H", "hB", "hb"],
          PR: ["h", "H", "hB", "hb"],
          VE: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AI: ["H", "h", "hb", "hB"],
          BW: ["H", "h", "hb", "hB"],
          BZ: ["H", "h", "hb", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CX: ["H", "h", "hb", "hB"],
          DG: ["H", "h", "hb", "hB"],
          FK: ["H", "h", "hb", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GI: ["H", "h", "hb", "hB"],
          IE: ["H", "h", "hb", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IO: ["H", "h", "hb", "hB"],
          JE: ["H", "h", "hb", "hB"],
          LT: ["H", "h", "hb", "hB"],
          MK: ["H", "h", "hb", "hB"],
          MN: ["H", "h", "hb", "hB"],
          MS: ["H", "h", "hb", "hB"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          PN: ["H", "h", "hb", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SX: ["H", "h", "hb", "hB"],
          TA: ["H", "h", "hb", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          "af-ZA": ["H", "h", "hB", "hb"],
          AR: ["H", "h", "hB", "hb"],
          CL: ["H", "h", "hB", "hb"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          EA: ["H", "h", "hB", "hb"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          GT: ["H", "h", "hB", "hb"],
          HN: ["H", "h", "hB", "hb"],
          IC: ["H", "h", "hB", "hb"],
          KG: ["H", "h", "hB", "hb"],
          KM: ["H", "h", "hB", "hb"],
          LK: ["H", "h", "hB", "hb"],
          MA: ["H", "h", "hB", "hb"],
          MX: ["H", "h", "hB", "hb"],
          NI: ["H", "h", "hB", "hb"],
          PY: ["H", "h", "hB", "hb"],
          SV: ["H", "h", "hB", "hb"],
          UY: ["H", "h", "hB", "hb"],
          JP: ["H", "h", "K"],
          AD: ["H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AT: ["H", "hB"],
          AW: ["H", "hB"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BR: ["H", "hB"],
          CG: ["H", "hB"],
          CI: ["H", "hB"],
          CV: ["H", "hB"],
          DE: ["H", "hB"],
          EE: ["H", "hB"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GF: ["H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GW: ["H", "hB"],
          HR: ["H", "hB"],
          IL: ["H", "hB"],
          IT: ["H", "hB"],
          KZ: ["H", "hB"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          MF: ["H", "hB"],
          MQ: ["H", "hB"],
          MZ: ["H", "hB"],
          NC: ["H", "hB"],
          NL: ["H", "hB"],
          PM: ["H", "hB"],
          PT: ["H", "hB"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          SI: ["H", "hB"],
          SR: ["H", "hB"],
          ST: ["H", "hB"],
          TG: ["H", "hB"],
          TR: ["H", "hB"],
          WF: ["H", "hB"],
          YT: ["H", "hB"],
          BD: ["h", "hB", "H"],
          PK: ["h", "hB", "H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BG: ["H", "hB", "h"],
          CH: ["H", "hB", "h"],
          GE: ["H", "hB", "h"],
          LI: ["H", "hB", "h"],
          ME: ["H", "hB", "h"],
          RS: ["H", "hB", "h"],
          UA: ["H", "hB", "h"],
          UZ: ["H", "hB", "h"],
          XK: ["H", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          BB: ["h", "hb", "H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          CA: ["h", "hb", "H", "hB"],
          DM: ["h", "hb", "H", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          FJ: ["h", "hb", "H", "hB"],
          FM: ["h", "hb", "H", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GM: ["h", "hb", "H", "hB"],
          GU: ["h", "hb", "H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          JM: ["h", "hb", "H", "hB"],
          KI: ["h", "hb", "H", "hB"],
          KN: ["h", "hb", "H", "hB"],
          KY: ["h", "hb", "H", "hB"],
          LC: ["h", "hb", "H", "hB"],
          LR: ["h", "hb", "H", "hB"],
          MH: ["h", "hb", "H", "hB"],
          MP: ["h", "hb", "H", "hB"],
          MW: ["h", "hb", "H", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          SB: ["h", "hb", "H", "hB"],
          SG: ["h", "hb", "H", "hB"],
          SL: ["h", "hb", "H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          SZ: ["h", "hb", "H", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          BO: ["H", "hB", "h", "hb"],
          EC: ["H", "hB", "h", "hb"],
          ES: ["H", "hB", "h", "hb"],
          GQ: ["H", "hB", "h", "hb"],
          PE: ["H", "hB", "h", "hb"],
          AE: ["h", "hB", "hb", "H"],
          "ar-001": ["h", "hB", "hb", "H"],
          BH: ["h", "hB", "hb", "H"],
          DZ: ["h", "hB", "hb", "H"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          HK: ["h", "hB", "hb", "H"],
          IQ: ["h", "hB", "hb", "H"],
          JO: ["h", "hB", "hb", "H"],
          KW: ["h", "hB", "hb", "H"],
          LB: ["h", "hB", "hb", "H"],
          LY: ["h", "hB", "hb", "H"],
          MO: ["h", "hB", "hb", "H"],
          MR: ["h", "hB", "hb", "H"],
          OM: ["h", "hB", "hb", "H"],
          PH: ["h", "hB", "hb", "H"],
          PS: ["h", "hB", "hb", "H"],
          QA: ["h", "hB", "hb", "H"],
          SA: ["h", "hB", "hb", "H"],
          SD: ["h", "hB", "hb", "H"],
          SY: ["h", "hB", "hb", "H"],
          TN: ["h", "hB", "hb", "H"],
          YE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          LA: ["H", "hb", "hB", "h"],
          CN: ["H", "hB", "hb", "h"],
          LV: ["H", "hB", "hb", "h"],
          TL: ["H", "hB", "hb", "h"],
          "zu-ZA": ["H", "hB", "hb", "h"],
          CD: ["hB", "H"],
          IR: ["hB", "H"],
          "hi-IN": ["hB", "h", "H"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "te-IN": ["hB", "h", "H"],
          KH: ["hB", "h", "H", "hb"],
          "ta-IN": ["hB", "h", "hb", "H"],
          BN: ["hb", "hB", "h", "H"],
          MY: ["hb", "hB", "h", "H"],
          ET: ["hB", "hb", "h", "H"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          TW: ["hB", "hb", "h", "H"],
          KE: ["hB", "hb", "H", "h"],
          MM: ["hB", "hb", "H", "h"],
          TZ: ["hB", "hb", "H", "h"],
          UG: ["hB", "hb", "H", "h"],
        },
        F = new RegExp("^".concat(I.source, "*")),
        w = new RegExp("".concat(I.source, "*$"));
      function U(e, t) {
        return { start: e, end: t };
      }
      var D = !!String.prototype.startsWith,
        k = !!String.fromCodePoint,
        V = !!Object.fromEntries,
        x = !!String.prototype.codePointAt,
        j = !!String.prototype.trimStart,
        X = !!String.prototype.trimEnd,
        K = Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" == typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                9007199254740991 >= Math.abs(e)
              );
            },
        Z = !0;
      try {
        var Y = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        Z =
          (null === (c = Y.exec("a")) || void 0 === c ? void 0 : c[0]) === "a";
      } catch (e) {
        Z = !1;
      }
      var z = D
          ? function (e, t, r) {
              return e.startsWith(t, r);
            }
          : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
            },
        W = k
          ? String.fromCodePoint
          : function () {
              for (var e, t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
              for (var n = "", i = t.length, o = 0; i > o; ) {
                if ((e = t[o++]) > 1114111)
                  throw RangeError(e + " is not a valid code point");
                n +=
                  e < 65536
                    ? String.fromCharCode(e)
                    : String.fromCharCode(
                        ((e -= 65536) >> 10) + 55296,
                        (e % 1024) + 56320
                      );
              }
              return n;
            },
        Q = V
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, r = 0; r < e.length; r++) {
                var n = e[r],
                  i = n[0],
                  o = n[1];
                t[i] = o;
              }
              return t;
            },
        q = x
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var r,
                n = e.length;
              if (!(t < 0) && !(t >= n)) {
                var i = e.charCodeAt(t);
                return i < 55296 ||
                  i > 56319 ||
                  t + 1 === n ||
                  (r = e.charCodeAt(t + 1)) < 56320 ||
                  r > 57343
                  ? i
                  : ((i - 55296) << 10) + (r - 56320) + 65536;
              }
            },
        J = j
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(F, "");
            },
        $ = X
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(w, "");
            };
      function ee(e, t) {
        return new RegExp(e, t);
      }
      if (Z) {
        var et = ee("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        f = function (e, t) {
          var r;
          return (
            (et.lastIndex = t),
            null !== (r = et.exec(e)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        f = function (e, t) {
          for (var r = []; ; ) {
            var n,
              i = q(e, t);
            if (
              void 0 === i ||
              ei(i) ||
              ((n = i) >= 33 && n <= 35) ||
              36 === n ||
              (n >= 37 && n <= 39) ||
              40 === n ||
              41 === n ||
              42 === n ||
              43 === n ||
              44 === n ||
              45 === n ||
              (n >= 46 && n <= 47) ||
              (n >= 58 && n <= 59) ||
              (n >= 60 && n <= 62) ||
              (n >= 63 && n <= 64) ||
              91 === n ||
              92 === n ||
              93 === n ||
              94 === n ||
              96 === n ||
              123 === n ||
              124 === n ||
              125 === n ||
              126 === n ||
              161 === n ||
              (n >= 162 && n <= 165) ||
              166 === n ||
              167 === n ||
              169 === n ||
              171 === n ||
              172 === n ||
              174 === n ||
              176 === n ||
              177 === n ||
              182 === n ||
              187 === n ||
              191 === n ||
              215 === n ||
              247 === n ||
              (n >= 8208 && n <= 8213) ||
              (n >= 8214 && n <= 8215) ||
              8216 === n ||
              8217 === n ||
              8218 === n ||
              (n >= 8219 && n <= 8220) ||
              8221 === n ||
              8222 === n ||
              8223 === n ||
              (n >= 8224 && n <= 8231) ||
              (n >= 8240 && n <= 8248) ||
              8249 === n ||
              8250 === n ||
              (n >= 8251 && n <= 8254) ||
              (n >= 8257 && n <= 8259) ||
              8260 === n ||
              8261 === n ||
              8262 === n ||
              (n >= 8263 && n <= 8273) ||
              8274 === n ||
              8275 === n ||
              (n >= 8277 && n <= 8286) ||
              (n >= 8592 && n <= 8596) ||
              (n >= 8597 && n <= 8601) ||
              (n >= 8602 && n <= 8603) ||
              (n >= 8604 && n <= 8607) ||
              8608 === n ||
              (n >= 8609 && n <= 8610) ||
              8611 === n ||
              (n >= 8612 && n <= 8613) ||
              8614 === n ||
              (n >= 8615 && n <= 8621) ||
              8622 === n ||
              (n >= 8623 && n <= 8653) ||
              (n >= 8654 && n <= 8655) ||
              (n >= 8656 && n <= 8657) ||
              8658 === n ||
              8659 === n ||
              8660 === n ||
              (n >= 8661 && n <= 8691) ||
              (n >= 8692 && n <= 8959) ||
              (n >= 8960 && n <= 8967) ||
              8968 === n ||
              8969 === n ||
              8970 === n ||
              8971 === n ||
              (n >= 8972 && n <= 8991) ||
              (n >= 8992 && n <= 8993) ||
              (n >= 8994 && n <= 9e3) ||
              9001 === n ||
              9002 === n ||
              (n >= 9003 && n <= 9083) ||
              9084 === n ||
              (n >= 9085 && n <= 9114) ||
              (n >= 9115 && n <= 9139) ||
              (n >= 9140 && n <= 9179) ||
              (n >= 9180 && n <= 9185) ||
              (n >= 9186 && n <= 9254) ||
              (n >= 9255 && n <= 9279) ||
              (n >= 9280 && n <= 9290) ||
              (n >= 9291 && n <= 9311) ||
              (n >= 9472 && n <= 9654) ||
              9655 === n ||
              (n >= 9656 && n <= 9664) ||
              9665 === n ||
              (n >= 9666 && n <= 9719) ||
              (n >= 9720 && n <= 9727) ||
              (n >= 9728 && n <= 9838) ||
              9839 === n ||
              (n >= 9840 && n <= 10087) ||
              10088 === n ||
              10089 === n ||
              10090 === n ||
              10091 === n ||
              10092 === n ||
              10093 === n ||
              10094 === n ||
              10095 === n ||
              10096 === n ||
              10097 === n ||
              10098 === n ||
              10099 === n ||
              10100 === n ||
              10101 === n ||
              (n >= 10132 && n <= 10175) ||
              (n >= 10176 && n <= 10180) ||
              10181 === n ||
              10182 === n ||
              (n >= 10183 && n <= 10213) ||
              10214 === n ||
              10215 === n ||
              10216 === n ||
              10217 === n ||
              10218 === n ||
              10219 === n ||
              10220 === n ||
              10221 === n ||
              10222 === n ||
              10223 === n ||
              (n >= 10224 && n <= 10239) ||
              (n >= 10240 && n <= 10495) ||
              (n >= 10496 && n <= 10626) ||
              10627 === n ||
              10628 === n ||
              10629 === n ||
              10630 === n ||
              10631 === n ||
              10632 === n ||
              10633 === n ||
              10634 === n ||
              10635 === n ||
              10636 === n ||
              10637 === n ||
              10638 === n ||
              10639 === n ||
              10640 === n ||
              10641 === n ||
              10642 === n ||
              10643 === n ||
              10644 === n ||
              10645 === n ||
              10646 === n ||
              10647 === n ||
              10648 === n ||
              (n >= 10649 && n <= 10711) ||
              10712 === n ||
              10713 === n ||
              10714 === n ||
              10715 === n ||
              (n >= 10716 && n <= 10747) ||
              10748 === n ||
              10749 === n ||
              (n >= 10750 && n <= 11007) ||
              (n >= 11008 && n <= 11055) ||
              (n >= 11056 && n <= 11076) ||
              (n >= 11077 && n <= 11078) ||
              (n >= 11079 && n <= 11084) ||
              (n >= 11085 && n <= 11123) ||
              (n >= 11124 && n <= 11125) ||
              (n >= 11126 && n <= 11157) ||
              11158 === n ||
              (n >= 11159 && n <= 11263) ||
              (n >= 11776 && n <= 11777) ||
              11778 === n ||
              11779 === n ||
              11780 === n ||
              11781 === n ||
              (n >= 11782 && n <= 11784) ||
              11785 === n ||
              11786 === n ||
              11787 === n ||
              11788 === n ||
              11789 === n ||
              (n >= 11790 && n <= 11798) ||
              11799 === n ||
              (n >= 11800 && n <= 11801) ||
              11802 === n ||
              11803 === n ||
              11804 === n ||
              11805 === n ||
              (n >= 11806 && n <= 11807) ||
              11808 === n ||
              11809 === n ||
              11810 === n ||
              11811 === n ||
              11812 === n ||
              11813 === n ||
              11814 === n ||
              11815 === n ||
              11816 === n ||
              11817 === n ||
              (n >= 11818 && n <= 11822) ||
              11823 === n ||
              (n >= 11824 && n <= 11833) ||
              (n >= 11834 && n <= 11835) ||
              (n >= 11836 && n <= 11839) ||
              11840 === n ||
              11841 === n ||
              11842 === n ||
              (n >= 11843 && n <= 11855) ||
              (n >= 11856 && n <= 11857) ||
              11858 === n ||
              (n >= 11859 && n <= 11903) ||
              (n >= 12289 && n <= 12291) ||
              12296 === n ||
              12297 === n ||
              12298 === n ||
              12299 === n ||
              12300 === n ||
              12301 === n ||
              12302 === n ||
              12303 === n ||
              12304 === n ||
              12305 === n ||
              (n >= 12306 && n <= 12307) ||
              12308 === n ||
              12309 === n ||
              12310 === n ||
              12311 === n ||
              12312 === n ||
              12313 === n ||
              12314 === n ||
              12315 === n ||
              12316 === n ||
              12317 === n ||
              (n >= 12318 && n <= 12319) ||
              12320 === n ||
              12336 === n ||
              64830 === n ||
              64831 === n ||
              (n >= 65093 && n <= 65094)
            )
              break;
            r.push(i), (t += i >= 65536 ? 2 : 1);
          }
          return W.apply(void 0, r);
        };
      var er = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, r) {
            for (var n = []; !this.isEOF(); ) {
              var i = this.char();
              if (123 === i) {
                var o = this.parseArgument(e, r);
                if (o.err) return o;
                n.push(o.val);
              } else if (125 === i && e > 0) break;
              else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                var s = this.clonePosition();
                this.bump(),
                  n.push({
                    type: u.pound,
                    location: U(s, this.clonePosition()),
                  });
              } else if (60 !== i || this.ignoreTag || 47 !== this.peek()) {
                if (60 === i && !this.ignoreTag && en(this.peek() || 0)) {
                  var o = this.parseTag(e, t);
                  if (o.err) return o;
                  n.push(o.val);
                } else {
                  var o = this.parseLiteral(e, t);
                  if (o.err) return o;
                  n.push(o.val);
                }
              } else {
                if (!r)
                  return this.error(
                    h.UNMATCHED_CLOSING_TAG,
                    U(this.clonePosition(), this.clonePosition())
                  );
                break;
              }
            }
            return { val: n, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: u.literal,
                  value: "<".concat(n, "/>"),
                  location: U(r, this.clonePosition()),
                },
                err: null,
              };
            if (!this.bumpIf(">"))
              return this.error(h.INVALID_TAG, U(r, this.clonePosition()));
            var i = this.parseMessage(e + 1, t, !0);
            if (i.err) return i;
            var o = i.val,
              s = this.clonePosition();
            if (!this.bumpIf("</"))
              return this.error(h.UNCLOSED_TAG, U(r, this.clonePosition()));
            if (this.isEOF() || !en(this.char()))
              return this.error(h.INVALID_TAG, U(s, this.clonePosition()));
            var a = this.clonePosition();
            return n !== this.parseTagName()
              ? this.error(h.UNMATCHED_CLOSING_TAG, U(a, this.clonePosition()))
              : (this.bumpSpace(), this.bumpIf(">"))
              ? {
                  val: {
                    type: u.tag,
                    value: n,
                    children: o,
                    location: U(r, this.clonePosition()),
                  },
                  err: null,
                }
              : this.error(h.INVALID_TAG, U(s, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e,
              t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (e = this.char()) ||
                46 === e ||
                (e >= 48 && e <= 57) ||
                95 === e ||
                (e >= 97 && e <= 122) ||
                (e >= 65 && e <= 90) ||
                183 == e ||
                (e >= 192 && e <= 214) ||
                (e >= 216 && e <= 246) ||
                (e >= 248 && e <= 893) ||
                (e >= 895 && e <= 8191) ||
                (e >= 8204 && e <= 8205) ||
                (e >= 8255 && e <= 8256) ||
                (e >= 8304 && e <= 8591) ||
                (e >= 11264 && e <= 12271) ||
                (e >= 12289 && e <= 55295) ||
                (e >= 63744 && e <= 64975) ||
                (e >= 65008 && e <= 65533) ||
                (e >= 65536 && e <= 983039));

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var i = this.tryParseQuote(t);
              if (i) {
                n += i;
                continue;
              }
              var o = this.tryParseUnquoted(e, t);
              if (o) {
                n += o;
                continue;
              }
              var s = this.tryParseLeftAngleBracket();
              if (s) {
                n += s;
                continue;
              }
              break;
            }
            var a = U(r, this.clonePosition());
            return {
              val: { type: u.literal, value: n, location: a },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            var e;
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (en((e = this.peek() || 0)) || 47 === e))
              ? null
              : (this.bump(), "<");
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 === this.peek()) t.push(39), this.bump();
                else {
                  this.bump();
                  break;
                }
              } else t.push(r);
              this.bump();
            }
            return W.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === t || "selectordinal" === t)) ||
              (125 === r && e > 0)
              ? null
              : (this.bump(), W(r));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                h.EXPECT_ARGUMENT_CLOSING_BRACE,
                U(r, this.clonePosition())
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(h.EMPTY_ARGUMENT, U(r, this.clonePosition()))
              );
            var n = this.parseIdentifierIfPossible().value;
            if (!n)
              return this.error(
                h.MALFORMED_ARGUMENT,
                U(r, this.clonePosition())
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                h.EXPECT_ARGUMENT_CLOSING_BRACE,
                U(r, this.clonePosition())
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: u.argument,
                      value: n,
                      location: U(r, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                if ((this.bump(), this.bumpSpace(), this.isEOF()))
                  return this.error(
                    h.EXPECT_ARGUMENT_CLOSING_BRACE,
                    U(r, this.clonePosition())
                  );
                return this.parseArgumentOptions(e, t, n, r);
              default:
                return this.error(
                  h.MALFORMED_ARGUMENT,
                  U(r, this.clonePosition())
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              r = f(this.message, t),
              n = t + r.length;
            return (
              this.bumpTo(n), { value: r, location: U(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, r, n) {
            var i,
              o = this.clonePosition(),
              s = this.parseIdentifierIfPossible().value,
              a = this.clonePosition();
            switch (s) {
              case "":
                return this.error(h.EXPECT_ARGUMENT_TYPE, U(o, a));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var c = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var f = this.clonePosition(),
                    p = this.parseSimpleArgStyleIfPossible();
                  if (p.err) return p;
                  var E = $(p.val);
                  if (0 === E.length)
                    return this.error(
                      h.EXPECT_ARGUMENT_STYLE,
                      U(this.clonePosition(), this.clonePosition())
                    );
                  c = { style: E, styleLocation: U(f, this.clonePosition()) };
                }
                var g = this.tryParseArgumentClose(n);
                if (g.err) return g;
                var _ = U(n, this.clonePosition());
                if (c && z(null == c ? void 0 : c.style, "::", 0)) {
                  var b,
                    d = J(c.style.slice(2));
                  if ("number" === s) {
                    var p = this.parseNumberSkeletonFromString(
                      d,
                      c.styleLocation
                    );
                    if (p.err) return p;
                    return {
                      val: {
                        type: u.number,
                        value: r,
                        location: _,
                        style: p.val,
                      },
                      err: null,
                    };
                  }
                  if (0 === d.length)
                    return this.error(h.EXPECT_DATE_TIME_SKELETON, _);
                  var T = d;
                  this.locale &&
                    (T = (function (e, t) {
                      for (var r = "", n = 0; n < e.length; n++) {
                        var i = e.charAt(n);
                        if ("j" === i) {
                          for (
                            var o = 0;
                            n + 1 < e.length && e.charAt(n + 1) === i;

                          )
                            o++, n++;
                          var s = 1 + (1 & o),
                            a = o < 2 ? 1 : 3 + (o >> 1),
                            h = (function (e) {
                              var t,
                                r = e.hourCycle;
                              if (
                                (void 0 === r &&
                                  e.hourCycles &&
                                  e.hourCycles.length &&
                                  (r = e.hourCycles[0]),
                                r)
                              )
                                switch (r) {
                                  case "h24":
                                    return "k";
                                  case "h23":
                                    return "H";
                                  case "h12":
                                    return "h";
                                  case "h11":
                                    return "K";
                                  default:
                                    throw Error("Invalid hourCycle");
                                }
                              var n = e.language;
                              return (
                                "root" !== n && (t = e.maximize().region),
                                (G[t || ""] ||
                                  G[n || ""] ||
                                  G["".concat(n, "-001")] ||
                                  G["001"])[0]
                              );
                            })(t);
                          for (("H" == h || "k" == h) && (a = 0); a-- > 0; )
                            r += "a";
                          for (; s-- > 0; ) r = h + r;
                        } else "J" === i ? (r += "H") : (r += i);
                      }
                      return r;
                    })(d, this.locale));
                  var E = {
                    type: l.dateTime,
                    pattern: T,
                    location: c.styleLocation,
                    parsedOptions: this.shouldParseSkeletons
                      ? ((b = {}),
                        T.replace(B, function (e) {
                          var t = e.length;
                          switch (e[0]) {
                            case "G":
                              b.era =
                                4 === t ? "long" : 5 === t ? "narrow" : "short";
                              break;
                            case "y":
                              b.year = 2 === t ? "2-digit" : "numeric";
                              break;
                            case "Y":
                            case "u":
                            case "U":
                            case "r":
                              throw RangeError(
                                "`Y/u/U/r` (year) patterns are not supported, use `y` instead"
                              );
                            case "q":
                            case "Q":
                              throw RangeError(
                                "`q/Q` (quarter) patterns are not supported"
                              );
                            case "M":
                            case "L":
                              b.month = [
                                "numeric",
                                "2-digit",
                                "short",
                                "long",
                                "narrow",
                              ][t - 1];
                              break;
                            case "w":
                            case "W":
                              throw RangeError(
                                "`w/W` (week) patterns are not supported"
                              );
                            case "d":
                              b.day = ["numeric", "2-digit"][t - 1];
                              break;
                            case "D":
                            case "F":
                            case "g":
                              throw RangeError(
                                "`D/F/g` (day) patterns are not supported, use `d` instead"
                              );
                            case "E":
                              b.weekday =
                                4 === t
                                  ? "short"
                                  : 5 === t
                                  ? "narrow"
                                  : "short";
                              break;
                            case "e":
                              if (t < 4)
                                throw RangeError(
                                  "`e..eee` (weekday) patterns are not supported"
                                );
                              b.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "c":
                              if (t < 4)
                                throw RangeError(
                                  "`c..ccc` (weekday) patterns are not supported"
                                );
                              b.weekday = ["short", "long", "narrow", "short"][
                                t - 4
                              ];
                              break;
                            case "a":
                              b.hour12 = !0;
                              break;
                            case "b":
                            case "B":
                              throw RangeError(
                                "`b/B` (period) patterns are not supported, use `a` instead"
                              );
                            case "h":
                              (b.hourCycle = "h12"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "H":
                              (b.hourCycle = "h23"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "K":
                              (b.hourCycle = "h11"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "k":
                              (b.hourCycle = "h24"),
                                (b.hour = ["numeric", "2-digit"][t - 1]);
                              break;
                            case "j":
                            case "J":
                            case "C":
                              throw RangeError(
                                "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead"
                              );
                            case "m":
                              b.minute = ["numeric", "2-digit"][t - 1];
                              break;
                            case "s":
                              b.second = ["numeric", "2-digit"][t - 1];
                              break;
                            case "S":
                            case "A":
                              throw RangeError(
                                "`S/A` (second) patterns are not supported, use `s` instead"
                              );
                            case "z":
                              b.timeZoneName = t < 4 ? "short" : "long";
                              break;
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                              throw RangeError(
                                "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead"
                              );
                          }
                          return "";
                        }),
                        b)
                      : {},
                  };
                  return {
                    val: {
                      type: "date" === s ? u.date : u.time,
                      value: r,
                      location: _,
                      style: E,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === s
                        ? u.number
                        : "date" === s
                        ? u.date
                        : u.time,
                    value: r,
                    location: _,
                    style:
                      null !== (i = null == c ? void 0 : c.style) &&
                      void 0 !== i
                        ? i
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var v = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    h.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    U(v, (0, m.__assign)({}, v))
                  );
                this.bumpSpace();
                var y = this.parseIdentifierIfPossible(),
                  A = 0;
                if ("select" !== s && "offset" === y.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      h.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      U(this.clonePosition(), this.clonePosition())
                    );
                  this.bumpSpace();
                  var p = this.tryParseDecimalInteger(
                    h.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    h.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE
                  );
                  if (p.err) return p;
                  this.bumpSpace(),
                    (y = this.parseIdentifierIfPossible()),
                    (A = p.val);
                }
                var H = this.tryParsePluralOrSelectOptions(e, s, t, y);
                if (H.err) return H;
                var g = this.tryParseArgumentClose(n);
                if (g.err) return g;
                var I = U(n, this.clonePosition());
                if ("select" === s)
                  return {
                    val: {
                      type: u.select,
                      value: r,
                      options: Q(H.val),
                      location: I,
                    },
                    err: null,
                  };
                return {
                  val: {
                    type: u.plural,
                    value: r,
                    options: Q(H.val),
                    offset: A,
                    pluralType: "plural" === s ? "cardinal" : "ordinal",
                    location: I,
                  },
                  err: null,
                };
              default:
                return this.error(h.INVALID_ARGUMENT_TYPE, U(o, a));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  h.EXPECT_ARGUMENT_CLOSING_BRACE,
                  U(e, this.clonePosition())
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); )
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      h.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      U(r, this.clonePosition())
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
              r = (function (e) {
                if (0 === e.length)
                  throw Error("Number skeleton cannot be empty");
                for (
                  var t = e.split(S).filter(function (e) {
                      return e.length > 0;
                    }),
                    r = [],
                    n = 0;
                  n < t.length;
                  n++
                ) {
                  var i = t[n].split("/");
                  if (0 === i.length) throw Error("Invalid number skeleton");
                  for (var o = i[0], s = i.slice(1), a = 0; a < s.length; a++)
                    if (0 === s[a].length)
                      throw Error("Invalid number skeleton");
                  r.push({ stem: o, options: s });
                }
                return r;
              })(e);
            } catch (e) {
              return this.error(h.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: l.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons
                  ? (function (e) {
                      for (var t = {}, r = 0; r < e.length; r++) {
                        var n = e[r];
                        switch (n.stem) {
                          case "percent":
                          case "%":
                            t.style = "percent";
                            continue;
                          case "%x100":
                            (t.style = "percent"), (t.scale = 100);
                            continue;
                          case "currency":
                            (t.style = "currency"), (t.currency = n.options[0]);
                            continue;
                          case "group-off":
                          case ",_":
                            t.useGrouping = !1;
                            continue;
                          case "precision-integer":
                          case ".":
                            t.maximumFractionDigits = 0;
                            continue;
                          case "measure-unit":
                          case "unit":
                            (t.style = "unit"),
                              (t.unit = n.options[0].replace(/^(.*?)-/, ""));
                            continue;
                          case "compact-short":
                          case "K":
                            (t.notation = "compact"),
                              (t.compactDisplay = "short");
                            continue;
                          case "compact-long":
                          case "KK":
                            (t.notation = "compact"),
                              (t.compactDisplay = "long");
                            continue;
                          case "scientific":
                            t = (0, m.__assign)(
                              (0, m.__assign)((0, m.__assign)({}, t), {
                                notation: "scientific",
                              }),
                              n.options.reduce(function (e, t) {
                                return (0,
                                m.__assign)((0, m.__assign)({}, e), R(t) || {});
                              }, {})
                            );
                            continue;
                          case "engineering":
                            t = (0, m.__assign)(
                              (0, m.__assign)((0, m.__assign)({}, t), {
                                notation: "engineering",
                              }),
                              n.options.reduce(function (e, t) {
                                return (0,
                                m.__assign)((0, m.__assign)({}, e), R(t) || {});
                              }, {})
                            );
                            continue;
                          case "notation-simple":
                            t.notation = "standard";
                            continue;
                          case "unit-width-narrow":
                            (t.currencyDisplay = "narrowSymbol"),
                              (t.unitDisplay = "narrow");
                            continue;
                          case "unit-width-short":
                            (t.currencyDisplay = "code"),
                              (t.unitDisplay = "short");
                            continue;
                          case "unit-width-full-name":
                            (t.currencyDisplay = "name"),
                              (t.unitDisplay = "long");
                            continue;
                          case "unit-width-iso-code":
                            t.currencyDisplay = "symbol";
                            continue;
                          case "scale":
                            t.scale = parseFloat(n.options[0]);
                            continue;
                          case "integer-width":
                            if (n.options.length > 1)
                              throw RangeError(
                                "integer-width stems only accept a single optional option"
                              );
                            n.options[0].replace(
                              P,
                              function (e, r, n, i, o, s) {
                                if (r) t.minimumIntegerDigits = n.length;
                                else if (i && o)
                                  throw Error(
                                    "We currently do not support maximum integer digits"
                                  );
                                else if (s)
                                  throw Error(
                                    "We currently do not support exact integer digits"
                                  );
                                return "";
                              }
                            );
                            continue;
                        }
                        if (M.test(n.stem)) {
                          t.minimumIntegerDigits = n.stem.length;
                          continue;
                        }
                        if (N.test(n.stem)) {
                          if (n.options.length > 1)
                            throw RangeError(
                              "Fraction-precision stems only accept a single optional option"
                            );
                          n.stem.replace(N, function (e, r, n, i, o, s) {
                            return (
                              "*" === n
                                ? (t.minimumFractionDigits = r.length)
                                : i && "#" === i[0]
                                ? (t.maximumFractionDigits = i.length)
                                : o && s
                                ? ((t.minimumFractionDigits = o.length),
                                  (t.maximumFractionDigits =
                                    o.length + s.length))
                                : ((t.minimumFractionDigits = r.length),
                                  (t.maximumFractionDigits = r.length)),
                              ""
                            );
                          });
                          var i = n.options[0];
                          "w" === i
                            ? (t = (0, m.__assign)((0, m.__assign)({}, t), {
                                trailingZeroDisplay: "stripIfInteger",
                              }))
                            : i &&
                              (t = (0, m.__assign)(
                                (0, m.__assign)({}, t),
                                C(i)
                              ));
                          continue;
                        }
                        if (L.test(n.stem)) {
                          t = (0, m.__assign)(
                            (0, m.__assign)({}, t),
                            C(n.stem)
                          );
                          continue;
                        }
                        var o = R(n.stem);
                        o && (t = (0, m.__assign)((0, m.__assign)({}, t), o));
                        var s = (function (e) {
                          var t;
                          if (
                            ("E" === e[0] && "E" === e[1]
                              ? ((t = { notation: "engineering" }),
                                (e = e.slice(2)))
                              : "E" === e[0] &&
                                ((t = { notation: "scientific" }),
                                (e = e.slice(1))),
                            t)
                          ) {
                            var r = e.slice(0, 2);
                            if (
                              ("+!" === r
                                ? ((t.signDisplay = "always"), (e = e.slice(2)))
                                : "+?" === r &&
                                  ((t.signDisplay = "exceptZero"),
                                  (e = e.slice(2))),
                              !M.test(e))
                            )
                              throw Error(
                                "Malformed concise eng/scientific notation"
                              );
                            t.minimumIntegerDigits = e.length;
                          }
                          return t;
                        })(n.stem);
                        s && (t = (0, m.__assign)((0, m.__assign)({}, t), s));
                      }
                      return t;
                    })(r)
                  : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
            for (
              var i, o = !1, s = [], a = new Set(), u = n.value, l = n.location;
              ;

            ) {
              if (0 === u.length) {
                var c = this.clonePosition();
                if ("select" !== t && this.bumpIf("=")) {
                  var f = this.tryParseDecimalInteger(
                    h.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    h.INVALID_PLURAL_ARGUMENT_SELECTOR
                  );
                  if (f.err) return f;
                  (l = U(c, this.clonePosition())),
                    (u = this.message.slice(c.offset, this.offset()));
                } else break;
              }
              if (a.has(u))
                return this.error(
                  "select" === t
                    ? h.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : h.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l
                );
              "other" === u && (o = !0), this.bumpSpace();
              var p = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? h.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : h.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  U(this.clonePosition(), this.clonePosition())
                );
              var E = this.parseMessage(e + 1, t, r);
              if (E.err) return E;
              var m = this.tryParseArgumentClose(p);
              if (m.err) return m;
              s.push([
                u,
                { value: E.val, location: U(p, this.clonePosition()) },
              ]),
                a.add(u),
                this.bumpSpace(),
                (u = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === s.length
              ? this.error(
                  "select" === t
                    ? h.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : h.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  U(this.clonePosition(), this.clonePosition())
                )
              : this.requiresOtherClause && !o
              ? this.error(
                  h.MISSING_OTHER_CLAUSE,
                  U(this.clonePosition(), this.clonePosition())
                )
              : { val: s, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var i = !1, o = 0; !this.isEOF(); ) {
              var s = this.char();
              if (s >= 48 && s <= 57)
                (i = !0), (o = 10 * o + (s - 48)), this.bump();
              else break;
            }
            var a = U(n, this.clonePosition());
            return i
              ? K((o *= r))
                ? { val: o, err: null }
                : this.error(t, a)
              : this.error(e, a);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = q(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary")
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (z(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              r = this.message.indexOf(e, t);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset "
                  )
                  .concat(this.offset())
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary"
                  )
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && ei(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null != r ? r : null;
          }),
          e
        );
      })();
      function en(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function ei(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function eo(e, t) {
        void 0 === t && (t = {});
        var r = new er(
          e,
          (t = (0, m.__assign)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            t
          ))
        ).parse();
        if (r.err) {
          var n = SyntaxError(h[r.err.kind]);
          throw (
            ((n.location = r.err.location),
            (n.originalMessage = r.err.message),
            n)
          );
        }
        return (
          (null == t ? void 0 : t.captureLocation) ||
            (function e(t) {
              t.forEach(function (t) {
                if ((delete t.location, T(t) || v(t)))
                  for (var r in t.options)
                    delete t.options[r].location, e(t.options[r].value);
                else
                  _(t) && A(t.style)
                    ? delete t.style.location
                    : (b(t) || d(t)) && H(t.style)
                    ? delete t.style.location
                    : y(t) && e(t.children);
              });
            })(r.val),
          r.val
        );
      }
      function es(e, t) {
        var r = t && t.cache ? t.cache : ec,
          n = t && t.serializer ? t.serializer : eu;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var r,
                  n,
                  i = 1 === e.length ? ea : eh;
                return (
                  (r = t.cache.create()),
                  (n = t.serializer),
                  i.bind(this, e, r, n)
                );
              }
        )(e, { cache: r, serializer: n });
      }
      function ea(e, t, r, n) {
        var i =
            null == n || "number" == typeof n || "boolean" == typeof n
              ? n
              : r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.call(this, n)), t.set(i, o)), o;
      }
      function eh(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return void 0 === o && ((o = e.apply(this, n)), t.set(i, o)), o;
      }
      var eu = function () {
        return JSON.stringify(arguments);
      };
      function el() {
        this.cache = Object.create(null);
      }
      (el.prototype.get = function (e) {
        return this.cache[e];
      }),
        (el.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var ec = {
          create: function () {
            return new el();
          },
        },
        ef = {
          variadic: function (e, t) {
            var r, n;
            return (
              (r = t.cache.create()), (n = t.serializer), eh.bind(this, e, r, n)
            );
          },
        };
      ((s = p || (p = {})).MISSING_VALUE = "MISSING_VALUE"),
        (s.INVALID_VALUE = "INVALID_VALUE"),
        (s.MISSING_INTL_API = "MISSING_INTL_API");
      var ep = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return (i.code = r), (i.originalMessage = n), i;
          }
          return (
            (0, m.__extends)(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        eE = (function (e) {
          function t(t, r, n, i) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                p.INVALID_VALUE,
                i
              ) || this
            );
          }
          return (0, m.__extends)(t, e), t;
        })(ep),
        em = (function (e) {
          function t(t, r, n) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(r),
                p.INVALID_VALUE,
                n
              ) || this
            );
          }
          return (0, m.__extends)(t, e), t;
        })(ep),
        eg = (function (e) {
          function t(t, r) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(r, '"'),
                p.MISSING_VALUE,
                r
              ) || this
            );
          }
          return (0, m.__extends)(t, e), t;
        })(ep);
      function e_(e) {
        return "function" == typeof e;
      }
      function eb(e, t, r, n, i, o, s) {
        if (1 === e.length && g(e[0]))
          return [{ type: E.literal, value: e[0].value }];
        for (var a = [], h = 0; h < e.length; h++) {
          var l = e[h];
          if (g(l)) {
            a.push({ type: E.literal, value: l.value });
            continue;
          }
          if (l.type === u.pound) {
            "number" == typeof o &&
              a.push({
                type: E.literal,
                value: r.getNumberFormat(t).format(o),
              });
            continue;
          }
          var c = l.value;
          if (!(i && c in i)) throw new eg(c, s);
          var f = i[c];
          if (l.type === u.argument) {
            (f && "string" != typeof f && "number" != typeof f) ||
              (f =
                "string" == typeof f || "number" == typeof f ? String(f) : ""),
              a.push({
                type: "string" == typeof f ? E.literal : E.object,
                value: f,
              });
            continue;
          }
          if (b(l)) {
            var m =
              "string" == typeof l.style
                ? n.date[l.style]
                : H(l.style)
                ? l.style.parsedOptions
                : void 0;
            a.push({
              type: E.literal,
              value: r.getDateTimeFormat(t, m).format(f),
            });
            continue;
          }
          if (d(l)) {
            var m =
              "string" == typeof l.style
                ? n.time[l.style]
                : H(l.style)
                ? l.style.parsedOptions
                : n.time.medium;
            a.push({
              type: E.literal,
              value: r.getDateTimeFormat(t, m).format(f),
            });
            continue;
          }
          if (_(l)) {
            var m =
              "string" == typeof l.style
                ? n.number[l.style]
                : A(l.style)
                ? l.style.parsedOptions
                : void 0;
            m && m.scale && (f *= m.scale || 1),
              a.push({
                type: E.literal,
                value: r.getNumberFormat(t, m).format(f),
              });
            continue;
          }
          if (y(l)) {
            var I = l.children,
              B = l.value,
              S = i[B];
            if (!e_(S)) throw new em(B, "function", s);
            var N = S(
              eb(I, t, r, n, i, o).map(function (e) {
                return e.value;
              })
            );
            Array.isArray(N) || (N = [N]),
              a.push.apply(
                a,
                N.map(function (e) {
                  return {
                    type: "string" == typeof e ? E.literal : E.object,
                    value: e,
                  };
                })
              );
          }
          if (T(l)) {
            var L = l.options[f] || l.options.other;
            if (!L) throw new eE(l.value, f, Object.keys(l.options), s);
            a.push.apply(a, eb(L.value, t, r, n, i));
            continue;
          }
          if (v(l)) {
            var L = l.options["=".concat(f)];
            if (!L) {
              if (!Intl.PluralRules)
                throw new ep(
                  'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                  p.MISSING_INTL_API,
                  s
                );
              var P = r
                .getPluralRules(t, { type: l.pluralType })
                .select(f - (l.offset || 0));
              L = l.options[P] || l.options.other;
            }
            if (!L) throw new eE(l.value, f, Object.keys(l.options), s);
            a.push.apply(a, eb(L.value, t, r, n, i, f - (l.offset || 0)));
            continue;
          }
        }
        return a.length < 2
          ? a
          : a.reduce(function (e, t) {
              var r = e[e.length - 1];
              return (
                r && r.type === E.literal && t.type === E.literal
                  ? (r.value += t.value)
                  : e.push(t),
                e
              );
            }, []);
      }
      function ed(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      ((a = E || (E = {}))[(a.literal = 0)] = "literal"),
        (a[(a.object = 1)] = "object");
      var eT = (function () {
          function e(t, r, n, i) {
            var o,
              s,
              a = this;
            if (
              (void 0 === r && (r = e.defaultLocale),
              (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {},
              }),
              (this.format = function (e) {
                var t = a.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var r = t.reduce(function (e, t) {
                  return (
                    e.length &&
                    t.type === E.literal &&
                    "string" == typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return r.length <= 1 ? r[0] || "" : r;
              }),
              (this.formatToParts = function (e) {
                return eb(
                  a.ast,
                  a.locales,
                  a.formatters,
                  a.formats,
                  e,
                  void 0,
                  a.message
                );
              }),
              (this.resolvedOptions = function () {
                return { locale: a.resolvedLocale.toString() };
              }),
              (this.getAst = function () {
                return a.ast;
              }),
              (this.locales = r),
              (this.resolvedLocale = e.resolveLocale(r)),
              "string" == typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw TypeError(
                  "IntlMessageFormat.__parse must be set to process `message` of type `string`"
                );
              this.ast = e.__parse(t, {
                ignoreTag: null == i ? void 0 : i.ignoreTag,
                locale: this.resolvedLocale,
              });
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw TypeError("A message must be provided as a String or AST.");
            (this.formats =
              ((o = e.formats),
              n
                ? Object.keys(o).reduce(function (e, t) {
                    var r, i;
                    return (
                      (e[t] =
                        ((r = o[t]),
                        (i = n[t])
                          ? (0, m.__assign)(
                              (0, m.__assign)(
                                (0, m.__assign)({}, r || {}),
                                i || {}
                              ),
                              Object.keys(r).reduce(function (e, t) {
                                return (
                                  (e[t] = (0, m.__assign)(
                                    (0, m.__assign)({}, r[t]),
                                    i[t] || {}
                                  )),
                                  e
                                );
                              }, {})
                            )
                          : r)),
                      e
                    );
                  }, (0, m.__assign)({}, o))
                : o)),
              (this.formatters =
                (i && i.formatters) ||
                (void 0 === (s = this.formatterCache) &&
                  (s = { number: {}, dateTime: {}, pluralRules: {} }),
                {
                  getNumberFormat: es(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.NumberFormat).bind.apply(
                        e,
                        (0, m.__spreadArray)([void 0], t, !1)
                      ))();
                    },
                    { cache: ed(s.number), strategy: ef.variadic }
                  ),
                  getDateTimeFormat: es(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.DateTimeFormat).bind.apply(
                        e,
                        (0, m.__spreadArray)([void 0], t, !1)
                      ))();
                    },
                    { cache: ed(s.dateTime), strategy: ef.variadic }
                  ),
                  getPluralRules: es(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.PluralRules).bind.apply(
                        e,
                        (0, m.__spreadArray)([void 0], t, !1)
                      ))();
                    },
                    { cache: ed(s.pluralRules), strategy: ef.variadic }
                  ),
                }));
          }
          return (
            Object.defineProperty(e, "defaultLocale", {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return new Intl.Locale(
                t.length > 0 ? t[0] : "string" == typeof e ? e : e[0]
              );
            }),
            (e.__parse = eo),
            (e.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: "currency" },
                percent: { style: "percent" },
              },
              date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                },
              },
              time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
                long: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
                full: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
              },
            }),
            e
          );
        })(),
        ev = eT;
    },
    91077: function (e, t) {
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.extends = r);
    },
    30982: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(36639),
        i = r(38509),
        o = r(43851),
        s = r(31822);
      (t.useFormatter = n.useFormatter),
        (t.useTranslations = n.useTranslations),
        (t.useLocale = i.default),
        (t.NextIntlClientProvider = o.default),
        Object.keys(s).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            });
        });
    },
    36639: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(31822);
      function i(e, t) {
        return function () {
          try {
            return t(...arguments);
          } catch (e) {
            throw Error(void 0);
          }
        };
      }
      let o = i(0, n.useTranslations),
        s = i(0, n.useFormatter);
      (t.useFormatter = s),
        (t.useTranslations = o),
        Object.keys(n).forEach(function (e) {
          "default" === e ||
            Object.prototype.hasOwnProperty.call(t, e) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            });
        });
    },
    38509: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(47907),
        i = r(20237),
        o = r(72611);
      t.default = function () {
        let e;
        let t = n.useParams();
        try {
          e = i.useLocale();
        } catch (r) {
          if (
            "string" != typeof (null == t ? void 0 : t[o.LOCALE_SEGMENT_NAME])
          )
            throw r;
          e = t[o.LOCALE_SEGMENT_NAME];
        }
        return e;
      };
    },
    43851: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(91077),
        i = r(64090),
        o = r(19328),
        s = i && i.__esModule ? i : { default: i };
      t.default = function (e) {
        let { locale: t, ...r } = e;
        if (!t) throw Error(void 0);
        return s.default.createElement(
          o.IntlProvider,
          n.extends({ locale: t }, r)
        );
      };
    },
    72611: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.COOKIE_LOCALE_NAME = "NEXT_LOCALE"),
        (t.COOKIE_MAX_AGE = 31536e3),
        (t.COOKIE_SAME_SITE = "lax"),
        (t.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE"),
        (t.LOCALE_SEGMENT_NAME = "locale");
    },
    19328: function (e, t, r) {
      e.exports = r(19172);
    },
    20237: function (e, t, r) {
      e.exports = r(78426);
    },
    31822: function (e, t, r) {
      e.exports = r(4996);
    },
    83457: function (e, t, r) {
      var n = r(64090).createContext(void 0);
      t.IntlContext = n;
    },
    19172: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(64090),
        i = r(19116),
        o = r(83457),
        s = n && n.__esModule ? n : { default: n };
      t.IntlProvider = function (e) {
        let {
            children: t,
            defaultTranslationValues: r,
            formats: a,
            getMessageFallback: h,
            locale: u,
            messages: l,
            now: c,
            onError: f,
            timeZone: p,
          } = e,
          [E] = n.useState(() => new Map()),
          m = n.useMemo(
            () => ({
              ...i.initializeConfig({
                locale: u,
                defaultTranslationValues: r,
                formats: a,
                getMessageFallback: h,
                messages: l,
                now: c,
                onError: f,
                timeZone: p,
              }),
              messageFormatCache: E,
            }),
            [r, a, h, u, E, l, c, f, p]
          );
        return s.default.createElement(o.IntlContext.Provider, { value: m }, t);
      };
    },
    90336: function (e, t, r) {
      var n = r(64090),
        i = r(83457);
      function o() {
        let e = n.useContext(i.IntlContext);
        if (!e) throw Error(void 0);
        return e;
      }
      (t.useIntlContext = o),
        (t.useLocale = function () {
          return o().locale;
        });
    },
    78426: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(90336);
      r(64090), r(83457), (t.useLocale = n.useLocale);
    },
    5179: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(43056),
        i = r(19116);
      r(34451),
        r(64090),
        (t.IntlError = n.IntlError),
        (t.IntlErrorCode = n.IntlErrorCode),
        (t.createFormatter = n.createFormatter),
        (t.initializeConfig = i.initializeConfig),
        (t.createTranslator = function (e) {
          let {
            getMessageFallback: t = i.defaultGetMessageFallback,
            messages: r,
            namespace: o,
            onError: s = i.defaultOnError,
            ...a
          } = e;
          return (function (e, t) {
            let {
              getMessageFallback: r,
              messages: i,
              namespace: o,
              onError: s,
              ...a
            } = e;
            return (
              (i = i[t]),
              (o = n.resolveNamespace(o, t)),
              n.createBaseTranslator({
                ...a,
                onError: s,
                getMessageFallback: r,
                messages: i,
                namespace: o,
              })
            );
          })(
            {
              ...a,
              onError: s,
              getMessageFallback: t,
              messages: { "!": r },
              namespace: o ? "!.".concat(o) : "!",
            },
            "!"
          );
        });
    },
    43056: function (e, t, r) {
      var n,
        i = r(34451),
        o = r(64090),
        s = r(19116),
        a = i && i.__esModule ? i : { default: i };
      function h(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : String(n)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      let u =
        (((n = {}).MISSING_MESSAGE = "MISSING_MESSAGE"),
        (n.MISSING_FORMAT = "MISSING_FORMAT"),
        (n.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK"),
        (n.INSUFFICIENT_PATH = "INSUFFICIENT_PATH"),
        (n.INVALID_MESSAGE = "INVALID_MESSAGE"),
        (n.INVALID_KEY = "INVALID_KEY"),
        (n.FORMATTING_ERROR = "FORMATTING_ERROR"),
        n);
      class l extends Error {
        constructor(e, t) {
          let r = e;
          t && (r += ": " + t),
            super(r),
            h(this, "code", void 0),
            h(this, "originalMessage", void 0),
            (this.code = e),
            t && (this.originalMessage = t);
        }
      }
      function c(e, t) {
        return e
          ? Object.keys(e).reduce(
              (r, n) => ((r[n] = { timeZone: t, ...e[n] }), r),
              {}
            )
          : e;
      }
      function f(e, t, r, n) {
        let i = s.joinPath(n, r);
        if (!t) throw Error(i);
        let o = t;
        return (
          r.split(".").forEach((t) => {
            let r = o[t];
            if (null == t || null == r) throw Error(i + " (".concat(e, ")"));
            o = r;
          }),
          o
        );
      }
      let p = (365 / 12) * 86400,
        E = {
          second: 1,
          seconds: 1,
          minute: 60,
          minutes: 60,
          hour: 3600,
          hours: 3600,
          day: 86400,
          days: 86400,
          week: 604800,
          weeks: 604800,
          month: (365 / 12) * 86400,
          months: (365 / 12) * 86400,
          quarter: (365 / 12) * 259200,
          quarters: (365 / 12) * 259200,
          year: 31536e3,
          years: 31536e3,
        };
      (t.IntlError = l),
        (t.IntlErrorCode = u),
        (t.createBaseTranslator = function (e) {
          let t = (function (e, t, r) {
            let n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : s.defaultOnError;
            try {
              if (!t) throw Error(void 0);
              let n = r ? f(e, t, r) : t;
              if (!n) throw Error(r);
              return n;
            } catch (t) {
              let e = new l(u.MISSING_MESSAGE, t.message);
              return n(e), e;
            }
          })(e.locale, e.messages, e.namespace, e.onError);
          return (function (e) {
            let {
              defaultTranslationValues: t,
              formats: r,
              getMessageFallback: n = s.defaultGetMessageFallback,
              locale: i,
              messageFormatCache: h,
              messagesOrError: p,
              namespace: E,
              onError: m,
              timeZone: g,
            } = e;
            function _(e, t, r) {
              let i = new l(t, r);
              return m(i), n({ error: i, key: e, namespace: E });
            }
            function b(e, m, b) {
              let d, T;
              if (p instanceof l) return n({ error: p, key: e, namespace: E });
              try {
                d = f(i, p, e, E);
              } catch (t) {
                return _(e, u.MISSING_MESSAGE, t.message);
              }
              let v = s.joinPath(i, E, e, String(d));
              if (null != h && h.has(v)) T = h.get(v);
              else {
                if ("object" == typeof d) {
                  let t;
                  return _(
                    e,
                    Array.isArray(d) ? u.INVALID_MESSAGE : u.INSUFFICIENT_PATH,
                    t
                  );
                }
                let t = (function (e, t) {
                  if (t) return;
                  let r = e.replace(/'([{}])/gi, "$1");
                  return /<|{/.test(r) ? void 0 : r;
                })(d, m);
                if (t) return t;
                try {
                  T = new a.default(
                    d,
                    i,
                    (function (e, t) {
                      let r = t ? { ...e, dateTime: c(e.dateTime, t) } : e,
                        n = a.default.formats.date,
                        i = t ? c(n, t) : n,
                        o = a.default.formats.time,
                        s = t ? c(o, t) : o;
                      return {
                        ...r,
                        date: { ...i, ...(null == r ? void 0 : r.dateTime) },
                        time: { ...s, ...(null == r ? void 0 : r.dateTime) },
                      };
                    })({ ...r, ...b }, g),
                    {
                      formatters: {
                        getNumberFormat: (e, t) => new Intl.NumberFormat(e, t),
                        getDateTimeFormat: (e, t) =>
                          new Intl.DateTimeFormat(e, { timeZone: g, ...t }),
                        getPluralRules: (e, t) => new Intl.PluralRules(e, t),
                      },
                    }
                  );
                } catch (t) {
                  return _(e, u.INVALID_MESSAGE, t.message);
                }
                null == h || h.set(v, T);
              }
              try {
                let e = T.format(
                  (function (e) {
                    if (0 === Object.keys(e).length) return;
                    let t = {};
                    return (
                      Object.keys(e).forEach((r) => {
                        let n,
                          i = 0,
                          s = e[r];
                        (n =
                          "function" == typeof s
                            ? (e) => {
                                let t = s(e);
                                return o.isValidElement(t)
                                  ? o.cloneElement(t, { key: r + i++ })
                                  : t;
                              }
                            : s),
                          (t[r] = n);
                      }),
                      t
                    );
                  })({ ...t, ...m })
                );
                if (null == e) throw Error(void 0);
                return o.isValidElement(e) ||
                  Array.isArray(e) ||
                  "string" == typeof e
                  ? e
                  : String(e);
              } catch (t) {
                return _(e, u.FORMATTING_ERROR, t.message);
              }
            }
            function d(e, t, r) {
              let n = b(e, t, r);
              return "string" != typeof n ? _(e, u.INVALID_MESSAGE, void 0) : n;
            }
            return (
              (d.rich = b),
              (d.markup = (e, t, r) => {
                let i = b(e, t, r);
                if ("string" != typeof i) {
                  let t = new l(u.FORMATTING_ERROR, void 0);
                  return m(t), n({ error: t, key: e, namespace: E });
                }
                return i;
              }),
              (d.raw = (e) => {
                if (p instanceof l)
                  return n({ error: p, key: e, namespace: E });
                try {
                  return f(i, p, e, E);
                } catch (t) {
                  return _(e, u.MISSING_MESSAGE, t.message);
                }
              }),
              d
            );
          })({ ...e, messagesOrError: t });
        }),
        (t.createFormatter = function (e) {
          let {
            formats: t,
            locale: r,
            now: n,
            onError: i = s.defaultOnError,
            timeZone: o,
          } = e;
          function a(e) {
            var t;
            return (
              (null !== (t = e) && void 0 !== t && t.timeZone) ||
                (o
                  ? (e = { ...e, timeZone: o })
                  : i(new l(u.ENVIRONMENT_FALLBACK, void 0))),
              e
            );
          }
          function h(e, t, r, n) {
            let o;
            try {
              o = (function (e, t) {
                let r;
                if ("string" == typeof t) {
                  if (!(r = null == e ? void 0 : e[t])) {
                    let e = new l(u.MISSING_FORMAT, void 0);
                    throw (i(e), e);
                  }
                } else r = t;
                return r;
              })(t, e);
            } catch (e) {
              return n();
            }
            try {
              return r(o);
            } catch (e) {
              return i(new l(u.FORMATTING_ERROR, e.message)), n();
            }
          }
          function c(e, n) {
            return h(
              n,
              null == t ? void 0 : t.dateTime,
              (t) => ((t = a(t)), new Intl.DateTimeFormat(r, t).format(e)),
              () => String(e)
            );
          }
          return {
            dateTime: c,
            number: function (e, n) {
              return h(
                n,
                null == t ? void 0 : t.number,
                (t) => new Intl.NumberFormat(r, t).format(e),
                () => String(e)
              );
            },
            relativeTime: function (e, t) {
              try {
                let o = new Date(e),
                  s =
                    t instanceof Date || "number" == typeof t
                      ? new Date(t)
                      : void 0 !== (null == t ? void 0 : t.now)
                      ? new Date(t.now)
                      : n ||
                        (i(new l(u.ENVIRONMENT_FALLBACK, void 0)), new Date()),
                  a = (o.getTime() - s.getTime()) / 1e3,
                  h =
                    "number" == typeof t ||
                    t instanceof Date ||
                    void 0 === (null == t ? void 0 : t.unit)
                      ? (function (e) {
                          let t = Math.abs(e);
                          return t < 60
                            ? "second"
                            : t < 3600
                            ? "minute"
                            : t < 86400
                            ? "hour"
                            : t < 604800
                            ? "day"
                            : t < p
                            ? "week"
                            : t < 31536e3
                            ? "month"
                            : "year";
                        })(a)
                      : t.unit,
                  c = Math.round(a / E[h]);
                return new Intl.RelativeTimeFormat(r, {
                  numeric: "second" === h ? "auto" : "always",
                }).format(c, h);
              } catch (t) {
                return i(new l(u.FORMATTING_ERROR, t.message)), String(e);
              }
            },
            list: function (e, n) {
              let i = [],
                o = new Map(),
                s = 0;
              for (let t of e) {
                let e;
                "object" == typeof t
                  ? ((e = String(s)), o.set(e, t))
                  : (e = String(t)),
                  i.push(e),
                  s++;
              }
              return h(
                n,
                null == t ? void 0 : t.list,
                (e) => {
                  let t = new Intl.ListFormat(r, e)
                    .formatToParts(i)
                    .map((e) =>
                      "literal" === e.type ? e.value : o.get(e.value) || e.value
                    );
                  return o.size > 0 ? t : t.join("");
                },
                () => String(e)
              );
            },
            dateTimeRange: function (e, n, i) {
              return h(
                i,
                null == t ? void 0 : t.dateTime,
                (t) => (
                  (t = a(t)), new Intl.DateTimeFormat(r, t).formatRange(e, n)
                ),
                () => [c(e), c(n)].join(" – ")
              );
            },
          };
        }),
        (t.resolveNamespace = function (e, t) {
          return e === t ? void 0 : e.slice((t + ".").length);
        });
    },
    4996: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(43056),
        i = r(5179),
        o = r(19116),
        s = r(19172),
        a = r(27561),
        h = r(90336);
      r(34451),
        r(64090),
        r(83457),
        (t.IntlError = n.IntlError),
        (t.IntlErrorCode = n.IntlErrorCode),
        (t.createFormatter = n.createFormatter),
        (t.createTranslator = i.createTranslator),
        (t.initializeConfig = o.initializeConfig),
        (t.IntlProvider = s.IntlProvider),
        (t.useFormatter = a.useFormatter),
        (t.useMessages = a.useMessages),
        (t.useNow = a.useNow),
        (t.useTimeZone = a.useTimeZone),
        (t.useTranslations = a.useTranslations),
        (t.useLocale = h.useLocale);
    },
    19116: function (e, t) {
      function r() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return t.filter(Boolean).join(".");
      }
      function n(e) {
        return r(e.namespace, e.key);
      }
      function i(e) {
        console.error(e);
      }
      (t.defaultGetMessageFallback = n),
        (t.defaultOnError = i),
        (t.initializeConfig = function (e) {
          let { getMessageFallback: t, messages: r, onError: o, ...s } = e;
          return {
            ...s,
            messages: r,
            onError: o || i,
            getMessageFallback: t || n,
          };
        }),
        (t.joinPath = r);
    },
    27561: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r(19172),
        i = r(90336),
        o = r(64090),
        s = r(43056);
      r(19116),
        r(83457),
        r(34451),
        (t.IntlProvider = n.IntlProvider),
        (t.useLocale = i.useLocale),
        (t.useFormatter = function () {
          let {
            formats: e,
            locale: t,
            now: r,
            onError: n,
            timeZone: a,
          } = i.useIntlContext();
          return o.useMemo(
            () =>
              s.createFormatter({
                formats: e,
                locale: t,
                now: r,
                onError: n,
                timeZone: a,
              }),
            [e, r, t, n, a]
          );
        }),
        (t.useMessages = function () {
          let e = i.useIntlContext();
          if (!e.messages) throw Error(void 0);
          return e.messages;
        }),
        (t.useNow = function (e) {
          let t = null == e ? void 0 : e.updateInterval,
            { now: r } = i.useIntlContext(),
            [n, s] = o.useState(r || new Date());
          return (
            o.useEffect(() => {
              if (!t) return;
              let e = setInterval(() => {
                s(new Date());
              }, t);
              return () => {
                clearInterval(e);
              };
            }, [r, t]),
            n
          );
        }),
        (t.useTimeZone = function () {
          return i.useIntlContext().timeZone;
        }),
        (t.useTranslations = function (e) {
          return (function (e, t, r) {
            let {
              defaultTranslationValues: n,
              formats: a,
              getMessageFallback: h,
              locale: u,
              messageFormatCache: l,
              onError: c,
              timeZone: f,
            } = i.useIntlContext();
            return (
              (e = e[r]),
              (t = s.resolveNamespace(t, r)),
              o.useMemo(
                () =>
                  s.createBaseTranslator({
                    messageFormatCache: l,
                    getMessageFallback: h,
                    messages: e,
                    defaultTranslationValues: n,
                    namespace: t,
                    onError: c,
                    formats: a,
                    locale: u,
                    timeZone: f,
                  }),
                [l, h, e, t, c, n, a, u, f]
              )
            );
          })(
            { "!": i.useIntlContext().messages },
            e ? "!.".concat(e) : "!",
            "!"
          );
        });
    },
  },
]);
