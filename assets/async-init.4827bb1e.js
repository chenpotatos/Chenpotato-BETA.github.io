import {
    u as e,
    _ as a,
    b2 as t,
    w as i
} from "./el-select.e274bb48.js";
import {
    p as l
} from "./version.8d34b113.js";
import {
    g as o,
    d as r,
    h as s
} from "./main.354a692e.js";
const n = e(),
    p = e();
(async () => {
    n.value.lang && "auto" != n.value.lang || (n.value.lang = window.navigator.language), a((() =>
            import ("./public-api.6a0debad.js").then((e => e.p))), ["./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js"],
        import.meta.url).then((async e => {
        e.getTodayBing().then((e => {
            0 == n.value.wallpaper.type && (n.value.wallpaper.src = e.fullSrc, n.value.wallpaper.thumb = e.fullSrc, n.value.wallpaper.name = e.enddate)
        }))
    })), a((() =>
            import ("./statistics.a738debd.js")), ["./statistics.a738debd.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./useSta.b98c784e.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js"],
        import.meta.url).then((e => {
        e.customAnalytics(), e.googleAnalytics({
            t: "pageview",
            ds: window.location.origin,
            dl: window.location.origin,
            dh: "index.html",
            dp: `index.html?v=${l.version}n=${o()?"web":r()}`,
            dt: "iTab新标签页"
        })
    })), a((() =>
            import ("./public-api.6a0debad.js").then((e => e.p))), ["./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js"],
        import.meta.url).then((e => {
        e.getUserInfo()
    }));
    let e = await a((() =>
            import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
        import.meta.url);
    e = e.default, e.get("version").then((t => {
        t ? t && l.version != t && (a((() =>
                import ("./versionChangelog.0d99a409.js")), ["./versionChangelog.0d99a409.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./version.8d34b113.js", "./index.16828acb.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./el-notification.cf8e1b84.css"],
            import.meta.url), e.set("version", l.version)) : e.set("version", l.version)
    }))
})();
const m = t("(prefers-color-scheme: dark)");
i((() => m.value), (e => {
    p.value.theme.system && (p.value.theme.mode = e ? "dark" : "light")
})), i((() => p), (e => {
    s(e.value)
}), {
    deep: !0
});