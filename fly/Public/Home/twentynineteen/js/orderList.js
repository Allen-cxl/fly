! function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) n.d(i, o, function (e) {
        return t[e]
      }.bind(null, o));
    return i
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "/", n(n.s = 84)
}({
  0: function (t, e, n) {
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
    ! function (e, n) {
      "use strict";
      "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return n(t)
      } : n(e)
    }("undefined" != typeof window ? window : this, (function (n, o) {
      "use strict";
      var r = [],
        s = Object.getPrototypeOf,
        a = r.slice,
        l = r.flat ? function (t) {
          return r.flat.call(t)
        } : function (t) {
          return r.concat.apply([], t)
        },
        c = r.push,
        u = r.indexOf,
        d = {},
        f = d.toString,
        h = d.hasOwnProperty,
        p = h.toString,
        g = p.call(Object),
        m = {},
        v = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function (t) {
          return null != t && t === t.window
        },
        b = n.document,
        w = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0
        };

      function _(t, e, n) {
        var i, o, r = (n = n || b).createElement("script");
        if (r.text = t, e)
          for (i in w)(o = e[i] || e.getAttribute && e.getAttribute(i)) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r)
      }

      function x(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[f.call(t)] || "object" : typeof t
      }
      var k = function (t, e) {
        return new k.fn.init(t, e)
      };

      function T(t) {
        var e = !!t && "length" in t && t.length,
          n = x(t);
        return !v(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
      }
      k.fn = k.prototype = {
        jquery: "3.5.1",
        constructor: k,
        length: 0,
        toArray: function () {
          return a.call(this)
        },
        get: function (t) {
          return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function (t) {
          var e = k.merge(this.constructor(), t);
          return e.prevObject = this, e
        },
        each: function (t) {
          return k.each(this, t)
        },
        map: function (t) {
          return this.pushStack(k.map(this, (function (e, n) {
            return t.call(e, n, e)
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
          return this.pushStack(k.grep(this, (function (t, e) {
            return (e + 1) % 2
          })))
        },
        odd: function () {
          return this.pushStack(k.grep(this, (function (t, e) {
            return e % 2
          })))
        },
        eq: function (t) {
          var e = this.length,
            n = +t + (t < 0 ? e : 0);
          return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
          return this.prevObject || this.constructor()
        },
        push: c,
        sort: r.sort,
        splice: r.splice
      }, k.extend = k.fn.extend = function () {
        var t, e, n, i, o, r, s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
          if (null != (t = arguments[a]))
            for (e in t) i = t[e], "__proto__" !== e && s !== i && (c && i && (k.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[e], r = o && !Array.isArray(n) ? [] : o || k.isPlainObject(n) ? n : {}, o = !1, s[e] = k.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        return s
      }, k.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
          throw new Error(t)
        },
        noop: function () {},
        isPlainObject: function (t) {
          var e, n;
          return !(!t || "[object Object]" !== f.call(t)) && (!(e = s(t)) || "function" == typeof (n = h.call(e, "constructor") && e.constructor) && p.call(n) === g)
        },
        isEmptyObject: function (t) {
          var e;
          for (e in t) return !1;
          return !0
        },
        globalEval: function (t, e, n) {
          _(t, {
            nonce: e && e.nonce
          }, n)
        },
        each: function (t, e) {
          var n, i = 0;
          if (T(t))
            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
          else
            for (i in t)
              if (!1 === e.call(t[i], i, t[i])) break;
          return t
        },
        makeArray: function (t, e) {
          var n = e || [];
          return null != t && (T(Object(t)) ? k.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n
        },
        inArray: function (t, e, n) {
          return null == e ? -1 : u.call(e, t, n)
        },
        merge: function (t, e) {
          for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
          return t.length = o, t
        },
        grep: function (t, e, n) {
          for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
          return i
        },
        map: function (t, e, n) {
          var i, o, r = 0,
            s = [];
          if (T(t))
            for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
          else
            for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
          return l(s)
        },
        guid: 1,
        support: m
      }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = r[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (t, e) {
        d["[object " + e + "]"] = e.toLowerCase()
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
        function (t) {
          var e, n, i, o, r, s, a, l, c, u, d, f, h, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            _ = t.document,
            x = 0,
            k = 0,
            T = lt(),
            C = lt(),
            S = lt(),
            E = lt(),
            O = function (t, e) {
              return t === e && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            N = [],
            D = N.pop,
            j = N.push,
            P = N.push,
            I = N.slice,
            L = function (t, e) {
              for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e) return n;
              return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B = "\\[" + R + "*(" + F + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + R + "*\\]",
            M = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
            $ = new RegExp(R + "+", "g"),
            q = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            V = new RegExp("^" + R + "*," + R + "*"),
            z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            W = new RegExp(R + "|>"),
            U = new RegExp(M),
            G = new RegExp("^" + F + "$"),
            Q = {
              ID: new RegExp("^#(" + F + ")"),
              CLASS: new RegExp("^\\.(" + F + ")"),
              TAG: new RegExp("^(" + F + "|[*])"),
              ATTR: new RegExp("^" + B),
              PSEUDO: new RegExp("^" + M),
              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
              bool: new RegExp("^(?:" + H + ")$", "i"),
              needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
            nt = function (t, e) {
              var n = "0x" + t.slice(1) - 65536;
              return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ot = function (t, e) {
              return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            rt = function () {
              f()
            },
            st = wt((function (t) {
              return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
            }), {
              dir: "parentNode",
              next: "legend"
            });
          try {
            P.apply(N = I.call(_.childNodes), _.childNodes), N[_.childNodes.length].nodeType
          } catch (t) {
            P = {
              apply: N.length ? function (t, e) {
                j.apply(t, I.call(e))
              } : function (t, e) {
                for (var n = t.length, i = 0; t[n++] = e[i++];);
                t.length = n - 1
              }
            }
          }

          function at(t, e, i, o) {
            var r, a, c, u, d, p, v, y = e && e.ownerDocument,
              _ = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return i;
            if (!o && (f(e), e = e || h, g)) {
              if (11 !== _ && (d = Z.exec(t)))
                if (r = d[1]) {
                  if (9 === _) {
                    if (!(c = e.getElementById(r))) return i;
                    if (c.id === r) return i.push(c), i
                  } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i
                } else {
                  if (d[2]) return P.apply(i, e.getElementsByTagName(t)), i;
                  if ((r = d[3]) && n.getElementsByClassName && e.getElementsByClassName) return P.apply(i, e.getElementsByClassName(r)), i
                } if (n.qsa && !E[t + " "] && (!m || !m.test(t)) && (1 !== _ || "object" !== e.nodeName.toLowerCase())) {
                if (v = t, y = e, 1 === _ && (W.test(t) || z.test(t))) {
                  for ((y = tt.test(t) && vt(e.parentNode) || e) === e && n.scope || ((u = e.getAttribute("id")) ? u = u.replace(it, ot) : e.setAttribute("id", u = w)), a = (p = s(t)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + bt(p[a]);
                  v = p.join(",")
                }
                try {
                  return P.apply(i, y.querySelectorAll(v)), i
                } catch (e) {
                  E(t, !0)
                } finally {
                  u === w && e.removeAttribute("id")
                }
              }
            }
            return l(t.replace(q, "$1"), e, i, o)
          }

          function lt() {
            var t = [];
            return function e(n, o) {
              return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
            }
          }

          function ct(t) {
            return t[w] = !0, t
          }

          function ut(t) {
            var e = h.createElement("fieldset");
            try {
              return !!t(e)
            } catch (t) {
              return !1
            } finally {
              e.parentNode && e.parentNode.removeChild(e), e = null
            }
          }

          function dt(t, e) {
            for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
          }

          function ft(t, e) {
            var n = e && t,
              i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
              for (; n = n.nextSibling;)
                if (n === e) return -1;
            return t ? 1 : -1
          }

          function ht(t) {
            return function (e) {
              return "input" === e.nodeName.toLowerCase() && e.type === t
            }
          }

          function pt(t) {
            return function (e) {
              var n = e.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && e.type === t
            }
          }

          function gt(t) {
            return function (e) {
              return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
          }

          function mt(t) {
            return ct((function (e) {
              return e = +e, ct((function (n, i) {
                for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
              }))
            }))
          }

          function vt(t) {
            return t && void 0 !== t.getElementsByTagName && t
          }
          for (e in n = at.support = {}, r = at.isXML = function (t) {
              var e = t.namespaceURI,
                n = (t.ownerDocument || t).documentElement;
              return !X.test(e || n && n.nodeName || "HTML")
            }, f = at.setDocument = function (t) {
              var e, o, s = t ? t.ownerDocument || t : _;
              return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !r(h), _ != h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", rt, !1) : o.attachEvent && o.attachEvent("onunload", rt)), n.scope = ut((function (t) {
                return p.appendChild(t).appendChild(h.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
              })), n.attributes = ut((function (t) {
                return t.className = "i", !t.getAttribute("className")
              })), n.getElementsByTagName = ut((function (t) {
                return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
              })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ut((function (t) {
                return p.appendChild(t).id = w, !h.getElementsByName || !h.getElementsByName(w).length
              })), n.getById ? (i.filter.ID = function (t) {
                var e = t.replace(et, nt);
                return function (t) {
                  return t.getAttribute("id") === e
                }
              }, i.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                  var n = e.getElementById(t);
                  return n ? [n] : []
                }
              }) : (i.filter.ID = function (t) {
                var e = t.replace(et, nt);
                return function (t) {
                  var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                  return n && n.value === e
                }
              }, i.find.ID = function (t, e) {
                if (void 0 !== e.getElementById && g) {
                  var n, i, o, r = e.getElementById(t);
                  if (r) {
                    if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
                    for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                      if ((n = r.getAttributeNode("id")) && n.value === t) return [r]
                  }
                  return []
                }
              }), i.find.TAG = n.getElementsByTagName ? function (t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
              } : function (t, e) {
                var n, i = [],
                  o = 0,
                  r = e.getElementsByTagName(t);
                if ("*" === t) {
                  for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                  return i
                }
                return r
              }, i.find.CLASS = n.getElementsByClassName && function (t, e) {
                if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
              }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ut((function (t) {
                var e;
                p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (e = h.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), t.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
              })), ut((function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = h.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
              }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ut((function (t) {
                n.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", M)
              })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = J.test(p.compareDocumentPosition), b = e || J.test(p.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                  i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
              } : function (t, e) {
                if (e)
                  for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
              }, O = e ? function (t, e) {
                if (t === e) return d = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t == h || t.ownerDocument == _ && b(_, t) ? -1 : e == h || e.ownerDocument == _ && b(_, e) ? 1 : u ? L(u, t) - L(u, e) : 0 : 4 & i ? -1 : 1)
              } : function (t, e) {
                if (t === e) return d = !0, 0;
                var n, i = 0,
                  o = t.parentNode,
                  r = e.parentNode,
                  s = [t],
                  a = [e];
                if (!o || !r) return t == h ? -1 : e == h ? 1 : o ? -1 : r ? 1 : u ? L(u, t) - L(u, e) : 0;
                if (o === r) return ft(t, e);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (; s[i] === a[i];) i++;
                return i ? ft(s[i], a[i]) : s[i] == _ ? -1 : a[i] == _ ? 1 : 0
              }, h) : h
            }, at.matches = function (t, e) {
              return at(t, null, null, e)
            }, at.matchesSelector = function (t, e) {
              if (f(t), n.matchesSelector && g && !E[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                var i = y.call(t, e);
                if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
              } catch (t) {
                E(e, !0)
              }
              return at(e, h, null, [t]).length > 0
            }, at.contains = function (t, e) {
              return (t.ownerDocument || t) != h && f(t), b(t, e)
            }, at.attr = function (t, e) {
              (t.ownerDocument || t) != h && f(t);
              var o = i.attrHandle[e.toLowerCase()],
                r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
              return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, at.escape = function (t) {
              return (t + "").replace(it, ot)
            }, at.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t)
            }, at.uniqueSort = function (t) {
              var e, i = [],
                o = 0,
                r = 0;
              if (d = !n.detectDuplicates, u = !n.sortStable && t.slice(0), t.sort(O), d) {
                for (; e = t[r++];) e === t[r] && (o = i.push(r));
                for (; o--;) t.splice(i[o], 1)
              }
              return u = null, t
            }, o = at.getText = function (t) {
              var e, n = "",
                i = 0,
                r = t.nodeType;
              if (r) {
                if (1 === r || 9 === r || 11 === r) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
                } else if (3 === r || 4 === r) return t.nodeValue
              } else
                for (; e = t[i++];) n += o(e);
              return n
            }, (i = at.selectors = {
              cacheLength: 50,
              createPseudo: ct,
              match: Q,
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
                ATTR: function (t) {
                  return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                  return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || at.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && at.error(t[0]), t
                },
                PSEUDO: function (t) {
                  var e, n = !t[6] && t[2];
                  return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
              },
              filter: {
                TAG: function (t) {
                  var e = t.replace(et, nt).toLowerCase();
                  return "*" === t ? function () {
                    return !0
                  } : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e
                  }
                },
                CLASS: function (t) {
                  var e = T[t + " "];
                  return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && T(t, (function (t) {
                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                  }))
                },
                ATTR: function (t, e, n) {
                  return function (i) {
                    var o = at.attr(i, t);
                    return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace($, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                  }
                },
                CHILD: function (t, e, n, i, o) {
                  var r = "nth" !== t.slice(0, 3),
                    s = "last" !== t.slice(-4),
                    a = "of-type" === e;
                  return 1 === i && 0 === o ? function (t) {
                    return !!t.parentNode
                  } : function (e, n, l) {
                    var c, u, d, f, h, p, g = r !== s ? "nextSibling" : "previousSibling",
                      m = e.parentNode,
                      v = a && e.nodeName.toLowerCase(),
                      y = !l && !a,
                      b = !1;
                    if (m) {
                      if (r) {
                        for (; g;) {
                          for (f = e; f = f[g];)
                            if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                          p = g = "only" === t && !p && "nextSibling"
                        }
                        return !0
                      }
                      if (p = [s ? m.firstChild : m.lastChild], s && y) {
                        for (b = (h = (c = (u = (d = (f = m)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (b = h = 0) || p.pop();)
                          if (1 === f.nodeType && ++b && f === e) {
                            u[t] = [x, h, b];
                            break
                          }
                      } else if (y && (b = h = (c = (u = (d = (f = e)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                        for (;
                          (f = ++h && f && f[g] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[t] = [x, b]), f !== e)););
                      return (b -= o) === i || b % i == 0 && b / i >= 0
                    }
                  }
                },
                PSEUDO: function (t, e) {
                  var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || at.error("unsupported pseudo: " + t);
                  return o[w] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? ct((function (t, n) {
                    for (var i, r = o(t, e), s = r.length; s--;) t[i = L(t, r[s])] = !(n[i] = r[s])
                  })) : function (t) {
                    return o(t, 0, n)
                  }) : o
                }
              },
              pseudos: {
                not: ct((function (t) {
                  var e = [],
                    n = [],
                    i = a(t.replace(q, "$1"));
                  return i[w] ? ct((function (t, e, n, o) {
                    for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                  })) : function (t, o, r) {
                    return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
                  }
                })),
                has: ct((function (t) {
                  return function (e) {
                    return at(t, e).length > 0
                  }
                })),
                contains: ct((function (t) {
                  return t = t.replace(et, nt),
                    function (e) {
                      return (e.textContent || o(e)).indexOf(t) > -1
                    }
                })),
                lang: ct((function (t) {
                  return G.test(t || "") || at.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                    function (e) {
                      var n;
                      do {
                        if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1
                    }
                })),
                target: function (e) {
                  var n = t.location && t.location.hash;
                  return n && n.slice(1) === e.id
                },
                root: function (t) {
                  return t === p
                },
                focus: function (t) {
                  return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: gt(!1),
                disabled: gt(!0),
                checked: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                  return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0
                },
                parent: function (t) {
                  return !i.pseudos.empty(t)
                },
                header: function (t) {
                  return Y.test(t.nodeName)
                },
                input: function (t) {
                  return K.test(t.nodeName)
                },
                button: function (t) {
                  var e = t.nodeName.toLowerCase();
                  return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                  var e;
                  return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: mt((function () {
                  return [0]
                })),
                last: mt((function (t, e) {
                  return [e - 1]
                })),
                eq: mt((function (t, e, n) {
                  return [n < 0 ? n + e : n]
                })),
                even: mt((function (t, e) {
                  for (var n = 0; n < e; n += 2) t.push(n);
                  return t
                })),
                odd: mt((function (t, e) {
                  for (var n = 1; n < e; n += 2) t.push(n);
                  return t
                })),
                lt: mt((function (t, e, n) {
                  for (var i = n < 0 ? n + e : n > e ? e : n; --i >= 0;) t.push(i);
                  return t
                })),
                gt: mt((function (t, e, n) {
                  for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                  return t
                }))
              }
            }).pseudos.nth = i.pseudos.eq, {
              radio: !0,
              checkbox: !0,
              file: !0,
              password: !0,
              image: !0
            }) i.pseudos[e] = ht(e);
          for (e in {
              submit: !0,
              reset: !0
            }) i.pseudos[e] = pt(e);

          function yt() {}

          function bt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
          }

          function wt(t, e, n) {
            var i = e.dir,
              o = e.next,
              r = o || i,
              s = n && "parentNode" === r,
              a = k++;
            return e.first ? function (e, n, o) {
              for (; e = e[i];)
                if (1 === e.nodeType || s) return t(e, n, o);
              return !1
            } : function (e, n, l) {
              var c, u, d, f = [x, a];
              if (l) {
                for (; e = e[i];)
                  if ((1 === e.nodeType || s) && t(e, n, l)) return !0
              } else
                for (; e = e[i];)
                  if (1 === e.nodeType || s)
                    if (u = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                    else {
                      if ((c = u[r]) && c[0] === x && c[1] === a) return f[2] = c[2];
                      if (u[r] = f, f[2] = t(e, n, l)) return !0
                    } return !1
            }
          }

          function _t(t) {
            return t.length > 1 ? function (e, n, i) {
              for (var o = t.length; o--;)
                if (!t[o](e, n, i)) return !1;
              return !0
            } : t[0]
          }

          function xt(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
            return s
          }

          function kt(t, e, n, i, o, r) {
            return i && !i[w] && (i = kt(i)), o && !o[w] && (o = kt(o, r)), ct((function (r, s, a, l) {
              var c, u, d, f = [],
                h = [],
                p = s.length,
                g = r || function (t, e, n) {
                  for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n);
                  return n
                }(e || "*", a.nodeType ? [a] : a, []),
                m = !t || !r && e ? g : xt(g, f, t, a, l),
                v = n ? o || (r ? t : p || i) ? [] : s : m;
              if (n && n(m, v, a, l), i)
                for (c = xt(v, h), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[h[u]] = !(m[h[u]] = d));
              if (r) {
                if (o || t) {
                  if (o) {
                    for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                    o(null, v = [], c, l)
                  }
                  for (u = v.length; u--;)(d = v[u]) && (c = o ? L(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                }
              } else v = xt(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : P.apply(s, v)
            }))
          }

          function Tt(t) {
            for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = wt((function (t) {
                return t === e
              }), a, !0), d = wt((function (t) {
                return L(e, t) > -1
              }), a, !0), f = [function (t, n, i) {
                var o = !s && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : d(t, n, i));
                return e = null, o
              }]; l < r; l++)
              if (n = i.relative[t[l].type]) f = [wt(_t(f), n)];
              else {
                if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                  for (o = ++l; o < r && !i.relative[t[o].type]; o++);
                  return kt(l > 1 && _t(f), l > 1 && bt(t.slice(0, l - 1).concat({
                    value: " " === t[l - 2].type ? "*" : ""
                  })).replace(q, "$1"), n, l < o && Tt(t.slice(l, o)), o < r && Tt(t = t.slice(o)), o < r && bt(t))
                }
                f.push(n)
              } return _t(f)
          }
          return yt.prototype = i.filters = i.pseudos, i.setFilters = new yt, s = at.tokenize = function (t, e) {
            var n, o, r, s, a, l, c, u = C[t + " "];
            if (u) return e ? 0 : u.slice(0);
            for (a = t, l = [], c = i.preFilter; a;) {
              for (s in n && !(o = V.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = z.exec(a)) && (n = o.shift(), r.push({
                  value: n,
                  type: o[0].replace(q, " ")
                }), a = a.slice(n.length)), i.filter) !(o = Q[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                value: n,
                type: s,
                matches: o
              }), a = a.slice(n.length));
              if (!n) break
            }
            return e ? a.length : a ? at.error(t) : C(t, l).slice(0)
          }, a = at.compile = function (t, e) {
            var n, o = [],
              r = [],
              a = S[t + " "];
            if (!a) {
              for (e || (e = s(t)), n = e.length; n--;)(a = Tt(e[n]))[w] ? o.push(a) : r.push(a);
              (a = S(t, function (t, e) {
                var n = e.length > 0,
                  o = t.length > 0,
                  r = function (r, s, a, l, u) {
                    var d, p, m, v = 0,
                      y = "0",
                      b = r && [],
                      w = [],
                      _ = c,
                      k = r || o && i.find.TAG("*", u),
                      T = x += null == _ ? 1 : Math.random() || .1,
                      C = k.length;
                    for (u && (c = s == h || s || u); y !== C && null != (d = k[y]); y++) {
                      if (o && d) {
                        for (p = 0, s || d.ownerDocument == h || (f(d), a = !g); m = t[p++];)
                          if (m(d, s || h, a)) {
                            l.push(d);
                            break
                          } u && (x = T)
                      }
                      n && ((d = !m && d) && v--, r && b.push(d))
                    }
                    if (v += y, n && y !== v) {
                      for (p = 0; m = e[p++];) m(b, w, s, a);
                      if (r) {
                        if (v > 0)
                          for (; y--;) b[y] || w[y] || (w[y] = D.call(l));
                        w = xt(w)
                      }
                      P.apply(l, w), u && !r && w.length > 0 && v + e.length > 1 && at.uniqueSort(l)
                    }
                    return u && (x = T, c = _), b
                  };
                return n ? ct(r) : r
              }(r, o))).selector = t
            }
            return a
          }, l = at.select = function (t, e, n, o) {
            var r, l, c, u, d, f = "function" == typeof t && t,
              h = !o && s(t = f.selector || t);
            if (n = n || [], 1 === h.length) {
              if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                if (!(e = (i.find.ID(c.matches[0].replace(et, nt), e) || [])[0])) return n;
                f && (e = e.parentNode), t = t.slice(l.shift().value.length)
              }
              for (r = Q.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                if ((d = i.find[u]) && (o = d(c.matches[0].replace(et, nt), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                  if (l.splice(r, 1), !(t = o.length && bt(l))) return P.apply(n, o), n;
                  break
                }
            }
            return (f || a(t, h))(o, e, !g, n, !e || tt.test(t) && vt(e.parentNode) || e), n
          }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = ut((function (t) {
            return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
          })), ut((function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
          })) || dt("type|href|height|width", (function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
          })), n.attributes && ut((function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
          })) || dt("value", (function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
          })), ut((function (t) {
            return null == t.getAttribute("disabled")
          })) || dt(H, (function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
          })), at
        }(n);
      k.find = C, k.expr = C.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = C.uniqueSort, k.text = C.getText, k.isXMLDoc = C.isXML, k.contains = C.contains, k.escapeSelector = C.escape;
      var S = function (t, e, n) {
          for (var i = [], o = void 0 !== n;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
              if (o && k(t).is(n)) break;
              i.push(t)
            } return i
        },
        E = function (t, e) {
          for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
          return n
        },
        O = k.expr.match.needsContext;

      function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function D(t, e, n) {
        return v(e) ? k.grep(t, (function (t, i) {
          return !!e.call(t, i, t) !== n
        })) : e.nodeType ? k.grep(t, (function (t) {
          return t === e !== n
        })) : "string" != typeof e ? k.grep(t, (function (t) {
          return u.call(e, t) > -1 !== n
        })) : k.filter(e, t, n)
      }
      k.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? k.find.matchesSelector(i, t) ? [i] : [] : k.find.matches(t, k.grep(e, (function (t) {
          return 1 === t.nodeType
        })))
      }, k.fn.extend({
        find: function (t) {
          var e, n, i = this.length,
            o = this;
          if ("string" != typeof t) return this.pushStack(k(t).filter((function () {
            for (e = 0; e < i; e++)
              if (k.contains(o[e], this)) return !0
          })));
          for (n = this.pushStack([]), e = 0; e < i; e++) k.find(t, o[e], n);
          return i > 1 ? k.uniqueSort(n) : n
        },
        filter: function (t) {
          return this.pushStack(D(this, t || [], !1))
        },
        not: function (t) {
          return this.pushStack(D(this, t || [], !0))
        },
        is: function (t) {
          return !!D(this, "string" == typeof t && O.test(t) ? k(t) : t || [], !1).length
        }
      });
      var j, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (k.fn.init = function (t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || j, "string" == typeof t) {
          if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : P.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
          if (i[1]) {
            if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : b, !0)), N.test(i[1]) && k.isPlainObject(e))
              for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
            return this
          }
          return (o = b.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(k) : k.makeArray(t, this)
      }).prototype = k.fn, j = k(b);
      var I = /^(?:parents|prev(?:Until|All))/,
        L = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0
        };

      function H(t, e) {
        for (;
          (t = t[e]) && 1 !== t.nodeType;);
        return t
      }
      k.fn.extend({
        has: function (t) {
          var e = k(t, this),
            n = e.length;
          return this.filter((function () {
            for (var t = 0; t < n; t++)
              if (k.contains(this, e[t])) return !0
          }))
        },
        closest: function (t, e) {
          var n, i = 0,
            o = this.length,
            r = [],
            s = "string" != typeof t && k(t);
          if (!O.test(t))
            for (; i < o; i++)
              for (n = this[i]; n && n !== e; n = n.parentNode)
                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, t))) {
                  r.push(n);
                  break
                } return this.pushStack(r.length > 1 ? k.uniqueSort(r) : r)
        },
        index: function (t) {
          return t ? "string" == typeof t ? u.call(k(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
        },
        addBack: function (t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
      }), k.each({
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
          return S(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
          return S(t, "parentNode", n)
        },
        next: function (t) {
          return H(t, "nextSibling")
        },
        prev: function (t) {
          return H(t, "previousSibling")
        },
        nextAll: function (t) {
          return S(t, "nextSibling")
        },
        prevAll: function (t) {
          return S(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
          return S(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
          return S(t, "previousSibling", n)
        },
        siblings: function (t) {
          return E((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
          return E(t.firstChild)
        },
        contents: function (t) {
          return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (A(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
        }
      }, (function (t, e) {
        k.fn[t] = function (n, i) {
          var o = k.map(this, e, n);
          return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = k.filter(i, o)), this.length > 1 && (L[t] || k.uniqueSort(o), I.test(t) && o.reverse()), this.pushStack(o)
        }
      }));
      var R = /[^\x20\t\r\n\f]+/g;

      function F(t) {
        return t
      }

      function B(t) {
        throw t
      }

      function M(t, e, n, i) {
        var o;
        try {
          t && v(o = t.promise) ? o.call(t).done(e).fail(n) : t && v(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
          n.apply(void 0, [t])
        }
      }
      k.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
          var e = {};
          return k.each(t.match(R) || [], (function (t, n) {
            e[n] = !0
          })), e
        }(t) : k.extend({}, t);
        var e, n, i, o, r = [],
          s = [],
          a = -1,
          l = function () {
            for (o = o || t.once, i = e = !0; s.length; a = -1)
              for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
            t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
          },
          c = {
            add: function () {
              return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
                k.each(n, (function (n, i) {
                  v(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== x(i) && e(i)
                }))
              }(arguments), n && !e && l()), this
            },
            remove: function () {
              return k.each(arguments, (function (t, e) {
                for (var n;
                  (n = k.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= a && a--
              })), this
            },
            has: function (t) {
              return t ? k.inArray(t, r) > -1 : r.length > 0
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
              return o = s = [], n || e || (r = n = ""), this
            },
            locked: function () {
              return !!o
            },
            fireWith: function (t, n) {
              return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
            },
            fire: function () {
              return c.fireWith(this, arguments), this
            },
            fired: function () {
              return !!i
            }
          };
        return c
      }, k.extend({
        Deferred: function (t) {
          var e = [
              ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
              ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
              ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
            ],
            i = "pending",
            o = {
              state: function () {
                return i
              },
              always: function () {
                return r.done(arguments).fail(arguments), this
              },
              catch: function (t) {
                return o.then(null, t)
              },
              pipe: function () {
                var t = arguments;
                return k.Deferred((function (n) {
                  k.each(e, (function (e, i) {
                    var o = v(t[i[4]]) && t[i[4]];
                    r[i[1]]((function () {
                      var t = o && o.apply(this, arguments);
                      t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, o ? [t] : arguments)
                    }))
                  })), t = null
                })).promise()
              },
              then: function (t, i, o) {
                var r = 0;

                function s(t, e, i, o) {
                  return function () {
                    var a = this,
                      l = arguments,
                      c = function () {
                        var n, c;
                        if (!(t < r)) {
                          if ((n = i.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                          c = n && ("object" == typeof n || "function" == typeof n) && n.then, v(c) ? o ? c.call(n, s(r, e, F, o), s(r, e, B, o)) : (r++, c.call(n, s(r, e, F, o), s(r, e, B, o), s(r, e, F, e.notifyWith))) : (i !== F && (a = void 0, l = [n]), (o || e.resolveWith)(a, l))
                        }
                      },
                      u = o ? c : function () {
                        try {
                          c()
                        } catch (n) {
                          k.Deferred.exceptionHook && k.Deferred.exceptionHook(n, u.stackTrace), t + 1 >= r && (i !== B && (a = void 0, l = [n]), e.rejectWith(a, l))
                        }
                      };
                    t ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), n.setTimeout(u))
                  }
                }
                return k.Deferred((function (n) {
                  e[0][3].add(s(0, n, v(o) ? o : F, n.notifyWith)), e[1][3].add(s(0, n, v(t) ? t : F)), e[2][3].add(s(0, n, v(i) ? i : B))
                })).promise()
              },
              promise: function (t) {
                return null != t ? k.extend(t, o) : o
              }
            },
            r = {};
          return k.each(e, (function (t, n) {
            var s = n[2],
              a = n[5];
            o[n[1]] = s.add, a && s.add((function () {
              i = a
            }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), s.add(n[3].fire), r[n[0]] = function () {
              return r[n[0] + "With"](this === r ? void 0 : this, arguments), this
            }, r[n[0] + "With"] = s.fireWith
          })), o.promise(r), t && t.call(r, r), r
        },
        when: function (t) {
          var e = arguments.length,
            n = e,
            i = Array(n),
            o = a.call(arguments),
            r = k.Deferred(),
            s = function (t) {
              return function (n) {
                i[t] = this, o[t] = arguments.length > 1 ? a.call(arguments) : n, --e || r.resolveWith(i, o)
              }
            };
          if (e <= 1 && (M(t, r.done(s(n)).resolve, r.reject, !e), "pending" === r.state() || v(o[n] && o[n].then))) return r.then();
          for (; n--;) M(o[n], s(n), r.reject);
          return r.promise()
        }
      });
      var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      k.Deferred.exceptionHook = function (t, e) {
        n.console && n.console.warn && t && $.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
      }, k.readyException = function (t) {
        n.setTimeout((function () {
          throw t
        }))
      };
      var q = k.Deferred();

      function V() {
        b.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), k.ready()
      }
      k.fn.ready = function (t) {
        return q.then(t).catch((function (t) {
          k.readyException(t)
        })), this
      }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (t) {
          (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || q.resolveWith(b, [k]))
        }
      }), k.ready.then = q.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(k.ready) : (b.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
      var z = function (t, e, n, i, o, r, s) {
          var a = 0,
            l = t.length,
            c = null == n;
          if ("object" === x(n))
            for (a in o = !0, n) z(t, e, a, n[a], !0, r, s);
          else if (void 0 !== i && (o = !0, v(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
              return c.call(k(t), n)
            })), e))
            for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
          return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        },
        W = /^-ms-/,
        U = /-([a-z])/g;

      function G(t, e) {
        return e.toUpperCase()
      }

      function Q(t) {
        return t.replace(W, "ms-").replace(U, G)
      }
      var X = function (t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
      };

      function K() {
        this.expando = k.expando + K.uid++
      }
      K.uid = 1, K.prototype = {
        cache: function (t) {
          var e = t[this.expando];
          return e || (e = {}, X(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
            value: e,
            configurable: !0
          }))), e
        },
        set: function (t, e, n) {
          var i, o = this.cache(t);
          if ("string" == typeof e) o[Q(e)] = n;
          else
            for (i in e) o[Q(i)] = e[i];
          return o
        },
        get: function (t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Q(e)]
        },
        access: function (t, e, n) {
          return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
          var n, i = t[this.expando];
          if (void 0 !== i) {
            if (void 0 !== e) {
              n = (e = Array.isArray(e) ? e.map(Q) : (e = Q(e)) in i ? [e] : e.match(R) || []).length;
              for (; n--;) delete i[e[n]]
            }(void 0 === e || k.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
          }
        },
        hasData: function (t) {
          var e = t[this.expando];
          return void 0 !== e && !k.isEmptyObject(e)
        }
      };
      var Y = new K,
        J = new K,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        tt = /[A-Z]/g;

      function et(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
          if (i = "data-" + e.replace(tt, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
            try {
              n = function (t) {
                return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Z.test(t) ? JSON.parse(t) : t)
              }(n)
            } catch (t) {}
            J.set(t, e, n)
          } else n = void 0;
        return n
      }
      k.extend({
        hasData: function (t) {
          return J.hasData(t) || Y.hasData(t)
        },
        data: function (t, e, n) {
          return J.access(t, e, n)
        },
        removeData: function (t, e) {
          J.remove(t, e)
        },
        _data: function (t, e, n) {
          return Y.access(t, e, n)
        },
        _removeData: function (t, e) {
          Y.remove(t, e)
        }
      }), k.fn.extend({
        data: function (t, e) {
          var n, i, o, r = this[0],
            s = r && r.attributes;
          if (void 0 === t) {
            if (this.length && (o = J.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
              for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), et(r, i, o[i]));
              Y.set(r, "hasDataAttrs", !0)
            }
            return o
          }
          return "object" == typeof t ? this.each((function () {
            J.set(this, t)
          })) : z(this, (function (e) {
            var n;
            if (r && void 0 === e) return void 0 !== (n = J.get(r, t)) || void 0 !== (n = et(r, t)) ? n : void 0;
            this.each((function () {
              J.set(this, t, e)
            }))
          }), null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
          return this.each((function () {
            J.remove(this, t)
          }))
        }
      }), k.extend({
        queue: function (t, e, n) {
          var i;
          if (t) return e = (e || "fx") + "queue", i = Y.get(t, e), n && (!i || Array.isArray(n) ? i = Y.access(t, e, k.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
          e = e || "fx";
          var n = k.queue(t, e),
            i = n.length,
            o = n.shift(),
            r = k._queueHooks(t, e);
          "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, (function () {
            k.dequeue(t, e)
          }), r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (t, e) {
          var n = e + "queueHooks";
          return Y.get(t, n) || Y.access(t, n, {
            empty: k.Callbacks("once memory").add((function () {
              Y.remove(t, [e + "queue", n])
            }))
          })
        }
      }), k.fn.extend({
        queue: function (t, e) {
          var n = 2;
          return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? k.queue(this[0], t) : void 0 === e ? this : this.each((function () {
            var n = k.queue(this, t, e);
            k._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && k.dequeue(this, t)
          }))
        },
        dequeue: function (t) {
          return this.each((function () {
            k.dequeue(this, t)
          }))
        },
        clearQueue: function (t) {
          return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
          var n, i = 1,
            o = k.Deferred(),
            r = this,
            s = this.length,
            a = function () {
              --i || o.resolveWith(r, [r])
            };
          for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = Y.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
          return a(), o.promise(e)
        }
      });
      var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
        ot = ["Top", "Right", "Bottom", "Left"],
        rt = b.documentElement,
        st = function (t) {
          return k.contains(t.ownerDocument, t)
        },
        at = {
          composed: !0
        };
      rt.getRootNode && (st = function (t) {
        return k.contains(t.ownerDocument, t) || t.getRootNode(at) === t.ownerDocument
      });
      var lt = function (t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && st(t) && "none" === k.css(t, "display")
      };

      function ct(t, e, n, i) {
        var o, r, s = 20,
          a = i ? function () {
            return i.cur()
          } : function () {
            return k.css(t, e, "")
          },
          l = a(),
          c = n && n[3] || (k.cssNumber[e] ? "" : "px"),
          u = t.nodeType && (k.cssNumber[e] || "px" !== c && +l) && it.exec(k.css(t, e));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--;) k.style(t, e, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
          u *= 2, k.style(t, e, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
      }
      var ut = {};

      function dt(t) {
        var e, n = t.ownerDocument,
          i = t.nodeName,
          o = ut[i];
        return o || (e = n.body.appendChild(n.createElement(i)), o = k.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), ut[i] = o, o)
      }

      function ft(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++)(i = t[r]).style && (n = i.style.display, e ? ("none" === n && (o[r] = Y.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && lt(i) && (o[r] = dt(i))) : "none" !== n && (o[r] = "none", Y.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t
      }
      k.fn.extend({
        show: function () {
          return ft(this, !0)
        },
        hide: function () {
          return ft(this)
        },
        toggle: function (t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function () {
            lt(this) ? k(this).show() : k(this).hide()
          }))
        }
      });
      var ht, pt, gt = /^(?:checkbox|radio)$/i,
        mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        vt = /^$|^module$|\/(?:java|ecma)script/i;
      ht = b.createDocumentFragment().appendChild(b.createElement("div")), (pt = b.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), ht.appendChild(pt), m.checkClone = ht.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!ht.cloneNode(!0).lastChild.defaultValue, ht.innerHTML = "<option></option>", m.option = !!ht.lastChild;
      var yt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function bt(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? k.merge([t], n) : n
      }

      function wt(t, e) {
        for (var n = 0, i = t.length; n < i; n++) Y.set(t[n], "globalEval", !e || Y.get(e[n], "globalEval"))
      }
      yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, m.option || (yt.optgroup = yt.option = [1, "<select multiple='multiple'>", "</select>"]);
      var _t = /<|&#?\w+;/;

      function xt(t, e, n, i, o) {
        for (var r, s, a, l, c, u, d = e.createDocumentFragment(), f = [], h = 0, p = t.length; h < p; h++)
          if ((r = t[h]) || 0 === r)
            if ("object" === x(r)) k.merge(f, r.nodeType ? [r] : r);
            else if (_t.test(r)) {
          for (s = s || d.appendChild(e.createElement("div")), a = (mt.exec(r) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, s.innerHTML = l[1] + k.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
          k.merge(f, s.childNodes), (s = d.firstChild).textContent = ""
        } else f.push(e.createTextNode(r));
        for (d.textContent = "", h = 0; r = f[h++];)
          if (i && k.inArray(r, i) > -1) o && o.push(r);
          else if (c = st(r), s = bt(d.appendChild(r), "script"), c && wt(s), n)
          for (u = 0; r = s[u++];) vt.test(r.type || "") && n.push(r);
        return d
      }
      var kt = /^key/,
        Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ct = /^([^.]*)(?:\.(.+)|)/;

      function St() {
        return !0
      }

      function Et() {
        return !1
      }

      function Ot(t, e) {
        return t === function () {
          try {
            return b.activeElement
          } catch (t) {}
        }() == ("focus" === e)
      }

      function At(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
          for (a in "string" != typeof n && (i = i || n, n = void 0), e) At(t, a, n, i, e[a], r);
          return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Et;
        else if (!o) return t;
        return 1 === r && (s = o, (o = function (t) {
          return k().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = k.guid++)), t.each((function () {
          k.event.add(this, e, o, i, n)
        }))
      }

      function Nt(t, e, n) {
        n ? (Y.set(t, e, !1), k.event.add(t, e, {
          namespace: !1,
          handler: function (t) {
            var i, o, r = Y.get(this, e);
            if (1 & t.isTrigger && this[e]) {
              if (r.length)(k.event.special[e] || {}).delegateType && t.stopPropagation();
              else if (r = a.call(arguments), Y.set(this, e, r), i = n(this, e), this[e](), r !== (o = Y.get(this, e)) || i ? Y.set(this, e, !1) : o = {}, r !== o) return t.stopImmediatePropagation(), t.preventDefault(), o.value
            } else r.length && (Y.set(this, e, {
              value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
            }), t.stopImmediatePropagation())
          }
        })) : void 0 === Y.get(t, e) && k.event.add(t, e, St)
      }
      k.event = {
        global: {},
        add: function (t, e, n, i, o) {
          var r, s, a, l, c, u, d, f, h, p, g, m = Y.get(t);
          if (X(t))
            for (n.handler && (n = (r = n).handler, o = r.selector), o && k.find.matchesSelector(rt, o), n.guid || (n.guid = k.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (e) {
                return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
              }), c = (e = (e || "").match(R) || [""]).length; c--;) h = g = (a = Ct.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = k.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = k.event.special[h] || {}, u = k.extend({
              type: h,
              origType: g,
              data: i,
              handler: n,
              guid: n.guid,
              selector: o,
              needsContext: o && k.expr.match.needsContext.test(o),
              namespace: p.join(".")
            }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), k.event.global[h] = !0)
        },
        remove: function (t, e, n, i, o) {
          var r, s, a, l, c, u, d, f, h, p, g, m = Y.hasData(t) && Y.get(t);
          if (m && (l = m.events)) {
            for (c = (e = (e || "").match(R) || [""]).length; c--;)
              if (h = g = (a = Ct.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                for (d = k.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(t, u));
                s && !f.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || k.removeEvent(t, h, m.handle), delete l[h])
              } else
                for (h in l) k.event.remove(t, h + e[c], n, i, !0);
            k.isEmptyObject(l) && Y.remove(t, "handle events")
          }
        },
        dispatch: function (t) {
          var e, n, i, o, r, s, a = new Array(arguments.length),
            l = k.event.fix(t),
            c = (Y.get(this, "events") || Object.create(null))[l.type] || [],
            u = k.event.special[l.type] || {};
          for (a[0] = l, e = 1; e < arguments.length; e++) a[e] = arguments[e];
          if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
            for (s = k.event.handlers.call(this, l, c), e = 0;
              (o = s[e++]) && !l.isPropagationStopped();)
              for (l.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== r.namespace && !l.rnamespace.test(r.namespace) || (l.handleObj = r, l.data = r.data, void 0 !== (i = ((k.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result
          }
        },
        handlers: function (t, e) {
          var n, i, o, r, s, a = [],
            l = e.delegateCount,
            c = t.target;
          if (l && c.nodeType && !("click" === t.type && t.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? k(o, this).index(c) > -1 : k.find(o, this, null, [c]).length), s[o] && r.push(i);
                r.length && a.push({
                  elem: c,
                  handlers: r
                })
              } return c = this, l < e.length && a.push({
            elem: c,
            handlers: e.slice(l)
          }), a
        },
        addProp: function (t, e) {
          Object.defineProperty(k.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: v(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
            set: function (e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              })
            }
          })
        },
        fix: function (t) {
          return t[k.expando] ? t : new k.Event(t)
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function (t) {
              var e = this || t;
              return gt.test(e.type) && e.click && A(e, "input") && Nt(e, "click", St), !1
            },
            trigger: function (t) {
              var e = this || t;
              return gt.test(e.type) && e.click && A(e, "input") && Nt(e, "click"), !0
            },
            _default: function (t) {
              var e = t.target;
              return gt.test(e.type) && e.click && A(e, "input") && Y.get(e, "click") || A(e, "a")
            }
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
            }
          }
        }
      }, k.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
      }, k.Event = function (t, e) {
        if (!(this instanceof k.Event)) return new k.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : Et, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0
      }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Et,
        isPropagationStopped: Et,
        isImmediatePropagationStopped: Et,
        isSimulated: !1,
        preventDefault: function () {
          var t = this.originalEvent;
          this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
          var t = this.originalEvent;
          this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
      }, k.each({
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
        which: function (t) {
          var e = t.button;
          return null == t.which && kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
      }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
      }, (function (t, e) {
        k.event.special[t] = {
          setup: function () {
            return Nt(this, t, Ot), !1
          },
          trigger: function () {
            return Nt(this, t), !0
          },
          delegateType: e
        }
      })), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, (function (t, e) {
        k.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var n, i = this,
              o = t.relatedTarget,
              r = t.handleObj;
            return o && (o === i || k.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
          }
        }
      })), k.fn.extend({
        on: function (t, e, n, i) {
          return At(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
          return At(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
          var i, o;
          if (t && t.preventDefault && t.handleObj) return i = t.handleObj, k(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
          if ("object" == typeof t) {
            for (o in t) this.off(o, e, t[o]);
            return this
          }
          return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Et), this.each((function () {
            k.event.remove(this, t, n, e)
          }))
        }
      });
      var Dt = /<script|<style|<link/i,
        jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function It(t, e) {
        return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t
      }

      function Lt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
      }

      function Ht(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
      }

      function Rt(t, e) {
        var n, i, o, r, s, a;
        if (1 === e.nodeType) {
          if (Y.hasData(t) && (a = Y.get(t).events))
            for (o in Y.remove(e, "handle events"), a)
              for (n = 0, i = a[o].length; n < i; n++) k.event.add(e, o, a[o][n]);
          J.hasData(t) && (r = J.access(t), s = k.extend({}, r), J.set(e, s))
        }
      }

      function Ft(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && gt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
      }

      function Bt(t, e, n, i) {
        e = l(e);
        var o, r, s, a, c, u, d = 0,
          f = t.length,
          h = f - 1,
          p = e[0],
          g = v(p);
        if (g || f > 1 && "string" == typeof p && !m.checkClone && jt.test(p)) return t.each((function (o) {
          var r = t.eq(o);
          g && (e[0] = p.call(this, o, r.html())), Bt(r, e, n, i)
        }));
        if (f && (r = (o = xt(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
          for (a = (s = k.map(bt(o, "script"), Lt)).length; d < f; d++) c = o, d !== h && (c = k.clone(c, !0, !0), a && k.merge(s, bt(c, "script"))), n.call(t[d], c, d);
          if (a)
            for (u = s[s.length - 1].ownerDocument, k.map(s, Ht), d = 0; d < a; d++) c = s[d], vt.test(c.type || "") && !Y.access(c, "globalEval") && k.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? k._evalUrl && !c.noModule && k._evalUrl(c.src, {
              nonce: c.nonce || c.getAttribute("nonce")
            }, u) : _(c.textContent.replace(Pt, ""), c, u))
        }
        return t
      }

      function Mt(t, e, n) {
        for (var i, o = e ? k.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || k.cleanData(bt(i)), i.parentNode && (n && st(i) && wt(bt(i, "script")), i.parentNode.removeChild(i));
        return t
      }
      k.extend({
        htmlPrefilter: function (t) {
          return t
        },
        clone: function (t, e, n) {
          var i, o, r, s, a = t.cloneNode(!0),
            l = st(t);
          if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
            for (s = bt(a), i = 0, o = (r = bt(t)).length; i < o; i++) Ft(r[i], s[i]);
          if (e)
            if (n)
              for (r = r || bt(t), s = s || bt(a), i = 0, o = r.length; i < o; i++) Rt(r[i], s[i]);
            else Rt(t, a);
          return (s = bt(a, "script")).length > 0 && wt(s, !l && bt(t, "script")), a
        },
        cleanData: function (t) {
          for (var e, n, i, o = k.event.special, r = 0; void 0 !== (n = t[r]); r++)
            if (X(n)) {
              if (e = n[Y.expando]) {
                if (e.events)
                  for (i in e.events) o[i] ? k.event.remove(n, i) : k.removeEvent(n, i, e.handle);
                n[Y.expando] = void 0
              }
              n[J.expando] && (n[J.expando] = void 0)
            }
        }
      }), k.fn.extend({
        detach: function (t) {
          return Mt(this, t, !0)
        },
        remove: function (t) {
          return Mt(this, t)
        },
        text: function (t) {
          return z(this, (function (t) {
            return void 0 === t ? k.text(this) : this.empty().each((function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
            }))
          }), null, t, arguments.length)
        },
        append: function () {
          return Bt(this, arguments, (function (t) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || It(this, t).appendChild(t)
          }))
        },
        prepend: function () {
          return Bt(this, arguments, (function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var e = It(this, t);
              e.insertBefore(t, e.firstChild)
            }
          }))
        },
        before: function () {
          return Bt(this, arguments, (function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this)
          }))
        },
        after: function () {
          return Bt(this, arguments, (function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
          }))
        },
        empty: function () {
          for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(bt(t, !1)), t.textContent = "");
          return this
        },
        clone: function (t, e) {
          return t = null != t && t, e = null == e ? t : e, this.map((function () {
            return k.clone(this, t, e)
          }))
        },
        html: function (t) {
          return z(this, (function (t) {
            var e = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if ("string" == typeof t && !Dt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = k.htmlPrefilter(t);
              try {
                for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (k.cleanData(bt(e, !1)), e.innerHTML = t);
                e = 0
              } catch (t) {}
            }
            e && this.empty().append(t)
          }), null, t, arguments.length)
        },
        replaceWith: function () {
          var t = [];
          return Bt(this, arguments, (function (e) {
            var n = this.parentNode;
            k.inArray(this, t) < 0 && (k.cleanData(bt(this)), n && n.replaceChild(e, this))
          }), t)
        }
      }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, (function (t, e) {
        k.fn[t] = function (t) {
          for (var n, i = [], o = k(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), k(o[s])[e](n), c.apply(i, n.get());
          return this.pushStack(i)
        }
      }));
      var $t = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
        qt = function (t) {
          var e = t.ownerDocument.defaultView;
          return e && e.opener || (e = n), e.getComputedStyle(t)
        },
        Vt = function (t, e, n) {
          var i, o, r = {};
          for (o in e) r[o] = t.style[o], t.style[o] = e[o];
          for (o in i = n.call(t), e) t.style[o] = r[o];
          return i
        },
        zt = new RegExp(ot.join("|"), "i");

      function Wt(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || qt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || st(t) || (s = k.style(t, e)), !m.pixelBoxStyles() && $t.test(s) && zt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
      }

      function Ut(t, e) {
        return {
          get: function () {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get
          }
        }
      }! function () {
        function t() {
          if (u) {
            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", rt.appendChild(c).appendChild(u);
            var t = n.getComputedStyle(u);
            i = "1%" !== t.top, l = 12 === e(t.marginLeft), u.style.right = "60%", s = 36 === e(t.right), o = 36 === e(t.width), u.style.position = "absolute", r = 12 === e(u.offsetWidth / 3), rt.removeChild(c), u = null
          }
        }

        function e(t) {
          return Math.round(parseFloat(t))
        }
        var i, o, r, s, a, l, c = b.createElement("div"),
          u = b.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(m, {
          boxSizingReliable: function () {
            return t(), o
          },
          pixelBoxStyles: function () {
            return t(), s
          },
          pixelPosition: function () {
            return t(), i
          },
          reliableMarginLeft: function () {
            return t(), l
          },
          scrollboxSize: function () {
            return t(), r
          },
          reliableTrDimensions: function () {
            var t, e, i, o;
            return null == a && (t = b.createElement("table"), e = b.createElement("tr"), i = b.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", i.style.height = "9px", rt.appendChild(t).appendChild(e).appendChild(i), o = n.getComputedStyle(e), a = parseInt(o.height) > 3, rt.removeChild(t)), a
          }
        }))
      }();
      var Gt = ["Webkit", "Moz", "ms"],
        Qt = b.createElement("div").style,
        Xt = {};

      function Kt(t) {
        var e = k.cssProps[t] || Xt[t];
        return e || (t in Qt ? t : Xt[t] = function (t) {
          for (var e = t[0].toUpperCase() + t.slice(1), n = Gt.length; n--;)
            if ((t = Gt[n] + e) in Qt) return t
        }(t) || t)
      }
      var Yt = /^(none|table(?!-c[ea]).+)/,
        Jt = /^--/,
        Zt = {
          position: "absolute",
          visibility: "hidden",
          display: "block"
        },
        te = {
          letterSpacing: "0",
          fontWeight: "400"
        };

      function ee(t, e, n) {
        var i = it.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
      }

      function ne(t, e, n, i, o, r) {
        var s = "width" === e ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += k.css(t, n + ot[s], !0, o)), i ? ("content" === n && (l -= k.css(t, "padding" + ot[s], !0, o)), "margin" !== n && (l -= k.css(t, "border" + ot[s] + "Width", !0, o))) : (l += k.css(t, "padding" + ot[s], !0, o), "padding" !== n ? l += k.css(t, "border" + ot[s] + "Width", !0, o) : a += k.css(t, "border" + ot[s] + "Width", !0, o));
        return !i && r >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5)) || 0), l
      }

      function ie(t, e, n) {
        var i = qt(t),
          o = (!m.boxSizingReliable() || n) && "border-box" === k.css(t, "boxSizing", !1, i),
          r = o,
          s = Wt(t, e, i),
          a = "offset" + e[0].toUpperCase() + e.slice(1);
        if ($t.test(s)) {
          if (!n) return s;
          s = "auto"
        }
        return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && A(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === k.css(t, "display", !1, i)) && t.getClientRects().length && (o = "border-box" === k.css(t, "boxSizing", !1, i), (r = a in t) && (s = t[a])), (s = parseFloat(s) || 0) + ne(t, e, n || (o ? "border" : "content"), r, i, s) + "px"
      }

      function oe(t, e, n, i, o) {
        return new oe.prototype.init(t, e, n, i, o)
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function (t, e) {
              if (e) {
                var n = Wt(t, "opacity");
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
        style: function (t, e, n, i) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var o, r, s, a = Q(e),
              l = Jt.test(e),
              c = t.style;
            if (l || (e = Kt(a)), s = k.cssHooks[e] || k.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : c[e];
            "string" === (r = typeof n) && (o = it.exec(n)) && o[1] && (n = ct(t, e, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (k.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
          }
        },
        css: function (t, e, n, i) {
          var o, r, s, a = Q(e);
          return Jt.test(e) || (e = Kt(a)), (s = k.cssHooks[e] || k.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Wt(t, e, i)), "normal" === o && e in te && (o = te[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
      }), k.each(["height", "width"], (function (t, e) {
        k.cssHooks[e] = {
          get: function (t, n, i) {
            if (n) return !Yt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ie(t, e, i) : Vt(t, Zt, (function () {
              return ie(t, e, i)
            }))
          },
          set: function (t, n, i) {
            var o, r = qt(t),
              s = !m.scrollboxSize() && "absolute" === r.position,
              a = (s || i) && "border-box" === k.css(t, "boxSizing", !1, r),
              l = i ? ne(t, e, i, a, r) : 0;
            return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(r[e]) - ne(t, e, "border", !1, r) - .5)), l && (o = it.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = k.css(t, e)), ee(0, n, l)
          }
        }
      })), k.cssHooks.marginLeft = Ut(m.reliableMarginLeft, (function (t, e) {
        if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - Vt(t, {
          marginLeft: 0
        }, (function () {
          return t.getBoundingClientRect().left
        }))) + "px"
      })), k.each({
        margin: "",
        padding: "",
        border: "Width"
      }, (function (t, e) {
        k.cssHooks[t + e] = {
          expand: function (n) {
            for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + ot[i] + e] = r[i] || r[i - 2] || r[0];
            return o
          }
        }, "margin" !== t && (k.cssHooks[t + e].set = ee)
      })), k.fn.extend({
        css: function (t, e) {
          return z(this, (function (t, e, n) {
            var i, o, r = {},
              s = 0;
            if (Array.isArray(e)) {
              for (i = qt(t), o = e.length; s < o; s++) r[e[s]] = k.css(t, e[s], !1, i);
              return r
            }
            return void 0 !== n ? k.style(t, e, n) : k.css(t, e)
          }), t, e, arguments.length > 1)
        }
      }), k.Tween = oe, oe.prototype = {
        constructor: oe,
        init: function (t, e, n, i, o, r) {
          this.elem = t, this.prop = n, this.easing = o || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (k.cssNumber[n] ? "" : "px")
        },
        cur: function () {
          var t = oe.propHooks[this.prop];
          return t && t.get ? t.get(this) : oe.propHooks._default.get(this)
        },
        run: function (t) {
          var e, n = oe.propHooks[this.prop];
          return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : oe.propHooks._default.set(this), this
        }
      }, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
        _default: {
          get: function (t) {
            var e;
            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
          },
          set: function (t) {
            k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !k.cssHooks[t.prop] && null == t.elem.style[Kt(t.prop)] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
          }
        }
      }, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
      }, k.easing = {
        linear: function (t) {
          return t
        },
        swing: function (t) {
          return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
      }, k.fx = oe.prototype.init, k.fx.step = {};
      var re, se, ae = /^(?:toggle|show|hide)$/,
        le = /queueHooks$/;

      function ce() {
        se && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ce) : n.setTimeout(ce, k.fx.interval), k.fx.tick())
      }

      function ue() {
        return n.setTimeout((function () {
          re = void 0
        })), re = Date.now()
      }

      function de(t, e) {
        var n, i = 0,
          o = {
            height: t
          };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = ot[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o
      }

      function fe(t, e, n) {
        for (var i, o = (he.tweeners[e] || []).concat(he.tweeners["*"]), r = 0, s = o.length; r < s; r++)
          if (i = o[r].call(n, e, t)) return i
      }

      function he(t, e, n) {
        var i, o, r = 0,
          s = he.prefilters.length,
          a = k.Deferred().always((function () {
            delete l.elem
          })),
          l = function () {
            if (o) return !1;
            for (var e = re || ue(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
            return a.notifyWith(t, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
          },
          c = a.promise({
            elem: t,
            props: k.extend({}, e),
            opts: k.extend(!0, {
              specialEasing: {},
              easing: k.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: re || ue(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
              var i = k.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
              return c.tweens.push(i), i
            },
            stop: function (e) {
              var n = 0,
                i = e ? c.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < i; n++) c.tweens[n].run(1);
              return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
            }
          }),
          u = c.props;
        for (! function (t, e) {
            var n, i, o, r, s;
            for (n in t)
              if (o = e[i = Q(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = k.cssHooks[i]) && "expand" in s)
                for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
              else e[i] = o
          }(u, c.opts.specialEasing); r < s; r++)
          if (i = he.prefilters[r].call(c, t, u, c.opts)) return v(i.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return k.map(u, fe, c), v(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(l, {
          elem: t,
          anim: c,
          queue: c.opts.queue
        })), c
      }
      k.Animation = k.extend(he, {
          tweeners: {
            "*": [function (t, e) {
              var n = this.createTween(t, e);
              return ct(n.elem, t, it.exec(e), n), n
            }]
          },
          tweener: function (t, e) {
            v(t) ? (e = t, t = ["*"]) : t = t.match(R);
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], he.tweeners[n] = he.tweeners[n] || [], he.tweeners[n].unshift(e)
          },
          prefilters: [function (t, e, n) {
            var i, o, r, s, a, l, c, u, d = "width" in e || "height" in e,
              f = this,
              h = {},
              p = t.style,
              g = t.nodeType && lt(t),
              m = Y.get(t, "fxshow");
            for (i in n.queue || (null == (s = k._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
              }), s.unqueued++, f.always((function () {
                f.always((function () {
                  s.unqueued--, k.queue(t, "fx").length || s.empty.fire()
                }))
              }))), e)
              if (o = e[i], ae.test(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                  if ("show" !== o || !m || void 0 === m[i]) continue;
                  g = !0
                }
                h[i] = m && m[i] || k.style(t, i)
              } if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(h))
              for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = Y.get(t, "display")), "none" === (u = k.css(t, "display")) && (c ? u = c : (ft([t], !0), c = t.style.display || c, u = k.css(t, "display"), ft([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === k.css(t, "float") && (l || (f.done((function () {
                  p.display = c
                })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always((function () {
                  p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = Y.access(t, "fxshow", {
                display: c
              }), r && (m.hidden = !g), g && ft([t], !0), f.done((function () {
                for (i in g || ft([t]), Y.remove(t, "fxshow"), h) k.style(t, i, h[i])
              }))), l = fe(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
          }],
          prefilter: function (t, e) {
            e ? he.prefilters.unshift(t) : he.prefilters.push(t)
          }
        }), k.speed = function (t, e, n) {
          var i = t && "object" == typeof t ? k.extend({}, t) : {
            complete: n || !n && e || v(t) && t,
            duration: t,
            easing: n && e || e && !v(e) && e
          };
          return k.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in k.fx.speeds ? i.duration = k.fx.speeds[i.duration] : i.duration = k.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            v(i.old) && i.old.call(this), i.queue && k.dequeue(this, i.queue)
          }, i
        }, k.fn.extend({
          fadeTo: function (t, e, n, i) {
            return this.filter(lt).css("opacity", 0).show().end().animate({
              opacity: e
            }, t, n, i)
          },
          animate: function (t, e, n, i) {
            var o = k.isEmptyObject(t),
              r = k.speed(e, n, i),
              s = function () {
                var e = he(this, k.extend({}, t), r);
                (o || Y.get(this, "finish")) && e.stop(!0)
              };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
          },
          stop: function (t, e, n) {
            var i = function (t) {
              var e = t.stop;
              delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function () {
              var e = !0,
                o = null != t && t + "queueHooks",
                r = k.timers,
                s = Y.get(this);
              if (o) s[o] && s[o].stop && i(s[o]);
              else
                for (o in s) s[o] && s[o].stop && le.test(o) && i(s[o]);
              for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
              !e && n || k.dequeue(this, t)
            }))
          },
          finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each((function () {
              var e, n = Y.get(this),
                i = n[t + "queue"],
                o = n[t + "queueHooks"],
                r = k.timers,
                s = i ? i.length : 0;
              for (n.finish = !0, k.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
              for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
              delete n.finish
            }))
          }
        }), k.each(["toggle", "show", "hide"], (function (t, e) {
          var n = k.fn[e];
          k.fn[e] = function (t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(de(e, !0), t, i, o)
          }
        })), k.each({
          slideDown: de("show"),
          slideUp: de("hide"),
          slideToggle: de("toggle"),
          fadeIn: {
            opacity: "show"
          },
          fadeOut: {
            opacity: "hide"
          },
          fadeToggle: {
            opacity: "toggle"
          }
        }, (function (t, e) {
          k.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
          }
        })), k.timers = [], k.fx.tick = function () {
          var t, e = 0,
            n = k.timers;
          for (re = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
          n.length || k.fx.stop(), re = void 0
        }, k.fx.timer = function (t) {
          k.timers.push(t), k.fx.start()
        }, k.fx.interval = 13, k.fx.start = function () {
          se || (se = !0, ce())
        }, k.fx.stop = function () {
          se = null
        }, k.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400
        }, k.fn.delay = function (t, e) {
          return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function (e, i) {
            var o = n.setTimeout(e, t);
            i.stop = function () {
              n.clearTimeout(o)
            }
          }))
        },
        function () {
          var t = b.createElement("input"),
            e = b.createElement("select").appendChild(b.createElement("option"));
          t.type = "checkbox", m.checkOn = "" !== t.value, m.optSelected = e.selected, (t = b.createElement("input")).value = "t", t.type = "radio", m.radioValue = "t" === t.value
        }();
      var pe, ge = k.expr.attrHandle;
      k.fn.extend({
        attr: function (t, e) {
          return z(this, k.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
          return this.each((function () {
            k.removeAttr(this, t)
          }))
        }
      }), k.extend({
        attr: function (t, e, n) {
          var i, o, r = t.nodeType;
          if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? k.prop(t, e, n) : (1 === r && k.isXMLDoc(t) || (o = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? pe : void 0)), void 0 !== n ? null === n ? void k.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = k.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
          type: {
            set: function (t, e) {
              if (!m.radioValue && "radio" === e && A(t, "input")) {
                var n = t.value;
                return t.setAttribute("type", e), n && (t.value = n), e
              }
            }
          }
        },
        removeAttr: function (t, e) {
          var n, i = 0,
            o = e && e.match(R);
          if (o && 1 === t.nodeType)
            for (; n = o[i++];) t.removeAttribute(n)
        }
      }), pe = {
        set: function (t, e, n) {
          return !1 === e ? k.removeAttr(t, n) : t.setAttribute(n, n), n
        }
      }, k.each(k.expr.match.bool.source.match(/\w+/g), (function (t, e) {
        var n = ge[e] || k.find.attr;
        ge[e] = function (t, e, i) {
          var o, r, s = e.toLowerCase();
          return i || (r = ge[s], ge[s] = o, o = null != n(t, e, i) ? s : null, ge[s] = r), o
        }
      }));
      var me = /^(?:input|select|textarea|button)$/i,
        ve = /^(?:a|area)$/i;

      function ye(t) {
        return (t.match(R) || []).join(" ")
      }

      function be(t) {
        return t.getAttribute && t.getAttribute("class") || ""
      }

      function we(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(R) || []
      }
      k.fn.extend({
        prop: function (t, e) {
          return z(this, k.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
          return this.each((function () {
            delete this[k.propFix[t] || t]
          }))
        }
      }), k.extend({
        prop: function (t, e, n) {
          var i, o, r = t.nodeType;
          if (3 !== r && 8 !== r && 2 !== r) return 1 === r && k.isXMLDoc(t) || (e = k.propFix[e] || e, o = k.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
          tabIndex: {
            get: function (t) {
              var e = k.find.attr(t, "tabindex");
              return e ? parseInt(e, 10) : me.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), m.optSelected || (k.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
      }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
        k.propFix[this.toLowerCase()] = this
      })), k.fn.extend({
        addClass: function (t) {
          var e, n, i, o, r, s, a, l = 0;
          if (v(t)) return this.each((function (e) {
            k(this).addClass(t.call(this, e, be(this)))
          }));
          if ((e = we(t)).length)
            for (; n = this[l++];)
              if (o = be(n), i = 1 === n.nodeType && " " + ye(o) + " ") {
                for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = ye(i)) && n.setAttribute("class", a)
              } return this
        },
        removeClass: function (t) {
          var e, n, i, o, r, s, a, l = 0;
          if (v(t)) return this.each((function (e) {
            k(this).removeClass(t.call(this, e, be(this)))
          }));
          if (!arguments.length) return this.attr("class", "");
          if ((e = we(t)).length)
            for (; n = this[l++];)
              if (o = be(n), i = 1 === n.nodeType && " " + ye(o) + " ") {
                for (s = 0; r = e[s++];)
                  for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                o !== (a = ye(i)) && n.setAttribute("class", a)
              } return this
        },
        toggleClass: function (t, e) {
          var n = typeof t,
            i = "string" === n || Array.isArray(t);
          return "boolean" == typeof e && i ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each((function (n) {
            k(this).toggleClass(t.call(this, n, be(this), e), e)
          })) : this.each((function () {
            var e, o, r, s;
            if (i)
              for (o = 0, r = k(this), s = we(t); e = s[o++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
            else void 0 !== t && "boolean" !== n || ((e = be(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Y.get(this, "__className__") || ""))
          }))
        },
        hasClass: function (t) {
          var e, n, i = 0;
          for (e = " " + t + " "; n = this[i++];)
            if (1 === n.nodeType && (" " + ye(be(n)) + " ").indexOf(e) > -1) return !0;
          return !1
        }
      });
      var _e = /\r/g;
      k.fn.extend({
        val: function (t) {
          var e, n, i, o = this[0];
          return arguments.length ? (i = v(t), this.each((function (n) {
            var o;
            1 === this.nodeType && (null == (o = i ? t.call(this, n, k(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = k.map(o, (function (t) {
              return null == t ? "" : t + ""
            }))), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
          }))) : o ? (e = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(_e, "") : null == n ? "" : n : void 0
        }
      }), k.extend({
        valHooks: {
          option: {
            get: function (t) {
              var e = k.find.attr(t, "value");
              return null != e ? e : ye(k.text(t))
            }
          },
          select: {
            get: function (t) {
              var e, n, i, o = t.options,
                r = t.selectedIndex,
                s = "select-one" === t.type,
                a = s ? null : [],
                l = s ? r + 1 : o.length;
              for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                  if (e = k(n).val(), s) return e;
                  a.push(e)
                } return a
            },
            set: function (t, e) {
              for (var n, i, o = t.options, r = k.makeArray(e), s = o.length; s--;)((i = o[s]).selected = k.inArray(k.valHooks.option.get(i), r) > -1) && (n = !0);
              return n || (t.selectedIndex = -1), r
            }
          }
        }
      }), k.each(["radio", "checkbox"], (function () {
        k.valHooks[this] = {
          set: function (t, e) {
            if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1
          }
        }, m.checkOn || (k.valHooks[this].get = function (t) {
          return null === t.getAttribute("value") ? "on" : t.value
        })
      })), m.focusin = "onfocusin" in n;
      var xe = /^(?:focusinfocus|focusoutblur)$/,
        ke = function (t) {
          t.stopPropagation()
        };
      k.extend(k.event, {
        trigger: function (t, e, i, o) {
          var r, s, a, l, c, u, d, f, p = [i || b],
            g = h.call(t, "type") ? t.type : t,
            m = h.call(t, "namespace") ? t.namespace.split(".") : [];
          if (s = f = a = i = i || b, 3 !== i.nodeType && 8 !== i.nodeType && !xe.test(g + k.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (t = t[k.expando] ? t : new k.Event(g, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : k.makeArray(e, [t]), d = k.event.special[g] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, e))) {
            if (!o && !d.noBubble && !y(i)) {
              for (l = d.delegateType || g, xe.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
              a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n)
            }
            for (r = 0;
              (s = p[r++]) && !t.isPropagationStopped();) f = s, t.type = r > 1 ? l : d.bindType || g, (u = (Y.get(s, "events") || Object.create(null))[t.type] && Y.get(s, "handle")) && u.apply(s, e), (u = c && s[c]) && u.apply && X(s) && (t.result = u.apply(s, e), !1 === t.result && t.preventDefault());
            return t.type = g, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), e) || !X(i) || c && v(i[g]) && !y(i) && ((a = i[c]) && (i[c] = null), k.event.triggered = g, t.isPropagationStopped() && f.addEventListener(g, ke), i[g](), t.isPropagationStopped() && f.removeEventListener(g, ke), k.event.triggered = void 0, a && (i[c] = a)), t.result
          }
        },
        simulate: function (t, e, n) {
          var i = k.extend(new k.Event, n, {
            type: t,
            isSimulated: !0
          });
          k.event.trigger(i, null, e)
        }
      }), k.fn.extend({
        trigger: function (t, e) {
          return this.each((function () {
            k.event.trigger(t, e, this)
          }))
        },
        triggerHandler: function (t, e) {
          var n = this[0];
          if (n) return k.event.trigger(t, e, n, !0)
        }
      }), m.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
      }, (function (t, e) {
        var n = function (t) {
          k.event.simulate(e, t.target, k.event.fix(t))
        };
        k.event.special[e] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              o = Y.access(i, e);
            o || i.addEventListener(t, n, !0), Y.access(i, e, (o || 0) + 1)
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              o = Y.access(i, e) - 1;
            o ? Y.access(i, e, o) : (i.removeEventListener(t, n, !0), Y.remove(i, e))
          }
        }
      }));
      var Te = n.location,
        Ce = {
          guid: Date.now()
        },
        Se = /\?/;
      k.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
          e = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
          e = void 0
        }
        return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
      };
      var Ee = /\[\]$/,
        Oe = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        Ne = /^(?:input|select|textarea|keygen)/i;

      function De(t, e, n, i) {
        var o;
        if (Array.isArray(e)) k.each(e, (function (e, o) {
          n || Ee.test(t) ? i(t, o) : De(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
        }));
        else if (n || "object" !== x(e)) i(t, e);
        else
          for (o in e) De(t + "[" + o + "]", e[o], n, i)
      }
      k.param = function (t, e) {
        var n, i = [],
          o = function (t, e) {
            var n = v(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
          };
        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, (function () {
          o(this.name, this.value)
        }));
        else
          for (n in t) De(n, t[n], e, o);
        return i.join("&")
      }, k.fn.extend({
        serialize: function () {
          return k.param(this.serializeArray())
        },
        serializeArray: function () {
          return this.map((function () {
            var t = k.prop(this, "elements");
            return t ? k.makeArray(t) : this
          })).filter((function () {
            var t = this.type;
            return this.name && !k(this).is(":disabled") && Ne.test(this.nodeName) && !Ae.test(t) && (this.checked || !gt.test(t))
          })).map((function (t, e) {
            var n = k(this).val();
            return null == n ? null : Array.isArray(n) ? k.map(n, (function (t) {
              return {
                name: e.name,
                value: t.replace(Oe, "\r\n")
              }
            })) : {
              name: e.name,
              value: n.replace(Oe, "\r\n")
            }
          })).get()
        }
      });
      var je = /%20/g,
        Pe = /#.*$/,
        Ie = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        He = /^(?:GET|HEAD)$/,
        Re = /^\/\//,
        Fe = {},
        Be = {},
        Me = "*/".concat("*"),
        $e = b.createElement("a");

      function qe(t) {
        return function (e, n) {
          "string" != typeof e && (n = e, e = "*");
          var i, o = 0,
            r = e.toLowerCase().match(R) || [];
          if (v(n))
            for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
      }

      function Ve(t, e, n, i) {
        var o = {},
          r = t === Be;

        function s(a) {
          var l;
          return o[a] = !0, k.each(t[a] || [], (function (t, a) {
            var c = a(e, n, i);
            return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
          })), l
        }
        return s(e.dataTypes[0]) || !o["*"] && s("*")
      }

      function ze(t, e) {
        var n, i, o = k.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && k.extend(!0, t, i), t
      }
      $e.href = Te.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Te.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Me,
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
            "text xml": k.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function (t, e) {
          return e ? ze(ze(t, k.ajaxSettings), e) : ze(k.ajaxSettings, t)
        },
        ajaxPrefilter: qe(Fe),
        ajaxTransport: qe(Be),
        ajax: function (t, e) {
          "object" == typeof t && (e = t, t = void 0), e = e || {};
          var i, o, r, s, a, l, c, u, d, f, h = k.ajaxSetup({}, e),
            p = h.context || h,
            g = h.context && (p.nodeType || p.jquery) ? k(p) : k.event,
            m = k.Deferred(),
            v = k.Callbacks("once memory"),
            y = h.statusCode || {},
            w = {},
            _ = {},
            x = "canceled",
            T = {
              readyState: 0,
              getResponseHeader: function (t) {
                var e;
                if (c) {
                  if (!s)
                    for (s = {}; e = Le.exec(r);) s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                  e = s[t.toLowerCase() + " "]
                }
                return null == e ? null : e.join(", ")
              },
              getAllResponseHeaders: function () {
                return c ? r : null
              },
              setRequestHeader: function (t, e) {
                return null == c && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, w[t] = e), this
              },
              overrideMimeType: function (t) {
                return null == c && (h.mimeType = t), this
              },
              statusCode: function (t) {
                var e;
                if (t)
                  if (c) T.always(t[T.status]);
                  else
                    for (e in t) y[e] = [y[e], t[e]];
                return this
              },
              abort: function (t) {
                var e = t || x;
                return i && i.abort(e), C(0, e), this
              }
            };
          if (m.promise(T), h.url = ((t || h.url || Te.href) + "").replace(Re, Te.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(R) || [""], null == h.crossDomain) {
            l = b.createElement("a");
            try {
              l.href = h.url, l.href = l.href, h.crossDomain = $e.protocol + "//" + $e.host != l.protocol + "//" + l.host
            } catch (t) {
              h.crossDomain = !0
            }
          }
          if (h.data && h.processData && "string" != typeof h.data && (h.data = k.param(h.data, h.traditional)), Ve(Fe, h, e, T), c) return T;
          for (d in (u = k.event && h.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !He.test(h.type), o = h.url.replace(Pe, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(je, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Se.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ie, "$1"), f = (Se.test(o) ? "&" : "?") + "_=" + Ce.guid++ + f), h.url = o + f), h.ifModified && (k.lastModified[o] && T.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && T.setRequestHeader("If-None-Match", k.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Me + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c)) return T.abort();
          if (x = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), i = Ve(Be, h, e, T)) {
            if (T.readyState = 1, u && g.trigger("ajaxSend", [T, h]), c) return T;
            h.async && h.timeout > 0 && (a = n.setTimeout((function () {
              T.abort("timeout")
            }), h.timeout));
            try {
              c = !1, i.send(w, C)
            } catch (t) {
              if (c) throw t;
              C(-1, t)
            }
          } else C(-1, "No Transport");

          function C(t, e, s, l) {
            var d, f, b, w, _, x = e;
            c || (c = !0, a && n.clearTimeout(a), i = void 0, r = l || "", T.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, s && (w = function (t, e, n) {
              for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
              if (i)
                for (o in a)
                  if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                  } if (l[0] in n) r = l[0];
              else {
                for (o in n) {
                  if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                  }
                  s || (s = o)
                }
                r = r || s
              }
              if (r) return r !== l[0] && l.unshift(r), n[r]
            }(h, T, s)), !d && k.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function () {}), w = function (t, e, n, i) {
              var o, r, s, a, l, c = {},
                u = t.dataTypes.slice();
              if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
              for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                  if ("*" === r) r = l;
                  else if ("*" !== l && l !== r) {
                if (!(s = c[l + " " + r] || c["* " + r]))
                  for (o in c)
                    if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                      !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                      break
                    } if (!0 !== s)
                  if (s && t.throws) e = s(e);
                  else try {
                    e = s(e)
                  } catch (t) {
                    return {
                      state: "parsererror",
                      error: s ? t : "No conversion from " + l + " to " + r
                    }
                  }
              }
              return {
                state: "success",
                data: e
              }
            }(h, w, T, d), d ? (h.ifModified && ((_ = T.getResponseHeader("Last-Modified")) && (k.lastModified[o] = _), (_ = T.getResponseHeader("etag")) && (k.etag[o] = _)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = w.state, f = w.data, d = !(b = w.error))) : (b = x, !t && x || (x = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || x) + "", d ? m.resolveWith(p, [f, x, T]) : m.rejectWith(p, [T, x, b]), T.statusCode(y), y = void 0, u && g.trigger(d ? "ajaxSuccess" : "ajaxError", [T, h, d ? f : b]), v.fireWith(p, [T, x]), u && (g.trigger("ajaxComplete", [T, h]), --k.active || k.event.trigger("ajaxStop")))
          }
          return T
        },
        getJSON: function (t, e, n) {
          return k.get(t, e, n, "json")
        },
        getScript: function (t, e) {
          return k.get(t, void 0, e, "script")
        }
      }), k.each(["get", "post"], (function (t, e) {
        k[e] = function (t, n, i, o) {
          return v(n) && (o = o || i, i = n, n = void 0), k.ajax(k.extend({
            url: t,
            type: e,
            dataType: o,
            data: n,
            success: i
          }, k.isPlainObject(t) && t))
        }
      })), k.ajaxPrefilter((function (t) {
        var e;
        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
      })), k._evalUrl = function (t, e, n) {
        return k.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function () {}
          },
          dataFilter: function (t) {
            k.globalEval(t, e, n)
          }
        })
      }, k.fn.extend({
        wrapAll: function (t) {
          var e;
          return this[0] && (v(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function () {
            for (var t = this; t.firstElementChild;) t = t.firstElementChild;
            return t
          })).append(this)), this
        },
        wrapInner: function (t) {
          return v(t) ? this.each((function (e) {
            k(this).wrapInner(t.call(this, e))
          })) : this.each((function () {
            var e = k(this),
              n = e.contents();
            n.length ? n.wrapAll(t) : e.append(t)
          }))
        },
        wrap: function (t) {
          var e = v(t);
          return this.each((function (n) {
            k(this).wrapAll(e ? t.call(this, n) : t)
          }))
        },
        unwrap: function (t) {
          return this.parent(t).not("body").each((function () {
            k(this).replaceWith(this.childNodes)
          })), this
        }
      }), k.expr.pseudos.hidden = function (t) {
        return !k.expr.pseudos.visible(t)
      }, k.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
      }, k.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest
        } catch (t) {}
      };
      var We = {
          0: 200,
          1223: 204
        },
        Ue = k.ajaxSettings.xhr();
      m.cors = !!Ue && "withCredentials" in Ue, m.ajax = Ue = !!Ue, k.ajaxTransport((function (t) {
        var e, i;
        if (m.cors || Ue && !t.crossDomain) return {
          send: function (o, r) {
            var s, a = t.xhr();
            if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
            e = function (t) {
              return function () {
                e && (e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                  binary: a.response
                } : {
                  text: a.responseText
                }, a.getAllResponseHeaders()))
              }
            }, a.onload = e(), i = a.onerror = a.ontimeout = e("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
              4 === a.readyState && n.setTimeout((function () {
                e && i()
              }))
            }, e = e("abort");
            try {
              a.send(t.hasContent && t.data || null)
            } catch (t) {
              if (e) throw t
            }
          },
          abort: function () {
            e && e()
          }
        }
      })), k.ajaxPrefilter((function (t) {
        t.crossDomain && (t.contents.script = !1)
      })), k.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function (t) {
            return k.globalEval(t), t
          }
        }
      }), k.ajaxPrefilter("script", (function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
      })), k.ajaxTransport("script", (function (t) {
        var e, n;
        if (t.crossDomain || t.scriptAttrs) return {
          send: function (i, o) {
            e = k("<script>").attr(t.scriptAttrs || {}).prop({
              charset: t.scriptCharset,
              src: t.url
            }).on("load error", n = function (t) {
              e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type)
            }), b.head.appendChild(e[0])
          },
          abort: function () {
            n && n()
          }
        }
      }));
      var Ge, Qe = [],
        Xe = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Qe.pop() || k.expando + "_" + Ce.guid++;
          return this[t] = !0, t
        }
      }), k.ajaxPrefilter("json jsonp", (function (t, e, i) {
        var o, r, s, a = !1 !== t.jsonp && (Xe.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xe.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Xe, "$1" + o) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
          return s || k.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = n[o], n[o] = function () {
          s = arguments
        }, i.always((function () {
          void 0 === r ? k(n).removeProp(o) : n[o] = r, t[o] && (t.jsonpCallback = e.jsonpCallback, Qe.push(o)), s && v(r) && r(s[0]), s = r = void 0
        })), "script"
      })), m.createHTMLDocument = ((Ge = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ge.childNodes.length), k.parseHTML = function (t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (m.createHTMLDocument ? ((i = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, e.head.appendChild(i)) : e = b), r = !n && [], (o = N.exec(t)) ? [e.createElement(o[1])] : (o = xt([t], e, r), r && r.length && k(r).remove(), k.merge([], o.childNodes)));
        var i, o, r
      }, k.fn.load = function (t, e, n) {
        var i, o, r, s = this,
          a = t.indexOf(" ");
        return a > -1 && (i = ye(t.slice(a)), t = t.slice(0, a)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && k.ajax({
          url: t,
          type: o || "GET",
          dataType: "html",
          data: e
        }).done((function (t) {
          r = arguments, s.html(i ? k("<div>").append(k.parseHTML(t)).find(i) : t)
        })).always(n && function (t, e) {
          s.each((function () {
            n.apply(this, r || [t.responseText, e, t])
          }))
        }), this
      }, k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, (function (e) {
          return t === e.elem
        })).length
      }, k.offset = {
        setOffset: function (t, e, n) {
          var i, o, r, s, a, l, c = k.css(t, "position"),
            u = k(t),
            d = {};
          "static" === c && (t.style.position = "relative"), a = u.offset(), r = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), v(e) && (e = e.call(t, n, k.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d))
        }
      }, k.fn.extend({
        offset: function (t) {
          if (arguments.length) return void 0 === t ? this : this.each((function (e) {
            k.offset.setOffset(this, t, e)
          }));
          var e, n, i = this[0];
          return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
            top: e.top + n.pageYOffset,
            left: e.left + n.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0
        },
        position: function () {
          if (this[0]) {
            var t, e, n, i = this[0],
              o = {
                top: 0,
                left: 0
              };
            if ("fixed" === k.css(i, "position")) e = i.getBoundingClientRect();
            else {
              for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
              t && t !== i && 1 === t.nodeType && ((o = k(t).offset()).top += k.css(t, "borderTopWidth", !0), o.left += k.css(t, "borderLeftWidth", !0))
            }
            return {
              top: e.top - o.top - k.css(i, "marginTop", !0),
              left: e.left - o.left - k.css(i, "marginLeft", !0)
            }
          }
        },
        offsetParent: function () {
          return this.map((function () {
            for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
            return t || rt
          }))
        }
      }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, (function (t, e) {
        var n = "pageYOffset" === e;
        k.fn[t] = function (i) {
          return z(this, (function (t, i, o) {
            var r;
            if (y(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o) return r ? r[e] : t[i];
            r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o
          }), t, i, arguments.length)
        }
      })), k.each(["top", "left"], (function (t, e) {
        k.cssHooks[e] = Ut(m.pixelPosition, (function (t, n) {
          if (n) return n = Wt(t, e), $t.test(n) ? k(t).position()[e] + "px" : n
        }))
      })), k.each({
        Height: "height",
        Width: "width"
      }, (function (t, e) {
        k.each({
          padding: "inner" + t,
          content: e,
          "": "outer" + t
        }, (function (n, i) {
          k.fn[i] = function (o, r) {
            var s = arguments.length && (n || "boolean" != typeof o),
              a = n || (!0 === o || !0 === r ? "margin" : "border");
            return z(this, (function (e, n, o) {
              var r;
              return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? k.css(e, n, a) : k.style(e, n, o, a)
            }), e, s ? o : void 0, s)
          }
        }))
      })), k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (t, e) {
        k.fn[e] = function (t) {
          return this.on(e, t)
        }
      })), k.fn.extend({
        bind: function (t, e, n) {
          return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
          return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
          return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        hover: function (t, e) {
          return this.mouseenter(t).mouseleave(e || t)
        }
      }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (t, e) {
        k.fn[e] = function (t, n) {
          return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
      }));
      var Ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      k.proxy = function (t, e) {
        var n, i, o;
        if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return i = a.call(arguments, 2), (o = function () {
          return t.apply(e || this, i.concat(a.call(arguments)))
        }).guid = t.guid = t.guid || k.guid++, o
      }, k.holdReady = function (t) {
        t ? k.readyWait++ : k.ready(!0)
      }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = v, k.isWindow = y, k.camelCase = Q, k.type = x, k.now = Date.now, k.isNumeric = function (t) {
        var e = k.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
      }, k.trim = function (t) {
        return null == t ? "" : (t + "").replace(Ke, "")
      }, void 0 === (i = function () {
        return k
      }.apply(e, [])) || (t.exports = i);
      var Ye = n.jQuery,
        Je = n.$;
      return k.noConflict = function (t) {
        return n.$ === k && (n.$ = Je), t && n.jQuery === k && (n.jQuery = Ye), k
      }, void 0 === o && (n.jQuery = n.$ = k), k
    }))
  },
  1: function (t, e, n) {},
  10: function (t, e, n) {
    "use strict";
    n(11)
  },
  11: function (t, e, n) {},
  12: function (t, e, n) {
    (function (e) {
      /**
       * bootstrap-table - An extended table to integration with some of the most widely used CSS frameworks. (Supports Bootstrap, Semantic UI, Bulma, Material Design, Foundation)
       *
       * @version v1.15.3
       * @homepage https://bootstrap-table.com
       * @author wenzhixin <wenzhixin2010@gmail.com> (http://wenzhixin.net.cn/)
       * @license MIT
       */
      t.exports = function (t) {
        "use strict";
        var n = String.prototype,
          i = Math.max,
          o = Math.min,
          r = Math.floor,
          s = Math.ceil;

        function a(t, e) {
          return t(e = {
            exports: {}
          }, e.exports), e.exports
        }

        function l(t) {
          return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          })(t)
        }

        function c(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function u(t, e) {
          for (var n, i = 0; i < e.length; i++)(n = e[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }

        function d(t, e, n) {
          return e && u(t.prototype, e), n && u(t, n), t
        }

        function f(t, e) {
          return function (t) {
            if (Array.isArray(t)) return t
          }(t) || function (t, e) {
            var n = [],
              i = !0,
              o = !1,
              r = void 0;
            try {
              for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
            } catch (t) {
              o = !0, r = t
            } finally {
              try {
                i || null == a.return || a.return()
              } finally {
                if (o) throw r
              }
            }
            return n
          }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }()
        }

        function h(t) {
          return function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
              return n
            }
          }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
          }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
          }()
        }
        t = t && t.hasOwnProperty("default") ? t.default : t;
        var p, g, m, v = "undefined" == typeof globalThis ? "undefined" == typeof window ? void 0 === e ? "undefined" == typeof self ? {} : self : e : window : globalThis,
          y = "object",
          b = function (t) {
            return t && t.Math == Math && t
          },
          w = b(typeof globalThis == y && globalThis) || b(typeof window == y && window) || b(typeof self == y && self) || b(typeof v == y && v) || Function("return this")(),
          _ = function (t) {
            try {
              return !!t()
            } catch (t) {
              return !0
            }
          },
          x = !_((function () {
            return 7 != Object.defineProperty({}, "a", {
              get: function () {
                return 7
              }
            }).a
          })),
          k = {}.propertyIsEnumerable,
          T = Object.getOwnPropertyDescriptor,
          C = {
            f: T && !k.call({
              1: 2
            }, 1) ? function (t) {
              var e = T(this, t);
              return !!e && e.enumerable
            } : k
          },
          S = function (t, e) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: e
            }
          },
          E = {}.toString,
          O = function (t) {
            return E.call(t).slice(8, -1)
          },
          A = "".split,
          N = _((function () {
            return !Object("z").propertyIsEnumerable(0)
          })) ? function (t) {
            return "String" == O(t) ? A.call(t, "") : Object(t)
          } : Object,
          D = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
          },
          j = function (t) {
            return N(D(t))
          },
          P = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
          },
          I = function (t, e) {
            if (!P(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !P(i = n.call(t))) return i;
            if ("function" == typeof (n = t.valueOf) && !P(i = n.call(t))) return i;
            if (!e && "function" == typeof (n = t.toString) && !P(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
          },
          L = {}.hasOwnProperty,
          H = function (t, e) {
            return L.call(t, e)
          },
          R = w.document,
          F = P(R) && P(R.createElement),
          B = function (t) {
            return F ? R.createElement(t) : {}
          },
          M = !x && !_((function () {
            return 7 != Object.defineProperty(B("div"), "a", {
              get: function () {
                return 7
              }
            }).a
          })),
          $ = Object.getOwnPropertyDescriptor,
          q = {
            f: x ? $ : function (t, e) {
              if (t = j(t), e = I(e, !0), M) try {
                return $(t, e)
              } catch (t) {}
              return H(t, e) ? S(!C.f.call(t, e), t[e]) : void 0
            }
          },
          V = function (t) {
            if (!P(t)) throw TypeError(t + " is not an object");
            return t
          },
          z = Object.defineProperty,
          W = {
            f: x ? z : function (t, e, n) {
              if (V(t), e = I(e, !0), V(n), M) try {
                return z(t, e, n)
              } catch (t) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
              return "value" in n && (t[e] = n.value), t
            }
          },
          U = x ? function (t, e, n) {
            return W.f(t, e, S(1, n))
          } : function (t, e, n) {
            return t[e] = n, t
          },
          G = function (t, e) {
            try {
              U(w, t, e)
            } catch (n) {
              w[t] = e
            }
            return e
          },
          Q = a((function (t) {
            var e = w["__core-js_shared__"] || G("__core-js_shared__", {});
            (t.exports = function (t, n) {
              return e[t] || (e[t] = void 0 === n ? {} : n)
            })("versions", []).push({
              version: "3.1.3",
              mode: "global",
              copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
            })
          })),
          X = Q("native-function-to-string", Function.toString),
          K = w.WeakMap,
          Y = "function" == typeof K && /native code/.test(X.call(K)),
          J = 0,
          Z = Math.random(),
          tt = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + (++J + Z).toString(36)
          },
          et = Q("keys"),
          nt = function (t) {
            return et[t] || (et[t] = tt(t))
          },
          it = {},
          ot = w.WeakMap;
        if (Y) {
          var rt = new ot,
            st = rt.get,
            at = rt.has,
            lt = rt.set;
          p = function (t, e) {
            return lt.call(rt, t, e), e
          }, g = function (t) {
            return st.call(rt, t) || {}
          }, m = function (t) {
            return at.call(rt, t)
          }
        } else {
          var ct = nt("state");
          it[ct] = !0, p = function (t, e) {
            return U(t, ct, e), e
          }, g = function (t) {
            return H(t, ct) ? t[ct] : {}
          }, m = function (t) {
            return H(t, ct)
          }
        }
        var ut = {
            set: p,
            get: g,
            has: m,
            enforce: function (t) {
              return m(t) ? g(t) : p(t, {})
            },
            getterFor: function (t) {
              return function (e) {
                var n;
                if (!P(e) || (n = g(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
              }
            }
          },
          dt = a((function (t) {
            var e = ut.get,
              n = ut.enforce,
              i = (X + "").split("toString");
            Q("inspectSource", (function (t) {
              return X.call(t)
            })), (t.exports = function (t, e, o, r) {
              var s = !!r && !!r.unsafe,
                a = !!r && !!r.enumerable,
                l = !!r && !!r.noTargetGet;
              return "function" == typeof o && ("string" == typeof e && !H(o, "name") && U(o, "name", e), n(o).source = i.join("string" == typeof e ? e : "")), t === w ? void(a ? t[e] = o : G(e, o)) : (s ? !l && t[e] && (a = !0) : delete t[e], void(a ? t[e] = o : U(t, e, o)))
            })(Function.prototype, "toString", (function () {
              return "function" == typeof this && e(this).source || X.call(this)
            }))
          })),
          ft = w,
          ht = function (t) {
            return "function" == typeof t ? t : void 0
          },
          pt = function (t, e) {
            return 2 > arguments.length ? ht(ft[t]) || ht(w[t]) : ft[t] && ft[t][e] || w[t] && w[t][e]
          },
          gt = function (t) {
            return isNaN(t = +t) ? 0 : (0 < t ? r : s)(t)
          },
          mt = function (t) {
            return 0 < t ? o(gt(t), 9007199254740991) : 0
          },
          vt = function (t, e) {
            var n = gt(t);
            return 0 > n ? i(n + e, 0) : o(n, e)
          },
          yt = function (t) {
            return function (e, n, i) {
              var o, r = j(e),
                s = mt(r.length),
                a = vt(i, s);
              if (t && n != n) {
                for (; s > a;)
                  if ((o = r[a++]) != o) return !0
              } else
                for (; s > a; a++)
                  if ((t || a in r) && r[a] === n) return t || a || 0;
              return !t && -1
            }
          },
          bt = {
            includes: yt(!0),
            indexOf: yt(!1)
          },
          wt = bt.indexOf,
          _t = function (t, e) {
            var n, i = j(t),
              o = 0,
              r = [];
            for (n in i) !H(it, n) && H(i, n) && r.push(n);
            for (; e.length > o;) H(i, n = e[o++]) && (~wt(r, n) || r.push(n));
            return r
          },
          xt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
          kt = xt.concat("length", "prototype"),
          Tt = {
            f: Object.getOwnPropertyNames || function (t) {
              return _t(t, kt)
            }
          },
          Ct = {
            f: Object.getOwnPropertySymbols
          },
          St = pt("Reflect", "ownKeys") || function (t) {
            var e = Tt.f(V(t)),
              n = Ct.f;
            return n ? e.concat(n(t)) : e
          },
          Et = function (t, e) {
            for (var n, i = St(e), o = W.f, r = q.f, s = 0; s < i.length; s++) n = i[s], H(t, n) || o(t, n, r(e, n))
          },
          Ot = /#|\.prototype\./,
          At = function (t, e) {
            var n = Dt[Nt(t)];
            return n == Pt || n != jt && ("function" == typeof e ? _(e) : !!e)
          },
          Nt = At.normalize = function (t) {
            return (t + "").replace(Ot, ".").toLowerCase()
          },
          Dt = At.data = {},
          jt = At.NATIVE = "N",
          Pt = At.POLYFILL = "P",
          It = At,
          Lt = q.f,
          Ht = function (t, e) {
            var n, i, o, r, s, a = t.target,
              l = t.global,
              c = t.stat;
            if (n = l ? w : c ? w[a] || G(a, {}) : (w[a] || {}).prototype)
              for (i in e) {
                if (r = e[i], o = t.noTargetGet ? (s = Lt(n, i)) && s.value : n[i], !It(l ? i : a + (c ? "." : "#") + i, t.forced) && void 0 !== o) {
                  if (typeof r == typeof o) continue;
                  Et(r, o)
                }(t.sham || o && o.sham) && U(r, "sham", !0), dt(n, i, r, t)
              }
          },
          Rt = !!Object.getOwnPropertySymbols && !_((function () {
            return !(Symbol() + "")
          })),
          Ft = Array.isArray || function (t) {
            return "Array" == O(t)
          },
          Bt = function (t) {
            return Object(D(t))
          },
          Mt = Object.keys || function (t) {
            return _t(t, xt)
          },
          $t = x ? Object.defineProperties : function (t, e) {
            V(t);
            for (var n, i = Mt(e), o = i.length, r = 0; o > r;) W.f(t, n = i[r++], e[n]);
            return t
          },
          qt = pt("document", "documentElement"),
          Vt = nt("IE_PROTO"),
          zt = "prototype",
          Wt = function () {},
          Ut = function () {
            var t, e = B("iframe"),
              n = xt.length;
            for (e.style.display = "none", qt.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Ut = t.F; n--;) delete Ut[zt][xt[n]];
            return Ut()
          },
          Gt = Object.create || function (t, e) {
            var n;
            return null === t ? n = Ut() : (Wt[zt] = V(t), n = new Wt, Wt[zt] = null, n[Vt] = t), void 0 === e ? n : $t(n, e)
          };
        it[Vt] = !0;
        var Qt = Tt.f,
          Xt = {}.toString,
          Kt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          Yt = {
            f: function (t) {
              return Kt && "[object Window]" == Xt.call(t) ? function (t) {
                try {
                  return Qt(t)
                } catch (t) {
                  return Kt.slice()
                }
              }(t) : Qt(j(t))
            }
          },
          Jt = w.Symbol,
          Zt = Q("wks"),
          te = function (t) {
            return Zt[t] || (Zt[t] = Rt && Jt[t] || (Rt ? Jt : tt)("Symbol." + t))
          },
          ee = {
            f: te
          },
          ne = W.f,
          ie = function (t) {
            var e = ft.Symbol || (ft.Symbol = {});
            H(e, t) || ne(e, t, {
              value: ee.f(t)
            })
          },
          oe = W.f,
          re = te("toStringTag"),
          se = function (t, e, n) {
            t && !H(t = n ? t : t.prototype, re) && oe(t, re, {
              configurable: !0,
              value: e
            })
          },
          ae = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function");
            return t
          },
          le = function (t, e, n) {
            return ae(t), void 0 === e ? t : 0 === n ? function () {
              return t.call(e)
            } : 1 === n ? function (n) {
              return t.call(e, n)
            } : 2 === n ? function (n, i) {
              return t.call(e, n, i)
            } : 3 === n ? function (n, i, o) {
              return t.call(e, n, i, o)
            } : function () {
              return t.apply(e, arguments)
            }
          },
          ce = te("species"),
          ue = function (t, e) {
            var n;
            return Ft(t) && ("function" != typeof (n = t.constructor) || n !== Array && !Ft(n.prototype) ? P(n) && null === (n = n[ce]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
          },
          de = [].push,
          fe = function (t) {
            var e = 1 == t,
              n = 4 == t,
              i = 6 == t;
            return function (o, r, s, a) {
              for (var l, c, u = Bt(o), d = N(u), f = le(r, s, 3), h = mt(d.length), p = 0, g = a || ue, m = e ? g(o, h) : 2 == t ? g(o, 0) : void 0; h > p; p++)
                if ((5 == t || i || p in d) && (c = f(l = d[p], p, u), t))
                  if (e) m[p] = c;
                  else if (c) switch (t) {
                case 3:
                  return !0;
                case 5:
                  return l;
                case 6:
                  return p;
                case 2:
                  de.call(m, l)
              } else if (n) return !1;
              return i ? -1 : 3 == t || n ? n : m
            }
          },
          he = {
            forEach: fe(0),
            map: fe(1),
            filter: fe(2),
            some: fe(3),
            every: fe(4),
            find: fe(5),
            findIndex: fe(6)
          },
          pe = he.forEach,
          ge = nt("hidden"),
          me = "Symbol",
          ve = "prototype",
          ye = te("toPrimitive"),
          be = ut.set,
          we = ut.getterFor(me),
          _e = Object[ve],
          xe = w.Symbol,
          ke = w.JSON,
          Te = ke && ke.stringify,
          Ce = q.f,
          Se = W.f,
          Ee = Yt.f,
          Oe = C.f,
          Ae = Q("symbols"),
          Ne = Q("op-symbols"),
          De = Q("string-to-symbol-registry"),
          je = Q("symbol-to-string-registry"),
          Pe = Q("wks"),
          Ie = w.QObject,
          Le = !Ie || !Ie[ve] || !Ie[ve].findChild,
          He = x && _((function () {
            return 7 != Gt(Se({}, "a", {
              get: function () {
                return Se(this, "a", {
                  value: 7
                }).a
              }
            })).a
          })) ? function (t, e, n) {
            var i = Ce(_e, e);
            i && delete _e[e], Se(t, e, n), i && t !== _e && Se(_e, e, i)
          } : Se,
          Re = function (t, e) {
            var n = Ae[t] = Gt(xe[ve]);
            return be(n, {
              type: me,
              tag: t,
              description: e
            }), x || (n.description = e), n
          },
          Fe = Rt && "symbol" == typeof xe.iterator ? function (t) {
            return "symbol" == typeof t
          } : function (t) {
            return Object(t) instanceof xe
          },
          Be = function (t, e, n) {
            t === _e && Be(Ne, e, n), V(t);
            var i = I(e, !0);
            return V(n), H(Ae, i) ? (n.enumerable ? (H(t, ge) && t[ge][i] && (t[ge][i] = !1), n = Gt(n, {
              enumerable: S(0, !1)
            })) : (!H(t, ge) && Se(t, ge, S(1, {})), t[ge][i] = !0), He(t, i, n)) : Se(t, i, n)
          },
          Me = function (t, e) {
            V(t);
            var n = j(e),
              i = Mt(n).concat(ze(n));
            return pe(i, (function (e) {
              (!x || $e.call(n, e)) && Be(t, e, n[e])
            })), t
          },
          $e = function (t) {
            var e = I(t, !0),
              n = Oe.call(this, e);
            return (this !== _e || !H(Ae, e) || H(Ne, e)) && (!(n || !H(this, e) || !H(Ae, e) || H(this, ge) && this[ge][e]) || n)
          },
          qe = function (t, e) {
            var n = j(t),
              i = I(e, !0);
            if (n !== _e || !H(Ae, i) || H(Ne, i)) {
              var o = Ce(n, i);
              return o && H(Ae, i) && !(H(n, ge) && n[ge][i]) && (o.enumerable = !0), o
            }
          },
          Ve = function (t) {
            var e = Ee(j(t)),
              n = [];
            return pe(e, (function (t) {
              H(Ae, t) || H(it, t) || n.push(t)
            })), n
          },
          ze = function (t) {
            var e = t === _e,
              n = Ee(e ? Ne : j(t)),
              i = [];
            return pe(n, (function (t) {
              H(Ae, t) && (!e || H(_e, t)) && i.push(Ae[t])
            })), i
          };
        Rt || (dt((xe = function () {
          if (this instanceof xe) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? arguments[0] + "" : void 0,
            e = tt(t),
            n = function (t) {
              this === _e && n.call(Ne, t), H(this, ge) && H(this[ge], e) && (this[ge][e] = !1), He(this, e, S(1, t))
            };
          return x && Le && He(_e, e, {
            configurable: !0,
            set: n
          }), Re(e, t)
        })[ve], "toString", (function () {
          return we(this).tag
        })), C.f = $e, W.f = Be, q.f = qe, Tt.f = Yt.f = Ve, Ct.f = ze, x && (Se(xe[ve], "description", {
          configurable: !0,
          get: function () {
            return we(this).description
          }
        }), dt(_e, "propertyIsEnumerable", $e, {
          unsafe: !0
        })), ee.f = function (t) {
          return Re(te(t), t)
        }), Ht({
          global: !0,
          wrap: !0,
          forced: !Rt,
          sham: !Rt
        }, {
          Symbol: xe
        }), pe(Mt(Pe), (function (t) {
          ie(t)
        })), Ht({
          target: me,
          stat: !0,
          forced: !Rt
        }, {
          for: function (t) {
            var e = t + "";
            if (H(De, e)) return De[e];
            var n = xe(e);
            return De[e] = n, je[n] = e, n
          },
          keyFor: function (t) {
            if (!Fe(t)) throw TypeError(t + " is not a symbol");
            return H(je, t) ? je[t] : void 0
          },
          useSetter: function () {
            Le = !0
          },
          useSimple: function () {
            Le = !1
          }
        }), Ht({
          target: "Object",
          stat: !0,
          forced: !Rt,
          sham: !x
        }, {
          create: function (t, e) {
            return void 0 === e ? Gt(t) : Me(Gt(t), e)
          },
          defineProperty: Be,
          defineProperties: Me,
          getOwnPropertyDescriptor: qe
        }), Ht({
          target: "Object",
          stat: !0,
          forced: !Rt
        }, {
          getOwnPropertyNames: Ve,
          getOwnPropertySymbols: ze
        }), Ht({
          target: "Object",
          stat: !0,
          forced: _((function () {
            Ct.f(1)
          }))
        }, {
          getOwnPropertySymbols: function (t) {
            return Ct.f(Bt(t))
          }
        }), ke && Ht({
          target: "JSON",
          stat: !0,
          forced: !Rt || _((function () {
            var t = xe();
            return "[null]" != Te([t]) || "{}" != Te({
              a: t
            }) || "{}" != Te(Object(t))
          }))
        }, {
          stringify: function (t) {
            for (var e, n, i = [t], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (n = e = i[1], (P(e) || void 0 !== t) && !Fe(t)) return Ft(e) || (e = function (t, e) {
              if ("function" == typeof n && (e = n.call(this, t, e)), !Fe(e)) return e
            }), i[1] = e, Te.apply(ke, i)
          }
        }), xe[ve][ye] || U(xe[ve], ye, xe[ve].valueOf), se(xe, me), it[ge] = !0;
        var We = W.f,
          Ue = w.Symbol;
        if (x && "function" == typeof Ue && (!("description" in Ue.prototype) || void 0 !== Ue().description)) {
          var Ge = {},
            Qe = function () {
              var t = 1 > arguments.length || void 0 === arguments[0] ? void 0 : arguments[0] + "",
                e = this instanceof Qe ? new Ue(t) : void 0 === t ? Ue() : Ue(t);
              return "" === t && (Ge[e] = !0), e
            };
          Et(Qe, Ue);
          var Xe = Qe.prototype = Ue.prototype;
          Xe.constructor = Qe;
          var Ke = Xe.toString,
            Ye = "Symbol(test)" == Ue("test") + "",
            Je = /^Symbol\((.*)\)[^)]+$/;
          We(Xe, "description", {
            configurable: !0,
            get: function () {
              var t = P(this) ? this.valueOf() : this,
                e = Ke.call(t);
              if (H(Ge, t)) return "";
              var n = Ye ? e.slice(7, -1) : e.replace(Je, "$1");
              return "" === n ? void 0 : n
            }
          }), Ht({
            global: !0,
            forced: !0
          }, {
            Symbol: Qe
          })
        }
        ie("iterator");
        var Ze = function (t, e, n) {
            var i = I(e);
            i in t ? W.f(t, i, S(0, n)) : t[i] = n
          },
          tn = te("species"),
          en = function (t) {
            return !_((function () {
              var e = [];
              return (e.constructor = {})[tn] = function () {
                return {
                  foo: 1
                }
              }, 1 !== e[t](Boolean).foo
            }))
          },
          nn = te("isConcatSpreadable"),
          on = 9007199254740991,
          rn = "Maximum allowed index exceeded",
          sn = !_((function () {
            var t = [];
            return t[nn] = !1, t.concat()[0] !== t
          })),
          an = en("concat"),
          ln = function (t) {
            if (!P(t)) return !1;
            var e = t[nn];
            return void 0 === e ? Ft(t) : !!e
          };
        Ht({
          target: "Array",
          proto: !0,
          forced: !sn || !an
        }, {
          concat: function () {
            var t, e, n, i, o, r = Bt(this),
              s = ue(r, 0),
              a = 0;
            for (t = -1, n = arguments.length; t < n; t++)
              if (ln(o = -1 === t ? r : arguments[t])) {
                if (a + (i = mt(o.length)) > on) throw TypeError(rn);
                for (e = 0; e < i; e++, a++) e in o && Ze(s, a, o[e])
              } else {
                if (a >= on) throw TypeError(rn);
                Ze(s, a++, o)
              } return s.length = a, s
          }
        });
        var cn = he.filter;
        Ht({
          target: "Array",
          proto: !0,
          forced: !en("filter")
        }, {
          filter: function (t) {
            return cn(this, t, 1 < arguments.length ? arguments[1] : void 0)
          }
        });
        var un = te("unscopables"),
          dn = Array.prototype;
        null == dn[un] && U(dn, un, Gt(null));
        var fn = function (t) {
            dn[un][t] = !0
          },
          hn = he.find,
          pn = "find",
          gn = !0;
        pn in [] && [, ][pn]((function () {
          gn = !1
        })), Ht({
          target: "Array",
          proto: !0,
          forced: gn
        }, {
          find: function (t) {
            return hn(this, t, 1 < arguments.length ? arguments[1] : void 0)
          }
        }), fn(pn);
        var mn = he.findIndex,
          vn = "findIndex",
          yn = !0;
        vn in [] && [, ][vn]((function () {
          yn = !1
        })), Ht({
          target: "Array",
          proto: !0,
          forced: yn
        }, {
          findIndex: function (t) {
            return mn(this, t, 1 < arguments.length ? arguments[1] : void 0)
          }
        }), fn(vn);
        var bn = bt.includes;
        Ht({
          target: "Array",
          proto: !0
        }, {
          includes: function (t) {
            return bn(this, t, 1 < arguments.length ? arguments[1] : void 0)
          }
        }), fn("includes");
        var wn = function (t, e) {
            var n = [][t];
            return !n || !_((function () {
              n.call(null, e || function () {
                throw 1
              }, 1)
            }))
          },
          _n = bt.indexOf,
          xn = [].indexOf,
          kn = !!xn && 0 > 1 / [1].indexOf(1, -0),
          Tn = wn("indexOf");
        Ht({
          target: "Array",
          proto: !0,
          forced: kn || Tn
        }, {
          indexOf: function (t) {
            return kn ? xn.apply(this, arguments) || 0 : _n(this, t, 1 < arguments.length ? arguments[1] : void 0)
          }
        });
        var Cn, Sn, En, On = !_((function () {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
          })),
          An = nt("IE_PROTO"),
          Nn = Object.prototype,
          Dn = On ? Object.getPrototypeOf : function (t) {
            return t = Bt(t), H(t, An) ? t[An] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Nn : null
          },
          jn = te("iterator"),
          Pn = !1;
        [].keys && ("next" in (En = [].keys()) ? (Sn = Dn(Dn(En))) !== Object.prototype && (Cn = Sn) : Pn = !0), null == Cn && (Cn = {}), H(Cn, jn) || U(Cn, jn, (function () {
          return this
        }));
        var In = {
            IteratorPrototype: Cn,
            BUGGY_SAFARI_ITERATORS: Pn
          },
          Ln = In.IteratorPrototype,
          Hn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function (n, i) {
              return V(n),
                function (t) {
                  if (!P(t) && null !== t) throw TypeError("Can't set " + t + " as a prototype")
                }(i), e ? t.call(n, i) : n.__proto__ = i, n
            }
          }() : void 0),
          Rn = In.IteratorPrototype,
          Fn = In.BUGGY_SAFARI_ITERATORS,
          Bn = te("iterator"),
          Mn = "values",
          $n = "entries",
          qn = function () {
            return this
          },
          Vn = function (t, e, n, i, o, r, s) {
            ! function (t, e, n) {
              t.prototype = Gt(Ln, {
                next: S(1, n)
              }), se(t, e + " Iterator", !1)
            }(n, e, i);
            var a, l, c, u = function (t) {
                return t === o && p ? p : !Fn && t in f ? f[t] : "keys" === t || t === Mn || t === $n ? function () {
                  return new n(this, t)
                } : function () {
                  return new n(this)
                }
              },
              d = !1,
              f = t.prototype,
              h = f[Bn] || f["@@iterator"] || o && f[o],
              p = !Fn && h || u(o),
              g = "Array" == e && f.entries || h;
            if (g && (a = Dn(g.call(new t)), Rn !== Object.prototype && a.next && (Dn(a) !== Rn && (Hn ? Hn(a, Rn) : "function" != typeof a[Bn] && U(a, Bn, qn)), se(a, e + " Iterator", !0))), o == Mn && h && h.name !== Mn && (d = !0, p = function () {
                return h.call(this)
              }), f[Bn] !== p && U(f, Bn, p), o)
              if (l = {
                  values: u(Mn),
                  keys: r ? p : u("keys"),
                  entries: u($n)
                }, s)
                for (c in l)(Fn || d || !(c in f)) && dt(f, c, l[c]);
              else Ht({
                target: e,
                proto: !0,
                forced: Fn || d
              }, l);
            return l
          },
          zn = "Array Iterator",
          Wn = ut.set,
          Un = ut.getterFor(zn),
          Gn = Vn(Array, "Array", (function (t, e) {
            Wn(this, {
              type: zn,
              target: j(t),
              index: 0,
              kind: e
            })
          }), (function () {
            var t = Un(this),
              e = t.target,
              n = t.kind,
              i = t.index++;
            return !e || i >= e.length ? (t.target = void 0, {
              value: void 0,
              done: !0
            }) : "keys" == n ? {
              value: i,
              done: !1
            } : "values" == n ? {
              value: e[i],
              done: !1
            } : {
              value: [i, e[i]],
              done: !1
            }
          }), "values");
        fn("keys"), fn("values"), fn("entries");
        var Qn = [].join,
          Xn = N != Object,
          Kn = wn("join", ",");
        Ht({
          target: "Array",
          proto: !0,
          forced: Xn || Kn
        }, {
          join: function (t) {
            return Qn.call(j(this), void 0 === t ? "," : t)
          }
        });
        var Yn = te("species"),
          Jn = [].slice;
        Ht({
          target: "Array",
          proto: !0,
          forced: !en("slice")
        }, {
          slice: function (t, e) {
            var n, o, r, s = j(this),
              a = mt(s.length),
              l = vt(t, a),
              c = vt(void 0 === e ? a : e, a);
            if (Ft(s) && ("function" != typeof (n = s.constructor) || n !== Array && !Ft(n.prototype) ? P(n) && null === (n = n[Yn]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return Jn.call(s, l, c);
            for (o = new(void 0 === n ? Array : n)(i(c - l, 0)), r = 0; l < c; l++, r++) l in s && Ze(o, r, s[l]);
            return o.length = r, o
          }
        });
        var Zn = [].sort,
          ti = [1, 2, 3],
          ei = _((function () {
            ti.sort(void 0)
          })),
          ni = _((function () {
            ti.sort(null)
          })),
          ii = wn("sort");
        Ht({
          target: "Array",
          proto: !0,
          forced: ei || !ni || ii
        }, {
          sort: function (t) {
            return void 0 === t ? Zn.call(Bt(this)) : Zn.call(Bt(this), ae(t))
          }
        }), Ht({
          target: "Array",
          proto: !0,
          forced: !en("splice")
        }, {
          splice: function (t, e) {
            var n, r, s, a, l, c, u = Bt(this),
              d = mt(u.length),
              f = vt(t, d),
              h = arguments.length;
            if (0 === h ? n = r = 0 : 1 === h ? (n = 0, r = d - f) : (n = h - 2, r = o(i(gt(e), 0), d - f)), d + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (s = ue(u, r), a = 0; a < r; a++)(l = f + a) in u && Ze(s, a, u[l]);
            if (s.length = r, n < r) {
              for (a = f; a < d - r; a++) c = a + n, (l = a + r) in u ? u[c] = u[l] : delete u[c];
              for (a = d; a > d - r + n; a--) delete u[a - 1]
            } else if (n > r)
              for (a = d - r; a > f; a--) c = a + n - 1, (l = a + r - 1) in u ? u[c] = u[l] : delete u[c];
            for (a = 0; a < n; a++) u[a + f] = arguments[a + 2];
            return u.length = d - r + n, s
          }
        });
        var oi = function (t, e, n) {
            var i, o;
            return Hn && "function" == typeof (i = e.constructor) && i !== n && P(o = i.prototype) && o !== n.prototype && Hn(t, o), t
          },
          ri = "\t\n\v\f\r                　\u2028\u2029\ufeff",
          si = "[" + ri + "]",
          ai = RegExp("^" + si + si + "*"),
          li = RegExp(si + si + "*$"),
          ci = function (t) {
            return function (e) {
              var n = D(e) + "";
              return 1 & t && (n = n.replace(ai, "")), 2 & t && (n = n.replace(li, "")), n
            }
          },
          ui = {
            start: ci(1),
            end: ci(2),
            trim: ci(3)
          },
          di = Tt.f,
          fi = q.f,
          hi = W.f,
          pi = ui.trim,
          gi = "Number",
          mi = w[gi],
          vi = mi.prototype,
          yi = O(Gt(vi)) == gi,
          bi = function (t) {
            var e, n, i, o, r, s, a, l, c = I(t, !1);
            if ("string" == typeof c && 2 < c.length)
              if (43 === (e = (c = pi(c)).charCodeAt(0)) || 45 === e) {
                if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
              } else if (48 === e) {
              switch (c.charCodeAt(1)) {
                case 66:
                case 98:
                  i = 2, o = 49;
                  break;
                case 79:
                case 111:
                  i = 8, o = 55;
                  break;
                default:
                  return +c
              }
              for (s = (r = c.slice(2)).length, a = 0; a < s; a++)
                if (48 > (l = r.charCodeAt(a)) || l > o) return NaN;
              return parseInt(r, i)
            }
            return +c
          };
        if (It(gi, !mi(" 0o1") || !mi("0b1") || mi("+0x1"))) {
          for (var wi, _i = function (t) {
              var e = 1 > arguments.length ? 0 : t,
                n = this;
              return n instanceof _i && (yi ? _((function () {
                vi.valueOf.call(n)
              })) : O(n) != gi) ? oi(new mi(bi(e)), n, _i) : bi(e)
            }, xi = x ? di(mi) : ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY", "EPSILON", "isFinite", "isInteger", "isNaN", "isSafeInteger", "MAX_SAFE_INTEGER", "MIN_SAFE_INTEGER", "parseFloat", "parseInt", "isInteger"], ki = 0; xi.length > ki; ki++) H(mi, wi = xi[ki]) && !H(_i, wi) && hi(_i, wi, fi(mi, wi));
          _i.prototype = vi, vi.constructor = _i, dt(w, gi, _i)
        }
        var Ti = Object.assign,
          Ci = !Ti || _((function () {
            var t = {},
              e = {},
              n = Symbol(),
              i = "abcdefghijklmnopqrst";
            return t[n] = 7, i.split("").forEach((function (t) {
              e[t] = t
            })), 7 != Ti({}, t)[n] || Mt(Ti({}, e)).join("") != i
          })) ? function (t) {
            for (var e = Bt(t), n = arguments.length, i = 1, o = Ct.f, r = C.f; n > i;)
              for (var s, a = N(arguments[i++]), l = o ? Mt(a).concat(o(a)) : Mt(a), c = l.length, u = 0; c > u;) s = l[u++], (!x || r.call(a, s)) && (e[s] = a[s]);
            return e
          } : Ti;
        Ht({
          target: "Object",
          stat: !0,
          forced: Object.assign !== Ci
        }, {
          assign: Ci
        });
        var Si = C.f,
          Ei = function (t) {
            return function (e) {
              for (var n, i = j(e), o = Mt(i), r = o.length, s = 0, a = []; r > s;) n = o[s++], (!x || Si.call(i, n)) && a.push(t ? [n, i[n]] : i[n]);
              return a
            }
          },
          Oi = [Ei(!0), Ei(!1)][0];
        Ht({
          target: "Object",
          stat: !0
        }, {
          entries: function (t) {
            return Oi(t)
          }
        });
        var Ai = te("toStringTag"),
          Ni = "Arguments" == O(function () {
            return arguments
          }());
        ({})[te("toStringTag")] = "z";
        var Di = function () {
            return "[object " + function (t) {
              var e, n, i;
              return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                  return t[e]
                } catch (t) {}
              }(e = Object(t), Ai)) ? n : Ni ? O(e) : "Object" == (i = O(e)) && "function" == typeof e.callee ? "Arguments" : i
            }(this) + "]"
          },
          ji = Object.prototype;
        Di !== ji.toString && dt(ji, "toString", Di, {
          unsafe: !0
        });
        var Pi = ui.trim,
          Ii = w.parseFloat,
          Li = 1 / Ii(ri + "-0") != -1 / 0 ? function (t) {
            var e = Pi(t + ""),
              n = Ii(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n
          } : Ii;
        Ht({
          global: !0,
          forced: parseFloat != Li
        }, {
          parseFloat: Li
        });
        var Hi = ui.trim,
          Ri = w.parseInt,
          Fi = /^[+-]?0[Xx]/,
          Bi = 8 !== Ri(ri + "08") || 22 !== Ri(ri + "0x16") ? function (t, e) {
            var n = Hi(t + "");
            return Ri(n, e >>> 0 || (Fi.test(n) ? 16 : 10))
          } : Ri;
        Ht({
          global: !0,
          forced: parseInt != Bi
        }, {
          parseInt: Bi
        });
        var Mi = function () {
            var t = V(this),
              e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
          },
          $i = "toString",
          qi = RegExp.prototype,
          Vi = qi[$i],
          zi = _((function () {
            return "/a/b" != Vi.call({
              source: "a",
              flags: "b"
            })
          })),
          Wi = Vi.name != $i;
        (zi || Wi) && dt(RegExp.prototype, $i, (function () {
          var t = V(this),
            e = t.source + "",
            n = t.flags;
          return "/" + e + "/" + (void 0 === n && t instanceof RegExp && !("flags" in qi) ? Mi.call(t) : n)
        }), {
          unsafe: !0
        });
        var Ui = te("match"),
          Gi = function (t) {
            var e;
            return P(t) && (void 0 === (e = t[Ui]) ? "RegExp" == O(t) : !!e)
          },
          Qi = function (t) {
            if (Gi(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
          },
          Xi = te("match");
        Ht({
          target: "String",
          proto: !0,
          forced: ! function (t) {
            var e = /./;
            try {
              "/./" [t](e)
            } catch (n) {
              try {
                return e[Xi] = !1, "/./" [t](e)
              } catch (t) {}
            }
            return !1
          }("includes")
        }, {
          includes: function (t) {
            return !!~(D(this) + "").indexOf(Qi(t), 1 < arguments.length ? arguments[1] : void 0)
          }
        });
        var Ki = function (t) {
            return function (e, n) {
              var i, o, r = D(e) + "",
                s = gt(n),
                a = r.length;
              return 0 > s || s >= a ? t ? "" : void 0 : 55296 > (i = r.charCodeAt(s)) || 56319 < i || s + 1 === a || 56320 > (o = r.charCodeAt(s + 1)) || 57343 < o ? t ? r.charAt(s) : i : t ? r.slice(s, s + 2) : o - 56320 + (i - 55296 << 10) + 65536
            }
          },
          Yi = {
            codeAt: Ki(!1),
            charAt: Ki(!0)
          },
          Ji = Yi.charAt,
          Zi = "String Iterator",
          to = ut.set,
          eo = ut.getterFor(Zi);
        Vn(String, "String", (function (t) {
          to(this, {
            type: Zi,
            string: t + "",
            index: 0
          })
        }), (function () {
          var t, e = eo(this),
            n = e.string,
            i = e.index;
          return i >= n.length ? {
            value: void 0,
            done: !0
          } : (t = Ji(n, i), e.index += t.length, {
            value: t,
            done: !1
          })
        }));
        var no = RegExp.prototype.exec,
          io = n.replace,
          oo = no,
          ro = function () {
            var t = /a/,
              e = /b*/g;
            return no.call(t, "a"), no.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
          }(),
          so = void 0 !== /()??/.exec("")[1];
        (ro || so) && (oo = function (t) {
          var e, n, i, o, r = this;
          return so && (n = new RegExp("^" + r.source + "$(?!\\s)", Mi.call(r))), ro && (e = r.lastIndex), i = no.call(r, t), ro && i && (r.lastIndex = r.global ? i.index + i[0].length : e), so && i && 1 < i.length && io.call(i[0], n, (function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (i[o] = void 0)
          })), i
        });
        var ao = oo,
          lo = te("species"),
          co = !_((function () {
            var t = /./;
            return t.exec = function () {
              var t = [];
              return t.groups = {
                a: "7"
              }, t
            }, "7" !== "".replace(t, "$<a>")
          })),
          uo = !_((function () {
            var t = /(?:)/,
              e = t.exec;
            t.exec = function () {
              return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
          })),
          fo = function (t, e, n, i) {
            var o = te(t),
              r = !_((function () {
                var e = {};
                return e[o] = function () {
                  return 7
                }, 7 != "" [t](e)
              })),
              s = r && !_((function () {
                var e = !1,
                  n = /a/;
                return n.exec = function () {
                  return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[lo] = function () {
                  return n
                }), n[o](""), !e
              }));
            if (!r || !s || "replace" === t && !co || "split" === t && !uo) {
              var a = /./ [o],
                l = n(o, "" [t], (function (t, e, n, i, o) {
                  return e.exec === ao ? r && !o ? {
                    done: !0,
                    value: a.call(e, n, i)
                  } : {
                    done: !0,
                    value: t.call(n, e, i)
                  } : {
                    done: !1
                  }
                })),
                c = l[0],
                u = l[1];
              dt(String.prototype, t, c), dt(RegExp.prototype, o, 2 == e ? function (t, e) {
                return u.call(t, this, e)
              } : function (t) {
                return u.call(t, this)
              }), i && U(RegExp.prototype[o], "sham", !0)
            }
          },
          ho = Yi.charAt,
          po = function (t, e, n) {
            return e + (n ? ho(t, e).length : 1)
          },
          go = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
              var i = n.call(t, e);
              if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
              return i
            }
            if ("RegExp" !== O(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return ao.call(t, e)
          },
          mo = /\$([$&'`]|\d\d?|<[^>]*>)/g,
          vo = /\$([$&'`]|\d\d?)/g,
          yo = function (t) {
            return void 0 === t ? t : t + ""
          };
        fo("replace", 2, (function (t, e, n) {
          function s(t, n, i, o, s, a) {
            var l = i + t.length,
              c = o.length,
              u = vo;
            return void 0 !== s && (s = Bt(s), u = mo), e.call(a, u, (function (e, a) {
              var u;
              switch (a.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return t;
                case "`":
                  return n.slice(0, i);
                case "'":
                  return n.slice(l);
                case "<":
                  u = s[a.slice(1, -1)];
                  break;
                default:
                  var d = +a;
                  if (0 == d) return e;
                  if (d > c) {
                    var f = r(d / 10);
                    return 0 === f ? e : f <= c ? void 0 === o[f - 1] ? a.charAt(1) : o[f - 1] + a.charAt(1) : e
                  }
                  u = o[d - 1]
              }
              return void 0 === u ? "" : u
            }))
          }
          return [function (n, i) {
            var o = D(this),
              r = null == n ? void 0 : n[t];
            return void 0 === r ? e.call(o + "", n, i) : r.call(n, o, i)
          }, function (t, r) {
            var a = n(e, t, this, r);
            if (a.done) return a.value;
            var l = V(t),
              c = this + "",
              u = "function" == typeof r;
            u || (r += "");
            var d = l.global;
            if (d) {
              var f = l.unicode;
              l.lastIndex = 0
            }
            for (var h, p = []; null !== (h = go(l, c)) && (p.push(h), d);) "" == h[0] + "" && (l.lastIndex = po(c, mt(l.lastIndex), f));
            for (var g = "", m = 0, v = 0; v < p.length; v++) {
              for (var y = (h = p[v])[0] + "", b = i(o(gt(h.index), c.length), 0), w = [], _ = 1; _ < h.length; _++) w.push(yo(h[_]));
              var x = h.groups;
              if (u) {
                var k = [y].concat(w, b, c);
                void 0 !== x && k.push(x);
                var T = r.apply(void 0, k) + ""
              } else T = s(y, c, b, w, x, r);
              b >= m && (g += c.slice(m, b) + T, m = b + y.length)
            }
            return g + c.slice(m)
          }]
        }));
        var bo = Object.is || function (t, e) {
          return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        };
        fo("search", 1, (function (t, e, n) {
          return [function (e) {
            var n = D(this),
              i = null == e ? void 0 : e[t];
            return void 0 === i ? new RegExp(e)[t](n + "") : i.call(e, n)
          }, function (t) {
            var i = n(e, t, this);
            if (i.done) return i.value;
            var o = V(t),
              r = this + "",
              s = o.lastIndex;
            bo(s, 0) || (o.lastIndex = 0);
            var a = go(o, r);
            return bo(o.lastIndex, s) || (o.lastIndex = s), null === a ? -1 : a.index
          }]
        }));
        var wo = te("species"),
          _o = [].push,
          xo = 4294967295,
          ko = !_((function () {
            return !RegExp(xo, "y")
          }));
        fo("split", 2, (function (t, e, n) {
          var i;
          return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function (t, n) {
            var i = D(this) + "",
              o = void 0 === n ? xo : n >>> 0;
            if (0 === o) return [];
            if (void 0 === t) return [i];
            if (!Gi(t)) return e.call(i, t, o);
            for (var r, s, a, l = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), u = 0, d = new RegExp(t.source, c + "g");
              (r = ao.call(d, i)) && !((s = d.lastIndex) > u && (l.push(i.slice(u, r.index)), 1 < r.length && r.index < i.length && _o.apply(l, r.slice(1)), a = r[0].length, u = s, l.length >= o));) d.lastIndex === r.index && d.lastIndex++;
            return u === i.length ? (a || !d.test("")) && l.push("") : l.push(i.slice(u)), l.length > o ? l.slice(0, o) : l
          } : function (t, n) {
            return void 0 === t && 0 === n ? [] : e.call(this, t, n)
          }, [function (e, n) {
            var o = D(this),
              r = null == e ? void 0 : e[t];
            return void 0 === r ? i.call(o + "", e, n) : r.call(e, o, n)
          }, function (t, r) {
            var s = n(i, t, this, r, i !== e);
            if (s.done) return s.value;
            var a = V(t),
              l = this + "",
              c = function (t, e) {
                var n, i = V(t).constructor;
                return void 0 === i || null == (n = V(i)[wo]) ? e : ae(n)
              }(a, RegExp),
              u = a.unicode,
              d = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (ko ? "y" : "g"),
              f = new c(ko ? a : "^(?:" + a.source + ")", d),
              h = void 0 === r ? xo : r >>> 0;
            if (0 === h) return [];
            if (0 === l.length) return null === go(f, l) ? [l] : [];
            for (var p = 0, g = 0, m = []; g < l.length;) {
              f.lastIndex = ko ? g : 0;
              var v, y = go(f, ko ? l : l.slice(g));
              if (null === y || (v = o(mt(f.lastIndex + (ko ? 0 : g)), l.length)) === p) g = po(l, g, u);
              else {
                if (m.push(l.slice(p, g)), m.length === h) return m;
                for (var b = 1; b <= y.length - 1; b++)
                  if (m.push(y[b]), m.length === h) return m;
                g = p = v
              }
            }
            return m.push(l.slice(p)), m
          }]
        }), !ko);
        var To = ui.trim;
        Ht({
          target: "String",
          proto: !0,
          forced: function (t) {
            return _((function () {
              return !!ri[t]() || "​᠎" != "​᠎" [t]() || ri[t].name !== t
            }))
          }("trim")
        }, {
          trim: function () {
            return To(this)
          }
        });
        var Co = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          },
          So = he.forEach,
          Eo = wn("forEach") ? function (t) {
            return So(this, t, 1 < arguments.length ? arguments[1] : void 0)
          } : [].forEach;
        for (var Oo in Co) {
          var Ao = w[Oo],
            No = Ao && Ao.prototype;
          if (No && No.forEach !== Eo) try {
            U(No, "forEach", Eo)
          } catch (a) {
            No.forEach = Eo
          }
        }
        var Do = te("iterator"),
          jo = te("toStringTag"),
          Po = Gn.values;
        for (var Io in Co) {
          var Lo = w[Io],
            Ho = Lo && Lo.prototype;
          if (Ho) {
            if (Ho[Do] !== Po) try {
              U(Ho, Do, Po)
            } catch (a) {
              Ho[Do] = Po
            }
            if (Ho[jo] || U(Ho, jo, Io), Co[Io])
              for (var Ro in Gn)
                if (Ho[Ro] !== Gn[Ro]) try {
                  U(Ho, Ro, Gn[Ro])
                } catch (a) {
                  Ho[Ro] = Gn[Ro]
                }
          }
        }
        var Fo = 4;
        try {
          var Bo = t.fn.dropdown.Constructor.VERSION;
          void 0 !== Bo && (Fo = parseInt(Bo, 10))
        } catch (t) {}
        var Mo = {
            3: {
              iconsPrefix: "glyphicon",
              icons: {
                paginationSwitchDown: "glyphicon-collapse-down icon-chevron-down",
                paginationSwitchUp: "glyphicon-collapse-up icon-chevron-up",
                refresh: "glyphicon-refresh icon-refresh",
                toggleOff: "glyphicon-list-alt icon-list-alt",
                toggleOn: "glyphicon-list-alt icon-list-alt",
                columns: "glyphicon-th icon-th",
                detailOpen: "glyphicon-plus icon-plus",
                detailClose: "glyphicon-minus icon-minus",
                fullscreen: "glyphicon-fullscreen",
                search: "glyphicon-search",
                clearSearch: "glyphicon-trash"
              },
              classes: {
                buttonsPrefix: "btn",
                buttons: "default",
                buttonsGroup: "btn-group",
                buttonsDropdown: "btn-group",
                pull: "pull",
                inputGroup: "input-group",
                input: "form-control",
                paginationDropdown: "btn-group dropdown",
                dropup: "dropup",
                dropdownActive: "active",
                paginationActive: "active",
                buttonActive: "active"
              },
              html: {
                toolbarDropdown: ['<ul class="dropdown-menu" role="menu">', "</ul>"],
                toolbarDropdownItem: '<li role="menuitem"><label>%s</label></li>',
                toolbarDropdownSeperator: '<li class="divider"></li>',
                pageDropdown: ['<ul class="dropdown-menu" role="menu">', "</ul>"],
                pageDropdownItem: '<li role="menuitem" class="%s"><a href="#">%s</a></li>',
                dropdownCaret: '<span class="caret"></span>',
                pagination: ['<ul class="pagination%s">', "</ul>"],
                paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
                icon: '<i class="%s %s"></i>',
                inputGroup: '<div class="input-group">%s<span class="input-group-btn">%s</span></div>',
                searchInput: '<input class="%s%s" type="text" placeholder="%s">',
                searchButton: '<button class="btn btn-default" type="button" name="search" title="%s">%s %s</button>',
                searchClearButton: '<button class="btn btn-default" type="button" name="clearSearch" title="%s">%s %s</button>'
              }
            },
            4: {
              iconsPrefix: "fa",
              icons: {
                paginationSwitchDown: "fa-caret-square-down",
                paginationSwitchUp: "fa-caret-square-up",
                refresh: "fa-sync",
                toggleOff: "fa-toggle-off",
                toggleOn: "fa-toggle-on",
                columns: "fa-th-list",
                detailOpen: "fa-plus",
                detailClose: "fa-minus",
                fullscreen: "fa-arrows-alt",
                search: "fa-search",
                clearSearch: "fa-trash"
              },
              classes: {
                buttonsPrefix: "btn",
                buttons: "secondary",
                buttonsGroup: "btn-group",
                buttonsDropdown: "btn-group",
                pull: "float",
                inputGroup: "btn-group",
                input: "form-control",
                paginationDropdown: "btn-group dropdown",
                dropup: "dropup",
                dropdownActive: "active",
                paginationActive: "active",
                buttonActive: "active"
              },
              html: {
                toolbarDropdown: ['<div class="dropdown-menu dropdown-menu-right">', "</div>"],
                toolbarDropdownItem: '<label class="dropdown-item">%s</label>',
                pageDropdown: ['<div class="dropdown-menu">', "</div>"],
                pageDropdownItem: '<a class="dropdown-item %s" href="#">%s</a>',
                toolbarDropdownSeperator: '<div class="dropdown-divider"></div>',
                dropdownCaret: '<span class="caret"></span>',
                pagination: ['<ul class="pagination%s">', "</ul>"],
                paginationItem: '<li class="page-item%s"><a class="page-link" aria-label="%s" href="javascript:void(0)">%s</a></li>',
                icon: '<i class="%s %s"></i>',
                inputGroup: '<div class="input-group">%s<div class="input-group-append">%s</div></div>',
                searchInput: '<input class="%s%s" type="text" placeholder="%s">',
                searchButton: '<button class="btn btn-secondary" type="button" name="search" title="%s">%s %s</button>',
                searchClearButton: '<button class="btn btn-secondary" type="button" name="clearSearch" title="%s">%s %s</button>'
              }
            }
          } [Fo],
          $o = {
            height: void 0,
            classes: "table table-bordered table-hover",
            theadClasses: "",
            rowStyle: function () {
              return {}
            },
            rowAttributes: function () {
              return {}
            },
            undefinedText: "-",
            locale: void 0,
            virtualScroll: !1,
            virtualScrollItemHeight: void 0,
            sortable: !0,
            sortClass: void 0,
            silentSort: !0,
            sortName: void 0,
            sortOrder: "asc",
            sortStable: !1,
            rememberOrder: !1,
            customSort: void 0,
            columns: [
              []
            ],
            data: [],
            url: void 0,
            method: "get",
            cache: !0,
            contentType: "application/json",
            dataType: "json",
            ajax: void 0,
            ajaxOptions: {},
            queryParams: function (t) {
              return t
            },
            queryParamsType: "limit",
            responseHandler: function (t) {
              return t
            },
            totalField: "total",
            totalNotFilteredField: "totalNotFiltered",
            dataField: "rows",
            pagination: !1,
            onlyInfoPagination: !1,
            showExtendedPagination: !1,
            paginationLoop: !0,
            sidePagination: "client",
            totalRows: 0,
            totalNotFiltered: 0,
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 25, 50, 100],
            paginationHAlign: "right",
            paginationVAlign: "bottom",
            paginationDetailHAlign: "left",
            paginationPreText: "&lsaquo;",
            paginationNextText: "&rsaquo;",
            paginationSuccessivelySize: 5,
            paginationPagesBySide: 1,
            paginationUseIntermediate: !1,
            search: !1,
            searchOnEnterKey: !1,
            strictSearch: !1,
            visibleSearch: !1,
            showButtonIcons: !0,
            showButtonText: !1,
            showSearchButton: !1,
            showSearchClearButton: !1,
            trimOnSearch: !0,
            searchAlign: "right",
            searchTimeOut: 500,
            searchText: "",
            customSearch: void 0,
            showHeader: !0,
            showFooter: !1,
            footerStyle: function () {
              return {}
            },
            showColumns: !1,
            showColumnsToggleAll: !1,
            minimumCountColumns: 1,
            showPaginationSwitch: !1,
            showRefresh: !1,
            showToggle: !1,
            showFullscreen: !1,
            smartDisplay: !0,
            escape: !1,
            filterOptions: {
              filterAlgorithm: "and"
            },
            idField: void 0,
            selectItemName: "btSelectItem",
            clickToSelect: !1,
            ignoreClickToSelectOn: function (t) {
              var e = t.tagName;
              return ["A", "BUTTON"].includes(e)
            },
            singleSelect: !1,
            checkboxHeader: !0,
            maintainMetaData: !1,
            multipleSelectRow: !1,
            uniqueId: void 0,
            cardView: !1,
            detailView: !1,
            detailViewIcon: !0,
            detailViewByClick: !1,
            detailFormatter: function () {
              return ""
            },
            detailFilter: function () {
              return !0
            },
            toolbar: void 0,
            toolbarAlign: "left",
            buttonsToolbar: void 0,
            buttonsAlign: "right",
            buttonsPrefix: Mo.classes.buttonsPrefix,
            buttonsClass: Mo.classes.buttons,
            icons: Mo.icons,
            html: Mo.html,
            iconSize: void 0,
            iconsPrefix: Mo.iconsPrefix,
            onAll: function () {
              return !1
            },
            onClickCell: function () {
              return !1
            },
            onDblClickCell: function () {
              return !1
            },
            onClickRow: function () {
              return !1
            },
            onDblClickRow: function () {
              return !1
            },
            onSort: function () {
              return !1
            },
            onCheck: function () {
              return !1
            },
            onUncheck: function () {
              return !1
            },
            onCheckAll: function () {
              return !1
            },
            onUncheckAll: function () {
              return !1
            },
            onCheckSome: function () {
              return !1
            },
            onUncheckSome: function () {
              return !1
            },
            onLoadSuccess: function () {
              return !1
            },
            onLoadError: function () {
              return !1
            },
            onColumnSwitch: function () {
              return !1
            },
            onPageChange: function () {
              return !1
            },
            onSearch: function () {
              return !1
            },
            onToggle: function () {
              return !1
            },
            onPreBody: function () {
              return !1
            },
            onPostBody: function () {
              return !1
            },
            onPostHeader: function () {
              return !1
            },
            onPostFooter: function () {
              return !1
            },
            onExpandRow: function () {
              return !1
            },
            onCollapseRow: function () {
              return !1
            },
            onRefreshOptions: function () {
              return !1
            },
            onRefresh: function () {
              return !1
            },
            onResetView: function () {
              return !1
            },
            onScrollBody: function () {
              return !1
            }
          },
          qo = {
            formatLoadingMessage: function () {
              return "Loading, please wait"
            },
            formatRecordsPerPage: function (t) {
              return "".concat(t, " rows per page")
            },
            formatShowingRows: function (t, e, n, i) {
              return void 0 !== i && 0 < i && i > n ? "Showing ".concat(t, " to ").concat(e, " of ").concat(n, " rows (filtered from ").concat(i, " total rows)") : "Showing ".concat(t, " to ").concat(e, " of ").concat(n, " rows")
            },
            formatSRPaginationPreText: function () {
              return "previous page"
            },
            formatSRPaginationPageText: function (t) {
              return "to page ".concat(t)
            },
            formatSRPaginationNextText: function () {
              return "next page"
            },
            formatDetailPagination: function (t) {
              return "Showing ".concat(t, " rows")
            },
            formatSearch: function () {
              return "Search"
            },
            formatClearSearch: function () {
              return "Clear Search"
            },
            formatNoMatches: function () {
              return "No matching records found"
            },
            formatPaginationSwitch: function () {
              return "Hide/Show pagination"
            },
            formatPaginationSwitchDown: function () {
              return "Show pagination"
            },
            formatPaginationSwitchUp: function () {
              return "Hide pagination"
            },
            formatRefresh: function () {
              return "Refresh"
            },
            formatToggle: function () {
              return "Toggle"
            },
            formatToggleOn: function () {
              return "Show card view"
            },
            formatToggleOff: function () {
              return "Hide card view"
            },
            formatColumns: function () {
              return "Columns"
            },
            formatColumnsToggleAll: function () {
              return "Toggle all"
            },
            formatFullscreen: function () {
              return "Fullscreen"
            },
            formatAllRows: function () {
              return "All"
            }
          };
        Object.assign($o, qo);
        var Vo = {
            VERSION: "1.15.3",
            THEME: "bootstrap".concat(Fo),
            CONSTANTS: Mo,
            DEFAULTS: $o,
            COLUMN_DEFAULTS: {
              field: void 0,
              title: void 0,
              titleTooltip: void 0,
              class: void 0,
              width: void 0,
              widthUnit: "px",
              rowspan: void 0,
              colspan: void 0,
              align: void 0,
              halign: void 0,
              falign: void 0,
              valign: void 0,
              cellStyle: void 0,
              radio: !1,
              checkbox: !1,
              checkboxEnabled: !0,
              clickToSelect: !0,
              showSelectTitle: !1,
              sortable: !1,
              sortName: void 0,
              order: "asc",
              sorter: void 0,
              visible: !0,
              switchable: !0,
              cardVisible: !0,
              searchable: !0,
              formatter: void 0,
              footerFormatter: void 0,
              detailFormatter: void 0,
              searchFormatter: !0,
              escape: !1,
              events: void 0
            },
            METHODS: ["getOptions", "refreshOptions", "getData", "getSelections", "getAllSelections", "load", "append", "prepend", "remove", "removeAll", "insertRow", "updateRow", "getRowByUniqueId", "updateByUniqueId", "removeByUniqueId", "updateCell", "updateCellByUniqueId", "showRow", "hideRow", "getHiddenRows", "showColumn", "hideColumn", "getVisibleColumns", "getHiddenColumns", "showAllColumns", "hideAllColumns", "mergeCells", "checkAll", "uncheckAll", "checkInvert", "check", "uncheck", "checkBy", "uncheckBy", "refresh", "destroy", "resetView", "resetWidth", "showLoading", "hideLoading", "togglePagination", "toggleFullscreen", "toggleView", "resetSearch", "filterBy", "scrollTo", "getScrollPosition", "selectPage", "prevPage", "nextPage", "toggleDetailView", "expandRow", "collapseRow", "expandAllRows", "collapseAllRows", "updateColumnTitle", "updateFormatText"],
            EVENTS: {
              "all.bs.table": "onAll",
              "click-row.bs.table": "onClickRow",
              "dbl-click-row.bs.table": "onDblClickRow",
              "click-cell.bs.table": "onClickCell",
              "dbl-click-cell.bs.table": "onDblClickCell",
              "sort.bs.table": "onSort",
              "check.bs.table": "onCheck",
              "uncheck.bs.table": "onUncheck",
              "check-all.bs.table": "onCheckAll",
              "uncheck-all.bs.table": "onUncheckAll",
              "check-some.bs.table": "onCheckSome",
              "uncheck-some.bs.table": "onUncheckSome",
              "load-success.bs.table": "onLoadSuccess",
              "load-error.bs.table": "onLoadError",
              "column-switch.bs.table": "onColumnSwitch",
              "page-change.bs.table": "onPageChange",
              "search.bs.table": "onSearch",
              "toggle.bs.table": "onToggle",
              "pre-body.bs.table": "onPreBody",
              "post-body.bs.table": "onPostBody",
              "post-header.bs.table": "onPostHeader",
              "post-footer.bs.table": "onPostFooter",
              "expand-row.bs.table": "onExpandRow",
              "collapse-row.bs.table": "onCollapseRow",
              "refresh-options.bs.table": "onRefreshOptions",
              "reset-view.bs.table": "onResetView",
              "refresh.bs.table": "onRefresh",
              "scroll-body.bs.table": "onScrollBody"
            },
            LOCALES: {
              en: qo,
              "en-US": qo
            }
          },
          zo = function (t, e, n, i, o, r, s, a) {
            for (var l, c = o, u = 0, d = !!s && le(s, a, 3); u < i;) {
              if (u in n) {
                if (l = d ? d(n[u], u, e) : n[u], 0 < r && Ft(l)) c = zo(t, e, l, mt(l.length), c, r - 1) - 1;
                else {
                  if (9007199254740991 <= c) throw TypeError("Exceed the acceptable array length");
                  t[c] = l
                }
                c++
              }
              u++
            }
            return c
          };
        Ht({
          target: "Array",
          proto: !0
        }, {
          flat: function () {
            var t = arguments.length ? arguments[0] : void 0,
              e = Bt(this),
              n = mt(e.length),
              i = ue(e, 0);
            return i.length = zo(i, e, e, n, 0, void 0 === t ? 1 : gt(t)), i
          }
        }), fn("flat");
        var Wo = _((function () {
          Mt(1)
        }));
        Ht({
          target: "Object",
          stat: !0,
          forced: Wo
        }, {
          keys: function (t) {
            return Mt(Bt(t))
          }
        });
        var Uo = {
            sprintf: function (t) {
              for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
              var o = !0,
                r = 0,
                s = t.replace(/%s/g, (function () {
                  var t = n[r++];
                  return void 0 === t ? (o = !1, "") : t
                }));
              return o ? s : ""
            },
            isEmptyObject: function () {
              var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
              return 0 === Object.entries(t).length && t.constructor === Object
            },
            isNumeric: function (t) {
              return !isNaN(parseFloat(t)) && isFinite(t)
            },
            getFieldTitle: function (t, e) {
              var n = !0,
                i = !1,
                o = void 0;
              try {
                for (var r, s, a = t[Symbol.iterator](); !(n = (r = a.next()).done); n = !0)
                  if ((s = r.value).field === e) return s.title
              } catch (t) {
                i = !0, o = t
              } finally {
                try {
                  n || null == a.return || a.return()
                } finally {
                  if (i) throw o
                }
              }
              return ""
            },
            setFieldIndex: function (t) {
              var e = 0,
                n = [],
                i = !0,
                o = !1,
                r = void 0;
              try {
                for (var s, a = t[0][Symbol.iterator](); !(i = (s = a.next()).done); i = !0) e += s.value.colspan || 1
              } catch (t) {
                o = !0, r = t
              } finally {
                try {
                  i || null == a.return || a.return()
                } finally {
                  if (o) throw r
                }
              }
              for (var l = 0; l < t.length; l++) {
                n[l] = [];
                for (var c = 0; c < e; c++) n[l][c] = !1
              }
              for (var u = 0; u < t.length; u++) {
                var d = !0,
                  f = !1,
                  h = void 0;
                try {
                  for (var p, g = t[u][Symbol.iterator](); !(d = (p = g.next()).done); d = !0) {
                    var m = p.value,
                      v = m.rowspan || 1,
                      y = m.colspan || 1,
                      b = n[u].indexOf(!1);
                    m.colspanIndex = b, 1 === y ? (m.fieldIndex = b, void 0 === m.field && (m.field = b)) : m.colspanGroup = m.colspan;
                    for (var w = 0; w < v; w++) n[u + w][b] = !0;
                    for (var _ = 0; _ < y; _++) n[u][b + _] = !0
                  }
                } catch (t) {
                  f = !0, h = t
                } finally {
                  try {
                    d || null == g.return || g.return()
                  } finally {
                    if (f) throw h
                  }
                }
              }
            },
            updateFieldGroup: function (t) {
              var e = t.flat(),
                n = !0,
                i = !1,
                o = void 0;
              try {
                for (var r, s = t[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                  var a = r.value,
                    l = !0,
                    c = !1,
                    u = void 0;
                  try {
                    for (var d, f, h = a[Symbol.iterator](); !(l = (d = h.next()).done); l = !0)
                      if (1 < (f = d.value).colspanGroup) {
                        for (var p = 0, g = function (t) {
                            e.find((function (e) {
                              return e.fieldIndex === t
                            })).visible && p++
                          }, m = f.colspanIndex; m < f.colspanIndex + f.colspanGroup; m++) g(m);
                        f.colspan = p, f.visible = 0 < p
                      }
                  } catch (t) {
                    c = !0, u = t
                  } finally {
                    try {
                      l || null == h.return || h.return()
                    } finally {
                      if (c) throw u
                    }
                  }
                }
              } catch (t) {
                i = !0, o = t
              } finally {
                try {
                  n || null == s.return || s.return()
                } finally {
                  if (i) throw o
                }
              }
            },
            getScrollBarWidth: function () {
              if (void 0 === this.cachedWidth) {
                var e = t("<div/>").addClass("fixed-table-scroll-inner"),
                  n = t("<div/>").addClass("fixed-table-scroll-outer");
                n.append(e), t("body").append(n);
                var i = e[0].offsetWidth;
                n.css("overflow", "scroll");
                var o = e[0].offsetWidth;
                i === o && (o = n[0].clientWidth), n.remove(), this.cachedWidth = i - o
              }
              return this.cachedWidth
            },
            calculateObjectValue: function (t, e, n, i) {
              var o = e;
              if ("string" == typeof e) {
                var r = e.split(".");
                if (1 < r.length) {
                  o = window;
                  var s = !0,
                    a = !1,
                    c = void 0;
                  try {
                    for (var u, d = r[Symbol.iterator](); !(s = (u = d.next()).done); s = !0) o = o[u.value]
                  } catch (t) {
                    a = !0, c = t
                  } finally {
                    try {
                      s || null == d.return || d.return()
                    } finally {
                      if (a) throw c
                    }
                  }
                } else o = window[e]
              }
              return null !== o && "object" === l(o) ? o : "function" == typeof o ? o.apply(t, n || []) : !o && "string" == typeof e && this.sprintf.apply(this, [e].concat(h(n))) ? this.sprintf.apply(this, [e].concat(h(n))) : i
            },
            compareObjects: function (t, e, n) {
              var i = Object.keys(t),
                o = Object.keys(e);
              if (n && i.length !== o.length) return !1;
              for (var r, s = 0, a = i; s < a.length; s++)
                if (r = a[s], o.includes(r) && t[r] !== e[r]) return !1;
              return !0
            },
            escapeHTML: function (t) {
              return "string" == typeof t ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/`/g, "&#x60;") : t
            },
            getRealDataAttr: function (t) {
              for (var e = 0, n = Object.entries(t); e < n.length; e++) {
                var i = f(n[e], 2),
                  o = i[0],
                  r = i[1],
                  s = o.split(/(?=[A-Z])/).join("-").toLowerCase();
                s !== o && (t[s] = r, delete t[o])
              }
              return t
            },
            getItemField: function (t, e, n) {
              var i = t;
              if ("string" != typeof e || t.hasOwnProperty(e)) return n ? this.escapeHTML(t[e]) : t[e];
              var o = e.split("."),
                r = !0,
                s = !1,
                a = void 0;
              try {
                for (var l, c, u = o[Symbol.iterator](); !(r = (l = u.next()).done); r = !0) c = l.value, i = i && i[c]
              } catch (t) {
                s = !0, a = t
              } finally {
                try {
                  r || null == u.return || u.return()
                } finally {
                  if (s) throw a
                }
              }
              return n ? this.escapeHTML(i) : i
            },
            isIEBrowser: function () {
              return navigator.userAgent.includes("MSIE ") || /Trident.*rv:11\./.test(navigator.userAgent)
            },
            findIndex: function (t, e) {
              var n = !0,
                i = !1,
                o = void 0;
              try {
                for (var r, s, a = t[Symbol.iterator](); !(n = (r = a.next()).done); n = !0)
                  if (s = r.value, JSON.stringify(s) === JSON.stringify(e)) return t.indexOf(s)
              } catch (t) {
                i = !0, o = t
              } finally {
                try {
                  n || null == a.return || a.return()
                } finally {
                  if (i) throw o
                }
              }
              return -1
            },
            trToData: function (e, n) {
              var i = this,
                o = [],
                r = [];
              return n.each((function (n, s) {
                var a = {};
                a._id = t(s).attr("id"), a._class = t(s).attr("class"), a._data = i.getRealDataAttr(t(s).data()), t(s).find(">td,>th").each((function (o, s) {
                  for (var l = +t(s).attr("colspan") || 1, c = +t(s).attr("rowspan") || 1, u = o; r[n] && r[n][u]; u++);
                  for (var d = u; d < u + l; d++)
                    for (var f = n; f < n + c; f++) r[f] || (r[f] = []), r[f][d] = !0;
                  var h = e[u].field;
                  a[h] = t(s).html().trim(), a["_".concat(h, "_id")] = t(s).attr("id"), a["_".concat(h, "_class")] = t(s).attr("class"), a["_".concat(h, "_rowspan")] = t(s).attr("rowspan"), a["_".concat(h, "_colspan")] = t(s).attr("colspan"), a["_".concat(h, "_title")] = t(s).attr("title"), a["_".concat(h, "_data")] = i.getRealDataAttr(t(s).data())
                })), o.push(a)
              })), o
            },
            sort: function (t, e, n, i) {
              return null == t && (t = ""), null == e && (e = ""), i && t === e && (t = t._position, e = e._position), this.isNumeric(t) && this.isNumeric(e) ? (t = parseFloat(t)) < (e = parseFloat(e)) ? -1 * n : t > e ? n : 0 : t === e ? 0 : ("string" != typeof t && (t = t.toString()), -1 === t.localeCompare(e) ? -1 * n : n)
            }
          },
          Go = function () {
            function t(e) {
              var n = this;
              c(this, t), this.rows = e.rows, this.scrollEl = e.scrollEl, this.contentEl = e.contentEl, this.callback = e.callback, this.itemHeight = e.itemHeight, this.cache = {}, this.scrollTop = this.scrollEl.scrollTop, this.initDOM(this.rows), this.scrollEl.scrollTop = this.scrollTop, this.lastCluster = 0;
              var i = function () {
                n.lastCluster !== (n.lastCluster = n.getNum()) && (n.initDOM(n.rows), n.callback())
              };
              this.scrollEl.addEventListener("scroll", i, !1), this.destroy = function () {
                n.contentEl.innerHtml = "", n.scrollEl.removeEventListener("scroll", i, !1)
              }
            }
            return d(t, [{
              key: "initDOM",
              value: function (t) {
                void 0 === this.clusterHeight && (this.cache.data = this.contentEl.innerHTML = t[0] + t[0] + t[0], this.getRowsHeight(t));
                var e = this.initData(t, this.getNum()),
                  n = e.rows.join(""),
                  i = this.checkChanges("data", n),
                  o = this.checkChanges("top", e.topOffset),
                  r = this.checkChanges("bottom", e.bottomOffset),
                  s = [];
                i && o ? (e.topOffset && s.push(this.getExtra("top", e.topOffset)), s.push(n), e.bottomOffset && s.push(this.getExtra("bottom", e.bottomOffset)), this.contentEl.innerHTML = s.join("")) : r && (this.contentEl.lastChild.style.height = "".concat(e.bottomOffset, "px"))
              }
            }, {
              key: "getRowsHeight",
              value: function () {
                if (void 0 === this.itemHeight) {
                  var t = this.contentEl.children,
                    e = t[r(t.length / 2)];
                  this.itemHeight = e.offsetHeight
                }
                this.blockHeight = 50 * this.itemHeight, this.clusterRows = 200, this.clusterHeight = 4 * this.blockHeight
              }
            }, {
              key: "getNum",
              value: function () {
                return this.scrollTop = this.scrollEl.scrollTop, r(this.scrollTop / (this.clusterHeight - this.blockHeight)) || 0
              }
            }, {
              key: "initData",
              value: function (t, e) {
                if (t.length < 50) return {
                  topOffset: 0,
                  bottomOffset: 0,
                  rowsAbove: 0,
                  rows: t
                };
                var n = i((this.clusterRows - 50) * e, 0),
                  o = n + this.clusterRows,
                  r = i(n * this.itemHeight, 0),
                  s = i((t.length - o) * this.itemHeight, 0),
                  a = [],
                  l = n;
                1 > r && l++;
                for (var c = n; c < o; c++) t[c] && a.push(t[c]);
                return {
                  topOffset: r,
                  bottomOffset: s,
                  rowsAbove: l,
                  rows: a
                }
              }
            }, {
              key: "checkChanges",
              value: function (t, e) {
                var n = e !== this.cache[t];
                return this.cache[t] = e, n
              }
            }, {
              key: "getExtra",
              value: function (t, e) {
                var n = document.createElement("tr");
                return n.className = "virtual-scroll-".concat(t), e && (n.style.height = "".concat(e, "px")), n.outerHTML
              }
            }]), t
          }(),
          Qo = function () {
            function e(n, i) {
              c(this, e), this.options = i, this.$el = t(n), this.$el_ = this.$el.clone(), this.timeoutId_ = 0, this.timeoutFooter_ = 0, this.init()
            }
            return d(e, [{
              key: "init",
              value: function () {
                this.initConstants(), this.initLocale(), this.initContainer(), this.initTable(), this.initHeader(), this.initData(), this.initHiddenRows(), this.initToolbar(), this.initPagination(), this.initBody(), this.initSearchText(), this.initServer()
              }
            }, {
              key: "initConstants",
              value: function () {
                var e = this.options;
                this.constants = Vo.CONSTANTS, this.constants.theme = t.fn.bootstrapTable.theme;
                var n = e.buttonsPrefix ? "".concat(e.buttonsPrefix, "-") : "";
                this.constants.buttonsClass = [e.buttonsPrefix, n + e.buttonsClass, Uo.sprintf("".concat(n, "%s"), e.iconSize)].join(" ").trim()
              }
            }, {
              key: "initLocale",
              value: function () {
                if (this.options.locale) {
                  var e = t.fn.bootstrapTable.locales,
                    n = this.options.locale.split(/-|_/);
                  n[0] = n[0].toLowerCase(), n[1] && (n[1] = n[1].toUpperCase()), e[this.options.locale] ? t.extend(this.options, e[this.options.locale]) : e[n.join("-")] ? t.extend(this.options, e[n.join("-")]) : e[n[0]] && t.extend(this.options, e[n[0]])
                }
              }
            }, {
              key: "initContainer",
              value: function () {
                var e = ["top", "both"].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination clearfix"></div>' : "",
                  n = ["bottom", "both"].includes(this.options.paginationVAlign) ? '<div class="fixed-table-pagination"></div>' : "";
                this.$container = t('\n      <div class="bootstrap-table '.concat(this.constants.theme, '">\n      <div class="fixed-table-toolbar"></div>\n      ').concat(e, '\n      <div class="fixed-table-container">\n      <div class="fixed-table-header"><table></table></div>\n      <div class="fixed-table-body">\n      <div class="fixed-table-loading">\n      <span class="loading-wrap">\n      <span class="loading-text">').concat(this.options.formatLoadingMessage(), '</span>\n      <span class="animation-wrap"><span class="animation-dot"></span></span>\n      </span>\n      </div>\n      </div>\n      <div class="fixed-table-footer"><table><thead><tr></tr></thead></table></div>\n      </div>\n      ').concat(n, "\n      </div>\n    ")), this.$container.insertAfter(this.$el), this.$tableContainer = this.$container.find(".fixed-table-container"), this.$tableHeader = this.$container.find(".fixed-table-header"), this.$tableBody = this.$container.find(".fixed-table-body"), this.$tableLoading = this.$container.find(".fixed-table-loading"), this.$tableFooter = this.$el.find("tfoot"), this.$toolbar = this.options.buttonsToolbar ? t("body").find(this.options.buttonsToolbar) : this.$container.find(".fixed-table-toolbar"), this.$pagination = this.$container.find(".fixed-table-pagination"), this.$tableBody.append(this.$el), this.$container.after('<div class="clearfix"></div>'), this.$el.addClass(this.options.classes), this.$tableLoading.addClass(this.options.classes), this.options.height ? (this.$tableContainer.addClass("fixed-height"), this.options.showFooter && this.$tableContainer.addClass("has-footer"), this.options.classes.split(" ").includes("table-bordered") && (this.$tableBody.append('<div class="fixed-table-border"></div>'), this.$tableBorder = this.$tableBody.find(".fixed-table-border"), this.$tableLoading.addClass("fixed-table-border")), this.$tableFooter = this.$container.find(".fixed-table-footer")) : !this.$tableFooter.length && (this.$el.append("<tfoot><tr></tr></tfoot>"), this.$tableFooter = this.$el.find("tfoot"))
              }
            }, {
              key: "initTable",
              value: function () {
                var n = this,
                  i = [];
                this.$header = this.$el.find(">thead"), this.$header.length ? this.options.theadClasses && this.$header.addClass(this.options.theadClasses) : this.$header = t('<thead class="'.concat(this.options.theadClasses, '"></thead>')).appendTo(this.$el), this.$header.find("tr").each((function (e, n) {
                  var o = [];
                  t(n).find("th").each((function (e, n) {
                    void 0 !== t(n).data("field") && t(n).data("field", "".concat(t(n).data("field"))), o.push(t.extend({}, {
                      title: t(n).html(),
                      class: t(n).attr("class"),
                      titleTooltip: t(n).attr("title"),
                      rowspan: t(n).attr("rowspan") ? +t(n).attr("rowspan") : void 0,
                      colspan: t(n).attr("colspan") ? +t(n).attr("colspan") : void 0
                    }, t(n).data()))
                  })), i.push(o)
                })), Array.isArray(this.options.columns[0]) || (this.options.columns = [this.options.columns]), this.options.columns = t.extend(!0, [], i, this.options.columns), this.columns = [], this.fieldsColumnsIndex = [], Uo.setFieldIndex(this.options.columns), this.options.columns.forEach((function (i, o) {
                  i.forEach((function (i, r) {
                    var s = t.extend({}, e.COLUMN_DEFAULTS, i);
                    void 0 !== s.fieldIndex && (n.columns[s.fieldIndex] = s, n.fieldsColumnsIndex[s.field] = s.fieldIndex), n.options.columns[o][r] = s
                  }))
                })), this.options.data.length || (this.options.data = Uo.trToData(this.columns, this.$el.find(">tbody>tr")), [].length && (this.fromHtml = !0)), this.footerData = Uo.trToData(this.columns, this.$el.find(">tfoot>tr")), this.footerData && this.$el.find("tfoot").html("<tr></tr>"), !this.options.showFooter || this.options.cardView ? this.$tableFooter.hide() : this.$tableFooter.show()
              }
            }, {
              key: "initHeader",
              value: function () {
                var e = this,
                  n = {},
                  i = [];
                this.header = {
                  fields: [],
                  styles: [],
                  classes: [],
                  formatters: [],
                  detailFormatters: [],
                  events: [],
                  sorters: [],
                  sortNames: [],
                  cellStyles: [],
                  searchables: []
                }, Uo.updateFieldGroup(this.options.columns), this.options.columns.forEach((function (t, o) {
                  i.push("<tr>"), 0 === o && !e.options.cardView && e.options.detailView && e.options.detailViewIcon && i.push('<th class="detail" rowspan="'.concat(e.options.columns.length, '">\n          <div class="fht-cell"></div>\n          </th>\n        ')), t.forEach((function (t, r) {
                    if (t.visible) {
                      var s = Uo.sprintf(' class="%s"', t.class),
                        a = t.widthUnit,
                        l = parseFloat(t.width),
                        c = Uo.sprintf("text-align: %s; ", t.halign ? t.halign : t.align),
                        u = Uo.sprintf("text-align: %s; ", t.align),
                        d = Uo.sprintf("vertical-align: %s; ", t.valign);
                      if (d += Uo.sprintf("width: %s; ", !t.checkbox && !t.radio || l ? l ? l + a : void 0 : t.showSelectTitle ? void 0 : "36px"), void 0 !== t.fieldIndex) {
                        if (e.header.fields[t.fieldIndex] = t.field, e.header.styles[t.fieldIndex] = u + d, e.header.classes[t.fieldIndex] = s, e.header.formatters[t.fieldIndex] = t.formatter, e.header.detailFormatters[t.fieldIndex] = t.detailFormatter, e.header.events[t.fieldIndex] = t.events, e.header.sorters[t.fieldIndex] = t.sorter, e.header.sortNames[t.fieldIndex] = t.sortName, e.header.cellStyles[t.fieldIndex] = t.cellStyle, e.header.searchables[t.fieldIndex] = t.searchable, e.options.cardView && !t.cardVisible) return;
                        n[t.field] = t
                      }
                      i.push("<th".concat(Uo.sprintf(' title="%s"', t.titleTooltip)), t.checkbox || t.radio ? Uo.sprintf(' class="bs-checkbox %s"', t.class || "") : s, Uo.sprintf(' style="%s"', c + d), Uo.sprintf(' rowspan="%s"', t.rowspan), Uo.sprintf(' colspan="%s"', t.colspan), Uo.sprintf(' data-field="%s"', t.field), 0 === r && 0 < o ? " data-not-first-th" : "", ">"), i.push(Uo.sprintf('<div class="th-inner %s">', e.options.sortable && t.sortable ? "sortable both" : ""));
                      var f = e.options.escape ? Uo.escapeHTML(t.title) : t.title,
                        h = f;
                      t.checkbox && (f = "", !e.options.singleSelect && e.options.checkboxHeader && (f = '<label><input name="btSelectAll" type="checkbox" /><span></span></label>'), e.header.stateField = t.field), t.radio && (f = "", e.header.stateField = t.field, e.options.singleSelect = !0), !f && t.showSelectTitle && (f += h), i.push(f), i.push("</div>"), i.push('<div class="fht-cell"></div>'), i.push("</div>"), i.push("</th>")
                    }
                  })), i.push("</tr>")
                })), this.$header.html(i.join("")), this.$header.find("th[data-field]").each((function (e, i) {
                  t(i).data(n[t(i).data("field")])
                })), this.$container.off("click", ".th-inner").on("click", ".th-inner", (function (n) {
                  var i = t(n.currentTarget);
                  return (!e.options.detailView || i.parent().hasClass("bs-checkbox") || i.closest(".bootstrap-table")[0] === e.$container[0]) && void(e.options.sortable && i.parent().data().sortable && e.onSort(n))
                })), this.$header.children().children().off("keypress").on("keypress", (function (n) {
                  e.options.sortable && t(n.currentTarget).data().sortable && 13 === (n.keyCode || n.which) && e.onSort(n)
                }));
                var o = "resize.bootstrap-table".concat(this.$el.attr("id") || "");
                t(window).off(o), !this.options.showHeader || this.options.cardView ? (this.$header.hide(), this.$tableHeader.hide(), this.$tableLoading.css("top", 0)) : (this.$header.show(), this.$tableHeader.show(), this.$tableLoading.css("top", this.$header.outerHeight() + 1), this.getCaret(), t(window).on(o, (function (t) {
                  return e.resetWidth(t)
                }))), this.$selectAll = this.$header.find('[name="btSelectAll"]'), this.$selectAll.off("click").on("click", (function (n) {
                  var i = n.currentTarget,
                    o = t(i).prop("checked");
                  e[o ? "checkAll" : "uncheckAll"](), e.updateSelected()
                }))
              }
            }, {
              key: "initData",
              value: function (t, e) {
                this.options.data = "append" === e ? this.options.data.concat(t) : "prepend" === e ? [].concat(t).concat(this.options.data) : t || this.options.data, this.data = this.options.data, "server" === this.options.sidePagination || this.initSort()
              }
            }, {
              key: "initSort",
              value: function () {
                var t = this,
                  e = this.options.sortName,
                  n = "desc" === this.options.sortOrder ? -1 : 1,
                  i = this.header.fields.indexOf(this.options.sortName),
                  o = 0; - 1 !== i && (this.options.sortStable && this.data.forEach((function (t, e) {
                  t.hasOwnProperty("_position") || (t._position = e)
                })), this.options.customSort ? Uo.calculateObjectValue(this.options, this.options.customSort, [this.options.sortName, this.options.sortOrder, this.data]) : this.data.sort((function (o, r) {
                  t.header.sortNames[i] && (e = t.header.sortNames[i]);
                  var s = Uo.getItemField(o, e, t.options.escape),
                    a = Uo.getItemField(r, e, t.options.escape),
                    l = Uo.calculateObjectValue(t.header, t.header.sorters[i], [s, a, o, r]);
                  return void 0 === l ? Uo.sort(s, a, n, t.options.sortStable) : t.options.sortStable && 0 === l ? n * (o._position - r._position) : n * l
                })), void 0 !== this.options.sortClass && (clearTimeout(o), o = setTimeout((function () {
                  t.$el.removeClass(t.options.sortClass);
                  var e = t.$header.find('[data-field="'.concat(t.options.sortName, '"]')).index();
                  t.$el.find("tr td:nth-child(".concat(e + 1, ")")).addClass(t.options.sortClass)
                }), 250)))
              }
            }, {
              key: "onSort",
              value: function (e) {
                var n = e.type,
                  i = e.currentTarget,
                  o = "keypress" === n ? t(i) : t(i).parent(),
                  r = this.$header.find("th").eq(o.index());
                return this.$header.add(this.$header_).find("span.order").remove(), this.options.sortName === o.data("field") ? this.options.sortOrder = "asc" === this.options.sortOrder ? "desc" : "asc" : (this.options.sortName = o.data("field"), this.options.sortOrder = this.options.rememberOrder ? "asc" === o.data("order") ? "desc" : "asc" : this.columns[this.fieldsColumnsIndex[o.data("field")]].sortOrder || this.columns[this.fieldsColumnsIndex[o.data("field")]].order), this.trigger("sort", this.options.sortName, this.options.sortOrder), o.add(r).data("order", this.options.sortOrder), this.getCaret(), "server" === this.options.sidePagination ? (this.options.pageNumber = 1, void this.initServer(this.options.silentSort)) : (this.initSort(), void this.initBody())
              }
            }, {
              key: "initToolbar",
              value: function () {
                var e, n, i = this,
                  o = this.options,
                  r = [],
                  s = 0,
                  a = 0;
                if (this.$toolbar.find(".bs-bars").children().length && t("body").append(t(o.toolbar)), this.$toolbar.html(""), ("string" == typeof o.toolbar || "object" === l(o.toolbar)) && t(Uo.sprintf('<div class="bs-bars %s-%s"></div>', this.constants.classes.pull, o.toolbarAlign)).appendTo(this.$toolbar).append(t(o.toolbar)), r = ['<div class="'.concat(["columns", "columns-".concat(o.buttonsAlign), this.constants.classes.buttonsGroup, "".concat(this.constants.classes.pull, "-").concat(o.buttonsAlign)].join(" "), '">')], "string" == typeof o.icons && (o.icons = Uo.calculateObjectValue(null, o.icons)), o.showPaginationSwitch && r.push('<button class="'.concat(this.constants.buttonsClass, '" type="button" name="paginationSwitch"\n        aria-label="Pagination Switch" title="').concat(o.formatPaginationSwitch(), '">\n        ').concat(o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.paginationSwitchDown) : "", "\n        ").concat(o.showButtonText ? o.formatPaginationSwitchUp() : "", "\n        </button>")), o.showRefresh && r.push('<button class="'.concat(this.constants.buttonsClass, '" type="button" name="refresh"\n        aria-label="Refresh" title="').concat(o.formatRefresh(), '">\n        ').concat(o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.refresh) : "", "\n        ").concat(o.showButtonText ? o.formatRefresh() : "", "\n        </button>")), o.showToggle && r.push('<button class="'.concat(this.constants.buttonsClass, '" type="button" name="toggle"\n        aria-label="Toggle" title="').concat(o.formatToggle(), '">\n        ').concat(o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.toggleOff) : "", "\n        ").concat(o.showButtonText ? o.formatToggleOn() : "", "\n        </button>")), o.showFullscreen && r.push('<button class="'.concat(this.constants.buttonsClass, '" type="button" name="fullscreen"\n        aria-label="Fullscreen" title="').concat(o.formatFullscreen(), '">\n        ').concat(o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.fullscreen) : "", "\n        ").concat(o.showButtonText ? o.formatFullscreen() : "", "\n        </button>")), o.showColumns) {
                  if (r.push('<div class="keep-open '.concat(this.constants.classes.buttonsDropdown, '" title="').concat(o.formatColumns(), '">\n        <button class="').concat(this.constants.buttonsClass, ' dropdown-toggle" type="button" data-toggle="dropdown"\n        aria-label="Columns" title="').concat(o.formatColumns(), '">\n        ').concat(o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.columns) : "", "\n        ").concat(o.showButtonText ? o.formatColumns() : "", "\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.toolbarDropdown[0])), o.showColumnsToggleAll) {
                    var c = this.getVisibleColumns().length === this.columns.length;
                    r.push(Uo.sprintf(this.constants.html.toolbarDropdownItem, Uo.sprintf('<input type="checkbox" class="toggle-all" %s> <span>%s</span>', c ? 'checked="checked"' : "", o.formatColumnsToggleAll()))), r.push(this.constants.html.toolbarDropdownSeperator)
                  }
                  this.columns.forEach((function (t, e) {
                    if (!t.radio && !t.checkbox && (!o.cardView || t.cardVisible)) {
                      var n = t.visible ? ' checked="checked"' : "";
                      t.switchable && (r.push(Uo.sprintf(i.constants.html.toolbarDropdownItem, Uo.sprintf('<input type="checkbox" data-field="%s" value="%s"%s> <span>%s</span>', t.field, e, n, t.title))), a++)
                    }
                  })), r.push(this.constants.html.toolbarDropdown[1], "</div>")
                }
                if (r.push("</div>"), (this.showToolbar || 2 < r.length) && this.$toolbar.append(r.join("")), o.showPaginationSwitch && this.$toolbar.find('button[name="paginationSwitch"]').off("click").on("click", (function () {
                    return i.togglePagination()
                  })), o.showFullscreen && this.$toolbar.find('button[name="fullscreen"]').off("click").on("click", (function () {
                    return i.toggleFullscreen()
                  })), o.showRefresh && this.$toolbar.find('button[name="refresh"]').off("click").on("click", (function () {
                    return i.refresh()
                  })), o.showToggle && this.$toolbar.find('button[name="toggle"]').off("click").on("click", (function () {
                    i.toggleView()
                  })), o.showColumns) {
                  var u = (e = this.$toolbar.find(".keep-open")).find('input:not(".toggle-all")'),
                    d = e.find("input.toggle-all");
                  a <= o.minimumCountColumns && e.find("input").prop("disabled", !0), e.find("li, label").off("click").on("click", (function (t) {
                    t.stopImmediatePropagation()
                  })), u.off("click").on("click", (function (e) {
                    var n = e.currentTarget,
                      o = t(n);
                    i._toggleColumn(o.val(), o.prop("checked"), !1), i.trigger("column-switch", o.data("field"), o.prop("checked")), d.prop("checked", u.filter(":checked").length === i.columns.length)
                  })), d.off("click").on("click", (function (e) {
                    var n = e.currentTarget;
                    i._toggleAllColumns(t(n).prop("checked"))
                  }))
                }
                if (o.search) {
                  r = [];
                  var f = Uo.sprintf(this.constants.html.searchButton, o.formatSearch(), o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.search) : "", o.showButtonText ? o.formatSearch() : ""),
                    h = Uo.sprintf(this.constants.html.searchClearButton, o.formatClearSearch(), o.showButtonIcons ? Uo.sprintf(this.constants.html.icon, o.iconsPrefix, o.icons.clearSearch) : "", o.showButtonText ? o.formatClearSearch() : ""),
                    p = '<input class="'.concat(this.constants.classes.input).concat(Uo.sprintf(" input-%s", o.iconSize), ' search-input" type="text" placeholder="').concat(o.formatSearch(), '">'),
                    g = p;
                  (o.showSearchButton || o.showSearchClearButton) && (g = Uo.sprintf(this.constants.html.inputGroup, p, (o.showSearchButton ? f : "") + (o.showSearchClearButton ? h : ""))), r.push(Uo.sprintf('\n        <div class="'.concat(this.constants.classes.pull, "-").concat(o.searchAlign, " search ").concat(this.constants.classes.inputGroup, '">\n          %s\n        </div>\n      '), g)), this.$toolbar.append(r.join(""));
                  var m = this.$toolbar.find(".search input");
                  n = o.showSearchButton ? this.$toolbar.find(".search button[name=search]") : m;
                  var v = o.showSearchButton ? "click" : Uo.isIEBrowser() ? "mouseup" : "keyup drop blur";
                  n.off(v).on(v, (function (t) {
                    o.searchOnEnterKey && 13 !== t.keyCode || [37, 38, 39, 40].includes(t.keyCode) || (clearTimeout(s), s = setTimeout((function () {
                      i.onSearch(o.showSearchButton ? {
                        currentTarget: m
                      } : t)
                    }), o.searchTimeOut))
                  })), o.showSearchClearButton && this.$toolbar.find(".search button[name=clearSearch]").click((function () {
                    i.resetSearch(), i.onSearch({
                      currentTarget: i.$toolbar.find(".search input")
                    })
                  }))
                }
              }
            }, {
              key: "onSearch",
              value: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                  n = e.currentTarget,
                  i = e.firedByInitSearchText,
                  o = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                if (void 0 !== n && o) {
                  var r = t(n).val().trim();
                  if (this.options.trimOnSearch && t(n).val() !== r && t(n).val(r), this.searchText === r) return;
                  t(n).hasClass("search-input") && (this.searchText = r, this.options.searchText = r)
                }
                i || (this.options.pageNumber = 1), this.initSearch(), i ? "client" === this.options.sidePagination && this.updatePagination() : this.updatePagination(), this.trigger("search", this.searchText)
              }
            }, {
              key: "initSearch",
              value: function () {
                var t = this;
                if (this.filterOptions = this.filterOptions || this.options.filterOptions, "server" !== this.options.sidePagination) {
                  if (this.options.customSearch) return void(this.data = Uo.calculateObjectValue(this.options, this.options.customSearch, [this.options.data, this.searchText]));
                  var e = this.searchText && (this.options.escape ? Uo.escapeHTML(this.searchText) : this.searchText).toLowerCase(),
                    n = Uo.isEmptyObject(this.filterColumns) ? null : this.filterColumns;
                  "function" == typeof this.filterOptions.filterAlgorithm ? this.data = this.options.data.filter((function (e) {
                    return t.filterOptions.filterAlgorithm.apply(null, [e, n])
                  })) : "string" == typeof this.filterOptions.filterAlgorithm && (this.data = n ? this.options.data.filter((function (e) {
                    var i = t.filterOptions.filterAlgorithm;
                    if ("and" === i) {
                      for (var o in n)
                        if (Array.isArray(n[o]) && !n[o].includes(e[o]) || !Array.isArray(n[o]) && e[o] !== n[o]) return !1
                    } else if ("or" === i) {
                      var r = !1;
                      for (var s in n)(Array.isArray(n[s]) && n[s].includes(e[s]) || !Array.isArray(n[s]) && e[s] === n[s]) && (r = !0);
                      return r
                    }
                    return !0
                  })) : this.options.data);
                  var i = this.getVisibleFields();
                  this.data = e ? this.data.filter((function (n, o) {
                    for (var r = 0; r < t.header.fields.length; r++)
                      if (t.header.searchables[r] && (!t.options.visibleSearch || -1 !== i.indexOf(t.header.fields[r]))) {
                        var s = Uo.isNumeric(t.header.fields[r]) ? parseInt(t.header.fields[r], 10) : t.header.fields[r],
                          a = t.columns[t.fieldsColumnsIndex[s]],
                          l = void 0;
                        if ("string" == typeof s) {
                          l = n;
                          for (var c = s.split("."), u = 0; u < c.length; u++) null !== l[c[u]] && (l = l[c[u]])
                        } else l = n[s];
                        if (a && a.searchFormatter && (l = Uo.calculateObjectValue(a, t.header.formatters[r], [l, n, o, a.field], l)), "string" == typeof l || "number" == typeof l)
                          if (t.options.strictSearch) {
                            if ("".concat(l).toLowerCase() === e) return !0
                          } else {
                            var d = /(?:(<=|=>|=<|>=|>|<)(?:\s+)?(\d+)?|(\d+)?(\s+)?(<=|=>|=<|>=|>|<))/gm.exec(e),
                              f = !1;
                            if (d) {
                              var h = d[1] || "".concat(d[5], "l"),
                                p = d[2] || d[3],
                                g = parseInt(l, 10),
                                m = parseInt(p, 10);
                              switch (h) {
                                case ">":
                                case "<l":
                                  f = g > m;
                                  break;
                                case "<":
                                case ">l":
                                  f = g < m;
                                  break;
                                case "<=":
                                case "=<":
                                case ">=l":
                                case "=>l":
                                  f = g <= m;
                                  break;
                                case ">=":
                                case "=>":
                                case "<=l":
                                case "=<l":
                                  f = g >= m
                              }
                            }
                            if (f || "".concat(l).toLowerCase().includes(e)) return !0
                          }
                      } return !1
                  })) : this.data
                }
              }
            }, {
              key: "initPagination",
              value: function () {
                var t = Math.round,
                  e = this,
                  n = this.options;
                if (n.pagination) {
                  this.$pagination.show();
                  var i, o, r, s, a, l, c, u = [],
                    d = !1,
                    f = this.getData({
                      includeHiddenRows: !1
                    }),
                    h = n.pageList;
                  "server" !== n.sidePagination && (n.totalRows = f.length), this.totalPages = 0, n.totalRows && (n.pageSize === n.formatAllRows() ? (n.pageSize = n.totalRows, d = !0) : n.pageSize === n.totalRows && ("string" == typeof n.pageList ? n.pageList.replace("[", "").replace("]", "").replace(/ /g, "").toLowerCase().split(",") : n.pageList).includes(n.formatAllRows().toLowerCase()) && (d = !0), this.totalPages = 1 + ~~((n.totalRows - 1) / n.pageSize), n.totalPages = this.totalPages), 0 < this.totalPages && n.pageNumber > this.totalPages && (n.pageNumber = this.totalPages), this.pageFrom = (n.pageNumber - 1) * n.pageSize + 1, this.pageTo = n.pageNumber * n.pageSize, this.pageTo > n.totalRows && (this.pageTo = n.totalRows), this.options.pagination && "server" !== this.options.sidePagination && (this.options.totalNotFiltered = this.options.data.length), this.options.showExtendedPagination || (this.options.totalNotFiltered = void 0);
                  var p = n.onlyInfoPagination ? n.formatDetailPagination(n.totalRows) : n.formatShowingRows(this.pageFrom, this.pageTo, n.totalRows, n.totalNotFiltered);
                  if (u.push('<div class="'.concat(this.constants.classes.pull, "-").concat(n.paginationDetailHAlign, ' pagination-detail">\n      <span class="pagination-info">\n      ').concat(p, "\n      </span>")), !n.onlyInfoPagination) {
                    u.push('<span class="page-list">');
                    var g = ['<span class="'.concat(this.constants.classes.paginationDropdown, '">\n        <button class="').concat(this.constants.buttonsClass, ' dropdown-toggle" type="button" data-toggle="dropdown">\n        <span class="page-size">\n        ').concat(d ? n.formatAllRows() : n.pageSize, "\n        </span>\n        ").concat(this.constants.html.dropdownCaret, "\n        </button>\n        ").concat(this.constants.html.pageDropdown[0])];
                    if ("string" == typeof n.pageList) {
                      var m = n.pageList.replace("[", "").replace("]", "").replace(/ /g, "").split(",");
                      h = [];
                      var v = !0,
                        y = !1,
                        b = void 0;
                      try {
                        for (var w, _, x = m[Symbol.iterator](); !(v = (w = x.next()).done); v = !0) _ = w.value, h.push(_.toLowerCase() === n.formatAllRows().toLowerCase() || ["all", "unlimited"].includes(_.toLowerCase()) ? n.formatAllRows() : +_)
                      } catch (t) {
                        y = !0, b = t
                      } finally {
                        try {
                          v || null == x.return || x.return()
                        } finally {
                          if (y) throw b
                        }
                      }
                    }
                    h.forEach((function (t, i) {
                      var o;
                      (!n.smartDisplay || 0 === i || h[i - 1] < n.totalRows) && (o = d ? t === n.formatAllRows() ? e.constants.classes.dropdownActive : "" : t === n.pageSize ? e.constants.classes.dropdownActive : "", g.push(Uo.sprintf(e.constants.html.pageDropdownItem, o, t)))
                    })), g.push("".concat(this.constants.html.pageDropdown[1], "</span>")), u.push(n.formatRecordsPerPage(g.join(""))), u.push("</span></div>"), u.push('<div class="'.concat(this.constants.classes.pull, "-").concat(n.paginationHAlign, ' pagination">'), Uo.sprintf(this.constants.html.pagination[0], Uo.sprintf(" pagination-%s", n.iconSize)), Uo.sprintf(this.constants.html.paginationItem, " page-pre", n.formatSRPaginationPreText(), n.paginationPreText)), this.totalPages < n.paginationSuccessivelySize ? (o = 1, r = this.totalPages) : r = (o = n.pageNumber - n.paginationPagesBySide) + 2 * n.paginationPagesBySide, n.pageNumber < n.paginationSuccessivelySize - 1 && (r = n.paginationSuccessivelySize), n.paginationSuccessivelySize > this.totalPages - o && (o = o - (n.paginationSuccessivelySize - (this.totalPages - o)) + 1), 1 > o && (o = 1), r > this.totalPages && (r = this.totalPages);
                    var k = t(n.paginationPagesBySide / 2),
                      T = function (t) {
                        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        return Uo.sprintf(e.constants.html.paginationItem, i + (t === n.pageNumber ? " ".concat(e.constants.classes.paginationActive) : ""), n.formatSRPaginationPageText(t), t)
                      };
                    if (1 < o) {
                      var C = n.paginationPagesBySide;
                      for (C >= o && (C = o - 1), i = 1; i <= C; i++) u.push(T(i));
                      o - 1 === C + 1 ? (i = o - 1, u.push(T(i))) : o - 1 > C && (o - 2 * n.paginationPagesBySide > n.paginationPagesBySide && n.paginationUseIntermediate ? (i = t((o - k) / 2 + k), u.push(T(i, " page-intermediate"))) : u.push(Uo.sprintf(this.constants.html.paginationItem, " page-first-separator disabled", "", "...")))
                    }
                    for (i = o; i <= r; i++) u.push(T(i));
                    if (this.totalPages > r) {
                      var S = this.totalPages - (n.paginationPagesBySide - 1);
                      for (r >= S && (S = r + 1), r + 1 === S - 1 ? (i = r + 1, u.push(T(i))) : S > r + 1 && (this.totalPages - r > 2 * n.paginationPagesBySide && n.paginationUseIntermediate ? (i = t((this.totalPages - k - r) / 2 + r), u.push(T(i, " page-intermediate"))) : u.push(Uo.sprintf(this.constants.html.paginationItem, " page-last-separator disabled", "", "..."))), i = S; i <= this.totalPages; i++) u.push(T(i))
                    }
                    u.push(Uo.sprintf(this.constants.html.paginationItem, " page-next", n.formatSRPaginationNextText(), n.paginationNextText)), u.push(this.constants.html.pagination[1], "</div>")
                  }
                  this.$pagination.html(u.join(""));
                  var E = ["bottom", "both"].includes(n.paginationVAlign) ? " ".concat(this.constants.classes.dropup) : "";
                  this.$pagination.last().find(".page-list > span").addClass(E), n.onlyInfoPagination || (s = this.$pagination.find(".page-list a"), a = this.$pagination.find(".page-pre"), l = this.$pagination.find(".page-next"), c = this.$pagination.find(".page-item").not(".page-next, .page-pre, .page-last-separator, .page-first-separator"), 1 >= this.totalPages && this.$pagination.find("div.pagination").hide(), n.smartDisplay && (2 > h.length || n.totalRows <= h[0]) && this.$pagination.find("span.page-list").hide(), this.$pagination[this.getData().length ? "show" : "hide"](), !n.paginationLoop && (1 === n.pageNumber && a.addClass("disabled"), n.pageNumber === this.totalPages && l.addClass("disabled")), d && (n.pageSize = n.formatAllRows()), s.off("click").on("click", (function (t) {
                    return e.onPageListChange(t)
                  })), a.off("click").on("click", (function (t) {
                    return e.onPagePre(t)
                  })), l.off("click").on("click", (function (t) {
                    return e.onPageNext(t)
                  })), c.off("click").on("click", (function (t) {
                    return e.onPageNumber(t)
                  })))
                } else this.$pagination.hide()
              }
            }, {
              key: "updatePagination",
              value: function (e) {
                e && t(e.currentTarget).hasClass("disabled") || (!this.options.maintainMetaData && this.resetRows(), this.initPagination(), "server" === this.options.sidePagination ? this.initServer() : this.initBody(), this.trigger("page-change", this.options.pageNumber, this.options.pageSize))
              }
            }, {
              key: "onPageListChange",
              value: function (e) {
                e.preventDefault();
                var n = t(e.currentTarget);
                return n.parent().addClass(this.constants.classes.dropdownActive).siblings().removeClass(this.constants.classes.dropdownActive), this.options.pageSize = n.text().toUpperCase() === this.options.formatAllRows().toUpperCase() ? this.options.formatAllRows() : +n.text(), this.$toolbar.find(".page-size").text(this.options.pageSize), this.updatePagination(e), !1
              }
            }, {
              key: "onPagePre",
              value: function (t) {
                return t.preventDefault(), 0 == this.options.pageNumber - 1 ? this.options.pageNumber = this.options.totalPages : this.options.pageNumber--, this.updatePagination(t), !1
              }
            }, {
              key: "onPageNext",
              value: function (t) {
                return t.preventDefault(), this.options.pageNumber + 1 > this.options.totalPages ? this.options.pageNumber = 1 : this.options.pageNumber++, this.updatePagination(t), !1
              }
            }, {
              key: "onPageNumber",
              value: function (e) {
                if (e.preventDefault(), this.options.pageNumber !== +t(e.currentTarget).text()) return this.options.pageNumber = +t(e.currentTarget).text(), this.updatePagination(e), !1
              }
            }, {
              key: "initRow",
              value: function (t, e) {
                var n = this,
                  i = [],
                  o = {},
                  r = [],
                  s = "",
                  a = {},
                  c = [];
                if (!(-1 < Uo.findIndex(this.hiddenRows, t))) {
                  if ((o = Uo.calculateObjectValue(this.options, this.options.rowStyle, [t, e], o)) && o.css)
                    for (var u = 0, d = Object.entries(o.css); u < d.length; u++) {
                      var h = f(d[u], 2),
                        p = h[0],
                        g = h[1];
                      r.push("".concat(p, ": ").concat(g))
                    }
                  if (a = Uo.calculateObjectValue(this.options, this.options.rowAttributes, [t, e], a))
                    for (var m = 0, v = Object.entries(a); m < v.length; m++) {
                      var y = f(v[m], 2);
                      p = y[0], g = y[1], c.push("".concat(p, '="').concat(Uo.escapeHTML(g), '"'))
                    }
                  if (t._data && !Uo.isEmptyObject(t._data))
                    for (var b = 0, w = Object.entries(t._data); b < w.length; b++) {
                      var _ = f(w[b], 2),
                        x = _[0],
                        k = _[1];
                      if ("index" === x) return;
                      s += " data-".concat(x, "='").concat("object" === l(k) ? JSON.stringify(k) : k, "'")
                    }
                  return i.push("<tr", Uo.sprintf(" %s", c.length ? c.join(" ") : void 0), Uo.sprintf(' id="%s"', Array.isArray(t) ? void 0 : t._id), Uo.sprintf(' class="%s"', o.classes || (Array.isArray(t) ? void 0 : t._class)), ' data-index="'.concat(e, '"'), Uo.sprintf(' data-uniqueid="%s"', Uo.getItemField(t, this.options.uniqueId, !1)), Uo.sprintf(' data-has-detail-view="%s"', !this.options.cardView && this.options.detailView && Uo.calculateObjectValue(null, this.options.detailFilter, [e, t]) ? "true" : void 0), Uo.sprintf("%s", s), ">"), this.options.cardView && i.push('<td colspan="'.concat(this.header.fields.length, '"><div class="card-views">')), !this.options.cardView && this.options.detailView && this.options.detailViewIcon && (i.push("<td>"), Uo.calculateObjectValue(null, this.options.detailFilter, [e, t]) && i.push('\n          <a class="detail-icon" href="#">\n          '.concat(Uo.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen), "\n          </a>\n        ")), i.push("</td>")), this.header.fields.forEach((function (o, s) {
                    var a = "",
                      l = Uo.getItemField(t, o, n.options.escape),
                      c = "",
                      u = "",
                      d = {},
                      h = "",
                      p = n.header.classes[s],
                      g = "",
                      m = "",
                      v = "",
                      y = "",
                      b = "",
                      w = n.columns[s];
                    if ((!n.fromHtml || void 0 !== l || w.checkbox || w.radio) && w.visible && (!n.options.cardView || w.cardVisible)) {
                      if (w.escape && (l = Uo.escapeHTML(l)), r.concat([n.header.styles[s]]).length && (g = ' style="'.concat(r.concat([n.header.styles[s]]).join("; "), '"')), t["_".concat(o, "_id")] && (h = Uo.sprintf(' id="%s"', t["_".concat(o, "_id")])), t["_".concat(o, "_class")] && (p = Uo.sprintf(' class="%s"', t["_".concat(o, "_class")])), t["_".concat(o, "_rowspan")] && (v = Uo.sprintf(' rowspan="%s"', t["_".concat(o, "_rowspan")])), t["_".concat(o, "_colspan")] && (y = Uo.sprintf(' colspan="%s"', t["_".concat(o, "_colspan")])), t["_".concat(o, "_title")] && (b = Uo.sprintf(' title="%s"', t["_".concat(o, "_title")])), (d = Uo.calculateObjectValue(n.header, n.header.cellStyles[s], [l, t, e, o], d)).classes && (p = ' class="'.concat(d.classes, '"')), d.css) {
                        for (var _ = [], x = 0, k = Object.entries(d.css); x < k.length; x++) {
                          var T = f(k[x], 2),
                            C = T[0],
                            S = T[1];
                          _.push("".concat(C, ": ").concat(S))
                        }
                        g = ' style="'.concat(_.concat(n.header.styles[s]).join("; "), '"')
                      }
                      if (c = Uo.calculateObjectValue(w, n.header.formatters[s], [l, t, e, o], l), t["_".concat(o, "_data")] && !Uo.isEmptyObject(t["_".concat(o, "_data")]))
                        for (var E = 0, O = Object.entries(t["_".concat(o, "_data")]); E < O.length; E++) {
                          var A = f(O[E], 2),
                            N = A[0],
                            D = A[1];
                          if ("index" === N) return;
                          m += " data-".concat(N, '="').concat(D, '"')
                        }
                      if (w.checkbox || w.radio) {
                        u = w.checkbox ? "checkbox" : u, u = w.radio ? "radio" : u;
                        var j = w.class || "",
                          P = (!0 === c || l || c && c.checked) && !1 !== c,
                          I = !w.checkboxEnabled || c && c.disabled;
                        a = [n.options.cardView ? '<div class="card-view '.concat(j, '">') : '<td class="bs-checkbox '.concat(j, '"').concat(p).concat(g, ">"), '<label>\n            <input\n            data-index="'.concat(e, '"\n            name="').concat(n.options.selectItemName, '"\n            type="').concat(u, '"\n            ').concat(Uo.sprintf('value="%s"', t[n.options.idField]), "\n            ").concat(Uo.sprintf('checked="%s"', P ? "checked" : void 0), "\n            ").concat(Uo.sprintf('disabled="%s"', I ? "disabled" : void 0), " />\n            <span></span>\n            </label>"), n.header.formatters[s] && "string" == typeof c ? c : "", n.options.cardView ? "</div>" : "</td>"].join(""), t[n.header.stateField] = !0 === c || !!l || c && c.checked
                      } else if (c = null == c ? n.options.undefinedText : c, n.options.cardView) {
                        var L = n.options.showHeader ? '<span class="card-view-title"'.concat(g, ">").concat(Uo.getFieldTitle(n.columns, o), "</span>") : "";
                        a = '<div class="card-view">'.concat(L, '<span class="card-view-value">').concat(c, "</span></div>"), n.options.smartDisplay && "" === c && (a = '<div class="card-view"></div>')
                      } else a = "<td".concat(h).concat(p).concat(g).concat(m).concat(v).concat(y).concat(b, ">").concat(c, "</td>");
                      i.push(a)
                    }
                  })), this.options.cardView && i.push("</div></td>"), i.push("</tr>"), i.join("")
                }
              }
            }, {
              key: "initBody",
              value: function (e) {
                var n = this,
                  i = this.getData();
                this.trigger("pre-body", i), this.$body = this.$el.find(">tbody"), this.$body.length || (this.$body = t("<tbody></tbody>").appendTo(this.$el)), this.options.pagination && "server" !== this.options.sidePagination || (this.pageFrom = 1, this.pageTo = i.length);
                for (var o = [], r = t(document.createDocumentFragment()), s = !1, a = this.pageFrom - 1; a < this.pageTo; a++) {
                  var l = i[a],
                    c = this.initRow(l, a, i, r);
                  s = s || !!c, c && "string" == typeof c && (this.options.virtualScroll ? o.push(c) : r.append(c))
                }
                s ? this.options.virtualScroll ? (this.virtualScroll && this.virtualScroll.destroy(), this.virtualScroll = new Go({
                  rows: o,
                  scrollEl: this.$tableBody[0],
                  contentEl: this.$body[0],
                  itemHeight: this.options.virtualScrollItemHeight,
                  callback: function () {
                    n.fitHeader()
                  }
                })) : this.$body.html(r) : this.$body.html('<tr class="no-records-found">'.concat(Uo.sprintf('<td colspan="%s">%s</td>', this.$header.find("th").length, this.options.formatNoMatches()), "</tr>")), e || this.scrollTo(0), this.$body.find("> tr[data-index] > td").off("click dblclick").on("click dblclick", (function (e) {
                  var i = t(e.currentTarget),
                    o = i.parent(),
                    r = t(e.target).parents(".card-views").children(),
                    s = t(e.target).parents(".card-view"),
                    a = o.data("index"),
                    l = n.data[a],
                    c = n.options.cardView ? r.index(s) : i[0].cellIndex,
                    u = n.getVisibleFields()[n.options.detailView && n.detailViewIcon && !n.options.cardView ? c - 1 : c],
                    d = n.columns[n.fieldsColumnsIndex[u]],
                    f = Uo.getItemField(l, u, n.options.escape);
                  if (!i.find(".detail-icon").length) {
                    if (n.trigger("click" === e.type ? "click-cell" : "dbl-click-cell", u, f, l, i), n.trigger("click" === e.type ? "click-row" : "dbl-click-row", l, o, u), "click" === e.type && n.options.clickToSelect && d.clickToSelect && !Uo.calculateObjectValue(n.options, n.options.ignoreClickToSelectOn, [e.target])) {
                      var h = o.find(Uo.sprintf('[name="%s"]', n.options.selectItemName));
                      h.length && h[0].click()
                    }
                    "click" === e.type && n.options.detailViewByClick && n.toggleDetailView(a, n.header.detailFormatters[n.fieldsColumnsIndex[u]])
                  }
                })).off("mousedown").on("mousedown", (function (t) {
                  n.multipleSelectRowCtrlKey = t.ctrlKey || t.metaKey, n.multipleSelectRowShiftKey = t.shiftKey
                })), this.$body.find("> tr[data-index] > td > .detail-icon").off("click").on("click", (function (e) {
                  return e.preventDefault(), n.toggleDetailView(t(e.currentTarget).parent().parent().data("index")), !1
                })), this.$selectItem = this.$body.find(Uo.sprintf('[name="%s"]', this.options.selectItemName)), this.$selectItem.off("click").on("click", (function (e) {
                  e.stopImmediatePropagation();
                  var i = t(e.currentTarget);
                  n._toggleCheck(i.prop("checked"), i.data("index"))
                })), this.header.events.forEach((function (e, i) {
                  var o = e;
                  if (o) {
                    "string" == typeof o && (o = Uo.calculateObjectValue(null, o));
                    var r = n.header.fields[i],
                      s = n.getVisibleFields().indexOf(r);
                    if (-1 !== s) {
                      n.options.detailView && !n.options.cardView && (s += 1);
                      var a = function (e) {
                        if (!o.hasOwnProperty(e)) return "continue";
                        var i = o[e];
                        n.$body.find(">tr:not(.no-records-found)").each((function (o, a) {
                          var l = t(a),
                            c = l.find(n.options.cardView ? ".card-view" : "td").eq(s),
                            u = e.indexOf(" "),
                            d = e.substring(0, u),
                            f = e.substring(u + 1);
                          c.find(f).off(d).on(d, (function (t) {
                            var e = l.data("index"),
                              o = n.data[e],
                              s = o[r];
                            i.apply(n, [t, s, o, e])
                          }))
                        }))
                      };
                      for (var l in o) a(l)
                    }
                  }
                })), this.updateSelected(), this.initFooter(), this.resetView(), "server" !== this.options.sidePagination && (this.options.totalRows = i.length), this.trigger("post-body", i)
              }
            }, {
              key: "initServer",
              value: function (e, n, i) {
                var o = this,
                  r = {},
                  s = this.header.fields.indexOf(this.options.sortName),
                  a = {
                    searchText: this.searchText,
                    sortName: this.options.sortName,
                    sortOrder: this.options.sortOrder
                  };
                if (this.header.sortNames[s] && (a.sortName = this.header.sortNames[s]), this.options.pagination && "server" === this.options.sidePagination && (a.pageSize = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, a.pageNumber = this.options.pageNumber), (i || this.options.url || this.options.ajax) && ("limit" === this.options.queryParamsType && (a = {
                    search: a.searchText,
                    sort: a.sortName,
                    order: a.sortOrder
                  }, this.options.pagination && "server" === this.options.sidePagination && (a.offset = this.options.pageSize === this.options.formatAllRows() ? 0 : this.options.pageSize * (this.options.pageNumber - 1), a.limit = this.options.pageSize === this.options.formatAllRows() ? this.options.totalRows : this.options.pageSize, 0 === a.limit && delete a.limit)), Uo.isEmptyObject(this.filterColumnsPartial) || (a.filter = JSON.stringify(this.filterColumnsPartial, null)), r = Uo.calculateObjectValue(this.options, this.options.queryParams, [a], r), t.extend(r, n || {}), !1 !== r)) {
                  e || this.showLoading();
                  var l = t.extend({}, Uo.calculateObjectValue(null, this.options.ajaxOptions), {
                    type: this.options.method,
                    url: i || this.options.url,
                    data: "application/json" === this.options.contentType && "post" === this.options.method ? JSON.stringify(r) : r,
                    cache: this.options.cache,
                    contentType: this.options.contentType,
                    dataType: this.options.dataType,
                    success: function (t) {
                      var n = Uo.calculateObjectValue(o.options, o.options.responseHandler, [t], t);
                      o.load(n), o.trigger("load-success", n), e || o.hideLoading()
                    },
                    error: function (t) {
                      var n = [];
                      "server" === o.options.sidePagination && ((n = {})[o.options.totalField] = 0, n[o.options.dataField] = []), o.load(n), o.trigger("load-error", t.status, t), e || o.$tableLoading.hide()
                    }
                  });
                  return this.options.ajax ? Uo.calculateObjectValue(this, this.options.ajax, [l], null) : (this._xhr && 4 !== this._xhr.readyState && this._xhr.abort(), this._xhr = t.ajax(l)), r
                }
              }
            }, {
              key: "initSearchText",
              value: function () {
                if (this.options.search && (this.searchText = "", "" !== this.options.searchText)) {
                  var t = this.$toolbar.find(".search input");
                  t.val(this.options.searchText), this.onSearch({
                    currentTarget: t,
                    firedByInitSearchText: !0
                  })
                }
              }
            }, {
              key: "getCaret",
              value: function () {
                var e = this;
                this.$header.find("th").each((function (n, i) {
                  t(i).find(".sortable").removeClass("desc asc").addClass(t(i).data("field") === e.options.sortName ? e.options.sortOrder : "both")
                }))
              }
            }, {
              key: "updateSelected",
              value: function () {
                var e = this.$selectItem.filter(":enabled").length && this.$selectItem.filter(":enabled").length === this.$selectItem.filter(":enabled").filter(":checked").length;
                this.$selectAll.add(this.$selectAll_).prop("checked", e), this.$selectItem.each((function (e, n) {
                  t(n).closest("tr")[t(n).prop("checked") ? "addClass" : "removeClass"]("selected")
                }))
              }
            }, {
              key: "updateRows",
              value: function () {
                var e = this;
                this.$selectItem.each((function (n, i) {
                  e.data[t(i).data("index")][e.header.stateField] = t(i).prop("checked")
                }))
              }
            }, {
              key: "resetRows",
              value: function () {
                var t = !0,
                  e = !1,
                  n = void 0;
                try {
                  for (var i, o, r = this.data[Symbol.iterator](); !(t = (i = r.next()).done); t = !0) o = i.value, this.$selectAll.prop("checked", !1), this.$selectItem.prop("checked", !1), this.header.stateField && (o[this.header.stateField] = !1)
                } catch (t) {
                  e = !0, n = t
                } finally {
                  try {
                    t || null == r.return || r.return()
                  } finally {
                    if (e) throw n
                  }
                }
                this.initHiddenRows()
              }
            }, {
              key: "trigger",
              value: function (n) {
                for (var i, o = "".concat(n, ".bs.table"), r = arguments.length, s = Array(1 < r ? r - 1 : 0), a = 1; a < r; a++) s[a - 1] = arguments[a];
                (i = this.options)[e.EVENTS[o]].apply(i, s), this.$el.trigger(t.Event(o), s), this.options.onAll(o, s), this.$el.trigger(t.Event("all.bs.table"), [o, s])
              }
            }, {
              key: "resetHeader",
              value: function () {
                var t = this;
                clearTimeout(this.timeoutId_), this.timeoutId_ = setTimeout((function () {
                  return t.fitHeader()
                }), this.$el.is(":hidden") ? 100 : 0)
              }
            }, {
              key: "fitHeader",
              value: function () {
                var e = this;
                if (this.$el.is(":hidden")) this.timeoutId_ = setTimeout((function () {
                  return e.fitHeader()
                }), 100);
                else {
                  var n = this.$tableBody.get(0),
                    i = n.scrollWidth > n.clientWidth && n.scrollHeight > n.clientHeight + this.$header.outerHeight() ? Uo.getScrollBarWidth() : 0;
                  this.$el.css("margin-top", -this.$header.outerHeight());
                  var o = t(":focus");
                  if (0 < o.length) {
                    var r = o.parents("th");
                    if (0 < r.length) {
                      var s = r.attr("data-field");
                      if (void 0 !== s) {
                        var a = this.$header.find("[data-field='".concat(s, "']"));
                        0 < a.length && a.find(":input").addClass("focus-temp")
                      }
                    }
                  }
                  this.$header_ = this.$header.clone(!0, !0), this.$selectAll_ = this.$header_.find('[name="btSelectAll"]'), this.$tableHeader.css("margin-right", i).find("table").css("width", this.$el.outerWidth()).html("").attr("class", this.$el.attr("class")).append(this.$header_), this.$tableLoading.css("width", this.$el.outerWidth());
                  var l = t(".focus-temp:visible:eq(0)");
                  0 < l.length && (l.focus(), this.$header.find(".focus-temp").removeClass("focus-temp")), this.$header.find("th[data-field]").each((function (n, i) {
                    e.$header_.find(Uo.sprintf('th[data-field="%s"]', t(i).data("field"))).data(t(i).data())
                  }));
                  for (var c = this.getVisibleFields(), u = this.$header_.find("th"), d = this.$body.find(">tr:not(.no-records-found,.virtual-scroll-top)").eq(0); d.length && d.find('>td[colspan]:not([colspan="1"])').length;) d = d.next();
                  d.find("> *").each((function (n, i) {
                    var o = t(i),
                      r = n;
                    if (e.options.detailView && e.options.detailViewIcon && !e.options.cardView) {
                      if (0 === n) {
                        var s = u.filter(".detail"),
                          a = s.width() - s.find(".fht-cell").width();
                        s.find(".fht-cell").width(o.innerWidth() - a)
                      }
                      r = n - 1
                    }
                    if (-1 !== r) {
                      var l = e.$header_.find(Uo.sprintf('th[data-field="%s"]', c[r]));
                      1 < l.length && (l = t(u[o[0].cellIndex]));
                      var d = l.width() - l.find(".fht-cell").width();
                      l.find(".fht-cell").width(o.innerWidth() - d)
                    }
                  })), this.horizontalScroll(), this.trigger("post-header")
                }
              }
            }, {
              key: "initFooter",
              value: function () {
                if (this.options.showFooter && !this.options.cardView) {
                  var t = this.getData(),
                    e = [];
                  !this.options.cardView && this.options.detailView && this.options.detailViewIcon && e.push('<th class="detail"><div class="th-inner"></div><div class="fht-cell"></div></th>');
                  var n = !0,
                    i = !1,
                    o = void 0;
                  try {
                    for (var r, s = this.columns[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                      var a = r.value,
                        l = "",
                        c = "",
                        u = [],
                        d = {},
                        h = Uo.sprintf(' class="%s"', a.class);
                      if (a.visible) {
                        if (this.options.cardView && !a.cardVisible) return;
                        if (l = Uo.sprintf("text-align: %s; ", a.falign ? a.falign : a.align), c = Uo.sprintf("vertical-align: %s; ", a.valign), (d = Uo.calculateObjectValue(null, this.options.footerStyle, [a])) && d.css)
                          for (var p = 0, g = Object.entries(d.css); p < g.length; p++) {
                            var m = f(g[p], 2),
                              v = m[0],
                              y = m[1];
                            u.push("".concat(v, ": ").concat(y))
                          }
                        d && d.classes && (h = Uo.sprintf(' class="%s"', a.class ? [a.class, d.classes].join(" ") : d.classes)), e.push("<th", h, Uo.sprintf(' style="%s"', l + c + u.concat().join("; ")), ">"), e.push('<div class="th-inner">'), e.push(Uo.calculateObjectValue(a, a.footerFormatter, [t], this.footerData[0] && this.footerData[0][a.field] || "")), e.push("</div>"), e.push('<div class="fht-cell"></div>'), e.push("</div>"), e.push("</th>")
                      }
                    }
                  } catch (t) {
                    i = !0, o = t
                  } finally {
                    try {
                      n || null == s.return || s.return()
                    } finally {
                      if (i) throw o
                    }
                  }
                  this.$tableFooter.find("tr").html(e.join("")), this.trigger("post-footer", this.$tableFooter)
                }
              }
            }, {
              key: "fitFooter",
              value: function () {
                var e = this;
                if (this.$el.is(":hidden")) setTimeout((function () {
                  return e.fitFooter()
                }), 100);
                else {
                  var n = this.$tableBody.get(0),
                    i = n.scrollWidth > n.clientWidth && n.scrollHeight > n.clientHeight + this.$header.outerHeight() ? Uo.getScrollBarWidth() : 0;
                  this.$tableFooter.css("margin-right", i).find("table").css("width", this.$el.outerWidth()).attr("class", this.$el.attr("class")), this.getVisibleFields();
                  for (var o = this.$tableFooter.find("th"), r = this.$body.find(">tr:first-child:not(.no-records-found)"); r.length && r.find('>td[colspan]:not([colspan="1"])').length;) r = r.next();
                  r.find("> *").each((function (n, i) {
                    var r = t(i),
                      s = n;
                    if (e.options.detailView && !e.options.cardView) {
                      if (0 === n) {
                        var a = o.filter(".detail"),
                          l = a.width() - a.find(".fht-cell").width();
                        a.find(".fht-cell").width(r.innerWidth() - l)
                      }
                      s = n - 1
                    }
                    if (-1 !== s) {
                      var c = o.eq(n),
                        u = c.width() - c.find(".fht-cell").width();
                      c.find(".fht-cell").width(r.innerWidth() - u)
                    }
                  })), this.horizontalScroll()
                }
              }
            }, {
              key: "horizontalScroll",
              value: function () {
                var e = this;
                this.trigger("scroll-body"), this.$tableBody.off("scroll").on("scroll", (function (n) {
                  var i = n.currentTarget;
                  e.options.showHeader && e.options.height && e.$tableHeader.scrollLeft(t(i).scrollLeft()), e.options.showFooter && !e.options.cardView && e.$tableFooter.scrollLeft(t(i).scrollLeft())
                }))
              }
            }, {
              key: "getVisibleFields",
              value: function () {
                var t = [],
                  e = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (var o, r = this.header.fields[Symbol.iterator](); !(e = (o = r.next()).done); e = !0) {
                    var s = o.value,
                      a = this.columns[this.fieldsColumnsIndex[s]];
                    a && a.visible && t.push(s)
                  }
                } catch (t) {
                  n = !0, i = t
                } finally {
                  try {
                    e || null == r.return || r.return()
                  } finally {
                    if (n) throw i
                  }
                }
                return t
              }
            }, {
              key: "initHiddenRows",
              value: function () {
                this.hiddenRows = []
              }
            }, {
              key: "getOptions",
              value: function () {
                var e = t.extend({}, this.options);
                return delete e.data, t.extend(!0, {}, e)
              }
            }, {
              key: "refreshOptions",
              value: function (e) {
                Uo.compareObjects(this.options, e, !0) || (this.options = t.extend(this.options, e), this.trigger("refresh-options", this.options), this.destroy(), this.init())
              }
            }, {
              key: "getData",
              value: function (t) {
                var e = this.options.data;
                if ((this.searchText || this.options.sortName || !Uo.isEmptyObject(this.filterColumns) || !Uo.isEmptyObject(this.filterColumnsPartial)) && (e = this.data), t && t.useCurrentPage && (e = e.slice(this.pageFrom - 1, this.pageTo)), t && !t.includeHiddenRows) {
                  var n = this.getHiddenRows();
                  e = e.filter((function (t) {
                    return -1 === Uo.findIndex(n, t)
                  }))
                }
                return e
              }
            }, {
              key: "getSelections",
              value: function () {
                var t = this;
                return this.data.filter((function (e) {
                  return !0 === e[t.header.stateField]
                }))
              }
            }, {
              key: "getAllSelections",
              value: function () {
                var t = this;
                return this.options.data.filter((function (e) {
                  return !0 === e[t.header.stateField]
                }))
              }
            }, {
              key: "load",
              value: function (t) {
                var e, n = t;
                this.options.pagination && "server" === this.options.sidePagination && (this.options.totalRows = n[this.options.totalField]), this.options.pagination && "server" === this.options.sidePagination && (this.options.totalNotFiltered = n[this.options.totalNotFilteredField]), e = n.fixedScroll, n = Array.isArray(n) ? n : n[this.options.dataField], this.initData(n), this.initSearch(), this.initPagination(), this.initBody(e)
              }
            }, {
              key: "append",
              value: function (t) {
                this.initData(t, "append"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
              }
            }, {
              key: "prepend",
              value: function (t) {
                this.initData(t, "prepend"), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
              }
            }, {
              key: "remove",
              value: function (t) {
                var e, n, i = this.options.data.length;
                if (t.hasOwnProperty("field") && t.hasOwnProperty("values")) {
                  for (e = i - 1; 0 <= e; e--)(n = this.options.data[e]).hasOwnProperty(t.field) && t.values.includes(n[t.field]) && (this.options.data.splice(e, 1), "server" === this.options.sidePagination && (this.options.totalRows -= 1));
                  i === this.options.data.length || (this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
                }
              }
            }, {
              key: "removeAll",
              value: function () {
                0 < this.options.data.length && (this.options.data.splice(0, this.options.data.length), this.initSearch(), this.initPagination(), this.initBody(!0))
              }
            }, {
              key: "insertRow",
              value: function (t) {
                t.hasOwnProperty("index") && t.hasOwnProperty("row") && (this.options.data.splice(t.index, 0, t.row), this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0))
              }
            }, {
              key: "updateRow",
              value: function (e) {
                var n = Array.isArray(e) ? e : [e],
                  i = !0,
                  o = !1,
                  r = void 0;
                try {
                  for (var s, a, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0)(a = s.value).hasOwnProperty("index") && a.hasOwnProperty("row") && (t.extend(this.options.data[a.index], a.row), a.hasOwnProperty("replace") && a.replace ? this.options.data[a.index] = a.row : t.extend(this.options.data[a.index], a.row))
                } catch (e) {
                  o = !0, r = e
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw r
                  }
                }
                this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
              }
            }, {
              key: "getRowByUniqueId",
              value: function (t) {
                var e, n, i, o = this.options.uniqueId,
                  r = t,
                  s = null;
                for (e = this.options.data.length - 1; 0 <= e; e--) {
                  if ((n = this.options.data[e]).hasOwnProperty(o)) i = n[o];
                  else {
                    if (!n._data || !n._data.hasOwnProperty(o)) continue;
                    i = n._data[o]
                  }
                  if ("string" == typeof i ? r = r.toString() : "number" == typeof i && (+i === i && 0 == i % 1 ? r = parseInt(r) : i === +i && 0 !== i && (r = parseFloat(r))), i === r) {
                    s = n;
                    break
                  }
                }
                return s
              }
            }, {
              key: "updateByUniqueId",
              value: function (e) {
                var n = Array.isArray(e) ? e : [e],
                  i = !0,
                  o = !1,
                  r = void 0;
                try {
                  for (var s, a, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0)
                    if ((a = s.value).hasOwnProperty("id") && a.hasOwnProperty("row")) {
                      var c = this.options.data.indexOf(this.getRowByUniqueId(a.id)); - 1 !== c && (a.hasOwnProperty("replace") && a.replace ? this.options.data[c] = a.row : t.extend(this.options.data[c], a.row))
                    }
                } catch (e) {
                  o = !0, r = e
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw r
                  }
                }
                this.initSearch(), this.initPagination(), this.initSort(), this.initBody(!0)
              }
            }, {
              key: "removeByUniqueId",
              value: function (t) {
                var e = this.options.data.length,
                  n = this.getRowByUniqueId(t);
                n && this.options.data.splice(this.options.data.indexOf(n), 1), e === this.options.data.length || (this.initSearch(), this.initPagination(), this.initBody(!0))
              }
            }, {
              key: "updateCell",
              value: function (t) {
                t.hasOwnProperty("index") && t.hasOwnProperty("field") && t.hasOwnProperty("value") && (this.data[t.index][t.field] = t.value, !1 === t.reinit || (this.initSort(), this.initBody(!0)))
              }
            }, {
              key: "updateCellByUniqueId",
              value: function (t) {
                var e = this;
                t.hasOwnProperty("id") && t.hasOwnProperty("field") && t.hasOwnProperty("value") && ((Array.isArray(t) ? t : [t]).forEach((function (t) {
                  var n = t.id,
                    i = t.field,
                    o = t.value,
                    r = e.options.data.indexOf(e.getRowByUniqueId(n)); - 1 === r || (e.options.data[r][i] = o)
                })), !1 === t.reinit || (this.initSort(), this.initBody(!0)))
              }
            }, {
              key: "showRow",
              value: function (t) {
                this._toggleRow(t, !0)
              }
            }, {
              key: "hideRow",
              value: function (t) {
                this._toggleRow(t, !1)
              }
            }, {
              key: "_toggleRow",
              value: function (t, e) {
                var n;
                if (t.hasOwnProperty("index") ? n = this.getData()[t.index] : t.hasOwnProperty("uniqueId") && (n = this.getRowByUniqueId(t.uniqueId)), n) {
                  var i = Uo.findIndex(this.hiddenRows, n);
                  e || -1 !== i ? e && -1 < i && this.hiddenRows.splice(i, 1) : this.hiddenRows.push(n), e ? this.updatePagination() : (this.initBody(!0), this.initPagination())
                }
              }
            }, {
              key: "getHiddenRows",
              value: function (t) {
                if (t) return this.initHiddenRows(), void this.initBody(!0);
                var e = this.getData(),
                  n = [],
                  i = !0,
                  o = !1,
                  r = void 0;
                try {
                  for (var s, a, l = e[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) a = s.value, this.hiddenRows.includes(a) && n.push(a)
                } catch (t) {
                  o = !0, r = t
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw r
                  }
                }
                return this.hiddenRows = n, n
              }
            }, {
              key: "showColumn",
              value: function (t) {
                var e = this;
                (Array.isArray(t) ? t : [t]).forEach((function (t) {
                  e._toggleColumn(e.fieldsColumnsIndex[t], !0, !0)
                }))
              }
            }, {
              key: "hideColumn",
              value: function (t) {
                var e = this;
                (Array.isArray(t) ? t : [t]).forEach((function (t) {
                  e._toggleColumn(e.fieldsColumnsIndex[t], !1, !0)
                }))
              }
            }, {
              key: "_toggleColumn",
              value: function (t, e, n) {
                if (-1 !== t && this.columns[t].visible !== e && (this.columns[t].visible = e, this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns)) {
                  var i = this.$toolbar.find(".keep-open input").prop("disabled", !1);
                  n && i.filter(Uo.sprintf('[value="%s"]', t)).prop("checked", e), i.filter(":checked").length <= this.options.minimumCountColumns && i.filter(":checked").prop("disabled", !0)
                }
              }
            }, {
              key: "getVisibleColumns",
              value: function () {
                return this.columns.filter((function (t) {
                  return t.visible
                }))
              }
            }, {
              key: "getHiddenColumns",
              value: function () {
                return this.columns.filter((function (t) {
                  return !t.visible
                }))
              }
            }, {
              key: "showAllColumns",
              value: function () {
                this._toggleAllColumns(!0)
              }
            }, {
              key: "hideAllColumns",
              value: function () {
                this._toggleAllColumns(!1)
              }
            }, {
              key: "_toggleAllColumns",
              value: function (e) {
                var n = this,
                  i = !0,
                  o = !1,
                  r = void 0;
                try {
                  for (var s, a, l = this.columns.slice().reverse()[Symbol.iterator](); !(i = (s = l.next()).done); i = !0)
                    if ((a = s.value).switchable) {
                      if (!e && this.options.showColumns && this.getVisibleColumns().length === this.options.minimumCountColumns) continue;
                      a.visible = e
                    }
                } catch (e) {
                  o = !0, r = e
                } finally {
                  try {
                    i || null == l.return || l.return()
                  } finally {
                    if (o) throw r
                  }
                }
                if (this.initHeader(), this.initSearch(), this.initPagination(), this.initBody(), this.options.showColumns) {
                  var c = this.$toolbar.find('.keep-open input:not(".toggle-all")').prop("disabled", !1);
                  e ? c.prop("checked", e) : c.get().reverse().forEach((function (i) {
                    c.filter(":checked").length > n.options.minimumCountColumns && t(i).prop("checked", e)
                  })), c.filter(":checked").length <= this.options.minimumCountColumns && c.filter(":checked").prop("disabled", !0)
                }
              }
            }, {
              key: "mergeCells",
              value: function (t) {
                var e, n, i = t.index,
                  o = this.getVisibleFields().indexOf(t.field),
                  r = t.rowspan || 1,
                  s = t.colspan || 1,
                  a = this.$body.find(">tr");
                this.options.detailView && !this.options.cardView && (o += 1);
                var l = a.eq(i).find(">td").eq(o);
                if (!(0 > i || 0 > o || i >= this.data.length)) {
                  for (e = i; e < i + r; e++)
                    for (n = o; n < o + s; n++) a.eq(e).find(">td").eq(n).hide();
                  l.attr("rowspan", r).attr("colspan", s).show()
                }
              }
            }, {
              key: "checkAll",
              value: function () {
                this._toggleCheckAll(!0)
              }
            }, {
              key: "uncheckAll",
              value: function () {
                this._toggleCheckAll(!1)
              }
            }, {
              key: "_toggleCheckAll",
              value: function (t) {
                var e = this.getSelections();
                this.$selectAll.add(this.$selectAll_).prop("checked", t), this.$selectItem.filter(":enabled").prop("checked", t), this.updateRows();
                var n = this.getSelections();
                return t ? void this.trigger("check-all", n, e) : void this.trigger("uncheck-all", n, e)
              }
            }, {
              key: "checkInvert",
              value: function () {
                var e = this.$selectItem.filter(":enabled"),
                  n = e.filter(":checked");
                e.each((function (e, n) {
                  t(n).prop("checked", !t(n).prop("checked"))
                })), this.updateRows(), this.updateSelected(), this.trigger("uncheck-some", n), n = this.getSelections(), this.trigger("check-some", n)
              }
            }, {
              key: "check",
              value: function (t) {
                this._toggleCheck(!0, t)
              }
            }, {
              key: "uncheck",
              value: function (t) {
                this._toggleCheck(!1, t)
              }
            }, {
              key: "_toggleCheck",
              value: function (t, e) {
                var n = this.$selectItem.filter('[data-index="'.concat(e, '"]')),
                  i = this.data[e];
                if (n.is(":radio") || this.options.singleSelect || this.options.multipleSelectRow && !this.multipleSelectRowCtrlKey && !this.multipleSelectRowShiftKey) {
                  var o = !0,
                    r = !1,
                    s = void 0;
                  try {
                    for (var a, l = this.options.data[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) a.value[this.header.stateField] = !1
                  } catch (t) {
                    r = !0, s = t
                  } finally {
                    try {
                      o || null == l.return || l.return()
                    } finally {
                      if (r) throw s
                    }
                  }
                  this.$selectItem.filter(":checked").not(n).prop("checked", !1)
                }
                if (i[this.header.stateField] = t, this.options.multipleSelectRow) {
                  if (this.multipleSelectRowShiftKey && 0 <= this.multipleSelectRowLastSelectedIndex)
                    for (var c = [this.multipleSelectRowLastSelectedIndex, e].sort(), u = c[0] + 1; u < c[1]; u++) this.data[u][this.header.stateField] = !0, this.$selectItem.filter('[data-index="'.concat(u, '"]')).prop("checked", !0);
                  this.multipleSelectRowCtrlKey = !1, this.multipleSelectRowShiftKey = !1, this.multipleSelectRowLastSelectedIndex = t ? e : -1
                }
                n.prop("checked", t), this.updateSelected(), this.trigger(t ? "check" : "uncheck", this.data[e], n)
              }
            }, {
              key: "checkBy",
              value: function (t) {
                this._toggleCheckBy(!0, t)
              }
            }, {
              key: "uncheckBy",
              value: function (t) {
                this._toggleCheckBy(!1, t)
              }
            }, {
              key: "_toggleCheckBy",
              value: function (t, e) {
                var n = this;
                if (e.hasOwnProperty("field") && e.hasOwnProperty("values")) {
                  var i = [];
                  this.data.forEach((function (o, r) {
                    if (!o.hasOwnProperty(e.field)) return !1;
                    if (e.values.includes(o[e.field])) {
                      var s = n.$selectItem.filter(":enabled").filter(Uo.sprintf('[data-index="%s"]', r)).prop("checked", t);
                      o[n.header.stateField] = t, i.push(o), n.trigger(t ? "check" : "uncheck", o, s)
                    }
                  })), this.updateSelected(), this.trigger(t ? "check-some" : "uncheck-some", i)
                }
              }
            }, {
              key: "refresh",
              value: function (t) {
                t && t.url && (this.options.url = t.url), t && t.pageNumber && (this.options.pageNumber = t.pageNumber), t && t.pageSize && (this.options.pageSize = t.pageSize), this.trigger("refresh", this.initServer(t && t.silent, t && t.query, t && t.url))
              }
            }, {
              key: "destroy",
              value: function () {
                this.$el.insertBefore(this.$container), t(this.options.toolbar).insertBefore(this.$el), this.$container.next().remove(), this.$container.remove(), this.$el.html(this.$el_.html()).css("margin-top", "0").attr("class", this.$el_.attr("class") || "")
              }
            }, {
              key: "resetView",
              value: function (t) {
                var e = 0;
                if (t && t.height && (this.options.height = t.height), this.$selectAll.prop("checked", 0 < this.$selectItem.length && this.$selectItem.length === this.$selectItem.filter(":checked").length), this.$tableContainer.toggleClass("has-card-view", this.options.cardView), !this.options.cardView && this.options.showHeader && this.options.height ? (this.$tableHeader.show(), this.resetHeader(), e += this.$header.outerHeight(!0)) : (this.$tableHeader.hide(), this.trigger("post-header")), !this.options.cardView && this.options.showFooter && (this.$tableFooter.show(), this.fitFooter(), this.options.height && (e += this.$tableFooter.outerHeight(!0))), this.options.height) {
                  var n = this.$toolbar.outerHeight(!0),
                    i = this.$pagination.outerHeight(!0),
                    o = this.options.height - n - i,
                    r = this.$tableBody.find("table").outerHeight(!0);
                  this.$tableContainer.css("height", "".concat(o, "px")), this.$tableBorder && this.$tableBorder.css("height", "".concat(o - r - e - 1, "px"))
                }
                this.options.cardView ? (this.$el.css("margin-top", "0"), this.$tableContainer.css("padding-bottom", "0"), this.$tableFooter.hide()) : (this.getCaret(), this.$tableContainer.css("padding-bottom", "".concat(e, "px"))), this.trigger("reset-view")
              }
            }, {
              key: "resetWidth",
              value: function () {
                this.options.showHeader && this.options.height && this.fitHeader(), this.options.showFooter && !this.options.cardView && this.fitFooter()
              }
            }, {
              key: "showLoading",
              value: function () {
                this.$tableLoading.css("display", "flex")
              }
            }, {
              key: "hideLoading",
              value: function () {
                this.$tableLoading.css("display", "none")
              }
            }, {
              key: "togglePagination",
              value: function () {
                this.options.pagination = !this.options.pagination;
                var t = this.options.showButtonIcons ? this.options.pagination ? this.options.icons.paginationSwitchDown : this.options.icons.paginationSwitchUp : "",
                  e = this.options.showButtonText ? this.options.pagination ? this.options.formatPaginationSwitchUp() : this.options.formatPaginationSwitchDown() : "";
                this.$toolbar.find('button[name="paginationSwitch"]').html(Uo.sprintf(this.constants.html.icon, this.options.iconsPrefix, t) + " " + e), this.updatePagination()
              }
            }, {
              key: "toggleFullscreen",
              value: function () {
                this.$el.closest(".bootstrap-table").toggleClass("fullscreen"), this.resetView()
              }
            }, {
              key: "toggleView",
              value: function () {
                this.options.cardView = !this.options.cardView, this.initHeader();
                var t = this.options.showButtonIcons ? this.options.cardView ? this.options.icons.toggleOn : this.options.icons.toggleOff : "",
                  e = this.options.showButtonText ? this.options.cardView ? this.options.formatToggleOff() : this.options.formatToggleOn() : "";
                this.$toolbar.find('button[name="toggle"]').html(Uo.sprintf(this.constants.html.icon, this.options.iconsPrefix, t) + " " + e), this.initBody(), this.trigger("toggle", this.options.cardView)
              }
            }, {
              key: "resetSearch",
              value: function (t) {
                var e = this.$toolbar.find(".search input");
                e.val(t || ""), this.onSearch({
                  currentTarget: e
                })
              }
            }, {
              key: "filterBy",
              value: function (e, n) {
                this.filterOptions = Uo.isEmptyObject(n) ? this.options.filterOptions : t.extend(this.options.filterOptions, n), this.filterColumns = Uo.isEmptyObject(e) ? {} : e, this.options.pageNumber = 1, this.initSearch(), this.updatePagination()
              }
            }, {
              key: "scrollTo",
              value: function (e) {
                if (void 0 === e) return this.$tableBody.scrollTop();
                var n = {
                  unit: "px",
                  value: 0
                };
                "object" === l(e) ? n = Object.assign(n, e) : "string" == typeof e && "bottom" === e ? n.value = this.$tableBody[0].scrollHeight : "string" == typeof e && (n.value = e);
                var i = n.value;
                "rows" === n.unit && (i = 0, this.$body.find("> tr:lt(".concat(n.value, ")")).each((function (e, n) {
                  i += t(n).outerHeight(!0)
                }))), this.$tableBody.scrollTop(i)
              }
            }, {
              key: "getScrollPosition",
              value: function () {
                return this.scrollTo()
              }
            }, {
              key: "selectPage",
              value: function (t) {
                0 < t && t <= this.options.totalPages && (this.options.pageNumber = t, this.updatePagination())
              }
            }, {
              key: "prevPage",
              value: function () {
                1 < this.options.pageNumber && (this.options.pageNumber--, this.updatePagination())
              }
            }, {
              key: "nextPage",
              value: function () {
                this.options.pageNumber < this.options.totalPages && (this.options.pageNumber++, this.updatePagination())
              }
            }, {
              key: "toggleDetailView",
              value: function (t, e) {
                this.$body.find(Uo.sprintf('> tr[data-index="%s"]', t)).next().is("tr.detail-view") ? this.collapseRow(t) : this.expandRow(t, e), this.resetView()
              }
            }, {
              key: "expandRow",
              value: function (t, e) {
                var n = this.data[t],
                  i = this.$body.find(Uo.sprintf('> tr[data-index="%s"][data-has-detail-view]', t));
                if (!i.next().is("tr.detail-view")) {
                  this.options.detailViewIcon && i.find("a.detail-icon").html(Uo.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailClose)), i.after(Uo.sprintf('<tr class="detail-view"><td colspan="%s"></td></tr>', i.children("td").length));
                  var o = i.next().find("td"),
                    r = e || this.options.detailFormatter,
                    s = Uo.calculateObjectValue(this.options, r, [t, n, o], "");
                  1 === o.length && o.append(s), this.trigger("expand-row", t, n, o)
                }
              }
            }, {
              key: "collapseRow",
              value: function (t) {
                var e = this.data[t],
                  n = this.$body.find(Uo.sprintf('> tr[data-index="%s"][data-has-detail-view]', t));
                n.next().is("tr.detail-view") && (this.options.detailViewIcon && n.find("a.detail-icon").html(Uo.sprintf(this.constants.html.icon, this.options.iconsPrefix, this.options.icons.detailOpen)), this.trigger("collapse-row", t, e, n.next()), n.next().remove())
              }
            }, {
              key: "expandAllRows",
              value: function () {
                for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"), n = 0; n < e.length; n++) this.expandRow(t(e[n]).data("index"))
              }
            }, {
              key: "collapseAllRows",
              value: function () {
                for (var e = this.$body.find("> tr[data-index][data-has-detail-view]"), n = 0; n < e.length; n++) this.collapseRow(t(e[n]).data("index"))
              }
            }, {
              key: "updateColumnTitle",
              value: function (e) {
                e.hasOwnProperty("field") && e.hasOwnProperty("title") && (this.columns[this.fieldsColumnsIndex[e.field]].title = this.options.escape ? Uo.escapeHTML(e.title) : e.title, this.columns[this.fieldsColumnsIndex[e.field]].visible) && (void 0 === this.options.height ? this.$header : this.$tableHeader).find("th[data-field]").each((function (n, i) {
                  if (t(i).data("field") === e.field) return t(t(i).find(".th-inner")[0]).text(e.title), !1
                }))
              }
            }, {
              key: "updateFormatText",
              value: function (t, e) {
                /^format/.test(t) && this.options[t] && ("string" == typeof e ? this.options[t] = function () {
                  return e
                } : "function" == typeof e && (this.options[t] = e), this.initToolbar(), this.initPagination(), this.initBody())
              }
            }]), e
          }();
        return Qo.VERSION = Vo.VERSION, Qo.DEFAULTS = Vo.DEFAULTS, Qo.LOCALES = Vo.LOCALES, Qo.COLUMN_DEFAULTS = Vo.COLUMN_DEFAULTS, Qo.METHODS = Vo.METHODS, Qo.EVENTS = Vo.EVENTS, t.BootstrapTable = Qo, t.fn.bootstrapTable = function (e) {
          for (var n = arguments.length, i = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
          var r;
          return this.each((function (n, o) {
            var s = t(o).data("bootstrap.table"),
              a = t.extend({}, Qo.DEFAULTS, t(o).data(), "object" === l(e) && e);
            if ("string" == typeof e) {
              var c;
              if (!Vo.METHODS.includes(e)) throw new Error("Unknown method: ".concat(e));
              if (!s) return;
              r = (c = s)[e].apply(c, i), "destroy" == e && t(o).removeData("bootstrap.table")
            }
            s || t(o).data("bootstrap.table", s = new t.BootstrapTable(o, a))
          })), void 0 === r ? this : r
        }, t.fn.bootstrapTable.Constructor = Qo, t.fn.bootstrapTable.theme = Vo.THEME, t.fn.bootstrapTable.VERSION = Vo.VERSION, t.fn.bootstrapTable.defaults = Qo.DEFAULTS, t.fn.bootstrapTable.columnDefaults = Qo.COLUMN_DEFAULTS, t.fn.bootstrapTable.events = Qo.EVENTS, t.fn.bootstrapTable.locales = Qo.LOCALES, t.fn.bootstrapTable.methods = Qo.METHODS, t.fn.bootstrapTable.utils = Uo, t((function () {
          t('[data-toggle="table"]').bootstrapTable()
        })), Qo
      }(n(0))
    }).call(this, n(4))
  },
  13: function (t, e, n) {},
  14: function (t, e, n) {
    "use strict";
    var i = s(n(0)),
      o = s(n(9)),
      r = n(3);

    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(0, i.default)((function () {
      (0, i.default)('[data-toggle="tooltip"]').tooltip();
      var t = (0, r.getUser)();
      i.default.ajax2 = function (e) {
        i.default.ajax({
          url: e.url,
          type: e.type,
          async: e.async,
          contentType: "application/json",
          data: JSON.stringify(e.data),
          xhrFields: {
            withCredentials: !0
          },
          crossDomain: !0,
          beforeSend: function (e) {
            t && (e.setRequestHeader("mobile", t.mobile), e.setRequestHeader("token", t.token))
          },
          success: function (t, n, i) {
            t.success || ("10000" === t.errCode ? (localStorage.clear(), location.href = "login.html") : "10001" === t.errCode ? o.default.alert("错误信息", t.errMsg, (function () {
              localStorage.clear(), location.href = "login.html"
            })).set({
              label: "知道了"
            }) : o.default.alert("错误信息", t.errMsg).set({
              label: "知道了"
            })), e.success && e.success(t, n, i)
          },
          error: function (t, e, n) {
            o.default.alert("错误信息", e).set({
              label: "知道了"
            })
          },
          complete: function (t, n) {
            e.complete && e.complete(t, n)
          }
        })
      }
    }))
  },
  15: function (t, e, n) {
    "use strict";
    var i, o = n(0),
      r = (i = o) && i.__esModule ? i : {
        default: i
      };
    n(2), n(1), n(16);
    n(5);
    (0, r.default)((function () {
      (0, r.default)("#btn-logout").on("click", (function () {
        localStorage.clear(), location.href = "login.html"
      }))
    }))
  },
  16: function (t, e, n) {},
  2: function (t, e, n) {
    /*!
     * Bootstrap v4.5.0 (https://getbootstrap.com/)
     * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    ! function (t, e, n) {
      "use strict";

      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
      }

      function o(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
      }

      function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }

      function s(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e && (i = i.filter((function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, i)
        }
        return n
      }

      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? s(Object(n), !0).forEach((function (e) {
            r(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }

      function l(t) {
        var n = this,
          i = !1;
        return e(this).one(c.TRANSITION_END, (function () {
          i = !0
        })), setTimeout((function () {
          i || c.triggerTransitionEnd(n)
        }), t), this
      }
      e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, n = n && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
      var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (t) {
          do {
            t += ~~(1e6 * Math.random())
          } while (document.getElementById(t));
          return t
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute("data-target");
          if (!e || "#" === e) {
            var n = t.getAttribute("href");
            e = n && "#" !== n ? n.trim() : ""
          }
          try {
            return document.querySelector(e) ? e : null
          } catch (t) {
            return null
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0;
          var n = e(t).css("transition-duration"),
            i = e(t).css("transition-delay"),
            o = parseFloat(n),
            r = parseFloat(i);
          return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function (t) {
          return t.offsetHeight
        },
        triggerTransitionEnd: function (t) {
          e(t).trigger("transitionend")
        },
        supportsTransitionEnd: function () {
          return Boolean("transitionend")
        },
        isElement: function (t) {
          return (t[0] || t).nodeType
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var o = n[i],
                r = e[i],
                s = r && c.isElement(r) ? "element" : null == (a = r) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
              if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
            } var a
        },
        findShadowRoot: function (t) {
          if (!document.documentElement.attachShadow) return null;
          if ("function" == typeof t.getRootNode) {
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
          }
          return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null
        },
        jQueryDetection: function () {
          if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
          var t = e.fn.jquery.split(" ")[0].split(".");
          if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
      };
      c.jQueryDetection(), e.fn.emulateTransitionEnd = l, e.event.special[c.TRANSITION_END] = {
        bindType: "transitionend",
        delegateType: "transitionend",
        handle: function (t) {
          if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
      };
      var u = "alert",
        d = e.fn[u],
        f = function () {
          function t(t) {
            this._element = t
          }
          var n = t.prototype;
          return n.close = function (t) {
            var e = this._element;
            t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }, n.dispose = function () {
            e.removeData(this._element, "bs.alert"), this._element = null
          }, n._getRootElement = function (t) {
            var n = c.getSelectorFromElement(t),
              i = !1;
            return n && (i = document.querySelector(n)), i || (i = e(t).closest(".alert")[0]), i
          }, n._triggerCloseEvent = function (t) {
            var n = e.Event("close.bs.alert");
            return e(t).trigger(n), n
          }, n._removeElement = function (t) {
            var n = this;
            if (e(t).removeClass("show"), e(t).hasClass("fade")) {
              var i = c.getTransitionDurationFromElement(t);
              e(t).one(c.TRANSITION_END, (function (e) {
                return n._destroyElement(t, e)
              })).emulateTransitionEnd(i)
            } else this._destroyElement(t)
          }, n._destroyElement = function (t) {
            e(t).detach().trigger("closed.bs.alert").remove()
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this),
                o = i.data("bs.alert");
              o || (o = new t(this), i.data("bs.alert", o)), "close" === n && o[n](this)
            }))
          }, t._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this)
            }
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }]), t
        }();
      e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f)), e.fn[u] = f._jQueryInterface, e.fn[u].Constructor = f, e.fn[u].noConflict = function () {
        return e.fn[u] = d, f._jQueryInterface
      };
      var h = e.fn.button,
        p = function () {
          function t(t) {
            this._element = t
          }
          var n = t.prototype;
          return n.toggle = function () {
            var t = !0,
              n = !0,
              i = e(this._element).closest('[data-toggle="buttons"]')[0];
            if (i) {
              var o = this._element.querySelector('input:not([type="hidden"])');
              if (o) {
                if ("radio" === o.type)
                  if (o.checked && this._element.classList.contains("active")) t = !1;
                  else {
                    var r = i.querySelector(".active");
                    r && e(r).removeClass("active")
                  } t && ("checkbox" !== o.type && "radio" !== o.type || (o.checked = !this._element.classList.contains("active")), e(o).trigger("change")), o.focus(), n = !1
              }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"))
          }, n.dispose = function () {
            e.removeData(this._element, "bs.button"), this._element = null
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this).data("bs.button");
              i || (i = new t(this), e(this).data("bs.button", i)), "toggle" === n && i[n]()
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }]), t
        }();
      e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function (t) {
        var n = t.target,
          i = n;
        if (e(n).hasClass("btn") || (n = e(n).closest(".btn")[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) t.preventDefault();
        else {
          var o = n.querySelector('input:not([type="hidden"])');
          if (o && (o.hasAttribute("disabled") || o.classList.contains("disabled"))) return void t.preventDefault();
          "LABEL" === i.tagName && o && "checkbox" === o.type && t.preventDefault(), p._jQueryInterface.call(e(n), "toggle")
        }
      })).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function (t) {
        var n = e(t.target).closest(".btn")[0];
        e(n).toggleClass("focus", /^focus(in)?$/.test(t.type))
      })), e(window).on("load.bs.button.data-api", (function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
          var i = t[e],
            o = i.querySelector('input:not([type="hidden"])');
          o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active")
        }
        for (var r = 0, s = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
          var a = t[r];
          "true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active")
        }
      })), e.fn.button = p._jQueryInterface, e.fn.button.Constructor = p, e.fn.button.noConflict = function () {
        return e.fn.button = h, p._jQueryInterface
      };
      var g = "carousel",
        m = ".bs.carousel",
        v = e.fn[g],
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
        w = {
          TOUCH: "touch",
          PEN: "pen"
        },
        _ = function () {
          function t(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
          }
          var n = t.prototype;
          return n.next = function () {
            this._isSliding || this._slide("next")
          }, n.nextWhenVisible = function () {
            !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
          }, n.prev = function () {
            this._isSliding || this._slide("prev")
          }, n.pause = function (t) {
            t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, n.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, n.to = function (t) {
            var n = this;
            this._activeElement = this._element.querySelector(".active.carousel-item");
            var i = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding) e(this._element).one("slid.bs.carousel", (function () {
                return n.to(t)
              }));
              else {
                if (i === t) return this.pause(), void this.cycle();
                var o = t > i ? "next" : "prev";
                this._slide(o, this._items[t])
              }
          }, n.dispose = function () {
            e(this._element).off(m), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, n._getConfig = function (t) {
            return t = a(a({}, y), t), c.typeCheckConfig(g, t, b), t
          }, n._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
            }
          }, n._addEventListeners = function () {
            var t = this;
            this._config.keyboard && e(this._element).on("keydown.bs.carousel", (function (e) {
              return t._keydown(e)
            })), "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", (function (e) {
              return t.pause(e)
            })).on("mouseleave.bs.carousel", (function (e) {
              return t.cycle(e)
            })), this._config.touch && this._addTouchEventListeners()
          }, n._addTouchEventListeners = function () {
            var t = this;
            if (this._touchSupported) {
              var n = function (e) {
                  t._pointerEvent && w[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                },
                i = function (e) {
                  t._pointerEvent && w[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function (e) {
                    return t.cycle(e)
                  }), 500 + t._config.interval))
                };
              e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", (function (t) {
                return t.preventDefault()
              })), this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", (function (t) {
                return n(t)
              })), e(this._element).on("pointerup.bs.carousel", (function (t) {
                return i(t)
              })), this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", (function (t) {
                return n(t)
              })), e(this._element).on("touchmove.bs.carousel", (function (e) {
                return function (e) {
                  e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                }(e)
              })), e(this._element).on("touchend.bs.carousel", (function (t) {
                return i(t)
              })))
            }
          }, n._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next()
            }
          }, n._getItemIndex = function (t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t)
          }, n._getItemByDirection = function (t, e) {
            var n = "next" === t,
              i = "prev" === t,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
            var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
          }, n._triggerSlideEvent = function (t, n) {
            var i = this._getItemIndex(t),
              o = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
              r = e.Event("slide.bs.carousel", {
                relatedTarget: t,
                direction: n,
                from: o,
                to: i
              });
            return e(this._element).trigger(r), r
          }, n._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
              e(n).removeClass("active");
              var i = this._indicatorsElement.children[this._getItemIndex(t)];
              i && e(i).addClass("active")
            }
          }, n._slide = function (t, n) {
            var i, o, r, s = this,
              a = this._element.querySelector(".active.carousel-item"),
              l = this._getItemIndex(a),
              u = n || a && this._getItemByDirection(t, a),
              d = this._getItemIndex(u),
              f = Boolean(this._interval);
            if ("next" === t ? (i = "carousel-item-left", o = "carousel-item-next", r = "left") : (i = "carousel-item-right", o = "carousel-item-prev", r = "right"), u && e(u).hasClass("active")) this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
              this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(u);
              var h = e.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: r,
                from: l,
                to: d
              });
              if (e(this._element).hasClass("slide")) {
                e(u).addClass(o), c.reflow(u), e(a).addClass(i), e(u).addClass(i);
                var p = parseInt(u.getAttribute("data-interval"), 10);
                p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                var g = c.getTransitionDurationFromElement(a);
                e(a).one(c.TRANSITION_END, (function () {
                  e(u).removeClass(i + " " + o).addClass("active"), e(a).removeClass("active " + o + " " + i), s._isSliding = !1, setTimeout((function () {
                    return e(s._element).trigger(h)
                  }), 0)
                })).emulateTransitionEnd(g)
              } else e(a).removeClass("active"), e(u).addClass("active"), this._isSliding = !1, e(this._element).trigger(h);
              f && this.cycle()
            }
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this).data("bs.carousel"),
                o = a(a({}, y), e(this).data());
              "object" == typeof n && (o = a(a({}, o), n));
              var r = "string" == typeof n ? n : o.slide;
              if (i || (i = new t(this, o), e(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
              else if ("string" == typeof r) {
                if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                i[r]()
              } else o.interval && o.ride && (i.pause(), i.cycle())
            }))
          }, t._dataApiClickHandler = function (n) {
            var i = c.getSelectorFromElement(this);
            if (i) {
              var o = e(i)[0];
              if (o && e(o).hasClass("carousel")) {
                var r = a(a({}, e(o).data()), e(this).data()),
                  s = this.getAttribute("data-slide-to");
                s && (r.interval = !1), t._jQueryInterface.call(e(o), r), s && e(o).data("bs.carousel").to(s), n.preventDefault()
              }
            }
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "Default",
            get: function () {
              return y
            }
          }]), t
        }();
      e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", _._dataApiClickHandler), e(window).on("load.bs.carousel.data-api", (function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = t.length; n < i; n++) {
          var o = e(t[n]);
          _._jQueryInterface.call(o, o.data())
        }
      })), e.fn[g] = _._jQueryInterface, e.fn[g].Constructor = _, e.fn[g].noConflict = function () {
        return e.fn[g] = v, _._jQueryInterface
      };
      var x = "collapse",
        k = e.fn[x],
        T = {
          toggle: !0,
          parent: ""
        },
        C = {
          toggle: "boolean",
          parent: "(string|element)"
        },
        S = function () {
          function t(t, e) {
            this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
              var r = n[i],
                s = c.getSelectorFromElement(r),
                a = [].slice.call(document.querySelectorAll(s)).filter((function (e) {
                  return e === t
                }));
              null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          var n = t.prototype;
          return n.toggle = function () {
            e(this._element).hasClass("show") ? this.hide() : this.show()
          }, n.show = function () {
            var n, i, o = this;
            if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function (t) {
                return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse")
              }))).length && (n = null), n && (i = e(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
              var r = e.Event("show.bs.collapse");
              if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
                n && (t._jQueryInterface.call(e(n).not(this._selector), "hide"), i || e(n).data("bs.collapse", null));
                var s = this._getDimension();
                e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                  l = c.getTransitionDurationFromElement(this._element);
                e(this._element).one(c.TRANSITION_END, (function () {
                  e(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[s] = "", o.setTransitioning(!1), e(o._element).trigger("shown.bs.collapse")
                })).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
              }
            }
          }, n.hide = function () {
            var t = this;
            if (!this._isTransitioning && e(this._element).hasClass("show")) {
              var n = e.Event("hide.bs.collapse");
              if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                var i = this._getDimension();
                this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
                var o = this._triggerArray.length;
                if (o > 0)
                  for (var r = 0; r < o; r++) {
                    var s = this._triggerArray[r],
                      a = c.getSelectorFromElement(s);
                    null !== a && (e([].slice.call(document.querySelectorAll(a))).hasClass("show") || e(s).addClass("collapsed").attr("aria-expanded", !1))
                  }
                this.setTransitioning(!0), this._element.style[i] = "";
                var l = c.getTransitionDurationFromElement(this._element);
                e(this._element).one(c.TRANSITION_END, (function () {
                  t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                })).emulateTransitionEnd(l)
              }
            }
          }, n.setTransitioning = function (t) {
            this._isTransitioning = t
          }, n.dispose = function () {
            e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, n._getConfig = function (t) {
            return (t = a(a({}, T), t)).toggle = Boolean(t.toggle), c.typeCheckConfig(x, t, C), t
          }, n._getDimension = function () {
            return e(this._element).hasClass("width") ? "width" : "height"
          }, n._getParent = function () {
            var n, i = this;
            c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
            var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
              r = [].slice.call(n.querySelectorAll(o));
            return e(r).each((function (e, n) {
              i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
            })), n
          }, n._addAriaAndCollapsedClass = function (t, n) {
            var i = e(t).hasClass("show");
            n.length && e(n).toggleClass("collapsed", !i).attr("aria-expanded", i)
          }, t._getTargetFromElement = function (t) {
            var e = c.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this),
                o = i.data("bs.collapse"),
                r = a(a(a({}, T), i.data()), "object" == typeof n && n ? n : {});
              if (!o && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n]()
              }
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "Default",
            get: function () {
              return T
            }
          }]), t
        }();
      e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = e(this),
          i = c.getSelectorFromElement(this),
          o = [].slice.call(document.querySelectorAll(i));
        e(o).each((function () {
          var t = e(this),
            i = t.data("bs.collapse") ? "toggle" : n.data();
          S._jQueryInterface.call(t, i)
        }))
      })), e.fn[x] = S._jQueryInterface, e.fn[x].Constructor = S, e.fn[x].noConflict = function () {
        return e.fn[x] = k, S._jQueryInterface
      };
      var E = "dropdown",
        O = e.fn[E],
        A = new RegExp("38|40|27"),
        N = {
          offset: 0,
          flip: !0,
          boundary: "scrollParent",
          reference: "toggle",
          display: "dynamic",
          popperConfig: null
        },
        D = {
          offset: "(number|string|function)",
          flip: "boolean",
          boundary: "(string|element)",
          reference: "(string|element)",
          display: "string",
          popperConfig: "(null|object)"
        },
        j = function () {
          function t(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
          }
          var i = t.prototype;
          return i.toggle = function () {
            if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
              var n = e(this._menu).hasClass("show");
              t._clearMenus(), n || this.show(!0)
            }
          }, i.show = function (i) {
            if (void 0 === i && (i = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
              var o = {
                  relatedTarget: this._element
                },
                r = e.Event("show.bs.dropdown", o),
                s = t._getParentFromElement(this._element);
              if (e(s).trigger(r), !r.isDefaultPrevented()) {
                if (!this._inNavbar && i) {
                  if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                  var a = this._element;
                  "parent" === this._config.reference ? a = s : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(s).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
                }
                "ontouchstart" in document.documentElement && 0 === e(s).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(s).toggleClass("show").trigger(e.Event("shown.bs.dropdown", o))
              }
            }
          }, i.hide = function () {
            if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
              var n = {
                  relatedTarget: this._element
                },
                i = e.Event("hide.bs.dropdown", n),
                o = t._getParentFromElement(this._element);
              e(o).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", n)))
            }
          }, i.dispose = function () {
            e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
          }, i.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
          }, i._addEventListeners = function () {
            var t = this;
            e(this._element).on("click.bs.dropdown", (function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle()
            }))
          }, i._getConfig = function (t) {
            return t = a(a(a({}, this.constructor.Default), e(this._element).data()), t), c.typeCheckConfig(E, t, this.constructor.DefaultType), t
          }, i._getMenuElement = function () {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(".dropdown-menu"))
            }
            return this._menu
          }, i._getPlacement = function () {
            var t = e(this._element.parentNode),
              n = "bottom-start";
            return t.hasClass("dropup") ? n = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? n = "right-start" : t.hasClass("dropleft") ? n = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (n = "bottom-end"), n
          }, i._detectNavbar = function () {
            return e(this._element).closest(".navbar").length > 0
          }, i._getOffset = function () {
            var t = this,
              e = {};
            return "function" == typeof this._config.offset ? e.fn = function (e) {
              return e.offsets = a(a({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e
            } : e.offset = this._config.offset, e
          }, i._getPopperConfig = function () {
            var t = {
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
            return "static" === this._config.display && (t.modifiers.applyStyle = {
              enabled: !1
            }), a(a({}, t), this._config.popperConfig)
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this).data("bs.dropdown");
              if (i || (i = new t(this, "object" == typeof n ? n : null), e(this).data("bs.dropdown", i)), "string" == typeof n) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]()
              }
            }))
          }, t._clearMenus = function (n) {
            if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
              for (var i = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), o = 0, r = i.length; o < r; o++) {
                var s = t._getParentFromElement(i[o]),
                  a = e(i[o]).data("bs.dropdown"),
                  l = {
                    relatedTarget: i[o]
                  };
                if (n && "click" === n.type && (l.clickEvent = n), a) {
                  var c = a._menu;
                  if (e(s).hasClass("show") && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && e.contains(s, n.target))) {
                    var u = e.Event("hide.bs.dropdown", l);
                    e(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), i[o].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), e(c).removeClass("show"), e(s).removeClass("show").trigger(e.Event("hidden.bs.dropdown", l)))
                  }
                }
              }
          }, t._getParentFromElement = function (t) {
            var e, n = c.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode
          }, t._dataApiKeydownHandler = function (n) {
            if (!(/input|textarea/i.test(n.target.tagName) ? 32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || e(n.target).closest(".dropdown-menu").length) : !A.test(n.which)) && !this.disabled && !e(this).hasClass("disabled")) {
              var i = t._getParentFromElement(this),
                o = e(i).hasClass("show");
              if (o || 27 !== n.which) {
                if (n.preventDefault(), n.stopPropagation(), !o || o && (27 === n.which || 32 === n.which)) return 27 === n.which && e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
                var r = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function (t) {
                  return e(t).is(":visible")
                }));
                if (0 !== r.length) {
                  var s = r.indexOf(n.target);
                  38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                }
              }
            }
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "Default",
            get: function () {
              return N
            }
          }, {
            key: "DefaultType",
            get: function () {
              return D
            }
          }]), t
        }();
      e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", j._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', (function (t) {
        t.preventDefault(), t.stopPropagation(), j._jQueryInterface.call(e(this), "toggle")
      })).on("click.bs.dropdown.data-api", ".dropdown form", (function (t) {
        t.stopPropagation()
      })), e.fn[E] = j._jQueryInterface, e.fn[E].Constructor = j, e.fn[E].noConflict = function () {
        return e.fn[E] = O, j._jQueryInterface
      };
      var P = e.fn.modal,
        I = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        L = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        H = function () {
          function t(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
          }
          var n = t.prototype;
          return n.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }, n.show = function (t) {
            var n = this;
            if (!this._isShown && !this._isTransitioning) {
              e(this._element).hasClass("fade") && (this._isTransitioning = !0);
              var i = e.Event("show.bs.modal", {
                relatedTarget: t
              });
              e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', (function (t) {
                return n.hide(t)
              })), e(this._dialog).on("mousedown.dismiss.bs.modal", (function () {
                e(n._element).one("mouseup.dismiss.bs.modal", (function (t) {
                  e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                }))
              })), this._showBackdrop((function () {
                return n._showElement(t)
              })))
            }
          }, n.hide = function (t) {
            var n = this;
            if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
              var i = e.Event("hide.bs.modal");
              if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                this._isShown = !1;
                var o = e(this._element).hasClass("fade");
                if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), o) {
                  var r = c.getTransitionDurationFromElement(this._element);
                  e(this._element).one(c.TRANSITION_END, (function (t) {
                    return n._hideModal(t)
                  })).emulateTransitionEnd(r)
                } else this._hideModal()
              }
            }
          }, n.dispose = function () {
            [window, this._element, this._dialog].forEach((function (t) {
              return e(t).off(".bs.modal")
            })), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
          }, n.handleUpdate = function () {
            this._adjustDialog()
          }, n._getConfig = function (t) {
            return t = a(a({}, I), t), c.typeCheckConfig("modal", t, L), t
          }, n._triggerBackdropTransition = function () {
            var t = this;
            if ("static" === this._config.backdrop) {
              var n = e.Event("hidePrevented.bs.modal");
              if (e(this._element).trigger(n), n.defaultPrevented) return;
              this._element.classList.add("modal-static");
              var i = c.getTransitionDurationFromElement(this._element);
              e(this._element).one(c.TRANSITION_END, (function () {
                t._element.classList.remove("modal-static")
              })).emulateTransitionEnd(i), this._element.focus()
            } else this.hide()
          }, n._showElement = function (t) {
            var n = this,
              i = e(this._element).hasClass("fade"),
              o = this._dialog ? this._dialog.querySelector(".modal-body") : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), e(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
              }),
              s = function () {
                n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
              };
            if (i) {
              var a = c.getTransitionDurationFromElement(this._dialog);
              e(this._dialog).one(c.TRANSITION_END, s).emulateTransitionEnd(a)
            } else s()
          }, n._enforceFocus = function () {
            var t = this;
            e(document).off("focusin.bs.modal").on("focusin.bs.modal", (function (n) {
              document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
            }))
          }, n._setEscapeEvent = function () {
            var t = this;
            this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", (function (e) {
              t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition()
            })) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal")
          }, n._setResizeEvent = function () {
            var t = this;
            this._isShown ? e(window).on("resize.bs.modal", (function (e) {
              return t.handleUpdate(e)
            })) : e(window).off("resize.bs.modal")
          }, n._hideModal = function () {
            var t = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function () {
              e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal")
            }))
          }, n._removeBackdrop = function () {
            this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
          }, n._showBackdrop = function (t) {
            var n = this,
              i = e(this._element).hasClass("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", (function (t) {
                  n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && n._triggerBackdropTransition()
                })), i && c.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
              if (!i) return void t();
              var o = c.getTransitionDurationFromElement(this._backdrop);
              e(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(o)
            } else if (!this._isShown && this._backdrop) {
              e(this._backdrop).removeClass("show");
              var r = function () {
                n._removeBackdrop(), t && t()
              };
              if (e(this._element).hasClass("fade")) {
                var s = c.getTransitionDurationFromElement(this._backdrop);
                e(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
              } else r()
            } else t && t()
          }, n._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, n._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, n._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, n._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              var n = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                i = [].slice.call(document.querySelectorAll(".sticky-top"));
              e(n).each((function (n, i) {
                var o = i.style.paddingRight,
                  r = e(i).css("padding-right");
                e(i).data("padding-right", o).css("padding-right", parseFloat(r) + t._scrollbarWidth + "px")
              })), e(i).each((function (n, i) {
                var o = i.style.marginRight,
                  r = e(i).css("margin-right");
                e(i).data("margin-right", o).css("margin-right", parseFloat(r) - t._scrollbarWidth + "px")
              }));
              var o = document.body.style.paddingRight,
                r = e(document.body).css("padding-right");
              e(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
            }
            e(document.body).addClass("modal-open")
          }, n._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
            e(t).each((function (t, n) {
              var i = e(n).data("padding-right");
              e(n).removeData("padding-right"), n.style.paddingRight = i || ""
            }));
            var n = [].slice.call(document.querySelectorAll(".sticky-top"));
            e(n).each((function (t, n) {
              var i = e(n).data("margin-right");
              void 0 !== i && e(n).css("margin-right", i).removeData("margin-right")
            }));
            var i = e(document.body).data("padding-right");
            e(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
          }, n._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e
          }, t._jQueryInterface = function (n, i) {
            return this.each((function () {
              var o = e(this).data("bs.modal"),
                r = a(a(a({}, I), e(this).data()), "object" == typeof n && n ? n : {});
              if (o || (o = new t(this, r), e(this).data("bs.modal", o)), "string" == typeof n) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n](i)
              } else r.show && o.show(i)
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "Default",
            get: function () {
              return I
            }
          }]), t
        }();
      e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function (t) {
        var n, i = this,
          o = c.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var r = e(n).data("bs.modal") ? "toggle" : a(a({}, e(n).data()), e(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var s = e(n).one("show.bs.modal", (function (t) {
          t.isDefaultPrevented() || s.one("hidden.bs.modal", (function () {
            e(i).is(":visible") && i.focus()
          }))
        }));
        H._jQueryInterface.call(e(n), r, this)
      })), e.fn.modal = H._jQueryInterface, e.fn.modal.Constructor = H, e.fn.modal.noConflict = function () {
        return e.fn.modal = P, H._jQueryInterface
      };
      var R = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        F = {
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
        B = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        M = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

      function $(t, e, n) {
        if (0 === t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = [].slice.call(i.body.querySelectorAll("*")), s = function (t, n) {
            var i = r[t],
              s = i.nodeName.toLowerCase();
            if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            var a = [].slice.call(i.attributes),
              l = [].concat(e["*"] || [], e[s] || []);
            a.forEach((function (t) {
              (function (t, e) {
                var n = t.nodeName.toLowerCase();
                if (-1 !== e.indexOf(n)) return -1 === R.indexOf(n) || Boolean(t.nodeValue.match(B) || t.nodeValue.match(M));
                for (var i = e.filter((function (t) {
                    return t instanceof RegExp
                  })), o = 0, r = i.length; o < r; o++)
                  if (n.match(i[o])) return !0;
                return !1
              })(t, l) || i.removeAttribute(t.nodeName)
            }))
          }, a = 0, l = r.length; a < l; a++) s(a);
        return i.body.innerHTML
      }
      var q = "tooltip",
        V = e.fn[q],
        z = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        W = ["sanitize", "whiteList", "sanitizeFn"],
        U = {
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
        G = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left"
        },
        Q = {
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
          whiteList: F,
          popperConfig: null
        },
        X = {
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
          function t(t, e) {
            if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          var i = t.prototype;
          return i.enable = function () {
            this._isEnabled = !0
          }, i.disable = function () {
            this._isEnabled = !1
          }, i.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }, i.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var n = this.constructor.DATA_KEY,
                  i = e(t.currentTarget).data(n);
                i || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
              } else {
                if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                this._enter(null, this)
              }
          }, i.dispose = function () {
            clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
          }, i.show = function () {
            var t = this;
            if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
            var i = e.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              e(this.element).trigger(i);
              var o = c.findShadowRoot(this.element),
                r = e.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !r) return;
              var s = this.getTipElement(),
                a = c.getUID(this.constructor.NAME);
              s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && e(s).addClass("fade");
              var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                u = this._getAttachment(l);
              this.addAttachmentClass(u);
              var d = this._getContainer();
              e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(u)), e(s).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);
              var f = function () {
                t.config.animation && t._fixTransition();
                var n = t._hoverState;
                t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === n && t._leave(null, t)
              };
              if (e(this.tip).hasClass("fade")) {
                var h = c.getTransitionDurationFromElement(this.tip);
                e(this.tip).one(c.TRANSITION_END, f).emulateTransitionEnd(h)
              } else f()
            }
          }, i.hide = function (t) {
            var n = this,
              i = this.getTipElement(),
              o = e.Event(this.constructor.Event.HIDE),
              r = function () {
                "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), e(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t()
              };
            if (e(this.element).trigger(o), !o.isDefaultPrevented()) {
              if (e(i).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
                var s = c.getTransitionDurationFromElement(i);
                e(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
              } else r();
              this._hoverState = ""
            }
          }, i.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
          }, i.isWithContent = function () {
            return Boolean(this.getTitle())
          }, i.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass("bs-tooltip-" + t)
          }, i.getTipElement = function () {
            return this.tip = this.tip || e(this.config.template)[0], this.tip
          }, i.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show")
          }, i.setElementContent = function (t, n) {
            "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = $(n, this.config.whiteList, this.config.sanitizeFn)), t.html(n)) : t.text(n) : this.config.html ? e(n).parent().is(t) || t.empty().append(n) : t.text(e(n).text())
          }, i.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
          }, i._getPopperConfig = function (t) {
            var e = this;
            return a(a({}, {
              placement: t,
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
              onCreate: function (t) {
                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t)
              }
            }), this.config.popperConfig)
          }, i._getOffset = function () {
            var t = this,
              e = {};
            return "function" == typeof this.config.offset ? e.fn = function (e) {
              return e.offsets = a(a({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e
            } : e.offset = this.config.offset, e
          }, i._getContainer = function () {
            return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container)
          }, i._getAttachment = function (t) {
            return G[t.toUpperCase()]
          }, i._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach((function (n) {
              if ("click" === n) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, (function (e) {
                return t.toggle(e)
              }));
              else if ("manual" !== n) {
                var i = "hover" === n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                  o = "hover" === n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                e(t.element).on(i, t.config.selector, (function (e) {
                  return t._enter(e)
                })).on(o, t.config.selector, (function (e) {
                  return t._leave(e)
                }))
              }
            })), this._hideModalHandler = function () {
              t.element && t.hide()
            }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = a(a({}, this.config), {}, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle()
          }, i._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, i._enter = function (t, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(n.getTipElement()).hasClass("show") || "show" === n._hoverState ? n._hoverState = "show" : (clearTimeout(n._timeout), n._hoverState = "show", n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function () {
              "show" === n._hoverState && n.show()
            }), n.config.delay.show) : n.show())
          }, i._leave = function (t, n) {
            var i = this.constructor.DATA_KEY;
            (n = n || e(t.currentTarget).data(i)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), t && (n._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function () {
              "out" === n._hoverState && n.hide()
            }), n.config.delay.hide) : n.hide())
          }, i._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1
          }, i._getConfig = function (t) {
            var n = e(this.element).data();
            return Object.keys(n).forEach((function (t) {
              -1 !== W.indexOf(t) && delete n[t]
            })), "number" == typeof (t = a(a(a({}, this.constructor.Default), n), "object" == typeof t && t ? t : {})).delay && (t.delay = {
              show: t.delay,
              hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c.typeCheckConfig(q, t, this.constructor.DefaultType), t.sanitize && (t.template = $(t.template, t.whiteList, t.sanitizeFn)), t
          }, i._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
          }, i._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              n = t.attr("class").match(z);
            null !== n && n.length && t.removeClass(n.join(""))
          }, i._handlePopperPlacementChange = function (t) {
            this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
          }, i._fixTransition = function () {
            var t = this.getTipElement(),
              n = this.config.animation;
            null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this).data("bs.tooltip"),
                o = "object" == typeof n && n;
              if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, o), e(this).data("bs.tooltip", i)), "string" == typeof n)) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]()
              }
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "Default",
            get: function () {
              return Q
            }
          }, {
            key: "NAME",
            get: function () {
              return q
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip"
            }
          }, {
            key: "Event",
            get: function () {
              return X
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.tooltip"
            }
          }, {
            key: "DefaultType",
            get: function () {
              return U
            }
          }]), t
        }();
      e.fn[q] = K._jQueryInterface, e.fn[q].Constructor = K, e.fn[q].noConflict = function () {
        return e.fn[q] = V, K._jQueryInterface
      };
      var Y = "popover",
        J = e.fn[Y],
        Z = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        tt = a(a({}, K.Default), {}, {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        et = a(a({}, K.DefaultType), {}, {
          content: "(string|element|function)"
        }),
        nt = {
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
        it = function (t) {
          var n, i;

          function r() {
            return t.apply(this, arguments) || this
          }
          i = t, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
          var s = r.prototype;
          return s.isWithContent = function () {
            return this.getTitle() || this._getContent()
          }, s.addAttachmentClass = function (t) {
            e(this.getTipElement()).addClass("bs-popover-" + t)
          }, s.getTipElement = function () {
            return this.tip = this.tip || e(this.config.template)[0], this.tip
          }, s.setContent = function () {
            var t = e(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var n = this._getContent();
            "function" == typeof n && (n = n.call(this.element)), this.setElementContent(t.find(".popover-body"), n), t.removeClass("fade show")
          }, s._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
          }, s._cleanTipClass = function () {
            var t = e(this.getTipElement()),
              n = t.attr("class").match(Z);
            null !== n && n.length > 0 && t.removeClass(n.join(""))
          }, r._jQueryInterface = function (t) {
            return this.each((function () {
              var n = e(this).data("bs.popover"),
                i = "object" == typeof t ? t : null;
              if ((n || !/dispose|hide/.test(t)) && (n || (n = new r(this, i), e(this).data("bs.popover", n)), "string" == typeof t)) {
                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                n[t]()
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
              return tt
            }
          }, {
            key: "NAME",
            get: function () {
              return Y
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return "bs.popover"
            }
          }, {
            key: "Event",
            get: function () {
              return nt
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return ".bs.popover"
            }
          }, {
            key: "DefaultType",
            get: function () {
              return et
            }
          }]), r
        }(K);
      e.fn[Y] = it._jQueryInterface, e.fn[Y].Constructor = it, e.fn[Y].noConflict = function () {
        return e.fn[Y] = J, it._jQueryInterface
      };
      var ot = "scrollspy",
        rt = e.fn[ot],
        st = {
          offset: 10,
          method: "auto",
          target: ""
        },
        at = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        lt = function () {
          function t(t, n) {
            var i = this;
            this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on("scroll.bs.scrollspy", (function (t) {
              return i._process(t)
            })), this.refresh(), this._process()
          }
          var n = t.prototype;
          return n.refresh = function () {
            var t = this,
              n = this._scrollElement === this._scrollElement.window ? "offset" : "position",
              i = "auto" === this._config.method ? n : this._config.method,
              o = "position" === i ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function (t) {
              var n, r = c.getSelectorFromElement(t);
              if (r && (n = document.querySelector(r)), n) {
                var s = n.getBoundingClientRect();
                if (s.width || s.height) return [e(n)[i]().top + o, r]
              }
              return null
            })).filter((function (t) {
              return t
            })).sort((function (t, e) {
              return t[0] - e[0]
            })).forEach((function (e) {
              t._offsets.push(e[0]), t._targets.push(e[1])
            }))
          }, n.dispose = function () {
            e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, n._getConfig = function (t) {
            if ("string" != typeof (t = a(a({}, st), "object" == typeof t && t ? t : {})).target && c.isElement(t.target)) {
              var n = e(t.target).attr("id");
              n || (n = c.getUID(ot), e(t.target).attr("id", n)), t.target = "#" + n
            }
            return c.typeCheckConfig(ot, t, at), t
          }, n._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, n._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, n._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
          }, n._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= n) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i)
            } else {
              if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
              for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
          }, n._activate = function (t) {
            this._activeTarget = t, this._clear();
            var n = this._selector.split(",").map((function (e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              })),
              i = e([].slice.call(document.querySelectorAll(n.join(","))));
            i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass("active"), i.addClass("active")) : (i.addClass("active"), i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), e(this._scrollElement).trigger("activate.bs.scrollspy", {
              relatedTarget: t
            })
          }, n._clear = function () {
            [].slice.call(document.querySelectorAll(this._selector)).filter((function (t) {
              return t.classList.contains("active")
            })).forEach((function (t) {
              return t.classList.remove("active")
            }))
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this).data("bs.scrollspy");
              if (i || (i = new t(this, "object" == typeof n && n), e(this).data("bs.scrollspy", i)), "string" == typeof n) {
                if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                i[n]()
              }
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "Default",
            get: function () {
              return st
            }
          }]), t
        }();
      e(window).on("load.bs.scrollspy.data-api", (function () {
        for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = t.length; n--;) {
          var i = e(t[n]);
          lt._jQueryInterface.call(i, i.data())
        }
      })), e.fn[ot] = lt._jQueryInterface, e.fn[ot].Constructor = lt, e.fn[ot].noConflict = function () {
        return e.fn[ot] = rt, lt._jQueryInterface
      };
      var ct = e.fn.tab,
        ut = function () {
          function t(t) {
            this._element = t
          }
          var n = t.prototype;
          return n.show = function () {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
              var n, i, o = e(this._element).closest(".nav, .list-group")[0],
                r = c.getSelectorFromElement(this._element);
              if (o) {
                var s = "UL" === o.nodeName || "OL" === o.nodeName ? "> li > .active" : ".active";
                i = (i = e.makeArray(e(o).find(s)))[i.length - 1]
              }
              var a = e.Event("hide.bs.tab", {
                  relatedTarget: this._element
                }),
                l = e.Event("show.bs.tab", {
                  relatedTarget: i
                });
              if (i && e(i).trigger(a), e(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                r && (n = document.querySelector(r)), this._activate(this._element, o);
                var u = function () {
                  var n = e.Event("hidden.bs.tab", {
                      relatedTarget: t._element
                    }),
                    o = e.Event("shown.bs.tab", {
                      relatedTarget: i
                    });
                  e(i).trigger(n), e(t._element).trigger(o)
                };
                n ? this._activate(n, n.parentNode, u) : u()
              }
            }
          }, n.dispose = function () {
            e.removeData(this._element, "bs.tab"), this._element = null
          }, n._activate = function (t, n, i) {
            var o = this,
              r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? e(n).children(".active") : e(n).find("> li > .active"))[0],
              s = i && r && e(r).hasClass("fade"),
              a = function () {
                return o._transitionComplete(t, r, i)
              };
            if (r && s) {
              var l = c.getTransitionDurationFromElement(r);
              e(r).removeClass("show").one(c.TRANSITION_END, a).emulateTransitionEnd(l)
            } else a()
          }, n._transitionComplete = function (t, n, i) {
            if (n) {
              e(n).removeClass("active");
              var o = e(n.parentNode).find("> .dropdown-menu .active")[0];
              o && e(o).removeClass("active"), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
            }
            if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), c.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
              var r = e(t).closest(".dropdown")[0];
              if (r) {
                var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));
                e(s).addClass("active")
              }
              t.setAttribute("aria-expanded", !0)
            }
            i && i()
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this),
                o = i.data("bs.tab");
              if (o || (o = new t(this), i.data("bs.tab", o)), "string" == typeof n) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n]()
              }
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }]), t
        }();
      e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function (t) {
        t.preventDefault(), ut._jQueryInterface.call(e(this), "show")
      })), e.fn.tab = ut._jQueryInterface, e.fn.tab.Constructor = ut, e.fn.tab.noConflict = function () {
        return e.fn.tab = ct, ut._jQueryInterface
      };
      var dt = e.fn.toast,
        ft = {
          animation: "boolean",
          autohide: "boolean",
          delay: "number"
        },
        ht = {
          animation: !0,
          autohide: !0,
          delay: 500
        },
        pt = function () {
          function t(t, e) {
            this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners()
          }
          var n = t.prototype;
          return n.show = function () {
            var t = this,
              n = e.Event("show.bs.toast");
            if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
              this._config.animation && this._element.classList.add("fade");
              var i = function () {
                t._element.classList.remove("showing"), t._element.classList.add("show"), e(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout((function () {
                  t.hide()
                }), t._config.delay))
              };
              if (this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
                var o = c.getTransitionDurationFromElement(this._element);
                e(this._element).one(c.TRANSITION_END, i).emulateTransitionEnd(o)
              } else i()
            }
          }, n.hide = function () {
            if (this._element.classList.contains("show")) {
              var t = e.Event("hide.bs.toast");
              e(this._element).trigger(t), t.isDefaultPrevented() || this._close()
            }
          }, n.dispose = function () {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), e(this._element).off("click.dismiss.bs.toast"), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null
          }, n._getConfig = function (t) {
            return t = a(a(a({}, ht), e(this._element).data()), "object" == typeof t && t ? t : {}), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t
          }, n._setListeners = function () {
            var t = this;
            e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', (function () {
              return t.hide()
            }))
          }, n._close = function () {
            var t = this,
              n = function () {
                t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast")
              };
            if (this._element.classList.remove("show"), this._config.animation) {
              var i = c.getTransitionDurationFromElement(this._element);
              e(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
            } else n()
          }, t._jQueryInterface = function (n) {
            return this.each((function () {
              var i = e(this),
                o = i.data("bs.toast");
              if (o || (o = new t(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
                if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                o[n](this)
              }
            }))
          }, o(t, null, [{
            key: "VERSION",
            get: function () {
              return "4.5.0"
            }
          }, {
            key: "DefaultType",
            get: function () {
              return ft
            }
          }, {
            key: "Default",
            get: function () {
              return ht
            }
          }]), t
        }();
      e.fn.toast = pt._jQueryInterface, e.fn.toast.Constructor = pt, e.fn.toast.noConflict = function () {
        return e.fn.toast = dt, pt._jQueryInterface
      }, t.Alert = f, t.Button = p, t.Carousel = _, t.Collapse = S, t.Dropdown = j, t.Modal = H, t.Popover = it, t.Scrollspy = lt, t.Tab = ut, t.Toast = pt, t.Tooltip = K, t.Util = c, Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }(e, n(0), n(6))
  },
  20: function (t, e, n) {
    "use strict";
    (function (n) {
      var i, o, r;
      o = [], void 0 === (r = "function" == typeof (i = function () {
        var t;
        (t = n).fn.bootstrapTable.locales["zh-CN"] = {
          formatLoadingMessage: function () {
            return "玩命加载中..."
          },
          formatRecordsPerPage: function (t) {
            return "每页显示 " + t + " 条记录"
          },
          formatShowingRows: function (t, e, n) {
            return "显示第 " + t + " 到第 " + e + " 条记录，总共 " + n + " 条记录"
          },
          formatDetailPagination: function (t) {
            return "总共 " + t + " 条记录"
          },
          formatSearch: function () {
            return "搜索"
          },
          formatNoMatches: function () {
            return "没有找到匹配的记录！"
          },
          formatPaginationSwitch: function () {
            return "隐藏/显示分页"
          },
          formatRefresh: function () {
            return "刷新"
          },
          formatToggle: function () {
            return "切换"
          },
          formatColumns: function () {
            return "列"
          },
          formatFullscreen: function () {
            return "全屏"
          },
          formatAllRows: function () {
            return "所有"
          },
          formatAutoRefresh: function () {
            return "自动刷新"
          },
          formatExport: function () {
            return "导出数据"
          },
          formatClearFilters: function () {
            return "清空过滤"
          },
          formatJumpto: function () {
            return "跳转"
          },
          formatAdvancedSearch: function () {
            return "高级搜索"
          },
          formatAdvancedCloseButton: function () {
            return "关闭"
          }
        }, t.extend(t.fn.bootstrapTable.defaults, t.fn.bootstrapTable.locales["zh-CN"])
      }) ? i.apply(e, o) : i) || (t.exports = r)
    }).call(this, n(0))
  },
  21: function (t, e, n) {
    var i, o, r;
    o = [n(0)], void 0 === (r = "function" == typeof (i = function (t) {
      var e, n = t(window),
        i = "ActiveXObject" in window,
        o = navigator.userAgent.match(/Chrome\/(\d+)/);
      o && (o = +o[1]);
      var r = i || 51 < o,
        s = "bsSuggest",
        a = "onDataRequestSuccess",
        l = "disabled",
        c = !0,
        u = !1;

      function d(t) {
        return void 0 === t
      }

      function f(t) {
        return t.data()
      }

      function h(t, e) {
        return d(e) ? t.attr("alt") : t.attr("alt", e)
      }

      function p(t, e) {
        return void 0 !== e ? t.attr("data-id", e) : t.attr("data-id")
      }

      function g(t, e, n) {
        if (e && e.key) {
          var i, o, r = n.separator || ",",
            s = p(t);
          n && n.multiWord ? ((i = t.val().split(r))[i.length - 1] = e.key, s ? (o = s.split(r)).push(e.id) : o = [e.id], p(t, o.join(r)).val(i.join(r)).focus()) : p(t, e.id || "").val(e.key).focus(), t.data("pre-val", t.val()).trigger("onSetSelectValue", [e, (n.data.value || n._lastData.value)[e.index]])
        }
      }

      function m(t, e, o) {
        if (e.is(":visible")) {
          var r = t.parent(),
            s = r.height(),
            a = r.width();
          o.autoDropup && setTimeout((function () {
            var i = t.offset().top,
              o = n.scrollTop(),
              s = e.height();
            n.height() + o - i < s && s + o < i ? r.addClass("dropup") : r.removeClass("dropup")
          }), 10);
          var l = {};
          return "left" === o.listAlign ? l = {
            left: t.siblings("div").width() - a,
            right: "auto"
          } : "right" === o.listAlign && (l = {
            left: "auto",
            right: 0
          }), i && !o.showBtn && (r.hasClass("dropup") ? (l.top = "auto", l.bottom = s) : (l.top = s, l.bottom = "auto")), o.autoMinWidth || (l.minWidth = a), e.css(l), t
        }
      }

      function v(t, e) {
        var n, i, o;
        if (-1 === e.indexId && !e.idField || e.multiWord) return t;
        i = e.inputBgColor, o = e.inputWarnColor;
        var r = t.val(),
          s = t.data("pre-val");
        return p(t) || !r ? (t.css("background", i || ""), !r && s && t.trigger("onUnsetSelectValue").data("pre-val", "")) : (n = t.css("backgroundColor").replace(/ /g, "").split(",", 3).join(","), ~o.indexOf(n) || t.trigger("onUnsetSelectValue").data("pre-val", "").css("background", o)), t
      }

      function y(t, e, n) {
        var i, o, r = t.parent().find("tbody tr." + n.listHoverCSS);
        r.length && (i = (r.index() + 3) * r.height(), (o = +e.css("maxHeight").replace("px", "")) < i || e.scrollTop() > o ? i -= o : i = 0, e.scrollTop(i))
      }

      function b(t, e) {
        t.find("tr." + e.listHoverCSS).removeClass(e.listHoverCSS)
      }

      function w(t) {
        var e, n = c;
        for (e in t)
          if ("value" === e) {
            n = u;
            break
          } return n ? (window.console && window.console.trace, u) : t.value.length ? t : u
      }

      function _(e, n) {
        var i = n.effectiveFields;
        return !("__index" === e || i.length && !~t.inArray(e, i))
      }

      function x(t, e, n, i) {
        n.html('<div style="padding:10px 5px 5px">' + t + "</div>").show(), m(e, n, i)
      }

      function k(t, e) {
        var n = t.parent().find("ul:eq(0)");
        n.is(":visible") || (n.show(), t.trigger("onShowDropdown", [e ? e.data.value : []]))
      }

      function T(t, e) {
        var n = t.parent().find("ul:eq(0)");
        n.is(":visible") && (n.hide(), t.trigger("onHideDropdown", [e ? e.data.value : []]))
      }

      function C(e, n, i) {
        var o, s, a, l, c, u, f = e.parent().find("ul:eq(0)"),
          h = 0,
          p = ['<table class="table table-condensed table-sm" style="margin:0">'],
          g = n.value;
        if (!n || !(o = g.length)) return i.emptyTip ? x(i.emptyTip, e, f, i) : (f.empty(), T(e, i)), e;
        if (i._lastData && JSON.stringify(i._lastData) === JSON.stringify(n) && f.find("tr").length === o) return k(e, i), m(e, f, i);
        i._lastData = n;
        var v, y = i.effectiveFields.length ? i.effectiveFields : t.map(g[0], (function (t, e) {
          return e
        }));
        for (i.showHeader && (p.push("<thead><tr>"), t.each(y, (function (t, e) {
            _(e, i) && (p.push("<th>", i.effectiveFieldsAlias[e] || e, 0 === t ? "(" + o + ")" : "", "</th>"), t++)
          })), p.push("</tr></thead>")), p.push("<tbody>"), s = 0; s < o; s++) {
          for (a in h = 0, l = [], c = (v = g[s])[i.idField], u = v[i.keyField], v) d(u) && i.indexKey === h && (u = v[a]), d(c) && i.indexId === h && (c = v[a]), h++;
          t.each(y, (function (t, e) {
            _(e, i) && l.push('<td data-name="', e, '">', v[e], "</td>")
          })), p.push('<tr data-index="', v.__index || s, '" data-id="', c, '" data-key="', u, '">', l.join(""), "</tr>")
        }
        return p.push("</tbody></table>"), f.html(p.join("")), k(e, i), setTimeout((function () {
          if (!r) {
            var t = f.find("table:eq(0)"),
              e = 0,
              n = 0;
            f.height() < t.height() && +f.css("minWidth").replace("px", "") < f.width() && (e = 18, n = 20), f.css("paddingRight", e), t.css("marginBottom", n)
          }
        }), 301), m(e, f, i), e
      }

      function S(e, n) {
        n = n || "";
        var i = e._preAjax;
        i && i.abort && 4 !== i.readyState && i.abort();
        var o = {
          type: "GET",
          dataType: e.jsonp ? "jsonp" : "json",
          timeout: 5e3
        };
        e.jsonp && (o.jsonp = e.jsonp);
        var r, s = e.fnAdjustAjaxParam;
        if (t.isFunction(s)) {
          if (r = s(n, e), u === r) return;
          t.extend(o, r)
        }
        return o.url = function () {
          if (!n || o.data) return o.url || e.url;
          var t = "?";
          return /=$/.test(e.url) ? t = "" : /\?/.test(e.url) && (t = "&"), e.url + t + encodeURIComponent(n)
        }(), e._preAjax = t.ajax(o).done((function (t) {
          e.data = e.fnProcessData(t)
        })).fail((function (t) {
          e.fnAjaxFail && e.fnAjaxFail(t, e)
        }))
      }

      function E(e, n, i, o) {
        return i = t.trim(i), o.ignorecase && (e = e.toLocaleLowerCase(), i = i.toLocaleLowerCase()), i && (_(n, o) || (r = n, s = o, ~t.inArray(r, s.searchFields))) && (~i.indexOf(e) || o.twoWayMatch && ~e.indexOf(i));
        var r, s
      }
      var O = {
          url: null,
          jsonp: null,
          data: {
            value: []
          },
          indexId: 0,
          indexKey: 0,
          idField: "",
          keyField: "",
          autoSelect: c,
          allowNoKeyword: c,
          getDataMethod: "firstByUrl",
          delayUntilKeyup: u,
          ignorecase: u,
          effectiveFields: [],
          effectiveFieldsAlias: {},
          searchFields: [],
          twoWayMatch: c,
          multiWord: u,
          separator: ",",
          delay: 300,
          emptyTip: "",
          searchingTip: "搜索中...",
          hideOnSelect: u,
          autoDropup: u,
          autoMinWidth: u,
          showHeader: u,
          showBtn: c,
          inputBgColor: "",
          inputWarnColor: "rgba(255,0,0,.1)",
          listStyle: {
            "padding-top": 0,
            "max-height": "375px",
            "max-width": "800px",
            overflow: "auto",
            width: "auto",
            transition: "0.3s",
            "-webkit-transition": "0.3s",
            "-moz-transition": "0.3s",
            "-o-transition": "0.3s",
            "word-break": "keep-all",
            "white-space": "nowrap"
          },
          listAlign: "left",
          listHoverStyle: "background: #07d; color:#fff",
          listHoverCSS: "jhover",
          clearable: u,
          keyLeft: 37,
          keyUp: 38,
          keyRight: 39,
          keyDown: 40,
          keyEnter: 13,
          fnProcessData: function (t) {
            return w(t)
          },
          fnGetData: function (e, n, i, o) {
            var r, s, l, c, u = {
                value: []
              },
              d = o.fnPreprocessKeyword;
            if (e = e || "", t.isFunction(d) && (e = d(e, o)), o.url) {
              var f;
              o.searchingTip && (f = setTimeout((function () {
                x(o.searchingTip, n, n.parent().find("ul"), o)
              }), 600)), S(o, e).done((function (t) {
                i(n, o.data, o), n.trigger(a, t), "firstByUrl" === o.getDataMethod && (o.url = null)
              })).always((function () {
                f && clearTimeout(f)
              }))
            } else {
              if (w(r = o.data))
                if (e) {
                  for (c = r.value.length, s = 0; s < c; s++)
                    for (l in r.value[s])
                      if (r.value[s][l] && E(e, l, r.value[s][l] + "", o)) {
                        u.value.push(r.value[s]), u.value[u.value.length - 1].__index = s;
                        break
                      }
                } else u = r;
              i(n, u, o)
            }
          },
          fnAdjustAjaxParam: null,
          fnPreprocessKeyword: null,
          fnAjaxFail: null
        },
        A = {
          init: function (n) {
            var i = this;
            return d((n = n || {}).showHeader) && n.effectiveFields && 1 < n.effectiveFields.length && (n.showHeader = c), (n = t.extend(c, {}, O, n)).processData && (n.fnProcessData = n.processData), n.getData && (n.fnGetData = n.getData), "firstByUrl" === n.getDataMethod && n.url && !n.delayUntilKeyup && S(n).done((function (t) {
              n.url = null, i.trigger(a, t)
            })), t("#" + s).length || t("head:eq(0)").append('<style id="' + s + '">.' + n.listHoverCSS + "{" + n.listHoverStyle + "}</style>"), i.each((function () {
              var i, o, r, a, d, w, _, x = t(this),
                S = x.parent(),
                E = (a = n, d = (r = x).prev("i.clearable"), a.clearable && !d.length && (d = t('<i class="clearable glyphicon glyphicon-remove fa fa-plus"></i>').prependTo(r.parent())), d.css({
                  position: "absolute",
                  top: "calc(50% - 6px)",
                  transform: "rotate(45deg)",
                  zIndex: 4,
                  cursor: "pointer",
                  width: "14px",
                  lineHeight: "14px",
                  textAlign: "center",
                  fontSize: 12
                }).hide()),
                O = S.find("ul:eq(0)");
              O.parent().css("position", "relative"), w = x, _ = n, (!O.length || w.data(s) ? u : (w.data(s, {
                options: _
              }), c)) && (n.showBtn || (x.css("borderRadius", 4), S.css("width", "100%").find(".btn:eq(0)").hide()), x.removeClass(l).prop(l, u).attr("autocomplete", "off"), O.css(n.listStyle), n.inputBgColor || (n.inputBgColor = x.css("backgroundColor")), x.on("keydown", (function (t) {
                var e, i;
                if (O.is(":visible")) {
                  if (e = O.find("." + n.listHoverCSS), i = "", b(O, n), t.keyCode === n.keyDown) {
                    if (e.length ? e.next().length ? i = f(e.next().mouseover()) : n.autoSelect && p(x, "").val(h(x)) : i = f(O.find("tbody tr:first").mouseover()), y(x, O, n), !n.autoSelect) return
                  } else if (t.keyCode === n.keyUp) {
                    if (e.length ? e.prev().length ? i = f(e.prev().mouseover()) : n.autoSelect && p(x, "").val(h(x)) : i = f(O.find("tbody tr:last").mouseover()), y(x, O, n), !n.autoSelect) return
                  } else t.keyCode === n.keyEnter ? (i = f(e), T(x, n)) : p(x, "");
                  g(x, i, n)
                } else p(x, "")
              })).on("compositionstart", (function (t) {
                e = c
              })).on("compositionend", (function (t) {
                e = u
              })).on("keyup input paste", (function (i) {
                var r;
                i.keyCode && v(x, n), ~t.inArray(i.keyCode, [n.keyDown, n.keyUp, n.keyEnter]) ? x.val(x.val()) : (clearTimeout(o), o = setTimeout((function () {
                  e || (r = x.val(), t.trim(r) && r === h(x) || (h(x, r), n.multiWord && (r = r.split(n.separator).reverse()[0]), (r.length || n.allowNoKeyword) && n.fnGetData(t.trim(r), x, C, n)))
                }), n.delay || 300))
              })).on("focus", (function () {
                m(x, O, n)
              })).on("blur", (function () {
                i || T(x, n)
              })).on("click", (function () {
                var e = x.val();
                if (t.trim(e) && e === h(x) && O.find("table tr").length) return k(x, n);
                O.is(":visible") || (n.multiWord && (e = e.split(n.separator).reverse()[0]), (e.length || n.allowNoKeyword) && n.fnGetData(t.trim(e), x, C, n))
              })), S.find(".btn:eq(0)").attr("data-toggle", "").click((function () {
                if (O.is(":visible")) T(x, n);
                else {
                  if (n.url) {
                    if (x.click().focus(), !O.find("tr").length) return u
                  } else C(x, n.data, n);
                  k(x, n)
                }
                return u
              })), O.mouseenter((function () {
                i = 1, x.blur()
              })).mouseleave((function () {
                i = 0, x.focus()
              })).on("mouseenter", "tbody tr", (function () {
                return b(O, n), t(this).addClass(n.listHoverCSS), u
              })).on("mousedown", "tbody tr", (function () {
                var e = f(t(this));
                g(x, e, n), h(x, e.key), v(x, n), n.hideOnSelect && T(x, n)
              })), E.length && (E.click((function () {
                p(x, "").val(""), v(x, n)
              })), S.mouseenter((function () {
                x.prop(l) || E.css("right", n.showBtn ? Math.max(x.next().width(), 33) + 2 : 12).show()
              })).mouseleave((function () {
                E.hide()
              }))))
            }))
          },
          show: function () {
            return this.each((function () {
              t(this).click()
            }))
          },
          hide: function () {
            return this.each((function () {
              T(t(this))
            }))
          },
          disable: function () {
            return this.each((function () {
              t(this).attr(l, c).parent().find(".btn:eq(0)").prop(l, c)
            }))
          },
          enable: function () {
            return this.each((function () {
              t(this).attr(l, u).parent().find(".btn:eq(0)").prop(l, u)
            }))
          },
          destroy: function () {
            return this.each((function () {
              t(this).off().removeData(s).removeAttr("style").parent().find(".btn:eq(0)").off().show().attr("data-toggle", "dropdown").prop(l, u).next().css("display", "").off()
            }))
          },
          version: function () {
            return "0.1.28"
          }
        };
      t.fn[s] = function (e) {
        if ("string" == typeof e && A[e]) {
          var n = c;
          return this.each((function () {
            if (!t(this).data(s)) return n = u
          })), n || "init" === e || "version" === e ? A[e].apply(this, [].slice.call(arguments, 1)) : this
        }
        return A.init.apply(this, arguments)
      }
    }) ? i.apply(e, o) : i) || (t.exports = r)
  },
  3: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getQueryString = function (t) {
      var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
        n = window.location.search.substr(1).match(e);
      return null != n ? decodeURI(n[2]) : null
    }, e.getUser = function () {
      var t = localStorage.getItem("user");
      return t ? JSON.parse(t) : null
    }
  },
  4: function (t, e) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || new Function("return this")()
    } catch (t) {
      "object" == typeof window && (n = window)
    }
    t.exports = n
  },
  5: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.config = {
      apiAdmin: "https://www.feeair.com:9000",
      hbApi: "http://hb.feeair.com",
      api: "https://www.feeair.com/wp-json"
    }
  },
  6: function (t, e, n) {
    "use strict";
    n.r(e),
      function (t) {
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
            for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1)
              if (n && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
            return 0
          }();
        var o = n && window.Promise ? function (t) {
          var e = !1;
          return function () {
            e || (e = !0, window.Promise.resolve().then((function () {
              e = !1, t()
            })))
          }
        } : function (t) {
          var e = !1;
          return function () {
            e || (e = !0, setTimeout((function () {
              e = !1, t()
            }), i))
          }
        };

        function r(t) {
          return t && "[object Function]" === {}.toString.call(t)
        }

        function s(t, e) {
          if (1 !== t.nodeType) return [];
          var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
          return e ? n[e] : n
        }

        function a(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host
        }

        function l(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case "HTML":
            case "BODY":
              return t.ownerDocument.body;
            case "#document":
              return t.body
          }
          var e = s(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
          return /(auto|scroll|overlay)/.test(n + o + i) ? t : l(a(t))
        }

        function c(t) {
          return t && t.referenceNode ? t.referenceNode : t
        }
        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
          d = n && /MSIE 10/.test(navigator.userAgent);

        function f(t) {
          return 11 === t ? u : 10 === t ? d : u || d
        }

        function h(t) {
          if (!t) return document.documentElement;
          for (var e = f(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? h(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
        }

        function p(t) {
          return null !== t.parentNode ? p(t.parentNode) : t
        }

        function g(t, e) {
          if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
          var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
          r.setStart(i, 0), r.setEnd(o, 0);
          var s, a, l = r.commonAncestorContainer;
          if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && h(s.firstElementChild) !== s ? h(l) : l;
          var c = p(t);
          return c.host ? g(c.host, e) : g(t, p(e).host)
        }

        function m(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === e ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var o = t.ownerDocument.documentElement,
              r = t.ownerDocument.scrollingElement || o;
            return r[n]
          }
          return t[n]
        }

        function v(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = m(e, "top"),
            o = m(e, "left"),
            r = n ? -1 : 1;
          return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
        }

        function y(t, e) {
          var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return parseFloat(t["border" + n + "Width"]) + parseFloat(t["border" + i + "Width"])
        }

        function b(t, e, n, i) {
          return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], f(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
        }

        function w(t) {
          var e = t.body,
            n = t.documentElement,
            i = f(10) && getComputedStyle(n);
          return {
            height: b("Height", e, n, i),
            width: b("Width", e, n, i)
          }
        }
        var _ = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          },
          x = function () {
            function t(t, e) {
              for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
              }
            }
            return function (e, n, i) {
              return n && t(e.prototype, n), i && t(e, i), e
            }
          }(),
          k = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[e] = n, t
          },
          T = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          };

        function C(t) {
          return T({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
          })
        }

        function S(t) {
          var e = {};
          try {
            if (f(10)) {
              e = t.getBoundingClientRect();
              var n = m(t, "top"),
                i = m(t, "left");
              e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
          } catch (t) {}
          var o = {
              left: e.left,
              top: e.top,
              width: e.right - e.left,
              height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? w(t.ownerDocument) : {},
            a = r.width || t.clientWidth || o.width,
            l = r.height || t.clientHeight || o.height,
            c = t.offsetWidth - a,
            u = t.offsetHeight - l;
          if (c || u) {
            var d = s(t);
            c -= y(d, "x"), u -= y(d, "y"), o.width -= c, o.height -= u
          }
          return C(o)
        }

        function E(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = f(10),
            o = "HTML" === e.nodeName,
            r = S(t),
            a = S(e),
            c = l(t),
            u = s(e),
            d = parseFloat(u.borderTopWidth),
            h = parseFloat(u.borderLeftWidth);
          n && o && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
          var p = C({
            top: r.top - a.top - d,
            left: r.left - a.left - h,
            width: r.width,
            height: r.height
          });
          if (p.marginTop = 0, p.marginLeft = 0, !i && o) {
            var g = parseFloat(u.marginTop),
              m = parseFloat(u.marginLeft);
            p.top -= d - g, p.bottom -= d - g, p.left -= h - m, p.right -= h - m, p.marginTop = g, p.marginLeft = m
          }
          return (i && !n ? e.contains(c) : e === c && "BODY" !== c.nodeName) && (p = v(p, e)), p
        }

        function O(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = t.ownerDocument.documentElement,
            i = E(t, n),
            o = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            s = e ? 0 : m(n),
            a = e ? 0 : m(n, "left"),
            l = {
              top: s - i.top + i.marginTop,
              left: a - i.left + i.marginLeft,
              width: o,
              height: r
            };
          return C(l)
        }

        function A(t) {
          var e = t.nodeName;
          if ("BODY" === e || "HTML" === e) return !1;
          if ("fixed" === s(t, "position")) return !0;
          var n = a(t);
          return !!n && A(n)
        }

        function N(t) {
          if (!t || !t.parentElement || f()) return document.documentElement;
          for (var e = t.parentElement; e && "none" === s(e, "transform");) e = e.parentElement;
          return e || document.documentElement
        }

        function D(t, e, n, i) {
          var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = {
              top: 0,
              left: 0
            },
            s = o ? N(t) : g(t, c(e));
          if ("viewport" === i) r = O(s, o);
          else {
            var u = void 0;
            "scrollParent" === i ? "BODY" === (u = l(a(e))).nodeName && (u = t.ownerDocument.documentElement) : u = "window" === i ? t.ownerDocument.documentElement : i;
            var d = E(u, s, o);
            if ("HTML" !== u.nodeName || A(s)) r = d;
            else {
              var f = w(t.ownerDocument),
                h = f.height,
                p = f.width;
              r.top += d.top - d.marginTop, r.bottom = h + d.top, r.left += d.left - d.marginLeft, r.right = p + d.left
            }
          }
          var m = "number" == typeof (n = n || 0);
          return r.left += m ? n : n.left || 0, r.top += m ? n : n.top || 0, r.right -= m ? n : n.right || 0, r.bottom -= m ? n : n.bottom || 0, r
        }

        function j(t) {
          return t.width * t.height
        }

        function P(t, e, n, i, o) {
          var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === t.indexOf("auto")) return t;
          var s = D(n, i, r, o),
            a = {
              top: {
                width: s.width,
                height: e.top - s.top
              },
              right: {
                width: s.right - e.right,
                height: s.height
              },
              bottom: {
                width: s.width,
                height: s.bottom - e.bottom
              },
              left: {
                width: e.left - s.left,
                height: s.height
              }
            },
            l = Object.keys(a).map((function (t) {
              return T({
                key: t
              }, a[t], {
                area: j(a[t])
              })
            })).sort((function (t, e) {
              return e.area - t.area
            })),
            c = l.filter((function (t) {
              var e = t.width,
                i = t.height;
              return e >= n.clientWidth && i >= n.clientHeight
            })),
            u = c.length > 0 ? c[0].key : l[0].key,
            d = t.split("-")[1];
          return u + (d ? "-" + d : "")
        }

        function I(t, e, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            o = i ? N(e) : g(e, c(n));
          return E(n, o, i)
        }

        function L(t) {
          var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
          return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
          }
        }

        function H(t) {
          var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
          };
          return t.replace(/left|right|bottom|top/g, (function (t) {
            return e[t]
          }))
        }

        function R(t, e, n) {
          n = n.split("-")[0];
          var i = L(t),
            o = {
              width: i.width,
              height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
          return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[H(a)], o
        }

        function F(t, e) {
          return Array.prototype.find ? t.find(e) : t.filter(e)[0]
        }

        function B(t, e, n) {
          return (void 0 === n ? t : t.slice(0, function (t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex((function (t) {
              return t[e] === n
            }));
            var i = F(t, (function (t) {
              return t[e] === n
            }));
            return t.indexOf(i)
          }(t, "name", n))).forEach((function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && r(n) && (e.offsets.popper = C(e.offsets.popper), e.offsets.reference = C(e.offsets.reference), e = n(e, t))
          })), e
        }

        function M() {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {}
            };
            t.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = P(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = R(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = B(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
          }
        }

        function $(t, e) {
          return t.some((function (t) {
            var n = t.name;
            return t.enabled && n === e
          }))
        }

        function q(t) {
          for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
              r = o ? "" + o + n : t;
            if (void 0 !== document.body.style[r]) return r
          }
          return null
        }

        function V() {
          return this.state.isDestroyed = !0, $(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[q("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function z(t) {
          var e = t.ownerDocument;
          return e ? e.defaultView : window
        }

        function W(t, e, n, i) {
          n.updateBound = i, z(t).addEventListener("resize", n.updateBound, {
            passive: !0
          });
          var o = l(t);
          return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName,
              s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
              passive: !0
            }), r || t(l(s.parentNode), n, i, o), o.push(s)
          }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
        }

        function U() {
          this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function G() {
          var t, e;
          this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, z(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach((function (t) {
            t.removeEventListener("scroll", e.updateBound)
          })), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
        }

        function Q(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
        }

        function X(t, e) {
          Object.keys(e).forEach((function (n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && Q(e[n]) && (i = "px"), t.style[n] = e[n] + i
          }))
        }
        var K = n && /Firefox/i.test(navigator.userAgent);

        function Y(t, e, n) {
          var i = F(t, (function (t) {
              return t.name === e
            })),
            o = !!i && t.some((function (t) {
              return t.name === n && t.enabled && t.order < i.order
            }));
          if (!o) {
            var r = "`" + e + "`",
              s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
          }
          return o
        }
        var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
          Z = J.slice(3);

        function tt(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = Z.indexOf(t),
            i = Z.slice(n + 1).concat(Z.slice(0, n));
          return e ? i.reverse() : i
        }
        var et = "flip",
          nt = "clockwise",
          it = "counterclockwise";

        function ot(t, e, n, i) {
          var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map((function (t) {
              return t.trim()
            })),
            a = s.indexOf(F(s, (function (t) {
              return -1 !== t.search(/,|\s/)
            })));
          s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
          var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
          return (c = c.map((function (t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width",
              s = !1;
            return t.reduce((function (t, e) {
              return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }), []).map((function (t) {
              return function (t, e, n, i) {
                var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                  r = +o[1],
                  s = o[2];
                if (!r) return t;
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
                  return C(a)[e] / 100 * r
                }
                if ("vh" === s || "vw" === s) {
                  return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r
                }
                return r
              }(t, o, e, n)
            }))
          }))).forEach((function (t, e) {
            t.forEach((function (n, i) {
              Q(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
            }))
          })), o
        }
        var rt = {
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
                fn: function (t) {
                  var e = t.placement,
                    n = e.split("-")[0],
                    i = e.split("-")[1];
                  if (i) {
                    var o = t.offsets,
                      r = o.reference,
                      s = o.popper,
                      a = -1 !== ["bottom", "top"].indexOf(n),
                      l = a ? "left" : "top",
                      c = a ? "width" : "height",
                      u = {
                        start: k({}, l, r[l]),
                        end: k({}, l, r[l] + r[c] - s[c])
                      };
                    t.offsets.popper = T({}, s, u[i])
                  }
                  return t
                }
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (t, e) {
                  var n = e.offset,
                    i = t.placement,
                    o = t.offsets,
                    r = o.popper,
                    s = o.reference,
                    a = i.split("-")[0],
                    l = void 0;
                  return l = Q(+n) ? [+n, 0] : ot(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                },
                offset: 0
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (t, e) {
                  var n = e.boundariesElement || h(t.instance.popper);
                  t.instance.reference === n && (n = h(n));
                  var i = q("transform"),
                    o = t.instance.popper.style,
                    r = o.top,
                    s = o.left,
                    a = o[i];
                  o.top = "", o.left = "", o[i] = "";
                  var l = D(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                  o.top = r, o.left = s, o[i] = a, e.boundaries = l;
                  var c = e.priority,
                    u = t.offsets.popper,
                    d = {
                      primary: function (t) {
                        var n = u[t];
                        return u[t] < l[t] && !e.escapeWithReference && (n = Math.max(u[t], l[t])), k({}, t, n)
                      },
                      secondary: function (t) {
                        var n = "right" === t ? "left" : "top",
                          i = u[n];
                        return u[t] > l[t] && !e.escapeWithReference && (i = Math.min(u[n], l[t] - ("right" === t ? u.width : u.height))), k({}, n, i)
                      }
                    };
                  return c.forEach((function (t) {
                    var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                    u = T({}, u, d[e](t))
                  })), t.offsets.popper = u, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (t) {
                  var e = t.offsets,
                    n = e.popper,
                    i = e.reference,
                    o = t.placement.split("-")[0],
                    r = Math.floor,
                    s = -1 !== ["top", "bottom"].indexOf(o),
                    a = s ? "right" : "bottom",
                    l = s ? "left" : "top",
                    c = s ? "width" : "height";
                  return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                }
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (t, e) {
                  var n;
                  if (!Y(t.instance.modifiers, "arrow", "keepTogether")) return t;
                  var i = e.element;
                  if ("string" == typeof i) {
                    if (!(i = t.instance.popper.querySelector(i))) return t
                  } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                  var o = t.placement.split("-")[0],
                    r = t.offsets,
                    a = r.popper,
                    l = r.reference,
                    c = -1 !== ["left", "right"].indexOf(o),
                    u = c ? "height" : "width",
                    d = c ? "Top" : "Left",
                    f = d.toLowerCase(),
                    h = c ? "left" : "top",
                    p = c ? "bottom" : "right",
                    g = L(i)[u];
                  l[p] - g < a[f] && (t.offsets.popper[f] -= a[f] - (l[p] - g)), l[f] + g > a[p] && (t.offsets.popper[f] += l[f] + g - a[p]), t.offsets.popper = C(t.offsets.popper);
                  var m = l[f] + l[u] / 2 - g / 2,
                    v = s(t.instance.popper),
                    y = parseFloat(v["margin" + d]),
                    b = parseFloat(v["border" + d + "Width"]),
                    w = m - t.offsets.popper[f] - y - b;
                  return w = Math.max(Math.min(a[u] - g, w), 0), t.arrowElement = i, t.offsets.arrow = (k(n = {}, f, Math.round(w)), k(n, h, ""), n), t
                },
                element: "[x-arrow]"
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (t, e) {
                  if ($(t.instance.modifiers, "inner")) return t;
                  if (t.flipped && t.placement === t.originalPlacement) return t;
                  var n = D(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                    i = t.placement.split("-")[0],
                    o = H(i),
                    r = t.placement.split("-")[1] || "",
                    s = [];
                  switch (e.behavior) {
                    case et:
                      s = [i, o];
                      break;
                    case nt:
                      s = tt(i);
                      break;
                    case it:
                      s = tt(i, !0);
                      break;
                    default:
                      s = e.behavior
                  }
                  return s.forEach((function (a, l) {
                    if (i !== a || s.length === l + 1) return t;
                    i = t.placement.split("-")[0], o = H(i);
                    var c = t.offsets.popper,
                      u = t.offsets.reference,
                      d = Math.floor,
                      f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                      h = d(c.left) < d(n.left),
                      p = d(c.right) > d(n.right),
                      g = d(c.top) < d(n.top),
                      m = d(c.bottom) > d(n.bottom),
                      v = "left" === i && h || "right" === i && p || "top" === i && g || "bottom" === i && m,
                      y = -1 !== ["top", "bottom"].indexOf(i),
                      b = !!e.flipVariations && (y && "start" === r && h || y && "end" === r && p || !y && "start" === r && g || !y && "end" === r && m),
                      w = !!e.flipVariationsByContent && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && m || !y && "end" === r && g),
                      _ = b || w;
                    (f || v || _) && (t.flipped = !0, (f || v) && (i = s[l + 1]), _ && (r = function (t) {
                      return "end" === t ? "start" : "start" === t ? "end" : t
                    }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = T({}, t.offsets.popper, R(t.instance.popper, t.offsets.reference, t.placement)), t = B(t.instance.modifiers, t, "flip"))
                  })), t
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
                fn: function (t) {
                  var e = t.placement,
                    n = e.split("-")[0],
                    i = t.offsets,
                    o = i.popper,
                    r = i.reference,
                    s = -1 !== ["left", "right"].indexOf(n),
                    a = -1 === ["top", "left"].indexOf(n);
                  return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = H(e), t.offsets.popper = C(o), t
                }
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (t) {
                  if (!Y(t.instance.modifiers, "hide", "preventOverflow")) return t;
                  var e = t.offsets.reference,
                    n = F(t.instance.modifiers, (function (t) {
                      return "preventOverflow" === t.name
                    })).boundaries;
                  if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                    if (!0 === t.hide) return t;
                    t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                  } else {
                    if (!1 === t.hide) return t;
                    t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                  }
                  return t
                }
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (t, e) {
                  var n = e.x,
                    i = e.y,
                    o = t.offsets.popper,
                    r = F(t.instance.modifiers, (function (t) {
                      return "applyStyle" === t.name
                    })).gpuAcceleration;
                  void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                  var s = void 0 !== r ? r : e.gpuAcceleration,
                    a = h(t.instance.popper),
                    l = S(a),
                    c = {
                      position: o.position
                    },
                    u = function (t, e) {
                      var n = t.offsets,
                        i = n.popper,
                        o = n.reference,
                        r = Math.round,
                        s = Math.floor,
                        a = function (t) {
                          return t
                        },
                        l = r(o.width),
                        c = r(i.width),
                        u = -1 !== ["left", "right"].indexOf(t.placement),
                        d = -1 !== t.placement.indexOf("-"),
                        f = e ? u || d || l % 2 == c % 2 ? r : s : a,
                        h = e ? r : a;
                      return {
                        left: f(l % 2 == 1 && c % 2 == 1 && !d && e ? i.left - 1 : i.left),
                        top: h(i.top),
                        bottom: h(i.bottom),
                        right: f(i.right)
                      }
                    }(t, window.devicePixelRatio < 2 || !K),
                    d = "bottom" === n ? "top" : "bottom",
                    f = "right" === i ? "left" : "right",
                    p = q("transform"),
                    g = void 0,
                    m = void 0;
                  if (m = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, g = "right" === f ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + g + "px, " + m + "px, 0)", c[d] = 0, c[f] = 0, c.willChange = "transform";
                  else {
                    var v = "bottom" === d ? -1 : 1,
                      y = "right" === f ? -1 : 1;
                    c[d] = m * v, c[f] = g * y, c.willChange = d + ", " + f
                  }
                  var b = {
                    "x-placement": t.placement
                  };
                  return t.attributes = T({}, b, t.attributes), t.styles = T({}, c, t.styles), t.arrowStyles = T({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (t) {
                  var e, n;
                  return X(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach((function (t) {
                    !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                  })), t.arrowElement && Object.keys(t.arrowStyles).length && X(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function (t, e, n, i, o) {
                  var r = I(o, e, t, n.positionFixed),
                    s = P(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                  return e.setAttribute("x-placement", s), X(e, {
                    position: n.positionFixed ? "fixed" : "absolute"
                  }), n
                },
                gpuAcceleration: void 0
              }
            }
          },
          st = function () {
            function t(e, n) {
              var i = this,
                s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
              _(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
              }, this.update = o(this.update.bind(this)), this.options = T({}, t.Defaults, s), this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
              }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, t.Defaults.modifiers, s.modifiers)).forEach((function (e) {
                i.options.modifiers[e] = T({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
              })), this.modifiers = Object.keys(this.options.modifiers).map((function (t) {
                return T({
                  name: t
                }, i.options.modifiers[t])
              })).sort((function (t, e) {
                return t.order - e.order
              })), this.modifiers.forEach((function (t) {
                t.enabled && r(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
              })), this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), this.state.eventsEnabled = a
            }
            return x(t, [{
              key: "update",
              value: function () {
                return M.call(this)
              }
            }, {
              key: "destroy",
              value: function () {
                return V.call(this)
              }
            }, {
              key: "enableEventListeners",
              value: function () {
                return U.call(this)
              }
            }, {
              key: "disableEventListeners",
              value: function () {
                return G.call(this)
              }
            }]), t
          }();
        st.Utils = ("undefined" != typeof window ? window : t).PopperUtils, st.placements = J, st.Defaults = rt, e.default = st
      }.call(this, n(4))
  },
  7: function (t, e, n) {
    "use strict";
    var i, o = n(0),
      r = (i = o) && i.__esModule ? i : {
        default: i
      };
    n(2), n(1), n(8);
    var s = n(3);
    (0, r.default)((function () {
      var t = (0, s.getUser)();
      t ? ((0, r.default)("#header-user").on("click", (function () {
        location.href = "center.html"
      })), (0, r.default)("#header-user").html(t.membername), (0, r.default)("#header-logout").removeClass("d-none")) : (0, r.default)("#header-user").on("click", (function () {
        location.href = "login.html"
      })), (0, r.default)("#header-logout").on("click", (function () {
        localStorage.clear(), location.href = "login.html"
      }))
    }))
  },
  8: function (t, e, n) {},
  84: function (t, e, n) {
    "use strict";
    var i, o = n(0),
      r = (i = o) && i.__esModule ? i : {
        default: i
      };
    n(2), n(12), n(13), n(20), n(21), n(85), n(1), n(14), n(86);
    var s = n(3);
    n(7), n(10), n(15);
    var a = n(5);
    (0, r.default)((function () {
      var t = (0, s.getUser)();
      t || (location.href = "login.html");
      var e, n, i, o, l = void 0;
      e = new Date, n = e.getFullYear(), i = e.getMonth() + 1, o = e.getDate(), i >= 1 && i <= 9 && (i = "0" + i), o >= 0 && o <= 9 && (o = "0" + o);
      var u = {
        user: t,
        beginTime: l = n + "/" + i + "/" + o,
        endTime: l,
        ddh: (0, r.default)("#ddh").val(),
        hbrq: (0, r.default)("#hbrq").val(),
        hkgs: (0, r.default)("#hkcompany").val(),
        status: (0, r.default)("#status").val(),
        mdg: (0, r.default)("#mdg").val(),
        tdh: (0, r.default)("#tdh").val(),
        type: "month"
      };
      c(u), (0, r.default)("#searchBtn").on("click", (function () {
        c(u = {
          user: t,
          beginTime: (0, r.default)("#xd_start").val(),
          endTime: (0, r.default)("#xd_end").val(),
          ddh: (0, r.default)("#ddh").val(),
          hbrq: (0, r.default)("#hbrq").val(),
          hkgs: (0, r.default)("#hkcompany").val(),
          status: (0, r.default)("#status").val(),
          mdg: (0, r.default)("#mdg").val(),
          tdh: (0, r.default)("#tdh").val(),
          type: ""
        })
      })), (0, r.default)("#mdg").bsSuggest({
        url: a.config.api + "/myapi/hotTips?searchTxt=",
        getDataMethod: "url",
        effectiveFields: ["dcode", "acnname", "dzh"],
        searchFields: ["dcode", "acnname", "dzh"],
        ignorecase: !0,
        allowNoKeyword: !1,
        showBtn: !1,
        delayUntilKeyup: !0,
        showHeader: !1,
        idField: "did",
        keyField: "dcode",
        hideOnSelect: !0,
        clearable: !0
      }), (0, r.default)("#hkcompany").bsSuggest({
        url: a.config.api + "/myapi/airLine?searchTxt=",
        getDataMethod: "url",
        effectiveFields: ["zdalias", "zmmc"],
        searchFields: ["zdalias", "zmmc"],
        ignorecase: !0,
        allowNoKeyword: !1,
        showBtn: !1,
        delayUntilKeyup: !0,
        showHeader: !1,
        idField: "ZdId",
        keyField: "zdalias",
        hideOnSelect: !0,
        clearable: !0
      })
    }));
    var l = void 0;

    function c(t) {
      (0, r.default)("#table-list").bootstrapTable("destroy").bootstrapTable({
        formatLoadingMessage: function () {
          return ['<div class="table-loading">', "玩命加载中", "</div>"].join("")
        },
        formatNoMatches: function () {
          return "没有找到相关记录！"
        },
        ajax: function (e) {
          r.default.ajax2({
            url: a.config.apiAdmin + "/api/order?pageNo=" + (e.data.offset / e.data.limit + 1) + "&pageSize=" + e.data.limit + "&beginTime=" + t.beginTime + "&endTime=" + t.endTime + "&status=" + t.status + "&ddh=" + t.ddh + "&hbrq=" + t.hbrq + "&hkgs=" + t.hkgs + "&mdg=" + t.mdg + "&tdh=" + t.tdh + "&type=" + t.type,
            method: "GET",
            success: function (t) {
              t.success && (l = t.data.packets, e.success(t.data))
            }
          })
        },
        dataField: "orderList",
        idField: "orderId",
        totalField: "totalCount",
        pageList: [],
        pagination: !0,
        pageSize: 10,
        sidePagination: "server",
        locale: "zh-CN",
        classes: "table table-borderedless list",
        theadClasses: "list-header",
        rowStyle: u,
        columns: [
          [{
            title: "起运港-目的港",
            align: "center",
            valign: "middle",
            class: "qyg-mdg",
            formatter: d
          }, {
            title: "提单号",
            align: "center",
            valign: "middle",
            field: "tdnum"
          }, {
            title: "进仓编号",
            align: "center",
            valign: "middle",
            field: "jincnum"
          }, {
            title: "计费重量",
            valign: "middle",
            field: "jfzl"
          }, {
            title: "单价",
            align: "center",
            valign: "middle",
            field: "showprice"
          }, {
            title: "下单时间",
            align: "center",
            valign: "middle",
            field: "dctime"
          }, {
            title: "订单状态",
            align: "center",
            valign: "middle",
            field: "staut",
            formatter: function (t, e, n) {
              return "1" == e.staut ? "未确认" : "2" == e.staut ? "冻结" : "3" == e.staut ? "已起飞" : "4" == e.staut ? "已报关" : "5" == e.staut ? "已进仓" : "6" == e.staut ? "未进仓" : void 0
            }
          }, {
            title: "操作",
            align: "center",
            valign: "middle",
            field: "",
            events: window.operateEvents,
            formatter: f
          }]
        ]
      })
    }

    function u(t, e) {
      return {
        classes: "2" === t.staut ? "item bg-warning" : "item"
      }
    }

    function d(t, e) {
      return [e.qyg + '<i class="fa fa-long-arrow-right text-primary ml-1 mr-1"></i>' + e.mdg].join("")
    }

    function f(t, e) {
      var n = void 0,
        i = l.filter((function (t) {
          return t.orderId === e.orderId
        }));
      return i.length > 0 && (n = i[0]), ['<a href="confirmation.html?id=' + e.orderId + '">详情</a>', "1" === e.staut ? '<a href="bookingform.html?orderid=' + e.orderId + '" class="ml-2 edit">修改</a><a href="javascript:" class="ml-2 remove">删除</a>' : "", n && 0 === n.received ? '<a class="show-qrcode ml-2" href="javascript:;" data-packetid="' + n.id + '">红包</a>' : ""].join("")
    }
    window.operateEvents = {
      "click .remove": function (t, e, n, i) {
        (0, r.default)("#loading").css("display", "block"), r.default.ajax2({
          url: a.config.apiAdmin + "/api/order/" + n.orderId,
          type: "DELETE",
          success: function (t) {
            t.success && (0, r.default)("#table-list").bootstrapTable("remove", {
              field: "orderId",
              values: [n.orderId]
            })
          },
          complete: function () {
            (0, r.default)("#loading").css("display", "none")
          }
        })
      },
      "click .show-qrcode": function (t, e, n, i) {
        var o = encodeURIComponent(a.config.hbApi + "/api/common/wechat/openid?orderId=" + n.orderId + "&packetId=" + (0, r.default)(t.target).data("packetid") + "&memberId=" + (0, s.getUser)().memberId);
        (0, r.default)("#qr-code").html("").qrcode({
          width: 200,
          height: 200,
          text: "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb859d3813ee813ee&redirect_uri=" + o + "&response_type=code&scope=snsapi_base#wechat_redirect"
        }).removeClass("d-none"), (0, r.default)(t.target).addClass("d-none"), (0, r.default)("#qrcode-modal").modal("toggle")
      }
    }
  },
  85: function (t, e, n) {
    var i, o = n(0);
    (i = o).fn.qrcode = function (t) {
      var e;

      function n(t) {
        this.mode = e, this.data = t
      }

      function r(t, e) {
        this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
      }

      function s(t, e) {
        if (null == t.length) throw Error(t.length + "/" + e);
        for (var n = 0; n < t.length && 0 == t[n];) n++;
        this.num = Array(t.length - n + e);
        for (var i = 0; i < t.length - n; i++) this.num[i] = t[i + n]
      }

      function a(t, e) {
        this.totalCount = t, this.dataCount = e
      }

      function l() {
        this.buffer = [], this.length = 0
      }
      n.prototype = {
        getLength: function () {
          return this.data.length
        },
        write: function (t) {
          for (var e = 0; e < this.data.length; e++) t.put(this.data.charCodeAt(e), 8)
        }
      }, r.prototype = {
        addData: function (t) {
          this.dataList.push(new n(t)), this.dataCache = null
        },
        isDark: function (t, e) {
          if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e) throw Error(t + "," + e);
          return this.modules[t][e]
        },
        getModuleCount: function () {
          return this.moduleCount
        },
        make: function () {
          if (1 > this.typeNumber) {
            var t = 1;
            for (t = 1; 40 > t; t++) {
              for (var e = a.getRSBlocks(t, this.errorCorrectLevel), n = new l, i = 0, o = 0; o < e.length; o++) i += e[o].dataCount;
              for (o = 0; o < this.dataList.length; o++) e = this.dataList[o], n.put(e.mode, 4), n.put(e.getLength(), c.getLengthInBits(e.mode, t)), e.write(n);
              if (n.getLengthInBits() <= 8 * i) break
            }
            this.typeNumber = t
          }
          this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function (t, e) {
          this.moduleCount = 4 * this.typeNumber + 17, this.modules = Array(this.moduleCount);
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[n] = Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) this.modules[n][i] = null
          }
          this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), 7 <= this.typeNumber && this.setupTypeNumber(t), null == this.dataCache && (this.dataCache = r.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e)
        },
        setupPositionProbePattern: function (t, e) {
          for (var n = -1; 7 >= n; n++)
            if (!(-1 >= t + n || this.moduleCount <= t + n))
              for (var i = -1; 7 >= i; i++) - 1 >= e + i || this.moduleCount <= e + i || (this.modules[t + n][e + i] = 0 <= n && 6 >= n && (0 == i || 6 == i) || 0 <= i && 6 >= i && (0 == n || 6 == n) || 2 <= n && 4 >= n && 2 <= i && 4 >= i)
        },
        getBestMaskPattern: function () {
          for (var t = 0, e = 0, n = 0; 8 > n; n++) {
            this.makeImpl(!0, n);
            var i = c.getLostPoint(this);
            (0 == n || t > i) && (t = i, e = n)
          }
          return e
        },
        createMovieClip: function (t, e, n) {
          for (t = t.createEmptyMovieClip(e, n), this.make(), e = 0; e < this.modules.length; e++) {
            n = 1 * e;
            for (var i = 0; i < this.modules[e].length; i++) {
              var o = 1 * i;
              this.modules[e][i] && (t.beginFill(0, 100), t.moveTo(o, n), t.lineTo(o + 1, n), t.lineTo(o + 1, n + 1), t.lineTo(o, n + 1), t.endFill())
            }
          }
          return t
        },
        setupTimingPattern: function () {
          for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
          for (t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
        },
        setupPositionAdjustPattern: function () {
          for (var t = c.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
            for (var n = 0; n < t.length; n++) {
              var i = t[e],
                o = t[n];
              if (null == this.modules[i][o])
                for (var r = -2; 2 >= r; r++)
                  for (var s = -2; 2 >= s; s++) this.modules[i + r][o + s] = -2 == r || 2 == r || -2 == s || 2 == s || 0 == r && 0 == s
            }
        },
        setupTypeNumber: function (t) {
          for (var e = c.getBCHTypeNumber(this.typeNumber), n = 0; 18 > n; n++) {
            var i = !t && 1 == (e >> n & 1);
            this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = i
          }
          for (n = 0; 18 > n; n++) i = !t && 1 == (e >> n & 1), this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = i
        },
        setupTypeInfo: function (t, e) {
          for (var n = c.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), i = 0; 15 > i; i++) {
            var o = !t && 1 == (n >> i & 1);
            6 > i ? this.modules[i][8] = o : 8 > i ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
          }
          for (i = 0; 15 > i; i++) o = !t && 1 == (n >> i & 1), 8 > i ? this.modules[8][this.moduleCount - i - 1] = o : 9 > i ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o;
          this.modules[this.moduleCount - 8][8] = !t
        },
        mapData: function (t, e) {
          for (var n = -1, i = this.moduleCount - 1, o = 7, r = 0, s = this.moduleCount - 1; 0 < s; s -= 2)
            for (6 == s && s--;;) {
              for (var a = 0; 2 > a; a++)
                if (null == this.modules[i][s - a]) {
                  var l = !1;
                  r < t.length && (l = 1 == (t[r] >>> o & 1)), c.getMask(e, i, s - a) && (l = !l), this.modules[i][s - a] = l, -1 == --o && (r++, o = 7)
                } if (0 > (i += n) || this.moduleCount <= i) {
                i -= n, n = -n;
                break
              }
            }
        }
      }, r.PAD0 = 236, r.PAD1 = 17, r.createData = function (t, e, n) {
        e = a.getRSBlocks(t, e);
        for (var i = new l, o = 0; o < n.length; o++) {
          var s = n[o];
          i.put(s.mode, 4), i.put(s.getLength(), c.getLengthInBits(s.mode, t)), s.write(i)
        }
        for (o = t = 0; o < e.length; o++) t += e[o].dataCount;
        if (i.getLengthInBits() > 8 * t) throw Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * t + ")");
        for (i.getLengthInBits() + 4 <= 8 * t && i.put(0, 4); 0 != i.getLengthInBits() % 8;) i.putBit(!1);
        for (; !(i.getLengthInBits() >= 8 * t || (i.put(r.PAD0, 8), i.getLengthInBits() >= 8 * t));) i.put(r.PAD1, 8);
        return r.createBytes(i, e)
      }, r.createBytes = function (t, e) {
        for (var n = 0, i = 0, o = 0, r = Array(e.length), a = Array(e.length), l = 0; l < e.length; l++) {
          var u = e[l].dataCount,
            d = e[l].totalCount - u;
          i = Math.max(i, u), o = Math.max(o, d), r[l] = Array(u);
          for (var f = 0; f < r[l].length; f++) r[l][f] = 255 & t.buffer[f + n];
          for (n += u, f = c.getErrorCorrectPolynomial(d), u = new s(r[l], f.getLength() - 1).mod(f), a[l] = Array(f.getLength() - 1), f = 0; f < a[l].length; f++) d = f + u.getLength() - a[l].length, a[l][f] = 0 <= d ? u.get(d) : 0
        }
        for (f = l = 0; f < e.length; f++) l += e[f].totalCount;
        for (n = Array(l), f = u = 0; f < i; f++)
          for (l = 0; l < e.length; l++) f < r[l].length && (n[u++] = r[l][f]);
        for (f = 0; f < o; f++)
          for (l = 0; l < e.length; l++) f < a[l].length && (n[u++] = a[l][f]);
        return n
      }, e = 4;
      for (var c = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (t) {
            for (var e = t << 10; 0 <= c.getBCHDigit(e) - c.getBCHDigit(c.G15);) e ^= c.G15 << c.getBCHDigit(e) - c.getBCHDigit(c.G15);
            return (t << 10 | e) ^ c.G15_MASK
          },
          getBCHTypeNumber: function (t) {
            for (var e = t << 12; 0 <= c.getBCHDigit(e) - c.getBCHDigit(c.G18);) e ^= c.G18 << c.getBCHDigit(e) - c.getBCHDigit(c.G18);
            return t << 12 | e
          },
          getBCHDigit: function (t) {
            for (var e = 0; 0 != t;) e++, t >>>= 1;
            return e
          },
          getPatternPosition: function (t) {
            return c.PATTERN_POSITION_TABLE[t - 1]
          },
          getMask: function (t, e, n) {
            switch (t) {
              case 0:
                return 0 == (e + n) % 2;
              case 1:
                return 0 == e % 2;
              case 2:
                return 0 == n % 3;
              case 3:
                return 0 == (e + n) % 3;
              case 4:
                return 0 == (Math.floor(e / 2) + Math.floor(n / 3)) % 2;
              case 5:
                return 0 == e * n % 2 + e * n % 3;
              case 6:
                return 0 == (e * n % 2 + e * n % 3) % 2;
              case 7:
                return 0 == (e * n % 3 + (e + n) % 2) % 2;
              default:
                throw Error("bad maskPattern:" + t)
            }
          },
          getErrorCorrectPolynomial: function (t) {
            for (var e = new s([1], 0), n = 0; n < t; n++) e = e.multiply(new s([1, u.gexp(n)], 0));
            return e
          },
          getLengthInBits: function (t, n) {
            if (1 <= n && 10 > n) switch (t) {
              case 1:
                return 10;
              case 2:
                return 9;
              case e:
              case 8:
                return 8;
              default:
                throw Error("mode:" + t)
            } else if (27 > n) switch (t) {
              case 1:
                return 12;
              case 2:
                return 11;
              case e:
                return 16;
              case 8:
                return 10;
              default:
                throw Error("mode:" + t)
            } else {
              if (!(41 > n)) throw Error("type:" + n);
              switch (t) {
                case 1:
                  return 14;
                case 2:
                  return 13;
                case e:
                  return 16;
                case 8:
                  return 12;
                default:
                  throw Error("mode:" + t)
              }
            }
          },
          getLostPoint: function (t) {
            for (var e = t.getModuleCount(), n = 0, i = 0; i < e; i++)
              for (var o = 0; o < e; o++) {
                for (var r = 0, s = t.isDark(i, o), a = -1; 1 >= a; a++)
                  if (!(0 > i + a || e <= i + a))
                    for (var l = -1; 1 >= l; l++) 0 > o + l || e <= o + l || 0 == a && 0 == l || s == t.isDark(i + a, o + l) && r++;
                5 < r && (n += 3 + r - 5)
              }
            for (i = 0; i < e - 1; i++)
              for (o = 0; o < e - 1; o++) r = 0, t.isDark(i, o) && r++, t.isDark(i + 1, o) && r++, t.isDark(i, o + 1) && r++, t.isDark(i + 1, o + 1) && r++, (0 == r || 4 == r) && (n += 3);
            for (i = 0; i < e; i++)
              for (o = 0; o < e - 6; o++) t.isDark(i, o) && !t.isDark(i, o + 1) && t.isDark(i, o + 2) && t.isDark(i, o + 3) && t.isDark(i, o + 4) && !t.isDark(i, o + 5) && t.isDark(i, o + 6) && (n += 40);
            for (o = 0; o < e; o++)
              for (i = 0; i < e - 6; i++) t.isDark(i, o) && !t.isDark(i + 1, o) && t.isDark(i + 2, o) && t.isDark(i + 3, o) && t.isDark(i + 4, o) && !t.isDark(i + 5, o) && t.isDark(i + 6, o) && (n += 40);
            for (o = r = 0; o < e; o++)
              for (i = 0; i < e; i++) t.isDark(i, o) && r++;
            return n + 10 * (t = Math.abs(100 * r / e / e - 50) / 5)
          }
        }, u = {
          glog: function (t) {
            if (1 > t) throw Error("glog(" + t + ")");
            return u.LOG_TABLE[t]
          },
          gexp: function (t) {
            for (; 0 > t;) t += 255;
            for (; 256 <= t;) t -= 255;
            return u.EXP_TABLE[t]
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256)
        }, d = 0; 8 > d; d++) u.EXP_TABLE[d] = 1 << d;
      for (d = 8; 256 > d; d++) u.EXP_TABLE[d] = u.EXP_TABLE[d - 4] ^ u.EXP_TABLE[d - 5] ^ u.EXP_TABLE[d - 6] ^ u.EXP_TABLE[d - 8];
      for (d = 0; 255 > d; d++) u.LOG_TABLE[u.EXP_TABLE[d]] = d;
      return s.prototype = {
        get: function (t) {
          return this.num[t]
        },
        getLength: function () {
          return this.num.length
        },
        multiply: function (t) {
          for (var e = Array(this.getLength() + t.getLength() - 1), n = 0; n < this.getLength(); n++)
            for (var i = 0; i < t.getLength(); i++) e[n + i] ^= u.gexp(u.glog(this.get(n)) + u.glog(t.get(i)));
          return new s(e, 0)
        },
        mod: function (t) {
          if (0 > this.getLength() - t.getLength()) return this;
          for (var e = u.glog(this.get(0)) - u.glog(t.get(0)), n = Array(this.getLength()), i = 0; i < this.getLength(); i++) n[i] = this.get(i);
          for (i = 0; i < t.getLength(); i++) n[i] ^= u.gexp(u.glog(t.get(i)) + e);
          return new s(n, 0).mod(t)
        }
      }, a.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
      ], a.getRSBlocks = function (t, e) {
        var n = a.getRsBlockTable(t, e);
        if (null == n) throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var i = n.length / 3, o = [], r = 0; r < i; r++)
          for (var s = n[3 * r + 0], l = n[3 * r + 1], c = n[3 * r + 2], u = 0; u < s; u++) o.push(new a(l, c));
        return o
      }, a.getRsBlockTable = function (t, e) {
        switch (e) {
          case 1:
            return a.RS_BLOCK_TABLE[4 * (t - 1) + 0];
          case 0:
            return a.RS_BLOCK_TABLE[4 * (t - 1) + 1];
          case 3:
            return a.RS_BLOCK_TABLE[4 * (t - 1) + 2];
          case 2:
            return a.RS_BLOCK_TABLE[4 * (t - 1) + 3]
        }
      }, l.prototype = {
        get: function (t) {
          return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
        },
        put: function (t, e) {
          for (var n = 0; n < e; n++) this.putBit(1 == (t >>> e - n - 1 & 1))
        },
        getLengthInBits: function () {
          return this.length
        },
        putBit: function (t) {
          var e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
        }
      }, "string" == typeof t && (t = {
        text: t
      }), t = i.extend({}, {
        render: "canvas",
        width: 256,
        height: 256,
        typeNumber: -1,
        correctLevel: 2,
        background: "#ffffff",
        foreground: "#000000"
      }, t), this.each((function () {
        var e;
        if ("canvas" == t.render) {
          (e = new r(t.typeNumber, t.correctLevel)).addData(t.text), e.make();
          var n = document.createElement("canvas");
          n.width = t.width, n.height = t.height;
          for (var s = n.getContext("2d"), a = t.width / e.getModuleCount(), l = t.height / e.getModuleCount(), c = 0; c < e.getModuleCount(); c++)
            for (var u = 0; u < e.getModuleCount(); u++) {
              s.fillStyle = e.isDark(c, u) ? t.foreground : t.background;
              var d = Math.ceil((u + 1) * a) - Math.floor(u * a),
                f = Math.ceil((c + 1) * a) - Math.floor(c * a);
              s.fillRect(Math.round(u * a), Math.round(c * l), d, f)
            }
        } else
          for ((e = new r(t.typeNumber, t.correctLevel)).addData(t.text), e.make(), n = i("<table></table>").css("width", t.width + "px").css("height", t.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", t.background), s = t.width / e.getModuleCount(), a = t.height / e.getModuleCount(), l = 0; l < e.getModuleCount(); l++)
            for (c = i("<tr></tr>").css("height", a + "px").appendTo(n), u = 0; u < e.getModuleCount(); u++) i("<td></td>").css("width", s + "px").css("background-color", e.isDark(l, u) ? t.foreground : t.background).appendTo(c);
        o(e = n).appendTo(this)
      }))
    }, t.exports = o.fn.qrcode
  },
  86: function (t, e, n) {},
  9: function (t, e, n) {
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
        d = {
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
        f = [];

      function h(t, e) {
        t.className += " " + e
      }

      function p(t, e) {
        for (var n = t.className.split(" "), i = e.split(" "), o = 0; o < i.length; o += 1) {
          var r = n.indexOf(i[o]);
          r > -1 && n.splice(r, 1)
        }
        t.className = n.join(" ")
      }

      function g() {
        return "rtl" === n.getComputedStyle(document.body).direction
      }

      function m() {
        return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
      }

      function v() {
        return document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft
      }

      function y(t) {
        for (; t.lastChild;) t.removeChild(t.lastChild)
      }

      function b(t) {
        if (null === t) return t;
        var e;
        if (Array.isArray(t)) {
          e = [];
          for (var n = 0; n < t.length; n += 1) e.push(b(t[n]));
          return e
        }
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof RegExp) return (e = new RegExp(t.source)).global = t.global, e.ignoreCase = t.ignoreCase, e.multiline = t.multiline, e.lastIndex = t.lastIndex, e;
        if ("object" == typeof t) {
          for (var i in e = {}, t) t.hasOwnProperty(i) && (e[i] = b(t[i]));
          return e
        }
        return t
      }

      function w(t, e) {
        if (t.elements) {
          var n = t.elements.root;
          n.parentNode.removeChild(n), delete t.elements, t.settings = b(t.__settings), t.__init = e, delete t.__internal
        }
      }
      var _ = !1;
      try {
        var x = Object.defineProperty({}, "passive", {
          get: function () {
            _ = !0
          }
        });
        n.addEventListener("test", x, x), n.removeEventListener("test", x, x)
      } catch (t) {}
      var k = function (t, e, n, i, o) {
          t.addEventListener(e, n, _ ? {
            capture: i,
            passive: o
          } : !0 === i)
        },
        T = function (t, e, n, i, o) {
          t.removeEventListener(e, n, _ ? {
            capture: i,
            passive: o
          } : !0 === i)
        },
        C = function () {
          var t, e, n = !1,
            i = {
              animation: "animationend",
              OAnimation: "oAnimationEnd oanimationend",
              msAnimation: "MSAnimationEnd",
              MozAnimation: "animationend",
              WebkitAnimation: "webkitAnimationEnd"
            };
          for (t in i)
            if (void 0 !== document.documentElement.style[t]) {
              e = i[t], n = !0;
              break
            } return {
            type: e,
            supported: n
          }
        }();

      function S(t, e) {
        return function () {
          if (arguments.length > 0) {
            for (var n = [], i = 0; i < arguments.length; i += 1) n.push(arguments[i]);
            return n.push(t), e.apply(t, n)
          }
          return e.apply(t, [null, t])
        }
      }

      function E(t, e) {
        return {
          index: t,
          button: e,
          cancel: !1
        }
      }

      function O(t, e) {
        if ("function" == typeof e.get(t)) return e.get(t).call(e)
      }
      var A = function () {
          var t, e, i = [],
            o = !1,
            _ = n.navigator.userAgent.indexOf("Safari") > -1 && n.navigator.userAgent.indexOf("Chrome") < 0,
            x = '<div class="ajs-dimmer"></div>',
            A = '<div class="ajs-modal" tabindex="0"></div>',
            N = '<div class="ajs-dialog" tabindex="0"></div>',
            j = '<button class="ajs-reset"></button>',
            P = '<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',
            I = '<div class="ajs-header"></div>',
            L = '<div class="ajs-body"></div>',
            H = '<div class="ajs-content"></div>',
            R = '<div class="ajs-footer"></div>',
            F = {
              primary: '<div class="ajs-primary ajs-buttons"></div>',
              auxiliary: '<div class="ajs-auxiliary ajs-buttons"></div>'
            },
            B = '<button class="ajs-button"></button>',
            M = '<div class="ajs-handle"></div>',
            $ = "ajs-in",
            q = "ajs-out",
            V = "alertify",
            z = "ajs-basic",
            W = "ajs-capture",
            U = "ajs-closable",
            G = "ajs-fixed",
            Q = "ajs-frameless",
            X = "ajs-hidden",
            K = "ajs-maximized",
            Y = "ajs-maximizable",
            J = "ajs-modeless",
            Z = "ajs-movable",
            tt = "ajs-no-selection",
            et = "ajs-no-overflow",
            nt = "ajs-no-padding",
            it = "ajs-pinnable",
            ot = "ajs-",
            rt = "ajs-resizable",
            st = "ajs-shake",
            at = "ajs-unpinned",
            lt = "ajs-no-transition";

          function ct(t) {
            if (!t.__internal) {
              var e;
              D.defaults.hooks.preinit(t), delete t.__init, t.__settings || (t.__settings = b(t.settings)), "function" == typeof t.setup ? ((e = t.setup()).options = e.options || {}, e.focus = e.focus || {}) : e = {
                buttons: [],
                focus: {
                  element: null,
                  select: !1
                },
                options: {}
              }, "object" != typeof t.hooks && (t.hooks = {});
              var n = [];
              if (Array.isArray(e.buttons))
                for (var o = 0; o < e.buttons.length; o += 1) {
                  var r = e.buttons[o],
                    s = {};
                  for (var a in r) r.hasOwnProperty(a) && (s[a] = r[a]);
                  n.push(s)
                }
              var l = t.__internal = {
                  isOpen: !1,
                  activeElement: document.body,
                  timerIn: void 0,
                  timerOut: void 0,
                  buttons: n,
                  focus: e.focus,
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
              c.root = document.createElement("div"), c.root.style.display = "none", c.root.className = V + " " + X + " ", c.root.innerHTML = x + A, c.dimmer = c.root.firstChild, c.modal = c.root.lastChild, c.modal.innerHTML = N, c.dialog = c.modal.firstChild, c.dialog.innerHTML = j + P + I + L + R + M + j, c.reset = [], c.reset.push(c.dialog.firstChild), c.reset.push(c.dialog.lastChild), c.commands = {}, c.commands.container = c.reset[0].nextSibling, c.commands.pin = c.commands.container.firstChild, c.commands.maximize = c.commands.pin.nextSibling, c.commands.close = c.commands.maximize.nextSibling, c.header = c.commands.container.nextSibling, c.body = c.header.nextSibling, c.body.innerHTML = H, c.content = c.body.firstChild, c.footer = c.body.nextSibling, c.footer.innerHTML = F.auxiliary + F.primary, c.resizeHandle = c.footer.nextSibling, c.buttons = {}, c.buttons.auxiliary = c.footer.firstChild, c.buttons.primary = c.buttons.auxiliary.nextSibling, c.buttons.primary.innerHTML = B, c.buttonTemplate = c.buttons.primary.firstChild, c.buttons.primary.removeChild(c.buttonTemplate);
              for (var u = 0; u < t.__internal.buttons.length; u += 1) {
                var d = t.__internal.buttons[u];
                for (var f in i.indexOf(d.key) < 0 && i.push(d.key), d.element = c.buttonTemplate.cloneNode(), d.element.innerHTML = d.text, "string" == typeof d.className && "" !== d.className && h(d.element, d.className), d.attrs) "className" !== f && d.attrs.hasOwnProperty(f) && d.element.setAttribute(f, d.attrs[f]);
                "auxiliary" === d.scope ? c.buttons.auxiliary.appendChild(d.element) : c.buttons.primary.appendChild(d.element)
              }
              for (var p in t.elements = c, l.resetHandler = S(t, Rt), l.beginMoveHandler = S(t, Jt), l.beginResizeHandler = S(t, ae), l.bringToFrontHandler = S(t, gt), l.modalClickHandler = S(t, At), l.buttonsClickHandler = S(t, Pt), l.commandsClickHandler = S(t, bt), l.transitionInHandler = S(t, Mt), l.transitionOutHandler = S(t, $t), l.options) void 0 !== e.options[p] ? t.set(p, e.options[p]) : D.defaults.hasOwnProperty(p) ? t.set(p, D.defaults[p]) : "title" === p && t.set(p, D.defaults.glossary[p]);
              "function" == typeof t.build && t.build(), D.defaults.hooks.postinit(t)
            }
            document.body.appendChild(t.elements.root)
          }

          function ut() {
            n.scrollTo(t, e)
          }

          function dt() {
            for (var t = 0, e = 0; e < f.length; e += 1) {
              var n = f[e];
              (n.isModal() || n.isMaximized()) && (t += 1)
            }
            0 === t && document.body.className.indexOf(et) >= 0 ? (p(document.body, et), pt(!1)) : t > 0 && document.body.className.indexOf(et) < 0 && (pt(!0), h(document.body, et))
          }
          var ft = "",
            ht = 0;

          function pt(t) {
            D.defaults.preventBodyShift && (t && document.documentElement.scrollHeight > document.documentElement.clientHeight ? (ht = e, ft = n.getComputedStyle(document.body).top, h(document.body, G), document.body.style.top = -e + "px") : t || (e = ht, document.body.style.top = ft, p(document.body, G), ut()))
          }

          function gt(t, e) {
            for (var n = f.indexOf(e) + 1; n < f.length; n += 1)
              if (f[n].isModal()) return;
            return document.body.lastChild !== e.elements.root && (document.body.appendChild(e.elements.root), f.splice(f.indexOf(e), 1), f.push(e), Ht(e)), !1
          }

          function mt(t, e, n, i) {
            switch (e) {
              case "title":
                t.setHeader(i);
                break;
              case "modal":
                ! function (t) {
                  t.get("modal") ? (p(t.elements.root, J), t.isOpen() && (he(t), St(t), dt())) : (h(t.elements.root, J), t.isOpen() && (fe(t), St(t), dt()))
                }(t);
                break;
              case "basic":
                ! function (t) {
                  t.get("basic") ? h(t.elements.root, z) : p(t.elements.root, z)
                }(t);
                break;
              case "frameless":
                ! function (t) {
                  t.get("frameless") ? h(t.elements.root, Q) : p(t.elements.root, Q)
                }(t);
                break;
              case "pinned":
                ! function (t) {
                  t.get("pinned") ? (p(t.elements.root, at), t.isOpen() && Ct(t)) : (h(t.elements.root, at), t.isOpen() && !t.isModal() && Tt(t))
                }(t);
                break;
              case "closable":
                ! function (t) {
                  t.get("closable") ? (h(t.elements.root, U), function (t) {
                    k(t.elements.modal, "click", t.__internal.modalClickHandler)
                  }(t)) : (p(t.elements.root, U), function (t) {
                    T(t.elements.modal, "click", t.__internal.modalClickHandler)
                  }(t))
                }(t);
                break;
              case "maximizable":
                ! function (t) {
                  t.get("maximizable") ? h(t.elements.root, Y) : p(t.elements.root, Y)
                }(t);
                break;
              case "pinnable":
                ! function (t) {
                  t.get("pinnable") ? h(t.elements.root, it) : p(t.elements.root, it)
                }(t);
                break;
              case "movable":
                ! function (t) {
                  t.get("movable") ? (h(t.elements.root, Z), t.isOpen() && pe(t)) : (ee(t), p(t.elements.root, Z), t.isOpen() && ge(t))
                }(t);
                break;
              case "resizable":
                ! function (t) {
                  t.get("resizable") ? (h(t.elements.root, rt), t.isOpen() && me(t)) : (ue(t), p(t.elements.root, rt), t.isOpen() && ve(t))
                }(t);
                break;
              case "padding":
                i ? p(t.elements.root, nt) : t.elements.root.className.indexOf(nt) < 0 && h(t.elements.root, nt);
                break;
              case "overflow":
                i ? p(t.elements.root, et) : t.elements.root.className.indexOf(et) < 0 && h(t.elements.root, et);
                break;
              case "transition":
                ! function (t, e, n) {
                  "string" == typeof n && p(t.elements.root, ot + n), h(t.elements.root, ot + e), t.elements.root.offsetWidth
                }(t, i, n);
                break;
              case "transitionOff":
                ! function (t) {
                  t.get("transitionOff") ? h(t.elements.root, lt) : p(t.elements.root, lt)
                }(t)
            }
            "function" == typeof t.hooks.onupdate && t.hooks.onupdate.call(t, e, n, i)
          }

          function vt(t, e, n, i, o) {
            var r, s = {
              op: void 0,
              items: []
            };
            if (void 0 === o && "string" == typeof i) s.op = "get", e.hasOwnProperty(i) ? (s.found = !0, s.value = e[i]) : (s.found = !1, s.value = void 0);
            else if (s.op = "set", "object" == typeof i) {
              var a = i;
              for (var l in a) e.hasOwnProperty(l) ? (e[l] !== a[l] && (r = e[l], e[l] = a[l], n.call(t, l, r, a[l])), s.items.push({
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
              e.hasOwnProperty(i) ? (e[i] !== o && (r = e[i], e[i] = o, n.call(t, i, r, o)), s.items.push({
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

          function yt(t) {
            var e;
            jt(t, (function (n) {
              return e = !0 !== t.get("invokeOnCloseOff") && !0 === n.invokeOnClose
            })), !e && t.isOpen() && t.close()
          }

          function bt(t, e) {
            switch (t.srcElement || t.target) {
              case e.elements.commands.pin:
                e.isPinned() ? _t(e) : wt(e);
                break;
              case e.elements.commands.maximize:
                e.isMaximized() ? kt(e) : xt(e);
                break;
              case e.elements.commands.close:
                yt(e)
            }
            return !1
          }

          function wt(t) {
            t.set("pinned", !0)
          }

          function _t(t) {
            t.set("pinned", !1)
          }

          function xt(t) {
            O("onmaximize", t), h(t.elements.root, K), t.isOpen() && dt(), O("onmaximized", t)
          }

          function kt(t) {
            O("onrestore", t), p(t.elements.root, K), t.isOpen() && dt(), O("onrestored", t)
          }

          function Tt(t) {
            var e = v();
            t.elements.modal.style.marginTop = m() + "px", t.elements.modal.style.marginLeft = e + "px", t.elements.modal.style.marginRight = -e + "px"
          }

          function Ct(t) {
            var e = parseInt(t.elements.modal.style.marginTop, 10),
              n = parseInt(t.elements.modal.style.marginLeft, 10);
            if (t.elements.modal.style.marginTop = "", t.elements.modal.style.marginLeft = "", t.elements.modal.style.marginRight = "", t.isOpen()) {
              var i = 0,
                o = 0;
              "" !== t.elements.dialog.style.top && (i = parseInt(t.elements.dialog.style.top, 10)), t.elements.dialog.style.top = i + (e - m()) + "px", "" !== t.elements.dialog.style.left && (o = parseInt(t.elements.dialog.style.left, 10)), t.elements.dialog.style.left = o + (n - v()) + "px"
            }
          }

          function St(t) {
            t.get("modal") || t.get("pinned") ? Ct(t) : Tt(t)
          }
          var Et = !1,
            Ot = 0;

          function At(t, e) {
            if (t.timeStamp - Ot > 200 && (Ot = t.timeStamp) && !Et) {
              var n = t.srcElement || t.target;
              !0 === e.get("closableByDimmer") && n === e.elements.modal && yt(e)
            }
            Et = !1
          }
          var Nt = 0,
            Dt = !1;

          function jt(t, e) {
            if (Date.now() - Nt > 200 && (Nt = Date.now()))
              for (var n = 0; n < t.__internal.buttons.length; n += 1) {
                var i = t.__internal.buttons[n];
                if (!i.element.disabled && e(i)) {
                  var o = E(n, i);
                  "function" == typeof t.callback && t.callback.apply(t, [o]), !1 === o.cancel && t.close();
                  break
                }
              }
          }

          function Pt(t, e) {
            var n = t.srcElement || t.target;
            jt(e, (function (t) {
              return t.element === n && (Dt = !0)
            }))
          }

          function It(t) {
            if (!Dt) {
              var e = f[f.length - 1],
                n = t.keyCode;
              return 0 === e.__internal.buttons.length && n === r && !0 === e.get("closable") ? (yt(e), !1) : i.indexOf(n) > -1 ? (jt(e, (function (t) {
                return t.key === n
              })), !1) : void 0
            }
            Dt = !1
          }

          function Lt(t) {
            var e = f[f.length - 1],
              n = t.keyCode;
            if (n === l || n === c) {
              for (var o = e.__internal.buttons, r = 0; r < o.length; r += 1)
                if (document.activeElement === o[r].element) switch (n) {
                  case l:
                    return void o[(r || o.length) - 1].element.focus();
                  case c:
                    return void o[(r + 1) % o.length].element.focus()
                }
            } else if (n < a + 1 && n > s - 1 && i.indexOf(n) > -1) return t.preventDefault(), t.stopPropagation(), jt(e, (function (t) {
              return t.key === n
            })), !1
          }

          function Ht(t, e) {
            if (e) e.focus();
            else {
              var n = t.__internal.focus,
                i = n.element;
              switch (typeof n.element) {
                case "number":
                  t.__internal.buttons.length > n.element && (i = !0 === t.get("basic") ? t.elements.reset[0] : t.__internal.buttons[n.element].element);
                  break;
                case "string":
                  i = t.elements.body.querySelector(n.element);
                  break;
                case "function":
                  i = n.element.call(t)
              }(!0 === t.get("defaultFocusOff") || null == i && 0 === t.__internal.buttons.length) && (i = t.elements.reset[0]), i && i.focus && (i.focus(), n.select && i.select && i.select())
            }
          }

          function Rt(t, e) {
            if (!e)
              for (var n = f.length - 1; n > -1; n -= 1)
                if (f[n].isModal()) {
                  e = f[n];
                  break
                } if (e && e.isModal()) {
              var i, o = e.elements.reset[0],
                r = e.elements.reset[1],
                s = t.relatedTarget,
                a = e.elements.root.contains(s),
                l = t.srcElement || t.target;
              if (l === o && !a || l === r && s === o) return;
              l === r || l === document.body ? i = o : l === o && s === r ? i = Ft(e) : l === o && a && (i = Ft(e, !0)), Ht(e, i)
            }
          }

          function Ft(t, e) {
            var n = [].slice.call(t.elements.dialog.querySelectorAll(d.tabbable));
            e && n.reverse();
            for (var i = 0; i < n.length; i += 1) {
              var o = n[i];
              if (o.offsetParent || o.offsetWidth || o.offsetHeight || o.getClientRects().length) return o
            }
          }

          function Bt(t) {
            var e = f[f.length - 1];
            e && t.shiftKey && t.keyCode === u && e.elements.reset[1].focus()
          }

          function Mt(t, e) {
            clearTimeout(e.__internal.timerIn), Ht(e), Dt = !1, O("onfocus", e), T(e.elements.dialog, C.type, e.__internal.transitionInHandler), p(e.elements.root, $)
          }

          function $t(t, e) {
            clearTimeout(e.__internal.timerOut), T(e.elements.dialog, C.type, e.__internal.transitionOutHandler), ee(e), ue(e), e.isMaximized() && !e.get("startMaximized") && kt(e), "function" == typeof e.__internal.destroy && e.__internal.destroy.apply(e)
          }
          var qt = null,
            Vt = 0,
            zt = 0,
            Wt = "pageX",
            Ut = "pageY",
            Gt = null,
            Qt = !1,
            Xt = null;

          function Kt(t, e) {
            var n = t[Wt] - Vt,
              i = t[Ut] - zt;
            Qt && (i -= document.body.scrollTop), e.style.left = n + "px", e.style.top = i + "px"
          }

          function Yt(t, e) {
            var n = t[Wt] - Vt,
              i = t[Ut] - zt;
            Qt && (i -= document.body.scrollTop), e.style.left = Math.min(Gt.maxLeft, Math.max(Gt.minLeft, n)) + "px", e.style.top = Qt ? Math.min(Gt.maxTop, Math.max(Gt.minTop, i)) + "px" : Math.max(Gt.minTop, i) + "px"
          }

          function Jt(t, e) {
            if (null === ne && !e.isMaximized() && e.get("movable")) {
              var n, i = 0,
                o = 0;
              if ("touchstart" === t.type ? (t.preventDefault(), n = t.targetTouches[0], Wt = "clientX", Ut = "clientY") : 0 === t.button && (n = t), n) {
                var r = e.elements.dialog;
                if (h(r, W), r.style.left && (i = parseInt(r.style.left, 10)), r.style.top && (o = parseInt(r.style.top, 10)), Vt = n[Wt] - i, zt = n[Ut] - o, e.isModal() ? zt += e.elements.modal.scrollTop : e.isPinned() && (zt -= document.body.scrollTop), e.get("moveBounded")) {
                  var s = r,
                    a = -i,
                    l = -o;
                  do {
                    a += s.offsetLeft, l += s.offsetTop
                  } while (s = s.offsetParent);
                  Gt = {
                    maxLeft: a,
                    minLeft: -a,
                    maxTop: document.documentElement.clientHeight - r.clientHeight - l,
                    minTop: -l
                  }, Xt = Yt
                } else Gt = null, Xt = Kt;
                return O("onmove", e), Qt = !e.isModal() && e.isPinned(), qt = e, Xt(n, r), h(document.body, tt), !1
              }
            }
          }

          function Zt(t) {
            var e;
            qt && ("touchmove" === t.type ? (t.preventDefault(), e = t.targetTouches[0]) : 0 === t.button && (e = t), e && Xt(e, qt.elements.dialog))
          }

          function te() {
            if (qt) {
              var t = qt;
              qt = Gt = null, p(document.body, tt), p(t.elements.dialog, W), O("onmoved", t)
            }
          }

          function ee(t) {
            qt = null;
            var e = t.elements.dialog;
            e.style.left = e.style.top = ""
          }
          var ne = null,
            ie = Number.Nan,
            oe = 0,
            re = 0,
            se = 0;

          function ae(t, e) {
            var n;
            if (!e.isMaximized() && ("touchstart" === t.type ? (t.preventDefault(), n = t.targetTouches[0]) : 0 === t.button && (n = t), n)) {
              O("onresize", e), ne = e, se = e.elements.resizeHandle.offsetHeight / 2;
              var i = e.elements.dialog;
              return h(i, W), ie = parseInt(i.style.left, 10), i.style.height = i.offsetHeight + "px", i.style.minHeight = e.elements.header.offsetHeight + e.elements.footer.offsetHeight + "px", i.style.width = (oe = i.offsetWidth) + "px", "none" !== i.style.maxWidth && (i.style.minWidth = (re = i.offsetWidth) + "px"), i.style.maxWidth = "none", h(document.body, tt), !1
            }
          }

          function le(t) {
            var e;
            ne && ("touchmove" === t.type ? (t.preventDefault(), e = t.targetTouches[0]) : 0 === t.button && (e = t), e && function (t, e, n) {
              var i, o, r = e,
                s = 0,
                a = 0;
              do {
                s += r.offsetLeft, a += r.offsetTop
              } while (r = r.offsetParent);
              !0 === n ? (i = t.pageX, o = t.pageY) : (i = t.clientX, o = t.clientY);
              var l = g();
              if (l && (i = document.body.offsetWidth - i, isNaN(ie) || (s = document.body.offsetWidth - s - e.offsetWidth)), e.style.height = o - a + se + "px", e.style.width = i - s + se + "px", !isNaN(ie)) {
                var c = .5 * Math.abs(e.offsetWidth - oe);
                l && (c *= -1), e.offsetWidth > oe ? e.style.left = ie + c + "px" : e.offsetWidth >= re && (e.style.left = ie - c + "px")
              }
            }(e, ne.elements.dialog, !ne.get("modal") && !ne.get("pinned")))
          }

          function ce() {
            if (ne) {
              var t = ne;
              ne = null, p(document.body, tt), p(t.elements.dialog, W), Et = !0, O("onresized", t)
            }
          }

          function ue(t) {
            ne = null;
            var e = t.elements.dialog;
            "none" === e.style.maxWidth && (e.style.maxWidth = e.style.minWidth = e.style.width = e.style.height = e.style.minHeight = e.style.left = "", ie = Number.Nan, oe = re = se = 0)
          }

          function de() {
            for (var t = 0; t < f.length; t += 1) {
              var e = f[t];
              e.get("autoReset") && (ee(e), ue(e))
            }
          }

          function fe(t) {
            k(t.elements.dialog, "focus", t.__internal.bringToFrontHandler, !0)
          }

          function he(t) {
            T(t.elements.dialog, "focus", t.__internal.bringToFrontHandler, !0)
          }

          function pe(t) {
            k(t.elements.header, "mousedown", t.__internal.beginMoveHandler), k(t.elements.header, "touchstart", t.__internal.beginMoveHandler, !1, !1)
          }

          function ge(t) {
            T(t.elements.header, "mousedown", t.__internal.beginMoveHandler), T(t.elements.header, "touchstart", t.__internal.beginMoveHandler, !1, !1)
          }

          function me(t) {
            k(t.elements.resizeHandle, "mousedown", t.__internal.beginResizeHandler), k(t.elements.resizeHandle, "touchstart", t.__internal.beginResizeHandler, !1, !1)
          }

          function ve(t) {
            T(t.elements.resizeHandle, "mousedown", t.__internal.beginResizeHandler), T(t.elements.resizeHandle, "touchstart", t.__internal.beginResizeHandler, !1, !1)
          }
          return {
            __init: ct,
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
              return this.elements.root.className.indexOf(at) < 0
            },
            maximize: function () {
              return this.isMaximized() || xt(this), this
            },
            restore: function () {
              return this.isMaximized() && kt(this), this
            },
            pin: function () {
              return this.isPinned() || wt(this), this
            },
            unpin: function () {
              return this.isPinned() && _t(this), this
            },
            bringToFront: function () {
              return gt(0, this), this
            },
            moveTo: function (t, e) {
              if (!isNaN(t) && !isNaN(e)) {
                O("onmove", this);
                var n = this.elements.dialog,
                  i = n,
                  o = 0,
                  r = 0;
                n.style.left && (o -= parseInt(n.style.left, 10)), n.style.top && (r -= parseInt(n.style.top, 10));
                do {
                  o += i.offsetLeft, r += i.offsetTop
                } while (i = i.offsetParent);
                var s = t - o,
                  a = e - r;
                g() && (s *= -1), n.style.left = s + "px", n.style.top = a + "px", O("onmoved", this)
              }
              return this
            },
            resizeTo: function (t, e) {
              var n = parseFloat(t),
                i = parseFloat(e),
                o = /(\d*\.\d+|\d+)%/;
              if (!isNaN(n) && !isNaN(i) && !0 === this.get("resizable")) {
                O("onresize", this), ("" + t).match(o) && (n = n / 100 * document.documentElement.clientWidth), ("" + e).match(o) && (i = i / 100 * document.documentElement.clientHeight);
                var r = this.elements.dialog;
                "none" !== r.style.maxWidth && (r.style.minWidth = (re = r.offsetWidth) + "px"), r.style.maxWidth = "none", r.style.minHeight = this.elements.header.offsetHeight + this.elements.footer.offsetHeight + "px", r.style.width = n + "px", r.style.height = i + "px", O("onresized", this)
              }
              return this
            },
            setting: function (t, e) {
              var n = this,
                i = vt(this, this.__internal.options, (function (t, e, i) {
                  mt(n, t, e, i)
                }), t, e);
              if ("get" === i.op) return i.found ? i.value : void 0 !== this.settings ? vt(this, this.settings, this.settingUpdated || function () {}, t, e).value : void 0;
              if ("set" === i.op) {
                if (i.items.length > 0)
                  for (var o = this.settingUpdated || function () {}, r = 0; r < i.items.length; r += 1) {
                    var s = i.items[r];
                    s.found || void 0 === this.settings || vt(this, this.settings, o, s.key, s.value)
                  }
                return this
              }
            },
            set: function (t, e) {
              return this.setting(t, e), this
            },
            get: function (t) {
              return this.setting(t)
            },
            setHeader: function (t) {
              return "string" == typeof t ? (y(this.elements.header), this.elements.header.innerHTML = t) : t instanceof n.HTMLElement && this.elements.header.firstChild !== t && (y(this.elements.header), this.elements.header.appendChild(t)), this
            },
            setContent: function (t) {
              return "string" == typeof t ? (y(this.elements.content), this.elements.content.innerHTML = t) : t instanceof n.HTMLElement && this.elements.content.firstChild !== t && (y(this.elements.content), this.elements.content.appendChild(t)), this
            },
            showModal: function (t) {
              return this.show(!0, t)
            },
            show: function (i, r) {
              if (ct(this), this.__internal.isOpen) {
                ee(this), ue(this), h(this.elements.dialog, st);
                var s = this;
                setTimeout((function () {
                  p(s.elements.dialog, st)
                }), 200)
              } else {
                if (this.__internal.isOpen = !0, f.push(this), D.defaults.maintainFocus && (this.__internal.activeElement = document.activeElement), document.body.hasAttribute("tabindex") || document.body.setAttribute("tabindex", o = "0"), "function" == typeof this.prepare && this.prepare(), l = this, 1 === f.length && (k(n, "resize", de), k(document.body, "keyup", It), k(document.body, "keydown", Lt), k(document.body, "focus", Rt), k(document.documentElement, "mousemove", Zt), k(document.documentElement, "touchmove", Zt, !1, !1), k(document.documentElement, "mouseup", te), k(document.documentElement, "touchend", te), k(document.documentElement, "mousemove", le), k(document.documentElement, "touchmove", le, !1, !1), k(document.documentElement, "mouseup", ce), k(document.documentElement, "touchend", ce)), k(l.elements.commands.container, "click", l.__internal.commandsClickHandler), k(l.elements.footer, "click", l.__internal.buttonsClickHandler), k(l.elements.reset[0], "focusin", l.__internal.resetHandler), k(l.elements.reset[0], "keydown", Bt), k(l.elements.reset[1], "focusin", l.__internal.resetHandler), Dt = !0, k(l.elements.dialog, C.type, l.__internal.transitionInHandler), l.get("modal") || fe(l), l.get("resizable") && me(l), l.get("movable") && pe(l), void 0 !== i && this.set("modal", i), t = v(), e = m(), dt(), "string" == typeof r && "" !== r && (this.__internal.className = r, h(this.elements.root, r)), this.get("startMaximized") ? this.maximize() : this.isMaximized() && kt(this), St(this), this.elements.root.removeAttribute("style"), p(this.elements.root, q), h(this.elements.root, $), clearTimeout(this.__internal.timerIn), this.__internal.timerIn = setTimeout(this.__internal.transitionInHandler, C.supported ? 1e3 : 100), _) {
                  var a = this.elements.root;
                  a.style.display = "none", setTimeout((function () {
                    a.style.display = "block"
                  }), 0)
                }
                this.elements.root.offsetWidth, p(this.elements.root, X), ut(), "function" == typeof this.hooks.onshow && this.hooks.onshow.call(this), O("onshow", this)
              }
              var l;
              return this
            },
            close: function () {
              var t;
              return this.__internal.isOpen && !1 !== O("onclosing", this) && (t = this, 1 === f.length && (T(n, "resize", de), T(document.body, "keyup", It), T(document.body, "keydown", Lt), T(document.body, "focus", Rt), T(document.documentElement, "mousemove", Zt), T(document.documentElement, "mouseup", te), T(document.documentElement, "mousemove", le), T(document.documentElement, "mouseup", ce)), T(t.elements.commands.container, "click", t.__internal.commandsClickHandler), T(t.elements.footer, "click", t.__internal.buttonsClickHandler), T(t.elements.reset[0], "focusin", t.__internal.resetHandler), T(t.elements.reset[0], "keydown", Bt), T(t.elements.reset[1], "focusin", t.__internal.resetHandler), k(t.elements.dialog, C.type, t.__internal.transitionOutHandler), t.get("modal") || he(t), t.get("movable") && ge(t), t.get("resizable") && ve(t), p(this.elements.root, $), h(this.elements.root, q), clearTimeout(this.__internal.timerOut), this.__internal.timerOut = setTimeout(this.__internal.transitionOutHandler, C.supported ? 1e3 : 100), h(this.elements.root, X), this.elements.modal.offsetWidth, D.defaults.maintainFocus && this.__internal.activeElement && (this.__internal.activeElement.focus(), this.__internal.activeElement = null), void 0 !== this.__internal.className && "" !== this.__internal.className && p(this.elements.root, this.__internal.className), "function" == typeof this.hooks.onclose && this.hooks.onclose.call(this), O("onclose", this), f.splice(f.indexOf(this), 1), this.__internal.isOpen = !1, dt()), f.length || "0" !== o || document.body.removeAttribute("tabindex"), this
            },
            closeOthers: function () {
              return D.closeAll(this), this
            },
            destroy: function () {
              return this.__internal && (this.__internal.isOpen ? (this.__internal.destroy = function () {
                w(this, ct)
              }, this.close()) : this.__internal.destroy || w(this, ct)), this
            }
          }
        }(),
        N = function () {
          var t, e = [],
            i = d.notifier.classes,
            o = i.base;

          function r(e) {
            e.__internal || (e.__internal = {
              position: D.defaults.notifier.position,
              delay: D.defaults.notifier.delay
            }, t = document.createElement("DIV"), ("transitionOff" in d.notifier ? d.notifier.transitionOff : d.transitionOff) && (o = i.base + " ajs-no-transition"), a(e));
            t.parentNode !== document.body && document.body.appendChild(t)
          }

          function s(t) {
            t.__internal.pushed = !0, e.push(t)
          }

          function a(e) {
            switch (t.className = o, e.__internal.position) {
              case "top-right":
                h(t, i.top + " " + i.right);
                break;
              case "top-left":
                h(t, i.top + " " + i.left);
                break;
              case "top-center":
                h(t, i.top + " " + i.center);
                break;
              case "bottom-left":
                h(t, i.bottom + " " + i.left);
                break;
              case "bottom-center":
                h(t, i.bottom + " " + i.center);
                break;
              default:
              case "bottom-right":
                h(t, i.bottom + " " + i.right)
            }
          }

          function l(o, r) {
            function a(t, e) {
              e.__internal.closeButton && "true" !== t.target.getAttribute("data-close") || e.dismiss(!0)
            }

            function l(e, n) {
              T(n.element, C.type, l), t.removeChild(n.element)
            }

            function c(t) {
              clearTimeout(t.__internal.timer), clearTimeout(t.__internal.transitionTimeout)
            }
            return function (t) {
              return t.__internal || (t.__internal = {
                pushed: !1,
                delay: void 0,
                timer: void 0,
                clickHandler: void 0,
                transitionEndHandler: void 0,
                transitionTimeout: void 0
              }, t.__internal.clickHandler = S(t, a), t.__internal.transitionEndHandler = S(t, l)), t
            }({
              element: o,
              push: function (e, n) {
                if (!this.__internal.pushed) {
                  var o, r;
                  switch (s(this), c(this), arguments.length) {
                    case 0:
                      r = this.__internal.delay;
                      break;
                    case 1:
                      "number" == typeof e ? r = e : (o = e, r = this.__internal.delay);
                      break;
                    case 2:
                      o = e, r = n
                  }
                  return this.__internal.closeButton = D.defaults.notifier.closeButton, void 0 !== o && this.setContent(o), N.__internal.position.indexOf("top") < 0 ? t.appendChild(this.element) : t.insertBefore(this.element, t.firstChild), this.element.offsetWidth, h(this.element, i.visible), k(this.element, "click", this.__internal.clickHandler), this.delay(r)
                }
                return this
              },
              ondismiss: function () {},
              callback: r,
              dismiss: function (n) {
                var o;
                return this.__internal.pushed && (c(this), "function" == typeof this.ondismiss && !1 === this.ondismiss.call(this) || (T(this.element, "click", this.__internal.clickHandler), void 0 !== this.element && this.element.parentNode === t && (this.__internal.transitionTimeout = setTimeout(this.__internal.transitionEndHandler, C.supported ? 1e3 : 100), p(this.element, i.visible), "function" == typeof this.callback && this.callback.call(this, n)), o = this, e.splice(e.indexOf(o), 1), o.__internal.pushed = !1)), this
              },
              delay: function (t) {
                if (c(this), this.__internal.delay = void 0 === t || isNaN(+t) ? N.__internal.delay : +t, this.__internal.delay > 0) {
                  var e = this;
                  this.__internal.timer = setTimeout((function () {
                    e.dismiss()
                  }), 1e3 * this.__internal.delay)
                }
                return this
              },
              setContent: function (t) {
                if ("string" == typeof t ? (y(this.element), this.element.innerHTML = t) : t instanceof n.HTMLElement && this.element.firstChild !== t && (y(this.element), this.element.appendChild(t)), this.__internal.closeButton) {
                  var e = document.createElement("span");
                  h(e, i.close), e.setAttribute("data-close", !0), this.element.appendChild(e)
                }
                return this
              },
              dismissOthers: function () {
                return N.dismissAll(this), this
              }
            })
          }
          return {
            setting: function (t, e) {
              if (r(this), void 0 === e) return this.__internal[t];
              switch (t) {
                case "position":
                  this.__internal.position = e, a(this);
                  break;
                case "delay":
                  this.__internal.delay = e
              }
              return this
            },
            set: function (t, e) {
              return this.setting(t, e), this
            },
            get: function (t) {
              return this.setting(t)
            },
            create: function (t, e) {
              r(this);
              var n = document.createElement("div");
              return n.className = i.message + ("string" == typeof t && "" !== t ? " " + i.prefix + t : ""), l(n, e)
            },
            dismissAll: function (t) {
              for (var n = e.slice(0), i = 0; i < n.length; i += 1) {
                var o = n[i];
                void 0 !== t && t === o || o.dismiss()
              }
            }
          }
        }();
      var D = new function () {
        var t = {};

        function e(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          return t
        }

        function n(e) {
          var n = t[e].dialog;
          return n && "function" == typeof n.__init && n.__init(n), n
        }
        return {
          defaults: d,
          dialog: function (i, o, r, s) {
            if ("function" != typeof o) return n(i);
            if (this.hasOwnProperty(i)) throw new Error("alertify.dialog: name already exists");
            var a = function (n, i, o, r) {
              var s = {
                dialog: null,
                factory: i
              };
              return void 0 !== r && (s.factory = function () {
                return e(new t[r].factory, new i)
              }), o || (s.dialog = e(new s.factory, A)), t[n] = s
            }(i, o, r, s);
            this[i] = r ? function () {
              if (0 === arguments.length) return a.dialog;
              var t = e(new a.factory, A);
              return t && "function" == typeof t.__init && t.__init(t), t.main.apply(t, arguments), t.show.apply(t)
            } : function () {
              if (a.dialog && "function" == typeof a.dialog.__init && a.dialog.__init(a.dialog), 0 === arguments.length) return a.dialog;
              var t = a.dialog;
              return t.main.apply(a.dialog, arguments), t.show.apply(a.dialog)
            }
          },
          closeAll: function (t) {
            for (var e = f.slice(0), n = 0; n < e.length; n += 1) {
              var i = e[n];
              void 0 !== t && t === i || i.close()
            }
          },
          setting: function (t, e, i) {
            if ("notifier" === t) return N.setting(e, i);
            var o = n(t);
            return o ? o.setting(e, i) : void 0
          },
          set: function (t, e, n) {
            return this.setting(t, e, n)
          },
          get: function (t, e) {
            return this.setting(t, e)
          },
          notify: function (t, e, n, i) {
            return N.create(e, i).push(t, n)
          },
          message: function (t, e, n) {
            return N.create(null, n).push(t, e)
          },
          success: function (t, e, n) {
            return N.create("success", n).push(t, e)
          },
          error: function (t, e, n) {
            return N.create("error", n).push(t, e)
          },
          warning: function (t, e, n) {
            return N.create("warning", n).push(t, e)
          },
          dismissAll: function () {
            N.dismissAll()
          }
        }
      };
      D.dialog("alert", (function () {
        return {
          main: function (t, e, n) {
            var i, o, r;
            switch (arguments.length) {
              case 1:
                o = t;
                break;
              case 2:
                "function" == typeof e ? (o = t, r = e) : (i = t, o = e);
                break;
              case 3:
                i = t, o = e, r = n
            }
            return this.set("title", i), this.set("message", o), this.set("onok", r), this
          },
          setup: function () {
            return {
              buttons: [{
                text: D.defaults.glossary.ok,
                key: r,
                invokeOnClose: !0,
                className: D.defaults.theme.ok
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
          setMessage: function (t) {
            this.setContent(t)
          },
          settings: {
            message: void 0,
            onok: void 0,
            label: void 0
          },
          settingUpdated: function (t, e, n) {
            switch (t) {
              case "message":
                this.setMessage(n);
                break;
              case "label":
                this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = n)
            }
          },
          callback: function (t) {
            if ("function" == typeof this.get("onok")) {
              var e = this.get("onok").call(this, t);
              void 0 !== e && (t.cancel = !e)
            }
          }
        }
      })), D.dialog("confirm", (function () {
        var t = {
          timer: null,
          index: null,
          text: null,
          duration: null,
          task: function (n, i) {
            if (i.isOpen()) {
              if (i.__internal.buttons[t.index].element.innerHTML = t.text + " (&#8207;" + t.duration + "&#8207;) ", t.duration -= 1, -1 === t.duration) {
                e(i);
                var o = i.__internal.buttons[t.index],
                  r = E(t.index, o);
                "function" == typeof i.callback && i.callback.apply(i, [r]), !1 !== r.close && i.close()
              }
            } else e(i)
          }
        };

        function e(e) {
          null !== t.timer && (clearInterval(t.timer), t.timer = null, e.__internal.buttons[t.index].element.innerHTML = t.text)
        }

        function n(n, i, o) {
          e(n), t.duration = o, t.index = i, t.text = n.__internal.buttons[i].element.innerHTML, t.timer = setInterval(S(n, t.task), 1e3), t.task(null, n)
        }
        return {
          main: function (t, e, n, i) {
            var o, r, s, a;
            switch (arguments.length) {
              case 1:
                r = t;
                break;
              case 2:
                r = t, s = e;
                break;
              case 3:
                r = t, s = e, a = n;
                break;
              case 4:
                o = t, r = e, s = n, a = i
            }
            return this.set("title", o), this.set("message", r), this.set("onok", s), this.set("oncancel", a), this
          },
          setup: function () {
            return {
              buttons: [{
                text: D.defaults.glossary.ok,
                key: o,
                className: D.defaults.theme.ok
              }, {
                text: D.defaults.glossary.cancel,
                key: r,
                invokeOnClose: !0,
                className: D.defaults.theme.cancel
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
          setMessage: function (t) {
            this.setContent(t)
          },
          settings: {
            message: null,
            labels: null,
            onok: null,
            oncancel: null,
            defaultFocus: null,
            reverseButtons: null
          },
          settingUpdated: function (t, e, n) {
            switch (t) {
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
          callback: function (t) {
            var n;
            switch (e(this), t.index) {
              case 0:
                "function" == typeof this.get("onok") && void 0 !== (n = this.get("onok").call(this, t)) && (t.cancel = !n);
                break;
              case 1:
                "function" == typeof this.get("oncancel") && void 0 !== (n = this.get("oncancel").call(this, t)) && (t.cancel = !n)
            }
          },
          autoOk: function (t) {
            return n(this, 0, t), this
          },
          autoCancel: function (t) {
            return n(this, 1, t), this
          }
        }
      })), D.dialog("prompt", (function () {
        var t = document.createElement("INPUT"),
          e = document.createElement("P");
        return {
          main: function (t, e, n, i, o) {
            var r, s, a, l, c;
            switch (arguments.length) {
              case 1:
                s = t;
                break;
              case 2:
                s = t, a = e;
                break;
              case 3:
                s = t, a = e, l = n;
                break;
              case 4:
                s = t, a = e, l = n, c = i;
                break;
              case 5:
                r = t, s = e, a = n, l = i, c = o
            }
            return this.set("title", r), this.set("message", s), this.set("value", a), this.set("onok", l), this.set("oncancel", c), this
          },
          setup: function () {
            return {
              buttons: [{
                text: D.defaults.glossary.ok,
                key: o,
                className: D.defaults.theme.ok
              }, {
                text: D.defaults.glossary.cancel,
                key: r,
                invokeOnClose: !0,
                className: D.defaults.theme.cancel
              }],
              focus: {
                element: t,
                select: !0
              },
              options: {
                maximizable: !1,
                resizable: !1
              }
            }
          },
          build: function () {
            t.className = D.defaults.theme.input, t.setAttribute("type", "text"), t.value = this.get("value"), this.elements.content.appendChild(e), this.elements.content.appendChild(t)
          },
          prepare: function () {},
          setMessage: function (t) {
            "string" == typeof t ? (y(e), e.innerHTML = t) : t instanceof n.HTMLElement && e.firstChild !== t && (y(e), e.appendChild(t))
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
          settingUpdated: function (e, n, i) {
            switch (e) {
              case "message":
                this.setMessage(i);
                break;
              case "value":
                t.value = i;
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
                    t.type = i;
                    break;
                  default:
                    t.type = "text"
                }
                break;
              case "labels":
                i.ok && this.__internal.buttons[0].element && (this.__internal.buttons[0].element.innerHTML = i.ok), i.cancel && this.__internal.buttons[1].element && (this.__internal.buttons[1].element.innerHTML = i.cancel);
                break;
              case "reverseButtons":
                !0 === i ? this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element) : this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)
            }
          },
          callback: function (e) {
            var n;
            switch (e.index) {
              case 0:
                this.settings.value = t.value, "function" == typeof this.get("onok") && void 0 !== (n = this.get("onok").call(this, e, this.settings.value)) && (e.cancel = !n);
                break;
              case 1:
                "function" == typeof this.get("oncancel") && void 0 !== (n = this.get("oncancel").call(this, e)) && (e.cancel = !n), e.cancel || (t.value = this.settings.value)
            }
          }
        }
      })), "object" == typeof t.exports ? t.exports = D : void 0 === (i = function () {
        return D
      }.apply(e, [])) || (t.exports = i)
    }("undefined" != typeof window ? window : this)
  }
});