import {
    O as e,
    o as t,
    b as n,
    h as o,
    a as s,
    z as i,
    aV as l,
    w as a,
    c,
    R as u,
    t as r,
    m as d,
    s as m,
    U as k,
    L as y,
    i as p,
    D as v,
    C as x,
    x as f,
    K as h,
    q as w,
    j as g,
    n as b,
    e as C,
    aJ as j
} from "./el-select.e274bb48.js";
import {
    o as O,
    c as D,
    C as H,
    D as L,
    L as X
} from "./main.354a692e.js";
const Y = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 512 512"
    },
    $ = [o("path", {
        d: "M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "32"
    }, null, -1), o("path", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "32",
        d: "M336 64h112v112"
    }, null, -1), o("path", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "32",
        d: "M224 288L440 72"
    }, null, -1)],
    _ = e({
        name: "OpenOutline",
        render: function(e, o) {
            return t(), n("svg", Y, $)
        }
    }),
    q = ["id"],
    B = ["onClick"],
    E = {
        class: "item-icon d-icon"
    },
    M = {
        key: 0,
        class: "contextmenu-layout"
    },
    R = ["onClick"],
    S = {
        components: {
            CalendarEdit20Regular: H,
            Delete28Regular: L,
            OpenOutline: _,
            LayoutBoard: X
        }
    },
    W = s(Object.assign(S, {
        __name: "d-contextmenu",
        props: {
            data: {
                type: Array,
                default: () => []
            },
            active: String,
            uid: {
                required: !0,
                type: String
            }
        },
        emits: ["click"],
        setup(e, {
            expose: s,
            emit: H
        }) {
            const L = e,
                X = i({
                    visible: !1,
                    mouseX: 0,
                    mouseY: 0,
                    winWidth: 0,
                    winHeight: 0
                }),
                {
                    width: Y,
                    height: $
                } = l();

            function _(e) {
                X.visible && (X.visible = !1)
            }

            function S(e) {
                _(), H("click", e)
            }
            a((() => X.visible), (e => {
                e && O(document, "click", _)
            }));
            const W = c((() => ({
                left: X.mouseX + "px",
                top: X.mouseY + "px"
            })));
            return s({
                open: async e => {
                    const t = document.getElementById(`menu${L.uid}`);
                    document.querySelectorAll(".d-contextmenu.v-contextmenu").forEach((e => {
                        e.id !== `menu${L.uid}` ? e.style.display = "none" : e.style.display = "block"
                    })), X.visible = !0;
                    let n = e.clientX,
                        o = e.clientY;
                    n >= Y.value - t.offsetWidth && (n = Y.value - t.offsetWidth), o > $.value - t.offsetHeight && (o = $.value - t.offsetHeight), X.mouseX = n, X.mouseY = o
                },
                close: _
            }), u((() => {
                D(document, "click", _), D(document, "contextmenu", _)
            })), (s, i) => (t(), r(j, {
                to: "body"
            }, [d(o("ul", {
                style: b(C(W)),
                class: "d-contextmenu v-contextmenu",
                id: `menu${e.uid}`
            }, [k(s.$slots, "default", {}, (() => [(t(!0), n(h, null, y(e.data, (s => (t(), n("li", {
                onClick: e => S(s),
                class: p(["d-contextmenu-item", [{
                    hover: "layout" != s.key
                }]]),
                key: s.key
            }, [o("i", E, [(t(), r(v(e.active == s.key ? "check" : s.icon)))]), x(" " + f(s.name) + " ", 1), "layout" == s.key ? (t(), n("p", M, [(t(), n(h, null, y(["1x1", "1x2", "2x1", "2x2", "2x4"], (t => o("em", {
                onClick: w((e => S(t)), ["stop"]),
                class: p({
                    active: t == e.active
                }),
                key: t
            }, f(t), 11, R))), 64)), g(" <em @click.stop=\"click(layout.key)\" :class=\"{ active: layout.key == active }\"\r\n              v-for=\"layout of [{ n: '1x1', key: 'mini' }, { n: '2x2', key: 'small' }, { n: '2x4', key: 'medium' }]\"\r\n            :key=\"layout\">{{ layout.n }}</em>")])) : g("v-if", !0)], 10, B)))), 128))]))], 12, q), [
                [m, X.visible]
            ])]))
        }
    }), [
        ["__file", "D:/gitee/new-tab/src/components/d-contextmenu.vue"]
    ]);
export {
    W as
    default
};