import {
    c as y
} from "./chunk-FYK54BEC.js";

function A(o, l, u, r) {
    return o ? (o.addEventListener(l, u, r), () => o.removeEventListener(l, u, r)) : y
}
var D = (o, l) => (Array.isArray(l) || (l = [l]), l.map(r => o.dispatchEvent(new Event(r, {
    bubbles: !0
}))).every(r => r));
var w = (o, l, u) => {
    let r = `fs-${o}-element`,
        c = `fs-${o}-instance`,
        f = t => {
            let {
                key: e
            } = u[t];
            return `fs-${o}-${e}`
        },
        g = (t, e, n) => {
            let {
                values: s = {}
            } = u[t], i = f(t);
            if (e) {
                let m = s[e];
                return `[${i}="${m}" i]`
            }
            return n ? `[${i}="${n}" i]` : `[${i}]`
        },
        E = (t, {
            instance: e
        } = {}) => {
            if (!t) return `[${r}]`;
            let n = `[${r}="${t}" i]`;
            if (e === void 0) return n;
            if (e === null) return `${n}:not([${c}], [${c}] ${n})`;
            let s = `[${c}="${e}"]`;
            return `${n}${s}, ${s} ${n}`
        },
        p = (t, {
            instance: e,
            scope: n = document
        } = {}) => {
            let s = E(t, {
                instance: e
            });
            return n.querySelector(s)
        },
        S = (t, {
            instance: e,
            scope: n = document
        } = {}) => {
            let s = E(t, {
                    instance: e
                }),
                i = n.querySelectorAll(s);
            return [...Array.from(i)]
        },
        T = t => {
            let e = t.closest(`[${c}]`);
            return e ? e.getAttribute(c) : null
        },
        k = (t, e, {
            instance: n
        } = {}) => {
            let s = E(e, {
                instance: n
            });
            return t.closest(s)
        },
        v = (t, e, n, s = !0) => {
            let i = f(e),
                m = g(e),
                a = (s ? t ? .closest(m) : t) ? .getAttribute(i);
            if (!a && s) {
                for (let d of window.fsComponents.scripts)
                    if (a = d.getAttribute(i), a) break
            }
            if (!a) return;
            if (n) {
                let {
                    values: d = {}
                } = u[e];
                if (!Object.values(d).includes(a)) return
            }
            return a
        };
    return {
        getClosestElement: k,
        getElementSelector: E,
        getSettingSelector: g,
        getSettingAttributeName: f,
        queryElement: p,
        queryAllElements: S,
        getInstance: T,
        getAttribute: v,
        hasAttributeValue: (t, e, n) => {
            let {
                values: s = {}
            } = u[e], i = s[n];
            return v(t, e) === i
        }
    }
};
export {
    A as a, D as b, w as c
};