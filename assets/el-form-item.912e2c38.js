import {
    a9 as e,
    aa as r,
    ab as t,
    g as n,
    c as i,
    O as a,
    w as s,
    ac as l,
    z as u,
    ad as o,
    o as f,
    b as d,
    U as c,
    i as p,
    e as v,
    ae as m,
    a5 as g,
    Q as h,
    af as y,
    ag as b,
    ah as w,
    k as q,
    K as F,
    S as O,
    ai as x,
    aj as j,
    J as A,
    t as E,
    D as P,
    n as k,
    C as S,
    x as R,
    j as _,
    h as $,
    ak as W
} from "./el-select.e274bb48.js";
import {
    b as I,
    d as M,
    _ as B,
    w as N,
    a as V
} from "./index.176a125e.js";
import {
    c as z,
    u as C,
    f as D,
    a as L
} from "./index.8720847e.js";
import {
    d as T,
    t as J,
    a as Z
} from "./style.d69d81d7.js";
import {
    i as G,
    u as U,
    g as Y
} from "./index.0e1148e8.js";
import {
    u as K
} from "./index.ca3d31b2.js";
import {
    b as Q
} from "./_baseClone.1ae22030.js";

function H() {
    if (!arguments.length) return [];
    var e = arguments[0];
    return G(e) ? e : [e]
}

function X(e) {
    return Q(e, 4)
}
const ee = I({
        model: Object,
        rules: {
            type: M(Object)
        },
        labelPosition: {
            type: String,
            values: ["left", "right", "top"],
            default: "right"
        },
        requireAsteriskPosition: {
            type: String,
            values: ["left", "right"],
            default: "left"
        },
        labelWidth: {
            type: [String, Number],
            default: ""
        },
        labelSuffix: {
            type: String,
            default: ""
        },
        inline: Boolean,
        inlineMessage: Boolean,
        statusIcon: Boolean,
        showMessage: {
            type: Boolean,
            default: !0
        },
        size: {
            type: String,
            values: z
        },
        disabled: Boolean,
        validateOnRuleChange: {
            type: Boolean,
            default: !0
        },
        hideRequiredAsterisk: {
            type: Boolean,
            default: !1
        },
        scrollToError: Boolean
    }),
    re = {
        validate: (n, i, a) => (e(n) || r(n)) && t(i) && r(a)
    };

function te() {
    const e = n([]),
        r = i((() => {
            if (!e.value.length) return "0";
            const r = Math.max(...e.value);
            return r ? `${r}px` : ""
        }));

    function t(t) {
        const n = e.value.indexOf(t);
        return -1 === n && "0" === r.value && T("ElForm", `unexpected width ${t}`), n
    }
    return {
        autoLabelWidth: r,
        registerLabelWidth: function(r, n) {
            if (r && n) {
                const i = t(n);
                e.value.splice(i, 1, r)
            } else r && e.value.push(r)
        },
        deregisterLabelWidth: function(r) {
            const n = t(r);
            n > -1 && e.value.splice(n, 1)
        }
    }
}
const ne = (e, r) => {
        const t = H(r);
        return t.length > 0 ? e.filter((e => e.prop && t.includes(e.prop))) : e
    },
    ie = a({
        name: "ElForm"
    });
