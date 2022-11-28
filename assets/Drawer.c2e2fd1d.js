import {
    O as e,
    g as t,
    aL as n,
    w as o,
    c as r,
    Q as i,
    a5 as s,
    ar as l,
    N as a,
    aJ as c,
    F as u,
    af as d,
    U as f,
    K as h,
    aF as v,
    b6 as p,
    aM as b,
    Y as m,
    ak as g,
    ao as w,
    ac as y,
    m as x,
    s as $
} from "./el-select.e274bb48.js";
import {
    i as S,
    j as C,
    S as z
} from "./_Uint8Array.82d4fc05.js";
import {
    l as E,
    k as R,
    i as T,
    f as B
} from "./index.0e1148e8.js";
import {
    b as k
} from "./_baseFor.671df8ff.js";
import {
    g as O,
    c as M,
    k as P,
    d as F,
    e as I,
    b as H,
    i as A
} from "./_initCloneObject.91168f35.js";
import {
    b as j
} from "./_arrayPush.949d1e07.js";
import {
    i as D
} from "./isArrayLikeObject.26380556.js";
import {
    b as N,
    c as L,
    a as W
} from "./isObject.a01dee34.js";
import {
    b as _
} from "./_baseRest.0a5801c8.js";
import {
    i as X
} from "./_isIterateeCall.7435a88e.js";
var U, Y = Function.prototype,
    q = Object.prototype,
    Z = Y.toString,
    V = q.hasOwnProperty,
    J = Z.call(Object);

function G(e, t, n) {
    (void 0 !== n && !E(e[t], n) || void 0 === n && !(t in e)) && R(e, t, n)
}

function K(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function Q(e, t, n, o, r, i, s) {
    var l = K(e, n),
        a = K(t, n),
        c = s.get(a);
    if (c) G(e, n, c);
    else {
        var u, d = i ? i(l, a, n + "", e, t, s) : void 0,
            f = void 0 === d;
        if (f) {
            var h = T(a),
                v = !h && S(a),
                p = !h && !v && C(a);
            d = a, h || v || p ? T(l) ? d = l : D(l) ? d = F(l) : v ? (f = !1, d = I(a, !0)) : p ? (f = !1, d = H(a, !0)) : d = [] : function(e) {
                if (!N(e) || "[object Object]" != L(e)) return !1;
                var t = O(e);
                if (null === t) return !0;
                var n = V.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && Z.call(n) == J
            }(a) || j(a) ? (d = l, j(l) ? d = M(u = l, P(u)) : W(l) && !B(l) || (d = A(a))) : f = !1
        }
        f && (s.set(a, d), r(d, a, o, i, s), s.delete(a)), G(e, n, d)
    }
}

function ee(e, t, n, o, r) {
    e !== t && k(t, (function(i, s) {
        if (r || (r = new z), W(i)) Q(e, t, s, n, ee, o, r);
        else {
            var l = o ? o(K(e, s), i, s + "", e, t, r) : void 0;
            void 0 === l && (l = i), G(e, s, l)
        }
    }), P)
}
const te = (U = function(e, t, n) {
    ee(e, t, n)
}, _((function(e, t) {
    var n = -1,
        o = t.length,
        r = o > 1 ? t[o - 1] : void 0,
        i = o > 2 ? t[2] : void 0;
    for (r = U.length > 3 && "function" == typeof r ? (o--, r) : void 0, i && X(t[0], t[1], i) && (r = o < 3 ? void 0 : r, o = 1), e = Object(e); ++n < o;) {
        var s = t[n];
        s && U(e, s, n, r)
    }
    return e
})));

function ne(e) {
    return e.composedPath()[0] || null
}
const oe = {
        black: "#000",
        silver: "#C0C0C0",
        gray: "#808080",
        white: "#FFF",
        maroon: "#800000",
        red: "#F00",
        purple: "#800080",
        fuchsia: "#F0F",
        green: "#008000",
        lime: "#0F0",
        olive: "#808000",
        yellow: "#FF0",
        navy: "#000080",
        blue: "#00F",
        teal: "#008080",
        aqua: "#0FF",
        transparent: "#0000"
    },
    re = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",
    ie = "([0-9A-Fa-f])",
    se = "([0-9A-Fa-f]{2})",
    le = new RegExp(`^\\s*rgb\\s*\\(${re},${re},${re}\\)\\s*$`),
    ae = new RegExp(`^\\s*rgba\\s*\\(${re},${re},${re},${re}\\)\\s*$`),
    ce = new RegExp(`^\\s*#${ie}${ie}${ie}\\s*$`),
    ue = new RegExp(`^\\s*#${se}${se}${se}\\s*$`),
    de = new RegExp(`^\\s*#${ie}${ie}${ie}${ie}\\s*$`),
    fe = new RegExp(`^\\s*#${se}${se}${se}${se}\\s*$`);

function he(e) {
    return parseInt(e, 16)
}

function ve(e) {
    try {
        let t;
        if (t = ue.exec(e)) return [he(t[1]), he(t[2]), he(t[3]), 1];
        if (t = le.exec(e)) return [we(t[1]), we(t[5]), we(t[9]), 1];
        if (t = ae.exec(e)) return [we(t[1]), we(t[5]), we(t[9]), ge(t[13])];
        if (t = ce.exec(e)) return [he(t[1] + t[1]), he(t[2] + t[2]), he(t[3] + t[3]), 1];
        if (t = fe.exec(e)) return [he(t[1]), he(t[2]), he(t[3]), ge(he(t[4]) / 255)];
        if (t = de.exec(e)) return [he(t[1] + t[1]), he(t[2] + t[2]), he(t[3] + t[3]), ge(he(t[4] + t[4]) / 255)];
        if (e in oe) return ve(oe[e]);
        throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)
    } catch (t) {
        throw t
    }
}

function pe(e, t, n, o, r) {
    return we((e * t * (1 - o) + n * o) / r)
}

function be(e, t) {
    Array.isArray(e) || (e = ve(e)), Array.isArray(t) || (t = ve(t));
    const n = e[3],
        o = t[3],
        r = ge(n + o - n * o);
    return i = pe(e[0], n, t[0], o, r), s = pe(e[1], n, t[1], o, r), l = pe(e[2], n, t[2], o, r), a = r, `rgba(${we(i)}, ${we(s)}, ${we(l)}, ${c=a,c>1?1:c<0?0:c})`;
    var i, s, l, a, c
}

function me(e, t) {
    const [n, o, r, i = 1] = Array.isArray(e) ? e : ve(e), {
        lightness: s = 1,
        alpha: l = 1
    } = t;
    return function(e) {
        const [t, n, o] = e;
        if (3 in e) return `rgba(${we(t)}, ${we(n)}, ${we(o)}, ${ge(e[3])})`;
        return `rgba(${we(t)}, ${we(n)}, ${we(o)}, 1)`
    }([n * s, o * s, r * s, i * l])
}

function ge(e) {
    const t = Math.round(100 * Number(e)) / 100;
    return t > 1 ? 1 : t < 0 ? 0 : t
}

function we(e) {
    const t = Math.round(Number(e));
    return t > 255 ? 255 : t < 0 ? 0 : t
}

function ye(e, ...t) {
    if (!Array.isArray(e)) return e(...t);
    e.forEach((e => ye(e, ...t)))
}
const xe = new Set;

function $e(e, t) {
    const n = `[naive/${e}]: ${t}`;
    xe.has(n) || (xe.add(n), console.error(n))
}
const Se = e({
        render() {
            var e, t;
            return null === (t = (e = this.$slots).default) || void 0 === t ? void 0 : t.call(e)
        }
    }),
    Ce = /^(\d|\.)+$/,
    ze = /(\d|\.)+/;

function Ee(e, {
    c: t = 1,
    offset: n = 0,
    attachPx: o = !0
} = {}) {
    if ("number" == typeof e) {
        const o = (e + n) * t;
        return 0 === o ? "0" : `${o}px`
    }
    if ("string" == typeof e) {
        if (Ce.test(e)) {
            const r = (Number(e) + n) * t;
            return o ? 0 === r ? "0" : `${r}px` : `${r}`
        } {
            const o = ze.exec(e);
            return o ? e.replace(ze, String((Number(o[0]) + n) * t)) : e
        }
    }
    return e
}
const Re = /\s*,(?![^(]*\))\s*/g,
    Te = /\s+/g;

function Be(e) {
    let t = [""];
    return e.forEach((e => {
        (e = e && e.trim()) && (t = e.includes("&") ? function(e, t) {
            const n = [];
            return t.split(Re).forEach((t => {
                let o = function(e) {
                    let t = 0;
                    for (let n = 0; n < e.length; ++n) "&" === e[n] && ++t;
                    return t
                }(t);
                if (!o) return void e.forEach((e => {
                    n.push((e && e + " ") + t)
                }));
                if (1 === o) return void e.forEach((e => {
                    n.push(t.replace("&", e))
                }));
                let r = [t];
                for (; o--;) {
                    const t = [];
                    r.forEach((n => {
                        e.forEach((e => {
                            t.push(n.replace("&", e))
                        }))
                    })), r = t
                }
                r.forEach((e => n.push(e)))
            })), n
        }(t, e) : function(e, t) {
            const n = [];
            return t.split(Re).forEach((t => {
                e.forEach((e => {
                    n.push((e && e + " ") + t)
                }))
            })), n
        }(t, e))
    })), t.join(", ").replace(Te, " ")
}

function ke(e) {
    if (!e) return;
    const t = e.parentElement;
    t && t.removeChild(e)
}

function Oe(e) {
    return document.head.querySelector(`style[cssr-id="${e}"]`)
}

function Me(e) {
    return !!e && /^\s*@(s|m)/.test(e)
}
const Pe = /[A-Z]/g;

function Fe(e) {
    return e.replace(Pe, (e => "-" + e.toLowerCase()))
}

function Ie(e, t, n, o) {
    if (!t) return "";
    const r = function(e, t, n) {
        return "function" == typeof e ? e({
            context: t.context,
            props: n
        }) : e
    }(t, n, o);
    if (!r) return "";
    if ("string" == typeof r) return `${e} {\n${r}\n}`;
    const i = Object.keys(r);
    if (0 === i.length) return n.config.keepEmptyBlock ? e + " {\n}" : "";
    const s = e ? [e + " {"] : [];
    return i.forEach((e => {
        const t = r[e];
        "raw" !== e ? (e = Fe(e), null != t && s.push(`  ${e}${function(e,t="  "){return"object"==typeof e&&null!==e?" {\n"+Object.entries(e).map((e=>t+`  ${Fe(e[0])}: ${e[1]};`)).join("\n")+"\n"+t+"}":`: $ {
                e
            };
            `}(t)}`)) : s.push("\n" + t + "\n")
    })), e && s.push("}"), s.join("\n")
}

function He(e, t, n) {
    e && e.forEach((e => {
        if (Array.isArray(e)) He(e, t, n);
        else if ("function" == typeof e) {
            const o = e(t);
            Array.isArray(o) ? He(o, t, n) : o && n(o)
        } else e && n(e)
    }))
}

function Ae(e, t, n, o, r, i) {
    const s = e.$;
    let l = "";
    if (s && "string" != typeof s)
        if ("function" == typeof s) {
            const e = s({
                context: o.context,
                props: r
            });
            Me(e) ? l = e : t.push(e)
        } else if (s.before && s.before(o.context), s.$ && "string" != typeof s.$) {
        if (s.$) {
            const e = s.$({
                context: o.context,
                props: r
            });
            Me(e) ? l = e : t.push(e)
        }
    } else Me(s.$) ? l = s.$ : t.push(s.$);
    else Me(s) ? l = s : t.push(s);
    const a = Be(t),
        c = Ie(a, e.props, o, r);
    l ? (n.push(`${l} {`), i && c && i.insertRule(`${l} {\n${c}\n}\n`)) : (i && c && i.insertRule(c), !i && c.length && n.push(c)), e.children && He(e.children, {
        context: o.context,
        props: r
    }, (e => {
        if ("string" == typeof e) {
            const t = Ie(a, {
                raw: e
            }, o, r);
            i ? i.insertRule(t) : n.push(t)
        } else Ae(e, t, n, o, r, i)
    })), t.pop(), l && n.push("}"), s && s.after && s.after(o.context)
}

function je(e, t, n, o = !1) {
    const r = [];
    return Ae(e, [], r, t, n, o ? e.instance.__styleSheet : void 0), o ? "" : r.join("\n\n")
}

