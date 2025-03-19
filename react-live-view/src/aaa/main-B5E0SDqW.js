const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["context-slice-translator-qmoymbh3krCm.js", "router-D2A3v33YTGz9.js", "common-BQgXWrz2O5Bt.js", "context-slice-graphql-B0DOwuSsR7A9.js", "context-slice-extensibility-DszXVyiwekEk.js", "context-slice-atlas-DERNaGnp9qDM.js", "context-slice-newReportify-S4lhejIMbeaC.js", "context-slice-metrics-dyxi7iJePk2a.js", "context-slice-manifestFetch-B2JNiWFnQss2.js", "render-common-CBDTO_er9s96.js", "assets/render-common-CCZBw7ZsekEq.css"]))) => i.map(i => d[i]);
var Tn = Object.defineProperty;
var In = (o, r, i) => r in o ? Tn(o, r, {enumerable: !0, configurable: !0, writable: !0, value: i}) : o[r] = i;
var x = (o, r, i) => In(o, typeof r != "symbol" ? r + "" : r, i);
import {
  D as tt,
  a as $,
  bL as kn,
  bM as te,
  bN as Mn,
  bO as Dn,
  bP as j,
  bQ as xn,
  bR as qn,
  F as Fn,
  W as Zt,
  M as re,
  bS as $n,
  bT as Bn,
  bU as Un,
  bV as Oe,
  bD as Hn,
  bW as Vn,
  bX as jn,
  a4 as er,
  bY as Gn,
  _ as J,
  bZ as Kn,
  ad as q,
  b_ as zn,
  b$ as tr,
  m as Qn,
  G as Wn,
  o as Xn,
  c0 as Je,
  Y as rt,
  c1 as Jn,
  S as Bt,
  R as Yn,
  r as Zn,
  p as ee,
  w as ea,
  c2 as ta,
  c3 as ra,
  c4 as nt,
  l as rr,
  O as nr,
  aX as ar,
  c5 as na,
  P as aa,
  B as Ut,
  bF as Re,
  c6 as at,
  c7 as Ye,
  c8 as Ht,
  c9 as ia,
  ca as oa,
  cb as sa,
  cc as ua,
  cd as ca,
  aR as la,
  ce as da,
  cf as fa,
  cg as pa,
  ch as ha,
  N as ga,
  ci as ir,
  cj as ma,
  aM as va,
  ck as _a,
  cl as or,
  cm as ya,
  cn as Sa,
  co as Ea,
  cp as ba,
  cq as Aa,
  cr as wa,
  cs as La,
  ct as Oa,
  cu as Ca,
  cv as Ra,
  cw as Pa,
  cx as Na,
  cy as Ta,
  cz as Ia,
  I as Ge,
  E as ka,
  cA as Ma,
  cB as Da,
  cC as xa
} from "./common-BQgXWrz2O5Bt.js";

if (typeof window < "u") {
  String.prototype.replaceAll || (String.prototype.replaceAll = function (r, i) {
    let s = this;
    for (; s !== (s = s.replace(r, i));) ;
    return s
  }), String.prototype.at || (String.prototype.at = function (r) {
    return this.slice(r, r + 1)
  }), self.setImmediate || (self.setImmediate = setTimeout, self.clearImmediate = clearTimeout), self.requestIdleCallback || (self.requestIdleCallback = setTimeout, self.cancelIdleCallback = clearTimeout), Object.hasOwn || (Object.hasOwn = Function.prototype.call.bind(Object.prototype.hasOwnProperty)), String.prototype.matchAll || (String.prototype.matchAll = function (r) {
    const i = new RegExp(r, r.flags || "g");
    let s;
    const c = [];
    for (; s = i.exec(this);) c.push(s);
    return c
  }), Array.prototype.at || (Array.prototype.at = function (r) {
    return r < 0 && (r += this.length), this[r]
  });
  const o = Object.getPrototypeOf(Uint8Array.prototype);
  o.at || (o.at = function (r) {
    return r < 0 && (r += this.length), this[r]
  }), Promise.any || (Promise.any = function (r) {
    return new Promise((i, s) => {
      let c = 0, p;

      function l(d) {
        p = p || d, --c || s(p)
      }

      for (const d of r) Promise.resolve(d, ++c).then(i, l)
    })
  }), URL.parse || (URL.parse = (r, i) => {
    try {
      return new URL(String(r), i === void 0 ? void 0 : String(i))
    } catch {
      return null
    }
  }), URL.canParse || (URL.canParse = (r, i) => URL.parse(r, i) != null)
}
const qa = console.error.bind(console), Fa = console.warn.bind(console),
  sr = [/this component is not accepted by Hot Loader/, /Report not sent due to releaseStage/];
console.error = (...o) => {
  const [r, i] = o;
  typeof r == "string" && sr.some(s => s.test(r)) || typeof r == "string" && /React does not recognize/.test(r) && i === "testID" || qa(...o)
};
console.warn = (...o) => {
  const [r] = o;
  typeof r == "string" && sr.some(i => i.test(r)) || Fa(...o)
};
if (typeof Node == "function" && Node.prototype) {
  const o = Node.prototype.removeChild;
  Node.prototype.removeChild = function (i) {
    return i.parentNode !== this ? i : o.apply(this, Array.from(arguments))
  };
  const r = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function (i, s) {
    return s && s.parentNode !== this ? i : r.apply(this, Array.from(arguments))
  }
}
const Vt = "https://web-sourcemaps.shopify.io/";
(async () => {
  if (tt().isShopifyStaff) try {
    if (!(await fetch(Vt, {credentials: "include"})).ok) throw new Error("not authenticated with source map service")
  } catch {
    console.log("%cShopify Developers", "font-size: 16px; font-weight: bold; color: #96bf48;"), console.log(["To debug in production, please authenticate with the source map service", `%cAuth: ${Vt}`, "Docs: https://github.com/Shopify/web-sourcemaps/blob/main/README.md"].join(`

`), "font-weight: bold;")
  }
})();
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) s(c);
  new MutationObserver(c => {
    for (const p of c) if (p.type === "childList") for (const l of p.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && s(l)
  }).observe(document, {childList: !0, subtree: !0});

  function i(c) {
    const p = {};
    return c.integrity && (p.integrity = c.integrity), c.referrerPolicy && (p.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? p.credentials = "include" : c.crossOrigin === "anonymous" ? p.credentials = "omit" : p.credentials = "same-origin", p
  }

  function s(c) {
    if (c.ep) return;
    c.ep = !0;
    const p = i(c);
    fetch(c.href, p)
  }
})();

class $a extends Mn {
  lifecycleEvent(r) {
    if (r.type !== Dn.TimeToLastByte) return super.lifecycleEvent(r)
  }
}

const Ba = $(({ensure: o, registerCleanup: r}) => new $a(s => {
  let c;
  o(["router"]).then(({router: p}) => {
    const l = p.subscribe(d => {
      d.navigation.state === "loading" && c !== d.navigation.location.pathname && (c = d.navigation.location.pathname, s.start({target: c}))
    });
    r(() => {
      l()
    })
  }).catch(p => {
    throw p
  }), s.on("navigation", async p => {
    if (p.result !== kn.Finished) return;
    const l = Math.max(0, performance.now() - p.timeToComplete);
    te("navigation_usable", {start: l, duration: p.timeToUsable}), te("navigation_complete", {
      start: l,
      duration: p.timeToComplete
    })
  })
})), Ua = [qn, Fn, Zt];

class Ha {
  constructor(r) {
    x(this, "ensure");
    x(this, "initTime", performance.now());
    x(this, "observer", null);
    x(this, "skipPageStableMetricsEmission", !1);
    x(this, "pageLoadComplete", !1);
    x(this, "navigationStartAt", 0);
    x(this, "intervalId");
    x(this, "routerStates", []);
    x(this, "isUserInputDetected", !1);
    x(this, "redirectNavigationStartAt");
    x(this, "loadingEndAt");
    x(this, "pageStableAt");
    x(this, "routerLoadersStartAt");
    x(this, "routerLoadersEndAt");
    x(this, "additionalLabels", {});
    x(this, "entryCollection", {});
    x(this, "pageStableDurationListeners", []);
    x(this, "pageLoaderDurationListeners", []);
    x(this, "routeTimings", new Map);
    x(this, "visitedRoutes", new Set);
    x(this, "flagLabelCache", null);
    this.ensure = r, this.recordAdminLoadedMetric(), this.reset()
  }

  reset(r = 0, i) {
    this.navigationStartAt = r, this.checkForInterruptedNavigation(), this.cleanup(), i && this.routerStates.push(i), this.checkNavigationComplete(), this.resetPerformanceObserver()
  }

  addRouteTimings(r, i, s, c) {
    this.routeTimings.has(r) || this.routeTimings.set(r, {});
    const p = this.routeTimings.get(r);
    p && !p[i] && (p[i] = {start: s, end: c})
  }

  redirect(r) {
    this.routerStates.push(r), this.redirectNavigationStartAt || (this.redirectNavigationStartAt = performance.now())
  }

  setSkipPageStableMetricsEmission(r) {
    this.skipPageStableMetricsEmission = r
  }

  setAdditionalLabels(r) {
    this.additionalLabels = r
  }

  loadingFinished() {
    this.loadingEndAt || (this.loadingEndAt = performance.now())
  }

  addPageStableDurationListener(r) {
    this.pageStableDurationListeners.push(r), r(this.pageStableDuration)
  }

  removePageStableDurationListener(r) {
    this.pageStableDurationListeners = this.pageStableDurationListeners.filter(i => i !== r)
  }

  addPageLoaderDurationListener(r) {
    this.pageLoaderDurationListeners.push(r), r(this.pageLoaderDuration)
  }

  removePageLoaderDurationListener(r) {
    this.pageLoaderDurationListeners = this.pageLoaderDurationListeners.filter(i => i !== r)
  }

  get pageStableDuration() {
    if (this.pageStableAt) return this.pageStableAt - this.navigationStartAt
  }

  get pageLoaderDuration() {
    let r;
    typeof this.prefetchingEndAt < "u" && typeof this.prefetchingStartAt < "u" && (r = this.prefetchingEndAt - this.prefetchingStartAt);
    let i;
    return typeof this.routerLoadersStartAt < "u" && typeof this.routerLoadersEndAt < "u" && (i = this.routerLoadersEndAt - this.routerLoadersStartAt), r ?? i
  }

  setReactLoadersMarkers(r, i) {
    typeof this.routerLoadersStartAt > "u" && typeof this.routerLoadersEndAt > "u" && (this.routerLoadersStartAt = r, this.routerLoadersEndAt = i, this.pageLoaderDurationListeners.forEach(s => s(this.pageLoaderDuration)))
  }

  get prefetchingStartAt() {
    var i;
    let r = 1 / 0;
    for (const s of this.routeTimings.values()) (i = s.prefetch) != null && i.start && (r = Math.min(r, s.prefetch.start));
    return r === 1 / 0 ? void 0 : r
  }

  get prefetchingEndAt() {
    var i;
    let r = 0;
    for (const s of this.routeTimings.values()) (i = s.prefetch) != null && i.end && (r = Math.max(r, s.prefetch.end));
    return r === 0 ? void 0 : r
  }

  get aggregateLoaderDuration() {
    const r = Array.from(this.routeTimings.values());
    if (r.length === 0) return;
    const i = r.flatMap(c => {
      var p, l, d, g;
      return [(p = c.componentAssets) == null ? void 0 : p.start, (l = c.loaderAssets) == null ? void 0 : l.start, ((d = c.prefetch) == null ? void 0 : d.start) ?? ((g = c.loader) == null ? void 0 : g.start)].filter(Boolean)
    }), s = r.flatMap(c => {
      var p, l, d, g;
      return [(p = c.componentAssets) == null ? void 0 : p.end, (l = c.loaderAssets) == null ? void 0 : l.end, ((d = c.prefetch) == null ? void 0 : d.end) ?? ((g = c.loader) == null ? void 0 : g.end)].filter(Boolean)
    });
    if (!(i.length === 0 || s.length === 0)) return {
      start: Math.min(...i, this.routerLoadersStartAt ?? 1 / 0),
      end: Math.max(...s)
    }
  }

  get navigationStart() {
    return j(this.navigationStartAt)
  }

  get browserBackgroundedAt() {
    var r, i;
    return (i = (r = this.entryCollection.visibilityState) == null ? void 0 : r.filter(s => s.name === "hidden")[0]) == null ? void 0 : i.startTime
  }

  get firstRedirectRouterState() {
    return this.routerStates.filter(r => {
      var i, s;
      return (s = (i = r.navigation.location) == null ? void 0 : i.state) == null ? void 0 : s._isRedirect
    })[0]
  }

  get delayMetrics() {
    const i = Math.max(this.initTime, this.navigationStartAt);
    return performance.now() - i < 2500
  }

  cleanup() {
    this.pageLoadComplete = !1, clearInterval(this.intervalId), this.entryCollection = {}, this.routerStates = [], this.isUserInputDetected = !1, this.redirectNavigationStartAt = void 0, this.loadingEndAt = void 0, this.additionalLabels = {}, this.routerLoadersStartAt = void 0, this.routerLoadersEndAt = void 0, this.pageStableDurationListeners.forEach(r => r()), this.pageLoaderDurationListeners.forEach(r => r()), xn()
  }

  resetPerformanceObserver() {
    var r;
    (r = this.observer) == null || r.disconnect(), this.observer = new PerformanceObserver(this.collectPerformanceEntries.bind(this)), this.observer.observe({entryTypes: ["first-input", "layout-shift", "resource", "visibility-state"]})
  }

  async getFlagLabels() {
    if (this.flagLabelCache !== null) return this.flagLabelCache;
    const {flags: r} = await this.ensure(["flags"]), i = {};
    for (const s of Ua) i[`flag_${s}_enabled`] = r.get(s);
    return this.flagLabelCache = i, i
  }

  async recordAdminLoadedMetric() {
    const {metrics: r} = await this.ensure(["metrics"]);
    r.record(re.AdminLoaded, 1)
  }

  createSpansForRouteTimings() {
    var r, i, s, c, p, l, d, g, y, A;
    for (const [v, _] of this.routeTimings.entries()) (r = _.loader) != null && r.end && ((i = _.loader) != null && i.start) && te(`loader(${v})`, {
      end: _.loader.end,
      start: _.loader.start
    }), (s = _.componentAssets) != null && s.end && ((c = _.componentAssets) != null && c.start) && te(`componentAssets(${v})`, {
      end: _.componentAssets.end,
      start: _.componentAssets.start
    }), (p = _.loaderAssets) != null && p.end && ((l = _.loaderAssets) != null && l.start) && te(`loaderAssets(${v})`, {
      end: _.loaderAssets.end,
      start: _.loaderAssets.start
    }), (d = _.actionAssets) != null && d.end && ((g = _.actionAssets) != null && g.start) && te(`actionAssets(${v})`, {
      end: _.actionAssets.end,
      start: _.actionAssets.start
    }), (y = _.prefetch) != null && y.end && ((A = _.prefetch) != null && A.start) && te(`prefetch(${v})`, {
      end: _.prefetch.end,
      start: _.prefetch.start
    })
  }

  checkNavigationComplete() {
    this.intervalId = setInterval(async () => {
      var p, l, d, g, y, A, v, _, b;
      ((p = this.entryCollection.firstInput) == null ? void 0 : p[0]) && (this.isUserInputDetected = !0);
      const i = (d = (l = this.entryCollection.resource) == null ? void 0 : l.filter(({
                                                                                        initiatorType: L,
                                                                                        name: C
                                                                                      }) => !["beacon", "iframe"].includes(L) && !C.includes("type=mutation"))) == null ? void 0 : d.at(-1),
        s = !i || $n(i), c = !Bn();
      if (s && c) {
        i && this.createSpan("resource_complete", i);
        const L = (g = this.entryCollection.graphqlQueries) == null ? void 0 : g.at(-1);
        L && this.createSpan("graphql_queries_complete", L);
        const C = (y = this.entryCollection.images) == null ? void 0 : y.at(-1);
        C && this.createSpan("images_complete", C);
        const T = (A = this.entryCollection.scripts) == null ? void 0 : A.at(-1);
        T && this.createSpan("scripts_complete", T);
        const D = (v = this.entryCollection.layoutShift) == null ? void 0 : v.at(0);
        D && this.createSpan("first_layout_shift", D);
        const F = (_ = this.entryCollection.layoutShift) == null ? void 0 : _.at(-1);
        F && this.createSpan("layout_shift_complete", F);
        const G = (b = this.entryCollection.layoutShift) == null ? void 0 : b.sort((X, H) => H.value - X.value).at(0);
        G && this.createSpan("largest_layout_shift", G);
        const K = Un([L, C, T], F), ne = Oe(K) ? K.responseEnd : (K == null ? void 0 : K.paintTime) ?? 0;
        if (K && this.createSpan("page_load_complete", K, ne), !ne && this.delayMetrics) return;
        const Y = this.additionalLabels.normalizedPathname ?? "unknown", Z = !this.visitedRoutes.has(Y);
        Z && this.visitedRoutes.add(Y), this.emitMetrics({
          isCancelledNavigation: !1,
          firstFramePaintedAt: j(D == null ? void 0 : D.paintTime),
          graphqlQueriesEndAt: j(L == null ? void 0 : L.responseEnd),
          imagesEndAt: j(C == null ? void 0 : C.responseEnd),
          scriptsEndAt: j(T == null ? void 0 : T.responseEnd),
          layoutShiftEndAt: j(F == null ? void 0 : F.paintTime),
          pageStableAt: j(ne)
        }, {
          isFirstExecution: Z,
          largestLayoutShiftEndAt: j(G == null ? void 0 : G.startTime)
        }), this.pageStableAt = ne, this.pageStableDurationListeners.forEach(X => X(this.pageStableDuration)), this.pageLoadComplete = !0, clearInterval(this.intervalId)
      }
    }, 250)
  }