var ae = B(a({ ...ie,
    props: ee,
    emits: re,
    setup(e, {
        expose: r,
        emit: t
    }) {
        const n = e,
            a = [],
            g = C(),
            h = U("form"),
            y = i((() => {
                const {
                    labelPosition: e,
                    inline: r
                } = n;
                return [h.b(), h.m(g.value || "default"), {
                    [h.m(`label-${e}`)]: e,
                    [h.m("inline")]: r
                }]
            })),
            b = (e = []) => {
                n.model ? ne(a, e).forEach((e => e.resetField())) : T("ElForm", "model is required for resetFields to work.")
            },
            w = (e = []) => {
                ne(a, e).forEach((e => e.clearValidate()))
            },
            q = i((() => {
                const e = !!n.model;
                return e || T("ElForm", "model is required for validate to work."), e
            })),
            F = async e => x(void 0, e),
            O = async (e = []) => {
                if (!q.value) return !1;
                const r = (e => {
                    if (0 === a.length) return [];
                    const r = ne(a, e);
                    return r.length ? r : (T("ElForm", "please pass correct props!"), [])
                })(e);
                if (0 === r.length) return !0;
                let t = {};
                for (const i of r) try {
                    await i.validate("")
                } catch (n) {
                    t = { ...t,
                        ...n
                    }
                }
                return 0 === Object.keys(t).length || Promise.reject(t)
            },
            x = async (e = [], r) => {
                const t = !m(r);
                try {
                    const t = await O(e);
                    return !0 === t && (null == r || r(t)), t
                } catch (i) {
                    const e = i;
                    return n.scrollToError && j(Object.keys(e)[0]), null == r || r(!1, e), t && Promise.reject(e)
                }
            },
            j = e => {
                var r;
                const t = ne(a, e)[0];
                t && (null == (r = t.$el) || r.scrollIntoView())
            };
        return s((() => n.rules), (() => {
            n.validateOnRuleChange && F().catch((e => T(e)))
        }), {
            deep: !0
        }), l(D, u({ ...o(n),
            emit: t,
            resetFields: b,
            clearValidate: w,
            validateField: x,
            addField: e => {
                a.push(e)
            },
            removeField: e => {
                e.prop && a.splice(a.indexOf(e), 1)
            },
            ...te()
        })), r({
            validate: F,
            validateField: x,
            resetFields: b,
            clearValidate: w,
            scrollToField: j
        }), (e, r) => (f(), d("form", {
            class: p(v(y))
        }, [c(e.$slots, "default")], 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]
]);

function se() {
    return se = Object.assign ? Object.assign.bind() : function(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        return e
    }, se.apply(this, arguments)
}

function le(e) {
    return (le = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function ue(e, r) {
    return (ue = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
        return e.__proto__ = r, e
    })(e, r)
}

function oe() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
    } catch (e) {
        return !1
    }
}

function fe(e, r, t) {
    return (fe = oe() ? Reflect.construct.bind() : function(e, r, t) {
        var n = [null];
        n.push.apply(n, r);
        var i = new(Function.bind.apply(e, n));
        return t && ue(i, t.prototype), i
    }).apply(null, arguments)
}

function de(e) {
    var r = "function" == typeof Map ? new Map : void 0;
    return de = function(e) {
        if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
        var t;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== r) {
            if (r.has(e)) return r.get(e);
            r.set(e, n)
        }

        function n() {
            return fe(e, arguments, le(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), ue(n, e)
    }, de(e)
}
var ce = /%[sdj%]/g,
    pe = function() {};

function ve(e) {
    if (!e || !e.length) return null;
    var r = {};
    return e.forEach((function(e) {
        var t = e.field;
        r[t] = r[t] || [], r[t].push(e)
    })), r
}

function me(e) {
    for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
    var i = 0,
        a = t.length;
    if ("function" == typeof e) return e.apply(null, t);
    if ("string" == typeof e) {
        var s = e.replace(ce, (function(e) {
            if ("%%" === e) return "%";
            if (i >= a) return e;
            switch (e) {
                case "%s":
                    return String(t[i++]);
                case "%d":
                    return Number(t[i++]);
                case "%j":
                    try {
                        return JSON.stringify(t[i++])
                    } catch (r) {
                        return "[Circular]"
                    }
                    break;
                default:
                    return e
            }
        }));
        return s
    }
    return e
}

function ge(e, r) {
    return null == e || (!("array" !== r || !Array.isArray(e) || e.length) || !(! function(e) {
        return "string" === e || "url" === e || "hex" === e || "email" === e || "date" === e || "pattern" === e
    }(r) || "string" != typeof e || e))
}

function he(e, r, t) {
    var n = 0,
        i = e.length;
    ! function a(s) {
        if (s && s.length) t(s);
        else {
            var l = n;
            n += 1, l < i ? r(e[l], a) : t([])
        }
    }([])
}
"undefined" != typeof process && process.env && "undefined" != typeof window && "undefined" != typeof document && (pe = function(e, r) {
    "undefined" != typeof console && console.warn && "undefined" == typeof ASYNC_VALIDATOR_NO_WARNING && r.every((function(e) {
        return "string" == typeof e
    })) && console.warn(e, r)
});
var ye = function(e) {
    var r, t;

    function n(r, t) {
        var n;
        return (n = e.call(this, "Async Validation Error") || this).errors = r, n.fields = t, n
    }
    return t = e, (r = n).prototype = Object.create(t.prototype), r.prototype.constructor = r, ue(r, t), n
}(de(Error));

function be(e, r, t, n, i) {
    if (r.first) {
        var a = new Promise((function(r, a) {
            var s = function(e) {
                var r = [];
                return Object.keys(e).forEach((function(t) {
                    r.push.apply(r, e[t] || [])
                })), r
            }(e);
            he(s, t, (function(e) {
                return n(e), e.length ? a(new ye(e, ve(e))) : r(i)
            }))
        }));
        return a.catch((function(e) {
            return e
        })), a
    }
    var s = !0 === r.firstFields ? Object.keys(e) : r.firstFields || [],
        l = Object.keys(e),
        u = l.length,
        o = 0,
        f = [],
        d = new Promise((function(r, a) {
            var d = function(e) {
                if (f.push.apply(f, e), ++o === u) return n(f), f.length ? a(new ye(f, ve(f))) : r(i)
            };
            l.length || (n(f), r(i)), l.forEach((function(r) {
                var n = e[r]; - 1 !== s.indexOf(r) ? he(n, t, d) : function(e, r, t) {
                    var n = [],
                        i = 0,
                        a = e.length;

                    function s(e) {
                        n.push.apply(n, e || []), ++i === a && t(n)
                    }
                    e.forEach((function(e) {
                        r(e, s)
                    }))
                }(n, t, d)
            }))
        }));
    return d.catch((function(e) {
        return e
    })), d
}

function we(e, r) {
    return function(t) {
        var n, i;
        return n = e.fullFields ? function(e, r) {
            for (var t = e, n = 0; n < r.length; n++) {
                if (null == t) return t;
                t = t[r[n]]
            }
            return t
        }(r, e.fullFields) : r[t.field || e.fullField], (i = t) && void 0 !== i.message ? (t.field = t.field || e.fullField, t.fieldValue = n, t) : {
            message: "function" == typeof t ? t() : t,
            fieldValue: n,
            field: t.field || e.fullField
        }
    }
}

function qe(e, r) {
    if (r)
        for (var t in r)
            if (r.hasOwnProperty(t)) {
                var n = r[t];
                "object" == typeof n && "object" == typeof e[t] ? e[t] = se({}, e[t], n) : e[t] = n
            }
    return e
}
var Fe, Oe = function(e, r, t, n, i, a) {
        !e.required || t.hasOwnProperty(e.field) && !ge(r, a || e.type) || n.push(me(i.messages.required, e.fullField))
    },
    xe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    je = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
    Ae = {
        integer: function(e) {
            return Ae.number(e) && parseInt(e, 10) === e
        },
        float: function(e) {
            return Ae.number(e) && !Ae.integer(e)
        },
        array: function(e) {
            return Array.isArray(e)
        },
        regexp: function(e) {
            if (e instanceof RegExp) return !0;
            try {
                return !!new RegExp(e)
            } catch (r) {
                return !1
            }
        },
        date: function(e) {
            return "function" == typeof e.getTime && "function" == typeof e.getMonth && "function" == typeof e.getYear && !isNaN(e.getTime())
        },
        number: function(e) {
            return !isNaN(e) && "number" == typeof e
        },
        object: function(e) {
            return "object" == typeof e && !Ae.array(e)
        },
        method: function(e) {
            return "function" == typeof e
        },
        email: function(e) {
            return "string" == typeof e && e.length <= 320 && !!e.match(xe)
        },
        url: function(e) {
            return "string" == typeof e && e.length <= 2048 && !!e.match(function() {
                if (Fe) return Fe;
                var e = "[a-fA-F\\d:]",
                    r = function(r) {
                        return r && r.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : ""
                    },
                    t = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
                    n = "[a-fA-F\\d]{1,4}",
                    i = ("\n(?:\n(?:" + n + ":){7}(?:" + n + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + n + ":){6}(?:" + t + "|:" + n + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + n + ":){5}(?::" + t + "|(?::" + n + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + n + ":){4}(?:(?::" + n + "){0,1}:" + t + "|(?::" + n + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + n + ":){3}(?:(?::" + n + "){0,2}:" + t + "|(?::" + n + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + n + ":){2}(?:(?::" + n + "){0,3}:" + t + "|(?::" + n + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + n + ":){1}(?:(?::" + n + "){0,4}:" + t + "|(?::" + n + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + n + "){0,5}:" + t + "|(?::" + n + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
                    a = new RegExp("(?:^" + t + "$)|(?:^" + i + "$)"),
                    s = new RegExp("^" + t + "$"),
                    l = new RegExp("^" + i + "$"),
                    u = function(e) {
                        return e && e.exact ? a : new RegExp("(?:" + r(e) + t + r(e) + ")|(?:" + r(e) + i + r(e) + ")", "g")
                    };
                u.v4 = function(e) {
                    return e && e.exact ? s : new RegExp("" + r(e) + t + r(e), "g")
                }, u.v6 = function(e) {
                    return e && e.exact ? l : new RegExp("" + r(e) + i + r(e), "g")
                };
                var o = u.v4().source,
                    f = u.v6().source;
                return Fe = new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|" + o + "|" + f + '|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)', "i")
            }())
        },
        hex: function(e) {
            return "string" == typeof e && !!e.match(je)
        }
    },
    Ee = {
        required: Oe,
        whitespace: function(e, r, t, n, i) {
            (/^\s+$/.test(r) || "" === r) && n.push(me(i.messages.whitespace, e.fullField))
        },
        type: function(e, r, t, n, i) {
            if (e.required && void 0 === r) Oe(e, r, t, n, i);
            else {
                var a = e.type;
                ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(a) > -1 ? Ae[a](r) || n.push(me(i.messages.types[a], e.fullField, e.type)) : a && typeof r !== e.type && n.push(me(i.messages.types[a], e.fullField, e.type))
            }
        },
        range: function(e, r, t, n, i) {
            var a = "number" == typeof e.len,
                s = "number" == typeof e.min,
                l = "number" == typeof e.max,
                u = r,
                o = null,
                f = "number" == typeof r,
                d = "string" == typeof r,
                c = Array.isArray(r);
            if (f ? o = "number" : d ? o = "string" : c && (o = "array"), !o) return !1;
            c && (u = r.length), d && (u = r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length), a ? u !== e.len && n.push(me(i.messages[o].len, e.fullField, e.len)) : s && !l && u < e.min ? n.push(me(i.messages[o].min, e.fullField, e.min)) : l && !s && u > e.max ? n.push(me(i.messages[o].max, e.fullField, e.max)) : s && l && (u < e.min || u > e.max) && n.push(me(i.messages[o].range, e.fullField, e.min, e.max))
        },
        enum: function(e, r, t, n, i) {
            e.enum = Array.isArray(e.enum) ? e.enum : [], -1 === e.enum.indexOf(r) && n.push(me(i.messages.enum, e.fullField, e.enum.join(", ")))
        },
        pattern: function(e, r, t, n, i) {
            if (e.pattern)
                if (e.pattern instanceof RegExp) e.pattern.lastIndex = 0, e.pattern.test(r) || n.push(me(i.messages.pattern.mismatch, e.fullField, r, e.pattern));
                else if ("string" == typeof e.pattern) {
                new RegExp(e.pattern).test(r) || n.push(me(i.messages.pattern.mismatch, e.fullField, r, e.pattern))
            }
        }
    },
    Pe = function(e, r, t, n, i) {
        var a = e.type,
            s = [];
        if (e.required || !e.required && n.hasOwnProperty(e.field)) {
            if (ge(r, a) && !e.required) return t();
            Ee.required(e, r, n, s, i, a), ge(r, a) || Ee.type(e, r, n, s, i)
        }
        t(s)
    },
    ke = {
        string: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r, "string") && !e.required) return t();
                Ee.required(e, r, n, a, i, "string"), ge(r, "string") || (Ee.type(e, r, n, a, i), Ee.range(e, r, n, a, i), Ee.pattern(e, r, n, a, i), !0 === e.whitespace && Ee.whitespace(e, r, n, a, i))
            }
            t(a)
        },
        method: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && Ee.type(e, r, n, a, i)
            }
            t(a)
        },
        number: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if ("" === r && (r = void 0), ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && (Ee.type(e, r, n, a, i), Ee.range(e, r, n, a, i))
            }
            t(a)
        },
        boolean: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && Ee.type(e, r, n, a, i)
            }
            t(a)
        },
        regexp: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), ge(r) || Ee.type(e, r, n, a, i)
            }
            t(a)
        },
        integer: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && (Ee.type(e, r, n, a, i), Ee.range(e, r, n, a, i))
            }
            t(a)
        },
        float: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && (Ee.type(e, r, n, a, i), Ee.range(e, r, n, a, i))
            }
            t(a)
        },
        array: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (null == r && !e.required) return t();
                Ee.required(e, r, n, a, i, "array"), null != r && (Ee.type(e, r, n, a, i), Ee.range(e, r, n, a, i))
            }
            t(a)
        },
        object: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && Ee.type(e, r, n, a, i)
            }
            t(a)
        },
        enum: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i), void 0 !== r && Ee.enum(e, r, n, a, i)
            }
            t(a)
        },
        pattern: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r, "string") && !e.required) return t();
                Ee.required(e, r, n, a, i), ge(r, "string") || Ee.pattern(e, r, n, a, i)
            }
            t(a)
        },
        date: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r, "date") && !e.required) return t();
                var s;
                if (Ee.required(e, r, n, a, i), !ge(r, "date")) s = r instanceof Date ? r : new Date(r), Ee.type(e, s, n, a, i), s && Ee.range(e, s.getTime(), n, a, i)
            }
            t(a)
        },
        url: Pe,
        hex: Pe,
        email: Pe,
        required: function(e, r, t, n, i) {
            var a = [],
                s = Array.isArray(r) ? "array" : typeof r;
            Ee.required(e, r, n, a, i, s), t(a)
        },
        any: function(e, r, t, n, i) {
            var a = [];
            if (e.required || !e.required && n.hasOwnProperty(e.field)) {
                if (ge(r) && !e.required) return t();
                Ee.required(e, r, n, a, i)
            }
            t(a)
        }
    };

