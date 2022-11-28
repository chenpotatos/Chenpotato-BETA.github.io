var e, t, a, l = (e, t, a) => (((e, t, a) => {
    if (!t.has(e)) throw TypeError("Cannot " + a)
})(e, t, "access private method"), a);
import {
    u as n,
    w as i,
    l as o,
    _ as s,
    d as r,
    a as c,
    c as u,
    o as d,
    b as p,
    n as m,
    e as f,
    r as _,
    f as v,
    g,
    h,
    i as y,
    j as b,
    k as w,
    m as x,
    v as k,
    p as E,
    q as D,
    s as I,
    t as O,
    x as z,
    y as T,
    z as A,
    A as L,
    B as P,
    C,
    D as S,
    E as R,
    F as j,
    G as M,
    H as V,
    I as N,
    J as $,
    K as F,
    L as Y,
    T as H,
    M as U,
    N as W,
    O as B,
    P as q,
    Q as G,
    R as X,
    S as Q,
    U as J,
    V as K,
    W as Z,
    X as ee,
    Y as te,
    Z as ae,
    $ as le,
    a0 as ne,
    a1 as ie,
    a2 as oe,
    a3 as se,
    a4 as re,
    a5 as ce,
    a6 as ue,
    a7 as de,
    a8 as pe
} from "./el-select.e274bb48.js";
const me = n().value.wallpaper || {};

