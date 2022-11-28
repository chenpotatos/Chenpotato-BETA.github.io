import {
    O as t,
    o as e,
    t as i,
    k as n,
    a,
    g as o,
    b as r,
    h as s,
    ao as h,
    e as c,
    J as l,
    C as p,
    K as d,
    A as u,
    B as m,
    j as g,
    z as f,
    a0 as v,
    W as b,
    i as w,
    n as x,
    L as y,
    x as C,
    d as M,
    I as k
} from "./el-select.e274bb48.js";
import {
    D
} from "./d-color.0db1603d.js";
import {
    o as A
} from "./ossClient.3d42266e.js";
import {
    w as B
} from "./website.2111b3d7.js";
import {
    p as z,
    l as T,
    q as O
} from "./index.4e5ff846.js";
import {
    E as j
} from "./el-upload.125a730c.js";
import "./el-progress.3a42d846.js"; /* empty css                  */
import {
    E,
    a as S
} from "./el-form-item.912e2c38.js"; /* empty css                */ /* empty css                   */
import I from "./RefreshRight.be739b02.js";
import {
    E as R
} from "./index.176a125e.js";
import {
    ElButton as L
} from "./index.534437f3.js";
import {
    u as W,
    a as H,
    k as N
} from "./main.354a692e.js";
import {
    a as _
} from "./addToDesk.49d98345.js";
import {
    d as Y
} from "./debounce.abbfdaeb.js";
import {
    E as X
} from "./index.72bec9e8.js";
import {
    ElMessage as P
} from "./index.bd01dcfa.js";
import {
    c as U
} from "./cloneDeep.3cbd3f2d.js";
var q = t({
    name: "ZoomIn"
});
const V = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    $ = n("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
    }, null, -1);
q.render = function(t, n, a, o, r, s) {
    return e(), i("svg", V, [$])
}, q.__file = "packages/components/ZoomIn.vue";
const F = q;
var Z = t({
    name: "ZoomOut"
});
const Q = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    G = n("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
    }, null, -1);
Z.render = function(t, n, a, o, r, s) {
    return e(), i("svg", Q, [G])
}, Z.__file = "packages/components/ZoomOut.vue";
const K = Z;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function J(t, e, i, n) {
    return new(i || (i = Promise))((function(a, o) {
        function r(t) {
            try {
                h(n.next(t))
            } catch (e) {
                o(e)
            }
        }

        function s(t) {
            try {
                h(n.throw(t))
            } catch (e) {
                o(e)
            }
        }

        function h(t) {
            var e;
            t.done ? a(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                t(e)
            }))).then(r, s)
        }
        h((n = n.apply(t, e || [])).next())
    }))
}

