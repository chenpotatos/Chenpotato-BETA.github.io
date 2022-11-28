import {
    a as t,
    aT as e,
    u as o,
    g as s,
    o as a,
    b as n,
    h as u,
    U as d,
    i as l
} from "./el-select.e274bb48.js";
const p = {
        style: {
            position: "relative",
            "z-index": "1"
        }
    },
    r = t({
        __name: "d-button",
        props: {
            size: {
                type: String,
                default: "default"
            },
            type: {
                type: String,
                default: "default"
            },
            color: {
                type: String
            },
            round: {
                type: Boolean,
                default: !1
            }
        },
        setup(t) {
            const r = t;
            e((t => ({
                "48078d4e-props_color_____": r.color || ""
            })));
            const i = o();
            return s(i.value.theme.color), (e, o) => (a(), n("button", {
                type: "button",
                class: l(["d-button", [`d-button-size-${t.size}`, `d-button-type-${t.type}`, {
                    "is-round": r.round
                }]])
            }, [u("span", p, [d(e.$slots, "default", {}, void 0, !0)])], 2))
        }
    }, [
        ["__scopeId", "data-v-48078d4e"],
        ["__file", "D:/gitee/new-tab/src/components/d-button.vue"]
    ]);
export {
    r as
    default
};