function e(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: t
} = Object.prototype, {
    getPrototypeOf: n
} = Object, r = (o = Object.create(null), e => {
    const n = t.call(e);
    return o[n] || (o[n] = n.slice(8, -1).toLowerCase())
});
var o;
const s = e => (e = e.toLowerCase(), t => r(t) === e),
    i = e => t => typeof t === e,
    {
        isArray: a
    } = Array,
    c = i("undefined");
const u = s("ArrayBuffer");
const l = i("string"),
    f = i("function"),
    h = i("number"),
    d = e => null !== e && "object" == typeof e,
    p = e => {
        if ("object" !== r(e)) return !1;
        const t = n(e);
        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
    },
    m = s("Date"),
    g = s("File"),
    b = s("Blob"),
    y = s("FileList"),
    E = s("URLSearchParams");

function w(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (null == e) return;
    let r, o;
    if ("object" != typeof e && (e = [e]), a(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = o.length;
        let i;
        for (r = 0; r < s; r++) i = o[r], t.call(null, e[i], i, e)
    }
}
const O = (R = "undefined" != typeof Uint8Array && n(Uint8Array), e => R && e instanceof R);
var R;
const S = s("HTMLFormElement"),
    A = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    j = s("RegExp"),
    T = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        w(n, ((n, o) => {
            !1 !== t(n, o, e) && (r[o] = n)
        })), Object.defineProperties(e, r)
    },
    v = {
        isArray: a,
        isArrayBuffer: u,
        isBuffer: function(e) {
            return null !== e && !c(e) && null !== e.constructor && !c(e.constructor) && f(e.constructor.isBuffer) && e.constructor.isBuffer(e)
        },
        isFormData: e => {
            const n = "[object FormData]";
            return e && ("function" == typeof FormData && e instanceof FormData || t.call(e) === n || f(e.toString) && e.toString() === n)
        },
        isArrayBufferView: function(e) {
            let t;
            return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && u(e.buffer), t
        },
        isString: l,
        isNumber: h,
        isBoolean: e => !0 === e || !1 === e,
        isObject: d,
        isPlainObject: p,
        isUndefined: c,
        isDate: m,
        isFile: g,
        isBlob: b,
        isRegExp: j,
        isFunction: f,
        isStream: e => d(e) && f(e.pipe),
        isURLSearchParams: E,
        isTypedArray: O,
        isFileList: y,
        forEach: w,
        merge: function e() {
            const t = {},
                n = (n, r) => {
                    p(t[r]) && p(n) ? t[r] = e(t[r], n) : p(n) ? t[r] = e({}, n) : a(n) ? t[r] = n.slice() : t[r] = n
                };
            for (let r = 0, o = arguments.length; r < o; r++) arguments[r] && w(arguments[r], n);
            return t
        },
        extend: (t, n, r, {
            allOwnKeys: o
        } = {}) => (w(n, ((n, o) => {
            r && f(n) ? t[o] = e(n, r) : t[o] = n
        }), {
            allOwnKeys: o
        }), t),
        trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, t, n, r) => {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                value: t.prototype
            }), n && Object.assign(e.prototype, n)
        },
        toFlatObject: (e, t, r, o) => {
            let s, i, a;
            const c = {};
            if (t = t || {}, null == e) return t;
            do {
                for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0;) a = s[i], o && !o(a, e, t) || c[a] || (t[a] = e[a], c[a] = !0);
                e = !1 !== r && n(e)
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t
        },
        kindOf: r,
        kindOfTest: s,
        endsWith: (e, t, n) => {
            e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
            const r = e.indexOf(t, n);
            return -1 !== r && r === n
        },
        toArray: e => {
            if (!e) return null;
            if (a(e)) return e;
            let t = e.length;
            if (!h(t)) return null;
            const n = new Array(t);
            for (; t-- > 0;) n[t] = e[t];
            return n
        },
        forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (;
                (r = n.next()) && !r.done;) {
                const n = r.value;
                t.call(e, n[0], n[1])
            }
        },
        matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t));) r.push(n);
            return r
        },
        isHTMLForm: S,
        hasOwnProperty: A,
        hasOwnProp: A,
        reduceDescriptors: T,
        freezeMethods: e => {
            T(e, ((t, n) => {
                const r = e[n];
                f(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                    throw Error("Can not read-only method '" + n + "'")
                }))
            }))
        },
        toObjectSet: (e, t) => {
            const n = {},
                r = e => {
                    e.forEach((e => {
                        n[e] = !0
                    }))
                };
            return a(e) ? r(e) : r(String(e).split(t)), n
        },
        toCamelCase: e => e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, (function(e, t, n) {
            return t.toUpperCase() + n
        })),
        noop: () => {},
        toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t)
    };

