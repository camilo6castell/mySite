module.exports = [
"[project]/src/components/Section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
const Wrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  padding: 2rem;
  box-sizing: border-box;
`;
function Section({ children, id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrap, {
        id: id,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Section.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const Inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;              
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  gap: 1rem;
`;
const HeroSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: ${({ $isColumn = false })=>$isColumn ? 'column' : 'row'};
  align-items: ${({ $isColumn = false })=>$isColumn ? 'flex-start' : 'stretch'}; /* stretch para que hijos llenen la altura */
  justify-content: center;
  flex: ${({ $portion })=>$portion};
  width: 100%;
`;
const Badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  display:inline-flex;
  gap:12px;
  align-items:center;
  padding:8px 12px;
  border-radius:999px;
  background: ${({ theme })=>theme.badge.bg};
  color: ${({ theme })=>theme.badge.text};
  border: ${({ theme })=>theme.badge.border};
  width: fit-content;
`;
const Title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 1.2rem;
  line-height: 1;
  color: var(--text);
`;
const Role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0.4rem;
  word-spacing: 0.25rem;
  color: var(--text);
`;
const Desc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  margin-top: 1rem;
  color: var(--muted);
  font-size: 1.05rem;
`;
const HeroImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  flex: 1;                    /* ocupa el espacio disponible */
  margin: 0 3rem;
  border-radius: 12px;
  overflow: hidden;           /* para que el border-radius funcione con background-image o <Image> */
  box-shadow: 0 4px 12px ${({ theme })=>theme.shadowColor};
  background-image: url(${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroContent_hero"].heroImage});
  background-size: cover;
  background-position: center;
  z-index: 1000;
  width: 100%;
  height: ${({ theme })=>theme.heroImage.height};     /* asegura que no colapse a 0px */
`;
function Hero() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Inner, {
        className: "content-surface",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                $portion: 2,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                        $portion: 1,
                        $isColumn: true,
                        style: {
                            gap: '0.5rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Badge, {
                                $inView: inView,
                                $direction: "down",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                                $delay: 1,
                                ref: ref,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroContent_hero"].badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                $inView: inView,
                                $direction: "fade",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                                $delay: 0,
                                ref: ref,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroContent_hero"].Title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Role, {
                                $inView: inView,
                                $direction: "fade",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                                $delay: 0.5,
                                ref: ref,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroContent_hero"].role
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                        $portion: 1,
                        $isColumn: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroImage, {
                            $inView: inView,
                            $direction: "left",
                            $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {
                $portion: 1,
                $isColumn: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Desc, {
                        $inView: inView,
                        $direction: "up",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                        $delay: 1,
                        ref: ref,
                        style: {
                            width: '100%',
                            fontStyle: 'italic',
                            textAlign: 'center'
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroContent_hero"].DescOne
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Desc, {
                        $inView: inView,
                        $direction: "up",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                        $delay: 1.5,
                        ref: ref,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["heroContent_hero"].DescTwo
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
}),
"[project]/src/components/ProjectsPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// --- Styled components ---
const OuterWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;
const CarouselWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  position: relative;
  overflow: hidden;
  flex: 1;
  max-width: 1100px;
`;
const Track = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Slide = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;
  scroll-snap-align: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].article`
  display: flex;
  max-height: 15rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme })=>theme.bgCard};
  border: 1px solid ${({ theme })=>theme.borderCard};
  box-shadow: 0 0 5px ${({ theme })=>theme.shadowCard};
  transition: box-shadow 0.5s ease, background 3s ease, transform 0.3s ease;
  h3 {
    color: var(--text);
    font-size: 1.25rem;
    padding-bottom: .3rem;
  }
  p {
    color: var(--muted);
    padding-left: .3rem;
  }  
  div {
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
    padding-left: .3rem;
    a {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    color: var(--link);
   }
    .repo-link {
      color: #d44cbe;
      svg {
        fill: #d44cbe;
      }
    }
    .deployment-link {
      color: #4ca2d4;
      svg {
        fill: #4ca2d4;
      }
    }
  }  
  &:hover {
    box-shadow: 0 0 12px ${({ theme })=>theme.projectCard.hoverShadow};
    transform: scale(1.02);
  }
`;
const Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].button`
  position: absolute;
  top: 50%;
  ${({ $side })=>$side === 'left' ? 'left: -3rem;' : 'right: -3rem;'}
  transform: translateY(-50%);
  background: none;
  color: var(--text);
  border: none;
  cursor: pointer;
  font-size: 4rem;
  line-height: 1;
  transition: opacity 0.4s ease, box-shadow 0.3s ease;
  z-index: 5;

  opacity: 1;
  pointer-events: auto;

  ${({ $hidden })=>$hidden && `
    opacity: 0;
    pointer-events: none;
  `}

  &:hover {
    box-shadow: 0 4px 12px ${({ theme })=>theme.shadowColor};
  }
`;
// --- Helpers ---
const chunkArray = (arr, size)=>Array.from({
        length: Math.ceil(arr.length / size)
    }, (_, i)=>arr.slice(i * size, i * size + size));
function ProjectsPreview() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [atStart, setAtStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [atEnd, setAtEnd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const slides = chunkArray(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectsContent_projectList"].projects, 9);
    const updateArrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!trackRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
        setAtStart(scrollLeft === 0);
        setAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = trackRef.current;
        if (!el) return;
        updateArrows();
        el.addEventListener('scroll', updateArrows);
        window.addEventListener('resize', updateArrows);
        return ()=>{
            el.removeEventListener('scroll', updateArrows);
            window.removeEventListener('resize', updateArrows);
        };
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content-surface",
        style: {
            maxWidth: 1300,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"], {
                $inView: inView,
                $direction: "right",
                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                $delay: 0,
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OuterWrapper, {
                $inView: inView,
                $direction: "fade",
                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                $delay: 0,
                ref: ref,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                        onClick: ()=>scroll('left'),
                        $hidden: atStart,
                        $side: "left",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsPreview.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CarouselWrapper, {
                        $inView: inView,
                        $direction: "fade",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                        $delay: 0.3,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Track, {
                            ref: trackRef,
                            children: slides.map((page, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Slide, {
                                    children: page.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: p.summary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectsPreview.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        p.repo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "repo-link",
                                                            href: p.repo,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: [
                                                                "Repo ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaExternalLinkAlt"], {}, void 0, false, {
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
                                                        p.demo != '' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "deployment-link",
                                                            href: p.demo,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            children: [
                                                                "Deployment ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaExternalLinkAlt"], {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
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
}),
"[project]/src/components/contact/SocialButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
function SocialButton({ data, children, isSocialHovered }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledIconSocial, {
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
const StyledIconSocial = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].span`
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${({ data })=>data.color[0]},
      ${({ data })=>data.color[1]}
    );
    border-radius: 50%;
    z-index: -1;
    transition: 0.5s ease;
  }

  &.hovered::before {
    filter: blur(5px);
  }

  && {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;

    aspect-ratio: 1 / 1;
    background: linear-gradient(
      45deg,
      ${({ data })=>data.color[0]},
      ${({ data })=>data.color[1]}
    );
    border-radius: 50%;

    width: 3vw;
    font-size: 1.7vw;
    text-decoration: none;
    z-index: 1;
    opacity: 1;
    
    svg {
      fill: var(--text);
    }
  }

  &&.hovered {
    svg {
      fill: var(--text-night);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--bg);
    border-radius: 50%;
    transform: scale(0.88);
    z-index: -1;
    transition: 0.5s ease;
  }

  &.hovered::after {
    transform: scale(0);
  }
  i {
    transform: translateY(0.1vw);
  }

  @media only screen and (max-width: 768px) {
    && {
      width: 10vw;
      font-size: 6vw;
    }
  }
`;
}),
"[project]/src/components/ContactPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contact$2f$SocialButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/contact/SocialButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  margin-top: 3rem;
`;
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"])`
  background: ${({ theme })=>theme.bgCard};
  border: 1px solid ${({ theme })=>theme.borderCard};
  box-shadow: 0 0 5px ${({ theme })=>theme.shadowCard};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;
const Avatar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0px 12px ${({ theme })=>theme.shadowCard};
  border: 1px solid rgba(255,255,255,0.04);
`;
const Info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
`;
const Meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].p`
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.85;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h2`
  color: var(--text);
  margin: 0 0 1.5rem;
  text-align: left;
