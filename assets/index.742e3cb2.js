import {
    c as e,
    ae as t,
    w as n,
    Q as r,
    F as o,
    al as a,
    ab as i,
    aE as s,
    aF as l,
    e as p,
    ac as u,
    O as f,
    g as c,
    U as d,
    a5 as v,
    af as m,
    o as g,
    b as h,
    i as b,
    as as y,
    m as w,
    aG as x,
    at as O,
    K as E,
    a7 as A,
    aH as k,
    k as R,
    aI as j,
    t as T,
    J as C,
    ao as B,
    j as M,
    n as S,
    a9 as P,
    ar as D,
    s as L,
    ak as _,
    aJ as F,
    aK as H,
    aL as I,
    aM as W,
    x as $
} from "./el-select.e274bb48.js";
import {
    c as N,
    d as q,
    b as z,
    _ as V,
    i as K,
    w as U,
    e as J
} from "./index.176a125e.js";
import {
    b as X,
    d as Y,
    u as G
} from "./index.0e1148e8.js";
import {
    E as Q
} from "./aria.66f3f71c.js";
import {
    d as Z
} from "./style.d69d81d7.js";
import {
    i as ee,
    E as te
} from "./focus-trap.e600e472.js";
import {
    a as ne
} from "./index.8720847e.js";
import {
    u as re
} from "./index.7c0d977d.js";
import {
    u as oe
} from "./index.ca3d31b2.js";
const ae = (e, t, {
        checkForDefaultPrevented: n = !0
    } = {}) => r => {
        const o = null == e ? void 0 : e(r);
        if (!1 === n || !o) return null == t ? void 0 : t(r)
    },
    ie = () => Math.floor(1e4 * Math.random()),
    se = Symbol("popper"),
    le = Symbol("popperContent"),
    pe = Symbol("elTooltip"),
    ue = N({
        type: q(Boolean),
        default: null
    }),
    fe = N({
        type: q(Function)
    });
let ce;
const de = `${X("namespace",Y).value}-popper-container-${ie()}`,
    ve = `#${de}`,
    me = () => {
        l((() => {
            a && (ce && document.body.querySelector(ve) || (ce = (() => {
                const e = document.createElement("div");
                return e.id = de, document.body.appendChild(e), e
            })()))
        }))
    },
    ge = z({
        showAfter: {
            type: Number,
            default: 0
        },
        hideAfter: {
            type: Number,
            default: 200
        }
    }),
    he = ({
        showAfter: e,
        hideAfter: t,
        open: n,
        close: r
    }) => {
        const {
            registerTimeout: o
        } = function() {
            let e;
            const t = () => window.clearTimeout(e);
            return s((() => t())), {
                registerTimeout: (n, r) => {
                    t(), e = window.setTimeout(n, r)
                },
                cancelTimeout: t
            }
        }();
        return {
            onOpen: t => {
                o((() => {
                    n(t)
                }), p(e))
            },
            onClose: e => {
                o((() => {
                    r(e)
                }), p(t))
            }
        }
    },
    be = Symbol("elForwardRef"),
    ye = z({
        role: {
            type: String,
            values: ["dialog", "grid", "group", "listbox", "menu", "navigation", "tooltip", "tree"],
            default: "tooltip"
        }
    }),
    we = f({
        name: "ElPopperRoot",
        inheritAttrs: !1
    });
var xe = V(f({ ...we,
    props: ye,
    setup(t, {
        expose: n
    }) {
        const r = t,
            o = {
                triggerRef: c(),
                popperInstanceRef: c(),
                contentRef: c(),
                referenceRef: c(),
                role: e((() => r.role))
            };
        return n(o), u(se, o), (e, t) => d(e.$slots, "default")
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]
]);
const Oe = z({
        arrowOffset: {
            type: Number,
            default: 5
        }
    }),
    Ee = f({
        name: "ElPopperArrow",
        inheritAttrs: !1
    });
var Ae = V(f({ ...Ee,
    props: Oe,
    setup(e, {
        expose: t
    }) {
        const r = e,
            o = G("popper"),
            {
                arrowOffset: a,
                arrowRef: i
            } = v(le, void 0);
        return n((() => r.arrowOffset), (e => {
            a.value = e
        })), m((() => {
            i.value = void 0
        })), t({
            arrowRef: i
        }), (e, t) => (g(), h("span", {
            ref_key: "arrowRef",
            ref: i,
            class: b(p(o).e("arrow")),
            "data-popper-arrow": ""
        }, null, 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]
]);
const ke = "ElOnlyChild",
    Re = f({
        name: ke,
        setup(e, {
            slots: t,
            attrs: n
        }) {
            var r;
            const o = v(be),
                a = (i = null != (r = null == o ? void 0 : o.setForwardRef) ? r : y, {
                    mounted(e) {
                        i(e)
                    },
                    updated(e) {
                        i(e)
                    },
                    unmounted() {
                        i(null)
                    }
                });
            var i;
            return () => {
                var e;
                const r = null == (e = t.default) ? void 0 : e.call(t, n);
                if (!r) return null;
                if (r.length > 1) return Z(ke, "requires exact only one valid child."), null;
                const o = je(r);
                return o ? w(x(o, n), [
                    [a]
                ]) : (Z(ke, "no valid child node found"), null)
            }
        }
    });

function je(e) {
    if (!e) return null;
    const t = e;
    for (const n of t) {
        if (O(n)) switch (n.type) {
            case k:
                continue;
            case A:
            case "svg":
                return Te(n);
            case E:
                return je(n.children);
            default:
                return n
        }
        return Te(n)
    }
    return null
}

function Te(e) {
    const t = G("only-child");
    return R("span", {
        class: t.e("content")
    }, [e])
}
const Ce = z({
        virtualRef: {
            type: q(Object)
        },
        virtualTriggering: Boolean,
        onMouseenter: {
            type: q(Function)
        },
        onMouseleave: {
            type: q(Function)
        },
        onClick: {
            type: q(Function)
        },
        onKeydown: {
            type: q(Function)
        },
        onFocus: {
            type: q(Function)
        },
        onBlur: {
            type: q(Function)
        },
        onContextmenu: {
            type: q(Function)
        },
        id: String,
        open: Boolean
    }),
    Be = f({
        name: "ElPopperTrigger",
        inheritAttrs: !1
    });
var Me = V(f({ ...Be,
        props: Ce,
        setup(t, {
            expose: o
        }) {
            const a = t,
                {
                    role: i,
                    triggerRef: s
                } = v(se, void 0);
            var l;
            l = s, u(be, {
                setForwardRef: e => {
                    l.value = e
                }
            });
            const f = e((() => h.value ? a.id : void 0)),
                c = e((() => {
                    if (i && "tooltip" === i.value) return a.open && a.id ? a.id : void 0
                })),
                h = e((() => {
                    if (i && "tooltip" !== i.value) return i.value
                })),
                b = e((() => h.value ? `${a.open}` : void 0));
            let y;
            return r((() => {
                n((() => a.virtualRef), (e => {
                    e && (s.value = j(e))
                }), {
                    immediate: !0
                }), n(s, ((e, t) => {
                    null == y || y(), y = void 0, K(e) && (["onMouseenter", "onMouseleave", "onClick", "onKeydown", "onFocus", "onBlur", "onContextmenu"].forEach((n => {
                        var r;
                        const o = a[n];
                        o && (e.addEventListener(n.slice(2).toLowerCase(), o), null == (r = null == t ? void 0 : t.removeEventListener) || r.call(t, n.slice(2).toLowerCase(), o))
                    })), y = n([f, c, h, b], (t => {
                        ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach(((n, r) => {
                            ee(t[r]) ? e.removeAttribute(n) : e.setAttribute(n, t[r])
                        }))
                    }), {
                        immediate: !0
                    })), K(t) && ["aria-controls", "aria-describedby", "aria-haspopup", "aria-expanded"].forEach((e => t.removeAttribute(e)))
                }), {
                    immediate: !0
                })
            })), m((() => {
                null == y || y(), y = void 0
            })), o({
                triggerRef: s
            }), (e, t) => e.virtualTriggering ? M("v-if", !0) : (g(), T(p(Re), B({
                key: 0
            }, e.$attrs, {
                "aria-controls": p(f),
                "aria-describedby": p(c),
                "aria-expanded": p(b),
                "aria-haspopup": p(h)
            }), {
                default: C((() => [d(e.$slots, "default")])),
                _: 3
            }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]))
        }
    }), [
        ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]
    ]),
    Se = "top",
    Pe = "bottom",
    De = "right",
    Le = "left",
    _e = "auto",
    Fe = [Se, Pe, De, Le],
    He = "start",
    Ie = "end",
    We = "viewport",
    $e = "popper",
    Ne = Fe.reduce((function(e, t) {
        return e.concat([t + "-" + He, t + "-" + Ie])
    }), []),
    qe = [].concat(Fe, [_e]).reduce((function(e, t) {
        return e.concat([t, t + "-" + He, t + "-" + Ie])
    }), []),
    ze = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

function Ve(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function Ke(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function Ue(e) {
    return e instanceof Ke(e).Element || e instanceof Element
}

function Je(e) {
    return e instanceof Ke(e).HTMLElement || e instanceof HTMLElement
}

function Xe(e) {
    return "undefined" != typeof ShadowRoot && (e instanceof Ke(e).ShadowRoot || e instanceof ShadowRoot)
}
var Ye = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function(e) {
        var t = e.state;
        Object.keys(t.elements).forEach((function(e) {
            var n = t.styles[e] || {},
                r = t.attributes[e] || {},
                o = t.elements[e];
            !Je(o) || !Ve(o) || (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                var t = r[e];
                !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
            })))
        }))
    },
    effect: function(e) {
        var t = e.state,
            n = {
                popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function() {
                Object.keys(t.elements).forEach((function(e) {
                    var r = t.elements[e],
                        o = t.attributes[e] || {},
                        a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                            return e[t] = "", e
                        }), {});
                    !Je(r) || !Ve(r) || (Object.assign(r.style, a), Object.keys(o).forEach((function(e) {
                        r.removeAttribute(e)
                    })))
                }))
            }
    },
    requires: ["computeStyles"]
};