function x(e, t, n, r, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
}
v.inherits(x, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const C = x.prototype,
    N = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
    N[e] = {
        value: e
    }
})), Object.defineProperties(x, N), Object.defineProperty(C, "isAxiosError", {
    value: !0
}), x.from = (e, t, n, r, o, s) => {
    const i = Object.create(C);
    return v.toFlatObject(e, i, (function(e) {
        return e !== Error.prototype
    }), (e => "isAxiosError" !== e)), x.call(i, e.message, t, n, r, o), i.cause = e, i.name = e.name, s && Object.assign(i, s), i
};
var P = "object" == typeof self ? self.FormData : window.FormData;

function _(e) {
    return v.isPlainObject(e) || v.isArray(e)
}

function B(e) {
    return v.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function D(e, t, n) {
    return e ? e.concat(t).map((function(e, t) {
        return e = B(e), !n && t ? "[" + e + "]" : e
    })).join(n ? "." : "") : t
}
const F = v.toFlatObject(v, {}, null, (function(e) {
    return /^is[A-Z]/.test(e)
}));

function U(e, t, n) {
    if (!v.isObject(e)) throw new TypeError("target must be an object");
    t = t || new(P || FormData);
    const r = (n = v.toFlatObject(n, {
            metaTokens: !0,
            dots: !1,
            indexes: !1
        }, !1, (function(e, t) {
            return !v.isUndefined(t[e])
        }))).metaTokens,
        o = n.visitor || l,
        s = n.dots,
        i = n.indexes,
        a = (n.Blob || "undefined" != typeof Blob && Blob) && ((c = t) && v.isFunction(c.append) && "FormData" === c[Symbol.toStringTag] && c[Symbol.iterator]);
    var c;
    if (!v.isFunction(o)) throw new TypeError("visitor must be a function");

    function u(e) {
        if (null === e) return "";
        if (v.isDate(e)) return e.toISOString();
        if (!a && v.isBlob(e)) throw new x("Blob is not supported. Use a Buffer instead.");
        return v.isArrayBuffer(e) || v.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
    }

    function l(e, n, o) {
        let a = e;
        if (e && !o && "object" == typeof e)
            if (v.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
            else if (v.isArray(e) && function(e) {
                return v.isArray(e) && !e.some(_)
            }(e) || v.isFileList(e) || v.endsWith(n, "[]") && (a = v.toArray(e))) return n = B(n), a.forEach((function(e, r) {
            !v.isUndefined(e) && null !== e && t.append(!0 === i ? D([n], r, s) : null === i ? n : n + "[]", u(e))
        })), !1;
        return !!_(e) || (t.append(D(o, n, s), u(e)), !1)
    }
    const f = [],
        h = Object.assign(F, {
            defaultVisitor: l,
            convertValue: u,
            isVisitable: _
        });
    if (!v.isObject(e)) throw new TypeError("data must be an object");
    return function e(n, r) {
        if (!v.isUndefined(n)) {
            if (-1 !== f.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
            f.push(n), v.forEach(n, (function(n, s) {
                !0 === (!(v.isUndefined(n) || null === n) && o.call(t, n, v.isString(s) ? s.trim() : s, r, h)) && e(n, r ? r.concat(s) : [s])
            })), f.pop()
        }
    }(e), t
}

function L(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
        return t[e]
    }))
}

function k(e, t) {
    this._pairs = [], e && U(e, this, t)
}
const z = k.prototype;

