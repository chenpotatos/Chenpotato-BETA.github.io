import {
    c as e,
    F as o,
    g as s,
    a5 as a,
    e as l
} from "./el-select.e274bb48.js";
import {
    b as r
} from "./index.0e1148e8.js";
import {
    c as i
} from "./index.176a125e.js";
const t = ["", "default", "small", "large"],
    d = {
        large: 40,
        default: 32,
        small: 24
    },
    n = Symbol("formContextKey"),
    u = Symbol("formItemContextKey"),
    m = s => {
        const a = o();
        return e((() => {
            var e, o;
            return null != (o = (null == (e = a.proxy) ? void 0 : e.$props)[s]) ? o : void 0
        }))
    },
    v = i({
        type: String,
        values: t,
        required: !1
    }),
    f = (o, i = {}) => {
        const t = s(void 0),
            d = i.prop ? t : m("size"),
            v = i.global ? t : r("size"),
            f = i.form ? {
                size: void 0
            } : a(n, void 0),
            p = i.formItem ? {
                size: void 0
            } : a(u, void 0);
        return e((() => d.value || l(o) || (null == p ? void 0 : p.size) || (null == f ? void 0 : f.size) || v.value || ""))
    },
    p = o => {
        const s = m("disabled"),
            r = a(n, void 0);
        return e((() => s.value || l(o) || (null == r ? void 0 : r.disabled) || !1))
    };
export {
    u as a, v as b, t as c, p as d, d as e, n as f, f as u
};