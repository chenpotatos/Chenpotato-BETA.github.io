import {
    O as e,
    c as s,
    ap as t,
    o,
    b as n,
    U as a,
    k as r,
    J as l,
    m as u,
    h as i,
    i as d,
    e as p,
    x as c,
    s as m,
    ak as f,
    al as g,
    aP as y,
    g as v,
    Q as x,
    w as b,
    aN as h,
    ah as C,
    t as k,
    n as T,
    j,
    D as N,
    K as _,
    q as w,
    aQ as B,
    aa as M,
    aR as S,
    ae as L,
    aC as E
} from "./el-select.e274bb48.js";
import {
    m as I
} from "./config-provider.35572354.js";
import {
    b as $,
    _ as z,
    w as H,
    d as D,
    E as U,
    i as O,
    g as q
} from "./index.176a125e.js";
import {
    u as F
} from "./index.0e1148e8.js";
import {
    m as R
} from "./typescript.72bf8adc.js";
import {
    i as A,
    T as Q,
    a as J
} from "./icon.8b835c88.js";
import {
    E as K
} from "./aria.66f3f71c.js";
import {
    d as P
} from "./style.d69d81d7.js";
import {
    u as Z
} from "./index.7c0d977d.js";
import "./index.8720847e.js";
import "./isObject.a01dee34.js";
import "./index.4e5ff846.js";
const G = $({
        value: {
            type: [String, Number],
            default: ""
        },
        max: {
            type: Number,
            default: 99
        },
        isDot: Boolean,
        hidden: Boolean,
        type: {
            type: String,
            values: ["primary", "success", "warning", "info", "danger"],
            default: "danger"
        }
    }),
    V = ["textContent"],
    W = e({
        name: "ElBadge"
    });
const X = H(z(e({ ...W,
        props: G,
        setup(e, {
            expose: g
        }) {
            const y = e,
                v = F("badge"),
                x = s((() => y.isDot ? "" : t(y.value) && t(y.max) && y.max < y.value ? `${y.max}+` : `${y.value}`));
            return g({
                content: x
            }), (e, s) => (o(), n("div", {
                class: d(p(v).b())
            }, [a(e.$slots, "default"), r(f, {
                name: `${p(v).namespace.value}-zoom-in-center`,
                persisted: ""
            }, {
                default: l((() => [u(i("sup", {
                    class: d([p(v).e("content"), p(v).em("content", e.type), p(v).is("fixed", !!e.$slots.default), p(v).is("dot", e.isDot)]),
                    textContent: c(p(x))
                }, null, 10, V), [
                    [m, !e.hidden && (p(x) || e.isDot)]
                ])])),
                _: 1
            }, 8, ["name"])], 2))
        }
    }), [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]
    ])),
    Y = ["success", "info", "warning", "error"],
    ee = R({
        customClass: "",
        center: !1,
        dangerouslyUseHTMLString: !1,
        duration: 3e3,
        icon: void 0,
        id: "",
        message: "",
        onClose: void 0,
        showClose: !1,
        type: "info",
        offset: 16,
        zIndex: 0,
        grouping: !1,
        repeatNum: 1,
        appendTo: g ? document.body : void 0
    }),
    se = $({
        customClass: {
            type: String,
            default: ee.customClass
        },
        center: {
            type: Boolean,
            default: ee.center
        },
        dangerouslyUseHTMLString: {
            type: Boolean,
            default: ee.dangerouslyUseHTMLString
        },
        duration: {
            type: Number,
            default: ee.duration
        },
        icon: {
            type: A,
            default: ee.icon
        },
        id: {
            type: String,
            default: ee.id
        },
        message: {
            type: D([String, Object, Function]),
            default: ee.message
        },
        onClose: {
            type: D(Function),
            required: !1
        },
        showClose: {
            type: Boolean,
            default: ee.showClose
        },
        type: {
            type: String,
            values: Y,
            default: ee.type
        },
        offset: {
            type: Number,
            default: ee.offset
        },
        zIndex: {
            type: Number,
            default: ee.zIndex
        },
        grouping: {
            type: Boolean,
            default: ee.grouping
        },
        repeatNum: {
            type: Number,
            default: ee.repeatNum
        }
    }),
    te = {
        destroy: () => !0
    },
    oe = y([]),
    ne = e => {
        const {
            prev: s
        } = (e => {
            const s = oe.findIndex((s => s.id === e)),
                t = oe[s];
            let o;
            return s > 0 && (o = oe[s - 1]), {
                current: t,
                prev: o
            }
        })(e);
        return s ? s.vm.exposed.bottom.value : 0
    },
    ae = ["id"],
    re = ["innerHTML"],
    le = e({
        name: "ElMessage"
    });