  createSpan(r, i, s) {
    te(r, {start: this.navigationStartAt, end: s ?? (Oe(i) ? i.responseEnd : i.paintTime)})
  }

  collectPerformanceEntries(r) {
    this.entryCollection.graphqlQueries || (this.entryCollection.graphqlQueries = []), this.entryCollection.scripts || (this.entryCollection.scripts = []), this.entryCollection.images || (this.entryCollection.images = []);
    for (const i of r.getEntries()) {
      const s = Hn(i.entryType);
      this.entryCollection[s] || (this.entryCollection[s] = []), !((Oe(i) ? i.responseEnd : i.startTime) < this.navigationStartAt) && (s === "layoutShift" ? this.addLayoutShiftEntry(i) : this.entryCollection[s].push(i), Oe(i) && (i.initiatorType === "fetch" && /\/api\/shopify.+type=query|\/queries/.test(i.name) ? this.entryCollection.graphqlQueries.push(i) : i.initiatorType === "script" ? this.entryCollection.scripts.push(i) : i.initiatorType === "img" && this.entryCollection.images.push(i)))
    }
  }

  addLayoutShiftEntry(r) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        var s;
        const i = performance.now();
        r.paintTime = i, (s = this.entryCollection.layoutShift) == null || s.push(r)
      })
    })
  }

  checkForInterruptedNavigation() {
    !this.pageLoadComplete && this.navigationStartAt && this.emitMetrics({
      isCancelledNavigation: !0,
      navigationCancelledAt: j(performance.now())
    })
  }

  async emitMetrics(r, i = {isFirstExecution: !1}) {
    var D, F, G, K;
    this.createSpansForRouteTimings();
    const {
      browser: s,
      metrics: c,
      monorail: p,
      serverData: l
    } = await this.ensure(["browser", "metrics", "monorail", "serverData"]);
    this.loadingEndAt && te("loading_complete", {start: this.navigationStartAt, end: this.loadingEndAt});
    const d = j(this.navigationStartAt), g = this.navigationStartAt === 0, y = !!this.firstRedirectRouterState,
      A = Vn() ?? 200, v = g && document.referrer ? document.referrer : void 0, {
        manifestRouteId: _,
        normalizedPathname: b,
        previousNormalizedPathname: L,
        sliceName: C
      } = this.additionalLabels;
    if (!r.isCancelledNavigation) {
      const ne = await this.getFlagLabels(), Y = {
        isFullPageNavigation: g,
        isRedirectNavigation: y,
        slice: C ?? "unknown",
        manifestRouteId: _ ?? "unknown",
        normalizedPathname: b ?? "unknown", ...ne
      };
      for (const [X, H] of this.routeTimings.entries()) H.loaderAssets && c.record(re.PageLoaderAssetsDuration, Math.round(H.loaderAssets.end - H.loaderAssets.start), {
        ...Y,
        manifestRouteId: X
      }), H.componentAssets && c.record(re.PageComponentAssetsDuration, Math.round(H.componentAssets.end - H.componentAssets.start), {
        ...Y,
        manifestRouteId: X
      });
      if (typeof this.loadingEndAt < "u") {
        if (i.isFirstExecution) {
          const H = this.aggregateLoaderDuration;
          H && (te("aggregate_loader_duration", {
            start: H.start,
            end: H.end
          }), c.record(re.PageAggregateLoaderDuration, Math.round(H.end - H.start), {
            ...Y,
            isFirstExecution: i.isFirstExecution
          }))
        }
        let X = "none";
        this.prefetchingEndAt && (X = this.prefetchingEndAt <= this.navigationStartAt ? "full" : "partial"), c.record(re.PageBlockingLoaderDuration, Math.round(this.loadingEndAt - this.navigationStartAt), {
          ...Y,
          isFirstExecution: i.isFirstExecution,
          prefetched: X
        })
      }
      const Z = {...Y, statusCode: A};
      c.record(re.PageView, 1, Z), typeof r.pageStableAt < "u" && !this.skipPageStableMetricsEmission && c.record(re.PageViewStableDuration, r.pageStableAt - d, Z), typeof i.largestLayoutShiftEndAt < "u" && c.record(re.PageLargestLayoutShiftDuration, i.largestLayoutShiftEndAt - d, Z)
    }
    const T = {
      browserBackgroundedAt: j(this.browserBackgroundedAt),
      connectionType: Gn(),
      deployStage: l.deployStage,
      identityUuid: er(),
      isFullPageNavigation: g,
      isMobileWebviewNavigation: jn(s),
      isRedirectNavigation: y,
      isStoreAdminPage: !0,
      isUserInputDetected: this.isUserInputDetected,
      loadingStartAt: j(this.routerLoadersStartAt),
      loadingEndAt: j(this.loadingEndAt),
      isFirstLoaderExecution: i.isFirstExecution,
      navigationStartAt: d,
      normalizedPathname: b,
      pathname: window.location.pathname,
      prefetchingEndAt: j(this.prefetchingEndAt),
      prefetchingStartAt: j(this.prefetchingStartAt),
      previousNormalizedPathname: L,
      previousPathname: (F = (D = this.routerStates[0]) == null ? void 0 : D.location) == null ? void 0 : F.pathname,
      redirectNavigationPathname: (K = (G = this.firstRedirectRouterState) == null ? void 0 : G.location) == null ? void 0 : K.pathname,
      redirectNavigationStartAt: j(this.redirectNavigationStartAt),
      referrer: v,
      sliceName: C,
      statusCode: A, ...r
    };
    this.skipPageStableMetricsEmission || p.produce({
      schemaId: "admin_navigation_performance/2.5",
      payload: T
    }), this.routeTimings.clear()
  }
}

const Va = $(({ensure: o}) => {
  const r = new Ha(o);
  let i;
  return o(["router"]).then(({router: s}) => {
    s.subscribe(c => {
      var p, l;
      if (c.navigation.state === "loading" && c.location.pathname !== c.navigation.location.pathname) (p = c.navigation.location.state) != null && p._isRedirect ? r.redirect(c) : r.reset(performance.now(), c), i = (l = s.getRouteInfo()) == null ? void 0 : l.pathPattern; else if (c.navigation.state === "idle") {
        const {pathPattern: d, manifestRouteId: g, sliceName: y} = s.getRouteInfo();
        r.setAdditionalLabels({
          manifestRouteId: g,
          normalizedPathname: d,
          previousNormalizedPathname: i,
          sliceName: y
        }), r.loadingFinished(), r.setSkipPageStableMetricsEmission(c.matches.some(({route: A}) => ["online-store:parent", "apps:old_app_parent"].includes(A.id)))
      }
    })
  }).catch(s => {
    throw s
  }), r
}), ja = $(({ensure: o}) => {
  const r = q([]);
  let i = 0;
  const s = new Map, c = [];
  let p;
  o(["i18n", "locale"]).then(async d => {
    const {getTranslatorFromContext: g} = await J(async () => {
      const {getTranslatorFromContext: y} = await import("./context-slice-translator-qmoymbh3krCm.js");
      return {getTranslatorFromContext: y}
    }, __vite__mapDeps([0, 1, 2]));
    p = g(d)
  }).catch(d => {
    throw d
  });
  const l = {
    get list() {
      return r.value
    }, show(d) {
      p && jt(d, p) && r.value.filter(g => jt(g, p)).length || typeof d.id < "u" && r.value.find(g => g.id === d.id) || (d.id = d.id ?? String(++i), r.value = r.value.concat(d))
    }, hide(d) {
      d ? r.value = r.value.filter(g => d.id !== g.id) : r.value = []
    }, setActionOptions(d, g) {
      s.set(d, g)
    }, clearActionOptions(d) {
      s.delete(d)
    }
  };
  return o(["router"]).then(({router: d}) => {
    d.subscribe(({navigation: g, actionData: y}) => {
      g.state === "submitting" ? c.length = 0 : Object.keys(y ?? {}).forEach(A => {
        const v = y == null ? void 0 : y[A];
        if (v != null && v.notification && !c.find(_ => Kn(v.notification, _))) {
          const _ = {content: v.notification.content, error: v.notification.error, tone: v.notification.defaultTone},
            b = v.notification.key;
          let L = _;
          b && s.has(b) && (L = {..._, ...s.get(b)}), l.show(L), c.push(v.notification)
        }
      })
    })
  }).catch(d => {
    throw d
  }), l
});

function jt({error: o, content: r}, i) {
  return o && (r === i.translate("Common.serverError") || r === i.translate("Common.maskedDataMutationError"))
}

function Ga({fetch: o, middleware: r}) {
  return new Ka(o, r)
}

class Ka {
  constructor(r, i) {
    x(this, "middleware");
    x(this, "fetch");
    this.middleware = i, typeof r == "function" ? this.fetch = r : this.fetch = zn(r)
  }

  query(r, {variables: i} = {}) {
    return (async () => {
      try {
        return await this.run(r, {variables: i})
      } finally {
      }
    })()
  }

  async run(r, {variables: i} = {}) {
    const s = await this.fetch({document: r, variables: i ?? {}}, this.middleware);
    if (s instanceof tr) throw s;
    const {data: c, error: p} = s;
    return c ? {data: c} : {error: p}
  }
}

const za = rt(403), Qa = rt(401), Wa = rt(404);

function Xa(o, r, i) {
  if (!(i && o instanceof Error && i(o)) && o instanceof tr) {
    const s = Qn(o.response, o.responseText);
    if (s instanceof Wn) {
      const c = Xn(s);
      return r(c, s.reason), s
    }
  }
}

const Ja = o => {
  if (o instanceof Je) {
    const r = o == null ? void 0 : o.response.status, i = o == null ? void 0 : o.responseText;
    return r === Wa || r === za && i !== "CSRF" || r === Qa && i.includes("[TFA]")
  }
  return !1
};

function Ya(o, r) {
  if (o instanceof Error && !(o instanceof Je) || !o.context) return;
  const {request: i, stats: s} = o.context;
  let c;
  o instanceof Je ? c = o.response : c = o.context.response;
  const p = !(o instanceof Error) && typeof o.data == "object", l = p ? o.extensions : void 0,
    d = o != null && !(o instanceof Error) && o.error && o.error instanceof Jn ? o.error.errors.map(({
                                                                                                       message: _,
                                                                                                       path: b,
                                                                                                       extensions: L
                                                                                                     }) => ({
      message: _,
      path: b && Array.isArray(b) ? b.join(",") : void 0,
      extensions: L
    })) : void 0, g = c instanceof Response && c.headers.get(Bt.RequestId) || void 0,
    y = c instanceof Response && c.headers.get(Bt.Profile) || void 0, A = c instanceof Response ? c.status : void 0,
    v = c instanceof Response ? c.url : void 0;
  r({
    graphQLClientType: "GraphQL-Lite",
    name: i.operationName ?? "Unknown",
    url: v,
    status: A,
    success: p,
    errorResponse: o != null && o instanceof Error && o,
    errors: d,
    requestId: g,
    duration: s.duration,
    start: s.start,
    end: s.end,
    resultLength: p ? JSON.stringify(o).length : void 0,
    extensions: l,
    request: {query: i.document, variables: i.variables},
    profileUrl: y
  })
}

const Za = $(({serverData: o, unified: r, errorLogger: i, performance: s}) => {
  const c = o.isUnifiedApp, p = Yn({
    apiEndpointPath: c ? `/api/shopify/${r.storeHandle}` : "/admin/internal/web/graphql/core",
    host: location.hostname,
    csrfToken: o.csrfToken,
    getRedirectUrl(g) {
      var y;
      if (c) {
        const A = new URLSearchParams, v = (y = o == null ? void 0 : o.identityUser) == null ? void 0 : y.email;
        return v && A.append("login_hint", v), A.append("returnPath", location.pathname), A.append("errorHint", "client_api_error"), `/login?${A.toString()}`
      }
      return typeof g == "string" ? g : g(encodeURIComponent(location.href))
    },
    errorLogger: i,
    performance: s
  }), l = Zn({csrfToken: o.csrfToken, buildVersion: o.buildVersion});
  return Ga({
    fetch: {uri: `https://${p.host}${p.apiEndpointPath}`, headers: l}, middleware: {
      response: g => {
        Ya(g, p.onOperation), Xa(g, p.onRedirect, Ja)
      }
    }
  })
}), ei = $(() => {
  const o = q(0), r = q(0), i = ee(() => o.value > 0), s = ee(() => {
    const l = o.value + r.value, d = l - o.value;
    return l && d / l
  });
  let c;

  function p() {
    clearTimeout(c), o.value = 0, r.value = 0
  }

  return {
    get loading() {
      return i.value
    }, get progress() {
      return s.value
    }, start() {
      clearTimeout(c), o.value++
    }, stop() {
      const l = o.value - 1;
      l < 0 || (r.value++, o.value = l, l === 0 && (c = setTimeout(p, 100)))
    }, reset: p
  }
}), ti = $(() => {
  const o = q([]);
  return {
    get globallyDismissedHomeItemHandles() {
      return o.value
    }, dismissHomeItemGlobally(r) {
      o.value.includes(r) || (o.value = [...o.value, r])
    }, undoDismissHomeItemGlobally(r) {
      o.value = o.value.filter(i => i !== r)
    }
  }
}), ri = $(() => {
  const o = q([]), r = q(!1);

  function i(s, c) {
    const p = {...s};
    for (const l in c) c[l] && (p[l] = c[l]);
    return p
  }

  return {
    add(s) {
      const c = o.value.slice(), p = c.findIndex(l => l.id === s.id);
      p >= 0 ? c[p] = {...c[p], ...s} : c.push(s), o.value = c
    }, update(s, c) {
      o.value = o.value.map(p => (p.id === s && (p.status = i(p.status, c)), p))
    }, remove(s) {
      o.value = o.value.filter(c => !s(c))
    }, removeById(s) {
      o.value = o.value.filter(c => c.id !== s)
    }, get items() {
      return o.value
    }, expand() {
      r.value = !1
    }, collapse() {
      r.value = !0
    }, get isCollapsed() {
      return r.value
    }
  }
}), ni = () => {
  const o = q(!1), r = q([]);
  return {
    get activeSidebar() {
      return r.value[r.value.length - 1]
    }, get isExpanded() {
      return this.activeSidebar !== void 0 && !o.value
    }, get isHidden() {
      return o.value
    }, open(i) {
      r.value = [...r.value.filter(s => s !== i), i]
    }, close(i) {
      const s = r.value.filter(c => c !== i);
      s.length !== r.value.length && (r.value = s)
    }, show() {
      o.value = !1
    }, hide() {
      o.value = !0
    }
  }
}, ai = $(ni);
var Ke = {exports: {}}, Gt;

