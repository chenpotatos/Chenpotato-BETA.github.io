import {
    O as e,
    w as t,
    U as a
} from "./el-select.e274bb48.js";
import {
    b as s,
    d as o
} from "./index.176a125e.js";
import {
    b as n
} from "./index.8720847e.js";
import {
    p as i
} from "./index.0e1148e8.js";
const l = {},
    p = e({
        name: "ElConfigProvider",
        props: s({
            a11y: {
                type: Boolean,
                default: !0
            },
            locale: {
                type: o(Object)
            },
            size: n,
            button: {
                type: o(Object)
            },
            experimentalFeatures: {
                type: o(Object)
            },
            keyboardNavigation: {
                type: Boolean,
                default: !0
            },
            message: {
                type: o(Object)
            },
            zIndex: Number,
            namespace: {
                type: String,
                default: "el"
            }
        }),
        setup(e, {
            slots: s
        }) {
            t((() => e.message), (e => {
                Object.assign(l, null != e ? e : {})
            }), {
                immediate: !0,
                deep: !0
            });
            const o = i(e);
            return () => a(s, "default", {
                config: null == o ? void 0 : o.value
            })
        }
    });
export {
    p as C, l as m
};