import {
    a as t,
    o as e,
    b as i,
    u as a,
    z as s,
    w as o,
    ad as r,
    W as n,
    t as l,
    J as d,
    h as p,
    x as m,
    C as c,
    j as u,
    k as f,
    i as _,
    b1 as b,
    D as g,
    f as j,
    _ as v,
    A as h,
    B as C
} from "./el-select.e274bb48.js";
import {
    u as x,
    b as y,
    a as w,
    _ as k
} from "./main.354a692e.js";
import {
    D as E
} from "./d-tabs.dd73b910.js";
import {
    a as L
} from "./itab.eac3c33d.js"; /* empty css                  */
import {
    E as D
} from "./el-drawer.85167f95.js"; /* empty css                   */
import {
    u as F
} from "./baseRequest.b881af11.js";
import {
    v as V
} from "./version.8d34b113.js";
import {
    c as I
} from "./create_login.994910cf.js";
import {
    ElButton as P
} from "./index.534437f3.js";
import O from "./Close.c9346f3b.js";
import "./index.4e5ff846.js";
import "./el-dialog.c73078d2.js";
import "./index.176a125e.js";
import "./index.0e1148e8.js";
import "./style.d69d81d7.js";
import "./isObject.a01dee34.js";
import "./icon.8b835c88.js";
import "./index.14b43c35.js";
import "./focus-trap.e600e472.js";
import "./aria.66f3f71c.js";
import "./index.7c0d977d.js";
import "./index.ca3d31b2.js";
import "./scroll.4972bdba.js";
import "./axios.91e25212.js";
import "./el-form-item.912e2c38.js";
import "./index.8720847e.js";
import "./_baseClone.1ae22030.js";
import "./_Uint8Array.82d4fc05.js";
import "./_arrayPush.949d1e07.js";
import "./_initCloneObject.91168f35.js";
import "./el-radio.74b38810.js";
import "./index.d235e992.js";
import "./index.ed6e81ca.js";
import "./d-button.975b01f4.js";
import "./public-api.6a0debad.js";
import "./website.2111b3d7.js";
import "./index.466a8266.js"; /* empty css                */
import "./indexdb.a2b9d265.js";
import "./localforage.2a1ae675.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
import "./save_config.cbe33c4d.js";
import "./debounce.abbfdaeb.js";
import "./index.72bec9e8.js";
import "./typescript.72bf8adc.js";
import "./index.c89b0165.js"; /* empty css                   */
import "./index.bd01dcfa.js";
import "./config-provider.35572354.js"; /* empty css                        */ /* empty css                       */
import "./Refresh.dd54cee1.js";
import "./index.7eda866d.js";
import "./throttle.0dfde511.js";
import "./position.8ddd1c03.js";
import "./index.47a56f13.js";
import "./validator.05a5fb38.js";
const T = {
    class: "d-sub mt20"
};
const A = t({}, [
        ["render", function(t, a) {
            return e(), i("div", T, "正在加载此功能...")
        }],
        ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/setting/loading.vue"]
    ]),
    R = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: A
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    B = [{
        name: "打开方式",
        p: "图标、搜索结果",
        id: "open"
    }, {
        name: "搜索栏",
        p: "搜索栏样式、翻译",
        id: "search"
    }, {
        name: "图标",
        p: "图标样式、图标间距、宽度",
        id: "icon"
    }, {
        name: "时间/日期",
        p: "时间显示内容、字体样式",
        id: "time"
    }, {
        name: "主题/壁纸",
        p: "深色模式、主题色",
        id: "wallpaper"
    }, {
        name: "布局",
        p: "极简模式、一言",
        id: "layout"
    }, {
        name: "侧边栏",
        p: "侧边栏位置、是否隐藏、宽度",
        id: "sidebar"
    }, {
        name: "备份与恢复",
        p: "数据保存至云端，享受多设备同步",
        id: "backup"
    }, {
        name: "重置设置",
        p: "恢复成默认设置",
        id: "reset"
    }, {
        name: "关于",
        p: "",
        id: "about"
    }],
    S = {
        name: "SidebarPanel",
        components: {
            DTabs: E,
            ElButton: P,
            ElDrawer: D,
            Close: O,
            Loading: A
        },
        setup() {
            const t = y,
                e = a(),
                i = F(),
                {
                    t: n
                } = x(),
                l = s({
                    tabsData: [{
                        label: n("add"),
                        icon: "plus"
                    }, {
                        label: n("me"),
                        icon: "user",
                        comp: "user"
                    }, {
                        label: n("setting"),
                        icon: "setting",
                        comp: "setting"
                    }],
                    menuList: B,
                    activeComp: { ...B[0]
                    },
                    isNewVersion: !1
                });
            return o((() => y.active), (t => {
                1 == t && (l.activeComp = {
                    name: "个人信息",
                    id: "account"
                })
            })), { ...r(l),
                tabClick: (t, e) => {
                    l.activeComp.name = t.name, l.activeComp.p = t.p, "account" === t.id ? l.activeComp.id = "account" : "about" === t.id && (L({
                        type: "update"
                    }).then((t => {
                        let e = V.split(".").join("");
                        l.isNewVersion = t.data && t.data > e
                    })), l.activeComp.p = `版本：${V}`)
                },
                ossImg: w,
                baseConfig: e,
                userInfo: i,
                settingShow: t,
                loginHandle: () => {
                    I("login")
                },
                asyncComponent: function() {
                    return j({
                        loader: () => k(Object.assign({
                            "./setting/about.vue": () => v((() =>
                                    import ("./about.f90a7223.js")), ["./about.f90a7223.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./main.354a692e.js", "./index.6190cf91.css", "./sponsor.db1f22da.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./index.534437f3.js", "./index.d235e992.js", "./index.8720847e.js", "./sponsor.0b32950e.css", "./el-overlay.f6b2674f.css", "./el-button.2cb60ae5.css", "./index.cdbb23f9.js", "./index.742e3cb2.js", "./about.52459531.css", "./el-popover.f80de2ca.css"],
                                import.meta.url),
                            "./setting/account.vue": () => v((() =>
                                    import ("./account.fe4a9b89.js")), ["./account.fe4a9b89.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./create_login.994910cf.js", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./el-form-item.912e2c38.js", "./index.8720847e.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./el-form-item.d10bb01f.css", "./el-radio.74b38810.js", "./index.d235e992.js", "./el-radio.94b07b0d.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./d-button.975b01f4.js", "./d-button.33d6ccf9.css", "./public-api.6a0debad.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./save_config.cbe33c4d.js", "./debounce.abbfdaeb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.534437f3.js", "./main.354a692e.js", "./index.6190cf91.css", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./Refresh.dd54cee1.js", "./index.7eda866d.js", "./throttle.0dfde511.js", "./position.8ddd1c03.js", "./index.47a56f13.js", "./validator.05a5fb38.js", "./create_login.656547e7.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css", "./el-message.a1d9903a.css", "./el-image-viewer.f74efbeb.css", "./el-message-box.d5ceed26.css", "./backup.01bcfb62.js", "./index.8ba13591.js", "./timeFormat.2ad7f500.js", "./el-upload.125a730c.js", "./el-progress.3a42d846.js", "./el-progress.1f9bfc72.css", "./el-upload.ae1d280e.css", "./el-checkbox.7cab41d0.js", "./hasIn.0ceeb413.js", "./flatten.65ace828.js", "./_baseFlatten.1b8a9a9c.js", "./_overRest.86a13aad.js", "./identity.737b3aaf.js", "./el-checkbox.aec27a4a.css", "./hisBackup.6b206e80.js", "./d-tabs-x.34b56210.js", "./d-tabs-x.39ed9562.css", "./index.77cf9a11.js", "./hisBackup.548c12df.css", "./el-loading.7c3a3a4a.css", "./backup.b4f31fe6.css", "./el-checkbox-group.987ef89c.css"],
                                import.meta.url),
                            "./setting/backup.vue": () => v((() =>
                                    import ("./backup.01bcfb62.js")), ["./backup.01bcfb62.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./index.8ba13591.js", "./timeFormat.2ad7f500.js", "./el-upload.125a730c.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./el-progress.3a42d846.js", "./el-progress.1f9bfc72.css", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./typescript.72bf8adc.js", "./index.14b43c35.js", "./index.8720847e.js", "./el-upload.ae1d280e.css", "./el-checkbox.7cab41d0.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./hasIn.0ceeb413.js", "./_arrayPush.949d1e07.js", "./flatten.65ace828.js", "./_baseFlatten.1b8a9a9c.js", "./_overRest.86a13aad.js", "./identity.737b3aaf.js", "./el-checkbox.aec27a4a.css", "./el-dialog.c73078d2.js", "./icon.8b835c88.js", "./index.7c0d977d.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./main.354a692e.js", "./index.6190cf91.css", "./create_login.994910cf.js", "./el-form-item.912e2c38.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_initCloneObject.91168f35.js", "./el-form-item.d10bb01f.css", "./el-radio.74b38810.js", "./el-radio.94b07b0d.css", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./d-button.975b01f4.js", "./d-button.33d6ccf9.css", "./public-api.6a0debad.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./save_config.cbe33c4d.js", "./debounce.abbfdaeb.js", "./index.72bec9e8.js", "./index.c89b0165.js", "./index.534437f3.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./Refresh.dd54cee1.js", "./index.7eda866d.js", "./throttle.0dfde511.js", "./position.8ddd1c03.js", "./index.47a56f13.js", "./validator.05a5fb38.js", "./create_login.656547e7.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css", "./el-message.a1d9903a.css", "./el-image-viewer.f74efbeb.css", "./el-message-box.d5ceed26.css", "./hisBackup.6b206e80.js", "./d-tabs-x.34b56210.js", "./d-tabs-x.39ed9562.css", "./index.77cf9a11.js", "./hisBackup.548c12df.css", "./el-loading.7c3a3a4a.css", "./backup.b4f31fe6.css", "./el-checkbox-group.987ef89c.css"],
                                import.meta.url),
                            "./setting/hisBackup.vue": () => v((() =>
                                    import ("./hisBackup.6b206e80.js")), ["./hisBackup.6b206e80.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./d-tabs-x.34b56210.js", "./d-tabs-x.39ed9562.css", "./timeFormat.2ad7f500.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./website.2111b3d7.js", "./index.466a8266.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./el-dialog.c73078d2.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./save_config.cbe33c4d.js", "./debounce.abbfdaeb.js", "./main.354a692e.js", "./index.6190cf91.css", "./index.47a56f13.js", "./index.534437f3.js", "./index.d235e992.js", "./index.8720847e.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./validator.05a5fb38.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./index.77cf9a11.js", "./hisBackup.548c12df.css", "./el-message-box.d5ceed26.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css", "./el-message.a1d9903a.css", "./el-loading.7c3a3a4a.css"],
                                import.meta.url),
                            "./setting/icon.vue": () => v((() =>
                                    import ("./icon.3ea8d182.js")), ["./icon.3ea8d182.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-slider.3662bca0.js", "./el-input-number.b7d676fb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.14b43c35.js", "./index.fc4c0c3e.js", "./el-input-number.643e34ac.css", "./el-tooltip.89296c46.js", "./index.742e3cb2.js", "./index.7c0d977d.js", "./d-slider.37e47760.css", "./d-color.0db1603d.js", "./index.534437f3.js", "./position.8ddd1c03.js", "./index.87f7d0e4.js", "./d-color.4e426ccc.css", "./el-button.2cb60ae5.css", "./d-radio.c91f2f8c.js", "./d-radio.fbed35df.css", "./main.354a692e.js", "./index.6190cf91.css", "./cloneDeep.3cbd3f2d.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./icon.77457eb3.css"],
                                import.meta.url),
                            "./setting/lang.vue": () => v((() =>
                                    import ("./lang.8a31e446.js")), ["./lang.8a31e446.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./main.354a692e.js", "./index.6190cf91.css", "./index.cb9f48ad.js", "./index.742e3cb2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./aria.66f3f71c.js", "./focus-trap.e600e472.js", "./index.8720847e.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./index.72bec9e8.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.d235e992.js", "./index.52524422.js", "./strings.e32d5a08.js", "./index.14b43c35.js", "./scroll.4972bdba.js", "./isEqual.296380c7.js", "./_baseIsEqual.cca7ad74.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./debounce.abbfdaeb.js", "./index.87f7d0e4.js", "./validator.05a5fb38.js", "./lang.ca5a1720.css"],
                                import.meta.url),
                            "./setting/layout.vue": () => v((() =>
                                    import ("./layout.5848236a.js")), ["./layout.5848236a.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-radio.c91f2f8c.js", "./d-radio.fbed35df.css", "./main.354a692e.js", "./index.6190cf91.css", "./layout.88dae80e.css"],
                                import.meta.url),
                            "./setting/loading.vue": () => v((() => Promise.resolve().then((() => R))), void 0,
                                import.meta.url),
                            "./setting/open.vue": () => v((() =>
                                    import ("./open.670c1833.js")), ["./open.670c1833.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css"],
                                import.meta.url),
                            "./setting/reset.vue": () => v((() =>
                                    import ("./reset.c55ed9b6.js")), ["./reset.c55ed9b6.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./cloneDeep.3cbd3f2d.js", "./_baseClone.1ae22030.js", "./_Uint8Array.82d4fc05.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./_arrayPush.949d1e07.js", "./_initCloneObject.91168f35.js", "./itab.eac3c33d.js", "./baseRequest.b881af11.js", "./axios.91e25212.js", "./version.8d34b113.js", "./main.354a692e.js", "./index.6190cf91.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./index.534437f3.js", "./index.176a125e.js", "./index.ca3d31b2.js", "./index.d235e992.js", "./index.8720847e.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./index.47a56f13.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.c89b0165.js", "./el-dialog.c73078d2.js", "./index.14b43c35.js", "./index.7c0d977d.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./validator.05a5fb38.js", "./el-message-box.d5ceed26.css", "./el-button.2cb60ae5.css", "./el-overlay.f6b2674f.css"],
                                import.meta.url),
                            "./setting/search.vue": () => v((() =>
                                    import ("./search.088318c0.js")), ["./search.088318c0.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./main.354a692e.js", "./index.6190cf91.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-slider.3662bca0.js", "./el-input-number.b7d676fb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.14b43c35.js", "./index.fc4c0c3e.js", "./el-input-number.643e34ac.css", "./el-tooltip.89296c46.js", "./index.742e3cb2.js", "./index.7c0d977d.js", "./d-slider.37e47760.css", "./index.534437f3.js", "./index.cb9f48ad.js", "./index.52524422.js", "./strings.e32d5a08.js", "./scroll.4972bdba.js", "./isEqual.296380c7.js", "./_baseIsEqual.cca7ad74.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./index.87f7d0e4.js", "./index.bd01dcfa.js", "./config-provider.35572354.js", "./el-button.2cb60ae5.css", "./el-message.a1d9903a.css"],
                                import.meta.url),
                            "./setting/sidebar.vue": () => v((() =>
                                    import ("./sidebar.ec3fb319.js")), ["./sidebar.ec3fb319.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-slider.3662bca0.js", "./el-input-number.b7d676fb.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./index.14b43c35.js", "./index.fc4c0c3e.js", "./el-input-number.643e34ac.css", "./el-tooltip.89296c46.js", "./index.742e3cb2.js", "./index.7c0d977d.js", "./d-slider.37e47760.css", "./main.354a692e.js", "./index.6190cf91.css", "./d-radio.c91f2f8c.js", "./d-radio.fbed35df.css", "./sidebar.6ff32bcb.css"],
                                import.meta.url),
                            "./setting/sponsor.vue": () => v((() =>
                                    import ("./sponsor.db1f22da.js")), ["./sponsor.db1f22da.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./el-dialog.c73078d2.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./icon.8b835c88.js", "./index.4e5ff846.js", "./index.14b43c35.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.7c0d977d.js", "./index.ca3d31b2.js", "./scroll.4972bdba.js", "./el-dialog.f4eb42cc.css", "./index.534437f3.js", "./index.d235e992.js", "./index.8720847e.js", "./sponsor.0b32950e.css", "./el-overlay.f6b2674f.css", "./el-button.2cb60ae5.css"],
                                import.meta.url),
                            "./setting/theme.vue": () => v((() =>
                                    import ("./theme.3b34c946.js")), ["./theme.3b34c946.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-color.0db1603d.js", "./index.534437f3.js", "./index.742e3cb2.js", "./index.7c0d977d.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./position.8ddd1c03.js", "./index.14b43c35.js", "./index.87f7d0e4.js", "./d-color.4e426ccc.css", "./el-button.2cb60ae5.css", "./main.354a692e.js", "./index.6190cf91.css", "./theme.aa405ed8.css"],
                                import.meta.url),
                            "./setting/time.vue": () => v((() =>
                                    import ("./time.944a7f30.js")), ["./time.944a7f30.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-color.0db1603d.js", "./index.534437f3.js", "./index.742e3cb2.js", "./index.7c0d977d.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./position.8ddd1c03.js", "./index.14b43c35.js", "./index.87f7d0e4.js", "./d-color.4e426ccc.css", "./el-button.2cb60ae5.css", "./d-slider.3662bca0.js", "./el-input-number.b7d676fb.js", "./index.fc4c0c3e.js", "./el-input-number.643e34ac.css", "./el-tooltip.89296c46.js", "./d-slider.37e47760.css", "./d-font-family.127a8e53.js", "./main.354a692e.js", "./index.6190cf91.css", "./index.cb9f48ad.js", "./index.52524422.js", "./strings.e32d5a08.js", "./scroll.4972bdba.js", "./isEqual.296380c7.js", "./_baseIsEqual.cca7ad74.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./time.22acd78f.css"],
                                import.meta.url),
                            "./setting/wallpaper.vue": () => v((() =>
                                    import ("./wallpaper.3a2b0557.js")), ["./wallpaper.3a2b0557.js", "./el-select.e274bb48.js", "./el-select.e009b2dc.css", "./d-switch.9f1bb591.js", "./el-switch.1d3ca0ca.js", "./index.176a125e.js", "./index.0e1148e8.js", "./style.d69d81d7.js", "./isObject.a01dee34.js", "./index.4e5ff846.js", "./icon.8b835c88.js", "./validator.05a5fb38.js", "./index.8720847e.js", "./focus-trap.e600e472.js", "./aria.66f3f71c.js", "./index.d235e992.js", "./index.ca3d31b2.js", "./el-switch.4d96cdcc.css", "./save_config.cbe33c4d.js", "./public-api.6a0debad.js", "./index.ed6e81ca.js", "./axios.91e25212.js", "./baseRequest.b881af11.js", "./version.8d34b113.js", "./website.2111b3d7.js", "./index.466a8266.js", "./Close.c9346f3b.js", "./index.c15ec867.css", "./el-icon.b1770749.css", "./indexdb.a2b9d265.js", "./localforage.2a1ae675.js", "./_commonjs-dynamic-modules.30ae7933.js", "./debounce.abbfdaeb.js", "./d-switch.8a9ea11a.css", "./d-color.0db1603d.js", "./index.534437f3.js", "./index.742e3cb2.js", "./index.7c0d977d.js", "./index.72bec9e8.js", "./typescript.72bf8adc.js", "./index.c89b0165.js", "./position.8ddd1c03.js", "./index.14b43c35.js", "./index.87f7d0e4.js", "./d-color.4e426ccc.css", "./el-button.2cb60ae5.css", "./d-slider.3662bca0.js", "./el-input-number.b7d676fb.js", "./index.fc4c0c3e.js", "./el-input-number.643e34ac.css", "./el-tooltip.89296c46.js", "./d-slider.37e47760.css", "./index.8ba13591.js", "./main.354a692e.js", "./index.6190cf91.css", "./index.7eda866d.js", "./throttle.0dfde511.js", "./scroll.4972bdba.js", "./index.cb9f48ad.js", "./index.52524422.js", "./strings.e32d5a08.js", "./isEqual.296380c7.js", "./_baseIsEqual.cca7ad74.js", "./_Uint8Array.82d4fc05.js", "./_arrayPush.949d1e07.js", "./wallpaper.a853638a.css", "./el-image-viewer.f74efbeb.css"],
                                import.meta.url)
                        }), `./setting/${l.activeComp.id}.vue`),
                        loadingComponent: A
                    })
                }
            }
        }
    },
    M = t => (h("data-v-02dfc663"), t = t(), C(), t),
    U = {
        class: "icon-roate d-icon f20",
        style: {
            color: "#fff"
        }
    },
    Z = {
        class: "setting-title"
    },
    z = {
        class: "d-main"
    },
    N = {
        class: "f12 d-sub mt5"
    },
    G = {
        key: 0,
        target: "_blank",
        href: "https://www.itab.link/",
        class: "setting-new-version"
    },
    $ = M((() => p("div", {
        class: "setting-logo"
    }, [p("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "125",
        height: "174.73046171248515",
        viewBox: "0 0 125 174.73046171248515",
        fill: "none"
    }, [p("defs", null, [p("rect", {
        id: "path_0",
        x: "0",
        y: "0",
        width: "125",
        height: "174.73046171248515"
    }), p("path", {
        id: "path_1",
        transform: "translate(0 0) rotate(0 50 50)",
        d: "M84,0L16,0C7.16,0 0,7.16 0,16L0,84C0,92.84 7.16,100 16,100L84,100C92.84,100 100,92.84 100,84L100,16C100,7.16 92.84,0 84,0Z"
    }), p("linearGradient", {
        id: "linear_0",
        x1: "-5000%",
        y1: "1870.27%",
        x2: "-4999%",
        y2: "3318.5499999999997%",
        gradientUnits: "objectBoundingBox"
    }, [p("stop", {
        offset: "0",
        "stop-color": "#FFFFFF",
        "stop-opacity": "1"
    }), p("stop", {
        offset: "1",
        "stop-color": "#FFFFFF",
        "stop-opacity": "1"
    })]), p("linearGradient", {
        id: "linear_1",
        x1: "73.08399999999999%",
        y1: "0%",
        x2: "74.08399999999999%",
        y2: "52.932%",
        gradientUnits: "objectBoundingBox"
    }, [p("stop", {
        offset: "0.25",
        "stop-color": "#FFFFFF",
        "stop-opacity": "1"
    }), p("stop", {
        offset: "1",
        "stop-color": "#D6D6D6",
        "stop-opacity": "1"
    })]), p("linearGradient", {
        id: "linear_2",
        x1: "50%",
        y1: "0%",
        x2: "51%",
        y2: "188.59%",
        gradientUnits: "objectBoundingBox"
    }, [p("stop", {
        offset: "0",
        "stop-color": "#FFFFFF",
        "stop-opacity": "1"
    }), p("stop", {
        offset: "1",
        "stop-color": "#99C9FF",
        "stop-opacity": "1"
    })])]), p("g", {
        opacity: "1",
        transform: "translate(0 0)  rotate(0 62.5 87.36523085624258)"
    }, [p("mask", {
        id: "bg-mask-0",
        fill: "white"
    }, [p("use", {
        "xlink:href": "#path_0"
    })]), p("g", {
        mask: "url(#bg-mask-0)"
    }, [p("g", {
        opacity: "1",
        transform: "translate(25 0)  rotate(0 50 50)"
    }, [p("mask", {
        id: "mask-1",
        fill: "white"
    }, [p("use", {
        "xlink:href": "#path_1"
    })]), p("g", {
        mask: "url(#mask-1)"
    }), p("g", {
        mask: "url(#mask-1)"
    }, [p("path", {
        id: "路径 3",
        "fill-rule": "evenodd",
        fill: "url(#linear_0)",
        transform: "translate(34.55812888594599 19.38049081370339)  rotate(0 14.441871114053999 7.269904593148304)",
        opacity: "1",
        d: "M1.36,0.07C0.59,-0.23 -0.2,0.5 0.05,1.29L3.7,13.24C3.81,13.59 4.1,13.85 4.46,13.91C5.74,14.11 9.11,14.54 14.44,14.54C19.77,14.54 23.14,14.11 24.43,13.91C24.79,13.85 25.08,13.59 25.18,13.24L28.84,1.29C29.08,0.5 28.3,-0.23 27.52,0.07L20.58,2.77L14.44,4.81L8.31,2.77L1.36,0.07Z "
    })])]), p("path", {
        id: "路径 2",
        "fill-rule": "evenodd",
        fill: "url(#linear_1)",
        transform: "translate(0 42.73)  rotate(0 50.99999090554298 66.00023085624258)",
        opacity: "1",
        d: "M100.09,10.09C74.81,-5.54 59.08,-0.01 52.35,6.72C45.63,13.46 42.14,19.79 36.22,58.58C30.3,97.37 18.96,112.46 14.03,115.15C1.26,120.54 -14.34,131.45 25.46,131.99C75.21,132.66 94.04,106.39 100.09,89.56C106.14,72.72 96.06,42.41 94.04,27.6C92.43,15.74 97.4,10.99 100.09,10.09Z "
    }), p("path", {
        id: "路径 5",
        "fill-rule": "evenodd",
        style: {
            fill: "#3d3d3d"
        },
        transform: "translate(75 54)  rotate(0 3.5 3.5)",
        opacity: "1",
        d: "M3.5,7C5.43,7 7,5.43 7,3.5C7,1.57 5.43,0 3.5,0C1.57,0 0,1.57 0,3.5C0,5.43 1.57,7 3.5,7Z "
    }), p("path", {
        id: "路径 4",
        "fill-rule": "evenodd",
        fill: "url(#linear_2)",
        transform: "translate(68.11 14.02)  rotate(0 5.8733 5.081238316088591)",
        opacity: "1",
        d: "M0,8.21L5.89,10.16L11.75,8.22L6.73,0.46C6.33,-0.15 5.45,-0.15 5.05,0.45L0,8.21Z "
    })])])])], -1))),
    H = {
        class: "d-layout",
        style: {
            height: "calc(100vh - 90px)"
        }
    },
    q = {
        class: "d-layout-aside d-scrollbar-hide setting-aside"
    },
    J = {
        key: 1,
        class: "d-flex-y"
    },
    W = ["src"],
    K = {
        style: {
            width: "73px"
        },
        class: "ml5 f14 d-elip d-main setting-tab-text"
    },
    Q = M((() => p("p", {
        class: "bb wfull"
    }, null, -1))),
    X = {
        class: "setting-aside-item d-flex-y"
    },
    Y = {
        class: "el-icon"
    },
    tt = ["src"],
    et = {
        class: "ml5 setting-tab-text"
    },
    it = {
        class: "f13 d-main item-title"
    },
    at = {
        class: "d-layout-content setting-content f13 d-main d-scrollbar-hide"
    };
