(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8894],
  {
    82425: function (n, e, t) {
      Promise.resolve().then(t.bind(t, 87641));
    },
    47907: function (n, e, t) {
      "use strict";
      t.r(e);
      var u = t(15313),
        r = {};
      for (var i in u)
        "default" !== i &&
          (r[i] = function (n) {
            return u[n];
          }.bind(0, i));
      t.d(e, r);
    },
    87641: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return i;
          },
        });
      var u = t(64090),
        r = t(47907);
      function i() {
        let n = (0, r.useRouter)();
        return (
          (0, u.useEffect)(() => {
            n.replace("/statistics/ethereum");
          }, [n]),
          null
        );
      }
    },
  },
  function (n) {
    n.O(0, [2971, 8069, 1744], function () {
      return n((n.s = 82425));
    }),
      (_N_E = n.O());
  },
]);
