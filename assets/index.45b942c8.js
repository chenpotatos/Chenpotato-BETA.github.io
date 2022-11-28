import {
    G as e,
    u as t,
    S as a,
    H as o,
    w as n,
    _ as s
} from "./el-select.e274bb48.js";
import {
    o as r
} from "./main.354a692e.js";
import "./indexdb.a2b9d265.js";
import {
    d as l
} from "./debounce.abbfdaeb.js";
import "./localforage.2a1ae675.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
import "./isObject.a01dee34.js";
const i = e(),
    c = t();
"https://translate.google.cn/#en/zh-CN/" === c.value.search.translate && (c.value.search.translate = "https://translate.volcengine.com/translate?"), setTimeout((() => {
    !async function() {
        s((() =>
                import ("./unionConfig.49171fa7.js")), ["./unionConfig.49171fa7.js", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js", "./itab.eac3c33d.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js"],
            import.meta.url).then((async e => {
            let t = await e.default();
            t && (t = t || [], t.forEach((e => {
                i.value.forEach((t => {
                    let a = (t.children || []).find((t => t && t.url && t.url.includes(e.key)));
                    a && (a.url = e.newUrl)
                }))
            })))
        }))
    }()
}), 100);
const u = () => {
    a((() => {
        ! function() {
            let e = i.value.findIndex((e => e.id == o.value));
            document.querySelectorAll(".app-icon-wrap .app-icon-item").forEach(((t, a) => {
                let o = function(e, t) {
                    let a = document.querySelector(".app-icon-wrap");
                    return a.offsetHeight * (e - t)
                }(a, e);
                const n = `translateY(${o}px) scale(1)`;
                t.style = `transform:${n}`
            }))
        }()
    }))
};
n((() => o.value), (e => {
    u()
}), {
    immediate: !0
});
const m = l((e => {
    u()
}), 200);
n((() => c.value.layout.view), (e => {
    "widget" === e && setTimeout((() => {
        u()
    }), 300)
})), r(window, "resize", m);
export {
    u as init
};