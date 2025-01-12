"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3983],
  {
    11213: function (e, t, n) {
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
       */ let r = (0, n(87461).Z)("User", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ]);
    },
    2714: function (e, t, n) {
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
       */ let r = (0, n(87461).Z)("Vault", [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
        [
          "circle",
          {
            cx: "7.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "kqv944",
          },
        ],
        ["path", { d: "m7.9 7.9 2.7 2.7", key: "hpeyl3" }],
        [
          "circle",
          {
            cx: "16.5",
            cy: "7.5",
            r: ".5",
            fill: "currentColor",
            key: "w0ekpg",
          },
        ],
        ["path", { d: "m13.4 10.6 2.7-2.7", key: "264c1n" }],
        [
          "circle",
          {
            cx: "7.5",
            cy: "16.5",
            r: ".5",
            fill: "currentColor",
            key: "nkw3mc",
          },
        ],
        ["path", { d: "m7.9 16.1 2.7-2.7", key: "p81g5e" }],
        [
          "circle",
          {
            cx: "16.5",
            cy: "16.5",
            r: ".5",
            fill: "currentColor",
            key: "fubopw",
          },
        ],
        ["path", { d: "m13.4 13.4 2.7 2.7", key: "abhel3" }],
        ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ]);
    },
    22219: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      function r(e, t) {
        let [n, r] = t;
        return Math.min(r, Math.max(n, e));
      }
    },
    27533: function (e, t, n) {
      n.d(t, {
        B: function () {
          return a;
        },
      });
      var r = n(64090),
        o = n(84104),
        i = n(61266),
        l = n(59143);
      function a(e) {
        let t = e + "CollectionProvider",
          [n, a] = (0, o.b)(t),
          [u, c] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          d = e + "CollectionSlot",
          f = r.forwardRef((e, t) => {
            let { scope: n, children: o } = e,
              a = c(d, n),
              u = (0, i.e)(t, a.collectionRef);
            return r.createElement(l.g7, { ref: u }, o);
          }),
          s = e + "CollectionItemSlot",
          m = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                i = r.useRef(new Map()).current;
              return r.createElement(
                u,
                { scope: t, itemMap: i, collectionRef: o },
                n
              );
            },
            Slot: f,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: o, ...a } = e,
                u = r.useRef(null),
                d = (0, i.e)(t, u),
                f = c(s, n);
              return (
                r.useEffect(
                  () => (
                    f.itemMap.set(u, { ref: u, ...a }),
                    () => void f.itemMap.delete(u)
                  )
                ),
                r.createElement(l.g7, { [m]: "", ref: d }, o)
              );
            }),
          },
          function (t) {
            let n = c(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          a,
        ];
      }
    },
    12275: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return i;
        },
      });
      var r = n(64090);
      let o = (0, r.createContext)(void 0);
      function i(e) {
        let t = (0, r.useContext)(o);
        return e || t || "ltr";
      }
    },
    24602: function (e, t, n) {
      n.d(t, {
        f: function () {
          return l;
        },
      });
      var r = n(14749),
        o = n(64090),
        i = n(29586);
      let l = (0, o.forwardRef)((e, t) =>
        (0, o.createElement)(
          i.WV.label,
          (0, r.Z)({}, e, {
            ref: t,
            onMouseDown: (t) => {
              var n;
              null === (n = e.onMouseDown) || void 0 === n || n.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault();
            },
          })
        )
      );
    },
    26579: function (e, t, n) {
      n.d(t, {
        bU: function () {
          return j;
        },
        e6: function () {
          return W;
        },
        fC: function () {
          return T;
        },
        fQ: function () {
          return U;
        },
      });
      var r = n(14749),
        o = n(64090),
        i = n(22219),
        l = n(44991),
        a = n(61266),
        u = n(84104),
        c = n(9310),
        d = n(12275),
        f = n(65030),
        s = n(76769),
        m = n(29586),
        v = n(27533);
      let p = ["PageUp", "PageDown"],
        h = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        y = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
        },
        g = "Slider",
        [w, S, b] = (0, v.B)(g),
        [E, M] = (0, u.b)(g, [b]),
        [x, R] = E(g),
        D = (0, o.forwardRef)((e, t) => {
          let {
              name: n,
              min: u = 0,
              max: d = 100,
              step: f = 1,
              orientation: s = "horizontal",
              disabled: m = !1,
              minStepsBetweenThumbs: v = 0,
              defaultValue: y = [u],
              value: g,
              onValueChange: S = () => {},
              onValueCommit: b = () => {},
              inverted: E = !1,
              ...M
            } = e,
            [R, D] = (0, o.useState)(null),
            k = (0, a.e)(t, (e) => D(e)),
            C = (0, o.useRef)(new Set()),
            A = (0, o.useRef)(0),
            I = "horizontal" === s,
            K = !R || !!R.closest("form"),
            [Z = [], z] = (0, c.T)({
              prop: g,
              defaultProp: y,
              onChange: (e) => {
                var t;
                null === (t = [...C.current][A.current]) ||
                  void 0 === t ||
                  t.focus(),
                  S(e);
              },
            }),
            O = (0, o.useRef)(Z);
          function V(e, t) {
            let { commit: n } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { commit: !1 },
              r = (String(f).split(".")[1] || "").length,
              o = (function (e, t) {
                let n = Math.pow(10, t);
                return Math.round(e * n) / n;
              })(Math.round((e - u) / f) * f + u, r),
              l = (0, i.u)(o, [u, d]);
            z(function () {
              var e, r;
              let o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                i = (function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    r = [...e];
                  return (r[n] = t), r.sort((e, t) => e - t);
                })(o, l, t);
              if (
                ((e = i),
                !(
                  !((r = v * f) > 0) ||
                  Math.min(...e.slice(0, -1).map((t, n) => e[n + 1] - t)) >= r
                ))
              )
                return o;
              {
                A.current = i.indexOf(l);
                let e = String(i) !== String(o);
                return e && n && b(i), e ? i : o;
              }
            });
          }
          return (0, o.createElement)(
            x,
            {
              scope: e.__scopeSlider,
              disabled: m,
              min: u,
              max: d,
              valueIndexToChangeRef: A,
              thumbs: C.current,
              values: Z,
              orientation: s,
            },
            (0, o.createElement)(
              w.Provider,
              { scope: e.__scopeSlider },
              (0, o.createElement)(
                w.Slot,
                { scope: e.__scopeSlider },
                (0, o.createElement)(
                  I ? _ : P,
                  (0, r.Z)(
                    { "aria-disabled": m, "data-disabled": m ? "" : void 0 },
                    M,
                    {
                      ref: k,
                      onPointerDown: (0, l.M)(M.onPointerDown, () => {
                        m || (O.current = Z);
                      }),
                      min: u,
                      max: d,
                      inverted: E,
                      onSlideStart: m
                        ? void 0
                        : function (e) {
                            let t = (function (e, t) {
                              if (1 === e.length) return 0;
                              let n = e.map((e) => Math.abs(e - t));
                              return n.indexOf(Math.min(...n));
                            })(Z, e);
                            V(e, t);
                          },
                      onSlideMove: m
                        ? void 0
                        : function (e) {
                            V(e, A.current);
                          },
                      onSlideEnd: m
                        ? void 0
                        : function () {
                            let e = O.current[A.current];
                            Z[A.current] !== e && b(Z);
                          },
                      onHomeKeyDown: () => !m && V(u, 0, { commit: !0 }),
                      onEndKeyDown: () =>
                        !m && V(d, Z.length - 1, { commit: !0 }),
                      onStepKeyDown: (e) => {
                        let { event: t, direction: n } = e;
                        if (!m) {
                          let e =
                              p.includes(t.key) ||
                              (t.shiftKey && h.includes(t.key)),
                            r = A.current;
                          V(Z[r] + f * (e ? 10 : 1) * n, r, { commit: !0 });
                        }
                      },
                    }
                  )
                )
              )
            ),
            K &&
              Z.map((e, t) =>
                (0, o.createElement)(H, {
                  key: t,
                  name: n ? n + (Z.length > 1 ? "[]" : "") : void 0,
                  value: e,
                })
              )
          );
        }),
        [k, C] = E(g, {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1,
        }),
        _ = (0, o.forwardRef)((e, t) => {
          let {
              min: n,
              max: i,
              dir: l,
              inverted: u,
              onSlideStart: c,
              onSlideMove: f,
              onSlideEnd: s,
              onStepKeyDown: m,
              ...v
            } = e,
            [p, h] = (0, o.useState)(null),
            g = (0, a.e)(t, (e) => h(e)),
            w = (0, o.useRef)(),
            S = (0, d.gm)(l),
            b = "ltr" === S,
            E = (b && !u) || (!b && u);
          function M(e) {
            let t = w.current || p.getBoundingClientRect(),
              r = B([0, t.width], E ? [n, i] : [i, n]);
            return (w.current = t), r(e - t.left);
          }
          return (0, o.createElement)(
            k,
            {
              scope: e.__scopeSlider,
              startEdge: E ? "left" : "right",
              endEdge: E ? "right" : "left",
              direction: E ? 1 : -1,
              size: "width",
            },
            (0, o.createElement)(
              A,
              (0, r.Z)({ dir: S, "data-orientation": "horizontal" }, v, {
                ref: g,
                style: {
                  ...v.style,
                  "--radix-slider-thumb-transform": "translateX(-50%)",
                },
                onSlideStart: (e) => {
                  let t = M(e.clientX);
                  null == c || c(t);
                },
                onSlideMove: (e) => {
                  let t = M(e.clientX);
                  null == f || f(t);
                },
                onSlideEnd: () => {
                  (w.current = void 0), null == s || s();
                },
                onStepKeyDown: (e) => {
                  let t = y[E ? "from-left" : "from-right"].includes(e.key);
                  null == m || m({ event: e, direction: t ? -1 : 1 });
                },
              })
            )
          );
        }),
        P = (0, o.forwardRef)((e, t) => {
          let {
              min: n,
              max: i,
              inverted: l,
              onSlideStart: u,
              onSlideMove: c,
              onSlideEnd: d,
              onStepKeyDown: f,
              ...s
            } = e,
            m = (0, o.useRef)(null),
            v = (0, a.e)(t, m),
            p = (0, o.useRef)(),
            h = !l;
          function g(e) {
            let t = p.current || m.current.getBoundingClientRect(),
              r = B([0, t.height], h ? [i, n] : [n, i]);
            return (p.current = t), r(e - t.top);
          }
          return (0, o.createElement)(
            k,
            {
              scope: e.__scopeSlider,
              startEdge: h ? "bottom" : "top",
              endEdge: h ? "top" : "bottom",
              size: "height",
              direction: h ? 1 : -1,
            },
            (0, o.createElement)(
              A,
              (0, r.Z)({ "data-orientation": "vertical" }, s, {
                ref: v,
                style: {
                  ...s.style,
                  "--radix-slider-thumb-transform": "translateY(50%)",
                },
                onSlideStart: (e) => {
                  let t = g(e.clientY);
                  null == u || u(t);
                },
                onSlideMove: (e) => {
                  let t = g(e.clientY);
                  null == c || c(t);
                },
                onSlideEnd: () => {
                  (p.current = void 0), null == d || d();
                },
                onStepKeyDown: (e) => {
                  let t = y[h ? "from-bottom" : "from-top"].includes(e.key);
                  null == f || f({ event: e, direction: t ? -1 : 1 });
                },
              })
            )
          );
        }),
        A = (0, o.forwardRef)((e, t) => {
          let {
              __scopeSlider: n,
              onSlideStart: i,
              onSlideMove: a,
              onSlideEnd: u,
              onHomeKeyDown: c,
              onEndKeyDown: d,
              onStepKeyDown: f,
              ...s
            } = e,
            v = R(g, n);
          return (0, o.createElement)(
            m.WV.span,
            (0, r.Z)({}, s, {
              ref: t,
              onKeyDown: (0, l.M)(e.onKeyDown, (e) => {
                "Home" === e.key
                  ? (c(e), e.preventDefault())
                  : "End" === e.key
                  ? (d(e), e.preventDefault())
                  : p.concat(h).includes(e.key) && (f(e), e.preventDefault());
              }),
              onPointerDown: (0, l.M)(e.onPointerDown, (e) => {
                let t = e.target;
                t.setPointerCapture(e.pointerId),
                  e.preventDefault(),
                  v.thumbs.has(t) ? t.focus() : i(e);
              }),
              onPointerMove: (0, l.M)(e.onPointerMove, (e) => {
                e.target.hasPointerCapture(e.pointerId) && a(e);
              }),
              onPointerUp: (0, l.M)(e.onPointerUp, (e) => {
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  (t.releasePointerCapture(e.pointerId), u(e));
              }),
            })
          );
        }),
        I = (0, o.forwardRef)((e, t) => {
          let { __scopeSlider: n, ...i } = e,
            l = R("SliderTrack", n);
          return (0, o.createElement)(
            m.WV.span,
            (0, r.Z)(
              {
                "data-disabled": l.disabled ? "" : void 0,
                "data-orientation": l.orientation,
              },
              i,
              { ref: t }
            )
          );
        }),
        K = "SliderRange",
        Z = (0, o.forwardRef)((e, t) => {
          let { __scopeSlider: n, ...i } = e,
            l = R(K, n),
            u = C(K, n),
            c = (0, o.useRef)(null),
            d = (0, a.e)(t, c),
            f = l.values.length,
            s = l.values.map((e) => q(e, l.min, l.max));
          return (0, o.createElement)(
            m.WV.span,
            (0, r.Z)(
              {
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
              },
              i,
              {
                ref: d,
                style: {
                  ...e.style,
                  [u.startEdge]: (f > 1 ? Math.min(...s) : 0) + "%",
                  [u.endEdge]: 100 - Math.max(...s) + "%",
                },
              }
            )
          );
        }),
        z = "SliderThumb",
        O = (0, o.forwardRef)((e, t) => {
          let n = S(e.__scopeSlider),
            [i, l] = (0, o.useState)(null),
            u = (0, a.e)(t, (e) => l(e)),
            c = (0, o.useMemo)(
              () => (i ? n().findIndex((e) => e.ref.current === i) : -1),
              [n, i]
            );
          return (0, o.createElement)(V, (0, r.Z)({}, e, { ref: u, index: c }));
        }),
        V = (0, o.forwardRef)((e, t) => {
          var n;
          let { __scopeSlider: i, index: u, ...c } = e,
            d = R(z, i),
            f = C(z, i),
            [v, p] = (0, o.useState)(null),
            h = (0, a.e)(t, (e) => p(e)),
            y = (0, s.t)(v),
            g = d.values[u],
            S = void 0 === g ? 0 : q(g, d.min, d.max),
            b =
              (n = d.values.length) > 2
                ? "Value ".concat(u + 1, " of ").concat(n)
                : 2 === n
                ? ["Minimum", "Maximum"][u]
                : void 0,
            E = null == y ? void 0 : y[f.size],
            M = E
              ? (function (e, t, n) {
                  let r = e / 2,
                    o = B([0, 50], [0, r]);
                  return (r - o(t) * n) * n;
                })(E, S, f.direction)
              : 0;
          return (
            (0, o.useEffect)(() => {
              if (v)
                return (
                  d.thumbs.add(v),
                  () => {
                    d.thumbs.delete(v);
                  }
                );
            }, [v, d.thumbs]),
            (0, o.createElement)(
              "span",
              {
                style: {
                  transform: "var(--radix-slider-thumb-transform)",
                  position: "absolute",
                  [f.startEdge]: "calc(".concat(S, "% + ").concat(M, "px)"),
                },
              },
              (0, o.createElement)(
                w.ItemSlot,
                { scope: e.__scopeSlider },
                (0, o.createElement)(
                  m.WV.span,
                  (0, r.Z)(
                    {
                      role: "slider",
                      "aria-label": e["aria-label"] || b,
                      "aria-valuemin": d.min,
                      "aria-valuenow": g,
                      "aria-valuemax": d.max,
                      "aria-orientation": d.orientation,
                      "data-orientation": d.orientation,
                      "data-disabled": d.disabled ? "" : void 0,
                      tabIndex: d.disabled ? void 0 : 0,
                    },
                    c,
                    {
                      ref: h,
                      style: void 0 === g ? { display: "none" } : e.style,
                      onFocus: (0, l.M)(e.onFocus, () => {
                        d.valueIndexToChangeRef.current = u;
                      }),
                    }
                  )
                )
              )
            )
          );
        }),
        H = (e) => {
          let { value: t, ...n } = e,
            i = (0, o.useRef)(null),
            l = (0, f.D)(t);
          return (
            (0, o.useEffect)(() => {
              let e = i.current,
                n = Object.getOwnPropertyDescriptor(
                  window.HTMLInputElement.prototype,
                  "value"
                ).set;
              if (l !== t && n) {
                let r = new Event("input", { bubbles: !0 });
                n.call(e, t), e.dispatchEvent(r);
              }
            }, [l, t]),
            (0, o.createElement)(
              "input",
              (0, r.Z)({ style: { display: "none" } }, n, {
                ref: i,
                defaultValue: t,
              })
            )
          );
        };
      function q(e, t, n) {
        return (0, i.u)((100 / (n - t)) * (e - t), [0, 100]);
      }
      function B(e, t) {
        return (n) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          let r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0]);
        };
      }
      let T = D,
        U = I,
        W = Z,
        j = O;
    },
    65030: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(64090);
      function o(e) {
        let t = (0, r.useRef)({ value: e, previous: e });
        return (0, r.useMemo)(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
    76769: function (e, t, n) {
      n.d(t, {
        t: function () {
          return i;
        },
      });
      var r = n(64090),
        o = n(32618);
      function i(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, o;
                if (!Array.isArray(t) || !t.length) return;
                let i = t[0];
                if ("borderBoxSize" in i) {
                  let e = i.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (o = t.blockSize);
                } else (r = e.offsetWidth), (o = e.offsetHeight);
                n({ width: r, height: o });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    57742: function (e, t, n) {
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        i = (e, t) => (n) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: l, defaultVariants: a } = t,
            u = Object.keys(l).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == a ? void 0 : a[e];
              if (null === t) return null;
              let i = r(t) || r(o);
              return l[e][i];
            }),
            c =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            u,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...a, ...c }[t])
                      : { ...a, ...c }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    71003: function (e, t, n) {
      n.r(t),
        n.d(t, {
          useBalance: function () {
            return u;
          },
        });
      var r = n(5667),
        o = n(73054),
        i = n(38760),
        l = n(43089),
        a = n(42887);
      function u() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: u, query: c = {} } = n,
          d = (0, a.useConfig)(n),
          f = (0, l.useChainId)(),
          s = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: o, scopeKey: i, ...l } = n[1];
                if (!o) throw Error("address is required");
                let a = await (0, r.s)(e, { ...l, address: o });
                return null != a ? a : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["balance", (0, o.O)(e)];
              })(t),
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          m = !!(u && (null === (t = c.enabled) || void 0 === t || t));
        return (0, i.aM)({ ...c, ...s, enabled: m });
      }
    },
    69908: function (e, t, n) {
      n.r(t),
        n.d(t, {
          useReadContract: function () {
            return u;
          },
        });
      var r = n(31723),
        o = n(73054),
        i = n(38760),
        l = n(43089),
        a = n(42887);
      function u() {
        var e, t, n;
        let u =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: c, address: d, functionName: f, query: s = {} } = u,
          m = (0, a.useConfig)(u),
          v = (0, l.useChainId)(),
          p = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(n) {
                let { queryKey: o } = n,
                  i = t.abi;
                if (!i) throw Error("abi is required");
                let { address: l, functionName: a, scopeKey: u, ...c } = o[1];
                if (!l) throw Error("address is required");
                if (!a) throw Error("functionName is required");
                let d = c.args;
                return (0, r.L)(e, {
                  abi: i,
                  address: l,
                  functionName: a,
                  args: d,
                  ...c,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...n } = e;
                return ["readContract", (0, o.O)(n)];
              })(t),
            };
          })(m, {
            ...u,
            chainId: null !== (e = u.chainId) && void 0 !== e ? e : v,
          }),
          h = !!(
            d &&
            c &&
            f &&
            (null === (t = s.enabled) || void 0 === t || t)
          );
        return (0, i.aM)({
          ...s,
          ...p,
          enabled: h,
          structuralSharing:
            null !== (n = s.structuralSharing) && void 0 !== n ? n : i.if,
        });
      }
    },
  },
]);
