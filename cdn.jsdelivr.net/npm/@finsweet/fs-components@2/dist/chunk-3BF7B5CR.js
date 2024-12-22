import {
    b as i
} from "./chunk-5KUQIFGY.js";
import {
    i as t
} from "./chunk-FYK54BEC.js";
var d = (e, o) => {
    let {
        type: r
    } = e, c = r === "radio";
    if (c || r === "checkbox") {
        if (!t(e) || typeof o != "boolean" || o === e.checked || c && o === !1) return;
        e.checked = o
    } else {
        if (e.value === o) return;
        e.value = o.toString()
    }
    i(e, ["click", "input", "change"])
};
export {
    d as a
};