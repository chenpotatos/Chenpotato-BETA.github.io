import {
    a as e
} from "./axios.91e25212.js";
import {
    a as s,
    L as t,
    B as r
} from "./baseRequest.b881af11.js";
import {
    l as o,
    _ as a
} from "./el-select.e274bb48.js";
import {
    p as i
} from "./version.8d34b113.js";
let u = /\{[\S]*?\}/g;
e.defaults.baseURL = r;
const d = (r => {
    var d;
    (d = e).interceptors.request.use((async e => {
        let t = await s();
        e.headers.version = i.version, e.headers.signaturekey = t;
        let r = o.get("token");
        return r && (e.headers.token = r), e
    }), (e => {
        Promise.reject(e)
    })), d.interceptors.response.use((e => {
        const s = e.data;
        return 401 == s.code ? (t(), Promise.reject(s.msg)) : 500 == s.code ? (a((() =>
                import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
            import.meta.url).then((e => {
            e.ElMessage({
                type: "error",
                message: e.msg,
                duration: 3e3,
                dangerouslyUseHTMLString: !0,
                showClose: !0
            })
        })), Promise.reject(s.msg)) : s
    }), (e => Promise.reject(e)));
    let n = {};
    for (let s in r) {
        let t = r[s],
            o = t.url,
            a = t.methods || "get",
            i = o.split(u),
            d = !1;
        ["get", "delete"].includes(a) && (d = !0);
        let g = s => e[a](o, d ? {
            params: s
        } : s);
        "delete" == a && (g = s => e[a](o, {
            data: s
        })), 1 !== i.length && (g = s => e[a](`${i[0]}${s}`)), n[s] = g
    }
    return n
})({
    getSts: {
        url: "/api/sts",
        methods: "post"
    },
    baiduSugrec: {
        url: "/api/baidu_sugrec/{params}",
        methods: "get"
    },
    getBing: {
        url: "/api/bing",
        methods: "get"
    },
    bingList: {
        url: "/bing/list",
        methods: "get"
    },
    userLogin: {
        url: "/user/login",
        methods: "get"
    },
    userInfo: {
        url: "/user/info",
        methods: "get"
    },
    userUpdate: {
        url: "/user/update",
        methods: "post"
    },
    userRegistry: {
        url: "/user/registry",
        methods: "post"
    },
    userSendVerifyCode: {
        url: "/user/sendVerifyCode",
        methods: "post"
    },
    itabConfig: {
        url: "/itab/config",
        methods: "get"
    },
    itabConfigUpdate: {
        url: "/itab/update",
        methods: "post"
    },
    searchEngienList: {
        url: "/stat/searchEngienList",
        methods: "get"
    }
});
export {
    d as a
};