import {
    al as e,
    O as t,
    am as a,
    g as l,
    w as o,
    Q as n,
    o as r,
    b as s,
    h as i,
    i as u,
    n as c,
    F as h,
    c as d,
    aa as f,
    an as p,
    a5 as v,
    Y as m,
    K as b,
    L as g,
    z as k,
    S as _,
    ac as y,
    t as w,
    J as C,
    m as M,
    e as $,
    k as x,
    j as V,
    p as E,
    C as N,
    x as j,
    s as S,
    r as A,
    a as F,
    ao as L,
    _ as B
} from "./el-select.e274bb48.js"; /* empty css                  */
import {
    ElButton as I
} from "./index.534437f3.js";
import {
    _ as H,
    b as W,
    d as O,
    E as T,
    w as z
} from "./index.176a125e.js";
import {
    E as D
} from "./index.742e3cb2.js";
import {
    E as R
} from "./index.72bec9e8.js";
import {
    b as q,
    d as K
} from "./index.4e5ff846.js";
import {
    u as P
} from "./index.0e1148e8.js";
import {
    g as U
} from "./position.8ddd1c03.js";
import {
    b as Y,
    u as X,
    d as G
} from "./index.8720847e.js";
import {
    U as J,
    i as Q,
    C as Z
} from "./focus-trap.e600e472.js";
import {
    u as ee
} from "./index.14b43c35.js";
import {
    u as te,
    a as ae
} from "./index.d235e992.js";
import {
    d as le
} from "./style.d69d81d7.js";
import {
    C as oe
} from "./index.87f7d0e4.js";
import {
    d as ne
} from "./debounce.abbfdaeb.js";
let re = !1;

