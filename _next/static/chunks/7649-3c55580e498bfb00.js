"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7649],
  {
    9208: function (t, e, a) {
      a.d(e, {
        $N: function () {
          return f;
        },
        Vq: function () {
          return d;
        },
        cN: function () {
          return g;
        },
        cZ: function () {
          return A;
        },
        fK: function () {
          return h;
        },
        hg: function () {
          return c;
        },
      });
      var n = a(3827),
        i = a(64090),
        r = a(4322),
        l = a(52235),
        s = a(22169);
      let d = r.fC,
        c = r.xz,
        o = r.h_;
      r.x8;
      let u = i.forwardRef((t, e) => {
        let { className: a, ...i } = t;
        return (0, n.jsx)(r.aV, {
          ref: e,
          className: (0, s.cn)(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a
          ),
          ...i,
        });
      });
      u.displayName = r.aV.displayName;
      let A = i.forwardRef((t, e) => {
        let { className: a, children: i, ...d } = t;
        return (0, n.jsxs)(o, {
          children: [
            (0, n.jsx)(u, {}),
            (0, n.jsxs)(r.VY, {
              ref: e,
              className: (0, s.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...d,
              children: [
                i,
                (0, n.jsxs)(r.x8, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, n.jsx)(l.Z, { className: "h-4 w-4" }),
                    (0, n.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      A.displayName = r.VY.displayName;
      let h = (t) => {
        let { className: e, ...a } = t;
        return (0, n.jsx)("div", {
          className: (0, s.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            e
          ),
          ...a,
        });
      };
      h.displayName = "DialogHeader";
      let g = (t) => {
        let { className: e, ...a } = t;
        return (0, n.jsx)("div", {
          className: (0, s.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            e
          ),
          ...a,
        });
      };
      g.displayName = "DialogFooter";
      let f = i.forwardRef((t, e) => {
        let { className: a, ...i } = t;
        return (0, n.jsx)(r.Dx, {
          ref: e,
          className: (0, s.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...i,
        });
      });
      (f.displayName = r.Dx.displayName),
        (i.forwardRef((t, e) => {
          let { className: a, ...i } = t;
          return (0, n.jsx)(r.dk, {
            ref: e,
            className: (0, s.cn)("text-sm text-muted-foreground", a),
            ...i,
          });
        }).displayName = r.dk.displayName);
    },
    36612: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = a(30982);
      function i(t) {
        let { children: e, style: a = "decimal" } = t,
          i = (0, n.useFormatter)();
        return e ? i.number(parseFloat(e.toString()), { style: a }) : null;
      }
    },
    68575: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = a(3827),
        i = a(88e3),
        r = a(57180);
      function l(t) {
        let { txHash: e, status: a, children: l } = t,
          s = (0, r.Z)(),
          d = (0, i.useWaitForTransactionReceipt)({
            hash: e,
            chainId: s,
            confirmations: 1,
          });
        return (!e && void 0 == a) || (d.status == a && e)
          ? (0, n.jsx)(n.Fragment, { children: l })
          : null;
      }
    },
    17247: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return i;
        },
      });
      var n = a(3827);
      function i() {
        return (0, n.jsxs)("div", {
          role: "status",
          children: [
            (0, n.jsxs)("svg", {
              "aria-hidden": "true",
              className:
                "h-4 w-4 animate-spin fill-lime-600 text-gray-200 dark:text-gray-600",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, n.jsx)("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                (0, n.jsx)("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            (0, n.jsx)("span", {
              className: "sr-only",
              children: "Loading...",
            }),
          ],
        });
      }
    },
    46989: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = a(3827),
        i = a(8792),
        r = a(22169);
      function l(t) {
        let {
          onClick: e,
          children: a,
          icon: l,
          link: s,
          className: d,
          isLoading: c = !1,
          disabled: o = !1,
          target: u,
        } = t;
        return (0, n.jsxs)(i.default, {
          onClick: (t) => {
            !o && e && e(t);
          },
          href: null != s ? s : "#",
          target: u,
          className: (0, r.cn)(
            "inline-flex items-center rounded-lg border-l border-r bg-taolime px-3 py-2 text-center text-deepblue transition-all duration-200",
            d,
            c && "cursor-not-allowed",
            o && "cursor-not-allowed",
            c || o ? "bg-opacity-60" : "bg-opacity-100"
          ),
          children: [
            (0, n.jsx)("div", {
              className: "absolute m-auto h-6 w-6",
              children: (0, n.jsx)("div", { children: l }),
            }),
            (0, n.jsxs)("div", {
              className:
                "flex flex-1 items-center justify-center text-center align-middle",
              children: [
                c &&
                  (0, n.jsxs)("div", {
                    role: "status",
                    children: [
                      (0, n.jsxs)("svg", {
                        "aria-hidden": "true",
                        className:
                          "inline h-6 w-6 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600",
                        viewBox: "0 0 100 101",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, n.jsx)("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "currentColor",
                          }),
                          (0, n.jsx)("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentFill",
                          }),
                        ],
                      }),
                      (0, n.jsx)("span", {
                        className: "sr-only",
                        children: "Loading...",
                      }),
                    ],
                  }),
                !c && (0, n.jsx)(n.Fragment, { children: a }),
              ],
            }),
          ],
        });
      }
    },
    92478: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return y;
        },
      });
      var n = a(3827),
        i = a(20703),
        r = {
          src: "/_next/static/media/dai.f8dd2972.svg",
          height: 444,
          width: 444,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: "/_next/static/media/eth.2dfd930c.svg",
          height: 16,
          width: 10,
          blurWidth: 0,
          blurHeight: 0,
        },
        s = {
          src: "/_next/static/media/grail.cfbd2ea8.svg",
          height: 200,
          width: 200,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/link.eb1a4e56.svg",
          height: 44,
          width: 38,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/matic.03da1542.svg",
          height: 500,
          width: 500,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/metamask.c811def1.svg",
          height: 25,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = {
          src: "/_next/static/media/paxg.5f54bf2e.svg",
          height: 68,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/qnt.2bad5579.svg",
          height: 489,
          width: 451,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: "/_next/static/media/ram.294f72e2.png",
          height: 64,
          width: 64,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUnJykICQwRERVMaXEKCg54eX0JCg0XGBtgYGUSEhYEBQgqKy+Xl5tGR0uwr7NiYmeh+Ll5AAAACnRSTlMr964A6vqs/vqzOMrY3AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwVykESABAMA8CkRUmL///W2PPCscgFB5oi1ADTrJoyMCuzkuA90rnE2F3qe/ws/eww0uAPOr8BmyykLykAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/stTAO.817fd950.png",
          height: 250,
          width: 250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEXZ2dnY2Nja2tpMaXHY2NgODg6YmJiIiIg2NjbJyclBQUFcXFxQUFCsrKxPhx12AAAABHRSTlPzsikApdxqRgAAAAlwSFlzAAAD6AAAA+gBtXtSawAAADZJREFUeJw1y7kBwDAMA7ETTUp2nv3XTRX0YKmgtBDuNqJ8kuMCvzNjwNlPDOXsOy5EX9OIv38hAQDv9krtqwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = {
          src: "/_next/static/media/sushi.ce7782ae.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: "/gold.png",
          height: 25,
          width: 26,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX////////////////////////////////////////////////+/v7////////////7RkDRAAAAD3RSTlO+ClVu5PepgZnMIx2kQKuqi2odAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nE3GORKAMAwDQEm2yQXo/79lSJWtFg+2jubMSgvMuKEiWPFCnn8uyOuIdyY02DpHfCveAU61RDJ4AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        b = {
          src: "/_next/static/media/taousd-white.224b522d.svg",
          height: 26,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "/_next/static/media/tpad.143dded8.webp",
          height: 256,
          width: 256,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoIAAgAAkA4JaQADrK98AL+8ndQAP79KbOoEn44pdfJEfffEmOeKV8kUsj32w6YxXw+H10UY3plcOlS9NJ8KCAAAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        v = {
          src: "/_next/static/media/uniswap.25e4c1ac.svg",
          height: 194,
          width: 168,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/usdc.23c35c78.svg",
          height: 16,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
          src: "/_next/static/media/usdt.dcef1ab2.svg",
          height: 295,
          width: 339,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/_next/static/media/wquil.093b6125.png",
          height: 250,
          width: 250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXH+Owv/C2X/ooD/TgH+Hjb/Iw//Q0v/AE3/ncj4zMr/AnD9mr3/tqX7YGb7fW37QHL/AAD/SgL6ikn/TQL9DlP6X379CnX6r7n9OkP/cW7/Z43/Y6/5lJn/gkb/gED6fJzMfZPTAAAAGnRSTlMArqX+Z6diBVz++aH+/v37/AmrrbH7+6f7+3j9kvUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEHAoAgDASwY7Zs3Iqg/v+VJgDxIZkAhO7cbQjcY61nswhu+/KVBGTcxyhqBt8+F/9owLSk3oUAsmLVE35zbwM1HOpI2wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        N = {
          src: "/_next/static/media/wtao.74558e0c.svg",
          height: 256,
          width: 256,
          blurWidth: 0,
          blurHeight: 0,
        };
      function y(t) {
        let { symbol: e, width: a = 24, height: y = 24, invert: I = !1 } = t,
          k = {
            QNT: A,
            USDC: w,
            USDT: C,
            DAI: r,
            SUSHI: f,
            UNI: v,
            PAXG: u,
            LINK: d,
            WETH: l,
            "USDC.e": w,
            MATIC: c,
            WMATIC: c,
            "WETH.e": l,
            "DAI.e": r,
            "USDT.e": C,
            taoUSD: b,
            PIN: m,
            metamask: o,
            wTAO: N,
            WTAO: N,
            camelot: s,
            TPAD: x,
            RAM: h,
            WQUIL: p,
            stTAO: g,
            STTAO: g,
          };
        return e && k[e]
          ? (0, n.jsx)(i.default, {
              src: k[e],
              alt: e,
              width: a,
              height: y,
              className: "".concat(!0 === I ? "invert" : ""),
            })
          : null;
      }
    },
    84098: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = a(64090),
        i = a(78065);
      function r(t) {
        let e = (0, i.Z)(),
          [a, r] = (0, n.useState)(void 0),
          [l, s] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            fetch("".concat(e, "/abi/").concat(t))
              .then((t) => t.json())
              .then(async (t) => {
                s(!1), r(t);
              });
          }, [e, t]),
          { ...a, isLoading: l }
        );
      }
    },
    78065: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = a(43089),
        i = a(14980);
      function r(t) {
        var e, a;
        let r = (0, n.useChainId)();
        return t
          ? null !== (e = i.mb[t]) && void 0 !== e
            ? e
            : i.mb[1]
          : null !== (a = i.mb[r]) && void 0 !== a
          ? a
          : i.mb[1];
      }
    },
    22009: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return c;
        },
      });
      var n = a(57180),
        i = a(39296),
        r = a(71003),
        l = a(39617),
        s = a(10035),
        d = a(14980);
      function c(t) {
        var e, a, c, o, u;
        let A =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0x",
          h =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          { address: g } = (0, i.useAccount)(),
          f = (0, n.Z)(),
          m = d.EO[f],
          b = (0, r.useBalance)({
            chainId: f,
            address: "0x" !== A ? A : null != g ? g : "0x",
          }),
          x = (0, l.useReadContracts)({
            contracts: [
              {
                abi: s.Wo,
                address: t,
                functionName: "balanceOf",
                args: ["0x" !== A ? A : null != g ? g : "0x"],
                chainId: f,
              },
              { abi: s.Wo, address: t, functionName: "decimals", chainId: f },
              { abi: s.Wo, address: t, functionName: "symbol", chainId: f },
            ],
            query: { refetchInterval: 5e3, refetchIntervalInBackground: !0 },
          });
        return {
          balance:
            (null == t ? void 0 : t.toLowerCase()) ===
              (null == m ? void 0 : m.toLowerCase()) && h
              ? null == b
                ? void 0
                : null === (e = b.data) || void 0 === e
                ? void 0
                : e.value
              : null === (a = x.data) || void 0 === a
              ? void 0
              : a[0].result,
          decimals:
            (null == t ? void 0 : t.toLowerCase()) ===
            (null == m ? void 0 : m.toLowerCase())
              ? 18
              : null === (c = x.data) || void 0 === c
              ? void 0
              : c[1].result,
          symbol:
            (null == t ? void 0 : t.toLowerCase()) ===
              (null == m ? void 0 : m.toLowerCase()) && h
              ? null == b
                ? void 0
                : null === (o = b.data) || void 0 === o
                ? void 0
                : o.symbol
              : null === (u = x.data) || void 0 === u
              ? void 0
              : u[2].result,
        };
      }
    },
    57180: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = a(43089),
        i = a(14980);
      function r() {
        let t = (0, n.useChainId)(),
          e = t;
        return t in i.mb || (e = 42161), e;
      }
    },
    87378: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = a(57180),
        i = a(39296),
        r = a(69908),
        l = a(10035);
      function s(t, e, a) {
        let { address: s } = (0, i.useAccount)(),
          d = (0, n.Z)(),
          { refetch: c, data: o } = (0, r.useReadContract)({
            abi: l.Wo,
            address: t,
            functionName: "allowance",
            args: [null != s ? s : "0x", null != e ? e : "0x"],
            chainId: d,
            query: { refetchIntervalInBackground: !0, refetchInterval: 5e3 },
          }),
          u = (0, r.useReadContract)({
            abi: l.Wo,
            address: t,
            functionName: "balanceOf",
            args: [null != s ? s : "0x"],
            chainId: d,
            query: { refetchIntervalInBackground: !0, refetchInterval: 5e3 },
          }),
          A = !1,
          h = !1,
          g = BigInt(0);
        return (
          u && u.data && (g = BigInt(u.data)),
          o && a && (A = o >= a),
          a && g >= a && (h = !0),
          { isApproved: A, hasEnoughBalance: h, balance: g, refetch: c }
        );
      }
    },
    22169: function (t, e, a) {
      a.d(e, {
        G: function () {
          return d;
        },
        cn: function () {
          return l;
        },
        s: function () {
          return s;
        },
      });
      var n = a(75504),
        i = a(51367),
        r = a(14980);
      function l() {
        for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
          e[a] = arguments[a];
        return (0, i.m6)((0, n.W)(e));
      }
      function s(t) {
        return "".concat(t.slice(0, 6), "...").concat(t.slice(-4));
      }
      function d(t, e) {
        var a;
        let n = null !== (a = r.gb[t]) && void 0 !== a ? a : r.gb[1];
        return "".concat(n).concat(e);
      }
    },
  },
]);