function fe(e, t) {
    if (0 == t.type || 1 == t.type || 4 == t.type) e.style = `background-image:url(${t.src})`, e.firstChild && e.removeChild(e.firstChild);
    else if (3 == t.type) e.firstChild && e.removeChild(e.firstChild), e.style = `background-color:${t.src}`;
    else if (2 == t.type) {
        e.style.background = "none";
        let a = e.querySelector("video");
        if (a) a.scr = t.src, a.setAttribute("poster", t.thumb), a.setAttribute("src", t.src);
        else {
            const a = document.createElement("video");
            a.setAttribute("class", "wallpaper-video"), a.autoplay = "autoplay", a.muted = !0, a.loop = "loop", a.poster = t.thumb, a.src = t.src, e.append(a)
        }
    }
    if (3 != t.type) {
        !async function(e) {
            if (e && e.includes("files.codelife")) return document.body.style.setProperty("--img-bg", "34,34,34"), document.body.style.setProperty("--img-text", "233,233,233"), void o.set("sidebarColor", {
                bg: "34,34,34",
                text: "233,233,233"
            });
            try {
                let a = await s((() =>
                        import ("./rgbaster.0a390c88.js")), [],
                    import.meta.url);
                let l = (await a.default(e, {
                    ignore: ["rgb(255,255,255)", "rgb(0,0,0)"],
                    scale: .2
                }))[0].color;
                l = l.replace("rgb(", "").replace(")", "").split(","), document.body.style.setProperty("--img-bg", l);
                var t = .213 * l[0] + .715 * l[1] + .072 * l[2];
                let n = "34, 34, 34";
                t < 127.5 && (n = "233,233,233"), o.set("sidebarColor", {
                    bg: l,
                    text: n
                }), document.body.style.setProperty("--img-text", n)
            } catch (a) {
                console.log("图片加载失败", a)
            }
        }(2 == t.type ? t.thumb : t.src)
    } else document.body.style.setProperty("--img-bg", "34,34,34"), document.body.style.setProperty("--img-text", "233,233,233")
}
class _e extends HTMLElement {
    constructor() {
        super(), ((e, t, a) => {
            if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
            t instanceof WeakSet ? t.add(e) : t.set(e, a)
        })(this, e), l(this, e, t).call(this)
    }
    set wallpaper(e) {
        fe(this.bgEl, e)
    }
    connectedCallback() {
        this.bgEl = this.shadowRoot.querySelector(".wallpaper"), i((() => n().value.wallpaper.src), (e => {
            ve(this.bgEl, n().value.wallpaper)
        }), {
            deep: !0
        })
    }
}
e = new WeakSet, t = function() {
    const e = this.attachShadow({
            mode: "open"
        }),
        t = document.createElement("div");
    t.setAttribute("class", "wallpaper"), fe(t, me);
    const a = document.createElement("style");
    a.textContent = "\n        .wallpaper{\n            position: absolute;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            transition:background-image .3s,background-color .2s,transform .3s;\n            background-size: cover;\n            background-position: 50%;\n            z-index:0;\n        }\n        .wallpaper.change {\n            transform:scale(1.1)\n        }\n        .wallpaper:after{\n            content:'';\n            position:absolute;\n            left:0;\n            top:0;\n            width:100%;\n            height:100%;\n            backdrop-filter:blur(var(--wall-blur));\n            background-color:rgba(0,0,0,var(--wall-mask));\n        }\n        .wallpaper .wallpaper-video{\n            position: relative;\n            height: 100%;\n            width: 100%;\n            object-fit: cover;\n            transition: .3s;\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-position: center;\n        }\n        ", e.append(t), e.append(a)
};
const ve = (e, t) => {
    if (3 != t.type && 2 != t.type) return s((() =>
            import ("./index.466a8266.js").then((e => e.i))), ["./index.466a8266.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css"],
        import.meta.url).then((e => {
        e.dToast("切换中...", "loading")
    })), e.classList.add("change"), new Promise(((a, l, i = !0) => {
        let o = new Image;
        o.src = t.src, o.addEventListener("load", (function() {
            fe(e, t), e.classList.remove("change"), s((() =>
                    import ("./index.466a8266.js").then((e => e.i))), ["./index.466a8266.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css"],
                import.meta.url).then((e => {
                e.dToast("切换成功", "check")
            })), a()
        })), o.addEventListener("error", (function() {
            e.classList.remove("change"), s((() =>
                    import ("./wallpaper.7bf4d1cf.js")), ["./wallpaper.7bf4d1cf.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                import.meta.url).then((e => {
                e.randomWallpaperApi().then((e => {
                    let t = e.data || "";
                    n().value.wallpaper.src = t || "", n().value.wallpaper.thumb = e.thumb || "", n().value.wallpaper.type = 1, s((() =>
                            import ("./save_config.cbe33c4d.js")), ["./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js"],
                        import.meta.url).then((e => {
                        e.SAVE_CONFIG("baseConfig")
                    }))
                }))
            })), s((() =>
                    import ("./index.466a8266.js").then((e => e.i))), ["./index.466a8266.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css"],
                import.meta.url).then((e => {
                e.dToast("切换失败", "check")
            })), l()
        }))
    }));
    fe(e, t)
};
customElements.define("itab-wallpaper", _e), document.body.appendChild(new _e({}));
const ge = document.body.clientWidth < 600,
    he = !!("ontouchstart" in window),
    ye = () => window.location.protocol.includes("http"),
    be = () => {
        var e = window.navigator.userAgent.toLowerCase();
        return e.indexOf("firefox") > 0 ? "firefox" : e.indexOf("edg") > 0 ? "edge" : e.indexOf("chrome/") > 0 ? "chrome" : e.indexOf("safari/") > 0 ? "safari" : "other"
    },
    we = Object.freeze(Object.defineProperty({
        __proto__: null,
        isMobile: ge,
        isTouch: he,
        isBrowser: ye,
        browserName: be
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xe = ["日", "一", "二", "三", "四", "五", "六"],
    ke = n();
let Ee = null;
class De extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({
            mode: "open"
        }).innerHTML = `<style>:host {\n            user-select: none;\n            text-align:center;\n            -webkit-user-select: none;\n            color: var(--time-color, "#fff");\n        }\n        .app-date-box{\n            font-family:auto;\n        }\n        .app-date {\n            font-size: 14px;\n            line-height: 26px;\n            opacity: 0.88;\n            margin-top:-3px;\n            text-shadow: 0 2px 4px rgb(0 0 0 / 16%);\n        \n        }\n        \n        .app-date span {\n            margin: 0 2px;\n        }\n        \n        .app-date .time-month {\n            display: var(--time-month);\n        }\n        \n        \n        .app-date .time-week {\n            display: var(--time-week);\n        }\n        \n        .app-date .time-lunar {\n            display: var(--time-lunar);\n        }\n        \n       .app-time {\n            font-size: var(--time-size);\n            font-family: var(--time-font);\n            user-select: none;\n            font-weight: var(--time-fontWeight);\n            text-shadow: 0 2px 6px rgb(0 0 0 / 16%);\n            display: inline-block;\n            line-height:var(--time-size);\n            transition:font .2s;\n        }\n        .app-time.fontFamily-align .colon{\n            vertical-align: unset !important;\n        }\n        .app-time .colon{\n            vertical-align:calc(var(--time-size) / 12)\n        }\n        .app-time .sec{\n            display: var(--time-sec);\n        }\n        </style>\n        <div class="app-date-box ac" style:"font-family:auto;" >\n        <div class="app-time">\n            <time class="hh">${this.HH}</time><span class="colon">:</span><time class="mm">${this.mm}</time><span class="colon" style="display:var(--time-sec);" >:</span><span class="sec">${this.ss}</span>\n        </div>\n        <div class="app-date">\n          <span class="time-month">${this.month}</span>\n          <span class="time-week">星期${this.week}</span>\n          <span class="time-lunar">${this.lunar}</span>\n        </div>\n      </div>`
    }
    get HH() {
        let e = ke.value.time.hour24 ? "HH" : "h";
        return r().format(e)
    }
    get mm() {
        return r().format("mm")
    }
    get ss() {
        return r().format("ss")
    }
    get month() {
        return r().format("MM月DD日")
    }
    get week() {
        return xe[r().day()]
    }
    get lunar() {
        let e = o.get("lunarDate") || "";
        return `${e.split(",")[0]}月${e.split(",")[1]||""}`
    }
    connectedCallback() {
        Ee && clearTimeout(Ee), this.time = this.shadowRoot.querySelector(".app-time"), this.timeHH = this.shadowRoot.querySelector(".app-time .hh"), this.timeMm = this.shadowRoot.querySelector(".app-time .mm"), this.timeS = this.shadowRoot.querySelector(".app-time .sec"), this.timeMonth = this.shadowRoot.querySelector(".time-month"), this.timeWeek = this.shadowRoot.querySelector(".time-week"), this.timeLunar = this.shadowRoot.querySelector(".time-lunar");
        ["BungeeHairline", "inherit", "Silkscreen", "Merriweather"].includes(ke.value.time.font) && this.time.classList.add("fontFamily-align"), Ee = setInterval((async () => {
            let e = ke.value.time.hour24 ? "HH" : "h",
                t = r();
            this.timeHH.textContent = t.format(e), this.timeMm.textContent = t.format("mm"), ke.value.time.sec && (this.timeS.textContent = t.format("ss"));
            let a = t.format("YYYYMMDD");
            if (a != (o.get("lunarDate") || "").split(",")[2]) {
                let {
                    Lunar: e
                } = await s((() =>
                        import ("./index.c210f77a.js").then((e => e.i))), ["./index.c210f77a.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url), l = e.fromDate(new Date), n = l.getMonthInChinese(), i = l.getDayInChinese();
                o.set("lunarDate", `${n},${i},${a}`), this.timeMonth.textContent = t.format("MM月DD日"), this.timeWeek.textContent = `星期${xe[t.day()]}`, this.timeLunar.textContent = `${n}月${i}`
            }
        }), 1e3), this.timeBox = this.shadowRoot.querySelector(".app-time"), this.timeBox.addEventListener("click", (async () => {
            let e = await s((() =>
                    import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                import.meta.url);
            e = e.default, await e.get("layoutViewNotice") || s((() =>
                    import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
                import.meta.url).then((t => {
                t.ElMessage({
                    duration: 0,
                    showClose: !0,
                    type: "success",
                    message: "点击时间可以快速切换极简模式/组件模式",
                    center: !0
                }), e.set("layoutViewNotice", 1)
            })), "widget" == ke.value.layout.view ? ke.value.layout.view = "simple" : ke.value.layout.view = "widget"
        }))
    }
    attributeChangedCallback(e, t, a) {}
}
customElements.get("itab-date") || customElements.define("itab-date", De);
const Ie = (e, t) => {
    if (e.theme.system) {
        let t = window.matchMedia("(prefers-color-scheme: dark)").matches;
        e.theme.mode = t ? "dark" : "light"
    }
    if (t) {
        Oe(e);
        const t = o.get("sidebarColor");
        if (!t) return;
        document.body.style.setProperty("--img-bg", t.bg), document.body.style.setProperty("--img-text", t.text)
    } else requestAnimationFrame((() => {
        Oe(e)
    }))
};

function Oe({
    theme: e,
    icon: t,
    layout: a,
    sidebar: l,
    search: n,
    time: i = {},
    wallpaper: o
}) {
    let s = document.documentElement.style;
    s.setProperty("--primary-color", e.color), s.setProperty("--search-height", n.height + "px"), s.setProperty("--search-radius", n.radius + "px"), s.setProperty("--search-bgColor", `rgba(var(--alpha-bg), ${n.bgColor})`), s.setProperty("--icon-radius", t.iconRadius + "px"), s.setProperty("--icon-size", t.iconSize + "px"), s.setProperty("--icon-max-width", `${t.width||1350}${t.unit||"px"}`), s.setProperty("--icon-gap-x", t.iconX + "px"), s.setProperty("--icon-gap-y", t.iconY + "px"), s.setProperty("--icon-opacity", t.opactiy), s.setProperty("--icon-name", t.name ? "block" : "none"), s.setProperty("--icon-nameSize", t.nameSize + "px"), s.setProperty("--icon-nameColor", t.nameColor), s.setProperty("--time-size", i.size + "px"), s.setProperty("--time-font", i.font || "auto"), s.setProperty("--time-color", i.color), s.setProperty("--time-fontWeight", i.fontWeight), s.setProperty("--time-month", i.month), s.setProperty("--time-week", i.week), s.setProperty("--time-lunar", i.lunar), s.setProperty("--time-sec", i.sec ? "inline" : "none"), s.setProperty("--sidebar-width", l.width + "px"), s.setProperty("--sidebar-opacity", l.opacity || .5), s.setProperty("--wall-mask", o.mask), s.setProperty("--wall-blur", o.blur + "px"), 3 == o.type ? s.setProperty("--wall-background", o.src) : s.setProperty("--wall-background", ""), document.querySelector("html").setAttribute("class", e.mode)
}
const ze = c({
    __name: "HomeHeader",
    setup(e) {
        const t = n(),
            a = u((() => t.value.search.show || t.value.time.show ? "margin-top:0vh" : "margin-top:10vh"));
        return (e, l) => (d(), p("div", {
            class: "app-header",
            style: m(`height:${"simple"==f(t).layout.view&&"18vh"};${f(a)}`)
        }, null, 4))
    }
}, [
    ["__scopeId", "data-v-13f94160"],
    ["__file", "D:/gitee/new-tab/src/views/HomeHeader.vue"]
]);
var Te = {};
Object.defineProperty(Te, "__esModule", {
    value: !0
});
const Ae = _,
    Le = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    Pe = [(0, Ae.createElementVNode)("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }, [(0, Ae.createElementVNode)("circle", {
        cx: "10",
        cy: "10",
        r: "7"
    }), (0, Ae.createElementVNode)("path", {
        d: "M21 21l-6-6"
    })], -1)];
var Ce = Te.default = (0, Ae.defineComponent)({
    name: "Search",
    render: function(e, t) {
        return (0, Ae.openBlock)(), (0, Ae.createElementBlock)("svg", Le, Pe)
    }
});
const Se = {
        class: "wfull"
    },
    Re = {
        id: "selectEngine",
        class: "se-select"
    },
    je = ["src"],
    Me = {
        class: "d-icon select-icon-arrow f12"
    },
    Ve = {
        class: "d-icon select-icon f18"
    },
    Ne = {
        size: 20,
        class: "d-icon select-icon f20"
    },
    $e = {
        name: "HomeSearch"
    },
    Fe = c(Object.assign($e, {
        setup(e) {
            const t = n(),
                a = v((() => s((() =>
                        import ("./CaretBottom.eb9794aa.js")), ["./CaretBottom.eb9794aa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                l = v((() => s((() =>
                        import ("./Close.c9346f3b.js")), ["./Close.c9346f3b.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                i = v((() => s((() =>
                        import ("./HomeSearchSuggest.b1f3e1c5.js")), ["./HomeSearchSuggest.b1f3e1c5.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./statistics.a738debd.js", "./useSta.b98c784e.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./HomeSearchSuggest.5364f78f.css"],
                    import.meta.url))),
                o = g(null),
                r = g({}),
                c = g("");

            function u(e) {
                r.value = e
            }

            function m(e) {
                c.value = e
            }

            function _(e, t, a) {
                "clear" != t ? o.value.searchHandle(e, t, a) : c.value = ""
            }
            return setTimeout((() => {
                ! function() {
                    const e = [{
                        key: "baidu",
                        title: "百度",
                        href: "https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd="
                    }, {
                        key: "google",
                        title: "Google",
                        href: "https://www.google.com/search?q="
                    }, {
                        key: "bing",
                        title: "必应",
                        href: "https://www.bing.com/search?q="
                    }, {
                        key: "github",
                        title: "gitHub",
                        href: "https://github.com/search?q="
                    }];
                    let a = t.value.useSearch || "baidu";
                    r.value.key = a, t.value.searchEngine ? r.value = t.value.searchEngine.find((e => e.key == a)) || e[0] : (t.value.searchEngine = e, r.value = e[0])
                }()
            }), 0), (e, t) => (d(), p("div", Se, [h("div", {
                class: "app-serach-box",
                onContextmenu: t[4] || (t[4] = D((() => {}), ["stop"]))
            }, [h("div", {
                class: y(["se-input-box", {
                    active: c.value
                }])
            }, [h("div", Re, [r.value.key ? (d(), p("img", {
                key: 0,
                style: {
                    width: "20px",
                    height: "20px"
                },
                class: "search-icon",
                src: `https://files.codelife.cc/itab/search/${r.value.key}.svg`
            }, null, 8, je)) : b("v-if", !0), h("i", Me, [w(f(a))])]), x(h("input", {
                id: "searchInput",
                autofocus: !0,
                autocomplete: "off",
                "onUpdate:modelValue": t[0] || (t[0] = e => c.value = e),
                class: "se-input",
                maxlength: "63",
                onKeydown: t[1] || (t[1] = E(D((e => _(c.value, null, e)), ["prevent"]), ["enter"])),
                placeholder: "输入并搜索",
                type: "text"
            }, null, 544), [
                [k, c.value, void 0, {
                    trim: !0
                }]
            ]), h("div", {
                class: y(["se-close", {
                    active: c.value
                }]),
                onClick: t[2] || (t[2] = e => _("", "clear"))
            }, [h("i", Ve, [w(f(l))])], 2), h("div", {
                class: "se-select",
                onClick: t[3] || (t[3] = e => _(c.value))
            }, [h("i", Ne, [w(f(Ce))])])], 2), b(" 搜索引擎切换 "), w(f(i), {
                ref_key: "searchSuggestRef",
                ref: o,
                onSelectSearch: u,
                onSelectSug: m,
                currSearch: r.value
            }, null, 8, ["currSearch"])], 32)]))
        }
    }), [
        ["__scopeId", "data-v-c99ddd34"],
        ["__file", "D:/gitee/new-tab/src/views/HomeSearch.vue"]
    ]),
    Ye = c({
        __name: "HomeSearchBox",
        setup(e) {
            const t = n();
            return (e, a) => x((d(), O(Fe, null, null, 512)), [
                [I, null == f(t).search.show || f(t).search.show]
            ])
        }
    }, [
        ["__scopeId", "data-v-fb1f8ecd"],
        ["__file", "D:/gitee/new-tab/src/views/HomeSearchBox.vue"]
    ]),
    He = {
        class: "app-yiyan d-flex-x"
    },
    Ue = {
        class: "app-yiyan-body"
    },
    We = ["onContextmenu"],
    Be = {
        class: "yiyan-from f12 ac"
    },
    qe = c({
        __name: "HomeYiyan",
        setup(e) {
            let t = g(o.get("yiyan") || {});
            async function a(e) {
                let a = await s((() =>
                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                    import.meta.url);
                a = a.default;
                let l = await a.get("yiyan");
                if (!e && l) return;
                (await s((() =>
                        import ("./baseApi.fc01bad0.js")), ["./baseApi.fc01bad0.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url)).apiGetYiyan().then((e => {
                    e = {
                        hitokoto: e.hitokoto,
                        from: e.from,
                        from_who: e.from_who
                    }, t.value = e || {}, o.set("yiyan", e), a.set("yiyan", 1, 6e5)
                }))
            }
            a();
            const l = () => {
                    T(`${t.value.hitokoto} --${t.value.from}`), s((() =>
                            import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
                        import.meta.url).then((e => {
                        e.ElMessage.success("已复制到剪切板")
                    }))
                },
                n = () => {
                    a(!0)
                };
            return (e, a) => (d(), p("div", He, [h("div", Ue, [h("div", {
                class: "yiyan-text f12",
                onClick: l,
                onContextmenu: D(n, ["prevent", "stop"]),
                title: "点击左键复制，右键切换"
            }, "「 " + z(f(t).hitokoto) + " 」", 41, We), h("div", Be, "--" + z(f(t).from) + "-" + z(f(t).from_who), 1)])]))
        }
    }, [
        ["__scopeId", "data-v-955b18c7"],
        ["__file", "D:/gitee/new-tab/src/views/HomeYiyan.vue"]
    ]),
    Ge = A({
        visible: !1,
        data: null
    }),
    Xe = A({
        data: {},
        type: ""
    }),
    Qe = e => {
        Ge.visible = !0, Ge.data = e
    },
    Je = A({
        visible: !1,
        active: 2
    }),
    Ke = A({
        visible: !1,
        component: "",
        type: "",
        data: {}
    }),
    Ze = (e, t = !1) => {
        Ke.visible = !0, Ke.component = e.component, Ke.insetType = e.insetType || "component", Ke.isEdit = t, Ke.row = e
    },
    et = Object.freeze(Object.defineProperty({
        __proto__: null,
        dialogIcon: Ge,
        folderDragData: Xe,
        setDialogIcon: Qe,
        settingHandle: Je,
        dialogApp: Ke,
        setDialogApp: Ze
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    tt = function(e, t, a, l) {
        e && t && a && e.addEventListener(t, a, l)
    },
    at = function(e, t, a) {
        e && t && a && e.removeEventListener(t, a, !1)
    };

function lt(e) {
    return !!e && document.querySelector(e)
}
const nt = (e, t) => {
    const a = e[t];
    return a ? "function" == typeof a ? a() : Promise.resolve(a) : new Promise(((e, a) => {
        ("function" == typeof queueMicrotask ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)))
    }))
};

function it(e, t = 100, a = t) {
    if (!e) return e;
    let l = e && e.includes("?t=") ? "&" : "?";
    return !e || "svg" != e.split(".").pop() && e.includes("files.codelife.cc") ? `${e}${l}x-oss-process=image/resize,limit_0,m_fill,w_${t},h_${a}/quality,q_100` : e
}
const ot = {},
    st = {
        class: "icon-error f13 al d-flex-center"
    },
    rt = [(e => (L("data-v-933b2048"), e = e(), P(), e))((() => h("p", null, [C(" 当前iTab版本过低 "), h("br"), C("还未内置此组件 "), h("br"), C("请到官网升级到最新版 "), h("a", {
        class: "d-inline f12",
        target: "_blank",
        style: {
            "background-color": "#1581ff",
            color: "#fff",
            padding: "4px 20px",
            "border-radius": "20px"
        },
        href: "https://itab.link"
    }, "点击下载")], -1)))];
const ct = c(ot, [
        ["render", function(e, t) {
            return d(), p("div", st, [h("span", {
                onClick: t[0] || (t[0] = D((() => {}), ["stop"]))
            }, rt), b(' <d-icon icon="icon-collect-solid" style="width:70%;height: 70%;"></d-icon> ')])
        }],
        ["__scopeId", "data-v-933b2048"],
        ["__file", "D:/gitee/new-tab/src/views/Assist/IconError.vue"]
    ]),
    ut = ["src"],
    dt = {
        key: 3
    },
    pt = c({
        __name: "Icon",
        props: {
            data: Object,
            size: String
        },
        setup(e) {
            const t = e,
                {
                    appContext: a
                } = j(),
                l = u((() => {
                    if (t.data.src && t.data.src.includes(".svg")) return t.data.src;
                    let e = 100;
                    return "small" !== t.data.size && "2x2" !== t.data.size || (e = 260), "1x2" === t.data.size || "2x1" === t.data.size ? e = 200 : "medium" !== t.data.size && "2x4" !== t.data.size || (e = 360), it(t.data.src, e)
                }));
            return (t, n) => {
                return e.data && "component" == e.data.type ? (d(), O(S((e => {
                    let t = e.component.replace("app-", ""),
                        l = e.config && e.config.icon || "",
                        n = `${t}-icon${l}`;
                    if ("daysMatter-icon4" === n) {
                        n = "countdown", t = "countdown", l = "";
                        let a = {
                            target: "10",
                            workTime: ["2020-12-20 09:00:00", e.config.target],
                            repeatWeek: e.config.repeatWeek || ["1", "2", "3", "4", "5"],
                            bgColor: "#ffffff",
                            textColor: "#666666",
                            family: "HarmonyOS_Sans",
                            mask: 0
                        };
                        e.component = "countdown", e.name = "下班倒计时", e.config = a
                    }
                    return Object.keys(a.components).includes(n) ? n : v({
                        loader: () => nt(Object.assign({
                            "../DialogApp/app/bookmarks/icon/icon.vue": () => s((() => Promise.resolve().then((() => Fa))), void 0,
                                import.meta.url),
                            "../DialogApp/app/calendar/icon/icon.vue": () => s((() => Promise.resolve().then((() => dl))), void 0,
                                import.meta.url),
                            "../DialogApp/app/clock/icon/icon.vue": () => s((() => Promise.resolve().then((() => Al))), void 0,
                                import.meta.url),
                            "../DialogApp/app/countdown/icon/icon.vue": () => s((() => Promise.resolve().then((() => sn))), void 0,
                                import.meta.url),
                            "../DialogApp/app/daysMatter/icon/icon.vue": () => s((() => Promise.resolve().then((() => Dn))), void 0,
                                import.meta.url),
                            "../DialogApp/app/daysMatter/icon/icon2.vue": () => s((() => Promise.resolve().then((() => jn))), void 0,
                                import.meta.url),
                            "../DialogApp/app/daysMatter/icon/icon3.vue": () => s((() => Promise.resolve().then((() => ti))), void 0,
                                import.meta.url),
                            "../DialogApp/app/eat/icon/icon.vue": () => s((() => Promise.resolve().then((() => si))), void 0,
                                import.meta.url),
                            "../DialogApp/app/habit/icon/icon.vue": () => s((() => Promise.resolve().then((() => Si))), void 0,
                                import.meta.url),
                            "../DialogApp/app/ip/icon/icon.vue": () => s((() => Promise.resolve().then((() => Mi))), void 0,
                                import.meta.url),
                            "../DialogApp/app/jikipedia/icon/icon.vue": () => s((() => Promise.resolve().then((() => Wi))), void 0,
                                import.meta.url),
                            "../DialogApp/app/laborer11/icon/icon.vue": () => s((() => Promise.resolve().then((() => Ki))), void 0,
                                import.meta.url),
                            "../DialogApp/app/lusun/icon/icon.vue": () => s((() => Promise.resolve().then((() => lo))), void 0,
                                import.meta.url),
                            "../DialogApp/app/movieCalendar/icon/icon.vue": () => s((() => Promise.resolve().then((() => Uo))), void 0,
                                import.meta.url),
                            "../DialogApp/app/multiavatar/icon/icon.vue": () => s((() => Promise.resolve().then((() => qo))), void 0,
                                import.meta.url),
                            "../DialogApp/app/notes/icon/icon.vue": () => s((() => Promise.resolve().then((() => Zo))), void 0,
                                import.meta.url),
                            "../DialogApp/app/remai/icon/icon.vue": () => s((() => Promise.resolve().then((() => ss))), void 0,
                                import.meta.url),
                            "../DialogApp/app/sport/icon/icon.vue": () => s((() => Promise.resolve().then((() => ws))), void 0,
                                import.meta.url),
                            "../DialogApp/app/stock/icon/icon.vue": () => s((() => Promise.resolve().then((() => Ps))), void 0,
                                import.meta.url),
                            "../DialogApp/app/todayEnglish/icon/icon.vue": () => s((() => Promise.resolve().then((() => Hs))), void 0,
                                import.meta.url),
                            "../DialogApp/app/todayShici/icon/icon.vue": () => s((() => Promise.resolve().then((() => lr))), void 0,
                                import.meta.url),
                            "../DialogApp/app/todo/icon/icon.vue": () => s((() => Promise.resolve().then((() => dr))), void 0,
                                import.meta.url),
                            "../DialogApp/app/topsearch/icon/icon.vue": () => s((() => Promise.resolve().then((() => xr))), void 0,
                                import.meta.url),
                            "../DialogApp/app/uppercase/icon/icon.vue": () => s((() => Promise.resolve().then((() => Dr))), void 0,
                                import.meta.url),
                            "../DialogApp/app/vgn/icon/icon.vue": () => s((() => Promise.resolve().then((() => Br))), void 0,
                                import.meta.url),
                            "../DialogApp/app/wallpaper/icon/icon.vue": () => s((() => Promise.resolve().then((() => Qr))), void 0,
                                import.meta.url),
                            "../DialogApp/app/weather/icon/icon.vue": () => s((() => Promise.resolve().then((() => Yc))), void 0,
                                import.meta.url),
                            "../DialogApp/app/worldClock/icon/icon.vue": () => s((() => Promise.resolve().then((() => eu))), void 0,
                                import.meta.url),
                            "../DialogApp/app/xiayigejiaqi/icon/icon.vue": () => s((() => Promise.resolve().then((() => ku))), void 0,
                                import.meta.url),
                            "../DialogApp/app/xyzrank/icon/icon.vue": () => s((() => Promise.resolve().then((() => Su))), void 0,
                                import.meta.url),
                            "../DialogApp/app/yiyan/icon/icon.vue": () => s((() => Promise.resolve().then((() => Fu))), void 0,
                                import.meta.url)
                        }), `../DialogApp/app/${t}/icon/icon${l}.vue`),
                        errorComponent: ct,
                        suspensible: !0
                    })
                })(e.data)), {
                    key: 0,
                    data: e.data.config,
                    size: e.size || e.data && e.data.size
                }, null, 8, ["data", "size"])) : e.data && "icon" == e.data.type ? (d(), p("img", {
                    key: 1,
                    onError: n[0] || (n[0] = t => {
                        e.data
                    }),
                    onLoad: n[1] || (n[1] = t => {
                        e.data
                    }),
                    style: m([{
                        "pointer-events": "none"
                    }, `--icon-bg-color:${e.data.backgroundColor};--icon-fit:${i=e.data,(i.src.includes("/icons/")||i.src.includes(".cc/tools-icon/"))&&i.backgroundColor?"contain":"cover"}`]),
                    class: "app-item-img",
                    src: f(l)
                }, null, 44, ut)) : e.data && "text" == e.data.type ? (d(), O(R, {
                    key: 2,
                    bgColor: e.data.backgroundColor,
                    text: e.data.iconText
                }, null, 8, ["bgColor", "text"])) : e.data && "folder" == e.data.type ? (d(), p("div", dt, "文件夹")) : b("v-if", !0);
                var i
            }
        }
    }, [
        ["__file", "D:/gitee/new-tab/src/views/HomeIcon/Icon.vue"]
    ]),
    mt = ["id"],
    ft = ["onDragstart", "onDragenter", "onMouseenter"],
    _t = ["onContextmenu", "onClick", "onMouseup", "title"],
    vt = ["onClick"],
    gt = {
        class: "f14 d-icon"
    },
    ht = {
        key: 2,
        class: "app-item-title d-elip"
    },
    yt = {
        name: "icon-grid"
    },
    bt = Object.assign(yt, {
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            data: {
                type: Array,
                default: []
            },
            isBatchEditIcon: {
                type: Boolean,
                default: !1
            },
            id: [Number, String],
            index: Number,
            size: String,
            isDrag: Boolean,
            scene: String,
            touchDisabled: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["iconContextMenu", "betchDelIcon", "utlTo", "start", "end", "dragenter"],
        setup(e, {
            emit: t
        }) {
            const a = e,
                l = v((() => s((() =>
                        import ("./CloseBold.35e7dcc2.js")), ["./CloseBold.35e7dcc2.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                o = g(null),
                c = n(),
                u = M();
            let m = !1,
                _ = null;

            function x(e) {
                t("dragenter", e)
            }
            i((() => a.touchDisabled), (e => {
                _.option("disabled", e)
            }));
            let k = null,
                E = null;

            function I(e) {
                const {
                    marginLeft: t,
                    marginTop: a,
                    width: l,
                    height: n
                } = window.getComputedStyle(e);
                e.style && (e.style.left = e.offsetLeft - parseFloat(t, 10) + "px", e.style.top = e.offsetTop - parseFloat(a, 10) + "px", e.style.width = l, e.style.height = n)
            }
            return setTimeout((() => {
                let e = o.value.querySelector(".app-grid");
                s((() =>
                        import ("./sortable.esm.bf8db74c.js").then((e => e.s))), [],
                    import.meta.url).then((l => {
                    _ = l.default.create(e, {
                        animation: 150,
                        disabled: he && a.touchDisabled,
                        group: {
                            name: "shared"
                        },
                        onStart: function(e) {
                            m = !0, lt("#app-icon-grid-wrap").style.setProperty("--icon-transition-duration", "0"), E = c.value.sidebar.autoHide, c.value.sidebar.autoHide = !1, k = V.value
                        },
                        onEnd: e => {
                            let a = u.value.find((e => e.id == k)),
                                l = a.children[e.oldIndex];
                            if (a.children.splice(e.oldIndex, 1), V.value == k) a.children.splice(e.newIndex, 0, l);
                            else {
                                u.value.find((e => e.id == V.value)).children.splice(e.newIndex, 0, l)
                            }
                            c.value.sidebar.autoHide = E, setTimeout((() => {
                                m = !1, lt("#app-icon-grid-wrap").style.setProperty("--icon-transition-duration", ".3s")
                            }), 100), e.newIndex != e.oldIndex && (s((() =>
                                    import ("./save_config.cbe33c4d.js")), ["./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js"],
                                import.meta.url).then((e => {
                                e.SAVE_CONFIG("navConfig")
                            })), t("end"))
                        }
                    })
                }));
                let l = localStorage.getItem("dataCleansing"),
                    n = r().format("MMDD");
                if (l == n) return;
                const i = ["multiavatar", "ip", "uppercase"],
                    d = ["multiavatar", "xiayigejiaqi", "uppercase", "ip", "remai"];
                a.data.forEach(((e, t) => {
                    e.component && (e.component = e.component.replace("app-", "")), e ? (e.id || (e.id = N()), i.includes(e.component) && (e.type = "component", e.src = `https://files.codelife.cc/tools-icon/${e.component}.svg`), d.includes(e.component) && (e.insetType = "iframe")) : a.data[t] = {}
                })), setTimeout((() => {
                    localStorage.setItem("dataCleansing", n)
                }), 200)
            }), 60), (n, i) => (d(), p("div", {
                onDragover: i[2] || (i[2] = D((() => {}), ["prevent"])),
                ref_key: "scrollbarRef",
                ref: o,
                class: y(["hfull d-scrollbar-hide", {
                    "d-auto-x": f(he)
                }]),
                id: `app-grid_${a.id}`
            }, [b(' <div v-if="!props.data.length" class="ac" style="pointer-events: auto; color: #fff">\r\n      <p class="mt20">这个分组还空空如也！点击下面按钮开始添加吧！</p>\r\n      <button class="mt20 add-button" @click="setDialogIcon()">添加图标</button>\r\n    </div>'), b(' swapThreshold="1" :invertSwap="true"  '), w(H, {
                name: "flip-li",
                tag: "ul",
                class: "app-grid",
                onBeforeLeave: I
            }, {
                default: $((() => [(d(!0), p(F, null, Y(e.data, ((n, o) => (d(), p("li", {
                    class: y(["app-item", [`icon-size-${e.size||n&&n.size||"1x1"}`]]),
                    key: n && n.id,
                    onDragover: i[1] || (i[1] = D((() => {}), ["prevent"])),
                    onDragstart: e => {
                        t("start", n)
                    },
                    onDragenter: e => x(n),
                    onMouseenter: e => x(n)
                }, [e.show || e.isDrag || a.id == f(V) ? (d(), p("div", {
                    key: 0,
                    class: y([{
                        swing: e.isBatchEditIcon
                    }, "app-item-icon"]),
                    onContextmenu: D((e => {
                        t("iconContextMenu", e, n)
                    }), ["prevent", "stop"]),
                    onClick: e => {
                        return a = e, l = n, void(m || t("utlTo", a, l));
                        var a, l
                    },
                    onMouseup: e => {
                        return t = e, a = n, void(m || 1 === t.button && window.open(a.url, "_blank"));
                        var t, a
                    },
                    title: n && n.name
                }, [w(pt, {
                    data: n || {}
                }, null, 8, ["data"])], 42, _t)) : b("v-if", !0), e.isBatchEditIcon ? (d(), p("div", {
                    key: 1,
                    class: "icon-item-delete d-flex-center",
                    onMouseup: i[0] || (i[0] = D((() => {}), ["stop"])),
                    onClick: e => function(e, l) {
                        t("betchDelIcon", e, l, a.data)
                    }(o, n)
                }, [h("i", gt, [w(f(l))])], 40, vt)) : b("v-if", !0), e.isDrag || a.id == f(V) ? (d(), p("p", ht, z(n && n.config && n.config.name || n && n.name), 1)) : b("v-if", !0)], 42, ft)))), 128))])),
                _: 1
            })], 42, mt))
        }
    }),
    wt = c(bt, [
        ["__file", "D:/gitee/new-tab/src/views/HomeIcon/IconGrid.vue"]
    ]),
    xt = n();

function kt(e, t, a) {
    t.view ? t.view++ : t.view = 1;
    let l = {
        t: "event",
        ec: `${t.name}-${t.url}`,
        ea: "open",
        el: "url"
    };
    s((() =>
            import ("./statistics.a738debd.js")), ["./statistics.a738debd.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./useSta.b98c784e.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js"],
        import.meta.url).then((e => {
        e.googleAnalytics(l), t.url && t.url.includes("//translate.volcengine.com") && e.gridsumAnalytics("c", {
            gid: "gad_545_r50idddr",
            ck: 1113,
            adk: 11031
        })
    }));
    let n = xt.value.open && xt.value.open.iconBlank ? "_blank" : "_self";
    if (t && ("itab://add" == t.url || "itab://store" == t.url)) return void Qe();
    if (t && "itab://setting" == t.url) return Je.visible = !0, void(Je.active = 2);
    if (t.component) return void Ze(t, a);
    let i = e.ctrlKey;
    return U() && (i = e.metaKey), (i && 0 == e.button || 1 == e.button) && (n = "_blank"), t.url && t.url.includes("http") ? void window.open(t.url, n) : void s((() =>
            import ("./versionNotice.ea178545.js")), ["./versionNotice.ea178545.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
        import.meta.url).then((e => {
        e.default({
            modelValue: !0,
            center: !0
        }, W("p", {
            class: "f18 b"
        }, "网页版不支持此功能，请安装浏览器扩展后再使用"))
    }))
}
const Et = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 48 48"
    },
    Dt = [h("g", {
        fill: "none"
    }, [h("path", {
        d: "M20 8c1.576 0 2.997.663 4 1.725A5.485 5.485 0 0 1 28 8h13a3 3 0 0 1 3 3v18a6.992 6.992 0 0 0-3-5.745V11H28a2.5 2.5 0 0 0-2.5 2.5v21c0 .593.206 1.137.551 1.566c.133 1.381.52 2.687 1.117 3.871A5.488 5.488 0 0 1 24 38.275A5.485 5.485 0 0 1 20 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h13zm2.5 26.5v-21A2.5 2.5 0 0 0 20 11H7v26h13a2.5 2.5 0 0 0 2.5-2.5zm9.916 2.5A4.983 4.983 0 0 1 32 35v-6a5 5 0 0 1 10 0v6a5 5 0 0 1-9.584 2zm-4.193 0A9.033 9.033 0 0 1 28 35a1 1 0 1 1 2 0a6.985 6.985 0 0 0 2.101 5A6.977 6.977 0 0 0 37 42a6.98 6.98 0 0 0 5.29-2.415A6.973 6.973 0 0 0 44 35a1 1 0 1 1 2 0c0 4.633-3.5 8.448-8 8.945V45a1 1 0 1 1-2 0v-1.055A8.997 8.997 0 0 1 28.223 37z",
        fill: "currentColor"
    })], -1)],
    It = B({
        name: "BookOpenMicrophone48Filled",
        render: function(e, t) {
            return d(), p("svg", Et, Dt)
        }
    }),
    Ot = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 20 20"
    },
    zt = [h("g", {
        fill: "none"
    }, [h("path", {
        d: "M14.499 3a2.5 2.5 0 0 1 2.5 2.5v3.502a2.87 2.87 0 0 0-1 .229V7h-12v7.499a1.5 1.5 0 0 0 1.5 1.5h3.975c-.016.05-.03.103-.043.155l-.211.845H5.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 5.5 3h8.999zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5a1.5 1.5 0 0 0-1.5-1.5zm-3.52 11.376l4.829-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.829 4.828a2.197 2.197 0 0 1-1.02.578l-1.498.375a.89.89 0 0 1-1.078-1.079l.374-1.498c.097-.386.296-.739.578-1.02z",
        fill: "currentColor"
    })], -1)],
    Tt = B({
        name: "CalendarEdit20Regular",
        render: function(e, t) {
            return d(), p("svg", Ot, zt)
        }
    }),
    At = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 28 28"
    },
    Lt = [h("g", {
        fill: "none"
    }, [h("path", {
        d: "M14 2.25a3.75 3.75 0 0 1 3.745 3.55l.005.2h5.5a.75.75 0 0 1 .102 1.493l-.102.007h-1.059l-1.22 15.053A3.75 3.75 0 0 1 17.233 26h-6.466a3.75 3.75 0 0 1-3.738-3.447L5.808 7.5H4.75a.75.75 0 0 1-.743-.648L4 6.75a.75.75 0 0 1 .648-.743L4.75 6h5.5A3.75 3.75 0 0 1 14 2.25zm6.687 5.25H7.313l1.211 14.932a2.25 2.25 0 0 0 2.243 2.068h6.466a2.25 2.25 0 0 0 2.243-2.068L20.686 7.5zm-8.937 3.75a.75.75 0 0 1 .743.648L12.5 12v8a.75.75 0 0 1-1.493.102L11 20v-8a.75.75 0 0 1 .75-.75zm4.5 0a.75.75 0 0 1 .743.648L17 12v8a.75.75 0 0 1-1.493.102L15.5 20v-8a.75.75 0 0 1 .75-.75zM14 3.75a2.25 2.25 0 0 0-2.245 2.096L11.75 6h4.5l-.005-.154A2.25 2.25 0 0 0 14 3.75z",
        fill: "currentColor"
    })], -1)],
    Pt = B({
        name: "Delete28Regular",
        render: function(e, t) {
            return d(), p("svg", At, Lt)
        }
    }),
    Ct = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 12 12"
    },
    St = [h("g", {
        fill: "none"
    }, [h("path", {
        d: "M3 2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm5 0a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8z",
        fill: "currentColor"
    })], -1)],
    Rt = B({
        name: "Pause12Filled",
        render: function(e, t) {
            return d(), p("svg", Ct, St)
        }
    }),
    jt = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 12 12"
    },
    Mt = [h("g", {
        fill: "none"
    }, [h("path", {
        d: "M4.496 1.994A1 1 0 0 0 3 2.862v6.277a1 1 0 0 0 1.496.868l5.492-3.139a1 1 0 0 0 0-1.736L4.496 1.994z",
        fill: "currentColor"
    })], -1)],
    Vt = B({
        name: "Play12Filled",
        render: function(e, t) {
            return d(), p("svg", jt, Mt)
        }
    }),
    Nt = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 24 24"
    },
    $t = [q('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><path d="M4 9h8"></path><path d="M12 15h8"></path><path d="M12 4v16"></path></g>', 1)],
    Ft = B({
        name: "LayoutBoard",
        render: function(e, t) {
            return d(), p("svg", Nt, $t)
        }
    }),
    Yt = {
        class: "app-icon-grid-wrap",
        id: "app-icon-grid-wrap"
    },
    Ht = {
        key: 0,
        class: "app-icon-grid hfull d-hidden"
    },
    Ut = {
        class: "app-icon-wrap",
        style: {
            height: "100%"
        }
    },
    Wt = ["name"],
    Bt = {
        name: "home-icon",
        components: {
            CalendarEdit20Regular: Tt,
            Delete28Regular: Pt,
            LayoutBoard: Ft
        }
    },
    qt = Object.assign(Bt, {
        setup(e) {
            const t = v((() => s((() =>
                        import ("./d-contextmenu.576ba68d.js")), ["./d-contextmenu.576ba68d.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-contextmenu.fd6e1540.css"],
                    import.meta.url))),
                a = M(),
                l = n(),
                i = g(null);
            s((() =>
                    import ("./index.45b942c8.js")), ["./index.45b942c8.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./isObject.a01dee34.js"],
                import.meta.url), s((() =>
                    import ("./gridScrollEvent.b53f47f2.js")), ["./gridScrollEvent.b53f47f2.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./debounce.abbfdaeb.js", "./isObject.a01dee34.js"],
                import.meta.url);
            const o = A({
                    isDrag: !1,
                    activeName: null,
                    menuRowData: {},
                    editIconVisibel: !1,
                    editItem: {},
                    isBatchEditIcon: !1,
                    touchDisabled: !0,
                    contextmenuData: [{
                        name: "在新标签页打开",
                        key: "open",
                        icon: "OpenOutline"
                    }, {
                        name: "布局",
                        key: "layout",
                        icon: "LayoutBoard"
                    }, {
                        name: "编辑",
                        key: "edit",
                        icon: "CalendarEdit20Regular"
                    }, {
                        name: "批量编辑",
                        key: "batchEdit",
                        icon: "CalendarEdit20Regular"
                    }, {
                        name: "删除",
                        key: "del",
                        icon: "Delete28Regular"
                    }]
                }),
                r = u((() => o.menuRowData.component ? o.contextmenuData.filter((e => "open" != e.key)) : o.contextmenuData));

            function c(e) {}

            function m(e) {
                o.isDrag = !0
            }

            function _(e) {
                o.isDrag = !1
            }

            function y(e, t) {
                o.activeName = t.size || "1x1", o.menuRowData = t, i.value.open(e)
            }

            function x(e) {
                s((() =>
                        import ("./homeIcon.d07425ea.js")), ["./homeIcon.d07425ea.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url).then((t => {
                    t.contextClick(e, o.menuRowData, (e => {
                        "edit" !== e.key || o.menuRowData.component ? "batchEdit" == e.key && (o.isBatchEditIcon = !0) : (o.editIconVisibel = !0, o.editItem = o.menuRowData)
                    }))
                }))
            }

            function k(e) {
                for (let t in e) o.menuRowData[t] = e[t] || "";
                o.editIconVisibel = !1, s((() =>
                        import ("./save_config.cbe33c4d.js")), ["./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js"],
                    import.meta.url).then((e => {
                    e.SAVE_CONFIG("navConfig")
                }))
            }

            function E(e, t, a) {
                s((() =>
                        import ("./homeIcon.d07425ea.js")), ["./homeIcon.d07425ea.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url).then((l => {
                    l.iconDelHandle(e, t, a)
                }))
            }

            function D(e, t) {
                kt(e, t, !0)
            }
            G((() => {
                tt(document, "mouseup", P), tt(document, "touchstart", z), tt(document, "touchmove", L), tt(document, "touchend", T)
            })), X((() => {
                at(document, "mouseup", P), at(document, "touchstart", z), at(document, "touchmove", L), at(document, "touchend", T)
            }));
            let I = null;
            const z = () => {
                    clearTimeout(I), I = 0, I = setTimeout((() => {
                        o.isBatchEditIcon = !0, o.touchDisabled = !1
                    }), 500)
                },
                T = () => {
                    clearTimeout(I)
                },
                L = () => {
                    clearTimeout(I), I = null
                };

            function P(e) {
                lt(".v-contextmenu") && lt(".v-contextmenu").contains(e.target) || o.isBatchEditIcon && (o.isBatchEditIcon = !1, o.touchDisabled = !0)
            }
            return (e, n) => (d(), p(F, null, [h("div", Yt, ["widget" == f(l).layout.view ? (d(), p("div", Ht, [h("ul", Ut, [(d(!0), p(F, null, Y(f(a), ((e, t) => (d(), p("li", {
                key: e.id,
                style: {
                    height: "100%"
                },
                class: "app-icon-item",
                name: e.id + ""
            }, [w(wt, {
                scene: "icon",
                ref_for: !0,
                ref: "iconGred",
                touchDisabled: o.touchDisabled,
                index: t,
                id: e.id,
                isDrag: o.isDrag,
                isBatchEditIcon: o.isBatchEditIcon,
                style: {
                    "pointer-events": "auto"
                },
                onIconContextMenu: y,
                onBetchDelIcon: E,
                onUtlTo: D,
                onStart: m,
                onDragenter: c,
                onEnd: _,
                data: e.children,
                "onUpdate:data": t => e.children = t
            }, null, 8, ["touchDisabled", "index", "id", "isDrag", "isBatchEditIcon", "data", "onUpdate:data"])], 8, Wt)))), 128))])])) : b("v-if", !0), w(f(t), {
                uid: "homeIcon_3d233b",
                active: o.activeName,
                onClick: x,
                data: f(r),
                ref_key: "refContextmenu",
                ref: i
            }, {
                default: $((() => [b(' <li\r\n        @click="contextClick(item)"\r\n        class="d-contextmenu-item"\r\n        v-for="item of contextmenuData"\r\n        :key="item.key"\r\n        :class="[{hover: item.key!=\'layout\'},{ bb: item.group }]"\r\n      >\r\n     \r\n        <i class="item-icon d-icon" style="vertical-align: -2px; font-size:14px;">\r\n          <component :is="item.icon"></component>\r\n        </i>\r\n        {{ item.name }}\r\n        <p class="contextmenu-layout" v-if="item.key==\'layout\'">\r\n          <em\r\n            @click.stop="contextClick(layout)"\r\n            v-for="layout of [\'1x1\',\'1x2\',\'2x1\',\'2x2\',\'2x4\']"\r\n            :key="layout"\r\n          >{{layout}}</em>\r\n        </p>\r\n      </li>')])),
                _: 1
            }, 8, ["active", "data"]), o.editIconVisibel ? (d(), O(S(v((() => s((() =>
                    import ("./IconEdit.5454a2b5.js")), ["./IconEdit.5454a2b5.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./CustomAdd.68b36f25.js", "./d-color.0db1603d.js", "./index.534437f3.js", "./index.d235e992.js", "./index.8720847e.js", "./index.742e3cb2.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./position.8ddd1c03.js", "./index.87f7d0e4.js", "./debounce.abbfdaeb.js", "./d-color.4e426ccc.css", "./el-button.2cb60ae5.css", "./ossClient.3d42266e.js", "./website.2111b3d7.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./el-upload.125a730c.js", "./el-progress.3a42d846.js", "./el-progress.1f9bfc72.css", "./el-upload.ae1d280e.css", "./el-form-item.912e2c38.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./el-form-item.d10bb01f.css", "./RefreshRight.be739b02.js", "./addToDesk.49d98345.js", "./cloneDeep.3cbd3f2d.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./CustomAdd.1c9e31be.css", "./el-icon.b1770749.css", "./el-message.a1d9903a.css", "./el-overlay.f6b2674f.css"],
                import.meta.url)))), {
                key: 1,
                data: o.editItem,
                modelValue: o.editIconVisibel,
                "onUpdate:modelValue": n[0] || (n[0] = e => o.editIconVisibel = e),
                onAddCustomIcon: k
            }, null, 40, ["data", "modelValue"])) : b("v-if", !0), b(' <icon-folder :data="folderDragData.data.children || []" v-model="folderDragData.visible" /> ')]), b(" </div> ")], 2112))
        }
    }),
    Gt = c(qt, [
        ["__scopeId", "data-v-8a77cb07"],
        ["__file", "D:/gitee/new-tab/src/views/HomeIcon/index.vue"]
    ]),
    Xt = {
        id: "app-main",
        class: "app-main"
    },
    Qt = c({
        __name: "home",
        setup(e) {
            const t = v((() => s((() =>
                        import ("./HomeNavGroup.3eb6172f.js")), ["./HomeNavGroup.3eb6172f.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-contextmenu.576ba68d.js", "./d-contextmenu.fd6e1540.css", "./d-icon.af5cac18.js", "./d-icon.0893d740.css", "./sponsor.db1f22da.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./index.534437f3.js", "./index.d235e992.js", "./index.8720847e.js", "./sponsor.0b32950e.css", "./el-overlay.f6b2674f.css", "./el-button.2cb60ae5.css", "./create_login.994910cf.js", "./el-form-item.912e2c38.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./el-form-item.d10bb01f.css", "./el-radio.74b38810.js", "./el-radio.94b07b0d.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./d-button.975b01f4.js", "./d-button.33d6ccf9.css", "./public-api.6a0debad.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./save_config.cbe33c4d.js", "./debounce.abbfdaeb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./Refresh.dd54cee1.js", "./index.7eda866d.js", "./throttle.0dfde511.js", "./position.8ddd1c03.js", "./index.47a56f13.js", "./validator.05a5fb38.js", "./create_login.656547e7.css", "./el-message.a1d9903a.css", "./el-image-viewer.f74efbeb.css", "./el-message-box.d5ceed26.css", "./index.cdbb23f9.js", "./index.742e3cb2.js", "./HomeNavGroup.be9e9d4d.css", "./el-popover.f80de2ca.css"],
                    import.meta.url))),
                a = v((() => s((() =>
                        import ("./HomeContextmenu.fc234f65.js")), ["./HomeContextmenu.fc234f65.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-contextmenu.576ba68d.js", "./d-contextmenu.fd6e1540.css", "./index.8ba13591.js", "./globalSearch.6bc5de8d.js", "./create_login.994910cf.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./el-form-item.912e2c38.js", "./index.8720847e.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./el-form-item.d10bb01f.css", "./el-radio.74b38810.js", "./index.d235e992.js", "./el-radio.94b07b0d.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./d-button.975b01f4.js", "./d-button.33d6ccf9.css", "./public-api.6a0debad.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./save_config.cbe33c4d.js", "./debounce.abbfdaeb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.534437f3.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./Refresh.dd54cee1.js", "./index.7eda866d.js", "./throttle.0dfde511.js", "./position.8ddd1c03.js", "./index.47a56f13.js", "./validator.05a5fb38.js", "./create_login.656547e7.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css", "./el-message.a1d9903a.css", "./el-image-viewer.f74efbeb.css", "./el-message-box.d5ceed26.css", "./Search.37b8df57.js", "./HomeContextmenu.6014d2ea.css"],
                    import.meta.url))),
                l = v((() => s((() =>
                        import ("./HomeNotesFixed.cc4e2728.js")), ["./HomeNotesFixed.cc4e2728.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./timeFormat.2ad7f500.js", "./PinOff16Regular.6c319d64.js", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./debounce.abbfdaeb.js", "./HomeNotesFixed.b5a0901f.css"],
                    import.meta.url))),
                i = v((() => s((() =>
                        import ("./index.f9be212e.js")), ["./index.f9be212e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-dialog.840c6cfa.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./Close.c9346f3b.js", "./d-dialog.d74e6560.css", "./el-overlay.f6b2674f.css", "./config-provider.35572354.js", "./index.8720847e.js", "./el-loading.7c3a3a4a.css"],
                    import.meta.url))),
                o = v((() => s((() =>
                        import ("./index.1d46d4e1.js")), ["./index.1d46d4e1.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-tabs.dd73b910.js", "./d-tabs.9116c806.css", "./itab.eac3c33d.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./el-drawer.85167f95.js", "./index.4e5ff846.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./el-drawer.f97e7830.css", "./create_login.994910cf.js", "./el-form-item.912e2c38.js", "./index.8720847e.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./el-form-item.d10bb01f.css", "./el-radio.74b38810.js", "./index.d235e992.js", "./el-radio.94b07b0d.css", "./index.ed6e81ca.js", "./d-button.975b01f4.js", "./d-button.33d6ccf9.css", "./public-api.6a0debad.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./save_config.cbe33c4d.js", "./debounce.abbfdaeb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.534437f3.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./Refresh.dd54cee1.js", "./index.7eda866d.js", "./throttle.0dfde511.js", "./position.8ddd1c03.js", "./index.47a56f13.js", "./validator.05a5fb38.js", "./create_login.656547e7.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css", "./el-message.a1d9903a.css", "./el-image-viewer.f74efbeb.css", "./el-message-box.d5ceed26.css", "./index.6d6dd2b2.css"],
                    import.meta.url))),
                r = n();
            return Ie(r.value, !0), s((() =>
                    import ("./async-init.4827bb1e.js")), ["./async-init.4827bb1e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./version.8d34b113.js"],
                import.meta.url), (e, n) => (d(), p(F, null, [b(" <home-bg /> "), w(f(t)), w(f(l)), h("div", Xt, [b(' <div class="d-cell app-content"> '), b(' <div class="d-cell d-flex" style="flex-flow: column;"> '), w(ze), b(" <home-date /> "), x(h("itab-date", null, null, 512), [
                [I, f(r).time.show || null == f(r).time.show]
            ]), b(" show == undefined是为了兼容旧版本 "), w(Ye), w(Gt, {
                style: {
                    flex: "1"
                }
            }), b(" </div> "), b(" </div> "), f(r).layout.yiyan ? (d(), O(qe, {
                key: 0
            })) : b("v-if", !0)]), b(" <homeButton /> "), b(' <component v-if="extensionVisible" :is="defineAsyncComponent(() => import(\'./HomeButton.vue\'))" /> '), b(" 桌面右键设置 "), w(f(a)), b(" 侧边栏设置 "), b(' <sidebar-panel v-if="settingHandle.visible" /> '), w(f(o)), b(" <component :is=\"defineAsyncComponent(() => import('./SidebarPanel/index.vue'))\" /> "), b(" 添加图标组件 "), b(' <add-app v-if="dialogIcon.visible" v-model="dialogIcon.visible" /> '), (d(), O(S(v((() => s((() =>
                    import ("./index.d44a5a70.js")), ["./index.d44a5a70.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-dialog.840c6cfa.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./Close.c9346f3b.js", "./d-dialog.d74e6560.css", "./el-overlay.f6b2674f.css", "./d-tabs.dd73b910.js", "./d-tabs.9116c806.css", "./el-main.0eaee62a.js", "./el-main.f5c6a819.css", "./hardware-info.ec50f284.js", "./website.2111b3d7.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./d-infinite-scroll.69c647fa.js", "./el-skeleton-item.3776d71d.js", "./el-skeleton-item.2cbc8fed.css", "./wallpaperDb.e3a7e00b.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./index.534437f3.js", "./index.d235e992.js", "./index.8720847e.js", "./d-infinite-scroll.e7d0aa22.css", "./el-button.2cb60ae5.css", "./addToDesk.49d98345.js", "./cloneDeep.3cbd3f2d.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./statistics.a738debd.js", "./useSta.b98c784e.js", "./debounce.abbfdaeb.js", "./Search.37b8df57.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.cb9f48ad.js", "./index.742e3cb2.js", "./index.52524422.js", "./strings.e32d5a08.js", "./isEqual.296380c7.js", "./_baseIsEqual.cca7ad74.js", "./index.87f7d0e4.js", "./validator.05a5fb38.js", "./index.c7370e6c.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./widget-icon-item.eb544202.js", "./throttle.0dfde511.js", "./widget-icon-item.0b19e53c.css", "./indexdb.a2b9d265.js", "./Refresh.dd54cee1.js", "./Drawer.c2e2fd1d.js", "./_baseFor.671df8ff.js", "./isArrayLikeObject.26380556.js", "./_baseRest.0a5801c8.js", "./identity.737b3aaf.js", "./_overRest.86a13aad.js", "./_isIterateeCall.7435a88e.js", "./CustomAdd.68b36f25.js", "./d-color.0db1603d.js", "./position.8ddd1c03.js", "./d-color.4e426ccc.css", "./ossClient.3d42266e.js", "./el-upload.125a730c.js", "./el-progress.3a42d846.js", "./el-progress.1f9bfc72.css", "./el-upload.ae1d280e.css", "./el-form-item.912e2c38.js", "./el-form-item.d10bb01f.css", "./RefreshRight.be739b02.js", "./CustomAdd.1c9e31be.css", "./el-icon.b1770749.css", "./el-message.a1d9903a.css", "./index.49c1cafb.css", "./el-card.208b2445.css"],
                import.meta.url)))))), b(" app框架 "), w(f(i)), b(' <component\r\n    v-if="settingHandle.visible"\r\n    :is="defineAsyncComponent(() => import(\'./SidebarPanel/addApp/index.vue\'))"\r\n  />'), b(" 全局搜索 "), (d(), O(S(v((() => s((() =>
                    import ("./index.e9a8d9c2.js")), ["./index.e9a8d9c2.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./PictureFilled.875791a4.js", "./index.7eda866d.js", "./typescript.72bf8adc.js", "./throttle.0dfde511.js", "./debounce.abbfdaeb.js", "./index.c89b0165.js", "./position.8ddd1c03.js", "./website.2111b3d7.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./statistics.a738debd.js", "./useSta.b98c784e.js", "./globalSearch.6bc5de8d.js", "./cloneDeep.3cbd3f2d.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./_baseFlatten.1b8a9a9c.js", "./_baseOrderBy.365c2f0e.js", "./_baseIsEqual.cca7ad74.js", "./hasIn.0ceeb413.js", "./identity.737b3aaf.js", "./_baseFor.671df8ff.js", "./_baseRest.0a5801c8.js", "./_overRest.86a13aad.js", "./_isIterateeCall.7435a88e.js", "./index.3379b85c.css", "./el-overlay.f6b2674f.css", "./el-image-viewer.f74efbeb.css"],
                import.meta.url)))))), b(' <globalSearchComp v-model="globalSearchVisible" /> ')], 64))
        }
    }, [
        ["__scopeId", "data-v-40f7d07e"],
        ["__file", "D:/gitee/new-tab/src/views/home.vue"]
    ]),
    Jt = c({
        __name: "App",
        setup: e => (e, t) => (d(), p(F, null, [b(' <el-config-provider :locale="language"> '), w(Qt), b(" </el-config-provider> ")], 2112))
    }, [
        ["__file", "D:/gitee/new-tab/src/App.vue"]
    ]),
    Kt = c({
        __name: "d-watch-resize",
        props: {
            size: {
                type: String,
                default: "small"
            }
        },
        emits: ["resize"],
        setup(e, {
            emit: t
        }) {
            let a = g(null);

            function l(e) {
                let l = e[0].contentRect;
                if (!a.value) return;
                let n = l.width,
                    i = l.height,
                    o = ~~((n > i ? i : n) / 7);
                a.value.style.fontSize = o + "px", t("resize", {
                    width: n,
                    height: i
                })
            }
            return Q((() => {
                a.value.style.fontSize = "21px";
                let e = a.value;
                new ResizeObserver(l).observe(e)
            })), (e, t) => (d(), p("div", {
                ref_key: "watchResize",
                ref: a,
                class: "d-watch-resize"
            }, [J(e.$slots, "default", {}, void 0, !0)], 512))
        }
    }, [
        ["__scopeId", "data-v-c46ecd70"],
        ["__file", "D:/gitee/new-tab/src/components/d-watch-resize.vue"]
    ]);
var Zt = B({
    name: "Cloudy"
});
const ea = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ta = w("path", {
        fill: "currentColor",
        d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
    }, null, -1);
Zt.render = function(e, t, a, l, n, i) {
    return d(), O("svg", ea, [ta])
}, Zt.__file = "packages/components/Cloudy.vue";
const aa = Zt;
var la = B({
    name: "Delete"
});
const na = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ia = w("path", {
        fill: "currentColor",
        d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
    }, null, -1);
la.render = function(e, t, a, l, n, i) {
    return d(), O("svg", na, [ia])
}, la.__file = "packages/components/Delete.vue";
const oa = la;
var sa = B({
    name: "Download"
});
const ra = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ca = w("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
    }, null, -1);
sa.render = function(e, t, a, l, n, i) {
    return d(), O("svg", ra, [ca])
}, sa.__file = "packages/components/Download.vue";
const ua = sa;
var da = B({
    name: "Edit"
});
const pa = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ma = w("path", {
        fill: "currentColor",
        d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
    }, null, -1),
    fa = w("path", {
        fill: "currentColor",
        d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
    }, null, -1);
da.render = function(e, t, a, l, n, i) {
    return d(), O("svg", pa, [ma, fa])
}, da.__file = "packages/components/Edit.vue";
const _a = da;
var va = B({
    name: "Plus"
});
const ga = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ha = w("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
    }, null, -1);
va.render = function(e, t, a, l, n, i) {
    return d(), O("svg", ga, [ha])
}, va.__file = "packages/components/Plus.vue";
const ya = va,
    ba = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ya
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var wa = B({
    name: "Position"
});
const xa = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ka = w("path", {
        fill: "currentColor",
        d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
    }, null, -1);
wa.render = function(e, t, a, l, n, i) {
    return d(), O("svg", xa, [ka])
}, wa.__file = "packages/components/Position.vue";
const Ea = wa;
var Da = B({
    name: "Remove"
});
const Ia = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Oa = w("path", {
        fill: "currentColor",
        d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
    }, null, -1),
    za = w("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
    }, null, -1);