function De(e) {
    for (var t, n = 0, o = 0, r = e.length; r >= 4; ++o, r -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
    switch (r) {
        case 3:
            n ^= (255 & e.charCodeAt(o + 2)) << 16;
        case 2:
            n ^= (255 & e.charCodeAt(o + 1)) << 8;
        case 1:
            n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(o))) + (59797 * (n >>> 16) << 16)
    }
    return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
}

function Ne(e, t) {
    e.push(t)
}

function Le(e, t, n, o, r, i, s, l, a) {
    if (i && !a) {
        if (void 0 === n) return void console.error("[css-render/mount]: `id` is required in `silent` mode.");
        const r = window.__cssrContext;
        return void(r[n] || (r[n] = !0, je(t, e, o, i)))
    }
    let c;
    if (void 0 === n && (c = t.render(o), n = De(c)), a) return void a.adapter(n, null != c ? c : t.render(o));
    const u = Oe(n);
    if (null !== u && !s) return u;
    const d = null != u ? u : function(e) {
        const t = document.createElement("style");
        return t.setAttribute("cssr-id", e), t
    }(n);
    if (void 0 === c && (c = t.render(o)), d.textContent = c, null !== u) return u;
    if (l) {
        const e = document.head.querySelector(`meta[name="${l}"]`);
        if (e) return document.head.insertBefore(d, e), Ne(t.els, d), d
    }
    return r ? document.head.insertBefore(d, document.head.querySelector("style, link")) : document.head.appendChild(d), Ne(t.els, d), d
}

function We(e) {
    return je(this, this.instance, e)
}

function _e(e = {}) {
    const {
        id: t,
        ssr: n,
        props: o,
        head: r = !1,
        silent: i = !1,
        force: s = !1,
        anchorMetaName: l
    } = e;
    return Le(this.instance, this, t, o, r, i, s, l, n)
}

function Xe(e = {}) {
    const {
        id: t
    } = e;
    ! function(e, t, n) {
        const {
            els: o
        } = t;
        if (void 0 === n) o.forEach(ke), t.els = [];
        else {
            const e = Oe(n);
            e && o.includes(e) && (ke(e), t.els = o.filter((t => t !== e)))
        }
    }(this.instance, this, t)
}
"undefined" != typeof window && (window.__cssrContext = {});
const Ue = function(e, t, n, o) {
    return {
        instance: e,
        $: t,
        props: n,
        children: o,
        els: [],
        render: We,
        mount: _e,
        unmount: Xe
    }
};
const Ye = function(e = {}) {
        let t = null;
        const n = {
            c: (...e) => function(e, t, n, o) {
                return Array.isArray(t) ? Ue(e, {
                    $: null
                }, null, t) : Array.isArray(n) ? Ue(e, t, null, n) : Array.isArray(o) ? Ue(e, t, n, o) : Ue(e, t, n, null)
            }(n, ...e),
            use: (e, ...t) => e.install(n, ...t),
            find: Oe,
            context: {},
            config: e,
            get __styleSheet() {
                if (!t) {
                    const e = document.createElement("style");
                    return document.head.appendChild(e), t = document.styleSheets[document.styleSheets.length - 1], t
                }
                return t
            }
        };
        return n
    }(),
    qe = function(e) {
        let t, n = ".",
            o = "__",
            r = "--";
        if (e) {
            let t = e.blockPrefix;
            t && (n = t), t = e.elementPrefix, t && (o = t), t = e.modifierPrefix, t && (r = t)
        }
        const i = {
            install(e) {
                t = e.c;
                const n = e.context;
                n.bem = {}, n.bem.b = null, n.bem.els = null
            }
        };
        return Object.assign(i, {
            cB: (...e) => t(function(e) {
                let t, o;
                return {
                    before(e) {
                        t = e.bem.b, o = e.bem.els, e.bem.els = null
                    },
                    after(e) {
                        e.bem.b = t, e.bem.els = o
                    },
                    $: ({
                        context: t,
                        props: o
                    }) => (e = "string" == typeof e ? e : e({
                        context: t,
                        props: o
                    }), t.bem.b = e, `${(null==o?void 0:o.bPrefix)||n}${t.bem.b}`)
                }
            }(e[0]), e[1], e[2]),
            cE: (...e) => t(function(e) {
                let t;
                return {
                    before(e) {
                        t = e.bem.els
                    },
                    after(e) {
                        e.bem.els = t
                    },
                    $: ({
                        context: t,
                        props: r
                    }) => (e = "string" == typeof e ? e : e({
                        context: t,
                        props: r
                    }), t.bem.els = e.split(",").map((e => e.trim())), t.bem.els.map((e => `${(null==r?void 0:r.bPrefix)||n}${t.bem.b}${o}${e}`)).join(", "))
                }
            }(e[0]), e[1], e[2]),
            cM: (...e) => {
                return t((i = e[0], {
                    $({
                        context: e,
                        props: t
                    }) {
                        const s = (i = "string" == typeof i ? i : i({
                            context: e,
                            props: t
                        })).split(",").map((e => e.trim()));

                        function l(i) {
                            return s.map((s => `&${(null==t?void 0:t.bPrefix)||n}${e.bem.b}${void 0!==i?`${o}${i}`:""}${r}${s}`)).join(", ")
                        }
                        const a = e.bem.els;
                        if (null !== a) {
                            if (a.length >= 2) throw Error(`[css-render/plugin-bem]: m(${i}) is invalid, using modifier inside multiple elements is not allowed`);
                            return l(a[0])
                        }
                        return l()
                    }
                }), e[1], e[2]);
                var i
            },
            cNotM: (...e) => {
                return t((i = e[0], {
                    $({
                        context: e,
                        props: t
                    }) {
                        i = "string" == typeof i ? i : i({
                            context: e,
                            props: t
                        });
                        const s = e.bem.els;
                        if (null !== s && s.length >= 2) throw Error(`[css-render/plugin-bem]: notM(${i}) is invalid, using modifier inside multiple elements is not allowed`);
                        return `&:not(${(null==t?void 0:t.bPrefix)||n}${e.bem.b}${null!==s&&s.length>0?`${o}${s[0]}`:""}${r}${i})`
                    }
                }), e[1], e[2]);
                var i
            }
        }), i
    }({
        blockPrefix: ".n-",
        elementPrefix: "__",
        modifierPrefix: "--"
    });
Ye.use(qe);
const {
    c: Ze,
    find: Ve
} = Ye, {
    cB: Je,
    cE: Ge,
    cM: Ke,
    cNotM: Qe
} = qe, et = "undefined" != typeof document && "undefined" != typeof window, tt = new WeakSet;

function nt(e) {
    const r = t(!!e.value);
    if (r.value) return n(r);
    const i = o(e, (e => {
        e && (r.value = !0, i())
    }));
    return n(r)
}

function ot(e) {
    return e.composedPath()[0]
}
const rt = {
    mousemoveoutside: new WeakMap,
    clickoutside: new WeakMap
};

