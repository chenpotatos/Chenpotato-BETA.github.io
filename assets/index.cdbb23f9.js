import {
    O as e,
    U as t,
    g as o,
    ac as r,
    a5 as a,
    Q as n,
    e as l,
    af as i,
    ab as s,
    c as p,
    o as d,
    t as f,
    J as u,
    b as c,
    i as m,
    x as b,
    j as v,
    C as y,
    ao as g
} from "./el-select.e274bb48.js";
import {
    b as h,
    u as w,
    E as S
} from "./index.742e3cb2.js";
import {
    _ as x,
    b as B,
    d as O,
    h as j,
    w as k
} from "./index.176a125e.js";
import {
    i as A
} from "./icon.8b835c88.js";
import {
    u as C
} from "./index.0e1148e8.js";
import {
    a as N
} from "./style.d69d81d7.js";
var $ = x(e({
    inheritAttrs: !1
}), [
    ["render", function(e, o, r, a, n, l) {
        return t(e.$slots, "default")
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]
]);
var _ = x(e({
    name: "ElCollectionItem",
    inheritAttrs: !1
}), [
    ["render", function(e, o, r, a, n, l) {
        return t(e.$slots, "default")
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]
]);
const R = B({
    trigger: h.trigger,
    effect: { ...w.effect,
        default: "light"
    },
    type: {
        type: O(String)
    },
    placement: {
        type: O(String),
        default: "bottom"
    },
    popperOptions: {
        type: O(Object),
        default: () => ({})
    },
    id: String,
    size: {
        type: String,
        default: ""
    },
    splitButton: Boolean,
    hideOnClick: {
        type: Boolean,
        default: !0
    },
    loop: {
        type: Boolean,
        default: !0
    },
    showTimeout: {
        type: Number,
        default: 150
    },
    hideTimeout: {
        type: Number,
        default: 150
    },
    tabindex: {
        type: O([Number, String]),
        default: 0
    },
    maxHeight: {
        type: O([Number, String]),
        default: ""
    },
    popperClass: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: !1
    },
    role: {
        type: String,
        default: "menu"
    },
    buttonProps: {
        type: O(Object)
    }
});
B({
    command: {
        type: [Object, String, Number],
        default: () => ({})
    },
    disabled: Boolean,
    divided: Boolean,
    textValue: String,
    icon: {
        type: A
    }
}), B({
    onKeydown: {
        type: O(Function)
    }
}), (e => {
    const t = `El${e}Collection`,
        s = `${t}Item`,
        p = Symbol(t),
        d = Symbol(s),
        f = { ...$,
            name: t,
            setup() {
                const e = o(null),
                    t = new Map;
                r(p, {
                    itemMap: t,
                    getItems: () => {
                        const o = l(e);
                        if (!o) return [];
                        const r = Array.from(o.querySelectorAll("[data-el-collection-item]"));
                        return [...t.values()].sort(((e, t) => r.indexOf(e.ref) - r.indexOf(t.ref)))
                    },
                    collectionRef: e
                })
            }
        },
        u = { ..._,
            name: s,
            setup(e, {
                attrs: t
            }) {
                const s = o(null),
                    f = a(p, void 0);
                r(d, {
                    collectionItemRef: s
                }), n((() => {
                    const e = l(s);
                    e && f.itemMap.set(e, {
                        ref: e,
                        ...t
                    })
                })), i((() => {
                    const e = l(s);
                    f.itemMap.delete(e)
                }))
            }
        }
})("Dropdown");
const E = B({
        trigger: h.trigger,
        placement: R.placement,
        disabled: h.disabled,
        visible: w.visible,
        transition: w.transition,
        popperOptions: R.popperOptions,
        tabindex: R.tabindex,
        content: w.content,
        popperStyle: w.popperStyle,
        popperClass: w.popperClass,
        enterable: { ...w.enterable,
            default: !0
        },
        effect: { ...w.effect,
            default: "light"
        },
        teleported: w.teleported,
        title: String,
        width: {
            type: [String, Number],
            default: 150
        },
        offset: {
            type: Number,
            default: void 0
        },
        showAfter: {
            type: Number,
            default: 0
        },
        hideAfter: {
            type: Number,
            default: 200
        },
        autoClose: {
            type: Number,
            default: 0
        },
        showArrow: {
            type: Boolean,
            default: !0
        },
        persistent: {
            type: Boolean,
            default: !0
        },
        "onUpdate:visible": {
            type: Function
        }
    }),
    U = {
        "update:visible": e => s(e),
        "before-enter": () => !0,
        "before-leave": () => !0,
        "after-enter": () => !0,
        "after-leave": () => !0
    },
    I = e({
        name: "ElPopover"
    }),
    M = e({ ...I,
        props: E,
        emits: U,
        setup(e, {
            expose: r,
            emit: a
        }) {
            const n = e,
                i = p((() => n["onUpdate:visible"])),
                s = C("popover"),
                h = o(),
                w = p((() => {
                    var e;
                    return null == (e = l(h)) ? void 0 : e.popperRef
                })),
                x = p((() => [{
                    width: N(n.width)
                }, n.popperStyle])),
                B = p((() => [s.b(), n.popperClass, {
                    [s.m("plain")]: !!n.content
                }])),
                O = p((() => n.transition === `${s.namespace.value}-fade-in-linear`)),
                j = () => {
                    a("before-enter")
                },
                k = () => {
                    a("before-leave")
                },
                A = () => {
                    a("after-enter")
                },
                $ = () => {
                    a("update:visible", !1), a("after-leave")
                };
            return r({
                popperRef: w,
                hide: () => {
                    var e;
                    null == (e = h.value) || e.hide()
                }
            }), (e, o) => (d(), f(l(S), g({
                ref_key: "tooltipRef",
                ref: h
            }, e.$attrs, {
                trigger: e.trigger,
                placement: e.placement,
                disabled: e.disabled,
                visible: e.visible,
                transition: e.transition,
                "popper-options": e.popperOptions,
                tabindex: e.tabindex,
                content: e.content,
                offset: e.offset,
                "show-after": e.showAfter,
                "hide-after": e.hideAfter,
                "auto-close": e.autoClose,
                "show-arrow": e.showArrow,
                "aria-label": e.title,
                effect: e.effect,
                enterable: e.enterable,
                "popper-class": l(B),
                "popper-style": l(x),
                teleported: e.teleported,
                persistent: e.persistent,
                "gpu-acceleration": l(O),
                "onUpdate:visible": l(i),
                onBeforeShow: j,
                onBeforeHide: k,
                onShow: A,
                onHide: $
            }), {
                content: u((() => [e.title ? (d(), c("div", {
                    key: 0,
                    class: m(l(s).e("title")),
                    role: "title"
                }, b(e.title), 3)) : v("v-if", !0), t(e.$slots, "default", {}, (() => [y(b(e.content), 1)]))])),
                default: u((() => [e.$slots.reference ? t(e.$slots, "reference", {
                    key: 0
                }) : v("v-if", !0)])),
                _: 3
            }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]))
        }
    });
const H = (e, t) => {
    const o = t.arg || t.value,
        r = null == o ? void 0 : o.popperRef;
    r && (r.triggerRef = e)
};
const F = k(x(M, [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]
]), {
    directive: j({
        mounted(e, t) {
            H(e, t)
        },
        updated(e, t) {
            H(e, t)
        }
    }, "popover")
});
export {
    F as E
};