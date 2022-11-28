import {
    O as e,
    o as a,
    t as l,
    k as o,
    a as s,
    b as t,
    h as i,
    K as n,
    L as r,
    A as c,
    B as d,
    i as u,
    z as p,
    g as m,
    J as f,
    e as g,
    p as h,
    C as v,
    q as w,
    j as b,
    l as y,
    c as _,
    aW as x,
    R as k,
    x as V,
    m as T,
    s as C,
    aq as I,
    _ as j,
    N as A,
    aC as L
} from "./el-select.e274bb48.js"; /* empty css                  */
import {
    E as q
} from "./el-dialog.c73078d2.js"; /* empty css                   */
import {
    E as D,
    a as P
} from "./el-form-item.912e2c38.js";
import {
    E as z
} from "./el-radio.74b38810.js";
import {
    a as E
} from "./index.ed6e81ca.js";
import {
    u as U,
    b as F
} from "./baseRequest.b881af11.js";
import S from "./d-button.975b01f4.js";
import {
    A as B
} from "./public-api.6a0debad.js";
import {
    SAVE_CONFIG as R
} from "./save_config.cbe33c4d.js";
import {
    E as K
} from "./index.72bec9e8.js";
import {
    ElButton as M
} from "./index.534437f3.js"; /* empty css                   */
import {
    d as O
} from "./main.354a692e.js";
import {
    ElMessage as H
} from "./index.bd01dcfa.js"; /* empty css                        */ /* empty css                       */
import {
    R as Q
} from "./Refresh.dd54cee1.js";
import {
    ElImage as J
} from "./index.7eda866d.js";
import {
    E as N
} from "./index.47a56f13.js";
var W = e({
    name: "Lock"
});
const G = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    X = o("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
    }, null, -1),
    Y = o("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
    }, null, -1);
W.render = function(e, o, s, t, i, n) {
    return a(), l("svg", G, [X, Y])
}, W.__file = "packages/components/Lock.vue";
const Z = W;
var $ = e({
    name: "User"
});
const ee = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ae = o("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
    }, null, -1);
$.render = function(e, o, s, t, i, n) {
    return a(), l("svg", ee, [ae])
}, $.__file = "packages/components/User.vue";
const le = $,
    oe = "function" == typeof btoa,
    se = "function" == typeof Buffer;
"function" == typeof TextDecoder && new TextDecoder;
const te = "function" == typeof TextEncoder ? new TextEncoder : void 0,
    ie = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
