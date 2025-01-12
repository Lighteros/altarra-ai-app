(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9338],
  {
    77308: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 67439));
    },
    67439: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return z;
          },
        });
      var r = a(3827),
        l = a(64090),
        n = a(47907),
        s = a(30982),
        i = a(52926),
        o = a(39296),
        d = a(46892),
        c = a(78065),
        u = a(57180),
        f = a(84098),
        h = a(39617),
        m = a(69908),
        x = a(14980);
      function v(e) {
        var t, a, r, l, n;
        let s = (0, u.Z)(),
          i = (0, f.Z)("Vault"),
          o = (0, f.Z)("VaultBorrowRate"),
          d = (0, f.Z)("VaultFactory"),
          c = (0, f.Z)("BEYONDStaking"),
          v = { abi: null == i ? void 0 : i.abi, address: e, chainId: s },
          p = {
            abi: null == o ? void 0 : o.abi,
            address: null == o ? void 0 : o.address,
            chainId: s,
          };
        null == d || d.abi, null == d || d.address;
        let g = {
            abi: null == c ? void 0 : c.abi,
            address: null == c ? void 0 : c.address,
            chainId: s,
          },
          j = (0, h.useReadContracts)({
            contracts: [
              { ...v, functionName: "debt" },
              { ...v, functionName: "vaultOwner" },
              { ...p, functionName: "getBorrowRate", args: [e] },
              {
                ...v,
                functionName: "borrowableWithDiff",
                args: [x.je, 0, 0, !1],
              },
            ],
            query: { refetchInterval: 5e3, refetchIntervalInBackground: !0 },
          }),
          b = (0, m.useReadContract)({
            ...g,
            functionName: "getUnpaidStableCoinGain",
            args: [
              null === (t = j.data) || void 0 === t ? void 0 : t[1].result,
            ],
            query: { refetchInterval: 5e3, refetchIntervalInBackground: !0 },
          });
        return {
          debt: null === (a = j.data) || void 0 === a ? void 0 : a[0].result,
          vaultOwner:
            null === (r = j.data) || void 0 === r ? void 0 : r[1].result,
          borrowRate:
            null === (l = j.data) || void 0 === l ? void 0 : l[2].result,
          borrowable:
            null === (n = j.data) || void 0 === n ? void 0 : n[3].result,
          cashback: b.data,
          isLoading: j.isLoading || b.isLoading,
        };
      }
      var p = a(81674),
        g = a(36612);
      function j(e) {
        let { children: t } = e;
        if (((0, s.useFormatter)(), t)) {
          let e = parseFloat((0, i.d)(t * BigInt(100))).toFixed(2);
          return (0, r.jsxs)(r.Fragment, { children: [e, "%"] });
        }
        return null;
      }
      var b = a(59409),
        N = a(73568),
        y = a(32543),
        w = a(92478),
        Z = a(87461);
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let C = (0, Z.Z)("PlusSquare", [
          [
            "rect",
            {
              width: "18",
              height: "18",
              x: "3",
              y: "3",
              rx: "2",
              key: "afitv7",
            },
          ],
          ["path", { d: "M8 12h8", key: "1wcyev" }],
          ["path", { d: "M12 8v8", key: "napkw2" }],
        ]),
        I = (0, Z.Z)("SendHorizontal", [
          ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
          ["path", { d: "M6 12h16", key: "s4cdu5" }],
        ]);
      var k = a(20073),
        E = a(60989),
        A = a(10035),
        F = a(72450),
        S = a(22009),
        R = a(87378),
        B = a(22782),
        L = a(97787),
        _ = a(12647),
        q = a(95453),
        O = a(46989);
      function T(e, t) {
        null !== e.current && (e.current.value = t);
      }
      function V(e) {
        let { vault: t } = e,
          a = (0, f.Z)("VaultFactory"),
          n = (0, u.Z)(),
          { address: s } = (0, o.useAccount)(),
          d = (0, l.useRef)(null),
          c = (0, l.useRef)(null),
          [h, m] = (0, l.useState)(void 0),
          {
            data: p,
            writeContract: g,
            isPending: j,
          } = (0, F.useWriteContract)(),
          b = (0, f.Z)("MintableToken"),
          { borrowable: N, debt: y } = v(t.address),
          [w, Z] = (0, l.useState)("Confirm"),
          [V, M] = (0, l.useState)(!1),
          [D, W] = (0, l.useState)(!1),
          [U, z] = (0, l.useState)(void 0),
          [H, K] = (0, l.useState)(void 0),
          [$, P] = (0, l.useState)(BigInt(0)),
          { balance: G, decimals: Y, symbol: J } = (0, S.Z)(H),
          { isApproved: Q, refetch: X } = (0, R.Z)(
            H,
            a.address,
            (0, k.v)(null != h ? h : "0", null != Y ? Y : 18)
          );
        (0, l.useEffect)(() => {
          K(b.address);
        }, [b]),
          (0, l.useEffect)(() => {
            void 0 !== p && z(p);
          }, [p]),
          (0, l.useEffect)(() => {
            V || Q || void 0 === H || H.toLowerCase() === x.EO[n].toLowerCase()
              ? V
                ? D
                  ? Z("Confirm")
                  : Z("Borrow")
                : Z("Repay")
              : Z("Approve");
          }, [Q, V, H, x.EO, n]);
        let ee = (0, i.d)(N && N.length > 0 ? N[1] : BigInt(0));
        return (
          (0, l.useEffect)(() => {
            G && y && (y > G ? P(G) : P(y));
          }, [G, y, U]),
          (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
              className: "",
              children: [
                (0, r.jsx)(_._, {
                  htmlFor: "debtAdd",
                  className: "text-muted-foreground",
                  children: "Repay",
                }),
                (0, r.jsx)(B.I, {
                  type: "number",
                  name: "debtAdd",
                  min: "0",
                  placeholder: "Enter the amount",
                  className:
                    "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                  disabled: void 0 === H || V,
                  ref: d,
                  onChange: (e) => {
                    "" === e.target.value ? W(!1) : W(!0), m(e.target.value);
                  },
                }),
                (0, r.jsx)("div", {
                  className: "mt-4",
                  children:
                    void 0 !== $ &&
                    (0, r.jsxs)("div", {
                      className:
                        "flex cursor-pointer items-center space-x-2 text-sm text-foreground transition-all duration-200 ease-in hover:opacity-60",
                      onClick: () => {
                        var e;
                        T(d, (0, E.b)($, null != Y ? Y : 18)),
                          m(
                            null === (e = d.current) || void 0 === e
                              ? void 0
                              : e.value
                          ),
                          null !== d.current &&
                            (M(!1),
                            d.current.focus(),
                            null !== c.current &&
                              ((c.current.value = ""), W(!0)));
                      },
                      children: [
                        (0, r.jsx)(C, { className: "h-6 w-6" }),
                        (0, r.jsxs)("div", {
                          children: [
                            "Max Repay:",
                            " ",
                            (0, r.jsxs)("code", {
                              children: [
                                (0, E.b)($, null != Y ? Y : 18),
                                " ",
                                J,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
                (0, r.jsx)(q.Z, {
                  className:
                    "mt-4 bg-gradient-to-l from-transparent to-lime-500 opacity-30",
                }),
                (0, r.jsxs)("div", {
                  className: "mt-4",
                  children: [
                    (0, r.jsx)(_._, {
                      htmlFor: "debtRemove",
                      className: "text-muted-foreground",
                      children: "Borrow",
                    }),
                    (0, r.jsx)(B.I, {
                      type: "number",
                      name: "debtRemove",
                      min: "0",
                      placeholder: "Enter the amount",
                      className:
                        "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                      disabled: void 0 === H || D,
                      ref: c,
                      onChange: (e) => {
                        "" === e.target.value ? M(!1) : M(!0),
                          m(e.target.value);
                      },
                    }),
                    (0, r.jsx)("div", {
                      className: "mt-4",
                      children:
                        void 0 !== G &&
                        (0, r.jsxs)("div", {
                          className:
                            "flex cursor-pointer items-center space-x-2 text-foreground transition-all duration-200 ease-in hover:text-lime-500",
                          onClick: () => {
                            var e;
                            T(c, ee),
                              m(
                                null === (e = c.current) || void 0 === e
                                  ? void 0
                                  : e.value
                              ),
                              null !== c.current &&
                                (W(!1),
                                c.current.focus(),
                                null !== d.current &&
                                  ((d.current.value = ""), M(!0)));
                          },
                          children: [
                            (0, r.jsx)(C, { className: "h-6 w-6" }),
                            (0, r.jsxs)("div", {
                              className: "text-base",
                              children: [
                                "Max Borrow:",
                                " ",
                                (0, r.jsxs)("code", { children: [ee, " ", J] }),
                              ],
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center justify-center",
                  children: [
                    (0, r.jsx)(O.Z, {
                      icon: (0, r.jsx)(I, {}),
                      isLoading: !0 === j,
                      className: "my-4 flex flex-1 text-lg font-semibold",
                      disabled: void 0 !== U,
                      onClick: () => {
                        a.abi &&
                          a.address &&
                          Y &&
                          (V &&
                            h &&
                            H &&
                            g({
                              abi: a.abi,
                              address: a.address,
                              chainId: n,
                              functionName: "borrow",
                              args: [t.address, (0, k.v)(h, Y), s],
                            }),
                          D &&
                            h &&
                            H &&
                            (Q
                              ? g({
                                  abi: a.abi,
                                  address: a.address,
                                  chainId: n,
                                  functionName: "repay",
                                  args: [t.address, (0, k.v)(h, Y)],
                                })
                              : g({
                                  abi: A.Wo,
                                  address: H,
                                  chainId: n,
                                  functionName: "approve",
                                  args: [a.address, x.Uf],
                                })));
                      },
                      children: w,
                    }),
                    U &&
                      (0, r.jsx)(L.Z, {
                        open: !0,
                        hash: U,
                        onOpenChange: () => {
                          z(void 0);
                        },
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var M = a(40186);
      function D(e, t) {
        null !== e.current && (e.current.value = t);
      }
      function W(e) {
        let { vault: t } = e,
          a = (0, f.Z)("VaultFactory"),
          n = (0, u.Z)(),
          { address: s } = (0, o.useAccount)(),
          i = (0, l.useRef)(null),
          c = (0, l.useRef)(null),
          [h, m] = (0, l.useState)(void 0),
          { collaterals: v, isLoading: p } = (0, d.Z)(),
          [g, j] = (0, l.useState)(void 0),
          {
            data: b,
            writeContract: N,
            isPending: y,
          } = (0, F.useWriteContract)(),
          [w, Z] = (0, l.useState)("Confirm"),
          [T, V] = (0, l.useState)(!1),
          [W, U] = (0, l.useState)(!1),
          [z, H] = (0, l.useState)(void 0);
        (0, l.useEffect)(() => {
          void 0 !== b && H(b);
        }, [b]);
        let { balance: K, decimals: $, symbol: P } = (0, S.Z)(g);
        console.log(g, K, $, P, "TUCHKAAA");
        let { isApproved: G, refetch: Y } = (0, R.Z)(
          g,
          a.address,
          (0, k.v)(null != h ? h : "0", null != $ ? $ : 18)
        );
        (0, l.useEffect)(() => {
          T || G || void 0 === g || g.toLowerCase() === x.EO[n].toLowerCase()
            ? T
              ? W
                ? Z("Confirm")
                : Z("Withdraw")
              : Z("Deposit")
            : Z("Approve");
        }, [G, T, g, x.EO, n]);
        let J = "0";
        if (Array.isArray(t.collateralInfo)) {
          for (let e of (console.log(t.collateralInfo, "collateralInfo"),
          t.collateralInfo))
            if (
              (console.log(e, "collateralData"),
              e.address.toLowerCase() ===
                (null == g ? void 0 : g.toLowerCase()))
            ) {
              J = e.maxWithdrawable;
              break;
            }
        }
        return (0, r.jsxs)("div", {
          className: "py-3",
          children: [
            (0, r.jsx)(M.Z, {
              collaterals: v,
              placeholder: "Select a collateral",
              className: "w-full",
              value: g,
              onValueChange: (e) => {
                j(e),
                  U(!1),
                  V(!1),
                  null !== i.current &&
                    null !== c.current &&
                    ((i.current.value = ""), (c.current.value = ""));
              },
            }),
            (0, r.jsxs)("div", {
              className: "mt-4",
              children: [
                (0, r.jsx)(_._, {
                  htmlFor: "collateralAdd",
                  className: "text-muted-foreground",
                  children: "Deposit",
                }),
                (0, r.jsx)(B.I, {
                  type: "number",
                  name: "collateralAdd",
                  min: "0",
                  placeholder: "Enter the amount",
                  className:
                    "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                  disabled: void 0 === g || T,
                  ref: i,
                  onChange: (e) => {
                    "" === e.target.value ? U(!1) : U(!0), m(e.target.value);
                  },
                }),
                (0, r.jsx)("div", {
                  className: "mt-4",
                  children:
                    void 0 !== K &&
                    (0, r.jsxs)("div", {
                      className:
                        "flex cursor-pointer items-center space-x-2 text-foreground transition-all duration-200 ease-in hover:text-lime-500",
                      onClick: () => {
                        var e;
                        D(i, (0, E.b)(K, null != $ ? $ : 18)),
                          m(
                            null === (e = i.current) || void 0 === e
                              ? void 0
                              : e.value
                          ),
                          null !== i.current &&
                            (V(!1),
                            i.current.focus(),
                            null !== c.current &&
                              ((c.current.value = ""), U(!0)));
                      },
                      children: [
                        (0, r.jsx)(C, { className: "h-6 w-6" }),
                        (0, r.jsxs)("div", {
                          children: [
                            "Max Deposit:",
                            " ",
                            (0, r.jsxs)("code", {
                              children: [
                                (0, E.b)(K, null != $ ? $ : 18),
                                " ",
                                P,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                }),
                (0, r.jsx)(q.Z, {
                  className:
                    "mt-4 bg-gradient-to-l from-transparent to-lime-500 opacity-30",
                }),
                (0, r.jsxs)("div", {
                  className: "mt-4",
                  children: [
                    (0, r.jsx)(_._, {
                      htmlFor: "collateralRemove",
                      className: "text-muted-foreground",
                      children: "Withdraw",
                    }),
                    (0, r.jsx)(B.I, {
                      type: "number",
                      name: "collateralRemove",
                      min: "0",
                      placeholder: "Enter the amount",
                      className:
                        "w-full border-[0.5px] border-[#BAF7E9] border-opacity-20 bg-[#BAF7E9] bg-opacity-10",
                      disabled: void 0 === g || W,
                      ref: c,
                      onChange: (e) => {
                        "" === e.target.value ? V(!1) : V(!0),
                          m(e.target.value);
                      },
                    }),
                    (0, r.jsx)("div", {
                      className: "mt-4",
                      children:
                        void 0 !== K &&
                        (0, r.jsxs)("div", {
                          className:
                            "flex cursor-pointer items-center space-x-2 text-foreground transition-all duration-200 ease-in hover:text-lime-500",
                          onClick: () => {
                            var e;
                            D(c, J),
                              m(
                                null === (e = c.current) || void 0 === e
                                  ? void 0
                                  : e.value
                              ),
                              null !== c.current &&
                                (U(!1),
                                c.current.focus(),
                                null !== i.current &&
                                  ((i.current.value = ""), V(!0)));
                          },
                          children: [
                            (0, r.jsx)(C, { className: "h-6 w-6" }),
                            (0, r.jsxs)("div", {
                              children: [
                                "Max Withdraw:",
                                " ",
                                (0, r.jsxs)("code", { children: [J, " ", P] }),
                              ],
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mt-4 flex items-center justify-center",
                  children: [
                    (0, r.jsx)(O.Z, {
                      icon: (0, r.jsx)(I, {}),
                      isLoading: !0 === y,
                      className: "my-2 flex flex-1 text-lg font-semibold",
                      disabled: void 0 !== z,
                      onClick: () => {
                        if (
                          a.abi &&
                          a.address &&
                          $ &&
                          (T &&
                            h &&
                            g &&
                            (g.toLowerCase(),
                            x.EO[n].toLowerCase(),
                            N({
                              abi: a.abi,
                              address: a.address,
                              chainId: n,
                              functionName: "removeCollateral",
                              args: [t.address, g, (0, k.v)(h, $), s],
                            })),
                          W && h && g)
                        ) {
                          if (g.toLowerCase() == x.EO[n].toLowerCase()) {
                            N({
                              abi: [
                                {
                                  inputs: [
                                    {
                                      internalType: "address",
                                      name: "_vault",
                                      type: "address",
                                    },
                                  ],
                                  name: "addCollateralNative",
                                  outputs: [],
                                  stateMutability: "payable",
                                  type: "function",
                                },
                              ],
                              address: a.address,
                              chainId: n,
                              functionName: "addCollateralNative",
                              args: [t.address],
                              value: (0, k.v)(h, $),
                            });
                            return;
                          }
                          void 0 !== g &&
                            (G
                              ? N({
                                  abi: a.abi,
                                  address: a.address,
                                  chainId: n,
                                  functionName: "addCollateral",
                                  args: [t.address, g, (0, k.v)(h, $)],
                                })
                              : N({
                                  abi: A.Wo,
                                  address: g,
                                  chainId: n,
                                  functionName: "approve",
                                  args: [a.address, x.Uf],
                                }));
                        }
                      },
                      children: w,
                    }),
                    z &&
                      (0, r.jsx)(L.Z, {
                        open: !0,
                        hash: z,
                        onOpenChange: () => {
                          H(void 0);
                        },
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function U(e) {
        let { vault: t } = e;
        return (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className:
              "mt-4 flex flex-row items-start justify-center gap-4 text-sm",
            children: [
              (0, r.jsx)(y.Z, {
                className: "w-full",
                title: "Collateral",
                description:
                  "Stake $BEYOND to protect the protocol via automated liquidations",
                children: (0, r.jsx)(W, { vault: t }),
              }),
              (0, r.jsx)(y.Z, {
                className: "w-full",
                title: "Borrow / Repay",
                description:
                  "Stake $BEYOND to protect the protocol via automated liquidations and earn rewards in BEYOND",
                children: (0, r.jsx)(V, { vault: t }),
              }),
            ],
          }),
        });
      }
      function z(e) {
        var t, a;
        let { params: m } = e,
          { vault: x, isLoading: Z } = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              a = (0, c.Z)(),
              r = (0, l.useCallback)(() => {
                fetch("".concat(a, "/vaults/").concat(e))
                  .then((e) => e.json())
                  .then((e) => {
                    e && (o(!1), s(e));
                  });
              }, [a, e]),
              [n, s] = (0, l.useState)(void 0),
              [i, o] = (0, l.useState)(!0);
            return (
              (0, l.useEffect)(() => {
                r();
              }, [a, e]),
              (0, l.useEffect)(() => {
                let e;
                return (
                  t > 0 &&
                    (e = setInterval(() => {
                      r();
                    }, t)),
                  () => clearInterval(e)
                );
              }, []),
              { vault: n, isLoading: i, refetch: r }
            );
          })(m.slug, 5e3),
          { address: C } = (0, o.useAccount)();
        (0, n.useRouter)();
        let { collaterals: I } = (0, d.Z)(),
          { vaults: k, isLoading: E } = (function (e) {
            let t;
            let a = (0, c.Z)(),
              r = (0, u.Z)(),
              n = (0, f.Z)("Vault"),
              [s, i] = (0, l.useState)([]);
            (0, l.useEffect)(() => {
              e
                ? fetch("".concat(a, "/vaultsByUser/").concat(e))
                    .then((e) => {
                      if (!e.ok)
                        throw Error("HTTP error! status: ".concat(e.status));
                      return e.json();
                    })
                    .then((e) => {
                      Array.isArray(e)
                        ? i(e)
                        : (console.error("Expected an array but got:", e),
                          i([]));
                    })
                    .catch((e) => {
                      console.error("Failed to fetch vaults:", e), i([]);
                    })
                : i([]);
            }, [a, e]);
            let o = (0, h.useReadContracts)({
                contracts: s.map((e) => ({
                  abi: null == n ? void 0 : n.abi,
                  address: e.address,
                  chainId: r,
                  functionName: "name",
                })),
                query: {
                  refetchInterval: 5e3,
                  enabled: s.length > 0 && !!(null == n ? void 0 : n.abi),
                },
              }),
              d = (0, h.useReadContracts)({
                contracts: s.map((e) => ({
                  abi: null == n ? void 0 : n.abi,
                  address: e.address,
                  chainId: r,
                  functionName: "debt",
                })),
                query: {
                  refetchInterval: 5e3,
                  enabled: s.length > 0 && !!(null == n ? void 0 : n.abi),
                },
              });
            if (o.data && o.data.length > 0 && d.data && d.data.length > 0) {
              var m;
              t =
                null === (m = o.data) || void 0 === m
                  ? void 0
                  : m.map((e, t) => {
                      var a;
                      return {
                        address: null == s ? void 0 : s[t].address,
                        name: null == e ? void 0 : e.result,
                        debt:
                          null === (a = d.data) || void 0 === a
                            ? void 0
                            : a[t].result,
                      };
                    });
            }
            return { vaults: t, isLoading: !t };
          })(null == x ? void 0 : x.owner);
        null == x || null === (t = x.owner) || void 0 === t || t.toLowerCase(),
          null == C || C.toLowerCase();
        let { debt: A, cashback: F, borrowRate: S, isLoading: R } = v(m.slug);
        return Z
          ? (0, r.jsx)("div", {
              className:
                "container mt-20 items-center p-10 text-center text-sm",
              children: (0, r.jsx)(N.Z, {}),
            })
          : (null == k ||
              k.map((e) => ({
                value: e.address || "",
                label: e.name || "",
                icon: (0, r.jsx)("img", {
                  alt: "",
                  src: "https://effigy.im/a/".concat(e.address, ".png"),
                  width: 16,
                  height: 16,
                }),
              })),
            console.log(x, "TVAAAA"),
            (0, r.jsx)(s.NextIntlClientProvider, {
              locale: "en",
              children: (0, r.jsx)("div", {
                className: "container items-center p-10 text-sm text-taolime",
                children:
                  x &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "grid auto-rows-max grid-cols-2 gap-4 lg:grid-cols-4 ",
                        children: [
                          (0, r.jsx)(y.Z, {
                            title: "Total Collateral",
                            children: (0, r.jsx)(p.Z, {
                              children: null == x ? void 0 : x.tvl,
                            }),
                          }),
                          (0, r.jsx)(y.Z, {
                            title: "Vault Composition",
                            children: (0, r.jsx)("div", {
                              className: "flex flex-wrap",
                              children:
                                Array.isArray(x.collateralInfo) &&
                                (null === (a = x.collateralInfo) || void 0 === a
                                  ? void 0
                                  : a.map((e, t) => {
                                      var a, l, n;
                                      let s =
                                          null === (a = x.collaterals) ||
                                          void 0 === a
                                            ? void 0
                                            : a[t],
                                        i =
                                          null == I
                                            ? void 0
                                            : I.find(
                                                (e) =>
                                                  e.address.toLowerCase() ===
                                                  (null == s
                                                    ? void 0
                                                    : s.toLowerCase())
                                              );
                                      return s && i
                                        ? (0, r.jsxs)(
                                            "div",
                                            {
                                              className:
                                                "flex items-center space-x-2",
                                              children: [
                                                (0, r.jsx)(w.Z, {
                                                  symbol: i.tokenName,
                                                  width: 30,
                                                  height: 30,
                                                }),
                                                (0, r.jsx)("div", {
                                                  children: (0, r.jsx)(g.Z, {
                                                    children:
                                                      null !== (l = e.amount) &&
                                                      void 0 !== l
                                                        ? l
                                                        : 0,
                                                  }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "text-sm text-muted-foreground",
                                                  children: [
                                                    "~",
                                                    (0, r.jsx)(p.Z, {
                                                      children:
                                                        null !==
                                                          (n = e.valueInUsd) &&
                                                        void 0 !== n
                                                          ? n
                                                          : 0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            s
                                          )
                                        : null;
                                    })),
                            }),
                          }),
                          (0, r.jsx)(y.Z, {
                            title: "Total Debt",
                            children: (0, r.jsx)(p.Z, {
                              children: null == x ? void 0 : x.debt,
                            }),
                          }),
                          (0, r.jsxs)(y.Z, {
                            title: "Fees from Staking",
                            children: [
                              F
                                ? (0, r.jsx)(p.Z, { children: (0, i.d)(F) })
                                : (0, r.jsx)(r.Fragment, { children: "$0.00" }),
                              R && (0, r.jsx)(N.Z, {}),
                            ],
                          }),
                          (0, r.jsx)(y.Z, {
                            title: "Health Factor",
                            children: (0, r.jsx)(b.Z, {
                              value: parseFloat(
                                parseFloat(x.liquidationFactor).toFixed(2)
                              ),
                              threshold: parseFloat("1"),
                            }),
                          }),
                          (0, r.jsx)(y.Z, {
                            title: "Liquidation Threshold",
                            children: (0, r.jsx)(p.Z, {
                              children: x.liquidationThreshold,
                            }),
                          }),
                          (0, r.jsx)(y.Z, {
                            title: "Debt Redemption Threshold",
                            children: (0, r.jsx)(p.Z, {
                              children: x.redemptionThreshold,
                            }),
                          }),
                          (0, r.jsx)(y.Z, {
                            title: "Fee",
                            children:
                              !R && S
                                ? (0, r.jsx)("div", {
                                    className: "text-lime-700",
                                    children: (0, r.jsx)(j, { children: S }),
                                  })
                                : (0, r.jsx)(N.Z, {}),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-4",
                        children: (0, r.jsx)(U, { vault: x }),
                      }),
                    ],
                  }),
              }),
            }));
      }
    },
    81674: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = a(30982);
      function l(e) {
        let { currency: t, children: a } = e,
          l = (0, r.useFormatter)();
        return a
          ? l.number(parseFloat(a.toString()), {
              style: "currency",
              currency: "USD",
            })
          : null;
      }
    },
    59409: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = a(3827);
      function l(e) {
        let { value: t, threshold: a } = e;
        return (0, r.jsx)("span", {
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
    22782: function (e, t, a) {
      "use strict";
      a.d(t, {
        I: function () {
          return s;
        },
      });
      var r = a(3827),
        l = a(64090),
        n = a(22169);
      let s = l.forwardRef((e, t) => {
        let { className: a, type: l, ...s } = e;
        return (0, r.jsx)("input", {
          type: l,
          className: (0, n.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            a
          ),
          ref: t,
          ...s,
        });
      });
      s.displayName = "Input";
    },
    97787: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = a(3827),
        l = a(8792),
        n = a(80037),
        s = a(22169),
        i = a(57180),
        o = a(9208),
        d = a(17247),
        c = a(68575);
      function u(e) {
        let { hash: t, open: a, onOpenChange: u, children: f } = e,
          h = (0, i.Z)();
        return (0, r.jsx)(o.Vq, {
          defaultOpen: a,
          onOpenChange: u,
          children: (0, r.jsx)(o.cZ, {
            className: "sm:max-w-[425px]",
            children: (0, r.jsxs)(o.fK, {
              children: [
                (0, r.jsx)(o.$N, { children: "Transaction in progress..." }),
                (0, r.jsxs)("div", {
                  className: "mt-4 text-sm text-muted-foreground",
                  children: [
                    (0, r.jsx)(c.Z, {
                      txHash: t,
                      status: "success",
                      children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, r.jsx)("div", {
                            children: "Your transaction has been processed.",
                          }),
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(n.Z, {
                              className: "text-green-500",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(l.default, {
                              href: (0, s.G)(h, null != t ? t : ""),
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "text-lime-500 transition-all duration-200 ease-in-out hover:underline",
                              children: "View on block explorer",
                            }),
                          }),
                          (0, r.jsx)("div", { children: f }),
                        ],
                      }),
                    }),
                    (0, r.jsx)(c.Z, {
                      txHash: t,
                      status: "pending",
                      children: (0, r.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, r.jsx)("div", {
                            children: "Your transaction is being processed.",
                          }),
                          (0, r.jsx)("div", { children: (0, r.jsx)(d.Z, {}) }),
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(l.default, {
                              href: (0, s.G)(h, null != t ? t : ""),
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
                    (0, r.jsx)(c.Z, {
                      txHash: t,
                      status: "error",
                      children: (0, r.jsx)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: (0, r.jsx)("div", {
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
    12647: function (e, t, a) {
      "use strict";
      a.d(t, {
        _: function () {
          return d;
        },
      });
      var r = a(3827),
        l = a(64090),
        n = a(24602),
        s = a(57742),
        i = a(22169);
      let o = (0, s.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        d = l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(n.f, {
            ref: t,
            className: (0, i.cn)(o(), a),
            ...l,
          });
        });
      d.displayName = n.f.displayName;
    },
    73568: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = a(3827);
      function l() {
        return (0, r.jsx)("progress", {
          className: "progress progress-error max-w-56",
        });
      }
    },
    40186: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return N;
        },
      });
      var r = a(3827),
        l = a(52235),
        n = a(22169),
        s = a(64090),
        i = a(40370),
        o = a(23441),
        d = a(85159),
        c = a(80037);
      let u = i.fC,
        f = i.ZA,
        h = i.B4,
        m = s.forwardRef((e, t) => {
          let { className: a, children: l, ...s } = e;
          return (0, r.jsxs)(i.xz, {
            ref: t,
            className: (0, n.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              a
            ),
            ...s,
            children: [
              l,
              (0, r.jsx)(i.JO, {
                asChild: !0,
                children: (0, r.jsx)(o.Z, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      m.displayName = i.xz.displayName;
      let x = s.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(i.u_, {
          ref: t,
          className: (0, n.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, r.jsx)(d.Z, { className: "h-4 w-4" }),
        });
      });
      x.displayName = i.u_.displayName;
      let v = s.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(i.$G, {
          ref: t,
          className: (0, n.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...l,
          children: (0, r.jsx)(o.Z, { className: "h-4 w-4" }),
        });
      });
      v.displayName = i.$G.displayName;
      let p = s.forwardRef((e, t) => {
        let { className: a, children: l, position: s = "popper", ...o } = e;
        return (0, r.jsx)(i.h_, {
          children: (0, r.jsxs)(i.VY, {
            ref: t,
            className: (0, n.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === s &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: s,
            ...o,
            children: [
              (0, r.jsx)(x, {}),
              (0, r.jsx)(i.l_, {
                className: (0, n.cn)(
                  "p-1",
                  "popper" === s &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: l,
              }),
              (0, r.jsx)(v, {}),
            ],
          }),
        });
      });
      p.displayName = i.VY.displayName;
      let g = s.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(i.__, {
          ref: t,
          className: (0, n.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
          ...l,
        });
      });
      g.displayName = i.__.displayName;
      let j = s.forwardRef((e, t) => {
        let { className: a, children: l, ...s } = e;
        return (0, r.jsxs)(i.ck, {
          ref: t,
          className: (0, n.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...s,
          children: [
            (0, r.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, r.jsx)(i.wU, {
                children: (0, r.jsx)(c.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, r.jsx)(i.eT, { children: l }),
          ],
        });
      });
      (j.displayName = i.ck.displayName),
        (s.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(i.Z0, {
            ref: t,
            className: (0, n.cn)("-mx-1 my-1 h-px bg-muted", a),
            ...l,
          });
        }).displayName = i.Z0.displayName);
      var b = a(92478);
      function N(e) {
        let {
          collaterals: t,
          emptyText: a,
          onValueChange: s,
          defaultValue: i = "",
          placeholder: o = "Select collateral",
          value: d = "",
          className: c = "",
        } = e;
        return t
          ? (0, r.jsx)("div", {
              className: "rounded-lg bg-taolime bg-opacity-10 p-px",
              children: (0, r.jsxs)(u, {
                onValueChange: s,
                defaultValue: i,
                value: d,
                children: [
                  (0, r.jsx)(m, {
                    className: (0, n.cn)(
                      c,
                      "rounded-lg bg-gray-800 bg-opacity-10 text-white text-opacity-60"
                    ),
                    children: (0, r.jsx)(h, { placeholder: o }),
                  }),
                  (0, r.jsx)(p, {
                    children: (0, r.jsxs)(f, {
                      children: [
                        (0, r.jsx)(g, { children: "Available Collaterals" }),
                        a &&
                          (0, r.jsx)(
                            j,
                            {
                              value: "1",
                              children: (0, r.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  (0, r.jsx)("div", {
                                    children: (0, r.jsx)(l.Z, {}),
                                  }),
                                  (0, r.jsx)("div", { children: a }),
                                ],
                              }),
                            },
                            "empty"
                          ),
                        t &&
                          t.map((e, t) =>
                            (0, r.jsx)(
                              j,
                              {
                                value: e.address,
                                children: (0, r.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, r.jsx)(b.Z, {
                                      symbol: e.tokenName,
                                      width: 24,
                                      height: 24,
                                    }),
                                    (0, r.jsx)("div", {
                                      children: e.tokenName,
                                    }),
                                  ],
                                }),
                              },
                              e.address
                            )
                          ),
                      ],
                    }),
                  }),
                ],
              }),
            })
          : (0, r.jsx)(r.Fragment, {});
      }
    },
    95453: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = a(3827),
        l = a(64090),
        n = a(51014),
        s = a(22169);
      let i = l.forwardRef((e, t) => {
        let {
          className: a,
          orientation: l = "horizontal",
          decorative: i = !0,
          ...o
        } = e;
        return (0, r.jsx)(n.f, {
          ref: t,
          decorative: i,
          orientation: l,
          className: (0, s.cn)(
            "shrink-0 bg-border",
            "horizontal" === l ? "h-[1px] w-full" : "h-full w-[1px]",
            a
          ),
          ...o,
        });
      });
      i.displayName = n.f.displayName;
    },
    32543: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = a(3827);
      function l(e) {
        let {
          onClick: t,
          children: a,
          title: l,
          className: n = "",
          description: s = "",
        } = e;
        return (0, r.jsx)("div", {
          className: "h-full grow ".concat(n, " rounded-lg p-px"),
          onClick: t,
          children: (0, r.jsxs)("div", {
            className:
              "gradient-bg flex h-full w-full flex-col justify-between     rounded-lg border-[0.5px] border-[#3FEAC1] border-opacity-20 px-4",
            children: [
              l &&
                (0, r.jsx)("div", {
                  className: "px-3 pt-5 text-[#BAF7E9]",
                  children: (0, r.jsxs)("div", {
                    className: "flex flex-col items-start justify-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "w-full flex-1 md:text-lg lg:text-xl",
                        children: l,
                      }),
                      (0, r.jsx)("p", {
                        className: "text-sm opacity-50",
                        children: s,
                      }),
                    ],
                  }),
                }),
              (0, r.jsx)("div", { className: "p-3 text-2xl", children: a }),
            ],
          }),
        });
      }
    },
    46892: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var r = a(78065),
        l = a(64090);
      function n() {
        let e = (0, r.Z)(),
          [t, a] = (0, l.useState)(void 0),
          [n, s] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            fetch("".concat(e, "/collaterals"))
              .then((e) => e.json())
              .then(async (t) => {
                let r = t.map(async (t) => {
                    let a = await fetch(
                      "".concat(e, "/collaterals/price/").concat(t.address)
                    ).then((e) => e.json());
                    return { ...t, price: a.priceHuman };
                  }),
                  l = await Promise.all(r);
                s(!1), a(l);
              });
          }, [e]),
          { collaterals: t, isLoading: n }
        );
      }
    },
    24602: function (e, t, a) {
      "use strict";
      a.d(t, {
        f: function () {
          return s;
        },
      });
      var r = a(14749),
        l = a(64090),
        n = a(29586);
      let s = (0, l.forwardRef)((e, t) =>
        (0, l.createElement)(
          n.WV.label,
          (0, r.Z)({}, e, {
            ref: t,
            onMouseDown: (t) => {
              var a;
              null === (a = e.onMouseDown) || void 0 === a || a.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault();
            },
          })
        )
      );
    },
    20073: function (e, t, a) {
      "use strict";
      function r(e, t) {
        let [a, r = "0"] = e.split("."),
          l = a.startsWith("-");
        if ((l && (a = a.slice(1)), (r = r.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(".".concat(r))) &&
            (a = "".concat(BigInt(a) + 1n)),
            (r = "");
        else if (r.length > t) {
          let [e, l, n] = [r.slice(0, t - 1), r.slice(t - 1, t), r.slice(t)],
            s = Math.round(Number("".concat(l, ".").concat(n)));
          (r =
            s > 9
              ? ""
                  .concat(BigInt(e) + BigInt(1), "0")
                  .padStart(e.length + 1, "0")
              : "".concat(e).concat(s)).length > t &&
            ((r = r.slice(1)), (a = "".concat(BigInt(a) + 1n))),
            (r = r.slice(0, t));
        } else r = r.padEnd(t, "0");
        return BigInt(
          ""
            .concat(l ? "-" : "")
            .concat(a)
            .concat(r)
        );
      }
      a.d(t, {
        v: function () {
          return r;
        },
      });
    },
    71003: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useBalance: function () {
            return o;
          },
        });
      var r = a(5667),
        l = a(73054),
        n = a(38760),
        s = a(43089),
        i = a(42887);
      function o() {
        var e, t;
        let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: o, query: d = {} } = a,
          c = (0, i.useConfig)(a),
          u = (0, s.useChainId)(),
          f = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: a } = t,
                  { address: l, scopeKey: n, ...s } = a[1];
                if (!l) throw Error("address is required");
                let i = await (0, r.s)(e, { ...s, address: l });
                return null != i ? i : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["balance", (0, l.O)(e)];
              })(t),
            };
          })(c, {
            ...a,
            chainId: null !== (e = a.chainId) && void 0 !== e ? e : u,
          }),
          h = !!(o && (null === (t = d.enabled) || void 0 === t || t));
        return (0, n.aM)({ ...d, ...f, enabled: h });
      }
    },
    69908: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          useReadContract: function () {
            return o;
          },
        });
      var r = a(31723),
        l = a(73054),
        n = a(38760),
        s = a(43089),
        i = a(42887);
      function o() {
        var e, t, a;
        let o =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: d, address: c, functionName: u, query: f = {} } = o,
          h = (0, i.useConfig)(o),
          m = (0, s.useChainId)(),
          x = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(a) {
                let { queryKey: l } = a,
                  n = t.abi;
                if (!n) throw Error("abi is required");
                let { address: s, functionName: i, scopeKey: o, ...d } = l[1];
                if (!s) throw Error("address is required");
                if (!i) throw Error("functionName is required");
                let c = d.args;
                return (0, r.L)(e, {
                  abi: n,
                  address: s,
                  functionName: i,
                  args: c,
                  ...d,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...a } = e;
                return ["readContract", (0, l.O)(a)];
              })(t),
            };
          })(h, {
            ...o,
            chainId: null !== (e = o.chainId) && void 0 !== e ? e : m,
          }),
          v = !!(
            c &&
            d &&
            u &&
            (null === (t = f.enabled) || void 0 === t || t)
          );
        return (0, n.aM)({
          ...f,
          ...x,
          enabled: v,
          structuralSharing:
            null !== (a = f.structuralSharing) && void 0 !== a ? a : n.if,
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        3877, 2644, 6054, 703, 982, 857, 2150, 4404, 5998, 1735, 367, 9349,
        4980, 7649, 2971, 8069, 1744,
      ],
      function () {
        return e((e.s = 77308));
      }
    ),
      (_N_E = e.O());
  },
]);
