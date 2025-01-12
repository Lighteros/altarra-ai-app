(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2689],
  {
    34108: function (t, i, r) {
      !(function (t, i) {
        "use strict";
        function e(t, i) {
          if (!t) throw Error(i || "Assertion failed");
        }
        function n(t, i) {
          t.super_ = i;
          var r = function () {};
          (r.prototype = i.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, i, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === i || "be" === i) && ((r = i), (i = 10)),
              this._init(t || 0, i || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (i.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          d = void 0 !== window.Buffer ? window.Buffer : r(46601).Buffer;
        } catch (t) {}
        function h(t, i) {
          var r = t.charCodeAt(i);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void e(!1, "Invalid character in " + t);
        }
        function s(t, i, r) {
          var e = h(t, r);
          return r - 1 >= i && (e |= h(t, r - 1) << 4), e;
        }
        function u(t, i, r, n) {
          for (var o = 0, h = 0, s = Math.min(t.length, r), u = i; u < s; u++) {
            var a = t.charCodeAt(u) - 48;
            (o *= n),
              (h = a >= 49 ? a - 49 + 10 : a >= 17 ? a - 17 + 10 : a),
              e(a >= 0 && h < n, "Invalid character"),
              (o += h);
          }
          return o;
        }
        function a(t, i) {
          (t.words = i.words),
            (t.length = i.length),
            (t.negative = i.negative),
            (t.red = i.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, i) {
            return t.cmp(i) > 0 ? t : i;
          }),
          (o.min = function (t, i) {
            return 0 > t.cmp(i) ? t : i;
          }),
          (o.prototype._init = function (t, i, r) {
            if ("number" == typeof t) return this._initNumber(t, i, r);
            if ("object" == typeof t) return this._initArray(t, i, r);
            "hex" === i && (i = 16), e(i === (0 | i) && i >= 2 && i <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (n++, (this.negative = 1)),
              n < t.length &&
                (16 === i
                  ? this._parseHex(t, n, r)
                  : (this._parseBase(t, i, n),
                    "le" === r && this._initArray(this.toArray(), i, r)));
          }),
          (o.prototype._initNumber = function (t, i, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (e(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), i, r);
          }),
          (o.prototype._initArray = function (t, i, r) {
            if ((e("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var n, o, h = 0; h < this.length; h++) this.words[h] = 0;
            var s = 0;
            if ("be" === r)
              for (h = t.length - 1, n = 0; h >= 0; h -= 3)
                (o = t[h] | (t[h - 1] << 8) | (t[h - 2] << 16)),
                  (this.words[n] |= (o << s) & 67108863),
                  (this.words[n + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), n++);
            else if ("le" === r)
              for (h = 0, n = 0; h < t.length; h += 3)
                (o = t[h] | (t[h + 1] << 8) | (t[h + 2] << 16)),
                  (this.words[n] |= (o << s) & 67108863),
                  (this.words[n + 1] = (o >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), n++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, i, r) {
            (this.length = Math.ceil((t.length - i) / 6)),
              (this.words = Array(this.length));
            for (var e, n = 0; n < this.length; n++) this.words[n] = 0;
            var o = 0,
              h = 0;
            if ("be" === r)
              for (n = t.length - 1; n >= i; n -= 2)
                (e = s(t, i, n) << o),
                  (this.words[h] |= 67108863 & e),
                  o >= 18
                    ? ((o -= 18), (h += 1), (this.words[h] |= e >>> 26))
                    : (o += 8);
            else
              for (
                n = (t.length - i) % 2 == 0 ? i + 1 : i;
                n < t.length;
                n += 2
              )
                (e = s(t, i, n) << o),
                  (this.words[h] |= 67108863 & e),
                  o >= 18
                    ? ((o -= 18), (h += 1), (this.words[h] |= e >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, i, r) {
            (this.words = [0]), (this.length = 1);
            for (var e = 0, n = 1; n <= 67108863; n *= i) e++;
            e--, (n = (n / i) | 0);
            for (
              var o = t.length - r,
                h = o % e,
                s = Math.min(o, o - h) + r,
                a = 0,
                l = r;
              l < s;
              l += e
            )
              (a = u(t, l, l + e, i)),
                this.imuln(n),
                this.words[0] + a < 67108864
                  ? (this.words[0] += a)
                  : this._iaddn(a);
            if (0 !== h) {
              var d = 1;
              for (a = u(t, l, t.length, i), l = 0; l < h; l++) d *= i;
              this.imuln(d),
                this.words[0] + a < 67108864
                  ? (this.words[0] += a)
                  : this._iaddn(a);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var i = 0; i < this.length; i++) t.words[i] = this.words[i];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            a(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
          } catch (t) {
            o.prototype.inspect = l;
          }
        else o.prototype.inspect = l;
        function l() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var d,
          m = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          f = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function c(t, i, r) {
          r.negative = i.negative ^ t.negative;
          var e = (t.length + i.length) | 0;
          (r.length = e), (e = (e - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | i.words[0],
            h = n * o,
            s = 67108863 & h,
            u = (h / 67108864) | 0;
          r.words[0] = s;
          for (var a = 1; a < e; a++) {
            for (
              var l = u >>> 26,
                d = 67108863 & u,
                m = Math.min(a, i.length - 1),
                f = Math.max(0, a - t.length + 1);
              f <= m;
              f++
            ) {
              var p = (a - f) | 0;
              (l +=
                ((h = (n = 0 | t.words[p]) * (o = 0 | i.words[f]) + d) /
                  67108864) |
                0),
                (d = 67108863 & h);
            }
            (r.words[a] = 0 | d), (u = 0 | l);
          }
          return 0 !== u ? (r.words[a] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, i) {
          if (((i = 0 | i || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, n = 0, o = 0, h = 0; h < this.length; h++) {
              var s = this.words[h],
                u = (((s << n) | o) & 16777215).toString(16);
              (o = (s >>> (24 - n)) & 16777215),
                (n += 2) >= 26 && ((n -= 26), h--),
                (r =
                  0 !== o || h !== this.length - 1
                    ? m[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % i != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var a = f[t],
              l = p[t];
            r = "";
            var d = this.clone();
            for (d.negative = 0; !d.isZero(); ) {
              var c = d.modrn(l).toString(t);
              r = (d = d.idivn(l)).isZero() ? c + r : m[a - c.length] + c + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % i != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          e(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  e(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          d &&
            (o.prototype.toBuffer = function (t, i) {
              return this.toArrayLike(d, t, i);
            }),
          (o.prototype.toArray = function (t, i) {
            return this.toArrayLike(Array, t, i);
          }),
          (o.prototype.toArrayLike = function (t, i, r) {
            this._strip();
            var n = this.byteLength(),
              o = r || Math.max(1, n);
            e(n <= o, "byte array longer than desired length"),
              e(o > 0, "Requested array length <= 0");
            var h = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === i ? "LE" : "BE")](h, n), h;
          }),
          (o.prototype._toArrayLikeLE = function (t, i) {
            for (var r = 0, e = 0, n = 0, o = 0; n < this.length; n++) {
              var h = (this.words[n] << o) | e;
              (t[r++] = 255 & h),
                r < t.length && (t[r++] = (h >> 8) & 255),
                r < t.length && (t[r++] = (h >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (h >> 24) & 255),
                    (e = 0),
                    (o = 0))
                  : ((e = h >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = e; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, i) {
            for (
              var r = t.length - 1, e = 0, n = 0, o = 0;
              n < this.length;
              n++
            ) {
              var h = (this.words[n] << o) | e;
              (t[r--] = 255 & h),
                r >= 0 && (t[r--] = (h >> 8) & 255),
                r >= 0 && (t[r--] = (h >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (h >> 24) & 255), (e = 0), (o = 0))
                  : ((e = h >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = e; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var i = t,
                  r = 0;
                return (
                  i >= 4096 && ((r += 13), (i >>>= 13)),
                  i >= 64 && ((r += 7), (i >>>= 7)),
                  i >= 8 && ((r += 4), (i >>>= 4)),
                  i >= 2 && ((r += 2), (i >>>= 2)),
                  r + i
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var i = t,
              r = 0;
            return (
              (8191 & i) == 0 && ((r += 13), (i >>>= 13)),
              (127 & i) == 0 && ((r += 7), (i >>>= 7)),
              (15 & i) == 0 && ((r += 4), (i >>>= 4)),
              (3 & i) == 0 && ((r += 2), (i >>>= 2)),
              (1 & i) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              i = this._countBits(t);
            return (this.length - 1) * 26 + i;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, i = 0; i < this.length; i++) {
              var r = this._zeroBits(this.words[i]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var i = 0; i < t.length; i++)
              this.words[i] = this.words[i] | t.words[i];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return e((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var i;
            i = this.length > t.length ? t : this;
            for (var r = 0; r < i.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = i.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return e((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((i = this), (r = t))
              : ((i = t), (r = this));
            for (var i, r, e = 0; e < r.length; e++)
              this.words[e] = i.words[e] ^ r.words[e];
            if (this !== i)
              for (; e < i.length; e++) this.words[e] = i.words[e];
            return (this.length = i.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return e((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            e("number" == typeof t && t >= 0);
            var i = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(i), r > 0 && i--;
            for (var n = 0; n < i; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              r > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, i) {
            e("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(r + 1),
              i
                ? (this.words[r] = this.words[r] | (1 << n))
                : (this.words[r] = this.words[r] & ~(1 << n)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (i = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (i = this.isub(t)),
                (t.negative = 1),
                i._normSign()
              );
            this.length > t.length
              ? ((r = this), (e = t))
              : ((r = t), (e = this));
            for (var i, r, e, n = 0, o = 0; o < e.length; o++)
              (i = (0 | r.words[o]) + (0 | e.words[o]) + n),
                (this.words[o] = 67108863 & i),
                (n = i >>> 26);
            for (; 0 !== n && o < r.length; o++)
              (i = (0 | r.words[o]) + n),
                (this.words[o] = 67108863 & i),
                (n = i >>> 26);
            if (((this.length = r.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var i;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (i = this.sub(t)), (t.negative ^= 1), i)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (i = t.sub(this)), (this.negative = 1), i)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var i,
                r,
                e = this.iadd(t);
              return (t.negative = 1), e._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((i = this), (r = t)) : ((i = t), (r = this));
            for (var o = 0, h = 0; h < r.length; h++)
              (o = (e = (0 | i.words[h]) - (0 | r.words[h]) + o) >> 26),
                (this.words[h] = 67108863 & e);
            for (; 0 !== o && h < i.length; h++)
              (o = (e = (0 | i.words[h]) + o) >> 26),
                (this.words[h] = 67108863 & e);
            if (0 === o && h < i.length && i !== this)
              for (; h < i.length; h++) this.words[h] = i.words[h];
            return (
              (this.length = Math.max(this.length, h)),
              i !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, i, r) {
          var e,
            n,
            o,
            h = t.words,
            s = i.words,
            u = r.words,
            a = 0,
            l = 0 | h[0],
            d = 8191 & l,
            m = l >>> 13,
            f = 0 | h[1],
            p = 8191 & f,
            c = f >>> 13,
            g = 0 | h[2],
            v = 8191 & g,
            M = g >>> 13,
            y = 0 | h[3],
            w = 8191 & y,
            b = y >>> 13,
            _ = 0 | h[4],
            E = 8191 & _,
            R = _ >>> 13,
            S = 0 | h[5],
            A = 8191 & S,
            N = S >>> 13,
            k = 0 | h[6],
            O = 8191 & k,
            P = k >>> 13,
            C = 0 | h[7],
            j = 8191 & C,
            x = C >>> 13,
            I = 0 | h[8],
            q = 8191 & I,
            L = I >>> 13,
            B = 0 | h[9],
            z = 8191 & B,
            Z = B >>> 13,
            J = 0 | s[0],
            T = 8191 & J,
            F = J >>> 13,
            V = 0 | s[1],
            U = 8191 & V,
            D = V >>> 13,
            G = 0 | s[2],
            K = 8191 & G,
            H = G >>> 13,
            X = 0 | s[3],
            Q = 8191 & X,
            W = X >>> 13,
            Y = 0 | s[4],
            $ = 8191 & Y,
            tt = Y >>> 13,
            ti = 0 | s[5],
            tr = 8191 & ti,
            te = ti >>> 13,
            tn = 0 | s[6],
            to = 8191 & tn,
            th = tn >>> 13,
            ts = 0 | s[7],
            tu = 8191 & ts,
            ta = ts >>> 13,
            tl = 0 | s[8],
            td = 8191 & tl,
            tm = tl >>> 13,
            tf = 0 | s[9],
            tp = 8191 & tf,
            tc = tf >>> 13;
          (r.negative = t.negative ^ i.negative), (r.length = 19);
          var tg =
            (((a + (e = Math.imul(d, T))) | 0) +
              ((8191 & (n = ((n = Math.imul(d, F)) + Math.imul(m, T)) | 0)) <<
                13)) |
            0;
          (a = ((((o = Math.imul(m, F)) + (n >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (e = Math.imul(p, T)),
            (n = ((n = Math.imul(p, F)) + Math.imul(c, T)) | 0),
            (o = Math.imul(c, F));
          var tv =
            (((a + (e = (e + Math.imul(d, U)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, D)) | 0) + Math.imul(m, U)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, D)) | 0) + (n >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (e = Math.imul(v, T)),
            (n = ((n = Math.imul(v, F)) + Math.imul(M, T)) | 0),
            (o = Math.imul(M, F)),
            (e = (e + Math.imul(p, U)) | 0),
            (n = ((n = (n + Math.imul(p, D)) | 0) + Math.imul(c, U)) | 0),
            (o = (o + Math.imul(c, D)) | 0);
          var tM =
            (((a + (e = (e + Math.imul(d, K)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, H)) | 0) + Math.imul(m, K)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, H)) | 0) + (n >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (e = Math.imul(w, T)),
            (n = ((n = Math.imul(w, F)) + Math.imul(b, T)) | 0),
            (o = Math.imul(b, F)),
            (e = (e + Math.imul(v, U)) | 0),
            (n = ((n = (n + Math.imul(v, D)) | 0) + Math.imul(M, U)) | 0),
            (o = (o + Math.imul(M, D)) | 0),
            (e = (e + Math.imul(p, K)) | 0),
            (n = ((n = (n + Math.imul(p, H)) | 0) + Math.imul(c, K)) | 0),
            (o = (o + Math.imul(c, H)) | 0);
          var ty =
            (((a + (e = (e + Math.imul(d, Q)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, W)) | 0) + Math.imul(m, Q)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, W)) | 0) + (n >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 67108863),
            (e = Math.imul(E, T)),
            (n = ((n = Math.imul(E, F)) + Math.imul(R, T)) | 0),
            (o = Math.imul(R, F)),
            (e = (e + Math.imul(w, U)) | 0),
            (n = ((n = (n + Math.imul(w, D)) | 0) + Math.imul(b, U)) | 0),
            (o = (o + Math.imul(b, D)) | 0),
            (e = (e + Math.imul(v, K)) | 0),
            (n = ((n = (n + Math.imul(v, H)) | 0) + Math.imul(M, K)) | 0),
            (o = (o + Math.imul(M, H)) | 0),
            (e = (e + Math.imul(p, Q)) | 0),
            (n = ((n = (n + Math.imul(p, W)) | 0) + Math.imul(c, Q)) | 0),
            (o = (o + Math.imul(c, W)) | 0);
          var tw =
            (((a + (e = (e + Math.imul(d, $)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, tt)) | 0) + Math.imul(m, $)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, tt)) | 0) + (n >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (e = Math.imul(A, T)),
            (n = ((n = Math.imul(A, F)) + Math.imul(N, T)) | 0),
            (o = Math.imul(N, F)),
            (e = (e + Math.imul(E, U)) | 0),
            (n = ((n = (n + Math.imul(E, D)) | 0) + Math.imul(R, U)) | 0),
            (o = (o + Math.imul(R, D)) | 0),
            (e = (e + Math.imul(w, K)) | 0),
            (n = ((n = (n + Math.imul(w, H)) | 0) + Math.imul(b, K)) | 0),
            (o = (o + Math.imul(b, H)) | 0),
            (e = (e + Math.imul(v, Q)) | 0),
            (n = ((n = (n + Math.imul(v, W)) | 0) + Math.imul(M, Q)) | 0),
            (o = (o + Math.imul(M, W)) | 0),
            (e = (e + Math.imul(p, $)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(c, $)) | 0),
            (o = (o + Math.imul(c, tt)) | 0);
          var tb =
            (((a + (e = (e + Math.imul(d, tr)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, te)) | 0) + Math.imul(m, tr)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, te)) | 0) + (n >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (e = Math.imul(O, T)),
            (n = ((n = Math.imul(O, F)) + Math.imul(P, T)) | 0),
            (o = Math.imul(P, F)),
            (e = (e + Math.imul(A, U)) | 0),
            (n = ((n = (n + Math.imul(A, D)) | 0) + Math.imul(N, U)) | 0),
            (o = (o + Math.imul(N, D)) | 0),
            (e = (e + Math.imul(E, K)) | 0),
            (n = ((n = (n + Math.imul(E, H)) | 0) + Math.imul(R, K)) | 0),
            (o = (o + Math.imul(R, H)) | 0),
            (e = (e + Math.imul(w, Q)) | 0),
            (n = ((n = (n + Math.imul(w, W)) | 0) + Math.imul(b, Q)) | 0),
            (o = (o + Math.imul(b, W)) | 0),
            (e = (e + Math.imul(v, $)) | 0),
            (n = ((n = (n + Math.imul(v, tt)) | 0) + Math.imul(M, $)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (e = (e + Math.imul(p, tr)) | 0),
            (n = ((n = (n + Math.imul(p, te)) | 0) + Math.imul(c, tr)) | 0),
            (o = (o + Math.imul(c, te)) | 0);
          var t_ =
            (((a + (e = (e + Math.imul(d, to)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, th)) | 0) + Math.imul(m, to)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, th)) | 0) + (n >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (e = Math.imul(j, T)),
            (n = ((n = Math.imul(j, F)) + Math.imul(x, T)) | 0),
            (o = Math.imul(x, F)),
            (e = (e + Math.imul(O, U)) | 0),
            (n = ((n = (n + Math.imul(O, D)) | 0) + Math.imul(P, U)) | 0),
            (o = (o + Math.imul(P, D)) | 0),
            (e = (e + Math.imul(A, K)) | 0),
            (n = ((n = (n + Math.imul(A, H)) | 0) + Math.imul(N, K)) | 0),
            (o = (o + Math.imul(N, H)) | 0),
            (e = (e + Math.imul(E, Q)) | 0),
            (n = ((n = (n + Math.imul(E, W)) | 0) + Math.imul(R, Q)) | 0),
            (o = (o + Math.imul(R, W)) | 0),
            (e = (e + Math.imul(w, $)) | 0),
            (n = ((n = (n + Math.imul(w, tt)) | 0) + Math.imul(b, $)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (e = (e + Math.imul(v, tr)) | 0),
            (n = ((n = (n + Math.imul(v, te)) | 0) + Math.imul(M, tr)) | 0),
            (o = (o + Math.imul(M, te)) | 0),
            (e = (e + Math.imul(p, to)) | 0),
            (n = ((n = (n + Math.imul(p, th)) | 0) + Math.imul(c, to)) | 0),
            (o = (o + Math.imul(c, th)) | 0);
          var tE =
            (((a + (e = (e + Math.imul(d, tu)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, ta)) | 0) + Math.imul(m, tu)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, ta)) | 0) + (n >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (e = Math.imul(q, T)),
            (n = ((n = Math.imul(q, F)) + Math.imul(L, T)) | 0),
            (o = Math.imul(L, F)),
            (e = (e + Math.imul(j, U)) | 0),
            (n = ((n = (n + Math.imul(j, D)) | 0) + Math.imul(x, U)) | 0),
            (o = (o + Math.imul(x, D)) | 0),
            (e = (e + Math.imul(O, K)) | 0),
            (n = ((n = (n + Math.imul(O, H)) | 0) + Math.imul(P, K)) | 0),
            (o = (o + Math.imul(P, H)) | 0),
            (e = (e + Math.imul(A, Q)) | 0),
            (n = ((n = (n + Math.imul(A, W)) | 0) + Math.imul(N, Q)) | 0),
            (o = (o + Math.imul(N, W)) | 0),
            (e = (e + Math.imul(E, $)) | 0),
            (n = ((n = (n + Math.imul(E, tt)) | 0) + Math.imul(R, $)) | 0),
            (o = (o + Math.imul(R, tt)) | 0),
            (e = (e + Math.imul(w, tr)) | 0),
            (n = ((n = (n + Math.imul(w, te)) | 0) + Math.imul(b, tr)) | 0),
            (o = (o + Math.imul(b, te)) | 0),
            (e = (e + Math.imul(v, to)) | 0),
            (n = ((n = (n + Math.imul(v, th)) | 0) + Math.imul(M, to)) | 0),
            (o = (o + Math.imul(M, th)) | 0),
            (e = (e + Math.imul(p, tu)) | 0),
            (n = ((n = (n + Math.imul(p, ta)) | 0) + Math.imul(c, tu)) | 0),
            (o = (o + Math.imul(c, ta)) | 0);
          var tR =
            (((a + (e = (e + Math.imul(d, td)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, tm)) | 0) + Math.imul(m, td)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, tm)) | 0) + (n >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (e = Math.imul(z, T)),
            (n = ((n = Math.imul(z, F)) + Math.imul(Z, T)) | 0),
            (o = Math.imul(Z, F)),
            (e = (e + Math.imul(q, U)) | 0),
            (n = ((n = (n + Math.imul(q, D)) | 0) + Math.imul(L, U)) | 0),
            (o = (o + Math.imul(L, D)) | 0),
            (e = (e + Math.imul(j, K)) | 0),
            (n = ((n = (n + Math.imul(j, H)) | 0) + Math.imul(x, K)) | 0),
            (o = (o + Math.imul(x, H)) | 0),
            (e = (e + Math.imul(O, Q)) | 0),
            (n = ((n = (n + Math.imul(O, W)) | 0) + Math.imul(P, Q)) | 0),
            (o = (o + Math.imul(P, W)) | 0),
            (e = (e + Math.imul(A, $)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(N, $)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (e = (e + Math.imul(E, tr)) | 0),
            (n = ((n = (n + Math.imul(E, te)) | 0) + Math.imul(R, tr)) | 0),
            (o = (o + Math.imul(R, te)) | 0),
            (e = (e + Math.imul(w, to)) | 0),
            (n = ((n = (n + Math.imul(w, th)) | 0) + Math.imul(b, to)) | 0),
            (o = (o + Math.imul(b, th)) | 0),
            (e = (e + Math.imul(v, tu)) | 0),
            (n = ((n = (n + Math.imul(v, ta)) | 0) + Math.imul(M, tu)) | 0),
            (o = (o + Math.imul(M, ta)) | 0),
            (e = (e + Math.imul(p, td)) | 0),
            (n = ((n = (n + Math.imul(p, tm)) | 0) + Math.imul(c, td)) | 0),
            (o = (o + Math.imul(c, tm)) | 0);
          var tS =
            (((a + (e = (e + Math.imul(d, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(d, tc)) | 0) + Math.imul(m, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, tc)) | 0) + (n >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (e = Math.imul(z, U)),
            (n = ((n = Math.imul(z, D)) + Math.imul(Z, U)) | 0),
            (o = Math.imul(Z, D)),
            (e = (e + Math.imul(q, K)) | 0),
            (n = ((n = (n + Math.imul(q, H)) | 0) + Math.imul(L, K)) | 0),
            (o = (o + Math.imul(L, H)) | 0),
            (e = (e + Math.imul(j, Q)) | 0),
            (n = ((n = (n + Math.imul(j, W)) | 0) + Math.imul(x, Q)) | 0),
            (o = (o + Math.imul(x, W)) | 0),
            (e = (e + Math.imul(O, $)) | 0),
            (n = ((n = (n + Math.imul(O, tt)) | 0) + Math.imul(P, $)) | 0),
            (o = (o + Math.imul(P, tt)) | 0),
            (e = (e + Math.imul(A, tr)) | 0),
            (n = ((n = (n + Math.imul(A, te)) | 0) + Math.imul(N, tr)) | 0),
            (o = (o + Math.imul(N, te)) | 0),
            (e = (e + Math.imul(E, to)) | 0),
            (n = ((n = (n + Math.imul(E, th)) | 0) + Math.imul(R, to)) | 0),
            (o = (o + Math.imul(R, th)) | 0),
            (e = (e + Math.imul(w, tu)) | 0),
            (n = ((n = (n + Math.imul(w, ta)) | 0) + Math.imul(b, tu)) | 0),
            (o = (o + Math.imul(b, ta)) | 0),
            (e = (e + Math.imul(v, td)) | 0),
            (n = ((n = (n + Math.imul(v, tm)) | 0) + Math.imul(M, td)) | 0),
            (o = (o + Math.imul(M, tm)) | 0);
          var tA =
            (((a + (e = (e + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, tc)) | 0) + Math.imul(c, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, tc)) | 0) + (n >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (e = Math.imul(z, K)),
            (n = ((n = Math.imul(z, H)) + Math.imul(Z, K)) | 0),
            (o = Math.imul(Z, H)),
            (e = (e + Math.imul(q, Q)) | 0),
            (n = ((n = (n + Math.imul(q, W)) | 0) + Math.imul(L, Q)) | 0),
            (o = (o + Math.imul(L, W)) | 0),
            (e = (e + Math.imul(j, $)) | 0),
            (n = ((n = (n + Math.imul(j, tt)) | 0) + Math.imul(x, $)) | 0),
            (o = (o + Math.imul(x, tt)) | 0),
            (e = (e + Math.imul(O, tr)) | 0),
            (n = ((n = (n + Math.imul(O, te)) | 0) + Math.imul(P, tr)) | 0),
            (o = (o + Math.imul(P, te)) | 0),
            (e = (e + Math.imul(A, to)) | 0),
            (n = ((n = (n + Math.imul(A, th)) | 0) + Math.imul(N, to)) | 0),
            (o = (o + Math.imul(N, th)) | 0),
            (e = (e + Math.imul(E, tu)) | 0),
            (n = ((n = (n + Math.imul(E, ta)) | 0) + Math.imul(R, tu)) | 0),
            (o = (o + Math.imul(R, ta)) | 0),
            (e = (e + Math.imul(w, td)) | 0),
            (n = ((n = (n + Math.imul(w, tm)) | 0) + Math.imul(b, td)) | 0),
            (o = (o + Math.imul(b, tm)) | 0);
          var tN =
            (((a + (e = (e + Math.imul(v, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(v, tc)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(M, tc)) | 0) + (n >>> 13)) | 0) +
              (tN >>> 26)) |
            0),
            (tN &= 67108863),
            (e = Math.imul(z, Q)),
            (n = ((n = Math.imul(z, W)) + Math.imul(Z, Q)) | 0),
            (o = Math.imul(Z, W)),
            (e = (e + Math.imul(q, $)) | 0),
            (n = ((n = (n + Math.imul(q, tt)) | 0) + Math.imul(L, $)) | 0),
            (o = (o + Math.imul(L, tt)) | 0),
            (e = (e + Math.imul(j, tr)) | 0),
            (n = ((n = (n + Math.imul(j, te)) | 0) + Math.imul(x, tr)) | 0),
            (o = (o + Math.imul(x, te)) | 0),
            (e = (e + Math.imul(O, to)) | 0),
            (n = ((n = (n + Math.imul(O, th)) | 0) + Math.imul(P, to)) | 0),
            (o = (o + Math.imul(P, th)) | 0),
            (e = (e + Math.imul(A, tu)) | 0),
            (n = ((n = (n + Math.imul(A, ta)) | 0) + Math.imul(N, tu)) | 0),
            (o = (o + Math.imul(N, ta)) | 0),
            (e = (e + Math.imul(E, td)) | 0),
            (n = ((n = (n + Math.imul(E, tm)) | 0) + Math.imul(R, td)) | 0),
            (o = (o + Math.imul(R, tm)) | 0);
          var tk =
            (((a + (e = (e + Math.imul(w, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(w, tc)) | 0) + Math.imul(b, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(b, tc)) | 0) + (n >>> 13)) | 0) +
              (tk >>> 26)) |
            0),
            (tk &= 67108863),
            (e = Math.imul(z, $)),
            (n = ((n = Math.imul(z, tt)) + Math.imul(Z, $)) | 0),
            (o = Math.imul(Z, tt)),
            (e = (e + Math.imul(q, tr)) | 0),
            (n = ((n = (n + Math.imul(q, te)) | 0) + Math.imul(L, tr)) | 0),
            (o = (o + Math.imul(L, te)) | 0),
            (e = (e + Math.imul(j, to)) | 0),
            (n = ((n = (n + Math.imul(j, th)) | 0) + Math.imul(x, to)) | 0),
            (o = (o + Math.imul(x, th)) | 0),
            (e = (e + Math.imul(O, tu)) | 0),
            (n = ((n = (n + Math.imul(O, ta)) | 0) + Math.imul(P, tu)) | 0),
            (o = (o + Math.imul(P, ta)) | 0),
            (e = (e + Math.imul(A, td)) | 0),
            (n = ((n = (n + Math.imul(A, tm)) | 0) + Math.imul(N, td)) | 0),
            (o = (o + Math.imul(N, tm)) | 0);
          var tO =
            (((a + (e = (e + Math.imul(E, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(E, tc)) | 0) + Math.imul(R, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(R, tc)) | 0) + (n >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (e = Math.imul(z, tr)),
            (n = ((n = Math.imul(z, te)) + Math.imul(Z, tr)) | 0),
            (o = Math.imul(Z, te)),
            (e = (e + Math.imul(q, to)) | 0),
            (n = ((n = (n + Math.imul(q, th)) | 0) + Math.imul(L, to)) | 0),
            (o = (o + Math.imul(L, th)) | 0),
            (e = (e + Math.imul(j, tu)) | 0),
            (n = ((n = (n + Math.imul(j, ta)) | 0) + Math.imul(x, tu)) | 0),
            (o = (o + Math.imul(x, ta)) | 0),
            (e = (e + Math.imul(O, td)) | 0),
            (n = ((n = (n + Math.imul(O, tm)) | 0) + Math.imul(P, td)) | 0),
            (o = (o + Math.imul(P, tm)) | 0);
          var tP =
            (((a + (e = (e + Math.imul(A, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, tc)) | 0) + Math.imul(N, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(N, tc)) | 0) + (n >>> 13)) | 0) +
              (tP >>> 26)) |
            0),
            (tP &= 67108863),
            (e = Math.imul(z, to)),
            (n = ((n = Math.imul(z, th)) + Math.imul(Z, to)) | 0),
            (o = Math.imul(Z, th)),
            (e = (e + Math.imul(q, tu)) | 0),
            (n = ((n = (n + Math.imul(q, ta)) | 0) + Math.imul(L, tu)) | 0),
            (o = (o + Math.imul(L, ta)) | 0),
            (e = (e + Math.imul(j, td)) | 0),
            (n = ((n = (n + Math.imul(j, tm)) | 0) + Math.imul(x, td)) | 0),
            (o = (o + Math.imul(x, tm)) | 0);
          var tC =
            (((a + (e = (e + Math.imul(O, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(O, tc)) | 0) + Math.imul(P, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(P, tc)) | 0) + (n >>> 13)) | 0) +
              (tC >>> 26)) |
            0),
            (tC &= 67108863),
            (e = Math.imul(z, tu)),
            (n = ((n = Math.imul(z, ta)) + Math.imul(Z, tu)) | 0),
            (o = Math.imul(Z, ta)),
            (e = (e + Math.imul(q, td)) | 0),
            (n = ((n = (n + Math.imul(q, tm)) | 0) + Math.imul(L, td)) | 0),
            (o = (o + Math.imul(L, tm)) | 0);
          var tj =
            (((a + (e = (e + Math.imul(j, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(j, tc)) | 0) + Math.imul(x, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(x, tc)) | 0) + (n >>> 13)) | 0) +
              (tj >>> 26)) |
            0),
            (tj &= 67108863),
            (e = Math.imul(z, td)),
            (n = ((n = Math.imul(z, tm)) + Math.imul(Z, td)) | 0),
            (o = Math.imul(Z, tm));
          var tx =
            (((a + (e = (e + Math.imul(q, tp)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(q, tc)) | 0) + Math.imul(L, tp)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(L, tc)) | 0) + (n >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863);
          var tI =
            (((a + (e = Math.imul(z, tp))) | 0) +
              ((8191 & (n = ((n = Math.imul(z, tc)) + Math.imul(Z, tp)) | 0)) <<
                13)) |
            0;
          return (
            (a =
              ((((o = Math.imul(Z, tc)) + (n >>> 13)) | 0) + (tI >>> 26)) | 0),
            (tI &= 67108863),
            (u[0] = tg),
            (u[1] = tv),
            (u[2] = tM),
            (u[3] = ty),
            (u[4] = tw),
            (u[5] = tb),
            (u[6] = t_),
            (u[7] = tE),
            (u[8] = tR),
            (u[9] = tS),
            (u[10] = tA),
            (u[11] = tN),
            (u[12] = tk),
            (u[13] = tO),
            (u[14] = tP),
            (u[15] = tC),
            (u[16] = tj),
            (u[17] = tx),
            (u[18] = tI),
            0 !== a && ((u[19] = a), r.length++),
            r
          );
        };
        function v(t, i, r) {
          (r.negative = i.negative ^ t.negative),
            (r.length = t.length + i.length);
          for (var e = 0, n = 0, o = 0; o < r.length - 1; o++) {
            var h = n;
            n = 0;
            for (
              var s = 67108863 & e,
                u = Math.min(o, i.length - 1),
                a = Math.max(0, o - t.length + 1);
              a <= u;
              a++
            ) {
              var l = o - a,
                d = (0 | t.words[l]) * (0 | i.words[a]),
                m = 67108863 & d;
              (h = (h + ((d / 67108864) | 0)) | 0),
                (s = 67108863 & (m = (m + s) | 0)),
                (n += (h = (h + (m >>> 26)) | 0) >>> 26),
                (h &= 67108863);
            }
            (r.words[o] = s), (e = h), (h = n);
          }
          return 0 !== e ? (r.words[o] = e) : r.length--, r._strip();
        }
        function M(t, i) {
          (this.x = t), (this.y = i);
        }
        Math.imul || (g = c),
          (o.prototype.mulTo = function (t, i) {
            var r,
              e = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, i)
              : e < 63
              ? c(this, t, i)
              : v(this, t, i);
          }),
          (M.prototype.makeRBT = function (t) {
            for (
              var i = Array(t), r = o.prototype._countBits(t) - 1, e = 0;
              e < t;
              e++
            )
              i[e] = this.revBin(e, r, t);
            return i;
          }),
          (M.prototype.revBin = function (t, i, r) {
            if (0 === t || t === r - 1) return t;
            for (var e = 0, n = 0; n < i; n++)
              (e |= (1 & t) << (i - n - 1)), (t >>= 1);
            return e;
          }),
          (M.prototype.permute = function (t, i, r, e, n, o) {
            for (var h = 0; h < o; h++) (e[h] = i[t[h]]), (n[h] = r[t[h]]);
          }),
          (M.prototype.transform = function (t, i, r, e, n, o) {
            this.permute(o, t, i, r, e, n);
            for (var h = 1; h < n; h <<= 1)
              for (
                var s = h << 1,
                  u = Math.cos((2 * Math.PI) / s),
                  a = Math.sin((2 * Math.PI) / s),
                  l = 0;
                l < n;
                l += s
              )
                for (var d = u, m = a, f = 0; f < h; f++) {
                  var p = r[l + f],
                    c = e[l + f],
                    g = r[l + f + h],
                    v = e[l + f + h],
                    M = d * g - m * v;
                  (v = d * v + m * g),
                    (g = M),
                    (r[l + f] = p + g),
                    (e[l + f] = c + v),
                    (r[l + f + h] = p - g),
                    (e[l + f + h] = c - v),
                    f !== s &&
                      ((M = u * d - a * m), (m = u * m + a * d), (d = M));
                }
          }),
          (M.prototype.guessLen13b = function (t, i) {
            var r = 1 | Math.max(i, t),
              e = 1 & r,
              n = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) n++;
            return 1 << (n + 1 + e);
          }),
          (M.prototype.conjugate = function (t, i, r) {
            if (!(r <= 1))
              for (var e = 0; e < r / 2; e++) {
                var n = t[e];
                (t[e] = t[r - e - 1]),
                  (t[r - e - 1] = n),
                  (n = i[e]),
                  (i[e] = -i[r - e - 1]),
                  (i[r - e - 1] = -n);
              }
          }),
          (M.prototype.normalize13b = function (t, i) {
            for (var r = 0, e = 0; e < i / 2; e++) {
              var n =
                8192 * Math.round(t[2 * e + 1] / i) +
                Math.round(t[2 * e] / i) +
                r;
              (t[e] = 67108863 & n),
                (r = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return t;
          }),
          (M.prototype.convert13b = function (t, i, r, n) {
            for (var o = 0, h = 0; h < i; h++)
              (o += 0 | t[h]),
                (r[2 * h] = 8191 & o),
                (o >>>= 13),
                (r[2 * h + 1] = 8191 & o),
                (o >>>= 13);
            for (h = 2 * i; h < n; ++h) r[h] = 0;
            e(0 === o), e((-8192 & o) == 0);
          }),
          (M.prototype.stub = function (t) {
            for (var i = Array(t), r = 0; r < t; r++) i[r] = 0;
            return i;
          }),
          (M.prototype.mulp = function (t, i, r) {
            var e = 2 * this.guessLen13b(t.length, i.length),
              n = this.makeRBT(e),
              o = this.stub(e),
              h = Array(e),
              s = Array(e),
              u = Array(e),
              a = Array(e),
              l = Array(e),
              d = Array(e),
              m = r.words;
            (m.length = e),
              this.convert13b(t.words, t.length, h, e),
              this.convert13b(i.words, i.length, a, e),
              this.transform(h, o, s, u, e, n),
              this.transform(a, o, l, d, e, n);
            for (var f = 0; f < e; f++) {
              var p = s[f] * l[f] - u[f] * d[f];
              (u[f] = s[f] * d[f] + u[f] * l[f]), (s[f] = p);
            }
            return (
              this.conjugate(s, u, e),
              this.transform(s, u, m, o, e, n),
              this.conjugate(m, o, e),
              this.normalize13b(m, e),
              (r.negative = t.negative ^ i.negative),
              (r.length = t.length + i.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var i = new o(null);
            return (i.words = Array(this.length + t.length)), this.mulTo(t, i);
          }),
          (o.prototype.mulf = function (t) {
            var i = new o(null);
            return (i.words = Array(this.length + t.length)), v(this, t, i);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var i = t < 0;
            i && (t = -t), e("number" == typeof t), e(t < 67108864);
            for (var r = 0, n = 0; n < this.length; n++) {
              var o = (0 | this.words[n]) * t,
                h = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += ((o / 67108864) | 0) + (h >>> 26)),
                (this.words[n] = 67108863 & h);
            }
            return (
              0 !== r && ((this.words[n] = r), this.length++),
              i ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var i = (function (t) {
              for (var i = Array(t.bitLength()), r = 0; r < i.length; r++) {
                var e = (r / 26) | 0,
                  n = r % 26;
                i[r] = (t.words[e] >>> n) & 1;
              }
              return i;
            })(t);
            if (0 === i.length) return new o(1);
            for (
              var r = this, e = 0;
              e < i.length && 0 === i[e];
              e++, r = r.sqr()
            );
            if (++e < i.length)
              for (var n = r.sqr(); e < i.length; e++, n = n.sqr())
                0 !== i[e] && (r = r.mul(n));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            e("number" == typeof t && t >= 0);
            var i,
              r = t % 26,
              n = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var h = 0;
              for (i = 0; i < this.length; i++) {
                var s = this.words[i] & o,
                  u = ((0 | this.words[i]) - s) << r;
                (this.words[i] = u | h), (h = s >>> (26 - r));
              }
              h && ((this.words[i] = h), this.length++);
            }
            if (0 !== n) {
              for (i = this.length - 1; i >= 0; i--)
                this.words[i + n] = this.words[i];
              for (i = 0; i < n; i++) this.words[i] = 0;
              this.length += n;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return e(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, i, r) {
            e("number" == typeof t && t >= 0),
              (n = i ? (i - (i % 26)) / 26 : 0);
            var n,
              o = t % 26,
              h = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o);
            if (((n -= h), (n = Math.max(0, n)), r)) {
              for (var u = 0; u < h; u++) r.words[u] = this.words[u];
              r.length = h;
            }
            if (0 === h);
            else if (this.length > h)
              for (this.length -= h, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + h];
            else (this.words[0] = 0), (this.length = 1);
            var a = 0;
            for (u = this.length - 1; u >= 0 && (0 !== a || u >= n); u--) {
              var l = 0 | this.words[u];
              (this.words[u] = (a << (26 - o)) | (l >>> o)), (a = l & s);
            }
            return (
              r && 0 !== a && (r.words[r.length++] = a),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, i, r) {
            return e(0 === this.negative), this.iushrn(t, i, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            e("number" == typeof t && t >= 0);
            var i = t % 26,
              r = (t - i) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << i));
          }),
          (o.prototype.imaskn = function (t) {
            e("number" == typeof t && t >= 0);
            var i = t % 26,
              r = (t - i) / 26;
            return (e(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== i && r++,
                (this.length = Math.min(r, this.length)),
                0 !== i &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> i) << i)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (e("number" == typeof t), e(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var i = 0; i < this.length && this.words[i] >= 67108864; i++)
              (this.words[i] -= 67108864),
                i === this.length - 1
                  ? (this.words[i + 1] = 1)
                  : this.words[i + 1]++;
            return (this.length = Math.max(this.length, i + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((e("number" == typeof t), e(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var i = 0; i < this.length && this.words[i] < 0; i++)
                (this.words[i] += 67108864), (this.words[i + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, i, r) {
            var n,
              o,
              h = t.length + r;
            this._expand(h);
            var s = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + r]) + s;
              var u = (0 | t.words[n]) * i;
              (o -= 67108863 & u),
                (s = (o >> 26) - ((u / 67108864) | 0)),
                (this.words[n + r] = 67108863 & o);
            }
            for (; n < this.length - r; n++)
              (s = (o = (0 | this.words[n + r]) + s) >> 26),
                (this.words[n + r] = 67108863 & o);
            if (0 === s) return this._strip();
            for (e(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (o = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, i) {
            var r,
              e = this.length - t.length,
              n = this.clone(),
              h = t,
              s = 0 | h.words[h.length - 1];
            0 != (e = 26 - this._countBits(s)) &&
              ((h = h.ushln(e)), n.iushln(e), (s = 0 | h.words[h.length - 1]));
            var u = n.length - h.length;
            if ("mod" !== i) {
              ((r = new o(null)).length = u + 1), (r.words = Array(r.length));
              for (var a = 0; a < r.length; a++) r.words[a] = 0;
            }
            var l = n.clone()._ishlnsubmul(h, 1, u);
            0 === l.negative && ((n = l), r && (r.words[u] = 1));
            for (var d = u - 1; d >= 0; d--) {
              var m =
                (0 | n.words[h.length + d]) * 67108864 +
                (0 | n.words[h.length + d - 1]);
              for (
                m = Math.min((m / s) | 0, 67108863), n._ishlnsubmul(h, m, d);
                0 !== n.negative;

              )
                m--,
                  (n.negative = 0),
                  n._ishlnsubmul(h, 1, d),
                  n.isZero() || (n.negative ^= 1);
              r && (r.words[d] = m);
            }
            return (
              r && r._strip(),
              n._strip(),
              "div" !== i && 0 !== e && n.iushrn(e),
              { div: r || null, mod: n }
            );
          }),
          (o.prototype.divmod = function (t, i, r) {
            var n, h, s;
            return (e(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((s = this.neg().divmod(t, i)),
                "mod" !== i && (n = s.div.neg()),
                "div" !== i &&
                  ((h = s.mod.neg()), r && 0 !== h.negative && h.iadd(t)),
                { div: n, mod: h })
              : 0 === this.negative && 0 !== t.negative
              ? ((s = this.divmod(t.neg(), i)),
                "mod" !== i && (n = s.div.neg()),
                { div: n, mod: s.mod })
              : (this.negative & t.negative) != 0
              ? ((s = this.neg().divmod(t.neg(), i)),
                "div" !== i &&
                  ((h = s.mod.neg()), r && 0 !== h.negative && h.isub(t)),
                { div: s.div, mod: h })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === i
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === i
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, i);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var i = this.divmod(t);
            if (i.mod.isZero()) return i.div;
            var r = 0 !== i.div.negative ? i.mod.isub(t) : i.mod,
              e = t.ushrn(1),
              n = t.andln(1),
              o = r.cmp(e);
            return o < 0 || (1 === n && 0 === o)
              ? i.div
              : 0 !== i.div.negative
              ? i.div.isubn(1)
              : i.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var i = t < 0;
            i && (t = -t), e(t <= 67108863);
            for (var r = 67108864 % t, n = 0, o = this.length - 1; o >= 0; o--)
              n = (r * n + (0 | this.words[o])) % t;
            return i ? -n : n;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var i = t < 0;
            i && (t = -t), e(t <= 67108863);
            for (var r = 0, n = this.length - 1; n >= 0; n--) {
              var o = (0 | this.words[n]) + 67108864 * r;
              (this.words[n] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), i ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            e(0 === t.negative), e(!t.isZero());
            var i = this,
              r = t.clone();
            i = 0 !== i.negative ? i.umod(t) : i.clone();
            for (
              var n = new o(1), h = new o(0), s = new o(0), u = new o(1), a = 0;
              i.isEven() && r.isEven();

            )
              i.iushrn(1), r.iushrn(1), ++a;
            for (var l = r.clone(), d = i.clone(); !i.isZero(); ) {
              for (
                var m = 0, f = 1;
                (i.words[0] & f) == 0 && m < 26;
                ++m, f <<= 1
              );
              if (m > 0)
                for (i.iushrn(m); m-- > 0; )
                  (n.isOdd() || h.isOdd()) && (n.iadd(l), h.isub(d)),
                    n.iushrn(1),
                    h.iushrn(1);
              for (
                var p = 0, c = 1;
                (r.words[0] & c) == 0 && p < 26;
                ++p, c <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(d)),
                    s.iushrn(1),
                    u.iushrn(1);
              i.cmp(r) >= 0
                ? (i.isub(r), n.isub(s), h.isub(u))
                : (r.isub(i), s.isub(n), u.isub(h));
            }
            return { a: s, b: u, gcd: r.iushln(a) };
          }),
          (o.prototype._invmp = function (t) {
            e(0 === t.negative), e(!t.isZero());
            var i,
              r = this,
              n = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var h = new o(1), s = new o(0), u = n.clone();
              r.cmpn(1) > 0 && n.cmpn(1) > 0;

            ) {
              for (
                var a = 0, l = 1;
                (r.words[0] & l) == 0 && a < 26;
                ++a, l <<= 1
              );
              if (a > 0)
                for (r.iushrn(a); a-- > 0; )
                  h.isOdd() && h.iadd(u), h.iushrn(1);
              for (
                var d = 0, m = 1;
                (n.words[0] & m) == 0 && d < 26;
                ++d, m <<= 1
              );
              if (d > 0)
                for (n.iushrn(d); d-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              r.cmp(n) >= 0 ? (r.isub(n), h.isub(s)) : (n.isub(r), s.isub(h));
            }
            return 0 > (i = 0 === r.cmpn(1) ? h : s).cmpn(0) && i.iadd(t), i;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var i = this.clone(),
              r = t.clone();
            (i.negative = 0), (r.negative = 0);
            for (var e = 0; i.isEven() && r.isEven(); e++)
              i.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; i.isEven(); ) i.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var n = i.cmp(r);
              if (n < 0) {
                var o = i;
                (i = r), (r = o);
              } else if (0 === n || 0 === r.cmpn(1)) break;
              i.isub(r);
            }
            return r.iushln(e);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            e("number" == typeof t);
            var i = t % 26,
              r = (t - i) / 26,
              n = 1 << i;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= n), this;
            for (var o = n, h = r; 0 !== o && h < this.length; h++) {
              var s = 0 | this.words[h];
              (s += o), (o = s >>> 26), (s &= 67108863), (this.words[h] = s);
            }
            return 0 !== o && ((this.words[h] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var i,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) i = 1;
            else {
              r && (t = -t), e(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              i = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -i : i;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var i = this.ucmp(t);
            return 0 !== this.negative ? 0 | -i : i;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var i = 0, r = this.length - 1; r >= 0; r--) {
              var e = 0 | this.words[r],
                n = 0 | t.words[r];
              if (e !== n) {
                e < n ? (i = -1) : e > n && (i = 1);
                break;
              }
            }
            return i;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new S(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              e(!this.red, "Already a number in reduction context"),
              e(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              e(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              e(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              e(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              e(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              e(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              e(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              e(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              e(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              e(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              e(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              e(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              e(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              e(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              e(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              e(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var y = { k256: null, p224: null, p192: null, p25519: null };
        function w(t, i) {
          (this.name = t),
            (this.p = new o(i, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function b() {
          w.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function _() {
          w.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function E() {
          w.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function R() {
          w.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function S(t) {
          if ("string" == typeof t) {
            var i = o._prime(t);
            (this.m = i.p), (this.prime = i);
          } else
            e(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function A(t) {
          S.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (w.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (w.prototype.ireduce = function (t) {
            var i,
              r = t;
            do
              this.split(r, this.tmp),
                (i = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (i > this.n);
            var e = i < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === e
                ? ((r.words[0] = 0), (r.length = 1))
                : e > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (w.prototype.split = function (t, i) {
            t.iushrn(this.n, 0, i);
          }),
          (w.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(b, w),
          (b.prototype.split = function (t, i) {
            for (var r = Math.min(t.length, 9), e = 0; e < r; e++)
              i.words[e] = t.words[e];
            if (((i.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var n = t.words[9];
            for (e = 10, i.words[i.length++] = 4194303 & n; e < t.length; e++) {
              var o = 0 | t.words[e];
              (t.words[e - 10] = ((4194303 & o) << 4) | (n >>> 22)), (n = o);
            }
            (n >>>= 22),
              (t.words[e - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (b.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var i = 0, r = 0; r < t.length; r++) {
              var e = 0 | t.words[r];
              (i += 977 * e),
                (t.words[r] = 67108863 & i),
                (i = 64 * e + ((i / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(_, w),
          n(E, w),
          n(R, w),
          (R.prototype.imulK = function (t) {
            for (var i = 0, r = 0; r < t.length; r++) {
              var e = (0 | t.words[r]) * 19 + i,
                n = 67108863 & e;
              (e >>>= 26), (t.words[r] = n), (i = e);
            }
            return 0 !== i && (t.words[t.length++] = i), t;
          }),
          (o._prime = function (t) {
            var i;
            if (y[t]) return y[t];
            if ("k256" === t) i = new b();
            else if ("p224" === t) i = new _();
            else if ("p192" === t) i = new E();
            else if ("p25519" === t) i = new R();
            else throw Error("Unknown prime " + t);
            return (y[t] = i), i;
          }),
          (S.prototype._verify1 = function (t) {
            e(0 === t.negative, "red works only with positives"),
              e(t.red, "red works only with red numbers");
          }),
          (S.prototype._verify2 = function (t, i) {
            e((t.negative | i.negative) == 0, "red works only with positives"),
              e(t.red && t.red === i.red, "red works only with red numbers");
          }),
          (S.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (a(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (S.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (S.prototype.add = function (t, i) {
            this._verify2(t, i);
            var r = t.add(i);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (S.prototype.iadd = function (t, i) {
            this._verify2(t, i);
            var r = t.iadd(i);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (S.prototype.sub = function (t, i) {
            this._verify2(t, i);
            var r = t.sub(i);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (S.prototype.isub = function (t, i) {
            this._verify2(t, i);
            var r = t.isub(i);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (S.prototype.shl = function (t, i) {
            return this._verify1(t), this.imod(t.ushln(i));
          }),
          (S.prototype.imul = function (t, i) {
            return this._verify2(t, i), this.imod(t.imul(i));
          }),
          (S.prototype.mul = function (t, i) {
            return this._verify2(t, i), this.imod(t.mul(i));
          }),
          (S.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (S.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (S.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var i = this.m.andln(3);
            if ((e(i % 2 == 1), 3 === i)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var n = this.m.subn(1), h = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              h++, n.iushrn(1);
            e(!n.isZero());
            var s = new o(1).toRed(this),
              u = s.redNeg(),
              a = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new o(2 * l * l).toRed(this);
              0 !== this.pow(l, a).cmp(u);

            )
              l.redIAdd(u);
            for (
              var d = this.pow(l, n),
                m = this.pow(t, n.addn(1).iushrn(1)),
                f = this.pow(t, n),
                p = h;
              0 !== f.cmp(s);

            ) {
              for (var c = f, g = 0; 0 !== c.cmp(s); g++) c = c.redSqr();
              e(g < p);
              var v = this.pow(d, new o(1).iushln(p - g - 1));
              (m = m.redMul(v)), (d = v.redSqr()), (f = f.redMul(d)), (p = g);
            }
            return m;
          }),
          (S.prototype.invm = function (t) {
            var i = t._invmp(this.m);
            return 0 !== i.negative
              ? ((i.negative = 0), this.imod(i).redNeg())
              : this.imod(i);
          }),
          (S.prototype.pow = function (t, i) {
            if (i.isZero()) return new o(1).toRed(this);
            if (0 === i.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var e = 2; e < r.length; e++) r[e] = this.mul(r[e - 1], t);
            var n = r[0],
              h = 0,
              s = 0,
              u = i.bitLength() % 26;
            for (0 === u && (u = 26), e = i.length - 1; e >= 0; e--) {
              for (var a = i.words[e], l = u - 1; l >= 0; l--) {
                var d = (a >> l) & 1;
                if ((n !== r[0] && (n = this.sqr(n)), 0 === d && 0 === h)) {
                  s = 0;
                  continue;
                }
                (h <<= 1),
                  (h |= d),
                  (4 == ++s || (0 === e && 0 === l)) &&
                    ((n = this.mul(n, r[h])), (s = 0), (h = 0));
              }
              u = 26;
            }
            return n;
          }),
          (S.prototype.convertTo = function (t) {
            var i = t.umod(this.m);
            return i === t ? i.clone() : i;
          }),
          (S.prototype.convertFrom = function (t) {
            var i = t.clone();
            return (i.red = null), i;
          }),
          (o.mont = function (t) {
            return new A(t);
          }),
          n(A, S),
          (A.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (A.prototype.convertFrom = function (t) {
            var i = this.imod(t.mul(this.rinv));
            return (i.red = null), i;
          }),
          (A.prototype.imul = function (t, i) {
            if (t.isZero() || i.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(i),
              e = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(e).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : 0 > n.cmpn(0) && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (A.prototype.mul = function (t, i) {
            if (t.isZero() || i.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(i),
              e = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = r.isub(e).iushrn(this.shift),
              h = n;
            return (
              n.cmp(this.m) >= 0
                ? (h = n.isub(this.m))
                : 0 > n.cmpn(0) && (h = n.iadd(this.m)),
              h._forceRed(this)
            );
          }),
          (A.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    24980: function (t, i, r) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.EthereumProviderError = i.EthereumRpcError = void 0);
      let e = r(57353);
      class n extends Error {
        serialize() {
          let t = { code: this.code, message: this.message };
          return (
            void 0 !== this.data && (t.data = this.data),
            this.stack && (t.stack = this.stack),
            t
          );
        }
        toString() {
          return e.default(this.serialize(), h, 2);
        }
        constructor(t, i, r) {
          if (!Number.isInteger(t)) throw Error('"code" must be an integer.');
          if (!i || "string" != typeof i)
            throw Error('"message" must be a nonempty string.');
          super(i), (this.code = t), void 0 !== r && (this.data = r);
        }
      }
      i.EthereumRpcError = n;
      class o extends n {
        constructor(t, i, r) {
          if (!(Number.isInteger(t) && t >= 1e3 && t <= 4999))
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(t, i, r);
        }
      }
      function h(t, i) {
        if ("[Circular]" !== i) return i;
      }
      i.EthereumProviderError = o;
    },
    83938: function (t, i) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.errorValues = i.errorCodes = void 0),
        (i.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (i.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    92948: function (t, i, r) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.ethErrors = void 0);
      let e = r(24980),
        n = r(57842),
        o = r(83938);
      function h(t, i) {
        let [r, o] = u(i);
        return new e.EthereumRpcError(t, r || n.getMessageFromCode(t), o);
      }
      function s(t, i) {
        let [r, o] = u(i);
        return new e.EthereumProviderError(t, r || n.getMessageFromCode(t), o);
      }
      function u(t) {
        if (t) {
          if ("string" == typeof t) return [t];
          if ("object" == typeof t && !Array.isArray(t)) {
            let { message: i, data: r } = t;
            if (i && "string" != typeof i)
              throw Error("Must specify string message.");
            return [i || void 0, r];
          }
        }
        return [];
      }
      i.ethErrors = {
        rpc: {
          parse: (t) => h(o.errorCodes.rpc.parse, t),
          invalidRequest: (t) => h(o.errorCodes.rpc.invalidRequest, t),
          invalidParams: (t) => h(o.errorCodes.rpc.invalidParams, t),
          methodNotFound: (t) => h(o.errorCodes.rpc.methodNotFound, t),
          internal: (t) => h(o.errorCodes.rpc.internal, t),
          server: (t) => {
            if (!t || "object" != typeof t || Array.isArray(t))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: i } = t;
            if (!Number.isInteger(i) || i > -32005 || i < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return h(i, t);
          },
          invalidInput: (t) => h(o.errorCodes.rpc.invalidInput, t),
          resourceNotFound: (t) => h(o.errorCodes.rpc.resourceNotFound, t),
          resourceUnavailable: (t) =>
            h(o.errorCodes.rpc.resourceUnavailable, t),
          transactionRejected: (t) =>
            h(o.errorCodes.rpc.transactionRejected, t),
          methodNotSupported: (t) => h(o.errorCodes.rpc.methodNotSupported, t),
          limitExceeded: (t) => h(o.errorCodes.rpc.limitExceeded, t),
        },
        provider: {
          userRejectedRequest: (t) =>
            s(o.errorCodes.provider.userRejectedRequest, t),
          unauthorized: (t) => s(o.errorCodes.provider.unauthorized, t),
          unsupportedMethod: (t) =>
            s(o.errorCodes.provider.unsupportedMethod, t),
          disconnected: (t) => s(o.errorCodes.provider.disconnected, t),
          chainDisconnected: (t) =>
            s(o.errorCodes.provider.chainDisconnected, t),
          custom: (t) => {
            if (!t || "object" != typeof t || Array.isArray(t))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: i, message: r, data: n } = t;
            if (!r || "string" != typeof r)
              throw Error('"message" must be a nonempty string');
            return new e.EthereumProviderError(i, r, n);
          },
        },
      };
    },
    8825: function (t, i, r) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.getMessageFromCode =
          i.serializeError =
          i.EthereumProviderError =
          i.EthereumRpcError =
          i.ethErrors =
          i.errorCodes =
            void 0);
      let e = r(24980);
      Object.defineProperty(i, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return e.EthereumRpcError;
        },
      }),
        Object.defineProperty(i, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return e.EthereumProviderError;
          },
        });
      let n = r(57842);
      Object.defineProperty(i, "serializeError", {
        enumerable: !0,
        get: function () {
          return n.serializeError;
        },
      }),
        Object.defineProperty(i, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return n.getMessageFromCode;
          },
        });
      let o = r(92948);
      Object.defineProperty(i, "ethErrors", {
        enumerable: !0,
        get: function () {
          return o.ethErrors;
        },
      });
      let h = r(83938);
      Object.defineProperty(i, "errorCodes", {
        enumerable: !0,
        get: function () {
          return h.errorCodes;
        },
      });
    },
    57842: function (t, i, r) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.serializeError =
          i.isValidCode =
          i.getMessageFromCode =
          i.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      let e = r(83938),
        n = r(24980),
        o = e.errorCodes.rpc.internal,
        h = { code: o, message: s(o) };
      function s(t) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "Unspecified error message. This is a bug, please report it.";
        if (Number.isInteger(t)) {
          let r = t.toString();
          if (l(e.errorValues, r)) return e.errorValues[r].message;
          if (t >= -32099 && t <= -32e3) return i.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return r;
      }
      function u(t) {
        if (!Number.isInteger(t)) return !1;
        let i = t.toString();
        return !!(e.errorValues[i] || (t >= -32099 && t <= -32e3));
      }
      function a(t) {
        return t && "object" == typeof t && !Array.isArray(t)
          ? Object.assign({}, t)
          : t;
      }
      function l(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i);
      }
      (i.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (i.getMessageFromCode = s),
        (i.isValidCode = u),
        (i.serializeError = function (t) {
          let { fallbackError: i = h, shouldIncludeStack: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!i || !Number.isInteger(i.code) || "string" != typeof i.message)
            throw Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (t instanceof n.EthereumRpcError) return t.serialize();
          let e = {};
          if (
            t &&
            "object" == typeof t &&
            !Array.isArray(t) &&
            l(t, "code") &&
            u(t.code)
          )
            (e.code = t.code),
              t.message && "string" == typeof t.message
                ? ((e.message = t.message), l(t, "data") && (e.data = t.data))
                : ((e.message = s(e.code)), (e.data = { originalError: a(t) }));
          else {
            e.code = i.code;
            let r = null == t ? void 0 : t.message;
            (e.message = r && "string" == typeof r ? r : i.message),
              (e.data = { originalError: a(t) });
          }
          let o = null == t ? void 0 : t.stack;
          return r && t && o && "string" == typeof o && (e.stack = o), e;
        });
    },
    57353: function (t) {
      "use strict";
      (t.exports = h), (h.default = h), (h.stable = a), (h.stableStringify = a);
      var i = "[...]",
        r = "[Circular]",
        e = [],
        n = [];
      function o() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER,
        };
      }
      function h(t, h, u, a) {
        void 0 === a && (a = o()),
          (function t(e, n, o, h, u, a, l) {
            if (((a += 1), "object" == typeof e && null !== e)) {
              for (d = 0; d < h.length; d++)
                if (h[d] === e) {
                  s(r, e, n, u);
                  return;
                }
              if (
                (void 0 !== l.depthLimit && a > l.depthLimit) ||
                (void 0 !== l.edgesLimit && o + 1 > l.edgesLimit)
              ) {
                s(i, e, n, u);
                return;
              }
              if ((h.push(e), Array.isArray(e)))
                for (d = 0; d < e.length; d++) t(e[d], d, d, h, e, a, l);
              else {
                var d,
                  m = Object.keys(e);
                for (d = 0; d < m.length; d++) {
                  var f = m[d];
                  t(e[f], f, d, h, e, a, l);
                }
              }
              h.pop();
            }
          })(t, "", 0, [], void 0, 0, a);
        try {
          d =
            0 === n.length
              ? JSON.stringify(t, h, u)
              : JSON.stringify(t, l(h), u);
        } catch (t) {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== e.length; ) {
            var d,
              m = e.pop();
            4 === m.length
              ? Object.defineProperty(m[0], m[1], m[3])
              : (m[0][m[1]] = m[2]);
          }
        }
        return d;
      }
      function s(t, i, r, o) {
        var h = Object.getOwnPropertyDescriptor(o, r);
        void 0 !== h.get
          ? h.configurable
            ? (Object.defineProperty(o, r, { value: t }), e.push([o, r, i, h]))
            : n.push([i, r, t])
          : ((o[r] = t), e.push([o, r, i]));
      }
      function u(t, i) {
        return t < i ? -1 : t > i ? 1 : 0;
      }
      function a(t, h, a, d) {
        void 0 === d && (d = o());
        var m,
          f =
            (function t(n, o, h, a, l, d, m) {
              if (((d += 1), "object" == typeof n && null !== n)) {
                for (f = 0; f < a.length; f++)
                  if (a[f] === n) {
                    s(r, n, o, l);
                    return;
                  }
                try {
                  if ("function" == typeof n.toJSON) return;
                } catch (t) {
                  return;
                }
                if (
                  (void 0 !== m.depthLimit && d > m.depthLimit) ||
                  (void 0 !== m.edgesLimit && h + 1 > m.edgesLimit)
                ) {
                  s(i, n, o, l);
                  return;
                }
                if ((a.push(n), Array.isArray(n)))
                  for (f = 0; f < n.length; f++) t(n[f], f, f, a, n, d, m);
                else {
                  var f,
                    p = {},
                    c = Object.keys(n).sort(u);
                  for (f = 0; f < c.length; f++) {
                    var g = c[f];
                    t(n[g], g, f, a, n, d, m), (p[g] = n[g]);
                  }
                  if (void 0 === l) return p;
                  e.push([l, o, n]), (l[o] = p);
                }
                a.pop();
              }
            })(t, "", 0, [], void 0, 0, d) || t;
        try {
          m =
            0 === n.length
              ? JSON.stringify(f, h, a)
              : JSON.stringify(f, l(h), a);
        } catch (t) {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== e.length; ) {
            var p = e.pop();
            4 === p.length
              ? Object.defineProperty(p[0], p[1], p[3])
              : (p[0][p[1]] = p[2]);
          }
        }
        return m;
      }
      function l(t) {
        return (
          (t =
            void 0 !== t
              ? t
              : function (t, i) {
                  return i;
                }),
          function (i, r) {
            if (n.length > 0)
              for (var e = 0; e < n.length; e++) {
                var o = n[e];
                if (o[1] === i && o[0] === r) {
                  (r = o[2]), n.splice(e, 1);
                  break;
                }
              }
            return t.call(this, i, r);
          }
        );
      }
    },
    39541: function (t) {
      "use strict";
      "function" == typeof Object.create
        ? (t.exports = function (t, i) {
            i &&
              ((t.super_ = i),
              (t.prototype = Object.create(i.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (t.exports = function (t, i) {
            if (i) {
              t.super_ = i;
              var r = function () {};
              (r.prototype = i.prototype),
                (t.prototype = new r()),
                (t.prototype.constructor = t);
            }
          });
    },
  },
]);
