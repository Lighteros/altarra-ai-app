(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3877],
  {
    66033: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = u(t),
            f = o[0],
            s = o[1],
            h = new i(((f + s) * 3) / 4 - s),
            a = 0,
            l = s > 0 ? f - 4 : f;
          for (r = 0; r < l; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (h[a++] = (e >> 16) & 255),
              (h[a++] = (e >> 8) & 255),
              (h[a++] = 255 & e);
          return (
            2 === s &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (h[a++] = 255 & e)),
            1 === s &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (h[a++] = (e >> 8) & 255),
              (h[a++] = 255 & e)),
            h
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], f = 0, s = n - i;
            f < s;
            f += 16383
          )
            o.push(
              (function (t, e, n) {
                for (var i, o = [], f = e; f < n; f += 3)
                  o.push(
                    r[
                      ((i =
                        ((t[f] << 16) & 16711680) +
                        ((t[f + 1] << 8) & 65280) +
                        (255 & t[f + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join("");
              })(t, f, f + 16383 > s ? s : f + 16383)
            );
          return (
            1 === i
              ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === i &&
                o.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          f = 0,
          s = o.length;
        f < s;
        ++f
      )
        (r[f] = o[f]), (n[o.charCodeAt(f)] = f);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    23663: function (t, e, r) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let n = r(66033),
        i = r(61531),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function f(t) {
        if (t > 2147483647)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, s.prototype), e;
      }
      function s(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return a(t);
        }
        return u(t, e, r);
      }
      function u(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            if (
              (("string" != typeof e || "" === e) && (e = "utf8"),
              !s.isEncoding(e))
            )
              throw TypeError("Unknown encoding: " + e);
            let r = 0 | g(t, e),
              n = f(r),
              i = n.write(t, e);
            return i !== r && (n = n.slice(0, i)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (P(t, Uint8Array)) {
              let e = new Uint8Array(t);
              return c(e.buffer, e.byteOffset, e.byteLength);
            }
            return l(t);
          })(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          P(t, ArrayBuffer) ||
          (t && P(t.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (P(t, SharedArrayBuffer) || (t && P(t.buffer, SharedArrayBuffer))))
        )
          return c(t, e, r);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return s.from(n, e, r);
        let i = (function (t) {
          var e;
          if (s.isBuffer(t)) {
            let e = 0 | p(t.length),
              r = f(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || (e = t.length) != e
              ? f(0)
              : l(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? l(t.data)
            : void 0;
        })(t);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return s.from(t[Symbol.toPrimitive]("string"), e, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function h(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function a(t) {
        return h(t), f(t < 0 ? 0 : 0 | p(t));
      }
      function l(t) {
        let e = t.length < 0 ? 0 : 0 | p(t.length),
          r = f(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function c(t, e, r) {
        let n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            s.prototype
          ),
          n
        );
      }
      function p(t) {
        if (t >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | t;
      }
      function g(t, e) {
        if (s.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || P(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return C(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return N(t).length;
            default:
              if (i) return n ? -1 : C(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function y(t, e, r) {
        let i = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, e, r) {
                let n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += j[t[n]];
                return i;
              })(this, e, r);
            case "utf8":
            case "utf-8":
              return E(this, e, r);
            case "ascii":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, e, r);
            case "latin1":
            case "binary":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, e, r);
            case "base64":
              var o, f;
              return (
                (o = e),
                (f = r),
                0 === o && f === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, f))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, e, r) {
                let n = t.slice(e, r),
                  i = "";
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              })(this, e, r);
            default:
              if (i) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (i = !0);
          }
      }
      function d(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function b(t, e, r, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (o = r = +r) != o && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = s.from(e, n)), s.isBuffer(e)))
          return 0 === e.length ? -1 : w(t, e, r, n, i);
        if ("number" == typeof e)
          return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : w(t, [e], r, n, i);
        throw TypeError("val must be string, number or Buffer");
      }
      function w(t, e, r, n, i) {
        let o,
          f = 1,
          s = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (f = 2), (s /= 2), (u /= 2), (r /= 2);
        }
        function h(t, e) {
          return 1 === f ? t[e] : t.readUInt16BE(e * f);
        }
        if (i) {
          let n = -1;
          for (o = r; o < s; o++)
            if (h(t, o) === h(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === u)) return n * f;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + u > s && (r = s - u), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (h(t, o + n) !== h(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function E(t, e, r) {
        r = Math.min(t.length, r);
        let n = [],
          i = e;
        for (; i < r; ) {
          let e = t[i],
            o = null,
            f = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + f <= r) {
            let r, n, s, u;
            switch (f) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (192 & (r = t[i + 1])) == 128 &&
                  (u = ((31 & e) << 6) | (63 & r)) > 127 &&
                  (o = u);
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (o = u);
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (s = t[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & s) == 128 &&
                    (u =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (o = u);
            }
          }
          null === o
            ? ((o = 65533), (f = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += f);
        }
        return (function (t) {
          let e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function B(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function m(t, e, r, n, i, o) {
        if (!s.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError("Index out of range");
      }
      function v(t, e, r, n, i) {
        T(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let f = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = f),
          (f >>= 8),
          (t[r++] = f),
          (f >>= 8),
          (t[r++] = f),
          (f >>= 8),
          (t[r++] = f),
          r
        );
      }
      function I(t, e, r, n, i) {
        T(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let f = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = f),
          (f >>= 8),
          (t[r + 2] = f),
          (f >>= 8),
          (t[r + 1] = f),
          (f >>= 8),
          (t[r] = f),
          r + 8
        );
      }
      function A(t, e, r, n, i, o) {
        if (r + n > t.length || r < 0) throw RangeError("Index out of range");
      }
      function U(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || A(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function O(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || A(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.Buffer = s),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), s.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 2147483647),
        (s.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        s.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(s.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(s.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (s.isBuffer(this)) return this.byteOffset;
          },
        }),
        (s.poolSize = 8192),
        (s.from = function (t, e, r) {
          return u(t, e, r);
        }),
        Object.setPrototypeOf(s.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(s, Uint8Array),
        (s.alloc = function (t, e, r) {
          return (h(t), t <= 0)
            ? f(t)
            : void 0 !== e
            ? "string" == typeof r
              ? f(t).fill(e, r)
              : f(t).fill(e)
            : f(t);
        }),
        (s.allocUnsafe = function (t) {
          return a(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          return a(t);
        }),
        (s.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== s.prototype;
        }),
        (s.compare = function (t, e) {
          if (
            (P(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
            P(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)),
            !s.isBuffer(t) || !s.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (s.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (s.concat = function (t, e) {
          let r;
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return s.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          let n = s.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (P(e, Uint8Array))
              i + e.length > n.length
                ? (s.isBuffer(e) || (e = s.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else if (s.isBuffer(e)) e.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += e.length;
          }
          return n;
        }),
        (s.byteLength = g),
        (s.prototype._isBuffer = !0),
        (s.prototype.swap16 = function () {
          let t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) d(this, e, e + 1);
          return this;
        }),
        (s.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            d(this, e, e + 3), d(this, e + 1, e + 2);
          return this;
        }),
        (s.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            d(this, e, e + 7),
              d(this, e + 1, e + 6),
              d(this, e + 2, e + 5),
              d(this, e + 3, e + 4);
          return this;
        }),
        (s.prototype.toString = function () {
          let t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
            ? E(this, 0, t)
            : y.apply(this, arguments);
        }),
        (s.prototype.toLocaleString = s.prototype.toString),
        (s.prototype.equals = function (t) {
          if (!s.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === s.compare(this, t);
        }),
        (s.prototype.inspect = function () {
          let t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (s.prototype[o] = s.prototype.inspect),
        (s.prototype.compare = function (t, e, r, n, i) {
          if (
            (P(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)),
            !s.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          let o = i - n,
            f = r - e,
            u = Math.min(o, f),
            h = this.slice(n, i),
            a = t.slice(e, r);
          for (let t = 0; t < u; ++t)
            if (h[t] !== a[t]) {
              (o = h[t]), (f = a[t]);
              break;
            }
          return o < f ? -1 : f < o ? 1 : 0;
        }),
        (s.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (s.prototype.indexOf = function (t, e, r) {
          return b(this, t, e, r, !0);
        }),
        (s.prototype.lastIndexOf = function (t, e, r) {
          return b(this, t, e, r, !1);
        }),
        (s.prototype.write = function (t, e, r, n) {
          var i, o, f, s, u, h, a, l;
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let c = this.length - e;
          if (
            ((void 0 === r || r > c) && (r = c),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let p = !1;
          for (;;)
            switch (n) {
              case "hex":
                return (function (t, e, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  let f = e.length;
                  for (n > f / 2 && (n = f / 2), i = 0; i < n; ++i) {
                    let n = parseInt(e.substr(2 * i, 2), 16);
                    if (n != n) break;
                    t[r + i] = n;
                  }
                  return i;
                })(this, t, e, r);
              case "utf8":
              case "utf-8":
                return (i = e), (o = r), M(C(t, this.length - i), this, i, o);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (f = e),
                  (s = r),
                  M(
                    (function (t) {
                      let e = [];
                      for (let r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    f,
                    s
                  )
                );
              case "base64":
                return (u = e), (h = r), M(N(t), this, u, h);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (a = e),
                  (l = r),
                  M(
                    (function (t, e) {
                      let r, n;
                      let i = [];
                      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        (n = (r = t.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(t, this.length - a),
                    this,
                    a,
                    l
                  )
                );
              default:
                if (p) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (p = !0);
            }
        }),
        (s.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (s.prototype.slice = function (t, e) {
          let r = this.length;
          (t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
          let n = this.subarray(t, e);
          return Object.setPrototypeOf(n, s.prototype), n;
        }),
        (s.prototype.readUintLE = s.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || B(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (s.prototype.readUintBE = s.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || B(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (s.prototype.readUint8 = s.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || B(t, 1, this.length), this[t];
          }),
        (s.prototype.readUint16LE = s.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || B(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (s.prototype.readUint16BE = s.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || B(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (s.prototype.readUint32LE = s.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || B(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (s.prototype.readUint32BE = s.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || B(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (s.prototype.readBigUInt64LE = F(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && x(t, this.length - 8);
          let n =
              e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (s.prototype.readBigUInt64BE = F(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && x(t, this.length - 8);
          let n =
              16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (s.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || B(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (s.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || B(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (s.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || B(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (s.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || B(t, 2, this.length);
          let r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (s.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || B(t, 2, this.length);
          let r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (s.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || B(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (s.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || B(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (s.prototype.readBigInt64LE = F(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && x(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t]
              )
          );
        })),
        (s.prototype.readBigInt64BE = F(function (t) {
          _((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && x(t, this.length - 8),
            (BigInt(
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
            ) <<
              BigInt(32)) +
              BigInt(
                16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r
              )
          );
        })),
        (s.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || B(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (s.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || B(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (s.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || B(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (s.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || B(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (s.prototype.writeUintLE = s.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              m(this, t, e, r, n, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (s.prototype.writeUintBE = s.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              m(this, t, e, r, n, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (s.prototype.writeUint8 = s.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || m(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (s.prototype.writeUint16LE = s.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || m(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (s.prototype.writeUint16BE = s.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || m(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (s.prototype.writeUint32LE = s.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || m(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (s.prototype.writeUint32BE = s.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || m(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (s.prototype.writeBigUInt64LE = F(function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return v(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (s.prototype.writeBigUInt64BE = F(function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return I(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (s.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            m(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            f = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === f && 0 !== this[e + i - 1] && (f = 1),
              (this[e + i] = (((t / o) >> 0) - f) & 255);
          return e + r;
        }),
        (s.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            m(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            f = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === f && 0 !== this[e + i + 1] && (f = 1),
              (this[e + i] = (((t / o) >> 0) - f) & 255);
          return e + r;
        }),
        (s.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || m(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (s.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || m(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (s.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || m(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (s.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || m(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (s.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || m(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (s.prototype.writeBigInt64LE = F(function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return v(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (s.prototype.writeBigInt64BE = F(function (t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return I(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (s.prototype.writeFloatLE = function (t, e, r) {
          return U(this, t, e, !0, r);
        }),
        (s.prototype.writeFloatBE = function (t, e, r) {
          return U(this, t, e, !1, r);
        }),
        (s.prototype.writeDoubleLE = function (t, e, r) {
          return O(this, t, e, !0, r);
        }),
        (s.prototype.writeDoubleBE = function (t, e, r) {
          return O(this, t, e, !1, r);
        }),
        (s.prototype.copy = function (t, e, r, n) {
          if (!s.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          let i = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (s.prototype.fill = function (t, e, r, n) {
          let i;
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !s.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              let e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError("Out of range index");
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            let o = s.isBuffer(t) ? t : s.from(t, n),
              f = o.length;
            if (0 === f)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % f];
          }
          return this;
        });
      let R = {};
      function L(t, e, r) {
        R[t] = class extends r {
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return ""
              .concat(this.name, " [")
              .concat(t, "]: ")
              .concat(this.message);
          }
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = "".concat(this.name, " [").concat(t, "]")),
              this.stack,
              delete this.name;
          }
        };
      }
      function S(t) {
        let e = "",
          r = t.length,
          n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = "_".concat(t.slice(r - 3, r)).concat(e);
        return "".concat(t.slice(0, r)).concat(e);
      }
      function T(t, e, r, n, i, o) {
        if (t > r || t < e) {
          let n;
          let i = "bigint" == typeof e ? "n" : "";
          throw (
            ((n =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? ">= 0"
                      .concat(i, " and < 2")
                      .concat(i, " ** ")
                      .concat((o + 1) * 8)
                      .concat(i)
                  : ">= -(2"
                      .concat(i, " ** ")
                      .concat((o + 1) * 8 - 1)
                      .concat(i, ") and < 2 ** ") +
                    "".concat((o + 1) * 8 - 1).concat(i)
                : ">= ".concat(e).concat(i, " and <= ").concat(r).concat(i)),
            new R.ERR_OUT_OF_RANGE("value", n, t))
          );
        }
        _(i, "offset"),
          (void 0 === n[i] || void 0 === n[i + o]) && x(i, n.length - (o + 1));
      }
      function _(t, e) {
        if ("number" != typeof t)
          throw new R.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function x(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (_(t, r), new R.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new R.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new R.ERR_OUT_OF_RANGE(
          r || "offset",
          ">= ".concat(r ? 1 : 0, " and <= ").concat(e),
          t
        );
      }
      L(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? "".concat(t, " is outside of buffer bounds")
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        L(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return 'The "'
              .concat(t, '" argument must be of type number. Received type ')
              .concat(typeof e);
          },
          TypeError
        ),
        L(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = 'The value of "'.concat(t, '" is out of range.'),
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296
                ? (i = S(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = S(i)),
                  (i += "n")),
              (n += " It must be ".concat(e, ". Received ").concat(i))
            );
          },
          RangeError
        );
      let k = /[^+/0-9A-Za-z-_]/g;
      function C(t, e) {
        let r;
        e = e || 1 / 0;
        let n = t.length,
          i = null,
          o = [];
        for (let f = 0; f < n; ++f) {
          if ((r = t.charCodeAt(f)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || f + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function N(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(k, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function M(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function P(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      let j = (function () {
        let t = "0123456789abcdef",
          e = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function F(t) {
        return "undefined" == typeof BigInt ? D : t;
      }
      function D() {
        throw Error("BigInt not supported");
      }
    },
    61531: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read =
        function (t, e, r, n, i) {
          var o,
            f,
            s = 8 * i - n - 1,
            u = (1 << s) - 1,
            h = u >> 1,
            a = -7,
            l = r ? i - 1 : 0,
            c = r ? -1 : 1,
            p = t[e + l];
          for (
            l += c, o = p & ((1 << -a) - 1), p >>= -a, a += s;
            a > 0;
            o = 256 * o + t[e + l], l += c, a -= 8
          );
          for (
            f = o & ((1 << -a) - 1), o >>= -a, a += n;
            a > 0;
            f = 256 * f + t[e + l], l += c, a -= 8
          );
          if (0 === o) o = 1 - h;
          else {
            if (o === u) return f ? NaN : (1 / 0) * (p ? -1 : 1);
            (f += Math.pow(2, n)), (o -= h);
          }
          return (p ? -1 : 1) * f * Math.pow(2, o - n);
        }),
        (e.write = function (t, e, r, n, i, o) {
          var f,
            s,
            u,
            h = 8 * o - i - 1,
            a = (1 << h) - 1,
            l = a >> 1,
            c = 23 === i ? 5960464477539062e-23 : 0,
            p = n ? 0 : o - 1,
            g = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((s = isNaN(e) ? 1 : 0), (f = a))
              : ((f = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -f)) < 1 && (f--, (u *= 2)),
                f + l >= 1 ? (e += c / u) : (e += c * Math.pow(2, 1 - l)),
                e * u >= 2 && (f++, (u /= 2)),
                f + l >= a
                  ? ((s = 0), (f = a))
                  : f + l >= 1
                  ? ((s = (e * u - 1) * Math.pow(2, i)), (f += l))
                  : ((s = e * Math.pow(2, l - 1) * Math.pow(2, i)), (f = 0)));
            i >= 8;
            t[r + p] = 255 & s, p += g, s /= 256, i -= 8
          );
          for (
            f = (f << i) | s, h += i;
            h > 0;
            t[r + p] = 255 & f, p += g, f /= 256, h -= 8
          );
          t[r + p - g] |= 128 * y;
        });
    },
    30699: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(64090),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        o = n.useState,
        f = n.useEffect,
        s = n.useLayoutEffect,
        u = n.useDebugValue;
      function h(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var a =
        void 0 === window.document || void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = o({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                a = n[1];
              return (
                s(
                  function () {
                    (i.value = r), (i.getSnapshot = e), h(i) && a({ inst: i });
                  },
                  [t, r, e]
                ),
                f(
                  function () {
                    return (
                      h(i) && a({ inst: i }),
                      t(function () {
                        h(i) && a({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                u(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : a;
    },
    220: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(64090),
        i = r(22362),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        f = i.useSyncExternalStore,
        s = n.useRef,
        u = n.useEffect,
        h = n.useMemo,
        a = n.useDebugValue;
      e.useSyncExternalStoreWithSelector = function (t, e, r, n, i) {
        var l = s(null);
        if (null === l.current) {
          var c = { hasValue: !1, value: null };
          l.current = c;
        } else c = l.current;
        var p = f(
          t,
          (l = h(
            function () {
              function t(t) {
                if (!u) {
                  if (
                    ((u = !0), (f = t), (t = n(t)), void 0 !== i && c.hasValue)
                  ) {
                    var e = c.value;
                    if (i(e, t)) return (s = e);
                  }
                  return (s = t);
                }
                if (((e = s), o(f, t))) return e;
                var r = n(t);
                return void 0 !== i && i(e, r) ? e : ((f = t), (s = r));
              }
              var f,
                s,
                u = !1,
                h = void 0 === r ? null : r;
              return [
                function () {
                  return t(e());
                },
                null === h
                  ? void 0
                  : function () {
                      return t(h());
                    },
              ];
            },
            [e, r, n, i]
          ))[0],
          l[1]
        );
        return (
          u(
            function () {
              (c.hasValue = !0), (c.value = p);
            },
            [p]
          ),
          a(p),
          p
        );
      };
    },
    22362: function (t, e, r) {
      "use strict";
      t.exports = r(30699);
    },
    29292: function (t, e, r) {
      "use strict";
      t.exports = r(220);
    },
    98955: function (t, e, r) {
      "use strict";
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error("Wrong positive integer: ".concat(t));
      }
      function i(t) {
        for (
          var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          r[n - 1] = arguments[n];
        if (!(t instanceof Uint8Array)) throw Error("Expected Uint8Array");
        if (r.length > 0 && !r.includes(t.length))
          throw Error(
            "Expected Uint8Array of length "
              .concat(r, ", not of length=")
              .concat(t.length)
          );
      }
      function o(t) {
        let e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      r.d(e, {
        fr: function () {
          return T;
        },
      });
      let f = BigInt(4294967296 - 1),
        s = BigInt(32),
        u = (t, e, r) => (t << r) | (e >>> (32 - r)),
        h = (t, e, r) => (e << r) | (t >>> (32 - r)),
        a = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        l = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r)),
        c = (t) => t instanceof Uint8Array,
        p = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
      if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0])
        throw Error("Non little-endian hardware is not supported");
      function g(t) {
        if (
          ("string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(
                  "utf8ToBytes expected string, got ".concat(typeof t)
                );
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          !c(t))
        )
          throw Error("expected Uint8Array, got ".concat(typeof t));
        return t;
      }
      class y {
        clone() {
          return this._cloneInto();
        }
      }
      let [d, b, w] = [[], [], []],
        E = BigInt(0),
        B = BigInt(1),
        m = BigInt(2),
        v = BigInt(7),
        I = BigInt(256),
        A = BigInt(113);
      for (let t = 0, e = B, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          d.push(2 * (5 * n + r)),
          b.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = E;
        for (let t = 0; t < 7; t++)
          (e = ((e << B) ^ ((e >> v) * A)) % I) & m &&
            (i ^= B << ((B << BigInt(t)) - B));
        w.push(i);
      }
      let [U, O] = (function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = new Uint32Array(t.length),
            n = new Uint32Array(t.length);
          for (let i = 0; i < t.length; i++) {
            let { h: o, l: u } = (function (t) {
              let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              return e
                ? { h: Number(t & f), l: Number((t >> s) & f) }
                : { h: 0 | Number((t >> s) & f), l: 0 | Number(t & f) };
            })(t[i], e);
            [r[i], n[i]] = [o, u];
          }
          return [r, n];
        })(w, !0),
        R = (t, e, r) => (r > 32 ? a(t, e, r) : u(t, e, r)),
        L = (t, e, r) => (r > 32 ? l(t, e, r) : h(t, e, r));
      class S extends y {
        keccak() {
          !(function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 24,
              r = new Uint32Array(10);
            for (let n = 24 - e; n < 24; n++) {
              for (let e = 0; e < 10; e++)
                r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
              for (let e = 0; e < 10; e += 2) {
                let n = (e + 8) % 10,
                  i = (e + 2) % 10,
                  o = r[i],
                  f = r[i + 1],
                  s = R(o, f, 1) ^ r[n],
                  u = L(o, f, 1) ^ r[n + 1];
                for (let r = 0; r < 50; r += 10)
                  (t[e + r] ^= s), (t[e + r + 1] ^= u);
              }
              let e = t[2],
                i = t[3];
              for (let r = 0; r < 24; r++) {
                let n = b[r],
                  o = R(e, i, n),
                  f = L(e, i, n),
                  s = d[r];
                (e = t[s]), (i = t[s + 1]), (t[s] = o), (t[s + 1] = f);
              }
              for (let e = 0; e < 50; e += 10) {
                for (let n = 0; n < 10; n++) r[n] = t[e + n];
                for (let n = 0; n < 10; n++)
                  t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
              }
              (t[0] ^= U[n]), (t[1] ^= O[n]);
            }
            r.fill(0);
          })(this.state32, this.rounds),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          o(this);
          let { blockLen: e, state: r } = this,
            n = (t = g(t)).length;
          for (let i = 0; i < n; ) {
            let o = Math.min(e - this.pos, n - i);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[i++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          o(this, !1), i(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return n(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (
            (!(function (t, e) {
              i(t);
              let r = e.outputLen;
              if (t.length < r)
                throw Error(
                  "digestInto() expects output buffer of length at least ".concat(
                    r
                  )
                );
            })(t, this),
            this.finished)
          )
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new S(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
        constructor(t, e, r, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            n(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)), (this.state32 = p(this.state));
        }
      }
      let T = (function (t) {
        let e = (e) => t().update(g(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      })(() => new S(136, 1, 32));
    },
    56093: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      r.r(e),
        r.d(e, {
          _: function () {
            return n;
          },
          _tagged_template_literal: function () {
            return n;
          },
        });
    },
  },
]);
