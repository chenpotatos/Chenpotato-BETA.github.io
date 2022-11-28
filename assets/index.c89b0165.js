import {
    c as e,
    F as t
} from "./el-select.e274bb48.js";
import {
    d as s
} from "./style.d69d81d7.js";
import {
    f as r
} from "./index.176a125e.js";
const l = ["class", "style"],
    n = /^on[A-Z]/,
    u = (u = {}) => {
        const {
            excludeListeners: a = !1,
            excludeKeys: o
        } = u, c = e((() => ((null == o ? void 0 : o.value) || []).concat(l))), d = t();
        return d ? e((() => {
            var e;
            return r(Object.entries(null == (e = d.proxy) ? void 0 : e.$attrs).filter((([e]) => !(c.value.includes(e) || a && n.test(e)))))
        })) : (s("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), e((() => ({}))))
    };
export {
    u
};