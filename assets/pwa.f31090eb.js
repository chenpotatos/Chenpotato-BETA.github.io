import {
    _ as e
} from "./el-select.e274bb48.js";
! function(n = {}) {
    const {
        immediate: t = !1,
        onNeedRefresh: i,
        onOfflineReady: s,
        onRegistered: a,
        onRegisteredSW: o,
        onRegisterError: r
    } = n;
    let d, l, c, w;
    c = async function() {
        if ("serviceWorker" in navigator) {
            const {
                Workbox: n,
                messageSW: c
            } = await e((() =>
                    import ("./workbox-window.prod.es5.d2780aeb.js")), [],
                import.meta.url);
            w = async () => {
                l && l.waiting && await c(l.waiting, {
                    type: "SKIP_WAITING"
                })
            }, d = new n("./sw.js", {
                scope: "./",
                type: "classic"
            }), d.addEventListener("activated", (e => {
                e.isUpdate || null == s || s()
            })); {
                const e = () => {
                    null == i || i()
                };
                d.addEventListener("waiting", e), d.addEventListener("externalwaiting", e)
            }
            d.register({
                immediate: t
            }).then((e => {
                l = e, o ? o("./sw.js", e) : null == a || a(e)
            })).catch((e => {
                null == r || r(e)
            }))
        }
    }()
}({
    onNeedRefresh() {},
    onOfflineReady() {}
});