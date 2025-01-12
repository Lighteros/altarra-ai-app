"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1735],
  {
    5667: function (t, e, a) {
      a.d(e, {
        s: function () {
          return d;
        },
      });
      var n = a(47115),
        r = a(55936),
        l = a(71264),
        i = a(60989),
        u = a(82756),
        c = a(37225),
        s = a(52938),
        o = a(36263);
      async function d(t, e) {
        var a;
        let {
          address: o,
          blockNumber: d,
          blockTag: h,
          chainId: m,
          token: v,
          unit: y = "ether",
        } = e;
        if (v)
          try {
            return f(t, {
              balanceAddress: o,
              chainId: m,
              symbolType: "string",
              tokenAddress: v,
            });
          } catch (e) {
            if (e instanceof n.uq) {
              let e = await f(t, {
                  balanceAddress: o,
                  chainId: m,
                  symbolType: "bytes32",
                  tokenAddress: v,
                }),
                a = (0, r.rR)((0, l.f)(e.symbol, { dir: "right" }));
              return { ...e, symbol: a };
            }
            throw e;
          }
        let b = t.getClient({ chainId: m }),
          p = (0, c.s)(b, u.s, "getBalance"),
          g = await p(
            d ? { address: o, blockNumber: d } : { address: o, blockTag: h }
          ),
          w =
            null !== (a = t.chains.find((t) => t.id === m)) && void 0 !== a
              ? a
              : b.chain;
        return {
          decimals: w.nativeCurrency.decimals,
          formatted: (0, i.b)(g, (0, s.W)(y)),
          symbol: w.nativeCurrency.symbol,
          value: g,
        };
      }
      async function f(t, e) {
        let {
            balanceAddress: a,
            chainId: n,
            symbolType: r,
            tokenAddress: l,
            unit: u,
          } = e,
          c = {
            abi: [
              {
                type: "function",
                name: "balanceOf",
                stateMutability: "view",
                inputs: [{ type: "address" }],
                outputs: [{ type: "uint256" }],
              },
              {
                type: "function",
                name: "decimals",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: "uint8" }],
              },
              {
                type: "function",
                name: "symbol",
                stateMutability: "view",
                inputs: [],
                outputs: [{ type: r }],
              },
            ],
            address: l,
          },
          [d, f, h] = await (0, o.J)(t, {
            allowFailure: !1,
            contracts: [
              { ...c, functionName: "balanceOf", args: [a], chainId: n },
              { ...c, functionName: "decimals", chainId: n },
              { ...c, functionName: "symbol", chainId: n },
            ],
          }),
          m = (0, i.b)(null != d ? d : "0", (0, s.W)(null != u ? u : f));
        return { decimals: f, formatted: m, symbol: h, value: d };
      }
    },
    36263: function (t, e, a) {
      a.d(e, {
        J: function () {
          return c;
        },
      });
      var n = a(47115),
        r = a(4481),
        l = a(37225);
      async function i(t, e) {
        let { allowFailure: a = !0, chainId: n, contracts: i, ...u } = e,
          c = t.getClient({ chainId: n });
        return (0, l.s)(
          c,
          r.A,
          "multicall"
        )({ allowFailure: a, contracts: i, ...u });
      }
      var u = a(31723);
      async function c(t, e) {
        let { allowFailure: a = !0, blockNumber: r, blockTag: l, ...c } = e,
          s = e.contracts;
        try {
          let e = s.reduce((e, a, n) => {
              var r;
              let l =
                null !== (r = a.chainId) && void 0 !== r ? r : t.state.chainId;
              return {
                ...e,
                [l]: [...(e[l] || []), { contract: a, index: n }],
              };
            }, {}),
            n = (
              await Promise.all(
                Object.entries(e).map((e) => {
                  let [n, u] = e;
                  return i(t, {
                    ...c,
                    allowFailure: a,
                    blockNumber: r,
                    blockTag: l,
                    chainId: parseInt(n),
                    contracts: u.map((t) => {
                      let { contract: e } = t;
                      return e;
                    }),
                  });
                })
              )
            ).flat(),
            u = Object.values(e).flatMap((t) =>
              t.map((t) => {
                let { index: e } = t;
                return e;
              })
            );
          return n.reduce((t, e, a) => (t && (t[u[a]] = e), t), []);
        } catch (i) {
          if (i instanceof n.uq) throw i;
          let e = () =>
            s.map((e) => (0, u.L)(t, { ...e, blockNumber: r, blockTag: l }));
          if (a)
            return (await Promise.allSettled(e())).map((t) =>
              "fulfilled" === t.status
                ? { result: t.value, status: "success" }
                : { error: t.reason, result: void 0, status: "failure" }
            );
          return await Promise.all(e());
        }
      }
    },
    52938: function (t, e, a) {
      a.d(e, {
        W: function () {
          return r;
        },
      });
      var n = a(4817);
      function r(t) {
        return "number" == typeof t ? t : "wei" === t ? 0 : Math.abs(n.Bd[t]);
      }
    },
    82756: function (t, e, a) {
      a.d(e, {
        s: function () {
          return r;
        },
      });
      var n = a(15578);
      async function r(t, e) {
        let { address: a, blockNumber: r, blockTag: l = "latest" } = e,
          i = r ? (0, n.eC)(r) : void 0;
        return BigInt(
          await t.request({ method: "eth_getBalance", params: [a, i || l] })
        );
      }
    },
    4481: function (t, e, a) {
      a.d(e, {
        A: function () {
          return h;
        },
      });
      var n = a(10035),
        r = a(45581),
        l = a(80230),
        i = a(47115),
        u = a(27470),
        c = a(3551),
        s = a(73621),
        o = a(95094),
        d = a(31935),
        f = a(96130);
      async function h(t, e) {
        var a;
        let {
            allowFailure: h = !0,
            batchSize: m,
            blockNumber: v,
            blockTag: y,
            multicallAddress: b,
            stateOverride: p,
          } = e,
          g = e.contracts,
          w =
            null != m
              ? m
              : ("object" ==
                  typeof (null === (a = t.batch) || void 0 === a
                    ? void 0
                    : a.multicall) &&
                  t.batch.multicall.batchSize) ||
                1024,
          C = b;
        if (!C) {
          if (!t.chain)
            throw Error(
              "client chain not configured. multicallAddress is required."
            );
          C = (0, s.L)({
            blockNumber: v,
            chain: t.chain,
            contract: "multicall3",
          });
        }
        let I = [[]],
          S = 0,
          k = 0;
        for (let t = 0; t < g.length; t++) {
          let { abi: e, address: a, args: n, functionName: r } = g[t];
          try {
            let t = (0, c.R)({ abi: e, args: n, functionName: r });
            (k += (t.length - 2) / 2),
              w > 0 &&
                k > w &&
                I[S].length > 0 &&
                (S++, (k = (t.length - 2) / 2), (I[S] = [])),
              (I[S] = [...I[S], { allowFailure: !0, callData: t, target: a }]);
          } catch (l) {
            let t = (0, o.S)(l, {
              abi: e,
              address: a,
              args: n,
              docsPath: "/docs/contract/multicall",
              functionName: r,
            });
            if (!h) throw t;
            I[S] = [...I[S], { allowFailure: !0, callData: "0x", target: a }];
          }
        }
        let M = await Promise.allSettled(
            I.map((e) =>
              (0, d.s)(
                t,
                f.L,
                "readContract"
              )({
                abi: n.F8,
                address: C,
                args: [e],
                blockNumber: v,
                blockTag: y,
                functionName: "aggregate3",
                stateOverride: p,
              })
            )
          ),
          q = [];
        for (let t = 0; t < M.length; t++) {
          let e = M[t];
          if ("rejected" === e.status) {
            if (!h) throw e.reason;
            for (let a = 0; a < I[t].length; a++)
              q.push({ status: "failure", error: e.reason, result: void 0 });
            continue;
          }
          let a = e.value;
          for (let e = 0; e < a.length; e++) {
            let { returnData: n, success: l } = a[e],
              { callData: c } = I[t][e],
              { abi: s, address: d, functionName: f, args: m } = g[q.length];
            try {
              if ("0x" === c) throw new r.wb();
              if (!l) throw new i.VQ({ data: n });
              let t = (0, u.k)({ abi: s, args: m, data: n, functionName: f });
              q.push(h ? { result: t, status: "success" } : t);
            } catch (e) {
              let t = (0, o.S)(e, {
                abi: s,
                address: d,
                args: m,
                docsPath: "/docs/contract/multicall",
                functionName: f,
              });
              if (!h) throw t;
              q.push({ error: t, result: void 0, status: "failure" });
            }
          }
        }
        if (q.length !== g.length) throw new l.G("multicall results mismatch");
        return q;
      }
    },
    39617: function (t, e, a) {
      a.r(e),
        a.d(e, {
          useReadContracts: function () {
            return s;
          },
        });
      var n = a(36263),
        r = a(73054),
        l = a(64090),
        i = a(38760),
        u = a(43089),
        c = a(42887);
      function s() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { contracts: a = [], query: s = {} } = e,
          o = (0, c.useConfig)(e),
          d = (0, u.useChainId)(),
          f = (function (t) {
            let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(a) {
                let { queryKey: r } = a,
                  l = [],
                  i = r[1].contracts.length;
                for (let t = 0; t < i; t++) {
                  var u;
                  let a = r[1].contracts[t],
                    n = (
                      null === (u = e.contracts) || void 0 === u ? void 0 : u[t]
                    ).abi;
                  l.push({ ...a, abi: n });
                }
                let { scopeKey: c, ...s } = r[1];
                return (0, n.J)(t, { ...s, contracts: l });
              },
              queryKey: (function () {
                var t, e;
                let a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  n = [];
                for (let r of null !== (t = a.contracts) && void 0 !== t
                  ? t
                  : []) {
                  let { abi: t, ...l } = r;
                  n.push({
                    ...l,
                    chainId:
                      null !== (e = l.chainId) && void 0 !== e ? e : a.chainId,
                  });
                }
                return ["readContracts", (0, r.O)({ ...a, contracts: n })];
              })(e),
            };
          })(o, { ...e, chainId: d }),
          h = (0, l.useMemo)(() => {
            var t;
            let e = !1;
            for (let t of a) {
              let { abi: a, address: n, functionName: r } = t;
              if (!a || !n || !r) {
                e = !1;
                break;
              }
              e = !0;
            }
            return !!(e && (null === (t = s.enabled) || void 0 === t || t));
          }, [a, s.enabled]);
        return (0, i.aM)({
          ...f,
          ...s,
          enabled: h,
          structuralSharing:
            null !== (t = s.structuralSharing) && void 0 !== t ? t : i.if,
        });
      }
    },
  },
]);
