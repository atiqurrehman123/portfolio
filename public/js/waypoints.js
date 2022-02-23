/*
jQuery Waypoints - v1.1.7
Copyright (c) 2011-2012 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/MIT-license.txt
https://github.com/imakewebthings/jquery-waypoints/blob/master/GPL-license.txt
*/
(function ($, k, m, i, d) {
  const e = $(i); const g = 'waypoint.reached'; const b = function (o, n) {
    o.element.trigger(g, n); if (o.options.triggerOnce) {
      o.element[k]('destroy');
    }
  }; const h = function (p, o) {
    if (!o) {
      return -1;
    } let n = o.waypoints.length - 1; while (n >= 0 && o.waypoints[n].element[0] !== p[0]) {
      n -= 1;
    } return n;
  }; const f = []; const l = function (n) {
    $.extend(this, {
      element: $(n),
      oldScroll: 0,
      waypoints: [],
      didScroll: false,
      didResize: false,
      doScroll: $.proxy(function () {
        const q = this.element.scrollTop(); const p = q > this.oldScroll; const s = this; const r = $.grep(this.waypoints, (u, t) => (p ? (u.offset > s.oldScroll && u.offset <= q) : (u.offset <= s.oldScroll && u.offset > q))); const o = r.length; if (!this.oldScroll || !q) {
          $[m]('refresh');
        } this.oldScroll = q; if (!o) {
          return;
        } if (!p) {
          r.reverse();
        }$.each(r, (u, t) => {
          if (t.options.continuous || u === o - 1) {
            b(t, [p ? 'down' : 'up']);
          }
        });
      }, this),
    }); $(n).bind('scroll.waypoints', $.proxy(function () {
      if (!this.didScroll) {
        this.didScroll = true; i.setTimeout($.proxy(function () {
          this.doScroll(); this.didScroll = false;
        }, this), $[m].settings.scrollThrottle);
      }
    }, this)).bind('resize.waypoints', $.proxy(function () {
      if (!this.didResize) {
        this.didResize = true; i.setTimeout($.proxy(function () {
          $[m]('refresh'); this.didResize = false;
        }, this), $[m].settings.resizeThrottle);
      }
    }, this)); e.load($.proxy(function () {
      this.doScroll();
    }, this));
  }; const j = function (n) {
    let o = null; $.each(f, (p, q) => {
      if (q.element[0] === n) {
        o = q; return false;
      }
    }); return o;
  }; const c = {
    init(o, n) {
      this.each(function () {
        let u = $.fn[k].defaults.context; let q; const t = $(this); if (n && n.context) {
          u = n.context;
        } if (!$.isWindow(u)) {
          u = t.closest(u)[0];
        }q = j(u); if (!q) {
          q = new l(u); f.push(q);
        } const p = h(t, q); const s = p < 0 ? $.fn[k].defaults : q.waypoints[p].options; const r = $.extend({}, s, n); r.offset = r.offset === 'bottom-in-view' ? function () {
          const v = $.isWindow(u) ? $[m]('viewportHeight') : $(u).height(); return v - $(this).outerHeight();
        } : r.offset; if (p < 0) {
          q.waypoints.push({ element: t, offset: null, options: r });
        } else {
          q.waypoints[p].options = r;
        } if (o) {
          t.bind(g, o);
        } if (n && n.handler) {
          t.bind(g, n.handler);
        }
      }); $[m]('refresh'); return this;
    },
    remove() {
      return this.each((o, p) => {
        const n = $(p); $.each(f, (r, s) => {
          const q = h(n, s); if (q >= 0) {
            s.waypoints.splice(q, 1); if (!s.waypoints.length) {
              s.element.unbind('scroll.waypoints resize.waypoints'); f.splice(r, 1);
            }
          }
        });
      });
    },
    destroy() {
      return this.unbind(g)[k]('remove');
    },
  }; const a = {
    refresh() {
      $.each(f, (r, s) => {
        const q = $.isWindow(s.element[0]); const n = q ? 0 : s.element.offset().top; const p = q ? $[m]('viewportHeight') : s.element.height(); const o = q ? 0 : s.element.scrollTop(); $.each(s.waypoints, (u, x) => {
          if (!x) {
            return;
          } let t = x.options.offset; const w = x.offset; if (typeof x.options.offset === 'function') {
            t = x.options.offset.apply(x.element);
          } else if (typeof x.options.offset === 'string') {
            const v = parseFloat(x.options.offset); t = x.options.offset.indexOf('%') ? Math.ceil(p * (v / 100)) : v;
          }x.offset = x.element.offset().top - n + o - t; if (x.options.onlyOnScroll) {
            return;
          } if (w !== null && s.oldScroll > w && s.oldScroll <= x.offset) {
            b(x, ['up']);
          } else if (w !== null && s.oldScroll < w && s.oldScroll >= x.offset) {
            b(x, ['down']);
          } else if (!w && s.element.scrollTop() > x.offset) {
            b(x, ['down']);
          }
        }); s.waypoints.sort((u, t) => u.offset - t.offset);
      });
    },
    viewportHeight() {
      return (i.innerHeight ? i.innerHeight : e.height());
    },
    aggregate() {
      let n = $(); $.each(f, (o, p) => {
        $.each(p.waypoints, (q, r) => {
          n = n.add(r.element);
        });
      }); return n;
    },
  }; $.fn[k] = function (n) {
    if (c[n]) {
      return c[n].apply(this, Array.prototype.slice.call(arguments, 1));
    } if (typeof n === 'function' || !n) {
      return c.init.apply(this, arguments);
    }
    if (typeof n === 'object') {
      return c.init.apply(this, [null, n]);
    }
    $.error(`Method ${n} does not exist on jQuery ${k}`);
  }; $.fn[k].defaults = {
    continuous: true, offset: 0, triggerOnce: false, context: i,
  }; $[m] = function (n) {
    if (a[n]) {
      return a[n].apply(this);
    }
    return a.aggregate();
  }; $[m].settings = { resizeThrottle: 200, scrollThrottle: 100 }; e.load(() => {
    $[m]('refresh');
  });
}(jQuery, 'waypoint', 'waypoints', window));
