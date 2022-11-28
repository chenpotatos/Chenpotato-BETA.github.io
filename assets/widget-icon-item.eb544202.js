import {
    am as e,
    aR as a,
    ap as t,
    O as o,
    g as i,
    c as n,
    e as l,
    aa as r,
    w as s,
    Q as p,
    ah as u,
    af as c,
    ac as m,
    o as d,
    b as v,
    h as _,
    t as f,
    J as g,
    m as h,
    i as E,
    q as y,
    k as D,
    s as A,
    ak as w,
    j as I,
    U as b,
    n as j,
    K as x,
    L as k,
    x as O,
    F as z,
    a5 as P,
    z as T,
    R,
    r as L,
    a as V,
    D as C,
    ao as S,
    f as M,
    _ as $,
    b3 as N,
    S as B
} from "./el-select.e274bb48.js";
import {
    _ as F,
    Y as q,
    u as H,
    s as K
} from "./main.354a692e.js"; /* empty css                  */
import {
    k as W,
    m as X,
    t as Y,
    u as J
} from "./index.4e5ff846.js";
import "./baseRequest.b881af11.js";
import {
    b as Q,
    E as U,
    _ as G,
    e as Z,
    w as ee,
    a as ae
} from "./index.176a125e.js";
import {
    u as te
} from "./index.0e1148e8.js";
import {
    g as oe
} from "./el-dialog.c73078d2.js";
import {
    d as ie
} from "./style.d69d81d7.js";
import {
    t as ne
} from "./throttle.0dfde511.js";
const le = Symbol("carouselContextKey"),
    re = (t, o) => {
        const i = {},
            n = e([]);
        return {
            children: n,
            addChild: e => {
                i[e.uid] = e, n.value = ((e, t, o) => oe(e.subTree).filter((e => {
                    var o;
                    return a(e) && (null == (o = e.type) ? void 0 : o.name) === t && !!e.component
                })).map((e => e.component.uid)).map((e => o[e])).filter((e => !!e)))(t, o, i)
            },
            removeChild: e => {
                delete i[e], n.value = n.value.filter((a => a.uid !== e))
            }
        }
    },
    se = Q({
        initialIndex: {
            type: Number,
            default: 0
        },
        height: {
            type: String,
            default: ""
        },
        trigger: {
            type: String,
            values: ["hover", "click"],
            default: "hover"
        },
        autoplay: {
            type: Boolean,
            default: !0
        },
        interval: {
            type: Number,
            default: 3e3
        },
        indicatorPosition: {
            type: String,
            values: ["", "none", "outside"],
            default: ""
        },
        indicator: {
            type: Boolean,
            default: !0
        },
        arrow: {
            type: String,
            values: ["always", "hover", "never"],
            default: "hover"
        },
        type: {
            type: String,
            values: ["", "card"],
            default: ""
        },
        loop: {
            type: Boolean,
            default: !0
        },
        direction: {
            type: String,
            values: ["horizontal", "vertical"],
            default: "horizontal"
        },
        pauseOnHover: {
            type: Boolean,
            default: !0
        }
    }),
    pe = {
        change: (e, a) => [e, a].every(t)
    },
    ue = ["onMouseenter", "onMouseleave"],
    ce = ["onMouseenter", "onClick"],
    me = {
        key: 0
    },
    de = o({
        name: "ElCarousel"
    });
