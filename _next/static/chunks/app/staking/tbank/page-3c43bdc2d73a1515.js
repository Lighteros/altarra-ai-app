(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8852],
  {
    46339: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 93287));
    },
    93287: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return U;
          },
        });
      var n = s(3827),
        a = s(64090),
        i = s(30982),
        r = s(20703),
        l = s(8792),
        c = s(54490),
        d = s(52926),
        o = s(60989),
        u = s(72450),
        x = s(69908),
        f = s(84098),
        m = s(22530),
        h = s(39296),
        p = s(39617),
        v = s(14980),
        b = s(57180);
      let j = [
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "stakes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "getUnpaidStableCoinGain",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "rewardPerToken",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "address", name: "token", type: "address" },
          ],
          name: "earned",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      function g() {
        var e, t, s, n, a;
        let i,
          r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "0x",
          { address: l } = (0, h.useAccount)(),
          c = (0, b.Z)(),
          d =
            1 === c || void 0 === c
              ? "0xAc9a52Dfe26Cf3b8Bca4CcFb328000E19A586B69"
              : 42161 === c
              ? "0xfce658b6e7B93F9c8281bbFd93394fBfd04A1402"
              : "0xAc9a52Dfe26Cf3b8Bca4CcFb328000E19A586B69",
          o = (0, p.useReadContracts)({
            contracts: [
              {
                abi: j,
                address: d,
                functionName: "stakes",
                args: ["0x" !== r ? r : null != l ? l : "0x"],
                chainId: c,
              },
              {
                abi: j,
                address: d,
                functionName: "getUnpaidStableCoinGain",
                args: ["0x" !== r ? r : null != l ? l : "0x"],
                chainId: c,
              },
              {
                abi: j,
                address: d,
                functionName: "balanceOf",
                args: ["0x" !== r ? r : null != l ? l : "0x"],
                chainId: c,
              },
              {
                abi: j,
                address: d,
                functionName: "rewardPerToken",
                args: [v.Tn[c]],
                chainId: c,
              },
              {
                abi: j,
                address: d,
                functionName: "earned",
                args: ["0x" !== r ? r : null != l ? l : "0x", v.Tn[c]],
                chainId: c,
              },
            ],
            query: { refetchInterval: 5e3, refetchIntervalInBackground: !0 },
          }),
          u = null === (e = o.data) || void 0 === e ? void 0 : e[0].result,
          x = null === (t = o.data) || void 0 === t ? void 0 : t[1].result;
        return (
          1 === c &&
            ((u = null === (s = o.data) || void 0 === s ? void 0 : s[2].result),
            (i = null === (n = o.data) || void 0 === n ? void 0 : n[3].result),
            (x = null === (a = o.data) || void 0 === a ? void 0 : a[4].result)),
          { stake: u, rewards: x, isLoading: o.isLoading, totalRewards: i }
        );
      }
      var y = s(37046),
        N = s(17532),
        w = s(36612),
        B = s(60332),
        Z = s(97787),
        k = s(32543),
        A = s(46989),
        E = s(92478),
        I = s(20073),
        S = s(10035),
        C = s(22169),
        T = s(22009),
        F = s(87378),
        K = s(22782);
      function O(e, t) {
        null !== e.current && (e.current.value = t);
      }
      function R(e) {
        let { className: t } = e,
          s = (0, f.Z)("BEYONDStaking"),
          i = (0, b.Z)(),
          l = (0, a.useRef)(null),
          x = (0, a.useRef)(null),
          [m, h] = (0, a.useState)(void 0),
          {
            data: p,
            writeContract: j,
            isPending: y,
          } = (0, u.useWriteContract)(),
          N = (0, f.Z)("BEYOND"),
          { stake: R } = g(),
          [D, U] = (0, a.useState)("Confirm"),
          [q, W] = (0, a.useState)(!1),
          [_, L] = (0, a.useState)(!1),
          [M, P] = (0, a.useState)(void 0),
          [z, H] = (0, a.useState)(void 0),
          [G, V] = (0, a.useState)(BigInt(0)),
          { balance: Y, decimals: $, symbol: J } = (0, T.Z)(z),
          { isApproved: Q } = (0, F.Z)(
            z,
            s.address,
            (0, I.v)(null != m ? m : "0", null != $ ? $ : 18)
          );
        (0, a.useEffect)(() => {
          H(N.address);
        }, [N]),
          (0, a.useEffect)(() => {
            void 0 !== p && P(p);
          }, [p]),
          (0, a.useEffect)(() => {
            q || Q || void 0 === z || z.toLowerCase() === v.EO[i].toLowerCase()
              ? q
                ? _
                  ? U("Confirm")
                  : U("Withdraw")
                : U("Stake")
              : U("Approve");
          }, [Q, q, z, v.EO, i]);
        let X = (0, d.d)(R && R > 0 ? R : BigInt(0));
        return (
          (0, a.useEffect)(() => {
            R && V(R);
          }, [R, M]),
          (0, n.jsxs)("div", {
            className: "flex w-full flex-col items-center gap-4 md:w-full",
            children: [
              (0, n.jsxs)(k.Z, {
                title: "",
                className: "mt-4 w-full sm:mt-0",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "flex w-fit flex-row items-center justify-between rounded-full border-[1px] border-[#BAF7E9] border-opacity-20 px-2 ",
                    children: (0, n.jsx)(r.default, {
                      src: c.Z,
                      alt: "ramses-new",
                      width: 25,
                      height: 25,
                      className: "rounded-xl pb-2 pt-2 invert",
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "py-2 text-xl text-[#BAF7E9]",
                    children: "Stake/Unstake",
                  }),
                  (0, n.jsxs)("div", {
                    className: "mb-4 text-pretty text-xs text-[#BAF7E9]",
                    children: [
                      "Stake ",
                      (0, n.jsx)("span", {
                        className: "text-taolime",
                        children: "BEYOND",
                      }),
                      " and start collecting",
                      (0, n.jsx)("span", {
                        className: "text-taolime",
                        children: " BEYOND ",
                      }),
                      " rewards, accrued from the protocol fees and distributed to the stakers.",
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(k.Z, {
                title: "Stake",
                description: "",
                className: "w-full",
                children: (0, n.jsxs)("div", {
                  className: (0, C.cn)("py-0", t),
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex w-full flex-row flex-col items-start justify-between gap-4 pr-4",
                      children: [
                        (0, n.jsx)(K.I, {
                          type: "number",
                          name: "stakeAdd",
                          min: "0",
                          placeholder: "Enter the amount",
                          className:
                            "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                          disabled: void 0 === z || q,
                          ref: l,
                          onChange: (e) => {
                            "" === e.target.value ? L(!1) : L(!0),
                              h(e.target.value);
                          },
                        }),
                        void 0 !== Y &&
                          (0, n.jsxs)("div", {
                            className:
                              "flex cursor-pointer items-center text-base transition-all duration-200 ease-in hover:opacity-50",
                            onClick: () => {
                              var e;
                              O(
                                l,
                                (0, o.b)(
                                  null != Y ? Y : BigInt(0),
                                  null != $ ? $ : 18
                                )
                              ),
                                h(
                                  null === (e = l.current) || void 0 === e
                                    ? void 0
                                    : e.value
                                ),
                                null !== l.current &&
                                  (W(!1),
                                  l.current.focus(),
                                  null !== x.current &&
                                    ((x.current.value = ""), L(!0)));
                            },
                            children: [
                              (0, n.jsx)(E.Z, { symbol: "BEYOND" }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-row items-center gap-1 text-base text-[#BAF7E9]",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "pl-1",
                                    children: " Balance: ",
                                  }),
                                  (0, n.jsxs)("code", {
                                    children: [
                                      (0, n.jsx)(w.Z, {
                                        children: (0, o.b)(
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
                      ],
                    }),
                    (0, n.jsx)(B.Z, { className: "mt-4" }),
                    (0, n.jsx)("div", {
                      className: "py-2 text-xl text-[#BAF7E9]",
                      children: "Unstake",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex w-full flex-row flex-col items-start justify-between gap-4 pr-4",
                      children: [
                        (0, n.jsx)(K.I, {
                          type: "number",
                          name: "stakeRemove",
                          min: "0",
                          placeholder: "Enter the amount",
                          disabled: void 0 === z || _,
                          ref: x,
                          onChange: (e) => {
                            "" === e.target.value ? W(!1) : W(!0),
                              h(e.target.value);
                          },
                          className:
                            "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                        }),
                        void 0 !== Y &&
                          (0, n.jsxs)("div", {
                            className:
                              "flex cursor-pointer items-center text-base transition-all duration-200  ease-in hover:opacity-50",
                            onClick: () => {
                              var e;
                              O(x, X),
                                h(
                                  null === (e = x.current) || void 0 === e
                                    ? void 0
                                    : e.value
                                ),
                                null !== x.current &&
                                  (L(!1),
                                  x.current.focus(),
                                  null !== l.current &&
                                    ((l.current.value = ""), W(!0)));
                            },
                            children: [
                              (0, n.jsx)(E.Z, { symbol: "BEYOND" }),
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-row items-center gap-1 text-base text-[#BAF7E9]",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "pl-1",
                                    children: " Staked: ",
                                  }),
                                  (0, n.jsxs)("code", {
                                    children: [
                                      (0, n.jsx)(w.Z, { children: X }),
                                      " ",
                                    ],
                                  }),
                                  J,
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-4 flex w-full items-center items-center py-3 font-semibold",
                      children: [
                        (0, n.jsx)(A.Z, {
                          icon: (0, n.jsx)(E.Z, {
                            symbol: "BEYOND",
                            invert: !0,
                          }),
                          isLoading: !0 === y,
                          className: "flex w-[10rem] flex-1",
                          disabled: void 0 !== M,
                          onClick: () => {
                            s.abi &&
                              s.address &&
                              $ &&
                              (q &&
                                m &&
                                z &&
                                (1 === i
                                  ? j({
                                      abi: s.abi,
                                      address: s.address,
                                      chainId: i,
                                      functionName: "withdraw",
                                      args: [(0, I.v)(m, $)],
                                    })
                                  : j({
                                      abi: s.abi,
                                      address: s.address,
                                      chainId: i,
                                      functionName: "unstake",
                                      args: [(0, I.v)(m, $)],
                                    })),
                              _ &&
                                m &&
                                z &&
                                (Q
                                  ? j({
                                      abi: s.abi,
                                      address: s.address,
                                      chainId: i,
                                      functionName: "stake",
                                      args: [(0, I.v)(m, $)],
                                    })
                                  : j({
                                      abi: S.Wo,
                                      address: z,
                                      chainId: i,
                                      functionName: "approve",
                                      args: [s.address, v.Uf],
                                    })));
                          },
                          children: D,
                        }),
                        M &&
                          (0, n.jsx)(Z.Z, {
                            open: !0,
                            hash: M,
                            onOpenChange: () => {
                              P(void 0);
                            },
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function D() {
        var e;
        let t = (0, f.Z)("BEYONDStaking"),
          {
            data: s,
            writeContract: i,
            isPending: h,
          } = (0, u.useWriteContract)();
        (0, m.Z)();
        let p = (0, y.Z)(),
          { isLoading: v, stake: j, rewards: I, totalRewards: S } = g(),
          [C, T] = (0, a.useState)(void 0),
          F = (0, b.Z)(),
          K = (0, N.b)(),
          { data: O } = (0, x.useReadContract)({
            address:
              1 === F || void 0 === F
                ? "0xAc9a52Dfe26Cf3b8Bca4CcFb328000E19A586B69"
                : 42161 === F
                ? "0xfce658b6e7B93F9c8281bbFd93394fBfd04A1402"
                : "0xAc9a52Dfe26Cf3b8Bca4CcFb328000E19A586B69",
            abi: [
              {
                inputs: [],
                name: "totalSupply",
                outputs: [
                  { internalType: "uint256", name: "", type: "uint256" },
                ],
                stateMutability: "view",
                type: "function",
              },
            ],
            functionName: "totalSupply",
            chainId: F,
          });
        return (0, n.jsxs)("div", {
          className:
            "flex w-full flex-col items-center justify-center md:flex-row md:items-start md:space-x-2 lg:space-x-4",
          children: [
            (0, n.jsx)("div", {
              className:
                "absolute left-0 top-[5.75rem] flex w-full flex-col items-center justify-center gap-6 py-1 text-center",
              children: (0, n.jsxs)("div", {
                className:
                  "flex items-center justify-center      rounded-xl border-[0.5px] border-[#3FEAC1] border-opacity-20 bg-opacity-20 px-2 py-[4px] backdrop-blur-sm",
                children: [
                  (0, n.jsx)(l.default, {
                    href: "/staking/tao",
                    className: "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                    children: "Stake BEYOND",
                  }),
                  (0, n.jsx)(l.default, {
                    href: "/staking/tbank",
                    className:
                      "rounded-lg bg-white bg-opacity-[10%] px-2 py-[5px] text-[#BAF7E9] opacity-80",
                    children: "Stake BEYOND",
                  }),
                  (0, n.jsx)(l.default, {
                    href: "/staking/wtao",
                    className: "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                    children: "Stake BEYOND",
                  }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className: "flex w-full flex-col items-center md:w-1/2",
              children: (0, n.jsx)(R, { className: "mt-0 w-full text-sm" }),
            }),
            (0, n.jsxs)("div", {
              className: "flex w-full flex-col items-center md:w-1/2",
              children: [
                (0, n.jsx)(k.Z, {
                  title: "",
                  className: "mt-4 w-full pb-4 md:mt-0",
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex w-full flex-row items-center justify-between py-1",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex flex-col items-start",
                        children: [
                          (0, n.jsx)("div", {
                            className: "text-xl text-[#BAF7E9]",
                            children: "Statistics",
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "text-pretty text-xs text-[#BAF7E9] opacity-60",
                            children: "Track your stats in easiest way",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-start justify-between text-lg text-[#BAF7E9] md:text-xl",
                        children: [
                          (0, n.jsx)("div", {
                            className: "text-sm opacity-60",
                            children: "Est. APR",
                          }),
                          (0, n.jsxs)("div", {
                            children: [F && 1 == F ? "7.62" : "7.13", "%"],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)(k.Z, {
                  title: "",
                  className: "w-full text-[#BAF7E9]",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-between space-x-4 pt-4 text-base",
                      children: [
                        (0, n.jsx)("div", { children: "Total BEYOND Staked" }),
                        (0, n.jsxs)("div", {
                          className: "flex space-x-4",
                          children: [
                            (0, n.jsxs)("div", {
                              children: [
                                "$",
                                O && K
                                  ? (0, n.jsx)(w.Z, {
                                      children: (
                                        Number((0, d.d)(BigInt(O.toString()))) *
                                        K
                                      ).toString(),
                                    })
                                  : (0, n.jsx)(w.Z, { children: "35308" }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              children: (0, n.jsx)(E.Z, { symbol: "BEYOND" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    1 !== F &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(B.Z, { className: "mt-4" }),
                          (0, n.jsxs)("div", {
                            className:
                              "mt-4 flex flex-wrap items-center justify-between space-x-4 text-base",
                            children: [
                              1 === F
                                ? (0, n.jsx)("div", {
                                    children: "BEYOND Rewards Paid",
                                  })
                                : (0, n.jsx)("div", {
                                    children: "taoUSD Rewards Paid",
                                  }),
                              (0, n.jsxs)("div", {
                                className: "flex space-x-4",
                                children: [
                                  1 === F
                                    ? (0, n.jsx)("div", {
                                        children: (0, n.jsx)(w.Z, {
                                          children: (0, o.b)(
                                            null != S ? S : BigInt(0),
                                            9
                                          ),
                                        }),
                                      })
                                    : (0, n.jsx)("div", {
                                        children: (
                                          null == p ? void 0 : p.isLoading
                                        )
                                          ? (0, n.jsx)("div", {
                                              className: "animate-pulse",
                                              children: "Loading...",
                                            })
                                          : (0, n.jsx)(w.Z, {
                                              children:
                                                null == p
                                                  ? void 0
                                                  : null ===
                                                      (e = p.statistics) ||
                                                    void 0 === e
                                                  ? void 0
                                                  : e.totalProtocolFees,
                                            }),
                                      }),
                                  (0, n.jsx)("div", {
                                    children: (0, n.jsx)(E.Z, {
                                      symbol: "BEYOND",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, n.jsx)(B.Z, { className: "mt-4" }),
                    (0, n.jsx)("div", {
                      className:
                        "mt-4 flex flex-wrap items-center justify-between space-x-4 text-base font-semibold",
                      children: "Your Position",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "mt-4 flex flex-col items-start justify-between gap-2 text-base",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex flex gap-1",
                          children: [
                            (0, n.jsx)("div", {
                              className: "text-muted-foreground",
                              children: "Staked BEYOND:",
                            }),
                            (0, n.jsx)("div", {
                              children: (0, n.jsx)(w.Z, {
                                children: (0, d.d)(null != j ? j : BigInt(0)),
                              }),
                            }),
                            (0, n.jsx)("div", {
                              children: (0, n.jsx)(E.Z, { symbol: "BEYOND" }),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex gap-1",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "text-muted-foreground",
                              children: [
                                1 === F ? "BEYOND" : "BEYOND",
                                " Rewards:",
                                " ",
                              ],
                            }),
                            (0, n.jsx)("div", {
                              children:
                                1 === F
                                  ? (0, o.b)(null != I ? I : BigInt(0), 9)
                                  : (0, o.b)(null != I ? I : BigInt(0), 18),
                            }),
                            (0, n.jsx)("div", {
                              children:
                                1 === F
                                  ? (0, n.jsx)(r.default, {
                                      src: c.Z,
                                      alt: "vault",
                                      width: 25,
                                      height: 25,
                                      className: "invert",
                                    })
                                  : (0, n.jsx)(E.Z, { symbol: "BEYOND" }),
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "mb-3 flex text-sm",
                          children: (0, n.jsxs)("div", {
                            className: "flex pt-2 text-sm",
                            children: [
                              (0, n.jsx)(A.Z, {
                                isLoading: !0 === h,
                                className: "flex flex-1",
                                disabled: void 0 !== C || I === BigInt(0),
                                onClick: () => {
                                  t.abi &&
                                    t.address &&
                                    (1 === F
                                      ? i({
                                          abi: t.abi,
                                          address: t.address,
                                          chainId: F,
                                          functionName: "getReward",
                                          args: [],
                                        })
                                      : i({
                                          abi: t.abi,
                                          address: t.address,
                                          chainId: F,
                                          functionName: "redeemReward",
                                          args: [I],
                                        }));
                                },
                                children: (0, n.jsxs)("div", {
                                  className:
                                    "flex items-center space-x-2 font-semibold",
                                  children: [
                                    (0, n.jsx)("div", {
                                      children:
                                        1 === F
                                          ? (0, n.jsx)(r.default, {
                                              src: c.Z,
                                              alt: "vault",
                                              width: 20,
                                              height: 20,
                                            })
                                          : (0, n.jsx)(E.Z, {
                                              symbol: "BEYOND",
                                              invert: !0,
                                            }),
                                    }),
                                    (0, n.jsx)("div", { children: "Harvest" }),
                                  ],
                                }),
                              }),
                              C &&
                                (0, n.jsx)(Z.Z, {
                                  open: !0,
                                  hash: C,
                                  onOpenChange: () => {
                                    T(void 0);
                                  },
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
        });
      }
      function U() {
        let [e, t] = (0, a.useState)("stability_pool");
        return (0, n.jsx)(i.NextIntlClientProvider, {
          locale: "en",
          children: (0, n.jsx)("div", {
            className: "container items-center pb-10 pt-16 text-center text-sm",
            children: (0, n.jsx)("div", {
              className:
                "mt-4 text-left text-sm transition-all duration-200 ease-in-out",
              children: (0, n.jsx)(D, {}),
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
      var n = s(3827),
        a = s(22169),
        i = s(95453);
      function r(e) {
        let { className: t = "" } = e;
        return (0, n.jsx)(i.Z, {
          className: (0, a.cn)(
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
      var n = s(3827),
        a = s(64090),
        i = s(22169);
      let r = a.forwardRef((e, t) => {
        let { className: s, type: a, ...r } = e;
        return (0, n.jsx)("input", {
          type: a,
          className: (0, i.cn)(
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
          return u;
        },
      });
      var n = s(3827),
        a = s(8792),
        i = s(80037),
        r = s(22169),
        l = s(57180),
        c = s(9208),
        d = s(17247),
        o = s(68575);
      function u(e) {
        let { hash: t, open: s, onOpenChange: u, children: x } = e,
          f = (0, l.Z)();
        return (0, n.jsx)(c.Vq, {
          defaultOpen: s,
          onOpenChange: u,
          children: (0, n.jsx)(c.cZ, {
            className: "sm:max-w-[425px]",
            children: (0, n.jsxs)(c.fK, {
              children: [
                (0, n.jsx)(c.$N, { children: "Transaction in progress..." }),
                (0, n.jsxs)("div", {
                  className: "mt-4 text-sm text-muted-foreground",
                  children: [
                    (0, n.jsx)(o.Z, {
                      txHash: t,
                      status: "success",
                      children: (0, n.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, n.jsx)("div", {
                            children: "Your transaction has been processed.",
                          }),
                          (0, n.jsx)("div", {
                            children: (0, n.jsx)(i.Z, {
                              className: "text-green-500",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            children: (0, n.jsx)(a.default, {
                              href: (0, r.G)(f, null != t ? t : ""),
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "text-lime-500 transition-all duration-200 ease-in-out hover:underline",
                              children: "View on block explorer",
                            }),
                          }),
                          (0, n.jsx)("div", { children: x }),
                        ],
                      }),
                    }),
                    (0, n.jsx)(o.Z, {
                      txHash: t,
                      status: "pending",
                      children: (0, n.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, n.jsx)("div", {
                            children: "Your transaction is being processed.",
                          }),
                          (0, n.jsx)("div", { children: (0, n.jsx)(d.Z, {}) }),
                          (0, n.jsx)("div", {
                            children: (0, n.jsx)(a.default, {
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
                    (0, n.jsx)(o.Z, {
                      txHash: t,
                      status: "error",
                      children: (0, n.jsx)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: (0, n.jsx)("div", {
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
      var n = s(3827),
        a = s(64090),
        i = s(51014),
        r = s(22169);
      let l = a.forwardRef((e, t) => {
        let {
          className: s,
          orientation: a = "horizontal",
          decorative: l = !0,
          ...c
        } = e;
        return (0, n.jsx)(i.f, {
          ref: t,
          decorative: l,
          orientation: a,
          className: (0, r.cn)(
            "shrink-0 bg-border",
            "horizontal" === a ? "h-[1px] w-full" : "h-full w-[1px]",
            s
          ),
          ...c,
        });
      });
      l.displayName = i.f.displayName;
    },
    32543: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = s(3827);
      function a(e) {
        let {
          onClick: t,
          children: s,
          title: a,
          className: i = "",
          description: r = "",
        } = e;
        return (0, n.jsx)("div", {
          className: "h-full grow ".concat(i, " rounded-lg p-px"),
          onClick: t,
          children: (0, n.jsxs)("div", {
            className:
              "gradient-bg flex h-full w-full flex-col justify-between     rounded-lg border-[0.5px] border-[#3FEAC1] border-opacity-20 px-4",
            children: [
              a &&
                (0, n.jsx)("div", {
                  className: "px-3 pt-5 text-[#BAF7E9]",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col items-start justify-center",
                    children: [
                      (0, n.jsx)("div", {
                        className: "w-full flex-1 md:text-lg lg:text-xl",
                        children: a,
                      }),
                      (0, n.jsx)("p", {
                        className: "text-sm opacity-50",
                        children: r,
                      }),
                    ],
                  }),
                }),
              (0, n.jsx)("div", { className: "p-3 text-2xl", children: s }),
            ],
          }),
        });
      }
    },
    22530: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = s(64090),
        a = s(43089),
        i = s(39296),
        r = s(78065);
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t = (0, a.useChainId)();
        e && (t = e);
        let s = (0, r.Z)(t),
          { address: l } = (0, i.useAccount)(),
          [c, d] = (0, n.useState)(void 0);
        return (
          (0, n.useEffect)(() => {
            fetch("".concat(s, "/tbank_staking/overview"))
              .then((e) => e.json())
              .then((e) => d(e));
          }, [s, l, t]),
          { cashBackPoolOverview: c, isLoading: !c }
        );
      }
    },
    37046: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = s(64090),
        a = s(78065);
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t = (0, a.Z)(e),
          [s, i] = (0, n.useState)(void 0),
          [r, l] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            fetch("".concat(t, "/protocolStats"))
              .then((e) => e.json())
              .then((e) => {
                e.data &&
                  (console.log(e.data[0].data), l(!1), i(e.data[0].data));
              });
          }, [t]),
          { statistics: s, isLoading: r }
        );
      }
    },
    17532: function (e, t, s) {
      "use strict";
      s.d(t, {
        b: function () {
          return a;
        },
      });
      var n = s(73667);
      let a = () => {
        let {
          data: e,
          error: t,
          isLoading: s,
        } = (0, n.a)({
          queryKey: ["BeyondPrice"],
          queryFn: async () => {
            let e = await fetch(
              "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x0f88a9D642FA9283338e1eC4496E7dC72714831a"
            );
            if (!e.ok) throw Error("Failed to fetch BEYONDprice");
            let t = await e.json();
            return console.log("data", t), t.pairs[0].priceUsd;
          },
          staleTime: 3e4,
          gcTime: 3e5,
          refetchOnWindowFocus: !1,
          retry: 3,
        });
        if (!s) return t && console.error("Error fetching BEYONDprice:", t), e;
      };
    },
    54490: function (e, t) {
      "use strict";
      t.Z = {
        src: "/silver.png",
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
      var n = s(14749),
        a = s(64090),
        i = s(29586);
      let r = "horizontal",
        l = ["horizontal", "vertical"],
        c = (0, a.forwardRef)((e, t) => {
          let { decorative: s, orientation: l = r, ...c } = e,
            o = d(l) ? l : r;
          return (0, a.createElement)(
            i.WV.div,
            (0, n.Z)(
              { "data-orientation": o },
              s
                ? { role: "none" }
                : {
                    "aria-orientation": "vertical" === o ? o : void 0,
                    role: "separator",
                  },
              c,
              { ref: t }
            )
          );
        });
      function d(e) {
        return l.includes(e);
      }
      c.propTypes = {
        orientation(e, t, s) {
          let n = e[t],
            a = String(n);
          return n && !d(n)
            ? Error(
                "Invalid prop `orientation` of value `"
                  .concat(a, "` supplied to `")
                  .concat(
                    s,
                    "`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `"
                  )
                  .concat(r, "`.")
              )
            : null;
        },
      };
      let o = c;
    },
    20073: function (e, t, s) {
      "use strict";
      function n(e, t) {
        let [s, n = "0"] = e.split("."),
          a = s.startsWith("-");
        if ((a && (s = s.slice(1)), (n = n.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(".".concat(n))) &&
            (s = "".concat(BigInt(s) + 1n)),
            (n = "");
        else if (n.length > t) {
          let [e, a, i] = [n.slice(0, t - 1), n.slice(t - 1, t), n.slice(t)],
            r = Math.round(Number("".concat(a, ".").concat(i)));
          (n =
            r > 9
              ? ""
                  .concat(BigInt(e) + BigInt(1), "0")
                  .padStart(e.length + 1, "0")
              : "".concat(e).concat(r)).length > t &&
            ((n = n.slice(1)), (s = "".concat(BigInt(s) + 1n))),
            (n = n.slice(0, t));
        } else n = n.padEnd(t, "0");
        return BigInt(
          ""
            .concat(a ? "-" : "")
            .concat(s)
            .concat(n)
        );
      }
      s.d(t, {
        v: function () {
          return n;
        },
      });
    },
    71003: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useBalance: function () {
            return c;
          },
        });
      var n = s(5667),
        a = s(73054),
        i = s(38760),
        r = s(43089),
        l = s(42887);
      function c() {
        var e, t;
        let s =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: c, query: d = {} } = s,
          o = (0, l.useConfig)(s),
          u = (0, r.useChainId)(),
          x = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: s } = t,
                  { address: a, scopeKey: i, ...r } = s[1];
                if (!a) throw Error("address is required");
                let l = await (0, n.s)(e, { ...r, address: a });
                return null != l ? l : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["balance", (0, a.O)(e)];
              })(t),
            };
          })(o, {
            ...s,
            chainId: null !== (e = s.chainId) && void 0 !== e ? e : u,
          }),
          f = !!(c && (null === (t = d.enabled) || void 0 === t || t));
        return (0, i.aM)({ ...d, ...x, enabled: f });
      }
    },
    69908: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          useReadContract: function () {
            return c;
          },
        });
      var n = s(31723),
        a = s(73054),
        i = s(38760),
        r = s(43089),
        l = s(42887);
      function c() {
        var e, t, s;
        let c =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: d, address: o, functionName: u, query: x = {} } = c,
          f = (0, l.useConfig)(c),
          m = (0, r.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(s) {
                let { queryKey: a } = s,
                  i = t.abi;
                if (!i) throw Error("abi is required");
                let { address: r, functionName: l, scopeKey: c, ...d } = a[1];
                if (!r) throw Error("address is required");
                if (!l) throw Error("functionName is required");
                let o = d.args;
                return (0, n.L)(e, {
                  abi: i,
                  address: r,
                  functionName: l,
                  args: o,
                  ...d,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...s } = e;
                return ["readContract", (0, a.O)(s)];
              })(t),
            };
          })(f, {
            ...c,
            chainId: null !== (e = c.chainId) && void 0 !== e ? e : m,
          }),
          p = !!(
            o &&
            d &&
            u &&
            (null === (t = x.enabled) || void 0 === t || t)
          );
        return (0, i.aM)({
          ...x,
          ...h,
          enabled: p,
          structuralSharing:
            null !== (s = x.structuralSharing) && void 0 !== s ? s : i.if,
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
        return e((e.s = 46339));
      }
    ),
      (_N_E = e.O());
  },
]);
