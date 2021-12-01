! function(e) {
	var i = {},
		t = [{
			id: "generic-analytics",
			triggers: [],
			run: function(s, t) {
				try {
					var e = function() {
						for (var e, t = document.getElementsByTagName("link"), n = {
								storeId: s.ecwidStoreID
							}, r = {
								storeId: (s.__st || {}).a
							}, o = {
								shopPath: (s.config || {}).ShopPath,
								storeId: void 0
							}, i = {
								metaSiteId: (s.rendererModel || {}).metaSiteId,
								siteId: ((s.rendererModel || {}).siteInfo || {}).siteId
							}, a = {
								storeId: (s.options || {}).accountId
							}, u = 0; u < t.length; u++) {
							var c = t[u];
							if (/\/(s-\w+)\//.test(c.href) && (o.storeId = (c.href.match(/\/(s-\w+)\//) || [])[1]), "canonical" === c.getAttribute("rel") && (e = c.href), o.storeId && e) break
						}
						return {
							partners: {
								ecwid: n,
								bigCommerce: o,
								shopify: r,
								wix: i,
								bigCartel: a
							},
							canonicalUrl: e
						}
					}();
					n = e, t.track("pageView", {
						fltp: "analytics-generic",
						sub_component: "analytics",
						subfeature1: "analytics",
						context: t.get("pptm:context"),
						feature: "generic",
						pageType: "merchant"
					}, t.objectAssign({
						ru: n.canonicalUrl,
						sinfo: JSON.stringify({
							partners: n.partners
						})
					}))
				} catch (e) {
					t.log({
						t: "error",
						msg: "Generic analytics tracking failed",
						stack: e.stack
					})
				}
				var n
			},
			configuration: {}
		}];
	! function r(o, i, a) {
		function u(t, e) {
			if (!i[t]) {
				if (!o[t]) {
					var n = "function" == typeof require && require;
					if (!e && n) return n(t, !0);
					if (c) return c(t, !0);
					throw (n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", n
				}
				n = i[t] = {
					exports: {}
				}, o[t][0].call(n.exports, function(e) {
					return u(o[t][1][e] || e)
				}, n, n.exports, r, o, i, a)
			}
			return i[t].exports
		}
		for (var c = "function" == typeof require && require, e = 0; e < a.length; e++) u(a[e]);
		return u
	}({
		1: [function(e, t, n) {
			function r(t) {
				return function() {
					var e = void 0;
					try {
						e = t()
					} catch (e) {
						try {
							i({
								msg: e && (e.msg || e.message),
								stack: e && e.stack
							})
						} catch (e) {}
					}
					return e
				}
			}

			function o(e) {
				var t = -1;
				return t = void 0 !== e ? e === parseInt(e, 10) ? e : 0 < e && e < 1 ? parseFloat(e.toFixed(1)) : parseFloat(e.toFixed(0)) : t
			}
			var i = e("./log")(),
				a = r(function() {
					return document.title
				}),
				u = r(function() {
					return window.location.href
				}),
				c = r(function() {
					return window.screen.colorDepth
				}),
				s = r(function() {
					return window.screen.height
				}),
				g = r(function() {
					return window.screen.width
				}),
				f = r(function() {
					return "NA"
				}),
				l = r(function() {
					var e = window.screen || {},
						t = window.devicePixelRatio || 1,
						n = o(e.width * t),
						e = o(e.height * t);
					return 90 === Math.abs(window.orientation) && (t = n, n = e, e = t), e
				}),
				p = r(function() {
					var e = window.screen || {},
						t = window.devicePixelRatio || 1,
						n = o(e.width * t),
						e = o(e.height * t);
					return 90 === Math.abs(window.orientation) && (t = n, n = e, e = t), n
				}),
				d = r(function() {
					var e = window,
						t = "inner";
					return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), e[t + "Height"]
				}),
				v = r(function() {
					var e = window,
						t = "inner";
					return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), e[t + "Width"]
				}),
				h = function() {
					return {
						director: "application/x-director",
						mediaplayer: "application/x-mplayer2",
						pdf: "application/pdf",
						quicktime: "video/quicktime",
						real: "audio/x-pn-realaudio-plugin"
					}
				},
				m = function(e) {
					var t = window.navigator.mimeTypes;
					if (t && t.length) {
						e = t[e];
						return e && e.enabledPlugin
					}
				},
				y = r(function() {
					var e, t = [],
						n = h();
					for (e in n) m(n[e]) && t.push(e);
					return t.join(",")
				}),
				e = r(function() {
					return window.navigator.languages ? window.navigator.languages.join ? window.navigator.languages.join(",") : window.navigator.languages : window.navigator.userLanguage || window.navigator.language || window.navigator.browserLanguage || window.navigator.systemLanguage || void 0
				});
			t.exports = {
				_getBrowserDataFactory: r,
				getPageTitle: a,
				getWindowLocation: u,
				getDeviceHeight: l,
				getDeviceWidth: p,
				getBrowserHeight: d,
				getBrowserWidth: v,
				getColorDepth: c,
				getScreenHeight: s,
				getScreenWidth: g,
				getJSVersion: f,
				getBrowserPlugins: y,
				getRosettaLanguage: e
			}
		}, {
			"./log": 4
		}],
		2: [function(e, t, n) {
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
					return void 0 === e ? "undefined" : r(e)
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e)
				},
				e = e("./pptm");
			"object" === (void 0 === i ? "undefined" : o(i)) && (i = e())
		}, {
			"./pptm": 6
		}],
		3: [function(e, t, n) {
			t.exports = function(t) {
				return {
					url: function() {
						var e;
						return "/" === (e = t.location.href.split("#")[0])[e.length - 1] ? e.substr(0, e.length - 1) : e
					},
					hostname: function() {
						return t.location.hostname
					},
					path: function() {
						var e;
						return "" === (e = t.location.pathname) ? "/" : "/" === e[e.length - 1] ? e.substring(0, e.length - 1) : e
					}
				}
			}
		}, {}],
		4: [function(e, t, n) {
			var r = e("./request-beacon");
			t.exports = function(t) {
				return function(e) {
					t = t || "https://www.paypal.comxxx/tagmanager/log", r.send(t, e = "string" == typeof e ? {
						msg: e
					} : e)
				}
			}
		}, {
			"./request-beacon": 7
		}],
		5: [function(e, t, n) {
			var r = {
				co: function(e, t) {
					return !!~e.indexOf(t)
				},
				nco: function(e, t) {
					return !r.co(e, t)
				},
				ew: function(e, t) {
					return new RegExp(t + "$").test(e)
				},
				new: function(e, t) {
					return !r.ew(e, t)
				},
				eq: function(e, t) {
					return e === t
				},
				neq: function(e, t) {
					return !r.eq(e, t)
				}
			};
			t.exports = r
		}, {}],
		6: [function(e, t, n) {
			function s(o) {
				return function(e) {
					for (; o.unprocessedEvents.length;) {
						var t = o.unprocessedEvents.shift();
						if (o.finalDDL = a({}, o.finalDDL, t), t.event && (r = o, "snippetRun" !== t.event || !r.snippetRun) && (p.isKnownTriggerEvent(t.event) ? o.triggerTags(t.event, t) : o.triggerTags("customEvent", t), e && o.eventListeners[t.event]))
							for (var n = 0; n < o.eventListeners[t.event].length; ++n) o.eventListeners[t.event][n](t)
					}
					var r
				}
			}

			function g(e) {
				var t = e.paypalDDL,
					e = {
						event: "snippetRun",
						t: (new Date).getTime()
					};
				if (t) {
					for (var n = !1, r = 0; r < t.length; ++r) "snippetRun" === t[r].event && (n = !0);
					n || t.push(e)
				} else t = [e];
				return t
			}

			function r(c) {
				return function(e, t, n, r) {
					var o, i, a, u;
					void 0 !== e && (c.variables = t || {}, c.tags = n || {}, c.triggers = r || {}, c.unprocessedEvents = [], c.finalDDL = {}, c.eventListeners = {}, c.snippetRun = !1, c.triggers[r = "$$page$view"] = {
						id: r,
						type: "snippetRun"
					}, function(e, t) {
						for (var n in e) e.hasOwnProperty(n) && (e[n].triggers && e[n].triggers.length || (e[n].triggers = [t]))
					}(c.tags, r), c.log = f(c.variables.logServer), c.on = b(e, c), c.builtinVars = l(e), c.shouldTagTrigger = p.createShouldTagTrigger(c.triggers, c.builtinVars), c.processEvents = s(c), c.triggerTags = (o = e, i = c, function(e, t) {
						for (var n = 0; n < i.tags.length; ++n) {
							var r = i.tags[n];
							if (!v(r)) return void i.log({
								t: "error",
								msg: "Malformed tag has been prevented from running"
							});
							try {
								i.shouldTagTrigger(r, e, t) && r.run(o, S(o, i, r))
							} catch (e) {
								i.log({
									t: "error",
									msg: e.message,
									stack: e.stack
								})
							}
						}
					}), void 0 !== n ? (a = e.paypalDDL = g(e), u = a.push, a.push = function() {
						for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return (e = c.unprocessedEvents).push.apply(e, n), c.processEvents(!0), u.apply(a, n)
					}, c.unprocessedEvents.push.apply(c.unprocessedEvents, a.slice(0)), c.processEvents(), c.snippetRun = !0) : c.log("`pptm.init` called with undefined `tags`"))
				}
			}
			var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				i = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(e) {
					return void 0 === e ? "undefined" : o(e)
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : o(e)
				},
				a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				u = e("./track"),
				f = e("./log"),
				l = e("./builtin-variables"),
				p = e("./trigger-utils"),
				c = u.createTrack,
				d = u.getTrackingData,
				v = function(e) {
					return "object" === (void 0 === e ? "undefined" : i(e)) && "string" == typeof e.id && "function" == typeof e.run && "object" === i(e.configuration)
				},
				h = function(t, n) {
					return function(e) {
						return /^pptm:/.test(e) ? t[e.split(":")[1]] : n.configuration[e]
					}
				},
				m = function(e, t) {
					return function() {
						return t.configuration
					}
				},
				y = function(a) {
					return function(e, t, n) {
						var r, o, i = a.createElement("script");
						i.type = "text/javascript", i.async = !0, i.src = e, r = i, "function" == typeof(o = t) && (r.addEventListener ? r.onload = o : r.onreadystatechange = function() {
							/(loaded|complete)/.test(r.readyState) && (r.onreadystatechange = null, o())
						}), "function" == typeof n && (i.onerror = n);
						n = a.getElementsByTagName("head")[0];
						n && n.appendChild(i)
					}
				},
				w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				b = function(o, i) {
					return function(e, t) {
						i.eventListeners[e] = i.eventListeners[e] || [], i.eventListeners[e].push(t);
						for (var n = g(o), r = 0; r < n.length; ++r) n[r].event === e && t(n[r])
					}
				},
				S = function(e, t, n) {
					e = {
						get: h(t.variables, n),
						getAll: m(t.variables, n),
						insertExternalScript: y(e.document)
					};
					return e.getTrackingData = d(t), e.track = c(e.get("pptm:fptiServer")), e.log = t.log, e.on = t.on, e.objectAssign = w, e
				};
			t.exports = function() {
				return {
					init: r({
						tags: {},
						triggers: {},
						variables: []
					})
				}
			}
		}, {
			"./builtin-variables": 3,
			"./log": 4,
			"./track": 8,
			"./trigger-utils": 9
		}],
		7: [function(e, t, n) {
			t.exports = {
				send: function(e, t) {
					if (e && t) {
						var n, r = [];
						for (n in t) t.hasOwnProperty(n) && r.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
						r = r.join("&");
						(new window.Image).src = e + "?" + r
					}
				}
			}
		}, {}],
		8: [function(e, t, n) {
			function o(e) {
				return a({
					identifier: "tagmanagernodeweb",
					website: "muse",
					feature: "third-party",
					s: "ci",
					subfeature1: "",
					subfeature2: "",
					sub_component: "",
					pageType: "",
					userType: "",
					flavor: "",
					es: "",
					testVariant: "",
					link: "",
					erpg: "",
					context: {},
					flag_consume: ""
				}, e)
			}

			function i(e, t) {
				return a({
					pgrp: [e.website, e.feature, e.subfeature1, e.subfeature2, e.pageType].join(":"),
					page: [e.website, e.feature, e.subfeature1, e.subfeature2, e.pageType, e.userType, e.flavor, e.testVariant].join(":"),
					tsrce: e.identifier,
					comp: e.identifier,
					sub_component: e.sub_component,
					s: e.s,
					item: e.item,
					fltp: e.fltp,
					link: e.link,
					es: e.flavor,
					cust: e.cust,
					mrid: e.mrid,
					erpg: e.erpg,
					error_code: e.error_code,
					xe: e.xe,
					xt: e.xt,
					qe: e.qe,
					qt: e.qt,
					code: e.context.bn_code,
					partner_name: e.context.partner_name,
					flag_consume: e.flag_consume,
					pt: e.pt || c.getPageTitle(),
					dh: e.dh || c.getDeviceHeight(),
					dw: e.dw || c.getDeviceWidth(),
					bh: e.bh || c.getBrowserHeight(),
					bw: e.bw || c.getBrowserWidth(),
					cd: e.cd || c.getColorDepth(),
					sh: e.sh || c.getScreenHeight(),
					sw: e.sw || c.getScreenWidth(),
					v: e.v || c.getJSVersion(),
					pl: e.pl || c.getBrowserPlugins(),
					rosetta_language: e.rosetta_language || c.getRosettaLanguage(),
					correlation_id: e.correlation_id,
					mru: e.mru,
					unsc: e.unsc,
					identifier_used: e.identifier_used,
					offer_id: e.offer_id,
					soid: e.soid
				}, t)
			}
			var a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n, r = arguments[t];
						for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				u = e("./request-beacon"),
				c = e("./analytics"),
				s = ["pageView", "click"];
			t.exports = {
				createTrack: function(r) {
					return function(e) {
						var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
							n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
						r = r || "https://t.paypal.comxxx/ts", ~ function(e) {
							for (var t = 0; t < s.length; ++t)
								if (s[t] === e) return t;
							return -1
						}(e) && (t = i(o(t)), n = a({}, t, {
							e: "pageView" === e ? "im" : "cl"
						}, "click" === e ? {
							pglk: t.pgrp + "|" + t.link,
							pgln: t.page + "|" + t.link
						} : {}, {
							t: (new Date).getTime(),
							g: (new Date).getTimezoneOffset(),
							completeurl: c.getWindowLocation()
						}, n), u.send(r, function(e) {
							var t, n = {};
							for (t in e) e.hasOwnProperty(t) && (!e[t] && !1 !== e[t] && 0 !== e[t] || (n[t] = e[t]));
							return n
						}(n)))
					}
				},
				getTrackingData: function(e) {
					return function() {
						var e = o(e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
						return overrides = {
							completeurl: c.getWindowLocation()
						}, i(e, overrides)
					}
				}
			}
		}, {
			"./analytics": 1,
			"./request-beacon": 7
		}],
		9: [function(e, t, n) {
			var s = e("./operators"),
				r = {
					snippetRun: !0
				};
			t.exports = {
				createShouldTagTrigger: function(u, c) {
					return function(e, t, n) {
						var r = e.triggers;
						if (!(r && !!r.length)) return !0;
						for (var o = !1, i = 0; i < r.length; ++i) var a = u[r[i]],
							a = function(e, t, n, r) {
								if (!(r.type === t)) return !1;
								var o = r.filters || [];
								if (!!!o.length) return !0;
								for (var i = !0, a = 0; a < o.length; ++a) {
									var u = o[a],
										c = void 0;
									switch (u.type) {
										case "BUILT_IN":
											c = e[u.variable]();
											break;
										case "DDL":
											c = n[u.variable]
									}
									i = i && s[u.operator](c, u.value)
								}
								return i
							}(c, t, n, a),
							o = o || a;
						return o
					}
				},
				isKnownTriggerEvent: function(e) {
					return !!r[e]
				}
			}
		}, {
			"./operators": 5
		}]
	}, {}, [2]), "object" == typeof i && i.init && i.init(e, {
		containerIndex: 1,
		containerId: null,
		merchantId: null,
		containerUrl: null,
		fptiServer: "https://t.paypal.comxxx/ts",
		logServer: "https://www.paypal.comxxx/tagmanager/log",
		env: "production",
		context: {
			mock: !0
		}
	}, t, {})
}(window);