function se(t, a) {
    if (!e) return;
    const l = function(e) {
            var t;
            null == (t = a.drag) || t.call(a, e)
        },
        o = function(e) {
            var t;
            document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", o), document.removeEventListener("touchmove", l), document.removeEventListener("touchend", o), document.onselectstart = null, document.ondragstart = null, re = !1, null == (t = a.end) || t.call(a, e)
        },
        n = function(e) {
            var t;
            re || (e.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", l), document.addEventListener("mouseup", o), document.addEventListener("touchmove", l), document.addEventListener("touchend", o), re = !0, null == (t = a.start) || t.call(a, e))
        };
    t.addEventListener("mousedown", n), t.addEventListener("touchstart", n)
}
var ie = H(t({
    name: "ElColorAlphaSlider",
    props: {
        color: {
            type: Object,
            required: !0
        },
        vertical: {
            type: Boolean,
            default: !1
        }
    },
    setup(e) {
        const t = P("color-alpha-slider"),
            r = h(),
            s = a(),
            i = a(),
            u = l(0),
            c = l(0),
            d = l();

        function f(t) {
            if (!i.value || !s.value) return;
            const a = r.vnode.el.getBoundingClientRect(),
                {
                    clientX: l,
                    clientY: o
                } = U(t);
            if (e.vertical) {
                let t = o - a.top;
                t = Math.max(s.value.offsetHeight / 2, t), t = Math.min(t, a.height - s.value.offsetHeight / 2), e.color.set("alpha", Math.round((t - s.value.offsetHeight / 2) / (a.height - s.value.offsetHeight) * 100))
            } else {
                let t = l - a.left;
                t = Math.max(s.value.offsetWidth / 2, t), t = Math.min(t, a.width - s.value.offsetWidth / 2), e.color.set("alpha", Math.round((t - s.value.offsetWidth / 2) / (a.width - s.value.offsetWidth) * 100))
            }
        }

        function p() {
            u.value = function() {
                if (!s.value) return 0;
                if (e.vertical) return 0;
                const t = r.vnode.el,
                    a = e.color.get("alpha");
                return t ? Math.round(a * (t.offsetWidth - s.value.offsetWidth / 2) / 100) : 0
            }(), c.value = function() {
                if (!s.value) return 0;
                const t = r.vnode.el;
                if (!e.vertical) return 0;
                const a = e.color.get("alpha");
                return t ? Math.round(a * (t.offsetHeight - s.value.offsetHeight / 2) / 100) : 0
            }(), d.value = function() {
                if (e.color && e.color.value) {
                    const {
                        r: t,
                        g: a,
                        b: l
                    } = e.color.toRgb();
                    return `linear-gradient(to right, rgba(${t}, ${a}, ${l}, 0) 0%, rgba(${t}, ${a}, ${l}, 1) 100%)`
                }
                return ""
            }()
        }
        return o((() => e.color.get("alpha")), (() => {
            p()
        })), o((() => e.color.value), (() => {
            p()
        })), n((() => {
            if (!i.value || !s.value) return;
            const e = {
                drag: e => {
                    f(e)
                },
                end: e => {
                    f(e)
                }
            };
            se(i.value, e), se(s.value, e), p()
        })), {
            thumb: s,
            bar: i,
            thumbLeft: u,
            thumbTop: c,
            background: d,
            handleClick: function(e) {
                e.target !== s.value && f(e)
            },
            update: p,
            ns: t
        }
    }
}), [
    ["render", function(e, t, a, l, o, n) {
        return r(), s("div", {
            class: u([e.ns.b(), e.ns.is("vertical", e.vertical)])
        }, [i("div", {
            ref: "bar",
            class: u(e.ns.e("bar")),
            style: c({
                background: e.background
            }),
            onClick: t[0] || (t[0] = (...t) => e.handleClick && e.handleClick(...t))
        }, null, 6), i("div", {
            ref: "thumb",
            class: u(e.ns.e("thumb")),
            style: c({
                left: e.thumbLeft + "px",
                top: e.thumbTop + "px"
            })
        }, null, 6)], 2)
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]
]);
var ue = H(t({
    name: "ElColorHueSlider",
    props: {
        color: {
            type: Object,
            required: !0
        },
        vertical: Boolean
    },
    setup(e) {
        const t = P("color-hue-slider"),
            a = h(),
            r = l(),
            s = l(),
            i = l(0),
            u = l(0),
            c = d((() => e.color.get("hue")));

        function f(t) {
            if (!s.value || !r.value) return;
            const l = a.vnode.el.getBoundingClientRect(),
                {
                    clientX: o,
                    clientY: n
                } = U(t);
            let i;
            if (e.vertical) {
                let e = n - l.top;
                e = Math.min(e, l.height - r.value.offsetHeight / 2), e = Math.max(r.value.offsetHeight / 2, e), i = Math.round((e - r.value.offsetHeight / 2) / (l.height - r.value.offsetHeight) * 360)
            } else {
                let e = o - l.left;
                e = Math.min(e, l.width - r.value.offsetWidth / 2), e = Math.max(r.value.offsetWidth / 2, e), i = Math.round((e - r.value.offsetWidth / 2) / (l.width - r.value.offsetWidth) * 360)
            }
            e.color.set("hue", i)
        }

        function p() {
            i.value = function() {
                if (!r.value) return 0;
                const t = a.vnode.el;
                if (e.vertical) return 0;
                const l = e.color.get("hue");
                return t ? Math.round(l * (t.offsetWidth - r.value.offsetWidth / 2) / 360) : 0
            }(), u.value = function() {
                if (!r.value) return 0;
                const t = a.vnode.el;
                if (!e.vertical) return 0;
                const l = e.color.get("hue");
                return t ? Math.round(l * (t.offsetHeight - r.value.offsetHeight / 2) / 360) : 0
            }()
        }
        return o((() => c.value), (() => {
            p()
        })), n((() => {
            if (!s.value || !r.value) return;
            const e = {
                drag: e => {
                    f(e)
                },
                end: e => {
                    f(e)
                }
            };
            se(s.value, e), se(r.value, e), p()
        })), {
            bar: s,
            thumb: r,
            thumbLeft: i,
            thumbTop: u,
            hueValue: c,
            handleClick: function(e) {
                e.target !== r.value && f(e)
            },
            update: p,
            ns: t
        }
    }
}), [
    ["render", function(e, t, a, l, o, n) {
        return r(), s("div", {
            class: u([e.ns.b(), e.ns.is("vertical", e.vertical)])
        }, [i("div", {
            ref: "bar",
            class: u(e.ns.e("bar")),
            onClick: t[0] || (t[0] = (...t) => e.handleClick && e.handleClick(...t))
        }, null, 2), i("div", {
            ref: "thumb",
            class: u(e.ns.e("thumb")),
            style: c({
                left: e.thumbLeft + "px",
                top: e.thumbTop + "px"
            })
        }, null, 6)], 2)
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]
]);
const ce = W({
        modelValue: String,
        id: String,
        showAlpha: Boolean,
        colorFormat: String,
        disabled: Boolean,
        size: Y,
        popperClass: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: void 0
        },
        tabindex: {
            type: [String, Number],
            default: 0
        },
        predefine: {
            type: O(Array)
        },
        validateEvent: {
            type: Boolean,
            default: !0
        }
    }),
    he = {
        [J]: e => f(e) || Q(e),
        [Z]: e => f(e) || Q(e),
        activeChange: e => f(e) || Q(e)
    },
    de = Symbol("colorPickerContextKey"),
    fe = function(e, t, a) {
        return [e, t * a / ((e = (2 - t) * a) < 1 ? e : 2 - e) || 0, e / 2]
    },
    pe = function(e, t) {
        var a;
        "string" == typeof(a = e) && a.includes(".") && 1 === Number.parseFloat(a) && (e = "100%");
        const l = function(e) {
            return "string" == typeof e && e.includes("%")
        }(e);
        return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), l && (e = Number.parseInt("" + e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t)
    },
    ve = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F"
    },
    me = e => {
        e = Math.min(Math.round(e), 255);
        const t = Math.floor(e / 16),
            a = e % 16;
        return `${ve[t]||t}${ve[a]||a}`
    },
    be = function({
        r: e,
        g: t,
        b: a
    }) {
        return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+a) ? "" : `#${me(e)}${me(t)}${me(a)}`
    },
    ge = {
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    },
    ke = function(e) {
        return 2 === e.length ? 16 * (ge[e[0].toUpperCase()] || +e[0]) + (ge[e[1].toUpperCase()] || +e[1]) : ge[e[1].toUpperCase()] || +e[1]
    },
    _e = (e, t, a) => {
        e = pe(e, 255), t = pe(t, 255), a = pe(a, 255);
        const l = Math.max(e, t, a),
            o = Math.min(e, t, a);
        let n;
        const r = l,
            s = l - o,
            i = 0 === l ? 0 : s / l;
        if (l === o) n = 0;
        else {
            switch (l) {
                case e:
                    n = (t - a) / s + (t < a ? 6 : 0);
                    break;
                case t:
                    n = (a - e) / s + 2;
                    break;
                case a:
                    n = (e - t) / s + 4
            }
            n /= 6
        }
        return {
            h: 360 * n,
            s: 100 * i,
            v: 100 * r
        }
    },
    ye = function(e, t, a) {
        e = 6 * pe(e, 360), t = pe(t, 100), a = pe(a, 100);
        const l = Math.floor(e),
            o = e - l,
            n = a * (1 - t),
            r = a * (1 - o * t),
            s = a * (1 - (1 - o) * t),
            i = l % 6,
            u = [a, r, n, n, s, a][i],
            c = [s, a, a, r, n, n][i],
            h = [n, n, s, a, a, r][i];
        return {
            r: Math.round(255 * u),
            g: Math.round(255 * c),
            b: Math.round(255 * h)
        }
    };
