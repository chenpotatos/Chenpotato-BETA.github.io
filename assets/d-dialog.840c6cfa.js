import {
    O as e,
    o as l,
    b as a,
    h as s,
    t as o,
    k as t,
    a as d,
    _ as i,
    aq as n,
    g as r,
    c,
    Q as u,
    R as m,
    J as p,
    j as f,
    i as g,
    e as v,
    M as h,
    K as w,
    x as y,
    n as V,
    U as k,
    C as x,
    ao as C,
    a6 as _
} from "./el-select.e274bb48.js";
import {
    E as b
} from "./el-dialog.c73078d2.js"; /* empty css                   */
import {
    o as B,
    c as j
} from "./main.354a692e.js";
import z from "./Close.c9346f3b.js";
const S = {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 12 12"
    },
    H = [s("g", {
        fill: "none"
    }, [s("path", {
        d: "M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75z",
        fill: "currentColor"
    })], -1)],
    D = e({
        name: "Add12Filled",
        render: function(e, s) {
            return l(), a("svg", S, H)
        }
    });
var O = e({
    name: "FullScreen"
});
const E = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
    },
    F = t("path", {
        fill: "currentColor",
        d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
    }, null, -1);
O.render = function(e, a, s, t, d, i) {
    return l(), o("svg", E, [F])
}, O.__file = "packages/components/FullScreen.vue";
const M = O,
    A = {
        key: 0,
        class: "d-dialog-tool is-mac"
    },
    G = {
        class: "d-icon"
    },
    I = {
        class: "d-icon"
    },
    P = {
        class: "d-dialog-tool is-win"
    },
    R = {
        class: "d-icon f15"
    },
    U = {
        class: "d-icon f16"
    },
    $ = {
        class: "d-dialog-title"
    },
    q = d({
        __name: "d-dialog",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            },
            glass: {
                type: Boolean,
                default: !1
            },
            modalClass: String,
            title: {
                type: String,
                default: ""
            },
            width: {
                type: [Number, String],
                default: "1000px"
            },
            height: {
                type: String,
                default: "600px"
            },
            destroyOnClose: {
                type: Boolean,
                default: !1
            },
            fullscreenBtn: {
                type: Boolean,
                default: !0
            },
            headerClass: String
        },
        emits: ["update:modelValue"],
        setup(e, {
            emit: d
        }) {
            const S = e;
            i((() =>
                    import ("./hardware-info.ec50f284.js")), [],
                import.meta.url).then((e => {
                e.isGoodGpu() && document.body.style.setProperty("--dialogBlur", "blur(5px)")
            }));
            const H = n(),
                O = r(null),
                E = r(!1);
            let F = r(S.height);
            const q = c({
                get: () => S.modelValue,
                set(e) {
                    d("update:modelValue", e)
                }
            });

            function J() {
                let e = document.body.clientHeight,
                    l = parseInt(S.height);
                F.value = e < l ? e + "px" : l + "px"
            }
            return u((() => {
                J(), B(window, "resize", J)
            })), m((() => {
                j(window, "resize", J)
            })), (d, i) => (l(), o(v(b), C({
                "modal-class": `d-dialog-model ${e.modalClass}`,
                draggable: "",
                center: "",
                "append-to-body": "",
                "destroy-on-close": e.destroyOnClose,
                modelValue: v(q),
                "onUpdate:modelValue": i[4] || (i[4] = e => _(q) ? q.value = e : null)
            }, v(H), {
                ref_key: "refDialog",
                ref: O,
                class: ["d-dialog", {
                    glass: e.glass
                }],
                width: e.width,
                fullscreen: E.value,
                "show-close": !1,
                "close-on-click-modal": !0,
                "close-on-press-escape": !0,
                "lock-scroll": !1
            }), {
                default: p((() => [f(" <template #title></template> "), s("div", {
                    class: g(["d-dialog-header", e.headerClass])
                }, [f(" mac上的按钮 "), v(h)() ? (l(), a("div", A, [S.fullscreenBtn ? (l(), a("span", {
                    key: 0,
                    title: "放大/缩小",
                    onClick: i[0] || (i[0] = e => E.value = !E.value)
                }, [s("i", G, [t(v(D))])])) : f("v-if", !0), s("span", {
                    onClick: i[1] || (i[1] = e => q.value = !1),
                    title: "关闭"
                }, [s("i", I, [t(v(D))])])])) : (l(), a(w, {
                    key: 1
                }, [f(" window上的按钮 "), s("div", P, [S.fullscreenBtn ? (l(), a("span", {
                    key: 0,
                    title: "放大/缩小",
                    onClick: i[2] || (i[2] = e => E.value = !E.value)
                }, [s("i", R, [t(v(M), {
                    class: "d-middle"
                })])])) : f("v-if", !0), s("span", {
                    title: "关闭",
                    onClick: i[3] || (i[3] = e => q.value = !1)
                }, [s("i", U, [t(v(z), {
                    class: "d-middle"
                })])])])], 2112)), s("div", $, y(e.title), 1)], 2), s("div", {
                    class: "d-dialog-body",
                    style: V({
                        height: v(F)
                    })
                }, [k(d.$slots, "default", {}, (() => [x("应用功能区")]))], 4)])),
                _: 3
            }, 16, ["modal-class", "destroy-on-close", "modelValue", "class", "width", "fullscreen"]))
        }
    }, [
        ["__file", "D:/gitee/new-tab/src/components/d-dialog.vue"]
    ]);
export {
    q as D
};