import {
    b as t
} from "./baseRequest.b881af11.js";
import "./el-select.e274bb48.js";
import "./axios.91e25212.js";
import "./version.8d34b113.js";
const e = (e = {}) => t.get("/api/getLocation", {
        params: e
    }),
    o = () => t.get("https://v1.hitokoto.cn/?encode=json"),
    a = (e = {}) => t.get("/api/getDate", {
        params: e
    }),
    s = (e = {}) => t.get("api/wechat/robot", {
        params: e
    });
export {
    o as apiGetYiyan, s as apiWechatRobot, a as getDateApi, e as getLocation
};