class we {
    constructor(e = {}) {
        this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
        for (const t in e) p(e, t) && (this[t] = e[t]);
        e.value ? this.fromString(e.value) : this.doOnChange()
    }
    set(e, t) {
        if (1 !== arguments.length || "object" != typeof e) this[`_${e}`] = t, this.doOnChange();
        else
            for (const a in e) p(e, a) && this.set(a, e[a])
    }
    get(e) {
        return "alpha" === e ? Math.floor(this[`_${e}`]) : this[`_${e}`]
    }
    toRgb() {
        return ye(this._hue, this._saturation, this._value)
    }
    fromString(e) {
        if (!e) return this._hue = 0, this._saturation = 100, this._value = 100, void this.doOnChange();
        const t = (e, t, a) => {
            this._hue = Math.max(0, Math.min(360, e)), this._saturation = Math.max(0, Math.min(100, t)), this._value = Math.max(0, Math.min(100, a)), this.doOnChange()
        };
        if (e.includes("hsl")) {
            const a = e.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((e => "" !== e)).map(((e, t) => t > 2 ? Number.parseFloat(e) : Number.parseInt(e, 10)));
            if (4 === a.length ? this._alpha = 100 * Number.parseFloat(a[3]) : 3 === a.length && (this._alpha = 100), a.length >= 3) {
                const {
                    h: e,
                    s: l,
                    v: o
                } = function(e, t, a) {
                    a /= 100;
                    let l = t /= 100;
                    const o = Math.max(a, .01);
                    return t *= (a *= 2) <= 1 ? a : 2 - a, l *= o <= 1 ? o : 2 - o, {
                        h: e,
                        s: 100 * (0 === a ? 2 * l / (o + l) : 2 * t / (a + t)),
                        v: (a + t) / 2 * 100
                    }
                }(a[0], a[1], a[2]);
                t(e, l, o)
            }
        } else if (e.includes("hsv")) {
            const a = e.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((e => "" !== e)).map(((e, t) => t > 2 ? Number.parseFloat(e) : Number.parseInt(e, 10)));
            4 === a.length ? this._alpha = 100 * Number.parseFloat(a[3]) : 3 === a.length && (this._alpha = 100), a.length >= 3 && t(a[0], a[1], a[2])
        } else if (e.includes("rgb")) {
            const a = e.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((e => "" !== e)).map(((e, t) => t > 2 ? Number.parseFloat(e) : Number.parseInt(e, 10)));
            if (4 === a.length ? this._alpha = 100 * Number.parseFloat(a[3]) : 3 === a.length && (this._alpha = 100), a.length >= 3) {
                const {
                    h: e,
                    s: l,
                    v: o
                } = _e(a[0], a[1], a[2]);
                t(e, l, o)
            }
        } else if (e.includes("#")) {
            const a = e.replace("#", "").trim();
            if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(a)) return;
            let l, o, n;
            3 === a.length ? (l = ke(a[0] + a[0]), o = ke(a[1] + a[1]), n = ke(a[2] + a[2])) : 6 !== a.length && 8 !== a.length || (l = ke(a.slice(0, 2)), o = ke(a.slice(2, 4)), n = ke(a.slice(4, 6))), 8 === a.length ? this._alpha = ke(a.slice(6)) / 255 * 100 : 3 !== a.length && 6 !== a.length || (this._alpha = 100);
            const {
                h: r,
                s: s,
                v: i
            } = _e(l, o, n);
            t(r, s, i)
        }
    }
    compare(e) {
        return Math.abs(e._hue - this._hue) < 2 && Math.abs(e._saturation - this._saturation) < 1 && Math.abs(e._value - this._value) < 1 && Math.abs(e._alpha - this._alpha) < 1
    }
    doOnChange() {
        const {
            _hue: e,
            _saturation: t,
            _value: a,
            _alpha: l,
            format: o
        } = this;
        if (this.enableAlpha) switch (o) {
            case "hsl":
                {
                    const l = fe(e, t / 100, a / 100);this.value = `hsla(${e}, ${Math.round(100*l[1])}%, ${Math.round(100*l[2])}%, ${this.get("alpha")/100})`;
                    break
                }
            case "hsv":
                this.value = `hsva(${e}, ${Math.round(t)}%, ${Math.round(a)}%, ${this.get("alpha")/100})`;
                break;
            case "hex":
                this.value = `${be(ye(e,t,a))}${me(255*l/100)}`;
                break;
            default:
                {
                    const {
                        r: l,
                        g: o,
                        b: n
                    } = ye(e, t, a);this.value = `rgba(${l}, ${o}, ${n}, ${this.get("alpha")/100})`
                }
        } else switch (o) {
            case "hsl":
                {
                    const l = fe(e, t / 100, a / 100);this.value = `hsl(${e}, ${Math.round(100*l[1])}%, ${Math.round(100*l[2])}%)`;
                    break
                }
            case "hsv":
                this.value = `hsv(${e}, ${Math.round(t)}%, ${Math.round(a)}%)`;
                break;
            case "rgb":
                {
                    const {
                        r: l,
                        g: o,
                        b: n
                    } = ye(e, t, a);this.value = `rgb(${l}, ${o}, ${n})`;
                    break
                }
            default:
                this.value = be(ye(e, t, a))
        }
    }
}
const Ce = t({
        props: {
            colors: {
                type: Array,
                required: !0
            },
            color: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const t = P("color-predefine"),
                {
                    currentColor: a
                } = v(de),
                n = l(r(e.colors, e.color));

            function r(e, t) {
                return e.map((e => {
                    const a = new we;
                    return a.enableAlpha = !0, a.format = "rgba", a.fromString(e), a.selected = a.value === t.value, a
                }))
            }
            return o((() => a.value), (e => {
                const t = new we;
                t.fromString(e), n.value.forEach((e => {
                    e.selected = t.compare(e)
                }))
            })), m((() => {
                n.value = r(e.colors, e.color)
            })), {
                rgbaColors: n,
                handleSelect: function(t) {
                    e.color.fromString(e.colors[t])
                },
                ns: t
            }
        }
    }),
    Me = ["onClick"];
