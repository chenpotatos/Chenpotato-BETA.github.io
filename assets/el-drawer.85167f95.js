import {
    O as e,
    c as s,
    g as a,
    W as t,
    o as l,
    t as o,
    k as r,
    J as i,
    m as d,
    h as n,
    i as f,
    n as c,
    q as p,
    b as m,
    U as u,
    x as b,
    j as y,
    s as v,
    ak as h,
    aJ as w
} from "./el-select.e274bb48.js";
import {
    d as k
} from "./index.4e5ff846.js";
import {
    d as C,
    e as E,
    a as R,
    f as x
} from "./el-dialog.c73078d2.js";
import {
    b as j,
    E as z,
    _ as S,
    w as g
} from "./index.176a125e.js";
import {
    E as I
} from "./focus-trap.e600e472.js";
import {
    a as L
} from "./index.ca3d31b2.js";
import {
    u as $
} from "./index.0e1148e8.js";
import {
    u as _
} from "./index.14b43c35.js";
import {
    a as A
} from "./style.d69d81d7.js";
const B = e({
        name: "ElDrawer",
        components: {
            ElOverlay: R,
            ElFocusTrap: I,
            ElIcon: z,
            Close: k
        },
        props: j({ ...C,
            direction: {
                type: String,
                default: "rtl",
                values: ["ltr", "rtl", "ttb", "btt"]
            },
            size: {
                type: [String, Number],
                default: "30%"
            },
            withHeader: {
                type: Boolean,
                default: !0
            },
            modalFade: {
                type: Boolean,
                default: !0
            }
        }),
        emits: E,
        setup(e, {
            slots: t
        }) {
            L({
                scope: "el-drawer",
                from: "the title slot",
                replacement: "the header slot",
                version: "3.0.0",
                ref: "https://element-plus.org/en-US/component/drawer.html#slots"
            }, s((() => !!t.title)));
            const l = a(),
                o = a(),
                r = $("drawer"),
                {
                    t: i
                } = _(),
                d = s((() => "rtl" === e.direction || "ltr" === e.direction)),
                n = s((() => A(e.size)));
            return { ...x(e, l),
                drawerRef: l,
                focusStartRef: o,
                isHorizontal: d,
                drawerSize: n,
                ns: r,
                t: i
            }
        }
    }),
    q = ["aria-label", "aria-labelledby", "aria-describedby"],
    H = ["id"],
    T = ["aria-label"],
    D = ["id"];
const O = g(S(B, [
    ["render", function(e, s, a, k, C, E) {
        const R = t("close"),
            x = t("el-icon"),
            j = t("el-focus-trap"),
            z = t("el-overlay");
        return l(), o(w, {
            to: "body",
            disabled: !e.appendToBody
        }, [r(h, {
            name: e.ns.b("fade"),
            onAfterEnter: e.afterEnter,
            onAfterLeave: e.afterLeave,
            onBeforeLeave: e.beforeLeave,
            persisted: ""
        }, {
            default: i((() => [d(r(z, {
                mask: e.modal,
                "overlay-class": e.modalClass,
                "z-index": e.zIndex,
                onClick: e.onModalClick
            }, {
                default: i((() => [r(j, {
                    loop: "",
                    trapped: e.visible,
                    "focus-trap-el": e.drawerRef,
                    "focus-start-el": e.focusStartRef,
                    onReleaseRequested: e.onCloseRequested
                }, {
                    default: i((() => [n("div", {
                        ref: "drawerRef",
                        "aria-modal": "true",
                        "aria-label": e.title || void 0,
                        "aria-labelledby": e.title ? void 0 : e.titleId,
                        "aria-describedby": e.bodyId,
                        class: f([e.ns.b(), e.direction, e.visible && "open", e.customClass]),
                        style: c(e.isHorizontal ? "width: " + e.drawerSize : "height: " + e.drawerSize),
                        role: "dialog",
                        onClick: s[1] || (s[1] = p((() => {}), ["stop"]))
                    }, [n("span", {
                        ref: "focusStartRef",
                        class: f(e.ns.e("sr-focus")),
                        tabindex: "-1"
                    }, null, 2), e.withHeader ? (l(), m("header", {
                        key: 0,
                        class: f(e.ns.e("header"))
                    }, [e.$slots.title ? u(e.$slots, "title", {
                        key: 1
                    }, (() => [y(" DEPRECATED SLOT ")])) : u(e.$slots, "header", {
                        key: 0,
                        close: e.handleClose,
                        titleId: e.titleId,
                        titleClass: e.ns.e("title")
                    }, (() => [e.$slots.title ? y("v-if", !0) : (l(), m("span", {
                        key: 0,
                        id: e.titleId,
                        role: "heading",
                        class: f(e.ns.e("title"))
                    }, b(e.title), 11, H))])), e.showClose ? (l(), m("button", {
                        key: 2,
                        "aria-label": e.t("el.drawer.close"),
                        class: f(e.ns.e("close-btn")),
                        type: "button",
                        onClick: s[0] || (s[0] = (...s) => e.handleClose && e.handleClose(...s))
                    }, [r(x, {
                        class: f(e.ns.e("close"))
                    }, {
                        default: i((() => [r(R)])),
                        _: 1
                    }, 8, ["class"])], 10, T)) : y("v-if", !0)], 2)) : y("v-if", !0), e.rendered ? (l(), m("div", {
                        key: 1,
                        id: e.bodyId,
                        class: f(e.ns.e("body"))
                    }, [u(e.$slots, "default")], 10, D)) : y("v-if", !0), e.$slots.footer ? (l(), m("div", {
                        key: 2,
                        class: f(e.ns.e("footer"))
                    }, [u(e.$slots, "footer")], 2)) : y("v-if", !0)], 14, q)])),
                    _: 3
                }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])])),
                _: 3
            }, 8, ["mask", "overlay-class", "z-index", "onClick"]), [
                [v, e.visible]
            ])])),
            _: 3
        }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])], 8, ["disabled"])
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]
]));
export {
    O as E
};