import {
    a as g
} from "./dist/chunk-J7NTLVPZ.js";
import {
    o as f
} from "./dist/chunk-53D3RZFS.js";
import {
    a as C
} from "./dist/chunk-2BCRTFNV.js";
import {
    d as y,
    g as w
} from "./dist/chunk-333FNKAA.js";
import "./dist/chunk-FB3NVMMC.js";
var h = async (t, e, o = !0) => {
    if (!t) return [];
    let i = o ? f.accountsApiProduction : f.accountsApiDev,
        s = async l => {
            let p = new URL(i);
            p.searchParams.set("componentId", l), p.searchParams.set("siteId", t);
            try {
                let m = await fetch(p.toString());
                return m.ok ? (await m.json()).valid : (console.error(`Failed to fetch Finsweet Components license for [${l}].`, m.statusText), !1)
            } catch (m) {
                return console.error("Error fetching data:", m), !1
            }
        },
        r = e.map(async l => {
            let p = await s(l),
                m = C[l] || null;
            return {
                app: l,
                licensed: p,
                name: m ? .name
            }
        });
    return await Promise.all(r)
};
var L = (t, e = 10, o = 100) => new Promise((i, s) => {
        let n = 0,
            r = () => {
                let a = document.querySelector(t);
                a ? i(a) : n < e ? (n += 1, setTimeout(r, o)) : s(new Error(`Element with selector "${t}" not found after ${e} retries`))
            };
        r()
    }),
    d = async (t, e) => {
        if (e) try {
            console.warn("Finsweet Component is in preview mode. Configs will be fetched from the Component Configurator.");
            let s = await L(`[fs-${e}-previewmodeconfigs]`);
            if (!s) throw new Error(`Failed to initialize ${e} in preview mode. Ensure preview element contains [fs-${e}-previewmodeconfigs] attribute.`);
            let n = s ? .getAttribute(`fs-${e}-previewmodeconfigs`) || "{}",
                r = s ? .getAttribute(`fs-${e}-instance`);
            if (!r || !n) throw new Error(`Failed to initialize ${e} in preview mode. Ensure preview element contains [fs-${e}-instance] attribute.`);
            let a = atob(n),
                l = JSON.parse(a),
                p = {
                    [e]: {
                        instances: {
                            [r]: l
                        }
                    }
                };
            return console.log(`Preview mode: Initialising ${e} preview configs from [fs-${e}-previewmodeconfigs]:`, p), w.set(!0), p
        } catch (s) {
            return console.error(s), {}
        }
        if (!t) throw new Error("Failed to initialize Finsweet Component. No core script tag found.");
        let o = t ? .getAttribute("fs-components-src");
        if (!o) throw new Error("Failed to initialize Finsweet Component. No fs-components-src attribute found on script tag.");
        if (o === "dev") return console.warn("You are currently in development mode. Configs will be fetched from the Component Configurator for preview mode."), {
            dev: !0
        };
        let i = await
        import (o);
        if (!t) throw new Error('No script tag found with type="module" and fs-components-src attribute');
        return w.set(!1), i
    };
var u = g({
        fetched: !1,
        license: []
    }),
    k = async (t, e, o) => {
        let i = await y(e) || {};
        if (Object.keys(i).length > 0) {
            let {
                destroy: s = null
            } = t, {
                licensed: n = !1,
                name: r = "this Component"
            } = o ? .find(a => a.app === e && a.licensed) || {};
            !n && s && (console.error(`Finsweet Components - ${r} is not available for production use. Please purchase a plan at https://my.finsweet.com/subscriptions/create/finsweet-components.`), s())
        }
    };