function ii() {
  return Gt || (Gt = 1, function (o, r) {
    (function (i) {
      o.exports = i()
    })(function () {
      var i = ["navigation", "request", "process", "log", "user", "state", "error", "manual"], s = function (e, t, a) {
          for (var n = a, u = 0, f = e.length; u < f; u++) n = t(n, e[u], u, e);
          return n
        }, c = function (e, t) {
          return s(e, function (a, n, u, f) {
            return t(n, u, f) ? a.concat(n) : a
          }, [])
        }, p = function (e, t) {
          return s(e, function (a, n, u, f) {
            return a === !0 || n === t
          }, !1)
        }, l = function (e) {
          return Object.prototype.toString.call(e) === "[object Array]"
        }, d = !{toString: null}.propertyIsEnumerable("toString"),
        g = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        y = function (e) {
          var t = [], a;
          for (a in e) Object.prototype.hasOwnProperty.call(e, a) && t.push(a);
          if (!d) return t;
          for (var n = 0, u = g.length; n < u; n++) Object.prototype.hasOwnProperty.call(e, g[n]) && t.push(g[n]);
          return t
        }, A = function (e, t) {
          return e === void 0 && (e = 1), function (a) {
            return typeof a == "number" && parseInt("" + a, 10) === a && a >= e && a <= t
          }
        }, v = function (e) {
          return typeof e == "function" || l(e) && c(e, function (t) {
            return typeof t == "function"
          }).length === e.length
        }, _ = function (e) {
          return typeof e == "string" && !!e.length
        }, b = {}, L = function () {
          return {unhandledExceptions: !0, unhandledRejections: !0}
        };
      b.schema = {
        apiKey: {
          defaultValue: function () {
            return null
          }, message: "is required", validate: _
        }, appVersion: {
          defaultValue: function () {
          }, message: "should be a string", validate: function (e) {
            return e === void 0 || _(e)
          }
        }, appType: {
          defaultValue: function () {
          }, message: "should be a string", validate: function (e) {
            return e === void 0 || _(e)
          }
        }, autoDetectErrors: {
          defaultValue: function () {
            return !0
          }, message: "should be true|false", validate: function (e) {
            return e === !0 || e === !1
          }
        }, enabledErrorTypes: {
          defaultValue: function () {
            return L()
          },
          message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
          allowPartialObject: !0,
          validate: function (e) {
            if (typeof e != "object" || !e) return !1;
            var t = y(e), a = y(L());
            return !(c(t, function (n) {
              return p(a, n)
            }).length < t.length || c(y(e), function (n) {
              return typeof e[n] != "boolean"
            }).length > 0)
          }
        }, onError: {
          defaultValue: function () {
            return []
          }, message: "should be a function or array of functions", validate: v
        }, onSession: {
          defaultValue: function () {
            return []
          }, message: "should be a function or array of functions", validate: v
        }, onBreadcrumb: {
          defaultValue: function () {
            return []
          }, message: "should be a function or array of functions", validate: v
        }, endpoints: {
          defaultValue: function () {
            return {notify: "https://notify.bugsnag.com", sessions: "https://sessions.bugsnag.com"}
          }, message: "should be an object containing endpoint URLs { notify, sessions }", validate: function (e) {
            return e && typeof e == "object" && _(e.notify) && _(e.sessions) && c(y(e), function (t) {
              return !p(["notify", "sessions"], t)
            }).length === 0
          }
        }, autoTrackSessions: {
          defaultValue: function (e) {
            return !0
          }, message: "should be true|false", validate: function (e) {
            return e === !0 || e === !1
          }
        }, enabledReleaseStages: {
          defaultValue: function () {
            return null
          }, message: "should be an array of strings", validate: function (e) {
            return e === null || l(e) && c(e, function (t) {
              return typeof t == "string"
            }).length === e.length
          }
        }, releaseStage: {
          defaultValue: function () {
            return "production"
          }, message: "should be a string", validate: function (e) {
            return typeof e == "string" && e.length
          }
        }, maxBreadcrumbs: {
          defaultValue: function () {
            return 25
          }, message: "should be a number ≤100", validate: function (e) {
            return A(0, 100)(e)
          }
        }, enabledBreadcrumbTypes: {
          defaultValue: function () {
            return i
          },
          message: "should be null or a list of available breadcrumb types (" + i.join(",") + ")",
          validate: function (e) {
            return e === null || l(e) && s(e, function (t, a) {
              return t === !1 ? t : p(i, a)
            }, !0)
          }
        }, context: {
          defaultValue: function () {
          }, message: "should be a string", validate: function (e) {
            return e === void 0 || typeof e == "string"
          }
        }, user: {
          defaultValue: function () {
            return {}
          }, message: "should be an object with { id, email, name } properties", validate: function (e) {
            return e === null || e && s(y(e), function (t, a) {
              return t && p(["id", "email", "name"], a)
            }, !0)
          }
        }, metadata: {
          defaultValue: function () {
            return {}
          }, message: "should be an object", validate: function (e) {
            return typeof e == "object" && e !== null
          }
        }, logger: {
          defaultValue: function () {
          }, message: "should be null or an object with methods { debug, info, warn, error }", validate: function (e) {
            return !e || e && s(["debug", "info", "warn", "error"], function (t, a) {
              return t && typeof e[a] == "function"
            }, !0)
          }
        }, redactedKeys: {
          defaultValue: function () {
            return ["password"]
          }, message: "should be an array of strings|regexes", validate: function (e) {
            return l(e) && e.length === c(e, function (t) {
              return typeof t == "string" || t && typeof t.test == "function"
            }).length
          }
        }, plugins: {
          defaultValue: function () {
            return []
          }, message: "should be an array of plugin objects", validate: function (e) {
            return l(e) && e.length === c(e, function (t) {
              return t && typeof t == "object" && typeof t.load == "function"
            }).length
          }
        }, featureFlags: {
          defaultValue: function () {
            return []
          }, message: 'should be an array of objects that have a "name" property', validate: function (e) {
            return l(e) && e.length === c(e, function (t) {
              return t && typeof t == "object" && typeof t.name == "string"
            }).length
          }
        }
      };
      var C = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];
          for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
        }
        return e
      }, T = function (e, t) {
        return s(e, function (a, n, u, f) {
          return a.concat(t(n, u, f))
        }, [])
      };

      function D() {
        return D = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
          }
          return e
        }, D.apply(this, arguments)
      }

      var F = b.schema, G = {
        releaseStage: C({}, F.releaseStage, {
          defaultValue: function () {
            return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
          }
        }), appType: D({}, F.appType, {
          defaultValue: function () {
            return "browser"
          }
        }), logger: C({}, F.logger, {
          defaultValue: function () {
            return typeof console < "u" && typeof console.debug == "function" ? K() : void 0
          }
        })
      }, K = function () {
        var e = {}, t = console.log;
        return T(["debug", "info", "warn", "error"], function (a) {
          var n = console[a];
          e[a] = typeof n == "function" ? n.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]")
        }), e
      }, ne = function () {
        function e(a, n, u, f) {
          f === void 0 && (f = new Date), this.type = u, this.message = a, this.metadata = n, this.timestamp = f
        }

        var t = e.prototype;
        return t.toJSON = function () {
          return {type: this.type, name: this.message, timestamp: this.timestamp, metaData: this.metadata}
        }, e
      }(), Y = ne, Z = {};
      (function (e, t) {
        typeof Z == "object" ? Z = t() : e.StackFrame = t()
      })(this, function () {
        function e(E) {
          return !isNaN(parseFloat(E)) && isFinite(E)
        }

        function t(E) {
          return E.charAt(0).toUpperCase() + E.substring(1)
        }

        function a(E) {
          return function () {
            return this[E]
          }
        }

        var n = ["isConstructor", "isEval", "isNative", "isToplevel"], u = ["columnNumber", "lineNumber"],
          f = ["fileName", "functionName", "source"], h = ["args"], S = n.concat(u, f, h);

        function m(E) {
          if (E instanceof Object) for (var N = 0; N < S.length; N++) E.hasOwnProperty(S[N]) && E[S[N]] !== void 0 && this["set" + t(S[N])](E[S[N]])
        }

        m.prototype = {
          getArgs: function () {
            return this.args
          }, setArgs: function (E) {
            if (Object.prototype.toString.call(E) !== "[object Array]") throw new TypeError("Args must be an Array");
            this.args = E
          }, getEvalOrigin: function () {
            return this.evalOrigin
          }, setEvalOrigin: function (E) {
            if (E instanceof m) this.evalOrigin = E; else if (E instanceof Object) this.evalOrigin = new m(E); else throw new TypeError("Eval Origin must be an Object or StackFrame")
          }, toString: function () {
            var E = this.getFunctionName() || "{anonymous}", N = "(" + (this.getArgs() || []).join(",") + ")",
              M = this.getFileName() ? "@" + this.getFileName() : "",
              B = e(this.getLineNumber()) ? ":" + this.getLineNumber() : "",
              P = e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
            return E + N + M + B + P
          }
        };
        for (var O = 0; O < n.length; O++) m.prototype["get" + t(n[O])] = a(n[O]), m.prototype["set" + t(n[O])] = function (E) {
          return function (N) {
            this[E] = !!N
          }
        }(n[O]);
        for (var w = 0; w < u.length; w++) m.prototype["get" + t(u[w])] = a(u[w]), m.prototype["set" + t(u[w])] = function (E) {
          return function (N) {
            if (!e(N)) throw new TypeError(E + " must be a Number");
            this[E] = Number(N)
          }
        }(u[w]);
        for (var R = 0; R < f.length; R++) m.prototype["get" + t(f[R])] = a(f[R]), m.prototype["set" + t(f[R])] = function (E) {
          return function (N) {
            this[E] = String(N)
          }
        }(f[R]);
        return m
      });
      var X = {};
      (function (e, t) {
        typeof X == "object" ? X = t(Z) : e.ErrorStackParser = t(e.StackFrame)
      })(this, function (t) {
        var a = /(^|@)\S+\:\d+/, n = /^\s*at .*(\S+\:\d+|\(native\))/m, u = /^(eval@)?(\[native code\])?$/;
        return {
          parse: function (h) {
            if (typeof h.stacktrace < "u" || typeof h["opera#sourceloc"] < "u") return this.parseOpera(h);
            if (h.stack && h.stack.match(n)) return this.parseV8OrIE(h);
            if (h.stack) return this.parseFFOrSafari(h);
            throw new Error("Cannot parse given Error object")
          }, extractLocation: function (h) {
            if (h.indexOf(":") === -1) return [h];
            var S = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/, m = S.exec(h.replace(/[\(\)]/g, ""));
            return [m[1], m[2] || void 0, m[3] || void 0]
          }, parseV8OrIE: function (h) {
            var S = h.stack.split(`
`).filter(function (m) {
              return !!m.match(n)
            }, this);
            return S.map(function (m) {
              m.indexOf("(eval ") > -1 && (m = m.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
              var O = m.replace(/^\s+/, "").replace(/\(eval code/g, "("), w = O.match(/ (\((.+):(\d+):(\d+)\)$)/);
              O = w ? O.replace(w[0], "") : O;
              var R = O.split(/\s+/).slice(1), E = this.extractLocation(w ? w[1] : R.pop()), N = R.join(" ") || void 0,
                M = ["eval", "<anonymous>"].indexOf(E[0]) > -1 ? void 0 : E[0];
              return new t({functionName: N, fileName: M, lineNumber: E[1], columnNumber: E[2], source: m})
            }, this)
          }, parseFFOrSafari: function (h) {
            var S = h.stack.split(`
`).filter(function (m) {
              return !m.match(u)
            }, this);
            return S.map(function (m) {
              if (m.indexOf(" > eval") > -1 && (m = m.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), m.indexOf("@") === -1 && m.indexOf(":") === -1) return new t({functionName: m});
              var O = /((.*".+"[^@]*)?[^@]*)(?:@)/, w = m.match(O), R = w && w[1] ? w[1] : void 0,
                E = this.extractLocation(m.replace(O, ""));
              return new t({functionName: R, fileName: E[0], lineNumber: E[1], columnNumber: E[2], source: m})
            }, this)
          }, parseOpera: function (h) {
            return !h.stacktrace || h.message.indexOf(`
`) > -1 && h.message.split(`
`).length > h.stacktrace.split(`
`).length ? this.parseOpera9(h) : h.stack ? this.parseOpera11(h) : this.parseOpera10(h)
          }, parseOpera9: function (h) {
            for (var S = /Line (\d+).*script (?:in )?(\S+)/i, m = h.message.split(`
`), O = [], w = 2, R = m.length; w < R; w += 2) {
              var E = S.exec(m[w]);
              E && O.push(new t({fileName: E[2], lineNumber: E[1], source: m[w]}))
            }
            return O
          }, parseOpera10: function (h) {
            for (var S = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, m = h.stacktrace.split(`
`), O = [], w = 0, R = m.length; w < R; w += 2) {
              var E = S.exec(m[w]);
              E && O.push(new t({functionName: E[3] || void 0, fileName: E[2], lineNumber: E[1], source: m[w]}))
            }
            return O
          }, parseOpera11: function (h) {
            var S = h.stack.split(`
`).filter(function (m) {
              return !!m.match(a) && !m.match(/^Error created at/)
            }, this);
            return S.map(function (m) {
              var O = m.split("@"), w = this.extractLocation(O.pop()), R = O.shift() || "",
                E = R.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0, N;
              R.match(/\(([^\)]*)\)/) && (N = R.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
              var M = N === void 0 || N === "[arguments not available]" ? void 0 : N.split(",");
              return new t({functionName: E, args: M, fileName: w[0], lineNumber: w[1], columnNumber: w[2], source: m})
            }, this)
          }
        }
      });
      var H = X, ye = function (e, t, a, n) {
        var u = n && n.redactedKeys ? n.redactedKeys : [], f = n && n.redactedPaths ? n.redactedPaths : [];
        return JSON.stringify(Or(e, u, f), t, a)
      }, vr = 20, _r = 25e3, yr = 8, Se = "...";

      function Sr(e) {
        return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e))
      }

      function it(e) {
        return "[Throws: " + (e ? e.message : "?") + "]"
      }

      function Er(e, t) {
        for (var a = 0, n = e.length; a < n; a++) if (e[a] === t) return !0;
        return !1
      }

      function br(e, t) {
        for (var a = 0, n = e.length; a < n; a++) if (t.indexOf(e[a]) === 0) return !0;
        return !1
      }

      function Ar(e, t) {
        for (var a = 0, n = e.length; a < n; a++) if (typeof e[a] == "string" && e[a].toLowerCase() === t.toLowerCase() || e[a] && typeof e[a].test == "function" && e[a].test(t)) return !0;
        return !1
      }

      function wr(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
      }

      function Lr(e, t) {
        try {
          return e[t]
        } catch (a) {
          return it(a)
        }
      }

      function Or(e, t, a) {
        var n = [], u = 0;

        function f(h, S) {
          function m() {
            return S.length > yr && u > _r
          }

          if (u++, S.length > vr || m()) return Se;
          if (h === null || typeof h != "object") return h;
          if (Er(n, h)) return "[Circular]";
          if (n.push(h), typeof h.toJSON == "function") try {
            u--;
            var O = f(h.toJSON(), S);
            return n.pop(), O
          } catch (k) {
            return it(k)
          }
          var w = Sr(h);
          if (w) {
            u--;
            var R = f({name: h.name, message: h.message}, S);
            return n.pop(), R
          }
          if (wr(h)) {
            for (var E = [], N = 0, M = h.length; N < M; N++) {
              if (m()) {
                E.push(Se);
                break
              }
              E.push(f(h[N], S.concat("[]")))
            }
            return n.pop(), E
          }
          var B = {};
          try {
            for (var P in h) if (Object.prototype.hasOwnProperty.call(h, P)) {
              if (br(a, S.join(".")) && Ar(t, P)) {
                B[P] = "[REDACTED]";
                continue
              }
              if (m()) {
                B[P] = Se;
                break
              }
              B[P] = f(Lr(h, P), S.concat(P))
            }
          } catch {
          }
          return n.pop(), B
        }

        return f(e, [])
      }

      function ot(e, t, a, n) {
        if (typeof a == "string") {
          n === void 0 ? n = null : n !== null && typeof n != "string" && (n = ye(n));
          var u = t[a];
          if (typeof u == "number") {
            e[u] = {name: a, variant: n};
            return
          }
          e.push({name: a, variant: n}), t[a] = e.length - 1
        }
      }

      function Cr(e, t, a) {
        if (l(t)) {
          for (var n = 0; n < t.length; ++n) {
            var u = t[n];
            u === null || typeof u != "object" || ot(e, a, u.name, u.variant)
          }
          return e
        }
      }

      function Rr(e) {
        return T(c(e, Boolean), function (t) {
          var a = t.name, n = t.variant, u = {featureFlag: a};
          return typeof n == "string" && (u.variant = n), u
        })
      }

      function Pr(e, t, a) {
        var n = t[a];
        typeof n == "number" && (e[n] = null, delete t[a])
      }

      var oe = {add: ot, clear: Pr, merge: Cr, toEventApi: Rr}, Ee = function (e) {
        return !!e && (!!e.stack || !!e.stacktrace || !!e["opera#sourceloc"]) && typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) == "string" && e.stack !== e.name + ": " + e.message
      }, Nr = Tr;

      function Tr(e) {
        switch (Object.prototype.toString.call(e)) {
          case"[object Error]":
            return !0;
          case"[object Exception]":
            return !0;
          case"[object DOMException]":
            return !0;
          default:
            return e instanceof Error
        }
      }

      var be = Nr, Ir = function (e, t, a, n) {
        var u;
        if (t) {
          var f;
          if (a === null) return st(e, t);
          typeof a == "object" && (f = a), typeof a == "string" && (f = (u = {}, u[a] = n, u)), f && (t === "__proto__" || t === "constructor" || t === "prototype" || (e[t] || (e[t] = {}), e[t] = C({}, e[t], f)))
        }
      }, kr = function (e, t, a) {
        if (typeof t == "string") {
          if (!a) return e[t];
          if (e[t]) return e[t][a]
        }
      }, st = function (e, t, a) {
        if (typeof t == "string") {
          if (!a) {
            delete e[t];
            return
          }
          t === "__proto__" || t === "constructor" || t === "prototype" || e[t] && delete e[t][a]
        }
      }, ue = {add: Ir, get: kr, clear: st}, Ne = {};
      (function (e, t) {
        typeof Ne == "object" ? Ne = t(Z) : e.StackGenerator = t(e.StackFrame)
      })(this, function (e) {
        return {
          backtrace: function (a) {
            var n = [], u = 10;
            typeof a == "object" && typeof a.maxStackSize == "number" && (u = a.maxStackSize);
            for (var f = arguments.callee; f && n.length < u && f.arguments;) {
              for (var h = new Array(f.arguments.length), S = 0; S < h.length; ++S) h[S] = f.arguments[S];
              /function(?:\s+([\w$]+))+\s*\(/.test(f.toString()) ? n.push(new e({
                functionName: RegExp.$1 || void 0,
                args: h
              })) : n.push(new e({args: h}));
              try {
                f = f.caller
              } catch {
                break
              }
            }
            return n
          }
        }
      });

      function Te() {
        return Te = Object.assign ? Object.assign.bind() : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
          }
          return e
        }, Te.apply(this, arguments)
      }

      var ae = function () {
        function e(a, n, u, f, h) {
          u === void 0 && (u = []), f === void 0 && (f = xr()), this.apiKey = void 0, this.context = void 0, this.groupingHash = void 0, this.originalError = h, this._handledState = f, this.severity = this._handledState.severity, this.unhandled = this._handledState.unhandled, this.app = {}, this.device = {}, this.request = {}, this.breadcrumbs = [], this.threads = [], this._metadata = {}, this._features = [], this._featuresIndex = {}, this._user = {}, this._session = void 0, this._correlation = void 0, this.errors = [ct(a, n, e.__type, u)]
        }

        var t = e.prototype;
        return t.addMetadata = function (n, u, f) {
          return ue.add(this._metadata, n, u, f)
        }, t.setTraceCorrelation = function (n, u) {
          typeof n == "string" && (this._correlation = Te({traceId: n}, typeof u == "string" ? {spanId: u} : {}))
        }, t.getMetadata = function (n, u) {
          return ue.get(this._metadata, n, u)
        }, t.clearMetadata = function (n, u) {
          return ue.clear(this._metadata, n, u)
        }, t.addFeatureFlag = function (n, u) {
          u === void 0 && (u = null), oe.add(this._features, this._featuresIndex, n, u)
        }, t.addFeatureFlags = function (n) {
          oe.merge(this._features, n, this._featuresIndex)
        }, t.getFeatureFlags = function () {
          return oe.toEventApi(this._features)
        }, t.clearFeatureFlag = function (n) {
          oe.clear(this._features, this._featuresIndex, n)
        }, t.clearFeatureFlags = function () {
          this._features = [], this._featuresIndex = {}
        }, t.getUser = function () {
          return this._user
        }, t.setUser = function (n, u, f) {
          this._user = {id: n, email: u, name: f}
        }, t.toJSON = function () {
          return {
            payloadVersion: "4",
            exceptions: T(this.errors, function (n) {
              return C({}, n, {message: n.errorMessage})
            }),
            severity: this.severity,
            unhandled: this._handledState.unhandled,
            severityReason: this._handledState.severityReason,
            app: this.app,
            device: this.device,
            request: this.request,
            breadcrumbs: this.breadcrumbs,
            context: this.context,
            groupingHash: this.groupingHash,
            metaData: this._metadata,
            user: this._user,
            session: this._session,
            featureFlags: this.getFeatureFlags(),
            correlation: this._correlation
          }
        }, e
      }(), Mr = function (e) {
        var t = {
          file: e.fileName,
          method: Dr(e.functionName),
          lineNumber: e.lineNumber,
          columnNumber: e.columnNumber,
          code: void 0,
          inProject: void 0
        };
        return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t
      }, Dr = function (e) {
        return /^global code$/i.test(e) ? "global code" : e
      }, xr = function () {
        return {unhandled: !1, severity: "warning", severityReason: {type: "handledException"}}
      }, ut = function (e) {
        return typeof e == "string" ? e : ""
      };

      function ct(e, t, a, n) {
        return {
          errorClass: ut(e), errorMessage: ut(t), type: a, stacktrace: s(n, function (u, f) {
            var h = Mr(f);
            try {
              return JSON.stringify(h) === "{}" ? u : u.concat(h)
            } catch {
              return u
            }
          }, [])
        }
      }

      function lt(e) {
        return e.cause ? [e].concat(lt(e.cause)) : [e]
      }

      ae.getStacktrace = function (e, t, a) {
        if (Ee(e)) return H.parse(e).slice(t);
        try {
          return c(Ne.backtrace(), function (n) {
            return (n.functionName || "").indexOf("StackGenerator$$") === -1
          }).slice(1 + a)
        } catch {
          return []
        }
      }, ae.create = function (e, t, a, n, u, f) {
        u === void 0 && (u = 0);
        var h = ft(e, t, n, f), S = h[0], m = h[1], O;
        try {
          var w = ae.getStacktrace(S, m > 0 ? 1 + m + u : 0, 1 + u);
          O = new ae(S.name, S.message, w, a, e)
        } catch {
          O = new ae(S.name, S.message, [], a, e)
        }
        if (S.name === "InvalidError" && O.addMetadata("" + n, "non-error parameter", dt(e)), S.cause) {
          var R, E = lt(S).slice(1), N = T(E, function (M) {
            var B = be(M) && Ee(M) ? H.parse(M) : [], P = ft(M, !0, "error cause"), k = P[0];
            return k.name === "InvalidError" && O.addMetadata("error cause", dt(M)), ct(k.name, k.message, ae.__type, B)
          });
          (R = O.errors).push.apply(R, N)
        }
        return O
      };
      var dt = function (e) {
        return e === null ? "null" : e === void 0 ? "undefined" : e
      }, ft = function (e, t, a, n) {
        var u, f = 0, h = function (S) {
          var m = a === "error cause" ? "was" : "received";
          n && n.warn(a + " " + m + ' a non-error: "' + S + '"');
          var O = new Error(a + " " + m + ' a non-error. See "' + a + '" tab for more detail.');
          return O.name = "InvalidError", O
        };
        if (!t) be(e) ? u = e : (u = h(typeof e), f += 2); else switch (typeof e) {
          case"string":
          case"number":
          case"boolean":
            u = new Error(String(e)), f += 1;
            break;
          case"function":
            u = h("function"), f += 2;
            break;
          case"object":
            e !== null && be(e) ? u = e : e !== null && qr(e) ? (u = new Error(e.message || e.errorMessage), u.name = e.name || e.errorClass, f += 1) : (u = h(e === null ? "null" : "unsupported object"), f += 2);
            break;
          default:
            u = h("nothing"), f += 2
        }
        if (!Ee(u)) try {
          throw u
        } catch (S) {
          Ee(S) && (u = S, f = 1)
        }
        return [u, f]
      };
      ae.__type = "browserjs";
      var qr = function (e) {
        return (typeof e.name == "string" || typeof e.errorClass == "string") && (typeof e.message == "string" || typeof e.errorMessage == "string")
      }, Ie = ae, Fr = function (e, t, a) {
        var n = 0, u = function () {
          if (n >= e.length) return a(null, !0);
          t(e[n], function (f, h) {
            if (f) return a(f);
            if (h === !1) return a(null, !1);
            n++, u()
          })
        };
        u()
      }, $r = function (e, t, a, n) {
        var u = function (f, h) {
          if (typeof f != "function") return h(null);
          try {
            if (f.length !== 2) {
              var S = f(t);
              return S && typeof S.then == "function" ? S.then(function (m) {
                return setTimeout(function () {
                  return h(null, m)
                })
              }, function (m) {
                setTimeout(function () {
                  return a(m), h(null, !0)
                })
              }) : h(null, S)
            }
            f(t, function (m, O) {
              if (m) return a(m), h(null);
              h(null, O)
            })
          } catch (m) {
            a(m), h(null)
          }
        };
        Fr(e, u, n)
      }, pt = function (e, t, a, n) {
        for (var u = !1, f = e.slice(); !u && f.length;) try {
          u = f.pop()(t) === !1
        } catch (h) {
          n.error("Error occurred in " + a + " callback, continuing anyway…"), n.error(h)
        }
        return u
      }, ke = function (t, a) {
        var n = "000000000" + t;
        return n.substr(n.length - a)
      }, ht = typeof window == "object" ? window : self, gt = 0;
      for (var Br in ht) Object.hasOwnProperty.call(ht, Br) && gt++;
      var Ur = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        Hr = ke((Ur + navigator.userAgent.length).toString(36) + gt.toString(36), 4), mt = function () {
          return Hr
        }, fe = 0, Me = 4, Ae = 36, vt = Math.pow(Ae, Me);

      function _t() {
        return ke((Math.random() * vt << 0).toString(Ae), Me)
      }

      function Vr() {
        return fe = fe < vt ? fe : 0, fe++, fe - 1
      }

      function yt() {
        var e = "c", t = new Date().getTime().toString(Ae), a = ke(Vr().toString(Ae), Me), n = mt(), u = _t() + _t();
        return e + t + a + n + u
      }

      yt.fingerprint = mt;
      var jr = yt, Gr = function () {
        function e() {
          this.id = jr(), this.startedAt = new Date, this._handled = 0, this._unhandled = 0, this._user = {}, this.app = {}, this.device = {}
        }

        var t = e.prototype;
        return t.getUser = function () {
          return this._user
        }, t.setUser = function (n, u, f) {
          this._user = {id: n, email: u, name: f}
        }, t.toJSON = function () {
          return {id: this.id, startedAt: this.startedAt, events: {handled: this._handled, unhandled: this._unhandled}}
        }, t._track = function (n) {
          this[n._handledState.unhandled ? "_unhandled" : "_handled"] += 1
        }, e
      }(), De = Gr, Kr = oe.add, zr = oe.clear, xe = oe.merge, ie = function () {
      }, Qr = function () {
        function e(a, n, u, f) {
          var h = this;
          n === void 0 && (n = b.schema), u === void 0 && (u = []), this._notifier = f, this._config = {}, this._schema = n, this._delivery = {
            sendSession: ie,
            sendEvent: ie
          }, this._logger = {
            debug: ie,
            info: ie,
            warn: ie,
            error: ie
          }, this._plugins = {}, this._breadcrumbs = [], this._session = null, this._metadata = {}, this._featuresIndex = {}, this._features = [], this._context = void 0, this._user = {}, this._cbs = {
            e: [],
            s: [],
            sp: [],
            b: []
          }, this.Client = e, this.Event = Ie, this.Breadcrumb = Y, this.Session = De, this._config = this._configure(a, u), T(u.concat(this._config.plugins), function (O) {
            O && h._loadPlugin(O)
          }), this._depth = 1;
          var S = this, m = this.notify;
          this.notify = function () {
            return m.apply(S, arguments)
          }
        }

        var t = e.prototype;
        return t.addMetadata = function (n, u, f) {
          return ue.add(this._metadata, n, u, f)
        }, t.getMetadata = function (n, u) {
          return ue.get(this._metadata, n, u)
        }, t.clearMetadata = function (n, u) {
          return ue.clear(this._metadata, n, u)
        }, t.addFeatureFlag = function (n, u) {
          u === void 0 && (u = null), Kr(this._features, this._featuresIndex, n, u)
        }, t.addFeatureFlags = function (n) {
          xe(this._features, n, this._featuresIndex)
        }, t.clearFeatureFlag = function (n) {
          zr(this._features, this._featuresIndex, n)
        }, t.clearFeatureFlags = function () {
          this._features = [], this._featuresIndex = {}
        }, t.getContext = function () {
          return this._context
        }, t.setContext = function (n) {
          this._context = n
        }, t._configure = function (n, u) {
          var f = s(u, function (O, w) {
            return w && w.configSchema ? C({}, O, w.configSchema) : O
          }, this._schema), h = s(y(f), function (O, w) {
            var R = f[w].defaultValue(n[w]);
            if (n[w] !== void 0) {
              var E = f[w].validate(n[w]);
              E ? f[w].allowPartialObject ? O.config[w] = C(R, n[w]) : O.config[w] = n[w] : (O.errors[w] = f[w].message, O.config[w] = R)
            } else O.config[w] = R;
            return O
          }, {errors: {}, config: {}}), S = h.errors, m = h.config;
          if (f.apiKey) {
            if (!m.apiKey) throw new Error("No Bugsnag API Key set");
            /^[0-9a-f]{32}$/i.test(m.apiKey) || (S.apiKey = "should be a string of 32 hexadecimal characters")
          }
          return this._metadata = C({}, m.metadata), xe(this._features, m.featureFlags, this._featuresIndex), this._user = C({}, m.user), this._context = m.context, m.logger && (this._logger = m.logger), m.onError && (this._cbs.e = this._cbs.e.concat(m.onError)), m.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(m.onBreadcrumb)), m.onSession && (this._cbs.s = this._cbs.s.concat(m.onSession)), y(S).length && this._logger.warn(Wr(S, n)), m
        }, t.getUser = function () {
          return this._user
        }, t.setUser = function (n, u, f) {
          this._user = {id: n, email: u, name: f}
        }, t._loadPlugin = function (n) {
          var u = n.load(this);
          return n.name && (this._plugins["~" + n.name + "~"] = u), this
        }, t.getPlugin = function (n) {
          return this._plugins["~" + n + "~"]
        }, t._setDelivery = function (n) {
          this._delivery = n(this)
        }, t.startSession = function () {
          var n = new De;
          n.app.releaseStage = this._config.releaseStage, n.app.version = this._config.appVersion, n.app.type = this._config.appType, n._user = C({}, this._user);
          var u = pt(this._cbs.s, n, "onSession", this._logger);
          return u ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, n)
        }, t.addOnError = function (n, u) {
          u === void 0 && (u = !1), this._cbs.e[u ? "unshift" : "push"](n)
        }, t.removeOnError = function (n) {
          this._cbs.e = c(this._cbs.e, function (u) {
            return u !== n
          })
        }, t._addOnSessionPayload = function (n) {
          this._cbs.sp.push(n)
        }, t.addOnSession = function (n) {
          this._cbs.s.push(n)
        }, t.removeOnSession = function (n) {
          this._cbs.s = c(this._cbs.s, function (u) {
            return u !== n
          })
        }, t.addOnBreadcrumb = function (n, u) {
          u === void 0 && (u = !1), this._cbs.b[u ? "unshift" : "push"](n)
        }, t.removeOnBreadcrumb = function (n) {
          this._cbs.b = c(this._cbs.b, function (u) {
            return u !== n
          })
        }, t.pauseSession = function () {
          return this._sessionDelegate.pauseSession(this)
        }, t.resumeSession = function () {
          return this._sessionDelegate.resumeSession(this)
        }, t.leaveBreadcrumb = function (n, u, f) {
          if (n = typeof n == "string" ? n : "", f = typeof f == "string" && p(i, f) ? f : "manual", u = typeof u == "object" && u !== null ? u : {}, !!n) {
            var h = new Y(n, u, f), S = pt(this._cbs.b, h, "onBreadcrumb", this._logger);
            if (S) {
              this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");
              return
            }
            this._breadcrumbs.push(h), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs))
          }
        }, t._isBreadcrumbTypeEnabled = function (n) {
          var u = this._config.enabledBreadcrumbTypes;
          return u === null || p(u, n)
        }, t.notify = function (n, u, f) {
          f === void 0 && (f = ie);
          var h = Ie.create(n, !0, void 0, "notify()", this._depth + 1, this._logger);
          this._notify(h, u, f)
        }, t._notify = function (n, u, f) {
          var h = this;
          if (f === void 0 && (f = ie), n.app = C({}, n.app, {
            releaseStage: this._config.releaseStage,
            version: this._config.appVersion,
            type: this._config.appType
          }), n.context = n.context || this._context, n._metadata = C({}, n._metadata, this._metadata), n._user = C({}, n._user, this._user), n.breadcrumbs = this._breadcrumbs.slice(), xe(n._features, this._features, n._featuresIndex), this._config.enabledReleaseStages !== null && !p(this._config.enabledReleaseStages, this._config.releaseStage)) return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), f(null, n);
          var S = n.severity, m = function (w) {
            h._logger.error("Error occurred in onError callback, continuing anyway…"), h._logger.error(w)
          }, O = [].concat(this._cbs.e).concat(u);
          $r(O, n, m, function (w, R) {
            if (w && m(w), !R) return h._logger.debug("Event not sent due to onError callback"), f(null, n);
            h._isBreadcrumbTypeEnabled("error") && e.prototype.leaveBreadcrumb.call(h, n.errors[0].errorClass, {
              errorClass: n.errors[0].errorClass,
              errorMessage: n.errors[0].errorMessage,
              severity: n.severity
            }, "error"), S !== n.severity && (n._handledState.severityReason = {type: "userCallbackSetSeverity"}), n.unhandled !== n._handledState.unhandled && (n._handledState.severityReason.unhandledOverridden = !0, n._handledState.unhandled = n.unhandled), h._session && (h._session._track(n), n._session = h._session), h._delivery.sendEvent({
              apiKey: n.apiKey || h._config.apiKey,
              notifier: h._notifier,
              events: [n]
            }, function (E) {
              return f(E, n)
            })
          })
        }, e
      }(), Wr = function (e, t) {
        var a = new Error(`Invalid configuration
` + T(y(e), function (n) {
          return "  - " + n + " " + e[n] + ", got " + Xr(t[n])
        }).join(`

`));
        return a
      }, Xr = function (e) {
        switch (typeof e) {
          case"string":
          case"number":
          case"object":
            return JSON.stringify(e);
          default:
            return String(e)
        }
      }, qe = Qr, ce = {}, St = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
      ce.event = function (e, t) {
        var a = ye(e, null, null, {redactedPaths: St, redactedKeys: t});
        return a.length > 1e6 && (e.events[0]._metadata = {
          notifier: `WARNING!
Serialized payload was ` + a.length / 1e6 + `MB (limit = 1MB)
metadata was removed`
        }, a = ye(e, null, null, {redactedPaths: St, redactedKeys: t})), a
      }, ce.session = function (e, t) {
        var a = ye(e, null, null);
        return a
      };
      var Fe = {};
      Fe = function (e, t) {
        return t === void 0 && (t = window), {
          sendEvent: function (a, n) {
            n === void 0 && (n = function () {
            });
            var u = Et(e._config, "notify", "4", t), f = ce.event(a, e._config.redactedKeys), h = new t.XDomainRequest;
            h.onload = function () {
              n(null)
            }, h.onerror = function () {
              var S = new Error("Event failed to send");
              e._logger.error("Event failed to send…", S), f.length > 1e6 && e._logger.warn("Event oversized (" + (f.length / 1e6).toFixed(2) + " MB)"), n(S)
            }, h.open("POST", u), setTimeout(function () {
              try {
                h.send(f)
              } catch (S) {
                e._logger.error(S), n(S)
              }
            }, 0)
          }, sendSession: function (a, n) {
            n === void 0 && (n = function () {
            });
            var u = Et(e._config, "sessions", "1", t), f = new t.XDomainRequest;
            f.onload = function () {
              n(null)
            }, f.open("POST", u), setTimeout(function () {
              try {
                f.send(ce.session(a, e._config.redactedKeys))
              } catch (h) {
                e._logger.error(h), n(h)
              }
            }, 0)
          }
        }
      };
      var Et = function (e, t, a, n) {
        var u = JSON.parse(JSON.stringify(new Date)), f = Jr(e.endpoints[t], n.location.protocol);
        return f + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + a + "&sentAt=" + encodeURIComponent(u)
      }, Jr = Fe._matchPageProtocol = function (e, t) {
        return t === "http:" ? e.replace(/^https:/, "http:") : e
      }, Yr = function (e, t) {
        return t === void 0 && (t = window), {
          sendEvent: function (a, n) {
            n === void 0 && (n = function () {
            });
            try {
              var u = e._config.endpoints.notify, f = new t.XMLHttpRequest, h = ce.event(a, e._config.redactedKeys);
              f.onreadystatechange = function () {
                if (f.readyState === t.XMLHttpRequest.DONE) {
                  var S = f.status;
                  if (S === 0 || S >= 400) {
                    var m = new Error("Request failed with status " + S);
                    e._logger.error("Event failed to send…", m), h.length > 1e6 && e._logger.warn("Event oversized (" + (h.length / 1e6).toFixed(2) + " MB)"), n(m)
                  } else n(null)
                }
              }, f.open("POST", u), f.setRequestHeader("Content-Type", "application/json"), f.setRequestHeader("Bugsnag-Api-Key", a.apiKey || e._config.apiKey), f.setRequestHeader("Bugsnag-Payload-Version", "4"), f.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()), f.send(h)
            } catch (S) {
              e._logger.error(S)
            }
          }, sendSession: function (a, n) {
            n === void 0 && (n = function () {
            });
            try {
              var u = e._config.endpoints.sessions, f = new t.XMLHttpRequest;
              f.onreadystatechange = function () {
                if (f.readyState === t.XMLHttpRequest.DONE) {
                  var h = f.status;
                  if (h === 0 || h >= 400) {
                    var S = new Error("Request failed with status " + h);
                    e._logger.error("Session failed to send…", S), n(S)
                  } else n(null)
                }
              }, f.open("POST", u), f.setRequestHeader("Content-Type", "application/json"), f.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey), f.setRequestHeader("Bugsnag-Payload-Version", "1"), f.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()), f.send(ce.session(a, e._config.redactedKeys))
            } catch (h) {
              e._logger.error(h)
            }
          }
        }
      }, bt = new Date, Zr = function () {
        bt = new Date
      }, en = {
        name: "appDuration", load: function (e) {
          return e.addOnError(function (t) {
            var a = new Date;
            t.app.duration = a - bt
          }, !0), {reset: Zr}
        }
      }, tn = function (e) {
        return e === void 0 && (e = window), {
          load: function (t) {
            t.addOnError(function (a) {
              a.context === void 0 && (a.context = e.location.pathname)
            }, !0)
          }
        }
      }, $e = function (t, a) {
        var n = "000000000" + t;
        return n.substr(n.length - a)
      }, At = typeof window == "object" ? window : self, wt = 0;
      for (var rn in At) Object.hasOwnProperty.call(At, rn) && wt++;
      var nn = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        an = $e((nn + navigator.userAgent.length).toString(36) + wt.toString(36), 4), Lt = function () {
          return an
        }, pe = 0, Be = 4, we = 36, Ot = Math.pow(we, Be);

      function Ct() {
        return $e((Math.random() * Ot << 0).toString(we), Be)
      }

      function on() {
        return pe = pe < Ot ? pe : 0, pe++, pe - 1
      }

      function Rt() {
        var e = "c", t = new Date().getTime().toString(we), a = $e(on().toString(we), Be), n = Lt(), u = Ct() + Ct();
        return e + t + a + n + u
      }

      Rt.fingerprint = Lt;
      var sn = Rt, Pt = "bugsnag-anonymous-id", un = function (e) {
        try {
          var t = e.localStorage, a = t.getItem(Pt);
          return a && /^c[a-z0-9]{20,32}$/.test(a) || (a = sn(), t.setItem(Pt, a)), a
        } catch {
        }
      }, cn = function (e, t) {
        return e === void 0 && (e = navigator), t === void 0 && (t = window), {
          load: function (a) {
            var n = {
              locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
              userAgent: e.userAgent
            };
            t && t.screen && t.screen.orientation && t.screen.orientation.type ? n.orientation = t.screen.orientation.type : t && t.document && (n.orientation = t.document.documentElement.clientWidth > t.document.documentElement.clientHeight ? "landscape" : "portrait"), a._config.generateAnonymousId && (n.id = un(t)), a.addOnSession(function (u) {
              u.device = C({}, u.device, n), a._config.collectUserIp || Nt(u)
            }), a.addOnError(function (u) {
              u.device = C({}, u.device, n, {time: new Date}), a._config.collectUserIp || Nt(u)
            }, !0)
          }, configSchema: {
            generateAnonymousId: {
              validate: function (a) {
                return a === !0 || a === !1
              }, defaultValue: function () {
                return !0
              }, message: "should be true|false"
            }
          }
        }
      }, Nt = function (e) {
        var t = e.getUser();
        (!t || !t.id) && e.setUser(e.device.id)
      }, ln = function (e) {
        return e === void 0 && (e = window), {
          load: function (t) {
            t.addOnError(function (a) {
              a.request && a.request.url || (a.request = C({}, a.request, {url: e.location.href}))
            }, !0)
          }
        }
      }, dn = {
        load: function (e) {
          e._sessionDelegate = fn
        }
      }, fn = {
        startSession: function (e, t) {
          var a = e;
          return a._session = t, a._pausedSession = null, a._config.enabledReleaseStages !== null && !p(a._config.enabledReleaseStages, a._config.releaseStage) ? (a._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), a) : (a._delivery.sendSession({
            notifier: a._notifier,
            device: t.device,
            app: t.app,
            sessions: [{id: t.id, startedAt: t.startedAt, user: t._user}]
          }), a)
        }, resumeSession: function (e) {
          return e._session ? e : e._pausedSession ? (e._session = e._pausedSession, e._pausedSession = null, e) : e.startSession()
        }, pauseSession: function (e) {
          e._pausedSession = e._session, e._session = null
        }
      }, pn = {
        load: function (e) {
          e._config.collectUserIp || e.addOnError(function (t) {
            t._user && typeof t._user.id > "u" && delete t._user.id, t._user = C({id: "[REDACTED]"}, t._user), t.request = C({clientIp: "[REDACTED]"}, t.request)
          })
        }, configSchema: {
          collectUserIp: {
            defaultValue: function () {
              return !0
            }, message: "should be true|false", validate: function (e) {
              return e === !0 || e === !1
            }
          }
        }
      }, Tt = {};
      Tt.load = function (e) {
        var t = /^(local-)?dev(elopment)?$/.test(e._config.releaseStage);
        t || !e._isBreadcrumbTypeEnabled("log") || T(hn, function (a) {
          var n = console[a];
          console[a] = function () {
            for (var u = arguments.length, f = new Array(u), h = 0; h < u; h++) f[h] = arguments[h];
            e.leaveBreadcrumb("Console output", s(f, function (S, m, O) {
              var w = "[Unknown value]";
              try {
                w = String(m)
              } catch {
              }
              if (w === "[object Object]") try {
                w = JSON.stringify(m)
              } catch {
              }
              return S["[" + O + "]"] = w, S
            }, {severity: a.indexOf("group") === 0 ? "log" : a}), "log"), n.apply(console, f)
          }, console[a]._restore = function () {
            console[a] = n
          }
        })
      };
      var hn = c(["log", "debug", "info", "warn", "error"], function (e) {
        return typeof console < "u" && typeof console[e] == "function"
      }), It = 200, kt = 5e5, gn = function (e, t) {
        return e === void 0 && (e = document), t === void 0 && (t = window), {
          load: function (a) {
            if (!a._config.trackInlineScripts) return;
            var n = t.location.href, u = "", f = !!e.attachEvent,
              h = f ? e.readyState === "complete" : e.readyState !== "loading", S = function () {
                return e.documentElement.outerHTML
              };
            u = S();
            var m = e.onreadystatechange;
            e.onreadystatechange = function () {
              e.readyState === "interactive" && (u = S(), h = !0);
              try {
                m.apply(this, arguments)
              } catch {
              }
            };
            var O = null, w = function (P) {
              O = P
            }, R = function () {
              var P = e.currentScript || O;
              if (!P && !h) {
                var k = e.scripts || e.getElementsByTagName("script");
                P = k[k.length - 1]
              }
              return P
            }, E = function (P) {
              (!h || !u) && (u = S());
              var k = ["<!-- DOC START -->"].concat(u.split(`
`)), V = P - 1, U = Math.max(V - 3, 0), W = Math.min(V + 3, k.length);
              return s(k.slice(U, W), function (Q, he, je) {
                return Q[U + 1 + je] = he.length <= It ? he : he.substr(0, It), Q
              }, {})
            };
            a.addOnError(function (P) {
              P.errors[0].stacktrace = c(P.errors[0].stacktrace, function (Q) {
                return !/__trace__$/.test(Q.method)
              });
              var k = P.errors[0].stacktrace[0], V = function (Q) {
                return Q.replace(/#.*$/, "").replace(/\?.*$/, "")
              };
              if (!(k && k.file && V(k.file) !== V(n))) {
                var U = R();
                if (U) {
                  var W = U.innerHTML;
                  P.addMetadata("script", "content", W.length <= kt ? W : W.substr(0, kt)), k && k.lineNumber && (k.code = E(k.lineNumber))
                }
              }
            }, !0);
            var N = T(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function (P) {
              return Ue(t, P, function (k) {
                return B(k, function (V) {
                  return {
                    get: function () {
                      return V[0]
                    }, replace: function (U) {
                      V[0] = U
                    }
                  }
                })
              })
            }), M = N[0];
            T(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], function (P) {
              !t[P] || !t[P].prototype || !Object.prototype.hasOwnProperty.call(t[P].prototype, "addEventListener") || (Ue(t[P].prototype, "addEventListener", function (k) {
                return B(k, Mt)
              }), Ue(t[P].prototype, "removeEventListener", function (k) {
                return B(k, Mt, !0)
              }))
            });

            function B(P, k, V) {
              return V === void 0 && (V = !1), function () {
                var U = [].slice.call(arguments);
                try {
                  var W = k(U), Q = W.get();
                  if (V && P.apply(this, U), typeof Q != "function") return P.apply(this, U);
                  if (Q.__trace__) W.replace(Q.__trace__); else {
                    var he = R();
                    Q.__trace__ = function () {
                      w(he), M(function () {
                        w(null)
                      }, 0);
                      var Nn = Q.apply(this, arguments);
                      return w(null), Nn
                    }, Q.__trace__.__trace__ = Q.__trace__, W.replace(Q.__trace__)
                  }
                } catch {
                }
                if (P.apply) return P.apply(this, U);
                switch (U.length) {
                  case 1:
                    return P(U[0]);
                  case 2:
                    return P(U[0], U[1]);
                  default:
                    return P()
                }
              }
            }
          }, configSchema: {
            trackInlineScripts: {
              validate: function (a) {
                return a === !0 || a === !1
              }, defaultValue: function () {
                return !0
              }, message: "should be true|false"
            }
          }
        }
      };

      function Ue(e, t, a) {
        var n = e[t];
        if (!n) return n;
        var u = a(n);
        return e[t] = u, n
      }

      function Mt(e) {
        var t = !!e[1] && typeof e[1].handleEvent == "function";
        return {
          get: function () {
            return t ? e[1].handleEvent : e[1]
          }, replace: function (a) {
            t ? e[1].handleEvent = a : e[1] = a
          }
        }
      }

      var mn = function (e) {
        return e === void 0 && (e = window), {
          load: function (t) {
            "addEventListener" in e && t._isBreadcrumbTypeEnabled("user") && e.addEventListener("click", function (a) {
              var n, u;
              try {
                n = _n(a.target), u = Dt(a.target, e)
              } catch {
                n = "[hidden]", u = "[hidden]", t._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
              }
              t.leaveBreadcrumb("UI click", {targetText: n, targetSelector: u}, "user")
            }, !0)
          }
        }
      }, vn = /^\s*([^\s][\s\S]{0,139}[^\s])?\s*/;

      function _n(e) {
        var t = e.textContent || e.innerText || "";
        return !t && (e.type === "submit" || e.type === "button") && (t = e.value), t = t.replace(vn, "$1"), t.length > 140 ? t.slice(0, 135) + "(...)" : t
      }

      function Dt(e, t) {
        var a = [e.tagName];
        if (e.id && a.push("#" + e.id), e.className && e.className.length && a.push("." + e.className.split(" ").join(".")), !t.document.querySelectorAll || !Array.prototype.indexOf) return a.join("");
        try {
          if (t.document.querySelectorAll(a.join("")).length === 1) return a.join("")
        } catch {
          return a.join("")
        }
        if (e.parentNode.childNodes.length > 1) {
          var n = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
          a.push(":nth-child(" + n + ")")
        }
        return t.document.querySelectorAll(a.join("")).length === 1 ? a.join("") : e.parentNode ? Dt(e.parentNode, t) + " > " + a.join("") : a.join("")
      }

      var xt = {};
      xt = function (e) {
        e === void 0 && (e = window);
        var t = {
          load: function (a) {
            if ("addEventListener" in e && a._isBreadcrumbTypeEnabled("navigation")) {
              var n = function (u) {
                return function () {
                  return a.leaveBreadcrumb(u, {}, "navigation")
                }
              };
              e.addEventListener("pagehide", n("Page hidden"), !0), e.addEventListener("pageshow", n("Page shown"), !0), e.addEventListener("load", n("Page loaded"), !0), e.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0), e.addEventListener("load", function () {
                return e.addEventListener("popstate", n("Navigated back"), !0)
              }), e.addEventListener("hashchange", function (u) {
                var f = u.oldURL ? {
                  from: Le(u.oldURL, e),
                  to: Le(u.newURL, e),
                  state: Ft(e)
                } : {to: Le(e.location.href, e)};
                a.leaveBreadcrumb("Hash changed", f, "navigation")
              }, !0), e.history.replaceState && qt(a, e.history, "replaceState", e), e.history.pushState && qt(a, e.history, "pushState", e)
            }
          }
        };
        return t
      };
      var Le = function (e, t) {
        var a = t.document.createElement("A");
        return a.href = e, "" + a.pathname + a.search + a.hash
      }, yn = function (e, t, a, n) {
        var u = Le(e.location.href, e);
        return {title: a, state: t, prevState: Ft(e), to: n || u, from: u}
      }, qt = function (e, t, a, n) {
        var u = t[a];
        t[a] = function (f, h, S) {
          e.leaveBreadcrumb("History " + a, yn(n, f, h, S), "navigation"), typeof e.resetEventCount == "function" && e.resetEventCount(), e._config.autoTrackSessions && e.startSession(), u.apply(t, [f, h].concat(S !== void 0 ? S : []))
        }
      }, Ft = function (e) {
        try {
          return e.history.state
        } catch {
        }
      }, le = "request", Sn = function (e, t) {
        e === void 0 && (e = []), t === void 0 && (t = window);
        var a = {
          load: function (n) {
            if (!n._isBreadcrumbTypeEnabled("request")) return;
            var u = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(e);
            f(), m();

            function f() {
              if ("addEventListener" in t.XMLHttpRequest.prototype) {
                var R = t.XMLHttpRequest.prototype.open;
                t.XMLHttpRequest.prototype.open = function (N, M) {
                  var B = this, P = !1, k = function () {
                    return S(N, M)
                  }, V = function () {
                    return h(N, M, B.status)
                  };
                  P && (this.removeEventListener("load", V), this.removeEventListener("error", k)), this.addEventListener("load", V), this.addEventListener("error", k), P = !0, R.apply(this, arguments)
                }
              }
            }

            function h(R, E, N) {
              if (E === void 0) {
                n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                return
              }
              if (!(typeof E == "string" && p(u, E.replace(/\?.*$/, "")))) {
                var M = {status: N, request: R + " " + E};
                N >= 400 ? n.leaveBreadcrumb("XMLHttpRequest failed", M, le) : n.leaveBreadcrumb("XMLHttpRequest succeeded", M, le)
              }
            }

            function S(R, E) {
              if (E === void 0) {
                n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                return
              }
              typeof E == "string" && p(u, E.replace(/\?.*$/, "")) || n.leaveBreadcrumb("XMLHttpRequest error", {request: R + " " + E}, le)
            }

            function m() {
              if (!(!("fetch" in t) || t.fetch.polyfill)) {
                var R = t.fetch;
                t.fetch = function () {
                  var N = arguments, M = arguments[0], B = arguments[1], P, k = null;
                  return M && typeof M == "object" ? (k = M.url, B && "method" in B ? P = B.method : M && "method" in M && (P = M.method)) : (k = M, B && "method" in B && (P = B.method)), P === void 0 && (P = "GET"), new Promise(function (V, U) {
                    R.apply(void 0, N).then(function (W) {
                      O(W, P, k), V(W)
                    }).catch(function (W) {
                      w(P, k), U(W)
                    })
                  })
                }
              }
            }

            var O = function (R, E, N) {
              var M = {status: R.status, request: E + " " + N};
              R.status >= 400 ? n.leaveBreadcrumb("fetch() failed", M, le) : n.leaveBreadcrumb("fetch() succeeded", M, le)
            }, w = function (R, E) {
              n.leaveBreadcrumb("fetch() error", {request: R + " " + E}, le)
            }
          }
        };
        return a
      }, En = {
        load: function (e) {
          var t = 0;
          e.addOnError(function (a) {
            if (t >= e._config.maxEvents) return e._logger.warn("Cancelling event send due to maxEvents per session limit of " + e._config.maxEvents + " being reached"), !1;
            t++
          }), e.resetEventCount = function () {
            t = 0
          }
        }, configSchema: {
          maxEvents: {
            defaultValue: function () {
              return 10
            }, message: "should be a positive integer ≤100", validate: function (e) {
              return A(1, 100)(e)
            }
          }
        }
      }, He = {};
      He = {
        load: function (e) {
          e.addOnError(function (t) {
            var a = s(t.errors, function (n, u) {
              return n.concat(u.stacktrace)
            }, []);
            T(a, function (n) {
              n.file = bn(n.file)
            })
          })
        }
      };
      var bn = He._strip = function (e) {
          return typeof e == "string" ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
        }, An = function (e, t) {
          return e === void 0 && (e = window), t === void 0 && (t = "window onerror"), {
            load: function (a) {
              if (!a._config.autoDetectErrors || !a._config.enabledErrorTypes.unhandledExceptions) return;

              function n(f, h, S, m, O) {
                if (S === 0 && /Script error\.?/.test(f)) a._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z"); else {
                  var w = {severity: "error", unhandled: !0, severityReason: {type: "unhandledException"}}, R;
                  if (O) R = a.Event.create(O, !0, w, t, 1), $t(R.errors[0].stacktrace, h, S, m); else if (typeof f == "object" && f !== null && (!h || typeof h != "string") && !S && !m && !O) {
                    var E = f.type ? "Event: " + f.type : "Error", N = f.message || f.detail || "";
                    R = a.Event.create({
                      name: E,
                      message: N
                    }, !0, w, t, 1), R.originalError = f, R.addMetadata(t, {event: f, extraParameters: h})
                  } else R = a.Event.create(f, !0, w, t, 1), $t(R.errors[0].stacktrace, h, S, m);
                  a._notify(R)
                }
                typeof u == "function" && u.apply(this, arguments)
              }

              var u = e.onerror;
              e.onerror = n
            }
          }
        }, $t = function (e, t, a, n) {
          e[0] || e.push({});
          var u = e[0];
          !u.file && typeof t == "string" && (u.file = t), !u.lineNumber && Ve(a) && (u.lineNumber = a), u.columnNumber || (Ve(n) ? u.columnNumber = n : window.event && Ve(window.event.errorCharacter) && (u.columnNumber = window.event.errorCharacter))
        }, Ve = function (e) {
          return typeof e == "number" && String.call(e) !== "NaN"
        }, wn = function (e) {
          e === void 0 && (e = window);
          var t = {
            load: function (a) {
              if (!(!a._config.autoDetectErrors || !a._config.enabledErrorTypes.unhandledRejections)) {
                var n = function (u) {
                  var f = u.reason, h = !1;
                  try {
                    u.detail && u.detail.reason && (f = u.detail.reason, h = !0)
                  } catch {
                  }
                  var S = a.Event.create(f, !1, {
                    severity: "error",
                    unhandled: !0,
                    severityReason: {type: "unhandledPromiseRejection"}
                  }, "unhandledrejection handler", 1, a._logger);
                  h && T(S.errors[0].stacktrace, Ln(f)), a._notify(S, function (m) {
                    if (be(m.originalError) && !m.originalError.stack) {
                      var O;
                      m.addMetadata("unhandledRejection handler", (O = {}, O[Object.prototype.toString.call(m.originalError)] = {
                        name: m.originalError.name,
                        message: m.originalError.message,
                        code: m.originalError.code
                      }, O))
                    }
                  })
                };
                "addEventListener" in e ? e.addEventListener("unhandledrejection", n) : e.onunhandledrejection = function (u, f) {
                  n({detail: {reason: u, promise: f}})
                }
              }
            }
          };
          return t
        }, Ln = function (e) {
          return function (t) {
            t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""))
          }
        }, se = {}, On = "Bugsnag JavaScript", Cn = "7.25.0", Rn = "https://github.com/bugsnag/bugsnag-js",
        Pn = C({}, b.schema, G), z = {
          _client: null, createClient: function (e) {
            typeof e == "string" && (e = {apiKey: e}), e || (e = {});
            var t = [en, cn(), tn(), ln(), En, dn, pn, He, An(), wn(), xt(), mn(), Sn(), Tt, gn()],
              a = new qe(e, Pn, t, {name: On, version: Cn, url: Rn});
            return a._setDelivery(window.XDomainRequest ? Fe : Yr), a._logger.debug("Loaded!"), a.leaveBreadcrumb("Bugsnag loaded", {}, "state"), a._config.autoTrackSessions ? a.startSession() : a
          }, start: function (e) {
            return z._client ? (z._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), z._client) : (z._client = z.createClient(e), z._client)
          }, isStarted: function () {
            return z._client != null
          }
        };
      return T(["resetEventCount"].concat(y(qe.prototype)), function (e) {
        /^_/.test(e) || (z[e] = function () {
          if (!z._client) return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
          z._client._depth += 1;
          var t = z._client[e].apply(z._client, arguments);
          return z._client._depth -= 1, t
        })
      }), se = z, se.Client = qe, se.Event = Ie, se.Session = De, se.Breadcrumb = Y, se.default = z, se
    })
  }(Ke)), Ke.exports
}