function Ge(e) {
    return e.split("-")[0]
}
var Qe = Math.max,
    Ze = Math.min,
    et = Math.round;

function tt(e, t) {
    void 0 === t && (t = !1);
    var n = e.getBoundingClientRect(),
        r = 1,
        o = 1;
    if (Je(e) && t) {
        var a = e.offsetHeight,
            i = e.offsetWidth;
        i > 0 && (r = et(n.width) / i || 1), a > 0 && (o = et(n.height) / a || 1)
    }
    return {
        width: n.width / r,
        height: n.height / o,
        top: n.top / o,
        right: n.right / r,
        bottom: n.bottom / o,
        left: n.left / r,
        x: n.left / r,
        y: n.top / o
    }
}

function nt(e) {
    var t = tt(e),
        n = e.offsetWidth,
        r = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: n,
        height: r
    }
}

function rt(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Xe(n)) {
        var r = t;
        do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host
        } while (r)
    }
    return !1
}

function ot(e) {
    return Ke(e).getComputedStyle(e)
}

function at(e) {
    return ["table", "td", "th"].indexOf(Ve(e)) >= 0
}

function it(e) {
    return ((Ue(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function st(e) {
    return "html" === Ve(e) ? e : e.assignedSlot || e.parentNode || (Xe(e) ? e.host : null) || it(e)
}

function lt(e) {
    return Je(e) && "fixed" !== ot(e).position ? e.offsetParent : null
}

function pt(e) {
    for (var t = Ke(e), n = lt(e); n && at(n) && "static" === ot(n).position;) n = lt(n);
    return n && ("html" === Ve(n) || "body" === Ve(n) && "static" === ot(n).position) ? t : n || function(e) {
        var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
        if (-1 !== navigator.userAgent.indexOf("Trident") && Je(e) && "fixed" === ot(e).position) return null;
        var n = st(e);
        for (Xe(n) && (n = n.host); Je(n) && ["html", "body"].indexOf(Ve(n)) < 0;) {
            var r = ot(n);
            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
            n = n.parentNode
        }
        return null
    }(e) || t
}

function ut(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function ft(e, t, n) {
    return Qe(e, Ze(t, n))
}

function ct(e) {
    return Object.assign({}, {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }, e)
}

function dt(e, t) {
    return t.reduce((function(t, n) {
        return t[n] = e, t
    }), {})
}
var vt = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
        var t, n = e.state,
            r = e.name,
            o = e.options,
            a = n.elements.arrow,
            i = n.modifiersData.popperOffsets,
            s = Ge(n.placement),
            l = ut(s),
            p = [Le, De].indexOf(s) >= 0 ? "height" : "width";
        if (a && i) {
            var u = function(e, t) {
                    return ct("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : e) ? e : dt(e, Fe))
                }(o.padding, n),
                f = nt(a),
                c = "y" === l ? Se : Le,
                d = "y" === l ? Pe : De,
                v = n.rects.reference[p] + n.rects.reference[l] - i[l] - n.rects.popper[p],
                m = i[l] - n.rects.reference[l],
                g = pt(a),
                h = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                b = v / 2 - m / 2,
                y = u[c],
                w = h - f[p] - u[d],
                x = h / 2 - f[p] / 2 + b,
                O = ft(y, x, w),
                E = l;
            n.modifiersData[r] = ((t = {})[E] = O, t.centerOffset = O - x, t)
        }
    },
    effect: function(e) {
        var t = e.state,
            n = e.options.element,
            r = void 0 === n ? "[data-popper-arrow]" : n;
        null != r && ("string" == typeof r && !(r = t.elements.popper.querySelector(r)) || !rt(t.elements.popper, r) || (t.elements.arrow = r))
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function mt(e) {
    return e.split("-")[1]
}
var gt = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function ht(e) {
    var t, n = e.popper,
        r = e.popperRect,
        o = e.placement,
        a = e.variation,
        i = e.offsets,
        s = e.position,
        l = e.gpuAcceleration,
        p = e.adaptive,
        u = e.roundOffsets,
        f = e.isFixed,
        c = i.x,
        d = void 0 === c ? 0 : c,
        v = i.y,
        m = void 0 === v ? 0 : v,
        g = "function" == typeof u ? u({
            x: d,
            y: m
        }) : {
            x: d,
            y: m
        };
    d = g.x, m = g.y;
    var h = i.hasOwnProperty("x"),
        b = i.hasOwnProperty("y"),
        y = Le,
        w = Se,
        x = window;
    if (p) {
        var O = pt(n),
            E = "clientHeight",
            A = "clientWidth";
        if (O === Ke(n) && ("static" !== ot(O = it(n)).position && "absolute" === s && (E = "scrollHeight", A = "scrollWidth")), o === Se || (o === Le || o === De) && a === Ie) w = Pe, m -= (f && O === x && x.visualViewport ? x.visualViewport.height : O[E]) - r.height, m *= l ? 1 : -1;
        if (o === Le || (o === Se || o === Pe) && a === Ie) y = De, d -= (f && O === x && x.visualViewport ? x.visualViewport.width : O[A]) - r.width, d *= l ? 1 : -1
    }
    var k, R = Object.assign({
            position: s
        }, p && gt),
        j = !0 === u ? function(e) {
            var t = e.x,
                n = e.y,
                r = window.devicePixelRatio || 1;
            return {
                x: et(t * r) / r || 0,
                y: et(n * r) / r || 0
            }
        }({
            x: d,
            y: m
        }) : {
            x: d,
            y: m
        };
    return d = j.x, m = j.y, l ? Object.assign({}, R, ((k = {})[w] = b ? "0" : "", k[y] = h ? "0" : "", k.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", k)) : Object.assign({}, R, ((t = {})[w] = b ? m + "px" : "", t[y] = h ? d + "px" : "", t.transform = "", t))
}
var bt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                a = n.adaptive,
                i = void 0 === a || a,
                s = n.roundOffsets,
                l = void 0 === s || s,
                p = {
                    placement: Ge(t.placement),
                    variation: mt(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: o,
                    isFixed: "fixed" === t.options.strategy
                };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, ht(Object.assign({}, p, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: i,
                roundOffsets: l
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ht(Object.assign({}, p, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    },
    yt = {
        passive: !0
    };
var wt = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state,
                n = e.instance,
                r = e.options,
                o = r.scroll,
                a = void 0 === o || o,
                i = r.resize,
                s = void 0 === i || i,
                l = Ke(t.elements.popper),
                p = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return a && p.forEach((function(e) {
                    e.addEventListener("scroll", n.update, yt)
                })), s && l.addEventListener("resize", n.update, yt),
                function() {
                    a && p.forEach((function(e) {
                        e.removeEventListener("scroll", n.update, yt)
                    })), s && l.removeEventListener("resize", n.update, yt)
                }
        },
        data: {}
    },
    xt = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

function Ot(e) {
    return e.replace(/left|right|bottom|top/g, (function(e) {
        return xt[e]
    }))
}
var Et = {
    start: "end",
    end: "start"
};

function At(e) {
    return e.replace(/start|end/g, (function(e) {
        return Et[e]
    }))
}

function kt(e) {
    var t = Ke(e);
    return {
        scrollLeft: t.pageXOffset,
        scrollTop: t.pageYOffset
    }
}

function Rt(e) {
    return tt(it(e)).left + kt(e).scrollLeft
}

function jt(e) {
    var t = ot(e),
        n = t.overflow,
        r = t.overflowX,
        o = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + r)
}

function Tt(e) {
    return ["html", "body", "#document"].indexOf(Ve(e)) >= 0 ? e.ownerDocument.body : Je(e) && jt(e) ? e : Tt(st(e))
}

function Ct(e, t) {
    var n;
    void 0 === t && (t = []);
    var r = Tt(e),
        o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
        a = Ke(r),
        i = o ? [a].concat(a.visualViewport || [], jt(r) ? r : []) : r,
        s = t.concat(i);
    return o ? s : s.concat(Ct(st(i)))
}

function Bt(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function Mt(e, t) {
    return t === We ? Bt(function(e) {
        var t = Ke(e),
            n = it(e),
            r = t.visualViewport,
            o = n.clientWidth,
            a = n.clientHeight,
            i = 0,
            s = 0;
        return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, s = r.offsetTop)), {
            width: o,
            height: a,
            x: i + Rt(e),
            y: s
        }
    }(e)) : Ue(t) ? function(e) {
        var t = tt(e);
        return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
    }(t) : Bt(function(e) {
        var t, n = it(e),
            r = kt(e),
            o = null == (t = e.ownerDocument) ? void 0 : t.body,
            a = Qe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
            i = Qe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
            s = -r.scrollLeft + Rt(e),
            l = -r.scrollTop;
        return "rtl" === ot(o || n).direction && (s += Qe(n.clientWidth, o ? o.clientWidth : 0) - a), {
            width: a,
            height: i,
            x: s,
            y: l
        }
    }(it(e)))
}

function St(e, t, n) {
    var r = "clippingParents" === t ? function(e) {
            var t = Ct(st(e)),
                n = ["absolute", "fixed"].indexOf(ot(e).position) >= 0 && Je(e) ? pt(e) : e;
            return Ue(n) ? t.filter((function(e) {
                return Ue(e) && rt(e, n) && "body" !== Ve(e)
            })) : []
        }(e) : [].concat(t),
        o = [].concat(r, [n]),
        a = o[0],
        i = o.reduce((function(t, n) {
            var r = Mt(e, n);
            return t.top = Qe(r.top, t.top), t.right = Ze(r.right, t.right), t.bottom = Ze(r.bottom, t.bottom), t.left = Qe(r.left, t.left), t
        }), Mt(e, a));
    return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
}

function Pt(e) {
    var t, n = e.reference,
        r = e.element,
        o = e.placement,
        a = o ? Ge(o) : null,
        i = o ? mt(o) : null,
        s = n.x + n.width / 2 - r.width / 2,
        l = n.y + n.height / 2 - r.height / 2;
    switch (a) {
        case Se:
            t = {
                x: s,
                y: n.y - r.height
            };
            break;
        case Pe:
            t = {
                x: s,
                y: n.y + n.height
            };
            break;
        case De:
            t = {
                x: n.x + n.width,
                y: l
            };
            break;
        case Le:
            t = {
                x: n.x - r.width,
                y: l
            };
            break;
        default:
            t = {
                x: n.x,
                y: n.y
            }
    }
    var p = a ? ut(a) : null;
    if (null != p) {
        var u = "y" === p ? "height" : "width";
        switch (i) {
            case He:
                t[p] = t[p] - (n[u] / 2 - r[u] / 2);
                break;
            case Ie:
                t[p] = t[p] + (n[u] / 2 - r[u] / 2)
        }
    }
    return t
}

function Dt(e, t) {
    void 0 === t && (t = {});
    var n = t,
        r = n.placement,
        o = void 0 === r ? e.placement : r,
        a = n.boundary,
        i = void 0 === a ? "clippingParents" : a,
        s = n.rootBoundary,
        l = void 0 === s ? We : s,
        p = n.elementContext,
        u = void 0 === p ? $e : p,
        f = n.altBoundary,
        c = void 0 !== f && f,
        d = n.padding,
        v = void 0 === d ? 0 : d,
        m = ct("number" != typeof v ? v : dt(v, Fe)),
        g = u === $e ? "reference" : $e,
        h = e.rects.popper,
        b = e.elements[c ? g : u],
        y = St(Ue(b) ? b : b.contextElement || it(e.elements.popper), i, l),
        w = tt(e.elements.reference),
        x = Pt({
            reference: w,
            element: h,
            strategy: "absolute",
            placement: o
        }),
        O = Bt(Object.assign({}, h, x)),
        E = u === $e ? O : w,
        A = {
            top: y.top - E.top + m.top,
            bottom: E.bottom - y.bottom + m.bottom,
            left: y.left - E.left + m.left,
            right: E.right - y.right + m.right
        },
        k = e.modifiersData.offset;
    if (u === $e && k) {
        var R = k[o];
        Object.keys(A).forEach((function(e) {
            var t = [De, Pe].indexOf(e) >= 0 ? 1 : -1,
                n = [Se, Pe].indexOf(e) >= 0 ? "y" : "x";
            A[e] += R[n] * t
        }))
    }
    return A
}
var Lt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function(e) {
        var t = e.state,
            n = e.options,
            r = e.name;
        if (!t.modifiersData[r]._skip) {
            for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, s = void 0 === i || i, l = n.fallbackPlacements, p = n.padding, u = n.boundary, f = n.rootBoundary, c = n.altBoundary, d = n.flipVariations, v = void 0 === d || d, m = n.allowedAutoPlacements, g = t.options.placement, h = Ge(g), b = l || (h === g || !v ? [Ot(g)] : function(e) {
                    if (Ge(e) === _e) return [];
                    var t = Ot(e);
                    return [At(e), t, At(t)]
                }(g)), y = [g].concat(b).reduce((function(e, n) {
                    return e.concat(Ge(n) === _e ? function(e, t) {
                        void 0 === t && (t = {});
                        var n = t,
                            r = n.placement,
                            o = n.boundary,
                            a = n.rootBoundary,
                            i = n.padding,
                            s = n.flipVariations,
                            l = n.allowedAutoPlacements,
                            p = void 0 === l ? qe : l,
                            u = mt(r),
                            f = u ? s ? Ne : Ne.filter((function(e) {
                                return mt(e) === u
                            })) : Fe,
                            c = f.filter((function(e) {
                                return p.indexOf(e) >= 0
                            }));
                        0 === c.length && (c = f);
                        var d = c.reduce((function(t, n) {
                            return t[n] = Dt(e, {
                                placement: n,
                                boundary: o,
                                rootBoundary: a,
                                padding: i
                            })[Ge(n)], t
                        }), {});
                        return Object.keys(d).sort((function(e, t) {
                            return d[e] - d[t]
                        }))
                    }(t, {
                        placement: n,
                        boundary: u,
                        rootBoundary: f,
                        padding: p,
                        flipVariations: v,
                        allowedAutoPlacements: m
                    }) : n)
                }), []), w = t.rects.reference, x = t.rects.popper, O = new Map, E = !0, A = y[0], k = 0; k < y.length; k++) {
                var R = y[k],
                    j = Ge(R),
                    T = mt(R) === He,
                    C = [Se, Pe].indexOf(j) >= 0,
                    B = C ? "width" : "height",
                    M = Dt(t, {
                        placement: R,
                        boundary: u,
                        rootBoundary: f,
                        altBoundary: c,
                        padding: p
                    }),
                    S = C ? T ? De : Le : T ? Pe : Se;
                w[B] > x[B] && (S = Ot(S));
                var P = Ot(S),
                    D = [];
                if (a && D.push(M[j] <= 0), s && D.push(M[S] <= 0, M[P] <= 0), D.every((function(e) {
                        return e
                    }))) {
                    A = R, E = !1;
                    break
                }
                O.set(R, D)
            }
            if (E)
                for (var L = function(e) {
                        var t = y.find((function(t) {
                            var n = O.get(t);
                            if (n) return n.slice(0, e).every((function(e) {
                                return e
                            }))
                        }));
                        if (t) return A = t, "break"
                    }, _ = v ? 3 : 1; _ > 0; _--) {
                    if ("break" === L(_)) break
                }
            t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0)
        }
    },
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function _t(e, t, n) {
    return void 0 === n && (n = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x
    }
}

function Ft(e) {
    return [Se, De, Pe, Le].some((function(t) {
        return e[t] >= 0
    }))
}
var Ht = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function(e) {
        var t = e.state,
            n = e.name,
            r = t.rects.reference,
            o = t.rects.popper,
            a = t.modifiersData.preventOverflow,
            i = Dt(t, {
                elementContext: "reference"
            }),
            s = Dt(t, {
                altBoundary: !0
            }),
            l = _t(i, r),
            p = _t(s, o, a),
            u = Ft(l),
            f = Ft(p);
        t.modifiersData[n] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: p,
            isReferenceHidden: u,
            hasPopperEscaped: f
        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": f
        })
    }
};
var It = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function(e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            o = n.offset,
            a = void 0 === o ? [0, 0] : o,
            i = qe.reduce((function(e, n) {
                return e[n] = function(e, t, n) {
                    var r = Ge(e),
                        o = [Le, Se].indexOf(r) >= 0 ? -1 : 1,
                        a = "function" == typeof n ? n(Object.assign({}, t, {
                            placement: e
                        })) : n,
                        i = a[0],
                        s = a[1];
                    return i = i || 0, s = (s || 0) * o, [Le, De].indexOf(r) >= 0 ? {
                        x: s,
                        y: i
                    } : {
                        x: i,
                        y: s
                    }
                }(n, t.rects, a), e
            }), {}),
            s = i[t.placement],
            l = s.x,
            p = s.y;
        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += p), t.modifiersData[r] = i
    }
};
var Wt = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function(e) {
        var t = e.state,
            n = e.name;
        t.modifiersData[n] = Pt({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
        })
    },
    data: {}
};
var $t = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function(e) {
        var t = e.state,
            n = e.options,
            r = e.name,
            o = n.mainAxis,
            a = void 0 === o || o,
            i = n.altAxis,
            s = void 0 !== i && i,
            l = n.boundary,
            p = n.rootBoundary,
            u = n.altBoundary,
            f = n.padding,
            c = n.tether,
            d = void 0 === c || c,
            v = n.tetherOffset,
            m = void 0 === v ? 0 : v,
            g = Dt(t, {
                boundary: l,
                rootBoundary: p,
                padding: f,
                altBoundary: u
            }),
            h = Ge(t.placement),
            b = mt(t.placement),
            y = !b,
            w = ut(h),
            x = function(e) {
                return "x" === e ? "y" : "x"
            }(w),
            O = t.modifiersData.popperOffsets,
            E = t.rects.reference,
            A = t.rects.popper,
            k = "function" == typeof m ? m(Object.assign({}, t.rects, {
                placement: t.placement
            })) : m,
            R = "number" == typeof k ? {
                mainAxis: k,
                altAxis: k
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, k),
            j = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
            T = {
                x: 0,
                y: 0
            };
        if (O) {
            if (a) {
                var C, B = "y" === w ? Se : Le,
                    M = "y" === w ? Pe : De,
                    S = "y" === w ? "height" : "width",
                    P = O[w],
                    D = P + g[B],
                    L = P - g[M],
                    _ = d ? -A[S] / 2 : 0,
                    F = b === He ? E[S] : A[S],
                    H = b === He ? -A[S] : -E[S],
                    I = t.elements.arrow,
                    W = d && I ? nt(I) : {
                        width: 0,
                        height: 0
                    },
                    $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    N = $[B],
                    q = $[M],
                    z = ft(0, E[S], W[S]),
                    V = y ? E[S] / 2 - _ - z - N - R.mainAxis : F - z - N - R.mainAxis,
                    K = y ? -E[S] / 2 + _ + z + q + R.mainAxis : H + z + q + R.mainAxis,
                    U = t.elements.arrow && pt(t.elements.arrow),
                    J = U ? "y" === w ? U.clientTop || 0 : U.clientLeft || 0 : 0,
                    X = null != (C = null == j ? void 0 : j[w]) ? C : 0,
                    Y = P + K - X,
                    G = ft(d ? Ze(D, P + V - X - J) : D, P, d ? Qe(L, Y) : L);
                O[w] = G, T[w] = G - P
            }
            if (s) {
                var Q, Z = "x" === w ? Se : Le,
                    ee = "x" === w ? Pe : De,
                    te = O[x],
                    ne = "y" === x ? "height" : "width",
                    re = te + g[Z],
                    oe = te - g[ee],
                    ae = -1 !== [Se, Le].indexOf(h),
                    ie = null != (Q = null == j ? void 0 : j[x]) ? Q : 0,
                    se = ae ? re : te - E[ne] - A[ne] - ie + R.altAxis,
                    le = ae ? te + E[ne] + A[ne] - ie - R.altAxis : oe,
                    pe = d && ae ? function(e, t, n) {
                        var r = ft(e, t, n);
                        return r > n ? n : r
                    }(se, te, le) : ft(d ? se : re, te, d ? le : oe);
                O[x] = pe, T[x] = pe - te
            }
            t.modifiersData[r] = T
        }
    },
    requiresIfExists: ["offset"]
};

