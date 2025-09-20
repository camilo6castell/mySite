(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  scroll-snap-align: start;\n  padding: 2rem;\n  box-sizing: border-box;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
const Wrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section(_templateObject());
_c = Wrap;
function Section(param) {
    let { children, id } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrap, {
        id: id,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Section.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c1 = Section;
var _c, _c1;
__turbopack_context__.k.register(_c, "Wrap");
__turbopack_context__.k.register(_c1, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;              \n  flex-direction: column;\n  max-width: 900px;\n  margin: 0 auto;\n  gap: 1rem;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: ",
        ";\n  align-items: ",
        "; /* stretch para que hijos llenen la altura */\n  justify-content: center;\n  flex: ",
        ";\n  width: 100%;\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display:inline-flex;\n  gap:12px;\n  align-items:center;\n  padding:8px 12px;\n  border-radius:999px;\n  background: ",
        ";\n  color: ",
        ";\n  border: ",
        ";\n  width: fit-content;\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 3rem;\n  font-weight: 700;\n  margin-top: 1.2rem;\n  line-height: 1;\n  color: var(--text);\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  font-size: 1.6rem;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: 0.4rem;\n  word-spacing: 0.25rem;\n  color: var(--text);\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin-top: 1rem;\n  color: var(--muted);\n  font-size: 1.05rem;\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  flex: 1;                    /* ocupa el espacio disponible */\n  margin: 0 3rem;\n  border-radius: 12px;\n  overflow: hidden;           /* para que el border-radius funcione con background-image o <Image> */\n  box-shadow: 0 4px 12px ",
        ";\n  background-image: url(",
        ");\n  background-size: cover;\n  background-position: center;\n  z-index: 1000;\n  width: 100%;\n  height: ",
        ";     /* asegura que no colapse a 0px */\n"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject());
_c = Inner;
const HeroSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject1(), (param)=>{
    let { $isColumn = false } = param;
    return $isColumn ? 'column' : 'row';
}, (param)=>{
    let { $isColumn = false } = param;
    return $isColumn ? 'flex-start' : 'stretch';
}, (param)=>{
    let { $portion } = param;
    return $portion;
});
_c1 = HeroSection;
const Badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject2(), (param)=>{
    let { theme } = param;
    return theme.badge.bg;
}, (param)=>{
    let { theme } = param;
    return theme.badge.text;
}, (param)=>{
    let { theme } = param;
    return theme.badge.border;
});
_c2 = Badge;
const Title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject3());
_c3 = Title;
const Role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject4());
_c4 = Role;
const Desc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject5());
_c5 = Desc;
const HeroImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject6(), (param)=>{
    let { theme } = param;
    return theme.shadowColor;
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent_hero"].heroImage, (param)=>{
    let { theme } = param;
    return theme.heroImage.height;
});
_c6 = HeroImage;
function Hero() {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Inner, {
        className: "content-surface",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                $portion: 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                        $portion: 1,
                        $isColumn: true,
                        style: {
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                $inView: inView,
                                $direction: "down",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                                $delay: 1,
                                ref: ref,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent_hero"].badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                $inView: inView,
                                $direction: "fade",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                                $delay: 0,
                                ref: ref,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent_hero"].Title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Role, {
                                $inView: inView,
                                $direction: "fade",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                                $delay: 0.5,
                                ref: ref,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent_hero"].role
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                        $portion: 1,
                        $isColumn: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroImage, {
                            $inView: inView,
                            $direction: "left",
                            $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                            $delay: 0,
                            ref: ref
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                $portion: 1,
                $isColumn: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Desc, {
                        $inView: inView,
                        $direction: "up",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                        $delay: 1,
                        ref: ref,
                        style: {
                            width: '100%',
                            fontStyle: 'italic',
                            textAlign: 'center'
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent_hero"].DescOne
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Desc, {
                        $inView: inView,
                        $direction: "up",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                        $delay: 1.5,
                        ref: ref,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContent_hero"].DescTwo
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(Hero, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c7 = Hero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Inner");
__turbopack_context__.k.register(_c1, "HeroSection");
__turbopack_context__.k.register(_c2, "Badge");
__turbopack_context__.k.register(_c3, "Title");
__turbopack_context__.k.register(_c4, "Role");
__turbopack_context__.k.register(_c5, "Desc");
__turbopack_context__.k.register(_c6, "HeroImage");
__turbopack_context__.k.register(_c7, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectsPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 24px;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: relative;\n  overflow: hidden;\n  flex: 1;\n  max-width: 1100px;\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: grid;\n  gap: 16px;\n  grid-auto-flow: column;\n  grid-auto-columns: 100%;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 8px;\n  scroll-snap-align: start;\n\n  @media (max-width: 1024px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (max-width: 640px) {\n    grid-template-columns: 1fr;\n  }\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  height: fit-content;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 16px;\n  border-radius: 12px;\n  background: ",
        ";\n  border: 1px solid ",
        ";\n  box-shadow: 0 0 5px ",
        ";\n  transition: box-shadow 0.5s ease, background 3s ease, transform 0.3s ease;\n  h3 {\n    color: var(--text);\n    font-size: 1.25rem;\n    padding-bottom: .3rem;\n  }\n  p {\n    color: var(--muted);\n    padding-left: .3rem;\n  }  \n  div {\n    display: flex;\n    justify-content: space-between;\n    margin-top: .5rem;\n    padding-left: .3rem;\n    a {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-weight: 500;\n    color: var(--link);\n   }\n    .repo-link {\n      color: #d44cbe;\n      svg {\n        fill: #d44cbe;\n      }\n    }\n    .deployment-link {\n      color: #4ca2d4;\n      svg {\n        fill: #4ca2d4;\n      }\n    }\n  }  \n  &:hover {\n    box-shadow: 0 0 12px ",
        ";\n    transform: scale(1.02);\n  }\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  top: 50%;\n  ",
        "\n  transform: translateY(-50%);\n  background: none;\n  color: var(--text);\n  border: none;\n  cursor: pointer;\n  font-size: 4rem;\n  line-height: 1;\n  transition: opacity 0.4s ease, box-shadow 0.3s ease;\n  z-index: 5;\n\n  opacity: 1;\n  pointer-events: auto;\n\n  ",
        "\n\n  &:hover {\n    box-shadow: 0 4px 12px ",
        ";\n  }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// --- Styled components ---
const OuterWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject());
_c = OuterWrapper;
const CarouselWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject1());
_c1 = CarouselWrapper;
const Track = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject2());
_c2 = Track;
const Slide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject3());
_c3 = Slide;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article(_templateObject4(), (param)=>{
    let { theme } = param;
    return theme.bgCard;
}, (param)=>{
    let { theme } = param;
    return theme.borderCard;
}, (param)=>{
    let { theme } = param;
    return theme.shadowCard;
}, (param)=>{
    let { theme } = param;
    return theme.projectCard.hoverShadow;
});
_c4 = Card;
const Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button(_templateObject5(), (param)=>{
    let { $side } = param;
    return $side === 'left' ? 'left: -3rem;' : 'right: -3rem;';
}, (param)=>{
    let { $hidden } = param;
    return $hidden && "\n    opacity: 0;\n    pointer-events: none;\n  ";
}, (param)=>{
    let { theme } = param;
    return theme.shadowColor;
});
_c5 = Arrow;
// --- Helpers ---
const chunkArray = (arr, size)=>Array.from({
        length: Math.ceil(arr.length / size)
    }, (_, i)=>arr.slice(i * size, i * size + size));
function ProjectsPreview() {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [atStart, setAtStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [atEnd, setAtEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const slides = chunkArray(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsContent_projectList"].projects, 9);
    const updateArrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProjectsPreview.useCallback[updateArrows]": ()=>{
            if (!trackRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
            setAtStart(scrollLeft === 0);
            setAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
        }
    }["ProjectsPreview.useCallback[updateArrows]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsPreview.useEffect": ()=>{
            const el = trackRef.current;
            if (!el) return;
            updateArrows();
            el.addEventListener('scroll', updateArrows);
            window.addEventListener('resize', updateArrows);
            return ({
                "ProjectsPreview.useEffect": ()=>{
                    el.removeEventListener('scroll', updateArrows);
                    window.removeEventListener('resize', updateArrows);
                }
            })["ProjectsPreview.useEffect"];
        }
    }["ProjectsPreview.useEffect"], [
        updateArrows
    ]);
    const scroll = (dir)=>{
        if (!trackRef.current) return;
        const width = trackRef.current.clientWidth;
        trackRef.current.scrollBy({
            left: dir === 'left' ? -width : width,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content-surface",
        style: {
            maxWidth: 1300,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"], {
                $inView: inView,
                $direction: "right",
                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                $delay: 0,
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        color: 'var(--text)'
                    },
                    children: "Projects"
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsPreview.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OuterWrapper, {
                $inView: inView,
                $direction: "fade",
                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                $delay: 0,
                ref: ref,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        onClick: ()=>scroll('left'),
                        $hidden: atStart,
                        $side: "left",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsPreview.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselWrapper, {
                        $inView: inView,
                        $direction: "fade",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                        $delay: 0.3,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Track, {
                            ref: trackRef,
                            children: slides.map((page, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slide, {
                                    children: page.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: p.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        p.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "repo-link",
                                                            href: p.repo,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: [
                                                                "Repo ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExternalLinkAlt"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                                    lineNumber: 219,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 25
                                                        }, this),
                                                        p.demo != '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "deployment-link",
                                                            href: p.demo,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: [
                                                                "Deployment ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExternalLinkAlt"], {}, void 0, false, {
                                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 38
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, p.title, true, {
                                            fileName: "[project]/src/components/ProjectsPreview.tsx",
                                            lineNumber: 213,
                                            columnNumber: 19
                                        }, this))
                                }, idx, false, {
                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProjectsPreview.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsPreview.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        onClick: ()=>scroll('right'),
                        $hidden: atEnd,
                        $side: "right",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsPreview.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsPreview.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsPreview.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(ProjectsPreview, "NzHjoJxVGHuWcn4BAETezWYJDr4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c6 = ProjectsPreview;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "OuterWrapper");
__turbopack_context__.k.register(_c1, "CarouselWrapper");
__turbopack_context__.k.register(_c2, "Track");
__turbopack_context__.k.register(_c3, "Slide");
__turbopack_context__.k.register(_c4, "Card");
__turbopack_context__.k.register(_c5, "Arrow");
__turbopack_context__.k.register(_c6, "ProjectsPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/contact/SocialButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        '\n  &:before {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      45deg,\n      ',
        ",\n      ",
        "\n    );\n    border-radius: 50%;\n    z-index: -1;\n    transition: 0.5s ease;\n  }\n\n  &.hovered::before {\n    filter: blur(5px);\n  }\n\n  && {\n    position: relative;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    aspect-ratio: 1 / 1;\n    background: linear-gradient(\n      45deg,\n      ",
        ",\n      ",
        '\n    );\n    border-radius: 50%;\n\n    width: 3vw;\n    font-size: 1.7vw;\n    text-decoration: none;\n    z-index: 1;\n    opacity: 1;\n    \n    svg {\n      fill: var(--text);\n    }\n  }\n\n  &&.hovered {\n    svg {\n      fill: var(--text-night);\n    }\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: var(--bg);\n    border-radius: 50%;\n    transform: scale(0.88);\n    z-index: -1;\n    transition: 0.5s ease;\n  }\n\n  &.hovered::after {\n    transform: scale(0);\n  }\n  i {\n    transform: translateY(0.1vw);\n  }\n\n  @media only screen and (max-width: 768px) {\n    && {\n      width: 10vw;\n      font-size: 6vw;\n    }\n  }\n'
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
function SocialButton(param) {
    let { data, children, isSocialHovered } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledIconSocial, {
        data: data,
        rel: "noreferrer",
        className: isSocialHovered ? 'hovered' : '',
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/contact/SocialButton.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SocialButton;
const StyledIconSocial = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span(_templateObject(), (param)=>{
    let { data } = param;
    return data.color[0];
}, (param)=>{
    let { data } = param;
    return data.color[1];
}, (param)=>{
    let { data } = param;
    return data.color[0];
}, (param)=>{
    let { data } = param;
    return data.color[1];
});
_c1 = StyledIconSocial;
var _c, _c1;
__turbopack_context__.k.register(_c, "SocialButton");
__turbopack_context__.k.register(_c1, "StyledIconSocial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "Card",
    ()=>Card,
    "Grid",
    ()=>Grid,
    "Info",
    ()=>Info,
    "Meta",
    ()=>Meta,
    "Name",
    ()=>Name,
    "SocialCard",
    ()=>SocialCard,
    "SocialLabel",
    ()=>SocialLabel,
    "SocialSub",
    ()=>SocialSub,
    "SubTitle",
    ()=>SubTitle,
    "Title",
    ()=>Title,
    "Wrapper",
    ()=>Wrapper,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contact$2f$SocialButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/contact/SocialButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: stretch;\n  margin-top: 3rem;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  background: ",
        ";\n  border: 1px solid ",
        ";\n  box-shadow: 0 0 5px ",
        ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  padding: 2rem;\n  border-radius: 1rem;\n\n  @media (max-width: 600px) {\n    flex-direction: column;\n    text-align: center;\n  }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 15rem;\n  height: 15rem;\n  border-radius: 50%;\n  object-fit: cover;\n  box-shadow: 0 0px 12px ",
        ";\n  border: 1px solid rgba(255,255,255,0.04);\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 0;\n  font-size: 1.2rem;\n  opacity: 0.85;\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: var(--text);\n  margin: 0 0 1.5rem;\n  text-align: left;\n"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  margin: 3rem 0 0;\n  font-size: 1rem;\n  opacity: 0.9;\n  font-weight: 700;\n  text-align: center;\n  color: var(--text);\n"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n  flex-wrap: wrap;\n"
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  gap: 1rem;\n  padding: 2rem;\n  margin: 2rem 1rem;\n  align-items: center;\n  justify-content: space-evenly;\n  border-radius: 12px;\n  background: transparent;\n  border: 1px solid rgba(255,255,255,0.03);\n  transition: border .5s ease;\n  cursor: pointer;\n\n  &:hover {\n    border: 1px solid rgba(255, 255, 255, 0.37);\n  }\n"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
function _templateObject10() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: var(--text);\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.2rem;\n"
    ]);
    _templateObject10 = function() {
        return data;
    };
    return data;
}
function _templateObject11() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: var(--muted);\n  font-size: 1rem;\n  opacity: 0.7;\n  font-weight: 500;\n"
    ]);
    _templateObject11 = function() {
        return data;
    };
    return data;
}
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section(_templateObject());
_c = Wrapper;
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject1(), (param)=>{
    let { theme } = param;
    return theme.bgCard;
}, (param)=>{
    let { theme } = param;
    return theme.borderCard;
}, (param)=>{
    let { theme } = param;
    return theme.shadowCard;
});
_c1 = Card;
const Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img(_templateObject2(), (param)=>{
    let { theme } = param;
    return theme.shadowCard;
});
_c2 = Avatar;
const Info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject3());
_c3 = Info;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3(_templateObject4());
_c4 = Name;
const Meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p(_templateObject5());
_c5 = Meta;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2(_templateObject6());
_c6 = Title;
const SubTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h4(_templateObject7());
_c7 = SubTitle;
const Grid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject8());
_c8 = Grid;
const SocialCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a(_templateObject9());
_c9 = SocialCard;
const SocialLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject10());
_c10 = SocialLabel;
const SocialSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span(_templateObject11());
_c11 = SocialSub;
const ICONS = {
    Github: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 128,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    LinkedIn: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 129,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    WhatsApp: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaWhatsapp"], {}, void 0, false, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 130,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
const ContactSection = ()=>{
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content-surface",
        style: {
            maxWidth: 1300,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"], {
                $inView: inView,
                $direction: "right",
                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                $delay: 0,
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                    id: "contact-heading",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactPreview.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ContactPreview.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
                "aria-labelledby": "contact-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        $inView: inView,
                        $direction: "down",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                        $delay: 0,
                        ref: ref,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactContent_contact"].avatar,
                                alt: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactContent_contact"].name, " avatar")
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactPreview.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Name, {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactContent_contact"].name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactPreview.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meta, {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactContent_contact"].role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactPreview.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Meta, {
                                        style: {
                                            margin: '.5rem 0',
                                            fontSize: '1rem'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactContent_contact"].location
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactPreview.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactPreview.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactPreview.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"], {
                        $inView: inView,
                        $direction: "right",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                        $delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 0.5,
                        ref: ref,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubTitle, {
                            children: "Find me on"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ContactPreview.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactPreview.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactContent_contact"].socials.map((s, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"], {
                                $inView: inView,
                                $direction: "up",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                                $delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1 + index * 0.1,
                                ref: ref,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialCard, {
                                    href: s.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "Abrir ".concat(s.label),
                                    onMouseEnter: ()=>setHoveredIndex(index),
                                    onMouseLeave: ()=>setHoveredIndex(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contact$2f$SocialButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: s,
                                            isSocialHovered: hoveredIndex === index,
                                            children: ICONS[s.label]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactPreview.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLabel, {
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactPreview.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialSub, {
                                                    children: new URL(s.href).hostname.replace('www.', '')
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactPreview.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactPreview.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactPreview.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, s.label, false, {
                                fileName: "[project]/src/components/ContactPreview.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactPreview.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactPreview.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactSection, "tBNmtRD79Eyx4yM5z8neBJwYIL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c12 = ContactSection;
const __TURBOPACK__default__export__ = ContactSection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Wrapper");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "Avatar");
__turbopack_context__.k.register(_c3, "Info");
__turbopack_context__.k.register(_c4, "Name");
__turbopack_context__.k.register(_c5, "Meta");
__turbopack_context__.k.register(_c6, "Title");
__turbopack_context__.k.register(_c7, "SubTitle");
__turbopack_context__.k.register(_c8, "Grid");
__turbopack_context__.k.register(_c9, "SocialCard");
__turbopack_context__.k.register(_c10, "SocialLabel");
__turbopack_context__.k.register(_c11, "SocialSub");
__turbopack_context__.k.register(_c12, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_8edf47ae._.js.map