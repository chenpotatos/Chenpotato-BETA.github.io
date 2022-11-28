import {
    ae as e,
    a9 as o,
    aR as t,
    Q as s,
    Y as a,
    af as l,
    a6 as n,
    aX as r,
    al as u,
    w as d,
    aY as c,
    as as i,
    O as f,
    k as p,
    U as m,
    N as y,
    a5 as v,
    c as b,
    o as g,
    b as E,
    h,
    i as C,
    e as S,
    x as k,
    J as A,
    t as M,
    D as T,
    j as x,
    n as R,
    ab as L,
    g as w,
    S as F,
    F as I,
    aQ as D,
    ai as _,
    ac as B,
    m as N,
    ao as O,
    ay as Y,
    s as $,
    ak as P,
    aJ as j
} from "./el-select.e274bb48.js";
import {
    b as z,
    d as H,
    E as U,
    _ as X,
    w as G
} from "./index.176a125e.js";
import {
    u as K,
    b as V,
    d as q
} from "./index.0e1148e8.js";
import {
    i as J,
    C as Q
} from "./icon.8b835c88.js";
import {
    u as W
} from "./index.14b43c35.js";
import {
    F as Z,
    U as ee,
    E as oe
} from "./focus-trap.e600e472.js";
import {
    a as te,
    t as se,
    h as ae,
    g as le,
    b as ne,
    r as re
} from "./style.d69d81d7.js";
import {
    u as ue
} from "./index.7c0d977d.js";
import {
    u as de,
    a as ce
} from "./index.ca3d31b2.js";
import {
    a as ie
} from "./scroll.4972bdba.js";
var fe = (e => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(fe || {});
const pe = e => {
        const s = o(e) ? e : [e],
            a = [];
        return s.forEach((e => {
            o(e) ? a.push(...pe(e)) : t(e) && o(e.children) ? a.push(...pe(e.children)) : a.push(e)
        })), a
    },
    me = Symbol("dialogInjectionKey"),
    ye = (e, o, t) => {
        let n = {
            offsetX: 0,
            offsetY: 0
        };
        const r = o => {
                const t = o.clientX,
                    s = o.clientY,
                    {
                        offsetX: a,
                        offsetY: l
                    } = n,
                    r = e.value.getBoundingClientRect(),
                    u = r.left,
                    d = r.top,
                    c = r.width,
                    i = r.height,
                    f = document.documentElement.clientWidth,
                    p = document.documentElement.clientHeight,
                    m = -u + a,
                    y = -d + l,
                    v = f - u - c + a,
                    b = p - d - i + l,
                    g = o => {
                        const r = Math.min(Math.max(a + o.clientX - t, m), v),
                            u = Math.min(Math.max(l + o.clientY - s, y), b);
                        n = {
                            offsetX: r,
                            offsetY: u
                        }, e.value.style.transform = `translate(${te(r)}, ${te(u)})`
                    },
                    E = () => {
                        document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", E)
                    };
                document.addEventListener("mousemove", g), document.addEventListener("mouseup", E)
            },
            u = () => {
                o.value && e.value && o.value.removeEventListener("mousedown", r)
            };
        s((() => {
            a((() => {
                t.value ? o.value && e.value && o.value.addEventListener("mousedown", r) : u()
            }))
        })), l((() => {
            u()
        }))
    },
    ve = e => {
        n(e) || se("[useLockscreen]", "You need to pass a ref param to this function");
        const o = K("popup"),
            t = r((() => o.bm("parent", "hidden")));
        if (!u || ae(document.body, t.value)) return;
        let s = 0,
            a = !1,
            l = "0";
        const i = () => {
            setTimeout((() => {
                re(document.body, t.value), a && (document.body.style.width = l)
            }), 200)
        };
        d(e, (e => {
            if (!e) return void i();
            a = !ae(document.body, t.value), a && (l = document.body.style.width), s = ie(o.namespace.value);
            const n = document.documentElement.clientHeight < document.body.scrollHeight,
                r = le(document.body, "overflowY");
            s > 0 && (n || "scroll" === r) && a && (document.body.style.width = `calc(100% - ${s}px)`), ne(document.body, t.value)
        })), c((() => i()))
    },
    be = e => {
        if (!e) return {
            onClick: i,
            onMousedown: i,
            onMouseup: i
        };
        let o = !1,
            t = !1;
        return {
            onClick: s => {
                o && t && e(s), o = t = !1
            },
            onMousedown: e => {
                o = e.target === e.currentTarget
            },
            onMouseup: e => {
                t = e.target === e.currentTarget
            }
        }
    };
const ge = f({
        name: "ElOverlay",
        props: z({
            mask: {
                type: Boolean,
                default: !0
            },
            customMaskEvent: {
                type: Boolean,
                default: !1
            },
            overlayClass: {
                type: H([String, Array, Object])
            },
            zIndex: {
                type: H([String, Number])
            }
        }),
        emits: {
            click: e => e instanceof MouseEvent
        },
        setup(e, {
            slots: o,
            emit: t
        }) {
            const s = K("overlay"),
                {
                    onClick: a,
                    onMousedown: l,
                    onMouseup: n
                } = be(e.customMaskEvent ? void 0 : e => {
                    t("click", e)
                });
            return () => e.mask ? p("div", {
                class: [s.b(), e.overlayClass],
                style: {
                    zIndex: e.zIndex
                },
                onClick: a,
                onMousedown: l,
                onMouseup: n
            }, [m(o, "default")], fe.STYLE | fe.CLASS | fe.PROPS, ["onClick", "onMouseup", "onMousedown"]) : y("div", {
                class: e.overlayClass,
                style: {
                    zIndex: e.zIndex,
                    position: "fixed",
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px"
                }
            }, [m(o, "default")])
        }
    }),
    Ee = z({
        center: {
            type: Boolean,
            default: !1
        },
        alignCenter: {
            type: Boolean,
            default: !1
        },
        closeIcon: {
            type: J
        },
        customClass: {
            type: String,
            default: ""
        },
        draggable: {
            type: Boolean,
            default: !1
        },
        fullscreen: {
            type: Boolean,
            default: !1
        },
        showClose: {
            type: Boolean,
            default: !0
        },
        title: {
            type: String,
            default: ""
        }
    }),
    he = ["aria-label"],
    Ce = ["id"],
    Se = f({
        name: "ElDialogContent"
    });
var ke = X(f({ ...Se,
    props: Ee,
    emits: {
        close: () => !0
    },
    setup(o) {
        const t = o,
            {
                t: s
            } = W(),
            {
                Close: a
            } = Q,
            {
                dialogRef: l,
                headerRef: n,
                bodyId: r,
                ns: u,
                style: d
            } = v(me),
            {
                focusTrapRef: c
            } = v(Z),
            i = ((...o) => t => {
                o.forEach((o => {
                    e(o) ? o(t) : o.value = t
                }))
            })(c, l),
            f = b((() => t.draggable));
        return ye(l, n, f), (e, o) => (g(), E("div", {
            ref: S(i),
            class: C([S(u).b(), S(u).is("fullscreen", e.fullscreen), S(u).is("draggable", S(f)), S(u).is("align-center", e.alignCenter), {
                [S(u).m("center")]: e.center
            }, e.customClass]),
            style: R(S(d)),
            tabindex: "-1"
        }, [h("header", {
            ref_key: "headerRef",
            ref: n,
            class: C(S(u).e("header"))
        }, [m(e.$slots, "header", {}, (() => [h("span", {
            role: "heading",
            class: C(S(u).e("title"))
        }, k(e.title), 3)])), e.showClose ? (g(), E("button", {
            key: 0,
            "aria-label": S(s)("el.dialog.close"),
            class: C(S(u).e("headerbtn")),
            type: "button",
            onClick: o[0] || (o[0] = o => e.$emit("close"))
        }, [p(S(U), {
            class: C(S(u).e("close"))
        }, {
            default: A((() => [(g(), M(T(e.closeIcon || S(a))))])),
            _: 1
        }, 8, ["class"])], 10, he)) : x("v-if", !0)], 2), h("div", {
            id: S(r),
            class: C(S(u).e("body"))
        }, [m(e.$slots, "default")], 10, Ce), e.$slots.footer ? (g(), E("footer", {
            key: 0,
            class: C(S(u).e("footer"))
        }, [m(e.$slots, "footer")], 2)) : x("v-if", !0)], 6))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]
]);
const Ae = z({ ...Ee,
        appendToBody: {
            type: Boolean,
            default: !1
        },
        beforeClose: {
            type: H(Function)
        },
        destroyOnClose: {
            type: Boolean,
            default: !1
        },
        closeOnClickModal: {
            type: Boolean,
            default: !0
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        },
        lockScroll: {
            type: Boolean,
            default: !0
        },
        modal: {
            type: Boolean,
            default: !0
        },
        openDelay: {
            type: Number,
            default: 0
        },
        closeDelay: {
            type: Number,
            default: 0
        },
        top: {
            type: String
        },
        modelValue: {
            type: Boolean,
            default: !1
        },
        modalClass: String,
        width: {
            type: [String, Number]
        },
        zIndex: {
            type: Number
        },
        trapFocus: {
            type: Boolean,
            default: !1
        }
    }),
    Me = {
        open: () => !0,
        opened: () => !0,
        close: () => !0,
        closed: () => !0,
        [ee]: e => L(e),
        openAutoFocus: () => !0,
        closeAutoFocus: () => !0
    },
    Te = (e, o) => {
        const t = I().emit,
            {
                nextZIndex: a
            } = ue();
        let l = "";
        const n = de(),
            r = de(),
            c = w(!1),
            i = w(!1),
            f = w(!1),
            p = w(e.zIndex || a());
        let m, y;
        const v = V("namespace", q),
            g = b((() => {
                const o = {},
                    t = `--${v.value}-dialog`;
                return e.fullscreen || (e.top && (o[`${t}-margin-top`] = e.top), e.width && (o[`${t}-width`] = te(e.width))), o
            })),
            E = b((() => e.alignCenter ? {
                display: "flex"
            } : {}));

        function h() {
            null == y || y(), null == m || m(), e.openDelay && e.openDelay > 0 ? ({
                stop: m
            } = D((() => k()), e.openDelay)) : k()
        }

        function C() {
            null == m || m(), null == y || y(), e.closeDelay && e.closeDelay > 0 ? ({
                stop: y
            } = D((() => A()), e.closeDelay)) : A()
        }

        function S() {
            e.beforeClose ? e.beforeClose((function(e) {
                e || (i.value = !0, c.value = !1)
            })) : C()
        }

        function k() {
            u && (c.value = !0)
        }

        function A() {
            c.value = !1
        }
        return e.lockScroll && ve(c), d((() => e.modelValue), (s => {
            s ? (i.value = !1, h(), f.value = !0, p.value = e.zIndex ? p.value++ : a(), F((() => {
                t("open"), o.value && (o.value.scrollTop = 0)
            }))) : c.value && C()
        })), d((() => e.fullscreen), (e => {
            o.value && (e ? (l = o.value.style.transform, o.value.style.transform = "") : o.value.style.transform = l)
        })), s((() => {
            e.modelValue && (c.value = !0, f.value = !0, h())
        })), {
            afterEnter: function() {
                t("opened")
            },
            afterLeave: function() {
                t("closed"), t(ee, !1), e.destroyOnClose && (f.value = !1)
            },
            beforeLeave: function() {
                t("close")
            },
            handleClose: S,
            onModalClick: function() {
                e.closeOnClickModal && S()
            },
            close: C,
            doClose: A,
            onOpenAutoFocus: function() {
                t("openAutoFocus")
            },
            onCloseAutoFocus: function() {
                t("closeAutoFocus")
            },
            onCloseRequested: function() {
                e.closeOnPressEscape && S()
            },
            onFocusoutPrevented: function(e) {
                var o;
                "pointer" === (null == (o = e.detail) ? void 0 : o.focusReason) && e.preventDefault()
            },
            titleId: n,
            bodyId: r,
            closed: i,
            style: g,
            overlayDialogStyle: E,
            rendered: f,
            visible: c,
            zIndex: p
        }
    },
    xe = ["aria-label", "aria-labelledby", "aria-describedby"],
    Re = f({
        name: "ElDialog",
        inheritAttrs: !1
    });
const Le = G(X(f({ ...Re,
    props: Ae,
    emits: Me,
    setup(e, {
        expose: o
    }) {
        const t = e,
            s = _();
        ce({
            scope: "el-dialog",
            from: "the title slot",
            replacement: "the header slot",
            version: "3.0.0",
            ref: "https://element-plus.org/en-US/component/dialog.html#slots"
        }, b((() => !!s.title))), ce({
            scope: "el-dialog",
            from: "custom-class",
            replacement: "class",
            version: "2.3.0",
            ref: "https://element-plus.org/en-US/component/dialog.html#attributes",
            type: "Attribute"
        }, b((() => !!t.customClass)));
        const a = K("dialog"),
            l = w(),
            n = w(),
            r = w(),
            {
                visible: u,
                titleId: d,
                bodyId: c,
                style: i,
                overlayDialogStyle: f,
                rendered: y,
                zIndex: v,
                afterEnter: E,
                afterLeave: k,
                beforeLeave: T,
                handleClose: L,
                onModalClick: F,
                onOpenAutoFocus: I,
                onCloseAutoFocus: D,
                onCloseRequested: z,
                onFocusoutPrevented: H
            } = Te(t, l);
        B(me, {
            dialogRef: l,
            headerRef: n,
            bodyId: c,
            ns: a,
            rendered: y,
            style: i
        });
        const U = be(F),
            X = b((() => t.draggable && !t.fullscreen));
        return o({
            visible: u,
            dialogContentRef: r
        }), (e, o) => (g(), M(j, {
            to: "body",
            disabled: !e.appendToBody
        }, [p(P, {
            name: "dialog-fade",
            onAfterEnter: S(E),
            onAfterLeave: S(k),
            onBeforeLeave: S(T),
            persisted: ""
        }, {
            default: A((() => [N(p(S(ge), {
                "custom-mask-event": "",
                mask: e.modal,
                "overlay-class": e.modalClass,
                "z-index": S(v)
            }, {
                default: A((() => [h("div", {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": e.title || void 0,
                    "aria-labelledby": e.title ? void 0 : S(d),
                    "aria-describedby": S(c),
                    class: C(`${S(a).namespace.value}-overlay-dialog`),
                    style: R(S(f)),
                    onClick: o[0] || (o[0] = (...e) => S(U).onClick && S(U).onClick(...e)),
                    onMousedown: o[1] || (o[1] = (...e) => S(U).onMousedown && S(U).onMousedown(...e)),
                    onMouseup: o[2] || (o[2] = (...e) => S(U).onMouseup && S(U).onMouseup(...e))
                }, [p(S(oe), {
                    loop: "",
                    trapped: S(u),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: S(I),
                    onFocusAfterReleased: S(D),
                    onFocusoutPrevented: S(H),
                    onReleaseRequested: S(z)
                }, {
                    default: A((() => [S(y) ? (g(), M(ke, O({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: r
                    }, e.$attrs, {
                        "custom-class": e.customClass,
                        center: e.center,
                        "align-center": e.alignCenter,
                        "close-icon": e.closeIcon,
                        draggable: S(X),
                        fullscreen: e.fullscreen,
                        "show-close": e.showClose,
                        title: e.title,
                        onClose: S(L)
                    }), Y({
                        header: A((() => [e.$slots.title ? m(e.$slots, "title", {
                            key: 1
                        }) : m(e.$slots, "header", {
                            key: 0,
                            close: S(L),
                            titleId: S(d),
                            titleClass: S(a).e("title")
                        })])),
                        default: A((() => [m(e.$slots, "default")])),
                        _: 2
                    }, [e.$slots.footer ? {
                        name: "footer",
                        fn: A((() => [m(e.$slots, "footer")]))
                    } : void 0]), 1040, ["custom-class", "center", "align-center", "close-icon", "draggable", "fullscreen", "show-close", "title", "onClose"])) : x("v-if", !0)])),
                    _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])], 46, xe)])),
                _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
                [$, S(u)]
            ])])),
            _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])], 8, ["disabled"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]
]));
export {
    Le as E, ge as a, ve as b, be as c, Ae as d, Me as e, Te as f, pe as g, ye as u
};