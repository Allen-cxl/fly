! function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var o = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(i, o, function (t) {
        return e[t]
      }.bind(null, o));
    return i
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 34)
}([function (e, t, n) {
  var i;
  /*!
   * jQuery JavaScript Library v3.5.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2020-05-04T22:49Z
   */
  ! function (t, n) {
    "use strict";
    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, (function (n, o) {
    "use strict";
    var r = [],
      s = Object.getPrototypeOf,
      a = r.slice,
      l = r.flat ? function (e) {
        return r.flat.call(e)
      } : function (e) {
        return r.concat.apply([], e)
      },
      c = r.push,
      u = r.indexOf,
      f = {},
      d = f.toString,
      h = f.hasOwnProperty,
      p = h.toString,
      m = p.call(Object),
      g = {},
      v = function (e) {
        return "function" == typeof e && "number" != typeof e.nodeType
      },
      y = function (e) {
        return null != e && e === e.window
      },
      b = n.document,
      _ = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

    function w(e, t, n) {
      var i, o, r = (n = n || b).createElement("script");
      if (r.text = e, t)
        for (i in _)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
      n.head.appendChild(r).parentNode.removeChild(r)
    }

    function x(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
    }
    var E = function (e, t) {
      return new E.fn.init(e, t)
    };

    function T(e) {
      var t = !!e && "length" in e && e.length,
        n = x(e);
      return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    E.fn = E.prototype = {
      jquery: "3.5.1",
      constructor: E,
      length: 0,
      toArray: function () {
        return a.call(this)
      },
      get: function (e) {
        return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
      },
      pushStack: function (e) {
        var t = E.merge(this.constructor(), e);
        return t.prevObject = this, t
      },
      each: function (e) {
        return E.each(this, e)
      },
      map: function (e) {
        return this.pushStack(E.map(this, (function (t, n) {
          return e.call(t, n, t)
        })))
      },
      slice: function () {
        return this.pushStack(a.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(E.grep(this, (function (e, t) {
          return (t + 1) % 2
        })))
      },
      odd: function () {
        return this.pushStack(E.grep(this, (function (e, t) {
          return t % 2
        })))
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: c,
      sort: r.sort,
      splice: r.splice
    }, E.extend = E.fn.extend = function () {
      var e, t, n, i, o, r, s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
          for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (E.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || E.isPlainObject(n) ? n : {}, o = !1, s[t] = E.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      return s
    }, E.extend({
      expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || "[object Object]" !== d.call(e)) && (!(t = s(e)) || "function" == typeof (n = h.call(t, "constructor") && t.constructor) && p.call(n) === m)
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      globalEval: function (e, t, n) {
        w(e, {
          nonce: t && t.nonce
        }, n)
      },
      each: function (e, t) {
        var n, i = 0;
        if (T(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (T(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return e.length = o, e
      },
      grep: function (e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
        return i
      },
      map: function (e, t, n) {
        var i, o, r = 0,
          s = [];
        if (T(e))
          for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
        else
          for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
        return l(s)
      },
      guid: 1,
      support: g
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = r[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
      f["[object " + t + "]"] = t.toLowerCase()
    }));
    var C =
      /*!
       * Sizzle CSS Selector Engine v2.3.5
       * https://sizzlejs.com/
       *
       * Copyright JS Foundation and other contributors
       * Released under the MIT license
       * https://js.foundation/
       *
       * Date: 2020-03-14
       */
      function (e) {
        var t, n, i, o, r, s, a, l, c, u, f, d, h, p, m, g, v, y, b, _ = "sizzle" + 1 * new Date,
          w = e.document,
          x = 0,
          E = 0,
          T = le(),
          C = le(),
          k = le(),
          S = le(),
          N = function (e, t) {
            return e === t && (f = !0), 0
          },
          D = {}.hasOwnProperty,
          A = [],
          O = A.pop,
          j = A.push,
          L = A.push,
          H = A.slice,
          I = function (e, t) {
            for (var n = 0, i = e.length; n < i; n++)
              if (e[n] === t) return n;
            return -1
          },
          M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          P = "[\\x20\\t\\r\\n\\f]",
          q = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          R = "\\[" + P + "*(" + q + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + P + "*\\]",
          F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
          B = new RegExp(P + "+", "g"),
          W = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
          z = new RegExp("^" + P + "*," + P + "*"),
          U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
          Q = new RegExp(P + "|>"),
          $ = new RegExp(F),
          V = new RegExp("^" + q + "$"),
          X = {
            ID: new RegExp("^#(" + q + ")"),
            CLASS: new RegExp("^\\.(" + q + ")"),
            TAG: new RegExp("^(" + q + "|[*])"),
            ATTR: new RegExp("^" + R),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + M + ")$", "i"),
            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
          },
          Y = /HTML$/i,
          K = /^(?:input|select|textarea|button)$/i,
          G = /^h\d$/i,
          J = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])", "g"),
          ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
          },
          ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          oe = function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          },
          re = function () {
            d()
          },
          se = _e((function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }), {
            dir: "parentNode",
            next: "legend"
          });
        try {
          L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
          L = {
            apply: A.length ? function (e, t) {
              j.apply(e, H.call(t))
            } : function (e, t) {
              for (var n = e.length, i = 0; e[n++] = t[i++];);
              e.length = n - 1
            }
          }
        }

        function ae(e, t, i, o) {
          var r, a, c, u, f, p, v, y = t && t.ownerDocument,
            w = t ? t.nodeType : 9;
          if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
          if (!o && (d(t), t = t || h, m)) {
            if (11 !== w && (f = Z.exec(e)))
              if (r = f[1]) {
                if (9 === w) {
                  if (!(c = t.getElementById(r))) return i;
                  if (c.id === r) return i.push(c), i
                } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
              } else {
                if (f[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                if ((r = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)), i
              } if (n.qsa && !S[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
              if (v = e, y = t, 1 === w && (Q.test(e) || U.test(e))) {
                for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = _)), a = (p = s(e)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                v = p.join(",")
              }
              try {
                return L.apply(i, y.querySelectorAll(v)), i
              } catch (t) {
                S(e, !0)
              } finally {
                u === _ && t.removeAttribute("id")
              }
            }
          }
          return l(e.replace(W, "$1"), t, i, o)
        }

        function le() {
          var e = [];
          return function t(n, o) {
            return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
          }
        }

        function ce(e) {
          return e[_] = !0, e
        }

        function ue(e) {
          var t = h.createElement("fieldset");
          try {
            return !!e(t)
          } catch (e) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function fe(e, t) {
          for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function de(e, t) {
          var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (i) return i;
          if (n)
            for (; n = n.nextSibling;)
              if (n === t) return -1;
          return e ? 1 : -1
        }

        function he(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }

        function pe(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function me(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
        }

        function ge(e) {
          return ce((function (t) {
            return t = +t, ce((function (n, i) {
              for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
            }))
          }))
        }

        function ve(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, r = ae.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
          }, d = ae.setDocument = function (e) {
            var t, o, s = e ? e.ownerDocument || e : w;
            return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, m = !r(h), w != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.scope = ue((function (e) {
              return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            })), n.attributes = ue((function (e) {
              return e.className = "i", !e.getAttribute("className")
            })), n.getElementsByTagName = ue((function (e) {
              return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
            })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function (e) {
              return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
            })), n.getById ? (i.filter.ID = function (e) {
              var t = e.replace(te, ne);
              return function (e) {
                return e.getAttribute("id") === t
              }
            }, i.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && m) {
                var n = t.getElementById(e);
                return n ? [n] : []
              }
            }) : (i.filter.ID = function (e) {
              var t = e.replace(te, ne);
              return function (e) {
                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                return n && n.value === t
              }
            }, i.find.ID = function (e, t) {
              if (void 0 !== t.getElementById && m) {
                var n, i, o, r = t.getElementById(e);
                if (r) {
                  if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                  for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                    if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                }
                return []
              }
            }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
              var n, i = [],
                o = 0,
                r = t.getElementsByTagName(e);
              if ("*" === e) {
                for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                return i
              }
              return r
            }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
              if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
            }, v = [], g = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function (e) {
              var t;
              p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]")
            })), ue((function (e) {
              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = h.createElement("input");
              t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
              n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F)
            })), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
              var n = 9 === e.nodeType ? e.documentElement : e,
                i = t && t.parentNode;
              return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
              if (t)
                for (; t = t.parentNode;)
                  if (t === e) return !0;
              return !1
            }, N = t ? function (e, t) {
              if (e === t) return f = !0, 0;
              var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
              return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
              if (e === t) return f = !0, 0;
              var n, i = 0,
                o = e.parentNode,
                r = t.parentNode,
                s = [e],
                a = [t];
              if (!o || !r) return e == h ? -1 : t == h ? 1 : o ? -1 : r ? 1 : u ? I(u, e) - I(u, t) : 0;
              if (o === r) return de(e, t);
              for (n = e; n = n.parentNode;) s.unshift(n);
              for (n = t; n = n.parentNode;) a.unshift(n);
              for (; s[i] === a[i];) i++;
              return i ? de(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
            }, h) : h
          }, ae.matches = function (e, t) {
            return ae(e, null, null, t)
          }, ae.matchesSelector = function (e, t) {
            if (d(e), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
              var i = y.call(e, t);
              if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {
              S(t, !0)
            }
            return ae(t, h, null, [e]).length > 0
          }, ae.contains = function (e, t) {
            return (e.ownerDocument || e) != h && d(e), b(e, t)
          }, ae.attr = function (e, t) {
            (e.ownerDocument || e) != h && d(e);
            var o = i.attrHandle[t.toLowerCase()],
              r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
            return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
          }, ae.escape = function (e) {
            return (e + "").replace(ie, oe)
          }, ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
          }, ae.uniqueSort = function (e) {
            var t, i = [],
              o = 0,
              r = 0;
            if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(N), f) {
              for (; t = e[r++];) t === e[r] && (o = i.push(r));
              for (; o--;) e.splice(i[o], 1)
            }
            return u = null, e
          }, o = ae.getText = function (e) {
            var t, n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
              } else if (3 === r || 4 === r) return e.nodeValue
            } else
              for (; t = e[i++];) n += o(t);
            return n
          }, (i = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
              ">": {
                dir: "parentNode",
                first: !0
              },
              " ": {
                dir: "parentNode"
              },
              "+": {
                dir: "previousSibling",
                first: !0
              },
              "~": {
                dir: "previousSibling"
              }
            },
            preFilter: {
              ATTR: function (e) {
                return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
              },
              CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
              },
              PSEUDO: function (e) {
                var t, n = !e[6] && e[2];
                return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
              }
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e ? function () {
                  return !0
                } : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
              },
              CLASS: function (e) {
                var t = T[e + " "];
                return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && T(e, (function (e) {
                  return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                }))
              },
              ATTR: function (e, t, n) {
                return function (i) {
                  var o = ae.attr(i, e);
                  return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                }
              },
              CHILD: function (e, t, n, i, o) {
                var r = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === o ? function (e) {
                  return !!e.parentNode
                } : function (t, n, l) {
                  var c, u, f, d, h, p, m = r !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    b = !1;
                  if (g) {
                    if (r) {
                      for (; m;) {
                        for (d = t; d = d[m];)
                          if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                        p = m = "only" === e && !p && "nextSibling"
                      }
                      return !0
                    }
                    if (p = [s ? g.firstChild : g.lastChild], s && y) {
                      for (b = (h = (c = (u = (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = h && g.childNodes[h]; d = ++h && d && d[m] || (b = h = 0) || p.pop();)
                        if (1 === d.nodeType && ++b && d === t) {
                          u[e] = [x, h, b];
                          break
                        }
                    } else if (y && (b = h = (c = (u = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b)
                      for (;
                        (d = ++h && d && d[m] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t)););
                    return (b -= o) === i || b % i == 0 && b / i >= 0
                  }
                }
              },
              PSEUDO: function (e, t) {
                var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                return o[_] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                  for (var i, r = o(e, t), s = r.length; s--;) e[i = I(e, r[s])] = !(n[i] = r[s])
                })) : function (e) {
                  return o(e, 0, n)
                }) : o
              }
            },
            pseudos: {
              not: ce((function (e) {
                var t = [],
                  n = [],
                  i = a(e.replace(W, "$1"));
                return i[_] ? ce((function (e, t, n, o) {
                  for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                })) : function (e, o, r) {
                  return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                }
              })),
              has: ce((function (e) {
                return function (t) {
                  return ae(e, t).length > 0
                }
              })),
              contains: ce((function (e) {
                return e = e.replace(te, ne),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1
                  }
              })),
              lang: ce((function (e) {
                return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                  function (t) {
                    var n;
                    do {
                      if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1
                  }
              })),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
              },
              root: function (e) {
                return e === p
              },
              focus: function (e) {
                return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
              },
              enabled: me(!1),
              disabled: me(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
              },
              selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0
              },
              parent: function (e) {
                return !i.pseudos.empty(e)
              },
              header: function (e) {
                return G.test(e.nodeName)
              },
              input: function (e) {
                return K.test(e.nodeName)
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
              },
              text: function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
              },
              first: ge((function () {
                return [0]
              })),
              last: ge((function (e, t) {
                return [t - 1]
              })),
              eq: ge((function (e, t, n) {
                return [n < 0 ? n + t : n]
              })),
              even: ge((function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e
              })),
              odd: ge((function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e
              })),
              lt: ge((function (e, t, n) {
                for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                return e
              })),
              gt: ge((function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                return e
              }))
            }
          }).pseudos.nth = i.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
          }) i.pseudos[t] = he(t);
        for (t in {
            submit: !0,
            reset: !0
          }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i
        }

        function _e(e, t, n) {
          var i = t.dir,
            o = t.next,
            r = o || i,
            s = n && "parentNode" === r,
            a = E++;
          return t.first ? function (t, n, o) {
            for (; t = t[i];)
              if (1 === t.nodeType || s) return e(t, n, o);
            return !1
          } : function (t, n, l) {
            var c, u, f, d = [x, a];
            if (l) {
              for (; t = t[i];)
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0
            } else
              for (; t = t[i];)
                if (1 === t.nodeType || s)
                  if (u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                  else {
                    if ((c = u[r]) && c[0] === x && c[1] === a) return d[2] = c[2];
                    if (u[r] = d, d[2] = e(t, n, l)) return !0
                  } return !1
          }
        }

        function we(e) {
          return e.length > 1 ? function (t, n, i) {
            for (var o = e.length; o--;)
              if (!e[o](t, n, i)) return !1;
            return !0
          } : e[0]
        }

        function xe(e, t, n, i, o) {
          for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
          return s
        }

        function Ee(e, t, n, i, o, r) {
          return i && !i[_] && (i = Ee(i)), o && !o[_] && (o = Ee(o, r)), ce((function (r, s, a, l) {
            var c, u, f, d = [],
              h = [],
              p = s.length,
              m = r || function (e, t, n) {
                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                return n
              }(t || "*", a.nodeType ? [a] : a, []),
              g = !e || !r && t ? m : xe(m, d, e, a, l),
              v = n ? o || (r ? e : p || i) ? [] : s : g;
            if (n && n(g, v, a, l), i)
              for (c = xe(v, h), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[h[u]] = !(g[h[u]] = f));
            if (r) {
              if (o || e) {
                if (o) {
                  for (c = [], u = v.length; u--;)(f = v[u]) && c.push(g[u] = f);
                  o(null, v = [], c, l)
                }
                for (u = v.length; u--;)(f = v[u]) && (c = o ? I(r, f) : d[u]) > -1 && (r[c] = !(s[c] = f))
              }
            } else v = xe(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : L.apply(s, v)
          }))
        }

        function Te(e) {
          for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function (e) {
              return e === t
            }), a, !0), f = _e((function (e) {
              return I(t, e) > -1
            }), a, !0), d = [function (e, n, i) {
              var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
              return t = null, o
            }]; l < r; l++)
            if (n = i.relative[e[l].type]) d = [_e(we(d), n)];
            else {
              if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                return Ee(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({
                  value: " " === e[l - 2].type ? "*" : ""
                })).replace(W, "$1"), n, l < o && Te(e.slice(l, o)), o < r && Te(e = e.slice(o)), o < r && be(e))
              }
              d.push(n)
            } return we(d)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
          var n, o, r, s, a, l, c, u = C[e + " "];
          if (u) return t ? 0 : u.slice(0);
          for (a = e, l = [], c = i.preFilter; a;) {
            for (s in n && !(o = z.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = U.exec(a)) && (n = o.shift(), r.push({
                value: n,
                type: o[0].replace(W, " ")
              }), a = a.slice(n.length)), i.filter) !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
              value: n,
              type: s,
              matches: o
            }), a = a.slice(n.length));
            if (!n) break
          }
          return t ? a.length : a ? ae.error(e) : C(e, l).slice(0)
        }, a = ae.compile = function (e, t) {
          var n, o = [],
            r = [],
            a = k[e + " "];
          if (!a) {
            for (t || (t = s(e)), n = t.length; n--;)(a = Te(t[n]))[_] ? o.push(a) : r.push(a);
            (a = k(e, function (e, t) {
              var n = t.length > 0,
                o = e.length > 0,
                r = function (r, s, a, l, u) {
                  var f, p, g, v = 0,
                    y = "0",
                    b = r && [],
                    _ = [],
                    w = c,
                    E = r || o && i.find.TAG("*", u),
                    T = x += null == w ? 1 : Math.random() || .1,
                    C = E.length;
                  for (u && (c = s == h || s || u); y !== C && null != (f = E[y]); y++) {
                    if (o && f) {
                      for (p = 0, s || f.ownerDocument == h || (d(f), a = !m); g = e[p++];)
                        if (g(f, s || h, a)) {
                          l.push(f);
                          break
                        } u && (x = T)
                    }
                    n && ((f = !g && f) && v--, r && b.push(f))
                  }
                  if (v += y, n && y !== v) {
                    for (p = 0; g = t[p++];) g(b, _, s, a);
                    if (r) {
                      if (v > 0)
                        for (; y--;) b[y] || _[y] || (_[y] = O.call(l));
                      _ = xe(_)
                    }
                    L.apply(l, _), u && !r && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                  }
                  return u && (x = T, c = w), b
                };
              return n ? ce(r) : r
            }(r, o))).selector = e
          }
          return a
        }, l = ae.select = function (e, t, n, o) {
          var r, l, c, u, f, d = "function" == typeof e && e,
            h = !o && s(e = d.selector || e);
          if (n = n || [], 1 === h.length) {
            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
              if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
              d && (t = t.parentNode), e = e.slice(l.shift().value.length)
            }
            for (r = X.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
              if ((f = i.find[u]) && (o = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                if (l.splice(r, 1), !(e = o.length && be(l))) return L.apply(n, o), n;
                break
              }
          }
          return (d || a(e, h))(o, t, !m, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = _.split("").sort(N).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function (e) {
          return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
        })), ue((function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        })) || fe("type|href|height|width", (function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        })), n.attributes && ue((function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        })) || fe("value", (function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        })), ue((function (e) {
          return null == e.getAttribute("disabled")
        })) || fe(M, (function (e, t, n) {
          var i;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        })), ae
      }(n);
    E.find = C, E.expr = C.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = C.uniqueSort, E.text = C.getText, E.isXMLDoc = C.isXML, E.contains = C.contains, E.escapeSelector = C.escape;
    var k = function (e, t, n) {
        for (var i = [], o = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (o && E(e).is(n)) break;
            i.push(e)
          } return i
      },
      S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      N = E.expr.match.needsContext;

    function D(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function O(e, t, n) {
      return v(t) ? E.grep(e, (function (e, i) {
        return !!t.call(e, i, e) !== n
      })) : t.nodeType ? E.grep(e, (function (e) {
        return e === t !== n
      })) : "string" != typeof t ? E.grep(e, (function (e) {
        return u.call(t, e) > -1 !== n
      })) : E.filter(t, e, n)
    }
    E.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, (function (e) {
        return 1 === e.nodeType
      })))
    }, E.fn.extend({
      find: function (e) {
        var t, n, i = this.length,
          o = this;
        if ("string" != typeof e) return this.pushStack(E(e).filter((function () {
          for (t = 0; t < i; t++)
            if (E.contains(o[t], this)) return !0
        })));
        for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, o[t], n);
        return i > 1 ? E.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(O(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(O(this, e || [], !0))
      },
      is: function (e) {
        return !!O(this, "string" == typeof e && N.test(e) ? E(e) : e || [], !1).length
      }
    });
    var j, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, n) {
      var i, o;
      if (!e) return this;
      if (n = n || j, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), A.test(i[1]) && E.isPlainObject(t))
            for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this
      }
      return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, j = E(b);
    var H = /^(?:parents|prev(?:Until|All))/,
      I = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

    function M(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }
    E.fn.extend({
      has: function (e) {
        var t = E(e, this),
          n = t.length;
        return this.filter((function () {
          for (var e = 0; e < n; e++)
            if (E.contains(this, t[e])) return !0
        }))
      },
      closest: function (e, t) {
        var n, i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && E(e);
        if (!N.test(e))
          for (; i < o; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                r.push(n);
                break
              } return this.pushStack(r.length > 1 ? E.uniqueSort(r) : r)
      },
      index: function (e) {
        return e ? "string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (e, t) {
        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), E.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function (e) {
        return k(e, "parentNode")
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n)
      },
      next: function (e) {
        return M(e, "nextSibling")
      },
      prev: function (e) {
        return M(e, "previousSibling")
      },
      nextAll: function (e) {
        return k(e, "nextSibling")
      },
      prevAll: function (e) {
        return k(e, "previousSibling")
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n)
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n)
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e)
      },
      children: function (e) {
        return S(e.firstChild)
      },
      contents: function (e) {
        return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
      }
    }, (function (e, t) {
      E.fn[e] = function (n, i) {
        var o = E.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = E.filter(i, o)), this.length > 1 && (I[e] || E.uniqueSort(o), H.test(e) && o.reverse()), this.pushStack(o)
      }
    }));
    var P = /[^\x20\t\r\n\f]+/g;

    function q(e) {
      return e
    }

    function R(e) {
      throw e
    }

    function F(e, t, n, i) {
      var o;
      try {
        e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
      } catch (e) {
        n.apply(void 0, [e])
      }
    }
    E.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return E.each(e.match(P) || [], (function (e, n) {
          t[n] = !0
        })), t
      }(e) : E.extend({}, e);
      var t, n, i, o, r = [],
        s = [],
        a = -1,
        l = function () {
          for (o = o || e.once, i = t = !0; s.length; a = -1)
            for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
          e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
        },
        c = {
          add: function () {
            return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
              E.each(n, (function (n, i) {
                v(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== x(i) && t(i)
              }))
            }(arguments), n && !t && l()), this
          },
          remove: function () {
            return E.each(arguments, (function (e, t) {
              for (var n;
                (n = E.inArray(t, r, n)) > -1;) r.splice(n, 1), n <= a && a--
            })), this
          },
          has: function (e) {
            return e ? E.inArray(e, r) > -1 : r.length > 0
          },
          empty: function () {
            return r && (r = []), this
          },
          disable: function () {
            return o = s = [], r = n = "", this
          },
          disabled: function () {
            return !r
          },
          lock: function () {
            return o = s = [], n || t || (r = n = ""), this
          },
          locked: function () {
            return !!o
          },
          fireWith: function (e, n) {
            return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
          },
          fire: function () {
            return c.fireWith(this, arguments), this
          },
          fired: function () {
            return !!i
          }
        };
      return c
    }, E.extend({
      Deferred: function (e) {
        var t = [
            ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
            ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
          ],
          i = "pending",
          o = {
            state: function () {
              return i
            },
            always: function () {
              return r.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return o.then(null, e)
            },
            pipe: function () {
              var e = arguments;
              return E.Deferred((function (n) {
                E.each(t, (function (t, i) {
                  var o = v(e[i[4]]) && e[i[4]];
                  r[i[1]]((function () {
                    var e = o && o.apply(this, arguments);
                    e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [e] : arguments)
                  }))
                })), e = null
              })).promise()
            },
            then: function (e, i, o) {
              var r = 0;

              function s(e, t, i, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var n, c;
                      if (!(e < r)) {
                        if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                        c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? o ? c.call(n, s(r, t, q, o), s(r, t, R, o)) : (r++, c.call(n, s(r, t, q, o), s(r, t, R, o), s(r, t, q, t.notifyWith))) : (i !== q && (a = void 0, l = [n]), (o || t.resolveWith)(a, l))
                      }
                    },
                    u = o ? c : function () {
                      try {
                        c()
                      } catch (n) {
                        E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= r && (i !== R && (a = void 0, l = [n]), t.rejectWith(a, l))
                      }
                    };
                  e ? u() : (E.Deferred.getStackHook && (u.stackTrace = E.Deferred.getStackHook()), n.setTimeout(u))
                }
              }
              return E.Deferred((function (n) {
                t[0][3].add(s(0, n, v(o) ? o : q, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : q)), t[2][3].add(s(0, n, v(i) ? i : R))
              })).promise()
            },
            promise: function (e) {
              return null != e ? E.extend(e, o) : o
            }
          },
          r = {};
        return E.each(t, (function (e, n) {
          var s = n[2],
            a = n[5];
          o[n[1]] = s.add, a && s.add((function () {
            i = a
          }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(n[3].fire), r[n[0]] = function () {
            return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
          }, r[n[0] + "With"] = s.fireWith
        })), o.promise(r), e && e.call(r, r), r
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = a.call(arguments),
          r = E.Deferred(),
          s = function (e) {
            return function (n) {
              i[e] = this, o[e] = arguments.length > 1 ? a.call(arguments) : n, --t || r.resolveWith(i, o)
            }
          };
        if (t <= 1 && (F(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
        for (; n--;) F(o[n], s(n), r.reject);
        return r.promise()
      }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
      n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function (e) {
      n.setTimeout((function () {
        throw e
      }))
    };
    var W = E.Deferred();

    function z() {
      b.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), E.ready()
    }
    E.fn.ready = function (e) {
      return W.then(e).catch((function (e) {
        E.readyException(e)
      })), this
    }, E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || W.resolveWith(b, [E]))
      }
    }), E.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
    var U = function (e, t, n, i, o, r, s) {
        var a = 0,
          l = e.length,
          c = null == n;
        if ("object" === x(n))
          for (a in o = !0, n) U(e, t, a, n[a], !0, r, s);
        else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
            return c.call(E(e), n)
          })), t))
          for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
      },
      Q = /^-ms-/,
      $ = /-([a-z])/g;

    function V(e, t) {
      return t.toUpperCase()
    }

    function X(e) {
      return e.replace(Q, "ms-").replace($, V)
    }
    var Y = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function K() {
      this.expando = E.expando + K.uid++
    }
    K.uid = 1, K.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function (e, t, n) {
        var i, o = this.cache(e);
        if ("string" == typeof t) o[X(t)] = n;
        else
          for (i in t) o[X(i)] = t[i];
        return o
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n, i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(P) || []).length;
            for (; n--;) delete i[t[n]]
          }(void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t)
      }
    };
    var G = new K,
      J = new K,
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

    function te(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
            }(n)
          } catch (e) {}
          J.set(e, t, n)
        } else n = void 0;
      return n
    }
    E.extend({
      hasData: function (e) {
        return J.hasData(e) || G.hasData(e)
      },
      data: function (e, t, n) {
        return J.access(e, t, n)
      },
      removeData: function (e, t) {
        J.remove(e, t)
      },
      _data: function (e, t, n) {
        return G.access(e, t, n)
      },
      _removeData: function (e, t) {
        G.remove(e, t)
      }
    }), E.fn.extend({
      data: function (e, t) {
        var n, i, o, r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (o = J.get(r), 1 === r.nodeType && !G.get(r, "hasDataAttrs"))) {
            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = X(i.slice(5)), te(r, i, o[i]));
            G.set(r, "hasDataAttrs", !0)
          }
          return o
        }
        return "object" == typeof e ? this.each((function () {
          J.set(this, e)
        })) : U(this, (function (t) {
          var n;
          if (r && void 0 === t) return void 0 !== (n = J.get(r, e)) || void 0 !== (n = te(r, e)) ? n : void 0;
          this.each((function () {
            J.set(this, e, t)
          }))
        }), null, t, arguments.length > 1, null, !0)
      },
      removeData: function (e) {
        return this.each((function () {
          J.remove(this, e)
        }))
      }
    }), E.extend({
      queue: function (e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = G.get(e, t), n && (!i || Array.isArray(n) ? i = G.access(e, t, E.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = E._queueHooks(e, t);
        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function () {
          E.dequeue(e, t)
        }), r)), !i && r && r.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return G.get(e, n) || G.access(e, n, {
          empty: E.Callbacks("once memory").add((function () {
            G.remove(e, [t + "queue", n])
          }))
        })
      }
    }), E.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () {
          var n = E.queue(this, e, t);
          E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
        }))
      },
      dequeue: function (e) {
        return this.each((function () {
          E.dequeue(this, e)
        }))
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", [])
      },
      promise: function (e, t) {
        var n, i = 1,
          o = E.Deferred(),
          r = this,
          s = this.length,
          a = function () {
            --i || o.resolveWith(r, [r])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = G.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
        return a(), o.promise(t)
      }
    });
    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      re = b.documentElement,
      se = function (e) {
        return E.contains(e.ownerDocument, e)
      },
      ae = {
        composed: !0
      };
    re.getRootNode && (se = function (e) {
      return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var le = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && se(e) && "none" === E.css(e, "display")
    };

    function ce(e, t, n, i) {
      var o, r, s = 20,
        a = i ? function () {
          return i.cur()
        } : function () {
          return E.css(e, t, "")
        },
        l = a(),
        c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
        u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && ie.exec(E.css(e, t));
      if (u && u[3] !== c) {
        for (l /= 2, c = c || u[3], u = +l || 1; s--;) E.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
        u *= 2, E.style(e, t, u + c), n = n || []
      }
      return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var ue = {};

    function fe(e) {
      var t, n = e.ownerDocument,
        i = e.nodeName,
        o = ue[i];
      return o || (t = n.body.appendChild(n.createElement(i)), o = E.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), ue[i] = o, o)
    }

    function de(e, t) {
      for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = G.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && le(i) && (o[r] = fe(i))) : "none" !== n && (o[r] = "none", G.set(i, "display", n)));
      for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
      return e
    }
    E.fn.extend({
      show: function () {
        return de(this, !0)
      },
      hide: function () {
        return de(this)
      },
      toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
          le(this) ? E(this).show() : E(this).hide()
        }))
      }
    });
    var he, pe, me = /^(?:checkbox|radio)$/i,
      ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      ve = /^$|^module$|\/(?:java|ecma)script/i;
    he = b.createDocumentFragment().appendChild(b.createElement("div")), (pe = b.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), he.appendChild(pe), g.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked, he.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue, he.innerHTML = "<option></option>", g.option = !!he.lastChild;
    var ye = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var n;
      return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? E.merge([e], n) : n
    }

    function _e(e, t) {
      for (var n = 0, i = e.length; n < i; n++) G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td, g.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
    var we = /<|&#?\w+;/;

    function xe(e, t, n, i, o) {
      for (var r, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
        if ((r = e[h]) || 0 === r)
          if ("object" === x(r)) E.merge(d, r.nodeType ? [r] : r);
          else if (we.test(r)) {
        for (s = s || f.appendChild(t.createElement("div")), a = (ge.exec(r) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, s.innerHTML = l[1] + E.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
        E.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
      } else d.push(t.createTextNode(r));
      for (f.textContent = "", h = 0; r = d[h++];)
        if (i && E.inArray(r, i) > -1) o && o.push(r);
        else if (c = se(r), s = be(f.appendChild(r), "script"), c && _e(s), n)
        for (u = 0; r = s[u++];) ve.test(r.type || "") && n.push(r);
      return f
    }
    var Ee = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
      return !0
    }

    function Se() {
      return !1
    }

    function Ne(e, t) {
      return e === function () {
        try {
          return b.activeElement
        } catch (e) {}
      }() == ("focus" === t)
    }

    function De(e, t, n, i, o, r) {
      var s, a;
      if ("object" == typeof t) {
        for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], r);
        return e
      }
      if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Se;
      else if (!o) return e;
      return 1 === r && (s = o, (o = function (e) {
        return E().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = E.guid++)), e.each((function () {
        E.event.add(this, t, o, i, n)
      }))
    }

    function Ae(e, t, n) {
      n ? (G.set(e, t, !1), E.event.add(e, t, {
        namespace: !1,
        handler: function (e) {
          var i, o, r = G.get(this, t);
          if (1 & e.isTrigger && this[t]) {
            if (r.length)(E.event.special[t] || {}).delegateType && e.stopPropagation();
            else if (r = a.call(arguments), G.set(this, t, r), i = n(this, t), this[t](), r !== (o = G.get(this, t)) || i ? G.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
          } else r.length && (G.set(this, t, {
            value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
          }), e.stopImmediatePropagation())
        }
      })) : void 0 === G.get(e, t) && E.event.add(e, t, ke)
    }
    E.event = {
      global: {},
      add: function (e, t, n, i, o) {
        var r, s, a, l, c, u, f, d, h, p, m, g = G.get(e);
        if (Y(e))
          for (n.handler && (n = (r = n).handler, o = r.selector), o && E.find.matchesSelector(re, o), n.guid || (n.guid = E.guid++), (l = g.events) || (l = g.events = Object.create(null)), (s = g.handle) || (s = g.handle = function (t) {
              return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
            }), c = (t = (t || "").match(P) || [""]).length; c--;) h = m = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = E.event.special[h] || {}, h = (o ? f.delegateType : f.bindType) || h, f = E.event.special[h] || {}, u = E.extend({
            type: h,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: o,
            needsContext: o && E.expr.match.needsContext.test(o),
            namespace: p.join(".")
          }, r), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), E.event.global[h] = !0)
      },
      remove: function (e, t, n, i, o) {
        var r, s, a, l, c, u, f, d, h, p, m, g = G.hasData(e) && G.get(e);
        if (g && (l = g.events)) {
          for (c = (t = (t || "").match(P) || [""]).length; c--;)
            if (h = m = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
              for (f = E.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) u = d[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
              s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || E.removeEvent(e, h, g.handle), delete l[h])
            } else
              for (h in l) E.event.remove(e, h + t[c], n, i, !0);
          E.isEmptyObject(l) && G.remove(e, "handle events")
        }
      },
      dispatch: function (e) {
        var t, n, i, o, r, s, a = new Array(arguments.length),
          l = E.event.fix(e),
          c = (G.get(this, "events") || Object.create(null))[l.type] || [],
          u = E.event.special[l.type] || {};
        for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
        if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
          for (s = E.event.handlers.call(this, l, c), t = 0;
            (o = s[t++]) && !l.isPropagationStopped();)
            for (l.currentTarget = o.elem, n = 0;
              (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((E.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, l), l.result
        }
      },
      handlers: function (e, t) {
        var n, i, o, r, s, a = [],
          l = t.delegateCount,
          c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1))
          for (; c !== this; c = c.parentNode || this)
            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
              for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? E(o, this).index(c) > -1 : E.find(o, this, null, [c]).length), s[o] && r.push(i);
              r.length && a.push({
                elem: c,
                handlers: r
              })
            } return c = this, l < t.length && a.push({
          elem: c,
          handlers: t.slice(l)
        }), a
      },
      addProp: function (e, t) {
        Object.defineProperty(E.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: v(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent)
          } : function () {
            if (this.originalEvent) return this.originalEvent[e]
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            })
          }
        })
      },
      fix: function (e) {
        return e[E.expando] ? e : new E.Event(e)
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function (e) {
            var t = this || e;
            return me.test(t.type) && t.click && D(t, "input") && Ae(t, "click", ke), !1
          },
          trigger: function (e) {
            var t = this || e;
            return me.test(t.type) && t.click && D(t, "input") && Ae(t, "click"), !0
          },
          _default: function (e) {
            var t = e.target;
            return me.test(t.type) && t.click && D(t, "input") && G.get(t, "click") || D(t, "a")
          }
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: Se,
      isPropagationStopped: Se,
      isImmediatePropagationStopped: Se,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, E.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (e) {
        var t = e.button;
        return null == e.which && Ee.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
      }
    }, E.event.addProp), E.each({
      focus: "focusin",
      blur: "focusout"
    }, (function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return Ae(this, e, Ne), !1
        },
        trigger: function () {
          return Ae(this, e), !0
        },
        delegateType: t
      }
    })), E.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, (function (e, t) {
      E.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function (e) {
          var n, i = this,
            o = e.relatedTarget,
            r = e.handleObj;
          return o && (o === i || E.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
        }
      }
    })), E.fn.extend({
      on: function (e, t, n, i) {
        return De(this, e, t, n, i)
      },
      one: function (e, t, n, i) {
        return De(this, e, t, n, i, 1)
      },
      off: function (e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each((function () {
          E.event.remove(this, e, n, t)
        }))
      }
    });
    var Oe = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function He(e, t) {
      return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function Ie(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
      var n, i, o, r, s, a;
      if (1 === t.nodeType) {
        if (G.hasData(e) && (a = G.get(e).events))
          for (o in G.remove(t, "handle events"), a)
            for (n = 0, i = a[o].length; n < i; n++) E.event.add(t, o, a[o][n]);
        J.hasData(e) && (r = J.access(e), s = E.extend({}, r), J.set(t, s))
      }
    }

    function qe(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, i) {
      t = l(t);
      var o, r, s, a, c, u, f = 0,
        d = e.length,
        h = d - 1,
        p = t[0],
        m = v(p);
      if (m || d > 1 && "string" == typeof p && !g.checkClone && je.test(p)) return e.each((function (o) {
        var r = e.eq(o);
        m && (t[0] = p.call(this, o, r.html())), Re(r, t, n, i)
      }));
      if (d && (r = (o = xe(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
        for (a = (s = E.map(be(o, "script"), Ie)).length; f < d; f++) c = o, f !== h && (c = E.clone(c, !0, !0), a && E.merge(s, be(c, "script"))), n.call(e[f], c, f);
        if (a)
          for (u = s[s.length - 1].ownerDocument, E.map(s, Me), f = 0; f < a; f++) c = s[f], ve.test(c.type || "") && !G.access(c, "globalEval") && E.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
            nonce: c.nonce || c.getAttribute("nonce")
          }, u) : w(c.textContent.replace(Le, ""), c, u))
      }
      return e
    }

    function Fe(e, t, n) {
      for (var i, o = t ? E.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || E.cleanData(be(i)), i.parentNode && (n && se(i) && _e(be(i, "script")), i.parentNode.removeChild(i));
      return e
    }
    E.extend({
      htmlPrefilter: function (e) {
        return e
      },
      clone: function (e, t, n) {
        var i, o, r, s, a = e.cloneNode(!0),
          l = se(e);
        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
          for (s = be(a), i = 0, o = (r = be(e)).length; i < o; i++) qe(r[i], s[i]);
        if (t)
          if (n)
            for (r = r || be(e), s = s || be(a), i = 0, o = r.length; i < o; i++) Pe(r[i], s[i]);
          else Pe(e, a);
        return (s = be(a, "script")).length > 0 && _e(s, !l && be(e, "script")), a
      },
      cleanData: function (e) {
        for (var t, n, i, o = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
          if (Y(n)) {
            if (t = n[G.expando]) {
              if (t.events)
                for (i in t.events) o[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
              n[G.expando] = void 0
            }
            n[J.expando] && (n[J.expando] = void 0)
          }
      }
    }), E.fn.extend({
      detach: function (e) {
        return Fe(this, e, !0)
      },
      remove: function (e) {
        return Fe(this, e)
      },
      text: function (e) {
        return U(this, (function (e) {
          return void 0 === e ? E.text(this) : this.empty().each((function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          }))
        }), null, e, arguments.length)
      },
      append: function () {
        return Re(this, arguments, (function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || He(this, e).appendChild(e)
        }))
      },
      prepend: function () {
        return Re(this, arguments, (function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = He(this, e);
            t.insertBefore(e, t.firstChild)
          }
        }))
      },
      before: function () {
        return Re(this, arguments, (function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        }))
      },
      after: function () {
        return Re(this, arguments, (function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        }))
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
        return this
      },
      clone: function (e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map((function () {
          return E.clone(this, e, t)
        }))
      },
      html: function (e) {
        return U(this, (function (e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !Oe.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = E.htmlPrefilter(e);
            try {
              for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }), null, e, arguments.length)
      },
      replaceWith: function () {
        var e = [];
        return Re(this, arguments, (function (t) {
          var n = this.parentNode;
          E.inArray(this, e) < 0 && (E.cleanData(be(this)), n && n.replaceChild(t, this))
        }), e)
      }
    }), E.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, (function (e, t) {
      E.fn[e] = function (e) {
        for (var n, i = [], o = E(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), E(o[s])[t](n), c.apply(i, n.get());
        return this.pushStack(i)
      }
    }));
    var Be = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
      We = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      ze = function (e, t, n) {
        var i, o, r = {};
        for (o in t) r[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.call(e), t) e.style[o] = r[o];
        return i
      },
      Ue = new RegExp(oe.join("|"), "i");

    function Qe(e, t, n) {
      var i, o, r, s, a = e.style;
      return (n = n || We(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || se(e) || (s = E.style(e, t)), !g.pixelBoxStyles() && Be.test(s) && Ue.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function $e(e, t) {
      return {
        get: function () {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get
        }
      }
    }! function () {
      function e() {
        if (u) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(u);
          var e = n.getComputedStyle(u);
          i = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), o = 36 === t(e.width), u.style.position = "absolute", r = 12 === t(u.offsetWidth / 3), re.removeChild(c), u = null
        }
      }

      function t(e) {
        return Math.round(parseFloat(e))
      }
      var i, o, r, s, a, l, c = b.createElement("div"),
        u = b.createElement("div");
      u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === u.style.backgroundClip, E.extend(g, {
        boxSizingReliable: function () {
          return e(), o
        },
        pixelBoxStyles: function () {
          return e(), s
        },
        pixelPosition: function () {
          return e(), i
        },
        reliableMarginLeft: function () {
          return e(), l
        },
        scrollboxSize: function () {
          return e(), r
        },
        reliableTrDimensions: function () {
          var e, t, i, o;
          return null == a && (e = b.createElement("table"), t = b.createElement("tr"), i = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", i.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(i), o = n.getComputedStyle(t), a = parseInt(o.height) > 3, re.removeChild(e)), a
        }
      }))
    }();
    var Ve = ["Webkit", "Moz", "ms"],
      Xe = b.createElement("div").style,
      Ye = {};

    function Ke(e) {
      var t = E.cssProps[e] || Ye[e];
      return t || (e in Xe ? e : Ye[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
          if ((e = Ve[n] + t) in Xe) return e
      }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
      Je = /^--/,
      Ze = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      et = {
        letterSpacing: "0",
        fontWeight: "400"
      };

    function tt(e, t, n) {
      var i = ie.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function nt(e, t, n, i, o, r) {
      var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;
      if (n === (i ? "border" : "content")) return 0;
      for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + oe[s], !0, o)), i ? ("content" === n && (l -= E.css(e, "padding" + oe[s], !0, o)), "margin" !== n && (l -= E.css(e, "border" + oe[s] + "Width", !0, o))) : (l += E.css(e, "padding" + oe[s], !0, o), "padding" !== n ? l += E.css(e, "border" + oe[s] + "Width", !0, o) : a += E.css(e, "border" + oe[s] + "Width", !0, o));
      return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function it(e, t, n) {
      var i = We(e),
        o = (!g.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
        r = o,
        s = Qe(e, t, i),
        a = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Be.test(s)) {
        if (!n) return s;
        s = "auto"
      }
      return (!g.boxSizingReliable() && o || !g.reliableTrDimensions() && D(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + nt(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function ot(e, t, n, i, o) {
      return new ot.prototype.init(e, t, n, i, o)
    }
    E.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Qe(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var o, r, s, a = X(t),
            l = Je.test(t),
            c = e.style;
          if (l || (t = Ke(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
          "string" === (r = typeof n) && (o = ie.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (E.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
        }
      },
      css: function (e, t, n, i) {
        var o, r, s, a = X(t);
        return Je.test(t) || (t = Ke(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Qe(e, t, i)), "normal" === o && t in et && (o = et[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
      }
    }), E.each(["height", "width"], (function (e, t) {
      E.cssHooks[t] = {
        get: function (e, n, i) {
          if (n) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, t, i) : ze(e, Ze, (function () {
            return it(e, t, i)
          }))
        },
        set: function (e, n, i) {
          var o, r = We(e),
            s = !g.scrollboxSize() && "absolute" === r.position,
            a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, r),
            l = i ? nt(e, t, i, a, r) : 0;
          return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - .5)), l && (o = ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = E.css(e, t)), tt(0, n, l)
        }
      }
    })), E.cssHooks.marginLeft = $e(g.reliableMarginLeft, (function (e, t) {
      if (t) return (parseFloat(Qe(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
        marginLeft: 0
      }, (function () {
        return e.getBoundingClientRect().left
      }))) + "px"
    })), E.each({
      margin: "",
      padding: "",
      border: "Width"
    }, (function (e, t) {
      E.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + oe[i] + t] = r[i] || r[i - 2] || r[0];
          return o
        }
      }, "margin" !== e && (E.cssHooks[e + t].set = tt)
    })), E.fn.extend({
      css: function (e, t) {
        return U(this, (function (e, t, n) {
          var i, o, r = {},
            s = 0;
          if (Array.isArray(t)) {
            for (i = We(e), o = t.length; s < o; s++) r[t[s]] = E.css(e, t[s], !1, i);
            return r
          }
          return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
        }), e, t, arguments.length > 1)
      }
    }), E.Tween = ot, ot.prototype = {
      constructor: ot,
      init: function (e, t, n, i, o, r) {
        this.elem = e, this.prop = n, this.easing = o || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (E.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var e = ot.propHooks[this.prop];
        return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
      },
      run: function (e) {
        var t, n = ot.propHooks[this.prop];
        return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
      }
    }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function (e) {
          E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, E.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, E.fx = ot.prototype.init, E.fx.step = {};
    var rt, st, at = /^(?:toggle|show|hide)$/,
      lt = /queueHooks$/;

    function ct() {
      st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, E.fx.interval), E.fx.tick())
    }

    function ut() {
      return n.setTimeout((function () {
        rt = void 0
      })), rt = Date.now()
    }

    function ft(e, t) {
      var n, i = 0,
        o = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = oe[i])] = o["padding" + n] = e;
      return t && (o.opacity = o.width = e), o
    }

    function dt(e, t, n) {
      for (var i, o = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), r = 0, s = o.length; r < s; r++)
        if (i = o[r].call(n, t, e)) return i
    }

    function ht(e, t, n) {
      var i, o, r = 0,
        s = ht.prefilters.length,
        a = E.Deferred().always((function () {
          delete l.elem
        })),
        l = function () {
          if (o) return !1;
          for (var t = rt || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
          return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
          elem: e,
          props: E.extend({}, t),
          opts: E.extend(!0, {
            specialEasing: {},
            easing: E.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: rt || ut(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = E.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function (t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (o) return this;
            for (o = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
          }
        }),
        u = c.props;
      for (! function (e, t) {
          var n, i, o, r, s;
          for (n in e)
            if (o = t[i = X(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = E.cssHooks[i]) && "expand" in s)
              for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
            else t[i] = o
        }(u, c.opts.specialEasing); r < s; r++)
        if (i = ht.prefilters[r].call(c, e, u, c.opts)) return v(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
      return E.map(u, dt, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c
    }
    E.Animation = E.extend(ht, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return ce(n.elem, e, ie.exec(t), n), n
          }]
        },
        tweener: function (e, t) {
          v(e) ? (t = e, e = ["*"]) : e = e.match(P);
          for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
          var i, o, r, s, a, l, c, u, f = "width" in t || "height" in t,
            d = this,
            h = {},
            p = e.style,
            m = e.nodeType && le(e),
            g = G.get(e, "fxshow");
          for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
              s.unqueued || a()
            }), s.unqueued++, d.always((function () {
              d.always((function () {
                s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
              }))
            }))), t)
            if (o = t[i], at.test(o)) {
              if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                if ("show" !== o || !g || void 0 === g[i]) continue;
                m = !0
              }
              h[i] = g && g[i] || E.style(e, i)
            } if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
            for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = G.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = E.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done((function () {
                p.display = c
              })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
              }))), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = G.access(e, "fxshow", {
              display: c
            }), r && (g.hidden = !m), m && de([e], !0), d.done((function () {
              for (i in m || de([e]), G.remove(e, "fxshow"), h) E.style(e, i, h[i])
            }))), l = dt(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }],
        prefilter: function (e, t) {
          t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
        }
      }), E.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? E.extend({}, e) : {
          complete: n || !n && t || v(e) && e,
          duration: e,
          easing: n && t || t && !v(t) && t
        };
        return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
          v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
        }, i
      }, E.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(le).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function (e, t, n, i) {
          var o = E.isEmptyObject(e),
            r = E.speed(t, n, i),
            s = function () {
              var t = ht(this, E.extend({}, e), r);
              (o || G.get(this, "finish")) && t.stop(!0)
            };
          return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = E.timers,
              s = G.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else
              for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
            for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
            !t && n || E.dequeue(this, e)
          }))
        },
        finish: function (e) {
          return !1 !== e && (e = e || "fx"), this.each((function () {
            var t, n = G.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = E.timers,
              s = i ? i.length : 0;
            for (n.finish = !0, E.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          }))
        }
      }), E.each(["toggle", "show", "hide"], (function (e, t) {
        var n = E.fn[t];
        E.fn[t] = function (e, i, o) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ft(t, !0), e, i, o)
        }
      })), E.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, (function (e, t) {
        E.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i)
        }
      })), E.timers = [], E.fx.tick = function () {
        var e, t = 0,
          n = E.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), rt = void 0
      }, E.fx.timer = function (e) {
        E.timers.push(e), E.fx.start()
      }, E.fx.interval = 13, E.fx.start = function () {
        st || (st = !0, ct())
      }, E.fx.stop = function () {
        st = null
      }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, E.fn.delay = function (e, t) {
        return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, i) {
          var o = n.setTimeout(t, e);
          i.stop = function () {
            n.clearTimeout(o)
          }
        }))
      },
      function () {
        var e = b.createElement("input"),
          t = b.createElement("select").appendChild(b.createElement("option"));
        e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value
      }();
    var pt, mt = E.expr.attrHandle;
    E.fn.extend({
      attr: function (e, t) {
        return U(this, E.attr, e, t, arguments.length > 1)
      },
      removeAttr: function (e) {
        return this.each((function () {
          E.removeAttr(this, e)
        }))
      }
    }), E.extend({
      attr: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (o = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!g.radioValue && "radio" === t && D(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n, i = 0,
          o = t && t.match(P);
        if (o && 1 === e.nodeType)
          for (; n = o[i++];) e.removeAttribute(n)
      }
    }), pt = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) {
      var n = mt[t] || E.find.attr;
      mt[t] = function (e, t, i) {
        var o, r, s = t.toLowerCase();
        return i || (r = mt[s], mt[s] = o, o = null != n(e, t, i) ? s : null, mt[s] = r), o
      }
    }));
    var gt = /^(?:input|select|textarea|button)$/i,
      vt = /^(?:a|area)$/i;

    function yt(e) {
      return (e.match(P) || []).join(" ")
    }

    function bt(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function _t(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    E.fn.extend({
      prop: function (e, t) {
        return U(this, E.prop, e, t, arguments.length > 1)
      },
      removeProp: function (e) {
        return this.each((function () {
          delete this[E.propFix[e] || e]
        }))
      }
    }), E.extend({
      prop: function (e, t, n) {
        var i, o, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t, o = E.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), g.optSelected || (E.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
      E.propFix[this.toLowerCase()] = this
    })), E.fn.extend({
      addClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (v(e)) return this.each((function (t) {
          E(this).addClass(e.call(this, t, bt(this)))
        }));
        if ((t = _t(e)).length)
          for (; n = this[l++];)
            if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
              for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = yt(i)) && n.setAttribute("class", a)
            } return this
      },
      removeClass: function (e) {
        var t, n, i, o, r, s, a, l = 0;
        if (v(e)) return this.each((function (t) {
          E(this).removeClass(e.call(this, t, bt(this)))
        }));
        if (!arguments.length) return this.attr("class", "");
        if ((t = _t(e)).length)
          for (; n = this[l++];)
            if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
              for (s = 0; r = t[s++];)
                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
              o !== (a = yt(i)) && n.setAttribute("class", a)
            } return this
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function (n) {
          E(this).toggleClass(e.call(this, n, bt(this), t), t)
        })) : this.each((function () {
          var t, o, r, s;
          if (i)
            for (o = 0, r = E(this), s = _t(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          else void 0 !== e && "boolean" !== n || ((t = bt(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
        }))
      },
      hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var wt = /\r/g;
    E.fn.extend({
      val: function (e) {
        var t, n, i, o = this[0];
        return arguments.length ? (i = v(e), this.each((function (n) {
          var o;
          1 === this.nodeType && (null == (o = i ? e.call(this, n, E(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = E.map(o, (function (e) {
            return null == e ? "" : e + ""
          }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
        }))) : o ? (t = E.valHooks[o.type] || E.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
      }
    }), E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : yt(E.text(e))
          }
        },
        select: {
          get: function (e) {
            var t, n, i, o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;
            for (i = r < 0 ? l : s ? r : 0; i < l; i++)
              if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                if (t = E(n).val(), s) return t;
                a.push(t)
              } return a
          },
          set: function (e, t) {
            for (var n, i, o = e.options, r = E.makeArray(t), s = o.length; s--;)((i = o[s]).selected = E.inArray(E.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), E.each(["radio", "checkbox"], (function () {
      E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
        }
      }, g.checkOn || (E.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    })), g.focusin = "onfocusin" in n;
    var xt = /^(?:focusinfocus|focusoutblur)$/,
      Et = function (e) {
        e.stopPropagation()
      };
    E.extend(E.event, {
      trigger: function (e, t, i, o) {
        var r, s, a, l, c, u, f, d, p = [i || b],
          m = h.call(e, "type") ? e.type : e,
          g = h.call(e, "namespace") ? e.namespace.split(".") : [];
        if (s = d = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(m + E.event.triggered) && (m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), c = m.indexOf(":") < 0 && "on" + m, (e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : E.makeArray(t, [e]), f = E.event.special[m] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, t))) {
          if (!o && !f.noBubble && !y(i)) {
            for (l = f.delegateType || m, xt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
            a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
          }
          for (r = 0;
            (s = p[r++]) && !e.isPropagationStopped();) d = s, e.type = r > 1 ? l : f.bindType || m, (u = (G.get(s, "events") || Object.create(null))[e.type] && G.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && Y(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
          return e.type = m, o || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !Y(i) || c && v(i[m]) && !y(i) && ((a = i[c]) && (i[c] = null), E.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, Et), i[m](), e.isPropagationStopped() && d.removeEventListener(m, Et), E.event.triggered = void 0, a && (i[c] = a)), e.result
        }
      },
      simulate: function (e, t, n) {
        var i = E.extend(new E.Event, n, {
          type: e,
          isSimulated: !0
        });
        E.event.trigger(i, null, t)
      }
    }), E.fn.extend({
      trigger: function (e, t) {
        return this.each((function () {
          E.event.trigger(e, t, this)
        }))
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0)
      }
    }), g.focusin || E.each({
      focus: "focusin",
      blur: "focusout"
    }, (function (e, t) {
      var n = function (e) {
        E.event.simulate(t, e.target, E.event.fix(e))
      };
      E.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this.document || this,
            o = G.access(i, t);
          o || i.addEventListener(e, n, !0), G.access(i, t, (o || 0) + 1)
        },
        teardown: function () {
          var i = this.ownerDocument || this.document || this,
            o = G.access(i, t) - 1;
          o ? G.access(i, t, o) : (i.removeEventListener(e, n, !0), G.remove(i, t))
        }
      }
    }));
    var Tt = n.location,
      Ct = {
        guid: Date.now()
      },
      kt = /\?/;
    E.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
      Nt = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

    function Ot(e, t, n, i) {
      var o;
      if (Array.isArray(t)) E.each(t, (function (t, o) {
        n || St.test(e) ? i(e, o) : Ot(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
      }));
      else if (n || "object" !== x(t)) i(e, t);
      else
        for (o in t) Ot(e + "[" + o + "]", t[o], n, i)
    }
    E.param = function (e, t) {
      var n, i = [],
        o = function (e, t) {
          var n = v(t) ? t() : t;
          i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function () {
        o(this.name, this.value)
      }));
      else
        for (n in e) Ot(n, e[n], t, o);
      return i.join("&")
    }, E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map((function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this
        })).filter((function () {
          var e = this.type;
          return this.name && !E(this).is(":disabled") && At.test(this.nodeName) && !Dt.test(e) && (this.checked || !me.test(e))
        })).map((function (e, t) {
          var n = E(this).val();
          return null == n ? null : Array.isArray(n) ? E.map(n, (function (e) {
            return {
              name: t.name,
              value: e.replace(Nt, "\r\n")
            }
          })) : {
            name: t.name,
            value: n.replace(Nt, "\r\n")
          }
        })).get()
      }
    });
    var jt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Mt = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      qt = {},
      Rt = {},
      Ft = "*/".concat("*"),
      Bt = b.createElement("a");

    function Wt(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, o = 0,
          r = t.toLowerCase().match(P) || [];
        if (v(n))
          for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function zt(e, t, n, i) {
      var o = {},
        r = e === Rt;

      function s(a) {
        var l;
        return o[a] = !0, E.each(e[a] || [], (function (e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
        })), l
      }
      return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Ut(e, t) {
      var n, i, o = E.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
      return i && E.extend(!0, e, i), e
    }
    Bt.href = Tt.href, E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ft,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (e, t) {
        return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e)
      },
      ajaxPrefilter: Wt(qt),
      ajaxTransport: Wt(Rt),
      ajax: function (e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var i, o, r, s, a, l, c, u, f, d, h = E.ajaxSetup({}, t),
          p = h.context || h,
          m = h.context && (p.nodeType || p.jquery) ? E(p) : E.event,
          g = E.Deferred(),
          v = E.Callbacks("once memory"),
          y = h.statusCode || {},
          _ = {},
          w = {},
          x = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; t = It.exec(r);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                t = s[e.toLowerCase() + " "]
              }
              return null == t ? null : t.join(", ")
            },
            getAllResponseHeaders: function () {
              return c ? r : null
            },
            setRequestHeader: function (e, t) {
              return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) T.always(e[T.status]);
                else
                  for (t in e) y[t] = [y[t], e[t]];
              return this
            },
            abort: function (e) {
              var t = e || x;
              return i && i.abort(t), C(0, t), this
            }
          };
        if (g.promise(T), h.url = ((e || h.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
          l = b.createElement("a");
          try {
            l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
          } catch (e) {
            h.crossDomain = !0
          }
        }
        if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), zt(qt, h, t, T), c) return T;
        for (f in (u = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Ct.guid++ + d), h.url = o + d), h.ifModified && (E.lastModified[o] && T.setRequestHeader("If-Modified-Since", E.lastModified[o]), E.etag[o] && T.setRequestHeader("If-None-Match", E.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);
        if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c)) return T.abort();
        if (x = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), i = zt(Rt, h, t, T)) {
          if (T.readyState = 1, u && m.trigger("ajaxSend", [T, h]), c) return T;
          h.async && h.timeout > 0 && (a = n.setTimeout((function () {
            T.abort("timeout")
          }), h.timeout));
          try {
            c = !1, i.send(_, C)
          } catch (e) {
            if (c) throw e;
            C(-1, e)
          }
        } else C(-1, "No Transport");

        function C(e, t, s, l) {
          var f, d, b, _, w, x = t;
          c || (c = !0, a && n.clearTimeout(a), i = void 0, r = l || "", T.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, s && (_ = function (e, t, n) {
            for (var i, o, r, s, a = e.contents, l = e.dataTypes;
              "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
              for (o in a)
                if (a[o] && a[o].test(i)) {
                  l.unshift(o);
                  break
                } if (l[0] in n) r = l[0];
            else {
              for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                  r = o;
                  break
                }
                s || (s = o)
              }
              r = r || s
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
          }(h, T, s)), !f && E.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}), _ = function (e, t, n, i) {
            var o, r, s, a, l, c = {},
              u = e.dataTypes.slice();
            if (u[1])
              for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (r = u.shift(); r;)
              if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
              if (!(s = c[l + " " + r] || c["* " + r]))
                for (o in c)
                  if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                    break
                  } if (!0 !== s)
                if (s && e.throws) t = s(t);
                else try {
                  t = s(t)
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + r
                  }
                }
            }
            return {
              state: "success",
              data: t
            }
          }(h, _, T, f), f ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[o] = w), (w = T.getResponseHeader("etag")) && (E.etag[o] = w)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, d = _.data, f = !(b = _.error))) : (b = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", f ? g.resolveWith(p, [d, x, T]) : g.rejectWith(p, [T, x, b]), T.statusCode(y), y = void 0, u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : b]), v.fireWith(p, [T, x]), u && (m.trigger("ajaxComplete", [T, h]), --E.active || E.event.trigger("ajaxStop")))
        }
        return T
      },
      getJSON: function (e, t, n) {
        return E.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return E.get(e, void 0, t, "script")
      }
    }), E.each(["get", "post"], (function (e, t) {
      E[t] = function (e, n, i, o) {
        return v(n) && (o = o || i, i = n, n = void 0), E.ajax(E.extend({
          url: e,
          type: t,
          dataType: o,
          data: n,
          success: i
        }, E.isPlainObject(e) && e))
      }
    })), E.ajaxPrefilter((function (e) {
      var t;
      for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    })), E._evalUrl = function (e, t, n) {
      return E.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {}
        },
        dataFilter: function (e) {
          E.globalEval(e, t, n)
        }
      })
    }, E.fn.extend({
      wrapAll: function (e) {
        var t;
        return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        })).append(this)), this
      },
      wrapInner: function (e) {
        return v(e) ? this.each((function (t) {
          E(this).wrapInner(e.call(this, t))
        })) : this.each((function () {
          var t = E(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        }))
      },
      wrap: function (e) {
        var t = v(e);
        return this.each((function (n) {
          E(this).wrapAll(t ? e.call(this, n) : e)
        }))
      },
      unwrap: function (e) {
        return this.parent(e).not("body").each((function () {
          E(this).replaceWith(this.childNodes)
        })), this
      }
    }), E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var Qt = {
        0: 200,
        1223: 204
      },
      $t = E.ajaxSettings.xhr();
    g.cors = !!$t && "withCredentials" in $t, g.ajax = $t = !!$t, E.ajaxTransport((function (e) {
      var t, i;
      if (g.cors || $t && !e.crossDomain) return {
        send: function (o, r) {
          var s, a = e.xhr();
          if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (s in e.xhrFields) a[s] = e.xhrFields[s];
          for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
          t = function (e) {
            return function () {
              t && (t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = t(), i = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
            4 === a.readyState && n.setTimeout((function () {
              t && i()
            }))
          }, t = t("abort");
          try {
            a.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function () {
          t && t()
        }
      }
    })), E.ajaxPrefilter((function (e) {
      e.crossDomain && (e.contents.script = !1)
    })), E.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function (e) {
          return E.globalEval(e), e
        }
      }
    }), E.ajaxPrefilter("script", (function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    })), E.ajaxTransport("script", (function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs) return {
        send: function (i, o) {
          t = E("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
          }), b.head.appendChild(t[0])
        },
        abort: function () {
          n && n()
        }
      }
    }));
    var Vt, Xt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Xt.pop() || E.expando + "_" + Ct.guid++;
        return this[e] = !0, e
      }
    }), E.ajaxPrefilter("json jsonp", (function (e, t, i) {
      var o, r, s, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
      if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + o) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
        return s || E.error(o + " was not called"), s[0]
      }, e.dataTypes[0] = "json", r = n[o], n[o] = function () {
        s = arguments
      }, i.always((function () {
        void 0 === r ? E(n).removeProp(o) : n[o] = r, e[o] && (e.jsonpCallback = t.jsonpCallback, Xt.push(o)), s && v(r) && r(s[0]), s = r = void 0
      })), "script"
    })), g.createHTMLDocument = ((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), E.parseHTML = function (e, t, n) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (g.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), r = !n && [], (o = A.exec(e)) ? [t.createElement(o[1])] : (o = xe([e], t, r), r && r.length && E(r).remove(), E.merge([], o.childNodes)));
      var i, o, r
    }, E.fn.load = function (e, t, n) {
      var i, o, r, s = this,
        a = e.indexOf(" ");
      return a > -1 && (i = yt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && E.ajax({
        url: e,
        type: o || "GET",
        dataType: "html",
        data: t
      }).done((function (e) {
        r = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
      })).always(n && function (e, t) {
        s.each((function () {
          n.apply(this, r || [e.responseText, t, e])
        }))
      }), this
    }, E.expr.pseudos.animated = function (e) {
      return E.grep(E.timers, (function (t) {
        return e === t.elem
      })).length
    }, E.offset = {
      setOffset: function (e, t, n) {
        var i, o, r, s, a, l, c = E.css(e, "position"),
          u = E(e),
          f = {};
        "static" === c && (e.style.position = "relative"), a = u.offset(), r = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), u.css(f))
      }
    }, E.fn.extend({
      offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each((function (t) {
          E.offset.setOffset(this, e, t)
        }));
        var t, n, i = this[0];
        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
          top: t.top + n.pageYOffset,
          left: t.left + n.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0
      },
      position: function () {
        if (this[0]) {
          var e, t, n, i = this[0],
            o = {
              top: 0,
              left: 0
            };
          if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
            e && e !== i && 1 === e.nodeType && ((o = E(e).offset()).top += E.css(e, "borderTopWidth", !0), o.left += E.css(e, "borderLeftWidth", !0))
          }
          return {
            top: t.top - o.top - E.css(i, "marginTop", !0),
            left: t.left - o.left - E.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map((function () {
          for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
          return e || re
        }))
      }
    }), E.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, (function (e, t) {
      var n = "pageYOffset" === t;
      E.fn[e] = function (i) {
        return U(this, (function (e, i, o) {
          var r;
          if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
          r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
        }), e, i, arguments.length)
      }
    })), E.each(["top", "left"], (function (e, t) {
      E.cssHooks[t] = $e(g.pixelPosition, (function (e, n) {
        if (n) return n = Qe(e, t), Be.test(n) ? E(e).position()[t] + "px" : n
      }))
    })), E.each({
      Height: "height",
      Width: "width"
    }, (function (e, t) {
      E.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, (function (n, i) {
        E.fn[i] = function (o, r) {
          var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");
          return U(this, (function (t, n, o) {
            var r;
            return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? E.css(t, n, a) : E.style(t, n, o, a)
          }), t, s ? o : void 0, s)
        }
      }))
    })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
      E.fn[t] = function (e) {
        return this.on(t, e)
      }
    })), E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
      E.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }));
    var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function (e, t) {
      var n, i, o;
      if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), (o = function () {
        return e.apply(t || this, i.concat(a.call(arguments)))
      }).guid = e.guid = e.guid || E.guid++, o
    }, E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = D, E.isFunction = v, E.isWindow = y, E.camelCase = X, E.type = x, E.now = Date.now, E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function (e) {
      return null == e ? "" : (e + "").replace(Kt, "")
    }, void 0 === (i = function () {
      return E
    }.apply(t, [])) || (e.exports = i);
    var Gt = n.jQuery,
      Jt = n.$;
    return E.noConflict = function (e) {
      return n.$ === E && (n.$ = Jt), e && n.jQuery === E && (n.jQuery = Gt), E
    }, void 0 === o && (n.jQuery = n.$ = E), E
  }))
}, function (e, t, n) {}, function (e, t, n) {
  /*!
   * Bootstrap v4.5.0 (https://getbootstrap.com/)
   * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  ! function (e, t, n) {
    "use strict";

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
    }

    function o(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, i)
      }
      return n
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach((function (t) {
          r(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    function l(e) {
      var n = this,
        i = !1;
      return t(this).one(c.TRANSITION_END, (function () {
        i = !0
      })), setTimeout((function () {
        i || c.triggerTransitionEnd(n)
      }), e), this
    }
    t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    var c = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        do {
          e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
      },
      getSelectorFromElement: function (e) {
        var t = e.getAttribute("data-target");
        if (!t || "#" === t) {
          var n = e.getAttribute("href");
          t = n && "#" !== n ? n.trim() : ""
        }
        try {
          return document.querySelector(t) ? t : null
        } catch (e) {
          return null
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var n = t(e).css("transition-duration"),
          i = t(e).css("transition-delay"),
          o = parseFloat(n),
          r = parseFloat(i);
        return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
      },
      reflow: function (e) {
        return e.offsetHeight
      },
      triggerTransitionEnd: function (e) {
        t(e).trigger("transitionend")
      },
      supportsTransitionEnd: function () {
        return Boolean("transitionend")
      },
      isElement: function (e) {
        return (e[0] || e).nodeType
      },
      typeCheckConfig: function (e, t, n) {
        for (var i in n)
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var o = n[i],
              r = t[i],
              s = r && c.isElement(r) ? "element" : null == (a = r) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
          } var a
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof e.getRootNode) {
          var t = e.getRootNode();
          return t instanceof ShadowRoot ? t : null
        }
        return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
      },
      jQueryDetection: function () {
        if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
      }
    };
    c.jQueryDetection(), t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function (e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    };
    var u = "alert",
      f = t.fn[u],
      d = function () {
        function e(e) {
          this._element = e
        }
        var n = e.prototype;
        return n.close = function (e) {
          var t = this._element;
          e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, n.dispose = function () {
          t.removeData(this._element, "bs.alert"), this._element = null
        }, n._getRootElement = function (e) {
          var n = c.getSelectorFromElement(e),
            i = !1;
          return n && (i = document.querySelector(n)), i || (i = t(e).closest(".alert")[0]), i
        }, n._triggerCloseEvent = function (e) {
          var n = t.Event("close.bs.alert");
          return t(e).trigger(n), n
        }, n._removeElement = function (e) {
          var n = this;
          if (t(e).removeClass("show"), t(e).hasClass("fade")) {
            var i = c.getTransitionDurationFromElement(e);
            t(e).one(c.TRANSITION_END, (function (t) {
              return n._destroyElement(e, t)
            })).emulateTransitionEnd(i)
          } else this._destroyElement(e)
        }, n._destroyElement = function (e) {
          t(e).detach().trigger("closed.bs.alert").remove()
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              o = i.data("bs.alert");
            o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
          }))
        }, e._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this)
          }
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }]), e
      }();
    t(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', d._handleDismiss(new d)), t.fn[u] = d._jQueryInterface, t.fn[u].Constructor = d, t.fn[u].noConflict = function () {
      return t.fn[u] = f, d._jQueryInterface
    };
    var h = t.fn.button,
      p = function () {
        function e(e) {
          this._element = e
        }
        var n = e.prototype;
        return n.toggle = function () {
          var e = !0,
            n = !0,
            i = t(this._element).closest('[data-toggle="buttons"]')[0];
          if (i) {
            var o = this._element.querySelector('input:not([type="hidden"])');
            if (o) {
              if ("radio" === o.type)
                if (o.checked && this._element.classList.contains("active")) e = !1;
                else {
                  var r = i.querySelector(".active");
                  r && t(r).removeClass("active")
                } e && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), t(o).trigger("change")), o.focus(), n = !1
            }
          }
          this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && t(this._element).toggleClass("active"))
        }, n.dispose = function () {
          t.removeData(this._element, "bs.button"), this._element = null
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.button");
            i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }]), e
      }();
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
      var n = e.target,
        i = n;
      if (t(n).hasClass("btn") || (n = t(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
      else {
        var o = n.querySelector('input:not([type="hidden"])');
        if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void e.preventDefault();
        "LABEL" === i.tagName && o && "checkbox" === o.type && e.preventDefault(), p._jQueryInterface.call(t(n), "toggle")
      }
    })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (e) {
      var n = t(e.target).closest(".btn")[0];
      t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    })), t(window).on("load.bs.button.data-api", (function () {
      for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
        var i = e[t],
          o = i.querySelector('input:not([type="hidden"])');
        o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
      }
      for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
        var a = e[r];
        "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
      }
    })), t.fn.button = p._jQueryInterface, t.fn.button.Constructor = p, t.fn.button.noConflict = function () {
      return t.fn.button = h, p._jQueryInterface
    };
    var m = "carousel",
      g = ".bs.carousel",
      v = t.fn[m],
      y = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
      b = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
      _ = {
        TOUCH: "touch",
        PEN: "pen"
      },
      w = function () {
        function e(e, t) {
          this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
        }
        var n = e.prototype;
        return n.next = function () {
          this._isSliding || this._slide("next")
        }, n.nextWhenVisible = function () {
          !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }, n.prev = function () {
          this._isSliding || this._slide("prev")
        }, n.pause = function (e) {
          e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, n.cycle = function (e) {
          e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, n.to = function (e) {
          var n = this;
          this._activeElement = this._element.querySelector(".active.carousel-item");
          var i = this._getItemIndex(this._activeElement);
          if (!(e > this._items.length - 1 || e < 0))
            if (this._isSliding) t(this._element).one("slid.bs.carousel", (function () {
              return n.to(e)
            }));
            else {
              if (i === e) return this.pause(), void this.cycle();
              var o = e > i ? "next" : "prev";
              this._slide(o, this._items[e])
            }
        }, n.dispose = function () {
          t(this._element).off(g), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, n._getConfig = function (e) {
          return e = a(a({}, y), e), c.typeCheckConfig(m, e, b), e
        }, n._handleSwipe = function () {
          var e = Math.abs(this.touchDeltaX);
          if (!(e <= 40)) {
            var t = e / this.touchDeltaX;
            this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
          }
        }, n._addEventListeners = function () {
          var e = this;
          this._config.keyboard && t(this._element).on("keydown.bs.carousel", (function (t) {
            return e._keydown(t)
          })), "hover" === this._config.pause && t(this._element).on("mouseenter.bs.carousel", (function (t) {
            return e.pause(t)
          })).on("mouseleave.bs.carousel", (function (t) {
            return e.cycle(t)
          })), this._config.touch && this._addTouchEventListeners()
        }, n._addTouchEventListeners = function () {
          var e = this;
          if (this._touchSupported) {
            var n = function (t) {
                e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
              },
              i = function (t) {
                e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function (t) {
                  return e.cycle(t)
                }), 500 + e._config.interval))
              };
            t(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (e) {
              return e.preventDefault()
            })), this._pointerEvent ? (t(this._element).on("pointerdown.bs.carousel", (function (e) {
              return n(e)
            })), t(this._element).on("pointerup.bs.carousel", (function (e) {
              return i(e)
            })), this._element.classList.add("pointer-event")) : (t(this._element).on("touchstart.bs.carousel", (function (e) {
              return n(e)
            })), t(this._element).on("touchmove.bs.carousel", (function (t) {
              return function (t) {
                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
              }(t)
            })), t(this._element).on("touchend.bs.carousel", (function (e) {
              return i(e)
            })))
          }
        }, n._keydown = function (e) {
          if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
            case 37:
              e.preventDefault(), this.prev();
              break;
            case 39:
              e.preventDefault(), this.next()
          }
        }, n._getItemIndex = function (e) {
          return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
        }, n._getItemByDirection = function (e, t) {
          var n = "next" === e,
            i = "prev" === e,
            o = this._getItemIndex(t),
            r = this._items.length - 1;
          if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
          var s = (o + ("prev" === e ? -1 : 1)) % this._items.length;
          return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }, n._triggerSlideEvent = function (e, n) {
          var i = this._getItemIndex(e),
            o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
            r = t.Event("slide.bs.carousel", {
              relatedTarget: e,
              direction: n,
              from: o,
              to: i
            });
          return t(this._element).trigger(r), r
        }, n._setActiveIndicatorElement = function (e) {
          if (this._indicatorsElement) {
            var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
            t(n).removeClass("active");
            var i = this._indicatorsElement.children[this._getItemIndex(e)];
            i && t(i).addClass("active")
          }
        }, n._slide = function (e, n) {
          var i, o, r, s = this,
            a = this._element.querySelector(".active.carousel-item"),
            l = this._getItemIndex(a),
            u = n || a && this._getItemByDirection(e, a),
            f = this._getItemIndex(u),
            d = Boolean(this._interval);
          if ("next" === e ? (i = "carousel-item-left", o = "carousel-item-next", r = "left") : (i = "carousel-item-right", o = "carousel-item-prev", r = "right"), u && t(u).hasClass("active")) this._isSliding = !1;
          else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
            this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u);
            var h = t.Event("slid.bs.carousel", {
              relatedTarget: u,
              direction: r,
              from: l,
              to: f
            });
            if (t(this._element).hasClass("slide")) {
              t(u).addClass(o), c.reflow(u), t(a).addClass(i), t(u).addClass(i);
              var p = parseInt(u.getAttribute("data-interval"), 10);
              p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
              var m = c.getTransitionDurationFromElement(a);
              t(a).one(c.TRANSITION_END, (function () {
                t(u).removeClass(i + " " + o).addClass("active"), t(a).removeClass("active " + o + " " + i), s._isSliding = !1, setTimeout((function () {
                  return t(s._element).trigger(h)
                }), 0)
              })).emulateTransitionEnd(m)
            } else t(a).removeClass("active"), t(u).addClass("active"), this._isSliding = !1, t(this._element).trigger(h);
            d && this.cycle()
          }
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.carousel"),
              o = a(a({}, y), t(this).data());
            "object" == typeof n && (o = a(a({}, o), n));
            var r = "string" == typeof n ? n : o.slide;
            if (i || (i = new e(this, o), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
            else if ("string" == typeof r) {
              if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
              i[r]()
            } else o.interval && o.ride && (i.pause(), i.cycle())
          }))
        }, e._dataApiClickHandler = function (n) {
          var i = c.getSelectorFromElement(this);
          if (i) {
            var o = t(i)[0];
            if (o && t(o).hasClass("carousel")) {
              var r = a(a({}, t(o).data()), t(this).data()),
                s = this.getAttribute("data-slide-to");
              s && (r.interval = !1), e._jQueryInterface.call(t(o), r), s && t(o).data("bs.carousel").to(s), n.preventDefault()
            }
          }
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return y
          }
        }]), e
      }();
    t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler), t(window).on("load.bs.carousel.data-api", (function () {
      for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
        var o = t(e[n]);
        w._jQueryInterface.call(o, o.data())
      }
    })), t.fn[m] = w._jQueryInterface, t.fn[m].Constructor = w, t.fn[m].noConflict = function () {
      return t.fn[m] = v, w._jQueryInterface
    };
    var x = "collapse",
      E = t.fn[x],
      T = {
        toggle: !0,
        parent: ""
      },
      C = {
        toggle: "boolean",
        parent: "(string|element)"
      },
      k = function () {
        function e(e, t) {
          this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
          for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
            var r = n[i],
              s = c.getSelectorFromElement(r),
              a = [].slice.call(document.querySelectorAll(s)).filter((function (t) {
                return t === e
              }));
            null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
          }
          this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        var n = e.prototype;
        return n.toggle = function () {
          t(this._element).hasClass("show") ? this.hide() : this.show()
        }, n.show = function () {
          var n, i, o = this;
          if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (e) {
              return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains("collapse")
            }))).length && (n = null), n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
            var r = t.Event("show.bs.collapse");
            if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
              n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
              var s = this._getDimension();
              t(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
              var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                l = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, (function () {
                t(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[s] = "", o.setTransitioning(!1), t(o._element).trigger("shown.bs.collapse")
              })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
            }
          }
        }, n.hide = function () {
          var e = this;
          if (!this._isTransitioning && t(this._element).hasClass("show")) {
            var n = t.Event("hide.bs.collapse");
            if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
              var i = this._getDimension();
              this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass("collapsing").removeClass("collapse show");
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var s = this._triggerArray[r],
                    a = c.getSelectorFromElement(s);
                  null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass("show") || t(s).addClass("collapsed").attr("aria-expanded", !1))
                }
              this.setTransitioning(!0), this._element.style[i] = "";
              var l = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, (function () {
                e.setTransitioning(!1), t(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
              })).emulateTransitionEnd(l)
            }
          }
        }, n.setTransitioning = function (e) {
          this._isTransitioning = e
        }, n.dispose = function () {
          t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, n._getConfig = function (e) {
          return (e = a(a({}, T), e)).toggle = Boolean(e.toggle), c.typeCheckConfig(x, e, C), e
        }, n._getDimension = function () {
          return t(this._element).hasClass("width") ? "width" : "height"
        }, n._getParent = function () {
          var n, i = this;
          c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
          var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            r = [].slice.call(n.querySelectorAll(o));
          return t(r).each((function (t, n) {
            i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
          })), n
        }, n._addAriaAndCollapsedClass = function (e, n) {
          var i = t(e).hasClass("show");
          n.length && t(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
        }, e._getTargetFromElement = function (e) {
          var t = c.getSelectorFromElement(e);
          return t ? document.querySelector(t) : null
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              o = i.data("bs.collapse"),
              r = a(a(a({}, T), i.data()), "object" == typeof n && n ? n : {});
            if (!o && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), o || (o = new e(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
              if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
              o[n]()
            }
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return T
          }
        }]), e
      }();
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        i = c.getSelectorFromElement(this),
        o = [].slice.call(document.querySelectorAll(i));
      t(o).each((function () {
        var e = t(this),
          i = e.data("bs.collapse") ? "toggle" : n.data();
        k._jQueryInterface.call(e, i)
      }))
    })), t.fn[x] = k._jQueryInterface, t.fn[x].Constructor = k, t.fn[x].noConflict = function () {
      return t.fn[x] = E, k._jQueryInterface
    };
    var S = "dropdown",
      N = t.fn[S],
      D = new RegExp("38|40|27"),
      A = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
      },
      O = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
      },
      j = function () {
        function e(e, t) {
          this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        var i = e.prototype;
        return i.toggle = function () {
          if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
            var n = t(this._menu).hasClass("show");
            e._clearMenus(), n || this.show(!0)
          }
        }, i.show = function (i) {
          if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass("disabled") || t(this._menu).hasClass("show"))) {
            var o = {
                relatedTarget: this._element
              },
              r = t.Event("show.bs.dropdown", o),
              s = e._getParentFromElement(this._element);
            if (t(s).trigger(r), !r.isDefaultPrevented()) {
              if (!this._inNavbar && i) {
                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                var a = this._element;
                "parent" === this._config.reference ? a = s : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
              }
              "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(s).toggleClass("show").trigger(t.Event("shown.bs.dropdown", o))
            }
          }
        }, i.hide = function () {
          if (!this._element.disabled && !t(this._element).hasClass("disabled") && t(this._menu).hasClass("show")) {
            var n = {
                relatedTarget: this._element
              },
              i = t.Event("hide.bs.dropdown", n),
              o = e._getParentFromElement(this._element);
            t(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass("show"), t(o).toggleClass("show").trigger(t.Event("hidden.bs.dropdown", n)))
          }
        }, i.dispose = function () {
          t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
        }, i.update = function () {
          this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, i._addEventListeners = function () {
          var e = this;
          t(this._element).on("click.bs.dropdown", (function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle()
          }))
        }, i._getConfig = function (e) {
          return e = a(a(a({}, this.constructor.Default), t(this._element).data()), e), c.typeCheckConfig(S, e, this.constructor.DefaultType), e
        }, i._getMenuElement = function () {
          if (!this._menu) {
            var t = e._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(".dropdown-menu"))
          }
          return this._menu
        }, i._getPlacement = function () {
          var e = t(this._element.parentNode),
            n = "bottom-start";
          return e.hasClass("dropup") ? n = t(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
        }, i._detectNavbar = function () {
          return t(this._element).closest(".navbar").length > 0
        }, i._getOffset = function () {
          var e = this,
            t = {};
          return "function" == typeof this._config.offset ? t.fn = function (t) {
            return t.offsets = a(a({}, t.offsets), e._config.offset(t.offsets, e._element) || {}), t
          } : t.offset = this._config.offset, t
        }, i._getPopperConfig = function () {
          var e = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip
              },
              preventOverflow: {
                boundariesElement: this._config.boundary
              }
            }
          };
          return "static" === this._config.display && (e.modifiers.applyStyle = {
            enabled: !1
          }), a(a({}, e), this._config.popperConfig)
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.dropdown");
            if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
              if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
              i[n]()
            }
          }))
        }, e._clearMenus = function (n) {
          if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
            for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
              var s = e._getParentFromElement(i[o]),
                a = t(i[o]).data("bs.dropdown"),
                l = {
                  relatedTarget: i[o]
                };
              if (n && "click" === n.type && (l.clickEvent = n), a) {
                var c = a._menu;
                if (t(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                  var u = t.Event("hide.bs.dropdown", l);
                  t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(c).removeClass("show"), t(s).removeClass("show").trigger(t.Event("hidden.bs.dropdown", l)))
                }
              }
            }
        }, e._getParentFromElement = function (e) {
          var t, n = c.getSelectorFromElement(e);
          return n && (t = document.querySelector(n)), t || e.parentNode
        }, e._dataApiKeydownHandler = function (n) {
          if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(".dropdown-menu").length) : !D.test(n.which)) && !this.disabled && !t(this).hasClass("disabled")) {
            var i = e._getParentFromElement(this),
              o = t(i).hasClass("show");
            if (o || 27 !== n.which) {
              if (n.preventDefault(), n.stopPropagation(), !o || o && (27 === n.which || 32 === n.which)) return 27 === n.which && t(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void t(this).trigger("click");
              var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (e) {
                return t(e).is(":visible")
              }));
              if (0 !== r.length) {
                var s = r.indexOf(n.target);
                38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
              }
            }
          }
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return A
          }
        }, {
          key: "DefaultType",
          get: function () {
            return O
          }
        }]), e
      }();
    t(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (e) {
      e.preventDefault(), e.stopPropagation(), j._jQueryInterface.call(t(this), "toggle")
    })).on("click.bs.dropdown.data-api", ".dropdown form", (function (e) {
      e.stopPropagation()
    })), t.fn[S] = j._jQueryInterface, t.fn[S].Constructor = j, t.fn[S].noConflict = function () {
      return t.fn[S] = N, j._jQueryInterface
    };
    var L = t.fn.modal,
      H = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
      },
      I = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
      },
      M = function () {
        function e(e, t) {
          this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
        }
        var n = e.prototype;
        return n.toggle = function (e) {
          return this._isShown ? this.hide() : this.show(e)
        }, n.show = function (e) {
          var n = this;
          if (!this._isShown && !this._isTransitioning) {
            t(this._element).hasClass("fade") && (this._isTransitioning = !0);
            var i = t.Event("show.bs.modal", {
              relatedTarget: e
            });
            t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (e) {
              return n.hide(e)
            })), t(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
              t(n._element).one("mouseup.dismiss.bs.modal", (function (e) {
                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
              }))
            })), this._showBackdrop((function () {
              return n._showElement(e)
            })))
          }
        }, n.hide = function (e) {
          var n = this;
          if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
            var i = t.Event("hide.bs.modal");
            if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
              this._isShown = !1;
              var o = t(this._element).hasClass("fade");
              if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off("focusin.bs.modal"), t(this._element).removeClass("show"), t(this._element).off("click.dismiss.bs.modal"), t(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
                var r = c.getTransitionDurationFromElement(this._element);
                t(this._element).one(c.TRANSITION_END, (function (e) {
                  return n._hideModal(e)
                })).emulateTransitionEnd(r)
              } else this._hideModal()
            }
          }
        }, n.dispose = function () {
          [window, this._element, this._dialog].forEach((function (e) {
            return t(e).off(".bs.modal")
          })), t(document).off("focusin.bs.modal"), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, n.handleUpdate = function () {
          this._adjustDialog()
        }, n._getConfig = function (e) {
          return e = a(a({}, H), e), c.typeCheckConfig("modal", e, I), e
        }, n._triggerBackdropTransition = function () {
          var e = this;
          if ("static" === this._config.backdrop) {
            var n = t.Event("hidePrevented.bs.modal");
            if (t(this._element).trigger(n), n.defaultPrevented) return;
            this._element.classList.add("modal-static");
            var i = c.getTransitionDurationFromElement(this._element);
            t(this._element).one(c.TRANSITION_END, (function () {
              e._element.classList.remove("modal-static")
            })).emulateTransitionEnd(i), this._element.focus()
          } else this.hide()
        }, n._showElement = function (e) {
          var n = this,
            i = t(this._element).hasClass("fade"),
            o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
          this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
          var r = t.Event("shown.bs.modal", {
              relatedTarget: e
            }),
            s = function () {
              n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(r)
            };
          if (i) {
            var a = c.getTransitionDurationFromElement(this._dialog);
            t(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a)
          } else s()
        }, n._enforceFocus = function () {
          var e = this;
          t(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
            document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
          }))
        }, n._setEscapeEvent = function () {
          var e = this;
          this._isShown ? t(this._element).on("keydown.dismiss.bs.modal", (function (t) {
            e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition()
          })) : this._isShown || t(this._element).off("keydown.dismiss.bs.modal")
        }, n._setResizeEvent = function () {
          var e = this;
          this._isShown ? t(window).on("resize.bs.modal", (function (t) {
            return e.handleUpdate(t)
          })) : t(window).off("resize.bs.modal")
        }, n._hideModal = function () {
          var e = this;
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
            t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger("hidden.bs.modal")
          }))
        }, n._removeBackdrop = function () {
          this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
        }, n._showBackdrop = function (e) {
          var n = this,
            i = t(this._element).hasClass("fade") ? "fade" : "";
          if (this._isShown && this._config.backdrop) {
            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on("click.dismiss.bs.modal", (function (e) {
                n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
              })), i && c.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
            if (!i) return void e();
            var o = c.getTransitionDurationFromElement(this._backdrop);
            t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(o)
          } else if (!this._isShown && this._backdrop) {
            t(this._backdrop).removeClass("show");
            var r = function () {
              n._removeBackdrop(), e && e()
            };
            if (t(this._element).hasClass("fade")) {
              var s = c.getTransitionDurationFromElement(this._backdrop);
              t(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
            } else r()
          } else e && e()
        }, n._adjustDialog = function () {
          var e = this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, n._resetAdjustments = function () {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, n._checkScrollbar = function () {
          var e = document.body.getBoundingClientRect();
          this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, n._setScrollbar = function () {
          var e = this;
          if (this._isBodyOverflowing) {
            var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
              i = [].slice.call(document.querySelectorAll(".sticky-top"));
            t(n).each((function (n, i) {
              var o = i.style.paddingRight,
                r = t(i).css("padding-right");
              t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
            })), t(i).each((function (n, i) {
              var o = i.style.marginRight,
                r = t(i).css("margin-right");
              t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
            }));
            var o = document.body.style.paddingRight,
              r = t(document.body).css("padding-right");
            t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
          }
          t(document.body).addClass("modal-open")
        }, n._resetScrollbar = function () {
          var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
          t(e).each((function (e, n) {
            var i = t(n).data("padding-right");
            t(n).removeData("padding-right"), n.style.paddingRight = i || ""
          }));
          var n = [].slice.call(document.querySelectorAll(".sticky-top"));
          t(n).each((function (e, n) {
            var i = t(n).data("margin-right");
            void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
          }));
          var i = t(document.body).data("padding-right");
          t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
        }, n._getScrollbarWidth = function () {
          var e = document.createElement("div");
          e.className = "modal-scrollbar-measure", document.body.appendChild(e);
          var t = e.getBoundingClientRect().width - e.clientWidth;
          return document.body.removeChild(e), t
        }, e._jQueryInterface = function (n, i) {
          return this.each((function () {
            var o = t(this).data("bs.modal"),
              r = a(a(a({}, H), t(this).data()), "object" == typeof n && n ? n : {});
            if (o || (o = new e(this, r), t(this).data("bs.modal", o)), "string" == typeof n) {
              if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
              o[n](i)
            } else r.show && o.show(i)
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return H
          }
        }]), e
      }();
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (e) {
      var n, i = this,
        o = c.getSelectorFromElement(this);
      o && (n = document.querySelector(o));
      var r = t(n).data("bs.modal") ? "toggle" : a(a({}, t(n).data()), t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
      var s = t(n).one("show.bs.modal", (function (e) {
        e.isDefaultPrevented() || s.one("hidden.bs.modal", (function () {
          t(i).is(":visible") && i.focus()
        }))
      }));
      M._jQueryInterface.call(t(n), r, this)
    })), t.fn.modal = M._jQueryInterface, t.fn.modal.Constructor = M, t.fn.modal.noConflict = function () {
      return t.fn.modal = L, M._jQueryInterface
    };
    var P = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      q = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      },
      R = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      F = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function B(e, t, n) {
      if (0 === e.length) return e;
      if (n && "function" == typeof n) return n(e);
      for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function (e, n) {
          var i = r[e],
            s = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
          var a = [].slice.call(i.attributes),
            l = [].concat(t["*"] || [], t[s] || []);
          a.forEach((function (e) {
            (function (e, t) {
              var n = e.nodeName.toLowerCase();
              if (-1 !== t.indexOf(n)) return -1 === P.indexOf(n) || Boolean(e.nodeValue.match(R) || e.nodeValue.match(F));
              for (var i = t.filter((function (e) {
                  return e instanceof RegExp
                })), o = 0, r = i.length; o < r; o++)
                if (n.match(i[o])) return !0;
              return !1
            })(e, l) || i.removeAttribute(e.nodeName)
          }))
        }, a = 0, l = r.length; a < l; a++) s(a);
      return i.body.innerHTML
    }
    var W = "tooltip",
      z = t.fn[W],
      U = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Q = ["sanitize", "whiteList", "sanitizeFn"],
      $ = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
      },
      V = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
      },
      X = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: q,
        popperConfig: null
      },
      Y = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      },
      K = function () {
        function e(e, t) {
          if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
          this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
        }
        var i = e.prototype;
        return i.enable = function () {
          this._isEnabled = !0
        }, i.disable = function () {
          this._isEnabled = !1
        }, i.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled
        }, i.toggle = function (e) {
          if (this._isEnabled)
            if (e) {
              var n = this.constructor.DATA_KEY,
                i = t(e.currentTarget).data(n);
              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
            } else {
              if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
              this._enter(null, this)
            }
        }, i.dispose = function () {
          clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, i.show = function () {
          var e = this;
          if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
          var i = t.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            t(this.element).trigger(i);
            var o = c.findShadowRoot(this.element),
              r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
            if (i.isDefaultPrevented() || !r) return;
            var s = this.getTipElement(),
              a = c.getUID(this.constructor.NAME);
            s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass("fade");
            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
              u = this._getAttachment(l);
            this.addAttachmentClass(u);
            var f = this._getContainer();
            t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(u)), t(s).addClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
            var d = function () {
              e.config.animation && e._fixTransition();
              var n = e._hoverState;
              e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
            };
            if (t(this.tip).hasClass("fade")) {
              var h = c.getTransitionDurationFromElement(this.tip);
              t(this.tip).one(c.TRANSITION_END, d).emulateTransitionEnd(h)
            } else d()
          }
        }, i.hide = function (e) {
          var n = this,
            i = this.getTipElement(),
            o = t.Event(this.constructor.Event.HIDE),
            r = function () {
              "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
            };
          if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
            if (t(i).removeClass("show"), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, t(this.tip).hasClass("fade")) {
              var s = c.getTransitionDurationFromElement(i);
              t(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
            } else r();
            this._hoverState = ""
          }
        }, i.update = function () {
          null !== this._popper && this._popper.scheduleUpdate()
        }, i.isWithContent = function () {
          return Boolean(this.getTitle())
        }, i.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass("bs-tooltip-" + e)
        }, i.getTipElement = function () {
          return this.tip = this.tip || t(this.config.template)[0], this.tip
        }, i.setContent = function () {
          var e = this.getTipElement();
          this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass("fade show")
        }, i.setElementContent = function (e, n) {
          "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = B(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
        }, i.getTitle = function () {
          var e = this.element.getAttribute("data-original-title");
          return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
        }, i._getPopperConfig = function (e) {
          var t = this;
          return a(a({}, {
            placement: e,
            modifiers: {
              offset: this._getOffset(),
              flip: {
                behavior: this.config.fallbackPlacement
              },
              arrow: {
                element: ".arrow"
              },
              preventOverflow: {
                boundariesElement: this.config.boundary
              }
            },
            onCreate: function (e) {
              e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
            },
            onUpdate: function (e) {
              return t._handlePopperPlacementChange(e)
            }
          }), this.config.popperConfig)
        }, i._getOffset = function () {
          var e = this,
            t = {};
          return "function" == typeof this.config.offset ? t.fn = function (t) {
            return t.offsets = a(a({}, t.offsets), e.config.offset(t.offsets, e.element) || {}), t
          } : t.offset = this.config.offset, t
        }, i._getContainer = function () {
          return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }, i._getAttachment = function (e) {
          return V[e.toUpperCase()]
        }, i._setListeners = function () {
          var e = this;
          this.config.trigger.split(" ").forEach((function (n) {
            if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function (t) {
              return e.toggle(t)
            }));
            else if ("manual" !== n) {
              var i = "hover" === n ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                o = "hover" === n ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
              t(e.element).on(i, e.config.selector, (function (t) {
                return e._enter(t)
              })).on(o, e.config.selector, (function (t) {
                return e._leave(t)
              }))
            }
          })), this._hideModalHandler = function () {
            e.element && e.hide()
          }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a(a({}, this.config), {}, {
            trigger: "manual",
            selector: ""
          }) : this._fixTitle()
        }, i._fixTitle = function () {
          var e = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, i._enter = function (e, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
            "show" === n._hoverState && n.show()
          }), n.config.delay.show) : n.show())
        }, i._leave = function (e, n) {
          var i = this.constructor.DATA_KEY;
          (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
            "out" === n._hoverState && n.hide()
          }), n.config.delay.hide) : n.hide())
        }, i._isWithActiveTrigger = function () {
          for (var e in this._activeTrigger)
            if (this._activeTrigger[e]) return !0;
          return !1
        }, i._getConfig = function (e) {
          var n = t(this.element).data();
          return Object.keys(n).forEach((function (e) {
            -1 !== Q.indexOf(e) && delete n[e]
          })), "number" == typeof (e = a(a(a({}, this.constructor.Default), n), "object" == typeof e && e ? e : {})).delay && (e.delay = {
            show: e.delay,
            hide: e.delay
          }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(W, e, this.constructor.DefaultType), e.sanitize && (e.template = B(e.template, e.whiteList, e.sanitizeFn)), e
        }, i._getDelegateConfig = function () {
          var e = {};
          if (this.config)
            for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
          return e
        }, i._cleanTipClass = function () {
          var e = t(this.getTipElement()),
            n = e.attr("class").match(U);
          null !== n && n.length && e.removeClass(n.join(""))
        }, i._handlePopperPlacementChange = function (e) {
          this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, i._fixTransition = function () {
          var e = this.getTipElement(),
            n = this.config.animation;
          null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.tooltip"),
              o = "object" == typeof n && n;
            if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
              if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
              i[n]()
            }
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return X
          }
        }, {
          key: "NAME",
          get: function () {
            return W
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.tooltip"
          }
        }, {
          key: "Event",
          get: function () {
            return Y
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.tooltip"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return $
          }
        }]), e
      }();
    t.fn[W] = K._jQueryInterface, t.fn[W].Constructor = K, t.fn[W].noConflict = function () {
      return t.fn[W] = z, K._jQueryInterface
    };
    var G = "popover",
      J = t.fn[G],
      Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      ee = a(a({}, K.Default), {}, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      te = a(a({}, K.DefaultType), {}, {
        content: "(string|element|function)"
      }),
      ne = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      },
      ie = function (e) {
        var n, i;

        function r() {
          return e.apply(this, arguments) || this
        }
        i = e, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
        var s = r.prototype;
        return s.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, s.addAttachmentClass = function (e) {
          t(this.getTipElement()).addClass("bs-popover-" + e)
        }, s.getTipElement = function () {
          return this.tip = this.tip || t(this.config.template)[0], this.tip
        }, s.setContent = function () {
          var e = t(this.getTipElement());
          this.setElementContent(e.find(".popover-header"), this.getTitle());
          var n = this._getContent();
          "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
        }, s._getContent = function () {
          return this.element.getAttribute("data-content") || this.config.content
        }, s._cleanTipClass = function () {
          var e = t(this.getTipElement()),
            n = e.attr("class").match(Z);
          null !== n && n.length > 0 && e.removeClass(n.join(""))
        }, r._jQueryInterface = function (e) {
          return this.each((function () {
            var n = t(this).data("bs.popover"),
              i = "object" == typeof e ? e : null;
            if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
              n[e]()
            }
          }))
        }, o(r, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return ee
          }
        }, {
          key: "NAME",
          get: function () {
            return G
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.popover"
          }
        }, {
          key: "Event",
          get: function () {
            return ne
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return ".bs.popover"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return te
          }
        }]), r
      }(K);
    t.fn[G] = ie._jQueryInterface, t.fn[G].Constructor = ie, t.fn[G].noConflict = function () {
      return t.fn[G] = J, ie._jQueryInterface
    };
    var oe = "scrollspy",
      re = t.fn[oe],
      se = {
        offset: 10,
        method: "auto",
        target: ""
      },
      ae = {
        offset: "number",
        method: "string",
        target: "(string|element)"
      },
      le = function () {
        function e(e, n) {
          var i = this;
          this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on("scroll.bs.scrollspy", (function (e) {
            return i._process(e)
          })), this.refresh(), this._process()
        }
        var n = e.prototype;
        return n.refresh = function () {
          var e = this,
            n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            i = "auto" === this._config.method ? n : this._config.method,
            o = "position" === i ? this._getScrollTop() : 0;
          this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (e) {
            var n, r = c.getSelectorFromElement(e);
            if (r && (n = document.querySelector(r)), n) {
              var s = n.getBoundingClientRect();
              if (s.width || s.height) return [t(n)[i]().top + o, r]
            }
            return null
          })).filter((function (e) {
            return e
          })).sort((function (e, t) {
            return e[0] - t[0]
          })).forEach((function (t) {
            e._offsets.push(t[0]), e._targets.push(t[1])
          }))
        }, n.dispose = function () {
          t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, n._getConfig = function (e) {
          if ("string" != typeof (e = a(a({}, se), "object" == typeof e && e ? e : {})).target && c.isElement(e.target)) {
            var n = t(e.target).attr("id");
            n || (n = c.getUID(oe), t(e.target).attr("id", n)), e.target = "#" + n
          }
          return c.typeCheckConfig(oe, e, ae), e
        }, n._getScrollTop = function () {
          return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, n._getScrollHeight = function () {
          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, n._getOffsetHeight = function () {
          return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, n._process = function () {
          var e = this._getScrollTop() + this._config.offset,
            t = this._getScrollHeight(),
            n = this._config.offset + t - this._getOffsetHeight();
          if (this._scrollHeight !== t && this.refresh(), e >= n) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i)
          } else {
            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
          }
        }, n._activate = function (e) {
          this._activeTarget = e, this._clear();
          var n = this._selector.split(",").map((function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })),
            i = t([].slice.call(document.querySelectorAll(n.join(","))));
          i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), t(this._scrollElement).trigger("activate.bs.scrollspy", {
            relatedTarget: e
          })
        }, n._clear = function () {
          [].slice.call(document.querySelectorAll(this._selector)).filter((function (e) {
            return e.classList.contains("active")
          })).forEach((function (e) {
            return e.classList.remove("active")
          }))
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this).data("bs.scrollspy");
            if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
              if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
              i[n]()
            }
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "Default",
          get: function () {
            return se
          }
        }]), e
      }();
    t(window).on("load.bs.scrollspy.data-api", (function () {
      for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
        var i = t(e[n]);
        le._jQueryInterface.call(i, i.data())
      }
    })), t.fn[oe] = le._jQueryInterface, t.fn[oe].Constructor = le, t.fn[oe].noConflict = function () {
      return t.fn[oe] = re, le._jQueryInterface
    };
    var ce = t.fn.tab,
      ue = function () {
        function e(e) {
          this._element = e
        }
        var n = e.prototype;
        return n.show = function () {
          var e = this;
          if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
            var n, i, o = t(this._element).closest(".nav, .list-group")[0],
              r = c.getSelectorFromElement(this._element);
            if (o) {
              var s = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
              i = (i = t.makeArray(t(o).find(s)))[i.length - 1]
            }
            var a = t.Event("hide.bs.tab", {
                relatedTarget: this._element
              }),
              l = t.Event("show.bs.tab", {
                relatedTarget: i
              });
            if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
              r && (n = document.querySelector(r)), this._activate(this._element, o);
              var u = function () {
                var n = t.Event("hidden.bs.tab", {
                    relatedTarget: e._element
                  }),
                  o = t.Event("shown.bs.tab", {
                    relatedTarget: i
                  });
                t(i).trigger(n), t(e._element).trigger(o)
              };
              n ? this._activate(n, n.parentNode, u) : u()
            }
          }
        }, n.dispose = function () {
          t.removeData(this._element, "bs.tab"), this._element = null
        }, n._activate = function (e, n, i) {
          var o = this,
            r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(".active") : t(n).find("> li > .active"))[0],
            s = i && r && t(r).hasClass("fade"),
            a = function () {
              return o._transitionComplete(e, r, i)
            };
          if (r && s) {
            var l = c.getTransitionDurationFromElement(r);
            t(r).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l)
          } else a()
        }, n._transitionComplete = function (e, n, i) {
          if (n) {
            t(n).removeClass("active");
            var o = t(n.parentNode).find("> .dropdown-menu .active")[0];
            o && t(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
          }
          if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
            var r = t(e).closest(".dropdown")[0];
            if (r) {
              var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
              t(s).addClass("active")
            }
            e.setAttribute("aria-expanded", !0)
          }
          i && i()
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              o = i.data("bs.tab");
            if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
              if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
              o[n]()
            }
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }]), e
      }();
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (e) {
      e.preventDefault(), ue._jQueryInterface.call(t(this), "show")
    })), t.fn.tab = ue._jQueryInterface, t.fn.tab.Constructor = ue, t.fn.tab.noConflict = function () {
      return t.fn.tab = ce, ue._jQueryInterface
    };
    var fe = t.fn.toast,
      de = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
      },
      he = {
        animation: !0,
        autohide: !0,
        delay: 500
      },
      pe = function () {
        function e(e, t) {
          this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
        }
        var n = e.prototype;
        return n.show = function () {
          var e = this,
            n = t.Event("show.bs.toast");
          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            this._config.animation && this._element.classList.add("fade");
            var i = function () {
              e._element.classList.remove("showing"), e._element.classList.add("show"), t(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout((function () {
                e.hide()
              }), e._config.delay))
            };
            if (this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
              var o = c.getTransitionDurationFromElement(this._element);
              t(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o)
            } else i()
          }
        }, n.hide = function () {
          if (this._element.classList.contains("show")) {
            var e = t.Event("hide.bs.toast");
            t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
          }
        }, n.dispose = function () {
          clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), t(this._element).off("click.dismiss.bs.toast"), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
        }, n._getConfig = function (e) {
          return e = a(a(a({}, he), t(this._element).data()), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
        }, n._setListeners = function () {
          var e = this;
          t(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
            return e.hide()
          }))
        }, n._close = function () {
          var e = this,
            n = function () {
              e._element.classList.add("hide"), t(e._element).trigger("hidden.bs.toast")
            };
          if (this._element.classList.remove("show"), this._config.animation) {
            var i = c.getTransitionDurationFromElement(this._element);
            t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
          } else n()
        }, e._jQueryInterface = function (n) {
          return this.each((function () {
            var i = t(this),
              o = i.data("bs.toast");
            if (o || (o = new e(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
              if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
              o[n](this)
            }
          }))
        }, o(e, null, [{
          key: "VERSION",
          get: function () {
            return "4.5.0"
          }
        }, {
          key: "DefaultType",
          get: function () {
            return de
          }
        }, {
          key: "Default",
          get: function () {
            return he
          }
        }]), e
      }();
    t.fn.toast = pe._jQueryInterface, t.fn.toast.Constructor = pe, t.fn.toast.noConflict = function () {
      return t.fn.toast = fe, pe._jQueryInterface
    }, e.Alert = d, e.Button = p, e.Carousel = w, e.Collapse = k, e.Dropdown = j, e.Modal = M, e.Popover = ie, e.Scrollspy = le, e.Tab = ue, e.Toast = pe, e.Tooltip = K, e.Util = c, Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }(t, n(0), n(6))
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.getQueryString = function (e) {
    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
      n = window.location.search.substr(1).match(t);
    return null != n ? decodeURI(n[2]) : null
  }, t.getUser = function () {
    var e = localStorage.getItem("user");
    return e ? JSON.parse(e) : null
  }
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.config = {
    apiAdmin: "https://www.feeair.com:9000",
    hbApi: "http://hb.feeair.com",
    api: "https://www.feeair.com/wp-json"
  }
}, function (e, t, n) {
  "use strict";
  n.r(t),
    function (e) {
      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.16.1
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        i = function () {
          for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
          return 0
        }();
      var o = n && window.Promise ? function (e) {
        var t = !1;
        return function () {
          t || (t = !0, window.Promise.resolve().then((function () {
            t = !1, e()
          })))
        }
      } : function (e) {
        var t = !1;
        return function () {
          t || (t = !0, setTimeout((function () {
            t = !1, e()
          }), i))
        }
      };

      function r(e) {
        return e && "[object Function]" === {}.toString.call(e)
      }

      function s(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
      }

      function a(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
      }

      function l(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body
        }
        var t = s(e),
          n = t.overflow,
          i = t.overflowX,
          o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? e : l(a(e))
      }

      function c(e) {
        return e && e.referenceNode ? e.referenceNode : e
      }
      var u = n && !(!window.MSInputMethodContext || !document.documentMode),
        f = n && /MSIE 10/.test(navigator.userAgent);

      function d(e) {
        return 11 === e ? u : 10 === e ? f : u || f
      }

      function h(e) {
        if (!e) return document.documentElement;
        for (var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
      }

      function p(e) {
        return null !== e.parentNode ? p(e.parentNode) : e
      }

      function m(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? e : t,
          o = n ? t : e,
          r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
        var c = p(e);
        return c.host ? m(c.host, t) : m(e, p(t).host)
      }

      function g(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
          n = "top" === t ? "scrollTop" : "scrollLeft",
          i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
          var o = e.ownerDocument.documentElement,
            r = e.ownerDocument.scrollingElement || o;
          return r[n]
        }
        return e[n]
      }

      function v(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = g(t, "top"),
          o = g(t, "left"),
          r = n ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
      }

      function y(e, t) {
        var n = "x" === t ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
      }

      function b(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], d(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
      }

      function _(e) {
        var t = e.body,
          n = e.documentElement,
          i = d(10) && getComputedStyle(n);
        return {
          height: b("Height", t, n, i),
          width: b("Width", t, n, i)
        }
      }
      var w = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        x = function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
          }
        }(),
        E = function (e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        },
        T = Object.assign || function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
          }
          return e
        };

      function C(e) {
        return T({}, e, {
          right: e.left + e.width,
          bottom: e.top + e.height
        })
      }

      function k(e) {
        var t = {};
        try {
          if (d(10)) {
            t = e.getBoundingClientRect();
            var n = g(e, "top"),
              i = g(e, "left");
            t.top += n, t.left += i, t.bottom += n, t.right += i
          } else t = e.getBoundingClientRect()
        } catch (e) {}
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
          },
          r = "HTML" === e.nodeName ? _(e.ownerDocument) : {},
          a = r.width || e.clientWidth || o.width,
          l = r.height || e.clientHeight || o.height,
          c = e.offsetWidth - a,
          u = e.offsetHeight - l;
        if (c || u) {
          var f = s(e);
          c -= y(f, "x"), u -= y(f, "y"), o.width -= c, o.height -= u
        }
        return C(o)
      }

      function S(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = d(10),
          o = "HTML" === t.nodeName,
          r = k(e),
          a = k(t),
          c = l(e),
          u = s(t),
          f = parseFloat(u.borderTopWidth),
          h = parseFloat(u.borderLeftWidth);
        n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var p = C({
          top: r.top - a.top - f,
          left: r.left - a.left - h,
          width: r.width,
          height: r.height
        });
        if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
          var m = parseFloat(u.marginTop),
            g = parseFloat(u.marginLeft);
          p.top -= f - m, p.bottom -= f - m, p.left -= h - g, p.right -= h - g, p.marginTop = m, p.marginLeft = g
        }
        return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (p = v(p, t)), p
      }

      function N(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = S(e, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : g(n),
          a = t ? 0 : g(n, "left"),
          l = {
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: o,
            height: r
          };
        return C(l)
      }

      function D(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === s(e, "position")) return !0;
        var n = a(e);
        return !!n && D(n)
      }

      function A(e) {
        if (!e || !e.parentElement || d()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
        return t || document.documentElement
      }

      function O(e, t, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          r = {
            top: 0,
            left: 0
          },
          s = o ? A(e) : m(e, c(t));
        if ("viewport" === i) r = N(s, o);
        else {
          var u = void 0;
          "scrollParent" === i ? "BODY" === (u = l(a(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === i ? e.ownerDocument.documentElement : i;
          var f = S(u, s, o);
          if ("HTML" !== u.nodeName || D(s)) r = f;
          else {
            var d = _(e.ownerDocument),
              h = d.height,
              p = d.width;
            r.top += f.top - f.marginTop, r.bottom = h + f.top, r.left += f.left - f.marginLeft, r.right = p + f.left
          }
        }
        var g = "number" == typeof (n = n || 0);
        return r.left += g ? n : n.left || 0, r.top += g ? n : n.top || 0, r.right -= g ? n : n.right || 0, r.bottom -= g ? n : n.bottom || 0, r
      }

      function j(e) {
        return e.width * e.height
      }

      function L(e, t, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = O(n, i, r, o),
          a = {
            top: {
              width: s.width,
              height: t.top - s.top
            },
            right: {
              width: s.right - t.right,
              height: s.height
            },
            bottom: {
              width: s.width,
              height: s.bottom - t.bottom
            },
            left: {
              width: t.left - s.left,
              height: s.height
            }
          },
          l = Object.keys(a).map((function (e) {
            return T({
              key: e
            }, a[e], {
              area: j(a[e])
            })
          })).sort((function (e, t) {
            return t.area - e.area
          })),
          c = l.filter((function (e) {
            var t = e.width,
              i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight
          })),
          u = c.length > 0 ? c[0].key : l[0].key,
          f = e.split("-")[1];
        return u + (f ? "-" + f : "")
      }

      function H(e, t, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          o = i ? A(t) : m(t, c(n));
        return S(n, o, i)
      }

      function I(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
          width: e.offsetWidth + i,
          height: e.offsetHeight + n
        }
      }

      function M(e) {
        var t = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function (e) {
          return t[e]
        }))
      }

      function P(e, t, n) {
        n = n.split("-")[0];
        var i = I(e),
          o = {
            width: i.width,
            height: i.height
          },
          r = -1 !== ["right", "left"].indexOf(n),
          s = r ? "top" : "left",
          a = r ? "left" : "top",
          l = r ? "height" : "width",
          c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[M(a)], o
      }

      function q(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
      }

      function R(e, t, n) {
        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
          if (Array.prototype.findIndex) return e.findIndex((function (e) {
            return e[t] === n
          }));
          var i = q(e, (function (e) {
            return e[t] === n
          }));
          return e.indexOf(i)
        }(e, "name", n))).forEach((function (e) {
          e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var n = e.function || e.fn;
          e.enabled && r(n) && (t.offsets.popper = C(t.offsets.popper), t.offsets.reference = C(t.offsets.reference), t = n(t, e))
        })), t
      }

      function F() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          };
          e.offsets.reference = H(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = L(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = P(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
      }

      function B(e, t) {
        return e.some((function (e) {
          var n = e.name;
          return e.enabled && n === t
        }))
      }

      function W(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
          var o = t[i],
            r = o ? "" + o + n : e;
          if (void 0 !== document.body.style[r]) return r
        }
        return null
      }

      function z() {
        return this.state.isDestroyed = !0, B(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
      }

      function U(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
      }

      function Q(e, t, n, i) {
        n.updateBound = i, U(e).addEventListener("resize", n.updateBound, {
          passive: !0
        });
        var o = l(e);
        return function e(t, n, i, o) {
          var r = "BODY" === t.nodeName,
            s = r ? t.ownerDocument.defaultView : t;
          s.addEventListener(n, i, {
            passive: !0
          }), r || e(l(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
      }

      function $() {
        this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate))
      }

      function V() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, U(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
          e.removeEventListener("scroll", t.updateBound)
        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
      }

      function X(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
      }

      function Y(e, t) {
        Object.keys(t).forEach((function (n) {
          var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (i = "px"), e.style[n] = t[n] + i
        }))
      }
      var K = n && /Firefox/i.test(navigator.userAgent);

      function G(e, t, n) {
        var i = q(e, (function (e) {
            return e.name === t
          })),
          o = !!i && e.some((function (e) {
            return e.name === n && e.enabled && e.order < i.order
          }));
        if (!o) {
          var r = "`" + t + "`",
            s = "`" + n + "`";
          console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
      }
      var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Z = J.slice(3);

      function ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = Z.indexOf(e),
          i = Z.slice(n + 1).concat(Z.slice(0, n));
        return t ? i.reverse() : i
      }
      var te = "flip",
        ne = "clockwise",
        ie = "counterclockwise";

      function oe(e, t, n, i) {
        var o = [0, 0],
          r = -1 !== ["right", "left"].indexOf(i),
          s = e.split(/(\+|\-)/).map((function (e) {
            return e.trim()
          })),
          a = s.indexOf(q(s, (function (e) {
            return -1 !== e.search(/,|\s/)
          })));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
          c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map((function (e, i) {
          var o = (1 === i ? !r : r) ? "height" : "width",
            s = !1;
          return e.reduce((function (e, t) {
            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
          }), []).map((function (e) {
            return function (e, t, n, i) {
              var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                r = +o[1],
                s = o[2];
              if (!r) return e;
              if (0 === s.indexOf("%")) {
                var a = void 0;
                switch (s) {
                  case "%p":
                    a = n;
                    break;
                  case "%":
                  case "%r":
                  default:
                    a = i
                }
                return C(a)[t] / 100 * r
              }
              if ("vh" === s || "vw" === s) {
                return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
              }
              return r
            }(e, o, t, n)
          }))
        }))).forEach((function (e, t) {
          e.forEach((function (n, i) {
            X(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
          }))
        })), o
      }
      var re = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: {
            shift: {
              order: 100,
              enabled: !0,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  i = t.split("-")[1];
                if (i) {
                  var o = e.offsets,
                    r = o.reference,
                    s = o.popper,
                    a = -1 !== ["bottom", "top"].indexOf(n),
                    l = a ? "left" : "top",
                    c = a ? "width" : "height",
                    u = {
                      start: E({}, l, r[l]),
                      end: E({}, l, r[l] + r[c] - s[c])
                    };
                  e.offsets.popper = T({}, s, u[i])
                }
                return e
              }
            },
            offset: {
              order: 200,
              enabled: !0,
              fn: function (e, t) {
                var n = t.offset,
                  i = e.placement,
                  o = e.offsets,
                  r = o.popper,
                  s = o.reference,
                  a = i.split("-")[0],
                  l = void 0;
                return l = X(+n) ? [+n, 0] : oe(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
              },
              offset: 0
            },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: function (e, t) {
                var n = t.boundariesElement || h(e.instance.popper);
                e.instance.reference === n && (n = h(n));
                var i = W("transform"),
                  o = e.instance.popper.style,
                  r = o.top,
                  s = o.left,
                  a = o[i];
                o.top = "", o.left = "", o[i] = "";
                var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                o.top = r, o.left = s, o[i] = a, t.boundaries = l;
                var c = t.priority,
                  u = e.offsets.popper,
                  f = {
                    primary: function (e) {
                      var n = u[e];
                      return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), E({}, e, n)
                    },
                    secondary: function (e) {
                      var n = "right" === e ? "left" : "top",
                        i = u[n];
                      return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), E({}, n, i)
                    }
                  };
                return c.forEach((function (e) {
                  var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  u = T({}, u, f[t](e))
                })), e.offsets.popper = u, e
              },
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent"
            },
            keepTogether: {
              order: 400,
              enabled: !0,
              fn: function (e) {
                var t = e.offsets,
                  n = t.popper,
                  i = t.reference,
                  o = e.placement.split("-")[0],
                  r = Math.floor,
                  s = -1 !== ["top", "bottom"].indexOf(o),
                  a = s ? "right" : "bottom",
                  l = s ? "left" : "top",
                  c = s ? "width" : "height";
                return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
              }
            },
            arrow: {
              order: 500,
              enabled: !0,
              fn: function (e, t) {
                var n;
                if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
                var i = t.element;
                if ("string" == typeof i) {
                  if (!(i = e.instance.popper.querySelector(i))) return e
                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                var o = e.placement.split("-")[0],
                  r = e.offsets,
                  a = r.popper,
                  l = r.reference,
                  c = -1 !== ["left", "right"].indexOf(o),
                  u = c ? "height" : "width",
                  f = c ? "Top" : "Left",
                  d = f.toLowerCase(),
                  h = c ? "left" : "top",
                  p = c ? "bottom" : "right",
                  m = I(i)[u];
                l[p] - m < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - m)), l[d] + m > a[p] && (e.offsets.popper[d] += l[d] + m - a[p]), e.offsets.popper = C(e.offsets.popper);
                var g = l[d] + l[u] / 2 - m / 2,
                  v = s(e.instance.popper),
                  y = parseFloat(v["margin" + f]),
                  b = parseFloat(v["border" + f + "Width"]),
                  _ = g - e.offsets.popper[d] - y - b;
                return _ = Math.max(Math.min(a[u] - m, _), 0), e.arrowElement = i, e.offsets.arrow = (E(n = {}, d, Math.round(_)), E(n, h, ""), n), e
              },
              element: "[x-arrow]"
            },
            flip: {
              order: 600,
              enabled: !0,
              fn: function (e, t) {
                if (B(e.instance.modifiers, "inner")) return e;
                if (e.flipped && e.placement === e.originalPlacement) return e;
                var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                  i = e.placement.split("-")[0],
                  o = M(i),
                  r = e.placement.split("-")[1] || "",
                  s = [];
                switch (t.behavior) {
                  case te:
                    s = [i, o];
                    break;
                  case ne:
                    s = ee(i);
                    break;
                  case ie:
                    s = ee(i, !0);
                    break;
                  default:
                    s = t.behavior
                }
                return s.forEach((function (a, l) {
                  if (i !== a || s.length === l + 1) return e;
                  i = e.placement.split("-")[0], o = M(i);
                  var c = e.offsets.popper,
                    u = e.offsets.reference,
                    f = Math.floor,
                    d = "left" === i && f(c.right) > f(u.left) || "right" === i && f(c.left) < f(u.right) || "top" === i && f(c.bottom) > f(u.top) || "bottom" === i && f(c.top) < f(u.bottom),
                    h = f(c.left) < f(n.left),
                    p = f(c.right) > f(n.right),
                    m = f(c.top) < f(n.top),
                    g = f(c.bottom) > f(n.bottom),
                    v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                    y = -1 !== ["top", "bottom"].indexOf(i),
                    b = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g),
                    _ = !!t.flipVariationsByContent && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m),
                    w = b || _;
                  (d || v || w) && (e.flipped = !0, (d || v) && (i = s[l + 1]), w && (r = function (e) {
                    return "end" === e ? "start" : "start" === e ? "end" : e
                  }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = T({}, e.offsets.popper, P(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"))
                })), e
              },
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
              flipVariations: !1,
              flipVariationsByContent: !1
            },
            inner: {
              order: 700,
              enabled: !1,
              fn: function (e) {
                var t = e.placement,
                  n = t.split("-")[0],
                  i = e.offsets,
                  o = i.popper,
                  r = i.reference,
                  s = -1 !== ["left", "right"].indexOf(n),
                  a = -1 === ["top", "left"].indexOf(n);
                return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = M(t), e.offsets.popper = C(o), e
              }
            },
            hide: {
              order: 800,
              enabled: !0,
              fn: function (e) {
                if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
                var t = e.offsets.reference,
                  n = q(e.instance.modifiers, (function (e) {
                    return "preventOverflow" === e.name
                  })).boundaries;
                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                  if (!0 === e.hide) return e;
                  e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                } else {
                  if (!1 === e.hide) return e;
                  e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                }
                return e
              }
            },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: function (e, t) {
                var n = t.x,
                  i = t.y,
                  o = e.offsets.popper,
                  r = q(e.instance.modifiers, (function (e) {
                    return "applyStyle" === e.name
                  })).gpuAcceleration;
                void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                var s = void 0 !== r ? r : t.gpuAcceleration,
                  a = h(e.instance.popper),
                  l = k(a),
                  c = {
                    position: o.position
                  },
                  u = function (e, t) {
                    var n = e.offsets,
                      i = n.popper,
                      o = n.reference,
                      r = Math.round,
                      s = Math.floor,
                      a = function (e) {
                        return e
                      },
                      l = r(o.width),
                      c = r(i.width),
                      u = -1 !== ["left", "right"].indexOf(e.placement),
                      f = -1 !== e.placement.indexOf("-"),
                      d = t ? u || f || l % 2 == c % 2 ? r : s : a,
                      h = t ? r : a;
                    return {
                      left: d(l % 2 == 1 && c % 2 == 1 && !f && t ? i.left - 1 : i.left),
                      top: h(i.top),
                      bottom: h(i.bottom),
                      right: d(i.right)
                    }
                  }(e, window.devicePixelRatio < 2 || !K),
                  f = "bottom" === n ? "top" : "bottom",
                  d = "right" === i ? "left" : "right",
                  p = W("transform"),
                  m = void 0,
                  g = void 0;
                if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === d ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[f] = 0, c[d] = 0, c.willChange = "transform";
                else {
                  var v = "bottom" === f ? -1 : 1,
                    y = "right" === d ? -1 : 1;
                  c[f] = g * v, c[d] = m * y, c.willChange = f + ", " + d
                }
                var b = {
                  "x-placement": e.placement
                };
                return e.attributes = T({}, b, e.attributes), e.styles = T({}, c, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
              },
              gpuAcceleration: !0,
              x: "bottom",
              y: "right"
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: function (e) {
                var t, n;
                return Y(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                })), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
              },
              onLoad: function (e, t, n, i, o) {
                var r = H(o, t, e, n.positionFixed),
                  s = L(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                return t.setAttribute("x-placement", s), Y(t, {
                  position: n.positionFixed ? "fixed" : "absolute"
                }), n
              },
              gpuAcceleration: void 0
            }
          }
        },
        se = function () {
          function e(t, n) {
            var i = this,
              s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            w(this, e), this.scheduleUpdate = function () {
              return requestAnimationFrame(i.update)
            }, this.update = o(this.update.bind(this)), this.options = T({}, e.Defaults, s), this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, s.modifiers)).forEach((function (t) {
              i.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
            })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
              return T({
                name: e
              }, i.options.modifiers[e])
            })).sort((function (e, t) {
              return e.order - t.order
            })), this.modifiers.forEach((function (e) {
              e.enabled && r(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
            })), this.update();
            var a = this.options.eventsEnabled;
            a && this.enableEventListeners(), this.state.eventsEnabled = a
          }
          return x(e, [{
            key: "update",
            value: function () {
              return F.call(this)
            }
          }, {
            key: "destroy",
            value: function () {
              return z.call(this)
            }
          }, {
            key: "enableEventListeners",
            value: function () {
              return $.call(this)
            }
          }, {
            key: "disableEventListeners",
            value: function () {
              return V.call(this)
            }
          }]), e
        }();
      se.Utils = ("undefined" != typeof window ? window : e).PopperUtils, se.placements = J, se.Defaults = re, t.default = se
    }.call(this, n(4))
}, function (e, t, n) {
  "use strict";
  var i, o = n(0),
    r = (i = o) && i.__esModule ? i : {
      default: i
    };
  n(2), n(1), n(8);
  var s = n(3);
  (0, r.default)((function () {
    var e = (0, s.getUser)();
    e ? ((0, r.default)("#header-user").on("click", (function () {
      location.href = "center.html"
    })), (0, r.default)("#header-user").html(e.membername), (0, r.default)("#header-logout").removeClass("d-none")) : (0, r.default)("#header-user").on("click", (function () {
      location.href = "login.html"
    })), (0, r.default)("#header-logout").on("click", (function () {
      localStorage.clear(), location.href = "login.html"
    }))
  }))
}, function (e, t, n) {}, function (e, t, n) {
  var i;
  ! function (n) {
    "use strict";
    var o = 13,
      r = 27,
      s = 112,
      a = 123,
      l = 37,
      c = 39,
      u = 9,
      f = {
        autoReset: !0,
        basic: !1,
        closable: !0,
        closableByDimmer: !0,
        invokeOnCloseOff: !1,
        frameless: !1,
        defaultFocusOff: !1,
        maintainFocus: !0,
        maximizable: !0,
        modal: !0,
        movable: !0,
        moveBounded: !1,
        overflow: !0,
        padding: !0,
        pinnable: !0,
        pinned: !0,
        preventBodyShift: !1,
        resizable: !0,
        startMaximized: !1,
        transition: "pulse",
        transitionOff: !1,
        tabbable: ["button", "[href]", "input", "select", "textarea", '[tabindex]:not([tabindex^="-"]):not(:disabled):not(.ajs-reset)'].join(":not(:disabled):not(.ajs-reset),"),
        notifier: {
          delay: 5,
          position: "bottom-right",
          closeButton: !1,
          classes: {
            base: "alertify-notifier",
            prefix: "ajs-",
            message: "ajs-message",
            top: "ajs-top",
            right: "ajs-right",
            bottom: "ajs-bottom",
            left: "ajs-left",
            center: "ajs-center",
            visible: "ajs-visible",
            hidden: "ajs-hidden",
            close: "ajs-close"
          }
        },
        glossary: {
          title: "AlertifyJS",
          ok: "OK",
          cancel: "Cancel",
          acccpt: "Accept",
          deny: "Deny",
          confirm: "Confirm",
          decline: "Decline",
          close: "Close",
          maximize: "Maximize",
          restore: "Restore"
        },
        theme: {
          input: "ajs-input",
          ok: "ajs-ok",
          cancel: "ajs-cancel"
        },
        hooks: {
          preinit: function () {},
          postinit: function () {}
        }
      },
      d = [];

    function h(e, t) {
      e.className += " " + t
    }

    function p(e, t) {
      for (var n = e.className.split(" "), i = t.split(" "), o = 0; o < i.length; o += 1) {
        var r = n.indexOf(i[o]);
        r > -1 && n.splice(r, 1)
      }
      e.className = n.join(" ")
    }

    function m() {
      return "rtl" === n.getComputedStyle(document.body).direction
    }

    function g() {
      return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
    }

    function v() {
      return document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft
    }

    function y(e) {
      for (; e.lastChild;) e.removeChild(e.lastChild)
    }

    function b(e) {
      if (null === e) return e;
      var t;
      if (Array.isArray(e)) {
        t = [];
        for (var n = 0; n < e.length; n += 1) t.push(b(e[n]));
        return t
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) return (t = new RegExp(e.source)).global = e.global, t.ignoreCase = e.ignoreCase, t.multiline = e.multiline, t.lastIndex = e.lastIndex, t;
      if ("object" == typeof e) {
        for (var i in t = {}, e) e.hasOwnProperty(i) && (t[i] = b(e[i]));
        return t
      }
      return e
    }

    function _(e, t) {
      if (e.elements) {
        var n = e.elements.root;
        n.parentNode.removeChild(n), delete e.elements, e.settings = b(e.__settings), e.__init = t, delete e.__internal
      }
    }
    var w = !1;
    try {
      var x = Object.defineProperty({}, "passive", {
        get: function () {
          w = !0
        }
      });
      n.addEventListener("test", x, x), n.removeEventListener("test", x, x)
    } catch (e) {}
    var E = function (e, t, n, i, o) {
        e.addEventListener(t, n, w ? {
          capture: i,
          passive: o
        } : !0 === i)
      },
      T = function (e, t, n, i, o) {
        e.removeEventListener(t, n, w ? {
          capture: i,
          passive: o
        } : !0 === i)
      },
      C = function () {
        var e, t, n = !1,
          i = {
            animation: "animationend",
            OAnimation: "oAnimationEnd oanimationend",
            msAnimation: "MSAnimationEnd",
            MozAnimation: "animationend",
            WebkitAnimation: "webkitAnimationEnd"
          };
        for (e in i)
          if (void 0 !== document.documentElement.style[e]) {
            t = i[e], n = !0;
            break
          } return {
          type: t,
          supported: n
        }
      }();

    function k(e, t) {
      return function () {
        if (arguments.length > 0) {
          for (var n = [], i = 0; i < arguments.length; i += 1) n.push(arguments[i]);
          return n.push(e), t.apply(e, n)
        }
        return t.apply(e, [null, e])
      }
    }

    function S(e, t) {
      return {
        index: e,
        button: t,
        cancel: !1
      }
    }

    function N(e, t) {
      if ("function" == typeof t.get(e)) return t.get(e).call(t)
    }
    var D = function () {
        var e, t, i = [],
          o = !1,
          w = n.navigator.userAgent.indexOf("Safari") > -1 && n.navigator.userAgent.indexOf("Chrome") < 0,
          x = '<div class="ajs-dimmer"></div>',
          D = '<div class="ajs-modal" tabindex="0"></div>',
          A = '<div class="ajs-dialog" tabindex="0"></div>',
          j = '<button class="ajs-reset"></button>',
          L = '<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',
          H = '<div class="ajs-header"></div>',
          I = '<div class="ajs-body"></div>',
          M = '<div class="ajs-content"></div>',
          P = '<div class="ajs-footer"></div>',
          q = {
            primary: '<div class="ajs-primary ajs-buttons"></div>',
            auxiliary: '<div class="ajs-auxiliary ajs-buttons"></div>'
          },
          R = '<button class="ajs-button"></button>',
          F = '<div class="ajs-handle"></div>',
          B = "ajs-in",
          W = "ajs-out",
          z = "alertify",
          U = "ajs-basic",
          Q = "ajs-capture",
          $ = "ajs-closable",
          V = "ajs-fixed",
          X = "ajs-frameless",
          Y = "ajs-hidden",
          K = "ajs-maximized",
          G = "ajs-maximizable",
          J = "ajs-modeless",
          Z = "ajs-movable",
          ee = "ajs-no-selection",
          te = "ajs-no-overflow",
          ne = "ajs-no-padding",
          ie = "ajs-pinnable",
          oe = "ajs-",
          re = "ajs-resizable",
          se = "ajs-shake",
          ae = "ajs-unpinned",
          le = "ajs-no-transition";

        function ce(e) {
          if (!e.__internal) {
            var t;
            O.defaults.hooks.preinit(e), delete e.__init, e.__settings || (e.__settings = b(e.settings)), "function" == typeof e.setup ? ((t = e.setup()).options = t.options || {}, t.focus = t.focus || {}) : t = {
              buttons: [],
              focus: {
                element: null,
                select: !1
              },
              options: {}
            }, "object" != typeof e.hooks && (e.hooks = {});
            var n = [];
            if (Array.isArray(t.buttons))
              for (var o = 0; o < t.buttons.length; o += 1) {
                var r = t.buttons[o],
                  s = {};
                for (var a in r) r.hasOwnProperty(a) && (s[a] = r[a]);
                n.push(s)
              }
            var l = e.__internal = {
                isOpen: !1,
                activeElement: document.body,
                timerIn: void 0,
                timerOut: void 0,
                buttons: n,
                focus: t.focus,
                options: {
                  title: void 0,
                  modal: void 0,
                  basic: void 0,
                  frameless: void 0,
                  defaultFocusOff: void 0,
                  pinned: void 0,
                  movable: void 0,
                  moveBounded: void 0,
                  resizable: void 0,
                  autoReset: void 0,
                  closable: void 0,
                  closableByDimmer: void 0,
                  invokeOnCloseOff: void 0,
                  maximizable: void 0,
                  startMaximized: void 0,
                  pinnable: void 0,
                  transition: void 0,
                  transitionOff: void 0,
                  padding: void 0,
                  overflow: void 0,
                  onshow: void 0,
                  onclosing: void 0,
                  onclose: void 0,
                  onfocus: void 0,
                  onmove: void 0,
                  onmoved: void 0,
                  onresize: void 0,
                  onresized: void 0,
                  onmaximize: void 0,
                  onmaximized: void 0,
                  onrestore: void 0,
                  onrestored: void 0
                },
                resetHandler: void 0,
                beginMoveHandler: void 0,
                beginResizeHandler: void 0,
                bringToFrontHandler: void 0,
                modalClickHandler: void 0,
                buttonsClickHandler: void 0,
                commandsClickHandler: void 0,
                transitionInHandler: void 0,
                transitionOutHandler: void 0,
                destroy: void 0
              },
              c = {};
            c.root = document.createElement("div"), c.root.style.display = "none", c.root.className = z + " " + Y + " ", c.root.innerHTML = x + D, c.dimmer = c.root.firstChild, c.modal = c.root.lastChild, c.modal.innerHTML = A, c.dialog = c.modal.firstChild, c.dialog.innerHTML = j + L + H + I + P + F + j, c.reset = [], c.reset.push(c.dialog.firstChild), c.reset.push(c.dialog.lastChild), c.commands = {}, c.commands.container = c.reset[0].nextSibling, c.commands.pin = c.commands.container.firstChild, c.commands.maximize = c.commands.pin.nextSibling, c.commands.close = c.commands.maximize.nextSibling, c.header = c.commands.container.nextSibling, c.body = c.header.nextSibling, c.body.innerHTML = M, c.content = c.body.firstChild, c.footer = c.body.nextSibling, c.footer.innerHTML = q.auxiliary + q.primary, c.resizeHandle = c.footer.nextSibling, c.buttons = {}, c.buttons.auxiliary = c.footer.firstChild, c.buttons.primary = c.buttons.auxiliary.nextSibling, c.buttons.primary.innerHTML = R, c.buttonTemplate = c.buttons.primary.firstChild, c.buttons.primary.removeChild(c.buttonTemplate);
            for (var u = 0; u < e.__internal.buttons.length; u += 1) {
              var f = e.__internal.buttons[u];
              for (var d in i.indexOf(f.key) < 0 && i.push(f.key), f.element = c.buttonTemplate.cloneNode(), f.element.innerHTML = f.text, "string" == typeof f.className && "" !== f.className && h(f.element, f.className), f.attrs) "className" !== d && f.attrs.hasOwnProperty(d) && f.element.setAttribute(d, f.attrs[d]);
              "auxiliary" === f.scope ? c.buttons.auxiliary.appendChild(f.element) : c.buttons.primary.appendChild(f.element)
            }
            for (var p in e.elements = c, l.resetHandler = k(e, Pe), l.beginMoveHandler = k(e, Je), l.beginResizeHandler = k(e, at), l.bringToFrontHandler = k(e, me), l.modalClickHandler = k(e, De), l.buttonsClickHandler = k(e, Le), l.commandsClickHandler = k(e, be), l.transitionInHandler = k(e, Fe), l.transitionOutHandler = k(e, Be), l.options) void 0 !== t.options[p] ? e.set(p, t.options[p]) : O.defaults.hasOwnProperty(p) ? e.set(p, O.defaults[p]) : "title" === p && e.set(p, O.defaults.glossary[p]);
            "function" == typeof e.build && e.build(), O.defaults.hooks.postinit(e)
          }
          document.body.appendChild(e.elements.root)
        }

        function ue() {
          n.scrollTo(e, t)
        }

        function fe() {
          for (var e = 0, t = 0; t < d.length; t += 1) {
            var n = d[t];
            (n.isModal() || n.isMaximized()) && (e += 1)
          }
          0 === e && document.body.className.indexOf(te) >= 0 ? (p(document.body, te), pe(!1)) : e > 0 && document.body.className.indexOf(te) < 0 && (pe(!0), h(document.body, te))
        }
        var de = "",
          he = 0;

        function pe(e) {
          O.defaults.preventBodyShift && (e && document.documentElement.scrollHeight > document.documentElement.clientHeight ? (he = t, de = n.getComputedStyle(document.body).top, h(document.body, V), document.body.style.top = -t + "px") : e || (t = he, document.body.style.top = de, p(document.body, V), ue()))
        }

        function me(e, t) {
          for (var n = d.indexOf(t) + 1; n < d.length; n += 1)
            if (d[n].isModal()) return;
          return document.body.lastChild !== t.elements.root && (document.body.appendChild(t.elements.root), d.splice(d.indexOf(t), 1), d.push(t), Me(t)), !1
        }

        function ge(e, t, n, i) {
          switch (t) {
            case "title":
              e.setHeader(i);
              break;
            case "modal":
              ! function (e) {
                e.get("modal") ? (p(e.elements.root, J), e.isOpen() && (ht(e), ke(e), fe())) : (h(e.elements.root, J), e.isOpen() && (dt(e), ke(e), fe()))
              }(e);
              break;
            case "basic":
              ! function (e) {
                e.get("basic") ? h(e.elements.root, U) : p(e.elements.root, U)
              }(e);
              break;
            case "frameless":
              ! function (e) {
                e.get("frameless") ? h(e.elements.root, X) : p(e.elements.root, X)
              }(e);
              break;
            case "pinned":
              ! function (e) {
                e.get("pinned") ? (p(e.elements.root, ae), e.isOpen() && Ce(e)) : (h(e.elements.root, ae), e.isOpen() && !e.isModal() && Te(e))
              }(e);
              break;
            case "closable":
              ! function (e) {
                e.get("closable") ? (h(e.elements.root, $), function (e) {
                  E(e.elements.modal, "click", e.__internal.modalClickHandler)
                }(e)) : (p(e.elements.root, $), function (e) {
                  T(e.elements.modal, "click", e.__internal.modalClickHandler)
                }(e))
              }(e);
              break;
            case "maximizable":
              ! function (e) {
                e.get("maximizable") ? h(e.elements.root, G) : p(e.elements.root, G)
              }(e);
              break;
            case "pinnable":
              ! function (e) {
                e.get("pinnable") ? h(e.elements.root, ie) : p(e.elements.root, ie)
              }(e);
              break;
            case "movable":
              ! function (e) {
                e.get("movable") ? (h(e.elements.root, Z), e.isOpen() && pt(e)) : (tt(e), p(e.elements.root, Z), e.isOpen() && mt(e))
              }(e);
              break;
            case "resizable":
              ! function (e) {
                e.get("resizable") ? (h(e.elements.root, re), e.isOpen() && gt(e)) : (ut(e), p(e.elements.root, re), e.isOpen() && vt(e))
              }(e);
              break;
            case "padding":
              i ? p(e.elements.root, ne) : e.elements.root.className.indexOf(ne) < 0 && h(e.elements.root, ne);
              break;
            case "overflow":
              i ? p(e.elements.root, te) : e.elements.root.className.indexOf(te) < 0 && h(e.elements.root, te);
              break;
            case "transition":
              ! function (e, t, n) {
                "string" == typeof n && p(e.elements.root, oe + n), h(e.elements.root, oe + t), e.elements.root.offsetWidth
              }(e, i, n);
              break;
            case "transitionOff":
              ! function (e) {
                e.get("transitionOff") ? h(e.elements.root, le) : p(e.elements.root, le)
              }(e)
          }
          "function" == typeof e.hooks.onupdate && e.hooks.onupdate.call(e, t, n, i)
        }

        function ve(e, t, n, i, o) {
          var r, s = {
            op: void 0,
            items: []
          };
          if (void 0 === o && "string" == typeof i) s.op = "get", t.hasOwnProperty(i) ? (s.found = !0, s.value = t[i]) : (s.found = !1, s.value = void 0);
          else if (s.op = "set", "object" == typeof i) {
            var a = i;
            for (var l in a) t.hasOwnProperty(l) ? (t[l] !== a[l] && (r = t[l], t[l] = a[l], n.call(e, l, r, a[l])), s.items.push({
              key: l,
              value: a[l],
              found: !0
            })) : s.items.push({
              key: l,
              value: a[l],
              found: !1
            })
          } else {
            if ("string" != typeof i) throw new Error("args must be a string or object");
            t.hasOwnProperty(i) ? (t[i] !== o && (r = t[i], t[i] = o, n.call(e, i, r, o)), s.items.push({
              key: i,
              value: o,
              found: !0
            })) : s.items.push({
              key: i,
              value: o,
              found: !1
            })
          }
          return s
        }

        function ye(e) {
          var t;
          je(e, (function (n) {
            return t = !0 !== e.get("invokeOnCloseOff") && !0 === n.invokeOnClose
          })), !t && e.isOpen() && e.close()
        }

        function be(e, t) {
          switch (e.srcElement || e.target) {
            case t.elements.commands.pin:
              t.isPinned() ? we(t) : _e(t);
              break;
            case t.elements.commands.maximize:
              t.isMaximized() ? Ee(t) : xe(t);
              break;
            case t.elements.commands.close:
              ye(t)
          }
          return !1
        }

        function _e(e) {
          e.set("pinned", !0)
        }

        function we(e) {
          e.set("pinned", !1)
        }

        function xe(e) {
          N("onmaximize", e), h(e.elements.root, K), e.isOpen() && fe(), N("onmaximized", e)
        }

        function Ee(e) {
          N("onrestore", e), p(e.elements.root, K), e.isOpen() && fe(), N("onrestored", e)
        }

        function Te(e) {
          var t = v();
          e.elements.modal.style.marginTop = g() + "px", e.elements.modal.style.marginLeft = t + "px", e.elements.modal.style.marginRight = -t + "px"
        }

        function Ce(e) {
          var t = parseInt(e.elements.modal.style.marginTop, 10),
            n = parseInt(e.elements.modal.style.marginLeft, 10);
          if (e.elements.modal.style.marginTop = "", e.elements.modal.style.marginLeft = "", e.elements.modal.style.marginRight = "", e.isOpen()) {
            var i = 0,
              o = 0;
            "" !== e.elements.dialog.style.top && (i = parseInt(e.elements.dialog.style.top, 10)), e.elements.dialog.style.top = i + (t - g()) + "px", "" !== e.elements.dialog.style.left && (o = parseInt(e.elements.dialog.style.left, 10)), e.elements.dialog.style.left = o + (n - v()) + "px"
          }
        }

        function ke(e) {
          e.get("modal") || e.get("pinned") ? Ce(e) : Te(e)
        }
        var Se = !1,
          Ne = 0;

        function De(e, t) {
          if (e.timeStamp - Ne > 200 && (Ne = e.timeStamp) && !Se) {
            var n = e.srcElement || e.target;
            !0 === t.get("closableByDimmer") && n === t.elements.modal && ye(t)
          }
          Se = !1
        }
        var Ae = 0,
          Oe = !1;

        function je(e, t) {
          if (Date.now() - Ae > 200 && (Ae = Date.now()))
            for (var n = 0; n < e.__internal.buttons.length; n += 1) {
              var i = e.__internal.buttons[n];
              if (!i.element.disabled && t(i)) {
                var o = S(n, i);
                "function" == typeof e.callback && e.callback.apply(e, [o]), !1 === o.cancel && e.close();
                break
              }
            }
        }

        function Le(e, t) {
          var n = e.srcElement || e.target;
          je(t, (function (e) {
            return e.element === n && (Oe = !0)
          }))
        }

        function He(e) {
          if (!Oe) {
            var t = d[d.length - 1],
              n = e.keyCode;
            return 0 === t.__internal.buttons.length && n === r && !0 === t.get("closable") ? (ye(t), !1) : i.indexOf(n) > -1 ? (je(t, (function (e) {
              return e.key === n
            })), !1) : void 0
          }
          Oe = !1
        }

        function Ie(e) {
          var t = d[d.length - 1],
            n = e.keyCode;
          if (n === l || n === c) {
            for (var o = t.__internal.buttons, r = 0; r < o.length; r += 1)
              if (document.activeElement === o[r].element) switch (n) {
                case l:
                  return void o[(r || o.length) - 1].element.focus();
                case c:
                  return void o[(r + 1) % o.length].element.focus()
              }
          } else if (n < a + 1 && n > s - 1 && i.indexOf(n) > -1) return e.preventDefault(), e.stopPropagation(), je(t, (function (e) {
            return e.key === n
          })), !1
        }

        function Me(e, t) {
          if (t) t.focus();
          else {
            var n = e.__internal.focus,
              i = n.element;
            switch (typeof n.element) {
              case "number":
                e.__internal.buttons.length > n.element && (i = !0 === e.get("basic") ? e.elements.reset[0] : e.__internal.buttons[n.element].element);
                break;
              case "string":
                i = e.elements.body.querySelector(n.element);
                break;
              case "function":
                i = n.element.call(e)
            }(!0 === e.get("defaultFocusOff") || null == i && 0 === e.__internal.buttons.length) && (i = e.elements.reset[0]), i && i.focus && (i.focus(), n.select && i.select && i.select())
          }
        }

        function Pe(e, t) {
          if (!t)
            for (var n = d.length - 1; n > -1; n -= 1)
              if (d[n].isModal()) {
                t = d[n];
                break
              } if (t && t.isModal()) {
            var i, o = t.elements.reset[0],
              r = t.elements.reset[1],
              s = e.relatedTarget,
              a = t.elements.root.contains(s),
              l = e.srcElement || e.target;
            if (l === o && !a || l === r && s === o) return;
            l === r || l === document.body ? i = o : l === o && s === r ? i = qe(t) : l === o && a && (i = qe(t, !0)), Me(t, i)
          }
        }

        function qe(e, t) {
          var n = [].slice.call(e.elements.dialog.querySelectorAll(f.tabbable));
          t && n.reverse();
          for (var i = 0; i < n.length; i += 1) {
            var o = n[i];
            if (o.offsetParent || o.offsetWidth || o.offsetHeight || o.getClientRects().length) return o
          }
        }

        function Re(e) {
          var t = d[d.length - 1];
          t && e.shiftKey && e.keyCode === u && t.elements.reset[1].focus()
        }

        function Fe(e, t) {
          clearTimeout(t.__internal.timerIn), Me(t), Oe = !1, N("onfocus", t), T(t.elements.dialog, C.type, t.__internal.transitionInHandler), p(t.elements.root, B)
        }

        function Be(e, t) {
          clearTimeout(t.__internal.timerOut), T(t.elements.dialog, C.type, t.__internal.transitionOutHandler), tt(t), ut(t), t.isMaximized() && !t.get("startMaximized") && Ee(t), "function" == typeof t.__internal.destroy && t.__internal.destroy.apply(t)
        }
        var We = null,
          ze = 0,
          Ue = 0,
          Qe = "pageX",
          $e = "pageY",
          Ve = null,
          Xe = !1,
          Ye = null;

        function Ke(e, t) {
          var n = e[Qe] - ze,
            i = e[$e] - Ue;
          Xe && (i -= document.body.scrollTop), t.style.left = n + "px", t.style.top = i + "px"
        }

        function Ge(e, t) {
          var n = e[Qe] - ze,
            i = e[$e] - Ue;
          Xe && (i -= document.body.scrollTop), t.style.left = Math.min(Ve.maxLeft, Math.max(Ve.minLeft, n)) + "px", t.style.top = Xe ? Math.min(Ve.maxTop, Math.max(Ve.minTop, i)) + "px" : Math.max(Ve.minTop, i) + "px"
        }

        function Je(e, t) {
          if (null === nt && !t.isMaximized() && t.get("movable")) {
            var n, i = 0,
              o = 0;
            if ("touchstart" === e.type ? (e.preventDefault(), n = e.targetTouches[0], Qe = "clientX", $e = "clientY") : 0 === e.button && (n = e), n) {
              var r = t.elements.dialog;
              if (h(r, Q), r.style.left && (i = parseInt(r.style.left, 10)), r.style.top && (o = parseInt(r.style.top, 10)), ze = n[Qe] - i, Ue = n[$e] - o, t.isModal() ? Ue += t.elements.modal.scrollTop : t.isPinned() && (Ue -= document.body.scrollTop), t.get("moveBounded")) {
                var s = r,
                  a = -i,
                  l = -o;
                do {
                  a += s.offsetLeft, l += s.offsetTop
                } while (s = s.offsetParent);
                Ve = {
                  maxLeft: a,
                  minLeft: -a,
                  maxTop: document.documentElement.clientHeight - r.clientHeight - l,
                  minTop: -l
                }, Ye = Ge
              } else Ve = null, Ye = Ke;
              return N("onmove", t), Xe = !t.isModal() && t.isPinned(), We = t, Ye(n, r), h(document.body, ee), !1
            }
          }
        }

        function Ze(e) {
          var t;
          We && ("touchmove" === e.type ? (e.preventDefault(), t = e.targetTouches[0]) : 0 === e.button && (t = e), t && Ye(t, We.elements.dialog))
        }

        function et() {
          if (We) {
            var e = We;
            We = Ve = null, p(document.body, ee), p(e.elements.dialog, Q), N("onmoved", e)
          }
        }

        function tt(e) {
          We = null;
          var t = e.elements.dialog;
          t.style.left = t.style.top = ""
        }
        var nt = null,
          it = Number.Nan,
          ot = 0,
          rt = 0,
          st = 0;

        function at(e, t) {
          var n;
          if (!t.isMaximized() && ("touchstart" === e.type ? (e.preventDefault(), n = e.targetTouches[0]) : 0 === e.button && (n = e), n)) {
            N("onresize", t), nt = t, st = t.elements.resizeHandle.offsetHeight / 2;
            var i = t.elements.dialog;
            return h(i, Q), it = parseInt(i.style.left, 10), i.style.height = i.offsetHeight + "px", i.style.minHeight = t.elements.header.offsetHeight + t.elements.footer.offsetHeight + "px", i.style.width = (ot = i.offsetWidth) + "px", "none" !== i.style.maxWidth && (i.style.minWidth = (rt = i.offsetWidth) + "px"), i.style.maxWidth = "none", h(document.body, ee), !1
          }
        }

        function lt(e) {
          var t;
          nt && ("touchmove" === e.type ? (e.preventDefault(), t = e.targetTouches[0]) : 0 === e.button && (t = e), t && function (e, t, n) {
            var i, o, r = t,
              s = 0,
              a = 0;
            do {
              s += r.offsetLeft, a += r.offsetTop
            } while (r = r.offsetParent);
            !0 === n ? (i = e.pageX, o = e.pageY) : (i = e.clientX, o = e.clientY);
            var l = m();
            if (l && (i = document.body.offsetWidth - i, isNaN(it) || (s = document.body.offsetWidth - s - t.offsetWidth)), t.style.height = o - a + st + "px", t.style.width = i - s + st + "px", !isNaN(it)) {
              var c = .5 * Math.abs(t.offsetWidth - ot);
              l && (c *= -1), t.offsetWidth > ot ? t.style.left = it + c + "px" : t.offsetWidth >= rt && (t.style.left = it - c + "px")
            }
          }(t, nt.elements.dialog, !nt.get("modal") && !nt.get("pinned")))
        }

        function ct() {
          if (nt) {
            var e = nt;
            nt = null, p(document.body, ee), p(e.elements.dialog, Q), Se = !0, N("onresized", e)
          }
        }

        function ut(e) {
          nt = null;
          var t = e.elements.dialog;
          "none" === t.style.maxWidth && (t.style.maxWidth = t.style.minWidth = t.style.width = t.style.height = t.style.minHeight = t.style.left = "", it = Number.Nan, ot = rt = st = 0)
        }

        function ft() {
          for (var e = 0; e < d.length; e += 1) {
            var t = d[e];
            t.get("autoReset") && (tt(t), ut(t))
          }
        }

        function dt(e) {
          E(e.elements.dialog, "focus", e.__internal.bringToFrontHandler, !0)
        }

        function ht(e) {
          T(e.elements.dialog, "focus", e.__internal.bringToFrontHandler, !0)
        }

        function pt(e) {
          E(e.elements.header, "mousedown", e.__internal.beginMoveHandler), E(e.elements.header, "touchstart", e.__internal.beginMoveHandler, !1, !1)
        }

        function mt(e) {
          T(e.elements.header, "mousedown", e.__internal.beginMoveHandler), T(e.elements.header, "touchstart", e.__internal.beginMoveHandler, !1, !1)
        }

        function gt(e) {
          E(e.elements.resizeHandle, "mousedown", e.__internal.beginResizeHandler), E(e.elements.resizeHandle, "touchstart", e.__internal.beginResizeHandler, !1, !1)
        }

        function vt(e) {
          T(e.elements.resizeHandle, "mousedown", e.__internal.beginResizeHandler), T(e.elements.resizeHandle, "touchstart", e.__internal.beginResizeHandler, !1, !1)
        }
        return {
          __init: ce,
          isOpen: function () {
            return this.__internal.isOpen
          },
          isModal: function () {
            return this.elements.root.className.indexOf(J) < 0
          },
          isMaximized: function () {
            return this.elements.root.className.indexOf(K) > -1
          },
          isPinned: function () {
            return this.elements.root.className.indexOf(ae) < 0
          },
          maximize: function () {
            return this.isMaximized() || xe(this), this
          },
          restore: function () {
            return this.isMaximized() && Ee(this), this
          },
          pin: function () {
            return this.isPinned() || _e(this), this
          },
          unpin: function () {
            return this.isPinned() && we(this), this
          },
          bringToFront: function () {
            return me(0, this), this
          },
          moveTo: function (e, t) {
            if (!isNaN(e) && !isNaN(t)) {
              N("onmove", this);
              var n = this.elements.dialog,
                i = n,
                o = 0,
                r = 0;
              n.style.left && (o -= parseInt(n.style.left, 10)), n.style.top && (r -= parseInt(n.style.top, 10));
              do {
                o += i.offsetLeft, r += i.offsetTop
              } while (i = i.offsetParent);
              var s = e - o,
                a = t - r;
              m() && (s *= -1), n.style.left = s + "px", n.style.top = a + "px", N("onmoved", this)
            }
            return this
          },
          resizeTo: function (e, t) {
            var n = parseFloat(e),
              i = parseFloat(t),
              o = /(\d*\.\d+|\d+)%/;
            if (!isNaN(n) && !isNaN(i) && !0 === this.get("resizable")) {
              N("onresize", this), ("" + e).match(o) && (n = n / 100 * document.documentElement.clientWidth), ("" + t).match(o) && (i = i / 100 * document.documentElement.clientHeight);
              var r = this.elements.dialog;
              "none" !== r.style.maxWidth && (r.style.minWidth = (rt = r.offsetWidth) + "px"), r.style.maxWidth = "none", r.style.minHeight = this.elements.header.offsetHeight + this.elements.footer.offsetHeight + "px", r.style.width = n + "px", r.style.height = i + "px", N("onresized", this)
            }
            return this
          },
          setting: function (e, t) {
            var n = this,
              i = ve(this, this.__internal.options, (function (e, t, i) {
                ge(n, e, t, i)
              }), e, t);
            if ("get" === i.op) return i.found ? i.value : void 0 !== this.settings ? ve(this, this.settings, this.settingUpdated || function () {}, e, t).value : void 0;
            if ("set" === i.op) {
              if (i.items.length > 0)
                for (var o = this.settingUpdated || function () {}, r = 0; r < i.items.length; r += 1) {
                  var s = i.items[r];
                  s.found || void 0 === this.settings || ve(this, this.settings, o, s.key, s.value)
                }
              return this
            }
          },
          set: function (e, t) {
            return this.setting(e, t), this
          },
          get: function (e) {
            return this.setting(e)
          },
          setHeader: function (e) {
            return "string" == typeof e ? (y(this.elements.header), this.elements.header.innerHTML = e) : e instanceof n.HTMLElement && this.elements.header.firstChild !== e && (y(this.elements.header), this.elements.header.appendChild(e)), this
          },
          setContent: function (e) {
            return "string" == typeof e ? (y(this.elements.content), this.elements.content.innerHTML = e) : e instanceof n.HTMLElement && this.elements.content.firstChild !== e && (y(this.elements.content), this.elements.content.appendChild(e)), this
          },
          showModal: function (e) {
            return this.show(!0, e)
          },
          show: function (i, r) {
            if (ce(this), this.__internal.isOpen) {
              tt(this), ut(this), h(this.elements.dialog, se);
              var s = this;
              setTimeout((function () {
                p(s.elements.dialog, se)
              }), 200)
            } else {
              if (this.__internal.isOpen = !0, d.push(this), O.defaults.maintainFocus && (this.__internal.activeElement = document.activeElement), document.body.hasAttribute("tabindex") || document.body.setAttribute("tabindex", o = "0"), "function" == typeof this.prepare && this.prepare(), l = this, 1 === d.length && (E(n, "resize", ft), E(document.body, "keyup", He), E(document.body, "keydown", Ie), E(document.body, "focus", Pe), E(document.documentElement, "mousemove", Ze), E(document.documentElement, "touchmove", Ze, !1, !1), E(document.documentElement, "mouseup", et), E(document.documentElement, "touchend", et), E(document.documentElement, "mousemove", lt), E(document.documentElement, "touchmove", lt, !1, !1), E(document.documentElement, "mouseup", ct), E(document.documentElement, "touchend", ct)), E(l.elements.commands.container, "click", l.__internal.commandsClickHandler), E(l.elements.footer, "click", l.__internal.buttonsClickHandler), E(l.elements.reset[0], "focusin", l.__internal.resetHandler), E(l.elements.reset[0], "keydown", Re), E(l.elements.reset[1], "focusin", l.__internal.resetHandler), Oe = !0, E(l.elements.dialog, C.type, l.__internal.transitionInHandler), l.get("modal") || dt(l), l.get("resizable") && gt(l), l.get("movable") && pt(l), void 0 !== i && this.set("modal", i), e = v(), t = g(), fe(), "string" == typeof r && "" !== r && (this.__internal.className = r, h(this.elements.root, r)), this.get("startMaximized") ? this.maximize() : this.isMaximized() && Ee(this), ke(this), this.elements.root.removeAttribute("style"), p(this.elements.root, W), h(this.elements.root, B), clearTimeout(this.__internal.timerIn), this.__internal.timerIn = setTimeout(this.__internal.transitionInHandler, C.supported ? 1e3 : 100), w) {
                var a = this.elements.root;
                a.style.display = "none", setTimeout((function () {
                  a.style.display = "block"
                }), 0)
              }
              this.elements.root.offsetWidth, p(this.elements.root, Y), ue(), "function" == typeof this.hooks.onshow && this.hooks.onshow.call(this), N("onshow", this)
            }
            var l;
            return this
          },
          close: function () {
            var e;
            return this.__internal.isOpen && !1 !== N("onclosing", this) && (e = this, 1 === d.length && (T(n, "resize", ft), T(document.body, "keyup", He), T(document.body, "keydown", Ie), T(document.body, "focus", Pe), T(document.documentElement, "mousemove", Ze), T(document.documentElement, "mouseup", et), T(document.documentElement, "mousemove", lt), T(document.documentElement, "mouseup", ct)), T(e.elements.commands.container, "click", e.__internal.commandsClickHandler), T(e.elements.footer, "click", e.__internal.buttonsClickHandler), T(e.elements.reset[0], "focusin", e.__internal.resetHandler), T(e.elements.reset[0], "keydown", Re), T(e.elements.reset[1], "focusin", e.__internal.resetHandler), E(e.elements.dialog, C.type, e.__internal.transitionOutHandler), e.get("modal") || ht(e), e.get("movable") && mt(e), e.get("resizable") && vt(e), p(this.elements.root, B), h(this.elements.root, W), clearTimeout(this.__internal.timerOut), this.__internal.timerOut = setTimeout(this.__internal.transitionOutHandler, C.supported ? 1e3 : 100), h(this.elements.root, Y), this.elements.modal.offsetWidth, O.defaults.maintainFocus && this.__internal.activeElement && (this.__internal.activeElement.focus(), this.__internal.activeElement = null), void 0 !== this.__internal.className && "" !== this.__internal.className && p(this.elements.root, this.__internal.className), "function" == typeof this.hooks.onclose && this.hooks.onclose.call(this), N("onclose", this), d.splice(d.indexOf(this), 1), this.__internal.isOpen = !1, fe()), d.length || "0" !== o || document.body.removeAttribute("tabindex"), this
          },
          closeOthers: function () {
            return O.closeAll(this), this
          },
          destroy: function () {
            return this.__internal && (this.__internal.isOpen ? (this.__internal.destroy = function () {
              _(this, ce)
            }, this.close()) : this.__internal.destroy || _(this, ce)), this
          }
        }
      }(),
      A = function () {
        var e, t = [],
          i = f.notifier.classes,
          o = i.base;

        function r(t) {
          t.__internal || (t.__internal = {
            position: O.defaults.notifier.position,
            delay: O.defaults.notifier.delay
          }, e = document.createElement("DIV"), ("transitionOff" in f.notifier ? f.notifier.transitionOff : f.transitionOff) && (o = i.base + " ajs-no-transition"), a(t));
          e.parentNode !== document.body && document.body.appendChild(e)
        }

        function s(e) {
          e.__internal.pushed = !0, t.push(e)
        }

        function a(t) {
          switch (e.className = o, t.__internal.position) {
            case "top-right":
              h(e, i.top + " " + i.right);
              break;
            case "top-left":
              h(e, i.top + " " + i.left);
              break;
            case "top-center":
              h(e, i.top + " " + i.center);
              break;
            case "bottom-left":
              h(e, i.bottom + " " + i.left);
              break;
            case "bottom-center":
              h(e, i.bottom + " " + i.center);
              break;
            default:
            case "bottom-right":
              h(e, i.bottom + " " + i.right)
          }
        }

        function l(o, r) {
          function a(e, t) {
            t.__internal.closeButton && "true" !== e.target.getAttribute("data-close") || t.dismiss(!0)
          }

          function l(t, n) {
            T(n.element, C.type, l), e.removeChild(n.element)
          }

          function c(e) {
            clearTimeout(e.__internal.timer), clearTimeout(e.__internal.transitionTimeout)
          }
          return function (e) {
            return e.__internal || (e.__internal = {
              pushed: !1,
              delay: void 0,
              timer: void 0,
              clickHandler: void 0,
              transitionEndHandler: void 0,
              transitionTimeout: void 0
            }, e.__internal.clickHandler = k(e, a), e.__internal.transitionEndHandler = k(e, l)), e
          }({
            element: o,
            push: function (t, n) {
              if (!this.__internal.pushed) {
                var o, r;
                switch (s(this), c(this), arguments.length) {
                  case 0:
                    r = this.__internal.delay;
                    break;
                  case 1:
                    "number" == typeof t ? r = t : (o = t, r = this.__internal.delay);
                    break;
                  case 2:
                    o = t, r = n
                }
                return this.__internal.closeButton = O.defaults.notifier.closeButton, void 0 !== o && this.setContent(o), A.__internal.position.indexOf("top") < 0 ? e.appendChild(this.element) : e.insertBefore(this.element, e.firstChild), this.element.offsetWidth, h(this.element, i.visible), E(this.element, "click", this.__internal.clickHandler), this.delay(r)
              }
              return this
            },
            ondismiss: function () {},
            callback: r,
            dismiss: function (n) {
              var o;
              return this.__internal.pushed && (c(this), "function" == typeof this.ondismiss && !1 === this.ondismiss.call(this) || (T(this.element, "click", this.__internal.clickHandler), void 0 !== this.element && this.element.parentNode === e && (this.__internal.transitionTimeout = setTimeout(this.__internal.transitionEndHandler, C.supported ? 1e3 : 100), p(this.element, i.visible), "function" == typeof this.callback && this.callback.call(this, n)), o = this, t.splice(t.indexOf(o), 1), o.__internal.pushed = !1)), this
            },
            delay: function (e) {
              if (c(this), this.__internal.delay = void 0 === e || isNaN(+e) ? A.__internal.delay : +e, this.__internal.delay > 0) {
                var t = this;
                this.__internal.timer = setTimeout((function () {
                  t.dismiss()
                }), 1e3 * this.__internal.delay)
              }
              return this
            },
            setContent: function (e) {
              if ("string" == typeof e ? (y(this.element), this.element.innerHTML = e) : e instanceof n.HTMLElement && this.element.firstChild !== e && (y(this.element), this.element.appendChild(e)), this.__internal.closeButton) {
                var t = document.createElement("span");
                h(t, i.close), t.setAttribute("data-close", !0), this.element.appendChild(t)
              }
              return this
            },
            dismissOthers: function () {
              return A.dismissAll(this), this
            }
          })
        }
        return {
          setting: function (e, t) {
            if (r(this), void 0 === t) return this.__internal[e];
            switch (e) {
              case "position":
                this.__internal.position = t, a(this);
                break;
              case "delay":
                this.__internal.delay = t
            }
            return this
          },
          set: function (e, t) {
            return this.setting(e, t), this
          },
          get: function (e) {
            return this.setting(e)
          },
          create: function (e, t) {
            r(this);
            var n = document.createElement("div");
            return n.className = i.message + ("string" == typeof e && "" !== e ? " " + i.prefix + e : ""), l(n, t)
          },
          dismissAll: function (e) {
            for (var n = t.slice(0), i = 0; i < n.length; i += 1) {
              var o = n[i];
              void 0 !== e && e === o || o.dismiss()
            }
          }
        }
      }();
    var O = new function () {
      var e = {};

      function t(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
      }

      function n(t) {
        var n = e[t].dialog;
        return n && "function" == typeof n.__init && n.__init(n), n
      }
      return {
        defaults: f,
        dialog: function (i, o, r, s) {
          if ("function" != typeof o) return n(i);
          if (this.hasOwnProperty(i)) throw new Error("alertify.dialog: name already exists");
          var a = function (n, i, o, r) {
            var s = {
              dialog: null,
              factory: i
            };
            return void 0 !== r && (s.factory = function () {
              return t(new e[r].factory, new i)
            }), o || (s.dialog = t(new s.factory, D)), e[n] = s
          }(i, o, r, s);
          this[i] = r ? function () {
            if (0 === arguments.length) return a.dialog;
            var e = t(new a.factory, D);
            return e && "function" == typeof e.__init && e.__init(e), e.main.apply(e, arguments), e.show.apply(e)
          } : function () {
            if (a.dialog && "function" == typeof a.dialog.__init && a.dialog.__init(a.dialog), 0 === arguments.length) return a.dialog;
            var e = a.dialog;
            return e.main.apply(a.dialog, arguments), e.show.apply(a.dialog)
          }
        },
        closeAll: function (e) {
          for (var t = d.slice(0), n = 0; n < t.length; n += 1) {
            var i = t[n];
            void 0 !== e && e === i || i.close()
          }
        },
        setting: function (e, t, i) {
          if ("notifier" === e) return A.setting(t, i);
          var o = n(e);
          return o ? o.setting(t, i) : void 0
        },
        set: function (e, t, n) {
          return this.setting(e, t, n)
        },
        get: function (e, t) {
          return this.setting(e, t)
        },
        notify: function (e, t, n, i) {
          return A.create(t, i).push(e, n)
        },
        message: function (e, t, n) {
          return A.create(null, n).push(e, t)
        },
        success: function (e, t, n) {
          return A.create("success", n).push(e, t)
        },
        error: function (e, t, n) {
          return A.create("error", n).push(e, t)
        },
        warning: function (e, t, n) {
          return A.create("warning", n).push(e, t)
        },
        dismissAll: function () {
          A.dismissAll()
        }
      }
    };
    O.dialog("alert", (function () {
      return {
        main: function (e, t, n) {
          var i, o, r;
          switch (arguments.length) {
            case 1:
              o = e;
              break;
            case 2:
              "function" == typeof t ? (o = e, r = t) : (i = e, o = t);
              break;
            case 3:
              i = e, o = t, r = n
          }
          return this.set("title", i), this.set("message", o), this.set("onok", r), this
        },
        setup: function () {
          return {
            buttons: [{
              text: O.defaults.glossary.ok,
              key: r,
              invokeOnClose: !0,
              className: O.defaults.theme.ok
            }],
            focus: {
              element: 0,
              select: !1
            },
            options: {
              maximizable: !1,
              resizable: !1
            }
          }
        },
        build: function () {},
        prepare: function () {},
        setMessage: function (e) {
          this.setContent(e)
        },
        settings: {
          message: void 0,
          onok: void 0,
          label: void 0
        },
        settingUpdated: function (e, t, n) {
          switch (e) {
            case "message":
              this.setMessage(n);
              break;
            case "label":
              this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = n)
          }
        },
        callback: function (e) {
          if ("function" == typeof this.get("onok")) {
            var t = this.get("onok").call(this, e);
            void 0 !== t && (e.cancel = !t)
          }
        }
      }
    })), O.dialog("confirm", (function () {
      var e = {
        timer: null,
        index: null,
        text: null,
        duration: null,
        task: function (n, i) {
          if (i.isOpen()) {
            if (i.__internal.buttons[e.index].element.innerHTML = e.text + " (&#8207;" + e.duration + "&#8207;) ", e.duration -= 1, -1 === e.duration) {
              t(i);
              var o = i.__internal.buttons[e.index],
                r = S(e.index, o);
              "function" == typeof i.callback && i.callback.apply(i, [r]), !1 !== r.close && i.close()
            }
          } else t(i)
        }
      };

      function t(t) {
        null !== e.timer && (clearInterval(e.timer), e.timer = null, t.__internal.buttons[e.index].element.innerHTML = e.text)
      }

      function n(n, i, o) {
        t(n), e.duration = o, e.index = i, e.text = n.__internal.buttons[i].element.innerHTML, e.timer = setInterval(k(n, e.task), 1e3), e.task(null, n)
      }
      return {
        main: function (e, t, n, i) {
          var o, r, s, a;
          switch (arguments.length) {
            case 1:
              r = e;
              break;
            case 2:
              r = e, s = t;
              break;
            case 3:
              r = e, s = t, a = n;
              break;
            case 4:
              o = e, r = t, s = n, a = i
          }
          return this.set("title", o), this.set("message", r), this.set("onok", s), this.set("oncancel", a), this
        },
        setup: function () {
          return {
            buttons: [{
              text: O.defaults.glossary.ok,
              key: o,
              className: O.defaults.theme.ok
            }, {
              text: O.defaults.glossary.cancel,
              key: r,
              invokeOnClose: !0,
              className: O.defaults.theme.cancel
            }],
            focus: {
              element: 0,
              select: !1
            },
            options: {
              maximizable: !1,
              resizable: !1
            }
          }
        },
        build: function () {},
        prepare: function () {},
        setMessage: function (e) {
          this.setContent(e)
        },
        settings: {
          message: null,
          labels: null,
          onok: null,
          oncancel: null,
          defaultFocus: null,
          reverseButtons: null
        },
        settingUpdated: function (e, t, n) {
          switch (e) {
            case "message":
              this.setMessage(n);
              break;
            case "labels":
              "ok" in n && this.__internal.buttons[0].element && (this.__internal.buttons[0].text = n.ok, this.__internal.buttons[0].element.innerHTML = n.ok), "cancel" in n && this.__internal.buttons[1].element && (this.__internal.buttons[1].text = n.cancel, this.__internal.buttons[1].element.innerHTML = n.cancel);
              break;
            case "reverseButtons":
              !0 === n ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);
              break;
            case "defaultFocus":
              this.__internal.focus.element = "ok" === n ? 0 : 1
          }
        },
        callback: function (e) {
          var n;
          switch (t(this), e.index) {
            case 0:
              "function" == typeof this.get("onok") && void 0 !== (n = this.get("onok").call(this, e)) && (e.cancel = !n);
              break;
            case 1:
              "function" == typeof this.get("oncancel") && void 0 !== (n = this.get("oncancel").call(this, e)) && (e.cancel = !n)
          }
        },
        autoOk: function (e) {
          return n(this, 0, e), this
        },
        autoCancel: function (e) {
          return n(this, 1, e), this
        }
      }
    })), O.dialog("prompt", (function () {
      var e = document.createElement("INPUT"),
        t = document.createElement("P");
      return {
        main: function (e, t, n, i, o) {
          var r, s, a, l, c;
          switch (arguments.length) {
            case 1:
              s = e;
              break;
            case 2:
              s = e, a = t;
              break;
            case 3:
              s = e, a = t, l = n;
              break;
            case 4:
              s = e, a = t, l = n, c = i;
              break;
            case 5:
              r = e, s = t, a = n, l = i, c = o
          }
          return this.set("title", r), this.set("message", s), this.set("value", a), this.set("onok", l), this.set("oncancel", c), this
        },
        setup: function () {
          return {
            buttons: [{
              text: O.defaults.glossary.ok,
              key: o,
              className: O.defaults.theme.ok
            }, {
              text: O.defaults.glossary.cancel,
              key: r,
              invokeOnClose: !0,
              className: O.defaults.theme.cancel
            }],
            focus: {
              element: e,
              select: !0
            },
            options: {
              maximizable: !1,
              resizable: !1
            }
          }
        },
        build: function () {
          e.className = O.defaults.theme.input, e.setAttribute("type", "text"), e.value = this.get("value"), this.elements.content.appendChild(t), this.elements.content.appendChild(e)
        },
        prepare: function () {},
        setMessage: function (e) {
          "string" == typeof e ? (y(t), t.innerHTML = e) : e instanceof n.HTMLElement && t.firstChild !== e && (y(t), t.appendChild(e))
        },
        settings: {
          message: void 0,
          labels: void 0,
          onok: void 0,
          oncancel: void 0,
          value: "",
          type: "text",
          reverseButtons: void 0
        },
        settingUpdated: function (t, n, i) {
          switch (t) {
            case "message":
              this.setMessage(i);
              break;
            case "value":
              e.value = i;
              break;
            case "type":
              switch (i) {
                case "text":
                case "color":
                case "date":
                case "datetime-local":
                case "email":
                case "month":
                case "number":
                case "password":
                case "search":
                case "tel":
                case "time":
                case "week":
                  e.type = i;
                  break;
                default:
                  e.type = "text"
              }
              break;
            case "labels":
              i.ok && this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = i.ok), i.cancel && this.__internal.buttons[1].element && (this.__internal.buttons[1].element.innerHTML = i.cancel);
              break;
            case "reverseButtons":
              !0 === i ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)
          }
        },
        callback: function (t) {
          var n;
          switch (t.index) {
            case 0:
              this.settings.value = e.value, "function" == typeof this.get("onok") && void 0 !== (n = this.get("onok").call(this, t, this.settings.value)) && (t.cancel = !n);
              break;
            case 1:
              "function" == typeof this.get("oncancel") && void 0 !== (n = this.get("oncancel").call(this, t)) && (t.cancel = !n), t.cancel || (e.value = this.settings.value)
          }
        }
      }
    })), "object" == typeof e.exports ? e.exports = O : void 0 === (i = function () {
      return O
    }.apply(t, [])) || (e.exports = i)
  }("undefined" != typeof window ? window : this)
}, function (e, t, n) {
  "use strict";
  n(11)
}, function (e, t, n) {}, , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
  "use strict";
  var i = s(n(0));
  n(2);
  n(3);
  var o = s(n(9));
  n(35), n(1), n(7), n(10);
  var r;
  n(5);

  function s(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function a() {
    var e = i.default.trim((0, i.default)("#z_num").val());
    if ("null" != e && "" != e && e.indexOf("-") >= 0) {
      var t = znum.split("-");
      (0, i.default)("#z_code").val(t[0]), (0, i.default)("#z_num").val(t[1])
    }
    return "" == (r = (0, i.default)("#z_code").val()) ? (o.default.alert("提示", "请输入主单号！").set({
      label: "知道了"
    }), (0, i.default)("#z_num").blur(), !1) : "" == e ? (o.default.alert("提示", "请输入运单号！").set({
      label: "知道了"
    }), (0, i.default)("#z_num").blur(), !1) : void((0, i.default)("#" + r).length > 0 ? ((0, i.default)("#" + r).css({
      color: "#20407d",
      "font-weight": "bold"
    }), (0, i.default)("html").animate({
      scrollTop: (0, i.default)("#" + r).offset().top - 20
    }, 1e3)) : (o.default.alert("提示", "你好，没有收录代码为：" + r + " 的航空公司信息！").set({
      label: "知道了"
    }), (0, i.default)("#z_num").blur()))
  }(0, i.default)("#z_num").keyup((function () {
    var e = (0, i.default)(this).val();
    e.length > 8 && (0, i.default)(this).val(e.substring(0, 8))
  })), (0, i.default)("#ky_search_btn").click((function () {
    a()
  })), (0, i.default)("#z_num").keydown((function (e) {
    13 == e.keyCode && a()
  }))
}, function (e, t, n) {}]);