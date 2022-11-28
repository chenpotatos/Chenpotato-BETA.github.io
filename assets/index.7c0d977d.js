import {
    g as e,
    c as n
} from "./el-select.e274bb48.js";
import {
    b as t
} from "./index.0e1148e8.js";
const a = e(0),
    r = () => {
        const e = t("zIndex", 2e3),
            r = n((() => e.value + a.value));
        return {
            initialZIndex: e,
            currentZIndex: r,
            nextZIndex: () => (a.value++, r.value)
        }
    };
export {
    r as u
};