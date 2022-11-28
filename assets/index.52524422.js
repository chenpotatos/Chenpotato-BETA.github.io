import {
    O as e,
    a5 as l,
    g as a,
    c as t,
    af as s,
    aN as r,
    ar as o,
    o as n,
    t as i,
    J as u,
    m as c,
    h as v,
    i as m,
    e as f,
    n as p,
    s as d,
    ak as h,
    al as y,
    b as g,
    k as b,
    K as w,
    ap as S,
    w as z,
    ah as x,
    S as E,
    ac as _,
    z as k,
    Q as L,
    ag as T,
    U as H,
    D as B,
    j as $,
    at as j
} from "./el-select.e274bb48.js";
import {
    b as C,
    _ as N,
    d as A,
    w as M
} from "./index.176a125e.js";
import {
    u as R
} from "./index.0e1148e8.js";
import {
    t as W,
    a as X,
    d as Y
} from "./style.d69d81d7.js";
const K = Symbol("scrollbarContextKey"),
    O = {
        vertical: {
            offset: "offsetHeight",
            scroll: "scrollTop",
            scrollSize: "scrollHeight",
            size: "height",
            key: "vertical",
            axis: "Y",
            client: "clientY",
            direction: "top"
        },
        horizontal: {
            offset: "offsetWidth",
            scroll: "scrollLeft",
            scrollSize: "scrollWidth",
            size: "width",
            key: "horizontal",
            axis: "X",
            client: "clientX",
            direction: "left"
        }
    },
    P = C({
        vertical: Boolean,
        size: String,
        move: Number,
        ratio: {
            type: Number,
            required: !0
        },
        always: Boolean
    });
