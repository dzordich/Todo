/**
 * Copyright Ben McDonald - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Ben McDonald <mcdonald.ben@gmail.com>
*/
localStorage.svgXmlText = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:se="http://svg-edit.googlecode.com" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="777" height="480">                                    <title>my vector image</title>                                    <!-- Created with Vector Paint - http://www.vectorpaint.yaks.com/ https://chrome.google.com/webstore/detail/hnbpdiengicdefcjecjbnjnoifekhgdo -->                                    <rect id="backgroundrect" width="100%" height="100%" x="0" y="0" fill="#FFFFFF" stroke="none"/>                                <g class="currentLayer"><title>Layer 1</title></g></svg>';
SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function (toElement) {
  return toElement.getScreenCTM().inverse().multiply(this.getScreenCTM());
};
function getTransformToElement(e, toElement) {
  return toElement.getScreenCTM().inverse().multiply(e.getScreenCTM());
}
window.applicationCache = window.applicationCache || {
  swapCache: () =>{
  },
  addEventListener: () =>{
  },
  status: null
};
function $$(e, t, n) {
  var r;
  return n ? (r = e + ',' + t, (!this.hasOwnProperty(r) || n) && (this[r] = $(e, t)))  : t ? 'boolean' == typeof t ? (r = e, (!this.hasOwnProperty(r) || t) && (this[r] = $(e)))  : (r = e + ',' + t, this[r] = $(e, t))  : (r = e, this.hasOwnProperty(r) || (this[r] = $(e))),
  this[r]
}
function MathUtilsDefinition() {
  'use strict';
  function e(e) {
    var n = {
    };
    return n.left = e.left || e.x,
    n.top = e.top || e.y,
    n.right = e.right || n.left + e.width,
    n.bottom = e.bottom || n.top + e.height,
    console.assert(n.right > n.left && n.bottom > n.top),
    n.x = e.x || n.left,
    n.y = e.y || n.right,
    n.width = e.width || n.right - n.left,
    n.height = e.height || n.bottom - n.top,
    e = null,
    n.center = a(n.left + n.width / 2, n.top + n.height / 2),
    n.insects = function (e) {
      return t(n, e)
    },
    n.scale = function (e) {
      var t = e * n.width - n.width,
      r = e * n.height - n.height;
      n.left -= t / 2,
      n.right += t / 2,
      n.top -= r / 2,
      n.bottom += r / 2,
      n.x = n.left,
      n.y = n.right,
      n.width = n.right - n.left,
      n.height = n.bottom - n.top,
      n.center = a(n.left + n.width / 2, n.top + n.height / 2)
    },
    n.toLines = function () {
      return [o({
        x: n.left,
        y: n.top
      }, {
        x: n.right,
        y: n.top
      }),
      o({
        x: n.left,
        y: n.bottom
      }, {
        x: n.right,
        y: n.bottom
      }),
      o({
        x: n.left,
        y: n.top
      }, {
        x: n.left,
        y: n.bottom
      }),
      o({
        x: n.right,
        y: n.top
      }, {
        x: n.right,
        y: n.bottom
      })]
    },
    n
  }
  function t(e, t) {
    return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y
  }
  function n(e, t) {
    return intersection.intersect(e, t)
  }
  function r(t, r) {
    var i = r.vector.inverse().normilized(),
    a = e(t);
    return a.scale(1.2),
    Math.abs(i.x / a.width) > Math.abs(i.y / a.height) ? i.x > 0 ? n(r, a.toLines() [3])  : n(r, a.toLines() [2])  : i.y > 0 ? n(r, a.toLines() [1])  : n(r, a.toLines() [0])
  }
  function i(e, t) {
    console.assert('number' == typeof e && 'number' == typeof t);
    var n = {
    };
    return n.x = e,
    n.y = t,
    n.length = u.bind(null, n),
    n.normilized = d.bind(null, n),
    n.normal = function () {
      var e = n.normilized();
      return i( - e.y, e.x)
    },
    n.add = function (n) {
      return i(e + n.x, t + n.y)
    },
    n.angle = Math.atan2(n.y, n.x),
    n.angle *= 180 / Math.PI,
    n.angle += 180,
    n.inverse = function () {
      return i( - e, - t)
    },
    n
  }
  function a(e, t) {
    var n = {
    };
    return n.x = e,
    n.y = t,
    n
  }
  function o(e, t) {
    var n = {
    };
    return n.x1 = e.x,
    n.y1 = e.y,
    n.x2 = t.x,
    n.y2 = t.y,
    n.vector = i(e.x - t.x, e.y - t.y),
    n.inverse = function () {
      return o(t, e)
    },
    n.start = e,
    n.end = t,
    n
  }
  function s(e, t) {
    return i(e.x * t, e.y * t)
  }
  function l(e, t) {
    return i(e.x * t.x, e.y * t.x)
  }
  function c(e, t) {
    return i(e.x + t.x, e.y + t.y)
  }
  function u(e) {
    return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2))
  }
  function d(e) {
    u(e);
    var t = Math.max(Math.abs(e.x), Math.abs(e.y));
    return s(e, 1 / t)
  }
  function f(e) {
    return Math.abs(e.x > e.y) ? i(e.x / Math.abs(e.x), 0)  : i(0, e.y / Math.abs(e.y))
  }
  return Object.freeze({
    rectsIntersect: t,
    Vector2D: i,
    Point2D: a,
    Line2D: o,
    Rect: e,
    scaleVector: s,
    multi2Vector: l,
    addVectors: c,
    lengthOfVector: u,
    normilizeVector: d,
    rectLineExitIntersect: r,
    vectorAxisDirection: f
  })
}
function DOM_DropEventDefinition() {
  'use strict';
  function e(e) {
    return e.preventDefault(),
    e.dataTransfer.dropEffect = 'move',
    !1
  }
  function t() {
    this.classList.add('drag-over')
  }
  function n() {
    this.classList.remove('drag-over')
  }
  return function (r, i) {
    function a(e) {
      e.stopPropagation(),
      e.preventDefault();
      for (var t, n = e.dataTransfer.files, r = 0; t = n[r]; r++) {
        var a = new FileReader,
        o = t.type;
        a.onload = function () {
          return function (e) {
            console.log('DROP', e.target.result, o, e),
            i(e.target.result, o, e)
          }
        }(t),
        a.readAsDataURL(t)
      }
      return Array.from(e.dataTransfer.types).forEach(function (t) {
        console.log('DROP', e.dataTransfer.getData(t), t, e),
        i(e.dataTransfer.getData(t), t, e)
      }),
      !1
    }
    return r.addEventListener('dragenter', t, !1),
    r.addEventListener('dragover', e, !1),
    r.addEventListener('dragleave', n, !1),
    r.addEventListener('drop', a, !1),
    function () {
      r.removeEventListener('dragenter', t, !1),
      r.removeEventListener('dragover', e, !1),
      r.removeEventListener('dragleave', n, !1),
      r.removeEventListener('drop', a, !1)
    }
  }
}
function SVGUtilsDefinition(e) {
  'use strict';
  var t = {
  };
  return t.svgns = 'http://www.w3.org/2000/svg',
  t.xlinkns = 'http://www.w3.org/1999/xlink',
  t.xmlns = 'http://www.w3.org/XML/1998/namespace',
  t.xmlnsns = 'http://www.w3.org/2000/xmlns/',
  t.htmlns = 'http://www.w3.org/1999/xhtml',
  t.mathns = 'http://www.w3.org/1998/Math/MathML',
  t.colorProperties = [
    'stroke',
    'fill',
    'stopColor',
    'stop-color'
  ],
  t.scaleViewport = function (e, n, r, i) {
    var a = Math.pow(1.3, n),
    o = e.ownerSVGElement.createSVGMatrix().translate(r, i).scale(a).translate( - r, - i);
    if (e.transform.baseVal.numberOfItems) {
      e.transform.baseVal.consolidate();
      var s = e.transform.baseVal.getItem(0).matrix;
      o = s.multiply(o)
    }
    return t.setCTM(e, o),
    o
  },
  t.absoluteScaleViewport = function (e, n) {
    var r = e.ownerSVGElement.createSVGMatrix().scale(n);
    if (e.transform.baseVal.numberOfItems) {
      e.transform.baseVal.consolidate();
      var i = e.transform.baseVal.getItem(0).matrix;
      i.a = 1,
      i.d = 1,
      r = i
    }
    return t.setCTM(e, r),
    r
  },
  t.setCTM = function (e, t) {
    return e.transform.baseVal.initialize(e.ownerSVGElement.createSVGTransformFromMatrix(t))
  },
  t.getAllAttributesValues = function (e, t) {
    var n = t.map(function (t) {
      return Array.from(e.querySelectorAll('[' + t + ']')).map(function (e) {
        return e.getAttribute(t)
      })
    });
    return [].concat.apply([], n)
  },
  t.getAllAttributesWithURL = function (e) {
    var n = t.getAllAttributesValues(e, attributeWithReferences).map(t.getUrlFromAttr);
    return n.filter(function (e) {
      return e
    })
  },
  t.getUrlFromAttr = function (e) {
    if (e) {
      if (0 === e.indexOf('url("')) return e.substring(5, e.indexOf('"', 6));
      if (0 === e.indexOf('url(\'')) return e.substring(5, e.indexOf('\'', 6));
      if (0 === e.indexOf('url(')) return e.substring(4, e.indexOf(')'))
    }
    return null
  },
  t.adjustSvgDomColors = function (t, n) {
    return e.applyFunctionToAttributes(t.cloneNode(!0), [
      'stroke',
      'fill',
      'stopColor',
      'stop-color'
    ], [
      'stroke',
      'fill',
      'stopColor',
      'stop-color'
    ], function (e) {
      return - 1 === e.indexOf('url') && 'none' !== e ? n(e)  : e
    })
  },
  t.domToSvgUrl = function (e) {
    return 'data:image/svg+xml;base64,' + window.btoa((new XMLSerializer).serializeToString(e))
  },
  t.removeUnusedDefs = function (e) {
    var n = t.getAllAttributesWithURL(e);
    Array.from(e.querySelectorAll('defs > *')).forEach(function (e) {
      - 1 === n.indexOf('#' + e.id) && e.parentNode.removeChild(e)
    })
  },
  t.makeLinearGradient = function (e, n, r, i, a, o) {
    var s = e.createElementNS(t.svgns, 'linearGradient');
    return s.setAttribute('color-interpolation', 'linearRGB'),
    i.x /= 2,
    i.y /= 2,
    i && (i.x > 0 ? (i.x += 0.25, s.setAttribute('x1', '0.25'), s.setAttribute('x2', i.x))  : (i.x -= 0.25, s.setAttribute('x1', - i.x), s.setAttribute('x2', '0.25')), i.y > 0 ? (i.y += 0.25, s.setAttribute('y1', '0.25'), s.setAttribute('y2', i.y))  : (i.y -= 0.25, s.setAttribute('y1', - i.y), s.setAttribute('y2', '0.25'))),
    a && (s.setAttribute('gradientUnits', 'userSpaceOnUse'), s.setAttribute('gradientTransform', 'rotate(' + Math.round(a) + ')')),
    o && (s.setAttribute('gradientUnits', 'userSpaceOnUse'), s.setAttribute('gradientTransform', 'transform(' + o + ')')),
    r.forEach(function (n, r) {
      var i = e.createElementNS(t.svgns, 'stop');
      i.setAttribute('stop-color', n.color),
      n.offset && i.setAttribute('offset', n.offset || '' + 100 * r + '%'),
      n.opacity && i.setAttribute('stop-opacity', n.opacity),
      s.appendChild(i)
    }),
    n.querySelector('defs').appendChild(s),
    s
  },
  t.addLinearGradient = function (e, n, r) {
    var i = makeLinearGradient(e.ownerDocument, e.ownerSVGElement, r);
    i.id = e.id + n,
    e.setAttribute(n, 'url(#' + i.id + ')'),
    t.removeUnusedDefs(e.ownerSVGElement)
  },
  t.absolutizePath = function (e) {
    var t,
    n,
    r,
    i,
    a,
    o,
    s,
    l,
    c,
    u,
    d,
    f,
    h = e.pathSegList,
    p = h.numberOfItems,
    g = 'createSVGPathSegMovetoAbs',
    v = 'createSVGPathSegLinetoAbs',
    m = 'createSVGPathSegLinetoHorizontalAbs',
    y = 'createSVGPathSegLinetoVerticalAbs',
    b = 'createSVGPathSegCurvetoCubicAbs',
    x = 'createSVGPathSegCurvetoCubicSmoothAbs',
    w = 'createSVGPathSegCurvetoQuadraticAbs',
    k = 'createSVGPathSegCurvetoQuadraticSmoothAbs',
    S = 'createSVGPathSegArcAbs';
    for (r = i = a = 0; p > a; a++) {
      if (t = h.getItem(a), o = t.pathSegTypeAsLetter, n = void 0, /[MLHVCSQTA]/.test(o)) 'x' in t && (r = t.x),
      'y' in t && (i = t.y);
       else {
        switch ('x1' in t && (c = r + t.x1), 'x2' in t && (d = r + t.x2), 'y1' in t && (u = i + t.y1), 'y2' in t && (f = i + t.y2), 'x' in t && (r += t.x), 'y' in t && (i += t.y), o) {
          case 'm':
            n = e[g](r, i);
            break;
          case 'l':
            n = e[v](r, i);
            break;
          case 'h':
            n = e[m](r);
            break;
          case 'v':
            n = e[y](i);
            break;
          case 'c':
            n = e[b](r, i, c, u, d, f);
            break;
          case 's':
            n = e[x](r, i, d, f);
            break;
          case 'q':
            n = e[w](r, i, c, u);
            break;
          case 't':
            n = e[k](r, i);
            break;
          case 'a':
            n = e[S](r, i, t.r1, t.r2, t.angle, t.largeArcFlag, t.sweepFlag);
            break;
          case 'z':
          case 'Z':
            r = s,
            i = l
        }
        n && h.replaceItem(n, a)
      }('M' == o || 'm' == o) && (s = r, l = i)
    }
  },
  t.pathify = function (e, t) {
    function n() {
      var t = + e.getAttribute('x1'),
      n = + e.getAttribute('y1'),
      r = + e.getAttribute('x2'),
      i = + e.getAttribute('y2');
      l.setAttribute('d', 'M' + t + ',' + n + 'L' + r + ',' + i)
    }
    function r() {
      var t,
      n = + e.getAttribute('x'),
      r = + e.getAttribute('y'),
      i = + e.getAttribute('width'),
      a = + e.getAttribute('height'),
      o = Math.min(i / 2, + e.getAttribute('rx') || 0),
      s = Math.min(a / 2, + e.getAttribute('ry') || 0),
      c = o || s;
      o && !e.hasAttribute('ry') ? s = o : s && !e.hasAttribute('rx') && (o = s),
      t = 'A' + o + ',' + s + ',0,0,' + (0 > o * s ? 0 : 1) + ',',
      l.setAttribute('d', 'M' + (n + o) + ',' + r + 0 / 0 + (n + i - o) + (c ? t + (n + i) + ',' + (r + s)  : '') + 'V' + (r + a - s) + (c ? t + (n + i - o) + ',' + (r + a)  : '') + 'H' + (n + o) + (c ? t + n + ',' + (r + a - s)  : '') + 'V' + (r + s) + (c ? t + (n + o) + ',' + r : ''))
    }
    function i() {
      var t = + e.getAttribute('cx'),
      n = + e.getAttribute('cy'),
      r = + e.getAttribute('r'),
      i = n - r,
      a = n + r;
      l.setAttribute('d', 'M' + t + ',' + i + 'A' + [r,
      r,
      0,
      0,
      0,
      t,
      a,
      r,
      r,
      0,
      0,
      0,
      t,
      i].join(','))
    }
    function a() {
      var t = + e.getAttribute('cx'),
      n = + e.getAttribute('cy'),
      r = + e.getAttribute('rx'),
      i = + e.getAttribute('ry'),
      a = n - i,
      o = n + i;
      l.setAttribute('d', 'M' + t + ',' + a + 'A' + [r,
      i,
      0,
      0,
      0,
      t,
      o,
      r,
      i,
      0,
      0,
      0,
      t,
      a].join(','))
    }
    function o() {
      for (var t, n = 0, r = [
      ], i = e.points; pth.numberOfItems > n; n++) t = i.getItem(n),
      r[n] = t.x + ',' + t.y;
      l.setAttribute('d', 'M' + r.shift() + 'L' + r.join(' ') + ('polygon' == e.tagName) ? 'Z' : '')
    }
    var s,
    l,
    c,
    u,
    d = 'nodeType' in e ? e : e[0],
    f = d.ownerDocument,
    h = d.ownerSVGElement,
    p = h.getAttribute('xmlns'),
    g = (t || h).getCTM().inverse(),
    v = g.multiply(d.getCTM()),
    m = [
    ],
    y = {
      path: function () {
        l.setAttribute('d', e.getAttribute('d'))
      },
      line: n,
      rect: r,
      circle: i,
      ellipse: a,
      polygon: o,
      polyline: o
    };
    if ('g' == e.tagName || 'function' == typeof e.push) for (s = 0; d = (e.childNodes || e) [s]; s++) 1 == d.nodeType && (m = m.concat(pathify(d, t)));
     else l = f.createElementNS(p, 'path'),
    c = y[e.tagName],
    c ? c()  : l = null,
    l && (u = h.createSVGTransform(), u.setMatrix(v), l.transform.baseVal.initialize(u), e.parentNode.appendChild(l), l.setAttribute('d', applyTransforms(l)), l.removeAttribute('transform'), e.parentNode.removeChild(l), copyPresentation(e, l), m.push(l));
    return m
  },
  t.transformedBoundingBox = function (e) {
    var t = e.getBBox(),
    n = e.ownerSVGElement,
    r = getTransformToElement(e, e.parentNode);
    if (!n) return null;
    var i = [
      n.createSVGPoint(),
      n.createSVGPoint(),
      n.createSVGPoint(),
      n.createSVGPoint()
    ];
    i[0].x = t.x,
    i[0].y = t.y,
    i[1].x = t.x + t.width,
    i[1].y = t.y,
    i[2].x = t.x + t.width,
    i[2].y = t.y + t.height,
    i[3].x = t.x,
    i[3].y = t.y + t.height;
    var a = 1 / 0,
    o = - 1 / 0,
    s = 1 / 0,
    l = - 1 / 0;
    i.forEach(function (e) {
      e = e.matrixTransform(r),
      a = Math.min(a, e.x),
      o = Math.max(o, e.x),
      s = Math.min(s, e.y),
      l = Math.max(l, e.y)
    });
    var c = {
    };
    return c.x = 0 | a,
    c.width = 0 | o - a,
    c.y = 0 | s,
    c.height = 0 | l - s,
    c
  },
  t.bboxOfGroup = function (e) {
    var t = {
    },
    n = 1 / 0,
    r = - 1 / 0,
    i = 1 / 0,
    a = - 1 / 0;
    return e.forEach(function (e) {
      var t = svgUtils.transformedBoundingBox(e);
      n = Math.min(n, t.x),
      r = Math.max(r, t.x + t.width),
      i = Math.min(i, t.y),
      a = Math.max(a, t.y + t.height)
    }),
    t.x = n,
    t.y = i,
    t.width = r - n,
    t.height = a - i,
    t
  },
  t.clientToSVGCoords = function (e, t, n) {
    var r = e.createSVGPoint(),
    i = e.currentScale,
    a = e.currentTranslate;
    r.x = (t - a.x) / i,
    r.y = (n - a.y) / i;
    var o = parseInt(e.style.zoom, 10) || 1;
    r.x /= o,
    r.y /= o;
    var s = e.getScreenCTM();
    return s.inverse() && (r = r.matrixTransform(s.inverse())),
    r
  },
  t.svgStringToDOMElement = function (e) {
    e = e.replace(/( href)/gm, ' xlink:href');
    var t = (new DOMParser).parseFromString('<svg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'>' + e + '</svg>', 'text/xml');
    return t.documentElement && 'html' !== t.documentElement.nodeName.toLowerCase() && (t = document.adoptNode(t.documentElement)),
    Array.from(t.querySelectorAll('image')).forEach(function (e) {
      var t = [
        e.getAttributeNS(xlinkns, 'href'),
        e.getAttribute('href'),
        e.getAttribute('xlink:href')
      ],
      n = t.filter(function (e) {
        return e && 'null' !== e && '' !== e
      }) [0];
      e.removeAttributeNS(xlinkns, 'href'),
      e.removeAttribute('href'),
      e.removeAttribute('xlink:href'),
      e.setAttributeNS(xlinkns, 'xlink:href', n)
    }),
    t.firstChild
  },
  t.makeElmentFromMimeType = function (e, n) {
    var r;
    switch (n) {
      case 'image/png':
      case 'image/jpeg':
      case 'image/tiff':
      case 'image/gif':
      case 'image/svg+xml':
        r = document.createElementNS(t.svgns, 'image'),
        r.setAttributeNS(t.xlinkns, 'xlink:href', e),
        r.setAttributeNS(null, 'width', '10%'),
        r.setAttributeNS(null, 'height', '10%'),
        r.setAttributeNS(null, 'x', '0'),
        r.setAttributeNS(null, 'y', '0');
        break;
      case 'text/plain':
        break;
      case 'text/xml':
        r = t.svgStringToDOMElement(e)
    }
    return r
  },
  Object.freeze(t)
}
function XSLRulesDefinition() {
  'use strict';
  function e(e) {
    return e.substring(e.indexOf(':') + 1)
  }
  function t(t) {
    function n(r) {
      var i = [
      ],
      a = Array.from(r.querySelectorAll('attributeGroup')).map(function (n) {
        var r = n.getAttribute('ref');
        return r = e(r),
        t.querySelector('[name="' + r + '"]')
      });
      return a.forEach(function (e) {
        i = i.concat(n(e))
      }),
      i = i.concat(Array.from(r.querySelectorAll('attribute')))
    }
    function r(n) {
      var r = t.querySelector('element[name="' + e(n) + '"]');
      return r ? t.querySelector('[name="' + e(r.getAttribute('type')) + '"]')  : null
    }
    function i(e) {
      var t = r(e);
      return t ? n(t).map(function (e) {
        return e.getAttribute('name')
      }).filter(function (e) {
        return e
      })  : null
    }
    function a(e, t) {
      if (e.getAttribute(t)) return e.getAttribute(t);
      var i,
      a = r(e.nodeName);
      return n(a).forEach(function (e) {
        t === e.getAttribute('name') && (i = e.getAttribute('default'))
      }),
      i
    }
    function o(e, t) {
      var i,
      a = r(e);
      return n(a).forEach(function (e) {
        t === e.getAttribute('name') && (i = e.getAttribute('default'))
      }),
      i
    }
    return {
      getAttriOfSVGElement: i,
      getAttriDefault: a,
      getAttriDefaultNodeName: o,
      getAttri: n
    }
  }
  return t
}
function CanvasControllerDefinition(e, t) {
  'use strict';
  var n = function () {
    var e = {
    },
    t = {
      SELECT: 0
    },
    n = t.SELECT;
    return e.addMode = function (e) {
      t.push(e)
    },
    e.all = function () {
      return t
    },
    e.getCurrent = function () {
      return n
    },
    e.setCurrent = function (e) {
      n = t[e]
    },
    e
  },
  r = function (r, i, a) {
    function o(e) {
      return - 1 !== h.indexOf(e)
    }
    function s(e, t) {
      console.assert(t !== o(e)),
      r.setSelected(e, t),
      t ? h.push(e)  : h.splice(h.indexOf(e), 1),
      i('selection-change', e, t),
      console.assert(t === o(e))
    }
    function l(t) {
      var n = [
      ];
      return r.getAllSelectable().forEach(function (i) {
        var a = r.getObjectBbox(i);
        e.rectsIntersect(t, a) && n.push(i)
      }),
      n
    }
    function c(e) {
      var t = null,
      n = r.getAllSelectable();
      if (n.length) {
        var i = 0,
        a = d.getSelectedElems();
        a.length && (i = n.indexOf(a[0]), i += e + n.length, i %= n.length),
        t = n[i],
        d.selectOnly([t]),
        console.assert(t)
      }
      return [t]
    }
    var u,
    d = a || {
    },
    f = n(),
    h = [
    ],
    p = null,
    g = null;
    d.selectOnly = function (e) {
      console.assert(e.forEach);
      var t = d.getSelectedElems(),
      n = t.filter(function (t) {
        return - 1 === e.indexOf(t)
      }),
      r = e.filter(function (e) {
        return - 1 === t.indexOf(e)
      });
      return n.forEach(function (e) {
        s(e, !1)
      }),
      r.forEach(function (e) {
        s(e, !0)
      }),
      console.assert(e.length === d.getSelectedElems().length),
      e
    },
    d.getSelectedElems = function () {
      return h.slice(0)
    },
    d.reset = function () {
      r.getAllSelectable().forEach(r.remove),
      r.reset()
    },
    d.refresh = r.refresh,
    d.save = r.save,
    d.open = function (e) {
      d.reset(),
      r.load(e),
      u.canvasEdited('File Opened')
    },
    d.setBackground = function (e) {
      r.setBackground(e),
      u.canvasEdited('New background set')
    },
    d.getTitle = r.getTitle,
    d.setTitle = function (e) {
      i('title', r.getTitle(), e),
      r.setTitle(e),
      u.canvasEdited('New title set to ' + e)
    },
    d.setObjectAttribute = r.setObjectAttribute,
    d.getObjectAttribute = r.getObjectAttribute,
    d.scaleZoom = r.scaleZoom,
    d.zoom = r.zoom,
    d.setOption = function (e, t) {
      r.setOption(e, t),
      i('option', e, t)
    },
    d.getOptions = r.getOptions,
    d.add = r.add,
    d.getAlerts = r.getAlerts,
    d.hoverOver = function (e) {
      !o(e) && r.isDragable(e) && r.hoverOver(e)
    },
    d.hoverOut = r.hoverOut,
    d.tap = function (e, t, n) {
      r.isCanvasElem(e) ? n || t || d.clearSelected()  : n || t ? s(e, !o(e))  : d.selectOnly([e]),
      i('user-action', 'tap', e)
    },
    d.dblTap = function (e, t, n, a) {
      t || n || a || o(e) && (d.getSelectedElems().forEach(r.edit), i('user-action', 'dblTap'))
    };
    var v;
    d.dragStart = function (e, t, n, i) {
      return i ? p = d.getSelectedElems()  : e && !r.isCanvasElem(e) && (v = e),
      !0
    },
    d.dragMove = function (e, t, n, i, a, c, f, h) {
      if (p || v) if (f) {
        var y = {
          x: Math.min(n, a),
          y: Math.min(i, c),
          x2: Math.max(n, a),
          y2: Math.max(i, c)
        };
        y.width = y.x2 - y.x,
        y.height = y.y2 - y.y,
        r.setSelectionBox(y);
        var b = l(y);
        m(p, b, h)
      } else if (v) {
        if (o(v) || (h || f ? s(v, !0)  : d.selectOnly([v])), g) {
          var x = d.getSelectedElems().filter(r.isDragable);
          x.forEach(function (n) {
            r.move(n, e - g.x, t - g.y)
          }),
          u.canvasEdited('Objects ' + x.join(', ') + ' moved'),
          g = {
            x: e,
            y: t
          }
        }
        g = {
          x: e,
          y: t
        }
      } else d.dragEnd(),
      g = null;
       else g ? (r.scroll(e - g.x, t - g.y), g = {
        x: e - (e - g.x),
        y: t - (t - g.y)
      })  : g = {
        x: e,
        y: t
      };
      return !0
    },
    d.resetZoom = function () {
      r.absoluteZoom(1)
    },
    d.moveSelected = function (e, t) {
      var n = d.getSelectedElems().filter(r.isDragable);
      n.forEach(function (n) {
        r.move(n, e, t)
      })
    },
    d.scrollAction = function (e, t, n, i) {
      return r.scaleZoom(i, e, t)
    },
    d.dragEnd = function () {
      return g = null,
      v = null,
      p ? (r.hideSelectionBox(), p = null, i('user-action', 'dragEnd'), !0)  : !1
    };
    var m = function (e, t, n) {
      if (n) {
        var r = t.concat(e);
        r = r.filter(function (e, t) {
          return r.indexOf(e) === t
        }),
        d.selectOnly(r)
      } else d.selectOnly(t)
    };
    return d.move = function () {
    },
    d.nextSelected = function () {
      return c(1)
    },
    d.previousSelected = function () {
      return c( - 1)
    },
    d.selectAll = function () {
      var e = r.getAllSelectable();
      return d.selectOnly(e)
    },
    d.clearSelected = function () {
      return f.setCurrent(f.all().SELECT),
      d.selectOnly([])
    },
    d.remove = function () {
      var e = d.getSelectedElems();
      return d.clearSelected(),
      e.forEach(r.remove),
      i('removed', e),
      console.assert(0 === d.getSelectedElems().length),
      u.canvasEdited('Removed Object'),
      e
    },
    d.copy = function () {
      var e = r.serialize(d.getSelectedElems());
      return e
    },
    d.cut = function () {
      var e = r.serialize(d.getSelectedElems());
      return d.remove(),
      e
    },
    d.paste = function (e) {
      return r.add(e)
    },
    u = t(d.open, d.save, i),
    d.reset(),
    d.undo = u.undo,
    d.redo = u.redo,
    d.getActionHistory = u.getActionHistory,
    d
  };
  return r
}
function CanvasEventFunctionsDefinition() {
  'use strict';
  function e(e, t) {
    for (; e.parentNode; ) {
      if (e.matches(t)) return e;
      e = e.parentNode
    }
    return !1
  }
  function t(e, t) {
    var n = e.querySelector('g'),
    r = n.getScreenCTM().inverse();
    return t.matrixTransform(r)
  }
  function n(e, n) {
    var r = n.ownerSVGElement || n,
    i = r.createSVGPoint();
    i.x = 0 | e.clientX,
    i.y = 0 | e.clientY,
    i = t(n, i);
    var a = e.target;
    return a.correspondingUseElement && (a = a.correspondingUseElement),
    {
      x: i.x,
      y: i.y,
      target: a,
      mod1Key: e.shiftKey,
      mod2Key: e.altKey,
      mod3Key: e.metaKey || e.ctrlKey
    }
  }
  var r = {
  };
  return r = function (t, n, i, a) {
    function o(e) {
      var t = 0;
      e.wheelDelta ? (t = e.wheelDelta / 360, window.opera && (t = - t))  : e.detail && (t = - e.detail / 9);
      var i = r.processEvent(e, this);
      return n.scrollAction(i.x, i.y, t, t, i.mod1Key, i.mod2Key, i.mod3Key) ? (e.stopPropagation(), e.preventDefault(), !1)  : void 0
    }
    function s(e) {
      for (var n = e.toElement || e.relatedTarget; n && n.parentNode && n.parentNode !== window; ) {
        if (n.parentNode === this || n === this) return n.preventDefault && n.preventDefault(),
        void 0;
        n = n.parentNode
      }
      this !== t || e.toElement instanceof SVGElement || l(e)
    }
    function l() {
      f && n.dragEnd(),
      f = null,
      t.removeEventListener('mousemove', v, !1),
      t.removeEventListener('mouseout', s, !1),
      t.removeEventListener('mouseup', l, !1),
      t.addEventListener('mousemove', d, !1)
    }
    function c(t) {
      var a = r.processEvent(t, this);
      if (!p) {
        var o = e(a.target, i) || a.target;
        n.tap(o.id, a.mod1Key, a.mod3Key)
      }
      p = !1
    }
    function u(t) {
      var a = r.processEvent(t, this),
      o = e(a.target, i);
      p = !1,
      o && n.dblTap(o.id, a.mod1Key, a.mod2Key, a.mod3Key)
    }
    function d(t) {
      if (0 === t.button && !p) {
        var a = r.processEvent(t, this),
        o = e(a.target, i);
        o ? h ? h !== o.id && (n.hoverOut(h), n.hoverOver(o.id), h = o.id)  : (n.hoverOver(o.id), h = o.id)  : h && (n.hoverOut(h), h = null)
      }
    }
    var f,
    h,
    p = !1,
    g = function (i) {
      if (0 === i.button) {
        f = r.processEvent(i, this);
        var o,
        c = e(f.target, a);
        c && (o = c.id),
        n.dragStart(o, f.x, f.y, f.mod1Key, f.mod3Key) && (h && (n.hoverOut(h), h = null), t.removeEventListener('mousemove', d, !1), t.addEventListener('mousemove', v, !1), t.addEventListener('mouseout', s, !1), t.addEventListener('mouseup', l, !1))
      } else p = !1
    },
    v = function (e) {
      if (0 === e.button && f) {
        p = !0;
        var t = r.processEvent(e, this);
        n.dragMove(t.x, t.y, t.x, t.y, f.x, f.y, t.mod1Key, t.mod3Key)
      } else l(e)
    };
    return t.addEventListener('mousewheel', o, !1),
    t.addEventListener('DOMMouseScroll', o, !1),
    t.addEventListener('mousedown', g, !1),
    t.addEventListener('dblclick', u, !0),
    t.addEventListener('click', c, !1),
    t.addEventListener('mousemove', d, !1),
    function () {
      t.removeEventListener('mousewheel', o, !1),
      t.removeEventListener('DOMMouseScroll', o, !1),
      t.removeEventListener('mousedown', g, !1),
      t.removeEventListener('dblclick', u, !0),
      t.removeEventListener('click', c, !1)
    }
  },
  r.processEvent = n,
  r
}
function AddKeyboardControlsDefinition() {
  'use strict';
  function e(e) {
    function t() {
      return - 1 === ['button',
      'input',
      'radio',
      'select'].indexOf(document.activeElement.nodeName.toLowerCase())
    }
    key('del', function () {
      t() && e().remove()
    }),
    key('esc', function () {
      t() && e().clearSelected()
    }),
    key('ctrl+a, âŒ˜+a', function () {
      return t() && e().selectAll(),
      !1
    }),
    key('tab', function () {
      return t() && e().nextSelected(),
      !1
    }),
    key('ctrl+tab, â‡§+tab, âŒ˜+tab', function () {
      return t() && e().previousSelected(),
      !1
    }),
    key('up', function () {
      t() && e().moveSelected(0, - 1)
    }),
    key('down', function () {
      t() && e().moveSelected(0, 1)
    }),
    key('left', function () {
      t() && e().moveSelected( - 1, 0)
    }),
    key('right', function () {
      t() && e().moveSelected(1, 0)
    }),
    key('shift+up', function () {
      t() && e().moveSelected(0, - 10)
    }),
    key('shift+down', function () {
      t() && e().moveSelected(0, 10)
    }),
    key('shift+left', function () {
      t() && e().moveSelected( - 10, 0)
    }),
    key('shift+right', function () {
      t() && e().moveSelected(10, 0)
    }),
    key('0', function () {
      t() && e().resetZoom()
    }),
    key('-', function () {
      t() && e().zoom( - 0.3)
    }),
    key('=', function () {
      t() && e().zoom(0.3)
    }),
    key('ctrl+-, âŒ˜+-, shift+-', function () {
      t() && e().zoom( - 3)
    }),
    key('ctrl+=, âŒ˜+=, shift+=', function () {
      t() && e().zoom(3)
    }),
    key('ctrl+z, âŒ˜+z', function () {
      t() && e().undo()
    }),
    key('ctrl+y, âŒ˜+y, ctrl+shift+z, âŒ˜+shift+z', function () {
      t() && e().redo()
    });
    var n = function (t) {
      t.clipboardData.clearData(),
      t.clipboardData.setData('text/plain', e().copy()),
      t.preventDefault()
    };
    document.addEventListener('copy', n, !1),
    function () {
      var n = '';
      key('ctrl+x, âŒ˜+x', function () {
        t() && (n = e().cut())
      }),
      key('ctrl+c, âŒ˜+c', function () {
        t() && (n = e().copy())
      }),
      key('ctrl+v, âŒ˜+v', function () {
        t() && e().paste(n)
      })
    }()
  }
  return e
}
function HistoryDefinition() {
  'use strict';
  function e(e, t, n) {
    var r = {
    },
    i = [
    ],
    a = 0;
    return r.canvasEdited = function (e) {
      var r = t();
      i.length && i[a] === r || (a += 1, i.push({
        data: r,
        text: e
      })),
      n('edited', e)
    },
    r.undo = function () {
      a && (a -= 1, e(i[a].data), i.splice(a))
    },
    r.redo = function () {
      i.length - a && (a += 1, e(i[a].data))
    },
    r.getActionHistory = function () {
      return i.map(function (e) {
        return e.text
      })
    },
    r
  }
  return e
}
function SelectionControllerDefinition(e) {
  'use strict';
  var t = function (t, n) {
    var r,
    i = (new DOMParser).parseFromString(n, 'text/xml'),
    a = {
    },
    o = function () {
      return r || (r = document.createElementNS('http://www.w3.org/2000/svg', 'g'), t.querySelector('.zoom-view').appendChild(r)),
      r
    },
    s = new Map;
    a.resizeSelectorToElement = function (t, n) {
      n = n || 10;
      var r = s.get(t);
      if (r) {
        var i = e.transformedBoundingBox(t);
        i.x -= n / 2,
        i.y -= n / 2,
        i.width += n,
        i.height += n;
        var a = Array.from(r.getElementsByClassName('resize-grip'));
        a.forEach(function (e) {
          var t = parseFloat(e.getAttribute('width')),
          n = parseFloat(e.getAttribute('height')),
          r = parseFloat(e.getAttribute('data-dx')),
          a = parseFloat(e.getAttribute('data-dy'));
          e.setAttribute('x', i.x + 0.5 * i.width * (r + 1) - t / 2),
          e.setAttribute('y', i.y + 0.5 * i.height * (a + 1) - n / 2)
        });
        var o = r.querySelector('.border-box');
        o.setAttribute('x', i.x),
        o.setAttribute('y', i.y),
        o.setAttribute('width', i.width),
        o.setAttribute('height', i.height)
      }
    },
    a.updateAllSelectors = function () {
      s.keys().forEach(a.resizeSelectorToElement)
    },
    a.addBoxSelector = function (e) {
      var t = s.get(e);
      if (!t) {
        t = i.getElementById('selection-template').cloneNode(!0),
        t.setAttribute('class', 'selection-group'),
        s.set(e, t);
        var n = o();
        n.appendChild(t)
      }
      a.resizeSelectorToElement(e)
    },
    a.removeBoxSelector = function (e) {
      var t = s.get(e);
      t && (s.delete (e), t.parentNode.removeChild(t))
    };
    var l;
    return a.setSelectionBox = function (e, t) {
      if (t = t || 0, !l) {
        l = i.getElementById('selection-box-template').cloneNode(!0),
        l.removeAttribute('id');
        var n = o();
        n.appendChild(l)
      }
      return l.setAttribute('x', e.x - t / 2),
      l.setAttribute('y', e.y - t / 2),
      l.setAttribute('width', e.width + t),
      l.setAttribute('height', e.height + t),
      l.style.display = '',
      l
    },
    a.hideSelectionBox = function () {
      l && (l.style.display = 'none')
    },
    Object.freeze(a)
  };
  return t
}
function VectorPaintCanvasControllerDefinition() {
  var e = function (e, t) {
    'use strict';
    var n = CanvasController(e, t);
    return n.zoomToCanvas = function () {
      e.zoomToElement([e.getRoot()])
    },
    n.zoomToSelected = function () {
      e.zoomToElements(n.getSelectedElems())
    },
    n.zoomToContent = function () {
      e.zoomToElements(e.getAllSelectable())
    },
    n.newLayer,
    n.mergeAllLayers,
    n.mergeLayerDown,
    n.moveSelectedToLayer,
    n.getLayers,
    n.toggleLayerVisable,
    n.moveLayerUp,
    n.moveLayerDown,
    n.canMoveLayerUp,
    n.canMoveLayerDown,
    n.pushToBack = e.pushToBack,
    n.pullToFront = e.pullToFront,
    n.pushBackwards = e.pushBackwards,
    n.pullForwards = e.pullForwards,
    n.canPushBackwards,
    n.canPullForwards,
    n.rotateSelected = function () {
    },
    n.rotateSelectedToPoint = function () {
    },
    n.align = function () {
    },
    n.rotateSelectedToPoint = function () {
    },
    n.groupUngroup,
    n.duplicate,
    Object.freeze(n)
  };
  return e
}
function AddVectorPaintControlsDefinition() {
  'use strict';
  function e(e) {
    function t() {
      return - 1 === ['button',
      'input',
      'radio',
      'select'].indexOf(document.activeElement.nodeName.toLowerCase())
    }
    return key('tab', function () {
      return t() && svgCanvas.cycleElement(!0),
      !1
    }),
    key('ctrl+tab, â‡§+tab, âŒ˜+tab', function () {
      return t() && svgCanvas.cycleElement(!1),
      !1
    }),
    !1
  }
  return e
}
function AlignSVGTextDefinition() {
  'use strict';
  function e(e, t) {
    var n = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    n.setAttribute('style', 'visability:hidden;'),
    n.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    var r = t.cloneNode(!0),
    i = e.cloneNode();
    i.appendChild(r),
    n.appendChild(i),
    document.body.appendChild(n);
    var a = r.getBBox();
    return n.parentNode.removeChild(n),
    a
  }
  function t(t, n) {
    var r = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    return r.textContent = n,
    e(t, r)
  }
  function n(e) {
    var t = '';
    return Array.from(e.childNodes).forEach(function (e, n) {
      'tspan' === e.nodeName.toLowerCase() && e.classList.contains('newline') ? t += '\n' : (n > 0 && (t += ' '), t += e.textContent)
    }),
    t
  }
  function r(e, r) {
    var i = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    i.setAttribute('visability', 'hidden;'),
    i.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink'),
    document.body.appendChild(i);
    var a = n(a),
    o = a.trim().split(' ').map(function (e) {
      return e.trim()
    }).filter(function (e) {
      return e
    }),
    s = o.map(function (n) {
      var r = t(e, n);
      return r.width
    }),
    l = t(e, 'a a').width - t(e, 'aa').width,
    c = Typeset.formatter(function (n) {
      return ' ' === n ? l : t(e, n).width
    }),
    u = c.justify(a),
    d = Typeset.linebreak(u, [
      r
    ], {
      tolerance: 3
    });
    console.log(u, d);
    for (var f = [
    ], h = [
    ], p = 0; o.length > p; ) {
      for (var g = document.createElementNS('http://www.w3.org/2000/svg', 'tspan'), v = 0, m = [
      ]; o.length > p && r > v + s[p]; ) v += s[p],
      v += l,
      m.push(o[p]),
      p += 1;
      if (s[p] >= r && (m.push(o[p]), v += s[p], p += 1), o.length > p) {
        var y = r - v,
        b = y / (m.length - 1) + l;
        g.setAttribute('gap', y),
        g.setAttribute('spaceWidth', l),
        g.setAttribute('spaceSizeNeeded', b),
        g.setAttribute('word-spacing', b - 1 + 'px')
      } else v = 0;
      g.textContent = m.join(' '),
      f.push(g),
      h.push(v)
    }
    for (i.parentNode.removeChild(i); e.firstChild; ) e.removeChild(e.firstChild);
    return f.forEach(function (t) {
      e.appendChild(t)
    }),
    h
  }
  function i(t) {
    var n = t.getAttribute('align') || t.getAttribute('se:align') || 'left',
    i = parseFloat(t.getAttribute('width') || t.getAttribute('se:width')) || 0,
    a = t.getAttribute('line-height') || t.getAttribute('se:line-height') || '1',
    o = r(t, i),
    s = Array.from(t.getElementsByTagName('tspan')),
    l = parseFloat(t.getAttribute('x')),
    c = s.map(function (n) {
      var r = e(t, n);
      return r
    });
    if (s.forEach(function (e) {
      e.setAttribute('dy', a + 'em')
    }), n) switch (n) {
      case 'justified':
        s.forEach(function (e, t) {
          o[t]
        });
      case 'left':
        s.forEach(function (e) {
          e.setAttribute('x', l)
        });
        break;
      case 'center':
        s.forEach(function (e, t) {
          e.setAttribute('x', l + i / 2 - c[t].width / 2)
        });
        break;
      case 'right':
        s.forEach(function (e, t) {
          e.setAttribute('x', l + i - c[t].width)
        })
    }
  }
  function a(e) {
    Array.from(e.getElementsByTagName('text')).forEach(i)
  }
  return {
    scanDocument: a,
    updateElement: i,
    getTextFromSVGElement: n
  }
}
function SVGUnitsDefinition() {
  'use strict';
  function e(e) {
    var t = Array.from(e.attributes).filter(function (t) {
      return SVGAnimatedLength.prototype.isPrototypeOf(e[t.name])
    }).filter(function (t) {
      return e[t.name].baseVal.unitType !== SVGLength.SVG_LENGTHTYPE_PERCENTAGE
    });
    if (t.length) {
      var n = e[t[0].name].baseVal.unitType;
      return i[n]
    }
    return 'px'
  }
  function t(e, t) {
    Array.from(e.attributes).filter(function (t) {
      return SVGAnimatedLength.prototype.isPrototypeOf(e[t.name])
    }).filter(function (t) {
      return e[t.name].baseVal.unitType !== SVGLength.SVG_LENGTHTYPE_PERCENTAGE
    }).filter(function (t) {
      return e[t.name].baseVal.value
    }).forEach(function (n) {
      var i = e.ownerSVGElement || document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
      a = i.createSVGLength();
      a.value = e[n.name].baseVal.value,
      a.convertToSpecifiedUnits(r[t]),
      n.value = a.valueInSpecifiedUnits + t
    })
  }
  function n(e, n) {
    Array.from(e.querySelectorAll('*')).concat([e]).forEach(function (e) {
      t(e, n)
    })
  }
  var r = {
    '': 5,
    '%': 2,
    em: 3,
    ex: 4,
    px: 5,
    cm: 6,
    mm: 7,
    'in': 8,
    pt: 9,
    pc: 10
  },
  i = {
    1: 'px',
    2: '%',
    3: 'em',
    4: 'ex',
    5: 'px',
    6: 'cm',
    7: 'mm',
    8: 'in',
    9: 'pt',
    10: 'pc'
  };
  return {
    getUnitType: e,
    convertSVGToNewUnit: n
  }
}
function TextToolDefinition(e) {
  'use strict';
  function t(t) {
    var n = {
    },
    r = document.createElement('textarea');
    return r.style.position = 'absolute',
    r.style.visibility = 'hidden',
    r.style.background = 'none',
    r.style.border = 'none',
    r.style.margin = '0',
    r.style.padding = '0',
    r.style.outline = '1px solid #555',
    document.body.appendChild(r),
    n.edit = function (t) {
      var n = parseFloat(t.getAttribute('width') || t.getAttribute('se:width')) || 100;
      Array.from(t.attributes).forEach(function (e) {
        r.style[e.name] = e.value,
        r.setAttribute(e.name, e.value)
      }),
      r.width = n,
      r.value = e.getTextFromSVGElement(t);
      var i = t.ownerSVGElement.createSVGPoint();
      i.x = t.x.baseVal.value,
      i.y = t.y.baseVal.value;
      var a = t.getScreenCTM(),
      o = t.ownerSVGElement.createSVGPoint();
      o = i.matrixTransform(a),
      r.style.left = '' + o.x + 'px',
      r.style.top = '' + o.y + 'px',
      r.style.visibility = ''
    },
    n.disableEdit = function (e) {
      r.style.visibility = 'hidden',
      e.textContent = r.value
    },
    n.dragStart = function (e, n, r, i, a) {
      var o = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      o.x.baseVal.value = e,
      o.y.baseVal.value = n,
      o.setAttributeNS('http://svg-edit.googlecode.com', 'se:width', 50),
      o.textContent = 'text',
      t.getCurrentLayer().appendChild(o);
      var a = t.getCurrentAttri('text');
      return a.filter(function () {
        return 'stroke-width' !== a.name
      }).forEach(function (e) {
        e.namespace ? o.setAttributeNS(e.namespace, e.name, e.value)  : o.setAttribute(e.name, e.value)
      }),
      o
    },
    n.dragMove = function (e, t, n, r, i, a, o) {
      var s = Math.min(r, a),
      l = Math.min(i, o),
      c = Math.max(r, a);
      e.setAttribute('x', s),
      e.setAttribute('y', l),
      e.setAttributeNS('http://svg-edit.googlecode.com', 'se:width', Math.max(50, c - s))
    },
    n
  }
  return t
}
function SVGCanvasDefinition(e) {
  var t = 'currentLayer',
  n = function (n, r) {
    'use strict';
    function i() {
      return n.querySelector('.' + t)
    }
    function a() {
      var e = svgRules.getAttriOfSVGElement('text'),
      t = e.map(function (e) {
        var t = document.querySelector('[data-attr~="' + e + '"], [data-style~="' + e + '"]');
        return {
          inputElem: t,
          name: e
        }
      }).filter(function (e) {
        return e.inputElem
      }).map(function (e) {
        return {
          name: e.name,
          value: e.inputElem.value,
          namespace: e.inputElem.getAttribute('data-namespace')
        }
      }).filter(function (e) {
        return e.value !== svgRules.getAttriDefaultNodeName('text', e.name) && e.value
      });
      return t
    }
    var o = {
    };
    o.isCanvasElem = function (e) {
      return e === n
    },
    o.getCurrentLayer = i,
    o.getCurrentAttri = a,
    o.dWidth = function (e, t) {
      n.id === e && (n.width.baseVal.value += t)
    },
    o.dHeight = function (e, t) {
      n.id === e && (n.height.baseVal.value += t)
    },
    o.group = function (t) {
      var r = document.createElementNS(e.svgns, 'g');
      t.map(function (e) {
        return n.getElementById(e)
      }).forEach(function (e) {
        r.appendChild(e)
      }),
      i().appendChild(r)
    },
    o.ungroup = function (e) {
      var t = n.getElementById(e);
      Array.from(t.childNodes).forEach(function (e) {
        i().appendChild(e)
      }),
      t.parentNode.removeChild(t)
    },
    o.isGroup = function (e) {
      return 'g' === n.getElementById(e).nodeName
    },
    o.pushBackwards = function (e) {
      e.map(function (e) {
        return n.getElementById(e)
      }).forEach(function () {
      })
    },
    o.newLayer = function () {
      var n = document.createElementNS(e.svgns, 'g');
      n.classList.add(t)
    },
    o.mergeAllLayers = function () {
    },
    o.mergeLayerDown = function () {
      i()
    },
    o.moveSelectedToLayer = function (e) {
      n.querySelectorAll('#svgcanvas > g') [e]
    },
    o.getLayers = function () {
      return Array.from(n.querySelectorAll('#svgcanvas > g')).map(function (e) {
        return {
          name: e.querySelector('title').textContent,
          visable: '' === e.style.display
        }
      })
    },
    o.toggleLayerVisable = function (e) {
      var t = '' === n.querySelectorAll('#svgcanvas > g') [e].style.display;
      n.querySelectorAll('#svgcanvas > g') [e].style.display = t ? 'none' : ''
    },
    o.setLayerName = function (e, t) {
      n.querySelectorAll('#svgcanvas > g') [e].querySelector('title').textContent = t
    },
    o.scroll = function () {
      n.getElementsByClassName('zoom-view') [0]
    },
    o.getZoom = function () {
      n.getAttribute('viewBox') || n.setAttribute('viewBox', [
        0,
        0,
        n.getAttribute('width'),
        n.getAttribute('height')
      ].join(' '));
      var e = n.getAttribute('viewBox').split(' '),
      t = e[2];
      return e[3],
      t / n.getAttribute('width')
    },
    o.setZoom = function () {
      return !0
    },
    o.save = function () {
    },
    o.load = function () {
    },
    o.open = function () {
    },
    o.hideSelectionBox = function () {
    },
    o.scaleZoom = function () {
      return !1
    },
    o.isDragable = function () {
      return !0
    },
    o.move = function () {
    },
    o.add = function (t, n, r, a) {
      var o = e.makeElmentFromMimeType(t, n);
      return o && (i().appendChild(o), wrapSVG(o).x(r), wrapSVG(o).y(a), wrapSVG(o).width(20), wrapSVG(o).height(20)),
      o
    },
    o.reset = function () {
    },
    o.setSelected = function () {
    };
    var s;
    return $.ajax({
      type: 'GET',
      url: 'templates/hover-template.svg',
      dataType: 'text',
      success: function (e) {
        s = SelectionController(n, e)
      }
    }),
    o.hoverOver = function (e) {
      var t = n.getElementById(e);
      t && t.matches(r) && s && s.addBoxSelector(t)
    },
    o.hoverOut = function (e) {
      var t = n.getElementById(e);
      t && t.matches(r) && s && s.removeBoxSelector(t)
    },
    o.remove = function (e) {
      return e.parentNode.removeChild(e),
      e
    },
    o.getAllSelectable = function () {
      return Array.from(document.querySelectorAll(r))
    },
    Object.freeze(o)
  };
  return n
}
function processUserData(e) {
  e.loggedIn && document.body.classList.add('loggedIn'),
  e.admin && document.body.classList.add('debug'),
  global.storage.set('userData', JSON.stringify(e)),
  e.purchased_plugins.forEach(function (e) {
    document.body.classList.add(e + '-purchased')
  })
}
function signinCallback(e) {
  e.status.signed_in ? (console.log(e), document.body.classList.toggle('logged-in', e.status.signed_in), document.body.classList.toggle('loggedIn', e.status.signed_in), document.getElementById('signinButton').setAttribute('style', 'display: none'), gapi.client.load('oauth2', 'v2', function () {
    gapi.client.oauth2.userinfo.get().execute(function (e) {
      userID = e.id,
      $.ajax({
        url: 'http://vectorpaint.yaks.co.nz/payments/user_data/' + userID,
        type: 'PUT',
        success: processUserData
      })
    })
  }))  : console.log('Sign-in state: ' + e.error),
  document.getElementById('logout').addEventListener('click', function () {
    gapi.auth.signOut()
  })
}
function getObjectSize(e, t, n, r, i, a) {
  var o = {
  },
  s = Math.min(n, i),
  l = Math.max(n, i),
  c = Math.min(t, r),
  u = Math.max(t, r);
  switch (a = a || 1, s -= s % a, l -= l % a, c -= c % a, u -= u % a, e) {
    case 'svg':
    case 'image':
    case 'foreignobject':
    case 'rect':
    case 'use':
      o.x = c,
      o.y = s,
      o.width = Math.max(0, u - c),
      o.height = Math.max(0, l - s);
      break;
    case 'tspan':
    case 'text':
      o.x = c,
      o.y = s;
      break;
    case 'line':
      o.x1 = t,
      o.y1 = n,
      o.x2 = r,
      o.y2 = i;
      break;
    case 'ellipse':
      o.rx = Math.max(0, u - c) / 2,
      o.ry = Math.max(0, l - s) / 2,
      o.cx = c + o.rx,
      o.cy = s + o.ry;
      break;
    case 'circle':
      o.r = Math.max(0, u - c, l - s) / 2,
      o.cx = c + o.r,
      o.cy = s + o.r
  }
  return o
}
function scaleObject(e, t, n) {
  var r = [
  ],
  i = [
  ];
  switch (e.nodeName.toLowerCase()) {
    case 'svg':
    case 'image':
    case 'foreignobject':
    case 'rect':
    case 'use':
      r = [
        'width'
      ],
      i = [
        'height'
      ];
      break;
    case 'tspan':
    case 'text':
      break;
    case 'line':
      break;
    case 'ellipse':
      break;
    case 'circle':
  }
  r.forEach(function (n) {
    e.setAttribute(n, parseFloat(e.getAttribute(n) || 0.1) * t)
  }),
  i.forEach(function (t) {
    e.setAttribute(t, parseFloat(e.getAttribute(t) || 0.1) * n)
  })
}
function resizeObject(e, t, n) {
  var r = [
  ],
  i = [
  ];
  switch (e.nodeName.toLowerCase()) {
    case 'svg':
    case 'image':
    case 'foreignobject':
    case 'rect':
    case 'use':
      r = [
        'width'
      ],
      i = [
        'height'
      ];
      break;
    case 'tspan':
    case 'text':
      break;
    case 'line':
      break;
    case 'ellipse':
      r = [
        'rx'
      ],
      i = [
        'ry'
      ];
      break;
    case 'circle':
  }
  r.forEach(function (n) {
    e.setAttribute(n, parseFloat(e.getAttribute(n) || 0.1) + t || 0.0001)
  }),
  i.forEach(function (t) {
    e.setAttribute(t, parseFloat(e.getAttribute(t) || 0.1) + n || 0.0001)
  })
}
function moveElement(e, t, n) {
  var r = {
  };
  switch (e.nodeName.toLowerCase()) {
    case 'svg':
    case 'image':
    case 'foreignobject':
    case 'rect':
    case 'use':
    case 'tspan':
    case 'text':
      r.x = parseFloat(e.getAttribute('x') || 0) + t,
      r.y = parseFloat(e.getAttribute('y') || 0) + n;
      break;
    case 'line':
      r.x1 = parseFloat(e.getAttribute('x1') || 0) + t,
      r.y1 = parseFloat(e.getAttribute('y1') || 0) + n,
      r.x2 = parseFloat(e.getAttribute('x2') || 0) + t,
      r.y2 = parseFloat(e.getAttribute('y2') || 0) + n;
      break;
    case 'ellipse':
    case 'circle':
      r.cx = parseFloat(e.getAttribute('cx') || 0) + t,
      r.cy = parseFloat(e.getAttribute('cy') || 0) + n;
      break;
    default:
      r = !1
  }
  for (var i in r) e.setAttribute(i, r[i]);
  return r
}
function getAttributeList(e) {
  var t = e.reduce(function (e, t) {
    return _.union(e, getElementAttributeList(t))
  }, getElementAttributeList(e[0]));
  return t = _.without(t, attributesToIgnore),
  t = _.union(t, elementAtrributes.all)
}
function removeToInsertLater(e) {
  var t = e.parentNode,
  n = e.nextSibling;
  return t.removeChild(e),
  function () {
    n ? t.insertBefore(e, n)  : t.appendChild(e)
  }
}
function DomUntils(e, t) {
  var n = {
  };
  return n.getAllAttributesValues = function (n, r) {
    var i = r.map(function (t) {
      return e(n).find('[' + t + ']').toArray().map(function (e) {
        return e.getAttribute(t)
      })
    });
    return t.flatten(i)
  },
  n.getAllAttributesWithURL = function (e) {
    var t = n.getAllAttributesValues(e, attributeWithReferences).map(n.getUrlFromAttr);
    return t.filter(function (e) {
      return e
    })
  },
  n.getUrlFromAttr = function (e) {
    if (e) {
      if (0 === e.indexOf('url("')) return e.substring(5, e.indexOf('"', 6));
      if (0 === e.indexOf('url(\'')) return e.substring(5, e.indexOf('\'', 6));
      if (0 === e.indexOf('url(')) return e.substring(4, e.indexOf(')'))
    }
    return null
  },
  n.removeUnusedDefs = function (t) {
    var r = n.getAllAttributesWithURL(t);
    e(t).find('defs > *').toArray().forEach(function (t) {
      - 1 === r.indexOf('#' + t.id) && e(t).remove()
    })
  },
  Object.freeze(n)
}
function touchHandler(e) {
  var t = e.changedTouches,
  n = t[0],
  r = '';
  switch (e.type) {
    case 'touchstart':
      r = 'mousedown';
      break;
    case 'touchmove':
      r = 'mousemove';
      break;
    case 'touchend':
      r = 'mouseup';
      break;
    default:
      return
  }
  var i = document.createEvent('MouseEvent');
  i.initMouseEvent(r, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
  2 > t.length && (n.target.dispatchEvent(i), e.preventDefault())
}
function updateResizeControls() {
  $('.bottom_canvas, .right_canvas, .rightlow_canvas').show()
}
function rgbToHex(e) {
  var t = e[0],
  n = e[1],
  r = e[2],
  i = r | n << 8 | t << 16;
  return '#' + i.toString(16)
}
function hexToRGB(e) {
  var t = parseInt(e.replace(/^#/, ''), 16),
  n = 255 & t >> 16,
  r = 255 & t >> 8,
  i = 255 & t;
  return [n,
  r,
  i]
}
function HSV2RGB(e) {
  var n = {
  };
  if (0 == e.saturation) n.r = n.g = n.b = Math.round(2.55 * e.value);
   else {
    switch (e.hue /= 60, e.saturation /= 100, e.value /= 100, i = Math.floor(e.hue), f = e.hue - i, p = e.value * (1 - e.saturation), q = e.value * (1 - e.saturation * f), t = e.value * (1 - e.saturation * (1 - f)), i) {
      case 0:
        n.r = e.value,
        n.g = t,
        n.b = p;
        break;
      case 1:
        n.r = q,
        n.g = e.value,
        n.b = p;
        break;
      case 2:
        n.r = p,
        n.g = e.value,
        n.b = t;
        break;
      case 3:
        n.r = p,
        n.g = q,
        n.b = e.value;
        break;
      case 4:
        n.r = t,
        n.g = p,
        n.b = e.value;
        break;
      default:
        n.r = e.value,
        n.g = p,
        n.b = q
    }
    n.r = Math.round(255 * n.r),
    n.g = Math.round(255 * n.g),
    n.b = Math.round(255 * n.b)
  }
  return n
}
function RGB2HSV(e) {
  return hsv = {
  },
  max = Math.max(e.r, e.g, e.b),
  dif = max - Math.min(e.r, e.g, e.b),
  hsv.saturation = 0 == max ? 0 : 100 * dif / max,
  0 == hsv.saturation ? hsv.hue = 0 : e.r == max ? hsv.hue = 60 * (e.g - e.b) / dif : e.g == max ? hsv.hue = 120 + 60 * (e.b - e.r) / dif : e.b == max && (hsv.hue = 240 + 60 * (e.r - e.g) / dif),
  0 > hsv.hue && (hsv.hue += 360),
  hsv.value = Math.round(100 * max / 255),
  hsv.hue = Math.round(hsv.hue),
  hsv.saturation = Math.round(hsv.saturation),
  hsv
}
function transform_element_colors_to_grayscale(e) {
  $(e).find('#svgcontent [stroke], #svgcontent [fill], #svgcontent [stop-color]').toArray(),
  $.each(e, function (e, t) {
    $.each(t.attributes, function (e, n) {
      if ('stroke' == n.nodeName || 'fill' == n.nodeName || 'stop-color' == n.nodeName) {
        var r = t.getAttribute(n.nodeName);
        if ('none' != r && '#' == r[0]) {
          var i = hexToRGB(r),
          a = 0.3 * i[0] + 0.59 * i[1] + 0.11 * i[2];
          t.setAttribute(n.nodeName, rgbToHex([a,
          a,
          a]))
        }
      }
    })
  })
}
function FileSystem() {
  function e() {
  }
  function t() {
    global.alert('<a target="_blank" href="https://chrome.google.com/webstore/detail/vector-paint/polhblidjnpebjjpjjhmejjalalppmhc"><img src="logo/vector_paint_icon64.png"/><br/>To save get the free Chrome app with native file support. Click here to install.</a>')
  }
  function n(e, t, n) {
    var r = new Blob([t], {
      type: 'data:image/svg+xml;base64'
    });
    saveAs(r, e + '.svg'),
    n && n()
  }
  function r(e, t, n) {
    saveAs(t, e),
    n && n()
  }
  var i = function () {
    throw 'Override this'
  };
  $.getScript('components/FileSaver.js/FileSaver.min.js');
  var a = $('<input id="fileopen" type="file" accept="image/svg+xml" />');
  return a.change(function () {
    var e = this;
    if (1 == e.files.length) {
      var t = new FileReader;
      t.onloadend = function (e) {
        i(e.target.result),
        $('#fileopen').val('')
      },
      t.readAsText(e.files[0])
    }
  }),
  a.css({
    opacity: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 0,
    padding: 0,
    width: '100%'
  }),
  $('.open').prepend(a).css({
    position: 'relative'
  }),
  $('.saveAs').text('Download'),
  $('.save').hide(),
  $('.plugins footer').append('<a target="_blank" href="https://chrome.google.com/webstore/detail/vector-paint/polhblidjnpebjjpjjhmejjalalppmhc">Get the Chrome App with Save and Save As support</a>'),
  Object.freeze({
    newFile: function () {
    },
    open: e,
    save: t,
    saveAs: n,
    exportFile: r,
    setOpenCallback: function (e) {
      i = e
    }
  })
}
function wrapWithSVGHeaders(e) {
  const t = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:cbs="http://www.casesbysource.com/" version="1.1" width="46" height="46">',
  n = '</svg>';
  return t + e + n
}
function addSVGString(e, t) {
  const n = $(wrapWithSVGHeaders(t));
  return $(e).append(n),
  n.children().unwrap()
}
function loadIntro() {
  $('.help').click(function () {
    $('.add-plugins').click();
    var e = introJs();
    $.getJSON('scripts/help-text.json', function (t) {
      e.setOptions({
        showStepNumbers: !1,
        skipLabel: 'Close help',
        steps: t
      }),
      e.start()
    })
  })
}(function (e) {
  'use strict';
  var t = function () {
    try {
      return Object.defineProperty({
      }, 'x', {
      }),
      !0
    } catch (e) {
      return !1
    }
  },
  n = function () {
    var n = global === e ? window : global,
    r = n.isFinite,
    i = !!Object.defineProperty && t(),
    a = Array.prototype.slice,
    o = String.prototype.indexOf,
    s = Object.prototype.toString,
    l = Object.prototype.hasOwnProperty,
    c = function (e, t) {
      Object.keys(t).forEach(function (n) {
        var r = t[n];
        n in e || (i ? Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !1,
          writable: !0,
          value: r
        })  : e[n] = r)
      })
    },
    u = {
      ToInt32: function (e) {
        return e >> 0
      },
      ToUint32: function (e) {
        return e >>> 0
      },
      toInteger: function (e) {
        var t = + e;
        return Number.isNaN(t) ? 0 : 0 !== t && Number.isFinite(t) ? Math.sign(t) * Math.floor(Math.abs(t))  : t
      }
    };
    c(String, {
      fromCodePoint: function () {
        for (var e, t = a.call(arguments, 0), n = [
        ], r = 0, i = t.length; i > r; r++) {
          if (e = Number(t[r]), !Object.is(e, u.toInteger(e)) || 0 > e || e > 1114111) throw new RangeError('Invalid code point ' + e);
          65536 > e ? n.push(String.fromCharCode(e))  : (e -= 65536, n.push(String.fromCharCode((e >> 10) + 55296)), n.push(String.fromCharCode(e % 1024 + 56320)))
        }
        return n.join('')
      },
      raw: function () {
        var t = arguments[0],
        n = a.call(arguments, 1),
        r = Object(t),
        i = r.raw,
        o = Object(i),
        s = Object.keys(o).length,
        l = u.ToUint32(s);
        if (0 === l) return '';
        for (var c, d, f, h, p = [
        ], g = 0; l > g && (c = g + '', d = o[c], f = d + '', p.push(f), !(g + 1 >= l)) && (d = n[c], d !== e); ) h = d + '',
        p.push(h),
        g++;
        return p.join('')
      }
    }),
    c(String.prototype, {
      repeat: function () {
        var e = function (t, n) {
          if (1 > n) return '';
          if (n % 2) return e(t, n - 1) + t;
          var r = e(t, n / 2);
          return r + r
        };
        return function (t) {
          if (t = u.toInteger(t), 0 > t || 1 / 0 === t) throw new RangeError;
          return e(this + '', t)
        }
      }(),
      startsWith: function (e) {
        if (null == this) throw new TypeError('Cannot call method \'startsWith\' of ' + this);
        var t = this + '';
        e += '';
        var n = Math.max(u.toInteger(arguments[1]), 0);
        return t.slice(n, n + e.length) === e
      },
      endsWith: function (t) {
        if (null == this) throw new TypeError('Cannot call method \'endsWith\' of ' + this);
        var n = this + '';
        t += '';
        var r = n.length,
        i = arguments[1] === e ? r : u.toInteger(arguments[1]),
        a = Math.min(i, r);
        return n.slice(a - t.length, a) === t
      },
      contains: function (e) {
        var t = arguments[1];
        return - 1 !== o.call(this, e, t)
      },
      codePointAt: function (t) {
        var n = this + '',
        r = u.toInteger(t),
        i = n.length;
        if (0 > r || r >= i) return e;
        var a = n.charCodeAt(r),
        o = r + 1 === i;
        if (55296 > a || a > 56319 || o) return a;
        var s = n.charCodeAt(r + 1);
        return 56320 > s || s > 57343 ? a : 1024 * (a - 55296) + (s - 56320) + 65536
      }
    }),
    c(Array, {
      from: function (t) {
        var n = arguments[1],
        r = arguments[2];
        if (n !== e && '[object Function]' !== s.call(n)) throw new TypeError('when provided, the second argument must be a function');
        for (var i = Object(t), a = u.ToUint32(i.length), o = 'function' == typeof this ? Object(new this(a))  : Array(a), l = 0; a > l; l++) {
          var c = i[l];
          o[l] = n !== e ? r ? n.call(r, c)  : n(c)  : c
        }
        return o.length = a,
        o
      },
      of: function () {
        return Array.from(arguments)
      }
    }),
    c(n, {
      ArrayIterator: function (e, t) {
        this.i = 0,
        this.array = e,
        this.kind = t
      }
    }),
    c(ArrayIterator.prototype, {
      next: function () {
        var e = this.i;
        this.i = e + 1;
        var t = this.array;
        if (e >= t.length) throw Error();
        if (t.hasOwnProperty(e)) {
          var n,
          r = this.kind;
          'key' === r && (n = e),
          'value' === r && (n = t[e]),
          'entry' === r && (n = [
            e,
            t[e]
          ])
        } else n = this.next();
        return n
      }
    }),
    c(Array.prototype, {
      copyWithin: function (e, t) {
        var n = Object(this),
        r = Math.max(u.toInteger(n.length), 0),
        i = 0 > e ? Math.max(r + e, 0)  : Math.min(e, r),
        a = 0 > t ? Math.max(r + t, 0)  : Math.min(t, r),
        o = arguments.length > 2 ? arguments[2] : r,
        s = 0 > o ? Math.max(r + o, 0)  : Math.min(o, r),
        c = Math.min(s - a, r - i),
        d = 1;
        for (i > a && a + c > i && (d = - 1, a += c - 1, i += c - 1); c > 0; ) l.call(n, a) ? n[i] = n[a] : delete n[a],
        a += d,
        i += d,
        c -= 1;
        return n
      },
      fill: function (e) {
        for (var t = this.length, n = arguments.length > 1 ? u.toInteger(arguments[1])  : 0, r = arguments.length > 2 ? u.toInteger(arguments[2])  : t, i = 0 > n ? Math.max(t + n, 0)  : Math.min(n, t), a = i; t > a && r > a; ++a) this[a] = e;
        return this
      },
      find: function (t) {
        var n = Object(this),
        r = u.ToUint32(n.length);
        if (0 === r) return e;
        if ('function' != typeof t) throw new TypeError('Array#find: predicate must be a function');
        for (var i, a = arguments[1], o = 0; r > o && o in n; o++) if (i = n[o], t.call(a, i, o, n)) return i;
        return e
      },
      findIndex: function (e) {
        var t = Object(this),
        n = u.ToUint32(t.length);
        if (0 === n) return - 1;
        if ('function' != typeof e) throw new TypeError('Array#findIndex: predicate must be a function');
        for (var r, i = arguments[1], a = 0; n > a && a in t; a++) if (r = t[a], e.call(i, r, a, t)) return a;
        return - 1
      },
      keys: function () {
        return new ArrayIterator(this, 'key')
      },
      values: function () {
        return new ArrayIterator(this, 'value')
      },
      entries: function () {
        return new ArrayIterator(this, 'entry')
      }
    });
    var d = Math.pow(2, 53) - 1;
    if (c(Number, {
      MAX_SAFE_INTEGER: d,
      MIN_SAFE_INTEGER: - d,
      EPSILON: 2.220446049250313e-16,
      parseInt: n.parseInt,
      parseFloat: n.parseFloat,
      isFinite: function (e) {
        return 'number' == typeof e && r(e)
      },
      isSafeInteger: function (e) {
        return 'number' == typeof e && !Number.isNaN(e) && Number.isFinite(e) && parseInt(e, 10) === e && Math.abs(e) <= Number.MAX_SAFE_INTEGER
      },
      isNaN: function (e) {
        return e !== e
      }
    }), c(Number.prototype, {
      clz: function () {
        var e = + this;
        return e && Number.isFinite(e) ? (e = 0 > e ? Math.ceil(e)  : Math.floor(e), e -= 4294967296 * Math.floor(e / 4294967296), 32 - e.toString(2).length)  : 32
      }
    }), i && (c(Object, {
      getOwnPropertyDescriptors: function (e) {
        var t = {
        };
        return Object.getOwnPropertyNames(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      },
      getPropertyDescriptor: function (t, n) {
        for (var r = Object.getOwnPropertyDescriptor(t, n), i = Object.getPrototypeOf(t); r === e && null !== i; ) r = Object.getOwnPropertyDescriptor(i, n),
        i = Object.getPrototypeOf(i);
        return r
      },
      getPropertyNames: function (e) {
        for (var t = Object.getOwnPropertyNames(e), n = Object.getPrototypeOf(e), r = function (e) {
          - 1 === t.indexOf(e) && t.push(e)
        }; null !== n; ) Object.getOwnPropertyNames(n).forEach(r),
        n = Object.getPrototypeOf(n);
        return t
      },
      assign: function (e, t) {
        return Object.keys(t).reduce(function (e, n) {
          return e[n] = t[n],
          e
        }, e)
      },
      mixin: function (e, t) {
        var n = Object.getOwnPropertyNames(t);
        return n.reduce(function (e, n) {
          var r = Object.getOwnPropertyDescriptor(t, n);
          return Object.defineProperty(e, n, r)
        }, e)
      }
    }), c(Object, {
      setPrototypeOf: function (e, t) {
        var n,
        r = function (e, t) {
          if ('object' != typeof e || null === e) throw new TypeError('cannot set prototype on a non-object');
          if ('object' != typeof t) throw new TypeError('can only set prototype to an object or null')
        },
        i = function (e, t) {
          return r(e, t),
          n.call(e, t),
          e
        };
        try {
          n = e.getOwnPropertyDescriptor(e.prototype, t).set,
          n.call({
          }, null)
        } catch (a) {
          if (e.prototype !== {
          }
          [
            t
          ]) return;
          n = function (e) {
            this[t] = e
          },
          i.polyfill = i(i({
          }, null), e.prototype) instanceof e
        }
        return i
      }(Object, '__proto__')
    })), c(Object, {
      getOwnPropertyKeys: function (e) {
        return Object.keys(e)
      },
      is: function (e, t) {
        return e === t ? 0 === e ? 1 / e === 1 / t : !0 : Number.isNaN(e) && Number.isNaN(t)
      }
    }), c(Math, {
      acosh: function (e) {
        return e = Number(e),
        Number.isNaN(e) || 1 > e ? 0 / 0 : 1 === e ? 0 : 1 / 0 === e ? e : Math.log(e + Math.sqrt(e * e - 1))
      },
      asinh: function (e) {
        return e = Number(e),
        0 !== e && r(e) ? Math.log(e + Math.sqrt(e * e + 1))  : e
      },
      atanh: function (e) {
        return e = Number(e),
        Number.isNaN(e) || - 1 > e || e > 1 ? 0 / 0 : - 1 === e ? - 1 / 0 : 1 === e ? 1 / 0 : 0 === e ? e : 0.5 * Math.log((1 + e) / (1 - e))
      },
      cbrt: function (e) {
        if (e = Number(e), 0 === e) return e;
        var t,
        n = 0 > e;
        return n && (e = - e),
        t = Math.pow(e, 1 / 3),
        n ? - t : t
      },
      cosh: function (e) {
        return e = Number(e),
        0 === e ? 1 : r(e) ? (0 > e && (e = - e), e > 21 ? Math.exp(e) / 2 : (Math.exp(e) + Math.exp( - e)) / 2)  : e
      },
      expm1: function (e) {
        if (e = Number(e), e === - 1 / 0) return - 1;
        if (!r(e) || 0 === e) return e;
        for (var t = 0, n = 50, i = 1; n > i; i++) {
          for (var a = 2, o = 1; i >= a; a++) o *= a;
          t += Math.pow(e, i) / o
        }
        return t
      },
      hypot: function () {
        var e = !1,
        t = !0,
        n = !1,
        r = [
        ];
        if (Array.prototype.every.call(arguments, function (i) {
          var a = Number(i);
          return Number.isNaN(a) ? e = !0 : 1 / 0 === a || a === - 1 / 0 ? n = !0 : 0 !== a && (t = !1),
          n ? !1 : (e || r.push(Math.abs(a)), !0)
        }), n) return 1 / 0;
        if (e) return 0 / 0;
        if (t) return 0;
        r.sort(function (e, t) {
          return t - e
        });
        var i = r[0],
        a = r.map(function (e) {
          return e / i
        }),
        o = a.reduce(function (e, t) {
          return e += t * t
        }, 0);
        return i * Math.sqrt(o)
      },
      log2: function (e) {
        return Math.log(e) * Math.LOG2E
      },
      log10: function (e) {
        return Math.log(e) * Math.LOG10E
      },
      log1p: function (e) {
        if (e = Number(e), - 1 > e || Number.isNaN(e)) return 0 / 0;
        if (0 === e || 1 / 0 === e) return e;
        if ( - 1 === e) return - 1 / 0;
        var t = 0,
        n = 50;
        if (0 > e || e > 1) return Math.log(1 + e);
        for (var r = 1; n > r; r++) 0 === r % 2 ? t -= Math.pow(e, r) / r : t += Math.pow(e, r) / r;
        return t
      },
      sign: function (e) {
        var t = + e;
        return 0 === t ? t : Number.isNaN(t) ? t : 0 > t ? - 1 : 1
      },
      sinh: function (e) {
        return e = Number(e),
        r(e) && 0 !== e ? (Math.exp(e) - Math.exp( - e)) / 2 : e
      },
      tanh: function (e) {
        return e = Number(e),
        Number.isNaN(e) || 0 === e ? e : 1 / 0 === e ? 1 : e === - 1 / 0 ? - 1 : (Math.exp(e) - Math.exp( - e)) / (Math.exp(e) + Math.exp( - e))
      },
      trunc: function (e) {
        var t = Number(e);
        return 0 > t ? - Math.floor( - t)  : Math.floor(t)
      },
      imul: function (e, t) {
        var n = 65535 & e >>> 16,
        r = 65535 & e,
        i = 65535 & t >>> 16,
        a = 65535 & t;
        return 0 | r * a + (n * a + r * i << 16 >>> 0)
      }
    }), i) {
      var f = function f(e) {
        var t = typeof e;
        return 'string' === t ? '$' + e : 'number' !== t || Object.is(e, - 0) ? null : e
      },
      h = function h() {
        return Object.create ? Object.create(null)  : {
        }
      },
      p = {
        Map: function () {
          function t(e, t) {
            this.key = e,
            this.value = t,
            this.next = null,
            this.prev = null
          }
          function n(e, t) {
            this.head = e._head,
            this.i = this.head.next,
            this.kind = t
          }
          function r() {
            if (!(this instanceof r)) throw new TypeError('Map must be called with "new"');
            var e = new t(null, null);
            e.next = e.prev = e,
            c(this, {
              _head: e,
              _storage: h(),
              _size: 0
            })
          }
          var i = {
          };
          return t.prototype.isRemoved = function () {
            return this.key === i
          },
          n.prototype = {
            next: function () {
              for (var t, n = this.i, r = this.kind, i = this.head; n !== i; ) {
                if (this.i = n.next, !n.isRemoved()) return t = 'key' === r ? n.key : 'value' === r ? n.value : [
                  n.key,
                  n.value
                ],
                {
                  value: t,
                  done: !1
                };
                n = this.i
              }
              return {
                value: e,
                done: !0
              }
            }
          },
          Object.defineProperty(r.prototype, 'size', {
            configurable: !0,
            enumerable: !1,
            get: function () {
              return this._size
            }
          }),
          c(r.prototype, {
            get: function (t) {
              var n = f(t);
              if (null !== n) {
                var r = this._storage[n];
                return r ? r.value : e
              }
              for (var i = this._head, a = i; (a = a.next) !== i; ) if (Object.is(a.key, t)) return a.value;
              return e
            },
            has: function (e) {
              var t = f(e);
              if (null !== t) return t in this._storage;
              for (var n = this._head, r = n; (r = r.next) !== n; ) if (Object.is(r.key, e)) return !0;
              return !1
            },
            set: function (n, r) {
              var i,
              a = this._head,
              o = a,
              s = f(n);
              if (null !== s) {
                if (s in this._storage) return this._storage[s].value = r,
                e;
                i = this._storage[s] = new t(n, r),
                o = a.prev
              }
              for (; (o = o.next) !== a; ) if (Object.is(o.key, n)) return o.value = r,
              e;
              i = i ? i : new t(n, r),
              i.next = this._head,
              i.prev = this._head.prev,
              i.prev.next = i,
              i.next.prev = i,
              this._size += 1
            },
            'delete': function (e) {
              var t = this._head,
              n = t,
              r = f(e);
              if (null !== r) {
                if (!(r in this._storage)) return !1;
                n = this._storage[r].prev,
                delete this._storage[r]
              }
              for (; (n = n.next) !== t; ) if (Object.is(n.key, e)) return n.key = n.value = i,
              n.prev.next = n.next,
              n.next.prev = n.prev,
              this._size -= 1,
              !0;
              return !1
            },
            clear: function () {
              this._size = 0,
              this._storage = h();
              for (var e = this._head, t = e, n = t.next; (t = n) !== e; ) t.key = t.value = i,
              n = t.next,
              t.next = t.prev = e;
              e.next = e.prev = e
            },
            keys: function () {
              return new n(this, 'key')
            },
            values: function () {
              return new n(this, 'value')
            },
            entries: function () {
              return new n(this, 'key+value')
            },
            forEach: function (e) {
              for (var t = arguments.length > 1 ? arguments[1] : null, n = this, r = this._head, i = r; (i = i.next) !== r; ) i.isRemoved() || e.call(t, i.value, i.key, n)
            }
          }),
          r
        }(),
        Set: function () {
          var t = function () {
            if (!(this instanceof t)) throw new TypeError('Set must be called with "new"');
            c(this, {
              '[[SetData]]': null,
              _storage: h()
            })
          },
          n = function n(e) {
            if (!e['[[SetData]]']) {
              var t = e['[[SetData]]'] = new p.Map;
              Object.keys(e._storage).forEach(function (e) {
                e = 36 === e.charCodeAt(0) ? e.substring(1)  : + e,
                t.set(e, e)
              }),
              e._storage = null
            }
          };
          return Object.defineProperty(t.prototype, 'size', {
            configurable: !0,
            enumerable: !1,
            get: function () {
              return n(this),
              this['[[SetData]]'].size
            }
          }),
          c(t.prototype, {
            has: function (e) {
              var t;
              return this._storage && null !== (t = f(e)) ? !!this._storage[t] : (n(this), this['[[SetData]]'].has(e))
            },
            add: function (t) {
              var r;
              return this._storage && null !== (r = f(t)) ? (this._storage[r] = !0, e)  : (n(this), this['[[SetData]]'].set(t, t))
            },
            'delete': function (t) {
              var r;
              return this._storage && null !== (r = f(t)) ? (delete this._storage[r], e)  : (n(this), this['[[SetData]]']['delete'](t))
            },
            clear: function () {
              return this._storage ? (this._storage = h(), e)  : this['[[SetData]]'].clear()
            },
            keys: function () {
              return n(this),
              this['[[SetData]]'].keys()
            },
            values: function () {
              return n(this),
              this['[[SetData]]'].values()
            },
            entries: function () {
              return n(this),
              this['[[SetData]]'].entries()
            },
            forEach: function (e) {
              var t = arguments.length > 1 ? arguments[1] : null,
              r = this;
              n(this),
              this['[[SetData]]'].forEach(function (n, i) {
                e.call(t, i, i, r)
              })
            }
          }),
          t
        }()
      };
      c(n, p),
      (n.Map || n.Set) && ('function' != typeof n.Map.prototype.clear || 0 !== (new n.Set).size || 0 !== (new n.Map).size || 'function' != typeof n.Set.prototype.keys || 'function' != typeof n.Map.prototype.forEach || 'function' != typeof n.Set.prototype.forEach) && (n.Map = p.Map, n.Set = p.Set)
    }
  };
  'function' == typeof define && 'object' == typeof define.amd && define.amd ? define(n)  : n()
}) (),
'document' in self && !('classList' in document.createElement('_') && 'classList' in document.createElementNS('http://www.w3.org/2000/svg', 'svg')) && function (e) {
  'use strict';
  if ('Element' in e) {
    var t = 'classList',
    n = 'prototype',
    r = e.Element[n],
    i = Object,
    a = String[n].trim || function () {
      return this.replace(/^\s+|\s+$/g, '')
    },
    o = Array[n].indexOf || function (e) {
      for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
      return - 1
    },
    s = function (e, t) {
      this.name = e,
      this.code = DOMException[e],
      this.message = t
    },
    l = function (e, t) {
      if ('' === t) throw new s('SYNTAX_ERR', 'An invalid or illegal string was specified');
      if (/\s/.test(t)) throw new s('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      return o.call(e, t)
    },
    c = function (e) {
      for (var t = a.call(e.getAttribute('class')), n = t ? t.split(/\s+/)  : [
      ], r = 0, i = n.length; i > r; r++) this.push(n[r]);
      this._updateClassName = function () {
        e.setAttribute('class', '' + this)
      }
    },
    u = c[n] = [
    ],
    d = function () {
      return new c(this)
    };
    if (s[n] = Error[n], u.item = function (e) {
      return this[e] || null
    }, u.contains = function (e) {
      return e += '',
      - 1 !== l(this, e)
    }, u.add = function () {
      var e,
      t = arguments,
      n = 0,
      r = t.length,
      i = !1;
      do e = t[n] + '',
      - 1 === l(this, e) && (this.push(e), i = !0);
      while (r > ++n);
      i && this._updateClassName()
    }, u.remove = function () {
      var e,
      t = arguments,
      n = 0,
      r = t.length,
      i = !1;
      do {
        e = t[n] + '';
        var a = l(this, e);
        - 1 !== a && (this.splice(a, 1), i = !0)
      } while (r > ++n);
      i && this._updateClassName()
    }, u.toggle = function (e, t) {
      e += '';
      var n = this.contains(e),
      r = n ? t !== !0 && 'remove' : t !== !1 && 'add';
      return r && this[r](e),
      !n
    }, u.toString = function () {
      return this.join(' ')
    }, i.defineProperty) {
      var f = {
        get: d,
        enumerable: !0,
        configurable: !0
      };
      try {
        i.defineProperty(r, t, f)
      } catch (h) {
        - 2146823252 === h.number && (f.enumerable = !1, i.defineProperty(r, t, f))
      }
    } else i[n].__defineGetter__ && r.__defineGetter__(t, d)
  }
}(self);
var global = global || {
};
global.alert = function (e, t) {
  alert(e),
  t && t()
},
global.prompt = function (e, t, n) {
  n(prompt(e, t))
},
global.confirm = function (e, t) {
  t(confirm(e))
},
window.URL = window.URL || window.webkitURL,
window.global.trackEvent = function (e) {
  console.log(e)
},
window.chrome && window.chrome.storage ? global.storage = {
  set: function (e, t) {
    var n = {
    };
    n[e] = t,
    chrome.storage.local.set(n)
  },
  get: function (e, t) {
    chrome.storage.local.get(e, t)
  },
  remove: function (e, t) {
    chrome.storage.local.remove(e, t)
  }
}
 : (global.storage = {
  set: function (e, t) {
    localStorage[e] = t
  },
  get: function (e, t) {
    var n = {
    };
    localStorage[e] && (n[e] = localStorage[e]),
    t(n)
  },
  remove: function (e) {
    localStorage.remove(e)
  }
}, window.global.trackEvent = function (e) {
  !document.body.classList.contains('debug') && window._gaq ? _gaq.push(['_trackEvent',
  e,
  e])  : console.log(e)
}, window.addEventListener('load', function () {
if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
     alert("Firefox PNG image download is not supported unfortunately")
}

  window.applicationCache.addEventListener('updateready', function () {
    window.applicationCache.status == window.applicationCache.UPDATEREADY && (window.applicationCache.swapCache(), global.confirm('A new version of this site is available. Load it?', function (e) {
      e && window.location.reload()
    }))
  }, !1)
}, !1)),
'function' != typeof String.prototype.startsWith && (String.prototype.startsWith = function (e) {
  return this.slice(0, e.length) == e
});
var intersection = function () {
  'use strict';
  var e = {
  };
  e.oA = function (e) {
    return e.start
  },
  e.AB = function (e) {
    var t = e.start,
    n = e.end;
    return {
      x: n.x - t.x,
      y: n.y - t.y
    }
  },
  e.add = function (e, t) {
    return {
      x: e.x + t.x,
      y: e.y + t.y
    }
  },
  e.sub = function (e, t) {
    return {
      x: e.x - t.x,
      y: e.y - t.y
    }
  },
  e.scalarMult = function (e, t) {
    return {
      x: e * t.x,
      y: e * t.y
    }
  },
  e.crossProduct = function (e, t) {
    return e.x * t.y - t.x * e.y
  };
  var t = {
  };
  return t.vector = function (t) {
    return e.AB(t)
  },
  t.intersectSegments = function (t, n) {
    var r = e.oA(t),
    i = e.AB(t),
    a = e.oA(n),
    o = e.AB(n),
    s = e.crossProduct(i, o),
    l = e.sub(a, r),
    c = e.crossProduct(l, o),
    u = c / s,
    d = e.add(r, e.scalarMult(u, i));
    return d
  },
  t.isParallel = function (t, n) {
    var r = e.AB(t),
    i = e.AB(n);
    return 0 === e.crossProduct(r, i)
  },
  t.isCollinear = function (t, n) {
    var r = e.oA(t),
    i = e.AB(t),
    a = e.oA(n);
    return e.AB(n),
    0 === e.crossProduct(e.sub(r, a), i)
  },
  t.safeIntersect = function (e, n) {
    return t.isParallel(e, n) === !1 ? t.intersectSegments(e, n)  : !1
  },
  t
};
intersection.intersectSegments = intersection().intersectSegments,
intersection.intersect = intersection().safeIntersect,
intersection.isParallel = intersection().isParallel,
intersection.isCollinear = intersection().isCollinear,
intersection.describe = function (e, t) {
  var n = intersection().isCollinear(e, t),
  r = intersection().isParallel(e, t),
  i = void 0;
  return r === !1 && (i = intersection().intersectSegments(e, t)),
  {
    collinear: n,
    parallel: r,
    intersection: i
  }
},
'function' == typeof define && define.amd ? define([], MathUtilsDefinition)  : MathUtils = MathUtilsDefinition(),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define([], DOM_DropEventDefinition)  : e.DOM_DropEvent = DOM_DropEventDefinition()
}(window),
function (e, t) {
  function n(e) {
    var t = e.length,
    n = lt.type(e);
    return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : 'array' === n || 'function' !== n && (0 === t || 'number' == typeof t && t > 0 && t - 1 in e)
  }
  function r(e) {
    var t = St[e] = {
    };
    return lt.each(e.match(ut) || [
    ], function (e, n) {
      t[n] = !0
    }),
    t
  }
  function i(e, n, r, i) {
    if (lt.acceptData(e)) {
      var a,
      o,
      s = lt.expando,
      l = 'string' == typeof n,
      c = e.nodeType,
      u = c ? lt.cache : e,
      d = c ? e[s] : e[s] && s;
      if (d && u[d] && (i || u[d].data) || !l || r !== t) return d || (c ? e[s] = d = J.pop() || lt.guid++ : d = s),
      u[d] || (u[d] = {
      }, c || (u[d].toJSON = lt.noop)),
      ('object' == typeof n || 'function' == typeof n) && (i ? u[d] = lt.extend(u[d], n)  : u[d].data = lt.extend(u[d].data, n)),
      a = u[d],
      i || (a.data || (a.data = {
      }), a = a.data),
      r !== t && (a[lt.camelCase(n)] = r),
      l ? (o = a[n], null == o && (o = a[lt.camelCase(n)]))  : o = a,
      o
    }
  }
  function a(e, t, n) {
    if (lt.acceptData(e)) {
      var r,
      i,
      a,
      o = e.nodeType,
      l = o ? lt.cache : e,
      c = o ? e[lt.expando] : lt.expando;
      if (l[c]) {
        if (t && (a = n ? l[c] : l[c].data)) {
          lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase))  : t in a ? t = [
            t
          ] : (t = lt.camelCase(t), t = t in a ? [
            t
          ] : t.split(' '));
          for (r = 0, i = t.length; i > r; r++) delete a[t[r]];
          if (!(n ? s : lt.isEmptyObject) (a)) return
        }(n || (delete l[c].data, s(l[c]))) && (o ? lt.cleanData([e], !0)  : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
      }
    }
  }
  function o(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = 'data-' + n.replace(Et, '-$1').toLowerCase();
      if (r = e.getAttribute(i), 'string' == typeof r) {
        try {
          r = 'true' === r ? !0 : 'false' === r ? !1 : 'null' === r ? null : + r + '' === r ? + r : _t.test(r) ? lt.parseJSON(r)  : r
        } catch (a) {
        }
        lt.data(e, n, r)
      } else r = t
    }
    return r
  }
  function s(e) {
    var t;
    for (t in e) if (('data' !== t || !lt.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
    return !0
  }
  function l() {
    return !0
  }
  function c() {
    return !1
  }
  function u(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e
  }
  function d(e, t, n) {
    if (t = t || 0, lt.isFunction(t)) return lt.grep(e, function (e, r) {
      var i = !!t.call(e, r, e);
      return i === n
    });
    if (t.nodeType) return lt.grep(e, function (e) {
      return e === t === n
    });
    if ('string' == typeof t) {
      var r = lt.grep(e, function (e) {
        return 1 === e.nodeType
      });
      if (zt.test(t)) return lt.filter(t, r, !n);
      t = lt.filter(t, r)
    }
    return lt.grep(e, function (e) {
      return lt.inArray(e, t) >= 0 === n
    })
  }
  function f(e) {
    var t = Ht.split('|'),
    n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n
  }
  function h(e, t) {
    return e.getElementsByTagName(t) [0] || e.appendChild(e.ownerDocument.createElement(t))
  }
  function p(e) {
    var t = e.getAttributeNode('type');
    return e.type = (t && t.specified) + '/' + e.type,
    e
  }
  function g(e) {
    var t = an.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'),
    e
  }
  function v(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) lt._data(n, 'globalEval', !t || lt._data(t[r], 'globalEval'))
  }
  function m(e, t) {
    if (1 === t.nodeType && lt.hasData(e)) {
      var n,
      r,
      i,
      a = lt._data(e),
      o = lt._data(t, a),
      s = a.events;
      if (s) {
        delete o.handle,
        o.events = {
        };
        for (n in s) for (r = 0, i = s[n].length; i > r; r++) lt.event.add(t, n, s[n][r])
      }
      o.data && (o.data = lt.extend({
      }, o.data))
    }
  }
  function y(e, t) {
    var n,
    r,
    i;
    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
        i = lt._data(t);
        for (r in i.events) lt.removeEvent(t, r, i.handle);
        t.removeAttribute(lt.expando)
      }
      'script' === n && t.text !== e.text ? (p(t).text = e.text, g(t))  : 'object' === n ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML))  : 'input' === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value))  : 'option' === n ? t.defaultSelected = t.selected = e.defaultSelected : ('input' === n || 'textarea' === n) && (t.defaultValue = e.defaultValue)
    }
  }
  function b(e, n) {
    var r,
    i,
    a = 0,
    o = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || '*')  : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || '*')  : t;
    if (!o) for (o = [
    ], r = e.childNodes || e; null != (i = r[a]); a++) !n || lt.nodeName(i, n) ? o.push(i)  : lt.merge(o, b(i, n));
    return n === t || n && lt.nodeName(e, n) ? lt.merge([e], o)  : o
  }
  function x(e) {
    tn.test(e.type) && (e.defaultChecked = e.checked)
  }
  function w(e, t) {
    if (t in e) return t;
    for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = En.length; i--; ) if (t = En[i] + n, t in e) return t;
    return r
  }
  function k(e, t) {
    return e = t || e,
    'none' === lt.css(e, 'display') || !lt.contains(e.ownerDocument, e)
  }
  function S(e, t) {
    for (var n, r, i, a = [
    ], o = 0, s = e.length; s > o; o++) r = e[o],
    r.style && (a[o] = lt._data(r, 'olddisplay'), n = r.style.display, t ? (a[o] || 'none' !== n || (r.style.display = ''), '' === r.style.display && k(r) && (a[o] = lt._data(r, 'olddisplay', C(r.nodeName))))  : a[o] || (i = k(r), (n && 'none' !== n || !i) && lt._data(r, 'olddisplay', i ? n : lt.css(r, 'display'))));
    for (o = 0; s > o; o++) r = e[o],
    r.style && (t && 'none' !== r.style.display && '' !== r.style.display || (r.style.display = t ? a[o] || '' : 'none'));
    return e
  }
  function _(e, t, n) {
    var r = yn.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || 'px')  : t
  }
  function E(e, t, n, r, i) {
    for (var a = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, o = 0; 4 > a; a += 2) 'margin' === n && (o += lt.css(e, n + _n[a], !0, i)),
    r ? ('content' === n && (o -= lt.css(e, 'padding' + _n[a], !0, i)), 'margin' !== n && (o -= lt.css(e, 'border' + _n[a] + 'Width', !0, i)))  : (o += lt.css(e, 'padding' + _n[a], !0, i), 'padding' !== n && (o += lt.css(e, 'border' + _n[a] + 'Width', !0, i)));
    return o
  }
  function A(e, t, n) {
    var r = !0,
    i = 'width' === t ? e.offsetWidth : e.offsetHeight,
    a = dn(e),
    o = lt.support.boxSizing && 'border-box' === lt.css(e, 'boxSizing', !1, a);
    if (0 >= i || null == i) {
      if (i = fn(e, t, a), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
      r = o && (lt.support.boxSizingReliable || i === e.style[t]),
      i = parseFloat(i) || 0
    }
    return i + E(e, t, n || (o ? 'border' : 'content'), r, a) + 'px'
  }
  function C(e) {
    var t = Y,
    n = wn[e];
    return n || (n = T(e, t), 'none' !== n && n || (un = (un || lt('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write('<!doctype html><html><body>'), t.close(), n = T(e, t), un.detach()), wn[e] = n),
    n
  }
  function T(e, t) {
    var n = lt(t.createElement(e)).appendTo(t.body),
    r = lt.css(n[0], 'display');
    return n.remove(),
    r
  }
  function N(e, t, n, r) {
    var i;
    if (lt.isArray(t)) lt.each(t, function (t, i) {
      n || Cn.test(e) ? r(e, i)  : N(e + '[' + ('object' == typeof i ? t : '') + ']', i, n, r)
    });
     else if (n || 'object' !== lt.type(t)) r(e, t);
     else for (i in t) N(e + '[' + i + ']', t[i], n, r)
  }
  function M(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r,
      i = 0,
      a = t.toLowerCase().match(ut) || [
      ];
      if (lt.isFunction(n)) for (; r = a[i++]; ) '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || [
      ]).unshift(n))  : (e[r] = e[r] || [
      ]).push(n)
    }
  }
  function L(e, n, r, i) {
    function a(l) {
      var c;
      return o[l] = !0,
      lt.each(e[l] || [
      ], function (e, l) {
        var u = l(n, r, i);
        return 'string' != typeof u || s || o[u] ? s ? !(c = u)  : t : (n.dataTypes.unshift(u), a(u), !1)
      }),
      c
    }
    var o = {
    },
    s = e === qn;
    return a(n.dataTypes[0]) || !o['*'] && a('*')
  }
  function G(e, n) {
    var r,
    i,
    a = lt.ajaxSettings.flatOptions || {
    };
    for (i in n) n[i] !== t && ((a[i] ? e : r || (r = {
    })) [i] = n[i]);
    return r && lt.extend(!0, e, r),
    e
  }
  function I(e, n, r) {
    var i,
    a,
    o,
    s,
    l = e.contents,
    c = e.dataTypes,
    u = e.responseFields;
    for (s in u) s in r && (n[u[s]] = r[s]);
    for (; '*' === c[0]; ) c.shift(),
    a === t && (a = e.mimeType || n.getResponseHeader('Content-Type'));
    if (a) for (s in l) if (l[s] && l[s].test(a)) {
      c.unshift(s);
      break
    }
    if (c[0] in r) o = c[0];
     else {
      for (s in r) {
        if (!c[0] || e.converters[s + ' ' + c[0]]) {
          o = s;
          break
        }
        i || (i = s)
      }
      o = o || i
    }
    return o ? (o !== c[0] && c.unshift(o), r[o])  : t
  }
  function O(e, t) {
    var n,
    r,
    i,
    a,
    o = {
    },
    s = 0,
    l = e.dataTypes.slice(),
    c = l[0];
    if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (i in e.converters) o[i.toLowerCase()] = e.converters[i];
    for (; r = l[++s]; ) if ('*' !== r) {
      if ('*' !== c && c !== r) {
        if (i = o[c + ' ' + r] || o['* ' + r], !i) for (n in o) if (a = n.split(' '), a[1] === r && (i = o[c + ' ' + a[0]] || o['* ' + a[0]])) {
          i === !0 ? i = o[n] : o[n] !== !0 && (r = a[0], l.splice(s--, 0, r));
          break
        }
        if (i !== !0) if (i && e['throws']) t = i(t);
         else try {
          t = i(t)
        } catch (u) {
          return {
            state: 'parsererror',
            error: i ? u : 'No conversion from ' + c + ' to ' + r
          }
        }
      }
      c = r
    }
    return {
      state: 'success',
      data: t
    }
  }
  function P() {
    try {
      return new e.XMLHttpRequest
    } catch (t) {
    }
  }
  function j() {
    try {
      return new e.ActiveXObject('Microsoft.XMLHTTP')
    } catch (t) {
    }
  }
  function D() {
    return setTimeout(function () {
      Jn = t
    }),
    Jn = lt.now()
  }
  function B(e, t) {
    lt.each(t, function (t, n) {
      for (var r = (ar[t] || [
      ]).concat(ar['*']), i = 0, a = r.length; a > i; i++) if (r[i].call(e, t, n)) return
    })
  }
  function $(e, t, n) {
    var r,
    i,
    a = 0,
    o = ir.length,
    s = lt.Deferred().always(function () {
      delete l.elem
    }),
    l = function () {
      if (i) return !1;
      for (var t = Jn || D(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, a = 1 - r, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(a);
      return s.notifyWith(e, [
        c,
        a,
        n
      ]),
      1 > a && l ? n : (s.resolveWith(e, [
        c
      ]), !1)
    },
    c = s.promise({
      elem: e,
      props: lt.extend({
      }, t),
      opts: lt.extend(!0, {
        specialEasing: {
        }
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Jn || D(),
      duration: n.duration,
      tweens: [
      ],
      createTween: function (t, n) {
        var r = lt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(r),
        r
      },
      stop: function (t) {
        var n = 0,
        r = t ? c.tweens.length : 0;
        if (i) return this;
        for (i = !0; r > n; n++) c.tweens[n].run(1);
        return t ? s.resolveWith(e, [
          c,
          t
        ])  : s.rejectWith(e, [
          c,
          t
        ]),
        this
      }
    }),
    u = c.props;
    for (V(u, c.opts.specialEasing); o > a; a++) if (r = ir[a].call(c, e, u, c.opts)) return r;
    return B(c, u),
    lt.isFunction(c.opts.start) && c.opts.start.call(e, c),
    lt.fx.timer(lt.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })),
    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  function V(e, t) {
    var n,
    r,
    i,
    a,
    o;
    for (i in e) if (r = lt.camelCase(i), a = t[r], n = e[i], lt.isArray(n) && (a = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), o = lt.cssHooks[r], o && 'expand' in o) {
      n = o.expand(n),
      delete e[r];
      for (i in n) i in e || (e[i] = n[i], t[i] = a)
    } else t[r] = a
  }
  function R(e, t, n) {
    var r,
    i,
    a,
    o,
    s,
    l,
    c,
    u,
    d,
    f = this,
    h = e.style,
    p = {
    },
    g = [
    ],
    v = e.nodeType && k(e);
    n.queue || (u = lt._queueHooks(e, 'fx'), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function () {
      u.unqueued || d()
    }), u.unqueued++, f.always(function () {
      f.always(function () {
        u.unqueued--,
        lt.queue(e, 'fx').length || u.empty.fire()
      })
    })),
    1 === e.nodeType && ('height' in t || 'width' in t) && (n.overflow = [
      h.overflow,
      h.overflowX,
      h.overflowY
    ], 'inline' === lt.css(e, 'display') && 'none' === lt.css(e, 'float') && (lt.support.inlineBlockNeedsLayout && 'inline' !== C(e.nodeName) ? h.zoom = 1 : h.display = 'inline-block')),
    n.overflow && (h.overflow = 'hidden', lt.support.shrinkWrapBlocks || f.always(function () {
      h.overflow = n.overflow[0],
      h.overflowX = n.overflow[1],
      h.overflowY = n.overflow[2]
    }));
    for (i in t) if (o = t[i], tr.exec(o)) {
      if (delete t[i], l = l || 'toggle' === o, o === (v ? 'hide' : 'show')) continue;
      g.push(i)
    }
    if (a = g.length) {
      s = lt._data(e, 'fxshow') || lt._data(e, 'fxshow', {
      }),
      'hidden' in s && (v = s.hidden),
      l && (s.hidden = !v),
      v ? lt(e).show()  : f.done(function () {
        lt(e).hide()
      }),
      f.done(function () {
        var t;
        lt._removeData(e, 'fxshow');
        for (t in p) lt.style(e, t, p[t])
      });
      for (i = 0; a > i; i++) r = g[i],
      c = f.createTween(r, v ? s[r] : 0),
      p[r] = s[r] || lt.style(e, r),
      r in s || (s[r] = c.start, v && (c.end = c.start, c.start = 'width' === r || 'height' === r ? 1 : 0))
    }
  }
  function F(e, t, n, r, i) {
    return new F.prototype.init(e, t, n, r, i)
  }
  function z(e, t) {
    var n,
    r = {
      height: e
    },
    i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = _n[i],
    r['margin' + n] = r['padding' + n] = e;
    return t && (r.opacity = r.width = e),
    r
  }
  function q(e) {
    return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
  }
  var U,
  H,
  X = typeof t,
  Y = e.document,
  W = e.location,
  K = e.jQuery,
  Z = e.$,
  Q = {
  },
  J = [
  ],
  et = '1.9.1',
  tt = J.concat,
  nt = J.push,
  rt = J.slice,
  it = J.indexOf,
  at = Q.toString,
  ot = Q.hasOwnProperty,
  st = et.trim,
  lt = function (e, t) {
    return new lt.fn.init(e, t, H)
  },
  ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  ut = /\S+/g,
  dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  pt = /^[\],:{}\s]*$/,
  gt = /(?:^|:|,)(?:\s*\[)+/g,
  vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
  yt = /^-ms-/,
  bt = /-([\da-z])/gi,
  xt = function (e, t) {
    return t.toUpperCase()
  },
  wt = function (e) {
    (Y.addEventListener || 'load' === e.type || 'complete' === Y.readyState) && (kt(), lt.ready())
  },
  kt = function () {
    Y.addEventListener ? (Y.removeEventListener('DOMContentLoaded', wt, !1), e.removeEventListener('load', wt, !1))  : (Y.detachEvent('onreadystatechange', wt), e.detachEvent('onload', wt))
  };
  lt.fn = lt.prototype = {
    jquery: et,
    constructor: lt,
    init: function (e, n, r) {
      var i,
      a;
      if (!e) return this;
      if ('string' == typeof e) {
        if (i = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && e.length >= 3 ? [
          null,
          e,
          null
        ] : ft.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e)  : this.constructor(n).find(e);
        if (i[1]) {
          if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), ht.test(i[1]) && lt.isPlainObject(n)) for (i in n) lt.isFunction(this[i]) ? this[i](n[i])  : this.attr(i, n[i]);
          return this
        }
        if (a = Y.getElementById(i[2]), a && a.parentNode) {
          if (a.id !== i[2]) return r.find(e);
          this.length = 1,
          this[0] = a
        }
        return this.context = Y,
        this.selector = e,
        this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this)  : lt.isFunction(e) ? r.ready(e)  : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
    },
    selector: '',
    length: 0,
    size: function () {
      return this.length
    },
    toArray: function () {
      return rt.call(this)
    },
    get: function (e) {
      return null == e ? this.toArray()  : 0 > e ? this[this.length + e] : this[e]
    },
    pushStack: function (e) {
      var t = lt.merge(this.constructor(), e);
      return t.prevObject = this,
      t.context = this.context,
      t
    },
    each: function (e, t) {
      return lt.each(this, e, t)
    },
    ready: function (e) {
      return lt.ready.promise().done(e),
      this
    },
    slice: function () {
      return this.pushStack(rt.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq( - 1)
    },
    eq: function (e) {
      var t = this.length,
      n = + e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [
        this[n]
      ] : [
      ])
    },
    map: function (e) {
      return this.pushStack(lt.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    },
    end: function () {
      return this.prevObject || this.constructor(null)
    },
    push: nt,
    sort: [
    ].sort,
    splice: [
    ].splice
  },
  lt.fn.init.prototype = lt.fn,
  lt.extend = lt.fn.extend = function () {
    var e,
    n,
    r,
    i,
    a,
    o,
    s = arguments[0] || {
    },
    l = 1,
    c = arguments.length,
    u = !1;
    for ('boolean' == typeof s && (u = s, s = arguments[1] || {
    }, l = 2), 'object' == typeof s || lt.isFunction(s) || (s = {
    }), c === l && (s = this, --l); c > l; l++) if (null != (a = arguments[l])) for (i in a) e = s[i],
    r = a[i],
    s !== r && (u && r && (lt.isPlainObject(r) || (n = lt.isArray(r))) ? (n ? (n = !1, o = e && lt.isArray(e) ? e : [
    ])  : o = e && lt.isPlainObject(e) ? e : {
    }, s[i] = lt.extend(u, o, r))  : r !== t && (s[i] = r));
    return s
  },
  lt.extend({
    noConflict: function (t) {
      return e.$ === lt && (e.$ = Z),
      t && e.jQuery === lt && (e.jQuery = K),
      lt
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function (e) {
      e ? lt.readyWait++ : lt.ready(!0)
    },
    ready: function (e) {
      if (e === !0 ? !--lt.readyWait : !lt.isReady) {
        if (!Y.body) return setTimeout(lt.ready);
        lt.isReady = !0,
        e !== !0 && --lt.readyWait > 0 || (U.resolveWith(Y, [
          lt
        ]), lt.fn.trigger && lt(Y).trigger('ready').off('ready'))
      }
    },
    isFunction: function (e) {
      return 'function' === lt.type(e)
    },
    isArray: Array.isArray || function (e) {
      return 'array' === lt.type(e)
    },
    isWindow: function (e) {
      return null != e && e == e.window
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e)
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? Q[at.call(e)] || 'object' : typeof e
    },
    isPlainObject: function (e) {
      if (!e || 'object' !== lt.type(e) || e.nodeType || lt.isWindow(e)) return !1;
      try {
        if (e.constructor && !ot.call(e, 'constructor') && !ot.call(e.constructor.prototype, 'isPrototypeOf')) return !1
      } catch (n) {
        return !1
      }
      var r;
      for (r in e);
      return r === t || ot.call(e, r)
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    error: function (e) {
      throw Error(e)
    },
    parseHTML: function (e, t, n) {
      if (!e || 'string' != typeof e) return null;
      'boolean' == typeof t && (n = t, t = !1),
      t = t || Y;
      var r = ht.exec(e),
      i = !n && [
      ];
      return r ? [
        t.createElement(r[1])
      ] : (r = lt.buildFragment([e], t, i), i && lt(i).remove(), lt.merge([], r.childNodes))
    },
    parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n)  : null === n ? n : 'string' == typeof n && (n = lt.trim(n), n && pt.test(n.replace(vt, '@').replace(mt, ']').replace(gt, ''))) ? Function('return ' + n) ()  : (lt.error('Invalid JSON: ' + n), t)
    },
    parseXML: function (n) {
      var r,
      i;
      if (!n || 'string' != typeof n) return null;
      try {
        e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, 'text/xml'))  : (r = new ActiveXObject('Microsoft.XMLDOM'), r.async = 'false', r.loadXML(n))
      } catch (a) {
        r = t
      }
      return r && r.documentElement && !r.getElementsByTagName('parsererror').length || lt.error('Invalid XML: ' + n),
      r
    },
    noop: function () {
    },
    globalEval: function (t) {
      t && lt.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t)
      }) (t)
    },
    camelCase: function (e) {
      return e.replace(yt, 'ms-').replace(bt, xt)
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function (e, t, r) {
      var i,
      a = 0,
      o = e.length,
      s = n(e);
      if (r) {
        if (s) for (; o > a && (i = t.apply(e[a], r), i !== !1); a++);
         else for (a in e) if (i = t.apply(e[a], r), i === !1) break
      } else if (s) for (; o > a && (i = t.call(e[a], a, e[a]), i !== !1); a++);
       else for (a in e) if (i = t.call(e[a], a, e[a]), i === !1) break;
      return e
    },
    trim: st && !st.call('ï»¿Â ') ? function (e) {
      return null == e ? '' : st.call(e)
    }
     : function (e) {
      return null == e ? '' : (e + '').replace(dt, '')
    },
    makeArray: function (e, t) {
      var r = t || [
      ];
      return null != e && (n(Object(e)) ? lt.merge(r, 'string' == typeof e ? [
        e
      ] : e)  : nt.call(r, e)),
      r
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (it) return it.call(t, e, n);
        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n)  : n : 0; r > n; n++) if (n in t && t[n] === e) return n
      }
      return - 1
    },
    merge: function (e, n) {
      var r = n.length,
      i = e.length,
      a = 0;
      if ('number' == typeof r) for (; r > a; a++) e[i++] = n[a];
       else for (; n[a] !== t; ) e[i++] = n[a++];
      return e.length = i,
      e
    },
    grep: function (e, t, n) {
      var r,
      i = [
      ],
      a = 0,
      o = e.length;
      for (n = !!n; o > a; a++) r = !!t(e[a], a),
      n !== r && i.push(e[a]);
      return i
    },
    map: function (e, t, r) {
      var i,
      a = 0,
      o = e.length,
      s = n(e),
      l = [
      ];
      if (s) for (; o > a; a++) i = t(e[a], a, r),
      null != i && (l[l.length] = i);
       else for (a in e) i = t(e[a], a, r),
      null != i && (l[l.length] = i);
      return tt.apply([], l)
    },
    guid: 1,
    proxy: function (e, n) {
      var r,
      i,
      a;
      return 'string' == typeof n && (a = e[n], n = e, e = a),
      lt.isFunction(e) ? (r = rt.call(arguments, 2), i = function () {
        return e.apply(n || this, r.concat(rt.call(arguments)))
      }, i.guid = e.guid = e.guid || lt.guid++, i)  : t
    },
    access: function (e, n, r, i, a, o, s) {
      var l = 0,
      c = e.length,
      u = null == r;
      if ('object' === lt.type(r)) {
        a = !0;
        for (l in r) lt.access(e, n, l, r[l], !0, o, s)
      } else if (i !== t && (a = !0, lt.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), n = null)  : (u = n, n = function (e, t, n) {
        return u.call(lt(e), n)
      })), n)) for (; c > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      return a ? e : u ? n.call(e)  : c ? n(e[0], r)  : o
    },
    now: function () {
      return (new Date).getTime()
    }
  }),
  lt.ready.promise = function (t) {
    if (!U) if (U = lt.Deferred(), 'complete' === Y.readyState) setTimeout(lt.ready);
     else if (Y.addEventListener) Y.addEventListener('DOMContentLoaded', wt, !1),
    e.addEventListener('load', wt, !1);
     else {
      Y.attachEvent('onreadystatechange', wt),
      e.attachEvent('onload', wt);
      var n = !1;
      try {
        n = null == e.frameElement && Y.documentElement
      } catch (r) {
      }
      n && n.doScroll && function i() {
        if (!lt.isReady) {
          try {
            n.doScroll('left')
          } catch (e) {
            return setTimeout(i, 50)
          }
          kt(),
          lt.ready()
        }
      }()
    }
    return U.promise(t)
  },
  lt.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (e, t) {
    Q['[object ' + t + ']'] = t.toLowerCase()
  }),
  H = lt(Y);
  var St = {
  };
  lt.Callbacks = function (e) {
    e = 'string' == typeof e ? St[e] || r(e)  : lt.extend({
    }, e);
    var n,
    i,
    a,
    o,
    s,
    l,
    c = [
    ],
    u = !e.once && [
    ],
    d = function (t) {
      for (i = e.memory && t, a = !0, s = l || 0, l = 0, o = c.length, n = !0; c && o > s; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
        i = !1;
        break
      }
      n = !1,
      c && (u ? u.length && d(u.shift())  : i ? c = [
      ] : f.disable())
    },
    f = {
      add: function () {
        if (c) {
          var t = c.length;
          (function r(t) {
            lt.each(t, function (t, n) {
              var i = lt.type(n);
              'function' === i ? e.unique && f.has(n) || c.push(n)  : n && n.length && 'string' !== i && r(n)
            })
          }) (arguments),
          n ? o = c.length : i && (l = t, d(i))
        }
        return this
      },
      remove: function () {
        return c && lt.each(arguments, function (e, t) {
          for (var r; (r = lt.inArray(t, c, r)) > - 1; ) c.splice(r, 1),
          n && (o >= r && o--, s >= r && s--)
        }),
        this
      },
      has: function (e) {
        return e ? lt.inArray(e, c) > - 1 : !(!c || !c.length)
      },
      empty: function () {
        return c = [
        ],
        this
      },
      disable: function () {
        return c = u = i = t,
        this
      },
      disabled: function () {
        return !c
      },
      lock: function () {
        return u = t,
        i || f.disable(),
        this
      },
      locked: function () {
        return !u
      },
      fireWith: function (e, t) {
        return t = t || [
        ],
        t = [
          e,
          t.slice ? t.slice()  : t
        ],
        !c || a && !u || (n ? u.push(t)  : d(t)),
        this
      },
      fire: function () {
        return f.fireWith(this, arguments),
        this
      },
      fired: function () {
        return !!a
      }
    };
    return f
  },
  lt.extend({
    Deferred: function (e) {
      var t = [
        ['resolve',
        'done',
        lt.Callbacks('once memory'),
        'resolved'],
        [
          'reject',
          'fail',
          lt.Callbacks('once memory'),
          'rejected'
        ],
        [
          'notify',
          'progress',
          lt.Callbacks('memory')
        ]
      ],
      n = 'pending',
      r = {
        state: function () {
          return n
        },
        always: function () {
          return i.done(arguments).fail(arguments),
          this
        },
        then: function () {
          var e = arguments;
          return lt.Deferred(function (n) {
            lt.each(t, function (t, a) {
              var o = a[0],
              s = lt.isFunction(e[t]) && e[t];
              i[a[1]](function () {
                var e = s && s.apply(this, arguments);
                e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify)  : n[o + 'With'](this === r ? n.promise()  : this, s ? [
                  e
                ] : arguments)
              })
            }),
            e = null
          }).promise()
        },
        promise: function (e) {
          return null != e ? lt.extend(e, r)  : r
        }
      },
      i = {
      };
      return r.pipe = r.then,
      lt.each(t, function (e, a) {
        var o = a[2],
        s = a[3];
        r[a[1]] = o.add,
        s && o.add(function () {
          n = s
        }, t[1 ^ e][2].disable, t[2][2].lock),
        i[a[0]] = function () {
          return i[a[0] + 'With'](this === i ? r : this, arguments),
          this
        },
        i[a[0] + 'With'] = o.fireWith
      }),
      r.promise(i),
      e && e.call(i, i),
      i
    },
    when: function (e) {
      var t,
      n,
      r,
      i = 0,
      a = rt.call(arguments),
      o = a.length,
      s = 1 !== o || e && lt.isFunction(e.promise) ? o : 0,
      l = 1 === s ? e : lt.Deferred(),
      c = function (e, n, r) {
        return function (i) {
          n[e] = this,
          r[e] = arguments.length > 1 ? rt.call(arguments)  : i,
          r === t ? l.notifyWith(n, r)  : --s || l.resolveWith(n, r)
        }
      };
      if (o > 1) for (t = Array(o), n = Array(o), r = Array(o); o > i; i++) a[i] && lt.isFunction(a[i].promise) ? a[i].promise().done(c(i, r, a)).fail(l.reject).progress(c(i, n, t))  : --s;
      return s || l.resolveWith(r, a),
      l.promise()
    }
  }),
  lt.support = function () {
    var t,
    n,
    r,
    i,
    a,
    o,
    s,
    l,
    c,
    u,
    d = Y.createElement('div');
    if (d.setAttribute('className', 't'), d.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', n = d.getElementsByTagName('*'), r = d.getElementsByTagName('a') [0], !n || !r || !n.length) return {
    };
    a = Y.createElement('select'),
    s = a.appendChild(Y.createElement('option')),
    i = d.getElementsByTagName('input') [0],
    r.style.cssText = 'top:1px;float:left;opacity:.5',
    t = {
      getSetAttribute: 't' !== d.className,
      leadingWhitespace: 3 === d.firstChild.nodeType,
      tbody: !d.getElementsByTagName('tbody').length,
      htmlSerialize: !!d.getElementsByTagName('link').length,
      style: /top/.test(r.getAttribute('style')),
      hrefNormalized: '/a' === r.getAttribute('href'),
      opacity: /^0.5/.test(r.style.opacity),
      cssFloat: !!r.style.cssFloat,
      checkOn: !!i.value,
      optSelected: s.selected,
      enctype: !!Y.createElement('form').enctype,
      html5Clone: '<:nav></:nav>' !== Y.createElement('nav').cloneNode(!0).outerHTML,
      boxModel: 'CSS1Compat' === Y.compatMode,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      boxSizingReliable: !0,
      pixelPosition: !1
    },
    i.checked = !0,
    t.noCloneChecked = i.cloneNode(!0).checked,
    a.disabled = !0,
    t.optDisabled = !s.disabled;
    try {
      delete d.test
    } catch (f) {
      t.deleteExpando = !1
    }
    i = Y.createElement('input'),
    i.setAttribute('value', ''),
    t.input = '' === i.getAttribute('value'),
    i.value = 't',
    i.setAttribute('type', 'radio'),
    t.radioValue = 't' === i.value,
    i.setAttribute('checked', 't'),
    i.setAttribute('name', 't'),
    o = Y.createDocumentFragment(),
    o.appendChild(i),
    t.appendChecked = i.checked,
    t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked,
    d.attachEvent && (d.attachEvent('onclick', function () {
      t.noCloneEvent = !1
    }), d.cloneNode(!0).click());
    for (u in {
      submit: !0,
      change: !0,
      focusin: !0
    }) d.setAttribute(l = 'on' + u, 't'),
    t[u + 'Bubbles'] = l in e || d.attributes[l].expando === !1;
    return d.style.backgroundClip = 'content-box',
    d.cloneNode(!0).style.backgroundClip = '',
    t.clearCloneStyle = 'content-box' === d.style.backgroundClip,
    lt(function () {
      var n,
      r,
      i,
      a = 'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;',
      o = Y.getElementsByTagName('body') [0];
      o && (n = Y.createElement('div'), n.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px', o.appendChild(n).appendChild(d), d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', i = d.getElementsByTagName('td'), i[0].style.cssText = 'padding:0;margin:0;border:0;display:none', c = 0 === i[0].offsetHeight, i[0].style.display = '', i[1].style.display = 'none', t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, d.innerHTML = '', d.style.cssText = 'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;', t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = '1%' !== (e.getComputedStyle(d, null) || {
      }).top, t.boxSizingReliable = '4px' === (e.getComputedStyle(d, null) || {
        width: '4px'
      }).width, r = d.appendChild(Y.createElement('div')), r.style.cssText = d.style.cssText = a, r.style.marginRight = r.style.width = '0', d.style.width = '1px', t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {
      }).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = '', d.style.cssText = a + 'width:1px;padding:1px;display:inline;zoom:1', t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = 'block', d.innerHTML = '<div></div>', d.firstChild.style.width = '5px', t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = d = i = r = null)
    }),
    n = a = o = s = r = i = null,
    t
  }();
  var _t = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  Et = /([A-Z])/g;
  lt.extend({
    cache: {
    },
    expando: 'jQuery' + (et + Math.random()).replace(/\D/g, ''),
    noData: {
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      applet: !0
    },
    hasData: function (e) {
      return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando],
      !!e && !s(e)
    },
    data: function (e, t, n) {
      return i(e, t, n)
    },
    removeData: function (e, t) {
      return a(e, t)
    },
    _data: function (e, t, n) {
      return i(e, t, n, !0)
    },
    _removeData: function (e, t) {
      return a(e, t, !0)
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute('classid') === t
    }
  }),
  lt.fn.extend({
    data: function (e, n) {
      var r,
      i,
      a = this[0],
      s = 0,
      l = null;
      if (e === t) {
        if (this.length && (l = lt.data(a), 1 === a.nodeType && !lt._data(a, 'parsedAttrs'))) {
          for (r = a.attributes; r.length > s; s++) i = r[s].name,
          i.indexOf('data-') || (i = lt.camelCase(i.slice(5)), o(a, i, l[i]));
          lt._data(a, 'parsedAttrs', !0)
        }
        return l
      }
      return 'object' == typeof e ? this.each(function () {
        lt.data(this, e)
      })  : lt.access(this, function (n) {
        return n === t ? a ? o(a, e, lt.data(a, e))  : null : (this.each(function () {
          lt.data(this, e, n)
        }), t)
      }, null, n, arguments.length > 1, null, !0)
    },
    removeData: function (e) {
      return this.each(function () {
        lt.removeData(this, e)
      })
    }
  }),
  lt.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = (n || 'fx') + 'queue', i = lt._data(e, n), r && (!i || lt.isArray(r) ? i = lt._data(e, n, lt.makeArray(r))  : i.push(r)), i || [
      ])  : t
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = lt.queue(e, t),
      r = n.length,
      i = n.shift(),
      a = lt._queueHooks(e, t),
      o = function () {
        lt.dequeue(e, t)
      };
      'inprogress' === i && (i = n.shift(), r--),
      a.cur = i,
      i && ('fx' === t && n.unshift('inprogress'), delete a.stop, i.call(e, o, a)),
      !r && a && a.empty.fire()
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return lt._data(e, n) || lt._data(e, n, {
        empty: lt.Callbacks('once memory').add(function () {
          lt._removeData(e, t + 'queue'),
          lt._removeData(e, n)
        })
      })
    }
  }),
  lt.fn.extend({
    queue: function (e, n) {
      var r = 2;
      return 'string' != typeof e && (n = e, e = 'fx', r--),
      r > arguments.length ? lt.queue(this[0], e)  : n === t ? this : this.each(function () {
        var t = lt.queue(this, e, n);
        lt._queueHooks(this, e),
        'fx' === e && 'inprogress' !== t[0] && lt.dequeue(this, e)
      })
    },
    dequeue: function (e) {
      return this.each(function () {
        lt.dequeue(this, e)
      })
    },
    delay: function (e, t) {
      return e = lt.fx ? lt.fx.speeds[e] || e : e,
      t = t || 'fx',
      this.queue(t, function (t, n) {
        var r = setTimeout(t, e);
        n.stop = function () {
          clearTimeout(r)
        }
      })
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', [
      ])
    },
    promise: function (e, n) {
      var r,
      i = 1,
      a = lt.Deferred(),
      o = this,
      s = this.length,
      l = function () {
        --i || a.resolveWith(o, [
          o
        ])
      };
      for ('string' != typeof e && (n = e, e = t), e = e || 'fx'; s--; ) r = lt._data(o[s], e + 'queueHooks'),
      r && r.empty && (i++, r.empty.add(l));
      return l(),
      a.promise(n)
    }
  });
  var At,
  Ct,
  Tt = /[\t\r\n]/g,
  Nt = /\r/g,
  Mt = /^(?:input|select|textarea|button|object)$/i,
  Lt = /^(?:a|area)$/i,
  Gt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
  It = /^(?:checked|selected)$/i,
  Ot = lt.support.getSetAttribute,
  Pt = lt.support.input;
  lt.fn.extend({
    attr: function (e, t) {
      return lt.access(this, lt.attr, e, t, arguments.length > 1)
    },
    removeAttr: function (e) {
      return this.each(function () {
        lt.removeAttr(this, e)
      })
    },
    prop: function (e, t) {
      return lt.access(this, lt.prop, e, t, arguments.length > 1)
    },
    removeProp: function (e) {
      return e = lt.propFix[e] || e,
      this.each(function () {
        try {
          this[e] = t,
          delete this[e]
        } catch (n) {
        }
      })
    },
    addClass: function (e) {
      var t,
      n,
      r,
      i,
      a,
      o = 0,
      s = this.length,
      l = 'string' == typeof e && e;
      if (lt.isFunction(e)) return this.each(function (t) {
        lt(this).addClass(e.call(this, t, this.className))
      });
      if (l) for (t = (e || '').match(ut) || [
      ]; s > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(Tt, ' ')  : ' ')) {
        for (a = 0; i = t[a++]; ) 0 > r.indexOf(' ' + i + ' ') && (r += i + ' ');
        n.className = lt.trim(r)
      }
      return this
    },
    removeClass: function (e) {
      var t,
      n,
      r,
      i,
      a,
      o = 0,
      s = this.length,
      l = 0 === arguments.length || 'string' == typeof e && e;
      if (lt.isFunction(e)) return this.each(function (t) {
        lt(this).removeClass(e.call(this, t, this.className))
      });
      if (l) for (t = (e || '').match(ut) || [
      ]; s > o; o++) if (n = this[o], r = 1 === n.nodeType && (n.className ? (' ' + n.className + ' ').replace(Tt, ' ')  : '')) {
        for (a = 0; i = t[a++]; ) for (; r.indexOf(' ' + i + ' ') >= 0; ) r = r.replace(' ' + i + ' ', ' ');
        n.className = e ? lt.trim(r)  : ''
      }
      return this
    },
    toggleClass: function (e, t) {
      var n = typeof e,
      r = 'boolean' == typeof t;
      return lt.isFunction(e) ? this.each(function (n) {
        lt(this).toggleClass(e.call(this, n, this.className, t), t)
      })  : this.each(function () {
        if ('string' === n) for (var i, a = 0, o = lt(this), s = t, l = e.match(ut) || [
        ]; i = l[a++]; ) s = r ? s : !o.hasClass(i),
        o[s ? 'addClass' : 'removeClass'](i);
         else (n === X || 'boolean' === n) && (this.className && lt._data(this, '__className__', this.className), this.className = this.className || e === !1 ? '' : lt._data(this, '__className__') || '')
      })
    },
    hasClass: function (e) {
      for (var t = ' ' + e + ' ', n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(Tt, ' ').indexOf(t) >= 0) return !0;
      return !1
    },
    val: function (e) {
      var n,
      r,
      i,
      a = this[0];
      return arguments.length ? (i = lt.isFunction(e), this.each(function (n) {
        var a,
        o = lt(this);
        1 === this.nodeType && (a = i ? e.call(this, n, o.val())  : e, null == a ? a = '' : 'number' == typeof a ? a += '' : lt.isArray(a) && (a = lt.map(a, function (e) {
          return null == e ? '' : e + ''
        })), r = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], r && 'set' in r && r.set(this, a, 'value') !== t || (this.value = a))
      }))  : a ? (r = lt.valHooks[a.type] || lt.valHooks[a.nodeName.toLowerCase()], r && 'get' in r && (n = r.get(a, 'value')) !== t ? n : (n = a.value, 'string' == typeof n ? n.replace(Nt, '')  : null == n ? '' : n))  : void 0
    }
  }),
  lt.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = e.attributes.value;
          return !t || t.specified ? e.value : e.text
        }
      },
      select: {
        get: function (e) {
          for (var t, n, r = e.options, i = e.selectedIndex, a = 'select-one' === e.type || 0 > i, o = a ? null : [
          ], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (lt.support.optDisabled ? n.disabled : null !== n.getAttribute('disabled')) || n.parentNode.disabled && lt.nodeName(n.parentNode, 'optgroup'))) {
            if (t = lt(n).val(), a) return t;
            o.push(t)
          }
          return o
        },
        set: function (e, t) {
          var n = lt.makeArray(t);
          return lt(e).find('option').each(function () {
            this.selected = lt.inArray(lt(this).val(), n) >= 0
          }),
          n.length || (e.selectedIndex = - 1),
          n
        }
      }
    },
    attr: function (e, n, r) {
      var i,
      a,
      o,
      s = e.nodeType;
      return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === X ? lt.prop(e, n, r)  : (a = 1 !== s || !lt.isXMLDoc(e), a && (n = n.toLowerCase(), i = lt.attrHooks[n] || (Gt.test(n) ? Ct : At)), r === t ? i && a && 'get' in i && null !== (o = i.get(e, n)) ? o : (typeof e.getAttribute !== X && (o = e.getAttribute(n)), null == o ? t : o)  : null !== r ? i && a && 'set' in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ''), r)  : (lt.removeAttr(e, n), t))  : void 0
    },
    removeAttr: function (e, t) {
      var n,
      r,
      i = 0,
      a = t && t.match(ut);
      if (a && 1 === e.nodeType) for (; n = a[i++]; ) r = lt.propFix[n] || n,
      Gt.test(n) ? !Ot && It.test(n) ? e[lt.camelCase('default-' + n)] = e[r] = !1 : e[r] = !1 : lt.attr(e, n, ''),
      e.removeAttribute(Ot ? n : r)
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!lt.support.radioValue && 'radio' === t && lt.nodeName(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t),
            n && (e.value = n),
            t
          }
        }
      }
    },
    propFix: {
      tabindex: 'tabIndex',
      readonly: 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      maxlength: 'maxLength',
      cellspacing: 'cellSpacing',
      cellpadding: 'cellPadding',
      rowspan: 'rowSpan',
      colspan: 'colSpan',
      usemap: 'useMap',
      frameborder: 'frameBorder',
      contenteditable: 'contentEditable'
    },
    prop: function (e, n, r) {
      var i,
      a,
      o,
      s = e.nodeType;
      return e && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !lt.isXMLDoc(e), o && (n = lt.propFix[n] || n, a = lt.propHooks[n]), r !== t ? a && 'set' in a && (i = a.set(e, r, n)) !== t ? i : e[n] = r : a && 'get' in a && null !== (i = a.get(e, n)) ? i : e[n])  : void 0
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var n = e.getAttributeNode('tabindex');
          return n && n.specified ? parseInt(n.value, 10)  : Mt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : t
        }
      }
    }
  }),
  Ct = {
    get: function (e, n) {
      var r = lt.prop(e, n),
      i = 'boolean' == typeof r && e.getAttribute(n),
      a = 'boolean' == typeof r ? Pt && Ot ? null != i : It.test(n) ? e[lt.camelCase('default-' + n)] : !!i : e.getAttributeNode(n);
      return a && a.value !== !1 ? n.toLowerCase()  : t
    },
    set: function (e, t, n) {
      return t === !1 ? lt.removeAttr(e, n)  : Pt && Ot || !It.test(n) ? e.setAttribute(!Ot && lt.propFix[n] || n, n)  : e[lt.camelCase('default-' + n)] = e[n] = !0,
      n
    }
  },
  Pt && Ot || (lt.attrHooks.value = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return lt.nodeName(e, 'input') ? e.defaultValue : r && r.specified ? r.value : t
    },
    set: function (e, n, r) {
      return lt.nodeName(e, 'input') ? (e.defaultValue = n, t)  : At && At.set(e, n, r)
    }
  }),
  Ot || (At = lt.valHooks.button = {
    get: function (e, n) {
      var r = e.getAttributeNode(n);
      return r && ('id' === n || 'name' === n || 'coords' === n ? '' !== r.value : r.specified) ? r.value : t
    },
    set: function (e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
      i.value = n += '',
      'value' === r || n === e.getAttribute(r) ? n : t
    }
  }, lt.attrHooks.contenteditable = {
    get: At.get,
    set: function (e, t, n) {
      At.set(e, '' === t ? !1 : t, n)
    }
  }, lt.each(['width',
  'height'], function (e, n) {
    lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
      set: function (e, r) {
        return '' === r ? (e.setAttribute(n, 'auto'), r)  : t
      }
    })
  })),
  lt.support.hrefNormalized || (lt.each(['href',
  'src',
  'width',
  'height'], function (e, n) {
    lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
      get: function (e) {
        var r = e.getAttribute(n, 2);
        return null == r ? t : r
      }
    })
  }), lt.each(['href',
  'src'], function (e, t) {
    lt.propHooks[t] = {
      get: function (e) {
        return e.getAttribute(t, 4)
      }
    }
  })),
  lt.support.style || (lt.attrHooks.style = {
    get: function (e) {
      return e.style.cssText || t
    },
    set: function (e, t) {
      return e.style.cssText = t + ''
    }
  }),
  lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
    get: function (e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
      null
    }
  })),
  lt.support.enctype || (lt.propFix.enctype = 'encoding'),
  lt.support.checkOn || lt.each(['radio',
  'checkbox'], function () {
    lt.valHooks[this] = {
      get: function (e) {
        return null === e.getAttribute('value') ? 'on' : e.value
      }
    }
  }),
  lt.each(['radio',
  'checkbox'], function () {
    lt.valHooks[this] = lt.extend(lt.valHooks[this], {
      set: function (e, n) {
        return lt.isArray(n) ? e.checked = lt.inArray(lt(e).val(), n) >= 0 : t
      }
    })
  });
  var jt = /^(?:input|select|textarea)$/i,
  Dt = /^key/,
  Bt = /^(?:mouse|contextmenu)|click/,
  $t = /^(?:focusinfocus|focusoutblur)$/,
  Vt = /^([^.]*)(?:\.(.+)|)$/;
  lt.event = {
    global: {
    },
    add: function (e, n, r, i, a) {
      var o,
      s,
      l,
      c,
      u,
      d,
      f,
      h,
      p,
      g,
      v,
      m = lt._data(e);
      if (m) {
        for (r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = lt.guid++), (s = m.events) || (s = m.events = {
        }), (d = m.handle) || (d = m.handle = function (e) {
          return typeof lt === X || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(d.elem, arguments)
        }, d.elem = e), n = (n || '').match(ut) || [
          ''
        ], l = n.length; l--; ) o = Vt.exec(n[l]) || [
        ],
        p = v = o[1],
        g = (o[2] || '').split('.').sort(),
        u = lt.event.special[p] || {
        },
        p = (a ? u.delegateType : u.bindType) || p,
        u = lt.event.special[p] || {
        },
        f = lt.extend({
          type: p,
          origType: v,
          data: i,
          handler: r,
          guid: r.guid,
          selector: a,
          needsContext: a && lt.expr.match.needsContext.test(a),
          namespace: g.join('.')
        }, c),
        (h = s[p]) || (h = s[p] = [
        ], h.delegateCount = 0, u.setup && u.setup.call(e, i, g, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1)  : e.attachEvent && e.attachEvent('on' + p, d))),
        u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)),
        a ? h.splice(h.delegateCount++, 0, f)  : h.push(f),
        lt.event.global[p] = !0;
        e = null
      }
    },
    remove: function (e, t, n, r, i) {
      var a,
      o,
      s,
      l,
      c,
      u,
      d,
      f,
      h,
      p,
      g,
      v = lt.hasData(e) && lt._data(e);
      if (v && (u = v.events)) {
        for (t = (t || '').match(ut) || [
          ''
        ], c = t.length; c--; ) if (s = Vt.exec(t[c]) || [
        ], h = g = s[1], p = (s[2] || '').split('.').sort(), h) {
          for (d = lt.event.special[h] || {
          }, h = (r ? d.delegateType : d.bindType) || h, f = u[h] || [
          ], s = s[2] && RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), l = a = f.length; a--; ) o = f[a],
          !i && g !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ('**' !== r || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, d.remove && d.remove.call(e, o));
          l && !f.length && (d.teardown && d.teardown.call(e, p, v.handle) !== !1 || lt.removeEvent(e, h, v.handle), delete u[h])
        } else for (h in u) lt.event.remove(e, h + t[c], n, r, !0);
        lt.isEmptyObject(u) && (delete v.handle, lt._removeData(e, 'events'))
      }
    },
    trigger: function (n, r, i, a) {
      var o,
      s,
      l,
      c,
      u,
      d,
      f,
      h = [
        i || Y
      ],
      p = ot.call(n, 'type') ? n.type : n,
      g = ot.call(n, 'namespace') ? n.namespace.split('.')  : [
      ];
      if (l = d = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !$t.test(p + lt.event.triggered) && (p.indexOf('.') >= 0 && (g = p.split('.'), p = g.shift(), g.sort()), s = 0 > p.indexOf(':') && 'on' + p, n = n[lt.expando] ? n : new lt.Event(p, 'object' == typeof n && n), n.isTrigger = !0, n.namespace = g.join('.'), n.namespace_re = n.namespace ? RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, n.result = t, n.target || (n.target = i), r = null == r ? [
        n
      ] : lt.makeArray(r, [
        n
      ]), u = lt.event.special[p] || {
      }, a || !u.trigger || u.trigger.apply(i, r) !== !1)) {
        if (!a && !u.noBubble && !lt.isWindow(i)) {
          for (c = u.delegateType || p, $t.test(c + p) || (l = l.parentNode); l; l = l.parentNode) h.push(l),
          d = l;
          d === (i.ownerDocument || Y) && h.push(d.defaultView || d.parentWindow || e)
        }
        for (f = 0; (l = h[f++]) && !n.isPropagationStopped(); ) n.type = f > 1 ? c : u.bindType || p,
        o = (lt._data(l, 'events') || {
        }) [n.type] && lt._data(l, 'handle'),
        o && o.apply(l, r),
        o = s && l[s],
        o && lt.acceptData(l) && o.apply && o.apply(l, r) === !1 && n.preventDefault();
        if (n.type = p, !(a || n.isDefaultPrevented() || u._default && u._default.apply(i.ownerDocument, r) !== !1 || 'click' === p && lt.nodeName(i, 'a') || !lt.acceptData(i) || !s || !i[p] || lt.isWindow(i))) {
          d = i[s],
          d && (i[s] = null),
          lt.event.triggered = p;
          try {
            i[p]()
          } catch (v) {
          }
          lt.event.triggered = t,
          d && (i[s] = d)
        }
        return n.result
      }
    },
    dispatch: function (e) {
      e = lt.event.fix(e);
      var n,
      r,
      i,
      a,
      o,
      s = [
      ],
      l = rt.call(arguments),
      c = (lt._data(this, 'events') || {
      }) [e.type] || [
      ],
      u = lt.event.special[e.type] || {
      };
      if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
        for (s = lt.event.handlers.call(this, e, c), n = 0; (a = s[n++]) && !e.isPropagationStopped(); ) for (e.currentTarget = a.elem, o = 0; (i = a.handlers[o++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((lt.event.special[i.origType] || {
        }).handle || i.handler).apply(a.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e),
        e.result
      }
    },
    handlers: function (e, n) {
      var r,
      i,
      a,
      o,
      s = [
      ],
      l = n.delegateCount,
      c = e.target;
      if (l && c.nodeType && (!e.button || 'click' !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || 'click' !== e.type)) {
        for (a = [
        ], o = 0; l > o; o++) i = n[o],
        r = i.selector + ' ',
        a[r] === t && (a[r] = i.needsContext ? lt(r, this).index(c) >= 0 : lt.find(r, this, null, [
          c
        ]).length),
        a[r] && a.push(i);
        a.length && s.push({
          elem: c,
          handlers: a
        })
      }
      return n.length > l && s.push({
        elem: this,
        handlers: n.slice(l)
      }),
      s
    },
    fix: function (e) {
      if (e[lt.expando]) return e;
      var t,
      n,
      r,
      i = e.type,
      a = e,
      o = this.fixHooks[i];
      for (o || (this.fixHooks[i] = o = Bt.test(i) ? this.mouseHooks : Dt.test(i) ? this.keyHooks : {
      }), r = o.props ? this.props.concat(o.props)  : this.props, e = new lt.Event(a), t = r.length; t--; ) n = r[t],
      e[n] = a[n];
      return e.target || (e.target = a.srcElement || Y),
      3 === e.target.nodeType && (e.target = e.target.parentNode),
      e.metaKey = !!e.metaKey,
      o.filter ? o.filter(e, a)  : e
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {
    },
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
        e
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (e, n) {
        var r,
        i,
        a,
        o = n.button,
        s = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)),
        !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s),
        e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
        e
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        trigger: function () {
          return lt.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1)  : t
        }
      },
      focus: {
        trigger: function () {
          if (this !== Y.activeElement && this.focus) try {
            return this.focus(),
            !1
          } catch (e) {
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === Y.activeElement && this.blur ? (this.blur(), !1)  : t
        },
        delegateType: 'focusout'
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = lt.extend(new lt.Event, n, {
        type: e,
        isSimulated: !0,
        originalEvent: {
        }
      });
      r ? lt.event.trigger(i, null, t)  : lt.event.dispatch.call(t, i),
      i.isDefaultPrevented() && n.preventDefault()
    }
  },
  lt.removeEvent = Y.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1)
  }
   : function (e, t, n) {
    var r = 'on' + t;
    e.detachEvent && (typeof e[r] === X && (e[r] = null), e.detachEvent(r, n))
  },
  lt.Event = function (e, n) {
    return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c)  : this.type = e, n && lt.extend(this, n), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, t)  : new lt.Event(e, n)
  },
  lt.Event.prototype = {
    isDefaultPrevented: c,
    isPropagationStopped: c,
    isImmediatePropagationStopped: c,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = l,
      e && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1)
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = l,
      e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = l,
      this.stopPropagation()
    }
  },
  lt.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (e, t) {
    lt.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n,
        r = this,
        i = e.relatedTarget,
        a = e.handleObj;
        return (!i || i !== r && !lt.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t),
        n
      }
    }
  }),
  lt.support.submitBubbles || (lt.event.special.submit = {
    setup: function () {
      return lt.nodeName(this, 'form') ? !1 : (lt.event.add(this, 'click._submit keypress._submit', function (e) {
        var n = e.target,
        r = lt.nodeName(n, 'input') || lt.nodeName(n, 'button') ? n.form : t;
        r && !lt._data(r, 'submitBubbles') && (lt.event.add(r, 'submit._submit', function (e) {
          e._submit_bubble = !0
        }), lt._data(r, 'submitBubbles', !0))
      }), t)
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate('submit', this.parentNode, e, !0))
    },
    teardown: function () {
      return lt.nodeName(this, 'form') ? !1 : (lt.event.remove(this, '._submit'), t)
    }
  }),
  lt.support.changeBubbles || (lt.event.special.change = {
    setup: function () {
      return jt.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (lt.event.add(this, 'propertychange._change', function (e) {
        'checked' === e.originalEvent.propertyName && (this._just_changed = !0)
      }), lt.event.add(this, 'click._change', function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1),
        lt.event.simulate('change', this, e, !0)
      })), !1)  : (lt.event.add(this, 'beforeactivate._change', function (e) {
        var t = e.target;
        jt.test(t.nodeName) && !lt._data(t, 'changeBubbles') && (lt.event.add(t, 'change._change', function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate('change', this.parentNode, e, !0)
        }), lt._data(t, 'changeBubbles', !0))
      }), t)
    },
    handle: function (e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || 'radio' !== n.type && 'checkbox' !== n.type ? e.handleObj.handler.apply(this, arguments)  : t
    },
    teardown: function () {
      return lt.event.remove(this, '._change'),
      !jt.test(this.nodeName)
    }
  }),
  lt.support.focusinBubbles || lt.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = 0,
    r = function (e) {
      lt.event.simulate(t, e.target, lt.event.fix(e), !0)
    };
    lt.event.special[t] = {
      setup: function () {
        0 === n++ && Y.addEventListener(e, r, !0)
      },
      teardown: function () {
        0 === --n && Y.removeEventListener(e, r, !0)
      }
    }
  }),
  lt.fn.extend({
    on: function (e, n, r, i, a) {
      var o,
      s;
      if ('object' == typeof e) {
        'string' != typeof n && (r = r || n, n = t);
        for (o in e) this.on(o, n, r, e[o], a);
        return this
      }
      if (null == r && null == i ? (i = n, r = n = t)  : null == i && ('string' == typeof n ? (i = r, r = t)  : (i = r, r = n, n = t)), i === !1) i = c;
       else if (!i) return this;
      return 1 === a && (s = i, i = function (e) {
        return lt().off(e),
        s.apply(this, arguments)
      }, i.guid = s.guid || (s.guid = lt.guid++)),
      this.each(function () {
        lt.event.add(this, e, i, r, n)
      })
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1)
    },
    off: function (e, n, r) {
      var i,
      a;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
      lt(e.delegateTarget).off(i.namespace ? i.origType + '.' + i.namespace : i.origType, i.selector, i.handler),
      this;
      if ('object' == typeof e) {
        for (a in e) this.off(a, n, e[a]);
        return this
      }
      return (n === !1 || 'function' == typeof n) && (r = n, n = t),
      r === !1 && (r = c),
      this.each(function () {
        lt.event.remove(this, e, r, n)
      })
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function (e, t) {
      return this.off(e, null, t)
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**')  : this.off(t, e || '**', n)
    },
    trigger: function (e, t) {
      return this.each(function () {
        lt.event.trigger(e, t, this)
      })
    },
    triggerHandler: function (e, n) {
      var r = this[0];
      return r ? lt.event.trigger(e, n, r, !0)  : t
    }
  }),
  function (e, t) {
    function n(e) {
      return pt.test(e + '')
    }
    function r() {
      var e,
      t = [
      ];
      return e = function (n, r) {
        return t.push(n += ' ') > _.cacheLength && delete e[t.shift()],
        e[n] = r
      }
    }
    function i(e) {
      return e[$] = !0,
      e
    }
    function a(e) {
      var t = L.createElement('div');
      try {
        return e(t)
      } catch (n) {
        return !1
      } finally {
        t = null
      }
    }
    function o(e, t, n, r) {
      var i,
      a,
      o,
      s,
      l,
      c,
      u,
      h,
      p,
      g;
      if ((t ? t.ownerDocument || t : V) !== L && M(t), t = t || L, n = n || [
      ], !e || 'string' != typeof e) return n;
      if (1 !== (s = t.nodeType) && 9 !== s) return [];
      if (!I && !r) {
        if (i = gt.exec(e)) if (o = i[1]) {
          if (9 === s) {
            if (a = t.getElementById(o), !a || !a.parentNode) return n;
            if (a.id === o) return n.push(a),
            n
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && D(t, a) && a.id === o) return n.push(a),
          n
        } else {
          if (i[2]) return Z.apply(n, Q.call(t.getElementsByTagName(e), 0)),
          n;
          if ((o = i[3]) && R.getByClassName && t.getElementsByClassName) return Z.apply(n, Q.call(t.getElementsByClassName(o), 0)),
          n
        }
        if (R.qsa && !O.test(e)) {
          if (u = !0, h = $, p = t, g = 9 === s && e, 1 === s && 'object' !== t.nodeName.toLowerCase()) {
            for (c = d(e), (u = t.getAttribute('id')) ? h = u.replace(yt, '\\$&')  : t.setAttribute('id', h), h = '[id=\'' + h + '\'] ', l = c.length; l--; ) c[l] = h + f(c[l]);
            p = ht.test(e) && t.parentNode || t,
            g = c.join(',')
          }
          if (g) try {
            return Z.apply(n, Q.call(p.querySelectorAll(g), 0)),
            n
          } catch (v) {
          } finally {
            u || t.removeAttribute('id')
          }
        }
      }
      return x(e.replace(ot, '$1'), t, n, r)
    }
    function s(e, t) {
      var n = t && e,
      r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
      if (r) return r;
      if (n) for (; n = n.nextSibling; ) if (n === t) return - 1;
      return e ? 1 : - 1
    }
    function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return 'input' === n && t.type === e
      }
    }
    function c(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ('input' === n || 'button' === n) && t.type === e
      }
    }
    function u(e) {
      return i(function (t) {
        return t = + t,
        i(function (n, r) {
          for (var i, a = e([], n.length, t), o = a.length; o--; ) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
        })
      })
    }
    function d(e, t) {
      var n,
      r,
      i,
      a,
      s,
      l,
      c,
      u = U[e + ' '];
      if (u) return t ? 0 : u.slice(0);
      for (s = e, l = [
      ], c = _.preFilter; s; ) {
        (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [
        ])),
        n = !1,
        (r = ct.exec(s)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(ot, ' ')
        }), s = s.slice(n.length));
        for (a in _.filter) !(r = ft[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), i.push({
          value: n,
          type: a,
          matches: r
        }), s = s.slice(n.length));
        if (!n) break
      }
      return t ? s.length : s ? o.error(e)  : U(e, l).slice(0)
    }
    function f(e) {
      for (var t = 0, n = e.length, r = ''; n > t; t++) r += e[t].value;
      return r
    }
    function h(e, t, n) {
      var r = t.dir,
      i = n && 'parentNode' === r,
      a = z++;
      return t.first ? function (t, n, a) {
        for (; t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, a)
      }
       : function (t, n, o) {
        var s,
        l,
        c,
        u = F + ' ' + a;
        if (o) {
          for (; t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, o)) return !0
        } else for (; t = t[r]; ) if (1 === t.nodeType || i) if (c = t[$] || (t[$] = {
        }), (l = c[r]) && l[0] === u) {
          if ((s = l[1]) === !0 || s === S) return s === !0
        } else if (l = c[r] = [
          u
        ], l[1] = e(t, n, o) || S, l[1] === !0) return !0
      }
    }
    function p(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
        return !0
      }
       : e[0]
    }
    function g(e, t, n, r, i) {
      for (var a, o = [
      ], s = 0, l = e.length, c = null != t; l > s; s++) (a = e[s]) && (!n || n(a, r, i)) && (o.push(a), c && t.push(s));
      return o
    }
    function v(e, t, n, r, a, o) {
      return r && !r[$] && (r = v(r)),
      a && !a[$] && (a = v(a, o)),
      i(function (i, o, s, l) {
        var c,
        u,
        d,
        f = [
        ],
        h = [
        ],
        p = o.length,
        v = i || b(t || '*', s.nodeType ? [
          s
        ] : s, [
        ]),
        m = !e || !i && t ? v : g(v, f, e, s, l),
        y = n ? a || (i ? e : p || r) ? [
        ] : o : m;
        if (n && n(m, y, s, l), r) for (c = g(y, h), r(c, [
        ], s, l), u = c.length; u--; ) (d = c[u]) && (y[h[u]] = !(m[h[u]] = d));
        if (i) {
          if (a || e) {
            if (a) {
              for (c = [
              ], u = y.length; u--; ) (d = y[u]) && c.push(m[u] = d);
              a(null, y = [
              ], c, l)
            }
            for (u = y.length; u--; ) (d = y[u]) && (c = a ? J.call(i, d)  : f[u]) > - 1 && (i[c] = !(o[c] = d))
          }
        } else y = g(y === o ? y.splice(p, y.length)  : y),
        a ? a(null, o, y, l)  : Z.apply(o, y)
      })
    }
    function m(e) {
      for (var t, n, r, i = e.length, a = _.relative[e[0].type], o = a || _.relative[' '], s = a ? 1 : 0, l = h(function (e) {
        return e === t
      }, o, !0), c = h(function (e) {
        return J.call(t, e) > - 1
      }, o, !0), u = [
        function (e, n, r) {
          return !a && (r || n !== N) || ((t = n).nodeType ? l(e, n, r)  : c(e, n, r))
        }
      ]; i > s; s++) if (n = _.relative[e[s].type]) u = [
        h(p(u), n)
      ];
       else {
        if (n = _.filter[e[s].type].apply(null, e[s].matches), n[$]) {
          for (r = ++s; i > r && !_.relative[e[r].type]; r++);
          return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1)).replace(ot, '$1'), n, r > s && m(e.slice(s, r)), i > r && m(e = e.slice(r)), i > r && f(e))
        }
        u.push(n)
      }
      return p(u)
    }
    function y(e, t) {
      var n = 0,
      r = t.length > 0,
      a = e.length > 0,
      s = function (i, s, l, c, u) {
        var d,
        f,
        h,
        p = [
        ],
        v = 0,
        m = '0',
        y = i && [
        ],
        b = null != u,
        x = N,
        w = i || a && _.find.TAG('*', u && s.parentNode || s),
        k = F += null == x ? 1 : Math.random() || 0.1;
        for (b && (N = s !== L && s, S = n); null != (d = w[m]); m++) {
          if (a && d) {
            for (f = 0; h = e[f++]; ) if (h(d, s, l)) {
              c.push(d);
              break
            }
            b && (F = k, S = ++n)
          }
          r && ((d = !h && d) && v--, i && y.push(d))
        }
        if (v += m, r && m !== v) {
          for (f = 0; h = t[f++]; ) h(y, p, s, l);
          if (i) {
            if (v > 0) for (; m--; ) y[m] || p[m] || (p[m] = K.call(c));
            p = g(p)
          }
          Z.apply(c, p),
          b && !i && p.length > 0 && v + t.length > 1 && o.uniqueSort(c)
        }
        return b && (F = k, N = x),
        y
      };
      return r ? i(s)  : s
    }
    function b(e, t, n) {
      for (var r = 0, i = t.length; i > r; r++) o(e, t[r], n);
      return n
    }
    function x(e, t, n, r) {
      var i,
      a,
      o,
      s,
      l,
      c = d(e);
      if (!r && 1 === c.length) {
        if (a = c[0] = c[0].slice(0), a.length > 2 && 'ID' === (o = a[0]).type && 9 === t.nodeType && !I && _.relative[a[1].type]) {
          if (t = _.find.ID(o.matches[0].replace(xt, wt), t) [0], !t) return n;
          e = e.slice(a.shift().value.length)
        }
        for (i = ft.needsContext.test(e) ? 0 : a.length; i-- && (o = a[i], !_.relative[s = o.type]); ) if ((l = _.find[s]) && (r = l(o.matches[0].replace(xt, wt), ht.test(a[0].type) && t.parentNode || t))) {
          if (a.splice(i, 1), e = r.length && f(a), !e) return Z.apply(n, Q.call(r, 0)),
          n;
          break
        }
      }
      return C(e, c) (r, t, I, n, ht.test(e)),
      n
    }
    function w() {
    }
    var k,
    S,
    _,
    E,
    A,
    C,
    T,
    N,
    M,
    L,
    G,
    I,
    O,
    P,
    j,
    D,
    B,
    $ = 'sizzle' + - new Date,
    V = e.document,
    R = {
    },
    F = 0,
    z = 0,
    q = r(),
    U = r(),
    H = r(),
    X = typeof t,
    Y = 1 << 31,
    W = [
    ],
    K = W.pop,
    Z = W.push,
    Q = W.slice,
    J = W.indexOf || function (e) {
      for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
      return - 1
    },
    et = '[\\x20\\t\\r\\n\\f]',
    tt = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
    nt = tt.replace('w', 'w#'),
    rt = '([*^$|!~]?=)',
    it = '\\[' + et + '*(' + tt + ')' + et + '*(?:' + rt + et + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + nt + ')|)|)' + et + '*\\]',
    at = ':(' + tt + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + it.replace(3, 8) + ')*)|.*)\\)|)',
    ot = RegExp('^' + et + '+|((?:^|[^\\\\])(?:\\\\.)*)' + et + '+$', 'g'),
    st = RegExp('^' + et + '*,' + et + '*'),
    ct = RegExp('^' + et + '*([\\x20\\t\\r\\n\\f>+~])' + et + '*'),
    ut = RegExp(at),
    dt = RegExp('^' + nt + '$'),
    ft = {
      ID: RegExp('^#(' + tt + ')'),
      CLASS: RegExp('^\\.(' + tt + ')'),
      NAME: RegExp('^\\[name=[\'"]?(' + tt + ')[\'"]?\\]'),
      TAG: RegExp('^(' + tt.replace('w', 'w*') + ')'),
      ATTR: RegExp('^' + it),
      PSEUDO: RegExp('^' + at),
      CHILD: RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + et + '*(even|odd|(([+-]|)(\\d*)n|)' + et + '*(?:([+-]|)' + et + '*(\\d+)|))' + et + '*\\)|)', 'i'),
      needsContext: RegExp('^' + et + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + et + '*((?:-\\d)?\\d*)' + et + '*\\)|)(?=[^-]|$)', 'i')
    },
    ht = /[\x20\t\r\n\f]*[+~]/,
    pt = /^[^{]+\{\s*\[native code/,
    gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    vt = /^(?:input|select|textarea|button)$/i,
    mt = /^h\d$/i,
    yt = /'|\\/g,
    bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
    xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
    wt = function (e, t) {
      var n = '0x' + t - 65536;
      return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536)  : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
    };
    try {
      Q.call(V.documentElement.childNodes, 0) [0].nodeType
    } catch (kt) {
      Q = function (e) {
        for (var t, n = [
        ]; t = this[e++]; ) n.push(t);
        return n
      }
    }
    A = o.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? 'HTML' !== t.nodeName : !1
    },
    M = o.setDocument = function (e) {
      var r = e ? e.ownerDocument || e : V;
      return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, G = r.documentElement, I = A(r), R.tagNameNoComments = a(function (e) {
        return e.appendChild(r.createComment('')),
        !e.getElementsByTagName('*').length
      }), R.attributes = a(function (e) {
        e.innerHTML = '<select></select>';
        var t = typeof e.lastChild.getAttribute('multiple');
        return 'boolean' !== t && 'string' !== t
      }), R.getByClassName = a(function (e) {
        return e.innerHTML = '<div class=\'hidden e\'></div><div class=\'hidden\'></div>',
        e.getElementsByClassName && e.getElementsByClassName('e').length ? (e.lastChild.className = 'e', 2 === e.getElementsByClassName('e').length)  : !1
      }), R.getByName = a(function (e) {
        e.id = $ + 0,
        e.innerHTML = '<a name=\'' + $ + '\'></a><div name=\'' + $ + '\'></div>',
        G.insertBefore(e, G.firstChild);
        var t = r.getElementsByName && r.getElementsByName($).length === 2 + r.getElementsByName($ + 0).length;
        return R.getIdNotName = !r.getElementById($),
        G.removeChild(e),
        t
      }), _.attrHandle = a(function (e) {
        return e.innerHTML = '<a href=\'#\'></a>',
        e.firstChild && typeof e.firstChild.getAttribute !== X && '#' === e.firstChild.getAttribute('href')
      }) ? {
      }
       : {
        href: function (e) {
          return e.getAttribute('href', 2)
        },
        type: function (e) {
          return e.getAttribute('type')
        }
      }, R.getIdNotName ? (_.find.ID = function (e, t) {
        if (typeof t.getElementById !== X && !I) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [
            n
          ] : [
          ]
        }
      }, _.filter.ID = function (e) {
        var t = e.replace(xt, wt);
        return function (e) {
          return e.getAttribute('id') === t
        }
      })  : (_.find.ID = function (e, n) {
        if (typeof n.getElementById !== X && !I) {
          var r = n.getElementById(e);
          return r ? r.id === e || typeof r.getAttributeNode !== X && r.getAttributeNode('id').value === e ? [
            r
          ] : t : [
          ]
        }
      }, _.filter.ID = function (e) {
        var t = e.replace(xt, wt);
        return function (e) {
          var n = typeof e.getAttributeNode !== X && e.getAttributeNode('id');
          return n && n.value === t
        }
      }), _.find.TAG = R.tagNameNoComments ? function (e, n) {
        return typeof n.getElementsByTagName !== X ? n.getElementsByTagName(e)  : t
      }
       : function (e, t) {
        var n,
        r = [
        ],
        i = 0,
        a = t.getElementsByTagName(e);
        if ('*' === e) {
          for (; n = a[i++]; ) 1 === n.nodeType && r.push(n);
          return r
        }
        return a
      }, _.find.NAME = R.getByName && function (e, n) {
        return typeof n.getElementsByName !== X ? n.getElementsByName(name)  : t
      }, _.find.CLASS = R.getByClassName && function (e, n) {
        return typeof n.getElementsByClassName === X || I ? t : n.getElementsByClassName(e)
      }, P = [
      ], O = [
        ':focus'
      ], (R.qsa = n(r.querySelectorAll)) && (a(function (e) {
        e.innerHTML = '<select><option selected=\'\'></option></select>',
        e.querySelectorAll('[selected]').length || O.push('\\[' + et + '*(?:checked|disabled|ismap|multiple|readonly|selected|value)'),
        e.querySelectorAll(':checked').length || O.push(':checked')
      }), a(function (e) {
        e.innerHTML = '<input type=\'hidden\' i=\'\'/>',
        e.querySelectorAll('[i^=\'\']').length && O.push('[*^$]=' + et + '*(?:""|\'\')'),
        e.querySelectorAll(':enabled').length || O.push(':enabled', ':disabled'),
        e.querySelectorAll('*,:x'),
        O.push(',.*:')
      })), (R.matchesSelector = n(j = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && a(function (e) {
        R.disconnectedMatch = j.call(e, 'div'),
        j.call(e, '[s!=\'\']:x'),
        P.push('!=', at)
      }), O = RegExp(O.join('|')), P = RegExp(P.join('|')), D = n(G.contains) || G.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
        r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r)  : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
      }
       : function (e, t) {
        if (t) for (; t = t.parentNode; ) if (t === e) return !0;
        return !1
      }, B = G.compareDocumentPosition ? function (e, t) {
        var n;
        return e === t ? (T = !0, 0)  : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || D(V, e) ? - 1 : t === r || D(V, t) ? 1 : 0 : 4 & n ? - 1 : 1 : e.compareDocumentPosition ? - 1 : 1
      }
       : function (e, t) {
        var n,
        i = 0,
        a = e.parentNode,
        o = t.parentNode,
        l = [
          e
        ],
        c = [
          t
        ];
        if (e === t) return T = !0,
        0;
        if (!a || !o) return e === r ? - 1 : t === r ? 1 : a ? - 1 : o ? 1 : 0;
        if (a === o) return s(e, t);
        for (n = e; n = n.parentNode; ) l.unshift(n);
        for (n = t; n = n.parentNode; ) c.unshift(n);
        for (; l[i] === c[i]; ) i++;
        return i ? s(l[i], c[i])  : l[i] === V ? - 1 : c[i] === V ? 1 : 0
      }, T = !1, [
        0,
        0
      ].sort(B), R.detectDuplicates = T, L)  : L
    },
    o.matches = function (e, t) {
      return o(e, null, null, t)
    },
    o.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== L && M(e), t = t.replace(bt, '=\'$1\']'), !(!R.matchesSelector || I || P && P.test(t) || O.test(t))) try {
        var n = j.call(e, t);
        if (n || R.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
      } catch (r) {
      }
      return o(t, L, null, [
        e
      ]).length > 0
    },
    o.contains = function (e, t) {
      return (e.ownerDocument || e) !== L && M(e),
      D(e, t)
    },
    o.attr = function (e, t) {
      var n;
      return (e.ownerDocument || e) !== L && M(e),
      I || (t = t.toLowerCase()),
      (n = _.attrHandle[t]) ? n(e)  : I || R.attributes ? e.getAttribute(t)  : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
    },
    o.error = function (e) {
      throw Error('Syntax error, unrecognized expression: ' + e)
    },
    o.uniqueSort = function (e) {
      var t,
      n = [
      ],
      r = 1,
      i = 0;
      if (T = !R.detectDuplicates, e.sort(B), T) {
        for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
        for (; i--; ) e.splice(n[i], 1)
      }
      return e
    },
    E = o.getText = function (e) {
      var t,
      n = '',
      r = 0,
      i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
        } else if (3 === i || 4 === i) return e.nodeValue
      } else for (; t = e[r]; r++) n += E(t);
      return n
    },
    _ = o.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: ft,
      find: {
      },
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(xt, wt),
          e[3] = (e[4] || e[5] || '').replace(xt, wt),
          '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
          e.slice(0, 4)
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(),
          'nth' === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = + (e[4] ? e[5] + (e[6] || 1)  : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = + (e[7] + e[8] || 'odd' === e[3]))  : e[3] && o.error(e[0]),
          e
        },
        PSEUDO: function (e) {
          var t,
          n = !e[5] && e[2];
          return ft.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ut.test(n) && (t = d(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          return '*' === e ? function () {
            return !0
          }
           : (e = e.replace(xt, wt).toLowerCase(), function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e
          })
        },
        CLASS: function (e) {
          var t = q[e + ' '];
          return t || (t = RegExp('(^|' + et + ')' + e + '(' + et + '|$)')) && q(e, function (e) {
            return t.test(e.className || typeof e.getAttribute !== X && e.getAttribute('class') || '')
          })
        },
        ATTR: function (e, t, n) {
          return function (r) {
            var i = o.attr(r, e);
            return null == i ? '!=' === t : t ? (i += '', '=' === t ? i === n : '!=' === t ? i !== n : '^=' === t ? n && 0 === i.indexOf(n)  : '*=' === t ? n && i.indexOf(n) > - 1 : '$=' === t ? n && i.slice( - n.length) === n : '~=' === t ? (' ' + i + ' ').indexOf(n) > - 1 : '|=' === t ? i === n || i.slice(0, n.length + 1) === n + '-' : !1)  : !0
          }
        },
        CHILD: function (e, t, n, r, i) {
          var a = 'nth' !== e.slice(0, 3),
          o = 'last' !== e.slice( - 4),
          s = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode
          }
           : function (t, n, l) {
            var c,
            u,
            d,
            f,
            h,
            p,
            g = a !== o ? 'nextSibling' : 'previousSibling',
            v = t.parentNode,
            m = s && t.nodeName.toLowerCase(),
            y = !l && !s;
            if (v) {
              if (a) {
                for (; g; ) {
                  for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                  p = g = 'only' === e && !p && 'nextSibling'
                }
                return !0
              }
              if (p = [
                o ? v.firstChild : v.lastChild
              ], o && y) {
                for (u = v[$] || (v[$] = {
                }), c = u[e] || [
                ], h = c[0] === F && c[1], f = c[0] === F && c[2], d = h && v.childNodes[h]; d = ++h && d && d[g] || (f = h = 0) || p.pop(); ) if (1 === d.nodeType && ++f && d === t) {
                  u[e] = [
                    F,
                    h,
                    f
                  ];
                  break
                }
              } else if (y && (c = (t[$] || (t[$] = {
              })) [e]) && c[0] === F) f = c[1];
               else for (; (d = ++h && d && d[g] || (f = h = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++f || (y && ((d[$] || (d[$] = {
              })) [e] = [
                F,
                f
              ]), d !== t)); );
              return f -= i,
              f === r || 0 === f % r && f / r >= 0
            }
          }
        },
        PSEUDO: function (e, t) {
          var n,
          r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || o.error('unsupported pseudo: ' + e);
          return r[$] ? r(t)  : r.length > 1 ? (n = [
            e,
            e,
            '',
            t
          ], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
            for (var i, a = r(e, t), o = a.length; o--; ) i = J.call(e, a[o]),
            e[i] = !(n[i] = a[o])
          })  : function (e) {
            return r(e, 0, n)
          })  : r
        }
      },
      pseudos: {
        not: i(function (e) {
          var t = [
          ],
          n = [
          ],
          r = C(e.replace(ot, '$1'));
          return r[$] ? i(function (e, t, n, i) {
            for (var a, o = r(e, null, i, [
            ]), s = e.length; s--; ) (a = o[s]) && (e[s] = !(t[s] = a))
          })  : function (e, i, a) {
            return t[0] = e,
            r(t, null, a, n),
            !n.pop()
          }
        }),
        has: i(function (e) {
          return function (t) {
            return o(e, t).length > 0
          }
        }),
        contains: i(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || E(t)).indexOf(e) > - 1
          }
        }),
        lang: i(function (e) {
          return dt.test(e || '') || o.error('unsupported lang: ' + e),
          e = e.replace(xt, wt).toLowerCase(),
          function (t) {
            var n;
            do if (n = I ? t.getAttribute('xml:lang') || t.getAttribute('lang')  : t.lang) return n = n.toLowerCase(),
            n === e || 0 === n.indexOf(e + '-');
            while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        },
        root: function (e) {
          return e === G
        },
        focus: function (e) {
          return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        },
        enabled: function (e) {
          return e.disabled === !1
        },
        disabled: function (e) {
          return e.disabled === !0
        },
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex,
          e.selected === !0
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > '@' || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0
        },
        parent: function (e) {
          return !_.pseudos.empty(e)
        },
        header: function (e) {
          return mt.test(e.nodeName)
        },
        input: function (e) {
          return vt.test(e.nodeName)
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || t.toLowerCase() === e.type)
        },
        first: u(function () {
          return [0]
        }),
        last: u(function (e, t) {
          return [t - 1]
        }),
        eq: u(function (e, t, n) {
          return [0 > n ? n + t : n]
        }),
        even: u(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);
          return e
        }),
        odd: u(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);
          return e
        }),
        lt: u(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
          return e
        }),
        gt: u(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
          return e
        })
      }
    };
    for (k in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) _.pseudos[k] = l(k);
    for (k in {
      submit: !0,
      reset: !0
    }) _.pseudos[k] = c(k);
    C = o.compile = function (e, t) {
      var n,
      r = [
      ],
      i = [
      ],
      a = H[e + ' '];
      if (!a) {
        for (t || (t = d(e)), n = t.length; n--; ) a = m(t[n]),
        a[$] ? r.push(a)  : i.push(a);
        a = H(e, y(i, r))
      }
      return a
    },
    _.pseudos.nth = _.pseudos.eq,
    _.filters = w.prototype = _.pseudos,
    _.setFilters = new w,
    M(),
    o.attr = lt.attr,
    lt.find = o,
    lt.expr = o.selectors,
    lt.expr[':'] = lt.expr.pseudos,
    lt.unique = o.uniqueSort,
    lt.text = o.getText,
    lt.isXMLDoc = o.isXML,
    lt.contains = o.contains
  }(e);
  var Rt = /Until$/,
  Ft = /^(?:parents|prev(?:Until|All))/,
  zt = /^.[^:#\[\.,]*$/,
  qt = lt.expr.match.needsContext,
  Ut = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  lt.fn.extend({
    find: function (e) {
      var t,
      n,
      r,
      i = this.length;
      if ('string' != typeof e) return r = this,
      this.pushStack(lt(e).filter(function () {
        for (t = 0; i > t; t++) if (lt.contains(r[t], this)) return !0
      }));
      for (n = [
      ], t = 0; i > t; t++) lt.find(e, this[t], n);
      return n = this.pushStack(i > 1 ? lt.unique(n)  : n),
      n.selector = (this.selector ? this.selector + ' ' : '') + e,
      n
    },
    has: function (e) {
      var t,
      n = lt(e, this),
      r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (lt.contains(this, n[t])) return !0
      })
    },
    not: function (e) {
      return this.pushStack(d(this, e, !1))
    },
    filter: function (e) {
      return this.pushStack(d(this, e, !0))
    },
    is: function (e) {
      return !!e && ('string' == typeof e ? qt.test(e) ? lt(e, this.context).index(this[0]) >= 0 : lt.filter(e, this).length > 0 : this.filter(e).length > 0)
    },
    closest: function (e, t) {
      for (var n, r = 0, i = this.length, a = [
      ], o = qt.test(e) || 'string' != typeof e ? lt(e, t || this.context)  : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
        if (o ? o.index(n) > - 1 : lt.find.matchesSelector(n, e)) {
          a.push(n);
          break
        }
        n = n.parentNode
      }
      return this.pushStack(a.length > 1 ? lt.unique(a)  : a)
    },
    index: function (e) {
      return e ? 'string' == typeof e ? lt.inArray(this[0], lt(e))  : lt.inArray(e.jquery ? e[0] : e, this)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
    },
    add: function (e, t) {
      var n = 'string' == typeof e ? lt(e, t)  : lt.makeArray(e && e.nodeType ? [
        e
      ] : e),
      r = lt.merge(this.get(), n);
      return this.pushStack(lt.unique(r))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }),
  lt.fn.andSelf = lt.fn.addBack,
  lt.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function (e) {
      return lt.dir(e, 'parentNode')
    },
    parentsUntil: function (e, t, n) {
      return lt.dir(e, 'parentNode', n)
    },
    next: function (e) {
      return u(e, 'nextSibling')
    },
    prev: function (e) {
      return u(e, 'previousSibling')
    },
    nextAll: function (e) {
      return lt.dir(e, 'nextSibling')
    },
    prevAll: function (e) {
      return lt.dir(e, 'previousSibling')
    },
    nextUntil: function (e, t, n) {
      return lt.dir(e, 'nextSibling', n)
    },
    prevUntil: function (e, t, n) {
      return lt.dir(e, 'previousSibling', n)
    },
    siblings: function (e) {
      return lt.sibling((e.parentNode || {
      }).firstChild, e)
    },
    children: function (e) {
      return lt.sibling(e.firstChild)
    },
    contents: function (e) {
      return lt.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes)
    }
  }, function (e, t) {
    lt.fn[e] = function (n, r) {
      var i = lt.map(this, t, n);
      return Rt.test(e) || (r = n),
      r && 'string' == typeof r && (i = lt.filter(r, i)),
      i = this.length > 1 && !Ut[e] ? lt.unique(i)  : i,
      this.length > 1 && Ft.test(e) && (i = i.reverse()),
      this.pushStack(i)
    }
  }),
  lt.extend({
    filter: function (e, t, n) {
      return n && (e = ':not(' + e + ')'),
      1 === t.length ? lt.find.matchesSelector(t[0], e) ? [
        t[0]
      ] : [
      ] : lt.find.matches(e, t)
    },
    dir: function (e, n, r) {
      for (var i = [
      ], a = e[n]; a && 9 !== a.nodeType && (r === t || 1 !== a.nodeType || !lt(a).is(r)); ) 1 === a.nodeType && i.push(a),
      a = a[n];
      return i
    },
    sibling: function (e, t) {
      for (var n = [
      ]; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }
  });
  var Ht = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
  Xt = / jQuery\d+="(?:null|\d+)"/g,
  Yt = RegExp('<(?:' + Ht + ')[\\s/>]', 'i'),
  Wt = /^\s+/,
  Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  Zt = /<([\w:]+)/,
  Qt = /<tbody/i,
  Jt = /<|&#?\w+;/,
  en = /<(?:script|style|link)/i,
  tn = /^(?:checkbox|radio)$/i,
  nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rn = /^$|\/(?:java|ecma)script/i,
  an = /^true\/(.*)/,
  on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  sn = {
    option: [
      1,
      '<select multiple=\'multiple\'>',
      '</select>'
    ],
    legend: [
      1,
      '<fieldset>',
      '</fieldset>'
    ],
    area: [
      1,
      '<map>',
      '</map>'
    ],
    param: [
      1,
      '<object>',
      '</object>'
    ],
    thead: [
      1,
      '<table>',
      '</table>'
    ],
    tr: [
      2,
      '<table><tbody>',
      '</tbody></table>'
    ],
    col: [
      2,
      '<table><tbody></tbody><colgroup>',
      '</colgroup></table>'
    ],
    td: [
      3,
      '<table><tbody><tr>',
      '</tr></tbody></table>'
    ],
    _default: lt.support.htmlSerialize ? [
      0,
      '',
      ''
    ] : [
      1,
      'X<div>',
      '</div>'
    ]
  },
  ln = f(Y),
  cn = ln.appendChild(Y.createElement('div'));
  sn.optgroup = sn.option,
  sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
  sn.th = sn.td,
  lt.fn.extend({
    text: function (e) {
      return lt.access(this, function (e) {
        return e === t ? lt.text(this)  : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
      }, null, e, arguments.length)
    },
    wrapAll: function (e) {
      if (lt.isFunction(e)) return this.each(function (t) {
        lt(this).wrapAll(e.call(this, t))
      });
      if (this[0]) {
        var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]),
        t.map(function () {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
          return e
        }).append(this)
      }
      return this
    },
    wrapInner: function (e) {
      return lt.isFunction(e) ? this.each(function (t) {
        lt(this).wrapInner(e.call(this, t))
      })  : this.each(function () {
        var t = lt(this),
        n = t.contents();
        n.length ? n.wrapAll(e)  : t.append(e)
      })
    },
    wrap: function (e) {
      var t = lt.isFunction(e);
      return this.each(function (n) {
        lt(this).wrapAll(t ? e.call(this, n)  : e)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        lt.nodeName(this, 'body') || lt(this).replaceWith(this.childNodes)
      }).end()
    },
    append: function () {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
      })
    },
    prepend: function () {
      return this.domManip(arguments, !0, function (e) {
        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
      })
    },
    before: function () {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function () {
      return this.domManip(arguments, !1, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function (e, t) {
      for (var n, r = 0; null != (n = this[r]); r++) (!e || lt.filter(e, [
        n
      ]).length > 0) && (t || 1 !== n.nodeType || lt.cleanData(b(n)), n.parentNode && (t && lt.contains(n.ownerDocument, n) && v(b(n, 'script')), n.parentNode.removeChild(n)));
      return this
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && lt.cleanData(b(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
        e.options && lt.nodeName(e, 'select') && (e.options.length = 0)
      }
      return this
    },
    clone: function (e, t) {
      return e = null == e ? !1 : e,
      t = null == t ? e : t,
      this.map(function () {
        return lt.clone(this, e, t)
      })
    },
    html: function (e) {
      return lt.access(this, function (e) {
        var n = this[0] || {
        },
        r = 0,
        i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, '')  : t;
        if (!('string' != typeof e || en.test(e) || !lt.support.htmlSerialize && Yt.test(e) || !lt.support.leadingWhitespace && Wt.test(e) || sn[(Zt.exec(e) || [
          '',
          ''
        ]) [1].toLowerCase()])) {
          e = e.replace(Kt, '<$1></$2>');
          try {
            for (; i > r; r++) n = this[r] || {
            },
            1 === n.nodeType && (lt.cleanData(b(n, !1)), n.innerHTML = e);
            n = 0
          } catch (a) {
          }
        }
        n && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function (e) {
      var t = lt.isFunction(e);
      return t || 'string' == typeof e || (e = lt(e).not(this).detach()),
      this.domManip([e], !0, function (e) {
        var t = this.nextSibling,
        n = this.parentNode;
        n && (lt(this).remove(), n.insertBefore(e, t))
      })
    },
    detach: function (e) {
      return this.remove(e, !0)
    },
    domManip: function (e, n, r) {
      e = tt.apply([], e);
      var i,
      a,
      o,
      s,
      l,
      c,
      u = 0,
      d = this.length,
      f = this,
      v = d - 1,
      m = e[0],
      y = lt.isFunction(m);
      if (y || !(1 >= d || 'string' != typeof m || lt.support.checkClone) && nn.test(m)) return this.each(function (i) {
        var a = f.eq(i);
        y && (e[0] = m.call(this, i, n ? a.html()  : t)),
        a.domManip(e, n, r)
      });
      if (d && (c = lt.buildFragment(e, this[0].ownerDocument, !1, this), i = c.firstChild, 1 === c.childNodes.length && (c = i), i)) {
        for (n = n && lt.nodeName(i, 'tr'), s = lt.map(b(c, 'script'), p), o = s.length; d > u; u++) a = c,
        u !== v && (a = lt.clone(a, !0, !0), o && lt.merge(s, b(a, 'script'))),
        r.call(n && lt.nodeName(this[u], 'table') ? h(this[u], 'tbody')  : this[u], a, u);
        if (o) for (l = s[s.length - 1].ownerDocument, lt.map(s, g), u = 0; o > u; u++) a = s[u],
        rn.test(a.type || '') && !lt._data(a, 'globalEval') && lt.contains(l, a) && (a.src ? lt.ajax({
          url: a.src,
          type: 'GET',
          dataType: 'script',
          async: !1,
          global: !1,
          'throws': !0
        })  : lt.globalEval((a.text || a.textContent || a.innerHTML || '').replace(on, '')));
        c = i = null
      }
      return this
    }
  }),
  lt.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    lt.fn[e] = function (e) {
      for (var n, r = 0, i = [
      ], a = lt(e), o = a.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0),
      lt(a[r]) [t](n),
      nt.apply(i, n.get());
      return this.pushStack(i)
    }
  }),
  lt.extend({
    clone: function (e, t, n) {
      var r,
      i,
      a,
      o,
      s,
      l = lt.contains(e.ownerDocument, e);
      if (lt.support.html5Clone || lt.isXMLDoc(e) || !Yt.test('<' + e.nodeName + '>') ? a = e.cloneNode(!0)  : (cn.innerHTML = e.outerHTML, cn.removeChild(a = cn.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e))) for (r = b(a), s = b(e), o = 0; null != (i = s[o]); ++o) r[o] && y(i, r[o]);
      if (t) if (n) for (s = s || b(e), r = r || b(a), o = 0; null != (i = s[o]); o++) m(i, r[o]);
       else m(e, a);
      return r = b(a, 'script'),
      r.length > 0 && v(r, !l && b(e, 'script')),
      r = s = i = null,
      a
    },
    buildFragment: function (e, t, n, r) {
      for (var i, a, o, s, l, c, u, d = e.length, h = f(t), p = [
      ], g = 0; d > g; g++) if (a = e[g], a || 0 === a) if ('object' === lt.type(a)) lt.merge(p, a.nodeType ? [
        a
      ] : a);
       else if (Jt.test(a)) {
        for (s = s || h.appendChild(t.createElement('div')), l = (Zt.exec(a) || [
          '',
          ''
        ]) [1].toLowerCase(), u = sn[l] || sn._default, s.innerHTML = u[1] + a.replace(Kt, '<$1></$2>') + u[2], i = u[0]; i--; ) s = s.lastChild;
        if (!lt.support.leadingWhitespace && Wt.test(a) && p.push(t.createTextNode(Wt.exec(a) [0])), !lt.support.tbody) for (a = 'table' !== l || Qt.test(a) ? '<table>' !== u[1] || Qt.test(a) ? 0 : s : s.firstChild, i = a && a.childNodes.length; i--; ) lt.nodeName(c = a.childNodes[i], 'tbody') && !c.childNodes.length && a.removeChild(c);
        for (lt.merge(p, s.childNodes), s.textContent = ''; s.firstChild; ) s.removeChild(s.firstChild);
        s = h.lastChild
      } else p.push(t.createTextNode(a));
      for (s && h.removeChild(s), lt.support.appendChecked || lt.grep(b(p, 'input'), x), g = 0; a = p[g++]; ) if ((!r || - 1 === lt.inArray(a, r)) && (o = lt.contains(a.ownerDocument, a), s = b(h.appendChild(a), 'script'), o && v(s), n)) for (i = 0; a = s[i++]; ) rn.test(a.type || '') && n.push(a);
      return s = null,
      h
    },
    cleanData: function (e, t) {
      for (var n, r, i, a, o = 0, s = lt.expando, l = lt.cache, c = lt.support.deleteExpando, u = lt.event.special; null != (n = e[o]); o++) if ((t || lt.acceptData(n)) && (i = n[s], a = i && l[i])) {
        if (a.events) for (r in a.events) u[r] ? lt.event.remove(n, r)  : lt.removeEvent(n, r, a.handle);
        l[i] && (delete l[i], c ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s)  : n[s] = null, J.push(i))
      }
    }
  });
  var un,
  dn,
  fn,
  hn = /alpha\([^)]*\)/i,
  pn = /opacity\s*=\s*([^)]*)/,
  gn = /^(top|right|bottom|left)$/,
  vn = /^(none|table(?!-c[ea]).+)/,
  mn = /^margin/,
  yn = RegExp('^(' + ct + ')(.*)$', 'i'),
  bn = RegExp('^(' + ct + ')(?!px)[a-z%]+$', 'i'),
  xn = RegExp('^([+-])=(' + ct + ')', 'i'),
  wn = {
    BODY: 'block'
  },
  kn = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
  Sn = {
    letterSpacing: 0,
    fontWeight: 400
  },
  _n = [
    'Top',
    'Right',
    'Bottom',
    'Left'
  ],
  En = [
    'Webkit',
    'O',
    'Moz',
    'ms'
  ];
  lt.fn.extend({
    css: function (e, n) {
      return lt.access(this, function (e, n, r) {
        var i,
        a,
        o = {
        },
        s = 0;
        if (lt.isArray(n)) {
          for (a = dn(e), i = n.length; i > s; s++) o[n[s]] = lt.css(e, n[s], !1, a);
          return o
        }
        return r !== t ? lt.style(e, n, r)  : lt.css(e, n)
      }, e, n, arguments.length > 1)
    },
    show: function () {
      return S(this, !0)
    },
    hide: function () {
      return S(this)
    },
    toggle: function (e) {
      var t = 'boolean' == typeof e;
      return this.each(function () {
        (t ? e : k(this)) ? lt(this).show()  : lt(this).hide()
      })
    }
  }),
  lt.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = fn(e, 'opacity');
            return '' === n ? '1' : n
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      'float': lt.support.cssFloat ? 'cssFloat' : 'styleFloat'
    },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a,
        o,
        s,
        l = lt.camelCase(n),
        c = e.style;
        if (n = lt.cssProps[l] || (lt.cssProps[l] = w(c, l)), s = lt.cssHooks[n] || lt.cssHooks[l], r === t) return s && 'get' in s && (a = s.get(e, !1, i)) !== t ? a : c[n];
        if (o = typeof r, 'string' === o && (a = xn.exec(r)) && (r = (a[1] + 1) * a[2] + parseFloat(lt.css(e, n)), o = 'number'), !(null == r || 'number' === o && isNaN(r) || ('number' !== o || lt.cssNumber[l] || (r += 'px'), lt.support.clearCloneStyle || '' !== r || 0 !== n.indexOf('background') || (c[n] = 'inherit'), s && 'set' in s && (r = s.set(e, r, i)) === t))) try {
          c[n] = r
        } catch (u) {
        }
      }
    },
    css: function (e, n, r, i) {
      var a,
      o,
      s,
      l = lt.camelCase(n);
      return n = lt.cssProps[l] || (lt.cssProps[l] = w(e.style, l)),
      s = lt.cssHooks[n] || lt.cssHooks[l],
      s && 'get' in s && (o = s.get(e, !0, r)),
      o === t && (o = fn(e, n, i)),
      'normal' === o && n in Sn && (o = Sn[n]),
      '' === r || r ? (a = parseFloat(o), r === !0 || lt.isNumeric(a) ? a || 0 : o)  : o
    },
    swap: function (e, t, n, r) {
      var i,
      a,
      o = {
      };
      for (a in t) o[a] = e.style[a],
      e.style[a] = t[a];
      i = n.apply(e, r || [
      ]);
      for (a in t) e.style[a] = o[a];
      return i
    }
  }),
  e.getComputedStyle ? (dn = function (t) {
    return e.getComputedStyle(t, null)
  }, fn = function (e, n, r) {
    var i,
    a,
    o,
    s = r || dn(e),
    l = s ? s.getPropertyValue(n) || s[n] : t,
    c = e.style;
    return s && ('' !== l || lt.contains(e.ownerDocument, e) || (l = lt.style(e, n)), bn.test(l) && mn.test(n) && (i = c.width, a = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = i, c.minWidth = a, c.maxWidth = o)),
    l
  })  : Y.documentElement.currentStyle && (dn = function (e) {
    return e.currentStyle
  }, fn = function (e, n, r) {
    var i,
    a,
    o,
    s = r || dn(e),
    l = s ? s[n] : t,
    c = e.style;
    return null == l && c && c[n] && (l = c[n]),
    bn.test(l) && !gn.test(n) && (i = c.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), c.left = 'fontSize' === n ? '1em' : l, l = c.pixelLeft + 'px', c.left = i, o && (a.left = o)),
    '' === l ? 'auto' : l
  }),
  lt.each(['height',
  'width'], function (e, n) {
    lt.cssHooks[n] = {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && vn.test(lt.css(e, 'display')) ? lt.swap(e, kn, function () {
          return A(e, n, i)
        })  : A(e, n, i)  : t
      },
      set: function (e, t, r) {
        var i = r && dn(e);
        return _(e, t, r ? E(e, n, r, lt.support.boxSizing && 'border-box' === lt.css(e, 'boxSizing', !1, i), i)  : 0)
      }
    }
  }),
  lt.support.opacity || (lt.cssHooks.opacity = {
    get: function (e, t) {
      return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : t ? '1' : ''
    },
    set: function (e, t) {
      var n = e.style,
      r = e.currentStyle,
      i = lt.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
      a = r && r.filter || n.filter || '';
      n.zoom = 1,
      (t >= 1 || '' === t) && '' === lt.trim(a.replace(hn, '')) && n.removeAttribute && (n.removeAttribute('filter'), '' === t || r && !r.filter) || (n.filter = hn.test(a) ? a.replace(hn, i)  : a + ' ' + i)
    }
  }),
  lt(function () {
    lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
      get: function (e, n) {
        return n ? lt.swap(e, {
          display: 'inline-block'
        }, fn, [
          e,
          'marginRight'
        ])  : t
      }
    }),
    !lt.support.pixelPosition && lt.fn.position && lt.each(['top',
    'left'], function (e, n) {
      lt.cssHooks[n] = {
        get: function (e, r) {
          return r ? (r = fn(e, n), bn.test(r) ? lt(e).position() [n] + 'px' : r)  : t
        }
      }
    })
  }),
  lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !lt.support.reliableHiddenOffsets && 'none' === (e.style && e.style.display || lt.css(e, 'display'))
  }, lt.expr.filters.visible = function (e) {
    return !lt.expr.filters.hidden(e)
  }),
  lt.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    lt.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {
        }, a = 'string' == typeof n ? n.split(' ')  : [
          n
        ]; 4 > r; r++) i[e + _n[r] + t] = a[r] || a[r - 2] || a[0];
        return i
      }
    },
    mn.test(e) || (lt.cssHooks[e + t].set = _)
  });
  var An = /%20/g,
  Cn = /\[\]$/,
  Tn = /\r?\n/g,
  Nn = /^(?:submit|button|image|reset|file)$/i,
  Mn = /^(?:input|select|textarea|keygen)/i;
  lt.fn.extend({
    serialize: function () {
      return lt.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var e = lt.prop(this, 'elements');
        return e ? lt.makeArray(e)  : this
      }).filter(function () {
        var e = this.type;
        return this.name && !lt(this).is(':disabled') && Mn.test(this.nodeName) && !Nn.test(e) && (this.checked || !tn.test(e))
      }).map(function (e, t) {
        var n = lt(this).val();
        return null == n ? null : lt.isArray(n) ? lt.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Tn, '\r\n')
          }
        })  : {
          name: t.name,
          value: n.replace(Tn, '\r\n')
        }
      }).get()
    }
  }),
  lt.param = function (e, n) {
    var r,
    i = [
    ],
    a = function (e, t) {
      t = lt.isFunction(t) ? t()  : null == t ? '' : t,
      i[i.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t)
    };
    if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e)) lt.each(e, function () {
      a(this.name, this.value)
    });
     else for (r in e) N(r, e[r], n, a);
    return i.join('&').replace(An, '+')
  },
  lt.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (e, t) {
    lt.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n)  : this.trigger(t)
    }
  }),
  lt.fn.hover = function (e, t) {
    return this.mouseenter(e).mouseleave(t || e)
  };
  var Ln,
  Gn,
  In = lt.now(),
  On = /\?/,
  Pn = /#.*$/,
  jn = /([?&])_=[^&]*/,
  Dn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  $n = /^(?:GET|HEAD)$/,
  Vn = /^\/\//,
  Rn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
  Fn = lt.fn.load,
  zn = {
  },
  qn = {
  },
  Un = '*/'.concat('*');
  try {
    Gn = W.href
  } catch (Hn) {
    Gn = Y.createElement('a'),
    Gn.href = '',
    Gn = Gn.href
  }
  Ln = Rn.exec(Gn.toLowerCase()) || [
  ],
  lt.fn.load = function (e, n, r) {
    if ('string' != typeof e && Fn) return Fn.apply(this, arguments);
    var i,
    a,
    o,
    s = this,
    l = e.indexOf(' ');
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)),
    lt.isFunction(n) ? (r = n, n = t)  : n && 'object' == typeof n && (o = 'POST'),
    s.length > 0 && lt.ajax({
      url: e,
      type: o,
      dataType: 'html',
      data: n
    }).done(function (e) {
      a = arguments,
      s.html(i ? lt('<div>').append(lt.parseHTML(e)).find(i)  : e)
    }).complete(r && function (e, t) {
      s.each(r, a || [
        e.responseText,
        t,
        e
      ])
    }),
    this
  },
  lt.each(['ajaxStart',
  'ajaxStop',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
  'ajaxSend'], function (e, t) {
    lt.fn[t] = function (e) {
      return this.on(t, e)
    }
  }),
  lt.each(['get',
  'post'], function (e, n) {
    lt[n] = function (e, r, i, a) {
      return lt.isFunction(r) && (a = a || i, i = r, r = t),
      lt.ajax({
        url: e,
        type: n,
        dataType: a,
        data: r,
        success: i
      })
    }
  }),
  lt.extend({
    active: 0,
    lastModified: {
    },
    etag: {
    },
    ajaxSettings: {
      url: Gn,
      type: 'GET',
      isLocal: Bn.test(Ln[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Un,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText'
      },
      converters: {
        '* text': e.String,
        'text html': !0,
        'text json': lt.parseJSON,
        'text xml': lt.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? G(G(e, lt.ajaxSettings), t)  : G(lt.ajaxSettings, e)
    },
    ajaxPrefilter: M(zn),
    ajaxTransport: M(qn),
    ajax: function (e, n) {
      function r(e, n, r, i) {
        var a,
        d,
        y,
        b,
        w,
        S = n;
        2 !== x && (x = 2, l && clearTimeout(l), u = t, s = i || '', k.readyState = e > 0 ? 4 : 0, r && (b = I(f, k, r)), e >= 200 && 300 > e || 304 === e ? (f.ifModified && (w = k.getResponseHeader('Last-Modified'), w && (lt.lastModified[o] = w), w = k.getResponseHeader('etag'), w && (lt.etag[o] = w)), 204 === e ? (a = !0, S = 'nocontent')  : 304 === e ? (a = !0, S = 'notmodified')  : (a = O(f, b), S = a.state, d = a.data, y = a.error, a = !y))  : (y = S, (e || !S) && (S = 'error', 0 > e && (e = 0))), k.status = e, k.statusText = (n || S) + '', a ? g.resolveWith(h, [
          d,
          S,
          k
        ])  : g.rejectWith(h, [
          k,
          S,
          y
        ]), k.statusCode(m), m = t, c && p.trigger(a ? 'ajaxSuccess' : 'ajaxError', [
          k,
          f,
          a ? d : y
        ]), v.fireWith(h, [
          k,
          S
        ]), c && (p.trigger('ajaxComplete', [
          k,
          f
        ]), --lt.active || lt.event.trigger('ajaxStop')))
      }
      'object' == typeof e && (n = e, e = t),
      n = n || {
      };
      var i,
      a,
      o,
      s,
      l,
      c,
      u,
      d,
      f = lt.ajaxSetup({
      }, n),
      h = f.context || f,
      p = f.context && (h.nodeType || h.jquery) ? lt(h)  : lt.event,
      g = lt.Deferred(),
      v = lt.Callbacks('once memory'),
      m = f.statusCode || {
      },
      y = {
      },
      b = {
      },
      x = 0,
      w = 'canceled',
      k = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;
          if (2 === x) {
            if (!d) for (d = {
            }; t = Dn.exec(s); ) d[t[1].toLowerCase()] = t[2];
            t = d[e.toLowerCase()]
          }
          return null == t ? null : t
        },
        getAllResponseHeaders: function () {
          return 2 === x ? s : null
        },
        setRequestHeader: function (e, t) {
          var n = e.toLowerCase();
          return x || (e = b[n] = b[n] || e, y[e] = t),
          this
        },
        overrideMimeType: function (e) {
          return x || (f.mimeType = e),
          this
        },
        statusCode: function (e) {
          var t;
          if (e) if (2 > x) for (t in e) m[t] = [
            m[t],
            e[t]
          ];
           else k.always(e[k.status]);
          return this
        },
        abort: function (e) {
          var t = e || w;
          return u && u.abort(t),
          r(0, t),
          this
        }
      };
      if (g.promise(k).complete = v.add, k.success = k.done, k.error = k.fail, f.url = ((e || f.url || Gn) + '').replace(Pn, '').replace(Vn, Ln[1] + '//'), f.type = n.method || n.type || f.method || f.type, f.dataTypes = lt.trim(f.dataType || '*').toLowerCase().match(ut) || [
        ''
      ], null == f.crossDomain && (i = Rn.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ('http:' === i[1] ? 80 : 443)) == (Ln[3] || ('http:' === Ln[1] ? 80 : 443)))), f.data && f.processData && 'string' != typeof f.data && (f.data = lt.param(f.data, f.traditional)), L(zn, f, n, k), 2 === x) return k;
      c = f.global,
      c && 0 === lt.active++ && lt.event.trigger('ajaxStart'),
      f.type = f.type.toUpperCase(),
      f.hasContent = !$n.test(f.type),
      o = f.url,
      f.hasContent || (f.data && (o = f.url += (On.test(o) ? '&' : '?') + f.data, delete f.data), f.cache === !1 && (f.url = jn.test(o) ? o.replace(jn, '$1_=' + In++)  : o + (On.test(o) ? '&' : '?') + '_=' + In++)),
      f.ifModified && (lt.lastModified[o] && k.setRequestHeader('If-Modified-Since', lt.lastModified[o]), lt.etag[o] && k.setRequestHeader('If-None-Match', lt.etag[o])),
      (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && k.setRequestHeader('Content-Type', f.contentType),
      k.setRequestHeader('Accept', f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ('*' !== f.dataTypes[0] ? ', ' + Un + '; q=0.01' : '')  : f.accepts['*']);
      for (a in f.headers) k.setRequestHeader(a, f.headers[a]);
      if (f.beforeSend && (f.beforeSend.call(h, k, f) === !1 || 2 === x)) return k.abort();
      w = 'abort';
      for (a in {
        success: 1,
        error: 1,
        complete: 1
      }) k[a](f[a]);
      if (u = L(qn, f, n, k)) {
        k.readyState = 1,
        c && p.trigger('ajaxSend', [
          k,
          f
        ]),
        f.async && f.timeout > 0 && (l = setTimeout(function () {
          k.abort('timeout')
        }, f.timeout));
        try {
          x = 1,
          u.send(y, r)
        } catch (S) {
          if (!(2 > x)) throw S;
          r( - 1, S)
        }
      } else r( - 1, 'No Transport');
      return k
    },
    getScript: function (e, n) {
      return lt.get(e, t, n, 'script')
    },
    getJSON: function (e, t, n) {
      return lt.get(e, t, n, 'json')
    }
  }),
  lt.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      'text script': function (e) {
        return lt.globalEval(e),
        e
      }
    }
  }),
  lt.ajaxPrefilter('script', function (e) {
    e.cache === t && (e.cache = !1),
    e.crossDomain && (e.type = 'GET', e.global = !1)
  }),
  lt.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var n,
      r = Y.head || lt('head') [0] || Y.documentElement;
      return {
        send: function (t, i) {
          n = Y.createElement('script'),
          n.async = !0,
          e.scriptCharset && (n.charset = e.scriptCharset),
          n.src = e.url,
          n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, 'success'))
          },
          r.insertBefore(n, r.firstChild)
        },
        abort: function () {
          n && n.onload(t, !0)
        }
      }
    }
  });
  var Xn = [
  ],
  Yn = /(=)\?(?=&|$)|\?\?/;
  lt.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Xn.pop() || lt.expando + '_' + In++;
      return this[e] = !0,
      e
    }
  }),
  lt.ajaxPrefilter('json jsonp', function (n, r, i) {
    var a,
    o,
    s,
    l = n.jsonp !== !1 && (Yn.test(n.url) ? 'url' : 'string' == typeof n.data && !(n.contentType || '').indexOf('application/x-www-form-urlencoded') && Yn.test(n.data) && 'data');
    return l || 'jsonp' === n.dataTypes[0] ? (a = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback()  : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, '$1' + a)  : n.jsonp !== !1 && (n.url += (On.test(n.url) ? '&' : '?') + n.jsonp + '=' + a), n.converters['script json'] = function () {
      return s || lt.error(a + ' was not called'),
      s[0]
    }, n.dataTypes[0] = 'json', o = e[a], e[a] = function () {
      s = arguments
    }, i.always(function () {
      e[a] = o,
      n[a] && (n.jsonpCallback = r.jsonpCallback, Xn.push(a)),
      s && lt.isFunction(o) && o(s[0]),
      s = o = t
    }), 'script')  : t
  });
  var Wn,
  Kn,
  Zn = 0,
  Qn = e.ActiveXObject && function () {
    var e;
    for (e in Wn) Wn[e](t, !0)
  };
  lt.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && P() || j()
  }
   : P,
  Kn = lt.ajaxSettings.xhr(),
  lt.support.cors = !!Kn && 'withCredentials' in Kn,
  Kn = lt.support.ajax = !!Kn,
  Kn && lt.ajaxTransport(function (n) {
    if (!n.crossDomain || lt.support.cors) {
      var r;
      return {
        send: function (i, a) {
          var o,
          s,
          l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password)  : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
          n.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
          try {
            for (s in i) l.setRequestHeader(s, i[s])
          } catch (c) {
          }
          l.send(n.hasContent && n.data || null),
          r = function (e, i) {
            var s,
            c,
            u,
            d;
            try {
              if (r && (i || 4 === l.readyState)) if (r = t, o && (l.onreadystatechange = lt.noop, Qn && delete Wn[o]), i) 4 !== l.readyState && l.abort();
               else {
                d = {
                },
                s = l.status,
                c = l.getAllResponseHeaders(),
                'string' == typeof l.responseText && (d.text = l.responseText);
                try {
                  u = l.statusText
                } catch (f) {
                  u = ''
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204)  : s = d.text ? 200 : 404
              }
            } catch (h) {
              i || a( - 1, h)
            }
            d && a(s, u, d, c)
          },
          n.async ? 4 === l.readyState ? setTimeout(r)  : (o = ++Zn, Qn && (Wn || (Wn = {
          }, lt(e).unload(Qn)), Wn[o] = r), l.onreadystatechange = r)  : r()
        },
        abort: function () {
          r && r(t, !0)
        }
      }
    }
  });
  var Jn,
  er,
  tr = /^(?:toggle|show|hide)$/,
  nr = RegExp('^(?:([+-])=|)(' + ct + ')([a-z%]*)$', 'i'),
  rr = /queueHooks$/,
  ir = [
    R
  ],
  ar = {
    '*': [
      function (e, t) {
        var n,
        r,
        i = this.createTween(e, t),
        a = nr.exec(t),
        o = i.cur(),
        s = + o || 0,
        l = 1,
        c = 20;
        if (a) {
          if (n = + a[2], r = a[3] || (lt.cssNumber[e] ? '' : 'px'), 'px' !== r && s) {
            s = lt.css(i.elem, e, !0) || n || 1;
            do l = l || '.5',
            s /= l,
            lt.style(i.elem, e, s + r);
            while (l !== (l = i.cur() / o) && 1 !== l && --c)
          }
          i.unit = r,
          i.start = s,
          i.end = a[1] ? s + (a[1] + 1) * n : n
        }
        return i
      }
    ]
  };
  lt.Animation = lt.extend($, {
    tweener: function (e, t) {
      lt.isFunction(e) ? (t = e, e = [
        '*'
      ])  : e = e.split(' ');
      for (var n, r = 0, i = e.length; i > r; r++) n = e[r],
      ar[n] = ar[n] || [
      ],
      ar[n].unshift(t)
    },
    prefilter: function (e, t) {
      t ? ir.unshift(e)  : ir.push(e)
    }
  }),
  lt.Tween = F,
  F.prototype = {
    constructor: F,
    init: function (e, t, n, r, i, a) {
      this.elem = e,
      this.prop = n,
      this.easing = i || 'swing',
      this.options = t,
      this.start = this.now = this.cur(),
      this.end = r,
      this.unit = a || (lt.cssNumber[n] ? '' : 'px')
    },
    cur: function () {
      var e = F.propHooks[this.prop];
      return e && e.get ? e.get(this)  : F.propHooks._default.get(this)
    },
    run: function (e) {
      var t,
      n = F.propHooks[this.prop];
      return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)  : e,
      this.now = (this.end - this.start) * t + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      n && n.set ? n.set(this)  : F.propHooks._default.set(this),
      this
    }
  },
  F.prototype.init.prototype = F.prototype,
  F.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0)  : e.elem[e.prop]
      },
      set: function (e) {
        lt.fx.step[e.prop] ? lt.fx.step[e.prop](e)  : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit)  : e.elem[e.prop] = e.now
      }
    }
  },
  F.propHooks.scrollTop = F.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  },
  lt.each(['toggle',
  'show',
  'hide'], function (e, t) {
    var n = lt.fn[t];
    lt.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments)  : this.animate(z(t, !0), e, r, i)
    }
  }),
  lt.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(k).css('opacity', 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function (e, t, n, r) {
      var i = lt.isEmptyObject(e),
      a = lt.speed(t, n, r),
      o = function () {
        var t = $(this, lt.extend({
        }, e), a);
        o.finish = function () {
          t.stop(!0)
        },
        (i || lt._data(this, 'finish')) && t.stop(!0)
      };
      return o.finish = o,
      i || a.queue === !1 ? this.each(o)  : this.queue(a.queue, o)
    },
    stop: function (e, n, r) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop,
        t(r)
      };
      return 'string' != typeof e && (r = n, n = e, e = t),
      n && e !== !1 && this.queue(e || 'fx', [
      ]),
      this.each(function () {
        var t = !0,
        n = null != e && e + 'queueHooks',
        a = lt.timers,
        o = lt._data(this);
        if (n) o[n] && o[n].stop && i(o[n]);
         else for (n in o) o[n] && o[n].stop && rr.test(n) && i(o[n]);
        for (n = a.length; n--; ) a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(r), t = !1, a.splice(n, 1));
        (t || !r) && lt.dequeue(this, e)
      })
    },
    finish: function (e) {
      return e !== !1 && (e = e || 'fx'),
      this.each(function () {
        var t,
        n = lt._data(this),
        r = n[e + 'queue'],
        i = n[e + 'queueHooks'],
        a = lt.timers,
        o = r ? r.length : 0;
        for (n.finish = !0, lt.queue(this, e, [
        ]), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
        for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish
      })
    }
  }),
  lt.each({
    slideDown: z('show'),
    slideUp: z('hide'),
    slideToggle: z('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (e, t) {
    lt.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r)
    }
  }),
  lt.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? lt.extend({
    }, e)  : {
      complete: n || !n && t || lt.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !lt.isFunction(t) && t
    };
    return r.duration = lt.fx.off ? 0 : 'number' == typeof r.duration ? r.duration : r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default,
    (null == r.queue || r.queue === !0) && (r.queue = 'fx'),
    r.old = r.complete,
    r.complete = function () {
      lt.isFunction(r.old) && r.old.call(this),
      r.queue && lt.dequeue(this, r.queue)
    },
    r
  },
  lt.easing = {
    linear: function (e) {
      return e
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2
    }
  },
  lt.timers = [
  ],
  lt.fx = F.prototype.init,
  lt.fx.tick = function () {
    var e,
    n = lt.timers,
    r = 0;
    for (Jn = lt.now(); n.length > r; r++) e = n[r],
    e() || n[r] !== e || n.splice(r--, 1);
    n.length || lt.fx.stop(),
    Jn = t
  },
  lt.fx.timer = function (e) {
    e() && lt.timers.push(e) && lt.fx.start()
  },
  lt.fx.interval = 13,
  lt.fx.start = function () {
    er || (er = setInterval(lt.fx.tick, lt.fx.interval))
  },
  lt.fx.stop = function () {
    clearInterval(er),
    er = null
  },
  lt.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  lt.fx.step = {
  },
  lt.expr && lt.expr.filters && (lt.expr.filters.animated = function (e) {
    return lt.grep(lt.timers, function (t) {
      return e === t.elem
    }).length
  }),
  lt.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      lt.offset.setOffset(this, e, t)
    });
    var n,
    r,
    i = {
      top: 0,
      left: 0
    },
    a = this[0],
    o = a && a.ownerDocument;
    return o ? (n = o.documentElement, lt.contains(n, a) ? (typeof a.getBoundingClientRect !== X && (i = a.getBoundingClientRect()), r = q(o), {
      top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    })  : i)  : void 0
  },
  lt.offset = {
    setOffset: function (e, t, n) {
      var r = lt.css(e, 'position');
      'static' === r && (e.style.position = 'relative');
      var i,
      a,
      o = lt(e),
      s = o.offset(),
      l = lt.css(e, 'top'),
      c = lt.css(e, 'left'),
      u = ('absolute' === r || 'fixed' === r) && lt.inArray('auto', [
        l,
        c
      ]) > - 1,
      d = {
      },
      f = {
      };
      u ? (f = o.position(), i = f.top, a = f.left)  : (i = parseFloat(l) || 0, a = parseFloat(c) || 0),
      lt.isFunction(t) && (t = t.call(e, n, s)),
      null != t.top && (d.top = t.top - s.top + i),
      null != t.left && (d.left = t.left - s.left + a),
      'using' in t ? t.using.call(e, d)  : o.css(d)
    }
  },
  lt.fn.extend({
    position: function () {
      if (this[0]) {
        var e,
        t,
        n = {
          top: 0,
          left: 0
        },
        r = this[0];
        return 'fixed' === lt.css(r, 'position') ? t = r.getBoundingClientRect()  : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], 'html') || (n = e.offset()), n.top += lt.css(e[0], 'borderTopWidth', !0), n.left += lt.css(e[0], 'borderLeftWidth', !0)),
        {
          top: t.top - n.top - lt.css(r, 'marginTop', !0),
          left: t.left - n.left - lt.css(r, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || Y.documentElement; e && !lt.nodeName(e, 'html') && 'static' === lt.css(e, 'position'); ) e = e.offsetParent;
        return e || Y.documentElement
      })
    }
  }),
  lt.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (e, n) {
    var r = /Y/.test(n);
    lt.fn[e] = function (i) {
      return lt.access(this, function (e, i, a) {
        var o = q(e);
        return a === t ? o ? n in o ? o[n] : o.document.documentElement[i] : e[i] : (o ? o.scrollTo(r ? lt(o).scrollLeft()  : a, r ? a : lt(o).scrollTop())  : e[i] = a, t)
      }, e, i, arguments.length, null)
    }
  }),
  lt.each({
    Height: 'height',
    Width: 'width'
  }, function (e, n) {
    lt.each({
      padding: 'inner' + e,
      content: n,
      '': 'outer' + e
    }, function (r, i) {
      lt.fn[i] = function (i, a) {
        var o = arguments.length && (r || 'boolean' != typeof i),
        s = r || (i === !0 || a === !0 ? 'margin' : 'border');
        return lt.access(this, function (n, r, i) {
          var a;
          return lt.isWindow(n) ? n.document.documentElement['client' + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body['scroll' + e], a['scroll' + e], n.body['offset' + e], a['offset' + e], a['client' + e]))  : i === t ? lt.css(n, r, s)  : lt.style(n, r, i, s)
        }, n, o ? i : t, o, null)
      }
    })
  }),
  e.jQuery = e.$ = lt,
  'function' == typeof define && define.amd && define.amd.jQuery && define('jquery', [
  ], function () {
    return lt
  })
}(window);
var attributeWithReferences = [
  'fill',
  'stroke',
  'filter',
  'marker-start',
  'marker-mid',
  'marker-end',
  'clip-path',
  'mask',
  'href'
],
defTagChildren = [
  'lineargradient',
  'radialgradient',
  'pattern',
  'filter'
];
(function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['svg-functions/dom-utils'], SVGUtilsDefinition)  : e.SVGUtils = SVGUtilsDefinition(e.DomUtils)
}) (window),
window.XslRules = XSLRulesDefinition(),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['svg-functions/math-utils',
  'canvas/history'], CanvasControllerDefinition)  : e.CanvasController = CanvasControllerDefinition(e.MathUtils, e.History)
}(window),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define([], CanvasEventFunctionsDefinition)  : e.CanvasEventFunctions = CanvasEventFunctionsDefinition()
}(window),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define([], AddKeyboardControlsDefinition)  : e.AddKeyboardControls = AddKeyboardControlsDefinition()
}(window),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define([], HistoryDefinition)  : e.History = HistoryDefinition()
}(window),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['svg-functions/svg-utils'], SelectionControllerDefinition)  : e.SelectionController = SelectionControllerDefinition(e.SVGUtils)
}(window),
function (e) {
  function t(e, t) {
    for (var n = e.length; n--; ) if (e[n] === t) return n;
    return - 1
  }
  function n(e, t) {
    if (e.length != t.length) return !1;
    for (var n = 0; e.length > n; n++) if (e[n] !== t[n]) return !1;
    return !0
  }
  function r(e) {
    for (b in w) w[b] = e[C[b]]
  }
  function i(e, n) {
    var i,
    a,
    o,
    l,
    c;
    if (i = e.keyCode, - 1 == t(A, i) && A.push(i), (93 == i || 224 == i) && (i = 91), i in w) {
      w[i] = !0;
      for (o in S) S[o] == i && (s[o] = !0)
    } else if (r(e), s.filter.call(this, e) && i in x) for (l = 0; x[i].length > l; l++) if (a = x[i][l], a.scope == n || 'all' == a.scope) {
      c = a.mods.length > 0;
      for (o in w) (!w[o] && t(a.mods, + o) > - 1 || w[o] && - 1 == t(a.mods, + o)) && (c = !1);
      (0 == a.mods.length && !w[16] && !w[18] && !w[17] && !w[91] || c) && a.method(e, a) === !1 && (e.preventDefault ? e.preventDefault()  : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), e.cancelBubble && (e.cancelBubble = !0))
    }
  }
  function a(e) {
    var n,
    r = e.keyCode,
    i = t(A, r);
    if (i >= 0 && A.splice(i, 1), (93 == r || 224 == r) && (r = 91), r in w) {
      w[r] = !1;
      for (n in S) S[n] == r && (s[n] = !1)
    }
  }
  function o() {
    for (b in w) w[b] = !1;
    for (b in S) s[b] = !1
  }
  function s(e, t, n) {
    var r,
    i,
    a;
    for (r = g(e), void 0 === n && (n = t, t = 'all'), a = 0; r.length > a; a++) i = [
    ],
    e = r[a].split('+'),
    e.length > 1 && (i = v(e), e = [
      e[e.length - 1]
    ]),
    e = e[0],
    e = E(e),
    e in x || (x[e] = [
    ]),
    x[e].push({
      shortcut: r[a],
      scope: t,
      method: n,
      key: r[a],
      mods: i
    })
  }
  function l(e, t) {
    var r,
    i,
    a = e.split('+'),
    o = [
    ];
    if (a.length > 1 && (o = v(a), e = a[a.length - 1]), e = E(e), void 0 === t && (t = h()), x[e]) for (r in x[e]) i = x[e][r],
    i.scope === t && n(i.mods, o) && (x[e][r] = {
    })
  }
  function c(e) {
    return 'string' == typeof e && (e = E(e)),
    - 1 != t(A, e)
  }
  function u() {
    return A.slice(0)
  }
  function d(e) {
    var t = (e.target || e.srcElement).tagName;
    return 'INPUT' != t && 'SELECT' != t && 'TEXTAREA' != t
  }
  function f(e) {
    k = e || 'all'
  }
  function h() {
    return k || 'all'
  }
  function p(e) {
    var t,
    n,
    r;
    for (t in x) for (n = x[t], r = 0; n.length > r; ) n[r].scope === e ? n.splice(r, 1)  : r++
  }
  function g(e) {
    var t;
    return e = e.replace(/\s/g, ''),
    t = e.split(','),
    '' == t[t.length - 1] && (t[t.length - 2] += ','),
    t
  }
  function v(e) {
    var t = e.slice(0, e.length - 1);
    for (mi = 0; t.length > mi; mi++) t[mi] = S[t[mi]];
    return t
  }
  function m(e, t, n) {
    e.addEventListener ? e.addEventListener(t, n, !1)  : e.attachEvent && e.attachEvent('on' + t, function () {
      n(window.event)
    })
  }
  function y() {
    var t = e.key;
    return e.key = T,
    t
  }
  var b,
  x = {
  },
  w = {
    16: !1,
    18: !1,
    17: !1,
    91: !1
  },
  k = 'all',
  S = {
    'â‡§': 16,
    shift: 16,
    'âŒ¥': 18,
    alt: 18,
    option: 18,
    'âŒƒ': 17,
    ctrl: 17,
    control: 17,
    'âŒ˜': 91,
    command: 91
  },
  _ = {
    backspace: 8,
    tab: 9,
    clear: 12,
    enter: 13,
    'return': 13,
    esc: 27,
    escape: 27,
    space: 32,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    del: 46,
    'delete': 46,
    home: 36,
    end: 35,
    pageup: 33,
    pagedown: 34,
    ',': 188,
    '.': 190,
    '/': 191,
    '`': 192,
    '-': 189,
    '=': 187,
    ';': 186,
    '\'': 222,
    '[': 219,
    ']': 221,
    '\\': 220
  },
  E = function (e) {
    return _[e] || e.toUpperCase().charCodeAt(0)
  },
  A = [
  ];
  for (b = 1; 20 > b; b++) _['f' + b] = 111 + b;
  var C = {
    16: 'shiftKey',
    18: 'altKey',
    17: 'ctrlKey',
    91: 'metaKey'
  };
  for (b in S) s[b] = !1;
  m(document, 'keydown', function (e) {
    i(e, k)
  }),
  m(document, 'keyup', a),
  m(window, 'focus', o);
  var T = e.key;
  e.key = s,
  e.key.setScope = f,
  e.key.getScope = h,
  e.key.deleteScope = p,
  e.key.filter = d,
  e.key.isPressed = c,
  e.key.getPressedKeyCodes = u,
  e.key.noConflict = y,
  e.key.unbind = l,
  'undefined' != typeof module && (module.exports = key)
}(this),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['canvas/svg-utils',
  'canvas/math-utils'], SVGCanvasDefinition)  : e.VectorPaintCanvasController = VectorPaintCanvasControllerDefinition(e.SVGUtils, e.MathUtils, e.CanvasController)
}(window),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define([], AddVectorPaintControlsDefinition)  : e.AddVectorPaintControls = AddVectorPaintControlsDefinition(e.jQuery)
}(window);
var AlignSVGText = new AlignSVGTextDefinition(SVGUtils);
Array.from(document.getElementsByTagName('svg')).forEach(AlignSVGText.scanDocument);
var SVGUnits = new SVGUnitsDefinition;
(function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define([], TextToolDefinition)  : e.TextTool = TextToolDefinition(AlignSVGText)
}) (window),
function (e) {
  'use strict';
  'function' == typeof define && define.amd ? define(['canvas/svg-utils',
  'canvas/math-utils'], SVGCanvasDefinition)  : e.SVGCanvas = SVGCanvasDefinition(e.SVGUtils, e.MathUtils)
}(window);
var canvasController,
textTool;
(function (e) {
  document.addEventListener('DOMContentLoaded', function () {
    var e = document.getElementById('svgroot');
    document.getElementById('content');
    var t = '.currentLayer > *:not(title)',
    n = SVGCanvas(e, t);
    textTool = TextTool(n),
    AddVectorPaintControls(function () {
      return canvasController
    })
  }, !1),
  document.getElementById('base_unit').addEventListener('change', function () {
    this.value;
    var e = contentElement.createSVGLength();
    e.valueAsString = a.getAttribute('width'),
    contentElement.getAttribute('width')
  })
}) (window);
var svgRules;
$.get('assets/SVG.xsd', function (e) {
  svgRules = XslRules(e)
});
var userID;
$('[data-purchase]').click(function () {
  var e = this.getAttribute('data-purchase');
  userID ? (this.style.display = 'none', document.body.classList.add(e + '-purchased'), document.body.classList.add(e), global.storage.get('userData', function (t) {
    t.userData = t.userData || {
    },
    t.userData.purchased_plugins = t.userData.purchased_plugins || [
    ],
    t.userData.purchased_plugins.push(e),
    global.storage.set('userData', JSON.stringify(t.userData))
  }), global.trackEvent(e + '_purchased'), $.ajax({
    type: 'PUT',
    url: '/payments/buy/' + e + '/' + userID
  }), global.alert('There is no charge for plugins at the moment and you are free to use the plugin. Enjoy.'))  : (global.alert('Please login to purchase plugins'), gapi.auth.signIn())
}),
global.storage.get('userData', function (e) {
  e.userData && processUserData(JSON.parse(e.userData))
});
var colorProperties = [
  'stroke',
  'fill'
],
numberProperties = [
  'r',
  'rx',
  'ry',
  'opacity',
  'width',
  'x',
  'y',
  'height',
  'fill-opacity',
  'stroke-opacity',
  'stroke-width'
],
minProperties = {
  'fill-opacity': 0,
  r: 1,
  rx: 1,
  ry: 1,
  width: 1,
  'font-size': 1,
  height: 1,
  opacity: 0,
  'stroke-opacity': 0,
  'stroke-width': 0
},
maxProperties = {
  'fill-opacity': 1,
  opacity: 1,
  'stroke-opacity': 1
},
attributesWithUrls = [
  'stroke',
  'fill',
  'filter',
  'clip-path',
  'mask',
  'marker-start',
  'marker-mid',
  'marker-end'
],
defaults = {
  'fill-opacity': 1,
  'stop-opacity': 1,
  opacity: 1,
  stroke: 'none',
  'stroke-dasharray': 'none',
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  'stroke-opacity': 1,
  'stroke-width': 1,
  r: 1,
  rx: 1,
  ry: 1,
  'font-style': 'normal',
  'font-weight': 'normal',
  'text-align': 'left',
  'fill-rule': 'nonzero',
  align: 'xMinYMin'
},
elementAtrributes = {
  all: [
    'id'
  ],
  g: [
    'clip-path',
    'mask',
    'filter',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-linecap',
    'fill-rule'
  ],
  path: [
    'clip-path',
    'mask',
    'filter',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-linecap',
    'fill-rule',
    'marker-mid',
    'marker-end',
    'marker-start'
  ],
  polyline: [
    'clip-path',
    'mask',
    'filter',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-linecap',
    'fill-rule'
  ],
  polygon: [
    'clip-path',
    'mask',
    'filter',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-linecap',
    'fill-rule'
  ],
  rect: [
    'clip-path',
    'mask',
    'filter',
    'x',
    'y',
    'width',
    'height',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'rx',
    'ry',
    'opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-linecap'
  ],
  image: [
    'clip-path',
    'mask',
    'x',
    'y',
    'width',
    'height',
    'opacity',
    'align',
    'xlink:href'
  ],
  use: [
    'x',
    'y',
    'width',
    'height',
    'href'
  ],
  foreignobject: [
    'x',
    'y',
    'width',
    'height',
    'font-size',
    'font-weight',
    'font-style',
    'color',
    'text-align',
    'font-family',
    'letter-spacing',
    'word-spacing',
    'font-stretch',
    'line-height'
  ],
  ellipse: [
    'clip-path',
    'mask',
    'filter',
    'cx',
    'cy',
    'rx',
    'ry',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-linejoin',
    'stroke-linecap'
  ],
  a: [
    'href'
  ],
  altGlyph: [
    'href'
  ],
  color: [
    'href'
  ],
  profile: [
    'href'
  ],
  cursor: [
    'href'
  ],
  circle: [
    'clip-path',
    'mask',
    'filter',
    'cx',
    'cy',
    'r',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-linejoin',
    'stroke-linecap'
  ],
  line: [
    'clip-path',
    'mask',
    'filter',
    'x1',
    'y1',
    'x2',
    'y2',
    'stroke',
    'stroke-width',
    'opacity',
    'stroke-dasharray',
    'stroke-linejoin',
    'stroke-linecap'
  ],
  feImage: [
    'href'
  ],
  filter: [
    'href'
  ],
  font: [
    'href'
  ],
  face: [
    'href'
  ],
  glyphRef: [
    'href'
  ],
  linearGradient: [
    'href'
  ],
  mpath: [
    'href'
  ],
  pattern: [
    'href'
  ],
  radialGradient: [
    'href'
  ],
  tspan: [
    'x',
    'y',
    'stroke-linejoin',
    'href'
  ],
  text: [
    'clip-path',
    'mask',
    'opacity',
    'writing-mode',
    'font-style',
    'font-weight',
    'stroke-width',
    'font-size',
    'font-family',
    'letter-spacing',
    'word-spacing',
    'font-stretch',
    'stroke',
    'stroke-opacity',
    'fill',
    'fill-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linejoin',
    'stroke-linecap'
  ],
  svg: [
    'x',
    'y',
    'width',
    'height'
  ],
  script: [
    'href'
  ],
  textPath: [
    'href'
  ],
  tref: [
    'href'
  ]
},
resizableEles = [
  'svg',
  'image',
  'foreignobject',
  'rect',
  'use'
],
getElementAttributeList = function (e) {
  var t = elementAtrributes[e.nodeName.toLowerCase()],
  n = Array.prototype.slice.call(e.attributes).map(function (e) {
    return e.name
  });
  return _.union(t, n)
},
attributesToIgnore = [
  'style',
  'xlink:href',
  'href'
];
!function (e) {
  function t(e, t) {
    var n;
    if (e && pt[typeof e]) for (n in e) if (At.call(e, n) && t(e[n], n, e) === et) break
  }
  function n(e, t) {
    var n;
    if (e && pt[typeof e]) for (n in e) if (t(e[n], n, e) === et) break
  }
  function r(e) {
    var t,
    n = [
    ];
    if (!e || !pt[typeof e]) return n;
    for (t in e) At.call(e, t) && n.push(t);
    return n
  }
  function i(e, t, n) {
    n = (n || 0) - 1;
    for (var r = e.length; r > ++n; ) if (e[n] === t) return n;
    return - 1
  }
  function a(e, t) {
    var n = e.m,
    r = t.m;
    if (e = e.l, t = t.l, e !== t) {
      if (e > t || e === void 0) return 1;
      if (t > e || t === void 0) return - 1
    }
    return r > n ? - 1 : 1
  }
  function o(e) {
    return '\\' + gt[e]
  }
  function s() {
  }
  function l(e) {
    return e instanceof l ? e : new c(e)
  }
  function c(e) {
    this.__wrapped__ = e
  }
  function u(e, t, n) {
    function r() {
      var l = arguments,
      c = a ? this : t;
      return i || (e = t[o]),
      n.length && (l = l.length ? (l = $t.call(l), s ? l.concat(n)  : n.concat(l))  : n),
      this instanceof r ? (c = d(e.prototype), l = e.apply(c, l), S(l) ? l : c)  : e.apply(c, l)
    }
    var i = k(e),
    a = !n,
    o = t;
    if (a) {
      var s = void 0;
      n = t
    } else if (!i) throw new TypeError;
    return r
  }
  function d(e) {
    return S(e) ? Lt(e)  : {
    }
  }
  function f(e) {
    return qt[e]
  }
  function h() {
    var e = (e = l.indexOf) === F ? i : e;
    return e
  }
  function p(e) {
    return Ut[e]
  }
  function g(e) {
    return Nt.call(e) == ot
  }
  function v(e) {
    if (!e) return e;
    for (var t = 1, n = arguments.length; n > t; t++) {
      var r = arguments[t];
      if (r) for (var i in r) e[i] = r[i]
    }
    return e
  }
  function m(e) {
    if (!e) return e;
    for (var t = 1, n = arguments.length; n > t; t++) {
      var r = arguments[t];
      if (r) for (var i in r) e[i] == Z && (e[i] = r[i])
    }
    return e
  }
  function y(e) {
    var t = [
    ];
    return n(e, function (e, n) {
      k(e) && t.push(n)
    }),
    t.sort()
  }
  function b(e) {
    for (var t = - 1, n = zt(e), r = n.length, i = {
    }; r > ++t; ) {
      var a = n[t];
      i[e[a]] = a
    }
    return i
  }
  function x(e) {
    if (!e) return K;
    if (Ft(e) || E(e)) return !e.length;
    for (var t in e) if (At.call(e, t)) return Q;
    return K
  }
  function w(e, t, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    var a = typeof e,
    o = typeof t;
    if (e === e && (!e || 'function' != a && 'object' != a) && (!t || 'function' != o && 'object' != o)) return Q;
    if (e == Z || t == Z) return e === t;
    if (o = Nt.call(e), a = Nt.call(t), o != a) return Q;
    switch (o) {
      case lt:
      case ct:
        return + e == + t;
      case ut:
        return e != + e ? t != + t : 0 == e ? 1 / e == 1 / t : e == + t;
      case ft:
      case ht:
        return e == t + ''
    }
    if (a = o == st, !a) {
      if (e instanceof l || t instanceof l) return w(e.__wrapped__ || e, t.__wrapped__ || t, r, i);
      if (o != dt) return Q;
      var o = e.constructor,
      s = t.constructor;
      if (!(o == s || k(o) && o instanceof o && k(s) && s instanceof s)) return Q
  }
  for (r || (r = [
  ]), i || (i = [
  ]), o = r.length; o--; ) if (r[o] == e) return i[o] == t;
  var c = K,
  u = 0;
  if (r.push(e), i.push(t), a) {
    if (u = t.length, c = u == e.length) for (; u-- && (c = w(e[u], t[u], r, i)); );
    return c
}
return n(t, function (t, n, a) {
  return At.call(a, n) ? (u++, !(c = At.call(e, n) && w(e[n], t, r, i)) && et)  : void 0
}),
c && n(e, function (e, t, n) {
  return At.call(n, t) ? !(c = --u > - 1) && et : void 0
}),
c
}
function k(e) {
return 'function' == typeof e
}
function S(e) {
return !(!e || !pt[typeof e])
}
function _(e) {
return 'number' == typeof e || Nt.call(e) == ut
}
function E(e) {
return 'string' == typeof e || Nt.call(e) == ht
}
function A(e) {
for (var t = - 1, n = zt(e), r = n.length, i = Array(r); r > ++t; ) i[t] = e[n[t]];
return i
}
function C(e, n) {
var r = h(),
i = e ? e.length : 0,
a = Q;
return i && 'number' == typeof i ? a = r(e, n) > - 1 : t(e, function (e) {
  return (a = e === n) && et
}),
a
}
function T(e, n, r) {
var i = K;
n = X(n, r),
r = - 1;
var a = e ? e.length : 0;
if ('number' == typeof a) for (; a > ++r && (i = !!n(e[r], r, e)); );
 else t(e, function (e, t, r) {
  return !(i = !!n(e, t, r)) && et
});
return i
}
function N(e, n, r) {
var i = [
];
n = X(n, r),
r = - 1;
var a = e ? e.length : 0;
if ('number' == typeof a) for (; a > ++r; ) {
  var o = e[r];
  n(o, r, e) && i.push(o)
} else t(e, function (e, t, r) {
  n(e, t, r) && i.push(e)
});
return i
}
function M(e, n, r) {
n = X(n, r),
r = - 1;
var i = e ? e.length : 0;
if ('number' != typeof i) {
  var a;
  return t(e, function (e, t, r) {
    return n(e, t, r) ? (a = e, et)  : void 0
  }),
  a
}
for (; i > ++r; ) {
  var o = e[r];
  if (n(o, r, e)) return o
}
}
function L(e, n, r) {
var i = - 1,
a = e ? e.length : 0;
if (n = n && r === void 0 ? n : X(n, r), 'number' == typeof a) for (; a > ++i && n(e[i], i, e) !== et; );
 else t(e, n)
}
function G(e, n, r) {
var i = - 1,
a = e ? e.length : 0;
if (n = X(n, r), 'number' == typeof a) for (var o = Array(a); a > ++i; ) o[i] = n(e[i], i, e);
 else o = [
],
t(e, function (e, t, r) {
  o[++i] = n(e, t, r)
});
return o
}
function I(e, t, n) {
var r = - 1 / 0,
i = r,
a = - 1,
o = e ? e.length : 0;
if (t || 'number' != typeof o) t = X(t, n),
L(e, function (e, n, a) {
  n = t(e, n, a),
  n > r && (r = n, i = e)
});
 else for (; o > ++a; ) n = e[a],
n > i && (i = n);
return i
}
function O(e, t) {
var n = - 1,
r = e ? e.length : 0;
if ('number' == typeof r) for (var i = Array(r); r > ++n; ) i[n] = e[n][t];
return i || G(e, t)
}
function P(e, n, r, i) {
if (!e) return r;
var a = 3 > arguments.length;
n = X(n, i, 4);
var o = - 1,
s = e.length;
if ('number' == typeof s) for (a && (r = e[++o]); s > ++o; ) r = n(r, e[o], o, e);
 else t(e, function (e, t, i) {
  r = a ? (a = Q, e)  : n(r, e, t, i)
});
return r
}
function j(e, t, n, r) {
var i = e ? e.length : 0,
a = 3 > arguments.length;
if ('number' != typeof i) var o = zt(e),
i = o.length;
return t = X(t, r, 4),
L(e, function (r, s, l) {
  s = o ? o[--i] : --i,
  n = a ? (a = Q, e[s])  : t(n, e[s], s, l)
}),
n
}
function D(e, n, r) {
var i;
n = X(n, r),
r = - 1;
var a = e ? e.length : 0;
if ('number' == typeof a) for (; a > ++r && !(i = n(e[r], r, e)); );
 else t(e, function (e, t, r) {
  return (i = n(e, t, r)) && et
});
return !!i
}
function B(e, t, n) {
return n && x(t) ? Z : (n ? M : N) (e, t)
}
function $(e) {
for (var t = - 1, n = h(), r = e.length, i = _t.apply(bt, $t.call(arguments, 1)), a = [
]; r > ++t; ) {
  var o = e[t];
  0 > n(i, o) && a.push(o)
}
return a
}
function V(e, t, n) {
if (e) {
  var r = 0,
  i = e.length;
  if ('number' != typeof t && t != Z) {
    var a = - 1;
    for (t = X(t, n); i > ++a && t(e[a], a, e); ) r++
  } else if (r = t, r == Z || n) return e[0];
  return $t.call(e, 0, Dt(jt(0, r), i))
}
}
function R(e, t) {
for (var n = - 1, r = e ? e.length : 0, i = [
]; r > ++n; ) {
  var a = e[n];
  Ft(a) ? Ct.apply(i, t ? a : R(a))  : i.push(a)
}
return i
}
function F(e, t, n) {
if ('number' == typeof n) {
  var r = e ? e.length : 0;
  n = 0 > n ? jt(0, r + n)  : n || 0
} else if (n) return n = q(e, t),
e[n] === t ? n : - 1;
return e ? i(e, t, n)  : - 1
}
function z(e, t, n) {
if ('number' != typeof t && t != Z) {
  var r = 0,
  i = - 1,
  a = e ? e.length : 0;
  for (t = X(t, n); a > ++i && t(e[i], i, e); ) r++
} else r = t == Z || n ? 1 : jt(0, t);
return $t.call(e, r)
}
function q(e, t, n, r) {
var i = 0,
a = e ? e.length : i;
for (n = n ? X(n, r, 1)  : Y, t = n(t); a > i; ) r = i + a >>> 1,
t > n(e[r]) ? i = r + 1 : a = r;
return i
}
function U(e, t, n, r) {
var i = - 1,
a = h(),
o = e ? e.length : 0,
s = [
],
l = s;
for ('boolean' != typeof t && t != Z && (r = n, n = t, t = Q), n != Z && (l = [
], n = X(n, r)); o > ++i; ) {
  r = e[i];
  var c = n ? n(r, i, e)  : r;
  (t ? !i || l[l.length - 1] !== c : 0 > a(l, c)) && (n && l.push(c), s.push(r))
}
return s
}
function H(e, t) {
return Rt.fastBind || Mt && arguments.length > 2 ? Mt.call.apply(Mt, arguments)  : u(e, t, $t.call(arguments, 2))
}
function X(e, t, n) {
if (e == Z) return Y;
var r = typeof e;
if ('function' != r) {
  if ('object' != r) return function (t) {
    return t[e]
  };
  var i = zt(e);
  return function (t) {
    for (var n = i.length, r = Q; n-- && (r = t[i[n]] === e[i[n]]); );
    return r
  }
}
return t === void 0 ? e : 1 === n ? function (n) {
  return e.call(t, n)
}
 : 2 === n ? function (n, r) {
  return e.call(t, n, r)
}
 : 4 === n ? function (n, r, i, a) {
  return e.call(t, n, r, i, a)
}
 : function (n, r, i) {
  return e.call(t, n, r, i)
}
}
function Y(e) {
return e
}
function W(e) {
L(y(e), function (t) {
  var n = l[t] = e[t];
  l.prototype[t] = function () {
    var e = [
      this.__wrapped__
    ];
    return Ct.apply(e, arguments),
    e = n.apply(l, e),
    this.__chain__ && (e = new c(e), e.__chain__ = K),
    e
  }
})
}
var K = !0,
Z = null,
Q = !1,
J = 0,
et = {
},
tt = + new Date + '',
nt = /&(?:amp|lt|gt|quot|#39);/g,
rt = /($^)/,
it = /[&<>"']/g,
at = /['\n\r\t\u2028\u2029\\]/g,
ot = '[object Arguments]',
st = '[object Array]',
lt = '[object Boolean]',
ct = '[object Date]',
ut = '[object Number]',
dt = '[object Object]',
ft = '[object RegExp]',
ht = '[object String]',
pt = {
'boolean': Q,
'function': K,
object: K,
number: Q,
string: Q,
undefined: Q
},
gt = {
'\\': '\\',
'\'': '\'',
'\n': 'n',
'\r': 'r',
'\t': 't',
' ': 'u2028',
' ': 'u2029'
},
vt = pt[typeof exports] && exports,
mt = pt[typeof module] && module && module.exports == vt && module,
yt = pt[typeof global] && global;
!yt || yt.global !== yt && yt.window !== yt || (e = yt);
var bt = [
],
yt = Object.prototype,
xt = e._,
wt = RegExp('^' + (yt.valueOf + '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$'),
kt = Math.ceil,
St = e.clearTimeout,
_t = bt.concat,
Et = Math.floor,
At = yt.hasOwnProperty,
Ct = bt.push,
Tt = e.setTimeout,
Nt = yt.toString,
Mt = wt.test(Mt = Nt.bind) && Mt,
Lt = wt.test(Lt = Object.create) && Lt,
Gt = wt.test(Gt = Array.isArray) && Gt,
It = e.isFinite,
Ot = e.isNaN,
Pt = wt.test(Pt = Object.keys) && Pt,
jt = Math.max,
Dt = Math.min,
Bt = Math.random,
$t = bt.slice,
yt = wt.test(e.attachEvent),
Vt = Mt && !/\n|true/.test(Mt + yt);
c.prototype = l.prototype;
var Rt = {
};
!function () {
var e = {
  0: 1,
  length: 1
};
Rt.fastBind = Mt && !Vt,
Rt.spliceObjects = (bt.splice.call(e, 0, 1), !e[0])
}(1),
l.templateSettings = {
escape: /<%-([\s\S]+?)%>/g,
evaluate: /<%([\s\S]+?)%>/g,
interpolate: /<%=([\s\S]+?)%>/g,
variable: ''
},
Lt || (d = function (e) {
if (S(e)) {
  s.prototype = e;
  var t = new s;
  s.prototype = Z
}
return t || {
}
}),
g(arguments) || (g = function (e) {
return e ? At.call(e, 'callee')  : Q
});
var Ft = Gt || function (e) {
return e ? 'object' == typeof e && Nt.call(e) == st : Q
},
zt = Pt ? function (e) {
return S(e) ? Pt(e)  : [
]
}
 : r,
qt = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
'\'': '&#39;'
},
Ut = b(qt);
k(/x/) && (k = function (e) {
return 'function' == typeof e && '[object Function]' == Nt.call(e)
}),
l.after = function (e, t) {
return 1 > e ? t()  : function () {
  return 1 > --e ? t.apply(this, arguments)  : void 0
}
},
l.bind = H,
l.bindAll = function (e) {
for (var t = arguments.length > 1 ? _t.apply(bt, $t.call(arguments, 1))  : y(e), n = - 1, r = t.length; r > ++n; ) {
  var i = t[n];
  e[i] = H(e[i], e)
}
return e
},
l.compact = function (e) {
for (var t = - 1, n = e ? e.length : 0, r = [
]; n > ++t; ) {
  var i = e[t];
  i && r.push(i)
}
return r
},
l.compose = function () {
var e = arguments;
return function () {
  for (var t = arguments, n = e.length; n--; ) t = [
    e[n].apply(this, t)
  ];
  return t[0]
}
},
l.countBy = function (e, t, n) {
var r = {
};
return t = X(t, n),
L(e, function (e, n, i) {
  n = t(e, n, i) + '',
  At.call(r, n) ? r[n]++ : r[n] = 1
}),
r
},
l.debounce = function (e, t, n) {
function r() {
  s = Z,
  n || (a = e.apply(o, i))
}
var i,
a,
o,
s = Z;
return function () {
  var l = n && !s;
  return i = arguments,
  o = this,
  St(s),
  s = Tt(r, t),
  l && (a = e.apply(o, i)),
  a
}
},
l.defaults = m,
l.defer = function (e) {
var t = $t.call(arguments, 1);
return Tt(function () {
  e.apply(void 0, t)
}, 1)
},
l.delay = function (e, t) {
var n = $t.call(arguments, 2);
return Tt(function () {
  e.apply(void 0, n)
}, t)
},
l.difference = $,
l.filter = N,
l.flatten = R,
l.forEach = L,
l.functions = y,
l.groupBy = function (e, t, n) {
var r = {
};
return t = X(t, n),
L(e, function (e, n, i) {
  n = t(e, n, i) + '',
  (At.call(r, n) ? r[n] : r[n] = [
  ]).push(e)
}),
r
},
l.initial = function (e, t, n) {
if (!e) return [];
var r = 0,
i = e.length;
if ('number' != typeof t && t != Z) {
  var a = i;
  for (t = X(t, n); a-- && t(e[a], a, e); ) r++
} else r = t == Z || n ? 1 : t || r;
return $t.call(e, 0, Dt(jt(0, i - r), i))
},
l.intersection = function (e) {
var t = arguments,
n = t.length,
r = - 1,
i = h(),
a = e ? e.length : 0,
o = [
];
e: for (; a > ++r; ) {
  var s = e[r];
  if (0 > i(o, s)) {
    for (var l = n; --l; ) if (0 > i(t[l], s)) continue e;
    o.push(s)
  }
}
return o
},
l.invert = b,
l.invoke = function (e, t) {
var n = $t.call(arguments, 2),
r = - 1,
i = 'function' == typeof t,
a = e ? e.length : 0,
o = Array('number' == typeof a ? a : 0);
return L(e, function (e) {
  o[++r] = (i ? t : e[t]).apply(e, n)
}),
o
},
l.keys = zt,
l.map = G,
l.max = I,
l.memoize = function (e, t) {
var n = {
};
return function () {
  var r = tt + (t ? t.apply(this, arguments)  : arguments[0]);
  return At.call(n, r) ? n[r] : n[r] = e.apply(this, arguments)
}
},
l.min = function (e, t, n) {
var r = 1 / 0,
i = r,
a = - 1,
o = e ? e.length : 0;
if (t || 'number' != typeof o) t = X(t, n),
L(e, function (e, n, a) {
  n = t(e, n, a),
  r > n && (r = n, i = e)
});
 else for (; o > ++a; ) n = e[a],
i > n && (i = n);
return i
},
l.omit = function (e) {
var t = h(),
r = _t.apply(bt, $t.call(arguments, 1)),
i = {
};
return n(e, function (e, n) {
  0 > t(r, n) && (i[n] = e)
}),
i
},
l.once = function (e) {
var t,
n;
return function () {
  return t ? n : (t = K, n = e.apply(this, arguments), e = Z, n)
}
},
l.pairs = function (e) {
for (var t = - 1, n = zt(e), r = n.length, i = Array(r); r > ++t; ) {
  var a = n[t];
  i[t] = [
    a,
    e[a]
  ]
}
return i
},
l.partial = function (e) {
return u(e, $t.call(arguments, 1))
},
l.pick = function (e) {
for (var t = - 1, n = _t.apply(bt, $t.call(arguments, 1)), r = n.length, i = {
}; r > ++t; ) {
  var a = n[t];
  a in e && (i[a] = e[a])
}
return i
},
l.pluck = O,
l.range = function (e, t, n) {
e = + e || 0,
n = + n || 1,
t == Z && (t = e, e = 0);
var r = - 1;
t = jt(0, kt((t - e) / n));
for (var i = Array(t); t > ++r; ) i[r] = e,
e += n;
return i
},
l.reject = function (e, t, n) {
return t = X(t, n),
N(e, function (e, n, r) {
  return !t(e, n, r)
})
},
l.rest = z,
l.shuffle = function (e) {
var t = - 1,
n = e ? e.length : 0,
r = Array('number' == typeof n ? n : 0);
return L(e, function (e) {
  var n = Et(Bt() * (++t + 1));
  r[t] = r[n],
  r[n] = e
}),
r
},
l.sortBy = function (e, t, n) {
var r = - 1,
i = e ? e.length : 0,
o = Array('number' == typeof i ? i : 0);
for (t = X(t, n), L(e, function (e, n, i) {
  o[++r] = {
    l: t(e, n, i),
    m: r,
    n: e
  }
}), i = o.length, o.sort(a); i--; ) o[i] = o[i].n;
return o
},
l.tap = function (e, t) {
return t(e),
e
},
l.throttle = function (e, t) {
function n() {
  o = new Date,
  s = Z,
  i = e.apply(a, r)
}
var r,
i,
a,
o = 0,
s = Z;
return function () {
  var l = new Date,
  c = t - (l - o);
  return r = arguments,
  a = this,
  c > 0 ? s || (s = Tt(n, c))  : (St(s), s = Z, o = l, i = e.apply(a, r)),
  i
}
},
l.times = function (e, t, n) {
for (var r = - 1, i = Array(e > - 1 ? e : 0); e > ++r; ) i[r] = t.call(n, r);
return i
},
l.toArray = function (e) {
return Ft(e) ? $t.call(e)  : e && 'number' == typeof e.length ? G(e)  : A(e)
},
l.union = function (e) {
return Ft(e) || (arguments[0] = e ? $t.call(e)  : bt),
U(_t.apply(bt, arguments))
},
l.uniq = U,
l.values = A,
l.where = B,
l.without = function (e) {
return $(e, $t.call(arguments, 1))
},
l.wrap = function (e, t) {
return function () {
  var n = [
    e
  ];
  return Ct.apply(n, arguments),
  t.apply(this, n)
}
},
l.zip = function (e) {
for (var t = - 1, n = e ? I(O(arguments, 'length'))  : 0, r = Array(0 > n ? 0 : n); n > ++t; ) r[t] = O(arguments, t);
return r
},
l.collect = G,
l.drop = z,
l.each = L,
l.extend = v,
l.methods = y,
l.object = function (e, t) {
for (var n = - 1, r = e ? e.length : 0, i = {
}; r > ++n; ) {
  var a = e[n];
  t ? i[a] = t[n] : i[a[0]] = a[1]
}
return i
},
l.select = N,
l.tail = z,
l.unique = U,
l.chain = function (e) {
return e = new c(e),
e.__chain__ = K,
e
},
l.clone = function (e) {
return S(e) ? Ft(e) ? $t.call(e)  : v({
}, e)  : e
},
l.contains = C,
l.escape = function (e) {
return e == Z ? '' : (e + '').replace(it, f)
},
l.every = T,
l.find = M,
l.has = function (e, t) {
return e ? At.call(e, t)  : Q
},
l.identity = Y,
l.indexOf = F,
l.isArguments = g,
l.isArray = Ft,
l.isBoolean = function (e) {
return e === K || e === Q || Nt.call(e) == lt
},
l.isDate = function (e) {
return e ? 'object' == typeof e && Nt.call(e) == ct : Q
},
l.isElement = function (e) {
return e ? 1 === e.nodeType : Q
},
l.isEmpty = x,
l.isEqual = w,
l.isFinite = function (e) {
return It(e) && !Ot(parseFloat(e))
},
l.isFunction = k,
l.isNaN = function (e) {
return _(e) && e != + e
},
l.isNull = function (e) {
return e === Z
},
l.isNumber = _,
l.isObject = S,
l.isRegExp = function (e) {
return !(!e || !pt[typeof e]) && Nt.call(e) == ft
},
l.isString = E,
l.isUndefined = function (e) {
return e === void 0
},
l.lastIndexOf = function (e, t, n) {
var r = e ? e.length : 0;
for ('number' == typeof n && (r = (0 > n ? jt(0, r + n)  : Dt(n, r - 1)) + 1); r--; ) if (e[r] === t) return r;
return - 1
},
l.mixin = W,
l.noConflict = function () {
return e._ = xt,
this
},
l.random = function (e, t) {
e == Z && t == Z && (t = 1),
e = + e || 0,
t == Z ? (t = e, e = 0)  : t = + t || 0;
var n = Bt();
return e % 1 || t % 1 ? e + Dt(n * (t - e + parseFloat('1e-' + ((n + '').length - 1))), t)  : e + Et(n * (t - e + 1))
},
l.reduce = P,
l.reduceRight = j,
l.result = function (e, t) {
var n = e ? e[t] : Z;
return k(n) ? e[t]()  : n
},
l.size = function (e) {
var t = e ? e.length : 0;
return 'number' == typeof t ? t : zt(e).length
},
l.some = D,
l.sortedIndex = q,
l.template = function (e, t, n) {
var r = l.templateSettings;
e || (e = ''),
n = m({
}, n, r);
var i = 0,
a = '__p+=\'',
r = n.variable;
e.replace(RegExp((n.escape || rt).source + '|' + (n.interpolate || rt).source + '|' + (n.evaluate || rt).source + '|$', 'g'), function (t, n, r, s, l) {
  return a += e.slice(i, l).replace(at, o),
  n && (a += '\'+_[\'escape\'](' + n + ')+\''),
  s && (a += '\';' + s + ';__p+=\''),
  r && (a += '\'+((__t=(' + r + '))==null?\'\':__t)+\''),
  i = l + t.length,
  t
}),
a += '\';\n',
r || (r = 'obj', a = 'with(' + r + '||{}){' + a + '}'),
a = 'function(' + r + '){var __t,__p=\'\',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,\'\')}' + a + 'return __p}';
try {
  var s = Function('_', 'return ' + a) (l)
} catch (c) {
  throw c.source = a,
  c
}
return t ? s(t)  : (s.source = a, s)
},
l.unescape = function (e) {
return e == Z ? '' : (e + '').replace(nt, p)
},
l.uniqueId = function (e) {
var t = ++J + '';
return e ? e + t : t
},
l.all = T,
l.any = D,
l.detect = M,
l.findWhere = function (e, t) {
return B(e, t, K)
},
l.foldl = P,
l.foldr = j,
l.include = C,
l.inject = P,
l.first = V,
l.last = function (e, t, n) {
if (e) {
  var r = 0,
  i = e.length;
  if ('number' != typeof t && t != Z) {
    var a = i;
    for (t = X(t, n); a-- && t(e[a], a, e); ) r++
  } else if (r = t, r == Z || n) return e[i - 1];
  return $t.call(e, jt(0, i - r))
}
},
l.take = V,
l.head = V,
l.VERSION = '1.3.1',
W(l),
l.prototype.chain = function () {
return this.__chain__ = K,
this
},
l.prototype.value = function () {
return this.__wrapped__
},
L('pop push reverse shift sort splice unshift'.split(' '), function (e) {
var t = bt[e];
l.prototype[e] = function () {
  var e = this.__wrapped__;
  return t.apply(e, arguments),
  !Rt.spliceObjects && 0 === e.length && delete e[0],
  this
}
}),
L(['concat',
'join',
'slice'], function (e) {
var t = bt[e];
l.prototype[e] = function () {
  var e = t.apply(this.__wrapped__, arguments);
  return this.__chain__ && (e = new c(e), e.__chain__ = K),
  e
}
}),
'function' == typeof define && 'object' == typeof define.amd && define.amd ? (e._ = l, define(function () {
return l
}))  : vt && !vt.nodeType ? mt ? (mt.exports = l)._ = l : vt._ = l : e._ = l
}(this),
function (e) {
e.fn.hoverIntent = function (t, n, r) {
var i = {
  interval: 100,
  sensitivity: 7,
  timeout: 0
};
i = 'object' == typeof t ? e.extend(i, t)  : e.isFunction(n) ? e.extend(i, {
  over: t,
  out: n,
  selector: r
})  : e.extend(i, {
  over: t,
  out: t,
  selector: n
});
var a,
o,
s,
l,
c = function (e) {
  a = e.pageX,
  o = e.pageY
},
u = function (t, n) {
  return n.hoverIntent_t = clearTimeout(n.hoverIntent_t),
  Math.abs(s - a) + Math.abs(l - o) < i.sensitivity ? (e(n).off('mousemove.hoverIntent', c), n.hoverIntent_s = 1, i.over.apply(n, [
    t
  ]))  : (s = a, l = o, n.hoverIntent_t = setTimeout(function () {
    u(t, n)
  }, i.interval), void 0)
},
d = function (e, t) {
  return t.hoverIntent_t = clearTimeout(t.hoverIntent_t),
  t.hoverIntent_s = 0,
  i.out.apply(t, [
    e
  ])
},
f = function (t) {
  var n = jQuery.extend({
  }, t),
  r = this;
  r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t)),
  'mouseenter' == t.type ? (s = n.pageX, l = n.pageY, e(r).on('mousemove.hoverIntent', c), 1 != r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () {
    u(n, r)
  }, i.interval)))  : (e(r).off('mousemove.hoverIntent', c), 1 == r.hoverIntent_s && (r.hoverIntent_t = setTimeout(function () {
    d(n, r)
  }, i.timeout)))
};
return this.on({
  'mouseenter.hoverIntent': f,
  'mouseleave.hoverIntent': f
}, i.selector)
}
}(jQuery),
function (e) {
'function' == typeof define && define.amd ? define(['jquery'], e)  : 'object' == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
function t(t) {
var i,
a = t || window.event,
o = [
].slice.call(arguments, 1),
s = 0,
l = 0,
c = 0,
u = 0,
d = 0;
return t = e.event.fix(a),
t.type = 'mousewheel',
a.wheelDelta && (s = a.wheelDelta),
a.detail && (s = - 1 * a.detail),
a.deltaY && (c = - 1 * a.deltaY, s = c),
a.deltaX && (l = a.deltaX, s = - 1 * l),
void 0 !== a.wheelDeltaY && (c = a.wheelDeltaY),
void 0 !== a.wheelDeltaX && (l = - 1 * a.wheelDeltaX),
u = Math.abs(s),
(!n || n > u) && (n = u),
d = Math.max(Math.abs(c), Math.abs(l)),
(!r || r > d) && (r = d),
i = s > 0 ? 'floor' : 'ceil',
s = Math[i](s / n),
l = Math[i](l / r),
c = Math[i](c / r),
o.unshift(t, s, l, c),
(e.event.dispatch || e.event.handle).apply(this, o)
}
var n,
r,
i = [
'wheel',
'mousewheel',
'DOMMouseScroll',
'MozMousePixelScroll'
],
a = 'onwheel' in document || document.documentMode >= 9 ? [
'wheel'
] : [
'mousewheel',
'DomMouseScroll',
'MozMousePixelScroll'
];
if (e.event.fixHooks) for (var o = i.length; o; ) e.event.fixHooks[i[--o]] = e.event.mouseHooks;
e.event.special.mousewheel = {
setup: function () {
  if (this.addEventListener) for (var e = a.length; e; ) this.addEventListener(a[--e], t, !1);
   else this.onmousewheel = t
},
teardown: function () {
  if (this.removeEventListener) for (var e = a.length; e; ) this.removeEventListener(a[--e], t, !1);
   else this.onmousewheel = null
}
},
e.fn.extend({
mousewheel: function (e) {
  return e ? this.bind('mousewheel', e)  : this.trigger('mousewheel')
},
unmousewheel: function (e) {
  return this.unbind('mousewheel', e)
}
})
}),
function (e) {
'use strict';
var t = e.HTMLCanvasElement && e.HTMLCanvasElement.prototype,
n = e.Blob && function () {
try {
  return Boolean(new Blob)
} catch (e) {
  return !1
}
}(),
r = n && e.Uint8Array && function () {
try {
  return 100 === new Blob([new Uint8Array(100)]).size
} catch (e) {
  return !1
}
}(),
i = e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder,
a = (n || i) && e.atob && e.ArrayBuffer && e.Uint8Array && function (e) {
var t,
a,
o,
s,
l,
c;
for (t = e.split(',') [0].indexOf('base64') >= 0 ? atob(e.split(',') [1])  : decodeURIComponent(e.split(',') [1]), a = new ArrayBuffer(t.length), o = new Uint8Array(a), s = 0; t.length > s; s += 1) o[s] = t.charCodeAt(s);
return l = e.split(',') [0].split(':') [1].split(';') [0],
n ? new Blob([r ? o : a], {
  type: l
})  : (c = new i, c.append(a), c.getBlob(l))
};
e.HTMLCanvasElement && !t.toBlob && (t.mozGetAsFile ? t.toBlob = function (e, n, r) {
r && t.toDataURL && a ? e(a(this.toDataURL(n, r)))  : e(this.mozGetAsFile('blob', n))
}
 : t.toDataURL && a && (t.toBlob = function (e, t, n) {
e(a(this.toDataURL(t, n)))
})),
'function' == typeof define && define.amd ? define(function () {
return a
})  : e.dataURLtoBlob = a
}(this),
function (e, t) {
'use strict';
function n() {
if (!r.READY) {
  r.event.determineEventTypes();
  for (var e in r.gestures) r.gestures.hasOwnProperty(e) && r.detection.register(r.gestures[e]);
  r.event.onTouch(r.DOCUMENT, r.EVENT_MOVE, r.detection.detect),
  r.event.onTouch(r.DOCUMENT, r.EVENT_END, r.detection.detect),
  r.READY = !0
}
}
var r = function (e, t) {
return new r.Instance(e, t || {
})
};
r.defaults = {
stop_browser_behavior: {
  userSelect: 'none',
  touchAction: 'none',
  touchCallout: 'none',
  contentZooming: 'none',
  userDrag: 'none',
  tapHighlightColor: 'rgba(0,0,0,0)'
}
},
r.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled,
r.HAS_TOUCHEVENTS = 'ontouchstart' in e,
r.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i,
r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && navigator.userAgent.match(r.MOBILE_REGEX),
r.EVENT_TYPES = {
},
r.DIRECTION_DOWN = 'down',
r.DIRECTION_LEFT = 'left',
r.DIRECTION_UP = 'up',
r.DIRECTION_RIGHT = 'right',
r.POINTER_MOUSE = 'mouse',
r.POINTER_TOUCH = 'touch',
r.POINTER_PEN = 'pen',
r.EVENT_START = 'start',
r.EVENT_MOVE = 'move',
r.EVENT_END = 'end',
r.DOCUMENT = document,
r.plugins = {
},
r.READY = !1,
r.Instance = function (e, t) {
var i = this;
return n(),
this.element = e,
this.enabled = !0,
this.options = r.utils.extend(r.utils.extend({
}, r.defaults), t || {
}),
this.options.stop_browser_behavior && r.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior),
r.event.onTouch(e, r.EVENT_START, function (e) {
  i.enabled && r.detection.startDetect(i, e)
}),
this
},
r.Instance.prototype = {
on: function (e, t) {
  for (var n = e.split(' '), r = 0; n.length > r; r++) this.element.addEventListener(n[r], t, !1);
  return this
},
off: function (e, t) {
  for (var n = e.split(' '), r = 0; n.length > r; r++) this.element.removeEventListener(n[r], t, !1);
  return this
},
trigger: function (e, t) {
  var n = r.DOCUMENT.createEvent('Event');
  n.initEvent(e, !0, !0),
  n.gesture = t;
  var i = this.element;
  return r.utils.hasParent(t.target, i) && (i = t.target),
  i.dispatchEvent(n),
  this
},
enable: function (e) {
  return this.enabled = e,
  this
}
};
var i = null,
a = !1,
o = !1;
r.event = {
bindDom: function (e, t, n) {
  for (var r = t.split(' '), i = 0; r.length > i; i++) e.addEventListener(r[i], n, !1)
},
onTouch: function (e, t, n) {
  var s = this;
  this.bindDom(e, r.EVENT_TYPES[t], function (l) {
    var c = l.type.toLowerCase();
    if (!c.match(/mouse/) || !o) {
      (c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === l.which) && (a = !0),
      c.match(/touch|pointer/) && (o = !0);
      var u = 0;
      a && (r.HAS_POINTEREVENTS && t != r.EVENT_END ? u = r.PointerEvent.updatePointer(t, l)  : c.match(/touch/) ? u = l.touches.length : o || (u = c.match(/up/) ? 0 : 1), u > 0 && t == r.EVENT_END ? t = r.EVENT_MOVE : u || (t = r.EVENT_END), u || null === i ? i = l : l = i, n.call(r.detection, s.collectEventData(e, t, l)), r.HAS_POINTEREVENTS && t == r.EVENT_END && (u = r.PointerEvent.updatePointer(t, l))),
      u || (i = null, a = !1, o = !1, r.PointerEvent.reset())
    }
  })
},
determineEventTypes: function () {
  var e;
  e = r.HAS_POINTEREVENTS ? r.PointerEvent.getEvents()  : r.NO_MOUSEEVENTS ? [
    'touchstart',
    'touchmove',
    'touchend touchcancel'
  ] : [
    'touchstart mousedown',
    'touchmove mousemove',
    'touchend touchcancel mouseup'
  ],
  r.EVENT_TYPES[r.EVENT_START] = e[0],
  r.EVENT_TYPES[r.EVENT_MOVE] = e[1],
  r.EVENT_TYPES[r.EVENT_END] = e[2]
},
getTouchList: function (e) {
  return r.HAS_POINTEREVENTS ? r.PointerEvent.getTouchList()  : e.touches ? e.touches : [
    {
      identifier: 1,
      pageX: e.pageX,
      pageY: e.pageY,
      target: e.target
    }
  ]
},
collectEventData: function (e, t, n) {
  var i = this.getTouchList(n, t),
  a = r.POINTER_TOUCH;
  return (n.type.match(/mouse/) || r.PointerEvent.matchType(r.POINTER_MOUSE, n)) && (a = r.POINTER_MOUSE),
  {
    center: r.utils.getCenter(i),
    timeStamp: (new Date).getTime(),
    target: n.target,
    touches: i,
    eventType: t,
    pointerType: a,
    srcEvent: n,
    preventDefault: function () {
      this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(),
      this.srcEvent.preventDefault && this.srcEvent.preventDefault()
    },
    stopPropagation: function () {
      this.srcEvent.stopPropagation()
    },
    stopDetect: function () {
      return r.detection.stopDetect()
    }
  }
}
},
r.PointerEvent = {
pointers: {
},
getTouchList: function () {
  var e = this,
  t = [
  ];
  return Object.keys(e.pointers).sort().forEach(function (n) {
    t.push(e.pointers[n])
  }),
  t
},
updatePointer: function (e, t) {
  return e == r.EVENT_END ? this.pointers = {
  }
   : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t),
  Object.keys(this.pointers).length
},
matchType: function (e, t) {
  if (!t.pointerType) return !1;
  var n = {
  };
  return n[r.POINTER_MOUSE] = t.pointerType == t.MSPOINTER_TYPE_MOUSE || t.pointerType == r.POINTER_MOUSE,
  n[r.POINTER_TOUCH] = t.pointerType == t.MSPOINTER_TYPE_TOUCH || t.pointerType == r.POINTER_TOUCH,
  n[r.POINTER_PEN] = t.pointerType == t.MSPOINTER_TYPE_PEN || t.pointerType == r.POINTER_PEN,
  n[e]
},
getEvents: function () {
  return ['pointerdown MSPointerDown',
  'pointermove MSPointerMove',
  'pointerup pointercancel MSPointerUp MSPointerCancel']
},
reset: function () {
  this.pointers = {
  }
}
},
r.utils = {
extend: function (e, n, r) {
  for (var i in n) e[i] !== t && r || (e[i] = n[i]);
  return e
},
hasParent: function (e, t) {
  for (; e; ) {
    if (e == t) return !0;
    e = e.parentNode
  }
  return !1
},
getCenter: function (e) {
  for (var t = [
  ], n = [
  ], r = 0, i = e.length; i > r; r++) t.push(e[r].pageX),
  n.push(e[r].pageY);
  return {
    pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
    pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
  }
},
getVelocity: function (e, t, n) {
  return {
    x: Math.abs(t / e) || 0,
    y: Math.abs(n / e) || 0
  }
},
getAngle: function (e, t) {
  var n = t.pageY - e.pageY,
  r = t.pageX - e.pageX;
  return 180 * Math.atan2(n, r) / Math.PI
},
getDirection: function (e, t) {
  var n = Math.abs(e.pageX - t.pageX),
  i = Math.abs(e.pageY - t.pageY);
  return n >= i ? e.pageX - t.pageX > 0 ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? r.DIRECTION_UP : r.DIRECTION_DOWN
},
getDistance: function (e, t) {
  var n = t.pageX - e.pageX,
  r = t.pageY - e.pageY;
  return Math.sqrt(n * n + r * r)
},
getScale: function (e, t) {
  return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1])  : 1
},
getRotation: function (e, t) {
  return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0])  : 0
},
isVertical: function (e) {
  return e == r.DIRECTION_UP || e == r.DIRECTION_DOWN
},
stopDefaultBrowserBehavior: function (e, t) {
  var n,
  r = [
    'webkit',
    'khtml',
    'moz',
    'ms',
    'o',
    ''
  ];
  if (t && e.style) {
    for (var i = 0; r.length > i; i++) for (var a in t) t.hasOwnProperty(a) && (n = a, r[i] && (n = r[i] + n.substring(0, 1).toUpperCase() + n.substring(1)), e.style[n] = t[a]);
    'none' == t.userSelect && (e.onselectstart = function () {
      return !1
    })
  }
}
},
r.detection = {
gestures: [
],
current: null,
previous: null,
stopped: !1,
startDetect: function (e, t) {
  this.current || (this.stopped = !1, this.current = {
    inst: e,
    startEvent: r.utils.extend({
    }, t),
    lastEvent: !1,
    name: ''
  }, this.detect(t))
},
detect: function (e) {
  if (this.current && !this.stopped) {
    e = this.extendEventData(e);
    for (var t = this.current.inst.options, n = 0, i = this.gestures.length; i > n; n++) {
      var a = this.gestures[n];
      if (!this.stopped && t[a.name] !== !1 && a.handler.call(a, e, this.current.inst) === !1) {
        this.stopDetect();
        break
      }
    }
    return this.current && (this.current.lastEvent = e),
    e.eventType == r.EVENT_END && !e.touches.length - 1 && this.stopDetect(),
    e
  }
},
stopDetect: function () {
  this.previous = r.utils.extend({
  }, this.current),
  this.current = null,
  this.stopped = !0
},
extendEventData: function (e) {
  var t = this.current.startEvent;
  if (t && (e.touches.length != t.touches.length || e.touches === t.touches)) {
    t.touches = [
    ];
    for (var n = 0, i = e.touches.length; i > n; n++) t.touches.push(r.utils.extend({
    }, e.touches[n]))
  }
  var a = e.timeStamp - t.timeStamp,
  o = e.center.pageX - t.center.pageX,
  s = e.center.pageY - t.center.pageY,
  l = r.utils.getVelocity(a, o, s);
  return r.utils.extend(e, {
    deltaTime: a,
    deltaX: o,
    deltaY: s,
    velocityX: l.x,
    velocityY: l.y,
    distance: r.utils.getDistance(t.center, e.center),
    angle: r.utils.getAngle(t.center, e.center),
    direction: r.utils.getDirection(t.center, e.center),
    scale: r.utils.getScale(t.touches, e.touches),
    rotation: r.utils.getRotation(t.touches, e.touches),
    startEvent: t
  }),
  e
},
register: function (e) {
  var n = e.defaults || {
  };
  return n[e.name] === t && (n[e.name] = !0),
  r.utils.extend(r.defaults, n, !0),
  e.index = e.index || 1000,
  this.gestures.push(e),
  this.gestures.sort(function (e, t) {
    return e.index < t.index ? - 1 : e.index > t.index ? 1 : 0
  }),
  this.gestures
}
},
r.gestures = r.gestures || {
},
r.gestures.Hold = {
name: 'hold',
index: 10,
defaults: {
  hold_timeout: 500,
  hold_threshold: 1
},
timer: null,
handler: function (e, t) {
  switch (e.eventType) {
    case r.EVENT_START:
      clearTimeout(this.timer),
      r.detection.current.name = this.name,
      this.timer = setTimeout(function () {
        'hold' == r.detection.current.name && t.trigger('hold', e)
      }, t.options.hold_timeout);
      break;
    case r.EVENT_MOVE:
      e.distance > t.options.hold_threshold && clearTimeout(this.timer);
      break;
    case r.EVENT_END:
      clearTimeout(this.timer)
  }
}
},
r.gestures.Tap = {
name: 'tap',
index: 100,
defaults: {
  tap_max_touchtime: 250,
  tap_max_distance: 10,
  tap_always: !0,
  doubletap_distance: 20,
  doubletap_interval: 300
},
handler: function (e, t) {
  if (e.eventType == r.EVENT_END) {
    var n = r.detection.previous,
    i = !1;
    if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance) return;
    n && 'tap' == n.name && e.timeStamp - n.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger('doubletap', e), i = !0),
    (!i || t.options.tap_always) && (r.detection.current.name = 'tap', t.trigger(r.detection.current.name, e))
  }
}
},
r.gestures.Swipe = {
name: 'swipe',
index: 40,
defaults: {
  swipe_max_touches: 1,
  swipe_velocity: 0.7
},
handler: function (e, t) {
  if (e.eventType == r.EVENT_END) {
    if (t.options.swipe_max_touches > 0 && e.touches.length > t.options.swipe_max_touches) return;
    (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
  }
}
},
r.gestures.Drag = {
name: 'drag',
index: 50,
defaults: {
  drag_min_distance: 10,
  drag_max_touches: 1,
  drag_block_horizontal: !1,
  drag_block_vertical: !1,
  drag_lock_to_axis: !1,
  drag_lock_min_distance: 25
},
triggered: !1,
handler: function (e, n) {
  if (r.detection.current.name != this.name && this.triggered) return n.trigger(this.name + 'end', e),
  this.triggered = !1,
  t;
  if (!(n.options.drag_max_touches > 0 && e.touches.length > n.options.drag_max_touches)) switch (e.eventType) {
    case r.EVENT_START:
      this.triggered = !1;
      break;
    case r.EVENT_MOVE:
      if (e.distance < n.options.drag_min_distance && r.detection.current.name != this.name) return;
      r.detection.current.name = this.name,
      (r.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
      var i = r.detection.current.lastEvent.direction;
      e.drag_locked_to_axis && i !== e.direction && (e.direction = r.utils.isVertical(i) ? 0 > e.deltaY ? r.DIRECTION_UP : r.DIRECTION_DOWN : 0 > e.deltaX ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT),
      this.triggered || (n.trigger(this.name + 'start', e), this.triggered = !0),
      n.trigger(this.name, e),
      n.trigger(this.name + e.direction, e),
      (n.options.drag_block_vertical && r.utils.isVertical(e.direction) || n.options.drag_block_horizontal && !r.utils.isVertical(e.direction)) && e.preventDefault();
      break;
    case r.EVENT_END:
      this.triggered && n.trigger(this.name + 'end', e),
      this.triggered = !1
  }
}
},
r.gestures.Transform = {
name: 'transform',
index: 45,
defaults: {
  transform_min_scale: 0.01,
  transform_min_rotation: 1,
  transform_always_block: !1
},
triggered: !1,
handler: function (e, n) {
  if (r.detection.current.name != this.name && this.triggered) return n.trigger(this.name + 'end', e),
  this.triggered = !1,
  t;
  if (!(2 > e.touches.length)) switch (n.options.transform_always_block && e.preventDefault(), e.eventType) {
    case r.EVENT_START:
      this.triggered = !1;
      break;
    case r.EVENT_MOVE:
      var i = Math.abs(1 - e.scale),
      a = Math.abs(e.rotation);
      if (n.options.transform_min_scale > i && n.options.transform_min_rotation > a) return;
      r.detection.current.name = this.name,
      this.triggered || (n.trigger(this.name + 'start', e), this.triggered = !0),
      n.trigger(this.name, e),
      a > n.options.transform_min_rotation && n.trigger('rotate', e),
      i > n.options.transform_min_scale && (n.trigger('pinch', e), n.trigger('pinch' + (1 > e.scale ? 'in' : 'out'), e));
      break;
    case r.EVENT_END:
      this.triggered && n.trigger(this.name + 'end', e),
      this.triggered = !1
  }
}
},
r.gestures.Touch = {
name: 'touch',
index: - 1 / 0,
defaults: {
  prevent_default: !1,
  prevent_mouseevents: !1
},
handler: function (e, n) {
  return n.options.prevent_mouseevents && e.pointerType == r.POINTER_MOUSE ? (e.stopDetect(), t)  : (n.options.prevent_default && e.preventDefault(), e.eventType == r.EVENT_START && n.trigger(this.name, e), t)
}
},
r.gestures.Release = {
name: 'release',
index: 1 / 0,
handler: function (e, t) {
  e.eventType == r.EVENT_END && t.trigger(this.name, e)
}
},
'object' == typeof module && 'object' == typeof module.exports ? module.exports = r : (e.Hammer = r, 'function' == typeof e.define && e.define.amd && e.define('hammer', [
], function () {
return r
}))
}(this),
function (e, t) {
'use strict';
e !== t && (Hammer.event.bindDom = function (n, r, i) {
e(n).on(r, function (e) {
  var n = e.originalEvent || e;
  n.pageX === t && (n.pageX = e.pageX, n.pageY = e.pageY),
  n.target || (n.target = e.target),
  n.which === t && (n.which = n.button),
  n.preventDefault || (n.preventDefault = e.preventDefault),
  n.stopPropagation || (n.stopPropagation = e.stopPropagation),
  i.call(this, n)
})
}, Hammer.Instance.prototype.on = function (t, n) {
return e(this.element).on(t, n)
}, Hammer.Instance.prototype.off = function (t, n) {
return e(this.element).off(t, n)
}, Hammer.Instance.prototype.trigger = function (t, n) {
var r = e(this.element);
return r.has(n.target).length && (r = e(n.target)),
r.trigger({
  type: t,
  gesture: n
})
}, e.fn.hammer = function (t) {
return this.each(function () {
  var n = e(this),
  r = n.data('hammer');
  r ? r && t && Hammer.utils.extend(r.options, t)  : n.data('hammer', new Hammer(this, t || {
  }))
})
})
}(window.jQuery || window.Zepto);
var attributeWithReferences = [
'fill',
'stroke',
'filter',
'marker-start',
'marker-mid',
'marker-end',
'clip-path',
'mask',
'href'
],
defTagChildren = [
'lineargradient',
'radialgradient',
'pattern',
'filter'
];
window.domUntils = DomUntils(window.jQuery, window._),
window.svgUtils = function (e) {
'use strict';
var t = {
};
return t.imageToSVG = function (t) {
var n = t.parentElement,
r = '<svg></svg>',
i = e(addSVGString(n, r)),
a = e(t).prop('attributes');
return e.each(a, function () {
  i.attr(this.name, this.value)
}),
e.get(e(t).attr('xlink:href'), [
], function (n) {
  i.attr('name', e(t).attr('cbs:name')),
  i.attr('depth', e(t).attr('cbs:depth')),
  e(t).attr('x') && (i.attr('x', e(t).attr('x')), i.attr('y', e(t).attr('y'))),
  i.attr('width', e(t).attr('width')),
  i.attr('height', e(t).attr('height')),
  i.append(e(n).children()),
  e(t).before(e(i).remove()),
  e(t).remove()
})
},
t.absolutizePath = function (e) {
var t,
n,
r,
i,
a,
o,
s,
l,
c,
u,
d,
f,
h = e.pathSegList,
p = h.numberOfItems,
g = 'createSVGPathSegMovetoAbs',
v = 'createSVGPathSegLinetoAbs',
m = 'createSVGPathSegLinetoHorizontalAbs',
y = 'createSVGPathSegLinetoVerticalAbs',
b = 'createSVGPathSegCurvetoCubicAbs',
x = 'createSVGPathSegCurvetoCubicSmoothAbs',
w = 'createSVGPathSegCurvetoQuadraticAbs',
k = 'createSVGPathSegCurvetoQuadraticSmoothAbs',
S = 'createSVGPathSegArcAbs';
for (r = i = a = 0; p > a; a++) {
  if (t = h.getItem(a), o = t.pathSegTypeAsLetter, n = void 0, /[MLHVCSQTA]/.test(o)) 'x' in t && (r = t.x),
  'y' in t && (i = t.y);
   else {
    switch ('x1' in t && (c = r + t.x1), 'x2' in t && (d = r + t.x2), 'y1' in t && (u = i + t.y1), 'y2' in t && (f = i + t.y2), 'x' in t && (r += t.x), 'y' in t && (i += t.y), o) {
      case 'm':
        n = e[g](r, i);
        break;
      case 'l':
        n = e[v](r, i);
        break;
      case 'h':
        n = e[m](r);
        break;
      case 'v':
        n = e[y](i);
        break;
      case 'c':
        n = e[b](r, i, c, u, d, f);
        break;
      case 's':
        n = e[x](r, i, d, f);
        break;
      case 'q':
        n = e[w](r, i, c, u);
        break;
      case 't':
        n = e[k](r, i);
        break;
      case 'a':
        n = e[S](r, i, t.r1, t.r2, t.angle, t.largeArcFlag, t.sweepFlag);
        break;
      case 'z':
      case 'Z':
        r = s,
        i = l
    }
    n && h.replaceItem(n, a)
  }('M' == o || 'm' == o) && (s = r, l = i)
}
},
t.pathify = function (e, t) {
function n() {
  var t = + e.getAttribute('x1'),
  n = + e.getAttribute('y1'),
  r = + e.getAttribute('x2'),
  i = + e.getAttribute('y2');
  l.setAttribute('d', 'M' + t + ',' + n + 'L' + r + ',' + i)
}
function r() {
  var t,
  n = + e.getAttribute('x'),
  r = + e.getAttribute('y'),
  i = + e.getAttribute('width'),
  a = + e.getAttribute('height'),
  o = Math.min(i / 2, + e.getAttribute('rx') || 0),
  s = Math.min(a / 2, + e.getAttribute('ry') || 0),
  c = o || s;
  o && !e.hasAttribute('ry') ? s = o : s && !e.hasAttribute('rx') && (o = s),
  t = 'A' + o + ',' + s + ',0,0,' + (0 > o * s ? 0 : 1) + ',',
  l.setAttribute('d', 'M' + (n + o) + ',' + r + 0 / 0 + (n + i - o) + (c ? t + (n + i) + ',' + (r + s)  : '') + 'V' + (r + a - s) + (c ? t + (n + i - o) + ',' + (r + a)  : '') + 'H' + (n + o) + (c ? t + n + ',' + (r + a - s)  : '') + 'V' + (r + s) + (c ? t + (n + o) + ',' + r : ''))
}
function i() {
  var t = + e.getAttribute('cx'),
  n = + e.getAttribute('cy'),
  r = + e.getAttribute('r'),
  i = n - r,
  a = n + r;
  l.setAttribute('d', 'M' + t + ',' + i + 'A' + [r,
  r,
  0,
  0,
  0,
  t,
  a,
  r,
  r,
  0,
  0,
  0,
  t,
  i].join(','))
}
function a() {
  var t = + e.getAttribute('cx'),
  n = + e.getAttribute('cy'),
  r = + e.getAttribute('rx'),
  i = + e.getAttribute('ry'),
  a = n - i,
  o = n + i;
  l.setAttribute('d', 'M' + t + ',' + a + 'A' + [r,
  i,
  0,
  0,
  0,
  t,
  o,
  r,
  i,
  0,
  0,
  0,
  t,
  a].join(','))
}
function o() {
  for (var t, n = 0, r = [
  ], i = e.points; pth.numberOfItems > n; n++) t = i.getItem(n),
  r[n] = t.x + ',' + t.y;
  l.setAttribute('d', 'M' + r.shift() + 'L' + r.join(' ') + ('polygon' == e.tagName) ? 'Z' : '')
}
var s,
l,
c,
u,
d = 'nodeType' in e ? e : e[0],
f = d.ownerDocument,
h = d.ownerSVGElement,
p = h.getAttribute('xmlns'),
g = (t || h).getCTM().inverse(),
v = g.multiply(d.getCTM()),
m = [
],
y = {
  path: function () {
    l.setAttribute('d', e.getAttribute('d'))
  },
  line: n,
  rect: r,
  circle: i,
  ellipse: a,
  polygon: o,
  polyline: o
};
if ('g' == e.tagName || 'function' == typeof e.push) for (s = 0; d = (e.childNodes || e) [s]; s++) 1 == d.nodeType && (m = m.concat(pathify(d, t)));
 else l = f.createElementNS(p, 'path'),
c = y[e.tagName],
c ? c()  : l = null,
l && (u = h.createSVGTransform(), u.setMatrix(v), l.transform.baseVal.initialize(u), e.parentNode.appendChild(l), l.setAttribute('d', applyTransforms(l)), l.removeAttribute('transform'), e.parentNode.removeChild(l), copyPresentation(e, l), m.push(l));
return m
},
t.transformedBoundingBox = function (e) {
var t = e.getBBox(),
n = e.ownerSVGElement,
r = getTransformToElement(e, e.parentNode);
if (!n) return null;
var i = [
  n.createSVGPoint(),
  n.createSVGPoint(),
  n.createSVGPoint(),
  n.createSVGPoint()
];
i[0].x = t.x,
i[0].y = t.y,
i[1].x = t.x + t.width,
i[1].y = t.y,
i[2].x = t.x + t.width,
i[2].y = t.y + t.height,
i[3].x = t.x,
i[3].y = t.y + t.height;
var a = 1 / 0,
o = - 1 / 0,
s = 1 / 0,
l = - 1 / 0;
i.forEach(function (e) {
  e = e.matrixTransform(r),
  a = Math.min(a, e.x),
  o = Math.max(o, e.x),
  s = Math.min(s, e.y),
  l = Math.max(l, e.y)
});
var c = {
};
return c.x = 0 | a,
c.width = 0 | o - a,
c.y = 0 | s,
c.height = 0 | l - s,
c
},
t.bboxOfGroup = function (e) {
var t = {
},
n = 1 / 0,
r = - 1 / 0,
i = 1 / 0,
a = - 1 / 0;
return e.forEach(function (e) {
  var t = svgUtils.transformedBoundingBox(e);
  n = Math.min(n, t.x),
  r = Math.max(r, t.x + t.width),
  i = Math.min(i, t.y),
  a = Math.max(a, t.y + t.height)
}),
t.x = n,
t.y = i,
t.width = r - n,
t.height = a - i,
t
},
t.clientToSVGCoords = function (e, t, n) {
var r = e.createSVGPoint(),
i = e.currentScale,
a = e.currentTranslate;
r.x = (t - a.x) / i,
r.y = (n - a.y) / i;
var o = parseInt(e.style.zoom, 10) || 1;
r.x /= o,
r.y /= o;
var s = e.getScreenCTM();
return s.inverse() && (r = r.matrixTransform(s.inverse())),
r
},
t.svgns = 'http://www.w3.org/2000/svg',
t.xlinkns = 'http://www.w3.org/1999/xlink',
t.xmlns = 'http://www.w3.org/XML/1998/namespace',
t.xmlnsns = 'http://www.w3.org/2000/xmlns/',
t.htmlns = 'http://www.w3.org/1999/xhtml',
t.mathns = 'http://www.w3.org/1998/Math/MathML',
t.svgStringToDOMElement = function (t) {
t = t.replace(/( href)/gm, ' xlink:href');
var n = (new DOMParser).parseFromString('<svg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'>' + t + '</svg>', 'text/xml');
return n.documentElement && 'html' !== n.documentElement.nodeName.toLowerCase() && (n = document.adoptNode(n.documentElement)),
e(n).find('image').toArray().forEach(function (e) {
  var t = [
    e.getAttributeNS(xlinkns, 'href'),
    e.getAttribute('href'),
    e.getAttribute('xlink:href')
  ],
  n = t.filter(function (e) {
    return e && 'null' !== e && '' !== e
  }) [0];
  e.removeAttributeNS(xlinkns, 'href'),
  e.removeAttribute('href'),
  e.removeAttribute('xlink:href'),
  e.setAttributeNS(xlinkns, 'xlink:href', n)
}),
n.firstChild
},
t.makeElmentFromMimeType = function (e, n) {
var r;
switch (n) {
  case 'image/png':
  case 'image/jpeg':
  case 'image/tiff':
  case 'image/gif':
  case 'image/svg+xml':
    r = document.createElementNS(t.svgns, 'image'),
    r.setAttributeNS(xlinkns, 'xlink:href', e),
    r.setAttributeNS(null, 'width', '10%'),
    r.setAttributeNS(null, 'height', '10%'),
    r.setAttributeNS(null, 'x', '0'),
    r.setAttributeNS(null, 'y', '0');
    break;
  case 'text/plain':
    break;
  case 'text/xml':
    r = t.svgStringToDOMElement(e)
}
return r
},
Object.freeze(t)
}(window.jQuery);
var wrapSingleSVG = function (e) {
var t = {
};
t.node = e;
var n = function (t, n) {
var r = {
};
switch (e.nodeName) {
  case 'svg':
  case 'image':
  case 'foreignobject':
  case 'rect':
  case 'use':
  case 'tspan':
  case 'text':
    r.x = parseInt(e.getAttribute('x') || '0', 10) + t,
    r.y = parseInt(e.getAttribute('y') || '0', 10) + n;
    break;
  case 'line':
    r.x1 = parseInt(e.getAttribute('x1') || '0', 10) + t,
    r.y1 = parseInt(e.getAttribute('y1') || '0', 10) + n,
    r.x2 = parseInt(e.getAttribute('x2') || '0', 10) + t,
    r.y2 = parseInt(e.getAttribute('y2') || '0', 10) + n;
    break;
  default:
    r = !1
}
if (r) for (var i in r) e.setAttribute(i, r[i]);
return r
},
r = function (t, n) {
switch (e.nodeName) {
  case 'svg':
  case 'image':
  case 'foreignobject':
  case 'rect':
  case 'use':
  case 'tspan':
  case 'text':
    e.setAttributeNS(null, 'x', t),
    e.setAttributeNS(null, 'y', n);
    break;
  case 'line':
    e.setAttributeNS(null, 'x1', t),
    e.setAttributeNS(null, 'y1', n),
    e.setAttributeNS(null, 'x2', t),
    e.setAttributeNS(null, 'y2', n);
    break;
  default:
    return !1
}
return !0
},
i = function (t, n) {
console.assert(t > 0, t),
console.assert(n > 0, n);
var r = {
};
switch (e.nodeName) {
  case 'svg':
  case 'image':
  case 'foreignobject':
  case 'rect':
  case 'use':
  case 'tspan':
  case 'text':
    r.width = t,
    r.height = n;
    break;
  case 'line':
    r.x2 = parseInt(e.getAttribute('x1') || '0', 10) + t,
    r.y2 = parseInt(e.getAttribute('y1') || '0', 10) + n;
    break;
  case 'ellipse':
    r.rx = t,
    r.ry = n;
    break;
  case 'circle':
    r.r = Math.max(t, n);
    break;
  default:
    r = !1
}
if (r) for (var i in r) e.setAttribute(i, r[i]);
return r
},
a = function (t, n) {
t = 0 | t,
n = 0 | n,
console.assert(t > 0, t),
console.assert(n > 0, n);
var r;
if (e.transform && e.transform.baseVal.consolidate() && (r = e.transform.baseVal.consolidate().matrix), r || !i(t, n)) {
  var a = svgUtils.transformedBoundingBox(e),
  o = e.ownerSVGElement.createSVGTransform();
  o.setScale(t / a.width, n / a.height),
  e.transform.baseVal.appendItem(o),
  e.transform.baseVal.consolidate(),
  svgedit.recalculate.recalculateDimensions(e)
}
},
o = function (t, n) {
var r = svgUtils.transformedBoundingBox(e);
a(r.width + t, r.height + n)
},
s = function (n, i) {
var a;
if (e.transform && e.transform.baseVal.consolidate() && (a = e.transform.baseVal.consolidate().matrix), a || !r(n, i)) {
  var o = t.getBbox();
  l(n - o.x, i - o.y)
}
},
l = function (t, r) {
var i,
a = 1,
o = 1;
if (e.transform && e.transform.baseVal.consolidate() && (i = e.transform.baseVal.consolidate().matrix, a = i.a, o = i.d), i || !n(t, r)) {
  var s = e.ownerSVGElement.createSVGTransform();
  s.setTranslate(t / a, r / o),
  e.transform.baseVal.appendItem(s),
  svgedit.recalculate.recalculateDimensions(e)
}
};
switch (e.nodeName) {
case 'g':
  t.dx = function (n) {
    return wrapGroupSVG($.toArray(e.node.children)).move(n, 0),
    t
  },
  t.dy = function (n) {
    return wrapGroupSVG($.toArray(e.node.children)).move(0, n),
    t
  },
  t.ungroup = function () {
    for (var t = e.firstChild; t; ) e.parentNode.insertBefore(t, e.nextElementSibling),
    t = t.nextSibling;
    return e.parentNode.removeChild(e),
    null
  };
default:
case 'image':
case 'foreignobject':
case 'rect':
case 'use':
case 'tspan':
case 'text':
case 'line':
case 'ellipse':
case 'circle':
  t.x = function (e) {
    var n = t.getBbox();
    return s(e, n.y),
    t
  },
  t.y = function (e) {
    var n = t.getBbox();
    return s(n.x, e),
    t
  },
  t.dx = t.dx || function (e) {
    return l(e, 0),
    t
  },
  t.dy = t.dy || function (e) {
    return l(0, e),
    t
  }
}
return t.getBbox = function () {
return svgUtils.transformedBoundingBox(e)
},
t.dWidth = t.dWidth || function (e) {
return o(e, 0),
t
},
t.dHeight = t.dHeight || function (e) {
return o(0, e),
t
},
t.width = function (e) {
var n = t.getBbox();
return a(e, n.height || 1),
t
},
t.height = function (e) {
var n = t.getBbox();
return a(n.width || 1, e),
t
},
t.resizeToBbox = function (e) {
return s(e.x, e.y),
a(e.width, e.height),
t
},
t
},
wrapGroupSVG = function (e) {
var t = {
};
t.nodes = e;
var n = e.map(wrapSingleSVG);
t.x = function (e) {
return n.forEach(function (t) {
t.x(e)
}),
t
},
t.y = function (e) {
return n.forEach(function (t) {
t.y(e)
}),
t
},
t.dx = function (e) {
return n.forEach(function (t) {
t.dx(e)
}),
t
},
t.dy = function (e) {
return n.forEach(function (t) {
t.dy(e)
}),
t
},
t.dWidth = function (e) {
return n.forEach(function (t) {
t.dWidth(e)
}),
t
},
t.dHeight = function (e) {
return n.forEach(function (t) {
t.dHeight(e)
}),
t
},
t.width = function (e) {
return n.forEach(function (t) {
t.width(e)
}),
t
},
t.height = function (e) {
return n.forEach(function (t) {
t.height(e)
}),
t
},
t.getBbox = function () {
var e = {
},
t = 1 / 0,
r = - 1 / 0,
i = 1 / 0,
a = - 1 / 0;
return n.forEach(function (e) {
var n = e.getBbox();
t = Math.min(t, n.x),
r = Math.max(r, n.x + n.width),
i = Math.min(i, n.y),
a = Math.max(a, n.y + n.height)
}),
e.x = t,
e.y = i,
e.width = r - t,
e.height = a - i,
e
};
var r = function (e, r) {
var i = n.map(function (e) {
return e.getBbox()
}),
a = t.getBbox(),
o = i.reduce(function (e, t) {
return e + t[r]
}, 0),
s = (a[r] - o) / (n.length - 1);
s = Math.max(s, 0),
n.sort(function (t, n) {
return t.getBbox() [e] - n.getBbox() [e]
});
var l = a[e];
return n.forEach(function (t) {
t[e](l),
l += t.getBbox() [r] + s,
svgedit.recalculate.recalculateDimensions(t.node)
}),
t
};
return t.distributeX = function () {
return r('x', 'width')
},
t.distributeY = function () {
return r('y', 'height')
},
t.group = function () {
function t(t, n) {
return Array.prototype.indexOf.call(e, n) - Array.prototype.indexOf.call(e, t)
}
var n = document.createElementNS(svgUtils.svgns, 'g');
return e[0].parent.appendChild(n),
e.length,
e.sort(t),
e.forEach(function (e) {
n.appendChild(e)
}),
wrapSingleSVG(n)
},
t
};
window.wrapSVG = function (e) {
return void 0 === e.length ? wrapSingleSVG(e)  : wrapGroupSVG(e)
},
window.domCreationTools = function () {
function e(e) {
var t = (new DOMParser).parseFromString('<svg>' + e + '</svg>', 'text/xml');
return t.documentElement && 'html' !== t.documentElement.nodeName.toLowerCase() && (t = document.adoptNode(t.documentElement)),
t
}
function t(e, t, n, r, i) {
var a = getObjectSize(e.nodeName.toLowerCase(), t, n, r, i);
for (var o in a) e.setAttribute(o, a[o]);
return e
}
function n(t) {
var n = t.getAttribute('xlink:href').replace(/(\r\n|\n|\r)/gm, '');
n = n.substring(n.indexOf('base64') + 7);
var r = svgedit.utilities.decode64(n),
i = e(r);
return i.setAttribute('x', t.getAttribute('x')),
i.setAttribute('y', t.getAttribute('y')),
i
}
function r(e) {
newElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
var t = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
return t.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml'),
t.textContent = e,
newElement.appendChild(t),
newElement
}
return {
svgStringToDOMElement: e,
sizeElement: t,
imageToSVG: n,
makeTextElement: r
}
}(window.svgTools),
function (e) {
function t(t) {
if ('string' == typeof t.data) {
var n = t.handler,
r = t.data.toLowerCase().split(' ');
t.handler = function (t) {
if (this === t.target || !/textarea|select/i.test(t.target.nodeName) && 'text' !== t.target.type) {
var i = 'keypress' !== t.type && e.hotkeys.specialKeys[t.which],
a = String.fromCharCode(t.which).toLowerCase(),
o = '',
s = {
};
t.altKey && 'alt' !== i && (o += 'alt+'),
t.ctrlKey && 'ctrl' !== i && (o += 'ctrl+'),
t.metaKey && !t.ctrlKey && 'meta' !== i && (o += 'meta+'),
t.shiftKey && 'shift' !== i && (o += 'shift+'),
i ? s[o + i] = !0 : (s[o + a] = !0, s[o + e.hotkeys.shiftNums[a]] = !0, 'shift+' === o && (s[e.hotkeys.shiftNums[a]] = !0));
for (var l = 0, c = r.length; c > l; l++) if (s[r[l]]) return n.apply(this, arguments)
}
}
}
}
e.hotkeys = {
version: '0.8',
specialKeys: {
8: 'backspace',
9: 'tab',
13: 'return',
16: 'shift',
17: 'ctrl',
18: 'alt',
19: 'pause',
20: 'capslock',
27: 'esc',
32: 'space',
33: 'pageup',
34: 'pagedown',
35: 'end',
36: 'home',
37: 'left',
38: 'up',
39: 'right',
40: 'down',
45: 'insert',
46: 'del',
96: '0',
97: '1',
98: '2',
99: '3',
100: '4',
101: '5',
102: '6',
103: '7',
104: '8',
105: '9',
106: '*',
107: '+',
109: '-',
110: '.',
111: '/',
112: 'f1',
113: 'f2',
114: 'f3',
115: 'f4',
116: 'f5',
117: 'f6',
118: 'f7',
119: 'f8',
120: 'f9',
121: 'f10',
122: 'f11',
123: 'f12',
144: 'numlock',
145: 'scroll',
191: '/',
224: 'meta',
219: '[',
221: ']'
},
shiftNums: {
'`': '~',
1: '!',
2: '@',
3: '#',
4: '$',
5: '%',
6: '^',
7: '&',
8: '*',
9: '(',
0: ')',
'-': '_',
'=': '+',
';': ': ',
'\'': '"',
',': '<',
'.': '>',
'/': '?',
'\\': '|'
}
},
e.each(['keydown',
'keyup',
'keypress'], function () {
e.event.special[this] = {
add: t
}
})
}(jQuery),
function () {
function e(e, r, i) {
if (e = document.createElementNS(t.svg, e), n) for (var a in r) e.setAttribute(a, r[a]);
 else for (a in r) {
var o = r[a],
s = e[a];
s && 'SVGLength' === s.constructor ? s.baseVal.value = o : e.setAttribute(a, o)
}
return i && i.appendChild(e),
e
}
var t = {
svg: 'http://www.w3.org/2000/svg',
xlink: 'http://www.w3.org/1999/xlink'
};
window.console || (window.console = new function () {
this.log = function () {
},
this.dir = function () {
}
}),
$.jGraduate = {
Paint: function (e) {
if (e = e || {
}, this.alpha = isNaN(e.alpha) ? 100 : e.alpha, e.copy) switch (this.type = e.copy.type, this.alpha = e.copy.alpha, this.radialGradient = this.linearGradient = this.solidColor = null, this.type) {
case 'solidColor':
this.solidColor = e.copy.solidColor;
break;
case 'linearGradient':
this.linearGradient = e.copy.linearGradient.cloneNode(!0);
break;
case 'radialGradient':
this.radialGradient = e.copy.radialGradient.cloneNode(!0)
} else e.linearGradient ? (this.type = 'linearGradient', this.radialGradient = this.solidColor = null, this.linearGradient = e.linearGradient.cloneNode(!0))  : e.radialGradient ? (this.type = 'radialGradient', this.linearGradient = this.solidColor = null, this.radialGradient = e.radialGradient.cloneNode(!0))  : e.solidColor ? (this.type = 'solidColor', this.solidColor = e.solidColor)  : (this.type = 'none', this.radialGradient = this.linearGradient = this.solidColor = null)
}
},
jQuery.fn.jGraduateDefaults = {
paint: new $.jGraduate.Paint,
window: {
pickerTitle: 'Drag markers to pick a paint'
},
images: {
clientPath: 'images/'
},
newstop: 'inverse'
};
var n = navigator.userAgent.indexOf('Gecko/') >= 0;
jQuery.fn.jGraduate = function (n) {
var r = arguments;
return this.each(function () {
function i(t, n, r, i, s) {
var c = s || e('stop', {
'stop-color': n,
'stop-opacity': r,
offset: t
}, x);
s ? (n = s.getAttribute('stop-color'), r = s.getAttribute('stop-opacity'), t = s.getAttribute('offset'))  : x.appendChild(c),
null === r && (r = 1),
s = e('path', {
d: 'M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z',
fill: 'url(#jGraduate_trans)',
transform: 'translate(' + (10 + t * k) + ', 26)'
}, q);
var f = e('path', {
d: 'M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z',
fill: n,
'fill-opacity': r,
transform: 'translate(' + (10 + t * k) + ', 26)',
stroke: '#000',
'stroke-width': 1.5
}, q);
return $(f).mousedown(function (e) {
return a(this),
X = U,
v.mousemove(l).mouseup(o),
Y = W.offset(),
e.preventDefault(),
!1
}).data('stop', c).data('bg', s).dblclick(function () {
$('div.jGraduate_LightBox').show();
for (var e = this, t = + c.getAttribute('stop-opacity') || 1, r = c.getAttribute('stop-color') || 1, i = (255 * parseFloat(t)).toString(16); 2 > i.length; ) i = '0' + i;
n = r.substr(1) + i,
$('#' + d + '_jGraduate_stopPicker').css({
left: 100,
bottom: 15
}).jPicker({
window: {
title: 'Pick the start color and opacity for the gradient'
},
images: {
clientPath: u.images.clientPath
},
color: {
active: n,
alphaSupport: !0
}
}, function (n) {
r = n.val('hex') ? '#' + n.val('hex')  : 'none',
t = null !== n.val('a') ? n.val('a') / 256 : 1,
e.setAttribute('fill', r),
e.setAttribute('fill-opacity', t),
c.setAttribute('stop-color', r),
c.setAttribute('stop-opacity', t),
$('div.jGraduate_LightBox').hide(),
$('#' + d + '_jGraduate_stopPicker').hide()
}, null, function () {
$('div.jGraduate_LightBox').hide(),
$('#' + d + '_jGraduate_stopPicker').hide()
})
}),
$(x).find('stop').each(function () {
var e = $(this);
if ( + this.getAttribute('offset') > t) {
if (!n) {
var r = this.getAttribute('stop-color'),
i = this.getAttribute('stop-opacity');
c.setAttribute('stop-color', r),
f.setAttribute('fill', r),
c.setAttribute('stop-opacity', null === i ? 1 : i),
f.setAttribute('fill-opacity', null === i ? 1 : i)
}
return e.before(c),
!1
}
}),
i && a(f),
c
}
function a(e) {
U && U.setAttribute('stroke', '#000'),
e.setAttribute('stroke', 'blue'),
U = e,
U.parentNode.appendChild(U)
}
function o() {
if (v.unbind('mousemove', l), 'none' !== K.getAttribute('display')) {
K.setAttribute('display', 'none');
var e = $(U),
t = e.data('stop');
e = e.data('bg'),
$([U,
t,
e]).remove()
}
X = null
}
function s() {
var e = J ? 'rotate(' + J + ',' + et + ',' + tt + ') ' : '';
1 === Z && 1 === Q ? x.removeAttribute('gradientTransform')  : x.setAttribute('gradientTransform', e + 'translate(' + - et * (Z - 1) + ',' + - tt * (Q - 1) + ') scale(' + Z + ',' + Q + ')')
}
function l(e) {
var t = e.pageX - Y.left;
e = e.pageY - Y.top,
t = 10 > t ? 10 : t > k + 10 ? k + 10 : t;
var n = 'translate(' + t + ', 26)';
- 60 > e || e > 130 ? (K.setAttribute('display', 'block'), K.setAttribute('transform', n))  : K.setAttribute('display', 'none'),
X.setAttribute('transform', n),
$.data(X, 'bg').setAttribute('transform', n),
$.data(X, 'stop').setAttribute('offset', (t - 10) / k);
var r = 0;
$(x).find('stop').each(function () {
var e = this.getAttribute('offset'),
t = $(this);
r > e && (t.prev().before(t), z = $(x).find('stop')),
r = e
})
}
var c = $(this),
u = $.extend(!0, {
}, jQuery.fn.jGraduateDefaults, n),
d = c.attr('id'),
f = '#' + c.attr('id') + ' ';
if (f) {
var h = function () {
switch (c.paint.type) {
case 'radialGradient':
c.paint.linearGradient = null;
break;
case 'linearGradient':
c.paint.radialGradient = null;
break;
case 'solidColor':
c.paint.radialGradient = c.paint.linearGradient = null
}
$.isFunction(c.okCallback) && c.okCallback(c.paint),
c.hide()
},
p = function () {
$.isFunction(c.cancelCallback) && c.cancelCallback(),
c.hide()
};
$.extend(!0, c, {
paint: new $.jGraduate.Paint({
copy: u.paint
}),
okCallback: $.isFunction(r[1]) && r[1] || null,
cancelCallback: $.isFunction(r[2]) && r[2] || null
}),
c.position();
var g = null,
v = $(window);
'none' == c.paint.type && (c.paint = $.jGraduate.Paint({
solidColor: 'ffffff'
})),
c.addClass('jGraduate_Picker'),
c.html('<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="' + d + '_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>');
var m = $(f + '> .jGraduate_colPick'),
y = $(f + '> .jGraduate_gradPick');
y.html('<div id="' + d + '_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">' + u.window.pickerTitle + '</h2><div id="' + d + '_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="' + d + '_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' + d + '_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + d + '_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' + d + '_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + d + '_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="' + d + '_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + d + '_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="' + d + '_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="' + d + '_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="' + d + '_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="' + d + '_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="' + d + '_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="' + u.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + d + '_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="' + d + '_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="' + d + '_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="' + u.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + d + '_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="' + d + '_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="' + d + '_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="' + u.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + d + '_jGraduate_AngleInput" size="3" value="0"/>deg</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="' + d + '_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="' + d + '_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="' + u.images.clientPath + 'rangearrows2.gif"></div><label><input type="text" id="' + d + '_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="' + d + '_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="' + d + '_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>');
var b,
x,
w,
k = 256,
S = k - 0,
_ = k - 0,
E = {
};
$('.jGraduate_SliderBar').width(145);
var A = $('#' + d + '_jGraduate_GradContainer') [0],
C = e('svg', {
id: d + '_jgraduate_svg',
width: k,
height: k,
xmlns: t.svg
}, A);
b = b || c.paint.type;
var T = x = c.paint[b],
N = c.paint.alpha,
M = 'solidColor' === b;
switch (b) {
case 'solidColor':
case 'linearGradient':
if (M || (x.id = d + '_lg_jgraduate_grad', T = x = C.appendChild(x)), e('radialGradient', {
id: d + '_rg_jgraduate_grad'
}, C), 'linearGradient' === b) break;
case 'radialGradient':
M || (x.id = d + '_rg_jgraduate_grad', T = x = C.appendChild(x)),
e('linearGradient', {
id: d + '_lg_jgraduate_grad'
}, C)
}
if (M) {
T = x = $('#' + d + '_lg_jgraduate_grad') [0],
g = c.paint[b],
i(0, '#' + g, 1);
var L = typeof u.newstop;
if ('string' === L) switch (u.newstop) {
case 'same':
i(1, '#' + g, 1);
break;
case 'inverse':
L = '';
for (var G = 0; 6 > G; G += 2) {
g.substr(G, 2);
var I = (255 - parseInt(g.substr(G, 2), 16)).toString(16);
2 > I.length && (I = 0 + I),
L += I
}
i(1, '#' + L, 1);
break;
case 'white':
i(1, '#ffffff', 1);
break;
case 'black':
i(1, '#000000', 1)
} else 'object' === L && i(1, u.newstop.color || '#' + g, 'opac' in u.newstop ? u.newstop.opac : 1)
}
g = parseFloat(T.getAttribute('x1') || 0),
L = parseFloat(T.getAttribute('y1') || 0),
G = parseFloat(T.getAttribute('x2') || 1),
I = parseFloat(T.getAttribute('y2') || 0);
var O = parseFloat(T.getAttribute('cx') || 0.5),
P = parseFloat(T.getAttribute('cy') || 0.5),
j = parseFloat(T.getAttribute('fx') || O),
D = parseFloat(T.getAttribute('fy') || P);
w = e('rect', {
id: d + '_jgraduate_rect',
x: 0,
y: 0,
width: S,
height: _,
fill: 'url(#' + d + '_jgraduate_grad)',
'fill-opacity': N / 100
}, C);
var B = $('<div/>').attr({
'class': 'grad_coord jGraduate_lg_field',
title: 'Begin Stop'
}).text(1).css({
top: L * k,
left: g * k
}).data('coord', 'start').appendTo(A),
V = B.clone().text(2).css({
top: I * k,
left: G * k
}).attr('title', 'End stop').data('coord', 'end').appendTo(A),
R = $('<div/>').attr({
'class': 'grad_coord jGraduate_rg_field',
title: 'Center stop'
}).text('C').css({
top: P * k,
left: O * k
}).data('coord', 'center').appendTo(A),
F = R.clone().text('F').css({
top: D * k,
left: j * k,
display: 'none'
}).attr('title', 'Focus point').data('coord', 'focus').appendTo(A);
F[0].id = d + '_jGraduate_focusCoord',
$(f + ' .grad_coord'),
$.each(['x1',
'y1',
'x2',
'y2',
'cx',
'cy',
'fx',
'fy'], function (e, t) {
var n = x.getAttribute(t),
r = isNaN(t[1]);
n || (n = r ? '0.5' : 'x2' === t ? '1.0' : '0.0'),
E[t] = $('#' + d + '_jGraduate_' + t).val(n).change(function () {
isNaN(parseFloat(this.value)) || 0 > this.value ? this.value = 0 : this.value > 1 && (this.value = 1),
('f' !== t[0] || lt) && (r && 'radialGradient' === b || !r && 'linearGradient' === b) && x.setAttribute(t, this.value);
var e = r ? 'c' === t[0] ? R : F : '1' === t[1] ? B : V,
n = t.indexOf('x') >= 0 ? 'left' : 'top';
e.css(n, this.value * k)
}).change()
});
var z,
q,
U,
H,
X,
Y,
W = $('#' + d + '_jGraduate_StopSlider'),
K = e('path', {
d: 'm9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5',
fill: 'none',
stroke: '#D00',
'stroke-width': 5,
display: 'none'
}, H),
Z = 1,
Q = 1,
J = 0,
et = O,
tt = P;
H = e('svg', {
width: '100%',
height: 45
}, W[0]),
A = e('pattern', {
width: 16,
height: 16,
patternUnits: 'userSpaceOnUse',
id: 'jGraduate_trans'
}, H),
e('image', {
width: 16,
height: 16
}, A).setAttributeNS(t.xlink, 'xlink:href', u.images.clientPath + 'map-opacity.png'),
$(H).click(function (e) {
if (Y = W.offset(), 'path' !== e.target.tagName) {
var t = e.pageX - Y.left - 8;
t = 10 > t ? 10 : t > k + 10 ? k + 10 : t,
i(t / k, 0, 0, !0),
e.stopPropagation()
}
}),
$(H).mouseover(function () {
H.appendChild(K)
}),
q = e('g', {
}, H),
e('line', {
x1: 10,
y1: 15,
x2: k + 10,
y2: 15,
'stroke-width': 2,
stroke: '#000'
}, H);
var nt = y.find('.jGraduate_spreadMethod').change(function () {
x.setAttribute('spreadMethod', $(this).val())
}),
rt = null,
it = function (e) {
var t = e.pageX - st.left,
n = e.pageY - st.top;
t = 0 > t ? 0 : t > k ? k : t,
n = 0 > n ? 0 : n > k ? k : n,
rt.css('left', t).css('top', n),
t /= S,
n /= _;
var r = rt.data('coord'),
i = x;
switch (r) {
case 'start':
E.x1.val(t),
E.y1.val(n),
i.setAttribute('x1', t),
i.setAttribute('y1', n);
break;
case 'end':
E.x2.val(t),
E.y2.val(n),
i.setAttribute('x2', t),
i.setAttribute('y2', n);
break;
case 'center':
E.cx.val(t),
E.cy.val(n),
i.setAttribute('cx', t),
i.setAttribute('cy', n),
et = t,
tt = n,
s();
break;
case 'focus':
E.fx.val(t),
E.fy.val(n),
i.setAttribute('fx', t),
i.setAttribute('fy', n),
s()
}
e.preventDefault()
},
at = function () {
rt = null,
v.unbind('mousemove', it).unbind('mouseup', at)
};
if (z = x.getElementsByTagNameNS(t.svg, 'stop'), 2 > ot) {
for (; 2 > ot; ) x.appendChild(document.createElementNS(t.svg, 'stop')),
++ot;
z = x.getElementsByTagNameNS(t.svg, 'stop')
}
var ot = z.length;
for (G = 0; ot > G; G++) i(0, 0, 0, 0, z[G]);
nt.val(x.getAttribute('spreadMethod') || 'pad');
var st,
lt = !1;
w.setAttribute('fill-opacity', N / 100),
$('#' + d + ' div.grad_coord').mousedown(function (e) {
e.preventDefault(),
rt = $(this),
rt.offset(),
st = rt.parent().offset(),
v.mousemove(it).mouseup(at)
}),
$('#' + d + '_jGraduate_Ok').bind('click', function () {
c.paint.type = b,
c.paint[b] = x.cloneNode(!0),
c.paint.solidColor = null,
h()
}),
$('#' + d + '_jGraduate_Cancel').bind('click', function () {
p()
}),
'radialGradient' === b && (lt ? F.show()  : (F.hide(), E.fx.val(''), E.fy.val(''))),
$('#' + d + '_jGraduate_match_ctr') [0].checked = !lt;
var ct,
ut;
if ($('#' + d + '_jGraduate_match_ctr').change(function () {
lt = !this.checked,
F.toggle(lt),
E.fx.val(''),
E.fy.val('');
var e = x;
if (lt) {
var t = ct || 0.5,
n = ut || 0.5;
e.setAttribute('fx', t),
e.setAttribute('fy', n),
E.fx.val(t),
E.fy.val(n)
} else ct = e.getAttribute('fx'),
ut = e.getAttribute('fy'),
e.removeAttribute('fx'),
e.removeAttribute('fy')
}), z = x.getElementsByTagNameNS(t.svg, 'stop'), ot = z.length, 2 > ot) {
for (; 2 > ot; ) x.appendChild(document.createElementNS(t.svg, 'stop')),
++ot;
z = x.getElementsByTagNameNS(t.svg, 'stop')
}
var dt;
N = y = 0,
'radialGradient' === b && (C = x.gradientTransform.baseVal, 2 === C.numberOfItems ? (ot = C.getItem(0), C = C.getItem(1), 2 === ot.type && 3 === C.type && (ot = C.matrix, 1 !== ot.a ? y = Math.round(100 * - (1 - ot.a))  : 1 !== ot.d && (y = Math.round(100 * (1 - ot.d)))))  : 3 === C.numberOfItems && (A = C.getItem(0), ot = C.getItem(1), C = C.getItem(2), 4 === A.type && 2 === ot.type && 3 === C.type && (N = Math.round(A.angle), ot = C.matrix, 1 !== ot.a ? y = Math.round(100 * - (1 - ot.a))  : 1 !== ot.d && (y = Math.round(100 * (1 - ot.d)))))),
y = {
radius: {
handle: '#' + d + '_jGraduate_RadiusArrows',
input: '#' + d + '_jGraduate_RadiusInput',
val: 100 * (x.getAttribute('r') || 0.5)
},
opacity: {
handle: '#' + d + '_jGraduate_OpacArrows',
input: '#' + d + '_jGraduate_OpacInput',
val: c.paint.alpha || 100
},
ellip: {
handle: '#' + d + '_jGraduate_EllipArrows',
input: '#' + d + '_jGraduate_EllipInput',
val: y
},
angle: {
handle: '#' + d + '_jGraduate_AngleArrows',
input: '#' + d + '_jGraduate_AngleInput',
val: N
}
},
$.each(y, function (e, t) {
var n = $(t.handle);
n.mousedown(function (r) {
var i = n.parent();
dt = {
type: e,
elem: n,
input: $(t.input),
parent: i,
offset: i.offset()
},
v.mousemove(ft).mouseup(ht),
r.preventDefault()
}),
$(t.input).val(t.val).change(function () {
var t = + this.value,
r = 0,
i = 'radialGradient' === b;
switch (e) {
case 'radius':
i && x.setAttribute('r', t / 100),
r = 145 * (Math.pow(t / 100, 0.4) / 2);
break;
case 'opacity':
c.paint.alpha = t,
w.setAttribute('fill-opacity', t / 100),
r = 1.45 * t;
break;
case 'ellip':
if (Z = Q = 1, 0 === t) {
  r = 72.5;
  break
}
t > 99.5 && (t = 99.5),
t > 0 ? Q = 1 - t / 100 : Z = - (t / 100) - 1,
r = 145 * ((t + 100) / 2) / 100,
i && s();
break;
case 'angle':
J = t,
r = J / 180,
r += 0.5,
r *= 145,
i && s()
}
r > 145 ? r = 145 : 0 > r && (r = 0),
n.css({
'margin-left': r - 5
})
}).change()
}); var ft = function (e) {
var t = e.pageX - dt.offset.left - parseInt(dt.parent.css('border-left-width'));
t > 145 && (t = 145),
0 >= t && (t = 0);
var n = t - 5;
switch (t /= 145, dt.type) {
case 'radius':
t = Math.pow(2 * t, 2.5),
t > 0.98 && 1.02 > t && (t = 1),
0.01 >= t && (t = 0.01),
x.setAttribute('r', t);
break;
case 'opacity':
c.paint.alpha = parseInt(100 * t),
w.setAttribute('fill-opacity', t);
break;
case 'ellip':
Q = Z = 1,
0.5 > t ? (t /= 0.5, Z = 0 >= t ? 0.01 : t)  : t > 0.5 && (t /= 0.5, t = 2 - t, Q = 0 >= t ? 0.01 : t),
s(),
t -= 1,
Q === t + 1 && (t = Math.abs(t));
break;
case 'angle':
t -= 0.5,
J = t *= 180,
s(),
t /= 100
}
dt.elem.css({
'margin-left': n
}),
t = Math.round(100 * t),
dt.input.val(t),
e.preventDefault()
},
ht = function () {
v.unbind('mousemove', ft).unbind('mouseup', ht),
dt = null
};
for (y = (255 * c.paint.alpha / 100).toString(16); 2 > y.length; ) y = '0' + y;
y = y.split('.') [0],
g = 'none' == c.paint.solidColor ? '' : c.paint.solidColor + y,
M || (g = z[0].getAttribute('stop-color')),
$.extend($.fn.jPicker.defaults.window, {
alphaSupport: !0,
effects: {
type: 'show',
speed: 0
}
}),
m.jPicker({
window: {
title: u.window.pickerTitle
},
images: {
clientPath: u.images.clientPath
},
color: {
active: g,
alphaSupport: !0
}
}, function (e) {
c.paint.type = 'solidColor',
c.paint.alpha = e.val('ahex') ? Math.round(100 * (e.val('a') / 255))  : 100,
c.paint.solidColor = e.val('hex') ? e.val('hex')  : 'none',
c.paint.radialGradient = null,
h()
}, null, function () {
p()
});
var pt = $(f + ' .jGraduate_tabs li');
pt.click(function () {
pt.removeClass('jGraduate_tab_current'),
$(this).addClass('jGraduate_tab_current'),
$(f + ' > div').hide();
var e = $(this).attr('data-type');
if ($(f + ' .jGraduate_gradPick').show(), 'rg' === e || 'lg' === e) {
$('.jGraduate_' + e + '_field').show(),
$('.jGraduate_' + ('lg' === e ? 'rg' : 'lg') + '_field').hide(),
$('#' + d + '_jgraduate_rect') [0].setAttribute('fill', 'url(#' + d + '_' + e + '_jgraduate_grad)'),
b = 'lg' === e ? 'linearGradient' : 'radialGradient',
$('#' + d + '_jGraduate_OpacInput').val(c.paint.alpha).change();
var t = $('#' + d + '_' + e + '_jgraduate_grad') [0];
if (x !== t) {
var n = $(x).find('stop');
$(t).empty().append(n),
x = t,
t = nt.val(),
x.setAttribute('spreadMethod', t)
}
lt = 'rg' === e && null != x.getAttribute('fx') && !(O == j && P == D),
$('#' + d + '_jGraduate_focusCoord').toggle(lt),
lt && ($('#' + d + '_jGraduate_match_ctr') [0].checked = !1)
} else $(f + ' .jGraduate_gradPick').hide(),
$(f + ' .jGraduate_colPick').show()
}),
$(f + ' > div').hide(),
pt.removeClass('jGraduate_tab_current');
var gt;
switch (c.paint.type) {
case 'linearGradient':
gt = $(f + ' .jGraduate_tab_lingrad');
break;
case 'radialGradient':
gt = $(f + ' .jGraduate_tab_radgrad');
break;
default:
gt = $(f + ' .jGraduate_tab_color')
}
c.show(),
setTimeout(function () {
gt.addClass('jGraduate_tab_current').click()
}, 10)
} else alert('Container element must have an id attribute to maintain unique id strings for sub-elements.')
})
}
}(),
function (e) {
Math.precision = function (e, t) {
return void 0 === t && (t = 0),
Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
};
var t = function (t, n) {
var r,
i,
a = this,
o = t.find('img:first'),
s = 0,
l = 100,
c = 100,
u = 0,
d = 100,
f = 100,
h = 0,
p = 0,
g = [
],
v = function (e) {
for (var t = 0; g.length > t; t++) g[t].call(a, a, e)
},
m = function (n) {
var o = t.offset();
r = {
l: 0 | o.left,
t: 0 | o.top
},
clearTimeout(i),
i = setTimeout(function () {
x.call(a, n)
}, 0),
e(document).bind('mousemove', y).bind('mouseup', b),
n.preventDefault()
},
y = function (e) {
return clearTimeout(i),
i = setTimeout(function () {
x.call(a, e)
}, 0),
e.stopPropagation(),
e.preventDefault(),
!1
},
b = function (t) {
return e(document).unbind('mouseup', b).unbind('mousemove', y),
t.stopPropagation(),
t.preventDefault(),
!1
},
x = function (e) {
var n = e.pageX - r.l,
i = e.pageY - r.t,
o = t.w,
l = t.h;
0 > n ? n = 0 : n > o && (n = o),
0 > i ? i = 0 : i > l && (i = l),
k.call(a, 'xy', {
x: n / o * c + s,
y: i / l * f + u
})
},
w = function () {
var e = 0,
n = 0,
r = t.w,
i = t.h,
a = o.w,
s = o.h;
setTimeout(function () {
c > 0 && (e = h == l ? r : 0 | h / c * r),
f > 0 && (n = p == d ? i : 0 | p / f * i),
a >= r ? e = (r >> 1) - (a >> 1)  : e -= a >> 1,
s >= i ? n = (i >> 1) - (s >> 1)  : n -= s >> 1,
o.css({
left: e + 'px',
top: n + 'px'
})
}, 0)
},
k = function (e, t, n) {
var r = void 0 !== t;
if (!r) switch ((void 0 === e || null == e) && (e = 'xy'), e.toLowerCase()) {
case 'x':
return h;
case 'y':
return p;
case 'xy':
default:
return {
x: h,
y: p
}
}
if (null == n || n != a) {
var i,
o,
c = !1;
switch (null == e && (e = 'xy'), e.toLowerCase()) {
case 'x':
i = t && (t.x && 0 | t.x || 0 | t) || 0;
break;
case 'y':
o = t && (t.y && 0 | t.y || 0 | t) || 0;
break;
case 'xy':
default:
i = t && t.x && 0 | t.x || 0,
o = t && t.y && 0 | t.y || 0
}
null != i && (s > i ? i = s : i > l && (i = l), h != i && (h = i, c = !0)),
null != o && (u > o ? o = u : o > d && (o = d), p != o && (p = o, c = !0)),
c && v.call(a, n || a)
}
},
S = function (e, t) {
var n = void 0 !== t;
if (!n) switch ((void 0 === e || null == e) && (e = 'all'), e.toLowerCase()) {
case 'minx':
return s;
case 'maxx':
return l;
case 'rangex':
return {
minX: s,
maxX: l,
rangeX: c
};
case 'miny':
return u;
case 'maxy':
return d;
case 'rangey':
return {
minY: u,
maxY: d,
rangeY: f
};
case 'all':
default:
return {
minX: s,
maxX: l,
rangeX: c,
minY: u,
maxY: d,
rangeY: f
}
}
var r,
i,
a,
o;
switch (null == e && (e = 'all'), e.toLowerCase()) {
case 'minx':
r = t && (t.minX && 0 | t.minX || 0 | t) || 0;
break;
case 'maxx':
i = t && (t.maxX && 0 | t.maxX || 0 | t) || 0;
break;
case 'rangex':
r = t && t.minX && 0 | t.minX || 0,
i = t && t.maxX && 0 | t.maxX || 0;
break;
case 'miny':
a = t && (t.minY && 0 | t.minY || 0 | t) || 0;
break;
case 'maxy':
o = t && (t.maxY && 0 | t.maxY || 0 | t) || 0;
break;
case 'rangey':
a = t && t.minY && 0 | t.minY || 0,
o = t && t.maxY && 0 | t.maxY || 0;
break;
case 'all':
default:
r = t && t.minX && 0 | t.minX || 0,
i = t && t.maxX && 0 | t.maxX || 0,
a = t && t.minY && 0 | t.minY || 0,
o = t && t.maxY && 0 | t.maxY || 0
}
null != r && s != r && (s = r, c = l - s),
null != i && l != i && (l = i, c = l - s),
null != a && u != a && (u = a, f = d - u),
null != o && d != o && (d = o, f = d - u)
},
_ = function (t) {
e.isFunction(t) && g.push(t)
},
E = function (t) {
if (e.isFunction(t)) for (var n; - 1 != (n = e.inArray(t, g)); ) g.splice(n, 1)
},
A = function () {
e(document).unbind('mouseup', b).unbind('mousemove', y),
t.unbind('mousedown', m),
t = null,
o = null,
g = null
};
e.extend(!0, a, {
val: k,
range: S,
bind: _,
unbind: E,
destroy: A
}),
o.src = n.arrow && n.arrow.image,
o.w = n.arrow && n.arrow.width || o.width(),
o.h = n.arrow && n.arrow.height || o.height(),
t.w = n.map && n.map.width || t.width(),
t.h = n.map && n.map.height || t.height(),
t.bind('mousedown', m),
_.call(a, w)
},
n = function (t, n, r, i) {
var a = this,
o = t.find('td.Text input'),
s = o.eq(3),
l = o.eq(4),
c = o.eq(5),
u = o.length > 7 ? o.eq(6)  : null,
d = o.eq(0),
f = o.eq(1),
h = o.eq(2),
p = o.eq(o.length > 7 ? 7 : 6),
g = o.length > 7 ? o.eq(8)  : null,
v = function (e) {
if ('' != e.target.value || e.target == p.get(0) || (null == r || e.target == r.get(0)) && null != r) {
if (!y(e)) return e;
switch (e.target) {
case s.get(0) :
s.val(b.call(a, s.val(), 0, 255)),
n.val('r', s.val(), e.target);
break;
case l.get(0) :
l.val(b.call(a, l.val(), 0, 255)),
n.val('g', l.val(), e.target);
break;
case c.get(0) :
c.val(b.call(a, c.val(), 0, 255)),
n.val('b', c.val(), e.target);
break;
case u && u.get(0) :
u.val(b.call(a, u.val(), 0, 100)),
n.val('a', Math.precision(255 * u.val() / 100, i), e.target);
break;
case d.get(0) :
d.val(b.call(a, d.val(), 0, 360)),
n.val('h', d.val(), e.target);
break;
case f.get(0) :
f.val(b.call(a, f.val(), 0, 100)),
n.val('s', f.val(), e.target);
break;
case h.get(0) :
h.val(b.call(a, h.val(), 0, 100)),
n.val('v', h.val(), e.target);
break;
case p.get(0) :
p.val(p.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6)),
r && r.val(p.val()),
n.val('hex', '' != p.val() ? p.val()  : null, e.target);
break;
case r && r.get(0) :
r.val(r.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6)),
p.val(r.val()),
n.val('hex', '' != r.val() ? r.val()  : null, e.target);
break;
case g && g.get(0) :
g.val(g.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 2)),
n.val('a', null != g.val() ? parseInt(g.val(), 16)  : null, e.target)
}
}
},
m = function (e) {
if (null != n.val()) switch (e.target) {
case s.get(0) :
s.val(n.val('r'));
break;
case l.get(0) :
l.val(n.val('g'));
break;
case c.get(0) :
c.val(n.val('b'));
break;
case u && u.get(0) :
u.val(Math.precision(100 * n.val('a') / 255, i));
break;
case d.get(0) :
d.val(n.val('h'));
break;
case f.get(0) :
f.val(n.val('s'));
break;
case h.get(0) :
h.val(n.val('v'));
break;
case p.get(0) :
case r && r.get(0) :
p.val(n.val('hex')),
r && r.val(n.val('hex'));
break;
case g && g.get(0) :
g.val(n.val('ahex').substring(6))
}
},
y = function (e) {
switch (e.keyCode) {
case 9:
case 16:
case 29:
case 37:
case 38:
case 40:
return !1;
case 'c'.charCodeAt() :
case 'v'.charCodeAt() :
if (e.ctrlKey) return !1
}
return !0
},
b = function (e, t, n) {
return '' == e || isNaN(e) ? t : e > n ? n : t > e ? t : e
},
x = function (e, t) {
var n = e.val('all');
t != s.get(0) && s.val(null != n ? n.r : ''),
t != l.get(0) && l.val(null != n ? n.g : ''),
t != c.get(0) && c.val(null != n ? n.b : ''),
u && t != u.get(0) && u.val(null != n ? Math.precision(100 * n.a / 255, i)  : ''),
t != d.get(0) && d.val(null != n ? n.h : ''),
t != f.get(0) && f.val(null != n ? n.s : ''),
t != h.get(0) && h.val(null != n ? n.v : ''),
t != p.get(0) && (r && t != r.get(0) || !r) && p.val(null != n ? n.hex : ''),
r && t != r.get(0) && t != p.get(0) && r.val(null != n ? n.hex : ''),
g && t != g.get(0) && g.val(null != n ? n.ahex.substring(6)  : '')
},
w = function () {
s.add(l).add(c).add(u).add(d).add(f).add(h).add(p).add(r).add(g).unbind('keyup', v).unbind('blur', m),
n.unbind(x),
s = null,
l = null,
c = null,
u = null,
d = null,
f = null,
h = null,
p = null,
g = null
};
e.extend(!0, a, {
destroy: w
}),
s.add(l).add(c).add(u).add(d).add(f).add(h).add(p).add(r).add(g).bind('keyup', v).bind('blur', m),
n.bind(x)
};
e.jPicker = {
List: [
],
Color: function (t) {
var n,
r,
i,
a,
s,
l,
c,
u = this,
d = [
],
f = function (e) {
for (var t = 0; d.length > t; t++) d[t].call(u, u, e)
},
h = function (e, t, d) {
var p = void 0 !== t;
if (!p) {
if ((void 0 === e || null == e || '' == e) && (e = 'all'), null == n) return null;
switch (e.toLowerCase()) {
case 'ahex':
return o.rgbaToHex({
r: n,
g: r,
b: i,
a: a
});
case 'hex':
return h('ahex').substring(0, 6);
case 'all':
return {
r: n,
g: r,
b: i,
a: a,
h: s,
s: l,
v: c,
hex: h.call(u, 'hex'),
ahex: h.call(u, 'ahex')
};
default:
for (var g = {
}, v = 0; e.length > v; v++) switch (e.charAt(v)) {
case 'r':
1 == e.length ? g = n : g.r = n;
break;
case 'g':
1 == e.length ? g = r : g.g = r;
break;
case 'b':
1 == e.length ? g = i : g.b = i;
break;
case 'a':
1 == e.length ? g = a : g.a = a;
break;
case 'h':
1 == e.length ? g = s : g.h = s;
break;
case 's':
1 == e.length ? g = l : g.s = l;
break;
case 'v':
1 == e.length ? g = c : g.v = c
}
return g == {
}
? h.call(u, 'all')  : g
}
}
if (null == d || d != u) {
var m = !1;
if (null == e && (e = ''), null == t) return null != n && (n = null, m = !0),
null != r && (r = null, m = !0),
null != i && (i = null, m = !0),
null != a && (a = null, m = !0),
null != s && (s = null, m = !0),
null != l && (l = null, m = !0),
null != c && (c = null, m = !0),
m && f.call(u, d || u),
void 0;
switch (e.toLowerCase()) {
case 'ahex':
case 'hex':
var g = o.hexToRgba(t && (t.ahex || t.hex) || t || '00000000');
h.call(u, 'rgba', {
r: g.r,
g: g.g,
b: g.b,
a: 'ahex' == e ? g.a : null != a ? a : 255
}, d);
break;
default:
if (t && (null != t.ahex || null != t.hex)) return h.call(u, 'ahex', t.ahex || t.hex || '00000000', d),
void 0;
var y = {
},
b = !1,
x = !1;
void 0 !== t.r && - 1 == !e.indexOf('r') && (e += 'r'),
void 0 !== t.g && - 1 == !e.indexOf('g') && (e += 'g'),
void 0 !== t.b && - 1 == !e.indexOf('b') && (e += 'b'),
void 0 !== t.a && - 1 == !e.indexOf('a') && (e += 'a'),
void 0 !== t.h && - 1 == !e.indexOf('h') && (e += 'h'),
void 0 !== t.s && - 1 == !e.indexOf('s') && (e += 's'),
void 0 !== t.v && - 1 == !e.indexOf('v') && (e += 'v');
for (var v = 0; e.length > v; v++) switch (e.charAt(v)) {
case 'r':
if (x) continue;
b = !0,
y.r = t && t.r && 0 | t.r || t && 0 | t || 0,
0 > y.r ? y.r = 0 : y.r > 255 && (y.r = 255),
n != y.r && (n = y.r, m = !0);
break;
case 'g':
if (x) continue;
b = !0,
y.g = t && t.g && 0 | t.g || t && 0 | t || 0,
0 > y.g ? y.g = 0 : y.g > 255 && (y.g = 255),
r != y.g && (r = y.g, m = !0);
break;
case 'b':
if (x) continue;
b = !0,
y.b = t && t.b && 0 | t.b || t && 0 | t || 0,
0 > y.b ? y.b = 0 : y.b > 255 && (y.b = 255),
i != y.b && (i = y.b, m = !0);
break;
case 'a':
y.a = t && null != t.a ? 0 | t.a : null != t ? 0 | t : 255,
0 > y.a ? y.a = 0 : y.a > 255 && (y.a = 255),
a != y.a && (a = y.a, m = !0);
break;
case 'h':
if (b) continue;
x = !0,
y.h = t && t.h && 0 | t.h || t && 0 | t || 0,
0 > y.h ? y.h = 0 : y.h > 360 && (y.h = 360),
s != y.h && (s = y.h, m = !0);
break;
case 's':
if (b) continue;
x = !0,
y.s = t && null != t.s ? 0 | t.s : null != t ? 0 | t : 100,
0 > y.s ? y.s = 0 : y.s > 100 && (y.s = 100),
l != y.s && (l = y.s, m = !0);
break;
case 'v':
if (b) continue;
x = !0,
y.v = t && null != t.v ? 0 | t.v : null != t ? 0 | t : 100,
0 > y.v ? y.v = 0 : y.v > 100 && (y.v = 100),
c != y.v && (c = y.v, m = !0)
}
if (m) {
if (b) {
n = n || 0,
r = r || 0,
i = i || 0;
var g = o.rgbToHsv({
r: n,
g: r,
b: i
});
s = g.h,
l = g.s,
c = g.v
} else if (x) {
s = s || 0,
l = null != l ? l : 100,
c = null != c ? c : 100;
var g = o.hsvToRgb({
h: s,
s: l,
v: c
});
n = g.r,
r = g.g,
i = g.b
}
a = null != a ? a : 255,
f.call(u, d || u)
}
}
}
},
p = function (t) {
e.isFunction(t) && d.push(t)
},
g = function (t) {
if (e.isFunction(t)) for (var n; - 1 != (n = e.inArray(t, d)); ) d.splice(n, 1)
},
v = function () {
d = null
};
e.extend(!0, u, {
val: h,
bind: p,
unbind: g,
destroy: v
}),
t && (null != t.ahex ? h('ahex', t)  : null != t.hex ? h((null != t.a ? 'a' : '') + 'hex', null != t.a ? {
ahex: t.hex + o.intToHex(t.a)
}
 : t)  : null != t.r && null != t.g && null != t.b ? h('rgb' + (null != t.a ? 'a' : ''), t)  : null != t.h && null != t.s && null != t.v && h('hsv' + (null != t.a ? 'a' : ''), t))
},
ColorMethods: {
hexToRgba: function (e) {
if (e = this.validateHex(e), '' == e) return {
r: null,
g: null,
b: null,
a: null
};
var t = '00',
n = '00',
r = '00',
i = '255';
return 6 == e.length && (e += 'ff'),
e.length > 6 ? (t = e.substring(0, 2), n = e.substring(2, 4), r = e.substring(4, 6), i = e.substring(6, e.length))  : (e.length > 4 && (t = e.substring(4, e.length), e = e.substring(0, 4)), e.length > 2 && (n = e.substring(2, e.length), e = e.substring(0, 2)), e.length > 0 && (r = e.substring(0, e.length))),
{
r: this.hexToInt(t),
g: this.hexToInt(n),
b: this.hexToInt(r),
a: this.hexToInt(i)
}
},
validateHex: function (e) {
return e = e.toLowerCase().replace(/[^a-f0-9]/g, ''),
e.length > 8 && (e = e.substring(0, 8)),
e
},
rgbaToHex: function (e) {
return this.intToHex(e.r) + this.intToHex(e.g) + this.intToHex(e.b) + this.intToHex(e.a)
},
intToHex: function (e) {
var t = (0 | e).toString(16);
return 1 == t.length && (t = '0' + t),
t.toLowerCase()
},
hexToInt: function (e) {
return parseInt(e, 16)
},
rgbToHsv: function (e) {
var t,
n = e.r / 255,
r = e.g / 255,
i = e.b / 255,
a = {
h: 0,
s: 0,
v: 0
},
o = 0,
s = 0;
return n >= r && n >= i ? (s = n, o = r > i ? i : r)  : r >= i && r >= n ? (s = r, o = n > i ? i : n)  : (s = i, o = r > n ? n : r),
a.v = s,
a.s = s ? (s - o) / s : 0,
a.s ? (t = s - o, a.h = n == s ? (r - i) / t : r == s ? 2 + (i - n) / t : 4 + (n - r) / t, a.h = parseInt(60 * a.h), 0 > a.h && (a.h += 360))  : a.h = 0,
a.s = 0 | 100 * a.s,
a.v = 0 | 100 * a.v,
a
},
hsvToRgb: function (e) {
var t = {
r: 0,
g: 0,
b: 0,
a: 100
},
n = e.h,
r = e.s,
i = e.v;
if (0 == r) t.r = t.g = t.b = 0 == i ? 0 : 0 | 255 * i / 100;
 else {
360 == n && (n = 0),
n /= 60,
r /= 100,
i /= 100;
var a = 0 | n,
o = n - a,
s = i * (1 - r),
l = i * (1 - r * o),
c = i * (1 - r * (1 - o));
switch (a) {
case 0:
t.r = i,
t.g = c,
t.b = s;
break;
case 1:
t.r = l,
t.g = i,
t.b = s;
break;
case 2:
t.r = s,
t.g = i,
t.b = c;
break;
case 3:
t.r = s,
t.g = l,
t.b = i;
break;
case 4:
t.r = c,
t.g = s,
t.b = i;
break;
case 5:
t.r = i,
t.g = s,
t.b = l
}
t.r = 0 | 255 * t.r,
t.g = 0 | 255 * t.g,
t.b = 0 | 255 * t.b
}
return t
}
}
};
var r = e.jPicker.Color,
a = e.jPicker.List,
o = e.jPicker.ColorMethods;
e.fn.jPicker = function (s) {
var l = arguments;
return this.each(function () {
var c = this,
u = e.extend(!0, {
}, e.fn.jPicker.defaults, s);
'input' == e(c).get(0).nodeName.toLowerCase() && (e.extend(!0, u, {
window: {
bindToInput: !0,
expandable: !0,
input: e(c)
}
}), '' == e(c).val() ? (u.color.active = new r({
hex: null
}), u.color.current = new r({
hex: null
}))  : o.validateHex(e(c).val()) && (u.color.active = new r({
hex: e(c).val(),
a: u.color.active.val('a')
}), u.color.current = new r({
hex: e(c).val(),
a: u.color.active.val('a')
}))),
u.window.expandable ? e(c).after('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>')  : u.window.liveUpdate = !1;
var d = 7 > parseFloat(navigator.appVersion.split('MSIE') [1]) && document.body.filters,
f = null,
h = null,
p = null,
g = null,
v = null,
m = null,
y = null,
b = null,
x = null,
w = null,
k = null,
S = null,
_ = null,
E = null,
A = null,
C = null,
T = null,
N = null,
M = null,
L = null,
G = null,
I = null,
O = null,
P = null,
j = null,
D = null,
B = null,
$ = null,
V = function (e) {
var t,
n,
r = xt.active,
i = (yt.clientPath, r.val('hex'));
switch (u.color.mode = e, e) {
case 'h':
if (setTimeout(function () {
Y.call(c, h, 'transparent'),
K.call(c, g, 0),
Z.call(c, g, 100),
K.call(c, v, 260),
Z.call(c, v, 100),
Y.call(c, p, 'transparent'),
K.call(c, y, 0),
Z.call(c, y, 100),
K.call(c, b, 260),
Z.call(c, b, 100),
K.call(c, x, 260),
Z.call(c, x, 100),
K.call(c, w, 260),
Z.call(c, w, 100),
K.call(c, S, 260),
Z.call(c, S, 100)
}, 0), _.range('all', {
minX: 0,
maxX: 100,
minY: 0,
maxY: 100
}), E.range('rangeY', {
minY: 0,
maxY: 360
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('s'),
y: 100 - r.val('v')
}, _),
E.val('y', 360 - r.val('h'), E);
break;
case 's':
if (setTimeout(function () {
Y.call(c, h, 'transparent'),
K.call(c, g, - 260),
K.call(c, v, - 520),
K.call(c, y, - 260),
K.call(c, b, - 520),
K.call(c, S, 260),
Z.call(c, S, 100)
}, 0), _.range('all', {
minX: 0,
maxX: 360,
minY: 0,
maxY: 100
}), E.range('rangeY', {
minY: 0,
maxY: 100
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('h'),
y: 100 - r.val('v')
}, _),
E.val('y', 100 - r.val('s'), E);
break;
case 'v':
if (setTimeout(function () {
Y.call(c, h, '000000'),
K.call(c, g, - 780),
K.call(c, v, 260),
Y.call(c, p, i),
K.call(c, y, - 520),
K.call(c, b, 260),
Z.call(c, b, 100),
K.call(c, S, 260),
Z.call(c, S, 100)
}, 0), _.range('all', {
minX: 0,
maxX: 360,
minY: 0,
maxY: 100
}), E.range('rangeY', {
minY: 0,
maxY: 100
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('h'),
y: 100 - r.val('s')
}, _),
E.val('y', 100 - r.val('v'), E);
break;
case 'r':
if (t = - 1040, n = - 780, _.range('all', {
minX: 0,
maxX: 255,
minY: 0,
maxY: 255
}), E.range('rangeY', {
minY: 0,
maxY: 255
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('b'),
y: 255 - r.val('g')
}, _),
E.val('y', 255 - r.val('r'), E);
break;
case 'g':
if (t = - 1560, n = - 1820, _.range('all', {
minX: 0,
maxX: 255,
minY: 0,
maxY: 255
}), E.range('rangeY', {
minY: 0,
maxY: 255
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('b'),
y: 255 - r.val('r')
}, _),
E.val('y', 255 - r.val('g'), E);
break;
case 'b':
if (t = - 2080, n = - 2860, _.range('all', {
minX: 0,
maxX: 255,
minY: 0,
maxY: 255
}), E.range('rangeY', {
minY: 0,
maxY: 255
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('r'),
y: 255 - r.val('g')
}, _),
E.val('y', 255 - r.val('b'), E);
break;
case 'a':
if (setTimeout(function () {
Y.call(c, h, 'transparent'),
K.call(c, g, - 260),
K.call(c, v, - 520),
K.call(c, y, 260),
K.call(c, b, 260),
Z.call(c, b, 100),
K.call(c, S, 0),
Z.call(c, S, 100)
}, 0), _.range('all', {
minX: 0,
maxX: 360,
minY: 0,
maxY: 100
}), E.range('rangeY', {
minY: 0,
maxY: 255
}), null == r.val('ahex')) break;
_.val('xy', {
x: r.val('h'),
y: 100 - r.val('v')
}, _),
E.val('y', 255 - r.val('a'), E);
break;
default:
throw 'Invalid Mode'
}
switch (e) {
case 'h':
break;
case 's':
case 'v':
case 'a':
setTimeout(function () {
Z.call(c, g, 100),
Z.call(c, y, 100),
K.call(c, x, 260),
Z.call(c, x, 100),
K.call(c, w, 260),
Z.call(c, w, 100)
}, 0);
break;
case 'r':
case 'g':
case 'b':
setTimeout(function () {
Y.call(c, h, 'transparent'),
Y.call(c, p, 'transparent'),
Z.call(c, y, 100),
Z.call(c, g, 100),
K.call(c, g, t),
K.call(c, v, t - 260),
K.call(c, y, n - 780),
K.call(c, b, n - 520),
K.call(c, x, n),
K.call(c, w, n - 260),
K.call(c, S, 260),
Z.call(c, S, 100)
}, 0)
}
null != r.val('ahex') && R.call(c, r)
},
R = function (e, t) {
(null == t || t != E && t != _) && q.call(c, e, t),
setTimeout(function () {
U.call(c, e),
H.call(c, e),
X.call(c, e)
}, 0)
},
F = function (e, t) {
var n = xt.active;
if (t == _ || null != n.val()) {
var r = e.val('all');
switch (u.color.mode) {
case 'h':
n.val('sv', {
s: r.x,
v: 100 - r.y
}, t);
break;
case 's':
case 'a':
n.val('hv', {
h: r.x,
v: 100 - r.y
}, t);
break;
case 'v':
n.val('hs', {
h: r.x,
s: 100 - r.y
}, t);
break;
case 'r':
n.val('gb', {
g: 255 - r.y,
b: r.x
}, t);
break;
case 'g':
n.val('rb', {
r: 255 - r.y,
b: r.x
}, t);
break;
case 'b':
n.val('rg', {
r: r.x,
g: 255 - r.y
}, t)
}
}
},
z = function (e, t) {
var n = xt.active;
if (t == E || null != n.val()) switch (u.color.mode) {
case 'h':
n.val('h', {
h: 360 - e.val('y')
}, t);
break;
case 's':
n.val('s', {
s: 100 - e.val('y')
}, t);
break;
case 'v':
n.val('v', {
v: 100 - e.val('y')
}, t);
break;
case 'r':
n.val('r', {
r: 255 - e.val('y')
}, t);
break;
case 'g':
n.val('g', {
g: 255 - e.val('y')
}, t);
break;
case 'b':
n.val('b', {
b: 255 - e.val('y')
}, t);
break;
case 'a':
n.val('a', 255 - e.val('y'), t)
}
},
q = function (e, t) {
if (t != _) switch (u.color.mode) {
case 'h':
var n = e.val('sv');
_.val('xy', {
x: null != n ? n.s : 100,
y: 100 - (null != n ? n.v : 100)
}, t);
break;
case 's':
case 'a':
var r = e.val('hv');
_.val('xy', {
x: r && r.h || 0,
y: 100 - (null != r ? r.v : 100)
}, t);
break;
case 'v':
var i = e.val('hs');
_.val('xy', {
x: i && i.h || 0,
y: 100 - (null != i ? i.s : 100)
}, t);
break;
case 'r':
var a = e.val('bg');
_.val('xy', {
x: a && a.b || 0,
y: 255 - (a && a.g || 0)
}, t);
break;
case 'g':
var o = e.val('br');
_.val('xy', {
x: o && o.b || 0,
y: 255 - (o && o.r || 0)
}, t);
break;
case 'b':
var s = e.val('rg');
_.val('xy', {
x: s && s.r || 0,
y: 255 - (s && s.g || 0)
}, t)
}
if (t != E) switch (u.color.mode) {
case 'h':
E.val('y', 360 - (e.val('h') || 0), t);
break;
case 's':
var l = e.val('s');
E.val('y', 100 - (null != l ? l : 100), t);
break;
case 'v':
var c = e.val('v');
E.val('y', 100 - (null != c ? c : 100), t);
break;
case 'r':
E.val('y', 255 - (e.val('r') || 0), t);
break;
case 'g':
E.val('y', 255 - (e.val('g') || 0), t);
break;
case 'b':
E.val('y', 255 - (e.val('b') || 0), t);
break;
case 'a':
var d = e.val('a');
E.val('y', 255 - (null != d ? d : 255), t)
}
},
U = function (e) {
try {
var t = e.val('all');
L.css({
backgroundColor: t && '#' + t.hex || 'transparent'
}),
Z.call(c, L, t && Math.precision(100 * t.a / 255, 4) || 0)
} catch (n) {
}
},
H = function (e) {
switch (u.color.mode) {
case 'h':
Y.call(c, h, new r({
h: e.val('h') || 0,
s: 100,
v: 100
}).val('hex'));
break;
case 's':
case 'a':
var t = e.val('s');
Z.call(c, v, 100 - (null != t ? t : 100));
break;
case 'v':
var n = e.val('v');
Z.call(c, g, null != n ? n : 100);
break;
case 'r':
Z.call(c, v, Math.precision(100 * ((e.val('r') || 0) / 255), 4));
break;
case 'g':
Z.call(c, v, Math.precision(100 * ((e.val('g') || 0) / 255), 4));
break;
case 'b':
Z.call(c, v, Math.precision(100 * ((e.val('b') || 0) / 255)))
}
var i = e.val('a');
Z.call(c, m, Math.precision(100 * (255 - (i || 0)) / 255, 4))
},
X = function (e) {
switch (u.color.mode) {
case 'h':
var t = e.val('a');
Z.call(c, k, Math.precision(100 * (255 - (t || 0)) / 255, 4));
break;
case 's':
var n = e.val('hva'),
i = new r({
h: n && n.h || 0,
s: 100,
v: null != n ? n.v : 100
});
Y.call(c, p, i.val('hex')),
Z.call(c, b, 100 - (null != n ? n.v : 100)),
Z.call(c, k, Math.precision(100 * (255 - (n && n.a || 0)) / 255, 4));
break;
case 'v':
var a = e.val('hsa'),
o = new r({
h: a && a.h || 0,
s: null != a ? a.s : 100,
v: 100
});
Y.call(c, p, o.val('hex')),
Z.call(c, k, Math.precision(100 * (255 - (a && a.a || 0)) / 255, 4));
break;
case 'r':
case 'g':
case 'b':
var s = 0,
l = 0,
d = e.val('rgba');
'r' == u.color.mode ? (s = d && d.b || 0, l = d && d.g || 0)  : 'g' == u.color.mode ? (s = d && d.b || 0, l = d && d.r || 0)  : 'b' == u.color.mode && (s = d && d.r || 0, l = d && d.g || 0);
var f = l > s ? s : l;
Z.call(c, b, s > l ? Math.precision(100 * ((s - l) / (255 - l)), 4)  : 0),
Z.call(c, x, l > s ? Math.precision(100 * ((l - s) / (255 - s)), 4)  : 0),
Z.call(c, w, Math.precision(100 * (f / 255), 4)),
Z.call(c, k, Math.precision(100 * (255 - (d && d.a || 0)) / 255, 4));
break;
case 'a':
var t = e.val('a');
Y.call(c, p, e.val('hex') || '000000'),
Z.call(c, k, null != t ? 0 : 100),
Z.call(c, S, null != t ? 100 : 0)
}
},
Y = function (e, t) {
e.css({
backgroundColor: t && 6 == t.length && '#' + t || 'transparent'
})
},
W = function (e, t) {
!d || - 1 == t.indexOf('AlphaBar.png') && - 1 == t.indexOf('Bars.png') && - 1 == t.indexOf('Maps.png') ? e.css({
backgroundImage: 'url(' + t + ')'
})  : (e.attr('pngSrc', t), e.css({
backgroundImage: 'none',
filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + t + '\', sizingMethod=\'scale\')'
}))
},
K = function (e, t) {
e.css({
top: t + 'px'
})
},
Z = function (e, t) {
if (e.css({
visibility: t > 0 ? 'visible' : 'hidden'
}), t > 0 && 100 > t) if (d) {
var n = e.attr('pngSrc');
null == n || - 1 == n.indexOf('AlphaBar.png') && - 1 == n.indexOf('Bars.png') && - 1 == n.indexOf('Maps.png') ? e.css({
opacity: Math.precision(t / 100, 4)
})  : e.css({
filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + n + '\', sizingMethod=\'scale\') progid:DXImageTransform.Microsoft.Alpha(opacity=' + t + ')'
})
} else e.css({
opacity: Math.precision(t / 100, 4)
});
 else if (0 == t || 100 == t) if (d) {
var n = e.attr('pngSrc');
null == n || - 1 == n.indexOf('AlphaBar.png') && - 1 == n.indexOf('Bars.png') && - 1 == n.indexOf('Maps.png') ? e.css({
opacity: ''
})  : e.css({
filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + n + '\', sizingMethod=\'scale\')'
})
} else e.css({
opacity: ''
})
},
Q = function () {
xt.active.val('ahex', xt.current.val('ahex'))
},
J = function () {
xt.current.val('ahex', xt.active.val('ahex'))
},
et = function (t) {
e(this).parents('tbody:first').find('input:radio[value!="' + t.target.value + '"]').removeAttr('checked'),
V.call(c, t.target.value)
},
tt = function () {
Q.call(c)
},
nt = function () {
Q.call(c),
u.window.expandable && gt.call(c),
e.isFunction(ht) && ht.call(c, xt.active, O)
},
rt = function () {
J.call(c),
u.window.expandable && gt.call(c),
e.isFunction(dt) && dt.call(c, xt.active, I)
},
it = function () {
pt.call(c)
},
at = function (e) {
var t = e.val('hex');
G.css({
backgroundColor: t && '#' + t || 'transparent'
}),
Z.call(c, G, Math.precision(100 * (e.val('a') || 0) / 255, 4))
},
ot = function (e) {
var t = e.val('hex'),
n = e.val('va');
j.css({
backgroundColor: t && '#' + t || 'transparent'
}),
Z.call(c, D, Math.precision(100 * (255 - (n && n.a || 0)) / 255, 4)),
u.window.bindToInput && u.window.updateInputColor && u.window.input.css({
backgroundColor: t && '#' + t || 'transparent',
color: null == n || n.v > 75 ? '#000000' : '#ffffff'
})
},
st = function (t) {
u.window.element,
u.window.page,
C = parseInt(f.css('left')),
T = parseInt(f.css('top')),
N = t.pageX,
M = t.pageY,
e(document).bind('mousemove', lt).bind('mouseup', ct),
t.preventDefault()
},
lt = function (t) {
return f.css({
left: C - (N - t.pageX) + 'px',
top: T - (M - t.pageY) + 'px'
}),
u.window.expandable && !e.support.boxModel && f.prev().css({
left: f.css('left'),
top: f.css('top')
}),
t.stopPropagation(),
t.preventDefault(),
!1
},
ct = function (t) {
return e(document).unbind('mousemove', lt).unbind('mouseup', ct),
t.stopPropagation(),
t.preventDefault(),
!1
},
ut = function (t) {
return t.preventDefault(),
t.stopPropagation(),
xt.active.val('ahex', e(this).attr('title') || null, t.target),
!1
},
dt = e.isFunction(l[1]) && l[1] || null,
ft = e.isFunction(l[2]) && l[2] || null,
ht = e.isFunction(l[3]) && l[3] || null,
pt = function () {
xt.current.val('ahex', xt.active.val('ahex'));
var t = function () {
if (u.window.expandable && !e.support.boxModel) {
var t = f.find('table:first');
f.before('<iframe/>'),
f.prev().css({
width: t.width(),
height: f.height(),
opacity: 0,
position: 'absolute',
left: f.css('left'),
top: f.css('top')
})
}
};
switch (u.window.expandable && (e(document.body).children('div.jPicker.Container').css({
zIndex: 10
}), f.css({
zIndex: 20
})), u.window.effects.type) {
case 'fade':
f.fadeIn(u.window.effects.speed.show, t);
break;
case 'slide':
f.slideDown(u.window.effects.speed.show, t);
break;
case 'show':
default:
f.show(u.window.effects.speed.show, t)
}
},
gt = function () {
var t = function () {
u.window.expandable && f.css({
zIndex: 10
}),
u.window.expandable && !e.support.boxModel && f.prev().remove()
};
switch (u.window.effects.type) {
case 'fade':
f.fadeOut(u.window.effects.speed.hide, t);
break;
case 'slide':
f.slideUp(u.window.effects.speed.hide, t);
break;
case 'show':
default:
f.hide(u.window.effects.speed.hide, t)
}
},
vt = function () {
var a = u.window,
o = a.expandable ? e(c).next().find('.Container:first')  : null;
f = a.expandable ? e('<div/>')  : e(c),
f.addClass('jPicker Container'),
a.expandable && f.hide(),
f.get(0).onselectstart = function () {
return !1
};
var s = xt.active.val('all');
0 > a.alphaPrecision ? a.alphaPrecision = 0 : a.alphaPrecision > 2 && (a.alphaPrecision = 2);
var l = '<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' + (a.expandable ? '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' : '') + '<tr><td rowspan="9"><h2 class="Title">' + (a.title || bt.text.title) + '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' + yt.clientPath + yt.colorMap.arrow.file + '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' + yt.clientPath + yt.colorBar.arrow.file + '" class="Arrow"/></div></td><td colspan="2" class="Preview">' + bt.text.newColor + '<div><span class="Active" title="' + bt.tooltips.colors.newColor + '">&nbsp;</span><span class="Current" title="' + bt.tooltips.colors.currentColor + '">&nbsp;</span></div>' + bt.text.currentColor + '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' + bt.text.ok + '" title="' + bt.tooltips.buttons.ok + '"/><input type="button" class="Cancel" value="' + bt.text.cancel + '" title="' + bt.tooltips.buttons.cancel + '"/><hr/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' + bt.tooltips.hue.radio + '"><input type="radio" value="h"' + ('h' == u.color.mode ? ' checked="checked"' : '') + '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (null != s ? s.h : '') + '" title="' + bt.tooltips.hue.textbox + '"/>&nbsp;&deg;</td></tr><tr class="Saturation"><td class="Radio"><label title="' + bt.tooltips.saturation.radio + '"><input type="radio" value="s"' + ('s' == u.color.mode ? ' checked="checked"' : '') + '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (null != s ? s.s : '') + '" title="' + bt.tooltips.saturation.textbox + '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' + bt.tooltips.value.radio + '"><input type="radio" value="v"' + ('v' == u.color.mode ? ' checked="checked"' : '') + '/>V:</label><br/><br/></td><td class="Text"><input type="text" maxlength="3" value="' + (null != s ? s.v : '') + '" title="' + bt.tooltips.value.textbox + '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' + bt.tooltips.red.radio + '"><input type="radio" value="r"' + ('r' == u.color.mode ? ' checked="checked"' : '') + '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (null != s ? s.r : '') + '" title="' + bt.tooltips.red.textbox + '"/></td></tr><tr class="Green"><td class="Radio"><label title="' + bt.tooltips.green.radio + '"><input type="radio" value="g"' + ('g' == u.color.mode ? ' checked="checked"' : '') + '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (null != s ? s.g : '') + '" title="' + bt.tooltips.green.textbox + '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' + bt.tooltips.blue.radio + '"><input type="radio" value="b"' + ('b' == u.color.mode ? ' checked="checked"' : '') + '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (null != s ? s.b : '') + '" title="' + bt.tooltips.blue.textbox + '"/></td></tr><tr class="Alpha"><td class="Radio">' + (a.alphaSupport ? '<label title="' + bt.tooltips.alpha.radio + '"><input type="radio" value="a"' + ('a' == u.color.mode ? ' checked="checked"' : '') + '/>A:</label>' : '&nbsp;') + '</td><td class="Text">' + (a.alphaSupport ? '<input type="text" maxlength="' + (3 + a.alphaPrecision) + '" value="' + (null != s ? Math.precision(100 * s.a / 255, a.alphaPrecision)  : '') + '" title="' + bt.tooltips.alpha.textbox + '"/>&nbsp;%' : '&nbsp;') + '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' + bt.tooltips.hex.textbox + '">#:<input type="text" maxlength="6" class="Hex" value="' + (null != s ? s.hex : '') + '"/></label>' + (a.alphaSupport ? '<input type="text" maxlength="2" class="AHex" value="' + (null != s ? s.ahex.substring(6)  : '') + '" title="' + bt.tooltips.hex.alpha + '"/></td>' : '&nbsp;') + '</tr></tbody></table>';
a.expandable ? (f.html(l), 0 == e(document.body).children('div.jPicker.Container').length ? e(document.body).prepend(f)  : e(document.body).children('div.jPicker.Container:last').after(f), f.mousedown(function () {
e(document.body).children('div.jPicker.Container').css({
zIndex: 10
}),
f.css({
zIndex: 20
})
}), f.css({
left: 'left' == a.position.x ? o.offset().left - 530 - ('center' == a.position.y ? 25 : 0) + 'px' : 'center' == a.position.x ? o.offset().left - 260 + 'px' : 'right' == a.position.x ? o.offset().left - 10 + ('center' == a.position.y ? 25 : 0) + 'px' : 'screenCenter' == a.position.x ? (e(document).width() >> 1) - 260 + 'px' : o.offset().left + parseInt(a.position.x) + 'px',
position: 'absolute',
top: 'top' == a.position.y ? o.offset().top - 312 + 'px' : 'center' == a.position.y ? o.offset().top - 156 + 'px' : 'bottom' == a.position.y ? o.offset().top + 25 + 'px' : o.offset().top + parseInt(a.position.y) + 'px'
}))  : (f = e(c), f.html(l));
var d = f.find('tbody:first');
h = d.find('div.Map:first'),
p = d.find('div.Bar:first');
var C = h.find('span'),
T = p.find('span');
g = C.filter('.Map1:first'),
v = C.filter('.Map2:first'),
m = C.filter('.Map3:first'),
y = T.filter('.Map1:first'),
b = T.filter('.Map2:first'),
x = T.filter('.Map3:first'),
w = T.filter('.Map4:first'),
k = T.filter('.Map5:first'),
S = T.filter('.Map6:first'),
_ = new t(h, {
map: {
width: yt.colorMap.width,
height: yt.colorMap.height
},
arrow: {
image: yt.clientPath + yt.colorMap.arrow.file,
width: yt.colorMap.arrow.width,
height: yt.colorMap.arrow.height
}
}),
_.bind(F),
E = new t(p, {
map: {
width: yt.colorBar.width,
height: yt.colorBar.height
},
arrow: {
image: yt.clientPath + yt.colorBar.arrow.file,
width: yt.colorBar.arrow.width,
height: yt.colorBar.arrow.height
}
}),
E.bind(z),
A = new n(d, xt.active, a.expandable && a.bindToInput ? a.input : null, a.alphaPrecision);
var N = null != s ? s.hex : null,
M = d.find('.Preview'),
q = d.find('.Button');
if (L = M.find('.Active:first').css({
backgroundColor: N && '#' + N || 'transparent'
}), G = M.find('.Current:first').css({
backgroundColor: N && '#' + N || 'transparent'
}).bind('click', tt), Z.call(c, G, Math.precision(100 * xt.current.val('a')) / 255, 4), I = q.find('.Ok:first').bind('click', rt), O = q.find('.Cancel:first').bind('click', nt), P = q.find('.Grid:first'), setTimeout(function () {
W.call(c, g, yt.clientPath + 'Maps.png'),
W.call(c, v, yt.clientPath + 'Maps.png'),
W.call(c, m, yt.clientPath + 'map-opacity.png'),
W.call(c, y, yt.clientPath + 'Bars.png'),
W.call(c, b, yt.clientPath + 'Bars.png'),
W.call(c, x, yt.clientPath + 'Bars.png'),
W.call(c, w, yt.clientPath + 'Bars.png'),
W.call(c, k, yt.clientPath + 'bar-opacity.png'),
W.call(c, S, yt.clientPath + 'AlphaBar.png'),
W.call(c, M.find('div:first'), yt.clientPath + 'preview-opacity.png')
}, 0), d.find('td.Radio input').bind('click', et), xt.quickList && xt.quickList.length > 0) {
var U = '';
for (i = 0; xt.quickList.length > i; i++) {
'string' == ('' + typeof xt.quickList[i]).toLowerCase() && (xt.quickList[i] = new r({
hex: xt.quickList[i]
}));
var H = xt.quickList[i].val('a'),
X = xt.quickList[i].val('ahex');
!a.alphaSupport && X && (X = X.substring(0, 6) + 'ff');
var Y = xt.quickList[i].val('hex');
U += '<span class="QuickColor"' + (X && ' title="#' + X + '"' || '') + ' style="background-color:' + (Y && '#' + Y || '') + ';' + (Y ? '' : 'background-image:url(' + yt.clientPath + 'NoColor.png)') + (a.alphaSupport && H && 255 > H ? ';opacity:' + Math.precision(H / 255, 4) + ';filter:Alpha(opacity=' + Math.precision(H / 2.55, 4) + ')' : '') + '">&nbsp;</span>'
}
W.call(c, P, yt.clientPath + 'bar-opacity.png'),
P.html(U),
P.find('.QuickColor').click(ut)
}
V.call(c, u.color.mode),
xt.active.bind(R),
e.isFunction(ft) && xt.active.bind(ft),
xt.current.bind(at),
a.expandable ? (c.icon = o.parents('.Icon:first'), j = c.icon.find('.Color:first').css({
backgroundColor: N && '#' + N || 'transparent'
}), D = c.icon.find('.Alpha:first'), W.call(c, D, yt.clientPath + 'bar-opacity.png'), Z.call(c, D, Math.precision(100 * (255 - (null != s ? s.a : 0)) / 255, 4)), B = c.icon.find('.Image:first').css({
backgroundImage: 'url(' + yt.clientPath + yt.picker.file + ')'
}).bind('click', it), a.bindToInput && a.updateInputColor && a.input.css({
backgroundColor: N && '#' + N || 'transparent',
color: null == s || s.v > 75 ? '#000000' : '#ffffff'
}), $ = d.find('.Move:first').bind('mousedown', st), xt.active.bind(ot))  : pt.call(c)
},
mt = function () {
for (f.find('td.Radio input').unbind('click', et), G.unbind('click', tt), O.unbind('click', nt), I.unbind('click', rt), u.window.expandable && (B.unbind('click', it), $.unbind('mousedown', st), c.icon = null), f.find('.QuickColor').unbind('click', ut), h = null, p = null, g = null, v = null, m = null, y = null, b = null, x = null, w = null, k = null, S = null, _.destroy(), _ = null, E.destroy(), E = null, A.destroy(), A = null, L = null, G = null, I = null, O = null, P = null, dt = null, ht = null, ft = null, f.html(''), i = 0; a.length > i; i++) a[i] == c && a.splice(i, 1)
},
yt = u.images,
bt = u.localization,
xt = {
active: 'string' == ('' + typeof u.color.active).toLowerCase() ? new r({
ahex: !u.window.alphaSupport && u.color.active ? u.color.active.substring(0, 6) + 'ff' : u.color.active
})  : new r({
ahex: !u.window.alphaSupport && u.color.active.val('ahex') ? u.color.active.val('ahex').substring(0, 6) + 'ff' : u.color.active.val('ahex')
}),
current: 'string' == ('' + typeof u.color.active).toLowerCase() ? new r({
ahex: !u.window.alphaSupport && u.color.active ? u.color.active.substring(0, 6) + 'ff' : u.color.active
})  : new r({
ahex: !u.window.alphaSupport && u.color.active.val('ahex') ? u.color.active.val('ahex').substring(0, 6) + 'ff' : u.color.active.val('ahex')
}),
quickList: u.color.quickList
};
e.extend(!0, c, {
commitCallback: dt,
liveCallback: ft,
cancelCallback: ht,
color: xt,
show: pt,
hide: gt,
destroy: mt
}),
a.push(c),
setTimeout(function () {
vt.call(c)
}, 0)
})
},
e.fn.jPicker.defaults = {
window: {
title: null,
effects: {
type: 'slide',
speed: {
show: 'slow',
hide: 'fast'
}
},
position: {
x: 'screenCenter',
y: 'top'
},
expandable: !1,
liveUpdate: !0,
alphaSupport: !1,
alphaPrecision: 0,
updateInputColor: !0
},
color: {
mode: 'h',
active: new r({
ahex: '#ffcc00ff'
}),
quickList: [
new r({
h: 360,
s: 33,
v: 100
}),
new r({
h: 360,
s: 66,
v: 100
}),
new r({
h: 360,
s: 100,
v: 100
}),
new r({
h: 360,
s: 100,
v: 75
}),
new r({
h: 360,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 100
}),
new r({
h: 30,
s: 33,
v: 100
}),
new r({
h: 30,
s: 66,
v: 100
}),
new r({
h: 30,
s: 100,
v: 100
}),
new r({
h: 30,
s: 100,
v: 75
}),
new r({
h: 30,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 90
}),
new r({
h: 60,
s: 33,
v: 100
}),
new r({
h: 60,
s: 66,
v: 100
}),
new r({
h: 60,
s: 100,
v: 100
}),
new r({
h: 60,
s: 100,
v: 75
}),
new r({
h: 60,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 80
}),
new r({
h: 90,
s: 33,
v: 100
}),
new r({
h: 90,
s: 66,
v: 100
}),
new r({
h: 90,
s: 100,
v: 100
}),
new r({
h: 90,
s: 100,
v: 75
}),
new r({
h: 90,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 70
}),
new r({
h: 120,
s: 33,
v: 100
}),
new r({
h: 120,
s: 66,
v: 100
}),
new r({
h: 120,
s: 100,
v: 100
}),
new r({
h: 120,
s: 100,
v: 75
}),
new r({
h: 120,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 60
}),
new r({
h: 150,
s: 33,
v: 100
}),
new r({
h: 150,
s: 66,
v: 100
}),
new r({
h: 150,
s: 100,
v: 100
}),
new r({
h: 150,
s: 100,
v: 75
}),
new r({
h: 150,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 50
}),
new r({
h: 180,
s: 33,
v: 100
}),
new r({
h: 180,
s: 66,
v: 100
}),
new r({
h: 180,
s: 100,
v: 100
}),
new r({
h: 180,
s: 100,
v: 75
}),
new r({
h: 180,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 40
}),
new r({
h: 210,
s: 33,
v: 100
}),
new r({
h: 210,
s: 66,
v: 100
}),
new r({
h: 210,
s: 100,
v: 100
}),
new r({
h: 210,
s: 100,
v: 75
}),
new r({
h: 210,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 30
}),
new r({
h: 240,
s: 33,
v: 100
}),
new r({
h: 240,
s: 66,
v: 100
}),
new r({
h: 240,
s: 100,
v: 100
}),
new r({
h: 240,
s: 100,
v: 75
}),
new r({
h: 240,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 20
}),
new r({
h: 270,
s: 33,
v: 100
}),
new r({
h: 270,
s: 66,
v: 100
}),
new r({
h: 270,
s: 100,
v: 100
}),
new r({
h: 270,
s: 100,
v: 75
}),
new r({
h: 270,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 10
}),
new r({
h: 300,
s: 33,
v: 100
}),
new r({
h: 300,
s: 66,
v: 100
}),
new r({
h: 300,
s: 100,
v: 100
}),
new r({
h: 300,
s: 100,
v: 75
}),
new r({
h: 300,
s: 100,
v: 50
}),
new r({
h: 180,
s: 0,
v: 0
}),
new r({
h: 330,
s: 33,
v: 100
}),
new r({
h: 330,
s: 66,
v: 100
}),
new r({
h: 330,
s: 100,
v: 100
}),
new r({
h: 330,
s: 100,
v: 75
}),
new r({
h: 330,
s: 100,
v: 50
}),
new r
]
},
images: {
clientPath: '/jPicker/images/',
colorMap: {
width: 256,
height: 256,
arrow: {
file: 'mappoint.gif',
width: 15,
height: 15
}
},
colorBar: {
width: 20,
height: 256,
arrow: {
file: 'rangearrows.gif',
width: 20,
height: 7
}
},
picker: {
file: 'picker.gif',
width: 25,
height: 24
}
},
localization: {
text: {
title: 'Drag Markers To Pick A Color',
newColor: 'new',
currentColor: 'current',
ok: 'OK',
cancel: 'Cancel'
},
tooltips: {
colors: {
newColor: 'New Color - Press &ldquo;OK&rdquo; To Commit',
currentColor: 'Click To Revert To Original Color'
},
buttons: {
ok: 'Commit To This Color Selection',
cancel: 'Cancel And Revert To Original Color'
},
hue: {
radio: 'Set To &ldquo;Hue&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)'
},
saturation: {
radio: 'Set To &ldquo;Saturation&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Saturation&rdquo; Value (0-100%)'
},
value: {
radio: 'Set To &ldquo;Value&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Value&rdquo; Value (0-100%)'
},
red: {
radio: 'Set To &ldquo;Red&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Red&rdquo; Value (0-255)'
},
green: {
radio: 'Set To &ldquo;Green&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Green&rdquo; Value (0-255)'
},
blue: {
radio: 'Set To &ldquo;Blue&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Blue&rdquo; Value (0-255)'
},
alpha: {
radio: 'Set To &ldquo;Alpha&rdquo; Color Mode',
textbox: 'Enter A &ldquo;Alpha&rdquo; Value (0-100)'
},
hex: {
textbox: 'Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)',
alpha: 'Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)'
}
}
}
}
}(jQuery, '1.1.5'),
svgedit = {
NS: {
HTML: 'http://www.w3.org/1999/xhtml',
MATH: 'http://www.w3.org/1998/Math/MathML',
SE: 'http://svg-edit.googlecode.com',
SVG: 'http://www.w3.org/2000/svg',
XLINK: 'http://www.w3.org/1999/xlink',
XML: 'http://www.w3.org/XML/1998/namespace',
XMLNS: 'http://www.w3.org/2000/xmlns/'
}
},
svgedit.getReverseNS = function () {
var e = {
};
return $.each(this.NS, function (t, n) {
e[n] = t.toLowerCase()
}),
e
},
function () {
svgedit.browser || (svgedit.browser = {
});
var e = svgedit.NS,
t = function () {
return !!document.createElementNS && !!document.createElementNS(e.SVG, 'svg').createSVGRect
}();
if (svgedit.browser.supportsSvg = function () {
return t
}, !svgedit.browser.supportsSvg()) return window.location = 'browser-not-supported.html',
void 0;
var n = navigator.userAgent,
r = document.createElementNS(e.SVG, 'svg'),
i = !!window.opera,
a = n.indexOf('AppleWebKit') >= 0,
o = n.indexOf('Gecko/') >= 0,
s = n.indexOf('MSIE') >= 0,
l = n.indexOf('Chrome/') >= 0,
c = n.indexOf('Windows') >= 0,
u = n.indexOf('Macintosh') >= 0,
d = 'ontouchstart' in window,
f = function () {
return !!r.querySelector
}(),
h = function () {
return !!document.evaluate
}(),
p = function () {
var t = document.createElementNS(e.SVG, 'path');
t.setAttribute('d', 'M0,0 10,10');
var n = t.pathSegList,
r = t.createSVGPathSegLinetoAbs(5, 5);
try {
return n.replaceItem(r, 0),
!0
} catch (i) {
}
return !1
}(),
g = function () {
var t = document.createElementNS(e.SVG, 'path');
t.setAttribute('d', 'M0,0 10,10');
var n = t.pathSegList,
r = t.createSVGPathSegLinetoAbs(5, 5);
try {
return n.insertItemBefore(r, 0),
!0
} catch (i) {
}
return !1
}(),
v = function () {
var t = document.createElementNS(e.SVG, 'svg'),
n = document.createElementNS(e.SVG, 'svg');
document.documentElement.appendChild(t),
n.setAttribute('x', 5),
t.appendChild(n);
var r = document.createElementNS(e.SVG, 'text');
r.textContent = 'a',
n.appendChild(r);
var i = r.getStartPositionOfChar(0).x;
return document.documentElement.removeChild(t),
0 === i
}(),
m = function () {
var t = document.createElementNS(e.SVG, 'svg');
document.documentElement.appendChild(t);
var n = document.createElementNS(e.SVG, 'path');
n.setAttribute('d', 'M0,0 C0,0 10,10 10,0'),
t.appendChild(n);
var r = n.getBBox();
return document.documentElement.removeChild(t),
r.height > 4 && 5 > r.height
}(),
y = function () {
var t = document.createElementNS(e.SVG, 'svg');
document.documentElement.appendChild(t);
var n = document.createElementNS(e.SVG, 'path');
n.setAttribute('d', 'M0,0 10,0');
var r = document.createElementNS(e.SVG, 'path');
r.setAttribute('d', 'M5,0 15,0');
var i = document.createElementNS(e.SVG, 'g');
i.appendChild(n),
i.appendChild(r),
t.appendChild(i);
var a = i.getBBox();
return document.documentElement.removeChild(t),
15 == a.width
}(),
b = function () {
return i
}(),
x = function () {
var t = document.createElementNS(e.SVG, 'rect');
t.setAttribute('x', 0.1);
var n = t.cloneNode(!1),
r = - 1 == n.getAttribute('x').indexOf(',');
return r || $.alert('NOTE: This version of Opera is known to contain bugs in SVG-edit.\n\t\tPlease upgrade to the <a href="http://opera.com">latest version</a> in which the problems have been fixed.'),
r
}(),
w = function () {
var t = document.createElementNS(e.SVG, 'rect');
return t.setAttribute('style', 'vector-effect:non-scaling-stroke'),
'non-scaling-stroke' === t.style.vectorEffect
}(),
k = function () {
var t = document.createElementNS(e.SVG, 'rect'),
n = t.transform.baseVal,
i = r.createSVGTransform();
return n.appendItem(i),
n.getItem(0) == i
}();
svgedit.browser.isOpera = function () {
return i
},
svgedit.browser.isWebkit = function () {
return a
},
svgedit.browser.isGecko = function () {
return o
},
svgedit.browser.isIE = function () {
return s
},
svgedit.browser.isChrome = function () {
return l
},
svgedit.browser.isWindows = function () {
return c
},
svgedit.browser.isMac = function () {
return u
},
svgedit.browser.isTouch = function () {
return d
},
svgedit.browser.supportsSelectors = function () {
return f
},
svgedit.browser.supportsXpath = function () {
return h
},
svgedit.browser.supportsPathReplaceItem = function () {
return p
},
svgedit.browser.supportsPathInsertItemBefore = function () {
return g
},
svgedit.browser.supportsPathBBox = function () {
return m
},
svgedit.browser.supportsHVLineContainerBBox = function () {
return y
},
svgedit.browser.supportsGoodTextCharPos = function () {
return v
},
svgedit.browser.supportsEditableText = function () {
return b
},
svgedit.browser.supportsGoodDecimals = function () {
return x
},
svgedit.browser.supportsNonScalingStroke = function () {
return w
},
svgedit.browser.supportsNativeTransformLists = function () {
return k
}
}(),
function () {
function e(e) {
var t = e.matrix,
n = '';
switch (e.type) {
case 1:
n = 'matrix(' + [t.a,
t.b,
t.c,
t.d,
t.e,
t.f].join(',') + ')';
break;
case 2:
n = 'translate(' + t.e + ',' + t.f + ')';
break;
case 3:
n = t.a == t.d ? 'scale(' + t.a + ')' : 'scale(' + t.a + ',' + t.d + ')';
break;
case 4:
var r = 0,
i = 0;
if (0 != e.angle) {
var a = 1 - t.a;
i = (a * t.f + t.b * t.e) / (a * a + t.b * t.b),
r = (t.e - t.b * i) / a
}
n = 'rotate(' + e.angle + ' ' + r + ',' + i + ')'
}
return n
}
svgedit.transformlist || (svgedit.transformlist = {
});
var t = document.createElementNS(svgedit.NS.SVG, 'svg'),
n = {
};
svgedit.transformlist.SVGTransformList = function (r) {
this._elem = r || null,
this._xforms = [
],
this._update = function () {
var n = '';
t.createSVGMatrix();
for (var r = 0; this.numberOfItems > r; ++r) {
var i = this._list.getItem(r);
n += e(i) + ' '
}
this._elem.setAttribute('transform', n)
},
this._list = this,
this._init = function () {
var e = this._elem.getAttribute('transform');
if (e) for (var n = /\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/, r = !0; r; ) if (r = e.match(n), e = e.replace(n, ''), r && r[1]) {
var i = r[1],
a = i.split(/\s*\(/),
o = a[0],
s = a[1].match(/\s*(.*?)\s*\)/);
s[1] = s[1].replace(/(\d)-/g, '$1 -');
var l = s[1].split(/[, ]+/),
c = 'abcdef'.split(''),
u = t.createSVGMatrix();
$.each(l, function (e, t) {
l[e] = parseFloat(t),
'matrix' == o && (u[c[e]] = l[e])
});
var d = t.createSVGTransform(),
f = 'set' + o.charAt(0).toUpperCase() + o.slice(1),
h = 'matrix' == o ? [
u
] : l;
'scale' == o && 1 == h.length ? h.push(h[0])  : 'translate' == o && 1 == h.length ? h.push(0)  : 'rotate' == o && 1 == h.length && h.push(0, 0),
d[f].apply(d, h),
this._list.appendItem(d)
}
},
this._removeFromOtherLists = function (e) {
if (e) {
var t = !1;
for (var r in n) {
for (var i = n[r], a = 0, o = i._xforms.length; o > a; ++a) if (i._xforms[a] == e) {
t = !0,
i.removeItem(a);
break
}
if (t) break
}
}
},
this.numberOfItems = 0,
this.clear = function () {
this.numberOfItems = 0,
this._xforms = [
]
},
this.initialize = function (e) {
this.numberOfItems = 1,
this._removeFromOtherLists(e),
this._xforms = [
e
]
},
this.getItem = function (e) {
if (this.numberOfItems > e && e >= 0) return this._xforms[e];
throw {
code: 1
}
},
this.insertItemBefore = function (e, t) {
var n = null;
if (t >= 0) if (this.numberOfItems > t) {
this._removeFromOtherLists(e);
for (var r = Array(this.numberOfItems + 1), i = 0; t > i; ++i) r[i] = this._xforms[i];
r[i] = e;
for (var a = i + 1; this.numberOfItems > i; ++a, ++i) r[a] = this._xforms[i];
this.numberOfItems++,
this._xforms = r,
n = e,
this._list._update()
} else n = this._list.appendItem(e);
return n
},
this.replaceItem = function (e, t) {
var n = null;
return this.numberOfItems > t && t >= 0 && (this._removeFromOtherLists(e), this._xforms[t] = e, n = e, this._list._update()),
n
},
this.removeItem = function (e) {
if (this.numberOfItems > e && e >= 0) {
for (var t = this._xforms[e], n = Array(this.numberOfItems - 1), r = 0; e > r; ++r) n[r] = this._xforms[r];
for (var i = r; this.numberOfItems - 1 > i; ++i, ++r) n[i] = this._xforms[r + 1];
return this.numberOfItems--,
this._xforms = n,
this._list._update(),
t
}
throw {
code: 1
}
},
this.appendItem = function (e) {
return this._removeFromOtherLists(e),
this._xforms.push(e),
this.numberOfItems++,
this._list._update(),
e
}
},
svgedit.transformlist.resetListMap = function () {
n = {
}
},
svgedit.transformlist.removeElementFromListMap = function (e) {
e.id && n[e.id] && delete n[e.id]
},
svgedit.transformlist.getTransformList = function (e) {
if (!svgedit.browser.supportsNativeTransformLists()) {
var t = e.id || 'temp',
r = n[t];
return r && 'temp' !== t || (n[t] = new svgedit.transformlist.SVGTransformList(e), n[t]._init(), r = n[t]),
r
}
return e.transform ? e.transform.baseVal : e.gradientTransform ? e.gradientTransform.baseVal : e.patternTransform ? e.patternTransform.baseVal : null
}
}(),
function () {
svgedit.math || (svgedit.math = {
});
var e = 1e-14,
t = document.createElementNS(svgedit.NS.SVG, 'svg');
svgedit.math.transformPoint = function (e, t, n) {
return {
x: n.a * e + n.c * t + n.e,
y: n.b * e + n.d * t + n.f
}
},
svgedit.math.isIdentity = function (e) {
return 1 === e.a && 0 === e.b && 0 === e.c && 1 === e.d && 0 === e.e && 0 === e.f
},
svgedit.math.matrixMultiply = function () {
for (var t = arguments, n = t.length, r = t[n - 1]; n-- > 1; ) {
var i = t[n - 1];
r = i.multiply(r)
}
return e > Math.abs(r.a) && (r.a = 0),
e > Math.abs(r.b) && (r.b = 0),
e > Math.abs(r.c) && (r.c = 0),
e > Math.abs(r.d) && (r.d = 0),
e > Math.abs(r.e) && (r.e = 0),
e > Math.abs(r.f) && (r.f = 0),
r
},
svgedit.math.hasMatrixTransform = function (e) {
if (!e) return !1;
for (var t = e.numberOfItems; t--; ) {
var n = e.getItem(t);
if (1 == n.type && !svgedit.math.isIdentity(n.matrix)) return !0
}
return !1
},
svgedit.math.transformBox = function (e, t, n, r, i) {
var a = svgedit.math.transformPoint,
o = a(e, t, i),
s = a(e + n, t, i),
l = a(e, t + r, i),
c = a(e + n, t + r, i),
u = Math.min(o.x, s.x, l.x, c.x),
d = Math.max(o.x, s.x, l.x, c.x),
f = Math.min(o.y, s.y, l.y, c.y),
h = Math.max(o.y, s.y, l.y, c.y);
return {
tl: o,
tr: s,
bl: l,
br: c,
aabox: {
x: u,
y: f,
width: d - u,
height: h - f
}
}
},
svgedit.math.transformListToTransform = function (e, n, r) {
if (null == e) return t.createSVGTransformFromMatrix(t.createSVGMatrix());
if (n = n || 0, r = r || e.numberOfItems - 1, n = parseInt(n, 10), r = parseInt(r, 10), n > r) {
var i = r;
r = n,
n = i
}
for (var a = t.createSVGMatrix(), o = n; r >= o; ++o) {
var s = o >= 0 && e.numberOfItems > o ? e.getItem(o).matrix : t.createSVGMatrix();
a = svgedit.math.matrixMultiply(a, s)
}
return t.createSVGTransformFromMatrix(a)
},
svgedit.math.getMatrix = function (e) {
var t = svgedit.transformlist.getTransformList(e);
return svgedit.math.transformListToTransform(t).matrix
},
svgedit.math.snapToAngle = function (e, t, n, r) {
var i = Math.PI / 12,
a = n - e,
o = r - t,
s = Math.atan2(o, a),
l = Math.sqrt(a * a + o * o),
c = Math.round(s / i) * i;
return {
x: e + l * Math.cos(c),
y: t + l * Math.sin(c),
a: c
}
},
svgedit.math.rectsIntersect = function (e, t) {
return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y
}
}(),
function () {
svgedit.units || (svgedit.units = {
});
var e,
t = svgedit.NS,
n = [
'x',
'x1',
'cx',
'rx',
'width'
],
r = [
'y',
'y1',
'cy',
'ry',
'height'
],
i = [
'r',
'radius'
].concat(n, r),
a = {
};
svgedit.units.init = function (n) {
e = n;
var r = document.createElementNS(t.SVG, 'svg');
document.body.appendChild(r);
var i = document.createElementNS(t.SVG, 'rect');
i.setAttribute('width', '1em'),
i.setAttribute('height', '1ex'),
i.setAttribute('x', '1in'),
r.appendChild(i);
var o = i.getBBox();
document.body.removeChild(r);
var s = o.x;
a = {
em: o.width,
ex: o.height,
'in': s,
cm: s / 2.54,
mm: s / 25.4,
pt: s / 72,
pc: s / 6,
px: 1,
'%': 0
}
},
svgedit.units.getTypeMap = function () {
return a
},
svgedit.units.shortFloat = function (t) {
var n = e.getRoundDigits();
return isNaN(t) ? $.isArray(t) ? svgedit.units.shortFloat(t[0]) + ',' + svgedit.units.shortFloat(t[1])  : parseFloat(t).toFixed(n) - 0 : + ( + t).toFixed(n)
},
svgedit.units.convertUnit = function (t, n) {
return n = n || e.getBaseUnit(),
svgedit.units.shortFloat(t / a[n])
},
svgedit.units.setUnitAttr = function (e, t, n) {
!isNaN(n),
e.setAttribute(t, n)
};
var o = {
line: [
'x1',
'x2',
'y1',
'y2'
],
circle: [
'cx',
'cy',
'r'
],
ellipse: [
'cx',
'cy',
'rx',
'ry'
],
foreignObject: [
'x',
'y',
'width',
'height'
],
rect: [
'x',
'y',
'width',
'height'
],
image: [
'x',
'y',
'width',
'height'
],
use: [
'x',
'y',
'width',
'height'
],
text: [
'x',
'y'
]
};
svgedit.units.convertAttrs = function (t) {
var n = t.tagName,
r = e.getBaseUnit(),
i = o[n];
if (i) for (var s = i.length, l = 0; s > l; l++) {
var c = i[l],
u = t.getAttribute(c);
u && (isNaN(u) || t.setAttribute(c, u / a[r] + r))
}
},
svgedit.units.convertToNum = function (t, i) {
if (!isNaN(i)) return i - 0;
if ('%' === i.substr( - 1)) {
var o = i.substr(0, i.length - 1) / 100,
s = e.getWidth(),
l = e.getHeight();
return n.indexOf(t) >= 0 ? o * s : r.indexOf(t) >= 0 ? o * l : o * Math.sqrt(s * s + l * l) / Math.sqrt(2)
}
var c = i.substr( - 2),
o = i.substr(0, i.length - 2);
return o * a[c]
},
svgedit.units.isValidUnit = function (t, n, r) {
var o = !1;
if (i.indexOf(t) >= 0) isNaN(n) ? (n = n.toLowerCase(), $.each(a, function (e) {
if (!o) {
var t = RegExp('^-?[\\d\\.]+' + e + '$');
t.test(n) && (o = !0)
}
}))  : o = !0;
 else {
if ('id' == t) {
var s = !1;
try {
var l = e.getElement(n);
s = null == l || l === r
} catch (c) {
}
return s
}
o = !0
}
return o
}
}(),
function () {
function e(e) {
if (svgedit.browser.supportsHVLineContainerBBox()) try {
return e.getBBox()
} catch (t) {
}
var n,
r = $.data(e, 'ref'),
i = null;
if (r) {
var a = $(r).children().clone().attr('visibility', 'hidden');
$(l).append(a),
i = a.filter('line, path')
} else i = $(e).find('line, path');
var o = !1;
if (i.length) if (i.each(function () {
var e = this.getBBox();
e.width && e.height || (o = !0)
}), o) {
var s = r ? a : $(e).children();
n = getStrokedBBox(s)
} else n = e.getBBox();
 else n = e.getBBox();
return r && a.remove(),
n
}
svgedit.utilities || (svgedit.utilities = {
});
var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
n = svgedit.NS,
r = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use',
i = r.split(','),
a = null,
o = null,
s = null,
l = null;
svgedit.utilities.init = function (e) {
a = e,
o = e.getDOMDocument(),
s = e.getDOMContainer(),
l = e.getSVGRoot()
},
svgedit.utilities.toXml = function (e) {
return $('<p/>').text(e).html()
},
svgedit.utilities.fromXml = function (e) {
return $('<p/>').html(e).text()
},
svgedit.utilities.encode64 = function (e) {
if (e = svgedit.utilities.convertToXMLReferences(e), window.btoa) return window.btoa(e);
var n,
r,
i,
a,
o,
s,
l,
c = Array(4 * Math.floor((e.length + 2) / 3)),
u = 0,
d = 0;
do n = e.charCodeAt(u++),
r = e.charCodeAt(u++),
i = e.charCodeAt(u++),
a = n >> 2,
o = (3 & n) << 4 | r >> 4,
s = (15 & r) << 2 | i >> 6,
l = 63 & i,
isNaN(r) ? s = l = 64 : isNaN(i) && (l = 64),
c[d++] = t.charAt(a),
c[d++] = t.charAt(o),
c[d++] = t.charAt(s),
c[d++] = t.charAt(l);
while (e.length > u);
return c.join('')
},
svgedit.utilities.decode64 = function (e) {
if (window.atob) return window.atob(e);
var n,
r,
i,
a,
o,
s = '',
l = '',
c = '',
u = 0;
e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
do i = t.indexOf(e.charAt(u++)),
a = t.indexOf(e.charAt(u++)),
o = t.indexOf(e.charAt(u++)),
c = t.indexOf(e.charAt(u++)),
n = i << 2 | a >> 4,
r = (15 & a) << 4 | o >> 2,
l = (3 & o) << 6 | c,
s += String.fromCharCode(n),
64 != o && (s += String.fromCharCode(r)),
64 != c && (s += String.fromCharCode(l)),
n = r = l = '',
i = a = o = c = '';
while (e.length > u);
return unescape(s)
},
svgedit.utilities.convertToXMLReferences = function (e) {
for (var t = '', n = 0; e.length > n; n++) {
var r = e.charCodeAt(n);
128 > r ? t += e[n] : r > 127 && (t += '&#' + r + ';')
}
return t
},
svgedit.utilities.text2xml = function (e) {
e.indexOf('<svg:svg') >= 0 && (e = e.replace(/<(\/?)svg:/g, '<$1').replace('xmlns:svg', 'xmlns'));
var t;
try {
var n = window.DOMParser ? new DOMParser : new ActiveXObject('Microsoft.XMLDOM');
n.async = !1
} catch (r) {
throw Error('XML Parser could not be instantiated')
}
try {
t = n.loadXML ? n.loadXML(e) ? n : !1 : n.parseFromString(e, 'text/xml')
} catch (r) {
throw Error('Error parsing XML string')
}
return t
},
svgedit.utilities.bboxToObj = function (e) {
return {
x: e.x,
y: e.y,
width: e.width,
height: e.height
}
},
svgedit.utilities.walkTree = function (e, t) {
if (e && 1 == e.nodeType) {
t(e);
for (var n = e.childNodes.length; n--; ) svgedit.utilities.walkTree(e.childNodes.item(n), t)
}
},
svgedit.utilities.walkTreePost = function (e, t) {
if (e && 1 == e.nodeType) {
for (var n = e.childNodes.length; n--; ) svgedit.utilities.walkTree(e.childNodes.item(n), t);
t(e)
}
},
svgedit.utilities.getUrlFromAttr = function (e) {
if (e) {
if (0 === e.indexOf('url("')) return e.substring(5, e.indexOf('"', 6));
if (0 === e.indexOf('url(\'')) return e.substring(5, e.indexOf('\'', 6));
if (0 === e.indexOf('url(')) return e.substring(4, e.indexOf(')'))
}
return null
},
svgedit.utilities.getHref = function (e) {
return e.getAttributeNS(n.XLINK, 'href')
},
svgedit.utilities.setHref = function (e, t) {
e.setAttributeNS(n.XLINK, 'xlink:href', t)
},
svgedit.utilities.findDefs = function () {
var e = a.getSVGContent(),
t = e.getElementsByTagNameNS(n.SVG, 'defs');
return t.length > 0 ? t = t[0] : (t = e.ownerDocument.createElementNS(n.SVG, 'defs'), e.firstChild ? e.insertBefore(t, e.firstChild.nextSibling)  : e.appendChild(t)),
t
},
svgedit.utilities.getPathBBox = function (e) {
for (var t = e.pathSegList, n = t.numberOfItems, r = [
[],
[
]
], i = t.getItem(0), a = [
i.x,
i.y
], o = 0; n > o; o++) {
var s = t.getItem(o);
if (void 0 !== s.x) if (r[0].push(a[0]), r[1].push(a[1]), s.x1) {
for (var l = [
s.x1,
s.y1
], c = [
s.x2,
s.y2
], u = [
s.x,
s.y
], d = 0; 2 > d; d++) {
var f = function (e) {
return Math.pow(1 - e, 3) * a[d] + 3 * Math.pow(1 - e, 2) * e * l[d] + 3 * (1 - e) * Math.pow(e, 2) * c[d] + Math.pow(e, 3) * u[d]
},
h = 6 * a[d] - 12 * l[d] + 6 * c[d],
p = - 3 * a[d] + 9 * l[d] - 9 * c[d] + 3 * u[d],
g = 3 * l[d] - 3 * a[d];
if (0 != p) {
var v = Math.pow(h, 2) - 4 * g * p;
if (!(0 > v)) {
var m = ( - h + Math.sqrt(v)) / (2 * p);
m > 0 && 1 > m && r[d].push(f(m));
var y = ( - h - Math.sqrt(v)) / (2 * p);
y > 0 && 1 > y && r[d].push(f(y))
}
} else {
if (0 == h) continue;
var b = - g / h;
b > 0 && 1 > b && r[d].push(f(b))
}
}
a = u
} else r[0].push(s.x),
r[1].push(s.y)
}
var x = Math.min.apply(null, r[0]),
w = Math.max.apply(null, r[0]) - x,
k = Math.min.apply(null, r[1]),
S = Math.max.apply(null, r[1]) - k;
return {
x: x,
y: k,
width: w,
height: S
}
},
svgedit.utilities.getBBox = function (t) {
var n = t || a.geSelectedElements() [0];
if (1 != t.nodeType) return null;
var r = null,
o = n.nodeName;
switch (o) {
case 'text':
if ('' === n.textContent) n.textContent = 'a',
r = n.getBBox(),
n.textContent = '';
 else try {
r = n.getBBox()
} catch (s) {
}
break;
case 'path':
if (svgedit.browser.supportsPathBBox()) try {
r = n.getBBox()
} catch (s) {
} else r = svgedit.utilities.getPathBBox(n);
break;
case 'g':
case 'a':
r = e(n);
break;
default:
if ('use' === o && (r = e(n, !0)), 'use' === o || 'foreignObject' === o && svgedit.browser.isWebkit()) {
r || (r = n.getBBox());
var l = {
};
l.width = r.width,
l.height = r.height,
l.x = r.x + parseFloat(n.getAttribute('x') || 0),
l.y = r.y + parseFloat(n.getAttribute('y') || 0),
r = l
} else if (~i.indexOf(o)) try {
r = n.getBBox()
} catch (s) {
var c = $(n).closest('foreignObject');
if (c.length) try {
r = c[0].getBBox()
} catch (s) {
r = null
} else r = null
}
}
return r && (r = svgedit.utilities.bboxToObj(r)),
r
},
svgedit.utilities.getRotationAngle = function (e, t) {
var n = e || a.getSelectedElements() [0],
r = svgedit.transformlist.getTransformList(n);
if (!r) return 0;
for (var i = r.numberOfItems, o = 0; i > o; ++o) {
var s = r.getItem(o);
if (4 == s.type) return t ? s.angle * Math.PI / 180 : s.angle
}
return 0
},
svgedit.utilities.getRefElem = function (e) {
return svgedit.utilities.getElem(svgedit.utilities.getUrlFromAttr(e).substr(1))
},
svgedit.utilities.getElem = svgedit.browser.supportsSelectors() ? function (e) {
return l.querySelector('#' + e)
}
 : svgedit.browser.supportsXpath() ? function (e) {
return o.evaluate('svg:svg[@id="svgroot"]//svg:*[@id="' + e + '"]', s, function () {
return svgedit.NS.SVG
}, 9, null).singleNodeValue
}
 : function (e) {
return $(l).find('[id=' + e + ']') [0]
},
svgedit.utilities.assignAttributes = function (e, t, r, i) {
r || (r = 0);
var a = null;
svgedit.browser.isOpera() || l.suspendRedraw(r);
for (var o in t) {
var s = 'xml:' === o.substr(0, 4) ? n.XML : 'xlink:' === o.substr(0, 6) ? n.XLINK : null;
s ? e.setAttributeNS(s, o, t[o])  : i ? svgedit.units.setUnitAttr(e, o, t[o])  : e.setAttribute(o, t[o])
}
svgedit.browser.isOpera() || l.unsuspendRedraw(a)
},
svgedit.utilities.cleanupElement = function (e) {
var t = l.suspendRedraw(60),
n = {
'fill-opacity': 1,
'stop-opacity': 1,
opacity: 1,
stroke: 'none',
'stroke-dasharray': 'none',
'stroke-linejoin': 'miter',
'stroke-linecap': 'butt',
'stroke-opacity': 1,
'stroke-width': 1,
rx: 0,
ry: 0
};
for (var r in n) {
var i = n[r];
e.getAttribute(r) == i && e.removeAttribute(r)
}
l.unsuspendRedraw(t)
},
svgedit.utilities.snapToGrid = function (e) {
var t = parseFloat($('.snappingStep').val());
return e = Snap.snapTo(t, e)
}
}(),
function () {
svgedit.sanitize || (svgedit.sanitize = {
});
var e = svgedit.NS,
t = svgedit.getReverseNS(),
n = {
a: [
'class',
'clip-path',
'clip-rule',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'id',
'mask',
'opacity',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform',
'xlink:href',
'xlink:title'
],
circle: [
'class',
'clip-path',
'clip-rule',
'cx',
'cy',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'id',
'mask',
'opacity',
'r',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform'
],
clipPath: [
'class',
'clipPathUnits',
'id'
],
defs: [
],
style: [
'type'
],
desc: [
],
ellipse: [
'class',
'clip-path',
'clip-rule',
'cx',
'cy',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'id',
'mask',
'opacity',
'requiredFeatures',
'rx',
'ry',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform'
],
feGaussianBlur: [
'class',
'color-interpolation-filters',
'id',
'requiredFeatures',
'stdDeviation'
],
filter: [
'class',
'color-interpolation-filters',
'filterRes',
'filterUnits',
'height',
'id',
'primitiveUnits',
'requiredFeatures',
'width',
'x',
'xlink:href',
'y'
],
foreignObject: [
'class',
'font-size',
'height',
'id',
'opacity',
'requiredFeatures',
'style',
'transform',
'width',
'x',
'y'
],
g: [
'class',
'clip-path',
'clip-rule',
'id',
'display',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'mask',
'opacity',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform',
'font-family',
'font-size',
'font-style',
'font-weight',
'text-anchor'
],
image: [
'class',
'clip-path',
'clip-rule',
'filter',
'height',
'id',
'mask',
'opacity',
'requiredFeatures',
'style',
'systemLanguage',
'transform',
'width',
'x',
'xlink:href',
'xlink:title',
'y'
],
line: [
'class',
'clip-path',
'clip-rule',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'id',
'marker-end',
'marker-mid',
'marker-start',
'mask',
'opacity',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform',
'x1',
'x2',
'y1',
'y2'
],
linearGradient: [
'class',
'id',
'gradientTransform',
'gradientUnits',
'requiredFeatures',
'spreadMethod',
'systemLanguage',
'x1',
'x2',
'xlink:href',
'y1',
'y2'
],
marker: [
'id',
'class',
'markerHeight',
'markerUnits',
'markerWidth',
'orient',
'preserveAspectRatio',
'refX',
'refY',
'systemLanguage',
'viewBox'
],
mask: [
'class',
'height',
'id',
'maskContentUnits',
'maskUnits',
'width',
'x',
'y'
],
metadata: [
'class',
'id'
],
path: [
'class',
'clip-path',
'clip-rule',
'd',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'id',
'marker-end',
'marker-mid',
'marker-start',
'mask',
'opacity',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform'
],
pattern: [
'class',
'height',
'id',
'patternContentUnits',
'patternTransform',
'patternUnits',
'requiredFeatures',
'style',
'systemLanguage',
'viewBox',
'width',
'x',
'xlink:href',
'y'
],
polygon: [
'class',
'clip-path',
'clip-rule',
'id',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'id',
'class',
'marker-end',
'marker-mid',
'marker-start',
'mask',
'opacity',
'points',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform'
],
polyline: [
'class',
'clip-path',
'clip-rule',
'id',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'marker-end',
'marker-mid',
'marker-start',
'mask',
'opacity',
'points',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform'
],
radialGradient: [
'class',
'cx',
'cy',
'fx',
'fy',
'gradientTransform',
'gradientUnits',
'id',
'r',
'requiredFeatures',
'spreadMethod',
'systemLanguage',
'xlink:href'
],
rect: [
'class',
'clip-path',
'clip-rule',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'height',
'id',
'mask',
'opacity',
'requiredFeatures',
'rx',
'ry',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform',
'width',
'x',
'y'
],
stop: [
'class',
'id',
'offset',
'requiredFeatures',
'stop-color',
'stop-opacity',
'style',
'systemLanguage'
],
svg: [
'class',
'clip-path',
'clip-rule',
'filter',
'id',
'height',
'mask',
'preserveAspectRatio',
'requiredFeatures',
'style',
'systemLanguage',
'viewBox',
'width',
'x',
'xmlns',
'xmlns:se',
'xmlns:xlink',
'y'
],
'switch': [
'class',
'id',
'requiredFeatures',
'systemLanguage'
],
symbol: [
'class',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'font-family',
'font-size',
'font-style',
'font-weight',
'id',
'opacity',
'preserveAspectRatio',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'transform',
'viewBox'
],
text: [
'class',
'clip-path',
'clip-rule',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'font-family',
'font-size',
'font-style',
'font-weight',
'id',
'mask',
'opacity',
'requiredFeatures',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'text-anchor',
'transform',
'x',
'xml:space',
'y'
],
textPath: [
'class',
'id',
'method',
'requiredFeatures',
'spacing',
'startOffset',
'style',
'systemLanguage',
'transform',
'xlink:href'
],
title: [
],
tspan: [
'class',
'clip-path',
'clip-rule',
'dx',
'dy',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'font-family',
'font-size',
'font-style',
'font-weight',
'id',
'mask',
'opacity',
'requiredFeatures',
'rotate',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'systemLanguage',
'text-anchor',
'textLength',
'transform',
'x',
'xml:space',
'y'
],
use: [
'class',
'clip-path',
'clip-rule',
'fill',
'fill-opacity',
'fill-rule',
'filter',
'height',
'id',
'mask',
'stroke',
'stroke-dasharray',
'stroke-dashoffset',
'stroke-linecap',
'stroke-linejoin',
'stroke-miterlimit',
'stroke-opacity',
'stroke-width',
'style',
'transform',
'width',
'x',
'xlink:href',
'y'
],
annotation: [
'encoding'
],
'annotation-xml': [
'encoding'
],
maction: [
'actiontype',
'other',
'selection'
],
math: [
'class',
'id',
'display',
'xmlns'
],
menclose: [
'notation'
],
merror: [
],
mfrac: [
'linethickness'
],
mi: [
'mathvariant'
],
mmultiscripts: [
],
mn: [
],
mo: [
'fence',
'lspace',
'maxsize',
'minsize',
'rspace',
'stretchy'
],
mover: [
],
mpadded: [
'lspace',
'width',
'height',
'depth',
'voffset'
],
mphantom: [
],
mprescripts: [
],
mroot: [
],
mrow: [
'xlink:href',
'xlink:type',
'xmlns:xlink'
],
mspace: [
'depth',
'height',
'width'
],
msqrt: [
],
mstyle: [
'displaystyle',
'mathbackground',
'mathcolor',
'mathvariant',
'scriptlevel'
],
msub: [
],
msubsup: [
],
msup: [
],
mtable: [
'align',
'columnalign',
'columnlines',
'columnspacing',
'displaystyle',
'equalcolumns',
'equalrows',
'frame',
'rowalign',
'rowlines',
'rowspacing',
'width'
],
mtd: [
'columnalign',
'columnspan',
'rowalign',
'rowspan'
],
mtext: [
],
mtr: [
'columnalign',
'rowalign'
],
munder: [
],
munderover: [
],
none: [
],
semantics: [
]
},
r = {
};
$.each(n, function (t, n) {
var i = {
};
$.each(n, function (t, n) {
if (n.indexOf(':') >= 0) {
var r = n.split(':');
i[r[1]] = e[r[0].toUpperCase()]
} else i[n] = 'xmlns' == n ? e.XMLNS : null
}),
r[t] = i
}),
svgedit.sanitize.sanitizeSvg = function (i) {
if (3 == i.nodeType && (i.nodeValue = i.nodeValue.replace(/^\s+|\s+$/g, ''), 0 === i.nodeValue.length && i.parentNode.removeChild(i)), 1 == i.nodeType) {
var a = i.ownerDocument,
o = i.parentNode;
if (a && o) {
var s = n[i.nodeName],
l = r[i.nodeName];
if (s !== void 0) {
for (var c = [
], u = i.attributes.length; u--; ) {
var d = i.attributes.item(u),
f = d.nodeName,
h = d.localName,
p = d.namespaceURI;
if (l.hasOwnProperty(h) && p == l[h] && p != e.XMLNS || p == e.XMLNS && t[d.nodeValue] || (0 === f.indexOf('se:') && c.push([f,
d.nodeValue]), i.removeAttributeNS(p, h)), svgedit.browser.isGecko()) switch (f) {
case 'transform':
case 'gradientTransform':
case 'patternTransform':
var g = d.nodeValue.replace(/(\d)-/g, '$1 -');
i.setAttribute(f, g)
}
if ('style' == f) {
for (var v = d.nodeValue.split(';'), m = v.length; m--; ) {
var y = v[m].split(':'),
b = $.trim(y[0]),
x = $.trim(y[1]);
s.indexOf(b) >= 0 && i.setAttribute(b, x)
}
i.removeAttribute('style')
}
}
$.each(c, function (t, n) {
i.setAttributeNS(e.SE, n[0], n[1])
});
var w = svgedit.utilities.getHref(i);
if (w && [
'filter',
'linearGradient',
'pattern',
'radialGradient',
'textPath',
'use'
].indexOf(i.nodeName) >= 0 && '#' != w[0] && (svgedit.utilities.setHref(i, ''), i.removeAttributeNS(e.XLINK, 'href')), 'use' == i.nodeName && !svgedit.utilities.getHref(i)) return o.removeChild(i),
void 0;
for ($.each(['clip-path',
'fill',
'filter',
'marker-end',
'marker-mid',
'marker-start',
'mask',
'stroke'], function (e, t) {
var n = i.getAttribute(t);
n && (n = svgedit.utilities.getUrlFromAttr(n), n && '#' !== n[0] && (i.setAttribute(t, ''), i.removeAttribute(t)))
}), u = i.childNodes.length; u--; ) svgedit.sanitize.sanitizeSvg(i.childNodes.item(u))
} else {
for (var k = [
]; i.hasChildNodes(); ) k.push(o.insertBefore(i.firstChild, i));
o.removeChild(i);
for (var u = k.length; u--; ) svgedit.sanitize.sanitizeSvg(k[u])
}
}
}
}
}();
var svgedit = svgedit || {
};
(function () {
function e(e) {
$('#tool_undo').attr('title', 'Undo ' + e.getUndoStackSize()),
$('#tool_redo').attr('title', 'Redo ' + e.getRedoStackSize()),
e.getUndoStackSize() > 0 ? $('#tool_undo').removeAttr('disabled')  : $('#tool_undo').attr('disabled', 'disabled'),
e.getRedoStackSize() > 0 ? $('#tool_redo').removeAttr('disabled')  : $('#tool_redo').attr('disabled', 'disabled')
}
svgedit.history || (svgedit.history = {
}),
svgedit.history.UndoManager = function (e) {
this.handler_ = e || null,
this.undoStackPointer = 0,
this.undoStack = [
],
this.undoChangeStackPointer = - 1,
this.undoableChangeStack = [
]
},
svgedit.history.UndoManager.prototype.resetUndoStack = function () {
this.undoStack = [
],
this.undoStackPointer = 0,
e(this)
},
svgedit.history.UndoManager.prototype.getUndoStackSize = function () {
return this.undoStackPointer
},
svgedit.history.UndoManager.prototype.getRedoStackSize = function () {
return this.undoStack.length - this.undoStackPointer
},
svgedit.history.UndoManager.prototype.getNextUndoCommandText = function () {
return ''
},
svgedit.history.UndoManager.prototype.getNextRedoCommandText = function () {
return ''
},
svgedit.history.UndoManager.prototype.undo = function () {
if (this.undoStackPointer > 1) {
this.undoStackPointer -= 1;
var t = this.undoStack[this.undoStackPointer - 1],
n = svgCanvas.getSelectedElems().filter(function (e) {
return e
}).map(function (e) {
return e.id
});
svgCanvas.setSvgString(t),
window.svgCanvas.addToSelection(n.map(function (e) {
return document.getElementById(e)
}), !0),
e(this)
}
},
svgedit.history.UndoManager.prototype.redo = function () {
if (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0) {
var t = this.undoStack[this.undoStackPointer];
this.undoStackPointer += 1;
var n = svgCanvas.getSelectedElems().filter(function (e) {
return e
}).map(function (e) {
return e.id
});
svgCanvas.setSvgString(t),
window.svgCanvas.addToSelection(n.map(function (e) {
return document.getElementById(e)
}), !0),
e(this)
}
},
svgedit.history.UndoManager.prototype.clearImage = function () {
svgCanvas.setSvgString(this.undoStack[0]),
this.addCommandToHistory()
};
var t,
n = !1;
svgedit.history.UndoManager.prototype.addHistoryEntry = function () {
if (!window.svgCanvas) return console.trace(),
console.log('canvas not set'),
void 0;
var t = svgCanvas.svgCanvasToString();
this.undoStack[this.undoStackPointer - 1] !== t && (this.undoStackPointer < this.undoStack.length && this.undoStack.length > 0 ? this.undoStack = this.undoStack.splice(0, this.undoStackPointer)  : !n || 3 > this.undoStack.length || (new Date).getTime() > n + 300 ? n = (new Date).getTime()  : this.undoStack.pop(), this.undoStack.push(t), this.undoStackPointer = this.undoStack.length, this.undoStack.length > 3 && (global.storage.set('svgXmlText', t), $(document.body).addClass('isDirty')), e(this))
},
svgedit.history.UndoManager.prototype.addCommandToHistory = function () {
var e = this;
0 === this.undoStack.length ? e.addHistoryEntry()  : (window.clearTimeout(t), t = window.setTimeout(function () {
e.addHistoryEntry()
}, 30))
},
svgedit.history.UndoManager.prototype.beginUndoableChange = function () {
},
svgedit.history.UndoManager.prototype.finishUndoableChange = function () {
var e = function () {
};
e.prototype.addSubCommand = function () {
},
e.prototype.isEmpty = function () {
};
var t = new e;
return t
},
svgedit.history.UndoManager.prototype.finishUndoableChange = function () {
},
svgedit.history.BatchCommand = function () {
},
svgedit.history.BatchCommand.prototype.isEmpty = function () {
return !0
},
svgedit.history.BatchCommand.prototype.addSubCommand = function () {
return !0
},
svgedit.history.MoveElementCommand = svgedit.history.BatchCommand,
svgedit.history.InsertElementCommand = svgedit.history.BatchCommand,
svgedit.history.RemoveElementCommand = svgedit.history.BatchCommand,
svgedit.history.ChangeElementCommand = svgedit.history.BatchCommand,
svgedit.history.BatchCommand.prototype.addSubCommand = function () {
}
}) ();
var svgedit = svgedit || {
};
(function () {
svgedit.coords || (svgedit.coords = {
});
var e = [
0,
'z',
'M',
'm',
'L',
'l',
'C',
'c',
'Q',
'q',
'A',
'a',
'H',
'h',
'V',
'v',
'S',
's',
'T',
't'
],
t = null;
svgedit.coords.init = function (e) {
t = e
},
svgedit.coords.remapElement = function (n, r, i) {
for (var a = function (e, t) {
return svgedit.math.transformPoint(e, t, i)
}, o = function (e) {
return i.a * e
}, s = function (e) {
return i.d * e
}, l = function () {
svgedit.utilities.assignAttributes(n, r, 1000, !0)
}, c = svgedit.utilities.getBBox(n), u = 0; 2 > u; u++) {
var d = 0 === u ? 'fill' : 'stroke',
f = n.getAttribute(d);
if (f && 0 === f.indexOf('url(') && (0 > i.a || 0 > i.d)) {
var h = svgedit.utilities.getRefElem(f),
p = h.cloneNode(!0);
if (0 > i.a) {
var g = p.getAttribute('x1'),
v = p.getAttribute('x2');
p.setAttribute('x1', - (g - 1)),
p.setAttribute('x2', - (v - 1))
}
if (0 > i.d) {
var m = p.getAttribute('y1'),
y = p.getAttribute('y2');
p.setAttribute('y1', - (m - 1)),
p.setAttribute('y2', - (y - 1))
}
p.id = t.getDrawing().getNextId(),
svgedit.utilities.findDefs().appendChild(p),
n.setAttribute(d, 'url(#' + p.id + ')')
}
}
var b = n.tagName;
if ('g' === b || 'text' === b || 'tspan' == b || 'use' === b) if (1 != i.a || 0 != i.b || 0 != i.c || 1 != i.d || 0 == i.e && 0 == i.f) {
var x = svgedit.transformlist.getTransformList(n),
w = svgroot.createSVGTransform();
w.setMatrix(svgedit.math.matrixMultiply(svgedit.math.transformListToTransform(x).matrix, i)),
x.clear(),
x.appendItem(w)
} else {
var k = svgedit.math.transformListToTransform(n).matrix,
S = svgedit.math.matrixMultiply(k.inverse(), i, k);
r.x = parseFloat(r.x) + S.e,
r.y = parseFloat(r.y) + S.f
}
switch (b) {
case 'foreignObject':
case 'rect':
case 'image':
if ('image' === b && (0 > i.a || 0 > i.d)) {
var x = svgedit.transformlist.getTransformList(n),
w = svgroot.createSVGTransform();
w.setMatrix(svgedit.math.matrixMultiply(svgedit.math.transformListToTransform(x).matrix, i)),
x.clear(),
x.appendItem(w)
} else {
var _ = a(r.x, r.y);
r.width = o(r.width),
r.height = s(r.height),
r.x = _.x + Math.min(0, r.width),
r.y = _.y + Math.min(0, r.height),
r.width = Math.abs(r.width),
r.height = Math.abs(r.height)
}
l();
break;
case 'ellipse':
var E = a(r.cx, r.cy);
r.cx = E.x,
r.cy = E.y,
r.rx = o(r.rx),
r.ry = s(r.ry),
r.rx = Math.abs(r.rx),
r.ry = Math.abs(r.ry),
l();
break;
case 'circle':
var E = a(r.cx, r.cy);
r.cx = E.x,
r.cy = E.y;
var A = svgedit.math.transformBox(c.x, c.y, c.width, c.height, i),
C = A.tr.x - A.tl.x,
T = A.bl.y - A.tl.y;
r.r = Math.min(C / 2, T / 2),
r.r && (r.r = Math.abs(r.r)),
l();
break;
case 'line':
var _ = a(r.x1, r.y1),
N = a(r.x2, r.y2);
r.x1 = _.x,
r.y1 = _.y,
r.x2 = N.x,
r.y2 = N.y;
case 'text':
case 'tspan':
case 'use':
l();
break;
case 'g':
var M = $(n).data('gsvg');
M && svgedit.utilities.assignAttributes(M, r, 1000, !0);
break;
case 'polyline':
case 'polygon':
for (var L = r.points.length, u = 0; L > u; ++u) {
var G = r.points[u];
G = a(G.x, G.y),
r.points[u].x = G.x,
r.points[u].y = G.y
}
for (var L = r.points.length, I = '', u = 0; L > u; ++u) {
var G = r.points[u];
I += G.x + ',' + G.y + ' '
}
n.setAttribute('points', I);
break;
case 'path':
var O = n.pathSegList,
L = O.numberOfItems;
r.d = Array(L);
for (var u = 0; L > u; ++u) {
var P = O.getItem(u);
r.d[u] = {
type: P.pathSegType,
x: P.x,
y: P.y,
x1: P.x1,
y1: P.y1,
x2: P.x2,
y2: P.y2,
r1: P.r1,
r2: P.r2,
angle: P.angle,
largeArcFlag: P.largeArcFlag,
sweepFlag: P.sweepFlag
}
}
var L = r.d.length,
j = r.d[0],
D = a(j.x, j.y);
r.d[0].x = D.x,
r.d[0].y = D.y;
for (var u = 1; L > u; ++u) {
var P = r.d[u],
d = P.type;
if (0 == d % 2) {
var B = void 0 != P.x ? P.x : D.x,
V = void 0 != P.y ? P.y : D.y,
G = a(B, V),
_ = a(P.x1, P.y1),
N = a(P.x2, P.y2);
P.x = G.x,
P.y = G.y,
P.x1 = _.x,
P.y1 = _.y,
P.x2 = N.x,
P.y2 = N.y,
P.r1 = o(P.r1),
P.r2 = s(P.r2)
} else P.x = o(P.x),
P.y = s(P.y),
P.x1 = o(P.x1),
P.y1 = s(P.y1),
P.x2 = o(P.x2),
P.y2 = s(P.y2),
P.r1 = o(P.r1),
P.r2 = s(P.r2)
}
for (var R = '', L = r.d.length, u = 0; L > u; ++u) {
var P = r.d[u],
d = P.type;
switch (R += e[d], d) {
case 13:
case 12:
R += P.x + ' ';
break;
case 15:
case 14:
R += P.y + ' ';
break;
case 3:
case 5:
case 19:
case 2:
case 4:
case 18:
R += P.x + ',' + P.y + ' ';
break;
case 7:
case 6:
R += P.x1 + ',' + P.y1 + ' ' + P.x2 + ',' + P.y2 + ' ' + P.x + ',' + P.y + ' ';
break;
case 9:
case 8:
R += P.x1 + ',' + P.y1 + ' ' + P.x + ',' + P.y + ' ';
break;
case 11:
case 10:
R += P.r1 + ',' + P.r2 + ' ' + P.angle + ' ' + + P.largeArcFlag + ' ' + + P.sweepFlag + ' ' + P.x + ',' + P.y + ' ';
break;
case 17:
case 16:
R += P.x2 + ',' + P.y2 + ' ' + P.x + ',' + P.y + ' '
}
}
n.setAttribute('d', R)
}
}
}) ();
var svgedit = svgedit || {
};
(function () {
svgedit.recalculate || (svgedit.recalculate = {
});
var e,
t = svgedit.NS;
svgedit.recalculate.init = function (t) {
e = t
},
svgedit.recalculate.updateClipPath = function (t, n, r) {
var i = getRefElem(t).firstChild,
a = svgedit.transformlist.getTransformList(i),
o = e.getSVGRoot().createSVGTransform();
o.setTranslate(n, r),
a.appendItem(o),
svgedit.recalculate.recalculateDimensions(i)
},
svgedit.recalculate.recalculateDimensions = function (n) {
if (null == n) return null;
var r = e.getSVGRoot(),
i = svgedit.transformlist.getTransformList(n);
if (i && i.numberOfItems > 0) {
for (var a = i.numberOfItems; a--; ) {
var o = i.getItem(a);
0 === o.type ? i.removeItem(a)  : 1 === o.type ? svgedit.math.isIdentity(o.matrix) && i.removeItem(a)  : 4 === o.type && 0 === o.angle && i.removeItem(a)
}
if (1 === i.numberOfItems && svgedit.utilities.getRotationAngle(n)) return null
}
if (!i || 0 == i.numberOfItems) return n.setAttribute('transform', ''),
n.removeAttribute('transform'),
null;
if (i) {
for (var a = i.numberOfItems, s = [
]; a--; ) {
var o = i.getItem(a);
1 === o.type ? s.push([o.matrix,
a])  : s.length && (s = [
])
}
if (2 === s.length) {
var l = r.createSVGTransformFromMatrix(svgedit.math.matrixMultiply(s[1][0], s[0][0]));
i.removeItem(s[0][1]),
i.removeItem(s[1][1]),
i.insertItemBefore(l, s[1][1])
}
if (a = i.numberOfItems, a >= 2 && 1 === i.getItem(a - 2).type && 2 === i.getItem(a - 1).type) {
var c = r.createSVGTransform(),
u = svgedit.math.matrixMultiply(i.getItem(a - 2).matrix, i.getItem(a - 1).matrix);
c.setMatrix(u),
i.removeItem(a - 2),
i.removeItem(a - 2),
i.appendItem(c)
}
}
var d = $(n).data('gsvg'),
f = new svgedit.history.BatchCommand('Transform'),
h = {
},
p = null,
g = [
];
switch (n.tagName) {
case 'line':
g = [
'x1',
'y1',
'x2',
'y2'
];
break;
case 'circle':
g = [
'cx',
'cy',
'r'
];
break;
case 'ellipse':
g = [
'cx',
'cy',
'rx',
'ry'
];
break;
case 'foreignObject':
case 'rect':
case 'image':
g = [
'width',
'height',
'x',
'y'
];
break;
case 'use':
case 'text':
case 'tspan':
g = [
'x',
'y'
];
break;
case 'polygon':
case 'polyline':
p = {
},
p.points = n.getAttribute('points');
var v = n.points,
m = v.numberOfItems;
h.points = Array(m);
for (var y = 0; m > y; ++y) {
var b = v.getItem(y);
h.points[y] = {
x: b.x,
y: b.y
}
}
break;
case 'path':
p = {
},
p.d = n.getAttribute('d'),
h.d = n.getAttribute('d')
}
if (g.length ? (h = $(n).attr(g), $.each(h, function (e, t) {
h[e] = svgedit.units.convertToNum(e, t)
}))  : d && (h = {
x: $(d).attr('x') || 0,
y: $(d).attr('y') || 0
}), null == p && (p = $.extend(!0, {
}, h), $.each(p, function (e, t) {
p[e] = svgedit.units.convertToNum(e, t)
})), p.transform = e.getStartTransform() || '', 'g' == n.tagName && !d || 'a' == n.tagName) {
var x = svgedit.utilities.getBBox(n),
w = {
x: x.x + x.width / 2,
y: x.y + x.height / 2
},
k = svgedit.math.transformPoint(x.x + x.width / 2, x.y + x.height / 2, svgedit.math.transformListToTransform(i).matrix),
u = r.createSVGMatrix(),
S = svgedit.utilities.getRotationAngle(n);
if (S) {
var _ = S * Math.PI / 180;
if (Math.abs(_) > 1e-10) var E = Math.sin(_) / (1 - Math.cos(_));
 else var E = 2 / _;
for (var y = 0; i.numberOfItems > y; ++y) {
var o = i.getItem(y);
if (4 == o.type) {
var A = o.matrix;
w.y = (E * A.e + A.f) / 2,
w.x = (A.e - E * A.f) / 2,
i.removeItem(y);
break
}
}
}
var C = 0,
T = 0,
N = 0,
M = i.numberOfItems;
if (M) var L = i.getItem(0).matrix;
if (M >= 3 && 3 == i.getItem(M - 2).type && 2 == i.getItem(M - 3).type && 2 == i.getItem(M - 1).type) {
N = 3;
for (var G = i.getItem(M - 3).matrix, I = i.getItem(M - 2).matrix, O = i.getItem(M - 1).matrix, P = n.childNodes, j = P.length; j--; ) {
var D = P.item(j);
if (C = 0, T = 0, 1 == D.nodeType) {
var B = svgedit.transformlist.getTransformList(D);
if (!B) continue;
var u = svgedit.math.transformListToTransform(B).matrix,
V = svgedit.utilities.getRotationAngle(D),
R = e.getStartTransform(),
F = [
];
if (e.setStartTransform(D.getAttribute('transform')), V || svgedit.math.hasMatrixTransform(B)) {
var z = r.createSVGTransform();
z.setMatrix(svgedit.math.matrixMultiply(G, I, O, u)),
B.clear(),
B.appendItem(z),
F.push(z)
} else {
var q = svgedit.math.matrixMultiply(u.inverse(), O, u),
U = r.createSVGMatrix();
U.e = - q.e,
U.f = - q.f;
var H = svgedit.math.matrixMultiply(U.inverse(), u.inverse(), G, I, O, u, q.inverse()),
X = r.createSVGTransform(),
Y = r.createSVGTransform(),
W = r.createSVGTransform();
X.setTranslate(q.e, q.f),
Y.setScale(H.a, H.d),
W.setTranslate(U.e, U.f),
B.appendItem(W),
B.appendItem(Y),
B.appendItem(X),
F.push(W),
F.push(Y),
F.push(X)
}
f.addSubCommand(svgedit.recalculate.recalculateDimensions(D)),
e.setStartTransform(R)
}
}
i.removeItem(M - 1),
i.removeItem(M - 2),
i.removeItem(M - 3)
} else if (M >= 3 && 1 == i.getItem(M - 1).type) {
N = 3,
u = svgedit.math.transformListToTransform(i).matrix;
var z = r.createSVGTransform();
z.setMatrix(u),
i.clear(),
i.appendItem(z)
} else if ((1 == M || M > 1 && 3 != i.getItem(1).type) && 2 == i.getItem(0).type) {
N = 2;
var K = svgedit.math.transformListToTransform(i).matrix;
i.removeItem(0);
var Z = svgedit.math.transformListToTransform(i).matrix.inverse(),
Q = svgedit.math.matrixMultiply(Z, K);
if (C = Q.e, T = Q.f, 0 != C || 0 != T) {
for (var P = n.childNodes, j = P.length, J = [
]; j--; ) {
var D = P.item(j);
if (1 == D.nodeType) {
if (D.getAttribute('clip-path')) {
var et = D.getAttribute('clip-path');
- 1 === J.indexOf(et) && (svgedit.recalculate.updateClipPath(et, C, T), J.push(et))
}
var R = e.getStartTransform();
e.setStartTransform(D.getAttribute('transform'));
var B = svgedit.transformlist.getTransformList(D);
if (B) {
var tt = r.createSVGTransform();
tt.setTranslate(C, T),
B.numberOfItems ? B.insertItemBefore(tt, 0)  : B.appendItem(tt),
f.addSubCommand(svgedit.recalculate.recalculateDimensions(D));
for (var nt = n.getElementsByTagNameNS(t.SVG, 'use'), rt = '#' + D.id, it = nt.length; it--; ) {
var at = nt.item(it);
if (rt == svgedit.utilities.getHref(at)) {
var ot = r.createSVGTransform();
ot.setTranslate( - C, - T),
svgedit.transformlist.getTransformList(at).insertItemBefore(ot, 0),
f.addSubCommand(svgedit.recalculate.recalculateDimensions(at))
}
}
e.setStartTransform(R)
}
}
}
J = [
],
e.setStartTransform(R)
}
} else {
if (1 != M || 1 != i.getItem(0).type || S) {
if (S) {
var st = r.createSVGTransform();
st.setRotate(S, k.x, k.y),
i.numberOfItems ? i.insertItemBefore(st, 0)  : i.appendItem(st)
}
return 0 == i.numberOfItems && n.removeAttribute('transform'),
null
}
N = 1;
for (var u = i.getItem(0).matrix, P = n.childNodes, j = P.length; j--; ) {
var D = P.item(j);
if (1 == D.nodeType) {
var R = e.getStartTransform();
e.setStartTransform(D.getAttribute('transform'));
var B = svgedit.transformlist.getTransformList(D);
if (!B) continue;
var lt = svgedit.math.matrixMultiply(u, svgedit.math.transformListToTransform(B).matrix),
ct = r.createSVGTransform();
ct.setMatrix(lt),
B.clear(),
B.appendItem(ct, 0),
f.addSubCommand(svgedit.recalculate.recalculateDimensions(D)),
e.setStartTransform(R);
var ut = D.getAttribute('stroke-width');
if ('none' !== D.getAttribute('stroke') && !isNaN(ut)) {
var dt = (Math.abs(lt.a) + Math.abs(lt.d)) / 2;
D.setAttribute('stroke-width', ut * dt)
}
}
}
i.clear()
}
if (2 == N) {
if (S) {
k = {
x: w.x + L.e,
y: w.y + L.f
};
var st = r.createSVGTransform();
st.setRotate(S, k.x, k.y),
i.numberOfItems ? i.insertItemBefore(st, 0)  : i.appendItem(st)
}
} else if (3 == N) {
var u = svgedit.math.transformListToTransform(i).matrix,
ft = r.createSVGTransform();
ft.setRotate(S, w.x, w.y);
var ht = ft.matrix,
pt = r.createSVGTransform();
pt.setRotate(S, k.x, k.y);
var gt = pt.matrix.inverse(),
vt = u.inverse(),
mt = svgedit.math.matrixMultiply(vt, gt, ht, u);
if (C = mt.e, T = mt.f, 0 != C || 0 != T) for (var P = n.childNodes, j = P.length; j--; ) {
var D = P.item(j);
if (1 == D.nodeType) {
var R = e.getStartTransform();
e.setStartTransform(D.getAttribute('transform'));
var B = svgedit.transformlist.getTransformList(D),
tt = r.createSVGTransform();
tt.setTranslate(C, T),
B.numberOfItems ? B.insertItemBefore(tt, 0)  : B.appendItem(tt),
f.addSubCommand(svgedit.recalculate.recalculateDimensions(D)),
e.setStartTransform(R)
}
}
S && (i.numberOfItems ? i.insertItemBefore(pt, 0)  : i.appendItem(pt))
}
} else {
var x = svgedit.utilities.getBBox(n);
if (!x && 'path' != n.tagName) return null;
var u = r.createSVGMatrix(),
V = svgedit.utilities.getRotationAngle(n);
if (V) {
var w = {
x: x.x + x.width / 2,
y: x.y + x.height / 2
},
k = svgedit.math.transformPoint(x.x + x.width / 2, x.y + x.height / 2, svgedit.math.transformListToTransform(i).matrix),
_ = V * Math.PI / 180;
if (Math.abs(_) > 1e-10) var E = Math.sin(_) / (1 - Math.cos(_));
 else var E = 2 / _;
for (var y = 0; i.numberOfItems > y; ++y) {
var o = i.getItem(y);
if (4 == o.type) {
var A = o.matrix;
w.y = (E * A.e + A.f) / 2,
w.x = (A.e - E * A.f) / 2,
i.removeItem(y);
break
}
}
}
var N = 0,
M = i.numberOfItems;
if (!svgedit.browser.isWebkit()) {
var yt = n.getAttribute('fill');
if (yt && 0 === yt.indexOf('url(')) {
var bt = getRefElem(yt),
xt = 'pattern';
bt.tagName !== xt && (xt = 'gradient');
var wt = bt.getAttribute(xt + 'Units');
if ('userSpaceOnUse' === wt) {
u = svgedit.math.transformListToTransform(i).matrix;
var kt = svgedit.transformlist.getTransformList(bt),
St = svgedit.math.transformListToTransform(kt).matrix;
u = svgedit.math.matrixMultiply(u, St);
var _t = 'matrix(' + [u.a,
u.b,
u.c,
u.d,
u.e,
u.f].join(',') + ')';
bt.setAttribute(xt + 'Transform', _t)
}
}
}
if (M >= 3 && 3 == i.getItem(M - 2).type && 2 == i.getItem(M - 3).type && 2 == i.getItem(M - 1).type) N = 3,
u = svgedit.math.transformListToTransform(i, M - 3, M - 1).matrix,
i.removeItem(M - 1),
i.removeItem(M - 2),
i.removeItem(M - 3);
 else if (4 == M && 1 == i.getItem(M - 1).type) {
N = 3,
u = svgedit.math.transformListToTransform(i).matrix;
var z = r.createSVGTransform();
z.setMatrix(u),
i.clear(),
i.appendItem(z),
u = r.createSVGMatrix()
} else if ((1 == M || M > 1 && 3 != i.getItem(1).type) && 2 == i.getItem(0).type) {
N = 2;
var Et = i.getItem(0).matrix,
At = svgedit.math.transformListToTransform(i, 1).matrix,
Ct = At.inverse();
u = svgedit.math.matrixMultiply(Ct, Et, At),
i.removeItem(0)
} else {
if (1 != M || 1 != i.getItem(0).type || V) {
if (N = 4, V) {
var st = r.createSVGTransform();
st.setRotate(V, k.x, k.y),
i.numberOfItems ? i.insertItemBefore(st, 0)  : i.appendItem(st)
}
return 0 == i.numberOfItems && n.removeAttribute('transform'),
null
}
switch (u = svgedit.math.transformListToTransform(i).matrix, n.tagName) {
case 'line':
h = $(n).attr(['x1',
'y1',
'x2',
'y2']);
case 'polyline':
case 'polygon':
if (h.points = n.getAttribute('points'), h.points) {
var v = n.points,
m = v.numberOfItems;
h.points = Array(m);
for (var y = 0; m > y; ++y) {
var b = v.getItem(y);
h.points[y] = {
x: b.x,
y: b.y
}
}
}
case 'path':
h.d = n.getAttribute('d'),
N = 1,
i.clear();
break;
default:
}
}
if ((1 == N || 2 == N || 3 == N) && svgedit.coords.remapElement(n, h, u), 2 == N) {
if (V) {
svgedit.math.hasMatrixTransform(i) || (k = {
x: w.x + u.e,
y: w.y + u.f
});
var st = r.createSVGTransform();
st.setRotate(V, k.x, k.y),
i.numberOfItems ? i.insertItemBefore(st, 0)  : i.appendItem(st)
}
if ('text' == n.tagName) for (var P = n.childNodes, j = P.length; j--; ) {
var D = P.item(j);
if ('tspan' == D.tagName) {
var Tt = {
x: $(D).attr('x') || 0,
y: $(D).attr('y') || 0
};
svgedit.coords.remapElement(D, Tt, u)
}
}
} else if (3 == N && V) {
var u = svgedit.math.transformListToTransform(i).matrix,
ft = r.createSVGTransform();
ft.setRotate(V, w.x, w.y);
var ht = ft.matrix,
pt = r.createSVGTransform();
pt.setRotate(V, k.x, k.y);
var gt = pt.matrix.inverse(),
vt = u.inverse(),
mt = svgedit.math.matrixMultiply(vt, gt, ht, u);
svgedit.coords.remapElement(n, h, mt),
V && (i.numberOfItems ? i.insertItemBefore(pt, 0)  : i.appendItem(pt))
}
}
return 0 == i.numberOfItems && n.removeAttribute('transform'),
f.addSubCommand(new svgedit.history.ChangeElementCommand(n, p)),
f
}
}) (),
function () {
svgedit.select || (svgedit.select = {
});
var e,
t,
n,
r = 5;
svgedit.select.Selector = function (t, n) {
this.id = t,
this.selectedElement = n,
this.locked = !0,
this.selectorGroup = e.createSVGElement({
element: 'g',
attr: {
id: 'selectorGroup' + this.id
}
}),
this.selectorRect = this.selectorGroup.appendChild(e.createSVGElement({
element: 'path',
attr: {
id: 'selectedBox' + this.id,
fill: 'none',
stroke: '#22C',
'stroke-width': '1',
'stroke-dasharray': '5,5',
style: 'pointer-events:none'
}
})),
this.gripCoords = {
nw: null,
n: null,
ne: null,
e: null,
se: null,
s: null,
sw: null,
w: null
},
this.reset(this.selectedElement)
},
svgedit.select.Selector.prototype.reset = function (e) {
this.locked = !0,
this.selectedElement = e,
this.resize(),
this.selectorGroup.setAttribute('display', 'inline')
},
svgedit.select.Selector.prototype.updateGripCursors = function () {
},
svgedit.select.Selector.prototype.showGrips = function (e) {
var t = e ? 'inline' : 'none';
n.selectorGripsGroup.setAttribute('display', t);
var r = this.selectedElement;
this.hasGrips = e,
r && e && (this.selectorGroup.appendChild(n.selectorGripsGroup), this.updateGripCursors(svgedit.utilities.getRotationAngle(r)))
},
svgedit.select.Selector.prototype.resize = function () {
var t = this.selectorRect,
r = n,
i = r.selectorGrips,
a = this.selectedElement,
o = a.getAttribute('stroke-width'),
s = e.currentZoom(),
l = 1 / s;
'none' === a.getAttribute('stroke') || isNaN(o) || (l += o / 2);
var c = a.tagName;
'text' === c && (l += 2 / s);
var u = svgedit.transformlist.getTransformList(a),
d = svgedit.math.transformListToTransform(u).matrix;
d.e *= s,
d.f *= s;
var f = svgedit.utilities.getBBox(a);
if ('g' === c && !$.data(a, 'gsvg')) {
var h = e.getStrokedBBox(a.childNodes);
h && (f = h)
}
var p = f.x,
g = f.y,
v = f.width,
m = f.height,
f = {
x: p,
y: g,
width: v,
height: m
};
l *= s;
var y = svgedit.math.transformBox(p * s, g * s, v * s, m * s, d),
b = y.aabox,
x = b.x - l,
w = b.y - l,
k = b.width + 2 * l,
S = b.height + 2 * l,
_ = x + k / 2,
E = w + S / 2,
A = svgedit.utilities.getRotationAngle(a);
if (A) {
var C = e.svgRoot().createSVGTransform();
C.setRotate( - A, _, E);
var T = C.matrix;
y.tl = svgedit.math.transformPoint(y.tl.x, y.tl.y, T),
y.tr = svgedit.math.transformPoint(y.tr.x, y.tr.y, T),
y.bl = svgedit.math.transformPoint(y.bl.x, y.bl.y, T),
y.br = svgedit.math.transformPoint(y.br.x, y.br.y, T);
var N = y.tl,
M = N.x,
L = N.y,
G = N.x,
I = N.y,
O = Math.min,
P = Math.max;
M = O(M, O(y.tr.x, O(y.bl.x, y.br.x))) - l,
L = O(L, O(y.tr.y, O(y.bl.y, y.br.y))) - l,
G = P(G, P(y.tr.x, P(y.bl.x, y.br.x))) + l,
I = P(I, P(y.tr.y, P(y.bl.y, y.br.y))) + l,
x = M,
w = L,
k = G - M,
S = I - L
}
var j = e.svgRoot().suspendRedraw(100),
D = 'M' + x + ',' + w + ' L' + (x + k) + ',' + w + ' ' + (x + k) + ',' + (w + S) + ' ' + x + ',' + (w + S) + 'z';
t.setAttribute('d', D);
var B = A ? 'rotate(' + [A,
_,
E].join(',') + ')' : '';
this.selectorGroup.setAttribute('transform', B),
this.gripCoords = {
nw: [
x,
w
],
ne: [
x + k,
w
],
sw: [
x,
w + S
],
se: [
x + k,
w + S
],
n: [
x + k / 2,
w
],
w: [
x,
w + S / 2
],
e: [
x + k,
w + S / 2
],
s: [
x + k / 2,
w + S
]
};
for (var V in i) {
var R = this.gripCoords[V];
i[V].setAttribute('cx', R[0]),
i[V].setAttribute('cy', R[1]),
i[V].setAttribute('x', R[0]),
i[V].setAttribute('y', R[1])
}
r.rotateGrip.setAttribute('cx', x + k / 2),
r.rotateGrip.setAttribute('cy', w - 20),
r.rotateGrip.setAttribute('x', x + k / 2 - r.rotateGrip.width.baseVal.value / 2),
r.rotateGrip.setAttribute('y', w - 20 - r.rotateGrip.width.baseVal.value / 2),
e.svgRoot().unsuspendRedraw(j)
},
svgedit.select.SelectorManager = function () {
this.selectorParentGroup = null,
this.rubberBandBox = null,
this.selectors = [
],
this.selectorMap = {
},
this.selectorGrips = {
nw: null,
n: null,
ne: null,
e: null,
se: null,
s: null,
sw: null,
w: null
},
this.selectorGripsGroup = null,
this.rotateGripConnector = null,
this.rotateGrip = null,
this.initGroup()
},
svgedit.select.SelectorManager.prototype.initGroup = function () {
this.selectorParentGroup && this.selectorParentGroup.parentNode && this.selectorParentGroup.parentNode.removeChild(this.selectorParentGroup),
this.selectorParentGroup = e.createSVGElement({
element: 'g',
attr: {
id: 'selectorParentGroup'
}
}),
this.selectorGripsGroup = e.createSVGElement({
element: 'g',
attr: {
display: 'none'
}
}),
this.selectorParentGroup.appendChild(this.selectorGripsGroup),
e.svgRoot().appendChild(this.selectorParentGroup),
this.selectorMap = {
},
this.selectors = [
],
this.rubberBandBox = null;
for (var n in this.selectorGrips) {
var i;
i = 'se' == n ? {
element: 'image',
attr: {
id: 'selectorGrip_resize_' + n,
'xlink:href': 'images/resize.svg',
x: 0,
y: 0,
width: 28,
height: 28,
'pointer-events': 'all'
}
}
 : {
element: 'circle',
attr: {
id: 'selectorGrip_resize_' + n,
'class': 'selector-resize-grip',
r: r,
'pointer-events': 'all'
}
};
var a = e.createSVGElement(i);
$.data(a, 'dir', n),
$.data(a, 'type', 'resize'),
this.selectorGrips[n] = this.selectorGripsGroup.appendChild(a)
}
this.rotateGripConnector = this.selectorGripsGroup.appendChild(e.createSVGElement({
element: 'line',
attr: {
id: 'selectorGrip_rotateconnector',
stroke: '#22C',
'stroke-width': '1'
}
})),
this.rotateGrip = this.selectorGripsGroup.appendChild(e.createSVGElement({
element: 'image',
attr: {
id: 'selectorGrip_rotate',
'xlink:href': 'images/rotate.svg',
x: 0,
y: 0,
width: 24,
height: 24
}
})),
$.data(this.rotateGrip, 'type', 'rotate'),
$('#canvasBackground').length || t.dimensions
},
svgedit.select.SelectorManager.prototype.requestSelector = function (e) {
if (null == e) return null;
var t = this.selectors.length;
if ('object' == typeof this.selectorMap[e.id]) return this.selectorMap[e.id].locked = !0,
this.selectorMap[e.id];
for (var n = 0; t > n; ++n) if (this.selectors[n] && !this.selectors[n].locked) return this.selectors[n].locked = !0,
this.selectors[n].reset(e),
this.selectorMap[e.id] = this.selectors[n],
this.selectors[n];
return this.selectors[t] = new svgedit.select.Selector(t, e),
this.selectorParentGroup.appendChild(this.selectors[t].selectorGroup),
this.selectorMap[e.id] = this.selectors[t],
this.selectors[t]
},
svgedit.select.SelectorManager.prototype.releaseSelector = function (e) {
if (null != e) for (var t = this.selectors.length, n = this.selectorMap[e.id], r = 0; t > r; ++r) if (this.selectors[r] && this.selectors[r] == n) {
0 == n.locked && console.log('WARNING! selector was released but was already unlocked'),
delete this.selectorMap[e.id],
n.locked = !1,
n.selectedElement = null,
n.showGrips(!1);
try {
n.selectorGroup.setAttribute('display', 'none')
} catch (i) {
}
break
}
},
svgedit.select.SelectorManager.prototype.getRubberBandBox = function () {
return this.rubberBandBox || (this.rubberBandBox = this.selectorParentGroup.appendChild(e.createSVGElement({
element: 'rect',
attr: {
id: 'selectorRubberBand',
fill: '#22C',
'fill-opacity': 0.15,
stroke: '#22C',
'stroke-width': 0.5,
display: 'none',
style: 'pointer-events:none'
}
}))),
this.rubberBandBox
},
svgedit.select.init = function (r, i) {
t = r,
e = i,
n = new svgedit.select.SelectorManager
},
svgedit.select.getSelectorManager = function () {
return n
}
}(),
function () {
svgedit.draw || (svgedit.draw = {
});
var e = svgedit.NS,
t = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use'.split(','),
n = {
LET_DOCUMENT_DECIDE: 0,
ALWAYS_RANDOMIZE: 1,
NEVER_RANDOMIZE: 2
},
r = n.LET_DOCUMENT_DECIDE;
svgedit.draw.Layer = function (e, t) {
this.name_ = e,
this.group_ = t
},
svgedit.draw.Layer.prototype.getName = function () {
return this.name_
},
svgedit.draw.Layer.prototype.getGroup = function () {
return this.group_
},
svgedit.draw.randomizeIds = function (e, t) {
r = e === !1 ? n.NEVER_RANDOMIZE : n.ALWAYS_RANDOMIZE,
r != n.ALWAYS_RANDOMIZE || t.getNonce() ? r == n.NEVER_RANDOMIZE && t.getNonce() && t.clearNonce()  : t.setNonce(Math.floor(100001 * Math.random()))
},
svgedit.draw.Drawing = function (t, i) {
if (!t || !t.tagName || !t.namespaceURI || 'svg' != t.tagName || t.namespaceURI != e.SVG) throw 'Error: svgedit.draw.Drawing instance initialized without a <svg> element';
this.svgElem_ = t,
this.obj_num = 0,
this.idPrefix = i || 'svg_',
this.releasedNums = [
],
this.all_layers = [
],
this.current_layer = null,
this.nonce_ = '';
var a = this.svgElem_.getAttributeNS(e.SE, 'nonce');
a && r != n.NEVER_RANDOMIZE ? this.nonce_ = a : r == n.ALWAYS_RANDOMIZE && this.setNonce(Math.floor(100001 * Math.random()))
},
svgedit.draw.Drawing.prototype.getElem_ = function (e) {
return this.svgElem_.querySelector ? this.svgElem_.querySelector('#' + e)  : $(this.svgElem_).find('[id=' + e + ']') [0]
},
svgedit.draw.Drawing.prototype.getSvgElem = function () {
return this.svgElem_
},
svgedit.draw.Drawing.prototype.getNonce = function () {
return this.nonce_
},
svgedit.draw.Drawing.prototype.setNonce = function (t) {
this.svgElem_.setAttributeNS(e.XMLNS, 'xmlns:se', e.SE),
this.svgElem_.setAttributeNS(e.SE, 'se:nonce', t),
this.nonce_ = t
},
svgedit.draw.Drawing.prototype.clearNonce = function () {
this.nonce_ = ''
},
svgedit.draw.Drawing.prototype.getId = function () {
return this.nonce_ ? this.idPrefix + this.nonce_ + '_' + this.obj_num : this.idPrefix + this.obj_num
},
svgedit.draw.Drawing.prototype.getNextId = function () {
var e = this.obj_num,
t = !1;
this.releasedNums.length > 0 ? (this.obj_num = this.releasedNums.pop(), t = !0)  : this.obj_num++;
for (var n = this.getId(); this.getElem_(n); ) t && (this.obj_num = e, t = !1),
this.obj_num++,
n = this.getId();
return t && (this.obj_num = e),
n
},
svgedit.draw.Drawing.prototype.releaseId = function (e) {
var t = this.idPrefix + (this.nonce_ ? this.nonce_ + '_' : '');
if ('string' != typeof e || 0 != e.indexOf(t)) return !1;
var n = parseInt(e.substr(t.length));
return 'number' != typeof n || 0 >= n || - 1 != this.releasedNums.indexOf(n) ? !1 : (this.releasedNums.push(n), !0)
},
svgedit.draw.Drawing.prototype.getNumLayers = function () {
return this.all_layers.length
},
svgedit.draw.Drawing.prototype.hasLayer = function (e) {
for (var t = 0; this.getNumLayers() > t; t++) if (this.all_layers[t][0] == e) return !0;
return !1
},
svgedit.draw.Drawing.prototype.getLayerName = function (e) {
return e >= 0 && this.getNumLayers() > e ? this.all_layers[e][0] : ''
},
svgedit.draw.Drawing.prototype.getCurrentLayer = function () {
return this.current_layer
},
svgedit.draw.Drawing.prototype.getCurrentLayerName = function () {
for (var e = 0; this.getNumLayers() > e; ++e) if (this.all_layers[e][1] == this.current_layer) return this.getLayerName(e);
return ''
},
svgedit.draw.Drawing.prototype.setCurrentLayer = function (e) {
for (var t = 0; this.getNumLayers() > t; ++t) if (e == this.getLayerName(t)) return this.current_layer != this.all_layers[t][1] && (this.current_layer.setAttribute('style', 'pointer-events:none'), $('.currentLayer').toArray().forEach(function (e) {
e.classList.remove('currentLayer')
}), this.current_layer = this.all_layers[t][1], this.current_layer.classList.add('currentLayer'), this.current_layer.setAttribute('style', 'pointer-events:all')),
!0;
return !1
},
svgedit.draw.Drawing.prototype.deleteCurrentLayer = function () {
if (this.current_layer && this.getNumLayers() > 1) {
var e = this.current_layer.parentNode;
this.current_layer.nextSibling;
var t = e.removeChild(this.current_layer);
return this.identifyLayers(),
t
}
return null
},
svgedit.draw.Drawing.prototype.identifyLayers = function () {
this.all_layers = [
];
for (var n = this.svgElem_.childNodes.length, r = [
], i = [
], a = null, o = !1, s = 0; n > s; ++s) {
var l = this.svgElem_.childNodes.item(s);
if (l && 1 == l.nodeType) if ('g' == l.tagName) {
o = !0;
var c = $('title', l).text();
!c && svgedit.browser.isOpera() && l.querySelectorAll && (c = $(l.querySelectorAll('title')).text()),
c ? (i.push(c), this.all_layers.push([c,
l]), a = l, a.setAttribute('style', 'pointer-events:none'))  : r.push(l)
} else ~t.indexOf(l.nodeName) && (svgedit.utilities.getBBox(l), 'none' !== $(l).css('pointer-events') && r.push(l))
}
var u = this.svgElem_.ownerDocument;
if (r.length > 0 || !o) {
for (var s = 1; i.indexOf('Layer ' + s) >= 0; ) s++;
var d = 'Layer ' + s;
a = u.createElementNS(e.SVG, 'g');
var f = u.createElementNS(e.SVG, 'title');
f.textContent = d,
a.appendChild(f);
for (var h = 0; r.length > h; ++h) a.appendChild(r[h]);
this.svgElem_.appendChild(a),
this.all_layers.push([d,
a])
}
this.current_layer = document.querySelector('.currentLayer') || a,
this.current_layer.classList.add('currentLayer'),
this.current_layer.setAttribute('style', 'pointer-events:all')
},
svgedit.draw.Drawing.prototype.createLayer = function (t) {
var n = this.svgElem_.ownerDocument,
r = n.createElementNS(e.SVG, 'g'),
i = n.createElementNS(e.SVG, 'title');
return i.textContent = t,
r.appendChild(i),
this.svgElem_.appendChild(r),
this.identifyLayers(),
r
},
svgedit.draw.Drawing.prototype.getLayerVisibility = function (e) {
for (var t = null, n = 0; this.getNumLayers() > n; ++n) if (this.getLayerName(n) == e) {
t = this.all_layers[n][1];
break
}
return t ? 'none' != t.getAttribute('display')  : !1
},
svgedit.draw.Drawing.prototype.setLayerVisibility = function (e, t) {
if (typeof t != typeof !0) return null;
for (var n = null, r = 0; this.getNumLayers() > r; ++r) if (this.getLayerName(r) == e) {
n = this.all_layers[r][1];
break
}
if (!n) return null;
var i = n.getAttribute('display');
return i || (i = 'inline'),
n.setAttribute('display', t ? 'inline' : 'none'),
n
},
svgedit.draw.Drawing.prototype.getLayerOpacity = function (e) {
for (var t = 0; this.getNumLayers() > t; ++t) if (this.getLayerName(t) == e) {
var n = this.all_layers[t][1],
r = n.getAttribute('opacity');
return r || (r = '1.0'),
parseFloat(r)
}
return null
},
svgedit.draw.Drawing.prototype.setLayerOpacity = function (e, t) {
if (!('number' != typeof t || 0 > t || t > 1)) for (var n = 0; this.getNumLayers() > n; ++n) if (this.getLayerName(n) == e) {
var r = this.all_layers[n][1];
r.setAttribute('opacity', t);
break
}
}
}(),
function () {
svgedit.path || (svgedit.path = {
});
var e = svgedit.NS,
t = {
pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
pathCtrlPtTooltip: 'Drag control point to adjust curve properties'
},
n = {
2: [
'x',
'y'
],
4: [
'x',
'y'
],
6: [
'x',
'y',
'x1',
'y1',
'x2',
'y2'
],
8: [
'x',
'y',
'x1',
'y1'
],
10: [
'x',
'y',
'r1',
'r2',
'angle',
'largeArcFlag',
'sweepFlag'
],
12: [
'x'
],
14: [
'y'
],
16: [
'x',
'y',
'x2',
'y2'
],
18: [
'x',
'y'
]
},
i = [
],
a = !0,
o = {
};
svgedit.path.setLinkControlPoints = function (e) {
a = e
},
svgedit.path.path = null;
var s = null;
svgedit.path.init = function (e) {
s = e,
i = [
0,
'ClosePath'
];
var t = [
'Moveto',
'Lineto',
'CurvetoCubic',
'CurvetoQuadratic',
'Arc',
'LinetoHorizontal',
'LinetoVertical',
'CurvetoCubicSmooth',
'CurvetoQuadraticSmooth'
];
$.each(t, function (e, t) {
i.push(t + 'Abs'),
i.push(t + 'Rel')
})
},
svgedit.path.insertItemBefore = function (e, t, n) {
var r = e.pathSegList;
if (svgedit.browser.supportsPathInsertItemBefore()) return r.insertItemBefore(t, n),
void 0;
for (var i = r.numberOfItems, a = [
], o = 0; i > o; o++) {
var s = r.getItem(o);
a.push(s)
}
r.clear();
for (var o = 0; i > o; o++) o == n && r.appendItem(t),
r.appendItem(a[o])
},
svgedit.path.ptObjToArr = function (e, t) {
for (var r = n[e], i = r.length, a = Array(i), o = 0; i > o; o++) a[o] = t[r[o]];
return a
},
svgedit.path.getGripPt = function (e, t) {
var n = {
x: t ? t.x : e.item.x,
y: t ? t.y : e.item.y
},
r = e.path;
if (r.matrix) {
var i = svgedit.math.transformPoint(n.x, n.y, r.matrix);
n = i
}
return n.x *= s.getCurrentZoom(),
n.y *= s.getCurrentZoom(),
n
},
svgedit.path.getPointFromGrip = function (e, t) {
var n = {
x: e.x,
y: e.y
};
if (t.matrix) {
var e = svgedit.math.transformPoint(n.x, n.y, t.imatrix);
n.x = e.x,
n.y = e.y
}
return n.x /= s.getCurrentZoom(),
n.y /= s.getCurrentZoom(),
n
},
svgedit.path.addPointGrip = function (n, r, i) {
var a = svgedit.path.getGripContainer(),
o = svgedit.utilities.getElem('pathpointgrip_' + n);
if (!o) {
o = document.createElementNS(e.SVG, 'circle'),
svgedit.utilities.assignAttributes(o, {
id: 'pathpointgrip_' + n,
display: 'none',
r: 4,
fill: '#FFF',
stroke: '#555',
'stroke-width': 1,
cursor: 'move',
'xlink:title': t.pathNodeTooltip
}),
o = a.appendChild(o);
var s = $('#pathpointgrip_' + n);
s.dblclick(function () {
svgedit.path.path && svgedit.path.path.setSegType()
})
}
return r && i && svgedit.utilities.assignAttributes(o, {
cx: r,
cy: i,
display: 'inline'
}),
o
},
svgedit.path.getGripContainer = function () {
var t = svgedit.utilities.getElem('pathpointgrip_container');
if (!t) {
var n = svgedit.utilities.getElem('selectorParentGroup');
t = n.appendChild(document.createElementNS(e.SVG, 'g')),
t.id = 'pathpointgrip_container'
}
return t
},
svgedit.path.addCtrlGrip = function (n) {
var r = svgedit.utilities.getElem('ctrlpointgrip_' + n);
return r ? r : (r = document.createElementNS(e.SVG, 'circle'), svgedit.utilities.assignAttributes(r, {
id: 'ctrlpointgrip_' + n,
display: 'none',
r: 4,
fill: '#666',
stroke: '#555',
'stroke-width': 2,
cursor: 'move',
'xlink:title': t.pathCtrlPtTooltip
}), svgedit.path.getGripContainer().appendChild(r), r)
},
svgedit.path.getCtrlLine = function (t) {
var n = svgedit.utilities.getElem('ctrlLine_' + t);
return n ? n : (n = document.createElementNS(e.SVG, 'line'), svgedit.utilities.assignAttributes(n, {
id: 'ctrlLine_' + t,
stroke: '#555',
'stroke-width': 1,
style: 'pointer-events:none'
}), svgedit.path.getGripContainer().appendChild(n), n)
},
svgedit.path.getPointGrip = function (e, t) {
var n = e.index,
r = svgedit.path.addPointGrip(n);
if (t) {
var i = svgedit.path.getGripPt(e);
svgedit.utilities.assignAttributes(r, {
cx: i.x,
cy: i.y,
display: 'inline'
})
}
return r
},
svgedit.path.getControlPoints = function (e) {
var t = e.item,
n = e.index;
if (!('x1' in t && 'x2' in t)) return null;
var r = {
};
svgedit.path.getGripContainer();
for (var i = svgedit.path.path.segs[n - 1].item, a = [
i,
t
], o = 1; 3 > o; o++) {
var s = n + 'c' + o,
l = r['c' + o + '_line'] = svgedit.path.getCtrlLine(s),
c = svgedit.path.getGripPt(e, {
x: t['x' + o],
y: t['y' + o]
}),
u = svgedit.path.getGripPt(e, {
x: a[o - 1].x,
y: a[o - 1].y
});
svgedit.utilities.assignAttributes(l, {
x1: c.x,
y1: c.y,
x2: u.x,
y2: u.y,
display: 'inline'
}),
r['c' + o + '_line'] = l,
pointGrip = r['c' + o] = svgedit.path.addCtrlGrip(s),
svgedit.utilities.assignAttributes(pointGrip, {
cx: c.x,
cy: c.y,
display: 'inline'
}),
r['c' + o] = pointGrip
}
return r
},
svgedit.path.replacePathSeg = function (e, t, n, r) {
var a = r || svgedit.path.path.elem,
o = 'createSVGPathSeg' + i[e],
s = a[o].apply(a, n);
if (svgedit.browser.supportsPathReplaceItem()) a.pathSegList.replaceItem(s, t);
 else {
for (var l = a.pathSegList, c = l.numberOfItems, u = [
], d = 0; c > d; d++) {
var f = l.getItem(d);
u.push(f)
}
l.clear();
for (var d = 0; c > d; d++) d == t ? l.appendItem(s)  : l.appendItem(u[d])
}
},
svgedit.path.getSegSelector = function (t, n) {
var r = t.index,
i = svgedit.utilities.getElem('segline_' + r);
if (!i) {
var a = svgedit.path.getGripContainer();
i = document.createElementNS(e.SVG, 'path'),
svgedit.utilities.assignAttributes(i, {
id: 'segline_' + r,
display: 'none',
fill: 'none',
stroke: '#0FF',
'stroke-width': 2,
style: 'pointer-events:none',
d: 'M0,0 0,0'
}),
a.appendChild(i)
}
if (n) {
var o = t.prev;
if (!o) return i.setAttribute('display', 'none'),
i;
var s = svgedit.path.getGripPt(o);
svgedit.path.replacePathSeg(2, 0, [
s.x,
s.y
], i);
for (var l = svgedit.path.ptObjToArr(t.type, t.item, !0), c = 0; l.length > c; c += 2) {
var s = svgedit.path.getGripPt(t, {
x: l[c],
y: l[c + 1]
});
l[c] = s.x,
l[c + 1] = s.y
}
svgedit.path.replacePathSeg(t.type, 1, l, i)
}
return i
},
svgedit.path.smoothControlPoints = function (e, t, n) {
var r = e.x - n.x,
i = e.y - n.y,
a = t.x - n.x,
o = t.y - n.y;
if (!(0 == r && 0 == i || 0 == a && 0 == o)) {
var l = Math.atan2(i, r),
c = Math.atan2(o, a),
u = Math.sqrt(r * r + i * i),
d = Math.sqrt(a * a + o * o),
f = s.getSVGRoot().createSVGPoint(),
h = s.getSVGRoot().createSVGPoint();
0 > l && (l += 2 * Math.PI),
0 > c && (c += 2 * Math.PI);
var p,
g,
v = Math.abs(l - c),
m = Math.abs(Math.PI - v) / 2;
return l - c > 0 ? (p = Math.PI > v ? l + m : l - m, g = Math.PI > v ? c - m : c + m)  : (p = Math.PI > v ? l - m : l + m, g = Math.PI > v ? c + m : c - m),
f.x = u * Math.cos(p) + n.x,
f.y = u * Math.sin(p) + n.y,
h.x = d * Math.cos(g) + n.x,
h.y = d * Math.sin(g) + n.y,
[
f,
h
]
}
return void 0
},
svgedit.path.Segment = function (e, t) {
this.selected = !1,
this.index = e,
this.item = t,
this.type = t.pathSegType,
this.ctrlpts = [
],
this.ptgrip = null,
this.segsel = null
},
svgedit.path.Segment.prototype.showCtrlPts = function (e) {
for (var t in this.ctrlpts) this.ctrlpts[t].setAttribute('display', e ? 'inline' : 'none')
},
svgedit.path.Segment.prototype.selectCtrls = function (e) {
$('#ctrlpointgrip_' + this.index + 'c1, #ctrlpointgrip_' + this.index + 'c2').attr('fill', e ? '#0FF' : '#EEE')
},
svgedit.path.Segment.prototype.show = function (e) {
this.ptgrip && (this.ptgrip.setAttribute('display', e ? 'inline' : 'none'), this.segsel.setAttribute('display', e ? 'inline' : 'none'), this.showCtrlPts(e))
},
svgedit.path.Segment.prototype.select = function (e) {
this.ptgrip && (this.ptgrip.setAttribute('stroke', e ? '#5200FF' : '#555'), this.segsel.setAttribute('display', e ? 'inline' : 'none'), this.ctrlpts && this.selectCtrls(e), this.selected = e)
},
svgedit.path.Segment.prototype.addGrip = function () {
this.ptgrip = svgedit.path.getPointGrip(this, !0),
this.ctrlpts = svgedit.path.getControlPoints(this, !0),
this.segsel = svgedit.path.getSegSelector(this, !0)
},
svgedit.path.Segment.prototype.update = function (e) {
if (this.ptgrip) {
var t = svgedit.path.getGripPt(this);
svgedit.utilities.assignAttributes(this.ptgrip, {
cx: t.x,
cy: t.y
}),
svgedit.path.getSegSelector(this, !0),
this.ctrlpts && (e && (this.item = svgedit.path.path.elem.pathSegList.getItem(this.index), this.type = this.item.pathSegType), svgedit.path.getControlPoints(this))
}
},
svgedit.path.Segment.prototype.move = function (e, t) {
var n = this.item;
if (this.ctrlpts) var r = [
n.x += e,
n.y += t,
n.x1,
n.y1,
n.x2 += e,
n.y2 += t
];
 else var r = [
n.x += e,
n.y += t
];
if (svgedit.path.replacePathSeg(this.type, this.index, r), this.next && this.next.ctrlpts) {
var i = this.next.item,
a = [
i.x,
i.y,
i.x1 += e,
i.y1 += t,
i.x2,
i.y2
];
svgedit.path.replacePathSeg(this.next.type, this.next.index, a)
}
if (this.mate) {
var n = this.mate.item,
o = [
n.x += e,
n.y += t
];
svgedit.path.replacePathSeg(this.mate.type, this.mate.index, o)
}
this.update(!0),
this.next && this.next.update(!0)
},
svgedit.path.Segment.prototype.setLinked = function (e) {
var t,
n,
r;
if (2 == e) {
if (n = 1, t = this.next, !t) return;
r = this.item
} else {
if (n = 2, t = this.prev, !t) return;
r = t.item
}
var i = t.item;
i['x' + n] = r.x + (r.x - this.item['x' + e]),
i['y' + n] = r.y + (r.y - this.item['y' + e]);
var a = [
i.x,
i.y,
i.x1,
i.y1,
i.x2,
i.y2
];
svgedit.path.replacePathSeg(t.type, t.index, a),
t.update(!0)
},
svgedit.path.Segment.prototype.moveCtrl = function (e, t, n) {
var r = this.item;
r['x' + e] += t,
r['y' + e] += n;
var i = [
r.x,
r.y,
r.x1,
r.y1,
r.x2,
r.y2
];
svgedit.path.replacePathSeg(this.type, this.index, i),
this.update(!0)
},
svgedit.path.Segment.prototype.setType = function (e, t) {
svgedit.path.replacePathSeg(e, this.index, t),
this.type = e,
this.item = svgedit.path.path.elem.pathSegList.getItem(this.index),
this.showCtrlPts(6 === e),
this.ctrlpts = svgedit.path.getControlPoints(this),
this.update(!0)
},
svgedit.path.Path = function (e) {
if (!e || 'path' !== e.tagName) throw 'svgedit.path.Path constructed without a <path> element';
this.elem = e,
this.segs = [
],
this.selected_pts = [
],
svgedit.path.path = this,
this.init()
},
svgedit.path.Path.prototype.init = function () {
$(svgedit.path.getGripContainer()).find('*').attr('display', 'none');
var e = this.elem.pathSegList,
t = e.numberOfItems;
this.segs = [
],
this.selected_pts = [
],
this.first_seg = null;
for (var n = 0; t > n; n++) {
var r = e.getItem(n),
i = new svgedit.path.Segment(n, r);
i.path = this,
this.segs.push(i)
}
for (var a = this.segs, o = null, n = 0; t > n; n++) {
var s = a[n],
l = n + 1 >= t ? null : a[n + 1],
c = 0 > n - 1 ? null : a[n - 1];
if (2 === s.type) {
if (c && 1 !== c.type) {
var u = a[o];
u.next = a[o + 1],
u.next.prev = u,
u.addGrip()
}
o = n
} else if (l && 1 === l.type) s.next = a[o + 1],
s.next.prev = s,
s.mate = a[o],
s.addGrip(),
null == this.first_seg && (this.first_seg = s);
 else if (l) 1 !== s.type && (s.addGrip(), l && 2 !== l.type && (s.next = l, s.next.prev = s));
 else if (1 !== s.type) {
var u = a[o];
u.next = a[o + 1],
u.next.prev = u,
u.addGrip(),
s.addGrip(),
this.first_seg || (this.first_seg = a[o])
}
}
return this
},
svgedit.path.Path.prototype.eachSeg = function (e) {
for (var t = this.segs.length, n = 0; t > n; n++) {
var r = e.call(this.segs[n], n);
if (r === !1) break
}
},
svgedit.path.Path.prototype.addSeg = function (e) {
var t = this.segs[e];
if (t.prev) {
var n,
r = t.prev;
switch (t.item.pathSegType) {
case 4:
var i = (t.item.x + r.item.x) / 2,
a = (t.item.y + r.item.y) / 2;
n = this.elem.createSVGPathSegLinetoAbs(i, a);
break;
case 6:
var o = (r.item.x + t.item.x1) / 2,
s = (t.item.x1 + t.item.x2) / 2,
l = (t.item.x2 + t.item.x) / 2,
c = (o + s) / 2,
u = (s + l) / 2,
i = (c + u) / 2,
d = (r.item.y + t.item.y1) / 2,
f = (t.item.y1 + t.item.y2) / 2,
h = (t.item.y2 + t.item.y) / 2,
p = (d + f) / 2,
g = (f + h) / 2,
a = (p + g) / 2;
n = this.elem.createSVGPathSegCurvetoCubicAbs(i, a, o, d, c, p);
var v = [
t.item.x,
t.item.y,
u,
g,
l,
h
];
svgedit.path.replacePathSeg(t.type, e, v)
}
svgedit.path.insertItemBefore(this.elem, n, e)
}
},
svgedit.path.Path.prototype.deleteSeg = function (e) {
var t = this.segs[e],
n = this.elem.pathSegList;
t.show(!1);
var r = t.next;
if (t.mate) {
var i = [
r.item.x,
r.item.y
];
svgedit.path.replacePathSeg(2, r.index, i),
svgedit.path.replacePathSeg(4, t.index, i),
n.removeItem(t.mate.index)
} else if (t.prev) n.removeItem(e);
 else {
t.item;
var i = [
r.item.x,
r.item.y
];
svgedit.path.replacePathSeg(2, t.next.index, i),
n.removeItem(e)
}
},
svgedit.path.Path.prototype.subpathIsClosed = function (e) {
var t = !1;
return svgedit.path.path.eachSeg(function (n) {
return e >= n ? !0 : 2 === this.type ? !1 : 1 === this.type ? (t = !0, !1)  : void 0
}),
t
},
svgedit.path.Path.prototype.removePtFromSelection = function (e) {
var t = this.selected_pts.indexOf(e);
- 1 != t && (this.segs[e].select(!1), this.selected_pts.splice(t, 1))
},
svgedit.path.Path.prototype.clearSelection = function () {
this.eachSeg(function () {
this.select(!1)
}),
this.selected_pts = [
]
},
svgedit.path.Path.prototype.storeD = function () {
this.last_d = this.elem.getAttribute('d')
},
svgedit.path.Path.prototype.show = function (e) {
return this.eachSeg(function () {
this.show(e)
}),
e && this.selectPt(this.first_seg.index),
this
},
svgedit.path.Path.prototype.movePts = function (e, t) {
for (var n = this.selected_pts.length; n--; ) {
var r = this.segs[this.selected_pts[n]];
r.move(e, t)
}
},
svgedit.path.Path.prototype.moveCtrl = function (e, t) {
var n = this.segs[this.selected_pts[0]];
n.moveCtrl(this.dragctrl, e, t),
a && n.setLinked(this.dragctrl)
},
svgedit.path.Path.prototype.setSegType = function (e) {
this.storeD();
for (var t, n = this.selected_pts.length; n--; ) {
var r = this.selected_pts[n],
i = this.segs[r],
a = i.prev;
if (a) {
if (!e) {
t = 'Toggle Path Segment Type';
var o = i.type;
e = 6 == o ? 4 : 6
}
e -= 0;
var s,
l = i.item.x,
c = i.item.y,
u = a.item.x,
d = a.item.y;
switch (e) {
case 6:
if (i.olditem) {
var f = i.olditem;
s = [
l,
c,
f.x1,
f.y1,
f.x2,
f.y2
]
} else {
var h = l - u,
p = c - d,
g = u + h / 3,
v = d + p / 3,
m = l - h / 3,
y = c - p / 3;
s = [
l,
c,
g,
v,
m,
y
]
}
break;
case 4:
s = [
l,
c
],
i.olditem = i.item
}
i.setType(e, s)
}
}
svgedit.path.path.endChanges(t)
},
svgedit.path.Path.prototype.selectPt = function (e, t) {
this.clearSelection(),
null == e && this.eachSeg(function (t) {
this.prev && (e = t)
}),
this.addPtsToSelection(e),
t && (this.dragctrl = t, a && this.segs[e].setLinked(t))
},
svgedit.path.Path.prototype.update = function () {
var e = this.elem;
return svgedit.utilities.getRotationAngle(e) ? (this.matrix = svgedit.math.getMatrix(e), this.imatrix = this.matrix.inverse())  : (this.matrix = null, this.imatrix = null),
this.eachSeg(function (t) {
this.item = e.pathSegList.getItem(t),
this.update()
}),
this
},
svgedit.path.getPath_ = function (e) {
var t = o[e.id];
return t || (t = o[e.id] = new svgedit.path.Path(e)),
t
},
svgedit.path.removePath_ = function (e) {
e in o && delete o[e]
};
var l = function (e, t) {
return dx = e - oldcx,
dy = t - oldcy,
r = Math.sqrt(dx * dx + dy * dy),
theta = Math.atan2(dy, dx) + angle,
dx = r * Math.cos(theta) + oldcx,
dy = r * Math.sin(theta) + oldcy,
dx -= newcx,
dy -= newcy,
r = Math.sqrt(dx * dx + dy * dy),
theta = Math.atan2(dy, dx) - angle,
{
x: (r * Math.cos(theta) + newcx) / 1,
y: (r * Math.sin(theta) + newcy) / 1
}
};
svgedit.path.recalcRotatedPath = function () {
var e = svgedit.path.path.elem,
t = svgedit.utilities.getRotationAngle(e, !0);
if (t) {
var n = svgedit.utilities.getBBox(e),
r = svgedit.path.path.oldbbox,
i = r.x + r.width / 2,
a = r.y + r.height / 2,
o = n.x + n.width / 2,
s = n.y + n.height / 2,
c = o - i,
u = s - a,
d = Math.sqrt(c * c + u * u),
f = Math.atan2(u, c) + t;
o = d * Math.cos(f) + i,
s = d * Math.sin(f) + a;
for (var h = e.pathSegList, p = h.numberOfItems; p; ) {
p -= 1;
var g = h.getItem(p),
v = g.pathSegType;
if (1 != v) {
var m = l(g.x, g.y),
y = [
m.x,
m.y
];
null != g.x1 && null != g.x2 && (c_vals1 = l(g.x1, g.y1), c_vals2 = l(g.x2, g.y2), y.splice(y.length, 0, c_vals1.x, c_vals1.y, c_vals2.x, c_vals2.y)),
svgedit.path.replacePathSeg(v, p, y)
}
}
n = svgedit.utilities.getBBox(e);
var b = svgroot.createSVGTransform(),
x = svgedit.transformlist.getTransformList(e);
b.setRotate(180 * t / Math.PI, o, s),
x.replaceItem(b, 0)
}
},
svgedit.path.clearData = function () {
o = {
}
}
}(),
document.querySelector('#workarea').addEventListener('touchstart', touchHandler, !0),
document.querySelector('#workarea').addEventListener('touchmove', touchHandler, !0),
document.querySelector('#workarea').addEventListener('touchend', touchHandler, !0),
document.querySelector('#workarea').addEventListener('touchcancel', touchHandler, !0),
window.console || (window.console = {
}, window.console.log = function () {
}, window.console.dir = function () {
}),
window.opera && (window.console.log = function (e) {
opera.postError(e)
}, window.console.dir = function () {
}),
function () {
'use strict';
var e = jQuery.fn.attr,
t = 'http://www.w3.org/2000/svg';
jQuery.fn.attr = function (n, r) {
var i = this.length;
if (!i) return e.apply(this, arguments);
for (var a = 0; i > a; a++) {
var o = this[a];
if (o.namespaceURI !== t) return e.apply(this, arguments);
if (void 0 !== r) o.setAttribute(n, r);
 else {
if ($.isArray(n)) {
for (var s = n.length, l = {
}; s--; ) {
var c = n[s],
u = o.getAttribute(c);
(u || '0' === u) && (u = isNaN(u) ? u : u - 0),
l[c] = u
}
return l
}
if ('object' != typeof n) {
var u = o.getAttribute(n);
return (u || '0' === u) && (u = isNaN(u) ? u : u - 0),
u
}
for (var d in n) o.setAttribute(d, n[d])
}
}
return this
}
}();
var svgns = 'http://www.w3.org/2000/svg',
xlinkns = 'http://www.w3.org/1999/xlink',
xmlns = 'http://www.w3.org/XML/1998/namespace',
xmlnsns = 'http://www.w3.org/2000/xmlns/',
se_ns = 'http://www.vectorpaint.yaks.com',
htmlns = 'http://www.w3.org/1999/xhtml',
mathns = 'http://www.w3.org/1998/Math/MathML';
$.SvgCanvas = function (e, t) {
function n(e) {
var t = {
};
return $('input[data-attr], select[data-attr]').toArray().forEach(function (n) {
n.getAttribute('data-attr').split(' ').forEach(function (r) {
- 1 !== svgRules.getAttriOfSVGElement(e).indexOf(r) && (t[r] = n.value)
})
}),
delete t.id,
delete t.x,
delete t.y,
delete t.width,
delete t.height,
delete t.filter,
delete t.r,
delete t.rx,
delete t.ry,
delete t.cx,
delete t.cy,
t
}
function r(e) {
var t = {
};
return $('input[data-style], select[data-style]').toArray().forEach(function (n) {
n.getAttribute('data-style').split(' ').forEach(function (r) {
- 1 !== svgRules.getAttriOfSVGElement(e).indexOf(r) && (t[r] = n.value)
})
}),
t
}
function i(e, t) {
for (var n = 0; e.length > n; n++) if (e[n].match(t)) return n;
return - 1
}
function a(e, t) {
for (var n = svgedit.utilities.getBBox(e), r = 0; 2 > r; r++) {
var i = 0 === r ? 'fill' : 'stroke',
a = e.getAttribute(i);
if (a && 0 === a.indexOf('url(')) {
var o = svgedit.utilities.getRefElem(a);
if ('linearGradient' === o.tagName) {
var s = o.getAttribute('x1') || 0,
l = o.getAttribute('y1') || 0,
c = o.getAttribute('x2') || 1,
u = o.getAttribute('y2') || 0;
s = n.width * s + n.x,
l = n.height * l + n.y,
c = n.width * c + n.x,
u = n.height * u + n.y;
var d = svgedit.math.transformPoint(s, l, t),
f = svgedit.math.transformPoint(c, u, t),
h = {
};
h.x1 = (d.x - n.x) / n.width,
h.y1 = (d.y - n.y) / n.height,
h.x2 = (f.x - n.x) / n.width,
h.y2 = (f.y - n.y) / n.height;
var p = o.cloneNode(!0);
$(p).attr(h),
p.id = Nt(),
svgedit.utilities.findDefs().appendChild(p),
e.setAttribute(i, 'url(#' + p.id + ')')
}
}
}
}
function o(e, t) {
var n = e.id,
r = q(n + '_blur');
return r || (r = T({
element: 'filter'
}), D().appendChild(r), t.addSubCommand(new J(r, D()))),
r
}
function s(e, t) {
var n = {
};
n.filter = e.getAttribute('filter'),
e.setAttribute('filter', 'url(#' + e.id + '_blur)'),
t.addSubCommand(new tt(e, n))
}
function l(e, t, n) {
var r = t.parentNode,
i = t.parentNode.parentNode;
e.removeAttribute('filter'),
0 === document.querySelectorAll('[filter="url(#' + r.id + ')"]').length && i.removeChild(r),
0 === i.childElementCount && i.parentNode.removeChild(i),
n.addSubCommand()
}
var c = svgedit.NS,
u = {
show_outside_canvas: !0,
selectNew: !1,
dimensions: [
640,
480
]
};
t && $.extend(u, t);
var d = u.dimensions,
f = this,
h = e.ownerDocument,
p = document.querySelector('#svgroot'),
g = p.querySelector('.zoom-view'),
v = document.getElementById('svgcontent'),
m = f.clearSvgContentElement = function () {
$(v).attr({
width: d[0],
height: d[1]
}),
g.appendChild(v)
};
m();
var b = 'svg_';
f.setIdPrefix = function (e) {
b = e
},
f.current_drawing_ = new svgedit.draw.Drawing(v, b);
var w = f.getCurrentDrawing = function () {
return f.current_drawing_
},
k = 1,
S = null,
E = {
shape: {
fill: ('none' == u.initFill.color ? '' : '#') + u.initFill.color,
fill_paint: null,
fill_opacity: u.initFill.opacity,
stroke: '#' + u.initStroke.color,
stroke_paint: null,
stroke_opacity: u.initStroke.opacity,
stroke_width: '0' === $('[data-attr~="stroke-width"]').val() ? '1' : $('[data-attr~="stroke-width"]').val(),
stroke_dasharray: $('[data-attr~="stroke_dasharray"]').val(),
stroke_linejoin: $('[data-attr~="stroke_linejoin"]').val(),
stroke_linecap: $('[data-attr~="stroke_linecap"]').val(),
opacity: $('[data-attr~="opacity"]').val()
}
};
E.text = $.extend(!0, {
}, E.shape),
$.extend(E.text, {
fill: '#000000',
stroke_width: 0,
font_size: 24,
font_family: 'serif'
});
var A = E.shape,
C = [
];
window.updateSelectedElements = function (e) {
C = e
};
var T = this.addSvgElementFromJson = function (e) {
var t = w().getCurrentLayer();
if (shape = h.createElementNS(svgns, e.element), t && (S || t).appendChild(shape), e.curStyles) {
- 1 !== i(svgRules.getAttriOfSVGElement(e.element), 'fill') && svgedit.utilities.assignAttributes(shape, {
fill: document.querySelector('input[data-attr="fill"]').value,
'fill-opacity': document.querySelector('input[data-attr="fill-opacity"]').value
}, 100),
- 1 !== i(svgRules.getAttriOfSVGElement(e.element), 'stroke') && svgedit.utilities.assignAttributes(shape, {
stroke: document.querySelector('input[data-attr="fill"]').value,
'stroke-opacity': document.querySelector('input[data-attr="fill-opacity"]').value
}, 100);
var a = n(e.element),
o = r(e.element);
for (var s in o) $(shape).css(s, o[s]);
svgedit.utilities.assignAttributes(shape, a, 100),
shape.setAttribute('id', Nt())
}
return svgedit.utilities.assignAttributes(shape, e.attr, 100),
shape
},
N = f.getTransformList = svgedit.transformlist.getTransformList,
M = svgedit.math.transformPoint,
L = f.matrixMultiply = svgedit.math.matrixMultiply,
G = f.hasMatrixTransform = svgedit.math.hasMatrixTransform,
I = f.transformListToTransform = svgedit.math.transformListToTransform,
O = svgedit.math.snapToAngle,
P = svgedit.math.getMatrix;
svgedit.units.init({
getBaseUnit: function () {
return u.baseUnit
},
getElement: svgedit.utilities.getElem,
getHeight: function () {
return v.getAttribute('height') / k
},
getWidth: function () {
return v.getAttribute('width') / k
},
getRoundDigits: function () {
return ft.round_digits
}
});
var j = f.convertToNum = svgedit.units.convertToNum;
svgedit.utilities.init({
getDOMDocument: function () {
return h
},
getDOMContainer: function () {
return e
},
getSVGRoot: function () {
return p
},
getSelectedElements: function () {
return C
},
getSVGContent: function () {
return v
},
getBaseUnit: function () {
return u.baseUnit
},
getStepSize: function () {
return u.stepSize
}
});
var D = f.findDefs = svgedit.utilities.findDefs,
B = f.getUrlFromAttr = svgedit.utilities.getUrlFromAttr,
V = f.getHref = svgedit.utilities.getHref,
R = f.setHref = svgedit.utilities.setHref,
F = svgedit.utilities.getPathBBox;
f.getBBox = svgedit.utilities.getBBox;
var z = f.getRotationAngle = svgedit.utilities.getRotationAngle,
q = f.getElem = svgedit.utilities.getElem;
f.getRefElem = svgedit.utilities.getRefElem;
var U = f.assignAttributes = svgedit.utilities.assignAttributes,
H = this.cleanupElement = svgedit.utilities.cleanupElement;
svgedit.coords.init({
getDrawing: function () {
return w()
},
getGridSnapping: function () {
return u.gridSnapping
}
});
var X = this.remapElement = svgedit.coords.remapElement;
svgedit.recalculate.init({
getSVGRoot: function () {
return p
},
getStartTransform: function () {
return gt
},
setStartTransform: function (e) {
gt = e
}
});
var Y = this.recalculateDimensions = svgedit.recalculate.recalculateDimensions,
W = svgedit.getReverseNS(),
K = f.sanitizeSvg = svgedit.sanitize.sanitizeSvg,
Z = function () {
};
Z.prototype.isEmpty = function () {
return !0
},
Z.prototype.addSubCommand = function () {
return !0
};
var Q = Z,
J = Z,
et = Z,
tt = Z,
nt = {
handleHistoryEvent: function () {
f.pathActions.clear(),
f.identifyLayers()
}
};
f.undoMgr = new svgedit.history.UndoManager(nt, f);
var rt = function (e) {
Mt('canvasChanged', null),
f.undoMgr.addCommandToHistory(e)
},
t = {
attributes: !0,
childList: !0,
characterData: !0,
subtree: !0
};
Z.prototype.addSubCommand = function () {
},
svgedit.select.init(u, {
createSVGElement: function (e) {
return f.addSvgElementFromJson(e)
},
svgRoot: function () {
return p
},
svgContent: function () {
return v
},
currentZoom: function () {
return k
},
getStrokedBBox: function (e) {
return f.getStrokedBBox([e])
}
});
var it = this.selectorManager = svgedit.select.getSelectorManager();
svgedit.path.init({
getCurrentZoom: function () {
return k
},
getSVGRoot: function () {
return p
}
}),
svgedit.utilities.snapToGrid = function (e) {
var t = parseFloat($('.snappingStep').val());
return e = Math.round(e / t) * t
},
svgedit.utilities.snapToGrid;
var at = {
exportNoBlur: 'Blurred elements will appear as un-blurred',
exportNoforeignObject: 'foreignObject elements will not appear',
exportNoDashArray: 'Strokes will appear filled',
exportNoText: 'Text may not appear as expected'
},
ot = 'a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use',
st = [
'clip-path',
'fill',
'filter',
'marker-end',
'marker-mid',
'marker-start',
'mask',
'stroke'
],
lt = $.data,
ct = {
},
ut = 'logo/vector_paint_icon256.png',
dt = [
],
ft = {
round_digits: 5
},
ht = !1,
pt = !1,
gt = null,
vt = 'select',
mt = 'none',
yt = {
},
bt = E.text,
xt = A,
wt = null,
kt = null,
St = [
],
_t = {
},
Et = null,
At = {
};
f.clipBoard = [
];
var Ct = this.runExtensions = function (e, t, n) {
var r = n ? [
] : !1;
return $.each(_t, function (i, a) {
e in a && (n ? r.push(a[e](t))  : r = a[e](t))
}),
r
};
this.addExtension = function (e, t) {
if (e in _t) console.log('Cannot add extension "' + e + '", an extension by that name already exists"');
 else {
if ($.isFunction(t)) var n = t($.extend(f.getPrivateMethods(), {
svgroot: p,
svgcontent: v,
nonce: w().getNonce(),
selectorManager: it
}));
 else var n = t;
_t[e] = n,
Mt('extension_added', n)
}
};
var Tt,
Nt,
Mt,
Lt = this.round = function (e) {
return parseInt(e * k, 10) / k
},
Gt = this.getIntersectionList = function (e) {
if (null == kt) return null;
var t = S || w().getCurrentLayer();
St.length || (St = Pt(t));
var n = null;
try {
n = t.getIntersectionList(e, null)
} catch (r) {
}
if (null == n || 'function' != typeof n.item) {
if (n = [
], e) var i = e;
 else {
var i = kt.getBBox(),
a = {
};
for (var o in i) a[o] = i[o] / k;
i = a
}
for (var s = St.length; s--; ) i.width && i.width && svgedit.math.rectsIntersect(i, St[s].bbox) && n.push(St[s].elem)
}
return n = $(n).toArray().filter(function (e) {
return 'none' !== $(e).css('pointer-events')
})
},
It = this.getStrokedBBox = function (e) {
if (e || (e = Ot()), !e.length) return !1;
e = [
].slice.call(e);
var t,
n = function (e) {
try {
var t = svgedit.utilities.getBBox(e),
n = svgedit.utilities.getRotationAngle(e);
return n && n % 90 || svgedit.math.hasMatrixTransform(svgedit.transformlist.getTransformList(e)),
t
} catch (r) {
return console.log(e, r),
null
}
};
if ($.each(e, function () {
t || this.parentNode && (t = n(this))
}), null == t) return null;
var r = t.x + t.width,
i = t.y + t.height,
a = t.x,
o = t.y,
s = function (e) {
var t = e.getAttribute('stroke-width'),
n = 0;
return 'none' == e.getAttribute('stroke') || isNaN(t) || (n += t / 2),
n
},
l = [
];
return $.each(e, function (e, t) {
var r = n(t);
if (r) {
var i = s(t);
a = Math.min(a, r.x - i),
o = Math.min(o, r.y - i),
l.push(r)
}
}),
t.x = a,
t.y = o,
$.each(e, function (e, t) {
var n = l[e];
if (n && 1 == t.nodeType) {
var a = s(t);
r = Math.max(r, n.x + n.width + a),
i = Math.max(i, n.y + n.height + a)
}
}),
t.width = r - a,
t.height = i - o,
t
},
Ot = this.getVisibleElements = function (e) {
e || (e = $(v).children());
var t = [
];
return $(e).children().each(function (e, n) {
try {
n.getBBox() && t.push(n)
} catch (r) {
}
}),
t.reverse()
},
Pt = this.getVisibleElementsAndBBoxes = function (e) {
e || (e = $(v).children());
var t = [
];
return $(e).children().each(function (e, n) {
try {
n.getBBox() && t.push({
elem: n,
bbox: It([n])
})
} catch (r) {
}
}),
t = t.filter(function () {
return 'none' !== $(t.elem).css('pointer-events')
}),
t.reverse()
},
jt = this.groupSvgElem = function (e) {
var t = document.createElementNS(c.SVG, 'g');
e.parentNode.replaceChild(t, e),
$(t).append(e).data('gsvg', e) [0].id = Nt()
},
Dt = function (e) {
return new_el = $(e).clone() [0],
new_el.removeAttribute('id'),
new_el.id = Nt(),
$.each(new_el.childNodes, function (i, child) {
child.id = Nt();
}),
'image' == new_el.tagName && Wt(new_el),
new_el
};
(function (e) {
var t = {
};
Tt = e.getId = function () {
return w().getId()
},
Nt = e.getNextId = function () {
return w().getNextId()
},
Mt = e.call = function (e, n) {
return t[e] ? t[e](this, n)  : void 0
},
e.bind = function (e, n) {
var r = t[e];
return t[e] = n,
r
}
}) (f),
this.prepareSvg = function () {
};
var Bt = function (e) {
if (!svgedit.browser.isGecko()) return e;
var t = e.cloneNode(!0);
return e.parentNode.insertBefore(t, e),
e.parentNode.removeChild(e),
it.releaseSelector(e),
C[0] = t,
it.requestSelector(t).showGrips(!0),
t
};
this.setRotationAngle = function (e, t) {
e = parseFloat(e);
var n = C[0],
r = n.getAttribute('transform'),
i = svgedit.utilities.getBBox(n),
a = i.x + i.width / 2,
o = i.y + i.height / 2,
s = svgedit.transformlist.getTransformList(n);
if (s.numberOfItems > 0) {
var l = s.getItem(0);
4 == l.type && s.removeItem(0)
}
if (0 != e) {
var c = svgedit.math.transformPoint(a, o, svgedit.math.transformListToTransform(s).matrix),
u = p.createSVGTransform();
u.setRotate(e, c.x, c.y),
s.numberOfItems ? s.insertItemBefore(u, 0)  : s.appendItem(u)
} else 0 == s.numberOfItems && n.removeAttribute('transform');
if (!t) {
var d = n.getAttribute('transform');
n.setAttribute('transform', r),
cn('transform', d, C),
Mt('changed', C)
}
svgedit.utilities.getElem('pathpointgrip_container');
var f = it.requestSelector(C[0]);
f.resize(),
f.updateGripCursors(e)
};
var $t = this.recalculateAllSelectedDimensions = function () {
for (var e = 'none' == mt ? 'position' : 'size', t = new Z(e), n = C.length; n--; ) {
var r = C[n],
i = svgedit.recalculate.recalculateDimensions(r);
i && t.addSubCommand(i)
}
rt(t),
Mt('changed', C)
},
Vt = [
0,
'z',
'M',
'm',
'L',
'l',
'C',
'c',
'Q',
'q',
'A',
'a',
'H',
'h',
'V',
'v',
'S',
's',
'T',
't'
],
Rt = function (e) {
console.log([e.a,
e.b,
e.c,
e.d,
e.e,
e.f])
},
Ft = null,
zt = this.clearSelection = function (e) {
if ($('#svgcontent [contenteditable]').removeAttr('contenteditable'), $('.selected').toArray().forEach(function (e) {
e.classList.remove('selected')
}), null != C[0]) for (var t = C.length, n = 0; t > n; ++n) {
var r = C[n];
if (null == r) break;
it.releaseSelector(r),
C[n] = null
}
C = [
],
e && Mt('selected', C)
};
selectionChanged = function () {
Mt('selected', C)
},
canvasChanged = function () {
Mt('canvas', C)
};
var qt = this.addToSelection = function (e, t, n) {
if (0 != e.length) {
console.assert(elems.length);
for (var r = 0; C.length > r && null != C[r]; ) ++r;
for (var i = e.length; i--; ) {
var a = e[i];
if (a && svgedit.utilities.getBBox(a) && ('a' === a.tagName && 1 === a.childNodes.length && (a = a.firstChild), - 1 == C.indexOf(a) && 'none' !== $(a).css('pointer-events'))) {
C[r] = a,
r++;
var o = it.requestSelector(a)
}
}
C = C.filter(function (e) {
return e
}),
C.forEach(function (e) {
e.classList.add('selected')
}),
t && o.showGrips(1 === C.length),
n && Mt('selected', C)
}
},
Ut = this.selectOnly = function (e, t, n) {
zt(!1),
qt(e, t, n !== !1)
},
Ht = this.removeFromSelection = function (e) {
if (C = C.filter(_.isElement), null != C[0] && 0 != e.length) {
for (var t, n = Array(C.length), r = 0, i = C.length, a = 0; i > a; ++a) {
var o = C[a];
o && ( - 1 == e.indexOf(o) ? (n[r] = o, r++)  : t = it.releaseSelector(o))
}
C = n.filter(_.isElement)
}
};
this.selectAllInCurrentLayer = function () {
var e = w().getCurrentLayer();
e && (vt = 'select', Ut($(S || e).children(), !0, !0))
};
var Xt = this.getMouseTarget = function (e) {
if ('input' === e.target.nodeName.toLowerCase()) return null;
if (e.target.classList.contains('resize_canvas_anchore') || e.target.classList.contains('fitCanvas')) return e.target;
var t = $(e.target);
return t.closest('#selectorParentGroup').length ? it.selectorParentGroup : Yt(e.target)
},
Yt = this.getInputTarget = function (t) {
if (null == t || 'input' === t.nodeName) return !1;
if (t.correspondingUseElement && (t = t.correspondingUseElement), [
c.MATH,
c.HTML
].indexOf(t.namespaceURI) >= 0 && 'svgcanvas' != t.id) for (; 'foreignObject' != t.nodeName; ) if (t = t.parentNode, !t) return p;
var n = w().getCurrentLayer();
if ([p,
e,
v,
n].indexOf(t) >= 0) return p;
for (; t.parentNode !== (S || n); ) t = t.parentNode;
return t
};
(function () {
function t(e) {
return e > 0 ? 1 : - 1
}
var n,
r = null,
i = null,
a = null,
o = null,
s = null,
l = null,
c = null,
d = null,
h = null,
g = null,
v = null,
m = {
},
y = {
minx: null,
miny: null,
maxx: null,
maxy: null
},
b = null,
x = function (e) {
if (pt || 2 === e.button || 1 === e.button || f.spaceKey) return !0;
if ($(document.activeElement).blur(), b = null, !Xt(e) || 'foreignObject' === Xt(e).tagName && Xt(e).querySelector('[contenteditable]')) return !0;
var t = $('#svgcontent [contenteditable]');
t.length && (t.removeAttr('contenteditable'), Array.from(t[0].querySelectorAll('*')).forEach(function (e) {
e.setAttribute('style', 'border: none;outline: none;font-size: inherit;line-height: 1em;padding:0;margin:0;');
}), t[0].setAttribute('style', 'border: none;outline: none;font-size: inherit;line-height: 1em;padding:0;margin:0;'), rt()),
window.getSelection().removeAllRanges(),
pt = !0;
var u = 2 === e.button;
(e.altKey || e.ctrlKey) && svgCanvas.cloneSelectedElements(0, 0),
Ft = $('#svgcontent g') [0].getScreenCTM().inverse();
var x = $('#svgroot').css('zoom') || 1,
w = !1,
S = M(e.pageX / x, e.pageY / x, Ft),
_ = S.x * (w ? 1 : k),
E = S.y * (w ? 1 : k);
l = e.pageX / x,
c = e.pageY / x,
d = e.pageX / x,
h = e.pageY / x,
e.preventDefault();
var A = _ / k,
L = E / k,
I = Xt(e),
O = o = i = A,
P = s = a = L;
if (I == it.selectorParentGroup && null != C[0]) {
var j = e.target,
D = lt(j, 'type');
'rotate' == D ? vt = 'rotate' : 'resize' == D && (vt = 'resize', mt = lt(j, 'dir')),
I = C[0]
}
null != C[0] && (n = wrapSVG(C[0]).getBbox()),
start_transform = I.getAttribute('transform');
var B = N(I);
if (svgRules.getAttriOfSVGElement(vt) && 'path' !== vt && 'polyline' !== vt) {
var V = getObjectSize(vt.toLowerCase(), A, L, A, L);
if (V.id = Nt(), ht = !0, b = T({
element: vt,
attr: V,
curStyles: !0
}), 'image' === vt) R(b, ut),
Wt(b);
 else if ('foreignObject' === vt) {
var F = $(document.createElementNS('http://www.w3.org/1999/xhtml', 'p'));
F[0].setAttribute('xmlns', 'http://www.w3.org/1999/xhtml'),
F.text('text'),
b.setAttribute('font-family', 'Georgia, serif'),
$(b).append(F),
$(b).css('background', 'rgba(0,0,255,0.1)'),
$(b).keyup(function () {
$(this).attr('x', $(this).attr('x'))
})
}
}
switch (I.classList.contains('resize_canvas_anchore') && (vt = 'resize_canvas', ht = !0, g = svgCanvas.getResolution().w, v = svgCanvas.getResolution().h), vt) {
case 'select':
if (ht = !0, mt = 'none', u && (ht = !1), I != p) {
if ( - 1 == C.indexOf(I) && (e.shiftKey || zt(), - 1 === C.indexOf(I) ? qt([I], !0)  : Ht([I]), wt = I, Zt.clear()), !u) for (var q = 0; C.length > q; ++q) if (null != C[q]) {
var H = N(C[q]);
H.numberOfItems ? H.insertItemBefore(p.createSVGTransform(), 0)  : H.appendItem(p.createSVGTransform())
}
} else u || (e.shiftKey || zt(), vt = 'multiselect', null == kt && (kt = it.getRubberBandBox()), o *= k, s *= k, U(kt, {
x: o,
y: s,
width: 0,
height: 0,
display: 'inline'
}, 100));
break;
case 'picker':
return Xt(e) !== document.querySelector('#svgroot') && pickerCallback(Xt(e)),
pt = !1,
void 0;
case 'zoom':
ht = !0,
null == kt && (kt = it.getRubberBandBox()),
U(kt, {
x: O * k,
y: O * k,
width: 0,
height: 0,
display: 'inline'
}, 100);
break;
case 'fhpath':
ht = !0,
r = O + ',' + P + ' ',
b = T({
element: 'polyline',
curStyles: !0,
attr: {
points: r
}
}),
y.minx = O,
y.maxx = O,
y.miny = P,
y.maxy = P;
break;
case 'resize':
ht = !0,
i = A,
a = L,
m = svgedit.utilities.getBBox($('#selectedBox0') [0]);
var X = {
};
$.each(m, function (e, t) {
X[e] = t / k
}),
m = X;
var Y = z(I) ? 1 : 0;
G(B) ? (B.insertItemBefore(p.createSVGTransform(), Y), B.insertItemBefore(p.createSVGTransform(), Y), B.insertItemBefore(p.createSVGTransform(), Y))  : (B.appendItem(p.createSVGTransform()), B.appendItem(p.createSVGTransform()), B.appendItem(p.createSVGTransform()));
break;
case 'rotate':
ht = !0,
f.undoMgr.beginUndoableChange('transform', C);
break;
case 'path':
case 'pathedit':
i *= k,
a *= k,
Zt.mouseDown(e, I, i, a),
ht = !0;
break;
default:
}
var W = Ct('mouseDown', {
event: e,
current_zoom: k,
start_x: i,
start_y: a,
selectedElements: C
}, !0);
$.each(W, function (e, t) {
t && t.started && (ht = !0)
})
},
S = function (e) {
if (!(ht && pt || 'path' === vt)) return !0;
if (1 === e.button || f.spaceKey) return !0;
if (!Xt(e) || 'foreignObject' === Xt(e).tagName && Xt(e).querySelector('[contenteditable]')) return !0;
var l,
c,
y = $('#svgroot').css('zoom') || 1,
x = C[0],
w = !1,
S = M(e.pageX / y, e.pageY / y, Ft),
_ = S.x * (w ? 1 : k),
E = S.y * (w ? 1 : k),
A = l = _ / k,
T = c = E / k,
L = e.pageX / y - d,
I = e.pageY / y - h;
L *= k,
I *= k;
var j = 0,
D = 0;
if (!B) var B = window.event;
e.pageX || e.pageY ? (j = e.pageX, D = e.pageY)  : (e.clientX || e.clientY) && (j = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, D = e.clientY + document.body.scrollTop + document.documentElement.scrollTop),
e.preventDefault();
var V = e.altKey || e.metaKey || e.ctrlKey || !1;
if (V && 'path' !== vt && 'polyline' !== vt && 'fhpath' !== vt) {
var R = Math.max(Math.abs(l - i), Math.abs(c - a));
if ('line' === vt) {
var F = (Math.atan2(c - a, l - i) * (180 / Math.PI) - 90) % 360,
q = 45;
F = Math.round(F / q) * q,
Math.min(Math.abs(l - i), Math.abs(c - a)),
l = i + R * t(l - i),
c = a + R * t(c - a),
90 === F || - 90 === F ? c = a : (0 === F || - 180 === F) && (l = i)
} else l = i + R * t(l - i),
c = a + R * t(c - a)
}
if (A = l, T = c, svgRules.getAttriOfSVGElement(vt) && 'path' !== vt && 'polyline' !== vt) {
!e.shiftKey && u.gridSnapping && (l = svgedit.utilities.snapToGrid(l), c = svgedit.utilities.snapToGrid(c));
var H = getObjectSize(vt.toLowerCase(), i, a, l, c);
U(b, H, 1000)
}
switch (vt) {
case 'select':
if (null !== C[0]) {
var X = l - i,
Y = c - a;
if (!e.shiftKey && u.gridSnapping && n && (X = svgedit.utilities.snapToGrid(X + n.x) - n.x, Y = svgedit.utilities.snapToGrid(Y + n.y) - n.y), e.shiftKey) {
var W = O(i, a, l, c);
l = W.x,
c = W.y
}
if (0 != X || 0 != Y) {
for (var K = C.length, Z = 0; K > Z; ++Z) {
var x = C[Z];
if (null == x) break;
var Q = p.createSVGTransform(),
J = N(x);
Q.setTranslate(X, Y),
J.numberOfItems ? J.replaceItem(Q, 0)  : J.appendItem(Q),
it.requestSelector(x).resize()
}
Mt('transition', C)
}
}
break;
case 'multiselect':
A *= k,
T *= k,
U(kt, {
x: Math.min(o, A),
y: Math.min(s, T),
width: Math.abs(A - o),
height: Math.abs(T - s)
}, 100);
var et = [
],
tt = [
],
nt = Gt(),
K = C.length;
e.shiftKey && (tt = C);
for (var Z = 0; K > Z; ++Z) {
var rt = nt.indexOf(C[Z]);
- 1 == rt ? et.push(C[Z])  : nt[rt] = null
}
for (K = nt.length, Z = 0; K > Z; ++Z) nt[Z] && tt.push(nt[Z]);
et.length > 0 && f.removeFromSelection(et),
tt.length > 0 && qt(tt, !0, !1);
break;
case 'fhpath':
r += + A + ',' + T + ' ',
b.setAttributeNS(null, 'points', r);
break;
case 'resize':
var J = N(x),
at = G(J),
ot = at ? m : svgedit.utilities.getBBox(x),
st = ot.x,
lt = ot.y,
ct = ot.width,
ut = ot.height,
X = l - i,
Y = c - a;
!e.shiftKey && u.gridSnapping && (X = svgedit.utilities.snapToGrid(ct + X) - ct, Y = svgedit.utilities.snapToGrid(ut + Y) - ut);
var F = z(x);
if (F) {
var dt = Math.sqrt(X * X + Y * Y),
ft = Math.atan2(Y, X) - F * Math.PI / 180;
X = dt * Math.cos(ft),
Y = dt * Math.sin(ft)
}
- 1 == mt.indexOf('n') && - 1 == mt.indexOf('s') && (Y = 0),
- 1 == mt.indexOf('e') && - 1 == mt.indexOf('w') && (X = 0);
var gt = 0,
yt = 0,
bt = ut ? (ut + Y) / ut : 1,
xt = ct ? (ct + X) / ct : 1;
mt.indexOf('n') >= 0 && (bt = ut ? (ut - Y) / ut : 1, yt = ut),
mt.indexOf('w') >= 0 && (xt = ct ? (ct - X) / ct : 1, gt = ct),
(e.shiftKey || e.altKey || e.metaKey || - 1 !== ['ne',
'nw',
'sw'].indexOf(mt)) && (xt = Math.max(xt, bt), bt = xt);
var wt = p.createSVGTransform(),
St = p.createSVGTransform(),
_t = p.createSVGTransform();
if (wt.setTranslate( - (st + gt), - (lt + yt)), St.setScale(xt, bt), _t.setTranslate(st + gt, lt + yt), at) {
var Et = F ? 1 : 0;
J.replaceItem(wt, 2 + Et),
J.replaceItem(St, 1 + Et),
J.replaceItem(_t, 0 + Et)
} else {
var At = J.numberOfItems;
J.replaceItem(_t, At - 3),
J.replaceItem(St, At - 2),
J.replaceItem(wt, At - 1)
}
it.requestSelector(x).resize(),
Mt('transition', C);
break;
case 'zoom':
A *= k,
T *= k,
U(kt, {
x: Math.min(o * k, A),
y: Math.min(s * k, T),
width: Math.abs(A - o * k),
height: Math.abs(T - s * k)
}, 100);
break;
case 'path':
case 'pathedit':
if (l *= k, c *= k, e.shiftKey) {
var Tt = svgedit.path.path;
if (Tt) var Nt = Tt.dragging ? Tt.dragging[0] : i,
Lt = Tt.dragging ? Tt.dragging[1] : a;
 else var Nt = i,
Lt = a;
var W = O(Nt, Lt, l, c);
l = W.x,
c = W.y
}
kt && 'none' !== kt.getAttribute('display') && (A *= k, T *= k, U(kt, {
x: Math.min(o * k, A),
y: Math.min(s * k, T),
width: Math.abs(A - o * k),
height: Math.abs(T - s * k)
}, 100)),
Zt.mouseMove(e, l, c);
break;
case 'textedit':
l *= k,
c *= k,
Kt.mouseMove(_, E);
break;
case 'rotate':
var ot = svgedit.utilities.getBBox(x),
It = ot.x + ot.width / 2,
Ot = ot.y + ot.height / 2,
Pt = P(x),
jt = M(It, Ot, Pt);
It = jt.x,
Ot = jt.y;
var F = (Math.atan2(Ot - c, It - l) * (180 / Math.PI) - 90) % 360;
if (e.shiftKey) {
var q = 45;
F = Math.round(F / q) * q
}
f.setRotationAngle( - 180 > F ? 360 + F : F, !0),
Mt('transition', C);
break;
case 'resize_canvas':
var X = l - i,
Y = c - a;
svgCanvas.setResolution(g + 2 * X, v + 2 * Y);
default:
}
Ct('mouseMove', {
event: e,
current_zoom: k,
mouse_x: _,
mouse_y: E,
selected: x
}),
d = e.pageX,
h = e.pageY
},
_ = function (e) {
if (2 === e.button) return !0;
var t = !0;
if (!Xt(e)) return !0;
if (!pt) return !0;
pt = !1;
var n = wt;
if (wt = null, ht) {
var r = $('#svgroot').css('zoom') || 1,
i = !1,
a = M(e.pageX / r, e.pageY / r, Ft),
d = a.x * (i ? 1 : k),
h = a.y * (i ? 1 : k);
currentMouseDownX = e.pageX / r,
currentMouseDownY = e.pageY / r,
d *= k,
h *= k;
var p = d / k,
g = h / k,
v = p,
m = g;
Et = a;
var y = !1;
switch (ht = !1, vt) {
case 'resize_canvas':
case 'resize':
case 'multiselect':
null != kt && (kt.setAttribute('display', 'none'), St = [
]),
vt = 'select',
Mt('selected', C);
case 'select':
if (null != getSelectedElems() [0]) {
if (currentMouseDownX != l || currentMouseDownY != c) {
for (var x = C.length, S = 0; x > S && null != C[S]; ++S) C[S].firstChild || it.requestSelector(C[S]).resize();
rt(new J(b))
} else {
var _ = Xt(e);
'path' === getSelectedElems() [0].nodeName.toLowerCase() && 1 === getSelectedElems().length ? Zt.select(getSelectedElems() [0])  : e.shiftKey && n != _ && f.removeFromSelection([_]),
'foreignobject' === getSelectedElems() [0].nodeName.toLowerCase() && 1 === getSelectedElems().length && ($(getSelectedElems() [0]).children().attr({
contenteditable: 'true'
}), C[0].childNodes[0].focus())
}
1 === C.length && (C[0] === document.querySelector('#backgroundrect') ? it.requestSelector(C[0])  : Ut([C[0]], !0)),
$t()
}
Mt('selected', C);
break;
case 'zoom':
null != kt && kt.setAttribute('display', 'none');
var E = e.shiftKey ? 0.5 : 2;
return Mt('zoomed', {
x: Math.min(o, v),
y: Math.min(s, m),
width: Math.abs(v - o),
height: Math.abs(m - s),
factor: E
}),
void 0;
case 'path':
element = null,
ht = !0;
var A = Zt.mouseUp(e, element, d, h);
rt(),
b = A.element;
break;
case 'fhpath':
var T = b.getAttribute('points'),
N = T.indexOf(',');
t = N >= 0 ? T.indexOf(',', N + 1) >= 0 : T.indexOf(' ', T.indexOf(' ') + 1) >= 0;
break;
case 'pathedit':
element = null,
Zt.mouseUp(e);
break;
case 'textedit':
element = null,
Kt.mouseUp(e, d, h);
break;
case 'rotate':
element = null,
vt = 'select',
f.undoMgr.finishUndoableChange(),
$t();
break;
default:
}
'foreignObject' === vt && $(b).css('background', '');
var L = Ct('mouseUp', {
event: e,
mouse_x: d,
mouse_y: h
}, !0);
$.each(L, function (e, t) {
t && (b = t.newElement, ht = t.started || ht)
}),
'path' != vt && 'fhpath' != vt && l === e.pageX / r && c === e.pageY / r && (t = !1),
t || null == b ? null != b && (f.addedNew = !0, y && svgedit.units.convertAttrs(b), H(b), 'path' === vt ? (Zt.clear(!0), zt())  : (u.selectNew, ('ellipse' === vt || 'line' === vt) && f.convertToPath(b)), rt(new J(b)))  : (w().releaseId(Tt()), b.parentNode.removeChild(b), b = null),
b = null,
start_transform = null
}
};
$(e).mousedown(x).mousemove(S).mouseup(_),
window.editCanvas = function (e) {
'use strict';
function t(e, t, n, r) {
var i = {
};
return i.shiftKey = r,
i.pageX = e,
i.pageY = t,
i.target = n,
i.preventDefault = function () {
},
i
}
var n = {
};
return n.rotateSelectedBy = function () {
},
n.dragStart = function (e, n, r, i) {
x(t(e, n, r, i))
},
n.drag = function (e, n, r, i) {
S(t(e, n, r, i))
},
n.dragEnd = function (e, n, r, i) {
_(t(e, n, r, i))
},
n.tap = function (t, n) {
if ('foreignObject' === n.nodeName && n.classList.contains('selected')) n.firstChild.setAttribute('contenteditable', 'true');
 else {
if ('path' === n.nodeName && n.classList.contains('selected')) return;
e('[contenteditable]').removeAttr('contenteditable')
}
t || n !== document.querySelector('#svgroot') || zt(),
n !== document.querySelector('#svgroot') && (t ? (svgEditor.canvas.setMode('select'), - 1 === C.indexOf(n))  : - 1 === C.indexOf(n) && (svgEditor.canvas.setMode('select'), Ut([n], !0, !0)))
},
n.dblclick = function (e) {
'foreignObject' === e.nodeName && e.classList.contains('selected') ? e.firstChild.setAttribute('contenteditable', 'true')  : 'path' === e.nodeName && e.classList.contains('selected') && (Zt.clear(!0), zt(), Zt.toEditMode(e))
},
n.scale = function (t, n, r) {
Ft = e('#svgcontent g') [0].getScreenCTM().inverse();
var i = M(t, n, Ft),
a = {
x: i.x,
y: i.y,
width: 0,
height: 0
};
a.factor = r,
a.factor && Mt('zoomed', a)
},
n.deleteSelected = function () {
},
Object.freeze(n)
}(window.jQuery, window.svgUtils, document.querySelector('.canvas')),
window.addCanvasEvents = function () {
var e = $('#svgcontent').hammer({
stop_browser_behavior: !0,
swipe: !1,
drag: !1,
tap_always: !1,
drag_max_touches: 1,
tap_always: !0,
drag_min_distance: 0,
tap_max_distance: 1
});
e.on('dragstart', function (e) {
if (e.touches && 1 > e.touches.length) {
e.preventDefault(),
e.gesture.preventDefault(),
e.gesture.stopPropagation(),
e.stopPropagation();
var t = e.gesture.srcEvent;
t.pageX = e.gesture.touches[0].pageX,
t.pageY = e.gesture.touches[0].pageY,
x(t)
}
}),
e.on('drag', function (e) {
if (e.touches && 1 > e.touches.length) {
e.preventDefault(),
e.gesture.preventDefault(),
e.gesture.stopPropagation(),
e.stopPropagation(),
console.log('scrolling');
var t = e.gesture.srcEvent;
t.pageX = e.gesture.touches[0].pageX,
t.pageY = e.gesture.touches[0].pageY,
S(t)
}
}),
$('#svgcanvas').dblclick(function (e) {
var t = - 1 === $('#svgcontent').find('*').toArray().indexOf(e.target);
t || editCanvas.dblclick(Yt(e.target))
}),
e.on('dragend', function (e) {
if (e.touches && 1 > e.touches.length) {
e.preventDefault(),
e.gesture.preventDefault(),
e.gesture.stopPropagation(),
e.stopPropagation(),
console.log('scrolling');
var t = e.gesture.srcEvent;
t.pageX = e.gesture.touches[0].pageX,
t.pageY = e.gesture.touches[0].pageY,
_(t)
}
}),
e.on('rotate', function (e) {
editCanvas.rotateSelectedBy(e.gesture.rotation)
}),
e.on('tap', function (e) {
if (e.shiftKey = e.shiftKey || e.gesture.srcEvent.shiftKey, 'path' === svgCanvas.getMode() || 'pathedit' === svgCanvas.getMode()) return !1;
var t = - 1 === $('#svgcontent').find('*').toArray().indexOf(e.target);
if (t = t || 'pathedit' === vt || 'path' === vt) {
e.gesture.stopPropagation();
var n = e.gesture.srcEvent;
return n.shiftKey = e.shiftKey || e.gesture.srcEvent.shiftKey,
n.pageX = e.gesture.touches[0].pageX,
n.pageY = e.gesture.touches[0].pageY,
x(n),
_(n),
void 0
}
editCanvas.tap(e.shiftKey, Yt(e.target)),
e.preventDefault(),
e.gesture.preventDefault(),
e.gesture.stopPropagation(),
e.stopPropagation()
}),
e.on('transform', function (e) {
console.log('transform', e.gesture.scale);
var t = e.clientX || e.gesture.srcEvent.clientX,
n = e.clientY || e.gesture.srcEvent.clientY;
editCanvas.scale(t, n, e.gesture.scale)
})
};
var E = !1;
$(document).bind('keydown', 'space', function (e) {
document.querySelector('[contenteditable]') || - 1 !== ['input',
'select',
'textarea'].indexOf(document.activeElement.nodeName.toLowerCase()) || (E = !0, e.preventDefault())
}).bind('keyup', 'space', function (e) {
document.querySelector('[contenteditable]') || - 1 !== ['input',
'select',
'textarea'].indexOf(document.activeElement.nodeName.toLowerCase()) || (e.preventDefault(), E = !1)
});
var A,
L,
I;
$(e).mousedown(function (e) {
E && (A = e.clientX, L = e.clientY),
3 === e.which && (Ft = $('#svgcontent g') [0].getScreenCTM().inverse(), I = svgedit.math.transformPoint(e.pageX, e.pageY, Ft))
}),
$(e).mouseup(function () {
A = null,
L = null
}),
$(e).mousemove(function (e) {
A && (document.querySelector('#workarea').scrollLeft -= e.clientX - A, document.querySelector('#workarea').scrollTop -= e.clientY - L, A = e.clientX, L = e.clientY),
3 === e.which
}),
$(e).mousewheel(function (e, t) {
if (t && e.shiftKey) {
e.preventDefault(),
e.stopPropagation(),
Ft = $('#svgcontent g') [0].getScreenCTM().inverse();
var n = svgedit.math.transformPoint(e.pageX, e.pageY, Ft),
r = {
x: n.x,
y: n.y,
width: 0,
height: 0
};
r.factor = Math.max(0.75, Math.min(4 / 3, 1 + t / 4)),
Mt('zoomed', r)
}
})
}) ();
var Wt = function (e) {
$(e).click(function (e) {
e.preventDefault()
})
},
Kt = f.textActions = function () {
function e(e) {
var t = '' === d.value;
if ($(d).focus(), !arguments.length) if (t) e = 0;
 else {
if (d.selectionEnd !== d.selectionStart) return;
e = d.selectionEnd
}
var n;
n = S[e],
t || d.setSelectionRange(e, e),
h = svgedit.utilities.getElem('text_cursor'),
h || (h = document.createElementNS(c.SVG, 'line'), svgedit.utilities.assignAttributes(h, {
id: 'text_cursor',
stroke: '#333',
'stroke-width': 1
}), h = svgedit.utilities.getElem('selectorParentGroup').appendChild(h)),
v || (v = setInterval(function () {
var e = 'none' === h.getAttribute('display');
h.setAttribute('display', e ? 'inline' : 'none')
}, 600));
var r = o(n.x, m.y),
i = o(n.x, m.y + m.height);
svgedit.utilities.assignAttributes(h, {
x1: r.x,
y1: r.y,
x2: i.x,
y2: i.y,
visibility: 'visible',
display: 'inline'
}),
g && g.setAttribute('d', '')
}
function t(t, n, r) {
if (t === n) return e(n),
void 0;
r || d.setSelectionRange(t, n),
g = svgedit.utilities.getElem('text_selectblock'),
g || (g = document.createElementNS(c.SVG, 'path'), svgedit.utilities.assignAttributes(g, {
id: 'text_selectblock',
fill: 'green',
opacity: 0.5,
style: 'pointer-events:none'
}), svgedit.utilities.getElem('selectorParentGroup').appendChild(g));
var i = S[t],
a = S[n];
h.setAttribute('visibility', 'hidden');
var s = o(i.x, m.y),
l = o(i.x + (a.x - i.x), m.y),
u = o(i.x, m.y + m.height),
f = o(i.x + (a.x - i.x), m.y + m.height),
p = 'M' + s.x + ',' + s.y + ' L' + l.x + ',' + l.y + ' ' + f.x + ',' + f.y + ' ' + u.x + ',' + u.y + 'z';
svgedit.utilities.assignAttributes(g, {
d: p,
display: 'inline'
})
}
function n(e, t) {
var n = p.createSVGPoint();
if (n.x = e, n.y = t, 1 == S.length) return 0;
var r = u.getCharNumAtPosition(n);
0 > r ? (r = S.length - 2, S[0].x >= e && (r = 0))  : r >= S.length - 2 && (r = S.length - 2);
var i = S[r],
a = i.x + i.width / 2;
return e > a && r++,
r
}
function r(t, r) {
e(n(t, r))
}
function i(e, r, i) {
var a = d.selectionStart,
o = n(e, r),
s = Math.min(a, o),
l = Math.max(a, o);
t(s, l, !i)
}
function a(e, t) {
var n = {
x: e,
y: t
};
if (n.x /= k, n.y /= k, y) {
var r = svgedit.math.transformPoint(n.x, n.y, y.inverse());
n.x = r.x,
n.y = r.y
}
return n
}
function o(e, t) {
var n = {
x: e,
y: t
};
if (y) {
var r = svgedit.math.transformPoint(n.x, n.y, y);
n.x = r.x,
n.y = r.y
}
return n.x *= k,
n.y *= k,
n
}
function s(e) {
t(0, u.textContent.length),
$(this).unbind(e)
}
function l(e) {
if (w && u) {
var r = svgedit.math.transformPoint(e.pageX, e.pageY, Ft),
i = r.x * k,
o = r.y * k,
l = a(i, o),
c = n(l.x, l.y),
d = u.textContent,
f = d.substr(0, c).replace(/[a-z0-9]+$/i, '').length,
h = d.substr(c).match(/^[a-z0-9]+/i),
p = (h ? h[0].length : 0) + c;
t(f, p),
$(e.target).click(s),
setTimeout(function () {
$(e.target).unbind('click', s)
}, 300)
}
}
var u,
d,
h,
g,
v,
m,
y,
b,
x,
w,
S = [
];
return {
select: function (e, t, n) {
u = e,
Kt.toEditMode(t, n)
},
start: function (e) {
u = e,
Kt.toEditMode()
},
mouseDown: function (e, t, n, i) {
var o = a(n, i);
d.focus(),
r(o.x, o.y),
b = n,
x = i
},
mouseMove: function (e, t) {
var n = a(e, t);
i(n.x, n.y)
},
mouseUp: function (e, t, n) {
var r = a(t, n);
i(r.x, r.y, !0),
e.target !== u && b + 2 > t && t > b - 2 && x + 2 > n && n > x - 2 && Kt.toSelectMode(!0)
},
setCursor: e,
toEditMode: function (t, n) {
if (w = !1, vt = 'textedit', it.requestSelector(u).showGrips(!1), it.requestSelector(u).selectorRect, Kt.init(), $(u).css('cursor', 'text'), arguments.length) {
var i = a(t, n);
r(i.x, i.y)
} else e();
setTimeout(function () {
w = !0
}, 300)
},
toSelectMode: function (e) {
svgEditor.canvas.setMode('select', !0),
clearInterval(v),
v = null,
g && $(g).attr('display', 'none'),
h && $(h).attr('visibility', 'hidden'),
$(u).css('cursor', 'move'),
e && (zt(), $(u).css('cursor', 'move'), Mt('selected', [
u
]), qt([u], !0)),
u && !u.textContent.length && f.deleteSelectedElements(),
$(d).blur(),
u = !1
},
setInputElem: function (e) {
d = e
},
clear: function () {
'textedit' == vt && Kt.toSelectMode()
},
init: function () {
if (u) {
u.parentNode || (u = C[0], it.requestSelector(u).showGrips(!1));
var e = u.textContent,
n = e.length,
r = u.getAttribute('transform');
if (m = svgedit.utilities.getBBox(u), y = r ? svgedit.math.getMatrix(u)  : null, S = Array(n), d.focus(), $(u).unbind('dblclick', l).dblclick(l), !n) var i = {
x: m.x + m.width / 2,
width: 0
};
for (var a = 0; n > a; a++) {
var o = u.getStartPositionOfChar(a),
i = u.getEndPositionOfChar(a);
if (!svgedit.browser.supportsGoodTextCharPos()) {
var s = f.contentW * k;
o.x -= s,
i.x -= s,
o.x /= k,
i.x /= k
}
S[a] = {
x: o.x,
y: m.y,
width: i.x - o.x,
height: m.height
}
}
S.push({
x: i.x,
width: 0
}),
t(d.selectionStart, d.selectionEnd, !0)
}
}
}
}(),
Zt = f.pathActions = function () {
function t(e) {
e.setAttribute('d', Zt.convertPath(e))
}
var n,
r,
i,
o = !1;
svgedit.path.Path.prototype.endChanges = function (e) {
svgedit.browser.isWebkit() && t(this.elem),
new tt(this.elem, {
d: this.last_d
}, e),
Mt('changed', [
this.elem
])
},
svgedit.path.Path.prototype.addPtsToSelection = function (e) {
$.isArray(e) || (e = [
e
]);
for (var t = 0; e.length > t; t++) {
var n = e[t],
r = this.segs[n];
r.ptgrip && - 1 == this.selected_pts.indexOf(n) && n >= 0 && this.selected_pts.push(n)
}
this.selected_pts.sort();
for (var t = this.selected_pts.length, i = Array(t); t--; ) {
var a = this.selected_pts[t],
r = this.segs[a];
r.select(!0),
i[t] = r.ptgrip
}
Zt.canDeleteNodes = !0,
Zt.closed_subpath = this.subpathIsClosed(this.selected_pts[0]),
Mt('selected', i)
};
var n = null,
s = null,
l = !1;
this.lastCtrlPoint = [
0,
0
];
var d = function (e) {
var t = e.points,
n = t.numberOfItems;
if (n >= 4) {
var r = t.getItem(0),
i = null,
a = [
];
a.push(['M',
r.x,
',',
r.y,
' C'].join(''));
for (var o = 1; n - 4 >= o; o += 3) {
var s = t.getItem(o),
l = t.getItem(o + 1),
c = t.getItem(o + 2);
if (i) {
var u = svgedit.path.smoothControlPoints(i, s, r);
if (u && 2 == u.length) {
var d = a[a.length - 1].split(',');
d[2] = u[0].x,
d[3] = u[0].y,
a[a.length - 1] = d.join(','),
s = u[1]
}
}
a.push([s.x,
s.y,
l.x,
l.y,
c.x,
c.y].join(',')),
r = c,
i = l
}
for (a.push('L'); n > o; ++o) {
var f = t.getItem(o);
a.push([f.x,
f.y].join(','))
}
a = a.join(' '),
e = T({
element: 'path',
curStyles: !0,
attr: {
id: Tt(),
d: a
}
})
}
return e
};
return {
mouseDown: function (t, n, i, a) {
function l(e, t) {
var n = e.y - t.y,
r = e.x - t.x,
i = Math.atan2(n, r);
return i *= 180 / Math.PI
}
if ('path' !== vt) {
if (svgedit.path.path) {
svgedit.path.path.storeD();
var d = t.target.id;
if ('pathpointgrip_' == d.substr(0, 14)) {
var f = svgedit.path.path.cur_pt = parseInt(d.substr(14));
svgedit.path.path.dragging = [
i,
a
];
var h = svgedit.path.path.segs[f];
t.shiftKey ? h.selected ? svgedit.path.path.removePtFromSelection(f)  : svgedit.path.path.addPtsToSelection(f)  : ((1 >= svgedit.path.path.selected_pts.length || !h.selected) && svgedit.path.path.clearSelection(), svgedit.path.path.addPtsToSelection(f))
} else if (0 == d.indexOf('ctrlpointgrip_')) {
svgedit.path.path.dragging = [
i,
a
];
var p = d.split('_') [1].split('c'),
f = p[0] - 0,
g = p[1] - 0,
v = g,
m = svgedit.path.path.segs[f];
svgedit.path.path.selectPt(f, g);
var h,
y,
b;
if (2 == v) {
if (y = 1, h = m.next, !h) return;
b = m.item
} else {
if (y = 2, h = m.prev, !h) return;
b = h.item
}
var x = function (e, t) {
var n = e.x - t.x,
r = e.y - t.y;
return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2))
},
w = {
x: m.item['x' + v],
y: m.item['y' + v]
};
if (2 == v) var S = {
x: m.item.x,
y: m.item.y
};
 else var S = {
x: h.item.x,
y: h.item.y
};
var _ = {
x: h.item['x' + y],
y: h.item['y' + y]
},
E = x(w, S),
C = x(_, S),
N = Math.round(l(w, S), 0),
M = Math.round(l(_, S), 0),
L = 180 == Math.abs(N - M);
5 > Math.abs(E - C) && L ? (svgedit.path.setLinkControlPoints(!0), svgedit.path.is_linked = !0)  : (svgedit.path.setLinkControlPoints(!1), svgedit.path.is_linked = !1)
}
svgedit.path.path.dragging || (null == kt && (kt = it.getRubberBandBox()), svgedit.utilities.assignAttributes(kt, {
x: i * k,
y: a * k,
width: 0,
height: 0,
display: 'inline'
}, 100))
}
} else {
mouse_x = i,
mouse_y = a;
var G = mouse_x / k,
I = mouse_y / k,
O = svgedit.utilities.getElem('path_stretch_line');
!t.shiftKey && u.gridSnapping && (G = svgedit.utilities.snapToGrid(G), I = svgedit.utilities.snapToGrid(I), mouse_x = G * k, mouse_y = I * k, i = mouse_x, a = mouse_y),
r = [
G,
I
],
O || (O = document.createElementNS(c.SVG, 'path'), svgedit.utilities.assignAttributes(O, {
id: 'path_stretch_line',
stroke: '#333',
'stroke-width': '1',
fill: 'none',
'stroke-dasharray': '2,2'
}), O = svgedit.utilities.getElem('selectorParentGroup').appendChild(O)),
O.setAttribute('display', 'inline'),
this.stretchy = O;
var P = null;
if (s) {
for (var j = s.pathSegList, D = j.numberOfItems, B = 6 / k, V = !1; D; ) {
D--;
var R = j.getItem(D),
F = R.x,
z = R.y;
if (G >= F - B && F + B >= G && I >= z - B && z + B >= I) {
V = !0;
break
}
}
var d = Tt();
svgedit.path.removePath_(d);
var q = svgedit.utilities.getElem(d),
U = j.numberOfItems;
if (V) {
if (1 >= D && U >= 2) {
var H = j.getItem(0).x,
X = j.getItem(0).y,
Y = svgedit.path.first_grip ? svgedit.path.first_grip[0] / k : j.getItem(0).x,
W = svgedit.path.first_grip ? svgedit.path.first_grip[1] / k : j.getItem(0).y,
K = O.pathSegList.getItem(1);
if (4 === K.pathSegType) var Z = s.createSVGPathSegLinetoAbs(H, X);
 else var Z = s.createSVGPathSegCurvetoCubicAbs(H, X, K.x1 / k, K.y1 / k, Y, W);
var Q = s.createSVGPathSegClosePath();
j.appendItem(Z),
j.appendItem(Q)
} else if (3 > U) return P = !1;
$(O).remove(),
element = q,
s = null,
ht = !1
} else {
if (!$.contains(e, Xt(t))) return console.log('Clicked outside canvas'),
!1;
var v = s.pathSegList.numberOfItems,
J = s.pathSegList.getItem(v - 1),
et = J.x,
tt = J.y;
if (t.shiftKey) {
var nt = svgedit.math.snapToAngle(et, tt, G, I);
G = nt.x,
I = nt.y
}
var K = O.pathSegList.getItem(1);
if (4 === K.pathSegType) var Z = s.createSVGPathSegLinetoAbs(Lt(G), Lt(I));
 else var Z = s.createSVGPathSegCurvetoCubicAbs(Lt(G), Lt(I), K.x1 / k, K.y1 / k, K.x2 / k, K.y2 / k);
s.pathSegList.appendItem(Z),
G *= k,
I *= k,
O.setAttribute('d', [
'M',
G,
I,
G,
I
].join(' '));
var rt = svgedit.path.addCtrlGrip('1c1'),
at = svgedit.path.addCtrlGrip('0c2'),
ot = svgedit.path.getCtrlLine(1),
st = svgedit.path.getCtrlLine(2);
rt.setAttribute('cx', G),
rt.setAttribute('cy', I),
at.setAttribute('cx', G),
at.setAttribute('cy', I),
ot.setAttribute('x1', G),
ot.setAttribute('x2', G),
ot.setAttribute('y1', I),
ot.setAttribute('y2', I),
st.setAttribute('x1', G),
st.setAttribute('x2', G),
st.setAttribute('y1', I),
st.setAttribute('y2', I);
var lt = v;
o && (lt += svgedit.path.path.segs.length),
svgedit.path.addPointGrip(lt, G, I)
}
P = !0
} else {
if (o) {
s = svgedit.path.path.elem;
var ct = $(svgedit.path.path.elem).attr('d');
ct = ct.replace('Z', ''),
ct = ct.replace('z', ''),
$(s).attr('d', ct + ' L' + G + ',' + I + ' ')
} else d_attr = 'M' + G + ',' + I + ' ',
s = T({
element: 'path',
curStyles: !0,
attr: {
d: d_attr,
id: Nt(),
opacity: A.opacity
}
});
O.setAttribute('d', [
'M',
mouse_x,
mouse_y,
mouse_x,
mouse_y
].join(' '));
var lt = o ? svgedit.path.path.segs.length : 0;
svgedit.path.addPointGrip(lt, mouse_x, mouse_y),
svgedit.path.first_grip = null
}
}
},
mouseMove: function (e, t, n) {
if (!e.shiftKey && u.gridSnapping) {
var a = t / k,
o = n / k;
a = svgedit.utilities.snapToGrid(a),
o = svgedit.utilities.snapToGrid(o),
t = a * k,
n = o * k
}
l = !0;
var c = !e.ctrlKey;
if ('path' !== vt) if (svgedit.path.path.dragging) {
var d = svgedit.path.getPointFromGrip({
x: svgedit.path.path.dragging[0],
y: svgedit.path.path.dragging[1]
}, svgedit.path.path),
f = svgedit.path.getPointFromGrip({
x: t,
y: n
}, svgedit.path.path),
h = f.x - d.x,
p = f.y - d.y;
svgedit.path.path.dragging = [
t,
n
],
c && svgedit.path.is_linked ? svgedit.path.setLinkControlPoints(!0)  : svgedit.path.setLinkControlPoints(!1),
svgedit.path.path.dragctrl ? svgedit.path.path.moveCtrl(h, p)  : svgedit.path.path.movePts(h, p)
} else svgedit.path.path.selected_pts = [
],
svgedit.path.path.eachSeg(function () {
var e = this;
if (e.next || e.prev) {
e.item;
var t = kt.getBBox(),
n = svgedit.path.getGripPt(e),
r = {
x: n.x,
y: n.y,
width: 0,
height: 0
},
i = svgedit.math.rectsIntersect(t, r);
this.select(i),
i && svgedit.path.path.selected_pts.push(e.index)
}
});
 else {
if (!s) return;
var g = s.pathSegList,
v = g.numberOfItems - 1,
m = svgedit.path.addCtrlGrip('1c1'),
y = svgedit.path.addCtrlGrip('0c2');
if (r) {
var b = y.getAttribute('cx') / k || 0,
x = y.getAttribute('cy') / k || 0;
m.setAttribute('cx', t),
m.setAttribute('cy', n),
m.setAttribute('display', 'inline');
var w = r[0],
S = r[1];
g.getItem(v);
var _ = t / k,
E = n / k;
!e.shiftKey && u.gridSnapping && (_ = svgedit.utilities.snapToGrid(_), E = svgedit.utilities.snapToGrid(E));
var A = c ? w + (w - _)  : b,
C = c ? S + (S - E)  : x;
y.setAttribute('cx', A * k),
y.setAttribute('cy', C * k),
y.setAttribute('display', 'inline');
var T = svgedit.path.getCtrlLine(1),
N = svgedit.path.getCtrlLine(2);
if (svgedit.utilities.assignAttributes(T, {
x1: t,
y1: n,
x2: w * k,
y2: S * k,
display: 'inline'
}), U(N, {
x1: A * k,
y1: C * k,
x2: w * k,
y2: S * k,
display: 'inline'
}), 0 === v) i = [
t,
n
];
 else {
var M,
L,
G = g.getItem(v - 1),
M = G.x,
L = G.y;
6 === G.pathSegType ? (M += M - G.x2, L += L - G.y2)  : i && (M = i[0] / k, L = i[1] / k),
svgedit.path.replacePathSeg(6, v, [
w,
S,
this.lastCtrlPoint[0] / k,
this.lastCtrlPoint[1] / k,
A,
C
], s)
}
} else {
var I = this.stretchy;
if (I) {
var O = g.getItem(v),
P = 'pathpointgrip_0' === e.target.id,
j = t,
D = n;
if (P && svgedit.path.first_grip, 6 === O.pathSegType) {
var B = this.lastCtrlPoint[0] / k || O.x + (O.x - O.x2),
$ = this.lastCtrlPoint[1] / k || O.y + (O.y - O.y2);
svgedit.path.replacePathSeg(6, 1, [
t,
n,
B * k,
$ * k,
j,
D
], I)
} else i ? svgedit.path.replacePathSeg(6, 1, [
t,
n,
i[0],
i[1],
t,
n
], I)  : svgedit.path.replacePathSeg(4, 1, [
t,
n
], I)
}
}
}
},
mouseUp: function (e, t, n, a) {
if (!e.shiftKey && u.gridSnapping) {
var o = n / k,
c = a / k;
o = svgedit.utilities.snapToGrid(o),
c = svgedit.utilities.snapToGrid(c),
n = o * k,
a = c * k
}
var d = q('ctrlpointgrip_1c1'),
f = q('ctrlpointgrip_0c2');
if (this.lastCtrlPoint = d ? [
d.getAttribute('cx'),
d.getAttribute('cy')
] : [
n,
a
], !svgedit.path.first_grip && f && (svgedit.path.first_grip = [
f.getAttribute('cx'),
f.getAttribute('cy')
]), 'path' === vt) return r = null,
s || (t = svgedit.utilities.getElem(Tt()), ht = !1, i = null, this.clear()),
{
keep: !0,
element: t
};
if (svgedit.path.path.dragging) {
var h = svgedit.path.path.cur_pt;
svgedit.path.path.dragging = !1,
svgedit.path.path.dragctrl = !1,
svgedit.path.path.update(),
l && svgedit.path.path.endChanges('Move path point(s)'),
e.shiftKey || l || svgedit.path.path.selectPt(h)
} else kt && 'none' != kt.getAttribute('display') ? (kt.setAttribute('display', 'none'), 2 >= kt.getAttribute('width') && 2 >= kt.getAttribute('height') && Zt.toSelectMode(e.target))  : Zt.toSelectMode(e.target);
rt(),
l = !1
},
toEditMode: function (e) {
svgedit.path.path = svgedit.path.getPath_(e),
svgEditor.canvas.setMode('pathedit', !0),
zt(),
svgedit.path.path.show(!0).update(),
svgedit.path.path.oldbbox = svgedit.utilities.getBBox(svgedit.path.path.elem),
o = !1
},
toSelectMode: function (e) {
if (e == svgedit.path.path.elem, svgEditor.canvas.setMode('select', !0), svgedit.path.path.show(!1), n = !1, zt(), svgedit.path.path.matrix) try {
svgedit.path.recalcRotatedPath()
} catch (t) {
console.error(t)
}
Mt('selected', [
e
]),
Ut([svgedit.path.path.elem], !0)
},
addSubPath: function (e) {
e ? (svgEditor.canvas.setMode('path', !0), o = !0)  : (Zt.clear(!0), Zt.toEditMode(svgedit.path.path.elem))
},
select: function (e) {
n === e ? (Zt.toEditMode(e), svgEditor.canvas.setMode('pathedit', !0))  : n = e
},
reorient: function () {
var e = C[0];
if (e) {
var t = svgedit.utilities.getRotationAngle(e);
if (0 != t) {
var n = new Z('Reorient path'),
r = {
d: e.getAttribute('d'),
transform: e.getAttribute('transform')
};
n.addSubCommand(new tt(e, r)),
zt(),
this.resetOrientation(e),
rt(n),
svgedit.path.getPath_(e).show(!1).matrix = null,
this.clear(),
qt([e], !0),
Mt('changed', C)
}
}
},
clear: function () {
if (n = null, $(q('path_stretch_line')).remove(), $(q('pathpointgrip_container')).find('*').attr('display', 'none'), s) {
var e = q(Tt());
$(q('path_stretch_line')).remove();
var t = s.pathSegList;
t.numberOfItems > 1 ? s.createSVGPathSegClosePath()  : $(e).remove(),
s = i = null,
ht = !1,
rt()
}
o && svgEditor.canvas.setMode('select', !0),
o = !1,
svgedit.path.path && svgedit.path.path.init().show(!1)
},
resetOrientation: function (e) {
if (null == e || 'path' != e.nodeName) return !1;
var t = svgedit.transformlist.getTransformList(e),
n = svgedit.math.transformListToTransform(t).matrix;
t.clear(),
e.removeAttribute('transform');
for (var r = e.pathSegList, i = r.numberOfItems, o = 0; i > o; ++o) {
var s = r.getItem(o),
l = s.pathSegType;
if (1 != l) {
var c = [
];
$.each(['',
1,
2], function (e, t) {
var r = s['x' + t],
i = s['y' + t];
if (void 0 !== r && void 0 !== i) {
var a = svgedit.math.transformPoint(r, i, n);
c.splice(c.length, 0, a.x, a.y)
}
}),
svgedit.path.replacePathSeg(l, o, c, e)
}
}
a(e, n)
},
zoomChange: function () {
'pathedit' == vt && svgedit.path.path.update()
},
getNodePoint: function () {
var e = svgedit.path.path.selected_pts.length ? svgedit.path.path.selected_pts[0] : 1,
t = svgedit.path.path.segs[e];
return {
x: t.item.x,
y: t.item.y,
type: t.type
}
},
linkControlPoints: function (e) {
svgedit.path.setLinkControlPoints(e)
},
clonePathNode: function () {
svgedit.path.path.storeD();
var e = svgedit.path.path.selected_pts;
svgedit.path.path.segs;
for (var t = e.length, n = [
]; t--; ) {
var r = e[t];
svgedit.path.path.addSeg(r),
n.push(r + t),
n.push(r + t + 1)
}
svgedit.path.path.init().addPtsToSelection(n),
svgedit.path.path.endChanges('Clone path node(s)')
},
opencloseSubPath: function () {
var e = svgedit.path.path.selected_pts;
if (1 === e.length) {
var t = svgedit.path.path.elem,
n = t.pathSegList;
n.numberOfItems;
var r = e[0],
i = null,
a = null;
if (svgedit.path.path.eachSeg(function (e) {
return 2 === this.type && r >= e && (a = this.item),
r >= e ? !0 : 2 === this.type ? (i = e, !1)  : 1 === this.type ? (i = !1, !1)  : void 0
}), null == i && (i = svgedit.path.path.segs.length - 1), i !== !1) {
var o = t.createSVGPathSegLinetoAbs(a.x, a.y),
s = t.createSVGPathSegClosePath();
return i == svgedit.path.path.segs.length ? (n.appendItem(o), n.appendItem(s))  : (svgedit.path.insertItemBefore(t, s, i), svgedit.path.insertItemBefore(t, o, i)),
svgedit.path.path.init().selectPt(i + 1),
void 0
}
var l = svgedit.path.path.segs[r];
if (l.mate) return n.removeItem(r),
n.removeItem(r),
svgedit.path.path.init().selectPt(r - 1),
void 0;
for (var c, u, d = 0; n.numberOfItems > d; d++) {
var f = n.getItem(d);
if (2 === f.pathSegType) c = d;
 else if (d === r) n.removeItem(c);
 else if (1 === f.pathSegType && d > r) {
u = d - 1,
n.removeItem(d);
break
}
}
for (var h = r - c - 1; h--; ) svgedit.path.insertItemBefore(t, n.getItem(c), u);
var p = n.getItem(c);
svgedit.path.replacePathSeg(2, c, [
p.x,
p.y
]);
var d = r;
svgedit.path.path.init().selectPt(0)
}
},
deletePathNode: function () {
if (Zt.canDeleteNodes) {
svgedit.path.path.storeD();
for (var e = svgedit.path.path.selected_pts, t = e.length; t--; ) {
var n = e[t];
svgedit.path.path.deleteSeg(n)
}
var r = function () {
var e = svgedit.path.path.elem.pathSegList,
t = e.numberOfItems,
n = function (t, n) {
for (; n--; ) e.removeItem(t)
};
if (1 >= t) return !0;
for (; t--; ) {
var i = e.getItem(t);
if (1 === i.pathSegType) {
var a = e.getItem(t - 1),
o = e.getItem(t - 2);
if (2 === a.pathSegType) {
n(t - 1, 2),
r();
break
}
if (2 === o.pathSegType) {
n(t - 2, 3),
r();
break
}
} else if (2 === i.pathSegType && t > 0) {
var s = e.getItem(t - 1).pathSegType;
if (2 === s) {
n(t - 1, 1),
r();
break
}
if (1 === s && e.numberOfItems - 1 === t) {
n(t, 1),
r();
break
}
}
}
return !1
};
if (r(), 1 >= svgedit.path.path.elem.pathSegList.numberOfItems) return Zt.toSelectMode(svgedit.path.path.elem),
f.deleteSelectedElements(),
void 0;
if (svgedit.path.path.init(), svgedit.path.path.clearSelection(), window.opera) {
var i = $(svgedit.path.path.elem);
i.attr('d', i.attr('d'))
}
svgedit.path.path.endChanges('Delete path node(s)')
}
},
smoothPolylineIntoPath: d,
setSegType: function (e) {
svgedit.path.path.setSegType(e)
},
moveNode: function (e, t) {
var n = svgedit.path.path.selected_pts;
if (n.length) {
svgedit.path.path.storeD();
var r = svgedit.path.path.segs[n[0]],
i = {
x: 0,
y: 0
};
i[e] = t - r.item[e],
r.move(i.x, i.y),
svgedit.path.path.endChanges('Move path point')
}
},
fixEnd: function (e) {
for (var n, r = e.pathSegList, i = r.numberOfItems, a = 0; i > a; ++a) {
var o = r.getItem(a);
if (2 === o.pathSegType && (n = o), 1 === o.pathSegType) {
var s = r.getItem(a - 1);
if (s.x != n.x || s.y != n.y) {
var l = e.createSVGPathSegLinetoAbs(n.x, n.y);
svgedit.path.insertItemBefore(e, l, a),
Zt.fixEnd(e);
break
}
}
}
svgedit.browser.isWebkit() && t(e)
},
convertPath: function (e, t) {
for (var n = e.pathSegList, r = n.numberOfItems, i = 0, a = 0, o = '', s = null, l = 0; r > l; ++l) {
var c = n.getItem(l),
u = c.x || 0,
d = c.y || 0,
f = c.x1 || 0,
h = c.y1 || 0,
p = c.x2 || 0,
g = c.y2 || 0,
v = c.pathSegType,
m = Vt[v]['to' + (t ? 'Lower' : 'Upper') + 'Case'](),
y = function (e, t, n) {
var t = t ? ' ' + t.join(' ')  : '',
n = n ? ' ' + svgedit.units.shortFloat(n)  : '';
$.each(e, function (t, n) {
e[t] = svgedit.units.shortFloat(n)
}),
o += m + e.join(' ') + t + n
};
switch (v) {
case 1:
o += 'z';
break;
case 12:
u -= i;
case 13:
t ? (i += u, m = 'l')  : (u += i, i = u, m = 'L'),
y([[u,
a]]);
break;
case 14:
d -= a;
case 15:
t ? (a += d, m = 'l')  : (d += a, a = d, m = 'L'),
y([[i,
d]]);
break;
case 2:
case 4:
case 18:
u -= i,
d -= a;
case 5:
case 3:
s && 1 === n.getItem(l - 1).pathSegType && !t && (i = s[0], a = s[1]);
case 19:
t ? (i += u, a += d)  : (u += i, d += a, i = u, a = d),
3 === v && (s = [
i,
a
]),
y([[u,
d]]);
break;
case 6:
u -= i,
f -= i,
p -= i,
d -= a,
h -= a,
g -= a;
case 7:
t ? (i += u, a += d)  : (u += i, f += i, p += i, d += a, h += a, g += a, i = u, a = d),
y([[f,
h],
[
p,
g
],
[
u,
d
]]);
break;
case 8:
u -= i,
f -= i,
d -= a,
h -= a;
case 9:
t ? (i += u, a += d)  : (u += i, f += i, d += a, h += a, i = u, a = d),
y([[f,
h],
[
u,
d
]]);
break;
case 10:
u -= i,
d -= a;
case 11:
t ? (i += u, a += d)  : (u += i, d += a, i = u, a = d),
y([[c.r1,
c.r2]], [
c.angle,
c.largeArcFlag ? 1 : 0,
c.sweepFlag ? 1 : 0
], [
u,
d
]);
break;
case 16:
u -= i,
p -= i,
d -= a,
g -= a;
case 17:
t ? (i += u, a += d)  : (u += i, p += i, d += a, g += a, i = u, a = d),
y([[p,
g],
[
u,
d
]])
}
}
return o
}
}
}(),
Qt = this.removeUnusedDefElems = function () {
var e = v.getElementsByTagNameNS(c.SVG, 'defs');
if (!e || !e.length) return 0;
for (var t = [
], n = 0, r = [
'fill',
'stroke',
'filter',
'marker-start',
'marker-mid',
'marker-end'
], i = r.length, a = v.getElementsByTagNameNS(c.SVG, '*'), o = a.length, s = 0; o > s; s++) {
for (var l = a[s], u = 0; i > u; u++) {
var d = svgedit.utilities.getUrlFromAttr(l.getAttribute(r[u]));
d && t.push(d.substr(1))
}
var f = V(l);
f && 0 === f.indexOf('#') && t.push(f.substr(1))
}
var h = $(e).find('linearGradient, radialGradient, filter, marker, svg, symbol');
for (defelem_ids = [
], s = h.length; s--; ) {
var p = h[s],
g = p.id;
0 > t.indexOf(g) && (At[g] = p, p.parentNode.removeChild(p), n++)
}
return n
};
this.svgCanvasToString = function (e) {
e = e || '';
var t = $('#svgcontent').clone();
if (t.find('*').css('pointer-events', ''), t.removeAttr('class').find('*').removeAttr('href'), t.removeAttr('class'), t.attr('viewBox')) {
var n = t.attr('viewBox').split(' ') [2],
r = t.attr('viewBox').split(' ') [3];
t.attr('width', n),
t.attr('height', r)
}
t.removeAttr('id').removeAttr('x').removeAttr('y').removeAttr('viewBox').removeAttr('overflow').removeAttr('viewbox'),
t.find('*').removeAttr('contenteditable'),
elems = t.find('g *').filter(function () {
return this.tagName.indexOf('foreignObject') >= 0 ? ($(this).children().attr('xmlns', 'http://www.w3.org/1999/xhtml'), !1)  : !0
}),
'' !== e && t.css('overflow', e);
var i = (new XMLSerializer).serializeToString(t[0]);
return i = i.replace(RegExp('<br>', 'g'), '<br/>'),
i = i.replace(RegExp('<br style="">', 'g'), '<br/>'),
i = i.replace(RegExp('&nbsp;', 'g'), ''),
i = i.replace(RegExp(' href=', 'g'), 'xlink:href=')
},
this.svgToString = function (e, t) {
var n = [
],
r = svgedit.utilities.toXml,
i = u.baseUnit,
a = RegExp('^-?[\\d\\.]+' + i + '$');
if (e) {
H(e);
for (var o, s = e.childNodes, l = [
], o = e.attributes.length - 1; o >= 0; o--) l.push(e.attributes.item(o));
l = _(l).sortBy(function (e) {
return e.nodeName
});
for (var o = 0; t > o; o++) n.push(' ');
if (n.push('<'), n.push(e.nodeName), 'svgcontent' === e.id) {
var c = an(),
d = '';
'px' !== i && (c.w = svgedit.units.convertUnit(c.w, i) + i, c.h = svgedit.units.convertUnit(c.h, i) + i),
n.push(' width="' + c.w + '" height="' + c.h + '"' + d + ' xmlns="' + svgns + '"' + ' xlinkns="' + xlinkns + '"');
var f = {
};
$(e).find('*').andSelf().each(function () {
$.each(this.attributes, function (e, t) {
var r = t.namespaceURI;
r && !f[r] && 'xmlns' !== W[r] && 'xml' !== W[r] && (f[r] = !0, n.push(' xmlns:' + W[r] + '="' + r + '"'))
})
});
var h = [
'width',
'height',
'xmlns',
'x',
'y',
'viewBox',
'id'
];
l.forEach(function (e) {
var t = r(e.nodeValue);
0 !== e.nodeName.indexOf('xmlns:') && '' != t && - 1 == h.indexOf(e.localName) && (!e.namespaceURI || W[e.namespaceURI]) && (n.push(' '), n.push(e.nodeName), n.push('="'), n.push(t), n.push('"'))
})
} else {
if ('defs' === e.nodeName && !e.firstChild) return;
var p = [
'-moz-math-font-style',
'_moz-math-font-style'
];
l.forEach(function (t) {
var o = r(t.nodeValue);
if (p.indexOf(t.localName) >= 0);
 else if ('' != o) if ('class' === t.localName && 0 === o.indexOf('se_'));
 else {
if (n.push(' '), 'd' === t.localName && (o = Zt.convertPath(e, !0)), isNaN(o) ? a.test(o) && (o = svgedit.units.shortFloat(o) + i)  : o = svgedit.units.shortFloat(o), ft.apply && 'image' === e.nodeName && 'href' === t.localName && ft.images && 'embed' === ft.images) {
var s = ct[o];
s && (o = s)
}(!t.namespaceURI || t.namespaceURI == svgns || W[t.namespaceURI]) && (n.push(t.nodeName), n.push('="'), n.push(o), n.push('"'))
}
})
}
if (e.hasChildNodes()) {
n.push('>'),
t++;
for (var g = !1, o = 0; s.length > o; o++) {
var v = s.item(o);
switch (v.nodeType) {
case 1:
n.push('\n'),
n.push(this.svgToString(s.item(o), t));
break;
case 3:
var m = v.nodeValue.replace(/^\s+|\s+$/g, '');
'' != m && (g = !0, n.push(r(m) + ''));
break;
case 4:
n.push('\n'),
n.push(Array(t + 1).join(' ')),
n.push('<![CDATA['),
n.push(v.nodeValue),
n.push(']]>');
break;
case 8:
n.push('\n'),
n.push(Array(t + 1).join(' ')),
n.push('<!--'),
n.push(v.data),
n.push('-->')
}
}
if (t--, !g) {
n.push('\n');
for (var o = 0; t > o; o++) n.push(' ')
}
n.push('</'),
n.push(e.nodeName),
n.push('>')
} else n.push('/>')
}
return n.join('')
},
this.embedImage = function (e, t) {
$(new Image).load(function () {
var n = document.createElement('canvas');
n.width = this.width,
n.height = this.height,
n.getContext('2d').drawImage(this, 0, 0);
try {
var r = ';svgedit_url=' + encodeURIComponent(e);
r = n.toDataURL().replace(';base64', r + ';base64'),
ct[e] = r
} catch (i) {
ct[e] = !1
}
ut = e,
t && t(ct[e])
}).attr('src', e)
},
this.setGoodImage = function (e) {
ut = e
},
this.open = function () {
},
this.rasterExport = function () {
zt();
var e = [
],
t = {
feGaussianBlur: at.exportNoBlur,
foreignObject: at.exportNoforeignObject,
'[stroke-dasharray]': at.exportNoDashArray
},
n = $(v);
'font' in $('<canvas>') [0].getContext('2d') || (t.text = at.exportNoText),
$.each(t, function (t, r) {
n.find(t).length && e.push(r)
});
var r = this.svgCanvasToString();
Mt('exported', {
svg: r,
issues: e
})
},
this.getSvgString = function () {
return ft.apply = !1,
this.svgCanvasToString()
},
this.randomizeIds = function () {
arguments.length > 0 && 0 == arguments[0] ? svgedit.draw.randomizeIds(!1, w())  : svgedit.draw.randomizeIds(!0, w())
};
var Jt = this.uniquifyElems = function (e) {
var t = {
},
n = [
'filter',
'linearGradient',
'pattern',
'radialGradient',
'symbol',
'textPath',
'use'
];
svgedit.utilities.walkTree(e, function (e) {
if (1 == e.nodeType) {
e.id && (e.id in t || (t[e.id] = {
elem: null,
attrs: [
],
hrefs: [
]
}), t[e.id].elem = e),
$.each(st, function (n, r) {
var i = e.getAttributeNode(r);
if (i) {
var a = svgedit.utilities.getUrlFromAttr(i.value),
o = a ? a.substr(1)  : null;
o && (o in t || (t[o] = {
elem: null,
attrs: [
],
hrefs: [
]
}), t[o].attrs.push(i))
}
});
var r = svgedit.utilities.getHref(e);
if (r && n.indexOf(e.nodeName) >= 0) {
var i = r.substr(1);
i && (i in t || (t[i] = {
elem: null,
attrs: [
],
hrefs: [
]
}), t[i].hrefs.push(e))
}
}
});
for (var r in t) if (r) {
var i = t[r].elem;
if (i) {
var a = Nt();
i.id = a;
for (var o = t[r].attrs, s = o.length; s--; ) {
var l = o[s];
l.ownerElement.setAttribute(l.name, 'url(#' + a + ')')
}
for (var c = t[r].hrefs, u = c.length; u--; ) {
var d = c[u];
svgedit.utilities.setHref(d, '#' + a)
}
}
}
},
en = this.setUseData = function (e) {
var t = $(e);
'use' !== e.tagName && (t = t.find('use')),
t.each(function () {
var e = V(this).substr(1),
t = svgedit.utilities.getElem(e);
t && ($(this).data('ref', t), ('symbol' == t.tagName || 'svg' == t.tagName) && $(this).data('symbol', t).data('ref', t))
})
},
tn = this.convertGradients = function (e) {
var t = $(e).find('linearGradient, radialGradient');
!t.length && svgedit.browser.isWebkit() && (t = $(e).find('*').filter(function () {
return this.tagName.indexOf('Gradient') >= 0
})),
t.each(function () {
var e = this;
if ('userSpaceOnUse' === $(e).attr('gradientUnits')) {
var t = $(v).find('[fill="url(#' + e.id + ')"],[stroke="url(#' + e.id + ')"]');
if (!t.length) return;
var n = svgedit.utilities.getBBox(t[0]);
if (!n) return;
if ('linearGradient' === e.tagName) {
var r = $(e).attr(['x1',
'y1',
'x2',
'y2']),
i = e.gradientTransform.baseVal;
if (i && i.numberOfItems > 0) {
var a = svgedit.math.transformListToTransform(i).matrix,
o = svgedit.math.transformPoint(r.x1, r.y1, a),
s = svgedit.math.transformPoint(r.x2, r.y2, a);
r.x1 = o.x,
r.y1 = o.y,
r.x2 = s.x,
r.y2 = s.y,
e.removeAttribute('gradientTransform')
}
$(e).attr({
x1: (r.x1 - n.x) / n.width,
y1: (r.y1 - n.y) / n.height,
x2: (r.x2 - n.x) / n.width,
y2: (r.y2 - n.y) / n.height
}),
e.removeAttribute('gradientUnits')
}
}
})
},
nn = this.convertToGroup = function (e) {
e || (e = C[0]);
var t,
n = $(e),
r = new Z;
if (n.data('gsvg')) {
var i = e.firstChild,
a = $(i).attr(['x',
'y']);
$(e.firstChild.firstChild).unwrap(),
$(e).removeData('gsvg');
var o = svgedit.transformlist.getTransformList(e),
s = p.createSVGTransform();
s.setTranslate(a.x, a.y),
o.appendItem(s),
svgedit.recalculate.recalculateDimensions(e),
Mt('selected', [
e
])
} else if (n.data('symbol')) {
e = n.data('symbol'),
t = n.attr('transform');
var l = n.attr(['x',
'y']),
u = e.getAttribute('viewBox');
if (u) {
var d = u.split(' ');
l.x -= + d[0],
l.y -= + d[1]
}
t += ' translate(' + (l.x || 0) + ',' + (l.y || 0) + ')';
var f = n.prev();
r.addSubCommand(new et(n[0], n[0].nextSibling, n[0].parentNode)),
n.remove();
for (var g = $(v).find('use:data(symbol)').length, m = h.createElementNS(c.SVG, 'g'), y = e.childNodes, b = 0; y.length > b; b++) m.appendChild(y[b].cloneNode(!0));
if (svgedit.browser.isGecko()) {
var x = $(svgedit.utilities.findDefs()).children('linearGradient,radialGradient,pattern').clone();
$(m).append(x)
}
t && m.setAttribute('transform', t);
var w = e.parentNode;
if (Jt(m), svgedit.browser.isGecko() && $(D()).append($(m).find('linearGradient,radialGradient,pattern')), m.id = Nt(), f.after(m), w) {
if (!g) {
var k = e.nextSibling;
w.removeChild(e),
r.addSubCommand(new et(e, k, w))
}
r.addSubCommand(new J(m))
}
en(m),
svgedit.browser.isGecko() ? tn(svgedit.utilities.findDefs())  : tn(m),
svgedit.utilities.walkTreePost(m, function (e) {
try {
svgedit.recalculate.recalculateDimensions(e)
} catch (t) {
console.log(t)
}
}),
$(m).find(ot).each(function () {
this.id || (this.id = Nt())
}),
Ut([m]);
var S = un(m, !0);
S && r.addSubCommand(S),
rt(r)
} else console.log('Unexpected element to ungroup:', e)
};
this.setSvgString = function (e) {
e = e.replace(RegExp('<br>', 'g'), '<br/>'),
e = e.replace(RegExp('<br style="">', 'g'), '<br/>'),
e = e.replace(RegExp('&nbsp;', 'g'), ''),
e = e.replace(RegExp(' href=', 'g'), 'xlink:href=');
var t = svgedit.utilities.text2xml(e);
if (t = $.parseXML(e), t.documentElement && 'html' !== t.documentElement.nodeName.toLowerCase()) {
zt(),
u.baseUnit = SVGUnits.getUnitType(t.querySelector('svg')),
SVGUnits.convertSVGToNewUnit(t.querySelector('svg'), ''),
this.prepareSvg(t),
v.nextSibling;
var n = v.parentNode;
n.removeChild(v),
v = h.adoptNode(t.documentElement),
n.appendChild(v),
$(v).find('script').remove();
var r = $(v);
f.current_drawing_ = new svgedit.draw.Drawing(v, b);
var i = w().getNonce();
i ? Mt('setnonce', i)  : Mt('unsetnonce'),
r.find('image').each(function () {
var e = this;
Wt(e);
var t = V(this);
if (t) {
if (0 === t.indexOf('data:')) {
var n = t.match(/svgedit_url=(.*?);/);
if (n) {
var r = decodeURIComponent(n[1]);
$(new Image).load(function () {
e.setAttributeNS(c.XLINK, 'xlink:href', r)
}).attr('src', r)
}
}
f.embedImage(t)
}
}),
r.find('svg').each(function () {
if (!$(this).closest('defs').length) {
Jt(this);
var e = this.parentNode;
1 === e.childNodes.length && 'g' === e.nodeName ? ($(e).data('gsvg', this), e.id = e.id || Nt())  : jt(this)
}
}),
en(r),
tn(r[0]),
svgedit.utilities.walkTreePost(v, function (e) {
try {
Y(e)
} catch (t) {
console.log(t)
}
});
var a = {
id: 'svgcontent'
},
o = !1;
if (r.attr('viewBox')) {
var s = r.attr('viewBox').split(' ');
a.width = s[2],
a.height = s[3]
} else $.each(['width',
'height'], function (e, t) {
var n = r.attr(t);
n || (n = '100%'),
'%' === (n + '').substr( - 1) ? o = !0 : a[t] = j(t, n)
});
if (rn(), r.children().find(ot).each(function () {
this.id || (this.id = Nt())
}), o) {
var l = It();
a.width = l.width + l.x,
a.height = l.height + l.y
}
if (0 >= a.width && (a.width = 100), 0 >= a.height && (a.height = 100), r.attr(a), this.contentW = a.width, this.contentH = a.height, r.attr(['width',
'height']), svgedit.transformlist.resetListMap(), svgedit.path.clearData(), p.appendChild(it.selectorParentGroup), $('#svgcontent p').toArray().forEach(function (e) {
var t = (new XMLSerializer).serializeToString(e),
n = document.createElementNS('http://www.w3.org/1999/xhtml', 'p');
n.innerHTML = t,
e.parentNode.appendChild(n),
e.parentNode.removeChild(e)
}), $('#svgcontent image').toArray().forEach(function (e) {
hrefAttributes = [
e.getAttributeNS(xlinkns, 'href'),
e.getAttribute('href'),
e.getAttribute('xlink:href')
];
var t = hrefAttributes.filter(function (e) {
return e && 'null' !== e && '' !== e
}) [0];
e.removeAttributeNS(xlinkns, 'href'),
e.removeAttribute('href'),
e.removeAttribute('xlink:href'),
e.setAttributeNS(xlinkns, 'xlink:href', t)
}), !document.querySelector('#svgcontent #backgroundrect')) {
var d = h.createElementNS(c.SVG, 'rect');
$(d).attr({
id: 'backgroundrect',
width: '100%',
height: '100%',
x: 0,
y: 0,
fill: 'none',
stroke: 'none'
}),
document.querySelector('#svgcontent').insertBefore(d, v.firstChild)
}
return $('foreignObject').keyup(function () {
$(this).attr('x', $(this).attr('x'))
}),
svgCanvas.pathActions.clear(),
Mt('changed', [
v
]),
Mt('selected', [
v
]),
$(document).ready(addCanvasEvents),
updateFonts(),
!0
}
global.alert('Unable to load SVG vector graphics file.'),
console.error('string load fail ', e)
},
this.importSvgString = function (e) {
e = e.replace(RegExp('<br>', 'g'), '<br/>'),
e = e.replace(RegExp('<br style="">', 'g'), '<br/>'),
e = e.replace(RegExp('&nbsp;', 'g'), ''),
e = e.replace(RegExp(' href=', 'g'), 'xlink:href=');
try {
var t = svgedit.utilities.encode64(e.length + e).substr(0, 32),
n = !1;
yt[t] && $(yt[t].symbol).parents('#svgroot').length && (n = !0);
var r = new Z('Import SVG');
if (n) var i = yt[t].symbol,
a = yt[t].xform;
 else {
var o = svgedit.utilities.text2xml(e);
this.prepareSvg(o);
var s;
s = h.adoptNode ? h.adoptNode(o.documentElement)  : h.importNode(o.documentElement, !0),
Jt(s);
for (var l = svgedit.units.convertToNum('width', s.getAttribute('width')), u = svgedit.units.convertToNum('height', s.getAttribute('height')), d = s.getAttribute('viewBox'), f = d ? d.split(' ')  : [
0,
0,
l,
u
], p = 0; 4 > p; ++p) f[p] = + f[p];
var g = ( + v.getAttribute('width'), + v.getAttribute('height'));
if (u > l) var a = 'scale(' + g / 3 / f[3] + ')';
 else var a = 'scale(' + g / 3 / f[2] + ')';
a = 'translate(0) ' + a + ' translate(0)';
var i = h.createElementNS(c.SVG, 'symbol'),
m = svgedit.utilities.findDefs();
for (svgedit.browser.isGecko() && $(s).find('linearGradient, radialGradient, pattern').appendTo(m); s.firstChild; ) {
var y = s.firstChild;
i.appendChild(y)
}
for (var b = s.attributes, x = 0; b.length > x; x++) {
var k = b[x];
i.setAttribute(k.nodeName, k.nodeValue)
}
i.id = Nt(),
yt[t] = {
symbol: i,
xform: a
},
svgedit.utilities.findDefs().appendChild(i),
r.addSubCommand(new J(i))
}
var _ = h.createElementNS(c.SVG, 'use');
_.id = Nt(),
R(_, '#' + i.id),
(S || w().getCurrentLayer()).appendChild(_),
r.addSubCommand(new J(_)),
zt(),
_.setAttribute('transform', a),
svgedit.recalculate.recalculateDimensions(_),
$(_).data('symbol', i).data('ref', i),
qt([_]),
rt(r),
Mt('changed', [
v
])
} catch (E) {
return global.alert('Unable to load SVG vector graphics file.'),
console.log(E),
!1
}
return !0
};
var rn = f.identifyLayers = function () {
w().identifyLayers()
};
this.createLayer = function (e) {
var t = new Z('Create Layer'),
n = w().createLayer(e);
t.addSubCommand(new J(n)),
rt(t),
zt(!0),
Mt('changed', [
n
])
},
this.cloneLayer = function (e) {
var t = new Z('Duplicate Layer'),
n = h.createElementNS(c.SVG, 'g'),
r = h.createElementNS(c.SVG, 'title');
$(r).text(e),
n.appendChild(r);
var i = w().getCurrentLayer();
$(i).after(n);
for (var a = i.childNodes, o = 0; a.length > o; o++) {
var s = a[o];
'title' != s.localName && n.appendChild(Dt(s))
}
zt(),
rn(),
t.addSubCommand(new J(n)),
rt(t),
f.setCurrentLayer(e),
Mt('changed', [
n
])
},
this.deleteCurrentLayer = function () {
zt();
var e = w().getCurrentLayer(),
t = e.nextSibling,
n = e.parentNode;
if (e = w().deleteCurrentLayer()) {
var r = new Z('Delete Layer');
return r.addSubCommand(new et(e, t, n)),
rt(r),
zt(),
Mt('changed', [
n
]),
!0
}
return !1
},
this.setCurrentLayer = function (e) {
var t = w().setCurrentLayer(svgedit.utilities.toXml(e));
return t && (zt(), qt([w().getCurrentLayer()], !1, !0)),
t
},
this.renameCurrentLayer = function (e) {
var t = w();
if (t.current_layer) {
var n = t.current_layer;
if (!f.setCurrentLayer(e)) {
for (var r = new Z('Rename Layer'), i = 0; t.getNumLayers() > i && t.all_layers[i][1] != n; ++i);
var a = t.getLayerName(i);
t.all_layers[i][0] = svgedit.utilities.toXml(e);
for (var o = n.childNodes.length, i = 0; o > i; ++i) {
var s = n.childNodes.item(i);
if (s && 'title' == s.tagName) {
for (; s.firstChild; ) s.removeChild(s.firstChild);
return s.textContent = e,
r.addSubCommand(new tt(s, {
'#text': a
})),
rt(r),
Mt('changed', [
n
]),
!0
}
}
}
t.current_layer = n
}
return !1
},
this.setCurrentLayerPosition = function (e) {
var t = w();
if (t.current_layer && e >= 0 && t.getNumLayers() > e) {
for (var n = 0; t.getNumLayers() > n && t.all_layers[n][1] != t.current_layer; ++n);
if (n == t.getNumLayers()) return !1;
if (n != e) {
var r = null,
i = t.current_layer.nextSibling;
return e > n ? t.getNumLayers() - 1 > e && (r = t.all_layers[e + 1][1])  : r = t.all_layers[e][1],
v.insertBefore(t.current_layer, r),
rt(new Q(t.current_layer, i, v)),
rn(),
f.setCurrentLayer(t.getLayerName(e)),
!0
}
}
return !1
},
this.setLayerVisibility = function (e, t) {
var n = w(),
r = n.getLayerVisibility(e),
i = n.setLayerVisibility(e, t);
if (!i) return !1;
var a = r ? 'inline' : 'none';
return rt(new tt(i, {
display: a
}, 'Layer Visibility')),
i == n.getCurrentLayer() && (zt(), Zt.clear()),
!0
},
this.moveSelectedToLayer = function (e) {
for (var t = null, n = w(), r = 0; n.getNumLayers() > r; ++r) if (n.getLayerName(r) == e) {
t = n.all_layers[r][1];
break
}
if (!t) return !1;
for (var i = new Z('Move Elements to Layer'), a = C, r = a.length; r--; ) {
var o = a[r];
if (o) {
var s = o.nextSibling,
l = o.parentNode;
t.appendChild(o),
i.addSubCommand(new Q(o, s, l))
}
}
return rt(i),
!0
},
this.mergeLayer = function (e) {
var t = new Z('Merge Layer'),
n = w(),
r = $(n.current_layer).prev() [0];
if (r) {
var i = n.current_layer.childNodes;
i.length;
var a = n.current_layer.nextSibling;
for (t.addSubCommand(new et(n.current_layer, a, v)); n.current_layer.firstChild; ) {
var o = n.current_layer.firstChild;
if ('title' != o.localName) {
var s = o.nextSibling;
r.appendChild(o),
t.addSubCommand(new Q(o, s, n.current_layer))
} else {
var l = o.nextSibling;
t.addSubCommand(new et(o, l, n.current_layer)),
n.current_layer.removeChild(o)
}
}
return v.removeChild(n.current_layer),
e || (zt(), rn(), Mt('changed', [
v
]), rt(t)),
n.current_layer = r,
t
}
},
this.mergeAllLayers = function () {
var e = new Z('Merge all Layers'),
t = w();
for (t.current_layer = t.all_layers[t.getNumLayers() - 1][1]; $(v).children('g').length > 1; ) e.addSubCommand(f.mergeLayer(!0));
zt(),
rn(),
Mt('changed', [
v
]),
rt(e)
},
this.leaveContext = function () {
var e = dt.length;
if (e) {
for (var t = 0; e > t; t++) {
var n = dt[t],
r = lt(n, 'orig_opac');
1 !== r ? n.setAttribute('opacity', r)  : n.removeAttribute('opacity'),
n.setAttribute('style', 'pointer-events: inherit')
}
dt = [
],
zt(!0),
Mt('contextset', null)
}
S = null
},
this.clear = function () {
zt(),
Zt.clear(),
f.clearSvgContentElement(),
f.current_drawing_ = new svgedit.draw.Drawing(v),
f.createLayer('Layer 1'),
f.undoMgr.resetUndoStack(),
it.initGroup(),
kt = it.getRubberBandBox(),
Mt('cleared')
},
this.linkControlPoints = Zt.linkControlPoints,
this.getContentElem = function () {
return v
},
this.getRootElem = function () {
return p
},
this.getSelectedElems = getSelectedElems = function () {
return C.filter(function (e) {
return e
})
};
var an = this.getResolution = function () {
var e = Number.parseInt(v.getAttribute('width')),
t = Number.parseInt(v.getAttribute('height'));
return {
w: e,
h: t,
zoom: k
}
};
this.getZoom = function () {
return k
},
this.getVersion = function () {
return 'svgcanvas.js ($Rev$)'
},
this.setUiStrings = function (e) {
$.extend(at, e.notification)
},
this.setConfig = function (e) {
$.extend(u, e)
},
this.getTitle = function (e) {
if (e = e || C[0]) {
e = $(e).data('gsvg') || $(e).data('symbol') || e;
for (var t = e.childNodes, n = 0; t.length > n; n++) if ('title' == t[n].nodeName) return t[n].textContent;
return ''
}
},
this.setGroupTitle = function (e) {
var t = C[0];
t = $(t).data('gsvg') || t;
var n = $(t).children('title'),
r = new Z('Set Label');
if (e.length) if (n.length) {
var i = n[0];
r.addSubCommand(new tt(i, {
'#text': i.textContent
})),
i.textContent = e
} else i = h.createElementNS(c.SVG, 'title'),
i.textContent = e,
$(t).prepend(i),
r.addSubCommand(new J(i));
 else {
var a = n.nextSibling;
r.addSubCommand(new et(n[0], a, t)),
n.remove()
}
rt(r)
},
this.getDocumentTitle = function () {
return f.getTitle(v)
},
this.setDocumentTitle = function (e) {
for (var t = v.childNodes, n = !1, r = '', i = new Z('Change Image Title'), a = 0; t.length > a; a++) if ('title' == t[a].nodeName) {
n = t[a],
r = n.textContent;
break
}
n || (n = h.createElementNS(c.SVG, 'title'), v.insertBefore(n, v.firstChild)),
e.length ? n.textContent = e : n.parentNode.removeChild(n),
i.addSubCommand(new tt(n, {
'#text': r
})),
rt(i)
},
this.getEditorNS = function (e) {
return e && v.setAttribute('xmlns:se', c.SE),
c.SE
},
this.fitCanvasToContent = function () {
var e = It();
if (!e) return !1;
var t = Ot();
qt(t);
var n = [
],
r = [
];
$.each(t, function () {
n.push( - 1 * e.x),
r.push( - 1 * e.y)
}),
f.moveSelectedElements(n, r, !0),
zt(),
x = Math.round(e.width),
y = Math.round(e.height),
this.setResolution(x, y)
},
this.setResolution = function (e, t) {
var n = an(),
r = n.w,
i = n.h;
e = Math.max(e || r, 1),
t = Math.max(t || i, 1);
var a;
if (e != r || t != i) {
var o = p.suspendRedraw(1000);
a || (a = new Z('Change Image Dimensions')),
e = svgedit.units.convertToNum('width', e),
t = svgedit.units.convertToNum('height', t),
v.setAttribute('width', e),
v.setAttribute('height', t),
this.contentW = e,
this.contentH = t,
a.addSubCommand(new tt(v, {
width: r,
height: i
})),
v.setAttribute('viewBox', [
0,
0,
e / k,
t / k
].join(' ')),
a.addSubCommand(new tt(v, {
viewBox: [
'0 0',
r,
i
].join(' ')
})),
rt(a),
p.unsuspendRedraw(o),
Mt('changed', [
v
]),
updateResizeControls()
}
return !0
},
this.getOffset = function () {
return $(v).attr(['x',
'y'])
},
this.setBBoxZoom = function (e, t, n) {
var r,
i = 0.85,
a = function (e) {
if (!e) return !1;
var r = Math.round(100 * (t / e.width) * i) / 100,
a = Math.round(100 * (n / e.height) * i) / 100,
o = Math.min(r, a);
return f.setZoom(o),
{
zoom: o,
bbox: e
}
};
if ('object' == typeof e) {
if (r = e, 0 == r.width || 0 == r.height) {
var o = r.zoom ? r.zoom : k * r.factor;
return f.setZoom(o),
{
zoom: k,
bbox: r
}
}
return a(r)
}
switch (e) {
case 'selection':
if (!C[0]) return;
var s = $.map(C, function (e) {
return e ? e : void 0
});
r = It(s);
break;
case 'canvas':
var l = an();
i = 0.95,
r = {
width: l.w,
height: l.h,
x: 0,
y: 0
};
break;
case 'content':
r = It();
break;
case 'layer':
r = It(Ot(w().getCurrentLayer()));
break;
default:
return
}
return a(r)
},
this.setZoom = function (e) {
k = e,
$.each(C, function (e, t) {
t && it.requestSelector(t).resize()
}),
Zt.zoomChange(),
Ct('zoomChanged', e)
},
this.getMode = function () {
return vt
},
this.isUserDrawing = function () {
return ht
},
this.setMode = function (e, t) {
xt = C[0] && 'text' == C[0].nodeName ? bt : A,
vt = e,
'select' === e ? $('#svgcanvas').addClass('hightlightSVG')  : $('#svgcanvas').removeClass('hightlightSVG'),
$('body').attr('data-tool', vt);
var n = $('#svgcontent [contenteditable]');
n.length && (n.removeAttr('contenteditable'), rt()),
t !== !0 && (Zt.clear(!0), Kt.clear(), 'select' !== e && 'tool_zoom' !== e && 'eyedropper' !== e && 'connector' !== e && (zt(), Mt('selected', [
])))
},
this.getColor = function (e) {
return console.error('don\'t use'),
xt[e]
},
this.getCurShape = function (e) {
return console.error('don\'t use'),
A[e]
},
this.setColor = function (e, t) {
A[e] = t,
xt[e + '_paint'] = {
type: 'solidColor'
}
};
var D = function () {
var e = v.getElementsByTagNameNS(svgns, 'defs');
return e.length > 0 ? e = e[0] : (e = h.createElementNS(svgns, 'defs'), v.firstChild ? v.insertBefore(e, v.firstChild.nextSibling)  : v.appendChild(e)),
e
};
this.findDefs = D;
var on = this.setGradient = function (e) {
if (xt[e + '_paint'] && 'solidColor' != xt[e + '_paint'].type) {
var t = f[e + 'Grad'],
n = sn(t),
r = svgedit.utilities.findDefs();
n ? t = n : (t = r.appendChild(h.importNode(t, !0)), t.id = Nt()),
document.querySelector('input[data-attr="' + e + '"]').value = 'url(#' + t.id + ')',
$('input[data-attr="' + e + '"]').change()
}
},
sn = function (e) {
for (var t = svgedit.utilities.findDefs(), n = $(t).find('linearGradient, radialGradient'), r = n.length, i = [
'r',
'cx',
'cy',
'fx',
'fy'
]; r--; ) {
var a = n[r];
if ('linearGradient' == e.tagName) {
if (e.getAttribute('x1') != a.getAttribute('x1') || e.getAttribute('y1') != a.getAttribute('y1') || e.getAttribute('x2') != a.getAttribute('x2') || e.getAttribute('y2') != a.getAttribute('y2')) continue
} else {
var o = $(e).attr(i),
s = $(a).attr(i),
l = !1;
if ($.each(i, function (e, t) {
o[t] != s[t] && (l = !0)
}), l) continue
}
var u = e.getElementsByTagNameNS(c.SVG, 'stop'),
d = a.getElementsByTagNameNS(c.SVG, 'stop');
if (u.length == d.length) {
for (var f = u.length; f--; ) {
var h = u[f],
p = d[f];
if (h.getAttribute('offset') != p.getAttribute('offset') || h.getAttribute('stop-opacity') != p.getAttribute('stop-opacity') || h.getAttribute('stop-color') != p.getAttribute('stop-color')) break
}
if ( - 1 == f) return a
}
}
return null
};
this.setPaint = function (e, t) {
var n = new $.jGraduate.Paint(t);
switch (this.setPaintOpacity(e, n.alpha / 100, !0), xt[e + '_paint'] = n, n.type) {
case 'solidColor':
document.querySelector('input[data-attr="' + e + '"]').value = '#' + t.solidColor,
$('input[data-attr="' + e + '"]').change();
break;
case 'linearGradient':
case 'radialGradient':
f[e + 'Grad'] = n[n.type],
on(e)
}
},
this.setStrokePaint = function (e) {
this.setPaint('stroke', e)
},
this.setFillPaint = function (e) {
this.setPaint('fill', e)
},
this.getStrokeWidth = function () {
return xt.stroke_width
},
this.setStrokeWidth = function (e) {
if (0 == e && [
'line',
'path'
].indexOf(vt) >= 0) return f.setStrokeWidth(1),
void 0;
xt.stroke_width = e;
for (var t = [
], n = C.length; n--; ) {
var r = C[n];
r && ('g' == r.tagName ? svgedit.utilities.walkTree(r, function (e) {
'g' != e.nodeName && t.push(e)
})  : t.push(r))
}
t.length > 0 && (cn('stroke-width', e, t), Mt('changed', C))
},
this.setStrokeAttr = function (e, t) {
A[e.replace('-', '_')] = t;
for (var n = [
], r = C.length; r--; ) {
var i = C[r];
i && ('g' == i.tagName ? svgedit.utilities.walkTree(i, function (e) {
'g' != e.nodeName && n.push(e)
})  : n.push(i))
}
n.length > 0 && (cn(e, t, n), Mt('changed', C))
},
this.getStyle = function () {
return A
},
this.getOpacity = function () {
return A.opacity
},
this.setOpacity = function (e) {
A.opacity = e,
cn('opacity', e)
},
this.getFillOpacity = function () {
return A.fill_opacity
},
this.getStrokeOpacity = function () {
return A.stroke_opacity
},
this.setPaintOpacity = function (e, t, n) {
A[e + '_opacity'] = t,
n ? ln(e + '-opacity', t)  : cn(e + '-opacity', t)
},
this.getFilterVale = function (e, t, n) {
var r = 0;
if (e) {
var i = e.getAttribute('filter');
if (i) {
var a = q(e.id + '_blur'),
o = $(a).children().filter(function (e, n) {
return n.nodeName === t
}) [0];
o && (r = o.getAttribute(n))
}
}
return r
},
f.setFilterVal = function (e, t, n, r) {
var i = C[0];
e -= 0;
var a = new Z('Change object filter'),
c = o(i, a),
u = $(c).children().filter(function (e, n) {
return n.nodeName === t
}) [0];
if (!u) {
var d = {
};
d['in'] = 'SourceGraphic',
d[n] = e,
r !== void 0 && null != r && (d.operator = r),
u = T({
element: t,
attr: d
}),
c.appendChild(u),
a.addSubCommand(new J(u, c))
}
if (0 === e) l(i, u, a);
 else {
i.getAttribute('filter') || s(i, a),
svgedit.browser.isWebkit() && (i.removeAttribute('filter'), i.setAttribute('filter', 'url(#' + i.id + '_blur)'));
var f = {
};
f[n] = u.getAttribute(n),
u.setAttribute(n, e),
a.addSubCommand(new tt(u, f))
}
rt(a)
},
this.setImageURL = function (e) {
C.filter(function (e) {
return e && 'image' === e.tagName
}).forEach(function (t) {
var n = $(t).attr(['width',
'height']),
r = !n.width || !n.height,
i = V(t);
if (i !== e) r = !0;
 else if (!r) return;
var a = new Z('Change Image URL');
R(t, e),
a.addSubCommand(new tt(t, {
'#href': i
})),
r && $(new Image).load(function () {
var e = $(t).attr(['width',
'height']);
$(t).attr({
width: this.width,
height: this.height
}),
it.requestSelector(t).resize(),
a.addSubCommand(new tt(t, e)),
rt(a),
Mt('changed', [
t
])
}).attr('src', e),
rt(a)
})
},
this.setLinkURL = function (e) {
var t = C[0];
if (t) {
if ('a' !== t.tagName) {
var n = $(t).parents('a');
if (!n.length) return;
t = n[0]
}
var r = V(t);
if (r !== e) {
var i = new Z('Change Link URL');
R(t, e),
i.addSubCommand(new tt(t, {
'#href': r
})),
rt(i)
}
}
},
this.setRectRadius = function (e) {
var t = C[0];
if (null != t && 'rect' == t.tagName) {
var n = t.getAttribute('rx');
n != e && (t.setAttribute('rx', e), t.setAttribute('ry', e), rt(new tt(t, {
rx: n,
ry: n
}, 'Radius')), Mt('changed', [
t
]))
}
},
this.makeHyperlink = function (e) {
f.groupSelectedElements('a', e)
},
this.removeHyperlink = function () {
f.ungroupSelectedElement()
},
this.setSegType = function (e) {
Zt.setSegType(e)
},
this.convertToPath = function (e, t) {
if (null == e) return $.each(C, function (e, t) {
t && f.convertToPath(t)
}),
void 0;
if (!t) var r = new svgedit.history.BatchCommand('Convert element to Path');
var i = t ? {
}
 : {
fill: A.fill,
'fill-opacity': A.fill_opacity,
stroke: A.stroke,
'stroke-opacity': A.stroke_opacity,
visibility: 'hidden'
};
i = $.extend(i, n('path')),
$.each(['marker-start',
'marker-end',
'marker-mid',
'filter',
'clip-path'], function () {
e.getAttribute(this) && (i[this] = e.getAttribute(this))
});
var a = T({
element: 'path',
attr: i
}),
o = e.getAttribute('transform');
o && a.setAttribute('transform', o);
var s = e.id,
l = e.parentNode;
e.nextSibling ? l.insertBefore(a, e)  : l.appendChild(a);
var c = '',
u = function (e) {
$.each(e, function (e, t) {
var n = t[0],
r = t[1];
c += n;
for (var i = 0; r.length > i; i += 2) c += r[i] + ',' + r[i + 1] + ' '
})
},
d = 1.81;
switch (e.tagName) {
case 'ellipse':
case 'circle':
var h = $(e).attr(['rx',
'ry',
'cx',
'cy']),
p = h.cx,
g = h.cy,
v = h.rx,
m = h.ry;
'circle' == e.tagName && (v = m = $(e).attr('r')),
u([['M',
[
p - v,
g
]],
[
'C',
[
p - v,
g - m / d,
p - v / d,
g - m,
p,
g - m
]
],
[
'C',
[
p + v / d,
g - m,
p + v,
g - m / d,
p + v,
g
]
],
[
'C',
[
p + v,
g + m / d,
p + v / d,
g + m,
p,
g + m
]
],
[
'C',
[
p - v / d,
g + m,
p - v,
g + m / d,
p - v,
g
]
],
[
'Z',
[
]
]]);
break;
case 'path':
c = e.getAttribute('d');
break;
case 'line':
var h = $(e).attr(['x1',
'y1',
'x2',
'y2']);
c = 'M' + h.x1 + ',' + h.y1 + 'L' + h.x2 + ',' + h.y2;
break;
case 'polyline':
case 'polygon':
c = 'M' + e.getAttribute('points');
break;
case 'rect':
var y = $(e).attr(['rx',
'ry']),
v = y.rx,
m = y.ry,
b = e.getBBox(),
x = b.x,
w = b.y,
k = b.width,
S = b.height,
d = 4 - d;
v || m ? u([['M',
[
x,
w + m
]],
[
'C',
[
x,
w + m / d,
x + v / d,
w,
x + v,
w
]
],
[
'L',
[
x + k - v,
w
]
],
[
'C',
[
x + k - v / d,
w,
x + k,
w + m / d,
x + k,
w + m
]
],
[
'L',
[
x + k,
w + S - m
]
],
[
'C',
[
x + k,
w + S - m / d,
x + k - v / d,
w + S,
x + k - v,
w + S
]
],
[
'L',
[
x + v,
w + S
]
],
[
'C',
[
x + v / d,
w + S,
x,
w + S - m / d,
x,
w + S - m
]
],
[
'L',
[
x,
w + m
]
],
[
'Z',
[
]
]])  : u([['M',
[
x,
w
]],
[
'L',
[
x + k,
w
]
],
[
'L',
[
x + k,
w + S
]
],
[
'L',
[
x,
w + S
]
],
[
'L',
[
x,
w
]
],
[
'Z',
[
]
]]);
break;
default:
a.parentNode.removeChild(a)
}
if (c && a.setAttribute('d', c), t) {
Zt.resetOrientation(a);
var _ = !1;
try {
_ = a.getBBox()
} catch (E) {
}
return a.parentNode.removeChild(a),
_
}
if (o) {
var M = N(a);
G(M) && Zt.resetOrientation(a)
}
e.nextSibling,
e.parentNode.removeChild(e),
a.setAttribute('id', s),
a.removeAttribute('visibility'),
rt(r);
var L = svgCanvas.getSelectedElems().some(function (t) {
return t.id === e.id
});
L && (zt(), this.addToSelection([a], !0, !0))
};
var ln = function (e, t, n) {
var r = p.suspendRedraw(1000);
'pathedit' == vt && Zt.moveNode(e, t);
for (var n = n || C, i = n.length, a = [
'g',
'polyline',
'path'
], o = [
'transform',
'opacity',
'filter'
]; i--; ) {
var s = n[i];
if (null != s) if ('textedit' === vt && '#text' !== e && s.textContent.length && Kt.toSelectMode(s), ('x' === e || 'y' === e) && a.indexOf(s.tagName) >= 0) {
var l = It([s]),
c = 'x' === e ? t - l.x : 0,
u = 'y' === e ? t - l.y : 0;
f.moveSelectedElements(c * k, u * k, !0)
} else {
'g' === s.tagName && o.indexOf(e) >= 0;
var d = '#text' === e ? s.textContent : s.getAttribute(e);
if (null == d && (d = ''), d !== t + '') {
'#text' == e ? (svgedit.utilities.getBBox(s).width, s.textContent = t, /rotate/.test(s.getAttribute('transform')) && (s = Bt(s)))  : '#href' == e ? R(s, t)  : s.setAttribute(e, t),
svgedit.browser.isGecko() && 'text' === s.nodeName && /rotate/.test(s.getAttribute('transform')) && (0 === (t + '').indexOf('url') || [
'font-size',
'font-family',
'x',
'y'
].indexOf(e) >= 0 && s.textContent) && (s = Bt(s)),
C.indexOf(s) >= 0 && setTimeout(function () {
s.parentNode && it.requestSelector(s).resize()
}, 0);
var h = svgedit.utilities.getRotationAngle(s);
if (0 != h && 'transform' != e) for (var g = svgedit.transformlist.getTransformList(s), v = g.numberOfItems; v--; ) {
var m = g.getItem(v);
if (4 == m.type) {
g.removeItem(v);
var y = svgedit.utilities.getBBox(s),
b = svgedit.math.transformPoint(y.x + y.width / 2, y.y + y.height / 2, svgedit.math.transformListToTransform(g).matrix),
x = b.x,
w = b.y,
S = p.createSVGTransform();
S.setRotate(h, x, w),
g.insertItemBefore(S, v);
break
}
}
}
}
}
p.unsuspendRedraw(r)
},
cn = this.changeSelectedAttribute = function (e, t, n) {
var n = n || C;
f.undoMgr.beginUndoableChange(e, n),
n.length,
ln(e, t, n);
var r = f.undoMgr.finishUndoableChange();
r.isEmpty() || rt(r)
};
this.deleteSelectedElements = function () {
for (var e = new Z('Delete Elements'), t = C.length, n = [
], r = 0; t > r; ++r) {
var i = C[r];
if (null == i) break;
var a = i.parentNode,
o = i;
it.releaseSelector(o),
svgedit.path.removePath_(o.id),
'a' === a.tagName && 1 === a.childNodes.length && (o = a, a = a.parentNode);
var s = o.nextSibling,
l = a.removeChild(o);
n.push(i),
C[r] = null,
e.addSubCommand(new et(l, s, a))
}
e.isEmpty() || rt(e),
Mt('changed', n),
zt()
},
this.cutSelectedElements = function () {
for (var e = new Z('Cut Elements'), t = C.length, n = [
], r = 0; t > r; ++r) {
var i = C[r];
if (null == i) break;
var a = i.parentNode,
o = i;
it.releaseSelector(o),
svgedit.path.removePath_(o.id);
var s = o.nextSibling,
l = a.removeChild(o);
n.push(i),
C[r] = null,
e.addSubCommand(new et(l, s, a))
}
e.isEmpty() || rt(e),
Mt('changed', n),
zt(),
f.clipBoard = n
},
this.copySelectedElements = function () {
f.clipBoard = $.merge([], C)
},
this.pasteElements = function (e) {
var t = f.clipBoard,
n = t.length;
if (n) {
var r = [
],
i = new Z('Paste elements'),
a = C[C.length - 1];
for (a = a ? a.nextSibling : t[t.length - 1].nextSibling; n--; ) {
var o = t[n];
if (o) {
var s = Dt(o);
svgedit.utilities.getElem(o.id) || (s.id = o.id),
r.push(s),
(S || w().getCurrentLayer()).insertBefore(s, a),
i.addSubCommand(new J(s))
}
}
var l,
c,
u,
d,
h = It(r),
p = [
],
g = [
];
if (e) if (C.length > 0) {
var v = It(C);
u = v.x - h.x,
d = v.y - h.y
} else 'point' === e && (u = 0, d = 0);
 else l = Et.x,
c = Et.y,
u = l - (h.x + h.width / 2),
d = c - (h.y + h.height / 2);
Ut(r),
$.each(r, function () {
u += 20,
d += 20,
p.push(u),
g.push(d)
});
var m = f.moveSelectedElements(p, g, !1);
i.addSubCommand(m),
rt(i),
Mt('changed', r)
}
},
this.groupSelectedElements = function (e) {
function t(e, t) {
return $(t).index() - $(e).index()
}
e || (e = 'g');
var n = '';
switch (e) {
case 'a':
n = 'Make hyperlink';
var r = '';
arguments.length > 1 && (r = arguments[1]);
break;
default:
e = 'g',
n = 'Group Elements'
}
var i = new svgedit.history.BatchCommand(n),
a = T({
element: e
});
'a' === e && R(a, r);
var o = C.length;
for (C.sort(t); o--; ) {
var s = C[o];
null != s && ('a' === s.parentNode.tagName && 1 === s.parentNode.childNodes.length && (s = s.parentNode), s.nextSibling, s.parentNode, a.appendChild(s))
}
rt(i),
Ut([a], !0, !0),
Mt('selected', [
a
])
};
var un = this.pushGroupProperties = function (e, t) {
for (var n, r, i = e.childNodes, a = i.length, o = e.getAttribute('transform'), s = svgedit.transformlist.getTransformList(e), l = svgedit.math.transformListToTransform(s).matrix, c = new Z('Push group properties'), u = 0, d = svgedit.utilities.getRotationAngle(e), h = $(e).attr(['filter',
'opacity']), u = 0; a > u; u++) {
var g = i[u];
if (1 === g.nodeType) {
if (null !== h.opacity && 1 !== h.opacity) {
g.getAttribute('opacity') || 1;
var v = Math.round(100 * (g.getAttribute('opacity') || 1) * h.opacity) / 100;
cn('opacity', v, [
g
])
}
if (h.filter) {
var m = this.getBlur(g),
y = m;
r || (r = this.getBlur(e)),
m ? m = r - 0 + (m - 0)  : 0 === m && (m = r),
y ? n = svgedit.utilities.getRefElem(g.getAttribute('filter'))  : n ? (n = Dt(n), svgedit.utilities.findDefs().appendChild(n))  : n = svgedit.utilities.getRefElem(h.filter);
var b = 'feGaussianBlur' === n.firstChild.tagName ? 'blur' : 'filter';
n.id = g.id + '_' + b,
cn('filter', 'url(#' + n.id + ')', [
g
]),
m && (cn('stdDeviation', m, [
n.firstChild
]), f.setBlurOffsets(n, m))
}
var x = svgedit.transformlist.getTransformList(g);
if (~g.tagName.indexOf('Gradient') && (x = null), x && 'defs' !== g.tagName && s.numberOfItems) {
if (d && 1 == s.numberOfItems) {
var w = s.getItem(0).matrix,
k = p.createSVGMatrix(),
S = svgedit.utilities.getRotationAngle(g);
S && (k = x.getItem(0).matrix);
var _ = svgedit.utilities.getBBox(g),
E = svgedit.math.transformListToTransform(x).matrix,
A = svgedit.math.transformPoint(_.x + _.width / 2, _.y + _.height / 2, E),
C = d + S,
T = p.createSVGTransform();
T.setRotate(C, A.x, A.y);
var N = svgedit.math.matrixMultiply(w, k, T.matrix.inverse());
if (S && x.removeItem(0), C && (x.numberOfItems ? x.insertItemBefore(T, 0)  : x.appendItem(T)), N.e || N.f) {
var M = p.createSVGTransform();
M.setTranslate(N.e, N.f),
x.numberOfItems ? x.insertItemBefore(M, 0)  : x.appendItem(M)
}
} else {
var L = g.getAttribute('transform'),
G = {
};
G.transform = L ? L : '';
var I = p.createSVGTransform(),
O = svgedit.math.transformListToTransform(x).matrix,
P = O.inverse(),
j = svgedit.math.matrixMultiply(P, l, O);
I.setMatrix(j),
x.appendItem(I)
}
var D = svgedit.recalculate.recalculateDimensions(g);
D && c.addSubCommand(D)
}
}
}
if (o) {
var G = {
};
G.transform = o,
e.setAttribute('transform', ''),
e.removeAttribute('transform'),
c.addSubCommand(new tt(e, G))
}
return t && !c.isEmpty() ? c : void 0
};
this.ungroupSelectedElement = function () {
var e = C[0];
if ($(e).data('gsvg') || $(e).data('symbol')) return nn(e),
void 0;
if ('use' === e.tagName) {
var t = svgedit.utilities.getElem(V(e).substr(1));
return $(e).data('symbol', t).data('ref', t),
nn(e),
void 0
}
var n = $(e).parents('a');
if (n.length && (e = n[0]), 'g' === e.tagName || 'a' === e.tagName) {
var r = new Z('Ungroup Elements'),
i = un(e, !0);
i && r.addSubCommand(i);
for (var a = e.parentNode, o = e.nextSibling, s = Array(e.childNodes.length), l = 0; e.firstChild; ) {
var c = e.firstChild,
u = c.nextSibling,
d = c.parentNode;
if ('title' !== c.tagName) s[l++] = c = a.insertBefore(c, o),
r.addSubCommand(new Q(c, u, d));
 else {
var f = c.nextSibling;
r.addSubCommand(new et(c, f, d)),
d.removeChild(c)
}
}
zt();
var h = e.nextSibling;
e = a.removeChild(e),
r.addSubCommand(new et(e, h, a)),
r.isEmpty() || rt(r),
qt(s)
}
Mt('selected', s)
},
this.moveToTopSelectedElement = function () {
function e(e, t) {
return $(t).index() - $(e).index()
}
C = getSelectedElems(),
C.sort(e);
for (var t in C) {
var n = C[t],
r = n,
i = r.parentNode,
a = r.nextSibling;
r = r.parentNode.appendChild(r),
a != r.nextSibling && (rt(new Q(r, a, i, 'top')), Mt('changed', [
r
]))
}
},
this.moveToBottomSelectedElement = function () {
function e(e, t) {
return $(t).index() - $(e).index()
}
C = getSelectedElems(),
C.sort(e);
for (var t in C) {
var n = C[t],
r = n,
i = r.parentNode,
a = r.nextSibling,
o = r.parentNode.firstChild;
'title' == o.tagName && (o = o.nextSibling),
'defs' == o.tagName && (o = o.nextSibling),
r = r.parentNode.insertBefore(r, o),
a != r.nextSibling && (rt(new Q(r, a, i, 'bottom')), Mt('changed', [
r
]))
}
},
this.moveUpDownSelected = function (e) {
function t(t, n) {
return 'Down' == e ? $(t).index() - $(n).index()  : $(n).index() - $(t).index()
}
C = getSelectedElems(),
C.sort(t),
C.forEach(function (t) {
if ('Down' === e) {
if (t.parentElement === document.querySelector('#svgcontent') && 'g' !== t.previousSibling.nodeName) return;
'title' !== $(t).prev() [0].nodeName && 'backgroundrect' !== $(t).prev() [0].id && $(t).prev().before($(t))
} else $(t).next().after($(t))
}),
rt()
},
this.moveSelectedElements = function (e, t, n) {
e.constructor != Array && (e /= k, t /= k),
n = n || !0;
for (var r = new Z('position'), i = C.length; i--; ) {
var a = C[i];
if (null != a) {
var o = p.createSVGTransform(),
s = svgedit.transformlist.getTransformList(a);
e.constructor == Array ? o.setTranslate(e[i], t[i])  : o.setTranslate(e, t),
s.numberOfItems ? s.insertItemBefore(o, 0)  : s.appendItem(o);
var l = svgedit.recalculate.recalculateDimensions(a);
l && r.addSubCommand(l),
it.requestSelector(a).resize()
}
}
return r.isEmpty() ? void 0 : (n && rt(r), Mt('changed', C), r)
},
this.newPickerCallback = function (e) {
pickerCallback = e
},
this.cloneSelectedElements = function (e, t) {
function n(e, t) {
return $(t).index() - $(e).index()
}
var r = new Z('Clone Elements'),
i = C.length;
C.sort(n);
for (var a = 0; i > a; ++a) {
var o = C[a];
if (null == o) break
}
var s = C[C.length - 1];
s && (s = s.nextSibling);
for (var l = C.slice(0, a), a = l.length; a--; ) {
var o = l[a] = Dt(l[a]);
(S || w().getCurrentLayer()).insertBefore(o, s),
r.addSubCommand(new J(o))
}
return this.clearSelection(!0),
It(l),
qt(l.reverse(), !0, !0),
this.moveSelectedElements(e, t, !1),
rt(r),
l
},
this.alignSelectedElements = function (e, t) {
var n = [
],
r = Number.MAX_VALUE,
i = Number.MIN_VALUE,
a = Number.MAX_VALUE,
o = Number.MIN_VALUE,
s = Number.MIN_VALUE,
l = Number.MIN_VALUE;
C = getSelectedElems();
var c = C.length;
if (c) {
for (var u = 0; c > u && null != C[u]; ++u) {
var d = C[u];
switch (n[u] = It([d]), t) {
case 'smallest':
(('l' == e || 'c' == e || 'r' == e) && (s == Number.MIN_VALUE || s > n[u].width) || ('t' == e || 'm' == e || 'b' == e) && (l == Number.MIN_VALUE || l > n[u].height)) && (r = n[u].x, a = n[u].y, i = n[u].x + n[u].width, o = n[u].y + n[u].height, s = n[u].width, l = n[u].height);
break;
case 'largest':
(('l' == e || 'c' == e || 'r' == e) && (s == Number.MIN_VALUE || n[u].width > s) || ('t' == e || 'm' == e || 'b' == e) && (l == Number.MIN_VALUE || n[u].height > l)) && (r = n[u].x, a = n[u].y, i = n[u].x + n[u].width, o = n[u].y + n[u].height, s = n[u].width, l = n[u].height);
break;
default:
r > n[u].x && (r = n[u].x),
a > n[u].y && (a = n[u].y),
n[u].x + n[u].width > i && (i = n[u].x + n[u].width),
n[u].y + n[u].height > o && (o = n[u].y + n[u].height)
}
}
if ('page' == t) r = 0,
a = 0,
i = f.contentW,
o = f.contentH;
 else if ('first' == t) {
var d = C[0];
n[u] = It([d]),
r = n[u].x,
a = n[u].y,
i = n[u].x + n[u].width,
o = n[u].y + n[u].height
}
for (var h = Array(c), p = Array(c), u = 0; c > u && null != C[u]; ++u) {
var d = C[u],
g = n[u];
switch (h[u] = 0, p[u] = 0, e) {
case 'l':
h[u] = r - g.x;
break;
case 'c':
h[u] = (r + i) / 2 - (g.x + g.width / 2);
break;
case 'r':
h[u] = i - (g.x + g.width);
break;
case 't':
p[u] = a - g.y;
break;
case 'm':
p[u] = (a + o) / 2 - (g.y + g.height / 2);
break;
case 'b':
p[u] = o - (g.y + g.height)
}
}
this.moveSelectedElements(h, p)
}
},
this.contentW = an().w,
this.contentH = an().h,
this.updateCanvas = function (e, t) {
p.setAttribute('width', e),
p.setAttribute('height', t);
var n = $('#canvasBackground') [0],
r = v.getAttribute('x'),
i = v.getAttribute('y'),
a = e / 2 - this.contentW * k / 2,
o = t / 2 - this.contentH * k / 2;
svgedit.utilities.assignAttributes(v, {
width: this.contentW,
height: this.contentH
}),
svgedit.utilities.assignAttributes(n, {
width: this.contentW,
height: this.contentH
}),
n.removeAttribute('x'),
n.removeAttribute('y'),
v.removeAttribute('x'),
v.removeAttribute('y'),
v.removeAttribute('viewBox'),
g.setAttribute('transform', 'translate(' + a + ' ' + o + ')' + ' scale(' + k + ')'),
svgedit.utilities.assignAttributes(n, {
width: v.getAttribute('width') * k,
height: v.getAttribute('height') * k
});
var s = document.getElementById('canvas-background-view');
return s.setAttribute('transform', 'translate(' + a + ' ' + o + ')'),
it.selectorParentGroup.setAttribute('transform', 'translate(' + a + ',' + o + ')'),
{
x: a,
y: o,
old_x: r,
old_y: i,
d_x: a - r,
d_y: o - i
}
},
this.setSnapping = function (e) {
u.gridSnapping = e
},
this.setGridStep = function (e) {
u.stepSize = e
},
this.isSnapping = function () {
return u.gridSnapping
},
this.cycleElement = function (e) {
var t = C[0],
n = !1,
r = Ot(S || w().getCurrentLayer());
if (r.length) {
if (null == t) {
var i = e ? r.length - 1 : 0;
n = r[i]
} else for (var a = r.length; a--; ) if (r[a] == t) {
var i = e ? a - 1 : a + 1;
i >= r.length ? i = 0 : 0 > i && (i = r.length - 1),
n = r[i];
break
}
Ut([n], !0),
Mt('selected', C)
}
},
this.clear(),
this.getPrivateMethods = function () {
var e = {
addCommandToHistory: rt,
setGradient: on,
addSvgElementFromJson: T,
assignAttributes: U,
BatchCommand: Z,
call: Mt,
ChangeElementCommand: tt,
copyElem: Dt,
ffClone: Bt,
findDefs: D,
findDuplicateGradient: sn,
getElem: q,
getId: Tt,
getIntersectionList: Gt,
getMouseTarget: Xt,
getNextId: Nt,
getPathBBox: F,
getUrlFromAttr: B,
hasMatrixTransform: G,
identifyLayers: rn,
InsertElementCommand: J,
isIdentity: svgedit.math.isIdentity,
logMatrix: Rt,
matrixMultiply: L,
MoveElementCommand: Q,
preventClickDefault: Wt,
recalculateAllSelectedDimensions: $t,
recalculateDimensions: Y,
remapElement: X,
RemoveElementCommand: et,
removeUnusedDefElems: Qt,
round: Lt,
runExtensions: Ct,
sanitizeSvg: K,
SVGEditTransformList: svgedit.transformlist.SVGTransformList,
toString: toString,
transformBox: svgedit.math.transformBox,
transformListToTransform: I,
transformPoint: M,
walkTree: svgedit.utilities.walkTree
};
return e
}
},
function () {
'use strict';
window.svgEditor || (window.svgEditor = function (e) {
function t(t, r) {
var i = n.setSvgString(t) !== !1;
r = r || e.noop,
i ? r(!0)  : (global.alert(c.notification.errorLoadingSVG), r(!1))
}
var n,
r = {
},
i = !1,
a = [
],
o = {
lang: 'en',
iconsize: 'm',
bkgd_color: 'none',
bkgd_url: '',
img_save: 'embed'
},
s = {
},
l = {
canvas_expansion: 1.8,
dimensions: [
777,
480
],
initFill: {
color: '4a90d6',
opacity: 1
},
initStroke: {
width: 4,
color: '222222',
opacity: 1
},
initOpacity: 1,
imgPath: 'images/',
langPath: 'locale/',
extPath: 'extensions/',
jGraduatePath: 'jgraduate/images/',
extensions: [
],
initTool: 'fhpath',
wireframe: !1,
colorPickerCSS: null,
gridSnapping: !1,
gridColor: '#000',
baseUnit: 'px',
snappingStep: 10,
showRulers: !1,
selectNew: !1
},
c = r.uiStrings = {
common: {
ok: 'OK',
cancel: 'Cancel',
key_up: 'Up',
key_down: 'Down',
key_backspace: 'Backspace',
key_del: 'Del'
},
layers: {
layer: 'Layer'
},
notification: {
invalidAttrValGiven: 'Invalid value given',
noContentToFitTo: 'No content to fit to',
dupeLayerName: 'There is already a layer named that!',
enterUniqueLayerName: 'Please enter a unique layer name',
enterNewLayerName: 'Please enter the new layer name',
layerHasThatName: 'Layer already has that name',
QmoveElemsToLayer: 'Move selected elements to layer "%s"?',
QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
QignoreSourceChanges: 'Ignore changes made to SVG source?',
featNotSupported: 'Feature not supported',
enterNewImgURL: 'Enter the new image URL',
defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
loadingImage: 'Loading image, please wait...',
saveFromBrowser: 'Select "Save As..." in your browser to save this image as a %s file.',
noteTheseIssues: 'Also note the following issues: ',
unsavedChanges: 'There are unsaved changes.',
enterNewLinkURL: 'Enter the new hyperlink URL',
errorLoadingSVG: 'Error: Unable to load SVG data',
URLloadFail: 'Unable to load from URL',
retrieving: 'Retrieving "%s" ...'
}
},
s = {
},
u = {
};
return r.curConfig = l,
r.tool_scale = 1,
e.pref = function (e, t) {
t && (s[e] = t),
e = 'svg-edit-' + e;
var n = location.hostname,
r = n && n.indexOf('.') >= 0,
i = void 0 !== t,
a = !1;
try {
window.localStorage && (a = localStorage)
} catch (o) {
}
try {
window.globalStorage && r && (a = globalStorage[n])
} catch (o) {
}
if (a) {
if (i) a.setItem(e, t);
 else if (a.getItem(e)) return a.getItem(e) + ''
} else if (window.widget) {
if (!i) return widget.preferenceForKey(e);
widget.setPreferenceForKey(t, e)
} else {
if (!i) {
var l = document.cookie.match(RegExp(e + '=([^;]+)'));
return l ? decodeURIComponent(l[1])  : ''
}
var c = new Date;
c.setTime(c.getTime() + 31536000000),
t = encodeURIComponent(t),
document.cookie = e + '=' + t + '; expires=' + c.toUTCString()
}
},
r.setConfig = function (t) {
e.each(t, function (t, n) {
t in o && e.pref(t, n)
}),
e.extend(!0, l, t),
t.extensions && (l.extensions = t.extensions)
},
r.setCustomHandlers = function (e) {
r.ready(function () {
e.open && (n.open = e.open),
e.save && (r.show_save_warning = !1, n.bind('saved', e.save)),
e.pngsave && n.bind('exported', e.pngsave),
u = e
})
},
r.randomizeIds = function () {
n.randomizeIds(arguments)
},
r.init = function () {
function i(t) {
var r = document.querySelector('#svgroot').suspendRedraw(1000),
i = t.delegateTarget.getAttribute('data-attr');
i.split(' ').forEach(function (t) {
n.getSelectedElems().forEach(function (n) {
- 1 !== _.union(elementAtrributes[n.nodeName.toLowerCase()], elementAtrributes.all).indexOf(t) && e(n).removeAttr(t)
})
}),
V.fill.update(!0),
V.stroke.update(!0),
document.querySelector('#svgroot').unsuspendRedraw(r),
nn(),
n.undoMgr.addCommandToHistory(null)
}
function a(t) {
e(t).find('pattern').toArray().forEach(function (t) {
e('#patterns').append('<option value="url(#' + t.id + ')">' + (t.getAttribute('inkscape:stockid') || t.id) + '</option>'),
ht['#' + t.id] = t
}),
e('div[data-attr]').click(d)
}
function o(e) {
var t = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="46" height="46">',
n = '</svg>';
return t + e + n
}
function u(t, n) {
var r = e(o(n));
return e(t).append(r),
r.children().unwrap()
}
function d(e) {
var t = e.delegateTarget.value,
n = e.delegateTarget.getAttribute('data-attr').split(' '),
r = e.delegateTarget.querySelector('svg [' + n[0] + ']');
h(t, n, r)
}
function f(t, n) {
var r = - 1 !== attributesWithUrls.indexOf(t);
if (r) {
var i = svgedit.utilities.getUrlFromAttr(n);
if (i && ht[i]) {
document.querySelector('#svgcontent defs') || u(document.querySelector('#svgcontent'), '<defs></defs>');
var a = e(ht[i]).clone();
- 1 !== t.indexOf('marker') && (e(a).children().css('fill', document.querySelector('input[data-attr="stroke"]').value), e(a).children().css('stroke', document.querySelector('input[data-attr="stroke"]').value), e(a).children().css('stroke-dasharray', 'none')),
document.querySelector('#svgcontent defs ' + i) || (e('#svgcontent defs').append(a), domUntils.removeUnusedDefs(e('#svgcontent') [0]))
}
}
return r
}
function h(t, r, i) {
var a = document.querySelector('#svgroot').suspendRedraw(1000),
o = n.getSelectedElems();
0 === o.length && r.forEach(function (e) {
'width' === e ? n.setResolution(inputElement.value, null)  : 'height' === e ? n.setResolution(null, inputElement.value)  : 'id' === e && n.setDocumentTitle(inputElement.value)
}),
r.forEach(function (r) {
i && (t = e(i).attr(r)),
o.forEach(function (i) {
e(i).find('*').andSelf().each(function (i, a) {
('stroke' === r || 'fill' === r) && 'foreignObject' === a.nodeName && e('[data-style="color"]').val(t).change(),
- 1 !== _.union(elementAtrributes[a.nodeName.toLowerCase()], elementAtrributes.all).indexOf(r) && (a.style[r] = '', e(a).attr(r, t), 'id' === r ? (n.clearSelection(), n.addToSelection([a], !0))  : ('stroke' === r || 'fill' === r) && (V.fill.update(!0), V.stroke.update(!0), nn()))
}),
- 1 !== attributesWithUrls.indexOf(r) ? f(r, t)  : 'font-family' === r && pt[t] && !pt[t].loaded && updateFonts()
}),
$$('input[data-attr~="' + r + '"], select[data-attr~="' + r + '"]').toArray().forEach(function (e) {
e.value !== t && (e.value = t)
})
}),
document.querySelector('#svgroot').unsuspendRedraw(a),
nn(),
o.length && n.undoMgr.addCommandToHistory(null)
}
function p() {
global.prompt(c.notification.enterNewImgURL, '', function (e) {
console.log('open ' + e),
e && r.loadSVGFromURL(e, function () {
})
})
}
function g() {
e('.layersel').removeClass('layersel');
var t = document.querySelectorAll('#svgcontent > g'),
n = t.length - 1 - Array.from(t).indexOf(document.querySelector('.currentLayer'));
Array.from(document.getElementsByClassName('layer')) [n].classList.add('layersel')
}
function v() {
n.deleteCurrentLayer() && (st(), an(), g())
}
function m() {
n.getCurrentDrawing().getCurrentLayerName() + ' copy';
for (var e = 2, t = n.getCurrentDrawing().getCurrentLayerName() + ' copy'; n.getCurrentDrawing().hasLayer(t); ) t = n.getCurrentDrawing().getCurrentLayerName() + ' copy' + e,
e += 1;
n.cloneLayer(t),
st(),
an()
}
function y() {
e('#layerlist tr.layersel').index() != n.getCurrentDrawing().getNumLayers() && (n.mergeLayer(), st(), an())
}
function b(t) {
var r = !0,
i = q;
0 > t ? i.parentNode.childNodes[i.parentNode.childNodes.length - 1] === i && (r = !1)  : 'g' !== i.previousSibling.nodeName && (r = !1);
var a = e('.currentLayer').index() - 2;
r && (a -= t, n.setCurrentLayerPosition(a), an())
}
function x() {
n.mergeAllLayers(),
st(),
an()
}
function w(t) {
n.renameCurrentLayer(t.delegateTarget.textContent),
an(),
e(t.delegateTarget).html(t.delegateTarget.textContent)
}
function k() {
var e = 2,
t = '';
do t = c.layers.layer + ' ' + e,
e += 1;
while (n.getCurrentDrawing().hasLayer(t));
n.createLayer(t),
st(),
an()
}
function S(e) {
e = Math.pow(e, ln),
e -= e % 5,
document.getElementById('zoom2').value = e,
changeZoom({
value: e
})
}
function E(e) {
document.getElementById('zoomSlider2').value = Math.pow(e, 1 / ln),
changeZoom({
value: e
})
}
function A(e) {
var t = parseInt(document.getElementById('zoom2').value, 10);
t + e > 0 && (t -= t % e, document.getElementById('zoomSlider2').value = Math.pow(t + e, 1 / ln), document.getElementById('zoom2').value = t + e, changeZoom({
value: t + e
}))
}
function C(t, r) {
r || (r = n.getZoom()),
t || (t = e('#svgcanvas'));
for (var i = 30000, a = n.getContentElem(), o = svgedit.units.getTypeMap(), s = o[l.baseUnit], c = ' ' + l.baseUnit, u = [
], d = 0.1; 100000 > d; d *= 10) u.push(1 * d),
u.push(2 * d),
u.push(5 * d);
for (var f = 0; 2 > f; f++) {
var h = 0 === f,
p = h ? 'x' : 'y',
g = h ? 'width' : 'height',
v = a.getAttribute(p) - 0;
v = 'x' === p ? a.getCTM().e : a.getCTM().f;
var m = e('#ruler_' + p + ' canvas:first'),
y = m.clone();
m.replaceWith(y);
var b = y[0],
x = t[g](),
w = x;
b.parentNode.style[g] = w + 'px';
var k,
S = 0,
_ = b.getContext('2d');
if (_.fillStyle = '#868686', _.fillRect(0, 0, b.width, b.height), y.siblings().remove(), x >= i) {
var E = parseInt(x / i, 10) + 1;
k = Array(E),
k[0] = _;
for (var d = 1; E > d; d++) {
b[g] = i;
var A = b.cloneNode(!0);
b.parentNode.appendChild(A),
k[d] = A.getContext('2d')
}
A[g] = x % i,
x = i
}
b[g] = x;
for (var C = s * r, T = 50 / C, N = 1, d = 0; u.length > d; d++) {
var E = u[d];
if (N = E, E >= T) break
}
var M = N * C;
_.font = '8px "lucida Sans Unicode","Myriad Pro",Tahoma,Arial,sans-serif',
_.fillStyle = '#414141';
for (var L = v / C % N * C, G = L - M, I = !1; w > L; L += M) {
G += M;
var O = Math.round(L) + 0.5;
h ? (_.moveTo(O, 9), _.lineTo(O, 0))  : (_.moveTo(16, O), _.lineTo(7, O));
var P,
E = (G - v) / C;
if (N >= 1) P = Math.round(E);
 else {
var j = (N + '').split('.') [1].length;
P = E.toFixed(j) - 0
}
0 !== P && 1000 !== P && 0 === P % 1000 && (P = P / 1000 + 'K');
var D = _.measureText(P),
B = D.width;
D.height,
!I && Math.round(E) >= 0 && (I = !0, P += c),
h ? _.fillText(P, L - B / 2, 14)  : (!I && Math.round(E) >= 0 && (I = !0, P = c + ' ' + P, D = _.measureText(c + ' '), B += 2 * D.width), _.save(), _.translate(0, L - B / 2), _.rotate(Math.PI / 2), _.fillText(P, 0, 0), _.restore());
for (var $ = M / 10, d = 1; 10 > d; d++) {
var V = Math.round(L + $ * d) + 0.5;
if (k && V > x) {
if (S++, _.stroke(), S >= k.length) {
d = 10,
L = w;
continue
}
_ = k[S],
L -= i,
V = Math.round(L + $ * d) + 0.5
}
var R = d % 2 ? 11 : 10,
R = d % 5 ? R : 8;
h ? (_.moveTo(V, 0), _.lineTo(V, 16 - R))  : (_.moveTo(15, V), _.lineTo(R, V))
}
}
_.strokeStyle = '#666',
_.stroke()
}
}(function () {
var e = window.opener;
if (e) try {
var t = e.document.createEvent('Event');
t.initEvent('svgEditorReady', !0, !0),
e.document.documentElement.dispatchEvent(t)
} catch (n) {
}
}) ();
var T = function () {
e.each(l.extensions, function () {
var t = this;
e.getScript(l.extPath + t, function (e) {
if (!e) {
var n = document.createElement('script');
n.src = l.extPath + t,
document.querySelector('head').appendChild(n)
}
})
});
var t = [
];
e('#lang_select option').each(function () {
t.push(this.value)
})
};
'file:' === document.location.protocol ? setTimeout(T, 100)  : T(),
r.canvas = n = new e.SvgCanvas(document.getElementById('svgcanvas'), l),
r.show_save_warning = !1;
var N = [
'#ffffff',
'#dadada',
'#b6b6b6',
'#919191',
'#6d6d6d',
'#484848',
'#242424',
'#000000',
'#ecabab',
'#e98a8a',
'#e76767',
'#e84141',
'#eb1a1a',
'#d50b0b',
'#b80404',
'#990000',
'#ececab',
'#e9e98a',
'#e7e767',
'#e8e841',
'#ebeb1a',
'#d5d50b',
'#b8b804',
'#989900',
'#abecab',
'#8ae98a',
'#67e767',
'#41e841',
'#1aeb1a',
'#0bd50b',
'#04b804',
'#009900',
'#abecec',
'#8ae9e9',
'#67e7e7',
'#41e8e8',
'#1aebeb',
'#0bd5d5',
'#04b8b8',
'#009899',
'#ababec',
'#8a8ae9',
'#6767e7',
'#4141e8',
'#1a1aeb',
'#0b0bd5',
'#0404b8',
'#000099',
'#ecabec',
'#e98ae9',
'#e767e7',
'#e841e8',
'#eb1aeb',
'#d50bd5',
'#b804b8',
'#990098'
],
M = [
'#ffffff',
'#dadada',
'#b6b6b6',
'#919191',
'#6d6d6d',
'#484848',
'#242424',
'#000000',
'#ecabab',
'#e98a8a',
'#e76767',
'#e84141',
'#eb1a1a',
'#d50b0b',
'#b80404',
'#990000',
'#ececab',
'#e9e98a',
'#e7e767',
'#e8e841',
'#ebeb1a',
'#d5d50b',
'#b8b804',
'#989900',
'#abecab',
'#8ae98a',
'#67e767',
'#41e841',
'#1aeb1a',
'#0bd50b',
'#04b804',
'#009900',
'#ababec',
'#8a8ae9',
'#6767e7',
'#4141e8',
'#1a1aeb',
'#0b0bd5',
'#0404b8',
'#000099'
],
L = navigator.platform.indexOf('Mac') >= 0,
G = (navigator.userAgent.indexOf('AppleWebKit') >= 0, L ? 'meta+' : 'ctrl+'),
I = n.pathActions,
O = n.undoMgr,
P = (svgedit.utilities, l.imgPath + 'logo.png'),
j = e('#workarea'),
D = 'crosshair',
B = 'crosshair',
$ = 'toolbars',
V = {
fill: null,
stroke: null
},
R = function () {
var t = e('.tool_button_current');
t.length && 'tool_select' !== t[0].id && (t.removeClass('tool_button_current').addClass('tool_button'), e('#tool_select').addClass('tool_button_current').removeClass('tool_button')),
n.setMode('select'),
j.css('cursor', 'auto')
},
F = function (e, t) {
e && (U = !1, t.length && (q = t[0]))
},
z = !1,
q = null,
U = !1,
H = !1,
X = !1,
Y = '';
e('title:first').text();
var W = [
],
K = function () {
var t = n.getSelectedElems();
if (document.querySelector('body').setAttribute('data-select_count', t.length), 1 === t.length && t[0] === document.querySelector('#backgroundrect') && document.querySelector('body').setAttribute('data-select_count', 0), e(document.body).attr('data-selectedNodes', t.map(function (e) {
return e.nodeName
}).join(' ')), !_.isEqual(t, W)) {
e('.bottom_canvas, .right_canvas, .rightlow_canvas').hide();
var r = document.querySelector('.showResizingTools');
r && r.classList.remove('showResizingTools'),
W = t,
document.body.classList.contains('debug');
var i = n.getMode();
'select' === i && R();
var a = 'pathedit' == i;
q = 1 === t.length || null === t[1] ? t[0] : null,
U = t.length >= 2 && null !== t[1],
F(a, t),
n.runExtensions('selectedChanged', {
elems: t,
selectedElement: q,
multiselected: U
}),
load_object_properties(n),
$$('[data-elementcontext]').hide(),
n.getSelectedElems().forEach(function (e) {
$$('[data-elementcontext~=' + e.nodeName.toLowerCase() + ']').show()
}),
V.fill.update(!0),
V.stroke.update(!0),
nn(),
st(),
nn()
}
};
e('input[data-attr="fill"]').change(function (e) {
if ( - 1 !== e.delegateTarget.value.indexOf('url')) {
var t = svgedit.utilities.getUrlFromAttr(e.delegateTarget.value),
n = document.querySelector(t);
if (n) switch (n.nodeName) {
case 'linearGradient':
case 'radialGradient':
V.fill.update(!0),
console.log(n.nodeName)
}
}
}), e('input[data-attr="stroke"]').change(function (e) {
if ( - 1 !== e.delegateTarget.value.indexOf('url')) {
var t = svgedit.utilities.getUrlFromAttr(e.delegateTarget.value),
n = document.querySelector(t);
if (n) switch (n.nodeName) {
case 'pattern':
break;
case 'linearGradient':
case 'radialGradient':
V.stroke.update(!0),
console.log(n.nodeName)
}
}
}); var Z = function (t) {
if (t.length) {
var r = wrapSVG(t).getBbox();
r && (e('#xpos-input').val(r.x), e('#ypos-input').val(r.y), 'backgroundrect' === t[0].id ? (document.getElementById('width-input').value = n.getResolution().w, document.getElementById('height-input').value = n.getResolution().h)  : (e('#width-input').val(r.width), e('#height-input').val(r.height)))
}
}; e('#xpos-input').change(function () {
var e = wrapSVG(n.getSelectedElems()),
t = e.getBbox();
e.dx(this.value - t.x)
}), e('#ypos-input').change(function () {
var e = wrapSVG(n.getSelectedElems()),
t = e.getBbox();
e.dy(this.value - t.y)
}), e('#width-input').change(function (e) {
if ('backgroundrect' === n.getSelectedElems() [0].id) n.setResolution(parseFloat(e.delegateTarget.value), null);
 else {
var t = wrapSVG(n.getSelectedElems()),
r = t.getBbox();
t.dWidth(this.value - r.width)
}
}), e('#height-input').change(function (e) {
if ('backgroundrect' === n.getSelectedElems() [0].id) n.setResolution(null, parseFloat(e.delegateTarget.value));
 else {
var t = wrapSVG(n.getSelectedElems()),
r = t.getBbox();
t.dHeight(this.value - r.height),
n.setResolution(parseFloat(e.delegateTarget.value), null)
}
}); var Q = function (e, t) {
Z(t);
var r = n.getMode();
'select' === r && R();
for (var i = 0; t.length > i; ++i) {
var a = t[i];
a && 'svg' === a.tagName ? (an(), fn())  : a && q && null === q.parentNode && (q = a)
}
n.runExtensions('elementChanged', {
elems: t
}),
load_object_properties(n),
st()
}; e('.zoom').click(function (e) {
J(window, e.delegateTarget.value)
}); var J = function (t, r, i) {
var a = 15,
o = (n.getResolution(), j);
e('#svgcanvas').position();
var s = n.setBBoxZoom(r, o.width() - a, o.height() - a);
if (s) {
var l = s.zoom,
c = s.bbox;
if (0.001 > l) return changeZoom({
value: 0.1
}),
t.updateGrid && t.updateGrid(),
void 0;
document.getElementById('zoom2').value = Math.round(100 * l),
document.getElementById('zoomSlider2').value = Math.pow(100 * l, 1 / ln),
i ? fn()  : fn(!1, {
x: c.x * l + c.width * l / 2,
y: c.y * l + c.height * l / 2
}),
'zoom' == n.getMode() && c.width && R(),
t.updateGrid && t.updateGrid()
}
}; e('#cur_context_panel').delegate('a', 'mouseup', function () {
var t = e(this);
return t.attr('data-root') ? n.leaveContext()  : n.setContext(t.text()),
n.clearSelection(),
!1
}); var et = {
}, tt = function (t) {
e.each(t, function (t, n) {
var r = e(t).children(),
i = t + '_show',
a = e(i),
o = !1;
r.addClass('tool_button').each(function (e) {
var t = n[e];
et[t.sel] = t.fn,
t.isDefault && (o = e)
}),
o ? a.attr('data-curopt', n[o].sel)  : a.attr('data-curopt') || a.attr('data-curopt', n[0].sel);
var s,
l = e(i).position();
a.mousedown(function (n) {
var r = e(t),
i = l.left + 34,
o = - 1 * r.width();
r.data('shown_popop') ? 200 : 0,
a.data('isLibrary') ? r.css('left', i).show()  : r.css('left', o).show().animate({
left: i
}, 30),
r.data('shown_popop', !0),
n.preventDefault()
}).mouseup(function () {
clearTimeout(s);
var t = e(this).attr('data-curopt');
return a.data('isLibrary') && e(i.replace('_show', '')).is(':visible') ? (vt(i, !0), void 0)  : (vt(i) && t in et && et[t](), void 0)
})
}),
rt()
}, nt = function (t, n) {
var r = e('<div>', {
'class': 'tools_flyout',
id: t
}).appendTo('#svg_editor').append(n);
return r
}, rt = function () {
e('.tools_flyout').each(function () {
var t = e('#' + this.id + '_show');
if (!t.data('isLibrary')) {
var n = [
];
e(this).children().each(function () {
n.push(this.title)
})
}
})
}, it = function (t, n) {
var r = !1,
i = !0,
a = function () {
n.callback && !r && i && (r = !0, n.callback())
},
o = [
];
if (n.context_tools && e.each(n.context_tools, function (t, n) {
var r = n.container_id ? ' id="' + n.container_id + '"' : '',
i = e('#' + n.panel);
i.length || (i = e('<div>', {
id: n.panel
}).appendTo('.sideBar'));
var a;
switch (n.type) {
case 'tool_button':
a = '<div class="tool_button">' + n.id + '</div>';
var s = e(a).appendTo(i);
n.events && e.each(n.events, function (t, n) {
e(s).bind(t, n)
});
break;
case 'select':
a = '<label' + r + '>' + '<select id="' + n.id + '">',
e.each(n.options, function (e, t) {
var r = e == n.defval ? ' selected' : '';
a += '<option value="' + e + '"' + r + '>' + t + '</option>'
}),
a += '</select></label>';
var l = e(a).appendTo(i).find('select');
e.each(n.events, function (t, n) {
e(l).bind(t, n)
});
break;
case 'button-select':
a = '<div id="' + n.id + '" class="dropdown toolset" title="' + n.title + '">' + '<div id="cur_' + n.id + '" class="icon_label"></div><button></button></div>';
var c = e('<ul id="' + n.id + '_opts"></ul>').appendTo('#option_lists');
n.colnum && c.addClass('optcols' + n.colnum),
e(a).appendTo(i).children(),
o.push({
elem: '#' + n.id,
list: '#' + n.id + '_opts',
title: n.title,
callback: n.events.change,
cur: '#cur_' + n.id
});
break;
case 'input':
a = '<label' + r + '>' + '<span id="' + n.id + '_label">' + n.label + ':</span>' + '<input id="' + n.id + '" title="' + n.title + '" size="' + (n.size || '4') + '" value="' + (n.defval || '') + '" type="text"/></label>';
var u = e(a).appendTo(i).find('input');
n.spindata && u.SpinButton(n.spindata),
n.events && e.each(n.events, function (e, t) {
u.bind(e, t)
});
break;
default:
}
}), n.buttons) {
var s = {
},
l = {
},
c = n.svgicons,
u = {
};
e.each(n.buttons, function (t, n) {
for (var r, i = n.id, a = t; e('#' + i).length; ) i = n.id + '_' + ++a;
if (c) {
s[i] = n.icon;
var o = n.svgicon ? n.svgicon : n.id;
'app_menu' == n.type ? l['#' + i + ' > div'] = o : l['#' + i] = o
} else r = e('<img src="' + n.icon + '">');
var d,
f;
switch (n.type) {
case 'mode_flyout':
case 'mode':
d = 'tool_button',
f = '.tools';
break;
case 'context':
d = 'tool_button',
f = '#' + n.panel,
e(f).length || e('<button>', {
id: n.panel
}).appendTo('.sideBar');
break;
case 'app_menu':
d = '',
f = '#main_menu ul'
}
var h = e(n.list || 'app_menu' == n.type ? '<li/>' : '<button/>').attr('id', i).attr('title', n.title).addClass(d);
if (n.includeWith || n.list) {
if (n.list) {
if (h.addClass('push_button'), e('#' + n.list + '_opts').append(h), n.isDefault) {
e('#cur_' + n.list).append(h.children().clone());
var o = n.svgicon ? n.svgicon : n.id;
l['#cur_' + n.list] = o
}
} else if (n.includeWith) {
var p = n.includeWith,
g = e(p.button),
v = g.parent();
if (!g.parent().hasClass('tools_flyout')) {
var m = g[0].id.replace('tool_', 'tools_'),
y = g.clone().attr('id', m + '_show').append(e('<div>', {
'class': 'flyout_arrow_horiz'
}));
g.before(y),
v = nt(m, g)
}
var b = sn.getButtonData(p.button);
p.isDefault && (l['#' + m + '_show'] = n.id);
var x = u['#' + v[0].id] = [
{
sel: '#' + i,
fn: n.events.click,
icon: n.id,
key: n.key,
isDefault: n.includeWith ? n.includeWith.isDefault : 0
},
b
],
w = 'position' in p ? p.position : 'last',
k = v.children().length;
!isNaN(w) && w >= 0 && k > w ? v.children().eq(w).before(h)  : (v.append(h), x.reverse())
}
} else if ('position' in n ? e(f).children().eq(n.position).before(h)  : h.appendTo(f), 'mode_flyout' == n.type) {
var g = e(h),
v = g.parent();
if (!g.parent().hasClass('tools_flyout')) {
var m = g[0].id.replace('tool_', 'tools_'),
y = g.clone().attr('id', m + '_show').append(e('<div>', {
'class': 'flyout_arrow_horiz'
}));
g.before(y),
v = nt(m, g),
v.data('isLibrary', !0),
y.data('isLibrary', !0)
}
var x = u['#' + v[0].id] = [
{
sel: '#' + i,
fn: n.events.click,
icon: n.id,
isDefault: !0
},
b
]
} else 'app_menu' == n.type && h.append('<div>').append(n.title);
c || h.append(r),
n.list || e.each(n.events, function (t, r) {
'click' == t ? 'mode' == n.type ? (n.includeWith ? h.bind(t, r)  : h.bind(t, function () {
vt(h) && r()
}), n.key && (e(document).bind('keydown', n.key, r), n.title && h.attr('title', n.title + ' [' + n.key + ']')))  : h.bind(t, r)  : h.bind(t, r)
}),
tt(u)
}), e.each(o, function () {
mt(this.elem, this.list, this.callback, {
seticon: !0
})
})
}
a()
}, at = function (t, r, i) {
var a = null;
if (0 === t.indexOf('url(#')) {
var o = n.getRefElem(t);
o = o ? o.cloneNode(!0)  : e('#' + i + '_color defs *') [0],
a = {
alpha: r
},
a[o.tagName] = o
} else a = 0 === t.indexOf('#') ? {
alpha: r,
solidColor: t.substr(1)
}
 : {
alpha: r,
solidColor: 'none'
};
return new e.jGraduate.Paint(a)
}, ot = r.setImageURL = function (t) {
t || (t = P),
n.setImageURL(t),
e('#image_url').val(t),
0 === t.indexOf('data:') ? e('#image_url').hide()  : (n.embedImage(t, function (n) {
n ? e('#url_notice').hide()  : e('#url_notice').show(),
P = t
}), e('#image_url').show())
}, st = function () {
var t = q;
null == t || t.parentNode || (t = null);
var r = n.getCurrentDrawing().getCurrentLayerName(),
i = n.getMode(),
a = 'pathedit' == i;
if (e('#cmenu_canvas li'), e('#tool_reorient').attr('disabled', 'disabled'), null != t) {
var o = t.nodeName;
e('.filter').each(function () {
this.value = n.getFilterVale(t, this.getAttribute('data-filterName'), this.getAttribute('data-filterProperty'))
}),
a || 'pathedit' == i || ( - 1 == ['image',
'text',
'path',
'g',
'use'].indexOf(o), 0 !== n.getRotationAngle(t) && 'path' === o && e('#tool_reorient').removeAttr('disabled'), e('.editMode').removeAttr('disabled'), e('#tool_add_subpath, #tool_node_link, #tool_openclose_path, #seg_type, #seg_continuation').attr('disabled', 'disabled'))
}
if (a && 'pathedit' === i) {
e('#tool_add_subpath, #tool_node_link, #tool_openclose_path, #seg_type, #seg_continuation').removeAttr('disabled');
var s = I.getNodePoint();
if (e('#tool_add_subpath').removeClass('push_button_pressed').addClass('tool_button'), I.canDeleteNodes ? e('.delete').removeAttr('disabled')  : e('.delete').attr('disabled', 'disabled'), e('[data-elementcontext~="path"]').show(), e('#tool_reorient, .editMode').attr('disabled', 'disabled'), s) {
var l = e('#seg_type');
e('[data-attr~=\'x\']').val(s.x),
e('[data-attr~=\'x\']').show(),
e('[data-attr~=\'y\']').val(s.y),
e('[data-attr~=\'y\']').show(),
s.type ? l.val(s.type).removeAttr('disabled')  : l.val(4).attr('disabled', 'disabled')
}
}
n.addedNew = !1,
t && !a || U ? e('#selLayerNames').removeAttr('disabled').val(r)  : e('#selLayerNames').attr('disabled', 'disabled')
}; e('#text').focus(function () {
z = !0
}), e('#text').blur(function () {
z = !1
}), n.bind('selected', K), n.bind('changed', Q), n.bind('zoomed', J), n.bind('extension_added', it), e.each(N, function (e, t) {
var n = document.querySelector('#palette-fill-template');
n.content.querySelector('.palette_item').title = t,
n.content.querySelector('circle').setAttribute('fill', t),
document.querySelector('.fill_palette').appendChild(n.content.cloneNode(!0))
}); var lt = ''; e.each(M, function (e, t) {
lt += '<div class="palette_item" data-attr="stroke stroke-opacity" data-style="color" title="' + t + '"> <svg  width="100%" height="100%"><circle cx="50%" cy="50%" r="41%" fill="none" stroke-width="2px" stroke-opacity="1" stroke="' + t + '" /></svg></div>'
}), e('.stroke_palette').append(lt); var ct = [
'#FFF',
'#888',
'#000'
]; lt = '', e.each(ct, function () {
lt += '<div class="color_block" style="background-color:' + this + ';"></div>'
}), e('#bg_blocks').append(lt); var ut = e('#bg_blocks div'), dt = 'cur_background'; ut.each(function () {
var t = e(this);
t.click(function () {
ut.removeClass(dt),
e(this).addClass(dt)
})
}), e.pref('img_save') && (s.img_save = e.pref('img_save'), e('#image_save_opts input').val([s.img_save])), window.changeZoom = function (e) {
if (!n.isUserDrawing()) {
var t = e.value / 100;
if (0.001 > t) return e.value = 0.1,
void 0;
var r = n.getZoom(),
i = j;
J(window, {
width: 0,
height: 0,
x: (i[0].scrollLeft + i.width() / 2) / r,
y: (i[0].scrollTop + i.height() / 2) / r,
zoom: t
}, !0)
}
}, r.changeZoom = function (e) {
changeZoom({
value: e
})
}; var ft = !1; e('#selLayerNames').change(function () {
var e = this.options[this.selectedIndex].value,
t = c.notification.QmoveElemsToLayer.replace('%s', e),
r = function (t) {
t && (ft = !0, n.moveSelectedToLayer(e), n.clearSelection(), an())
};
e && (ft ? r(!0)  : global.confirm(t, r))
}), e('#seg_type').change(function () {
n.setSegType(e(this).val())
}), e('.clearselection').click(n.clearSelection), jQuery(document).bind('keydown', 'esc', n.clearSelection), e('[data-attr-rm]').click(function (t) {
var r = document.querySelector('#svgroot').suspendRedraw(1000),
i = t.delegateTarget.getAttribute('data-attr-rm');
i.split(' ').forEach(function (t) {
n.getSelectedElems().forEach(function (n) {
- 1 !== _.union(elementAtrributes[n.nodeName.toLowerCase()], elementAtrributes.all).indexOf(t) && e(n).removeAttr(t)
})
}),
V.fill.update(!0),
V.stroke.update(!0),
document.querySelector('#svgroot').unsuspendRedraw(r),
nn(),
n.undoMgr.addCommandToHistory(null)
}), e('.changeCanvasSizeWidth').change(function (e) {
n.setResolution(parseFloat(e.delegateTarget.value), null)
}), e('.changeCanvasSizeHeight').change(function (e) {
n.setResolution(null, parseFloat(e.delegateTarget.value))
}); var ht = {
}; e.get('images/patterns2.svg', a), e.get('images/markers.svg', function (t) {
e(t).find('marker').toArray().forEach(function (t) {
e('.markers').append('<option value="url(#' + t.id + ')">' + t.getAttribute('inkscape:stockid') + '</option>'),
ht['#' + t.id] = t
})
}), e.get('images/filters.svg', function (t) {
var n = {
};
e(t).find('filter').toArray().forEach(function (e) {
n[e.getAttribute('inkscape:menu')] || (n[e.getAttribute('inkscape:menu')] = [
]),
n[e.getAttribute('inkscape:menu')].push(e),
ht['#' + e.id] = e
});
for (var r in n) {
var i = '<optgroup label="' + r + '">';
n[r].forEach(function (e) {
i += '<option value="url(#' + e.id + ')">' + e.getAttribute('inkscape:label') + '</option>'
}),
i += '</optgroup>',
e('#filters').append(i)
}
}); var pt = {
}; window.updateFonts = function () {
var t = e('#svgcontent [font-family]').toArray().map(function (e) {
return e.getAttribute('font-family')
}),
n = e('#svgcontent style').toArray().map(function (n) {
var r = RegExp('@import url(.*)'),
i = r.exec(n.textContent);
if (i && i.length > 1) {
i = i[1],
i = i.replace('(', ''),
i = i.replace(')', '');
var a = e.url(i).param('family');
return - 1 === t.indexOf(a) && e(n).remove(),
a
}
var o = RegExp('font-family.*\'([^\']*)\';').exec(n.textContent);
if (o && o.length > 1) {
var a = o[1];
- 1 === t.indexOf(a) && e(n).remove()
}
}),
r = t.filter(function (e) {
return pt[e] && !pt[e].loaded && getGoogleFont(e),
- 1 === n.indexOf(e)
});
r.forEach(function (t) {
if (pt[t] && !pt[t].loaded) {
var n = 'http://fonts.googleapis.com/css?family=' + t.replace(RegExp(' ', 'g'), '+');
e('#svgcontent, head').append('<style>@import url(' + n + ');</style>')
}
})
}; var gt = 'AIzaSyDC5zNkPFs70O0Jny75kNrdJ2wtb1dp1rQ'; window.chrome && window.chrome.fileSystem && (gt = 'AIzaSyBevBECAfhAPTkPYAQhwuRQ4d2efHMa57c'), e.getJSON('https://www.googleapis.com/webfonts/v1/webfonts?key=' + gt, function (t) {
console.log(t.responseJSON),
t.items.forEach(function (t) {
var n = e('<option value="' + t.family + '">' + t.family + ' (Google)</option>');
e('.advanced-text[data-attr="font-family"]').append(n),
pt[t.family] = t
})
}).error(function () {
console.log('\nFonts did not download. Please refresh this page.\n')
}), window.getGoogleFont = function (t) {
if (!pt[t].downloaded && (e('#svgcontent style').toArray().map(function (e) {
var t = RegExp('font-family.*\'([^\']*)\';').exec(e.textContent);
if (t && t.length > 1) {
var n = t[1];
pt[n].downloaded = !0
}
}), !pt[t].downloaded)) {
var n = 'http://fonts.googleapis.com/css?family=' + t.replace(RegExp(' ', 'g'), '+');
e.get(n, function (n) {
var r = n.match(/url\(([^\)]*)/) [1],
i = new XMLHttpRequest;
i.open('GET', r),
i.responseType = 'arraybuffer',
i.onload = function () {
if (200 == this.status) {
for (var r = new Uint8Array(this.response), i = r.length, a = Array(i); i--; ) a[i] = String.fromCharCode(r[i]);
var o = a.join(''),
s = window.btoa(o),
l = 'data:font/woff;base64,' + s;
n = n.replace(/url\(([^\)]*)\)/, 'url(' + l + ')'),
e('#svgcontent').append('<style>' + n + '</style>')
}
pt[t].downloaded = !0
},
i.send()
})
}
}, e('.pick-clip-path').click(function () {
var t = n.getSelectedElems();
n.newPickerCallback(function (r) {
if ( - 1 === t.indexOf(r)) {
var i = 'clipPath' + r.id,
a = e(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath'));
a.attr('id', i),
a.append(e(r).remove()),
ht['#' + i] = a[0],
console.log(a[0]),
n.addToSelection(t),
h('url(#' + i + ')', [
'clip-path'
]),
n.setMode('select')
}
}),
n.setMode('picker', !0)
}), e('.pick-mask').click(function () {
var t = n.getSelectedElems();
n.newPickerCallback(function (r) {
if ( - 1 === t.indexOf(r)) {
var i = 'mask' + r.id,
a = e(document.createElementNS('http://www.w3.org/2000/svg', 'mask'));
a.attr('id', i),
a.append(e(r).remove()),
ht['#' + i] = a[0],
console.log(a[0]),
n.addToSelection(t),
h('url(#' + i + ')', [
'mask'
]),
n.setMode('select')
}
}),
n.setMode('picker', !0)
}), e('[data-pick-attr], [data-pick-style]').click(function (t) {
var r = n.getSelectedElems(),
i = [
],
a = [
];
t.delegateTarget.hasAttribute('data-pick-attr') && (i = t.delegateTarget.getAttribute('data-pick-attr').split(' ')),
t.delegateTarget.hasAttribute('data-pick-style') && (a = t.delegateTarget.getAttribute('data-pick-style').split(' ')),
n.newPickerCallback(function (t) {
- 1 === r.indexOf(t) && (console.log(t), n.addToSelection(r), h(null, i, t), a.forEach(function (n) {
e(r).css(n, e(t).css(n))
}), n.setMode('select'))
}),
n.setMode('picker', !0)
}), window.attr_onchange = d, window.attr_remove = i, e('.palette_item').dblclick(function (t) {
t.delegateTarget.getAttribute('data-attr').split(' ').indexOf('stroke') >= 0 ? tn(e('#stroke_color'))  : tn(e('#fill_color')),
nn()
}); var vt = function (t, n) {
if (e(t).parent().hasClass('tools_flyout')) return !0;
var r = r || 'normal';
return n || e('.tools_flyout').hide(r),
e('#styleoverrides').text(''),
j.css('cursor', 'auto'),
e('.tool_button_current').removeClass('tool_button_current').addClass('tool_button'),
e(t).addClass('tool_button_current').removeClass('tool_button'),
!0
}; (function () {
var t = null,
r = null,
i = j[0],
a = !1,
o = !1;
e('#svgcanvas').bind('mousemove mouseup', function (e) {
return a !== !1 ? (i.scrollLeft -= e.clientX - t, i.scrollTop -= e.clientY - r, t = e.clientX, r = e.clientY, 'mouseup' === e.type && (a = !1), !1)  : void 0
}).mousedown(function (e) {
return 1 === e.button || o === !0 ? (a = !0, t = e.clientX, r = e.clientY, !1)  : void 0
}),
e(window).mouseup(function () {
a = !1
}),
e(document).bind('keydown', 'space', function () {
n.spaceKey = o = !0
}).bind('keyup', 'space', function () {
n.spaceKey = o = !1
}).bind('keydown', 'shift', function () {
'zoom' === n.getMode() && j.css('cursor', B)
}).bind('keyup', 'shift', function () {
'zoom' === n.getMode() && j.css('cursor', D)
})
}) (), function () {
var t = e('#main_icon'),
n = e('#main_menu'),
r = !1,
i = 0,
a = !0,
o = !1;
e(window).mouseup(function (i) {
r || (t.removeClass('buttondown'), 'INPUT' != i.target.tagName ? n.hide()  : o || (o = !0, e(i.target).click(function () {
n.css('margin-left', '-9999px').show()
}))),
r = !1
}).mousedown(function (t) {
var n = e(t.target).closest('div.tools_flyout, .contextMenu').length;
n || e('.tools_flyout:visible,.contextMenu').hide()
}),
t.bind('mousedown', function () {
return t.hasClass('buttondown') ? (t.removeClass('buttondown').addClass('buttonup'), n.hide(), void 0)  : (t.addClass('buttondown').removeClass('buttonup'), n.css('margin-left', 0).show(), i || (i = n.height()), n.css('height', i), r = !0, !1)
}).hover(function () {
r = !0
}).mouseout(function () {
r = !1
});
var s = e('#main_menu li');
s.mouseover(function () {
a = 'rgba(0, 0, 0, 0)' == e(this).css('background-color'),
s.unbind('mouseover'),
a && s.mouseover(function () {
this.style.backgroundColor = '#FFC'
}).mouseout(function () {
return this.style.backgroundColor = 'transparent',
!0
})
})
}(), r.addDropDown = function (t, n, r) {
if (0 !== e(t).length) {
var i = e(t).find('button'),
a = e(t).find('ul').attr('id', e(t) [0].id + '-list');
r || e('#option_lists').append(a);
var o = !1;
r && e(t).addClass('dropup'),
a.find('li').bind('mouseup', n),
e(window).mouseup(function () {
o || (i.removeClass('down'), a.hide()),
o = !1
}),
i.bind('mousedown', function () {
if (i.hasClass('down')) i.removeClass('down'),
a.hide();
 else {
if (i.addClass('down'), !r) {
var n = e(t).position();
a.css({
top: n.top + 24,
left: n.left - 10
})
}
a.show(),
o = !0
}
}).hover(function () {
o = !0
}).mouseout(function () {
o = !1
})
}
}; var mt = function (t, n, r, i) {
var a = e(t),
o = e(n),
s = !1,
l = i.dropUp;
l && e(t).addClass('dropup'),
o.find('li').bind('mouseup', function () {
i.seticon && e(this).addClass('current').siblings().removeClass('current'),
r.apply(this, arguments)
}),
e(window).mouseup(function () {
s || (a.removeClass('down'), o.hide(), o.css({
top: 0,
left: 0
})),
s = !1
}),
o.height(),
e(t).bind('mousedown', function () {
var n = e(t).offset();
return l ? (n.top -= o.height(), n.left += 8)  : n.top += e(t).height(),
e(o).offset(n),
a.hasClass('down') ? (a.removeClass('down'), o.hide(), o.css({
top: 0,
left: 0
}), void 0)  : (a.addClass('down'), o.show(), s = !0, !1)
}).hover(function () {
s = !0
}).mouseout(function () {
s = !1
}),
i.multiclick && o.mousedown(function () {
s = !0
})
}; (function () {
var t,
r = function () {
e(t).blur()
};
e('#svg_editor').find('button, select, input:not(#text)').focus(function () {
t = this,
$ = 'toolbars',
j.mousedown(r)
}).blur(function () {
$ = 'canvas',
j.unbind('mousedown', r),
'textedit' == n.getMode() && e('#text').focus()
})
}) (); var yt = function () {
vt('#tool_select') && n.setMode('select')
}, bt = function () {
vt('#tool_fhpath') && (n.setMode('fhpath'), document.querySelector('input[data-attr="fill"]').value = 'none', e('input[data-attr="fill"]').change(), 'none' === document.querySelector('input[data-attr="stroke"]').value && (document.querySelector('input[data-attr="stroke"]').value = '#000000', e('input[data-attr="stroke"]').change()))
}, xt = function () {
vt('#tool_line') && (n.setMode('line'), 'none' === document.querySelector('input[data-attr="stroke"]').value && (document.querySelector('input[data-attr="stroke"]').value = '#000000', e('input[data-attr="stroke"]').change()))
}, wt = function () {
vt('#tool_rect') && n.setMode('rect')
}; e('#tool_foreign').click(function () {
vt('#tool_foreign') && n.setMode('foreignObject')
}); var kt = function () {
vt('#tool_ellipse') && n.setMode('ellipse')
}, St = function () {
vt('#tool_image') && n.setMode('image')
}, _t = function () {
vt('#tool_zoom') && (n.setMode('zoom'), j.css('cursor', D))
}, Et = function () {
vt('#tool_text') && n.setMode('text')
}, At = function () {
vt('#tool_path') && n.setMode('path')
}, Ct = function () {
q && 'svgcontent' === q.parentElement.id ? v()  : null != q || U ? n.deleteSelectedElements()  : $t(),
K()
}, Tt = function () {
q && 'svgcontent' === q.parentElement.id || n.cutSelectedElements()
}, Nt = function () {
q && 'svgcontent' === q.parentElement.id || n.copySelectedElements()
}, Mt = function () {
n.getZoom(),
n.pasteElements('point', 20, 20)
}, Lt = function () {
null != q && 'svgcontent' === q.parentElement.id ? b( - 1)  : n.moveToTopSelectedElement()
}, Gt = function () {
null != q && 'svgcontent' === q.parentElement.id ? b(1)  : n.moveToBottomSelectedElement()
}, It = function (e) {
null != q && 'svgcontent' === q.parentElement.id ? b('Up' === e ? - 1 : 1)  : (n.moveUpDownSelected(e), an())
}, Ot = function () {
null != q && n.convertToPath()
}, Pt = function () {
null != q && I.reorient()
}; Hammer(document.getElementById('zoomIn')).on('hold', function () {
J(window, 'selection')
}), Hammer(document.getElementById('zoomOut')).on('hold', function () {
J(window, 'canvas')
}), e('.editMode').click(function () {
null != q && I.toEditMode(q)
}), e('.smoothPath').click(function () {
if (null != q && 'polyline' === q.nodeName) {
var e = I.smoothPolylineIntoPath(q);
e && e !== q && (q.parentNode.replaceChild(e, q), n.clearSelection(), n.addToSelection([e], !0, !0), svgEditor.canvas.undoMgr.addCommandToHistory())
}
}); var jt = function (e, t) {
if (null != q || U) {
if (l.gridSnapping) {
var r = n.getZoom() * l.snappingStep;
e *= r,
t *= r
}
n.moveSelectedElements(e, t)
}
}; r.moveSelected = jt; var Dt = function () {
var t = !e('#tool_node_link').hasClass('push_button_pressed');
t ? e('#tool_node_link').addClass('push_button_pressed').removeClass('tool_button')  : e('#tool_node_link').removeClass('push_button_pressed').addClass('tool_button'),
I.linkControlPoints(t)
}, Bt = function () {
'pathedit' === n.getMode() && I.getNodePoint() && I.clonePathNode()
}, $t = function () {
'pathedit' === n.getMode() && I.getNodePoint() && I.deletePathNode()
}, Vt = function () {
var t = e('#tool_add_subpath'),
n = !t.hasClass('push_button_pressed');
n ? t.addClass('push_button_pressed').removeClass('tool_button')  : t.removeClass('push_button_pressed').addClass('tool_button'),
I.addSubPath(n)
}, Rt = function () {
I.opencloseSubPath()
}, Ft = function (t, r) {
if (null !== q && !U) {
t || (r *= - 1);
var i = 1 * e('#angle').val() + r;
n.setRotationAngle(i),
st()
}
}, zt = function () {
n.open()
}, qt = function () {
}, Ut = ''; window.open_from_url = p, r.loadSVGFromURL = function (i, a) {
n.clear(),
console.log('open ' + i),
e.get(i, function (e) {
loggedIn = !0,
console.log('Loading SVG string', e),
Ut = null,
t(e, function (t) {
t && (a(e), r.updateCanvas(), J(window, 'canvas'))
})
}).error(function (e, t, n) {
console.log(e, t, n),
global.alert('Error communicating with server')
})
}; var Ht = function (t) {
t.preventDefault(),
O.getUndoStackSize() > 0 && (O.undo(), an(), e('#tool_redo').removeAttr('disabled'), 0 === O.getUndoStackSize() && e('#tool_undo').attr('disabled', 'disabled'))
}, Xt = function () {
O.getRedoStackSize() > 0 ? (O.redo(), an(), e('#tool_undo').removeAttr('disabled'), 0 === O.getRedoStackSize() && e('#tool_redo').attr('disabled', 'disabled'))  : console.trace()
}; e('.fitCanvas').click(function () {
n.fitCanvasToContent()
}), e('.group').click(function () {
n.groupSelectedElements()
}), e('.ungroup').click(function () {
n.ungroupSelectedElement()
}); var Yt = function () {
q && 'svgcontent' === q.parentElement.id ? m()  : null != q || U ? n.cloneSelectedElements(20, 20)  : Bt()
}, Wt = function () {
var t = this.id.replace('tool_align', '').charAt(0),
r = e('#align_relative_to').val();
1 === n.getSelectedElems().length && (r = 'page'),
n.alignSelectedElements(t, r)
}; e('#show_rulers').click(function () {
e('body').toggleClass('ruler'),
C()
}); var Kt, Zt = function () {
var t = !e('#view_grid').hasClass('push_button_pressed');
t ? (r.curConfig.showGrid = showGrid = !0, e('#view_grid').addClass('push_button_pressed').removeClass('tool_button'), e('#canvasGrid').attr('display', 'normal'), updateGrid(n.getZoom()))  : (r.curConfig.showGrid = showGrid = !1, e('#view_grid').removeClass('push_button_pressed').addClass('tool_button'), e('#canvasGrid').attr('display', 'none'))
}; Kt = function () {
var e = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
t = document.getElementsByTagName('script') [0];
for (var n in t.style) if (e.test(n)) return n.match(e) [0];
return 'WebkitOpacity' in t.style ? 'Webkit' : 'KhtmlOpacity' in t.style ? 'Khtml' : ''
}(); var Qt = function () {
return e('#dialog_box').hide(),
e('.popup').hide(),
H || X ? (X && hideDocProperties(), en(), void 0)  : (Y && n.leaveContext(), void 0)
}, Jt = {
width: e(window).width(),
height: e(window).height()
}, en = e.noop; e(window).resize(function () {
e.each(Jt, function (t, n) {
var r = e(window) [t]();
j[0]['scroll' + ('width' === t ? 'Left' : 'Top')] -= (r - n) / 2,
Jt[t] = r
}),
fn()
}), function () {
j.scroll(function () {
0 !== e('#ruler_x').length && (e('#ruler_x') [0].scrollLeft = j[0].scrollLeft),
0 !== e('#ruler_y').length && (e('#ruler_y') [0].scrollTop = j[0].scrollTop)
})
}(), e('#change_image_url').change(function () {
if (1 == this.files.length) {
var e = new FileReader;
e.onloadend = function (e) {
n.setGoodImage(e.target.result),
ot(e.target.result),
this.files = [
]
},
e.readAsDataURL(this.files[0])
}
}), e('#asignPattern').change(function () {
if (1 == this.files.length) {
var t = new FileReader;
t.onloadend = function (t) {
document.querySelector('#svgcontent defs') || u(document.querySelector('#svgcontent'), '<defs></defs>'),
e(new Image).load(function () {
var r = this;
n.getSelectedElems().forEach(function (n) {
var i = n.id + 'fill',
a = '<pattern id="' + i + '" x="0" y="0" width="' + r.width + 'px" height="' + r.height + 'px" patternUnits="userSpaceOnUse" viewBox="0 0 ' + r.width + ' ' + r.height + '">' + '<image x="0" y="0" width="' + r.width + 'px" height="' + r.height + 'px" xlink:href="' + t.target.result + '"/>' + '</pattern>';
e(document.getElementById(i)).remove(),
u(document.querySelector('#svgcontent defs'), a),
e(n).attr('fill', 'url(#' + i + ')')
})
}).attr('src', t.target.result)
},
t.readAsDataURL(this.files[0])
}
this.value = ''
}); var tn = function (t) {
var r = 'stroke_color' == t.attr('id') ? 'stroke' : 'fill',
i = V[r].paint;
'none' == i.solidColor && (i.solidColor = '4a90d6');
var a = 'stroke' == r ? 'Stroke Color' : 'Fill Color';
t.position(),
e('#color_picker').jGraduate({
paint: i,
window: {
pickerTitle: a
},
images: {
clientPath: l.jGraduatePath
},
newstop: 'inverse'
}, function (t) {
i = new e.jGraduate.Paint(t),
V[r].setPaint(i),
n.setPaint(r, i),
e('#color_picker').hide(),
i.solidColor && (e('[data-style="color"]').val('#' + i.solidColor), e('[data-style="color"]').change()),
nn()
}, function () {
e('#color_picker').hide()
})
}, nn = function () {
var t = e('.toolStyle'),
n = e('.toolStyle svg *'),
r = document.querySelector('input[data-attr="fill"]').value;
n.css('fill', r),
n.css('fill-opacity', Math.max(0.3, document.querySelector('input[data-attr="fill-opacity"]').value));
var i = document.querySelector('input[data-attr="stroke"]').value;
n.css('stroke', i),
n.css('stroke-opacity', Math.max(0.3, document.querySelector('input[data-attr="stroke-opacity"]').value)),
'none' === i && (e('#tool_fhpath svg *').css('stroke', '#000000'), e('#tool_line svg *').css('stroke', '#000000')),
e('#tool_fhpath svg *').css('fill', 'none'),
e('#tool_line svg *').css('fill', 'none'),
n.css('opacity', Math.max(0.3, document.querySelector('input[data-attr="opacity"]').value)),
_.all(hexToRGB(document.querySelector('input[data-attr="stroke"]').value), function (e) {
return e > 241
}) || _.all(hexToRGB(document.querySelector('input[data-attr="fill"]').value), function (e) {
return e > 241
}) ? t.css('background', 'rgba(0, 0 ,0 , 0.04)')  : t.css('background', '')
}, rn = function (t, n) {
var r = l['fill' === n ? 'initFill' : 'initStroke'],
i = (new DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#' + r.color + '" opacity="' + r.opacity + '"/> <defs><linearGradient id="gradbox_"/></defs></svg>', 'text/xml'),
a = i.documentElement;
a = e(t) [0].appendChild(document.importNode(a, !0)),
a.setAttribute('width', 16.5),
this.rect = a.firstChild,
this.defs = a.getElementsByTagName('defs') [0],
this.grad = this.defs.firstChild,
this.paint = new e.jGraduate.Paint({
solidColor: r.color
}),
this.type = n,
this.setPaint = function (e) {
this.paint = e;
var t = 'none',
n = e.type,
r = e.alpha / 100;
switch (n) {
case 'solidColor':
t = '#' + e[n];
break;
case 'linearGradient':
case 'radialGradient':
this.defs.removeChild(this.grad),
this.grad = this.defs.appendChild(e[n]);
var i = this.grad.id = 'gradbox_' + this.type;
t = 'url(#' + i + ')'
}
this.rect.setAttribute('fill', t),
this.rect.setAttribute('opacity', r)
},
this.update = function () {
if (q) {
var e,
t,
n = this.type;
switch (q.tagName) {
case 'use':
case 'image':
case 'foreignObject':
return;
case 'g':
case 'a':
for (var r = null, i = q.getElementsByTagName('*'), a = 0, o = i.length; o > a; a++) {
var s = i[a],
l = s.getAttribute(n);
if (0 === a) r = l;
 else if (r !== l) {
r = null;
break
}
}
if (null === r) return e = null,
void 0;
e = r,
t = 1;
break;
default:
t = parseFloat(q.getAttribute(n + '-opacity')),
isNaN(t) && (t = 1);
var c = 'fill' === n ? 'black' : 'none';
e = q.getAttribute(n) || c
}
t *= 100;
var u = at(e, t, n);
this.setPaint(u)
}
},
this.prep = function () {
var t = this.paint.type;
switch (t) {
case 'linearGradient':
case 'radialGradient':
new e.jGraduate.Paint({
copy: this.paint
})
}
}
};
V.fill = new rn('#fill_color', 'fill'),
V.stroke = new rn('#stroke_color', 'stroke'),
function () {
var e = '-' + Kt.toLowerCase() + '-zoom-',
t = e + 'in';
j.css('cursor', t),
j.css('cursor') === t && (D = t, B = e + 'out'),
j.css('cursor', 'auto')
}(),
e('#tool_fill').click(function () {
tn(e('#fill_color'))
}),
e('#tool_stroke').click(function () {
tn(e('#stroke_color'))
}),
e('#zoomLabel').mouseup(function () {
e('#zoom_dropdown button').mousedown(),
e(window).mouseup()
}),
e('.forward').mousedown(function (t) {
e('#tools_stacking').show(),
t.preventDefault()
}),
e('.mergeLayer').click(y),
e('.mergeAllLayers').click(x);
var an = function () {
var t = e('#layerlist tbody'),
r = e('#selLayerNames');
e('.layer').remove(),
r.empty(),
n.getCurrentDrawing().getCurrentLayerName();
for (var i = n.getCurrentDrawing().getNumLayers(); i--; ) {
var a = n.getCurrentDrawing().getLayerName(i),
o = '<tr class="layer';
o += '">',
o += n.getCurrentDrawing().getLayerVisibility(a) ? '<td class="layervis"/><td class="layername" >' + a + '</td></tr>' : '<td class="layervis layerinvis"/><td class="layername" >' + a + '</td></tr>',
t.append(o),
r.append('<option value="' + a + '">' + a + '</option>')
}
e('.layername').keydown(function (e) {
return !e.delegateTarget.hasAttribute('contenteditable') || 13 != e.which && 13 != e.keyCode ? !0 : (e.preventDefault(), w(e), !1)
}),
e('.layername').blur(function (e) {
e.delegateTarget.hasAttribute('contenteditable') && (e.delegateTarget.removeAttribute('contenteditable'), w(e))
}),
e('.layername').click(function (e) {
e.delegateTarget.parentNode.classList.contains('layersel') && e.delegateTarget.setAttribute('contenteditable', 'true'),
n.setCurrentLayer(this.textContent),
g()
}),
e('.layername').mouseover(function () {
var t = this;
e('#svgcontent > g').each(function (e, n) {
n.firstChild.textContent === t.textContent && n.classList.add('preview')
})
}),
e('.layername').mouseout(function () {
document.querySelector('.preview').classList.remove('preview')
}),
e('.layervis').click(function () {
var t = e(this.parentNode).prevAll().length,
r = e('#layerlist tr.layer:eq(' + (t - 1) + ') td.layername').text(),
i = e(this).hasClass('layerinvis');
n.setLayerVisibility(r, i),
i ? e(this).removeClass('layerinvis')  : e(this).addClass('layerinvis')
}),
g()
};
e('.newLayer').click(k),
an();
var on = function () {
};
e(window).bind('load resize', on),
e('#tool_undo').click(Ht),
e('#tool_redo').click(Xt),
e('.copy').click(Nt),
e('.cut').click(Tt),
e('.paste').click(Mt),
e('.front').click(Lt),
e('.back').click(Gt);
var sn = function () {
var t = [
{
sel: '#tool_select',
fn: yt,
evt: 'click'
},
{
sel: '#tool_fhpath',
fn: bt,
evt: 'click'
},
{
sel: '#tool_line',
fn: xt,
evt: 'click'
},
{
sel: '#tool_rect',
fn: wt,
evt: 'click',
icon: 'rect'
},
{
sel: '#tool_ellipse',
fn: kt,
evt: 'click',
icon: 'ellipse'
},
{
sel: '#tool_path',
fn: At,
evt: 'click'
},
{
sel: '#tool_text',
fn: Et,
evt: 'click'
},
{
sel: '#tool_image',
fn: St,
evt: 'click'
},
{
sel: '#tool_zoom',
fn: _t,
evt: 'click'
},
{
sel: '#tool_open',
fn: zt,
evt: 'click'
},
{
sel: '#tool_import',
fn: qt,
evt: 'click'
},
{
sel: '#tool_grid_check',
fn: Zt,
evt: 'click'
},
{
sel: '.delete',
fn: Ct,
evt: 'click'
},
{
sel: '#tool_reorient',
fn: Pt,
evt: 'click'
},
{
sel: '#tool_node_link',
fn: Dt,
evt: 'click'
},
{
sel: '#tool_openclose_path',
fn: Rt,
evt: 'click'
},
{
sel: '#tool_add_subpath',
fn: Vt,
evt: 'click'
},
{
sel: '.forward',
fn: function () {
It('Up'),
load_object_properties(n)
},
evt: 'click'
},
{
sel: '.forward',
fn: Lt,
evt: 'dblclick'
},
{
sel: '.backward',
fn: function () {
It('Down'),
load_object_properties(n)
},
evt: 'click'
},
{
sel: '.backward',
fn: Gt,
evt: 'dblclick'
},
{
sel: '.tool_topath',
fn: Ot,
evt: 'click'
},
{
sel: '.clone',
fn: Yt,
evt: 'click'
},
{
sel: '[id^=tool_align]',
fn: Wt,
evt: 'click'
},
{
sel: '#copy_save_done',
fn: Qt,
evt: 'click'
},
{
key: 'ctrl+left',
fn: function () {
Ft(0, 1)
}
},
{
key: 'ctrl+right',
fn: function () {
Ft(1, 1)
}
},
{
key: 'ctrl+shift+left',
fn: function () {
Ft(0, 5)
}
},
{
key: 'ctrl+shift+right',
fn: function () {
Ft(1, 5)
}
},
{
key: [
'up',
!0
],
fn: function () {
jt(0, - 1)
}
},
{
key: [
'down',
!0
],
fn: function () {
jt(0, 1)
}
},
{
key: [
'left',
!0
],
fn: function () {
jt( - 1, 0)
}
},
{
key: [
'right',
!0
],
fn: function () {
jt(1, 0)
}
},
{
key: 'shift+up',
fn: function () {
jt(0, - 10)
}
},
{
key: 'shift+down',
fn: function () {
jt(0, 10)
}
},
{
key: 'shift+left',
fn: function () {
jt( - 10, 0)
}
},
{
key: 'shift+right',
fn: function () {
jt(10, 0)
}
},
{
key: [
'alt+up',
!0
],
fn: function () {
n.cloneSelectedElements(0, - 1)
}
},
{
key: [
'alt+down',
!0
],
fn: function () {
n.cloneSelectedElements(0, 1)
}
},
{
key: [
'alt+left',
!0
],
fn: function () {
n.cloneSelectedElements( - 1, 0)
}
},
{
key: [
'alt+right',
!0
],
fn: function () {
n.cloneSelectedElements(1, 0)
}
},
{
key: [
'alt+shift+up',
!0
],
fn: function () {
n.cloneSelectedElements(0, - 10)
}
},
{
key: [
'alt+shift+down',
!0
],
fn: function () {
n.cloneSelectedElements(0, 10)
}
},
{
key: [
'alt+shift+left',
!0
],
fn: function () {
n.cloneSelectedElements( - 10, 0)
}
},
{
key: [
'alt+shift+right',
!0
],
fn: function () {
n.cloneSelectedElements(10, 0)
}
},
{
key: 'ctrl+a',
fn: function () {
n.selectAllInCurrentLayer()
}
},
{
key: G + 'x',
fn: Tt
},
{
key: G + 'c',
fn: Nt
},
{
key: G + 'v',
fn: Mt
}
],
r = {
'4/Shift+4': '#tools_rect_show',
'5/Shift+5': '#tools_ellipse_show'
};
return {
setAll: function () {
var n = {
};
e.each(t, function (t, r) {
if (r.sel) {
var i = e(r.sel);
if (0 === i.length) return !0;
if (r.evt && i[r.evt](r.fn), r.parent && 0 !== e(r.parent + '_show').length) {
var a = e(r.parent);
a.length || (a = nt(r.parent.substr(1))),
a.append(i),
e.isArray(n[r.parent]) || (n[r.parent] = [
]),
n[r.parent].push(r)
}
}
if (r.key) {
var o,
s = !0,
l = r.fn,
c = !1;
e.isArray(r.key) ? (o = r.key[0], r.key.length > 1 && (c = r.key[1]), r.key.length > 2 && (s = r.key[2]))  : o = r.key,
o += '',
e.each(o.split('/'), function (t, n) {
e(document).bind('keydown', n, function (e) {
return document.activeElement === document.body ? (l(), c && e.preventDefault(), !1)  : !0
})
})
}
}),
tt(n)
},
setTitles: function () {
e.each(r, function (t, n) {
var r = e(n).parents('#main_menu').length;
e(n).each(function () {
if (r) var n = e(this).text().split(' [') [0];
 else var n = this.title.split(' [') [0];
var i = '';
e.each(t.split('/'), function (e, t) {
var n = t.split('+'),
r = '';
n.length > 1 && (r = n[0] + '+', t = n[1]),
i += (e ? '/' : '') + r + (c['key_' + t] || t)
}),
r ? this.lastChild.textContent = n + ' [' + i + ']' : this.title = n + ' [' + i + ']'
})
})
},
getButtonData: function (n) {
var r;
return e.each(t, function (e, t) {
t.sel === n && (r = t)
}),
r
}
}
}();
sn.setAll(),
r.ready(function () {
}),
r.ready(function () {
window.svgCanvas = n;
var t,
r = l.initTool,
i = e('.tools, #svg_editor .tools_flyout'),
a = i.find('#tool_' + r),
o = i.find('#' + r);
t = a.length ? a : o.length ? o : e('#tool_select'),
n.undoMgr.addCommandToHistory(),
global.storage.get('svgXmlText', function (e) {
if (e.svgXmlText) {
n.undoMgr.addCommandToHistory();
try {
svgEditor.loadSVGText(e.svgXmlText)
} catch (t) {
}
J(window, 'canvas')
}
}),
load_object_properties(n),
svgedit.utilities.text2xml('<svg><filter id="Normal">  <feBlend mode="normal" in2="BackgroundImage" in="SourceGraphic"/></filter><filter id="Multiply">  <feBlend mode="multiply" in2="BackgroundImage" in="SourceGraphic"/></filter><filter id="Screen">  <feBlend mode="screen" in2="BackgroundImage" in="SourceGraphic"/></filter><filter id="Darken">  <feBlend mode="darken" in2="BackgroundImage" in="SourceGraphic"/></filter><filter id="Lighten">  <feBlend mode="lighten" in2="BackgroundImage" in="SourceGraphic"/></filter></svg>').firstChild.childNodes,
e('.resize_canvas_anchore').click(function () {
e('#backgroundrect').css('pointer-events', 'all'),
svgEditor.canvas.addToSelection([document.querySelector('#backgroundrect')], !1, !0),
e('#backgroundrect').css('pointer-events', ''),
document.querySelector('#canvasBackground').classList.add('showResizingTools'),
updateResizeControls()
})
});
var ln = 2;
document.getElementById('zoom2').value = 100 * n.getZoom(),
document.getElementById('zoom2').onchange = function () {
E(this.value)
},
document.getElementById('zoom2').onmousedown = function () {
E(this.value)
},
document.getElementById('zoomSlider2').value = Math.pow(100 * n.getZoom(), 1 / ln),
document.getElementById('zoomSlider2').onchange = function () {
S(this.value)
},
document.getElementById('zoomSlider2').onmousemove = function (e) {
(e.button || e.which) && S(this.value)
},
document.getElementById('zoomIn').onclick = function () {
A(5)
},
document.getElementById('zoomOut').onclick = function () {
A( - 5)
};
var cn = document.createElement('style');
document.head.appendChild(cn);
var un = document.createElement('style');
document.head.appendChild(un),
nn(),
r.openPrep = function (t) {
e('#main_menu').hide(),
3 > O.getUndoStackSize() ? t(!0)  : global.confirm(c.notification.QwantToOpen, t)
},
r.loadSVGText = function (n) {
t(n),
fn(),
e(document.body).removeClass('isDirty')
},
e('#tool_open_local').change(function () {
var e = this;
r.openPrep(function () {
if (n.clear(), 1 == e.files.length) {
var t = new FileReader;
t.onloadend = function (e) {
r.loadSVGText(e.target.result),
J(window, 'canvas'),
file_ID = null
},
t.readAsText(e.files[0])
}
})
});
var dn = e('<input type="file">').change(function () {
if (e('#main_menu').hide(), 1 == this.files.length) {
var t = new FileReader;
t.onloadend = function (e) {
console.log('loading...', e.target.result),
n.importSvgString(e.target.result, !0),
fn()
},
t.readAsText(this.files[0])
}
});
e('#tool_import').prepend(dn);
for (var fn = r.updateCanvas = function (t, r) {
var i = j.width(),
a = j.height(),
o = i,
s = a,
c = n.getZoom(),
u = j,
d = e('#svgcanvas'),
f = {
x: u[0].scrollLeft + o / 2,
y: u[0].scrollTop + s / 2
},
h = l.canvas_expansion;
i = Math.max(o, n.contentW * c * h),
a = Math.max(s, n.contentH * c * h),
i == o && a == s ? j.css('overflow', 'hidden')  : j.css('overflow', 'scroll');
var p = d.height() / 2,
g = d.width() / 2;
d.width(i).height(a);
var v = a / 2,
m = i / 2,
y = n.updateCanvas(i, a),
b = m / g,
x = i / 2 - o / 2,
w = a / 2 - s / 2;
if (r) r.x += y.x,
r.y += y.y;
 else {
var k = f.x - g,
S = m + k * b,
_ = f.y - p,
E = v + _ * b;
r = {
x: S,
y: E
}
}
t ? n.contentW > u.width() ? (j[0].scrollLeft = y.x - 10, j[0].scrollTop = y.y - 10)  : (u[0].scrollLeft = x, u[0].scrollTop = w)  : (u[0].scrollLeft = r.x - o / 2, u[0].scrollTop = r.y - s / 2),
e('body').hasClass('ruler') && (C(d, c), j.scroll())
}, hn = [
], pn = 0.1; 100000 > pn; pn *= 10) hn.push(1 * pn),
hn.push(2 * pn),
hn.push(5 * pn);
fn(!0),
n.setDocumentTitle('my vector image'),
J(window, 'canvas'),
e(function () {
window.svgCanvas = n,
n.ready = svgEditor.ready
}),
r.setLang = function (t, r) {
if (e.pref('lang', t), e('#lang_select').val(t), r) {
r.notification;
var i = e('#layerlist tr.layersel td.layername').text(),
a = i == c.common.layer + ' 1';
e.extend(c, r),
n.setUiStrings(r),
sn.setTitles(),
a && (n.renameCurrentLayer(c.common.layer + ' 1'), an()),
n.runExtensions('langChanged', t),
rt();
var o = {
'#stroke_color': '#tool_stroke .icon_label, #tool_stroke .color_block',
'#fill_color': '#tool_fill label, #tool_fill .color_block',
'#linejoin_miter': '#cur_linejoin',
'#linecap_butt': '#cur_linecap'
};
e.each(o, function (t, n) {
e(n).attr('title', e(t) [0].title)
}),
e('div[id^=tool_align]').each(function () {
e('#tool_pos' + this.id.substr(10)) [0].title = this.title
})
}
},
r.runCallbacks()
},
r.ready = function (e) {
i ? e()  : a.push(e)
},
r.runCallbacks = function () {
e.each(a, function () {
this()
}),
i = !0
},
r.loadFromString = function (e) {
r.ready(function () {
t(e)
})
},
r.disableUI = function () {
},
r.loadFromURL = function (n, r) {
console.log('open ' + n),
r || (r = {
}),
r.cache;
var i = r.callback;
e(document).ready(function () {
e.get(n, function (e) {
console.log('Loading SVG string'),
t(e, i)
}, 'text')
})
},
r.loadFromDataURI = function (e) {
r.ready(function () {
var n;
n = - 1 !== e.indexOf('data:image/svg+xml;charset=utf-8;base64,') ? 'data:image/svg+xml;charset=utf-8;base64,' : 'data:image/svg+xml;base64,';
var r = e.substring(n.length);
t(svgedit.utilities.decode64(r))
})
},
r.addExtension = function () {
var t = arguments;
e(function () {
n && n.addExtension.apply(this, t)
})
},
r
}(jQuery)), $(svgEditor.init)
}(),
window.chrome && window.chrome.fileSystem && (document.body.classList.add('packaged-app'), $('.saveAs').text('Save As'), $('.save_as_png').text('Export as PNG'), $('.save_as_jpeg').text('Export as JPEG'), window.FileSystem = function () {
function e(e, t) {
e.file(function (e) {
var n = new FileReader;
n.onload = function (e) {
t(e.target.result)
},
n.readAsText(e)
})
}
var t,
n,
r = {
};
const i = [
{
extensions: [
'svg'
]
}
];
return r.newFile = function () {
$('.fileName').text(''),
$('[data-hoveropen="file"]').text('File'),
t = null
},
r.open = function () {
chrome.fileSystem.chooseEntry({
type: 'openFile',
accepts: i
}, function (r) {
chrome.runtime.lastError || (t = r, $('[data-hoveropen="file"]').text(r.name), $('.fileName').text(''), e(t, n))
})
},
r.save = function (e, n, i) {
t ? chrome.fileSystem.getWritableFileEntry(t, function (e) {
e.createWriter(function (e) {
var t = new Blob([n], {
type: 'image/svg+xml'
});
e.onwriteend = function () {
e.onwriteend = null,
e.truncate(n.length),
i()
},
e.seek(0),
e.write(t)
})
})  : r.saveAs(e, n, i)
},
r.saveAs = function (e, n, r) {
chrome.fileSystem.chooseEntry({
type: 'saveFile',
accepts: i
}, function (e) {
chrome.runtime.lastError || (t = e, $('[data-hoveropen="file"]').text(e.name), t.createWriter(function (e) {
var t = new Blob([n], {
type: 'image/svg+xml'
});
e.onwriteend = function () {
e.onwriteend = null,
e.truncate(n.length),
r()
},
e.seek(0),
e.write(t)
}))
})
},
r.exportFile = function (e, t, n) {
chrome.fileSystem.chooseEntry({
type: 'saveFile'
}, function (e) {
e.createWriter(function (e) {
e.onwriteend = function () {
n()
},
e.seek(0),
e.write(t)
})
})
},
r.setOpenCallback = function (e) {
n = e
},
Object.freeze(r)
}),
svgEditor.addExtension('ext-measure-tool', function () {
var e,
t,
n,
r,
i = !1;
return $('#ruler_x, #ruler_y').click(function () {
svgCanvas.setMode('ext-measure-tool')
}),
{
name: 'Extension Panning',
mouseDown: function (a) {
if (0 === $('.measure_line').length) {
addSVGString($('#selectorParentGroup') [0], '<line stroke-width="1" stroke="#000" class="measure_line" /><line stroke-width="1" stroke-dasharray="5,5" stroke="#000" class="x1_line" shape-rendering="crispEdges" /><line stroke-width="1" stroke-dasharray="5,5" stroke="#000" class="y1_line" shape-rendering="crispEdges" /><line stroke-width="1" stroke-dasharray="5,5" stroke="#000" class="x2_line" shape-rendering="crispEdges" /><line stroke-width="1" stroke-dasharray="5,5" stroke="#000" class="y2_line" shape-rendering="crispEdges" />');
var o = $('<label class="measure_length"><span class="units"></span><span></span></label>');
o.css('position', 'absolute'),
$(document.body).append(o)
}
if (i && ($('.measure_length, .measure_line, .x1_line, .y1_line, .x2_line, .y2_line').hide(), i = !1), 'ext-measure-tool' == svgCanvas.getMode()) {
$('.measure_length, .measure_line, .x1_line, .y1_line, .x2_line, .y2_line').show(),
i = !0;
var s = a.event;
return e = a.start_x * a.current_zoom,
t = a.start_y * a.current_zoom,
n = s.clientX,
r = s.clientY,
$('.measure_line').attr({
x1: e,
y1: t
}),
$('.x1_line, .y1_line, .measure_line').attr({
x1: e,
y1: t
}),
$('.x1_line').attr({
x2: e,
y2: 99999
}),
$('.y1_line').attr({
x2: 99999,
y2: t
}),
$('.x2_line, .y2_line').attr('x1', e),
$('.x2_line, .y2_line').attr('y1', t),
$('.x2_line').attr('x2', e),
$('.x2_line').attr('y2', 99999),
$('.y2_line').attr('x2', 99999),
$('.y2_line').attr('y2', t),
$('.measure_line').attr({
x2: e,
y2: t
}),
{
started: !0
}
}
},
zoomChanged: function () {
$('.measure_length, .measure_line, .x1_line, .y1_line, .x2_line, .y2_line').hide()
},
mouseMove: function (a) {
var o = a.event;
if (a.mouse_x, a.mouse_y, 'ext-measure-tool' == svgCanvas.getMode() && i) {
var s = o.clientX,
l = o.clientY,
c = a.mouse_x,
u = a.mouse_y;
a.event.shiftKey && (Math.abs(e - c) > Math.abs(t - u) ? (u = t, l = r)  : (c = e, s = n)),
$('.measure_line').attr({
x2: c,
y2: u
}),
$('.x2_line, .y2_line').attr('x1', c),
$('.x2_line, .y2_line').attr('y1', u),
$('.x2_line').attr('x2', c),
$('.x2_line').attr('y2', 99999),
$('.y2_line').attr('x2', 99999),
$('.y2_line').attr('y2', u),
measure_length = $('.measure_length'),
measure_length.css('left', s + 15),
measure_length.css('top', l - 30);
var d = Math.sqrt(Math.pow(e - c, 2) + Math.pow(t - u, 2));
$('.measure_length .units').text((d / a.current_zoom).toFixed(2))
}
},
mouseUp: function () {
return 'ext-measure-tool' == svgCanvas.getMode() ? (svgCanvas.setMode('select'), {
keep: !1,
element: null
})  : void 0
}
}
}),
function (e, t, n) {
'use strict';
function r(t) {
var n = svgEditor.canvas.getSelectedElems();
n.forEach(function (n) {
'foreignObject' === n.nodeName && e(n).css(t.delegateTarget.getAttribute('data-style'), t.delegateTarget.value)
}),
i(svgEditor.canvas),
svgEditor.canvas.undoMgr.addCommandToHistory()
}
function i(t) {
t = svgEditor.canvas;
var n = t.getSelectedElems();
if (document.body.setAttribute('data-selected-shapes', n.length), e('.layerSelected').removeClass('layerSelected'), e('.nodeSelected').removeClass('nodeSelected'), e('.rightPanel .push_button_pressed').removeClass('push_button_pressed'), $$('[data-visableif-attr]').css('display', ''), n.length && 'backgroundrect' !== n[0].id) {
if ($$('.clone, .cut, .copy, .paste, .delete, .forward, .backward, .group, .ungroup, .front, .back, [id^=tool_align]').removeAttr('disabled'), document.getElementById('xpos-input').removeAttribute('disabled'), document.getElementById('ypos-input').removeAttribute('disabled'), 1 === n.length) {
var r = n[0];
r.parentNode.childNodes[r.parentNode.childNodes.length - 1] === r && e('.front, .forward').attr('disabled', 'disabled'),
r.parentNode.childNodes.length > 1 && r.parentNode.childNodes[1] === r && e('.back, .backward').attr('disabled', 'disabled')
}
1 === svgEditor.canvas.getSelectedElems().length && 'g' !== svgEditor.canvas.getSelectedElems() [0].nodeName && e('.group, .ungroup').attr('disabled', 'disabled'),
$$('[data-attr], [data-style], [data-require-attr]').attr('disabled', 'disabled');
var i = getAttributeList(n);
if ($$('[data-attr~=\'' + i.join('\'], [data-attr~=\'') + '\']' + '[data-style~=\'' + i.join('\'], [data-style~=\'') + '\']' + '[data-require-attr~=\'' + i.join('\'], [data-require-attr~=\'') + '\']').removeAttr('disabled'), $$('[data-visableif-attr~=\'' + i.join('\'], [data-visableif-attr~=\'') + '\']').show(), i.forEach(function (t) {
- 1 !== t.indexOf(':') && (t = t.substring(t.indexOf(':') + 1));
var r;
r = e(n).is('[' + t + ']') ? e(n).filter('[' + t + ']').attr(t)  : defaults[t],
$$('input[data-attr~=\'' + t + '\'], select[data-attr~=\'' + t + '\']').val(r),
$$('button[data-attr~=\'' + t + '\'], div[data-attr~=\'' + t + '\']').removeClass('push_button_pressed'),
$$('button[data-attr~=\'' + t + '\'][value=\'' + r + '\'], div[data-attr~=\'' + t + '\'][value=\'' + r + '\']').addClass('push_button_pressed'),
r = n[0].style[t] || defaults[t],
$$('input[data-style~=\'' + t + '\'], select[data-style~=\'' + t + '\']').val(r),
$$('button[data-style~=\'' + t + '\']').removeClass('push_button_pressed'),
$$('button[data-style~=\'' + t + '\'][value=\'' + r + '\']').addClass('push_button_pressed')
}), 'backgroundrect' !== n[0].id && n[0].parentElement === document.querySelector('#svgcontent')) {
if (document.body.classList.add('layerSelected'), e('.group, .ungroup, .cut, .copy, .paste').attr('disabled', 'disabled'), e('.forward, .backward, .front, .back').removeAttr('disabled'), 1 === n.length) {
var r = n[0];
r.parentNode.childNodes[r.parentNode.childNodes.length - 1] === r && e('.front, .forward').attr('disabled', 'true'),
'g' !== r.previousSibling.nodeName && e('.back, .backward').attr('disabled', 'true')
}
1 === document.querySelectorAll('#svgcontent > g').length && e('.delete, .forward, .backward, .front, .back').attr('disabled', 'disabled')
}
} else $$('[data-attr~=fill], [data-attr~=stroke], [data-attr~=stroke-width], [data-attr~=opacity], [data-attr~=stroke-dasharray], [data-require-attr]').removeAttr('disabled'),
document.getElementById('xpos-input').setAttribute('disabled', 'true'),
document.getElementById('ypos-input').setAttribute('disabled', 'true'),
document.getElementById('width-input').removeAttribute('disabled'),
document.getElementById('height-input').removeAttribute('disabled'),
e('.changeCanvasSizeWidth').val(t.getResolution().w),
e('.changeCanvasSizeHeight').val(t.getResolution().h),
$$('[data-attr]').attr('disabled', 'disabled'),
$$('[data-style]').attr('disabled', 'disabled'),
$$('.clone, .cut, .copy, .paste, .delete, .forward, .backward, .front, .back, .group, .ungroup, [id^=tool_align]').attr('disabled', 'disabled'),
$$('[data-attr~="stroke-width"], [data-attr~="opacity"], [data-attr~="stroke-dasharray"], [data-attr~="stroke-linecap"], [data-attr~="stroke-linejoin"], [data-attr~="stroke"], [data-attr~="fill"]').removeAttr('disabled');
'pathedit' === t.getMode() && (document.body.classList.add('nodeSelected'), e('.clone, .delete').removeAttr('disabled'), $$('[data-elementcontext~="path"]').show(), $$('[data-attr]').attr('disabled', 'disabled'), $$('[data-style]').attr('disabled', 'disabled'), $$('.forward, .backward, .front, .back, .group, .ungroup, [id^=tool_align]').attr('disabled', 'disabled'))
}
e('[data-toolmode]').click(function () {
var e = this.getAttribute('data-toolmode');
svgEditor.canvas.setMode(e)
}),
e(document).ready(function () {
function i(t) {
e('#board').remove();
var n = document.createElement('canvas');
n.id = 'board',
document.body.appendChild(n),
n.width = svgEditor.canvas.getResolution().w,
n.height = svgEditor.canvas.getResolution().h;
var r = n.getContext('2d');
e('.rendering-message').show();
var i = '<?xml version="1.0"?>\n' + svgEditor.canvas.svgCanvasToString('hidden');
return e.ajax({
type: 'POST',
url: '/file_system/getpngdata',
data: {
svg_data: i,
format: t,
width: n.width,
height: n.height
},
dataType: 'json',
success: function (i) {
var a = new Image;
a.onload = function () {
e('.rendering-message').hide(),
r.drawImage(this, - 8, - 8),
n.toBlob(function (e) {
s.exportFile('vectorpaint.' + t, e)
}, 'image/' + t)
},
a.src = i.data
}
}).error(function () {
e('.rendering-message').hide(),
global.alert('Image failed to render'),
window.global.trackEvent('render-fail')
}),
void 0
}
function a(t) {
e('.hoverShow').removeClass('hoverShow');
var r = document.getElementById('board');
r.width = svgEditor.canvas.getResolution().w,
r.height = svgEditor.canvas.getResolution().h;
var a = r.getContext('2d');
if (window.chrome) {
var o = new Image;
o.src = 'data:image/svg+xml;base64,' + n.utilities.encode64(svgEditor.canvas.getSvgString()),
console.log(o.src),
o.onload = function () {
a.drawImage(this, 0, 0, r.width, r.height);
try {
r.toBlob(function (e) {
saveAs(e, 'vectorpaint.' + t)
}, 'image/' + t)
} catch (e) {
console.log(e),
i(t)
}
}
} else i(t)
}
var o = document.querySelectorAll('[draggable=true]');
[
].forEach.call(o, function (t) {
t.addEventListener('dragstart', function (t) {
var n = e(t.currentTarget).find('.draggable') [0],
r = (new XMLSerializer).serializeToString(n);
({
x: t.offsetX,
y: t.offsetY
}),
t.dataTransfer.effectAllowed = 'copyLink',
t.dataTransfer.setData('text/xml', r)
}, !1)
});
var s = new FileSystem;
e('.save_as_png').click(function () {
a('png')
}),
e('.save_as_jpeg').click(function () {
a('jpeg')
}),
e('.newImage').click(function () {
s.newFile(),
svgCanvas.undoMgr.clearImage()
}),
s.setOpenCallback(function (e) {
svgEditor.loadSVGText(e)
}),
e('.save').click(function () {
s.save('vectorpaint', svgEditor.canvas.getSvgString()),
e(document.body).removeClass('isDirty')
}),
e('.saveAs').click(function () {
s.saveAs('vectorpaint', svgEditor.canvas.getSvgString()),
e(document.body).removeClass('isDirty')
}),
e('.open').click(function () {
s.open()
}),
e('.svgBackground').click(function () {
var t = '',
r = n.utilities.encode64(svgEditor.canvas.getSvgString());
t += 'background-size: auto 100%;\n',
t += 'background-repeat: no-repeat;\n',
t += 'background-position: center center;\n',
t += 'background-image: url(data:image/svg+xml;charset=utf-8;base64,' + r + ');',
t += '<a href="http://caniuse.com/#feat=svg-css" target="_blank">Can I Use?</a>\n',
global.alert(t),
e('#popup_container').css('background-size', 'auto 100%'),
e('#popup_container').css('background-repeat', 'no-repeat'),
e('#popup_container').css('background-position', 'center center'),
e('#popup_container').css('background-image', 'url(data:image/svg+xml;charset=utf-8;base64,' + r + ')')
}),
e('.open-url').click(function () {
global.prompt('Enter url or data url', '', function (e) {
svgEditor.loadFromDataURI(e)
})
});
var l = function () {
e('#svgcontent').css('overflow', 'hidden'),
e('#selectorParentGroup').css('display', 'none')
},
c = function () {
e('#svgcontent').css('overflow', ''),
e('#selectorParentGroup').css('display', '')
};
e('.svgBackground, .save_as_png, .save_as_jpeg').mouseover(l),
e('.svgBackground, .save_as_png, .save_as_jpeg').mouseout(c),
e('[data-hotkey]').toArray().forEach(function (e) {
var t = document.createElement('span');
t.textContent = e.attributes['data-hotkey'].value.toUpperCase(),
t.classList.add('hotkey'),
e.appendChild(t)
}),
e(document).bind('keydown', 'ctrl', function () {
document.body.classList.add('showHotkey')
}),
e(document).bind('keyup', 'ctrl', function () {
document.body.classList.remove('showHotkey')
}),
e('.rightPanel [type=\'range\']').dblclick(function (t) {
return 'number' === e(this).attr('type') ? e(this).attr('type', 'range')  : e(this).attr('type', 'number'),
t.preventDefault(),
!1
}),
e('input[data-attr], select[data-attr]').change(attr_onchange),
e('input[data-attr][type="range"]').mousemove(function (e) {
(e.button || e.which) && attr_onchange(e)
}),
e('button[data-attr]').click(function (e) {
e.delegateTarget.classList.contains('toogle-attr') ? e.delegateTarget.classList.contains('push_button_pressed') ? (e.delegateTarget.classList.remove('push_button_pressed'), attr_remove(e))  : (e.delegateTarget.classList.add('push_button_pressed'), attr_onchange(e))  : attr_onchange(e)
}),
e('div[data-attr]').click(attr_onchange),
e('select[data-style], input[data-style]').change(r),
e('button[data-style], div[data-style]').click(r),
e('.filter').change(function (e) {
svgEditor.canvas.setFilterVal(e.delegateTarget.value, e.delegateTarget.getAttribute('data-filterName'), e.delegateTarget.getAttribute('data-filterProperty'), e.delegateTarget.getAttribute('data-filterOperator'))
}),
e('#hide_open_file_dialog').click(function () {
e('#open_file_dialog').hide()
}),
e('.widget.collapsable > h4').click(function (t) {
e(t.delegateTarget).parent().toggleClass('collapsed')
}),
e('.clearBackground').click(function () {
svgEditor.canvas.setBackground('#FFF', '')
}),
e('.addBackground').change(function () {
if (1 == this.files.length) {
var e = new FileReader;
e.onloadend = function (e) {
svgEditor.canvas.setBackground('#FFF', e.target.result)
},
e.readAsDataURL(this.files[0])
}
}),
e('.distributeX').click(function () {
var e = window.wrapGroupSVG(svgCanvas.getSelectedElems());
e.distributeX(),
svgEditor.canvas.undoMgr.addCommandToHistory(),
svgCanvas.getSelectedElems().forEach(function (e) {
svgCanvas.selectorManager.requestSelector(e).resize()
})
}),
e('.distributeY').click(function () {
var e = window.wrapGroupSVG(svgCanvas.getSelectedElems());
e.distributeY(),
svgEditor.canvas.undoMgr.addCommandToHistory(),
svgCanvas.getSelectedElems().forEach(function (e) {
svgCanvas.selectorManager.requestSelector(e).resize()
})
}),
e('.snapping').click(function (e) {
svgCanvas.setSnapping(!svgCanvas.isSnapping()),
e.delegateTarget.classList.toggle('push_button_pressed')
}),
e('.snappingStep').change(function (e) {
svgCanvas.setGridStep(e.delegateTarget.value),
updateGrid()
}),
e('.grid').click(function () {
}),
e('[data-togglebody]').click(function (e) {
if (e.delegateTarget === e.target) {
var t = e.delegateTarget.getAttribute('data-togglebody');
document.body.classList.toggle(t),
document.body.classList.contains(t) ? (e.delegateTarget.checked = !0, e.delegateTarget.classList.add('push_button_pressed'), global.storage.get('bodyClasses', function (e) {
e = e.bodyClasses ? JSON.parse(e.bodyClasses)  : [
],
- 1 === e.indexOf(t) && e.push(t),
global.storage.set('bodyClasses', JSON.stringify(e))
}))  : (e.delegateTarget.classList.remove('push_button_pressed'), e.delegateTarget.checked = !1, global.storage.get('bodyClasses', function (e) {
if (e.bodyClasses) {
e = JSON.parse(e.bodyClasses);
var n = e.indexOf(t);
e.splice(n, 1),
global.storage.set('bodyClasses', JSON.stringify(e))
}
})),
window.global.trackEvent(e.delegateTarget.getAttribute('data-togglebody') + document.body.classList.contains(t))
}
}),
e('.togglePlugin').click(function () {
this.textContent = e(this).hasClass('push_button_pressed') ? 'Remove' : e(this).hasClass('purchased') ? 'Add (Purchased)' : 'Add'
}),
e('.logout').click(function () {
document.body.classList.remove('loggedIn')
}),
e('#recommend').submit(function () {
return event.preventDefault(),
window.global.trackEvent('Req ' + this.recommend.value),
window.global.alert('Thank you for your feedback. You can also send feedback to ben@yaks.co.nz. Remember to rate <a href="https://chrome.google.com/webstore/detail/polhblidjnpebjjpjjhmejjalalppmhc/reviews" target="_black">Vector Paint on the Google Chrome Store</a>  and share it with a friend.'),
this.recommend.value = '',
!1
}),
global.storage.get('bodyClasses', function (e) {
e.bodyClasses && (e = JSON.parse(e.bodyClasses), e.forEach(function (e) {
$$('[data-togglebody="' + e + '"]').click()
}))
}),
e('.buy').click(function (e) {
window.global.trackEvent('Buy5USD' + e.delegateTarget.getAttribute('data-togglebody')),
e.delegateTarget.classList.contains('push_button_pressed') && (window.global.alert('Plugins are free of charge at this time. Enjoy.'), goog_report_conversion())
}),
e('.vector-help').click(function () {
window.global.alert('<a href="http://www.youtube.com/embed/XI0rf2r-dx8"><br/>Vector graphics work a little different than bitmap graphics you might be use to and don\'t use an erase tool. Click here to watch a video about vector graphics.</a><br/><iframe width="420" height="315" src="//www.youtube.com/embed/XI0rf2r-dx8" frameborder="0" allowfullscreen></iframe>'),
window.global.trackEvent('vector-help')
}),
e('[data-referenceform]').click(function (e) {
var t = e.delegateTarget.getAttribute('data-referencetemplate'),
n = e.delegateTarget.getAttribute('data-setattribute');
makeDialogForm(t, n)
});
var u = {
};
if (e('#svgroot').mouseenter(function (e) {
u.x = e.pageX,
u.y = e.pageY
}), e('#svgroot').mousemove(function (t) {
u.x || (u.x = t.pageX, u.y = t.pageY),
(Math.abs(u.x - t.pageX) > 50 || Math.abs(u.y - t.pageY) > 50) && e('.hoverShow').removeClass('hoverShow')
}), e('#svgroot').mouseleave(function () {
u = {
}
}), e('[data-hoveropen]').hoverIntent({
over: function (t) {
var n = e(this).offset(),
r = e(this).height();
e('.' + t.delegateTarget.getAttribute('data-hoveropen')).css({
left: n.left + 'px',
top: n.top + r + 'px'
}).addClass('hoverShow')
},
out: function () {
},
interval: 40
}), e('[data-toggle]').click(function (t) {
if (t.delegateTarget === t.target) {
var n = !t.delegateTarget.classList.contains('push_button_pressed');
e(this).toggleClass('push_button_pressed', n).attr('checked', n),
t.delegateTarget.getAttribute('data-toggle').split(' ').forEach(function (t) {
e('.' + t).toggleClass('pinned', n),
n ? e('.' + t).css('display', 'block')  : e('.' + t).css('display', '')
}),
e('.hoverShow').removeClass('hoverShow')
}
}), e('[data-hide]').click(function (t) {
if (t.delegateTarget === t.target) {
var n = !1;
t.delegateTarget.getAttribute('data-hide').split(' ').forEach(function (t) {
$$('[data-toggle~="' + t + '"]').toggleClass('push_button_pressed', n),
e('.' + t).toggle(n).toggleClass('pinned', n),
$$('[data-toggle~="' + t + '"]').attr('checked', n)
})
}
}), window.gapi) {
var d = t.once(function () {
gapi.page.go(),
e.getScript('https://coinbase.com/assets/button.js')
});
e('.show-help').click(function () {
d()
})
}
e('[data-hideclass]').click(function (t) {
e('.' + t.delegateTarget.getAttribute('data-hideclass')).hide()
}),
'localhost' === window.location.hostname ? document.body.classList.add('debug')  : (console.log = function () {
}, console.trace = function () {
}, console.assert = function () {
})
}),
window.load_object_properties = i
}(window.jQuery, window._, window.svgedit),
function (e) {
$(document).ready(function () {
function t(t) {
e(t).attr('title', (e(t).attr('title') || '') + ' [' + t.attributes['data-hotkey'].value + ']'),
t.attributes['data-hotkey'].value.split(' ').forEach(function (n) {
e(document).bind('keydown', n, function (n) {
return t.hasAttribute('disabled') || document.querySelector('[contenteditable]') || - 1 !== ['input',
'select',
'textarea'].indexOf(document.activeElement.nodeName.toLowerCase()) ? !0 : (e(t).click(), e(t).css({
opacity: 0.1
}).delay(50).css({
opacity: ''
}, 50), n.preventDefault(), !1)
})
})
}
e('[data-hotkey]').ready(function () {
e('[data-hotkey]').toArray().forEach(t)
})
})
}(jQuery),
svgEditor.addExtension('shapes', function () {
function e() {
$('#shape_buttons').empty(),
$('#shape_buttons').append(h.buttons)
}
function t(t) {
var r = f[t];
return r ? (h = r, r.buttons.length || n(t, r), e(), void 0)  : ($('#shape_buttons').html('Loading...'), $.getJSON('extensions/shapelib/' + t + '.json', function (r) {
h = f[t] = {
data: r.data,
size: r.size,
fill: r.fill
},
n(t, r),
e()
}), void 0)
}
function n(e, t) {
var n = h.size || 300,
r = h.fill || !1,
i = 0.05 * n,
a = [
- i,
- i,
n + 2 * i,
n + 2 * i
].join(' '),
o = r ? 0 : n / 30,
s = (new DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg"><svg viewBox="' + a + '"><path fill="' + (r ? '#333' : 'none') + '" stroke="#000000" stroke-width="' + o + '" /></svg></svg>', 'text/xml'),
l = 20,
c = 20;
s.documentElement.setAttribute('width', l),
s.documentElement.setAttribute('height', c);
var u = $(document.importNode(s.documentElement, !0)),
d = t.data;
h.buttons = [
];
for (var f in d) {
var p = d[f],
v = u.clone();
v.find('path').attr('d', p);
var m = v.wrap('<div class="tool_button">').parent().attr({
id: g + '_' + f,
title: f
});
h.buttons.push(m[0])
}
}
var r,
i,
a,
o,
s,
l = svgEditor.canvas,
c = l.getRootElem(),
u = {
},
d = {
basic: 'Basic',
object: 'Objects',
symbol: 'Symbols',
arrow: 'Arrows',
flowchart: 'Flowchart',
animal: 'Animals',
game: 'Cards & Chess',
dialog_balloon: 'Dialog balloons',
electronics: 'Electronics',
math: 'Mathematical',
music: 'Music',
misc: 'Miscellaneous',
raphael_1: 'raphaeljs.com set 1',
raphael_2: 'raphaeljs.com set 2'
},
f = {
basic: {
data: {
heart: 'm150,73c61,-175 300,0 0,225c-300,-225 -61,-400 0,-225z',
frame: 'm0,0l300,0l0,300l-300,0zm35,-265l0,230l230,0l0,-230z',
donut: 'm1,150l0,0c0,-82.29042 66.70958,-149 149,-149l0,0c39.51724,0 77.41599,15.69816 105.35889,43.64108c27.94293,27.94293 43.64111,65.84165 43.64111,105.35892l0,0c0,82.29041 -66.70958,149 -149,149l0,0c-82.29041,0 -149,-66.70959 -149,-149zm74.5,0l0,0c0,41.1452 33.35481,74.5 74.5,74.5c41.14522,0 74.5,-33.3548 74.5,-74.5c0,-41.1452 -33.3548,-74.5 -74.5,-74.5l0,0c-41.14519,0 -74.5,33.35481 -74.5,74.5z',
triangle: 'm1,280.375l149,-260.75l149,260.75z',
right_triangle: 'm1,299l0,-298l298,298z',
diamond: 'm1,150l149,-149l149,149l-149,149l-149,-149z',
pentagon: 'm1.00035,116.97758l148.99963,-108.4053l148.99998,108.4053l-56.91267,175.4042l-184.1741,0l-56.91284,-175.4042z',
hexagon: 'm1,149.99944l63.85715,-127.71428l170.28572,0l63.85713,127.71428l-63.85713,127.71428l-170.28572,0l-63.85715,-127.71428z',
septagon1: 'm0.99917,191.06511l29.51249,-127.7108l119.48833,-56.83673l119.48836,56.83673l29.51303,127.7108l-82.69087,102.41679l-132.62103,0l-82.69031,-102.41679z',
heptagon: 'm1,88.28171l87.28172,-87.28171l123.43653,0l87.28172,87.28171l0,123.43654l-87.28172,87.28172l-123.43653,0l-87.28172,-87.28172l0,-123.43654z',
decagon: 'm1,150.00093l28.45646,-88.40318l74.49956,-54.63682l92.08794,0l74.50002,54.63682l28.45599,88.40318l-28.45599,88.40318l-74.50002,54.63681l-92.08794,0l-74.49956,-54.63681l-28.45646,-88.40318z',
dodecagon: 'm1,110.07421l39.92579,-69.14842l69.14842,-39.92579l79.85159,0l69.14842,39.92579l39.92578,69.14842l0,79.85159l-39.92578,69.14842l-69.14842,39.92578l-79.85159,0l-69.14842,-39.92578l-39.92579,-69.14842l0,-79.85159z',
star_points_5: 'm1,116.58409l113.82668,0l35.17332,-108.13487l35.17334,108.13487l113.82666,0l-92.08755,66.83026l35.17514,108.13487l-92.08759,-66.83208l-92.08757,66.83208l35.17515,-108.13487l-92.08758,-66.83026z',
trapezoid: 'm1,299l55.875,-298l186.25001,0l55.87498,298z',
arrow_up: 'm1.49805,149.64304l148.50121,-148.00241l148.50121,148.00241l-74.25061,0l0,148.71457l-148.5012,0l0,-148.71457z',
vertical_scrool: 'm37.375,261.625l0,-242.9375l0,0c0,-10.32083 8.36669,-18.6875 18.6875,-18.6875l224.25,0c10.32083,0 18.6875,8.36667 18.6875,18.6875c0,10.32081 -8.36667,18.6875 -18.6875,18.6875l-18.6875,0l0,242.9375c0,10.32083 -8.36668,18.6875 -18.6875,18.6875l-224.25,0l0,0c-10.32083,0 -18.6875,-8.36667 -18.6875,-18.6875c0,-10.32083 8.36667,-18.6875 18.6875,-18.6875zm37.375,-261.625l0,0c10.32081,0 18.6875,8.36667 18.6875,18.6875c0,10.32081 -8.36669,18.6875 -18.6875,18.6875c-5.1604,0 -9.34375,-4.18335 -9.34375,-9.34375c0,-5.16041 4.18335,-9.34375 9.34375,-9.34375l18.6875,0m186.875,18.6875l-205.5625,0m-37.375,224.25l0,0c5.1604,0 9.34375,4.18335 9.34375,9.34375c0,5.1604 -4.18335,9.34375 -9.34375,9.34375l18.6875,0m-18.6875,18.6875l0,0c10.32081,0 18.6875,-8.36667 18.6875,-18.6875l0,-18.6875',
smiley: 'm68.49886,214.78838q81.06408,55.67332 161.93891,0m-144.36983,-109.9558c0,-8.60432 6.97517,-15.57949 15.57948,-15.57949c8.60431,0 15.57948,6.97517 15.57948,15.57949c0,8.60431 -6.97517,15.57947 -15.57948,15.57947c-8.60431,0 -15.57948,-6.97516 -15.57948,-15.57947m95.83109,0c0,-8.60432 6.97517,-15.57949 15.57948,-15.57949c8.60431,0 15.57947,6.97517 15.57947,15.57949c0,8.60431 -6.97516,15.57947 -15.57947,15.57947c-8.60429,0 -15.57948,-6.97516 -15.57948,-15.57947m-181.89903,44.73038l0,0c0,-82.60133 66.96162,-149.56296 149.56296,-149.56296c82.60135,0 149.56296,66.96162 149.56296,149.56296c0,82.60135 -66.96161,149.56296 -149.56296,149.56296c-82.60133,0 -149.56296,-66.96161 -149.56296,-149.56296zm0,0l0,0c0,-82.60133 66.96162,-149.56296 149.56296,-149.56296c82.60135,0 149.56296,66.96162 149.56296,149.56296c0,82.60135 -66.96161,149.56296 -149.56296,149.56296c-82.60133,0 -149.56296,-66.96161 -149.56296,-149.56296z',
left_braket: 'm174.24565,298.5c-13.39009,0 -24.24489,-1.80908 -24.24489,-4.04065l0,-140.4187c0,-2.23158 -10.85481,-4.04065 -24.2449,-4.04065l0,0c13.39009,0 24.2449,-1.80907 24.2449,-4.04065l0,-140.4187l0,0c0,-2.23159 10.8548,-4.04066 24.24489,-4.04066',
uml_actor: 'm40.5,100l219,0m-108.99991,94.00006l107,105m-107.00009,-106.00006l-100,106m99.5,-231l0,125m33.24219,-158.75781c0,18.35916 -14.88303,33.24219 -33.24219,33.24219c-18.35916,0 -33.2422,-14.88303 -33.2422,-33.24219c0.00002,-18.35915 14.88304,-33.24219 33.2422,-33.24219c18.35916,0 33.24219,14.88304 33.24219,33.24219z',
dialog_balloon_1: 'm0.99786,35.96579l0,0c0,-19.31077 15.28761,-34.96524 34.14583,-34.96524l15.52084,0l0,0l74.50001,0l139.68748,0c9.05606,0 17.74118,3.68382 24.14478,10.24108c6.40356,6.55726 10.00107,15.45081 10.00107,24.72416l0,87.41311l0,0l0,52.44785l0,0c0,19.31078 -15.2876,34.96524 -34.14584,34.96524l-139.68748,0l-97.32507,88.90848l22.82506,-88.90848l-15.52084,0c-18.85822,0 -34.14583,-15.65446 -34.14583,-34.96524l0,0l0,-52.44785l0,0z',
cloud: 'm182.05086,34.31005c-0.64743,0.02048 -1.27309,0.07504 -1.92319,0.13979c-10.40161,1.03605 -19.58215,7.63722 -24.24597,17.4734l-2.47269,7.44367c0.53346,-2.57959 1.35258,-5.08134 2.47269,-7.44367c-8.31731,-8.61741 -19.99149,-12.59487 -31.52664,-10.72866c-11.53516,1.8662 -21.55294,9.3505 -27.02773,20.19925c-15.45544,-9.51897 -34.72095,-8.94245 -49.62526,1.50272c-14.90431,10.44516 -22.84828,28.93916 -20.43393,47.59753l1.57977,7.58346c-0.71388,-2.48442 -1.24701,-5.01186 -1.57977,-7.58346l-0.2404,0.69894c-12.95573,1.4119 -23.58103,11.46413 -26.34088,24.91708c-2.75985,13.45294 2.9789,27.25658 14.21789,34.21291l17.54914,4.26352c-6.1277,0.50439 -12.24542,-0.9808 -17.54914,-4.26352c-8.66903,9.71078 -10.6639,24.08736 -4.94535,35.96027c5.71854,11.87289 17.93128,18.70935 30.53069,17.15887l7.65843,-2.02692c-2.46413,1.0314 -5.02329,1.70264 -7.65843,2.02692c7.15259,13.16728 19.01251,22.77237 32.93468,26.5945c13.92217,3.82214 28.70987,1.56322 41.03957,-6.25546c10.05858,15.86252 27.91113,24.19412 45.81322,21.38742c17.90208,-2.8067 32.66954,-16.26563 37.91438,-34.52742l1.82016,-10.20447c-0.27254,3.46677 -0.86394,6.87508 -1.82016,10.20447c12.31329,8.07489 27.80199,8.52994 40.52443,1.18819c12.72244,-7.34175 20.6609,-21.34155 20.77736,-36.58929l-4.56108,-22.7823l-17.96776,-15.41455c13.89359,8.70317 22.6528,21.96329 22.52884,38.19685c16.5202,0.17313 30.55292,-13.98268 36.84976,-30.22897c6.29684,-16.24631 3.91486,-34.76801 -6.2504,-48.68089c4.21637,-10.35873 3.96622,-22.14172 -0.68683,-32.29084c-4.65308,-10.14912 -13.23602,-17.69244 -23.55914,-20.65356c-2.31018,-13.45141 -11.83276,-24.27162 -24.41768,-27.81765c-12.58492,-3.54603 -25.98557,0.82654 -34.41142,11.25287l-5.11707,8.63186c1.30753,-3.12148 3.01521,-6.03101 5.11707,-8.63186c-5.93959,-8.19432 -15.2556,-12.8181 -24.96718,-12.51096z',
cylinder: 'm299.0007,83.77844c0,18.28676 -66.70958,33.11111 -149.00002,33.11111m149.00002,-33.11111l0,0c0,18.28676 -66.70958,33.11111 -149.00002,33.11111c-82.29041,0 -148.99997,-14.82432 -148.99997,-33.11111m0,0l0,0c0,-18.28674 66.70956,-33.1111 148.99997,-33.1111c82.29044,0 149.00002,14.82436 149.00002,33.1111l0,132.44449c0,18.28674 -66.70958,33.11105 -149.00002,33.11105c-82.29041,0 -148.99997,-14.82431 -148.99997,-33.11105z',
arrow_u_turn: 'm1.00059,299.00055l0,-167.62497l0,0c0,-72.00411 58.37087,-130.37499 130.375,-130.37499l0,0l0,0c34.57759,0 67.73898,13.7359 92.18906,38.18595c24.45006,24.45005 38.18593,57.61144 38.18593,92.18904l0,18.625l37.24997,0l-74.49995,74.50002l-74.50002,-74.50002l37.25,0l0,-18.625c0,-30.8589 -25.0161,-55.87498 -55.87498,-55.87498l0,0l0,0c-30.85892,0 -55.875,25.01608 -55.875,55.87498l0,167.62497z',
arrow_left_up: 'm0.99865,224.5l74.50004,-74.5l0,37.25l111.74991,0l0,-111.75l-37.25,0l74.5,-74.5l74.5,74.5l-37.25,0l0,186.25l-186.24989,0l0,37.25l-74.50005,-74.5z',
maximize: 'm1.00037,150.34581l55.30305,-55.30267l0,27.65093l22.17356,0l0,-44.21833l44.21825,0l0,-22.17357l-27.65095,0l55.30267,-55.30292l55.3035,55.30292l-27.65175,0l0,22.17357l44.21835,0l0,44.21833l22.17357,0l0,-27.65093l55.30345,55.30267l-55.30345,55.3035l0,-27.65175l-22.17357,0l0,44.21834l-44.21835,0l0,22.17355l27.65175,0l-55.3035,55.30348l-55.30267,-55.30348l27.65095,0l0,-22.17355l-44.21825,0l0,-44.21834l-22.17356,0l0,27.65175l-55.30305,-55.3035z',
cross: 'm0.99844,99.71339l98.71494,0l0,-98.71495l101.26279,0l0,98.71495l98.71495,0l0,101.2628l-98.71495,0l0,98.71494l-101.26279,0l0,-98.71494l-98.71494,0z',
plaque: 'm-0.00197,49.94376l0,0c27.5829,0 49.94327,-22.36036 49.94327,-49.94327l199.76709,0l0,0c0,27.5829 22.36037,49.94327 49.94325,49.94327l0,199.7671l0,0c-27.58289,0 -49.94325,22.36034 -49.94325,49.94325l-199.76709,0c0,-27.58292 -22.36037,-49.94325 -49.94327,-49.94325z',
page: 'm249.3298,298.99744l9.9335,-39.73413l39.73413,-9.93355l-49.66763,49.66768l-248.33237,0l0,-298.00001l298.00001,0l0,248.33234'
},
buttons: [
]
}
},
h = f.basic,
p = {
},
g = 'shapelib';
return {
svgicons: 'extensions/ext-shapes.xml',
buttons: [
{
id: 'tool_shapelib',
type: 'mode_flyout',
position: 6,
title: 'Shape library',
events: {
click: function () {
$('.tools_flyout').show(),
l.setMode('shapelib')
}
}
}
],
callback: function () {
var e = $('<div id="shape_buttons">');
$('#tools_shapelib > *').wrapAll(e);
var n = $('#tools_shapelib_show');
$('#tools_shapelib_show').attr('draggable', 'true'),
$('#tools_shapelib_show').addClass('toolStyle'),
$('#tools_shapelib_show').click(function () {
$('.tools_flyout').show(),
l.setMode('shapelib')
}),
$('#tools_shapelib_show').text('Shapes'),
t('basic'),
$('#shape_buttons').mouseup(function (e) {
var t = $(e.target).closest('div.tool_button');
if (t.length) {
var a = t.children().clone();
$('#tools_shapelib_show').text(''),
n.children(':not(.flyout_arrow_horiz)').remove(),
n.append(a).attr('data-curopt', '#' + t[0].id).mouseup(),
l.setMode(g),
i = t[0].id.substr((g + '_').length),
r = h.data[i],
$('.tools_flyout').hide()
}
});
var a = $('<div id="shape_cats">'),
o = '';
$.each(d, function (e, t) {
o += '<div data-cat=' + e + '>' + t + '</div>'
}),
a.html(o).children().bind('mouseup', function () {
var e = $(this);
return e.siblings().removeClass('current'),
e.addClass('current'),
t(e.attr('data-cat')),
$('#tools_shapelib_show').click(function () {
$('.tools_flyout').show(),
l.setMode('shapelib')
}),
!1
}),
a.children().eq(0).addClass('current'),
$('#tools_shapelib').prepend(a),
n.mouseup(function () {
l.setMode(r ? g : 'select')
}),
$('#tool_shapelib').remove();
var s = $('#tools_shapelib').height();
$('#tools_shapelib').css({
'margin-top': - (s / 2 - 15),
'margin-left': 26
})
},
mouseDown: function (e) {
var t = l.getMode();
if (t === g && r) {
p.x = e.event.clientX,
p.y = e.event.clientY,
e.event;
var n = o = e.start_x,
c = s = e.start_y;
return l.getStyle(),
a = l.addSvgElementFromJson({
element: 'path',
curStyles: !0,
attr: {
d: r,
id: l.getNextId()
}
}),
/[a-z]/.test(r) && (r = h.data[i] = l.pathActions.convertPath(a), a.setAttribute('d', r), l.pathActions.fixEnd(a)),
a.setAttribute('transform', 'translate(' + n + ',' + c + ') scale(0.005) translate(' + - n + ',' + - c + ')'),
l.recalculateDimensions(a),
l.getTransformList(a),
u = a.getBBox(),
{
started: !0
}
}
},
mouseMove: function (e) {
var t = l.getMode();
if (t === g && r) {
var n = l.getZoom(),
i = e.event,
d = e.mouse_x / n,
f = e.mouse_y / n,
h = l.getTransformList(a),
p = a.getBBox(),
v = p.x,
m = p.y,
y = p.width,
b = p.height,
x = d - o,
w = f - s,
k = {
x: Math.min(o, d),
y: Math.min(s, f),
width: Math.abs(d - o),
height: Math.abs(f - s)
},
S = 0,
_ = 0,
E = b ? (b + w) / b : 1,
A = y ? (y + x) / y : 1,
A = k.width / u.width,
E = k.height / u.height;
A = A || 1,
E = E || 1,
o > d && (S = u.width),
s > f && (_ = u.height);
var C = c.createSVGTransform(),
T = c.createSVGTransform(),
N = c.createSVGTransform();
if (C.setTranslate( - (v + S), - (m + _)), !i.shiftKey) {
var M = Math.min(Math.abs(A), Math.abs(E));
A = M * (0 > A ? - 1 : 1),
E = M * (0 > E ? - 1 : 1)
}
T.setScale(A, E),
N.setTranslate(v + S, m + _),
h.numberOfItems,
h.appendItem(N),
h.appendItem(T),
h.appendItem(C),
l.recalculateDimensions(a),
u = a.getBBox()
}
},
mouseUp: function (e) {
var t = l.getMode();
if (t === g && r) return keep = e.event.clientX != p.x && e.event.clientY != p.y,
{
keep: keep,
newElement: a,
started: !1
}
}
}
}),
function (e) {
e.alerts = {
verticalOffset: - 75,
horizontalOffset: 0,
repositionOnResize: !0,
okButton: '&nbsp;OK&nbsp;',
cancelButton: '&nbsp;Cancel&nbsp;',
dialogClass: null,
alert: function (t, n, r) {
r = r || 'Alert',
e.alerts._show(r, t, null, 'alert', function (e) {
n !== void 0 && n(e)
})
},
confirm: function (t, n) {
var r = 'Confirm';
e.alerts._show(r, t, null, 'confirm', function (e) {
n !== void 0 && n(e)
})
},
prompt: function (t, n, r) {
var i = 'Prompt';
e.alerts._show(i, t, n, 'prompt', function (e) {
r !== void 0 && r(e)
})
},
_show: function (t, n, r, i, a) {
switch (e.alerts._hide(), e.alerts._overlay('show'), e('BODY').append('<div id="popup_container"><h1 id="popup_title"></h1><div id="popup_content"><div id="popup_message"></div></div></div>'), e.alerts.dialogClass && e('#popup_container').addClass(e.alerts.dialogClass), e('#popup_container').css({
position: 'fixed',
zIndex: 99999
}), e('#popup_title').text(t), e('#popup_content').addClass(i), e('#popup_message').text(n), e('#popup_message').html(e('#popup_message').text().replace(/\n/g, '<br />')), e('#popup_container').css({
width: e('#popup_container').outerWidth()
}), e.alerts._reposition(), e.alerts._maintainPosition(!0), i) {
case 'alert':
e('#popup_message').after('<div id="popup_panel"><input type="button" value="Close" id="popup_ok" /></div>'),
e('#popup_ok').click(function () {
e.alerts._hide(),
a(!0)
}),
e('#popup_ok').focus().keypress(function (t) {
(13 == t.keyCode || 27 == t.keyCode) && e('#popup_ok').trigger('click')
});
break;
case 'confirm':
e('#popup_message').after('<div id="popup_panel"><input type="button" value="' + e.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + e.alerts.cancelButton + '" id="popup_cancel" /></div>'),
e('#popup_ok').click(function () {
e.alerts._hide(),
a !== void 0 && a(!0)
}),
e('#popup_cancel').click(function () {
e.alerts._hide(),
'undefined' != typeof cancel && cancel(!1)
}),
e('#popup_ok').focus(),
e('#popup_ok, #popup_cancel').keypress(function (t) {
13 == t.keyCode && e('#popup_ok').trigger('click'),
27 == t.keyCode && e('#popup_cancel').trigger('click')
});
break;
case 'prompt':
e('#popup_message').append('<br /><input type="text" size="30" id="popup_prompt" />').after('<div id="popup_panel"><input type="button" value="' + e.alerts.okButton + '" id="popup_ok" /> <input type="button" value="' + e.alerts.cancelButton + '" id="popup_cancel" /></div>'),
e('#popup_prompt').width(e('#popup_message').width()),
e('#popup_ok').click(function () {
var t = e('#popup_prompt').val();
e.alerts._hide(),
a !== void 0 && a(t)
}),
e('#popup_cancel').click(function () {
e.alerts._hide(),
'undefined' != typeof cancel && cancel(null)
}),
e('#popup_prompt, #popup_ok, #popup_cancel').keypress(function (t) {
13 == t.keyCode && e('#popup_ok').trigger('click'),
27 == t.keyCode && e('#popup_cancel').trigger('click')
}),
e('#popup_prompt').val(r),
e('#popup_prompt').focus().select()
}
},
_hide: function () {
e('#popup_container').remove(),
e.alerts._overlay('hide'),
e.alerts._maintainPosition(!1)
},
_overlay: function (t) {
switch (t) {
case 'show':
e.alerts._overlay('hide'),
e('BODY').append('<div id="popup_overlay"></div>'),
e('#popup_overlay').css({
position: 'absolute',
zIndex: 99998,
top: '0px',
left: '0px',
width: '100%',
height: e(document).height(),
background: e.alerts.overlayColor,
opacity: e.alerts.overlayOpacity
});
break;
case 'hide':
e('#popup_overlay').remove()
}
},
_reposition: function () {
var t = e(window).height() / 2 - e('#popup_container').outerHeight() / 2 + e.alerts.verticalOffset,
n = e(window).width() / 2 - e('#popup_container').outerWidth() / 2 + e.alerts.horizontalOffset;
0 > t && (t = 0),
0 > n && (n = 0),
e('#popup_container').css({
top: t + 'px',
left: n + 'px'
}),
e('#popup_overlay').height(e(document).height())
},
_maintainPosition: function (t) {
if (e.alerts.repositionOnResize) switch (t) {
case !0:
e(window).bind('resize', e.alerts._reposition);
break;
case !1:
e(window).unbind('resize', e.alerts._reposition)
}
}
},
jAlert = function (t, n) {
e.alerts.alert(t, n)
},
jConfirm = function (t, n, r) {
e.alerts.confirm(t, n, r)
},
jPrompt = function (t, n, r, i) {
e.alerts.prompt(t, n, r, i)
}
}(jQuery),
global = window.global || {
},
global.alert = jAlert,
global.prompt = jPrompt,
global.confirm = jConfirm;
var service;
window.analytics && (window.global.trackEvent = function (e) {
if (!service) {
service = analytics.getService('vector_paint');
var t = service.getTracker('UA-20045142-3');
t.sendAppView('MainView')
}
t.sendEvent(e, e)
});
var QUERY_PARAS = location.search.slice(1).split('&').map(function (e) {
return e.split('=')
}).filter(function (e) {
return e[1]
}).reduce(function (e, t) {
return e[t[0]] = t[1],
e
}, {
});
svgEditor.ready(function () {
QUERY_PARAS.url && svgEditor.loadFromURL(QUERY_PARAS.url)
});


