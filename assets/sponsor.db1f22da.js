import {
    a,
    aq as e,
    g as s,
    o as t,
    t as i,
    J as o,
    k as l,
    e as r,
    C as p,
    h as c,
    i as d,
    b as n,
    j as m,
    ao as b,
    A as u,
    B as f
} from "./el-select.e274bb48.js";
import {
    E as j
} from "./el-dialog.c73078d2.js"; /* empty css                   */ /* empty css                  */
import {
    ElButton as h
} from "./index.534437f3.js";
import "./index.176a125e.js";
import "./index.0e1148e8.js";
import "./style.d69d81d7.js";
import "./isObject.a01dee34.js";
import "./icon.8b835c88.js";
import "./index.4e5ff846.js";
import "./index.14b43c35.js";
import "./focus-trap.e600e472.js";
import "./aria.66f3f71c.js";
import "./index.7c0d977d.js";
import "./index.ca3d31b2.js";
import "./scroll.4972bdba.js";
import "./index.d235e992.js";
import "./index.8720847e.js";
const v = "" + new URL("../wechat-pay.png",
        import.meta.url).href,
    y = "" + new URL("../ali-pay.png",
        import.meta.url).href,
    w = a => (u("data-v-a7a222ed"), a = a(), f(), a),
    x = w((() => c("h2", {
        class: "ac f18 b mt20",
        style: {
            color: "#666"
        }
    }, "打赏支持iTab新标签页", -1))),
    g = {
        class: "p10 ac"
    },
    _ = w((() => c("p", {
        class: "ac d-sub f12",
        style: {
            "line-height": "20px"
        }
    }, [p(" 如果iTab对您有价值，不妨支持一下我吧， "), c("br"), p("我将专注于持续优化产品体验。 ")], -1))),
    k = {
        class: "ac sponsor-btn mt20"
    },
    C = {
        class: "mt20 ac sponsor-qrcode"
    },
    T = {
        key: 0,
        class: "wfull",
        style: {
            "border-radius": "4px"
        },
        src: v
    },
    U = {
        key: 1,
        class: "wfull",
        style: {
            "border-radius": "4px"
        },
        src: y
    },
    q = w((() => c("p", null, [c("a", {
        href: "https://www.itab.link/donate.html",
        target: "_blank",
        class: "mt10 f12 d-sub"
    }, "iTab赞赏支出公示")], -1))),
    L = a({
        __name: "sponsor",
        setup(a) {
            const u = e(),
                f = s("wechat");
            return (a, e) => (t(), i(r(j), b({
                center: "",
                "append-to-body": "",
                class: "sponsor",
                width: "600px"
            }, r(u)), {
                header: o((() => [x])),
                footer: o((() => [l(r(h), {
                    size: "small",
                    onClick: e[2] || (e[2] = a => r(u)["onUpdate:modelValue"](!1))
                }, {
                    default: o((() => [p("下次再说")])),
                    _: 1
                })])),
                default: o((() => [c("div", g, [_, c("div", k, [c("button", {
                    class: d([{
                        active: "wechat" === f.value
                    }, "d-button wechat"]),
                    type: "button",
                    onClick: e[0] || (e[0] = a => f.value = "wechat")
                }, " 微信 ", 2), c("button", {
                    onClick: e[1] || (e[1] = a => f.value = "alipay"),
                    class: d([{
                        active: "alipay" === f.value
                    }, "d-button alipay"]),
                    type: "button"
                }, " 支付宝 ", 2)]), c("ul", C, ["wechat" === f.value ? (t(), n("img", T)) : m("v-if", !0), "alipay" === f.value ? (t(), n("img", U)) : m("v-if", !0)]), q])])),
                _: 1
            }, 16))
        }
    }, [
        ["__scopeId", "data-v-a7a222ed"],
        ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/setting/sponsor.vue"]
    ]);
export {
    L as
    default
};