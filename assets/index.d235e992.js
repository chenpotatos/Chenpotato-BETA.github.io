import {
    a5 as e,
    g as a,
    c as t,
    Q as o,
    w as d,
    ar as l,
    R as n
} from "./el-select.e274bb48.js";
import {
    u as s
} from "./index.ca3d31b2.js";
import {
    f as u,
    a as i
} from "./index.8720847e.js";
const r = () => ({
        form: e(u, void 0),
        formItem: e(i, void 0)
    }),
    m = (e, {
        formItemContext: u,
        disableIdGeneration: i,
        disableIdManagement: r
    }) => {
        i || (i = a(!1)), r || (r = a(!1));
        const m = a();
        let v;
        const I = t((() => {
            var a;
            return !!(!e.label && u && u.inputIds && (null == (a = u.inputIds) ? void 0 : a.length) <= 1)
        }));
        return o((() => {
            v = d([l(e, "id"), i], (([e, a]) => {
                const t = null != e ? e : a ? void 0 : s().value;
                t !== m.value && ((null == u ? void 0 : u.removeInputId) && (m.value && u.removeInputId(m.value), (null == r ? void 0 : r.value) || a || !t || u.addInputId(t)), m.value = t)
            }), {
                immediate: !0
            })
        })), n((() => {
            v && v(), (null == u ? void 0 : u.removeInputId) && m.value && u.removeInputId(m.value)
        })), {
            isLabeledByFormItem: I,
            inputId: m
        }
    };
export {
    m as a, r as u
};