var $e = H(Ce, [
    ["render", function(e, t, a, l, o, n) {
        return r(), s("div", {
            class: u(e.ns.b())
        }, [i("div", {
            class: u(e.ns.e("colors"))
        }, [(r(!0), s(b, null, g(e.rgbaColors, ((t, a) => (r(), s("div", {
            key: e.colors[a],
            class: u([e.ns.e("color-selector"), e.ns.is("alpha", t._alpha < 100), {
                selected: t.selected
            }]),
            onClick: t => e.handleSelect(a)
        }, [i("div", {
            style: c({
                backgroundColor: t.value
            })
        }, null, 4)], 10, Me)))), 128))], 2)], 2)
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]
]);
const xe = t({
        name: "ElSlPanel",
        props: {
            color: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const t = P("color-svpanel"),
                a = h(),
                r = l(0),
                s = l(0),
                i = l("hsl(0, 100%, 50%)"),
                u = d((() => ({
                    hue: e.color.get("hue"),
                    value: e.color.get("value")
                })));

            function c() {
                const t = e.color.get("saturation"),
                    l = e.color.get("value"),
                    o = a.vnode.el,
                    {
                        clientWidth: n,
                        clientHeight: u
                    } = o;
                s.value = t * n / 100, r.value = (100 - l) * u / 100, i.value = `hsl(${e.color.get("hue")}, 100%, 50%)`
            }

            function f(t) {
                const l = a.vnode.el.getBoundingClientRect(),
                    {
                        clientX: o,
                        clientY: n
                    } = U(t);
                let i = o - l.left,
                    u = n - l.top;
                i = Math.max(0, i), i = Math.min(i, l.width), u = Math.max(0, u), u = Math.min(u, l.height), s.value = i, r.value = u, e.color.set({
                    saturation: i / l.width * 100,
                    value: 100 - u / l.height * 100
                })
            }
            return o((() => u.value), (() => {
                c()
            })), n((() => {
                se(a.vnode.el, {
                    drag: e => {
                        f(e)
                    },
                    end: e => {
                        f(e)
                    }
                }), c()
            })), {
                cursorTop: r,
                cursorLeft: s,
                background: i,
                colorValue: u,
                handleDrag: f,
                update: c,
                ns: t
            }
        }
    }),
    Ve = [i("div", null, null, -1)];
var Ee = H(xe, [
    ["render", function(e, t, a, l, o, n) {
        return r(), s("div", {
            class: u(e.ns.b()),
            style: c({
                backgroundColor: e.background
            })
        }, [i("div", {
            class: u(e.ns.e("white"))
        }, null, 2), i("div", {
            class: u(e.ns.e("black"))
        }, null, 2), i("div", {
            class: u(e.ns.e("cursor")),
            style: c({
                top: e.cursorTop + "px",
                left: e.cursorLeft + "px"
            })
        }, Ve, 6)], 6)
    }],
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]
]);
const Ne = ["id", "aria-label", "aria-labelledby", "aria-description", "tabindex", "onKeydown"],
    je = t({
        name: "ElColorPicker"
    });
