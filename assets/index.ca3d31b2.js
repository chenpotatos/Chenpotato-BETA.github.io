import {
    w as e,
    e as r,
    a5 as s,
    al as o,
    c as a
} from "./el-select.e274bb48.js";
import {
    d as n
} from "./style.d69d81d7.js";
import {
    b as t,
    d as i
} from "./index.0e1148e8.js";
const d = ({
        from: s,
        replacement: o,
        scope: a,
        version: t,
        ref: i,
        type: d = "API"
    }, p) => {
        e((() => r(p)), (e => {
            e && n(a, `[${d}] ${s} is about to be deprecated in version ${t}, please use ${o} instead.\nFor more detail, please visit: ${i}\n`)
        }), {
            immediate: !0
        })
    },
    p = {
        prefix: Math.floor(1e4 * Math.random()),
        current: 0
    },
    c = Symbol("elIdInjection"),
    m = e => {
        const d = s(c, p);
        o || d !== p || n("IdInjection", "Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed\nusage: app.provide(ID_INJECTION_KEY, {\n  prefix: number,\n  current: number,\n})");
        const m = t("namespace", i);
        return a((() => r(e) || `${m.value}-id-${d.prefix}-${d.current++}`))
    };
export {
    d as a, m as u
};