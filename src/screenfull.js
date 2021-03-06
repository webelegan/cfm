/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/screenfull@5.1.0/dist/screenfull.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * screenfull
 * v5.1.0 - 2020-12-24
 * (c) Sindre Sorhus; MIT License
 */
! function() {
	"use strict";
	var e = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
		n = "undefined" != typeof module && module.exports,
		r = function() {
			for (var n, r = [
					["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
					["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
					["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
					["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
					["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
				], l = 0, t = r.length, u = {}; l < t; l++)
				if ((n = r[l]) && n[1] in e) {
					for (l = 0; l < n.length; l++) u[r[0][l]] = n[l];
					return u
				} return !1
		}(),
		l = {
			change: r.fullscreenchange,
			error: r.fullscreenerror
		},
		t = {
			request: function(n, l) {
				return new Promise(function(t, u) {
					var c = function() {
						this.off("change", c), t()
					}.bind(this);
					this.on("change", c);
					var s = (n = n || e.documentElement)[r.requestFullscreen](l);
					s instanceof Promise && s.then(c).catch(u)
				}.bind(this))
			},
			exit: function() {
				return new Promise(function(n, l) {
					if (this.isFullscreen) {
						var t = function() {
							this.off("change", t), n()
						}.bind(this);
						this.on("change", t);
						var u = e[r.exitFullscreen]();
						u instanceof Promise && u.then(t).catch(l)
					} else n()
				}.bind(this))
			},
			toggle: function(e, n) {
				return this.isFullscreen ? this.exit() : this.request(e, n)
			},
			onchange: function(e) {
				this.on("change", e)
			},
			onerror: function(e) {
				this.on("error", e)
			},
			on: function(n, r) {
				var t = l[n];
				t && e.addEventListener(t, r, !1)
			},
			off: function(n, r) {
				var t = l[n];
				t && e.removeEventListener(t, r, !1)
			},
			raw: r
		};
	r ? (Object.defineProperties(t, {
		isFullscreen: {
			get: function() {
				return Boolean(e[r.fullscreenElement])
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return e[r.fullscreenElement]
			}
		},
		isEnabled: {
			enumerable: !0,
			get: function() {
				return Boolean(e[r.fullscreenEnabled])
			}
		}
	}), n ? module.exports = t : window.screenfull = t) : n ? module.exports = {
		isEnabled: !1
	} : window.screenfull = {
		isEnabled: !1
	}
}();
//# sourceMappingURL=/sm/fca657ed61da284d0e766b6ce31ffa163c11b045c9cbf1f6b1dda3e97b74ba42.map