var ze, Kt;

function oi() {
  return Kt || (Kt = 1, ze = ii()), ze
}

var si = oi();
const ui = ea(si), ci = /:\/\/(?![^/]*shopify)/,
  li = ["contains bl.cklisted shop_id", "Blocked by AdGuard", "Backpressure applied", "Internet Security by Zscaler", "blocked by AdBlocker Ultimate"];

function di() {
  return li.map(o => new RegExp(`Error producing to the Monorail Edge.+${o}`))
}

const fi = [/Invalid blocker state transition:/, /Unable to preload CSS for/, /Importing a module script failed/, /Failed to fetch dynamically imported module:/, /error loading dynamically imported module:/],
  pi = [/Node and callback/, /A valid node is required to create a modal/, /Couldn't find a UiModal container on the current page/, /Query failed: undefined/, /error loading script/, /script error/, /unknown error/, /npobject/, /hui_container/, /netdefender/, /datafastguru/, /tlscdn/, /injectedscript/, /KW__/, /property 'tgt'/, /chrome-extension/, /avast_submit/, /Unhandled promise rejection/, /Admin-Next 500 error/, /^Uncaught undefined/, /Rejection reason was not an Error/, /ResizeObserver loop limit exceeded/, /ResizeObserver loop completed with undelivered notifications/, /Minified React error #(418|423|425)/],
  Ze = [...di(), /Throttled$/, /"code":\s*"THROTTLED"/, /A network failure may have prevented the request from completing\. Error: TypeError:/, /Network error: cancel/, /connection appears to be offline/, /connection was lost/, /The user aborted a request/, /NetworkError when attempting to fetch resource/, /failed to authenticate/, /Timeout exceeded/, /error loading GraphQL document/, /Failed to fetch/, /Load failed/, /^cancelled$/, /Deferred data aborted/, /Skipping view transition because skipTransition\(\) was called/, /Old view transition aborted by new view transition/, /View transition was skipped because document visibility state is hidden/, /Exporter has been shutdown/, /SendBeacon failed/, /Concurrent export limit reached/, /Failed to query Analytics token for Shopify Employee/],
  hi = [/^Throttled$/, /failed to authenticate/, /contains bl.cklisted shop_id value/, /Internal error/, /Cusco/, /^cancelled$/, /Load failed/, /Timeout exceeded/, /Network error:.+JSON/, /Received status code (401|403|423|500|502|503|520)/, /GraphQL fetch failed with status: (401|403|404|408|423|500|502|503|520)/, /\[IMPERSONATION\]/, /\[TFA\].+This store requires two-factor authentication/, /Cannot parse response/, /The request timed out/, /Failed to fetch/, /error loading GraphQL document/, /NetworkError/, /Invariant Violation: 17/],
  gi = /Required active shop/, mi = {base: Ze, browser: [...Ze, ...pi, ...fi]},
  vi = ["OTLPExporterError", "QuickSearch:RemoteSearchError", "QuickSearch:SearchFailed", "QuickSearch:RemoteSearchFailed", "UnknownTimezone", "QuickSearch:LoadMoreForCategoryFailed", "AdminNextAssetPrefetch", "ScriptDownloadError", "MonorailInterceptedProduceError"];

function _i(o, r = {}) {
  const {pathName: i, errorGroup: s, errorClass: c, stacktrace: p} = r;
  if (gi.test(o)) return i === void 0 || !i.match(/\/store\/\w+\/access_account/) && !i.match(/\/admin\/access_account/);
  const l = s ? mi[s] : Ze;
  return vi.includes(c || "") || l.some(d => d.test(o)) || Si(o, c) || (p ? ci.test(p) : !1)
}

const yi = ["ApolloError", "HttpError", "ParseError", "FormatError", "ExecutionError"];

function Si(o, r) {
  return !r || !yi.includes(r) ? !1 : hi.some(i => i.test(o))
}

function ge(o, r) {
  o.addMetadata("bugsnag", {shouldSend: r})
}

function Ei(o) {
  return function (i) {
    ge(i, !0), ta(i);
    const s = i.request.url || "";
    if (!URL.canParse(s)) {
      ge(i, !1);
      return
    }
    const c = URL.parse(s);
    if (!c || bi(c) || Ai(c) || wi(c)) {
      ge(i, !1);
      return
    }
    if (i.errors.some(l => {
      const d = l.stacktrace.map(g => `${g.file} ${g.method}`).join(" ");
      return i.context === "/admin/files" && l.errorMessage.includes("SecurityError") || _i(l.errorMessage, {
        pathName: window.location.pathname,
        errorGroup: "browser",
        errorClass: l.errorClass,
        stacktrace: d
      }) || l.errorMessage === void 0 || l.errorMessage === "undefined" || l.errorClass === "Unauthorized"
    })) {
      ge(i, !1);
      return
    }
    o(i) === !1 && ge(i, !1)
  }
}

function bi(o) {
  return o.hostname.match(/\.myshopify\.io/)
}

function Ai(o) {
  return o.protocol === "file:" || o.protocol === "blob:" || o.protocol === "content:"
}

function wi(o) {
  return !((o == null ? void 0 : o.hostname) === "admin.shopify.com" || o != null && o.hostname.match(/\.myshopify\.com$/))
}

const Li = /^\/signup\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(\/(.*))?$/,
  Oi = ["[gtm: error] gtm iframe failed to load", "[gtm: error] gtm failed to acknowledge message", "Data Collector must be created with Kount and/or PayPal."];

function Ci(o) {
  var l;
  if (!((l = o.request.path) == null ? void 0 : l.startsWith("/signup"))) return;
  const i = Ri(), s = o.errors[0], {errorMessage: c = ""} = s;
  Oi.forEach(d => {
    c === d && (o.groupingHash = d)
  }), o.addMetadata("signup", {
    signupUuid: i.signupUuid,
    country: i.country,
    experimentAssignments: i.experimentAssignments,
    locale: i.locale,
    page: ra(location.pathname),
    phase: i.phase,
    sequenceSteps: i.sequenceSteps,
    signupTypes: i.signupTypes
  });
  const [, p] = o.request.path.match(Li) || [];
  o.request.path = o.request.path.replace(p, ":signup_uuid")
}

function Ri() {
  const o = document.querySelector('[data-serialized-id="signup-context"]'), r = o == null ? void 0 : o.textContent;
  try {
    return r ? JSON.parse(r) : {}
  } catch {
    return {}
  }
}

function Pi(o) {
  var r;
  return !!(o && ((r = o.extraInfo) != null && r.operation))
}

function Ni(o) {
  var r, i;
  for (const s of o.errors) {
    const c = o.originalError;
    if (!nt(c) || c.cause) return;
    if (Pi(c)) s.errorClass = `QueryError:${c.extraInfo.operation}`; else if (rr((r = c.graphQLErrors[0]) == null ? void 0 : r.originalError)) {
      const p = URL.parse((i = c.graphQLErrors[0]) == null ? void 0 : i.originalError.response.url);
      p && (s.errorClass = `QueryError:${p.searchParams.get("operation")}`)
    }
  }
}

function Ti(o, r) {
  for (const i of o.errors) {
    const {errorMessage: s = ""} = i;
    if (/Invariant Violation/.test(s)) i.errorClass = `InvariantViolation:${r}`, o.groupingHash = i.errorClass; else if (/Missing translation/.test(s) || /No replacement found/.test(s)) i.errorClass = `TranslationError:${r}`, o.groupingHash = s.replace(/ in locale: ([a-zA-Z-]+)/, ""); else if (/Minified React error/.test(s)) {
      const c = s.replace(/.*#(\d+).*/, "$1");
      i.errorClass = `ReactError:${r}:${c}`, o.groupingHash = i.errorClass
    } else /Loading chunk/.test(s) ? (i.errorClass = `ChunkLoadError:JS:${r}`, o.groupingHash = "ChunkLoadError:JS") : /Loading CSS chunk/.test(s) && (i.errorClass = `ChunkLoadError:CSS:${r}`, o.groupingHash = "ChunkLoadError:CSS");
    if (o.groupingHash) break
  }
}

const Ii = ["The play() request was interrupted because the media was removed from the document. https://goo.gl/LdLk22", "Error: Syntax not recognized - Unsupported visualization type Source: ANTLR Transformer Range: 19:24 - 19:34"];

function ki(o) {
  const r = o.errors[0], {errorMessage: i = ""} = r;
  Ii.forEach(s => {
    i === s && (o.groupingHash = s)
  })
}

const zt = "UNKNOWN_ERROR", Qt = "UNKNOWN_PATH";

function Mi(o) {
  const r = o.networkError;
  if (rr(r)) return `[HTTP/${r.statusCode}]`;
  const i = new Set(o.graphQLErrors.map(({extensions: l}) => (l == null ? void 0 : l.code) ?? zt)),
    s = new Set(o.graphQLErrors.map(({path: l}) => (l == null ? void 0 : l.join(".")) || Qt)),
    c = i.size ? [...i] : [zt], p = s.size ? [...s] : [Qt];
  return c.length === 1 ? `[${c[0]}@${p.join(",")}]` : `[MIXED_ERRORS@${p.length === 1 ? p[0] : "MIXED_PATHS"}]`
}

function Di(o, r) {
  return nt(r) ? `${o.errorClass}${Mi(r)}` : o.errorClass
}

const xi = "https://cdn.shopify.com/s/assets", qi = "webpack:///client/bugsnag",
  Fi = "https://error-analytics-production.shopifysvc.com",
  $i = "https://error-analytics-sessions-production.shopifysvc.com", de = tt(), Bi = o => async r => {
    const i = r.getMetadata("custom") ?? {}, {
        sliceName: s,
        routeId: c,
        targetNormalizedPathname: p,
        errorBoundary: l
      } = i, d = r.getMetadata("bugsnag") ?? {}, {shouldSend: g} = d,
      y = {sliceName: s, routeId: c, targetNormalizedPathname: p, errorBoundary: l, notifiedBugsnag: g};
    o.log("error", "Notified BugSnag", {
      ...y,
      errorMessage: r.originalError.message,
      errorName: r.originalError.name,
      errorStack: r.originalError.stack
    }), o.record(re.AppError, 1, y);
    for (const A of r.errors) {
      const v = Yi(A.stacktrace, r.request.url);
      v > 0 && o.log("info", "BugSnag Suspicious Error", {
        errorMessage: A.errorMessage,
        errorStack: r.originalError.stack,
        totalFrameCount: A.stacktrace.length,
        suspiciousFrameCount: v
      })
    }
  }, {supported: Ui} = (de == null ? void 0 : de.browser) ?? {}, {
    apiKey: ur,
    appVersion: Hi,
    releaseStage: Qe
  } = (de == null ? void 0 : de.bugsnag) ?? {}, Vi = Ui ? Ei(Xi) : () => !1, et = o => {
    const r = o.getMetadata("bugsnag") ?? {}, {shouldSend: i} = r;
    if (!i) return !1
  }, cr = {
    apiKey: ur,
    autoTrackSessions: !0,
    trackInlineScripts: !1,
    releaseStage: Qe,
    appVersion: Hi,
    enabledErrorTypes: {unhandledExceptions: !0, unhandledRejections: !0},
    enabledBreadcrumbTypes: ["error", "manual", "navigation", "user"],
    enabledReleaseStages: /^(production|canary|performance|remote-manifest|staging-([a-z0-9]{4}))$/.test(Qe) ? [Qe] : [],
    maxBreadcrumbs: 40,
    onError: Vi,
    endpoints: {notify: Fi, sessions: $i}
  };
cr.logger = null;
const I = ur ? ui.createClient(cr) : null;
I == null || I.addOnError(et);
if (navigator.connection) {
  const {downlink: o, effectiveType: r, rtt: i, type: s, saveData: c} = navigator.connection;
  I == null || I.addMetadata("connection", {downlink: o, effectiveType: r, rtt: i, type: s, saveData: c})
}
const {sessionId: ji, requestDetails: Gi, enabledBetas: Ki, isShopifyStaff: zi} = tt() ?? {};
lr({...Gi, enabledBetas: Ki, sessionId: ji, isShopifyStaff: zi});
const Qi = $(({ensure: o, registerCleanup: r}) => {
  const i = {
    leaveBreadcrumb(s, c) {
      I == null || I.leaveBreadcrumb(s, c)
    }, notify(s, c) {
      const p = c || {}, l = p.metaData || {};
      if (Wi(s)) {
        const {graphQLErrors: g = []} = s;
        l.graphQL = g.reduce((y, A, v) => (y[v + 1] = JSON.stringify(A), y), {})
      }
      const d = I == null ? void 0 : I.Event.create(s, !0, {
        severity: p.severity || "warning",
        unhandled: !1,
        severityReason: {type: "handledException"}
      }, "notify()", 2);
      d && (l && Object.keys(l).length !== 0 && Object.keys(l).forEach(g => {
        g === "react" ? d.addMetadata("react", l[g]) : d.addMetadata("custom", {[g]: l[g]})
      }), I == null || I._notify(d))
    }, addOnError(s) {
      return I == null || I.addOnError(s), () => {
        I == null || I.removeOnError(s)
      }
    }, setFlags(s) {
      dr(s)
    }, updateMetadata(s) {
      lr(s)
    }, clearMetadata() {
      I == null || I.clearMetadata("user")
    }
  };
  return o(["flags"]).then(({flags: s}) => {
    r(nr(() => i.setFlags(s.enabled)))
  }).catch(s => {
    throw s
  }), o(["requestDetails"]).then(({requestDetails: s}) => {
    i.updateMetadata(s)
  }).catch(s => {
    throw s
  }), o(["router", "metrics"]).then(({router: s, metrics: c}) => {
    I == null || I.removeOnError(et);
    const p = i.addOnError(g => {
      const y = Ji(s, g.originalError);
      g.addMetadata("custom", y)
    });
    r(p);
    const l = i.addOnError(Bi(c));
    r(l);
    const d = i.addOnError(et);
    r(d)
  }).catch(s => {
    throw s
  }), i
});

function lr(o) {
  const {shop: r, staffMember: i, isShopifyStaff: s, sessionId: c, enabledBetas: p = []} = o, l = ar() ? er() : void 0,
    d = {
      shopId: r == null ? void 0 : r.shopId,
      shopDomain: r == null ? void 0 : r.shopDomain,
      userId: i == null ? void 0 : i.userId,
      userUuid: l,
      isShopifyEmployee: s ?? (r == null ? void 0 : r.isShopifyEmployee),
      sessionId: c
    };
  I == null || I.addMetadata("user", d), I == null || I.setUser(l), dr(p)
}

function Wi(o) {
  return !!o && Array.isArray(o.graphQLErrors)
}

function dr(o) {
  I == null || I.clearFeatureFlags(), I == null || I.addFeatureFlags(o.map(r => ({name: r})))
}

function Xi(o) {
  o.addMetadata("errors", {
    errors: o.errors.map(y => ({
      type: y.type,
      class: y.errorClass,
      message: y.errorMessage,
      stacktrace: y.stacktrace
    }))
  });
  const r = document.location.pathname.replace(/(^\/|\/$)/g, ""), i = () => r.startsWith("signup") ? 0 : ar() ? 2 : 1,
    s = r.split("/").slice(i()), [c = "home", p] = s, l = c === "settings" && p ? p : c;
  let d;
  const g = o.errors.every(y => y.stacktrace.every(({file: A}) => A.startsWith(xi) || A.startsWith(qi) || A.startsWith("global code") || A.startsWith("undefined") || A.startsWith("[native code]")));
  s.length <= 1 ? d = "index" : p ? p === "new" ? d = "new" : /^\d+$/.test(p) ? d = "show" : d = "unknown" : d = "unknown", Ni(o), ki(o), Ti(o, l), Ci(o), o.errors.forEach(y => {
    y.errorClass = Di(y, o.originalError)
  }), o.addMetadata("app", {adminAction: d, adminSection: l, adminNext: g})
}

function Ji(o, r) {
  const i = o.getRouteInfo();
  let s, c = r;
  for (; !s && c;) s = na(c), c = c.cause;
  const p = s ? o.getRouteInfo(s) : void 0,
    l = (p == null ? void 0 : p.sliceName) ?? (i == null ? void 0 : i.sliceName) ?? "unknown",
    d = s ?? (i == null ? void 0 : i.manifestRouteId) ?? "unknown",
    g = (p == null ? void 0 : p.pathPattern) ?? (i == null ? void 0 : i.pathPattern) ?? "unknown";
  return {
    sliceName: l,
    routeId: d,
    targetNormalizedPathname: g,
    callerSliceName: p ? i == null ? void 0 : i.sliceName : void 0,
    callerRouteId: p ? i == null ? void 0 : i.manifestRouteId : void 0
  }
}

function Yi(o, r) {
  let i = 0;
  for (const s of o) (s.file === "" || s.file === r || s.file === "global code") && i++;
  return i
}

function Zi(o, r) {
  return r ? o.filter((s, c) => c < r.length && r[c]) : []
}

async function fr(o) {
  var i;
  const {data: r} = await o.query(aa, {variables: {betaNames: Ut}});
  return Zi(Ut, (i = r == null ? void 0 : r.shop) == null ? void 0 : i.enabledFlags)
}

const me = "admin_react_beta_flag_diagnostics";

async function eo({isStoreList: o, enabledBetas: r, graphqlLite: i, isDevelopment: s}) {
  return o ? [] : r ?? await fr(i)
}

const to = $(async ({url: o, ensure: r, graphqlLite: i, ensureSync: s, serverData: c, unified: p}) => {
    const l = !p.storeHandle && !c.enabledBetas, d = q([]),
      g = q(await eo({isDevelopment: Ye, isStoreList: l, enabledBetas: c.enabledBetas, graphqlLite: i})),
      y = ee(() => Array.from(d.value.reduce((b, L) => (b.has(L) ? b.delete(L) : b.add(L), b), new Set(g.value)))),
      A = ee(() => new Set(y.value)), v = new Re;
    if (!l) {
      const {requestDetails: b} = await r(["requestDetails"]), {isShopifyEmployee: L, isStaffShop: C} = b.shop;
      try {
        (L || C || at(o.hostname) || Ye) && v.get(me) && (d.value = Array.from(new Set([...String(v.get(me)).split(",").map(T => Ht(T)).filter(T => T !== void 0)])))
      } catch {
      }
    }

    function _(b, L) {
      const {router: C} = s(["router"]);
      if (C.revalidate(), b.filter(D => !L.includes(D)).concat(L.filter(D => !b.includes(D))).some(D => ia(D))) {
        const {assets: D} = s(["assets"]);
        D.forceReloadAssets()
      }
    }

    return {
      async refetch() {
        g.value = await fr(i)
      }, get overrides() {
        return d.value
      }, get enabled() {
        return y.value
      }, get(b) {
        return A.value.has(b)
      }, update(b) {
        const L = g.value;
        g.value = b, _(b, L)
      }, updateOverrides(b) {
        const L = d.value, C = b.map(T => Ht(T)).filter(T => T !== void 0);
        d.value = C, b.length > 0 ? v.set(me, b.join(","), {path: "/"}) : v.remove(me, {path: "/"}), _(b, L)
      }, clearOverrides() {
        const b = d.value;
        d.value = [], v.remove(me, {path: "/"}), _([], b)
      }
    }
  }), ve = "admin_react_permission_diagnostics", ro = $(async ({url: o, ensure: r, ensureSync: i}) => {
    const {requestDetails: s} = await r(["requestDetails"]), c = q([]), p = q(s.permissions), l = ee(() => {
      const v = Array.from(c.value.reduce((_, b) => (_.has(b) ? _.delete(b) : _.add(b), _), new Set(p.value)));
      return new oa(v)
    }), {isShopifyEmployee: d, isStaffShop: g} = s.shop, y = new Re;
    try {
      if ((d || g || at(o.hostname) || Ye) && y.get(ve)) {
        const v = String(y.get(ve)).split(",");
        c.value = v.filter(_ => l.value.include(_))
      }
    } catch {
    }

    function A(v, _) {
      const {router: b} = i(["router"]);
      if (b.revalidate(), v.filter(C => !_.includes(C)).concat(_.filter(C => !v.includes(C))).some(C => sa(C))) {
        const {assets: C} = i(["assets"]);
        C.forceReloadAssets()
      }
    }

    return {
      get overrides() {
        return c.value
      }, get enabled() {
        return l.value
      }, include(v) {
        return l.value.include(v)
      }, missing(v) {
        return l.value.missing(v)
      }, update(v) {
        const _ = p.value;
        p.value = v, A(v, _)
      }, updateOverrides(v) {
        const _ = c.value;
        c.value = v, v.length > 0 ? y.set(ve, v.join(","), {path: "/"}) : y.remove(ve, {path: "/"}), A(v, _)
      }, clearOverrides() {
        const v = c.value;
        c.value = [], y.remove(ve, {path: "/"}), A([], v)
      }
    }
  }), {createHttpProducer: no, createLogProducer: ao} = ua, pr = no, io = ao, Wt = "admin-web",
  hr = {detectInterceptedErrorEnabled: !0};

function oo({debugMode: o = !1, production: r} = {}) {
  return r ? pr({production: r, options: hr}) : io({debugMode: o})
}

class Pe extends Error {
  constructor(...i) {
    var s;
    super(...i);
    x(this, "name", "MonorailProduceError");
    (s = Error.captureStackTrace) == null || s.call(Error, this, Pe)
  }

  excludeProduceFromStackTrace(i) {
    var s;
    (s = Error.captureStackTrace) == null || s.call(Error, this, i)
  }
}

function Xt(o, r, i, s) {
  const c = oo(o), p = pr({production: !0, options: hr}), l = ({schemaId: g, payload: y}) => {
    const A = {schemaId: g, metadata: {client: Wt}, payload: {...r || {}, ...(i == null ? void 0 : i()) || {}, ...y}};
    let v = c;
    Jt.includes(g) && !(o != null && o.production) && !(o != null && o.debugMode) && (v = p);
    const _ = new Pe;
    return _.excludeProduceFromStackTrace(l), v.produce(A).then(() => {
      s == null || s("Monorail produce", {schemaId: g})
    }).catch(b => {
      throw s == null || s("Monorail produce", {error: !0, schemaId: g}), b.cause = _, b.name = `${b.name}[${g}]`, b
    })
  }, d = ({events: g}) => {
    const y = g.map(_ => ({
      ..._,
      metadata: {client: Wt},
      payload: {...r || {}, ...(i == null ? void 0 : i()) || {}, ..._.payload || {}}
    })), A = y.filter(({schemaId: _}) => Jt.includes(_) && !(o != null && o.production)), v = new Pe;
    return v.excludeProduceFromStackTrace(d), A.length > 0 ? (o != null && o.debugMode && c.produceBatch({events: y}), p.produceBatch({events: A}).catch(_ => {
      throw _.cause = v, _.name = `${_.name}[Batch]`, _
    })) : c.produceBatch({events: y}).then(() => {
      s == null || s("Monorail produce batch", {schemaIds: g.map(({schemaId: _}) => _)})
    }).catch(_ => {
      throw s == null || s("Monorail produce batch", {
        error: !0,
        schemaIds: g.map(({schemaId: b}) => b)
      }), _.cause = v, _.name = `${_.name}[Batch]`, _
    })
  };
  return {produce: l, produceBatch: d}
}

const Jt = ["dev_ui_tab_click/1.1", "dev_ui_button_click/1.1", "dev_ui_open/1.1", "dev_ui_totally_click/1.0", "dev_ui_drag/1.0"],
  so = () => (la(da), fa);

function uo({locale: o, requestDetails: r, router: i, errorLogger: s}) {
  var v;
  const {shopId: c, isShopifyEmployee: p, shopifyEmployeeId: l} = r.shop ?? {}, d = {debugMode: so(), production: pa};
  if (!c) return Xt(d, A(), A, s.leaveBreadcrumb);
  const g = parseInt(((v = r.staffMember) == null ? void 0 : v.userId) || "", 10) || void 0, y = {
    locale: o,
    shopId: parseInt(c, 10),
    shopifyEmployee: p,
    shopifyEmployeeId: l,
    shopUserId: g,
    tabId: ca(),
    userId: g, ...A()
  };

  function A() {
    return {
      manifestRouteId: i.getRouteInfo().manifestRouteId ?? "unknown",
      pageRequestId: i.navigationId,
      pageViewToken: i.pageViewToken
    }
  }

  return Xt(d, y, A, s.leaveBreadcrumb)
}

const co = $(async ({ensure: o}) => uo(await o(["locale", "requestDetails", "router", "errorLogger"]))),
  We = "admin_react_search_eval_diagnostics", lo = $(({url: o, ensure: r}) => {
    const i = q(!1);
    return r(["requestDetails"]).then(({requestDetails: s}) => {
      const c = new Re, {isShopifyEmployee: p} = s.shop;
      try {
        (p || at(o.hostname)) && (i.value = String(c.get(We)) === "1")
      } catch {
      }
    }).catch(s => {
    }), {
      get searchRatingEnabled() {
        return i.value
      }, toggleSearchRatingEnabled() {
        i.value = !i.value;
        const s = new Re;
        i.value ? s.set(We, "1", {path: "/"}) : s.remove(We, {path: "/"})
      }
    }
  }), fo = {
    kind: "Document",
    definitions: [{
      kind: "OperationDefinition",
      operation: "query",
      name: {kind: "Name", value: "OrganizationContext"},
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: "SelectionSet", selections: [{
          kind: "Field", name: {kind: "Name", value: "organization"}, arguments: [], directives: [], selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {kind: "Name", value: "id"},
              arguments: [],
              directives: []
            }, {kind: "Field", name: {kind: "Name", value: "featureSet"}, arguments: [], directives: []}, {
              kind: "Field",
              name: {kind: "Name", value: "currentUser"},
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {kind: "Name", value: "id"},
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {kind: "Name", value: "organizationPermissions"},
                  arguments: [],
                  directives: []
                }, {kind: "Field", name: {kind: "Name", value: "__typename"}, arguments: [], directives: []}]
              }
            }, {
              kind: "Field",
              name: {kind: "Name", value: "userLimits"},
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {kind: "Name", value: "enforced"},
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {kind: "Name", value: "maxAllowed"},
                  arguments: [],
                  directives: []
                }, {kind: "Field", name: {kind: "Name", value: "used"}, arguments: [], directives: []}, {
                  kind: "Field",
                  name: {kind: "Name", value: "__typename"},
                  arguments: [],
                  directives: []
                }]
              }
            }, {kind: "Field", name: {kind: "Name", value: "__typename"}, arguments: [], directives: []}]
          }
        }]
      }
    }],
    loc: {start: 0, end: 162, source: {name: "GraphQL request", locationOffset: {line: 1, column: 1}}},
    id: "cff965b9063e6afb73c9ec882612e464e5f640b948363c521c789adc011308cb"
  }, gr = {enforced: !1, maxAllowed: 0, used: 0}, po = $(async ({ensure: o, errorLogger: r}) => {
    var c;
    const {shopFeatures: i, organizationGraphql: s} = await o(["shopFeatures", "organizationGraphql"]);
    if (!i.hasOrgSettings && !i.rbacEnabled) return null;
    try {
      const {data: p, error: l} = await s.query({query: fo, fetchPolicy: "network-only"});
      l && r.notify(l);
      const d = p.organization, g = (c = d == null ? void 0 : d.currentUser) == null ? void 0 : c.organizationPermissions,
        y = (d == null ? void 0 : d.featureSet) || [], A = [], v = ho(d);
      if (g) {
        const _ = Object.values(ha);
        for (const b of g) {
          const L = b.toUpperCase();
          _.includes(L) && A.push(L)
        }
      }
      return {features: y, permissions: A, userLimits: v}
    } catch (p) {
      if (nt(p) && go(p)) {
        const {metrics: l} = await o(["metrics"]);
        return l.log("error", "OrganizationContextAccessDeniedError", {message: p.message}), null
      }
      throw p
    }
  });

