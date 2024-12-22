function u() {}

function g(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}

function w(e, ...t) {
    if (e == null) {
        for (let o of t) o(void 0);
        return u
    }
    let n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function O(e) {
    let t;
    return w(e, n => t = n)(), t
}
var m = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
var _ = class e {
    _listeners = "WeakMap" in m ? new WeakMap : void 0;
    _observer = void 0;
    options;
    constructor(t) {
        this.options = t
    }
    observe(t, n) {
        return this._listeners.set(t, n), this._getObserver().observe(t, this.options), () => {
            this._listeners.delete(t), this._observer.unobserve(t)
        }
    }
    _getObserver() {
        return this._observer ? ? (this._observer = new ResizeObserver(t => {
            for (let n of t) e.entries.set(n.target, n), this._listeners.get(n.target) ? .(n)
        }))
    }
};
_.entries = "WeakMap" in m ? new WeakMap : void 0;

function x(e, t, n) {
    e.insertBefore(t, n || null)
}

function h(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function E(e) {
    return document.createElement(e)
}

function $(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
}

function v(e) {
    let t = {};
    return e.childNodes.forEach(n => {
        t[n.slot || "default"] = !0
    }), t
}
var G = ["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"],
    q = new Set([...G]);
var V;
typeof HTMLElement == "function" && (V = class extends HTMLElement {
    $$ctor;
    $$s;
    $$c;
    $$cn = !1;
    $$d = {};
    $$r = !1;
    $$p_d = {};
    $$l = {};
    $$l_u = new Map;
    constructor(e, t, n) {
        super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({
            mode: "open"
        })
    }
    addEventListener(e, t, n) {
        if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
            let o = this.$$c.$on(e, t);
            this.$$l_u.set(t, o)
        }
        super.addEventListener(e, t, n)
    }
    removeEventListener(e, t, n) {
        if (super.removeEventListener(e, t, n), this.$$c) {
            let o = this.$$l_u.get(t);
            o && (o(), this.$$l_u.delete(t))
        }
    }
    async connectedCallback() {
        if (this.$$cn = !0, !this.$$c) {
            let e = function(r) {
                return () => {
                    let i;
                    return {
                        c: function() {
                            i = E("slot"), r !== "default" && $(i, "name", r)
                        },
                        m: function(a, c) {
                            x(a, i, c)
                        },
                        d: function(a) {
                            a && h(i)
                        }
                    }
                }
            };
            if (await Promise.resolve(), !this.$$cn || this.$$c) return;
            let t = {},
                n = v(this);
            for (let r of this.$$s) r in n && (t[r] = [e(r)]);
            for (let r of this.attributes) {
                let i = this.$$g_p(r.name);
                i in this.$$d || (this.$$d[i] = b(i, r.value, this.$$p_d, "toProp"))
            }
            for (let r in this.$$p_d) !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
            this.$$c = new this.$$ctor({
                target: this.shadowRoot || this,
                props: { ...this.$$d,
                    $$slots: t,
                    $$scope: {
                        ctx: []
                    }
                }
            });
            let o = () => {
                this.$$r = !0;
                for (let r in this.$$p_d)
                    if (this.$$d[r] = this.$$c.$$.ctx[this.$$c.$$.props[r]], this.$$p_d[r].reflect) {
                        let i = b(r, this.$$d[r], this.$$p_d, "toAttribute");
                        i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i)
                    }
                this.$$r = !1
            };
            this.$$c.$$.after_update.push(o), o();
            for (let r in this.$$l)
                for (let i of this.$$l[r]) {
                    let d = this.$$c.$on(r, i);
                    this.$$l_u.set(i, d)
                }
            this.$$l = {}
        }
    }
    attributeChangedCallback(e, t, n) {
        this.$$r || (e = this.$$g_p(e), this.$$d[e] = b(e, n, this.$$p_d, "toProp"), this.$$c ? .$set({
            [e]: this.$$d[e]
        }))
    }
    disconnectedCallback() {
        this.$$cn = !1, Promise.resolve().then(() => {
            !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0)
        })
    }
    $$g_p(e) {
        return Object.keys(this.$$p_d).find(t => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e) || e
    }
});

