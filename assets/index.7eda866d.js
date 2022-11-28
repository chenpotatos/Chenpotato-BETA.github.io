import {
    al as e,
    ap as a,
    O as l,
    a_ as s,
    g as t,
    a4 as n,
    am as o,
    c as i,
    w as r,
    S as c,
    Q as u,
    o as d,
    t as f,
    k as v,
    J as m,
    h as p,
    i as g,
    e as y,
    n as b,
    q as k,
    j as w,
    b as h,
    K as x,
    D as I,
    L as _,
    m as z,
    s as O,
    U as C,
    ak as j,
    aJ as L,
    aN as N,
    aq as T,
    ao as A,
    x as S,
    aa as E,
    a$ as $
} from "./el-select.e274bb48.js";
import {
    b as B,
    d as Y,
    E as D,
    _ as M,
    w as X,
    i as R
} from "./index.176a125e.js";
import {
    g as F,
    j as P,
    d as q,
    k as H,
    m as J,
    z as K,
    n as V,
    r as W,
    o as G
} from "./index.4e5ff846.js";
import {
    m as Q
} from "./typescript.72bf8adc.js";
import {
    u as U
} from "./index.14b43c35.js";
import {
    u as Z,
    m as ee
} from "./index.0e1148e8.js";
import {
    u as ae
} from "./index.7c0d977d.js";
import {
    E as le
} from "./aria.66f3f71c.js";
import {
    t as se
} from "./throttle.0dfde511.js";
import {
    u as te
} from "./index.c89b0165.js";
import {
    i as ne
} from "./position.8ddd1c03.js";
import {
    g as oe
} from "./scroll.4972bdba.js";
import "./style.d69d81d7.js";
import "./isObject.a01dee34.js";
import "./debounce.abbfdaeb.js";
const ie = B({
        urlList: {
            type: Y(Array),
            default: () => Q([])
        },
        zIndex: {
            type: Number
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        infinite: {
            type: Boolean,
            default: !0
        },
        hideOnClickModal: {
            type: Boolean,
            default: !1
        },
        teleported: {
            type: Boolean,
            default: !1
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        }
    }),
    re = {
        close: () => !0,
        switch: e => a(e)
    },
    ce = ["src"],
    ue = l({
        name: "ElImageViewer"
    });
const de = X(M(l({ ...ue,
        props: ie,
        emits: re,
        setup(l, {
            expose: T,
            emit: A
        }) {
            const S = l,
                E = {
                    CONTAIN: {
                        name: "contain",
                        icon: s(F)
                    },
                    ORIGINAL: {
                        name: "original",
                        icon: s(P)
                    }
                },
                $ = e && /firefox/i.test(window.navigator.userAgent) ? "DOMMouseScroll" : "mousewheel",
                {
                    t: B
                } = U(),
                Y = Z("image-viewer"),
                {
                    nextZIndex: M
                } = ae(),
                X = t(),
                R = t([]),
                Q = n(),
                te = t(!0),
                ne = t(S.initialIndex),
                oe = o(E.CONTAIN),
                ie = t({
                    scale: 1,
                    deg: 0,
                    offsetX: 0,
                    offsetY: 0,
                    enableTransition: !1
                }),
                re = i((() => {
                    const {
                        urlList: e
                    } = S;
                    return e.length <= 1
                })),
                ue = i((() => 0 === ne.value)),
                de = i((() => ne.value === S.urlList.length - 1)),
                fe = i((() => S.urlList[ne.value])),
                ve = i((() => {
                    const {
                        scale: e,
                        deg: a,
                        offsetX: l,
                        offsetY: s,
                        enableTransition: t
                    } = ie.value;
                    let n = l / e,
                        o = s / e;
                    switch (a % 360) {
                        case 90:
                        case -270:
                            [n, o] = [o, -n];
                            break;
                        case 180:
                        case -180:
                            [n, o] = [-n, -o];
                            break;
                        case 270:
                        case -90:
                            [n, o] = [-o, n]
                    }
                    const i = {
                        transform: `scale(${e}) rotate(${a}deg) translate(${n}px, ${o}px)`,
                        transition: t ? "transform .3s" : ""
                    };
                    return oe.value.name === E.CONTAIN.name && (i.maxWidth = i.maxHeight = "100%"), i
                })),
                me = i((() => a(S.zIndex) ? S.zIndex : M()));

            function pe() {
                Q.stop(), A("close")
            }

            function ge() {
                te.value = !1
            }

            function ye(e) {
                te.value = !1, e.target.alt = B("el.image.error")
            }

            function be(e) {
                if (te.value || 0 !== e.button || !X.value) return;
                ie.value.enableTransition = !1;
                const {
                    offsetX: a,
                    offsetY: l
                } = ie.value, s = e.pageX, t = e.pageY, n = se((e => {
                    ie.value = { ...ie.value,
                        offsetX: a + e.pageX - s,
                        offsetY: l + e.pageY - t
                    }
                })), o = N(document, "mousemove", n);
                N(document, "mouseup", (() => {
                    o()
                })), e.preventDefault()
            }

            function ke() {
                ie.value = {
                    scale: 1,
                    deg: 0,
                    offsetX: 0,
                    offsetY: 0,
                    enableTransition: !1
                }
            }

            function we() {
                if (te.value) return;
                const e = ee(E),
                    a = Object.values(E),
                    l = oe.value.name,
                    s = (a.findIndex((e => e.name === l)) + 1) % e.length;
                oe.value = E[e[s]], ke()
            }

            function he(e) {
                const a = S.urlList.length;
                ne.value = (e + a) % a
            }

            function xe() {
                ue.value && !S.infinite || he(ne.value - 1)
            }

            function Ie() {
                de.value && !S.infinite || he(ne.value + 1)
            }

            function _e(e, a = {}) {
                if (te.value) return;
                const {
                    zoomRate: l,
                    rotateDeg: s,
                    enableTransition: t
                } = {
                    zoomRate: 1.4,
                    rotateDeg: 90,
                    enableTransition: !0,
                    ...a
                };
                switch (e) {
                    case "zoomOut":
                        ie.value.scale > .2 && (ie.value.scale = Number.parseFloat((ie.value.scale / l).toFixed(3)));
                        break;
                    case "zoomIn":
                        ie.value.scale < 7 && (ie.value.scale = Number.parseFloat((ie.value.scale * l).toFixed(3)));
                        break;
                    case "clockwise":
                        ie.value.deg += s;
                        break;
                    case "anticlockwise":
                        ie.value.deg -= s
                }
                ie.value.enableTransition = t
            }
            return r(fe, (() => {
                c((() => {
                    const e = R.value[0];
                    (null == e ? void 0 : e.complete) || (te.value = !0)
                }))
            })), r(ne, (e => {
                ke(), A("switch", e)
            })), u((() => {
                var e, a;
                ! function() {
                    const e = se((e => {
                            switch (e.code) {
                                case le.esc:
                                    S.closeOnPressEscape && pe();
                                    break;
                                case le.space:
                                    we();
                                    break;
                                case le.left:
                                    xe();
                                    break;
                                case le.up:
                                    _e("zoomIn");
                                    break;
                                case le.right:
                                    Ie();
                                    break;
                                case le.down:
                                    _e("zoomOut")
                            }
                        })),
                        a = se((e => {
                            _e((e.wheelDelta ? e.wheelDelta : -e.detail) > 0 ? "zoomIn" : "zoomOut", {
                                zoomRate: 1.2,
                                enableTransition: !1
                            })
                        }));
                    Q.run((() => {
                        N(document, "keydown", e), N(document, $, a)
                    }))
                }(), null == (a = null == (e = X.value) ? void 0 : e.focus) || a.call(e)
            })), T({
                setActiveItem: he
            }), (e, a) => (d(), f(L, {
                to: "body",
                disabled: !e.teleported
            }, [v(j, {
                name: "viewer-fade",
                appear: ""
            }, {
                default: m((() => [p("div", {
                    ref_key: "wrapper",
                    ref: X,
                    tabindex: -1,
                    class: g(y(Y).e("wrapper")),
                    style: b({
                        zIndex: y(me)
                    })
                }, [p("div", {
                    class: g(y(Y).e("mask")),
                    onClick: a[0] || (a[0] = k((a => e.hideOnClickModal && pe()), ["self"]))
                }, null, 2), w(" CLOSE "), p("span", {
                    class: g([y(Y).e("btn"), y(Y).e("close")]),
                    onClick: pe
                }, [v(y(D), null, {
                    default: m((() => [v(y(q))])),
                    _: 1
                })], 2), w(" ARROW "), y(re) ? w("v-if", !0) : (d(), h(x, {
                    key: 0
                }, [p("span", {
                    class: g([y(Y).e("btn"), y(Y).e("prev"), y(Y).is("disabled", !e.infinite && y(ue))]),
                    onClick: xe
                }, [v(y(D), null, {
                    default: m((() => [v(y(H))])),
                    _: 1
                })], 2), p("span", {
                    class: g([y(Y).e("btn"), y(Y).e("next"), y(Y).is("disabled", !e.infinite && y(de))]),
                    onClick: Ie
                }, [v(y(D), null, {
                    default: m((() => [v(y(J))])),
                    _: 1
                })], 2)], 64)), w(" ACTIONS "), p("div", {
                    class: g([y(Y).e("btn"), y(Y).e("actions")])
                }, [p("div", {
                    class: g(y(Y).e("actions__inner"))
                }, [v(y(D), {
                    onClick: a[1] || (a[1] = e => _e("zoomOut"))
                }, {
                    default: m((() => [v(y(K))])),
                    _: 1
                }), v(y(D), {
                    onClick: a[2] || (a[2] = e => _e("zoomIn"))
                }, {
                    default: m((() => [v(y(V))])),
                    _: 1
                }), p("i", {
                    class: g(y(Y).e("actions__divider"))
                }, null, 2), v(y(D), {
                    onClick: we
                }, {
                    default: m((() => [(d(), f(I(y(oe).icon)))])),
                    _: 1
                }), p("i", {
                    class: g(y(Y).e("actions__divider"))
                }, null, 2), v(y(D), {
                    onClick: a[3] || (a[3] = e => _e("anticlockwise"))
                }, {
                    default: m((() => [v(y(W))])),
                    _: 1
                }), v(y(D), {
                    onClick: a[4] || (a[4] = e => _e("clockwise"))
                }, {
                    default: m((() => [v(y(G))])),
                    _: 1
                })], 2)], 2), w(" CANVAS "), p("div", {
                    class: g(y(Y).e("canvas"))
                }, [(d(!0), h(x, null, _(e.urlList, ((e, a) => z((d(), h("img", {
                    ref_for: !0,
                    ref: e => R.value[a] = e,
                    key: e,
                    src: e,
                    style: b(y(ve)),
                    class: g(y(Y).e("img")),
                    onLoad: ge,
                    onError: ye,
                    onMousedown: be
                }, null, 46, ce)), [
                    [O, a === ne.value]
                ]))), 128))], 2), C(e.$slots, "default")], 6)])),
                _: 3
            })], 8, ["disabled"]))
        }
    }), [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]
    ])),
    fe = B({
        hideOnClickModal: {
            type: Boolean,
            default: !1
        },
        src: {
            type: String,
            default: ""
        },
        fit: {
            type: String,
            values: ["", "contain", "cover", "fill", "none", "scale-down"],
            default: ""
        },
        loading: {
            type: String,
            values: ["eager", "lazy"]
        },
        lazy: {
            type: Boolean,
            default: !1
        },
        scrollContainer: {
            type: Y([String, Object])
        },
        previewSrcList: {
            type: Y(Array),
            default: () => Q([])
        },
        previewTeleported: {
            type: Boolean,
            default: !1
        },
        zIndex: {
            type: Number
        },
        initialIndex: {
            type: Number,
            default: 0
        },
        infinite: {
            type: Boolean,
            default: !0
        },
        closeOnPressEscape: {
            type: Boolean,
            default: !0
        }
    }),
    ve = {
        load: e => e instanceof Event,
        error: e => e instanceof Event,
        switch: e => a(e),
        close: () => !0,
        show: () => !0
    },
    me = ["src", "loading"],
    pe = {
        key: 0
    },
    ge = l({
        name: "ElImage",
        inheritAttrs: !1
    });
