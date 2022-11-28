import {
    G as e,
    H as s,
    I as a,
    _ as t
} from "./el-select.e274bb48.js";
import {
    c as i
} from "./cloneDeep.3cbd3f2d.js";
const o = e(),
    _ = e => {
        let _ = o.value.find((e => e.id == s.value)).children || [];
        e.id = a(), _.push(i(e)), t((() =>
                import ("./save_config.cbe33c4d.js")), ["./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js"],
            import.meta.url).then((e => {
            e.SAVE_CONFIG("navConfig")
        })), t((() =>
                import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
            import.meta.url).then((s => {
            s.ElMessage.success(`添加【${e.name}】成功`)
        }))
    };
export {
    _ as a
};