var ue = z(e({ ...le,
    props: se,
    emits: te,
    setup(e, {
        expose: t
    }) {
        const g = e,
            {
                Close: y
            } = J,
            M = F("message"),
            S = v(),
            L = v(!1),
            E = v(0);
        let I;
        const $ = s((() => g.type ? "error" === g.type ? "danger" : g.type : "info")),
            z = s((() => {
                const e = g.type;
                return {
                    [M.bm("icon", e)]: e && Q[e]
                }
            })),
            H = s((() => g.icon || Q[g.type] || "")),
            D = s((() => ne(g.id))),
            O = s((() => g.offset + D.value)),
            q = s((() => E.value + O.value)),
            R = s((() => ({
                top: `${O.value}px`,
                zIndex: g.zIndex
            })));

        function A() {
            0 !== g.duration && ({
                stop: I
            } = B((() => {
                Z()
            }), g.duration))
        }

        function P() {
            null == I || I()
        }

        function Z() {
            L.value = !1
        }
        return x((() => {
            A(), L.value = !0
        })), b((() => g.repeatNum), (() => {
            P(), A()
        })), h(document, "keydown", (function({
            code: e
        }) {
            e === K.esc && Z()
        })), C(S, (() => {
            E.value = S.value.getBoundingClientRect().height
        })), t({
            visible: L,
            bottom: q,
            close: Z
        }), (e, s) => (o(), k(f, {
            name: p(M).b("fade"),
            onBeforeLeave: e.onClose,
            onAfterLeave: s[0] || (s[0] = s => e.$emit("destroy")),
            persisted: ""
        }, {
            default: l((() => [u(i("div", {
                id: e.id,
                ref_key: "messageRef",
                ref: S,
                class: d([p(M).b(), {
                    [p(M).m(e.type)]: e.type && !e.icon
                }, p(M).is("center", e.center), p(M).is("closable", e.showClose), e.customClass]),
                style: T(p(R)),
                role: "alert",
                onMouseenter: P,
                onMouseleave: A
            }, [e.repeatNum > 1 ? (o(), k(p(X), {
                key: 0,
                value: e.repeatNum,
                type: p($),
                class: d(p(M).e("badge"))
            }, null, 8, ["value", "type", "class"])) : j("v-if", !0), p(H) ? (o(), k(p(U), {
                key: 1,
                class: d([p(M).e("icon"), p(z)])
            }, {
                default: l((() => [(o(), k(N(p(H))))])),
                _: 1
            }, 8, ["class"])) : j("v-if", !0), a(e.$slots, "default", {}, (() => [e.dangerouslyUseHTMLString ? (o(), n(_, {
                key: 1
            }, [j(" Caution here, message could've been compromised, never use user's input as message "), i("p", {
                class: d(p(M).e("content")),
                innerHTML: e.message
            }, null, 10, re)], 2112)) : (o(), n("p", {
                key: 0,
                class: d(p(M).e("content"))
            }, c(e.message), 3))])), e.showClose ? (o(), k(p(U), {
                key: 2,
                class: d(p(M).e("closeBtn")),
                onClick: w(Z, ["stop"])
            }, {
                default: l((() => [r(p(y))])),
                _: 1
            }, 8, ["class", "onClick"])) : j("v-if", !0)], 46, ae), [
                [m, L.value]
            ])])),
            _: 3
        }, 8, ["name", "onBeforeLeave"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]
]);
let ie = 1;
const de = e => {
        const s = !e || M(e) || S(e) || L(e) ? {
                message: e
            } : e,
            t = { ...ee,
                ...s
            };
        if (t.appendTo) {
            if (M(t.appendTo)) {
                let e = document.querySelector(t.appendTo);
                O(e) || (P("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), e = document.body), t.appendTo = e
            }
        } else t.appendTo = document.body;
        return t
    },
    pe = ({
        appendTo: e,
        ...s
    }, t) => {
        const {
            nextZIndex: o
        } = Z(), n = "message_" + ie++, a = s.onClose, l = document.createElement("div"), u = { ...s,
            zIndex: o() + s.zIndex,
            id: n,
            onClose: () => {
                null == a || a(), (e => {
                    const s = oe.indexOf(e);
                    if (-1 === s) return;
                    oe.splice(s, 1);
                    const {
                        handler: t
                    } = e;
                    t.close()
                })(c)
            },
            onDestroy: () => {
                E(null, l)
            }
        }, i = r(ue, u, L(u.message) || S(u.message) ? {
            default: L(u.message) ? u.message : () => u.message
        } : null);
        i.appContext = t || ce._context, E(i, l), e.appendChild(l.firstElementChild);
        const d = i.component,
            p = {
                close: () => {
                    d.exposed.visible.value = !1
                }
            },
            c = {
                id: n,
                vnode: i,
                vm: d,
                handler: p,
                props: i.component.props
            };
        return c
    },
    ce = (e = {}, s) => {
        if (!g) return {
            close: () => {}
        };
        if (t(I.max) && oe.length >= I.max) return {
            close: () => {}
        };
        const o = de(e);
        if (o.grouping && oe.length) {
            const e = oe.find((({
                vnode: e
            }) => {
                var s;
                return (null == (s = e.props) ? void 0 : s.message) === o.message
            }));
            if (e) return e.props.repeatNum += 1, e.props.type = o.type, e.handler
        }
        const n = pe(o, s);
        return oe.push(n), n.handler
    };
Y.forEach((e => {
    ce[e] = (s = {}, t) => {
        const o = de(s);
        return ce({ ...o,
            type: e
        }, t)
    }
})), ce.closeAll = function(e) {
    for (const s of oe) e && e !== s.props.type || s.handler.close()
}, ce._context = null;
const me = q(ce, "$message");
export {
    me as ElMessage, me as
    default, ee as messageDefaults, te as messageEmits, se as messageProps, Y as messageTypes
};