function Se() {
    return {
        default: "Validation error on field %s",
        required: "%s is required",
        enum: "%s must be one of %s",
        whitespace: "%s cannot be empty",
        date: {
            format: "%s date %s is invalid for format %s",
            parse: "%s date could not be parsed, %s is invalid ",
            invalid: "%s date %s is invalid"
        },
        types: {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            date: "%s is not a %s",
            boolean: "%s is not a %s",
            integer: "%s is not an %s",
            float: "%s is not a %s",
            regexp: "%s is not a valid %s",
            email: "%s is not a valid %s",
            url: "%s is not a valid %s",
            hex: "%s is not a valid %s"
        },
        string: {
            len: "%s must be exactly %s characters",
            min: "%s must be at least %s characters",
            max: "%s cannot be longer than %s characters",
            range: "%s must be between %s and %s characters"
        },
        number: {
            len: "%s must equal %s",
            min: "%s cannot be less than %s",
            max: "%s cannot be greater than %s",
            range: "%s must be between %s and %s"
        },
        array: {
            len: "%s must be exactly %s in length",
            min: "%s cannot be less than %s in length",
            max: "%s cannot be greater than %s in length",
            range: "%s must be between %s and %s in length"
        },
        pattern: {
            mismatch: "%s value %s does not match pattern %s"
        },
        clone: function() {
            var e = JSON.parse(JSON.stringify(this));
            return e.clone = this.clone, e
        }
    }
}
var Re = Se(),
    _e = function() {
        function e(e) {
            this.rules = null, this._messages = Re, this.define(e)
        }
        var r = e.prototype;
        return r.define = function(e) {
            var r = this;
            if (!e) throw new Error("Cannot configure a schema with no rules");
            if ("object" != typeof e || Array.isArray(e)) throw new Error("Rules must be an object");
            this.rules = {}, Object.keys(e).forEach((function(t) {
                var n = e[t];
                r.rules[t] = Array.isArray(n) ? n : [n]
            }))
        }, r.messages = function(e) {
            return e && (this._messages = qe(Se(), e)), this._messages
        }, r.validate = function(r, t, n) {
            var i = this;
            void 0 === t && (t = {}), void 0 === n && (n = function() {});
            var a = r,
                s = t,
                l = n;
            if ("function" == typeof s && (l = s, s = {}), !this.rules || 0 === Object.keys(this.rules).length) return l && l(null, a), Promise.resolve(a);
            if (s.messages) {
                var u = this.messages();
                u === Re && (u = Se()), qe(u, s.messages), s.messages = u
            } else s.messages = this.messages();
            var o = {};
            (s.keys || Object.keys(this.rules)).forEach((function(e) {
                var t = i.rules[e],
                    n = a[e];
                t.forEach((function(t) {
                    var s = t;
                    "function" == typeof s.transform && (a === r && (a = se({}, a)), n = a[e] = s.transform(n)), (s = "function" == typeof s ? {
                        validator: s
                    } : se({}, s)).validator = i.getValidationMethod(s), s.validator && (s.field = e, s.fullField = s.fullField || e, s.type = i.getType(s), o[e] = o[e] || [], o[e].push({
                        rule: s,
                        value: n,
                        source: a,
                        field: e
                    }))
                }))
            }));
            var f = {};
            return be(o, s, (function(r, t) {
                var n, i = r.rule,
                    l = !("object" !== i.type && "array" !== i.type || "object" != typeof i.fields && "object" != typeof i.defaultField);

                function u(e, r) {
                    return se({}, r, {
                        fullField: i.fullField + "." + e,
                        fullFields: i.fullFields ? [].concat(i.fullFields, [e]) : [e]
                    })
                }

                function o(n) {
                    void 0 === n && (n = []);
                    var o = Array.isArray(n) ? n : [n];
                    !s.suppressWarning && o.length && e.warning("async-validator:", o), o.length && void 0 !== i.message && (o = [].concat(i.message));
                    var d = o.map(we(i, a));
                    if (s.first && d.length) return f[i.field] = 1, t(d);
                    if (l) {
                        if (i.required && !r.value) return void 0 !== i.message ? d = [].concat(i.message).map(we(i, a)) : s.error && (d = [s.error(i, me(s.messages.required, i.field))]), t(d);
                        var c = {};
                        i.defaultField && Object.keys(r.value).map((function(e) {
                            c[e] = i.defaultField
                        })), c = se({}, c, r.rule.fields);
                        var p = {};
                        Object.keys(c).forEach((function(e) {
                            var r = c[e],
                                t = Array.isArray(r) ? r : [r];
                            p[e] = t.map(u.bind(null, e))
                        }));
                        var v = new e(p);
                        v.messages(s.messages), r.rule.options && (r.rule.options.messages = s.messages, r.rule.options.error = s.error), v.validate(r.value, r.rule.options || s, (function(e) {
                            var r = [];
                            d && d.length && r.push.apply(r, d), e && e.length && r.push.apply(r, e), t(r.length ? r : null)
                        }))
                    } else t(d)
                }
                if (l = l && (i.required || !i.required && r.value), i.field = r.field, i.asyncValidator) n = i.asyncValidator(i, r.value, o, r.source, s);
                else if (i.validator) {
                    try {
                        n = i.validator(i, r.value, o, r.source, s)
                    } catch (d) {
                        null == console.error || console.error(d), s.suppressValidatorError || setTimeout((function() {
                            throw d
                        }), 0), o(d.message)
                    }!0 === n ? o() : !1 === n ? o("function" == typeof i.message ? i.message(i.fullField || i.field) : i.message || (i.fullField || i.field) + " fails") : n instanceof Array ? o(n) : n instanceof Error && o(n.message)
                }
                n && n.then && n.then((function() {
                    return o()
                }), (function(e) {
                    return o(e)
                }))
            }), (function(e) {
                ! function(e) {
                    for (var r, t, n = [], i = {}, s = 0; s < e.length; s++) r = e[s], t = void 0, Array.isArray(r) ? n = (t = n).concat.apply(t, r) : n.push(r);
                    n.length ? (i = ve(n), l(n, i)) : l(null, a)
                }(e)
            }), a)
        }, r.getType = function(e) {
            if (void 0 === e.type && e.pattern instanceof RegExp && (e.type = "pattern"), "function" != typeof e.validator && e.type && !ke.hasOwnProperty(e.type)) throw new Error(me("Unknown rule type %s", e.type));
            return e.type || "string"
        }, r.getValidationMethod = function(e) {
            if ("function" == typeof e.validator) return e.validator;
            var r = Object.keys(e),
                t = r.indexOf("message");
            return -1 !== t && r.splice(t, 1), 1 === r.length && "required" === r[0] ? ke.required : ke[this.getType(e)] || void 0
        }, e
    }();
