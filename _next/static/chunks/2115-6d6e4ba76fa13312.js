"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2115],
  {
    81674: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(30982);
      function i(e) {
        let { currency: t, children: n } = e,
          i = (0, a.useFormatter)();
        return n
          ? i.number(parseFloat(n.toString()), {
              style: "currency",
              currency: "USD",
            })
          : null;
      }
    },
    32543: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var a = n(3827);
      function i(e) {
        let {
          onClick: t,
          children: n,
          title: i,
          className: s = "",
          description: r = "",
        } = e;
        return (0, a.jsx)("div", {
          className: "h-full grow ".concat(s, " rounded-lg p-px"),
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
              (0, a.jsx)("div", { className: "p-3 text-2xl", children: n }),
            ],
          }),
        });
      }
    },
    78065: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(43089),
        i = n(14980);
      function s(e) {
        var t, n;
        let s = (0, a.useChainId)();
        return e
          ? null !== (t = i.mb[e]) && void 0 !== t
            ? t
            : i.mb[1]
          : null !== (n = i.mb[s]) && void 0 !== n
          ? n
          : i.mb[1];
      }
    },
    22530: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var a = n(64090),
        i = n(43089),
        s = n(39296),
        r = n(78065);
      function u() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t = (0, i.useChainId)();
        e && (t = e);
        let n = (0, r.Z)(t),
          { address: u } = (0, s.useAccount)(),
          [p, d] = (0, a.useState)(void 0);
        return (
          (0, a.useEffect)(() => {
            fetch("".concat(n, "/tbank_staking/overview"))
              .then((e) => e.json())
              .then((e) => d(e));
          }, [n, u, t]),
          { cashBackPoolOverview: p, isLoading: !p }
        );
      }
    },
    34508: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(64090),
        i = n(78065);
      function s() {
        let e = (0, i.Z)(),
          [t, n] = (0, a.useState)(void 0),
          [s, r] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            fetch("".concat(e, "/prices"))
              .then((e) => e.json())
              .then((e) => {
                e && (console.log("prices", e), r(!1), n(e));
              });
          }, [e]),
          { prices: t, isLoading: s }
        );
      }
    },
    37046: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(64090),
        i = n(78065);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : void 0,
          t = (0, i.Z)(e),
          [n, s] = (0, a.useState)(void 0),
          [r, u] = (0, a.useState)(!0);
        return (
          (0, a.useEffect)(() => {
            fetch("".concat(t, "/protocolStats"))
              .then((e) => e.json())
              .then((e) => {
                e.data &&
                  (console.log(e.data[0].data), u(!1), s(e.data[0].data));
              });
          }, [t]),
          { statistics: n, isLoading: r }
        );
      }
    },
    66114: function (e, t, n) {
      n.d(t, {
        s: function () {
          return i;
        },
      });
      var a = n(73667);
      let i = () => {
        let {
          data: e,
          error: t,
          isLoading: n,
        } = (0, a.a)({
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
        if (!n) return t && console.error("Error fetching ALTARRAPrice:", t), e;
      };
    },
    17532: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
      });
      var a = n(73667);
      let i = () => {
        let {
          data: e,
          error: t,
          isLoading: n,
        } = (0, a.a)({
          queryKey: ["AltarraPrice"],
          queryFn: async () => {
            let e = await fetch(
              "https://api.dexscreener.com/latest/dex/pairs/ethereum/0x0f88a9D642FA9283338e1eC4496E7dC72714831a"
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
        if (!n) return t && console.error("Error fetching ALTARRAPrice:", t), e;
      };
    },
    69908: function (e, t, n) {
      n.r(t),
        n.d(t, {
          useReadContract: function () {
            return p;
          },
        });
      var a = n(31723),
        i = n(73054),
        s = n(38760),
        r = n(43089),
        u = n(42887);
      function p() {
        var e, t, n;
        let p =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { abi: d, address: y, functionName: o, query: l = {} } = p,
          m = (0, u.useConfig)(p),
          c = (0, r.useChainId)(),
          T = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return {
              async queryFn(n) {
                let { queryKey: i } = n,
                  s = t.abi;
                if (!s) throw Error("abi is required");
                let { address: r, functionName: u, scopeKey: p, ...d } = i[1];
                if (!r) throw Error("address is required");
                if (!u) throw Error("functionName is required");
                let y = d.args;
                return (0, a.L)(e, {
                  abi: s,
                  address: r,
                  functionName: u,
                  args: y,
                  ...d,
                });
              },
              queryKey: (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { abi: t, ...n } = e;
                return ["readContract", (0, i.O)(n)];
              })(t),
            };
          })(m, {
            ...p,
            chainId: null !== (e = p.chainId) && void 0 !== e ? e : c,
          }),
          f = !!(
            y &&
            d &&
            o &&
            (null === (t = l.enabled) || void 0 === t || t)
          );
        return (0, s.aM)({
          ...l,
          ...T,
          enabled: f,
          structuralSharing:
            null !== (n = l.structuralSharing) && void 0 !== n ? n : s.if,
        });
      }
    },
    72911: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldDepositFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newDepositFee","type":"uint256"}],"name":"DepositFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldFeeRecipient","type":"address"},{"indexed":false,"internalType":"address","name":"newFeeRecipient","type":"address"}],"name":"FeeRecipientUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"strategist","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Recovered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"rewardsToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"RewardsDurationUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldStrategist","type":"address"},{"indexed":false,"internalType":"address","name":"newStrategist","type":"address"}],"name":"StrategistUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldWithdrawFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newWithdrawFee","type":"uint256"}],"name":"WithdrawFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"withdrawRequestId","type":"uint256"},{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawRequestCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"withdrawRequestId","type":"uint256"},{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WithdrawRequestProcessed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"MAX_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_rewardsDistributor","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableToInvestTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"availableToWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"availableToWithdrawTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipient","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllStakersLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"getRewardForDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getStakerWithdrawRequestAt","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"internalType":"struct StakingQueue.WithdrawRequest","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getStakerWithdrawRequests","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"internalType":"struct StakingQueue.WithdrawRequest[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getStakerWithdrawRequestsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getWithdrawQueueAt","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"internalType":"struct StakingQueue.WithdrawRequest","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWithdrawQueueLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"investedTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"lastTimeRewardApplicable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_requestId","type":"uint256"}],"name":"processWithdrawRequest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_requestIds","type":"uint256[]"}],"name":"processWithdrawRequests","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"requestWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"requestWithdrawTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardData","outputs":[{"internalType":"address","name":"rewardsDistributor","type":"address"},{"internalType":"uint256","name":"rewardsDuration","type":"uint256"},{"internalType":"uint256","name":"periodFinish","type":"uint256"},{"internalType":"uint256","name":"rewardRate","type":"uint256"},{"internalType":"uint256","name":"lastUpdateTime","type":"uint256"},{"internalType":"uint256","name":"rewardPerTokenStored","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"}],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rewardTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeRecipient","type":"address"}],"name":"setFeeRecipient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"address","name":"_rewardsDistributor","type":"address"}],"name":"setRewardsDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardsToken","type":"address"},{"internalType":"uint256","name":"_rewardsDuration","type":"uint256"}],"name":"setRewardsDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_strategist","type":"address"}],"name":"setStrategist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"strategist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"userRewardPerTokenPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawQueue","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"address","name":"staker","type":"address"},{"internalType":"bool","name":"processed","type":"bool"},{"internalType":"uint256","name":"processedAt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"withdrawRequestsIdsByStaker","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
      );
    },
  },
]);