(e => {
    let a = {};
    ie.forEach(((e, l) => a[e] = l))
})();
const ne = String.fromCharCode.bind(String);
"function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array);
const re = oe ? e => btoa(e) : se ? e => Buffer.from(e, "binary").toString("base64") : e => {
        let a, l, o, s, t = "";
        const i = e.length % 3;
        for (let n = 0; n < e.length;) {
            if ((l = e.charCodeAt(n++)) > 255 || (o = e.charCodeAt(n++)) > 255 || (s = e.charCodeAt(n++)) > 255) throw new TypeError("invalid character found");
            a = l << 16 | o << 8 | s, t += ie[a >> 18 & 63] + ie[a >> 12 & 63] + ie[a >> 6 & 63] + ie[63 & a]
        }
        return i ? t.slice(0, i - 3) + "===".substring(i) : t
    },
    ce = se ? e => Buffer.from(e).toString("base64") : e => {
        let a = [];
        for (let l = 0, o = e.length; l < o; l += 4096) a.push(ne.apply(null, e.subarray(l, l + 4096)));
        return re(a.join(""))
    },
    de = e => {
        if (e.length < 2) return (a = e.charCodeAt(0)) < 128 ? e : a < 2048 ? ne(192 | a >>> 6) + ne(128 | 63 & a) : ne(224 | a >>> 12 & 15) + ne(128 | a >>> 6 & 63) + ne(128 | 63 & a);
        var a = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
        return ne(240 | a >>> 18 & 7) + ne(128 | a >>> 12 & 63) + ne(128 | a >>> 6 & 63) + ne(128 | 63 & a)
    },
    ue = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    pe = se ? e => Buffer.from(e, "utf8").toString("base64") : te ? e => ce(te.encode(e)) : e => re(e.replace(ue, de)),
    me = (e, a = !1) => a ? (e => e.replace(/=/g, "").replace(/[+\/]/g, (e => "+" == e ? "-" : "_")))(pe(e)) : pe(e),
    fe = {
        class: "d-flex-between login-third mt15"
    },
    ge = (e => (c("data-v-f7c5e177"), e = e(), d(), e))((() => i("div", null, "第三方账号登录", -1))),
    he = {
        class: "d-flex"
    },
    ve = ["href", "onClick"],
    we = ["src"],
    be = s({
        __name: "loginThird",
        emits: ["loginThird"],
        setup(e, {
            emit: l
        }) {
            const o = [{
                url: "https://api.weibo.com/oauth2/authorize?client_id=3805380913&redirect_uri=https://www.codelife.cc/logincb&response_type=code&state=&scope=all",
                icon: "weibo"
            }, {
                url: "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101983660&redirect_uri=https%3A%2F%2Fwww.codelife.cc%2Flogincb&state=qq",
                icon: "qq"
            }, {
                url: "https://github.com/login/oauth/authorize?client_id=930860aee1b7c1ce56ee&scope=user",
                icon: "github"
            }];
            return (e, s) => (a(), t("div", fe, [ge, i("div", he, [(a(), t(n, null, r(o, (e => i("span", {
                href: e.url,
                key: e.icon,
                onClick: a => (e => {
                    window.open(e.url, "_blank", "width=800,height=500"), window.addEventListener("message", (e => {
                        let a = e.data || {};
                        l("loginThird", a)
                    }), !1)
                })(e)
            }, [i("img", {
                style: {
                    width: "24px",
                    height: "24px"
                },
                src: `./login/${e.icon}.svg`
            }, null, 8, we)], 8, ve))), 64))])]))
        }
    }, [
        ["__scopeId", "data-v-f7c5e177"],
        ["__file", "D:/gitee/new-tab/src/views/Login/loginThird.vue"]
    ]),
    ye = e => (c("data-v-31849f1a"), e = e(), d(), e),
    _e = [ye((() => i("span", {
        class: "brid-body"
    }, null, -1))), ye((() => i("span", {
        class: "brid-claw left"
    }, null, -1))), ye((() => i("span", {
        class: "brid-claw right"
    }, null, -1)))],
    xe = s({
        __name: "noPassword",
        props: {
            inputPass: {
                type: Boolean,
                defautl: !1
            }
        },
        setup(e) {
            const l = e;
            return (e, o) => (a(), t("div", null, [i("div", {
                class: u(["login-bird", {
                    password: l.inputPass
                }])
            }, _e, 2)]))
        }
    }, [
        ["__scopeId", "data-v-31849f1a"],
        ["__file", "D:/gitee/new-tab/src/views/Login/noPassword.vue"]
    ]),
    ke = e => (c("data-v-3f7ae31a"), e = e(), d(), e),
    Ve = ke((() => i("div", {
        class: "ar",
        style: {
            margin: "-15px 0 10px 0"
        }
    }, [i("a", {
        class: "d-main f12",
        target: "_blank",
        href: "https://codelife.cc/account/pass?type=find"
    }, "忘记密码")], -1))),
    Te = ke((() => i("div", null, [i("h2", {
        class: "ac f18 mb10 pt30"
    }, "选择账号数据")], -1))),
    Ce = ke((() => i("p", {
        class: "f12 d-sub ac"
    }, " 检测到云端数据和本地数据不一致，请选择使用其中某一项数据 ", -1))),
    Ie = {
        style: {
            padding: "20px 40px 40px"
        }
    },
    je = {
        class: "ac mt30"
    },
    Ae = s({
        __name: "login",
        emits: ["close"],
        setup(e, {
            expose: l,
            emit: s
        }) {
            const n = U(),
                r = p({
                    email: "",
                    password: ""
                }),
                c = p({
                    loading: !1,
                    userInfo: {},
                    selectDataVisible: !1,
                    dataActive: 2,
                    isInputPass: !1
                }),
                d = m(null),
                u = () => {
                    c.loading = !0;
                    let e = {};
                    e.email = r.email, e.from = "itab", e.password = me(r.password), e.t = (new Date).getTime(), E.userLogin(e).then((e => {
                        200 == e.code && _(e)
                    })).finally((() => {
                        c.loading = !1
                    }))
                };

            function _(e) {
                if (c.userInfo = e.data || {}, !e.token) return;
                c.userInfo.token = e.token;
                let a = !1;
                c.userInfo.upTime && (a = !0);
                for (let l in c.userInfo.itabAsyncTime) 1 != c.userInfo.itabAsyncTime[l] && (a = !0);
                a ? c.selectDataVisible = !0 : (n.value = c.userInfo, y.set("token", c.userInfo.token), s("close"))
            }

            function x() {
                n.value = c.userInfo, y.set("token", c.userInfo.token), 2 == c.dataActive ? B(null, c.userInfo.itabAsyncTime) : R(null, !0), c.selectDataVisible = !1, s("close")
            }
            return l({
                loginSuccess: _
            }), (e, l) => (a(), t("div", null, [o(xe, {
                inputPass: c.isInputPass
            }, null, 8, ["inputPass"]), o(g(P), {
                onSubmit: l[4] || (l[4] = w((() => {}), ["prevent"])),
                size: "large",
                model: r,
                ref_key: "refLoginForm",
                ref: d,
                "label-position": "right"
            }, {
                default: f((() => [o(g(D), {
                    prop: "email",
                    rules: {
                        required: !0,
                        type: "email",
                        message: "邮箱格式不正确"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        "prefix-icon": g(le),
                        maxlength: "40",
                        modelValue: r.email,
                        "onUpdate:modelValue": l[0] || (l[0] = e => r.email = e),
                        placeholder: "请输入邮箱"
                    }, null, 8, ["prefix-icon", "modelValue"])])),
                    _: 1
                }), o(g(D), {
                    prop: "password",
                    rules: {
                        required: !0,
                        message: "密码不能为空"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        onKeydown: h(u, ["enter"]),
                        maxlength: "20",
                        "show-password": "",
                        "prefix-icon": g(Z),
                        type: "password",
                        modelValue: r.password,
                        "onUpdate:modelValue": l[1] || (l[1] = e => r.password = e),
                        onFocus: l[2] || (l[2] = e => c.isInputPass = !0),
                        onBlur: l[3] || (l[3] = e => c.isInputPass = !1),
                        placeholder: "请输入6-18位密码"
                    }, null, 8, ["onKeydown", "prefix-icon", "modelValue"])])),
                    _: 1
                }), Ve, o(S, {
                    round: "",
                    size: "large",
                    onClick: u,
                    type: "primary",
                    class: "wfull",
                    loading: c.loading
                }, {
                    default: f((() => [v("立即登录")])),
                    _: 1
                }, 8, ["loading"])])),
                _: 1
            }, 8, ["model"]), b(' <loginThird @loginThird="loginSuccessConfig" /> '), o(g(q), {
                "append-to-body": !0,
                width: "400px",
                "close-on-click-modal": !1,
                "close-on-press-escape": !1,
                "show-close": !1,
                modelValue: c.selectDataVisible,
                "onUpdate:modelValue": l[7] || (l[7] = e => c.selectDataVisible = e)
            }, {
                default: f((() => [Te, Ce, i("div", Ie, [i("p", null, [o(g(z), {
                    modelValue: c.dataActive,
                    "onUpdate:modelValue": l[5] || (l[5] = e => c.dataActive = e),
                    label: 1
                }, {
                    default: f((() => [v("使用本地数据")])),
                    _: 1
                }, 8, ["modelValue"])]), i("p", null, [o(g(z), {
                    modelValue: c.dataActive,
                    "onUpdate:modelValue": l[6] || (l[6] = e => c.dataActive = e),
                    label: 2
                }, {
                    default: f((() => [v("使用云端数据")])),
                    _: 1
                }, 8, ["modelValue"])]), i("p", je, [o(g(M), {
                    onClick: x,
                    class: "wfull",
                    type: "primary"
                }, {
                    default: f((() => [v("确定")])),
                    _: 1
                })])])])),
                _: 1
            }, 8, ["modelValue"])]))
        }
    }, [
        ["__scopeId", "data-v-3f7ae31a"],
        ["__file", "D:/gitee/new-tab/src/views/Login/login.vue"]
    ]),
    Le = {
        class: "d-flex-between wfull"
    },
    qe = s({
        __name: "register",
        emits: ["close"],
        setup(e, {
            emit: l
        }) {
            const s = U(),
                n = p({
                    timer: null,
                    loading: !1,
                    timerText: "获取验证码",
                    setp: 0,
                    isInputPass: !1
                }),
                r = p({
                    email: "",
                    username: "",
                    password: "",
                    verifyKey: "",
                    source: O()
                }),
                c = m(null);
            const d = _((() => !x(r.email)));
            _((() => !x(r.email)));
            const u = () => {
                x(r.email) ? (n.timerText = 10, n.timer = setInterval((() => {
                    n.timerText--, n.timerText <= 0 && (clearInterval(n.timer), n.timerText = "获取验证码")
                }), 1e3), E.userSendVerifyCode({
                    email: r.email
                }).then((e => {
                    H.success("验证码发送成功")
                }))) : H.warning("请输入正确的邮箱")
            };

            function h() {
                c.value.validate((e => {
                    if (!e) return;
                    n.loading = !0;
                    let a = { ...r,
                        password: me(r.password)
                    };
                    a.t = (new Date).getTime(), E.userRegistry(a).then((e => {
                        let a = e.data || {};
                        s.value = a, y.set("token", e.token), H.success("注册成功"), l("close")
                    })).finally((() => {
                        n.loading = !1
                    }))
                }))
            }
            return k((() => {
                clearInterval(n.timer)
            })), (e, l) => (a(), t("div", null, [o(xe, {
                inputPass: n.isInputPass
            }, null, 8, ["inputPass"]), o(g(P), {
                onSubmit: l[6] || (l[6] = w((() => {}), ["prevent"])),
                size: "default",
                model: r,
                ref_key: "refLoginForm",
                ref: c,
                "label-position": "right"
            }, {
                default: f((() => [o(g(D), {
                    prop: "email",
                    rules: {
                        required: !0,
                        type: "email",
                        message: "邮箱格式不正确"
                    }
                }, {
                    default: f((() => [i("div", Le, [o(g(K), {
                        autocomplete: "off",
                        maxlength: "40",
                        modelValue: r.email,
                        "onUpdate:modelValue": l[0] || (l[0] = e => r.email = e),
                        modelModifiers: {
                            trim: !0
                        },
                        placeholder: "请输入邮箱"
                    }, null, 8, ["modelValue"]), o(g(M), {
                        style: {
                            width: "90px"
                        },
                        type: "primary",
                        class: "ml5",
                        disabled: g(d) || "获取验证码" != n.timerText,
                        onClick: u
                    }, {
                        default: f((() => [v(V(n.timerText), 1)])),
                        _: 1
                    }, 8, ["disabled"])])])),
                    _: 1
                }), o(g(D), {
                    prop: "verifyKey",
                    rules: {
                        required: !0,
                        message: "验证码不能为空"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        autocomplete: "off",
                        maxlength: "6",
                        modelValue: r.verifyKey,
                        "onUpdate:modelValue": l[1] || (l[1] = e => r.verifyKey = e),
                        placeholder: "请输入6位邮箱验证码"
                    }, null, 8, ["modelValue"])])),
                    _: 1
                }), o(g(D), {
                    prop: "username",
                    rules: {
                        required: !0,
                        message: "请输入用户名"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        autocomplete: "off",
                        maxlength: "18",
                        modelValue: r.username,
                        "onUpdate:modelValue": l[2] || (l[2] = e => r.username = e),
                        modelModifiers: {
                            trim: !0
                        },
                        placeholder: "请输入用户名"
                    }, null, 8, ["modelValue"])])),
                    _: 1
                }), o(g(D), {
                    prop: "password",
                    rules: {
                        required: !0,
                        message: "密码不能为空"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        autocomplete: "off",
                        maxlength: "20",
                        "show-password": "",
                        type: "password",
                        onFocus: l[3] || (l[3] = e => n.isInputPass = !0),
                        onBlur: l[4] || (l[4] = e => n.isInputPass = !1),
                        modelValue: r.password,
                        "onUpdate:modelValue": l[5] || (l[5] = e => r.password = e),
                        placeholder: "请输入8-18密码"
                    }, null, 8, ["modelValue"])])),
                    _: 1
                }), o(S, {
                    size: "large",
                    round: "",
                    loading: n.loading,
                    onClick: h,
                    type: "primary",
                    class: "wfull"
                }, {
                    default: f((() => [v("立即注册 ")])),
                    _: 1
                }, 8, ["loading"])])),
                _: 1
            }, 8, ["model"])]))
        }
    }, [
        ["__file", "D:/gitee/new-tab/src/views/Login/register.vue"]
    ]),
    De = "" + new URL("../login/wechat.svg",
        import.meta.url).href,
    Pe = e => (c("data-v-80d62518"), e = e(), d(), e),
    ze = {
        class: "login-wechat ac"
    },
    Ee = Pe((() => i("img", {
        class: "wechat-logo",
        src: De
    }, null, -1))),
    Ue = Pe((() => i("p", null, "微信登录", -1))),
    Fe = {
        class: "wechat-qrcode"
    },
    Se = Pe((() => i("p", {
        class: "ac mb20"
    }, [v(" 打开微信 "), i("b", {
        calss: "b"
    }, "扫一扫"), v("， "), i("b", {
        calss: "b"
    }, "关注公众号"), v("后即可登录/注册 ")], -1))),
    Be = Pe((() => i("p", {
        class: "ac mt20 f16"
    }, [i("b", null, "绑定邮箱")], -1))),
    Re = {
        class: "login-tabs d-flex ac mb10"
    },
    Ke = ["onClick"],
    Me = {
        class: "ar",
        style: {
            margin: "-15px 0 10px 0"
        }
    },
    Oe = {
        key: 0,
        class: "d-main f12",
        target: "_blank",
        href: "https://codelife.cc/account/pass?type=find"
    },
    He = {
        name: "wechat-login"
    },
    Qe = s(Object.assign(He, {
        emits: ["loginThird"],
        setup(e, {
            emit: l
        }) {
            const s = m([{
                    name: "绑定老用户",
                    key: "old"
                }, {
                    name: "绑定新用户",
                    key: "new"
                }]),
                c = p({
                    loading: !1,
                    isQRcodeExpire: !1
                }),
                d = p({
                    img: "",
                    ticket: ""
                }),
                y = m(!1),
                _ = p({
                    email: "",
                    password: "",
                    wechatOpenid: "",
                    userType: "old"
                });
            let x = null,
                I = 0;

            function j() {
                x && clearInterval(x), c.isQRcodeExpire = !1, x = setInterval((() => {
                    d.ticket && (I += 2, I > 60 && (clearInterval(x), I = 0, c.isQRcodeExpire = !0), ((e = {}) => F.get("/user/wechatLogin/info", {
                        params: e
                    }))({
                        ticket: d.ticket
                    }).then((e => {
                        e.data.success && (clearInterval(x), e.token ? l("loginThird", e) : (_.wechatOpenid = e.data.wechat_openid, N.confirm("是否绑定邮箱?", {
                            confirmButtonText: "是的",
                            cancelButtonText: "不绑定",
                            center: !0
                        }).then((() => {
                            y.value = !0
                        })).catch((() => {
                            A("skip")
                        }))))
                    })))
                }), 2e3), F.get("/user/wechat/qrcode").then((e => {
                    let a = e.data || {};
                    d.img = a.img, d.ticket = a.ticket
                }))
            }
            j(), k((() => {
                x && clearInterval(x)
            }));
            const A = e => {
                c.loading = !0;
                let a = { ..._
                };
                a.from = "wechat", "skip" == e ? (a.email = "", a.userType = "skip", a.password = "") : a.password = me(_.password), ((e = {}) => F.post("/user/wechatBindEmail", e))(a).then((e => {
                    200 == e.code && l("loginThird", e)
                })).finally((() => {
                    c.loading = !1
                }))
            };
            return (e, l) => (a(), t("div", ze, [T(i("span", null, [Ee, Ue, i("div", Fe, [T(i("span", {
                onClick: l[0] || (l[0] = e => j()),
                class: "wechat-qrcode-refresh d-icon"
            }, [o(g(Q))], 512), [
                [C, c.isQRcodeExpire]
            ]), o(g(J), {
                class: "wechat-ticket",
                alt: "加载二维码",
                src: d.img
            }, null, 8, ["src"])]), b(' <img class="wechat-ticket" alt="加载二维码" :src="wechatRrcode.img" /> '), Se], 512), [
                [C, !y.value]
            ]), T(i("span", null, [Be, i("ul", Re, [(a(!0), t(n, null, r(s.value, (e => (a(), t("li", {
                class: u(["d-cell", {
                    active: _.userType === e.key
                }]),
                key: e.key,
                onClick: a => _.userType = e.key
            }, V(e.name), 11, Ke)))), 128))]), o(g(P), {
                onSubmit: l[3] || (l[3] = w((() => {}), ["prevent"])),
                size: "large",
                model: _,
                ref: "refLoginForm",
                "label-position": "right"
            }, {
                default: f((() => [o(g(D), {
                    prop: "email",
                    rules: {
                        required: !0,
                        type: "email",
                        message: "邮箱格式不正确"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        "prefix-icon": g(le),
                        maxlength: "40",
                        modelValue: _.email,
                        "onUpdate:modelValue": l[1] || (l[1] = e => _.email = e),
                        placeholder: "请输入邮箱"
                    }, null, 8, ["prefix-icon", "modelValue"])])),
                    _: 1
                }), o(g(D), {
                    prop: "password",
                    rules: {
                        required: !0,
                        message: "密码不能为空"
                    }
                }, {
                    default: f((() => [o(g(K), {
                        onKeydown: h(A, ["enter"]),
                        maxlength: "20",
                        "show-password": "",
                        "prefix-icon": g(Z),
                        type: "password",
                        modelValue: _.password,
                        "onUpdate:modelValue": l[2] || (l[2] = e => _.password = e),
                        placeholder: "请输入6-18位密码"
                    }, null, 8, ["onKeydown", "prefix-icon", "modelValue"])])),
                    _: 1
                }), i("div", Me, ["old" == _.userType ? (a(), t("a", Oe, "忘记密码")) : b("v-if", !0)]), o(g(M), {
                    round: "",
                    onClick: A,
                    type: "primary",
                    class: "mt10 mb20 wfull",
                    loading: c.loading
                }, {
                    default: f((() => [v("立即登录")])),
                    _: 1
                }, 8, ["loading"])])),
                _: 1
            }, 8, ["model"])], 512), [
                [C, y.value]
            ])]))
        }
    }), [
        ["__scopeId", "data-v-80d62518"],
        ["__file", "D:/gitee/new-tab/src/views/Login/wechatLogin.vue"]
    ]),
    Je = {
        class: "app-login hfull"
    },
    Ne = {
        class: "login-tabs d-flex b ac mb10"
    },
    We = ["onClick"],
    Ge = {
        class: "login-tip ac"
    },
    Xe = {
        key: 0,
        class: "mt5"
    },
    Ye = {
        class: "pl30 pr30 mb30"
    },
    Ze = {
        class: "ac mt5"
    },
    $e = s({
        __name: "index",
        props: {
            type: String
        },
        setup(e) {
            const s = e,
                c = I(),
                d = m(s.type),
                p = m(null),
                h = m([{
                    name: "扫码登录",
                    key: "scan"
                }, {
                    name: "其他方式登录",
                    key: "other"
                }]),
                w = m("scan");
            const y = e => {
                p.value.loginSuccess(e)
            };

            function _() {
                c.onClose()
            }
            return (e, s) => (a(), l(g(q), {
                top: "10vh",
                class: "login-dialog",
                "close-on-press-escape": !1,
                "close-on-click-modal": !1,
                width: "420px"
            }, {
                default: f((() => [i("div", Je, [i("ul", Ne, [(a(!0), t(n, null, r(h.value, (e => (a(), t("li", {
                    class: u(["d-cell", {
                        active: w.value === e.key
                    }]),
                    key: e.key,
                    onClick: a => w.value = e.key
                }, V(e.name), 11, We)))), 128))]), b(' <h2 class="b f18 ac">欢迎使用iTab</h2> '), b(" 微信登录 "), T(o(Qe, {
                    onLoginThird: y
                }, null, 512), [
                    [C, "scan" == w.value]
                ]), b(" 其他方式登陆 "), T(i("span", null, [i("div", Ge, [b(' iTab可以使用\r\n        <a\r\n          class="b"\r\n          style="color: #0a79e1"\r\n          href="https://codelife.cc/"\r\n          target="_blank"\r\n        >codelife.cc</a>\r\n          账号登录'), "firefox" == g(O)() ? (a(), t("p", Xe, "火狐暂不支持第三方登录")) : b("v-if", !0)]), i("div", Ye, [T(o(Ae, {
                    ref_key: "loginRef",
                    ref: p,
                    onClose: _
                }, null, 512), [
                    [C, "login" == d.value]
                ]), T(o(qe, {
                    onClose: _
                }, null, 512), [
                    [C, "reg" == d.value]
                ]), b(' <div v-loading="state.loading" class="ac" v-if="loginType == \'login\'">\r\n          还没有账号？\r\n          <el-button type="text" @click="loginHandle(\'reg\')">立即注册</el-button>\r\n          </div>'), o(be, {
                    onLoginThird: y
                }), i("div", Ze, [v(V("login" == d.value ? "还没有账号" : " 已有账号？") + " ", 1), o(g(M), {
                    text: "",
                    onClick: s[0] || (s[0] = e => {
                        return a = "reg" == d.value ? "login" : "reg", void(d.value = a);
                        var a
                    })
                }, {
                    default: f((() => [v("立即" + V("login" == d.value ? "注册" : "登录"), 1)])),
                    _: 1
                })])])], 512), [
                    [C, "other" == w.value]
                ])])])),
                _: 1
            }))
        }
    }, [
        ["__scopeId", "data-v-374a0b31"],
        ["__file", "D:/gitee/new-tab/src/views/Login/index.vue"]
    ]),
    ea = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $e
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aa = e => {
        j((() => Promise.resolve().then((() => ea))), void 0,
            import.meta.url).then((a => {
            const l = A($e, {
                modelValue: !0,
                type: e,
                onClose: () => {
                    setTimeout((() => {
                        L(null, document.body)
                    }), 300)
                }
            });
            L(l, document.body)
        }))
    };
export {
    aa as c
};