function q(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function I(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || q,
        o = n && n.serialize;
    let s;
    if (s = o ? o(t, n) : v.isURLSearchParams(t) ? t.toString() : new k(t, n).toString(r), s) {
        const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
    }
    return e
}
z.append = function(e, t) {
    this._pairs.push([e, t])
}, z.toString = function(e) {
    const t = e ? function(t) {
        return e.call(this, t, L)
    } : L;
    return this._pairs.map((function(e) {
        return t(e[0]) + "=" + t(e[1])
    }), "").join("&")
};
class M {
    constructor() {
        this.handlers = []
    }
    use(e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
        }), this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(e) {
        v.forEach(this.handlers, (function(t) {
            null !== t && e(t)
        }))
    }
}
const J = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    H = "undefined" != typeof URLSearchParams ? URLSearchParams : k,
    V = FormData,
    W = (() => {
        let e;
        return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && ("undefined" != typeof window && "undefined" != typeof document)
    })(),
    K = {
        isBrowser: !0,
        classes: {
            URLSearchParams: H,
            FormData: V,
            Blob: Blob
        },
        isStandardBrowserEnv: W,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function $(e) {
    function t(e, n, r, o) {
        let s = e[o++];
        const i = Number.isFinite(+s),
            a = o >= e.length;
        if (s = !s && v.isArray(r) ? r.length : s, a) return v.hasOwnProp(r, s) ? r[s] = [r[s], n] : r[s] = n, !i;
        r[s] && v.isObject(r[s]) || (r[s] = []);
        return t(e, n, r[s], o) && v.isArray(r[s]) && (r[s] = function(e) {
            const t = {},
                n = Object.keys(e);
            let r;
            const o = n.length;
            let s;
            for (r = 0; r < o; r++) s = n[r], t[s] = e[s];
            return t
        }(r[s])), !i
    }
    if (v.isFormData(e) && v.isFunction(e.entries)) {
        const n = {};
        return v.forEachEntry(e, ((e, r) => {
            t(function(e) {
                return v.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
            }(e), r, n, 0)
        })), n
    }
    return null
}
const X = K.isStandardBrowserEnv ? {
    write: function(e, t, n, r, o, s) {
        const i = [];
        i.push(e + "=" + encodeURIComponent(t)), v.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), v.isString(r) && i.push("path=" + r), v.isString(o) && i.push("domain=" + o), !0 === s && i.push("secure"), document.cookie = i.join("; ")
    },
    read: function(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove: function(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write: function() {},
    read: function() {
        return null
    },
    remove: function() {}
};

function Q(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(e, t) : t
}
const G = K.isStandardBrowserEnv ? function() {
    const e = /(msie|trident)/i.test(navigator.userAgent),
        t = document.createElement("a");
    let n;

    function r(n) {
        let r = n;
        return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
        }
    }
    return n = r(window.location.href),
        function(e) {
            const t = v.isString(e) ? r(e) : e;
            return t.protocol === n.protocol && t.host === n.host
        }
}() : function() {
    return !0
};

function Y(e, t, n) {
    x.call(this, null == e ? "canceled" : e, x.ERR_CANCELED, t, n), this.name = "CanceledError"
}
v.inherits(Y, x, {
    __CANCEL__: !0
});
const Z = v.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    ee = Symbol("internals"),
    te = Symbol("defaults");

function ne(e) {
    return e && String(e).trim().toLowerCase()
}

function re(e) {
    return !1 === e || null == e ? e : v.isArray(e) ? e.map(re) : String(e)
}

function oe(e, t, n, r) {
    return v.isFunction(r) ? r.call(this, t, n) : v.isString(t) ? v.isString(r) ? -1 !== t.indexOf(r) : v.isRegExp(r) ? r.test(t) : void 0 : void 0
}

function se(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r, o = n.length;
    for (; o-- > 0;)
        if (r = n[o], t === r.toLowerCase()) return r;
    return null
}

function ie(e, t) {
    e && this.set(e), this[te] = t || null
}

function ae(e, t) {
    let n = 0;
    const r = function(e, t) {
        e = e || 10;
        const n = new Array(e),
            r = new Array(e);
        let o, s = 0,
            i = 0;
        return t = void 0 !== t ? t : 1e3,
            function(a) {
                const c = Date.now(),
                    u = r[i];
                o || (o = c), n[s] = a, r[s] = c;
                let l = i,
                    f = 0;
                for (; l !== s;) f += n[l++], l %= e;
                if (s = (s + 1) % e, s === i && (i = (i + 1) % e), c - o < t) return;
                const h = u && c - u;
                return h ? Math.round(1e3 * f / h) : void 0
            }
    }(50, 250);
    return o => {
        const s = o.loaded,
            i = o.lengthComputable ? o.total : void 0,
            a = s - n,
            c = r(a);
        n = s;
        const u = {
            loaded: s,
            total: i,
            progress: i ? s / i : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && i && s <= i ? (i - s) / c : void 0
        };
        u[t ? "download" : "upload"] = !0, e(u)
    }
}

function ce(e) {
    return new Promise((function(t, n) {
        let r = e.data;
        const o = ie.from(e.headers).normalize(),
            s = e.responseType;
        let i;

        function a() {
            e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i)
        }
        v.isFormData(r) && K.isStandardBrowserEnv && o.setContentType(!1);
        let c = new XMLHttpRequest;
        if (e.auth) {
            const t = e.auth.username || "",
                n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
            o.set("Authorization", "Basic " + btoa(t + ":" + n))
        }
        const u = Q(e.baseURL, e.url);

        function l() {
            if (!c) return;
            const r = ie.from("getAllResponseHeaders" in c && c.getAllResponseHeaders());
            ! function(e, t, n) {
                const r = n.config.validateStatus;
                n.status && r && !r(n.status) ? t(new x("Request failed with status code " + n.status, [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
            }((function(e) {
                t(e), a()
            }), (function(e) {
                n(e), a()
            }), {
                data: s && "text" !== s && "json" !== s ? c.response : c.responseText,
                status: c.status,
                statusText: c.statusText,
                headers: r,
                config: e,
                request: c
            }), c = null
        }
        if (c.open(e.method.toUpperCase(), I(u, e.params, e.paramsSerializer), !0), c.timeout = e.timeout, "onloadend" in c ? c.onloadend = l : c.onreadystatechange = function() {
                c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:")) && setTimeout(l)
            }, c.onabort = function() {
                c && (n(new x("Request aborted", x.ECONNABORTED, e, c)), c = null)
            }, c.onerror = function() {
                n(new x("Network Error", x.ERR_NETWORK, e, c)), c = null
            }, c.ontimeout = function() {
                let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                const r = e.transitional || J;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new x(t, r.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED, e, c)), c = null
            }, K.isStandardBrowserEnv) {
            const t = (e.withCredentials || G(u)) && e.xsrfCookieName && X.read(e.xsrfCookieName);
            t && o.set(e.xsrfHeaderName, t)
        }
        void 0 === r && o.setContentType(null), "setRequestHeader" in c && v.forEach(o.toJSON(), (function(e, t) {
            c.setRequestHeader(t, e)
        })), v.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), s && "json" !== s && (c.responseType = e.responseType), "function" == typeof e.onDownloadProgress && c.addEventListener("progress", ae(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", ae(e.onUploadProgress)), (e.cancelToken || e.signal) && (i = t => {
            c && (n(!t || t.type ? new Y(null, e, c) : t), c.abort(), c = null)
        }, e.cancelToken && e.cancelToken.subscribe(i), e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
        const f = function(e) {
            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
            return t && t[1] || ""
        }(u);
        f && -1 === K.protocols.indexOf(f) ? n(new x("Unsupported protocol " + f + ":", x.ERR_BAD_REQUEST, e)) : c.send(r || null)
    }))
}
Object.assign(ie.prototype, {
    set: function(e, t, n) {
        const r = this;

        function o(e, t, n) {
            const o = ne(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const s = se(r, o);
            (!s || !0 === n || !1 !== r[s] && !1 !== n) && (r[s || t] = re(e))
        }
        return v.isPlainObject(e) ? v.forEach(e, ((e, n) => {
            o(e, n, t)
        })) : o(t, e, n), this
    },
    get: function(e, t) {
        if (!(e = ne(e))) return;
        const n = se(this, e);
        if (n) {
            const e = this[n];
            if (!t) return e;
            if (!0 === t) return function(e) {
                const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                let r;
                for (; r = n.exec(e);) t[r[1]] = r[2];
                return t
            }(e);
            if (v.isFunction(t)) return t.call(this, e, n);
            if (v.isRegExp(t)) return t.exec(e);
            throw new TypeError("parser must be boolean|regexp|function")
        }
    },
    has: function(e, t) {
        if (e = ne(e)) {
            const n = se(this, e);
            return !(!n || t && !oe(0, this[n], n, t))
        }
        return !1
    },
    delete: function(e, t) {
        const n = this;
        let r = !1;

        function o(e) {
            if (e = ne(e)) {
                const o = se(n, e);
                !o || t && !oe(0, n[o], o, t) || (delete n[o], r = !0)
            }
        }
        return v.isArray(e) ? e.forEach(o) : o(e), r
    },
    clear: function() {
        return Object.keys(this).forEach(this.delete.bind(this))
    },
    normalize: function(e) {
        const t = this,
            n = {};
        return v.forEach(this, ((r, o) => {
            const s = se(n, o);
            if (s) return t[s] = re(r), void delete t[o];
            const i = e ? function(e) {
                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
            }(o) : String(o).trim();
            i !== o && delete t[o], t[i] = re(r), n[i] = !0
        })), this
    },
    toJSON: function(e) {
        const t = Object.create(null);
        return v.forEach(Object.assign({}, this[te] || null, this), ((n, r) => {
            null != n && !1 !== n && (t[r] = e && v.isArray(n) ? n.join(", ") : n)
        })), t
    }
}), Object.assign(ie, {
    from: function(e) {
        return v.isString(e) ? new this((e => {
            const t = {};
            let n, r, o;
            return e && e.split("\n").forEach((function(e) {
                o = e.indexOf(":"), n = e.substring(0, o).trim().toLowerCase(), r = e.substring(o + 1).trim(), !n || t[n] && Z[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
            })), t
        })(e)) : e instanceof this ? e : new this(e)
    },
    accessor: function(e) {
        const t = (this[ee] = this[ee] = {
                accessors: {}
            }).accessors,
            n = this.prototype;

        function r(e) {
            const r = ne(e);
            t[r] || (! function(e, t) {
                const n = v.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r => {
                    Object.defineProperty(e, r + n, {
                        value: function(e, n, o) {
                            return this[r].call(this, t, e, n, o)
                        },
                        configurable: !0
                    })
                }))
            }(n, e), t[r] = !0)
        }
        return v.isArray(e) ? e.forEach(r) : r(e), this
    }
}), ie.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]), v.freezeMethods(ie.prototype), v.freezeMethods(ie);
const ue = {
        http: ce,
        xhr: ce
    },
    le = e => {
        if (v.isString(e)) {
            const t = ue[e];
            if (!e) throw Error(v.hasOwnProp(e) ? `Adapter '${e}' is not available in the build` : `Can not resolve adapter '${e}'`);
            return t
        }
        if (!v.isFunction(e)) throw new TypeError("adapter is not a function");
        return e
    },
    fe = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
