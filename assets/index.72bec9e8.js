import {
    g as e,
    ap as t,
    aa as a,
    O as o,
    aq as n,
    ai as l,
    c as s,
    am as i,
    ah as r,
    w as u,
    S as p,
    Q as d,
    ar as c,
    m as f,
    s as v,
    o as m,
    b as y,
    j as x,
    K as b,
    i as h,
    e as g,
    U as w,
    h as S,
    t as k,
    J as z,
    D as I,
    ao as $,
    k as C,
    q as E,
    as as j,
    x as F,
    n as P,
    al as V,
    at as M
} from "./el-select.e274bb48.js";
import {
    b as _,
    d as B,
    E as N,
    _ as R,
    w as A
} from "./index.176a125e.js";
import {
    v as O,
    h as H,
    e as T
} from "./index.4e5ff846.js";
import {
    b as K,
    u as W,
    d as q
} from "./index.8720847e.js";
import {
    i as D,
    V as L
} from "./icon.8b835c88.js";
import {
    m as U
} from "./typescript.72bf8adc.js";
import {
    U as J,
    i as Q
} from "./focus-trap.e600e472.js";
import {
    u as G
} from "./index.c89b0165.js";
import {
    u as X,
    a as Y
} from "./index.d235e992.js";
import {
    u as Z
} from "./index.0e1148e8.js";
import {
    d as ee
} from "./style.d69d81d7.js";
const te = e => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e);
let ae;
const oe = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];

