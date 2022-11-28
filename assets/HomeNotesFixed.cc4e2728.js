import {
    a as e,
    l as s,
    az as t,
    o as i,
    b as o,
    j as a,
    h as n,
    K as l,
    L as d,
    x as r,
    m,
    s as c,
    e as p,
    k as f
} from "./el-select.e274bb48.js";
import {
    t as b
} from "./timeFormat.2ad7f500.js";
import {
    _ as j
} from "./PinOff16Regular.6c319d64.js";
import u from "./indexdb.a2b9d265.js";
import {
    SAVE_CONFIG as x
} from "./save_config.cbe33c4d.js";
import "./localforage.2a1ae675.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
import "./public-api.6a0debad.js";
import "./index.ed6e81ca.js";
import "./axios.91e25212.js";
import "./baseRequest.b881af11.js";
import "./version.8d34b113.js";
import "./website.2111b3d7.js";
import "./index.466a8266.js"; /* empty css                */
import "./index.176a125e.js";
import "./index.0e1148e8.js";
import "./style.d69d81d7.js";
import "./isObject.a01dee34.js";
import "./Close.c9346f3b.js";
import "./debounce.abbfdaeb.js";
const g = {
        class: "notes-fixed d-scrollbar-hide"
    },
    v = {
        class: "notes-fixed-content"
    },
    _ = {
        class: "b"
    },
    h = {
        class: "d-inline",
        style: {
            color: "rgba(var(--alpha-color),.3)"
        }
    },
    k = ["onClick"],
    y = {
        class: "d-icon f18"
    },
    w = e({
        __name: "HomeNotesFixed",
        setup: e => (u.get("notes").then((e => {
            let i = e || s.get("notes") || [];
            t.value = i.filter((e => e && e.fixed))
        })), (e, s) => (i(), o(l, null, [a(' <transition-group tag="ul" name="list" class="notes-fixed"> '), n("ul", g, [(i(!0), o(l, null, d(p(t), (e => (i(), o("li", {
            class: "notes-fixed-item zoomIn",
            key: e.id
        }, [n("div", v, [n("span", _, r(e.title), 1), n("span", null, r(e.content || ""), 1), m(n("span", null, "无内容", 512), [
            [c, !e.title && !e.content]
        ])]), n("time", h, r(p(b)(e.ut)), 1), n("span", {
            class: "notes-fixed-cancel",
            onClick: s => function(e) {
                let s = t.value.findIndex((s => s.id == e.id));
                t.value.splice(s, 1), u.get("notes").then((s => {
                    s.find((s => s.id == e.id)).fixed = !1, u.set("notes", s), x("notes")
                }))
            }(e),
            title: "取消固定"
        }, [n("i", y, [f(p(j))])], 8, k)])))), 128))]), a(" </transition-group> ")], 2112)))
    }, [
        ["__scopeId", "data-v-7c10f32b"],
        ["__file", "D:/gitee/new-tab/src/views/HomeNotesFixed.vue"]
    ]);
export {
    w as
    default
};