const Se = z(H(t({ ...je,
    props: ce,
    emits: he,
    setup(e, {
        expose: t,
        emit: a
    }) {
        const h = e,
            {
                t: f
            } = ee(),
            p = P("color"),
            {
                formItem: v
            } = te(),
            m = X(),
            b = G(),
            {
                inputId: g,
                isLabeledByFormItem: A
            } = ae(h, {
                formItemContext: v
            }),
            F = l(),
            L = l(),
            B = l(),
            H = l();
        let W = !0;
        const O = k(new we({
                enableAlpha: h.showAlpha,
                format: h.colorFormat || "",
                value: h.modelValue
            })),
            z = l(!1),
            U = l(!1),
            Y = l(""),
            Q = d((() => h.modelValue || U.value ? function(e, t) {
                if (!(e instanceof we)) throw new TypeError("color should be instance of _color Class");
                const {
                    r: a,
                    g: l,
                    b: o
                } = e.toRgb();
                return t ? `rgba(${a}, ${l}, ${o}, ${e.get("alpha")/100})` : `rgb(${a}, ${l}, ${o})`
            }(O, h.showAlpha) : "transparent")),
            Z = d((() => h.modelValue || U.value ? O.value : "")),
            re = d((() => A.value ? void 0 : h.label || f("el.colorpicker.defaultLabel"))),
            se = d((() => A.value ? null == v ? void 0 : v.labelId : void 0));
        const ce = ne((function(e) {
            z.value = e
        }), 100);

        function he() {
            ce(!1), fe()
        }

        function fe() {
            _((() => {
                h.modelValue ? O.fromString(h.modelValue) : (O.value = "", _((() => {
                    U.value = !1
                })))
            }))
        }

        function pe() {
            b.value || ce(!z.value)
        }

        function ve() {
            O.fromString(Y.value)
        }

        function me() {
            const e = O.value;
            a(J, e), a("change", e), h.validateEvent && (null == v || v.validate("change").catch((e => le(e)))), ce(!1), _((() => {
                const e = new we({
                    enableAlpha: h.showAlpha,
                    format: h.colorFormat || "",
                    value: h.modelValue
                });
                O.compare(e) || fe()
            }))
        }

        function be() {
            ce(!1), a(J, null), a("change", null), null !== h.modelValue && h.validateEvent && (null == v || v.validate("change").catch((e => le(e)))), fe()
        }
        return n((() => {
            h.modelValue && (Y.value = Z.value)
        })), o((() => h.modelValue), (e => {
            e ? e && e !== O.value && (W = !1, O.fromString(e)) : U.value = !1
        })), o((() => Z.value), (e => {
            Y.value = e, W && a("activeChange", e), W = !0
        })), o((() => O.value), (() => {
            h.modelValue || U.value || (U.value = !0)
        })), o((() => z.value), (() => {
            _((() => {
                var e, t, a;
                null == (e = F.value) || e.update(), null == (t = L.value) || t.update(), null == (a = B.value) || a.update()
            }))
        })), y(de, {
            currentColor: Z
        }), t({
            color: O
        }), (e, t) => (r(), w($(D), {
            ref_key: "popper",
            ref: H,
            visible: z.value,
            "show-arrow": !1,
            "fallback-placements": ["bottom", "top", "right", "left"],
            offset: 0,
            "gpu-acceleration": !1,
            "popper-class": [$(p).be("picker", "panel"), $(p).b("dropdown"), e.popperClass],
            "stop-popper-mouse-event": !1,
            effect: "light",
            trigger: "click",
            transition: `${$(p).namespace.value}-zoom-in-top`,
            persistent: ""
        }, {
            content: C((() => [M((r(), s("div", null, [i("div", {
                class: u($(p).be("dropdown", "main-wrapper"))
            }, [x(ue, {
                ref_key: "hue",
                ref: F,
                class: "hue-slider",
                color: $(O),
                vertical: ""
            }, null, 8, ["color"]), x(Ee, {
                ref: "svPanel",
                color: $(O)
            }, null, 8, ["color"])], 2), e.showAlpha ? (r(), w(ie, {
                key: 0,
                ref_key: "alpha",
                ref: B,
                color: $(O)
            }, null, 8, ["color"])) : V("v-if", !0), e.predefine ? (r(), w($e, {
                key: 1,
                ref: "predefine",
                color: $(O),
                colors: e.predefine
            }, null, 8, ["color", "colors"])) : V("v-if", !0), i("div", {
                class: u($(p).be("dropdown", "btns"))
            }, [i("span", {
                class: u($(p).be("dropdown", "value"))
            }, [x($(R), {
                modelValue: Y.value,
                "onUpdate:modelValue": t[0] || (t[0] = e => Y.value = e),
                "validate-event": !1,
                size: "small",
                onKeyup: E(ve, ["enter"]),
                onBlur: ve
            }, null, 8, ["modelValue", "onKeyup"])], 2), x($(I), {
                class: u($(p).be("dropdown", "link-btn")),
                text: "",
                size: "small",
                onClick: be
            }, {
                default: C((() => [N(j($(f)("el.colorpicker.clear")), 1)])),
                _: 1
            }, 8, ["class"]), x($(I), {
                plain: "",
                size: "small",
                class: u($(p).be("dropdown", "btn")),
                onClick: me
            }, {
                default: C((() => [N(j($(f)("el.colorpicker.confirm")), 1)])),
                _: 1
            }, 8, ["class"])], 2)])), [
                [$(oe), he]
            ])])),
            default: C((() => [i("div", {
                id: $(g),
                class: u([$(p).b("picker"), $(p).is("disabled", $(b)), $(p).bm("picker", $(m))]),
                role: "button",
                "aria-label": $(re),
                "aria-labelledby": $(se),
                "aria-description": $(f)("el.colorpicker.description", {
                    color: e.modelValue || ""
                }),
                tabindex: e.tabindex,
                onKeydown: E(pe, ["enter"])
            }, [$(b) ? (r(), s("div", {
                key: 0,
                class: u($(p).be("picker", "mask"))
            }, null, 2)) : V("v-if", !0), i("div", {
                class: u($(p).be("picker", "trigger")),
                onClick: pe
            }, [i("span", {
                class: u([$(p).be("picker", "color"), $(p).is("alpha", e.showAlpha)])
            }, [i("span", {
                class: u($(p).be("picker", "color-inner")),
                style: c({
                    backgroundColor: $(Q)
                })
            }, [M(x($(T), {
                class: u([$(p).be("picker", "icon"), $(p).is("icon-arrow-down")])
            }, {
                default: C((() => [x($(q))])),
                _: 1
            }, 8, ["class"]), [
                [S, e.modelValue || U.value]
            ]), e.modelValue || U.value ? V("v-if", !0) : (r(), w($(T), {
                key: 0,
                class: u([$(p).be("picker", "empty"), $(p).is("icon-close")])
            }, {
                default: C((() => [x($(K))])),
                _: 1
            }, 8, ["class"]))], 6)], 2)], 2)], 42, Ne)])),
            _: 1
        }, 8, ["visible", "popper-class", "transition"]))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]
]));
var Ae = {};
Object.defineProperty(Ae, "__esModule", {
    value: !0
});
const Fe = A,
    Le = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 12 12"
    },
    Be = [(0, Fe.createElementVNode)("g", {
        fill: "none"
    }, [(0, Fe.createElementVNode)("path", {
        d: "M9.765 3.205a.75.75 0 0 1 .03 1.06l-4.25 4.5a.75.75 0 0 1-1.075.015L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.705 1.704l3.72-3.939a.75.75 0 0 1 1.06-.03z",
        fill: "currentColor"
    })], -1)];
