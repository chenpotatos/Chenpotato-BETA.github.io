import {
    g as e,
    w as t,
    S as o,
    M as s
} from "./el-select.e274bb48.js";
const u = e(!1);
t(u, (e => {
    o((() => {
        if (e) {
            let e = document.querySelector("#keywordInput");
            setTimeout((() => {
                e && e.focus()
            }))
        } else document.querySelector(".se-input").focus()
    }))
})), document.addEventListener("keydown", (e => {
    let t = e.ctrlKey;
    s() && (t = e.metaKey, e.ctrlKey) || t && "f" === e.key && (e.preventDefault(), u.value = !u.value)
}), !1);
export {
    u as g
};