function it(e, t, n) {
    const o = rt[e];
    let r = o.get(t);
    void 0 === r && o.set(t, r = new WeakMap);
    let i = r.get(n);
    return void 0 === i && r.set(n, i = function(e, t, n) {
        if ("mousemoveoutside" === e) {
            const e = e => {
                t.contains(ot(e)) || n(e)
            };
            return {
                mousemove: e,
                touchstart: e
            }
        }
        if ("clickoutside" === e) {
            let e = !1;
            const o = n => {
                    e = !t.contains(ot(n))
                },
                r = o => {
                    e && (t.contains(ot(o)) || n(o))
                };
            return {
                mousedown: o,
                mouseup: r,
                touchstart: o,
                touchend: r
            }
        }
        return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`), {}
    }(e, t, n)), i
}
const {
    on: st,
    off: lt
} = function() {
    if ("undefined" == typeof window) return {
        on: () => {},
        off: () => {}
    };
    const e = new WeakMap,
        t = new WeakMap;

    function n() {
        e.set(this, !0)
    }

    function o() {
        e.set(this, !0), t.set(this, !0)
    }

    function r(e, t, n) {
        const o = e[t];
        return e[t] = function() {
            return n.apply(e, arguments), o.apply(e, arguments)
        }, e
    }

    function i(e, t) {
        e[t] = Event.prototype[t]
    }
    const s = new WeakMap,
        l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

    function a() {
        var e;
        return null !== (e = s.get(this)) && void 0 !== e ? e : null
    }

    function c(e, t) {
        void 0 !== l && Object.defineProperty(e, "currentTarget", {
            configurable: !0,
            enumerable: !0,
            get: null != t ? t : l.get
        })
    }
    const u = {
            bubble: {},
            capture: {}
        },
        d = {},
        f = function() {
            const l = function(l) {
                const {
                    type: d,
                    eventPhase: f,
                    bubbles: h
                } = l, v = ot(l);
                if (2 === f) return;
                const p = 1 === f ? "capture" : "bubble";
                let b = v;
                const m = [];
                for (; null === b && (b = window), m.push(b), b !== window;) b = b.parentNode || null;
                const g = u.capture[d],
                    w = u.bubble[d];
                if (r(l, "stopPropagation", n), r(l, "stopImmediatePropagation", o), c(l, a), "capture" === p) {
                    if (void 0 === g) return;
                    for (let n = m.length - 1; n >= 0 && !e.has(l); --n) {
                        const e = m[n],
                            o = g.get(e);
                        if (void 0 !== o) {
                            s.set(l, e);
                            for (const e of o) {
                                if (t.has(l)) break;
                                e(l)
                            }
                        }
                        if (0 === n && !h && void 0 !== w) {
                            const n = w.get(e);
                            if (void 0 !== n)
                                for (const e of n) {
                                    if (t.has(l)) break;
                                    e(l)
                                }
                        }
                    }
                } else if ("bubble" === p) {
                    if (void 0 === w) return;
                    for (let n = 0; n < m.length && !e.has(l); ++n) {
                        const e = m[n],
                            o = w.get(e);
                        if (void 0 !== o) {
                            s.set(l, e);
                            for (const e of o) {
                                if (t.has(l)) break;
                                e(l)
                            }
                        }
                    }
                }
                i(l, "stopPropagation"), i(l, "stopImmediatePropagation"), c(l)
            };
            return l.displayName = "evtdUnifiedHandler", l
        }(),
        h = function() {
            const e = function(e) {
                const {
                    type: t,
                    eventPhase: n
                } = e;
                if (2 !== n) return;
                const o = d[t];
                void 0 !== o && o.forEach((t => t(e)))
            };
            return e.displayName = "evtdUnifiedWindowEventHandler", e
        }();

    function v(e, t) {
        const n = u[e];
        return void 0 === n[t] && (n[t] = new Map, window.addEventListener(t, f, "capture" === e)), n[t]
    }

    function p(e, t) {
        let n = e.get(t);
        return void 0 === n && e.set(t, n = new Set), n
    }

    function b(e, t, n, o) {
        const r = function(e, t, n, o) {
            if ("mousemoveoutside" === e || "clickoutside" === e) {
                const r = it(e, t, n);
                return Object.keys(r).forEach((e => {
                    lt(e, document, r[e], o)
                })), !0
            }
            return !1
        }(e, t, n, o);
        if (r) return;
        const i = !0 === o || "object" == typeof o && !0 === o.capture,
            s = i ? "capture" : "bubble",
            l = v(s, e),
            a = p(l, t);
        if (t === window) {
            if (! function(e, t, n, o) {
                    const r = u[t][n];
                    if (void 0 !== r) {
                        const t = r.get(e);
                        if (void 0 !== t && t.has(o)) return !0
                    }
                    return !1
                }(t, i ? "bubble" : "capture", e, n) && function(e, t) {
                    const n = d[e];
                    return !(void 0 === n || !n.has(t))
                }(e, n)) {
                const t = d[e];
                t.delete(n), 0 === t.size && (window.removeEventListener(e, h), d[e] = void 0)
            }
        }
        a.has(n) && a.delete(n), 0 === a.size && l.delete(t), 0 === l.size && (window.removeEventListener(e, f, "capture" === s), u[s][e] = void 0)
    }
    return {
        on: function(e, t, n, o) {
            let r;
            r = "object" == typeof o && !0 === o.once ? i => {
                b(e, t, r, o), n(i)
            } : n;
            const i = function(e, t, n, o) {
                if ("mousemoveoutside" === e || "clickoutside" === e) {
                    const r = it(e, t, n);
                    return Object.keys(r).forEach((e => {
                        st(e, document, r[e], o)
                    })), !0
                }
                return !1
            }(e, t, r, o);
            if (i) return;
            const s = p(v(!0 === o || "object" == typeof o && !0 === o.capture ? "capture" : "bubble", e), t);
            if (s.has(r) || s.add(r), t === window) {
                const t = function(e) {
                    return void 0 === d[e] && (d[e] = new Set, window.addEventListener(e, h)), d[e]
                }(e);
                t.has(r) || t.add(r)
            }
        },
        off: b
    }
}();

function at(e, t) {
    return o(e, (e => {
        void 0 !== e && (t.value = e)
    })), r((() => void 0 === e.value ? t.value : e.value))
}
const ct = "undefined" != typeof window && (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream;

function ut(e, t, n = "default") {
    const o = t[n];
    if (void 0 === o) throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
    return o()
}
const dt = "@@coContext",
    ft = {
        mounted(e, {
            value: t,
            modifiers: n
        }) {
            e[dt] = {
                handler: void 0
            }, "function" == typeof t && (e[dt].handler = t, st("clickoutside", e, t, {
                capture: n.capture
            }))
        },
        updated(e, {
            value: t,
            modifiers: n
        }) {
            const o = e[dt];
            "function" == typeof t ? o.handler ? o.handler !== t && (lt("clickoutside", e, o.handler, {
                capture: n.capture
            }), o.handler = t, st("clickoutside", e, t, {
                capture: n.capture
            })) : (e[dt].handler = t, st("clickoutside", e, t, {
                capture: n.capture
            })) : o.handler && (lt("clickoutside", e, o.handler, {
                capture: n.capture
            }), o.handler = void 0)
        },
        unmounted(e, {
            modifiers: t
        }) {
            const {
                handler: n
            } = e[dt];
            n && lt("clickoutside", e, n, {
                capture: t.capture
            }), e[dt].handler = void 0
        }
    };
const ht = new class {
        constructor() {
            this.elementZIndex = new Map, this.nextZIndex = 2e3
        }
        get elementCount() {
            return this.elementZIndex.size
        }
        ensureZIndex(e, t) {
            const {
                elementZIndex: n
            } = this;
            if (void 0 !== t) return e.style.zIndex = `${t}`, void n.delete(e);
            const {
                nextZIndex: o
            } = this;
            if (n.has(e)) {
                if (n.get(e) + 1 === this.nextZIndex) return
            }
            e.style.zIndex = `${o}`, n.set(e, o), this.nextZIndex = o + 1, this.squashState()
        }
        unregister(e, t) {
            const {
                elementZIndex: n
            } = this;
            var o, r;
            n.has(e) ? n.delete(e) : void 0 === t && (o = "z-index-manager/unregister-element", r = "Element not found when unregistering.", console.error(`[vdirs/${o}]: ${r}`)), this.squashState()
        }
        squashState() {
            const {
                elementCount: e
            } = this;
            e || (this.nextZIndex = 2e3), this.nextZIndex - e > 2500 && this.rearrange()
        }
        rearrange() {
            const e = Array.from(this.elementZIndex.entries());
            e.sort(((e, t) => e[1] - t[1])), this.nextZIndex = 2e3, e.forEach((e => {
                const t = e[0],
                    n = this.nextZIndex++;
                `${n}` !== t.style.zIndex && (t.style.zIndex = `${n}`)
            }))
        }
    },
    vt = "@@ziContext",
    pt = {
        mounted(e, t) {
            const {
                value: n = {}
            } = t, {
                zIndex: o,
                enabled: r
            } = n;
            e[vt] = {
                enabled: !!r,
                initialized: !1
            }, r && (ht.ensureZIndex(e, o), e[vt].initialized = !0)
        },
        updated(e, t) {
            const {
                value: n = {}
            } = t, {
                zIndex: o,
                enabled: r
            } = n, i = e[vt].enabled;
            r && !i && (ht.ensureZIndex(e, o), e[vt].initialized = !0), e[vt].enabled = !!r
        },
        unmounted(e, t) {
            if (!e[vt].initialized) return;
            const {
                value: n = {}
            } = t, {
                zIndex: o
            } = n;
            ht.unregister(e, o)
        }
    },
    bt = Symbol("@css-render/vue3-ssr");

function mt(e, t) {
    const n = s(bt, null);
    if (null === n) return void console.error("[css-render/vue3-ssr]: no ssr context found.");
    const {
        styles: o,
        ids: r
    } = n;
    r.has(e) || null !== o && (r.add(e), o.push(function(e, t) {
        return `<style cssr-id="${e}">\n${t}\n</style>`
    }(e, t)))
}
const gt = "undefined" != typeof document;

function wt() {
    if (gt) return;
    const e = s(bt, null);
    return null !== e ? {
        adapter: mt,
        context: e
    } : void 0
}

function yt(e, t) {
    console.error(`[vueuc/${e}]: ${t}`)
}

function xt(e) {
    return "string" == typeof e ? document.querySelector(e) : e()
}
const $t = e({
    name: "LazyTeleport",
    props: {
        to: {
            type: [String, Object],
            default: void 0
        },
        disabled: Boolean,
        show: {
            type: Boolean,
            required: !0
        }
    },
    setup: e => ({
        showTeleport: nt(l(e, "show")),
        mergedTo: r((() => {
            const {
                to: t
            } = e;
            return null != t ? t : "body"
        }))
    }),
    render() {
        return this.showTeleport ? this.disabled ? ut("lazy-teleport", this.$slots) : a(c, {
            disabled: this.disabled,
            to: this.mergedTo
        }, ut("lazy-teleport", this.$slots)) : null
    }
});
var St, Ct, zt = [],
    Et = "ResizeObserver loop completed with undelivered notifications.";
(Ct = St || (St = {})).BORDER_BOX = "border-box", Ct.CONTENT_BOX = "content-box", Ct.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
var Rt, Tt = function(e) {
        return Object.freeze(e)
    },
    Bt = function(e, t) {
        this.inlineSize = e, this.blockSize = t, Tt(this)
    },
    kt = function() {
        function e(e, t, n, o) {
            return this.x = e, this.y = t, this.width = n, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Tt(this)
        }
        return e.prototype.toJSON = function() {
            var e = this;
            return {
                x: e.x,
                y: e.y,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                width: e.width,
                height: e.height
            }
        }, e.fromRect = function(t) {
            return new e(t.x, t.y, t.width, t.height)
        }, e
    }(),
    Ot = function(e) {
        return e instanceof SVGElement && "getBBox" in e
    },
    Mt = function(e) {
        if (Ot(e)) {
            var t = e.getBBox(),
                n = t.width,
                o = t.height;
            return !n && !o
        }
        var r = e,
            i = r.offsetWidth,
            s = r.offsetHeight;
        return !(i || s || e.getClientRects().length)
    },
    Pt = function(e) {
        var t;
        if (e instanceof Element) return !0;
        var n = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element)
    },
    Ft = "undefined" != typeof window ? window : {},
    It = new WeakMap,
    Ht = /auto|scroll/,
    At = /^tb|vertical/,
    jt = /msie|trident/i.test(Ft.navigator && Ft.navigator.userAgent),
    Dt = function(e) {
        return parseFloat(e || "0")
    },
    Nt = function(e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new Bt((n ? t : e) || 0, (n ? e : t) || 0)
    },
    Lt = Tt({
        devicePixelContentBoxSize: Nt(),
        borderBoxSize: Nt(),
        contentBoxSize: Nt(),
        contentRect: new kt(0, 0, 0, 0)
    }),
    Wt = function(e, t) {
        if (void 0 === t && (t = !1), It.has(e) && !t) return It.get(e);
        if (Mt(e)) return It.set(e, Lt), Lt;
        var n = getComputedStyle(e),
            o = Ot(e) && e.ownerSVGElement && e.getBBox(),
            r = !jt && "border-box" === n.boxSizing,
            i = At.test(n.writingMode || ""),
            s = !o && Ht.test(n.overflowY || ""),
            l = !o && Ht.test(n.overflowX || ""),
            a = o ? 0 : Dt(n.paddingTop),
            c = o ? 0 : Dt(n.paddingRight),
            u = o ? 0 : Dt(n.paddingBottom),
            d = o ? 0 : Dt(n.paddingLeft),
            f = o ? 0 : Dt(n.borderTopWidth),
            h = o ? 0 : Dt(n.borderRightWidth),
            v = o ? 0 : Dt(n.borderBottomWidth),
            p = d + c,
            b = a + u,
            m = (o ? 0 : Dt(n.borderLeftWidth)) + h,
            g = f + v,
            w = l ? e.offsetHeight - g - e.clientHeight : 0,
            y = s ? e.offsetWidth - m - e.clientWidth : 0,
            x = r ? p + m : 0,
            $ = r ? b + g : 0,
            S = o ? o.width : Dt(n.width) - x - y,
            C = o ? o.height : Dt(n.height) - $ - w,
            z = S + p + y + m,
            E = C + b + w + g,
            R = Tt({
                devicePixelContentBoxSize: Nt(Math.round(S * devicePixelRatio), Math.round(C * devicePixelRatio), i),
                borderBoxSize: Nt(z, E, i),
                contentBoxSize: Nt(S, C, i),
                contentRect: new kt(d, a, S, C)
            });
        return It.set(e, R), R
    },
    _t = function(e, t, n) {
        var o = Wt(e, n),
            r = o.borderBoxSize,
            i = o.contentBoxSize,
            s = o.devicePixelContentBoxSize;
        switch (t) {
            case St.DEVICE_PIXEL_CONTENT_BOX:
                return s;
            case St.BORDER_BOX:
                return r;
            default:
                return i
        }
    },
    Xt = function(e) {
        var t = Wt(e);
        this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = Tt([t.borderBoxSize]), this.contentBoxSize = Tt([t.contentBoxSize]), this.devicePixelContentBoxSize = Tt([t.devicePixelContentBoxSize])
    },
    Ut = function(e) {
        if (Mt(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n;) t += 1, n = n.parentNode;
        return t
    },
    Yt = function() {
        var e = 1 / 0,
            t = [];
        zt.forEach((function(n) {
            if (0 !== n.activeTargets.length) {
                var o = [];
                n.activeTargets.forEach((function(t) {
                    var n = new Xt(t.target),
                        r = Ut(t.target);
                    o.push(n), t.lastReportedSize = _t(t.target, t.observedBox), r < e && (e = r)
                })), t.push((function() {
                    n.callback.call(n.observer, o, n.observer)
                })), n.activeTargets.splice(0, n.activeTargets.length)
            }
        }));
        for (var n = 0, o = t; n < o.length; n++) {
            (0, o[n])()
        }
        return e
    },
    qt = function(e) {
        zt.forEach((function(t) {
            t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach((function(n) {
                n.isActive() && (Ut(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
            }))
        }))
    },
    Zt = function() {
        var e, t = 0;
        for (qt(t); zt.some((function(e) {
                return e.activeTargets.length > 0
            }));) t = Yt(), qt(t);
        return zt.some((function(e) {
            return e.skippedTargets.length > 0
        })) && ("function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
            message: Et
        }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = Et), window.dispatchEvent(e)), t > 0
    },
    Vt = [],
    Jt = function(e) {
        if (!Rt) {
            var t = 0,
                n = document.createTextNode("");
            new MutationObserver((function() {
                return Vt.splice(0).forEach((function(e) {
                    return e()
                }))
            })).observe(n, {
                characterData: !0
            }), Rt = function() {
                n.textContent = "".concat(t ? t-- : t++)
            }
        }
        Vt.push(e), Rt()
    },
    Gt = 0,
    Kt = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    Qt = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
    en = function(e) {
        return void 0 === e && (e = 0), Date.now() + e
    },
    tn = !1,
    nn = new(function() {
        function e() {
            var e = this;
            this.stopped = !0, this.listener = function() {
                return e.schedule()
            }
        }
        return e.prototype.run = function(e) {
            var t = this;
            if (void 0 === e && (e = 250), !tn) {
                tn = !0;
                var n, o = en(e);
                n = function() {
                    var n = !1;
                    try {
                        n = Zt()
                    } finally {
                        if (tn = !1, e = o - en(), !Gt) return;
                        n ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                    }
                }, Jt((function() {
                    requestAnimationFrame(n)
                }))
            }
        }, e.prototype.schedule = function() {
            this.stop(), this.run()
        }, e.prototype.observe = function() {
            var e = this,
                t = function() {
                    return e.observer && e.observer.observe(document.body, Kt)
                };
            document.body ? t() : Ft.addEventListener("DOMContentLoaded", t)
        }, e.prototype.start = function() {
            var e = this;
            this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Qt.forEach((function(t) {
                return Ft.addEventListener(t, e.listener, !0)
            })))
        }, e.prototype.stop = function() {
            var e = this;
            this.stopped || (this.observer && this.observer.disconnect(), Qt.forEach((function(t) {
                return Ft.removeEventListener(t, e.listener, !0)
            })), this.stopped = !0)
        }, e
    }()),
    on = function(e) {
        !Gt && e > 0 && nn.start(), !(Gt += e) && nn.stop()
    },
    rn = function() {
        function e(e, t) {
            this.target = e, this.observedBox = t || St.CONTENT_BOX, this.lastReportedSize = {
                inlineSize: 0,
                blockSize: 0
            }
        }
        return e.prototype.isActive = function() {
            var e, t = _t(this.target, this.observedBox, !0);
            return e = this.target, Ot(e) || function(e) {
                switch (e.tagName) {
                    case "INPUT":
                        if ("image" !== e.type) break;
                    case "VIDEO":
                    case "AUDIO":
                    case "EMBED":
                    case "OBJECT":
                    case "CANVAS":
                    case "IFRAME":
                    case "IMG":
                        return !0
                }
                return !1
            }(e) || "inline" !== getComputedStyle(e).display || (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
        }, e
    }(),
    sn = function(e, t) {
        this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t
    },
    ln = new WeakMap,
    an = function(e, t) {
        for (var n = 0; n < e.length; n += 1)
            if (e[n].target === t) return n;
        return -1
    },
    cn = function() {
        function e() {}
        return e.connect = function(e, t) {
            var n = new sn(e, t);
            ln.set(e, n)
        }, e.observe = function(e, t, n) {
            var o = ln.get(e),
                r = 0 === o.observationTargets.length;
            an(o.observationTargets, t) < 0 && (r && zt.push(o), o.observationTargets.push(new rn(t, n && n.box)), on(1), nn.schedule())
        }, e.unobserve = function(e, t) {
            var n = ln.get(e),
                o = an(n.observationTargets, t),
                r = 1 === n.observationTargets.length;
            o >= 0 && (r && zt.splice(zt.indexOf(n), 1), n.observationTargets.splice(o, 1), on(-1))
        }, e.disconnect = function(e) {
            var t = this,
                n = ln.get(e);
            n.observationTargets.slice().forEach((function(n) {
                return t.unobserve(e, n.target)
            })), n.activeTargets.splice(0, n.activeTargets.length)
        }, e
    }(),
    un = function() {
        function e(e) {
            if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
            cn.connect(this, e)
        }
        return e.prototype.observe = function(e, t) {
            if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!Pt(e)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
            cn.observe(this, e, t)
        }, e.prototype.unobserve = function(e) {
            if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
            if (!Pt(e)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
            cn.unobserve(this, e)
        }, e.prototype.disconnect = function() {
            cn.disconnect(this)
        }, e.toString = function() {
            return "function ResizeObserver () { [polyfill code] }"
        }, e
    }();
const dn = new class {
        constructor() {
            this.handleResize = this.handleResize.bind(this), this.observer = new un(this.handleResize), this.elHandlersMap = new Map
        }
        handleResize(e) {
            for (const t of e) {
                const e = this.elHandlersMap.get(t.target);
                void 0 !== e && e(t)
            }
        }
        registerHandler(e, t) {
            this.elHandlersMap.set(e, t), this.observer.observe(e)
        }
        unregisterHandler(e) {
            this.elHandlersMap.has(e) && (this.elHandlersMap.delete(e), this.observer.unobserve(e))
        }
    },
    fn = e({
        name: "ResizeObserver",
        props: {
            onResize: Function
        },
        setup(e) {
            let t = !1;
            const n = u().proxy;

            function o(t) {
                const {
                    onResize: n
                } = e;
                void 0 !== n && n(t)
            }
            i((() => {
                const e = n.$el;
                void 0 !== e ? e.nextElementSibling === e.nextSibling || 3 !== e.nodeType || "" === e.nodeValue ? null !== e.nextElementSibling && (dn.registerHandler(e.nextElementSibling, o), t = !0) : yt("resize-observer", "$el can not be observed (it may be a text node).") : yt("resize-observer", "$el does not exist.")
            })), d((() => {
                t && dn.unregisterHandler(n.$el.nextElementSibling)
            }))
        },
        render() {
            return f(this.$slots, "default")
        }
    });

function hn(e) {
    return e instanceof HTMLElement
}

function vn(e) {
    for (let t = 0; t < e.childNodes.length; t++) {
        const n = e.childNodes[t];
        if (hn(n) && (bn(n) || vn(n))) return !0
    }
    return !1
}

function pn(e) {
    for (let t = e.childNodes.length - 1; t >= 0; t--) {
        const n = e.childNodes[t];
        if (hn(n) && (bn(n) || pn(n))) return !0
    }
    return !1
}

function bn(e) {
    if (! function(e) {
            if (e.tabIndex > 0 || 0 === e.tabIndex && null !== e.getAttribute("tabIndex")) return !0;
            if (e.getAttribute("disabled")) return !1;
            switch (e.nodeName) {
                case "A":
                    return !!e.href && "ignore" !== e.rel;
                case "INPUT":
                    return "hidden" !== e.type && "file" !== e.type;
                case "BUTTON":
                case "SELECT":
                case "TEXTAREA":
                    return !0;
                default:
                    return !1
            }
        }(e)) return !1;
    try {
        e.focus({
            preventScroll: !0
        })
    } catch (t) {}
    return document.activeElement === e
}
let mn = [];
const gn = e({
    name: "FocusTrap",
    props: {
        disabled: Boolean,
        active: Boolean,
        autoFocus: {
            type: Boolean,
            default: !0
        },
        onEsc: Function,
        initialFocusTo: String,
        finalFocusTo: String,
        returnFocusOnDeactivated: {
            type: Boolean,
            default: !0
        }
    },
    setup(e) {
        const n = function(e = 8) {
                return Math.random().toString(16).slice(2, 2 + e)
            }(),
            r = t(null),
            s = t(null);
        let l = !1,
            a = !1;
        const c = "undefined" == typeof document ? null : document.activeElement;

        function u() {
            return mn[mn.length - 1] === n
        }

        function f(t) {
            var n;
            "Escape" === t.code && u() && (null === (n = e.onEsc) || void 0 === n || n.call(e, t))
        }

        function h(e) {
            if (!a && u()) {
                const t = v();
                if (null === t) return;
                if (t.contains(ne(e))) return;
                b("first")
            }
        }

        function v() {
            const e = r.value;
            if (null === e) return null;
            let t = e;
            for (; !(t = t.nextSibling, null === t || t instanceof Element && "DIV" === t.tagName););
            return t
        }

        function p() {
            var t;
            if (e.disabled) return;
            if (document.removeEventListener("focus", h, !0), mn = mn.filter((e => e !== n)), u()) return;
            const {
                finalFocusTo: o
            } = e;
            void 0 !== o ? null === (t = xt(o)) || void 0 === t || t.focus({
                preventScroll: !0
            }) : e.returnFocusOnDeactivated && c instanceof HTMLElement && (a = !0, c.focus({
                preventScroll: !0
            }), a = !1)
        }

        function b(t) {
            if (u() && e.active) {
                const e = r.value,
                    n = s.value;
                if (null !== e && null !== n) {
                    const o = v();
                    if (null == o || o === n) return a = !0, e.focus({
                        preventScroll: !0
                    }), void(a = !1);
                    a = !0;
                    const r = "first" === t ? vn(o) : pn(o);
                    a = !1, r || (a = !0, e.focus({
                        preventScroll: !0
                    }), a = !1)
                }
            }
        }
        return i((() => {
            o((() => e.active), (t => {
                t ? (! function() {
                    var t;
                    if (e.disabled) return;
                    if (mn.push(n), e.autoFocus) {
                        const {
                            initialFocusTo: n
                        } = e;
                        void 0 === n ? b("first") : null === (t = xt(n)) || void 0 === t || t.focus({
                            preventScroll: !0
                        })
                    }
                    l = !0, document.addEventListener("focus", h, !0)
                }(), st("keydown", document, f)) : (lt("keydown", document, f), l && p())
            }), {
                immediate: !0
            })
        })), d((() => {
            lt("keydown", document, f), l && p()
        })), {
            focusableStartRef: r,
            focusableEndRef: s,
            focusableStyle: "position: absolute; height: 0; width: 0;",
            handleStartFocus: function(e) {
                if (a) return;
                const t = v();
                null !== t && (null !== e.relatedTarget && t.contains(e.relatedTarget) ? b("last") : b("first"))
            },
            handleEndFocus: function(e) {
                a || (null !== e.relatedTarget && e.relatedTarget === r.value ? b("last") : b("first"))
            }
        }
    },
    render() {
        const {
            default: e
        } = this.$slots;
        if (void 0 === e) return null;
        if (this.disabled) return e();
        const {
            active: t,
            focusableStyle: n
        } = this;
        return a(h, null, [a("div", {
            "aria-hidden": "true",
            tabindex: t ? "0" : "-1",
            ref: "focusableStartRef",
            style: n,
            onFocus: this.handleStartFocus
        }), e(), a("div", {
            "aria-hidden": "true",
            style: n,
            ref: "focusableEndRef",
            tabindex: t ? "0" : "-1",
            onFocus: this.handleEndFocus
        })])
    }
});
let wn = 0,
    yn = "",
    xn = "",
    $n = "",
    Sn = "";
const Cn = t("0px");
const zn = t(!1),
    En = () => {
        zn.value = !0
    },
    Rn = () => {
        zn.value = !1
    };
let Tn = 0;
const Bn = {
        fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
        fontWeight: "400",
        fontWeightStrong: "500",
        cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
        cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
        cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
        borderRadius: "3px",
        borderRadiusSmall: "2px",
        fontSize: "14px",
        fontSizeMini: "12px",
        fontSizeTiny: "12px",
        fontSizeSmall: "14px",
        fontSizeMedium: "14px",
        fontSizeLarge: "15px",
        fontSizeHuge: "16px",
        lineHeight: "1.6",
        heightMini: "16px",
        heightTiny: "22px",
        heightSmall: "28px",
        heightMedium: "34px",
        heightLarge: "40px",
        heightHuge: "46px"
    },
    {
        fontSize: kn,
        fontFamily: On,
        lineHeight: Mn
    } = Bn,
    Pn = Ze("body", `\n margin: 0;\n font-size: ${kn};\n font-family: ${On};\n line-height: ${Mn};\n -webkit-text-size-adjust: 100%;\n -webkit-tap-highlight-color: transparent;\n`, [Ze("input", "\n font-family: inherit;\n font-size: inherit;\n ")]);

function Fn(e, t, n, o, i, l) {
    const a = wt(),
        c = s("n-config-provider", null);
    if (n) {
        const e = () => {
            const e = null == l ? void 0 : l.value;
            n.mount({
                id: void 0 === e ? t : e + t,
                head: !0,
                props: {
                    bPrefix: e ? `.${e}-` : void 0
                },
                anchorMetaName: "naive-ui-style",
                ssr: a
            }), (null == c ? void 0 : c.preflightStyleDisabled) || Pn.mount({
                id: "n-global",
                head: !0,
                anchorMetaName: "naive-ui-style",
                ssr: a
            })
        };
        a ? e() : v(e)
    }
    return r((() => {
        var t;
        const {
            theme: {
                common: n,
                self: r,
                peers: s = {}
            } = {},
            themeOverrides: l = {},
            builtinThemeOverrides: a = {}
        } = i, {
            common: u,
            peers: d
        } = l, {
            common: f,
            [e]: {
                common: h,
                self: v,
                peers: p = {}
            } = {}
        } = (null == c ? void 0 : c.mergedThemeRef.value) || {}, {
            common: b,
            [e]: m = {}
        } = (null == c ? void 0 : c.mergedThemeOverridesRef.value) || {}, {
            common: g,
            peers: w = {}
        } = m, y = te({}, n || h || f || o.common, b, g, u);
        return {
            common: y,
            self: te(null === (t = r || v || o.self) || void 0 === t ? void 0 : t(y), a, m, l),
            peers: te({}, o.peers, p, s),
            peerOverrides: te({}, a.peers, w, d)
        }
    }))
}
Fn.props = {
    theme: Object,
    themeOverrides: Object,
    builtinThemeOverrides: Object
};

function In(e = {}, t = {
    defaultBordered: !0
}) {
    const n = s("n-config-provider", null);
    return {
        inlineThemeDisabled: null == n ? void 0 : n.inlineThemeDisabled,
        mergedRtlRef: null == n ? void 0 : n.mergedRtlRef,
        mergedComponentPropsRef: null == n ? void 0 : n.mergedComponentPropsRef,
        mergedBreakpointsRef: null == n ? void 0 : n.mergedBreakpointsRef,
        mergedBorderedRef: r((() => {
            var o, r;
            const {
                bordered: i
            } = e;
            return void 0 !== i ? i : null === (r = null !== (o = null == n ? void 0 : n.mergedBorderedRef.value) && void 0 !== o ? o : t.defaultBordered) || void 0 === r || r
        })),
        mergedClsPrefixRef: r((() => (null == n ? void 0 : n.mergedClsPrefixRef.value) || "n")),
        namespaceRef: r((() => null == n ? void 0 : n.mergedNamespaceRef.value))
    }
}

function Hn(e, n, o, r) {
    var i;
    o || function(e, t) {
        throw new Error(`[naive/${e}]: ${t}`)
    }("useThemeClass", "cssVarsRef is not passed");
    const l = null === (i = s("n-config-provider", null)) || void 0 === i ? void 0 : i.mergedThemeHashRef,
        a = t(""),
        c = wt();
    let u;
    const d = `__${e}`;
    return m((() => {
        (() => {
            let e = d;
            const t = n ? n.value : void 0,
                i = null == l ? void 0 : l.value;
            i && (e += "-" + i), t && (e += "-" + t);
            const {
                themeOverrides: s,
                builtinThemeOverrides: f
            } = r;
            s && (e += "-" + De(JSON.stringify(s))), f && (e += "-" + De(JSON.stringify(f))), a.value = e, u = () => {
                const t = o.value;
                let n = "";
                for (const e in t) n += `${e}: ${t[e]};`;
                Ze(`.${e}`, n).mount({
                    id: e,
                    ssr: c
                }), u = void 0
            }
        })()
    })), {
        themeClass: a,
        onRender: () => {
            null == u || u()
        }
    }
}

function An(e, t, n) {
    if (!t) return;
    const o = wt(),
        i = r((() => {
            const {
                value: n
            } = t;
            if (!n) return;
            const o = n[e];
            return o || void 0
        })),
        s = () => {
            m((() => {
                const {
                    value: t
                } = n, r = `${t}${e}Rtl`;
                if (function(e, t) {
                        if (void 0 === e) return !1;
                        if (t) {
                            const {
                                context: {
                                    ids: n
                                }
                            } = t;
                            return n.has(e)
                        }
                        return null !== Oe(e)
                    }(r, o)) return;
                const {
                    value: s
                } = i;
                s && s.style.mount({
                    id: r,
                    head: !0,
                    anchorMetaName: "naive-ui-style",
                    props: {
                        bPrefix: t ? `.${t}-` : void 0
                    },
                    ssr: o
                })
            }))
        };
    return o ? s() : v(s), i
}
const jn = "#FFF",
    Dn = "#000",
    Nn = "#000",
    Ln = "#fff",
    Wn = "#fff",
    _n = "#fff",
    Xn = "#fff",
    Un = "0.82",
    Yn = "0.72",
    qn = "0.38",
    Zn = "0.24",
    Vn = "0.18",
    Jn = "0.6",
    Gn = "0.5",
    Kn = "0.2",
    Qn = ".08",
    eo = "0",
    to = "0.25",
    no = "0.4",
    oo = "#36ad6a",
    ro = "#18a058",
    io = "#0c7a43",
    so = "#36ad6a",
    lo = "#4098fc",
    ao = "#2080f0",
    co = "#1060c9",
    uo = "#4098fc",
    fo = "#de576d",
    ho = "#d03050",
    vo = "#ab1f3f",
    po = "#de576d",
    bo = "#fcb040",
    mo = "#f0a020",
    go = "#c97c10",
    wo = "#fcb040",
    yo = "#36ad6a",
    xo = "#18a058",
    $o = "#0c7a43",
    So = "#36ad6a",
    Co = ve(jn),
    zo = ve(Dn),
    Eo = "rgba(" + zo.slice(0, 3).join(", ") + ", ";

function Ro(e) {
    return Eo + String(e) + ")"
}

function To(e) {
    const t = Array.from(zo);
    return t[3] = Number(e), be(Co, t)
}
const Bo = Object.assign(Object.assign({
        name: "common"
    }, Bn), {
        baseColor: jn,
        primaryColor: ro,
        primaryColorHover: oo,
        primaryColorPressed: io,
        primaryColorSuppl: so,
        infoColor: ao,
        infoColorHover: lo,
        infoColorPressed: co,
        infoColorSuppl: uo,
        successColor: xo,
        successColorHover: yo,
        successColorPressed: $o,
        successColorSuppl: So,
        warningColor: mo,
        warningColorHover: bo,
        warningColorPressed: go,
        warningColorSuppl: wo,
        errorColor: ho,
        errorColorHover: fo,
        errorColorPressed: vo,
        errorColorSuppl: po,
        textColorBase: Nn,
        textColor1: "rgb(31, 34, 37)",
        textColor2: "rgb(51, 54, 57)",
        textColor3: "rgb(118, 124, 130)",
        textColorDisabled: To(Zn),
        placeholderColor: To(Zn),
        placeholderColorDisabled: To(Vn),
        iconColor: To(Zn),
        iconColorHover: me(To(Zn), {
            lightness: .75
        }),
        iconColorPressed: me(To(Zn), {
            lightness: .9
        }),
        iconColorDisabled: To(Vn),
        opacity1: Un,
        opacity2: Yn,
        opacity3: qn,
        opacity4: Zn,
        opacity5: Vn,
        dividerColor: "rgb(239, 239, 245)",
        borderColor: "rgb(224, 224, 230)",
        closeIconColor: To(Number(Jn)),
        closeIconColorHover: To(Number(Jn)),
        closeIconColorPressed: To(Number(Jn)),
        closeColorHover: "rgba(0, 0, 0, .09)",
        closeColorPressed: "rgba(0, 0, 0, .13)",
        clearColor: To(Zn),
        clearColorHover: me(To(Zn), {
            lightness: .75
        }),
        clearColorPressed: me(To(Zn), {
            lightness: .9
        }),
        scrollbarColor: Ro(to),
        scrollbarColorHover: Ro(no),
        scrollbarWidth: "5px",
        scrollbarHeight: "5px",
        scrollbarBorderRadius: "5px",
        progressRailColor: To(Qn),
        railColor: "rgb(219, 219, 223)",
        popoverColor: Ln,
        tableColor: Wn,
        cardColor: Wn,
        modalColor: _n,
        bodyColor: Xn,
        tagColor: "#eee",
        avatarColor: To(Kn),
        invertedColor: "rgb(0, 20, 40)",
        inputColor: To(eo),
        codeColor: "rgb(244, 244, 248)",
        tabColor: "rgb(247, 247, 250)",
        actionColor: "rgb(250, 250, 252)",
        tableHeaderColor: "rgb(250, 250, 252)",
        hoverColor: "rgb(243, 243, 245)",
        tableColorHover: "rgba(0, 0, 100, 0.03)",
        tableColorStriped: "rgba(0, 0, 100, 0.02)",
        pressedColor: "rgb(237, 237, 239)",
        opacityDisabled: Gn,
        inputColorDisabled: "rgb(250, 250, 252)",
        buttonColor2: "rgba(46, 51, 56, .05)",
        buttonColor2Hover: "rgba(46, 51, 56, .09)",
        buttonColor2Pressed: "rgba(46, 51, 56, .13)",
        boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
        boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
        boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
    }),
    ko = {
        name: "Scrollbar",
        common: Bo,
        self: e => {
            const {
                scrollbarColor: t,
                scrollbarColorHover: n
            } = e;
            return {
                color: t,
                colorHover: n
            }
        }
    },
    {
        cubicBezierEaseInOut: Oo
    } = Bn;

function Mo({
    name: e = "fade-in",
    enterDuration: t = "0.2s",
    leaveDuration: n = "0.2s",
    enterCubicBezier: o = Oo,
    leaveCubicBezier: r = Oo
} = {}) {
    return [Ze(`&.${e}-transition-enter-active`, {
        transition: `all ${t} ${o}!important`
    }), Ze(`&.${e}-transition-leave-active`, {
        transition: `all ${n} ${r}!important`
    }), Ze(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
        opacity: 0
    }), Ze(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
        opacity: 1
    })]
}
const Po = Je("scrollbar", "\n overflow: hidden;\n position: relative;\n z-index: auto;\n height: 100%;\n width: 100%;\n", [Ze(">", [Je("scrollbar-container", "\n width: 100%;\n overflow: scroll;\n height: 100%;\n max-height: inherit;\n scrollbar-width: none;\n ", [Ze("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", "\n width: 0;\n height: 0;\n display: none;\n "), Ze(">", [Je("scrollbar-content", "\n box-sizing: border-box;\n min-width: 100%;\n ")])])]), Ze(">, +", [Je("scrollbar-rail", "\n position: absolute;\n pointer-events: none;\n user-select: none;\n -webkit-user-select: none;\n ", [Ke("horizontal", "\n left: 2px;\n right: 2px;\n bottom: 4px;\n height: var(--n-scrollbar-height);\n ", [Ze(">", [Ge("scrollbar", "\n height: var(--n-scrollbar-height);\n border-radius: var(--n-scrollbar-border-radius);\n right: 0;\n ")])]), Ke("vertical", "\n right: 4px;\n top: 2px;\n bottom: 2px;\n width: var(--n-scrollbar-width);\n ", [Ze(">", [Ge("scrollbar", "\n width: var(--n-scrollbar-width);\n border-radius: var(--n-scrollbar-border-radius);\n bottom: 0;\n ")])]), Ke("disabled", [Ze(">", [Ge("scrollbar", {
        pointerEvents: "none"
    })])]), Ze(">", [Ge("scrollbar", "\n position: absolute;\n cursor: pointer;\n pointer-events: all;\n background-color: var(--n-scrollbar-color);\n transition: background-color .2s var(--n-scrollbar-bezier);\n ", [Mo(), Ze("&:hover", {
        backgroundColor: "var(--n-scrollbar-color-hover)"
    })])])])])]),
    Fo = e({
        name: "Scrollbar",
        props: Object.assign(Object.assign({}, Fn.props), {
            size: {
                type: Number,
                default: 5
            },
            duration: {
                type: Number,
                default: 0
            },
            scrollable: {
                type: Boolean,
                default: !0
            },
            xScrollable: Boolean,
            trigger: {
                type: String,
                default: "hover"
            },
            useUnifiedContainer: Boolean,
            triggerDisplayManually: Boolean,
            container: Function,
            content: Function,
            containerClass: String,
            containerStyle: [String, Object],
            contentClass: String,
            contentStyle: [String, Object],
            horizontalRailStyle: [String, Object],
            verticalRailStyle: [String, Object],
            onScroll: Function,
            onWheel: Function,
            onResize: Function,
            internalOnUpdateScrollLeft: Function,
            internalHoistYRail: Boolean
        }),
        inheritAttrs: !1,
        setup(e) {
            const {
                mergedClsPrefixRef: n,
                inlineThemeDisabled: o,
                mergedRtlRef: s
            } = In(e), l = An("Scrollbar", s, n), a = t(null), c = t(null), u = t(null), f = t(null), h = t(null), v = t(null), g = t(null), w = t(null), y = t(null), x = t(null), $ = t(null), S = t(0), C = t(0), z = t(!1), E = t(!1);
            let R, T, B = !1,
                k = !1,
                O = 0,
                M = 0,
                P = 0,
                F = 0;
            const I = ct,
                H = r((() => {
                    const {
                        value: t
                    } = w, {
                        value: n
                    } = v, {
                        value: o
                    } = x;
                    return null === t || null === n || null === o ? 0 : Math.min(t, o * t / n + 1.5 * e.size)
                })),
                A = r((() => `${H.value}px`)),
                j = r((() => {
                    const {
                        value: t
                    } = y, {
                        value: n
                    } = g, {
                        value: o
                    } = $;
                    return null === t || null === n || null === o ? 0 : o * t / n + 1.5 * e.size
                })),
                D = r((() => `${j.value}px`)),
                N = r((() => {
                    const {
                        value: e
                    } = w, {
                        value: t
                    } = S, {
                        value: n
                    } = v, {
                        value: o
                    } = x;
                    if (null === e || null === n || null === o) return 0; {
                        const r = n - e;
                        return r ? t / r * (o - H.value) : 0
                    }
                })),
                L = r((() => `${N.value}px`)),
                W = r((() => {
                    const {
                        value: e
                    } = y, {
                        value: t
                    } = C, {
                        value: n
                    } = g, {
                        value: o
                    } = $;
                    if (null === e || null === n || null === o) return 0; {
                        const r = n - e;
                        return r ? t / r * (o - j.value) : 0
                    }
                })),
                _ = r((() => `${W.value}px`)),
                X = r((() => {
                    const {
                        value: e
                    } = w, {
                        value: t
                    } = v;
                    return null !== e && null !== t && t > e
                })),
                U = r((() => {
                    const {
                        value: e
                    } = y, {
                        value: t
                    } = g;
                    return null !== e && null !== t && t > e
                })),
                Y = r((() => {
                    const {
                        trigger: t
                    } = e;
                    return "none" === t || z.value
                })),
                q = r((() => {
                    const {
                        trigger: t
                    } = e;
                    return "none" === t || E.value
                })),
                Z = r((() => {
                    const {
                        container: t
                    } = e;
                    return t ? t() : c.value
                })),
                V = r((() => {
                    const {
                        content: t
                    } = e;
                    return t ? t() : u.value
                })),
                J = function(e) {
                    const t = {
                        isDeactivated: !1
                    };
                    let n = !1;
                    return p((() => {
                        t.isDeactivated = !1, n ? e() : n = !0
                    })), b((() => {
                        t.isDeactivated = !0, n || (n = !0)
                    })), t
                }((() => {
                    e.container || G({
                        top: S.value,
                        left: C.value
                    })
                })),
                G = (t, n) => {
                    if (!e.scrollable) return;
                    if ("number" == typeof t) return void K(null != n ? n : 0, t, 0, !1, "auto");
                    const {
                        left: o,
                        top: r,
                        index: i,
                        elSize: s,
                        position: l,
                        behavior: a,
                        el: c,
                        debounce: u = !0
                    } = t;
                    void 0 === o && void 0 === r || K(null != o ? o : 0, null != r ? r : 0, 0, !1, a), void 0 !== c ? K(0, c.offsetTop, c.offsetHeight, u, a) : void 0 !== i && void 0 !== s ? K(0, i * s, s, u, a) : "bottom" === l ? K(0, Number.MAX_SAFE_INTEGER, 0, !1, a) : "top" === l && K(0, 0, 0, !1, a)
                };

            function K(e, t, n, o, r) {
                const {
                    value: i
                } = Z;
                if (i) {
                    if (o) {
                        const {
                            scrollTop: o,
                            offsetHeight: s
                        } = i;
                        if (t > o) return void(t + n <= o + s || i.scrollTo({
                            left: e,
                            top: t + n - s,
                            behavior: r
                        }))
                    }
                    i.scrollTo({
                        left: e,
                        top: t,
                        behavior: r
                    })
                }
            }

            function Q() {
                ! function() {
                    void 0 !== T && window.clearTimeout(T);
                    T = window.setTimeout((() => {
                        E.value = !1
                    }), e.duration)
                }(),
                function() {
                    void 0 !== R && window.clearTimeout(R);
                    R = window.setTimeout((() => {
                        z.value = !1
                    }), e.duration)
                }()
            }

            function ee() {
                const {
                    value: e
                } = Z;
                e && (S.value = e.scrollTop, C.value = e.scrollLeft * ((null == l ? void 0 : l.value) ? -1 : 1))
            }

            function te() {
                const {
                    value: e
                } = Z;
                e && (S.value = e.scrollTop, C.value = e.scrollLeft * ((null == l ? void 0 : l.value) ? -1 : 1), w.value = e.offsetHeight, y.value = e.offsetWidth, v.value = e.scrollHeight, g.value = e.scrollWidth);
                const {
                    value: t
                } = h, {
                    value: n
                } = f;
                t && ($.value = t.offsetWidth), n && (x.value = n.offsetHeight)
            }

            function oe() {
                e.scrollable && (e.useUnifiedContainer ? te() : (! function() {
                    const {
                        value: e
                    } = V;
                    e && (v.value = e.offsetHeight, g.value = e.offsetWidth);
                    const {
                        value: t
                    } = Z;
                    t && (w.value = t.offsetHeight, y.value = t.offsetWidth);
                    const {
                        value: n
                    } = h, {
                        value: o
                    } = f;
                    n && ($.value = n.offsetWidth), o && (x.value = o.offsetHeight)
                }(), ee()))
            }

            function re(e) {
                var t;
                return !(null === (t = a.value) || void 0 === t ? void 0 : t.contains(ne(e)))
            }

            function ie(t) {
                if (!k) return;
                void 0 !== R && window.clearTimeout(R), void 0 !== T && window.clearTimeout(T);
                const {
                    value: n
                } = y, {
                    value: o
                } = g, {
                    value: r
                } = j;
                if (null === n || null === o) return;
                const i = (null == l ? void 0 : l.value) ? window.innerWidth - t.clientX - P : t.clientX - P,
                    s = o - n;
                let a = M + i * (o - n) / (n - r);
                a = Math.min(s, a), a = Math.max(a, 0);
                const {
                    value: c
                } = Z;
                if (c) {
                    c.scrollLeft = a * ((null == l ? void 0 : l.value) ? -1 : 1);
                    const {
                        internalOnUpdateScrollLeft: t
                    } = e;
                    t && t(a)
                }
            }

            function se(e) {
                e.preventDefault(), e.stopPropagation(), lt("mousemove", window, ie, !0), lt("mouseup", window, se, !0), k = !1, oe(), re(e) && Q()
            }

            function le(e) {
                if (!B) return;
                void 0 !== R && window.clearTimeout(R), void 0 !== T && window.clearTimeout(T);
                const {
                    value: t
                } = w, {
                    value: n
                } = v, {
                    value: o
                } = H;
                if (null === t || null === n) return;
                const r = e.clientY - F,
                    i = n - t;
                let s = O + r * (n - t) / (t - o);
                s = Math.min(i, s), s = Math.max(s, 0);
                const {
                    value: l
                } = Z;
                l && (l.scrollTop = s)
            }

            function ae(e) {
                e.preventDefault(), e.stopPropagation(), lt("mousemove", window, le, !0), lt("mouseup", window, ae, !0), B = !1, oe(), re(e) && Q()
            }
            m((() => {
                const {
                    value: e
                } = U, {
                    value: t
                } = X, {
                    value: o
                } = n, {
                    value: r
                } = h, {
                    value: i
                } = f;
                r && (e ? r.classList.remove(`${o}-scrollbar-rail--disabled`) : r.classList.add(`${o}-scrollbar-rail--disabled`)), i && (t ? i.classList.remove(`${o}-scrollbar-rail--disabled`) : i.classList.add(`${o}-scrollbar-rail--disabled`))
            })), i((() => {
                e.container || oe()
            })), d((() => {
                void 0 !== R && window.clearTimeout(R), void 0 !== T && window.clearTimeout(T), lt("mousemove", window, le, !0), lt("mouseup", window, ae, !0)
            }));
            const ce = Fn("Scrollbar", "-scrollbar", Po, ko, e, n),
                ue = r((() => {
                    const {
                        common: {
                            cubicBezierEaseInOut: e,
                            scrollbarBorderRadius: t,
                            scrollbarHeight: n,
                            scrollbarWidth: o
                        },
                        self: {
                            color: r,
                            colorHover: i
                        }
                    } = ce.value;
                    return {
                        "--n-scrollbar-bezier": e,
                        "--n-scrollbar-color": r,
                        "--n-scrollbar-color-hover": i,
                        "--n-scrollbar-border-radius": t,
                        "--n-scrollbar-width": o,
                        "--n-scrollbar-height": n
                    }
                })),
                de = o ? Hn("scrollbar", void 0, ue, e) : void 0,
                fe = {
                    scrollTo: G,
                    scrollBy: (t, n) => {
                        if (!e.scrollable) return;
                        const {
                            value: o
                        } = Z;
                        o && ("object" == typeof t ? o.scrollBy(t) : o.scrollBy(t, n || 0))
                    },
                    sync: oe,
                    syncUnifiedContainer: te,
                    handleMouseEnterWrapper: function() {
                        ! function() {
                            void 0 !== R && window.clearTimeout(R);
                            z.value = !0
                        }(),
                        function() {
                            void 0 !== T && window.clearTimeout(T);
                            E.value = !0
                        }(), oe()
                    },
                    handleMouseLeaveWrapper: function() {
                        Q()
                    }
                };
            return Object.assign(Object.assign({}, fe), {
                mergedClsPrefix: n,
                rtlEnabled: l,
                containerScrollTop: S,
                wrapperRef: a,
                containerRef: c,
                contentRef: u,
                yRailRef: f,
                xRailRef: h,
                needYBar: X,
                needXBar: U,
                yBarSizePx: A,
                xBarSizePx: D,
                yBarTopPx: L,
                xBarLeftPx: _,
                isShowXBar: Y,
                isShowYBar: q,
                isIos: I,
                handleScroll: function(t) {
                    const {
                        onScroll: n
                    } = e;
                    n && n(t), ee()
                },
                handleContentResize: () => {
                    J.isDeactivated || oe()
                },
                handleContainerResize: t => {
                    if (J.isDeactivated) return;
                    const {
                        onResize: n
                    } = e;
                    n && n(t), oe()
                },
                handleYScrollMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation(), B = !0, st("mousemove", window, le, !0), st("mouseup", window, ae, !0), O = S.value, F = e.clientY
                },
                handleXScrollMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation(), k = !0, st("mousemove", window, ie, !0), st("mouseup", window, se, !0), M = C.value, P = (null == l ? void 0 : l.value) ? window.innerWidth - e.clientX : e.clientX
                },
                cssVars: o ? void 0 : ue,
                themeClass: null == de ? void 0 : de.themeClass,
                onRender: null == de ? void 0 : de.onRender
            })
        },
        render() {
            var e;
            const {
                $slots: t,
                mergedClsPrefix: n,
                triggerDisplayManually: o,
                rtlEnabled: r,
                internalHoistYRail: i
            } = this;
            if (!this.scrollable) return null === (e = t.default) || void 0 === e ? void 0 : e.call(t);
            const s = "none" === this.trigger,
                l = () => a("div", {
                    ref: "yRailRef",
                    class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`],
                    "data-scrollbar-rail": !0,
                    style: this.verticalRailStyle,
                    "aria-hidden": !0
                }, a(s ? Se : g, s ? null : {
                    name: "fade-in-transition"
                }, {
                    default: () => this.needYBar && this.isShowYBar && !this.isIos ? a("div", {
                        class: `${n}-scrollbar-rail__scrollbar`,
                        style: {
                            height: this.yBarSizePx,
                            top: this.yBarTopPx
                        },
                        onMousedown: this.handleYScrollMouseDown
                    }) : null
                })),
                c = () => {
                    var e, c;
                    return null === (e = this.onRender) || void 0 === e || e.call(this), a("div", w(this.$attrs, {
                        role: "none",
                        ref: "wrapperRef",
                        class: [`${n}-scrollbar`, this.themeClass, r && `${n}-scrollbar--rtl`],
                        style: this.cssVars,
                        onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
                        onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper
                    }), [this.container ? null === (c = t.default) || void 0 === c ? void 0 : c.call(t) : a("div", {
                        role: "none",
                        ref: "containerRef",
                        class: [`${n}-scrollbar-container`, this.containerClass],
                        style: this.containerStyle,
                        onScroll: this.handleScroll,
                        onWheel: this.onWheel
                    }, a(fn, {
                        onResize: this.handleContentResize
                    }, {
                        default: () => a("div", {
                            ref: "contentRef",
                            role: "none",
                            style: [{
                                width: this.xScrollable ? "fit-content" : null
                            }, this.contentStyle],
                            class: [`${n}-scrollbar-content`, this.contentClass]
                        }, t)
                    })), i ? null : l(), this.xScrollable && a("div", {
                        ref: "xRailRef",
                        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`],
                        style: this.horizontalRailStyle,
                        "data-scrollbar-rail": !0,
                        "aria-hidden": !0
                    }, a(s ? Se : g, s ? null : {
                        name: "fade-in-transition"
                    }, {
                        default: () => this.needXBar && this.isShowXBar && !this.isIos ? a("div", {
                            class: `${n}-scrollbar-rail__scrollbar`,
                            style: {
                                width: this.xBarSizePx,
                                right: r ? this.xBarLeftPx : void 0,
                                left: r ? void 0 : this.xBarLeftPx
                            },
                            onMousedown: this.handleXScrollMouseDown
                        }) : null
                    }))])
                },
                u = this.container ? c() : a(fn, {
                    onResize: this.handleContainerResize
                }, {
                    default: c
                });
            return i ? a(h, null, u, l()) : u
        }
    }),
    Io = {
        name: "Drawer",
        common: Bo,
        peers: {
            Scrollbar: ko
        },
        self: e => {
            const {
                modalColor: t,
                textColor1: n,
                textColor2: o,
                boxShadow3: r,
                lineHeight: i,
                fontWeightStrong: s,
                dividerColor: l,
                closeColorHover: a,
                closeColorPressed: c,
                closeIconColor: u,
                closeIconColorHover: d,
                closeIconColorPressed: f,
                borderRadius: h,
                primaryColorHover: v
            } = e;
            return {
                bodyPadding: "16px 24px",
                headerPadding: "16px 24px",
                footerPadding: "16px 24px",
                color: t,
                textColor: o,
                titleTextColor: n,
                titleFontSize: "18px",
                titleFontWeight: s,
                boxShadow: r,
                lineHeight: i,
                headerBorderBottom: `1px solid ${l}`,
                footerBorderTop: `1px solid ${l}`,
                closeIconColor: u,
                closeIconColorHover: d,
                closeIconColorPressed: f,
                closeSize: "22px",
                closeIconSize: "18px",
                closeColorHover: a,
                closeColorPressed: c,
                closeBorderRadius: h,
                resizableTriggerColorHover: v
            }
        }
    },
    Ho = e({
        name: "NDrawerContent",
        inheritAttrs: !1,
        props: {
            blockScroll: Boolean,
            show: {
                type: Boolean,
                default: void 0
            },
            displayDirective: {
                type: String,
                required: !0
            },
            placement: {
                type: String,
                required: !0
            },
            contentStyle: [Object, String],
            nativeScrollbar: {
                type: Boolean,
                required: !0
            },
            scrollbarProps: Object,
            trapFocus: {
                type: Boolean,
                default: !0
            },
            autoFocus: {
                type: Boolean,
                default: !0
            },
            showMask: {
                type: [Boolean, String],
                required: !0
            },
            resizable: Boolean,
            onClickoutside: Function,
            onAfterLeave: Function,
            onAfterEnter: Function,
            onEsc: Function
        },
        setup(e) {
            const n = t(!!e.show),
                l = t(null),
                a = s("n-drawer");
            let c = 0,
                u = "",
                f = null;
            const h = t(!1),
                v = t(!1),
                p = r((() => "top" === e.placement || "bottom" === e.placement)),
                {
                    mergedClsPrefixRef: b,
                    mergedRtlRef: g
                } = In(e),
                w = An("Drawer", g, b),
                {
                    doUpdateHeight: x,
                    doUpdateWidth: S
                } = a,
                C = t => {
                    var n, o;
                    if (v.value)
                        if (p.value) {
                            let o = (null === (n = l.value) || void 0 === n ? void 0 : n.offsetHeight) || 0;
                            const r = c - t.clientY;
                            o += "bottom" === e.placement ? r : -r, x(o), c = t.clientY
                        } else {
                            let n = (null === (o = l.value) || void 0 === o ? void 0 : o.offsetWidth) || 0;
                            const r = c - t.clientX;
                            n += "right" === e.placement ? r : -r, S(n), c = t.clientX
                        }
                },
                z = () => {
                    v.value && (c = 0, v.value = !1, document.body.style.cursor = u, document.body.removeEventListener("mousemove", C), document.body.removeEventListener("mouseup", z), document.body.removeEventListener("mouseleave", E))
                },
                E = z;
            m((() => {
                e.show && (n.value = !0)
            })), o((() => e.show), (e => {
                e || z()
            })), d((() => {
                z()
            }));
            const R = r((() => {
                const {
                    show: t
                } = e, n = [
                    [$, t]
                ];
                return e.showMask || n.push([ft, e.onClickoutside, void 0, {
                    capture: !0
                }]), n
            }));
            return function(e) {
                if ("undefined" == typeof document) return;
                const t = document.documentElement;
                let n, r = !1;
                const s = () => {
                    t.style.marginRight = yn, t.style.overflow = xn, t.style.overflowX = $n, t.style.overflowY = Sn, Cn.value = "0px"
                };
                i((() => {
                    n = o(e, (e => {
                        if (e) {
                            if (!wn) {
                                const e = window.innerWidth - t.offsetWidth;
                                e > 0 && (yn = t.style.marginRight, t.style.marginRight = `${e}px`, Cn.value = `${e}px`), xn = t.style.overflow, $n = t.style.overflowX, Sn = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden"
                            }
                            r = !0, wn++
                        } else wn--, wn || s(), r = !1
                    }), {
                        immediate: !0
                    })
                })), d((() => {
                    null == n || n(), r && (wn--, wn || s(), r = !1)
                }))
            }(r((() => e.blockScroll && n.value))), y("n-drawer-body", l), y("n-popover-body", null), y("n-modal-body", null), {
                bodyRef: l,
                rtlEnabled: w,
                mergedClsPrefix: a.mergedClsPrefixRef,
                isMounted: a.isMountedRef,
                mergedTheme: a.mergedThemeRef,
                displayed: n,
                transitionName: r((() => ({
                    right: "slide-in-from-right-transition",
                    left: "slide-in-from-left-transition",
                    top: "slide-in-from-top-transition",
                    bottom: "slide-in-from-bottom-transition"
                }[e.placement]))),
                handleAfterLeave: function() {
                    var t;
                    n.value = !1, null === (t = e.onAfterLeave) || void 0 === t || t.call(e)
                },
                bodyDirectives: R,
                handleMousedownResizeTrigger: e => {
                    v.value = !0, c = p.value ? e.clientY : e.clientX, u = document.body.style.cursor, document.body.style.cursor = p.value ? "ns-resize" : "ew-resize", document.body.addEventListener("mousemove", C), document.body.addEventListener("mouseleave", E), document.body.addEventListener("mouseup", z)
                },
                handleMouseenterResizeTrigger: () => {
                    null !== f && (window.clearTimeout(f), f = null), v.value ? h.value = !0 : f = window.setTimeout((() => {
                        h.value = !0
                    }), 300)
                },
                handleMouseleaveResizeTrigger: () => {
                    null !== f && (window.clearTimeout(f), f = null), h.value = !1
                },
                isDragging: v,
                isHoverOnResizeTrigger: h
            }
        },
        render() {
            const {
                $slots: e,
                mergedClsPrefix: t
            } = this;
            return "show" === this.displayDirective || this.displayed || this.show ? x(a("div", {
                role: "none"
            }, a(gn, {
                disabled: !this.showMask || !this.trapFocus,
                active: this.show,
                autoFocus: this.autoFocus,
                onEsc: this.onEsc
            }, {
                default: () => a(g, {
                    name: this.transitionName,
                    appear: this.isMounted,
                    onAfterEnter: this.onAfterEnter,
                    onAfterLeave: this.handleAfterLeave
                }, {
                    default: () => x(a("div", w(this.$attrs, {
                        role: "dialog",
                        ref: "bodyRef",
                        "aria-modal": "true",
                        class: [`${t}-drawer`, this.rtlEnabled && `${t}-drawer--rtl`, `${t}-drawer--${this.placement}-placement`, this.isDragging && `${t}-drawer--unselectable`, this.nativeScrollbar && `${t}-drawer--native-scrollbar`]
                    }), [this.resizable ? a("div", {
                        class: [`${t}-drawer__resize-trigger`, (this.isDragging || this.isHoverOnResizeTrigger) && `${t}-drawer__resize-trigger--hover`],
                        onMouseenter: this.handleMouseenterResizeTrigger,
                        onMouseleave: this.handleMouseleaveResizeTrigger,
                        onMousedown: this.handleMousedownResizeTrigger
                    }) : null, this.nativeScrollbar ? a("div", {
                        class: `${t}-drawer-content-wrapper`,
                        style: this.contentStyle,
                        role: "none"
                    }, e) : a(Fo, Object.assign({}, this.scrollbarProps, {
                        contentStyle: this.contentStyle,
                        contentClass: `${t}-drawer-content-wrapper`,
                        theme: this.mergedTheme.peers.Scrollbar,
                        themeOverrides: this.mergedTheme.peerOverrides.Scrollbar
                    }), e)]), this.bodyDirectives)
                })
            })), [
                [$, "if" === this.displayDirective || this.displayed || this.show]
            ]) : null
        }
    }),
    {
        cubicBezierEaseIn: Ao,
        cubicBezierEaseOut: jo
    } = Bn;
const {
    cubicBezierEaseIn: Do,
    cubicBezierEaseOut: No
} = Bn;
const {
    cubicBezierEaseIn: Lo,
    cubicBezierEaseOut: Wo
} = Bn;
const {
    cubicBezierEaseIn: _o,
    cubicBezierEaseOut: Xo
} = Bn;
const Uo = Ze([Je("drawer", "\n word-break: break-word;\n line-height: var(--n-line-height);\n position: absolute;\n pointer-events: all;\n box-shadow: var(--n-box-shadow);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n background-color: var(--n-color);\n color: var(--n-text-color);\n box-sizing: border-box;\n ", [function({
        duration: e = "0.3s",
        leaveDuration: t = "0.2s",
        name: n = "slide-in-from-right"
    } = {}) {
        return [Ze(`&.${n}-transition-leave-active`, {
            transition: `transform ${t} ${Ao}`
        }), Ze(`&.${n}-transition-enter-active`, {
            transition: `transform ${e} ${jo}`
        }), Ze(`&.${n}-transition-enter-to`, {
            transform: "translateX(0)"
        }), Ze(`&.${n}-transition-enter-from`, {
            transform: "translateX(100%)"
        }), Ze(`&.${n}-transition-leave-from`, {
            transform: "translateX(0)"
        }), Ze(`&.${n}-transition-leave-to`, {
            transform: "translateX(100%)"
        })]
    }(), function({
        duration: e = "0.3s",
        leaveDuration: t = "0.2s",
        name: n = "slide-in-from-left"
    } = {}) {
        return [Ze(`&.${n}-transition-leave-active`, {
            transition: `transform ${t} ${Do}`
        }), Ze(`&.${n}-transition-enter-active`, {
            transition: `transform ${e} ${No}`
        }), Ze(`&.${n}-transition-enter-to`, {
            transform: "translateX(0)"
        }), Ze(`&.${n}-transition-enter-from`, {
            transform: "translateX(-100%)"
        }), Ze(`&.${n}-transition-leave-from`, {
            transform: "translateX(0)"
        }), Ze(`&.${n}-transition-leave-to`, {
            transform: "translateX(-100%)"
        })]
    }(), function({
        duration: e = "0.3s",
        leaveDuration: t = "0.2s",
        name: n = "slide-in-from-top"
    } = {}) {
        return [Ze(`&.${n}-transition-leave-active`, {
            transition: `transform ${t} ${Lo}`
        }), Ze(`&.${n}-transition-enter-active`, {
            transition: `transform ${e} ${Wo}`
        }), Ze(`&.${n}-transition-enter-to`, {
            transform: "translateY(0)"
        }), Ze(`&.${n}-transition-enter-from`, {
            transform: "translateY(-100%)"
        }), Ze(`&.${n}-transition-leave-from`, {
            transform: "translateY(0)"
        }), Ze(`&.${n}-transition-leave-to`, {
            transform: "translateY(-100%)"
        })]
    }(), function({
        duration: e = "0.3s",
        leaveDuration: t = "0.2s",
        name: n = "slide-in-from-bottom"
    } = {}) {
        return [Ze(`&.${n}-transition-leave-active`, {
            transition: `transform ${t} ${_o}`
        }), Ze(`&.${n}-transition-enter-active`, {
            transition: `transform ${e} ${Xo}`
        }), Ze(`&.${n}-transition-enter-to`, {
            transform: "translateY(0)"
        }), Ze(`&.${n}-transition-enter-from`, {
            transform: "translateY(100%)"
        }), Ze(`&.${n}-transition-leave-from`, {
            transform: "translateY(0)"
        }), Ze(`&.${n}-transition-leave-to`, {
            transform: "translateY(100%)"
        })]
    }(), Ke("unselectable", "\n user-select: none; \n -webkit-user-select: none;\n "), Ke("native-scrollbar", [Je("drawer-content-wrapper", "\n overflow: auto;\n height: 100%;\n ")]), Ge("resize-trigger", "\n position: absolute;\n background-color: #0000;\n transition: background-color .3s var(--n-bezier);\n ", [Ke("hover", "\n background-color: var(--n-resize-trigger-color-hover);\n ")]), Je("drawer-content-wrapper", "\n box-sizing: border-box;\n "), Je("drawer-content", "\n height: 100%;\n display: flex;\n flex-direction: column;\n ", [Ke("native-scrollbar", [Je("drawer-body-content-wrapper", "\n height: 100%;\n overflow: auto;\n ")]), Je("drawer-body", "\n flex: 1 0 0;\n overflow: hidden;\n "), Je("drawer-body-content-wrapper", "\n box-sizing: border-box;\n padding: var(--n-body-padding);\n "), Je("drawer-header", "\n font-weight: var(--n-title-font-weight);\n line-height: 1;\n font-size: var(--n-title-font-size);\n color: var(--n-title-text-color);\n padding: var(--n-header-padding);\n transition: border .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-divider-color);\n border-bottom: var(--n-header-border-bottom);\n display: flex;\n justify-content: space-between;\n align-items: center;\n ", [Ge("close", "\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ")]), Je("drawer-footer", "\n display: flex;\n justify-content: flex-end;\n border-top: var(--n-footer-border-top);\n transition: border .3s var(--n-bezier);\n padding: var(--n-footer-padding);\n ")]), Ke("right-placement", "\n top: 0;\n bottom: 0;\n right: 0;\n ", [Ge("resize-trigger", "\n width: 3px;\n height: 100%;\n top: 0;\n left: 0;\n transform: translateX(-1.5px);\n cursor: ew-resize;\n ")]), Ke("left-placement", "\n top: 0;\n bottom: 0;\n left: 0;\n ", [Ge("resize-trigger", "\n width: 3px;\n height: 100%;\n top: 0;\n right: 0;\n transform: translateX(1.5px);\n cursor: ew-resize;\n ")]), Ke("top-placement", "\n top: 0;\n left: 0;\n right: 0;\n ", [Ge("resize-trigger", "\n width: 100%;\n height: 3px;\n bottom: 0;\n left: 0;\n transform: translateY(1.5px);\n cursor: ns-resize;\n ")]), Ke("bottom-placement", "\n left: 0;\n bottom: 0;\n right: 0;\n ", [Ge("resize-trigger", "\n width: 100%;\n height: 3px;\n top: 0;\n left: 0;\n transform: translateY(-1.5px);\n cursor: ns-resize;\n ")])]), Ze("body", [Ze(">", [Je("drawer-container", {
        position: "fixed"
    })])]), Je("drawer-container", "\n position: relative;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n pointer-events: none;\n ", [Ze("> *", {
        pointerEvents: "all"
    })]), Je("drawer-mask", "\n background-color: rgba(0, 0, 0, .3);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ", [Ke("invisible", "\n background-color: rgba(0, 0, 0, 0)\n "), Mo({
        enterDuration: "0.2s",
        leaveDuration: "0.2s",
        enterCubicBezier: "var(--n-bezier-in)",
        leaveCubicBezier: "var(--n-bezier-out)"
    })])]),
    Yo = e({
        name: "Drawer",
        inheritAttrs: !1,
        props: Object.assign(Object.assign({}, Fn.props), {
            show: Boolean,
            width: [Number, String],
            height: [Number, String],
            placement: {
                type: String,
                default: "right"
            },
            maskClosable: {
                type: Boolean,
                default: !0
            },
            showMask: {
                type: [Boolean, String],
                default: !0
            },
            to: [String, Object],
            displayDirective: {
                type: String,
                default: "if"
            },
            nativeScrollbar: {
                type: Boolean,
                default: !0
            },
            zIndex: Number,
            onMaskClick: Function,
            scrollbarProps: Object,
            contentStyle: [Object, String],
            trapFocus: {
                type: Boolean,
                default: !0
            },
            onEsc: Function,
            autoFocus: {
                type: Boolean,
                default: !0
            },
            closeOnEsc: {
                type: Boolean,
                default: !0
            },
            blockScroll: {
                type: Boolean,
                default: !0
            },
            resizable: Boolean,
            defaultWidth: {
                type: [Number, String],
                default: 251
            },
            defaultHeight: {
                type: [Number, String],
                default: 251
            },
            onUpdateWidth: [Function, Array],
            onUpdateHeight: [Function, Array],
            "onUpdate:width": [Function, Array],
            "onUpdate:height": [Function, Array],
            "onUpdate:show": [Function, Array],
            onUpdateShow: [Function, Array],
            onAfterEnter: Function,
            onAfterLeave: Function,
            drawerStyle: [String, Object],
            drawerClass: String,
            target: null,
            onShow: Function,
            onHide: Function
        }),
        setup(e) {
            m((() => {
                void 0 !== e.drawerStyle && $e("drawer", "`drawer-style` is deprecated, please use `style` instead."), void 0 !== e.drawerClass && $e("drawer", "`drawer-class` is deprecated, please use `class` instead."), void 0 !== e.target && $e("drawer", "`target` is deprecated, please use `to` instead."), void 0 !== e.onShow && $e("drawer", "`on-show` is deprecated, please use `on-update:show` instead."), void 0 !== e.onHide && $e("drawer", "`on-hide` is deprecated, please use `on-update:show` instead.")
            }));
            const {
                mergedClsPrefixRef: o,
                namespaceRef: s,
                inlineThemeDisabled: a
            } = In(e), c = function() {
                const e = t(!1);
                return i((() => {
                    e.value = !0
                })), n(e)
            }(), u = Fn("Drawer", "-drawer", Uo, Io, e, o), f = t(e.defaultWidth), h = t(e.defaultHeight), p = at(l(e, "width"), f), b = at(l(e, "height"), h), g = r((() => {
                const {
                    placement: t
                } = e;
                return "top" === t || "bottom" === t ? "" : Ee(p.value)
            })), w = r((() => {
                const {
                    placement: t
                } = e;
                return "left" === t || "right" === t ? "" : Ee(b.value)
            })), x = r((() => [{
                width: g.value,
                height: w.value
            }, e.drawerStyle || ""]));
            const $ = (et && (v((() => {
                Tn || (window.addEventListener("compositionstart", En), window.addEventListener("compositionend", Rn)), Tn++
            })), d((() => {
                Tn <= 1 ? (window.removeEventListener("compositionstart", En), window.removeEventListener("compositionend", Rn), Tn = 0) : Tn--
            }))), zn);

            function S(t) {
                const {
                    onHide: n,
                    onUpdateShow: o,
                    "onUpdate:show": r
                } = e;
                o && ye(o, t), r && ye(r, t), n && !t && ye(n, t)
            }
            y("n-drawer", {
                isMountedRef: c,
                mergedThemeRef: u,
                mergedClsPrefixRef: o,
                doUpdateShow: S,
                doUpdateHeight: t => {
                    const {
                        onUpdateHeight: n,
                        "onUpdate:width": o
                    } = e;
                    n && ye(n, t), o && ye(o, t), h.value = t
                },
                doUpdateWidth: t => {
                    const {
                        onUpdateWidth: n,
                        "onUpdate:width": o
                    } = e;
                    n && ye(n, t), o && ye(o, t), f.value = t
                }
            });
            const C = r((() => {
                    const {
                        common: {
                            cubicBezierEaseInOut: e,
                            cubicBezierEaseIn: t,
                            cubicBezierEaseOut: n
                        },
                        self: {
                            color: o,
                            textColor: r,
                            boxShadow: i,
                            lineHeight: s,
                            headerPadding: l,
                            footerPadding: a,
                            bodyPadding: c,
                            titleFontSize: d,
                            titleTextColor: f,
                            titleFontWeight: h,
                            headerBorderBottom: v,
                            footerBorderTop: p,
                            closeIconColor: b,
                            closeIconColorHover: m,
                            closeIconColorPressed: g,
                            closeColorHover: w,
                            closeColorPressed: y,
                            closeIconSize: x,
                            closeSize: $,
                            closeBorderRadius: S,
                            resizableTriggerColorHover: C
                        }
                    } = u.value;
                    return {
                        "--n-line-height": s,
                        "--n-color": o,
                        "--n-text-color": r,
                        "--n-box-shadow": i,
                        "--n-bezier": e,
                        "--n-bezier-out": n,
                        "--n-bezier-in": t,
                        "--n-header-padding": l,
                        "--n-body-padding": c,
                        "--n-footer-padding": a,
                        "--n-title-text-color": f,
                        "--n-title-font-size": d,
                        "--n-title-font-weight": h,
                        "--n-header-border-bottom": v,
                        "--n-footer-border-top": p,
                        "--n-close-icon-color": b,
                        "--n-close-icon-color-hover": m,
                        "--n-close-icon-color-pressed": g,
                        "--n-close-size": $,
                        "--n-close-color-hover": w,
                        "--n-close-color-pressed": y,
                        "--n-close-icon-size": x,
                        "--n-close-border-radius": S,
                        "--n-resize-trigger-color-hover": C
                    }
                })),
                z = a ? Hn("drawer", void 0, C, e) : void 0;
            return {
                mergedClsPrefix: o,
                namespace: s,
                mergedBodyStyle: x,
                handleMaskClick: function(t) {
                    const {
                        onMaskClick: n,
                        maskClosable: o
                    } = e;
                    o && S(!1), n && n(t)
                },
                handleEsc: function(t) {
                    var n, o;
                    null === (n = e.onEsc) || void 0 === n || n.call(e), e.show && e.closeOnEsc && (o = t, !tt.has(o)) && !$.value && S(!1)
                },
                mergedTheme: u,
                cssVars: a ? void 0 : C,
                themeClass: null == z ? void 0 : z.themeClass,
                onRender: null == z ? void 0 : z.onRender,
                isMounted: c
            }
        },
        render() {
            const {
                mergedClsPrefix: e
            } = this;
            return a($t, {
                to: this.to,
                show: this.show
            }, {
                default: () => {
                    var t;
                    return null === (t = this.onRender) || void 0 === t || t.call(this), x(a("div", {
                        class: [`${e}-drawer-container`, this.namespace, this.themeClass],
                        style: this.cssVars,
                        role: "none"
                    }, this.showMask ? a(g, {
                        name: "fade-in-transition",
                        appear: this.isMounted
                    }, {
                        default: () => this.show ? a("div", {
                            "aria-hidden": !0,
                            class: [`${e}-drawer-mask`, "transparent" === this.showMask && `${e}-drawer-mask--invisible`],
                            onClick: this.handleMaskClick
                        }) : null
                    }) : null, a(Ho, Object.assign({}, this.$attrs, {
                        class: [this.drawerClass, this.$attrs.class],
                        style: [this.mergedBodyStyle, this.$attrs.style],
                        blockScroll: this.blockScroll,
                        contentStyle: this.contentStyle,
                        placement: this.placement,
                        scrollbarProps: this.scrollbarProps,
                        show: this.show,
                        displayDirective: this.displayDirective,
                        nativeScrollbar: this.nativeScrollbar,
                        onAfterEnter: this.onAfterEnter,
                        onAfterLeave: this.onAfterLeave,
                        trapFocus: this.trapFocus,
                        autoFocus: this.autoFocus,
                        resizable: this.resizable,
                        showMask: this.showMask,
                        onEsc: this.handleEsc,
                        onClickoutside: this.handleMaskClick
                    }), this.$slots)), [
                        [pt, {
                            zIndex: this.zIndex,
                            enabled: this.show
                        }]
                    ])
                }
            })
        }
    });
export {
    Yo as N
};