const ye = X(M(l({ ...ge,
    props: fe,
    emits: ve,
    setup(a, {
        emit: l
    }) {
        const s = a;
        let n = "";
        const {
            t: o
        } = U(), v = Z("image"), k = T(), I = te(), _ = t(), z = t(!1), O = t(!0), j = t(!1), L = t(), B = t(), Y = e && "loading" in HTMLImageElement.prototype;
        let D, M;
        const X = i((() => k.style)),
            F = i((() => {
                const {
                    fit: a
                } = s;
                return e && a ? {
                    objectFit: a
                } : {}
            })),
            P = i((() => {
                const {
                    previewSrcList: e
                } = s;
                return Array.isArray(e) && e.length > 0
            })),
            q = i((() => {
                const {
                    previewSrcList: e,
                    initialIndex: a
                } = s;
                let l = a;
                return a > e.length - 1 && (l = 0), l
            })),
            H = i((() => "eager" !== s.loading && (!Y && "lazy" === s.loading || s.lazy))),
            J = () => {
                e && (O.value = !0, z.value = !1, _.value = s.src)
            };

        function K(e) {
            O.value = !1, z.value = !1, l("load", e)
        }

        function V(e) {
            O.value = !1, z.value = !0, l("error", e)
        }

        function W() {
            ne(L.value, B.value) && (J(), ee())
        }
        const G = $(W, 200);
        async function Q() {
            var a;
            if (!e) return;
            await c();
            const {
                scrollContainer: l
            } = s;
            R(l) ? B.value = l : E(l) && "" !== l ? B.value = null != (a = document.querySelector(l)) ? a : void 0 : L.value && (B.value = oe(L.value)), B.value && (D = N(B, "scroll", G), setTimeout((() => W()), 100))
        }

        function ee() {
            e && B.value && G && (null == D || D(), B.value = void 0)
        }

        function ae(e) {
            if (e.ctrlKey) return e.deltaY < 0 || e.deltaY > 0 ? (e.preventDefault(), !1) : void 0
        }

        function le() {
            P.value && (M = N("wheel", ae, {
                passive: !1
            }), n = document.body.style.overflow, document.body.style.overflow = "hidden", j.value = !0, l("show"))
        }

        function se() {
            null == M || M(), document.body.style.overflow = n, j.value = !1, l("close")
        }

        function ie(e) {
            l("switch", e)
        }
        return r((() => s.src), (() => {
            H.value ? (O.value = !0, z.value = !1, ee(), Q()) : J()
        })), u((() => {
            H.value ? Q() : J()
        })), (e, a) => (d(), h("div", {
            ref_key: "container",
            ref: L,
            class: g([y(v).b(), e.$attrs.class]),
            style: b(y(X))
        }, [void 0 === _.value || z.value ? w("v-if", !0) : (d(), h("img", A({
            key: 0
        }, y(I), {
            src: _.value,
            loading: e.loading,
            style: y(F),
            class: [y(v).e("inner"), y(P) && y(v).e("preview"), O.value && y(v).is("loading")],
            onClick: le,
            onLoad: K,
            onError: V
        }), null, 16, me)), O.value || z.value ? (d(), h("div", {
            key: 1,
            class: g(y(v).e("wrapper"))
        }, [O.value ? C(e.$slots, "placeholder", {
            key: 0
        }, (() => [p("div", {
            class: g(y(v).e("placeholder"))
        }, null, 2)])) : z.value ? C(e.$slots, "error", {
            key: 1
        }, (() => [p("div", {
            class: g(y(v).e("error"))
        }, S(y(o)("el.image.error")), 3)])) : w("v-if", !0)], 2)) : w("v-if", !0), y(P) ? (d(), h(x, {
            key: 2
        }, [j.value ? (d(), f(y(de), {
            key: 0,
            "z-index": e.zIndex,
            "initial-index": y(q),
            infinite: e.infinite,
            "url-list": e.previewSrcList,
            "hide-on-click-modal": e.hideOnClickModal,
            teleported: e.previewTeleported,
            "close-on-press-escape": e.closeOnPressEscape,
            onClose: se,
            onSwitch: ie
        }, {
            default: m((() => [e.$slots.viewer ? (d(), h("div", pe, [C(e.$slots, "viewer")])) : w("v-if", !0)])),
            _: 3
        }, 8, ["z-index", "initial-index", "infinite", "url-list", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : w("v-if", !0)], 64)) : w("v-if", !0)], 6))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]
]));
export {
    ye as ElImage, ye as
    default, ve as imageEmits, fe as imageProps
};