Da.render = function(e, t, a, l, n, i) {
    return d(), O("svg", Ia, [Oa, za])
}, Da.__file = "packages/components/Remove.vue";
const Ta = Da;
var Aa = B({
    name: "Setting"
});
const La = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    Pa = w("path", {
        fill: "currentColor",
        d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
    }, null, -1);
Aa.render = function(e, t, a, l, n, i) {
    return d(), O("svg", La, [Pa])
}, Aa.__file = "packages/components/Setting.vue";
const Ca = Aa;
var Sa = B({
    name: "Switch"
});
const Ra = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    ja = w("path", {
        fill: "currentColor",
        d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
    }, null, -1);
Sa.render = function(e, t, a, l, n, i) {
    return d(), O("svg", Ra, [ja])
}, Sa.__file = "packages/components/Switch.vue";
const Ma = {
    Plus: ya,
    Switch: Sa,
    Download: ua,
    Setting: Ca,
    Cloudy: aa,
    Edit: _a,
    Remove: Ta,
    Check: K,
    Delete: oa
};
s((() => Promise.resolve({})), ["./css-vars.b790953f.css"],
    import.meta.url);
const Va = {
        install(e) {
            s((() =>
                    import ("./index.176a125e.js").then((e => e.k))), ["./index.176a125e.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js"],
                import.meta.url).then((t => {
                e.use(t.default)
            })), s((() =>
                    import ("./css.64f23996.js")), ["./css.64f23996.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-message.a1d9903a.css"],
                import.meta.url), s((() =>
                    import ("./css.35989968.js")), ["./css.35989968.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-message-box.d5ceed26.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css"],
                import.meta.url), s((() =>
                    import ("./css.9d4644ca.js")), ["./css.9d4644ca.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-loading.7c3a3a4a.css"],
                import.meta.url), s((() =>
                    import ("./css.9e9722ea.js")), ["./css.9e9722ea.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-notification.cf8e1b84.css"],
                import.meta.url), s((() =>
                    import ("./css.9423aff0.js")), ["./css.9423aff0.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-icon.b1770749.css"],
                import.meta.url), s((() =>
                    import ("./index.1f445754.js")), ["./index.1f445754.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./position.8ddd1c03.js", "./style.d69d81d7.js", "./scroll.4972bdba.js", "./throttle.0dfde511.js", "./debounce.abbfdaeb.js", "./isObject.a01dee34.js"],
                import.meta.url).then((t => {
                e.use(t.default)
            })), s((() =>
                    import ("./index.77cf9a11.js")), ["./index.77cf9a11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.7c0d977d.js"],
                import.meta.url).then((t => {
                e.use(t.default)
            })), Object.keys(Ma).map((t => e.component(Ma[t].name, Ma[t]))), e.component("d-watch-resize", Kt), e.component("d-text-icon", R), s((() =>
                    import ("./d-button.975b01f4.js")), ["./d-button.975b01f4.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-button.33d6ccf9.css"],
                import.meta.url).then((t => {
                e.component("d-button", t.default)
            }))
        }
    },
    Na = {
        alt: "书签",
        class: "bookmarks-icon",
        src: "https://files.codelife.cc/tools-icon/bookmarks.svg"
    };
