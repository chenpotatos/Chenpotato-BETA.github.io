import {
    b7 as t,
    d as e
} from "./el-select.e274bb48.js";
import {
    Z as a
} from "./main.354a692e.js";
import {
    g as i,
    a as o
} from "./weatherApi.bab704ad.js";
import {
    getLocation as r
} from "./baseApi.fc01bad0.js";
import n from "./indexdb.a2b9d265.js";
import "./axios.91e25212.js";
import "./baseRequest.b881af11.js";
import "./version.8d34b113.js";
import "./localforage.2a1ae675.js";
import "./_commonjs-dynamic-modules.30ae7933.js";
const s = a(),
    l = async (a, o, l = !0) => {
        let m = await n.getItem("weather");
        if (!o && !m.isExp) return m.data || {};
        let d = a;
        if (!d || !d.id) {
            const {
                coords: e
            } = t();
            let a = null;
            e.value.longitude && (a = `${e.value.longitude},${e.value.latitude}`);
            let i = await r({
                lang: "cn",
                coords: a
            });
            if (1 == i.status) return;
            d = i.data || {}
        }
        let u = {
                location: d.id
            },
            c = s.value;
        if (c = (await i(u)).data, "ok" != c.status) return;
        let f = {
            adm1: d.adm1,
            adm2: d.adm2,
            name: d.name,
            id: d.id,
            ip: d.ip,
            country: d.country,
            location: d.location,
            isAuto: !d
        };
        return c.location = f, c.moment = (({
            rise: t,
            set: a
        }) => {
            if (!t || !a) return "d";
            let i = e().format("YYYY-MM-DD");
            t = new Date(`${i} ${t}`).getTime(), a = new Date(`${i} ${a}`).getTime();
            let o = e().valueOf();
            return o > t && o < a ? "d" : "n"
        })(c.sun || {}), c.updateTime = e().valueOf(), a || n.set("weather-default-city", c, 18e5), l && (n.set("weather", c, 12e5), s.value = {
            daily_forecast: c.daily_forecast,
            location: c.location,
            now: c.now,
            moment: c.moment,
            air_now_city: c.air_now_city
        }), c
    },
    m = async t => {
        let e = await n.getItem("weather24H");
        if (!t && !e.isExp) return e.data || [];
        let a = {
                location: s.value.location.id,
                unit: "m"
            },
            i = await o(a) || {};
        return n.set("weather24H", i, 1), i
    };
export {
    l as getWeather, m as getWeather24H
};