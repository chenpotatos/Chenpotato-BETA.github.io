import {
    G as e,
    u as t,
    a1 as a,
    Z as i,
    $ as s,
    l as n,
    az as o,
    _ as l,
    d as g,
    aA as c
} from "./el-select.e274bb48.js";
import {
    a as r
} from "./index.ed6e81ca.js";
import {
    d
} from "./website.2111b3d7.js";
import {
    d as f
} from "./index.466a8266.js";
import u from "./indexdb.a2b9d265.js";
import {
    u as b
} from "./baseRequest.b881af11.js";
const m = e(),
    v = t(),
    y = a(),
    h = i(),
    p = s(),
    w = [{
        key: "baidu",
        title: "百度",
        href: "https://www.baidu.com/s?&tn=68018901_2_oem_dgie=utf-8&wd="
    }, {
        key: "google",
        title: "Google",
        href: "https://www.google.com/search?q="
    }, {
        key: "bing",
        title: "必应",
        href: "https://www.bing.com/search?q="
    }, {
        key: "github",
        title: "gitHub",
        href: "https://github.com/search?q="
    }];
!y.value && (y.value = []), !h.value && (h.value = []);
const C = e => {
    var t, a, i;
    e.baseConfig && (e.baseConfig.searchEngine || (e.baseConfig.searchEngine = w), e.baseConfig.open || (e.baseConfig.open = {
        searchBlank: null == (a = null == (t = e.baseConfig) ? void 0 : t.search) ? void 0 : a.blank,
        iconBlank: null == (i = v.value.search) ? void 0 : i.blank
    }), v.value = e.baseConfig), e.navConfig && (m.value = e.navConfig), e.todo && (u.set("todo", e.todo), y.value = e.notes.slice(0, 3)), e.notes && (u.set("notes", e.notes), h.value = e.notes.slice(0, 3), o.value = e.notes.filter((e => e && e.fixed))), e.stocks && (p.value = e.stocks), localStorage.setItem("dataCleansing", "null")
};
window.addEventListener("storage", (t => {
    if ("navConfig" === t.key) {
        let t = n.get("navConfig") || [];
        t.length && (m.value = t, e().value = t)
    }
}));
const _ = (e, t) => {
        n.get("token") && (n.set("asyncTime", t), e || (e = {
            baseConfig: 1,
            navConfig: 1,
            notes: 1,
            todo: 1
        }), f("同步中", "loading"), r.itabConfig(e).then((e => {
            f("同步成功", "check");
            let t = e.data;
            t && t.iTabConfig && (t = JSON.parse(t.iTabConfig)), t && C(t)
        })))
    },
    T = b(),
    k = async () => {
        let e = await l((() =>
                import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
            import.meta.url);
        e = e.default;
        let t = await e.get("todayBing"),
            a = g().format("YYYYMMDD");
        if (t && t.enddate == a) return t;
        let i = await r.getBing(),
            s = i.data || {};
        return e.set("todayBing", i.data || {}), n.set("todayBing", {
            thumb: s.thumb,
            copyright: s.copyright
        }), s || {}
    };
async function A(e, t) {
    for (let a = 0; a < e.length; a++) await t(e[a], a, e)
}
const j = async (e, t) => {
        let a = await l((() =>
                import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
            import.meta.url);
        if (a = a.default, a.get("configHistory").then((async t => {
                let i = t || [];
                if ("navConfig" === e || !e) {
                    let e = ["baseConfig", "navConfig", "notes", "todo", "stocks"],
                        t = {};
                    await A(e, (async e => {
                        if (["notes", "todo"].includes(e)) {
                            let i = await a.get(e) || n.get(e) || [];
                            t[e] = i
                        } else t[e] = n.get(e)
                    })), i.unshift({
                        data: t || [],
                        ct: g().valueOf()
                    }), a.set("configHistory", i.slice(0, 10))
                }
            })), !n.get("token")) return;
        let i = ["baseConfig", "navConfig", "notes", "todo", "stocks"],
            s = {},
            o = {
                saveType: t
            },
            c = T.value.itabAsyncTime || {};
        if (e) {
            let t = g().valueOf();
            if (["notes", "todo"].includes(e)) {
                let t = await a.get(e) || n.get(e) || [];
                o[e] = t
            } else o[e] = n.get(e);
            c[e] = t, s[`itabAsyncTime.${e}`] = t
        } else {
            let e = g().valueOf();
            await A(i, (async t => {
                c[t] = e;
                if (["notes", "todo"].includes(t)) {
                    let e = await a.get(t) || n.get(t) || [];
                    o[t] = e
                } else o[t] = n.get(t);
                s[`itabAsyncTime.${t}`] = e
            }))
        }
        f("备份中...", "loading"), r.itabConfigUpdate(o).then((() => {
            r.userUpdate(s), n.set("asyncTime", c), setTimeout((() => {
                f("备份成功", "check")
            }), 260), T.value.itabAsyncTime = c
        })).catch((() => {
            f("备份失败", "close"), l((() =>
                    import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
                import.meta.url).then((e => {
                e.ElMessage({
                    type: "error",
                    message: "备份失败，稍后请手动尝试",
                    duration: 0,
                    showClose: !0
                })
            }))
        }))
    },
    E = Object.freeze(Object.defineProperty({
        __proto__: null,
        getTodayBing: k,
        getUserInfo: () => {
            n.get("token") ? r.userInfo({
                from: "itab",
                t: (new Date).getTime()
            }).then((e => {
                T.value = e.data || {};
                let t = n.get("asyncTime"),
                    a = {};
                for (let i in e.data.itabAsyncTime) t[i] != e.data.itabAsyncTime[i] && (a[i] = 1);
                c(a) || _(a, e.data.itabAsyncTime)
            })) : T.value = {}
        },
        saveConfig: j,
        asyncConfig: async e => {
            if (!T.value._id) return {};
            if (n.get("asyncTime")[e] == T.value.itabAsyncTime[e]) return {};
            f("同步中", "loading");
            let t = {};
            t[e] = 1;
            let a = await r.itabConfig(t);
            return f("同步成功", "check"), a
        },
        delIcon: async e => {
            if (e && e.includes("user_")) {
                let t = [e.replace("https://files.codelife.cc/", "")];
                d({
                    paths: t
                })
            }
        }
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    _ as A, k as g, E as p, j as s, C as w
};