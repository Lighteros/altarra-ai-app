"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9889],
  {
    28670: function (e, t, n) {
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
       */ let r = (0, n(87461).Z)("Search", [
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
        ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
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
    26231: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return ec;
        },
        h_: function () {
          return eu;
        },
        fC: function () {
          return el;
        },
        xz: function () {
          return ea;
        },
      });
      var r = n(14749),
        o = n(64090),
        l = n(44991),
        a = n(61266),
        u = n(84104),
        c = n(1260),
        i = n(46165),
        s = n(78082),
        d = n(38687),
        f = n(12338),
        v = n(37881),
        m = n(12642),
        p = n(29586),
        h = n(59143),
        g = n(9310),
        E = n(66674),
        b = n(69703),
        y = n(84814),
        w = n(42022),
        C = (0, n(52804)._)(),
        R = function () {},
        k = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: R,
              onWheelCapture: R,
              onTouchMoveCapture: R,
            }),
            l = r[0],
            a = r[1],
            u = e.forwardProps,
            c = e.children,
            i = e.className,
            s = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            v = e.sideCar,
            m = e.noIsolation,
            p = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            E = (0, b.__rest)(e, [
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
            y = (0, w.q)([n, t]),
            k = (0, b.__assign)((0, b.__assign)({}, E), l);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(v, {
                sideCar: C,
                removeScrollBar: s,
                shards: f,
                noIsolation: m,
                inert: p,
                setCallbacks: a,
                allowPinchZoom: !!h,
                lockRef: n,
              }),
            u
              ? o.cloneElement(
                  o.Children.only(c),
                  (0, b.__assign)((0, b.__assign)({}, k), { ref: y })
                )
              : o.createElement(
                  void 0 === g ? "div" : g,
                  (0, b.__assign)({}, k, { className: i, ref: y }),
                  c
                )
          );
        });
      (k.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (k.classNames = { fullWidth: y.zi, zeroRight: y.pF });
      var S = n(29074),
        P = n(58387),
        _ = n(68109),
        O = !1;
      try {
        var A = Object.defineProperty({}, "passive", {
          get: function () {
            return (O = !0), !0;
          },
        });
        window.addEventListener("test", A, A),
          window.removeEventListener("test", A, A);
      } catch (e) {
        O = !1;
      }
      var D = !!O && { passive: !1 },
        L = function (e, t) {
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
        N = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              M(e, n))
            ) {
              var r = I(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        M = function (e, t) {
          return "v" === e ? L(t, "overflowY") : L(t, "overflowX");
        },
        I = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        x = function (e, t, n, r, o) {
          var l,
            a =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            u = a * r,
            c = n.target,
            i = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            v = 0;
          do {
            var m = I(e, c),
              p = m[0],
              h = m[1] - m[2] - a * p;
            (p || h) && M(e, c) && ((f += h), (v += p)), (c = c.parentNode);
          } while (
            (!i && c !== document.body) ||
            (i && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 0 === v) || (!o && -u > v)) && (s = !0),
            s
          );
        },
        F = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        T = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Z = function (e) {
          return e && "current" in e ? e.current : e;
        },
        W = 0,
        B = [],
        K = (0, S.L)(C, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            l = o.useState(W++)[0],
            a = o.useState(function () {
              return (0, _.Ws)();
            })[0],
            u = o.useRef(e);
          o.useEffect(
            function () {
              u.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(l));
                  var t = (0, b.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(Z),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(l));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(l)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(l)
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
                return !u.current.allowPinchZoom;
              var o,
                l = F(e),
                a = n.current,
                c = "deltaX" in e ? e.deltaX : a[0] - l[0],
                i = "deltaY" in e ? e.deltaY : a[1] - l[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(i) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = N(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = N(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || i) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var v = r.current || o;
              return x(v, t, e, "h" === v ? c : i, !0);
            }, []),
            i = o.useCallback(function (e) {
              if (B.length && B[B.length - 1] === a) {
                var n = "deltaY" in e ? T(e) : F(e),
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
                  var o = (u.current.shards || [])
                    .map(Z)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !u.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = o.useCallback(function (e, n, r, o) {
              var l = { name: e, delta: n, target: r, should: o };
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = F(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              s(t.type, T(t), t.target, c(t, e.lockRef.current));
            }, []),
            v = o.useCallback(function (t) {
              s(t.type, F(t), t.target, c(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              B.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v,
              }),
              document.addEventListener("wheel", i, D),
              document.addEventListener("touchmove", i, D),
              document.addEventListener("touchstart", d, D),
              function () {
                (B = B.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", i, D),
                  document.removeEventListener("touchmove", i, D),
                  document.removeEventListener("touchstart", d, D);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            p = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            p
              ? o.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      l,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(l, " {pointer-events: all;}\n"),
                })
              : null,
            m ? o.createElement(P.jp, { gapMode: "margin" }) : null
          );
        }),
        Y = o.forwardRef(function (e, t) {
          return o.createElement(
            k,
            (0, b.__assign)({}, e, { ref: t, sideCar: K })
          );
        });
      Y.classNames = k.classNames;
      let U = "Popover",
        [X, q] = (0, u.b)(U, [f.D7]),
        z = (0, f.D7)(),
        [j, V] = X(U),
        H = (0, o.forwardRef)((e, t) => {
          let { __scopePopover: n, ...u } = e,
            c = V("PopoverTrigger", n),
            i = z(n),
            s = (0, a.e)(t, c.triggerRef),
            d = (0, o.createElement)(
              p.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  "aria-haspopup": "dialog",
                  "aria-expanded": c.open,
                  "aria-controls": c.contentId,
                  "data-state": eo(c.open),
                },
                u,
                { ref: s, onClick: (0, l.M)(e.onClick, c.onOpenToggle) }
              )
            );
          return c.hasCustomAnchor
            ? d
            : (0, o.createElement)(f.ee, (0, r.Z)({ asChild: !0 }, i), d);
        }),
        G = "PopoverPortal",
        [J, Q] = X(G, { forceMount: void 0 }),
        $ = "PopoverContent",
        ee = (0, o.forwardRef)((e, t) => {
          let n = Q($, e.__scopePopover),
            { forceMount: l = n.forceMount, ...a } = e,
            u = V($, e.__scopePopover);
          return (0, o.createElement)(
            m.z,
            { present: l || u.open },
            u.modal
              ? (0, o.createElement)(et, (0, r.Z)({}, a, { ref: t }))
              : (0, o.createElement)(en, (0, r.Z)({}, a, { ref: t }))
          );
        }),
        et = (0, o.forwardRef)((e, t) => {
          let n = V($, e.__scopePopover),
            u = (0, o.useRef)(null),
            c = (0, a.e)(t, u),
            i = (0, o.useRef)(!1);
          return (
            (0, o.useEffect)(() => {
              let e = u.current;
              if (e) return (0, E.Ry)(e);
            }, []),
            (0, o.createElement)(
              Y,
              { as: h.g7, allowPinchZoom: !0 },
              (0, o.createElement)(
                er,
                (0, r.Z)({}, e, {
                  ref: c,
                  trapFocus: n.open,
                  disableOutsidePointerEvents: !0,
                  onCloseAutoFocus: (0, l.M)(e.onCloseAutoFocus, (e) => {
                    var t;
                    e.preventDefault(),
                      i.current ||
                        null === (t = n.triggerRef.current) ||
                        void 0 === t ||
                        t.focus();
                  }),
                  onPointerDownOutside: (0, l.M)(
                    e.onPointerDownOutside,
                    (e) => {
                      let t = e.detail.originalEvent,
                        n = 0 === t.button && !0 === t.ctrlKey,
                        r = 2 === t.button || n;
                      i.current = r;
                    },
                    { checkForDefaultPrevented: !1 }
                  ),
                  onFocusOutside: (0, l.M)(
                    e.onFocusOutside,
                    (e) => e.preventDefault(),
                    { checkForDefaultPrevented: !1 }
                  ),
                })
              )
            )
          );
        }),
        en = (0, o.forwardRef)((e, t) => {
          let n = V($, e.__scopePopover),
            l = (0, o.useRef)(!1),
            a = (0, o.useRef)(!1);
          return (0, o.createElement)(
            er,
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
                    (l.current ||
                      null === (o = n.triggerRef.current) ||
                      void 0 === o ||
                      o.focus(),
                    t.preventDefault()),
                  (l.current = !1),
                  (a.current = !1);
              },
              onInteractOutside: (t) => {
                var r, o;
                null === (r = e.onInteractOutside) ||
                  void 0 === r ||
                  r.call(e, t),
                  t.defaultPrevented ||
                    ((l.current = !0),
                    "pointerdown" !== t.detail.originalEvent.type ||
                      (a.current = !0));
                let u = t.target;
                (null === (o = n.triggerRef.current) || void 0 === o
                  ? void 0
                  : o.contains(u)) && t.preventDefault(),
                  "focusin" === t.detail.originalEvent.type &&
                    a.current &&
                    t.preventDefault();
              },
            })
          );
        }),
        er = (0, o.forwardRef)((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: l,
              onOpenAutoFocus: a,
              onCloseAutoFocus: u,
              disableOutsidePointerEvents: d,
              onEscapeKeyDown: v,
              onPointerDownOutside: m,
              onFocusOutside: p,
              onInteractOutside: h,
              ...g
            } = e,
            E = V($, n),
            b = z(n);
          return (
            (0, i.EW)(),
            (0, o.createElement)(
              s.M,
              {
                asChild: !0,
                loop: !0,
                trapped: l,
                onMountAutoFocus: a,
                onUnmountAutoFocus: u,
              },
              (0, o.createElement)(
                c.XB,
                {
                  asChild: !0,
                  disableOutsidePointerEvents: d,
                  onInteractOutside: h,
                  onEscapeKeyDown: v,
                  onPointerDownOutside: m,
                  onFocusOutside: p,
                  onDismiss: () => E.onOpenChange(!1),
                },
                (0, o.createElement)(
                  f.VY,
                  (0, r.Z)(
                    {
                      "data-state": eo(E.open),
                      role: "dialog",
                      id: E.contentId,
                    },
                    b,
                    g,
                    {
                      ref: t,
                      style: {
                        ...g.style,
                        "--radix-popover-content-transform-origin":
                          "var(--radix-popper-transform-origin)",
                        "--radix-popover-content-available-width":
                          "var(--radix-popper-available-width)",
                        "--radix-popover-content-available-height":
                          "var(--radix-popper-available-height)",
                        "--radix-popover-trigger-width":
                          "var(--radix-popper-anchor-width)",
                        "--radix-popover-trigger-height":
                          "var(--radix-popper-anchor-height)",
                      },
                    }
                  )
                )
              )
            )
          );
        });
      function eo(e) {
        return e ? "open" : "closed";
      }
      let el = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: l,
              onOpenChange: a,
              modal: u = !1,
            } = e,
            c = z(t),
            i = (0, o.useRef)(null),
            [s, v] = (0, o.useState)(!1),
            [m = !1, p] = (0, g.T)({ prop: r, defaultProp: l, onChange: a });
          return (0, o.createElement)(
            f.fC,
            c,
            (0, o.createElement)(
              j,
              {
                scope: t,
                contentId: (0, d.M)(),
                triggerRef: i,
                open: m,
                onOpenChange: p,
                onOpenToggle: (0, o.useCallback)(() => p((e) => !e), [p]),
                hasCustomAnchor: s,
                onCustomAnchorAdd: (0, o.useCallback)(() => v(!0), []),
                onCustomAnchorRemove: (0, o.useCallback)(() => v(!1), []),
                modal: u,
              },
              n
            )
          );
        },
        ea = H,
        eu = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: l,
            } = e,
            a = V(G, t);
          return (0, o.createElement)(
            J,
            { scope: t, forceMount: n },
            (0, o.createElement)(
              m.z,
              { present: n || a.open },
              (0, o.createElement)(v.h, { asChild: !0, container: l }, r)
            )
          );
        },
        ec = ee;
    },
    63124: function (e, t, n) {
      let r, o;
      n.d(t, {
        mY: function () {
          return e9;
        },
      });
      var l = /[\\\/_+.#"@\[\(\{&]/,
        a = /[\\\/_+.#"@\[\(\{&]/g,
        u = /[\s-]/,
        c = /[\s-]/g;
      function i(e) {
        return e.toLowerCase().replace(c, " ");
      }
      var s = n(14749),
        d = n(64090),
        f = n.t(d, 2);
      function v(e, t) {
        let { checkForDefaultPrevented: n = !0 } =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) =>
          t.forEach((t) => {
            "function" == typeof t ? t(e) : null != t && (t.current = e);
          });
      }
      function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, d.useCallback)(m(...t), t);
      }
      let h = (null == globalThis ? void 0 : globalThis.document)
          ? d.useLayoutEffect
          : () => {},
        g = f["useId".toString()] || (() => void 0),
        E = 0;
      function b(e) {
        let [t, n] = d.useState(g());
        return (
          h(() => {
            e || n((e) => (null != e ? e : String(E++)));
          }, [e]),
          e || (t ? "radix-".concat(t) : "")
        );
      }
      function y(e) {
        let t = (0, d.useRef)(e);
        return (
          (0, d.useEffect)(() => {
            t.current = e;
          }),
          (0, d.useMemo)(
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
      var w = n(89542);
      let C = (0, d.forwardRef)((e, t) => {
        let { children: n, ...r } = e,
          o = d.Children.toArray(n),
          l = o.find(S);
        if (l) {
          let e = l.props.children,
            n = o.map((t) =>
              t !== l
                ? t
                : d.Children.count(e) > 1
                ? d.Children.only(null)
                : (0, d.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, d.createElement)(
            R,
            (0, s.Z)({}, r, { ref: t }),
            (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, d.createElement)(R, (0, s.Z)({}, r, { ref: t }), n);
      });
      C.displayName = "Slot";
      let R = (0, d.forwardRef)((e, t) => {
        let { children: n, ...r } = e;
        return (0, d.isValidElement)(n)
          ? (0, d.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let r in t) {
                  let o = e[r],
                    l = t[r];
                  /^on[A-Z]/.test(r)
                    ? (n[r] = function () {
                        for (
                          var e = arguments.length, t = Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        null == l || l(...t), null == o || o(...t);
                      })
                    : "style" === r
                    ? (n[r] = { ...o, ...l })
                    : "className" === r &&
                      (n[r] = [o, l].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(r, n.props),
              ref: m(t, n.ref),
            })
          : d.Children.count(n) > 1
          ? d.Children.only(null)
          : null;
      });
      R.displayName = "SlotClone";
      let k = (e) => {
        let { children: t } = e;
        return (0, d.createElement)(d.Fragment, null, t);
      };
      function S(e) {
        return (0, d.isValidElement)(e) && e.type === k;
      }
      let P = [
          "a",
          "button",
          "div",
          "h2",
          "h3",
          "img",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (0, d.forwardRef)((e, n) => {
            let { asChild: r, ...o } = e,
              l = r ? C : t;
            return (
              (0, d.useEffect)(() => {
                window[Symbol.for("radix-ui")] = !0;
              }, []),
              (0, d.createElement)(l, (0, s.Z)({}, o, { ref: n }))
            );
          });
          return (n.displayName = "Primitive.".concat(t)), { ...e, [t]: n };
        }, {}),
        _ = "dismissableLayer.update",
        O = (0, d.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        A = (0, d.forwardRef)((e, t) => {
          let {
              disableOutsidePointerEvents: n = !1,
              onEscapeKeyDown: o,
              onPointerDownOutside: l,
              onFocusOutside: a,
              onInteractOutside: u,
              onDismiss: c,
              ...i
            } = e,
            f = (0, d.useContext)(O),
            [m, h] = (0, d.useState)(null),
            [, g] = (0, d.useState)({}),
            E = p(t, (e) => h(e)),
            b = Array.from(f.layers),
            [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
            C = b.indexOf(w),
            R = m ? b.indexOf(m) : -1,
            k = f.layersWithOutsidePointerEventsDisabled.size > 0,
            S = R >= C,
            A = (function (e) {
              let t = y(e),
                n = (0, d.useRef)(!1),
                r = (0, d.useRef)(() => {});
              return (
                (0, d.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !n.current) {
                        let n = { originalEvent: e };
                        function o() {
                          L("dismissableLayer.pointerDownOutside", t, n, {
                            discrete: !0,
                          });
                        }
                        "touch" === e.pointerType
                          ? (document.removeEventListener("click", r.current),
                            (r.current = o),
                            document.addEventListener("click", r.current, {
                              once: !0,
                            }))
                          : o();
                      }
                      n.current = !1;
                    },
                    o = window.setTimeout(() => {
                      document.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(o),
                      document.removeEventListener("pointerdown", e),
                      document.removeEventListener("click", r.current);
                  };
                }, [t]),
                { onPointerDownCapture: () => (n.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...f.branches].some((e) => e.contains(t));
              !S ||
                n ||
                (null == l || l(e),
                null == u || u(e),
                e.defaultPrevented || null == c || c());
            }),
            N = (function (e) {
              let t = y(e),
                n = (0, d.useRef)(!1);
              return (
                (0, d.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !n.current &&
                      L(
                        "dismissableLayer.focusOutside",
                        t,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    document.addEventListener("focusin", e),
                    () => document.removeEventListener("focusin", e)
                  );
                }, [t]),
                {
                  onFocusCapture: () => (n.current = !0),
                  onBlurCapture: () => (n.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...f.branches].some((e) => e.contains(t)) ||
                (null == a || a(e),
                null == u || u(e),
                e.defaultPrevented || null == c || c());
            });
          return (
            !(function (e) {
              let t = y(e);
              (0, d.useEffect)(() => {
                let e = (e) => {
                  "Escape" === e.key && t(e);
                };
                return (
                  document.addEventListener("keydown", e),
                  () => document.removeEventListener("keydown", e)
                );
              }, [t]);
            })((e) => {
              R !== f.layers.size - 1 ||
                (null == o || o(e),
                !e.defaultPrevented && c && (e.preventDefault(), c()));
            }),
            (0, d.useEffect)(() => {
              if (m)
                return (
                  n &&
                    (0 === f.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = document.body.style.pointerEvents),
                      (document.body.style.pointerEvents = "none")),
                    f.layersWithOutsidePointerEventsDisabled.add(m)),
                  f.layers.add(m),
                  D(),
                  () => {
                    n &&
                      1 === f.layersWithOutsidePointerEventsDisabled.size &&
                      (document.body.style.pointerEvents = r);
                  }
                );
            }, [m, n, f]),
            (0, d.useEffect)(
              () => () => {
                m &&
                  (f.layers.delete(m),
                  f.layersWithOutsidePointerEventsDisabled.delete(m),
                  D());
              },
              [m, f]
            ),
            (0, d.useEffect)(() => {
              let e = () => g({});
              return (
                document.addEventListener(_, e),
                () => document.removeEventListener(_, e)
              );
            }, []),
            (0, d.createElement)(
              P.div,
              (0, s.Z)({}, i, {
                ref: E,
                style: {
                  pointerEvents: k ? (S ? "auto" : "none") : void 0,
                  ...e.style,
                },
                onFocusCapture: v(e.onFocusCapture, N.onFocusCapture),
                onBlurCapture: v(e.onBlurCapture, N.onBlurCapture),
                onPointerDownCapture: v(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        });
      function D() {
        let e = new CustomEvent(_);
        document.dispatchEvent(e);
      }
      function L(e, t, n, r) {
        let { discrete: o } = r,
          l = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && l.addEventListener(e, t, { once: !0 }), o)
          ? l && (0, w.flushSync)(() => l.dispatchEvent(a))
          : l.dispatchEvent(a);
      }
      let N = "focusScope.autoFocusOnMount",
        M = "focusScope.autoFocusOnUnmount",
        I = { bubbles: !1, cancelable: !0 },
        x = (0, d.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              ...a
            } = e,
            [u, c] = (0, d.useState)(null),
            i = y(o),
            f = y(l),
            v = (0, d.useRef)(null),
            m = p(t, (e) => c(e)),
            h = (0, d.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, d.useEffect)(() => {
            if (r) {
              function e(e) {
                if (h.paused || !u) return;
                let t = e.target;
                u.contains(t) ? (v.current = t) : Z(v.current, { select: !0 });
              }
              function t(e) {
                h.paused ||
                  !u ||
                  u.contains(e.relatedTarget) ||
                  Z(v.current, { select: !0 });
              }
              return (
                document.addEventListener("focusin", e),
                document.addEventListener("focusout", t),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t);
                }
              );
            }
          }, [r, u, h.paused]),
            (0, d.useEffect)(() => {
              if (u) {
                W.add(h);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(N, I);
                  u.addEventListener(N, i),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (Z(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        F(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && Z(u));
                }
                return () => {
                  u.removeEventListener(N, i),
                    setTimeout(() => {
                      let t = new CustomEvent(M, I);
                      u.addEventListener(M, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          Z(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(M, f),
                        W.remove(h);
                    }, 0);
                };
              }
            }, [u, i, f, h]);
          let g = (0, d.useCallback)(
            (e) => {
              if ((!n && !r) || h.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, l] = (function (e) {
                    let t = F(e);
                    return [T(t, e), T(t.reverse(), e)];
                  })(t);
                r && l
                  ? e.shiftKey || o !== l
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && Z(l, { select: !0 }))
                    : (e.preventDefault(), n && Z(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, h.paused]
          );
          return (0, d.createElement)(
            P.div,
            (0, s.Z)({ tabIndex: -1 }, a, { ref: m, onKeyDown: g })
          );
        });
      function F(e) {
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
      function T(e, t) {
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
      function Z(e) {
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
      let W =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = B(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = B(o, e))[0]) || void 0 === t || t.resume();
          },
        });
      function B(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      let K = (0, d.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
            ...o
          } = e;
          return r
            ? w.createPortal(
                (0, d.createElement)(P.div, (0, s.Z)({}, o, { ref: t })),
                r
              )
            : null;
        }),
        Y = (e) => {
          let { present: t, children: n } = e,
            r = (function (e) {
              var t, n;
              let [r, o] = (0, d.useState)(),
                l = (0, d.useRef)({}),
                a = (0, d.useRef)(e),
                u = (0, d.useRef)("none"),
                [c, i] =
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
                  (0, d.useReducer)((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                (0, d.useEffect)(() => {
                  let e = U(l.current);
                  u.current = "mounted" === c ? e : "none";
                }, [c]),
                h(() => {
                  let t = l.current,
                    n = a.current;
                  if (n !== e) {
                    let r = u.current,
                      o = U(t);
                    e
                      ? i("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? i("UNMOUNT")
                      : n && r !== o
                      ? i("ANIMATION_OUT")
                      : i("UNMOUNT"),
                      (a.current = e);
                  }
                }, [e, i]),
                h(() => {
                  if (r) {
                    let e = (e) => {
                        let t = U(l.current).includes(e.animationName);
                        e.target === r &&
                          t &&
                          (0, w.flushSync)(() => i("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === r && (u.current = U(l.current));
                      };
                    return (
                      r.addEventListener("animationstart", t),
                      r.addEventListener("animationcancel", e),
                      r.addEventListener("animationend", e),
                      () => {
                        r.removeEventListener("animationstart", t),
                          r.removeEventListener("animationcancel", e),
                          r.removeEventListener("animationend", e);
                      }
                    );
                  }
                  i("ANIMATION_END");
                }, [r, i]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(c),
                  ref: (0, d.useCallback)((e) => {
                    e && (l.current = getComputedStyle(e)), o(e);
                  }, []),
                }
              );
            })(t),
            o =
              "function" == typeof n
                ? n({ present: r.isPresent })
                : d.Children.only(n),
            l = p(r.ref, o.ref);
          return "function" == typeof n || r.isPresent
            ? (0, d.cloneElement)(o, { ref: l })
            : null;
        };
      function U(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      Y.displayName = "Presence";
      let X = 0;
      function q() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
      var z = n(69703),
        j = n(84814),
        V = n(42022),
        H = (0, n(52804)._)(),
        G = function () {},
        J = d.forwardRef(function (e, t) {
          var n = d.useRef(null),
            r = d.useState({
              onScrollCapture: G,
              onWheelCapture: G,
              onTouchMoveCapture: G,
            }),
            o = r[0],
            l = r[1],
            a = e.forwardProps,
            u = e.children,
            c = e.className,
            i = e.removeScrollBar,
            s = e.enabled,
            f = e.shards,
            v = e.sideCar,
            m = e.noIsolation,
            p = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            E = (0, z.__rest)(e, [
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
            b = (0, V.q)([n, t]),
            y = (0, z.__assign)((0, z.__assign)({}, E), o);
          return d.createElement(
            d.Fragment,
            null,
            s &&
              d.createElement(v, {
                sideCar: H,
                removeScrollBar: i,
                shards: f,
                noIsolation: m,
                inert: p,
                setCallbacks: l,
                allowPinchZoom: !!h,
                lockRef: n,
              }),
            a
              ? d.cloneElement(
                  d.Children.only(u),
                  (0, z.__assign)((0, z.__assign)({}, y), { ref: b })
                )
              : d.createElement(
                  void 0 === g ? "div" : g,
                  (0, z.__assign)({}, y, { className: c, ref: b }),
                  u
                )
          );
        });
      (J.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (J.classNames = { fullWidth: j.zi, zeroRight: j.pF });
      var Q = n(29074),
        $ = n(58387),
        ee = n(68109),
        et = !1;
      try {
        var en = Object.defineProperty({}, "passive", {
          get: function () {
            return (et = !0), !0;
          },
        });
        window.addEventListener("test", en, en),
          window.removeEventListener("test", en, en);
      } catch (e) {
        et = !1;
      }
      var er = !!et && { passive: !1 },
        eo = function (e) {
          var t = window.getComputedStyle(e);
          return (
            "hidden" !== t.overflowY &&
            !(t.overflowY === t.overflowX && "visible" === t.overflowY)
          );
        },
        el = function (e) {
          var t = window.getComputedStyle(e);
          return (
            "hidden" !== t.overflowX &&
            !(t.overflowY === t.overflowX && "visible" === t.overflowX)
          );
        },
        ea = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              eu(e, n))
            ) {
              var r = ec(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        eu = function (e, t) {
          return "v" === e ? eo(t) : el(t);
        },
        ec = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ei = function (e, t, n, r, o) {
          var l,
            a =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            u = a * r,
            c = n.target,
            i = t.contains(c),
            s = !1,
            d = u > 0,
            f = 0,
            v = 0;
          do {
            var m = ec(e, c),
              p = m[0],
              h = m[1] - m[2] - a * p;
            (p || h) && eu(e, c) && ((f += h), (v += p)), (c = c.parentNode);
          } while (
            (!i && c !== document.body) ||
            (i && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && u > f))
              ? (s = !0)
              : !d && ((o && 0 === v) || (!o && -u > v)) && (s = !0),
            s
          );
        },
        es = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ed = function (e) {
          return [e.deltaX, e.deltaY];
        },
        ef = function (e) {
          return e && "current" in e ? e.current : e;
        },
        ev = 0,
        em = [],
        ep = (0, Q.L)(H, function (e) {
          var t = d.useRef([]),
            n = d.useRef([0, 0]),
            r = d.useRef(),
            o = d.useState(ev++)[0],
            l = d.useState(function () {
              return (0, ee.Ws)();
            })[0],
            a = d.useRef(e);
          d.useEffect(
            function () {
              a.current = e;
            },
            [e]
          ),
            d.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (0, z.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(ef),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var u = d.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !a.current.allowPinchZoom;
              var o,
                l = es(e),
                u = n.current,
                c = "deltaX" in e ? e.deltaX : u[0] - l[0],
                i = "deltaY" in e ? e.deltaY : u[1] - l[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(i) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = ea(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = ea(d, s))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || i) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var v = r.current || o;
              return ei(v, t, e, "h" === v ? c : i, !0);
            }, []),
            c = d.useCallback(function (e) {
              if (em.length && em[em.length - 1] === l) {
                var n = "deltaY" in e ? ed(e) : es(e),
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
                  e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (a.current.shards || [])
                    .map(ef)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) &&
                    e.preventDefault();
                }
              }
            }, []),
            i = d.useCallback(function (e, n, r, o) {
              var l = { name: e, delta: n, target: r, should: o };
              t.current.push(l),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== l;
                  });
                }, 1);
            }, []),
            s = d.useCallback(function (e) {
              (n.current = es(e)), (r.current = void 0);
            }, []),
            f = d.useCallback(function (t) {
              i(t.type, ed(t), t.target, u(t, e.lockRef.current));
            }, []),
            v = d.useCallback(function (t) {
              i(t.type, es(t), t.target, u(t, e.lockRef.current));
            }, []);
          d.useEffect(function () {
            return (
              em.push(l),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: v,
              }),
              document.addEventListener("wheel", c, er),
              document.addEventListener("touchmove", c, er),
              document.addEventListener("touchstart", s, er),
              function () {
                (em = em.filter(function (e) {
                  return e !== l;
                })),
                  document.removeEventListener("wheel", c, er),
                  document.removeEventListener("touchmove", c, er),
                  document.removeEventListener("touchstart", s, er);
              }
            );
          }, []);
          var m = e.removeScrollBar,
            p = e.inert;
          return d.createElement(
            d.Fragment,
            null,
            p
              ? d.createElement(l, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            m ? d.createElement($.jp, { gapMode: "margin" }) : null
          );
        }),
        eh = d.forwardRef(function (e, t) {
          return d.createElement(
            J,
            (0, z.__assign)({}, e, { ref: t, sideCar: ep })
          );
        });
      eh.classNames = J.classNames;
      var eg = n(66674);
      let eE = "Dialog",
        [eb, ey] = (function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = [],
            r = () => {
              let t = n.map((e) => (0, d.createContext)(e));
              return function (n) {
                let r = (null == n ? void 0 : n[e]) || t;
                return (0, d.useMemo)(
                  () => ({ ["__scope".concat(e)]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = (0, d.createContext)(r),
                  l = n.length;
                function a(t) {
                  let { scope: n, children: r, ...a } = t,
                    u = (null == n ? void 0 : n[e][l]) || o,
                    c = (0, d.useMemo)(() => a, Object.values(a));
                  return (0, d.createElement)(u.Provider, { value: c }, r);
                }
                return (
                  (n = [...n, r]),
                  (a.displayName = t + "Provider"),
                  [
                    a,
                    function (n, a) {
                      let u = (null == a ? void 0 : a[e][l]) || o,
                        c = (0, d.useContext)(u);
                      if (c) return c;
                      if (void 0 !== r) return r;
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
                let r = t[0];
                if (1 === t.length) return r;
                let o = () => {
                  let e = t.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (t) {
                    let n = e.reduce((e, n) => {
                      let { useScope: r, scopeName: o } = n,
                        l = r(t)["__scope".concat(o)];
                      return { ...e, ...l };
                    }, {});
                    return (0, d.useMemo)(
                      () => ({ ["__scope".concat(r.scopeName)]: n }),
                      [n]
                    );
                  };
                };
                return (o.scopeName = r.scopeName), o;
              })(r, ...t),
            ]
          );
        })(eE),
        [ew, eC] = eb(eE),
        eR = "DialogPortal",
        [ek, eS] = eb(eR, { forceMount: void 0 }),
        eP = "DialogOverlay",
        e_ = (0, d.forwardRef)((e, t) => {
          let n = eS(eP, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            l = eC(eP, e.__scopeDialog);
          return l.modal
            ? (0, d.createElement)(
                Y,
                { present: r || l.open },
                (0, d.createElement)(eO, (0, s.Z)({}, o, { ref: t }))
              )
            : null;
        }),
        eO = (0, d.forwardRef)((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eC(eP, n);
          return (0, d.createElement)(
            eh,
            { as: C, allowPinchZoom: !0, shards: [o.contentRef] },
            (0, d.createElement)(
              P.div,
              (0, s.Z)({ "data-state": eI(o.open) }, r, {
                ref: t,
                style: { pointerEvents: "auto", ...r.style },
              })
            )
          );
        }),
        eA = "DialogContent",
        eD = (0, d.forwardRef)((e, t) => {
          let n = eS(eA, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            l = eC(eA, e.__scopeDialog);
          return (0, d.createElement)(
            Y,
            { present: r || l.open },
            l.modal
              ? (0, d.createElement)(eL, (0, s.Z)({}, o, { ref: t }))
              : (0, d.createElement)(eN, (0, s.Z)({}, o, { ref: t }))
          );
        }),
        eL = (0, d.forwardRef)((e, t) => {
          let n = eC(eA, e.__scopeDialog),
            r = (0, d.useRef)(null),
            o = p(t, n.contentRef, r);
          return (
            (0, d.useEffect)(() => {
              let e = r.current;
              if (e) return (0, eg.Ry)(e);
            }, []),
            (0, d.createElement)(
              eM,
              (0, s.Z)({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: v(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: v(e.onPointerDownOutside, (e) => {
                  let t = e.detail.originalEvent,
                    n = 0 === t.button && !0 === t.ctrlKey;
                  (2 === t.button || n) && e.preventDefault();
                }),
                onFocusOutside: v(e.onFocusOutside, (e) => e.preventDefault()),
              })
            )
          );
        }),
        eN = (0, d.forwardRef)((e, t) => {
          let n = eC(eA, e.__scopeDialog),
            r = (0, d.useRef)(!1);
          return (0, d.createElement)(
            eM,
            (0, s.Z)({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              onCloseAutoFocus: (t) => {
                var o, l;
                null === (o = e.onCloseAutoFocus) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented ||
                    (r.current ||
                      null === (l = n.triggerRef.current) ||
                      void 0 === l ||
                      l.focus(),
                    t.preventDefault()),
                  (r.current = !1);
              },
              onInteractOutside: (t) => {
                var o, l;
                null === (o = e.onInteractOutside) ||
                  void 0 === o ||
                  o.call(e, t),
                  t.defaultPrevented || (r.current = !0);
                let a = t.target;
                (null === (l = n.triggerRef.current) || void 0 === l
                  ? void 0
                  : l.contains(a)) && t.preventDefault();
              },
            })
          );
        }),
        eM = (0, d.forwardRef)((e, t) => {
          let {
              __scopeDialog: n,
              trapFocus: r,
              onOpenAutoFocus: o,
              onCloseAutoFocus: l,
              ...a
            } = e,
            u = eC(eA, n),
            c = p(t, (0, d.useRef)(null));
          return (
            (0, d.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : q()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : q()
                ),
                X++,
                () => {
                  1 === X &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    X--;
                }
              );
            }, []),
            (0, d.createElement)(
              d.Fragment,
              null,
              (0, d.createElement)(
                x,
                {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: l,
                },
                (0, d.createElement)(
                  A,
                  (0, s.Z)(
                    {
                      role: "dialog",
                      id: u.contentId,
                      "aria-describedby": u.descriptionId,
                      "aria-labelledby": u.titleId,
                      "data-state": eI(u.open),
                    },
                    a,
                    { ref: c, onDismiss: () => u.onOpenChange(!1) }
                  )
                )
              ),
              !1
            )
          );
        });
      function eI(e) {
        return e ? "open" : "closed";
      }
      let [ex, eF] = (function (e, t) {
          let n = (0, d.createContext)(t);
          function r(e) {
            let { children: t, ...r } = e,
              o = (0, d.useMemo)(() => r, Object.values(r));
            return (0, d.createElement)(n.Provider, { value: o }, t);
          }
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                let o = (0, d.useContext)(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(
                  "`".concat(r, "` must be used within `").concat(e, "`")
                );
              },
            ]
          );
        })("DialogTitleWarning", {
          contentName: eA,
          titleName: "DialogTitle",
          docsSlug: "dialog",
        }),
        eT = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: l,
              modal: a = !0,
            } = e,
            u = (0, d.useRef)(null),
            c = (0, d.useRef)(null),
            [i = !1, s] = (function (e) {
              let { prop: t, defaultProp: n, onChange: r = () => {} } = e,
                [o, l] = (function (e) {
                  let { defaultProp: t, onChange: n } = e,
                    r = (0, d.useState)(t),
                    [o] = r,
                    l = (0, d.useRef)(o),
                    a = y(n);
                  return (
                    (0, d.useEffect)(() => {
                      l.current !== o && (a(o), (l.current = o));
                    }, [o, l, a]),
                    r
                  );
                })({ defaultProp: n, onChange: r }),
                a = void 0 !== t,
                u = a ? t : o,
                c = y(r);
              return [
                u,
                (0, d.useCallback)(
                  (e) => {
                    if (a) {
                      let n = "function" == typeof e ? e(t) : e;
                      n !== t && c(n);
                    } else l(e);
                  },
                  [a, t, l, c]
                ),
              ];
            })({ prop: r, defaultProp: o, onChange: l });
          return (0, d.createElement)(
            ew,
            {
              scope: t,
              triggerRef: u,
              contentRef: c,
              contentId: b(),
              titleId: b(),
              descriptionId: b(),
              open: i,
              onOpenChange: s,
              onOpenToggle: (0, d.useCallback)(() => s((e) => !e), [s]),
              modal: a,
            },
            n
          );
        },
        eZ = (e) => {
          let {
              __scopeDialog: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            l = eC(eR, t);
          return (0, d.createElement)(
            ek,
            { scope: t, forceMount: n },
            d.Children.map(r, (e) =>
              (0, d.createElement)(
                Y,
                { present: n || l.open },
                (0, d.createElement)(K, { asChild: !0, container: o }, e)
              )
            )
          );
        };
      var eW = '[cmdk-group=""]',
        eB = '[cmdk-group-items=""]',
        eK = '[cmdk-item=""]',
        eY = "".concat(eK, ':not([aria-disabled="true"])'),
        eU = "cmdk-item-select",
        eX = "data-value",
        eq = (e, t) =>
          (function e(t, n, r, o, i, s, d) {
            if (s === n.length) return i === t.length ? 1 : 0.99;
            var f = "".concat(i, ",").concat(s);
            if (void 0 !== d[f]) return d[f];
            for (
              var v, m, p, h, g = o.charAt(s), E = r.indexOf(g, i), b = 0;
              E >= 0;

            )
              (v = e(t, n, r, o, E + 1, s + 1, d)) > b &&
                (E === i
                  ? (v *= 1)
                  : l.test(t.charAt(E - 1))
                  ? ((v *= 0.8),
                    (p = t.slice(i, E - 1).match(a)) &&
                      i > 0 &&
                      (v *= Math.pow(0.999, p.length)))
                  : u.test(t.charAt(E - 1))
                  ? ((v *= 0.9),
                    (h = t.slice(i, E - 1).match(c)) &&
                      i > 0 &&
                      (v *= Math.pow(0.999, h.length)))
                  : ((v *= 0.17), i > 0 && (v *= Math.pow(0.999, E - i))),
                t.charAt(E) !== n.charAt(s) && (v *= 0.9999)),
                ((v < 0.1 && r.charAt(E - 1) === o.charAt(s + 1)) ||
                  (o.charAt(s + 1) === o.charAt(s) &&
                    r.charAt(E - 1) !== o.charAt(s))) &&
                  0.1 * (m = e(t, n, r, o, E + 1, s + 2, d)) > v &&
                  (v = 0.1 * m),
                v > b && (b = v),
                (E = r.indexOf(g, E + 1));
            return (d[f] = b), b;
          })(e, t, i(e), i(t), 0, 0, {}),
        ez = d.createContext(void 0),
        ej = () => d.useContext(ez),
        eV = d.createContext(void 0),
        eH = () => d.useContext(eV),
        eG = d.createContext(void 0),
        eJ = d.forwardRef((e, t) => {
          let n = d.useRef(null),
            r = e8(() => {
              var t, n, r;
              return {
                search: "",
                value:
                  null !=
                  (r =
                    null != (n = e.value)
                      ? n
                      : null == (t = e.defaultValue)
                      ? void 0
                      : t.toLowerCase())
                    ? r
                    : "",
                filtered: { count: 0, items: new Map(), groups: new Set() },
              };
            }),
            o = e8(() => new Set()),
            l = e8(() => new Map()),
            a = e8(() => new Map()),
            u = e8(() => new Set()),
            c = e7(e),
            {
              label: i,
              children: s,
              value: f,
              onValueChange: v,
              filter: m,
              shouldFilter: p,
              vimBindings: h = !0,
              ...g
            } = e,
            E = d.useId(),
            b = d.useId(),
            y = d.useId(),
            w = tt();
          e6(() => {
            if (void 0 !== f) {
              let e = f.trim().toLowerCase();
              (r.current.value = e), w(6, O), C.emit();
            }
          }, [f]);
          let C = d.useMemo(
              () => ({
                subscribe: (e) => (u.current.add(e), () => u.current.delete(e)),
                snapshot: () => r.current,
                setState: (e, t, n) => {
                  var o, l, a;
                  if (!Object.is(r.current[e], t)) {
                    if (((r.current[e] = t), "search" === e)) _(), S(), w(1, P);
                    else if ("value" === e) {
                      if (
                        (null == (o = c.current) ? void 0 : o.value) !== void 0
                      ) {
                        null == (a = (l = c.current).onValueChange) ||
                          a.call(l, null != t ? t : "");
                        return;
                      }
                      n || w(5, O);
                    }
                    C.emit();
                  }
                },
                emit: () => {
                  u.current.forEach((e) => e());
                },
              }),
              []
            ),
            R = d.useMemo(
              () => ({
                value: (e, t) => {
                  t !== a.current.get(e) &&
                    (a.current.set(e, t),
                    r.current.filtered.items.set(e, k(t)),
                    w(2, () => {
                      S(), C.emit();
                    }));
                },
                item: (e, t) => (
                  o.current.add(e),
                  t &&
                    (l.current.has(t)
                      ? l.current.get(t).add(e)
                      : l.current.set(t, new Set([e]))),
                  w(3, () => {
                    _(), S(), r.current.value || P(), C.emit();
                  }),
                  () => {
                    a.current.delete(e),
                      o.current.delete(e),
                      r.current.filtered.items.delete(e);
                    let t = A();
                    w(4, () => {
                      _(),
                        (null == t ? void 0 : t.getAttribute("id")) === e &&
                          P(),
                        C.emit();
                    });
                  }
                ),
                group: (e) => (
                  l.current.has(e) || l.current.set(e, new Set()),
                  () => {
                    a.current.delete(e), l.current.delete(e);
                  }
                ),
                filter: () => c.current.shouldFilter,
                label: i || e["aria-label"],
                commandRef: n,
                listId: E,
                inputId: y,
                labelId: b,
              }),
              []
            );
          function k(e) {
            var t, n;
            let o =
              null != (n = null == (t = c.current) ? void 0 : t.filter)
                ? n
                : eq;
            return e ? o(e, r.current.search) : 0;
          }
          function S() {
            if (
              !n.current ||
              !r.current.search ||
              !1 === c.current.shouldFilter
            )
              return;
            let e = r.current.filtered.items,
              t = [];
            r.current.filtered.groups.forEach((n) => {
              let r = l.current.get(n),
                o = 0;
              r.forEach((t) => {
                o = Math.max(e.get(t), o);
              }),
                t.push([n, o]);
            });
            let o = n.current.querySelector('[cmdk-list-sizer=""]');
            D()
              .sort((t, n) => {
                var r, o;
                let l = t.getAttribute(eX),
                  a = n.getAttribute(eX);
                return (
                  (null != (r = e.get(a)) ? r : 0) -
                  (null != (o = e.get(l)) ? o : 0)
                );
              })
              .forEach((e) => {
                let t = e.closest(eB);
                t
                  ? t.appendChild(
                      e.parentElement === t
                        ? e
                        : e.closest("".concat(eB, " > *"))
                    )
                  : o.appendChild(
                      e.parentElement === o
                        ? e
                        : e.closest("".concat(eB, " > *"))
                    );
              }),
              t
                .sort((e, t) => t[1] - e[1])
                .forEach((e) => {
                  let t = n.current.querySelector(
                    "".concat(eW, "[").concat(eX, '="').concat(e[0], '"]')
                  );
                  null == t || t.parentElement.appendChild(t);
                });
          }
          function P() {
            let e = D().find((e) => !e.ariaDisabled),
              t = null == e ? void 0 : e.getAttribute(eX);
            C.setState("value", t || void 0);
          }
          function _() {
            if (!r.current.search || !1 === c.current.shouldFilter) {
              r.current.filtered.count = o.current.size;
              return;
            }
            r.current.filtered.groups = new Set();
            let e = 0;
            for (let t of o.current) {
              let n = k(a.current.get(t));
              r.current.filtered.items.set(t, n), n > 0 && e++;
            }
            for (let [e, t] of l.current)
              for (let n of t)
                if (r.current.filtered.items.get(n) > 0) {
                  r.current.filtered.groups.add(e);
                  break;
                }
            r.current.filtered.count = e;
          }
          function O() {
            var e, t, n;
            let r = A();
            r &&
              ((null == (e = r.parentElement) ? void 0 : e.firstChild) === r &&
                (null ==
                  (n =
                    null == (t = r.closest(eW))
                      ? void 0
                      : t.querySelector('[cmdk-group-heading=""]')) ||
                  n.scrollIntoView({ block: "nearest" })),
              r.scrollIntoView({ block: "nearest" }));
          }
          function A() {
            var e;
            return null == (e = n.current)
              ? void 0
              : e.querySelector("".concat(eK, '[aria-selected="true"]'));
          }
          function D() {
            return Array.from(n.current.querySelectorAll(eY));
          }
          function L(e) {
            let t = D()[e];
            t && C.setState("value", t.getAttribute(eX));
          }
          function N(e) {
            var t;
            let n = A(),
              r = D(),
              o = r.findIndex((e) => e === n),
              l = r[o + e];
            null != (t = c.current) &&
              t.loop &&
              (l =
                o + e < 0
                  ? r[r.length - 1]
                  : o + e === r.length
                  ? r[0]
                  : r[o + e]),
              l && C.setState("value", l.getAttribute(eX));
          }
          function M(e) {
            let t = A(),
              n = null == t ? void 0 : t.closest(eW),
              r;
            for (; n && !r; )
              r =
                null ==
                (n =
                  e > 0
                    ? (function (e, t) {
                        let n = e.nextElementSibling;
                        for (; n; ) {
                          if (n.matches(t)) return n;
                          n = n.nextElementSibling;
                        }
                      })(n, eW)
                    : (function (e, t) {
                        let n = e.previousElementSibling;
                        for (; n; ) {
                          if (n.matches(t)) return n;
                          n = n.previousElementSibling;
                        }
                      })(n, eW))
                  ? void 0
                  : n.querySelector(eY);
            r ? C.setState("value", r.getAttribute(eX)) : N(e);
          }
          let I = () => L(D().length - 1),
            x = (e) => {
              e.preventDefault(), e.metaKey ? I() : e.altKey ? M(1) : N(1);
            },
            F = (e) => {
              e.preventDefault(), e.metaKey ? L(0) : e.altKey ? M(-1) : N(-1);
            };
          return d.createElement(
            "div",
            {
              ref: e3([n, t]),
              ...g,
              "cmdk-root": "",
              onKeyDown: (e) => {
                var t;
                if (
                  (null == (t = g.onKeyDown) || t.call(g, e),
                  !e.defaultPrevented)
                )
                  switch (e.key) {
                    case "n":
                    case "j":
                      h && e.ctrlKey && x(e);
                      break;
                    case "ArrowDown":
                      x(e);
                      break;
                    case "p":
                    case "k":
                      h && e.ctrlKey && F(e);
                      break;
                    case "ArrowUp":
                      F(e);
                      break;
                    case "Home":
                      e.preventDefault(), L(0);
                      break;
                    case "End":
                      e.preventDefault(), I();
                      break;
                    case "Enter":
                      if (!e.nativeEvent.isComposing) {
                        e.preventDefault();
                        let t = A();
                        if (t) {
                          let e = new Event(eU);
                          t.dispatchEvent(e);
                        }
                      }
                  }
              },
            },
            d.createElement(
              "label",
              {
                "cmdk-label": "",
                htmlFor: R.inputId,
                id: R.labelId,
                style: tn,
              },
              i
            ),
            d.createElement(
              eV.Provider,
              { value: C },
              d.createElement(ez.Provider, { value: R }, s)
            )
          );
        }),
        eQ = d.forwardRef((e, t) => {
          var n, r;
          let o = d.useId(),
            l = d.useRef(null),
            a = d.useContext(eG),
            u = ej(),
            c = e7(e),
            i =
              null != (r = null == (n = c.current) ? void 0 : n.forceMount)
                ? r
                : null == a
                ? void 0
                : a.forceMount;
          e6(() => u.item(o, null == a ? void 0 : a.id), []);
          let s = te(o, l, [e.value, e.children, l]),
            f = eH(),
            v = e5((e) => e.value && e.value === s.current),
            m = e5(
              (e) =>
                !!i ||
                !1 === u.filter() ||
                !e.search ||
                e.filtered.items.get(o) > 0
            );
          function p() {
            var e, t;
            h(), null == (t = (e = c.current).onSelect) || t.call(e, s.current);
          }
          function h() {
            f.setState("value", s.current, !0);
          }
          if (
            (d.useEffect(() => {
              let t = l.current;
              if (!(!t || e.disabled))
                return (
                  t.addEventListener(eU, p), () => t.removeEventListener(eU, p)
                );
            }, [m, e.onSelect, e.disabled]),
            !m)
          )
            return null;
          let { disabled: g, value: E, onSelect: b, forceMount: y, ...w } = e;
          return d.createElement(
            "div",
            {
              ref: e3([l, t]),
              ...w,
              id: o,
              "cmdk-item": "",
              role: "option",
              "aria-disabled": g || void 0,
              "aria-selected": v || void 0,
              "data-disabled": g || void 0,
              "data-selected": v || void 0,
              onPointerMove: g ? void 0 : h,
              onClick: g ? void 0 : p,
            },
            e.children
          );
        }),
        e$ = d.forwardRef((e, t) => {
          let { heading: n, children: r, forceMount: o, ...l } = e,
            a = d.useId(),
            u = d.useRef(null),
            c = d.useRef(null),
            i = d.useId(),
            s = ej(),
            f = e5(
              (e) =>
                !!o ||
                !1 === s.filter() ||
                !e.search ||
                e.filtered.groups.has(a)
            );
          e6(() => s.group(a), []), te(a, u, [e.value, e.heading, c]);
          let v = d.useMemo(() => ({ id: a, forceMount: o }), [o]),
            m = d.createElement(eG.Provider, { value: v }, r);
          return d.createElement(
            "div",
            {
              ref: e3([u, t]),
              ...l,
              "cmdk-group": "",
              role: "presentation",
              hidden: !f || void 0,
            },
            n &&
              d.createElement(
                "div",
                { ref: c, "cmdk-group-heading": "", "aria-hidden": !0, id: i },
                n
              ),
            d.createElement(
              "div",
              {
                "cmdk-group-items": "",
                role: "group",
                "aria-labelledby": n ? i : void 0,
              },
              m
            )
          );
        }),
        e0 = d.forwardRef((e, t) => {
          let { alwaysRender: n, ...r } = e,
            o = d.useRef(null),
            l = e5((e) => !e.search);
          return n || l
            ? d.createElement("div", {
                ref: e3([o, t]),
                ...r,
                "cmdk-separator": "",
                role: "separator",
              })
            : null;
        }),
        e1 = d.forwardRef((e, t) => {
          let { onValueChange: n, ...r } = e,
            o = null != e.value,
            l = eH(),
            a = e5((e) => e.search),
            u = e5((e) => e.value),
            c = ej(),
            i = d.useMemo(() => {
              var e;
              let t =
                null == (e = c.commandRef.current)
                  ? void 0
                  : e.querySelector(
                      "".concat(eK, "[").concat(eX, '="').concat(u, '"]')
                    );
              return null == t ? void 0 : t.getAttribute("id");
            }, [u, c.commandRef]);
          return (
            d.useEffect(() => {
              null != e.value && l.setState("search", e.value);
            }, [e.value]),
            d.createElement("input", {
              ref: t,
              ...r,
              "cmdk-input": "",
              autoComplete: "off",
              autoCorrect: "off",
              spellCheck: !1,
              "aria-autocomplete": "list",
              role: "combobox",
              "aria-expanded": !0,
              "aria-controls": c.listId,
              "aria-labelledby": c.labelId,
              "aria-activedescendant": i,
              id: c.inputId,
              type: "text",
              value: o ? e.value : a,
              onChange: (e) => {
                o || l.setState("search", e.target.value),
                  null == n || n(e.target.value);
              },
            })
          );
        }),
        e2 = d.forwardRef((e, t) => {
          let { children: n, ...r } = e,
            o = d.useRef(null),
            l = d.useRef(null),
            a = ej();
          return (
            d.useEffect(() => {
              if (l.current && o.current) {
                let e = l.current,
                  t = o.current,
                  n,
                  r = new ResizeObserver(() => {
                    n = requestAnimationFrame(() => {
                      let n = e.offsetHeight;
                      t.style.setProperty(
                        "--cmdk-list-height",
                        n.toFixed(1) + "px"
                      );
                    });
                  });
                return (
                  r.observe(e),
                  () => {
                    cancelAnimationFrame(n), r.unobserve(e);
                  }
                );
              }
            }, []),
            d.createElement(
              "div",
              {
                ref: e3([o, t]),
                ...r,
                "cmdk-list": "",
                role: "listbox",
                "aria-label": "Suggestions",
                id: a.listId,
                "aria-labelledby": a.inputId,
              },
              d.createElement("div", { ref: l, "cmdk-list-sizer": "" }, n)
            )
          );
        }),
        e4 = d.forwardRef((e, t) => {
          let {
            open: n,
            onOpenChange: r,
            overlayClassName: o,
            contentClassName: l,
            container: a,
            ...u
          } = e;
          return d.createElement(
            eT,
            { open: n, onOpenChange: r },
            d.createElement(
              eZ,
              { container: a },
              d.createElement(e_, { "cmdk-overlay": "", className: o }),
              d.createElement(
                eD,
                { "aria-label": e.label, "cmdk-dialog": "", className: l },
                d.createElement(eJ, { ref: t, ...u })
              )
            )
          );
        }),
        e9 = Object.assign(eJ, {
          List: e2,
          Item: eQ,
          Input: e1,
          Group: e$,
          Separator: e0,
          Dialog: e4,
          Empty: d.forwardRef((e, t) => {
            let n = d.useRef(!0),
              r = e5((e) => 0 === e.filtered.count);
            return (
              d.useEffect(() => {
                n.current = !1;
              }, []),
              n.current || !r
                ? null
                : d.createElement("div", {
                    ref: t,
                    ...e,
                    "cmdk-empty": "",
                    role: "presentation",
                  })
            );
          }),
          Loading: d.forwardRef((e, t) => {
            let { progress: n, children: r, ...o } = e;
            return d.createElement(
              "div",
              {
                ref: t,
                ...o,
                "cmdk-loading": "",
                role: "progressbar",
                "aria-valuenow": n,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-label": "Loading...",
              },
              d.createElement("div", { "aria-hidden": !0 }, r)
            );
          }),
        });
      function e7(e) {
        let t = d.useRef(e);
        return (
          e6(() => {
            t.current = e;
          }),
          t
        );
      }
      var e6 = d.useLayoutEffect;
      function e8(e) {
        let t = d.useRef();
        return void 0 === t.current && (t.current = e()), t;
      }
      function e3(e) {
        return (t) => {
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      }
      function e5(e) {
        let t = eH(),
          n = () => e(t.snapshot());
        return d.useSyncExternalStore(t.subscribe, n, n);
      }
      function te(e, t, n) {
        let r = d.useRef(),
          o = ej();
        return (
          e6(() => {
            var l;
            let a = (() => {
              var e;
              for (let t of n) {
                if ("string" == typeof t) return t.trim().toLowerCase();
                if ("object" == typeof t && "current" in t)
                  return t.current
                    ? null == (e = t.current.textContent)
                      ? void 0
                      : e.trim().toLowerCase()
                    : r.current;
              }
            })();
            o.value(e, a),
              null == (l = t.current) || l.setAttribute(eX, a),
              (r.current = a);
          }),
          r
        );
      }
      var tt = () => {
          let [e, t] = d.useState(),
            n = e8(() => new Map());
          return (
            e6(() => {
              n.current.forEach((e) => e()), (n.current = new Map());
            }, [e]),
            (e, r) => {
              n.current.set(e, r), t({});
            }
          );
        },
        tn = {
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: "0",
        };
    },
  },
]);
