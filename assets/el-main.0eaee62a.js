import {
    O as e,
    ai as t,
    c as s,
    o as n,
    b as r,
    U as a,
    i as o,
    e as l,
    n as i
} from "./el-select.e274bb48.js";
import {
    _ as c,
    w as u,
    a as p
} from "./index.176a125e.js";
import {
    u as m
} from "./index.0e1148e8.js";
const d = e({
    name: "ElContainer"
});
var h = c(e({ ...d,
    props: {
        direction: {
            type: String
        }
    },
    setup(e) {
        const i = e,
            c = t(),
            u = m("container"),
            p = s((() => {
                if ("vertical" === i.direction) return !0;
                if ("horizontal" === i.direction) return !1;
                if (c && c.default) {
                    return c.default().some((e => {
                        const t = e.type.name;
                        return "ElHeader" === t || "ElFooter" === t
                    }))
                }
                return !1
            }));
        return (e, t) => (n(), r("section", {
            class: o([l(u).b(), l(u).is("vertical", l(p))])
        }, [a(e.$slots, "default")], 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]
]);
const f = e({
    name: "ElAside"
});
var g = c(e({ ...f,
    props: {
        width: {
            type: String,
            default: null
        }
    },
    setup(e) {
        const t = e,
            c = m("aside"),
            u = s((() => t.width ? c.cssVarBlock({
                width: t.width
            }) : {}));
        return (e, t) => (n(), r("aside", {
            class: o(l(c).b()),
            style: i(l(u))
        }, [a(e.$slots, "default")], 6))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]
]);
const k = e({
    name: "ElFooter"
});
var v = c(e({ ...k,
    props: {
        height: {
            type: String,
            default: null
        }
    },
    setup(e) {
        const t = e,
            c = m("footer"),
            u = s((() => t.height ? c.cssVarBlock({
                height: t.height
            }) : {}));
        return (e, t) => (n(), r("footer", {
            class: o(l(c).b()),
            style: i(l(u))
        }, [a(e.$slots, "default")], 6))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]
]);
const _ = e({
    name: "ElHeader"
});
var w = c(e({ ..._,
    props: {
        height: {
            type: String,
            default: null
        }
    },
    setup(e) {
        const t = e,
            c = m("header"),
            u = s((() => t.height ? c.cssVarBlock({
                height: t.height
            }) : {}));
        return (e, t) => (n(), r("header", {
            class: o(l(c).b()),
            style: i(l(u))
        }, [a(e.$slots, "default")], 6))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]
]);
const b = e({
    name: "ElMain"
});
var y = c(e({ ...b,
    setup(e) {
        const t = m("main");
        return (e, s) => (n(), r("main", {
            class: o(l(t).b())
        }, [a(e.$slots, "default")], 2))
    }
}), [
    ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]
]);
const E = u(h, {
        Aside: g,
        Footer: v,
        Header: w,
        Main: y
    }),
    $ = p(g);
p(v), p(w);
const S = p(y);
export {
    E,
    $ as a,
    S as b
};