`;
const SubTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].h4`
  margin: 3rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 700;
  text-align: center;
  color: var(--text);
`;
const Grid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  flex-wrap: wrap;
`;
const SocialCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].a`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  margin: 2rem 1rem;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.03);
  transition: border .5s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.37);
  }
`;
const SocialLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].div`
  color: var(--text);
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-weight: 600;
  font-size: 1.2rem;
`;
const SocialSub = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].span`
  color: var(--muted);
  font-size: 1rem;
  opacity: 0.7;
  font-weight: 500;
`;
const ICONS = {
    Github: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 128,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    LinkedIn: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedin"], {}, void 0, false, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 129,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)),
    WhatsApp: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWhatsapp"], {}, void 0, false, {
        fileName: "[project]/src/components/ContactPreview.tsx",
        lineNumber: 130,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0))
};
const ContactSection = ()=>{
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "content-surface",
        style: {
            maxWidth: 1300,
            margin: '0 auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"], {
                $inView: inView,
                $direction: "right",
                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                $delay: 0,
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
                "aria-labelledby": "contact-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                        $inView: inView,
                        $direction: "down",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1,
                        $delay: 0,
                        ref: ref,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Avatar, {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactContent_contact"].avatar,
                                alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactContent_contact"].name} avatar`
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactPreview.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Info, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Name, {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactContent_contact"].name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactPreview.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Meta, {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactContent_contact"].role
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactPreview.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Meta, {
                                        style: {
                                            margin: '.5rem 0',
                                            fontSize: '1rem'
                                        },
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactContent_contact"].location
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"], {
                        $inView: inView,
                        $direction: "right",
                        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                        $delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 0.5,
                        ref: ref,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SubTitle, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contactContent_contact"].socials.map((s, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeBox"], {
                                $inView: inView,
                                $direction: "up",
                                $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
                                $delay: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1 + index * 0.1,
                                ref: ref,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialCard, {
                                    href: s.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": `Abrir ${s.label}`,
                                    onMouseEnter: ()=>setHoveredIndex(index),
                                    onMouseLeave: ()=>setHoveredIndex(null),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$contact$2f$SocialButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            data: s,
                                            isSocialHovered: hoveredIndex === index,
                                            children: ICONS[s.label]
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactPreview.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialLabel, {
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactPreview.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialSub, {
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
const __TURBOPACK__default__export__ = ContactSection;
}),
];

//# sourceMappingURL=src_components_0f6e54ce._.js.map