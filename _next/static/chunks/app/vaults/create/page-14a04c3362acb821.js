(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5835],
  {
    41214: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 46999));
    },
    64363: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let a = (0, r(87461).Z)("CircleFadingPlus", [
        ["path", { d: "M12 2a10 10 0 0 1 7.38 16.75", key: "175t95" }],
        ["path", { d: "M12 8v8", key: "napkw2" }],
        ["path", { d: "M16 12H8", key: "1fr5h0" }],
        ["path", { d: "M2.5 8.875a10 10 0 0 0-.5 3", key: "1vce0s" }],
        ["path", { d: "M2.83 16a10 10 0 0 0 2.43 3.4", key: "o3fkw4" }],
        ["path", { d: "M4.636 5.235a10 10 0 0 1 .891-.857", key: "1szpfk" }],
        ["path", { d: "M8.644 21.42a10 10 0 0 0 7.631-.38", key: "9yhvd4" }],
      ]);
    },
    46999: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return M;
          },
        });
      var a = r(3827),
        n = r(64090);
      /**
       * @license lucide-react v0.330.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let s = (0, r(87461).Z)("CircleDollarSign", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
        ],
        ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ]);
      var l = r(64363),
        i = r(30982),
        d = r(20073),
        o = r(60989),
        c = r(4817);
      function u(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wei";
        return (0, d.v)(e, c.ez[t]);
      }
      var f = r(10035),
        m = r(39296),
        x = r(72450),
        h = r(14980),
        p = r(84098),
        v = r(52926),
        g = r(22009),
        j = r(46892),
        b = r(57180),
        y = r(37046),
        N = r(87378),
        w = r(81674),
        Z = r(36612),
        I = r(60332),
        k = r(59409),
        C = r(22782),
        S = r(97787),
        B = r(12647),
        E = r(11963),
        _ = r(40186),
        F = r(46989);
      function M() {
        let e = (0, p.Z)("VaultFactoryZapper"),
          t = (0, b.Z)(),
          { address: r } = (0, m.useAccount)(),
          {
            data: c,
            writeContract: M,
            isPending: V,
            error: R,
          } = (0, x.useWriteContract)(),
          [H, A] = (0, n.useState)(void 0),
          q = (0, n.useRef)(null),
          z = (0, n.useRef)(null),
          { statistics: D } = (0, y.Z)(),
          [L, O] = (0, n.useState)(0),
          [P, U] = (0, n.useState)(!1),
          [Y, K] = (0, n.useState)(0),
          [T, G] = (0, n.useState)(!1),
          [W, $] = (0, n.useState)("Create Vault"),
          [X, J] = (0, n.useState)(!1),
          [Q, ee] = (0, n.useState)(void 0),
          [et, er] = (0, n.useState)(void 0),
          { collaterals: ea, isLoading: en } = (0, j.Z)(),
          [es, el] = (0, n.useState)(void 0),
          { balance: ei, decimals: ed, symbol: eo } = (0, g.Z)(es),
          { isApproved: ec, refetch: eu } = (0, N.Z)(
            es,
            e.address,
            (0, d.v)(null != Q ? Q : "0", null != ed ? ed : 18)
          ),
          {
            maxBorrowHuman: ef,
            maxBorrow: em,
            healthFactorHuman: ex,
            feeHuman: eh,
            netReceivedHuman: ep,
            stableValueHuman: ev,
            feePercentageHuman: eg,
          } = (function (e, t, r, a) {
            let n =
                null == t
                  ? void 0
                  : t.find(
                      (t) =>
                        t.address.toLowerCase() ===
                        (null == e ? void 0 : e.toLowerCase())
                    ),
              s = BigInt(0),
              l = BigInt(0),
              i = BigInt(0),
              o = BigInt(0),
              c = BigInt(0),
              f = BigInt(0),
              m = u("100"),
              x = u(null != a ? a : "0");
            if (n && n.price && r) {
              let e = u("1");
              (i = (e * BigInt(n.mcr)) / BigInt(100)),
                (s = ((l = ((0, d.v)(n.price, 18) * u(r)) / e) * e) / i),
                (o = (x * (c = u(n.borrowRate.toString()))) / e),
                (c *= BigInt(100)),
                (f = x - o),
                x > BigInt(0) && (m = (l * e) / x);
            }
            return {
              maxBorrow: s,
              maxBorrowHuman: (0, v.d)(s),
              stableValue: l,
              stableValueHuman: (0, v.d)(l),
              mcr: i,
              mcrHuman: (0, v.d)(i),
              fee: o,
              feeHuman: (0, v.d)(o),
              netReceived: f,
              netReceivedHuman: (0, v.d)(f),
              healthFactor: m,
              healthFactorHuman: (0, v.d)(m),
              feePercentage: c,
              feePercentageHuman: (0, v.d)(c),
            };
          })(es, ea, Q, et);
        return (
          (0, n.useEffect)(() => {
            console.log(R);
          }, [R]),
          (0, n.useEffect)(() => {
            es &&
              eo &&
              Q &&
              (0, d.v)(Q, null != ed ? ed : 18) > BigInt(0) &&
              (ec || es.toLowerCase() == h.EO[t].toLowerCase()
                ? $("Create new Vault")
                : $("Approve ".concat(eo)));
          }, [Q, es, ed, eo, ec]),
          (0, n.useEffect)(() => {
            O(0), K(0), ee(""), er(""), U(!1), G(!1), A(void 0), J(!1);
          }, [es]),
          (0, n.useEffect)(() => {
            A(c), void 0 == c && J(!1);
          }, [c]),
          (0, n.useEffect)(() => {
            ei &&
              ed &&
              !0 == P &&
              (G(!1), ee((0, o.b)((ei / BigInt(100)) * BigInt(L), ed)));
          }, [L, P]),
          (0, n.useEffect)(() => {
            et && em && u(et) > em && (G(!1), er(ef));
          }, [et, em, ef]),
          (0, n.useEffect)(() => {
            em && !0 == T && er((0, o.b)((em / BigInt(100)) * BigInt(Y), 18));
          }, [Y, T, em]),
          (0, n.useEffect)(() => {
            if (ei && ed && !1 == P && Q) {
              let e = (0, d.v)(Q, ed);
              if (e > ei && q.current) {
                ee((0, o.b)(ei, ed)), (q.current.value = (0, o.b)(ei, ed));
                return;
              }
              O(parseInt(((e * BigInt(100)) / ei).toString()));
            }
          }, [Q]),
          (0, n.useEffect)(() => {
            em &&
              et &&
              !1 == T &&
              K(parseInt(((u(et) * BigInt(100)) / em).toString()));
          }, [et, em]),
          (0, a.jsxs)(i.NextIntlClientProvider, {
            locale: "en",
            children: [
              (0, a.jsx)(E.Z, {
                children: (0, a.jsx)("h1", { children: "Create Your Vault" }),
              }),
              (0, a.jsx)("div", {
                className:
                  "container flex items-center justify-center p-2 text-sm sm:p-10",
                children: (0, a.jsx)("div", {
                  className:
                    "mt-4 max-w-[640px] flex-1 rounded-lg bg-gradient-to-tr from-taolime to-transparent p-px shadow-2xl",
                  children: (0, a.jsxs)("div", {
                    className: "rounded-lg bg-deepblue p-2 sm:p-10",
                    children: [
                      (0, a.jsx)("div", {
                        className: "mb-1",
                        children: (0, a.jsx)(B._, {
                          className: "text-muted-foreground",
                          children: "Select collateral",
                        }),
                      }),
                      (0, a.jsx)(_.Z, {
                        collaterals: ea,
                        placeholder: "Select a collateral",
                        className: "w-full",
                        value: es,
                        onValueChange: (e) => {
                          el(e);
                        },
                      }),
                      (0, a.jsx)(I.Z, { className: "mt-4" }),
                      (0, a.jsxs)("div", {
                        className: "mt-4",
                        children: [
                          (0, a.jsx)(B._, {
                            htmlFor: "collateralAdd",
                            className: "text-muted-foreground",
                            children: "Deposit",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "mt-2 flex items-center rounded-lg border border-white p-2",
                            children: [
                              (0, a.jsx)(C.I, {
                                type: "number",
                                name: "collateralAdd",
                                min: "0",
                                placeholder: "Deposit amount",
                                className: "w-full bg-deepblue",
                                disabled: void 0 === es,
                                ref: q,
                                value: Q,
                                onChange: (e) => {
                                  U(!1), ee(e.target.value);
                                },
                              }),
                              void 0 !== ei &&
                                (0, a.jsx)("div", {
                                  className:
                                    "flex cursor-pointer items-center justify-end space-x-2 text-pretty text-muted-foreground text-taolime transition-all duration-200 ease-in hover:text-lime-500",
                                  onClick: () => {
                                    U(!0), O(100);
                                  },
                                  children: "MAX",
                                }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-4",
                            children:
                              void 0 !== ei &&
                              (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)("div", {
                                  className:
                                    "flex flex-wrap justify-between text-pretty",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      children: [
                                        "Available:",
                                        " ",
                                        (0, a.jsx)(Z.Z, {
                                          children: (0, o.b)(
                                            ei,
                                            null != ed ? ed : 18
                                          ),
                                        }),
                                        " ",
                                        eo,
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center justify-center space-x-2 align-middle text-sm text-muted-foreground",
                                      children: [
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)(s, {}),
                                        }),
                                        (0, a.jsx)("div", {
                                          children: (0, a.jsx)(w.Z, {
                                            children: ev,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(I.Z, { className: "mt-4" }),
                      (0, a.jsxs)("div", {
                        className: "mt-4",
                        children: [
                          (0, a.jsx)(B._, {
                            htmlFor: "borrowAmount",
                            className: "text-muted-foreground",
                            children: "Borrow ALTA",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "mt-2 flex items-center rounded-lg border border-white p-2",
                            children: [
                              (0, a.jsx)(C.I, {
                                type: "number",
                                name: "borrowAmount",
                                min: "0",
                                placeholder: "Borrow amount",
                                className: "flex-1 bg-deepblue",
                                disabled: em === BigInt(0),
                                ref: z,
                                value: et,
                                onChange: (e) => {
                                  G(!1), er(e.target.value);
                                },
                              }),
                              (0, a.jsx)("div", {
                                children:
                                  void 0 !== ei &&
                                  (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)("div", {
                                      className:
                                        "flex cursor-pointer items-center justify-end space-x-2 text-pretty text-muted-foreground text-taolime transition-all duration-200 ease-in hover:text-lime-500",
                                      onClick: () => {
                                        G(!0), K(100);
                                      },
                                      children: "MAX",
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(I.Z, { className: "mb-4 mt-6" }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-wrap justify-between",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-col space-y-2 text-sm",
                            children: [
                              (0, a.jsx)("div", {
                                className: "font-semibold text-foreground",
                                children: "Fee",
                              }),
                              (0, a.jsx)("div", {
                                className: "text-muted-foreground",
                                children: (0, a.jsxs)("div", {
                                  className: "flex space-x-2",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)(Z.Z, { children: eh }),
                                        " ",
                                        "ALTA",
                                      ],
                                    }),
                                    (0, a.jsx)("div", {
                                      children: (0, a.jsxs)("code", {
                                        children: ["(", eg, "%)"],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col space-y-2 text-sm",
                            children: [
                              (0, a.jsx)("div", {
                                className: "font-semibold text-foreground",
                                children: "You receive",
                              }),
                              (0, a.jsxs)("div", {
                                className: "text-muted-foreground",
                                children: [
                                  (0, a.jsx)(Z.Z, { children: ep }),
                                  " ",
                                  "ALTA",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col space-y-2 text-sm",
                            children: [
                              (0, a.jsx)("div", {
                                className: "font-semibold text-foreground",
                                children: "Health Factor",
                              }),
                              (0, a.jsx)("div", {
                                className: "text-muted-foreground",
                                children: (0, a.jsx)(k.Z, {
                                  value: parseFloat(ex),
                                  threshold:
                                    D && D.healthFactor
                                      ? parseFloat(
                                          D.healthFactor.redemptionLimit
                                        )
                                      : 0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "mt-4",
                        children: (0, a.jsx)(F.Z, {
                          className: "w-full",
                          icon: (0, a.jsx)(l.Z, {}),
                          isLoading: V,
                          disabled:
                            void 0 !== H || (void 0 !== Q && u(Q) == BigInt(0)),
                          onClick: () => {
                            if (es && Q && ed && e.abi && e.address) {
                              let r = "0";
                              if (
                                (et && (r = et),
                                es.toLowerCase() == h.EO[t].toLowerCase())
                              ) {
                                M({
                                  abi: [
                                    {
                                      inputs: [
                                        {
                                          internalType: "uint256",
                                          name: "_borrowAmount",
                                          type: "uint256",
                                        },
                                      ],
                                      name: "createVaultNative",
                                      outputs: [
                                        {
                                          internalType: "address",
                                          name: "_vault",
                                          type: "address",
                                        },
                                      ],
                                      stateMutability: "payable",
                                      type: "function",
                                    },
                                  ],
                                  address: e.address,
                                  chainId: t,
                                  functionName: "createVaultNative",
                                  args: [u(r)],
                                  value: u(Q),
                                }),
                                  J(!0);
                                return;
                              }
                              ec
                                ? (M({
                                    abi: e.abi,
                                    address: e.address,
                                    chainId: t,
                                    functionName: "createVault",
                                    args: [es, (0, d.v)(Q, ed), u(r)],
                                  }),
                                  J(!0))
                                : (M({
                                    abi: f.Wo,
                                    address: es,
                                    chainId: t,
                                    functionName: "approve",
                                    args: [e.address, h.Uf],
                                  }),
                                  J(!1));
                            }
                          },
                          children: W,
                        }),
                      }),
                      H &&
                        (0, a.jsx)(S.Z, {
                          open: !0,
                          hash: H,
                          onOpenChange: () => {
                            A(void 0);
                          },
                          children:
                            X &&
                            (0, a.jsx)("div", {
                              className: "text-primary",
                              children: (0, a.jsx)(F.Z, {
                                className: "max-w-[200px]",
                                link: "/vaults",
                                children: "My Vaults",
                              }),
                            }),
                        }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    81674: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = r(30982);
      function n(e) {
        let { currency: t, children: r } = e,
          n = (0, a.useFormatter)();
        return r
          ? n.number(parseFloat(r.toString()), {
              style: "currency",
              currency: "USD",
            })
          : null;
      }
    },
    60332: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = r(3827),
        n = r(22169),
        s = r(95453);
      function l(e) {
        let { className: t = "" } = e;
        return (0, a.jsx)(s.Z, {
          className: (0, n.cn)(
            t,
            "to-taolime mb-4 bg-gradient-to-l from-transparent opacity-30"
          ),
        });
      }
    },
    59409: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = r(3827);
      function n(e) {
        let { value: t, threshold: r } = e;
        return (0, a.jsx)("span", {
          className: "font-semibold ".concat(
            t > 1.1 * r
              ? "text-green-500"
              : t > 4
              ? "text-lime-500"
              : "text-red-500"
          ),
          children: (t > 100 ? 100 : t).toFixed(2),
        });
      }
    },
    22782: function (e, t, r) {
      "use strict";
      r.d(t, {
        I: function () {
          return l;
        },
      });
      var a = r(3827),
        n = r(64090),
        s = r(22169);
      let l = n.forwardRef((e, t) => {
        let { className: r, type: n, ...l } = e;
        return (0, a.jsx)("input", {
          type: n,
          className: (0, s.cn)(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            r
          ),
          ref: t,
          ...l,
        });
      });
      l.displayName = "Input";
    },
    97787: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = r(3827),
        n = r(8792),
        s = r(80037),
        l = r(22169),
        i = r(57180),
        d = r(9208),
        o = r(17247),
        c = r(68575);
      function u(e) {
        let { hash: t, open: r, onOpenChange: u, children: f } = e,
          m = (0, i.Z)();
        return (0, a.jsx)(d.Vq, {
          defaultOpen: r,
          onOpenChange: u,
          children: (0, a.jsx)(d.cZ, {
            className: "sm:max-w-[425px]",
            children: (0, a.jsxs)(d.fK, {
              children: [
                (0, a.jsx)(d.$N, { children: "Transaction in progress..." }),
                (0, a.jsxs)("div", {
                  className: "mt-4 text-sm text-muted-foreground",
                  children: [
                    (0, a.jsx)(c.Z, {
                      txHash: t,
                      status: "success",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, a.jsx)("div", {
                            children: "Your transaction has been processed.",
                          }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(s.Z, {
                              className: "text-green-500",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(n.default, {
                              href: (0, l.G)(m, null != t ? t : ""),
                              target: "_blank",
                              rel: "noreferrer",
                              className:
                                "text-lime-500 transition-all duration-200 ease-in-out hover:underline",
                              children: "View on block explorer",
                            }),
                          }),
                          (0, a.jsx)("div", { children: f }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(c.Z, {
                      txHash: t,
                      status: "pending",
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col items-center space-y-2",
                        children: [
                          (0, a.jsx)("div", {
                            children: "Your transaction is being processed.",
                          }),
                          (0, a.jsx)("div", { children: (0, a.jsx)(o.Z, {}) }),
                          (0, a.jsx)("div", {
                            children: (0, a.jsx)(n.default, {
                              href: (0, l.G)(m, null != t ? t : ""),
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
                    (0, a.jsx)(c.Z, {
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
    12647: function (e, t, r) {
      "use strict";
      r.d(t, {
        _: function () {
          return o;
        },
      });
      var a = r(3827),
        n = r(64090),
        s = r(24602),
        l = r(57742),
        i = r(22169);
      let d = (0, l.j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        o = n.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, a.jsx)(s.f, {
            ref: t,
            className: (0, i.cn)(d(), r),
            ...n,
          });
        });
      o.displayName = s.f.displayName;
    },
    11963: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = r(3827);
      function n(e) {
        let { children: t } = e;
        return (0, a.jsx)("div", {
          className:
            "border-deepblue via-taolime text-deepblue from-taolime/70 to-taolime/70 flex justify-center border-b border-opacity-100 bg-gradient-to-r p-4 font-semibold shadow-2xl transition-all duration-200 ease-out",
          children: t,
        });
      }
    },
    40186: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var a = r(3827),
        n = r(52235),
        s = r(22169),
        l = r(64090),
        i = r(40370),
        d = r(23441),
        o = r(85159),
        c = r(80037);
      let u = i.fC,
        f = i.ZA,
        m = i.B4,
        x = l.forwardRef((e, t) => {
          let { className: r, children: n, ...l } = e;
          return (0, a.jsxs)(i.xz, {
            ref: t,
            className: (0, s.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              r
            ),
            ...l,
            children: [
              n,
              (0, a.jsx)(i.JO, {
                asChild: !0,
                children: (0, a.jsx)(d.Z, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      x.displayName = i.xz.displayName;
      let h = l.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(i.u_, {
          ref: t,
          className: (0, s.cn)(
            "flex cursor-default items-center justify-center py-1",
            r
          ),
          ...n,
          children: (0, a.jsx)(o.Z, { className: "h-4 w-4" }),
        });
      });
      h.displayName = i.u_.displayName;
      let p = l.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(i.$G, {
          ref: t,
          className: (0, s.cn)(
            "flex cursor-default items-center justify-center py-1",
            r
          ),
          ...n,
          children: (0, a.jsx)(d.Z, { className: "h-4 w-4" }),
        });
      });
      p.displayName = i.$G.displayName;
      let v = l.forwardRef((e, t) => {
        let { className: r, children: n, position: l = "popper", ...d } = e;
        return (0, a.jsx)(i.h_, {
          children: (0, a.jsxs)(i.VY, {
            ref: t,
            className: (0, s.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === l &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              r
            ),
            position: l,
            ...d,
            children: [
              (0, a.jsx)(h, {}),
              (0, a.jsx)(i.l_, {
                className: (0, s.cn)(
                  "p-1",
                  "popper" === l &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: n,
              }),
              (0, a.jsx)(p, {}),
            ],
          }),
        });
      });
      v.displayName = i.VY.displayName;
      let g = l.forwardRef((e, t) => {
        let { className: r, ...n } = e;
        return (0, a.jsx)(i.__, {
          ref: t,
          className: (0, s.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r),
          ...n,
        });
      });
      g.displayName = i.__.displayName;
      let j = l.forwardRef((e, t) => {
        let { className: r, children: n, ...l } = e;
        return (0, a.jsxs)(i.ck, {
          ref: t,
          className: (0, s.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            r
          ),
          ...l,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, a.jsx)(i.wU, {
                children: (0, a.jsx)(c.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, a.jsx)(i.eT, { children: n }),
          ],
        });
      });
      (j.displayName = i.ck.displayName),
        (l.forwardRef((e, t) => {
          let { className: r, ...n } = e;
          return (0, a.jsx)(i.Z0, {
            ref: t,
            className: (0, s.cn)("-mx-1 my-1 h-px bg-muted", r),
            ...n,
          });
        }).displayName = i.Z0.displayName);
      var b = r(92478);
      function y(e) {
        let {
          collaterals: t,
          emptyText: r,
          onValueChange: l,
          defaultValue: i = "",
          placeholder: d = "Select collateral",
          value: o = "",
          className: c = "",
        } = e;
        return t
          ? (0, a.jsx)("div", {
              className: "rounded-lg bg-taolime bg-opacity-10 p-px",
              children: (0, a.jsxs)(u, {
                onValueChange: l,
                defaultValue: i,
                value: o,
                children: [
                  (0, a.jsx)(x, {
                    className: (0, s.cn)(
                      c,
                      "rounded-lg bg-gray-800 bg-opacity-10 text-white text-opacity-60"
                    ),
                    children: (0, a.jsx)(m, { placeholder: d }),
                  }),
                  (0, a.jsx)(v, {
                    children: (0, a.jsxs)(f, {
                      children: [
                        (0, a.jsx)(g, { children: "Available Collaterals" }),
                        r &&
                          (0, a.jsx)(
                            j,
                            {
                              value: "1",
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  (0, a.jsx)("div", {
                                    children: (0, a.jsx)(n.Z, {}),
                                  }),
                                  (0, a.jsx)("div", { children: r }),
                                ],
                              }),
                            },
                            "empty"
                          ),
                        t &&
                          t.map((e, t) =>
                            (0, a.jsx)(
                              j,
                              {
                                value: e.address,
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, a.jsx)(b.Z, {
                                      symbol: e.tokenName,
                                      width: 24,
                                      height: 24,
                                    }),
                                    (0, a.jsx)("div", {
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
          : (0, a.jsx)(a.Fragment, {});
      }
    },
    95453: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = r(3827),
        n = r(64090),
        s = r(51014),
        l = r(22169);
      let i = n.forwardRef((e, t) => {
        let {
          className: r,
          orientation: n = "horizontal",
          decorative: i = !0,
          ...d
        } = e;
        return (0, a.jsx)(s.f, {
          ref: t,
          decorative: i,
          orientation: n,
          className: (0, l.cn)(
            "shrink-0 bg-border",
            "horizontal" === n ? "h-[1px] w-full" : "h-full w-[1px]",
            r
          ),
          ...d,
        });
      });
      i.displayName = s.f.displayName;
    },
    46892: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = r(78065),
        n = r(64090);
      function s() {
        let e = (0, a.Z)(),
          [t, r] = (0, n.useState)(void 0),
          [s, l] = (0, n.useState)(!0);
        return (
          (0, n.useEffect)(() => {
            fetch("".concat(e, "/collaterals"))
              .then((e) => e.json())
              .then(async (t) => {
                let a = t.map(async (t) => {
                    let r = await fetch(
                      "".concat(e, "/collaterals/price/").concat(t.address)
                    ).then((e) => e.json());
                    return { ...t, price: r.priceHuman };
                  }),
                  n = await Promise.all(a);
                l(!1), r(n);
              });
          }, [e]),
          { collaterals: t, isLoading: s }
        );
      }
    },
    37046: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = r(64090),
        n = r(78065);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t = (0, n.Z)(e),
          [r, s] = (0, a.useState)(void 0),
          [l, i] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            fetch("".concat(t, "/protocolStats"))
              .then((e) => e.json())
              .then((e) => {
                e.data &&
                  (console.log(e.data[0].data), i(!1), s(e.data[0].data));
              });
          }, [t]),
          { statistics: r, isLoading: l }
        );
      }
    },
    24602: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return l;
        },
      });
      var a = r(14749),
        n = r(64090),
        s = r(29586);
      let l = (0, n.forwardRef)((e, t) =>
        (0, n.createElement)(
          s.WV.label,
          (0, a.Z)({}, e, {
            ref: t,
            onMouseDown: (t) => {
              var r;
              null === (r = e.onMouseDown) || void 0 === r || r.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault();
            },
          })
        )
      );
    },
    20073: function (e, t, r) {
      "use strict";
      function a(e, t) {
        let [r, a = "0"] = e.split("."),
          n = r.startsWith("-");
        if ((n && (r = r.slice(1)), (a = a.replace(/(0+)$/, "")), 0 === t))
          1 === Math.round(Number(".".concat(a))) &&
            (r = "".concat(BigInt(r) + 1n)),
            (a = "");
        else if (a.length > t) {
          let [e, n, s] = [a.slice(0, t - 1), a.slice(t - 1, t), a.slice(t)],
            l = Math.round(Number("".concat(n, ".").concat(s)));
          (a =
            l > 9
              ? ""
                  .concat(BigInt(e) + BigInt(1), "0")
                  .padStart(e.length + 1, "0")
              : "".concat(e).concat(l)).length > t &&
            ((a = a.slice(1)), (r = "".concat(BigInt(r) + 1n))),
            (a = a.slice(0, t));
        } else a = a.padEnd(t, "0");
        return BigInt(
          ""
            .concat(n ? "-" : "")
            .concat(r)
            .concat(a)
        );
      }
      r.d(t, {
        v: function () {
          return a;
        },
      });
    },
    71003: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useBalance: function () {
            return d;
          },
        });
      var a = r(5667),
        n = r(73054),
        s = r(38760),
        l = r(43089),
        i = r(42887);
      function d() {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { address: d, query: o = {} } = r,
          c = (0, i.useConfig)(r),
          u = (0, l.useChainId)(),
          f = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(t) {
                let { queryKey: r } = t,
                  { address: n, scopeKey: s, ...l } = r[1];
                if (!n) throw Error("address is required");
                let i = await (0, a.s)(e, { ...l, address: n });
                return null != i ? i : null;
              },
              queryKey: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return ["balance", (0, n.O)(e)];
              })(t),
            };
          })(c, {
            ...r,
            chainId: null !== (e = r.chainId) && void 0 !== e ? e : u,
          }),
          m = !!(d && (null === (t = o.enabled) || void 0 === t || t));
        return (0, s.aM)({ ...o, ...f, enabled: m });
      }
    },
    69908: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          useReadContract: function () {
            return d;
          },
        });
      var a = r(31723),
        n = r(73054),
        s = r(38760),
        l = r(43089),
        i = r(42887);
      function d() {
        var e, t, r;
        let d =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: o, address: c, functionName: u, query: f = {} } = d,
          m = (0, i.useConfig)(d),
          x = (0, l.useChainId)(),
          h = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(r) {
                let { queryKey: n } = r,
                  s = t.abi;
                if (!s) throw Error("abi is required");
                let { address: l, functionName: i, scopeKey: d, ...o } = n[1];
                if (!l) throw Error("address is required");
                if (!i) throw Error("functionName is required");
                let c = o.args;
                return (0, a.L)(e, {
                  abi: s,
                  address: l,
                  functionName: i,
                  args: c,
                  ...o,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...r } = e;
                return ["readContract", (0, n.O)(r)];
              })(t),
            };
          })(m, {
            ...d,
            chainId: null !== (e = d.chainId) && void 0 !== e ? e : x,
          }),
          p = !!(
            c &&
            o &&
            u &&
            (null === (t = f.enabled) || void 0 === t || t)
          );
        return (0, s.aM)({
          ...f,
          ...h,
          enabled: p,
          structuralSharing:
            null !== (r = f.structuralSharing) && void 0 !== r ? r : s.if,
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
        return e((e.s = 41214));
      }
    ),
      (_N_E = e.O());
  },
]);
