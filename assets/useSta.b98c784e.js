import {
    b as s
} from "./baseRequest.b881af11.js";
import "./el-select.e274bb48.js";
import "./axios.91e25212.js";
import "./version.8d34b113.js";
const e = (e = {}) => s.get("/stat/engine", {
        params: e
    }),
    t = (e = {}) => s.post("/stat/userHm", e);
export {
    t as statUserAnalyseApi, e as useStatisticsApi
};