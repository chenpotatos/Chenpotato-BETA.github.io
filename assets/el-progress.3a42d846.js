import {
    O as e,
    c as t,
    ae as a,
    aa as s,
    o as r,
    b as n,
    i as o,
    e as l,
    h as i,
    n as u,
    U as c,
    x as p,
    j as d,
    t as f,
    J as h,
    D as y
} from "./el-select.e274bb48.js";
import {
    b as g,
    d as v,
    E as m,
    _ as k,
    w as x
} from "./index.176a125e.js";
import {
    w as b,
    f as $,
    e as w,
    y as N,
    d as D
} from "./index.4e5ff846.js";
import {
    u as I
} from "./index.0e1148e8.js";
const j = g({
        type: {
            type: String,
            default: "line",
            values: ["line", "circle", "dashboard"]
        },
        percentage: {
            type: Number,
            default: 0,
            validator: e => e >= 0 && e <= 100
        },
        status: {
            type: String,
            default: "",
            values: ["", "success", "exception", "warning"]
        },
        indeterminate: {
            type: Boolean,
            default: !1
        },
        duration: {
            type: Number,
            default: 3
        },
        strokeWidth: {
            type: Number,
            default: 6
        },
        strokeLinecap: {
            type: v(String),
            default: "round"
        },
        textInside: {
            type: Boolean,
            default: !1
        },
        width: {
            type: Number,
            default: 126
        },
        showText: {
            type: Boolean,
            default: !0
        },
        color: {
            type: v([String, Array, Function]),
            default: ""
        },
        format: {
            type: v(Function),
            default: e => `${e}%`
        }
    }),
    S = ["aria-valuenow"],
    T = {
        viewBox: "0 0 100 100"
    },
    B = ["d", "stroke", "stroke-width"],
    F = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"],
    W = {
        key: 0
    },
    _ = e({
        name: "ElProgress"
    });
const E = x(k(e({ ..._,
    props: j,
    setup(e) {
        const g = e,
            v = {
                success: "#13ce66",
                exception: "#ff4949",
                warning: "#e6a23c",
                default: "#20a0ff"
            },
            k = I("progress"),
            x = t((() => ({
                width: `${g.percentage}%`,
                animationDuration: `${g.duration}s`,
                backgroundColor: V(g.percentage)
            }))),
            j = t((() => (g.strokeWidth / g.width * 100).toFixed(1))),
            _ = t((() => ["circle", "dashboard"].includes(g.type) ? Number.parseInt("" + (50 - Number.parseFloat(j.value) / 2), 10) : 0)),
            E = t((() => {
                const e = _.value,
                    t = "dashboard" === g.type;
                return `\n          M 50 50\n          m 0 ${t?"":"-"}${e}\n          a ${e} ${e} 0 1 1 0 ${t?"-":""}${2*e}\n          a ${e} ${e} 0 1 1 0 ${t?"":"-"}${2*e}\n          `
            })),
            L = t((() => 2 * Math.PI * _.value)),
            M = t((() => "dashboard" === g.type ? .75 : 1)),
            P = t((() => `${-1*L.value*(1-M.value)/2}px`)),
            z = t((() => ({
                strokeDasharray: `${L.value*M.value}px, ${L.value}px`,
                strokeDashoffset: P.value
            }))),
            A = t((() => ({
                strokeDasharray: `${L.value*M.value*(g.percentage/100)}px, ${L.value}px`,
                strokeDashoffset: P.value,
                transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
            }))),
            C = t((() => {
                let e;
                return e = g.color ? V(g.percentage) : v[g.status] || v.default, e
            })),
            J = t((() => "warning" === g.status ? b : "line" === g.type ? "success" === g.status ? $ : w : "success" === g.status ? N : D)),
            O = t((() => "line" === g.type ? 12 + .4 * g.strokeWidth : .111111 * g.width + 2)),
            U = t((() => g.format(g.percentage)));
        const V = e => {
            var t;
            const {
                color: r
            } = g;
            if (a(r)) return r(e);
            if (s(r)) return r; {
                const a = function(e) {
                    const t = 100 / e.length;
                    return e.map(((e, a) => s(e) ? {
                        color: e,
                        percentage: (a + 1) * t
                    } : e)).sort(((e, t) => e.percentage - t.percentage))
                }(r);
                for (const t of a)
                    if (t.percentage > e) return t.color;
                return null == (t = a[a.length - 1]) ? void 0 : t.color
            }
        };
        return (e, t) => (r(), n("div", {
            class: o([l(k).b(), l(k).m(e.type), l(k).is(e.status), {
                [l(k).m("without-text")]: !e.showText,
                [l(k).m("text-inside")]: e.textInside
            }]),
            role: "progressbar",
            "aria-valuenow": e.percentage,
            "aria-valuemin": "0",
            "aria-valuemax": "100"
        }, ["line" === e.type ? (r(), n("div", {
            key: 0,
            class: o(l(k).b("bar"))
        }, [i("div", {
            class: o(l(k).be("bar", "outer")),
            style: u({
                height: `${e.strokeWidth}px`
            })
        }, [i("div", {
            class: o([l(k).be("bar", "inner"), {
                [l(k).bem("bar", "inner", "indeterminate")]: e.indeterminate
            }]),
            style: u(l(x))
        }, [(e.showText || e.$slots.default) && e.textInside ? (r(), n("div", {
            key: 0,
            class: o(l(k).be("bar", "innerText"))
        }, [c(e.$slots, "default", {
            percentage: e.percentage
        }, (() => [i("span", null, p(l(U)), 1)]))], 2)) : d("v-if", !0)], 6)], 6)], 2)) : (r(), n("div", {
            key: 1,
            class: o(l(k).b("circle")),
            style: u({
                height: `${e.width}px`,
                width: `${e.width}px`
            })
        }, [(r(), n("svg", T, [i("path", {
            class: o(l(k).be("circle", "track")),
            d: l(E),
            stroke: `var(${l(k).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-width": l(j),
            fill: "none",
            style: u(l(z))
        }, null, 14, B), i("path", {
            class: o(l(k).be("circle", "path")),
            d: l(E),
            stroke: l(C),
            fill: "none",
            opacity: e.percentage ? 1 : 0,
            "stroke-linecap": e.strokeLinecap,
            "stroke-width": l(j),
            style: u(l(A))
        }, null, 14, F)]))], 6)), !e.showText && !e.$slots.default || e.textInside ? d("v-if", !0) : (r(), n("div", {
            key: 2,
            class: o(l(k).e("text")),
            style: u({
                fontSize: `${l(O)}px`
            })
        }, [c(e.$slots, "default", {
            percentage: e.percentage
        }, (() => [e.status ? (r(), f(l(m), {
            key: 1
        }, {
            default: h((() => [(r(), f(y(l(J))))])),
            _: 1
        })) : (r(), n("span", W, p(l(U)), 1))]))], 6))], 10, S))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]
]));
export {
    E
};