u.subscribe(t => {
    let {
        license: e,
        fetched: o
    } = t;
    if (!o || !window ? .fsComponents ? .solutions) return;
    let {
        solutions: i
    } = window.fsComponents;
    Object.keys(i).forEach(n => {
        let r = i[n];
        k(r, n, e)
    })
});
var F = async t => {
    if (!window ? .fsComponents || u.get().fetched) return;
    let {
        scripts: e = []
    } = window.fsComponents;
    if (e.length === 0) return;
    let o = document.documentElement.getAttribute("data-wf-site"),
        i = await h(o, t, !0);
    u.set({
        fetched: !0,
        license: i
    })
};
var c, b = async (t, e) => {
    let {
        scripts: o = []
    } = window.fsComponents, [i = null] = o;
    if (document.querySelector('script[type="module"][fs-components-src="dev"]') ? c = await d(null, t) : !c && i && (c = await d(i)), !i) throw new Error('No script tag found with type="module" and fs-components-src attribute');
    switch (t) {
        case "consent":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-WTMF2Y4V.js");
                return n(c.consent)
            }
        case "slider":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-B5M4OB76.js");
                return n(c.slider)
            }
        case "marquee":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-GDSGDYMK.js");
                return n(c.marquee)
            }
        case "tooltip":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-JELSDRNJ.js");
                return n(c.tooltip)
            }
        case "cursor":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-6QB6FEUB.js");
                return n(c.cursor)
            }
        case "numbercount":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-BOMA7QY7.js");
                return n(c.numbercount)
            }
        case "rangeslider":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-MMBK2MCD.js");
                return n(c.rangeslider)
            }
        case "tabs":
            {
                let {
                    init: n
                } = await
                import ("./dist/src-UV26OFDV.js");
                return n(c.tabs)
            }
        default:
            throw `Finsweet Component "${t}" is not supported.`
    }
};
var S = () => {
        let t = ["font-size: 1.25rem", "font-weight: bold", "line-height: 1.3", "font-family: Graphik web, sans-serif", "color: #111", "background: #51ffcb", "padding: 0.75rem 1rem", "border-radius: 0.25rem"].join(";"),
            e = "https://finsweet.com/components";
        console.log(`



%cFinsweet Components`, t), console.log(`This site uses Finsweet Components. Visit ${e} to learn more.




`)
    },
    $ = () => {
        S();
        let {
            fsComponents: t
        } = window;
        if (t && !Array.isArray(t)) {
            v();
            return
        }
        let e = Array.isArray(t) ? t : [],
            o = [],
            i = document.querySelector('script[type="module"][fs-components-src="dev"]');
        if (i) o = [i];
        else {
            let s = document.querySelectorAll(`script[type="module"][src="${import.meta.url}"]`);
            o = [...Array.from(s)]
        }
        window.fsComponents = window.FsComponents = {
            scripts: o,
            solutions: {},
            process: new Set,
            load: E,
            push(...s) {
                for (let [n, r] of s) this.solutions[n] ? .loading ? .then(r)
            },
            destroy() {
                for (let s in this.solutions) this.solutions[s] ? .destroy ? .()
            }
        }, v(), window.fsComponents.push(...e)
    },
    v = () => {
        let [t] = window.fsComponents.scripts, o = (t ? .getAttribute("fs-components-installed") || "") ? .split(",");
        if (o.length === 0) {
            console.error("No Finsweet Components installed in this project.");
            return
        }
        for (let s of o) E(s);
        window.location.href.includes("webflow.io") || window.location.href.includes("webflow-ext.com") || window.location.href.includes("localhost") || F(o)
    },
    E = async t => {
        if (window.fsComponents.process.has(t)) return;
        window.fsComponents.process.add(t);
        let e = window.fsComponents.solutions[t] || = {};
        e.loading = new Promise(o => {
            e.resolve = i => {
                o(i), delete e.resolve
            }
        });
        try {
            let {
                init: o,
                version: i
            } = await b(t), s = await o();
            if (!s) return;
            let {
                result: n,
                destroy: r
            } = s;
            return e.version = i, e.destroy = () => {
                r ? .(), window.fsComponents.process.delete(t)
            }, e.restart = () => (e.destroy ? .(), window.fsComponents.load(t)), e.resolve ? .(n), n
        } catch (o) {
            console.error(o)
        }
    };
$();