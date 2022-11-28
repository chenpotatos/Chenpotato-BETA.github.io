import {
    aa as e,
    ap as a,
    ab as l,
    g as o,
    a5 as s,
    c as r,
    O as d,
    o as n,
    b as i,
    h as t,
    m as u,
    aZ as m,
    e as p,
    a6 as b,
    i as c,
    U as f,
    C as v,
    x as g,
    q as y,
    S as h,
    n as k,
    Q as x,
    ac as S,
    z as B,
    ad as R,
    w as V
} from "./el-select.e274bb48.js";
import {
    b as _,
    _ as j,
    w,
    a as C
} from "./index.176a125e.js";
import {
    b as E,
    u as G,
    d as z
} from "./index.8720847e.js";
import {
    U as I,
    C as U
} from "./focus-trap.e600e472.js";
import {
    u as $
} from "./index.0e1148e8.js";
import {
    u as F
} from "./index.ca3d31b2.js";
import {
    u as K,
    a as N
} from "./index.d235e992.js";
import {
    d as q
} from "./style.d69d81d7.js";
const A = Symbol("radioGroupKey"),
    L = _({
        size: E,
        disabled: Boolean,
        label: {
            type: [String, Number, Boolean],
            default: ""
        }
    }),
    O = _({ ...L,
        modelValue: {
            type: [String, Number, Boolean],
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        border: Boolean
    }),
    Q = {
        [I]: o => e(o) || a(o) || l(o),
        [U]: o => e(o) || a(o) || l(o)
    },
    Z = (e, a) => {
        const l = o(),
            d = s(A, void 0),
            n = r((() => !!d)),
            i = r({
                get: () => n.value ? d.modelValue : e.modelValue,
                set(o) {
                    n.value ? d.changeEvent(o) : a && a(I, o), l.value.checked = e.modelValue === e.label
                }
            }),
            t = G(r((() => null == d ? void 0 : d.size))),
            u = z(r((() => null == d ? void 0 : d.disabled))),
            m = o(!1),
            p = r((() => u.value || n.value && i.value !== e.label ? -1 : 0));
        return {
            radioRef: l,
            isGroup: n,
            radioGroup: d,
            focus: m,
            size: t,
            disabled: u,
            tabIndex: p,
            modelValue: i
        }
    },
    D = ["value", "name", "disabled"],
    H = d({
        name: "ElRadio"
    });
var J = j(d({ ...H,
    props: O,
    emits: Q,
    setup(e, {
        emit: a
    }) {
        const l = e,
            o = $("radio"),
            {
                radioRef: s,
                radioGroup: r,
                focus: d,
                size: k,
                disabled: x,
                modelValue: S
            } = Z(l, a);

        function B() {
            h((() => a("change", S.value)))
        }
        return (e, a) => {
            var l;
            return n(), i("label", {
                class: c([p(o).b(), p(o).is("disabled", p(x)), p(o).is("focus", p(d)), p(o).is("bordered", e.border), p(o).is("checked", p(S) === e.label), p(o).m(p(k))])
            }, [t("span", {
                class: c([p(o).e("input"), p(o).is("disabled", p(x)), p(o).is("checked", p(S) === e.label)])
            }, [u(t("input", {
                ref_key: "radioRef",
                ref: s,
                "onUpdate:modelValue": a[0] || (a[0] = e => b(S) ? S.value = e : null),
                class: c(p(o).e("original")),
                value: e.label,
                name: e.name || (null == (l = p(r)) ? void 0 : l.name),
                disabled: p(x),
                type: "radio",
                onFocus: a[1] || (a[1] = e => d.value = !0),
                onBlur: a[2] || (a[2] = e => d.value = !1),
                onChange: B
            }, null, 42, D), [
                [m, p(S)]
            ]), t("span", {
                class: c(p(o).e("inner"))
            }, null, 2)], 2), t("span", {
                class: c(p(o).e("label")),
                onKeydown: a[3] || (a[3] = y((() => {}), ["stop"]))
            }, [f(e.$slots, "default", {}, (() => [v(g(e.label), 1)]))], 34)], 2)
        }
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]
]);
const M = _({ ...L,
        name: {
            type: String,
            default: ""
        }
    }),
    P = ["value", "name", "disabled"],
    T = d({
        name: "ElRadioButton"
    });
var W = j(d({ ...T,
    props: M,
    setup(e) {
        const a = e,
            l = $("radio"),
            {
                radioRef: o,
                focus: s,
                size: d,
                disabled: h,
                modelValue: x,
                radioGroup: S
            } = Z(a),
            B = r((() => ({
                backgroundColor: (null == S ? void 0 : S.fill) || "",
                borderColor: (null == S ? void 0 : S.fill) || "",
                boxShadow: (null == S ? void 0 : S.fill) ? `-1px 0 0 0 ${S.fill}` : "",
                color: (null == S ? void 0 : S.textColor) || ""
            })));
        return (e, a) => {
            var r;
            return n(), i("label", {
                class: c([p(l).b("button"), p(l).is("active", p(x) === e.label), p(l).is("disabled", p(h)), p(l).is("focus", p(s)), p(l).bm("button", p(d))])
            }, [u(t("input", {
                ref_key: "radioRef",
                ref: o,
                "onUpdate:modelValue": a[0] || (a[0] = e => b(x) ? x.value = e : null),
                class: c(p(l).be("button", "original-radio")),
                value: e.label,
                type: "radio",
                name: e.name || (null == (r = p(S)) ? void 0 : r.name),
                disabled: p(h),
                onFocus: a[1] || (a[1] = e => s.value = !0),
                onBlur: a[2] || (a[2] = e => s.value = !1)
            }, null, 42, P), [
                [m, p(x)]
            ]), t("span", {
                class: c(p(l).be("button", "inner")),
                style: k(p(x) === e.label ? p(B) : {}),
                onKeydown: a[3] || (a[3] = y((() => {}), ["stop"]))
            }, [f(e.$slots, "default", {}, (() => [v(g(e.label), 1)]))], 38)], 2)
        }
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]
]);
const X = _({
        id: {
            type: String,
            default: void 0
        },
        size: E,
        disabled: Boolean,
        modelValue: {
            type: [String, Number, Boolean],
            default: ""
        },
        fill: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: void 0
        },
        textColor: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: void 0
        },
        validateEvent: {
            type: Boolean,
            default: !0
        }
    }),
    Y = Q,
    ee = ["id", "aria-label", "aria-labelledby"],
    ae = d({
        name: "ElRadioGroup"
    });
var le = j(d({ ...ae,
    props: X,
    emits: Y,
    setup(e, {
        emit: a
    }) {
        const l = e,
            s = $("radio"),
            d = F(),
            t = o(),
            {
                formItem: u
            } = K(),
            {
                inputId: m,
                isLabeledByFormItem: b
            } = N(l, {
                formItemContext: u
            });
        x((() => {
            const e = t.value.querySelectorAll("[type=radio]"),
                a = e[0];
            !Array.from(e).some((e => e.checked)) && a && (a.tabIndex = 0)
        }));
        const v = r((() => l.name || d.value));
        return S(A, B({ ...R(l),
            changeEvent: e => {
                a(I, e), h((() => a("change", e)))
            },
            name: v
        })), V((() => l.modelValue), (() => {
            l.validateEvent && (null == u || u.validate("change").catch((e => q(e))))
        })), (e, a) => (n(), i("div", {
            id: p(m),
            ref_key: "radioGroupRef",
            ref: t,
            class: c(p(s).b("group")),
            role: "radiogroup",
            "aria-label": p(b) ? void 0 : e.label || "radio-group",
            "aria-labelledby": p(b) ? p(u).labelId : void 0
        }, [f(e.$slots, "default")], 10, ee))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]
]);
const oe = w(J, {
    RadioButton: W,
    RadioGroup: le
});
C(le), C(W);
export {
    oe as E
};