var Ie = Ae.default = (0, Fe.defineComponent)({
    name: "Checkmark12Filled",
    render: function(e, t) {
        return (0, Fe.openBlock)(), (0, Fe.createElementBlock)("svg", Le, Be)
    }
});
const He = e => {
        if ("#fff" == e && (e = "#ffffff"), "transparent" === e) return "#ffffff";
        let t = (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? {
            r: parseInt(a[1], 16),
            g: parseInt(a[2], 16),
            b: parseInt(a[3], 16)
        } : null;
        var a;
        let l = "#333333";
        return .213 * t.r + .715 * t.g + .072 * t.b < 127.5 && (l = "#ffffff"), l
    },
    We = {
        class: "d-color d-flex-between"
    },
    Oe = {
        key: 0,
        class: "mr20 title"
    },
    Te = ["onClick"],
    ze = {
        class: "d-icon"
    },
    De = F({
        __name: "d-color",
        props: {
            modelValue: {
                type: String,
                required: !0
            },
            colors: {
                type: Array,
                default: []
            },
            custom: {
                type: Boolean,
                default: !0
            },
            async: {
                type: Boolean,
                default: !1
            },
            title: String
        },
        emits: ["update:modelValue", "change"],
        setup(e, {
            emit: t
        }) {
            const a = e,
                l = ["#ff4500", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585"],
                o = ["#1681ff", "#fbbe23", "#fc4548", "#4b3c36", "#7dac68", "#023373", "#c8ac70", "#372128", "#c82c34", "#054092", "#a3ddb9", "transparent"],
                n = d((() => a.colors.length ? a.colors : o));

            function h(e) {
                t("update:modelValue", e), t("change", e, He(e)), B((() =>
                        import ("./save_config.cbe33c4d.js")), ["./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js"],
                    import.meta.url).then((e => {
                    a.async && e.SAVE_CONFIG("baseConfig")
                }))
            }
            return (t, o) => (r(), s("div", We, [e.title ? (r(), s("p", Oe, j(e.title), 1)) : V("v-if", !0), (r(!0), s(b, null, g($(n), (t => (r(), s("span", {
                class: u(["d-color-item", [{
                    isWhite: "#fff" === t || "#ffffff" === t
                }, {
                    colorTransparent: "transparent" === t
                }]]),
                onClick: e => h(t),
                key: t,
                style: c([{
                    backgroundColor: t
                }])
            }, [M(i("i", ze, [x($(Ie))], 512), [
                [S, e.modelValue == t]
            ])], 14, Te)))), 128)), a.custom ? (r(), w($(Se), L({
                key: 1,
                modelValue: e.modelValue,
                "onUpdate:modelValue": h,
                size: "small"
            }, t.$attrs, {
                predefine: l
            }), null, 16, ["modelValue"])) : V("v-if", !0)]))
        }
    }, [
        ["__scopeId", "data-v-270468c0"],
        ["__file", "D:/gitee/new-tab/src/components/d-color.vue"]
    ]);
export {
    De as D
};