(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7436],
  {
    95032: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(87461).Z)("Activity", [
        ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }],
      ]);
    },
    30553: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(87461).Z)("ChevronsUpDown", [
        ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
        ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }],
      ]);
    },
    93276: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(87461).Z)("Database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
      ]);
    },
    69475: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(87461).Z)("FileText", [
        [
          "path",
          {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7",
          },
        ],
        ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
        ["path", { d: "M10 9H8", key: "b1mrlr" }],
        ["path", { d: "M16 13H8", key: "t4e002" }],
        ["path", { d: "M16 17H8", key: "z1uh3a" }],
      ]);
    },
    79744: function (e, t, n) {
      "use strict";
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
       */ let r = (0, n(87461).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    91774: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return u;
        },
      });
      var r = n(64090);
      let i = ["light", "dark"],
        a = "(prefers-color-scheme: dark)",
        o = (0, r.createContext)(void 0),
        u = (e) =>
          (0, r.useContext)(o)
            ? r.createElement(r.Fragment, null, e.children)
            : r.createElement(l, e),
        s = ["light", "dark"],
        l = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: n = !1,
              enableSystem: u = !0,
              enableColorScheme: l = !0,
              storageKey: y = "theme",
              themes: g = s,
              defaultTheme: p = u ? "system" : "light",
              attribute: m = "data-theme",
              value: b,
              children: w,
              nonce: C,
            } = e,
            [_, q] = (0, r.useState)(() => d(y, p)),
            [E, I] = (0, r.useState)(() => d(y)),
            T = b ? Object.values(b) : g,
            k = (0, r.useCallback)((e) => {
              let t = e;
              if (!t) return;
              "system" === e && u && (t = f());
              let r = b ? b[t] : t,
                a = n ? h() : null,
                o = document.documentElement;
              if (
                ("class" === m
                  ? (o.classList.remove(...T), r && o.classList.add(r))
                  : r
                  ? o.setAttribute(m, r)
                  : o.removeAttribute(m),
                l)
              ) {
                let e = i.includes(p) ? p : null,
                  n = i.includes(t) ? t : e;
                o.style.colorScheme = n;
              }
              null == a || a();
            }, []),
            F = (0, r.useCallback)(
              (e) => {
                q(e);
                try {
                  localStorage.setItem(y, e);
                } catch (e) {}
              },
              [t]
            ),
            M = (0, r.useCallback)(
              (e) => {
                I(f(e)), "system" === _ && u && !t && k("system");
              },
              [_, t]
            );
          (0, r.useEffect)(() => {
            let e = window.matchMedia(a);
            return e.addListener(M), M(e), () => e.removeListener(M);
          }, [M]),
            (0, r.useEffect)(() => {
              let e = (e) => {
                e.key === y && F(e.newValue || p);
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [F]),
            (0, r.useEffect)(() => {
              k(null != t ? t : _);
            }, [t, _]);
          let x = (0, r.useMemo)(
            () => ({
              theme: _,
              setTheme: F,
              forcedTheme: t,
              resolvedTheme: "system" === _ ? E : _,
              themes: u ? [...g, "system"] : g,
              systemTheme: u ? E : void 0,
            }),
            [_, F, t, E, u, g]
          );
          return r.createElement(
            o.Provider,
            { value: x },
            r.createElement(c, {
              forcedTheme: t,
              disableTransitionOnChange: n,
              enableSystem: u,
              enableColorScheme: l,
              storageKey: y,
              themes: g,
              defaultTheme: p,
              attribute: m,
              value: b,
              children: w,
              attrs: T,
              nonce: C,
            }),
            w
          );
        },
        c = (0, r.memo)(
          (e) => {
            let {
                forcedTheme: t,
                storageKey: n,
                attribute: o,
                enableSystem: u,
                enableColorScheme: s,
                defaultTheme: l,
                value: c,
                attrs: d,
                nonce: h,
              } = e,
              f = "system" === l,
              y =
                "class" === o
                  ? "var d=document.documentElement,c=d.classList;c.remove(".concat(
                      d.map((e) => "'".concat(e, "'")).join(","),
                      ");"
                    )
                  : "var d=document.documentElement,n='".concat(
                      o,
                      "',s='setAttribute';"
                    ),
              g = s
                ? i.includes(l) && l
                  ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(
                      l,
                      "'"
                    )
                  : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
              p = function (e) {
                let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n =
                    !(arguments.length > 2) ||
                    void 0 === arguments[2] ||
                    arguments[2],
                  r = c ? c[e] : e,
                  a = t ? e + "|| ''" : "'".concat(r, "'"),
                  u = "";
                return (
                  s &&
                    n &&
                    !t &&
                    i.includes(e) &&
                    (u += "d.style.colorScheme = '".concat(e, "';")),
                  "class" === o
                    ? (u += t || r ? "c.add(".concat(a, ")") : "null")
                    : r && (u += "d[s](n,".concat(a, ")")),
                  u
                );
              },
              m = t
                ? "!function(){".concat(y).concat(p(t), "}()")
                : u
                ? "!function(){try{"
                    .concat(y, "var e=localStorage.getItem('")
                    .concat(n, "');if('system'===e||(!e&&")
                    .concat(f, ")){var t='")
                    .concat(
                      a,
                      "',m=window.matchMedia(t);if(m.media!==t||m.matches){"
                    )
                    .concat(p("dark"), "}else{")
                    .concat(p("light"), "}}else if(e){")
                    .concat(c ? "var x=".concat(JSON.stringify(c), ";") : "")
                    .concat(p(c ? "x[e]" : "e", !0), "}")
                    .concat(f ? "" : "else{" + p(l, !1, !1) + "}")
                    .concat(g, "}catch(e){}}()")
                : "!function(){try{"
                    .concat(y, "var e=localStorage.getItem('")
                    .concat(n, "');if(e){")
                    .concat(c ? "var x=".concat(JSON.stringify(c), ";") : "")
                    .concat(p(c ? "x[e]" : "e", !0), "}else{")
                    .concat(p(l, !1, !1), ";}")
                    .concat(g, "}catch(t){}}();");
            return r.createElement("script", {
              nonce: h,
              dangerouslySetInnerHTML: { __html: m },
            });
          },
          () => !0
        ),
        d = (e, t) => {
          let n;
          try {
            n = localStorage.getItem(e) || void 0;
          } catch (e) {}
          return n || t;
        },
        h = () => {
          let e = document.createElement("style");
          return (
            e.appendChild(
              document.createTextNode(
                "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        f = (e) => (
          e || (e = window.matchMedia(a)), e.matches ? "dark" : "light"
        );
    },
    80867: function () {},
    99646: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Inter_d65c78', '__Inter_Fallback_d65c78'",
          fontStyle: "normal",
        },
        className: "__className_d65c78",
      };
    },
    87642: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      n.d(t, {
        Wd: function () {
          return r;
        },
      }),
        BigInt(0),
        BigInt(1),
        BigInt(2);
    },
    38152: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return N;
        },
        fC: function () {
          return B;
        },
        xz: function () {
          return R;
        },
        zt: function () {
          return D;
        },
      });
      var r = n(14749),
        i = n(64090),
        a = n(44991),
        o = n(61266),
        u = n(84104),
        s = n(1260),
        l = n(38687),
        c = n(12338),
        d = (n(37881), n(12642)),
        h = n(29586),
        f = n(59143),
        y = n(9310),
        g = n(11780);
      let [p, m] = (0, u.b)("Tooltip", [c.D7]),
        b = (0, c.D7)(),
        w = "tooltip.open",
        [C, _] = p("TooltipProvider"),
        q = "Tooltip",
        [E, I] = p(q),
        T = "TooltipTrigger",
        k = (0, i.forwardRef)((e, t) => {
          let { __scopeTooltip: n, ...u } = e,
            s = I(T, n),
            l = _(T, n),
            d = b(n),
            f = (0, i.useRef)(null),
            y = (0, o.e)(t, f, s.onTriggerChange),
            g = (0, i.useRef)(!1),
            p = (0, i.useRef)(!1),
            m = (0, i.useCallback)(() => (g.current = !1), []);
          return (
            (0, i.useEffect)(
              () => () => document.removeEventListener("pointerup", m),
              [m]
            ),
            (0, i.createElement)(
              c.ee,
              (0, r.Z)({ asChild: !0 }, d),
              (0, i.createElement)(
                h.WV.button,
                (0, r.Z)(
                  {
                    "aria-describedby": s.open ? s.contentId : void 0,
                    "data-state": s.stateAttribute,
                  },
                  u,
                  {
                    ref: y,
                    onPointerMove: (0, a.M)(e.onPointerMove, (e) => {
                      "touch" === e.pointerType ||
                        p.current ||
                        l.isPointerInTransitRef.current ||
                        (s.onTriggerEnter(), (p.current = !0));
                    }),
                    onPointerLeave: (0, a.M)(e.onPointerLeave, () => {
                      s.onTriggerLeave(), (p.current = !1);
                    }),
                    onPointerDown: (0, a.M)(e.onPointerDown, () => {
                      (g.current = !0),
                        document.addEventListener("pointerup", m, { once: !0 });
                    }),
                    onFocus: (0, a.M)(e.onFocus, () => {
                      g.current || s.onOpen();
                    }),
                    onBlur: (0, a.M)(e.onBlur, s.onClose),
                    onClick: (0, a.M)(e.onClick, s.onClose),
                  }
                )
              )
            )
          );
        }),
        [F, M] = p("TooltipPortal", { forceMount: void 0 }),
        x = "TooltipContent",
        O = (0, i.forwardRef)((e, t) => {
          let n = M(x, e.__scopeTooltip),
            { forceMount: a = n.forceMount, side: o = "top", ...u } = e,
            s = I(x, e.__scopeTooltip);
          return (0, i.createElement)(
            d.z,
            { present: a || s.open },
            s.disableHoverableContent
              ? (0, i.createElement)(A, (0, r.Z)({ side: o }, u, { ref: t }))
              : (0, i.createElement)(S, (0, r.Z)({ side: o }, u, { ref: t }))
          );
        }),
        S = (0, i.forwardRef)((e, t) => {
          let n = I(x, e.__scopeTooltip),
            a = _(x, e.__scopeTooltip),
            u = (0, i.useRef)(null),
            s = (0, o.e)(t, u),
            [l, c] = (0, i.useState)(null),
            { trigger: d, onClose: h } = n,
            f = u.current,
            { onPointerInTransitChange: y } = a,
            g = (0, i.useCallback)(() => {
              c(null), y(!1);
            }, [y]),
            p = (0, i.useCallback)(
              (e, t) => {
                let n = e.currentTarget,
                  r = { x: e.clientX, y: e.clientY },
                  i = (function (e, t) {
                    let n = Math.abs(t.top - e.y),
                      r = Math.abs(t.bottom - e.y),
                      i = Math.abs(t.right - e.x),
                      a = Math.abs(t.left - e.x);
                    switch (Math.min(n, r, i, a)) {
                      case a:
                        return "left";
                      case i:
                        return "right";
                      case n:
                        return "top";
                      case r:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(r, n.getBoundingClientRect());
                c(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                          ? 1
                          : e.y < t.y
                          ? -1
                          : e.y > t.y
                          ? 1
                          : 0
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                          let r = e[n];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              n = t[t.length - 2];
                            if (
                              (e.x - n.x) * (r.y - n.y) >=
                              (e.y - n.y) * (r.x - n.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(r);
                        }
                        t.pop();
                        let n = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let r = e[t];
                          for (; n.length >= 2; ) {
                            let e = n[n.length - 1],
                              t = n[n.length - 2];
                            if (
                              (e.x - t.x) * (r.y - t.y) >=
                              (e.y - t.y) * (r.x - t.x)
                            )
                              n.pop();
                            else break;
                          }
                          n.push(r);
                        }
                        return (n.pop(),
                        1 === t.length &&
                          1 === n.length &&
                          t[0].x === n[0].x &&
                          t[0].y === n[0].y)
                          ? t
                          : t.concat(n);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        r = [];
                      switch (t) {
                        case "top":
                          r.push(
                            { x: e.x - n, y: e.y + n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "bottom":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x + n, y: e.y - n }
                          );
                          break;
                        case "left":
                          r.push(
                            { x: e.x + n, y: e.y - n },
                            { x: e.x + n, y: e.y + n }
                          );
                          break;
                        case "right":
                          r.push(
                            { x: e.x - n, y: e.y - n },
                            { x: e.x - n, y: e.y + n }
                          );
                      }
                      return r;
                    })(r, i),
                    ...(function (e) {
                      let { top: t, right: n, bottom: r, left: i } = e;
                      return [
                        { x: i, y: t },
                        { x: n, y: t },
                        { x: n, y: r },
                        { x: i, y: r },
                      ];
                    })(t.getBoundingClientRect()),
                  ])
                ),
                  y(!0);
              },
              [y]
            );
          return (
            (0, i.useEffect)(() => () => g(), [g]),
            (0, i.useEffect)(() => {
              if (d && f) {
                let e = (e) => p(e, f),
                  t = (e) => p(e, d);
                return (
                  d.addEventListener("pointerleave", e),
                  f.addEventListener("pointerleave", t),
                  () => {
                    d.removeEventListener("pointerleave", e),
                      f.removeEventListener("pointerleave", t);
                  }
                );
              }
            }, [d, f, p, g]),
            (0, i.useEffect)(() => {
              if (l) {
                let e = (e) => {
                  let t = e.target,
                    n = { x: e.clientX, y: e.clientY },
                    r =
                      (null == d ? void 0 : d.contains(t)) ||
                      (null == f ? void 0 : f.contains(t)),
                    i = !(function (e, t) {
                      let { x: n, y: r } = e,
                        i = !1;
                      for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                        let o = t[e].x,
                          u = t[e].y,
                          s = t[a].x,
                          l = t[a].y;
                        u > r != l > r &&
                          n < ((s - o) * (r - u)) / (l - u) + o &&
                          (i = !i);
                      }
                      return i;
                    })(n, l);
                  r ? g() : i && (g(), h());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [d, f, l, h, g]),
            (0, i.createElement)(A, (0, r.Z)({}, e, { ref: s }))
          );
        }),
        [K, P] = p(q, { isInside: !1 }),
        A = (0, i.forwardRef)((e, t) => {
          let {
              __scopeTooltip: n,
              children: a,
              "aria-label": o,
              onEscapeKeyDown: u,
              onPointerDownOutside: l,
              ...d
            } = e,
            h = I(x, n),
            y = b(n),
            { onClose: p } = h;
          return (
            (0, i.useEffect)(
              () => (
                document.addEventListener(w, p),
                () => document.removeEventListener(w, p)
              ),
              [p]
            ),
            (0, i.useEffect)(() => {
              if (h.trigger) {
                let e = (e) => {
                  let t = e.target;
                  null != t && t.contains(h.trigger) && p();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [h.trigger, p]),
            (0, i.createElement)(
              s.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: u,
                onPointerDownOutside: l,
                onFocusOutside: (e) => e.preventDefault(),
                onDismiss: p,
              },
              (0, i.createElement)(
                c.VY,
                (0, r.Z)({ "data-state": h.stateAttribute }, y, d, {
                  ref: t,
                  style: {
                    ...d.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, i.createElement)(f.A4, null, a),
                (0, i.createElement)(
                  K,
                  { scope: n, isInside: !0 },
                  (0, i.createElement)(
                    g.f,
                    { id: h.contentId, role: "tooltip" },
                    o || a
                  )
                )
              )
            )
          );
        }),
        D = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: n = 700,
              skipDelayDuration: r = 300,
              disableHoverableContent: a = !1,
              children: o,
            } = e,
            [u, s] = (0, i.useState)(!0),
            l = (0, i.useRef)(!1),
            c = (0, i.useRef)(0);
          return (
            (0, i.useEffect)(() => {
              let e = c.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, i.createElement)(
              C,
              {
                scope: t,
                isOpenDelayed: u,
                delayDuration: n,
                onOpen: (0, i.useCallback)(() => {
                  window.clearTimeout(c.current), s(!1);
                }, []),
                onClose: (0, i.useCallback)(() => {
                  window.clearTimeout(c.current),
                    (c.current = window.setTimeout(() => s(!0), r));
                }, [r]),
                isPointerInTransitRef: l,
                onPointerInTransitChange: (0, i.useCallback)((e) => {
                  l.current = e;
                }, []),
                disableHoverableContent: a,
              },
              o
            )
          );
        },
        B = (e) => {
          let {
              __scopeTooltip: t,
              children: n,
              open: r,
              defaultOpen: a = !1,
              onOpenChange: o,
              disableHoverableContent: u,
              delayDuration: s,
            } = e,
            d = _(q, e.__scopeTooltip),
            h = b(t),
            [f, g] = (0, i.useState)(null),
            p = (0, l.M)(),
            m = (0, i.useRef)(0),
            C = null != u ? u : d.disableHoverableContent,
            I = null != s ? s : d.delayDuration,
            T = (0, i.useRef)(!1),
            [k = !1, F] = (0, y.T)({
              prop: r,
              defaultProp: a,
              onChange: (e) => {
                e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(w)))
                  : d.onClose(),
                  null == o || o(e);
              },
            }),
            M = (0, i.useMemo)(
              () =>
                k ? (T.current ? "delayed-open" : "instant-open") : "closed",
              [k]
            ),
            x = (0, i.useCallback)(() => {
              window.clearTimeout(m.current), (T.current = !1), F(!0);
            }, [F]),
            O = (0, i.useCallback)(() => {
              window.clearTimeout(m.current), F(!1);
            }, [F]),
            S = (0, i.useCallback)(() => {
              window.clearTimeout(m.current),
                (m.current = window.setTimeout(() => {
                  (T.current = !0), F(!0);
                }, I));
            }, [I, F]);
          return (
            (0, i.useEffect)(() => () => window.clearTimeout(m.current), []),
            (0, i.createElement)(
              c.fC,
              h,
              (0, i.createElement)(
                E,
                {
                  scope: t,
                  contentId: p,
                  open: k,
                  stateAttribute: M,
                  trigger: f,
                  onTriggerChange: g,
                  onTriggerEnter: (0, i.useCallback)(() => {
                    d.isOpenDelayed ? S() : x();
                  }, [d.isOpenDelayed, S, x]),
                  onTriggerLeave: (0, i.useCallback)(() => {
                    C ? O() : window.clearTimeout(m.current);
                  }, [O, C]),
                  onOpen: x,
                  onClose: O,
                  disableHoverableContent: C,
                },
                n
              )
            )
          );
        },
        R = k,
        N = O;
    },
    55377: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return V;
        },
      });
      var r,
        i,
        a,
        o,
        u,
        s,
        l,
        c,
        d,
        h,
        f,
        y,
        g,
        p,
        m,
        b,
        w,
        C,
        _,
        q,
        E,
        I,
        T = n(32731),
        k = n(48146),
        F = n(5577),
        M = n(67354);
      function x(e, t) {
        var n = (0, M.J)(e, t, "update");
        return (function (e, t) {
          if (t.set) {
            if (!t.get)
              throw TypeError("attempted to read set only private field");
            return (
              "__destrWrapper" in t ||
                (t.__destrWrapper = {
                  set value(v) {
                    t.set.call(e, v);
                  },
                  get value() {
                    return t.get.call(e);
                  },
                }),
              t.__destrWrapper
            );
          }
          if (!t.writable)
            throw TypeError("attempted to set read only private field");
          return t;
        })(e, n);
      }
      var O = n(46063),
        S = n(94831),
        K = n(37920),
        P = n(45139),
        A = n(90326),
        D = n(2041),
        B =
          ((r = new WeakMap()),
          (i = new WeakMap()),
          (a = new WeakMap()),
          (o = new WeakMap()),
          (u = new WeakMap()),
          (s = new WeakMap()),
          (l = new WeakMap()),
          (c = new WeakMap()),
          (d = new WeakSet()),
          (h = new WeakSet()),
          class extends D.F {
            get meta() {
              return this.options.meta;
            }
            optionalRemove() {
              (0, T._)(this, s).length ||
                "idle" !== this.state.fetchStatus ||
                (0, T._)(this, a).remove(this);
            }
            setData(e, t) {
              let n = (0, O.oE)(this.state.data, e, this.options);
              return (
                (0, S._)(this, h, N).call(this, {
                  data: n,
                  type: "success",
                  dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                  manual: null == t ? void 0 : t.manual,
                }),
                n
              );
            }
            setState(e, t) {
              (0, S._)(this, h, N).call(this, {
                type: "setState",
                state: e,
                setStateOptions: t,
              });
            }
            cancel(e) {
              var t;
              let n = (0, T._)(this, o);
              return (
                null === (t = (0, T._)(this, u)) || void 0 === t || t.cancel(e),
                n ? n.then(O.ZT).catch(O.ZT) : Promise.resolve()
              );
            }
            destroy() {
              super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
              this.destroy(), this.setState((0, T._)(this, r));
            }
            isActive() {
              return (0, T._)(this, s).some((e) => !1 !== e.options.enabled);
            }
            isDisabled() {
              return this.getObserversCount() > 0 && !this.isActive();
            }
            isStale() {
              return (
                this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                (0, T._)(this, s).some((e) => e.getCurrentResult().isStale)
              );
            }
            isStaleByTime() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return (
                this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                !(0, O.Kp)(this.state.dataUpdatedAt, e)
              );
            }
            onFocus() {
              var e;
              let t = (0, T._)(this, s).find((e) =>
                e.shouldFetchOnWindowFocus()
              );
              null == t || t.refetch({ cancelRefetch: !1 }),
                null === (e = (0, T._)(this, u)) ||
                  void 0 === e ||
                  e.continue();
            }
            onOnline() {
              var e;
              let t = (0, T._)(this, s).find((e) => e.shouldFetchOnReconnect());
              null == t || t.refetch({ cancelRefetch: !1 }),
                null === (e = (0, T._)(this, u)) ||
                  void 0 === e ||
                  e.continue();
            }
            addObserver(e) {
              (0, T._)(this, s).includes(e) ||
                ((0, T._)(this, s).push(e),
                this.clearGcTimeout(),
                (0, T._)(this, a).notify({
                  type: "observerAdded",
                  query: this,
                  observer: e,
                }));
            }
            removeObserver(e) {
              (0, T._)(this, s).includes(e) &&
                ((0, F._)(
                  this,
                  s,
                  (0, T._)(this, s).filter((t) => t !== e)
                ),
                (0, T._)(this, s).length ||
                  ((0, T._)(this, u) &&
                    ((0, T._)(this, c)
                      ? (0, T._)(this, u).cancel({ revert: !0 })
                      : (0, T._)(this, u).cancelRetry()),
                  this.scheduleGc()),
                (0, T._)(this, a).notify({
                  type: "observerRemoved",
                  query: this,
                  observer: e,
                }));
            }
            getObserversCount() {
              return (0, T._)(this, s).length;
            }
            invalidate() {
              this.state.isInvalidated ||
                (0, S._)(this, h, N).call(this, { type: "invalidate" });
            }
            fetch(e, t) {
              var n, r, l, f;
              if ("idle" !== this.state.fetchStatus) {
                if (
                  this.state.dataUpdatedAt &&
                  (null == t ? void 0 : t.cancelRefetch)
                )
                  this.cancel({ silent: !0 });
                else if ((0, T._)(this, o))
                  return (
                    null === (l = (0, T._)(this, u)) ||
                      void 0 === l ||
                      l.continueRetry(),
                    (0, T._)(this, o)
                  );
              }
              if (
                (e && (0, S._)(this, d, R).call(this, e), !this.options.queryFn)
              ) {
                let e = (0, T._)(this, s).find((e) => e.options.queryFn);
                e && (0, S._)(this, d, R).call(this, e.options);
              }
              let y = new AbortController(),
                g = { queryKey: this.queryKey, meta: this.meta },
                p = (e) => {
                  Object.defineProperty(e, "signal", {
                    enumerable: !0,
                    get: () => ((0, F._)(this, c, !0), y.signal),
                  });
                };
              p(g);
              let m = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () =>
                  this.options.queryFn
                    ? ((0, F._)(this, c, !1), this.options.persister)
                      ? this.options.persister(this.options.queryFn, g, this)
                      : this.options.queryFn(g)
                    : Promise.reject(
                        Error(
                          "Missing queryFn: '".concat(
                            this.options.queryHash,
                            "'"
                          )
                        )
                      ),
              };
              p(m),
                null === (n = this.options.behavior) ||
                  void 0 === n ||
                  n.onFetch(m, this),
                (0, F._)(this, i, this.state),
                ("idle" === this.state.fetchStatus ||
                  this.state.fetchMeta !==
                    (null === (r = m.fetchOptions) || void 0 === r
                      ? void 0
                      : r.meta)) &&
                  (0, S._)(this, h, N).call(this, {
                    type: "fetch",
                    meta:
                      null === (f = m.fetchOptions) || void 0 === f
                        ? void 0
                        : f.meta,
                  });
              let b = (e) => {
                if (
                  (((0, A.DV)(e) && e.silent) ||
                    (0, S._)(this, h, N).call(this, {
                      type: "error",
                      error: e,
                    }),
                  !(0, A.DV)(e))
                ) {
                  var t, n, r, i;
                  null === (t = (n = (0, T._)(this, a).config).onError) ||
                    void 0 === t ||
                    t.call(n, e, this),
                    null === (r = (i = (0, T._)(this, a).config).onSettled) ||
                      void 0 === r ||
                      r.call(i, this.state.data, e, this);
                }
                this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              };
              return (
                (0, F._)(
                  this,
                  u,
                  (0, A.Mz)({
                    fn: m.fetchFn,
                    abort: y.abort.bind(y),
                    onSuccess: (e) => {
                      var t, n, r, i;
                      if (void 0 === e) {
                        b(
                          Error("".concat(this.queryHash, " data is undefined"))
                        );
                        return;
                      }
                      this.setData(e),
                        null ===
                          (t = (n = (0, T._)(this, a).config).onSuccess) ||
                          void 0 === t ||
                          t.call(n, e, this),
                        null ===
                          (r = (i = (0, T._)(this, a).config).onSettled) ||
                          void 0 === r ||
                          r.call(i, e, this.state.error, this),
                        this.isFetchingOptimistic || this.scheduleGc(),
                        (this.isFetchingOptimistic = !1);
                    },
                    onError: b,
                    onFail: (e, t) => {
                      (0, S._)(this, h, N).call(this, {
                        type: "failed",
                        failureCount: e,
                        error: t,
                      });
                    },
                    onPause: () => {
                      (0, S._)(this, h, N).call(this, { type: "pause" });
                    },
                    onContinue: () => {
                      (0, S._)(this, h, N).call(this, { type: "continue" });
                    },
                    retry: m.options.retry,
                    retryDelay: m.options.retryDelay,
                    networkMode: m.options.networkMode,
                  })
                ),
                (0, F._)(this, o, (0, T._)(this, u).promise),
                (0, T._)(this, o)
              );
            }
            constructor(e) {
              super(),
                (0, K._)(this, d),
                (0, K._)(this, h),
                (0, k._)(this, r, { writable: !0, value: void 0 }),
                (0, k._)(this, i, { writable: !0, value: void 0 }),
                (0, k._)(this, a, { writable: !0, value: void 0 }),
                (0, k._)(this, o, { writable: !0, value: void 0 }),
                (0, k._)(this, u, { writable: !0, value: void 0 }),
                (0, k._)(this, s, { writable: !0, value: void 0 }),
                (0, k._)(this, l, { writable: !0, value: void 0 }),
                (0, k._)(this, c, { writable: !0, value: void 0 }),
                (0, F._)(this, c, !1),
                (0, F._)(this, l, e.defaultOptions),
                (0, S._)(this, d, R).call(this, e.options),
                (0, F._)(this, s, []),
                (0, F._)(this, a, e.cache),
                (this.queryKey = e.queryKey),
                (this.queryHash = e.queryHash),
                (0, F._)(
                  this,
                  r,
                  e.state ||
                    (function (e) {
                      let t =
                          "function" == typeof e.initialData
                            ? e.initialData()
                            : e.initialData,
                        n = void 0 !== t,
                        r = n
                          ? "function" == typeof e.initialDataUpdatedAt
                            ? e.initialDataUpdatedAt()
                            : e.initialDataUpdatedAt
                          : 0;
                      return {
                        data: t,
                        dataUpdateCount: 0,
                        dataUpdatedAt: n ? (null != r ? r : Date.now()) : 0,
                        error: null,
                        errorUpdateCount: 0,
                        errorUpdatedAt: 0,
                        fetchFailureCount: 0,
                        fetchFailureReason: null,
                        fetchMeta: null,
                        isInvalidated: !1,
                        status: n ? "success" : "pending",
                        fetchStatus: "idle",
                      };
                    })(this.options)
                ),
                (this.state = (0, T._)(this, r)),
                this.scheduleGc();
            }
          });
      function R(e) {
        (this.options = { ...(0, T._)(this, l), ...e }),
          this.updateGcTime(this.options.gcTime);
      }
      function N(e) {
        (this.state = ((t) => {
          var n, r;
          switch (e.type) {
            case "failed":
              return {
                ...t,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error,
              };
            case "pause":
              return { ...t, fetchStatus: "paused" };
            case "continue":
              return { ...t, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...t,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null !== (n = e.meta) && void 0 !== n ? n : null,
                fetchStatus: (0, A.Kw)(this.options.networkMode)
                  ? "fetching"
                  : "paused",
                ...(!t.dataUpdatedAt && { error: null, status: "pending" }),
              };
            case "success":
              return {
                ...t,
                data: e.data,
                dataUpdateCount: t.dataUpdateCount + 1,
                dataUpdatedAt:
                  null !== (r = e.dataUpdatedAt) && void 0 !== r
                    ? r
                    : Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
            case "error":
              let a = e.error;
              if ((0, A.DV)(a) && a.revert && (0, T._)(this, i))
                return { ...(0, T._)(this, i), fetchStatus: "idle" };
              return {
                ...t,
                error: a,
                errorUpdateCount: t.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: t.fetchFailureCount + 1,
                fetchFailureReason: a,
                fetchStatus: "idle",
                status: "error",
              };
            case "invalidate":
              return { ...t, isInvalidated: !0 };
            case "setState":
              return { ...t, ...e.state };
          }
        })(this.state)),
          P.V.batch(() => {
            (0, T._)(this, s).forEach((e) => {
              e.onQueryUpdate();
            }),
              (0, T._)(this, a).notify({
                query: this,
                type: "updated",
                action: e,
              });
          });
      }
      var Q = n(44614),
        L =
          ((f = new WeakMap()),
          class extends Q.l {
            build(e, t, n) {
              var r;
              let i = t.queryKey,
                a =
                  null !== (r = t.queryHash) && void 0 !== r
                    ? r
                    : (0, O.Rm)(i, t),
                o = this.get(a);
              return (
                o ||
                  ((o = new B({
                    cache: this,
                    queryKey: i,
                    queryHash: a,
                    options: e.defaultQueryOptions(t),
                    state: n,
                    defaultOptions: e.getQueryDefaults(i),
                  })),
                  this.add(o)),
                o
              );
            }
            add(e) {
              (0, T._)(this, f).has(e.queryHash) ||
                ((0, T._)(this, f).set(e.queryHash, e),
                this.notify({ type: "added", query: e }));
            }
            remove(e) {
              let t = (0, T._)(this, f).get(e.queryHash);
              t &&
                (e.destroy(),
                t === e && (0, T._)(this, f).delete(e.queryHash),
                this.notify({ type: "removed", query: e }));
            }
            clear() {
              P.V.batch(() => {
                this.getAll().forEach((e) => {
                  this.remove(e);
                });
              });
            }
            get(e) {
              return (0, T._)(this, f).get(e);
            }
            getAll() {
              return [...(0, T._)(this, f).values()];
            }
            find(e) {
              let t = { exact: !0, ...e };
              return this.getAll().find((e) => (0, O._x)(t, e));
            }
            findAll() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = this.getAll();
              return Object.keys(e).length > 0
                ? t.filter((t) => (0, O._x)(e, t))
                : t;
            }
            notify(e) {
              P.V.batch(() => {
                this.listeners.forEach((t) => {
                  t(e);
                });
              });
            }
            onFocus() {
              P.V.batch(() => {
                this.getAll().forEach((e) => {
                  e.onFocus();
                });
              });
            }
            onOnline() {
              P.V.batch(() => {
                this.getAll().forEach((e) => {
                  e.onOnline();
                });
              });
            }
            constructor(e = {}) {
              super(),
                (0, k._)(this, f, { writable: !0, value: void 0 }),
                (this.config = e),
                (0, F._)(this, f, new Map());
            }
          }),
        W = n(1793),
        U =
          ((y = new WeakMap()),
          (g = new WeakMap()),
          (p = new WeakMap()),
          class extends Q.l {
            build(e, t, n) {
              let r = new W.m({
                mutationCache: this,
                mutationId: ++x(this, g).value,
                options: e.defaultMutationOptions(t),
                state: n,
              });
              return this.add(r), r;
            }
            add(e) {
              (0, T._)(this, y).push(e),
                this.notify({ type: "added", mutation: e });
            }
            remove(e) {
              (0, F._)(
                this,
                y,
                (0, T._)(this, y).filter((t) => t !== e)
              ),
                this.notify({ type: "removed", mutation: e });
            }
            clear() {
              P.V.batch(() => {
                (0, T._)(this, y).forEach((e) => {
                  this.remove(e);
                });
              });
            }
            getAll() {
              return (0, T._)(this, y);
            }
            find(e) {
              let t = { exact: !0, ...e };
              return (0, T._)(this, y).find((e) => (0, O.X7)(t, e));
            }
            findAll() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (0, T._)(this, y).filter((t) => (0, O.X7)(e, t));
            }
            notify(e) {
              P.V.batch(() => {
                this.listeners.forEach((t) => {
                  t(e);
                });
              });
            }
            resumePausedMutations() {
              var e;
              return (
                (0, F._)(
                  this,
                  p,
                  (null !== (e = (0, T._)(this, p)) && void 0 !== e
                    ? e
                    : Promise.resolve()
                  )
                    .then(() => {
                      let e = (0, T._)(this, y).filter((e) => e.state.isPaused);
                      return P.V.batch(() =>
                        e.reduce(
                          (e, t) => e.then(() => t.continue().catch(O.ZT)),
                          Promise.resolve()
                        )
                      );
                    })
                    .then(() => {
                      (0, F._)(this, p, void 0);
                    })
                ),
                (0, T._)(this, p)
              );
            }
            constructor(e = {}) {
              super(),
                (0, k._)(this, y, { writable: !0, value: void 0 }),
                (0, k._)(this, g, { writable: !0, value: void 0 }),
                (0, k._)(this, p, { writable: !0, value: void 0 }),
                (this.config = e),
                (0, F._)(this, y, []),
                (0, F._)(this, g, 0);
            }
          }),
        Z = n(79555),
        G = n(17211),
        H = n(65612),
        V =
          ((m = new WeakMap()),
          (b = new WeakMap()),
          (w = new WeakMap()),
          (C = new WeakMap()),
          (_ = new WeakMap()),
          (q = new WeakMap()),
          (E = new WeakMap()),
          (I = new WeakMap()),
          class {
            mount() {
              x(this, q).value++,
                1 === (0, T._)(this, q) &&
                  ((0, F._)(
                    this,
                    E,
                    Z.j.subscribe(() => {
                      Z.j.isFocused() &&
                        (this.resumePausedMutations(),
                        (0, T._)(this, m).onFocus());
                    })
                  ),
                  (0, F._)(
                    this,
                    I,
                    G.N.subscribe(() => {
                      G.N.isOnline() &&
                        (this.resumePausedMutations(),
                        (0, T._)(this, m).onOnline());
                    })
                  ));
            }
            unmount() {
              var e, t;
              x(this, q).value--,
                0 === (0, T._)(this, q) &&
                  (null === (e = (0, T._)(this, E)) ||
                    void 0 === e ||
                    e.call(this),
                  (0, F._)(this, E, void 0),
                  null === (t = (0, T._)(this, I)) ||
                    void 0 === t ||
                    t.call(this),
                  (0, F._)(this, I, void 0));
            }
            isFetching(e) {
              return (0, T._)(this, m).findAll({
                ...e,
                fetchStatus: "fetching",
              }).length;
            }
            isMutating(e) {
              return (0, T._)(this, b).findAll({ ...e, status: "pending" })
                .length;
            }
            getQueryData(e) {
              var t;
              let n = this.defaultQueryOptions({ queryKey: e });
              return null === (t = (0, T._)(this, m).get(n.queryHash)) ||
                void 0 === t
                ? void 0
                : t.state.data;
            }
            ensureQueryData(e) {
              let t = this.getQueryData(e.queryKey);
              return void 0 !== t ? Promise.resolve(t) : this.fetchQuery(e);
            }
            getQueriesData(e) {
              return this.getQueryCache()
                .findAll(e)
                .map((e) => {
                  let { queryKey: t, state: n } = e;
                  return [t, n.data];
                });
            }
            setQueryData(e, t, n) {
              let r = this.defaultQueryOptions({ queryKey: e }),
                i = (0, T._)(this, m).get(r.queryHash),
                a = null == i ? void 0 : i.state.data,
                o = (0, O.SE)(t, a);
              if (void 0 !== o)
                return (0, T._)(this, m)
                  .build(this, r)
                  .setData(o, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
              return P.V.batch(() =>
                this.getQueryCache()
                  .findAll(e)
                  .map((e) => {
                    let { queryKey: r } = e;
                    return [r, this.setQueryData(r, t, n)];
                  })
              );
            }
            getQueryState(e) {
              var t;
              let n = this.defaultQueryOptions({ queryKey: e });
              return null === (t = (0, T._)(this, m).get(n.queryHash)) ||
                void 0 === t
                ? void 0
                : t.state;
            }
            removeQueries(e) {
              let t = (0, T._)(this, m);
              P.V.batch(() => {
                t.findAll(e).forEach((e) => {
                  t.remove(e);
                });
              });
            }
            resetQueries(e, t) {
              let n = (0, T._)(this, m),
                r = { type: "active", ...e };
              return P.V.batch(
                () => (
                  n.findAll(e).forEach((e) => {
                    e.reset();
                  }),
                  this.refetchQueries(r, t)
                )
              );
            }
            cancelQueries() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = { revert: !0, ...t };
              return Promise.all(
                P.V.batch(() =>
                  (0, T._)(this, m)
                    .findAll(e)
                    .map((e) => e.cancel(n))
                )
              )
                .then(O.ZT)
                .catch(O.ZT);
            }
            invalidateQueries() {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return P.V.batch(() => {
                var n, r;
                if (
                  ((0, T._)(this, m)
                    .findAll(e)
                    .forEach((e) => {
                      e.invalidate();
                    }),
                  "none" === e.refetchType)
                )
                  return Promise.resolve();
                let i = {
                  ...e,
                  type:
                    null !==
                      (r =
                        null !== (n = e.refetchType) && void 0 !== n
                          ? n
                          : e.type) && void 0 !== r
                      ? r
                      : "active",
                };
                return this.refetchQueries(i, t);
              });
            }
            refetchQueries() {
              var e;
              let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = {
                  ...n,
                  cancelRefetch:
                    null === (e = null == n ? void 0 : n.cancelRefetch) ||
                    void 0 === e ||
                    e,
                };
              return Promise.all(
                P.V.batch(() =>
                  (0, T._)(this, m)
                    .findAll(t)
                    .filter((e) => !e.isDisabled())
                    .map((e) => {
                      let t = e.fetch(void 0, r);
                      return (
                        r.throwOnError || (t = t.catch(O.ZT)),
                        "paused" === e.state.fetchStatus ? Promise.resolve() : t
                      );
                    })
                )
              ).then(O.ZT);
            }
            fetchQuery(e) {
              let t = this.defaultQueryOptions(e);
              void 0 === t.retry && (t.retry = !1);
              let n = (0, T._)(this, m).build(this, t);
              return n.isStaleByTime(t.staleTime)
                ? n.fetch(t)
                : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
              return this.fetchQuery(e).then(O.ZT).catch(O.ZT);
            }
            fetchInfiniteQuery(e) {
              return (e.behavior = (0, H.Gm)(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
              return this.fetchInfiniteQuery(e).then(O.ZT).catch(O.ZT);
            }
            resumePausedMutations() {
              return (0, T._)(this, b).resumePausedMutations();
            }
            getQueryCache() {
              return (0, T._)(this, m);
            }
            getMutationCache() {
              return (0, T._)(this, b);
            }
            getDefaultOptions() {
              return (0, T._)(this, w);
            }
            setDefaultOptions(e) {
              (0, F._)(this, w, e);
            }
            setQueryDefaults(e, t) {
              (0, T._)(this, C).set((0, O.Ym)(e), {
                queryKey: e,
                defaultOptions: t,
              });
            }
            getQueryDefaults(e) {
              let t = [...(0, T._)(this, C).values()],
                n = {};
              return (
                t.forEach((t) => {
                  (0, O.to)(e, t.queryKey) &&
                    (n = { ...n, ...t.defaultOptions });
                }),
                n
              );
            }
            setMutationDefaults(e, t) {
              (0, T._)(this, _).set((0, O.Ym)(e), {
                mutationKey: e,
                defaultOptions: t,
              });
            }
            getMutationDefaults(e) {
              let t = [...(0, T._)(this, _).values()],
                n = {};
              return (
                t.forEach((t) => {
                  (0, O.to)(e, t.mutationKey) &&
                    (n = { ...n, ...t.defaultOptions });
                }),
                n
              );
            }
            defaultQueryOptions(e) {
              if (e._defaulted) return e;
              let t = {
                ...(0, T._)(this, w).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0,
              };
              return (
                t.queryHash || (t.queryHash = (0, O.Rm)(t.queryKey, t)),
                void 0 === t.refetchOnReconnect &&
                  (t.refetchOnReconnect = "always" !== t.networkMode),
                void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
                void 0 === t.networkMode &&
                  t.persister &&
                  (t.networkMode = "offlineFirst"),
                t
              );
            }
            defaultMutationOptions(e) {
              return (null == e ? void 0 : e._defaulted)
                ? e
                : {
                    ...(0, T._)(this, w).mutations,
                    ...((null == e ? void 0 : e.mutationKey) &&
                      this.getMutationDefaults(e.mutationKey)),
                    ...e,
                    _defaulted: !0,
                  };
            }
            clear() {
              (0, T._)(this, m).clear(), (0, T._)(this, b).clear();
            }
            constructor(e = {}) {
              (0, k._)(this, m, { writable: !0, value: void 0 }),
                (0, k._)(this, b, { writable: !0, value: void 0 }),
                (0, k._)(this, w, { writable: !0, value: void 0 }),
                (0, k._)(this, C, { writable: !0, value: void 0 }),
                (0, k._)(this, _, { writable: !0, value: void 0 }),
                (0, k._)(this, q, { writable: !0, value: void 0 }),
                (0, k._)(this, E, { writable: !0, value: void 0 }),
                (0, k._)(this, I, { writable: !0, value: void 0 }),
                (0, F._)(this, m, e.queryCache || new L()),
                (0, F._)(this, b, e.mutationCache || new U()),
                (0, F._)(this, w, e.defaultOptions || {}),
                (0, F._)(this, C, new Map()),
                (0, F._)(this, _, new Map()),
                (0, F._)(this, q, 0);
            }
          });
    },
    20987: function (e, t, n) {
      "use strict";
      function r(e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
          t = e.getClient(n);
        } catch (e) {}
        return t;
      }
      n.d(t, {
        s: function () {
          return r;
        },
      });
    },
    73645: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return y;
        },
      });
      var r = n(10035),
        i = n(27470),
        a = n(3551),
        o = n(73621),
        u = n(71264),
        s = n(15578),
        l = n(96316),
        c = n(8291),
        d = n(24761),
        h = n(31935),
        f = n(96130);
      async function y(e, t) {
        let {
            blockNumber: n,
            blockTag: y,
            coinType: g,
            name: p,
            gatewayUrls: m,
            strict: b,
            universalResolverAddress: w,
          } = t,
          C = w;
        if (!C) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          C = (0, o.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let t = (0, a.R)({
              abi: r.X$,
              functionName: "addr",
              ...(null != g
                ? { args: [(0, c.V)(p), BigInt(g)] }
                : { args: [(0, c.V)(p)] }),
            }),
            o = {
              address: C,
              abi: r.k3,
              functionName: "resolve",
              args: [(0, s.NC)((0, d.T)(p)), t],
              blockNumber: n,
              blockTag: y,
            },
            l = (0, h.s)(e, f.L, "readContract"),
            b = m ? await l({ ...o, args: [...o.args, m] }) : await l(o);
          if ("0x" === b[0]) return null;
          let w = (0, i.k)({
            abi: r.X$,
            args: null != g ? [(0, c.V)(p), BigInt(g)] : void 0,
            functionName: "addr",
            data: b[0],
          });
          if ("0x" === w || "0x00" === (0, u.f)(w)) return null;
          return w;
        } catch (e) {
          if (b) throw e;
          if ((0, l.c)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    23519: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var r = n(73621),
        i = n(15578),
        a = n(24761),
        o = n(31935),
        u = n(96130);
      async function s(e, t) {
        let {
            blockNumber: n,
            blockTag: s,
            name: l,
            universalResolverAddress: c,
          } = t,
          d = c;
        if (!d) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          d = (0, r.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let [h] = await (0, o.s)(
          e,
          u.L,
          "readContract"
        )({
          address: d,
          abi: [
            {
              inputs: [{ type: "bytes" }],
              name: "findResolver",
              outputs: [{ type: "address" }, { type: "bytes32" }],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "findResolver",
          args: [(0, i.NC)((0, a.T)(l))],
          blockNumber: n,
          blockTag: s,
        });
        return h;
      }
    },
    10725: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return o;
        },
      });
      var r = n(75358),
        i = n(15578),
        a = n(44069);
      async function o(e, t) {
        let {
            address: n,
            abi: o,
            args: u,
            eventName: s,
            fromBlock: l,
            strict: c,
            toBlock: d,
          } = t,
          h = (0, a.g)(e, { method: "eth_newFilter" }),
          f = s ? (0, r.O)({ abi: o, args: u, eventName: s }) : void 0,
          y = await e.request({
            method: "eth_newFilter",
            params: [
              {
                address: n,
                fromBlock: "bigint" == typeof l ? (0, i.eC)(l) : l,
                toBlock: "bigint" == typeof d ? (0, i.eC)(d) : d,
                topics: f,
              },
            ],
          });
        return {
          abi: o,
          args: u,
          eventName: s,
          id: y,
          request: h(y),
          strict: !!c,
          type: "event",
        };
      }
    },
    15161: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(44069);
      async function i(e) {
        let t = (0, r.g)(e, { method: "eth_newPendingTransactionFilter" }),
          n = await e.request({ method: "eth_newPendingTransactionFilter" });
        return { id: n, request: t(n), type: "transaction" };
      }
    },
    97695: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var r = n(55936),
        i = n(15578);
      async function a(e) {
        let t,
          {
            blockHash: n,
            blockNumber: a,
            blockTag: o = "latest",
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          u = void 0 !== a ? (0, i.eC)(a) : void 0;
        return (
          (t = n
            ? await e.request({
                method: "eth_getBlockTransactionCountByHash",
                params: [n],
              })
            : await e.request({
                method: "eth_getBlockTransactionCountByNumber",
                params: [u || o],
              })),
          (0, r.ly)(t)
        );
      }
    },
    38388: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return i;
        },
      });
      var r = n(15578);
      async function i(e, t) {
        let { address: n, blockNumber: i, blockTag: a = "latest" } = t,
          o = void 0 !== i ? (0, r.eC)(i) : void 0,
          u = await e.request({ method: "eth_getCode", params: [n, o || a] });
        if ("0x" !== u) return u;
      }
    },
    60776: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return o;
        },
      });
      var r = n(52753),
        i = n(31935),
        a = n(81875);
      async function o(e, t) {
        let {
            abi: n,
            address: o,
            args: u,
            blockHash: s,
            eventName: l,
            fromBlock: c,
            toBlock: d,
            strict: h,
          } = t,
          f = l ? (0, r.mE)({ abi: n, name: l }) : void 0,
          y = f ? void 0 : n.filter((e) => "event" === e.type);
        return (0, i.s)(
          e,
          a.y,
          "getLogs"
        )({
          address: o,
          args: u,
          blockHash: s,
          event: f,
          events: y,
          fromBlock: c,
          toBlock: d,
          strict: h,
        });
      }
    },
    80215: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(15578);
      async function i(e, t) {
        var n, i;
        let {
            blockCount: a,
            blockNumber: o,
            blockTag: u = "latest",
            rewardPercentiles: s,
          } = t,
          l = o ? (0, r.eC)(o) : void 0;
        return {
          baseFeePerGas: (n = await e.request({
            method: "eth_feeHistory",
            params: [(0, r.eC)(a), l || u, s],
          })).baseFeePerGas.map((e) => BigInt(e)),
          gasUsedRatio: n.gasUsedRatio,
          oldestBlock: BigInt(n.oldestBlock),
          reward:
            null === (i = n.reward) || void 0 === i
              ? void 0
              : i.map((e) => e.map((e) => BigInt(e))),
        };
      }
    },
    7436: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(43179),
        i = n(6819);
      async function a(e, t) {
        let { filter: n } = t,
          a = "strict" in n && n.strict,
          o = await n.request({
            method: "eth_getFilterChanges",
            params: [n.id],
          });
        if ("string" == typeof o[0]) return o;
        let u = o.map((e) => (0, i.U)(e));
        return "abi" in n && n.abi
          ? (0, r.h)({ abi: n.abi, logs: u, strict: a })
          : u;
      }
    },
    81875: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return u;
        },
      });
      var r = n(75358),
        i = n(43179),
        a = n(15578),
        o = n(6819);
      async function u(e) {
        let {
            address: t,
            blockHash: n,
            fromBlock: u,
            toBlock: s,
            event: l,
            events: c,
            args: d,
            strict: h,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          f = null != c ? c : l ? [l] : void 0,
          y = [];
        f &&
          ((y = [
            f.flatMap((e) =>
              (0, r.O)({ abi: [e], eventName: e.name, args: d })
            ),
          ]),
          l && (y = y[0]));
        let g = (
          n
            ? await e.request({
                method: "eth_getLogs",
                params: [{ address: t, topics: y, blockHash: n }],
              })
            : await e.request({
                method: "eth_getLogs",
                params: [
                  {
                    address: t,
                    topics: y,
                    fromBlock: "bigint" == typeof u ? (0, a.eC)(u) : u,
                    toBlock: "bigint" == typeof s ? (0, a.eC)(s) : s,
                  },
                ],
              })
        ).map((e) => (0, o.U)(e));
        return f ? (0, i.h)({ abi: f, logs: g, strict: null != h && h }) : g;
      }
    },
    40523: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return a;
        },
      });
      var r = n(15578),
        i = n(55936);
      async function a(e, t) {
        var n;
        let { address: a, blockNumber: o, blockTag: u, storageKeys: s } = t,
          l = void 0 !== o ? (0, r.eC)(o) : void 0;
        return {
          ...(n = await e.request({
            method: "eth_getProof",
            params: [a, s, l || (null != u ? u : "latest")],
          })),
          balance: n.balance ? BigInt(n.balance) : void 0,
          nonce: n.nonce ? (0, i.ly)(n.nonce) : void 0,
          storageProof: n.storageProof
            ? n.storageProof.map((e) => ({ ...e, value: BigInt(e.value) }))
            : void 0,
        };
      }
    },
    14566: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = n(15578);
      async function i(e, t) {
        let { address: n, blockNumber: i, blockTag: a = "latest", slot: o } = t,
          u = void 0 !== i ? (0, r.eC)(i) : void 0;
        return await e.request({
          method: "eth_getStorageAt",
          params: [n, o, u || a],
        });
      }
    },
    82861: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(31935),
        i = n(86395),
        a = n(42624);
      async function o(e, t) {
        let { hash: n, transactionReceipt: o } = t,
          [u, s] = await Promise.all([
            (0, r.s)(e, i.z, "getBlockNumber")({}),
            n ? (0, r.s)(e, a.f, "getBlockNumber")({ hash: n }) : void 0,
          ]),
          l =
            (null == o ? void 0 : o.blockNumber) ||
            (null == s ? void 0 : s.blockNumber);
        return l ? u - l + 1n : 0n;
      }
    },
    84943: function (e, t, n) {
      "use strict";
      async function r(e, t) {
        let { filter: n } = t;
        return n.request({ method: "eth_uninstallFilter", params: [n.id] });
      }
      n.d(t, {
        W: function () {
          return r;
        },
      });
    },
    81516: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(10035),
        i = n(47115),
        a = n(87642),
        o = n(73596),
        u = n(21230),
        s = n(31935),
        l = n(15578),
        c = n(84379),
        d = n(8302);
      async function h(e, t) {
        let { address: n, hash: h, signature: f, ...y } = t,
          g = (0, u.v)(f) ? f : (0, l.NC)(f);
        try {
          let { data: t } = await (0, s.s)(
            e,
            d.RE,
            "call"
          )({
            data: (0, c.w)({
              abi: r.$o,
              args: [n, h, g],
              bytecode:
                "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572",
            }),
            ...y,
          });
          return (function (e, t) {
            let n = (0, u.v)(e) ? (0, o.O0)(e) : e,
              r = (0, u.v)(t) ? (0, o.O0)(t) : t;
            return (0, a.Wd)(n, r);
          })(null != t ? t : "0x0", "0x1");
        } catch (e) {
          if (e instanceof i.cg) return !1;
          throw e;
        }
      }
    },
    21457: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return u;
        },
      });
      var r = n(3556),
        i = n(73596),
        a = n(30206),
        o = n(81516);
      async function u(e, t) {
        let { address: n, message: u, signature: s, ...l } = t,
          c = (function (e, t) {
            let n =
                "string" == typeof e
                  ? (0, i.qX)(e)
                  : e.raw instanceof Uint8Array
                  ? e.raw
                  : (0, i.O0)(e.raw),
              o = (0, i.qX)(
                "".concat("\x19Ethereum Signed Message:\n").concat(n.length)
              );
            return (0, a.w)((0, r.zo)([o, n]), void 0);
          })(u);
        return (0, o.Z)(e, { address: n, hash: c, signature: s, ...l });
      }
    },
    88923: function (e, t, n) {
      "use strict";
      n.d(t, {
        B: function () {
          return c;
        },
      });
      var r = n(8580),
        i = n(3556),
        a = n(15578),
        o = n(30206),
        u = n(94237);
      function s(e) {
        let { data: t, primaryType: n, types: i } = e,
          u = (function e(t) {
            let { data: n, primaryType: i, types: u } = t,
              s = [{ type: "bytes32" }],
              l = [
                (function (e) {
                  let { primaryType: t, types: n } = e,
                    r = (0, a.NC)(
                      (function (e) {
                        let { primaryType: t, types: n } = e,
                          r = "",
                          i = (function e(t) {
                            let { primaryType: n, types: r } = t,
                              i =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : new Set(),
                              a = n.match(/^\w*/u),
                              o = null == a ? void 0 : a[0];
                            if (i.has(o) || void 0 === r[o]) return i;
                            for (let t of (i.add(o), r[o]))
                              e({ primaryType: t.type, types: r }, i);
                            return i;
                          })({ primaryType: t, types: n });
                        for (let e of (i.delete(t),
                        [t, ...Array.from(i).sort()]))
                          r += "".concat(e, "(").concat(
                            n[e]
                              .map((e) => {
                                let { name: t, type: n } = e;
                                return "".concat(n, " ").concat(t);
                              })
                              .join(","),
                            ")"
                          );
                        return r;
                      })({ primaryType: t, types: n })
                    );
                  return (0, o.w)(r);
                })({ primaryType: i, types: u }),
              ];
            for (let t of u[i]) {
              let [i, c] = (function t(n) {
                let { types: i, name: u, type: s, value: l } = n;
                if (void 0 !== i[s])
                  return [
                    { type: "bytes32" },
                    (0, o.w)(e({ data: l, primaryType: s, types: i })),
                  ];
                if ("bytes" === s) {
                  let e = l.length % 2 ? "0" : "";
                  return (
                    (l = "0x".concat(e + l.slice(2))),
                    [{ type: "bytes32" }, (0, o.w)(l)]
                  );
                }
                if ("string" === s)
                  return [{ type: "bytes32" }, (0, o.w)((0, a.NC)(l))];
                if (s.lastIndexOf("]") === s.length - 1) {
                  let e = s.slice(0, s.lastIndexOf("[")),
                    n = l.map((n) =>
                      t({ name: u, type: e, types: i, value: n })
                    );
                  return [
                    { type: "bytes32" },
                    (0, o.w)(
                      (0, r.E)(
                        n.map((e) => {
                          let [t] = e;
                          return t;
                        }),
                        n.map((e) => {
                          let [, t] = e;
                          return t;
                        })
                      )
                    ),
                  ];
                }
                return [{ type: s }, l];
              })({ types: u, name: t.name, type: t.type, value: n[t.name] });
              s.push(i), l.push(c);
            }
            return (0, r.E)(s, l);
          })({ data: t, primaryType: n, types: i });
        return (0, o.w)(u);
      }
      var l = n(81516);
      async function c(e, t) {
        let {
            address: n,
            signature: r,
            message: a,
            primaryType: c,
            types: d,
            domain: h,
            ...f
          } = t,
          y = (function (e) {
            let { domain: t = {}, message: n, primaryType: r } = e,
              a = { EIP712Domain: (0, u.cj)({ domain: t }), ...e.types };
            (0, u.iC)({ domain: t, message: n, primaryType: r, types: a });
            let l = ["0x1901"];
            return (
              t &&
                l.push(
                  (function (e) {
                    let { domain: t, types: n } = e;
                    return s({
                      data: t,
                      primaryType: "EIP712Domain",
                      types: n,
                    });
                  })({ domain: t, types: a })
                ),
              "EIP712Domain" !== r &&
                l.push(s({ data: n, primaryType: r, types: a })),
              (0, o.w)((0, i.zo)(l))
            );
          })({ message: a, primaryType: c, types: d, domain: h });
        return (0, l.Z)(e, { address: n, hash: y, signature: r, ...f });
      }
    },
    17448: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return l;
        },
      });
      var r = n(44324),
        i = n(31935),
        a = n(85583),
        o = n(33e3),
        u = n(92791),
        s = n(4781);
      function l(e, t) {
        let n,
          l,
          c,
          {
            blockTag: d = "latest",
            emitMissed: h = !1,
            emitOnBegin: f = !1,
            onBlock: y,
            onError: g,
            includeTransactions: p,
            poll: m,
            pollingInterval: b = e.pollingInterval,
          } = t,
          w = void 0 !== m ? m : "webSocket" !== e.transport.type,
          C = null != p && p;
        return w
          ? (() => {
              let t = (0, u.P)(["watchBlocks", e.uid, h, f, C, b]);
              return (0, a.N7)(t, { onBlock: y, onError: g }, (t) =>
                (0, o.$)(
                  async () => {
                    try {
                      let n = await (0, i.s)(
                        e,
                        s.Q,
                        "getBlock"
                      )({ blockTag: d, includeTransactions: C });
                      if (n.number && (null == c ? void 0 : c.number)) {
                        if (n.number === c.number) return;
                        if (n.number - c.number > 1 && h)
                          for (
                            let r = (null == c ? void 0 : c.number) + 1n;
                            r < n.number;
                            r++
                          ) {
                            let n = await (0, i.s)(
                              e,
                              s.Q,
                              "getBlock"
                            )({ blockNumber: r, includeTransactions: C });
                            t.onBlock(n, c), (c = n);
                          }
                      }
                      ((null == c ? void 0 : c.number) &&
                        ("pending" !== d || (null == n ? void 0 : n.number)) &&
                        (!n.number || !(n.number > c.number))) ||
                        (t.onBlock(n, c), (c = n));
                    } catch (e) {
                      var n;
                      null === (n = t.onError) || void 0 === n || n.call(t, e);
                    }
                  },
                  { emitOnBegin: f, interval: b }
                )
              );
            })()
          : ((n = !0),
            (l = () => (n = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newHeads"],
                  onData(t) {
                    var i, a, o;
                    if (!n) return;
                    let u = (
                      (null === (o = e.chain) || void 0 === o
                        ? void 0
                        : null === (a = o.formatters) || void 0 === a
                        ? void 0
                        : null === (i = a.block) || void 0 === i
                        ? void 0
                        : i.format) || r.Z
                    )(t.result);
                    y(u, c), (c = u);
                  },
                  onError(e) {
                    null == g || g(e);
                  },
                });
                (l = t), n || l();
              } catch (e) {
                null == g || g(e);
              }
            })(),
            l);
      }
    },
    8553: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return m;
        },
      });
      var r = n(45581),
        i = n(24473),
        a = n(4866),
        o = n(75358),
        u = n(6819),
        s = n(31935),
        l = n(85583),
        c = n(33e3),
        d = n(92791),
        h = n(10725),
        f = n(86395),
        y = n(60776),
        g = n(7436),
        p = n(84943);
      function m(e, t) {
        let n, m;
        let {
          abi: b,
          address: w,
          args: C,
          batch: _ = !0,
          eventName: q,
          onError: E,
          onLogs: I,
          poll: T,
          pollingInterval: k = e.pollingInterval,
          strict: F,
        } = t;
        return (void 0 !== T ? T : "webSocket" !== e.transport.type)
          ? (() => {
              let t = (0, d.P)(["watchContractEvent", w, C, _, e.uid, q, k]),
                n = null != F && F;
              return (0, l.N7)(t, { onLogs: I, onError: E }, (t) => {
                let r, a;
                let o = !1,
                  u = (0, c.$)(
                    async () => {
                      if (!o) {
                        try {
                          a = await (0, s.s)(
                            e,
                            h.A,
                            "createContractEventFilter"
                          )({
                            abi: b,
                            address: w,
                            args: C,
                            eventName: q,
                            strict: n,
                          });
                        } catch (e) {}
                        o = !0;
                        return;
                      }
                      try {
                        let i;
                        if (a)
                          i = await (0, s.s)(
                            e,
                            g.K,
                            "getFilterChanges"
                          )({ filter: a });
                        else {
                          let t = await (0, s.s)(e, f.z, "getBlockNumber")({});
                          (i =
                            r && r !== t
                              ? await (0, s.s)(
                                  e,
                                  y.m,
                                  "getContractEvents"
                                )({
                                  abi: b,
                                  address: w,
                                  args: C,
                                  eventName: q,
                                  fromBlock: r + 1n,
                                  toBlock: t,
                                  strict: n,
                                })
                              : []),
                            (r = t);
                        }
                        if (0 === i.length) return;
                        if (_) t.onLogs(i);
                        else for (let e of i) t.onLogs([e]);
                      } catch (e) {
                        var u;
                        a && e instanceof i.yR && (o = !1),
                          null === (u = t.onError) ||
                            void 0 === u ||
                            u.call(t, e);
                      }
                    },
                    { emitOnBegin: !0, interval: k }
                  );
                return async () => {
                  a &&
                    (await (0, s.s)(e, p.W, "uninstallFilter")({ filter: a })),
                    u();
                };
              });
            })()
          : ((n = !0),
            (m = () => (n = !1)),
            (async () => {
              try {
                let t = q ? (0, o.O)({ abi: b, eventName: q, args: C }) : [],
                  { unsubscribe: i } = await e.transport.subscribe({
                    params: ["logs", { address: w, topics: t }],
                    onData(e) {
                      if (!n) return;
                      let t = e.result;
                      try {
                        let { eventName: e, args: n } = (0, a.F)({
                            abi: b,
                            data: t.data,
                            topics: t.topics,
                            strict: F,
                          }),
                          r = (0, u.U)(t, { args: n, eventName: e });
                        I([r]);
                      } catch (o) {
                        let e, n;
                        if (o instanceof r.SM || o instanceof r.Gy) {
                          var i;
                          if (F) return;
                          (e = o.abiItem.name),
                            (n =
                              null === (i = o.abiItem.inputs) || void 0 === i
                                ? void 0
                                : i.some((e) => !("name" in e && e.name)));
                        }
                        let a = (0, u.U)(t, {
                          args: n ? [] : {},
                          eventName: e,
                        });
                        I([a]);
                      }
                    },
                    onError(e) {
                      null == E || E(e);
                    },
                  });
                (m = i), n || m();
              } catch (e) {
                null == E || E(e);
              }
            })(),
            m);
      }
    },
    67690: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return c;
        },
      });
      var r = n(31935),
        i = n(85583),
        a = n(33e3),
        o = n(92791),
        u = n(15161),
        s = n(7436),
        l = n(84943);
      function c(e, t) {
        let n,
          c,
          {
            batch: d = !0,
            onError: h,
            onTransactions: f,
            poll: y,
            pollingInterval: g = e.pollingInterval,
          } = t;
        return (void 0 !== y ? y : "webSocket" !== e.transport.type)
          ? (() => {
              let t = (0, o.P)(["watchPendingTransactions", e.uid, d, g]);
              return (0, i.N7)(t, { onTransactions: f, onError: h }, (t) => {
                let n;
                let i = (0, a.$)(
                  async () => {
                    try {
                      if (!n)
                        try {
                          n = await (0, r.s)(
                            e,
                            u.W,
                            "createPendingTransactionFilter"
                          )({});
                          return;
                        } catch (e) {
                          throw (i(), e);
                        }
                      let a = await (0, r.s)(
                        e,
                        s.K,
                        "getFilterChanges"
                      )({ filter: n });
                      if (0 === a.length) return;
                      if (d) t.onTransactions(a);
                      else for (let e of a) t.onTransactions([e]);
                    } catch (e) {
                      var a;
                      null === (a = t.onError) || void 0 === a || a.call(t, e);
                    }
                  },
                  { emitOnBegin: !0, interval: g }
                );
                return async () => {
                  n &&
                    (await (0, r.s)(e, l.W, "uninstallFilter")({ filter: n })),
                    i();
                };
              });
            })()
          : ((n = !0),
            (c = () => (n = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newPendingTransactions"],
                  onData(e) {
                    if (!n) return;
                    let t = e.result;
                    f([t]);
                  },
                  onError(e) {
                    null == h || h(e);
                  },
                });
                (c = t), n || c();
              } catch (e) {
                null == h || h(e);
              }
            })(),
            c);
      }
    },
    78606: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return s;
        },
      });
      var r = n(79561),
        i = n(90444),
        a = n(21230),
        o = n(92791),
        u = n(94237);
      async function s(e, t) {
        let {
          account: n = e.account,
          domain: s,
          message: l,
          primaryType: c,
        } = t;
        if (!n)
          throw new i.o({ docsPath: "/docs/actions/wallet/signTypedData" });
        let d = (0, r.T)(n),
          h = { EIP712Domain: (0, u.cj)({ domain: s }), ...t.types };
        if (
          ((0, u.iC)({ domain: s, message: l, primaryType: c, types: h }),
          "local" === d.type)
        )
          return d.signTypedData({
            domain: s,
            message: l,
            primaryType: c,
            types: h,
          });
        let f = (0, o.P)(
          { domain: null != s ? s : {}, message: l, primaryType: c, types: h },
          (e, t) => ((0, a.v)(t) ? t.toLowerCase() : t)
        );
        return e.request(
          { method: "eth_signTypedData_v4", params: [d.address, f] },
          { retryCount: 0 }
        );
      }
    },
    4866: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return c;
        },
      });
      var r = n(45581),
        i = n(95305),
        a = n(58113),
        o = n(92155),
        u = n(94403),
        s = n(67705);
      let l = "/docs/contract/decodeEventLog";
      function c(e) {
        let { abi: t, data: n, strict: c, topics: d } = e,
          h = null == c || c,
          [f, ...y] = d;
        if (!f) throw new r.FM({ docsPath: l });
        let g = t.find(
          (e) => "event" === e.type && f === (0, a.n)((0, s.t)(e))
        );
        if (!(g && "name" in g) || "event" !== g.type)
          throw new r.lC(f, { docsPath: l });
        let { name: p, inputs: m } = g,
          b = null == m ? void 0 : m.some((e) => !("name" in e && e.name)),
          w = b ? [] : {},
          C = m.filter((e) => "indexed" in e && e.indexed);
        for (let e = 0; e < C.length; e++) {
          let t = C[e],
            n = y[e];
          if (!n) throw new r.Gy({ abiItem: g, param: t });
          w[t.name || e] = (function (e) {
            let { param: t, value: n } = e;
            return "string" === t.type ||
              "bytes" === t.type ||
              "tuple" === t.type ||
              t.type.match(/^(.*)\[(\d+)?\]$/)
              ? n
              : ((0, u.r)([t], n) || [])[0];
          })({ param: t, value: n });
        }
        let _ = m.filter((e) => !("indexed" in e && e.indexed));
        if (_.length > 0) {
          if (n && "0x" !== n)
            try {
              let e = (0, u.r)(_, n);
              if (e) {
                if (b) w = [...w, ...e];
                else for (let t = 0; t < _.length; t++) w[_[t].name] = e[t];
              }
            } catch (e) {
              if (h) {
                if (e instanceof r.xB || e instanceof o.lQ)
                  throw new r.SM({
                    abiItem: g,
                    data: n,
                    params: _,
                    size: (0, i.d)(n),
                  });
                throw e;
              }
            }
          else if (h)
            throw new r.SM({ abiItem: g, data: "0x", params: _, size: 0 });
        }
        return { eventName: p, args: Object.values(w).length > 0 ? w : void 0 };
      }
    },
    84379: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return u;
        },
      });
      var r = n(45581),
        i = n(3556),
        a = n(8580);
      let o = "/docs/contract/encodeDeployData";
      function u(e) {
        let { abi: t, args: n, bytecode: u } = e;
        if (!n || 0 === n.length) return u;
        let s = t.find((e) => "type" in e && "constructor" === e.type);
        if (!s) throw new r.fM({ docsPath: o });
        if (!("inputs" in s) || !s.inputs || 0 === s.inputs.length)
          throw new r.cO({ docsPath: o });
        let l = (0, a.E)(s.inputs, n);
        return (0, i.SM)([u, l]);
      }
    },
    75358: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return f;
        },
      });
      var r = n(45581),
        i = n(80230);
      class a extends i.G {
        constructor(e) {
          super('Filter type "'.concat(e, '" is not supported.')),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FilterTypeNotSupportedError",
            });
        }
      }
      var o = n(73596),
        u = n(30206),
        s = n(58113),
        l = n(8580),
        c = n(67705),
        d = n(52753);
      let h = "/docs/contract/encodeEventTopics";
      function f(e) {
        let { abi: t, eventName: n, args: i } = e,
          a = t[0];
        if (n) {
          let e = (0, d.mE)({ abi: t, name: n });
          if (!e) throw new r.mv(n, { docsPath: h });
          a = e;
        }
        if ("event" !== a.type) throw new r.mv(void 0, { docsPath: h });
        let o = (0, c.t)(a),
          u = (0, s.n)(o),
          l = [];
        if (i && "inputs" in a) {
          var f, g, p;
          let e =
              null === (f = a.inputs) || void 0 === f
                ? void 0
                : f.filter((e) => "indexed" in e && e.indexed),
            t = Array.isArray(i)
              ? i
              : Object.values(i).length > 0 &&
                null !== (g = null == e ? void 0 : e.map((e) => i[e.name])) &&
                void 0 !== g
              ? g
              : [];
          t.length > 0 &&
            (l =
              null !==
                (p =
                  null == e
                    ? void 0
                    : e.map((e, n) =>
                        Array.isArray(t[n])
                          ? t[n].map((r, i) => y({ param: e, value: t[n][i] }))
                          : t[n]
                          ? y({ param: e, value: t[n] })
                          : null
                      )) && void 0 !== p
                ? p
                : []);
        }
        return [u, ...l];
      }
      function y(e) {
        let { param: t, value: n } = e;
        if ("string" === t.type || "bytes" === t.type)
          return (0, u.w)((0, o.O0)(n));
        if ("tuple" === t.type || t.type.match(/^(.*)\[(\d+)?\]$/))
          throw new a(t.type);
        return (0, l.E)([t], [n]);
      }
    },
    43179: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return a;
        },
      });
      var r = n(45581),
        i = n(4866);
      function a(e) {
        let { abi: t, eventName: n, logs: a, strict: o = !0 } = e;
        return a
          .map((e) => {
            try {
              let r = (0, i.F)({ ...e, abi: t, strict: o });
              if (n && !n.includes(r.eventName)) return null;
              return { ...r, ...e };
            } catch (i) {
              let t, n;
              if (i instanceof r.lC) return null;
              if (i instanceof r.SM || i instanceof r.Gy) {
                var a;
                if (o) return null;
                (t = i.abiItem.name),
                  (n =
                    null === (a = i.abiItem.inputs) || void 0 === a
                      ? void 0
                      : a.some((e) => !("name" in e && e.name)));
              }
              return { ...e, args: n ? [] : {}, eventName: t };
            }
          })
          .filter(Boolean);
      }
    },
    44069: function (e, t, n) {
      "use strict";
      function r(e, t) {
        var n, r;
        let { method: i } = t,
          a = {};
        return (
          "fallback" === e.transport.type &&
            (null === (n = (r = e.transport).onResponse) ||
              void 0 === n ||
              n.call(r, (e) => {
                let { method: t, response: n, status: r, transport: o } = e;
                "success" === r && i === t && (a[n] = o.request);
              })),
          (t) => a[t] || e.request
        );
      }
      n.d(t, {
        g: function () {
          return r;
        },
      });
    },
    94237: function (e, t, n) {
      "use strict";
      n.d(t, {
        cj: function () {
          return d;
        },
        iC: function () {
          return c;
        },
      });
      var r = n(45581),
        i = n(44898),
        a = n(39361),
        o = n(95305),
        u = n(15578);
      let s = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
        l =
          /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
      function c(e) {
        let { domain: t, message: n, primaryType: c, types: d } = e,
          h = (e, t) => {
            for (let n of e) {
              let { name: e, type: c } = n,
                f = t[e],
                y = c.match(l);
              if (y && ("number" == typeof f || "bigint" == typeof f)) {
                let [e, t, n] = y;
                (0, u.eC)(f, { signed: "int" === t, size: parseInt(n) / 8 });
              }
              if ("address" === c && "string" == typeof f && !(0, a.U)(f))
                throw new i.b({ address: f });
              let g = c.match(s);
              if (g) {
                let [e, t] = g;
                if (t && (0, o.d)(f) !== parseInt(t))
                  throw new r.KY({
                    expectedSize: parseInt(t),
                    givenSize: (0, o.d)(f),
                  });
              }
              let p = d[c];
              p && h(p, f);
            }
          };
        d.EIP712Domain && t && h(d.EIP712Domain, t),
          "EIP712Domain" !== c && h(d[c], n);
      }
      function d(e) {
        let { domain: t } = e;
        return [
          "string" == typeof (null == t ? void 0 : t.name) && {
            name: "name",
            type: "string",
          },
          (null == t ? void 0 : t.version) && {
            name: "version",
            type: "string",
          },
          "number" == typeof (null == t ? void 0 : t.chainId) && {
            name: "chainId",
            type: "uint256",
          },
          (null == t ? void 0 : t.verifyingContract) && {
            name: "verifyingContract",
            type: "address",
          },
          (null == t ? void 0 : t.salt) && { name: "salt", type: "bytes32" },
        ].filter(Boolean);
      }
    },
    52354: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useAccountEffect: function () {
            return o;
          },
        });
      var r = n(53350),
        i = n(64090),
        a = n(42887);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onConnect: t, onDisconnect: n } = e,
          o = (0, a.useConfig)(e);
        (0, i.useEffect)(
          () =>
            (0, r.u)(o, {
              onChange(e, r) {
                if (
                  ("reconnecting" === r.status ||
                    ("connecting" === r.status && void 0 === r.address)) &&
                  "connected" === e.status
                ) {
                  let {
                      address: n,
                      addresses: i,
                      chain: a,
                      chainId: o,
                      connector: u,
                    } = e,
                    s = "reconnecting" === r.status || void 0 === r.status;
                  null == t ||
                    t({
                      address: n,
                      addresses: i,
                      chain: a,
                      chainId: o,
                      connector: u,
                      isReconnected: s,
                    });
                } else
                  "connected" === r.status &&
                    "disconnected" === e.status &&
                    (null == n || n());
              },
            }),
          [o, t, n]
        );
      }
    },
    71003: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBalance: function () {
            return s;
          },
        });
      var r = n(5667),
        i = n(73054),
        a = n(38760),
        o = n(43089),
        u = n(42887);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: s, query: l = {} } = n,
          c = (0, u.useConfig)(n),
          d = (0, o.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: i, scopeKey: a, ...o } = n[1];
                if (!i) throw Error("address is required");
                let u = await (0, r.s)(e, { ...o, address: i });
                return null != u ? u : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["balance", (0, i.O)(e)];
              })(t),
            };
          })(c, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(s && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...l, ...h, enabled: f });
      }
    },
    83361: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBlock: function () {
            return h;
          },
        });
      var r = n(47082),
        i = n(4781),
        a = n(37225);
      async function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { chainId: n, ...r } = t,
          o = e.getClient({ chainId: n }),
          u = (0, a.s)(o, i.Q, "getBlock");
        return { ...(await u(r)), chainId: o.chain.id };
      }
      var u = n(73054),
        s = n(38760),
        l = n(43089),
        c = n(42887),
        d = n(35642);
      function h() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: i = {}, watch: a } = n,
          h = (0, c.useConfig)(n),
          f = (0, r.NL)(),
          y = (0, l.useChainId)(),
          g = null !== (e = n.chainId) && void 0 !== e ? e : y,
          p = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: r, ...i } = n[1],
                  a = await o(e, i);
                return null != a ? a : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["block", (0, u.O)(e)];
              })(t),
            };
          })(h, { ...n, chainId: g }),
          m = !!(null === (t = i.enabled) || void 0 === t || t);
        return (
          (0, d.useWatchBlocks)({
            ...{
              config: n.config,
              chainId: n.chainId,
              ...("object" == typeof a ? a : {}),
            },
            enabled: !!(m && ("object" == typeof a ? a.enabled : a)),
            onBlock(e) {
              f.setQueryData(p.queryKey, e);
            },
          }),
          (0, s.aM)({ ...i, ...p, enabled: m })
        );
      }
    },
    60789: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBlockNumber: function () {
            return d;
          },
        });
      var r = n(47082),
        i = n(86395),
        a = n(37225),
        o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887),
        c = n(46533);
      function d() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: d = {}, watch: h } = n,
          f = (0, l.useConfig)(n),
          y = (0, r.NL)(),
          g = (0, s.useChainId)(),
          p = null !== (e = n.chainId) && void 0 !== e ? e : g,
          m = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              gcTime: 0,
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: r, ...o } = n[1],
                  u = await (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { chainId: n, ...r } = t,
                      o = e.getClient({ chainId: n });
                    return (0, a.s)(o, i.z, "getBlockNumber")(r);
                  })(e, o);
                return null != u ? u : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["blockNumber", (0, o.O)(e)];
              })(t),
            };
          })(f, { ...n, chainId: p });
        return (
          (0, c.useWatchBlockNumber)({
            ...{
              config: n.config,
              chainId: n.chainId,
              ...("object" == typeof h ? h : {}),
            },
            enabled: !!(
              (null === (t = d.enabled) || void 0 === t || t) &&
              ("object" == typeof h ? h.enabled : h)
            ),
            onBlockNumber(e) {
              y.setQueryData(m.queryKey, e);
            },
          }),
          (0, u.aM)({ ...d, ...m })
        );
      }
    },
    64640: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBlockTransactionCount: function () {
            return l;
          },
        });
      var r = n(97695),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          l = (0, s.useConfig)(t),
          c = (0, u.useChainId)(),
          d = null !== (e = t.chainId) && void 0 !== e ? e : c,
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: a, ...o } = n[1],
                  u = await (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { chainId: n, ...a } = t,
                      o = e.getClient({ chainId: n });
                    return (0, i.s)(o, r.c, "getBlockTransactionCount")(a);
                  })(e, o);
                return null != u ? u : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["blockTransactionCount", (0, a.O)(e)];
              })(t),
            };
          })(l, { ...t, chainId: d });
        return (0, o.aM)({ ...n, ...h });
      }
    },
    41062: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useBytecode: function () {
            return c;
          },
        });
      var r = n(38388),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.c, "getBytecode")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          c = (0, l.useConfig)(n),
          d = (0, s.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: r, scopeKey: i, ...o } = n[1];
                if (!r) throw Error("address is required");
                let u = await a(e, { ...o, address: r });
                return null != u ? u : null;
              },
              queryKey: ["getBytecode", (0, o.O)(t)],
            };
          })(c, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, u.aM)({ ...i, ...h, enabled: f });
      }
    },
    52143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useCall: function () {
            return c;
          },
        });
      var r = n(8302),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.RE, "call")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, l.useConfig)(t),
          i = (0, s.useChainId)(),
          c = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: r, ...i } = n[1],
                  o = await a(e, { ...i });
                return null != o ? o : null;
              },
              queryKey: ["call", (0, o.O)(t)],
            };
          })(r, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : i,
          });
        return (0, u.aM)({ ...n, ...c });
      }
    },
    44567: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useChains: function () {
            return s;
          },
        });
      var r = n(69022);
      let i = [];
      function a(e) {
        let t = e.chains;
        return (0, r.v)(i, t) ? i : ((i = t), t);
      }
      var o = n(64090),
        u = n(42887);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, u.useConfig)(e);
        return (0, o.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e._internal.chains.subscribe((e, t) => {
                n(e, t);
              });
            })(t, { onChange: e }),
          () => a(t),
          () => a(t)
        );
      }
    },
    20384: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useClient: function () {
            return o;
          },
        });
      var r = n(20987),
        i = n(29292),
        a = n(42887);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.useConfig)(e);
        return (0, i.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => (0, r.s)(e), n, {
                equalityFn: (e, t) =>
                  (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid),
              });
            })(t, { onChange: e }),
          () => (0, r.s)(t, e),
          () => (0, r.s)(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    51311: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useConnect: function () {
            return s;
          },
        });
      var r = n(20568),
        i = n(28816),
        a = n(64090),
        o = n(42887),
        u = n(24417);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.useConfig)(e),
          s = (0, u.useConnectors)({ config: n }),
          {
            mutate: l,
            mutateAsync: c,
            ...d
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.$)(n, e),
            mutationKey: ["connect"],
          });
        return (
          (0, a.useEffect)(
            () =>
              n.subscribe(
                (e) => {
                  let { status: t } = e;
                  return t;
                },
                (e, t) => {
                  "connected" === t && "disconnected" === e && d.reset();
                }
              ),
            [n, d]
          ),
          { ...d, connect: l, connectAsync: c, connectors: s }
        );
      }
    },
    21716: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useConnections: function () {
            return s;
          },
        });
      var r = n(69022);
      let i = [];
      function a(e) {
        let t = [...e.state.connections.values()];
        return "reconnecting" === e.state.status || (0, r.v)(i, t)
          ? i
          : ((i = t), t);
      }
      var o = n(64090),
        u = n(42887);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, u.useConfig)(e);
        return (0, o.useSyncExternalStore)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => a(e), n, { equalityFn: r.v });
            })(t, { onChange: e }),
          () => a(t),
          () => a(t)
        );
      }
    },
    36271: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useConnectorClient: function () {
            return d;
          },
        });
      var r = n(47082),
        i = n(38507),
        a = n(73054),
        o = n(64090),
        u = n(38760),
        s = n(39296),
        l = n(43089),
        c = n(42887);
      function d() {
        var e, t, n;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: h = {} } = d,
          f = (0, c.useConfig)(d),
          y = (0, r.NL)(),
          { address: g, connector: p, status: m } = (0, s.useAccount)(),
          b = (0, l.useChainId)(),
          { queryKey: w, ...C } = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              gcTime: 0,
              async queryFn(n) {
                let { queryKey: r } = n,
                  { connector: a } = t,
                  { connectorUid: o, scopeKey: u, ...s } = r[1];
                return (0, i.e)(e, { ...s, connector: a });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { connector: t, ...n } = e;
                return [
                  "connectorClient",
                  { ...(0, a.O)(n), connectorUid: null == t ? void 0 : t.uid },
                ];
              })(t),
            };
          })(f, {
            ...d,
            chainId: null !== (e = d.chainId) && void 0 !== e ? e : b,
            connector: null !== (t = d.connector) && void 0 !== t ? t : p,
          }),
          _ = !!(
            "disconnected" !== m &&
            (null === (n = h.enabled) || void 0 === n || n)
          );
        return (
          (0, o.useEffect)(() => {
            g
              ? y.invalidateQueries({ queryKey: w })
              : y.removeQueries({ queryKey: w });
          }, [g, y]),
          (0, u.aM)({ ...h, ...C, queryKey: w, enabled: _, staleTime: 1 / 0 })
        );
      }
    },
    24417: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useConnectors: function () {
            return l;
          },
        });
      var r = n(65500),
        i = n(69022);
      let a = [];
      function o(e) {
        let t = e.connectors;
        return (0, i.v)(a, t) ? a : ((a = t), t);
      }
      var u = n(64090),
        s = n(42887);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, s.useConfig)(e);
        return (0, u.useSyncExternalStore)(
          (e) => (0, r.f)(t, { onChange: e }),
          () => o(t),
          () => o(t)
        );
      }
    },
    78898: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useDisconnect: function () {
            return u;
          },
        });
      var r = n(20568),
        i = n(42602),
        a = n(42887),
        o = n(21716);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, a.useConfig)(e),
          {
            mutate: u,
            mutateAsync: s,
            ...l
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.z)(n, e),
            mutationKey: ["disconnect"],
          });
        return {
          ...l,
          connectors: (0, o.useConnections)({ config: n }).map(
            (e) => e.connector
          ),
          disconnect: u,
          disconnectAsync: s,
        };
      }
    },
    64733: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEnsAddress: function () {
            return l;
          },
        });
      var r = n(73645),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: c = {} } = n,
          d = (0, s.useConfig)(n),
          h = (0, u.useChainId)(),
          f = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { name: a, scopeKey: o, ...u } = n[1];
                if (!a) throw Error("name is required");
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.O, "getEnsAddress")(a);
                })(e, { ...u, name: a });
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["ensAddress", (0, a.O)(e)];
              })(t),
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(l && (null === (t = c.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...c, ...f, enabled: y });
      }
    },
    48126: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEnsAvatar: function () {
            return s;
          },
        });
      var r = n(63543),
        i = n(73054),
        a = n(38760),
        o = n(43089),
        u = n(42887);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: s, query: l = {} } = n,
          c = (0, u.useConfig)(n),
          d = (0, o.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { name: i, scopeKey: a, ...o } = n[1];
                if (!i) throw Error("name is required");
                return (0, r.r)(e, { ...o, name: i });
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["ensAvatar", (0, i.O)(e)];
              })(t),
            };
          })(c, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(s && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...l, ...h, enabled: f });
      }
    },
    7638: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEnsName: function () {
            return s;
          },
        });
      var r = n(55309),
        i = n(73054),
        a = n(38760),
        o = n(43089),
        u = n(42887);
      function s() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: s, query: l = {} } = n,
          c = (0, u.useConfig)(n),
          d = (0, o.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: i, scopeKey: a, ...o } = n[1];
                if (!i) throw Error("address is required");
                return (0, r.w)(e, { ...o, address: i });
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["ensName", (0, i.O)(e)];
              })(t),
            };
          })(c, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(s && (null === (t = l.enabled) || void 0 === t || t));
        return (0, a.aM)({ ...l, ...h, enabled: f });
      }
    },
    24314: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEnsResolver: function () {
            return l;
          },
        });
      var r = n(23519),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { name: l, query: c = {} } = n,
          d = (0, s.useConfig)(n),
          h = (0, u.useChainId)(),
          f = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { name: a, scopeKey: o, ...u } = n[1];
                if (!a) throw Error("name is required");
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.S, "getEnsResolver")(a);
                })(e, { ...u, name: a });
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["ensResolver", (0, a.O)(e)];
              })(t),
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(l && (null === (t = c.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...c, ...f, enabled: y });
      }
    },
    81491: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEnsText: function () {
            return l;
          },
        });
      var r = n(84825),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { key: l, name: c, query: d = {} } = n,
          h = (0, s.useConfig)(n),
          f = (0, u.useChainId)(),
          y = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { key: a, name: o, scopeKey: u, ...s } = n[1];
                if (!a || !o) throw Error("key and name are required");
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.g, "getEnsText")(a);
                })(e, { ...s, key: a, name: o });
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["ensText", (0, a.O)(e)];
              })(t),
            };
          })(h, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          g = !!(l && c && (null === (t = d.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...d, ...y, enabled: g });
      }
    },
    72102: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEstimateFeesPerGas: function () {
            return h;
          },
        });
      var r = n(60989),
        i = n(64269),
        a = n(37225),
        o = n(52938);
      async function u(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { chainId: n, formatUnits: u = "gwei", ...s } = t,
          l = e.getClient({ chainId: n }),
          c = (0, a.s)(l, i.X, "estimateFeesPerGas"),
          {
            gasPrice: d,
            maxFeePerGas: h,
            maxPriorityFeePerGas: f,
          } = await c({ ...s, chain: l.chain }),
          y = (0, o.W)(u);
        return {
          formatted: {
            gasPrice: d ? (0, r.b)(d, y) : void 0,
            maxFeePerGas: h ? (0, r.b)(h, y) : void 0,
            maxPriorityFeePerGas: f ? (0, r.b)(f, y) : void 0,
          },
          gasPrice: d,
          maxFeePerGas: h,
          maxPriorityFeePerGas: f,
        };
      }
      var s = n(73054),
        l = n(38760),
        c = n(43089),
        d = n(42887);
      function h() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, d.useConfig)(t),
          i = (0, c.useChainId)(),
          a = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: r, ...i } = n[1];
                return u(e, i);
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["estimateFeesPerGas", (0, s.O)(e)];
              })(t),
            };
          })(r, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : i,
          });
        return (0, l.aM)({ ...n, ...a });
      }
    },
    3227: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEstimateGas: function () {
            return h;
          },
        });
      var r = n(24581),
        i = n(37225),
        a = n(38507);
      async function o(e, t) {
        let n;
        let { chainId: o, connector: u, ...s } = t;
        n = t.account
          ? t.account
          : (
              await (0, a.e)(e, {
                account: t.account,
                chainId: o,
                connector: u,
              })
            ).account;
        let l = e.getClient({ chainId: o });
        return (0, i.s)(l, r.Q, "estimateGas")({ ...s, account: n });
      }
      var u = n(73054),
        s = n(38760),
        l = n(43089),
        c = n(42887),
        d = n(36271);
      function h() {
        var e, t, n;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { connector: i, query: a = {} } = r,
          h = (0, c.useConfig)(r),
          { data: f } = (0, d.useConnectorClient)({
            connector: i,
            query: { enabled: void 0 === r.account },
          }),
          y =
            null !== (e = r.account) && void 0 !== e
              ? e
              : null == f
              ? void 0
              : f.account,
          g = (0, l.useChainId)(),
          p = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(n) {
                let { queryKey: r } = n,
                  { connector: i } = t,
                  { account: a, scopeKey: u, ...s } = r[1];
                if (!a && !i) throw Error("account or connector is required");
                return o(e, { account: a, connector: i, ...s });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { connector: t, ...n } = e;
                return ["estimateGas", (0, u.O)(n)];
              })(t),
            };
          })(h, {
            ...r,
            account: y,
            chainId: null !== (t = r.chainId) && void 0 !== t ? t : g,
            connector: i,
          }),
          m = !!((y || i) && (null === (n = a.enabled) || void 0 === n || n));
        return (0, s.aM)({ ...a, ...p, enabled: m });
      }
    },
    57072: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useEstimateMaxPriorityFeePerGas: function () {
            return c;
          },
        });
      var r = n(80330),
        i = n(37225);
      async function a(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { chainId: n } = t,
          a = e.getClient({ chainId: n });
        return (0, i.s)(
          a,
          r._,
          "estimateMaxPriorityFeePerGas"
        )({ chain: a.chain });
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          r = (0, l.useConfig)(t),
          i = (0, s.useChainId)(),
          c = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: r, ...i } = n[1];
                return a(e, i);
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["estimateMaxPriorityFeePerGas", (0, o.O)(e)];
              })(t),
            };
          })(r, {
            ...t,
            chainId: null !== (e = t.chainId) && void 0 !== e ? e : i,
          });
        return (0, u.aM)({ ...n, ...c });
      }
    },
    19108: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useFeeHistory: function () {
            return l;
          },
        });
      var r = n(80215),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { blockCount: l, rewardPercentiles: c, query: d = {} } = n,
          h = (0, s.useConfig)(n),
          f = (0, u.useChainId)(),
          y = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  {
                    blockCount: a,
                    rewardPercentiles: o,
                    scopeKey: u,
                    ...s
                  } = n[1];
                if (!a) throw Error("blockCount is required");
                if (!o) throw Error("rewardPercentiles is required");
                let l = await (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.Z, "getFeeHistory")(a);
                })(e, { ...s, blockCount: a, rewardPercentiles: o });
                return null != l ? l : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["feeHistory", (0, a.O)(e)];
              })(t),
            };
          })(h, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          g = !!(l && c && (null === (t = d.enabled) || void 0 === t || t));
        return (0, o.aM)({ ...d, ...y, enabled: g });
      }
    },
    18161: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useGasPrice: function () {
            return l;
          },
        });
      var r = n(52530),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: n = {} } = t,
          l = (0, s.useConfig)(t),
          c = (0, u.useChainId)(),
          d = null !== (e = t.chainId) && void 0 !== e ? e : c,
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: a, ...o } = n[1],
                  u = await (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { chainId: n } = t,
                      a = e.getClient({ chainId: n });
                    return (0, i.s)(a, r.o, "getGasPrice")({});
                  })(e, o);
                return null != u ? u : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["gasPrice", (0, a.O)(e)];
              })(t),
            };
          })(l, { ...t, chainId: d });
        return (0, o.aM)({ ...n, ...h });
      }
    },
    16655: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useInfiniteReadContracts: function () {
            return s;
          },
        });
      var r = n(36263),
        i = n(73054),
        a = n(38760),
        o = n(43089),
        u = n(42887);
      function s(e) {
        var t, n;
        let { contracts: s = [], query: l } = e,
          c = (0, u.useConfig)(e),
          d = (0, o.useChainId)(),
          h = {
            ...(n = { ...e, chainId: d, contracts: s, query: l }).query,
            async queryFn(e) {
              let { pageParam: t, queryKey: i } = e,
                { contracts: a } = n,
                { cacheKey: o, scopeKey: u, ...s } = i[1];
              return await (0, r.J)(c, { ...s, contracts: a(t) });
            },
            queryKey: (function (e) {
              let { contracts: t, query: n, ...r } = e;
              return ["infiniteReadContracts", (0, i.O)(r)];
            })(n),
          };
        return (0, a.NS)({
          ...l,
          ...h,
          initialPageParam: h.initialPageParam,
          structuralSharing:
            null !== (t = l.structuralSharing) && void 0 !== t ? t : a.if,
        });
      }
    },
    7764: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePrepareTransactionRequest: function () {
            return d;
          },
        });
      var r = n(63387),
        i = n(37225),
        a = n(38507);
      async function o(e, t) {
        let n;
        let { account: o, chainId: u, connector: s, ...l } = t;
        return (
          (n =
            "object" == typeof o && "local" === o.type
              ? e.getClient({ chainId: u })
              : await (0, a.e)(e, { account: o, chainId: u, connector: s })),
          (0, i.s)(
            n,
            r.Z,
            "prepareTransactionRequest"
          )({ ...l, ...(o ? { account: o } : {}) })
        );
      }
      var u = n(73054),
        s = n(38760),
        l = n(43089),
        c = n(42887);
      function d() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { to: r, query: i = {} } = n,
          a = (0, c.useConfig)(n),
          d = (0, l.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              queryFn(t) {
                let { queryKey: n } = t,
                  { scopeKey: r, to: i, ...a } = n[1];
                if (!i) throw Error("to is required");
                return o(e, { to: i, ...a });
              },
              queryKey: (function (e) {
                let { connector: t, ...n } = e;
                return ["prepareTransactionRequest", (0, u.O)(n)];
              })(t),
            };
          })(a, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...i, ...h, enabled: f });
      }
    },
    318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useProof: function () {
            return c;
          },
        });
      var r = n(40523),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.S, "getProof")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, storageKeys: i, query: c = {} } = n,
          d = (0, l.useConfig)(n),
          h = (0, s.useChainId)(),
          f = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: r, scopeKey: i, storageKeys: o, ...u } = n[1];
                if (!r || !o)
                  throw Error("address and storageKeys are required");
                return a(e, { ...u, address: r, storageKeys: o });
              },
              queryKey: ["getProof", (0, o.O)(t)],
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(r && i && (null === (t = c.enabled) || void 0 === t || t));
        return (0, u.aM)({ ...c, ...f, enabled: y });
      }
    },
    36117: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          usePublicClient: function () {
            return ey;
          },
        });
      var r = n(73645),
        i = n(49134),
        a = n(9577),
        o = n(23519),
        u = n(84825),
        s = n(8302),
        l = n(44069);
      async function c(e) {
        let t = (0, l.g)(e, { method: "eth_newBlockFilter" }),
          n = await e.request({ method: "eth_newBlockFilter" });
        return { id: n, request: t(n), type: "block" };
      }
      var d = n(10725),
        h = n(75358),
        f = n(15578);
      async function y(e) {
        let {
            address: t,
            args: n,
            event: r,
            events: i,
            fromBlock: a,
            strict: o,
            toBlock: u,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          s = null != i ? i : r ? [r] : void 0,
          c = (0, l.g)(e, { method: "eth_newFilter" }),
          d = [];
        s &&
          ((d = [
            s.flatMap((e) =>
              (0, h.O)({ abi: [e], eventName: e.name, args: n })
            ),
          ]),
          r && (d = d[0]));
        let y = await e.request({
          method: "eth_newFilter",
          params: [
            {
              address: t,
              fromBlock: "bigint" == typeof a ? (0, f.eC)(a) : a,
              toBlock: "bigint" == typeof u ? (0, f.eC)(u) : u,
              ...(d.length ? { topics: d } : {}),
            },
          ],
        });
        return {
          abi: s,
          args: n,
          eventName: r ? r.name : void 0,
          fromBlock: a,
          id: y,
          request: c(y),
          strict: !!o,
          toBlock: u,
          type: "event",
        };
      }
      var g = n(15161),
        p = n(79561),
        m = n(3551),
        b = n(95094),
        w = n(31935),
        C = n(24581);
      async function _(e, t) {
        let { abi: n, address: r, args: i, functionName: a, ...o } = t,
          u = (0, m.R)({ abi: n, args: i, functionName: a });
        try {
          return await (0, w.s)(
            e,
            C.Q,
            "estimateGas"
          )({ data: u, to: r, ...o });
        } catch (t) {
          let e = o.account ? (0, p.T)(o.account) : void 0;
          throw (0, b.S)(t, {
            abi: n,
            address: r,
            args: i,
            docsPath: "/docs/contract/estimateContractGas",
            functionName: a,
            sender: null == e ? void 0 : e.address,
          });
        }
      }
      var q = n(64269),
        E = n(80330),
        I = n(82756),
        T = n(4781),
        k = n(86395),
        F = n(97695),
        M = n(38388),
        x = n(23066),
        O = n(60776),
        S = n(80215),
        K = n(7436),
        P = n(43179),
        A = n(6819);
      async function D(e, t) {
        var n;
        let { filter: r } = t,
          i = null !== (n = r.strict) && void 0 !== n && n,
          a = (
            await r.request({ method: "eth_getFilterLogs", params: [r.id] })
          ).map((e) => (0, A.U)(e));
        return r.abi ? (0, P.h)({ abi: r.abi, logs: a, strict: i }) : a;
      }
      var B = n(52530),
        R = n(81875),
        N = n(40523),
        Q = n(14566),
        L = n(42624),
        W = n(82861),
        U = n(36930),
        Z = n(17362),
        G = n(4481),
        H = n(96130),
        V = n(40518),
        z = n(84943),
        j = n(21457),
        Y = n(88923),
        $ = n(70352),
        X = n(31462),
        J = n(17448),
        ee = n(8553),
        et = n(85583),
        en = n(33e3),
        er = n(92791),
        ei = n(45581),
        ea = n(24473),
        eo = n(4866),
        eu = n(67690),
        es = n(63387),
        el = n(50165);
      function ec(e) {
        return {
          call: (t) => (0, s.RE)(e, t),
          createBlockFilter: () => c(e),
          createContractEventFilter: (t) => (0, d.A)(e, t),
          createEventFilter: (t) => y(e, t),
          createPendingTransactionFilter: () => (0, g.W)(e),
          estimateContractGas: (t) => _(e, t),
          estimateGas: (t) => (0, C.Q)(e, t),
          getBalance: (t) => (0, I.s)(e, t),
          getBlock: (t) => (0, T.Q)(e, t),
          getBlockNumber: (t) => (0, k.z)(e, t),
          getBlockTransactionCount: (t) => (0, F.c)(e, t),
          getBytecode: (t) => (0, M.c)(e, t),
          getChainId: () => (0, x.L)(e),
          getContractEvents: (t) => (0, O.m)(e, t),
          getEnsAddress: (t) => (0, r.O)(e, t),
          getEnsAvatar: (t) => (0, i.r)(e, t),
          getEnsName: (t) => (0, a.w)(e, t),
          getEnsResolver: (t) => (0, o.S)(e, t),
          getEnsText: (t) => (0, u.g)(e, t),
          getFeeHistory: (t) => (0, S.Z)(e, t),
          estimateFeesPerGas: (t) => (0, q.X)(e, t),
          getFilterChanges: (t) => (0, K.K)(e, t),
          getFilterLogs: (t) => D(e, t),
          getGasPrice: () => (0, B.o)(e),
          getLogs: (t) => (0, R.y)(e, t),
          getProof: (t) => (0, N.S)(e, t),
          estimateMaxPriorityFeePerGas: (t) => (0, E._)(e, t),
          getStorageAt: (t) => (0, Q.Y)(e, t),
          getTransaction: (t) => (0, L.f)(e, t),
          getTransactionConfirmations: (t) => (0, W.a)(e, t),
          getTransactionCount: (t) => (0, U.K)(e, t),
          getTransactionReceipt: (t) => (0, Z.a)(e, t),
          multicall: (t) => (0, G.A)(e, t),
          prepareTransactionRequest: (t) => (0, es.Z)(e, t),
          readContract: (t) => (0, H.L)(e, t),
          sendRawTransaction: (t) => (0, el.p)(e, t),
          simulateContract: (t) => (0, V.a)(e, t),
          verifyMessage: (t) => (0, j.n)(e, t),
          verifyTypedData: (t) => (0, Y.B)(e, t),
          uninstallFilter: (t) => (0, z.W)(e, t),
          waitForTransactionReceipt: (t) => (0, $.e)(e, t),
          watchBlocks: (t) => (0, J.p)(e, t),
          watchBlockNumber: (t) => (0, X.q)(e, t),
          watchContractEvent: (t) => (0, ee.Y)(e, t),
          watchEvent: (t) =>
            (function (e, t) {
              let n,
                r,
                {
                  address: i,
                  args: a,
                  batch: o = !0,
                  event: u,
                  events: s,
                  onError: l,
                  onLogs: c,
                  poll: d,
                  pollingInterval: f = e.pollingInterval,
                  strict: g,
                } = t,
                p = void 0 !== d ? d : "webSocket" !== e.transport.type,
                m = null != g && g;
              return p
                ? (() => {
                    let t = (0, er.P)(["watchEvent", i, a, o, e.uid, u, f]);
                    return (0, et.N7)(t, { onLogs: c, onError: l }, (t) => {
                      let n, r;
                      let l = !1,
                        c = (0, en.$)(
                          async () => {
                            if (!l) {
                              try {
                                r = await (0, w.s)(
                                  e,
                                  y,
                                  "createEventFilter"
                                )({
                                  address: i,
                                  args: a,
                                  event: u,
                                  events: s,
                                  strict: m,
                                });
                              } catch (e) {}
                              l = !0;
                              return;
                            }
                            try {
                              let l;
                              if (r)
                                l = await (0, w.s)(
                                  e,
                                  K.K,
                                  "getFilterChanges"
                                )({ filter: r });
                              else {
                                let t = await (0, w.s)(
                                  e,
                                  k.z,
                                  "getBlockNumber"
                                )({});
                                (l =
                                  n && n !== t
                                    ? await (0, w.s)(
                                        e,
                                        R.y,
                                        "getLogs"
                                      )({
                                        address: i,
                                        args: a,
                                        event: u,
                                        events: s,
                                        fromBlock: n + 1n,
                                        toBlock: t,
                                      })
                                    : []),
                                  (n = t);
                              }
                              if (0 === l.length) return;
                              if (o) t.onLogs(l);
                              else for (let e of l) t.onLogs([e]);
                            } catch (e) {
                              var c;
                              r && e instanceof ea.yR && (l = !1),
                                null === (c = t.onError) ||
                                  void 0 === c ||
                                  c.call(t, e);
                            }
                          },
                          { emitOnBegin: !0, interval: f }
                        );
                      return async () => {
                        r &&
                          (await (0, w.s)(
                            e,
                            z.W,
                            "uninstallFilter"
                          )({ filter: r })),
                          c();
                      };
                    });
                  })()
                : ((n = !0),
                  (r = () => (n = !1)),
                  (async () => {
                    try {
                      let t = null != s ? s : u ? [u] : void 0,
                        o = [];
                      t &&
                        ((o = [
                          t.flatMap((e) =>
                            (0, h.O)({ abi: [e], eventName: e.name, args: a })
                          ),
                        ]),
                        u && (o = o[0]));
                      let { unsubscribe: d } = await e.transport.subscribe({
                        params: ["logs", { address: i, topics: o }],
                        onData(e) {
                          if (!n) return;
                          let r = e.result;
                          try {
                            let { eventName: e, args: n } = (0, eo.F)({
                                abi: null != t ? t : [],
                                data: r.data,
                                topics: r.topics,
                                strict: m,
                              }),
                              i = (0, A.U)(r, { args: n, eventName: e });
                            c([i]);
                          } catch (a) {
                            let e, t;
                            if (a instanceof ei.SM || a instanceof ei.Gy) {
                              var i;
                              if (g) return;
                              (e = a.abiItem.name),
                                (t =
                                  null === (i = a.abiItem.inputs) ||
                                  void 0 === i
                                    ? void 0
                                    : i.some((e) => !("name" in e && e.name)));
                            }
                            let n = (0, A.U)(r, {
                              args: t ? [] : {},
                              eventName: e,
                            });
                            c([n]);
                          }
                        },
                        onError(e) {
                          null == l || l(e);
                        },
                      });
                      (r = d), n || r();
                    } catch (e) {
                      null == l || l(e);
                    }
                  })(),
                  r);
            })(e, t),
          watchPendingTransactions: (t) => (0, eu.O)(e, t),
        };
      }
      var ed = n(20987);
      function eh(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = (0, ed.s)(e, t);
        return null == n ? void 0 : n.extend(ec);
      }
      var ef = n(29292),
        ev = n(42887);
      function ey() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, ev.useConfig)(e);
        return (0, ef.useSyncExternalStoreWithSelector)(
          (e) =>
            (function (e, t) {
              let { onChange: n } = t;
              return e.subscribe(() => eh(e), n, {
                equalityFn: (e, t) =>
                  (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid),
              });
            })(t, { onChange: e }),
          () => eh(t, e),
          () => eh(t, e),
          (e) => e,
          (e, t) =>
            (null == e ? void 0 : e.uid) === (null == t ? void 0 : t.uid)
        );
      }
    },
    69908: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useReadContract: function () {
            return s;
          },
        });
      var r = n(31723),
        i = n(73054),
        a = n(38760),
        o = n(43089),
        u = n(42887);
      function s() {
        var e, t, n;
        let s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: l, address: c, functionName: d, query: h = {} } = s,
          f = (0, u.useConfig)(s),
          y = (0, o.useChainId)(),
          g = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(n) {
                let { queryKey: i } = n,
                  a = t.abi;
                if (!a) throw Error("abi is required");
                let { address: o, functionName: u, scopeKey: s, ...l } = i[1];
                if (!o) throw Error("address is required");
                if (!u) throw Error("functionName is required");
                let c = l.args;
                return (0, r.L)(e, {
                  abi: a,
                  address: o,
                  functionName: u,
                  args: c,
                  ...l,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...n } = e;
                return ["readContract", (0, i.O)(n)];
              })(t),
            };
          })(f, {
            ...s,
            chainId: null !== (e = s.chainId) && void 0 !== e ? e : y,
          }),
          p = !!(
            c &&
            l &&
            d &&
            (null === (t = h.enabled) || void 0 === t || t)
          );
        return (0, a.aM)({
          ...h,
          ...g,
          enabled: p,
          structuralSharing:
            null !== (n = h.structuralSharing) && void 0 !== n ? n : a.if,
        });
      }
    },
    96986: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useReconnect: function () {
            return o;
          },
        });
      var r = n(20568),
        i = n(93029),
        a = n(42887);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, a.useConfig)(e),
          {
            mutate: o,
            mutateAsync: u,
            ...s
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.G)(n, e),
            mutationKey: ["reconnect"],
          });
        return {
          ...s,
          connectors: n.connectors,
          reconnect: o,
          reconnectAsync: u,
        };
      }
    },
    323: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSendTransaction: function () {
            return c;
          },
        });
      var r = n(20568),
        i = n(24581),
        a = n(13474),
        o = n(37225),
        u = n(38507);
      async function s(e, t) {
        let n;
        let { account: r, chainId: s, connector: l, gas: c, ...d } = t;
        n =
          "object" == typeof r && "local" === r.type
            ? e.getClient({ chainId: s })
            : await (0, u.e)(e, { account: r, chainId: s, connector: l });
        let h = await (async () => {
            if (null !== c)
              return void 0 === c
                ? (0, o.s)(
                    n,
                    i.Q,
                    "estimateGas"
                  )({ ...d, account: r, chain: s ? { id: s } : null })
                : c;
          })(),
          f = (0, o.s)(n, a.T, "sendTransaction");
        return await f({
          ...d,
          ...(r ? { account: r } : {}),
          gas: h,
          chain: s ? { id: s } : null,
        });
      }
      var l = n(42887);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, l.useConfig)(t)),
            { mutationFn: (t) => s(e, t), mutationKey: ["sendTransaction"] }),
          { mutate: a, mutateAsync: o, ...u } = (0, r.D)({ ...n, ...i });
        return { ...u, sendTransaction: a, sendTransactionAsync: o };
      }
    },
    89959: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSignMessage: function () {
            return o;
          },
        });
      var r = n(20568),
        i = n(35392),
        a = n(42887);
      function o() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          o =
            ((e = (0, a.useConfig)(t)),
            {
              mutationFn: (t) => (0, i.l)(e, t),
              mutationKey: ["signMessage"],
            }),
          { mutate: u, mutateAsync: s, ...l } = (0, r.D)({ ...n, ...o });
        return { ...l, signMessage: u, signMessageAsync: s };
      }
    },
    78595: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSignTypedData: function () {
            return l;
          },
        });
      var r = n(20568),
        i = n(78606),
        a = n(37225),
        o = n(38507);
      async function u(e, t) {
        let n;
        let { account: r, connector: u, ...s } = t;
        return (
          (n =
            "object" == typeof r && "local" === r.type
              ? e.getClient()
              : await (0, o.e)(e, { account: r, connector: u })),
          (0, a.s)(
            n,
            i.x,
            "signTypedData"
          )({ ...s, ...(r ? { account: r } : {}) })
        );
      }
      var s = n(42887);
      function l() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          i =
            ((e = (0, s.useConfig)(t)),
            { mutationFn: (t) => u(e, t), mutationKey: ["signTypedData"] }),
          { mutate: a, mutateAsync: o, ...l } = (0, r.D)({ ...n, ...i });
        return { ...l, signTypedData: a, signTypedDataAsync: o };
      }
    },
    57605: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSimulateContract: function () {
            return l;
          },
        });
      var r = n(80292),
        i = n(73054),
        a = n(38760),
        o = n(43089),
        u = n(42887),
        s = n(36271);
      function l() {
        var e, t, n;
        let l =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            abi: c,
            address: d,
            connector: h,
            functionName: f,
            query: y = {},
          } = l,
          g = (0, u.useConfig)(l),
          { data: p } = (0, s.useConnectorClient)({
            connector: h,
            query: { enabled: void 0 === l.account },
          }),
          m = (0, o.useChainId)(),
          b = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(n) {
                let { queryKey: i } = n,
                  { abi: a, connector: o } = t;
                if (!a) throw Error("abi is required");
                let { scopeKey: u, ...s } = i[1],
                  { address: l, functionName: c } = s;
                if (!l) throw Error("address is required");
                if (!c) throw Error("functionName is required");
                return (0, r.a)(e, { abi: a, connector: o, ...s });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, connector: n, ...r } = e;
                return ["simulateContract", (0, i.O)(r)];
              })(t),
            };
          })(g, {
            ...l,
            account:
              null !== (e = l.account) && void 0 !== e
                ? e
                : null == p
                ? void 0
                : p.account,
            chainId: null !== (t = l.chainId) && void 0 !== t ? t : m,
          }),
          w = !!(
            c &&
            d &&
            f &&
            (null === (n = y.enabled) || void 0 === n || n)
          );
        return (0, a.aM)({ ...y, ...b, enabled: w });
      }
    },
    7960: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useStorageAt: function () {
            return c;
          },
        });
      var r = n(14566),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.Y, "getStorageAt")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, slot: i, query: c = {} } = n,
          d = (0, l.useConfig)(n),
          h = (0, s.useChainId)(),
          f = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              queryFn(t) {
                let { queryKey: n } = t,
                  { address: r, slot: i, scopeKey: o, ...u } = n[1];
                if (!r || !i) throw Error("address and slot are required");
                return a(e, { ...u, address: r, slot: i });
              },
              queryKey: ["getStorageAt", (0, o.O)(t)],
            };
          })(d, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : h,
          }),
          y = !!(r && i && (null === (t = c.enabled) || void 0 === t || t));
        return (0, u.aM)({ ...c, ...f, enabled: y });
      }
    },
    30759: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSwitchAccount: function () {
            return s;
          },
        });
      var r = n(20568),
        i = n(2731);
      async function a(e, t) {
        var n;
        let { connector: r } = t,
          a = e.state.connections.get(r.uid);
        if (!a) throw new i.aH();
        return (
          await (null === (n = e.storage) || void 0 === n
            ? void 0
            : n.setItem("recentConnectorId", r.id)),
          e.setState((e) => ({ ...e, current: r.uid })),
          { accounts: a.accounts, chainId: a.chainId }
        );
      }
      var o = n(42887),
        u = n(21716);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.useConfig)(e),
          {
            mutate: i,
            mutateAsync: s,
            ...l
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => a(n, e),
            mutationKey: ["switchAccount"],
          });
        return {
          ...l,
          connectors: (0, u.useConnections)({ config: n }).map(
            (e) => e.connector
          ),
          switchAccount: i,
          switchAccountAsync: s,
        };
      }
    },
    58667: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useSwitchChain: function () {
            return u;
          },
        });
      var r = n(20568),
        i = n(3580),
        a = n(44567),
        o = n(42887);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: t } = e,
          n = (0, o.useConfig)(e),
          {
            mutate: u,
            mutateAsync: s,
            ...l
          } = (0, r.D)({
            ...t,
            mutationFn: (e) => (0, i.c)(n, e),
            mutationKey: ["switchChain"],
          });
        return {
          ...l,
          chains: (0, a.useChains)({ config: n }),
          switchChain: u,
          switchChainAsync: s,
        };
      }
    },
    30036: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useToken: function () {
            return y;
          },
        });
      var r = n(47115),
        i = n(60989),
        a = n(55936),
        o = n(71264),
        u = n(52938),
        s = n(36263);
      async function l(e, t) {
        let { address: n, chainId: l, formatUnits: c = 18 } = t;
        function d(e) {
          return [
            {
              type: "function",
              name: "decimals",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint8" }],
            },
            {
              type: "function",
              name: "name",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "symbol",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: e }],
            },
            {
              type: "function",
              name: "totalSupply",
              stateMutability: "view",
              inputs: [],
              outputs: [{ type: "uint256" }],
            },
          ];
        }
        try {
          let t = d("string"),
            a = { address: n, abi: t, chainId: l },
            [o, h, f, y] = await (0, s.J)(e, {
              allowFailure: !0,
              contracts: [
                { ...a, functionName: "decimals" },
                { ...a, functionName: "name" },
                { ...a, functionName: "symbol" },
                { ...a, functionName: "totalSupply" },
              ],
            });
          if (h.error instanceof r.uq) throw h.error;
          if (f.error instanceof r.uq) throw f.error;
          if (o.error) throw o.error;
          if (y.error) throw y.error;
          return {
            address: n,
            decimals: o.result,
            name: h.result,
            symbol: f.result,
            totalSupply: {
              formatted: (0, i.b)(y.result, (0, u.W)(c)),
              value: y.result,
            },
          };
        } catch (t) {
          if (t instanceof r.uq) {
            let t = { address: n, abi: d("bytes32"), chainId: l },
              [r, h, f, y] = await (0, s.J)(e, {
                allowFailure: !1,
                contracts: [
                  { ...t, functionName: "decimals" },
                  { ...t, functionName: "name" },
                  { ...t, functionName: "symbol" },
                  { ...t, functionName: "totalSupply" },
                ],
              });
            return {
              address: n,
              decimals: r,
              name: (0, a.rR)((0, o.f)(h, { dir: "right" })),
              symbol: (0, a.rR)((0, o.f)(f, { dir: "right" })),
              totalSupply: { formatted: (0, i.b)(y, (0, u.W)(c)), value: y },
            };
          }
          throw t;
        }
      }
      var c = n(73054),
        d = n(38760),
        h = n(43089),
        f = n(42887);
      function y() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          a = (0, f.useConfig)(n),
          o = (0, h.useChainId)(),
          u = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: r, scopeKey: i, ...a } = n[1];
                if (!r) throw Error("address is required");
                return l(e, { ...a, address: r });
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["token", (0, c.O)(e)];
              })(t),
            };
          })(a, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : o,
          }),
          s = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, d.aM)({ ...i, ...u, enabled: s });
      }
    },
    15180: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTransaction: function () {
            return l;
          },
        });
      var r = n(42624),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            blockHash: l,
            blockNumber: c,
            blockTag: d,
            hash: h,
            query: f = {},
          } = n,
          y = (0, s.useConfig)(n),
          g = (0, u.useChainId)(),
          p = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  {
                    blockHash: a,
                    blockNumber: o,
                    blockTag: u,
                    hash: s,
                    index: l,
                  } = n[1];
                if (!a && !o && !u && !s)
                  throw Error(
                    "blockHash, blockNumber, blockTag, or hash is required"
                  );
                if (!s && !l)
                  throw Error(
                    "index is required for blockHash, blockNumber, or blockTag"
                  );
                let { scopeKey: c, ...d } = n[1];
                return (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.f, "getTransaction")(a);
                })(e, d);
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["transaction", (0, a.O)(e)];
              })(t),
            };
          })(y, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : g,
          }),
          m = !!(
            !(l && c && d && h) &&
            (null === (t = f.enabled) || void 0 === t || t)
          );
        return (0, o.aM)({ ...f, ...p, enabled: m });
      }
    },
    79686: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTransactionConfirmations: function () {
            return l;
          },
        });
      var r = n(82861),
        i = n(37225),
        a = n(73054),
        o = n(38760),
        u = n(43089),
        s = n(42887);
      function l() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: l, transactionReceipt: c, query: d = {} } = n,
          h = (0, s.useConfig)(n),
          f = (0, u.useChainId)(),
          y = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { hash: a, transactionReceipt: o, scopeKey: u, ...s } = n[1];
                if (!a && !o)
                  throw Error("hash or transactionReceipt is required");
                let l = await (function (e, t) {
                  let { chainId: n, ...a } = t,
                    o = e.getClient({ chainId: n });
                  return (0, i.s)(o, r.a, "getTransactionConfirmations")(a);
                })(e, { hash: a, transactionReceipt: o, ...s });
                return null != l ? l : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["transactionConfirmations", (0, a.O)(e)];
              })(t),
            };
          })(h, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          g = !!(
            !(l && c) &&
            (l || c) &&
            (null === (t = d.enabled) || void 0 === t || t)
          );
        return (0, o.aM)({ ...d, ...y, enabled: g });
      }
    },
    4873: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTransactionCount: function () {
            return c;
          },
        });
      var r = n(36930),
        i = n(37225);
      async function a(e, t) {
        let { address: n, blockNumber: a, blockTag: o, chainId: u } = t,
          s = e.getClient({ chainId: u });
        return (0, i.s)(
          s,
          r.K,
          "getTransactionCount"
        )(a ? { address: n, blockNumber: a } : { address: n, blockTag: o });
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, query: i = {} } = n,
          c = (0, l.useConfig)(n),
          d = (0, s.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: r, scopeKey: i, ...o } = n[1];
                if (!r) throw Error("address is required");
                let u = await a(e, { ...o, address: r });
                return null != u ? u : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["transactionCount", (0, o.O)(e)];
              })(t),
            };
          })(c, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, u.aM)({ ...i, ...h, enabled: f });
      }
    },
    96796: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useTransactionReceipt: function () {
            return c;
          },
        });
      var r = n(17362),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.a, "getTransactionReceipt")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: r, query: i = {} } = n,
          c = (0, l.useConfig)(n),
          d = (0, s.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              queryFn(t) {
                let { queryKey: n } = t,
                  { hash: r, scopeKey: i, ...o } = n[1];
                if (!r) throw Error("hash is required");
                return a(e, { ...o, hash: r });
              },
              queryKey: ["getTransactionReceipt", (0, o.O)(t)],
            };
          })(c, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : d,
          }),
          f = !!(r && (null === (t = i.enabled) || void 0 === t || t));
        return (0, u.aM)({ ...i, ...h, enabled: f });
      }
    },
    80450: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useVerifyMessage: function () {
            return c;
          },
        });
      var r = n(21457),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.n, "verifyMessage")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: r, message: i, signature: c, query: d = {} } = n,
          h = (0, l.useConfig)(n),
          f = (0, s.useChainId)(),
          y = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  { address: r, message: i, signature: o } = n[1];
                if (!r || !i || !o)
                  throw Error("address, message, and signature are required");
                let { scopeKey: u, ...s } = n[1],
                  l = await a(e, s);
                return null != l ? l : null;
              },
              queryKey: ["verifyMessage", (0, o.O)(t)],
            };
          })(h, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : f,
          }),
          g = !!(
            r &&
            i &&
            c &&
            (null === (t = d.enabled) || void 0 === t || t)
          );
        return (0, u.aM)({ ...d, ...y, enabled: g });
      }
    },
    8092: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useVerifyTypedData: function () {
            return c;
          },
        });
      var r = n(88923),
        i = n(37225);
      async function a(e, t) {
        let { chainId: n, ...a } = t,
          o = e.getClient({ chainId: n });
        return (0, i.s)(o, r.B, "verifyTypedData")(a);
      }
      var o = n(73054),
        u = n(38760),
        s = n(43089),
        l = n(42887);
      function c() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            address: r,
            message: i,
            primaryType: c,
            signature: d,
            types: h,
            query: f = {},
          } = n,
          y = (0, l.useConfig)(n),
          g = (0, s.useChainId)(),
          p = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: n } = t,
                  {
                    address: r,
                    message: i,
                    primaryType: o,
                    signature: u,
                    types: s,
                    scopeKey: l,
                    ...c
                  } = n[1];
                if (!r) throw Error("address is required");
                if (!i) throw Error("message is required");
                if (!o) throw Error("primaryType is required");
                if (!u) throw Error("signature is required");
                if (!s) throw Error("types is required");
                let d = await a(e, {
                  ...c,
                  address: r,
                  message: i,
                  primaryType: o,
                  signature: u,
                  types: s,
                });
                return null != d ? d : null;
              },
              queryKey: ["verifyTypedData", (0, o.O)(t)],
            };
          })(y, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : g,
          }),
          m = !!(
            r &&
            i &&
            c &&
            d &&
            h &&
            (null === (t = f.enabled) || void 0 === t || t)
          );
        return (0, u.aM)({ ...f, ...p, enabled: m });
      }
    },
    20600: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useWalletClient: function () {
            return R;
          },
        });
      var r = n(47082),
        i = n(23066),
        a = n(15578);
      async function o(e, t) {
        let { chain: n } = t,
          {
            id: r,
            name: i,
            nativeCurrency: o,
            rpcUrls: u,
            blockExplorers: s,
          } = n;
        await e.request(
          {
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: (0, a.eC)(r),
                chainName: i,
                nativeCurrency: o,
                rpcUrls: u.default.http,
                blockExplorerUrls: s
                  ? Object.values(s).map((e) => {
                      let { url: t } = e;
                      return t;
                    })
                  : void 0,
              },
            ],
          },
          { retryCount: 0 }
        );
      }
      var u = n(84379),
        s = n(13474),
        l = n(75036);
      async function c(e) {
        var t;
        return (null === (t = e.account) || void 0 === t ? void 0 : t.type) ===
          "local"
          ? [e.account.address]
          : (await e.request({ method: "eth_accounts" })).map((e) =>
              (0, l.x)(e)
            );
      }
      async function d(e) {
        return await e.request({ method: "wallet_getPermissions" });
      }
      var h = n(63387);
      async function f(e) {
        return (
          await e.request({ method: "eth_requestAccounts" }, { retryCount: 0 })
        ).map((e) => (0, l.K)(e));
      }
      async function y(e, t) {
        return e.request(
          { method: "wallet_requestPermissions", params: [t] },
          { retryCount: 0 }
        );
      }
      var g = n(50165),
        p = n(37542),
        m = n(79561),
        b = n(90444),
        w = n(29746),
        C = n(20662),
        _ = n(31935),
        q = n(15337);
      async function E(e, t) {
        var n, r, o, u;
        let { account: s = e.account, chain: l = e.chain, ...c } = t;
        if (!s)
          throw new b.o({ docsPath: "/docs/actions/wallet/signTransaction" });
        let d = (0, m.T)(s);
        (0, q.F)({ account: d, ...t });
        let h = await (0, _.s)(e, i.L, "getChainId")({});
        null !== l && (0, w.q)({ currentChainId: h, chain: l });
        let f =
            (null == l ? void 0 : l.formatters) ||
            (null === (n = e.chain) || void 0 === n ? void 0 : n.formatters),
          y =
            (null == f
              ? void 0
              : null === (r = f.transactionRequest) || void 0 === r
              ? void 0
              : r.format) || C.tG;
        return "local" === d.type
          ? d.signTransaction(
              { ...c, chainId: h },
              {
                serializer:
                  null === (u = e.chain) || void 0 === u
                    ? void 0
                    : null === (o = u.serializers) || void 0 === o
                    ? void 0
                    : o.transaction,
              }
            )
          : await e.request(
              {
                method: "eth_signTransaction",
                params: [{ ...y(c), chainId: (0, a.eC)(h), from: d.address }],
              },
              { retryCount: 0 }
            );
      }
      var I = n(78606);
      async function T(e, t) {
        let { id: n } = t;
        await e.request(
          {
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0, a.eC)(n) }],
          },
          { retryCount: 0 }
        );
      }
      async function k(e, t) {
        return await e.request(
          { method: "wallet_watchAsset", params: t },
          { retryCount: 0 }
        );
      }
      var F = n(37771);
      function M(e) {
        return {
          addChain: (t) => o(e, t),
          deployContract: (t) =>
            (function (e, t) {
              let { abi: n, args: r, bytecode: i, ...a } = t,
                o = (0, u.w)({ abi: n, args: r, bytecode: i });
              return (0, s.T)(e, { ...a, data: o });
            })(e, t),
          getAddresses: () => c(e),
          getChainId: () => (0, i.L)(e),
          getPermissions: () => d(e),
          prepareTransactionRequest: (t) => (0, h.Z)(e, t),
          requestAddresses: () => f(e),
          requestPermissions: (t) => y(e, t),
          sendRawTransaction: (t) => (0, g.p)(e, t),
          sendTransaction: (t) => (0, s.T)(e, t),
          signMessage: (t) => (0, p.l)(e, t),
          signTransaction: (t) => E(e, t),
          signTypedData: (t) => (0, I.x)(e, t),
          switchChain: (t) => T(e, t),
          watchAsset: (t) => k(e, t),
          writeContract: (t) => (0, F.n)(e, t),
        };
      }
      var x = n(38507);
      async function O(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = await (0, x.e)(e, t);
        return n.extend(M), n.extend(M);
      }
      var S = n(73054),
        K = n(64090),
        P = n(38760),
        A = n(39296),
        D = n(43089),
        B = n(42887);
      function R() {
        var e, t, n;
        let i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { query: a = {}, ...o } = i,
          u = (0, B.useConfig)(o),
          s = (0, r.NL)(),
          { address: l, connector: c, status: d } = (0, A.useAccount)(),
          h = (0, D.useChainId)(),
          { queryKey: f, ...y } = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              gcTime: 0,
              async queryFn(n) {
                let { queryKey: r } = n,
                  { connector: i } = t,
                  { connectorUid: a, scopeKey: o, ...u } = r[1];
                return O(e, { ...u, connector: i });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { connector: t, ...n } = e;
                return [
                  "walletClient",
                  { ...(0, S.O)(n), connectorUid: null == t ? void 0 : t.uid },
                ];
              })(t),
            };
          })(u, {
            ...i,
            chainId: null !== (e = i.chainId) && void 0 !== e ? e : h,
            connector: null !== (t = i.connector) && void 0 !== t ? t : c,
          }),
          g = !!(
            "disconnected" !== d &&
            (null === (n = a.enabled) || void 0 === n || n)
          );
        return (
          (0, K.useEffect)(() => {
            l
              ? s.invalidateQueries({ queryKey: f })
              : s.removeQueries({ queryKey: f });
          }, [l, s]),
          (0, P.aM)({ ...a, ...y, queryKey: f, enabled: g, staleTime: 1 / 0 })
        );
      }
    },
    46533: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useWatchBlockNumber: function () {
            return s;
          },
        });
      var r = n(31462),
        i = n(37225),
        a = n(64090),
        o = n(43089),
        u = n(42887);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onBlockNumber: s, config: l, ...c } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)(),
          f = null !== (e = t.chainId) && void 0 !== e ? e : h;
        (0, a.useEffect)(() => {
          if (n && s)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                s = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.q, "watchBlockNumber")(u));
                },
                l = s(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    (e) => {
                      let { chainId: t } = e;
                      return t;
                    },
                    async (e) => s(e)
                  )),
                () => {
                  null == l || l(), null == a || a();
                }
              );
            })(d, { ...c, chainId: f, onBlockNumber: s });
        }, [f, d, n, s, c]);
      }
    },
    35642: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useWatchBlocks: function () {
            return s;
          },
        });
      var r = n(17448),
        i = n(37225),
        a = n(64090),
        o = n(43089),
        u = n(42887);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onBlock: s, config: l, ...c } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)(),
          f = null !== (e = t.chainId) && void 0 !== e ? e : h;
        (0, a.useEffect)(() => {
          if (n && s)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                s = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.p, "watchBlocks")(u));
                },
                l = s(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    (e) => {
                      let { chainId: t } = e;
                      return t;
                    },
                    async (e) => s(e)
                  )),
                () => {
                  null == l || l(), null == a || a();
                }
              );
            })(d, { ...c, chainId: f, onBlock: s });
        }, [f, d, n, s, c]);
      }
    },
    13694: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useWatchContractEvent: function () {
            return s;
          },
        });
      var r = n(8553),
        i = n(37225),
        a = n(64090),
        o = n(43089),
        u = n(42887);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onLogs: s, config: l, ...c } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)(),
          f = null !== (e = t.chainId) && void 0 !== e ? e : h;
        (0, a.useEffect)(() => {
          if (n && s)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                s = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.Y, "watchContractEvent")(u));
                },
                l = s(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    (e) => {
                      let { chainId: t } = e;
                      return t;
                    },
                    async (e) => s(e)
                  )),
                () => {
                  null == l || l(), null == a || a();
                }
              );
            })(d, { ...c, chainId: f, onLogs: s });
        }, [f, d, n, c, s]);
      }
    },
    97896: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          useWatchPendingTransactions: function () {
            return s;
          },
        });
      var r = n(67690),
        i = n(37225),
        a = n(64090),
        o = n(43089),
        u = n(42887);
      function s() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: n = !0, onTransactions: s, config: l, ...c } = t,
          d = (0, u.useConfig)(t),
          h = (0, o.useChainId)(),
          f = null !== (e = t.chainId) && void 0 !== e ? e : h;
        (0, a.useEffect)(() => {
          if (n && s)
            return (function (e, t) {
              let n, a;
              let {
                  syncConnectedChain: o = e._internal.syncConnectedChain,
                  ...u
                } = t,
                s = (t) => {
                  n && n();
                  let a = e.getClient({ chainId: t });
                  return (n = (0, i.s)(a, r.O, "watchPendingTransactions")(u));
                },
                l = s(t.chainId);
              return (
                o &&
                  !t.chainId &&
                  (a = e.subscribe(
                    (e) => {
                      let { chainId: t } = e;
                      return t;
                    },
                    async (e) => s(e)
                  )),
                () => {
                  null == l || l(), null == a || a();
                }
              );
            })(d, { ...c, chainId: f, onTransactions: s });
        }, [f, d, n, s, c]);
      }
    },
  },
]);