const he = {
    transitional: J,
    adapter: function() {
        let e;
        return "undefined" != typeof XMLHttpRequest ? e = le("xhr") : "undefined" != typeof process && "process" === v.kindOf(process) && (e = le("http")), e
    }(),
    transformRequest: [function(e, t) {
        const n = t.getContentType() || "",
            r = n.indexOf("application/json") > -1,
            o = v.isObject(e);
        o && v.isHTMLForm(e) && (e = new FormData(e));
        if (v.isFormData(e)) return r && r ? JSON.stringify($(e)) : e;
        if (v.isArrayBuffer(e) || v.isBuffer(e) || v.isStream(e) || v.isFile(e) || v.isBlob(e)) return e;
        if (v.isArrayBufferView(e)) return e.buffer;
        if (v.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
        let s;
        if (o) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                return U(e, new K.classes.URLSearchParams, Object.assign({
                    visitor: function(e, t, n, r) {
                        return K.isNode && v.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                    }
                }, t))
            }(e, this.formSerializer).toString();
            if ((s = v.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                const t = this.env && this.env.FormData;
                return U(s ? {
                    "files[]": e
                } : e, t && new t, this.formSerializer)
            }
        }
        return o || r ? (t.setContentType("application/json", !1), function(e, t, n) {
            if (v.isString(e)) try {
                return (t || JSON.parse)(e), v.trim(e)
            } catch (r) {
                if ("SyntaxError" !== r.name) throw r
            }
            return (n || JSON.stringify)(e)
        }(e)) : e
    }],
    transformResponse: [function(e) {
        const t = this.transitional || he.transitional,
            n = t && t.forcedJSONParsing,
            r = "json" === this.responseType;
        if (e && v.isString(e) && (n && !this.responseType || r)) {
            const n = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(e)
            } catch (o) {
                if (n) {
                    if ("SyntaxError" === o.name) throw x.from(o, x.ERR_BAD_RESPONSE, this, null, this.response);
                    throw o
                }
            }
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: K.classes.FormData,
        Blob: K.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};

function de(e, t) {
    const n = this || he,
        r = t || n,
        o = ie.from(r.headers);
    let s = r.data;
    return v.forEach(e, (function(e) {
        s = e.call(n, s, o.normalize(), t ? t.status : void 0)
    })), o.normalize(), s
}

function pe(e) {
    return !(!e || !e.__CANCEL__)
}

function me(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Y
}

function ge(e) {
    me(e), e.headers = ie.from(e.headers), e.data = de.call(e, e.transformRequest);
    return (e.adapter || he.adapter)(e).then((function(t) {
        return me(e), t.data = de.call(e, e.transformResponse, t), t.headers = ie.from(t.headers), t
    }), (function(t) {
        return pe(t) || (me(e), t && t.response && (t.response.data = de.call(e, e.transformResponse, t.response), t.response.headers = ie.from(t.response.headers))), Promise.reject(t)
    }))
}

function be(e, t) {
    t = t || {};
    const n = {};

    function r(e, t) {
        return v.isPlainObject(e) && v.isPlainObject(t) ? v.merge(e, t) : v.isPlainObject(t) ? v.merge({}, t) : v.isArray(t) ? t.slice() : t
    }

    function o(n) {
        return v.isUndefined(t[n]) ? v.isUndefined(e[n]) ? void 0 : r(void 0, e[n]) : r(e[n], t[n])
    }

    function s(e) {
        if (!v.isUndefined(t[e])) return r(void 0, t[e])
    }

    function i(n) {
        return v.isUndefined(t[n]) ? v.isUndefined(e[n]) ? void 0 : r(void 0, e[n]) : r(void 0, t[n])
    }

    function a(n) {
        return n in t ? r(e[n], t[n]) : n in e ? r(void 0, e[n]) : void 0
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: a
    };
    return v.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
        const t = c[e] || o,
            r = t(e);
        v.isUndefined(r) && t !== a || (n[e] = r)
    })), n
}
v.forEach(["delete", "get", "head"], (function(e) {
    he.headers[e] = {}
})), v.forEach(["post", "put", "patch"], (function(e) {
    he.headers[e] = v.merge(fe)
}));
const ye = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
    ye[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
}));
const Ee = {};
ye.transitional = function(e, t, n) {
    function r(e, t) {
        return "[Axios v1.1.3] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
    }
    return (n, o, s) => {
        if (!1 === e) throw new x(r(o, " has been removed" + (t ? " in " + t : "")), x.ERR_DEPRECATED);
        return t && !Ee[o] && (Ee[o] = !0, console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, o, s)
    }
};
const we = {
        assertOptions: function(e, t, n) {
            if ("object" != typeof e) throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0;) {
                const s = r[o],
                    i = t[s];
                if (i) {
                    const t = e[s],
                        n = void 0 === t || i(t, s, e);
                    if (!0 !== n) throw new x("option " + s + " must be " + n, x.ERR_BAD_OPTION_VALUE)
                } else if (!0 !== n) throw new x("Unknown option " + s, x.ERR_BAD_OPTION)
            }
        },
        validators: ye
    },
    Oe = we.validators;
