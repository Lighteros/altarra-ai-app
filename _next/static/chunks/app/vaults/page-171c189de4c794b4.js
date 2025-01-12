(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1399],
  {
    25957: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 41976));
    },
    41976: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return H;
          },
        });
      var s = a(3827),
        r = a(64090),
        i = a(20703),
        l = a(8792),
        n = {
          src: "/_next/static/media/stopwatch-green.fbb968a5.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = a(25587),
        c = a(64363),
        o = a(28670),
        u = a(2714),
        m = a(81708),
        f = a(30982),
        x = a(39296),
        h = a(22169),
        p = a(84098),
        g = a(46892),
        A = a(37046),
        v = a(78065),
        b = a(86969),
        j = a(80037);
      let w = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(b.fC, {
          ref: t,
          className: (0, h.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            a
          ),
          ...r,
          children: (0, s.jsx)(b.z$, {
            className: (0, h.cn)(
              "flex items-center justify-center text-current"
            ),
            children: (0, s.jsx)(j.Z, { className: "h-4 w-4" }),
          }),
        });
      });
      w.displayName = b.fC.displayName;
      var y = a(62177),
        N = a(575),
        C = a(26739),
        k = a(82012);
      function Z(e) {
        var t;
        let {
            values: a,
            placeholder: i = "Select...",
            notFoundText: l = "No items found",
            onValueChange: n,
            defaultValue: d = "",
            className: c,
            selectClassName: o,
          } = e,
          [u, m] = r.useState(!1),
          [f, x] = r.useState(d);
        return (0, s.jsxs)(k.J2, {
          open: u,
          onOpenChange: m,
          children: [
            (0, s.jsx)(k.xo, {
              asChild: !0,
              children: (0, s.jsxs)(N.z, {
                variant: "outline",
                role: "combobox",
                "aria-expanded": u,
                className: (0, h.cn)(
                  "w-[200px] justify-between text-muted-foreground",
                  c
                ),
                children: [
                  f && a
                    ? null ===
                        (t = a.find(
                          (e) =>
                            e.value.toLowerCase().trim() ===
                            f.toLowerCase().trim()
                        )) || void 0 === t
                      ? void 0
                      : t.label
                    : i,
                  (0, s.jsx)(y.jnn, {
                    className: "ml-2 h-4 w-4 shrink-0 opacity-50",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(k.yk, {
              className: (0, h.cn)("w-[200px] p-0", o),
              children: (0, s.jsxs)(C.mY, {
                children: [
                  (0, s.jsx)(C.sZ, { placeholder: i, className: "h-9" }),
                  (0, s.jsx)(C.rb, { children: l }),
                  (0, s.jsx)(C.fu, {
                    className: "max-h-[200px] overflow-y-scroll",
                    children:
                      a &&
                      a.map((e) =>
                        (0, s.jsxs)(
                          C.di,
                          {
                            value: e.value,
                            onSelect: (e) => {
                              let t =
                                e.toLowerCase().trim() ===
                                f.toLowerCase().trim()
                                  ? ""
                                  : e;
                              x(t), n && n(t), m(!1);
                            },
                            children: [
                              e.icon &&
                                (0, s.jsx)("div", {
                                  className: "mr-2",
                                  children: e.icon,
                                }),
                              e.label,
                              (0, s.jsx)(y.nQG, {
                                className: (0, h.cn)(
                                  "ml-auto h-4 w-4",
                                  f.toLowerCase().trim() ===
                                    e.value.toLowerCase().trim()
                                    ? "opacity-100"
                                    : "opacity-0"
                                ),
                              }),
                            ],
                          },
                          e.value
                        )
                      ),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var E = a(81674),
        R = a(60332),
        D = a(59409),
        S = a(40186),
        U = a(52770),
        B = a(32543),
        V = a(46989),
        F = a(92478);
      function H() {
        let { vaults: e, isLoading: t } = (function () {
            let e = (0, v.Z)(),
              [t, a] = (0, r.useState)(void 0);
            return (
              (0, r.useEffect)(() => {
                fetch("".concat(e, "/vaults/overview"))
                  .then((e) => e.json())
                  .then((e) => a(e));
              }, [e]),
              { vaults: t, isLoading: !t }
            );
          })(),
          { statistics: a, isLoading: b } = (0, A.Z)(),
          { collaterals: j, isLoading: y } = (0, g.Z)(),
          [N, C] = r.useState(""),
          [k, H] = r.useState(!0),
          Y = (0, p.Z)("BEYOND"),
          _ = (0, p.Z)("MintableToken"),
          { address: I } = (0, x.useAccount)(),
          [L, O] = r.useState("");
        if (
          ((0, r.useEffect)(() => {
            I && (O(I), H(!1));
          }, [I]),
          t || y || b)
        )
          return (0, s.jsx)("div", {
            className: "container mt-20 items-center p-10 text-center text-sm",
            children: (0, s.jsx)(U.default, {}),
          });
        let z =
            null == e
              ? void 0
              : e.map((e) => ({
                  value: e.vaultOwner,
                  label: (0, h.s)(e.vaultOwner),
                  icon: (0, s.jsx)("img", {
                    alt: "",
                    src: "https://effigy.im/a/".concat(e.vaultOwner, ".png"),
                    width: 16,
                    height: 16,
                  }),
                })),
          M =
            null == z
              ? void 0
              : z.filter(
                  (e, t, a) => a.findIndex((t) => t.value === e.value) === t
                ),
          T = [];
        T = I
          ? [
              {
                value: I.toLowerCase(),
                label: (0, h.s)(I),
                icon: (0, s.jsx)("img", {
                  alt: "",
                  src: "https://effigy.im/a/".concat(I, ".png"),
                  width: 16,
                  height: 16,
                }),
              },
              ...(null != M ? M : []),
            ]
          : null != M
          ? M
          : [];
        let W =
          null == e
            ? void 0
            : e.sort((e, t) => parseFloat(t.tvl) - parseFloat(e.tvl));
        return (
          k &&
            (W = null == W ? void 0 : W.filter((e) => parseFloat(e.debt) > 0)),
          L &&
            "" !== L &&
            (W =
              null == W
                ? void 0
                : W.filter(
                    (e) => e.vaultOwner.toLowerCase() === L.toLocaleLowerCase()
                  )),
          W &&
            N &&
            "" !== N &&
            (W =
              null == W
                ? void 0
                : W.filter((e) => {
                    for (let t = 0; t < e.collaterals.length; t++)
                      if (e.collaterals[t].toLowerCase() === N.toLowerCase())
                        return !0;
                  })),
          (0, s.jsx)(f.NextIntlClientProvider, {
            locale: "en",
            children: (0, s.jsxs)("div", {
              className: "container items-center p-2 text-sm sm:p-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-wrap items-center justify-start",
                  children: [
                    (0, s.jsx)("div", {
                      className: "mb-4 mr-4 hidden",
                      children: (0, s.jsx)(Z, {
                        values: T,
                        placeholder: "Search by owner",
                        onValueChange: (e) => {
                          O(e);
                        },
                        defaultValue: L,
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "mb-4 mr-4 hidden",
                      children: (0, s.jsx)(S.Z, {
                        className: "w-[280px]",
                        collaterals: j,
                        onValueChange: (e) => {
                          "1" === e ? C("") : C(e);
                        },
                        emptyText: "Remove filter",
                        placeholder: "Filter by collateral",
                        defaultValue: N,
                        value: N,
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "mb-4 mr-4 flex hidden items-center justify-end space-x-2",
                      children: [
                        (0, s.jsx)(w, {
                          defaultChecked: k,
                          onCheckedChange: (e) => {
                            H(e.valueOf());
                          },
                        }),
                        (0, s.jsx)("div", {
                          className: "text-muted-foreground",
                          children: "Hide zero Debt",
                        }),
                      ],
                    }),
                    I &&
                      (0, s.jsxs)("div", {
                        className:
                          "mb-4 mt-4 grid w-full auto-cols-auto grid-cols-2 items-center justify-between gap-2 gap-y-4 md:flex md:flex-1 md:flex-wrap md:justify-center",
                        children: [
                          (0, s.jsx)(V.Z, {
                            className: "shadow-2xl",
                            link: "https://app.camelot.exchange/?token2=0x966570A84709D693463CDD69dCadb0121b2C9d26",
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center space-x-1",
                              children: [
                                (0, s.jsx)("div", {
                                  children: (0, s.jsx)(F.Z, {
                                    symbol: "camelot",
                                    invert: !1,
                                  }),
                                }),
                                (0, s.jsx)("div", {
                                  className: "font-semibold",
                                  children: "Buy BEYOND",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(V.Z, {
                            link: "/vaults/create",
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center space-x-1",
                              children: [
                                (0, s.jsx)(c.Z, {}),
                                (0, s.jsx)("div", {
                                  children: "Create new Vault",
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(V.Z, {
                            onClick: async () => {
                              var e;
                              await (null === (e = window.ethereum) ||
                              void 0 === e
                                ? void 0
                                : e.request({
                                    method: "wallet_watchAsset",
                                    params: {
                                      type: "ERC20",
                                      options: {
                                        address: Y.address,
                                        decimals: "18",
                                      },
                                    },
                                  }));
                            },
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center space-x-1",
                              children: [
                                (0, s.jsx)(F.Z, { symbol: "metamask" }),
                                (0, s.jsx)("div", { children: "Add BEYOND" }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(V.Z, {
                            onClick: async () => {
                              var e;
                              await (null === (e = window.ethereum) ||
                              void 0 === e
                                ? void 0
                                : e.request({
                                    method: "wallet_watchAsset",
                                    params: {
                                      type: "ERC20",
                                      options: {
                                        address: _.address,
                                        decimals: "18",
                                      },
                                    },
                                  }));
                            },
                            children: (0, s.jsxs)("div", {
                              className: "flex items-center space-x-1",
                              children: [
                                (0, s.jsx)(F.Z, { symbol: "metamask" }),
                                (0, s.jsx)("div", { children: "Add BEYOND" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: (0, h.cn)(
                    "mt-4 grid auto-cols-max grid-cols-1 gap-4 gap-y-4 md:grid-cols-2",
                    W && 1 === W.length ? "!grid-cols-1" : ""
                  ),
                  children: [
                    W &&
                      0 === W.length &&
                      (0, s.jsxs)(B.Z, {
                        children: [
                          (0, s.jsxs)("div", {
                            className: "mb-8 mt-8 text-center",
                            children: [
                              "Seems like you do not have any vaults yet. ",
                              (0, s.jsx)("br", {}),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "mb-4 mt-4 flex items-center justify-center space-x-4 text-sm",
                            children: [
                              (0, s.jsx)(V.Z, {
                                link: "/vaults/create",
                                children: (0, s.jsxs)("div", {
                                  className: "flex items-center space-x-1",
                                  children: [
                                    (0, s.jsx)(c.Z, {}),
                                    (0, s.jsx)("div", {
                                      children: "Create your first Vault",
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)(V.Z, {
                                onClick: () => {
                                  O(""), C(""), H(!0);
                                },
                                children: (0, s.jsxs)("div", {
                                  className: "flex items-center space-x-1",
                                  children: [
                                    (0, s.jsx)(o.Z, {}),
                                    (0, s.jsx)("div", {
                                      children: "Explore all vaults",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    a &&
                      W &&
                      W.map((e, t) => {
                        let r = (0, h.s)(e.address),
                          c = (0, h.s)(e.vaultOwner),
                          o = (0, s.jsxs)("div", {
                            className:
                              "flex w-full flex-row items-center justify-between py-3",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-wrap items-center justify-between space-x-4",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "rounded-full border-[1px] border-[#3FEAC1] border-opacity-20 p-3",
                                    children: (0, s.jsx)(u.Z, {}),
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col items-start",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "opcaity-50 text-base text-[#BAF7E9]",
                                        children: "TVL",
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "bg-clip-text text-lg font-semibold text-[#BAF7E9]",
                                        children: (0, s.jsx)(E.Z, {
                                          children: e.tvl,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [
                                  (0, s.jsx)("div", {
                                    className: "text-sm text-[#BAF7E9]",
                                    children: "Health Factor",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex flex-row items-center gap-1 rounded-md px-2 text-sm",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "glow-circle-green absolute z-[100] h-16 w-16 translate-x-[-0.9rem] opacity-30",
                                      }),
                                      (0, s.jsx)(i.default, {
                                        src: n,
                                        alt: "world-shield",
                                        width: 34,
                                        height: 34,
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "rounded-lg border-[0.5px] border-[#22C54D] border-opacity-50 bg-[#22C54D] bg-opacity-10 px-2 py-1 text-sm",
                                        children: (0, s.jsx)(D.Z, {
                                          threshold: parseFloat(
                                            a.healthFactor.redemptionLimit
                                          ),
                                          value: parseFloat(e.healthFactor),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          });
                        return (0, s.jsx)(
                          d.E.div,
                          {
                            layout: !0,
                            initial: { opacity: 0, y: -20 },
                            whileInView: { opacity: 1, y: 0 },
                            transition: { duration: 0.3, ease: "easeInOut" },
                            children: (0, s.jsx)(B.Z, {
                              title: o,
                              description: "",
                              children: (0, s.jsxs)("div", {
                                className:
                                  "flex flex-col justify-center gap-2 text-sm",
                                children: [
                                  (0, s.jsx)(R.Z, { className: "mr-2" }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mr-2 flex w-full items-center justify-between space-x-4 pb-4 text-[#BAF7E9]",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "text-base opacity-50",
                                        children: "Debt",
                                      }),
                                      (0, s.jsx)("div", {
                                        className: "text-base text-[#BAF7E9]",
                                        children: (0, s.jsx)(E.Z, {
                                          children: e.debtHuman,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)(R.Z, { className: "" }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mr-2 flex w-full items-center justify-between space-x-4 pb-4 text-[#BAF7E9]",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "text-base opacity-50",
                                        children: "Vault CA",
                                      }),
                                      (0, s.jsx)(
                                        l.default,
                                        {
                                          href: "/vault/".concat(e.address),
                                          className:
                                            "flex items-center space-x-2 text-base transition-all duration-200 hover:text-[#A3F5E1]",
                                          children: (0, s.jsx)("div", {
                                            children: r,
                                          }),
                                        },
                                        e.address
                                      ),
                                    ],
                                  }),
                                  (0, s.jsx)(R.Z, { className: "" }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "mr-2 flex w-full items-center justify-between space-x-4 pb-4 text-[#BAF7E9]",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-row gap-2 text-base",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className: "opacity-50",
                                            children: " Owner: ",
                                          }),
                                          (0, s.jsx)(
                                            l.default,
                                            {
                                              href: "https://debank.com/profile/".concat(
                                                e.vaultOwner
                                              ),
                                              className:
                                                "flex items-center space-x-2 transition-all duration-200 hover:text-[#A3F5E1]",
                                              children: (0, s.jsx)("div", {
                                                className: "",
                                                children: c,
                                              }),
                                            },
                                            e.vaultOwner
                                          ),
                                        ],
                                      }),
                                      (0, s.jsx)("div", {
                                        children: (0, s.jsx)("div", {
                                          className: "flex flex-row-reverse",
                                          children: (0, s.jsx)("div", {
                                            className: "flex-1 text-sm",
                                            children: (0, s.jsx)(V.Z, {
                                              className: "w-[7rem]",
                                              link: "/vault/".concat(e.address),
                                              children: (0, s.jsxs)("div", {
                                                className:
                                                  "flex items-center space-x-1 font-semibold",
                                                children: [
                                                  (0, s.jsx)(m.Z, {}),
                                                  (0, s.jsx)("div", {
                                                    children: "View",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "basis-full sm:hidden",
                                  }),
                                ],
                              }),
                            }),
                          },
                          e.address
                        );
                      }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
    575: function (e, t, a) {
      "use strict";
      a.d(t, {
        z: function () {
          return c;
        },
      });
      var s = a(3827),
        r = a(64090),
        i = a(59143),
        l = a(57742),
        n = a(22169);
      let d = (0, l.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        c = r.forwardRef((e, t) => {
          let { className: a, variant: r, size: l, asChild: c = !1, ...o } = e,
            u = c ? i.g7 : "button";
          return (0, s.jsx)(u, {
            className: (0, n.cn)(d({ variant: r, size: l, className: a })),
            ref: t,
            ...o,
          });
        });
      c.displayName = "Button";
    },
    26739: function (e, t, a) {
      "use strict";
      a.d(t, {
        di: function () {
          return m;
        },
        fu: function () {
          return u;
        },
        mY: function () {
          return d;
        },
        rb: function () {
          return o;
        },
        sZ: function () {
          return c;
        },
      });
      var s = a(3827),
        r = a(64090),
        i = a(63124),
        l = a(28670),
        n = a(22169);
      a(9208);
      let d = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(i.mY, {
          ref: t,
          className: (0, n.cn)(
            "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
            a
          ),
          ...r,
        });
      });
      d.displayName = i.mY.displayName;
      let c = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsxs)("div", {
          className: "flex items-center border-b px-3",
          "cmdk-input-wrapper": "",
          children: [
            (0, s.jsx)(l.Z, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
            (0, s.jsx)(i.mY.Input, {
              ref: t,
              className: (0, n.cn)(
                "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                a
              ),
              ...r,
            }),
          ],
        });
      });
      (c.displayName = i.mY.Input.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)(i.mY.List, {
            ref: t,
            className: (0, n.cn)(
              "max-h-[300px] overflow-y-auto overflow-x-hidden",
              a
            ),
            ...r,
          });
        }).displayName = i.mY.List.displayName);
      let o = r.forwardRef((e, t) =>
        (0, s.jsx)(i.mY.Empty, {
          ref: t,
          className: "py-6 text-center text-sm",
          ...e,
        })
      );
      o.displayName = i.mY.Empty.displayName;
      let u = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(i.mY.Group, {
          ref: t,
          className: (0, n.cn)(
            "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
            a
          ),
          ...r,
        });
      });
      (u.displayName = i.mY.Group.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)(i.mY.Separator, {
            ref: t,
            className: (0, n.cn)("-mx-1 h-px bg-border", a),
            ...r,
          });
        }).displayName = i.mY.Separator.displayName);
      let m = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(i.mY.Item, {
          ref: t,
          className: (0, n.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...r,
        });
      });
      m.displayName = i.mY.Item.displayName;
    },
    9208: function (e, t, a) {
      "use strict";
      a.d(t, {
        $N: function () {
          return h;
        },
        Vq: function () {
          return d;
        },
        cN: function () {
          return x;
        },
        cZ: function () {
          return m;
        },
        fK: function () {
          return f;
        },
        hg: function () {
          return c;
        },
      });
      var s = a(3827),
        r = a(64090),
        i = a(4322),
        l = a(52235),
        n = a(22169);
      let d = i.fC,
        c = i.xz,
        o = i.h_;
      i.x8;
      let u = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(i.aV, {
          ref: t,
          className: (0, n.cn)(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            a
          ),
          ...r,
        });
      });
      u.displayName = i.aV.displayName;
      let m = r.forwardRef((e, t) => {
        let { className: a, children: r, ...d } = e;
        return (0, s.jsxs)(o, {
          children: [
            (0, s.jsx)(u, {}),
            (0, s.jsxs)(i.VY, {
              ref: t,
              className: (0, n.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                a
              ),
              ...d,
              children: [
                r,
                (0, s.jsxs)(i.x8, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, s.jsx)(l.Z, { className: "h-4 w-4" }),
                    (0, s.jsx)("span", {
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
      m.displayName = i.VY.displayName;
      let f = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...a,
        });
      };
      f.displayName = "DialogHeader";
      let x = (e) => {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          className: (0, n.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...a,
        });
      };
      x.displayName = "DialogFooter";
      let h = r.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(i.Dx, {
          ref: t,
          className: (0, n.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            a
          ),
          ...r,
        });
      });
      (h.displayName = i.Dx.displayName),
        (r.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)(i.dk, {
            ref: t,
            className: (0, n.cn)("text-sm text-muted-foreground", a),
            ...r,
          });
        }).displayName = i.dk.displayName);
    },
    81674: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(30982);
      function r(e) {
        let { currency: t, children: a } = e,
          r = (0, s.useFormatter)();
        return a
          ? r.number(parseFloat(a.toString()), {
              style: "currency",
              currency: "USD",
            })
          : null;
      }
    },
    60332: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(3827),
        r = a(22169),
        i = a(95453);
      function l(e) {
        let { className: t = "" } = e;
        return (0, s.jsx)(i.Z, {
          className: (0, r.cn)(
            t,
            "to-taolime mb-4 bg-gradient-to-l from-transparent opacity-30"
          ),
        });
      }
    },
    59409: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(3827);
      function r(e) {
        let { value: t, threshold: a } = e;
        return (0, s.jsx)("span", {
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
    82012: function (e, t, a) {
      "use strict";
      a.d(t, {
        J2: function () {
          return n;
        },
        xo: function () {
          return d;
        },
        yk: function () {
          return c;
        },
      });
      var s = a(3827),
        r = a(64090),
        i = a(26231),
        l = a(22169);
      let n = i.fC,
        d = i.xz,
        c = r.forwardRef((e, t) => {
          let {
            className: a,
            align: r = "center",
            sideOffset: n = 4,
            ...d
          } = e;
          return (0, s.jsx)(i.h_, {
            children: (0, s.jsx)(i.VY, {
              ref: t,
              align: r,
              sideOffset: n,
              className: (0, l.cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                a
              ),
              ...d,
            }),
          });
        });
      c.displayName = i.VY.displayName;
    },
    40186: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return j;
        },
      });
      var s = a(3827),
        r = a(52235),
        i = a(22169),
        l = a(64090),
        n = a(40370),
        d = a(23441),
        c = a(85159),
        o = a(80037);
      let u = n.fC,
        m = n.ZA,
        f = n.B4,
        x = l.forwardRef((e, t) => {
          let { className: a, children: r, ...l } = e;
          return (0, s.jsxs)(n.xz, {
            ref: t,
            className: (0, i.cn)(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
              a
            ),
            ...l,
            children: [
              r,
              (0, s.jsx)(n.JO, {
                asChild: !0,
                children: (0, s.jsx)(d.Z, { className: "h-4 w-4 opacity-50" }),
              }),
            ],
          });
        });
      x.displayName = n.xz.displayName;
      let h = l.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(n.u_, {
          ref: t,
          className: (0, i.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...r,
          children: (0, s.jsx)(c.Z, { className: "h-4 w-4" }),
        });
      });
      h.displayName = n.u_.displayName;
      let p = l.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(n.$G, {
          ref: t,
          className: (0, i.cn)(
            "flex cursor-default items-center justify-center py-1",
            a
          ),
          ...r,
          children: (0, s.jsx)(d.Z, { className: "h-4 w-4" }),
        });
      });
      p.displayName = n.$G.displayName;
      let g = l.forwardRef((e, t) => {
        let { className: a, children: r, position: l = "popper", ...d } = e;
        return (0, s.jsx)(n.h_, {
          children: (0, s.jsxs)(n.VY, {
            ref: t,
            className: (0, i.cn)(
              "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              "popper" === l &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              a
            ),
            position: l,
            ...d,
            children: [
              (0, s.jsx)(h, {}),
              (0, s.jsx)(n.l_, {
                className: (0, i.cn)(
                  "p-1",
                  "popper" === l &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                ),
                children: r,
              }),
              (0, s.jsx)(p, {}),
            ],
          }),
        });
      });
      g.displayName = n.VY.displayName;
      let A = l.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, s.jsx)(n.__, {
          ref: t,
          className: (0, i.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
          ...r,
        });
      });
      A.displayName = n.__.displayName;
      let v = l.forwardRef((e, t) => {
        let { className: a, children: r, ...l } = e;
        return (0, s.jsxs)(n.ck, {
          ref: t,
          className: (0, i.cn)(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            a
          ),
          ...l,
          children: [
            (0, s.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, s.jsx)(n.wU, {
                children: (0, s.jsx)(o.Z, { className: "h-4 w-4" }),
              }),
            }),
            (0, s.jsx)(n.eT, { children: r }),
          ],
        });
      });
      (v.displayName = n.ck.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, s.jsx)(n.Z0, {
            ref: t,
            className: (0, i.cn)("-mx-1 my-1 h-px bg-muted", a),
            ...r,
          });
        }).displayName = n.Z0.displayName);
      var b = a(92478);
      function j(e) {
        let {
          collaterals: t,
          emptyText: a,
          onValueChange: l,
          defaultValue: n = "",
          placeholder: d = "Select collateral",
          value: c = "",
          className: o = "",
        } = e;
        return t
          ? (0, s.jsx)("div", {
              className: "rounded-lg bg-taolime bg-opacity-10 p-px",
              children: (0, s.jsxs)(u, {
                onValueChange: l,
                defaultValue: n,
                value: c,
                children: [
                  (0, s.jsx)(x, {
                    className: (0, i.cn)(
                      o,
                      "rounded-lg bg-gray-800 bg-opacity-10 text-white text-opacity-60"
                    ),
                    children: (0, s.jsx)(f, { placeholder: d }),
                  }),
                  (0, s.jsx)(g, {
                    children: (0, s.jsxs)(m, {
                      children: [
                        (0, s.jsx)(A, { children: "Available Collaterals" }),
                        a &&
                          (0, s.jsx)(
                            v,
                            {
                              value: "1",
                              children: (0, s.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  (0, s.jsx)("div", {
                                    children: (0, s.jsx)(r.Z, {}),
                                  }),
                                  (0, s.jsx)("div", { children: a }),
                                ],
                              }),
                            },
                            "empty"
                          ),
                        t &&
                          t.map((e, t) =>
                            (0, s.jsx)(
                              v,
                              {
                                value: e.address,
                                children: (0, s.jsxs)("div", {
                                  className: "flex items-center space-x-2",
                                  children: [
                                    (0, s.jsx)(b.Z, {
                                      symbol: e.tokenName,
                                      width: 24,
                                      height: 24,
                                    }),
                                    (0, s.jsx)("div", {
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
          : (0, s.jsx)(s.Fragment, {});
      }
    },
    95453: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var s = a(3827),
        r = a(64090),
        i = a(51014),
        l = a(22169);
      let n = r.forwardRef((e, t) => {
        let {
          className: a,
          orientation: r = "horizontal",
          decorative: n = !0,
          ...d
        } = e;
        return (0, s.jsx)(i.f, {
          ref: t,
          decorative: n,
          orientation: r,
          className: (0, l.cn)(
            "shrink-0 bg-border",
            "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]",
            a
          ),
          ...d,
        });
      });
      n.displayName = i.f.displayName;
    },
    52770: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return n;
          },
        });
      var s = a(3827),
        r = a(20703),
        i = {
          src: "/_next/static/media/loader.75ae4779.webp",
          height: 355,
          width: 354,
          blurDataURL:
            "data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSC4AAAABN0AmbYubnYuICDsoattIVhQNgmkZzF7/1SJYCBPR/0h1XJc+WPAE44DlUqoDVlA4IDwAAADQAQCdASoIAAgAAkA4JYwAD4lu0nokHAD++Rj7UpiLsfF2Lz7ecRkajx7UcbI3Ck/H3QK5vRUswq7mAAA=",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = a(25587);
      function n() {
        return (0, s.jsx)("div", {
          className:
            "absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2",
          children: (0, s.jsx)(l.E.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1, rotate: 360 },
            transition: { duration: 1, repeat: 1 / 0, repeatType: "loop" },
            layout: !0,
            className: "",
            children: (0, s.jsx)(r.default, {
              src: i,
              alt: "",
              className: "     grayscale     ",
            }),
          }),
        });
      }
    },
    32543: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(3827);
      function r(e) {
        let {
          onClick: t,
          children: a,
          title: r,
          className: i = "",
          description: l = "",
        } = e;
        return (0, s.jsx)("div", {
          className: "h-full grow ".concat(i, " rounded-lg p-px"),
          onClick: t,
          children: (0, s.jsxs)("div", {
            className:
              "gradient-bg flex h-full w-full flex-col justify-between     rounded-lg border-[0.5px] border-[#3FEAC1] border-opacity-20 px-4",
            children: [
              r &&
                (0, s.jsx)("div", {
                  className: "px-3 pt-5 text-[#BAF7E9]",
                  children: (0, s.jsxs)("div", {
                    className: "flex flex-col items-start justify-center",
                    children: [
                      (0, s.jsx)("div", {
                        className: "w-full flex-1 md:text-lg lg:text-xl",
                        children: r,
                      }),
                      (0, s.jsx)("p", {
                        className: "text-sm opacity-50",
                        children: l,
                      }),
                    ],
                  }),
                }),
              (0, s.jsx)("div", { className: "p-3 text-2xl", children: a }),
            ],
          }),
        });
      }
    },
    46989: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return l;
        },
      });
      var s = a(3827),
        r = a(8792),
        i = a(22169);
      function l(e) {
        let {
          onClick: t,
          children: a,
          icon: l,
          link: n,
          className: d,
          isLoading: c = !1,
          disabled: o = !1,
          target: u,
        } = e;
        return (0, s.jsxs)(r.default, {
          onClick: (e) => {
            !o && t && t(e);
          },
          href: null != n ? n : "#",
          target: u,
          className: (0, i.cn)(
            "inline-flex items-center rounded-lg border-l border-r bg-taolime px-3 py-2 text-center text-deepblue transition-all duration-200",
            d,
            c && "cursor-not-allowed",
            o && "cursor-not-allowed",
            c || o ? "bg-opacity-60" : "bg-opacity-100"
          ),
          children: [
            (0, s.jsx)("div", {
              className: "absolute m-auto h-6 w-6",
              children: (0, s.jsx)("div", { children: l }),
            }),
            (0, s.jsxs)("div", {
              className:
                "flex flex-1 items-center justify-center text-center align-middle",
              children: [
                c &&
                  (0, s.jsxs)("div", {
                    role: "status",
                    children: [
                      (0, s.jsxs)("svg", {
                        "aria-hidden": "true",
                        className:
                          "inline h-6 w-6 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600",
                        viewBox: "0 0 100 101",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, s.jsx)("path", {
                            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                            fill: "currentColor",
                          }),
                          (0, s.jsx)("path", {
                            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                            fill: "currentFill",
                          }),
                        ],
                      }),
                      (0, s.jsx)("span", {
                        className: "sr-only",
                        children: "Loading...",
                      }),
                    ],
                  }),
                !c && (0, s.jsx)(s.Fragment, { children: a }),
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
          return N;
        },
      });
      var s = a(3827),
        r = a(20703),
        i = {
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
        n = {
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
        m = {
          src: "/_next/static/media/qnt.2bad5579.svg",
          height: 489,
          width: 451,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/ram.294f72e2.png",
          height: 64,
          width: 64,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUnJykICQwRERVMaXEKCg54eX0JCg0XGBtgYGUSEhYEBQgqKy+Xl5tGR0uwr7NiYmeh+Ll5AAAACnRSTlMr964A6vqs/vqzOMrY3AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADpJREFUeJwVykESABAMA8CkRUmL///W2PPCscgFB5oi1ADTrJoyMCuzkuA90rnE2F3qe/ws/eww0uAPOr8BmyykLykAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        x = {
          src: "/_next/static/media/stTAO.817fd950.png",
          height: 250,
          width: 250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEXZ2dnY2Nja2tpMaXHY2NgODg6YmJiIiIg2NjbJyclBQUFcXFxQUFCsrKxPhx12AAAABHRSTlPzsikApdxqRgAAAAlwSFlzAAAD6AAAA+gBtXtSawAAADZJREFUeJw1y7kBwDAMA7ETTUp2nv3XTRX0YKmgtBDuNqJ8kuMCvzNjwNlPDOXsOy5EX9OIv38hAQDv9krtqwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/sushi.ce7782ae.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/gold.png",
          height: 25,
          width: 26,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX////////////////////////////////////////////////+/v7////////////7RkDRAAAAD3RSTlO+ClVu5PepgZnMIx2kQKuqi2odAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nE3GORKAMAwDQEm2yQXo/79lSJWtFg+2jubMSgvMuKEiWPFCnn8uyOuIdyY02DpHfCveAU61RDJ4AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = {
          src: "/_next/static/media/taousd-white.224b522d.svg",
          height: 26,
          width: 28,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
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
        b = {
          src: "/_next/static/media/usdc.23c35c78.svg",
          height: 16,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        },
        j = {
          src: "/_next/static/media/usdt.dcef1ab2.svg",
          height: 295,
          width: 339,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/wquil.093b6125.png",
          height: 250,
          width: 250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXH+Owv/C2X/ooD/TgH+Hjb/Iw//Q0v/AE3/ncj4zMr/AnD9mr3/tqX7YGb7fW37QHL/AAD/SgL6ikn/TQL9DlP6X379CnX6r7n9OkP/cW7/Z43/Y6/5lJn/gkb/gED6fJzMfZPTAAAAGnRSTlMArqX+Z6diBVz++aH+/v37/AmrrbH7+6f7+3j9kvUAAAAJcEhZcwAACxMAAAsTAQCanBgAAABESURBVHicBcEHAoAgDASwY7Zs3Iqg/v+VJgDxIZkAhO7cbQjcY61nswhu+/KVBGTcxyhqBt8+F/9owLSk3oUAsmLVE35zbwM1HOpI2wAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        y = {
          src: "/_next/static/media/wtao.74558e0c.svg",
          height: 256,
          width: 256,
          blurWidth: 0,
          blurHeight: 0,
        };
      function N(e) {
        let { symbol: t, width: a = 24, height: N = 24, invert: C = !1 } = e,
          k = {
            QNT: m,
            USDC: b,
            USDT: j,
            DAI: i,
            SUSHI: h,
            UNI: v,
            PAXG: u,
            LINK: d,
            WETH: l,
            "USDC.e": b,
            MATIC: c,
            WMATIC: c,
            "WETH.e": l,
            "DAI.e": i,
            "USDT.e": j,
            taoUSD: g,
            PIN: p,
            metamask: o,
            wTAO: y,
            WTAO: y,
            camelot: n,
            TPAD: A,
            RAM: f,
            WQUIL: w,
            stTAO: x,
            STTAO: x,
          };
        return t && k[t]
          ? (0, s.jsx)(r.default, {
              src: k[t],
              alt: t,
              width: a,
              height: N,
              className: "".concat(!0 === C ? "invert" : ""),
            })
          : null;
      }
    },
    84098: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = a(64090),
        r = a(78065);
      function i(e) {
        let t = (0, r.Z)(),
          [a, i] = (0, s.useState)(void 0),
          [l, n] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            fetch("".concat(t, "/abi/").concat(e))
              .then((e) => e.json())
              .then(async (e) => {
                n(!1), i(e);
              });
          }, [t, e]),
          { ...a, isLoading: l }
        );
      }
    },
    78065: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = a(43089),
        r = a(14980);
      function i(e) {
        var t, a;
        let i = (0, s.useChainId)();
        return e
          ? null !== (t = r.mb[e]) && void 0 !== t
            ? t
            : r.mb[1]
          : null !== (a = r.mb[i]) && void 0 !== a
          ? a
          : r.mb[1];
      }
    },
    46892: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = a(78065),
        r = a(64090);
      function i() {
        let e = (0, s.Z)(),
          [t, a] = (0, r.useState)(void 0),
          [i, l] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            fetch("".concat(e, "/collaterals"))
              .then((e) => e.json())
              .then(async (t) => {
                let s = t.map(async (t) => {
                    let a = await fetch(
                      "".concat(e, "/collaterals/price/").concat(t.address)
                    ).then((e) => e.json());
                    return { ...t, price: a.priceHuman };
                  }),
                  r = await Promise.all(s);
                l(!1), a(r);
              });
          }, [e]),
          { collaterals: t, isLoading: i }
        );
      }
    },
    37046: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return i;
        },
      });
      var s = a(64090),
        r = a(78065);
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t = (0, r.Z)(e),
          [a, i] = (0, s.useState)(void 0),
          [l, n] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            fetch("".concat(t, "/protocolStats"))
              .then((e) => e.json())
              .then((e) => {
                e.data &&
                  (console.log(e.data[0].data), n(!1), i(e.data[0].data));
              });
          }, [t]),
          { statistics: a, isLoading: l }
        );
      }
    },
    22169: function (e, t, a) {
      "use strict";
      a.d(t, {
        G: function () {
          return d;
        },
        cn: function () {
          return l;
        },
        s: function () {
          return n;
        },
      });
      var s = a(75504),
        r = a(51367),
        i = a(14980);
      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.m6)((0, s.W)(t));
      }
      function n(e) {
        return "".concat(e.slice(0, 6), "...").concat(e.slice(-4));
      }
      function d(e, t) {
        var a;
        let s = null !== (a = i.gb[e]) && void 0 !== a ? a : i.gb[1];
        return "".concat(s).concat(t);
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        8310, 3877, 2644, 6054, 703, 982, 2150, 5998, 5587, 367, 9349, 9889,
        6773, 4980, 2971, 8069, 1744,
      ],
      function () {
        return e((e.s = 25957));
      }
    ),
      (_N_E = e.O());
  },
]);