var q = N(e({
    __name: "thumb",
    props: P,
    setup(e) {
        const g = e,
            b = l(K),
            w = R("scrollbar");
        b || W("Thumb", "can not inject scrollbar context");
        const S = a(),
            z = a(),
            x = a({}),
            E = a(!1);
        let _ = !1,
            k = !1,
            L = y ? document.onselectstart : null;
        const T = t((() => O[g.vertical ? "vertical" : "horizontal"])),
            H = t((() => (({
                move: e,
                size: l,
                bar: a
            }) => ({
                [a.size]: l,
                transform: `translate${a.axis}(${e}%)`
            }))({
                size: g.size,
                move: g.move,
                bar: T.value
            }))),
            B = t((() => S.value[T.value.offset] ** 2 / b.wrapElement[T.value.scrollSize] / g.ratio / z.value[T.value.offset])),
            $ = e => {
                var l;
                if (e.stopPropagation(), e.ctrlKey || [1, 2].includes(e.button)) return;
                null == (l = window.getSelection()) || l.removeAllRanges(), C(e);
                const a = e.currentTarget;
                a && (x.value[T.value.axis] = a[T.value.offset] - (e[T.value.client] - a.getBoundingClientRect()[T.value.direction]))
            },
            j = e => {
                if (!z.value || !S.value || !b.wrapElement) return;
                const l = 100 * (Math.abs(e.target.getBoundingClientRect()[T.value.direction] - e[T.value.client]) - z.value[T.value.offset] / 2) * B.value / S.value[T.value.offset];
                b.wrapElement[T.value.scroll] = l * b.wrapElement[T.value.scrollSize] / 100
            },
            C = e => {
                e.stopImmediatePropagation(), _ = !0, document.addEventListener("mousemove", N), document.addEventListener("mouseup", A), L = document.onselectstart, document.onselectstart = () => !1
            },
            N = e => {
                if (!S.value || !z.value) return;
                if (!1 === _) return;
                const l = x.value[T.value.axis];
                if (!l) return;
                const a = 100 * (-1 * (S.value.getBoundingClientRect()[T.value.direction] - e[T.value.client]) - (z.value[T.value.offset] - l)) * B.value / S.value[T.value.offset];
                b.wrapElement[T.value.scroll] = a * b.wrapElement[T.value.scrollSize] / 100
            },
            A = () => {
                _ = !1, x.value[T.value.axis] = 0, document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", A), M(), k && (E.value = !1)
            };
        s((() => {
            M(), document.removeEventListener("mouseup", A)
        }));
        const M = () => {
            document.onselectstart !== L && (document.onselectstart = L)
        };
        return r(o(b, "scrollbarElement"), "mousemove", (() => {
            k = !1, E.value = !!g.size
        })), r(o(b, "scrollbarElement"), "mouseleave", (() => {
            k = !0, E.value = _
        })), (e, l) => (n(), i(h, {
            name: f(w).b("fade"),
            persisted: ""
        }, {
            default: u((() => [c(v("div", {
                ref_key: "instance",
                ref: S,
                class: m([f(w).e("bar"), f(w).is(f(T).key)]),
                onMousedown: j
            }, [v("div", {
                ref_key: "thumb",
                ref: z,
                class: m(f(w).e("thumb")),
                style: p(f(H)),
                onMousedown: $
            }, null, 38)], 34), [
                [d, e.always || E.value]
            ])])),
            _: 1
        }, 8, ["name"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]
]);
var D = N(e({
    __name: "bar",
    props: C({
        always: {
            type: Boolean,
            default: !0
        },
        width: String,
        height: String,
        ratioX: {
            type: Number,
            default: 1
        },
        ratioY: {
            type: Number,
            default: 1
        }
    }),
    setup(e, {
        expose: l
    }) {
        const t = e,
            s = a(0),
            r = a(0);
        return l({
            handleScroll: e => {
                if (e) {
                    const l = e.offsetHeight - 4,
                        a = e.offsetWidth - 4;
                    r.value = 100 * e.scrollTop / l * t.ratioY, s.value = 100 * e.scrollLeft / a * t.ratioX
                }
            }
        }), (e, l) => (n(), g(w, null, [b(q, {
            move: s.value,
            ratio: e.ratioX,
            size: e.width,
            always: e.always
        }, null, 8, ["move", "ratio", "size", "always"]), b(q, {
            move: r.value,
            ratio: e.ratioY,
            size: e.height,
            vertical: "",
            always: e.always
        }, null, 8, ["move", "ratio", "size", "always"])], 64))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]
]);
const I = C({
        height: {
            type: [String, Number],
            default: ""
        },
        maxHeight: {
            type: [String, Number],
            default: ""
        },
        native: Boolean,
        wrapStyle: {
            type: A([String, Object, Array]),
            default: ""
        },
        wrapClass: {
            type: [String, Array],
            default: ""
        },
        viewClass: {
            type: [String, Array],
            default: ""
        },
        viewStyle: {
            type: [String, Array, Object],
            default: ""
        },
        noresize: Boolean,
        tag: {
            type: String,
            default: "div"
        },
        always: Boolean,
        minSize: {
            type: Number,
            default: 20
        }
    }),
    J = {
        scroll: ({
            scrollTop: e,
            scrollLeft: l
        }) => [e, l].every(S)
    },
    Q = e({
        name: "ElScrollbar"
    });
const U = M(N(e({ ...Q,
    props: I,
    emits: J,
    setup(e, {
        expose: l,
        emit: s
    }) {
        const o = e,
            c = R("scrollbar");
        let d, h;
        const y = a(),
            b = a(),
            w = a(),
            C = a("0"),
            N = a("0"),
            A = a(),
            M = a(1),
            W = a(1),
            O = t((() => {
                const e = {};
                return o.height && (e.height = X(o.height)), o.maxHeight && (e.maxHeight = X(o.maxHeight)), [o.wrapStyle, e]
            })),
            P = () => {
                var e;
                b.value && (null == (e = A.value) || e.handleScroll(b.value), s("scroll", {
                    scrollTop: b.value.scrollTop,
                    scrollLeft: b.value.scrollLeft
                }))
            };
        const q = () => {
            if (!b.value) return;
            const e = b.value.offsetHeight - 4,
                l = b.value.offsetWidth - 4,
                a = e ** 2 / b.value.scrollHeight,
                t = l ** 2 / b.value.scrollWidth,
                s = Math.max(a, o.minSize),
                r = Math.max(t, o.minSize);
            M.value = a / (e - a) / (s / (e - s)), W.value = t / (l - t) / (r / (l - r)), N.value = s + 4 < e ? `${s}px` : "", C.value = r + 4 < l ? `${r}px` : ""
        };
        return z((() => o.noresize), (e => {
            e ? (null == d || d(), null == h || h()) : (({
                stop: d
            } = x(w, q)), h = r("resize", q))
        }), {
            immediate: !0
        }), z((() => [o.maxHeight, o.height]), (() => {
            o.native || E((() => {
                var e;
                q(), b.value && (null == (e = A.value) || e.handleScroll(b.value))
            }))
        })), _(K, k({
            scrollbarElement: y,
            wrapElement: b
        })), L((() => {
            o.native || E((() => {
                q()
            }))
        })), T((() => q())), l({
            wrap$: b,
            update: q,
            scrollTo: function(e, l) {
                j(e) ? b.value.scrollTo(e) : S(e) && S(l) && b.value.scrollTo(e, l)
            },
            setScrollTop: e => {
                S(e) ? b.value.scrollTop = e : Y("ElScrollbar", "value must be a number")
            },
            setScrollLeft: e => {
                S(e) ? b.value.scrollLeft = e : Y("ElScrollbar", "value must be a number")
            },
            handleScroll: P
        }), (e, l) => (n(), g("div", {
            ref_key: "scrollbar$",
            ref: y,
            class: m(f(c).b())
        }, [v("div", {
            ref_key: "wrap$",
            ref: b,
            class: m([e.wrapClass, f(c).e("wrap"), {
                [f(c).em("wrap", "hidden-default")]: !e.native
            }]),
            style: p(f(O)),
            onScroll: P
        }, [(n(), i(B(e.tag), {
            ref_key: "resize$",
            ref: w,
            class: m([f(c).e("view"), e.viewClass]),
            style: p(e.viewStyle)
        }, {
            default: u((() => [H(e.$slots, "default")])),
            _: 3
        }, 8, ["class", "style"]))], 38), e.native ? $("v-if", !0) : (n(), i(D, {
            key: 0,
            ref_key: "barRef",
            ref: A,
            height: N.value,
            width: C.value,
            always: e.always,
            "ratio-x": W.value,
            "ratio-y": M.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))], 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]
]));
export {
    U as E
};