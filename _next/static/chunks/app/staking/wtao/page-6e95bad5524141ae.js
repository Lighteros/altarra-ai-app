(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7799],
  {
    31218: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 22014));
    },
    22014: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return M;
          },
        });
      var l = s(3827),
        a = s(64090),
        r = s(8792),
        i = s(30982),
        n = s(57180),
        d = s(20333),
        c = s(39296),
        o = s(10035),
        u = s(60989),
        x = s(39617),
        m = s(14980);
      let f = (e, t, s, l) => {
        var r,
          i,
          n,
          d,
          c,
          f,
          h,
          v,
          p,
          j,
          b,
          g,
          N,
          w,
          y,
          A,
          k,
          W,
          C,
          F,
          T,
          Z,
          E,
          R,
          S,
          q,
          B;
        let D = (0, x.useReadContracts)({
          query: { refetchInterval: 1e4, refetchIntervalInBackground: !0 },
          contracts: [
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "balanceOf",
              args: [null != e ? e : "0x"],
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "availableToWithdraw",
              args: [null != e ? e : "0x"],
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "earned",
              args: [null != e ? e : "0x", null != s ? s : "0x"],
            },
            {
              abi: o.Wo,
              address: null != s ? s : "0x",
              functionName: "decimals",
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "totalSupply",
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "rewardData",
              args: [null != s ? s : "0x"],
            },
            {
              abi: o.Wo,
              address: null != s ? s : "0x",
              functionName: "allowance",
              args: [null != e ? e : "0x", null != t ? t : "0x"],
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "getStakerWithdrawRequests",
              args: [null != e ? e : "0x"],
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "requestWithdrawTotal",
              args: [null != e ? e : "0x"],
            },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "availableToInvestTotal",
            },
            { abi: m.N4, address: null != t ? t : "0x", functionName: "owner" },
            {
              abi: m.N4,
              address: null != t ? t : "0x",
              functionName: "strategist",
            },
          ],
        });
        console.log(
          null === (r = D.data) || void 0 === r ? void 0 : r[5],
          "tvachka"
        );
        let O = D.data,
          I = new Date(
            1e3 *
              Number(
                null == O
                  ? void 0
                  : null === (i = O[5].result) || void 0 === i
                  ? void 0
                  : i[2]
              )
          ),
          H = I.toLocaleDateString(void 0, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          });
        console.log(H);
        let P =
            null !==
              (W =
                null === (n = D.data) || void 0 === n ? void 0 : n[3].result) &&
            void 0 !== W
              ? W
              : 18,
          U =
            null !==
              (C =
                null === (d = D.data) || void 0 === d ? void 0 : d[4].result) &&
            void 0 !== C
              ? C
              : 0,
          _ = parseFloat((0, u.b)(null != U ? U : 0, null != P ? P : 18)),
          M = null === (c = D.data) || void 0 === c ? void 0 : c[5].result,
          Q = null !== (F = null == M ? void 0 : M[3]) && void 0 !== F ? F : 0,
          Y =
            null !== (T = null == M ? void 0 : M[0]) && void 0 !== T ? T : "0x",
          L =
            null !==
              (Z =
                null === (f = D.data) || void 0 === f ? void 0 : f[0].result) &&
            void 0 !== Z
              ? Z
              : 0,
          z =
            L -
            (null !==
              (E =
                null === (h = D.data) || void 0 === h ? void 0 : h[8].result) &&
            void 0 !== E
              ? E
              : 0),
          V = (0, u.b)(L, null != P ? P : 18),
          K = (0, u.b)(
            null !==
              (R =
                null === (v = D.data) || void 0 === v ? void 0 : v[2].result) &&
              void 0 !== R
              ? R
              : 0,
            null != P ? P : 18
          ),
          J = parseFloat(V) * l,
          X = (0, a.useMemo)(
            () =>
              Q && U && l
                ? ((31536e3 * parseFloat((0, u.b)(Q, P)) * l) / (_ * l)) * 100
                : 0,
            [Q, _, U, l, P]
          ),
          G =
            null !==
              (S =
                null === (p = D.data) || void 0 === p ? void 0 : p[6].result) &&
            void 0 !== S
              ? S
              : 0;
        console.log(_, "totalSupplyHuman"), console.log(l, "taoPrice");
        let $ = _ * l,
          ee = parseFloat(K) * l,
          et =
            null !==
              (q =
                null === (j = D.data) || void 0 === j ? void 0 : j[9].result) &&
            void 0 !== q
              ? q
              : 0,
          es = (0, u.b)(et, P),
          el = parseFloat(es) * l;
        return {
          multiRewards: t,
          balance: L,
          balanceHuman: V,
          balanceInUSD: J,
          availableToWithdraw:
            null === (b = D.data) || void 0 === b ? void 0 : b[1].result,
          availableToWithdrawHuman: (0, u.b)(
            null !==
              (B =
                null === (g = D.data) || void 0 === g ? void 0 : g[1].result) &&
              void 0 !== B
              ? B
              : 0,
            P
          ),
          availableToInvest: et,
          availableToInvestHuman: es,
          availableToInvestUSD: el,
          earned: null === (N = D.data) || void 0 === N ? void 0 : N[2].result,
          earnedHuman: K,
          earnedInUSD: ee,
          allowance: G,
          APR: X,
          TVL: $,
          abi: m.N4,
          refetch: D.refetch,
          stakerWithdrawRequests:
            null === (w = D.data) || void 0 === w ? void 0 : w[7].result,
          requestWithdrawTotal:
            null === (y = D.data) || void 0 === y ? void 0 : y[8].result,
          netRequestableAmount: z,
          netRequestableAmountHuman: (0, u.b)(z, P),
          rewardDistributor: Y,
          rewardRate: Q,
          owner: null === (A = D.data) || void 0 === A ? void 0 : A[10].result,
          strategist:
            null === (k = D.data) || void 0 === k ? void 0 : k[11].result,
          DAOPrice: l,
          formattedDate: H,
          periodFinishDate: I,
        };
      };
      var h = s(32543);
      s(18991);
      var v = s(66114),
        p = s(43089);
      let j = () => {
          let e = (0, p.useChainId)();
          return (0, a.useMemo)(() => e === m.YH.Ethereum, [e])
            ? m.gQ[e]
            : m.gQ[m.YH.Ethereum];
        },
        b = () => {
          let e = (0, p.useChainId)();
          return (0, a.useMemo)(() => e === m.YH.Ethereum, [e])
            ? m.Tn[e]
            : m.Tn[m.YH.Ethereum];
        };
      function g() {
        var e;
        let { address: t } = (0, c.useAccount)(),
          { formattedDate: s, periodFinishDate: a } = f(
            t,
            j(),
            b(),
            (0, v.s)()
          ),
          r = new Date("2025-01-14");
        return (
          a.getTime(),
          (0, l.jsxs)(h.Z, {
            className: "w-full text-black",
            title: "Calendar",
            description: "",
            children: [
              (0, l.jsxs)("p", {
                className:
                  "flex flex-col items-start gap-1 py-2 text-sm text-muted-foreground",
                children: [
                  (0, l.jsx)("span", {
                    children: " - Rewards are distributed every ~10 days",
                  }),
                  (0, l.jsx)("span", {
                    children:
                      "- Withdrawals are subject to a withdraw queue (usually 2-3 days)",
                  }),
                  (0, l.jsxs)("span", {
                    className: "text-taolime",
                    children: [
                      "- Next rewards distribution for epoch 25",
                      " ",
                      ((e) => {
                        let t = new Date("2024-16-19");
                        return Math.ceil(
                          (e.getTime() - t.getTime()) / 864e5 / 10
                        );
                      })(r) + 5 || "",
                      ":",
                      " ",
                      new Date(r).toDateString() || "",
                    ],
                  }),
                ],
              }),
              (e = new Date(r)) instanceof Date &&
                !isNaN(e.getTime()) &&
                (0, l.jsx)(d.ZP, {
                  value: r || new Date(),
                  className: "text-base md:text-lg",
                }),
            ],
          })
        );
      }
      var N = s(72450),
        w = s(88e3),
        y = s(73667);
      let A = () => {
        let {
          data: e,
          error: t,
          isLoading: s,
        } = (0, y.a)({
          queryKey: ["taoPrice"],
          queryFn: async () => {
            let e = await fetch(
              "https://api.dexscreener.com/latest/dex/pairs/ethereum/0xf763bb342eb3d23c02ccb86312422fe0c1c17e94"
            );
            if (!e.ok) throw Error("Failed to fetch ALTARRAPrice");
            return (await e.json()).pairs[0].priceUsd;
          },
          staleTime: 3e4,
          gcTime: 3e5,
          refetchOnWindowFocus: !1,
          retry: 3,
        });
        if (!s) return t && console.error("Error fetching ALTARRAPrice:", t), e;
      };
      var k = s(36612),
        W = s(60332),
        C = s(55055),
        F = s(52770),
        T = s(46989);
      function Z(e) {
        let { showStake: t = !0, showPending: s = !0 } = e,
          { address: r } = (0, c.useAccount)(),
          i = j(),
          n = b(),
          d = A(),
          {
            APR: o,
            TVL: u,
            balanceInUSD: x,
            balanceHuman: m,
            earnedHuman: v,
            earnedInUSD: p,
            earned: g,
            abi: y,
          } = f(r, i, n, d),
          {
            writeContract: Z,
            data: E,
            isPending: R,
            reset: S,
            error: q,
          } = (0, N.useWriteContract)(),
          B = (0, w.useWaitForTransactionReceipt)({
            hash: E,
            confirmations: 1,
          }),
          D = async () => {
            r || open(),
              R || E || Z({ abi: y, address: i, functionName: "getReward" });
          };
        return (
          (0, a.useEffect)(() => {
            ((B && "success" === B.status) || "error" === B.status) && S();
          }, [B, S]),
          console.log(u, "TVL"),
          (0, l.jsx)(h.Z, {
            className: "w-full",
            title: "Quick Stats",
            children: (0, l.jsxs)("div", {
              className: "mt-4 pb-4 text-base",
              children: [
                (0, l.jsxs)("div", {
                  className: "grid grid-cols-2 items-center gap-2 gap-y-4",
                  children: [
                    (0, l.jsx)("div", { children: "APR" }),
                    (0, l.jsx)("div", {
                      className: "text-xl font-semibold tracking-tight",
                      children: (0, l.jsxs)(C.Z, {
                        children: [(0, l.jsx)(k.Z, { children: 13.45 }), "%"],
                      }),
                    }),
                    (0, l.jsx)("div", { children: "TVL" }),
                    (0, l.jsxs)("div", {
                      children: [
                        "$",
                        (0, l.jsx)(k.Z, { children: u }),
                        (0, l.jsxs)("div", {
                          className: "text-xs text-muted-foreground",
                          children: [
                            (0, l.jsx)(k.Z, { children: u / d }),
                            " ALTA",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(W.Z, { className: "my-4" }),
                (0, l.jsxs)("div", {
                  className: "grid grid-cols-2 items-center gap-2",
                  children: [
                    t &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("div", { children: "Your stake" }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsx)("div", {
                                children: (0, l.jsx)(k.Z, { children: x }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                  (0, l.jsx)(k.Z, { children: m }),
                                  " ALTA",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    s &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)("div", {
                            children: "Your pending rewards",
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-wrap space-x-2",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("div", {
                                    children: (0, l.jsx)(k.Z, { children: p }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                      (0, l.jsx)(k.Z, { children: v }),
                                      " ALTA",
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsx)(l.Fragment, {
                                children:
                                  g &&
                                  (0, l.jsx)("div", {
                                    children: (0, l.jsx)(T.Z, {
                                      onClick: D,
                                      children: (0, l.jsxs)("div", {
                                        className:
                                          "flex items-center justify-center space-x-2",
                                        children: [
                                          R || E
                                            ? (0, l.jsx)(F.default, {})
                                            : null,
                                          (0, l.jsx)("div", {
                                            children: "Claim",
                                          }),
                                        ],
                                      }),
                                    }),
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
          })
        );
      }
      var E = s(20703),
        R = s(54490),
        S = s(74355),
        q = s(20073);
      let B = (e, t) => {
          let s = (0, x.useReadContracts)({
            contracts: [
              {
                abi: o.Wo,
                address: null != e ? e : "0x",
                functionName: "balanceOf",
                args: [null != t ? t : "0x"],
              },
              {
                abi: o.Wo,
                address: null != e ? e : "0x",
                functionName: "decimals",
              },
            ],
          });
          if (s.data && 2 === s.data.length) {
            let t = s.data[0].result,
              l = s.data[1].result;
            return {
              token: e,
              human: (0, u.b)(null != t ? t : BigInt(0), null != l ? l : 18),
              balance: t,
              decimals: l,
            };
          }
        },
        D = () => {
          let { address: e } = (0, c.useAccount)();
          return B(b(), e);
        };
      var O = s(81674),
        I = s(22782);
      function H(e) {
        let { title: t, description: s, className: a, txHash: r } = e;
        return (0, l.jsx)("div", {
          className:
            "dialog-container z-50 min-w-64 cursor-pointer rounded-md text-left text-base",
          children: (0, l.jsx)("div", {
            className: "bg-color_2 rounded-md leading-4",
            children: (0, l.jsx)("div", {
              className: "flex items-center justify-between",
              children: (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("h2", {
                    className: "tracking-tight",
                    children: t,
                  }),
                  (0, l.jsx)("p", {
                    className: "text-muted-foreground",
                    children: s,
                  }),
                  (0, l.jsx)("div", {
                    className: "mt-2 flex text-right text-xs",
                    children:
                      r &&
                      (0, l.jsx)("a", {
                        href: "https://etherscan.io/tx/".concat(r),
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, l.jsx)("div", {
                          className: "text-color_3",
                          children: "View on Etherscan",
                        }),
                      }),
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function P() {
        var e, t;
        let { open: s } = (0, S.k_)(),
          {
            writeContract: r,
            data: i,
            isPending: n,
            reset: d,
            error: o,
          } = (0, N.useWriteContract)(),
          x = (0, w.useWaitForTransactionReceipt)({
            hash: i,
            confirmations: 1,
          }),
          { address: m } = (0, c.useAccount)(),
          v = D(),
          [p, g] = (0, a.useState)("Request Withdraw"),
          y = f(m, j(), b(), A()),
          k = (0, a.useRef)(null),
          [F, Z] = (0, a.useState)("Request Withdraw"),
          [E, R] = (0, a.useState)("Adding stake to the withdrawal queue");
        (0, a.useEffect)(() => {
          ((x && "success" === x.status) || "error" === x.status) &&
            (d(), null == y || y.refetch());
        }, [x, y, d]),
          (0, a.useEffect)(() => {
            o && console.log(o.message);
          }, [o]);
        let B = async () => {
          var e, t;
          if ((m || s(), n || i)) return;
          let l = null === (e = k.current) || void 0 === e ? void 0 : e.value;
          if (!l) return;
          let a = (0, q.v)(
            l,
            null !== (t = null == v ? void 0 : v.decimals) && void 0 !== t
              ? t
              : 18
          );
          y &&
            (r({
              address: y.multiRewards,
              abi: y.abi,
              functionName: "requestWithdraw",
              args: [a],
            }),
            (k.current.value = ""));
        };
        return (0, l.jsx)(h.Z, {
          className: "mt-4 w-full",
          children: (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("div", {
                className: "mt-4 text-sm",
                children: (0, l.jsxs)("div", {
                  children: [
                    (0, l.jsx)("label", {
                      className: "py-2 text-xl text-[#BAF7E9]",
                      children: "Request withdraw",
                    }),
                    (0, l.jsxs)("div", {
                      className: "relative pt-2",
                      children: [
                        (0, l.jsx)(I.I, {
                          ref: k,
                          placeholder: "0.00",
                          name: "deposit-amount",
                          className:
                            "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                          disabled: !1,
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "absolute right-0 top-1/2 flex translate-y-[-50%] flex-wrap items-center justify-end px-4",
                          onClick: () => {
                            var e, t;
                            null === (e = k.current) ||
                              void 0 === e ||
                              e.focus(),
                              k.current &&
                                (k.current.value =
                                  null !==
                                    (t = null == y ? void 0 : y.balanceHuman) &&
                                  void 0 !== t
                                    ? t
                                    : "0");
                          },
                          children: (0, l.jsx)("div", {
                            className:
                              "text-color_3 cursor-pointer font-semibold tracking-tight",
                            children: "MAX",
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "mt-2",
                      children: (0, l.jsx)("div", {
                        className:
                          "flex w-full flex-wrap items-center justify-end",
                        children: (0, l.jsxs)("div", {
                          className:
                            "flex items-center justify-between space-x-2 text-sm",
                          children: [
                            (0, l.jsx)("div", {
                              className: "text-slate-400",
                              children: "Max withdraw request",
                            }),
                            (0, l.jsxs)("div", {
                              children: [
                                null !==
                                  (e =
                                    null == y
                                      ? void 0
                                      : y.netRequestableAmountHuman) &&
                                void 0 !== e
                                  ? e
                                  : "0",
                                " ALTA",
                              ],
                            }),
                            (0, l.jsx)("div", {
                              children: (0, l.jsxs)("div", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                  "(",
                                  (0, l.jsx)(O.Z, {
                                    currency: "usd",
                                    children: y.balanceInUSD,
                                  }),
                                  ")",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "mb-2 mt-4",
                      children: (0, l.jsx)(T.Z, {
                        onClick: B,
                        children: (0, l.jsxs)("div", {
                          className:
                            "flex items-center justify-center space-x-2 text-sm font-semibold",
                          children: [
                            n || i ? "Pending..." : null,
                            (0, l.jsx)("div", {
                              children: m ? p : "Connect Wallet",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(W.Z, { className: "mb-8 mt-4" }),
              (0, l.jsx)("div", {
                className: "mt-4 text-sm",
                children: (0, l.jsxs)("div", {
                  className: "flex items-center justify-between space-x-2",
                  children: [
                    (0, l.jsxs)("div", {
                      children: [
                        null !==
                          (t =
                            null == y ? void 0 : y.availableToWithdrawHuman) &&
                        void 0 !== t
                          ? t
                          : "0",
                        " ALTA",
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "font-semibold",
                      children: (0, l.jsx)(T.Z, {
                        onClick: () => {
                          var e;
                          m || s(),
                            n ||
                              i ||
                              (Z("Withdraw"),
                              R("Withdrawing from the staking contract"),
                              r({
                                address: null == y ? void 0 : y.multiRewards,
                                abi: null == y ? void 0 : y.abi,
                                functionName: "withdraw",
                                args: [
                                  null !==
                                    (e =
                                      null == y
                                        ? void 0
                                        : y.availableToWithdraw) && void 0 !== e
                                    ? e
                                    : 0,
                                ],
                              }));
                        },
                        children: (0, l.jsxs)("div", {
                          className:
                            "flex items-center justify-center space-x-2",
                          children: [
                            n || i ? "Pending..." : null,
                            (0, l.jsx)("div", { children: "Withdraw" }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsx)(W.Z, { className: "mb-8 mt-4" }),
              (0, l.jsx)(C.Z, {
                children: (0, l.jsx)("span", {
                  className: "text-lg",
                  children: "Withdraw requests",
                }),
              }),
              (null == y ? void 0 : y.stakerWithdrawRequests) &&
              y.stakerWithdrawRequests.length > 0
                ? (0, l.jsxs)("div", {
                    className: "mt-4 pb-4 text-sm",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "grid grid-cols-3 items-center gap-2",
                        children: [
                          (0, l.jsx)("div", {
                            className: "text-slate-300",
                            children: "Amount",
                          }),
                          (0, l.jsx)("div", {
                            className: "text-slate-300",
                            children: "Requested at",
                          }),
                          (0, l.jsx)("div", {
                            className: "text-slate-300",
                            children: "Status",
                          }),
                        ],
                      }),
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          " ",
                          y.stakerWithdrawRequests.map((e, t) => {
                            var s;
                            return (0, l.jsx)(
                              "div",
                              {
                                children: (0, l.jsxs)("div", {
                                  className:
                                    "grid grid-cols-3 items-center gap-2 text-sm",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, u.b)(
                                          e.amount,
                                          null !==
                                            (s =
                                              null == v
                                                ? void 0
                                                : v.decimals) && void 0 !== s
                                            ? s
                                            : 18
                                        ),
                                        " ",
                                        "ALTA",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      children: new Date(
                                        1e3 * parseInt(e.timestamp.toString())
                                      ).toLocaleString(),
                                    }),
                                    (0, l.jsx)("div", {
                                      children: e.processed
                                        ? (0, l.jsx)("div", {
                                            className:
                                              "font-semibold text-green-500",
                                            children: "Processed",
                                          })
                                        : (0, l.jsx)("div", {
                                            className:
                                              "font-semibold text-slate-500",
                                            children: "Pending",
                                          }),
                                    }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, l.jsx)("div", {
                    className: "mt-4 pb-4 text-sm",
                    children: "No pending withdraw requests",
                  }),
              i && (0, l.jsx)(H, { title: F, description: E, txHash: i }),
            ],
          }),
        });
      }
      function U(e) {
        var t, s, r;
        let { className: i } = e,
          { open: n } = (0, S.k_)(),
          {
            writeContract: d,
            data: u,
            isPending: x,
            reset: m,
            error: v,
          } = (0, N.useWriteContract)(),
          p = (0, w.useWaitForTransactionReceipt)({
            hash: u,
            confirmations: 1,
          }),
          { address: g } = (0, c.useAccount)(),
          y = D(),
          [k, W] = (0, a.useState)("Stake"),
          C = j(),
          F = b(),
          Z = A(),
          B = f(g, C, F, Z),
          U =
            parseFloat(
              null !== (t = null == y ? void 0 : y.human) && void 0 !== t
                ? t
                : "0"
            ) * Z,
          _ =
            null !== (s = null == B ? void 0 : B.allowance) && void 0 !== s
              ? s
              : 0,
          M = (0, a.useRef)(null),
          [Q, Y] = (0, a.useState)(""),
          [L, z] = (0, a.useState)("");
        (0, a.useEffect)(() => {
          ((p && "success" === p.status) || "error" === p.status) &&
            (m(), null == B || B.refetch());
        }, [p, m, B]),
          (0, a.useEffect)(() => {
            if (M.current) {
              var e, t;
              W(
                _ >=
                  (0, q.v)(
                    null === (e = M.current) || void 0 === e ? void 0 : e.value,
                    null !== (t = null == y ? void 0 : y.decimals) &&
                      void 0 !== t
                      ? t
                      : 18
                  )
                  ? "Stake"
                  : "Approve ALTA"
              );
            }
          }, [_, null == y ? void 0 : y.decimals]),
          (0, a.useEffect)(() => {
            v && console.log(v.message);
          }, [v]);
        let V = async () => {
          var e, t;
          if ((g || n(), x || u)) return;
          let s = null === (e = M.current) || void 0 === e ? void 0 : e.value;
          if (!s) return;
          let l = (0, q.v)(
            s,
            null !== (t = null == y ? void 0 : y.decimals) && void 0 !== t
              ? t
              : 18
          );
          B &&
            (l > _
              ? (d({
                  address: null == y ? void 0 : y.token,
                  abi: o.Wo,
                  functionName: "approve",
                  args: [B.multiRewards, l],
                }),
                Y("Approve ALTA"),
                z("Approving WTAO for deposit"))
              : (d({
                  address: B.multiRewards,
                  abi: B.abi,
                  functionName: "stake",
                  args: [l],
                }),
                Y("Deposit"),
                z("Depositing WTAO"),
                (M.current.value = "")));
        };
        return (0, l.jsxs)("div", {
          className: "flex w-[20rem] flex-col items-start gap-4 md:w-[50%]",
          children: [
            (0, l.jsxs)(h.Z, {
              title: "",
              className: "mt-4 w-full sm:mt-0",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "flex w-fit flex-row items-center justify-between rounded-full border-[1px] border-[#BAF7E9] border-opacity-20 px-2 ",
                  children: (0, l.jsx)(E.default, {
                    src: R.Z,
                    alt: "ramses-new",
                    width: 25,
                    height: 25,
                    className: "rounded-xl pb-2 pt-2 invert",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "py-2 text-xl text-[#BAF7E9]",
                  children: "Stake/Unstake",
                }),
                (0, l.jsxs)("div", {
                  className: "mb-4 text-pretty text-xs text-[#BAF7E9]",
                  children: [
                    "Put your ",
                    (0, l.jsx)("span", {
                      className: "text-taolime",
                      children: "ALTA",
                    }),
                    " to work with our Optimized yield strategy. ",
                    (0, l.jsx)("br", {}),
                    " ALTA will be staked on",
                    (0, l.jsx)("span", {
                      className: "text-taolime",
                      children: " BitTensor Finney ",
                    }),
                    " maximizing the yield for ALTA",
                  ],
                }),
              ],
            }),
            (0, l.jsx)(h.Z, {
              className: "w-full",
              children: (0, l.jsx)("div", {
                children: (0, l.jsx)("div", {
                  className: "mt-4 text-sm",
                  children: (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("label", {
                        className: "py-2 text-xl text-[#BAF7E9]",
                        children: "Deposit",
                      }),
                      (0, l.jsxs)("div", {
                        className: "relative pt-2",
                        children: [
                          (0, l.jsx)(I.I, {
                            ref: M,
                            placeholder: "0.00",
                            name: "deposit-amount",
                            className:
                              "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                            disabled: !1,
                            onChange: (e) => {
                              var t;
                              W(
                                _ >=
                                  (0, q.v)(
                                    e.target.value,
                                    null !==
                                      (t = null == y ? void 0 : y.decimals) &&
                                      void 0 !== t
                                      ? t
                                      : 18
                                  )
                                  ? "Stake"
                                  : "Approve ALTA"
                              );
                            },
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "absolute right-0 top-1/2 flex translate-y-[-50%] flex-wrap items-center justify-end px-4",
                            onClick: () => {
                              var e, t;
                              null === (e = M.current) ||
                                void 0 === e ||
                                e.focus(),
                                M.current &&
                                  (M.current.value =
                                    null !==
                                      (t = null == y ? void 0 : y.human) &&
                                    void 0 !== t
                                      ? t
                                      : "0");
                            },
                            children: (0, l.jsx)("div", {
                              className:
                                "text-color_3 cursor-pointer font-semibold tracking-tight",
                              children: "MAX",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "mt-2",
                        children: (0, l.jsx)("div", {
                          className:
                            "flex w-full flex-wrap items-center justify-end",
                          children: (0, l.jsxs)("div", {
                            className:
                              "flex items-center justify-between space-x-2 text-sm",
                            children: [
                              (0, l.jsx)("div", {
                                className: "text-slate-400",
                                children: "Available",
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  parseFloat(
                                    null !==
                                      (r = null == y ? void 0 : y.human) &&
                                      void 0 !== r
                                      ? r
                                      : "0"
                                  ),
                                  " ALTA",
                                ],
                              }),
                              (0, l.jsx)("div", {
                                children: (0, l.jsxs)("div", {
                                  className: "text-xs text-muted-foreground",
                                  children: [
                                    "(",
                                    (0, l.jsx)(O.Z, {
                                      currency: "usd",
                                      children: U,
                                    }),
                                    ")",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "justify-begin mb-4 mt-2 flex w-full flex-row items-center gap-6",
                        children: [
                          (0, l.jsx)(T.Z, {
                            onClick: V,
                            children: (0, l.jsxs)("div", {
                              className:
                                "flex items-center justify-center space-x-2 text-sm font-semibold",
                              children: [
                                x || u ? "Pending..." : null,
                                (0, l.jsx)("div", {
                                  children: g ? k : "Connect Wallet",
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)(H, {
                            title: Q,
                            description: L,
                            txHash: u,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, l.jsx)(P, {}),
          ],
        });
      }
      function _() {
        return (0, l.jsxs)("div", {
          className:
            "flex w-full flex-col items-start justify-between md:flex-row md:items-start md:space-x-2 lg:space-x-4",
          children: [
            (0, l.jsx)("div", {
              className:
                "absolute left-0 top-[5.75rem] flex w-full flex-col items-center justify-center gap-6 py-1 text-center",
              children: (0, l.jsxs)("div", {
                className:
                  "flex items-center justify-center      rounded-xl border-[0.5px] border-[#3FEAC1] border-opacity-20 bg-opacity-20 px-2 py-[4px] backdrop-blur-sm",
                children: [
                  (0, l.jsx)(r.default, {
                    href: "/staking/tao",
                    className: "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                    children: "Stake ALTA",
                  }),
                  (0, l.jsx)(r.default, {
                    href: "/staking/tbank",
                    className: "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                    children: "Stake ALTA",
                  }),
                  (0, l.jsx)(r.default, {
                    href: "/staking/wtao",
                    className:
                      "rounded-lg bg-white bg-opacity-[10%] px-2 py-[5px] text-[#BAF7E9] opacity-80",
                    children: "Stake ALTA",
                  }),
                ],
              }),
            }),
            (0, l.jsx)(U, {}),
            (0, l.jsxs)("div", {
              className:
                "flex w-[20rem] flex-col items-center justify-start gap-4 pt-4 text-base md:w-1/2 md:pt-0",
              children: [(0, l.jsx)(Z, {}), (0, l.jsx)(g, {})],
            }),
          ],
        });
      }
      function M() {
        let [e, t] = (0, a.useState)("stability_pool"),
          s = (0, n.Z)();
        return (0, l.jsx)(i.NextIntlClientProvider, {
          locale: "en",
          children: (0, l.jsx)("div", {
            className:
              "container items-center pb-10 pt-16 text-center text-sm ",
            children: (0, l.jsx)("div", {
              className:
                "mt-4 text-left text-sm transition-all duration-200 ease-in-out",
              children:
                1 === s
                  ? (0, l.jsx)(_, {})
                  : (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute left-0 top-[5.75rem] flex w-full flex-col items-center justify-center gap-6 py-1 text-center",
                          children: (0, l.jsxs)("div", {
                            className:
                              "flex items-center justify-center      rounded-xl border-[0.5px] border-[#3FEAC1] border-opacity-20 bg-opacity-20 px-2 py-[4px] backdrop-blur-sm",
                            children: [
                              (0, l.jsx)(r.default, {
                                href: "/staking/tao",
                                className:
                                  "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                                children: "Stake ALTA",
                              }),
                              (0, l.jsx)(r.default, {
                                href: "/staking/tbank",
                                className:
                                  "rounded-lg p-2 text-[#BAF7E9] opacity-80",
                                children: "Stake ALTA",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, l.jsx)("h1", {
                              className: "text-2xl font-bold",
                              children: "Unsupported Network",
                            }),
                            (0, l.jsx)("p", {
                              className: "mt-4 text-lg",
                              children:
                                "Please switch to Ethereum Mainnet to stake ALTA",
                            }),
                          ],
                        }),
                      ],
                    }),
            }),
          }),
        });
      }
    },
    81674: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = s(30982);
      function a(e) {
        let { currency: t, children: s } = e,
          a = (0, l.useFormatter)();
        return s
          ? a.number(parseFloat(s.toString()), {
              style: "currency",
              currency: "USD",
            })
          : null;
      }
    },
    36612: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = s(30982);
      function a(e) {
        let { children: t, style: s = "decimal" } = e,
          a = (0, l.useFormatter)();
        return t ? a.number(parseFloat(t.toString()), { style: s }) : null;
      }
    },
    60332: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = s(3827),
        a = s(22169),
        r = s(95453);
      function i(e) {
        let { className: t = "" } = e;
        return (0, l.jsx)(r.Z, {
          className: (0, a.cn)(
            t,
            "to-taolime mb-4 bg-gradient-to-l from-transparent opacity-30"
          ),
        });
      }
    },
    55055: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = s(3827);
      function a(e) {
        let { children: t } = e;
        return (0, l.jsx)("span", {
          className:
            "inline-block bg-gradient-to-r from-taolime/60 via-taolime/80 to-taolime/90 bg-clip-text font-bold text-transparent",
          children: t,
        });
      }
    },
    22782: function (e, t, s) {
      "use strict";
      s.d(t, {
        I: function () {
          return i;
        },
      });
      var l = s(3827),
        a = s(64090),
        r = s(22169);
      let i = a.forwardRef((e, t) => {
        let { className: s, type: a, ...i } = e;
        return (0, l.jsx)("input", {
          type: a,
          className: (0, r.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Input";
    },
    95453: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return n;
        },
      });
      var l = s(3827),
        a = s(64090),
        r = s(51014),
        i = s(22169);
      let n = a.forwardRef((e, t) => {
        let {
          className: s,
          orientation: a = "horizontal",
          decorative: n = !0,
          ...d
        } = e;
        return (0, l.jsx)(r.f, {
          ref: t,
          decorative: n,
          orientation: a,
          className: (0, i.cn)(
            "shrink-0 bg-border",
            "horizontal" === a ? "h-[1px] w-full" : "h-full w-[1px]",
            s
          ),
          ...d,
        });
      });
      n.displayName = r.f.displayName;
    },
    52770: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return n;
          },
        });
      var l = s(3827),
        a = s(20703),
        r = {
          src: "/_next/static/media/loader.75ae4779.webp",
          height: 355,
          width: 354,
          blurDataURL:
            "data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC4AAAABN0AmbYubnYuICDsoattIVhQNgmkZzF7/1SJYCBPR/0h1XJc+WPAE44DlUqoDVlA4IDwAAADQAQCdASoIAAgAAkA4JYwAD4lu0nokHAD++Rj7UpiLsfF2Lz7ecRkajx7UcbI3Ck/H3QK5vRUswq7mAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        i = s(25587);
      function n() {
        return (0, l.jsx)("div", {
          className:
            "absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2",
          children: (0, l.jsx)(i.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, rotate: 360 },
            transition: { duration: 1, repeat: 1 / 0, repeatType: "loop" },
            layout: !0,
            className: "",
            children: (0, l.jsx)(a.default, {
              src: r,
              alt: "",
              className: "     grayscale     ",
            }),
          }),
        });
      }
    },
    32543: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = s(3827);
      function a(e) {
        let {
          onClick: t,
          children: s,
          title: a,
          className: r = "",
          description: i = "",
        } = e;
        return (0, l.jsx)("div", {
          className: "h-full grow ".concat(r, " rounded-lg p-px"),
          onClick: t,
          children: (0, l.jsxs)("div", {
            className:
              "gradient-bg flex h-full w-full flex-col justify-between     rounded-lg border-[0.5px] border-[#3FEAC1] border-opacity-20 px-4",
            children: [
              a &&
                (0, l.jsx)("div", {
                  className: "px-3 pt-5 text-[#BAF7E9]",
                  children: (0, l.jsxs)("div", {
                    className: "flex flex-col items-start justify-center",
                    children: [
                      (0, l.jsx)("div", {
                        className: "w-full flex-1 md:text-lg lg:text-xl",
                        children: a,
                      }),
                      (0, l.jsx)("p", {
                        className: "text-sm opacity-50",
                        children: i,
                      }),
                    ],
                  }),
                }),
              (0, l.jsx)("div", { className: "p-3 text-2xl", children: s }),
            ],
          }),
        });
      }
    },
    46989: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var l = s(3827),
        a = s(8792),
        r = s(22169);
      function i(e) {
        let {
          onClick: t,
          children: s,
          icon: i,
          link: n,
          className: d,
          isLoading: c = !1,
          disabled: o = !1,
          target: u,
        } = e;
        return (0, l.jsxs)(a.default, {
          onClick: (e) => {
            !o && t && t(e);
          },
          href: null != n ? n : "#",
          target: u,
          className: (0, r.cn)(
            "inline-flex items-center rounded-lg border-l border-r bg-taolime px-3 py-2 text-center text-deepblue transition-all duration-200",
            d,
            c && "cursor-not-allowed",
            o && "cursor-not-allowed",
            c || o ? "bg-opacity-60" : "bg-opacity-100"
          ),
          children: [
            (0, l.jsx)("div", {
              className: "absolute m-auto h-6 w-6",
              children: (0, l.jsx)("div", { children: i }),
            }),
            (0, l.jsxs)("div", {
              className:
                "flex flex-1 items-center justify-center text-center align-middle",
              children: [
                c &&
                  (0, l.jsxs)("div", {
                    role: "status",
                    children: [
                      (0, l.jsxs)("svg", {
                        "aria-hidden": "true",
                        className:
                          "inline h-6 w-6 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600",
                        viewBox: "0 0 100 101",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, l.jsx)("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "currentColor",
                          }),
                          (0, l.jsx)("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentFill",
                          }),
                        ],
                      }),
                      (0, l.jsx)("span", {
                        className: "sr-only",
                        children: "Loading...",
                      }),
                    ],
                  }),
                !c && (0, l.jsx)(l.Fragment, { children: s }),
              ],
            }),
          ],
        });
      }
    },
    57180: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return r;
        },
      });
      var l = s(43089),
        a = s(14980);
      function r() {
        let e = (0, l.useChainId)(),
          t = e;
        return e in a.mb || (t = 42161), t;
      }
    },
    66114: function (e, t, s) {
      "use strict";
      s.d(t, {
        s: function () {
          return a;
        },
      });
      var l = s(73667);
      let a = () => {
        let {
          data: e,
          error: t,
          isLoading: s,
        } = (0, l.a)({
          queryKey: ["taoPrice"],
          queryFn: async () => {
            let e = await fetch(
              "https://api.dexscreener.com/latest/dex/pairs/ethereum/0xf763bb342eb3d23c02ccb86312422fe0c1c17e94"
            );
            if (!e.ok) throw Error("Failed to fetch ALTARRAPrice");
            let t = await e.json();
            return console.log("data", t), t.pairs[0].priceUsd;
          },
          staleTime: 3e4,
          gcTime: 3e5,
          refetchOnWindowFocus: !1,
          retry: 3,
        });
        if (!s) return t && console.error("Error fetching ALTARRAPrice:", t), e;
      };
    },
    22169: function (e, t, s) {
      "use strict";
      s.d(t, {
        G: function () {
          return d;
        },
        cn: function () {
          return i;
        },
        s: function () {
          return n;
        },
      });
      var l = s(75504),
        a = s(51367),
        r = s(14980);
      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, a.m6)((0, l.W)(t));
      }
      function n(e) {
        return "".concat(e.slice(0, 6), "...").concat(e.slice(-4));
      }
      function d(e, t) {
        var s;
        let l = null !== (s = r.gb[e]) && void 0 !== s ? s : r.gb[1];
        return "".concat(l).concat(t);
      }
    },
    18991: function () {},
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
  },
  function (e) {
    e.O(
      0,
      [
        3877, 2644, 6054, 703, 982, 857, 2150, 4404, 1735, 5587, 4355, 9279,
        4980, 2971, 8069, 1744,
      ],
      function () {
        return e((e.s = 31218));
      }
    ),
      (_N_E = e.O());
  },
]);