var ve = G(o({ ...de,
    props: se,
    emits: pe,
    setup(a, {
        expose: t,
        emit: o
    }) {
        const P = a,
            T = te("carousel"),
            {
                children: R,
                addChild: L,
                removeChild: V
            } = re(z(), "ElCarouselItem"),
            C = i(-1),
            S = i(null),
            M = i(!1),
            $ = i(),
            N = n((() => "never" !== P.arrow && !l(K))),
            B = n((() => R.value.some((e => e.props.label.toString().length > 0)))),
            F = n((() => {
                const e = [T.b(), T.m(P.direction)];
                return l(H) && e.push(T.m("card")), e
            })),
            q = n((() => {
                const e = [T.e("indicators"), T.em("indicators", P.direction)];
                return B.value && e.push(T.em("indicators", "labels")), ("outside" === P.indicatorPosition || l(H)) && e.push(T.em("indicators", "outside")), e
            })),
            H = n((() => "card" === P.type)),
            K = n((() => "vertical" === P.direction)),
            Y = ne((e => {
                ee(e)
            }), 300, {
                trailing: !0
            }),
            J = ne((e => {
                ! function(e) {
                    "hover" === P.trigger && e !== C.value && (C.value = e)
                }(e)
            }), 300);

        function Q() {
            S.value && (clearInterval(S.value), S.value = null)
        }

        function G() {
            P.interval <= 0 || !P.autoplay || S.value || (S.value = setInterval((() => Z()), P.interval))
        }
        const Z = () => {
            C.value < R.value.length - 1 ? C.value = C.value + 1 : P.loop && (C.value = 0)
        };

        function ee(e) {
            if (r(e)) {
                const a = R.value.filter((a => a.props.name === e));
                a.length > 0 && (e = R.value.indexOf(a[0]))
            }
            if (e = Number(e), Number.isNaN(e) || e !== Math.floor(e)) return void ie("ElCarousel", "index must be integer.");
            const a = R.value.length,
                t = C.value;
            C.value = e < 0 ? P.loop ? a - 1 : 0 : e >= a ? P.loop ? 0 : a - 1 : e, t === C.value && ae(t), ve()
        }

        function ae(e) {
            R.value.forEach(((a, t) => {
                a.translateItem(t, C.value, e)
            }))
        }

        function oe() {
            M.value = !0, P.pauseOnHover && Q()
        }

        function se() {
            M.value = !1, G()
        }

        function pe(e) {
            l(K) || R.value.forEach(((a, t) => {
                e === function(e, a) {
                    var t, o, i, n;
                    const r = l(R),
                        s = r.length;
                    if (0 === s || !e.states.inStage) return !1;
                    const p = a + 1,
                        u = a - 1,
                        c = s - 1,
                        m = r[c].states.active,
                        d = r[0].states.active,
                        v = null == (o = null == (t = r[p]) ? void 0 : t.states) ? void 0 : o.active,
                        _ = null == (n = null == (i = r[u]) ? void 0 : i.states) ? void 0 : n.active;
                    return a === c && d || v ? "left" : !!(0 === a && m || _) && "right"
                }(a, t) && (a.states.hover = !0)
            }))
        }

        function de() {
            l(K) || R.value.forEach((e => {
                e.states.hover = !1
            }))
        }

        function ve() {
            Q(), G()
        }
        s((() => C.value), ((e, a) => {
            ae(a), a > -1 && o("change", e, a)
        })), s((() => P.autoplay), (e => {
            e ? G() : Q()
        })), s((() => P.loop), (() => {
            ee(C.value)
        })), s((() => P.interval), (() => {
            ve()
        })), s((() => R.value), (() => {
            R.value.length > 0 && ee(P.initialIndex)
        }));
        const _e = e();
        return p((() => {
            _e.value = u($.value, (() => {
                ae()
            })), G()
        })), c((() => {
            Q(), $.value && _e.value && _e.value.stop()
        })), m(le, {
            root: $,
            isCardType: H,
            isVertical: K,
            items: R,
            loop: P.loop,
            addItem: L,
            removeItem: V,
            setActiveItem: ee
        }), t({
            setActiveItem: ee,
            prev: function() {
                ee(C.value - 1)
            },
            next: function() {
                ee(C.value + 1)
            }
        }), (e, a) => (d(), v("div", {
            ref_key: "root",
            ref: $,
            class: E(l(F)),
            onMouseenter: y(oe, ["stop"]),
            onMouseleave: y(se, ["stop"])
        }, [_("div", {
            class: E(l(T).e("container")),
            style: j({
                height: e.height
            })
        }, [l(N) ? (d(), f(w, {
            key: 0,
            name: "carousel-arrow-left",
            persisted: ""
        }, {
            default: g((() => [h(_("button", {
                type: "button",
                class: E([l(T).e("arrow"), l(T).em("arrow", "left")]),
                onMouseenter: a[0] || (a[0] = e => pe("left")),
                onMouseleave: de,
                onClick: a[1] || (a[1] = y((e => l(Y)(C.value - 1)), ["stop"]))
            }, [D(l(U), null, {
                default: g((() => [D(l(W))])),
                _: 1
            })], 34), [
                [A, ("always" === e.arrow || M.value) && (P.loop || C.value > 0)]
            ])])),
            _: 1
        })) : I("v-if", !0), l(N) ? (d(), f(w, {
            key: 1,
            name: "carousel-arrow-right",
            persisted: ""
        }, {
            default: g((() => [h(_("button", {
                type: "button",
                class: E([l(T).e("arrow"), l(T).em("arrow", "right")]),
                onMouseenter: a[2] || (a[2] = e => pe("right")),
                onMouseleave: de,
                onClick: a[3] || (a[3] = y((e => l(Y)(C.value + 1)), ["stop"]))
            }, [D(l(U), null, {
                default: g((() => [D(l(X))])),
                _: 1
            })], 34), [
                [A, ("always" === e.arrow || M.value) && (P.loop || C.value < l(R).length - 1)]
            ])])),
            _: 1
        })) : I("v-if", !0), b(e.$slots, "default")], 6), "none" !== e.indicatorPosition ? (d(), v("ul", {
            key: 0,
            class: E(l(q))
        }, [(d(!0), v(x, null, k(l(R), ((a, t) => (d(), v("li", {
            key: t,
            class: E([l(T).e("indicator"), l(T).em("indicator", e.direction), l(T).is("active", t === C.value)]),
            onMouseenter: e => l(J)(t),
            onClick: y((e => function(e) {
                C.value = e
            }(t)), ["stop"])
        }, [_("button", {
            class: E(l(T).e("button"))
        }, [l(B) ? (d(), v("span", me, O(a.props.label), 1)) : I("v-if", !0)], 2)], 42, ce)))), 128))], 2)) : I("v-if", !0)], 42, ue))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]
]);
const _e = Q({
        name: {
            type: String,
            default: ""
        },
        label: {
            type: [String, Number],
            default: ""
        }
    }),
    fe = o({
        name: "ElCarouselItem"
    });
var ge = G(o({ ...fe,
    props: _e,
    setup(e) {
        const a = e,
            t = te("carousel"),
            o = P(le),
            r = z();
        o || ie("ElCarouselItem", "usage: <el-carousel></el-carousel-item></el-carousel>"), r || ie("ElCarouselItem", "compositional hook can only be invoked inside setups");
        const s = i(!1),
            u = i(0),
            c = i(1),
            m = i(!1),
            _ = i(!1),
            f = i(!1),
            g = i(!1),
            {
                isCardType: y,
                isVertical: D
            } = o,
            w = n((() => ({
                transform: [`${"translate"+(l(D)?"Y":"X")}(${l(u)}px)`, `scale(${l(c)})`].join(" ")
            })));
        const x = (e, a, t) => {
            var i;
            const n = l(y),
                r = null != (i = o.items.value.length) ? i : Number.NaN,
                s = e === a;
            n || Z(t) || (g.value = s || e === t), !s && r > 2 && o.loop && (e = function(e, a, t) {
                const o = t - 1,
                    i = t / 2;
                return 0 === a && e === o ? -1 : a === o && 0 === e ? t : e < a - 1 && a - e >= i ? t + 1 : e > a + 1 && e - a >= i ? -2 : e
            }(e, a, r));
            const p = l(D);
            m.value = s, n ? (p && ie("Carousel", "vertical direction is not supported for card mode"), f.value = Math.round(Math.abs(e - a)) <= 1, u.value = function(e, a) {
                var t;
                const i = (null == (t = o.root.value) ? void 0 : t.offsetWidth) || 0;
                return f.value ? i * (1.17 * (e - a) + 1) / 4 : e < a ? -1.83 * i / 4 : 3.83 * i / 4
            }(e, a), c.value = l(m) ? 1 : .83) : u.value = function(e, a, t) {
                const i = o.root.value;
                return i ? ((t ? i.offsetHeight : i.offsetWidth) || 0) * (e - a) : 0
            }(e, a, p), _.value = !0
        };

        function k() {
            if (o && l(y)) {
                const e = o.items.value.findIndex((({
                    uid: e
                }) => e === r.uid));
                o.setActiveItem(e)
            }
        }
        return p((() => {
            o.addItem({
                props: a,
                states: T({
                    hover: s,
                    translate: u,
                    scale: c,
                    active: m,
                    ready: _,
                    inStage: f,
                    animating: g
                }),
                uid: r.uid,
                translateItem: x
            })
        })), R((() => {
            o.removeItem(r.uid)
        })), (e, a) => h((d(), v("div", {
            class: E([l(t).e("item"), l(t).is("active", m.value), l(t).is("in-stage", f.value), l(t).is("hover", s.value), l(t).is("animating", g.value), {
                [l(t).em("item", "card")]: l(y)
            }]),
            style: j(l(w)),
            onClick: k
        }, [l(y) ? h((d(), v("div", {
            key: 0,
            class: E(l(t).e("mask"))
        }, null, 2)), [
            [A, !m.value]
        ]) : I("v-if", !0), b(e.$slots, "default")], 6)), [
            [A, _.value]
        ])
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]
]);
const he = ee(ve, {
        CarouselItem: ge
    }),
    Ee = ae(ge);
var ye = {};
Object.defineProperty(ye, "__esModule", {
    value: !0
});
const De = L,
    Ae = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    we = [(0, De.createElementVNode)("path", {
        d: "M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23c.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59c-1.81-1.37-2-3.34-1.84-4.75c.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54c2.43.31 5.06-.14 6.95-1.87c2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31c.33-1.43-.96-2.83-.09-5.09c.33 1.87 3.27 3.04 3.27 5.08c.08 2.53-2.66 4.7-5.56 2.32z",
        fill: "currentColor"
    }, null, -1)];
var Ie = ye.default = (0, De.defineComponent)({
    name: "LocalFireDepartmentFilled",
    render: function(e, a) {
        return (0, De.openBlock)(), (0, De.createElementBlock)("svg", Ae, we)
    }
});
const be = {
        class: "app-icon-panel-body"
    },
    je = {
        key: 0,
        class: "app-icon-panel-title f12"
    },
    xe = V({
        __name: "d-icon-panel",
        props: {
            size: {
                type: String,
                default: "2x2"
            },
            title: String
        },
        setup(e) {
            const a = e;
            return (t, o) => (d(), v("div", {
                class: E(["app-icon-panel", `icon-size-${a.size}`]),
                style: j(`margin-bottom:${e.title?"20px":0}`)
            }, [_("div", be, [b(t.$slots, "default", {}, void 0, !0)]), e.title ? (d(), v("h5", je, O(a.title), 1)) : I("v-if", !0)], 6))
        }
    }, [
        ["__scopeId", "data-v-cf115b6e"],
        ["__file", "D:/gitee/new-tab/src/components/d-icon-panel.vue"]
    ]),
    ke = ["src", "alt"],
    Oe = {
        name: "widgetIconItemComponent"
    },
    ze = V(Object.assign(Oe, {
        props: {
            row: Object,
            size: String
        },
        emits: ["add-click"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                o = e => {
                    let a = e.component,
                        t = e.config && e.config.icon || "",
                        o = a.replace("app-", "");
                    return M({
                        loader: () => F(Object.assign({
                            "../../DialogApp/app/bookmarks/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.l))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/calendar/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.m))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/clock/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.n))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/countdown/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.p))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/daysMatter/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.q))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/daysMatter/icon/icon2.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.r))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/daysMatter/icon/icon3.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.t))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/eat/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.v))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/habit/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.w))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/ip/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.x))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/jikipedia/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.y))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/laborer11/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.z))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/lusun/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.A))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/movieCalendar/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.B))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/multiavatar/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.E))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/notes/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.F))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/remai/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.G))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/sport/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.H))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/stock/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.I))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/todayEnglish/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.J))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/todayShici/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.K))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/todo/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.M))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/topsearch/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.N))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/uppercase/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.O))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/vgn/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.Q))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/wallpaper/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.R))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/weather/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.T))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/worldClock/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.U))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/xiayigejiaqi/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.V))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/xyzrank/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.W))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url),
                            "../../DialogApp/app/yiyan/icon/icon.vue": () => $((() =>
                                    import ("./main.354a692e.js").then((e => e.X))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                                import.meta.url)
                        }), `../../DialogApp/app/${o}/icon/icon${t}.vue`),
                        errorComponent: q,
                        suspensible: !0
                    })
                };
            return (a, i) => (d(), f(xe, {
                style: {
                    "border-radius": "16px",
                    "--boxShadow": "0 4px 32px 0 rgba(0, 0, 0, 0.15)"
                },
                class: "d-pointer d-reactive",
                size: t.size
            }, {
                default: g((() => [I(" asyncLoadIcon(row.component) \r\n    `${row.component}-icon`\r\n    "), "component" == e.row.type ? (d(), f(C(o(e.row)), S({
                    key: 0,
                    size: t.size
                }, a.$attrs), null, 16, ["size"])) : "icon" == e.row.type ? (d(), v("img", {
                    key: 1,
                    class: "app-item-img",
                    style: j(`--bgColor:${e.row.backgroundColor}`),
                    src: e.row.src,
                    alt: e.row.name
                }, null, 12, ke)) : I("v-if", !0)])),
                _: 1
            }, 8, ["size"]))
        }
    }), [
        ["__scopeId", "data-v-4594afd2"],
        ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/addApp/widget-icon-item-component.vue"]
    ]),
    Pe = ["onClick"],
    Te = {
        name: "widgetIconItem",
        components: {
            LocalFireDepartmentFilled: Ie
        }
    },
    Re = V(Object.assign(Te, {
        props: {
            row: Object,
            data: Object,
            height: {
                type: String,
                default: "200px"
            },
            initSize: {
                type: String,
                default: "2x2"
            }
        },
        emits: ["addToDesk", "update:initSize"],
        setup(e, {
            emit: a
        }) {
            const t = e,
                o = i(null),
                r = T(N(o)),
                p = i(!1),
                u = [{
                    size: "1x1",
                    show: !1
                }, {
                    size: "1x2",
                    show: !1
                }, {
                    size: "2x1",
                    show: !1
                }, {
                    size: "2x2",
                    show: !1
                }, {
                    size: "2x4",
                    show: !1
                }];
            s((() => t.initSize), (e => {
                let a = u.findIndex((a => a.size == e));
                B((() => {
                    console.log(11), o.value.setActiveItem(a)
                }))
            }));
            const c = n((() => (u.findIndex((e => e.size == t.initSize)), u.findIndex((e => e.size == t.initSize))))),
                m = n((() => ({
                    transition: ".3s ease-out all",
                    transform: `rotateX(${20*r.roll}deg) rotateY(${20*r.tilt}deg)`
                })));
            H();
            const w = {
                "1x1": 100,
                "1x2": 200,
                "2x1": 200,
                "2x2": 400,
                "2x4": 800
            };

            function b(e) {
                u.forEach((e => {
                    e.show = !0
                }));
                let o = u[e];
                a("update:initSize", o.size), t.row.size = o.size
            }
            return (t, i) => (d(), f(l(he), {
                class: "widget-icon-carousel",
                "default-index": 3,
                "indicator-position": "outside",
                autoplay: !1,
                height: e.height,
                "initial-index": l(c),
                ref_key: "containerRef",
                ref: o,
                onChange: b,
                trigger: "click"
            }, {
                default: g((() => [(d(!0), v(x, null, k(l(u), ((t, o) => (d(), f(l(Ee), {
                    key: t.size
                }, {
                    default: g((() => {
                        return [_("div", {
                            class: "widget-icon-item-wrap d-flex-center hfull wfull",
                            style: j((n = t.size, `perspective: ${w[n]}px;`)),
                            onMouseenter: i[1] || (i[1] = e => p.value = !1)
                        }, [_("div", {
                            style: j(l(m)),
                            onClick: i[0] || (i[0] = a => function(e) {
                                K(e)
                            }(e.row))
                        }, [h(_("i", {
                            title: "添加",
                            class: E(["icon-add d-icon", {
                                isAdd: p.value
                            }]),
                            onClick: y((o => function(e, t) {
                                e.size = t || e.size || "2x2", p.value = !0, a("addToDesk", e, t)
                            }(e.row, t.size)), ["stop"])
                        }, [D(l(Y), {
                            class: "icon close",
                            style: {
                                transform: "rotate(45deg)"
                            }
                        }), D(l(J), {
                            class: "icon select"
                        })], 10, Pe), [
                            [A, e.row.name]
                        ]), t.show || l(c) === o ? (d(), f(ze, {
                            key: 0,
                            row: e.row,
                            size: t.size,
                            data: e.data
                        }, null, 8, ["row", "size", "data"])) : I("v-if", !0)], 4)], 36)];
                        var n
                    })),
                    _: 2
                }, 1024)))), 128))])),
                _: 1
            }, 8, ["height", "initial-index"]))
        }
    }), [
        ["__scopeId", "data-v-0b94c619"],
        ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/addApp/widget-icon-item.vue"]
    ]);
export {
    xe as D, Ie as _, Re as w
};