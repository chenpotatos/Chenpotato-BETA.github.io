import {
    w as e,
    a6 as t,
    S as n,
    O as o,
    g as a,
    z as s,
    c as l,
    Q as r,
    af as i,
    ad as c,
    W as u,
    o as d,
    t as p,
    J as f,
    m,
    k as v,
    h as g,
    i as b,
    n as h,
    q as y,
    b as C,
    D as x,
    j as E,
    x as B,
    p as w,
    U as k,
    C as T,
    s as M,
    ak as I,
    al as S,
    aa as j,
    aR as A,
    aC as R,
    an as _,
    at as L,
    ae as P
} from "./el-select.e274bb48.js";
import {
    ElButton as z
} from "./index.534437f3.js";
import {
    E as O
} from "./index.72bec9e8.js";
import {
    a as V,
    u as $,
    b as H,
    c as q
} from "./el-dialog.c73078d2.js";
import {
    E as D,
    _ as U,
    e as K,
    i as F
} from "./index.176a125e.js";
import {
    E as N
} from "./aria.66f3f71c.js";
import {
    E as W
} from "./focus-trap.e600e472.js";
import {
    a as J,
    T as Q
} from "./icon.8b835c88.js";
import {
    i as X
} from "./validator.05a5fb38.js";
import {
    u as Z
} from "./index.14b43c35.js";
import {
    u as G
} from "./index.0e1148e8.js";
import {
    u as Y
} from "./index.7c0d977d.js";
import {
    u as ee
} from "./index.ca3d31b2.js";
import {
    u as te
} from "./index.8720847e.js";
import {
    d as ne
} from "./style.d69d81d7.js";
const oe = e => Array.from(e.querySelectorAll('a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])')).filter((e => ae(e) && (e => "fixed" !== getComputedStyle(e).position && null !== e.offsetParent)(e))),
    ae = e => {
        if (e.tabIndex > 0 || 0 === e.tabIndex && null !== e.getAttribute("tabIndex")) return !0;
        if (e.disabled) return !1;
        switch (e.nodeName) {
            case "A":
                return !!e.href && "ignore" !== e.rel;
            case "INPUT":
                return !("hidden" === e.type || "file" === e.type);
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                return !0;
            default:
                return !1
        }
    },
    se = [],
    le = e => {
        if (0 === se.length) return;
        const t = se[se.length - 1]["_trap-focus-children"];
        if (t.length > 0 && e.code === N.tab) {
            if (1 === t.length) return e.preventDefault(), void(document.activeElement !== t[0] && t[0].focus());
            const n = e.shiftKey,
                o = e.target === t[0],
                a = e.target === t[t.length - 1];
            o && n && (e.preventDefault(), t[t.length - 1].focus()), a && !n && (e.preventDefault(), t[0].focus())
        }
    },
    re = o({
        name: "ElMessageBox",
        directives: {
            TrapFocus: {
                beforeMount(e) {
                    e["_trap-focus-children"] = oe(e), se.push(e), se.length <= 1 && document.addEventListener("keydown", le)
                },
                updated(e) {
                    n((() => {
                        e["_trap-focus-children"] = oe(e)
                    }))
                },
                unmounted() {
                    se.shift(), 0 === se.length && document.removeEventListener("keydown", le)
                }
            }
        },
        components: {
            ElButton: z,
            ElFocusTrap: W,
            ElInput: O,
            ElOverlay: V,
            ElIcon: D,
            ...J
        },
        inheritAttrs: !1,
        props: {
            buttonSize: {
                type: String,
                validator: X
            },
            modal: {
                type: Boolean,
                default: !0
            },
            lockScroll: {
                type: Boolean,
                default: !0
            },
            showClose: {
                type: Boolean,
                default: !0
            },
            closeOnClickModal: {
                type: Boolean,
                default: !0
            },
            closeOnPressEscape: {
                type: Boolean,
                default: !0
            },
            closeOnHashChange: {
                type: Boolean,
                default: !0
            },
            center: Boolean,
            draggable: Boolean,
            roundButton: {
                default: !1,
                type: Boolean
            },
            container: {
                type: String,
                default: "body"
            },
            boxType: {
                type: String,
                default: ""
            }
        },
        emits: ["vanish", "action"],
        setup(o, {
            emit: u
        }) {
            const {
                t: d
            } = Z(), p = G("message-box"), f = a(!1), {
                nextZIndex: m
            } = Y(), v = s({
                autofocus: !0,
                beforeClose: null,
                callback: null,
                cancelButtonText: "",
                cancelButtonClass: "",
                confirmButtonText: "",
                confirmButtonClass: "",
                customClass: "",
                customStyle: {},
                dangerouslyUseHTMLString: !1,
                distinguishCancelAndClose: !1,
                icon: "",
                inputPattern: null,
                inputPlaceholder: "",
                inputType: "text",
                inputValue: null,
                inputValidator: null,
                inputErrorMessage: "",
                message: null,
                modalFade: !0,
                modalClass: "",
                showCancelButton: !1,
                showConfirmButton: !0,
                type: "",
                title: void 0,
                showInput: !1,
                action: "",
                confirmButtonLoading: !1,
                cancelButtonLoading: !1,
                confirmButtonDisabled: !1,
                editorErrorMessage: "",
                validateError: !1,
                zIndex: m()
            }), g = l((() => {
                const e = v.type;
                return {
                    [p.bm("icon", e)]: e && Q[e]
                }
            })), b = ee(), h = ee(), y = te(l((() => o.buttonSize)), {
                prop: !0,
                form: !0,
                formItem: !0
            }), C = l((() => v.icon || Q[v.type] || "")), x = l((() => !!v.message)), E = a(), B = a(), w = a(), k = a(), T = a(), M = l((() => v.confirmButtonClass));
            e((() => v.inputValue), (async e => {
                await n(), "prompt" === o.boxType && null !== e && _()
            }), {
                immediate: !0
            }), e((() => f.value), (e => {
                var t, a;
                e && ("prompt" !== o.boxType && (v.autofocus ? w.value = null != (a = null == (t = T.value) ? void 0 : t.$el) ? a : E.value : w.value = E.value), v.zIndex = m()), "prompt" === o.boxType && (e ? n().then((() => {
                    var e;
                    k.value && k.value.$el && (v.autofocus ? w.value = null != (e = L()) ? e : E.value : w.value = E.value)
                })) : (v.editorErrorMessage = "", v.validateError = !1))
            }));
            const I = l((() => o.draggable));

            function S() {
                f.value && (f.value = !1, n((() => {
                    v.action && u("action", v.action)
                })))
            }
            $(E, B, I), r((async () => {
                await n(), o.closeOnHashChange && window.addEventListener("hashchange", S)
            })), i((() => {
                o.closeOnHashChange && window.removeEventListener("hashchange", S)
            }));
            const j = () => {
                    o.closeOnClickModal && R(v.distinguishCancelAndClose ? "close" : "cancel")
                },
                A = q(j),
                R = e => {
                    var t;
                    ("prompt" !== o.boxType || "confirm" !== e || _()) && (v.action = e, v.beforeClose ? null == (t = v.beforeClose) || t.call(v, e, v, S) : S())
                },
                _ = () => {
                    if ("prompt" === o.boxType) {
                        const e = v.inputPattern;
                        if (e && !e.test(v.inputValue || "")) return v.editorErrorMessage = v.inputErrorMessage || d("el.messagebox.error"), v.validateError = !0, !1;
                        const t = v.inputValidator;
                        if ("function" == typeof t) {
                            const e = t(v.inputValue);
                            if (!1 === e) return v.editorErrorMessage = v.inputErrorMessage || d("el.messagebox.error"), v.validateError = !0, !1;
                            if ("string" == typeof e) return v.editorErrorMessage = e, v.validateError = !0, !1
                        }
                    }
                    return v.editorErrorMessage = "", v.validateError = !1, !0
                },
                L = () => {
                    const e = k.value.$refs;
                    return e.input || e.textarea
                },
                P = () => {
                    R("close")
                };
            return o.lockScroll && H(f), ((n, o) => {
                let a;
                e((() => n.value), (e => {
                    var n, s;
                    e ? (a = document.activeElement, t(o) && (null == (s = (n = o.value).focus) || s.call(n))) : a.focus()
                }))
            })(f), { ...c(v),
                ns: p,
                overlayEvent: A,
                visible: f,
                hasMessage: x,
                typeClass: g,
                contentId: b,
                inputId: h,
                btnSize: y,
                iconComponent: C,
                confirmButtonClasses: M,
                rootRef: E,
                focusStartRef: w,
                headerRef: B,
                inputRef: k,
                confirmRef: T,
                doClose: S,
                handleClose: P,
                onCloseRequested: () => {
                    o.closeOnPressEscape && P()
                },
                handleWrapperClick: j,
                handleInputEnter: e => {
                    if ("textarea" !== v.inputType) return e.preventDefault(), R("confirm")
                },
                handleAction: R,
                t: d
            }
        }
    }),
    ie = ["aria-label", "aria-describedby"],
    ce = ["aria-label"],
    ue = ["id"];
