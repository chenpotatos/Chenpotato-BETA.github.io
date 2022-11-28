import {
    O as a,
    o as e,
    t as s,
    k as o,
    V as n,
    a as l,
    W as t,
    J as i,
    m as c,
    h as r,
    b as d,
    x as m,
    j as u,
    s as p,
    ak as f,
    aC as g,
    N as v
} from "./el-select.e274bb48.js"; /* empty css                */
import {
    E as h
} from "./index.176a125e.js";
import b from "./Close.c9346f3b.js";
var z = a({
    name: "Loading"
});
const L = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    _ = o("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
    }, null, -1);
z.render = function(a, o, n, l, t, i) {
    return e(), s("svg", L, [_])
}, z.__file = "packages/components/Loading.vue";
const w = z,
    j = a({
        name: "",
        props: {
            msg: String,
            show: Boolean,
            icon: ""
        },
        components: {
            ElIcon: h,
            Loading: w,
            Check: n,
            Close: b
        },
        setup(a, e) {}
    }),
    k = {
        class: "d-toast d-flex-y"
    },
    x = {
        key: 0,
        class: "mr5"
    };
const y = l(j, [
        ["render", function(a, n, l, g, v, h) {
            const b = t("loading"),
                z = t("check"),
                L = t("close"),
                _ = t("el-icon");
            return e(), s(f, {
                name: "el-fade-in-linear",
                persisted: ""
            }, {
                default: i((() => [c(r("div", k, [a.msg ? (e(), d("span", x, m(a.msg), 1)) : u("v-if", !0), o(_, {
                    size: 16
                }, {
                    default: i((() => [c(o(b, {
                        class: "rotating"
                    }, null, 512), [
                        [p, "loading" == a.icon]
                    ]), c(o(z, null, null, 512), [
                        [p, "check" == a.icon]
                    ]), c(o(L, null, null, 512), [
                        [p, "close" == a.icon]
                    ])])),
                    _: 1
                })], 512), [
                    [p, a.show]
                ])])),
                _: 1
            })
        }],
        ["__file", "D:/gitee/new-tab/src/components/d-toast.vue"]
    ]),
    C = document.createElement("div"),
    M = (a, e) => {
        if ("boolean" == typeof a && !a) return void setTimeout((() => {
            g(null, C)
        }), 300);
        document.body.append(C);
        const s = v(y, {
            msg: a,
            icon: e,
            show: !0
        });
        g(s, C), (a.includes("成功") || a.includes("失败")) && setTimeout((() => {
            g(null, C)
        }), 2e3)
    },
    T = {
        install(a) {}
    },
    E = Object.freeze(Object.defineProperty({
        __proto__: null,
        dToast: M,
        default: T
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    w as L, M as d, E as i
};