import {
    a as e,
    f as s,
    _ as a,
    u as i,
    z as t,
    l,
    c as n,
    g as o,
    Q as c,
    w as r,
    R as u,
    o as d,
    b as m,
    h as p,
    j as h,
    i as k,
    K as y,
    L as f,
    q as _,
    k as g,
    e as v,
    x as w,
    n as b,
    C as x,
    J as I,
    m as S,
    s as V,
    t as E,
    A as R,
    B as A
} from "./el-select.e274bb48.js";
import {
    u as j,
    g as L,
    d as T,
    a0 as C,
    o as P,
    $ as q,
    c as B,
    a1 as D
} from "./main.354a692e.js";
import {
    gridsumAnalytics as O,
    googleAnalytics as K
} from "./statistics.a738debd.js";
import {
    useStatisticsApi as $
} from "./useSta.b98c784e.js";
import {
    a as H
} from "./axios.91e25212.js";
import "./baseRequest.b881af11.js";
import "./version.8d34b113.js";
const W = e => (R("data-v-5a67dd99"), e = e(), A(), e),
    z = {
        class: "se-list-keyword"
    },
    U = ["onClick", "title"],
    J = ["onClick"],
    Q = ["src"],
    F = {
        class: "d-elip se-item-title"
    },
    G = {
        class: "se-item-icon",
        style: {
            color: "var(--primary-color)"
        }
    },
    M = {
        class: "f18 d-icon",
        size: 18
    },
    N = W((() => p("p", {
        class: "d-elip se-item-title"
    }, "添加", -1))),
    X = {
        key: 0,
        class: "req-baidu-per"
    },
    Y = W((() => p("span", {
        class: "f13 d-block"
    }, "授权开启联想搜索，搜索时将显示联想词。iTab不会获取您的任何数据，建议您授权", -1))),
    Z = {
        class: "se-keyword-icon d-icon f16"
    },
    ee = ["onClick", "data-index"],
    se = {
        class: "se-keyword-icon d-icon f16",
        size: 16
    },
    ae = {
        class: "d-cell d-elip"
    },
    ie = ["onClick"],
    te = {
        name: "HomeSearchSuggest"
    },
    le = e(Object.assign(te, {
        props: {
            currSearch: {
                type: Object,
                default: {}
            }
        },
        emits: ["selectSearch", "selectSug"],
        setup(e, {
            expose: R,
            emit: A
        }) {
            const W = e,
                te = s((() => a((() =>
                        import ("./Close.c9346f3b.js")), ["./Close.c9346f3b.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                le = s((() => a((() =>
                        import ("./main.354a692e.js").then((e => e.af))), ["./main.354a692e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.6190cf91.css"],
                    import.meta.url))),
                ne = s((() => a((() =>
                        import ("./AccessTimeRound.fa407395.js").then((e => e.A))), ["./AccessTimeRound.fa407395.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                oe = s((() => a((() =>
                        import ("./TranslateRound.6288cc78.js").then((e => e.T))), ["./TranslateRound.6288cc78.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                ce = s((() => a((() =>
                        import ("./index.534437f3.js")), ["./index.534437f3.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.ca3d31b2.js", "./index.d235e992.js", "./index.8720847e.js", "./index.4e5ff846.js", "./icon.8b835c88.js"],
                    import.meta.url)));
            j();
            const re = i(),
                ue = s((() => a((() =>
                        import ("./HomeSearchList.c2da49e9.js")), ["./HomeSearchList.c2da49e9.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./el-checkbox.7cab41d0.js", "./index.8720847e.js", "./index.d235e992.js", "./hasIn.0ceeb413.js", "./_arrayPush.949d1e07.js", "./flatten.65ace828.js", "./_baseFlatten.1b8a9a9c.js", "./_overRest.86a13aad.js", "./identity.737b3aaf.js", "./el-checkbox.aec27a4a.css", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./HomeSearchList.c5356a34.css", "./el-overlay.f6b2674f.css", "./el-checkbox-group.987ef89c.css"],
                    import.meta.url)));
            let de = H.CancelToken;
            const me = t({
                value: "",
                engienVisible: !1,
                showKeyWord: !1,
                keyList: [],
                value: "",
                keyIndex: -1,
                searchVisible: !1,
                isReqBaiduSgPer: !0
            });

            function pe(e) {
                if (l.set("isAuthBaidu", e), "0" === e) return me.isReqBaiduSgPer = !1, void a((() =>
                        import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
                    import.meta.url).then((e => {
                    e.default.warning("如果想开启搜索建议, 在空白处右键-设置-搜索栏-开启搜索建议 即可")
                }));
                chrome && chrome.permissions.request({
                    origins: ["https://www.baidu.com/"]
                }, (e => {
                    e && (me.isReqBaiduSgPer = !1, console.log("获取baidu权限成功"))
                }))
            }
            L() || "safari" == T() || "firefox" == T() || C ? me.isReqBaiduSgPer = !1 : chrome && chrome.permissions.contains({
                origins: ["https://www.baidu.com/"]
            }, (e => {
                me.isReqBaiduSgPer = !e, e && l.set("isAuthBaidu", "1"), "0" === l.get("isAuthBaidu") && (me.isReqBaiduSgPer = !1)
            }));
            const he = n((() => re.value.search.history && !me.value));
            let ke = o(l.get("searchHistory") || []);
            a((() =>
                    import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                import.meta.url).then((e => {
                e.default.get("searchHistory").then((e => {
                    ke.value = e || ke.value
                }))
            }));
            const ye = n((() => me.value ? me.keyList || [] : re.value.search.history ? ke.value : []));
            const fe = n((() => {
                let e = ye.value.length;
                return me.value && e++, 30 * e + "px"
            }));

            function _e(e) {
                q(".se-input-box").contains(e.target) || (me.showKeyWord = !1, me.engienVisible = !1)
            }
            c((() => {
                P(q("#searchInput"), "input", ve), P(q("#searchInput"), "keydown", we), P(q("#searchInput"), "click", (() => {
                    me.showKeyWord = !0, me.engienVisible = !1
                })), P(q("#selectEngine"), "click", (e => {
                    me.engienVisible = !me.engienVisible
                })), P(document, "click", _e)
            })), r((() => me.showKeyWord), (e => {
                e && O("i", {
                    gscmd: "impress",
                    gid: "gad_545_isw11x5k",
                    ck: 1113,
                    adk: 11029
                })
            })), u((() => {
                B(q("#searchInput"), "input", ve), B(q("#searchInput"), "keydown", we), B(document, "click", _e)
            }));
            let ge = null;

            function ve(e) {
                if (me.value = e.target.value, me.value) {
                    if (me.showKeyWord = !0, me.keyIndex = -1, L() || "safari" == T() || "firefox" == T() || C) {
                        const e = de.source();
                        return ge && (ge.cancel("取消请求"), ge = null), ge = e, void H.get(`https://api.codelife.cc/api/baidu_sugrec/${me.value}`, {
                            cancelToken: e.token
                        }).then((e => {
                            let s = e.data;
                            me.keyList = (s.g || []).map((e => e.q))
                        }))
                    } {
                        ge && (ge.abort(), ge = null);
                        const e = new AbortController,
                            {
                                signal: s
                            } = e;
                        ge = e;
                        let a = l.get("isAuthBaidu");
                        if (!a || "0" === a) return;
                        fetch(`https://www.baidu.com/sugrec?&prod=pc&wd=${me.value}`, {
                            signal: s
                        }).then((e => e.json())).then((e => {
                            let s = e.g || [];
                            s = s.map((e => e.q)), me.keyList = s, ge = null
                        }))
                    }
                } else me.keyList = []
            }

            function we(e) {
                let s = e.code;
                ["ArrowDown", "ArrowUp"].includes(s) ? be(e) : "Tab" === s && function(e) {
                    e.preventDefault();
                    let s = re.value.useSearch || "baidu",
                        a = re.value.searchEngine.findIndex((e => e.key == s)),
                        i = (re.value.searchEngine || []).length;
                    a += 1, a >= i && (a = 0);
                    let t = re.value.searchEngine[a];
                    re.value.useSearch = t.key, A("selectSearch", t)
                }(e)
            }

            function be(e) {
                let s = e.code;
                "ArrowDown" === s ? (me.keyIndex++, me.keyIndex >= 11 && (me.keyIndex = 0)) : "ArrowUp" === s && (e.preventDefault(), me.keyIndex--, me.keyIndex <= 0 && (me.keyIndex = 10)), me.keyIndex > 0 && A("selectSug", me.keyList[me.keyIndex - 1])
            }

            function xe(e, s, i) {
                if (i && 229 == i.keyCode) return;
                !async function(e) {
                    if (e) {
                        ke.value.unshift(e), ke.value = [...new Set(ke.value)], ke.value = ke.value.splice(0, 10);
                        let s = await a((() =>
                                import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                            import.meta.url);
                        s = s.default, s.set("searchHistory", ke._rawValue)
                    }
                }(e), e = encodeURIComponent(e);
                let t = `${W.currSearch.href}${e} `,
                    l = W.currSearch.key;
                if ("douyin" == l && (t += "?ug_source=iTab_ssrk"), 0 === me.keyIndex || "fanyi" == s) {
                    let s = re.value.search.translate || "https://translate.volcengine.com/translate";
                    s.includes("//translate.volcengine.com") ? (O("c", {
                        gid: "gad_545_isw11x5k",
                        ck: 1113,
                        adk: 11029
                    }), t = `https://translate.volcengine.com/translate?text=${e}&from=itab`) : t = `${s}${e}`, l = `翻译-${s}`
                }
                K({
                    t: "event",
                    ec: l,
                    ea: "use",
                    el: "search"
                }), $({
                    name: l
                }), me.showKeyWord = !1;
                let n = re.value.open && re.value.open.searchBlank ? "_blank" : "_self";
                document.body.clientWidth < 600 && t.includes("www.baidu.com") && (t = t.replace("www", "m")), window.open(t, n), setTimeout((() => {
                    A("selectSug", ""), me.keyList = [], me.value = ""
                }), 500)
            }
            return R({
                searchHandle: xe
            }), (s, i) => (d(), m(y, null, [p("div", z, [h(" 搜索引擎切换 "), p("ul", {
                class: k(["se-all", {
                    action: me.engienVisible
                }])
            }, [(d(!0), m(y, null, f(v(re).searchEngine, ((s, a) => (d(), m("li", {
                onClick: _((e => {
                    return A("selectSearch", a = s), me.engienVisible = !1, void(re.value.useSearch = a.key);
                    var a
                }), ["stop"]),
                class: "se-item",
                key: s.key,
                title: s.title
            }, [0 !== a ? (d(), m("i", {
                key: 0,
                title: "删除",
                onClick: _((e => function(e) {
                    re.value.searchEngine.splice(e, 1)
                }(a)), ["stop"]),
                class: "f12 d-icon se-item-del"
            }, [g(v(te))], 8, J)) : h("v-if", !0), p("span", {
                class: k(["se-item-icon", {
                    action: s.key == e.currSearch.key
                }])
            }, [p("img", {
                class: "search-icon",
                src: `https://files.codelife.cc/itab/search/${s.key}.svg`
            }, null, 8, Q)], 2), p("p", F, w(s.title), 1)], 8, U)))), 128)), p("li", {
                key: "add",
                onClick: i[0] || (i[0] = _((e => me.searchVisible = !0), ["stop"])),
                class: "se-item",
                title: "添加"
            }, [p("span", G, [p("i", M, [g(v(le))])]), N])], 2), h(" 联想搜索面板 "), me.showKeyWord ? (d(), m("ul", {
                key: 0,
                class: k(["se-keyword al", {
                    isReqBaidu: me.isReqBaiduSgPer
                }]),
                style: b([{
                    height: v(fe)
                }])
            }, [h(" 百度搜索联想词授权 "), me.isReqBaiduSgPer ? (d(), m("div", X, [x(" 开启联想词搜索建议 "), Y, p("p", null, [g(v(ce), {
                size: "small",
                onClick: i[1] || (i[1] = e => pe("0"))
            }, {
                default: I((() => [x("取消")])),
                _: 1
            }), g(v(ce), {
                size: "small",
                type: "primary",
                onClick: i[2] || (i[2] = e => pe("1"))
            }, {
                default: I((() => [x("授权")])),
                _: 1
            })])])) : h("v-if", !0), p("li", {
                onClick: i[3] || (i[3] = _((e => xe(me.value || v(ye)[0], "fanyi")), ["stop"])),
                class: k(["se-keyword-item d-elip item-fanyi", {
                    focus: 0 === me.keyIndex
                }]),
                onKeydown: be
            }, [p("i", Z, [g(v(oe))]), p("span", null, w(me.value || v(ye)[0]), 1)], 34), (d(!0), m(y, null, f(v(ye), ((e, s) => (d(), m("li", {
                onClick: _((s => xe(e)), ["stop"]),
                class: k(["se-keyword-item d-elip d-flex-y", {
                    focus: me.keyIndex == s + 1
                }]),
                key: e,
                "data-index": s + 1
            }, [p("i", se, [S(g(v(ne), null, null, 512), [
                [V, !me.value]
            ]), S(g(v(D), null, null, 512), [
                [V, me.value]
            ])]), p("span", ae, w(e), 1), v(he) ? (d(), m("i", {
                key: 0,
                onClick: _((e => async function(e) {
                    ke.value.splice(e, 1), ke.value = ke.value;
                    let s = await a((() =>
                            import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                        import.meta.url);
                    s = s.default, s.set("searchHistory", ke._rawValue)
                }(s)), ["stop"]),
                class: "se-history-del d-icon f16",
                size: 16
            }, [g(v(te))], 8, ie)) : h("v-if", !0)], 10, ee)))), 128))], 6)) : h("v-if", !0)]), me.searchVisible ? (d(), E(v(ue), {
                key: 0,
                modelValue: me.searchVisible,
                "onUpdate:modelValue": i[4] || (i[4] = e => me.searchVisible = e)
            }, null, 8, ["modelValue"])) : h("v-if", !0)], 64))
        }
    }), [
        ["__scopeId", "data-v-5a67dd99"],
        ["__file", "D:/gitee/new-tab/src/views/HomeSearchSuggest.vue"]
    ]);
export {
    le as
    default
};