function ho(o) {
  return o != null && o.userLimits ? {
    enforced: !!o.userLimits.enforced,
    maxAllowed: o.userLimits.maxAllowed,
    used: o.userLimits.used
  } : gr
}

function go(o) {
  const {graphQLErrors: r} = o;
  return r ? r.some(i => {
    var s;
    if (((s = i.extensions) == null ? void 0 : s.code) === "ACCESS_DENIED") return !0
  }) : !1
}

const mo = $(() => {
  const o = q(!1);

  function r(i) {
    queueMicrotask(() => {
      o.value = i
    })
  }

  return {
    get supportsContextualCommerce() {
      return o.value
    }, setSupportsContextualCommerce: r
  }
}), vo = 1e3 * 60 * 60 * 24, _o = 1e3 * 60, yo = $(({registerCleanup: o}) => {
  const r = q(!1), i = () => {
    r.value = !0
  }, s = Date.now(), c = setInterval(() => {
    Date.now() - s > vo && (i(), clearInterval(c))
  }, _o);
  return o(() => {
    clearInterval(c)
  }), {
    get shouldReloadAssets() {
      return r.value
    }, forceReloadAssets: i
  }
}), So = $(() => {
  var s, c;
  const o = q(null),
    r = typeof window < "u" && ((c = (s = window.navigator) == null ? void 0 : s.userAgent) == null ? void 0 : c.includes("MobileBridge"));
  if (r) {
    const p = Eo(), l = {
      register: d => {
        ir(d), o.value = _e(d), document.documentElement.setAttribute("mobile-bridge", "true")
      }
    };
    p.expose(l), p.call.ready()
  }
  return {
    api: o, isSupported: r, supportsVersion: p => {
      var l;
      return (((l = o.value) == null ? void 0 : l.version) ?? 0) >= p
    }
  }
});

