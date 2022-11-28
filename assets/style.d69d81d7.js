import {
    aa as t,
    al as s,
    aD as r,
    ap as e
} from "./el-select.e274bb48.js";
class n extends Error {
    constructor(t) {
        super(t), this.name = "ElementPlusError"
    }
}

function a(t, s) {
    throw new n(`[${t}] ${s}`)
}

function o(s, r) {
    {
        const e = t(s) ? new n(`[${s}] ${r}`) : s;
        console.warn(e)
    }
}
const i = (t = "") => t.split(" ").filter((t => !!t.trim())),
    l = (t, s) => {
        if (!t || !s) return !1;
        if (s.includes(" ")) throw new Error("className should not contain space.");
        return t.classList.contains(s)
    },
    c = (t, s) => {
        t && s.trim() && t.classList.add(...i(s))
    },
    u = (t, s) => {
        t && s.trim() && t.classList.remove(...i(s))
    },
    m = (t, e) => {
        var n;
        if (!s || !t || !e) return "";
        let a = r(e);
        "float" === a && (a = "cssFloat");
        try {
            const s = t.style[a];
            if (s) return s;
            const r = null == (n = document.defaultView) ? void 0 : n.getComputedStyle(t, "");
            return r ? r[a] : ""
        } catch (o) {
            return t.style[a]
        }
    };

function d(s, r = "px") {
    return s ? t(s) ? s : e(s) ? `${s}${r}` : void o("utils/dom/style", "binding value must be a string or number") : ""
}
export {
    d as a, c as b, o as d, m as g, l as h, u as r, a as t
};