function b(e, t, n, o) {
    let r = n[e] ? .type;
    if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !o || !n[e]) return t;
    if (o === "toAttribute") switch (r) {
        case "Object":
        case "Array":
            return t == null ? null : JSON.stringify(t);
        case "Boolean":
            return t ? "" : null;
        case "Number":
            return t ? ? null;
        default:
            return t
    } else switch (r) {
        case "Object":
        case "Array":
            return t && JSON.parse(t);
        case "Boolean":
            return t;
        case "Number":
            return t != null ? +t : t;
        default:
            return t
    }
}
var f = [];

function N(e, t = u) {
    let n, o = new Set;

    function r(l) {
        if (g(e, l) && (e = l, n)) {
            let a = !f.length;
            for (let c of o) c[1](), f.push(c, e);
            if (a) {
                for (let c = 0; c < f.length; c += 2) f[c][0](f[c + 1]);
                f.length = 0
            }
        }
    }

    function i(l) {
        r(l(e))
    }

    function d(l, a = u) {
        let c = [l, a];
        return o.add(c), o.size === 1 && (n = t(r, i) || u), l(e), () => {
            o.delete(c), o.size === 0 && n && (n(), n = null)
        }
    }
    return {
        set: r,
        update: i,
        subscribe: d
    }
}
var Ue = e => new Promise(t => setTimeout(t, e)),
    We = e => window.fsComponents.solutions[e] ? .loading,
    Ve = async () => new Promise(e => {
        window.Webflow || = [], window.Webflow.push(e)
    }),
    He = async () => new Promise(e => {
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", e) : e(void 0)
    });
var Ke = N(!1);
var s = {
        INSTANCE: "fs-slider-instance",
        ELEMENT: "fs-slider-element",
        CONFIG: "fs-slider-config",
        TYPE: "fs-slider-type"
    },
    Qe = {
        INSTANCE: {
            name: s.INSTANCE,
            value: "fs-slider"
        },
        CONFIG: {
            name: s.CONFIG,
            value: JSON.stringify({})
        },
        TYPE: {
            name: s.TYPE,
            value: "static"
        },
        LIST_WRAPPER: {
            name: s.ELEMENT,
            value: "list-wrapper"
        },
        LIST: {
            name: s.ELEMENT,
            value: "list"
        },
        SLIDE: {
            name: s.ELEMENT,
            value: "slide"
        },
        NAVIGATION: {
            name: s.ELEMENT,
            value: "navigation"
        },
        BUTTON_PREVIOUS: {
            name: s.ELEMENT,
            value: "previous"
        },
        BUTTON_NEXT: {
            name: s.ELEMENT,
            value: "next"
        },
        PAGINATION: {
            name: s.ELEMENT,
            value: "pagination"
        },
        PAGINATION_BULLET: {
            name: s.ELEMENT,
            value: "pagination-bullet"
        },
        PAGINATION_BULLET_ACTIVE: {
            name: s.ELEMENT,
            value: "pagination-bullet-active"
        },
        PAGINATION_FRACTION_CURRENT: {
            name: s.ELEMENT,
            value: "pagination-fraction-current"
        },
        PAGINATION_FRACTION_TOTAL: {
            name: s.ELEMENT,
            value: "pagination-fraction-total"
        },
        PROGRESS: {
            name: s.ELEMENT,
            value: "progress"
        },
        SCROLLBAR: {
            name: s.ELEMENT,
            value: "scrollbar"
        },
        SCROLLBAR_DRAG: {
            name: s.ELEMENT,
            value: "scrollbar-drag"
        }
    };
export {
    Qe as a, O as b, Ue as c, We as d, Ve as e, He as f, Ke as g
};