var de = U(re, [
    ["render", function(e, t, n, o, a, s) {
        const l = u("el-icon"),
            r = u("close"),
            i = u("el-input"),
            c = u("el-button"),
            S = u("el-focus-trap"),
            j = u("el-overlay");
        return d(), p(I, {
            name: "fade-in-linear",
            onAfterLeave: t[11] || (t[11] = t => e.$emit("vanish")),
            persisted: ""
        }, {
            default: f((() => [m(v(j, {
                "z-index": e.zIndex,
                "overlay-class": [e.ns.is("message-box"), e.modalClass],
                mask: e.modal
            }, {
                default: f((() => [g("div", {
                    role: "dialog",
                    "aria-label": e.title,
                    "aria-modal": "true",
                    "aria-describedby": e.showInput ? void 0 : e.contentId,
                    class: b(`${e.ns.namespace.value}-overlay-message-box`),
                    onClick: t[8] || (t[8] = (...t) => e.overlayEvent.onClick && e.overlayEvent.onClick(...t)),
                    onMousedown: t[9] || (t[9] = (...t) => e.overlayEvent.onMousedown && e.overlayEvent.onMousedown(...t)),
                    onMouseup: t[10] || (t[10] = (...t) => e.overlayEvent.onMouseup && e.overlayEvent.onMouseup(...t))
                }, [v(S, {
                    loop: "",
                    trapped: e.visible,
                    "focus-trap-el": e.rootRef,
                    "focus-start-el": e.focusStartRef,
                    onReleaseRequested: e.onCloseRequested
                }, {
                    default: f((() => [g("div", {
                        ref: "rootRef",
                        class: b([e.ns.b(), e.customClass, e.ns.is("draggable", e.draggable), {
                            [e.ns.m("center")]: e.center
                        }]),
                        style: h(e.customStyle),
                        tabindex: "-1",
                        onClick: t[7] || (t[7] = y((() => {}), ["stop"]))
                    }, [null !== e.title && void 0 !== e.title ? (d(), C("div", {
                        key: 0,
                        ref: "headerRef",
                        class: b(e.ns.e("header"))
                    }, [g("div", {
                        class: b(e.ns.e("title"))
                    }, [e.iconComponent && e.center ? (d(), p(l, {
                        key: 0,
                        class: b([e.ns.e("status"), e.typeClass])
                    }, {
                        default: f((() => [(d(), p(x(e.iconComponent)))])),
                        _: 1
                    }, 8, ["class"])) : E("v-if", !0), g("span", null, B(e.title), 1)], 2), e.showClose ? (d(), C("button", {
                        key: 0,
                        type: "button",
                        class: b(e.ns.e("headerbtn")),
                        "aria-label": e.t("el.messagebox.close"),
                        onClick: t[0] || (t[0] = t => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel")),
                        onKeydown: t[1] || (t[1] = w(y((t => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel")), ["prevent"]), ["enter"]))
                    }, [v(l, {
                        class: b(e.ns.e("close"))
                    }, {
                        default: f((() => [v(r)])),
                        _: 1
                    }, 8, ["class"])], 42, ce)) : E("v-if", !0)], 2)) : E("v-if", !0), g("div", {
                        id: e.contentId,
                        class: b(e.ns.e("content"))
                    }, [g("div", {
                        class: b(e.ns.e("container"))
                    }, [e.iconComponent && !e.center && e.hasMessage ? (d(), p(l, {
                        key: 0,
                        class: b([e.ns.e("status"), e.typeClass])
                    }, {
                        default: f((() => [(d(), p(x(e.iconComponent)))])),
                        _: 1
                    }, 8, ["class"])) : E("v-if", !0), e.hasMessage ? (d(), C("div", {
                        key: 1,
                        class: b(e.ns.e("message"))
                    }, [k(e.$slots, "default", {}, (() => [e.dangerouslyUseHTMLString ? (d(), p(x(e.showInput ? "label" : "p"), {
                        key: 1,
                        for: e.showInput ? e.inputId : void 0,
                        innerHTML: e.message
                    }, null, 8, ["for", "innerHTML"])) : (d(), p(x(e.showInput ? "label" : "p"), {
                        key: 0,
                        for: e.showInput ? e.inputId : void 0
                    }, {
                        default: f((() => [T(B(e.dangerouslyUseHTMLString ? "" : e.message), 1)])),
                        _: 1
                    }, 8, ["for"]))]))], 2)) : E("v-if", !0)], 2), m(g("div", {
                        class: b(e.ns.e("input"))
                    }, [v(i, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": t[2] || (t[2] = t => e.inputValue = t),
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: b({
                            invalid: e.validateError
                        }),
                        onKeydown: w(e.handleInputEnter, ["enter"])
                    }, null, 8, ["id", "modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]), g("div", {
                        class: b(e.ns.e("errormsg")),
                        style: h({
                            visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                    }, B(e.editorErrorMessage), 7)], 2), [
                        [M, e.showInput]
                    ])], 10, ue), g("div", {
                        class: b(e.ns.e("btns"))
                    }, [e.showCancelButton ? (d(), p(c, {
                        key: 0,
                        loading: e.cancelButtonLoading,
                        class: b([e.cancelButtonClass]),
                        round: e.roundButton,
                        size: e.btnSize,
                        onClick: t[3] || (t[3] = t => e.handleAction("cancel")),
                        onKeydown: t[4] || (t[4] = w(y((t => e.handleAction("cancel")), ["prevent"]), ["enter"]))
                    }, {
                        default: f((() => [T(B(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)])),
                        _: 1
                    }, 8, ["loading", "class", "round", "size"])) : E("v-if", !0), m(v(c, {
                        ref: "confirmRef",
                        type: "primary",
                        loading: e.confirmButtonLoading,
                        class: b([e.confirmButtonClasses]),
                        round: e.roundButton,
                        disabled: e.confirmButtonDisabled,
                        size: e.btnSize,
                        onClick: t[5] || (t[5] = t => e.handleAction("confirm")),
                        onKeydown: t[6] || (t[6] = w(y((t => e.handleAction("confirm")), ["prevent"]), ["enter"]))
                    }, {
                        default: f((() => [T(B(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)])),
                        _: 1
                    }, 8, ["loading", "class", "round", "disabled", "size"]), [
                        [M, e.showConfirmButton]
                    ])], 2)], 6)])),
                    _: 3
                }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])], 42, ie)])),
                _: 3
            }, 8, ["z-index", "overlay-class", "mask"]), [
                [M, e.visible]
            ])])),
            _: 3
        })
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]
]);
const pe = new Map,
    fe = (e, t, n = null) => {
        const o = v(de, e, P(e.message) || A(e.message) ? {
            default: P(e.message) ? e.message : () => e.message
        } : null);
        return o.appContext = n, R(o, t), (e => {
            let t = document.body;
            return e.appendTo && (j(e.appendTo) && (t = document.querySelector(e.appendTo)), F(e.appendTo) && (t = e.appendTo), F(t) || (ne("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), t = document.body)), t
        })(e).appendChild(t.firstElementChild), o.component
    },
    me = (e, t) => {
        const n = document.createElement("div");
        e.onVanish = () => {
            R(null, n), pe.delete(a)
        }, e.onAction = t => {
            const n = pe.get(a);
            let s;
            s = e.showInput ? {
                value: a.inputValue,
                action: t
            } : t, e.callback ? e.callback(s, o.proxy) : "cancel" === t || "close" === t ? e.distinguishCancelAndClose && "cancel" !== t ? n.reject("close") : n.reject("cancel") : n.resolve(s)
        };
        const o = fe(e, n, t),
            a = o.proxy;
        for (const s in e) _(e, s) && !_(a.$props, s) && (a[s] = e[s]);
        return a.visible = !0, a
    };

function ve(e, t = null) {
    if (!S) return Promise.reject();
    let n;
    return j(e) || A(e) ? e = {
        message: e
    } : n = e.callback, new Promise(((o, a) => {
        const s = me(e, null != t ? t : ve._context);
        pe.set(s, {
            options: e,
            callback: n,
            resolve: o,
            reject: a
        })
    }))
}
const ge = {
    alert: {
        closeOnPressEscape: !1,
        closeOnClickModal: !1
    },
    confirm: {
        showCancelButton: !0
    },
    prompt: {
        showCancelButton: !0,
        showInput: !0
    }
};
["alert", "confirm", "prompt"].forEach((e => {
    ve[e] = function(e) {
        return (t, n, o, a) => {
            let s = "";
            return L(n) ? (o = n, s = "") : s = K(n) ? "" : n, ve(Object.assign({
                title: s,
                message: t,
                type: "",
                ...ge[e]
            }, o, {
                boxType: e
            }), a)
        }
    }(e)
})), ve.close = () => {
    pe.forEach(((e, t) => {
        t.doClose()
    })), pe.clear()
}, ve._context = null;
const be = ve;
be.install = e => {
    be._context = e._context, e.config.globalProperties.$msgbox = be, e.config.globalProperties.$messageBox = be, e.config.globalProperties.$alert = be.alert, e.config.globalProperties.$confirm = be.confirm, e.config.globalProperties.$prompt = be.prompt
};
const he = be;
export {
    he as E
};