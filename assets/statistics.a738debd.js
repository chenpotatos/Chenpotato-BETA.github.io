import {
    _ as t,
    u as e,
    l as o,
    d as a
} from "./el-select.e274bb48.js";
import {
    statUserAnalyseApi as i
} from "./useSta.b98c784e.js";
import "./baseRequest.b881af11.js";
import "./axios.91e25212.js";
import "./version.8d34b113.js";
const n = new Promise((function(e, o) {
        t((() =>
                import ("./fingerprint2.472393d4.js").then((t => t.f))), ["./fingerprint2.472393d4.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
            import.meta.url).then((t => {
            window.requestIdleCallback && t.get((function(a) {
                const i = a.map((function(t, e) {
                    return 0 === e ? t.value.replace(/\bNetType\/\w+\b/, "") : t.value
                }));
                let n = t.x64hash128(i.join(""), 31);
                n ? e(n) : o()
            }))
        }))
    })),
    s = e(),
    l = async () => {
        let e = o.get("bdRodomTn");
        e || (e = Math.floor(10 * Math.random()) + 1, o.set("bdRodomTn", e));
        let a = await n;
        i({
            fp: a,
            tn: e
        }).then((e => {
            let o = e.data || {},
                a = o.tn || "68018901_2_oem_dg";
            s.value.searchEngine.forEach((t => {
                "baidu" === t.key && (t.href = `https://www.baidu.com/s?tn=${a}&ie=utf-8&wd=`)
            })), o.content && (1 == o.type ? t((() =>
                    import ("./index.16828acb.js")), ["./index.16828acb.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
                import.meta.url).then((t => {
                t.default({
                    customClass: "publice-notice",
                    duration: 0,
                    showClose: !0,
                    title: o.title,
                    dangerouslyUseHTMLString: !0,
                    message: o.content
                })
            })) : 2 == o.type && o.content && t((() =>
                    import ("./versionNotice.ea178545.js")), ["./versionNotice.ea178545.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                import.meta.url).then((t => {
                t.default({
                    modelValue: !0,
                    title: o.title,
                    center: !0
                }, o.content)
            })))
        }))
    },
    r = {
        v: 1,
        tid: "UA-215722304-2",
        ul: (window.navigator.language || "").toLowerCase()
    },
    c = async (t = {}) => {
        if ("false" === window.localStorage.getItem("collectAnalytics")) return;
        r.cid = await n;
        let e = { ...r,
                ...t
            },
            o = "";
        for (let a in e) o += `${a}=${e[a]}&`;
        fetch(`https://www.google-analytics.com/collect?${o}`, {
            method: "POST"
        })
    },
    m = async (t = "i", e = {}) => {
        let o = { ...{
                    gid: "gad_199_lbpuiqki",
                    ck: 168,
                    adk: 2091,
                    os: 3,
                    if: "",
                    aid: "",
                    im: "",
                    m: "",
                    ip: "",
                    ts: a().valueOf(),
                    geo: "",
                    oa: ""
                },
                ...e
            },
            i = "";
        for (let a in o) i += `${a}=${o[a]}&`;
        fetch(`https://${t}.gridsumdissector.com/${"i"==t?"v":"r"}/?${i}`)
    };
export {
    l as customAnalytics, c as googleAnalytics, m as gridsumAnalytics
};