_e.register = function(e, r) {
    if ("function" != typeof r) throw new Error("Cannot register a validator by type, validator is not a function");
    ke[e] = r
}, _e.warning = pe, _e.messages = Re, _e.validators = ke;
const $e = I({
    label: String,
    labelWidth: {
        type: [String, Number],
        default: ""
    },
    prop: {
        type: M([String, Array])
    },
    required: {
        type: Boolean,
        default: void 0
    },
    rules: {
        type: M([Object, Array])
    },
    error: String,
    validateStatus: {
        type: String,
        values: ["", "error", "validating", "success"]
    },
    for: String,
    inlineMessage: {
        type: [String, Boolean],
        default: ""
    },
    showMessage: {
        type: Boolean,
        default: !0
    },
    size: {
        type: String,
        values: z
    }
});
var We = a({
    name: "ElLabelWrap",
    props: {
        isAutoWidth: Boolean,
        updateAll: Boolean
    },
    setup(e, {
        slots: r
    }) {
        const t = g(D, void 0),
            a = g(L);
        a || J("ElLabelWrap", "usage: <el-form-item><label-wrap /></el-form-item>");
        const l = U("form"),
            u = n(),
            o = n(0),
            f = (n = "update") => {
                O((() => {
                    r.default && e.isAutoWidth && ("update" === n ? o.value = (() => {
                        var e;
                        if (null == (e = u.value) ? void 0 : e.firstElementChild) {
                            const e = window.getComputedStyle(u.value.firstElementChild).width;
                            return Math.ceil(Number.parseFloat(e))
                        }
                        return 0
                    })() : "remove" === n && (null == t || t.deregisterLabelWidth(o.value)))
                }))
            },
            d = () => f("update");
        return h((() => {
            d()
        })), y((() => {
            f("remove")
        })), b((() => d())), s(o, ((r, n) => {
            e.updateAll && (null == t || t.registerLabelWidth(r, n))
        })), w(i((() => {
            var e, r;
            return null != (r = null == (e = u.value) ? void 0 : e.firstElementChild) ? r : null
        })), d), () => {
            var n, i;
            if (!r) return null;
            const {
                isAutoWidth: s
            } = e;
            if (s) {
                const e = null == t ? void 0 : t.autoLabelWidth,
                    i = {};
                if ((null == a ? void 0 : a.hasLabel) && e && "auto" !== e) {
                    const r = Math.max(0, Number.parseInt(e, 10) - o.value),
                        n = "left" === t.labelPosition ? "marginRight" : "marginLeft";
                    r && (i[n] = `${r}px`)
                }
                return q("div", {
                    ref: u,
                    class: [l.be("item", "label-wrap")],
                    style: i
                }, [null == (n = r.default) ? void 0 : n.call(r)])
            }
            return q(F, {
                ref: u
            }, [null == (i = r.default) ? void 0 : i.call(r)])
        }
    }
});
const Ie = ["role", "aria-labelledby"],
    Me = a({
        name: "ElFormItem"
    });