const st = t(S, [
    ["render", function(t, a, s, o, r, j) {
        const v = n("close"),
            h = n("d-button"),
            C = n("d-tabs"),
            x = n("el-drawer");
        return e(), l(x, {
            "append-to-body": "",
            size: "450px",
            "lock-scroll": !1,
            "modal-class": "setting-modal",
            "destroy-on-close": "",
            "with-header": !0,
            "show-close": !1,
            modelValue: o.settingShow.visible,
            "onUpdate:modelValue": a[3] || (a[3] = t => o.settingShow.visible = t)
        }, {
            header: d((() => [p("div", Z, [p("h3", z, m(t.activeComp.name), 1), p("p", N, [c(m(t.activeComp.p) + " ", 1), "about" == t.activeComp.id && t.isNewVersion ? (e(), i("a", G, "New")) : u("v-if", !0)])]), $])),
            default: d((() => [p("div", {
                class: "setting-close d-flex-center",
                onClick: a[0] || (a[0] = t => o.settingShow.visible = !1)
            }, [p("i", U, [f(v, {
                class: "d-middle"
            })])]), p("div", H, [p("div", q, [p("p", {
                class: _(["setting-user", {
                    active: "account" === t.activeComp.id
                }]),
                onClick: a[1] || (a[1] = t => o.tabClick({
                    name: "个人信息",
                    id: "account"
                }))
            }, [o.userInfo._id ? (e(), i("span", J, [p("img", {
                style: {
                    width: "30px",
                    height: "30px",
                    "border-radius": "6px"
                },
                src: o.ossImg(o.userInfo.avatar, 50)
            }, null, 8, W), p("span", K, m(o.userInfo.username), 1)])) : (e(), l(h, {
                key: 0,
                onClick: o.loginHandle,
                type: "primary",
                size: "small"
            }, {
                default: d((() => [c("登录/注册")])),
                _: 1
            }, 8, ["onClick"]))], 2), Q, f(C, {
                modelValue: t.activeComp.id,
                "onUpdate:modelValue": a[2] || (a[2] = e => t.activeComp.id = e),
                data: t.menuList,
                onTabClick: o.tabClick,
                style: {
                    width: "120px",
                    margin: "0 10px",
                    "--bg-radius": "6px",
                    "--active-bg": "rgba(24, 144, 255, 0.1)"
                }
            }, {
                default: d((({
                    row: t
                }) => [p("div", X, [p("span", Y, [p("img", {
                    src: `setting/icon_${t.id}.svg`,
                    alt: ""
                }, null, 8, tt)]), p("div", et, [p("h5", it, m(t.name), 1)])])])),
                _: 1
            }, 8, ["modelValue", "data", "onTabClick"])]), p("div", at, [(e(), l(b, null, [(e(), l(g(o.asyncComponent()), {
                data: "lang" == t.activeComp.id ? o.baseConfig : o.baseConfig[t.activeComp.id]
            }, null, 8, ["data"]))], 1024)), u(" <user v-if=\"settingShow.active == '1'\" /> "), u(" <setting v-if=\"settingShow.active == '2'\" /> ")])])])),
            _: 1
        }, 8, ["modelValue"])
    }],
    ["__scopeId", "data-v-02dfc663"],
    ["__file", "D:/gitee/new-tab/src/views/SidebarPanel/index.vue"]
]);
export {
    st as
    default
};