"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5998],
  {
    66674: function (e, t, n) {
      n.d(t, {
        Ry: function () {
          return l;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        u = {},
        i = 0,
        a = function (e) {
          return e && (e.host || a(e.parentNode));
        },
        c = function (e, t, n, c) {
          var l = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = a(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          u[n] || (u[n] = new WeakMap());
          var s = u[n],
            d = [],
            f = new Set(),
            v = new Set(l),
            p = function (e) {
              !e || f.has(e) || (f.add(e), p(e.parentNode));
            };
          l.forEach(p);
          var m = function (e) {
            !e ||
              v.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else {
                  var t = e.getAttribute(c),
                    u = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    a = (s.get(e) || 0) + 1;
                  r.set(e, i),
                    s.set(e, a),
                    d.push(e),
                    1 === i && u && o.set(e, !0),
                    1 === a && e.setAttribute(n, "true"),
                    u || e.setAttribute(c, "true");
                }
              });
          };
          return (
            m(t),
            f.clear(),
            i++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  u = s.get(e) - 1;
                r.set(e, t),
                  s.set(e, u),
                  t || (o.has(e) || e.removeAttribute(c), o.delete(e)),
                  u || e.removeAttribute(n);
              }),
                --i ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (u = {}));
            }
          );
        },
        l = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              c(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    87461: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(64090),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let u = (e) =>
          e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
        i = (e, t) => {
          let n = (0, r.forwardRef)((n, i) => {
            let {
              color: a = "currentColor",
              size: c = 24,
              strokeWidth: l = 2,
              absoluteStrokeWidth: s,
              className: d = "",
              children: f,
              ...v
            } = n;
            return (0, r.createElement)(
              "svg",
              {
                ref: i,
                ...o,
                width: c,
                height: c,
                stroke: a,
                strokeWidth: s ? (24 * Number(l)) / Number(c) : l,
                className: ["lucide", "lucide-".concat(u(e)), d].join(" "),
                ...v,
              },
              [
                ...t.map((e) => {
                  let [t, n] = e;
                  return (0, r.createElement)(t, n);
                }),
                ...(Array.isArray(f) ? f : [f]),
              ]
            );
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    80037: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(87461).Z)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    52235: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let r = (0, n(87461).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    84814: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return i;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return u;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        u = "with-scroll-bars-hidden",
        i = "--removed-body-scroll-bar-size";
    },
    58387: function (e, t, n) {
      n.d(t, {
        jp: function () {
          return f;
        },
      });
      var r = n(64090),
        o = n(68109),
        u = n(84814),
        i = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        a = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [i(n), i(r), i(o)];
        },
        c = function (e) {
          void 0 === e && (e = "margin");
          var t = a(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        l = (0, o.Ws)(),
        s = "data-scroll-locked",
        d = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            c = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(u.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(s, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(c, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(c, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(u.pF, " {\n    right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u.zi, " {\n    margin-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u.pF, " .")
              .concat(u.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u.zi, " .")
              .concat(u.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(s, "] {\n    ")
              .concat(u.Av, ": ")
              .concat(c, "px;\n  }\n")
          );
        },
        f = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            u = void 0 === o ? "margin" : o,
            i = r.useMemo(
              function () {
                return c(u);
              },
              [u]
            );
          return (
            r.useEffect(function () {
              return (
                document.body.setAttribute(s, ""),
                function () {
                  document.body.removeAttribute(s);
                }
              );
            }, []),
            r.createElement(l, { styles: d(i, !t, u, n ? "" : "!important") })
          );
        };
    },
    68109: function (e, t, n) {
      n.d(t, {
        Ws: function () {
          return a;
        },
      });
      var r,
        o = n(64090),
        u = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var u, i;
                (u = t).styleSheet
                  ? (u.styleSheet.cssText = o)
                  : u.appendChild(document.createTextNode(o)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        i = function () {
          var e = u();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        a = function () {
          var e = i();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    42022: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i;
        },
      });
      var r = n(64090);
      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = new WeakMap();
      function i(e, t) {
        var n,
          i,
          a,
          c =
            ((n = t || null),
            (i = function (t) {
              return e.forEach(function (e) {
                return o(e, t);
              });
            }),
            ((a = (0, r.useState)(function () {
              return {
                value: n,
                callback: i,
                facade: {
                  get current() {
                    return a.value;
                  },
                  set current(value) {
                    var e = a.value;
                    e !== value && ((a.value = value), a.callback(value, e));
                  },
                },
              };
            })[0]).callback = i),
            a.facade);
        return (
          r.useLayoutEffect(
            function () {
              var t = u.get(c);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  i = c.current;
                n.forEach(function (e) {
                  r.has(e) || o(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, i);
                  });
              }
              u.set(c, e);
            },
            [e]
          ),
          c
        );
      }
    },
    29074: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(69703),
        o = n(64090),
        u = function (e) {
          var t = e.sideCar,
            n = (0, r.__rest)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var u = t.read();
          if (!u) throw Error("Sidecar medium not found");
          return o.createElement(u, (0, r.__assign)({}, n));
        };
      function i(e, t) {
        return e.useMedium(t), u;
      }
      u.isSideCarExport = !0;
    },
    52804: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      });
      var r = n(69703);
      function o(e) {
        return e;
      }
      function u(e) {
        void 0 === e && (e = {});
        var t,
          n,
          u,
          i =
            (void 0 === t && (t = o),
            (n = []),
            (u = !1),
            {
              read: function () {
                if (u)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, u);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (u = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                u = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  i = function () {
                    return Promise.resolve().then(o);
                  };
                i(),
                  (n = {
                    push: function (e) {
                      t.push(e), i();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (i.options = (0, r.__assign)({ async: !0, ssr: !1 }, e)), i;
      }
    },
    44991: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t) {
        let { checkForDefaultPrevented: n = !0 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
    },
    84104: function (e, t, n) {
      n.d(t, {
        b: function () {
          return u;
        },
        k: function () {
          return o;
        },
      });
      var r = n(64090);
      function o(e, t) {
        let n = (0, r.createContext)(t);
        function o(e) {
          let { children: t, ...o } = e,
            u = (0, r.useMemo)(() => o, Object.values(o));
          return (0, r.createElement)(n.Provider, { value: u }, t);
        }
        return (
          (o.displayName = e + "Provider"),
          [
            o,
            function (o) {
              let u = (0, r.useContext)(n);
              if (u) return u;
              if (void 0 !== t) return t;
              throw Error(
                "`".concat(o, "` must be used within `").concat(e, "`")
              );
            },
          ]
        );
      }
      function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = [],
          o = () => {
            let t = n.map((e) => (0, r.createContext)(e));
            return function (n) {
              let o = (null == n ? void 0 : n[e]) || t;
              return (0, r.useMemo)(
                () => ({ ["__scope".concat(e)]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, o) {
              let u = (0, r.createContext)(o),
                i = n.length;
              function a(t) {
                let { scope: n, children: o, ...a } = t,
                  c = (null == n ? void 0 : n[e][i]) || u,
                  l = (0, r.useMemo)(() => a, Object.values(a));
                return (0, r.createElement)(c.Provider, { value: l }, o);
              }
              return (
                (n = [...n, o]),
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, a) {
                    let c = (null == a ? void 0 : a[e][i]) || u,
                      l = (0, r.useContext)(c);
                    if (l) return l;
                    if (void 0 !== o) return o;
                    throw Error(
                      "`".concat(n, "` must be used within `").concat(t, "`")
                    );
                  },
                ]
              );
            },
            (function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              let o = t[0];
              if (1 === t.length) return o;
              let u = () => {
                let e = t.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (t) {
                  let n = e.reduce((e, n) => {
                    let { useScope: r, scopeName: o } = n,
                      u = r(t)["__scope".concat(o)];
                    return { ...e, ...u };
                  }, {});
                  return (0, r.useMemo)(
                    () => ({ ["__scope".concat(o.scopeName)]: n }),
                    [n]
                  );
                };
              };
              return (u.scopeName = o.scopeName), u;
            })(o, ...t),
          ]
        );
      }
    },
    4322: function (e, t, n) {
      n.d(t, {
        x8: function () {
          return ey;
        },
        VY: function () {
          return eh;
        },
        dk: function () {
          return eE;
        },
        aV: function () {
          return em;
        },
        h_: function () {
          return ep;
        },
        fC: function () {
          return ef;
        },
        Dx: function () {
          return eg;
        },
        xz: function () {
          return ev;
        },
      });
      var r = n(14749),
        o = n(64090),
        u = n(44991),
        i = n(61266),
        a = n(84104),
        c = n(38687),
        l = n(9310),
        s = n(1260),
        d = n(78082),
        f = n(37881),
        v = n(12642),
        p = n(29586),
        m = n(46165),
        h = n(69703),
        g = n(84814),
        E = n(42022),
        y = (0, n(52804)._)(),
        b = function () {},
        w = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: b,
              onWheelCapture: b,
              onTouchMoveCapture: b,
            }),
            u = r[0],
            i = r[1],
            a = e.forwardProps,
            c = e.children,
            l = e.className,
            s = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            v = e.sideCar,
            p = e.noIsolation,
            m = e.inert,
            g = e.allowPinchZoom,
            w = e.as,
            C = (0, h.__rest)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
            ]),
            _ = (0, E.q)([n, t]),
            N = (0, h.__assign)((0, h.__assign)({}, C), u);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(v, {
                sideCar: y,
                removeScrollBar: s,
                shards: f,
                noIsolation: p,
                inert: m,
                setCallbacks: i,
                allowPinchZoom: !!g,
                lockRef: n,
              }),
            a
              ? o.cloneElement(
                  o.Children.only(c),
                  (0, h.__assign)((0, h.__assign)({}, N), { ref: _ })
                )
              : o.createElement(
                  void 0 === w ? "div" : w,
                  (0, h.__assign)({}, N, { className: l, ref: _ }),
                  c
                )
          );
        });
      (w.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (w.classNames = { fullWidth: g.zi, zeroRight: g.pF });
      var C = n(29074),
        _ = n(58387),
        N = n(68109),
        M = !1;
      try {
        var T = Object.defineProperty({}, "passive", {
          get: function () {
            return (M = !0), !0;
          },
        });
        window.addEventListener("test", T, T),
          window.removeEventListener("test", T, T);
      } catch (e) {
        M = !1;
      }
      var k = !!M && { passive: !1 },
        D = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        R = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              L(e, n))
            ) {
              var r = S(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        L = function (e, t) {
          return "v" === e ? D(t, "overflowY") : D(t, "overflowX");
        },
        S = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        A = function (e, t, n, r, o) {
          var u,
            i =
              ((u = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === u ? -1 : 1),
            a = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = a > 0,
            f = 0,
            v = 0;
          do {
            var p = S(e, c),
              m = p[0],
              h = p[1] - p[2] - i * m;
            (m || h) && L(e, c) && ((f += h), (v += m)), (c = c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && a > f))
              ? (s = !0)
              : !d && ((o && 0 === v) || (!o && -a > v)) && (s = !0),
            s
          );
        },
        P = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        O = function (e) {
          return [e.deltaX, e.deltaY];
        },
        W = function (e) {
          return e && "current" in e ? e.current : e;
        },
        x = 0,
        I = [],
        F = (0, C.L)(y, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            u = o.useState(x++)[0],
            i = o.useState(function () {
              return (0, N.Ws)();
            })[0],
            a = o.useRef(e);
          o.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(u));
                  var t = (0, h.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(W),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(u));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(u)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(u)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var c = o.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !a.current.allowPinchZoom;
              var o,
                u = P(e),
                i = n.current,
                c = "deltaX" in e ? e.deltaX : i[0] - u[0],
                l = "deltaY" in e ? e.deltaY : i[1] - u[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = R(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = R(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || l) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var v = r.current || o;
              return A(v, t, e, "h" === v ? c : l, !0);
            }, []),
            l = o.useCallback(function (e) {
              if (I.length && I[I.length - 1] === i) {
                var n = "deltaY" in e ? O(e) : P(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      t.target === e.target &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(W)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !a.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = o.useCallback(function (e, n, r, o) {
              var u = { name: e, delta: n, target: r, should: o };
              t.current.push(u),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== u;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = P(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              s(t.type, O(t), t.target, c(t, e.lockRef.current));
            }, []),
            v = o.useCallback(function (t) {
              s(t.type, P(t), t.target, c(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              I.push(i),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v,
              }),
              document.addEventListener("wheel", l, k),
              document.addEventListener("touchmove", l, k),
              document.addEventListener("touchstart", d, k),
              function () {
                (I = I.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", l, k),
                  document.removeEventListener("touchmove", l, k),
                  document.removeEventListener("touchstart", d, k);
              }
            );
          }, []);
          var p = e.removeScrollBar,
            m = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            m
              ? o.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      u,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(u, " {pointer-events: all;}\n"),
                })
              : null,
            p ? o.createElement(_.jp, { gapMode: "margin" }) : null
          );
        }),
        Z = o.forwardRef(function (e, t) {
          return o.createElement(
            w,
            (0, h.__assign)({}, e, { ref: t, sideCar: F })
          );
        });
      Z.classNames = w.classNames;
      var z = n(66674),
        B = n(59143);
      let U = "Dialog",
        [j, K] = (0, a.b)(U),
        [V, X] = j(U),
        Y = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...a } = e,
            c = X("DialogTrigger", n),
            l = (0, i.e)(t, c.triggerRef);
          return (0, o.createElement)(
            p.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-haspopup": "dialog",
                "aria-expanded": c.open,
                "aria-controls": c.contentId,
                "data-state": el(c.open),
              },
              a,
              { ref: l, onClick: (0, u.M)(e.onClick, c.onOpenToggle) }
            )
          );
        }),
        q = "DialogPortal",
        [H, $] = j(q, { forceMount: void 0 }),
        G = "DialogOverlay",
        J = (0, o.forwardRef)((e, t) => {
          let n = $(G, e.__scopeDialog),
            { forceMount: u = n.forceMount, ...i } = e,
            a = X(G, e.__scopeDialog);
          return a.modal
            ? (0, o.createElement)(
                v.z,
                { present: u || a.open },
                (0, o.createElement)(Q, (0, r.Z)({}, i, { ref: t }))
              )
            : null;
        }),
        Q = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...u } = e,
            i = X(G, n);
          return (0, o.createElement)(
            Z,
            { as: B.g7, allowPinchZoom: !0, shards: [i.contentRef] },
            (0, o.createElement)(
              p.WV.div,
              (0, r.Z)({ "data-state": el(i.open) }, u, {
                ref: t,
                style: { pointerEvents: "auto", ...u.style },
              })
            )
          );
        }),
        ee = "DialogContent",
        et = (0, o.forwardRef)((e, t) => {
          let n = $(ee, e.__scopeDialog),
            { forceMount: u = n.forceMount, ...i } = e,
            a = X(ee, e.__scopeDialog);
          return (0, o.createElement)(
            v.z,
            { present: u || a.open },
            a.modal
              ? (0, o.createElement)(en, (0, r.Z)({}, i, { ref: t }))
              : (0, o.createElement)(er, (0, r.Z)({}, i, { ref: t }))
          );
        }),
        en = (0, o.forwardRef)((e, t) => {
          let n = X(ee, e.__scopeDialog),
            a = (0, o.useRef)(null),
            c = (0, i.e)(t, n.contentRef, a);
          return (
            (0, o.useEffect)(() => {
              let e = a.current;
              if (e) return (0, z.Ry)(e);
            }, []),
            (0, o.createElement)(
              eo,
              (0, r.Z)({}, e, {
                ref: c,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, u.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, u.M)(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: (0, u.M)(e.onFocusOutside, (e) =>
                  e.preventDefault()
                ),
              })
            )
          );
        }),
        er = (0, o.forwardRef)((e, t) => {
          let n = X(ee, e.__scopeDialog),
            u = (0, o.useRef)(!1),
            i = (0, o.useRef)(!1);
          return (0, o.createElement)(
            eo,
            (0, r.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var r, o;
                null === (r = e.onCloseAutoFocus) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    (u.current ||
                      null === (o = n.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (u.current = !1),
                  (i.current = !1);
              },
              onInteractOutside: (t) => {
                var r, o;
                null === (r = e.onInteractOutside) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    ((u.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (i.current = !0));
                let a = t.target;
                (null === (o = n.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(a)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    i.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        eo = (0, o.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: u,
              onOpenAutoFocus: a,
              onCloseAutoFocus: c,
              ...l
            } = e,
            f = X(ee, n),
            v = (0, o.useRef)(null),
            p = (0, i.e)(t, v);
          return (
            (0, m.EW)(),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                d.M,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: u,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: c,
                },
                (0, o.createElement)(
                  s.XB,
                  (0, r.Z)(
                    {
                      role: "dialog",
                      id: f.contentId,
                      "aria-describedby": f.descriptionId,
                      "aria-labelledby": f.titleId,
                      "data-state": el(f.open),
                    },
                    l,
                    { ref: p, onDismiss: () => f.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        }),
        eu = "DialogTitle",
        ei = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...u } = e,
            i = X(eu, n);
          return (0, o.createElement)(
            p.WV.h2,
            (0, r.Z)({ id: i.titleId }, u, { ref: t })
          );
        }),
        ea = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...u } = e,
            i = X("DialogDescription", n);
          return (0, o.createElement)(
            p.WV.p,
            (0, r.Z)({ id: i.descriptionId }, u, { ref: t })
          );
        }),
        ec = (0, o.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...i } = e,
            a = X("DialogClose", n);
          return (0, o.createElement)(
            p.WV.button,
            (0, r.Z)({ type: "button" }, i, {
              ref: t,
              onClick: (0, u.M)(e.onClick, () => a.onOpenChange(!1)),
            })
          );
        });
      function el(e) {
        return e ? "open" : "closed";
      }
      let [es, ed] = (0, a.k)("DialogTitleWarning", {
          contentName: ee,
          titleName: eu,
          docsSlug: "dialog",
        }),
        ef = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: u,
              onOpenChange: i,
              modal: a = !0,
            } = e,
            s = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [f = !1, v] = (0, l.T)({ prop: r, defaultProp: u, onChange: i });
          return (0, o.createElement)(
            V,
            {
              scope: t,
              triggerRef: s,
              contentRef: d,
              contentId: (0, c.M)(),
              titleId: (0, c.M)(),
              descriptionId: (0, c.M)(),
              open: f,
              onOpenChange: v,
              onOpenToggle: (0, o.useCallback)(() => v((e) => !e), [v]),
              modal: a,
            },
            n
          );
        },
        ev = Y,
        ep = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: u,
            } = e,
            i = X(q, t);
          return (0, o.createElement)(
            H,
            { scope: t, forceMount: n },
            o.Children.map(r, (e) =>
              (0, o.createElement)(
                v.z,
                { present: n || i.open },
                (0, o.createElement)(f.h, { asChild: !0, container: u }, e)
              )
            )
          );
        },
        em = J,
        eh = et,
        eg = ei,
        eE = ea,
        ey = ec;
    },
    1260: function (e, t, n) {
      let r;
      n.d(t, {
        XB: function () {
          return f;
        },
      });
      var o = n(14749),
        u = n(64090),
        i = n(44991),
        a = n(29586),
        c = n(61266),
        l = n(39830);
      let s = "dismissableLayer.update",
        d = (0, u.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        f = (0, u.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: f = !1,
              onEscapeKeyDown: m,
              onPointerDownOutside: h,
              onFocusOutside: g,
              onInteractOutside: E,
              onDismiss: y,
              ...b
            } = e,
            w = (0, u.useContext)(d),
            [C, _] = (0, u.useState)(null),
            N =
              null !== (n = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, M] = (0, u.useState)({}),
            T = (0, c.e)(t, (e) => _(e)),
            k = Array.from(w.layers),
            [D] = [...w.layersWithOutsidePointerEventsDisabled].slice(-1),
            R = k.indexOf(D),
            L = C ? k.indexOf(C) : -1,
            S = w.layersWithOutsidePointerEventsDisabled.size > 0,
            A = L >= R,
            P = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == globalThis
                    ? void 0
                    : globalThis.document,
                n = (0, l.W)(e),
                r = (0, u.useRef)(!1),
                o = (0, u.useRef)(() => {});
              return (
                (0, u.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = { originalEvent: e };
                        function u() {
                          p("dismissableLayer.pointerDownOutside", n, r, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (t.removeEventListener("click", o.current),
                            (o.current = u),
                            t.addEventListener("click", o.current, {
                              once: !0,
                            }))
                          : u();
                      } else t.removeEventListener("click", o.current);
                      r.current = !1;
                    },
                    u = window.setTimeout(() => {
                      t.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(u),
                      t.removeEventListener("pointerdown", e),
                      t.removeEventListener("click", o.current);
                  };
                }, [t, n]),
                { onPointerDownCapture: () => (r.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...w.branches].some((e) => e.contains(t));
              !A ||
                n ||
                (null == h || h(e),
                null == E || E(e),
                e.defaultPrevented || null == y || y());
            }, N),
            O = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == globalThis
                    ? void 0
                    : globalThis.document,
                n = (0, l.W)(e),
                r = (0, u.useRef)(!1);
              return (
                (0, u.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      p(
                        "dismissableLayer.focusOutside",
                        n,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    t.addEventListener("focusin", e),
                    () => t.removeEventListener("focusin", e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...w.branches].some((e) => e.contains(t)) ||
                (null == g || g(e),
                null == E || E(e),
                e.defaultPrevented || null == y || y());
            }, N);
          return (
            !(function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == globalThis
                    ? void 0
                    : globalThis.document,
                n = (0, l.W)(e);
              (0, u.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e),
                  () => t.removeEventListener("keydown", e)
                );
              }, [n, t]);
            })((e) => {
              L !== w.layers.size - 1 ||
                (null == m || m(e),
                !e.defaultPrevented && y && (e.preventDefault(), y()));
            }, N),
            (0, u.useEffect)(() => {
              if (C)
                return (
                  f &&
                    (0 === w.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = N.body.style.pointerEvents),
                      (N.body.style.pointerEvents = "none")),
                    w.layersWithOutsidePointerEventsDisabled.add(C)),
                  w.layers.add(C),
                  v(),
                  () => {
                    f &&
                      1 === w.layersWithOutsidePointerEventsDisabled.size &&
                      (N.body.style.pointerEvents = r);
                  }
                );
            }, [C, N, f, w]),
            (0, u.useEffect)(
              () => () => {
                C &&
                  (w.layers.delete(C),
                  w.layersWithOutsidePointerEventsDisabled.delete(C),
                  v());
              },
              [C, w]
            ),
            (0, u.useEffect)(() => {
              let e = () => M({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, u.createElement)(
              a.WV.div,
              (0, o.Z)({}, b, {
                ref: T,
                style: {
                  pointerEvents: S ? (A ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: (0, i.M)(e.onFocusCapture, O.onFocusCapture),
                onBlurCapture: (0, i.M)(e.onBlurCapture, O.onBlurCapture),
                onPointerDownCapture: (0, i.M)(
                  e.onPointerDownCapture,
                  P.onPointerDownCapture
                ),
              })
            )
          );
        });
      function v() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function p(e, t, n, r) {
        let { discrete: o } = r,
          u = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && u.addEventListener(e, t, { once: !0 }),
          o ? (0, a.jH)(u, i) : u.dispatchEvent(i);
      }
    },
    46165: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return u;
        },
      });
      var r = n(64090);
      let o = 0;
      function u() {
        (0, r.useEffect)(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    78082: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(14749),
        u = n(64090),
        i = n(61266),
        a = n(29586),
        c = n(39830);
      let l = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = (0, u.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...E
            } = e,
            [y, b] = (0, u.useState)(null),
            w = (0, c.W)(f),
            C = (0, c.W)(g),
            _ = (0, u.useRef)(null),
            N = (0, i.e)(t, (e) => b(e)),
            M = (0, u.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, u.useEffect)(() => {
            if (r) {
              function e(e) {
                if (M.paused || !y) return;
                let t = e.target;
                y.contains(t) ? (_.current = t) : m(_.current, { select: !0 });
              }
              function t(e) {
                if (M.paused || !y) return;
                let t = e.relatedTarget;
                null === t || y.contains(t) || m(_.current, { select: !0 });
              }
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(y);
              });
              return (
                y && n.observe(y, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, y, M.paused]),
            (0, u.useEffect)(() => {
              if (y) {
                h.add(M);
                let e = document.activeElement;
                if (!y.contains(e)) {
                  let t = new CustomEvent(l, d);
                  y.addEventListener(l, w),
                    y.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        v(y).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(y));
                }
                return () => {
                  y.removeEventListener(l, w),
                    setTimeout(() => {
                      let t = new CustomEvent(s, d);
                      y.addEventListener(s, C),
                        y.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        y.removeEventListener(s, C),
                        h.remove(M);
                    }, 0);
                };
              }
            }, [y, w, C, M]);
          let T = (0, u.useCallback)(
            (e) => {
              if ((!n && !r) || M.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, u] = (function (e) {
                    let t = v(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                r && u
                  ? e.shiftKey || o !== u
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && m(u, { select: !0 }))
                    : (e.preventDefault(), n && m(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, M.paused]
          );
          return (0, u.createElement)(
            a.WV.div,
            (0, o.Z)({ tabIndex: -1 }, E, { ref: N, onKeyDown: T })
          );
        });
      function v(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      let h =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    38687: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var r,
        o = n(64090),
        u = n(32618);
      let i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function c(e) {
        let [t, n] = o.useState(i());
        return (
          (0, u.b)(() => {
            e || n((e) => (null != e ? e : String(a++)));
          }, [e]),
          e || (t ? "radix-".concat(t) : "")
        );
      }
    },
    37881: function (e, t, n) {
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var r = n(14749),
        o = n(64090),
        u = n(89542),
        i = n(29586);
      let a = (0, o.forwardRef)((e, t) => {
        var n;
        let {
          container: a = null == globalThis
            ? void 0
            : null === (n = globalThis.document) || void 0 === n
            ? void 0
            : n.body,
          ...c
        } = e;
        return a
          ? u.createPortal(
              (0, o.createElement)(i.WV.div, (0, r.Z)({}, c, { ref: t })),
              a
            )
          : null;
      });
    },
    12642: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = n(64090),
        o = n(89542),
        u = n(61266),
        i = n(32618);
      let a = (e) => {
        let { present: t, children: n } = e,
          a = (function (e) {
            var t, n;
            let [u, a] = (0, r.useState)(),
              l = (0, r.useRef)({}),
              s = (0, r.useRef)(e),
              d = (0, r.useRef)("none"),
              [f, v] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                (0, r.useReducer)((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              (0, r.useEffect)(() => {
                let e = c(l.current);
                d.current = "mounted" === f ? e : "none";
              }, [f]),
              (0, i.b)(() => {
                let t = l.current,
                  n = s.current;
                if (n !== e) {
                  let r = d.current,
                    o = c(t);
                  e
                    ? v("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? v("UNMOUNT")
                    : n && r !== o
                    ? v("ANIMATION_OUT")
                    : v("UNMOUNT"),
                    (s.current = e);
                }
              }, [e, v]),
              (0, i.b)(() => {
                if (u) {
                  let e = (e) => {
                      let t = c(l.current).includes(e.animationName);
                      e.target === u &&
                        t &&
                        (0, o.flushSync)(() => v("ANIMATION_END"));
                    },
                    t = (e) => {
                      e.target === u && (d.current = c(l.current));
                    };
                  return (
                    u.addEventListener("animationstart", t),
                    u.addEventListener("animationcancel", e),
                    u.addEventListener("animationend", e),
                    () => {
                      u.removeEventListener("animationstart", t),
                        u.removeEventListener("animationcancel", e),
                        u.removeEventListener("animationend", e);
                    }
                  );
                }
                v("ANIMATION_END");
              }, [u, v]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(f),
                ref: (0, r.useCallback)((e) => {
                  e && (l.current = getComputedStyle(e)), a(e);
                }, []),
              }
            );
          })(t),
          l =
            "function" == typeof n
              ? n({ present: a.isPresent })
              : r.Children.only(n),
          s = (0, u.e)(a.ref, l.ref);
        return "function" == typeof n || a.isPresent
          ? (0, r.cloneElement)(l, { ref: s })
          : null;
      };
      function c(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      a.displayName = "Presence";
    },
    39830: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(64090);
      function o(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          (0, r.useMemo)(
            () =>
              function () {
                for (
                  var e, n = arguments.length, r = Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.call(t, ...r);
              },
            []
          )
        );
      }
    },
    9310: function (e, t, n) {
      n.d(t, {
        T: function () {
          return u;
        },
      });
      var r = n(64090),
        o = n(39830);
      function u(e) {
        let { prop: t, defaultProp: n, onChange: u = () => {} } = e,
          [i, a] = (function (e) {
            let { defaultProp: t, onChange: n } = e,
              u = (0, r.useState)(t),
              [i] = u,
              a = (0, r.useRef)(i),
              c = (0, o.W)(n);
            return (
              (0, r.useEffect)(() => {
                a.current !== i && (c(i), (a.current = i));
              }, [i, a, c]),
              u
            );
          })({ defaultProp: n, onChange: u }),
          c = void 0 !== t,
          l = c ? t : i,
          s = (0, o.W)(u);
        return [
          l,
          (0, r.useCallback)(
            (e) => {
              if (c) {
                let n = "function" == typeof e ? e(t) : e;
                n !== t && s(n);
              } else a(e);
            },
            [c, t, a, s]
          ),
        ];
      }
    },
    32618: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(64090);
      let o = (null == globalThis ? void 0 : globalThis.document)
        ? r.useLayoutEffect
        : () => {};
    },
  },
]);
