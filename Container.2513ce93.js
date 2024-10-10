function e(e, t, n, r) {
    Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0,
        configurable: !0
    })
}
function t(e) {
    return e && e.__esModule ? e.default : e
}
var n = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
n.register("12hlY", (function(t, r) {
    e(t.exports, "useNotification", (function() {
        return n("9zs3m").default
    }
    )),
    e(t.exports, "Notice", (function() {
        return n("2bY47").default
    }
    ));
    n("9zs3m"),
    n("2bY47")
}
)),
n.register("9zs3m", (function(t, r) {
    e(t.exports, "default", (function() {
        return E
    }
    ));
    var o = n("9qi0g")
      , u = n("87waR")
      , a = n("2Af7I")
      , i = n("fywoC")
      , f = n("jRt7A")
      , c = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"]
      , l = function() {
        return document.body
    }
      , s = 0;
    function d() {
        for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return n.forEach((function(t) {
            t && Object.keys(t).forEach((function(n) {
                var r = t[n];
                void 0 !== r && (e[n] = r)
            }
            ))
        }
        )),
        e
    }
    function E() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = e.getContainer
          , n = void 0 === t ? l : t
          , r = e.motion
          , E = e.prefixCls
          , v = e.maxCount
          , p = e.className
          , T = e.style
          , m = e.onAllRemoved
          , S = (0,
        a.default)(e, c)
          , y = i.useState()
          , A = (0,
        u.default)(y, 2)
          , R = A[0]
          , P = A[1]
          , C = i.useRef()
          , k = i.createElement(f.default, {
            container: R,
            ref: C,
            prefixCls: E,
            motion: r,
            maxCount: v,
            className: p,
            style: T,
            onAllRemoved: m
        })
          , _ = i.useState([])
          , h = (0,
        u.default)(_, 2)
          , g = h[0]
          , N = h[1]
          , x = i.useMemo((function() {
            return {
                open: function(e) {
                    var t = d(S, e);
                    null !== t.key && void 0 !== t.key || (t.key = "rc-notification-".concat(s),
                    s += 1),
                    N((function(e) {
                        return [].concat((0,
                        o.default)(e), [{
                            type: "open",
                            config: t
                        }])
                    }
                    ))
                },
                close: function(e) {
                    N((function(t) {
                        return [].concat((0,
                        o.default)(t), [{
                            type: "close",
                            key: e
                        }])
                    }
                    ))
                },
                destroy: function() {
                    N((function(e) {
                        return [].concat((0,
                        o.default)(e), [{
                            type: "destroy"
                        }])
                    }
                    ))
                }
            }
        }
        ), []);
        return i.useEffect((function() {
            P(n())
        }
        )),
        i.useEffect((function() {
            C.current && g.length && (g.forEach((function(e) {
                switch (e.type) {
                case "open":
                    C.current.open(e.config);
                    break;
                case "close":
                    C.current.close(e.key);
                    break;
                case "destroy":
                    C.current.destroy()
                }
            }
            )),
            N([]))
        }
        ), [g]),
        [x, k]
    }
}
)),
n.register("jRt7A", (function(r, o) {
    e(r.exports, "default", (function() {
        return v
    }
    ));
    var u = n("kqQIs")
      , a = n("lilbF")
      , i = n("9qi0g")
      , f = n("87waR")
      , c = n("fywoC")
      , l = n("kK88x");
    n("5pQrD");
    var s = n("kDECZ")
      , d = n("fe1on")
      , E = n("2bY47")
      , v = c.forwardRef((function(e, n) {
        var r = e.prefixCls
          , o = void 0 === r ? "rc-notification" : r
          , v = e.container
          , p = e.motion
          , T = e.maxCount
          , m = e.className
          , S = e.style
          , y = e.onAllRemoved
          , A = c.useState([])
          , R = (0,
        f.default)(A, 2)
          , P = R[0]
          , C = R[1]
          , k = function(e) {
            var t, n = P.find((function(t) {
                return t.key === e
            }
            ));
            null == n || null === (t = n.onClose) || void 0 === t || t.call(n),
            C((function(t) {
                return t.filter((function(t) {
                    return t.key !== e
                }
                ))
            }
            ))
        };
        c.useImperativeHandle(n, (function() {
            return {
                open: function(e) {
                    C((function(t) {
                        var n, r = (0,
                        i.default)(t), o = r.findIndex((function(t) {
                            return t.key === e.key
                        }
                        )), u = (0,
                        a.default)({}, e);
                        o >= 0 ? (u.times = ((null === (n = t[o]) || void 0 === n ? void 0 : n.times) || 0) + 1,
                        r[o] = u) : (u.times = 0,
                        r.push(u));
                        return T > 0 && r.length > T && (r = r.slice(-T)),
                        r
                    }
                    ))
                },
                close: function(e) {
                    k(e)
                },
                destroy: function() {
                    C([])
                }
            }
        }
        ));
        var _ = c.useState({})
          , h = (0,
        f.default)(_, 2)
          , g = h[0]
          , N = h[1];
        c.useEffect((function() {
            var e = {};
            P.forEach((function(t) {
                var n = t.placement
                  , r = void 0 === n ? "topRight" : n;
                r && (e[r] = e[r] || [],
                e[r].push(t))
            }
            )),
            Object.keys(g).forEach((function(t) {
                e[t] = e[t] || []
            }
            )),
            N(e)
        }
        ), [P]);
        var x = c.useRef(!1);
        if (c.useEffect((function() {
            Object.keys(g).length > 0 ? x.current = !0 : x.current && (null == y || y(),
            x.current = !1)
        }
        ), [g]),
        !v)
            return null;
        var b = Object.keys(g);
        return (0,
        l.createPortal)(c.createElement(c.Fragment, null, b.map((function(e) {
            var n = g[e].map((function(e) {
                return {
                    config: e,
                    key: e.key
                }
            }
            ))
              , r = "function" == typeof p ? p(e) : p;
            return c.createElement(s.default, (0,
            u.default)({
                key: e,
                className: t(d)(o, "".concat(o, "-").concat(e), null == m ? void 0 : m(e)),
                style: null == S ? void 0 : S(e),
                keys: n,
                motionAppear: !0
            }, r, {
                onAllRemoved: function() {
                    !function(e) {
                        N((function(t) {
                            var n = (0,
                            a.default)({}, t);
                            return (n[e] || []).length || delete n[e],
                            n
                        }
                        ))
                    }(e)
                }
            }), (function(e, n) {
                var r = e.config
                  , i = e.className
                  , f = e.style
                  , l = r.key
                  , s = r.times
                  , v = r.className
                  , p = r.style;
                return c.createElement(E.default, (0,
                u.default)({}, r, {
                    ref: n,
                    prefixCls: o,
                    className: t(d)(i, v),
                    style: (0,
                    a.default)((0,
                    a.default)({}, f), p),
                    times: s,
                    key: l,
                    eventKey: l,
                    onNoticeClose: k
                }))
            }
            ))
        }
        ))), v)
    }
    ))
}
)),
n.register("5pQrD", (function(t, r) {
    e(t.exports, "CSSMotionList", (function() {
        return n("kDECZ").default
    }
    ));
    var o = n("hoR7f");
    n("kDECZ"),
    o.default
}
)),
n.register("hoR7f", (function(r, o) {
    e(r.exports, "default", (function() {
        return S
    }
    ));
    var u = n("6oiQi")
      , a = n("lilbF")
      , i = n("87waR")
      , f = n("2YeOm")
      , c = n("fywoC")
      , l = (c = n("fywoC"),
    n("3qdcB"))
      , s = n("fk9zJ")
      , d = n("fe1on")
      , E = n("1aJtd")
      , v = n("5995i")
      , p = n("03tOr")
      , T = n("dIswj")
      , m = n("4CMOi");
    var S = function(e) {
        var n = e;
        function r(e) {
            return !(!e.motionName || !n)
        }
        "object" === (0,
        f.default)(e) && (n = e.transitionSupport);
        var o = c.forwardRef((function(e, n) {
            var o = e.visible
              , f = void 0 === o || o
              , S = e.removeOnLeave
              , y = void 0 === S || S
              , A = e.forceRender
              , R = e.children
              , P = e.motionName
              , C = e.leavedClassName
              , k = e.eventProps
              , _ = r(e)
              , h = (0,
            c.useRef)()
              , g = (0,
            c.useRef)();
            var N = (0,
            p.default)(_, f, (function() {
                try {
                    return h.current instanceof HTMLElement ? h.current : (0,
                    l.default)(g.current)
                } catch (e) {
                    return null
                }
            }
            ), e)
              , x = (0,
            i.default)(N, 4)
              , b = x[0]
              , w = x[1]
              , O = x[2]
              , U = x[3]
              , L = c.useRef(U);
            U && (L.current = !0);
            var V, D = c.useCallback((function(e) {
                h.current = e,
                (0,
                s.fillRef)(n, e)
            }
            ), [n]), I = (0,
            a.default)((0,
            a.default)({}, k), {}, {
                visible: f
            });
            if (R)
                if (b !== v.STATUS_NONE && r(e)) {
                    var M, j;
                    w === v.STEP_PREPARE ? j = "prepare" : (0,
                    m.isActive)(w) ? j = "active" : w === v.STEP_START && (j = "start"),
                    V = R((0,
                    a.default)((0,
                    a.default)({}, I), {}, {
                        className: t(d)((0,
                        E.getTransitionName)(P, b), (M = {},
                        (0,
                        u.default)(M, (0,
                        E.getTransitionName)(P, "".concat(b, "-").concat(j)), j),
                        (0,
                        u.default)(M, P, "string" == typeof P),
                        M)),
                        style: O
                    }), D)
                } else
                    V = U ? R((0,
                    a.default)({}, I), D) : !y && L.current && C ? R((0,
                    a.default)((0,
                    a.default)({}, I), {}, {
                        className: C
                    }), D) : A || !y && !C ? R((0,
                    a.default)((0,
                    a.default)({}, I), {}, {
                        style: {
                            display: "none"
                        }
                    }), D) : null;
            else
                V = null;
            c.isValidElement(V) && (0,
            s.supportRef)(V) && (V.ref || (V = c.cloneElement(V, {
                ref: D
            })));
            return c.createElement(T.default, {
                ref: g
            }, V)
        }
        ));
        return o.displayName = "CSSMotion",
        o
    }(E.supportTransition)
}
)),
n.register("1aJtd", (function(t, r) {
    e(t.exports, "supportTransition", (function() {
        return m
    }
    )),
    e(t.exports, "animationEndName", (function() {
        return S
    }
    )),
    e(t.exports, "transitionEndName", (function() {
        return y
    }
    )),
    e(t.exports, "getTransitionName", (function() {
        return A
    }
    ));
    var o = n("2YeOm")
      , u = n("9U8Wa");
    function a(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit".concat(e)] = "webkit".concat(t),
        n["Moz".concat(e)] = "moz".concat(t),
        n["ms".concat(e)] = "MS".concat(t),
        n["O".concat(e)] = "o".concat(t.toLowerCase()),
        n
    }
    var i, f, c, l = (i = (0,
    u.default)(),
    f = "undefined" != typeof window ? window : {},
    c = {
        animationend: a("Animation", "AnimationEnd"),
        transitionend: a("Transition", "TransitionEnd")
    },
    i && ("AnimationEvent"in f || delete c.animationend.animation,
    "TransitionEvent"in f || delete c.transitionend.transition),
    c), s = {};
    if ((0,
    u.default)()) {
        var d = document.createElement("div");
        s = d.style
    }
    var E = {};
    function v(e) {
        if (E[e])
            return E[e];
        var t = l[e];
        if (t)
            for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
                var u = n[o];
                if (Object.prototype.hasOwnProperty.call(t, u) && u in s)
                    return E[e] = t[u],
                    E[e]
            }
        return ""
    }
    var p = v("animationend")
      , T = v("transitionend")
      , m = !(!p || !T)
      , S = p || "animationend"
      , y = T || "transitionend";
    function A(e, t) {
        return e ? "object" === (0,
        o.default)(e) ? e[t.replace(/-\w/g, (function(e) {
            return e[1].toUpperCase()
        }
        ))] : "".concat(e, "-").concat(t) : null
    }
}
)),
n.register("5995i", (function(t, n) {
    e(t.exports, "STATUS_NONE", (function() {
        return r
    }
    )),
    e(t.exports, "STATUS_APPEAR", (function() {
        return o
    }
    )),
    e(t.exports, "STATUS_ENTER", (function() {
        return u
    }
    )),
    e(t.exports, "STATUS_LEAVE", (function() {
        return a
    }
    )),
    e(t.exports, "STEP_NONE", (function() {
        return i
    }
    )),
    e(t.exports, "STEP_PREPARE", (function() {
        return f
    }
    )),
    e(t.exports, "STEP_START", (function() {
        return c
    }
    )),
    e(t.exports, "STEP_ACTIVE", (function() {
        return l
    }
    )),
    e(t.exports, "STEP_ACTIVATED", (function() {
        return s
    }
    ));
    var r = "none"
      , o = "appear"
      , u = "enter"
      , a = "leave"
      , i = "none"
      , f = "prepare"
      , c = "start"
      , l = "active"
      , s = "end"
}
)),
n.register("03tOr", (function(t, r) {
    e(t.exports, "default", (function() {
        return E
    }
    ));
    var o = n("lilbF")
      , u = n("6oiQi")
      , a = n("87waR")
      , i = n("fywoC")
      , f = (i = n("fywoC"),
    n("e62KD"))
      , c = n("5995i")
      , l = n("4CMOi")
      , s = n("htiqe")
      , d = n("fyvas");
    function E(e, t, n, r) {
        var E = r.motionEnter
          , v = void 0 === E || E
          , p = r.motionAppear
          , T = void 0 === p || p
          , m = r.motionLeave
          , S = void 0 === m || m
          , y = r.motionDeadline
          , A = r.motionLeaveImmediately
          , R = r.onAppearPrepare
          , P = r.onEnterPrepare
          , C = r.onLeavePrepare
          , k = r.onAppearStart
          , _ = r.onEnterStart
          , h = r.onLeaveStart
          , g = r.onAppearActive
          , N = r.onEnterActive
          , x = r.onLeaveActive
          , b = r.onAppearEnd
          , w = r.onEnterEnd
          , O = r.onLeaveEnd
          , U = r.onVisibleChanged
          , L = (0,
        f.default)()
          , V = (0,
        a.default)(L, 2)
          , D = V[0]
          , I = V[1]
          , M = (0,
        f.default)(c.STATUS_NONE)
          , j = (0,
        a.default)(M, 2)
          , K = j[0]
          , q = j[1]
          , Q = (0,
        f.default)(null)
          , Y = (0,
        a.default)(Q, 2)
          , F = Y[0]
          , z = Y[1]
          , Z = (0,
        i.useRef)(!1)
          , B = (0,
        i.useRef)(null);
        function J() {
            return n()
        }
        var W = (0,
        i.useRef)(!1);
        function H(e) {
            var t = J();
            if (!e || e.deadline || e.target === t) {
                var n, r = W.current;
                K === c.STATUS_APPEAR && r ? n = null == b ? void 0 : b(t, e) : K === c.STATUS_ENTER && r ? n = null == w ? void 0 : w(t, e) : K === c.STATUS_LEAVE && r && (n = null == O ? void 0 : O(t, e)),
                K !== c.STATUS_NONE && r && !1 !== n && (q(c.STATUS_NONE, !0),
                z(null, !0))
            }
        }
        var G = (0,
        s.default)(H)
          , X = (0,
        a.default)(G, 1)[0]
          , $ = i.useMemo((function() {
            var e, t, n;
            switch (K) {
            case c.STATUS_APPEAR:
                return e = {},
                (0,
                u.default)(e, c.STEP_PREPARE, R),
                (0,
                u.default)(e, c.STEP_START, k),
                (0,
                u.default)(e, c.STEP_ACTIVE, g),
                e;
            case c.STATUS_ENTER:
                return t = {},
                (0,
                u.default)(t, c.STEP_PREPARE, P),
                (0,
                u.default)(t, c.STEP_START, _),
                (0,
                u.default)(t, c.STEP_ACTIVE, N),
                t;
            case c.STATUS_LEAVE:
                return n = {},
                (0,
                u.default)(n, c.STEP_PREPARE, C),
                (0,
                u.default)(n, c.STEP_START, h),
                (0,
                u.default)(n, c.STEP_ACTIVE, x),
                n;
            default:
                return {}
            }
        }
        ), [K])
          , ee = (0,
        l.default)(K, (function(e) {
            if (e === c.STEP_PREPARE) {
                var t = $[c.STEP_PREPARE];
                return t ? t(J()) : l.SkipStep
            }
            var n;
            re in $ && z((null === (n = $[re]) || void 0 === n ? void 0 : n.call($, J(), null)) || null);
            return re === c.STEP_ACTIVE && (X(J()),
            y > 0 && (clearTimeout(B.current),
            B.current = setTimeout((function() {
                H({
                    deadline: !0
                })
            }
            ), y))),
            l.DoStep
        }
        ))
          , te = (0,
        a.default)(ee, 2)
          , ne = te[0]
          , re = te[1]
          , oe = (0,
        l.isActive)(re);
        W.current = oe,
        (0,
        d.default)((function() {
            I(t);
            var n, r = Z.current;
            (Z.current = !0,
            e) && (!r && t && T && (n = c.STATUS_APPEAR),
            r && t && v && (n = c.STATUS_ENTER),
            (r && !t && S || !r && A && !t && S) && (n = c.STATUS_LEAVE),
            n && (q(n),
            ne()))
        }
        ), [t]),
        (0,
        i.useEffect)((function() {
            (K === c.STATUS_APPEAR && !T || K === c.STATUS_ENTER && !v || K === c.STATUS_LEAVE && !S) && q(c.STATUS_NONE)
        }
        ), [T, v, S]),
        (0,
        i.useEffect)((function() {
            return function() {
                Z.current = !1,
                clearTimeout(B.current)
            }
        }
        ), []);
        var ue = i.useRef(!1);
        (0,
        i.useEffect)((function() {
            D && (ue.current = !0),
            void 0 !== D && K === c.STATUS_NONE && ((ue.current || D) && (null == U || U(D)),
            ue.current = !0)
        }
        ), [D, K]);
        var ae = F;
        return $[c.STEP_PREPARE] && re === c.STEP_START && (ae = (0,
        o.default)({
            transition: "none"
        }, ae)),
        [K, re, ae, null != D ? D : t]
    }
}
)),
n.register("4CMOi", (function(t, r) {
    e(t.exports, "SkipStep", (function() {
        return s
    }
    )),
    e(t.exports, "DoStep", (function() {
        return d
    }
    )),
    e(t.exports, "isActive", (function() {
        return E
    }
    )),
    e(t.exports, "default", (function() {
        return v
    }
    ));
    var o = n("87waR")
      , u = n("fywoC")
      , a = n("e62KD")
      , i = n("5995i")
      , f = n("2SCf6")
      , c = n("fyvas")
      , l = [i.STEP_PREPARE, i.STEP_START, i.STEP_ACTIVE, i.STEP_ACTIVATED]
      , s = !1
      , d = !0;
    function E(e) {
        return e === i.STEP_ACTIVE || e === i.STEP_ACTIVATED
    }
    var v = function(e, t) {
        var n = (0,
        a.default)(i.STEP_NONE)
          , r = (0,
        o.default)(n, 2)
          , d = r[0]
          , E = r[1]
          , v = (0,
        f.default)()
          , p = (0,
        o.default)(v, 2)
          , T = p[0]
          , m = p[1];
        return (0,
        c.default)((function() {
            if (d !== i.STEP_NONE && d !== i.STEP_ACTIVATED) {
                var e = l.indexOf(d)
                  , n = l[e + 1]
                  , r = t(d);
                r === s ? E(n, !0) : T((function(e) {
                    function t() {
                        e.isCanceled() || E(n, !0)
                    }
                    !0 === r ? t() : Promise.resolve(r).then(t)
                }
                ))
            }
        }
        ), [e, d]),
        u.useEffect((function() {
            return function() {
                m()
            }
        }
        ), []),
        [function() {
            E(i.STEP_PREPARE, !0)
        }
        , d]
    }
}
)),
n.register("2SCf6", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }
    ));
    var o = n("fywoC")
      , u = n("iTPiI")
      , a = function() {
        var e = o.useRef(null);
        function t() {
            u.default.cancel(e.current)
        }
        return o.useEffect((function() {
            return function() {
                t()
            }
        }
        ), []),
        [function n(r) {
            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            t();
            var a = (0,
            u.default)((function() {
                o <= 1 ? r({
                    isCanceled: function() {
                        return a !== e.current
                    }
                }) : n(r, o - 1)
            }
            ));
            e.current = a
        }
        , t]
    }
}
)),
n.register("fyvas", (function(t, r) {
    e(t.exports, "default", (function() {
        return u
    }
    ));
    var o = n("fywoC")
      , u = (0,
    n("9U8Wa").default)() ? o.useLayoutEffect : o.useEffect
}
)),
n.register("htiqe", (function(t, r) {
    e(t.exports, "default", (function() {
        return a
    }
    ));
    var o = n("fywoC")
      , u = (o = n("fywoC"),
    n("1aJtd"))
      , a = function(e) {
        var t = (0,
        o.useRef)()
          , n = (0,
        o.useRef)(e);
        n.current = e;
        var r = o.useCallback((function(e) {
            n.current(e)
        }
        ), []);
        function a(e) {
            e && (e.removeEventListener(u.transitionEndName, r),
            e.removeEventListener(u.animationEndName, r))
        }
        return o.useEffect((function() {
            return function() {
                a(t.current)
            }
        }
        ), []),
        [function(e) {
            t.current && t.current !== e && a(t.current),
            e && e !== t.current && (e.addEventListener(u.transitionEndName, r),
            e.addEventListener(u.animationEndName, r),
            t.current = e)
        }
        , a]
    }
}
)),
n.register("dIswj", (function(t, r) {
    e(t.exports, "default", (function() {
        return c
    }
    ));
    var o = n("7qYtC")
      , u = n("1Byax")
      , a = n("lyBZd")
      , i = n("cLQch")
      , f = function(e) {
        (0,
        a.default)(n, e);
        var t = (0,
        i.default)(n);
        function n() {
            return (0,
            o.default)(this, n),
            t.apply(this, arguments)
        }
        return (0,
        u.default)(n, [{
            key: "render",
            value: function() {
                return this.props.children
            }
        }]),
        n
    }(n("fywoC").Component)
      , c = f
}
)),
n.register("kDECZ", (function(t, r) {
    e(t.exports, "default", (function() {
        return A
    }
    ));
    var o = n("kqQIs")
      , u = n("2Af7I")
      , a = n("lilbF")
      , i = n("7qYtC")
      , f = n("1Byax")
      , c = n("7lS6M")
      , l = n("lyBZd")
      , s = n("cLQch")
      , d = n("6oiQi")
      , E = n("fywoC")
      , v = n("hoR7f")
      , p = n("1aJtd")
      , T = n("8EaNO")
      , m = ["component", "children", "onVisibleChanged", "onAllRemoved"]
      , S = ["status"]
      , y = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
    var A = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.default
          , n = function(e) {
            (0,
            l.default)(r, e);
            var n = (0,
            s.default)(r);
            function r() {
                var e;
                (0,
                i.default)(this, r);
                for (var t = arguments.length, o = new Array(t), u = 0; u < t; u++)
                    o[u] = arguments[u];
                return e = n.call.apply(n, [this].concat(o)),
                (0,
                d.default)((0,
                c.default)(e), "state", {
                    keyEntities: []
                }),
                (0,
                d.default)((0,
                c.default)(e), "removeKey", (function(t) {
                    var n = e.state.keyEntities.map((function(e) {
                        return e.key !== t ? e : (0,
                        a.default)((0,
                        a.default)({}, e), {}, {
                            status: T.STATUS_REMOVED
                        })
                    }
                    ));
                    return e.setState({
                        keyEntities: n
                    }),
                    n.filter((function(e) {
                        return e.status !== T.STATUS_REMOVED
                    }
                    )).length
                }
                )),
                e
            }
            return (0,
            f.default)(r, [{
                key: "render",
                value: function() {
                    var e = this
                      , n = this.state.keyEntities
                      , r = this.props
                      , a = r.component
                      , i = r.children
                      , f = r.onVisibleChanged
                      , c = r.onAllRemoved
                      , l = (0,
                    u.default)(r, m)
                      , s = a || E.Fragment
                      , d = {};
                    return y.forEach((function(e) {
                        d[e] = l[e],
                        delete l[e]
                    }
                    )),
                    delete l.keys,
                    E.createElement(s, l, n.map((function(n) {
                        var r = n.status
                          , a = (0,
                        u.default)(n, S)
                          , l = r === T.STATUS_ADD || r === T.STATUS_KEEP;
                        return E.createElement(t, (0,
                        o.default)({}, d, {
                            key: a.key,
                            visible: l,
                            eventProps: a,
                            onVisibleChanged: function(t) {
                                (null == f || f(t, {
                                    key: a.key
                                }),
                                t) || 0 === e.removeKey(a.key) && c && c()
                            }
                        }), i)
                    }
                    )))
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = e.keys
                      , r = t.keyEntities
                      , o = (0,
                    T.parseKeys)(n);
                    return {
                        keyEntities: (0,
                        T.diffKeys)(r, o).filter((function(e) {
                            var t = r.find((function(t) {
                                var n = t.key;
                                return e.key === n
                            }
                            ));
                            return !t || t.status !== T.STATUS_REMOVED || e.status !== T.STATUS_REMOVE
                        }
                        ))
                    }
                }
            }]),
            r
        }(E.Component);
        return (0,
        d.default)(n, "defaultProps", {
            component: "div"
        }),
        n
    }(p.supportTransition)
}
)),
n.register("8EaNO", (function(t, r) {
    e(t.exports, "STATUS_ADD", (function() {
        return a
    }
    )),
    e(t.exports, "STATUS_KEEP", (function() {
        return i
    }
    )),
    e(t.exports, "STATUS_REMOVE", (function() {
        return f
    }
    )),
    e(t.exports, "STATUS_REMOVED", (function() {
        return c
    }
    )),
    e(t.exports, "parseKeys", (function() {
        return s
    }
    )),
    e(t.exports, "diffKeys", (function() {
        return d
    }
    ));
    var o = n("lilbF")
      , u = n("2YeOm")
      , a = "add"
      , i = "keep"
      , f = "remove"
      , c = "removed";
    function l(e) {
        var t;
        return t = e && "object" === (0,
        u.default)(e) && "key"in e ? e : {
            key: e
        },
        (0,
        o.default)((0,
        o.default)({}, t), {}, {
            key: String(t.key)
        })
    }
    function s() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return e.map(l)
    }
    function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          , n = []
          , r = 0
          , u = t.length
          , c = s(e)
          , l = s(t);
        c.forEach((function(e) {
            for (var t = !1, c = r; c < u; c += 1) {
                var s = l[c];
                if (s.key === e.key) {
                    r < c && (n = n.concat(l.slice(r, c).map((function(e) {
                        return (0,
                        o.default)((0,
                        o.default)({}, e), {}, {
                            status: a
                        })
                    }
                    ))),
                    r = c),
                    n.push((0,
                    o.default)((0,
                    o.default)({}, s), {}, {
                        status: i
                    })),
                    r += 1,
                    t = !0;
                    break
                }
            }
            t || n.push((0,
            o.default)((0,
            o.default)({}, e), {}, {
                status: f
            }))
        }
        )),
        r < u && (n = n.concat(l.slice(r).map((function(e) {
            return (0,
            o.default)((0,
            o.default)({}, e), {}, {
                status: a
            })
        }
        ))));
        var d = {};
        n.forEach((function(e) {
            var t = e.key;
            d[t] = (d[t] || 0) + 1
        }
        ));
        var E = Object.keys(d).filter((function(e) {
            return d[e] > 1
        }
        ));
        return E.forEach((function(e) {
            (n = n.filter((function(t) {
                var n = t.key
                  , r = t.status;
                return n !== e || r !== f
            }
            ))).forEach((function(t) {
                t.key === e && (t.status = i)
            }
            ))
        }
        )),
        n
    }
}
)),
n.register("2bY47", (function(r, o) {
    e(r.exports, "default", (function() {
        return l
    }
    ));
    var u = n("kqQIs")
      , a = n("6oiQi")
      , i = n("87waR")
      , f = n("fywoC")
      , c = n("fe1on")
      , l = f.forwardRef((function(e, n) {
        var r = e.prefixCls
          , o = e.style
          , l = e.className
          , s = e.duration
          , d = void 0 === s ? 4.5 : s
          , E = e.eventKey
          , v = e.content
          , p = e.closable
          , T = e.closeIcon
          , m = void 0 === T ? "x" : T
          , S = e.props
          , y = e.onClick
          , A = e.onNoticeClose
          , R = e.times
          , P = f.useState(!1)
          , C = (0,
        i.default)(P, 2)
          , k = C[0]
          , _ = C[1]
          , h = function() {
            A(E)
        };
        f.useEffect((function() {
            if (!k && d > 0) {
                var e = setTimeout((function() {
                    h()
                }
                ), 1e3 * d);
                return function() {
                    clearTimeout(e)
                }
            }
        }
        ), [d, k, R]);
        var g = "".concat(r, "-notice");
        return f.createElement("div", (0,
        u.default)({}, S, {
            ref: n,
            className: t(c)(g, l, (0,
            a.default)({}, "".concat(g, "-closable"), p)),
            style: o,
            onMouseEnter: function() {
                _(!0)
            },
            onMouseLeave: function() {
                _(!1)
            },
            onClick: y
        }), f.createElement("div", {
            className: "".concat(g, "-content")
        }, v), p && f.createElement("a", {
            tabIndex: 0,
            className: "".concat(g, "-close"),
            onClick: function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                h()
            }
        }, m))
    }
    ))
}
));
