"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5587],
  {
    25587: function (t, e, i) {
      let s, n;
      i.d(e, {
        E: function () {
          return n9;
        },
      });
      var r,
        o,
        a = i(64090);
      let l = (0, a.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        h = (0, a.createContext)({}),
        u = (0, a.createContext)(null),
        d = "undefined" != typeof document,
        c = d ? a.useLayoutEffect : a.useEffect,
        p = (0, a.createContext)({ strict: !1 }),
        m = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        f = "data-" + m("framerAppearId"),
        v = { skipAnimations: !1, useManualTiming: !1 };
      class g {
        add(t) {
          if (!this.scheduled.has(t))
            return this.scheduled.add(t), this.order.push(t), !0;
        }
        remove(t) {
          let e = this.order.indexOf(t);
          -1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
      }
      let y = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function x(t, e) {
        let i = !1,
          s = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = y.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new g(),
                  i = new g(),
                  s = 0,
                  n = !1,
                  r = !1,
                  o = new WeakSet(),
                  a = {
                    schedule: function (t) {
                      let r =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        a =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2],
                        l = a && n,
                        h = l ? e : i;
                      return (
                        r && o.add(t),
                        h.add(t) && l && n && (s = e.order.length),
                        t
                      );
                    },
                    cancel: (t) => {
                      i.remove(t), o.delete(t);
                    },
                    process: (l) => {
                      if (n) {
                        r = !0;
                        return;
                      }
                      if (
                        ((n = !0),
                        ([e, i] = [i, e]),
                        i.clear(),
                        (s = e.order.length))
                      )
                        for (let i = 0; i < s; i++) {
                          let s = e.order[i];
                          o.has(s) && (a.schedule(s), t()), s(l);
                        }
                      (n = !1), r && ((r = !1), a.process(l));
                    },
                  };
                return a;
              })(() => (i = !0))),
              t
            ),
            {}
          ),
          o = (t) => {
            r[t].process(n);
          },
          a = () => {
            let r = v.useManualTiming ? n.timestamp : performance.now();
            (i = !1),
              (n.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - n.timestamp, 40), 1)),
              (n.timestamp = r),
              (n.isProcessing = !0),
              y.forEach(o),
              (n.isProcessing = !1),
              i && e && ((s = !1), t(a));
          },
          l = () => {
            (i = !0), (s = !0), n.isProcessing || t(a);
          };
        return {
          schedule: y.reduce((t, e) => {
            let s = r[e];
            return (
              (t[e] = function (t) {
                let e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                return i || l(), s.schedule(t, e, n);
              }),
              t
            );
          }, {}),
          cancel: (t) => y.forEach((e) => r[e].cancel(t)),
          state: n,
          steps: r,
        };
      }
      let { schedule: P, cancel: T } = x(queueMicrotask, !1);
      function b(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function w(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function S(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let A = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        V = ["initial", ...A];
      function E(t) {
        return S(t.animate) || V.some((e) => w(t[e]));
      }
      function M(t) {
        return !!(E(t) || t.variants);
      }
      function C(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let R = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        D = {};
      for (let t in R) D[t] = { isEnabled: (e) => R[t].some((t) => !!e[t]) };
      let k = (0, a.createContext)({}),
        F = (0, a.createContext)({}),
        L = Symbol.for("motionComponentSymbol"),
        j = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function B(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (j.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let O = {},
        I = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        U = new Set(I);
      function N(t, e) {
        let { layout: i, layoutId: s } = e;
        return (
          U.has(t) ||
          t.startsWith("origin") ||
          ((i || void 0 !== s) && (!!O[t] || "opacity" === t))
        );
      }
      let W = (t) => !!(t && t.getVelocity),
        H = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        z = I.length,
        Y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        K = Y("--"),
        X = Y("var(--"),
        G = (t) => !!X(t) && q.test(t.split("/*")[0].trim()),
        q =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        Z = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        _ = (t, e, i) => (i > e ? e : i < t ? t : i),
        $ = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        J = { ...$, transform: (t) => _(0, 1, t) },
        Q = { ...$, default: 1 },
        tt = (t) => Math.round(1e5 * t) / 1e5,
        te = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        ti =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        ts =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function tn(t) {
        return "string" == typeof t;
      }
      let tr = (t) => ({
          test: (e) => tn(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => "".concat(e).concat(t),
        }),
        to = tr("deg"),
        ta = tr("%"),
        tl = tr("px"),
        th = tr("vh"),
        tu = tr("vw"),
        td = {
          ...ta,
          parse: (t) => ta.parse(t) / 100,
          transform: (t) => ta.transform(100 * t),
        },
        tc = { ...$, transform: Math.round },
        tp = {
          borderWidth: tl,
          borderTopWidth: tl,
          borderRightWidth: tl,
          borderBottomWidth: tl,
          borderLeftWidth: tl,
          borderRadius: tl,
          radius: tl,
          borderTopLeftRadius: tl,
          borderTopRightRadius: tl,
          borderBottomRightRadius: tl,
          borderBottomLeftRadius: tl,
          width: tl,
          maxWidth: tl,
          height: tl,
          maxHeight: tl,
          size: tl,
          top: tl,
          right: tl,
          bottom: tl,
          left: tl,
          padding: tl,
          paddingTop: tl,
          paddingRight: tl,
          paddingBottom: tl,
          paddingLeft: tl,
          margin: tl,
          marginTop: tl,
          marginRight: tl,
          marginBottom: tl,
          marginLeft: tl,
          rotate: to,
          rotateX: to,
          rotateY: to,
          rotateZ: to,
          scale: Q,
          scaleX: Q,
          scaleY: Q,
          scaleZ: Q,
          skew: to,
          skewX: to,
          skewY: to,
          distance: tl,
          translateX: tl,
          translateY: tl,
          translateZ: tl,
          x: tl,
          y: tl,
          z: tl,
          perspective: tl,
          transformPerspective: tl,
          opacity: J,
          originX: td,
          originY: td,
          originZ: tl,
          zIndex: tc,
          backgroundPositionX: tl,
          backgroundPositionY: tl,
          fillOpacity: J,
          strokeOpacity: J,
          numOctaves: tc,
        };
      function tm(t, e, i, s) {
        let { style: n, vars: r, transform: o, transformOrigin: a } = t,
          l = !1,
          h = !1,
          u = !0;
        for (let t in e) {
          let i = e[t];
          if (K(t)) {
            r[t] = i;
            continue;
          }
          let s = tp[t],
            d = Z(i, s);
          if (U.has(t)) {
            if (((l = !0), (o[t] = d), !u)) continue;
            i !== (s.default || 0) && (u = !1);
          } else t.startsWith("origin") ? ((h = !0), (a[t] = d)) : (n[t] = d);
        }
        if (
          (!e.transform &&
            (l || s
              ? (n.transform = (function (t, e, i, s) {
                  let {
                      enableHardwareAcceleration: n = !0,
                      allowTransformNone: r = !0,
                    } = e,
                    o = "";
                  for (let e = 0; e < z; e++) {
                    let i = I[e];
                    if (void 0 !== t[i]) {
                      let e = H[i] || i;
                      o += "".concat(e, "(").concat(t[i], ") ");
                    }
                  }
                  return (
                    n && !t.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    s ? (o = s(t, i ? "" : o)) : r && i && (o = "none"),
                    o
                  );
                })(t.transform, i, u, s))
              : n.transform && (n.transform = "none")),
          h)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = "".concat(t, " ").concat(e, " ").concat(i);
        }
      }
      let tf = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tv(t, e, i) {
        for (let s in e) W(e[s]) || N(s, i) || (t[s] = e[s]);
      }
      let tg = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function ty(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          tg.has(t)
        );
      }
      let tx = (t) => !ty(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (tx = (t) => (t.startsWith("on") ? !ty(t) : r(t)));
      } catch (t) {}
      function tP(t, e, i) {
        return "string" == typeof t ? t : tl.transform(e + i * t);
      }
      let tT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tb = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tw(t, e, i, s, n) {
        let {
          attrX: r,
          attrY: o,
          attrScale: a,
          originX: l,
          originY: h,
          pathLength: u,
          pathSpacing: d = 1,
          pathOffset: c = 0,
          ...p
        } = e;
        if ((tm(t, p, i, n), s)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: m, style: f, dimensions: v } = t;
        m.transform && (v && (f.transform = m.transform), delete m.transform),
          v &&
            (void 0 !== l || void 0 !== h || f.transform) &&
            (f.transformOrigin = (function (t, e, i) {
              let s = tP(e, t.x, t.width),
                n = tP(i, t.y, t.height);
              return "".concat(s, " ").concat(n);
            })(v, void 0 !== l ? l : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== r && (m.x = r),
          void 0 !== o && (m.y = o),
          void 0 !== a && (m.scale = a),
          void 0 !== u &&
            (function (t, e) {
              let i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1,
                s =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0,
                n =
                  !(arguments.length > 4) ||
                  void 0 === arguments[4] ||
                  arguments[4];
              t.pathLength = 1;
              let r = n ? tT : tb;
              t[r.offset] = tl.transform(-s);
              let o = tl.transform(e),
                a = tl.transform(i);
              t[r.array] = "".concat(o, " ").concat(a);
            })(m, u, d, c, !1);
      }
      let tS = () => ({ ...tf(), attrs: {} }),
        tA = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tV(t, e, i, s) {
        let { style: n, vars: r } = e;
        for (let e in (Object.assign(t.style, n, s && s.getProjectionStyles(i)),
        r))
          t.style.setProperty(e, r[e]);
      }
      let tE = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tM(t, e, i, s) {
        for (let i in (tV(t, e, void 0, s), e.attrs))
          t.setAttribute(tE.has(i) ? i : m(i), e.attrs[i]);
      }
      function tC(t, e) {
        let { style: i } = t,
          s = {};
        for (let n in i)
          (W(i[n]) || (e.style && W(e.style[n])) || N(n, t)) && (s[n] = i[n]);
        return s;
      }
      function tR(t, e) {
        let i = tC(t, e);
        for (let s in t)
          (W(t[s]) || W(e[s])) &&
            (i[
              -1 !== I.indexOf(s)
                ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
                : s
            ] = t[s]);
        return i;
      }
      function tD(t, e, i) {
        let s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          n =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          e
        );
      }
      let tk = (t) => Array.isArray(t),
        tF = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        tL = (t) => (tk(t) ? t[t.length - 1] || 0 : t);
      function tj(t) {
        let e = W(t) ? t.get() : t;
        return tF(e) ? e.toValue() : e;
      }
      let tB = (t) => (e, i) => {
          let s = (0, a.useContext)(h),
            n = (0, a.useContext)(u),
            r = () =>
              (function (t, e, i, s) {
                let {
                    scrapeMotionValuesFromProps: n,
                    createRenderState: r,
                    onMount: o,
                  } = t,
                  a = {
                    latestValues: (function (t, e, i, s) {
                      let n = {},
                        r = s(t, {});
                      for (let t in r) n[t] = tj(r[t]);
                      let { initial: o, animate: a } = t,
                        l = E(t),
                        h = M(t);
                      e &&
                        h &&
                        !l &&
                        !1 !== t.inherit &&
                        (void 0 === o && (o = e.initial),
                        void 0 === a && (a = e.animate));
                      let u = !!i && !1 === i.initial,
                        d = (u = u || !1 === o) ? a : o;
                      return (
                        d &&
                          "boolean" != typeof d &&
                          !S(d) &&
                          (Array.isArray(d) ? d : [d]).forEach((e) => {
                            let i = tD(t, e);
                            if (!i) return;
                            let { transitionEnd: s, transition: r, ...o } = i;
                            for (let t in o) {
                              let e = o[t];
                              if (Array.isArray(e)) {
                                let t = u ? e.length - 1 : 0;
                                e = e[t];
                              }
                              null !== e && (n[t] = e);
                            }
                            for (let t in s) n[t] = s[t];
                          }),
                        n
                      );
                    })(e, i, s, n),
                    renderState: r(),
                  };
                return o && (a.mount = (t) => o(e, t, a)), a;
              })(t, e, s, n);
          return i
            ? r()
            : (function (t) {
                let e = (0, a.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(r);
        },
        tO = (t) => t,
        {
          schedule: tI,
          cancel: tU,
          state: tN,
          steps: tW,
        } = x(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : tO,
          !0
        ),
        tH = {
          useVisualState: tB({
            scrapeMotionValuesFromProps: tR,
            createRenderState: tS,
            onMount: (t, e, i) => {
              let { renderState: s, latestValues: n } = i;
              tI.read(() => {
                try {
                  s.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  s.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tI.render(() => {
                  tw(
                    s,
                    n,
                    { enableHardwareAcceleration: !1 },
                    tA(e.tagName),
                    t.transformTemplate
                  ),
                    tM(e, s);
                });
            },
          }),
        },
        tz = {
          useVisualState: tB({
            scrapeMotionValuesFromProps: tC,
            createRenderState: tf,
          }),
        };
      function tY(t, e, i) {
        let s =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      let tK = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tX(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tG = (t) => (e) => tK(e) && t(e, tX(e));
      function tq(t, e, i, s) {
        return tY(t, e, tG(i), s);
      }
      let tZ = (t, e) => (i) => e(t(i)),
        t_ = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e.reduce(tZ);
        };
      function t$(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tJ = t$("dragHorizontal"),
        tQ = t$("dragVertical");
      function t0(t) {
        let e = !1;
        if ("y" === t) e = tQ();
        else if ("x" === t) e = tJ();
        else {
          let t = tJ(),
            i = tQ();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function t1() {
        let t = t0(!0);
        return !t || (t(), !1);
      }
      class t2 {
        update() {}
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
      }
      function t5(t, e) {
        let i = "onHover" + (e ? "Start" : "End");
        return tq(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (s, n) => {
            if ("touch" === s.pointerType || t1()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e),
              r[i] && r[i](s, n);
          },
          { passive: !t.getProps()[i] }
        );
      }
      class t3 extends t2 {
        mount() {
          this.unmount = t_(t5(this.node, !0), t5(this.node, !1));
        }
        unmount() {}
      }
      class t4 extends t2 {
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = t_(
            tY(this.node.current, "focus", () => this.onFocus()),
            tY(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
      }
      let t9 = (t, e) => !!e && (t === e || t9(t, e.parentElement));
      function t6(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tX(i));
      }
      class t8 extends t2 {
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && i(t, e);
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !t1()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && i(t, e);
        }
        mount() {
          let t = this.node.getProps(),
            e = tq(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = tY(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = t_(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tO),
            (this.removeEndListeners = tO),
            (this.removeAccessibleListeners = tO),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = tq(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: i,
                      onTapCancel: s,
                      globalTapTarget: n,
                    } = this.node.getProps();
                    n || t9(this.node.current, t.target)
                      ? i && i(t, e)
                      : s && s(t, e);
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = tq(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = t_(s, n)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tY(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tY(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          t6("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && i(t, e);
                          });
                      }
                    )),
                    t6("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tY(this.node.current, "blur", () => {
                  this.isPressing &&
                    t6("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = t_(t, e);
            });
        }
      }
      let t7 = new WeakMap(),
        et = new WeakMap(),
        ee = (t) => {
          let e = t7.get(t.target);
          e && e(t);
        },
        ei = (t) => {
          t.forEach(ee);
        },
        es = { some: 0, all: 1 };
      class en extends t2 {
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: s = "some", once: n } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof s ? s : es[s],
            };
          return (function (t, e, i) {
            let s = (function (t) {
              let { root: e, ...i } = t,
                s = e || document;
              et.has(s) || et.set(s, {});
              let n = et.get(s),
                r = JSON.stringify(i);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(ei, { root: e, ...i })),
                n[r]
              );
            })(e);
            return (
              t7.set(t, i),
              s.observe(t),
              () => {
                t7.delete(t), s.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: s } =
                this.node.getProps(),
              r = e ? i : s;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function (t) {
              let { viewport: e = {} } = t,
                { viewport: i = {} } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              return (t) => e[t] !== i[t];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
      }
      function er(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function eo(t, e, i) {
        let s = t.getProps();
        return tD(
          s,
          e,
          void 0 !== i ? i : s.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let ea = (t) => 1e3 * t,
        el = (t) => t / 1e3,
        eh = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eu = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ed = { type: "keyframes", duration: 0.8 },
        ec = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ep = (t, e) => {
          let { keyframes: i } = e;
          return i.length > 2
            ? ed
            : U.has(t)
            ? t.startsWith("scale")
              ? eu(i[1])
              : eh
            : ec;
        };
      function em(t, e) {
        return t[e] || t.default || t;
      }
      let ef = { current: !1 },
        ev = (t) => null !== t;
      function eg(t, e, i) {
        let { repeat: s, repeatType: n = "loop" } = e,
          r = t.filter(ev),
          o = s && "loop" !== n && s % 2 == 1 ? 0 : r.length - 1;
        return o && void 0 !== i ? i : r[o];
      }
      function ey() {
        s = void 0;
      }
      let ex = {
          now: () => (
            void 0 === s &&
              ex.set(
                tN.isProcessing || v.useManualTiming
                  ? tN.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(ey);
          },
        },
        eP = (t) => /^0[^.\s]+$/u.test(t),
        eT = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        eb = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ew = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        eS = (t) => t === $ || t === tl,
        eA = (t, e) => parseFloat(t.split(", ")[e]),
        eV = (t, e) => (i, s) => {
          let { transform: n } = s;
          if ("none" === n || !n) return 0;
          let r = n.match(/^matrix3d\((.+)\)$/u);
          if (r) return eA(r[1], e);
          {
            let e = n.match(/^matrix\((.+)\)$/u);
            return e ? eA(e[1], t) : 0;
          }
        },
        eE = new Set(["x", "y", "z"]),
        eM = I.filter((t) => !eE.has(t));
      function eC(t) {
        let e = [];
        return (
          eM.forEach((i) => {
            let s = t.getValue(i);
            void 0 !== s &&
              (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let eR = {
        width: (t, e) => {
          let { x: i } = t,
            { paddingLeft: s = "0", paddingRight: n = "0" } = e;
          return i.max - i.min - parseFloat(s) - parseFloat(n);
        },
        height: (t, e) => {
          let { y: i } = t,
            { paddingTop: s = "0", paddingBottom: n = "0" } = e;
          return i.max - i.min - parseFloat(s) - parseFloat(n);
        },
        top: (t, e) => {
          let { top: i } = e;
          return parseFloat(i);
        },
        left: (t, e) => {
          let { left: i } = e;
          return parseFloat(i);
        },
        bottom: (t, e) => {
          let { y: i } = t,
            { top: s } = e;
          return parseFloat(s) + (i.max - i.min);
        },
        right: (t, e) => {
          let { x: i } = t,
            { left: s } = e;
          return parseFloat(s) + (i.max - i.min);
        },
        x: eV(4, 13),
        y: eV(5, 14),
      };
      (eR.translateX = eR.x), (eR.translateY = eR.y);
      let eD = (t) => (e) => e.test(t),
        ek = [
          $,
          tl,
          ta,
          to,
          tu,
          th,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        eF = (t) => ek.find(eD(t)),
        eL = new Set(),
        ej = !1,
        eB = !1;
      function eO() {
        if (eB) {
          let t = Array.from(eL).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            eC(t).length && (i.set(t, eC(t)), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eB = !1), (ej = !1), eL.forEach((t) => t.complete()), eL.clear();
      }
      function eI() {
        eL.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eB = !0);
        });
      }
      class eU {
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eL.add(this),
                ej || ((ej = !0), tI.read(eI), tI.resolveKeyframes(eO)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == s ? void 0 : s.get(),
                  r = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let s = i.readValue(e, r);
                  null != s && (t[0] = s);
                }
                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eL.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eL.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
      }
      let eN = (t, e) => (i) =>
          !!(
            (tn(i) && ts.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eW = (t, e, i) => (s) => {
          if (!tn(s)) return s;
          let [n, r, o, a] = s.match(te);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eH = (t) => _(0, 255, t),
        ez = { ...$, transform: (t) => Math.round(eH(t)) },
        eY = {
          test: eN("rgb", "red"),
          parse: eW("red", "green", "blue"),
          transform: (t) => {
            let { red: e, green: i, blue: s, alpha: n = 1 } = t;
            return (
              "rgba(" +
              ez.transform(e) +
              ", " +
              ez.transform(i) +
              ", " +
              ez.transform(s) +
              ", " +
              tt(J.transform(n)) +
              ")"
            );
          },
        },
        eK = {
          test: eN("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: eY.transform,
        },
        eX = {
          test: eN("hsl", "hue"),
          parse: eW("hue", "saturation", "lightness"),
          transform: (t) => {
            let { hue: e, saturation: i, lightness: s, alpha: n = 1 } = t;
            return (
              "hsla(" +
              Math.round(e) +
              ", " +
              ta.transform(tt(i)) +
              ", " +
              ta.transform(tt(s)) +
              ", " +
              tt(J.transform(n)) +
              ")"
            );
          },
        },
        eG = {
          test: (t) => eY.test(t) || eK.test(t) || eX.test(t),
          parse: (t) =>
            eY.test(t) ? eY.parse(t) : eX.test(t) ? eX.parse(t) : eK.parse(t),
          transform: (t) =>
            tn(t)
              ? t
              : t.hasOwnProperty("red")
              ? eY.transform(t)
              : eX.transform(t),
        },
        eq = "number",
        eZ = "color",
        e_ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function e$(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              e_,
              (t) => (
                eG.test(t)
                  ? (s.color.push(r), n.push(eZ), i.push(eG.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(eq), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: s, types: n };
      }
      function eJ(t) {
        return e$(t).values;
      }
      function eQ(t) {
        let { split: e, types: i } = e$(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === eq
                ? (n += tt(t[r]))
                : e === eZ
                ? (n += eG.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let e0 = (t) => ("number" == typeof t ? 0 : t),
        e1 = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              tn(t) &&
              ((null === (e = t.match(te)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(ti)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eJ,
          createTransformer: eQ,
          getAnimatableNone: function (t) {
            let e = eJ(t);
            return eQ(t)(e.map(e0));
          },
        },
        e2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function e5(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(te) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = e2.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let e3 = /\b([a-z-]*)\(.*?\)/gu,
        e4 = {
          ...e1,
          getAnimatableNone: (t) => {
            let e = t.match(e3);
            return e ? e.map(e5).join(" ") : t;
          },
        },
        e9 = {
          ...tp,
          color: eG,
          backgroundColor: eG,
          outlineColor: eG,
          fill: eG,
          stroke: eG,
          borderColor: eG,
          borderTopColor: eG,
          borderRightColor: eG,
          borderBottomColor: eG,
          borderLeftColor: eG,
          filter: e4,
          WebkitFilter: e4,
        },
        e6 = (t) => e9[t];
      function e8(t, e) {
        let i = e6(t);
        return (
          i !== e4 && (i = e1),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      class e7 extends eU {
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && G(s)) {
              let n = (function t(e, i) {
                let s =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 1;
                tO(
                  s <= 4,
                  'Max CSS variable fallback depth detected in property "'.concat(
                    e,
                    '". This may indicate a circular fallback dependency.'
                  )
                );
                let [n, r] = (function (t) {
                  let e = eb.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return ["--".concat(null != i ? i : s), n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return eT(t) ? parseFloat(t) : t;
                }
                return G(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n);
            }
          }
          if (!ew.has(i) || 2 !== t.length) return this.resolveNoneKeyframes();
          let [s, n] = t,
            r = eF(s),
            o = eF(n);
          if (r !== o) {
            if (eS(r) && eS(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var s;
            ("number" == typeof (s = t[e])
              ? 0 === s
              : null === s || "none" === s || "0" === s || eP(s)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; )
                "string" == typeof t[n] &&
                  "none" !== t[n] &&
                  "0" !== t[n] &&
                  (s = t[n]),
                  n++;
              if (s && i) for (let n of e) t[n] = e8(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eR[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = eR[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o && (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach((t) => {
                let [i, s] = t;
                e.getValue(i).set(s);
              }),
            this.resolveNoneKeyframes();
        }
        constructor(t, e, i, s) {
          super(t, e, i, s, null == s ? void 0 : s.owner, !0);
        }
      }
      let it = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (e1.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class ie {
        get resolved() {
          return this._resolved || (eI(), eO()), this._resolved;
        }
        onKeyframesResolved(t, e) {
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
          } = this.options;
          if (
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              let r = t[t.length - 1],
                o = it(n, e),
                a = it(r, e);
              return (
                tO(
                  o === a,
                  "You are trying to animate "
                    .concat(e, ' from "')
                    .concat(n, '" to "')
                    .concat(r, '". ')
                    .concat(
                      n,
                      " is not an animatable value - to enable this animation set "
                    )
                    .concat(n, " to a value animatable to ")
                    .concat(r, " via the `style` property.")
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, s, n)
          ) {
            if (ef.current || !r) {
              null == a || a(eg(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise(),
                this.updateFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          (this._resolved = {
            keyframes: t,
            finalKeyframe: e,
            ...this.initPlayback(t, e),
          }),
            this.onPostResolved();
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = () => {
              t(), this.updateFinishedPromise();
            };
          });
        }
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
      }
      function ii(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? (1e3 / n) * s : 0;
      }
      function is(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ir = ["duration", "bounce"],
        io = ["stiffness", "damping", "mass"];
      function ia(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function il(t) {
        let e,
          { keyframes: i, restDelta: s, restSpeed: n, ...r } = t,
          o = i[0],
          a = i[i.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: h,
            damping: u,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ia(t, io) && ia(t, ir)) {
              let i = (function (t) {
                let e,
                  i,
                  {
                    duration: s = 800,
                    bounce: n = 0.25,
                    velocity: r = 0,
                    mass: o = 1,
                  } = t;
                tO(s <= ea(10), "Spring duration must be 10 seconds or less");
                let a = 1 - n;
                (a = _(0.05, 1, a)),
                  (s = _(0.01, 10, el(s))),
                  a < 1
                    ? ((e = (t) => {
                        let e = t * a,
                          i = e * s;
                        return 0.001 - ((e - r) / is(t, a)) * Math.exp(-i);
                      }),
                      (i = (t) => {
                        let i = t * a * s,
                          n = Math.pow(a, 2) * Math.pow(t, 2) * s,
                          o = is(Math.pow(t, 2), a);
                        return (
                          ((i * r + r - n) *
                            Math.exp(-i) *
                            (-e(t) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((e = (t) =>
                        -0.001 + Math.exp(-t * s) * ((t - r) * s + 1)),
                      (i = (t) => s * s * (r - t) * Math.exp(-t * s)));
                let l = (function (t, e, i) {
                  let s = i;
                  for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                  return s;
                })(e, i, 5 / s);
                if (((s = ea(s)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: s };
                {
                  let t = Math.pow(l, 2) * o;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(o * t),
                    duration: s,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...r, velocity: -el(r.velocity || 0) }),
          f = p || 0,
          v = u / (2 * Math.sqrt(h * d)),
          g = a - o,
          y = el(Math.sqrt(h / d)),
          x = 5 > Math.abs(g);
        if ((n || (n = x ? 0.01 : 2), s || (s = x ? 0.005 : 0.5), v < 1)) {
          let t = is(y, v);
          e = (e) =>
            a -
            Math.exp(-v * y * e) *
              (((f + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          e = (t) => a - Math.exp(-y * t) * (g + (f + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          e = (e) => {
            let i = Math.exp(-v * y * e),
              s = Math.min(t * e, 300);
            return (
              a -
              (i * ((f + v * y * g) * Math.sinh(s) + t * g * Math.cosh(s))) / t
            );
          };
        }
        return {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let i = e(t);
            if (m) l.done = t >= c;
            else {
              let r = f;
              0 !== t && (r = v < 1 ? ii(e, t, i) : 0);
              let o = Math.abs(r) <= n,
                h = Math.abs(a - i) <= s;
              l.done = o && h;
            }
            return (l.value = l.done ? a : i), l;
          },
        };
      }
      function ih(t) {
        let e,
          i,
          {
            keyframes: s,
            velocity: n = 0,
            power: r = 0.8,
            timeConstant: o = 325,
            bounceDamping: a = 10,
            bounceStiffness: l = 500,
            modifyTarget: h,
            min: u,
            max: d,
            restDelta: c = 0.5,
            restSpeed: p,
          } = t,
          m = s[0],
          f = { done: !1, value: m },
          v = (t) => (void 0 !== u && t < u) || (void 0 !== d && t > d),
          g = (t) =>
            void 0 === u
              ? d
              : void 0 === d
              ? u
              : Math.abs(u - t) < Math.abs(d - t)
              ? u
              : d,
          y = r * n,
          x = m + y,
          P = void 0 === h ? x : h(x);
        P !== x && (y = P - m);
        let T = (t) => -y * Math.exp(-t / o),
          b = (t) => P + T(t),
          w = (t) => {
            let e = T(t),
              i = b(t);
            (f.done = Math.abs(e) <= c), (f.value = f.done ? P : i);
          },
          S = (t) => {
            v(f.value) &&
              ((e = t),
              (i = il({
                keyframes: [f.value, g(f.value)],
                velocity: ii(b, t, f.value),
                damping: a,
                stiffness: l,
                restDelta: c,
                restSpeed: p,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let s = !1;
              return (i || void 0 !== e || ((s = !0), w(t), S(t)),
              void 0 !== e && t >= e)
                ? i.next(t - e)
                : (s || w(t), f);
            },
          }
        );
      }
      let iu = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function id(t, e, i, s) {
        if (t === e && i === s) return tO;
        let n = (e) =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do
              (r = iu((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : iu(n(t), e, s));
      }
      let ic = id(0.42, 0, 1, 1),
        ip = id(0, 0, 0.58, 1),
        im = id(0.42, 0, 0.58, 1),
        iv = (t) => Array.isArray(t) && "number" != typeof t[0],
        ig = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iy = (t) => (e) => 1 - t(1 - e),
        ix = (t) => 1 - Math.sin(Math.acos(t)),
        iP = iy(ix),
        iT = ig(ix),
        ib = id(0.33, 1.53, 0.69, 0.99),
        iw = iy(ib),
        iS = ig(iw),
        iA = {
          linear: tO,
          easeIn: ic,
          easeInOut: im,
          easeOut: ip,
          circIn: ix,
          circInOut: iT,
          circOut: iP,
          backIn: iw,
          backInOut: iS,
          backOut: ib,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * iw(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        iV = (t) => {
          if (Array.isArray(t)) {
            tO(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return id(e, i, s, n);
          }
          return "string" == typeof t
            ? (tO(void 0 !== iA[t], "Invalid easing type '".concat(t, "'")),
              iA[t])
            : t;
        },
        iE = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        iM = (t, e, i) => t + (e - t) * i;
      function iC(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let iR = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        iD = [eK, eY, eX],
        ik = (t) => iD.find((e) => e.test(t));
      function iF(t) {
        let e = ik(t);
        tO(
          !!e,
          "'".concat(
            t,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        let i = e.parse(t);
        return (
          e === eX &&
            (i = (function (t) {
              let { hue: e, saturation: i, lightness: s, alpha: n } = t;
              (e /= 360), (s /= 100);
              let r = 0,
                o = 0,
                a = 0;
              if ((i /= 100)) {
                let t = s < 0.5 ? s * (1 + i) : s + i - s * i,
                  n = 2 * s - t;
                (r = iC(n, t, e + 1 / 3)),
                  (o = iC(n, t, e)),
                  (a = iC(n, t, e - 1 / 3));
              } else r = o = a = s;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let iL = (t, e) => {
        let i = iF(t),
          s = iF(e),
          n = { ...i };
        return (t) => (
          (n.red = iR(i.red, s.red, t)),
          (n.green = iR(i.green, s.green, t)),
          (n.blue = iR(i.blue, s.blue, t)),
          (n.alpha = iM(i.alpha, s.alpha, t)),
          eY.transform(n)
        );
      };
      function ij(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function iB(t, e) {
        return (i) => iM(t, e, i);
      }
      function iO(t) {
        return "number" == typeof t
          ? iB
          : "string" == typeof t
          ? G(t)
            ? ij
            : eG.test(t)
            ? iL
            : iN
          : Array.isArray(t)
          ? iI
          : "object" == typeof t
          ? eG.test(t)
            ? iL
            : iU
          : ij;
      }
      function iI(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => iO(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iU(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = iO(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let iN = (t, e) => {
        let i = e1.createTransformer(e),
          s = e$(t),
          n = e$(e);
        return s.indexes.var.length === n.indexes.var.length &&
          s.indexes.color.length === n.indexes.color.length &&
          s.indexes.number.length >= n.indexes.number.length
          ? t_(
              iI(
                (function (t, e) {
                  var i;
                  let s = [],
                    n = { color: 0, var: 0, number: 0 };
                  for (let r = 0; r < e.values.length; r++) {
                    let o = e.types[r],
                      a = t.indexes[o][n[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (s[r] = l), n[o]++;
                  }
                  return s;
                })(s, n),
                n.values
              ),
              i
            )
          : (tO(
              !0,
              "Complex values '"
                .concat(t, "' and '")
                .concat(
                  e,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                )
            ),
            ij(t, e));
      };
      function iW(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? iM(t, e, i)
          : iO(t)(t, e);
      }
      function iH(t) {
        let {
            duration: e = 300,
            keyframes: i,
            times: s,
            ease: n = "easeInOut",
          } = t,
          r = iv(n) ? n.map(iV) : iV(n),
          o = { done: !1, value: i[0] },
          a = (function (t, e) {
            let {
                clamp: i = !0,
                ease: s,
                mixer: n,
              } = arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
              r = t.length;
            if (
              (tO(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || iW,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = n(t[i], t[i + 1]);
                  e && (r = t_(Array.isArray(e) ? e[i] || tO : e, r)),
                    s.push(r);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = iE(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l(_(t[0], t[r - 1], e)) : l;
          })(
            (s && s.length === i.length
              ? s
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = iE(0, e, s);
                        t.push(iM(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(i)
            ).map((t) => t * e),
            i,
            {
              ease: Array.isArray(r)
                ? r
                : i.map(() => r || im).splice(0, i.length - 1),
            }
          );
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      let iz = (t) => {
          let e = (e) => {
            let { timestamp: i } = e;
            return t(i);
          };
          return {
            start: () => tI.update(e, !0),
            stop: () => tU(e),
            now: () => (tN.isProcessing ? tN.timestamp : ex.now()),
          };
        },
        iY = { decay: ih, inertia: ih, tween: iH, keyframes: iH, spring: il },
        iK = (t) => t / 100;
      class iX extends ie {
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = iY[s] || iH;
          l !== iH &&
            "number" != typeof t[0] &&
            ((e = t_(iK, iW(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + r;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: s,
            generator: n,
            mirroredGenerator: r,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: h,
            resolvedDuration: u,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - h / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > h;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = h);
          let y = this.currentTime,
            x = n;
          if (c) {
            let t = Math.min(this.currentTime, h) / u,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / u))
                  : "mirror" === p && (x = r)),
              (y = _(0, 1, i) * u);
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: T } = P;
          g ||
            null === l ||
            (T =
              this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
          let b =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && T));
          return (
            b && void 0 !== s && (P.value = eg(a, this.options, s)),
            f && f(P.value),
            b && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? el(t.calculatedDuration) : 0;
        }
        get time() {
          return el(this.currentTime);
        }
        set time(t) {
          (t = ea(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = el(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = iz, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        stop() {
          if (((this.isStopped = !0), "idle" === this.state)) return;
          this.state = "idle";
          let { onStop: t } = this.options;
          t && t(), this.teardown();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        constructor({ KeyframeResolver: t = eU, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: i, motionValue: s, keyframes: n } = this.options,
            r = (t, e) => this.onKeyframesResolved(t, e);
          i && s && s.owner
            ? (this.resolver = s.owner.resolveKeyframes(n, r, i, s))
            : (this.resolver = new t(n, r, i, s)),
            this.resolver.scheduleResolve();
        }
      }
      let iG = (t) => Array.isArray(t) && "number" == typeof t[0],
        iq = (t) => {
          let [e, i, s, n] = t;
          return "cubic-bezier("
            .concat(e, ", ")
            .concat(i, ", ")
            .concat(s, ", ")
            .concat(n, ")");
        },
        iZ = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iq([0, 0.65, 0.55, 1]),
          circOut: iq([0.55, 0, 1, 0.45]),
          backIn: iq([0.31, 0.01, 0.66, -0.59]),
          backOut: iq([0.33, 1.53, 0.69, 0.99]),
        },
        i_ =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        i$ = new Set(["opacity", "clipPath", "filter", "transform"]);
      class iJ extends ie {
        initPlayback(t, e) {
          var i;
          let s = this.options.duration || 300;
          if (
            "spring" === (i = this.options).type ||
            "backgroundColor" === i.name ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && iZ[e]) ||
                iG(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(i.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                ...r
              } = this.options,
              o = (function (t, e) {
                let i = new iX({ ...e, keyframes: t, repeat: 0, delay: 0 }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, r);
            (t = o.keyframes),
              (s = o.duration),
              (this.options.times = o.times),
              (this.options.ease = o.ease);
          }
          let { motionValue: n, name: r } = this.options,
            o = (function (t, e, i) {
              let {
                  delay: s = 0,
                  duration: n = 300,
                  repeat: r = 0,
                  repeatType: o = "loop",
                  ease: a,
                  times: l,
                } = arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
                h = { [e]: i };
              l && (h.offset = l);
              let u = (function t(e) {
                if (e)
                  return iG(e) ? iq(e) : Array.isArray(e) ? e.map(t) : iZ[e];
              })(a);
              return (
                Array.isArray(u) && (h.easing = u),
                t.animate(h, {
                  delay: s,
                  duration: n,
                  easing: Array.isArray(u) ? "linear" : u,
                  fill: "both",
                  iterations: r + 1,
                  direction: "reverse" === o ? "alternate" : "normal",
                })
              );
            })(n.owner.current, r, t, { ...this.options, duration: s });
          return (
            (o.startTime = ex.now()),
            this.pendingTimeline
              ? ((o.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (o.onfinish = () => {
                  let { onComplete: i } = this.options;
                  n.set(eg(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise(),
                    this.updateFinishedPromise();
                }),
            { animation: o, duration: s, keyframes: t }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return el(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return el(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = ea(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return tO;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return tO;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          this.isStopped = !0;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e, keyframes: i } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: t,
                  onUpdate: e,
                  onComplete: s,
                  ...n
                } = this.options,
                r = new iX({ ...n, keyframes: i });
              t.setWithVelocity(
                r.sample(this.time - 10).value,
                r.sample(this.time).value,
                10
              );
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            i_() &&
            i &&
            i$.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: s } = this.options;
          (this.resolver = new e7(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
      }
      let iQ = function (t, e, i) {
        let s =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          n = arguments.length > 4 ? arguments[4] : void 0,
          r = arguments.length > 5 ? arguments[5] : void 0;
        return (o) => {
          let a = em(s, t) || {},
            l = a.delay || s.delay || 0,
            { elapsed: h = 0 } = s;
          h -= ea(l);
          let u = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -h,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          !(function (t) {
            let {
              when: e,
              delay: i,
              delayChildren: s,
              staggerChildren: n,
              staggerDirection: r,
              repeat: o,
              repeatType: a,
              repeatDelay: l,
              from: h,
              elapsed: u,
              ...d
            } = t;
            return !!Object.keys(d).length;
          })(a) && (u = { ...u, ...ep(t, u) }),
            u.duration && (u.duration = ea(u.duration)),
            u.repeatDelay && (u.repeatDelay = ea(u.repeatDelay)),
            void 0 !== u.from && (u.keyframes[0] = u.from);
          let d = !1;
          if (
            (!1 === u.type && ((u.duration = 0), 0 === u.delay && (d = !0)),
            (ef.current || v.skipAnimations) &&
              ((d = !0), (u.duration = 0), (u.delay = 0)),
            d && !r && void 0 !== e.get())
          ) {
            let t = eg(u.keyframes, a);
            if (void 0 !== t) {
              tI.update(() => {
                u.onUpdate(t), u.onComplete();
              });
              return;
            }
          }
          return !r && iJ.supports(u) ? new iJ(u) : new iX(u);
        };
      };
      function i0(t) {
        return !!(W(t) && t.add);
      }
      function i1(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i2(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class i5 {
        add(t) {
          return i1(this.subscriptions, t), () => i2(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
        constructor() {
          this.subscriptions = [];
        }
      }
      let i3 = (t) => !isNaN(parseFloat(t)),
        i4 = { current: void 0 };
      class i9 {
        setCurrent(t) {
          (this.current = t), (this.updatedAt = ex.now());
        }
        setPrevFrameValue() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.current;
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i5());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tI.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return i4.current && i4.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = ex.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        constructor(t, e = {}) {
          var i = this;
          (this.version = "11.0.15"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = function (t) {
              let e =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                s = ex.now();
              i.updatedAt !== s && i.setPrevFrameValue(),
                (i.prev = i.current),
                i.setCurrent(t),
                i.current !== i.prev &&
                  i.events.change &&
                  i.events.change.notify(i.current),
                e &&
                  i.events.renderRequest &&
                  i.events.renderRequest.notify(i.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = i3(this.current)),
            (this.owner = e.owner);
        }
      }
      function i6(t, e) {
        return new i9(t, e);
      }
      function i8(t, e) {
        var i;
        let {
            delay: s = 0,
            transitionOverride: n,
            type: r,
          } = arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {},
          {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          h = t.getValue("willChange");
        n && (o = n);
        let u = [],
          d = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (i = t.latestValues[e]) && void 0 !== i ? i : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (d &&
              (function (t, e) {
                let { protectedKeys: i, needsAnimating: s } = t,
                  n = i.hasOwnProperty(e) && !0 !== s[e];
                return (s[e] = !1), n;
              })(d, e))
          )
            continue;
          let a = { delay: s, elapsed: 0, ...em(o || {}, e) },
            c = !1;
          if (window.HandoffAppearAnimations) {
            let i = t.getProps()[f];
            if (i) {
              let t = window.HandoffAppearAnimations(i, e);
              null !== t && ((a.elapsed = t), (c = !0));
            }
          }
          n.start(
            iQ(
              e,
              n,
              r,
              t.shouldReduceMotion && U.has(e) ? { type: !1 } : a,
              t,
              c
            )
          );
          let p = n.animation;
          p && (i0(h) && (h.add(e), p.then(() => h.remove(e))), u.push(p));
        }
        return (
          a &&
            Promise.all(u).then(() => {
              tI.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: s = {},
                      ...n
                    } = eo(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = tL(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, i6(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function i7(t, e) {
        var i;
        let s =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = eo(
            t,
            e,
            "exit" === s.type
              ? null === (i = t.presenceContext) || void 0 === i
                ? void 0
                : i.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        s.transitionOverride && (r = s.transitionOverride);
        let o = n ? () => Promise.all(i8(t, n, s)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? function () {
                  let i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    {
                      delayChildren: n = 0,
                      staggerChildren: o,
                      staggerDirection: a,
                    } = r;
                  return (function (t, e) {
                    let i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      s =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      n =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      r = arguments.length > 5 ? arguments[5] : void 0,
                      o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l =
                        1 === n
                          ? function () {
                              let t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return t * s;
                            }
                          : function () {
                              let t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0;
                              return a - t * s;
                            };
                    return (
                      Array.from(t.variantChildren)
                        .sort(st)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              i7(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + i, o, a, s);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(s.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function st(t, e) {
        return t.sortNodePosition(e);
      }
      let se = [...A].reverse(),
        si = A.length;
      function ss() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class sn extends t2 {
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), S(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map((e) => {
                        let { animation: i, options: s } = e;
                        return (function (t, e) {
                          let i,
                            s =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {};
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => i7(t, e, s)));
                          else if ("string" == typeof e) i = i7(t, e, s);
                          else {
                            let n =
                              "function" == typeof e ? eo(t, e, s.custom) : e;
                            i = Promise.all(i8(t, n, s));
                          }
                          return i.then(() => {
                            tI.postRender(() => {
                              t.notify("AnimationComplete", e);
                            });
                          });
                        })(t, i, s);
                      })
                    ),
                  i = {
                    animate: ss(!0),
                    whileInView: ss(),
                    whileHover: ss(),
                    whileTap: ss(),
                    whileDrag: ss(),
                    whileFocus: ss(),
                    exit: ss(),
                  },
                  s = !0,
                  n = (e) => (i, s) => {
                    var n;
                    let r = eo(
                      t,
                      s,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...s } = r;
                      i = { ...i, ...s, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let o = t.getProps(),
                    a = t.getVariantContext(!0) || {},
                    l = [],
                    h = new Set(),
                    u = {},
                    d = 1 / 0;
                  for (let e = 0; e < si; e++) {
                    var c;
                    let p = se[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      v = w(f),
                      g = p === r ? m.isActive : null;
                    !1 === g && (d = e);
                    let y = f === a[p] && f !== o[p] && v;
                    if (
                      (y && s && t.manuallyAnimateOnMount && (y = !1),
                      (m.protectedKeys = { ...u }),
                      (!m.isActive && null === g) ||
                        (!f && !m.prevProp) ||
                        S(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let x =
                        ((c = m.prevProp),
                        ("string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !er(f, c)) ||
                          (p === r && m.isActive && !y && v) ||
                          (e > d && v)),
                      P = !1,
                      T = Array.isArray(f) ? f : [f],
                      b = T.reduce(n(p), {});
                    !1 === g && (b = {});
                    let { prevResolvedValues: A = {} } = m,
                      V = { ...A, ...b },
                      E = (t) => {
                        (x = !0),
                          h.has(t) && ((P = !0), h.delete(t)),
                          (m.needsAnimating[t] = !0);
                      };
                    for (let t in V) {
                      let e = b[t],
                        i = A[t];
                      if (!u.hasOwnProperty(t))
                        (tk(e) && tk(i) ? er(e, i) : e === i)
                          ? void 0 !== e && h.has(t)
                            ? E(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? E(t)
                          : h.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = b),
                      m.isActive && (u = { ...u, ...b }),
                      s && t.blockInitialAnimation && (x = !1),
                      x &&
                        (!y || P) &&
                        l.push(
                          ...T.map((t) => ({
                            animation: t,
                            options: { type: p },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((i) => {
                      let s = t.getBaseTarget(i);
                      e[i] = void 0 === s ? null : s;
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    s &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (s = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, s) {
                    var n;
                    if (i[e].isActive === s) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, s);
                      }),
                      (i[e].isActive = s);
                    let o = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return o;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
      }
      let sr = 0;
      class so extends t2 {
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let s = this.node.animationState.setActive("exit", !t);
          e && !t && s.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
        constructor() {
          super(...arguments), (this.id = sr++);
        }
      }
      let sa = (t, e) => Math.abs(t - e);
      class sl {
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), tU(this.updatePoint);
        }
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = sd(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(sa(t.x, e.x) ** 2 + sa(t.y, e.y) ** 2) >= 3);
              if (!s && !n) return;
              let { point: r } = i,
                { timestamp: o } = tN;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              s ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = sh(e, this.transformPagePoint)),
                tI.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = sd(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : sh(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !tK(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = sh(tX(t), this.transformPagePoint),
            { point: o } = r,
            { timestamp: a } = tN;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, sd(r, this.history)),
            (this.removeListeners = t_(
              tq(this.contextWindow, "pointermove", this.handlePointerMove),
              tq(this.contextWindow, "pointerup", this.handlePointerUp),
              tq(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
      }
      function sh(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function su(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function sd(t, e) {
        let { point: i } = t;
        return {
          point: i,
          delta: su(i, sc(e)),
          offset: su(i, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = sc(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > ea(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = el(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function sc(t) {
        return t[t.length - 1];
      }
      function sp(t) {
        return t.max - t.min;
      }
      function sm(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(t - e) <= i;
      }
      function sf(t, e, i) {
        let s =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (t.origin = s),
          (t.originPoint = iM(e.min, e.max, t.origin)),
          (t.scale = sp(i) / sp(e)),
          (sm(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = iM(i.min, i.max, t.origin) - t.originPoint),
          (sm(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function sv(t, e, i, s) {
        sf(t.x, e.x, i.x, s ? s.originX : void 0),
          sf(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sg(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + sp(e));
      }
      function sy(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + sp(e));
      }
      function sx(t, e, i) {
        sy(t.x, e.x, i.x), sy(t.y, e.y, i.y);
      }
      function sP(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function sT(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function sb(t, e, i) {
        return { min: sw(t, e), max: sw(t, i) };
      }
      function sw(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sS = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        sA = () => ({ x: sS(), y: sS() }),
        sV = () => ({ min: 0, max: 0 }),
        sE = () => ({ x: sV(), y: sV() });
      function sM(t) {
        return [t("x"), t("y")];
      }
      function sC(t) {
        let { top: e, left: i, right: s, bottom: n } = t;
        return { x: { min: i, max: s }, y: { min: e, max: n } };
      }
      function sR(t) {
        return void 0 === t || 1 === t;
      }
      function sD(t) {
        let { scale: e, scaleX: i, scaleY: s } = t;
        return !sR(e) || !sR(i) || !sR(s);
      }
      function sk(t) {
        return sD(t) || sF(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function sF(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function sL(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function sj(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          s = arguments.length > 3 ? arguments[3] : void 0,
          n = arguments.length > 4 ? arguments[4] : void 0;
        (t.min = sL(t.min, e, i, s, n)), (t.max = sL(t.max, e, i, s, n));
      }
      function sB(t, e) {
        let { x: i, y: s } = e;
        sj(t.x, i.translate, i.scale, i.originPoint),
          sj(t.y, s.translate, s.scale, s.originPoint);
      }
      function sO(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function sI(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function sU(t, e, i) {
        let [s, n, r] = i,
          o = void 0 !== e[r] ? e[r] : 0.5,
          a = iM(t.min, t.max, o);
        sj(t, e[s], e[n], a, e.scale);
      }
      let sN = ["x", "scaleX", "originX"],
        sW = ["y", "scaleY", "originY"];
      function sH(t, e) {
        sU(t.x, e, sN), sU(t.y, e, sW);
      }
      function sz(t, e) {
        return sC(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let sY = (t) => {
          let { current: e } = t;
          return e ? e.ownerDocument.defaultView : null;
        },
        sK = new WeakMap();
      class sX {
        start(t) {
          let { snapToCursor: e = !1 } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new sl(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(tX(t, "page").point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: s,
                  onDragStart: n,
                } = this.getProps();
                if (
                  i &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = t0(i)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  sM((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (ta.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let s = i.layout.layoutBox[t];
                        if (s) {
                          let t = sp(s);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  n && n(t, e);
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: s,
                  onDirectionLock: n,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openGlobalLock) return;
                let { offset: o } = e;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (t) {
                    let e =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 10,
                      i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                sM((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: sY(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && n(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !sG(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, e, i) {
              let { min: s, max: n } = e;
              return (
                void 0 !== s && t < s
                  ? (t = i ? iM(s, t, i.min) : Math.max(t, s))
                  : void 0 !== n &&
                    t > n &&
                    (t = i ? iM(n, t, i.max) : Math.min(t, n)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && b(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (t, e) {
                let { top: i, left: s, bottom: n, right: r } = e;
                return { x: sP(t.x, s, r), y: sP(t.y, i, n) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0.35;
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sb(t, "left", "right"), y: sb(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sM((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !b(e)) return !1;
          let s = e.current;
          tO(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = sz(t, i),
                { scroll: n } = e;
              return n && (sI(s.x, n.offset.x), sI(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: sT((t = n.layout.layoutBox).x, r.x), y: sT(t.y, r.y) };
          if (i) {
            let t = i(
              (function (t) {
                let { x: e, y: i } = t;
                return { top: i.min, right: e.max, bottom: i.max, left: e.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = sC(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            sM((o) => {
              if (!sG(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(iQ(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          sM((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          sM((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          sM((e) => {
            let { drag: i } = this.getProps();
            if (!sG(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: i, max: r } = s.layout.layoutBox[e];
              n.set(t[e] - iM(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!b(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          sM((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = sp(t),
                  n = sp(e);
                return (
                  n > s
                    ? (i = iE(e.min, e.max - s, t.min))
                    : s > n && (i = iE(t.min, t.max - n, e.min)),
                  _(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sM((e) => {
              if (!sG(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(iM(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          sK.set(this.visualElement, this);
          let t = tq(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              b(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            s = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let n = tY(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener("didUpdate", (t) => {
              let { delta: e, hasLayoutChanged: i } = t;
              this.isDragging &&
                i &&
                (sM((t) => {
                  let i = this.getAxisMotionValue(t);
                  i &&
                    ((this.originPoint[t] += e[t].translate),
                    i.set(i.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            n(), t(), s(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = sE()),
            (this.visualElement = t);
        }
      }
      function sG(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class sq extends t2 {
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tO);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
        constructor(t) {
          super(t),
            (this.removeGroupControls = tO),
            (this.removeListeners = tO),
            (this.controls = new sX(t));
        }
      }
      let sZ = (t) => (e, i) => {
        t && t(e, i);
      };
      class s_ extends t2 {
        onPointerDown(t) {
          this.session = new sl(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: sY(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: sZ(t),
            onStart: sZ(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, s && s(t, e);
            },
          };
        }
        mount() {
          this.removePointerDownListener = tq(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
        constructor() {
          super(...arguments), (this.removePointerDownListener = tO);
        }
      }
      let s$ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function sJ(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let sQ = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tl.test(t)) return t;
            t = parseFloat(t);
          }
          let i = sJ(t, e.target.x),
            s = sJ(t, e.target.y);
          return "".concat(i, "% ").concat(s, "%");
        },
      };
      class s0 extends a.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(O, s2),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (s$.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    tI.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            P.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function s1(t) {
        let [e, i] = (function () {
            let t = (0, a.useContext)(u);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, a.useId)();
            return (
              (0, a.useEffect)(() => s(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          s = (0, a.useContext)(k);
        return a.createElement(s0, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, a.useContext)(F),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let s2 = {
          borderRadius: {
            ...sQ,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: sQ,
          borderTopRightRadius: sQ,
          borderBottomLeftRadius: sQ,
          borderBottomRightRadius: sQ,
          boxShadow: {
            correct: (t, e) => {
              let { treeScale: i, projectionDelta: s } = e,
                n = e1.parse(t);
              if (n.length > 5) return t;
              let r = e1.createTransformer(t),
                o = "number" != typeof n[0] ? 1 : 0,
                a = s.x.scale * i.x,
                l = s.y.scale * i.y;
              (n[0 + o] /= a), (n[1 + o] /= l);
              let h = iM(a, l, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= h),
                "number" == typeof n[3 + o] && (n[3 + o] /= h),
                r(n)
              );
            },
          },
        },
        s5 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        s3 = s5.length,
        s4 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        s9 = (t) => "number" == typeof t || tl.test(t);
      function s6(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let s8 = nt(0, 0.5, iP),
        s7 = nt(0.5, 0.95, tO);
      function nt(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(iE(t, e, s)));
      }
      function ne(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function ni(t, e) {
        ne(t.x, e.x), ne(t.y, e.y);
      }
      function ns(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function nn(t, e, i, s, n) {
        let [r, o, a] = i;
        !(function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            n = arguments.length > 4 ? arguments[4] : void 0,
            r =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : t,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : t;
          if (
            (ta.test(e) &&
              ((e = parseFloat(e)), (e = iM(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = iM(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = ns(t.min, e, i, a, n)),
            (t.max = ns(t.max, e, i, a, n));
        })(t, e[r], e[o], e[a], e.scale, s, n);
      }
      let nr = ["x", "scaleX", "originX"],
        no = ["y", "scaleY", "originY"];
      function na(t, e, i, s) {
        nn(t.x, e, nr, i ? i.x : void 0, s ? s.x : void 0),
          nn(t.y, e, no, i ? i.y : void 0, s ? s.y : void 0);
      }
      function nl(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nh(t) {
        return nl(t.x) && nl(t.y);
      }
      function nu(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nd(t) {
        return sp(t.x) / sp(t.y);
      }
      class nc {
        add(t) {
          i1(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (i2(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
        constructor() {
          this.members = [];
        }
      }
      function np(t, e, i) {
        let s = "",
          n = t.x.translate / e.x,
          r = t.y.translate / e.y;
        if (
          ((n || r) &&
            (s = "translate3d(".concat(n, "px, ").concat(r, "px, 0) ")),
          (1 !== e.x || 1 !== e.y) &&
            (s += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") ")),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: n } = i;
          t && (s += "rotate(".concat(t, "deg) ")),
            e && (s += "rotateX(".concat(e, "deg) ")),
            n && (s += "rotateY(".concat(n, "deg) "));
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (
          (1 !== o || 1 !== a) &&
            (s += "scale(".concat(o, ", ").concat(a, ")")),
          s || "none"
        );
      }
      let nm = (t, e) => t.depth - e.depth;
      class nf {
        add(t) {
          i1(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          i2(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nm),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
      }
      let nv = ["", "X", "Y", "Z"],
        ng = { visibility: "hidden" },
        ny = 0,
        nx = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nP(t) {
        let {
          attachResizeListener: e,
          defaultParent: i,
          measureScroll: s,
          checkIsScrollRoot: n,
          resetTransform: r,
        } = t;
        return class {
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new i5()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t) {
            for (
              var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1;
              s < e;
              s++
            )
              i[s - 1] = arguments[s];
            let n = this.eventHandlers.get(t);
            n && n.notify(...i);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(t) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.root.hasTreeAnimated;
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              e)
            ) {
              let i;
              let s = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = ex.now(),
                      s = (n) => {
                        let { timestamp: r } = n,
                          o = r - i;
                        o >= e && (tU(s), t(o - e));
                      };
                    return tI.read(s, !0), () => tU(s);
                  })(s, 250)),
                  s$.hasAnimatedSinceResize &&
                    ((s$.hasAnimatedSinceResize = !1), this.nodes.forEach(nC));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener("didUpdate", (t) => {
                  let {
                    delta: e,
                    hasLayoutChanged: i,
                    hasRelativeTargetChanged: s,
                    layout: n,
                  } = t;
                  if (this.isTreeAnimationBlocked()) {
                    (this.target = void 0), (this.relativeTarget = void 0);
                    return;
                  }
                  let o =
                      this.options.transition || r.getDefaultTransition() || nO,
                    {
                      onLayoutAnimationStart: a,
                      onLayoutAnimationComplete: l,
                    } = r.getProps(),
                    h = !this.targetLayout || !nu(this.targetLayout, n) || s,
                    u = !i && s;
                  if (
                    this.options.layoutRoot ||
                    (this.resumeFrom && this.resumeFrom.instance) ||
                    u ||
                    (i && (h || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0)),
                      this.setAnimationOrigin(e, u);
                    let t = { ...em(o, "layout"), onPlay: a, onComplete: l };
                    (r.shouldReduceMotion || this.options.layoutRoot) &&
                      ((t.delay = 0), (t.type = !1)),
                      this.startAnimation(t);
                  } else
                    i || nC(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete();
                  this.targetLayout = n;
                });
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              tU(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nk),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate() {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nV);
              return;
            }
            this.isUpdating || this.nodes.forEach(nE),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(nM),
              this.nodes.forEach(nT),
              this.nodes.forEach(nb),
              this.clearAllSnapshots();
            let t = ex.now();
            (tN.delta = _(0, 1e3 / 60, t - tN.timestamp)),
              (tN.timestamp = t),
              (tN.isProcessing = !0),
              tW.update.process(tN),
              tW.preRender.process(tN),
              tW.render.process(tN),
              (tN.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), P.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nA), this.sharedNodes.forEach(nF);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tI.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tI.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = sE()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "measure",
              e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: s(this.instance),
                });
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !nh(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              n = s !== this.prevTransformTemplateValue;
            t &&
              (e || sk(this.latestValues) || n) &&
              (r(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure() {
            var t;
            let e =
                !(arguments.length > 0) ||
                void 0 === arguments[0] ||
                arguments[0],
              i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              e && (s = this.removeTransform(s)),
              nN((t = s).x),
              nN(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return sE();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (sI(e.x, i.offset.x), sI(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = sE();
            ni(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              if (s !== this.root && n && r.layoutScroll) {
                if (n.isRoot) {
                  ni(e, t);
                  let { scroll: i } = this.root;
                  i && (sI(e.x, -i.offset.x), sI(e.y, -i.offset.y));
                }
                sI(e.x, n.offset.x), sI(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              i = sE();
            ni(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let s = this.path[t];
              !e &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                sH(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                sk(s.latestValues) && sH(i, s.latestValues);
            }
            return sk(this.latestValues) && sH(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = sE();
            ni(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !sk(i.latestValues)) continue;
              sD(i.latestValues) && i.updateSnapshot();
              let s = sE();
              ni(s, i.measurePageBox()),
                na(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  s
                );
            }
            return sk(this.latestValues) && na(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tN.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta() {
            var t, e, i, s;
            let n =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== r;
            if (
              !(
                n ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tN.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = sE()),
                    (this.relativeTargetOrigin = sE()),
                    sx(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    ni(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = sE()), (this.targetWithTransforms = sE())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (e = this.target),
                      (i = this.relativeTarget),
                      (s = this.relativeParent.target),
                      sg(e.x, i.x, s.x),
                      sg(e.y, i.y, s.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : ni(this.target, this.layout.layoutBox),
                      sB(this.target, this.targetDelta))
                    : ni(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = sE()),
                      (this.relativeTargetOrigin = sE()),
                      sx(this.relativeTargetOrigin, this.target, t.target),
                      ni(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nx.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              sD(this.parent.latestValues) ||
              sF(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === tN.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            ni(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i) {
              let s,
                n,
                r =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  n = (s = i[a]).projectionDelta;
                  let o = s.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (r &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      sH(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                    n && ((e.x *= n.x.scale), (e.y *= n.y.scale), sB(t, n)),
                    r && sk(s.latestValues) && sH(t, s.latestValues));
                }
                (e.x = sO(e.x)), (e.y = sO(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = sE()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = sA()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = sA()),
              (this.projectionDeltaWithTransform = sA()));
            let h = this.projectionTransform;
            sv(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = np(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nx.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender() {
            let t =
              !(arguments.length > 0) ||
              void 0 === arguments[0] ||
              arguments[0];
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t) {
            let e,
              i =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = sA();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !i);
            let a = sE(),
              l =
                (s ? s.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(nB)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (i) => {
                let s = i / 1e3;
                if (
                  (nL(o.x, t.x, s),
                  nL(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  sx(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nj(p.x, m.x, a.x, s),
                    nj(p.y, m.y, a.y, s),
                    e &&
                      ((h = this.relativeTarget),
                      (c = e),
                      h.x.min === c.x.min &&
                        h.x.max === c.x.max &&
                        h.y.min === c.y.min &&
                        h.y.max === c.y.max) &&
                      (this.isProjectionDirty = !1),
                    e || (e = sE()),
                    ni(e, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = iM(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s8(s)
                        )),
                        (t.opacityExit = iM(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          s7(s)
                        )))
                      : r &&
                        (t.opacity = iM(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let n = 0; n < s3; n++) {
                      let r = "border".concat(s5[n], "Radius"),
                        o = s6(e, r),
                        a = s6(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || s9(o) === s9(a)
                          ? ((t[r] = Math.max(iM(s4(o), s4(a), s), 0)),
                            (ta.test(a) || ta.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = iM(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (tU(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tI.update(() => {
                (s$.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = W(t) ? t : i6(t);
                    return s.start(iQ("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                nW(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || sE();
                let e = sp(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let s = sp(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
              }
              ni(e, i),
                sH(e, n),
                sv(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nc()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote() {
            let {
                needsReset: t,
                transition: e,
                preserveFollowOpacity: i,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let s = {};
            for (let e = 0; e < nv.length; e++) {
              let n = "rotate" + nv[e];
              i[n] && ((s[n] = i[n]), t.setStaticValue(n, 0));
            }
            for (let e in (t.render(), s)) t.setStaticValue(e, s[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ng;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  tj(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    tj(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !sk(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = np(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (s.transform = n(o, s.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((s.transformOrigin = ""
              .concat(100 * a.origin, "% ")
              .concat(100 * l.origin, "% 0")),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            O)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = O[t],
                n = "none" === s.transform ? o[t] : e(o[t], r);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) s[i[e]] = n;
              } else s[t] = n;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? tj(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nV),
              this.root.sharedNodes.clear();
          }
          constructor(t = {}, e = null == i ? void 0 : i()) {
            (this.id = ny++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (nx.totalNodes =
                    nx.resolvedTargetDeltas =
                    nx.recalculatedProjection =
                      0),
                  this.nodes.forEach(nw),
                  this.nodes.forEach(nR),
                  this.nodes.forEach(nD),
                  this.nodes.forEach(nS),
                  window.MotionDebug && window.MotionDebug.record(nx);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = e ? e.root || e : this),
              (this.path = e ? [...e.path, e] : []),
              (this.parent = e),
              (this.depth = e ? e.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nf());
          }
        };
      }
      function nT(t) {
        t.updateLayout();
      }
      function nb(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = i.source !== t.layout.source;
          "size" === n
            ? sM((t) => {
                let s = r ? i.measuredBox[t] : i.layoutBox[t],
                  n = sp(s);
                (s.min = e[t].min), (s.max = s.min + n);
              })
            : nW(n, i.layoutBox, e) &&
              sM((s) => {
                let n = r ? i.measuredBox[s] : i.layoutBox[s],
                  o = sp(e[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = sA();
          sv(o, e, i.layoutBox);
          let a = sA();
          r
            ? sv(a, t.applyTransform(s, !0), i.measuredBox)
            : sv(a, e, i.layoutBox);
          let l = !nh(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = sE();
                sx(o, i.layoutBox, n.layoutBox);
                let a = sE();
                sx(a, e, r.layoutBox),
                  nu(o, a) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nw(t) {
        nx.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nS(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nA(t) {
        t.clearSnapshot();
      }
      function nV(t) {
        t.clearMeasurements();
      }
      function nE(t) {
        t.isLayoutDirty = !1;
      }
      function nM(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nC(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nR(t) {
        t.resolveTargetDelta();
      }
      function nD(t) {
        t.calcProjection();
      }
      function nk(t) {
        t.resetRotation();
      }
      function nF(t) {
        t.removeLeadSnapshot();
      }
      function nL(t, e, i) {
        (t.translate = iM(e.translate, 0, i)),
          (t.scale = iM(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nj(t, e, i, s) {
        (t.min = iM(e.min, i.min, s)), (t.max = iM(e.max, i.max, s));
      }
      function nB(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nO = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nI = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nU = nI("applewebkit/") && !nI("chrome/") ? Math.round : tO;
      function nN(t) {
        (t.min = nU(t.min)), (t.max = nU(t.max));
      }
      function nW(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !sm(nd(e), nd(i), 0.2))
        );
      }
      let nH = nP({
          attachResizeListener: (t, e) => tY(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nz = { current: void 0 },
        nY = nP({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nz.current) {
              let t = new nH({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nz.current = t);
            }
            return nz.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        nK = { current: null },
        nX = { current: !1 },
        nG = new WeakMap(),
        nq = [...ek, eG, e1],
        nZ = (t) => nq.find(eD(t)),
        n_ = Object.keys(D),
        n$ = n_.length,
        nJ = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nQ = V.length;
      class n0 {
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            nG.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            nX.current ||
              (function () {
                if (((nX.current = !0), d)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nK.current = t.matches);
                    t.addListener(e), e();
                  } else nK.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nK.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nG.delete(this.current),
          this.projection && this.projection.unmount(),
          tU(this.notifyUpdate),
          tU(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = U.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tI.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            s(), n();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures(t, e, i, s) {
          let n,
            r,
            { children: o, ...a } = t;
          for (let t = 0; t < n$; t++) {
            let e = n_[t],
              {
                isEnabled: i,
                Feature: s,
                ProjectionNode: o,
                MeasureLayout: l,
              } = D[e];
            o && (n = o),
              i(a) &&
                (!this.features[e] && s && (this.features[e] = new s(this)),
                l && (r = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            n
          ) {
            this.projection = new n(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: e,
              drag: i,
              dragConstraints: r,
              layoutScroll: o,
              layoutRoot: l,
            } = a;
            this.projection.setOptions({
              layoutId: t,
              layout: e,
              alwaysMeasureLayout: !!i || (r && b(r)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof e ? e : "both",
              initialPromotionConfig: s,
              layoutScroll: o,
              layoutRoot: l,
            });
          }
          return r;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : sE();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < nJ.length; e++) {
            let i = nJ[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: s } = e;
            for (let n in e) {
              let r = e[n],
                o = i[n];
              if (W(r)) t.addValue(n, r), i0(s) && s.add(n);
              else if (W(o))
                t.addValue(n, i6(r, { owner: t })), i0(s) && s.remove(n);
              else if (o !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, i6(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < nQ; t++) {
            let i = V[t],
              s = this.props[i];
            (w(s) || !1 === s) && (e[i] = s);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = i6(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (eT(s) || eP(s))
                ? (s = parseFloat(s))
                : !nZ(s) && e1.test(e) && (s = e8(t, e)),
              this.setBaseTarget(t, W(s) ? s.get() : s)),
            W(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e, i;
          let { initial: s } = this.props,
            n =
              "string" == typeof s || "object" == typeof s
                ? null ===
                    (i = tD(
                      this.props,
                      s,
                      null === (e = this.presenceContext) || void 0 === e
                        ? void 0
                        : e.custom
                    )) || void 0 === i
                  ? void 0
                  : i[t]
                : void 0;
          if (s && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || W(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new i5()), this.events[t].add(e)
          );
        }
        notify(t) {
          for (
            var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1;
            s < e;
            s++
          )
            i[s - 1] = arguments[s];
          this.events[t] && this.events[t].notify(...i);
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, s) =>
            new this.KeyframeResolver(t, e, i, s, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eU),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tI.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = E(e)),
            (this.isVariantNode = M(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && W(e) && (e.set(a[t], !1), i0(h) && h.add(t));
          }
        }
      }
      class n1 extends n0 {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, e) {
          let { vars: i, style: s } = e;
          delete i[t], delete s[t];
        }
        constructor() {
          super(...arguments), (this.KeyframeResolver = e7);
        }
      }
      class n2 extends n1 {
        readValueFromInstance(t, e) {
          if (U.has(e)) {
            let t = e6(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              s = (K(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, e) {
          let { transformPagePoint: i } = e;
          return sz(t, i);
        }
        build(t, e, i, s) {
          tm(t, e, i, s.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tC(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          W(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = "".concat(t));
            }));
        }
        renderInstance(t, e, i, s) {
          tV(t, e, i, s);
        }
        constructor() {
          super(...arguments), (this.type = "html");
        }
      }
      class n5 extends n1 {
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (U.has(e)) {
            let t = e6(e);
            return (t && t.default) || 0;
          }
          return (e = tE.has(e) ? e : m(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return sE();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tR(t, e);
        }
        build(t, e, i, s) {
          tw(t, e, i, this.isSVGTag, s.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          tM(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = tA(t.tagName)), super.mount(t);
        }
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
      }
      let n3 = (t, e) =>
          B(t)
            ? new n5(e, { enableHardwareAcceleration: !1 })
            : new n2(e, { enableHardwareAcceleration: !0 }),
        n4 = {
          animation: { Feature: sn },
          exit: { Feature: so },
          inView: { Feature: en },
          tap: { Feature: t8 },
          focus: { Feature: t4 },
          hover: { Feature: t3 },
          pan: { Feature: s_ },
          drag: { Feature: sq, ProjectionNode: nY, MeasureLayout: s1 },
          layout: { ProjectionNode: nY, MeasureLayout: s1 },
        },
        n9 = (function (t) {
          function e(e) {
            let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return (function (t) {
              let {
                preloadedFeatures: e,
                createVisualElement: i,
                useRender: s,
                useVisualState: n,
                Component: r,
              } = t;
              e &&
                (function (t) {
                  for (let e in t) D[e] = { ...D[e], ...t[e] };
                })(e);
              let o = (0, a.forwardRef)(function (t, o) {
                var m;
                let v;
                let g = {
                    ...(0, a.useContext)(l),
                    ...t,
                    layoutId: (function (t) {
                      let { layoutId: e } = t,
                        i = (0, a.useContext)(k).id;
                      return i && void 0 !== e ? i + "-" + e : e;
                    })(t),
                  },
                  { isStatic: y } = g,
                  x = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (E(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || w(e) ? e : void 0,
                          animate: w(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, a.useContext)(h));
                    return (0, a.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [C(e), C(i)]
                    );
                  })(t),
                  T = n(t, y);
                if (!y && d) {
                  x.visualElement = (function (t, e, i, s) {
                    let { visualElement: n } = (0, a.useContext)(h),
                      r = (0, a.useContext)(p),
                      o = (0, a.useContext)(u),
                      d = (0, a.useContext)(l).reducedMotion,
                      m = (0, a.useRef)();
                    (s = s || r.renderer),
                      !m.current &&
                        s &&
                        (m.current = s(t, {
                          visualState: e,
                          parent: n,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: d,
                        }));
                    let v = m.current;
                    (0, a.useInsertionEffect)(() => {
                      v && v.update(i, o);
                    });
                    let g = (0, a.useRef)(!!(i[f] && !window.HandoffComplete));
                    return (
                      c(() => {
                        v &&
                          (P.postRender(v.render),
                          g.current &&
                            v.animationState &&
                            v.animationState.animateChanges());
                      }),
                      (0, a.useEffect)(() => {
                        v &&
                          (v.updateFeatures(),
                          !g.current &&
                            v.animationState &&
                            v.animationState.animateChanges(),
                          g.current &&
                            ((g.current = !1), (window.HandoffComplete = !0)));
                      }),
                      v
                    );
                  })(r, T, g, i);
                  let t = (0, a.useContext)(F),
                    s = (0, a.useContext)(p).strict;
                  x.visualElement &&
                    (v = x.visualElement.loadFeatures(g, s, e, t));
                }
                return a.createElement(
                  h.Provider,
                  { value: x },
                  v && x.visualElement
                    ? a.createElement(v, {
                        visualElement: x.visualElement,
                        ...g,
                      })
                    : null,
                  s(
                    r,
                    t,
                    ((m = x.visualElement),
                    (0, a.useCallback)(
                      (t) => {
                        t && T.mount && T.mount(t),
                          m && (t ? m.mount(t) : m.unmount()),
                          o &&
                            ("function" == typeof o
                              ? o(t)
                              : b(o) && (o.current = t));
                      },
                      [m]
                    )),
                    T,
                    y,
                    x.visualElement
                  )
                );
              });
              return (o[L] = r), o;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, s) => (i.has(s) || i.set(s, e(s)), i.get(s)),
          });
        })((t, e) =>
          (function (t, e, i, s) {
            let { forwardMotionProps: n = !1 } = e;
            return {
              ...(B(t) ? tH : tz),
              preloadedFeatures: i,
              useRender: (function () {
                let t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                return (e, i, s, n, r) => {
                  let { latestValues: o } = n,
                    l = (
                      B(e)
                        ? function (t, e, i, s) {
                            let n = (0, a.useMemo)(() => {
                              let i = tS();
                              return (
                                tw(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  tA(s),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              tv(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e, i) {
                            let s = {},
                              n = (function (t, e, i) {
                                let s = t.style || {},
                                  n = {};
                                return (
                                  tv(n, s, t),
                                  Object.assign(
                                    n,
                                    (function (t, e, i) {
                                      let { transformTemplate: s } = t;
                                      return (0, a.useMemo)(() => {
                                        let t = tf();
                                        return (
                                          tm(
                                            t,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            s
                                          ),
                                          Object.assign({}, t.vars, t.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  n
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((s.draggable = !1),
                                (n.userSelect =
                                  n.WebkitUserSelect =
                                  n.WebkitTouchCallout =
                                    "none"),
                                (n.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : "pan-".concat(
                                        "x" === t.drag ? "y" : "x"
                                      ))),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (s.tabIndex = 0),
                              (s.style = n),
                              s
                            );
                          }
                    )(i, o, r, e),
                    h = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (tx(n) ||
                            (!0 === i && ty(n)) ||
                            (!e && !ty(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, "string" == typeof e, t),
                    u = e !== a.Fragment ? { ...h, ...l, ref: s } : {},
                    { children: d } = i,
                    c = (0, a.useMemo)(() => (W(d) ? d.get() : d), [d]);
                  return (0, a.createElement)(e, { ...u, children: c });
                };
              })(n),
              createVisualElement: s,
              Component: t,
            };
          })(t, e, n4, n3)
        );
    },
  },
]);
