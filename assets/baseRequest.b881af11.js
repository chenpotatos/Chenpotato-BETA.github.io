import {
    a2 as e,
    a3 as s,
    l as t,
    d as r,
    _ as a
} from "./el-select.e274bb48.js";
import {
    a as o
} from "./axios.91e25212.js";
import {
    p as i
} from "./version.8d34b113.js";
let n = "https://api.codelife.cc/";
n = "http://localhost:5281/", n = "https://api.codelife.cc/";
const c = "https://api.codelife.cc/",
    m = e((() => s("userInfo", {}, {
        listenToStorageChanges: !1
    }))),
    p = m(),
    d = () => {
        t.remove("token"), p.value = {}
    };
const l = async () => {
        const e = r().valueOf().toString();
        return (await a((() =>
                import ("./aes.8e299e6d.js").then((e => e.a))), ["./aes.8e299e6d.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
            import.meta.url)).encrypt(e, "itab1314").toString()
    },
    g = o.create({
        baseURL: "https://api.codelife.cc/",
        timeout: 15e3
    });
g.interceptors.request.use((async e => {
    let s = t.get("token"),
        r = await l();
    return e.headers.signaturekey = r, e.headers.version = i.version, s && (e.headers.token = s), "get" == e.method && (e.params = {
        lang: "cn",
        ...e.params
    }), e
}), (e => {
    Promise.reject(e)
})), g.interceptors.response.use((e => {
    const s = e.data;
    return 401 == s.code ? (d(), Promise.reject(s.msg)) : 500 == s.code ? (a((() =>
            import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
        import.meta.url).then((e => {
        e.ElMessage({
            type: "error",
            message: s.msg,
            duration: 3e3,
            dangerouslyUseHTMLString: !0,
            showClose: !0
        })
    })), Promise.reject(s.msg)) : 501 == s.code ? (a((() =>
            import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
        import.meta.url).then((e => {
        e.ElMessage({
            type: "warning",
            message: s.msg,
            duration: 3e3,
            dangerouslyUseHTMLString: !0,
            showClose: !0
        })
    })), Promise.reject(s.msg)) : s
}), (e => Promise.reject(e)));
const u = g;
export {
    c as B, d as L, l as a, u as b, m as u
};