function Eo() {
  const o = new WeakMap, r = window;
  return ma({
    postMessage(i) {
      var s, c;
      (c = (s = r.ReactNativeWebView) == null ? void 0 : s.postMessage) == null || c.call(s, JSON.stringify({
        id: "MobileBridge",
        data: i
      }))
    }, addEventListener(i, s) {
      const c = async p => {
        if (typeof p.data == "string") try {
          const {id: l, data: d} = JSON.parse(p.data);
          if (l !== "MobileBridge") return;
          await s({...p, data: d})
        } catch {
        }
      };
      o.set(s, c), window.addEventListener(i, c)
    }, removeEventListener(i, s) {
      const c = o.get(s);
      c != null && (o.delete(s), window == null || window.removeEventListener(i, c))
    }
  })
}

function _e(o) {
  return !o || typeof o != "object" ? o : typeof o == "function" ? (ir(o), async (...i) => {
    const s = await o(..._e(i));
    return _e(s)
  }) : Array.isArray(o) ? o.map(_e) : Object.keys(o).reduce((r, i) => ({...r, [i]: _e(o[i])}), {})
}

const bo = $(o => {
  const r = q({});
  return {
    get forms() {
      return r.value
    }, registerForm(i) {
      const s = o.router.getRouteId();
      s && (r.value = {[s]: {...r.value[s], [i.name]: i}})
    }, get activeForms() {
      const i = o.router.getRouteId();
      return i ? Object.values(r.value[i] ?? {}) : []
    }
  }
}), Ao = $(async ({ensure: o}) => {
  const {requestDetails: r} = await o(["requestDetails"]), i = q(r.entitlements), s = q([]), c = ee(() => {
    const l = va(i.value);
    return s.value.forEach(({path: d, value: g}) => _a(l, d, g)), l
  });
  return wo({
    entitlements: c, overrideHandlers: {
      get overrides() {
        return s.value
      }, clearOverrides() {
        s.value = []
      }, updateOverride(l) {
        const d = [...s.value], g = d.findIndex(({path: A}) => A === l.path), y = or(i.value, l.path);
        g === -1 && l.value !== y ? d.push(l) : y === l.value && g !== -1 ? d.splice(g, 1) : d[g] = l, s.value = d
      }
    }
  })
});