function ne(e, a = 1, o) {
    var n;
    ae || (ae = document.createElement("textarea"), document.body.appendChild(ae));
    const {
        paddingSize: l,
        borderSize: s,
        boxSizing: i,
        contextStyle: r
    } = function(e) {
        const t = window.getComputedStyle(e),
            a = t.getPropertyValue("box-sizing"),
            o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")),
            n = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
        return {
            contextStyle: oe.map((e => `${e}:${t.getPropertyValue(e)}`)).join(";"),
            paddingSize: o,
            borderSize: n,
            boxSizing: a
        }
    }(e);
    ae.setAttribute("style", `${r};\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`), ae.value = e.value || e.placeholder || "";
    let u = ae.scrollHeight;
    const p = {};
    "border-box" === i ? u += s : "content-box" === i && (u -= l), ae.value = "";
    const d = ae.scrollHeight - l;
    if (t(a)) {
        let e = d * a;
        "border-box" === i && (e = e + l + s), u = Math.max(e, u), p.minHeight = `${e}px`
    }
    if (t(o)) {
        let e = d * o;
        "border-box" === i && (e = e + l + s), u = Math.min(e, u)
    }
    return p.height = `${u}px`, null == (n = ae.parentNode) || n.removeChild(ae), ae = void 0, p
}
const le = _({
        id: {
            type: String,
            default: void 0
        },
        size: K,
        disabled: Boolean,
        modelValue: {
            type: B([String, Number, Object]),
            default: ""
        },
        type: {
            type: String,
            default: "text"
        },
        resize: {
            type: String,
            values: ["none", "both", "horizontal", "vertical"]
        },
        autosize: {
            type: B([Boolean, Object]),
            default: !1
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        formatter: {
            type: Function
        },
        parser: {
            type: Function
        },
        placeholder: {
            type: String
        },
        form: {
            type: String
        },
        readonly: {
            type: Boolean,
            default: !1
        },
        clearable: {
            type: Boolean,
            default: !1
        },
        showPassword: {
            type: Boolean,
            default: !1
        },
        showWordLimit: {
            type: Boolean,
            default: !1
        },
        suffixIcon: {
            type: D
        },
        prefixIcon: {
            type: D
        },
        containerRole: {
            type: String,
            default: void 0
        },
        label: {
            type: String,
            default: void 0
        },
        tabindex: {
            type: [String, Number],
            default: 0
        },
        validateEvent: {
            type: Boolean,
            default: !0
        },
        inputStyle: {
            type: B([Object, Array, String]),
            default: () => U({})
        }
    }),
    se = {
        [J]: e => a(e),
        input: e => a(e),
        change: e => a(e),
        focus: e => e instanceof FocusEvent,
        blur: e => e instanceof FocusEvent,
        clear: () => !0,
        mouseleave: e => e instanceof MouseEvent,
        mouseenter: e => e instanceof MouseEvent,
        keydown: e => e instanceof Event,
        compositionstart: e => e instanceof CompositionEvent,
        compositionupdate: e => e instanceof CompositionEvent,
        compositionend: e => e instanceof CompositionEvent
    },
    ie = ["role"],
    re = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"],
    ue = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"],
    pe = o({
        name: "ElInput",
        inheritAttrs: !1
    });
const de = A(R(o({ ...pe,
    props: le,
    emits: se,
    setup(t, {
        expose: a,
        emit: o
    }) {
        const _ = t,
            B = n(),
            R = l(),
            A = s((() => {
                const e = {};
                return "combobox" === _.containerRole && (e["aria-haspopup"] = B["aria-haspopup"], e["aria-owns"] = B["aria-owns"], e["aria-expanded"] = B["aria-expanded"]), e
            })),
            K = G({
                excludeKeys: s((() => Object.keys(A.value)))
            }),
            {
                form: D,
                formItem: U
            } = X(),
            {
                inputId: ae
            } = Y(_, {
                formItemContext: U
            }),
            oe = W(),
            le = q(),
            se = Z("input"),
            pe = Z("textarea"),
            de = i(),
            ce = i(),
            fe = e(!1),
            ve = e(!1),
            me = e(!1),
            ye = e(!1),
            xe = e(),
            be = i(_.inputStyle),
            he = s((() => de.value || ce.value)),
            ge = s((() => {
                var e;
                return null != (e = null == D ? void 0 : D.statusIcon) && e
            })),
            we = s((() => (null == U ? void 0 : U.validateState) || "")),
            Se = s((() => we.value && L[we.value])),
            ke = s((() => ye.value ? O : H)),
            ze = s((() => [B.style, _.inputStyle])),
            Ie = s((() => [_.inputStyle, be.value, {
                resize: _.resize
            }])),
            $e = s((() => Q(_.modelValue) ? "" : String(_.modelValue))),
            Ce = s((() => _.clearable && !le.value && !_.readonly && !!$e.value && (fe.value || ve.value))),
            Ee = s((() => _.showPassword && !le.value && !_.readonly && !!$e.value && (!!$e.value || fe.value))),
            je = s((() => _.showWordLimit && !!K.value.maxlength && ("text" === _.type || "textarea" === _.type) && !le.value && !_.readonly && !_.showPassword)),
            Fe = s((() => Array.from($e.value).length)),
            Pe = s((() => !!je.value && Fe.value > Number(K.value.maxlength))),
            Ve = s((() => !!R.suffix || !!_.suffixIcon || Ce.value || _.showPassword || je.value || !!we.value && ge.value)),
            [Me, _e] = function(t) {
                const a = e();
                return [function() {
                    if (null == t.value) return;
                    const {
                        selectionStart: e,
                        selectionEnd: o,
                        value: n
                    } = t.value;
                    if (null == e || null == o) return;
                    const l = n.slice(0, Math.max(0, e)),
                        s = n.slice(Math.max(0, o));
                    a.value = {
                        selectionStart: e,
                        selectionEnd: o,
                        value: n,
                        beforeTxt: l,
                        afterTxt: s
                    }
                }, function() {
                    if (null == t.value || null == a.value) return;
                    const {
                        value: e
                    } = t.value, {
                        beforeTxt: o,
                        afterTxt: n,
                        selectionStart: l
                    } = a.value;
                    if (null == o || null == n || null == l) return;
                    let s = e.length;
                    if (e.endsWith(n)) s = e.length - n.length;
                    else if (e.startsWith(o)) s = o.length;
                    else {
                        const t = o[l - 1],
                            a = e.indexOf(t, l - 1); - 1 !== a && (s = a + 1)
                    }
                    t.value.setSelectionRange(s, s)
                }]
            }(de);
        r(ce, (e => {
            if (!je.value || "both" !== _.resize) return;
            const t = e[0],
                {
                    width: a
                } = t.contentRect;
            xe.value = {
                right: `calc(100% - ${a+15+6}px)`
            }
        }));
        const Be = () => {
                const {
                    type: e,
                    autosize: t
                } = _;
                if (V && "textarea" === e)
                    if (t) {
                        const e = M(t) ? t.minRows : void 0,
                            a = M(t) ? t.maxRows : void 0;
                        be.value = { ...ne(ce.value, e, a)
                        }
                    } else be.value = {
                        minHeight: ne(ce.value).minHeight
                    }
            },
            Ne = () => {
                const e = he.value;
                e && e.value !== $e.value && (e.value = $e.value)
            },
            Re = async e => {
                Me();
                let {
                    value: t
                } = e.target;
                _.formatter && (t = _.parser ? _.parser(t) : t, t = _.formatter(t)), me.value || (t !== $e.value ? (o(J, t), o("input", t), await p(), Ne(), _e()) : Ne())
            },
            Ae = e => {
                o("change", e.target.value)
            },
            Oe = e => {
                o("compositionstart", e), me.value = !0
            },
            He = e => {
                var t;
                o("compositionupdate", e);
                const a = null == (t = e.target) ? void 0 : t.value,
                    n = a[a.length - 1] || "";
                me.value = !te(n)
            },
            Te = e => {
                o("compositionend", e), me.value && (me.value = !1, Re(e))
            },
            Ke = () => {
                ye.value = !ye.value, We()
            },
            We = async () => {
                var e;
                await p(), null == (e = he.value) || e.focus()
            },
            qe = e => {
                fe.value = !0, o("focus", e)
            },
            De = e => {
                var t;
                fe.value = !1, o("blur", e), _.validateEvent && (null == (t = null == U ? void 0 : U.validate) || t.call(U, "blur").catch((e => ee(e))))
            },
            Le = e => {
                ve.value = !1, o("mouseleave", e)
            },
            Ue = e => {
                ve.value = !0, o("mouseenter", e)
            },
            Je = e => {
                o("keydown", e)
            },
            Qe = () => {
                o(J, ""), o("change", ""), o("clear"), o("input", "")
            };
        return u((() => _.modelValue), (() => {
            var e;
            p((() => Be())), _.validateEvent && (null == (e = null == U ? void 0 : U.validate) || e.call(U, "change").catch((e => ee(e))))
        })), u($e, (() => Ne())), u((() => _.type), (async () => {
            await p(), Ne(), Be()
        })), d((() => {
            !_.formatter && _.parser && ee("ElInput", "If you set the parser, you also need to set the formatter."), Ne(), p(Be)
        })), a({
            input: de,
            textarea: ce,
            ref: he,
            textareaStyle: Ie,
            autosize: c(_, "autosize"),
            focus: We,
            blur: () => {
                var e;
                return null == (e = he.value) ? void 0 : e.blur()
            },
            select: () => {
                var e;
                null == (e = he.value) || e.select()
            },
            clear: Qe,
            resizeTextarea: Be
        }), (e, t) => f((m(), y("div", $(g(A), {
            class: ["textarea" === e.type ? g(pe).b() : g(se).b(), g(se).m(g(oe)), g(se).is("disabled", g(le)), g(se).is("exceed", g(Pe)), {
                [g(se).b("group")]: e.$slots.prepend || e.$slots.append,
                [g(se).bm("group", "append")]: e.$slots.append,
                [g(se).bm("group", "prepend")]: e.$slots.prepend,
                [g(se).m("prefix")]: e.$slots.prefix || e.prefixIcon,
                [g(se).m("suffix")]: e.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword,
                [g(se).bm("suffix", "password-clear")]: g(Ce) && g(Ee)
            }, e.$attrs.class],
            style: g(ze),
            role: e.containerRole,
            onMouseenter: Ue,
            onMouseleave: Le
        }), [x(" input "), "textarea" !== e.type ? (m(), y(b, {
            key: 0
        }, [x(" prepend slot "), e.$slots.prepend ? (m(), y("div", {
            key: 0,
            class: h(g(se).be("group", "prepend"))
        }, [w(e.$slots, "prepend")], 2)) : x("v-if", !0), S("div", {
            class: h([g(se).e("wrapper"), g(se).is("focus", fe.value)])
        }, [x(" prefix slot "), e.$slots.prefix || e.prefixIcon ? (m(), y("span", {
            key: 0,
            class: h(g(se).e("prefix"))
        }, [S("span", {
            class: h(g(se).e("prefix-inner"))
        }, [w(e.$slots, "prefix"), e.prefixIcon ? (m(), k(g(N), {
            key: 0,
            class: h(g(se).e("icon"))
        }, {
            default: z((() => [(m(), k(I(e.prefixIcon)))])),
            _: 1
        }, 8, ["class"])) : x("v-if", !0)], 2)], 2)) : x("v-if", !0), S("input", $({
            id: g(ae),
            ref_key: "input",
            ref: de,
            class: g(se).e("inner")
        }, g(K), {
            type: e.showPassword ? ye.value ? "text" : "password" : e.type,
            disabled: g(le),
            formatter: e.formatter,
            parser: e.parser,
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            tabindex: e.tabindex,
            "aria-label": e.label,
            placeholder: e.placeholder,
            style: e.inputStyle,
            form: _.form,
            onCompositionstart: Oe,
            onCompositionupdate: He,
            onCompositionend: Te,
            onInput: Re,
            onFocus: qe,
            onBlur: De,
            onChange: Ae,
            onKeydown: Je
        }), null, 16, re), x(" suffix slot "), g(Ve) ? (m(), y("span", {
            key: 1,
            class: h(g(se).e("suffix"))
        }, [S("span", {
            class: h(g(se).e("suffix-inner"))
        }, [g(Ce) && g(Ee) && g(je) ? x("v-if", !0) : (m(), y(b, {
            key: 0
        }, [w(e.$slots, "suffix"), e.suffixIcon ? (m(), k(g(N), {
            key: 0,
            class: h(g(se).e("icon"))
        }, {
            default: z((() => [(m(), k(I(e.suffixIcon)))])),
            _: 1
        }, 8, ["class"])) : x("v-if", !0)], 64)), g(Ce) ? (m(), k(g(N), {
            key: 1,
            class: h([g(se).e("icon"), g(se).e("clear")]),
            onMousedown: E(g(j), ["prevent"]),
            onClick: Qe
        }, {
            default: z((() => [C(g(T))])),
            _: 1
        }, 8, ["class", "onMousedown"])) : x("v-if", !0), g(Ee) ? (m(), k(g(N), {
            key: 2,
            class: h([g(se).e("icon"), g(se).e("password")]),
            onClick: Ke
        }, {
            default: z((() => [(m(), k(I(g(ke))))])),
            _: 1
        }, 8, ["class"])) : x("v-if", !0), g(je) ? (m(), y("span", {
            key: 3,
            class: h(g(se).e("count"))
        }, [S("span", {
            class: h(g(se).e("count-inner"))
        }, F(g(Fe)) + " / " + F(g(K).maxlength), 3)], 2)) : x("v-if", !0), g(we) && g(Se) && g(ge) ? (m(), k(g(N), {
            key: 4,
            class: h([g(se).e("icon"), g(se).e("validateIcon"), g(se).is("loading", "validating" === g(we))])
        }, {
            default: z((() => [(m(), k(I(g(Se))))])),
            _: 1
        }, 8, ["class"])) : x("v-if", !0)], 2)], 2)) : x("v-if", !0)], 2), x(" append slot "), e.$slots.append ? (m(), y("div", {
            key: 1,
            class: h(g(se).be("group", "append"))
        }, [w(e.$slots, "append")], 2)) : x("v-if", !0)], 64)) : (m(), y(b, {
            key: 1
        }, [x(" textarea "), S("textarea", $({
            id: g(ae),
            ref_key: "textarea",
            ref: ce,
            class: g(pe).e("inner")
        }, g(K), {
            tabindex: e.tabindex,
            disabled: g(le),
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            style: g(Ie),
            "aria-label": e.label,
            placeholder: e.placeholder,
            form: _.form,
            onCompositionstart: Oe,
            onCompositionupdate: He,
            onCompositionend: Te,
            onInput: Re,
            onFocus: qe,
            onBlur: De,
            onChange: Ae,
            onKeydown: Je
        }), null, 16, ue), g(je) ? (m(), y("span", {
            key: 0,
            style: P(xe.value),
            class: h(g(se).e("count"))
        }, F(g(Fe)) + " / " + F(g(K).maxlength), 7)) : x("v-if", !0)], 64))], 16, ie)), [
            [v, "hidden" !== e.type]
        ])
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]
]));
export {
    de as E, te as i
};