const $a = c({
        name: "bookmarks"
    }, [
        ["render", function(e, t, a, l, n, i) {
            return d(), p("img", Na)
        }],
        ["__scopeId", "data-v-6c051312"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/bookmarks/icon/icon.vue"]
    ]),
    Fa = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $a
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ya = {
        class: "d-calendar"
    },
    Ha = {
        class: "d-calendar-week"
    },
    Ua = {
        class: "d-calendar-body"
    },
    Wa = c({
        __name: "d-calendar",
        setup(e) {
            function t(e) {
                let t = (e || {}).day || new Date,
                    a = t.getMonth(),
                    l = t.getFullYear(),
                    n = new Date(l, a, 1).getDay(),
                    i = 1;
                for (var o, s, r = []; o = t, !((s = new Date(l, a, i - n)).getFullYear() === o.getFullYear() && s.getMonth() === o.getMonth() + 1 || s.getFullYear() === o.getFullYear() + 1 && 0 === s.getMonth() && 11 === o.getMonth()) || 0 !== new Date(l, a, i - n).getDay();) r.push(new Date(l, a, i - n)), i++;
                return r
            }

            function a(e) {
                let t = new Date;
                return e.getMonth() == t.getMonth() && e.getDate() == t.getDate()
            }

            function l(e) {
                let t = new Date;
                return e.getMonth() + 1 == t.getMonth()
            }

            function n(e) {
                let t = new Date;
                return e.getMonth() - 1 == t.getMonth()
            }

            function i(e) {
                return 0 == e.getDay() || 6 == e.getDay()
            }
            const o = e => r(e).format("D");
            return (e, s) => (d(), p("div", Ya, [h("ul", Ha, [(d(!0), p(F, null, Y(f(xe), (e => (d(), p("li", {
                key: e
            }, z(e), 1)))), 128))]), h("ul", Ua, [(d(!0), p(F, null, Y(t(), ((e, t) => (d(), p("li", {
                key: t
            }, [h("span", {
                class: y([{
                    isToday: a(e)
                }, {
                    prev: l(e)
                }, {
                    next: n(e)
                }, {
                    weekend: i(e)
                }])
            }, z(o(e)), 3)])))), 128))])]))
        }
    }, [
        ["__scopeId", "data-v-c83657b3"],
        ["__file", "D:/gitee/new-tab/src/components/d-calendar.vue"]
    ]),
    Ba = {
        key: 0,
        class: "d-flex-center wfull hfull b"
    },
    qa = {
        class: "f14 ac",
        style: {
            color: "#d83030",
            "font-size": "1em"
        }
    },
    Ga = {
        style: {
            "font-size": "3em"
        },
        class: "f14"
    },
    Xa = {
        key: 1,
        class: "d-flex-center hfull pl20 pr20"
    },
    Qa = {
        class: "f18"
    },
    Ja = {
        class: "f16 ml5",
        style: {
            color: "rgb(216, 48, 48)"
        }
    },
    Ka = {
        key: 2,
        class: "d-flex-between hfull wfull ac pt20 pb20",
        style: {
            "flex-direction": "column"
        }
    },
    Za = {
        class: "f12"
    },
    el = {
        class: "f36 b"
    },
    tl = {
        class: "b f14",
        style: {
            color: "rgb(216, 48, 48)"
        }
    },
    al = {
        key: 3,
        class: "wfull hfull"
    },
    ll = {
        class: "calendar-icon-body d-inlin wfull hfull"
    },
    nl = {
        class: "d-flex-center",
        style: {
            height: "26%",
            "background-color": "#ff5a5d",
            "font-size": "0.8em",
            color: "#fff"
        }
    },
    il = {
        class: "ac d-flex-center b",
        style: {
            height: "50%",
            "font-size": "2.4em"
        }
    },
    ol = {
        style: {
            height: "24%",
            "font-size": "0.7em",
            color: "#999"
        }
    },
    sl = {
        class: "ac"
    },
    rl = {
        key: 0,
        class: "calendar-icon-medius wfull hfull"
    },
    cl = {
        name: "calendar-icon"
    },
    ul = c(Object.assign(cl, {
        props: {
            size: {
                type: String,
                defautl: "medium"
            }
        },
        setup(e) {
            const t = e,
                a = g({}),
                l = {
                    1: "一",
                    2: "二",
                    3: "三",
                    4: "四",
                    5: "五",
                    6: "六",
                    0: "日"
                };
            let n = null;

            function i() {
                let e = o.get("lunarDate") || "";
                a.value.YYYY = r().format("YYYY"), a.value.M = r().format("MM"), a.value.D = r().format("DD"), a.value.yue = e.split(",")[0] || "", a.value.ri = e.split(",")[1] || "", a.value.week = `周${l[r().day()]}`
            }
            return n && clearInterval(n), X((() => {
                n && clearInterval(n)
            })), i(), n = setInterval((() => {
                i()
            }), 1e4), (l, n) => {
                const i = Z("d-watch-resize");
                return d(), O(i, null, {
                    default: $((() => [h("div", {
                        class: y([`icon-size-${e.size}`, "calendar-icon"])
                    }, ["1x1" == t.size || "mini" == t.size ? (d(), p("div", Ba, [h("span", null, [h("div", qa, z(a.value.week), 1), h("div", Ga, z(a.value.D), 1)])])) : "1x2" == t.size ? (d(), p("div", Xa, [h("span", Qa, z(a.value.M) + "/" + z(a.value.D), 1), h("span", Ja, z(a.value.week), 1)])) : "2x1" == t.size ? (d(), p("div", Ka, [h("span", Za, z(a.value.YYYY) + "/" + z(a.value.M), 1), h("span", el, z(a.value.D), 1), h("span", tl, z(a.value.week), 1)])) : ["2x2", "small", "2x4", "medium"].includes(t.size) ? (d(), p("div", al, [b(" 小于 "), h("div", {
                        class: y(["hfull wfull calendar-icon-wrap", `size-${t.size}`])
                    }, [h("span", ll, [h("div", nl, z(a.value.YYYY) + "年" + z(a.value.M) + "月 ", 1), h("div", il, z(a.value.D), 1), h("div", ol, [b(" <p>{{ date.YYYY }}年{{ date.M }}月</p> "), h("p", sl, z(a.value.yue) + "月" + z(a.value.ri) + " " + z(a.value.week), 1)])])], 2), "medium" == t.size || "2x4" == t.size ? (d(), p("div", rl, [w(Wa)])) : b("v-if", !0)])) : b("v-if", !0)], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-6b2c24e5"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/calendar/icon/icon.vue"]
    ]),
    dl = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ul
    }, Symbol.toStringTag, {
        value: "Module"
    }));
let pl = r(),
    ml = {
        YYYY: pl.format("YYYY"),
        MM: pl.format("MM"),
        M: pl.format("M"),
        DD: pl.format("DD"),
        D: pl.format("D"),
        week: `周${xe[pl.day()]}`,
        HH: pl.format("HH"),
        mm: pl.format("mm"),
        ss: pl.format("ss")
    };
const fl = g(ml);
setInterval((() => {
    ! function() {
        let e = r(),
            t = {
                YYYY: e.format("YYYY"),
                MM: e.format("MM"),
                M: e.format("M"),
                DD: e.format("DD"),
                D: e.format("D"),
                week: `周${xe[e.day()]}`,
                HH: e.format("HH"),
                mm: e.format("mm"),
                ss: e.format("ss")
            };
        fl.value = t
    }()
}), 1e3);
const _l = e => (L("data-v-b1d763e9"), e = e(), P(), e),
    vl = ["onClick"],
    gl = {
        key: 0,
        class: "d-flex-center hfull"
    },
    hl = {
        class: "b time",
        style: {
            "font-size": "2.6em"
        }
    },
    yl = {
        key: 0
    },
    bl = {
        key: 1,
        class: "d-flex-between hfull wfull pt20 pb20",
        style: {
            "flex-direction": "column",
            "font-weight": "400"
        }
    },
    wl = {
        class: "f30",
        style: {
            "font-family": "cursive"
        }
    },
    xl = {
        class: "f12",
        style: {
            "font-weight": "400"
        }
    },
    kl = {
        key: 2,
        class: "hfull wfull d-flex-center"
    },
    El = _l((() => h("em", {
        style: {
            "vertical-align": "0.08em"
        }
    }, ":", -1))),
    Dl = {
        key: 0
    },
    Il = _l((() => h("em", {
        style: {
            "vertical-align": "0.08em"
        }
    }, ":", -1))),
    Ol = {
        class: "f16"
    },
    zl = {
        name: "clock-icon"
    },
    Tl = c(Object.assign(zl, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = v((() => s((() =>
                        import ("./FitScreenRound.001d7f0f.js").then((e => e.F))), ["./FitScreenRound.001d7f0f.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url)));

            function l() {
                s((() => Promise.resolve().then((() => et))), void 0,
                    import.meta.url).then((e => {
                    e.setDialogApp({
                        component: "clock",
                        insetType: "component",
                        config: {
                            isFullscreen: !0
                        }
                    })
                }))
            }
            return (n, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, null, {
                    default: $((() => [h("div", {
                        class: y(["hfull wfull clock-icon-wrap ac", `icon-size-${e.size}`])
                    }, [h("i", {
                        class: "d-icon fullsrceen-btn",
                        onClick: [D(l, ["stop"]), i[0] || (i[0] = (...e) => n.toggle && n.toggle(...e))],
                        title: "快捷键F11可切换至全屏"
                    }, [(d(), O(S(f(a))))], 8, vl), ["1x1", "mini", "1x2"].includes(t.size) ? (d(), p("div", gl, [h("p", hl, [h("time", null, z(fl.value.HH) + ":" + z(fl.value.mm), 1), "1x2" == e.size ? (d(), p("time", yl, ":" + z(fl.value.ss), 1)) : b("v-if", !0)])])) : ["2x1"].includes(t.size) ? (d(), p("div", bl, [h("span", wl, [h("p", null, z(fl.value.HH), 1), h("p", null, z(fl.value.mm), 1)]), h("span", xl, [h("p", null, z(fl.value.MM) + "/" + z(fl.value.DD), 1), h("p", null, z(fl.value.week), 1)])])) : ["2x2", "2x4", "small", "medium"].includes(t.size) ? (d(), p("div", kl, [h("span", null, [h("p", {
                        class: "b time",
                        style: m(`font-size:${["2x4","medium"].includes(t.size)?2.6:2.01}em;`)
                    }, [h("time", null, [C(z(fl.value.HH), 1), El, C(z(fl.value.mm), 1)]), ["2x4", "medium"].includes(t.size) ? (d(), p("time", Dl, [Il, C(z(fl.value.ss), 1)])) : b("v-if", !0)], 4), h("p", Ol, z(fl.value.MM) + "/" + z(fl.value.DD) + " " + z(fl.value.week), 1)])])) : b("v-if", !0)], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-b1d763e9"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/clock/icon/icon.vue"]
    ]),
    Al = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Tl
    }, Symbol.toStringTag, {
        value: "Module"
    }));
var Ll, Pl = {
    exports: {}
};
const Cl = Pl.exports = (Ll = "day", function(e, t, a) {
    var l = function(e) {
            return e.add(4 - e.isoWeekday(), Ll)
        },
        n = t.prototype;
    n.isoWeekYear = function() {
        return l(this).year()
    }, n.isoWeek = function(e) {
        if (!this.$utils().u(e)) return this.add(7 * (e - this.isoWeek()), Ll);
        var t, n, i, o = l(this),
            s = (t = this.isoWeekYear(), i = 4 - (n = (this.$u ? a.utc : a)().year(t).startOf("year")).isoWeekday(), n.isoWeekday() > 4 && (i += 7), n.add(i, Ll));
        return o.diff(s, "week") + 1
    }, n.isoWeekday = function(e) {
        return this.$utils().u(e) ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
    };
    var i = n.startOf;
    n.startOf = function(e, t) {
        var a = this.$utils(),
            l = !!a.u(t) || t;
        return "isoweek" === a.p(e) ? l ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : i.bind(this)(e, t)
    }
});
r.extend(Cl);
const Sl = async (e, t) => {
        if (!t) return Math.ceil(r(e).diff(r(), "days", !0));
        if ("year" == t) {
            let t = r().format("YYYY"),
                a = r(e).format("MM-DD");
            if (r().format("MM-DD") == a) return "0";
            r().isAfter(r(`${t}-${a}`)) && t++;
            let l = r(`${t}-${a}`);
            return Math.ceil(r(l).diff(r(), "days", !0))
        }
        if ("month" == t) {
            let t = r().format("YYYY"),
                a = r().format("MM"),
                l = e.toString().length > 2 ? r(e).format("DD") : e;
            if (r().format("DD") == l) return "0";
            r().isAfter(r(`${t}-${a}-${l}`)) && a++;
            let n = r(`${t}-${a}-${l}`);
            return Math.ceil(r(n).diff(r(), "days", !0))
        }
        if ("week" == t) {
            let t = r().isoWeekday(),
                a = r(e).isoWeekday() - t;
            return a > 0 ? a : a + 7
        }
        if ("festival" == t) {
            let e = null,
                {
                    Solar: t,
                    Lunar: a
                } = await s((() =>
                        import ("./index.c210f77a.js").then((e => e.i))), ["./index.c210f77a.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url),
                l = (new Date).getTime();
            for (; !e;) {
                let n = t.fromDate(new Date(l)),
                    i = [...a.fromDate(new Date(l)).getFestivals(), ...n.getFestivals()];
                i.length ? e = {
                    number: Math.ceil(r(l).diff(r(), "days", !0)),
                    target: r(l).format("YYYY-MM-DD"),
                    title: i.join(",")
                } : l += 864e5
            }
            return e
        }
        return ""
    },
    Rl = {
        target: "10",
        workTime: ["2020-12-20 09:00:00", "2020-12-20 18:00:00"],
        repeatWeek: ["1", "2", "3", "4", "5"],
        bgColor: "#ffffff",
        textColor: "#666666",
        family: "HarmonyOS_Sans",
        mask: 0
    },
    jl = e => (L("data-v-149bd026"), e = e(), P(), e),
    Ml = {
        class: "icon-2x4-offwork"
    },
    Vl = {
        class: "title"
    },
    Nl = [jl((() => h("span", null, "下班还有", -1)))],
    $l = {
        class: "time mt5",
        style: {
            "line-height": "1.5em",
            height: "1.6em"
        }
    },
    Fl = jl((() => h("p", null, "发薪", -1))),
    Yl = {
        class: "b"
    },
    Hl = jl((() => h("p", null, "天", -1))),
    Ul = jl((() => h("p", null, "周五", -1))),
    Wl = {
        class: "b"
    },
    Bl = jl((() => h("p", null, "天", -1))),
    ql = {
        style: {
            "text-overflow": "inherit"
        },
        class: "d-elip"
    },
    Gl = {
        class: "b"
    },
    Xl = jl((() => h("p", null, "天", -1))),
    Ql = jl((() => h("div", {
        class: "countdown-img"
    }, null, -1))),
    Jl = {
        style: {
            height: "60%"
        }
    },
    Kl = jl((() => h("div", {
        class: "countdown-img"
    }, null, -1))),
    Zl = {
        key: 0
    },
    en = {
        key: 1,
        class: "countdown-img wfull"
    },
    tn = {
        class: "ac"
    },
    an = {
        style: {
            "font-size": "0.6em"
        }
    },
    ln = {
        style: {
            "font-size": "1.3em",
            "white-space": "nowrap",
            "font-weight": "var(--fontWeight)"
        },
        class: "b d-flex-center"
    },
    nn = jl((() => h("div", {
        class: "countdown-img"
    }, null, -1))),
    on = c({
        __name: "icon",
        props: {
            data: {
                type: Object,
                default: Rl
            },
            size: String
        },
        setup(e) {
            const t = e,
                a = g("00:00:00"),
                l = g(0),
                n = g(o.get("daysmatter-festival") || {}),
                i = g(0),
                s = {
                    0: 6,
                    1: 4,
                    2: 3,
                    3: 2,
                    4: 1,
                    5: 0,
                    6: 5
                };
            return te((() => {
                fl.value, a.value = ((e, t = ["1", "2", "3", "4", "5"]) => {
                    "string" == typeof e && (e = ["2022-09-01 00:00:00", e]);
                    let a = r().format("YYYY-MM-DD"),
                        l = r(`${a} ${r(e[0]).format("HH:mm:ss")}`),
                        n = r(`${a} ${r(e[1]).format("HH:mm:ss")}`);
                    if (-1 == t.findIndex((e => e == r().day())) || r().isBefore(l) || r().isAfter(n)) return "休息时间";
                    let i = n.diff(r(), "h"),
                        o = Math.floor(n.diff(r(), "m") % 60),
                        s = Math.floor(n.diff(r(), "s") % 60);
                    return i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), s < 10 && (s = "0" + s), `${i}:${o}:${s}`
                })(t.data.workTime, t.data.repeatWeek), Sl(t.data.target, "month").then((e => {
                    l.value = e
                })), Sl(t.data.target, "festival").then((e => {
                    o.set("daysmatter-festival", e), n.value = e || {}
                })), i.value = s[r().day()]
            })), (o, s) => {
                const r = Z("d-watch-resize");
                return d(), O(r, null, {
                    default: $((() => [h("div", {
                        class: "hfull countdown-wrap",
                        style: m(`\n    --bgColor:${t.data.bgColor};\n    --bgImg:url(${t.data.bgColor}?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_90);\n    --textColor:${t.data.textColor};\n    --textSubColor:${t.data.textColor}cf;\n    --fontFamily:${t.data.family};\n    --maskBg:rgba(0,0,0,${t.data.mask/100});\n    --fontWeight:${"休息时间"===a.value?"400":"bold"};\n    --workStatus:url(https://files.codelife.cc/itab/widget/countdown/${"休息时间"===a.value?"off":"on"}work.png?x-oss-process=image/resize,limit_0,m_fill,w_300,h_300/quality,q_100)`)
                    }, [
                        ["2x4"].includes(e.size) ? (d(), p("div", {
                            key: 0,
                            class: y(["hfull wfull", `icon-size-${e.size}`]),
                            style: {
                                color: "var(--textColor)"
                            }
                        }, [h("div", Ml, [x(h("p", Vl, Nl, 512), [
                            [I, "休息时间" !== a.value]
                        ]), h("p", $l, [h("time", {
                            class: "d-block hfull",
                            style: m([{
                                "font-weight": "var(--fontWeight)"
                            }, `font-size: ${"休息时间"===a.value?"1.3em":"1.6em;"} `])
                        }, z(a.value), 5)])]), h("ul", {
                            class: "icon-2x4-box",
                            style: m([{
                                height: "50%"
                            }, `--boxBg:${t.data.textColor}1f`])
                        }, [h("li", null, [Fl, h("p", Yl, z(l.value), 1), Hl]), h("li", null, [Ul, h("p", Wl, z(i.value), 1), Bl]), h("li", null, [h("p", ql, z(n.value.title), 1), h("p", Gl, z(n.value.number), 1), Xl])], 4), Ql], 2)) : ["2x1"].includes(e.size) ? (d(), p("div", {
                            key: 1,
                            class: y(["hfull wfull", `icon-size-${e.size}`])
                        }, [h("div", Jl, [(d(!0), p(F, null, Y(a.value.split(":"), (e => (d(), p("p", {
                            class: y({
                                "off-work": "休息时间" === e
                            }),
                            style: {
                                "font-size": "2em"
                            },
                            key: e
                        }, z(e), 3)))), 128))]), Kl], 2)) : ["1x1"].includes(e.size) ? (d(), p("div", {
                            key: 2,
                            class: y(["hfull wfull d-flex-center", `icon-size-${e.size}`]),
                            style: {
                                "font-size": "1em"
                            }
                        }, ["休息时间" !== a.value ? (d(), p("span", Zl, z(a.value), 1)) : (d(), p("div", en))], 2)) : (d(), p("div", {
                            key: 3,
                            class: y(["hfull wfull", `icon-size-${e.size}`])
                        }, [h("div", tn, [x(h("p", an, " 下班还有 ", 512), [
                            [I, "休息时间" !== a.value]
                        ]), h("div", ln, z(a.value), 1)]), nn], 2))
                    ], 4)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-149bd026"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/countdown/icon/icon.vue"]
    ]),
    sn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: on
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rn = {
        key: 0,
        class: "wfull hfull d-flex-center ac",
        style: {
            padding: "0.2em"
        }
    },
    cn = {
        class: "d-nowrap",
        style: {
            "font-size": "1em"
        }
    },
    un = {
        style: {
            "font-size": "3em"
        }
    },
    dn = {
        key: 1,
        style: {
            padding: "4px 12px"
        },
        class: "wfull hfull d-flex-between"
    },
    pn = {
        class: "d-nowrap d-elip",
        style: {
            "font-size": "1em"
        }
    },
    mn = {
        class: "b ml10",
        style: {
            "font-size": "4em"
        }
    },
    fn = {
        key: 2,
        class: "wfull hfull d-flex-between ac d-flex-column",
        style: {
            padding: "12px 0"
        }
    },
    _n = {
        class: "d-nowrap",
        style: {
            "font-size": "1em"
        }
    },
    vn = {
        class: "b",
        style: {
            "font-size": "4em"
        }
    },
    gn = {
        class: "d-flex-between hfull",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column",
            padding: "0.9em"
        }
    },
    hn = {
        class: "d-elip",
        style: {
            "font-size": "0.6em",
            "line-height": "1.1"
        }
    },
    yn = {
        class: "d-inline",
        style: {
            "font-size": "2em"
        }
    },
    bn = {
        class: "b"
    },
    wn = (e => (L("data-v-4fda3c94"), e = e(), P(), e))((() => h("i", {
        class: "f12"
    }, "天", -1))),
    xn = {
        class: "mt5",
        style: {
            "font-size": "0.6em"
        }
    },
    kn = {
        key: 4,
        class: "days-icon-medius wfull hfull"
    },
    En = c({
        __name: "icon",
        props: {
            size: {
                type: String,
                defautl: "2x2"
            },
            data: {
                type: Object,
                default: {
                    name: "倒计时",
                    title: "国庆节",
                    target: "2023-10-01",
                    repeat: "year",
                    bgColor: "#fff",
                    textColor: "#8e726f",
                    family: "HarmonyOs_Sans",
                    icon: ""
                }
            }
        },
        setup(e) {
            const t = e,
                a = (e, t = "D") => r(e).format(t),
                l = o.get("daysmatter-festival") || {};
            "festival" === t.data.repeat && (t.data.title = l.title, t.data.target = l.target);
            const n = g("object" == typeof l ? l.number || 0 : Math.abs(l));

            function s() {
                Sl(t.data.target, t.data.repeat).then((e => {
                    "object" == typeof e ? (t.data, t.data.title = e.title, t.data.target = e.target, n.value = e.number || 0) : n.value = Math.abs(e)
                }))
            }
            return i((() => fl.value.D), (e => {
                s()
            }), {
                immediate: !0
            }), i((() => t.data), (e => {
                s()
            }), {
                deep: !0
            }), (l, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, null, {
                    default: $((() => [h("div", {
                        class: y([`icon-size-${e.size}`, "days-icon d-flex"]),
                        style: m(`\n    --bgColor:${t.data.bgColor};\n    --bgImg:url(${t.data.bgColor}?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_90);\n    --textColor:${t.data.textColor};\n    --textSubColor:${t.data.textColor}cf;\n    --fontFamily:${t.data.family};\n    --maskBg:rgba(0,0,0,${t.data.mask/100});\n    `)
                    }, [
                        ["1x1", "mini"].includes(e.size) ? (d(), p("div", rn, [h("span", null, [h("div", cn, z(t.data.title), 1), h("div", un, z(n.value), 1)])])) : ["1x2"].includes(e.size) ? (d(), p("div", dn, [h("div", pn, [C(z(t.data.title) + " ", 1), h("p", null, z(a(t.data.target, "MM-DD")), 1)]), h("div", mn, z(n.value), 1)])) : ["2x1"].includes(e.size) ? (d(), p("div", fn, [h("div", _n, z(t.data.title), 1), h("div", vn, z(n.value), 1), h("p", null, z(a(t.data.target, "MM-DD")), 1)])) : ["2x2", "small", "medium", "2x4"].includes(e.size) ? (d(), p(F, {
                            key: 3
                        }, [b(" 小于 "), h("div", gn, [h("div", hn, z(t.data.title), 1), h("p", yn, [h("span", bn, z(n.value), 1), wn]), h("p", xn, z(t.data.target), 1)])], 2112)) : b("v-if", !0), ["medium", "2x4"].includes(e.size) ? (d(), p("div", kn, [w(Wa, {
                            style: m(`--color:${t.data.textColor}`)
                        }, null, 8, ["style"])])) : b("v-if", !0)
                    ], 6)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-4fda3c94"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/daysMatter/icon/icon.vue"]
    ]),
    Dn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: En
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    In = {
        key: 0,
        class: "hfull ac d-flex-center"
    },
    On = {
        class: "b f16"
    },
    zn = {
        key: 1,
        style: {
            "font-size": "0.7em"
        },
        class: "hfull d-flex-center pt10 pbt0"
    },
    Tn = {
        style: {
            "writing-mode": "vertical-lr"
        }
    },
    An = {
        class: "b f16"
    },
    Ln = {
        key: 2,
        class: "hfull"
    },
    Pn = {
        class: "d-flex-center d-elip",
        style: {
            "font-size": "0.7em",
            height: "30%",
            color: "var(--bgColor, '#fff')",
            "background-color": "var(--textColor)"
        }
    },
    Cn = {
        style: {
            height: "70%",
            "font-size": "2.8em"
        },
        class: "b d-flex-center"
    },
    Sn = {},
    Rn = c(Object.assign(Sn, {
        __name: "icon2",
        props: {
            size: {
                type: String,
                defautl: "2x2"
            },
            data: {
                type: Object,
                default: {
                    name: "纪念日",
                    title: "发工资还有",
                    target: "2021-12-01",
                    repeat: "month",
                    bgColor: "#fff",
                    textColor: "#1890ff",
                    family: "HarmonyOs_Sans",
                    icon: "2"
                }
            }
        },
        setup(e) {
            const t = e,
                a = g(20);

            function l() {
                Sl(t.data.target, t.data.repeat).then((e => {
                    "object" == typeof e ? (t.data.title = e.title, t.data.target = e.target, a.value = e.number || 0) : a.value = Math.abs(e)
                }))
            }
            i((() => fl.value.D), (e => {
                l()
            }), {
                immediate: !0
            }), i((() => t.data), (e => {
                l()
            }), {
                deep: !0
            });
            const n = u((() => t.data.bgColor.includes("http") ? "#ffffff" === t.data.textColor ? "#333333" : "#ffffff" : t.data.bgColor));
            return (l, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, null, {
                    default: $((() => [h("div", {
                        style: m(`\n    --bgColor: ${f(n)};\n    --bgImg:url(${t.data.bgColor}?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_90);\n    --textColor:${t.data.textColor};\n    --textSubColor:${t.data.textColor}cf;\n    --fontFamily:${t.data.family};\n    --maskBg:rgba(0,0,0,${t.data.mask/100});\n    `),
                        class: "days-icon2"
                    }, [
                        ["1x2"].includes(e.size) ? (d(), p("div", In, [h("span", null, [C(z(t.data.title) + " ", 1), h("p", On, z(a.value), 1)])])) : b("v-if", !0), ["2x1"].includes(e.size) ? (d(), p("div", zn, [h("p", Tn, z(t.data.title), 1), h("p", An, z(a.value), 1)])) : (d(), p("div", Ln, [h("h2", Pn, z(t.data.title), 1), h("div", Cn, z(a.value), 1), b(' <p class="ac" style="font-size: 0.6em;height:14%" :style="textStyle">{{ props.data.target }}</p> ')]))
                    ], 4)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-838074ca"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/daysMatter/icon/icon2.vue"]
    ]),
    jn = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Rn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Mn = e => (L("data-v-8b7613d7"), e = e(), P(), e),
    Vn = {
        key: 0,
        class: "wfull hfull d-flex-center"
    },
    Nn = {
        class: "f18 b"
    },
    $n = {
        class: "wfull hfull d-flex-center"
    },
    Fn = {
        class: "d-normal",
        style: {
            height: "40%",
            "font-size": "1em"
        }
    },
    Yn = {
        class: "f18 b"
    },
    Hn = {
        class: "wfull hfull d-flex-center"
    },
    Un = {
        class: "d-normal",
        style: {
            "font-size": "1em",
            "writing-mode": "vertical-lr"
        }
    },
    Wn = {
        class: "b",
        style: {
            "font-size": "3em",
            "writing-mode": "vertical-lr"
        }
    },
    Bn = Mn((() => h("em", {
        class: "f12"
    }, "天", -1))),
    qn = {
        class: "d-flex-between hfull wfull",
        style: {
            "flex-direction": "column",
            padding: "0.9em"
        }
    },
    Gn = {
        class: "d-elip",
        style: {
            "font-size": "0.6em",
            "line-height": "1.2"
        }
    },
    Xn = {
        class: "d-inline",
        style: {
            "font-size": "1.7em"
        }
    },
    Qn = {
        class: "b"
    },
    Jn = Mn((() => h("i", {
        class: "f12"
    }, "天", -1))),
    Kn = {
        class: "mt5",
        style: {
            "font-size": "0.6em"
        }
    },
    Zn = {},
    ei = c(Object.assign(Zn, {
        __name: "icon3",
        props: {
            size: {
                type: String,
                defautl: "medium"
            },
            data: {
                type: Object,
                default: {
                    name: "恋爱日期",
                    title: "和她❤️恋爱已经",
                    target: "2021-02-28",
                    repeat: "",
                    bgColor: "#fff",
                    textColor: "#eb8197",
                    family: "",
                    icon: "3"
                }
            }
        },
        setup(e) {
            const t = e,
                a = u((() => t.data)),
                l = g({});

            function n() {
                Sl(t.data.target, t.data.repeat).then((e => {
                    "object" == typeof e ? (t.data.title = e.title, t.data.target = e.target, l.value = e.number || 0) : l.value = Math.abs(e)
                }))
            }
            return a.value.target, i((() => fl.value.D), (e => {
                n()
            }), {
                immediate: !0
            }), i((() => t.data), (e => {
                n()
            }), {
                deep: !0
            }), (a, n) => {
                const i = Z("d-watch-resize");
                return d(), O(i, null, {
                    default: $((() => [h("div", {
                        class: y([`icon-size-${e.size}`, "days-icon ac"]),
                        style: m(`\n    --bgColor:${t.data.bgColor};\n    --bgImg:url(${t.data.bgColor}?x-oss-process=image/resize,limit_0,m_fill,w_400,h_200/quality,q_90);\n    --textColor:${t.data.textColor};\n    --textSubColor:${t.data.textColor}cf;\n    --fontFamily:${t.data.family};\n    --maskBg:rgba(0,0,0,${t.data.mask/100});\n    `)
                    }, [b(" 1x1 "), ["1x1", "mini"].includes(e.size) ? (d(), p("div", Vn, [h("div", Nn, z(l.value), 1)])) : ["1x2"].includes(e.size) ? (d(), p(F, {
                        key: 1
                    }, [b(" 1x2 "), h("div", $n, [h("span", null, [h("div", Fn, z(t.data.title), 1), h("div", Yn, z(l.value), 1)])])], 2112)) : ["2x1"].includes(e.size) ? (d(), p(F, {
                        key: 2
                    }, [b(" 2x1 "), h("div", Hn, [h("div", Un, z(t.data.title), 1), h("div", Wn, [C(z(l.value) + " ", 1), Bn])])], 2112)) : (d(), p(F, {
                        key: 3
                    }, [b(" 其他 "), h("div", qn, [h("div", Gn, z(t.data.title), 1), h("p", Xn, [h("span", Qn, z(l.value), 1), Jn]), h("p", Kn, z(t.data.target), 1)])], 2112))], 6)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-8b7613d7"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/daysMatter/icon/icon3.vue"]
    ]),
    ti = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ei
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ai = {
        class: "app-eat d-flex-center"
    },
    li = {
        class: "eat-box ac"
    },
    ni = {
        class: "b"
    },
    ii = c({
        __name: "Content",
        setup(e) {
            const t = g(""),
                a = g(!1),
                l = u((() => t.value && !a.value ? {
                    text: "换一个",
                    class: "change"
                } : t.value && a.value ? {
                    text: "停下",
                    class: "stop"
                } : {
                    text: "开始",
                    class: "start"
                }));
            let n = null,
                i = 0;

            function o() {
                a.value = !a.value, a.value ? async function() {
                    n && clearInterval(n);
                    const {
                        foodMenus: e
                    } = await s((() =>
                            import ("./foodMenus.34a925ef.js")), ["./foodMenus.34a925ef.js", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                        import.meta.url);
                    let l = e.value.split(" "),
                        o = l.length;
                    i = 0, n = setInterval((async () => {
                        const {
                            getRandomInt: e
                        } = await s((() =>
                                import ("./el-select.e274bb48.js").then((e => e.bo))), ["./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                            import.meta.url);
                        let r = e(o);
                        t.value = l[r], i++, i > 50 && (clearInterval(n), a.value = !1)
                    }), 60)
                }() : clearInterval(n)
            }
            return (e, a) => (d(), p("div", ai, [h("div", li, [h("h1", ni, z(t.value || "今天吃什么"), 1), h("div", {
                class: y([f(l).class, "eat-button d-flex-center"]),
                onClick: a[0] || (a[0] = D((e => o()), ["stop"]))
            }, [h("span", null, z(f(l).text), 1)], 2)])]))
        }
    }, [
        ["__scopeId", "data-v-b4ebaa89"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/eat/Content.vue"]
    ]),
    oi = c({
        __name: "icon",
        setup(e) {
            function t() {}
            return (e, a) => {
                const l = Z("d-watch-resize");
                return d(), O(l, {
                    onResize: t
                }, {
                    default: $((() => [w(ii)])),
                    _: 1
                })
            }
        }
    }, [
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/eat/icon/icon.vue"]
    ]),
    si = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: oi
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ri = {
        class: "d-progress"
    },
    ci = ["stroke-width"],
    ui = ["stroke-width"],
    di = {
        class: "d-progress-text"
    },
    pi = c({
        __name: "d-progress",
        props: {
            percentage: {
                type: Number,
                default: 0
            },
            width: {
                type: String,
                default: "6.3"
            }
        },
        setup(e) {
            const t = e,
                a = g(null);
            return i((() => t.percentage), (e => {
                Q((() => {
                    a.value.querySelector(".d-progress-circle__path").style.strokeDasharray = 289.027 / 100 * e + " 289.027"
                }))
            }), {
                immediate: !0
            }), (t, l) => (d(), p("div", ri, [(d(), p("svg", {
                ref_key: "dProgress",
                ref: a,
                viewBox: "0 0 100 100"
            }, [h("path", {
                d: "M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92",
                stroke: "rgba(var(--alpha-color),.1)",
                "stroke-width": e.width,
                fill: "none",
                style: {
                    "stroke-dasharray": "289.027px, 289.027px",
                    "stroke-dashoffset": "0px"
                }
            }, null, 8, ci), h("path", {
                class: "d-progress-circle__path",
                d: " M 50 50 m 0 -46 a 46 46 0 1 1 0 92 a 46 46 0 1 1 0 -92",
                stroke: "#1890ff",
                fill: "none",
                opacity: "1",
                "stroke-linecap": "round",
                "stroke-width": e.width,
                style: {
                    "stroke-dasharray": "0, 289.027px",
                    "stroke-dashoffset": "0px",
                    transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s, opacity 0.6s ease 0s"
                }
            }, null, 8, ui)], 512)), h("span", di, [J(t.$slots, "default", {}, void 0, !0)])]))
        }
    }, [
        ["__scopeId", "data-v-e13e58d1"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/habit/d-progress.vue"]
    ]),
    mi = {
        class: "wfull hfull d-flex-center"
    },
    fi = {
        key: 0,
        class: "b f14"
    },
    _i = {
        key: 1,
        class: "d-flex-center"
    },
    vi = {
        class: "ml20"
    },
    gi = {
        class: "f12",
        style: {
            "margin-bottom": "0.2em"
        }
    },
    hi = {
        class: "b f14"
    },
    yi = {
        key: 2,
        class: "d-flex-center ac"
    },
    bi = {
        class: "mt20"
    },
    wi = {
        class: "f12",
        style: {
            "margin-bottom": "0.2em"
        }
    },
    xi = {
        class: "b f14"
    },
    ki = {
        class: "d-flex-center wfull hfull"
    },
    Ei = {
        key: 0,
        class: "checkin-handle"
    },
    Di = {
        class: "checkin-progress"
    },
    Ii = {
        class: "b f30"
    },
    Oi = {
        class: "f12",
        style: {
            "margin-top": "0.2em"
        }
    },
    zi = {
        key: 0,
        class: "d-flex-y",
        style: {
            width: "50%"
        }
    },
    Ti = {
        class: "b f30"
    },
    Ai = {
        style: {
            "margin-top": "0.2em",
            "font-size": "0.7em"
        },
        class: "d-elip"
    },
    Li = ["onClick"],
    Pi = ["onClick"],
    Ci = c({
        __name: "icon",
        props: {
            size: {
                type: String,
                defautl: "2x2"
            },
            data: {
                type: Object,
                default: {
                    title: "每天喝8杯水",
                    target: 8,
                    current: 0,
                    reset: "1"
                }
            }
        },
        setup(e) {
            const t = e,
                a = v((() => s((() =>
                        import ("./RefreshRight.be739b02.js")), ["./RefreshRight.be739b02.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url))),
                l = v((() => s((() => Promise.resolve().then((() => ba))), void 0,
                    import.meta.url)));
            if (t.data.reset) {
                const e = r().format("YYYYMMDD");
                t.data.date !== e && (t.data.date = e, t.data.current = 0)
            }
            const n = u((() => {
                    let e = Math.floor(t.data.current / t.data.target * 100);
                    return e >= 100 ? 100 : e
                })),
                i = g("size-3"),
                o = g(120);

            function c(e) {
                let t = e.height;
                o.value = t ? t - 24 : 120, i.value = t > 0 && t <= 100 ? "size-1" : "size-2"
            }

            function m() {
                t.data.current = 0
            }

            function _() {
                t.data.current = t.data.current + 1
            }
            return (i, o) => {
                const s = Z("d-watch-resize");
                return d(), O(s, {
                    onResize: c
                }, {
                    default: $((() => [b(" {{ size }} "), h("div", {
                        class: y([e.size, "checkin-icon"])
                    }, [h("div", mi, [
                        ["mini", "1x1"].includes(e.size) ? (d(), p("div", fi, [h("span", null, z(e.data.current) + "/" + z(e.data.target), 1)])) : ["1x2"].includes(e.size) ? (d(), p("div", _i, [w(pi, {
                            width: "10",
                            style: {
                                width: "40px",
                                height: "40px"
                            },
                            percentage: f(n)
                        }, null, 8, ["percentage"]), h("span", vi, [h("div", gi, z(e.data.title), 1), h("div", hi, z(e.data.current) + "/" + z(e.data.target), 1)])])) : ["2x1"].includes(e.size) ? (d(), p("div", yi, [w(pi, {
                            width: "10",
                            style: {
                                width: "40px",
                                height: "40px"
                            },
                            percentage: f(n)
                        }, null, 8, ["percentage"]), h("span", bi, [h("div", wi, z(e.data.title), 1), h("div", xi, z(e.data.current) + "/" + z(e.data.target), 1)])])) : ["2x2", "small", "medium", "2x4"].includes(t.size) ? (d(), p(F, {
                            key: 3
                        }, [b(" 小于 "), h("div", ki, [h("div", {
                            class: y(["habit-progress", `icon-size-${e.size}`])
                        }, [w(pi, {
                            percentage: f(n)
                        }, {
                            default: $((() => [
                                ["medium", "2x4"].includes(t.size) ? b("v-if", !0) : (d(), p("div", Ei, [h("span", Di, [h("div", Ii, z(e.data.current) + "/" + z(e.data.target), 1), h("div", Oi, z(e.data.title), 1)])]))
                            ])),
                            _: 1
                        }, 8, ["percentage"]), ["medium", "2x4"].includes(t.size) ? (d(), p("span", zi, [h("div", null, [h("div", Ti, z(e.data.current) + "/" + z(e.data.target), 1), h("div", Ai, z(e.data.title), 1)])])) : b("v-if", !0)], 2)])], 2112)) : b("v-if", !0), h("i", {
                            class: "checkin-handle-box d-flex-center reset d-icon f16",
                            style: {
                                left: "12%"
                            },
                            title: "重置",
                            onClick: D(m, ["stop"])
                        }, [w(f(a))], 8, Li), h("i", {
                            class: "checkin-handle-box d-flex-center plus d-icon f16",
                            style: {
                                right: "12%"
                            },
                            title: "+",
                            onClick: D(_, ["stop"])
                        }, [w(f(l))], 8, Pi)
                    ])], 2)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-a40a42b7"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/habit/icon/icon.vue"]
    ]),
    Si = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ci
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ri = {
        alt: "ip查询",
        class: "ip-icon",
        src: "https://files.codelife.cc/icons/ip.svg"
    };
const ji = c({
        name: "ip-icon"
    }, [
        ["render", function(e, t, a, l, n, i) {
            return d(), p("img", Ri)
        }],
        ["__scopeId", "data-v-77744390"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/ip/icon/icon.vue"]
    ]),
    Mi = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ji
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Vi = {
        key: 0,
        alt: "小鸡词典",
        style: {
            "background-color": "#fed303"
        },
        class: "d-block wfull hfull",
        src: "https://files.codelife.cc/icons/jikipedia.svg"
    },
    Ni = {
        key: 1,
        class: "hfull jidic-wrap",
        style: {
            padding: "0.64em"
        }
    },
    $i = {
        class: "hfull d-hidden"
    },
    Fi = {
        class: "mb5 jidic-title b"
    },
    Yi = ["title"],
    Hi = {
        name: "jikipedia-icon"
    },
    Ui = c(Object.assign(Hi, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = g(o.get("jidicRandom") || {});
            return i((() => t.size), (async e => {
                if (["medium", "small", "2x2", "2x4"].includes(e)) {
                    let e = await s((() =>
                            import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                        import.meta.url);
                    if (e = e.default, await e.get("jidicRandom") && a.value.title) return;
                    s((() =>
                            import ("./jikipedia.70ff3e41.js")), ["./jikipedia.70ff3e41.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                        import.meta.url).then((t => {
                        t.jidicRandomApi().then((t => {
                            a.value.title || (a.value = t.data || {}), o.set("jidicRandom", t.data), e.set("jidicRandom", t.data, 6e5)
                        }))
                    }))
                }
            }), {
                immediate: !0
            }), (t, l) => {
                const n = Z("d-watch-resize");
                return d(), O(n, null, {
                    default: $((() => [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", Vi)) : (d(), p("div", Ni, [h("div", $i, [h("h2", Fi, z(a.value.title), 1), h("p", {
                            class: "jidic-content d-scrollbar-hide",
                            title: a.value.content,
                            onMousewheel: l[0] || (l[0] = D((() => {}), ["stop"]))
                        }, z(a.value.content), 41, Yi)])]))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-8b0e8375"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/jikipedia/icon/icon.vue"]
    ]),
    Wi = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ui
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bi = {
        class: "hfull"
    },
    qi = {
        class: "f14"
    },
    Gi = {
        class: "wfull ac hfull"
    },
    Xi = {
        class: "d-cell"
    },
    Qi = (e => (L("data-v-461b30e8"), e = e(), P(), e))((() => h("div", {
        class: "laborer-body",
        style: {
            "background-image": "url(/app/laborer/6.png)"
        }
    }, null, -1))),
    Ji = c({
        __name: "icon",
        props: {
            size: String
        },
        setup(e) {
            const t = g("周末躺平");

            function a() {
                var e = r().valueOf(),
                    a = r().day();
                if (0 != a && 6 != a) {
                    0 === 5 - a && (t.value = "今天是周五啦")
                }
                var l = r(e - 864e5 * (a - 1)).valueOf();
                let n = [];
                for (let t = 0; t < 5; t++) {
                    let e = r(l + 864e5 * t).day(),
                        a = {
                            day: e,
                            week: ["日", "一", "二", "三", "四", "五", "六"][e],
                            date: r(l + 864e5 * t).format("MM/DD")
                        };
                    n.push(a)
                }
                return n
            }
            return (l, n) => (d(), p("div", Bi, [
                ["2x4"].includes(e.size) ? (d(), p("div", {
                    key: 0,
                    class: y(["hfull wfull laborer-wrap", `icon-size-${e.size}`])
                }, [h("p", qi, z(t.value), 1), h("ul", Gi, [(d(!0), p(F, null, Y(a(), (e => (d(), p("li", {
                    class: "d-inline",
                    style: {
                        width: "20%"
                    },
                    key: e.day
                }, [h("div", {
                    class: "laborer-body",
                    style: m(`background-image:url(/app/laborer/${e.day}.png)`)
                }, null, 4), h("p", null, "周" + z(e.week), 1), h("p", null, z(e.date), 1)])))), 128)), b(' <div\r\n          class="laborer-body"\r\n          style="background-image:url(/app/laborer/6.png);width:80%; height:60%"\r\n        ></div>')])], 2)) : (d(), p("div", {
                    key: 1,
                    class: y(["hfull wfull laborer-wrap", `icon-size-${e.size}`])
                }, [h("div", Xi, [h("p", null, z(fl.value.YYYY) + "-" + z(fl.value.MM) + "-" + z(fl.value.DD), 1), h("p", null, z(fl.value.week), 1)]), Qi], 2))
            ]))
        }
    }, [
        ["__scopeId", "data-v-461b30e8"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/laborer11/icon/icon.vue"]
    ]),
    Ki = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ji
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Zi = ["onClick"],
    eo = [(e => (L("data-v-c5f81482"), e = e(), P(), e))((() => h("button", {
        title: "录制"
    }, null, -1)))],
    to = {
        name: "lusun-icon"
    },
    ao = c(Object.assign(to, {
        props: {
            size: String
        },
        setup(e) {
            const t = g(null);
            let a = !1;

            function l(e) {
                a || s((() =>
                        import ("./index.bd01dcfa.js")), ["./index.bd01dcfa.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./config-provider.35572354.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.8720847e.js", "./typescript.72bf8adc.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./aria.66f3f71c.js", "./index.7c0d977d.js"],
                    import.meta.url).then((e => {
                    e.ElMessage({
                        message: W("p", null, [W("span", {
                            style: "color:#fff"
                        }, "当前浏览器不支持芦笋录屏，跳转到官网下载客户端"), W("a", {
                            style: "color: #0092fb",
                            href: "https://lusun.com/?utm_source=itab",
                            target: "_blank"
                        }, "lusun.com")])
                    })
                })), s((() =>
                        import ("./useSta.b98c784e.js")), ["./useSta.b98c784e.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url).then((e => {
                    e.useStatisticsApi({
                        name: "芦笋在线录屏组件"
                    })
                }))
            }
            return G((async () => {
                s((() =>
                        import ("./index.7de5cde8.js")), [],
                    import.meta.url).then((async e => {
                    if (e.isSupported().supported) {
                        a = !0;
                        const {
                            configureButton: l
                        } = await e.setup({
                            appId: "f784af29-6587-9c36-9835-e3271cecfcbd"
                        });
                        l({
                            element: t.value
                        }).on("insert-click", (e => {
                            window.open(e.sharedUrl, "_blank")
                        }))
                    }
                }))
            })), (a, n) => (d(), p("div", {
                class: y(["hfull clock-wrap d-flex-center ac", e.size]),
                onClick: D(l, ["stop"]),
                style: m("font-size: " + ("mini" == e.size || "1x1" == e.size ? "14px" : "22px")),
                ref_key: "lusunRecordRef",
                ref: t
            }, eo, 14, Zi))
        }
    }), [
        ["__scopeId", "data-v-c5f81482"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/lusun/icon/icon.vue"]
    ]),
    lo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ao
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    no = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 512 512"
    },
    io = [h("path", {
        d: "M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4z",
        fill: "currentColor"
    }, null, -1), h("path", {
        d: "M32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4H36a4 4 0 0 0-4 4z",
        fill: "currentColor"
    }, null, -1)],
    oo = B({
        name: "CalendarClear",
        render: function(e, t) {
            return d(), p("svg", no, io)
        }
    }),
    so = {
        class: "wfull hfull"
    },
    ro = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    co = {
        class: "d-icon d-relative",
        style: {
            width: "86%",
            height: "86%",
            color: "#fff"
        }
    },
    uo = {
        class: "movie-logo d-flex-center"
    },
    po = {
        key: 1,
        class: "d-relative hfull d-flex",
        style: {
            "z-index": "1"
        }
    },
    mo = {
        class: "hfull d-flex-y",
        style: {
            width: "70%"
        }
    },
    fo = {
        class: "f12 mb5 d-flex-y",
        style: {
            "margin-top": "-10px"
        }
    },
    _o = {
        class: "f32"
    },
    vo = {
        style: {
            transform: "scale(0.8)"
        }
    },
    go = {
        class: "ml10"
    },
    ho = {
        class: "f12 mb5"
    },
    yo = {
        class: "movie_rating"
    },
    bo = {
        class: "d-inline f12",
        style: {
            transform: "scale(0.82)"
        }
    },
    wo = ["title"],
    xo = {
        class: "hfull d-hidden",
        style: {
            width: "30%",
            padding: "2px"
        }
    },
    ko = ["src"],
    Eo = {
        key: 2,
        class: "d-relative hfull d-flex",
        style: {
            "z-index": "1"
        }
    },
    Do = {
        class: "hfull d-flex-y"
    },
    Io = {
        class: "f12"
    },
    Oo = ["title"],
    zo = {
        class: "movie_rating"
    },
    To = {
        class: "d-inline f12",
        style: {
            transform: "scale(0.82)"
        }
    },
    Ao = ["title"],
    Lo = {
        key: 3,
        class: "d-relative hfull d-flex",
        style: {
            "z-index": "1"
        }
    },
    Po = {
        class: "hfull d-flex-y"
    },
    Co = {
        class: "f12"
    },
    So = ["title"],
    Ro = {
        class: "movie_rating"
    },
    jo = {
        class: "d-inline f12",
        style: {
            transform: "scale(0.82)"
        }
    },
    Mo = {
        key: 4,
        class: "d-relative hfull d-flex-x",
        style: {
            "z-index": "1"
        }
    },
    Vo = {
        class: "hfull d-flex f12"
    },
    No = ["title"],
    $o = {
        class: "movie_rating d-text-lr",
        style: {
            width: "12px",
            height: "88px",
            display: "flex",
            "align-items": "center",
            "margin-left": "3px"
        }
    },
    Fo = {
        class: "d-inline f12",
        style: {
            transform: "scale(0.82)"
        }
    },
    Yo = {
        name: "yiyan-icon"
    },
    Ho = c(Object.assign(Yo, {
        props: {
            size: String
        },
        setup(e) {
            const t = e;
            const a = (o.get("lunarDate") || "").split(",") || [],
                l = `${a[0]}月${a[1]}`,
                n = r().format("M月"),
                c = g(o.get("app-movieCalendar") || {});
            return i((() => t.size), (async e => {
                ["1x1", "mini"].includes(e) || c.value.date && c.value.date == r().format("YYYYMMDD") || s((() =>
                        import ("./movieCalendar.26003b56.js")), ["./movieCalendar.26003b56.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url).then((e => {
                    e.todayMovieApi().then((e => {
                        let t = e.data || {};
                        c.value = t;
                        let a = {
                            mov_rating: t.mov_rating,
                            mov_text: t.mov_text,
                            mov_title: t.mov_title,
                            mov_pic: t.mov_pic,
                            date: t.date
                        };
                        o.set("app-movieCalendar", a)
                    }))
                }))
            }), {
                immediate: !0
            }), (t, a) => (d(), p(F, null, [b(' <img\r\n      v-if="[\'mini\',\'1x1\'].includes(size)"\r\n      alt="电影日历"\r\n      class="d-block wfull hfull"\r\n      src="https://files.codelife.cc/icons/movieCalendar.svg"\r\n      \r\n  />'), h("div", so, [h("div", {
                class: y(["hfull wfull movie-wrap", `icon-size-${e.size}`]),
                style: {
                    padding: "10px"
                }
            }, [h("span", {
                class: "movie-bg",
                style: m(`background-image:url(${c.value.mov_pic});filter:blur(${["2x2","1x2","2x1"].includes(e.size)?0:6}px)`)
            }, null, 4), ["mini", "1x1"].includes(e.size) ? (d(), p("p", ro, [h("i", co, [h("div", uo, z(fl.value.DD), 1), w(f(oo), {
                style: {
                    width: "100%",
                    height: "100%",
                    color: "#fff"
                }
            })])])) : b("v-if", !0), ["2x4", "medium"].includes(e.size) ? (d(), p("div", po, [h("div", mo, [h("div", null, [h("div", fo, [h("em", _o, z(fl.value.DD), 1), h("span", vo, [h("p", null, [h("em", null, z(f(n)), 1), h("em", go, z(fl.value.week), 1)]), h("p", null, "农历" + z(l))])]), h("p", ho, [C(" 《" + z(c.value.mov_title) + "》 ", 1), h("span", yo, [h("i", bo, "豆瓣评分：" + z(c.value.mov_rating), 1)])]), h("p", {
                class: "movie-text",
                title: c.value.mov_text
            }, z(c.value.mov_text), 9, wo)])]), h("div", xo, [h("img", {
                style: {
                    "border-radius": "6px",
                    "object-fit": "cover"
                },
                class: "wfull hfull",
                src: c.value.mov_pic
            }, null, 8, ko)])])) : ["2x2", "small"].includes(e.size) ? (d(), p("div", Eo, [h("div", Do, [h("div", Io, [b(' <div class="d-flex-y">\r\n              <em class="f32">{{Date.value.DD}}</em>\r\n              <span style="transform:scale(0.8)">\r\n                <p>\r\n                  <em>{{mouthData}}</em>\r\n                  <em class="ml10">{{Date.value.week}}</em>\r\n                </p>\r\n                <p>农历{{lunarDate}}</p>\r\n              </span>\r\n            </div>'), h("p", {
                class: "mb5 d-elip",
                title: c.value.mov_title
            }, "《" + z(c.value.mov_title) + "》", 9, Oo), h("span", zo, [h("i", To, "豆瓣评分：" + z(c.value.mov_rating), 1)]), h("p", {
                class: "movie-text mt5",
                title: c.value.mov_text
            }, z(c.value.mov_text), 9, Ao)])])])) : ["1x2"].includes(e.size) ? (d(), p("div", Lo, [h("div", Po, [h("div", Co, [h("p", {
                class: "mb5 d-elip",
                title: c.value.mov_title
            }, "《" + z(c.value.mov_title) + "》", 9, So), h("span", Ro, [h("i", jo, "豆瓣评分：" + z(c.value.mov_rating), 1)]), b(' <p class="movie-text" :title="dataInfo.mov_text">{{ dataInfo.mov_text }}</p> ')])])])) : ["2x1"].includes(e.size) ? (d(), p("div", Mo, [h("div", Vo, [h("p", {
                class: "mb5 d-text-lr d-hidden",
                style: {
                    width: "14px"
                },
                title: c.value.mov_title
            }, z(c.value.mov_title), 9, No), h("span", $o, [h("i", Fo, "豆瓣评分：" + z(c.value.mov_rating), 1)])])])) : b("v-if", !0)], 2)])], 2112))
        }
    }), [
        ["__scopeId", "data-v-91198901"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/movieCalendar/icon/icon.vue"]
    ]),
    Uo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ho
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Wo = {
        alt: "头像生成",
        class: "multiavatar-icon",
        src: "https://files.codelife.cc/icons/multiavatar.svg"
    };
const Bo = c({
        name: "multiavatar-icon"
    }, [
        ["render", function(e, t, a, l, n, i) {
            return d(), p("img", Wo)
        }],
        ["__scopeId", "data-v-4bbccbb8"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/multiavatar/icon/icon.vue"]
    ]),
    qo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Bo
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Go = (e => (L("data-v-15af0c44"), e = e(), P(), e))((() => h("div", {
        class: "notes-icon-top d-flex-center"
    }, "备忘录", -1))),
    Xo = {
        class: "notes-icon-content"
    },
    Qo = {
        key: 0,
        class: "bb d-flex-y"
    },
    Jo = {
        name: "notes-icon"
    },
    Ko = c(Object.assign(Jo, {
        props: {
            size: String
        },
        setup(e) {
            const t = ae(),
                a = g(!1);

            function l(e) {
                let t = e.height;
                a.value = t < 80
            }
            return (n, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, {
                    onResize: l
                }, {
                    default: $((() => [h("div", {
                        class: y([e.size, "notes-icon"])
                    }, [Go, h("ul", Xo, [(d(!0), p(F, null, Y(f(t), ((e, t) => (d(), p(F, {
                        key: e.id
                    }, [t < 3 ? (d(), p("li", Qo, [x(h("span", {
                        class: "d-elip"
                    }, z(e && e.title || e && e.content || "无标题"), 513), [
                        [I, !a.value]
                    ])])) : b("v-if", !0)], 64)))), 128)), f(t).length ? b("v-if", !0) : (d(), p(F, {
                        key: 0
                    }, Y(3, (e => h("li", {
                        class: "bb",
                        key: e
                    }))), 64))])], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-15af0c44"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/notes/icon/icon.vue"]
    ]),
    Zo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ko
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    es = {
        key: 0,
        alt: "热卖",
        class: "d-block wfull hfull",
        style: {
            "background-color": "#e84e3f",
            "object-fit": "contain"
        },
        src: "https://files.codelife.cc/icons/remai.svg"
    },
    ts = {
        class: "remai-icon-top f12"
    },
    as = ["onMouseenter"],
    ls = {
        class: "remai-icon-content"
    },
    ns = ["href", "title"],
    is = {
        name: "remai-icon"
    },
    os = c(Object.assign(is, {
        props: {
            size: String
        },
        setup(e) {
            const t = A({
                activeId: "today_top",
                hotType: [{
                    type: "today_top",
                    title: "热卖"
                }, {
                    type: "jd_goods",
                    title: "好货"
                }, {
                    type: "jd_nine",
                    title: "9块9"
                }, {
                    type: "jd_collage",
                    title: "拼购"
                }],
                hostList: o.get("hotReamai") || []
            });
            return async function() {
                let e = {};
                if (!t.hostList.length) {
                    e = await s((() =>
                            import ("./jingtuitui.5644e1e0.js").then((e => e.a))), ["./jingtuitui.5644e1e0.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                        import.meta.url);
                    let a = await e.jd_goodlist({
                        type: t.activeId
                    });
                    t.hostList = a.data
                }
                let a = await s((() =>
                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                    import.meta.url);
                if (a = a.default, await a.get("jttIcon_today_top")) return;
                e = await s((() =>
                        import ("./jingtuitui.5644e1e0.js").then((e => e.a))), ["./jingtuitui.5644e1e0.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url), e.jd_goodlist({
                    ids: "today_top,jd_goods,jd_nine,jd_collage"
                }).then((e => {
                    let l = e.data || {};
                    for (let n in l) a.set(`jttIcon_${n}`, l[n], 72e5), n === t.hotType[0].type && o.set("hotReamai", l[n])
                }))
            }(), (a, l) => {
                const n = Z("d-watch-resize");
                return d(), O(n, null, {
                    default: $((() => [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", es)) : (d(), p("div", {
                            key: 1,
                            class: y([e.size, "remai-icon"]),
                            style: {
                                padding: "0.64em 0.34em"
                            }
                        }, [h("div", ts, [(d(!0), p(F, null, Y(t.hotType, (e => (d(), p("span", {
                            class: y(["top-tag", {
                                active: t.activeId == e.type
                            }]),
                            key: e.type,
                            onMouseenter: a => async function(e) {
                                t.activeId = e.type;
                                let a = await s((() =>
                                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                                    import.meta.url);
                                a = a.default;
                                let l = await s((() =>
                                            import ("./jingtuitui.5644e1e0.js").then((e => e.a))), ["./jingtuitui.5644e1e0.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                                        import.meta.url),
                                    n = await a.get(`jttIcon_${e.type}`);
                                n || (n = (await l.jd_goodlist({
                                    type: t.activeId
                                })).data || []);
                                t.hostList = n
                            }(e)
                        }, z(e.title), 43, as)))), 128))]), h("ul", ls, [(d(!0), p(F, null, Y(t.hostList, (e => (d(), p("a", {
                            onClick: l[0] || (l[0] = D((() => {}), ["stop"])),
                            onMouseup: l[1] || (l[1] = D((() => {}), ["stop"])),
                            href: e.link,
                            target: "_blank",
                            class: "d-elip remai-icon-item",
                            title: e.goods_name,
                            key: e.goods_id
                        }, z(e.goods_name), 41, ns)))), 128))])], 2))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-59fd00d9"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/remai/icon/icon.vue"]
    ]),
    ss = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: os
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    rs = {
        key: 0,
        alt: "体育",
        style: {
            "background-color": "#eaeee0"
        },
        class: "d-block wfull hfull",
        src: "https://files.codelife.cc/icons/sport.svg"
    },
    cs = {
        key: 0,
        class: "sport-title ac"
    },
    us = (e => (L("data-v-cd9e7237"), e = e(), P(), e))((() => h("span", {
        class: "f12 d-main"
    }, "卡塔尔世界杯", -1))),
    ds = {
        class: "d-sub"
    },
    ps = {
        class: "sport-info d-flex-between d-main"
    },
    ms = ["src"],
    fs = {
        class: "d-elip"
    },
    _s = {
        class: "b d-sub",
        style: {
            "font-size": "20px"
        }
    },
    vs = ["href"],
    gs = ["src"],
    hs = {
        class: "d-elip"
    },
    ys = {
        name: "sport-icon"
    },
    bs = c(Object.assign(ys, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = g(o.get("app-sport-icon") || {});
            return i((() => t.size), (async e => {
                ["1x2", "2x1", "2x2", "2x4"].includes(e) && s((() =>
                        import ("./sport.cc5aad2f.js")), ["./sport.cc5aad2f.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url).then((e => {
                    e.sportList({
                        size: 1
                    }).then((e => {
                        let t = e.data || [];
                        t = t[0] || {}, a.value = t, o.set("app-sport-icon", t)
                    }))
                }))
            }), {
                immediate: !0
            }), (t, l) => {
                const n = Z("d-watch-resize");
                return d(), O(n, null, {
                    default: $((() => [
                        ["1x1"].includes(e.size) ? (d(), p("img", rs)) : (d(), p("div", {
                            key: 1,
                            class: y(["hfull sport-icon wfull", `icon-size-${e.size}`])
                        }, [
                            ["2x2", "2x4"].includes(e.size) ? (d(), p("div", cs, [us, h("p", ds, z(a.value.round_name) + "  " + z(a.value.match_date), 1)])) : b("v-if", !0), h("div", ps, [h("span", null, [h("img", {
                                src: a.value.host_logo_url,
                                alt: ""
                            }, null, 8, ms), h("p", fs, z(a.value.host_name), 1)]), h("span", null, [h("p", _s, z(a.value.vsLine), 1), "2x4" === e.size ? (d(), p("a", {
                                key: 0,
                                onClick: l[0] || (l[0] = D((() => {}), ["stop"])),
                                target: "_blank",
                                class: "sport-room-status",
                                href: a.value.match_link
                            }, z(a.value.room_status), 9, vs)) : b("v-if", !0)]), h("span", null, [h("img", {
                                src: a.value.guest_logo_url,
                                alt: ""
                            }, null, 8, gs), h("p", hs, z(a.value.guest_name), 1)])])
                        ], 2))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-cd9e7237"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/sport/icon/icon.vue"]
    ]),
    ws = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: bs
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    xs = {
        key: 0,
        alt: "股票",
        class: "d-block wfull hfull",
        style: {
            "background-color": "#e73237",
            "object-fit": "contain"
        },
        src: "https://files.codelife.cc/icons/stock.svg"
    },
    ks = {
        key: 1,
        class: "todo-icon d-flex-center"
    },
    Es = {
        class: "stock-icon-content"
    },
    Ds = {
        class: "d-elip title",
        style: {
            width: "50%"
        }
    },
    Is = {
        style: {
            "margin-bottom": "2px"
        }
    },
    Os = {
        class: "d-sub left"
    },
    zs = {
        class: "d-elip ar"
    },
    Ts = {
        class: "d-sub right"
    },
    As = {
        name: "stock-icon"
    },
    Ls = c(Object.assign(As, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = le(),
                l = g(o.get("stocksCache") || []);

            function n(e) {
                return 0 == e ? "gray" : e > 0 ? "#e5353d" : "#41c662"
            }
            let r = null;
            async function c(e) {
                if (a.value.length) {
                    let t = a.value.map((e => `${e.MktNum}.${e.Code}`)),
                        n = await s((() =>
                                import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                            import.meta.url);
                    n = n.default;
                    let i = await n.get("stocksCache");
                    if (!e && i) return void(l.value = i || []);
                    s((() =>
                            import ("./stock.bd4b8210.js")), ["./stock.bd4b8210.js", "./axios.91e25212.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                        import.meta.url).then((e => {
                        e.pushListApi(t.join(",")).then((e => {
                            let t = e.data.diff || [];
                            t = t.slice(0, 4), l.value = t, o.set("stocksCache", t), n.set("stocksCache", t, 6e4)
                        }))
                    }))
                }
            }
            return r ? clearInterval(r) : r = setInterval((() => {
                c(!1)
            }), 12e4), X((() => {
                r && clearInterval(r)
            })), i((() => a), (e => {
                c(!0)
            }), {
                deep: !0
            }), c(!1), (a, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, null, {
                    default: $((() => [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", xs)) : (d(), p("div", ks, [h("ul", Es, [(d(!0), p(F, null, Y(l.value, (a => (d(), p("li", {
                            class: "d-flex-y",
                            key: a.id
                        }, [h("span", Ds, [h("p", Is, z(a && a.f14), 1), h("p", Os, z(a && a.f12), 1)]), "medium" == e.size ? (d(), p("span", {
                            key: 0,
                            class: "al",
                            style: m({
                                color: n(a.f3)
                            })
                        }, z(a && a.f2), 5)) : b("v-if", !0), h("span", zs, [h("p", {
                            class: "percent d-inline",
                            style: m([{
                                "margin-bottom": "2px"
                            }, "medium" == t.size ? {
                                backgroundColor: n(a.f3)
                            } : {
                                color: n(a.f3)
                            }])
                        }, z(a && a.f3) + "%", 5), h("p", Ts, z(a && a.f2), 1)])])))), 128))])]))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-653d78c3"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/stock/icon/icon.vue"]
    ]),
    Ps = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ls
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Cs = ["onClick"],
    Ss = {
        class: "d-icon f12",
        style: {
            "vertical-align": "-2px"
        }
    },
    Rs = {
        key: 1,
        class: "d-flex-center wfull hfull"
    },
    js = {
        class: "d-icon",
        style: {
            "font-size": "4em",
            color: "#fff"
        }
    },
    Ms = {
        key: 2,
        class: "d-relative hfull d-flex-y",
        style: {
            "z-index": "1"
        }
    },
    Vs = {
        class: "f12"
    },
    Ns = {
        class: "content"
    },
    $s = {
        class: "mt5",
        style: {
            color: "rgba(255,255,255,.7)"
        }
    },
    Fs = ["src"],
    Ys = c({
        __name: "icon",
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = g(o.get("app-todayEnglish") || {}),
                l = g(!1),
                n = g(null);

            function c() {
                l.value = !l.value, l.value ? (n.value.load(), n.value.play()) : n.value.pause()
            }

            function u(e) {
                l.value = !1
            }
            return i((() => t.size), (async e => {
                ["2x2", "2x4"].includes(e) && (a.value.dateline && a.value.dateline == r().format("YYYY-MM-DD") || s((() =>
                        import ("./todayEnglish.583b5dd6.js")), ["./todayEnglish.583b5dd6.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url).then((e => {
                    e.todayEnglishApi().then((e => {
                        let t = e.data || {};
                        a.value = t;
                        let l = {
                            dateline: t.dateline,
                            content: t.content,
                            note: t.note,
                            picture2: t.picture2,
                            picture: t.picture,
                            tts: t.tts
                        };
                        o.set("app-todayEnglish", l)
                    }))
                })))
            }), {
                immediate: !0
            }), (t, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, null, {
                    default: $((() => [h("div", {
                        class: y(["hfull english-wrap", `icon-size-${e.size}`]),
                        style: {
                            padding: "12px"
                        }
                    }, [
                        ["2x4", "medium", "2x2", "small"].includes(e.size) ? (d(), p("p", {
                            key: 0,
                            onClick: D(c, ["stop"]),
                            style: {
                                position: "absolute",
                                transform: "scale(0.84)",
                                right: "10px",
                                top: "10px",
                                color: "rgba(255,255,255,.5)",
                                "z-index": "2",
                                "font-size": "12px"
                            }
                        }, [C(" 跟读 "), h("i", Ss, [(d(), O(S(l.value ? f(Rt) : f(Vt))))])], 8, Cs)) : b("v-if", !0), h("span", {
                            class: "english-bg",
                            style: m(`background-image:url(${a.value.picture});`)
                        }, null, 4), ["mini", "1x1", "1x2", "2x1"].includes(e.size) ? (d(), p("p", Rs, [h("i", js, [w(f(It))])])) : b("v-if", !0), ["2x4", "medium", "2x2", "small"].includes(e.size) ? (d(), p("div", Ms, [h("div", Vs, [h("p", Ns, z(a.value.content), 1), h("p", $s, z(a.value.note), 1)])])) : b("v-if", !0)
                    ], 2), h("audio", {
                        onEnded: u,
                        class: "d-hidden",
                        ref_key: "refAudio",
                        ref: n
                    }, [h("source", {
                        src: a.value.tts
                    }, null, 8, Fs)], 544)])),
                    _: 1
                })
            }
        }
    }, [
        ["__scopeId", "data-v-1790367c"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/todayEnglish/icon/icon.vue"]
    ]),
    Hs = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ys
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Us = {
        width: "700px",
        height: "226px",
        viewBox: "0 0 700 226",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
    },
    Ws = h("title", null, "画板", -1),
    Bs = {
        id: "画板",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
    },
    qs = ["fill"],
    Gs = ["fill"],
    Xs = ["fill"],
    Qs = c({
        __name: "bg",
        emits: ["color"],
        setup(e, {
            emit: t
        }) {
            let a = ne(["#ad5877", "#f07049", "#77616b", "#535d57", "#835f5b", "#9f6ea2", "#ae7a5d", "#a58e51", "#7b9bb5", "#5d9e8d", "#cb6a7f", "#5d97c5", "#568e71", "#d43747"]);
            Q((() => {
                t("color", a)
            }));
            const l = g(a);
            return (e, t) => (d(), p("svg", Us, [Ws, h("g", Bs, [h("path", {
                d: "M1310.09105,191.626557 C1496.65509,191.626557 1770.14929,157.346326 1920,106.258614 L1920,226.585567 C1920,226.585567 57.7507064,226.769694 1.29607535,226.778064 L0,226.778064 C0.301412873,150.421181 0.452119309,112.242739 0.452119309,112.242739 C402.829314,254.28206 430.581953,106.258614 671.986104,106.258614 C913.390256,106.258614 1123.52701,191.626557 1310.09105,191.626557 Z",
                id: "路径-1",
                "fill-opacity": "0.6",
                fill: l.value
            }, null, 8, qs), h("path", {
                d: "M0.0139194415,226.56425 C0.0139194415,207.632936 0.00602482649,190.017506 -0.00976440346,173.717958 C-0.00976440346,173.717958 64.0945019,127.498953 182.10043,132.182456 C300.106358,136.865959 566.945531,199.128662 690.656287,199.128662 C926.193135,199.128662 1181.88325,106.258614 1429.28183,106.258614 C1676.68041,106.258614 1762.21292,199.128662 1920,132.182456 C1920,132.182456 1920,163.707219 1920,226.756746 L1918.70393,226.756746 C1862.24971,226.748377 0.0139194415,226.56425 0.0139194415,226.56425 Z",
                id: "路径-1",
                "fill-opacity": "0.6",
                fill: l.value
            }, null, 8, Gs), h("path", {
                d: "M1463.25587,166.368856 C1551.98939,166.368856 1579.00033,142.163535 1682.98644,125.993122 C1786.97255,109.822709 1903.42761,144.008202 1920,142.125085 L1920,226.246611 C1920,226.246611 57.7382953,226.430738 1.31380552,226.439107 L0,226.439107 C0.875870348,212.023153 1.31380552,204.815176 1.31380552,204.815176 C1.31380552,204.815176 171.201223,92.2827368 319.815615,99.6364213 C498.755382,108.490655 535.30872,172.276704 680.584032,172.276704 C825.859343,172.276704 892.163947,69.0953634 1074.42656,72.7600803 C1256.68917,76.4247971 1374.52235,166.368856 1463.25587,166.368856 Z",
                id: "路径-1",
                "fill-opacity": "0.3",
                fill: l.value
            }, null, 8, Xs)])]))
        }
    }, [
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/todayShici/bg.vue"]
    ]),
    Js = {
        key: 0,
        alt: "今日诗词",
        class: "d-block wfull hfull",
        style: {
            "object-fit": "contain",
            "background-color": "#093744"
        },
        src: "https://files.codelife.cc/icons/todayShici.svg"
    },
    Ks = {
        class: "hfull d-flex-center",
        style: {
            "z-index": "1"
        }
    },
    Zs = {
        class: "shici-body wfull"
    },
    er = {
        class: "shici-text"
    },
    tr = {
        name: "yiyan-icon"
    },
    ar = c(Object.assign(tr, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = g(o.get("app-todayShici") || {});
            return i((() => t.size), (async e => {
                ["1x1", "mini"].includes(e) || a.value.date && a.value.date == r().format("YYYYMMDD") || s((() =>
                        import ("./todayShici.da9bbb1a.js")), ["./todayShici.da9bbb1a.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url).then((e => {
                    e.todayShiciApi().then((e => {
                        let t = e.data || {};
                        if (t.date = r().format("YYYYMMDD"), t.content) {
                            a.value = t;
                            let e = {
                                quotes: t.quotes,
                                dynasty: t.dynasty,
                                title: t.title,
                                author: t.author,
                                date: t.date
                            };
                            o.set("app-todayShici", e), s((() =>
                                    import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                                import.meta.url).then((e => {
                                e.default.set("app-todayShici", t)
                            }))
                        }
                    }))
                }))
            }), {
                immediate: !0
            }), (t, l) => {
                const n = Z("d-watch-resize");
                return d(), O(n, null, {
                    default: $((() => [
                        ["mini", "1x1"].includes(e.size) ? (d(), p("img", Js)) : (d(), p("div", {
                            key: 1,
                            class: y(["hfull wfull shici-wrap d-relative", `icon-size-${e.size}`]),
                            style: {
                                padding: "10px"
                            }
                        }, [w(Qs, {
                            class: "app-bg",
                            style: {
                                width: "100%",
                                height: "auto"
                            }
                        }), h("div", Ks, [b(" <h2 class=\"mb5 f12\" style=\"d-sub\" v-if=\"['small','medium','2x2','2x4'].includes(size)\">今日诗词</h2> "), h("div", Zs, [h("p", er, z(a.value.quotes), 1), x(h("p", {
                            style: {
                                "font-size": "0.57em",
                                color: "rgba(var(--alpha-color),.8)"
                            },
                            class: "mt5 d-sub d-elip"
                        }, z(a.value.title) + " · " + z(a.value.author), 513), [
                            [I, ["small", "medium", "2x2", "2x4"].includes(e.size)]
                        ])])])], 2))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-2e277507"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/todayShici/icon/icon.vue"]
    ]),
    lr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ar
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    nr = {
        key: 0,
        style: {
            "object-fit": "contain",
            "background-color": "#2066cc"
        },
        alt: "ToDo",
        class: "d-block wfull hfull",
        src: "https://files.codelife.cc/icons/todo.svg"
    },
    ir = {
        class: "wfull hfull"
    },
    or = (e => (L("data-v-21d0183a"), e = e(), P(), e))((() => h("h2", {
        class: "todo-icon-title d-flex-y"
    }, "Today", -1))),
    sr = {
        class: "todo-icon-content"
    },
    rr = {
        key: 0,
        class: "d-flex-y"
    },
    cr = {
        name: "todo-icon"
    },
    ur = c(Object.assign(cr, {
        props: {
            size: String
        },
        setup(e) {
            const t = ie(),
                a = g(!1);

            function l(e) {
                let t = e.height;
                a.value = t < 80
            }
            return (n, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, {
                    onResize: l
                }, {
                    default: $((() => [h("div", {
                        class: y([e.size, "todo-icon d-flex-center"])
                    }, [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", nr)) : (d(), p(F, {
                            key: 1
                        }, [b(' <d-icon icon="icon-correct "></d-icon> '), h("div", ir, [or, h("ul", sr, [(d(!0), p(F, null, Y(f(t).filter((e => !e.done)), ((e, t) => (d(), p(F, {
                            key: e.id
                        }, [t < 3 ? (d(), p("li", rr, [h("i", {
                            class: "to-icon-check",
                            style: m({
                                backgroundColor: e.color
                            })
                        }, null, 4), x(h("span", {
                            class: "d-elip"
                        }, z(e && e.content), 513), [
                            [I, !a.value]
                        ])])) : b("v-if", !0)], 64)))), 128)), f(t).length ? b("v-if", !0) : (d(), p(F, {
                            key: 0
                        }, Y(3, (e => h("li", {
                            class: "bb",
                            key: e
                        }))), 64))])])], 2112))
                    ], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-21d0183a"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/todo/icon/icon.vue"]
    ]),
    dr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ur
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    pr = {
        key: 0,
        alt: "热搜",
        class: "topsearch-icon d-block wfull hfull",
        style: {
            "background-color": "#1d1f23"
        },
        src: "https://files.codelife.cc/icons/topsearch.svg"
    },
    mr = {
        class: "topsearch-icon-top"
    },
    fr = ["onMouseenter"],
    _r = {
        class: "topsearch-icon-content"
    },
    vr = ["title"],
    gr = {
        class: "icon-index mr5"
    },
    hr = ["href"],
    yr = {
        key: 0,
        class: "d-hidden ml5",
        style: {
            "max-width": "60px",
            color: "#eee"
        }
    },
    br = {
        name: "topsearch-icon"
    },
    wr = c(Object.assign(br, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = n(),
                l = A({
                    activeId: a.value.topSearch[0].id || "Jb0vmloB1G",
                    hotType: a.value.topSearch || [],
                    hostList: o.get("hotSearch") || []
                });
            return async function() {
                let e = await s((() =>
                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                    import.meta.url);
                e = e.default;
                let t = await e.getItem(`hotSearch_${l.activeId}`),
                    a = t.data || [];
                if (l.hostList = a, !t.isExp) return;
                let {
                    getTopListApi: n
                } = await s((() =>
                        import ("./topsearch.7f46afb5.js")), ["./topsearch.7f46afb5.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url);
                n({
                    ids: l.hotType.map((e => e.id)).join(",")
                }).then((t => {
                    let a = t.data || {};
                    for (let n in a) a[n] && a[n].length && (e.set(`hotSearch_${n}`, a[n], 12e5), n === l.hotType[0].id && (l.hostList = a[n], o.set("hotSearch", a[n])))
                }))
            }(), (a, n) => {
                const i = Z("d-watch-resize");
                return d(), O(i, null, {
                    default: $((() => [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", pr)) : (d(), p("div", {
                            key: 1,
                            class: y([e.size, "topsearch-icon"]),
                            style: {
                                padding: "0.74em"
                            }
                        }, [h("div", mr, [(d(!0), p(F, null, Y(l.hotType, (e => (d(), p("span", {
                            class: y(["top-tag", {
                                active: l.activeId == e.id
                            }]),
                            key: e.id,
                            onMouseenter: t => async function(e) {
                                l.activeId = e.id;
                                let t = await s((() =>
                                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                                    import.meta.url);
                                t = t.default;
                                const a = await t.getItem(`hotSearch_${e.id}`);
                                let n = a.data || [];
                                if (l.hostList = n, a.isExp) {
                                    let {
                                        getTopListApi: a
                                    } = await s((() =>
                                            import ("./topsearch.7f46afb5.js")), ["./topsearch.7f46afb5.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                                        import.meta.url);
                                    n = (await a({
                                        id: l.activeId,
                                        size: 4
                                    })).data || [], n.length && t.set(`hotSearch_${e.id}`, n, 12e5)
                                }
                                l.hostList = n
                            }(e)
                        }, z(e.name), 43, fr)))), 128))]), h("ul", _r, [(d(!0), p(F, null, Y(l.hostList, (e => (d(), p("li", {
                            class: "d-flex-y d-elip",
                            title: e.title,
                            key: e.id
                        }, [h("span", gr, z(e.index), 1), h("a", {
                            class: "d-elip d-cell title",
                            onClick: n[0] || (n[0] = D((() => {}), ["stop"])),
                            onMouseup: n[1] || (n[1] = D((() => {}), ["stop"])),
                            href: e.link,
                            target: "_blank"
                        }, z(e.title), 41, hr), ["2x4", "medium"].includes(t.size) ? (d(), p("span", yr, z(e.hotValue.replace("热度", "")), 1)) : b("v-if", !0)], 8, vr)))), 128))])], 2))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-0aeffa86"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/topsearch/icon/icon.vue"]
    ]),
    xr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: wr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    kr = {
        alt: "数字转大写",
        class: "uppercase-icon",
        src: "https://files.codelife.cc/icons/uppercase.svg"
    };
const Er = c({
        name: "uppercase-icon"
    }, [
        ["render", function(e, t, a, l, n, i) {
            return d(), p("img", kr)
        }],
        ["__scopeId", "data-v-8b32bcc8"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/uppercase/icon/icon.vue"]
    ]),
    Dr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Er
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ir = "" + new URL("steam.0132c42a.svg",
        import.meta.url).href;
async function Or(e) {
    let t = await s((() =>
            import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
        import.meta.url);
    t = t.default;
    const a = await t.getItem(`app-vgn-icon:${e}`);
    let l = a.data || [];
    if (a.isExp) {
        let t = 4;
        "news" != e && (t = 3);
        let {
            vgnListApi: a
        } = await s((() =>
                import ("./dujitang.2d5d6b5f.js")), ["./dujitang.2d5d6b5f.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
            import.meta.url), n = await a({
            type: e,
            page: 1,
            size: t
        });
        l = n.data || [], l.length && (s((() =>
                import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
            import.meta.url).then((t => {
            t.default.set(`app-vgn-icon:${e}`, l, 12e5)
        })), "news" === e && o.set("app-vgn", l))
    }
    return l
}
const zr = ["title"],
    Tr = {
        class: "icon-index mr5"
    },
    Ar = ["href"],
    Lr = c({
        __name: "news",
        props: {
            id: String
        },
        setup(e) {
            const t = g(o.get("app-vgn") || []);
            return Or("news").then((e => {
                t.value = e || []
            })), (e, a) => (d(!0), p(F, null, Y(t.value, ((e, t) => (d(), p("li", {
                class: "d-flex-y d-elip item-li",
                title: e.title,
                key: e.id
            }, [h("span", Tr, z(t + 1), 1), h("a", {
                class: "d-elip d-cell",
                onClick: a[0] || (a[0] = D((() => {}), ["stop"])),
                onMouseup: a[1] || (a[1] = D((() => {}), ["stop"])),
                href: e.detail_link,
                target: "_blank"
            }, z(e.title), 41, Ar)], 8, zr)))), 128))
        }
    }, [
        ["__scopeId", "data-v-b3280325"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/vgn/icon/news.vue"]
    ]),
    Pr = ["title"],
    Cr = ["href"],
    Sr = {
        key: 0,
        class: "item-disc d-flex-between pl5 pr5"
    },
    Rr = {
        class: "ac mt5 d-elip"
    },
    jr = ["href"],
    Mr = {
        style: {
            color: "#50aa25"
        },
        class: "ac f14"
    },
    Vr = c({
        __name: "discount",
        props: {
            id: String
        },
        setup(e) {
            const t = e,
                a = g(o.get("app-vgn") || []),
                l = v((() => s((() =>
                        import ("./index.7eda866d.js")), ["./index.7eda866d.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./typescript.72bf8adc.js", "./index.14b43c35.js", "./index.7c0d977d.js", "./aria.66f3f71c.js", "./throttle.0dfde511.js", "./debounce.abbfdaeb.js", "./index.c89b0165.js", "./position.8ddd1c03.js", "./scroll.4972bdba.js"],
                    import.meta.url)));

            function n(e) {
                let t = 1e3 * e - r().valueOf();
                return t /= 864e5, t < 0 ? t = "-" : t < 1 ? (t *= 24, t = "剩余" + Math.round(t) + "小时") : t = "剩余" + Math.round(t) + "天", t
            }
            return Or(t.id || "discount").then((e => {
                a.value = e || []
            })), (e, i) => (d(!0), p(F, null, Y(a.value, (e => {
                return d(), p("li", {
                    class: "item-li",
                    title: e.game_china_name || e.game_name,
                    key: e.spu_id
                }, [h("a", {
                    class: "item-info d-block",
                    onClick: i[0] || (i[0] = D((() => {}), ["stop"])),
                    onMouseup: i[1] || (i[1] = D((() => {}), ["stop"])),
                    href: e.detail_link,
                    target: "_blank"
                }, [t.id ? b("v-if", !0) : (d(), p("p", Sr, [h("span", null, "-" + z(e.discount_percent) + "%", 1), h("span", null, z(n(e.discount_end)), 1)])), w(f(l), {
                    class: "item-cover",
                    src: e.spu_show_cover,
                    alt: ""
                }, null, 8, ["src"])], 40, Cr), h("p", Rr, [h("a", {
                    onClick: i[2] || (i[2] = D((() => {}), ["stop"])),
                    onMouseup: i[3] || (i[3] = D((() => {}), ["stop"])),
                    href: e.detail_link,
                    target: "_blank"
                }, z(e.game_china_name || e.game_name), 41, jr)]), h("p", Mr, "￥" + z((a = e.discount, a / 100)), 1)], 8, Pr);
                var a
            })), 128))
        }
    }, [
        ["__scopeId", "data-v-cd0b3572"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/vgn/icon/discount.vue"]
    ]),
    Nr = c({
        __name: "popular",
        props: {
            row: Object,
            index: Number
        },
        setup: e => (t, a) => (d(), O(Vr, {
            row: e.row,
            id: "popular"
        }, null, 8, ["row"]))
    }, [
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/vgn/icon/popular.vue"]
    ]),
    $r = {
        key: 0,
        alt: "游戏动力",
        class: "xyzrank-logo d-block wfull hfull",
        src: "https://files.codelife.cc/icons/vgn.svg"
    },
    Fr = (e => (L("data-v-4d122737"), e = e(), P(), e))((() => h("img", {
        class: "vgn-bg",
        src: Ir
    }, null, -1))),
    Yr = {
        class: "vgn-icon-top"
    },
    Hr = ["onMouseenter"],
    Ur = {
        name: "vgn-icon",
        components: {
            news: Lr,
            discount: Vr,
            popular: Nr
        }
    },
    Wr = c(Object.assign(Ur, {
        props: {
            size: String
        },
        setup(e) {
            const t = A({
                activeId: "news",
                hotType: [{
                    name: "游戏资讯",
                    id: "news"
                }, {
                    name: "打折游戏",
                    id: "discount"
                }, {
                    name: "热门新游",
                    id: "popular"
                }]
            });
            return (a, l) => {
                const n = Z("d-watch-resize");
                return d(), O(n, null, {
                    default: $((() => [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", $r)) : (d(), p("div", {
                            key: 1,
                            class: y([`icon-${e.size}`, "vgn-icon"]),
                            style: {
                                padding: "0.54em"
                            }
                        }, [Fr, h("div", Yr, [(d(!0), p(F, null, Y(t.hotType, (e => (d(), p("span", {
                            class: y(["top-tag", {
                                active: t.activeId == e.id
                            }]),
                            key: e.id,
                            onMouseenter: a => async function(e) {
                                t.activeId = e.id
                            }(e)
                        }, z(e.name), 43, Hr)))), 128))]), h("ul", {
                            class: "vgn-icon-content d-scrollbar-hide",
                            onMousewheel: l[0] || (l[0] = D((() => {}), ["stop"]))
                        }, [(d(), O(S(t.activeId)))], 32)], 2))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-4d122737"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/vgn/icon/icon.vue"]
    ]),
    Br = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qr = ["title"],
    Gr = {
        name: "wallpaper-icon"
    },
    Xr = c(Object.assign(Gr, {
        props: {
            size: {
                type: String
            }
        },
        setup(e) {
            const t = g(o.get("todayBing") || {});
            return t.thumb || s((() =>
                    import ("./public-api.6a0debad.js").then((e => e.p))), ["./public-api.6a0debad.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js"],
                import.meta.url).then((async e => {
                e.getTodayBing().then((e => {
                    t.value = {
                        thumb: e.thumb,
                        copyright: e.copyright ? e.copyright.split(",")[0] : ""
                    }
                }))
            })), (a, l) => (d(), p(F, null, [h("div", {
                class: y(["wallpaper-icon", `icon-size-${e.size}`]),
                style: m(`backgroundImage: url(${t.value.thumb||"https://files.codelife.cc/tools-icon/wallpaper.svg"})`)
            }, [
                ["2x2", "2x4"].includes(e.size) ? (d(), p("p", {
                    key: 0,
                    title: t.value.copyright,
                    class: "copyright d-elip"
                }, z(t.value.copyright), 9, qr)) : b("v-if", !0)
            ], 6), b(' <img alt="壁纸" class="wallpaper-icon" :src="todayBing.thumb" /> ')], 2112))
        }
    }), [
        ["__scopeId", "data-v-ff9f471e"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/wallpaper/icon/icon.vue"]
    ]),
    Qr = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Xr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Jr = () => {
        let e = o.get("weather") || {};
        if (e.moment) return e.moment;
        let t = r().hour();
        return t > 6 && t < 19 ? "d" : "n"
    },
    Kr = {
        100: "sunny",
        101: "cloudy",
        102: "cloudy",
        103: "cloudy",
        104: "yin",
        302: "thunder",
        303: "thunder",
        300: "rain",
        301: "rain",
        304: "rain",
        305: "rain",
        306: "rain",
        307: "rain",
        308: "rain",
        309: "rain",
        310: "rain",
        311: "rain",
        312: "rain",
        313: "rain",
        314: "rain",
        315: "rain",
        316: "rain",
        317: "rain",
        318: "rain",
        350: "rain",
        351: "rain",
        399: "rain",
        400: "snow",
        401: "snow",
        402: "snow",
        403: "snow",
        404: "snow",
        405: "snow",
        406: "snow",
        407: "snow",
        408: "snow",
        409: "snow",
        410: "snow",
        500: "foggy",
        501: "foggy",
        509: "foggy",
        510: "foggy",
        514: "foggy",
        515: "foggy",
        502: "haze"
    },
    Zr = e => {
        if (!e) return "";
        let t = "";
        if (Kr[e]) t = `weather-${Kr[e]}_${Jr()}`;
        else {
            let a = `url(https://cdn.heweather.com/img/plugin/190516/bg/h5/${e}${Jr()}.png)`;
            document.body.style.setProperty("--weather-other", a), t = "weather-other"
        }
        return t
    },
    ec = {
        location: {},
        now: {
            tmp: 0
        },
        daily_forecast: [{}],
        air_now_city: {},
        sun: {},
        rain: {},
        lifestyle: []
    },
    tc = oe((() => se("weather", ec, {
        listenToStorageChanges: !1
    }))),
    ac = {
        key: 0,
        class: "d-flex-center wfull hfull"
    },
    lc = {
        class: "d-elip f12"
    },
    nc = {
        class: "f16 mt5 b"
    },
    ic = {
        key: 1,
        class: "d-flex-between wfull"
    },
    oc = {
        class: "d-elip"
    },
    sc = {
        class: "f22 mt5"
    },
    rc = {
        style: {
            "font-size": "0.57em"
        }
    },
    cc = {
        style: {
            "margin-bottom": "2px"
        }
    },
    uc = ["src"],
    dc = {
        key: 2,
        class: "d-flex-between hfull wfull ac",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column"
        }
    },
    pc = {
        class: "wfull"
    },
    mc = {
        class: "d-elip f12"
    },
    fc = {
        class: "f22 mt5"
    },
    _c = {
        style: {
            "font-size": "0.57em"
        },
        class: "ac wfull"
    },
    vc = ["src"],
    gc = {
        key: 3,
        class: "d-flex-between hfull wfull",
        style: {
            "align-items": "flex-start",
            "flex-direction": "column"
        }
    },
    hc = {
        class: "d-flex-between wfull"
    },
    yc = {
        style: {
            "flex-direction": "column",
            display: "flex",
            "justify-content": "space-between"
        }
    },
    bc = {
        class: "d-elip f12"
    },
    wc = {
        class: "d-icon",
        style: {
            "margin-left": "2px",
            "vertical-align": "-2px"
        }
    },
    xc = {
        style: {
            "font-size": "1.3em"
        },
        class: "mt5 b"
    },
    kc = ["src"],
    Ec = {
        class: "f12 ac"
    },
    Dc = {
        style: {
            "font-size": "0.57em"
        }
    },
    Ic = {
        style: {
            "margin-bottom": "2px"
        }
    },
    Oc = {
        key: 4,
        class: "weather-icon-medius d-flex-between wfull hfull"
    },
    zc = {
        class: "d-flex-between wfull"
    },
    Tc = {
        style: {
            "flex-direction": "column",
            display: "flex",
            "justify-content": "space-between"
        }
    },
    Ac = {
        style: {
            "font-size": "12px"
        }
    },
    Lc = {
        class: "d-icon",
        style: {
            "margin-left": "2px",
            "font-size": "12px",
            "vertical-align": "-2px"
        }
    },
    Pc = {
        style: {
            "font-size": "1.4em"
        },
        class: "mt5 b"
    },
    Cc = {
        class: "ar",
        style: {
            "line-height": "1.1",
            "font-size": "0.57em"
        }
    },
    Sc = ["title", "src"],
    Rc = {
        style: {
            "margin-top": "0.3em"
        }
    },
    jc = {
        class: "d-flex-between wfull",
        style: {
            "font-size": "0.57em",
            "line-height": "1.4",
            "margin-top": "0.2em"
        }
    },
    Mc = {
        key: 0
    },
    Vc = {
        class: "d-flex-center"
    },
    Nc = ["src"],
    $c = {
        name: "weather-icon"
    },
    Fc = c(Object.assign($c, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = tc(),
                l = u((() => a.value.now.cond_code && Zr(a.value.now.cond_code)));

            function n(e, t) {
                let a = "周" + xe[r(e).day()];
                return 1 == t && (a = "明天"), a
            }
            return u((() => {
                const e = a.value.now || {};
                if (e.cond_code) return {
                    backgroundImage: weatherbg(e.cond_code)
                }
            })), s((() =>
                    import ("./weather.b106cfc7.js")), ["./weather.b106cfc7.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./weatherApi.bab704ad.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./baseApi.fc01bad0.js", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js"],
                import.meta.url).then((e => {
                e.getWeather(a.value.location)
            })), (i, o) => {
                const s = Z("d-watch-resize");
                return d(), O(s, null, {
                    default: $((() => {
                        var i, o;
                        return [h("div", {
                            class: y([`icon-size-${e.size} ${f(l)}`, "weather-icon"])
                        }, ["1x1" == t.size || "mini" == t.size ? (d(), p("div", ac, [h("span", null, [h("p", lc, z(f(a).location.name), 1), h("div", nc, z(f(a).now.tmp) + "°", 1)])])) : b("v-if", !0), "1x2" == t.size ? (d(), p("div", ic, [h("span", null, [h("p", oc, z(f(a).location.name), 1), h("div", sc, z(f(a).now.tmp) + "°", 1)]), h("div", rc, [h("div", cc, [C(z(f(a).now.cond_txt) + " ", 1), h("img", {
                            style: {
                                width: "16px",
                                height: "16px",
                                "vertical-align": "-2px"
                            },
                            src: `https://files.codelife.cc/itab/weather/icon/${f(a).now.cond_code}-fill.svg`
                        }, null, 8, uc), b(' <i\r\n                style="font-size: 0.6em"\r\n                :class="`qi-${weather.now.cond_code}`"\r\n            ></i>')]), C(" " + z(f(a).daily_forecast[0].tmp_min) + "° ~ " + z(f(a).daily_forecast[0].tmp_max) + "° ", 1)])])) : b("v-if", !0), "2x1" == t.size ? (d(), p("div", dc, [h("span", pc, [h("p", mc, z(f(a).location.name), 1), h("div", fc, z(f(a).now.tmp) + "°", 1)]), h("div", _c, [h("img", {
                            style: {
                                width: "16px",
                                height: "16px",
                                "vertical-align": "-2px"
                            },
                            src: `https://files.codelife.cc/itab/weather/icon/${f(a).now.cond_code}-fill.svg`
                        }, null, 8, vc), h("p", null, z(f(a).now.cond_txt), 1)])])) : b("v-if", !0), "2x2" == t.size || "small" == t.size ? (d(), p("div", gc, [h("span", hc, [h("div", yc, [h("span", bc, [h("i", null, z(f(a).location.name), 1), h("i", wc, [w(f(Ea))])]), h("p", xc, z(f(a).now.tmp) + "°", 1)]), h("div", null, [h("img", {
                            style: {
                                width: "1.23em",
                                height: "1.23em"
                            },
                            src: `https://files.codelife.cc/itab/weather/icon/${f(a).now.cond_code}-fill.svg`
                        }, null, 8, kc), h("p", Ec, z(f(a).now.cond_txt), 1)])]), h("div", Dc, [h("p", Ic, [b(' <i\r\n                style="font-size: 0.6em"\r\n                :class="`qi-${weather.now.cond_code}`"\r\n            ></i>'), C(" AQI " + z(null == (i = f(a).air_now_city) ? void 0 : i.qlty) + "/" + z(null == (o = f(a).air_now_city) ? void 0 : o.aqi), 1)]), C(" 最高" + z(f(a).daily_forecast[0].tmp_max) + "° 最低" + z(f(a).daily_forecast[0].tmp_min) + "° ", 1)])])) : b("v-if", !0), "2x4" == t.size || "medium" == t.size ? (d(), p("div", Oc, [h("div", zc, [h("div", Tc, [h("span", Ac, [C(z(f(a).location.name) + " ", 1), h("i", Lc, [w(f(Ea))])]), h("p", Pc, z(f(a).now.tmp) + "°", 1)]), h("div", Cc, [h("p", null, [C(z(f(a).now.cond_txt) + " ", 1), h("img", {
                            title: f(a).now.cond_txt,
                            style: {
                                width: "22px",
                                height: "22px",
                                "vertical-align": "-4px"
                            },
                            src: `https://files.codelife.cc/itab/weather/icon/${f(a).now.cond_code}-fill.svg`
                        }, null, 8, Sc)]), h("p", Rc, " 最低 " + z(f(a).daily_forecast[0] && f(a).daily_forecast[0].tmp_min) + "° 最高 " + z(f(a).daily_forecast[0] && f(a).daily_forecast[0].tmp_max) + "° ", 1)])]), h("ul", jc, [(d(!0), p(F, null, Y(f(a).daily_forecast, ((e, t) => (d(), p(F, {
                            key: t
                        }, [0 !== t ? (d(), p("li", Mc, [h("p", null, z(n(e.date, t)), 1), h("p", Vc, [b(' <i class="f14 mr5" :class="`qi-${item.cond_code_d}-fill`"></i> '), h("img", {
                            class: "mr5",
                            style: {
                                width: "16px",
                                height: "16px"
                            },
                            src: `https://files.codelife.cc/itab/weather/icon/${e.cond_code_d}-fill.svg`
                        }, null, 8, Nc)]), h("p", null, z(e.tmp_min) + "/" + z(e.tmp_max), 1)])) : b("v-if", !0)], 64)))), 128))])])) : b("v-if", !0)], 2)]
                    })),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-272925bc"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/weather/icon/icon.vue"]
    ]),
    Yc = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Fc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Hc = {
        class: "d-relative",
        style: {
            "font-size": "2.8px"
        }
    },
    Uc = {
        class: "point"
    },
    Wc = {
        class: "f12 d-elip d-inline",
        style: {
            position: "relative",
            top: "-10px",
            "max-width": "60px"
        }
    },
    Bc = {
        class: "f12 d-elip diff",
        style: ""
    },
    qc = {
        name: "appWorldClock"
    },
    Gc = c(Object.assign(qc, {
        props: {
            data: {
                type: Object,
                default: {}
            }
        },
        setup(e) {
            const t = e,
                a = u((() => {
                    let e = "light";
                    return (t.h < 180 || t.h > 600) && (e = "dark"), e
                }));
            return (t, l) => (d(), p("div", Hc, [h("div", {
                class: y(["digits ac", f(a)]),
                style: {
                    transform: "scale(.64)"
                }
            }, [(d(), p(F, null, Y(12, (e => h("p", {
                key: e
            }, z(e), 1))), 64)), h("div", Uc, [h("span", {
                class: "hand hours-hand",
                style: m(`transform: rotate(${e.data.h}deg);`)
            }, null, 4), h("span", {
                class: "hand minutes-hand",
                style: m(` transform: rotate(${e.data.m}deg);`)
            }, null, 4), h("span", {
                class: "hand seconds-hand",
                style: m(` transform: rotate(${e.data.s}deg);`)
            }, null, 4)])], 2), h("span", Wc, z(e.data.name), 1), h("p", Bc, z(e.data.diff) + "小时", 1)]))
        }
    }), [
        ["__scopeId", "data-v-b5acce7f"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/worldClock/TimeClock.vue"]
    ]),
    Xc = {
        class: "hfull"
    },
    Qc = {
        key: 1,
        class: "b time"
    },
    Jc = {
        key: 2,
        class: "f12 d-elip d-inline"
    },
    Kc = {
        name: "workClock-icon"
    },
    Zc = c(Object.assign(Kc, {
        props: {
            size: String
        },
        setup(e) {
            const t = e;
            s((() =>
                    import ("./timezone.aed506dc.js").then((e => e.t))), ["./timezone.aed506dc.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                import.meta.url).then((e => {
                r.extend(e.default), s((() =>
                        import ("./utc.01108fd0.js").then((e => e.u))), ["./utc.01108fd0.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                    import.meta.url).then((e => {
                    r.extend(e.default), i()
                }))
            }));
            let a = o.get("app-worldClock") || [{
                name: "北京",
                code: "Asia/Shanghai"
            }, {
                name: "洛杉矶",
                code: "America/Los_Angeles"
            }, {
                name: "纽约",
                code: "America/New_York"
            }, {
                name: "巴黎",
                code: "Europe/Paris"
            }];
            s((() =>
                    import ("./eventBus.68d45896.js")), [],
                import.meta.url).then((e => {
                e.default.on("app-worldClock", (e => {
                    a = e
                }))
            }));
            const l = g([]);
            let n = null;

            function i() {
                r().format("D"), r().format("H"), l.value = a.map((e => {
                    let a = {};
                    if (r().tz) {
                        if (a = {
                                name: e.name,
                                time: r().tz(e.code).format("HH:mm")
                            }, "2x4" == t.size) {
                            let t = r().tz(e.code).format("HH"),
                                l = 6 * r().tz(e.code).format("m"),
                                n = 30 * t + l / 12,
                                i = 6 * r().tz(e.code).format("s"),
                                o = r().utcOffset() / 60,
                                s = r().tz(e.code).utcOffset() / 60;
                            a = {
                                name: e.name,
                                diff: s - o,
                                h: n,
                                m: l,
                                s: i
                            }
                        }
                    } else a = {
                        name: e.name,
                        diff: 0,
                        time: "00:00",
                        h: 0,
                        m: 0,
                        s: 0
                    };
                    return a
                }))
            }
            return n && clearInterval(n), i(), n = setInterval((() => {
                i()
            }), 1e3), X((() => {
                clearInterval(n)
            })), (t, a) => (d(), p("div", Xc, [h("div", {
                class: y(["hfull wfull worldClock-wrap d-flex-center d-relative", `icon-size-${e.size}`])
            }, [(d(!0), p(F, null, Y(l.value, (t => (d(), p("li", {
                class: "d-flex-center ac",
                key: t.code
            }, [h("div", null, ["2x4" === e.size ? (d(), O(Gc, {
                key: 0,
                name: t.name,
                data: t,
                h: t.h,
                m: t.m,
                s: t.s
            }, null, 8, ["name", "data", "h", "m", "s"])) : (d(), p("p", Qc, z(t.time), 1)), "2x4" !== e.size ? (d(), p("p", Jc, z(t.name), 1)) : b("v-if", !0)])])))), 128))], 2)]))
        }
    }), [
        ["__scopeId", "data-v-1800c8cb"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/worldClock/icon/icon.vue"]
    ]),
    eu = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Zc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    tu = e => (L("data-v-2e085d46"), e = e(), P(), e),
    au = {
        key: 0,
        class: "d-flex-center hfull"
    },
    lu = {
        class: "f12"
    },
    nu = {
        class: "d-block"
    },
    iu = {
        class: "b f20 jia-font"
    },
    ou = {
        class: "d-block"
    },
    su = {
        class: "f12",
        style: {
            opacity: "0.6"
        }
    },
    ru = {
        class: "f12"
    },
    cu = {
        class: "b f20 jia-font"
    },
    uu = tu((() => h("span", null, "天", -1))),
    du = {
        key: 0,
        class: "jia-first"
    },
    pu = {
        class: "f12"
    },
    mu = {
        class: "b jia-font"
    },
    fu = tu((() => h("em", {
        class: "f12"
    }, " 天", -1))),
    _u = {
        class: "f12"
    },
    vu = {
        class: "jia-list d-flex-x d-flex-column wfull"
    },
    gu = {
        class: "d-block"
    },
    hu = {
        class: "f12",
        style: {
            opacity: "0.6"
        }
    },
    yu = {
        class: "f12"
    },
    bu = {
        class: "f18"
    },
    wu = {
        name: "xiayigejiaqi-icon"
    },
    xu = c(Object.assign(wu, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = g([]),
                l = o.get("xiayigejiaqiData"),
                n = r().format("YYYYMM"),
                i = o.get("xiayigejiaqiUt"),
                c = u((() => {
                    let e = a.value.slice(1, 4);
                    return "2x2" == t.size && (e = a.value.slice(0, 3)), {
                        first: a.value.slice(0, 1)[0] || {},
                        list: e
                    }
                }));

            function m(e) {
                e = e.filter(((e, t) => {
                    let a = (new Date).getTime(),
                        l = r(`${e.holiday} 23:59:59`).valueOf();
                    return a < r(`${e.end||e.holiday} 23:59:59`).valueOf() || a < l
                })), o.set("xiayigejiaqiData", e);
                let t = e.slice(0, 4);
                t.forEach((e => {
                    let t = (new Date).getTime(),
                        a = r(`${e.start||e.holiday} 23:59:59`).valueOf();
                    e.diff = parseInt((a - t) / 864e5), e.diff = e.diff <= 0 ? "今" : e.diff, e.start ? e.date = `${r(e.start).format("M.D")}-${r(e.end).format("M.D")}` : e.date = `${r(e.holiday).format("M.D")}`
                })), a.value = t
            }
            return l && i == n ? m(l) : s((() =>
                    import ("./xiayigejiaqi.ad1190e6.js")), ["./xiayigejiaqi.ad1190e6.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                import.meta.url).then((e => {
                e.jiaqiListApi().then((e => {
                    let t = e.data || [];
                    o.set("xiayigejiaqiUt", n), m(t)
                }))
            })), (t, a) => {
                const l = Z("d-watch-resize");
                return d(), O(l, null, {
                    default: $((() => [h("div", {
                        class: y(["wfull hfull jia-icon", `icon-size-${e.size}`])
                    }, [b(' <img\r\n        v-if="[\'1x1\', \'mini\'].includes(size)"\r\n        alt="假期"\r\n        class="d-block wfull hfull"\r\n        style="object-fit: contain; background-color: #0c173e"\r\n        src="https://files.codelife.cc/icons/xiayigejiaqi.svg"\r\n      /> '), ["1x1", "mini"].includes(e.size) ? (d(), p("div", au, [h("span", lu, [h("em", nu, z(f(c).first.name), 1), h("b", iu, z(f(c).first.diff), 1)])])) : ["1x1", "mini", "1x2", "2x1"].includes(e.size) ? (d(), p("div", {
                        key: 1,
                        class: y(["jia-icon-body wfull hfull d-flex-between", {
                            "d-flex-column": "2x1" == e.size
                        }])
                    }, [h("span", null, [h("em", ou, z(f(c).first.name), 1), h("em", su, z(f(c).first.date), 1)]), h("span", ru, [h("b", cu, z(f(c).first.diff), 1)]), uu], 2)) : ["2x2", "medium", "small", "2x4"].includes(e.size) ? (d(), p(F, {
                        key: 2
                    }, [
                        ["medium", "2x4"].includes(e.size) ? (d(), p("div", du, [h("p", pu, z(f(c).first.name) + "还有", 1), h("span", null, [h("b", mu, z(f(c).first.diff), 1), fu]), h("p", _u, z(f(c).first.start ? f(c).first.date : f(c).first.holiday), 1)])) : b("v-if", !0), h("div", vu, [(d(!0), p(F, null, Y(f(c).list, (e => (d(), p("li", {
                            class: "d-flex-y",
                            key: e.start
                        }, [h("span", null, [h("em", gu, z(e.name), 1), h("em", hu, z(e.date), 1)]), h("span", yu, [h("b", bu, z(e.diff), 1), C(" 天 ")])])))), 128))])
                    ], 64)) : b("v-if", !0)], 2)])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-2e085d46"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/xiayigejiaqi/icon/icon.vue"]
    ]),
    ku = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Eu = {
        key: 0,
        alt: "中文播客榜",
        class: "xyzrank-logo d-block wfull hfull",
        src: "https://files.codelife.cc/icons/xyzrank.svg"
    },
    Du = {
        class: "xyzrank-icon-top"
    },
    Iu = ["onMouseenter"],
    Ou = {
        class: "xyzrank-icon-content"
    },
    zu = ["title"],
    Tu = {
        class: "icon-index mr5"
    },
    Au = ["href"],
    Lu = {
        key: 0,
        class: "d-hidden ml5 d-sub",
        style: {
            "max-width": "60px"
        }
    },
    Pu = {
        name: "xyzrank-icon"
    },
    Cu = c(Object.assign(Pu, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = A({
                    activeId: "hotEpisodes",
                    hotType: [{
                        name: "热门节目",
                        id: "hotEpisodes"
                    }, {
                        name: "新锐节目",
                        id: "hotNewEpisodes"
                    }],
                    hostList: o.get("app-xyzrank") || []
                });
            async function l() {
                var e;
                let t = await s((() =>
                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                    import.meta.url);
                t = t.default;
                let l = await t.getItem("app-xyzrank");
                if (l.data) {
                    let t = l.data;
                    a.hostList = ((null == (e = t[a.activeId]) ? void 0 : e.data) || []).slice(0, 4)
                }
                if (!l.isExp) return;
                let {
                    getXyzrankApi: n
                } = await s((() =>
                        import ("./xyzrank.6915478a.js")), ["./xyzrank.6915478a.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url);
                n().then((e => {
                    var l;
                    let n = e.data || {};
                    t.set("app-xyzrank", n, 12e5), a.hostList = (n[a.activeId].data || []).slice(0, 4);
                    let i = ((null == (l = n.hotEpisodes) ? void 0 : l.data) || []).slice(0, 4);
                    i = i.map((e => ({
                        playCount: e.playCount,
                        title: e.title,
                        url: e.url
                    }))), o.set("app-xyzrank", i)
                }))
            }
            return l(), (n, i) => {
                const o = Z("d-watch-resize");
                return d(), O(o, null, {
                    default: $((() => [
                        ["1x1", "1x2", "mini", "2x1"].includes(e.size) ? (d(), p("img", Eu)) : (d(), p("div", {
                            key: 1,
                            class: y([e.size, "xyzrank-icon"]),
                            style: {
                                padding: "0.74em"
                            }
                        }, [b(' <div class="xyzrank-bg" :style="`background-image:url(${state.bgUrl})`"></div> '), h("div", Du, [(d(!0), p(F, null, Y(a.hotType, (e => (d(), p("span", {
                            class: y(["top-tag", {
                                active: a.activeId == e.id
                            }]),
                            key: e.id,
                            onMouseenter: t => async function(e) {
                                a.activeId = e.id;
                                let t = await s((() =>
                                        import ("./indexdb.a2b9d265.js")), ["./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./_commonjs-dynamic-modules.30ae7933.js"],
                                    import.meta.url);
                                t = t.default;
                                const n = await t.getItem("app-xyzrank");
                                let i = n.data || [];
                                a.hostList = (i[e.id].data || []).slice(0, 4), n.isExp && l()
                            }(e)
                        }, z(e.name), 43, Iu)))), 128))]), h("ul", Ou, [(d(!0), p(F, null, Y(a.hostList, ((e, a) => (d(), p("li", {
                            key: e.id,
                            class: "d-flex-y d-elip",
                            title: e.title
                        }, [h("span", Tu, z(a + 1), 1), h("a", {
                            class: "d-elip d-cell",
                            onClick: i[0] || (i[0] = D((() => {}), ["stop"])),
                            onMouseup: i[1] || (i[1] = D((() => {}), ["stop"])),
                            href: e.url,
                            target: "_blank"
                        }, z(e.title || e.name), 41, Au), ["2x4", "medium"].includes(t.size) ? (d(), p("span", Lu, z(e.playCount), 1)) : b("v-if", !0)], 8, zu)))), 128))])], 2))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-689fe211"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/xyzrank/icon/icon.vue"]
    ]),
    Su = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Cu
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ru = {
        key: 0,
        alt: "每日一言",
        class: "d-block wfull hfull",
        style: {
            "object-fit": "contain",
            "background-color": "#011211"
        },
        src: "https://files.codelife.cc/icons/yiyan.svg"
    },
    ju = {
        class: "d-relative hfull",
        style: {
            "z-index": "1"
        }
    },
    Mu = {
        key: 0,
        class: "mb5 f12",
        style: {
            color: "rgba(255,255,255,.5)"
        }
    },
    Vu = ["title"],
    Nu = {
        name: "yiyan-icon"
    },
    $u = c(Object.assign(Nu, {
        props: {
            size: String
        },
        setup(e) {
            const t = e,
                a = g(Math.floor(Math.random() * Math.floor(7))),
                l = g(o.get("app-yiyan") || {});
            return i((() => t.size), (async e => {
                ["1x1", "mini"].includes(e) || l.value.date && l.value.date == r().format("YYYYMMDD") || s((() =>
                        import ("./yiyan.54a1ffc2.js")), ["./yiyan.54a1ffc2.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
                    import.meta.url).then((e => {
                    e.yiyanInfoApi().then((e => {
                        (e.data || {}).content && (l.value = e.data || {}, o.set("app-yiyan", e.data || {}))
                    }))
                }))
            }), {
                immediate: !0
            }), (t, n) => {
                const i = Z("d-watch-resize");
                return d(), O(i, null, {
                    default: $((() => [
                        ["mini", "1x1"].includes(e.size) ? (d(), p("img", Ru)) : (d(), p("div", {
                            key: 1,
                            class: y(["hfull yiyan-wrap", `icon-size-${e.size}`]),
                            style: m([{
                                padding: "10px"
                            }, `background-image:url(https://files.codelife.cc/itab/widget/yiyan/${a.value}.jpg?x-oss-process=image/resize,limit_0,m_fill,w_300,h_300/quality,q_90)`])
                        }, [h("div", ju, [
                            ["small", "medium", "2x2", "2x4"].includes(e.size) ? (d(), p("h2", Mu, "每日一言")) : b("v-if", !0), h("p", {
                                style: m(!["small", "medium", "2x2", "2x4"].includes(e.size) && "height:100%"),
                                class: "yiyan-content d-scrollbar-hide",
                                title: l.value.content,
                                onMousewheel: n[0] || (n[0] = D((() => {}), ["stop"]))
                            }, z(l.value.content), 45, Vu)
                        ])], 6))
                    ])),
                    _: 1
                })
            }
        }
    }), [
        ["__scopeId", "data-v-49f10a09"],
        ["__file", "D:/gitee/new-tab/src/views/DialogApp/app/yiyan/icon/icon.vue"]
    ]),
    Fu = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: $u
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Yu = o.get("navConfig") || [],
    Hu = null == (a = (o.get("baseConfig") || {}).layout) ? void 0 : a.view,
    Uu = [],
    Wu = "undefined" != typeof window;
let Bu, qu; {
    const e = Wu && window.performance;
    e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (Bu = t => e.mark(t), qu = (t, a, l) => {
        e.measure(t, a, l), e.clearMarks(a), e.clearMarks(l)
    })
}
const Gu = /\{([0-9a-zA-Z]+)\}/g;

function Xu(e, ...t) {
    return 1 === t.length && md(t[0]) && (t = t[0]), t && t.hasOwnProperty || (t = {}), e.replace(Gu, ((e, a) => t.hasOwnProperty(a) ? t[a] : ""))
}
const Qu = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
    Ju = e => Qu ? Symbol(e) : e,
    Ku = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Zu = e => "number" == typeof e && isFinite(e),
    ed = e => "[object RegExp]" === _d(e),
    td = e => vd(e) && 0 === Object.keys(e).length;

function ad(e, t) {
    "undefined" != typeof console && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const ld = Object.assign;
let nd;
const id = () => nd || (nd = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});

function od(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const sd = Object.prototype.hasOwnProperty;

function rd(e, t) {
    return sd.call(e, t)
}
const cd = Array.isArray,
    ud = e => "function" == typeof e,
    dd = e => "string" == typeof e,
    pd = e => "boolean" == typeof e,
    md = e => null !== e && "object" == typeof e,
    fd = Object.prototype.toString,
    _d = e => fd.call(e),
    vd = e => "[object Object]" === _d(e);

function gd() {
    const e = new Map;
    return {
        events: e,
        on(t, a) {
            const l = e.get(t);
            l && l.push(a) || e.set(t, [a])
        },
        off(t, a) {
            const l = e.get(t);
            l && l.splice(l.indexOf(a) >>> 0, 1)
        },
        emit(t, a) {
            (e.get(t) || []).slice().map((e => e(a))), (e.get("*") || []).slice().map((e => e(t, a)))
        }
    }
}
/*!
 * message-compiler v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const hd = 15,
    yd = {
        [1]: "Expected token: '{0}'",
        [2]: "Invalid token in placeholder: '{0}'",
        [3]: "Unterminated single quote in placeholder",
        [4]: "Unknown escape sequence: \\{0}",
        [5]: "Invalid unicode escape sequence: {0}",
        [6]: "Unbalanced closing brace",
        [7]: "Unterminated closing brace",
        [8]: "Empty placeholder",
        [9]: "Not allowed nest placeholder",
        [10]: "Invalid linked format",
        [11]: "Plural must have messages",
        [12]: "Unexpected empty linked modifier",
        [13]: "Unexpected empty linked key",
        [14]: "Unexpected lexical analysis in token: '{0}'"
    };

function bd(e, t, a = {}) {
    const {
        domain: l,
        messages: n,
        args: i
    } = a, o = Xu((n || yd)[e] || "", ...i || []), s = new SyntaxError(String(o));
    return s.code = e, t && (s.location = t), s.domain = l, s
}
/*!
 * devtools-if v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const wd = "i18n:init",
    xd = "function:translate",
    kd = [];
/*!
 * core-base v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
kd[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
}, kd[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
}, kd[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
}, kd[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
}, kd[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
}, kd[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
}, kd[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Ed = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function Dd(e) {
    if (null == e) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function Id(e) {
    const t = e.trim();
    return ("0" !== e.charAt(0) || !isNaN(parseInt(e))) && (a = t, Ed.test(a) ? function(e) {
        const t = e.charCodeAt(0);
        return t !== e.charCodeAt(e.length - 1) || 34 !== t && 39 !== t ? e : e.slice(1, -1)
    }(t) : "*" + t);
    var a
}
const Od = new Map;

function zd(e, t) {
    return md(e) ? e[t] : null
}
const Td = e => e,
    Ad = e => "",
    Ld = e => 0 === e.length ? "" : e.join(""),
    Pd = e => null == e ? "" : cd(e) || vd(e) && e.toString === fd ? JSON.stringify(e, null, 2) : String(e);

function Cd(e, t) {
    return e = Math.abs(e), 2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function Sd(e = {}) {
    const t = e.locale,
        a = function(e) {
            const t = Zu(e.pluralIndex) ? e.pluralIndex : -1;
            return e.named && (Zu(e.named.count) || Zu(e.named.n)) ? Zu(e.named.count) ? e.named.count : Zu(e.named.n) ? e.named.n : t : t
        }(e),
        l = md(e.pluralRules) && dd(t) && ud(e.pluralRules[t]) ? e.pluralRules[t] : Cd,
        n = md(e.pluralRules) && dd(t) && ud(e.pluralRules[t]) ? Cd : void 0,
        i = e.list || [],
        o = e.named || {};
    Zu(e.pluralIndex) && function(e, t) {
        t.count || (t.count = e), t.n || (t.n = e)
    }(a, o);

    function s(t) {
        const a = ud(e.messages) ? e.messages(t) : !!md(e.messages) && e.messages[t];
        return a || (e.parent ? e.parent.message(t) : Ad)
    }
    const r = vd(e.processor) && ud(e.processor.normalize) ? e.processor.normalize : Ld,
        c = vd(e.processor) && ud(e.processor.interpolate) ? e.processor.interpolate : Pd,
        u = {
            list: e => i[e],
            named: e => o[e],
            plural: e => e[l(a, e.length, n)],
            linked: (t, ...a) => {
                const [l, n] = a;
                let i = "text",
                    o = "";
                1 === a.length ? md(l) ? (o = l.modifier || o, i = l.type || i) : dd(l) && (o = l || o) : 2 === a.length && (dd(l) && (o = l || o), dd(n) && (i = n || i));
                let r = s(t)(u);
                return "vnode" === i && cd(r) && o && (r = r[0]), o ? (c = o, e.modifiers ? e.modifiers[c] : Td)(r, i) : r;
                var c
            },
            message: s,
            type: vd(e.processor) && dd(e.processor.type) ? e.processor.type : "text",
            interpolate: c,
            normalize: r
        };
    return u
}
let Rd = null;
const jd = Md(xd);

function Md(e) {
    return t => Rd && Rd.emit(e, t)
}
const Vd = 1,
    Nd = 2,
    $d = 3,
    Fd = 4,
    Yd = 5,
    Hd = 6,
    Ud = 7,
    Wd = {
        [Vd]: "Not found '{key}' key in '{locale}' locale messages.",
        [Nd]: "Fall back to translate '{key}' key with '{target}' locale.",
        [$d]: "Cannot format a number value due to not supported Intl.NumberFormat.",
        [Fd]: "Fall back to number format '{key}' key with '{target}' locale.",
        [Yd]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
        [Hd]: "Fall back to datetime format '{key}' key with '{target}' locale."
    };

function Bd(e, ...t) {
    return Xu(Wd[e], ...t)
}

function qd(e, t, a) {
    return [...new Set([a, ...cd(t) ? t : md(t) ? Object.keys(t) : dd(t) ? [t] : [a]])]
}

function Gd(e, t, a) {
    const l = dd(a) ? a : Kd,
        n = e;
    n.__localeChainCache || (n.__localeChainCache = new Map);
    let i = n.__localeChainCache.get(l);
    if (!i) {
        i = [];
        let e = [a];
        for (; cd(e);) e = Xd(i, e, t);
        const o = cd(t) || !vd(t) ? t : t.default ? t.default : null;
        e = dd(o) ? [o] : o, cd(e) && Xd(i, e, !1), n.__localeChainCache.set(l, i)
    }
    return i
}

function Xd(e, t, a) {
    let l = !0;
    for (let n = 0; n < t.length && pd(l); n++) {
        const i = t[n];
        dd(i) && (l = Qd(e, t[n], a))
    }
    return l
}

function Qd(e, t, a) {
    let l;
    const n = t.split("-");
    do {
        l = Jd(e, n.join("-"), a), n.splice(-1, 1)
    } while (n.length && !0 === l);
    return l
}

function Jd(e, t, a) {
    let l = !1;
    if (!e.includes(t) && (l = !0, t)) {
        l = "!" !== t[t.length - 1];
        const n = t.replace(/!/g, "");
        e.push(n), (cd(a) || vd(a)) && a[n] && (l = a[n])
    }
    return l
}
const Kd = "en-US",
    Zd = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let ep, tp;
let ap = null;
const lp = e => {
    ap = e
};
let np = null;
const ip = e => {
    np = e
};
let op = 0;

function sp(e = {}) {
    const t = dd(e.version) ? e.version : "9.2.2",
        a = dd(e.locale) ? e.locale : Kd,
        l = cd(e.fallbackLocale) || vd(e.fallbackLocale) || dd(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : a,
        n = vd(e.messages) ? e.messages : {
            [a]: {}
        },
        i = vd(e.datetimeFormats) ? e.datetimeFormats : {
            [a]: {}
        },
        o = vd(e.numberFormats) ? e.numberFormats : {
            [a]: {}
        },
        s = ld({}, e.modifiers || {}, {
            upper: (e, t) => "text" === t && dd(e) ? e.toUpperCase() : "vnode" === t && md(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
            lower: (e, t) => "text" === t && dd(e) ? e.toLowerCase() : "vnode" === t && md(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
            capitalize: (e, t) => "text" === t && dd(e) ? Zd(e) : "vnode" === t && md(e) && "__v_isVNode" in e ? Zd(e.children) : e
        }),
        r = e.pluralRules || {},
        c = ud(e.missing) ? e.missing : null,
        u = !pd(e.missingWarn) && !ed(e.missingWarn) || e.missingWarn,
        d = !pd(e.fallbackWarn) && !ed(e.fallbackWarn) || e.fallbackWarn,
        p = !!e.fallbackFormat,
        m = !!e.unresolving,
        f = ud(e.postTranslation) ? e.postTranslation : null,
        _ = vd(e.processor) ? e.processor : null,
        v = !pd(e.warnHtmlMessage) || e.warnHtmlMessage,
        g = !!e.escapeParameter,
        h = ud(e.messageCompiler) ? e.messageCompiler : undefined,
        y = ud(e.messageResolver) ? e.messageResolver : ep || zd,
        b = ud(e.localeFallbacker) ? e.localeFallbacker : tp || qd,
        w = md(e.fallbackContext) ? e.fallbackContext : void 0,
        x = ud(e.onWarn) ? e.onWarn : ad,
        k = e,
        E = md(k.__datetimeFormatters) ? k.__datetimeFormatters : new Map,
        D = md(k.__numberFormatters) ? k.__numberFormatters : new Map,
        I = md(k.__meta) ? k.__meta : {};
    op++;
    const O = {
        version: t,
        cid: op,
        locale: a,
        fallbackLocale: l,
        messages: n,
        modifiers: s,
        pluralRules: r,
        missing: c,
        missingWarn: u,
        fallbackWarn: d,
        fallbackFormat: p,
        unresolving: m,
        postTranslation: f,
        processor: _,
        warnHtmlMessage: v,
        escapeParameter: g,
        messageCompiler: h,
        messageResolver: y,
        localeFallbacker: b,
        fallbackContext: w,
        onWarn: x,
        __meta: I
    };
    return O.datetimeFormats = i, O.numberFormats = o, O.__datetimeFormatters = E, O.__numberFormatters = D, O.__v_emitter = null != k.__v_emitter ? k.__v_emitter : void 0,
        function(e, t, a) {
            Rd && Rd.emit(wd, {
                timestamp: Date.now(),
                i18n: e,
                version: t,
                meta: a
            })
        }(O, t, I), O
}

function rp(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}

function cp(e, t) {
    return e instanceof RegExp ? e.test(t) : e
}

function up(e, t, a, l, n) {
    const {
        missing: i,
        onWarn: o
    } = e; {
        const l = e.__v_emitter;
        l && l.emit("missing", {
            locale: a,
            key: t,
            type: n,
            groupId: `${n}:${t}`
        })
    }
    if (null !== i) {
        const l = i(e, a, t, n);
        return dd(l) ? l : t
    }
    return cp(l, t) && o(Bd(Vd, {
        key: t,
        locale: a
    })), t
}

function dp(e, t, a) {
    e.__localeChainCache = new Map, e.localeFallbacker(e, a, t)
}
let pp = hd;
const mp = () => ++pp,
    fp = {
        INVALID_ARGUMENT: pp,
        INVALID_DATE_ARGUMENT: mp(),
        INVALID_ISO_DATE_ARGUMENT: mp(),
        __EXTEND_POINT__: mp()
    };

function _p(e) {
    return bd(e, null, {
        messages: vp
    })
}
const vp = {
        [fp.INVALID_ARGUMENT]: "Invalid arguments",
        [fp.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
        [fp.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
    },
    gp = () => "",
    hp = e => ud(e);

function yp(e, ...t) {
    const {
        fallbackFormat: a,
        postTranslation: l,
        unresolving: n,
        messageCompiler: i,
        fallbackLocale: o,
        messages: s
    } = e, [r, c] = xp(...t), u = pd(c.missingWarn) ? c.missingWarn : e.missingWarn, d = pd(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, p = pd(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, m = !!c.resolvedMessage, f = dd(c.default) || pd(c.default) ? pd(c.default) ? i ? r : () => r : c.default : a ? i ? r : () => r : "", _ = a || "" !== f, v = dd(c.locale) ? c.locale : e.locale;
    p && function(e) {
        cd(e.list) ? e.list = e.list.map((e => dd(e) ? od(e) : e)) : md(e.named) && Object.keys(e.named).forEach((t => {
            dd(e.named[t]) && (e.named[t] = od(e.named[t]))
        }))
    }(c);
    let [g, h, y] = m ? [r, v, s[v] || {}] : bp(e, r, v, o, d, u), b = g, w = r;
    if (m || dd(b) || hp(b) || _ && (b = f, w = b), !(m || (dd(b) || hp(b)) && dd(h))) return n ? -1 : r;
    if (dd(b) && null == e.messageCompiler) return ad(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${r}'.`), r;
    let x = !1;
    const k = hp(b) ? b : wp(e, r, h, b, w, (() => {
        x = !0
    }));
    if (x) return b;
    const E = function(e, t, a, l) {
            const {
                modifiers: n,
                pluralRules: i,
                messageResolver: o,
                fallbackLocale: s,
                fallbackWarn: r,
                missingWarn: c,
                fallbackContext: u
            } = e, d = l => {
                let n = o(a, l);
                if (null == n && u) {
                    const [, , e] = bp(u, l, t, s, r, c);
                    n = o(e, l)
                }
                if (dd(n)) {
                    let a = !1;
                    const i = wp(e, l, t, n, l, (() => {
                        a = !0
                    }));
                    return a ? gp : i
                }
                return hp(n) ? n : gp
            }, p = {
                locale: t,
                modifiers: n,
                pluralRules: i,
                messages: d
            };
            e.processor && (p.processor = e.processor);
            l.list && (p.list = l.list);
            l.named && (p.named = l.named);
            Zu(l.plural) && (p.pluralIndex = l.plural);
            return p
        }(e, h, y, c),
        D = function(e, t, a) {
            let l, n, i = null;
            Wu && (i = window.performance.now(), l = "intlify-message-evaluation-start", n = "intlify-message-evaluation-end", Bu && Bu(l));
            const o = t(a);
            if (Wu) {
                const a = window.performance.now(),
                    s = e.__v_emitter;
                s && i && s.emit("message-evaluation", {
                    type: "message-evaluation",
                    value: o,
                    time: a - i,
                    groupId: `translate:${t.key}`
                }), l && n && Bu && qu && (Bu(n), qu("intlify message evaluation", l, n))
            }
            return o
        }(e, k, Sd(E)),
        I = l ? l(D, r) : D; {
        const t = {
            timestamp: Date.now(),
            key: dd(r) ? r : hp(b) ? b.key : "",
            locale: h || (hp(b) ? b.locale : ""),
            format: dd(b) ? b : hp(b) ? b.source : "",
            message: I
        };
        t.meta = ld({}, e.__meta, ap || {}), jd(t)
    }
    return I
}

function bp(e, t, a, l, n, i) {
    const {
        messages: o,
        onWarn: s,
        messageResolver: r,
        localeFallbacker: c
    } = e, u = c(e, l, a);
    let d, p = {},
        m = null,
        f = a,
        _ = null;
    const v = "translate";
    for (let g = 0; g < u.length; g++) {
        if (d = _ = u[g], a !== d && rp(n, t) && s(Bd(Nd, {
                key: t,
                target: d
            })), a !== d) {
            const a = e.__v_emitter;
            a && a.emit("fallback", {
                type: v,
                key: t,
                from: f,
                to: _,
                groupId: `${v}:${t}`
            })
        }
        p = o[d] || {};
        let l, c, h = null;
        if (Wu && (h = window.performance.now(), l = "intlify-message-resolve-start", c = "intlify-message-resolve-end", Bu && Bu(l)), null === (m = r(p, t)) && (m = p[t]), Wu) {
            const a = window.performance.now(),
                n = e.__v_emitter;
            n && h && m && n.emit("message-resolve", {
                type: "message-resolve",
                key: t,
                message: m,
                time: a - h,
                groupId: `${v}:${t}`
            }), l && c && Bu && qu && (Bu(c), qu("intlify message resolve", l, c))
        }
        if (dd(m) || ud(m)) break;
        const y = up(e, t, d, i, v);
        y !== t && (m = y), f = _
    }
    return [m, d, p]
}

function wp(e, t, a, l, n, i) {
    const {
        messageCompiler: o,
        warnHtmlMessage: s
    } = e;
    if (hp(l)) {
        const e = l;
        return e.locale = e.locale || a, e.key = e.key || t, e
    }
    if (null == o) {
        const e = () => l;
        return e.locale = a, e.key = t, e
    }
    let r, c, u = null;
    Wu && (u = window.performance.now(), r = "intlify-message-compilation-start", c = "intlify-message-compilation-end", Bu && Bu(r));
    const d = o(l, function(e, t, a, l, n, i) {
        return {
            warnHtmlMessage: n,
            onError: t => {
                i && i(t); {
                    const n = `Message compilation error: ${t.message}`,
                        i = t.location && function(e, t = 0, a = e.length) {
                            const l = e.split(/\r?\n/);
                            let n = 0;
                            const i = [];
                            for (let o = 0; o < l.length; o++)
                                if (n += l[o].length + 1, n >= t) {
                                    for (let e = o - 2; e <= o + 2 || a > n; e++) {
                                        if (e < 0 || e >= l.length) continue;
                                        const s = e + 1;
                                        i.push(`${s}${" ".repeat(3-String(s).length)}|  ${l[e]}`);
                                        const r = l[e].length;
                                        if (e === o) {
                                            const e = t - (n - r) + 1,
                                                l = Math.max(1, a > n ? r - e : a - t);
                                            i.push("   |  " + " ".repeat(e) + "^".repeat(l))
                                        } else if (e > o) {
                                            if (a > n) {
                                                const e = Math.max(Math.min(a - n, r), 1);
                                                i.push("   |  " + "^".repeat(e))
                                            }
                                            n += r + 1
                                        }
                                    }
                                    break
                                }
                            return i.join("\n")
                        }(l, t.location.start.offset, t.location.end.offset),
                        o = e.__v_emitter;
                    o && o.emit("compile-error", {
                        message: l,
                        error: t.message,
                        start: t.location && t.location.start.offset,
                        end: t.location && t.location.end.offset,
                        groupId: `translate:${a}`
                    }), console.error(i ? `${n}\n${i}` : n)
                }
            },
            onCacheKey: e => ((e, t, a) => Ku({
                l: e,
                k: t,
                s: a
            }))(t, a, e)
        }
    }(e, a, n, l, s, i));
    if (Wu) {
        const a = window.performance.now(),
            n = e.__v_emitter;
        n && u && n.emit("message-compilation", {
            type: "message-compilation",
            message: l,
            time: a - u,
            groupId: `translate:${t}`
        }), r && c && Bu && qu && (Bu(c), qu("intlify message compilation", r, c))
    }
    return d.locale = a, d.key = t, d.source = l, d
}

function xp(...e) {
    const [t, a, l] = e, n = {};
    if (!dd(t) && !Zu(t) && !hp(t)) throw _p(fp.INVALID_ARGUMENT);
    const i = Zu(t) ? String(t) : (hp(t), t);
    return Zu(a) ? n.plural = a : dd(a) ? n.default = a : vd(a) && !td(a) ? n.named = a : cd(a) && (n.list = a), Zu(l) ? n.plural = l : dd(l) ? n.default = l : vd(l) && ld(n, l), [i, n]
}
const kp = "undefined" != typeof Intl,
    Ep = kp && void 0 !== Intl.DateTimeFormat,
    Dp = kp && void 0 !== Intl.NumberFormat;

function Ip(e, ...t) {
    const {
        datetimeFormats: a,
        unresolving: l,
        fallbackLocale: n,
        onWarn: i,
        localeFallbacker: o
    } = e, {
        __datetimeFormatters: s
    } = e;
    if (!Ep) return i(Bd(Yd)), "";
    const [r, c, u, d] = zp(...t), p = pd(u.missingWarn) ? u.missingWarn : e.missingWarn, m = pd(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, f = !!u.part, _ = dd(u.locale) ? u.locale : e.locale, v = o(e, n, _);
    if (!dd(r) || "" === r) return new Intl.DateTimeFormat(_, d).format(c);
    let g, h = {},
        y = null,
        b = _,
        w = null;
    const x = "datetime format";
    for (let D = 0; D < v.length; D++) {
        if (g = w = v[D], _ !== g && rp(m, r) && i(Bd(Hd, {
                key: r,
                target: g
            })), _ !== g) {
            const t = e.__v_emitter;
            t && t.emit("fallback", {
                type: x,
                key: r,
                from: b,
                to: w,
                groupId: `${x}:${r}`
            })
        }
        if (h = a[g] || {}, y = h[r], vd(y)) break;
        up(e, r, g, p, x), b = w
    }
    if (!vd(y) || !dd(g)) return l ? -1 : r;
    let k = `${g}__${r}`;
    td(d) || (k = `${k}__${JSON.stringify(d)}`);
    let E = s.get(k);
    return E || (E = new Intl.DateTimeFormat(g, ld({}, y, d)), s.set(k, E)), f ? E.formatToParts(c) : E.format(c)
}
const Op = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function zp(...e) {
    const [t, a, l, n] = e, i = {};
    let o, s = {};
    if (dd(t)) {
        const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!e) throw _p(fp.INVALID_ISO_DATE_ARGUMENT);
        const a = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
        o = new Date(a);
        try {
            o.toISOString()
        } catch (Ll) {
            throw _p(fp.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if ("[object Date]" === _d(t)) {
        if (isNaN(t.getTime())) throw _p(fp.INVALID_DATE_ARGUMENT);
        o = t
    } else {
        if (!Zu(t)) throw _p(fp.INVALID_ARGUMENT);
        o = t
    }
    return dd(a) ? i.key = a : vd(a) && Object.keys(a).forEach((e => {
        Op.includes(e) ? s[e] = a[e] : i[e] = a[e]
    })), dd(l) ? i.locale = l : vd(l) && (s = l), vd(n) && (s = n), [i.key || "", o, i, s]
}

function Tp(e, t, a) {
    const l = e;
    for (const n in a) {
        const e = `${t}__${n}`;
        l.__datetimeFormatters.has(e) && l.__datetimeFormatters.delete(e)
    }
}

function Ap(e, ...t) {
    const {
        numberFormats: a,
        unresolving: l,
        fallbackLocale: n,
        onWarn: i,
        localeFallbacker: o
    } = e, {
        __numberFormatters: s
    } = e;
    if (!Dp) return i(Bd($d)), "";
    const [r, c, u, d] = Pp(...t), p = pd(u.missingWarn) ? u.missingWarn : e.missingWarn, m = pd(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, f = !!u.part, _ = dd(u.locale) ? u.locale : e.locale, v = o(e, n, _);
    if (!dd(r) || "" === r) return new Intl.NumberFormat(_, d).format(c);
    let g, h = {},
        y = null,
        b = _,
        w = null;
    const x = "number format";
    for (let D = 0; D < v.length; D++) {
        if (g = w = v[D], _ !== g && rp(m, r) && i(Bd(Fd, {
                key: r,
                target: g
            })), _ !== g) {
            const t = e.__v_emitter;
            t && t.emit("fallback", {
                type: x,
                key: r,
                from: b,
                to: w,
                groupId: `${x}:${r}`
            })
        }
        if (h = a[g] || {}, y = h[r], vd(y)) break;
        up(e, r, g, p, x), b = w
    }
    if (!vd(y) || !dd(g)) return l ? -1 : r;
    let k = `${g}__${r}`;
    td(d) || (k = `${k}__${JSON.stringify(d)}`);
    let E = s.get(k);
    return E || (E = new Intl.NumberFormat(g, ld({}, y, d)), s.set(k, E)), f ? E.formatToParts(c) : E.format(c)
}
const Lp = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Pp(...e) {
    const [t, a, l, n] = e, i = {};
    let o = {};
    if (!Zu(t)) throw _p(fp.INVALID_ARGUMENT);
    const s = t;
    return dd(a) ? i.key = a : vd(a) && Object.keys(a).forEach((e => {
        Lp.includes(e) ? o[e] = a[e] : i[e] = a[e]
    })), dd(l) ? i.locale = l : vd(l) && (o = l), vd(n) && (o = n), [i.key || "", s, i, o]
}

function Cp(e, t, a) {
    const l = e;
    for (const n in a) {
        const e = `${t}__${n}`;
        l.__numberFormatters.has(e) && l.__numberFormatters.delete(e)
    }
}

function Sp() {
    return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}
}
"boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (id().__INTLIFY_PROD_DEVTOOLS__ = !1);
const Rp = "function" == typeof Proxy;
let jp, Mp;

function Vp() {
    return void 0 !== jp || ("undefined" != typeof window && window.performance ? (jp = !0, Mp = window.performance) : "undefined" != typeof global && (null === (e = global.perf_hooks) || void 0 === e ? void 0 : e.performance) ? (jp = !0, Mp = global.perf_hooks.performance) : jp = !1), jp ? Mp.now() : Date.now();
    var e
}
class Np {
    constructor(e, t) {
        this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = t;
        const a = {};
        if (e.settings)
            for (const i in e.settings) {
                const t = e.settings[i];
                a[i] = t.defaultValue
            }
        const l = `__vue-devtools-plugin-settings__${e.id}`;
        let n = Object.assign({}, a);
        try {
            const e = localStorage.getItem(l),
                t = JSON.parse(e);
            Object.assign(n, t)
        } catch (Ll) {}
        this.fallbacks = {
            getSettings: () => n,
            setSettings(e) {
                try {
                    localStorage.setItem(l, JSON.stringify(e))
                } catch (Ll) {}
                n = e
            },
            now: () => Vp()
        }, t && t.on("plugin:settings:set", ((e, t) => {
            e === this.plugin.id && this.fallbacks.setSettings(t)
        })), this.proxiedOn = new Proxy({}, {
            get: (e, t) => this.target ? this.target.on[t] : (...e) => {
                this.onQueue.push({
                    method: t,
                    args: e
                })
            }
        }), this.proxiedTarget = new Proxy({}, {
            get: (e, t) => this.target ? this.target[t] : "on" === t ? this.proxiedOn : Object.keys(this.fallbacks).includes(t) ? (...e) => (this.targetQueue.push({
                method: t,
                args: e,
                resolve: () => {}
            }), this.fallbacks[t](...e)) : (...e) => new Promise((a => {
                this.targetQueue.push({
                    method: t,
                    args: e,
                    resolve: a
                })
            }))
        })
    }
    async setRealTarget(e) {
        this.target = e;
        for (const t of this.onQueue) this.target.on[t.method](...t.args);
        for (const t of this.targetQueue) t.resolve(await this.target[t.method](...t.args))
    }
}

function $p(e, t) {
    const a = e,
        l = Sp(),
        n = Sp().__VUE_DEVTOOLS_GLOBAL_HOOK__,
        i = Rp && a.enableEarlyProxy;
    if (!n || !l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ && i) {
        const e = i ? new Np(a, n) : null;
        (l.__VUE_DEVTOOLS_PLUGINS__ = l.__VUE_DEVTOOLS_PLUGINS__ || []).push({
            pluginDescriptor: a,
            setupFn: t,
            proxy: e
        }), e && t(e.proxiedTarget)
    } else n.emit("devtools-plugin:setup", e, t)
}
/*!
 * vue-devtools v9.2.2
 * (c) 2022 kazuya kawaguchi
 * Released under the MIT License.
 */
const Fp = {
        "vue-devtools-plugin-vue-i18n": "Vue I18n devtools",
        "vue-i18n-resource-inspector": "I18n Resources",
        "vue-i18n-timeline": "Vue I18n"
    },
    Yp = {
        "vue-i18n-resource-inspector": "Search for scopes ..."
    },
    Hp = {
        "vue-i18n-timeline": 16764185
    };
let Up = Ud;
const Wp = () => ++Up,
    Bp = {
        FALLBACK_TO_ROOT: Up,
        NOT_SUPPORTED_PRESERVE: Wp(),
        NOT_SUPPORTED_FORMATTER: Wp(),
        NOT_SUPPORTED_PRESERVE_DIRECTIVE: Wp(),
        NOT_SUPPORTED_GET_CHOICE_INDEX: Wp(),
        COMPONENT_NAME_LEGACY_COMPATIBLE: Wp(),
        NOT_FOUND_PARENT_SCOPE: Wp()
    },
    qp = {
        [Bp.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
        [Bp.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
        [Bp.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
        [Bp.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
        [Bp.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
        [Bp.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
        [Bp.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
    };

function Gp(e, ...t) {
    return Xu(qp[e], ...t)
}
let Xp = hd;
const Qp = () => ++Xp,
    Jp = {
        UNEXPECTED_RETURN_TYPE: Xp,
        INVALID_ARGUMENT: Qp(),
        MUST_BE_CALL_SETUP_TOP: Qp(),
        NOT_INSLALLED: Qp(),
        NOT_AVAILABLE_IN_LEGACY_MODE: Qp(),
        REQUIRED_VALUE: Qp(),
        INVALID_VALUE: Qp(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Qp(),
        NOT_INSLALLED_WITH_PROVIDE: Qp(),
        UNEXPECTED_ERROR: Qp(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: Qp(),
        BRIDGE_SUPPORT_VUE_2_ONLY: Qp(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Qp(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Qp(),
        __EXTEND_POINT__: Qp()
    };

function Kp(e, ...t) {
    return bd(e, null, {
        messages: Zp,
        args: t
    })
}
const Zp = {
        [Jp.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
        [Jp.INVALID_ARGUMENT]: "Invalid argument",
        [Jp.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
        [Jp.NOT_INSLALLED]: "Need to install with `app.use` function",
        [Jp.UNEXPECTED_ERROR]: "Unexpected error",
        [Jp.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
        [Jp.REQUIRED_VALUE]: "Required in value: {0}",
        [Jp.INVALID_VALUE]: "Invalid value",
        [Jp.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
        [Jp.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
        [Jp.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
        [Jp.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
        [Jp.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
        [Jp.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
    },
    em = Ju("__transrateVNode"),
    tm = Ju("__datetimeParts"),
    am = Ju("__numberParts"),
    lm = Ju("__enableEmitter"),
    nm = Ju("__disableEmitter"),
    im = Ju("__setPluralRules");
Ju("__intlifyMeta");
const om = Ju("__injectWithOption");

function sm(e) {
    if (!md(e)) return e;
    for (const t in e)
        if (rd(e, t))
            if (t.includes(".")) {
                const a = t.split("."),
                    l = a.length - 1;
                let n = e;
                for (let e = 0; e < l; e++) a[e] in n || (n[a[e]] = {}), n = n[a[e]];
                n[a[l]] = e[t], delete e[t], md(n[a[l]]) && sm(n[a[l]])
            } else md(e[t]) && sm(e[t]);
    return e
}

function rm(e, t) {
    const {
        messages: a,
        __i18n: l,
        messageResolver: n,
        flatJson: i
    } = t, o = vd(a) ? a : cd(l) ? {} : {
        [e]: {}
    };
    if (cd(l) && l.forEach((e => {
            if ("locale" in e && "resource" in e) {
                const {
                    locale: t,
                    resource: a
                } = e;
                t ? (o[t] = o[t] || {}, um(a, o[t])) : um(a, o)
            } else dd(e) && um(JSON.parse(e), o)
        })), null == n && i)
        for (const s in o) rd(o, s) && sm(o[s]);
    return o
}
const cm = e => !md(e) || cd(e);

function um(e, t) {
    if (cm(e) || cm(t)) throw Kp(Jp.INVALID_VALUE);
    for (const a in e) rd(e, a) && (cm(e[a]) || cm(t[a]) ? t[a] = e[a] : um(e[a], t[a]))
}

function dm(e) {
    return e.type
}

function pm(e) {
    return w(de, null, e, 0)
}
let mm = 0;

function fm(e) {
    return (t, a, l, n) => e(a, l, j() || void 0, n)
}

function _m(e = {}, t) {
    const {
        __root: a
    } = e, l = void 0 === a;
    let n = !pd(e.inheritLocale) || e.inheritLocale;
    const o = g(a && n ? a.locale.value : dd(e.locale) ? e.locale : Kd),
        s = g(a && n ? a.fallbackLocale.value : dd(e.fallbackLocale) || cd(e.fallbackLocale) || vd(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : o.value),
        r = g(rm(o.value, e)),
        c = g(vd(e.datetimeFormats) ? e.datetimeFormats : {
            [o.value]: {}
        }),
        d = g(vd(e.numberFormats) ? e.numberFormats : {
            [o.value]: {}
        });
    let p = a ? a.missingWarn : !pd(e.missingWarn) && !ed(e.missingWarn) || e.missingWarn,
        m = a ? a.fallbackWarn : !pd(e.fallbackWarn) && !ed(e.fallbackWarn) || e.fallbackWarn,
        f = a ? a.fallbackRoot : !pd(e.fallbackRoot) || e.fallbackRoot,
        _ = !!e.fallbackFormat,
        v = ud(e.missing) ? e.missing : null,
        h = ud(e.missing) ? fm(e.missing) : null,
        y = ud(e.postTranslation) ? e.postTranslation : null,
        b = a ? a.warnHtmlMessage : !pd(e.warnHtmlMessage) || e.warnHtmlMessage,
        w = !!e.escapeParameter;
    const x = a ? a.modifiers : vd(e.modifiers) ? e.modifiers : {};
    let k, E = e.pluralRules || a && a.pluralRules;
    k = (() => {
        l && ip(null);
        const t = {
            version: "9.2.2",
            locale: o.value,
            fallbackLocale: s.value,
            messages: r.value,
            modifiers: x,
            pluralRules: E,
            missing: null === h ? void 0 : h,
            missingWarn: p,
            fallbackWarn: m,
            fallbackFormat: _,
            unresolving: !0,
            postTranslation: null === y ? void 0 : y,
            warnHtmlMessage: b,
            escapeParameter: w,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            }
        };
        t.datetimeFormats = c.value, t.numberFormats = d.value, t.__datetimeFormatters = vd(k) ? k.__datetimeFormatters : void 0, t.__numberFormatters = vd(k) ? k.__numberFormatters : void 0, t.__v_emitter = vd(k) ? k.__v_emitter : void 0;
        const a = sp(t);
        return l && ip(a), a
    })(), dp(k, o.value, s.value);
    const D = u({
            get: () => o.value,
            set: e => {
                o.value = e, k.locale = o.value
            }
        }),
        I = u({
            get: () => s.value,
            set: e => {
                s.value = e, k.fallbackLocale = s.value, dp(k, o.value, e)
            }
        }),
        O = u((() => r.value)),
        z = u((() => c.value)),
        T = u((() => d.value));
    const A = (e, t, n, i, u, _) => {
        let v;
        o.value, s.value, r.value, c.value, d.value;
        try {
            lp((() => {
                const e = j();
                let t = null;
                return e && (t = dm(e).__INTLIFY_META__) ? {
                    __INTLIFY_META__: t
                } : null
            })()), l || (k.fallbackContext = a ? np : void 0), v = e(k)
        } finally {
            lp(null), l || (k.fallbackContext = void 0)
        }
        if (Zu(v) && -1 === v) {
            const [e, l] = t();
            if (a && dd(e) && (g = l, "translate" !== n || !g.resolvedMessage)) {
                f && (rp(m, e) || cp(p, e)) && ad(Gp(Bp.FALLBACK_TO_ROOT, {
                    key: e,
                    type: n
                })); {
                    const {
                        __v_emitter: t
                    } = k;
                    t && f && t.emit("fallback", {
                        type: n,
                        key: e,
                        to: "global",
                        groupId: `${n}:${e}`
                    })
                }
            }
            return a && f ? i(a) : u(e)
        }
        if (_(v)) return v;
        throw Kp(Jp.UNEXPECTED_RETURN_TYPE);
        var g
    };

    function L(...e) {
        return A((t => Reflect.apply(yp, null, [t, ...e])), (() => xp(...e)), "translate", (t => Reflect.apply(t.t, t, [...e])), (e => e), (e => dd(e)))
    }
    const P = {
        normalize: function(e) {
            return e.map((e => dd(e) || Zu(e) || pd(e) ? pm(String(e)) : e))
        },
        interpolate: e => e,
        type: "vnode"
    };

    function C(e) {
        return r.value[e] || {}
    }
    mm++, a && Wu && (i(a.locale, (e => {
        n && (o.value = e, k.locale = e, dp(k, o.value, s.value))
    })), i(a.fallbackLocale, (e => {
        n && (s.value = e, k.fallbackLocale = e, dp(k, o.value, s.value))
    })));
    const S = {
        id: mm,
        locale: D,
        fallbackLocale: I,
        get inheritLocale() {
            return n
        },
        set inheritLocale(e) {
            n = e, e && a && (o.value = a.locale.value, s.value = a.fallbackLocale.value, dp(k, o.value, s.value))
        },
        get availableLocales() {
            return Object.keys(r.value).sort()
        },
        messages: O,
        get modifiers() {
            return x
        },
        get pluralRules() {
            return E || {}
        },
        get isGlobal() {
            return l
        },
        get missingWarn() {
            return p
        },
        set missingWarn(e) {
            p = e, k.missingWarn = p
        },
        get fallbackWarn() {
            return m
        },
        set fallbackWarn(e) {
            m = e, k.fallbackWarn = m
        },
        get fallbackRoot() {
            return f
        },
        set fallbackRoot(e) {
            f = e
        },
        get fallbackFormat() {
            return _
        },
        set fallbackFormat(e) {
            _ = e, k.fallbackFormat = _
        },
        get warnHtmlMessage() {
            return b
        },
        set warnHtmlMessage(e) {
            b = e, k.warnHtmlMessage = e
        },
        get escapeParameter() {
            return w
        },
        set escapeParameter(e) {
            w = e, k.escapeParameter = e
        },
        t: L,
        getLocaleMessage: C,
        setLocaleMessage: function(e, t) {
            r.value[e] = t, k.messages = r.value
        },
        mergeLocaleMessage: function(e, t) {
            r.value[e] = r.value[e] || {}, um(t, r.value[e]), k.messages = r.value
        },
        getPostTranslationHandler: function() {
            return ud(y) ? y : null
        },
        setPostTranslationHandler: function(e) {
            y = e, k.postTranslation = e
        },
        getMissingHandler: function() {
            return v
        },
        setMissingHandler: function(e) {
            null !== e && (h = fm(e)), v = e, k.missing = h
        },
        [im]: function(e) {
            E = e, k.pluralRules = E
        }
    };
    return S.datetimeFormats = z, S.numberFormats = T, S.rt = function(...e) {
        const [t, a, l] = e;
        if (l && !md(l)) throw Kp(Jp.INVALID_ARGUMENT);
        return L(t, a, ld({
            resolvedMessage: !0
        }, l || {}))
    }, S.te = function(e, t) {
        const a = C(dd(t) ? t : o.value);
        return null !== k.messageResolver(a, e)
    }, S.tm = function(e) {
        const t = function(e) {
            let t = null;
            const a = Gd(k, s.value, o.value);
            for (let l = 0; l < a.length; l++) {
                const n = r.value[a[l]] || {},
                    i = k.messageResolver(n, e);
                if (null != i) {
                    t = i;
                    break
                }
            }
            return t
        }(e);
        return null != t ? t : a && a.tm(e) || {}
    }, S.d = function(...e) {
        return A((t => Reflect.apply(Ip, null, [t, ...e])), (() => zp(...e)), "datetime format", (t => Reflect.apply(t.d, t, [...e])), (() => ""), (e => dd(e)))
    }, S.n = function(...e) {
        return A((t => Reflect.apply(Ap, null, [t, ...e])), (() => Pp(...e)), "number format", (t => Reflect.apply(t.n, t, [...e])), (() => ""), (e => dd(e)))
    }, S.getDateTimeFormat = function(e) {
        return c.value[e] || {}
    }, S.setDateTimeFormat = function(e, t) {
        c.value[e] = t, k.datetimeFormats = c.value, Tp(k, e, t)
    }, S.mergeDateTimeFormat = function(e, t) {
        c.value[e] = ld(c.value[e] || {}, t), k.datetimeFormats = c.value, Tp(k, e, t)
    }, S.getNumberFormat = function(e) {
        return d.value[e] || {}
    }, S.setNumberFormat = function(e, t) {
        d.value[e] = t, k.numberFormats = d.value, Cp(k, e, t)
    }, S.mergeNumberFormat = function(e, t) {
        d.value[e] = ld(d.value[e] || {}, t), k.numberFormats = d.value, Cp(k, e, t)
    }, S[om] = e.__injectWithOption, S[em] = function(...e) {
        return A((t => {
            let a;
            const l = t;
            try {
                l.processor = P, a = Reflect.apply(yp, null, [l, ...e])
            } finally {
                l.processor = null
            }
            return a
        }), (() => xp(...e)), "translate", (t => t[em](...e)), (e => [pm(e)]), (e => cd(e)))
    }, S[tm] = function(...e) {
        return A((t => Reflect.apply(Ip, null, [t, ...e])), (() => zp(...e)), "datetime format", (t => t[tm](...e)), (() => []), (e => dd(e) || cd(e)))
    }, S[am] = function(...e) {
        return A((t => Reflect.apply(Ap, null, [t, ...e])), (() => Pp(...e)), "number format", (t => t[am](...e)), (() => []), (e => dd(e) || cd(e)))
    }, S[lm] = e => {
        k.__v_emitter = e
    }, S[nm] = () => {
        k.__v_emitter = void 0
    }, S
}
const vm = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => "parent" === e || "global" === e,
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function gm(e) {
    return F
}
const hm = {
    name: "i18n-t",
    props: ld({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => Zu(e) || !isNaN(e)
        }
    }, vm),
    setup(e, t) {
        const {
            slots: a,
            attrs: l
        } = t, n = e.i18n || jm({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const i = Object.keys(a).filter((e => "_" !== e)),
                o = {};
            e.locale && (o.locale = e.locale), void 0 !== e.plural && (o.plural = dd(e.plural) ? +e.plural : e.plural);
            const s = function({
                    slots: e
                }, t) {
                    if (1 === t.length && "default" === t[0]) return (e.default ? e.default() : []).reduce(((e, t) => [...e, ...cd(t.children) ? t.children : [t]]), []);
                    return t.reduce(((t, a) => {
                        const l = e[a];
                        return l && (t[a] = l()), t
                    }), {})
                }(t, i),
                r = n[em](e.keypath, s, o),
                c = ld({}, l),
                u = dd(e.tag) || md(e.tag) ? e.tag : gm();
            return W(u, c, r)
        }
    }
};

function ym(e, t, a, l) {
    const {
        slots: n,
        attrs: i
    } = t;
    return () => {
        const t = {
            part: !0
        };
        let o = {};
        e.locale && (t.locale = e.locale), dd(e.format) ? t.key = e.format : md(e.format) && (dd(e.format.key) && (t.key = e.format.key), o = Object.keys(e.format).reduce(((t, l) => a.includes(l) ? ld({}, t, {
            [l]: e.format[l]
        }) : t), {}));
        const s = l(e.value, t, o);
        let r = [t.key];
        cd(s) ? r = s.map(((e, t) => {
            const a = n[e.type],
                l = a ? a({
                    [e.type]: e.value,
                    index: t,
                    parts: s
                }) : [e.value];
            var i;
            return cd(i = l) && !dd(i[0]) && (l[0].key = `${e.type}-${t}`), l
        })) : dd(s) && (r = [s]);
        const c = ld({}, i),
            u = dd(e.tag) || md(e.tag) ? e.tag : gm();
        return W(u, c, r)
    }
}
const bm = {
        name: "i18n-n",
        props: ld({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, vm),
        setup(e, t) {
            const a = e.i18n || jm({
                useScope: "parent",
                __useComponent: !0
            });
            return ym(e, t, Lp, ((...e) => a[am](...e)))
        }
    },
    wm = {
        name: "i18n-d",
        props: ld({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, vm),
        setup(e, t) {
            const a = e.i18n || jm({
                useScope: "parent",
                __useComponent: !0
            });
            return ym(e, t, Op, ((...e) => a[tm](...e)))
        }
    };

function xm(e) {
    if (dd(e)) return {
        path: e
    };
    if (vd(e)) {
        if (!("path" in e)) throw Kp(Jp.REQUIRED_VALUE, "path");
        return e
    }
    throw Kp(Jp.INVALID_VALUE)
}

function km(e) {
    const {
        path: t,
        locale: a,
        args: l,
        choice: n,
        plural: i
    } = e, o = {}, s = l || {};
    return dd(a) && (o.locale = a), Zu(n) && (o.plural = n), Zu(i) && (o.plural = i), [t, s, o]
}

function Em(e, t, ...a) {
    const l = vd(a[0]) ? a[0] : {},
        n = !!l.useI18nComponentName,
        o = !pd(l.globalInstall) || l.globalInstall;
    o && n && ad(Gp(Bp.COMPONENT_NAME_LEGACY_COMPATIBLE, {
        name: hm.name
    })), o && (e.component(n ? "i18n" : hm.name, hm), e.component(bm.name, bm), e.component(wm.name, wm)), e.directive("t", function(e) {
        const t = t => {
            const {
                instance: a,
                modifiers: l,
                value: n
            } = t;
            if (!a || !a.$) throw Kp(Jp.UNEXPECTED_ERROR);
            const i = function(e, t) {
                const a = e;
                if ("composition" === e.mode) return a.__getInstance(t) || e.global; {
                    const l = a.__getInstance(t);
                    return null != l ? l.__composer : e.global.__composer
                }
            }(e, a.$);
            l.preserve && ad(Gp(Bp.NOT_SUPPORTED_PRESERVE));
            const o = xm(n);
            return [Reflect.apply(i.t, i, [...km(o)]), i]
        };
        return {
            created: (a, l) => {
                const [n, o] = t(l);
                Wu && e.global === o && (a.__i18nWatcher = i(o.locale, (() => {
                    l.instance && l.instance.$forceUpdate()
                }))), a.__composer = o, a.textContent = n
            },
            unmounted: e => {
                Wu && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer)
            },
            beforeUpdate: (e, {
                value: t
            }) => {
                if (e.__composer) {
                    const a = e.__composer,
                        l = xm(t);
                    e.textContent = Reflect.apply(a.t, a, [...km(l)])
                }
            },
            getSSRProps: e => {
                const [a] = t(e);
                return {
                    textContent: a
                }
            }
        }
    }(t))
}
let Dm;
async function Im(e, t) {
    return new Promise(((a, l) => {
        try {
            $p({
                id: "vue-devtools-plugin-vue-i18n",
                label: Fp["vue-devtools-plugin-vue-i18n"],
                packageName: "vue-i18n",
                homepage: "https://vue-i18n.intlify.dev",
                logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
                componentStateTypes: ["vue-i18n: composer properties"],
                app: e
            }, (l => {
                Dm = l, l.on.visitComponentTree((({
                    componentInstance: e,
                    treeNode: a
                }) => {
                    ! function(e, t, a) {
                        const l = "composition" === a.mode ? a.global : a.global.__composer;
                        if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== l) {
                            const a = {
                                label: `i18n (${Om(e)} Scope)`,
                                textColor: 0,
                                backgroundColor: 16764185
                            };
                            t.tags.push(a)
                        }
                    }(e, a, t)
                })), l.on.inspectComponent((({
                    componentInstance: e,
                    instanceData: a
                }) => {
                    e.vnode.el && e.vnode.el.__VUE_I18N__ && a && ("legacy" === t.mode ? e.vnode.el.__VUE_I18N__ !== t.global.__composer && zm(a, e.vnode.el.__VUE_I18N__) : zm(a, e.vnode.el.__VUE_I18N__))
                })), l.addInspector({
                    id: "vue-i18n-resource-inspector",
                    label: Fp["vue-i18n-resource-inspector"],
                    icon: "language",
                    treeFilterPlaceholder: Yp["vue-i18n-resource-inspector"]
                }), l.on.getInspectorTree((a => {
                    a.app === e && "vue-i18n-resource-inspector" === a.inspectorId && function(e, t) {
                        e.rootNodes.push({
                            id: "global",
                            label: "Global Scope"
                        });
                        const a = "composition" === t.mode ? t.global : t.global.__composer;
                        for (const [l, n] of t.__instances) {
                            const i = "composition" === t.mode ? n : n.__composer;
                            a !== i && e.rootNodes.push({
                                id: i.id.toString(),
                                label: `${Om(l)} Scope`
                            })
                        }
                    }(a, t)
                }));
                const n = new Map;
                l.on.getInspectorState((async a => {
                    if (a.app === e && "vue-i18n-resource-inspector" === a.inspectorId)
                        if (l.unhighlightElement(), function(e, t) {
                                const a = Cm(e.nodeId, t);
                                a && (e.state = function(e) {
                                    const t = {},
                                        a = "Locale related info",
                                        l = [{
                                            type: a,
                                            key: "locale",
                                            editable: !0,
                                            value: e.locale.value
                                        }, {
                                            type: a,
                                            key: "fallbackLocale",
                                            editable: !0,
                                            value: e.fallbackLocale.value
                                        }, {
                                            type: a,
                                            key: "availableLocales",
                                            editable: !1,
                                            value: e.availableLocales
                                        }, {
                                            type: a,
                                            key: "inheritLocale",
                                            editable: !0,
                                            value: e.inheritLocale
                                        }];
                                    t[a] = l;
                                    const n = "Locale messages info",
                                        i = [{
                                            type: n,
                                            key: "messages",
                                            editable: !1,
                                            value: Tm(e.messages.value)
                                        }];
                                    t[n] = i; {
                                        const a = "Datetime formats info",
                                            l = [{
                                                type: a,
                                                key: "datetimeFormats",
                                                editable: !1,
                                                value: e.datetimeFormats.value
                                            }];
                                        t[a] = l;
                                        const n = "Datetime formats info",
                                            i = [{
                                                type: n,
                                                key: "numberFormats",
                                                editable: !1,
                                                value: e.numberFormats.value
                                            }];
                                        t[n] = i
                                    }
                                    return t
                                }(a))
                            }(a, t), "global" === a.nodeId) {
                            if (!n.has(a.app)) {
                                const [e] = await l.getComponentInstances(a.app);
                                n.set(a.app, e)
                            }
                            l.highlightElement(n.get(a.app))
                        } else {
                            const e = function(e, t) {
                                let a = null;
                                if ("global" !== e)
                                    for (const [l, n] of t.__instances.entries())
                                        if (n.id.toString() === e) {
                                            a = l;
                                            break
                                        }
                                return a
                            }(a.nodeId, t);
                            e && l.highlightElement(e)
                        }
                })), l.on.editInspectorState((a => {
                    a.app === e && "vue-i18n-resource-inspector" === a.inspectorId && function(e, t) {
                        const a = Cm(e.nodeId, t);
                        if (a) {
                            const [t] = e.path;
                            "locale" === t && dd(e.state.value) ? a.locale.value = e.state.value : "fallbackLocale" === t && (dd(e.state.value) || cd(e.state.value) || md(e.state.value)) ? a.fallbackLocale.value = e.state.value : "inheritLocale" === t && pd(e.state.value) && (a.inheritLocale = e.state.value)
                        }
                    }(a, t)
                })), l.addTimelineLayer({
                    id: "vue-i18n-timeline",
                    label: Fp["vue-i18n-timeline"],
                    color: Hp["vue-i18n-timeline"]
                }), a(!0)
            }))
        } catch (Ll) {
            console.error(Ll), l(!1)
        }
    }))
}

function Om(e) {
    return e.type.name || e.type.displayName || e.type.__file || "Anonymous"
}

function zm(e, t) {
    const a = "vue-i18n: composer properties";
    e.state.push({
        type: a,
        key: "locale",
        editable: !0,
        value: t.locale.value
    }), e.state.push({
        type: a,
        key: "availableLocales",
        editable: !1,
        value: t.availableLocales
    }), e.state.push({
        type: a,
        key: "fallbackLocale",
        editable: !0,
        value: t.fallbackLocale.value
    }), e.state.push({
        type: a,
        key: "inheritLocale",
        editable: !0,
        value: t.inheritLocale
    }), e.state.push({
        type: a,
        key: "messages",
        editable: !1,
        value: Tm(t.messages.value)
    }), e.state.push({
        type: a,
        key: "datetimeFormats",
        editable: !1,
        value: t.datetimeFormats.value
    }), e.state.push({
        type: a,
        key: "numberFormats",
        editable: !1,
        value: t.numberFormats.value
    })
}

function Tm(e) {
    const t = {};
    return Object.keys(e).forEach((a => {
        const l = e[a];
        var n;
        ud(l) && "source" in l ? t[a] = {
            _custom: {
                type: "function",
                display: "<span>ƒ</span> " + ((n = l).source ? `("${Lm(n.source)}")` : "(?)")
            }
        } : md(l) ? t[a] = Tm(l) : t[a] = l
    })), t
}
const Am = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
};

function Lm(e) {
    return e.replace(/[<>"&]/g, Pm)
}

function Pm(e) {
    return Am[e] || e
}

function Cm(e, t) {
    if ("global" === e) return "composition" === t.mode ? t.global : t.global.__composer; {
        const a = Array.from(t.__instances.values()).find((t => t.id.toString() === e));
        return a ? "composition" === t.mode ? a : a.__composer : null
    }
}

function Sm(e, t) {
    if (Dm) {
        let a;
        t && "groupId" in t && (a = t.groupId, delete t.groupId), Dm.addTimelineEvent({
            layerId: "vue-i18n-timeline",
            event: {
                title: e,
                groupId: a,
                time: Date.now(),
                meta: {},
                data: t || {},
                logType: "compile-error" === e ? "error" : "fallback" === e || "missing" === e ? "warning" : "default"
            }
        })
    }
}
const Rm = Ju("global-vue-i18n");

function jm(e = {}) {
    const t = j();
    if (null == t) throw Kp(Jp.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && null != t.appContext.app && !t.appContext.app.__VUE_I18N_SYMBOL__) throw Kp(Jp.NOT_INSLALLED);
    const a = function(e) {
            {
                const t = ce(e.isCE ? Rm : e.appContext.app.__VUE_I18N_SYMBOL__);
                if (!t) throw Kp(e.isCE ? Jp.NOT_INSLALLED_WITH_PROVIDE : Jp.UNEXPECTED_ERROR);
                return t
            }
        }(t),
        l = function(e) {
            return "composition" === e.mode ? e.global : e.global.__composer
        }(a),
        n = dm(t),
        i = function(e, t) {
            return td(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
        }(e, n);
    if ("global" === i) return function(e, t, a) {
        let l = md(t.messages) ? t.messages : {};
        "__i18nGlobal" in a && (l = rm(e.locale.value, {
            messages: l,
            __i18n: a.__i18nGlobal
        }));
        const n = Object.keys(l);
        if (n.length && n.forEach((t => {
                e.mergeLocaleMessage(t, l[t])
            })), md(t.datetimeFormats)) {
            const a = Object.keys(t.datetimeFormats);
            a.length && a.forEach((a => {
                e.mergeDateTimeFormat(a, t.datetimeFormats[a])
            }))
        }
        if (md(t.numberFormats)) {
            const a = Object.keys(t.numberFormats);
            a.length && a.forEach((a => {
                e.mergeNumberFormat(a, t.numberFormats[a])
            }))
        }
    }(l, e, n), l;
    if ("parent" === i) {
        let n = function(e, t, a = !1) {
            let l = null;
            const n = t.root;
            let i = t.parent;
            for (; null != i;) {
                const t = e;
                if ("composition" === e.mode && (l = t.__getInstance(i)), null != l) break;
                if (n === i) break;
                i = i.parent
            }
            return l
        }(a, t, e.__useComponent);
        return null == n && (ad(Gp(Bp.NOT_FOUND_PARENT_SCOPE)), n = l), n
    }
    const o = a;
    let s = o.__getInstance(t);
    if (null == s) {
        const a = ld({}, e);
        "__i18n" in n && (a.__i18n = n.__i18n), l && (a.__root = l), s = _m(a),
            function(e, t, a) {
                let l = null;
                G((() => {
                    if (t.vnode.el) {
                        t.vnode.el.__VUE_I18N__ = a, l = gd();
                        const e = a;
                        e[lm] && e[lm](l), l.on("*", Sm)
                    }
                }), t), X((() => {
                    if (t.vnode.el && t.vnode.el.__VUE_I18N__) {
                        l && l.off("*", Sm);
                        const e = a;
                        e[nm] && e[nm](), delete t.vnode.el.__VUE_I18N__
                    }
                    e.__deleteInstance(t)
                }), t)
            }(o, t, s), o.__setInstance(t, s)
    }
    return s
}
const Mm = ["locale", "fallbackLocale", "availableLocales"],
    Vm = ["t", "rt", "d", "n", "tm"];
var Nm;
ep = function(e, t) {
    if (!md(e)) return null;
    let a = Od.get(t);
    if (a || (a = function(e) {
            const t = [];
            let a, l, n, i, o, s, r, c = -1,
                u = 0,
                d = 0;
            const p = [];

            function m() {
                const t = e[c + 1];
                if (5 === u && "'" === t || 6 === u && '"' === t) return c++, n = "\\" + t, p[0](), !0
            }
            for (p[0] = () => {
                    void 0 === l ? l = n : l += n
                }, p[1] = () => {
                    void 0 !== l && (t.push(l), l = void 0)
                }, p[2] = () => {
                    p[0](), d++
                }, p[3] = () => {
                    if (d > 0) d--, u = 4, p[0]();
                    else {
                        if (d = 0, void 0 === l) return !1;
                        if (l = Id(l), !1 === l) return !1;
                        p[1]()
                    }
                }; null !== u;)
                if (c++, a = e[c], "\\" !== a || !m()) {
                    if (i = Dd(a), r = kd[u], o = r[i] || r.l || 8, 8 === o) return;
                    if (u = o[0], void 0 !== o[1] && (s = p[o[1]], s && (n = a, !1 === s()))) return;
                    if (7 === u) return t
                }
        }(t), a && Od.set(t, a)), !a) return null;
    const l = a.length;
    let n = e,
        i = 0;
    for (; i < l;) {
        const e = n[a[i]];
        if (void 0 === e) return null;
        n = e, i++
    }
    return n
}, tp = Gd, "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (id().__INTLIFY_PROD_DEVTOOLS__ = !1); {
    const e = id();
    e.__INTLIFY__ = !0, Nm = e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__, Rd = Nm
}
const $m = function(e = {}, t) {
    const a = !pd(e.globalInjection) || e.globalInjection,
        l = new Map,
        [n, i] = function(e, t, a) {
            const l = re(); {
                const t = l.run((() => _m(e)));
                if (null == t) throw Kp(Jp.UNEXPECTED_ERROR);
                return [l, t]
            }
        }(e),
        o = Ju("vue-i18n"); {
        const e = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return true
            },
            async install(t, ...l) {
                t.__VUE_I18N__ = e, t.__VUE_I18N_SYMBOL__ = o, t.provide(t.__VUE_I18N_SYMBOL__, e), a && function(e, t) {
                    const a = Object.create(null);
                    Mm.forEach((e => {
                        const l = Object.getOwnPropertyDescriptor(t, e);
                        if (!l) throw Kp(Jp.UNEXPECTED_ERROR);
                        const n = ue(l.value) ? {
                            get: () => l.value.value,
                            set(e) {
                                l.value.value = e
                            }
                        } : {
                            get: () => l.get && l.get()
                        };
                        Object.defineProperty(a, e, n)
                    })), e.config.globalProperties.$i18n = a, Vm.forEach((a => {
                        const l = Object.getOwnPropertyDescriptor(t, a);
                        if (!l || !l.value) throw Kp(Jp.UNEXPECTED_ERROR);
                        Object.defineProperty(e.config.globalProperties, `$${a}`, l)
                    }))
                }(t, e.global), Em(t, e, ...l);
                const n = t.unmount;
                t.unmount = () => {
                    e.dispose(), n()
                }; {
                    if (!(await Im(t, e))) throw Kp(Jp.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
                    const a = gd(); {
                        const e = i;
                        e[lm] && e[lm](a)
                    }
                    a.on("*", Sm)
                }
            },
            get global() {
                return i
            },
            dispose() {
                n.stop()
            },
            __instances: l,
            __getInstance: function(e) {
                return l.get(e) || null
            },
            __setInstance: function(e, t) {
                l.set(e, t)
            },
            __deleteInstance: function(e) {
                l.delete(e)
            }
        };
        return e
    }
}({
    locale: "zh"
});
!async function(e) {
    const t = await nt(Object.assign({
        "./messages/de.json": () => s((() =>
                import ("./de.ec7ad64c.js")), [],
            import.meta.url),
        "./messages/zh.json": () => s((() =>
                import ("./zh.65b14249.js")), [],
            import.meta.url)
    }), `./messages/${e}.json`);
    $m.global.setLocaleMessage(e, t.default)
}("zh");
const Fm = pe(Jt);
(e => {
    if ("simple" == Hu) return;
    (Yu[0] && Yu[0].children || []).forEach((e => {
        if (e && "component" == e.type) {
            let t = e.config && e.config.icon || "",
                a = `${e.component}-icon${t}`;
            Uu.push(a)
        }
    }));
    const t = Object.assign({
        "./app/bookmarks/icon/icon.vue": Fa,
        "./app/calendar/icon/icon.vue": dl,
        "./app/clock/icon/icon.vue": Al,
        "./app/countdown/icon/icon.vue": sn,
        "./app/daysMatter/icon/icon.vue": Dn,
        "./app/daysMatter/icon/icon2.vue": jn,
        "./app/daysMatter/icon/icon3.vue": ti,
        "./app/eat/icon/icon.vue": si,
        "./app/habit/icon/icon.vue": Si,
        "./app/ip/icon/icon.vue": Mi,
        "./app/jikipedia/icon/icon.vue": Wi,
        "./app/laborer11/icon/icon.vue": Ki,
        "./app/lusun/icon/icon.vue": lo,
        "./app/movieCalendar/icon/icon.vue": Uo,
        "./app/multiavatar/icon/icon.vue": qo,
        "./app/notes/icon/icon.vue": Zo,
        "./app/remai/icon/icon.vue": ss,
        "./app/sport/icon/icon.vue": ws,
        "./app/stock/icon/icon.vue": Ps,
        "./app/todayEnglish/icon/icon.vue": Hs,
        "./app/todayShici/icon/icon.vue": lr,
        "./app/todo/icon/icon.vue": dr,
        "./app/topsearch/icon/icon.vue": xr,
        "./app/uppercase/icon/icon.vue": Dr,
        "./app/vgn/icon/icon.vue": Br,
        "./app/wallpaper/icon/icon.vue": Qr,
        "./app/weather/icon/icon.vue": Yc,
        "./app/worldClock/icon/icon.vue": eu,
        "./app/xiayigejiaqi/icon/icon.vue": ku,
        "./app/xyzrank/icon/icon.vue": Su,
        "./app/yiyan/icon/icon.vue": Fu
    });
    Object.keys(t).map((a => {
        let l = a.replace(/[^\d]/g, ""),
            n = `${a.split("/")[2]}-icon${l}`,
            i = t[a].default;
        Uu.includes(n) && e.component(n, i)
    }))
})(Fm), Fm.use(Va), s((() =>
        import ("./pwa.f31090eb.js")), ["./pwa.f31090eb.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
    import.meta.url), s((() => Promise.resolve({})), ["./element-plus.3dfc0062.css"],
    import.meta.url), s((() => Promise.resolve({})), ["./common.44d12874.css"],
    import.meta.url), s((() => Promise.resolve({})), ["./animate.5fcc932e.css"],
    import.meta.url), Fm.use($m), Fm.config.errorHandler = (e, t, a) => {
    console.error(e), s((() =>
            import ("./baseApi.fc01bad0.js")), ["./baseApi.fc01bad0.js", "./baseRequest.b881af11.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./axios.91e25212.js", "./version.8d34b113.js"],
        import.meta.url).then((async a => {
        let {
            browserName: l
        } = await s((() => Promise.resolve().then((() => we))), void 0,
            import.meta.url);
        a.apiWechatRobot({
            origin: `${l()}，${window.location.origin}`,
            err: e.message,
            info: `vmName:${t._.type.name},info,`
        }).then((e => {
            let t = e.data || {};
            t.code && s((() =>
                    import ("./versionNotice.ea178545.js")), ["./versionNotice.ea178545.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
                import.meta.url).then((e => {
                e.default({
                    modelValue: !0,
                    title: "通知",
                    center: !0
                }, t.content)
            }))
        }))
    }))
}, setTimeout((() => {
    s((() =>
            import ("./init.9b24bee1.js")), ["./init.9b24bee1.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css"],
        import.meta.url);
    let e = (new Date).getTime() - new Date("2021-10-12");
    console.log("%c路有多远，\n只有心知道，\n最美的旅程，\n是不断的经历，\n坚持走下去．\n我是iTab开发者,\n与您同行！", "line-height:22px;color:#00a5f2"), console.log(`%ciTab已上线%c ${~~(e/864e5)} 天`, "line-height:22px;", "line-height:22px;"), console.log("%c官网%chttps://itab.link", "line-height:22px; background-color:#555", "line-height:22px;background-color:#007ec6")
})), Fm.mount("#app");
export {
    lt as $, lo as A, Uo as B, Tt as C, Pt as D, qo as E, Zo as F, ss as G, ws as H, Ps as I, Hs as J, lr as K, Ft as L, dr as M, xr as N, Dr as O, ya as P, Br as Q, Qr as R, Ca as S, Yc as T, eu as U, ku as V, Su as W, Fu as X, ct as Y, tc as Z, nt as _, it as a, he as a0, Ce as a1, _a as a2, oa as a3, xe as a4, Rl as a5, ii as a6, Ci as a7, Rt as a8, Vt as a9, Qs as aa, Ir as ab, ua as ac, Zr as ad, Ea as ae, ba as af, Je as b, at as c, be as d, Qe as e, Ke as f, ye as g, Ie as h, ge as i, kt as j, Ge as k, Fa as l, dl as m, Al as n, tt as o, sn as p, Dn as q, jn as r, Ze as s, ti as t, jm as u, si as v, Si as w, Mi as x, Wi as y, Ki as z
};