function wo({entitlements: o, overrideHandlers: r}) {
  return new Proxy({}, {
    get(i, s) {
      return s in r ? r[s] : or(o.value, s)
    }, ownKeys() {
      return [...Object.keys(o.value), ...Object.keys(r)]
    }, getOwnPropertyDescriptor() {
      return {enumerable: !0, configurable: !0}
    }, has(i, s) {
      return s in r || s in o.value
    }
  })
}

const Lo = $(() => {
  const o = q(void 0), r = q(void 0), i = q(!1), s = q(() => {
  });

  function c() {
    o.value = void 0, r.value = void 0, i.value = !1, s.value = () => {
    }
  }

  return {
    get challengeUrl() {
      return o.value
    }, get challengeTitleKey() {
      return r.value
    }, get challengeInProgress() {
      return i.value
    }, startChallenge(p, l) {
      return o.value = p, r.value = l, i.value = !0, new Promise(d => s.value = d)
    }, endChallenge(p) {
      s.value(p), c()
    }
  }
}), Oo = $(({serverData: o, ensure: r}) => {
  const s = o.isUnifiedApp ? "/logout" : "/admin/auth/logout";
  return {
    async perform() {
      const {requestDetails: c, flags: p} = await r(["requestDetails", "flags"]);
      if (c.shop.isStaffShop || p.get(Zt)) {
        const {deleteAllCaches: l} = await J(async () => {
          const {deleteAllCaches: d} = await import("./context-slice-graphql-B0DOwuSsR7A9.js").then(g => g.a0);
          return {deleteAllCaches: d}
        }, __vite__mapDeps([3, 2]));
        await l({lockAfterDelete: !0})
      }
      location.assign(s)
    }
  }
});

