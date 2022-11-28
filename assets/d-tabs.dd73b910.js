import {
    a as e,
    g as t,
    Q as a,
    w as s,
    S as l,
    o as i,
    b as d,
    K as c,
    L as o,
    i as r,
    U as u,
    h as p,
    x as n,
    A as m,
    B as b
} from "./el-select.e274bb48.js";
const y = (e => (m("data-v-527cc21e"), e = e(), b(), e))((() => p("span", {
        class: "d-tabs-active"
    }, null, -1))),
    f = ["onClick"],
    v = {
        style: {
            "line-height": "20px"
        }
    },
    k = e({
        __name: "d-tabs",
        props: {
            modelValue: {
                required: !0
            },
            data: {
                required: !0,
                type: [Array, Object],
                default: () => []
            },
            keyId: {
                type: String,
                default: "id"
            }
        },
        emits: ["update:modelValue", "tab-click"],
        setup(e, {
            emit: m
        }) {
            const b = e,
                k = t(null);
            a((() => {
                k.value.querySelector(".d-tabs-item.active")
            })), s((() => b.modelValue), (e => {
                l((() => {
                    const e = k.value.querySelector(".d-tabs-item.active") || {
                            offsetTop: 0,
                            clientHeight: 0
                        },
                        {
                            offsetTop: t,
                            clientHeight: a
                        } = e;
                    k.value.style.setProperty("--target-top", t + "px"), k.value.style.setProperty("--height", (a || 0) + "px")
                }))
            }), {
                immediate: !0
            });
            return (t, a) => (i(), d("ul", {
                class: "d-tabs",
                ref_key: "dTabsRef",
                ref: k
            }, [y, (i(!0), d(c, null, o(b.data, ((a, s) => (i(), d("li", {
                class: r(["d-tabs-item", {
                    active: e.modelValue === a[e.keyId]
                }]),
                key: s,
                onClick: e => ((e, t) => {
                    m("update:modelValue", e[b.keyId]), m("tab-click", e, t)
                })(a, s)
            }, [u(t.$slots, "default", {
                row: a,
                index: s
            }, (() => [p("p", v, n(a.name), 1)]), !0)], 10, f)))), 128))], 512))
        }
    }, [
        ["__scopeId", "data-v-527cc21e"],
        ["__file", "D:/gitee/new-tab/src/components/d-tabs.vue"]
    ]);
export {
    k as D
};