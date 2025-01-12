"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4404],
  {
    14749: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
      }
    },
    61266: function (e, t, n) {
      n.d(t, {
        F: function () {
          return a;
        },
        e: function () {
          return r;
        },
      });
      var i = n(64090);
      function a() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) =>
          t.forEach((t) => {
            "function" == typeof t ? t(e) : null != t && (t.current = e);
          });
      }
      function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, i.useCallback)(a(...t), t);
      }
    },
    29586: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return s;
        },
        jH: function () {
          return l;
        },
      });
      var i = n(14749),
        a = n(64090),
        r = n(89542),
        o = n(59143);
      let s = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = (0, a.forwardRef)((e, n) => {
          let { asChild: r, ...s } = e,
            l = r ? o.g7 : t;
          return (
            (0, a.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, a.createElement)(l, (0, i.Z)({}, s, { ref: n }))
          );
        });
        return (n.displayName = "Primitive.".concat(t)), { ...e, [t]: n };
      }, {});
      function l(e, t) {
        e && (0, r.flushSync)(() => e.dispatchEvent(t));
      }
    },
    59143: function (e, t, n) {
      n.d(t, {
        A4: function () {
          return l;
        },
        g7: function () {
          return o;
        },
      });
      var i = n(14749),
        a = n(64090),
        r = n(61266);
      let o = (0, a.forwardRef)((e, t) => {
        let { children: n, ...r } = e,
          o = a.Children.toArray(n),
          l = o.find(u);
        if (l) {
          let e = l.props.children,
            n = o.map((t) =>
              t !== l
                ? t
                : a.Children.count(e) > 1
                ? a.Children.only(null)
                : (0, a.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, a.createElement)(
            s,
            (0, i.Z)({}, r, { ref: t }),
            (0, a.isValidElement)(e) ? (0, a.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, a.createElement)(s, (0, i.Z)({}, r, { ref: t }), n);
      });
      o.displayName = "Slot";
      let s = (0, a.forwardRef)((e, t) => {
        let { children: n, ...i } = e;
        return (0, a.isValidElement)(n)
          ? (0, a.cloneElement)(n, {
              ...(function (e, t) {
                let n = { ...t };
                for (let i in t) {
                  let a = e[i],
                    r = t[i];
                  /^on[A-Z]/.test(i)
                    ? a && r
                      ? (n[i] = function () {
                          for (
                            var e = arguments.length, t = Array(e), n = 0;
                            n < e;
                            n++
                          )
                            t[n] = arguments[n];
                          r(...t), a(...t);
                        })
                      : a && (n[i] = a)
                    : "style" === i
                    ? (n[i] = { ...a, ...r })
                    : "className" === i &&
                      (n[i] = [a, r].filter(Boolean).join(" "));
                }
                return { ...e, ...n };
              })(i, n.props),
              ref: t ? (0, r.F)(t, n.ref) : n.ref,
            })
          : a.Children.count(n) > 1
          ? a.Children.only(null)
          : null;
      });
      s.displayName = "SlotClone";
      let l = (e) => {
        let { children: t } = e;
        return (0, a.createElement)(a.Fragment, null, t);
      };
      function u(e) {
        return (0, a.isValidElement)(e) && e.type === l;
      }
    },
    1793: function (e, t, n) {
      n.d(t, {
        R: function () {
          return b;
        },
        m: function () {
          return p;
        },
      });
      var i,
        a,
        r,
        o,
        s,
        l = n(32731),
        u = n(48146),
        c = n(5577),
        d = n(94831),
        h = n(37920),
        f = n(45139),
        v = n(2041),
        m = n(90326),
        p =
          ((i = new WeakMap()),
          (a = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakMap()),
          (s = new WeakSet()),
          class extends v.F {
            setOptions(e) {
              (this.options = { ...(0, l._)(this, a), ...e }),
                this.updateGcTime(this.options.gcTime);
            }
            get meta() {
              return this.options.meta;
            }
            addObserver(e) {
              (0, l._)(this, i).includes(e) ||
                ((0, l._)(this, i).push(e),
                this.clearGcTimeout(),
                (0, l._)(this, r).notify({
                  type: "observerAdded",
                  mutation: this,
                  observer: e,
                }));
            }
            removeObserver(e) {
              (0, c._)(
                this,
                i,
                (0, l._)(this, i).filter((t) => t !== e)
              ),
                this.scheduleGc(),
                (0, l._)(this, r).notify({
                  type: "observerRemoved",
                  mutation: this,
                  observer: e,
                });
            }
            optionalRemove() {
              (0, l._)(this, i).length ||
                ("pending" === this.state.status
                  ? this.scheduleGc()
                  : (0, l._)(this, r).remove(this));
            }
            continue() {
              var e, t;
              return null !==
                (t =
                  null === (e = (0, l._)(this, o)) || void 0 === e
                    ? void 0
                    : e.continue()) && void 0 !== t
                ? t
                : this.execute(this.state.variables);
            }
            async execute(e) {
              var t, n, i, a, u, h, f, v, p, b, g, w, P, _, x, G, k, F, B, C;
              let I = "pending" === this.state.status;
              try {
                if (!I) {
                  (0, d._)(this, s, y).call(this, {
                    type: "pending",
                    variables: e,
                  }),
                    await (null ===
                      (p = (b = (0, l._)(this, r).config).onMutate) ||
                    void 0 === p
                      ? void 0
                      : p.call(b, e, this));
                  let t = await (null === (g = (w = this.options).onMutate) ||
                  void 0 === g
                    ? void 0
                    : g.call(w, e));
                  t !== this.state.context &&
                    (0, d._)(this, s, y).call(this, {
                      type: "pending",
                      context: t,
                      variables: e,
                    });
                }
                let P = await (() => {
                  var t;
                  return (
                    (0, c._)(
                      this,
                      o,
                      (0, m.Mz)({
                        fn: () =>
                          this.options.mutationFn
                            ? this.options.mutationFn(e)
                            : Promise.reject(Error("No mutationFn found")),
                        onFail: (e, t) => {
                          (0, d._)(this, s, y).call(this, {
                            type: "failed",
                            failureCount: e,
                            error: t,
                          });
                        },
                        onPause: () => {
                          (0, d._)(this, s, y).call(this, { type: "pause" });
                        },
                        onContinue: () => {
                          (0, d._)(this, s, y).call(this, { type: "continue" });
                        },
                        retry:
                          null !== (t = this.options.retry) && void 0 !== t
                            ? t
                            : 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                      })
                    ),
                    (0, l._)(this, o).promise
                  );
                })();
                return (
                  await (null ===
                    (t = (n = (0, l._)(this, r).config).onSuccess) ||
                  void 0 === t
                    ? void 0
                    : t.call(n, P, e, this.state.context, this)),
                  await (null === (i = (a = this.options).onSuccess) ||
                  void 0 === i
                    ? void 0
                    : i.call(a, P, e, this.state.context)),
                  await (null ===
                    (u = (h = (0, l._)(this, r).config).onSettled) ||
                  void 0 === u
                    ? void 0
                    : u.call(
                        h,
                        P,
                        null,
                        this.state.variables,
                        this.state.context,
                        this
                      )),
                  await (null === (f = (v = this.options).onSettled) ||
                  void 0 === f
                    ? void 0
                    : f.call(v, P, null, e, this.state.context)),
                  (0, d._)(this, s, y).call(this, { type: "success", data: P }),
                  P
                );
              } catch (t) {
                try {
                  throw (
                    (await (null ===
                      (P = (_ = (0, l._)(this, r).config).onError) ||
                    void 0 === P
                      ? void 0
                      : P.call(_, t, e, this.state.context, this)),
                    await (null === (x = (G = this.options).onError) ||
                    void 0 === x
                      ? void 0
                      : x.call(G, t, e, this.state.context)),
                    await (null ===
                      (k = (F = (0, l._)(this, r).config).onSettled) ||
                    void 0 === k
                      ? void 0
                      : k.call(
                          F,
                          void 0,
                          t,
                          this.state.variables,
                          this.state.context,
                          this
                        )),
                    await (null === (B = (C = this.options).onSettled) ||
                    void 0 === B
                      ? void 0
                      : B.call(C, void 0, t, e, this.state.context)),
                    t)
                  );
                } finally {
                  (0, d._)(this, s, y).call(this, { type: "error", error: t });
                }
              }
            }
            constructor(e) {
              super(),
                (0, h._)(this, s),
                (0, u._)(this, i, { writable: !0, value: void 0 }),
                (0, u._)(this, a, { writable: !0, value: void 0 }),
                (0, u._)(this, r, { writable: !0, value: void 0 }),
                (0, u._)(this, o, { writable: !0, value: void 0 }),
                (this.mutationId = e.mutationId),
                (0, c._)(this, a, e.defaultOptions),
                (0, c._)(this, r, e.mutationCache),
                (0, c._)(this, i, []),
                (this.state = e.state || b()),
                this.setOptions(e.options),
                this.scheduleGc();
            }
          });
      function b() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
      function y(e) {
        (this.state = ((t) => {
          switch (e.type) {
            case "failed":
              return {
                ...t,
                failureCount: e.failureCount,
                failureReason: e.error,
              };
            case "pause":
              return { ...t, isPaused: !0 };
            case "continue":
              return { ...t, isPaused: !1 };
            case "pending":
              return {
                ...t,
                context: e.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: !(0, m.Kw)(this.options.networkMode),
                status: "pending",
                variables: e.variables,
                submittedAt: Date.now(),
              };
            case "success":
              return {
                ...t,
                data: e.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1,
              };
            case "error":
              return {
                ...t,
                data: void 0,
                error: e.error,
                failureCount: t.failureCount + 1,
                failureReason: e.error,
                isPaused: !1,
                status: "error",
              };
          }
        })(this.state)),
          f.V.batch(() => {
            (0, l._)(this, i).forEach((t) => {
              t.onMutationUpdate(e);
            }),
              (0, l._)(this, r).notify({
                mutation: this,
                type: "updated",
                action: e,
              });
          });
      }
    },
    2041: function (e, t, n) {
      n.d(t, {
        F: function () {
          return l;
        },
      });
      var i,
        a = n(32731),
        r = n(48146),
        o = n(5577),
        s = n(46063),
        l =
          ((i = new WeakMap()),
          class {
            destroy() {
              this.clearGcTimeout();
            }
            scheduleGc() {
              this.clearGcTimeout(),
                (0, s.PN)(this.gcTime) &&
                  (0, o._)(
                    this,
                    i,
                    setTimeout(() => {
                      this.optionalRemove();
                    }, this.gcTime)
                  );
            }
            updateGcTime(e) {
              this.gcTime = Math.max(
                this.gcTime || 0,
                null != e ? e : s.sk ? 1 / 0 : 3e5
              );
            }
            clearGcTimeout() {
              (0, a._)(this, i) &&
                (clearTimeout((0, a._)(this, i)), (0, o._)(this, i, void 0));
            }
            constructor() {
              (0, r._)(this, i, { writable: !0, value: void 0 });
            }
          });
    },
    20568: function (e, t, n) {
      n.d(t, {
        D: function () {
          return G;
        },
      });
      var i,
        a,
        r,
        o,
        s,
        l,
        u = n(64090),
        c = n(32731),
        d = n(48146),
        h = n(5577),
        f = n(94831),
        v = n(37920),
        m = n(1793),
        p = n(45139),
        b = n(44614),
        y = n(46063),
        g =
          ((i = new WeakMap()),
          (a = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakMap()),
          (s = new WeakSet()),
          (l = new WeakSet()),
          class extends b.l {
            bindMethods() {
              (this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this));
            }
            setOptions(e) {
              let t = this.options;
              if (
                ((this.options = (0, c._)(this, i).defaultMutationOptions(e)),
                (0, y.VS)(this.options, t) ||
                  (0, c._)(this, i)
                    .getMutationCache()
                    .notify({
                      type: "observerOptionsUpdated",
                      mutation: (0, c._)(this, r),
                      observer: this,
                    }),
                (null == t ? void 0 : t.mutationKey) &&
                  this.options.mutationKey &&
                  (0, y.Ym)(t.mutationKey) !==
                    (0, y.Ym)(this.options.mutationKey))
              )
                this.reset();
              else {
                var n;
                null === (n = (0, c._)(this, r)) ||
                  void 0 === n ||
                  n.setOptions(this.options);
              }
            }
            onUnsubscribe() {
              if (!this.hasListeners()) {
                var e;
                null === (e = (0, c._)(this, r)) ||
                  void 0 === e ||
                  e.removeObserver(this);
              }
            }
            onMutationUpdate(e) {
              (0, f._)(this, s, w).call(this),
                (0, f._)(this, l, P).call(this, e);
            }
            getCurrentResult() {
              return (0, c._)(this, a);
            }
            reset() {
              var e;
              null === (e = (0, c._)(this, r)) ||
                void 0 === e ||
                e.removeObserver(this),
                (0, h._)(this, r, void 0),
                (0, f._)(this, s, w).call(this),
                (0, f._)(this, l, P).call(this);
            }
            mutate(e, t) {
              var n;
              return (
                (0, h._)(this, o, t),
                null === (n = (0, c._)(this, r)) ||
                  void 0 === n ||
                  n.removeObserver(this),
                (0, h._)(
                  this,
                  r,
                  (0, c._)(this, i)
                    .getMutationCache()
                    .build((0, c._)(this, i), this.options)
                ),
                (0, c._)(this, r).addObserver(this),
                (0, c._)(this, r).execute(e)
              );
            }
            constructor(e, t) {
              super(),
                (0, v._)(this, s),
                (0, v._)(this, l),
                (0, d._)(this, i, { writable: !0, value: void 0 }),
                (0, d._)(this, a, { writable: !0, value: void 0 }),
                (0, d._)(this, r, { writable: !0, value: void 0 }),
                (0, d._)(this, o, { writable: !0, value: void 0 }),
                (0, h._)(this, a, void 0),
                (0, h._)(this, i, e),
                this.setOptions(t),
                this.bindMethods(),
                (0, f._)(this, s, w).call(this);
            }
          });
      function w() {
        var e, t;
        let n =
          null !==
            (t =
              null === (e = (0, c._)(this, r)) || void 0 === e
                ? void 0
                : e.state) && void 0 !== t
            ? t
            : (0, m.R)();
        (0, h._)(this, a, {
          ...n,
          isPending: "pending" === n.status,
          isSuccess: "success" === n.status,
          isError: "error" === n.status,
          isIdle: "idle" === n.status,
          mutate: this.mutate,
          reset: this.reset,
        });
      }
      function P(e) {
        p.V.batch(() => {
          if ((0, c._)(this, o) && this.hasListeners()) {
            var t, n, i, r, s, l, u, d;
            let h = (0, c._)(this, a).variables,
              f = (0, c._)(this, a).context;
            (null == e ? void 0 : e.type) === "success"
              ? (null === (t = (n = (0, c._)(this, o)).onSuccess) ||
                  void 0 === t ||
                  t.call(n, e.data, h, f),
                null === (i = (r = (0, c._)(this, o)).onSettled) ||
                  void 0 === i ||
                  i.call(r, e.data, null, h, f))
              : (null == e ? void 0 : e.type) === "error" &&
                (null === (s = (l = (0, c._)(this, o)).onError) ||
                  void 0 === s ||
                  s.call(l, e.error, h, f),
                null === (u = (d = (0, c._)(this, o)).onSettled) ||
                  void 0 === u ||
                  u.call(d, void 0, e.error, h, f));
          }
          this.listeners.forEach((e) => {
            e((0, c._)(this, a));
          });
        });
      }
      var _ = n(47082),
        x = n(20826);
      function G(e, t) {
        let n = (0, _.NL)(t),
          [i] = u.useState(() => new g(n, e));
        u.useEffect(() => {
          i.setOptions(e);
        }, [i, e]);
        let a = u.useSyncExternalStore(
            u.useCallback((e) => i.subscribe(p.V.batchCalls(e)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          r = u.useCallback(
            (e, t) => {
              i.mutate(e, t).catch(k);
            },
            [i]
          );
        if (a.error && (0, x.L)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: r, mutateAsync: a.mutate };
      }
      function k() {}
    },
    38507: function (e, t, n) {
      n.d(t, {
        e: function () {
          return s;
        },
      });
      var i = n(82690),
        a = n(27530),
        r = n(79561),
        o = n(2731);
      async function s(e) {
        var t, n;
        let s,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (l.connector) {
          let { connector: e } = l,
            [t, n] = await Promise.all([e.getAccounts(), e.getChainId()]);
          s = { accounts: t, chainId: n, connector: e };
        } else s = e.state.connections.get(e.state.current);
        if (!s) throw new o.aH();
        let u = null !== (t = l.chainId) && void 0 !== t ? t : s.chainId,
          c = s.connector;
        if (c.getClient) return c.getClient({ chainId: u });
        let d = (0, r.T)(
            null !== (n = l.account) && void 0 !== n ? n : s.accounts[0]
          ),
          h = e.chains.find((e) => e.id === u),
          f = await s.connector.getProvider({ chainId: u });
        if (l.account && !s.accounts.includes(d.address))
          throw new o.JK({ address: d.address, connector: c });
        return (0, i.e)({
          account: d,
          chain: h,
          name: "Connector Client",
          transport: (e) =>
            (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                {
                  key: n = "custom",
                  name: i = "Custom Provider",
                  retryDelay: r,
                } = t;
              return (o) => {
                var s;
                let { retryCount: l } = o;
                return (0, a.q)({
                  key: n,
                  name: i,
                  request: e.request.bind(e),
                  retryCount:
                    null !== (s = t.retryCount) && void 0 !== s ? s : l,
                  retryDelay: r,
                  type: "custom",
                });
              };
            })(f)({ ...e, retryCount: 0 }),
        });
      }
    },
    80292: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var i = n(40518),
        a = n(37225),
        r = n(38507);
      async function o(e, t) {
        let n;
        let { abi: o, chainId: s, connector: l, ...u } = t;
        n = t.account
          ? t.account
          : (await (0, r.e)(e, { chainId: s, connector: l })).account;
        let c = e.getClient({ chainId: s }),
          d = (0, a.s)(c, i.a, "simulateContract"),
          { result: h, request: f } = await d({ ...u, abi: o, account: n });
        return {
          chainId: c.chain.id,
          result: h,
          request: { __mode: "prepared", ...f, chainId: s },
        };
      }
    },
    64269: function (e, t, n) {
      n.d(t, {
        C: function () {
          return u;
        },
        X: function () {
          return l;
        },
      });
      var i = n(78862),
        a = n(31935),
        r = n(80330),
        o = n(4781),
        s = n(52530);
      async function l(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        var n, l, u, c, d;
        let {
            block: h,
            chain: f = e.chain,
            request: v,
            type: m = "eip1559",
          } = t || {},
          p = await (async () => {
            var t, n, i;
            return "function" ==
              typeof (null == f
                ? void 0
                : null === (t = f.fees) || void 0 === t
                ? void 0
                : t.baseFeeMultiplier)
              ? f.fees.baseFeeMultiplier({ block: h, client: e, request: v })
              : null !==
                  (i =
                    null == f
                      ? void 0
                      : null === (n = f.fees) || void 0 === n
                      ? void 0
                      : n.baseFeeMultiplier) && void 0 !== i
              ? i
              : 1.2;
          })();
        if (p < 1) throw new i.Fz();
        let b =
            10 **
            (null !==
              (u =
                null === (n = p.toString().split(".")[1]) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== u
              ? u
              : 0),
          y = (e) => (e * BigInt(Math.ceil(p * b))) / BigInt(b),
          g = h || (await (0, a.s)(e, o.Q, "getBlock")({}));
        if (
          "function" ==
          typeof (null == f
            ? void 0
            : null === (l = f.fees) || void 0 === l
            ? void 0
            : l.estimateFeesPerGas)
        )
          return f.fees.estimateFeesPerGas({
            block: h,
            client: e,
            multiply: y,
            request: v,
            type: m,
          });
        if ("eip1559" === m) {
          if ("bigint" != typeof g.baseFeePerGas) throw new i.e5();
          let t =
              "bigint" == typeof (null == v ? void 0 : v.maxPriorityFeePerGas)
                ? v.maxPriorityFeePerGas
                : await (0, r.h)(e, { block: g, chain: f, request: v }),
            n = y(g.baseFeePerGas);
          return {
            maxFeePerGas:
              null !== (c = null == v ? void 0 : v.maxFeePerGas) && void 0 !== c
                ? c
                : n + t,
            maxPriorityFeePerGas: t,
          };
        }
        return {
          gasPrice:
            null !== (d = null == v ? void 0 : v.gasPrice) && void 0 !== d
              ? d
              : y(await (0, a.s)(e, s.o, "getGasPrice")({})),
        };
      }
    },
    24581: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return p;
        },
      });
      var i = n(79561),
        a = n(15578),
        r = n(52926),
        o = n(98206),
        s = n(80230),
        l = n(10289);
      class u extends s.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: i,
            data: a,
            gas: s,
            gasPrice: u,
            maxFeePerGas: c,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: v,
          }
        ) {
          var m;
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Estimate Gas Arguments:",
              (0, l.xr)({
                from: null == t ? void 0 : t.address,
                to: f,
                value:
                  void 0 !== v &&
                  ""
                    .concat((0, r.d)(v), " ")
                    .concat(
                      (null == i
                        ? void 0
                        : null === (m = i.nativeCurrency) || void 0 === m
                        ? void 0
                        : m.symbol) || "ETH"
                    ),
                data: a,
                gas: s,
                gasPrice: void 0 !== u && "".concat((0, o.o)(u), " gwei"),
                maxFeePerGas: void 0 !== c && "".concat((0, o.o)(c), " gwei"),
                maxPriorityFeePerGas:
                  void 0 !== d && "".concat((0, o.o)(d), " gwei"),
                nonce: h,
              }),
            ].filter(Boolean),
          }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EstimateGasExecutionError",
            }),
            (this.cause = e);
        }
      }
      var c = n(26463),
        d = n(85069),
        h = n(67306),
        f = n(20662),
        v = n(15337),
        m = n(63387);
      async function p(e, t) {
        var n, r, o, s;
        let l = null !== (n = t.account) && void 0 !== n ? n : e.account,
          p = l ? (0, i.T)(l) : void 0;
        try {
          let {
              accessList: n,
              blockNumber: i,
              blockTag: l,
              data: u,
              gas: c,
              gasPrice: d,
              maxFeePerGas: b,
              maxPriorityFeePerGas: y,
              nonce: g,
              to: w,
              value: P,
              ..._
            } = (null == p ? void 0 : p.type) === "local"
              ? await (0, m.Z)(e, t)
              : t,
            x = (i ? (0, a.eC)(i) : void 0) || l;
          (0, v.F)(t);
          let G =
              null === (s = e.chain) || void 0 === s
                ? void 0
                : null === (o = s.formatters) || void 0 === o
                ? void 0
                : null === (r = o.transactionRequest) || void 0 === r
                ? void 0
                : r.format,
            k = (G || f.tG)({
              ...(0, h.K)(_, { format: G }),
              from: null == p ? void 0 : p.address,
              accessList: n,
              data: u,
              gas: c,
              gasPrice: d,
              maxFeePerGas: b,
              maxPriorityFeePerGas: y,
              nonce: g,
              to: w,
              value: P,
            }),
            F = await e.request({
              method: "eth_estimateGas",
              params: x ? [k, x] : [k],
            });
          return BigInt(F);
        } catch (n) {
          throw (function (e, t) {
            let { docsPath: n, ...i } = t;
            return new u(
              (() => {
                let t = (0, d.k)(e, i);
                return t instanceof c.cj ? e : t;
              })(),
              { docsPath: n, ...i }
            );
          })(n, { ...t, account: p, chain: e.chain });
        }
      }
    },
    80330: function (e, t, n) {
      n.d(t, {
        _: function () {
          return l;
        },
        h: function () {
          return u;
        },
      });
      var i = n(78862),
        a = n(55936),
        r = n(31935),
        o = n(4781),
        s = n(52530);
      async function l(e, t) {
        return u(e, t);
      }
      async function u(e, t) {
        var n, l, u;
        let { block: c, chain: d = e.chain, request: h } = t || {};
        if (
          "function" ==
          typeof (null == d
            ? void 0
            : null === (n = d.fees) || void 0 === n
            ? void 0
            : n.defaultPriorityFee)
        ) {
          let t = c || (await (0, r.s)(e, o.Q, "getBlock")({}));
          return d.fees.defaultPriorityFee({ block: t, client: e, request: h });
        }
        if (
          void 0 !==
          (null == d
            ? void 0
            : null === (l = d.fees) || void 0 === l
            ? void 0
            : l.defaultPriorityFee)
        )
          return null == d
            ? void 0
            : null === (u = d.fees) || void 0 === u
            ? void 0
            : u.defaultPriorityFee;
        try {
          let t = await e.request({ method: "eth_maxPriorityFeePerGas" });
          return (0, a.y_)(t);
        } catch (l) {
          let [t, n] = await Promise.all([
            c ? Promise.resolve(c) : (0, r.s)(e, o.Q, "getBlock")({}),
            (0, r.s)(e, s.o, "getGasPrice")({}),
          ]);
          if ("bigint" != typeof t.baseFeePerGas) throw new i.e5();
          let a = n - t.baseFeePerGas;
          if (a < 0n) return 0n;
          return a;
        }
      }
    },
    4781: function (e, t, n) {
      n.d(t, {
        Q: function () {
          return o;
        },
      });
      var i = n(30410),
        a = n(15578),
        r = n(44324);
      async function o(e) {
        var t, n, o;
        let {
            blockHash: s,
            blockNumber: l,
            blockTag: u,
            includeTransactions: c,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {},
          d = null != c && c,
          h = void 0 !== l ? (0, a.eC)(l) : void 0,
          f = null;
        if (
          !(f = s
            ? await e.request({ method: "eth_getBlockByHash", params: [s, d] })
            : await e.request({
                method: "eth_getBlockByNumber",
                params: [h || (null != u ? u : "latest"), d],
              }))
        )
          throw new i.f({ blockHash: s, blockNumber: l });
        return (
          (null === (o = e.chain) || void 0 === o
            ? void 0
            : null === (n = o.formatters) || void 0 === n
            ? void 0
            : null === (t = n.block) || void 0 === t
            ? void 0
            : t.format) || r.Z
        )(f);
      }
    },
    86395: function (e, t, n) {
      n.d(t, {
        z: function () {
          return s;
        },
      });
      let i = new Map(),
        a = new Map();
      async function r(e, t) {
        let { cacheKey: n, cacheTime: r = 1 / 0 } = t,
          o = (function (e) {
            let t = (e, t) => ({
                clear: () => t.delete(e),
                get: () => t.get(e),
                set: (n) => t.set(e, n),
              }),
              n = t(e, i),
              r = t(e, a);
            return {
              clear: () => {
                n.clear(), r.clear();
              },
              promise: n,
              response: r,
            };
          })(n),
          s = o.response.get();
        if (s && r > 0 && new Date().getTime() - s.created.getTime() < r)
          return s.data;
        let l = o.promise.get();
        l || ((l = e()), o.promise.set(l));
        try {
          let e = await l;
          return o.response.set({ created: new Date(), data: e }), e;
        } finally {
          o.promise.clear();
        }
      }
      let o = (e) => "blockNumber.".concat(e);
      async function s(e) {
        let { cacheTime: t = e.cacheTime } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return BigInt(
          await r(() => e.request({ method: "eth_blockNumber" }), {
            cacheKey: o(e.uid),
            cacheTime: t,
          })
        );
      }
    },
    23066: function (e, t, n) {
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var i = n(55936);
      async function a(e) {
        let t = await e.request({ method: "eth_chainId" });
        return (0, i.ly)(t);
      }
    },
    52530: function (e, t, n) {
      n.d(t, {
        o: function () {
          return i;
        },
      });
      async function i(e) {
        return BigInt(await e.request({ method: "eth_gasPrice" }));
      }
    },
    42624: function (e, t, n) {
      n.d(t, {
        f: function () {
          return o;
        },
      });
      var i = n(10289),
        a = n(15578),
        r = n(56547);
      async function o(e, t) {
        var n, o, s;
        let {
            blockHash: l,
            blockNumber: u,
            blockTag: c,
            hash: d,
            index: h,
          } = t,
          f = c || "latest",
          v = void 0 !== u ? (0, a.eC)(u) : void 0,
          m = null;
        if (
          (d
            ? (m = await e.request({
                method: "eth_getTransactionByHash",
                params: [d],
              }))
            : l
            ? (m = await e.request({
                method: "eth_getTransactionByBlockHashAndIndex",
                params: [l, (0, a.eC)(h)],
              }))
            : (v || f) &&
              (m = await e.request({
                method: "eth_getTransactionByBlockNumberAndIndex",
                params: [v || f, (0, a.eC)(h)],
              })),
          !m)
        )
          throw new i.Bh({
            blockHash: l,
            blockNumber: u,
            blockTag: f,
            hash: d,
            index: h,
          });
        return (
          (null === (s = e.chain) || void 0 === s
            ? void 0
            : null === (o = s.formatters) || void 0 === o
            ? void 0
            : null === (n = o.transaction) || void 0 === n
            ? void 0
            : n.format) || r.Tr
        )(m);
      }
    },
    36930: function (e, t, n) {
      n.d(t, {
        K: function () {
          return r;
        },
      });
      var i = n(55936),
        a = n(15578);
      async function r(e, t) {
        let { address: n, blockTag: r = "latest", blockNumber: o } = t,
          s = await e.request({
            method: "eth_getTransactionCount",
            params: [n, o ? (0, a.eC)(o) : r],
          });
        return (0, i.ly)(s);
      }
    },
    17362: function (e, t, n) {
      n.d(t, {
        a: function () {
          return l;
        },
      });
      var i = n(10289),
        a = n(55936),
        r = n(6819),
        o = n(56547);
      let s = { "0x0": "reverted", "0x1": "success" };
      async function l(e, t) {
        var n, l, u;
        let { hash: c } = t,
          d = await e.request({
            method: "eth_getTransactionReceipt",
            params: [c],
          });
        if (!d) throw new i.Yb({ hash: c });
        return (
          (null === (u = e.chain) || void 0 === u
            ? void 0
            : null === (l = u.formatters) || void 0 === l
            ? void 0
            : null === (n = l.transactionReceipt) || void 0 === n
            ? void 0
            : n.format) ||
          function (e) {
            let t = {
              ...e,
              blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
              contractAddress: e.contractAddress ? e.contractAddress : null,
              cumulativeGasUsed: e.cumulativeGasUsed
                ? BigInt(e.cumulativeGasUsed)
                : null,
              effectiveGasPrice: e.effectiveGasPrice
                ? BigInt(e.effectiveGasPrice)
                : null,
              gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
              logs: e.logs ? e.logs.map((e) => (0, r.U)(e)) : null,
              to: e.to ? e.to : null,
              transactionIndex: e.transactionIndex
                ? (0, a.ly)(e.transactionIndex)
                : null,
              status: e.status ? s[e.status] : null,
              type: e.type ? o.c8[e.type] || e.type : null,
            };
            return (
              e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)),
              e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)),
              t
            );
          }
        )(d);
      }
    },
    40518: function (e, t, n) {
      n.d(t, {
        a: function () {
          return u;
        },
      });
      var i = n(79561),
        a = n(27470),
        r = n(3551),
        o = n(95094),
        s = n(31935),
        l = n(8302);
      async function u(e, t) {
        let {
            abi: n,
            address: u,
            args: c,
            dataSuffix: d,
            functionName: h,
            ...f
          } = t,
          v = f.account ? (0, i.T)(f.account) : e.account,
          m = (0, r.R)({ abi: n, args: c, functionName: h });
        try {
          let { data: i } = await (0, s.s)(
              e,
              l.RE,
              "call"
            )({
              batch: !1,
              data: "".concat(m).concat(d ? d.replace("0x", "") : ""),
              to: u,
              ...f,
              account: v,
            }),
            r = (0, a.k)({ abi: n, args: c, functionName: h, data: i || "0x" }),
            o = n.filter((e) => "name" in e && e.name === t.functionName);
          return {
            result: r,
            request: {
              abi: o,
              address: u,
              args: c,
              dataSuffix: d,
              functionName: h,
              ...f,
              account: v,
            },
          };
        } catch (e) {
          throw (0, o.S)(e, {
            abi: n,
            address: u,
            args: c,
            docsPath: "/docs/contract/simulateContract",
            functionName: h,
            sender: null == v ? void 0 : v.address,
          });
        }
      }
    },
    70352: function (e, t, n) {
      n.d(t, {
        e: function () {
          return f;
        },
      });
      var i = n(30410),
        a = n(10289),
        r = n(31935),
        o = n(85583),
        s = n(42179),
        l = n(92791),
        u = n(4781),
        c = n(42624),
        d = n(17362),
        h = n(31462);
      async function f(e, t) {
        let n,
          f,
          v,
          {
            confirmations: m = 1,
            hash: p,
            onReplaced: b,
            pollingInterval: y = e.pollingInterval,
            retryCount: g = 6,
            retryDelay: w = (e) => {
              let { count: t } = e;
              return 200 * ~~(1 << t);
            },
            timeout: P,
          } = t,
          _ = (0, l.P)(["waitForTransactionReceipt", e.uid, p]),
          x = !1;
        return new Promise((t, l) => {
          P && setTimeout(() => l(new a.mc({ hash: p })), P);
          let G = (0, o.N7)(
            _,
            { onReplaced: b, resolve: t, reject: l },
            (t) => {
              let o = (0, r.s)(
                e,
                h.q,
                "watchBlockNumber"
              )({
                emitMissed: !0,
                emitOnBegin: !0,
                poll: !0,
                pollingInterval: y,
                async onBlockNumber(l) {
                  if (x) return;
                  let h = l,
                    b = (e) => {
                      o(), e(), G();
                    };
                  try {
                    if (v) {
                      if (
                        m > 1 &&
                        (!v.blockNumber || h - v.blockNumber + 1n < m)
                      )
                        return;
                      b(() => t.resolve(v));
                      return;
                    }
                    if (
                      (n ||
                        ((x = !0),
                        await (0, s.J)(
                          async () => {
                            (n = await (0, r.s)(
                              e,
                              c.f,
                              "getTransaction"
                            )({ hash: p })).blockNumber && (h = n.blockNumber);
                          },
                          { delay: w, retryCount: g }
                        ),
                        (x = !1)),
                      (v = await (0, r.s)(
                        e,
                        d.a,
                        "getTransactionReceipt"
                      )({ hash: p })),
                      m > 1 && (!v.blockNumber || h - v.blockNumber + 1n < m))
                    )
                      return;
                    b(() => t.resolve(v));
                  } catch (o) {
                    if (o instanceof a.Bh || o instanceof a.Yb) {
                      if (!n) {
                        x = !1;
                        return;
                      }
                      try {
                        (f = n), (x = !0);
                        let a = await (0, s.J)(
                          () =>
                            (0, r.s)(
                              e,
                              u.Q,
                              "getBlock"
                            )({ blockNumber: h, includeTransactions: !0 }),
                          {
                            delay: w,
                            retryCount: g,
                            shouldRetry: (e) => {
                              let { error: t } = e;
                              return t instanceof i.f;
                            },
                          }
                        );
                        x = !1;
                        let o = a.transactions.find((e) => {
                          let { from: t, nonce: n } = e;
                          return t === f.from && n === f.nonce;
                        });
                        if (
                          !o ||
                          ((v = await (0, r.s)(
                            e,
                            d.a,
                            "getTransactionReceipt"
                          )({ hash: o.hash })),
                          m > 1 &&
                            (!v.blockNumber || h - v.blockNumber + 1n < m))
                        )
                          return;
                        let l = "replaced";
                        o.to === f.to && o.value === f.value
                          ? (l = "repriced")
                          : o.from === o.to &&
                            0n === o.value &&
                            (l = "cancelled"),
                          b(() => {
                            var e;
                            null === (e = t.onReplaced) ||
                              void 0 === e ||
                              e.call(t, {
                                reason: l,
                                replacedTransaction: f,
                                transaction: o,
                                transactionReceipt: v,
                              }),
                              t.resolve(v);
                          });
                      } catch (e) {
                        b(() => t.reject(e));
                      }
                    } else b(() => t.reject(o));
                  }
                },
              });
            }
          );
        });
      }
    },
    31462: function (e, t, n) {
      n.d(t, {
        q: function () {
          return u;
        },
      });
      var i = n(55936),
        a = n(31935),
        r = n(85583),
        o = n(33e3),
        s = n(92791),
        l = n(86395);
      function u(e, t) {
        let n,
          u,
          c,
          {
            emitOnBegin: d = !1,
            emitMissed: h = !1,
            onBlockNumber: f,
            onError: v,
            poll: m,
            pollingInterval: p = e.pollingInterval,
          } = t;
        return (void 0 !== m ? m : "webSocket" !== e.transport.type)
          ? (() => {
              let t = (0, s.P)(["watchBlockNumber", e.uid, d, h, p]);
              return (0, r.N7)(t, { onBlockNumber: f, onError: v }, (t) =>
                (0, o.$)(
                  async () => {
                    try {
                      let n = await (0, a.s)(
                        e,
                        l.z,
                        "getBlockNumber"
                      )({ cacheTime: 0 });
                      if (c) {
                        if (n === c) return;
                        if (n - c > 1 && h)
                          for (let e = c + 1n; e < n; e++)
                            t.onBlockNumber(e, c), (c = e);
                      }
                      (!c || n > c) && (t.onBlockNumber(n, c), (c = n));
                    } catch (e) {
                      var n;
                      null === (n = t.onError) || void 0 === n || n.call(t, e);
                    }
                  },
                  { emitOnBegin: d, interval: p }
                )
              );
            })()
          : ((n = !0),
            (u = () => (n = !1)),
            (async () => {
              try {
                let { unsubscribe: t } = await e.transport.subscribe({
                  params: ["newHeads"],
                  onData(e) {
                    var t;
                    if (!n) return;
                    let a = (0, i.y_)(
                      null === (t = e.result) || void 0 === t
                        ? void 0
                        : t.number
                    );
                    f(a, c), (c = a);
                  },
                  onError(e) {
                    null == v || v(e);
                  },
                });
                (u = t), n || u();
              } catch (e) {
                null == v || v(e);
              }
            })(),
            u);
      }
    },
    63387: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = n(79561),
        a = n(64269),
        r = n(24581),
        o = n(4781),
        s = n(36930),
        l = n(78862),
        u = n(31935),
        c = n(15337),
        d = n(10289);
      async function h(e, t) {
        let {
            account: n = e.account,
            chain: h,
            gas: f,
            nonce: v,
            parameters: m = ["fees", "gas", "nonce", "type"],
            type: p,
          } = t,
          b = n ? (0, i.T)(n) : void 0,
          y = await (0, u.s)(e, o.Q, "getBlock")({ blockTag: "latest" }),
          g = { ...t, ...(b ? { from: null == b ? void 0 : b.address } : {}) };
        if (
          (m.includes("nonce") &&
            void 0 === v &&
            b &&
            (g.nonce = await (0, u.s)(
              e,
              s.K,
              "getTransactionCount"
            )({ address: b.address, blockTag: "pending" })),
          (m.includes("fees") || m.includes("type")) && void 0 === p)
        )
          try {
            g.type = (function (e) {
              if (e.type) return e.type;
              if (
                void 0 !== e.maxFeePerGas ||
                void 0 !== e.maxPriorityFeePerGas
              )
                return "eip1559";
              if (void 0 !== e.gasPrice)
                return void 0 !== e.accessList ? "eip2930" : "legacy";
              throw new d.j3({ transaction: e });
            })(g);
          } catch (e) {
            g.type = "bigint" == typeof y.baseFeePerGas ? "eip1559" : "legacy";
          }
        if (m.includes("fees")) {
          if ("eip1559" === g.type) {
            let { maxFeePerGas: n, maxPriorityFeePerGas: i } = await (0, a.C)(
              e,
              { block: y, chain: h, request: g }
            );
            if (
              void 0 === t.maxPriorityFeePerGas &&
              t.maxFeePerGas &&
              t.maxFeePerGas < i
            )
              throw new l.ld({ maxPriorityFeePerGas: i });
            (g.maxPriorityFeePerGas = i), (g.maxFeePerGas = n);
          } else {
            if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas)
              throw new l.e5();
            let { gasPrice: n } = await (0, a.C)(e, {
              block: y,
              chain: h,
              request: g,
              type: "legacy",
            });
            g.gasPrice = n;
          }
        }
        return (
          m.includes("gas") &&
            void 0 === f &&
            (g.gas = await (0, u.s)(
              e,
              r.Q,
              "estimateGas"
            )({
              ...g,
              account: b ? { address: b.address, type: "json-rpc" } : void 0,
            })),
          (0, c.F)(g),
          delete g.parameters,
          g
        );
      }
    },
    50165: function (e, t, n) {
      n.d(t, {
        p: function () {
          return i;
        },
      });
      async function i(e, t) {
        let { serializedTransaction: n } = t;
        return e.request(
          { method: "eth_sendRawTransaction", params: [n] },
          { retryCount: 0 }
        );
      }
    },
    13474: function (e, t, n) {
      n.d(t, {
        T: function () {
          return p;
        },
      });
      var i = n(79561),
        a = n(90444),
        r = n(29746),
        o = n(26463),
        s = n(10289),
        l = n(85069),
        u = n(67306),
        c = n(20662),
        d = n(31935),
        h = n(15337),
        f = n(23066),
        v = n(63387),
        m = n(50165);
      async function p(e, t) {
        let {
          account: n = e.account,
          chain: p = e.chain,
          accessList: b,
          data: y,
          gas: g,
          gasPrice: w,
          maxFeePerGas: P,
          maxPriorityFeePerGas: _,
          nonce: x,
          to: G,
          value: k,
          ...F
        } = t;
        if (!n)
          throw new a.o({ docsPath: "/docs/actions/wallet/sendTransaction" });
        let B = (0, i.T)(n);
        try {
          var C, I, T, N;
          let n;
          if (
            ((0, h.F)(t),
            null !== p &&
              ((n = await (0, d.s)(e, f.L, "getChainId")({})),
              (0, r.q)({ currentChainId: n, chain: p })),
            "local" === B.type)
          ) {
            let t = await (0, d.s)(
              e,
              v.Z,
              "prepareTransactionRequest"
            )({
              account: B,
              accessList: b,
              chain: p,
              data: y,
              gas: g,
              gasPrice: w,
              maxFeePerGas: P,
              maxPriorityFeePerGas: _,
              nonce: x,
              to: G,
              value: k,
              ...F,
            });
            n || (n = await (0, d.s)(e, f.L, "getChainId")({}));
            let i =
                null == p
                  ? void 0
                  : null === (N = p.serializers) || void 0 === N
                  ? void 0
                  : N.transaction,
              a = await B.signTransaction(
                { ...t, chainId: n },
                { serializer: i }
              );
            return await (0, d.s)(
              e,
              m.p,
              "sendRawTransaction"
            )({ serializedTransaction: a });
          }
          let i =
              null === (T = e.chain) || void 0 === T
                ? void 0
                : null === (I = T.formatters) || void 0 === I
                ? void 0
                : null === (C = I.transactionRequest) || void 0 === C
                ? void 0
                : C.format,
            a = (i || c.tG)({
              ...(0, u.K)(F, { format: i }),
              accessList: b,
              data: y,
              from: B.address,
              gas: g,
              gasPrice: w,
              maxFeePerGas: P,
              maxPriorityFeePerGas: _,
              nonce: x,
              to: G,
              value: k,
            });
          return await e.request(
            { method: "eth_sendTransaction", params: [a] },
            { retryCount: 0 }
          );
        } catch (e) {
          throw (function (e, t) {
            let { docsPath: n, ...i } = t,
              a = (() => {
                let t = (0, l.k)(e, i);
                return t instanceof o.cj ? e : t;
              })();
            return new s.mk(a, { docsPath: n, ...i });
          })(e, { ...t, account: B, chain: t.chain || void 0 });
        }
      }
    },
    37771: function (e, t, n) {
      n.d(t, {
        n: function () {
          return o;
        },
      });
      var i = n(3551),
        a = n(31935),
        r = n(13474);
      async function o(e, t) {
        let {
            abi: n,
            address: o,
            args: s,
            dataSuffix: l,
            functionName: u,
            ...c
          } = t,
          d = (0, i.R)({ abi: n, args: s, functionName: u });
        return (0, a.s)(
          e,
          r.T,
          "sendTransaction"
        )({
          data: "".concat(d).concat(l ? l.replace("0x", "") : ""),
          to: o,
          ...c,
        });
      }
    },
    90444: function (e, t, n) {
      n.d(t, {
        o: function () {
          return a;
        },
      });
      var i = n(80230);
      class a extends i.G {
        constructor({ docsPath: e } = {}) {
          super(
            "Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",
            { docsPath: e, docsSlug: "account" }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountNotFoundError",
            });
        }
      }
    },
    30410: function (e, t, n) {
      n.d(t, {
        f: function () {
          return a;
        },
      });
      var i = n(80230);
      class a extends i.G {
        constructor({ blockHash: e, blockNumber: t }) {
          let n = "Block";
          e && (n = 'Block at hash "'.concat(e, '"')),
            t && (n = 'Block at number "'.concat(t, '"')),
            super("".concat(n, " could not be found.")),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BlockNotFoundError",
            });
        }
      }
    },
    78862: function (e, t, n) {
      n.d(t, {
        Fz: function () {
          return r;
        },
        e5: function () {
          return o;
        },
        ld: function () {
          return s;
        },
      });
      var i = n(98206),
        a = n(80230);
      class r extends a.G {
        constructor() {
          super("`baseFeeMultiplier` must be greater than 1."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BaseFeeScalarError",
            });
        }
      }
      class o extends a.G {
        constructor() {
          super("Chain does not support EIP-1559 fees."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "Eip1559FeesNotSupportedError",
            });
        }
      }
      class s extends a.G {
        constructor({ maxPriorityFeePerGas: e }) {
          super(
            "`maxFeePerGas` cannot be less than the `maxPriorityFeePerGas` (".concat(
              (0, i.o)(e),
              " gwei)."
            )
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "MaxFeePerGasTooLowError",
            });
        }
      }
    },
    29746: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var i = n(55774);
      function a(e) {
        let { chain: t, currentChainId: n } = e;
        if (!t) throw new i.Bk();
        if (n !== t.id) throw new i.Yl({ chain: t, currentChainId: n });
      }
    },
    44324: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(56547);
      function a(e) {
        var t;
        let n =
          null === (t = e.transactions) || void 0 === t
            ? void 0
            : t.map((e) => ("string" == typeof e ? e : (0, i.Tr)(e)));
        return {
          ...e,
          baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
          blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
          difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
          excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
          gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
          gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
          hash: e.hash ? e.hash : null,
          logsBloom: e.logsBloom ? e.logsBloom : null,
          nonce: e.nonce ? e.nonce : null,
          number: e.number ? BigInt(e.number) : null,
          size: e.size ? BigInt(e.size) : void 0,
          timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
          transactions: n,
          totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
        };
      }
    },
    6819: function (e, t, n) {
      n.d(t, {
        U: function () {
          return i;
        },
      });
      function i(e) {
        let { args: t, eventName: n } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          logIndex: e.logIndex ? Number(e.logIndex) : null,
          transactionHash: e.transactionHash ? e.transactionHash : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          ...(n ? { args: t, eventName: n } : {}),
        };
      }
    },
    56547: function (e, t, n) {
      n.d(t, {
        Tr: function () {
          return r;
        },
        c8: function () {
          return a;
        },
      });
      var i = n(55936);
      let a = {
        "0x0": "legacy",
        "0x1": "eip2930",
        "0x2": "eip1559",
        "0x3": "eip4844",
      };
      function r(e) {
        let t = {
          ...e,
          blockHash: e.blockHash ? e.blockHash : null,
          blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
          chainId: e.chainId ? (0, i.ly)(e.chainId) : void 0,
          gas: e.gas ? BigInt(e.gas) : void 0,
          gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
          maxFeePerBlobGas: e.maxFeePerBlobGas
            ? BigInt(e.maxFeePerBlobGas)
            : void 0,
          maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas: e.maxPriorityFeePerGas
            ? BigInt(e.maxPriorityFeePerGas)
            : void 0,
          nonce: e.nonce ? (0, i.ly)(e.nonce) : void 0,
          to: e.to ? e.to : null,
          transactionIndex: e.transactionIndex
            ? Number(e.transactionIndex)
            : null,
          type: e.type ? a[e.type] : void 0,
          typeHex: e.type ? e.type : void 0,
          value: e.value ? BigInt(e.value) : void 0,
          v: e.v ? BigInt(e.v) : void 0,
        };
        return (
          (t.yParity = (() => {
            if (e.yParity) return Number(e.yParity);
            if ("bigint" == typeof t.v) {
              if (0n === t.v || 27n === t.v) return 0;
              if (1n === t.v || 28n === t.v) return 1;
              if (t.v >= 35n) return t.v % 2n === 0n ? 1 : 0;
            }
          })()),
          "legacy" === t.type &&
            (delete t.accessList,
            delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas,
            delete t.yParity),
          "eip2930" === t.type &&
            (delete t.maxFeePerBlobGas,
            delete t.maxFeePerGas,
            delete t.maxPriorityFeePerGas),
          "eip1559" === t.type && delete t.maxFeePerBlobGas,
          t
        );
      }
    },
    85583: function (e, t, n) {
      n.d(t, {
        N7: function () {
          return o;
        },
      });
      let i = new Map(),
        a = new Map(),
        r = 0;
      function o(e, t, n) {
        let o = ++r,
          s = () => i.get(e) || [],
          l = () => {
            let t = s();
            i.set(
              e,
              t.filter((e) => e.id !== o)
            );
          },
          u = () => {
            let t = a.get(e);
            1 === s().length && t && t(), l();
          },
          c = s();
        if ((i.set(e, [...c, { id: o, fns: t }]), c && c.length > 0)) return u;
        let d = {};
        for (let e in t)
          d[e] = function () {
            for (
              var t, n, i = arguments.length, a = Array(i), r = 0;
              r < i;
              r++
            )
              a[r] = arguments[r];
            let o = s();
            if (0 !== o.length)
              for (let i of o)
                null === (t = (n = i.fns)[e]) ||
                  void 0 === t ||
                  t.call(n, ...a);
          };
        let h = n(d);
        return "function" == typeof h && a.set(e, h), u;
      }
    },
    33e3: function (e, t, n) {
      n.d(t, {
        $: function () {
          return a;
        },
      });
      var i = n(83440);
      function a(e, t) {
        let { emitOnBegin: n, initialWaitTime: a, interval: r } = t,
          o = !0,
          s = () => (o = !1);
        return (
          (async () => {
            var t;
            let l;
            n && (l = await e({ unpoll: s }));
            let u =
              null !== (t = await (null == a ? void 0 : a(l))) && void 0 !== t
                ? t
                : r;
            await (0, i.D)(u);
            let c = async () => {
              o && (await e({ unpoll: s }), await (0, i.D)(r), c());
            };
            c();
          })(),
          s
        );
      }
    },
    88e3: function (e, t, n) {
      n.r(t),
        n.d(t, {
          useWaitForTransactionReceipt: function () {
            return f;
          },
        });
      var i = n(55936),
        a = n(70352),
        r = n(42624),
        o = n(8302),
        s = n(37225);
      async function l(e, t) {
        let { chainId: n, timeout: l = 0, ...u } = t,
          c = e.getClient({ chainId: n }),
          d = (0, s.s)(c, a.e, "waitForTransactionReceipt"),
          h = await d({ ...u, timeout: l });
        if ("reverted" === h.status) {
          let e = (0, s.s)(c, r.f, "getTransaction"),
            t = await e({ hash: h.transactionHash }),
            n = (0, s.s)(c, o.RE, "call"),
            a = await n({
              ...t,
              gasPrice: "eip1559" !== t.type ? t.gasPrice : void 0,
              maxFeePerGas: "eip1559" === t.type ? t.maxFeePerGas : void 0,
              maxPriorityFeePerGas:
                "eip1559" === t.type ? t.maxPriorityFeePerGas : void 0,
            });
          throw Error((0, i.rR)("0x".concat(a.substring(138))));
        }
        return { ...h, chainId: c.chain.id };
      }
      var u = n(73054),
        c = n(38760),
        d = n(43089),
        h = n(42887);
      function f() {
        var e, t;
        let n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { hash: i, query: a = {} } = n,
          r = (0, h.useConfig)(n),
          o = (0, d.useChainId)(),
          s = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(n) {
                let { queryKey: i } = n,
                  { hash: a, ...r } = i[1];
                if (!a) throw Error("hash is required");
                return l(e, { ...r, onReplaced: t.onReplaced, hash: a });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { onReplaced: t, ...n } = e;
                return ["waitForTransactionReceipt", (0, u.O)(n)];
              })(t),
            };
          })(r, {
            ...n,
            chainId: null !== (e = n.chainId) && void 0 !== e ? e : o,
          }),
          f = !!(i && (null === (t = a.enabled) || void 0 === t || t));
        return (0, c.aM)({ ...a, ...s, enabled: f });
      }
    },
    72450: function (e, t, n) {
      n.r(t),
        n.d(t, {
          useWriteContract: function () {
            return c;
          },
        });
      var i = n(20568),
        a = n(37771),
        r = n(37225),
        o = n(38507),
        s = n(80292);
      async function l(e, t) {
        let n, i;
        let { account: l, chainId: u, connector: c, __mode: d, ...h } = t;
        if (
          ((n =
            "object" == typeof l && "local" === l.type
              ? e.getClient({ chainId: u })
              : await (0, o.e)(e, { account: l, chainId: u, connector: c })),
          "prepared" === d)
        )
          i = h;
        else {
          let { request: t } = await (0, s.a)(e, { ...h, account: l });
          i = t;
        }
        let f = (0, r.s)(n, a.n, "writeContract");
        return await f({
          ...i,
          ...(l ? { account: l } : {}),
          chain: u ? { id: u } : null,
        });
      }
      var u = n(42887);
      function c() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { mutation: n } = t,
          a =
            ((e = (0, u.useConfig)(t)),
            { mutationFn: (t) => l(e, t), mutationKey: ["writeContract"] }),
          { mutate: r, mutateAsync: o, ...s } = (0, i.D)({ ...n, ...a });
        return { ...s, writeContract: r, writeContractAsync: o };
      }
    },
  },
]);
