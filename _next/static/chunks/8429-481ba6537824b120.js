(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8429],
  {
    28429: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 21257));
    },
    87461: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(64090),
        s = {
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
       */ let i = (e) =>
          e
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
        r = (e, t) => {
          let a = (0, n.forwardRef)((a, r) => {
            let {
              color: l = "currentColor",
              size: d = 24,
              strokeWidth: u = 2,
              absoluteStrokeWidth: c,
              className: p = "",
              children: o,
              ...m
            } = a;
            return (0, n.createElement)(
              "svg",
              {
                ref: r,
                ...s,
                width: d,
                height: d,
                stroke: l,
                strokeWidth: c ? (24 * Number(u)) / Number(d) : u,
                className: ["lucide", "lucide-".concat(i(e)), p].join(" "),
                ...m,
              },
              [
                ...t.map((e) => {
                  let [t, a] = e;
                  return (0, n.createElement)(t, a);
                }),
                ...(Array.isArray(o) ? o : [o]),
              ]
            );
          });
          return (a.displayName = "".concat(e)), a;
        };
    },
    81708: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (0, a(87461).Z)("ExternalLink", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        [
          "path",
          {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp",
          },
        ],
      ]);
    },
    21257: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return R;
          },
        });
      var n = a(3827),
        s = a(64090),
        i = a(20703),
        r = {
          src: "/_next/static/media/arcs-chart.914ed029.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: "/_next/static/media/stopwatch.c5f96306.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/world-shield.ab704e4a.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = a(54490),
        c = a(81708),
        p = a(30982),
        o = a(69908),
        m = a(14980),
        y = a(27089),
        x = a(72911),
        h = a(22530),
        f = a(57180),
        w = a(72450),
        g = a(88e3),
        b = a(34508),
        A = a(37046),
        v = a(66114),
        j = a(17532),
        T = a(81674),
        N = a(60332),
        k = a(55055),
        M = a(59409),
        Z = a(32543),
        S = a(46989),
        F = a(92478);
      function R() {
        let { prices: e, isLoading: t } = (0, b.Z)(),
          { statistics: a, isLoading: R } = (0, A.Z)(1),
          { statistics: C, isLoading: E } = (0, A.Z)(42161),
          { cashBackPoolOverview: B, isLoading: D } = (0, h.Z)(42161),
          { cashBackPoolOverview: W, isLoading: U } = (0, h.Z)(1);
        !(function (e, t) {
          e.startsWith("0x") || (e = "0x" + e);
          let {
              writeContract: a,
              isPending: n,
              data: s,
            } = (0, w.useWriteContract)(),
            { isLoading: i, isSuccess: r } = (0,
            g.useWaitForTransactionReceipt)({ hash: s });
        })("0x3E0858F65aBF8606103f2c6B98138E4208cC795B", 0);
        let O = (0, f.Z)(),
          _ = (0, v.s)(),
          H = (0, j.b)(),
          { data: I } = (0, o.useReadContract)({
            abi: x,
            address: "0x".concat(m.gQ[1].split("x")[1]),
            chainId: 1,
            functionName: "totalSupply",
            query: { refetchIntervalInBackground: !1 },
          }),
          { data: L } = (0, o.useReadContract)({
            abi: y,
            address: "0x".concat(m.gQ[42161].split("x")[1]),
            chainId: 42161,
            functionName: "totalSupply",
            query: { refetchIntervalInBackground: !1 },
          }),
          [q, K] = (0, s.useState)(0);
        (0, s.useEffect)(() => {
          I && K((parseFloat(I.toString()) * _) / 1e9);
        }, [_, I]);
        let Q = 100 * ((null == e ? void 0 : e.TUSD) ? e.TUSD - 1 : 0),
          z = parseInt(Q.toString()),
          P = z > -1 ? "text-taolime" : z < -2 ? "text-red" : "text-yellow";
        return (0, n.jsx)(p.NextIntlClientProvider, {
          locale: "en",
          children: (0, n.jsx)("div", {
            className: "container items-center overflow-hidden text-sm",
            children: (0, n.jsxs)("div", {
              className:
                "mt-10 flex flex-col items-start justify-center gap-4 md:flex-row md:items-start",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex w-full flex-col items-center justify-start gap-4 text-base md:w-[50%]",
                  children: [
                    (0, n.jsxs)(Z.Z, {
                      title: "",
                      className: "mt-4 w-full pb-0 md:mt-0",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "pb-2 pt-2 text-sm",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "flex w-fit flex-row items-center justify-between rounded-full border-[1px] border-[#BAF7E9] border-opacity-20 px-2 ",
                              children: (0, n.jsx)(i.default, {
                                src: u.Z,
                                alt: "ramses-new",
                                width: 25,
                                height: 25,
                                className: "rounded-xl pb-2 pt-2 invert",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "pb-2 pt-4 text-[#BAF7E9]",
                              children: (0, n.jsx)("p", {
                                className: "text-lg",
                                children: "Quick Actions",
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(N.Z, { className: "" }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col items-center gap-2 pb-2 md:flex-row",
                          children: [
                            (0, n.jsx)(S.Z, {
                              link: "/staking/wtao",
                              className: "w-[10.5rem] px-4 md:w-auto",
                              children: (0, n.jsx)("div", {
                                className:
                                  "flex items-center space-x-2 text-sm font-semibold",
                                children: (0, n.jsx)("div", {
                                  children: "Stake ALTA",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(Z.Z, {
                      title: "",
                      className: "mt-4 w-full text-sm md:mt-0",
                      children: (0, n.jsxs)("div", {
                        className: "pb-2 pt-2 text-sm",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "flex w-fit flex-row items-center justify-between rounded-full border-[1px] border-[#BAF7E9] border-opacity-20 px-2 ",
                            children: (0, n.jsx)(i.default, {
                              src: u.Z,
                              alt: "ramses-new",
                              width: 25,
                              height: 25,
                              className: "rounded-xl pb-2 pt-2 invert",
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "pb-2 pt-4 text-[#BAF7E9]",
                            children: [
                              (0, n.jsx)("p", {
                                className: "text-lg",
                                children: "Stake wherever you want",
                              }),
                              (0, n.jsxs)("div", {
                                className: "w-3/4 opacity-70",
                                children: [
                                  "Bridge your",
                                  (0, n.jsx)("span", {
                                    className: "text-taolime",
                                    children: " ALTA ",
                                  }),
                                  "between ",
                                  (0, n.jsx)("span", {
                                    className: "text-taolime",
                                    children: "Arbitrum",
                                  }),
                                  " and ",
                                  (0, n.jsx)("span", {
                                    className: "text-taolime",
                                    children: "Ethereum",
                                  }),
                                  " ",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(N.Z, { className: "mb-2 mt-2" }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex flex-col items-center gap-2 font-semibold md:flex-row md:items-start md:items-center md:gap-0 md:space-x-2",
                            children: [
                              (0, n.jsx)(S.Z, {
                                link: "https://etherscan.io/token/0x00000000000000000000000000000000000000",
                                className: "w-[10.5rem] px-4 md:w-auto",
                                children: (0, n.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(c.Z, {}),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: "Bridge ALTA",
                                    }),
                                  ],
                                }),
                              }),
                              
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(Z.Z, {
                      title: "",
                      className: "mt-4 w-full text-sm md:mt-0",
                      children: (0, n.jsxs)("div", {
                        className: "pb-2 pt-2 text-sm",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "flex w-fit flex-row items-center justify-between rounded-full border-[1px] border-[#BAF7E9] border-opacity-20 px-2 ",
                            children: (0, n.jsx)(i.default, {
                              src: u.Z,
                              alt: "ramses-new",
                              width: 25,
                              height: 25,
                              className: "rounded-xl pb-2 pt-2 invert",
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "pb-2 pt-4 text-[#BAF7E9]",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "pb-1 text-lg",
                                children: [
                                  "Under invested in",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className: "text-taolime",
                                    children: "ALTA",
                                  }),
                                  "?",
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "opacity-70",
                                children: [
                                  "Need to repeay your loans with",
                                  " ",
                                  (0, n.jsx)("span", {
                                    className: "text-taolime",
                                    children: "ALTA",
                                  }),
                                  "? - We got you covered",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)(N.Z, { className: "mb-2 mt-2" }),
                          (0, n.jsxs)("div", {
                            className:
                              "flex items-center space-x-2 font-semibold",
                            children: [
                              (0, n.jsx)(S.Z, {
                                target: "_blank",
                                link: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                                className: "px-4",
                                children: (0, n.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, n.jsx)(F.Z, {
                                        symbol: "ALTA",
                                        invert: !0,
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      children: "Buy ALTA",
                                    }),
                                  ],
                                }),
                              }),
                              
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsxs)(Z.Z, {
                      title: "Redemptions Status",
                      className: "w-full",
                      children: [
                        (0, n.jsx)(N.Z, { className: "" }),
                        (0, n.jsxs)("div", {
                          className:
                            "justify-between gap-4 pb-2 md:grid md:grid-cols-2",
                          children: [
                            (0, n.jsx)("div", {
                              className: "mb-4 md:mb-0",
                              children: (0, n.jsxs)("div", {
                                className:
                                  "flex flex-col items-start gap-3 space-x-2 pt-2",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "pl-3",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "glow-circle absolute z-[100] h-16 w-16 translate-x-[-1rem] translate-y-[-0.9rem] opacity-30",
                                      }),
                                      (0, n.jsx)(i.default, {
                                        src: d,
                                        alt: "world-shield",
                                        width: 34,
                                        height: 34,
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "            text-lg text-[#BAF7E9]           ",
                                    children: "Redemptions Risk",
                                  }),
                                ],
                              }),
                            }),
                            (0, n.jsxs)("div", {
                              className: "text-md flex flex-col items-end pt-3",
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "mb-2 w-fit rounded-md border-[0.5px] border-[#BAF7E9] border-opacity-50 px-3 py-1 text-sm text-[#BAF7E9]",
                                  children:
                                    "text-red" === P
                                      ? (0, n.jsx)("div", {
                                          className: "text-red",
                                          children: "High",
                                        })
                                      : "text-yellow" === P
                                      ? (0, n.jsx)("div", {
                                          className: "text-yellow",
                                          children: "Medium",
                                        })
                                      : (0, n.jsx)("div", {
                                          className: "text-taolime",
                                          children: "No risk",
                                        }),
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center gap-2 text-[#BAF7E9]",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: "text-sm",
                                      children: "Peg Status:",
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "text-sm",
                                      children:
                                        "text-red" === P
                                          ? (0, n.jsx)("div", {
                                              className: "text-red",
                                              children: "Under peg",
                                            })
                                          : "text-yellow" === P
                                          ? (0, n.jsx)("div", {
                                              className: "text-yellow",
                                              children: "Soft peg",
                                            })
                                          : (0, n.jsxs)("div", {
                                              children: [
                                                (0, n.jsx)("div", {
                                                  className: "text-taolime",
                                                  children: "Strong peg",
                                                }),
                                                (0, n.jsxs)("div", {
                                                  className:
                                                    "mt-2 text-xs text-muted-foreground",
                                                  children: [
                                                    (0, n.jsx)("sup", {
                                                      children: "*",
                                                    }),
                                                    " When peg is strong, redemptions are disabled.",
                                                  ],
                                                }),
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "flex w-full flex-col items-center justify-start gap-2  text-base md:w-[50%]",
                  children: [
                    (0, n.jsxs)(Z.Z, {
                      title: "Quick Stats",
                      className: "w-full",
                      children: [
                        (0, n.jsx)(N.Z, { className: "" }),
                        (0, n.jsxs)("div", {
                          className: "grid grid-cols-2 justify-between gap-4 ",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "glow-circle absolute z-[100] h-16 w-16 translate-x-[-0.75rem] translate-y-[-0.8rem] opacity-30",
                                    }),
                                    (0, n.jsx)(i.default, {
                                      src: u.Z,
                                      alt: "vault",
                                      width: 40,
                                      height: 40,
                                      className: "invert",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start py-1 pl-2 text-[#BAF7E9]",
                                  children: [
                                    (0, n.jsx)("p", {
                                      className: "text-lg",
                                      children: "Total TVL",
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex items-center justify-start space-x-2 text-xs",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              children: t
                                ? (0, n.jsx)("div", {
                                    className: "animate-pulse",
                                    children: "Loading...",
                                  })
                                : (0, n.jsx)("div", {
                                    className: "pt-1 text-lg",
                                    children: (0, n.jsx)("div", {
                                      children:
                                        (!t || !D) && a && W
                                          ? (0, n.jsx)(n.Fragment, {
                                              children: (0, n.jsx)(k.Z, {
                                                children: (0, n.jsx)(T.Z, {
                                                  children:
                                                    parseFloat(
                                                      W.totalTBANKStakedHuman
                                                    ) *
                                                      Number(H) +
                                                    q +
                                                    parseFloat(a.tvl),
                                                }),
                                              }),
                                            })
                                          : (0, n.jsx)(k.Z, {
                                              children: (0, n.jsx)(T.Z, {
                                                children: "2753839",
                                              }),
                                            }),
                                    }),
                                  }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(N.Z, { className: "mt-4" }),
                        (0, n.jsxs)("div", {
                          className: "grid grid-cols-2 justify-between gap-4 ",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "glow-circle absolute z-[100] h-16 w-16 translate-x-[-0.75rem] translate-y-[-0.8rem] opacity-30",
                                    }),
                                    (0, n.jsx)(i.default, {
                                      src: u.Z,
                                      alt: "vault",
                                      width: 40,
                                      height: 40,
                                      className: "invert",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start py-1 pl-2 text-[#BAF7E9]",
                                  children: [
                                    (0, n.jsx)("p", {
                                      className: "text-lg",
                                      children: "$ALTA",
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex items-center justify-start space-x-2 text-xs",
                                      children: (0, n.jsx)("div", {
                                        className: "text-lg font-semibold",
                                        children: (0, n.jsx)(T.Z, {
                                          children: _,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              children: t
                                ? (0, n.jsx)("div", {
                                    className: "animate-pulse",
                                    children: "Loading...",
                                  })
                                : (0, n.jsxs)("div", {
                                    className: "pt-1 text-lg",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "font-semibold text-muted-foreground",
                                        children: "Staked WTAO",
                                      }),
                                      (0, n.jsx)("div", {
                                        children:
                                          a && !R
                                            ? (0, n.jsxs)("div", {
                                                className:
                                                  "flex flex-col items-start justify-start pb-2",
                                                children: [
                                                  (0, n.jsx)(k.Z, {
                                                    children: (0, n.jsx)(T.Z, {
                                                      currency: "usd",
                                                      children: q,
                                                    }),
                                                  }),
                                                  I
                                                    ? (0, n.jsxs)("span", {
                                                        className:
                                                          "text-sm opacity-70",
                                                        children: [
                                                          (
                                                            parseFloat(
                                                              I.toString()
                                                            ) / 1e9
                                                          ).toLocaleString(
                                                            "en-US",
                                                            {
                                                              maximumFractionDigits: 18,
                                                            }
                                                          ),
                                                          " ",
                                                          "ALTA",
                                                        ],
                                                      })
                                                    : "",
                                                ],
                                              })
                                            : (0, n.jsx)("div", {
                                                className: "animate-pulse",
                                                children: "Loading...",
                                              }),
                                      }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        (0, n.jsx)(N.Z, { className: "mt-4" }),
                        (0, n.jsxs)("div", {
                          className: "grid grid-cols-2 justify-between gap-4 ",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "glow-circle absolute z-[100] h-16 w-16 translate-x-[-0.75rem] translate-y-[-0.8rem] opacity-30",
                                    }),
                                    (0, n.jsx)(i.default, {
                                      src: u.Z,
                                      alt: "vault",
                                      width: 40,
                                      height: 40,
                                      className: "invert",
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start py-1 pl-2 text-[#BAF7E9]",
                                  children: [
                                    (0, n.jsx)("p", {
                                      className: "text-lg",
                                      children: "$ALTA Rewards",
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex items-center justify-start space-x-2 text-xs",
                                      children: (0, n.jsx)("div", {
                                        className: "text-lg font-semibold",
                                        children: (0, n.jsx)(T.Z, {
                                          children: _,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              children: t
                                ? (0, n.jsx)("div", {
                                    className: "animate-pulse",
                                    children: "Loading...",
                                  })
                                : (0, n.jsxs)("div", {
                                    className: "pt-1 text-lg",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "font-semibold text-muted-foreground",
                                        children: "Total WTAO Distributed",
                                      }),
                                      (0, n.jsx)("div", {
                                        children:
                                          a && !R
                                            ? (0, n.jsxs)("div", {
                                                className:
                                                  "flex flex-col items-start justify-start pb-2",
                                                children: [
                                                  (0, n.jsx)(k.Z, {
                                                    children: (0, n.jsx)(T.Z, {
                                                      currency: "usd",
                                                      children:
                                                        Number(
                                                          a.totalWTAORewards
                                                        ) * _,
                                                    }),
                                                  }),
                                                  L && I
                                                    ? (0, n.jsxs)("span", {
                                                        className:
                                                          "text-sm opacity-70",
                                                        children: [
                                                          a.totalWTAORewards,
                                                          " ALTA",
                                                        ],
                                                      })
                                                    : "",
                                                ],
                                              })
                                            : (0, n.jsx)("div", {
                                                className: "animate-pulse",
                                                children: "Loading...",
                                              }),
                                      }),
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)(Z.Z, {
                      title: "Health Factor Stats",
                      className: "w-full",
                      children: [
                        (0, n.jsx)(N.Z, { className: "" }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col items-center gap-4 pb-4",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex w-full flex-row items-center justify-between gap-2 px-4 pt-1 text-sm",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-start gap-1",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "glow-circle absolute z-[100] h-16 w-16 translate-x-[-0.05rem] translate-y-[-0.9rem] opacity-30",
                                    }),
                                    (0, n.jsx)(i.default, {
                                      src: d,
                                      alt: "world-shield",
                                      width: 34,
                                      height: 34,
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "font-semibold text-[#BAF7E9]",
                                      children: "Protection threshold",
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex flex-col items-center rounded-md border-[0.5px] border-[#BAF7E9] border-opacity-50 px-2",
                                      children: (0, n.jsx)(k.Z, {
                                        children:
                                          null == a
                                            ? void 0
                                            : a.healthFactor.redemptionLimit,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-start gap-1",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "glow-circle-yellow absolute z-[100] h-16 w-16 translate-x-[-0.05rem] translate-y-[-0.9rem] opacity-30",
                                    }),
                                    (0, n.jsx)(i.default, {
                                      src: l,
                                      alt: "world-shield",
                                      width: 34,
                                      height: 34,
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "font-semibold text-[#C58422]",
                                      children: "Average Protocol HF",
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex flex-col items-center rounded-md border-[0.5px] border-[#C58422] border-opacity-50 px-2",
                                      children:
                                        a && !R
                                          ? (0, n.jsx)(M.Z, {
                                              value: a.healthFactor.avg,
                                              threshold: parseFloat(
                                                a.healthFactor.redemptionLimit
                                              ),
                                            })
                                          : (0, n.jsx)("div", {
                                              className: "animate-pulse",
                                              children: "Loading...",
                                            }),
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-start gap-1",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "glow-circle-red absolute z-[100] h-16 w-16 translate-x-[-0.05rem] translate-y-[-0.9rem] opacity-30",
                                    }),
                                    (0, n.jsx)(i.default, {
                                      src: r,
                                      alt: "world-shield",
                                      width: 34,
                                      height: 34,
                                    }),
                                    (0, n.jsx)("div", {
                                      className: "font-semibold text-[#C52222]",
                                      children: "Lowest Vault HF",
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex flex-col items-center rounded-md border-[0.5px] border-[#C52222] border-opacity-50 px-2",
                                      children:
                                        a && !R
                                          ? (0, n.jsx)(M.Z, {
                                              value: a.healthFactor.min,
                                              threshold: parseFloat(
                                                a.healthFactor.redemptionLimit
                                              ),
                                            })
                                          : (0, n.jsx)("div", {
                                              className: "animate-pulse",
                                              children: "Loading...",
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, n.jsx)(N.Z, { className: "mt-2" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    60332: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(3827),
        s = a(22169),
        i = a(95453);
      function r(e) {
        let { className: t = "" } = e;
        return (0, n.jsx)(i.Z, {
          className: (0, s.cn)(
            t,
            "to-taolime mb-4 bg-gradient-to-l from-transparent opacity-30"
          ),
        });
      }
    },
    55055: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = a(3827);
      function s(e) {
        let { children: t } = e;
        return (0, n.jsx)("span", {
          className:
            "inline-block bg-gradient-to-r from-taolime/60 via-taolime/80 to-taolime/90 bg-clip-text font-bold text-transparent",
          children: t,
        });
      }
    },
    59409: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = a(3827);
      function s(e) {
        let { value: t, threshold: a } = e;
        return (0, n.jsx)("span", {
          className: "font-semibold ".concat(
            t > 1.1 * a
              ? "text-green-500"
              : t > 4
              ? "text-lime-500"
              : "text-red-500"
          ),
          children: (t > 100 ? 100 : t).toFixed(2),
        });
      }
    },
    95453: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = a(3827),
        s = a(64090),
        i = a(51014),
        r = a(22169);
      let l = s.forwardRef((e, t) => {
        let {
          className: a,
          orientation: s = "horizontal",
          decorative: l = !0,
          ...d
        } = e;
        return (0, n.jsx)(i.f, {
          ref: t,
          decorative: l,
          orientation: s,
          className: (0, r.cn)(
            "shrink-0 bg-border",
            "horizontal" === s ? "h-[1px] w-full" : "h-full w-[1px]",
            a
          ),
          ...d,
        });
      });
      l.displayName = i.f.displayName;
    },
    46989: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(3827),
        s = a(8792),
        i = a(22169);
      function r(e) {
        let {
          onClick: t,
          children: a,
          icon: r,
          link: l,
          className: d,
          isLoading: u = !1,
          disabled: c = !1,
          target: p,
        } = e;
        return (0, n.jsxs)(s.default, {
          onClick: (e) => {
            !c && t && t(e);
          },
          href: null != l ? l : "#",
          target: p,
          className: (0, i.cn)(
            "inline-flex items-center rounded-lg border-l border-r bg-taolime px-3 py-2 text-center text-deepblue transition-all duration-200",
            d,
            u && "cursor-not-allowed",
            c && "cursor-not-allowed",
            u || c ? "bg-opacity-60" : "bg-opacity-100"
          ),
          children: [
            (0, n.jsx)("div", {
              className: "absolute m-auto h-6 w-6",
              children: (0, n.jsx)("div", { children: r }),
            }),
            (0, n.jsxs)("div", {
              className:
                "flex flex-1 items-center justify-center text-center align-middle",
              children: [
                u &&
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
                !u && (0, n.jsx)(n.Fragment, { children: a }),
              ],
            }),
          ],
        });
      }
    },
    92478: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return T;
        },
      });
      var n = a(3827),
        s = a(20703),
        i = {
          src: "/_next/static/media/dai.f8dd2972.svg",
          height: 444,
          width: 444,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = {
          src: "/_next/static/media/eth.2dfd930c.svg",
          height: 16,
          width: 10,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
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
        u = {
          src: "/_next/static/media/matic.03da1542.svg",
          height: 500,
          width: 500,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/metamask.c811def1.svg",
          height: 25,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/_next/static/media/paxg.5f54bf2e.svg",
          height: 68,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/qnt.2bad5579.svg",
          height: 489,
          width: 451,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: "/_next/static/media/ram.294f72e2.png",
          height: 64,
          width: 64,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUnJykICQwRERVMaXEKCg54eX0JCg0XGBtgYGUSEhYEBQgqKy+Xl5tGR0uwr7NiYmeh+Ll5AAAACnRSTlMr964A6vqs/vqzOMrY3AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwVykESABAMA8CkRUmL///W2PPCscgFB5oi1ADTrJoyMCuzkuA90rnE2F3qe/ws/eww0uAPOr8BmyykLykAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        y = {
          src: "/_next/static/media/stTAO.817fd950.png",
          height: 250,
          width: 250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEXZ2dnY2Nja2tpMaXHY2NgODg6YmJiIiIg2NjbJyclBQUFcXFxQUFCsrKxPhx12AAAABHRSTlPzsikApdxqRgAAAAlwSFlzAAAD6AAAA+gBtXtSawAAADZJREFUeJw1y7kBwDAMA7ETTUp2nv3XTRX0YKmgtBDuNqJ8kuMCvzNjwNlPDOXsOy5EX9OIv38hAQDv9krtqwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "/_next/static/media/sushi.ce7782ae.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        h = {
          src: "/gold.png",
          height: 25,
          width: 26,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX////////////////////////////////////////////////+/v7////////////7RkDRAAAAD3RSTlO+ClVu5PepgZnMIx2kQKuqi2odAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nE3GORKAMAwDQEm2yQXo/79lSJWtFg+2jubMSgvMuKEiWPFCnn8uyOuIdyY02DpHfCveAU61RDJ4AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        f = {
          src: "/_next/static/media/taousd-white.224b522d.svg",
          height: 26,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/tpad.143dded8.webp",
          height: 256,
          width: 256,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoIAAgAAkA4JaQADrK98AL+8ndQAP79KbOoEn44pdfJEfffEmOeKV8kUsj32w6YxXw+H10UY3plcOlS9NJ8KCAAAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/uniswap.25e4c1ac.svg",
          height: 194,
          width: 168,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: "/_next/static/media/usdc.23c35c78.svg",
          height: 16,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/usdt.dcef1ab2.svg",
          height: 295,
          width: 339,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = {
          src: "/_next/static/media/wquil.093b6125.png",
          height: 250,
          width: 250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXH+Owv/C2X/ooD/TgH+Hjb/Iw//Q0v/AE3/ncj4zMr/AnD9mr3/tqX7YGb7fW37QHL/AAD/SgL6ikn/TQL9DlP6X379CnX6r7n9OkP/cW7/Z43/Y6/5lJn/gkb/gED6fJzMfZPTAAAAGnRSTlMArqX+Z6diBVz++aH+/v37/AmrrbH7+6f7+3j9kvUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEHAoAgDASwY7Zs3Iqg/v+VJgDxIZkAhO7cbQjcY61nswhu+/KVBGTcxyhqBt8+F/9owLSk3oUAsmLVE35zbwM1HOpI2wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        j = {
          src: "/_next/static/media/wtao.74558e0c.svg",
          height: 256,
          width: 256,
          blurWidth: 0,
          blurHeight: 0,
        };
      function T(e) {
        let { symbol: t, width: a = 24, height: T = 24, invert: N = !1 } = e,
          k = {
            QNT: o,
            USDC: b,
            USDT: A,
            DAI: i,
            SUSHI: x,
            UNI: g,
            PAXG: p,
            LINK: d,
            WETH: r,
            "USDC.e": b,
            MATIC: u,
            WMATIC: u,
            "WETH.e": r,
            "DAI.e": i,
            "USDT.e": A,
            ALTA: f,
            ALTA: h,
            metamask: c,
            wTAO: j,
            WTAO: j,
            camelot: l,
            TPAD: w,
            RAM: m,
            WQUIL: v,
            stTAO: y,
            STTAO: y,
          };
        return t && k[t]
          ? (0, n.jsx)(s.default, {
              src: k[t],
              alt: t,
              width: a,
              height: T,
              className: "".concat(!0 === N ? "invert" : ""),
            })
          : null;
      }
    },
    57180: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = a(43089),
        s = a(14980);
      function i() {
        let e = (0, n.useChainId)(),
          t = e;
        return e in s.mb || (t = 42161), t;
      }
    },
    22169: function (e, t, a) {
      "use strict";
      a.d(t, {
        G: function () {
          return d;
        },
        cn: function () {
          return r;
        },
        s: function () {
          return l;
        },
      });
      var n = a(75504),
        s = a(51367),
        i = a(14980);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.m6)((0, n.W)(t));
      }
      function l(e) {
        return "".concat(e.slice(0, 6), "...").concat(e.slice(-4));
      }
      function d(e, t) {
        var a;
        let n = null !== (a = i.gb[e]) && void 0 !== a ? a : i.gb[1];
        return "".concat(n).concat(t);
      }
    },
    54490: function (e, t) {
      "use strict";
      t.Z = {
        src: "/gold.png",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    51014: function (e, t, a) {
      "use strict";
      a.d(t, {
        f: function () {
          return c;
        },
      });
      var n = a(14749),
        s = a(64090),
        i = a(29586);
      let r = "horizontal",
        l = ["horizontal", "vertical"],
        d = (0, s.forwardRef)((e, t) => {
          let { decorative: a, orientation: l = r, ...d } = e,
            c = u(l) ? l : r;
          return (0, s.createElement)(
            i.WV.div,
            (0, n.Z)(
              { "data-orientation": c },
              a
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === c ? c : void 0,
                    role: "separator",
                  },
              d,
              { ref: t }
            )
          );
        });
      function u(e) {
        return l.includes(e);
      }
      d.propTypes = {
        orientation(e, t, a) {
          let n = e[t],
            s = String(n);
          return n && !u(n)
            ? Error(
                "Invalid prop `orientation` of value `"
                  .concat(s, "` supplied to `")
                  .concat(
                    a,
                    "`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `"
                  )
                  .concat(r, "`.")
              )
            : null;
        },
      };
      let c = d;
    },
    27089: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldDepositFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newDepositFee","type":"uint256"}],"name":"DepositFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldFeeRecipient","type":"address"},{"indexed":false,"internalType":"address","name":"newFeeRecipient","type":"address"}],"name":"FeeRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"strategist","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"rewardsToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldStrategist","type":"address"},{"indexed":false,"internalType":"address","name":"newStrategist","type":"address"}],"name":"StrategistUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldWithdrawFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newWithdrawFee","type":"uint256"}],"name":"WithdrawFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"withdrawRequestId","type":"uint256"},{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawRequestCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"withdrawRequestId","type":"uint256"},{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawRequestProcessed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_rewardsDistributor","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableToInvestTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"availableToWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"availableToWithdrawTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getStakerWithdrawRequestAt","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"internalType":"struct StakingQueue.WithdrawRequest","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getStakerWithdrawRequests","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"internalType":"struct StakingQueue.WithdrawRequest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getStakerWithdrawRequestsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWithdrawQueueAt","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"internalType":"struct StakingQueue.WithdrawRequest","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWithdrawQueueLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"}],"name":"processWithdrawRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_requestIds","type":"uint256[]"}],"name":"processWithdrawRequests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"requestWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"requestWithdrawTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardData","outputs":[{"internalType":"address","name":"rewardsDistributor","type":"address"},{"internalType":"uint256","name":"rewardsDuration","type":"uint256"},{"internalType":"uint256","name":"periodFinish","type":"uint256"},{"internalType":"uint256","name":"rewardRate","type":"uint256"},{"internalType":"uint256","name":"lastUpdateTime","type":"uint256"},{"internalType":"uint256","name":"rewardPerTokenStored","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeRecipient","type":"address"}],"name":"setFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_rewardsDistributor","type":"address"}],"name":"setRewardsDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"setRewardsDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_strategist","type":"address"}],"name":"setStrategist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawQueue","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawRequestsIdsByStaker","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
      );
    },
  },
]);
