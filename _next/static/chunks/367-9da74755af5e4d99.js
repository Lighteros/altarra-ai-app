"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [367],
  {
    12338: function (e, t, n) {
      n.d(t, {
        ee: function () {
          return eV;
        },
        Eh: function () {
          return eM;
        },
        VY: function () {
          return e_;
        },
        fC: function () {
          return eF;
        },
        D7: function () {
          return eA;
        },
      });
      var r = n(14749),
        i = n(64090);
      let o = ["top", "right", "bottom", "left"],
        l = Math.min,
        a = Math.max,
        f = Math.round,
        c = Math.floor,
        s = (e) => ({ x: e, y: e }),
        u = { left: "right", right: "left", bottom: "top", top: "bottom" },
        d = { start: "end", end: "start" };
      function p(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function h(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function g(e) {
        return "x" === e ? "y" : "x";
      }
      function y(e) {
        return "y" === e ? "height" : "width";
      }
      function v(e) {
        return ["top", "bottom"].includes(h(e)) ? "y" : "x";
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => d[e]);
      }
      function x(e) {
        return e.replace(/left|right|bottom|top/g, (e) => u[e]);
      }
      function b(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function A(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
      function R(e, t, n) {
        let r,
          { reference: i, floating: o } = e,
          l = v(t),
          a = g(v(t)),
          f = y(a),
          c = h(t),
          s = "y" === l,
          u = i.x + i.width / 2 - o.width / 2,
          d = i.y + i.height / 2 - o.height / 2,
          p = i[f] / 2 - o[f] / 2;
        switch (c) {
          case "top":
            r = { x: u, y: i.y - o.height };
            break;
          case "bottom":
            r = { x: u, y: i.y + i.height };
            break;
          case "right":
            r = { x: i.x + i.width, y: d };
            break;
          case "left":
            r = { x: i.x - o.width, y: d };
            break;
          default:
            r = { x: i.x, y: i.y };
        }
        switch (m(t)) {
          case "start":
            r[a] -= p * (n && s ? -1 : 1);
            break;
          case "end":
            r[a] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let E = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: o = [],
            platform: l,
          } = n,
          a = o.filter(Boolean),
          f = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          c = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: s, y: u } = R(c, r, f),
          d = r,
          p = {},
          h = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: o, fn: m } = a[n],
            {
              x: g,
              y: y,
              data: v,
              reset: w,
            } = await m({
              x: s,
              y: u,
              initialPlacement: r,
              placement: d,
              strategy: i,
              middlewareData: p,
              rects: c,
              platform: l,
              elements: { reference: e, floating: t },
            });
          (s = null != g ? g : s),
            (u = null != y ? y : u),
            (p = { ...p, [o]: { ...p[o], ...v } }),
            w &&
              h <= 50 &&
              (h++,
              "object" == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : w.rects),
                ({ x: s, y: u } = R(c, d, f))),
              (n = -1));
        }
        return { x: s, y: u, placement: d, strategy: i, middlewareData: p };
      };
      async function P(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: i, platform: o, rects: l, elements: a, strategy: f } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: u = "floating",
            altBoundary: d = !1,
            padding: h = 0,
          } = p(t, e),
          m = b(h),
          g = a[d ? ("floating" === u ? "reference" : "floating") : u],
          y = A(
            await o.getClippingRect({
              element:
                null ==
                  (n = await (null == o.isElement ? void 0 : o.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == o.getDocumentElement
                      ? void 0
                      : o.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: f,
            })
          ),
          v = "floating" === u ? { ...l.floating, x: r, y: i } : l.reference,
          w = await (null == o.getOffsetParent
            ? void 0
            : o.getOffsetParent(a.floating)),
          x = ((await (null == o.isElement ? void 0 : o.isElement(w))) &&
            (await (null == o.getScale ? void 0 : o.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          R = A(
            o.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: v,
                  offsetParent: w,
                  strategy: f,
                })
              : v
          );
        return {
          top: (y.top - R.top + m.top) / x.y,
          bottom: (R.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - R.left + m.left) / x.x,
          right: (R.right - y.right + m.right) / x.x,
        };
      }
      function S(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function O(e) {
        return o.some((t) => e[t] >= 0);
      }
      async function T(e, t) {
        let { placement: n, platform: r, elements: i } = e,
          o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)),
          l = h(n),
          a = m(n),
          f = "y" === v(n),
          c = ["left", "top"].includes(l) ? -1 : 1,
          s = o && f ? -1 : 1,
          u = p(t, e),
          {
            mainAxis: d,
            crossAxis: g,
            alignmentAxis: y,
          } = "number" == typeof u
            ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
        return (
          a && "number" == typeof y && (g = "end" === a ? -1 * y : y),
          f ? { x: g * s, y: d * c } : { x: d * c, y: g * s }
        );
      }
      function L(e) {
        return H(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function C(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function k(e) {
        var t;
        return null ==
          (t = (H(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function H(e) {
        return e instanceof Node || e instanceof C(e).Node;
      }
      function W(e) {
        return e instanceof Element || e instanceof C(e).Element;
      }
      function D(e) {
        return e instanceof HTMLElement || e instanceof C(e).HTMLElement;
      }
      function F(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof C(e).ShadowRoot)
        );
      }
      function V(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: i } = B(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(i)
        );
      }
      function _(e) {
        let t = M(),
          n = B(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function M() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function z(e) {
        return ["html", "body", "#document"].includes(L(e));
      }
      function B(e) {
        return C(e).getComputedStyle(e);
      }
      function N(e) {
        return W(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function j(e) {
        if ("html" === L(e)) return e;
        let t = e.assignedSlot || e.parentNode || (F(e) && e.host) || k(e);
        return F(t) ? t.host : t;
      }
      function Y(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let i = (function e(t) {
            let n = j(t);
            return z(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : D(n) && V(n)
              ? n
              : e(n);
          })(e),
          o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = C(i);
        return o
          ? t.concat(
              l,
              l.visualViewport || [],
              V(i) ? i : [],
              l.frameElement && n ? Y(l.frameElement) : []
            )
          : t.concat(i, Y(i, [], n));
      }
      function I(e) {
        let t = B(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          i = D(e),
          o = i ? e.offsetWidth : n,
          l = i ? e.offsetHeight : r,
          a = f(n) !== o || f(r) !== l;
        return a && ((n = o), (r = l)), { width: n, height: r, $: a };
      }
      function X(e) {
        return W(e) ? e : e.contextElement;
      }
      function Z(e) {
        let t = X(e);
        if (!D(t)) return s(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: i, $: o } = I(t),
          l = (o ? f(n.width) : n.width) / r,
          a = (o ? f(n.height) : n.height) / i;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          { x: l, y: a }
        );
      }
      let $ = s(0);
      function q(e) {
        let t = C(e);
        return M() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : $;
      }
      function G(e, t, n, r) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let o = e.getBoundingClientRect(),
          l = X(e),
          a = s(1);
        t && (r ? W(r) && (a = Z(r)) : (a = Z(e)));
        let f = (void 0 === (i = n) && (i = !1), r && (!i || r === C(l)) && i)
            ? q(l)
            : s(0),
          c = (o.left + f.x) / a.x,
          u = (o.top + f.y) / a.y,
          d = o.width / a.x,
          p = o.height / a.y;
        if (l) {
          let e = C(l),
            t = r && W(r) ? C(r) : r,
            n = e,
            i = n.frameElement;
          for (; i && r && t !== n; ) {
            let e = Z(i),
              t = i.getBoundingClientRect(),
              r = B(i),
              o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (u *= e.y),
              (d *= e.x),
              (p *= e.y),
              (c += o),
              (u += l),
              (i = (n = C(i)).frameElement);
          }
        }
        return A({ width: d, height: p, x: c, y: u });
      }
      let J = [":popover-open", ":modal"];
      function K(e) {
        return J.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function Q(e) {
        return G(k(e)).left + N(e).scrollLeft;
      }
      function U(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = C(e),
              r = k(e),
              i = n.visualViewport,
              o = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              f = 0;
            if (i) {
              (o = i.width), (l = i.height);
              let e = M();
              (!e || (e && "fixed" === t)) &&
                ((a = i.offsetLeft), (f = i.offsetTop));
            }
            return { width: o, height: l, x: a, y: f };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = k(e),
              n = N(e),
              r = e.ownerDocument.body,
              i = a(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              o = a(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + Q(e),
              f = -n.scrollTop;
            return (
              "rtl" === B(r).direction &&
                (l += a(t.clientWidth, r.clientWidth) - i),
              { width: i, height: o, x: l, y: f }
            );
          })(k(e));
        else if (W(t))
          r = (function (e, t) {
            let n = G(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              o = D(e) ? Z(e) : s(1),
              l = e.clientWidth * o.x;
            return {
              width: l,
              height: e.clientHeight * o.y,
              x: i * o.x,
              y: r * o.y,
            };
          })(t, n);
        else {
          let n = q(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return A(r);
      }
      function ee(e, t) {
        return D(e) && "fixed" !== B(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function et(e, t) {
        let n = C(e);
        if (!D(e) || K(e)) return n;
        let r = ee(e, t);
        for (
          ;
          r &&
          ["table", "td", "th"].includes(L(r)) &&
          "static" === B(r).position;

        )
          r = ee(r, t);
        return r &&
          ("html" === L(r) ||
            ("body" === L(r) && "static" === B(r).position && !_(r)))
          ? n
          : r ||
              (function (e) {
                let t = j(e);
                for (; D(t) && !z(t); ) {
                  if (_(t)) return t;
                  t = j(t);
                }
                return null;
              })(e) ||
              n;
      }
      let en = async function (e) {
          let t = this.getOffsetParent || et,
            n = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let r = D(t),
                i = k(t),
                o = "fixed" === n,
                l = G(e, !0, o, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                f = s(0);
              if (r || (!r && !o)) {
                if ((("body" !== L(t) || V(i)) && (a = N(t)), r)) {
                  let e = G(t, !0, o, t);
                  (f.x = e.x + t.clientLeft), (f.y = e.y + t.clientTop);
                } else i && (f.x = Q(i));
              }
              return {
                x: l.left + a.scrollLeft - f.x,
                y: l.top + a.scrollTop - f.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, ...(await n(e.floating)) },
          };
        },
        er = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: i } = e,
              o = "fixed" === i,
              l = k(r),
              a = !!t && K(t.floating);
            if (r === l || (a && o)) return n;
            let f = { scrollLeft: 0, scrollTop: 0 },
              c = s(1),
              u = s(0),
              d = D(r);
            if (
              (d || (!d && !o)) &&
              (("body" !== L(r) || V(l)) && (f = N(r)), D(r))
            ) {
              let e = G(r);
              (c = Z(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - f.scrollLeft * c.x + u.x,
              y: n.y * c.y - f.scrollTop * c.y + u.y,
            };
          },
          getDocumentElement: k,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: i } = e,
              o = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = Y(e, [], !1).filter(
                          (e) => W(e) && "body" !== L(e)
                        ),
                        i = null,
                        o = "fixed" === B(e).position,
                        l = o ? j(e) : e;
                      for (; W(l) && !z(l); ) {
                        let t = B(l),
                          n = _(l);
                        n || "fixed" !== t.position || (i = null),
                          (
                            o
                              ? !n && !i
                              : (!n &&
                                  "static" === t.position &&
                                  !!i &&
                                  ["absolute", "fixed"].includes(i.position)) ||
                                (V(l) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = j(t);
                                    return (
                                      !(r === n || !W(r) || z(r)) &&
                                      ("fixed" === B(r).position || e(r, n))
                                    );
                                  })(e, l))
                          )
                            ? (r = r.filter((e) => e !== l))
                            : (i = t),
                          (l = j(l));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              f = o[0],
              c = o.reduce((e, n) => {
                let r = U(t, n, i);
                return (
                  (e.top = a(r.top, e.top)),
                  (e.right = l(r.right, e.right)),
                  (e.bottom = l(r.bottom, e.bottom)),
                  (e.left = a(r.left, e.left)),
                  e
                );
              }, U(t, f, i));
            return {
              width: c.right - c.left,
              height: c.bottom - c.top,
              x: c.left,
              y: c.top,
            };
          },
          getOffsetParent: et,
          getElementRects: en,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = I(e);
            return { width: t, height: n };
          },
          getScale: Z,
          isElement: W,
          isRTL: function (e) {
            return "rtl" === B(e).direction;
          },
        },
        ei = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: i,
                rects: o,
                platform: f,
                elements: c,
                middlewareData: s,
              } = t,
              { element: u, padding: d = 0 } = p(e, t) || {};
            if (null == u) return {};
            let h = b(d),
              w = { x: n, y: r },
              x = g(v(i)),
              A = y(x),
              R = await f.getDimensions(u),
              E = "y" === x,
              P = E ? "clientHeight" : "clientWidth",
              S = o.reference[A] + o.reference[x] - w[x] - o.floating[A],
              O = w[x] - o.reference[x],
              T = await (null == f.getOffsetParent
                ? void 0
                : f.getOffsetParent(u)),
              L = T ? T[P] : 0;
            (L && (await (null == f.isElement ? void 0 : f.isElement(T)))) ||
              (L = c.floating[P] || o.floating[A]);
            let C = L / 2 - R[A] / 2 - 1,
              k = l(h[E ? "top" : "left"], C),
              H = l(h[E ? "bottom" : "right"], C),
              W = L - R[A] - H,
              D = L / 2 - R[A] / 2 + (S / 2 - O / 2),
              F = a(k, l(D, W)),
              V =
                !s.arrow &&
                null != m(i) &&
                D !== F &&
                o.reference[A] / 2 - (D < k ? k : H) - R[A] / 2 < 0,
              _ = V ? (D < k ? D - k : D - W) : 0;
            return {
              [x]: w[x] + _,
              data: {
                [x]: F,
                centerOffset: D - F - _,
                ...(V && { alignmentOffset: _ }),
              },
              reset: V,
            };
          },
        }),
        eo = (e, t, n) => {
          let r = new Map(),
            i = { platform: er, ...n },
            o = { ...i.platform, _c: r };
          return E(e, t, { ...i, platform: o });
        };
      var el = n(89542);
      let ea = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
          return n && {}.hasOwnProperty.call(n, "current")
            ? null != n.current
              ? ei({ element: n.current, padding: r }).fn(t)
              : {}
            : n
            ? ei({ element: n, padding: r }).fn(t)
            : {};
        },
      });
      var ef = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function ec(e, t) {
        let n, r, i;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!ec(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, i[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !ec(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function es(e) {
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eu(e, t) {
        let n = es(e);
        return Math.round(t * n) / n;
      }
      function ed(e) {
        let t = i.useRef(e);
        return (
          ef(() => {
            t.current = e;
          }),
          t
        );
      }
      var ep = n(29586);
      let eh = (0, i.forwardRef)((e, t) => {
        let { children: n, width: o = 10, height: l = 5, ...a } = e;
        return (0, i.createElement)(
          ep.WV.svg,
          (0, r.Z)({}, a, {
            ref: t,
            width: o,
            height: l,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          e.asChild
            ? n
            : (0, i.createElement)("polygon", { points: "0,0 30,0 15,10" })
        );
      });
      var em = n(61266),
        eg = n(84104),
        ey = n(39830),
        ev = n(32618),
        ew = n(76769);
      let ex = "Popper",
        [eb, eA] = (0, eg.b)(ex),
        [eR, eE] = eb(ex),
        eP = (0, i.forwardRef)((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...l } = e,
            a = eE("PopperAnchor", n),
            f = (0, i.useRef)(null),
            c = (0, em.e)(t, f);
          return (
            (0, i.useEffect)(() => {
              a.onAnchorChange((null == o ? void 0 : o.current) || f.current);
            }),
            o
              ? null
              : (0, i.createElement)(ep.WV.div, (0, r.Z)({}, l, { ref: c }))
          );
        }),
        eS = "PopperContent",
        [eO, eT] = eb(eS),
        eL = (0, i.forwardRef)((e, t) => {
          var n, o, f, s, u, d, b, A, R, E, L, C, H, W;
          let {
              __scopePopper: D,
              side: F = "bottom",
              sideOffset: V = 0,
              align: _ = "center",
              alignOffset: M = 0,
              arrowPadding: z = 0,
              avoidCollisions: B = !0,
              collisionBoundary: N = [],
              collisionPadding: j = 0,
              sticky: I = "partial",
              hideWhenDetached: Z = !1,
              updatePositionStrategy: $ = "optimized",
              onPlaced: q,
              ...J
            } = e,
            K = eE(eS, D),
            [Q, U] = (0, i.useState)(null),
            ee = (0, em.e)(t, (e) => U(e)),
            [et, en] = (0, i.useState)(null),
            er = (0, ew.t)(et),
            ei =
              null !== (n = null == er ? void 0 : er.width) && void 0 !== n
                ? n
                : 0,
            eh =
              null !== (o = null == er ? void 0 : er.height) && void 0 !== o
                ? o
                : 0,
            eg =
              "number" == typeof j
                ? j
                : { top: 0, right: 0, bottom: 0, left: 0, ...j },
            ex = Array.isArray(N) ? N : [N],
            eb = ex.length > 0,
            eA = { padding: eg, boundary: ex.filter(eH), altBoundary: eb },
            {
              refs: eR,
              floatingStyles: eP,
              placement: eT,
              isPositioned: eL,
              middlewareData: eC,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: r = [],
                  platform: o,
                  elements: { reference: l, floating: a } = {},
                  transform: f = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [u, d] = i.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, h] = i.useState(r);
              ec(p, r) || h(r);
              let [m, g] = i.useState(null),
                [y, v] = i.useState(null),
                w = i.useCallback((e) => {
                  e !== R.current && ((R.current = e), g(e));
                }, []),
                x = i.useCallback((e) => {
                  e !== E.current && ((E.current = e), v(e));
                }, []),
                b = l || m,
                A = a || y,
                R = i.useRef(null),
                E = i.useRef(null),
                P = i.useRef(u),
                S = null != c,
                O = ed(c),
                T = ed(o),
                L = i.useCallback(() => {
                  if (!R.current || !E.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  T.current && (e.platform = T.current),
                    eo(R.current, E.current, e).then((e) => {
                      let t = { ...e, isPositioned: !0 };
                      C.current &&
                        !ec(P.current, t) &&
                        ((P.current = t),
                        el.flushSync(() => {
                          d(t);
                        }));
                    });
                }, [p, t, n, T]);
              ef(() => {
                !1 === s &&
                  P.current.isPositioned &&
                  ((P.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let C = i.useRef(!1);
              ef(
                () => (
                  (C.current = !0),
                  () => {
                    C.current = !1;
                  }
                ),
                []
              ),
                ef(() => {
                  if ((b && (R.current = b), A && (E.current = A), b && A)) {
                    if (O.current) return O.current(b, A, L);
                    L();
                  }
                }, [b, A, L, O, S]);
              let k = i.useMemo(
                  () => ({
                    reference: R,
                    floating: E,
                    setReference: w,
                    setFloating: x,
                  }),
                  [w, x]
                ),
                H = i.useMemo(() => ({ reference: b, floating: A }), [b, A]),
                W = i.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!H.floating) return e;
                  let t = eu(H.floating, u.x),
                    r = eu(H.floating, u.y);
                  return f
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(es(H.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, f, H.floating, u.x, u.y]);
              return i.useMemo(
                () => ({
                  ...u,
                  update: L,
                  refs: k,
                  elements: H,
                  floatingStyles: W,
                }),
                [u, L, k, H, W]
              );
            })({
              strategy: "fixed",
              placement: F + ("center" !== _ ? "-" + _ : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let i;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: o = !0,
                      ancestorResize: f = !0,
                      elementResize: s = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = X(e),
                    h = o || f ? [...(p ? Y(p) : []), ...Y(t)] : [];
                  h.forEach((e) => {
                    o && e.addEventListener("scroll", n, { passive: !0 }),
                      f && e.addEventListener("resize", n);
                  });
                  let m =
                      p && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              i = k(e);
                            function o() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function f(s, u) {
                                void 0 === s && (s = !1),
                                  void 0 === u && (u = 1),
                                  o();
                                let {
                                  left: d,
                                  top: p,
                                  width: h,
                                  height: m,
                                } = e.getBoundingClientRect();
                                if ((s || t(), !h || !m)) return;
                                let g = c(p),
                                  y = c(i.clientWidth - (d + h)),
                                  v = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -y +
                                      "px " +
                                      -c(i.clientHeight - (p + m)) +
                                      "px " +
                                      -c(d) +
                                      "px",
                                    threshold: a(0, l(1, u)) || 1,
                                  },
                                  w = !0;
                                function x(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!w) return f();
                                    t
                                      ? f(!1, t)
                                      : (n = setTimeout(() => {
                                          f(!1, 1e-7);
                                        }, 100));
                                  }
                                  w = !1;
                                }
                                try {
                                  r = new IntersectionObserver(x, {
                                    ...v,
                                    root: i.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(x, v);
                                }
                                r.observe(e);
                              })(!0),
                              o
                            );
                          })(p, n)
                        : null,
                    g = -1,
                    y = null;
                  s &&
                    ((y = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === p &&
                        y &&
                        (y.unobserve(t),
                        cancelAnimationFrame(g),
                        (g = requestAnimationFrame(() => {
                          var e;
                          null == (e = y) || e.observe(t);
                        }))),
                        n();
                    })),
                    p && !d && y.observe(p),
                    y.observe(t));
                  let v = d ? G(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = G(e);
                        v &&
                          (r.x !== v.x ||
                            r.y !== v.y ||
                            r.width !== v.width ||
                            r.height !== v.height) &&
                          n(),
                          (v = r),
                          (i = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        o && e.removeEventListener("scroll", n),
                          f && e.removeEventListener("resize", n);
                      }),
                        null == m || m(),
                        null == (e = y) || e.disconnect(),
                        (y = null),
                        d && cancelAnimationFrame(i);
                    }
                  );
                })(...t, { animationFrame: "always" === $ });
              },
              elements: { reference: K.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (R = { mainAxis: V + eh, alignmentAxis: M }),
                  async fn(e) {
                    var t, n;
                    let { x: r, y: i, placement: o, middlewareData: l } = e,
                      a = await T(e, R);
                    return o ===
                      (null == (t = l.offset) ? void 0 : t.placement) &&
                      null != (n = l.arrow) &&
                      n.alignmentOffset
                      ? {}
                      : {
                          x: r + a.x,
                          y: i + a.y,
                          data: { ...a, placement: o },
                        };
                  },
                },
                B && {
                  name: "shift",
                  options: (L = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === I
                        ? (void 0 === E && (E = {}),
                          {
                            options: E,
                            fn(e) {
                              let {
                                  x: t,
                                  y: n,
                                  placement: r,
                                  rects: i,
                                  middlewareData: o,
                                } = e,
                                {
                                  offset: l = 0,
                                  mainAxis: a = !0,
                                  crossAxis: f = !0,
                                } = p(E, e),
                                c = { x: t, y: n },
                                s = v(r),
                                u = g(s),
                                d = c[u],
                                m = c[s],
                                y = p(l, e),
                                w =
                                  "number" == typeof y
                                    ? { mainAxis: y, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...y };
                              if (a) {
                                let e = "y" === u ? "height" : "width",
                                  t =
                                    i.reference[u] - i.floating[e] + w.mainAxis,
                                  n =
                                    i.reference[u] +
                                    i.reference[e] -
                                    w.mainAxis;
                                d < t ? (d = t) : d > n && (d = n);
                              }
                              if (f) {
                                var x, b;
                                let e = "y" === u ? "width" : "height",
                                  t = ["top", "left"].includes(h(r)),
                                  n =
                                    i.reference[s] -
                                    i.floating[e] +
                                    ((t &&
                                      (null == (x = o.offset)
                                        ? void 0
                                        : x[s])) ||
                                      0) +
                                    (t ? 0 : w.crossAxis),
                                  l =
                                    i.reference[s] +
                                    i.reference[e] +
                                    (t
                                      ? 0
                                      : (null == (b = o.offset)
                                          ? void 0
                                          : b[s]) || 0) -
                                    (t ? w.crossAxis : 0);
                                m < n ? (m = n) : m > l && (m = l);
                              }
                              return { [u]: d, [s]: m };
                            },
                          })
                        : void 0,
                    ...eA,
                  }),
                  async fn(e) {
                    let { x: t, y: n, placement: r } = e,
                      {
                        mainAxis: i = !0,
                        crossAxis: o = !1,
                        limiter: f = {
                          fn: (e) => {
                            let { x: t, y: n } = e;
                            return { x: t, y: n };
                          },
                        },
                        ...c
                      } = p(L, e),
                      s = { x: t, y: n },
                      u = await P(e, c),
                      d = v(h(r)),
                      m = g(d),
                      y = s[m],
                      w = s[d];
                    if (i) {
                      let e = "y" === m ? "top" : "left",
                        t = "y" === m ? "bottom" : "right",
                        n = y + u[e],
                        r = y - u[t];
                      y = a(n, l(y, r));
                    }
                    if (o) {
                      let e = "y" === d ? "top" : "left",
                        t = "y" === d ? "bottom" : "right",
                        n = w + u[e],
                        r = w - u[t];
                      w = a(n, l(w, r));
                    }
                    let x = f.fn({ ...e, [m]: y, [d]: w });
                    return { ...x, data: { x: x.x - t, y: x.y - n } };
                  },
                },
                B && {
                  name: "flip",
                  options: (C = { ...eA }),
                  async fn(e) {
                    var t, n, r, i, o;
                    let {
                        placement: l,
                        middlewareData: a,
                        rects: f,
                        initialPlacement: c,
                        platform: s,
                        elements: u,
                      } = e,
                      {
                        mainAxis: d = !0,
                        crossAxis: b = !0,
                        fallbackPlacements: A,
                        fallbackStrategy: R = "bestFit",
                        fallbackAxisSideDirection: E = "none",
                        flipAlignment: S = !0,
                        ...O
                      } = p(C, e);
                    if (null != (t = a.arrow) && t.alignmentOffset) return {};
                    let T = h(l),
                      L = h(c) === c,
                      k = await (null == s.isRTL
                        ? void 0
                        : s.isRTL(u.floating)),
                      H =
                        A ||
                        (L || !S
                          ? [x(c)]
                          : (function (e) {
                              let t = x(e);
                              return [w(e), t, w(t)];
                            })(c));
                    A ||
                      "none" === E ||
                      H.push(
                        ...(function (e, t, n, r) {
                          let i = m(e),
                            o = (function (e, t, n) {
                              let r = ["left", "right"],
                                i = ["right", "left"];
                              switch (e) {
                                case "top":
                                case "bottom":
                                  if (n) return t ? i : r;
                                  return t ? r : i;
                                case "left":
                                case "right":
                                  return t
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(h(e), "start" === n, r);
                          return (
                            i &&
                              ((o = o.map((e) => e + "-" + i)),
                              t && (o = o.concat(o.map(w)))),
                            o
                          );
                        })(c, S, E, k)
                      );
                    let W = [c, ...H],
                      D = await P(e, O),
                      F = [],
                      V = (null == (n = a.flip) ? void 0 : n.overflows) || [];
                    if ((d && F.push(D[T]), b)) {
                      let e = (function (e, t, n) {
                        void 0 === n && (n = !1);
                        let r = m(e),
                          i = g(v(e)),
                          o = y(i),
                          l =
                            "x" === i
                              ? r === (n ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === r
                              ? "bottom"
                              : "top";
                        return (
                          t.reference[o] > t.floating[o] && (l = x(l)),
                          [l, x(l)]
                        );
                      })(l, f, k);
                      F.push(D[e[0]], D[e[1]]);
                    }
                    if (
                      ((V = [...V, { placement: l, overflows: F }]),
                      !F.every((e) => e <= 0))
                    ) {
                      let e =
                          ((null == (r = a.flip) ? void 0 : r.index) || 0) + 1,
                        t = W[e];
                      if (t)
                        return {
                          data: { index: e, overflows: V },
                          reset: { placement: t },
                        };
                      let n =
                        null ==
                        (i = V.filter((e) => e.overflows[0] <= 0).sort(
                          (e, t) => e.overflows[1] - t.overflows[1]
                        )[0])
                          ? void 0
                          : i.placement;
                      if (!n)
                        switch (R) {
                          case "bestFit": {
                            let e =
                              null ==
                              (o = V.map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ]).sort((e, t) => e[1] - t[1])[0])
                                ? void 0
                                : o[0];
                            e && (n = e);
                            break;
                          }
                          case "initialPlacement":
                            n = c;
                        }
                      if (l !== n) return { reset: { placement: n } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (H = {
                    ...eA,
                    apply: (e) => {
                      let {
                          elements: t,
                          rects: n,
                          availableWidth: r,
                          availableHeight: i,
                        } = e,
                        { width: o, height: l } = n.reference,
                        a = t.floating.style;
                      a.setProperty(
                        "--radix-popper-available-width",
                        "".concat(r, "px")
                      ),
                        a.setProperty(
                          "--radix-popper-available-height",
                          "".concat(i, "px")
                        ),
                        a.setProperty(
                          "--radix-popper-anchor-width",
                          "".concat(o, "px")
                        ),
                        a.setProperty(
                          "--radix-popper-anchor-height",
                          "".concat(l, "px")
                        );
                    },
                  }),
                  async fn(e) {
                    let t, n;
                    let {
                        placement: r,
                        rects: i,
                        platform: o,
                        elements: f,
                      } = e,
                      { apply: c = () => {}, ...s } = p(H, e),
                      u = await P(e, s),
                      d = h(r),
                      g = m(r),
                      y = "y" === v(r),
                      { width: w, height: x } = i.floating;
                    "top" === d || "bottom" === d
                      ? ((t = d),
                        (n =
                          g ===
                          ((await (null == o.isRTL
                            ? void 0
                            : o.isRTL(f.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((n = d), (t = "end" === g ? "top" : "bottom"));
                    let b = x - u[t],
                      A = w - u[n],
                      R = !e.middlewareData.shift,
                      E = b,
                      S = A;
                    if (y) {
                      let e = w - u.left - u.right;
                      S = g || R ? l(A, e) : e;
                    } else {
                      let e = x - u.top - u.bottom;
                      E = g || R ? l(b, e) : e;
                    }
                    if (R && !g) {
                      let e = a(u.left, 0),
                        t = a(u.right, 0),
                        n = a(u.top, 0),
                        r = a(u.bottom, 0);
                      y
                        ? (S =
                            w -
                            2 *
                              (0 !== e || 0 !== t ? e + t : a(u.left, u.right)))
                        : (E =
                            x -
                            2 *
                              (0 !== n || 0 !== r
                                ? n + r
                                : a(u.top, u.bottom)));
                    }
                    await c({ ...e, availableWidth: S, availableHeight: E });
                    let O = await o.getDimensions(f.floating);
                    return w !== O.width || x !== O.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                et && ea({ element: et, padding: z }),
                eW({ arrowWidth: ei, arrowHeight: eh }),
                Z && {
                  name: "hide",
                  options: (W = { strategy: "referenceHidden", ...eA }),
                  async fn(e) {
                    let { rects: t } = e,
                      { strategy: n = "referenceHidden", ...r } = p(W, e);
                    switch (n) {
                      case "referenceHidden": {
                        let n = S(
                          await P(e, { ...r, elementContext: "reference" }),
                          t.reference
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: n,
                            referenceHidden: O(n),
                          },
                        };
                      }
                      case "escaped": {
                        let n = S(
                          await P(e, { ...r, altBoundary: !0 }),
                          t.floating
                        );
                        return { data: { escapedOffsets: n, escaped: O(n) } };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [ek, eF] = eD(eT),
            eV = (0, ey.W)(q);
          (0, ev.b)(() => {
            eL && (null == eV || eV());
          }, [eL, eV]);
          let e_ = null === (f = eC.arrow) || void 0 === f ? void 0 : f.x,
            eM = null === (s = eC.arrow) || void 0 === s ? void 0 : s.y,
            ez =
              (null === (u = eC.arrow) || void 0 === u
                ? void 0
                : u.centerOffset) !== 0,
            [eB, eN] = (0, i.useState)();
          return (
            (0, ev.b)(() => {
              Q && eN(window.getComputedStyle(Q).zIndex);
            }, [Q]),
            (0, i.createElement)(
              "div",
              {
                ref: eR.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eP,
                  transform: eL ? eP.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: eB,
                  "--radix-popper-transform-origin": [
                    null === (d = eC.transformOrigin) || void 0 === d
                      ? void 0
                      : d.x,
                    null === (b = eC.transformOrigin) || void 0 === b
                      ? void 0
                      : b.y,
                  ].join(" "),
                },
                dir: e.dir,
              },
              (0, i.createElement)(
                eO,
                {
                  scope: D,
                  placedSide: ek,
                  onArrowChange: en,
                  arrowX: e_,
                  arrowY: eM,
                  shouldHideArrow: ez,
                },
                (0, i.createElement)(
                  ep.WV.div,
                  (0, r.Z)({ "data-side": ek, "data-align": eF }, J, {
                    ref: ee,
                    style: {
                      ...J.style,
                      animation: eL ? void 0 : "none",
                      opacity:
                        null !== (A = eC.hide) &&
                        void 0 !== A &&
                        A.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        eC = { top: "bottom", right: "left", bottom: "top", left: "right" },
        ek = (0, i.forwardRef)(function (e, t) {
          let { __scopePopper: n, ...o } = e,
            l = eT("PopperArrow", n),
            a = eC[l.placedSide];
          return (0,
          i.createElement)("span", { ref: l.onArrowChange, style: { position: "absolute", left: l.arrowX, top: l.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[l.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[l.placedSide], visibility: l.shouldHideArrow ? "hidden" : void 0 } }, (0, i.createElement)(eh, (0, r.Z)({}, o, { ref: t, style: { ...o.style, display: "block" } })));
        });
      function eH(e) {
        return null !== e;
      }
      let eW = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, i, o, l;
          let { placement: a, rects: f, middlewareData: c } = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            u = s ? 0 : e.arrowWidth,
            d = s ? 0 : e.arrowHeight,
            [p, h] = eD(a),
            m = { start: "0%", center: "50%", end: "100%" }[h],
            g =
              (null !==
                (r = null === (i = c.arrow) || void 0 === i ? void 0 : i.x) &&
              void 0 !== r
                ? r
                : 0) +
              u / 2,
            y =
              (null !==
                (o = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) &&
              void 0 !== o
                ? o
                : 0) +
              d / 2,
            v = "",
            w = "";
          return (
            "bottom" === p
              ? ((v = s ? m : "".concat(g, "px")), (w = "".concat(-d, "px")))
              : "top" === p
              ? ((v = s ? m : "".concat(g, "px")),
                (w = "".concat(f.floating.height + d, "px")))
              : "right" === p
              ? ((v = "".concat(-d, "px")), (w = s ? m : "".concat(y, "px")))
              : "left" === p &&
                ((v = "".concat(f.floating.width + d, "px")),
                (w = s ? m : "".concat(y, "px"))),
            { data: { x: v, y: w } }
          );
        },
      });
      function eD(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      let eF = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = (0, i.useState)(null);
          return (0, i.createElement)(
            eR,
            { scope: t, anchor: r, onAnchorChange: o },
            n
          );
        },
        eV = eP,
        e_ = eL,
        eM = ek;
    },
    76769: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(64090),
        i = n(32618);
      function o(e) {
        let [t, n] = (0, r.useState)(void 0);
        return (
          (0, i.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, i;
                if (!Array.isArray(t) || !t.length) return;
                let o = t[0];
                if ("borderBoxSize" in o) {
                  let e = o.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (i = t.blockSize);
                } else (r = e.offsetWidth), (i = e.offsetHeight);
                n({ width: r, height: i });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    11780: function (e, t, n) {
      n.d(t, {
        T: function () {
          return l;
        },
        f: function () {
          return a;
        },
      });
      var r = n(14749),
        i = n(64090),
        o = n(29586);
      let l = (0, i.forwardRef)((e, t) =>
          (0, i.createElement)(
            o.WV.span,
            (0, r.Z)({}, e, {
              ref: t,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...e.style,
              },
            })
          )
        ),
        a = l;
    },
    57742: function (e, t, n) {
      n.d(t, {
        j: function () {
          return o;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        i = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  i = "";
                if ("string" == typeof t || "number" == typeof t) i += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                  else for (n in t) t[n] && (i && (i += " "), (i += n));
                }
                return i;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        o = (e, t) => (n) => {
          var o;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: l, defaultVariants: a } = t,
            f = Object.keys(l).map((e) => {
              let t = null == n ? void 0 : n[e],
                i = null == a ? void 0 : a[e];
              if (null === t) return null;
              let o = r(t) || r(i);
              return l[e][o];
            }),
            c =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return i(
            e,
            f,
            null == t
              ? void 0
              : null === (o = t.compoundVariants) || void 0 === o
              ? void 0
              : o.reduce((e, t) => {
                  let { class: n, className: r, ...i } = t;
                  return Object.entries(i).every((e) => {
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
  },
]);