function Nt(e, t, n) {
    void 0 === n && (n = !1);
    var r = Je(t),
        o = Je(t) && function(e) {
            var t = e.getBoundingClientRect(),
                n = et(t.width) / e.offsetWidth || 1,
                r = et(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== r
        }(t),
        a = it(t),
        i = tt(e, o),
        s = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = {
            x: 0,
            y: 0
        };
    return (r || !r && !n) && (("body" !== Ve(t) || jt(a)) && (s = function(e) {
        return e !== Ke(e) && Je(e) ? function(e) {
            return {
                scrollLeft: e.scrollLeft,
                scrollTop: e.scrollTop
            }
        }(e) : kt(e)
    }(t)), Je(t) ? ((l = tt(t, !0)).x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Rt(a))), {
        x: i.left + s.scrollLeft - l.x,
        y: i.top + s.scrollTop - l.y,
        width: i.width,
        height: i.height
    }
}

function qt(e) {
    var t = new Map,
        n = new Set,
        r = [];

    function o(e) {
        n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
            if (!n.has(e)) {
                var r = t.get(e);
                r && o(r)
            }
        })), r.push(e)
    }
    return e.forEach((function(e) {
        t.set(e.name, e)
    })), e.forEach((function(e) {
        n.has(e.name) || o(e)
    })), r
}