class Co {
  constructor(r) {
    x(this, "instance");
    x(this, "page");
    this.instance = r, this.page = q({})
  }

  resolve() {
    this.instance.pluginApi.intentsInternalState.resolve()
  }
}

const Yt = new WeakMap;

function Ro(o) {
  let r = Yt.get(o);
  return r || (r = new Co(o), Yt.set(o, r)), r
}

const Po = $(async o => {
  const {flags: r, slots: i} = await o.ensure(["flags", "slots"]), s = ee(() => r.enabled.includes(ya)), c = q(void 0),
    p = o.ensure(["extensibility"]).then(({extensibility: v}) => (c.value = v.host, v.host)),
    l = ee(() => c.value ? c.value.findAll("admin.intent.render").flatMap(v => v.instances) : []),
    d = ee(() => s.value ? l.value.map(Ro) : []), g = ee(() => d.value.at(-1)), y = ee(() => !!g.value);
  return nr(() => {
    s.value && (g.value ? i.setVisible({
      search: !1,
      contextualSaveBar: !1,
      viewAs: !1,
      viewAsExpanded: !1
    }) : i.setVisible(Sa.search))
  }), {
    activities: d, currentActivity: g, inActivity: y, invoke: async (...v) => {
      var b;
      const _ = await p;
      return await _.ready, (b = _.pluginApi.intents) == null ? void 0 : b.invoke(...v)
    }
  }
}), No = "en";

async function To({createRouterPromise: o}) {
  var c, p;
  const r = Ea(), i = ba(Aa(location.pathname)), s = wa({
    mobileBridge: So,
    async extensibility(l) {
      return J(() => import("./context-slice-extensibility-DszXVyiwekEk.js"), __vite__mapDeps([4, 2])).then(d => d.default(l))
    },
    intents: Po,
    url: new Pa(location.hostname),
    browser: new La({
      userAgent: ((c = r == null ? void 0 : r.browser) == null ? void 0 : c.userAgent) ?? navigator.userAgent,
      supported: ((p = r == null ? void 0 : r.browser) == null ? void 0 : p.supported) ?? !0
    }),
    locale: r.locale,
    async i18n({locale: l, ensure: d}) {
      const {requestDetails: g, errorLogger: y} = await d(["requestDetails", "errorLogger"]), {
        currencyCode: A,
        shopCountryCode: v,
        ianaTimezone: _
      } = g.shop;
      return new Ma({fallbackLocale: No, locale: l, currency: A, country: v, timezone: _, onError: y.notify})
    },
    async router(l) {
      const {default: d} = await J(async () => {
        const {default: g} = await import("./router-D2A3v33YTGz9.js").then(y => y.er);
        return {default: g}
      }, __vite__mapDeps([1, 2]));
      return d(l, o)
    },
    serverData: r,
    errorLogger: Qi,
    urlDetails: r.urlDetails,
    performance: Ba,
    instrumentation: Va,
    flash: ja,
    loading: ei,
    globallyDismissedHomeItems: ti,
    statusPanel: ri,
    unified() {
      return {storeHandle: ka(location.pathname)}
    },
    graphqlLite: Za,
    async graphql(l) {
      return await l.ensure(["router", "metrics"]), (await J(async () => {
        const {default: d} = await import("./context-slice-graphql-B0DOwuSsR7A9.js").then(g => g.a1);
        return {default: d}
      }, __vite__mapDeps([3, 2]))).default(l, {initialApolloData: r.initialApolloData})
    },
    async atlas(l) {
      return l.ensure(["graphql"]), (await J(async () => {
        const {default: d} = await import("./context-slice-atlas-DERNaGnp9qDM.js");
        return {default: d}
      }, __vite__mapDeps([5, 2]))).default(l)
    },
    contractManagementGraphql({requestDetails: {shop: l}, graphql: d}) {
      const g = Ge((l == null ? void 0 : l.shopDomain) || "");
      return d.subclient({apiEndpointPath: `/api/contractmanagement/${g}/${l == null ? void 0 : l.shopId}`})
    },
    verificationHubGraphql({requestDetails: {shop: l}, graphql: d}) {
      const g = Ge((l == null ? void 0 : l.shopDomain) || "");
      return d.subclient({apiEndpointPath: `/api/verificationhub/${g}/`})
    },
    async organizationGraphql({ensure: l}) {
      const {shop: d, graphql: g} = await l(["shop", "graphql"]), y = Ge((d == null ? void 0 : d.shopDomain) || "");
      return g.subclient({apiEndpointPath: `/api/organizations/${y}/${d == null ? void 0 : d.shopId}`})
    },
    async requestedActionsGraphql({ensure: l}) {
      const {graphql: d} = await l(["graphql"]);
      return d.subclient({apiEndpointPath: "/api/requested_actions"})
    },
    bankingGraphql({serverData: l, unified: d, graphql: g}) {
      const y = "Banking", A = "/admin/banking/graphql", v = "/admin/internal/web/graphql/banking", _ = l.isUnifiedApp;
      let b = v;
      return g.options.server ? b = A : _ && (b = `/api/banking/${d.storeHandle}`), g.subclient({
        apiEndpointPath: b,
        name: y,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        handleServerError(L) {
          var D, F, G, K;
          if (!L) return !1;
          const C = (L == null ? void 0 : L.statusCode) || ((D = L == null ? void 0 : L.response) == null ? void 0 : D.status),
            T = ((F = L == null ? void 0 : L.result) == null ? void 0 : F.error) || ((K = (G = L == null ? void 0 : L.result) == null ? void 0 : G.errors) == null ? void 0 : K.toString()) || "";
          return C === 404 || C === 403 && T !== "CSRF"
        }
      })
    },
    async experimentalBillingGraphql({ensure: l}) {
      const {shop: d, graphql: g} = await l(["shop", "graphql"]);
      throw new Error("Can't access billing graphql client outside of development")
    },
    async merchantBankAccountGraphql({serverData: l, ensure: d}) {
      const {shop: g, graphql: y} = await d(["shop", "graphql"]), A = "MerchantBankAccount",
        v = g == null ? void 0 : g.shopId, b = new URLSearchParams(location.search).get("businessEntityId"),
        L = "/admin/merchant_bank_account/graphql", C = "/admin/internal/web/graphql/merchant_bank_account",
        T = l.isUnifiedApp;
      let D = C;
      return y.options.server ? D = L : T && (D = b ? `/api/merchant_bank_account/${v}/business_entity/${b}` : `/api/merchant_bank_account/${v}`), y.subclient({
        apiEndpointPath: D,
        name: A,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        handleServerError(F) {
          if (!F) return !1;
          const G = F.result.error || F.message || F.response.statusText;
          return F.statusCode === Ia.BadRequest && G.includes("IMPERSONATION") ? !1 : [403, 404].includes(F.statusCode)
        }
      })
    },
    async merchantRiskGraphql({serverData: l, unified: d, ensure: g}) {
      const y = "MerchantRisk", A = "/admin/profile_assessment/graphql",
        v = "/admin/internal/web/graphql/profile_assessment", {graphql: _} = await g(["graphql"]), b = l.isUnifiedApp;
      let L = v;
      return _.options.server ? L = A : b && (L = `/api/profile_assessment/${d.storeHandle}`), _.subclient({
        apiEndpointPath: L,
        name: y,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        handleServerError(C) {
          return C ? [403, 404].includes(C.statusCode) : !1
        }
      })
    },
    async bourgeoisGraphql({serverData: l, unified: d, ensure: g}) {
      const y = (await J(async () => {
          const {default: T} = await import("./context-slice-graphql-schemas~bourgeois-schema-types-BYcjHNY-kdGS.js");
          return {default: T}
        }, [])).default, A = "Bourgeois", v = "/admin/capital/graphql", _ = "/admin/internal/web/graphql/capital",
        b = l.isUnifiedApp;
      let L = _;
      const {graphql: C} = await g(["graphql"]);
      return C.options.server ? L = v : b && (L = `/api/capital/${d.storeHandle}`), C.subclient({
        apiEndpointPath: L,
        name: A,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        handleServerError(T) {
          return T ? [403, 404].includes(T.statusCode) : !1
        }
      }, y)
    },
    headlessGraphql({serverData: l, unified: d, graphql: g}) {
      const y = "Headless", A = "/admin/headless_storefronts/graphql",
        v = "/admin/internal/web/graphql/headless_storefronts", _ = l.isUnifiedApp;
      let b = v;
      return g.options.server ? b = A : _ && (b = `/api/headless_storefronts/${d.storeHandle}`), g.subclient({
        apiEndpointPath: b,
        name: y,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        handleServerError(L) {
          return L ? [403, 404].includes(L.statusCode) : !1
        }
      })
    },
    hydrogenGraphql({serverData: l, unified: d, graphql: g}) {
      const y = "Hydrogen", A = "hydrogen_storefronts", v = `/admin/${A}/graphql`,
        _ = `/admin/internal/web/graphql/${A}`, b = l.isUnifiedApp;
      let L = _;
      return g.options.server ? L = v : b && (L = `/api/${A}/${d.storeHandle}`), g.subclient({
        apiEndpointPath: L,
        name: y,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        cacheConfig: {typePolicies: {Query: {fields: {oxygenFeatureSet: {merge: !0}}}}},
        handleServerError(C) {
          return C ? [403, 404].includes(C.statusCode) : !1
        }
      })
    },
    signupGraphQL({graphql: l}) {
      return l.subclient({apiEndpointPath: "/api/signups"})
    },
    optionalCheckoutGraphQL({graphql: l}) {
      const d = Ta(location.search);
      return l.subclient({apiEndpointPath: `/api/shopify/${d}`})
    },
    messagingApiGraphql({serverData: l, unified: d, graphql: g}) {
      const y = "MessagingApi", A = "messagingapi", v = `/admin/${A}/graphql`,
        _ = "/admin/internal/web/graphql/messaging_api", b = l.isUnifiedApp;
      let L = _;
      return g.options.server ? L = v : b && (L = `/api/${A}/${d.storeHandle}`), g.subclient({
        apiEndpointPath: L,
        name: y,
        defaultOptions: {query: {errorPolicy: "all", ssr: !1}},
        handleServerError(C) {
          return C ? [402, 403, 404].includes(C.statusCode) : !1
        }
      })
    },
    flags: to,
    async shop({ensure: l}) {
      const {requestDetails: d} = await l(["requestDetails"]);
      return d.shop
    },
    async shopFeatures({ensure: l}) {
      const {requestDetails: d} = await l(["requestDetails"]);
      return d.shopFeatures
    },
    entitlements: Ao,
    async requestDetails({serverData: l, unified: d, graphqlLite: g}) {
      return l.requestDetails ? l.requestDetails : d.storeHandle ? await Na(g, i) : {shop: {}}
    },
    permissions: ro,
    reportify: Ra,
    async newReportify(l) {
      return (await J(async () => {
        const {default: d} = await import("./context-slice-newReportify-S4lhejIMbeaC.js");
        return {default: d}
      }, __vite__mapDeps([6, 2]))).default(l)
    },
    async metrics(l) {
      return (await J(async () => {
        const {default: d} = await import("./context-slice-metrics-dyxi7iJePk2a.js").then(g => g.m);
        return {default: d}
      }, __vite__mapDeps([7, 2, 3]))).default(l)
    },
    async manifestFetch(l) {
      return (await J(async () => {
        const {default: d} = await import("./context-slice-manifestFetch-B2JNiWFnQss2.js");
        return {default: d}
      }, __vite__mapDeps([8, 2]))).default(l)
    },
    monorail: co,
    slots: Ca,
    universalSidebar: ai,
    searchEval: lo,
    organization: po,
    async organizationFeatures({ensure: l}) {
      const {organization: d} = await l(["organization"]);
      return (d == null ? void 0 : d.features) || []
    },
    async organizationPermissions({ensure: l}) {
      const {organization: d} = await l(["organization"]);
      return (d == null ? void 0 : d.permissions) || []
    },
    async organizationUserLimits({ensure: l}) {
      const {organization: d} = await l(["organization"]);
      return (d == null ? void 0 : d.userLimits) || gr
    },
    contextualCommerce: mo,
    assets: yo,
    forms: bo,
    trustChallenge: Lo,
    logout: Oo
  });
  return await s.ensure(Oa), s
}

Da.defaults.domain = location.hostname;
const Ce = xa();
let Xe;
Ce.status ? mr() : Io({createAdminContext: To});

async function Io({createAdminContext: o}) {
  const r = J(() => import("./router-D2A3v33YTGz9.js").then(l => l.es), __vite__mapDeps([1, 2])),
    i = J(() => import("./render-common-CBDTO_er9s96.js").then(l => l.ky), __vite__mapDeps([9, 2, 1, 3, 7, 10]));
  let s, c;
  try {
    c = await o({createRouterPromise: r.then(({createRouter: l}) => l)})
  } catch (l) {
    s = l
  }
  if (s) {
    s && setTimeout(() => {
      throw s
    }), mr(s);
    return
  }
  const {createAppRoot: p} = await i;
  Xe || (Xe = p(document.getElementById("app"))), Xe.render(c, Ce == null ? void 0 : Ce.isUnifiedApp)
}

async function mr(o) {
  const {createErrorAppRoot: r} = await J(async () => {
    const {createErrorAppRoot: i} = await import("./render-common-CBDTO_er9s96.js").then(s => s.ky);
    return {createErrorAppRoot: i}
  }, __vite__mapDeps([9, 2, 1, 3, 7, 10]));
  r(document.getElementById("app"), o).render()
}

//# sourceMappingURL=https://web-sourcemaps.shopify.io/v1/en/main-B5E0SDqW.js.map