var Be = B(a({ ...Me,
    props: $e,
    setup(e, {
        expose: a
    }) {
        const b = e,
            w = x(),
            F = g(D, void 0),
            I = g(L, void 0),
            M = C(void 0, {
                formItem: !1
            }),
            B = U("form-item"),
            N = K().value,
            V = n([]),
            z = n(""),
            T = j(z, 100),
            J = n(""),
            G = n();
        let Q, ee = !1;
        const re = i((() => {
                if ("top" === (null == F ? void 0 : F.labelPosition)) return {};
                const e = Z(b.labelWidth || (null == F ? void 0 : F.labelWidth) || "");
                return e ? {
                    width: e
                } : {}
            })),
            te = i((() => {
                if ("top" === (null == F ? void 0 : F.labelPosition) || (null == F ? void 0 : F.inline)) return {};
                if (!b.label && !b.labelWidth && fe) return {};
                const e = Z(b.labelWidth || (null == F ? void 0 : F.labelWidth) || "");
                return b.label || w.label ? {} : {
                    marginLeft: e
                }
            })),
            ne = i((() => [B.b(), B.m(M.value), B.is("error", "error" === z.value), B.is("validating", "validating" === z.value), B.is("success", "success" === z.value), B.is("required", ve.value || b.required), B.is("no-asterisk", null == F ? void 0 : F.hideRequiredAsterisk), "right" === (null == F ? void 0 : F.requireAsteriskPosition) ? "asterisk-right" : "asterisk-left", {
                [B.m("feedback")]: null == F ? void 0 : F.statusIcon
            }])),
            ie = i((() => t(b.inlineMessage) ? b.inlineMessage : (null == F ? void 0 : F.inlineMessage) || !1)),
            ae = i((() => [B.e("error"), {
                [B.em("error", "inline")]: ie.value
            }])),
            se = i((() => b.prop ? r(b.prop) ? b.prop : b.prop.join(".") : "")),
            le = i((() => !(!b.label && !w.label))),
            ue = i((() => b.for || 1 === V.value.length ? V.value[0] : void 0)),
            oe = i((() => !ue.value && le.value)),
            fe = !!I,
            de = i((() => {
                const e = null == F ? void 0 : F.model;
                if (e && b.prop) return Y(e, b.prop).value
            })),
            ce = i((() => {
                const {
                    required: e
                } = b, r = [];
                b.rules && r.push(...H(b.rules));
                const t = null == F ? void 0 : F.rules;
                if (t && b.prop) {
                    const e = Y(t, b.prop).value;
                    e && r.push(...H(e))
                }
                if (void 0 !== e) {
                    const t = r.map(((e, r) => [e, r])).filter((([e]) => Object.keys(e).includes("required")));
                    if (t.length > 0)
                        for (const [n, i] of t) n.required !== e && (r[i] = { ...n,
                            required: e
                        });
                    else r.push({
                        required: e
                    })
                }
                return r
            })),
            pe = i((() => ce.value.length > 0)),
            ve = i((() => ce.value.some((e => e.required)))),
            me = i((() => {
                var e;
                return "error" === T.value && b.showMessage && (null == (e = null == F ? void 0 : F.showMessage) || e)
            })),
            ge = i((() => `${b.label||""}${(null==F?void 0:F.labelSuffix)||""}`)),
            he = e => {
                z.value = e
            },
            ye = async e => {
                const r = se.value;
                return new _e({
                    [r]: e
                }).validate({
                    [r]: de.value
                }, {
                    firstFields: !0
                }).then((() => (he("success"), null == F || F.emit("validate", b.prop, !0, ""), !0))).catch((e => ((e => {
                    var r, t;
                    const {
                        errors: n,
                        fields: i
                    } = e;
                    n && i || console.error(e), he("error"), J.value = n ? null != (t = null == (r = null == n ? void 0 : n[0]) ? void 0 : r.message) ? t : `${b.prop} is required` : "", null == F || F.emit("validate", b.prop, !1, J.value)
                })(e), Promise.reject(e))))
            },
            be = async (e, r) => {
                if (ee || !b.prop) return !1;
                const t = m(r);
                if (!pe.value) return null == r || r(!1), !1;
                const n = (e => ce.value.filter((r => !r.trigger || !e || (Array.isArray(r.trigger) ? r.trigger.includes(e) : r.trigger === e))).map((({
                    trigger: e,
                    ...r
                }) => r)))(e);
                return 0 === n.length ? (null == r || r(!0), !0) : (he("validating"), ye(n).then((() => (null == r || r(!0), !0))).catch((e => {
                    const {
                        fields: n
                    } = e;
                    return null == r || r(!1, n), !t && Promise.reject(n)
                })))
            },
            we = () => {
                he(""), J.value = "", ee = !1
            },
            qe = async () => {
                const e = null == F ? void 0 : F.model;
                if (!e || !b.prop) return;
                const r = Y(e, b.prop);
                ee = !0, r.value = X(Q), await O(), we(), ee = !1
            };
        s((() => b.error), (e => {
            J.value = e || "", he(e ? "error" : "")
        }), {
            immediate: !0
        }), s((() => b.validateStatus), (e => he(e || "")));
        const Fe = u({ ...o(b),
            $el: G,
            size: M,
            validateState: z,
            labelId: N,
            inputIds: V,
            isGroup: oe,
            hasLabel: le,
            addInputId: e => {
                V.value.includes(e) || V.value.push(e)
            },
            removeInputId: e => {
                V.value = V.value.filter((r => r !== e))
            },
            resetField: qe,
            clearValidate: we,
            validate: be
        });
        return l(L, Fe), h((() => {
            b.prop && (null == F || F.addField(Fe), Q = X(de.value))
        })), y((() => {
            null == F || F.removeField(Fe)
        })), a({
            size: M,
            validateMessage: J,
            validateState: z,
            validate: be,
            clearValidate: we,
            resetField: qe
        }), (e, r) => {
            var t;
            return f(), d("div", {
                ref_key: "formItemRef",
                ref: G,
                class: p(v(ne)),
                role: v(oe) ? "group" : void 0,
                "aria-labelledby": v(oe) ? v(N) : void 0
            }, [q(v(We), {
                "is-auto-width": "auto" === v(re).width,
                "update-all": "auto" === (null == (t = v(F)) ? void 0 : t.labelWidth)
            }, {
                default: A((() => [v(le) ? (f(), E(P(v(ue) ? "label" : "div"), {
                    key: 0,
                    id: v(N),
                    for: v(ue),
                    class: p(v(B).e("label")),
                    style: k(v(re))
                }, {
                    default: A((() => [c(e.$slots, "label", {
                        label: v(ge)
                    }, (() => [S(R(v(ge)), 1)]))])),
                    _: 3
                }, 8, ["id", "for", "class", "style"])) : _("v-if", !0)])),
                _: 3
            }, 8, ["is-auto-width", "update-all"]), $("div", {
                class: p(v(B).e("content")),
                style: k(v(te))
            }, [c(e.$slots, "default"), q(W, {
                name: `${v(B).namespace.value}-zoom-in-top`
            }, {
                default: A((() => [v(me) ? c(e.$slots, "error", {
                    key: 0,
                    error: J.value
                }, (() => [$("div", {
                    class: p(v(ae))
                }, R(J.value), 3)])) : _("v-if", !0)])),
                _: 3
            }, 8, ["name"])], 6)], 10, Ie)
        }
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]
]);
const Ne = N(ae, {
        FormItem: Be
    }),
    Ve = V(Be);
export {
    Ve as E, Ne as a
};