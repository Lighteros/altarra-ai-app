(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3134],
  {
    22424: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 65142));
    },
    65142: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return U;
          },
        });
      var a = s(3827),
        i = s(64090),
        n = s(30982),
        r = s(8792),
        l = s(52926),
        d = s(72450),
        c = s(39296),
        o = s(84098),
        x = s(57180),
        u = s(43089),
        f = s(78065),
        m = s(39617);
      function h() {
        var e, t;
        let s =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "0x",
          { address: a } = (0, c.useAccount)(),
          i = (0, o.Z)("StabilityPool"),
          n = (0, x.Z)(),
          r = (0, m.useReadContracts)({
            contracts: [
              {
                abi: null == i ? void 0 : i.abi,
                address: null == i ? void 0 : i.address,
                functionName: "deposits",
                args: ["0x" !== s ? s : null != a ? a : "0x"],
                chainId: n,
              },
              {
                abi: null == i ? void 0 : i.abi,
                address: null == i ? void 0 : i.address,
                functionName: "getDepositorTBANKGain",
                args: ["0x" !== s ? s : null != a ? a : "0x"],
                chainId: n,
              },
            ],
            query: { refetchInterval: 5e3, refetchIntervalInBackground: !0 },
          });
        return {
          stake: null === (e = r.data) || void 0 === e ? void 0 : e[0].result,
          rewards: null === (t = r.data) || void 0 === t ? void 0 : t[1].result,
          isLoading: r.isLoading,
        };
      }
      var v = s(36612),
        p = s(60332),
        j = s(97787),
        b = s(32543),
        N = s(46989),
        g = s(92478),
        w = s(20703),
        y = {
          src: "/_next/static/media/tao-balance.876d88c3.svg",
          height: 16,
          width: 18,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = s(54490),
        Z = s(20073),
        k = s(60989),
        E = s(10035),
        A = s(14980),
        S = s(22009),
        I = s(87378),
        C = s(22782);
      function F(e, t) {
        null !== e.current && (e.current.value = t);
      }
      function T(e) {
        let { className: t } = e,
          s = (0, o.Z)("StabilityPool"),
          n = (0, x.Z)(),
          r = (0, i.useRef)(null),
          c = (0, i.useRef)(null),
          [u, f] = (0, i.useState)(void 0),
          {
            data: m,
            writeContract: T,
            isPending: K,
          } = (0, d.useWriteContract)(),
          U = (0, o.Z)("MintableToken"),
          { stake: D } = h(),
          [q, O] = (0, i.useState)("Confirm"),
          [R, _] = (0, i.useState)(!1),
          [W, L] = (0, i.useState)(!1),
          [P, H] = (0, i.useState)(void 0),
          [z, M] = (0, i.useState)(void 0),
          [V, G] = (0, i.useState)(BigInt(0)),
          { balance: Y, decimals: $, symbol: J } = (0, S.Z)(z),
          { isApproved: Q } = (0, I.Z)(
            z,
            s.address,
            (0, Z.v)(null != u ? u : "0", null != $ ? $ : 18)
          );
        (0, i.useEffect)(() => {
          M(U.address);
        }, [U]),
          (0, i.useEffect)(() => {
            void 0 !== m && H(m);
          }, [m]),
          (0, i.useEffect)(() => {
            R || Q || void 0 === z || z.toLowerCase() === A.EO[n].toLowerCase()
              ? R
                ? W
                  ? O("Confirm")
                  : O("Withdraw")
                : O("Stake")
              : void 0 !== u && "" !== u
              ? O("Approve")
              : O("Select action");
          }, [Q, R, z, A.EO, n]);
        let X = (0, l.d)(D && D > 0 ? D : BigInt(0));
        return (
          (0, i.useEffect)(() => {
            D && G(D);
          }, [D, P]),
          (0, a.jsxs)("div", {
            className: "flex w-full flex-col items-center gap-4 md:w-[50%]",
            children: [
              (0, a.jsxs)(b.Z, {
                title: "",
                className: "mt-4 w-full sm:mt-0",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "flex w-fit flex-row items-center justify-between rounded-full border-[1px] border-[#BAF7E9] border-opacity-20 px-2 ",
                    children: (0, a.jsx)(w.default, {
                      src: B.Z,
                      alt: "ramses-new",
                      width: 25,
                      height: 25,
                      className: "rounded-xl pb-2 pt-2 invert",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "py-2 text-xl text-[#BAF7E9]",
                    children: "Stake/Unstake",
                  }),
                  (0, a.jsxs)("div", {
                    className: "mb-4 text-pretty text-xs text-[#BAF7E9]",
                    children: [
                      "Stake ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: "ALTARRA",
                      }),
                      " to protect the protocol via automated liquidations and earn rewards in",
                      " ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: " ALTARRA ",
                      }),
                    ],
                  }),
                  (0, a.jsx)(p.Z, {}),
                  (0, a.jsx)("div", {
                    className: "mb-2 text-pretty text-xs text-muted-foreground",
                    children: (0, a.jsx)(N.Z, {
                      link: "https://app.camelot.exchange/?token2=0x966570A84709D693463CDD69dCadb0121b2C9d26",
                      children: (0, a.jsxs)("div", {
                        className:
                          "flex items-center space-x-1 pr-2 font-semibold",
                        children: [
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(g.Z, {
                              symbol: "ALTARRA",
                              invert: !0,
                            }),
                          }),
                          (0, a.jsx)("div", { children: "Buy ALTARRA" }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "mb-4 text-pretty text-xs text-[#BAF7E9] opacity-60",
                    children: [
                      "*Stake/Unstake will automatically claim any pending",
                      " ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: " ALTARRA ",
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)(b.Z, {
                className: "w-full",
                children: [
                  (0, a.jsx)("div", {
                    className: "py-2 text-xl text-[#BAF7E9]",
                    children: "Stake",
                  }),
                  (0, a.jsxs)("div", {
                    className: "mb-4 text-pretty text-xs text-[#BAF7E9]",
                    children: [
                      "Stake ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: "ALTARRA",
                      }),
                      " to protect the protocol via automated liquidations and earn rewards in",
                      " ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: " ALTARRA ",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full flex-row items-center justify-between pr-4",
                    children: [
                      (0, a.jsx)(C.I, {
                        type: "number",
                        name: "stakeAdd",
                        min: "0",
                        placeholder: "Enter the amount",
                        className:
                          "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                        disabled: void 0 === z || R,
                        ref: r,
                        onChange: (e) => {
                          "" === e.target.value ? L(!1) : L(!0),
                            f(e.target.value);
                        },
                      }),
                      (0, a.jsx)("div", {
                        className: "",
                        children:
                          void 0 !== Y &&
                          (0, a.jsxs)("div", {
                            className:
                              "flex cursor-pointer items-center px-4 text-base transition-all duration-200 ease-in  hover:opacity-50",
                            onClick: () => {
                              var e;
                              F(
                                r,
                                (0, k.b)(
                                  null != Y ? Y : BigInt(0),
                                  null != $ ? $ : 18
                                )
                              ),
                                f(
                                  null === (e = r.current) || void 0 === e
                                    ? void 0
                                    : e.value
                                ),
                                null !== r.current &&
                                  (_(!1),
                                  r.current.focus(),
                                  null !== c.current &&
                                    ((c.current.value = ""), L(!0)));
                            },
                            children: [
                              (0, a.jsx)(w.default, {
                                src: y,
                                alt: "",
                                className: "pr-2",
                                width: 30,
                                height: 30,
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-row items-center gap-1 text-sm text-[#BAF7E9]",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "",
                                    children: " Balance: ",
                                  }),
                                  (0, a.jsxs)("code", {
                                    children: [
                                      (0, a.jsx)(v.Z, {
                                        children: (0, k.b)(
                                          null != Y ? Y : BigInt(0),
                                          null != $ ? $ : 18
                                        ),
                                      }),
                                      " ",
                                    ],
                                  }),
                                  J,
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(p.Z, { className: "mt-4" }),
                  (0, a.jsx)("div", {
                    className:
                      "mb-2 text-pretty pt-0 text-xs text-muted-foreground",
                    children: (0, a.jsx)(N.Z, {
                      isLoading: !0 === K,
                      className: "flex w-fit items-center px-2",
                      disabled: void 0 !== P,
                      onClick: () => {
                        s.abi &&
                          s.address &&
                          $ &&
                          (R &&
                            u &&
                            z &&
                            T({
                              abi: s.abi,
                              address: s.address,
                              chainId: n,
                              functionName: "withdraw",
                              args: [(0, Z.v)(u, $)],
                            }),
                          W &&
                            u &&
                            z &&
                            (Q
                              ? T({
                                  abi: s.abi,
                                  address: s.address,
                                  chainId: n,
                                  functionName: "deposit",
                                  args: [(0, Z.v)(u, $)],
                                })
                              : T({
                                  abi: E.Wo,
                                  address: z,
                                  chainId: n,
                                  functionName: "approve",
                                  args: [s.address, A.Uf],
                                })));
                      },
                      children: (0, a.jsx)("div", {
                        className:
                          "flex items-center space-x-1 px-4 py-0 text-sm font-semibold",
                        children: (0, a.jsx)("div", {
                          children: "Start Stake",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)(b.Z, {
                className: "w-full",
                children: [
                  (0, a.jsx)("div", {
                    className: "py-2 text-xl text-[#BAF7E9]",
                    children: "Unstake",
                  }),
                  (0, a.jsxs)("div", {
                    className: "mb-4 text-pretty text-xs text-[#BAF7E9]",
                    children: [
                      "Stake ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: "ALTARRA",
                      }),
                      " to protect the protocol via automated liquidations and earn rewards in",
                      " ",
                      (0, a.jsx)("span", {
                        className: "text-taolime",
                        children: " ALTARRA ",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "flex w-full flex-row items-center justify-between pr-4",
                    children: [
                      (0, a.jsx)(C.I, {
                        type: "number",
                        name: "stakeRemove",
                        min: "0",
                        placeholder: "Enter the amount",
                        className:
                          "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                        disabled: void 0 === z || W,
                        ref: c,
                        onChange: (e) => {
                          "" === e.target.value ? _(!1) : _(!0),
                            f(e.target.value);
                        },
                      }),
                      (0, a.jsx)("div", {
                        className: "pl-4 ",
                        children:
                          void 0 !== Y &&
                          (0, a.jsxs)("div", {
                            className:
                              "flex cursor-pointer items-center space-x-2 text-foreground transition-all duration-200 ease-in hover:opacity-50",
                            onClick: () => {
                              var e;
                              F(c, X),
                                f(
                                  null === (e = c.current) || void 0 === e
                                    ? void 0
                                    : e.value
                                ),
                                null !== c.current &&
                                  (L(!1),
                                  c.current.focus(),
                                  null !== r.current &&
                                    ((r.current.value = ""), _(!0)));
                            },
                            children: [
                              (0, a.jsx)(w.default, { src: y, alt: "" }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex w-[13rem] flex-row items-center gap-1 text-sm text-[#BAF7E9]",
                                children: [
                                  "Staked Balance:",
                                  (0, a.jsx)("code", {
                                    children: (0, a.jsx)(v.Z, { children: X }),
                                  }),
                                  J,
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(p.Z, { className: "mt-4" }),
                  (0, a.jsxs)("div", {
                    className:
                      "mb-2 text-pretty pt-0 text-xs text-muted-foreground",
                    children: [
                      (0, a.jsx)(N.Z, {
                        isLoading: !0 === K,
                        className: "flex w-fit items-center px-2",
                        disabled: void 0 !== P,
                        onClick: () => {
                          s.abi &&
                            s.address &&
                            $ &&
                            (R &&
                              u &&
                              z &&
                              T({
                                abi: s.abi,
                                address: s.address,
                                chainId: n,
                                functionName: "withdraw",
                                args: [(0, Z.v)(u, $)],
                              }),
                            W &&
                              u &&
                              z &&
                              (Q
                                ? T({
                                    abi: s.abi,
                                    address: s.address,
                                    chainId: n,
                                    functionName: "deposit",
                                    args: [(0, Z.v)(u, $)],
                                  })
                                : T({
                                    abi: E.Wo,
                                    address: z,
                                    chainId: n,
                                    functionName: "approve",
                                    args: [s.address, A.Uf],
                                  })));
                        },
                        children: (0, a.jsx)("div", {
                          className:
                            "flex items-center space-x-1 px-4 py-0 text-sm font-semibold",
                          children: (0, a.jsx)("div", { children: "Unstake" }),
                        }),
                      }),
                      P &&
                        (0, a.jsx)(j.Z, {
                          open: !0,
                          hash: P,
                          onOpenChange: () => {
                            H(void 0);
                          },
                        }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      function K() {
        var e, t;
        let s = (function () {
            let e = (0, f.Z)(),
              t = (0, u.useChainId)(),
              { address: s } = (0, c.useAccount)(),
              [a, n] = (0, i.useState)(void 0);
            return (
              (0, i.useEffect)(() => {
                fetch("".concat(e, "/stability_pool/overview"))
                  .then((e) => e.json())
                  .then((e) => n(e));
              }, [e, s, t]),
              { stabilityPoolOverview: a, isLoading: !a }
            );
          })(),
          { isLoading: n, stake: m, rewards: w } = h(),
          {
            data: y,
            writeContract: B,
            isPending: Z,
          } = (0, d.useWriteContract)(),
          [k, E] = (0, i.useState)(void 0),
          A = (0, o.Z)("StabilityPool"),
          { address: S } = (0, c.useAccount)(),
          I = (0, x.Z)();
        return (
          (0, i.useEffect)(() => {
            void 0 !== y && E(y);
          }, [y]),
          (0, a.jsxs)("div", {
            className:
              "flex w-full flex-col items-center justify-between md:flex-row md:items-start md:space-x-2 lg:space-x-4",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute left-0 top-[5.75rem] flex w-full flex-col items-center justify-center gap-6 py-1 text-center",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex items-center justify-center      rounded-xl border-[0.5px] border-[#3FEAC1] border-opacity-20 bg-opacity-20 px-2 py-[4px] backdrop-blur-sm",
                  children: [
                    (0, a.jsx)(r.default, {
                      href: "/staking/tao",
                      className:
                        "rounded-lg bg-white bg-opacity-[10%] px-2 py-[5px] text-[#BAF7E9] opacity-80",
                      children: "Stake ALTARRA",
                    }),
                    (0, a.jsx)(r.default, {
                      href: "/staking/tbank",
                      className: "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                      children: "Stake ALTARRA",
                    }),
                    (0, a.jsx)(r.default, {
                      href: "/staking/wtao",
                      className: "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                      children: "Stake ALTARRA",
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(T, {}),
              (0, a.jsxs)("div", {
                className:
                  "flex w-full flex-col items-center justify-start gap-4 pt-4 text-base md:w-1/2 md:pt-0",
                children: [
                  (0, a.jsx)(b.Z, {
                    className: "w-full",
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex w-full flex-row items-center justify-between py-1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col items-start",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-xl text-[#BAF7E9]",
                              children: "Statistics",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "text-pretty text-xs text-[#BAF7E9] opacity-60",
                              children: "Track your stats in easiest way",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex flex-col items-start justify-between text-[#BAF7E9]",
                          children: [
                            (0, a.jsx)("div", {
                              className: "text-sm opacity-60",
                              children: "Est. APR",
                            }),
                            (0, a.jsxs)("div", {
                              children: [I && 1 == I ? "10.16" : "8.94", "%"],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)(b.Z, {
                    title: "",
                    className: "w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "mt-4 flex flex-wrap items-center justify-between space-x-4 text-base text-[#BAF7E9]",
                        children: [
                          (0, a.jsx)("div", {
                            children: "Total ALTARRA Staked",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(v.Z, {
                                  children:
                                    null === (e = s.stabilityPoolOverview) ||
                                    void 0 === e
                                      ? void 0
                                      : e.totalTusdStakedHuman,
                                }),
                              }),
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(g.Z, { symbol: "ALTARRA" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(p.Z, { className: "mt-4" }),
                      (0, a.jsxs)("div", {
                        className:
                          "mt-4 flex flex-wrap items-center justify-between space-x-4 text-base text-[#BAF7E9]",
                        children: [
                          (0, a.jsx)("div", {
                            children: "Total PIN Rewards",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(v.Z, {
                                  children:
                                    null === (t = s.stabilityPoolOverview) ||
                                    void 0 === t
                                      ? void 0
                                      : t.totalTBANKRewardsHuman,
                                }),
                              }),
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(g.Z, { symbol: "ALTARRA" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(p.Z, { className: "mt-4" }),
                      (0, a.jsx)("div", {
                        className:
                          "mt-4 flex flex-wrap items-center justify-between space-x-4 text-base font-semibold text-[#BAF7E9]",
                        children: "Your Position",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "mt-4 flex flex-wrap items-center justify-between pb-2 text-base text-[#BAF7E9] md:space-x-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "text-muted-foreground",
                                children: "Staked ALTARRA:",
                              }),
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(v.Z, {
                                  children: (0, l.d)(null != m ? m : BigInt(0)),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(g.Z, { symbol: "ALTARRA" }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex space-x-2",
                            children: [
                              (0, a.jsx)("div", {
                                className: "text-muted-foreground",
                                children: "Rewards:",
                              }),
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(v.Z, {
                                  children: (0, l.d)(null != w ? w : BigInt(0)),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)(g.Z, { symbol: "ALTARRA" }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex space-x-4 text-sm",
                            children: [
                              (0, a.jsx)(N.Z, {
                                isLoading: !0 === Z,
                                className: "flex flex-1 font-semibold",
                                disabled: void 0 !== k || w === BigInt(0),
                                onClick: () => {
                                  A.abi &&
                                    A.address &&
                                    B({
                                      abi: A.abi,
                                      address: A.address,
                                      chainId: I,
                                      functionName: "redeemReward",
                                    });
                                },
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsx)(g.Z, {
                                        symbol: "ALTARRA",
                                        invert: !0,
                                      }),
                                    }),
                                    (0, a.jsx)("div", { children: "Harvest" }),
                                  ],
                                }),
                              }),
                              k &&
                                (0, a.jsx)(j.Z, {
                                  open: !0,
                                  hash: k,
                                  onOpenChange: () => {
                                    E(void 0);
                                  },
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
          })
        );
      }
      function U() {
        return (0, a.jsx)(n.NextIntlClientProvider, {
          locale: "en",
          children: (0, a.jsx)("div", {
            className: "container items-center pb-10 pt-16 text-center text-sm",
            children: (0, a.jsx)("div", {
              className:
                "mt-4 text-left text-sm transition-all duration-200 ease-in-out",
              children: (0, a.jsx)(K, {}),
            }),
          }),
        });
      }
    },
    60332: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = s(3827),
        i = s(22169),
        n = s(95453);
      function r(e) {
        let { className: t = "" } = e;
        return (0, a.jsx)(n.Z, {
          className: (0, i.cn)(
            t,
            "to-taolime mb-4 bg-gradient-to-l from-transparent opacity-30"
          ),
        });
      }
    },
    22782: function (e, t, s) {
      "use strict";
      s.d(t, {
        I: function () {
          return r;
        },
      });
      var a = s(3827),
        i = s(64090),
        n = s(22169);
      let r = i.forwardRef((e, t) => {
        let { className: s, type: i, ...r } = e;
        return (0, a.jsx)("input", {
          type: i,
          className: (0, n.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...r,
        });
      });
      r.displayName = "Input";
    },
    97787: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return x;
        },
      });
      var a = s(3827),
        i = s(8792),
        n = s(80037),
        r = s(22169),
        l = s(57180),
        d = s(9208),
        c = s(17247),
        o = s(68575);
      function x(e) {
        let { hash: t, open: s, onOpenChange: x, children: u } = e,
          f = (0, l.Z)();
        return (0, a.jsx)(d.Vq, {
          defaultOpen: s,
          onOpenChange: x,
          children: (0, a.jsx)(d.cZ, {
            className: "sm:max-w-[425px]",
            children: (0, a.jsxs)(d.fK, {
              children: [
                (0, a.jsx)(d.$N, { children: "Transaction in progress..." }),
                (0, a.jsxs)("div", {
                  className: "mt-4 text-sm text-muted-foreground",
                  children: [
                    (0, a.jsx)(o.Z, {
                      txHash: t,
                      status: "success",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, a.jsx)("div", {
                            children: "Your transaction has been processed.",
                          }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(n.Z, {
                              className: "text-green-500",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(i.default, {
                              href: (0, r.G)(f, null != t ? t : ""),
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "text-lime-500 transition-all duration-200 ease-in-out hover:underline",
                              children: "View on block explorer",
                            }),
                          }),
                          (0, a.jsx)("div", { children: u }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(o.Z, {
                      txHash: t,
                      status: "pending",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, a.jsx)("div", {
                            children: "Your transaction is being processed.",
                          }),
                          (0, a.jsx)("div", { children: (0, a.jsx)(c.Z, {}) }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(i.default, {
                              href: (0, r.G)(f, null != t ? t : ""),
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "text-lime-500 transition-all duration-200 ease-in-out hover:underline",
                              children: "View on block explorer",
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(o.Z, {
                      txHash: t,
                      status: "error",
                      children: (0, a.jsx)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: (0, a.jsx)("div", {
                          children:
                            "There was an error processing your transaction.",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    95453: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = s(3827),
        i = s(64090),
        n = s(51014),
        r = s(22169);
      let l = i.forwardRef((e, t) => {
        let {
          className: s,
          orientation: i = "horizontal",
          decorative: l = !0,
          ...d
        } = e;
        return (0, a.jsx)(n.f, {
          ref: t,
          decorative: l,
          orientation: i,
          className: (0, r.cn)(
            "shrink-0 bg-border",
            "horizontal" === i ? "h-[1px] w-full" : "h-full w-[1px]",
            s
          ),
          ...d,
        });
      });
      l.displayName = n.f.displayName;
    },
    32543: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = s(3827);
      function i(e) {
        let {
          onClick: t,
          children: s,
          title: i,
          className: n = "",
          description: r = "",
        } = e;
        return (0, a.jsx)("div", {
          className: "h-full grow ".concat(n, " rounded-lg p-px"),
          onClick: t,
          children: (0, a.jsxs)("div", {
            className:
              "gradient-bg flex h-full w-full flex-col justify-between     rounded-lg border-[0.5px] border-[#3FEAC1] border-opacity-20 px-4",
            children: [
              i &&
                (0, a.jsx)("div", {
                  className: "px-3 pt-5 text-[#BAF7E9]",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col items-start justify-center",
                    children: [
                      (0, a.jsx)("div", {
                        className: "w-full flex-1 md:text-lg lg:text-xl",
                        children: i,
                      }),
                      (0, a.jsx)("p", {
                        className: "text-sm opacity-50",
                        children: r,
                      }),
                    ],
                  }),
                }),
              (0, a.jsx)("div", { className: "p-3 text-2xl", children: s }),
            ],
          }),
        });
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
    51014: function (e, t, s) {
      "use strict";
      s.d(t, {
        f: function () {
          return o;
        },
      });
      var a = s(14749),
        i = s(64090),
        n = s(29586);
      let r = "horizontal",
        l = ["horizontal", "vertical"],
        d = (0, i.forwardRef)((e, t) => {
          let { decorative: s, orientation: l = r, ...d } = e,
            o = c(l) ? l : r;
          return (0, i.createElement)(
            n.WV.div,
            (0, a.Z)(
              { "data-orientation": o },
              s
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === o ? o : void 0,
                    role: "separator",
                  },
              d,
              { ref: t }
            )
          );
        });
      function c(e) {
        return l.includes(e);
      }
      d.propTypes = {
        orientation(e, t, s) {
          let a = e[t],
            i = String(a);
          return a && !c(a)
            ? Error(
                "Invalid prop `orientation` of value `"
                  .concat(i, "` supplied to `")
                  .concat(
                    s,
                    "`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `"
                  )
                  .concat(r, "`.")
              )
            : null;
        },
      };
      let o = d;
    },
    20073: function (e, t, s) {
      "use strict";
      function a(e, t) {
        let [s, a = "0"] = e.split("."),
          i = s.startsWith("-");
        if ((i && (s = s.slice(1)), (a = a.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(".".concat(a))) &&
            (s = "".concat(BigInt(s) + 1n)),
            (a = "");
        else if (a.length > t) {
          let [e, i, n] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)],
            r = Math.round(Number("".concat(i, ".").concat(n)));
          (a =
            r > 9
              ? ""
                  .concat(BigInt(e) + BigInt(1), "0")
                  .padStart(e.length + 1, "0")
              : "".concat(e).concat(r)).length > t &&
            ((a = a.slice(1)), (s = "".concat(BigInt(s) + 1n))),
            (a = a.slice(0, t));
        } else a = a.padEnd(t, "0");
        return BigInt(
          ""
            .concat(i ? "-" : "")
            .concat(s)
            .concat(a)
        );
      }
      s.d(t, {
        v: function () {
          return a;
        },
      });
    },
    71003: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useBalance: function () {
            return d;
          },
        });
      var a = s(5667),
        i = s(73054),
        n = s(38760),
        r = s(43089),
        l = s(42887);
      function d() {
        var e, t;
        let s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: d, query: c = {} } = s,
          o = (0, l.useConfig)(s),
          x = (0, r.useChainId)(),
          u = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: s } = t,
                  { address: i, scopeKey: n, ...r } = s[1];
                if (!i) throw Error("address is required");
                let l = await (0, a.s)(e, { ...r, address: i });
                return null != l ? l : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["balance", (0, i.O)(e)];
              })(t),
            };
          })(o, {
            ...s,
            chainId: null !== (e = s.chainId) && void 0 !== e ? e : x,
          }),
          f = !!(d && (null === (t = c.enabled) || void 0 === t || t));
        return (0, n.aM)({ ...c, ...u, enabled: f });
      }
    },
    69908: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useReadContract: function () {
            return d;
          },
        });
      var a = s(31723),
        i = s(73054),
        n = s(38760),
        r = s(43089),
        l = s(42887);
      function d() {
        var e, t, s;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: c, address: o, functionName: x, query: u = {} } = d,
          f = (0, l.useConfig)(d),
          m = (0, r.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(s) {
                let { queryKey: i } = s,
                  n = t.abi;
                if (!n) throw Error("abi is required");
                let { address: r, functionName: l, scopeKey: d, ...c } = i[1];
                if (!r) throw Error("address is required");
                if (!l) throw Error("functionName is required");
                let o = c.args;
                return (0, a.L)(e, {
                  abi: n,
                  address: r,
                  functionName: l,
                  args: o,
                  ...c,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...s } = e;
                return ["readContract", (0, i.O)(s)];
              })(t),
            };
          })(f, {
            ...d,
            chainId: null !== (e = d.chainId) && void 0 !== e ? e : m,
          }),
          v = !!(
            o &&
            c &&
            x &&
            (null === (t = u.enabled) || void 0 === t || t)
          );
        return (0, n.aM)({
          ...u,
          ...h,
          enabled: v,
          structuralSharing:
            null !== (s = u.structuralSharing) && void 0 !== s ? s : n.if,
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3877, 2644, 6054, 703, 982, 857, 2150, 4404, 5998, 1735, 4980, 7649,
        2971, 8069, 1744,
      ],
      function () {
        return e((e.s = 22424));
      }
    ),
      (_N_E = e.O());
  },
]);
