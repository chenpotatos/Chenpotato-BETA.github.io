import {
    a as e,
    c as s,
    o as i,
    b as t,
    h as n,
    n as c,
    e as o
} from "./el-select.e274bb48.js";
const r = ["xlink:href"],
    a = {
        name: "dIcon"
    },
    l = e(Object.assign(a, {
        props: {
            icon: String,
            size: {
                type: [String, Number]
            }
        },
        emits: ["click"],
        setup(e, {
            emit: a
        }) {
            const l = e,
                p = e => {
                    a("click", e)
                },
                d = s((() => {
                    let e = /^\d+$/.test(l.size) ? l.size + "px" : l.size;
                    return {
                        color: l.color,
                        fontSize: e
                    }
                }));
            return (s, a) => (i(), t("svg", {
                class: "d-icon",
                style: c(o(d)),
                onClick: p,
                "aria-hidden": "true"
            }, [n("use", {
                "xlink:href": `#${e.icon}`
            }, null, 8, r)], 4))
        }
    }), [
        ["__scopeId", "data-v-761339c4"],
        ["__file", "D:/gitee/new-tab/src/components/d-icon.vue"]
    ]);
export {
    l as D
};