class Re {
    constructor(e) {
        this.defaults = e, this.interceptors = {
            request: new M,
            response: new M
        }
    }
    request(e, t) {
        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = be(this.defaults, t);
        const {
            transitional: n,
            paramsSerializer: r
        } = t;
        void 0 !== n && we.assertOptions(n, {
            silentJSONParsing: Oe.transitional(Oe.boolean),
            forcedJSONParsing: Oe.transitional(Oe.boolean),
            clarifyTimeoutError: Oe.transitional(Oe.boolean)
        }, !1), void 0 !== r && we.assertOptions(r, {
            encode: Oe.function,
            serialize: Oe.function
        }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase();
        const o = t.headers && v.merge(t.headers.common, t.headers[t.method]);
        o && v.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
            delete t.headers[e]
        })), t.headers = new ie(t.headers, o);
        const s = [];
        let i = !0;
        this.interceptors.request.forEach((function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (i = i && e.synchronous, s.unshift(e.fulfilled, e.rejected))
        }));
        const a = [];
        let c;
        this.interceptors.response.forEach((function(e) {
            a.push(e.fulfilled, e.rejected)
        }));
        let u, l = 0;
        if (!i) {
            const e = [ge.bind(this), void 0];
            for (e.unshift.apply(e, s), e.push.apply(e, a), u = e.length, c = Promise.resolve(t); l < u;) c = c.then(e[l++], e[l++]);
            return c
        }
        u = s.length;
        let f = t;
        for (l = 0; l < u;) {
            const e = s[l++],
                t = s[l++];
            try {
                f = e(f)
            } catch (h) {
                t.call(this, h);
                break
            }
        }
        try {
            c = ge.call(this, f)
        } catch (h) {
            return Promise.reject(h)
        }
        for (l = 0, u = a.length; l < u;) c = c.then(a[l++], a[l++]);
        return c
    }
    getUri(e) {
        return I(Q((e = be(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
    }
}
v.forEach(["delete", "get", "head", "options"], (function(e) {
    Re.prototype[e] = function(t, n) {
        return this.request(be(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
        }))
    }
})), v.forEach(["post", "put", "patch"], (function(e) {
    function t(t) {
        return function(n, r, o) {
            return this.request(be(o || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: n,
                data: r
            }))
        }
    }
    Re.prototype[e] = t(), Re.prototype[e + "Form"] = t(!0)
}));
class Se {
    constructor(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        let t;
        this.promise = new Promise((function(e) {
            t = e
        }));
        const n = this;
        this.promise.then((e => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0;) n._listeners[t](e);
            n._listeners = null
        })), this.promise.then = e => {
            let t;
            const r = new Promise((e => {
                n.subscribe(e), t = e
            })).then(e);
            return r.cancel = function() {
                n.unsubscribe(t)
            }, r
        }, e((function(e, r, o) {
            n.reason || (n.reason = new Y(e, r, o), t(n.reason))
        }))
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners) return;
        const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
    }
    static source() {
        let e;
        return {
            token: new Se((function(t) {
                e = t
            })),
            cancel: e
        }
    }
}
const Ae = function t(n) {
    const r = new Re(n),
        o = e(Re.prototype.request, r);
    return v.extend(o, Re.prototype, r, {
        allOwnKeys: !0
    }), v.extend(o, r, null, {
        allOwnKeys: !0
    }), o.create = function(e) {
        return t(be(n, e))
    }, o
}(he);
Ae.Axios = Re, Ae.CanceledError = Y, Ae.CancelToken = Se, Ae.isCancel = pe, Ae.VERSION = "1.1.3", Ae.toFormData = U, Ae.AxiosError = x, Ae.Cancel = Ae.CanceledError, Ae.all = function(e) {
    return Promise.all(e)
}, Ae.spread = function(e) {
    return function(t) {
        return e.apply(null, t)
    }
}, Ae.isAxiosError = function(e) {
    return v.isObject(e) && !0 === e.isAxiosError
}, Ae.formToJSON = e => $(v.isHTMLForm(e) ? new FormData(e) : e);
export {
    Ae as a
};