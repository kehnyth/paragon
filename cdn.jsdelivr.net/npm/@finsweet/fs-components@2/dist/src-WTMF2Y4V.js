import {
    a as Ce
} from "./chunk-3BF7B5CR.js";
import {
    a as Ye,
    b as Je,
    e as Ee
} from "./chunk-IXCRCV64.js";
import {
    a as d,
    b as B
} from "./chunk-J7NTLVPZ.js";
import {
    a as w
} from "./chunk-H6FOWRXT.js";
import "./chunk-2N4DPWLQ.js";
import {
    a as Xe
} from "./chunk-GXA4JETY.js";
import {
    b as se,
    c as Qe
} from "./chunk-5KUQIFGY.js";
import "./chunk-53D3RZFS.js";
import {
    e as oe,
    f as Ge,
    g as Ve
} from "./chunk-FYK54BEC.js";
import {
    a as qe
} from "./chunk-2BCRTFNV.js";
import {
    b as We,
    c as Ze,
    e as et,
    f as I,
    g as tt
} from "./chunk-333FNKAA.js";
import "./chunk-FB3NVMMC.js";
var Ft = "0.1.2";

function re(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var o in t) n[o] = t[o]
    }
    return n
}
var Nt = {
    read: function(n) {
        return n[0] === '"' && (n = n.slice(1, -1)), n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(n) {
        return encodeURIComponent(n).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function xe(n, e) {
    function t(s, r, i) {
        if (!(typeof document > "u")) {
            i = re({}, e, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), s = encodeURIComponent(s).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var c in i) i[c] && (a += "; " + c, i[c] !== !0 && (a += "=" + i[c].split(";")[0]));
            return document.cookie = s + "=" + n.write(r, s) + a
        }
    }

    function o(s) {
        if (!(typeof document > "u" || arguments.length && !s)) {
            for (var r = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < r.length; a++) {
                var c = r[a].split("="),
                    m = c.slice(1).join("=");
                try {
                    var O = decodeURIComponent(c[0]);
                    if (i[O] = n.read(m, O), s === O) break
                } catch {}
            }
            return s ? i[s] : i
        }
    }
    return Object.create({
        set: t,
        get: o,
        remove: function(s, r) {
            t(s, "", re({}, r, {
                expires: -1
            }))
        },
        withAttributes: function(s) {
            return xe(this.converter, re({}, this.attributes, s))
        },
        withConverter: function(s) {
            return xe(re({}, this.converter, s), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(e)
        },
        converter: {
            value: Object.freeze(n)
        }
    })
}
var g = xe(Nt, {
    path: "/"
});
var Se = (n, e = !0) => n ? n.split(",").reduce((o, s) => {
    let r = s.trim();
    return (!e || r) && o.push(r), o
}, []) : [];
var nt = n => n.replace(/\/+$/, "");
var ie = class {
    constructor({
        element: e,
        duration: t
    }) {
        this.active = !1;
        this.running = !1;
        this.isActive = () => this.active;
        this.isRunning = () => this.running;
        this.untilFinished = () => this.runningPromise;
        this.element = typeof e == "string" ? document.querySelector(e) : e, this.duration = {
            first: typeof t == "number" ? t : t ? .first ? ? 0,
            second: typeof t == "number" ? t : t ? .second ? ? 0
        }
    }
    async trigger(e) {
        return e === "first" && this.active || e === "second" && !this.active ? !1 : (e || (e = this.active ? "second" : "first"), se(this.element, "click"), this.running = !0, this.runningPromise = Ze(this.duration[e]), await this.runningPromise, this.running = !1, this.active = e === "first", !0)
    }
};

function jt(n) {
    if (Array.isArray(n)) {
        for (var e = 0, t = Array(n.length); e < n.length; e++) t[e] = n[e];
        return t
    } else return Array.from(n)
}
var Te = !1;
typeof window < "u" && (ke = {
    get passive() {
        Te = !0
    }
}, window.addEventListener("testPassive", null, ke), window.removeEventListener("testPassive", null, ke));
var ke, ae = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1),
    N = [],
    ce = !1,
    Ae = -1,
    q = void 0,
    L = void 0,
    W = void 0,
    ot = function(e) {
        return N.some(function(t) {
            return !!(t.options.allowTouchMove && t.options.allowTouchMove(e))
        })
    },
    le = function(e) {
        var t = e || window.event;
        return ot(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
    },
    Ht = function(e) {
        if (W === void 0) {
            var t = !!e && e.reserveScrollBarGap === !0,
                o = window.innerWidth - document.documentElement.clientWidth;
            if (t && o > 0) {
                let s = parseInt(window.getComputedStyle(window.top.document.body).getPropertyValue("padding-right"), 10);
                W = window.top.document.body.style.paddingRight, window.top.document.body.style.paddingRight = `${s+o}px`
            }
        }
        q === void 0 && (q = window.top.document.body.style.overflow, window.top.document.body.style.overflow = "hidden")
    },
    zt = function() {
        W !== void 0 && (window.top.document.body.style.paddingRight = W, W = void 0), q !== void 0 && (window.top.document.body.style.overflow = q, q = void 0)
    },
    Rt = function() {
        return window.requestAnimationFrame(function() {
            if (L === void 0) {
                L = {
                    position: window.top.body.style.position,
                    top: window.top.body.style.top,
                    left: window.top.body.style.left
                };
                let {
                    scrollY: e,
                    scrollX: t,
                    innerHeight: o
                } = window;
                window.top.document.body.style.position = "fixed", window.top.document.body.style.top = `${-e}px`, window.top.document.body.style.left = `${-t}px`
            }
        })
    },
    Kt = function() {
        if (L !== void 0) {
            let e = -parseInt(window.top.document.body.style.top, 10),
                t = -parseInt(window.top.document.body.style.left, 10);
            window.top.body.style.position = L.position, window.top.body.style.top = L.top, window.top.body.style.left = L.left, window.scrollTo(t, e), L = void 0
        }
    },
    Bt = function(e) {
        return e ? e.scrollHeight - e.scrollTop <= e.clientHeight : !1
    },
    qt = function(e, t) {
        var o = e.targetTouches[0].clientY - Ae;
        return ot(e.target) ? !1 : t && t.scrollTop === 0 && o > 0 || Bt(t) && o < 0 ? le(e) : (e.stopPropagation(), !0)
    },
    st = function(e, t) {
        if (!e) {
            console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            return
        }
        if (!N.some(function(s) {
                return s.targetElement === e
            })) {
            var o = {
                targetElement: e,
                options: t || {}
            };
            N = [].concat(jt(N), [o]), ae ? Rt() : Ht(t), ae && (e.ontouchstart = function(s) {
                s.targetTouches.length === 1 && (Ae = s.targetTouches[0].clientY)
            }, e.ontouchmove = function(s) {
                s.targetTouches.length === 1 && qt(s, e)
            }, ce || (document.addEventListener("touchmove", le, Te ? {
                passive: !1
            } : void 0), ce = !0))
        }
    },
    rt = function() {
        ae && (N.forEach(function(e) {
            e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null
        }), ce && (document.removeEventListener("touchmove", le, Te ? {
            passive: !1
        } : void 0), ce = !1), Ae = -1), ae ? Kt() : zt(), N = []
    };
var v = new WeakMap,
    k = new WeakMap,
    h = new WeakMap;
var pe = Symbol("anyProducer"),
    it = Promise.resolve(),
    ue = Symbol("listenerAdded"),
    me = Symbol("listenerRemoved"),
    ge = !1,
    Me = !1,
    he = n => typeof n == "string" || typeof n == "symbol" || typeof n == "number";

function j(n) {
    if (!he(n)) throw new TypeError("`eventName` must be a string, symbol, or number")
}

function de(n) {
    if (typeof n != "function") throw new TypeError("listener must be a function")
}

function H(n, e) {
    let t = k.get(n);
    if (t.has(e)) return t.get(e)
}

function Y(n, e) {
    let t = he(e) ? e : pe,
        o = h.get(n);
    if (o.has(t)) return o.get(t)
}

function Wt(n, e, t) {
    let o = h.get(n);
    if (o.has(e))
        for (let s of o.get(e)) s.enqueue(t);
    if (o.has(pe)) {
        let s = Promise.all([e, t]);
        for (let r of o.get(pe)) r.enqueue(s)
    }
}

function at(n, e) {
    e = Array.isArray(e) ? e : [e];
    let t = !1,
        o = () => {},
        s = [],
        r = {
            enqueue(i) {
                s.push(i), o()
            },
            finish() {
                t = !0, o()
            }
        };
    for (let i of e) {
        let a = Y(n, i);
        a || (a = new Set, h.get(n).set(i, a)), a.add(r)
    }
    return {
        async next() {
            return s ? s.length === 0 ? t ? (s = void 0, this.next()) : (await new Promise(i => {
                o = i
            }), this.next()) : {
                done: !1,
                value: await s.shift()
            } : {
                done: !0
            }
        },
        async
        return (i) {
            s = void 0;
            for (let a of e) {
                let c = Y(n, a);
                c && (c.delete(r), c.size === 0 && h.get(n).delete(a))
            }
            return o(), arguments.length > 0 ? {
                done: !0,
                value: await i
            } : {
                done: !0
            }
        },
        [Symbol.asyncIterator]() {
            return this
        }
    }
}

function ct(n) {
    if (n === void 0) return lt;
    if (!Array.isArray(n)) throw new TypeError("`methodNames` must be an array of strings");
    for (let e of n)
        if (!lt.includes(e)) throw typeof e != "string" ? new TypeError("`methodNames` element must be a string") : new Error(`${e} is not Emittery method`);
    return n
}
var z = n => n === ue || n === me;

function fe(n, e, t) {
    if (z(e)) try {
        ge = !0, n.emit(e, t)
    } finally {
        ge = !1
    }
}
var u = class n {
        static mixin(e, t) {
            return t = ct(t), o => {
                if (typeof o != "function") throw new TypeError("`target` must be function");
                for (let i of t)
                    if (o.prototype[i] !== void 0) throw new Error(`The property \`${i}\` already exists on \`target\``);

                function s() {
                    return Object.defineProperty(this, e, {
                        enumerable: !1,
                        value: new n
                    }), this[e]
                }
                Object.defineProperty(o.prototype, e, {
                    enumerable: !1,
                    get: s
                });
                let r = i => function(...a) {
                    return this[e][i](...a)
                };
                for (let i of t) Object.defineProperty(o.prototype, i, {
                    enumerable: !1,
                    value: r(i)
                });
                return o
            }
        }
        static get isDebugEnabled() {
            if (typeof globalThis.process ? .env != "object") return Me;
            let {
                env: e
            } = globalThis.process ? ? {
                env: {}
            };
            return e.DEBUG === "emittery" || e.DEBUG === "*" || Me
        }
        static set isDebugEnabled(e) {
            Me = e
        }
        constructor(e = {}) {
            v.set(this, new Set), k.set(this, new Map), h.set(this, new Map), h.get(this).set(pe, new Set), this.debug = e.debug ? ? {}, this.debug.enabled === void 0 && (this.debug.enabled = !1), this.debug.logger || (this.debug.logger = (t, o, s, r) => {
                try {
                    r = JSON.stringify(r)
                } catch {
                    r = `Object with the following keys failed to stringify: ${Object.keys(r).join(",")}`
                }(typeof s == "symbol" || typeof s == "number") && (s = s.toString());
                let i = new Date,
                    a = `${i.getHours()}:${i.getMinutes()}:${i.getSeconds()}.${i.getMilliseconds()}`;
                console.log(`[${a}][emittery:${t}][${o}] Event Name: ${s}
	data: ${r}`)
            })
        }
        logIfDebugEnabled(e, t, o) {
            (n.isDebugEnabled || this.debug.enabled) && this.debug.logger(e, this.debug.name, t, o)
        }
        on(e, t) {
            de(t), e = Array.isArray(e) ? e : [e];
            for (let o of e) {
                j(o);
                let s = H(this, o);
                s || (s = new Set, k.get(this).set(o, s)), s.add(t), this.logIfDebugEnabled("subscribe", o, void 0), z(o) || fe(this, ue, {
                    eventName: o,
                    listener: t
                })
            }
            return this.off.bind(this, e, t)
        }
        off(e, t) {
            de(t), e = Array.isArray(e) ? e : [e];
            for (let o of e) {
                j(o);
                let s = H(this, o);
                s && (s.delete(t), s.size === 0 && k.get(this).delete(o)), this.logIfDebugEnabled("unsubscribe", o, void 0), z(o) || fe(this, me, {
                    eventName: o,
                    listener: t
                })
            }
        }
        once(e) {
            let t, o = new Promise(s => {
                t = this.on(e, r => {
                    t(), s(r)
                })
            });
            return o.off = t, o
        }
        events(e) {
            e = Array.isArray(e) ? e : [e];
            for (let t of e) j(t);
            return at(this, e)
        }
        async emit(e, t) {
            if (j(e), z(e) && !ge) throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
            this.logIfDebugEnabled("emit", e, t), Wt(this, e, t);
            let o = H(this, e) ? ? new Set,
                s = v.get(this),
                r = [...o],
                i = z(e) ? [] : [...s];
            await it, await Promise.all([...r.map(async a => {
                if (o.has(a)) return a(t)
            }), ...i.map(async a => {
                if (s.has(a)) return a(e, t)
            })])
        }
        async emitSerial(e, t) {
            if (j(e), z(e) && !ge) throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
            this.logIfDebugEnabled("emitSerial", e, t);
            let o = H(this, e) ? ? new Set,
                s = v.get(this),
                r = [...o],
                i = [...s];
            await it;
            for (let a of r) o.has(a) && await a(t);
            for (let a of i) s.has(a) && await a(e, t)
        }
        onAny(e) {
            return de(e), this.logIfDebugEnabled("subscribeAny", void 0, void 0), v.get(this).add(e), fe(this, ue, {
                listener: e
            }), this.offAny.bind(this, e)
        }
        anyEvent() {
            return at(this)
        }
        offAny(e) {
            de(e), this.logIfDebugEnabled("unsubscribeAny", void 0, void 0), fe(this, me, {
                listener: e
            }), v.get(this).delete(e)
        }
        clearListeners(e) {
            e = Array.isArray(e) ? e : [e];
            for (let t of e)
                if (this.logIfDebugEnabled("clear", t, void 0), he(t)) {
                    let o = H(this, t);
                    o && o.clear();
                    let s = Y(this, t);
                    if (s) {
                        for (let r of s) r.finish();
                        s.clear()
                    }
                } else {
                    v.get(this).clear();
                    for (let [o, s] of k.get(this).entries()) s.clear(), k.get(this).delete(o);
                    for (let [o, s] of h.get(this).entries()) {
                        for (let r of s) r.finish();
                        s.clear(), h.get(this).delete(o)
                    }
                }
        }
        listenerCount(e) {
            e = Array.isArray(e) ? e : [e];
            let t = 0;
            for (let o of e) {
                if (he(o)) {
                    t += v.get(this).size + (H(this, o) ? .size ? ? 0) + (Y(this, o) ? .size ? ? 0) + (Y(this) ? .size ? ? 0);
                    continue
                }
                o !== void 0 && j(o), t += v.get(this).size;
                for (let s of k.get(this).values()) t += s.size;
                for (let s of h.get(this).values()) t += s.size
            }
            return t
        }
        bindMethods(e, t) {
            if (typeof e != "object" || e === null) throw new TypeError("`target` must be an object");
            t = ct(t);
            for (let o of t) {
                if (e[o] !== void 0) throw new Error(`The property \`${o}\` already exists on \`target\``);
                Object.defineProperty(e, o, {
                    enumerable: !1,
                    value: this[o].bind(this)
                })
            }
        }
    },
    lt = Object.getOwnPropertyNames(u.prototype).filter(n => n !== "constructor");
Object.defineProperty(u, "listenerAdded", {
    value: ue,
    writable: !1,
    enumerable: !0,
    configurable: !1
});
Object.defineProperty(u, "listenerRemoved", {
    value: me,
    writable: !1,
    enumerable: !0,
    configurable: !1
});
var dt = async ({
    id: n,
    endpoint: e,
    consents: t,
    action: o,
    bannerText: s
}) => {
    if (e) try {
        let r = JSON.stringify({
                id: n,
                action: o,
                consents: t,
                bannerText: s,
                url: window.location.href,
                userAgent: navigator.userAgent
            }),
            i = await fetch(e, {
                body: r,
                method: "POST"
            });
        if (i.ok) l.alert("The new consents were successfully POSTed to the API endpoint.", "info");
        else throw new Error(`The API returned a ${i.status} status.`)
    } catch (r) {
        l.alert(`There was an error while POSTing to the API: ${r}`, "error")
    }
};
var Oe = ["banner", "preferences", "open-preferences", "fixed-preferences", "allow", "deny", "close", "submit", "interaction", "placeholder", "form", "checkbox-essential", "checkbox-marketing", "checkbox-personalization", "checkbox-analytics", "internal-component"],
    Ie = {
        animation: {
            key: "animation",
            values: {
                fade: "fade",
                "slide-up": "slide-up",
                "slide-down": "slide-down",
                "slide-left": "slide-left",
                "slide-right": "slide-right",
                grow: "grow",
                shrink: "shrink",
                spin: "spin"
            }
        },
        duration: {
            key: "duration"
        },
        easing: {
            key: "easing",
            values: {
                linear: "linear",
                ease: "ease",
                "ease-in": "ease-in",
                "ease-out": "ease-out",
                "ease-in-out": "ease-in-out"
            }
        },
        mode: {
            key: "mode",
            values: {
                informational: "informational",
                "opt-out": "opt-out",
                "opt-in": "opt-in"
            }
        },
        source: {
            key: "source"
        },
        resetix: {
            key: "resetix"
        },
        updated: {
            key: "updated"
        },
        domain: {
            key: "domain"
        },
        type: {
            key: "type",
            values: {
                "cookie-consent": "cookie-consent"
            }
        },
        categories: {
            key: "categories",
            values: {
                personalization: "personalization",
                marketing: "marketing",
                analytics: "analytics"
            }
        },
        scroll: {
            key: "scroll",
            values: {
                disable: "disable"
            }
        },
        expires: {
            key: "expires"
        },
        endpoint: {
            key: "endpoint"
        },
        placeholder: {
            key: "placeholder"
        },
        src: {
            key: "src"
        }
    },
    Yt = ["essential"],
    Le = ["personalization", "analytics", "marketing"],
    Pe = "uncategorized",
    ft = [...Le, ...Yt, Pe],
    P = "fs-consent",
    pt = ["informational", "opt-in", "opt-out"],
    ut = {
        allow: "allow",
        deny: "deny",
        submit: "submit"
    },
    D = {
        main: P,
        consentsUpdated: `${P}-updated`
    },
    R = {
        checkbox: n => `[${P}-element="checkbox-${n}"]`,
        gtmEvent: n => `${n}-activated`
    };
var G = Object.freeze({
        analytics: !1,
        essential: !0,
        marketing: !1,
        personalization: !1,
        uncategorized: !1
    }),
    T = Object.freeze({
        analytics: !0,
        essential: !0,
        marketing: !0,
        personalization: !0,
        uncategorized: !0
    }),
    mt = 180;
var V = d({
    mode: "opt-in",
    source: "",
    resetix: !1,
    domain: "",
    expires: "365",
    endpoint: ""
});
var U = d("opt-in"),
    E = d(Number(mt)),
    $ = d(null),
    De = d(null),
    A = d(null),
    ye = d(!1),
    y = d({ ...G
    }),
    C = d({}),
    Q = d(""),
    J = d([]),
    X = d([]),
    gt = () => {
        let {
            mode: n,
            expires: e,
            endpoint: t,
            source: o,
            domain: s
        } = V.get();
        switch (U.set(oe(n, pt) ? n : "opt-in"), U.get()) {
            case "informational":
            case "opt-out":
                y.set({ ...T
                });
                break;
            default:
                y.set({ ...G
                })
        }
        E.set(Number(e)), $.set(t), De.set(o), A.set(s), l.alert(`The cookie banner is set to ${U.get()} mode with a consent expiry time of ${E.get()} days.${$.get()?`The consents will be POSTed to ${$.get()}`:""}`, "info")
    },
    ht = B(ye, n => n),
    yt = n => {
        J.set([...J.get(), { ...n,
            type: "script"
        }])
    },
    bt = n => {
        X.set([...X.get(), { ...n,
            type: "iframe"
        }])
    },
    Z = B([J, X], (n, e) => [...n, ...e]),
    wt = () => {
        let n = Z.get(),
            e = y.get();
        return n.filter(({
            active: o,
            categories: s
        }) => !o && s.every(r => e[r]))
    },
    Ue = n => {
        let e = [];
        return Ge(n).forEach(t => {
            if (t === "essential") return;
            let o = n[t];
            o === void 0 || o === y.get()[t] || (y.set({ ...y.get(),
                [t]: o
            }), e.push(t))
        }), ye.set(!0), e
    },
    _ = B([y, C], (n, e) => {
        let t = { ...n
        };
        return Object.keys(e).forEach(o => {
            let s = o;
            e[s].length === 0 && (t[s] = !1)
        }), t
    }),
    kn = B(y, n => Ve(n));
var vt = n => {
        n && n.textContent && Q.set(n.textContent)
    },
    Et = () => ({
        marketing: ["ad_storage", "ad_user_data", "ad_personalization"],
        analytics: ["analytics_storage"],
        personalization: ["functionality_storage", "personalization_storage"],
        essential: ["security_storage"],
        uncategorized: []
    }),
    $e = n => ({
        consentModes: {
            ad_storage: n ? .marketing ? "granted" : "denied",
            ad_user_data: n ? .marketing ? "granted" : "denied",
            ad_personalization: n ? .marketing ? "granted" : "denied",
            analytics_storage: n ? .analytics ? "granted" : "denied",
            functionality_storage: n ? .personalization ? "granted" : "denied",
            personalization_storage: n ? .personalization ? "granted" : "denied",
            security_storage: "granted"
        },
        consents: n
    });
var Ct = n => Object.keys(n).every(e => oe(e, ft));
var _e = n => {
        if (!n) return;
        let {
            hostname: e
        } = window.location;
        return e.includes("webflow.io") ? e : n
    },
    xt = () => {
        let n = g.get(D.main);
        if (!n) return;
        let e = JSON.parse(decodeURIComponent(n));
        if (e.consents && Ct(e.consents)) {
            let o = C.get(),
                s = { ...e.consents
                };
            return Object.keys(o).forEach(r => {
                let i = r;
                o[i].length === 0 && (s[i] = !1)
            }), s
        }
    },
    St = (n, e, t = 120, o) => {
        let r = encodeURIComponent(JSON.stringify({
            id: n,
            consents: e
        }));
        o = _e(o), g.set(D.main, r, {
            expires: t,
            domain: o,
            sameSite: "None",
            secure: !0
        })
    },
    kt = () => {
        let n = g.get();
        for (let e in n) {
            if (e.includes(D.main)) continue;
            let t = window.location.host.split(".");
            for (; t.length > 1;) g.remove(e), g.remove(e, {
                domain: `.${t.join(".")}`
            }), g.remove(e, {
                domain: `${t.join(".")}`
            }), t.splice(0, 1)
        }
    },
    Tt = () => !!g.get(D.consentsUpdated),
    At = (n = 120, e) => {
        e = _e(e), g.set(D.consentsUpdated, "true", {
            expires: n,
            domain: e,
            sameSite: "None",
            secure: !0
        })
    },
    Fe = (n, e = 120, t) => {
        t = _e(t);
        let o = C.get();
        for (let s in n) {
            let r = s,
                i = `${D.main}-${s}`;
            Object.keys(o).find(c => o[c].includes(s)) ? g.set(i, String(n[r] === "granted"), {
                expires: e,
                domain: t
            }) : g.remove(i)
        }
    };
var {
    getElementSelector: f,
    queryElement: b,
    queryAllElements: ee,
    getInstance: Hn,
    getAttribute: x,
    hasAttributeValue: zn,
    getSettingSelector: Mt
} = Qe(qe.consent.key, Oe, Ie), Ot = `<style>${f("banner")},${f("fixed-preferences")},${f("preferences")},${f("interaction")}{display:none}</style>`;
var It = async (n, e) => {
        let {
            origin: t,
            pathname: o,
            href: s
        } = window.location, {
            origin: r,
            pathname: i,
            href: a
        } = new URL(document.baseURI);
        try {
            if (n.startsWith("/")) {
                let ve = a === s ? t : r + i;
                n = nt(ve) + n
            }
            let {
                origin: c,
                pathname: m
            } = new URL(n);
            if (c + m === t + o) return;
            let p = await (await fetch(n)).text(),
                S = new DOMParser().parseFromString(p, "text/html");
            [f("banner"), f("fixed-preferences"), f("preferences")].forEach(ve => {
                let Be = S.querySelector(ve);
                Be && document.body.appendChild(Be)
            }), e && (await I(), await Xe(["ix2"]))
        } catch (c) {
            l.alert(`${c}`, "error")
        }
    },
    Lt = (n, e) => {
        let t = n;
        for (; t;) {
            let o = Array.from(t.children);
            for (let s of o)
                if (s.matches(e)) return s;
            t = t.parentElement
        }
    },
    Pt = () => {
        let n = b("internal-component");
        if (!n) return;
        window.getComputedStyle(n).display === "none" && (n.style.display = "block")
    },
    Dt = n => {
        if (Ee(n)) return n;
        let e = n.querySelectorAll("*");
        for (let t of Array.from(e))
            if (Ee(t)) return t
    },
    Gt = ({
        element: n
    }) => {
        let e = document.createElement("script"),
            t = n.getAttribute("fs-consent-scripttype");
        t ? e.type = t : e.type = "text/javascript";
        let o = Array.from(n.attributes).map(s => ({
            name: s.name,
            value: s.value
        })) ? .filter(s => !s.name.startsWith("fs-consent") && s.name !== "type");
        return e.innerText = n.innerText, e.text = n.text, n.src && (e.src = n.src), o.length > 0 && o ? .forEach(s => e.setAttribute(s.name, `${s.value}`)), e
    },
    Vt = ({
        element: n,
        src: e,
        placeholder: t
    }) => {
        let o = document.createElement("iframe");
        for (let {
                name: s,
                value: r
            } of Array.from(n.attributes)) o.setAttribute(s, r);
        return o.innerText = n.innerText, o.src = e, t && o.addEventListener("load", async () => {
            await w.fade.animateOut(t, {
                display: "none"
            })
        }), o
    },
    Ut = () => {
        let n = document.querySelectorAll('[fs-consent-element^="checkbox-"]'),
            e = new Set,
            t = Et();
        if (!n || n ? .length === 0) {
            let s = Object.entries(T).reduce((r, [i, a]) => {
                let c = i;
                return r[c] = t[c], r
            }, {});
            C.set({ ...s
            });
            return
        }
        n.forEach(s => {
            let r = s.getAttribute("fs-consent-element");
            if (r) {
                let i = r.replace("checkbox-", "");
                e.add(i)
            }
        });
        let o = Object.entries(T).reduce((s, [r, i]) => {
            let a = r;
            return e.has(r) ? s[a] = t[a] : s[a] = [], s
        }, {});
        C.set({ ...o,
            essential: t.essential
        })
    },
    be = async n => {
        for (let e of n) await new Promise(t => {
            let {
                element: o
            } = e, {
                src: s,
                parentElement: r
            } = o, i;
            if (e.type === "script") i = Gt(e);
            else if (e.type === "iframe") i = Vt(e);
            else {
                t(void 0);
                return
            }
            let a = () => {
                e.element = i, e.active = !0, t(void 0)
            };
            s && i.addEventListener("load", a), r ? .insertBefore(i, o), o.remove(), s || a()
        })
    };
var Jt = {
        info: "green",
        warning: "yellow",
        error: "red"
    },
    $t = d(!1),
    Ne = d(null),
    Xt = () => {
        let n = document.createElement("div");
        return Object.assign(n.style, {
            position: "fixed",
            left: "auto",
            top: "auto",
            right: "16px",
            bottom: "0px",
            "z-index": "999999",
            "max-width": "320px",
            "font-size": "14px",
            "line-height": "1.25"
        }), document.body.appendChild(n), n
    },
    Qt = (n, e) => {
        let t = document.createElement("div");
        Object.assign(t.style, {
            position: "relative",
            padding: "16px",
            opacity: "0",
            "margin-bottom": "16px",
            "border-left": `4px solid ${Jt[e]}`,
            "background-color": "#fff",
            "box-shadow": "1px 1px 3px 0 rgba(0, 0, 0, 0.1)",
            "word-break": "break-all"
        });
        let o = document.createElement("div");
        return o.innerText = n, t.appendChild(o), t.insertAdjacentHTML("beforeend", `<div ${P}-element="close" style="position: absolute; left: auto; top: 4px; right: 8px; bottom: auto; cursor: pointer">\u2716</div>`), t
    },
    Zt = () => {
        Ne.get() || Ne.set(Xt()), $t.set(!0)
    },
    en = (n, e) => {
        if (!$t.get()) return;
        let t = Qt(n, e);
        tn(t)
    },
    tn = async n => {
        let e = t => {
            t.target instanceof Element && t.target.closest(f("close")) && (n.removeEventListener("click", e), n.remove())
        };
        n.addEventListener("click", e), Ne.get() ? .insertAdjacentElement("afterbegin", n), w.fade.prepareIn(n, {
            display: "block"
        }), await w.fade.animateIn(n, {
            display: "block"
        })
    },
    l = {
        activate: Zt,
        alert: en
    };
var je = (n, e) => {
        nn("consent", n, e)
    },
    He = n => {
        window.dataLayer = window.dataLayer || [], !window.dataLayer.find(t => typeof t == "object" && "event" in t && t.event === n) && (window.dataLayer.push({
            event: n
        }), l.alert(`The GTM event ${n} has been fired with its equivalent consent mode.`, "info"))
    };

function nn(...n) {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push(arguments)
}
var ze = (n, e) => {
    let t = new CustomEvent("fs-consent-consentModeUpdate", {
        detail: {
            consentModes: e,
            consents: n
        }
    });
    document.dispatchEvent(t)
};
var Re = async n => {
    let e = n ? .analytics || !1,
        t = window.Webflow,
        o = t ? .analytics ? .getIsOptedOut();
    if (e) {
        o && t ? .analytics ? .optIn({
            reload: !1
        });
        return
    }
    o || t ? .analytics ? .optOut({
        reload: !1
    })
};
var K = class extends u {
    constructor(t) {
        super();
        this.element = t;
        this.checkboxes = new Map;
        this.initElements(), this.listenEvents(), this.updateCheckboxes()
    }
    initElements() {
        let t = Le.filter(o => {
            let s = R.checkbox(o),
                r = this.element.querySelector(`input${s}, ${s} input`);
            return !r || r.type !== "checkbox" ? !0 : (r.checked && Ce(r, !1), this.checkboxes.set(o, r), !1)
        });
        t.length && l.alert(`The Consents Form is missing the following checkboxes: ${t.map(o=>R.checkbox(o)).join(", ")}.`, "warning")
    }
    listenEvents() {
        this.element.addEventListener("submit", t => this.handleSubmit(t))
    }
    handleSubmit(t) {
        t.preventDefault(), t.stopPropagation();
        let o = {};
        this.checkboxes.forEach((s, r) => {
            o[r] = s.checked ? ? !1
        }), this.emit("submit", o)
    }
    updateCheckboxes() {
        let t = _.get();
        this.checkboxes.forEach((o, s) => {
            !!t[s] !== o.checked && Ce(o, t[s])
        })
    }
    submit() {
        se(this.element, "submit")
    }
};
var M = class extends u {
    constructor(t) {
        super();
        this.element = t;
        this.disableScrollOnOpen = !1;
        this.init()
    }
    init() {
        this.initElements(), this.handleAccessibility(), this.listenEvents()
    }
    initElements() {
        let {
            element: t
        } = this, o = b("form", {
            scope: t
        });
        o && (this.form = new K(o)), this.disableScrollOnOpen = x(t, "scroll", !0) === "disable", this.disableScrollOnOpen && (this.scrollableElement = Dt(t));
        let s = b("interaction", {
            scope: t
        });
        return this.displayController = new we({
            element: t,
            interaction: s ? {
                element: s
            } : void 0,
            startsHidden: !0,
            animation: x(t, "animation", !0),
            animationDuration: Number(x(t, "duration")),
            animationEasing: x(t, "easing")
        }), !0
    }
    handleAccessibility() {
        let {
            element: t
        } = this;
        if (!t) return;
        [ee("allow", {
            scope: t
        }), ee("deny", {
            scope: t
        }), ee("submit", {
            scope: t
        }), ee("close", {
            scope: t
        })].flat().forEach(s => {
            s && (s.setAttribute("role", "button"), s.setAttribute("tabindex", "0"))
        })
    }
    listenEvents() {
        let {
            element: t,
            form: o
        } = this;
        t && (t.addEventListener("click", s => this.handleMouseAndKeyboard(s)), t.addEventListener("keydown", s => this.handleMouseAndKeyboard(s)), o ? .on("submit", s => this.handleFormSubmit(s)))
    }
    handleMouseAndKeyboard(t) {
        let {
            target: o
        } = t, [s, r, i, a] = [f("allow"), f("deny"), f("close"), f("submit")];
        o instanceof Element && ("key" in t && t.key !== "Enter" || (o.closest(s) ? (this.emit("allow"), this.close()) : o.closest(r) ? (this.emit("deny"), this.close()) : o.closest(i) ? this.close() : o.closest(a) && this.form ? .submit()))
    }
    handleFormSubmit(t) {
        this.emit("formsubmit", t), this.close()
    }
    show(t = !0) {
        let {
            element: o,
            displayController: s,
            disableScrollOnOpen: r,
            scrollableElement: i
        } = this;
        !o || !s || s.isVisible() === t || (s[t ? "show" : "hide"](), r && (t ? st(i || o, {
            reserveScrollBarGap: !0
        }) : rt()), this.emit(t ? "open" : "close"))
    }
    open() {
        this.show()
    }
    close() {
        this.show(!1)
    }
};
var we = class {
    constructor({
        element: e,
        interaction: t,
        animation: o,
        startsHidden: s,
        animationEasing: r,
        animationDuration: i
    }) {
        this.isVisible = () => this.visible;
        if (this.element = e, this.animation = o, this.animationEasing = r, this.animationDuration = i, s ? (this.element.style.display = "none", this.visible = !1) : this.visible = Je(this.element), t) {
            let {
                element: a,
                duration: c
            } = t;
            this.interaction = new ie({
                element: a,
                duration: c
            })
        }
    }
    async show() {
        if (this.visible) return;
        let {
            interaction: e,
            animation: t,
            element: o,
            animationDuration: s,
            animationEasing: r
        } = this, i = "block";
        e ? await e.trigger("first") : t ? (w[t].prepareIn(o, {
            display: i
        }), await w[t].animateIn(o, {
            display: i,
            duration: s,
            easing: r
        })) : o.style.display = i, this.visible = !0
    }
    async hide() {
        if (!this.visible) return;
        let {
            interaction: e,
            animation: t,
            element: o,
            animationDuration: s,
            animationEasing: r
        } = this;
        e ? await e.trigger("second") : t ? await w[t].animateOut(o, {
            display: "none",
            duration: s,
            easing: r
        }) : o.style.display = "none", this.visible = !1
    }
};
var te = class extends u {
    constructor() {
        super(), this.loadConsents(), this.storeElements(), this.applyConsents()
    }
    storeElements() {
        let e = document.querySelectorAll(`script[type="${P}"], iframe${Mt("src")}`),
            t = Z.get();
        [...Array.from(e)].filter(s => !t.find(({
            element: r
        }) => s === r)).forEach(s => {
            let r = [];
            if (x(s, "categories") ? r = Se(`${x(s,"categories")}`, !0) : r = Se(`${Pe}`, !0), s instanceof HTMLScriptElement && yt({
                    categories: r,
                    element: s,
                    active: !1
                }), s instanceof HTMLIFrameElement) {
                let i = x(s, "src");
                if (!i) return;
                s.src = "";
                let a = Lt(s, '[fs-consent-element="placeholder"]');
                bt({
                    categories: r,
                    element: s,
                    src: i,
                    placeholder: a,
                    active: !1
                })
            }
            l.alert(`Stored the element: ${s.outerHTML} in the categories: ${r.join(", ")}`, "info")
        })
    }
    loadConsents() {
        let e = xt();
        Re(e);
        let {
            consentModes: t
        } = $e(e);
        if (Fe(t, Number(E.get()), A.get()), je("default", t), ze(e, t), !e) return;
        for (let s in e || {}) {
            let r = s;
            if (e[r]) {
                let a = R.gtmEvent(r);
                He(a)
            }
        }
        l.alert(`The following consents were loaded from the stored cookies: ${JSON.stringify(e)}`, "info"), Ue(e), Tt() && (kt(), l.alert("Previously denied cookies have been deleted.", "info"))
    }
    async applyConsents() {
        let e = wt();
        await be(e)
    }
    updateConsents(e, t) {
        let o = { ...e,
                essential: !0
            },
            s = C.get();
        Object.keys(s).forEach(p => {
            let F = p;
            s[F].length === 0 && (o[F] = !1)
        });
        let r = Ue(o),
            i = Ye();
        St(i, _.get(), Number(E.get()), A.get());
        let a = {},
            c = [];
        for (let p of r) {
            let F = o[p],
                S = F ? "granted" : "denied";
            if (p === "marketing" && (a.ad_storage = S, a.ad_user_data = S, a.ad_personalization = S), p === "analytics" && (a.analytics_storage = S), p === "personalization" && (a.functionality_storage = S, a.personalization_storage = S), F) {
                let Ke = R.gtmEvent(p);
                c.push(Ke)
            }
        }
        Fe(a, Number(E.get()), A.get()), je("update", a), c.length > 0 && c.forEach(p => He(p)), window.dataLayer.push({
            event: "fs-consent-consentModeUpdate"
        }), ze(o, a);
        let m = $.get();
        m && dt({
            action: t,
            endpoint: m,
            id: i,
            consents: _.get(),
            bannerText: Q.get() || ""
        }), r.length && (At(Number(E.get()), A.get()), this.applyConsents(), l.alert(`The following consents were updated: ${r.join(", ")}`, "info"));
        let O = $e(o);
        Re(O ? .consents), this.emit("updateconsents", O)
    }
};
var ne = class {
    constructor() {
        this.consentController = new te, this.initComponents()
    }
    async initComponents() {
        await I(), Pt();
        let e = b("banner");
        if (e) this.banner = new M(e);
        else {
            l.alert('No [fs-consent-element="banner"] element was found, it is required to have it!', "error");
            return
        }
        let t = b("preferences");
        t ? this.preferences = new M(t) : l.alert('No [fs-consent-element="preferences"] element was found, did you want to use the Preferences component?', "info");
        let o = b("fixed-preferences");
        o ? this.manager = new M(o) : l.alert('No [fs-consent-element="fixed-preferences"] element was found, did you want to use the Manager component?', "info");
        let {
            manager: s,
            banner: r
        } = this;
        ht.get() ? s ? .open() : r ? .open(), this.listenEvents()
    }
    listenEvents() {
        let {
            allow: e,
            deny: t,
            submit: o
        } = ut, s = ["banner", "manager", "preferences"], {
            consentController: r,
            banner: i,
            manager: a
        } = this;
        document.addEventListener("click", c => this.handleMouseAndKeyboard(c)), document.addEventListener("keydown", c => this.handleMouseAndKeyboard(c)), vt(i ? .element), r.on("updateconsents", () => {
            s.forEach(c => this[c] ? .form ? .updateCheckboxes())
        }), s.forEach(c => {
            this[c] ? .on("allow", () => {
                l.alert(`Allow button was clicked in the ${c} component.`, "info"), r.updateConsents(T, e)
            }), this[c] ? .on("deny", () => {
                l.alert(`Deny button was clicked in the ${c} component.`, "info"), r.updateConsents(G, t)
            }), this[c] ? .on("formsubmit", m => {
                l.alert(`Consents Form was submitted in the ${c} component with the following consents: ${JSON.stringify(m)}`, "info"), r.updateConsents(m, o)
            }), c !== "manager" && this[c] ? .on("close", () => {
                l.alert(`The ${c} component was closed.`, "info"), U.get() === "informational" && (l.alert(`All cookies were accepted because the mode is set to ${U.get()}.`, "warning"), r.updateConsents(T, e)), a ? .open()
            })
        })
    }
    handleMouseAndKeyboard(e) {
        let {
            target: t
        } = e, {
            banner: o,
            manager: s,
            preferences: r
        } = this;
        if (!(t instanceof Element) || "key" in e && e.key !== "Enter") return;
        let i = f("open-preferences"),
            a = t.closest(i),
            c = b("fixed-preferences") ? .contains(t);
        (a || c) && (o ? .close(), s ? .close(), r ? .open(), l.alert("Open Preferences button was clicked.", "info"))
    }
    getStore() {
        return {
            mode: U.get(),
            cookieMaxAge: E.get(),
            endpoint: $.get(),
            componentsSource: De.get(),
            domain: A.get(),
            confirmed: ye.get(),
            consents: y.get(),
            bannerText: Q.get(),
            scripts: J.get(),
            iFrames: X.get(),
            allConsents: _.get()
        }
    }
    destroy() {
        document.removeEventListener("click", this.handleMouseAndKeyboard), document.removeEventListener("keydown", this.handleMouseAndKeyboard), this.consentController ? .clearListeners(), this.banner ? .clearListeners(), this.preferences ? .clearListeners(), this.manager ? .clearListeners(), this.banner ? .element ? .remove(), this.preferences ? .element ? .remove(), this.manager ? .element ? .remove(), l.alert("FsCookieConsent instance destroyed.", "info")
    }
    async activateAllElements() {
        let e = Z.get();
        await be(e), l.alert("All elements have been activated.", "info")
    }
};
var on = async n => ({
    init: async () => {
        We(tt) || (await I(), await et());
        let t = Number(n ? .expires) < 1 ? 120 : Number(n ? .expires),
            o = { ...n,
                expires: String(t)
            };
        if (V.set(o), gt(), new URLSearchParams(window.location.search).get("fs-consent") === "debugger" && l.activate(), /bot|crawler|spider|crawling/i.test(navigator.userAgent)) return;
        document.head.insertAdjacentHTML("beforeend", Ot);
        let {
            source: i,
            resetix: a
        } = V.get();
        i && await It(i, a), Ut();
        let c = new ne;
        return await I(), {
            result: c,
            destroy() {
                c.destroy()
            }
        }
    },
    version: "1.0.0"
});
export {
    Oe as ELEMENTS, Ie as SETTINGS, on as init, Ft as version
};
/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/