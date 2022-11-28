import a from "./indexdb.a2b9d265.js";
import {
    b as e
} from "./itab.eac3c33d.js";
import "./localforage.2a1ae675.js";
import "./el-select.e274bb48.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
import "./baseRequest.b881af11.js";
import "./axios.91e25212.js";
import "./version.8d34b113.js";
const t = async () => {
    let t = await a.getItem("defaultUnionConfig"),
        i = t.data || [];
    if (!t.isExp) return !1;
    if (t.isExp) {
        i = (await e()).data || [], a.set("defaultUnionConfig", i, 1728e5)
    }
    return i
};
export {
    t as
    default
};