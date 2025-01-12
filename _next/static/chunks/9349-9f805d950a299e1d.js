"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9349],
  {
    23441: function (e, t, n) {
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
       */ let r = (0, n(87461).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    85159: function (e, t, n) {
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
       */ let r = (0, n(87461).Z)("ChevronUp", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
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
          return i;
        },
      });
      var r = n(64090),
        o = n(84104),
        l = n(61266),
        a = n(59143);
      function i(e) {
        let t = e + "CollectionProvider",
          [n, i] = (0, o.b)(t),
          [c, u] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          s = e + "CollectionSlot",
          d = r.forwardRef((e, t) => {
            let { scope: n, children: o } = e,
              i = u(s, n),
              c = (0, l.e)(t, i.collectionRef);
            return r.createElement(a.g7, { ref: c }, o);
          }),
          f = e + "CollectionItemSlot",
          p = "data-radix-collection-item";
        return [
          {
            Provider: (e) => {
              let { scope: t, children: n } = e,
                o = r.useRef(null),
                l = r.useRef(new Map()).current;
              return r.createElement(
                c,
                { scope: t, itemMap: l, collectionRef: o },
                n
              );
            },
            Slot: d,
            ItemSlot: r.forwardRef((e, t) => {
              let { scope: n, children: o, ...i } = e,
                c = r.useRef(null),
                s = (0, l.e)(t, c),
                d = u(f, n);
              return (
                r.useEffect(
                  () => (
                    d.itemMap.set(c, { ref: c, ...i }),
                    () => void d.itemMap.delete(c)
                  )
                ),
                r.createElement(a.g7, { [p]: "", ref: s }, o)
              );
            }),
          },
          function (t) {
            let n = u(e + "CollectionConsumer", t);
            return r.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll("[".concat(p, "]")));
              return Array.from(n.itemMap.values()).sort(
                (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          i,
        ];
      }
    },
    12275: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return l;
        },
      });
      var r = n(64090);
      let o = (0, r.createContext)(void 0);
      function l(e) {
        let t = (0, r.useContext)(o);
        return e || t || "ltr";
      }
    },
    40370: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return ej;
        },
        ZA: function () {
          return eJ;
        },
        JO: function () {
          return eX;
        },
        ck: function () {
          return eQ;
        },
        wU: function () {
          return e1;
        },
        eT: function () {
          return e0;
        },
        __: function () {
          return e$;
        },
        h_: function () {
          return eq;
        },
        fC: function () {
          return ez;
        },
        $G: function () {
          return e2;
        },
        u_: function () {
          return e6;
        },
        Z0: function () {
          return e4;
        },
        xz: function () {
          return eY;
        },
        B4: function () {
          return eU;
        },
        l_: function () {
          return eG;
        },
      });
      var r = n(14749),
        o = n(64090),
        l = n(89542),
        a = n(22219),
        i = n(44991),
        c = n(27533),
        u = n(61266),
        s = n(84104),
        d = n(12275),
        f = n(1260),
        p = n(46165),
        v = n(78082),
        m = n(38687),
        h = n(12338),
        g = n(37881),
        w = n(29586),
        b = n(59143),
        y = n(39830),
        E = n(9310),
        S = n(32618),
        C = n(65030),
        x = n(11780),
        _ = n(66674),
        R = n(69703),
        k = n(84814),
        M = n(42022),
        T = (0, n(52804)._)(),
        P = function () {},
        I = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: P,
              onWheelCapture: P,
              onTouchMoveCapture: P,
            }),
            l = r[0],
            a = r[1],
            i = e.forwardProps,
            c = e.children,
            u = e.className,
            s = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            w = (0, R.__rest)(e, [
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
            b = (0, M.q)([n, t]),
            y = (0, R.__assign)((0, R.__assign)({}, w), l);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: T,
                removeScrollBar: s,
                shards: f,
                noIsolation: v,
                inert: m,
                setCallbacks: a,
                allowPinchZoom: !!h,
                lockRef: n,
              }),
            i
              ? o.cloneElement(
                  o.Children.only(c),
                  (0, R.__assign)((0, R.__assign)({}, y), { ref: b })
                )
              : o.createElement(
                  void 0 === g ? "div" : g,
                  (0, R.__assign)({}, y, { className: u, ref: b }),
                  c
                )
          );
        });
      (I.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (I.classNames = { fullWidth: k.zi, zeroRight: k.pF });
      var D = n(29074),
        L = n(58387),
        V = n(68109),
        W = !1;
      try {
        var Z = Object.defineProperty({}, "passive", {
          get: function () {
            return (W = !0), !0;
          },
        });
        window.addEventListener("test", Z, Z),
          window.removeEventListener("test", Z, Z);
      } catch (e) {
        W = !1;
      }
      var N = !!W && { passive: !1 },
        B = function (e, t) {
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
        O = function (e, t) {
          var n = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              A(e, n))
            ) {
              var r = H(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        A = function (e, t) {
          return "v" === e ? B(t, "overflowY") : B(t, "overflowX");
        },
        H = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        F = function (e, t, n, r, o) {
          var l,
            a =
              ((l = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === l ? -1 : 1),
            i = a * r,
            c = n.target,
            u = t.contains(c),
            s = !1,
            d = i > 0,
            f = 0,
            p = 0;
          do {
            var v = H(e, c),
              m = v[0],
              h = v[1] - v[2] - a * m;
            (m || h) && A(e, c) && ((f += h), (p += m)), (c = c.parentNode);
          } while (
            (!u && c !== document.body) ||
            (u && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 0 === f) || (!o && i > f))
              ? (s = !0)
              : !d && ((o && 0 === p) || (!o && -i > p)) && (s = !0),
            s
          );
        },
        K = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        z = function (e) {
          return [e.deltaX, e.deltaY];
        },
        Y = function (e) {
          return e && "current" in e ? e.current : e;
        },
        U = 0,
        X = [],
        q = (0, D.L)(T, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            l = o.useState(U++)[0],
            a = o.useState(function () {
              return (0, V.Ws)();
            })[0],
            i = o.useRef(e);
          o.useEffect(
            function () {
              i.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(l));
                  var t = (0, R.__spreadArray)(
                    [e.lockRef.current],
                    (e.shards || []).map(Y),
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
                return !i.current.allowPinchZoom;
              var o,
                l = K(e),
                a = n.current,
                c = "deltaX" in e ? e.deltaX : a[0] - l[0],
                u = "deltaY" in e ? e.deltaY : a[1] - l[1],
                s = e.target,
                d = Math.abs(c) > Math.abs(u) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = O(d, s);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = O(d, s))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (c || u) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return F(p, t, e, "h" === p ? c : u, !0);
            }, []),
            u = o.useCallback(function (e) {
              if (X.length && X[X.length - 1] === a) {
                var n = "deltaY" in e ? z(e) : K(e),
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
                  var o = (i.current.shards || [])
                    .map(Y)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? c(e, o[0]) : !i.current.noIsolation) &&
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
              (n.current = K(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              s(t.type, z(t), t.target, c(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              s(t.type, K(t), t.target, c(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              X.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", u, N),
              document.addEventListener("touchmove", u, N),
              document.addEventListener("touchstart", d, N),
              function () {
                (X = X.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", u, N),
                  document.removeEventListener("touchmove", u, N),
                  document.removeEventListener("touchstart", d, N);
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            m
              ? o.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      l,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(l, " {pointer-events: all;}\n"),
                })
              : null,
            v ? o.createElement(L.jp, { gapMode: "margin" }) : null
          );
        }),
        j = o.forwardRef(function (e, t) {
          return o.createElement(
            I,
            (0, R.__assign)({}, e, { ref: t, sideCar: q })
          );
        });
      j.classNames = I.classNames;
      let G = [" ", "Enter", "ArrowUp", "ArrowDown"],
        J = [" ", "Enter"],
        $ = "Select",
        [Q, ee, et] = (0, c.B)($),
        [en, er] = (0, s.b)($, [et, h.D7]),
        eo = (0, h.D7)(),
        [el, ea] = en($),
        [ei, ec] = en($),
        eu = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, disabled: l = !1, ...a } = e,
            c = eo(n),
            s = ea("SelectTrigger", n),
            d = s.disabled || l,
            f = (0, u.e)(t, s.onTriggerChange),
            p = ee(n),
            [v, m, g] = eF((e) => {
              let t = p().filter((e) => !e.disabled),
                n = t.find((e) => e.value === s.value),
                r = eK(t, e, n);
              void 0 !== r && s.onValueChange(r.value);
            }),
            b = () => {
              d || (s.onOpenChange(!0), g());
            };
          return (0, o.createElement)(
            h.ee,
            (0, r.Z)({ asChild: !0 }, c),
            (0, o.createElement)(
              w.WV.button,
              (0, r.Z)(
                {
                  type: "button",
                  role: "combobox",
                  "aria-controls": s.contentId,
                  "aria-expanded": s.open,
                  "aria-required": s.required,
                  "aria-autocomplete": "none",
                  dir: s.dir,
                  "data-state": s.open ? "open" : "closed",
                  disabled: d,
                  "data-disabled": d ? "" : void 0,
                  "data-placeholder": eA(s.value) ? "" : void 0,
                },
                a,
                {
                  ref: f,
                  onClick: (0, i.M)(a.onClick, (e) => {
                    e.currentTarget.focus();
                  }),
                  onPointerDown: (0, i.M)(a.onPointerDown, (e) => {
                    let t = e.target;
                    t.hasPointerCapture(e.pointerId) &&
                      t.releasePointerCapture(e.pointerId),
                      0 === e.button &&
                        !1 === e.ctrlKey &&
                        (b(),
                        (s.triggerPointerDownPosRef.current = {
                          x: Math.round(e.pageX),
                          y: Math.round(e.pageY),
                        }),
                        e.preventDefault());
                  }),
                  onKeyDown: (0, i.M)(a.onKeyDown, (e) => {
                    let t = "" !== v.current;
                    e.ctrlKey ||
                      e.altKey ||
                      e.metaKey ||
                      1 !== e.key.length ||
                      m(e.key),
                      (!t || " " !== e.key) &&
                        G.includes(e.key) &&
                        (b(), e.preventDefault());
                  }),
                }
              )
            )
          );
        }),
        es = (0, o.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              className: l,
              style: a,
              children: i,
              placeholder: c = "",
              ...s
            } = e,
            d = ea("SelectValue", n),
            { onValueNodeHasChildrenChange: f } = d,
            p = void 0 !== i,
            v = (0, u.e)(t, d.onValueNodeChange);
          return (
            (0, S.b)(() => {
              f(p);
            }, [f, p]),
            (0, o.createElement)(
              w.WV.span,
              (0, r.Z)({}, s, { ref: v, style: { pointerEvents: "none" } }),
              eA(d.value) ? (0, o.createElement)(o.Fragment, null, c) : i
            )
          );
        }),
        ed = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, children: l, ...a } = e;
          return (0, o.createElement)(
            w.WV.span,
            (0, r.Z)({ "aria-hidden": !0 }, a, { ref: t }),
            l || "▼"
          );
        }),
        ef = "SelectContent",
        ep = (0, o.forwardRef)((e, t) => {
          let n = ea(ef, e.__scopeSelect),
            [a, i] = (0, o.useState)();
          return ((0, S.b)(() => {
            i(new DocumentFragment());
          }, []),
          n.open)
            ? (0, o.createElement)(eh, (0, r.Z)({}, e, { ref: t }))
            : a
            ? (0, l.createPortal)(
                (0, o.createElement)(
                  ev,
                  { scope: e.__scopeSelect },
                  (0, o.createElement)(
                    Q.Slot,
                    { scope: e.__scopeSelect },
                    (0, o.createElement)("div", null, e.children)
                  )
                ),
                a
              )
            : null;
        }),
        [ev, em] = en(ef),
        eh = (0, o.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              position: l = "item-aligned",
              onCloseAutoFocus: a,
              onEscapeKeyDown: c,
              onPointerDownOutside: s,
              side: d,
              sideOffset: m,
              align: h,
              alignOffset: g,
              arrowPadding: w,
              collisionBoundary: y,
              collisionPadding: E,
              sticky: S,
              hideWhenDetached: C,
              avoidCollisions: x,
              ...R
            } = e,
            k = ea(ef, n),
            [M, T] = (0, o.useState)(null),
            [P, I] = (0, o.useState)(null),
            D = (0, u.e)(t, (e) => T(e)),
            [L, V] = (0, o.useState)(null),
            [W, Z] = (0, o.useState)(null),
            N = ee(n),
            [B, O] = (0, o.useState)(!1),
            A = (0, o.useRef)(!1);
          (0, o.useEffect)(() => {
            if (M) return (0, _.Ry)(M);
          }, [M]),
            (0, p.EW)();
          let H = (0, o.useCallback)(
              (e) => {
                let [t, ...n] = N().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && P && (P.scrollTop = 0),
                    n === r && P && (P.scrollTop = P.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [N, P]
            ),
            F = (0, o.useCallback)(() => H([L, M]), [H, L, M]);
          (0, o.useEffect)(() => {
            B && F();
          }, [B, F]);
          let { onOpenChange: K, triggerPointerDownPosRef: z } = k;
          (0, o.useEffect)(() => {
            if (M) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (n =
                            null === (r = z.current) || void 0 === r
                              ? void 0
                              : r.x) && void 0 !== n
                          ? n
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (o =
                            null === (l = z.current) || void 0 === l
                              ? void 0
                              : l.y) && void 0 !== o
                          ? o
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : M.contains(n.target) || K(!1),
                    document.removeEventListener("pointermove", t),
                    (z.current = null);
                };
              return (
                null !== z.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [M, K, z]),
            (0, o.useEffect)(() => {
              let e = () => K(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [K]);
          let [Y, U] = eF((e) => {
              let t = N().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = eK(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            X = (0, o.useCallback)(
              (e, t, n) => {
                let r = !A.current && !n;
                ((void 0 !== k.value && k.value === t) || r) &&
                  (V(e), r && (A.current = !0));
              },
              [k.value]
            ),
            q = (0, o.useCallback)(() => (null == M ? void 0 : M.focus()), [M]),
            G = (0, o.useCallback)(
              (e, t, n) => {
                let r = !A.current && !n;
                ((void 0 !== k.value && k.value === t) || r) && Z(e);
              },
              [k.value]
            ),
            J = "popper" === l ? ew : eg;
          return (0, o.createElement)(
            ev,
            {
              scope: n,
              content: M,
              viewport: P,
              onViewportChange: I,
              itemRefCallback: X,
              selectedItem: L,
              onItemLeave: q,
              itemTextRefCallback: G,
              focusSelectedItem: F,
              selectedItemText: W,
              position: l,
              isPositioned: B,
              searchRef: Y,
            },
            (0, o.createElement)(
              j,
              { as: b.g7, allowPinchZoom: !0 },
              (0, o.createElement)(
                v.M,
                {
                  asChild: !0,
                  trapped: k.open,
                  onMountAutoFocus: (e) => {
                    e.preventDefault();
                  },
                  onUnmountAutoFocus: (0, i.M)(a, (e) => {
                    var t;
                    null === (t = k.trigger) ||
                      void 0 === t ||
                      t.focus({ preventScroll: !0 }),
                      e.preventDefault();
                  }),
                },
                (0, o.createElement)(
                  f.XB,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: !0,
                    onEscapeKeyDown: c,
                    onPointerDownOutside: s,
                    onFocusOutside: (e) => e.preventDefault(),
                    onDismiss: () => k.onOpenChange(!1),
                  },
                  (0, o.createElement)(
                    J,
                    (0, r.Z)(
                      {
                        role: "listbox",
                        id: k.contentId,
                        "data-state": k.open ? "open" : "closed",
                        dir: k.dir,
                        onContextMenu: (e) => e.preventDefault(),
                      },
                      R,
                      J === ew
                        ? {
                            side: d,
                            sideOffset: m,
                            align: h,
                            alignOffset: g,
                            arrowPadding: w,
                            collisionBoundary: y,
                            collisionPadding: E,
                            sticky: S,
                            hideWhenDetached: C,
                            avoidCollisions: x,
                          }
                        : {},
                      {
                        onPlaced: () => O(!0),
                        ref: D,
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          outline: "none",
                          ...R.style,
                        },
                        onKeyDown: (0, i.M)(R.onKeyDown, (e) => {
                          let t = e.ctrlKey || e.altKey || e.metaKey;
                          if (
                            ("Tab" === e.key && e.preventDefault(),
                            t || 1 !== e.key.length || U(e.key),
                            ["ArrowUp", "ArrowDown", "Home", "End"].includes(
                              e.key
                            ))
                          ) {
                            let t = N()
                              .filter((e) => !e.disabled)
                              .map((e) => e.ref.current);
                            if (
                              (["ArrowUp", "End"].includes(e.key) &&
                                (t = t.slice().reverse()),
                              ["ArrowUp", "ArrowDown"].includes(e.key))
                            ) {
                              let n = e.target,
                                r = t.indexOf(n);
                              t = t.slice(r + 1);
                            }
                            setTimeout(() => H(t)), e.preventDefault();
                          }
                        }),
                      }
                    )
                  )
                )
              )
            )
          );
        }),
        eg = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, onPlaced: l, ...i } = e,
            c = ea(ef, n),
            s = em(ef, n),
            [d, f] = (0, o.useState)(null),
            [p, v] = (0, o.useState)(null),
            m = (0, u.e)(t, (e) => v(e)),
            h = ee(n),
            g = (0, o.useRef)(!1),
            b = (0, o.useRef)(!0),
            {
              viewport: y,
              selectedItem: E,
              selectedItemText: C,
              focusSelectedItem: x,
            } = s,
            _ = (0, o.useCallback)(() => {
              if (c.trigger && c.valueNode && d && p && y && E && C) {
                let e = c.trigger.getBoundingClientRect(),
                  t = p.getBoundingClientRect(),
                  n = c.valueNode.getBoundingClientRect(),
                  r = C.getBoundingClientRect();
                if ("rtl" !== c.dir) {
                  let o = r.left - t.left,
                    l = n.left - o,
                    i = e.left - l,
                    c = e.width + i,
                    u = Math.max(c, t.width),
                    s = window.innerWidth - 10,
                    f = (0, a.u)(l, [10, s - u]);
                  (d.style.minWidth = c + "px"), (d.style.left = f + "px");
                } else {
                  let o = t.right - r.right,
                    l = window.innerWidth - n.right - o,
                    i = window.innerWidth - e.right - l,
                    c = e.width + i,
                    u = Math.max(c, t.width),
                    s = window.innerWidth - 10,
                    f = (0, a.u)(l, [10, s - u]);
                  (d.style.minWidth = c + "px"), (d.style.right = f + "px");
                }
                let o = h(),
                  i = window.innerHeight - 20,
                  u = y.scrollHeight,
                  s = window.getComputedStyle(p),
                  f = parseInt(s.borderTopWidth, 10),
                  v = parseInt(s.paddingTop, 10),
                  m = parseInt(s.borderBottomWidth, 10),
                  w = f + v + u + parseInt(s.paddingBottom, 10) + m,
                  b = Math.min(5 * E.offsetHeight, w),
                  S = window.getComputedStyle(y),
                  x = parseInt(S.paddingTop, 10),
                  _ = parseInt(S.paddingBottom, 10),
                  R = e.top + e.height / 2 - 10,
                  k = E.offsetHeight / 2,
                  M = f + v + (E.offsetTop + k);
                if (M <= R) {
                  let e = E === o[o.length - 1].ref.current;
                  d.style.bottom = "0px";
                  let t = p.clientHeight - y.offsetTop - y.offsetHeight;
                  d.style.height =
                    M + Math.max(i - R, k + (e ? _ : 0) + t + m) + "px";
                } else {
                  let e = E === o[0].ref.current;
                  d.style.top = "0px";
                  let t = Math.max(R, f + y.offsetTop + (e ? x : 0) + k);
                  (d.style.height = t + (w - M) + "px"),
                    (y.scrollTop = M - R + y.offsetTop);
                }
                (d.style.margin = "".concat(10, "px 0")),
                  (d.style.minHeight = b + "px"),
                  (d.style.maxHeight = i + "px"),
                  null == l || l(),
                  requestAnimationFrame(() => (g.current = !0));
              }
            }, [h, c.trigger, c.valueNode, d, p, y, E, C, c.dir, l]);
          (0, S.b)(() => _(), [_]);
          let [R, k] = (0, o.useState)();
          (0, S.b)(() => {
            p && k(window.getComputedStyle(p).zIndex);
          }, [p]);
          let M = (0, o.useCallback)(
            (e) => {
              e &&
                !0 === b.current &&
                (_(), null == x || x(), (b.current = !1));
            },
            [_, x]
          );
          return (0, o.createElement)(
            eb,
            {
              scope: n,
              contentWrapper: d,
              shouldExpandOnScrollRef: g,
              onScrollButtonChange: M,
            },
            (0, o.createElement)(
              "div",
              {
                ref: f,
                style: {
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  zIndex: R,
                },
              },
              (0, o.createElement)(
                w.WV.div,
                (0, r.Z)({}, i, {
                  ref: m,
                  style: {
                    boxSizing: "border-box",
                    maxHeight: "100%",
                    ...i.style,
                  },
                })
              )
            )
          );
        }),
        ew = (0, o.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              align: l = "start",
              collisionPadding: a = 10,
              ...i
            } = e,
            c = eo(n);
          return (0, o.createElement)(
            h.VY,
            (0, r.Z)({}, c, i, {
              ref: t,
              align: l,
              collisionPadding: a,
              style: {
                boxSizing: "border-box",
                ...i.style,
                "--radix-select-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-select-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-select-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
            })
          );
        }),
        [eb, ey] = en(ef, {}),
        eE = "SelectViewport",
        eS = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...l } = e,
            a = em(eE, n),
            c = ey(eE, n),
            s = (0, u.e)(t, a.onViewportChange),
            d = (0, o.useRef)(0);
          return (0, o.createElement)(
            o.Fragment,
            null,
            (0, o.createElement)("style", {
              dangerouslySetInnerHTML: {
                __html:
                  "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
              },
            }),
            (0, o.createElement)(
              Q.Slot,
              { scope: n },
              (0, o.createElement)(
                w.WV.div,
                (0, r.Z)(
                  { "data-radix-select-viewport": "", role: "presentation" },
                  l,
                  {
                    ref: s,
                    style: {
                      position: "relative",
                      flex: 1,
                      overflow: "auto",
                      ...l.style,
                    },
                    onScroll: (0, i.M)(l.onScroll, (e) => {
                      let t = e.currentTarget,
                        { contentWrapper: n, shouldExpandOnScrollRef: r } = c;
                      if (null != r && r.current && n) {
                        let e = Math.abs(d.current - t.scrollTop);
                        if (e > 0) {
                          let r = window.innerHeight - 20,
                            o = Math.max(
                              parseFloat(n.style.minHeight),
                              parseFloat(n.style.height)
                            );
                          if (o < r) {
                            let l = o + e,
                              a = Math.min(r, l),
                              i = l - a;
                            (n.style.height = a + "px"),
                              "0px" === n.style.bottom &&
                                ((t.scrollTop = i > 0 ? i : 0),
                                (n.style.justifyContent = "flex-end"));
                          }
                        }
                      }
                      d.current = t.scrollTop;
                    }),
                  }
                )
              )
            )
          );
        }),
        [eC, ex] = en("SelectGroup"),
        e_ = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...l } = e,
            a = (0, m.M)();
          return (0, o.createElement)(
            eC,
            { scope: n, id: a },
            (0, o.createElement)(
              w.WV.div,
              (0, r.Z)({ role: "group", "aria-labelledby": a }, l, { ref: t })
            )
          );
        }),
        eR = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...l } = e,
            a = ex("SelectLabel", n);
          return (0, o.createElement)(
            w.WV.div,
            (0, r.Z)({ id: a.id }, l, { ref: t })
          );
        }),
        ek = "SelectItem",
        [eM, eT] = en(ek),
        eP = (0, o.forwardRef)((e, t) => {
          let {
              __scopeSelect: n,
              value: l,
              disabled: a = !1,
              textValue: c,
              ...s
            } = e,
            d = ea(ek, n),
            f = em(ek, n),
            p = d.value === l,
            [v, h] = (0, o.useState)(null != c ? c : ""),
            [g, b] = (0, o.useState)(!1),
            y = (0, u.e)(t, (e) => {
              var t;
              return null === (t = f.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(f, e, l, a);
            }),
            E = (0, m.M)(),
            S = () => {
              a || (d.onValueChange(l), d.onOpenChange(!1));
            };
          if ("" === l)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, o.createElement)(
            eM,
            {
              scope: n,
              value: l,
              disabled: a,
              textId: E,
              isSelected: p,
              onItemTextChange: (0, o.useCallback)((e) => {
                h((t) => {
                  var n;
                  return (
                    t ||
                    (null !== (n = null == e ? void 0 : e.textContent) &&
                    void 0 !== n
                      ? n
                      : ""
                    ).trim()
                  );
                });
              }, []),
            },
            (0, o.createElement)(
              Q.ItemSlot,
              { scope: n, value: l, disabled: a, textValue: v },
              (0, o.createElement)(
                w.WV.div,
                (0, r.Z)(
                  {
                    role: "option",
                    "aria-labelledby": E,
                    "data-highlighted": g ? "" : void 0,
                    "aria-selected": p && g,
                    "data-state": p ? "checked" : "unchecked",
                    "aria-disabled": a || void 0,
                    "data-disabled": a ? "" : void 0,
                    tabIndex: a ? void 0 : -1,
                  },
                  s,
                  {
                    ref: y,
                    onFocus: (0, i.M)(s.onFocus, () => b(!0)),
                    onBlur: (0, i.M)(s.onBlur, () => b(!1)),
                    onPointerUp: (0, i.M)(s.onPointerUp, S),
                    onPointerMove: (0, i.M)(s.onPointerMove, (e) => {
                      if (a) {
                        var t;
                        null === (t = f.onItemLeave) ||
                          void 0 === t ||
                          t.call(f);
                      } else e.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: (0, i.M)(s.onPointerLeave, (e) => {
                      if (e.currentTarget === document.activeElement) {
                        var t;
                        null === (t = f.onItemLeave) ||
                          void 0 === t ||
                          t.call(f);
                      }
                    }),
                    onKeyDown: (0, i.M)(s.onKeyDown, (e) => {
                      var t;
                      ((null === (t = f.searchRef) || void 0 === t
                        ? void 0
                        : t.current) !== "" &&
                        " " === e.key) ||
                        (J.includes(e.key) && S(),
                        " " === e.key && e.preventDefault());
                    }),
                  }
                )
              )
            )
          );
        }),
        eI = "SelectItemText",
        eD = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, className: a, style: i, ...c } = e,
            s = ea(eI, n),
            d = em(eI, n),
            f = eT(eI, n),
            p = ec(eI, n),
            [v, m] = (0, o.useState)(null),
            h = (0, u.e)(
              t,
              (e) => m(e),
              f.onItemTextChange,
              (e) => {
                var t;
                return null === (t = d.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(d, e, f.value, f.disabled);
              }
            ),
            g = null == v ? void 0 : v.textContent,
            b = (0, o.useMemo)(
              () =>
                (0, o.createElement)(
                  "option",
                  { key: f.value, value: f.value, disabled: f.disabled },
                  g
                ),
              [f.disabled, f.value, g]
            ),
            { onNativeOptionAdd: y, onNativeOptionRemove: E } = p;
          return (
            (0, S.b)(() => (y(b), () => E(b)), [y, E, b]),
            (0, o.createElement)(
              o.Fragment,
              null,
              (0, o.createElement)(
                w.WV.span,
                (0, r.Z)({ id: f.textId }, c, { ref: h })
              ),
              f.isSelected && s.valueNode && !s.valueNodeHasChildren
                ? (0, l.createPortal)(c.children, s.valueNode)
                : null
            )
          );
        }),
        eL = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...l } = e;
          return eT("SelectItemIndicator", n).isSelected
            ? (0, o.createElement)(
                w.WV.span,
                (0, r.Z)({ "aria-hidden": !0 }, l, { ref: t })
              )
            : null;
        }),
        eV = "SelectScrollUpButton",
        eW = (0, o.forwardRef)((e, t) => {
          let n = em(eV, e.__scopeSelect),
            l = ey(eV, e.__scopeSelect),
            [a, i] = (0, o.useState)(!1),
            c = (0, u.e)(t, l.onScrollButtonChange);
          return (
            (0, S.b)(() => {
              if (n.viewport && n.isPositioned) {
                let t = n.viewport;
                function e() {
                  i(t.scrollTop > 0);
                }
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, o.createElement)(
                  eB,
                  (0, r.Z)({}, e, {
                    ref: c,
                    onAutoScroll: () => {
                      let { viewport: e, selectedItem: t } = n;
                      e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                    },
                  })
                )
              : null
          );
        }),
        eZ = "SelectScrollDownButton",
        eN = (0, o.forwardRef)((e, t) => {
          let n = em(eZ, e.__scopeSelect),
            l = ey(eZ, e.__scopeSelect),
            [a, i] = (0, o.useState)(!1),
            c = (0, u.e)(t, l.onScrollButtonChange);
          return (
            (0, S.b)(() => {
              if (n.viewport && n.isPositioned) {
                let t = n.viewport;
                function e() {
                  let e = t.scrollHeight - t.clientHeight;
                  i(Math.ceil(t.scrollTop) < e);
                }
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            a
              ? (0, o.createElement)(
                  eB,
                  (0, r.Z)({}, e, {
                    ref: c,
                    onAutoScroll: () => {
                      let { viewport: e, selectedItem: t } = n;
                      e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                    },
                  })
                )
              : null
          );
        }),
        eB = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, onAutoScroll: l, ...a } = e,
            c = em("SelectScrollButton", n),
            u = (0, o.useRef)(null),
            s = ee(n),
            d = (0, o.useCallback)(() => {
              null !== u.current &&
                (window.clearInterval(u.current), (u.current = null));
            }, []);
          return (
            (0, o.useEffect)(() => () => d(), [d]),
            (0, S.b)(() => {
              var e;
              let t = s().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [s]),
            (0, o.createElement)(
              w.WV.div,
              (0, r.Z)({ "aria-hidden": !0 }, a, {
                ref: t,
                style: { flexShrink: 0, ...a.style },
                onPointerDown: (0, i.M)(a.onPointerDown, () => {
                  null === u.current && (u.current = window.setInterval(l, 50));
                }),
                onPointerMove: (0, i.M)(a.onPointerMove, () => {
                  var e;
                  null === (e = c.onItemLeave) || void 0 === e || e.call(c),
                    null === u.current &&
                      (u.current = window.setInterval(l, 50));
                }),
                onPointerLeave: (0, i.M)(a.onPointerLeave, () => {
                  d();
                }),
              })
            )
          );
        }),
        eO = (0, o.forwardRef)((e, t) => {
          let { __scopeSelect: n, ...l } = e;
          return (0, o.createElement)(
            w.WV.div,
            (0, r.Z)({ "aria-hidden": !0 }, l, { ref: t })
          );
        });
      function eA(e) {
        return "" === e || void 0 === e;
      }
      let eH = (0, o.forwardRef)((e, t) => {
        let { value: n, ...l } = e,
          a = (0, o.useRef)(null),
          i = (0, u.e)(t, a),
          c = (0, C.D)(n);
        return (
          (0, o.useEffect)(() => {
            let e = a.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (c !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [c, n]),
          (0, o.createElement)(
            x.T,
            { asChild: !0 },
            (0, o.createElement)(
              "select",
              (0, r.Z)({}, l, { ref: i, defaultValue: n })
            )
          )
        );
      });
      function eF(e) {
        let t = (0, y.W)(e),
          n = (0, o.useRef)(""),
          r = (0, o.useRef)(0),
          l = (0, o.useCallback)(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          a = (0, o.useCallback)(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          (0, o.useEffect)(() => () => window.clearTimeout(r.current), []),
          [n, l, a]
        );
      }
      function eK(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          l =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (l = l.filter((e) => e !== n));
        let a = l.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return a !== n ? a : void 0;
      }
      eH.displayName = "BubbleSelect";
      let ez = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: l,
              onOpenChange: a,
              value: i,
              defaultValue: c,
              onValueChange: u,
              dir: s,
              name: f,
              autoComplete: p,
              disabled: v,
              required: g,
            } = e,
            w = eo(t),
            [b, y] = (0, o.useState)(null),
            [S, C] = (0, o.useState)(null),
            [x, _] = (0, o.useState)(!1),
            R = (0, d.gm)(s),
            [k = !1, M] = (0, E.T)({ prop: r, defaultProp: l, onChange: a }),
            [T, P] = (0, E.T)({ prop: i, defaultProp: c, onChange: u }),
            I = (0, o.useRef)(null),
            D = !b || !!b.closest("form"),
            [L, V] = (0, o.useState)(new Set()),
            W = Array.from(L)
              .map((e) => e.props.value)
              .join(";");
          return (0, o.createElement)(
            h.fC,
            w,
            (0, o.createElement)(
              el,
              {
                required: g,
                scope: t,
                trigger: b,
                onTriggerChange: y,
                valueNode: S,
                onValueNodeChange: C,
                valueNodeHasChildren: x,
                onValueNodeHasChildrenChange: _,
                contentId: (0, m.M)(),
                value: T,
                onValueChange: P,
                open: k,
                onOpenChange: M,
                dir: R,
                triggerPointerDownPosRef: I,
                disabled: v,
              },
              (0, o.createElement)(
                Q.Provider,
                { scope: t },
                (0, o.createElement)(
                  ei,
                  {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: (0, o.useCallback)((e) => {
                      V((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: (0, o.useCallback)((e) => {
                      V((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                  },
                  n
                )
              ),
              D
                ? (0, o.createElement)(
                    eH,
                    {
                      key: W,
                      "aria-hidden": !0,
                      required: g,
                      tabIndex: -1,
                      name: f,
                      autoComplete: p,
                      value: T,
                      onChange: (e) => P(e.target.value),
                      disabled: v,
                    },
                    void 0 === T
                      ? (0, o.createElement)("option", { value: "" })
                      : null,
                    Array.from(L)
                  )
                : null
            )
          );
        },
        eY = eu,
        eU = es,
        eX = ed,
        eq = (e) => (0, o.createElement)(g.h, (0, r.Z)({ asChild: !0 }, e)),
        ej = ep,
        eG = eS,
        eJ = e_,
        e$ = eR,
        eQ = eP,
        e0 = eD,
        e1 = eL,
        e6 = eW,
        e2 = eN,
        e4 = eO;
    },
    51014: function (e, t, n) {
      n.d(t, {
        f: function () {
          return s;
        },
      });
      var r = n(14749),
        o = n(64090),
        l = n(29586);
      let a = "horizontal",
        i = ["horizontal", "vertical"],
        c = (0, o.forwardRef)((e, t) => {
          let { decorative: n, orientation: i = a, ...c } = e,
            s = u(i) ? i : a;
          return (0, o.createElement)(
            l.WV.div,
            (0, r.Z)(
              { "data-orientation": s },
              n
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === s ? s : void 0,
                    role: "separator",
                  },
              c,
              { ref: t }
            )
          );
        });
      function u(e) {
        return i.includes(e);
      }
      c.propTypes = {
        orientation(e, t, n) {
          let r = e[t],
            o = String(r);
          return r && !u(r)
            ? Error(
                "Invalid prop `orientation` of value `"
                  .concat(o, "` supplied to `")
                  .concat(
                    n,
                    "`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `"
                  )
                  .concat(a, "`.")
              )
            : null;
        },
      };
      let s = c;
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
  },
]);
