"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [857],
  {
    93879: function (e, t, n) {
      n.d(t, {
        E: function () {
          return i;
        },
      });
      function i(e, t) {
        if (t.has(e))
          throw TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      }
    },
    67354: function (e, t, n) {
      n.d(t, {
        J: function () {
          return i;
        },
      });
      function i(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + n + " private field on non-instance"
          );
        return t.get(e);
      }
    },
    32731: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var i = n(67354);
      function r(e, t) {
        var n = (0, i.J)(e, t, "get");
        return n.get ? n.get.call(e) : n.value;
      }
    },
    48146: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var i = n(93879);
      function r(e, t, n) {
        (0, i.E)(e, t), t.set(e, n);
      }
    },
    5577: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var i = n(67354);
      function r(e, t, n) {
        var r = (0, i.J)(e, t, "set");
        return (
          !(function (e, t, n) {
            if (t.set) t.set.call(e, n);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = n;
            }
          })(e, r, n),
          n
        );
      }
    },
    94831: function (e, t, n) {
      n.d(t, {
        _: function () {
          return i;
        },
      });
      function i(e, t, n) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return n;
      }
    },
    37920: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var i = n(93879);
      function r(e, t) {
        (0, i.E)(e, t), t.add(e);
      }
    },
    79555: function (e, t, n) {
      n.d(t, {
        j: function () {
          return d;
        },
      });
      var i,
        r,
        o,
        a = n(32731),
        s = n(48146),
        c = n(5577),
        u = n(44614),
        l = n(46063),
        d = new ((i = new WeakMap()),
        (r = new WeakMap()),
        (o = new WeakMap()),
        class extends u.l {
          onSubscribe() {
            (0, a._)(this, r) || this.setEventListener((0, a._)(this, o));
          }
          onUnsubscribe() {
            var e;
            this.hasListeners() ||
              (null === (e = (0, a._)(this, r)) || void 0 === e || e.call(this),
              (0, c._)(this, r, void 0));
          }
          setEventListener(e) {
            var t;
            (0, c._)(this, o, e),
              null === (t = (0, a._)(this, r)) || void 0 === t || t.call(this),
              (0, c._)(
                this,
                r,
                e((e) => {
                  "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
                })
              );
          }
          setFocused(e) {
            (0, a._)(this, i) !== e && ((0, c._)(this, i, e), this.onFocus());
          }
          onFocus() {
            this.listeners.forEach((e) => {
              e();
            });
          }
          isFocused() {
            var e;
            return "boolean" == typeof (0, a._)(this, i)
              ? (0, a._)(this, i)
              : (null === (e = globalThis.document) || void 0 === e
                  ? void 0
                  : e.visibilityState) !== "hidden";
          }
          constructor() {
            super(),
              (0, s._)(this, i, { writable: !0, value: void 0 }),
              (0, s._)(this, r, { writable: !0, value: void 0 }),
              (0, s._)(this, o, { writable: !0, value: void 0 }),
              (0, c._)(this, o, (e) => {
                if (!l.sk && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
        })();
    },
    65612: function (e, t, n) {
      n.d(t, {
        Gm: function () {
          return r;
        },
        Qy: function () {
          return s;
        },
        ZF: function () {
          return c;
        },
      });
      var i = n(46063);
      function r(e) {
        return {
          onFetch: (t, n) => {
            let r = async () => {
              var n, r, s, c, u, l;
              let d;
              let h = t.options,
                f =
                  null === (s = t.fetchOptions) || void 0 === s
                    ? void 0
                    : null === (r = s.meta) || void 0 === r
                    ? void 0
                    : null === (n = r.fetchMore) || void 0 === n
                    ? void 0
                    : n.direction,
                p =
                  (null === (c = t.state.data) || void 0 === c
                    ? void 0
                    : c.pages) || [],
                b =
                  (null === (u = t.state.data) || void 0 === u
                    ? void 0
                    : u.pageParams) || [],
                v = !1,
                y = (e) => {
                  Object.defineProperty(e, "signal", {
                    enumerable: !0,
                    get: () => (
                      t.signal.aborted
                        ? (v = !0)
                        : t.signal.addEventListener("abort", () => {
                            v = !0;
                          }),
                      t.signal
                    ),
                  });
                },
                m =
                  t.options.queryFn ||
                  (() =>
                    Promise.reject(
                      Error(
                        "Missing queryFn: '".concat(t.options.queryHash, "'")
                      )
                    )),
                g = async (e, n, r) => {
                  if (v) return Promise.reject();
                  if (null == n && e.pages.length) return Promise.resolve(e);
                  let o = {
                    queryKey: t.queryKey,
                    pageParam: n,
                    direction: r ? "backward" : "forward",
                    meta: t.options.meta,
                  };
                  y(o);
                  let a = await m(o),
                    { maxPages: s } = t.options,
                    c = r ? i.Ht : i.VX;
                  return {
                    pages: c(e.pages, a, s),
                    pageParams: c(e.pageParams, n, s),
                  };
                };
              if (f && p.length) {
                let e = "backward" === f,
                  t = { pages: p, pageParams: b },
                  n = (e ? a : o)(h, t);
                d = await g(t, n, e);
              } else {
                d = await g(
                  { pages: [], pageParams: [] },
                  null !== (l = b[0]) && void 0 !== l ? l : h.initialPageParam
                );
                let t = null != e ? e : p.length;
                for (let e = 1; e < t; e++) {
                  let e = o(h, d);
                  d = await g(d, e);
                }
              }
              return d;
            };
            t.options.persister
              ? (t.fetchFn = () => {
                  var e, i;
                  return null === (e = (i = t.options).persister) ||
                    void 0 === e
                    ? void 0
                    : e.call(
                        i,
                        r,
                        {
                          queryKey: t.queryKey,
                          meta: t.options.meta,
                          signal: t.signal,
                        },
                        n
                      );
                })
              : (t.fetchFn = r);
          },
        };
      }
      function o(e, t) {
        let { pages: n, pageParams: i } = t,
          r = n.length - 1;
        return e.getNextPageParam(n[r], n, i[r], i);
      }
      function a(e, t) {
        var n;
        let { pages: i, pageParams: r } = t;
        return null === (n = e.getPreviousPageParam) || void 0 === n
          ? void 0
          : n.call(e, i[0], i, r[0], r);
      }
      function s(e, t) {
        return !!t && null != o(e, t);
      }
      function c(e, t) {
        return !!t && !!e.getPreviousPageParam && null != a(e, t);
      }
    },
    45139: function (e, t, n) {
      n.d(t, {
        V: function () {
          return i;
        },
      });
      var i = (function () {
        let e = [],
          t = 0,
          n = (e) => {
            e();
          },
          i = (e) => {
            e();
          },
          r = (e) => setTimeout(e, 0),
          o = (i) => {
            t
              ? e.push(i)
              : r(() => {
                  n(i);
                });
          },
          a = () => {
            let t = e;
            (e = []),
              t.length &&
                r(() => {
                  i(() => {
                    t.forEach((e) => {
                      n(e);
                    });
                  });
                });
          };
        return {
          batch: (e) => {
            let n;
            t++;
            try {
              n = e();
            } finally {
              --t || a();
            }
            return n;
          },
          batchCalls: (e) =>
            function () {
              for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                n[i] = arguments[i];
              o(() => {
                e(...n);
              });
            },
          schedule: o,
          setNotifyFunction: (e) => {
            n = e;
          },
          setBatchNotifyFunction: (e) => {
            i = e;
          },
          setScheduler: (e) => {
            r = e;
          },
        };
      })();
    },
    17211: function (e, t, n) {
      n.d(t, {
        N: function () {
          return d;
        },
      });
      var i,
        r,
        o,
        a = n(32731),
        s = n(48146),
        c = n(5577),
        u = n(44614),
        l = n(46063),
        d = new ((i = new WeakMap()),
        (r = new WeakMap()),
        (o = new WeakMap()),
        class extends u.l {
          onSubscribe() {
            (0, a._)(this, r) || this.setEventListener((0, a._)(this, o));
          }
          onUnsubscribe() {
            var e;
            this.hasListeners() ||
              (null === (e = (0, a._)(this, r)) || void 0 === e || e.call(this),
              (0, c._)(this, r, void 0));
          }
          setEventListener(e) {
            var t;
            (0, c._)(this, o, e),
              null === (t = (0, a._)(this, r)) || void 0 === t || t.call(this),
              (0, c._)(this, r, e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            (0, a._)(this, i) !== e &&
              ((0, c._)(this, i, e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return (0, a._)(this, i);
          }
          constructor() {
            super(),
              (0, s._)(this, i, { writable: !0, value: void 0 }),
              (0, s._)(this, r, { writable: !0, value: void 0 }),
              (0, s._)(this, o, { writable: !0, value: void 0 }),
              (0, c._)(this, i, !0),
              (0, c._)(this, o, (e) => {
                if (!l.sk && window.addEventListener) {
                  let t = () => e(!0),
                    n = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", n, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", n);
                    }
                  );
                }
              });
          }
        })();
    },
    86968: function (e, t, n) {
      n.d(t, {
        z: function () {
          return N;
        },
      });
      var i,
        r,
        o,
        a,
        s,
        c,
        u,
        l,
        d,
        h,
        f,
        p,
        b,
        v,
        y,
        m,
        g,
        w,
        P,
        x,
        _,
        O,
        j,
        M = n(32731),
        E = n(48146),
        C = n(5577),
        k = n(94831),
        F = n(37920),
        G = n(46063),
        R = n(45139),
        T = n(79555),
        A = n(44614),
        S = n(90326),
        N =
          ((i = new WeakMap()),
          (r = new WeakMap()),
          (o = new WeakMap()),
          (a = new WeakMap()),
          (s = new WeakMap()),
          (c = new WeakMap()),
          (u = new WeakMap()),
          (l = new WeakMap()),
          (d = new WeakMap()),
          (h = new WeakMap()),
          (f = new WeakMap()),
          (p = new WeakMap()),
          (b = new WeakMap()),
          (v = new WeakMap()),
          (y = new WeakSet()),
          (m = new WeakSet()),
          (g = new WeakSet()),
          (w = new WeakSet()),
          (P = new WeakSet()),
          (x = new WeakSet()),
          (_ = new WeakSet()),
          (O = new WeakSet()),
          (j = new WeakSet()),
          class extends A.l {
            bindMethods() {
              this.refetch = this.refetch.bind(this);
            }
            onSubscribe() {
              1 === this.listeners.size &&
                ((0, M._)(this, r).addObserver(this),
                L((0, M._)(this, r), this.options)
                  ? (0, k._)(this, y, I).call(this)
                  : this.updateResult(),
                (0, k._)(this, P, V).call(this));
            }
            onUnsubscribe() {
              this.hasListeners() || this.destroy();
            }
            shouldFetchOnReconnect() {
              return z(
                (0, M._)(this, r),
                this.options,
                this.options.refetchOnReconnect
              );
            }
            shouldFetchOnWindowFocus() {
              return z(
                (0, M._)(this, r),
                this.options,
                this.options.refetchOnWindowFocus
              );
            }
            destroy() {
              (this.listeners = new Set()),
                (0, k._)(this, x, K).call(this),
                (0, k._)(this, _, Q).call(this),
                (0, M._)(this, r).removeObserver(this);
            }
            setOptions(e, t) {
              let n = this.options,
                o = (0, M._)(this, r);
              if (
                ((this.options = (0, M._)(this, i).defaultQueryOptions(e)),
                void 0 !== this.options.enabled &&
                  "boolean" != typeof this.options.enabled)
              )
                throw Error("Expected enabled to be a boolean");
              (0, k._)(this, O, Z).call(this),
                (0, G.VS)(this.options, n) ||
                  (0, M._)(this, i)
                    .getQueryCache()
                    .notify({
                      type: "observerOptionsUpdated",
                      query: (0, M._)(this, r),
                      observer: this,
                    });
              let a = this.hasListeners();
              a &&
                U((0, M._)(this, r), o, this.options, n) &&
                (0, k._)(this, y, I).call(this),
                this.updateResult(t),
                a &&
                  ((0, M._)(this, r) !== o ||
                    this.options.enabled !== n.enabled ||
                    this.options.staleTime !== n.staleTime) &&
                  (0, k._)(this, m, W).call(this);
              let s = (0, k._)(this, g, D).call(this);
              a &&
                ((0, M._)(this, r) !== o ||
                  this.options.enabled !== n.enabled ||
                  s !== (0, M._)(this, b)) &&
                (0, k._)(this, w, q).call(this, s);
            }
            getOptimisticResult(e) {
              let t = (0, M._)(this, i)
                  .getQueryCache()
                  .build((0, M._)(this, i), e),
                n = this.createResult(t, e);
              return (
                (0, G.VS)(this.getCurrentResult(), n) ||
                  ((0, C._)(this, a, n),
                  (0, C._)(this, c, this.options),
                  (0, C._)(this, s, (0, M._)(this, r).state)),
                n
              );
            }
            getCurrentResult() {
              return (0, M._)(this, a);
            }
            trackResult(e) {
              let t = {};
              return (
                Object.keys(e).forEach((n) => {
                  Object.defineProperty(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => ((0, M._)(this, v).add(n), e[n]),
                  });
                }),
                t
              );
            }
            getCurrentQuery() {
              return (0, M._)(this, r);
            }
            refetch() {
              let { ...e } =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return this.fetch({ ...e });
            }
            fetchOptimistic(e) {
              let t = (0, M._)(this, i).defaultQueryOptions(e),
                n = (0, M._)(this, i)
                  .getQueryCache()
                  .build((0, M._)(this, i), t);
              return (
                (n.isFetchingOptimistic = !0),
                n.fetch().then(() => this.createResult(n, t))
              );
            }
            fetch(e) {
              var t;
              return (0, k._)(this, y, I)
                .call(this, {
                  ...e,
                  cancelRefetch:
                    null === (t = e.cancelRefetch) || void 0 === t || t,
                })
                .then(() => (this.updateResult(), (0, M._)(this, a)));
            }
            createResult(e, t) {
              let n;
              let i = (0, M._)(this, r),
                f = this.options,
                p = (0, M._)(this, a),
                b = (0, M._)(this, s),
                v = (0, M._)(this, c),
                y = e !== i ? e.state : (0, M._)(this, o),
                { state: m } = e,
                { error: g, errorUpdatedAt: w, fetchStatus: P, status: x } = m,
                _ = !1;
              if (t._optimisticResults) {
                let n = this.hasListeners(),
                  r = !n && L(e, t),
                  o = n && U(e, i, t, f);
                (r || o) &&
                  ((P = (0, S.Kw)(e.options.networkMode)
                    ? "fetching"
                    : "paused"),
                  m.dataUpdatedAt || (x = "pending")),
                  "isRestoring" === t._optimisticResults && (P = "idle");
              }
              if (t.select && void 0 !== m.data) {
                if (
                  p &&
                  m.data === (null == b ? void 0 : b.data) &&
                  t.select === (0, M._)(this, l)
                )
                  n = (0, M._)(this, d);
                else
                  try {
                    (0, C._)(this, l, t.select),
                      (n = t.select(m.data)),
                      (n = (0, G.oE)(null == p ? void 0 : p.data, n, t)),
                      (0, C._)(this, d, n),
                      (0, C._)(this, u, null);
                  } catch (e) {
                    (0, C._)(this, u, e);
                  }
              } else n = m.data;
              if (
                void 0 !== t.placeholderData &&
                void 0 === n &&
                "pending" === x
              ) {
                let e;
                if (
                  (null == p ? void 0 : p.isPlaceholderData) &&
                  t.placeholderData === (null == v ? void 0 : v.placeholderData)
                )
                  e = p.data;
                else {
                  var O;
                  if (
                    ((e =
                      "function" == typeof t.placeholderData
                        ? t.placeholderData(
                            null === (O = (0, M._)(this, h)) || void 0 === O
                              ? void 0
                              : O.state.data,
                            (0, M._)(this, h)
                          )
                        : t.placeholderData),
                    t.select && void 0 !== e)
                  )
                    try {
                      (e = t.select(e)), (0, C._)(this, u, null);
                    } catch (e) {
                      (0, C._)(this, u, e);
                    }
                }
                void 0 !== e &&
                  ((x = "success"),
                  (n = (0, G.oE)(null == p ? void 0 : p.data, e, t)),
                  (_ = !0));
              }
              (0, M._)(this, u) &&
                ((g = (0, M._)(this, u)),
                (n = (0, M._)(this, d)),
                (w = Date.now()),
                (x = "error"));
              let j = "fetching" === P,
                E = "pending" === x,
                k = "error" === x,
                F = E && j;
              return {
                status: x,
                fetchStatus: P,
                isPending: E,
                isSuccess: "success" === x,
                isError: k,
                isInitialLoading: F,
                isLoading: F,
                data: n,
                dataUpdatedAt: m.dataUpdatedAt,
                error: g,
                errorUpdatedAt: w,
                failureCount: m.fetchFailureCount,
                failureReason: m.fetchFailureReason,
                errorUpdateCount: m.errorUpdateCount,
                isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
                isFetchedAfterMount:
                  m.dataUpdateCount > y.dataUpdateCount ||
                  m.errorUpdateCount > y.errorUpdateCount,
                isFetching: j,
                isRefetching: j && !E,
                isLoadingError: k && 0 === m.dataUpdatedAt,
                isPaused: "paused" === P,
                isPlaceholderData: _,
                isRefetchError: k && 0 !== m.dataUpdatedAt,
                isStale: B(e, t),
                refetch: this.refetch,
              };
            }
            updateResult(e) {
              let t = (0, M._)(this, a),
                n = this.createResult((0, M._)(this, r), this.options);
              if (
                ((0, C._)(this, s, (0, M._)(this, r).state),
                (0, C._)(this, c, this.options),
                void 0 !== (0, M._)(this, s).data &&
                  (0, C._)(this, h, (0, M._)(this, r)),
                (0, G.VS)(n, t))
              )
                return;
              (0, C._)(this, a, n);
              let i = {};
              (null == e ? void 0 : e.listeners) !== !1 &&
                (() => {
                  if (!t) return !0;
                  let { notifyOnChangeProps: e } = this.options,
                    n = "function" == typeof e ? e() : e;
                  if ("all" === n || (!n && !(0, M._)(this, v).size)) return !0;
                  let i = new Set(null != n ? n : (0, M._)(this, v));
                  return (
                    this.options.throwOnError && i.add("error"),
                    Object.keys((0, M._)(this, a)).some(
                      (e) => (0, M._)(this, a)[e] !== t[e] && i.has(e)
                    )
                  );
                })() &&
                (i.listeners = !0),
                (0, k._)(this, j, H).call(this, { ...i, ...e });
            }
            onQueryUpdate() {
              this.updateResult(),
                this.hasListeners() && (0, k._)(this, P, V).call(this);
            }
            constructor(e, t) {
              super(),
                (0, F._)(this, y),
                (0, F._)(this, m),
                (0, F._)(this, g),
                (0, F._)(this, w),
                (0, F._)(this, P),
                (0, F._)(this, x),
                (0, F._)(this, _),
                (0, F._)(this, O),
                (0, F._)(this, j),
                (0, E._)(this, i, { writable: !0, value: void 0 }),
                (0, E._)(this, r, { writable: !0, value: void 0 }),
                (0, E._)(this, o, { writable: !0, value: void 0 }),
                (0, E._)(this, a, { writable: !0, value: void 0 }),
                (0, E._)(this, s, { writable: !0, value: void 0 }),
                (0, E._)(this, c, { writable: !0, value: void 0 }),
                (0, E._)(this, u, { writable: !0, value: void 0 }),
                (0, E._)(this, l, { writable: !0, value: void 0 }),
                (0, E._)(this, d, { writable: !0, value: void 0 }),
                (0, E._)(this, h, { writable: !0, value: void 0 }),
                (0, E._)(this, f, { writable: !0, value: void 0 }),
                (0, E._)(this, p, { writable: !0, value: void 0 }),
                (0, E._)(this, b, { writable: !0, value: void 0 }),
                (0, E._)(this, v, { writable: !0, value: void 0 }),
                (0, C._)(this, r, void 0),
                (0, C._)(this, o, void 0),
                (0, C._)(this, a, void 0),
                (0, C._)(this, v, new Set()),
                (this.options = t),
                (0, C._)(this, i, e),
                (0, C._)(this, u, null),
                this.bindMethods(),
                this.setOptions(t);
            }
          });
      function L(e, t) {
        return (
          (!1 !== t.enabled &&
            !e.state.dataUpdatedAt &&
            !("error" === e.state.status && !1 === t.retryOnMount)) ||
          (e.state.dataUpdatedAt > 0 && z(e, t, t.refetchOnMount))
        );
      }
      function z(e, t, n) {
        if (!1 !== t.enabled) {
          let i = "function" == typeof n ? n(e) : n;
          return "always" === i || (!1 !== i && B(e, t));
        }
        return !1;
      }
      function U(e, t, n, i) {
        return (
          !1 !== n.enabled &&
          (e !== t || !1 === i.enabled) &&
          (!n.suspense || "error" !== e.state.status) &&
          B(e, n)
        );
      }
      function B(e, t) {
        return e.isStaleByTime(t.staleTime);
      }
      function I(e) {
        (0, k._)(this, O, Z).call(this);
        let t = (0, M._)(this, r).fetch(this.options, e);
        return (null == e ? void 0 : e.throwOnError) || (t = t.catch(G.ZT)), t;
      }
      function W() {
        if (
          ((0, k._)(this, x, K).call(this),
          G.sk ||
            (0, M._)(this, a).isStale ||
            !(0, G.PN)(this.options.staleTime))
        )
          return;
        let e = (0, G.Kp)(
          (0, M._)(this, a).dataUpdatedAt,
          this.options.staleTime
        );
        (0, C._)(
          this,
          f,
          setTimeout(() => {
            (0, M._)(this, a).isStale || this.updateResult();
          }, e + 1)
        );
      }
      function D() {
        var e;
        return (
          null !==
            (e =
              "function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval((0, M._)(this, r))
                : this.options.refetchInterval) &&
          void 0 !== e &&
          e
        );
      }
      function q(e) {
        (0, k._)(this, _, Q).call(this),
          (0, C._)(this, b, e),
          !G.sk &&
            !1 !== this.options.enabled &&
            (0, G.PN)((0, M._)(this, b)) &&
            0 !== (0, M._)(this, b) &&
            (0, C._)(
              this,
              p,
              setInterval(() => {
                (this.options.refetchIntervalInBackground || T.j.isFocused()) &&
                  (0, k._)(this, y, I).call(this);
              }, (0, M._)(this, b))
            );
      }
      function V() {
        (0, k._)(this, m, W).call(this),
          (0, k._)(this, w, q).call(this, (0, k._)(this, g, D).call(this));
      }
      function K() {
        (0, M._)(this, f) &&
          (clearTimeout((0, M._)(this, f)), (0, C._)(this, f, void 0));
      }
      function Q() {
        (0, M._)(this, p) &&
          (clearInterval((0, M._)(this, p)), (0, C._)(this, p, void 0));
      }
      function Z() {
        let e = (0, M._)(this, i)
          .getQueryCache()
          .build((0, M._)(this, i), this.options);
        if (e === (0, M._)(this, r)) return;
        let t = (0, M._)(this, r);
        (0, C._)(this, r, e),
          (0, C._)(this, o, e.state),
          this.hasListeners() &&
            (null == t || t.removeObserver(this), e.addObserver(this));
      }
      function H(e) {
        R.V.batch(() => {
          e.listeners &&
            this.listeners.forEach((e) => {
              e((0, M._)(this, a));
            }),
            (0, M._)(this, i)
              .getQueryCache()
              .notify({
                query: (0, M._)(this, r),
                type: "observerResultsUpdated",
              });
        });
      }
    },
    90326: function (e, t, n) {
      n.d(t, {
        DV: function () {
          return u;
        },
        Kw: function () {
          return s;
        },
        Mz: function () {
          return l;
        },
      });
      var i = n(79555),
        r = n(17211),
        o = n(46063);
      function a(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function s(e) {
        return (null != e ? e : "online") !== "online" || r.N.isOnline();
      }
      var c = class {
        constructor(e) {
          (this.revert = null == e ? void 0 : e.revert),
            (this.silent = null == e ? void 0 : e.silent);
        }
      };
      function u(e) {
        return e instanceof c;
      }
      function l(e) {
        let t,
          n,
          u,
          l = !1,
          d = 0,
          h = !1,
          f = new Promise((e, t) => {
            (n = e), (u = t);
          }),
          p = () =>
            !i.j.isFocused() || ("always" !== e.networkMode && !r.N.isOnline()),
          b = (i) => {
            if (!h) {
              var r;
              (h = !0),
                null === (r = e.onSuccess) || void 0 === r || r.call(e, i),
                null == t || t(),
                n(i);
            }
          },
          v = (n) => {
            if (!h) {
              var i;
              (h = !0),
                null === (i = e.onError) || void 0 === i || i.call(e, n),
                null == t || t(),
                u(n);
            }
          },
          y = () =>
            new Promise((n) => {
              var i;
              (t = (e) => {
                let t = h || !p();
                return t && n(e), t;
              }),
                null === (i = e.onPause) || void 0 === i || i.call(e);
            }).then(() => {
              if (((t = void 0), !h)) {
                var n;
                null === (n = e.onContinue) || void 0 === n || n.call(e);
              }
            }),
          m = () => {
            let t;
            if (!h) {
              try {
                t = e.fn();
              } catch (e) {
                t = Promise.reject(e);
              }
              Promise.resolve(t)
                .then(b)
                .catch((t) => {
                  var n, i, r;
                  if (h) return;
                  let s =
                      null !== (i = e.retry) && void 0 !== i ? i : o.sk ? 0 : 3,
                    c = null !== (r = e.retryDelay) && void 0 !== r ? r : a,
                    u = "function" == typeof c ? c(d, t) : c,
                    f =
                      !0 === s ||
                      ("number" == typeof s && d < s) ||
                      ("function" == typeof s && s(d, t));
                  if (l || !f) {
                    v(t);
                    return;
                  }
                  d++,
                    null === (n = e.onFail) || void 0 === n || n.call(e, d, t),
                    (0, o._v)(u)
                      .then(() => {
                        if (p()) return y();
                      })
                      .then(() => {
                        l ? v(t) : m();
                      });
                });
            }
          };
        return (
          s(e.networkMode) ? m() : y().then(m),
          {
            promise: f,
            cancel: (t) => {
              if (!h) {
                var n;
                v(new c(t)),
                  null === (n = e.abort) || void 0 === n || n.call(e);
              }
            },
            continue: () =>
              (null == t ? void 0 : t()) ? f : Promise.resolve(),
            cancelRetry: () => {
              l = !0;
            },
            continueRetry: () => {
              l = !1;
            },
          }
        );
      }
    },
    44614: function (e, t, n) {
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var i = class {
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
      };
    },
    46063: function (e, t, n) {
      n.d(t, {
        Ht: function () {
          return P;
        },
        Kp: function () {
          return s;
        },
        PN: function () {
          return a;
        },
        Q$: function () {
          return f;
        },
        Rm: function () {
          return l;
        },
        SE: function () {
          return o;
        },
        VS: function () {
          return p;
        },
        VX: function () {
          return w;
        },
        X7: function () {
          return u;
        },
        Ym: function () {
          return d;
        },
        ZT: function () {
          return r;
        },
        _v: function () {
          return m;
        },
        _x: function () {
          return c;
        },
        oE: function () {
          return g;
        },
        sk: function () {
          return i;
        },
        to: function () {
          return h;
        },
      });
      var i = "Deno" in window;
      function r() {}
      function o(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0;
      }
      function s(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0);
      }
      function c(e, t) {
        let {
          type: n = "all",
          exact: i,
          fetchStatus: r,
          predicate: o,
          queryKey: a,
          stale: s,
        } = e;
        if (a) {
          if (i) {
            if (t.queryHash !== l(a, t.options)) return !1;
          } else if (!h(t.queryKey, a)) return !1;
        }
        if ("all" !== n) {
          let e = t.isActive();
          if (("active" === n && !e) || ("inactive" === n && e)) return !1;
        }
        return (
          ("boolean" != typeof s || t.isStale() === s) &&
          (void 0 === r || r === t.state.fetchStatus) &&
          (!o || !!o(t))
        );
      }
      function u(e, t) {
        let { exact: n, status: i, predicate: r, mutationKey: o } = e;
        if (o) {
          if (!t.options.mutationKey) return !1;
          if (n) {
            if (d(t.options.mutationKey) !== d(o)) return !1;
          } else if (!h(t.options.mutationKey, o)) return !1;
        }
        return (!i || t.state.status === i) && (!r || !!r(t));
      }
      function l(e, t) {
        return ((null == t ? void 0 : t.queryKeyHashFn) || d)(e);
      }
      function d(e) {
        return JSON.stringify(e, (e, t) =>
          v(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
            : t
        );
      }
      function h(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((n) => !h(e[n], t[n])))
        );
      }
      function f(e, t) {
        if (e === t) return e;
        let n = b(e) && b(t);
        if (n || (v(e) && v(t))) {
          let i = n ? e : Object.keys(e),
            r = i.length,
            o = n ? t : Object.keys(t),
            a = o.length,
            s = n ? [] : {},
            c = 0;
          for (let r = 0; r < a; r++) {
            let a = n ? r : o[r];
            !n && void 0 === e[a] && void 0 === t[a] && i.includes(a)
              ? ((s[a] = void 0), c++)
              : ((s[a] = f(e[a], t[a])),
                s[a] === e[a] && void 0 !== e[a] && c++);
          }
          return r === a && c === r ? e : s;
        }
        return t;
      }
      function p(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let n in e) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function b(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function v(e) {
        if (!y(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let n = t.prototype;
        return !!(y(n) && n.hasOwnProperty("isPrototypeOf"));
      }
      function y(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function m(e) {
        return new Promise((t) => {
          setTimeout(t, e);
        });
      }
      function g(e, t, n) {
        return "function" == typeof n.structuralSharing
          ? n.structuralSharing(e, t)
          : !1 !== n.structuralSharing
          ? f(e, t)
          : t;
      }
      function w(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = [...e, t];
        return n && i.length > n ? i.slice(1) : i;
      }
      function P(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = [t, ...e];
        return n && i.length > n ? i.slice(0, -1) : i;
      }
    },
    47082: function (e, t, n) {
      n.d(t, {
        NL: function () {
          return a;
        },
        aH: function () {
          return s;
        },
      });
      var i = n(64090),
        r = n(3827),
        o = i.createContext(void 0),
        a = (e) => {
          let t = i.useContext(o);
          if (e) return e;
          if (!t)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return t;
        },
        s = (e) => {
          let { client: t, children: n } = e;
          return (
            i.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, r.jsx)(o.Provider, { value: t, children: n })
          );
        };
    },
    22438: function (e, t, n) {
      let i;
      n.d(t, {
        r: function () {
          return m;
        },
      });
      var r = n(64090),
        o = n(45139);
      n(3827);
      var a = r.createContext(
          ((i = !1),
          {
            clearReset: () => {
              i = !1;
            },
            reset: () => {
              i = !0;
            },
            isReset: () => i,
          })
        ),
        s = () => r.useContext(a),
        c = n(47082),
        u = r.createContext(!1),
        l = () => r.useContext(u);
      u.Provider;
      var d = n(20826),
        h = (e, t) => {
          (e.suspense || e.throwOnError) &&
            !t.isReset() &&
            (e.retryOnMount = !1);
        },
        f = (e) => {
          r.useEffect(() => {
            e.clearReset();
          }, [e]);
        },
        p = (e) => {
          let {
            result: t,
            errorResetBoundary: n,
            throwOnError: i,
            query: r,
          } = e;
          return (
            t.isError &&
            !n.isReset() &&
            !t.isFetching &&
            r &&
            (0, d.L)(i, [t.error, r])
          );
        },
        b = (e) => {
          e.suspense && "number" != typeof e.staleTime && (e.staleTime = 1e3);
        },
        v = (e, t) => (null == e ? void 0 : e.suspense) && t.isPending,
        y = (e, t, n) =>
          t.fetchOptimistic(e).catch(() => {
            n.clearReset();
          });
      function m(e, t, n) {
        let i = (0, c.NL)(n),
          a = l(),
          u = s(),
          d = i.defaultQueryOptions(e);
        (d._optimisticResults = a ? "isRestoring" : "optimistic"),
          b(d),
          h(d, u),
          f(u);
        let [m] = r.useState(() => new t(i, d)),
          g = m.getOptimisticResult(d);
        if (
          (r.useSyncExternalStore(
            r.useCallback(
              (e) => {
                let t = a ? () => void 0 : m.subscribe(o.V.batchCalls(e));
                return m.updateResult(), t;
              },
              [m, a]
            ),
            () => m.getCurrentResult(),
            () => m.getCurrentResult()
          ),
          r.useEffect(() => {
            m.setOptions(d, { listeners: !1 });
          }, [d, m]),
          v(d, g))
        )
          throw y(d, m, u);
        if (
          p({
            result: g,
            errorResetBoundary: u,
            throwOnError: d.throwOnError,
            query: i.getQueryCache().get(d.queryHash),
          })
        )
          throw g.error;
        return d.notifyOnChangeProps ? g : m.trackResult(g);
      }
    },
    73667: function (e, t, n) {
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var i = n(86968),
        r = n(22438);
      function o(e, t) {
        return (0, r.r)(e, i.z, t);
      }
    },
    20826: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      function i(e, t) {
        return "function" == typeof e ? e(...t) : !!e;
      }
    },
    31723: function (e, t, n) {
      n.d(t, {
        L: function () {
          return o;
        },
      });
      var i = n(96130),
        r = n(37225);
      function o(e, t) {
        let { chainId: n, ...o } = t,
          a = e.getClient({ chainId: n });
        return (0, r.s)(a, i.L, "readContract")(o);
      }
    },
    73054: function (e, t, n) {
      function i(e) {
        return JSON.stringify(e, (e, t) =>
          !(function (e) {
            if (!r(e)) return !1;
            let t = e.constructor;
            if (void 0 === t) return !0;
            let n = t.prototype;
            return !!(r(n) && n.hasOwnProperty("isPrototypeOf"));
          })(t)
            ? "bigint" == typeof t
              ? t.toString()
              : t
            : Object.keys(t)
                .sort()
                .reduce((e, n) => ((e[n] = t[n]), e), {})
        );
      }
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function o(e) {
        let {
          _defaulted: t,
          behavior: n,
          gcTime: i,
          initialData: r,
          initialDataUpdatedAt: o,
          maxPages: a,
          meta: s,
          networkMode: c,
          queryFn: u,
          queryHash: l,
          queryKey: d,
          queryKeyHashFn: h,
          retry: f,
          retryDelay: p,
          structuralSharing: b,
          getPreviousPageParam: v,
          getNextPageParam: y,
          initialPageParam: m,
          _optimisticResults: g,
          enabled: w,
          notifyOnChangeProps: P,
          placeholderData: x,
          refetchInterval: _,
          refetchIntervalInBackground: O,
          refetchOnMount: j,
          refetchOnReconnect: M,
          refetchOnWindowFocus: E,
          retryOnMount: C,
          select: k,
          staleTime: F,
          suspense: G,
          throwOnError: R,
          config: T,
          connector: A,
          query: S,
          ...N
        } = e;
        return N;
      }
      n.d(t, {
        O: function () {
          return o;
        },
        k: function () {
          return i;
        },
      });
    },
    37225: function (e, t, n) {
      n.d(t, {
        s: function () {
          return i;
        },
      });
      function i(e, t, n) {
        var i;
        let r = e[null !== (i = t.name) && void 0 !== i ? i : n];
        return "function" == typeof r ? r : (n) => t(e, n);
      }
    },
    8302: function (e, t, n) {
      n.d(t, {
        RE: function () {
          return x;
        },
      });
      var i = n(79561),
        r = n(10035),
        o = n(44898),
        a = n(80230),
        s = n(55774),
        c = n(47115),
        u = n(11758),
        l = n(94655),
        d = n(27470),
        h = n(3551),
        f = n(39361),
        p = n(73621),
        b = n(15578),
        v = n(26463),
        y = n(85069),
        m = n(67306),
        g = n(20662),
        w = n(5493),
        P = n(15337);
      async function x(e, t) {
        var r, u, d, h;
        let {
            account: p = e.account,
            batch: w = !!(null === (r = e.batch) || void 0 === r
              ? void 0
              : r.multicall),
            blockNumber: x,
            blockTag: j = "latest",
            accessList: M,
            data: E,
            gas: C,
            gasPrice: k,
            maxFeePerGas: F,
            maxPriorityFeePerGas: G,
            nonce: R,
            to: T,
            value: A,
            stateOverride: S,
            ...N
          } = t,
          L = p ? (0, i.T)(p) : void 0;
        try {
          (0, P.F)(t);
          let n = (x ? (0, b.eC)(x) : void 0) || j,
            i = (function (e) {
              if (!e) return;
              let t = {};
              for (let { address: n, ...i } of e) {
                if (!(0, f.U)(n, { strict: !1 })) throw new o.b({ address: n });
                if (t[n]) throw new l.Nc({ address: n });
                t[n] = (function (e) {
                  let {
                      balance: t,
                      nonce: n,
                      state: i,
                      stateDiff: r,
                      code: o,
                    } = e,
                    a = {};
                  if (
                    (void 0 !== o && (a.code = o),
                    void 0 !== t && (a.balance = (0, b.eC)(t, { size: 32 })),
                    void 0 !== n && (a.nonce = (0, b.eC)(n, { size: 8 })),
                    void 0 !== i && (a.state = O(i)),
                    void 0 !== r)
                  ) {
                    if (a.state) throw new l.Z8();
                    a.stateDiff = O(r);
                  }
                  return a;
                })(i);
              }
              return t;
            })(S),
            r =
              null === (h = e.chain) || void 0 === h
                ? void 0
                : null === (d = h.formatters) || void 0 === d
                ? void 0
                : null === (u = d.transactionRequest) || void 0 === u
                ? void 0
                : u.format,
            a = (r || g.tG)({
              ...(0, m.K)(N, { format: r }),
              from: null == L ? void 0 : L.address,
              accessList: M,
              data: E,
              gas: C,
              gasPrice: k,
              maxFeePerGas: F,
              maxPriorityFeePerGas: G,
              nonce: R,
              to: T,
              value: A,
            });
          if (
            w &&
            (function (e) {
              let { request: t } = e,
                { data: n, to: i, ...r } = t;
              return (
                !(!n || n.startsWith("0x82ad56cb")) &&
                !!i &&
                !(Object.values(r).filter((e) => void 0 !== e).length > 0)
              );
            })({ request: a }) &&
            !i
          )
            try {
              return await _(e, { ...a, blockNumber: x, blockTag: j });
            } catch (e) {
              if (!(e instanceof s.pZ) && !(e instanceof s.mm)) throw e;
            }
          let c = await e.request({
            method: "eth_call",
            params: i ? [a, n, i] : [a, n],
          });
          if ("0x" === c) return { data: void 0 };
          return { data: c };
        } catch (s) {
          let i = (function (e) {
              if (!(e instanceof a.G)) return;
              let t = e.walk();
              return "object" == typeof t.data ? t.data.data : t.data;
            })(s),
            { offchainLookup: r, offchainLookupSignature: o } = await n
              .e(4696)
              .then(n.bind(n, 44696));
          if ((null == i ? void 0 : i.slice(0, 10)) === o && T)
            return { data: await r(e, { data: i, to: T }) };
          throw (function (e, t) {
            let { docsPath: n, ...i } = t,
              r = (() => {
                let t = (0, y.k)(e, i);
                return t instanceof v.cj ? e : t;
              })();
            return new c.cg(r, { docsPath: n, ...i });
          })(s, { ...t, account: L, chain: e.chain });
        }
      }
      async function _(e, t) {
        var n;
        let { batchSize: i = 1024, wait: o = 0 } =
            "object" ==
            typeof (null === (n = e.batch) || void 0 === n
              ? void 0
              : n.multicall)
              ? e.batch.multicall
              : {},
          {
            blockNumber: a,
            blockTag: u = "latest",
            data: l,
            multicallAddress: f,
            to: v,
          } = t,
          y = f;
        if (!y) {
          if (!e.chain) throw new s.pZ();
          y = (0, p.L)({
            blockNumber: a,
            chain: e.chain,
            contract: "multicall3",
          });
        }
        let m = (a ? (0, b.eC)(a) : void 0) || u,
          { schedule: g } = (0, w.S)({
            id: "".concat(e.uid, ".").concat(m),
            wait: o,
            shouldSplitBatch: (e) =>
              e.reduce((e, t) => {
                let { data: n } = t;
                return e + (n.length - 2);
              }, 0) >
              2 * i,
            fn: async (t) => {
              let n = t.map((e) => ({
                  allowFailure: !0,
                  callData: e.data,
                  target: e.to,
                })),
                i = (0, h.R)({
                  abi: r.F8,
                  args: [n],
                  functionName: "aggregate3",
                }),
                o = await e.request({
                  method: "eth_call",
                  params: [{ data: i, to: y }, m],
                });
              return (0, d.k)({
                abi: r.F8,
                args: [n],
                functionName: "aggregate3",
                data: o || "0x",
              });
            },
          }),
          [{ returnData: P, success: x }] = await g({ data: l, to: v });
        if (!x) throw new c.VQ({ data: P });
        return "0x" === P ? { data: void 0 } : { data: P };
      }
      function O(e) {
        if (e && 0 !== e.length)
          return e.reduce((e, t) => {
            let { slot: n, value: i } = t;
            if (66 !== n.length)
              throw new u.W_({ size: n.length, targetSize: 66, type: "hex" });
            if (66 !== i.length)
              throw new u.W_({ size: i.length, targetSize: 66, type: "hex" });
            return (e[n] = i), e;
          }, {});
      }
    },
    96130: function (e, t, n) {
      n.d(t, {
        L: function () {
          return c;
        },
      });
      var i = n(27470),
        r = n(3551),
        o = n(95094),
        a = n(31935),
        s = n(8302);
      async function c(e, t) {
        let { abi: n, address: c, args: u, functionName: l, ...d } = t,
          h = (0, r.R)({ abi: n, args: u, functionName: l });
        try {
          let { data: t } = await (0, a.s)(
            e,
            s.RE,
            "call"
          )({ ...d, data: h, to: c });
          return (0, i.k)({
            abi: n,
            args: u,
            functionName: l,
            data: t || "0x",
          });
        } catch (e) {
          throw (0, o.S)(e, {
            abi: n,
            address: c,
            args: u,
            docsPath: "/docs/contract/readContract",
            functionName: l,
          });
        }
      }
    },
    10035: function (e, t, n) {
      n.d(t, {
        $o: function () {
          return u;
        },
        F8: function () {
          return i;
        },
        Wo: function () {
          return l;
        },
        X$: function () {
          return c;
        },
        du: function () {
          return a;
        },
        k3: function () {
          return o;
        },
        nZ: function () {
          return s;
        },
      });
      let i = [
          {
            inputs: [
              {
                components: [
                  { name: "target", type: "address" },
                  { name: "allowFailure", type: "bool" },
                  { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
              },
            ],
            name: "aggregate3",
            outputs: [
              {
                components: [
                  { name: "success", type: "bool" },
                  { name: "returnData", type: "bytes" },
                ],
                name: "returnData",
                type: "tuple[]",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        r = [
          { inputs: [], name: "ResolverNotFound", type: "error" },
          { inputs: [], name: "ResolverWildcardNotSupported", type: "error" },
          { inputs: [], name: "ResolverNotContract", type: "error" },
          {
            inputs: [{ name: "returnData", type: "bytes" }],
            name: "ResolverError",
            type: "error",
          },
          {
            inputs: [
              {
                components: [
                  { name: "status", type: "uint16" },
                  { name: "message", type: "string" },
                ],
                name: "errors",
                type: "tuple[]",
              },
            ],
            name: "HttpError",
            type: "error",
          },
        ],
        o = [
          ...r,
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
          {
            name: "resolve",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes" },
              { name: "data", type: "bytes" },
              { name: "gateways", type: "string[]" },
            ],
            outputs: [
              { name: "", type: "bytes" },
              { name: "address", type: "address" },
            ],
          },
        ],
        a = [
          ...r,
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [{ type: "bytes", name: "reverseName" }],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
          {
            name: "reverse",
            type: "function",
            stateMutability: "view",
            inputs: [
              { type: "bytes", name: "reverseName" },
              { type: "string[]", name: "gateways" },
            ],
            outputs: [
              { type: "string", name: "resolvedName" },
              { type: "address", name: "resolvedAddress" },
              { type: "address", name: "reverseResolver" },
              { type: "address", name: "resolver" },
            ],
          },
        ],
        s = [
          {
            name: "text",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "key", type: "string" },
            ],
            outputs: [{ name: "", type: "string" }],
          },
        ],
        c = [
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [{ name: "name", type: "bytes32" }],
            outputs: [{ name: "", type: "address" }],
          },
          {
            name: "addr",
            type: "function",
            stateMutability: "view",
            inputs: [
              { name: "name", type: "bytes32" },
              { name: "coinType", type: "uint256" },
            ],
            outputs: [{ name: "", type: "bytes" }],
          },
        ],
        u = [
          {
            inputs: [
              { internalType: "address", name: "_signer", type: "address" },
              { internalType: "bytes32", name: "_hash", type: "bytes32" },
              { internalType: "bytes", name: "_signature", type: "bytes" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
        ],
        l = [
          {
            type: "event",
            name: "Approval",
            inputs: [
              { indexed: !0, name: "owner", type: "address" },
              { indexed: !0, name: "spender", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "event",
            name: "Transfer",
            inputs: [
              { indexed: !0, name: "from", type: "address" },
              { indexed: !0, name: "to", type: "address" },
              { indexed: !1, name: "value", type: "uint256" },
            ],
          },
          {
            type: "function",
            name: "allowance",
            stateMutability: "view",
            inputs: [
              { name: "owner", type: "address" },
              { name: "spender", type: "address" },
            ],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "approve",
            stateMutability: "nonpayable",
            inputs: [
              { name: "spender", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "balanceOf",
            stateMutability: "view",
            inputs: [{ name: "account", type: "address" }],
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
            name: "name",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "symbol",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "string" }],
          },
          {
            type: "function",
            name: "totalSupply",
            stateMutability: "view",
            inputs: [],
            outputs: [{ type: "uint256" }],
          },
          {
            type: "function",
            name: "transfer",
            stateMutability: "nonpayable",
            inputs: [
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
          {
            type: "function",
            name: "transferFrom",
            stateMutability: "nonpayable",
            inputs: [
              { name: "sender", type: "address" },
              { name: "recipient", type: "address" },
              { name: "amount", type: "uint256" },
            ],
            outputs: [{ type: "bool" }],
          },
        ];
    },
    26390: function (e, t, n) {
      n.d(t, {
        $: function () {
          return i;
        },
        Up: function () {
          return r;
        },
        hZ: function () {
          return o;
        },
      });
      let i = {
          1: "An `assert` condition failed.",
          17: "Arithmetic operation resulted in underflow or overflow.",
          18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
          33: "Attempted to convert to an invalid type.",
          34: "Attempted to access a storage byte array that is incorrectly encoded.",
          49: "Performed `.pop()` on an empty array",
          50: "Array index is out of bounds.",
          65: "Allocated too much memory or created an array which is too large.",
          81: "Attempted to call a zero-initialized variable of internal function type.",
        },
        r = {
          inputs: [{ name: "message", type: "string" }],
          name: "Error",
          type: "error",
        },
        o = {
          inputs: [{ name: "reason", type: "uint256" }],
          name: "Panic",
          type: "error",
        };
    },
    4817: function (e, t, n) {
      n.d(t, {
        Bd: function () {
          return o;
        },
        Zn: function () {
          return r;
        },
        ez: function () {
          return i;
        },
      });
      let i = { gwei: 9, wei: 18 },
        r = { ether: -9, wei: 9 },
        o = { ether: -18, gwei: -9 };
    },
    45581: function (e, t, n) {
      n.d(t, {
        CI: function () {
          return O;
        },
        FM: function () {
          return p;
        },
        Gy: function () {
          return x;
        },
        KY: function () {
          return w;
        },
        M4: function () {
          return d;
        },
        MX: function () {
          return m;
        },
        S4: function () {
          return g;
        },
        SM: function () {
          return P;
        },
        cO: function () {
          return s;
        },
        dh: function () {
          return _;
        },
        fM: function () {
          return a;
        },
        fs: function () {
          return h;
        },
        gr: function () {
          return l;
        },
        hn: function () {
          return j;
        },
        lC: function () {
          return b;
        },
        mv: function () {
          return v;
        },
        wM: function () {
          return M;
        },
        wb: function () {
          return u;
        },
        xB: function () {
          return c;
        },
        xL: function () {
          return y;
        },
        yP: function () {
          return f;
        },
      });
      var i = n(67705),
        r = n(95305),
        o = n(80230);
      class a extends o.G {
        constructor({ docsPath: e }) {
          super(
            "A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",
            { docsPath: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiConstructorNotFoundError",
            });
        }
      }
      class s extends o.G {
        constructor({ docsPath: e }) {
          super(
            "Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",
            { docsPath: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiConstructorParamsNotFoundError",
            });
        }
      }
      class c extends o.G {
        constructor({ data: e, params: t, size: n }) {
          super(
            [
              "Data size of ".concat(
                n,
                " bytes is too small for given parameters."
              ),
            ].join("\n"),
            {
              metaMessages: [
                "Params: (".concat((0, i.h)(t, { includeName: !0 }), ")"),
                "Data:   ".concat(e, " (").concat(n, " bytes)"),
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiDecodingDataSizeTooSmallError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e),
            (this.params = t),
            (this.size = n);
        }
      }
      class u extends o.G {
        constructor() {
          super('Cannot decode zero data ("0x") with ABI parameters.'),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiDecodingZeroDataError",
            });
        }
      }
      class l extends o.G {
        constructor({ expectedLength: e, givenLength: t, type: n }) {
          super(
            [
              "ABI encoding array length mismatch for type ".concat(n, "."),
              "Expected length: ".concat(e),
              "Given length: ".concat(t),
            ].join("\n")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingArrayLengthMismatchError",
            });
        }
      }
      class d extends o.G {
        constructor({ expectedSize: e, value: t }) {
          super(
            'Size of bytes "'
              .concat(t, '" (bytes')
              .concat((0, r.d)(t), ") does not match expected size (bytes")
              .concat(e, ").")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingBytesSizeMismatchError",
            });
        }
      }
      class h extends o.G {
        constructor({ expectedLength: e, givenLength: t }) {
          super(
            [
              "ABI encoding params/values length mismatch.",
              "Expected length (params): ".concat(e),
              "Given length (values): ".concat(t),
            ].join("\n")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEncodingLengthMismatchError",
            });
        }
      }
      class f extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            [
              'Encoded error signature "'.concat(e, '" not found on ABI.'),
              "Make sure you are using the correct ABI and that the error exists on it.",
              "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(
                e,
                "."
              ),
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiErrorSignatureNotFoundError",
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.signature = e);
        }
      }
      class p extends o.G {
        constructor({ docsPath: e }) {
          super("Cannot extract event signature from empty topics.", {
            docsPath: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventSignatureEmptyTopicsError",
            });
        }
      }
      class b extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            [
              'Encoded event signature "'.concat(e, '" not found on ABI.'),
              "Make sure you are using the correct ABI and that the event exists on it.",
              "You can look up the signature here: https://openchain.xyz/signatures?query=".concat(
                e,
                "."
              ),
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventSignatureNotFoundError",
            });
        }
      }
      class v extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            [
              "Event ".concat(
                e ? '"'.concat(e, '" ') : "",
                "not found on ABI."
              ),
              "Make sure you are using the correct ABI and that the event exists on it.",
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiEventNotFoundError",
            });
        }
      }
      class y extends o.G {
        constructor(e, { docsPath: t } = {}) {
          super(
            [
              "Function ".concat(
                e ? '"'.concat(e, '" ') : "",
                "not found on ABI."
              ),
              "Make sure you are using the correct ABI and that the function exists on it.",
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiFunctionNotFoundError",
            });
        }
      }
      class m extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            [
              'Function "'.concat(
                e,
                '" does not contain any `outputs` on ABI.'
              ),
              "Cannot decode function result without knowing what the parameter types are.",
              "Make sure you are using the correct ABI and that the function exists on it.",
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiFunctionOutputsNotFoundError",
            });
        }
      }
      class g extends o.G {
        constructor(e, t) {
          super("Found ambiguous types in overloaded ABI items.", {
            metaMessages: [
              "`"
                .concat(e.type, "` in `")
                .concat((0, i.t)(e.abiItem), "`, and"),
              "`".concat(t.type, "` in `").concat((0, i.t)(t.abiItem), "`"),
              "",
              "These types encode differently and cannot be distinguished at runtime.",
              "Remove one of the ambiguous items in the ABI.",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AbiItemAmbiguityError",
            });
        }
      }
      class w extends o.G {
        constructor({ expectedSize: e, givenSize: t }) {
          super("Expected bytes".concat(e, ", got bytes").concat(t, ".")),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "BytesSizeMismatchError",
            });
        }
      }
      class P extends o.G {
        constructor({ abiItem: e, data: t, params: n, size: r }) {
          super(
            [
              "Data size of ".concat(
                r,
                " bytes is too small for non-indexed event parameters."
              ),
            ].join("\n"),
            {
              metaMessages: [
                "Params: (".concat((0, i.h)(n, { includeName: !0 }), ")"),
                "Data:   ".concat(t, " (").concat(r, " bytes)"),
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "DecodeLogDataMismatch",
            }),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "params", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "size", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e),
            (this.data = t),
            (this.params = n),
            (this.size = r);
        }
      }
      class x extends o.G {
        constructor({ abiItem: e, param: t }) {
          super(
            [
              "Expected a topic for indexed event parameter"
                .concat(t.name ? ' "'.concat(t.name, '"') : "", ' on event "')
                .concat((0, i.t)(e, { includeName: !0 }), '".'),
            ].join("\n")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "DecodeLogTopicsMismatch",
            }),
            Object.defineProperty(this, "abiItem", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.abiItem = e);
        }
      }
      class _ extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            [
              'Type "'.concat(e, '" is not a valid encoding type.'),
              "Please provide a valid ABI type.",
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiEncodingType",
            });
        }
      }
      class O extends o.G {
        constructor(e, { docsPath: t }) {
          super(
            [
              'Type "'.concat(e, '" is not a valid decoding type.'),
              "Please provide a valid ABI type.",
            ].join("\n"),
            { docsPath: t }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidAbiDecodingType",
            });
        }
      }
      class j extends o.G {
        constructor(e) {
          super(['Value "'.concat(e, '" is not a valid array.')].join("\n")),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidArrayError",
            });
        }
      }
      class M extends o.G {
        constructor(e) {
          super(
            [
              '"'.concat(e, '" is not a valid definition type.'),
              'Valid types: "function", "event", "error"',
            ].join("\n")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidDefinitionTypeError",
            });
        }
      }
    },
    55774: function (e, t, n) {
      n.d(t, {
        Bk: function () {
          return a;
        },
        Yl: function () {
          return o;
        },
        mm: function () {
          return r;
        },
        pZ: function () {
          return s;
        },
      });
      var i = n(80230);
      class r extends i.G {
        constructor({ blockNumber: e, chain: t, contract: n }) {
          super(
            'Chain "'
              .concat(t.name, '" does not support contract "')
              .concat(n.name, '".'),
            {
              metaMessages: [
                "This could be due to any of the following:",
                ...(e && n.blockCreated && n.blockCreated > e
                  ? [
                      '- The contract "'
                        .concat(n.name, '" was not deployed until block ')
                        .concat(n.blockCreated, " (current block ")
                        .concat(e, ")."),
                    ]
                  : [
                      '- The chain does not have the contract "'.concat(
                        n.name,
                        '" configured.'
                      ),
                    ]),
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainDoesNotSupportContract",
            });
        }
      }
      class o extends i.G {
        constructor({ chain: e, currentChainId: t }) {
          super(
            "The current chain of the wallet (id: "
              .concat(
                t,
                ") does not match the target chain for the transaction (id: "
              )
              .concat(e.id, " – ")
              .concat(e.name, ")."),
            {
              metaMessages: [
                "Current Chain ID:  ".concat(t),
                "Expected Chain ID: ".concat(e.id, " – ").concat(e.name),
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainMismatchError",
            });
        }
      }
      class a extends i.G {
        constructor() {
          super(
            "No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ChainNotFoundError",
            });
        }
      }
      class s extends i.G {
        constructor() {
          super("No chain was provided to the Client."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ClientChainNotConfiguredError",
            });
        }
      }
    },
    47115: function (e, t, n) {
      n.d(t, {
        cg: function () {
          return y;
        },
        uq: function () {
          return m;
        },
        Lu: function () {
          return g;
        },
        Dk: function () {
          return w;
        },
        VQ: function () {
          return P;
        },
      });
      var i = n(79561),
        r = n(26390),
        o = n(68890),
        a = n(67705),
        s = n(92791);
      function c(e) {
        let {
          abiItem: t,
          args: n,
          includeFunctionName: i = !0,
          includeName: r = !1,
        } = e;
        if ("name" in t && "inputs" in t && t.inputs)
          return ""
            .concat(i ? t.name : "", "(")
            .concat(
              t.inputs
                .map((e, t) =>
                  ""
                    .concat(r && e.name ? "".concat(e.name, ": ") : "")
                    .concat("object" == typeof n[t] ? (0, s.P)(n[t]) : n[t])
                )
                .join(", "),
              ")"
            );
      }
      var u = n(52753),
        l = n(52926),
        d = n(98206),
        h = n(45581),
        f = n(80230),
        p = n(94655),
        b = n(10289),
        v = n(48036);
      class y extends f.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: r,
            data: o,
            gas: a,
            gasPrice: s,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            nonce: h,
            to: f,
            value: v,
            stateOverride: y,
          }
        ) {
          var m;
          let g = t ? (0, i.T)(t) : void 0,
            w = (0, b.xr)({
              from: null == g ? void 0 : g.address,
              to: f,
              value:
                void 0 !== v &&
                ""
                  .concat((0, l.d)(v), " ")
                  .concat(
                    (null == r
                      ? void 0
                      : null === (m = r.nativeCurrency) || void 0 === m
                      ? void 0
                      : m.symbol) || "ETH"
                  ),
              data: o,
              gas: a,
              gasPrice: void 0 !== s && "".concat((0, d.o)(s), " gwei"),
              maxFeePerGas: void 0 !== c && "".concat((0, d.o)(c), " gwei"),
              maxPriorityFeePerGas:
                void 0 !== u && "".concat((0, d.o)(u), " gwei"),
              nonce: h,
            });
          y && (w += "\n".concat((0, p.Bj)(y))),
            super(e.shortMessage, {
              cause: e,
              docsPath: n,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Raw Call Arguments:",
                w,
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
              value: "CallExecutionError",
            }),
            (this.cause = e);
        }
      }
      class m extends f.G {
        constructor(
          e,
          {
            abi: t,
            args: n,
            contractAddress: i,
            docsPath: r,
            functionName: o,
            sender: s,
          }
        ) {
          var l;
          let d = (0, u.mE)({ abi: t, args: n, name: o }),
            h = d
              ? c({
                  abiItem: d,
                  args: n,
                  includeFunctionName: !1,
                  includeName: !1,
                })
              : void 0;
          super(
            e.shortMessage ||
              'An unknown error occurred while executing the contract function "'.concat(
                o,
                '".'
              ),
            {
              cause: e,
              docsPath: r,
              metaMessages: [
                ...(e.metaMessages ? [...e.metaMessages, " "] : []),
                "Contract Call:",
                (0, b.xr)({
                  address: i && (0, v.CR)(i),
                  function: d ? (0, a.t)(d, { includeName: !0 }) : void 0,
                  args:
                    h &&
                    "()" !== h &&
                    ""
                      .concat(
                        [
                          ...Array(
                            null !== (l = null == o ? void 0 : o.length) &&
                              void 0 !== l
                              ? l
                              : 0
                          ).keys(),
                        ]
                          .map(() => " ")
                          .join("")
                      )
                      .concat(h),
                  sender: s,
                }),
              ].filter(Boolean),
            }
          ),
            Object.defineProperty(this, "abi", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "args", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "cause", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "contractAddress", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "formattedArgs", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "functionName", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "sender", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionExecutionError",
            }),
            (this.abi = t),
            (this.args = n),
            (this.cause = e),
            (this.contractAddress = i),
            (this.functionName = o),
            (this.sender = s);
        }
      }
      class g extends f.G {
        constructor({ abi: e, data: t, functionName: n, message: i }) {
          let s, u, l, d, f;
          if (t && "0x" !== t)
            try {
              let {
                abiItem: n,
                errorName: i,
                args: s,
              } = (f = (0, o.p)({ abi: e, data: t }));
              if ("Error" === i) l = s[0];
              else if ("Panic" === i) {
                let [e] = s;
                l = r.$[e];
              } else {
                var p;
                let e = n ? (0, a.t)(n, { includeName: !0 }) : void 0,
                  t =
                    n && s
                      ? c({
                          abiItem: n,
                          args: s,
                          includeFunctionName: !1,
                          includeName: !1,
                        })
                      : void 0;
                u = [
                  e ? "Error: ".concat(e) : "",
                  t && "()" !== t
                    ? "       "
                        .concat(
                          [
                            ...Array(
                              null !== (p = null == i ? void 0 : i.length) &&
                                void 0 !== p
                                ? p
                                : 0
                            ).keys(),
                          ]
                            .map(() => " ")
                            .join("")
                        )
                        .concat(t)
                    : "",
                ];
              }
            } catch (e) {
              s = e;
            }
          else i && (l = i);
          s instanceof h.yP &&
            ((d = s.signature),
            (u = [
              'Unable to decode signature "'.concat(
                d,
                '" as it was not found on the provided ABI.'
              ),
              "Make sure you are using the correct ABI and that the error exists on it.",
              "You can look up the decoded signature here: https://openchain.xyz/signatures?query=".concat(
                d,
                "."
              ),
            ])),
            super(
              (l && "execution reverted" !== l) || d
                ? [
                    'The contract function "'
                      .concat(n, '" reverted with the following ')
                      .concat(d ? "signature" : "reason", ":"),
                    l || d,
                  ].join("\n")
                : 'The contract function "'.concat(n, '" reverted.'),
              { cause: s, metaMessages: u }
            ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionRevertedError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "reason", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            Object.defineProperty(this, "signature", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = f),
            (this.reason = l),
            (this.signature = d);
        }
      }
      class w extends f.G {
        constructor({ functionName: e }) {
          super(
            'The contract function "'.concat(e, '" returned no data ("0x").'),
            {
              metaMessages: [
                "This could be due to any of the following:",
                '  - The contract does not have the function "'.concat(e, '",'),
                "  - The parameters passed to the contract function may be invalid, or",
                "  - The address is not a contract.",
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ContractFunctionZeroDataError",
            });
        }
      }
      class P extends f.G {
        constructor({ data: e, message: t }) {
          super(t || ""),
            Object.defineProperty(this, "code", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: 3,
            }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RawContractError",
            }),
            Object.defineProperty(this, "data", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: void 0,
            }),
            (this.data = e);
        }
      }
    },
    92155: function (e, t, n) {
      n.d(t, {
        KD: function () {
          return a;
        },
        T_: function () {
          return r;
        },
        lQ: function () {
          return o;
        },
      });
      var i = n(80230);
      class r extends i.G {
        constructor({ offset: e }) {
          super("Offset `".concat(e, "` cannot be negative.")),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NegativeOffsetError",
            });
        }
      }
      class o extends i.G {
        constructor({ length: e, position: t }) {
          super(
            "Position `"
              .concat(t, "` is out of bounds (`0 < position < ")
              .concat(e, "`).")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "PositionOutOfBoundsError",
            });
        }
      }
      class a extends i.G {
        constructor({ count: e, limit: t }) {
          super(
            "Recursive read limit of `"
              .concat(t, "` exceeded (recursive read count: `")
              .concat(e, "`).")
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "RecursiveReadLimitExceededError",
            });
        }
      }
    },
    26463: function (e, t, n) {
      n.d(t, {
        C_: function () {
          return d;
        },
        G$: function () {
          return s;
        },
        Hh: function () {
          return a;
        },
        M_: function () {
          return o;
        },
        WF: function () {
          return h;
        },
        ZI: function () {
          return c;
        },
        cj: function () {
          return v;
        },
        cs: function () {
          return b;
        },
        dR: function () {
          return f;
        },
        pZ: function () {
          return p;
        },
        se: function () {
          return l;
        },
        vU: function () {
          return u;
        },
      });
      var i = n(98206),
        r = n(80230);
      class o extends r.G {
        constructor({ cause: e, message: t } = {}) {
          var n;
          let i =
            null == t
              ? void 0
              : null === (n = t.replace("execution reverted: ", "")) ||
                void 0 === n
              ? void 0
              : n.replace("execution reverted", "");
          super(
            "Execution reverted ".concat(
              i ? "with reason: ".concat(i) : "for an unknown reason",
              "."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "ExecutionRevertedError",
            });
        }
      }
      Object.defineProperty(o, "code", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 3,
      }),
        Object.defineProperty(o, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /execution reverted/,
        });
      class a extends r.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            "The fee cap (`maxFeePerGas`".concat(
              t ? " = ".concat((0, i.o)(t), " gwei") : "",
              ") cannot be higher than the maximum allowed value (2^256-1)."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeCapTooHigh",
            });
        }
      }
      Object.defineProperty(a, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
      });
      class s extends r.G {
        constructor({ cause: e, maxFeePerGas: t } = {}) {
          super(
            "The fee cap (`maxFeePerGas`".concat(
              t ? " = ".concat((0, i.o)(t)) : "",
              " gwei) cannot be lower than the block base fee."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeCapTooLow",
            });
        }
      }
      Object.defineProperty(s, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
      });
      class c extends r.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            "Nonce provided for the transaction ".concat(
              t ? "(".concat(t, ") ") : "",
              "is higher than the next one expected."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceTooHighError",
            });
        }
      }
      Object.defineProperty(c, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too high/,
      });
      class u extends r.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            [
              "Nonce provided for the transaction ".concat(
                t ? "(".concat(t, ") ") : "",
                "is lower than the current nonce of the account."
              ),
              "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
            ].join("\n"),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceTooLowError",
            });
        }
      }
      Object.defineProperty(u, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce too low|transaction already imported|already known/,
      });
      class l extends r.G {
        constructor({ cause: e, nonce: t } = {}) {
          super(
            "Nonce provided for the transaction ".concat(
              t ? "(".concat(t, ") ") : "",
              "exceeds the maximum allowed nonce."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "NonceMaxValueError",
            });
        }
      }
      Object.defineProperty(l, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /nonce has max value/,
      });
      class d extends r.G {
        constructor({ cause: e } = {}) {
          super(
            "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
            {
              cause: e,
              metaMessages: [
                "This error could arise when the account does not have enough funds to:",
                " - pay for the total gas fee,",
                " - pay for the value to send.",
                " ",
                "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                " - `gas` is the amount of gas needed for transaction to execute,",
                " - `gas fee` is the gas fee,",
                " - `value` is the amount of ether to send to the recipient.",
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InsufficientFundsError",
            });
        }
      }
      Object.defineProperty(d, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /insufficient funds/,
      });
      class h extends r.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            "The amount of gas ".concat(
              t ? "(".concat(t, ") ") : "",
              "provided for the transaction exceeds the limit allowed for the block."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntrinsicGasTooHighError",
            });
        }
      }
      Object.defineProperty(h, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too high|gas limit reached/,
      });
      class f extends r.G {
        constructor({ cause: e, gas: t } = {}) {
          super(
            "The amount of gas ".concat(
              t ? "(".concat(t, ") ") : "",
              "provided for the transaction is too low."
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "IntrinsicGasTooLowError",
            });
        }
      }
      Object.defineProperty(f, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /intrinsic gas too low/,
      });
      class p extends r.G {
        constructor({ cause: e }) {
          super("The transaction type is not supported for this chain.", {
            cause: e,
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionTypeNotSupportedError",
            });
        }
      }
      Object.defineProperty(p, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /transaction type not valid/,
      });
      class b extends r.G {
        constructor({
          cause: e,
          maxPriorityFeePerGas: t,
          maxFeePerGas: n,
        } = {}) {
          super(
            [
              "The provided tip (`maxPriorityFeePerGas`"
                .concat(
                  t ? " = ".concat((0, i.o)(t), " gwei") : "",
                  ") cannot be higher than the fee cap (`maxFeePerGas`"
                )
                .concat(n ? " = ".concat((0, i.o)(n), " gwei") : "", ")."),
            ].join("\n"),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TipAboveFeeCapError",
            });
        }
      }
      Object.defineProperty(b, "nodeMessage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value:
          /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
      });
      class v extends r.G {
        constructor({ cause: e }) {
          super(
            "An error occurred while executing: ".concat(
              null == e ? void 0 : e.shortMessage
            ),
            { cause: e }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "UnknownNodeError",
            });
        }
      }
    },
    94655: function (e, t, n) {
      n.d(t, {
        Bj: function () {
          return s;
        },
        Nc: function () {
          return r;
        },
        Z8: function () {
          return o;
        },
      });
      var i = n(80230);
      class r extends i.G {
        constructor({ address: e }) {
          super('State for account "'.concat(e, '" is set multiple times.')),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "AccountStateConflictError",
            });
        }
      }
      class o extends i.G {
        constructor() {
          super("state and stateDiff are set on the same account."),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "StateAssignmentConflictError",
            });
        }
      }
      function a(e) {
        return e.reduce((e, t) => {
          let { slot: n, value: i } = t;
          return "".concat(e, "        ").concat(n, ": ").concat(i, "\n");
        }, "");
      }
      function s(e) {
        return e
          .reduce((e, t) => {
            let { address: n, ...i } = t,
              r = "".concat(e, "    ").concat(n, ":\n");
            return (
              i.nonce && (r += "      nonce: ".concat(i.nonce, "\n")),
              i.balance && (r += "      balance: ".concat(i.balance, "\n")),
              i.code && (r += "      code: ".concat(i.code, "\n")),
              i.state && (r += "      state:\n" + a(i.state)),
              i.stateDiff && (r += "      stateDiff:\n" + a(i.stateDiff)),
              r
            );
          }, "  State Override:\n")
          .slice(0, -1);
      }
    },
    10289: function (e, t, n) {
      n.d(t, {
        Bh: function () {
          return l;
        },
        Yb: function () {
          return d;
        },
        j3: function () {
          return c;
        },
        mc: function () {
          return h;
        },
        mk: function () {
          return u;
        },
        xY: function () {
          return s;
        },
        xr: function () {
          return a;
        },
      });
      var i = n(52926),
        r = n(98206),
        o = n(80230);
      function a(e) {
        let t = Object.entries(e)
            .map((e) => {
              let [t, n] = e;
              return void 0 === n || !1 === n ? null : [t, n];
            })
            .filter(Boolean),
          n = t.reduce((e, t) => {
            let [n] = t;
            return Math.max(e, n.length);
          }, 0);
        return t
          .map((e) => {
            let [t, i] = e;
            return "  ".concat("".concat(t, ":").padEnd(n + 1), "  ").concat(i);
          })
          .join("\n");
      }
      class s extends o.G {
        constructor() {
          super(
            "Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "FeeConflictError",
            });
        }
      }
      class c extends o.G {
        constructor({ transaction: e }) {
          super("Cannot infer a transaction type from provided transaction.", {
            metaMessages: [
              "Provided Transaction:",
              "{",
              a(e),
              "}",
              "",
              "To infer the type, either provide:",
              "- a `type` to the Transaction, or",
              "- an EIP-1559 Transaction with `maxFeePerGas`, or",
              "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or",
              "- a Legacy Transaction with `gasPrice`",
            ],
          }),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "InvalidSerializableTransactionError",
            });
        }
      }
      class u extends o.G {
        constructor(
          e,
          {
            account: t,
            docsPath: n,
            chain: o,
            data: s,
            gas: c,
            gasPrice: u,
            maxFeePerGas: l,
            maxPriorityFeePerGas: d,
            nonce: h,
            to: f,
            value: p,
          }
        ) {
          var b;
          super(e.shortMessage, {
            cause: e,
            docsPath: n,
            metaMessages: [
              ...(e.metaMessages ? [...e.metaMessages, " "] : []),
              "Request Arguments:",
              a({
                chain:
                  o &&
                  ""
                    .concat(null == o ? void 0 : o.name, " (id: ")
                    .concat(null == o ? void 0 : o.id, ")"),
                from: null == t ? void 0 : t.address,
                to: f,
                value:
                  void 0 !== p &&
                  ""
                    .concat((0, i.d)(p), " ")
                    .concat(
                      (null == o
                        ? void 0
                        : null === (b = o.nativeCurrency) || void 0 === b
                        ? void 0
                        : b.symbol) || "ETH"
                    ),
                data: s,
                gas: c,
                gasPrice: void 0 !== u && "".concat((0, r.o)(u), " gwei"),
                maxFeePerGas: void 0 !== l && "".concat((0, r.o)(l), " gwei"),
                maxPriorityFeePerGas:
                  void 0 !== d && "".concat((0, r.o)(d), " gwei"),
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
              value: "TransactionExecutionError",
            }),
            (this.cause = e);
        }
      }
      class l extends o.G {
        constructor({
          blockHash: e,
          blockNumber: t,
          blockTag: n,
          hash: i,
          index: r,
        }) {
          let o = "Transaction";
          n &&
            void 0 !== r &&
            (o = 'Transaction at block time "'
              .concat(n, '" at index "')
              .concat(r, '"')),
            e &&
              void 0 !== r &&
              (o = 'Transaction at block hash "'
                .concat(e, '" at index "')
                .concat(r, '"')),
            t &&
              void 0 !== r &&
              (o = 'Transaction at block number "'
                .concat(t, '" at index "')
                .concat(r, '"')),
            i && (o = 'Transaction with hash "'.concat(i, '"')),
            super("".concat(o, " could not be found.")),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionNotFoundError",
            });
        }
      }
      class d extends o.G {
        constructor({ hash: e }) {
          super(
            'Transaction receipt with hash "'.concat(
              e,
              '" could not be found. The Transaction may not be processed on a block yet.'
            )
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "TransactionReceiptNotFoundError",
            });
        }
      }
      class h extends o.G {
        constructor({ hash: e }) {
          super(
            'Timed out while waiting for transaction with hash "'.concat(
              e,
              '" to be confirmed.'
            )
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "WaitForTransactionReceiptTimeoutError",
            });
        }
      }
    },
    94403: function (e, t, n) {
      n.d(t, {
        r: function () {
          return v;
        },
      });
      var i = n(45581),
        r = n(75036),
        o = n(92155);
      let a = {
        bytes: new Uint8Array(),
        dataView: new DataView(new ArrayBuffer(0)),
        position: 0,
        positionReadCount: new Map(),
        recursiveReadCount: 0,
        recursiveReadLimit: 1 / 0,
        assertReadLimit() {
          if (this.recursiveReadCount >= this.recursiveReadLimit)
            throw new o.KD({
              count: this.recursiveReadCount + 1,
              limit: this.recursiveReadLimit,
            });
        },
        assertPosition(e) {
          if (e < 0 || e > this.bytes.length - 1)
            throw new o.lQ({ length: this.bytes.length, position: e });
        },
        decrementPosition(e) {
          if (e < 0) throw new o.T_({ offset: e });
          let t = this.position - e;
          this.assertPosition(t), (this.position = t);
        },
        getReadCount(e) {
          return this.positionReadCount.get(e || this.position) || 0;
        },
        incrementPosition(e) {
          if (e < 0) throw new o.T_({ offset: e });
          let t = this.position + e;
          this.assertPosition(t), (this.position = t);
        },
        inspectByte(e) {
          let t = null != e ? e : this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectBytes(e, t) {
          let n = null != t ? t : this.position;
          return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e);
        },
        inspectUint8(e) {
          let t = null != e ? e : this.position;
          return this.assertPosition(t), this.bytes[t];
        },
        inspectUint16(e) {
          let t = null != e ? e : this.position;
          return this.assertPosition(t + 1), this.dataView.getUint16(t);
        },
        inspectUint24(e) {
          let t = null != e ? e : this.position;
          return (
            this.assertPosition(t + 2),
            (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
          );
        },
        inspectUint32(e) {
          let t = null != e ? e : this.position;
          return this.assertPosition(t + 3), this.dataView.getUint32(t);
        },
        pushByte(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushBytes(e) {
          this.assertPosition(this.position + e.length - 1),
            this.bytes.set(e, this.position),
            (this.position += e.length);
        },
        pushUint8(e) {
          this.assertPosition(this.position),
            (this.bytes[this.position] = e),
            this.position++;
        },
        pushUint16(e) {
          this.assertPosition(this.position + 1),
            this.dataView.setUint16(this.position, e),
            (this.position += 2);
        },
        pushUint24(e) {
          this.assertPosition(this.position + 2),
            this.dataView.setUint16(this.position, e >> 8),
            this.dataView.setUint8(this.position + 2, 255 & e),
            (this.position += 3);
        },
        pushUint32(e) {
          this.assertPosition(this.position + 3),
            this.dataView.setUint32(this.position, e),
            (this.position += 4);
        },
        readByte() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectByte();
          return this.position++, e;
        },
        readBytes(e, t) {
          this.assertReadLimit(), this._touch();
          let n = this.inspectBytes(e);
          return (this.position += null != t ? t : e), n;
        },
        readUint8() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint8();
          return (this.position += 1), e;
        },
        readUint16() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint16();
          return (this.position += 2), e;
        },
        readUint24() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint24();
          return (this.position += 3), e;
        },
        readUint32() {
          this.assertReadLimit(), this._touch();
          let e = this.inspectUint32();
          return (this.position += 4), e;
        },
        setPosition(e) {
          let t = this.position;
          return (
            this.assertPosition(e),
            (this.position = e),
            () => (this.position = t)
          );
        },
        _touch() {
          if (this.recursiveReadLimit === 1 / 0) return;
          let e = this.getReadCount();
          this.positionReadCount.set(this.position, e + 1),
            e > 0 && this.recursiveReadCount++;
        },
      };
      var s = n(95305),
        c = n(23090),
        u = n(71264),
        l = n(75851),
        d = n(55936),
        h = n(15578);
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        void 0 !== t.size && (0, d.Yf)(e, { size: t.size });
        let n = (0, h.ci)(e, t);
        return (0, d.ly)(n, t);
      }
      var p = n(73596),
        b = n(8580);
      function v(e, t) {
        let n = "string" == typeof t ? (0, p.nr)(t) : t,
          o = (function (e) {
            let { recursiveReadLimit: t = 8192 } =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = Object.create(a);
            return (
              (n.bytes = e),
              (n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength)),
              (n.positionReadCount = new Map()),
              (n.recursiveReadLimit = t),
              n
            );
          })(n);
        if (0 === (0, s.d)(n) && e.length > 0) throw new i.wb();
        if ((0, s.d)(t) && 32 > (0, s.d)(t))
          throw new i.xB({
            data: "string" == typeof t ? t : (0, h.ci)(t),
            params: e,
            size: (0, s.d)(t),
          });
        let v = 0,
          m = [];
        for (let t = 0; t < e.length; ++t) {
          let n = e[t];
          o.setPosition(v);
          let [a, s] = (function e(t, n, o) {
            let { staticPosition: a } = o,
              s = (0, b.S)(n.type);
            if (s) {
              let [i, r] = s;
              return (function (t, n, i) {
                let { length: r, staticPosition: o } = i;
                if (!r) {
                  let i = o + f(t.readBytes(32)),
                    r = i + 32;
                  t.setPosition(i);
                  let a = f(t.readBytes(32)),
                    s = y(n),
                    c = 0,
                    u = [];
                  for (let i = 0; i < a; ++i) {
                    t.setPosition(r + (s ? 32 * i : c));
                    let [o, a] = e(t, n, { staticPosition: r });
                    (c += a), u.push(o);
                  }
                  return t.setPosition(o + 32), [u, 32];
                }
                if (y(n)) {
                  let i = o + f(t.readBytes(32)),
                    a = [];
                  for (let o = 0; o < r; ++o) {
                    t.setPosition(i + 32 * o);
                    let [r] = e(t, n, { staticPosition: i });
                    a.push(r);
                  }
                  return t.setPosition(o + 32), [a, 32];
                }
                let a = 0,
                  s = [];
                for (let i = 0; i < r; ++i) {
                  let [i, r] = e(t, n, { staticPosition: o + a });
                  (a += r), s.push(i);
                }
                return [s, a];
              })(t, { ...n, type: r }, { length: i, staticPosition: a });
            }
            if ("tuple" === n.type)
              return (function (t, n, i) {
                let { staticPosition: r } = i,
                  o =
                    0 === n.components.length ||
                    n.components.some((e) => {
                      let { name: t } = e;
                      return !t;
                    }),
                  a = o ? [] : {},
                  s = 0;
                if (y(n)) {
                  let i = r + f(t.readBytes(32));
                  for (let r = 0; r < n.components.length; ++r) {
                    let c = n.components[r];
                    t.setPosition(i + s);
                    let [u, l] = e(t, c, { staticPosition: i });
                    (s += l), (a[o ? r : null == c ? void 0 : c.name] = u);
                  }
                  return t.setPosition(r + 32), [a, 32];
                }
                for (let i = 0; i < n.components.length; ++i) {
                  let c = n.components[i],
                    [u, l] = e(t, c, { staticPosition: r });
                  (a[o ? i : null == c ? void 0 : c.name] = u), (s += l);
                }
                return [a, s];
              })(t, n, { staticPosition: a });
            if ("address" === n.type)
              return (function (e) {
                let t = e.readBytes(32);
                return [(0, r.x)((0, h.ci)((0, c.T4)(t, -20))), 32];
              })(t);
            if ("bool" === n.type)
              return [
                (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = e;
                  if (
                    (void 0 !== t.size &&
                      ((0, d.Yf)(n, { size: t.size }), (n = (0, u.f)(n))),
                    n.length > 1 || n[0] > 1)
                  )
                    throw new l.yr(n);
                  return !!n[0];
                })(t.readBytes(32), { size: 32 }),
                32,
              ];
            if (n.type.startsWith("bytes"))
              return (function (e, t, n) {
                let { staticPosition: i } = n,
                  [r, o] = t.type.split("bytes");
                if (!o) {
                  let t = f(e.readBytes(32));
                  e.setPosition(i + t);
                  let n = f(e.readBytes(32));
                  if (0 === n) return e.setPosition(i + 32), ["0x", 32];
                  let r = e.readBytes(n);
                  return e.setPosition(i + 32), [(0, h.ci)(r), 32];
                }
                return [(0, h.ci)(e.readBytes(parseInt(o), 32)), 32];
              })(t, n, { staticPosition: a });
            if (n.type.startsWith("uint") || n.type.startsWith("int"))
              return (function (e, t) {
                let n = t.type.startsWith("int"),
                  i = parseInt(t.type.split("int")[1] || "256"),
                  r = e.readBytes(32);
                return [
                  i > 48
                    ? (function (e) {
                        let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        void 0 !== t.size && (0, d.Yf)(e, { size: t.size });
                        let n = (0, h.ci)(e, t);
                        return (0, d.y_)(n, t);
                      })(r, { signed: n })
                    : f(r, { signed: n }),
                  32,
                ];
              })(t, n);
            if ("string" === n.type)
              return (function (e, t) {
                let { staticPosition: n } = t,
                  i = f(e.readBytes(32));
                e.setPosition(n + i);
                let r = f(e.readBytes(32));
                if (0 === r) return e.setPosition(n + 32), ["", 32];
                let o = e.readBytes(r, 32),
                  a = (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = e;
                    return (
                      void 0 !== t.size &&
                        ((0, d.Yf)(n, { size: t.size }),
                        (n = (0, u.f)(n, { dir: "right" }))),
                      new TextDecoder().decode(n)
                    );
                  })((0, u.f)(o));
                return e.setPosition(n + 32), [a, 32];
              })(t, { staticPosition: a });
            throw new i.CI(n.type, {
              docsPath: "/docs/contract/decodeAbiParameters",
            });
          })(o, n, { staticPosition: 0 });
          (v += s), m.push(a);
        }
        return m;
      }
      function y(e) {
        var t;
        let { type: n } = e;
        if ("string" === n || "bytes" === n || n.endsWith("[]")) return !0;
        if ("tuple" === n)
          return null === (t = e.components) || void 0 === t
            ? void 0
            : t.some(y);
        let i = (0, b.S)(e.type);
        return !!(i && y({ ...e, type: i[1] }));
      }
    },
    68890: function (e, t, n) {
      n.d(t, {
        p: function () {
          return u;
        },
      });
      var i = n(26390),
        r = n(45581),
        o = n(23090),
        a = n(9226),
        s = n(94403),
        c = n(67705);
      function u(e) {
        let { abi: t, data: n } = e,
          u = (0, o.tP)(n, 0, 4);
        if ("0x" === u) throw new r.wb();
        let l = [...(t || []), i.Up, i.hZ].find(
          (e) => "error" === e.type && u === (0, a.C)((0, c.t)(e))
        );
        if (!l)
          throw new r.yP(u, { docsPath: "/docs/contract/decodeErrorResult" });
        return {
          abiItem: l,
          args:
            "inputs" in l && l.inputs && l.inputs.length > 0
              ? (0, s.r)(l.inputs, (0, o.tP)(n, 4))
              : void 0,
          errorName: l.name,
        };
      }
    },
    27470: function (e, t, n) {
      n.d(t, {
        k: function () {
          return s;
        },
      });
      var i = n(45581),
        r = n(94403),
        o = n(52753);
      let a = "/docs/contract/decodeFunctionResult";
      function s(e) {
        let { abi: t, args: n, functionName: s, data: c } = e,
          u = t[0];
        if (s) {
          let e = (0, o.mE)({ abi: t, args: n, name: s });
          if (!e) throw new i.xL(s, { docsPath: a });
          u = e;
        }
        if ("function" !== u.type) throw new i.xL(void 0, { docsPath: a });
        if (!u.outputs) throw new i.MX(u.name, { docsPath: a });
        let l = (0, r.r)(u.outputs, c);
        return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0;
      }
    },
    8580: function (e, t, n) {
      n.d(t, {
        E: function () {
          return d;
        },
        S: function () {
          return f;
        },
      });
      var i = n(45581),
        r = n(44898),
        o = n(39361),
        a = n(3556),
        s = n(89507),
        c = n(95305),
        u = n(23090),
        l = n(15578);
      function d(e, t) {
        if (e.length !== t.length)
          throw new i.fs({ expectedLength: e.length, givenLength: t.length });
        let n = h(
          (function (e) {
            let { params: t, values: n } = e,
              d = [];
            for (let e = 0; e < t.length; e++)
              d.push(
                (function e(t) {
                  let { param: n, value: d } = t,
                    p = f(n.type);
                  if (p) {
                    let [t, r] = p;
                    return (function (t, n) {
                      let { length: r, param: o } = n,
                        s = null === r;
                      if (!Array.isArray(t)) throw new i.hn(t);
                      if (!s && t.length !== r)
                        throw new i.gr({
                          expectedLength: r,
                          givenLength: t.length,
                          type: "".concat(o.type, "[").concat(r, "]"),
                        });
                      let c = !1,
                        u = [];
                      for (let n = 0; n < t.length; n++) {
                        let i = e({ param: o, value: t[n] });
                        i.dynamic && (c = !0), u.push(i);
                      }
                      if (s || c) {
                        let e = h(u);
                        if (s) {
                          let t = (0, l.eC)(u.length, { size: 32 });
                          return {
                            dynamic: !0,
                            encoded: u.length > 0 ? (0, a.zo)([t, e]) : t,
                          };
                        }
                        if (c) return { dynamic: !0, encoded: e };
                      }
                      return {
                        dynamic: !1,
                        encoded: (0, a.zo)(
                          u.map((e) => {
                            let { encoded: t } = e;
                            return t;
                          })
                        ),
                      };
                    })(d, { length: t, param: { ...n, type: r } });
                  }
                  if ("tuple" === n.type)
                    return (function (t, n) {
                      let { param: i } = n,
                        r = !1,
                        o = [];
                      for (let n = 0; n < i.components.length; n++) {
                        let a = i.components[n],
                          s = Array.isArray(t) ? n : a.name,
                          c = e({ param: a, value: t[s] });
                        o.push(c), c.dynamic && (r = !0);
                      }
                      return {
                        dynamic: r,
                        encoded: r
                          ? h(o)
                          : (0, a.zo)(
                              o.map((e) => {
                                let { encoded: t } = e;
                                return t;
                              })
                            ),
                      };
                    })(d, { param: n });
                  if ("address" === n.type)
                    return (function (e) {
                      if (!(0, o.U)(e)) throw new r.b({ address: e });
                      return {
                        dynamic: !1,
                        encoded: (0, s.gc)(e.toLowerCase()),
                      };
                    })(d);
                  if ("bool" === n.type)
                    return { dynamic: !1, encoded: (0, s.gc)((0, l.C4)(d)) };
                  if (n.type.startsWith("uint") || n.type.startsWith("int"))
                    return (function (e, t) {
                      let { signed: n } = t;
                      return {
                        dynamic: !1,
                        encoded: (0, l.eC)(e, { size: 32, signed: n }),
                      };
                    })(d, { signed: n.type.startsWith("int") });
                  if (n.type.startsWith("bytes"))
                    return (function (e, t) {
                      let { param: n } = t,
                        [, r] = n.type.split("bytes"),
                        o = (0, c.d)(e);
                      if (!r) {
                        let t = e;
                        return (
                          o % 32 != 0 &&
                            (t = (0, s.gc)(t, {
                              dir: "right",
                              size: 32 * Math.ceil((e.length - 2) / 2 / 32),
                            })),
                          {
                            dynamic: !0,
                            encoded: (0, a.zo)([
                              (0, s.gc)((0, l.eC)(o, { size: 32 })),
                              t,
                            ]),
                          }
                        );
                      }
                      if (o !== parseInt(r))
                        throw new i.M4({ expectedSize: parseInt(r), value: e });
                      return {
                        dynamic: !1,
                        encoded: (0, s.gc)(e, { dir: "right" }),
                      };
                    })(d, { param: n });
                  if ("string" === n.type)
                    return (function (e) {
                      let t = (0, l.$G)(e),
                        n = Math.ceil((0, c.d)(t) / 32),
                        i = [];
                      for (let e = 0; e < n; e++)
                        i.push(
                          (0, s.gc)((0, u.tP)(t, 32 * e, (e + 1) * 32), {
                            dir: "right",
                          })
                        );
                      return {
                        dynamic: !0,
                        encoded: (0, a.zo)([
                          (0, s.gc)((0, l.eC)((0, c.d)(t), { size: 32 })),
                          ...i,
                        ]),
                      };
                    })(d);
                  throw new i.dh(n.type, {
                    docsPath: "/docs/contract/encodeAbiParameters",
                  });
                })({ param: t[e], value: n[e] })
              );
            return d;
          })({ params: e, values: t })
        );
        return 0 === n.length ? "0x" : n;
      }
      function h(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) {
          let { dynamic: i, encoded: r } = e[n];
          i ? (t += 32) : (t += (0, c.d)(r));
        }
        let n = [],
          i = [],
          r = 0;
        for (let o = 0; o < e.length; o++) {
          let { dynamic: a, encoded: s } = e[o];
          a
            ? (n.push((0, l.eC)(t + r, { size: 32 })),
              i.push(s),
              (r += (0, c.d)(s)))
            : n.push(s);
        }
        return (0, a.zo)([...n, ...i]);
      }
      function f(e) {
        let t = e.match(/^(.*)\[(\d+)?\]$/);
        return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0;
      }
    },
    3551: function (e, t, n) {
      n.d(t, {
        R: function () {
          return l;
        },
      });
      var i = n(45581),
        r = n(3556),
        o = n(9226),
        a = n(8580),
        s = n(67705),
        c = n(52753);
      let u = "/docs/contract/encodeFunctionData";
      function l(e) {
        let { abi: t, args: n, functionName: l } = e,
          d = t[0];
        if (l) {
          let e = (0, c.mE)({ abi: t, args: n, name: l });
          if (!e) throw new i.xL(l, { docsPath: u });
          d = e;
        }
        if ("function" !== d.type) throw new i.xL(void 0, { docsPath: u });
        let h = (0, s.t)(d),
          f = (0, o.C)(h),
          p =
            "inputs" in d && d.inputs
              ? (0, a.E)(d.inputs, null != n ? n : [])
              : void 0;
        return (0, r.SM)([f, null != p ? p : "0x"]);
      }
    },
    67705: function (e, t, n) {
      n.d(t, {
        h: function () {
          return o;
        },
        t: function () {
          return r;
        },
      });
      var i = n(45581);
      function r(e) {
        let { includeName: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("function" !== e.type && "event" !== e.type && "error" !== e.type)
          throw new i.wM(e.type);
        return ""
          .concat(e.name, "(")
          .concat(o(e.inputs, { includeName: t }), ")");
      }
      function o(e) {
        let { includeName: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e
          ? e
              .map((e) =>
                (function (e, t) {
                  let { includeName: n } = t;
                  return e.type.startsWith("tuple")
                    ? "("
                        .concat(o(e.components, { includeName: n }), ")")
                        .concat(e.type.slice(5))
                    : e.type + (n && e.name ? " ".concat(e.name) : "");
                })(e, { includeName: t })
              )
              .join(t ? ", " : ",")
          : "";
      }
    },
    52753: function (e, t, n) {
      n.d(t, {
        mE: function () {
          return c;
        },
      });
      var i = n(45581),
        r = n(21230),
        o = n(39361),
        a = n(58113),
        s = n(9226);
      function c(e) {
        let t;
        let { abi: n, args: c = [], name: u } = e,
          l = (0, r.v)(u, { strict: !1 }),
          d = n.filter((e) =>
            l
              ? "function" === e.type
                ? (0, s.C)(e) === u
                : "event" === e.type && (0, a.n)(e) === u
              : "name" in e && e.name === u
          );
        if (0 !== d.length) {
          if (1 === d.length) return d[0];
          for (let e of d)
            if ("inputs" in e) {
              if (!c || 0 === c.length) {
                if (!e.inputs || 0 === e.inputs.length) return e;
                continue;
              }
              if (
                e.inputs &&
                0 !== e.inputs.length &&
                e.inputs.length === c.length &&
                c.every((t, n) => {
                  let i = "inputs" in e && e.inputs[n];
                  return (
                    !!i &&
                    (function e(t, n) {
                      let i = typeof t,
                        r = n.type;
                      switch (r) {
                        case "address":
                          return (0, o.U)(t, { strict: !1 });
                        case "bool":
                          return "boolean" === i;
                        case "function":
                        case "string":
                          return "string" === i;
                        default:
                          if ("tuple" === r && "components" in n)
                            return Object.values(n.components).every((n, i) =>
                              e(Object.values(t)[i], n)
                            );
                          if (
                            /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(
                              r
                            )
                          )
                            return "number" === i || "bigint" === i;
                          if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r))
                            return "string" === i || t instanceof Uint8Array;
                          if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r))
                            return (
                              Array.isArray(t) &&
                              t.every((t) =>
                                e(t, {
                                  ...n,
                                  type: r.replace(/(\[[0-9]{0,}\])$/, ""),
                                })
                              )
                            );
                          return !1;
                      }
                    })(t, i)
                  );
                })
              ) {
                if (t && "inputs" in t && t.inputs) {
                  let n = (function e(t, n, i) {
                    for (let r in t) {
                      let a = t[r],
                        s = n[r];
                      if (
                        "tuple" === a.type &&
                        "tuple" === s.type &&
                        "components" in a &&
                        "components" in s
                      )
                        return e(a.components, s.components, i[r]);
                      let c = [a.type, s.type];
                      if (
                        (c.includes("address") && c.includes("bytes20")) ||
                        (((c.includes("address") && c.includes("string")) ||
                          (c.includes("address") && c.includes("bytes"))) &&
                          (0, o.U)(i[r], { strict: !1 }))
                      )
                        return c;
                    }
                  })(e.inputs, t.inputs, c);
                  if (n)
                    throw new i.S4(
                      { abiItem: e, type: n[0] },
                      { abiItem: t, type: n[1] }
                    );
                }
                t = e;
              }
            }
          return t || d[0];
        }
      }
    },
    73621: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var i = n(55774);
      function r(e) {
        var t;
        let { blockNumber: n, chain: r, contract: o } = e,
          a =
            null == r
              ? void 0
              : null === (t = r.contracts) || void 0 === t
              ? void 0
              : t[o];
        if (!a) throw new i.mm({ chain: r, contract: { name: o } });
        if (n && a.blockCreated && a.blockCreated > n)
          throw new i.mm({
            blockNumber: n,
            chain: r,
            contract: { name: o, blockCreated: a.blockCreated },
          });
        return a.address;
      }
    },
    3556: function (e, t, n) {
      function i(e) {
        return "string" == typeof e[0]
          ? r(e)
          : (function (e) {
              let t = 0;
              for (let n of e) t += n.length;
              let n = new Uint8Array(t),
                i = 0;
              for (let t of e) n.set(t, i), (i += t.length);
              return n;
            })(e);
      }
      function r(e) {
        return "0x".concat(e.reduce((e, t) => e + t.replace("0x", ""), ""));
      }
      n.d(t, {
        SM: function () {
          return r;
        },
        zo: function () {
          return i;
        },
      });
    },
    23090: function (e, t, n) {
      n.d(t, {
        T4: function () {
          return u;
        },
        tP: function () {
          return a;
        },
      });
      var i = n(11758),
        r = n(21230),
        o = n(95305);
      function a(e, t, n) {
        let { strict: i } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        return (0, r.v)(e, { strict: !1 })
          ? (function (e, t, n) {
              let { strict: i } =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {};
              s(e, t);
              let r = "0x".concat(
                e
                  .replace("0x", "")
                  .slice(
                    (null != t ? t : 0) * 2,
                    (null != n ? n : e.length) * 2
                  )
              );
              return i && c(r, t, n), r;
            })(e, t, n, { strict: i })
          : u(e, t, n, { strict: i });
      }
      function s(e, t) {
        if ("number" == typeof t && t > 0 && t > (0, o.d)(e) - 1)
          throw new i.mV({ offset: t, position: "start", size: (0, o.d)(e) });
      }
      function c(e, t, n) {
        if (
          "number" == typeof t &&
          "number" == typeof n &&
          (0, o.d)(e) !== n - t
        )
          throw new i.mV({ offset: n, position: "end", size: (0, o.d)(e) });
      }
      function u(e, t, n) {
        let { strict: i } =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        s(e, t);
        let r = e.slice(t, n);
        return i && c(r, t, n), r;
      }
    },
    95094: function (e, t, n) {
      n.d(t, {
        S: function () {
          return s;
        },
      });
      var i = n(45581),
        r = n(80230),
        o = n(47115),
        a = n(24473);
      function s(e, t) {
        let {
            abi: n,
            address: s,
            args: c,
            docsPath: u,
            functionName: l,
            sender: d,
          } = t,
          {
            code: h,
            data: f,
            message: p,
            shortMessage: b,
          } = e instanceof o.VQ
            ? e
            : e instanceof r.G
            ? e.walk((e) => "data" in e) || e.walk()
            : {},
          v =
            e instanceof i.wb
              ? new o.Dk({ functionName: l })
              : [3, a.XS.code].includes(h) && (f || p || b)
              ? new o.Lu({
                  abi: n,
                  data: "object" == typeof f ? f.data : f,
                  functionName: l,
                  message: null != b ? b : p,
                })
              : e;
        return new o.uq(v, {
          abi: n,
          args: c,
          contractAddress: s,
          docsPath: u,
          functionName: l,
          sender: d,
        });
      }
    },
    85069: function (e, t, n) {
      n.d(t, {
        k: function () {
          return o;
        },
      });
      var i = n(80230),
        r = n(26463);
      function o(e, t) {
        let n = (e.details || "").toLowerCase(),
          o = e instanceof i.G ? e.walk((e) => e.code === r.M_.code) : e;
        return o instanceof i.G
          ? new r.M_({ cause: e, message: o.details })
          : r.M_.nodeMessage.test(n)
          ? new r.M_({ cause: e, message: e.details })
          : r.Hh.nodeMessage.test(n)
          ? new r.Hh({
              cause: e,
              maxFeePerGas: null == t ? void 0 : t.maxFeePerGas,
            })
          : r.G$.nodeMessage.test(n)
          ? new r.G$({
              cause: e,
              maxFeePerGas: null == t ? void 0 : t.maxFeePerGas,
            })
          : r.ZI.nodeMessage.test(n)
          ? new r.ZI({ cause: e, nonce: null == t ? void 0 : t.nonce })
          : r.vU.nodeMessage.test(n)
          ? new r.vU({ cause: e, nonce: null == t ? void 0 : t.nonce })
          : r.se.nodeMessage.test(n)
          ? new r.se({ cause: e, nonce: null == t ? void 0 : t.nonce })
          : r.C_.nodeMessage.test(n)
          ? new r.C_({ cause: e })
          : r.WF.nodeMessage.test(n)
          ? new r.WF({ cause: e, gas: null == t ? void 0 : t.gas })
          : r.dR.nodeMessage.test(n)
          ? new r.dR({ cause: e, gas: null == t ? void 0 : t.gas })
          : r.pZ.nodeMessage.test(n)
          ? new r.pZ({ cause: e })
          : r.cs.nodeMessage.test(n)
          ? new r.cs({
              cause: e,
              maxFeePerGas: null == t ? void 0 : t.maxFeePerGas,
              maxPriorityFeePerGas: null == t ? void 0 : t.maxPriorityFeePerGas,
            })
          : new r.cj({ cause: e });
      }
    },
    67306: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      function i(e, t) {
        let { format: n } = t;
        if (!n) return {};
        let i = {};
        return (
          !(function t(n) {
            for (let r of Object.keys(n))
              r in e && (i[r] = e[r]),
                n[r] &&
                  "object" == typeof n[r] &&
                  !Array.isArray(n[r]) &&
                  t(n[r]);
          })(n(e || {})),
          i
        );
      }
    },
    20662: function (e, t, n) {
      n.d(t, {
        tG: function () {
          return o;
        },
      });
      var i = n(15578);
      let r = { legacy: "0x0", eip2930: "0x1", eip1559: "0x2", eip4844: "0x3" };
      function o(e) {
        return {
          ...e,
          gas: void 0 !== e.gas ? (0, i.eC)(e.gas) : void 0,
          gasPrice: void 0 !== e.gasPrice ? (0, i.eC)(e.gasPrice) : void 0,
          maxFeePerGas:
            void 0 !== e.maxFeePerGas ? (0, i.eC)(e.maxFeePerGas) : void 0,
          maxPriorityFeePerGas:
            void 0 !== e.maxPriorityFeePerGas
              ? (0, i.eC)(e.maxPriorityFeePerGas)
              : void 0,
          nonce: void 0 !== e.nonce ? (0, i.eC)(e.nonce) : void 0,
          type: void 0 !== e.type ? r[e.type] : void 0,
          value: void 0 !== e.value ? (0, i.eC)(e.value) : void 0,
        };
      }
    },
    31935: function (e, t, n) {
      n.d(t, {
        s: function () {
          return i;
        },
      });
      function i(e, t, n) {
        return (i) => {
          var r, o;
          return null !==
            (o =
              null === (r = e[t.name || n]) || void 0 === r
                ? void 0
                : r.call(e, i)) && void 0 !== o
            ? o
            : t(e, i);
        };
      }
    },
    58113: function (e, t, n) {
      n.d(t, {
        n: function () {
          return i;
        },
      });
      let i = n(84869).r;
    },
    9226: function (e, t, n) {
      n.d(t, {
        C: function () {
          return o;
        },
      });
      var i = n(23090),
        r = n(84869);
      let o = (e) => (0, i.tP)((0, r.r)(e), 0, 4);
    },
    84869: function (e, t, n) {
      n.d(t, {
        r: function () {
          return l;
        },
      });
      var i = n(73596),
        r = n(30206);
      let o = (e) => (0, r.w)((0, i.O0)(e)),
        a = RegExp("^tuple(?<array>(\\[(\\d*)\\])*)$");
      function s(e) {
        let t = "",
          n = e.length;
        for (let i = 0; i < n; i++)
          (t += (function e(t) {
            let n = t.type;
            if (a.test(t.type) && "components" in t) {
              var i;
              n = "(";
              let r = t.components.length;
              for (let i = 0; i < r; i++)
                (n += e(t.components[i])), i < r - 1 && (n += ", ");
              let o = (function (e, t) {
                let n = e.exec(t);
                return null == n ? void 0 : n.groups;
              })(a, t.type);
              return (
                (n += ")".concat(
                  null !== (i = null == o ? void 0 : o.array) && void 0 !== i
                    ? i
                    : ""
                )),
                e({ ...t, type: n })
              );
            }
            return ("indexed" in t &&
              t.indexed &&
              (n = "".concat(n, " indexed")),
            t.name)
              ? "".concat(n, " ").concat(t.name)
              : n;
          })(e[i])),
            i !== n - 1 && (t += ", ");
        return t;
      }
      var c = n(80230);
      let u = (e) => {
        var t;
        return (function (e) {
          let t = !0,
            n = "",
            i = 0,
            r = "",
            o = !1;
          for (let a = 0; a < e.length; a++) {
            let s = e[a];
            if (
              (["(", ")", ","].includes(s) && (t = !0),
              "(" === s && i++,
              ")" === s && i--,
              t)
            ) {
              if (0 === i) {
                if (" " === s && ["event", "function", ""].includes(r)) r = "";
                else if (((r += s), ")" === s)) {
                  o = !0;
                  break;
                }
                continue;
              }
              if (" " === s) {
                "," !== e[a - 1] &&
                  "," !== n &&
                  ",(" !== n &&
                  ((n = ""), (t = !1));
                continue;
              }
              (r += s), (n += s);
            }
          }
          if (!o) throw new c.G("Unable to normalize signature.");
          return r;
        })(
          "string" == typeof e
            ? e
            : "function" === (t = e).type
            ? "function "
                .concat(t.name, "(")
                .concat(s(t.inputs), ")")
                .concat(
                  t.stateMutability && "nonpayable" !== t.stateMutability
                    ? " ".concat(t.stateMutability)
                    : ""
                )
                .concat(
                  t.outputs.length ? " returns (".concat(s(t.outputs), ")") : ""
                )
            : "event" === t.type
            ? "event ".concat(t.name, "(").concat(s(t.inputs), ")")
            : "error" === t.type
            ? "error ".concat(t.name, "(").concat(s(t.inputs), ")")
            : "constructor" === t.type
            ? "constructor("
                .concat(s(t.inputs), ")")
                .concat("payable" === t.stateMutability ? " payable" : "")
            : "fallback" === t.type
            ? "fallback()"
            : "receive() external payable"
        );
      };
      function l(e) {
        return o(u(e));
      }
    },
    15337: function (e, t, n) {
      n.d(t, {
        F: function () {
          return c;
        },
      });
      var i = n(79561),
        r = n(44898),
        o = n(26463),
        a = n(10289),
        s = n(39361);
      function c(e) {
        let {
            account: t,
            gasPrice: n,
            maxFeePerGas: c,
            maxPriorityFeePerGas: u,
            to: l,
          } = e,
          d = t ? (0, i.T)(t) : void 0;
        if (d && !(0, s.U)(d.address)) throw new r.b({ address: d.address });
        if (l && !(0, s.U)(l)) throw new r.b({ address: l });
        if (void 0 !== n && (void 0 !== c || void 0 !== u)) throw new a.xY();
        if (c && c > 2n ** 256n - 1n) throw new o.Hh({ maxFeePerGas: c });
        if (u && c && u > c)
          throw new o.cs({ maxFeePerGas: c, maxPriorityFeePerGas: u });
      }
    },
    52926: function (e, t, n) {
      n.d(t, {
        d: function () {
          return o;
        },
      });
      var i = n(4817),
        r = n(60989);
      function o(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wei";
        return (0, r.b)(e, i.ez[t]);
      }
    },
    98206: function (e, t, n) {
      n.d(t, {
        o: function () {
          return o;
        },
      });
      var i = n(4817),
        r = n(60989);
      function o(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wei";
        return (0, r.b)(e, i.Zn[t]);
      }
    },
    60989: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      function i(e, t) {
        let n = e.toString(),
          i = n.startsWith("-");
        i && (n = n.slice(1));
        let [r, o] = [
          (n = n.padStart(t, "0")).slice(0, n.length - t),
          n.slice(n.length - t),
        ];
        return (
          (o = o.replace(/(0+)$/, "")),
          ""
            .concat(i ? "-" : "")
            .concat(r || "0")
            .concat(o ? ".".concat(o) : "")
        );
      }
    },
    38760: function (e, t, n) {
      n.d(t, {
        if: function () {
          return f;
        },
        NS: function () {
          return h;
        },
        aM: function () {
          return d;
        },
      });
      var i = n(73667),
        r = n(86968),
        o = n(65612),
        a = class extends r.z {
          bindMethods() {
            super.bindMethods(),
              (this.fetchNextPage = this.fetchNextPage.bind(this)),
              (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
          }
          setOptions(e, t) {
            super.setOptions({ ...e, behavior: (0, o.Gm)() }, t);
          }
          getOptimisticResult(e) {
            return (e.behavior = (0, o.Gm)()), super.getOptimisticResult(e);
          }
          fetchNextPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "forward" } },
            });
          }
          fetchPreviousPage(e) {
            return this.fetch({
              ...e,
              meta: { fetchMore: { direction: "backward" } },
            });
          }
          createResult(e, t) {
            var n, i, r, a;
            let { state: s } = e,
              c = super.createResult(e, t),
              { isFetching: u, isRefetching: l } = c,
              d =
                u &&
                (null === (i = s.fetchMeta) || void 0 === i
                  ? void 0
                  : null === (n = i.fetchMore) || void 0 === n
                  ? void 0
                  : n.direction) === "forward",
              h =
                u &&
                (null === (a = s.fetchMeta) || void 0 === a
                  ? void 0
                  : null === (r = a.fetchMore) || void 0 === r
                  ? void 0
                  : r.direction) === "backward";
            return {
              ...c,
              fetchNextPage: this.fetchNextPage,
              fetchPreviousPage: this.fetchPreviousPage,
              hasNextPage: (0, o.Qy)(t, s.data),
              hasPreviousPage: (0, o.ZF)(t, s.data),
              isFetchingNextPage: d,
              isFetchingPreviousPage: h,
              isRefetching: l && !d && !h,
            };
          }
          constructor(e, t) {
            super(e, t);
          }
        },
        s = n(22438),
        c = n(46063),
        u = n(69022),
        l = n(73054);
      function d(e) {
        let t = (0, i.a)({ ...e, queryKeyHashFn: l.k });
        return (t.queryKey = e.queryKey), t;
      }
      function h(e) {
        var t;
        let n = ((t = { ...e, queryKeyHashFn: l.k }), (0, s.r)(t, a, void 0));
        return (n.queryKey = e.queryKey), n;
      }
      function f(e, t) {
        return (0, u.v)(e, t) ? e : (0, c.Q$)(e, t);
      }
    },
  },
]);