function zt(e) {
    var t;
    return function() {
        return t || (t = new Promise((function(n) {
            Promise.resolve().then((function() {
                t = void 0, n(e())
            }))
        }))), t
    }
}
var Vt = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function Kt() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some((function(e) {
        return !(e && "function" == typeof e.getBoundingClientRect)
    }))
}

function Ut(e) {
    void 0 === e && (e = {});
    var t = e,
        n = t.defaultModifiers,
        r = void 0 === n ? [] : n,
        o = t.defaultOptions,
        a = void 0 === o ? Vt : o;
    return function(e, t, n) {
        void 0 === n && (n = a);
        var o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Vt, a),
                modifiersData: {},
                elements: {
                    reference: e,
                    popper: t
                },
                attributes: {},
                styles: {}
            },
            i = [],
            s = !1,
            l = {
                state: o,
                setOptions: function(n) {
                    var s = "function" == typeof n ? n(o.options) : n;
                    p(), o.options = Object.assign({}, a, o.options, s), o.scrollParents = {
                        reference: Ue(e) ? Ct(e) : e.contextElement ? Ct(e.contextElement) : [],
                        popper: Ct(t)
                    };
                    var u = function(e) {
                        var t = qt(e);
                        return ze.reduce((function(e, n) {
                            return e.concat(t.filter((function(e) {
                                return e.phase === n
                            })))
                        }), [])
                    }(function(e) {
                        var t = e.reduce((function(e, t) {
                            var n = e[t.name];
                            return e[t.name] = n ? Object.assign({}, n, t, {
                                options: Object.assign({}, n.options, t.options),
                                data: Object.assign({}, n.data, t.data)
                            }) : t, e
                        }), {});
                        return Object.keys(t).map((function(e) {
                            return t[e]
                        }))
                    }([].concat(r, o.options.modifiers)));
                    return o.orderedModifiers = u.filter((function(e) {
                        return e.enabled
                    })), o.orderedModifiers.forEach((function(e) {
                        var t = e.name,
                            n = e.options,
                            r = void 0 === n ? {} : n,
                            a = e.effect;
                        if ("function" == typeof a) {
                            var s = a({
                                    state: o,
                                    name: t,
                                    instance: l,
                                    options: r
                                }),
                                p = function() {};
                            i.push(s || p)
                        }
                    })), l.update()
                },
                forceUpdate: function() {
                    if (!s) {
                        var e = o.elements,
                            t = e.reference,
                            n = e.popper;
                        if (Kt(t, n)) {
                            o.rects = {
                                reference: Nt(t, pt(n), "fixed" === o.options.strategy),
                                popper: nt(n)
                            }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                return o.modifiersData[e.name] = Object.assign({}, e.data)
                            }));
                            for (var r = 0; r < o.orderedModifiers.length; r++)
                                if (!0 !== o.reset) {
                                    var a = o.orderedModifiers[r],
                                        i = a.fn,
                                        p = a.options,
                                        u = void 0 === p ? {} : p,
                                        f = a.name;
                                    "function" == typeof i && (o = i({
                                        state: o,
                                        options: u,
                                        name: f,
                                        instance: l
                                    }) || o)
                                } else o.reset = !1, r = -1
                        }
                    }
                },
                update: zt((function() {
                    return new Promise((function(e) {
                        l.forceUpdate(), e(o)
                    }))
                })),
                destroy: function() {
                    p(), s = !0
                }
            };
        if (!Kt(e, t)) return l;

        function p() {
            i.forEach((function(e) {
                return e()
            })), i = []
        }
        return l.setOptions(n).then((function(e) {
            !s && n.onFirstUpdate && n.onFirstUpdate(e)
        })), l
    }
}
Ut(), Ut({
    defaultModifiers: [wt, Wt, bt, Ye]
});
var Jt = Ut({
    defaultModifiers: [wt, Wt, bt, Ye, It, Lt, $t, vt, Ht]
});
const Xt = z({
        boundariesPadding: {
            type: Number,
            default: 0
        },
        fallbackPlacements: {
            type: q(Array),
            default: void 0
        },
        gpuAcceleration: {
            type: Boolean,
            default: !0
        },
        offset: {
            type: Number,
            default: 12
        },
        placement: {
            type: String,
            values: qe,
            default: "bottom"
        },
        popperOptions: {
            type: q(Object),
            default: () => ({})
        },
        strategy: {
            type: String,
            values: ["fixed", "absolute"],
            default: "absolute"
        }
    }),
    Yt = z({ ...Xt,
        id: String,
        style: {
            type: q([String, Array, Object])
        },
        className: {
            type: q([String, Array, Object])
        },
        effect: {
            type: String,
            default: "dark"
        },
        visible: Boolean,
        enterable: {
            type: Boolean,
            default: !0
        },
        pure: Boolean,
        focusOnShow: {
            type: Boolean,
            default: !1
        },
        trapping: {
            type: Boolean,
            default: !1
        },
        popperClass: {
            type: q([String, Array, Object])
        },
        popperStyle: {
            type: q([String, Array, Object])
        },
        referenceEl: {
            type: q(Object)
        },
        triggerTargetEl: {
            type: q(Object)
        },
        stopPopperMouseEvent: {
            type: Boolean,
            default: !0
        },
        ariaLabel: {
            type: String,
            default: void 0
        },
        virtualTriggering: Boolean,
        zIndex: Number
    }),
    Gt = {
        mouseenter: e => e instanceof MouseEvent,
        mouseleave: e => e instanceof MouseEvent,
        focus: () => !0,
        blur: () => !0,
        close: () => !0
    },
    Qt = (e, t) => {
        const {
            placement: n,
            strategy: r,
            popperOptions: o
        } = e, a = {
            placement: n,
            strategy: r,
            ...o,
            modifiers: Zt(e)
        };
        return function(e, {
                arrowEl: t,
                arrowOffset: n
            }) {
                e.modifiers.push({
                    name: "arrow",
                    options: {
                        element: t,
                        padding: null != n ? n : 5
                    }
                })
            }(a, t),
            function(e, t) {
                t && (e.modifiers = [...e.modifiers, ...null != t ? t : []])
            }(a, null == o ? void 0 : o.modifiers), a
    };

