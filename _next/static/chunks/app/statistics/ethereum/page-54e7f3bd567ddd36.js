(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [602],
  {
    19722: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 15616));
    },
    15616: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return w;
          },
        });
      var s = a(3827),
        l = a(64090),
        d = a(8792),
        i = a(30982),
        c = a(10035),
        r = a(69908),
        n = a(14980),
        o = a(72911),
        x = a(84098),
        m = a(22530),
        h = a(34508),
        u = a(37046),
        p = a(66114),
        f = a(17532),
        j = a(81674),
        y = a(52770),
        A = a(32543),
        N = a(61682);
      function w() {
        var e;
        let { statistics: t, isLoading: a } = (0, u.Z)(1),
          w = (0, x.Z)("MintableToken"),
          { cashBackPoolOverview: b, isLoading: v } = (0, m.Z)(1),
          { prices: g, isLoading: F } = (0, h.Z)(),
          Z = (0, p.s)(),
          S = (0, f.b)(),
          k = null !== (e = n.gQ[1]) && void 0 !== e ? e : n.gQ[1],
          { data: B } = (0, r.useReadContract)({
            abi: o,
            address: "0x".concat(k.split("x")[1]),
            chainId: 1,
            functionName: "totalSupply",
            query: { refetchIntervalInBackground: !1 },
          }),
          [E, T] = (0, l.useState)(0),
          [C, D] = (0, l.useState)(0);
        return ((0, l.useEffect)(() => {
          B &&
            t &&
            b &&
            g &&
            (T(
              parseFloat(b.totalTBANKStakedHuman) * Number(S) +
                (parseFloat(B.toString()) * Z) / 1e9 +
                parseFloat(t.tvl)
            ),
            D((parseFloat(B.toString()) * Z) / 1e9));
        }, [Z, t, g, b, B]),
        (0, r.useReadContract)({
          abi: c.Wo,
          address: w.address,
          chainId: 1,
          functionName: "totalSupply",
        }),
        a)
          ? (0, s.jsx)("div", {
              className:
                "container mt-20 items-center p-10 text-center text-sm",
              children: (0, s.jsx)(y.default, {}),
            })
          : (0, s.jsx)(i.NextIntlClientProvider, {
              locale: "en",
              children: (0, s.jsxs)("div", {
                className: "container items-center px-10 pb-10 pt-20 text-sm",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute left-0 top-[5.75rem] flex w-full flex-col items-center justify-center gap-6 py-1 text-center",
                    children: (0, s.jsx)("div", {
                      className:
                        "flex items-center justify-center      rounded-xl border-[0.5px] border-[#3FEAC1] border-opacity-20 bg-opacity-20 px-2 py-[4px] backdrop-blur-sm",
                      children: (0, s.jsx)(d.default, {
                        href: "/statistics/ethereum",
                        className:
                          "rounded-lg bg-white bg-opacity-[10%] px-2 py-[5px] text-[#BAF7E9] opacity-80",
                        children: "Ethereum",
                      }),
                    }),
                  }),
                  t &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ",
                          children: [
                            (0, s.jsxs)(A.Z, {
                              title: "Total TVL",
                              className: "text-[#BAF7E9]",
                              children: [
                                (0, s.jsx)(j.Z, { children: E || 3523839 }),
                                (0, s.jsx)("div", { className: "pb-4" }),
                              ],
                            }),
                            (0, s.jsx)(A.Z, {
                              title: "Staked wTAO",
                              className: "text-[#BAF7E9]",
                              children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-start ",
                                children: [
                                  (0, s.jsx)(j.Z, { children: C }),
                                  B
                                    ? (0, s.jsxs)("span", {
                                        className: "text-sm opacity-70",
                                        children: [
                                          (
                                            parseFloat(B.toString()) / 1e9
                                          ).toLocaleString("en-US", {
                                            maximumFractionDigits: 18,
                                          }),
                                          " ",
                                          "BEYOND",
                                        ],
                                      })
                                    : "",
                                ],
                              }),
                            }),
                            (0, s.jsxs)(A.Z, {
                              title: "Staked BEYOND",
                              className: "text-[#BAF7E9]",
                              children: [
                                (0, s.jsx)(j.Z, {
                                  children: t.tusdInStabilityPool,
                                }),
                                (0, s.jsx)("div", { className: "pb-4" }),
                              ],
                            }),
                            (0, s.jsxs)(A.Z, {
                              title: "Total Protocol Fees",
                              className: "text-[#BAF7E9]",
                              children: [
                                (0, s.jsx)(j.Z, {
                                  children: t.totalProtocolFees,
                                }),
                                (0, s.jsx)("div", { className: "pb-4" }),
                              ],
                            }),
                            (0, s.jsx)(A.Z, {
                              title: "Vaults Created",
                              className: "text-[#BAF7E9]",
                              children: t.totalVaultsCreated,
                            }),
                            (0, s.jsx)(A.Z, {
                              title: "Avg Collateral Per Vault",
                              className: "text-[#BAF7E9]",
                              children: (0, s.jsx)(j.Z, {
                                children: t.avgCollateralPerVault,
                              }),
                            }),
                            (0, s.jsx)(A.Z, {
                              title: "Avg Debt Per Vault",
                              className: "text-[#BAF7E9]",
                              children: (0, s.jsx)(j.Z, {
                                children: t.avgDebtPerVault,
                              }),
                            }),
                            (0, s.jsx)(A.Z, {
                              title: "Backing per BEYOND",
                              className: "text-[#BAF7E9]",
                              children: (0, s.jsx)(j.Z, {
                                children: t.collateralBackingPerTusd,
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)(A.Z, {
                          title: "Rewards History",
                          className: "mt-8 w-full",
                          children: (0, s.jsx)(N.Z, {}),
                        }),
                      ],
                    }),
                ],
              }),
            });
      }
    },
    61682: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(3827);
      function l() {
        let e = [
          { epoch: 1, date: "19.05.2024", yield: 3.19933900000001 },
          { epoch: 2, date: "29.05.2024", yield: 11.6156446299997 },
          { epoch: 3, date: "08.06.2024", yield: 12.235449 },
          { epoch: 4, date: "18.06.2024", yield: 13.755576 },
          { epoch: 5, date: "28.06.2024", yield: 11.332985 },
          { epoch: 6, date: "08.07.2024", yield: 5.880692 },
          { epoch: 7, date: "18.07.2024", yield: 23.282729 },
          { epoch: 8, date: "28.07.2024", yield: 13.093386 },
          { epoch: 9, date: "07.08.2024", yield: 12.390195 },
          { epoch: 10, date: "17.08.2024", yield: 12.239349 },
          { epoch: 11, date: "27.08.2024", yield: 11.43624 },
          { epoch: 12, date: "06.09.2024", yield: 14.41426 },
          { epoch: 13, date: "16.09.2024", yield: 12.64516 },
          { epoch: 14, date: "26.09.2024", yield: 16.32426 },
          { epoch: 15, date: "06.10.2024", yield: 15.14567 },
          { epoch: 16, date: "16.10.2024", yield: 14.84567 },
          { epoch: 17, date: "26.10.2024", yield: 14.39124 },
          { epoch: 18, date: "05.11.2024", yield: 13.15124 },
          { epoch: 19, date: "15.11.2024", yield: 14.14124 },
          { epoch: 20, date: "25.11.2024", yield: 15.66912 },
          { epoch: 21, date: "05.12.2024", yield: 16.13412 },
          { epoch: 22, date: "15.12.2024", yield: 16.10412 },
          { epoch: 23, date: "25.12.2024", yield: 12.32342 },
          { epoch: 24, date: "04.01.2025", yield: 8.59841 },
        ];
        return (0, s.jsxs)("div", {
          className:
            "flex w-full flex-col items-center justify-center pb-2 pt-2 text-[#d0fff4]",
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-center rounded-t-lg bg-taolime bg-opacity-30 py-2 pl-4 pr-4 text-base",
              children: [
                (0, s.jsx)("div", {
                  className: "w-1/3 text-start md:w-1/5",
                  children: "Epoch",
                }),
                (0, s.jsx)("div", {
                  className: "w-1/3 text-center md:w-1/5 md:text-start",
                  children: "Distribution Date",
                }),
                (0, s.jsx)("div", {
                  className: "w-1/3 text-center md:w-1/5 md:text-start",
                  children: "Period Yield (WTAO)",
                }),
                (0, s.jsx)("div", {
                  className: "hidden w-1/3 text-start md:flex md:w-1/5",
                  children: "To WTAO Stakers (WTAO)",
                }),
                (0, s.jsx)("div", {
                  className: "hidden w-1/3 text-start md:flex md:w-1/5",
                  children: "To BEYOND Stakers (WTAO)",
                }),
              ],
            }),
            e.map((t, a) =>
              (0, s.jsxs)(
                "div",
                {
                  className:
                    "flex w-full flex-row items-center justify-center bg-opacity-10 py-2 pl-4 text-base " +
                    (a % 2 == 1 ? "bg-taolime " : "") +
                    (a === e.length - 1 ? "rounded-b-lg" : ""),
                  children: [
                    (0, s.jsx)("div", {
                      className: "w-1/3 text-start md:w-1/5",
                      children: t.epoch,
                    }),
                    (0, s.jsx)("div", {
                      className: "w-1/3 text-center md:w-1/5 md:text-start",
                      children: t.date,
                    }),
                    (0, s.jsx)("div", {
                      className: "w-1/3 text-center md:w-1/5 md:text-start",
                      children: t.yield.toFixed(2),
                    }),
                    (0, s.jsx)("div", {
                      className: "hidden w-1/5 text-start md:flex",
                      children: (0.8 * t.yield).toFixed(2),
                    }),
                    (0, s.jsx)("div", {
                      className: "hidden w-1/5 text-start md:flex",
                      children: (0.2 * t.yield).toFixed(2),
                    }),
                  ],
                },
                a
              )
            ),
            (0, s.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-center bg-opacity-10 py-2 pl-4 text-base",
              children: [
                (0, s.jsx)("div", {
                  className: "w-1/3 text-start md:w-1/5",
                  children: "Total",
                }),
                (0, s.jsx)("div", {
                  className: "w-1/3 text-center md:w-1/5 md:text-start",
                }),
                (0, s.jsx)("div", {
                  className: "w-1/3 text-center md:w-1/5 md:text-start",
                  children: e.reduce((e, t) => e + t.yield, 0).toFixed(2),
                }),
                (0, s.jsx)("div", {
                  className: "hidden w-1/5 text-start md:flex",
                  children: e.reduce((e, t) => e + 0.8 * t.yield, 0).toFixed(2),
                }),
                (0, s.jsx)("div", {
                  className: "hidden w-1/5 text-start md:flex",
                  children: e
                    .reduce((e, t) => e + 0.2 * t.yield + 0.5, 0)
                    .toFixed(2),
                }),
              ],
            }),
          ],
        });
      }
    },
    52770: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return c;
          },
        });
      var s = a(3827),
        l = a(20703),
        d = {
          src: "/_next/static/media/loader.75ae4779.webp",
          height: 355,
          width: 354,
          blurDataURL:
            "data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC4AAAABN0AmbYubnYuICDsoattIVhQNgmkZzF7/1SJYCBPR/0h1XJc+WPAE44DlUqoDVlA4IDwAAADQAQCdASoIAAgAAkA4JYwAD4lu0nokHAD++Rj7UpiLsfF2Lz7ecRkajx7UcbI3Ck/H3QK5vRUswq7mAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        i = a(25587);
      function c() {
        return (0, s.jsx)("div", {
          className:
            "absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2",
          children: (0, s.jsx)(i.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, rotate: 360 },
            transition: { duration: 1, repeat: 1 / 0, repeatType: "loop" },
            layout: !0,
            className: "",
            children: (0, s.jsx)(l.default, {
              src: d,
              alt: "",
              className: "     grayscale     ",
            }),
          }),
        });
      }
    },
    84098: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var s = a(64090),
        l = a(78065);
      function d(e) {
        let t = (0, l.Z)(),
          [a, d] = (0, s.useState)(void 0),
          [i, c] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            fetch("".concat(t, "/abi/").concat(e))
              .then((e) => e.json())
              .then(async (e) => {
                c(!1), d(e);
              });
          }, [t, e]),
          { ...a, isLoading: i }
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [3877, 2644, 6054, 703, 982, 857, 5587, 4980, 2115, 2971, 8069, 1744],
      function () {
        return e((e.s = 19722));
      }
    ),
      (_N_E = e.O());
  },
]);