function tt(t, e) {
    var i, n, a, o, r = {
        label: 0,
        sent: function() {
            if (1 & a[0]) throw a[1];
            return a[1]
        },
        trys: [],
        ops: []
    };
    return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this
    }), o;

    function s(o) {
        return function(s) {
            return function(o) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; r;) try {
                    if (i = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                    switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                        case 0:
                        case 1:
                            a = o;
                            break;
                        case 4:
                            return r.label++, {
                                value: o[1],
                                done: !1
                            };
                        case 5:
                            r.label++, n = o[1], o = [0];
                            continue;
                        case 7:
                            o = r.ops.pop(), r.trys.pop();
                            continue;
                        default:
                            if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                r.label = o[1];
                                break
                            }
                            if (6 === o[0] && r.label < a[1]) {
                                r.label = a[1], a = o;
                                break
                            }
                            if (a && r.label < a[2]) {
                                r.label = a[2], r.ops.push(o);
                                break
                            }
                            a[2] && r.ops.pop(), r.trys.pop();
                            continue
                    }
                    o = e.call(t, r)
                } catch (s) {
                    o = [6, s], n = 0
                } finally {
                    i = a = 0
                }
                if (5 & o[0]) throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                }
            }([o, s])
        }
    }
}
var et, it, nt = (it = et = {
        path: void 0,
        exports: {},
        require: function(t, e) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == e && et.path)
        }
    }, et.exports,
    /*!
     * Cropper.js v1.5.12
     * https://fengyuanchen.github.io/cropperjs
     *
     * Copyright 2015-present Chen Fengyuan
     * Released under the MIT license
     *
     * Date: 2021-06-12T08:00:17.411Z
     */
    it.exports = function() {
        function t(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), i.push.apply(i, n)
            }
            return i
        }

        function e(e) {
            for (var i = 1; i < arguments.length; i++) {
                var n = null != arguments[i] ? arguments[i] : {};
                i % 2 ? t(Object(n), !0).forEach((function(t) {
                    o(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function a(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }

        function o(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function r(t) {
            return function(t) {
                if (Array.isArray(t)) return s(t)
            }(t) || function(t) {
                if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
            }(t) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return s(t, e);
                    var i = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? s(t, e) : void 0
                }
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
            return n
        }
        var h = "undefined" != typeof window && void 0 !== window.document,
            c = h ? window : {},
            l = !(!h || !c.document.documentElement) && "ontouchstart" in c.document.documentElement,
            p = !!h && "PointerEvent" in c,
            d = "cropper",
            u = "all",
            m = "crop",
            g = "move",
            f = "zoom",
            v = "e",
            b = "w",
            w = "s",
            x = "n",
            y = "ne",
            C = "nw",
            M = "se",
            k = "sw",
            D = "".concat(d, "-crop"),
            A = "".concat(d, "-disabled"),
            B = "".concat(d, "-hidden"),
            z = "".concat(d, "-hide"),
            T = "".concat(d, "-invisible"),
            O = "".concat(d, "-modal"),
            j = "".concat(d, "-move"),
            E = "".concat(d, "Action"),
            S = "".concat(d, "Preview"),
            I = "crop",
            R = "move",
            L = "none",
            W = "crop",
            H = "cropend",
            N = "cropmove",
            _ = "cropstart",
            Y = "dblclick",
            X = p ? "pointerdown" : l ? "touchstart" : "mousedown",
            P = p ? "pointermove" : l ? "touchmove" : "mousemove",
            U = p ? "pointerup pointercancel" : l ? "touchend touchcancel" : "mouseup",
            q = "ready",
            V = "resize",
            $ = "wheel",
            F = "zoom",
            Z = "image/jpeg",
            Q = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
            G = /^data:/,
            K = /^data:image\/jpeg;base64,/,
            J = /^img|canvas$/i,
            tt = {
                viewMode: 0,
                dragMode: I,
                initialAspectRatio: NaN,
                aspectRatio: NaN,
                data: null,
                preview: "",
                responsive: !0,
                restore: !0,
                checkCrossOrigin: !0,
                checkOrientation: !0,
                modal: !0,
                guides: !0,
                center: !0,
                highlight: !0,
                background: !0,
                autoCrop: !0,
                autoCropArea: .8,
                movable: !0,
                rotatable: !0,
                scalable: !0,
                zoomable: !0,
                zoomOnTouch: !0,
                zoomOnWheel: !0,
                wheelZoomRatio: .1,
                cropBoxMovable: !0,
                cropBoxResizable: !0,
                toggleDragModeOnDblclick: !0,
                minCanvasWidth: 0,
                minCanvasHeight: 0,
                minCropBoxWidth: 0,
                minCropBoxHeight: 0,
                minContainerWidth: 200,
                minContainerHeight: 100,
                ready: null,
                cropstart: null,
                cropmove: null,
                cropend: null,
                crop: null,
                zoom: null
            },
            et = Number.isNaN || c.isNaN;

        function it(t) {
            return "number" == typeof t && !et(t)
        }
        var nt = function(t) {
            return t > 0 && t < 1 / 0
        };

        function at(t) {
            return void 0 === t
        }

        function ot(t) {
            return "object" === i(t) && null !== t
        }
        var rt = Object.prototype.hasOwnProperty;

        function st(t) {
            if (!ot(t)) return !1;
            try {
                var e = t.constructor,
                    i = e.prototype;
                return e && i && rt.call(i, "isPrototypeOf")
            } catch (n) {
                return !1
            }
        }

        function ht(t) {
            return "function" == typeof t
        }
        var ct = Array.prototype.slice;

        function lt(t) {
            return Array.from ? Array.from(t) : ct.call(t)
        }

        function pt(t, e) {
            return t && ht(e) && (Array.isArray(t) || it(t.length) ? lt(t).forEach((function(i, n) {
                e.call(t, i, n, t)
            })) : ot(t) && Object.keys(t).forEach((function(i) {
                e.call(t, t[i], i, t)
            }))), t
        }
        var dt = Object.assign || function(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                return ot(t) && i.length > 0 && i.forEach((function(e) {
                    ot(e) && Object.keys(e).forEach((function(i) {
                        t[i] = e[i]
                    }))
                })), t
            },
            ut = /\.\d*(?:0|9){12}\d*$/;

        function mt(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
            return ut.test(t) ? Math.round(t * e) / e : t
        }
        var gt = /^width|height|left|top|marginLeft|marginTop$/;

        function ft(t, e) {
            var i = t.style;
            pt(e, (function(t, e) {
                gt.test(e) && it(t) && (t = "".concat(t, "px")), i[e] = t
            }))
        }

        function vt(t, e) {
            if (e)
                if (it(t.length)) pt(t, (function(t) {
                    vt(t, e)
                }));
                else if (t.classList) t.classList.add(e);
            else {
                var i = t.className.trim();
                i ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e)) : t.className = e
            }
        }

        function bt(t, e) {
            e && (it(t.length) ? pt(t, (function(t) {
                bt(t, e)
            })) : t.classList ? t.classList.remove(e) : t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, "")))
        }

        function wt(t, e, i) {
            e && (it(t.length) ? pt(t, (function(t) {
                wt(t, e, i)
            })) : i ? vt(t, e) : bt(t, e))
        }
        var xt = /([a-z\d])([A-Z])/g;

        function yt(t) {
            return t.replace(xt, "$1-$2").toLowerCase()
        }

        function Ct(t, e) {
            return ot(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(yt(e)))
        }

        function Mt(t, e, i) {
            ot(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-".concat(yt(e)), i)
        }
        var kt = /\s\s*/,
            Dt = function() {
                var t = !1;
                if (h) {
                    var e = !1,
                        i = function() {},
                        n = Object.defineProperty({}, "once", {
                            get: function() {
                                return t = !0, e
                            },
                            set: function(t) {
                                e = t
                            }
                        });
                    c.addEventListener("test", i, n), c.removeEventListener("test", i, n)
                }
                return t
            }();

        function At(t, e, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = i;
            e.trim().split(kt).forEach((function(e) {
                if (!Dt) {
                    var o = t.listeners;
                    o && o[e] && o[e][i] && (a = o[e][i], delete o[e][i], 0 === Object.keys(o[e]).length && delete o[e], 0 === Object.keys(o).length && delete t.listeners)
                }
                t.removeEventListener(e, a, n)
            }))
        }

        function Bt(t, e, i) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                a = i;
            e.trim().split(kt).forEach((function(e) {
                if (n.once && !Dt) {
                    var o = t.listeners,
                        r = void 0 === o ? {} : o;
                    a = function() {
                        delete r[e][i], t.removeEventListener(e, a, n);
                        for (var o = arguments.length, s = new Array(o), h = 0; h < o; h++) s[h] = arguments[h];
                        i.apply(t, s)
                    }, r[e] || (r[e] = {}), r[e][i] && t.removeEventListener(e, r[e][i], n), r[e][i] = a, t.listeners = r
                }
                t.addEventListener(e, a, n)
            }))
        }

        function zt(t, e, i) {
            var n;
            return ht(Event) && ht(CustomEvent) ? n = new CustomEvent(e, {
                detail: i,
                bubbles: !0,
                cancelable: !0
            }) : (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i), t.dispatchEvent(n)
        }

        function Tt(t) {
            var e = t.getBoundingClientRect();
            return {
                left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
                top: e.top + (window.pageYOffset - document.documentElement.clientTop)
            }
        }
        var Ot = c.location,
            jt = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

        function Et(t) {
            var e = t.match(jt);
            return null !== e && (e[1] !== Ot.protocol || e[2] !== Ot.hostname || e[3] !== Ot.port)
        }

        function St(t) {
            var e = "timestamp=".concat((new Date).getTime());
            return t + (-1 === t.indexOf("?") ? "?" : "&") + e
        }

        function It(t) {
            var e = t.rotate,
                i = t.scaleX,
                n = t.scaleY,
                a = t.translateX,
                o = t.translateY,
                r = [];
            it(a) && 0 !== a && r.push("translateX(".concat(a, "px)")), it(o) && 0 !== o && r.push("translateY(".concat(o, "px)")), it(e) && 0 !== e && r.push("rotate(".concat(e, "deg)")), it(i) && 1 !== i && r.push("scaleX(".concat(i, ")")), it(n) && 1 !== n && r.push("scaleY(".concat(n, ")"));
            var s = r.length ? r.join(" ") : "none";
            return {
                WebkitTransform: s,
                msTransform: s,
                transform: s
            }
        }

        function Rt(t, i) {
            var n = t.pageX,
                a = t.pageY,
                o = {
                    endX: n,
                    endY: a
                };
            return i ? o : e({
                startX: n,
                startY: a
            }, o)
        }

        function Lt(t) {
            var e = t.aspectRatio,
                i = t.height,
                n = t.width,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain",
                o = nt(n),
                r = nt(i);
            if (o && r) {
                var s = i * e;
                "contain" === a && s > n || "cover" === a && s < n ? i = n / e : n = i * e
            } else o ? i = n / e : r && (n = i * e);
            return {
                width: n,
                height: i
            }
        }

        function Wt(t, e, i, n) {
            var a = e.aspectRatio,
                o = e.naturalWidth,
                s = e.naturalHeight,
                h = e.rotate,
                c = void 0 === h ? 0 : h,
                l = e.scaleX,
                p = void 0 === l ? 1 : l,
                d = e.scaleY,
                u = void 0 === d ? 1 : d,
                m = i.aspectRatio,
                g = i.naturalWidth,
                f = i.naturalHeight,
                v = n.fillColor,
                b = void 0 === v ? "transparent" : v,
                w = n.imageSmoothingEnabled,
                x = void 0 === w || w,
                y = n.imageSmoothingQuality,
                C = void 0 === y ? "low" : y,
                M = n.maxWidth,
                k = void 0 === M ? 1 / 0 : M,
                D = n.maxHeight,
                A = void 0 === D ? 1 / 0 : D,
                B = n.minWidth,
                z = void 0 === B ? 0 : B,
                T = n.minHeight,
                O = void 0 === T ? 0 : T,
                j = document.createElement("canvas"),
                E = j.getContext("2d"),
                S = Lt({
                    aspectRatio: m,
                    width: k,
                    height: A
                }),
                I = Lt({
                    aspectRatio: m,
                    width: z,
                    height: O
                }, "cover"),
                R = Math.min(S.width, Math.max(I.width, g)),
                L = Math.min(S.height, Math.max(I.height, f)),
                W = Lt({
                    aspectRatio: a,
                    width: k,
                    height: A
                }),
                H = Lt({
                    aspectRatio: a,
                    width: z,
                    height: O
                }, "cover"),
                N = Math.min(W.width, Math.max(H.width, o)),
                _ = Math.min(W.height, Math.max(H.height, s)),
                Y = [-N / 2, -_ / 2, N, _];
            return j.width = mt(R), j.height = mt(L), E.fillStyle = b, E.fillRect(0, 0, R, L), E.save(), E.translate(R / 2, L / 2), E.rotate(c * Math.PI / 180), E.scale(p, u), E.imageSmoothingEnabled = x, E.imageSmoothingQuality = C, E.drawImage.apply(E, [t].concat(r(Y.map((function(t) {
                return Math.floor(mt(t))
            }))))), E.restore(), j
        }
        var Ht = String.fromCharCode,
            Nt = /^data:.*,/;

        function _t(t) {
            var e, i = new DataView(t);
            try {
                var n, a, o;
                if (255 === i.getUint8(0) && 216 === i.getUint8(1))
                    for (var r = i.byteLength, s = 2; s + 1 < r;) {
                        if (255 === i.getUint8(s) && 225 === i.getUint8(s + 1)) {
                            a = s;
                            break
                        }
                        s += 1
                    }
                if (a) {
                    var h = a + 10;
                    if ("Exif" === function(t, e, i) {
                            var n = "";
                            i += e;
                            for (var a = e; a < i; a += 1) n += Ht(t.getUint8(a));
                            return n
                        }(i, a + 4, 4)) {
                        var c = i.getUint16(h);
                        if (((n = 18761 === c) || 19789 === c) && 42 === i.getUint16(h + 2, n)) {
                            var l = i.getUint32(h + 4, n);
                            l >= 8 && (o = h + l)
                        }
                    }
                }
                if (o) {
                    var p, d, u = i.getUint16(o, n);
                    for (d = 0; d < u; d += 1)
                        if (p = o + 12 * d + 2, 274 === i.getUint16(p, n)) {
                            p += 8, e = i.getUint16(p, n), i.setUint16(p, 1, n);
                            break
                        }
                }
            } catch (m) {
                e = 1
            }
            return e
        }
        var Yt = {
                render: function() {
                    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
                },
                initContainer: function() {
                    var t = this.element,
                        e = this.options,
                        i = this.container,
                        n = this.cropper,
                        a = Number(e.minContainerWidth),
                        o = Number(e.minContainerHeight);
                    vt(n, B), bt(t, B);
                    var r = {
                        width: Math.max(i.offsetWidth, a >= 0 ? a : 200),
                        height: Math.max(i.offsetHeight, o >= 0 ? o : 100)
                    };
                    this.containerData = r, ft(n, {
                        width: r.width,
                        height: r.height
                    }), vt(t, B), bt(n, B)
                },
                initCanvas: function() {
                    var t = this.containerData,
                        e = this.imageData,
                        i = this.options.viewMode,
                        n = Math.abs(e.rotate) % 180 == 90,
                        a = n ? e.naturalHeight : e.naturalWidth,
                        o = n ? e.naturalWidth : e.naturalHeight,
                        r = a / o,
                        s = t.width,
                        h = t.height;
                    t.height * r > t.width ? 3 === i ? s = t.height * r : h = t.width / r : 3 === i ? h = t.width / r : s = t.height * r;
                    var c = {
                        aspectRatio: r,
                        naturalWidth: a,
                        naturalHeight: o,
                        width: s,
                        height: h
                    };
                    this.canvasData = c, this.limited = 1 === i || 2 === i, this.limitCanvas(!0, !0), c.width = Math.min(Math.max(c.width, c.minWidth), c.maxWidth), c.height = Math.min(Math.max(c.height, c.minHeight), c.maxHeight), c.left = (t.width - c.width) / 2, c.top = (t.height - c.height) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.initialCanvasData = dt({}, c)
                },
                limitCanvas: function(t, e) {
                    var i = this.options,
                        n = this.containerData,
                        a = this.canvasData,
                        o = this.cropBoxData,
                        r = i.viewMode,
                        s = a.aspectRatio,
                        h = this.cropped && o;
                    if (t) {
                        var c = Number(i.minCanvasWidth) || 0,
                            l = Number(i.minCanvasHeight) || 0;
                        r > 1 ? (c = Math.max(c, n.width), l = Math.max(l, n.height), 3 === r && (l * s > c ? c = l * s : l = c / s)) : r > 0 && (c ? c = Math.max(c, h ? o.width : 0) : l ? l = Math.max(l, h ? o.height : 0) : h && (c = o.width, (l = o.height) * s > c ? c = l * s : l = c / s));
                        var p = Lt({
                            aspectRatio: s,
                            width: c,
                            height: l
                        });
                        c = p.width, l = p.height, a.minWidth = c, a.minHeight = l, a.maxWidth = 1 / 0, a.maxHeight = 1 / 0
                    }
                    if (e)
                        if (r > (h ? 0 : 1)) {
                            var d = n.width - a.width,
                                u = n.height - a.height;
                            a.minLeft = Math.min(0, d), a.minTop = Math.min(0, u), a.maxLeft = Math.max(0, d), a.maxTop = Math.max(0, u), h && this.limited && (a.minLeft = Math.min(o.left, o.left + (o.width - a.width)), a.minTop = Math.min(o.top, o.top + (o.height - a.height)), a.maxLeft = o.left, a.maxTop = o.top, 2 === r && (a.width >= n.width && (a.minLeft = Math.min(0, d), a.maxLeft = Math.max(0, d)), a.height >= n.height && (a.minTop = Math.min(0, u), a.maxTop = Math.max(0, u))))
                        } else a.minLeft = -a.width, a.minTop = -a.height, a.maxLeft = n.width, a.maxTop = n.height
                },
                renderCanvas: function(t, e) {
                    var i = this.canvasData,
                        n = this.imageData;
                    if (e) {
                        var a = function(t) {
                                var e = t.width,
                                    i = t.height,
                                    n = t.degree;
                                if (90 == (n = Math.abs(n) % 180)) return {
                                    width: i,
                                    height: e
                                };
                                var a = n % 90 * Math.PI / 180,
                                    o = Math.sin(a),
                                    r = Math.cos(a),
                                    s = e * r + i * o,
                                    h = e * o + i * r;
                                return n > 90 ? {
                                    width: h,
                                    height: s
                                } : {
                                    width: s,
                                    height: h
                                }
                            }({
                                width: n.naturalWidth * Math.abs(n.scaleX || 1),
                                height: n.naturalHeight * Math.abs(n.scaleY || 1),
                                degree: n.rotate || 0
                            }),
                            o = a.width,
                            r = a.height,
                            s = i.width * (o / i.naturalWidth),
                            h = i.height * (r / i.naturalHeight);
                        i.left -= (s - i.width) / 2, i.top -= (h - i.height) / 2, i.width = s, i.height = h, i.aspectRatio = o / r, i.naturalWidth = o, i.naturalHeight = r, this.limitCanvas(!0, !1)
                    }(i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCanvas(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, ft(this.canvas, dt({
                        width: i.width,
                        height: i.height
                    }, It({
                        translateX: i.left,
                        translateY: i.top
                    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0)
                },
                renderImage: function(t) {
                    var e = this.canvasData,
                        i = this.imageData,
                        n = i.naturalWidth * (e.width / e.naturalWidth),
                        a = i.naturalHeight * (e.height / e.naturalHeight);
                    dt(i, {
                        width: n,
                        height: a,
                        left: (e.width - n) / 2,
                        top: (e.height - a) / 2
                    }), ft(this.image, dt({
                        width: i.width,
                        height: i.height
                    }, It(dt({
                        translateX: i.left,
                        translateY: i.top
                    }, i)))), t && this.output()
                },
                initCropBox: function() {
                    var t = this.options,
                        e = this.canvasData,
                        i = t.aspectRatio || t.initialAspectRatio,
                        n = Number(t.autoCropArea) || .8,
                        a = {
                            width: e.width,
                            height: e.height
                        };
                    i && (e.height * i > e.width ? a.height = a.width / i : a.width = a.height * i), this.cropBoxData = a, this.limitCropBox(!0, !0), a.width = Math.min(Math.max(a.width, a.minWidth), a.maxWidth), a.height = Math.min(Math.max(a.height, a.minHeight), a.maxHeight), a.width = Math.max(a.minWidth, a.width * n), a.height = Math.max(a.minHeight, a.height * n), a.left = e.left + (e.width - a.width) / 2, a.top = e.top + (e.height - a.height) / 2, a.oldLeft = a.left, a.oldTop = a.top, this.initialCropBoxData = dt({}, a)
                },
                limitCropBox: function(t, e) {
                    var i = this.options,
                        n = this.containerData,
                        a = this.canvasData,
                        o = this.cropBoxData,
                        r = this.limited,
                        s = i.aspectRatio;
                    if (t) {
                        var h = Number(i.minCropBoxWidth) || 0,
                            c = Number(i.minCropBoxHeight) || 0,
                            l = r ? Math.min(n.width, a.width, a.width + a.left, n.width - a.left) : n.width,
                            p = r ? Math.min(n.height, a.height, a.height + a.top, n.height - a.top) : n.height;
                        h = Math.min(h, n.width), c = Math.min(c, n.height), s && (h && c ? c * s > h ? c = h / s : h = c * s : h ? c = h / s : c && (h = c * s), p * s > l ? p = l / s : l = p * s), o.minWidth = Math.min(h, l), o.minHeight = Math.min(c, p), o.maxWidth = l, o.maxHeight = p
                    }
                    e && (r ? (o.minLeft = Math.max(0, a.left), o.minTop = Math.max(0, a.top), o.maxLeft = Math.min(n.width, a.left + a.width) - o.width, o.maxTop = Math.min(n.height, a.top + a.height) - o.height) : (o.minLeft = 0, o.minTop = 0, o.maxLeft = n.width - o.width, o.maxTop = n.height - o.height))
                },
                renderCropBox: function() {
                    var t = this.options,
                        e = this.containerData,
                        i = this.cropBoxData;
                    (i.width > i.maxWidth || i.width < i.minWidth) && (i.left = i.oldLeft), (i.height > i.maxHeight || i.height < i.minHeight) && (i.top = i.oldTop), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), this.limitCropBox(!1, !0), i.left = Math.min(Math.max(i.left, i.minLeft), i.maxLeft), i.top = Math.min(Math.max(i.top, i.minTop), i.maxTop), i.oldLeft = i.left, i.oldTop = i.top, t.movable && t.cropBoxMovable && Mt(this.face, E, i.width >= e.width && i.height >= e.height ? g : u), ft(this.cropBox, dt({
                        width: i.width,
                        height: i.height
                    }, It({
                        translateX: i.left,
                        translateY: i.top
                    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
                },
                output: function() {
                    this.preview(), zt(this.element, W, this.getData())
                }
            },
            Xt = {
                initPreview: function() {
                    var t = this.element,
                        e = this.crossOrigin,
                        i = this.options.preview,
                        n = e ? this.crossOriginUrl : this.url,
                        a = t.alt || "The image to preview",
                        o = document.createElement("img");
                    if (e && (o.crossOrigin = e), o.src = n, o.alt = a, this.viewBox.appendChild(o), this.viewBoxImage = o, i) {
                        var r = i;
                        "string" == typeof i ? r = t.ownerDocument.querySelectorAll(i) : i.querySelector && (r = [i]), this.previews = r, pt(r, (function(t) {
                            var i = document.createElement("img");
                            Mt(t, S, {
                                width: t.offsetWidth,
                                height: t.offsetHeight,
                                html: t.innerHTML
                            }), e && (i.crossOrigin = e), i.src = n, i.alt = a, i.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', t.innerHTML = "", t.appendChild(i)
                        }))
                    }
                },
                resetPreview: function() {
                    pt(this.previews, (function(t) {
                        var e = Ct(t, S);
                        ft(t, {
                                width: e.width,
                                height: e.height
                            }), t.innerHTML = e.html,
                            function(t, e) {
                                if (ot(t[e])) try {
                                    delete t[e]
                                } catch (i) {
                                    t[e] = void 0
                                } else if (t.dataset) try {
                                    delete t.dataset[e]
                                } catch (i) {
                                    t.dataset[e] = void 0
                                } else t.removeAttribute("data-".concat(yt(e)))
                            }(t, S)
                    }))
                },
                preview: function() {
                    var t = this.imageData,
                        e = this.canvasData,
                        i = this.cropBoxData,
                        n = i.width,
                        a = i.height,
                        o = t.width,
                        r = t.height,
                        s = i.left - e.left - t.left,
                        h = i.top - e.top - t.top;
                    this.cropped && !this.disabled && (ft(this.viewBoxImage, dt({
                        width: o,
                        height: r
                    }, It(dt({
                        translateX: -s,
                        translateY: -h
                    }, t)))), pt(this.previews, (function(e) {
                        var i = Ct(e, S),
                            c = i.width,
                            l = i.height,
                            p = c,
                            d = l,
                            u = 1;
                        n && (d = a * (u = c / n)), a && d > l && (p = n * (u = l / a), d = l), ft(e, {
                            width: p,
                            height: d
                        }), ft(e.getElementsByTagName("img")[0], dt({
                            width: o * u,
                            height: r * u
                        }, It(dt({
                            translateX: -s * u,
                            translateY: -h * u
                        }, t))))
                    })))
                }
            },
            Pt = {
                bind: function() {
                    var t = this.element,
                        e = this.options,
                        i = this.cropper;
                    ht(e.cropstart) && Bt(t, _, e.cropstart), ht(e.cropmove) && Bt(t, N, e.cropmove), ht(e.cropend) && Bt(t, H, e.cropend), ht(e.crop) && Bt(t, W, e.crop), ht(e.zoom) && Bt(t, F, e.zoom), Bt(i, X, this.onCropStart = this.cropStart.bind(this)), e.zoomable && e.zoomOnWheel && Bt(i, $, this.onWheel = this.wheel.bind(this), {
                        passive: !1,
                        capture: !0
                    }), e.toggleDragModeOnDblclick && Bt(i, Y, this.onDblclick = this.dblclick.bind(this)), Bt(t.ownerDocument, P, this.onCropMove = this.cropMove.bind(this)), Bt(t.ownerDocument, U, this.onCropEnd = this.cropEnd.bind(this)), e.responsive && Bt(window, V, this.onResize = this.resize.bind(this))
                },
                unbind: function() {
                    var t = this.element,
                        e = this.options,
                        i = this.cropper;
                    ht(e.cropstart) && At(t, _, e.cropstart), ht(e.cropmove) && At(t, N, e.cropmove), ht(e.cropend) && At(t, H, e.cropend), ht(e.crop) && At(t, W, e.crop), ht(e.zoom) && At(t, F, e.zoom), At(i, X, this.onCropStart), e.zoomable && e.zoomOnWheel && At(i, $, this.onWheel, {
                        passive: !1,
                        capture: !0
                    }), e.toggleDragModeOnDblclick && At(i, Y, this.onDblclick), At(t.ownerDocument, P, this.onCropMove), At(t.ownerDocument, U, this.onCropEnd), e.responsive && At(window, V, this.onResize)
                }
            },
            Ut = {
                resize: function() {
                    if (!this.disabled) {
                        var t, e, i = this.options,
                            n = this.container,
                            a = this.containerData,
                            o = n.offsetWidth / a.width,
                            r = n.offsetHeight / a.height,
                            s = Math.abs(o - 1) > Math.abs(r - 1) ? o : r;
                        1 !== s && (i.restore && (t = this.getCanvasData(), e = this.getCropBoxData()), this.render(), i.restore && (this.setCanvasData(pt(t, (function(e, i) {
                            t[i] = e * s
                        }))), this.setCropBoxData(pt(e, (function(t, i) {
                            e[i] = t * s
                        })))))
                    }
                },
                dblclick: function() {
                    var t, e;
                    this.disabled || this.options.dragMode === L || this.setDragMode((t = this.dragBox, e = D, (t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1) ? R : I))
                },
                wheel: function(t) {
                    var e = this,
                        i = Number(this.options.wheelZoomRatio) || .1,
                        n = 1;
                    this.disabled || (t.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout((function() {
                        e.wheeling = !1
                    }), 50), t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1), this.zoom(-n * i, t)))
                },
                cropStart: function(t) {
                    var e = t.buttons,
                        i = t.button;
                    if (!(this.disabled || ("mousedown" === t.type || "pointerdown" === t.type && "mouse" === t.pointerType) && (it(e) && 1 !== e || it(i) && 0 !== i || t.ctrlKey))) {
                        var n, a = this.options,
                            o = this.pointers;
                        t.changedTouches ? pt(t.changedTouches, (function(t) {
                            o[t.identifier] = Rt(t)
                        })) : o[t.pointerId || 0] = Rt(t), n = Object.keys(o).length > 1 && a.zoomable && a.zoomOnTouch ? f : Ct(t.target, E), Q.test(n) && !1 !== zt(this.element, _, {
                            originalEvent: t,
                            action: n
                        }) && (t.preventDefault(), this.action = n, this.cropping = !1, n === m && (this.cropping = !0, vt(this.dragBox, O)))
                    }
                },
                cropMove: function(t) {
                    var e = this.action;
                    if (!this.disabled && e) {
                        var i = this.pointers;
                        t.preventDefault(), !1 !== zt(this.element, N, {
                            originalEvent: t,
                            action: e
                        }) && (t.changedTouches ? pt(t.changedTouches, (function(t) {
                            dt(i[t.identifier] || {}, Rt(t, !0))
                        })) : dt(i[t.pointerId || 0] || {}, Rt(t, !0)), this.change(t))
                    }
                },
                cropEnd: function(t) {
                    if (!this.disabled) {
                        var e = this.action,
                            i = this.pointers;
                        t.changedTouches ? pt(t.changedTouches, (function(t) {
                            delete i[t.identifier]
                        })) : delete i[t.pointerId || 0], e && (t.preventDefault(), Object.keys(i).length || (this.action = ""), this.cropping && (this.cropping = !1, wt(this.dragBox, O, this.cropped && this.options.modal)), zt(this.element, H, {
                            originalEvent: t,
                            action: e
                        }))
                    }
                }
            },
            qt = {
                change: function(t) {
                    var i, n = this.options,
                        a = this.canvasData,
                        o = this.containerData,
                        r = this.cropBoxData,
                        s = this.pointers,
                        h = this.action,
                        c = n.aspectRatio,
                        l = r.left,
                        p = r.top,
                        d = r.width,
                        D = r.height,
                        A = l + d,
                        z = p + D,
                        T = 0,
                        O = 0,
                        j = o.width,
                        E = o.height,
                        S = !0;
                    !c && t.shiftKey && (c = d && D ? d / D : 1), this.limited && (T = r.minLeft, O = r.minTop, j = T + Math.min(o.width, a.width, a.left + a.width), E = O + Math.min(o.height, a.height, a.top + a.height));
                    var I = s[Object.keys(s)[0]],
                        R = {
                            x: I.endX - I.startX,
                            y: I.endY - I.startY
                        },
                        L = function(t) {
                            switch (t) {
                                case v:
                                    A + R.x > j && (R.x = j - A);
                                    break;
                                case b:
                                    l + R.x < T && (R.x = T - l);
                                    break;
                                case x:
                                    p + R.y < O && (R.y = O - p);
                                    break;
                                case w:
                                    z + R.y > E && (R.y = E - z)
                            }
                        };
                    switch (h) {
                        case u:
                            l += R.x, p += R.y;
                            break;
                        case v:
                            if (R.x >= 0 && (A >= j || c && (p <= O || z >= E))) {
                                S = !1;
                                break
                            }
                            L(v), (d += R.x) < 0 && (h = b, l -= d = -d), c && (D = d / c, p += (r.height - D) / 2);
                            break;
                        case x:
                            if (R.y <= 0 && (p <= O || c && (l <= T || A >= j))) {
                                S = !1;
                                break
                            }
                            L(x), D -= R.y, p += R.y, D < 0 && (h = w, p -= D = -D), c && (d = D * c, l += (r.width - d) / 2);
                            break;
                        case b:
                            if (R.x <= 0 && (l <= T || c && (p <= O || z >= E))) {
                                S = !1;
                                break
                            }
                            L(b), d -= R.x, l += R.x, d < 0 && (h = v, l -= d = -d), c && (D = d / c, p += (r.height - D) / 2);
                            break;
                        case w:
                            if (R.y >= 0 && (z >= E || c && (l <= T || A >= j))) {
                                S = !1;
                                break
                            }
                            L(w), (D += R.y) < 0 && (h = x, p -= D = -D), c && (d = D * c, l += (r.width - d) / 2);
                            break;
                        case y:
                            if (c) {
                                if (R.y <= 0 && (p <= O || A >= j)) {
                                    S = !1;
                                    break
                                }
                                L(x), D -= R.y, p += R.y, d = D * c
                            } else L(x), L(v), R.x >= 0 ? A < j ? d += R.x : R.y <= 0 && p <= O && (S = !1) : d += R.x, R.y <= 0 ? p > O && (D -= R.y, p += R.y) : (D -= R.y, p += R.y);
                            d < 0 && D < 0 ? (h = k, p -= D = -D, l -= d = -d) : d < 0 ? (h = C, l -= d = -d) : D < 0 && (h = M, p -= D = -D);
                            break;
                        case C:
                            if (c) {
                                if (R.y <= 0 && (p <= O || l <= T)) {
                                    S = !1;
                                    break
                                }
                                L(x), D -= R.y, p += R.y, d = D * c, l += r.width - d
                            } else L(x), L(b), R.x <= 0 ? l > T ? (d -= R.x, l += R.x) : R.y <= 0 && p <= O && (S = !1) : (d -= R.x, l += R.x), R.y <= 0 ? p > O && (D -= R.y, p += R.y) : (D -= R.y, p += R.y);
                            d < 0 && D < 0 ? (h = M, p -= D = -D, l -= d = -d) : d < 0 ? (h = y, l -= d = -d) : D < 0 && (h = k, p -= D = -D);
                            break;
                        case k:
                            if (c) {
                                if (R.x <= 0 && (l <= T || z >= E)) {
                                    S = !1;
                                    break
                                }
                                L(b), d -= R.x, l += R.x, D = d / c
                            } else L(w), L(b), R.x <= 0 ? l > T ? (d -= R.x, l += R.x) : R.y >= 0 && z >= E && (S = !1) : (d -= R.x, l += R.x), R.y >= 0 ? z < E && (D += R.y) : D += R.y;
                            d < 0 && D < 0 ? (h = y, p -= D = -D, l -= d = -d) : d < 0 ? (h = M, l -= d = -d) : D < 0 && (h = C, p -= D = -D);
                            break;
                        case M:
                            if (c) {
                                if (R.x >= 0 && (A >= j || z >= E)) {
                                    S = !1;
                                    break
                                }
                                L(v), D = (d += R.x) / c
                            } else L(w), L(v), R.x >= 0 ? A < j ? d += R.x : R.y >= 0 && z >= E && (S = !1) : d += R.x, R.y >= 0 ? z < E && (D += R.y) : D += R.y;
                            d < 0 && D < 0 ? (h = C, p -= D = -D, l -= d = -d) : d < 0 ? (h = k, l -= d = -d) : D < 0 && (h = y, p -= D = -D);
                            break;
                        case g:
                            this.move(R.x, R.y), S = !1;
                            break;
                        case f:
                            this.zoom(function(t) {
                                var i = e({}, t),
                                    n = 0;
                                return pt(t, (function(t, e) {
                                    delete i[e], pt(i, (function(e) {
                                        var i = Math.abs(t.startX - e.startX),
                                            a = Math.abs(t.startY - e.startY),
                                            o = Math.abs(t.endX - e.endX),
                                            r = Math.abs(t.endY - e.endY),
                                            s = Math.sqrt(i * i + a * a),
                                            h = (Math.sqrt(o * o + r * r) - s) / s;
                                        Math.abs(h) > Math.abs(n) && (n = h)
                                    }))
                                })), n
                            }(s), t), S = !1;
                            break;
                        case m:
                            if (!R.x || !R.y) {
                                S = !1;
                                break
                            }
                            i = Tt(this.cropper), l = I.startX - i.left, p = I.startY - i.top, d = r.minWidth, D = r.minHeight, R.x > 0 ? h = R.y > 0 ? M : y : R.x < 0 && (l -= d, h = R.y > 0 ? k : C), R.y < 0 && (p -= D), this.cropped || (bt(this.cropBox, B), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
                    }
                    S && (r.width = d, r.height = D, r.left = l, r.top = p, this.action = h, this.renderCropBox()), pt(s, (function(t) {
                        t.startX = t.endX, t.startY = t.endY
                    }))
                }
            },
            Vt = {
                crop: function() {
                    return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && vt(this.dragBox, O), bt(this.cropBox, B), this.setCropBoxData(this.initialCropBoxData)), this
                },
                reset: function() {
                    return this.ready && !this.disabled && (this.imageData = dt({}, this.initialImageData), this.canvasData = dt({}, this.initialCanvasData), this.cropBoxData = dt({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
                },
                clear: function() {
                    return this.cropped && !this.disabled && (dt(this.cropBoxData, {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0
                    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), bt(this.dragBox, O), vt(this.cropBox, B)), this
                },
                replace: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return !this.disabled && t && (this.isImg && (this.element.src = t), e ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, pt(this.previews, (function(e) {
                        e.getElementsByTagName("img")[0].src = t
                    })))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this
                },
                enable: function() {
                    return this.ready && this.disabled && (this.disabled = !1, bt(this.cropper, A)), this
                },
                disable: function() {
                    return this.ready && !this.disabled && (this.disabled = !0, vt(this.cropper, A)), this
                },
                destroy: function() {
                    var t = this.element;
                    return t[d] ? (t[d] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this
                },
                move: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        i = this.canvasData,
                        n = i.left,
                        a = i.top;
                    return this.moveTo(at(t) ? t : n + Number(t), at(e) ? e : a + Number(e))
                },
                moveTo: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        i = this.canvasData,
                        n = !1;
                    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.movable && (it(t) && (i.left = t, n = !0), it(e) && (i.top = e, n = !0), n && this.renderCanvas(!0)), this
                },
                zoom: function(t, e) {
                    var i = this.canvasData;
                    return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t, this.zoomTo(i.width * t / i.naturalWidth, null, e)
                },
                zoomTo: function(t, e, i) {
                    var n = this.options,
                        a = this.canvasData,
                        o = a.width,
                        r = a.height,
                        s = a.naturalWidth,
                        h = a.naturalHeight;
                    if ((t = Number(t)) >= 0 && this.ready && !this.disabled && n.zoomable) {
                        var c = s * t,
                            l = h * t;
                        if (!1 === zt(this.element, F, {
                                ratio: t,
                                oldRatio: o / s,
                                originalEvent: i
                            })) return this;
                        if (i) {
                            var p = this.pointers,
                                d = Tt(this.cropper),
                                u = p && Object.keys(p).length ? function(t) {
                                    var e = 0,
                                        i = 0,
                                        n = 0;
                                    return pt(t, (function(t) {
                                        var a = t.startX,
                                            o = t.startY;
                                        e += a, i += o, n += 1
                                    })), {
                                        pageX: e /= n,
                                        pageY: i /= n
                                    }
                                }(p) : {
                                    pageX: i.pageX,
                                    pageY: i.pageY
                                };
                            a.left -= (c - o) * ((u.pageX - d.left - a.left) / o), a.top -= (l - r) * ((u.pageY - d.top - a.top) / r)
                        } else st(e) && it(e.x) && it(e.y) ? (a.left -= (c - o) * ((e.x - a.left) / o), a.top -= (l - r) * ((e.y - a.top) / r)) : (a.left -= (c - o) / 2, a.top -= (l - r) / 2);
                        a.width = c, a.height = l, this.renderCanvas(!0)
                    }
                    return this
                },
                rotate: function(t) {
                    return this.rotateTo((this.imageData.rotate || 0) + Number(t))
                },
                rotateTo: function(t) {
                    return it(t = Number(t)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this
                },
                scaleX: function(t) {
                    var e = this.imageData.scaleY;
                    return this.scale(t, it(e) ? e : 1)
                },
                scaleY: function(t) {
                    var e = this.imageData.scaleX;
                    return this.scale(it(e) ? e : 1, t)
                },
                scale: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        i = this.imageData,
                        n = !1;
                    return t = Number(t), e = Number(e), this.ready && !this.disabled && this.options.scalable && (it(t) && (i.scaleX = t, n = !0), it(e) && (i.scaleY = e, n = !0), n && this.renderCanvas(!0, !0)), this
                },
                getData: function() {
                    var t, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        i = this.options,
                        n = this.imageData,
                        a = this.canvasData,
                        o = this.cropBoxData;
                    if (this.ready && this.cropped) {
                        t = {
                            x: o.left - a.left,
                            y: o.top - a.top,
                            width: o.width,
                            height: o.height
                        };
                        var r = n.width / n.naturalWidth;
                        if (pt(t, (function(e, i) {
                                t[i] = e / r
                            })), e) {
                            var s = Math.round(t.y + t.height),
                                h = Math.round(t.x + t.width);
                            t.x = Math.round(t.x), t.y = Math.round(t.y), t.width = h - t.x, t.height = s - t.y
                        }
                    } else t = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    };
                    return i.rotatable && (t.rotate = n.rotate || 0), i.scalable && (t.scaleX = n.scaleX || 1, t.scaleY = n.scaleY || 1), t
                },
                setData: function(t) {
                    var e = this.options,
                        i = this.imageData,
                        n = this.canvasData,
                        a = {};
                    if (this.ready && !this.disabled && st(t)) {
                        var o = !1;
                        e.rotatable && it(t.rotate) && t.rotate !== i.rotate && (i.rotate = t.rotate, o = !0), e.scalable && (it(t.scaleX) && t.scaleX !== i.scaleX && (i.scaleX = t.scaleX, o = !0), it(t.scaleY) && t.scaleY !== i.scaleY && (i.scaleY = t.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
                        var r = i.width / i.naturalWidth;
                        it(t.x) && (a.left = t.x * r + n.left), it(t.y) && (a.top = t.y * r + n.top), it(t.width) && (a.width = t.width * r), it(t.height) && (a.height = t.height * r), this.setCropBoxData(a)
                    }
                    return this
                },
                getContainerData: function() {
                    return this.ready ? dt({}, this.containerData) : {}
                },
                getImageData: function() {
                    return this.sized ? dt({}, this.imageData) : {}
                },
                getCanvasData: function() {
                    var t = this.canvasData,
                        e = {};
                    return this.ready && pt(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], (function(i) {
                        e[i] = t[i]
                    })), e
                },
                setCanvasData: function(t) {
                    var e = this.canvasData,
                        i = e.aspectRatio;
                    return this.ready && !this.disabled && st(t) && (it(t.left) && (e.left = t.left), it(t.top) && (e.top = t.top), it(t.width) ? (e.width = t.width, e.height = t.width / i) : it(t.height) && (e.height = t.height, e.width = t.height * i), this.renderCanvas(!0)), this
                },
                getCropBoxData: function() {
                    var t, e = this.cropBoxData;
                    return this.ready && this.cropped && (t = {
                        left: e.left,
                        top: e.top,
                        width: e.width,
                        height: e.height
                    }), t || {}
                },
                setCropBoxData: function(t) {
                    var e, i, n = this.cropBoxData,
                        a = this.options.aspectRatio;
                    return this.ready && this.cropped && !this.disabled && st(t) && (it(t.left) && (n.left = t.left), it(t.top) && (n.top = t.top), it(t.width) && t.width !== n.width && (e = !0, n.width = t.width), it(t.height) && t.height !== n.height && (i = !0, n.height = t.height), a && (e ? n.height = n.width / a : i && (n.width = n.height * a)), this.renderCropBox()), this
                },
                getCroppedCanvas: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!this.ready || !window.HTMLCanvasElement) return null;
                    var e = this.canvasData,
                        i = Wt(this.image, this.imageData, e, t);
                    if (!this.cropped) return i;
                    var n = this.getData(),
                        a = n.x,
                        o = n.y,
                        s = n.width,
                        h = n.height,
                        c = i.width / Math.floor(e.naturalWidth);
                    1 !== c && (a *= c, o *= c, s *= c, h *= c);
                    var l = s / h,
                        p = Lt({
                            aspectRatio: l,
                            width: t.maxWidth || 1 / 0,
                            height: t.maxHeight || 1 / 0
                        }),
                        d = Lt({
                            aspectRatio: l,
                            width: t.minWidth || 0,
                            height: t.minHeight || 0
                        }, "cover"),
                        u = Lt({
                            aspectRatio: l,
                            width: t.width || (1 !== c ? i.width : s),
                            height: t.height || (1 !== c ? i.height : h)
                        }),
                        m = u.width,
                        g = u.height;
                    m = Math.min(p.width, Math.max(d.width, m)), g = Math.min(p.height, Math.max(d.height, g));
                    var f = document.createElement("canvas"),
                        v = f.getContext("2d");
                    f.width = mt(m), f.height = mt(g), v.fillStyle = t.fillColor || "transparent", v.fillRect(0, 0, m, g);
                    var b = t.imageSmoothingEnabled,
                        w = void 0 === b || b,
                        x = t.imageSmoothingQuality;
                    v.imageSmoothingEnabled = w, x && (v.imageSmoothingQuality = x);
                    var y, C, M, k, D, A, B = i.width,
                        z = i.height,
                        T = a,
                        O = o;
                    T <= -s || T > B ? (T = 0, y = 0, M = 0, D = 0) : T <= 0 ? (M = -T, T = 0, D = y = Math.min(B, s + T)) : T <= B && (M = 0, D = y = Math.min(s, B - T)), y <= 0 || O <= -h || O > z ? (O = 0, C = 0, k = 0, A = 0) : O <= 0 ? (k = -O, O = 0, A = C = Math.min(z, h + O)) : O <= z && (k = 0, A = C = Math.min(h, z - O));
                    var j = [T, O, y, C];
                    if (D > 0 && A > 0) {
                        var E = m / s;
                        j.push(M * E, k * E, D * E, A * E)
                    }
                    return v.drawImage.apply(v, [i].concat(r(j.map((function(t) {
                        return Math.floor(mt(t))
                    }))))), f
                },
                setAspectRatio: function(t) {
                    var e = this.options;
                    return this.disabled || at(t) || (e.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
                },
                setDragMode: function(t) {
                    var e = this.options,
                        i = this.dragBox,
                        n = this.face;
                    if (this.ready && !this.disabled) {
                        var a = t === I,
                            o = e.movable && t === R;
                        t = a || o ? t : L, e.dragMode = t, Mt(i, E, t), wt(i, D, a), wt(i, j, o), e.cropBoxMovable || (Mt(n, E, t), wt(n, D, a), wt(n, j, o))
                    }
                    return this
                }
            },
            $t = c.Cropper,
            Ft = function() {
                function t(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (n(this, t), !e || !J.test(e.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                    this.element = e, this.options = dt({}, tt, st(i) && i), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
                }
                return function(t, e, i) {
                    e && a(t.prototype, e), i && a(t, i)
                }(t, [{
                    key: "init",
                    value: function() {
                        var t, e = this.element,
                            i = e.tagName.toLowerCase();
                        if (!e[d]) {
                            if (e[d] = this, "img" === i) {
                                if (this.isImg = !0, t = e.getAttribute("src") || "", this.originalUrl = t, !t) return;
                                t = e.src
                            } else "canvas" === i && window.HTMLCanvasElement && (t = e.toDataURL());
                            this.load(t)
                        }
                    }
                }, {
                    key: "load",
                    value: function(t) {
                        var e = this;
                        if (t) {
                            this.url = t, this.imageData = {};
                            var i = this.element,
                                n = this.options;
                            if (n.rotatable || n.scalable || (n.checkOrientation = !1), n.checkOrientation && window.ArrayBuffer)
                                if (G.test(t)) K.test(t) ? this.read(function(t) {
                                    var e = t.replace(Nt, ""),
                                        i = atob(e),
                                        n = new ArrayBuffer(i.length),
                                        a = new Uint8Array(n);
                                    return pt(a, (function(t, e) {
                                        a[e] = i.charCodeAt(e)
                                    })), n
                                }(t)) : this.clone();
                                else {
                                    var a = new XMLHttpRequest,
                                        o = this.clone.bind(this);
                                    this.reloading = !0, this.xhr = a, a.onabort = o, a.onerror = o, a.ontimeout = o, a.onprogress = function() {
                                        a.getResponseHeader("content-type") !== Z && a.abort()
                                    }, a.onload = function() {
                                        e.read(a.response)
                                    }, a.onloadend = function() {
                                        e.reloading = !1, e.xhr = null
                                    }, n.checkCrossOrigin && Et(t) && i.crossOrigin && (t = St(t)), a.open("GET", t, !0), a.responseType = "arraybuffer", a.withCredentials = "use-credentials" === i.crossOrigin, a.send()
                                }
                            else this.clone()
                        }
                    }
                }, {
                    key: "read",
                    value: function(t) {
                        var e = this.options,
                            i = this.imageData,
                            n = _t(t),
                            a = 0,
                            o = 1,
                            r = 1;
                        if (n > 1) {
                            this.url = function(t, e) {
                                for (var i = [], n = new Uint8Array(t); n.length > 0;) i.push(Ht.apply(null, lt(n.subarray(0, 8192)))), n = n.subarray(8192);
                                return "data:".concat(e, ";base64,").concat(btoa(i.join("")))
                            }(t, Z);
                            var s = function(t) {
                                var e = 0,
                                    i = 1,
                                    n = 1;
                                switch (t) {
                                    case 2:
                                        i = -1;
                                        break;
                                    case 3:
                                        e = -180;
                                        break;
                                    case 4:
                                        n = -1;
                                        break;
                                    case 5:
                                        e = 90, n = -1;
                                        break;
                                    case 6:
                                        e = 90;
                                        break;
                                    case 7:
                                        e = 90, i = -1;
                                        break;
                                    case 8:
                                        e = -90
                                }
                                return {
                                    rotate: e,
                                    scaleX: i,
                                    scaleY: n
                                }
                            }(n);
                            a = s.rotate, o = s.scaleX, r = s.scaleY
                        }
                        e.rotatable && (i.rotate = a), e.scalable && (i.scaleX = o, i.scaleY = r), this.clone()
                    }
                }, {
                    key: "clone",
                    value: function() {
                        var t = this.element,
                            e = this.url,
                            i = t.crossOrigin,
                            n = e;
                        this.options.checkCrossOrigin && Et(e) && (i || (i = "anonymous"), n = St(e)), this.crossOrigin = i, this.crossOriginUrl = n;
                        var a = document.createElement("img");
                        i && (a.crossOrigin = i), a.src = n || e, a.alt = t.alt || "The image to crop", this.image = a, a.onload = this.start.bind(this), a.onerror = this.stop.bind(this), vt(a, z), t.parentNode.insertBefore(a, t.nextSibling)
                    }
                }, {
                    key: "start",
                    value: function() {
                        var t = this,
                            e = this.image;
                        e.onload = null, e.onerror = null, this.sizing = !0;
                        var i = c.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(c.navigator.userAgent),
                            n = function(e, i) {
                                dt(t.imageData, {
                                    naturalWidth: e,
                                    naturalHeight: i,
                                    aspectRatio: e / i
                                }), t.initialImageData = dt({}, t.imageData), t.sizing = !1, t.sized = !0, t.build()
                            };
                        if (!e.naturalWidth || i) {
                            var a = document.createElement("img"),
                                o = document.body || document.documentElement;
                            this.sizingImage = a, a.onload = function() {
                                n(a.width, a.height), i || o.removeChild(a)
                            }, a.src = e.src, i || (a.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", o.appendChild(a))
                        } else n(e.naturalWidth, e.naturalHeight)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var t = this.image;
                        t.onload = null, t.onerror = null, t.parentNode.removeChild(t), this.image = null
                    }
                }, {
                    key: "build",
                    value: function() {
                        if (this.sized && !this.ready) {
                            var t = this.element,
                                e = this.options,
                                i = this.image,
                                n = t.parentNode,
                                a = document.createElement("div");
                            a.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
                            var o = a.querySelector(".".concat(d, "-container")),
                                r = o.querySelector(".".concat(d, "-canvas")),
                                s = o.querySelector(".".concat(d, "-drag-box")),
                                h = o.querySelector(".".concat(d, "-crop-box")),
                                c = h.querySelector(".".concat(d, "-face"));
                            this.container = n, this.cropper = o, this.canvas = r, this.dragBox = s, this.cropBox = h, this.viewBox = o.querySelector(".".concat(d, "-view-box")), this.face = c, r.appendChild(i), vt(t, B), n.insertBefore(o, t.nextSibling), this.isImg || bt(i, z), this.initPreview(), this.bind(), e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN, e.aspectRatio = Math.max(0, e.aspectRatio) || NaN, e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0, vt(h, B), e.guides || vt(h.getElementsByClassName("".concat(d, "-dashed")), B), e.center || vt(h.getElementsByClassName("".concat(d, "-center")), B), e.background && vt(o, "".concat(d, "-bg")), e.highlight || vt(c, T), e.cropBoxMovable && (vt(c, j), Mt(c, E, u)), e.cropBoxResizable || (vt(h.getElementsByClassName("".concat(d, "-line")), B), vt(h.getElementsByClassName("".concat(d, "-point")), B)), this.render(), this.ready = !0, this.setDragMode(e.dragMode), e.autoCrop && this.crop(), this.setData(e.data), ht(e.ready) && Bt(t, q, e.ready, {
                                once: !0
                            }), zt(t, q)
                        }
                    }
                }, {
                    key: "unbuild",
                    value: function() {
                        this.ready && (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), bt(this.element, B))
                    }
                }, {
                    key: "uncreate",
                    value: function() {
                        this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop()
                    }
                }], [{
                    key: "noConflict",
                    value: function() {
                        return window.Cropper = $t, t
                    }
                }, {
                    key: "setDefaults",
                    value: function(t) {
                        dt(tt, st(t) && t)
                    }
                }]), t
            }();
        return dt(Ft.prototype, Yt, Xt, Pt, Ut, qt, Vt), Ft
    }(), et.exports);

function at(t, e) {
    void 0 === e && (e = {});
    var i = e.insertAt;
    if (t && "undefined" != typeof document) {
        var n = document.head || document.getElementsByTagName("head")[0],
            a = document.createElement("style");
        a.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
    }
}
at("/*!\n * Cropper.js v1.5.12\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2021-06-12T08:00:11.623Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n");
var ot = null,
    rt = t({
        name: "VuePictureCropper",
        props: {
            boxStyle: {
                type: Object,
                required: !1,
                default: function() {
                    return {}
                }
            },
            img: String,
            options: {
                type: Object,
                required: !1,
                default: function() {
                    return {}
                }
            },
            presetMode: {
                type: Object,
                required: !1,
                default: function() {
                    return {}
                }
            }
        },
        data: function() {
            return {
                cropper: null,
                mimeType: "",
                randomId: ""
            }
        },
        watch: {
            img: function() {
                if (this.cropper) try {
                    this.cropper.replace(this.img), this.getImgSuffix(), this.updateInstance()
                } catch (it) {
                    console.log(it)
                } else this.init()
            }
        },
        beforeUnmount: function() {
            this.cropper && this.cropper.destroy()
        },
        mounted: function() {
            this.init()
        },
        methods: {
            init: function() {
                return J(this, void 0, void 0, (function() {
                    var t, e = this;
                    return tt(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.$nextTick()];
                            case 1:
                                return i.sent(), this.randomId = function(t) {
                                    void 0 === t && (t = 10);
                                    for (var e = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz012345678", i = e.length, n = "", a = 0; a < t; a++) n += e.charAt(Math.floor(Math.random() * i));
                                    return n
                                }(10), t = window.setInterval((function() {
                                    var i = e.randomId ? document.querySelector("#vpc-img-" + e.randomId) : document.querySelector(".vue--picture-cropper__img");
                                    if (i) try {
                                        e.cropper = new nt(i, e.options), window.clearInterval(t), e.updateInstance(), e.getImgSuffix(), i.addEventListener("ready", (function() {
                                            e.usePresetMode()
                                        }))
                                    } catch (n) {
                                        console.log(n)
                                    }
                                }), 10), [2]
                        }
                    }))
                }))
            },
            usePresetMode: function() {
                if ("[object Object]" === Object.prototype.toString.call(this.presetMode)) {
                    var t = this.presetMode,
                        e = t.mode,
                        i = t.width,
                        n = t.height;
                    switch (e) {
                        case "fixedSize":
                        case "round":
                            this.cropper.setCropBoxData({
                                width: i,
                                height: n
                            })
                    }
                }
            },
            updateInstance: function() {
                (ot = this.cropper).getDataURL = this.getDataURL, ot.getBlob = this.getBlob, ot.getFile = this.getFile
            },
            updateResultOptions: function(t) {
                if (void 0 === t && (t = {}), "[object Object]" === Object.prototype.toString.call(this.presetMode)) {
                    var e = this.presetMode,
                        i = e.mode,
                        n = e.width,
                        a = e.height;
                    switch (i) {
                        case "fixedSize":
                        case "round":
                            t.width = n, t.height = a
                    }
                    return t
                }
            },
            getImgSuffix: function() {
                if ("round" === this.presetMode.mode) this.mimeType = "image/png";
                else {
                    var t = this.img.split(",")[0].replace(/data:(.*);base64/, "$1");
                    this.mimeType = t
                }
            },
            getDataURL: function(t) {
                void 0 === t && (t = {}), t = this.updateResultOptions(t);
                try {
                    var e = this.cropper.getCroppedCanvas(t);
                    return "round" === this.presetMode.mode && (e = this.getRoundedCanvas(e)), e.toDataURL(this.mimeType)
                } catch (i) {
                    return ""
                }
            },
            getBlob: function(t) {
                return void 0 === t && (t = {}), J(this, void 0, void 0, (function() {
                    var e = this;
                    return tt(this, (function(i) {
                        return t = this.updateResultOptions(t), [2, new Promise((function(i) {
                            try {
                                var n = e.cropper.getCroppedCanvas(t);
                                "round" === e.presetMode.mode && (n = e.getRoundedCanvas(n)), n.toBlob((function(t) {
                                    i(t)
                                }), e.mimeType)
                            } catch (a) {
                                i(null)
                            }
                        }))]
                    }))
                }))
            },
            getFile: function(t) {
                return void 0 === t && (t = {}), J(this, void 0, void 0, (function() {
                    var e = this;
                    return tt(this, (function(i) {
                        return [2, new Promise((function(i) {
                            J(e, void 0, void 0, (function() {
                                var e, n, a, o, r;
                                return tt(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return e = t.fileName, n = this.mimeType.replace(/image\//, ""), a = e ? e + "." + n : "cropped-" + Date.now() + "." + n, [4, this.getBlob(t)];
                                        case 1:
                                            return o = s.sent(), r = new File([o], a, {
                                                type: this.mimeType
                                            }), i(r), [2]
                                    }
                                }))
                            }))
                        }))]
                    }))
                }))
            },
            getRoundedCanvas: function(t) {
                var e = document.createElement("canvas"),
                    i = e.getContext("2d"),
                    n = t.width,
                    a = t.height;
                return e.width = n, e.height = a, i.imageSmoothingEnabled = !0, i.drawImage(t, 0, 0, n, a), i.globalCompositeOperation = "destination-in", i.beginPath(), i.arc(n / 2, a / 2, Math.min(n, a) / 2, 0, 2 * Math.PI, !0), i.fill(), e
            }
        }
    });
at("\n.vue--picture-cropper__wrap {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n.vue--picture-cropper__img {\n  display: block;\n  width: auto;\n  height: auto;\n  max-width: 100%;\n  max-height: 100%;\n}\n.vue--picture-cropper__wrap-round .cropper-view-box,\n.vue--picture-cropper__wrap-round .cropper-face {\n  border-radius: 50%;\n}\n"), rt.render = function(t, a, o, r, s, h) {
    return e(), i("div", {
        id: `vpc-wrap-${t.randomId}`,
        class: ["vue--picture-cropper__wrap", {
            "vue--picture-cropper__wrap-round": "round" === t.presetMode.mode
        }],
        style: t.boxStyle
    }, [n("img", {
        class: "vue--picture-cropper__img",
        src: t.img,
        id: `vpc-img-${t.randomId}`
    }, null, 8, ["src", "id"])], 14, ["id"])
}, rt.__file = "src/vue-picture-cropper.vue";
const st = t => (u("data-v-1e150512"), t = t(), m(), t),
    ht = st((() => s("h2", {
        class: "mb20"
    }, "上传图标", -1))),
    ct = {
        class: "d-row",
        gutter: 30
    },
    lt = {
        class: "d-col-12"
    },
    pt = {
        style: {
            width: "200px",
            height: "200px"
        }
    },
    dt = {
        class: "d-flex-between f16 mt10 d-sub"
    },
    ut = {
        class: "d-pointer"
    },
    mt = st((() => s("li", {
        class: "d-col-10"
    }, [s("p", {
        class: "d-main mb10 mt10"
    }, "预览"), s("div", {
        id: "upload-icon-preview",
        class: "d-hidden upload-icon-preview"
    }), g(' <p class="mt10">\r\n                <d-color title="图标颜色" v-model="addForm.backgroundColor"></d-color>\r\n      </p>')], -1))),
    gt = {
        class: "mt50 ac"
    },
    ft = a({
        __name: "UploadIcon",
        props: {
            modelValue: Boolean,
            option: Object,
            addForm: Object
        },
        setup(t) {
            const i = t,
                a = o(1),
                u = t => {
                    "rotate" == t ? ot.rotate(45) : ot.scale(t.toFixed(1))
                },
                m = async () => {
                    let t = await ot.getBlob();
                    i.option.img = "", i.option.base64 = ot.getDataURL(), i.option.bolb = t
                };
            return (t, o) => (e(), r(d, null, [ht, s("ul", ct, [s("li", lt, [s("div", pt, [n(c(rt), h({
                ref: "refCropper",
                options: {
                    viewMode: 3,
                    dragMode: "move",
                    aspectRatio: 1,
                    preview: "#upload-icon-preview"
                },
                presetMode: {
                    mode: "fixedSize",
                    width: 300,
                    height: 300,
                    imageSmoothingQuality: "high"
                }
            }, i.option), null, 16), s("div", dt, [s("p", ut, [n(c(R), {
                size: 18,
                onClick: o[0] || (o[0] = t => u("rotate"))
            }, {
                default: l((() => [n(c(I))])),
                _: 1
            })]), s("p", null, [n(c(R), {
                size: 18,
                onClick: o[1] || (o[1] = t => u(a.value += .1)),
                class: "d-pointer"
            }, {
                default: l((() => [n(c(F))])),
                _: 1
            }), n(c(R), {
                size: 18,
                onClick: o[2] || (o[2] = t => u(a.value <= .1 ? .1 : a.value -= .1)),
                class: "d-pointer ml10"
            }, {
                default: l((() => [n(c(K))])),
                _: 1
            })])])])]), mt]), s("div", gt, [n(c(L), {
                size: "default",
                style: {
                    width: "100px"
                },
                onClick: o[3] || (o[3] = t => i.option.img = "")
            }, {
                default: l((() => [p("取 消")])),
                _: 1
            }), n(c(L), {
                type: "primary",
                size: "default",
                class: "ml10",
                style: {
                    width: "100px"
                },
                onClick: m
            }, {
                default: l((() => [p("确 定")])),
                _: 1
            })])], 64))
        }
    }, [
        ["__scopeId", "data-v-1e150512"],
        ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/addApp/UploadIcon.vue"]
    ]),
    vt = {
        class: "app-icon-wrap add-icon-custom ml10 mr10",
        style: ""
    },
    bt = {
        key: 0
    },
    wt = {
        key: 0,
        class: "d-sub f12"
    },
    xt = {
        class: "d-col-24"
    },
    yt = {
        style: {
            "margin-left": "66px"
        }
    },
    Ct = ["src"],
    Mt = {
        style: {
            "font-size": "4em",
            border: "1px solid rgba(var(--alpha-color), 0.1)"
        },
        class: "icon-preview-body"
    },
    kt = ["onClick"],
    Dt = ["src"],
    At = {
        class: "icon-preview-body",
        style: {
            "background-color": "transparent"
        }
    },
    Bt = {
        key: 0,
        class: "d-flex-center",
        style: {
            width: "var(--icon-size)",
            height: "var(--icon-size)"
        }
    },
    zt = ["src"],
    Tt = {
        name: "scutomAdd"
    },
    Ot = Object.assign(Tt, {
        props: {
            size: String,
            loading: !1,
            type: {
                type: String,
                default: "add"
            },
            data: {
                type: Object,
                default: {}
            }
        },
        emits: ["addCustomIcon"],
        setup(t, {
            emit: a
        }) {
            const o = t,
                {
                    t: h
                } = W(),
                u = "image/gif, image/jpeg, image/jfif, image/jpg, image/png, image/pjpeg, image/pjp, image/webp,image/svg+xml",
                m = f({
                    id: "",
                    url: "",
                    name: "",
                    src: "",
                    type: "text",
                    iconText: "A",
                    backgroundColor: v()
                }),
                I = f({
                    icons: [],
                    activeIndex: 0,
                    upLoading: !1,
                    isGetIconSuccess: ""
                }),
                q = f({
                    img: "",
                    bolb: "",
                    base64: ""
                });

            function V() {
                m.name = "", m.iconText = "", I.icons = []
            }

            function $() {
                if ("edit" == o.type) {
                    for (let t in m) m[t] = "backgroundColor" == t ? o.data[t] || v() : o.data[t] || "";
                    "icon" == o.data.type && (I.activeIndex = "edit")
                } else {
                    for (let t in m) m[t] = "";
                    I.activeIndex = 0, m.type = "text", m.iconText = "A", I.icons = []
                }
                for (let t in q) q[t] = ""
            }

            function F() {
                m.url.length < 3 || (V(), I.loading = !0, B({
                    url: m.url
                }).then((t => {
                    let e = t.data || {};
                    m.backgroundColor = e.backgroundColor || v(), e.src && (1 == e.type ? (I.icons = [e.src], I.activeIndex = 1, m.type = "icon", m.src = e.imgSrc || e.src) : (I.activeIndex = 0, I.icons = e.icon || []), e.name && (m.name = e.name), e.name && (m.iconText = e.name.substring(0, 3)))
                })).catch((() => {
                    V()
                })).finally((() => {
                    I.loading = !1
                })))
            }
            $();
            const Z = Y((() => {
                F()
            }), 550);

            function Q(t, e) {
                0 == e ? (m.type = "text", m.src = "") : (m.type = "icon", m.src = t), I.activeIndex = e
            }
            async function G(t) {
                if (m.url && m.name)
                    if (m.url.includes(":") || m.url.includes("//") || (m.url = `http://${m.url}`), "up" == I.activeIndex) {
                        if (I.upLoading = !0, !q.bolb) return void P.warning("请上传图片");
                        let e = q.bolb.type.split("/").pop();
                        "svg+xml" == e && (e = "svg");
                        let i = `user-website-icon/${M().format("YYYYMMDD")}/${k()}.${e}`;
                        "edit" == o.type && o.data.src && o.data.src.includes("user_") && o.data.src.replace("https://files.codelife.cc/", ""), A.postObject(i, q.bolb, {
                            onSuccess: e => {
                                m.src = `https://files.codelife.cc/${i}`, I.upLoading = !1, "edit" == o.type ? a("addCustomIcon", m) : _(U(m)), $(), N.visible = t
                            },
                            onError: () => {
                                I.upLoading = !1
                            }
                        })
                    } else "edit" == o.type ? a("addCustomIcon", m) : _(U(m)), $(), N.visible = t;
                else P.error("请输入链接地址和名称")
            }

            function K(t) {
                if (!u.includes(t.raw.type)) return void P.error("不支持的类型文件!");
                const e = new FileReader;
                e.readAsDataURL(t.raw), e.onload = () => {
                    if ("image/svg+xml" === t.raw.type) return q.img = "", q.base64 = e.result, void(q.bolb = t.raw);
                    q.img = e.result
                }
            }
            return (a, f) => {
                const v = b("d-text-icon"),
                    M = b("plus"),
                    k = b("d-button");
                return e(), r("div", vt, [n(c(S), {
                    model: m,
                    size: "default",
                    "label-width": "66px",
                    "label-position": "left"
                }, {
                    default: l((() => [q.img ? g("v-if", !0) : (e(), r("ul", bt, [n(c(E), {
                        style: "",
                        label: "地址",
                        prop: "url"
                    }, {
                        default: l((() => [g(' @clear="clearHandle"\r\n          clearable'), n(c(X), {
                            style: {
                                width: "420px"
                            },
                            autofocus: "",
                            onKeydown: c(Z),
                            modelValue: m.url,
                            "onUpdate:modelValue": f[0] || (f[0] = t => m.url = t),
                            "prefix-icon": c(z),
                            placeholder: "https://"
                        }, {
                            append: l((() => [n(c(L), {
                                onClick: F
                            }, {
                                default: l((() => [p("获取图标")])),
                                _: 1
                            })])),
                            _: 1
                        }, 8, ["onKeydown", "modelValue", "prefix-icon"]), I.loading ? (e(), r("span", wt, [n(c(R), {
                            class: "mr5"
                        }, {
                            default: l((() => [n(c(T), {
                                class: "rotating"
                            })])),
                            _: 1
                        }), p("正在自动获取网站信息 ")])) : g("v-if", !0)])),
                        _: 1
                    }), n(c(E), {
                        label: c(h)("name"),
                        prop: "name"
                    }, {
                        default: l((() => [n(c(X), {
                            style: {
                                width: "420px"
                            },
                            "prefix-icon": c(O),
                            modelValue: m.name,
                            "onUpdate:modelValue": f[1] || (f[1] = t => m.name = t),
                            maxlength: "30",
                            placeholder: "网站名称"
                        }, null, 8, ["prefix-icon", "modelValue"])])),
                        _: 1
                    }, 8, ["label"]), g(' <p class="f12 mt10 d-sub" style="line-height: 16px">\r\n          <el-icon class="d-middle mr5">\r\n            <info-filled />\r\n          </el-icon>输入网址后会自动获取网站名称和图标，如果获取的图标不符合建议给网站地址加上www.前缀获取，个别网站或国外网站可能会获取不成功\r\n        </p>'), g(' <el-form-item label="描述">\r\n                        <el-input\r\n                            :autosize="{ minRows: 2, maxRows: 6 }"\r\n                            type="textarea"\r\n                            maxlength="120"\r\n                            v-model="addForm.description"\r\n                            placeholder="网站描述"\r\n                        ></el-input>\r\n        </el-form-item>'), s("li", xt, [n(c(E), {
                        label: "图标颜色"
                    }, {
                        default: l((() => [n(D, {
                            style: {
                                width: "420px"
                            },
                            modelValue: m.backgroundColor,
                            "onUpdate:modelValue": f[2] || (f[2] = t => m.backgroundColor = t)
                        }, null, 8, ["modelValue"])])),
                        _: 1
                    }), 0 == I.activeIndex ? (e(), i(c(E), {
                        key: 0,
                        label: "图标文字"
                    }, {
                        default: l((() => [n(c(X), {
                            style: {
                                width: "200px"
                            },
                            "prefix-icon": c(O),
                            placeholder: "请输入图标文字",
                            maxlength: "6",
                            modelValue: m.iconText,
                            "onUpdate:modelValue": f[3] || (f[3] = t => m.iconText = t),
                            size: "default"
                        }, null, 8, ["prefix-icon", "modelValue"])])),
                        _: 1
                    })) : g("v-if", !0), s("div", yt, ["edit" == o.type && t.data.src ? (e(), r("div", {
                        key: 0,
                        onClick: f[4] || (f[4] = e => Q(t.data.src, "edit")),
                        class: w([{
                            active: "edit" == I.activeIndex
                        }, "icon-preview"])
                    }, [s("img", {
                        style: x(`background-color:${m.backgroundColor}`),
                        class: "icon-preview-body",
                        src: c(H)(t.data.src),
                        alt: ""
                    }, null, 12, Ct), p(" 当前图标 ")], 2)) : g("v-if", !0), s("div", {
                        class: w(["icon-preview", {
                            active: 0 == I.activeIndex
                        }]),
                        onClick: f[5] || (f[5] = t => Q("", 0))
                    }, [s("p", Mt, [n(v, {
                        bgColor: m.backgroundColor,
                        text: m.iconText
                    }, null, 8, ["bgColor", "text"])]), p(" 文字图标 ")], 2), (e(!0), r(d, null, y(I.icons, ((t, i) => (e(), r("div", {
                        onClick: e => Q(t, i + 1),
                        class: w([{
                            active: I.activeIndex == i + 1
                        }, "icon-preview"]),
                        key: i
                    }, [s("img", {
                        class: "icon-preview-body",
                        style: x(`background-color:${m.backgroundColor}`),
                        src: t,
                        alt: ""
                    }, null, 12, Dt), p(" " + C(t.includes("codelife.cc") ? "官方图标" : `图标${i+1}`), 1)], 10, kt)))), 128)), s("div", {
                        onClick: f[6] || (f[6] = t => Q(a.item, "up")),
                        class: w(["icon-preview", {
                            active: "up" == I.activeIndex
                        }])
                    }, [s("p", At, [n(c(j), {
                        "show-file-list": !1,
                        action: "",
                        "auto-upload": !1,
                        "on-change": K,
                        accept: u
                    }, {
                        default: l((() => [q.base64 ? (e(), r("img", {
                            key: 1,
                            style: x([`--bg-color:${m.backgroundColor}`, {
                                width: "var(--icon-size)",
                                height: "var(--icon-size)",
                                "object-fit": "cover"
                            }]),
                            src: q.base64,
                            alt: ""
                        }, null, 12, zt)) : (e(), r("span", Bt, [n(c(R), null, {
                            default: l((() => [n(M)])),
                            _: 1
                        })]))])),
                        _: 1
                    })]), p(" 上传 ")], 2)]), n(c(E), {
                        class: "mt20"
                    }, {
                        default: l((() => [n(k, {
                            size: "default",
                            class: "ml10 mr20",
                            style: {
                                width: "160px"
                            },
                            type: "primary",
                            loading: I.upLoading,
                            onClick: f[7] || (f[7] = t => G(!1))
                        }, {
                            default: l((() => [p("保 存")])),
                            _: 1
                        }, 8, ["loading"]), "edit" != o.type ? (e(), i(c(L), {
                            key: 0,
                            size: "default",
                            style: {
                                width: "160px"
                            },
                            loading: I.upLoading,
                            onClick: f[8] || (f[8] = t => G(!0))
                        }, {
                            default: l((() => [p("保存并继续")])),
                            _: 1
                        }, 8, ["loading"])) : g("v-if", !0)])),
                        _: 1
                    })])]))])),
                    _: 1
                }, 8, ["model"]), q.img ? (e(), i(ft, {
                    key: 0,
                    addForm: m,
                    option: q
                }, null, 8, ["addForm", "option"])) : g("v-if", !0)])
            }
        }
    }),
    jt = a(Ot, [
        ["__scopeId", "data-v-c8b6d015"],
        ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/addApp/CustomAdd.vue"]
    ]);
export {
    jt as C
};