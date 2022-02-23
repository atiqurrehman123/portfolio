// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+retina+imagezoom+fastclick
(function (a) {
  const b = 'Close'; const c = 'BeforeClose'; const d = 'AfterClose'; const e = 'BeforeAppend'; const f = 'MarkupParse'; const g = 'Open'; const h = 'Change'; const i = 'mfp'; const j = `.${i}`; const k = 'mfp-ready'; const l = 'mfp-removing'; const m = 'mfp-prevent-close'; let n; const o = function () {}; const p = !!window.jQuery; let q; const r = a(window); let s; let t; let u; let v; let w; const x = function (a, b) {
    n.ev.on(i + a + j, b);
  }; const y = function (b, c, d, e) {
    let f = document.createElement('div'); return f.className = `mfp-${b}`, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  }; const z = function (b, c) {
    n.ev.triggerHandler(i + b, c), n.st.callbacks && (b = b.charAt(0).toLowerCase() + b.slice(1), n.st.callbacks[b] && n.st.callbacks[b].apply(n, a.isArray(c) ? c : [c]));
  }; const A = function (b) {
    if (b !== w || !n.currTemplate.closeBtn)n.currTemplate.closeBtn = a(n.st.closeMarkup.replace('%title%', n.st.tClose)), w = b; return n.currTemplate.closeBtn;
  }; const B = function () {
    a.magnificPopup.instance || (n = new o(), n.init(), a.magnificPopup.instance = n);
  }; const C = function () {
    const a = document.createElement('p').style; const b = ['ms', 'O', 'Moz', 'Webkit']; if (a.transition !== undefined) return !0; while (b.length) if (`${b.pop()}Transition` in a) return !0; return !1;
  }; o.prototype = {
    constructor: o,
    init() {
      const b = navigator.appVersion; n.isIE7 = b.indexOf('MSIE 7.') !== -1, n.isIE8 = b.indexOf('MSIE 8.') !== -1, n.isLowIE = n.isIE7 || n.isIE8, n.isAndroid = /android/gi.test(b), n.isIOS = /iphone|ipad|ipod/gi.test(b), n.supportsTransition = C(), n.probablyMobile = n.isAndroid || n.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), t = a(document), n.popupsCache = {};
    },
    open(b) {
      s || (s = a(document.body)); let c; if (b.isObj === !1) {
        n.items = b.items.toArray(), n.index = 0; const d = b.items; let e; for (c = 0; c < d.length; c++) {
          e = d[c], e.parsed && (e = e.el[0]); if (e === b.el[0]) {
            n.index = c; break;
          }
        }
      } else n.items = a.isArray(b.items) ? b.items : [b.items], n.index = b.index || 0; if (n.isOpen) {
        n.updateItemHTML(); return;
      }n.types = [], v = '', b.mainEl && b.mainEl.length ? n.ev = b.mainEl.eq(0) : n.ev = t, b.key ? (n.popupsCache[b.key] || (n.popupsCache[b.key] = {}), n.currTemplate = n.popupsCache[b.key]) : n.currTemplate = {}, n.st = a.extend(!0, {}, a.magnificPopup.defaults, b), n.fixedContentPos = n.st.fixedContentPos === 'auto' ? !n.probablyMobile : n.st.fixedContentPos, n.st.modal && (n.st.closeOnContentClick = !1, n.st.closeOnBgClick = !1, n.st.showCloseBtn = !1, n.st.enableEscapeKey = !1), n.bgOverlay || (n.bgOverlay = y('bg').on(`click${j}`, () => {
        n.close();
      }), n.wrap = y('wrap').attr('tabindex', -1).on(`click${j}`, (a) => {
        n._checkIfClose(a.target) && n.close();
      }), n.container = y('container', n.wrap)), n.contentContainer = y('content'), n.st.preloader && (n.preloader = y('preloader', n.container, n.st.tLoading)); const h = a.magnificPopup.modules; for (c = 0; c < h.length; c++) {
        let i = h[c]; i = i.charAt(0).toUpperCase() + i.slice(1), n[`init${i}`].call(n);
      }z('BeforeOpen'), n.st.showCloseBtn && (n.st.closeBtnInside ? (x(f, (a, b, c, d) => {
        c.close_replaceWith = A(d.type);
      }), v += ' mfp-close-btn-in') : n.wrap.append(A())), n.st.alignTop && (v += ' mfp-align-top'), n.fixedContentPos ? n.wrap.css({ overflow: n.st.overflowY, overflowX: 'hidden', overflowY: n.st.overflowY }) : n.wrap.css({ top: r.scrollTop(), position: 'absolute' }), (n.st.fixedBgPos === !1 || n.st.fixedBgPos === 'auto' && !n.fixedContentPos) && n.bgOverlay.css({ height: t.height(), position: 'absolute' }), n.st.enableEscapeKey && t.on(`keyup${j}`, (a) => {
        a.keyCode === 27 && n.close();
      }), r.on(`resize${j}`, () => {
        n.updateSize();
      }), n.st.closeOnContentClick || (v += ' mfp-auto-cursor'), v && n.wrap.addClass(v); const l = n.wH = r.height(); const m = {}; if (n.fixedContentPos && n._hasScrollBar(l)) {
        const o = n._getScrollbarSize(); o && (m.marginRight = o);
      }n.fixedContentPos && (n.isIE7 ? a('body, html').css('overflow', 'hidden') : m.overflow = 'hidden'); let p = n.st.mainClass; return n.isIE7 && (p += ' mfp-ie7'), p && n._addClassToMFP(p), n.updateItemHTML(), z('BuildControls'), a('html').css(m), n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo || s), n._lastFocusedEl = document.activeElement, setTimeout(() => {
        n.content ? (n._addClassToMFP(k), n._setFocus()) : n.bgOverlay.addClass(k), t.on(`focusin${j}`, n._onFocusIn);
      }, 16), n.isOpen = !0, n.updateSize(l), z(g), b;
    },
    close() {
      if (!n.isOpen) return; z(c), n.isOpen = !1, n.st.removalDelay && !n.isLowIE && n.supportsTransition ? (n._addClassToMFP(l), setTimeout(() => {
        n._close();
      }, n.st.removalDelay)) : n._close();
    },
    _close() {
      z(b); let c = `${l} ${k} `; n.bgOverlay.detach(), n.wrap.detach(), n.container.empty(), n.st.mainClass && (c += `${n.st.mainClass} `), n._removeClassFromMFP(c); if (n.fixedContentPos) {
        const e = { marginRight: '' }; n.isIE7 ? a('body, html').css('overflow', '') : e.overflow = '', a('html').css(e);
      }t.off(`keyup${j} focusin${j}`), n.ev.off(j), n.wrap.attr('class', 'mfp-wrap').removeAttr('style'), n.bgOverlay.attr('class', 'mfp-bg'), n.container.attr('class', 'mfp-container'), n.st.showCloseBtn && (!n.st.closeBtnInside || n.currTemplate[n.currItem.type] === !0) && n.currTemplate.closeBtn && n.currTemplate.closeBtn.detach(), n._lastFocusedEl && a(n._lastFocusedEl).focus(), n.currItem = null, n.content = null, n.currTemplate = null, n.prevHeight = 0, z(d);
    },
    updateSize(a) {
      if (n.isIOS) {
        const b = document.documentElement.clientWidth / window.innerWidth; const c = window.innerHeight * b; n.wrap.css('height', c), n.wH = c;
      } else n.wH = a || r.height(); n.fixedContentPos || n.wrap.css('height', n.wH), z('Resize');
    },
    updateItemHTML() {
      let b = n.items[n.index]; n.contentContainer.detach(), n.content && n.content.detach(), b.parsed || (b = n.parseEl(n.index)); const c = b.type; z('BeforeChange', [n.currItem ? n.currItem.type : '', c]), n.currItem = b; if (!n.currTemplate[c]) {
        const d = n.st[c] ? n.st[c].markup : !1; z('FirstMarkupParse', d), d ? n.currTemplate[c] = a(d) : n.currTemplate[c] = !0;
      }u && u !== b.type && n.container.removeClass(`mfp-${u}-holder`); const e = n[`get${c.charAt(0).toUpperCase()}${c.slice(1)}`](b, n.currTemplate[c]); n.appendContent(e, c), b.preloaded = !0, z(h, b), u = b.type, n.container.prepend(n.contentContainer), z('AfterChange');
    },
    appendContent(a, b) {
      n.content = a, a ? n.st.showCloseBtn && n.st.closeBtnInside && n.currTemplate[b] === !0 ? n.content.find('.mfp-close').length || n.content.append(A()) : n.content = a : n.content = '', z(e), n.container.addClass(`mfp-${b}-holder`), n.contentContainer.append(n.content);
    },
    parseEl(b) {
      let c = n.items[b]; let d; c.tagName ? c = { el: a(c) } : (d = c.type, c = { data: c, src: c.src }); if (c.el) {
        const e = n.types; for (let f = 0; f < e.length; f++) {
          if (c.el.hasClass(`mfp-${e[f]}`)) {
            d = e[f]; break;
          }
        }c.src = c.el.attr('data-mfp-src'), c.src || (c.src = c.el.attr('href'));
      } return c.type = d || n.st.type || 'inline', c.index = b, c.parsed = !0, n.items[b] = c, z('ElementParse', c), n.items[b];
    },
    addGroup(a, b) {
      const c = function (c) {
        c.mfpEl = this, n._openClick(c, a, b);
      }; b || (b = {}); const d = 'click.magnificPopup'; b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)));
    },
    _openClick(b, c, d) {
      const e = d.midClick !== undefined ? d.midClick : a.magnificPopup.defaults.midClick; if (!e && (b.which === 2 || b.ctrlKey || b.metaKey)) return; const f = d.disableOn !== undefined ? d.disableOn : a.magnificPopup.defaults.disableOn; if (f) {
        if (a.isFunction(f)) {
          if (!f.call(n)) return !0;
        } else if (r.width() < f) return !0;
      } b.type && (b.preventDefault(), n.isOpen && b.stopPropagation()), d.el = a(b.mfpEl), d.delegate && (d.items = c.find(d.delegate)), n.open(d);
    },
    updateStatus(a, b) {
      if (n.preloader) {
        q !== a && n.container.removeClass(`mfp-s-${q}`), !b && a === 'loading' && (b = n.st.tLoading); const c = { status: a, text: b }; z('UpdateStatus', c), a = c.status, b = c.text, n.preloader.html(b), n.preloader.find('a').on('click', (a) => {
          a.stopImmediatePropagation();
        }), n.container.addClass(`mfp-s-${a}`), q = a;
      }
    },
    _checkIfClose(b) {
      if (a(b).hasClass(m)) return; const c = n.st.closeOnContentClick; const d = n.st.closeOnBgClick; if (c && d) return !0; if (!n.content || a(b).hasClass('mfp-close') || n.preloader && b === n.preloader[0]) return !0; if (b !== n.content[0] && !a.contains(n.content[0], b)) {
        if (d && a.contains(document, b)) return !0;
      } else if (c) return !0; return !1;
    },
    _addClassToMFP(a) {
      n.bgOverlay.addClass(a), n.wrap.addClass(a);
    },
    _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), n.wrap.removeClass(a);
    },
    _hasScrollBar(a) {
      return (n.isIE7 ? t.height() : document.body.scrollHeight) > (a || r.height());
    },
    _setFocus() {
      (n.st.focus ? n.content.find(n.st.focus).eq(0) : n.wrap).focus();
    },
    _onFocusIn(b) {
      if (b.target !== n.wrap[0] && !a.contains(n.wrap[0], b.target)) return n._setFocus(), !1;
    },
    _parseMarkup(b, c, d) {
      let e; d.data && (c = a.extend(d.data, c)), z(f, [b, c, d]), a.each(c, (a, c) => {
        if (c === undefined || c === !1) return !0; e = a.split('_'); if (e.length > 1) {
          const d = b.find(`${j}-${e[0]}`); if (d.length > 0) {
            const f = e[1]; f === 'replaceWith' ? d[0] !== c[0] && d.replaceWith(c) : f === 'img' ? d.is('img') ? d.attr('src', c) : d.replaceWith(`<img src="${c}" class="${d.attr('class')}" />`) : d.attr(e[1], c);
          }
        } else b.find(`${j}-${a}`).html(c);
      });
    },
    _getScrollbarSize() {
      if (n.scrollbarSize === undefined) {
        const a = document.createElement('div'); a.id = 'mfp-sbm', a.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;', document.body.appendChild(a), n.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      } return n.scrollbarSize;
    },
  }, a.magnificPopup = {
    instance: null,
    proto: o.prototype,
    modules: [],
    open(b, c) {
      return B(), b ? b = a.extend(!0, {}, b) : b = {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0, key: null, midClick: !1, mainClass: '', preloader: !0, focus: '', closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...',
    },
  }, a.fn.magnificPopup = function (b) {
    B(); const c = a(this); if (typeof b === 'string') {
      if (b === 'open') {
        let d; const e = p ? c.data('magnificPopup') : c[0].magnificPopup; const f = parseInt(arguments[1], 10) || 0; e.items ? d = e.items[f] : (d = c, e.delegate && (d = d.find(e.delegate)), d = d.eq(f)), n._openClick({ mfpEl: d }, c, e);
      } else n.isOpen && n[b].apply(n, Array.prototype.slice.call(arguments, 1));
    } else b = a.extend(!0, {}, b), p ? c.data('magnificPopup', b) : c[0].magnificPopup = b, n.addGroup(c, b); return c;
  }; const D = 'inline'; let E; let F; let G; const H = function () {
    G && (F.after(G.addClass(E)).detach(), G = null);
  }; a.magnificPopup.registerModule(D, {
    options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
    proto: {
      initInline() {
        n.types.push(D), x(`${b}.${D}`, () => {
          H();
        });
      },
      getInline(b, c) {
        H(); if (b.src) {
          const d = n.st.inline; let e = a(b.src); if (e.length) {
            const f = e[0].parentNode; f && f.tagName && (F || (E = d.hiddenClass, F = y(E), E = `mfp-${E}`), G = e.after(F).detach().removeClass(E)), n.updateStatus('ready');
          } else n.updateStatus('error', d.tNotFound), e = a('<div>'); return b.inlineElement = e, e;
        } return n.updateStatus('ready'), n._parseMarkup(c, {}, b), c;
      },
    },
  }); let I; const J = function (b) {
    if (b.data && b.data.title !== undefined) return b.data.title; const c = n.st.image.titleSrc; if (c) {
      if (a.isFunction(c)) return c.call(n, b); if (b.el) return b.el.attr(c) || '';
    } return '';
  }; a.magnificPopup.registerModule('image', {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage() {
        const a = n.st.image; const c = '.image'; n.types.push('image'), x(g + c, () => {
          n.currItem.type === 'image' && a.cursor && s.addClass(a.cursor);
        }), x(b + c, () => {
          a.cursor && s.removeClass(a.cursor), r.off(`resize${j}`);
        }), x(`Resize${c}`, n.resizeImage), n.isLowIE && x('AfterChange', n.resizeImage);
      },
      resizeImage() {
        const a = n.currItem; if (!a || !a.img) return; if (n.st.image.verticalFit) {
          let b = 0; n.isLowIE && (b = parseInt(a.img.css('padding-top'), 10) + parseInt(a.img.css('padding-bottom'), 10)), a.img.css('max-height', n.wH - b);
        }
      },
      _onImageHasSize(a) {
        a.img && (a.hasSize = !0, I && clearInterval(I), a.isCheckingImgSize = !1, z('ImageHasSize', a), a.imgHidden && (n.content && n.content.removeClass('mfp-loading'), a.imgHidden = !1));
      },
      findImageSize(a) {
        let b = 0; const c = a.img[0]; var d = function (e) {
          I && clearInterval(I), I = setInterval(() => {
            if (c.naturalWidth > 0) {
              n._onImageHasSize(a); return;
            }b > 200 && clearInterval(I), b++, b === 3 ? d(10) : b === 40 ? d(50) : b === 100 && d(500);
          }, e);
        }; d(1);
      },
      getImage(b, c) {
        let d = 0; var e = function () {
          b && (b.img[0].complete ? (b.img.off('.mfploader'), b === n.currItem && (n._onImageHasSize(b), n.updateStatus('ready')), b.hasSize = !0, b.loaded = !0, z('ImageLoadComplete')) : (d++, d < 200 ? setTimeout(e, 100) : f()));
        }; var f = function () {
          b && (b.img.off('.mfploader'), b === n.currItem && (n._onImageHasSize(b), n.updateStatus('error', g.tError.replace('%url%', b.src))), b.hasSize = !0, b.loaded = !0, b.loadError = !0);
        }; var g = n.st.image; const h = c.find('.mfp-img'); if (h.length) {
          let i = document.createElement('img'); i.className = 'mfp-img', b.img = a(i).on('load.mfploader', e).on('error.mfploader', f), i.src = b.src, h.is('img') && (b.img = b.img.clone()), i = b.img[0], i.naturalWidth > 0 ? b.hasSize = !0 : i.width || (b.hasSize = !1);
        } return n._parseMarkup(c, { title: J(b), img_replaceWith: b.img }, b), n.resizeImage(), b.hasSize ? (I && clearInterval(I), b.loadError ? (c.addClass('mfp-loading'), n.updateStatus('error', g.tError.replace('%url%', b.src))) : (c.removeClass('mfp-loading'), n.updateStatus('ready')), c) : (n.updateStatus('loading'), b.loading = !0, b.hasSize || (b.imgHidden = !0, c.addClass('mfp-loading'), n.findImageSize(b)), c);
      },
    },
  }); let K; const L = function () {
    return K === undefined && (K = document.createElement('p').style.MozTransform !== undefined), K;
  }; a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener(a) {
        return a.is('img') ? a : a.find('img');
      },
    },
    proto: {
      initZoom() {
        const a = n.st.zoom; const d = '.zoom'; let e; if (!a.enabled || !n.supportsTransition) return; const f = a.duration; const g = function (b) {
          const c = b.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'); const d = `all ${a.duration / 1e3}s ${a.easing}`; const e = {
            position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden',
          }; const f = 'transition'; return e[`-webkit-${f}`] = e[`-moz-${f}`] = e[`-o-${f}`] = e[f] = d, c.css(e), c;
        }; const h = function () {
          n.content.css('visibility', 'visible');
        }; let i; let j; x(`BuildControls${d}`, () => {
          if (n._allowZoom()) {
            clearTimeout(i), n.content.css('visibility', 'hidden'), e = n._getItemToZoom(); if (!e) {
              h(); return;
            }j = g(e), j.css(n._getOffset()), n.wrap.append(j), i = setTimeout(() => {
              j.css(n._getOffset(!0)), i = setTimeout(() => {
                h(), setTimeout(() => {
                  j.remove(), e = j = null, z('ZoomAnimationEnded');
                }, 16);
              }, f);
            }, 16);
          }
        }), x(c + d, () => {
          if (n._allowZoom()) {
            clearTimeout(i), n.st.removalDelay = f; if (!e) {
              e = n._getItemToZoom(); if (!e) return; j = g(e);
            }j.css(n._getOffset(!0)), n.wrap.append(j), n.content.css('visibility', 'hidden'), setTimeout(() => {
              j.css(n._getOffset());
            }, 16);
          }
        }), x(b + d, () => {
          n._allowZoom() && (h(), j && j.remove(), e = null);
        });
      },
      _allowZoom() {
        return n.currItem.type === 'image';
      },
      _getItemToZoom() {
        return n.currItem.hasSize ? n.currItem.img : !1;
      },
      _getOffset(b) {
        let c; b ? c = n.currItem.img : c = n.st.zoom.opener(n.currItem.el || n.currItem); const d = c.offset(); const e = parseInt(c.css('padding-top'), 10); const f = parseInt(c.css('padding-bottom'), 10); d.top -= a(window).scrollTop() - e; const g = { width: c.width(), height: (p ? c.innerHeight() : c[0].offsetHeight) - f - e }; return L() ? g['-moz-transform'] = g.transform = `translate(${d.left}px,${d.top}px)` : (g.left = d.left, g.top = d.top), g;
      },
    },
  }); const M = 'retina'; a.magnificPopup.registerModule(M, {
    options: {
      replaceSrc(a) {
        return a.src.replace(/\.\w+$/, (a) => `@2x${a}`);
      },
      ratio: 1,
    },
    proto: {
      initRetina() {
        if (window.devicePixelRatio > 1) {
          const a = n.st.retina; let b = a.ratio; b = isNaN(b) ? b() : b, b > 1 && (x(`ImageHasSize.${M}`, (a, c) => {
            c.img.css({ 'max-width': c.img[0].naturalWidth / b, width: '100%' });
          }), x(`ElementParse.${M}`, (c, d) => {
            d.src = a.replaceSrc(d, b);
          }));
        }
      },
    },
  }), (function () {
    const b = 1e3; const c = 'ontouchstart' in window; const d = function () {
      r.off(`touchmove${f} touchend${f}`);
    }; const e = 'mfpFastClick'; var f = `.${e}`; a.fn.mfpFastClick = function (e) {
      return a(this).each(function () {
        const g = a(this); let h; if (c) {
          let i; let j; let k; let l; let m; let n; g.on(`touchstart${f}`, (a) => {
            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, r.on(`touchmove${f}`, (a) => {
              m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0]; if (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10)l = !0, d();
            }).on(`touchend${f}`, (a) => {
              d(); if (l || n > 1) return; h = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(() => {
                h = !1;
              }, b), e();
            });
          });
        }g.on(`click${f}`, () => {
          h || e();
        });
      });
    }, a.fn.destroyMfpFastClick = function () {
      a(this).off(`touchstart${f} click${f}`), c && r.off(`touchmove${f} touchend${f}`);
    };
  }()), B();
}(window.jQuery || window.Zepto));