function Zt(e) {
    const {
        offset: t,
        gpuAcceleration: n,
        fallbackPlacements: r
    } = e;
    return [{
        name: "offset",
        options: {
            offset: [0, null != t ? t : 12]
        }
    }, {
        name: "preventOverflow",
        options: {
            padding: {
                top: 2,
                bottom: 2,
                left: 5,
                right: 5
            }
        }
    }, {
        name: "flip",
        options: {
            padding: 5,
            fallbackPlacements: r
        }
    }, {
        name: "computeStyles",
        options: {
            gpuAcceleration: n,
            adaptive: n
        }
    }]
}
const en = f({
    name: "ElPopperContent"
});
var tn = V(f({ ...en,
    props: Yt,
    emits: Gt,
    setup(t, {
        expose: o,
        emit: i
    }) {
        const s = t,
            {
                popperInstanceRef: l,
                contentRef: f,
                triggerRef: w,
                role: x
            } = v(se, void 0),
            O = v(ne, void 0),
            {
                nextZIndex: E
            } = re(),
            A = G("popper"),
            k = c(),
            T = c("first"),
            B = c(),
            M = c();
        u(le, {
            arrowRef: B,
            arrowOffset: M
        }), O && (O.addInputId || O.removeInputId) && u(ne, { ...O,
            addInputId: y,
            removeInputId: y
        });
        const P = c(s.zIndex || E()),
            D = c(!1);
        let L;
        const _ = e((() => (e => {
                if (a) return j(e)
            })(s.referenceEl) || p(w))),
            F = e((() => [{
                zIndex: p(P)
            }, s.popperStyle])),
            H = e((() => [A.b(), A.is("pure", s.pure), A.is(s.effect), s.popperClass])),
            I = e((() => x && "dialog" === x.value ? "false" : void 0)),
            W = (e = !0) => {
                var t;
                null == (t = p(l)) || t.update(), e && (P.value = s.zIndex || E())
            },
            $ = () => {
                var e, t;
                const n = {
                    name: "eventListeners",
                    enabled: s.visible
                };
                null == (t = null == (e = p(l)) ? void 0 : e.setOptions) || t.call(e, (e => ({ ...e,
                    modifiers: [...e.modifiers || [], n]
                }))), W(!1), s.visible && s.focusOnShow ? D.value = !0 : !1 === s.visible && (D.value = !1)
            },
            N = () => {
                i("focus")
            },
            q = e => {
                var t;
                "pointer" !== (null == (t = e.detail) ? void 0 : t.focusReason) && (T.value = "first", i("blur"))
            },
            z = e => {
                s.visible && !D.value && (e.target && (T.value = e.target), D.value = !0)
            },
            V = e => {
                s.trapping || ("pointer" === e.detail.focusReason && e.preventDefault(), D.value = !1)
            },
            U = () => {
                D.value = !1, i("close")
            };
        return r((() => {
            let e;
            n(_, (t => {
                var r;
                null == e || e();
                const o = p(l);
                if (null == (r = null == o ? void 0 : o.destroy) || r.call(o), t) {
                    const r = p(k);
                    f.value = r, l.value = (({
                        referenceEl: e,
                        popperContentEl: t,
                        arrowEl: n
                    }) => {
                        const r = Qt(s, {
                            arrowEl: n,
                            arrowOffset: p(M)
                        });
                        return Jt(e, t, r)
                    })({
                        referenceEl: t,
                        popperContentEl: r,
                        arrowEl: p(B)
                    }), e = n((() => t.getBoundingClientRect()), (() => W()), {
                        immediate: !0
                    })
                } else l.value = void 0
            }), {
                immediate: !0
            }), n((() => s.triggerTargetEl), ((e, t) => {
                null == L || L(), L = void 0;
                const r = p(e || k.value),
                    o = p(t || k.value);
                K(r) && (L = n([x, () => s.ariaLabel, I, () => s.id], (e => {
                    ["role", "aria-label", "aria-modal", "id"].forEach(((t, n) => {
                        ee(e[n]) ? r.removeAttribute(t) : r.setAttribute(t, e[n])
                    }))
                }), {
                    immediate: !0
                })), o !== r && K(o) && ["role", "aria-label", "aria-modal", "id"].forEach((e => {
                    o.removeAttribute(e)
                }))
            }), {
                immediate: !0
            }), n((() => s.visible), $, {
                immediate: !0
            }), n((() => Qt(s, {
                arrowEl: p(B),
                arrowOffset: p(M)
            })), (e => {
                var t;
                return null == (t = l.value) ? void 0 : t.setOptions(e)
            }))
        })), m((() => {
            null == L || L(), L = void 0
        })), o({
            popperContentRef: k,
            popperInstanceRef: l,
            updatePopper: W,
            contentStyle: F
        }), (e, t) => (g(), h("div", {
            ref_key: "popperContentRef",
            ref: k,
            style: S(p(F)),
            class: b(p(H)),
            tabindex: "-1",
            onMouseenter: t[0] || (t[0] = t => e.$emit("mouseenter", t)),
            onMouseleave: t[1] || (t[1] = t => e.$emit("mouseleave", t))
        }, [R(p(te), {
            trapped: D.value,
            "trap-on-focus-in": !0,
            "focus-trap-el": k.value,
            "focus-start-el": T.value,
            onFocusAfterTrapped: N,
            onFocusAfterReleased: q,
            onFocusin: z,
            onFocusoutPrevented: V,
            onReleaseRequested: U
        }, {
            default: C((() => [d(e.$slots, "default")])),
            _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el"])], 38))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]
]);
const nn = U(xe),
    rn = G("tooltip"),
    on = z({ ...ge,
        ...Yt,
        appendTo: {
            type: q([String, Object]),
            default: ve
        },
        content: {
            type: String,
            default: ""
        },
        rawContent: {
            type: Boolean,
            default: !1
        },
        persistent: Boolean,
        ariaLabel: String,
        visible: {
            type: q(Boolean),
            default: null
        },
        transition: {
            type: String,
            default: `${rn.namespace.value}-fade-in-linear`
        },
        teleported: {
            type: Boolean,
            default: !0
        },
        disabled: {
            type: Boolean
        }
    }),
    an = z({ ...Ce,
        disabled: Boolean,
        trigger: {
            type: q([String, Array]),
            default: "hover"
        },
        triggerKeys: {
            type: q(Array),
            default: () => [Q.enter, Q.space]
        }
    }),
    {
        useModelToggleProps: sn,
        useModelToggleEmits: ln,
        useModelToggle: pn
    } = (s => {
        const l = `update:${s}`,
            p = `onUpdate:${s}`;
        return {
            useModelToggle: ({
                indicator: u,
                toggleReason: f,
                shouldHideWhenRouteChanges: c,
                shouldProceed: d,
                onShow: v,
                onHide: m
            }) => {
                const g = o(),
                    {
                        emit: h
                    } = g,
                    b = g.props,
                    y = e((() => t(b[p]))),
                    w = e((() => null === b[s])),
                    x = e => {
                        !0 !== u.value && (u.value = !0, f && (f.value = e), t(v) && v(e))
                    },
                    O = e => {
                        !1 !== u.value && (u.value = !1, f && (f.value = e), t(m) && m(e))
                    },
                    E = e => {
                        if (!0 === b.disabled || t(d) && !d()) return;
                        const n = y.value && a;
                        n && h(l, !0), !w.value && n || x(e)
                    },
                    A = e => {
                        if (!0 === b.disabled || !a) return;
                        const t = y.value && a;
                        t && h(l, !1), !w.value && t || O(e)
                    },
                    k = e => {
                        i(e) && (b.disabled && e ? y.value && h(l, !1) : u.value !== e && (e ? x() : O()))
                    };
                return n((() => b[s]), k), c && void 0 !== g.appContext.config.globalProperties.$route && n((() => ({ ...g.proxy.$route
                })), (() => {
                    c.value && u.value && A()
                })), r((() => {
                    k(b[s])
                })), {
                    hide: A,
                    show: E,
                    toggle: () => {
                        u.value ? A() : E()
                    },
                    hasUpdateHandler: y
                }
            },
            useModelToggleProps: {
                [s]: ue,
                [p]: fe
            },
            useModelToggleEmits: [l]
        }
    })("visible"),
    un = z({ ...ye,
        ...sn,
        ...on,
        ...an,
        ...Oe,
        openDelay: {
            type: Number
        },
        visibleArrow: {
            type: Boolean,
            default: void 0
        },
        showArrow: {
            type: Boolean,
            default: !0
        }
    }),
    fn = [...ln, "before-show", "before-hide", "show", "hide", "open", "close"],
    cn = (e, t, n) => r => {
        ((e, t) => P(e) ? e.includes(t) : e === t)(p(e), t) && n(r)
    },
    dn = f({
        name: "ElTooltipTrigger"
    });
var vn = V(f({ ...dn,
    props: an,
    setup(e, {
        expose: t
    }) {
        const n = e,
            r = G("tooltip"),
            {
                controlled: o,
                id: a,
                open: i,
                onOpen: s,
                onClose: l,
                onToggle: u
            } = v(pe, void 0),
            f = c(null),
            m = () => {
                if (p(o) || n.disabled) return !0
            },
            h = D(n, "trigger"),
            y = ae(m, cn(h, "hover", s)),
            w = ae(m, cn(h, "hover", l)),
            x = ae(m, cn(h, "click", (e => {
                0 === e.button && u(e)
            }))),
            O = ae(m, cn(h, "focus", s)),
            E = ae(m, cn(h, "focus", l)),
            A = ae(m, cn(h, "contextmenu", (e => {
                e.preventDefault(), u(e)
            }))),
            k = ae(m, (e => {
                const {
                    code: t
                } = e;
                n.triggerKeys.includes(t) && (e.preventDefault(), u(e))
            }));
        return t({
            triggerRef: f
        }), (e, t) => (g(), T(p(Me), {
            id: p(a),
            "virtual-ref": e.virtualRef,
            open: p(i),
            "virtual-triggering": e.virtualTriggering,
            class: b(p(r).e("trigger")),
            onBlur: p(E),
            onClick: p(x),
            onContextmenu: p(A),
            onFocus: p(O),
            onMouseenter: p(y),
            onMouseleave: p(w),
            onKeydown: p(k)
        }, {
            default: C((() => [d(e.$slots, "default")])),
            _: 3
        }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]
]);
const mn = f({
    name: "ElTooltipContent",
    inheritAttrs: !1
});
var gn = V(f({ ...mn,
    props: on,
    setup(t, {
        expose: r
    }) {
        const o = t,
            a = c(null),
            i = c(!1),
            {
                controlled: s,
                id: l,
                open: u,
                trigger: f,
                onClose: h,
                onOpen: b,
                onShow: y,
                onHide: x,
                onBeforeShow: O,
                onBeforeHide: E
            } = v(pe, void 0),
            A = e((() => o.persistent));
        m((() => {
            i.value = !0
        }));
        const k = e((() => !!p(A) || p(u))),
            j = e((() => !o.disabled && p(u))),
            S = e((() => {
                var e;
                return null != (e = o.style) ? e : {}
            })),
            P = e((() => !p(u))),
            D = () => {
                x()
            },
            I = () => {
                if (p(s)) return !0
            },
            W = ae(I, (() => {
                o.enterable && "hover" === p(f) && b()
            })),
            $ = ae(I, (() => {
                "hover" === p(f) && h()
            })),
            N = () => {
                var e, t;
                null == (t = null == (e = a.value) ? void 0 : e.updatePopper) || t.call(e), null == O || O()
            },
            q = () => {
                null == E || E()
            },
            z = () => {
                y(), K = H(e((() => {
                    var e;
                    return null == (e = a.value) ? void 0 : e.popperContentRef
                })), (() => {
                    if (p(s)) return;
                    "hover" !== p(f) && h()
                }))
            },
            V = () => {
                o.virtualTriggering || h()
            };
        let K;
        return n((() => p(u)), (e => {
            e || null == K || K()
        }), {
            flush: "post"
        }), n((() => o.content), (() => {
            var e, t;
            null == (t = null == (e = a.value) ? void 0 : e.updatePopper) || t.call(e)
        })), r({
            contentRef: a
        }), (e, t) => (g(), T(F, {
            disabled: !e.teleported,
            to: e.appendTo
        }, [R(_, {
            name: e.transition,
            onAfterLeave: D,
            onBeforeEnter: N,
            onAfterEnter: z,
            onBeforeLeave: q
        }, {
            default: C((() => [p(k) ? w((g(), T(p(tn), B({
                key: 0,
                id: p(l),
                ref_key: "contentRef",
                ref: a
            }, e.$attrs, {
                "aria-label": e.ariaLabel,
                "aria-hidden": p(P),
                "boundaries-padding": e.boundariesPadding,
                "fallback-placements": e.fallbackPlacements,
                "gpu-acceleration": e.gpuAcceleration,
                offset: e.offset,
                placement: e.placement,
                "popper-options": e.popperOptions,
                strategy: e.strategy,
                effect: e.effect,
                enterable: e.enterable,
                pure: e.pure,
                "popper-class": e.popperClass,
                "popper-style": [e.popperStyle, p(S)],
                "reference-el": e.referenceEl,
                "trigger-target-el": e.triggerTargetEl,
                visible: p(j),
                "z-index": e.zIndex,
                onMouseenter: p(W),
                onMouseleave: p($),
                onBlur: V,
                onClose: p(h)
            }), {
                default: C((() => [M(" Workaround bug #6378 "), i.value ? M("v-if", !0) : d(e.$slots, "default", {
                    key: 0
                })])),
                _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
                [L, p(j)]
            ]) : M("v-if", !0)])),
            _: 3
        }, 8, ["name"])], 8, ["disabled", "to"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]
]);
const hn = ["innerHTML"],
    bn = {
        key: 1
    },
    yn = f({
        name: "ElTooltip"
    });
const wn = U(V(f({ ...yn,
    props: un,
    emits: fn,
    setup(t, {
        expose: r,
        emit: o
    }) {
        const a = t;
        me();
        const s = e((() => (J(a.openDelay) || Z("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), a.openDelay || a.showAfter))),
            l = e((() => (J(a.visibleArrow) || Z("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), i(a.visibleArrow) ? a.visibleArrow : a.showArrow))),
            f = oe(),
            v = c(),
            m = c(),
            b = () => {
                var e;
                const t = p(v);
                t && (null == (e = t.popperInstanceRef) || e.update())
            },
            y = c(!1),
            w = c(),
            {
                show: x,
                hide: O,
                hasUpdateHandler: E
            } = pn({
                indicator: y,
                toggleReason: w
            }),
            {
                onOpen: A,
                onClose: k
            } = he({
                showAfter: s,
                hideAfter: D(a, "hideAfter"),
                open: x,
                close: O
            }),
            j = e((() => i(a.visible) && !E.value));
        u(pe, {
            controlled: j,
            id: f,
            open: I(y),
            trigger: D(a, "trigger"),
            onOpen: e => {
                A(e)
            },
            onClose: e => {
                k(e)
            },
            onToggle: e => {
                p(y) ? k(e) : A(e)
            },
            onShow: () => {
                o("show", w.value)
            },
            onHide: () => {
                o("hide", w.value)
            },
            onBeforeShow: () => {
                o("before-show", w.value)
            },
            onBeforeHide: () => {
                o("before-hide", w.value)
            },
            updatePopper: b
        }), n((() => a.disabled), (e => {
            e && y.value && (y.value = !1)
        }));
        return W((() => y.value && O())), r({
            popperRef: v,
            contentRef: m,
            isFocusInsideContent: () => {
                var e, t;
                const n = null == (t = null == (e = m.value) ? void 0 : e.contentRef) ? void 0 : t.popperContentRef;
                return n && n.contains(document.activeElement)
            },
            updatePopper: b,
            onOpen: A,
            onClose: k,
            hide: O
        }), (e, t) => (g(), T(p(nn), {
            ref_key: "popperRef",
            ref: v,
            role: e.role
        }, {
            default: C((() => [R(vn, {
                disabled: e.disabled,
                trigger: e.trigger,
                "trigger-keys": e.triggerKeys,
                "virtual-ref": e.virtualRef,
                "virtual-triggering": e.virtualTriggering
            }, {
                default: C((() => [e.$slots.default ? d(e.$slots, "default", {
                    key: 0
                }) : M("v-if", !0)])),
                _: 3
            }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]), R(gn, {
                ref_key: "contentRef",
                ref: m,
                "aria-label": e.ariaLabel,
                "boundaries-padding": e.boundariesPadding,
                content: e.content,
                disabled: e.disabled,
                effect: e.effect,
                enterable: e.enterable,
                "fallback-placements": e.fallbackPlacements,
                "hide-after": e.hideAfter,
                "gpu-acceleration": e.gpuAcceleration,
                offset: e.offset,
                persistent: e.persistent,
                "popper-class": e.popperClass,
                "popper-style": e.popperStyle,
                placement: e.placement,
                "popper-options": e.popperOptions,
                pure: e.pure,
                "raw-content": e.rawContent,
                "reference-el": e.referenceEl,
                "trigger-target-el": e.triggerTargetEl,
                "show-after": p(s),
                strategy: e.strategy,
                teleported: e.teleported,
                transition: e.transition,
                "virtual-triggering": e.virtualTriggering,
                "z-index": e.zIndex,
                "append-to": e.appendTo
            }, {
                default: C((() => [d(e.$slots, "content", {}, (() => [e.rawContent ? (g(), h("span", {
                    key: 0,
                    innerHTML: e.content
                }, null, 8, hn)) : (g(), h("span", bn, $(e.content), 1))])), p(l) ? (g(), T(p(Ae), {
                    key: 0,
                    "arrow-offset": e.arrowOffset
                }, null, 8, ["arrow-offset"])) : M("v-if", !0)])),
                _: 3
            }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])])),
            _: 3
        }, 8, ["role"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]
]));
export {
    wn as E, pe as T, qe as a, an as b, ie as g, on as u, Jt as y
};