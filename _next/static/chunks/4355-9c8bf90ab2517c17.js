"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4355],
  {
    28816: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
      });
      var i = n(2731);
      async function r(e, t) {
        let n;
        if (
          (n =
            "function" == typeof t.connector
              ? e._internal.connectors.setup(t.connector)
              : t.connector).uid === e.state.current
        )
          throw new i.wi();
        try {
          var r;
          e.setState((e) => ({ ...e, status: "connecting" })),
            n.emitter.emit("message", { type: "connecting" });
          let i = await n.connect({ chainId: t.chainId }),
            o = i.accounts;
          return (
            n.emitter.off("connect", e._internal.events.connect),
            n.emitter.on("change", e._internal.events.change),
            n.emitter.on("disconnect", e._internal.events.disconnect),
            await (null === (r = e.storage) || void 0 === r
              ? void 0
              : r.setItem("recentConnectorId", n.id)),
            e.setState((e) => ({
              ...e,
              connections: new Map(e.connections).set(n.uid, {
                accounts: o,
                chainId: i.chainId,
                connector: n,
              }),
              current: n.uid,
              status: "connected",
            })),
            { accounts: o, chainId: i.chainId }
          );
        } catch (t) {
          throw (
            (e.setState((e) => ({
              ...e,
              status: e.current ? "connected" : "disconnected",
            })),
            t)
          );
        }
      }
    },
    42602: function (e, t, n) {
      n.d(t, {
        z: function () {
          return i;
        },
      });
      async function i(e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (n.connector) t = n.connector;
        else {
          let { connections: n, current: i } = e.state,
            r = n.get(i);
          t = null == r ? void 0 : r.connector;
        }
        let i = e.state.connections;
        t &&
          (await t.disconnect(),
          t.emitter.off("change", e._internal.events.change),
          t.emitter.off("disconnect", e._internal.events.disconnect),
          t.emitter.on("connect", e._internal.events.connect),
          i.delete(t.uid)),
          e.setState((e) => {
            if (0 === i.size)
              return {
                ...e,
                connections: new Map(),
                current: void 0,
                status: "disconnected",
              };
            let t = i.values().next().value;
            return { ...e, connections: new Map(i), current: t.connector.uid };
          });
        {
          var r, o;
          let t = e.state.current;
          if (!t) return;
          let n =
            null === (r = e.state.connections.get(t)) || void 0 === r
              ? void 0
              : r.connector;
          if (!n) return;
          await (null === (o = e.storage) || void 0 === o
            ? void 0
            : o.setItem("recentConnectorId", n.id));
        }
      }
    },
    63543: function (e, t, n) {
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var i = n(49134),
        r = n(37225);
      function o(e, t) {
        let { chainId: n, ...o } = t,
          a = e.getClient({ chainId: n });
        return (0, r.s)(a, i.r, "getEnsAvatar")(o);
      }
    },
    55309: function (e, t, n) {
      n.d(t, {
        w: function () {
          return o;
        },
      });
      var i = n(9577),
        r = n(37225);
      function o(e, t) {
        let { chainId: n, ...o } = t,
          a = e.getClient({ chainId: n });
        return (0, r.s)(a, i.w, "getEnsName")(o);
      }
    },
    35392: function (e, t, n) {
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var i = n(37542),
        r = n(37225),
        o = n(38507);
      async function a(e, t) {
        let n;
        let { account: a, connector: s, ...c } = t;
        return (
          (n =
            "object" == typeof a && "local" === a.type
              ? e.getClient()
              : await (0, o.e)(e, { account: a, connector: s })),
          (0, r.s)(
            n,
            i.l,
            "signMessage"
          )({ ...c, ...(a ? { account: a } : {}) })
        );
      }
    },
    3580: function (e, t, n) {
      n.d(t, {
        c: function () {
          return o;
        },
      });
      var i = n(2731),
        r = n(34497);
      async function o(e, t) {
        var n, o;
        let { chainId: a } = t,
          s = e.state.connections.get(
            null !==
              (o =
                null === (n = t.connector) || void 0 === n ? void 0 : n.uid) &&
              void 0 !== o
              ? o
              : e.state.current
          );
        if (s) {
          let e = s.connector;
          if (!e.switchChain) throw new r.O({ connector: e });
          return await e.switchChain({ chainId: a });
        }
        let c = e.chains.find((e) => e.id === a);
        if (!c) throw new i.X4();
        return e.setState((e) => ({ ...e, chainId: a })), c;
      }
    },
    65500: function (e, t, n) {
      n.d(t, {
        f: function () {
          return i;
        },
      });
      function i(e, t) {
        let { onChange: n } = t;
        return e._internal.connectors.subscribe((e, t) => {
          n(Object.values(e), t);
        });
      }
    },
    74355: function (e, t, n) {
      let i, r;
      function o() {
        if (!i)
          throw Error(
            'Please call "createWeb3Modal" before using "useWeb3Modal" hook'
          );
        return {
          open: async function (e) {
            await (null == i ? void 0 : i.open(e));
          },
          close: async function () {
            await (null == i ? void 0 : i.close());
          },
        };
      }
      n.d(t, {
        OY: function () {
          return b;
        },
        k_: function () {
          return o;
        },
      }),
        n(64090);
      var a = n(40204),
        s = n(55309),
        c = n(63543),
        l = n(5667),
        d = n(3580),
        u = n(28816),
        f = n(42602),
        h = n(35392),
        v = n(65500),
        w = n(53350),
        p = n(31536),
        g = n(58966),
        m = n(6279),
        C = n(31531),
        y = n(43801),
        N = n(43678);
      class I extends g.D4 {
        getState() {
          let e = super.getState();
          return {
            ...e,
            selectedNetworkId: m.gk.caipNetworkIdToNumber(e.selectedNetworkId),
          };
        }
        subscribeState(e) {
          return super.subscribeState((t) =>
            e({
              ...t,
              selectedNetworkId: m.gk.caipNetworkIdToNumber(
                t.selectedNetworkId
              ),
            })
          );
        }
        syncRequestedNetworks(e) {
          let t =
            null == e
              ? void 0
              : e.map((e) => {
                  var t, n;
                  return {
                    id: "".concat(m.bq.EIP155, ":").concat(e.id),
                    name: e.name,
                    imageId: m.CK.EIP155NetworkImageIds[e.id],
                    imageUrl:
                      null === (n = this.options) || void 0 === n
                        ? void 0
                        : null === (t = n.chainImages) || void 0 === t
                        ? void 0
                        : t[e.id],
                  };
                });
          this.setRequestedCaipNetworks(null != t ? t : []);
        }
        async syncAccount(e) {
          let { address: t, isConnected: n, chainId: i } = e;
          if ((this.resetAccount(), this.syncNetwork(), n && t && i)) {
            let e = "".concat(m.bq.EIP155, ":").concat(i, ":").concat(t);
            this.setIsConnected(n),
              this.setCaipAddress(e),
              await Promise.all([
                this.syncProfile(t, i),
                this.syncBalance(t, i),
                this.getApprovedCaipNetworksData(),
              ]),
              (this.hasSyncedConnectedAccount = !0);
          } else
            !n &&
              this.hasSyncedConnectedAccount &&
              (this.resetWcConnection(), this.resetNetwork());
        }
        async syncNetwork() {
          let {
              address: e,
              isConnected: t,
              chainId: n,
            } = (0, a.D)(this.wagmiConfig),
            i = this.wagmiConfig.chains.find((e) => e.id === n);
          if (i || n) {
            var r, o, s, c, l, d;
            let a =
                null !== (s = null == i ? void 0 : i.name) && void 0 !== s
                  ? s
                  : null == n
                  ? void 0
                  : n.toString(),
              u = Number(
                null !== (c = null == i ? void 0 : i.id) && void 0 !== c ? c : n
              ),
              f = "".concat(m.bq.EIP155, ":").concat(u);
            if (
              (this.setCaipNetwork({
                id: f,
                name: a,
                imageId: m.CK.EIP155NetworkImageIds[u],
                imageUrl:
                  null === (o = this.options) || void 0 === o
                    ? void 0
                    : null === (r = o.chainImages) || void 0 === r
                    ? void 0
                    : r[u],
              }),
              t && e && n)
            ) {
              let t = "".concat(m.bq.EIP155, ":").concat(u, ":").concat(e);
              if (
                (this.setCaipAddress(t),
                null == i
                  ? void 0
                  : null === (d = i.blockExplorers) || void 0 === d
                  ? void 0
                  : null === (l = d.default) || void 0 === l
                  ? void 0
                  : l.url)
              ) {
                let t = ""
                  .concat(i.blockExplorers.default.url, "/address/")
                  .concat(e);
                this.setAddressExplorerUrl(t);
              } else this.setAddressExplorerUrl(void 0);
              this.hasSyncedConnectedAccount &&
                (await this.syncProfile(e, n), await this.syncBalance(e, n));
            }
          }
        }
        async syncProfile(e, t) {
          if (t !== p.R.id) {
            this.setProfileName(null), this.setProfileImage(null);
            return;
          }
          try {
            let { name: n, avatar: i } = await this.fetchIdentity({
              caipChainId: "".concat(m.bq.EIP155, ":").concat(t),
              address: e,
            });
            this.setProfileName(n), this.setProfileImage(i);
          } catch (i) {
            let n = await (0, s.w)(this.wagmiConfig, {
              address: e,
              chainId: t,
            });
            if (n) {
              this.setProfileName(n);
              let e = await (0, c.r)(this.wagmiConfig, { name: n, chainId: t });
              e && this.setProfileImage(e);
            }
          }
        }
        async syncBalance(e, t) {
          let n = this.wagmiConfig.chains.find((e) => e.id === t);
          if (n) {
            var i, r, o;
            let t = await (0, l.s)(this.wagmiConfig, {
              address: e,
              chainId: n.id,
              token:
                null === (o = this.options) || void 0 === o
                  ? void 0
                  : null === (r = o.tokens) || void 0 === r
                  ? void 0
                  : null === (i = r[n.id]) || void 0 === i
                  ? void 0
                  : i.address,
            });
            this.setBalance(t.formatted, t.symbol);
            return;
          }
          this.setBalance(void 0, void 0);
        }
        syncConnectors(e) {
          let t = new Set(),
            n = e.filter((e) => !t.has(e.id) && t.add(e.id)),
            i = [],
            r = m.bq.COINBASE_SDK_CONNECTOR_ID,
            o = n.find((e) => e.id === N.bq.CONNECTOR_RDNS_MAP[r]);
          n.forEach((e) => {
            let { id: t, name: n, type: a, icon: s } = e;
            if (!((o && t === r) || m.bq.EMAIL_CONNECTOR_ID === t)) {
              var c, l, d, u, f;
              i.push({
                id: t,
                explorerId: m.CK.ConnectorExplorerIds[t],
                imageUrl:
                  null !==
                    (d =
                      null === (l = this.options) || void 0 === l
                        ? void 0
                        : null === (c = l.connectorImages) || void 0 === c
                        ? void 0
                        : c[t]) && void 0 !== d
                    ? d
                    : s,
                name:
                  null !== (u = m.CK.ConnectorNamesMap[t]) && void 0 !== u
                    ? u
                    : n,
                imageId: m.CK.ConnectorImageIds[t],
                type:
                  null !== (f = m.CK.ConnectorTypesMap[a]) && void 0 !== f
                    ? f
                    : "EXTERNAL",
              });
            }
          }),
            this.setConnectors(i),
            this.syncEmailConnector(n);
        }
        async syncEmailConnector(e) {
          let t = e.find((e) => {
            let { id: t } = e;
            return t === m.bq.EMAIL_CONNECTOR_ID;
          });
          if (t) {
            let e = await t.getProvider();
            this.addConnector({
              id: m.bq.EMAIL_CONNECTOR_ID,
              type: "EMAIL",
              name: "Email",
              provider: e,
            }),
              this.listenEmailConnector(t),
              this.listenModal(t);
          }
        }
        async listenEmailConnector(e) {
          if (e) {
            super.setLoading(!0);
            let t = await e.getProvider(),
              n = t.getLoginEmailUsed();
            super.setLoading(n),
              n && this.setIsConnected(!1),
              t.onRpcRequest((e) => {
                y.$D.checkIfRequestExists(e)
                  ? y.$D.checkIfRequestIsAllowed(e) ||
                    super.open({ view: "ApproveTransaction" })
                  : (super.open(),
                    setTimeout(() => {
                      this.showErrorMessage("This RPC method is not supported");
                    }, 300),
                    t.rejectRpcRequest());
              }),
              t.onRpcResponse(() => {
                super.close();
              }),
              t.onNotConnected(() => {
                this.setIsConnected(!1), super.setLoading(!1);
              }),
              t.onIsConnected(() => {
                this.setIsConnected(!0), super.setLoading(!1);
              });
          }
        }
        async listenModal(e) {
          let t = await e.getProvider();
          this.subscribeState((e) => {
            e.open || t.rejectRpcRequest();
          });
        }
        constructor(e) {
          let {
            wagmiConfig: t,
            siweConfig: n,
            defaultChain: i,
            tokens: r,
            _sdkVersion: o,
            ...a
          } = e;
          if (!t)
            throw Error("web3modal:constructor - wagmiConfig is undefined");
          if (!a.projectId)
            throw Error("web3modal:constructor - projectId is undefined");
          super({
            networkControllerClient: {
              switchCaipNetwork: async (e) => {
                let t = m.gk.caipNetworkIdToNumber(null == e ? void 0 : e.id);
                t && (await (0, d.c)(this.wagmiConfig, { chainId: t }));
              },
              getApprovedCaipNetworksData: async () =>
                new Promise((e) => {
                  var n, i;
                  let r = new Map(t.state.connections).get(
                    t.state.current || ""
                  );
                  if (
                    (null == r
                      ? void 0
                      : null === (n = r.connector) || void 0 === n
                      ? void 0
                      : n.id) === m.bq.EMAIL_CONNECTOR_ID
                  )
                    e((0, C.xv)());
                  else if (
                    (null == r
                      ? void 0
                      : null === (i = r.connector) || void 0 === i
                      ? void 0
                      : i.id) === m.bq.WALLET_CONNECT_CONNECTOR_ID
                  ) {
                    let n = t.connectors.find(
                      (e) => e.id === m.bq.WALLET_CONNECT_CONNECTOR_ID
                    );
                    e((0, C.Pl)(n));
                  }
                  e({
                    approvedCaipNetworkIds: void 0,
                    supportsAllNetworks: !0,
                  });
                }),
            },
            connectionControllerClient: {
              connectWalletConnect: async (e) => {
                var n;
                let i = t.connectors.find(
                  (e) => e.id === m.bq.WALLET_CONNECT_CONNECTOR_ID
                );
                if (!i)
                  throw Error(
                    "connectionControllerClient:getWalletConnectUri - connector is undefined"
                  );
                (await i.getProvider()).on("display_uri", (t) => {
                  e(t);
                });
                let r = m.gk.caipNetworkIdToNumber(
                  null === (n = this.getCaipNetwork()) || void 0 === n
                    ? void 0
                    : n.id
                );
                await (0, u.$)(this.wagmiConfig, { connector: i, chainId: r });
              },
              connectExternal: async (e) => {
                var n, i;
                let { id: r, provider: o, info: a } = e,
                  s = t.connectors.find((e) => e.id === r);
                if (!s)
                  throw Error(
                    "connectionControllerClient:connectExternal - connector is undefined"
                  );
                o &&
                  a &&
                  s.id === m.bq.EIP6963_CONNECTOR_ID &&
                  (null === (i = s.setEip6963Wallet) ||
                    void 0 === i ||
                    i.call(s, { provider: o, info: a }));
                let c = m.gk.caipNetworkIdToNumber(
                  null === (n = this.getCaipNetwork()) || void 0 === n
                    ? void 0
                    : n.id
                );
                await (0, u.$)(this.wagmiConfig, { connector: s, chainId: c });
              },
              checkInstalled: (e) => {
                let t = this.getConnectors().find((e) => "INJECTED" === e.type);
                if (!e) return !!window.ethereum;
                if (t) {
                  var n;
                  return (
                    null !== (n = window) &&
                    void 0 !== n &&
                    !!n.ethereum &&
                    e.some((e) => {
                      var t;
                      return !!(null === (t = window.ethereum) || void 0 === t
                        ? void 0
                        : t[String(e)]);
                    })
                  );
                }
                return !1;
              },
              disconnect: async () => {
                var e;
                await (0, f.z)(this.wagmiConfig),
                  (null == n
                    ? void 0
                    : null === (e = n.options) || void 0 === e
                    ? void 0
                    : e.signOutOnDisconnect) && (await n.signOut());
              },
              signMessage: async (e) =>
                (0, h.l)(this.wagmiConfig, { message: e }),
            },
            siweControllerClient: n,
            defaultChain: (0, C.I2)(i),
            tokens: m.gk.getCaipTokens(r),
            _sdkVersion: null != o ? o : "html-wagmi-".concat(m.bq.VERSION),
            ...a,
          }),
            (this.hasSyncedConnectedAccount = !1),
            (this.options = void 0),
            (this.options = e),
            (this.wagmiConfig = t),
            this.syncRequestedNetworks([...t.chains]),
            this.syncConnectors([...t.connectors]),
            (0, v.f)(this.wagmiConfig, {
              onChange: (e) => this.syncConnectors(e),
            }),
            (0, w.u)(this.wagmiConfig, {
              onChange: (e) => this.syncAccount({ ...e }),
            });
        }
      }
      function b(e) {
        return (
          !r &&
            (i = r =
              new I({
                ...e,
                _sdkVersion: "react-wagmi-".concat(m.bq.VERSION),
              })),
          r
        );
      }
    },
    49134: function (e, t, n) {
      n.d(t, {
        r: function () {
          return E;
        },
      });
      var i = n(96130),
        r = n(80230);
      class o extends r.G {
        constructor({ data: e }) {
          super(
            "Unable to extract image from metadata. The metadata may be malformed or invalid.",
            {
              metaMessages: [
                "- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.",
                "",
                "Provided data: ".concat(JSON.stringify(e)),
              ],
            }
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarInvalidMetadataError",
            });
        }
      }
      class a extends r.G {
        constructor({ reason: e }) {
          super("ENS NFT avatar URI is invalid. ".concat(e)),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarInvalidNftUriError",
            });
        }
      }
      class s extends r.G {
        constructor({ uri: e }) {
          super(
            'Unable to resolve ENS avatar URI "'.concat(
              e,
              '". The URI may be malformed, invalid, or does not respond with a valid image.'
            )
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarUriResolutionError",
            });
        }
      }
      class c extends r.G {
        constructor({ namespace: e }) {
          super(
            'ENS NFT avatar namespace "'.concat(
              e,
              '" is not supported. Must be "erc721" or "erc1155".'
            )
          ),
            Object.defineProperty(this, "name", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: "EnsAvatarUnsupportedNamespaceError",
            });
        }
      }
      let l = RegExp(
          "(?<protocol>https?:\\/\\/[^\\/]*|ipfs:\\/|ipns:\\/|ar:\\/)?(?<root>\\/)?(?<subpath>ipfs\\/|ipns\\/)?(?<target>[\\w\\-.]+)(?<subtarget>\\/.*)?"
        ),
        d = RegExp(
          "^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\\/(?<target>[\\w\\-.]+))?(?<subtarget>\\/.*)?$"
        ),
        u = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
        f = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
      async function h(e) {
        try {
          let t = await fetch(e, { method: "HEAD" });
          if (200 === t.status) {
            let e = t.headers.get("content-type");
            return null == e ? void 0 : e.startsWith("image/");
          }
          return !1;
        } catch (t) {
          if (
            ("object" == typeof t && void 0 !== t.response) ||
            !globalThis.hasOwnProperty("Image")
          )
            return !1;
          return new Promise((t) => {
            let n = new Image();
            (n.onload = () => {
              t(!0);
            }),
              (n.onerror = () => {
                t(!1);
              }),
              (n.src = e);
          });
        }
      }
      function v(e, t) {
        return e ? (e.endsWith("/") ? e.slice(0, -1) : e) : t;
      }
      function w(e) {
        let { uri: t, gatewayUrls: n } = e,
          i = u.test(t);
        if (i) return { uri: t, isOnChain: !0, isEncoded: i };
        let r = v(null == n ? void 0 : n.ipfs, "https://ipfs.io"),
          o = v(null == n ? void 0 : n.arweave, "https://arweave.net"),
          a = t.match(l),
          {
            protocol: c,
            subpath: h,
            target: w,
            subtarget: p = "",
          } = (null == a ? void 0 : a.groups) || {},
          g = "ipns:/" === c || "ipns/" === h,
          m = "ipfs:/" === c || "ipfs/" === h || d.test(t);
        if (t.startsWith("http") && !g && !m) {
          let e = t;
          return (
            (null == n ? void 0 : n.arweave) &&
              (e = t.replace(
                /https:\/\/arweave.net/g,
                null == n ? void 0 : n.arweave
              )),
            { uri: e, isOnChain: !1, isEncoded: !1 }
          );
        }
        if ((g || m) && w)
          return {
            uri: ""
              .concat(r, "/")
              .concat(g ? "ipns" : "ipfs", "/")
              .concat(w)
              .concat(p),
            isOnChain: !1,
            isEncoded: !1,
          };
        if ("ar:/" === c && w)
          return {
            uri: ""
              .concat(o, "/")
              .concat(w)
              .concat(p || ""),
            isOnChain: !1,
            isEncoded: !1,
          };
        let C = t.replace(f, "");
        if (
          (C.startsWith("<svg") &&
            (C = "data:image/svg+xml;base64,".concat(btoa(C))),
          C.startsWith("data:") || C.startsWith("{"))
        )
          return { uri: C, isOnChain: !0, isEncoded: !1 };
        throw new s({ uri: t });
      }
      function p(e) {
        if (
          "object" != typeof e ||
          (!("image" in e) && !("image_url" in e) && !("image_data" in e))
        )
          throw new o({ data: e });
        return e.image || e.image_url || e.image_data;
      }
      async function g(e) {
        let { gatewayUrls: t, uri: n } = e;
        try {
          let e = await fetch(n).then((e) => e.json());
          return await m({ gatewayUrls: t, uri: p(e) });
        } catch (e) {
          throw new s({ uri: n });
        }
      }
      async function m(e) {
        let { gatewayUrls: t, uri: n } = e,
          { uri: i, isOnChain: r } = w({ uri: n, gatewayUrls: t });
        if (r || (await h(i))) return i;
        throw new s({ uri: n });
      }
      async function C(e, t) {
        let { nft: n } = t;
        if ("erc721" === n.namespace)
          return (0, i.L)(e, {
            address: n.contractAddress,
            abi: [
              {
                name: "tokenURI",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "tokenId", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "tokenURI",
            args: [BigInt(n.tokenID)],
          });
        if ("erc1155" === n.namespace)
          return (0, i.L)(e, {
            address: n.contractAddress,
            abi: [
              {
                name: "uri",
                type: "function",
                stateMutability: "view",
                inputs: [{ name: "_id", type: "uint256" }],
                outputs: [{ name: "", type: "string" }],
              },
            ],
            functionName: "uri",
            args: [BigInt(n.tokenID)],
          });
        throw new c({ namespace: n.namespace });
      }
      async function y(e, t) {
        let { gatewayUrls: n, record: i } = t;
        return /eip155:/i.test(i)
          ? N(e, { gatewayUrls: n, record: i })
          : m({ uri: i, gatewayUrls: n });
      }
      async function N(e, t) {
        let { gatewayUrls: n, record: i } = t,
          r = (function (e) {
            let t = e;
            t.startsWith("did:nft:") &&
              (t = t.replace("did:nft:", "").replace(/_/g, "/"));
            let [n, i, r] = t.split("/"),
              [o, s] = n.split(":"),
              [c, l] = i.split(":");
            if (!o || "eip155" !== o.toLowerCase())
              throw new a({ reason: "Only EIP-155 supported" });
            if (!s) throw new a({ reason: "Chain ID not found" });
            if (!l) throw new a({ reason: "Contract address not found" });
            if (!r) throw new a({ reason: "Token ID not found" });
            if (!c) throw new a({ reason: "ERC namespace not found" });
            return {
              chainID: parseInt(s),
              namespace: c.toLowerCase(),
              contractAddress: l,
              tokenID: r,
            };
          })(i),
          {
            uri: o,
            isOnChain: s,
            isEncoded: c,
          } = w({ uri: await C(e, { nft: r }), gatewayUrls: n });
        if (
          s &&
          (o.includes("data:application/json;base64,") || o.startsWith("{"))
        )
          return m({
            uri: p(
              JSON.parse(
                c ? atob(o.replace("data:application/json;base64,", "")) : o
              )
            ),
            gatewayUrls: n,
          });
        let l = r.tokenID;
        return (
          "erc1155" === r.namespace &&
            (l = l.replace("0x", "").padStart(64, "0")),
          g({ gatewayUrls: n, uri: o.replace(/(?:0x)?{id}/, l) })
        );
      }
      var I = n(31935),
        b = n(84825);
      async function E(e, t) {
        let {
            blockNumber: n,
            blockTag: i,
            assetGatewayUrls: r,
            name: o,
            gatewayUrls: a,
            strict: s,
            universalResolverAddress: c,
          } = t,
          l = await (0, I.s)(
            e,
            b.g,
            "getEnsText"
          )({
            blockNumber: n,
            blockTag: i,
            key: "avatar",
            name: o,
            universalResolverAddress: c,
            gatewayUrls: a,
            strict: s,
          });
        if (!l) return null;
        try {
          return await y(e, { record: l, gatewayUrls: r });
        } catch (e) {
          return null;
        }
      }
    },
    9577: function (e, t, n) {
      n.d(t, {
        w: function () {
          return d;
        },
      });
      var i = n(10035),
        r = n(73621),
        o = n(15578),
        a = n(96316),
        s = n(24761),
        c = n(31935),
        l = n(96130);
      async function d(e, t) {
        let {
            address: n,
            blockNumber: d,
            blockTag: u,
            gatewayUrls: f,
            strict: h,
            universalResolverAddress: v,
          } = t,
          w = v;
        if (!w) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          w = (0, r.L)({
            blockNumber: d,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        let p = "".concat(n.toLowerCase().substring(2), ".addr.reverse");
        try {
          let t = {
              address: w,
              abi: i.du,
              functionName: "reverse",
              args: [(0, o.NC)((0, s.T)(p))],
              blockNumber: d,
              blockTag: u,
            },
            r = (0, c.s)(e, l.L, "readContract"),
            [a, h] = f ? await r({ ...t, args: [...t.args, f] }) : await r(t);
          if (n.toLowerCase() !== h.toLowerCase()) return null;
          return a;
        } catch (e) {
          if (h) throw e;
          if ((0, a.c)(e, "reverse")) return null;
          throw e;
        }
      }
    },
    84825: function (e, t, n) {
      n.d(t, {
        g: function () {
          return h;
        },
      });
      var i = n(10035),
        r = n(27470),
        o = n(3551),
        a = n(73621),
        s = n(15578),
        c = n(96316),
        l = n(8291),
        d = n(24761),
        u = n(31935),
        f = n(96130);
      async function h(e, t) {
        let {
            blockNumber: n,
            blockTag: h,
            name: v,
            key: w,
            gatewayUrls: p,
            strict: g,
            universalResolverAddress: m,
          } = t,
          C = m;
        if (!C) {
          if (!e.chain)
            throw Error(
              "client chain not configured. universalResolverAddress is required."
            );
          C = (0, a.L)({
            blockNumber: n,
            chain: e.chain,
            contract: "ensUniversalResolver",
          });
        }
        try {
          let t = {
              address: C,
              abi: i.k3,
              functionName: "resolve",
              args: [
                (0, s.NC)((0, d.T)(v)),
                (0, o.R)({
                  abi: i.nZ,
                  functionName: "text",
                  args: [(0, l.V)(v), w],
                }),
              ],
              blockNumber: n,
              blockTag: h,
            },
            a = (0, u.s)(e, f.L, "readContract"),
            c = p ? await a({ ...t, args: [...t.args, p] }) : await a(t);
          if ("0x" === c[0]) return null;
          let g = (0, r.k)({ abi: i.nZ, functionName: "text", data: c[0] });
          return "" === g ? null : g;
        } catch (e) {
          if (g) throw e;
          if ((0, c.c)(e, "resolve")) return null;
          throw e;
        }
      }
    },
    37542: function (e, t, n) {
      n.d(t, {
        l: function () {
          return a;
        },
      });
      var i = n(79561),
        r = n(90444),
        o = n(15578);
      async function a(e, t) {
        let { account: n = e.account, message: a } = t;
        if (!n) throw new r.o({ docsPath: "/docs/actions/wallet/signMessage" });
        let s = (0, i.T)(n);
        if ("local" === s.type) return s.signMessage({ message: a });
        let c =
          "string" == typeof a
            ? (0, o.$G)(a)
            : a.raw instanceof Uint8Array
            ? (0, o.NC)(a.raw)
            : a.raw;
        return e.request(
          { method: "personal_sign", params: [c, s.address] },
          { retryCount: 0 }
        );
      }
    },
    72364: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      var i = n(21230);
      function r(e) {
        if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]"))
          return null;
        let t = "0x".concat(e.slice(1, 65));
        return (0, i.v)(t) ? t : null;
      }
    },
    96316: function (e, t, n) {
      n.d(t, {
        c: function () {
          return a;
        },
      });
      var i = n(26390),
        r = n(80230),
        o = n(47115);
      function a(e, t) {
        var n, a, s, c, l, d;
        if (!(e instanceof r.G)) return !1;
        let u = e.walk((e) => e instanceof o.Lu);
        return (
          u instanceof o.Lu &&
          (!!(
            (null === (n = u.data) || void 0 === n ? void 0 : n.errorName) ===
              "ResolverNotFound" ||
            (null === (a = u.data) || void 0 === a ? void 0 : a.errorName) ===
              "ResolverWildcardNotSupported" ||
            (null === (s = u.data) || void 0 === s ? void 0 : s.errorName) ===
              "ResolverNotContract" ||
            (null === (c = u.data) || void 0 === c ? void 0 : c.errorName) ===
              "ResolverError" ||
            (null === (l = u.data) || void 0 === l ? void 0 : l.errorName) ===
              "HttpError" ||
            (null === (d = u.reason) || void 0 === d
              ? void 0
              : d.includes(
                  "Wildcard on non-extended resolvers is not supported"
                ))
          ) ||
            ("reverse" === t && u.reason === i.$[50]))
        );
      }
    },
    8291: function (e, t, n) {
      n.d(t, {
        V: function () {
          return c;
        },
      });
      var i = n(3556),
        r = n(73596),
        o = n(15578),
        a = n(30206),
        s = n(72364);
      function c(e) {
        let t = new Uint8Array(32).fill(0);
        if (!e) return (0, o.ci)(t);
        let n = e.split(".");
        for (let e = n.length - 1; e >= 0; e -= 1) {
          let o = (0, s.i)(n[e]),
            c = o ? (0, r.O0)(o) : (0, a.w)((0, r.qX)(n[e]), "bytes");
          t = (0, a.w)((0, i.zo)([t, c]), "bytes");
        }
        return (0, o.ci)(t);
      }
    },
    24761: function (e, t, n) {
      n.d(t, {
        T: function () {
          return s;
        },
      });
      var i = n(73596),
        r = n(15578),
        o = n(30206),
        a = n(72364);
      function s(e) {
        let t = e.replace(/^\.|\.$/gm, "");
        if (0 === t.length) return new Uint8Array(1);
        let n = new Uint8Array((0, i.qX)(t).byteLength + 2),
          s = 0,
          c = t.split(".");
        for (let e = 0; e < c.length; e++) {
          let t = (0, i.qX)(c[e]);
          if (t.byteLength > 255) {
            var l;
            t = (0, i.qX)(
              ((l = (function (e) {
                let t = new Uint8Array(32).fill(0);
                return e ? (0, a.i)(e) || (0, o.w)((0, i.qX)(e)) : (0, r.ci)(t);
              })(c[e])),
              "[".concat(l.slice(2), "]"))
            );
          }
          (n[s] = t.length), n.set(t, s + 1), (s += t.length + 1);
        }
        return n.byteLength !== s + 1 ? n.slice(0, s + 1) : n;
      }
    },
  },
]);
