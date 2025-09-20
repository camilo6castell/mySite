(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/registry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StyledComponentsRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StyledComponentsRegistry(param) {
    let { children } = param;
    _s();
    const [styledComponentsStyleSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StyledComponentsRegistry.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerStyleSheet"]()
    }["StyledComponentsRegistry.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"])({
        "StyledComponentsRegistry.useServerInsertedHTML": ()=>{
            const styles = styledComponentsStyleSheet.getStyleElement();
            styledComponentsStyleSheet.instance.clearTag();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: styles
            }, void 0, false);
        }
    }["StyledComponentsRegistry.useServerInsertedHTML"]);
    if ("TURBOPACK compile-time truthy", 1) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
    //TURBOPACK unreachable
    ;
}
_s(StyledComponentsRegistry, "JO0TVXMWaWpk04kGnSFOnr+4ipc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"]
    ];
});
_c = StyledComponentsRegistry;
var _c;
__turbopack_context__.k.register(_c, "StyledComponentsRegistry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/styles/ResetCss.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const resetCSS = ()=>"\n    /* 1. Reset básico */\n  *, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  /* 2. Base del documento */\n  html, body {\n    height: 100%;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',\n      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    line-height: 1.5;\n    background: #fff;\n    color: #111;\n  }\n\n  /* 3. Imágenes y multimedia */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n\n  /* 4. Formularios */\n  input, button, textarea, select {\n    font: inherit;\n  }\n\n  /* 5. Listas sin estilos por defecto */\n  ul, ol {\n    list-style: none;\n  }\n\n  /* 6. Links sin subrayado por defecto */\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  /* 7. Botones */\n  button {\n    cursor: pointer;\n    border: none;\n    background: none;\n  }\n\n  /* 8. Tablas */\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n";
const __TURBOPACK__default__export__ = resetCSS;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/config/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themeConfig",
    ()=>themeConfig
]);
const themeConfig = {
    colors: {
        lightTheme: {
            bg: '#f8fafc',
            text: '#07103a',
            muted: '#334155',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            bgCard: 'rgba(255, 255, 255, 0.85)',
            borderCard: 'rgba(15, 23, 36, 0.06)',
            shadowCard: 'rgba(0, 0, 0, 0.18)',
            badge: {
                bg: 'rgba(28, 255, 191, 0.21);',
                text: '#017a58ff',
                border: '1px solid rgba(6,95,70,0.12)'
            },
            heroImage: {
                height: '10rem'
            },
            projectCard: {
                hoverShadow: 'rgba(0, 0, 0, 0.41)',
                title: '#111827',
                summary: '#374151',
                tech: '#6b7280',
                link: '#4f46e5',
                linkHover: '#4338ca'
            },
            waves: {
                a: {
                    bg: 'rgba(99,102,241,0.35)',
                    top: '5%',
                    left: '-20%',
                    width: '120%',
                    height: '80%',
                    blur: '90px',
                    opacity: 0.8
                },
                b: {
                    bg: 'rgba(16,185,129,0.25)',
                    top: '40%',
                    left: '-40%',
                    width: '140%',
                    height: '70%',
                    blur: '120px',
                    opacity: 0.7
                }
            }
        },
        darkTheme: {
            bg: '#07103a',
            text: '#e6eef8',
            muted: '#a3b4c9',
            shadowColor: 'rgba(255, 255, 255, 0.4)',
            bgCard: 'rgba(29, 29, 29, 0.83)',
            borderCard: 'rgba(207, 207, 207, 0.19)',
            shadowCard: 'rgba(221, 221, 221, 0.16)',
            badge: {
                bg: 'rgba(6, 95, 70, 0.33)',
                text: '#57d4b0ff',
                border: '1px solid rgba(95, 101, 99, 0.32)'
            },
            heroImage: {
                height: '10rem'
            },
            projectCard: {
                hoverShadow: 'rgba(221, 221, 221, 0.2)',
                title: '#e6eef8',
                summary: '#a3b4c9',
                tech: '#9ca3af',
                link: '#60a5fa',
                linkHover: '#3b82f6'
            },
            waves: {
                a: {
                    bg: 'rgba(99,102,241,0.35)',
                    top: '5%',
                    left: '-20%',
                    width: '120%',
                    height: '80%',
                    blur: '90px',
                    opacity: 0.8
                },
                b: {
                    bg: 'rgba(16,185,129,0.25)',
                    top: '40%',
                    left: '-40%',
                    width: '140%',
                    height: '70%',
                    blur: '120px',
                    opacity: 0.7
                }
            }
        }
    },
    animation: {
        general_duration: 0.7,
        general_fade_rem_traslation: 3,
        waves_duration: {
            a: 40,
            b: 60
        }
    },
    fonts: {
        body: "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto"
    },
    sectionColors: {
        home: '#4498ffff',
        projects: '#742c2c',
        contact: '#007442ff'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/inter_f14c47b8.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_f14c47b8-module__iaSzWG__className",
});
}),
"[next]/internal/font/google/inter_f14c47b8.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_f14c47b8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_f14c47b8.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_f14c47b8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_f14c47b8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_f14c47b8$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/styles/GlobalStyle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ResetCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/ResetCss.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_f14c47b8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_f14c47b8.js [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  ",
        "\n\n  *, *::before, *::after {\n    font-family: ",
        ", ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto;\n    transition: all ",
        "s ease-in-out;\n    letter-spacing: normal;\n    word-spacing: normal;\n  }\n\n  :root{\n    --bg: ",
        ";\n    --text: ",
        ";\n    --text-night: ",
        ";\n    --muted: ",
        ";\n    --wave-color-a: ",
        ";\n    --wave-color-b: ",
        ";\n    --section-accent: transparent;\n    --wave-top-a: ",
        ";\n    --wave-left-a: ",
        ";\n    --wave-width-a: ",
        ";\n    --wave-height-a: ",
        ";\n    --wave-blur-a: ",
        ";\n    --wave-opacity-a: ",
        ";\n    --wave-top-b: ",
        ";\n    --wave-left-b: ",
        ";\n    --wave-width-b: ",
        ";\n    --wave-height-b: ",
        ";\n    --wave-blur-b: ",
        ";\n    --wave-opacity-b: ",
        ";\n  }\n\n  html, body, #__next { height:100%; }\n  body {\n    margin:0;\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto;\n    background: var(--bg);\n    transition: background ",
        "s ease, color 0.3s ease;\n    color: var(--text);\n    -webkit-font-smoothing:antialiased;\n    -moz-osx-font-smoothing:grayscale;\n    overscroll-behavior: none;\n\n  }\n\n  #snap-container {\n    height: 100vh;\n    width: 100%;\n    overflow-y: auto;\n    scroll-snap-type: y mandatory;\n    -webkit-overflow-scrolling: touch;\n    scroll-behavior: smooth;\n  }\n\n  section {\n    scroll-snap-align: start;\n  }\n  .content-surface { position: relative; z-index: 10; }\n\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
;
;
;
;
const GlobalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createGlobalStyle"])(_templateObject(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$ResetCss$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_f14c47b8$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].style.fontFamily, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration, (param)=>{
    let { theme } = param;
    return theme.bg;
}, (param)=>{
    let { theme } = param;
    return theme.text;
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].colors.darkTheme.text, (param)=>{
    let { theme } = param;
    return theme.muted;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.bg;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.bg;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.top;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.left;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.width;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.height;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.blur;
}, (param)=>{
    let { theme } = param;
    return theme.waves.a.opacity;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.top;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.left;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.width;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.height;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.blur;
}, (param)=>{
    let { theme } = param;
    return theme.waves.b.opacity;
}, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration + 1);
const __TURBOPACK__default__export__ = GlobalStyle;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useThemeContext",
    ()=>useThemeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = (param)=>{
    let { children } = param;
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Restaurar desde localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const savedTheme = localStorage.getItem("theme");
            setTheme(savedTheme);
        }
    }["ThemeProvider.useEffect"], []);
    // Guardar en localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (theme === "dark") {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.removeItem("theme");
            }
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === "dark" ? null : "dark");
    };
    // Selección del objeto de styled-components
    const currentTheme = theme === "dark" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].colors.darkTheme : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].colors.lightTheme;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
            theme: currentTheme,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/lib/providers.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/lib/providers.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeProvider, "fOpw2txAiH5g/LkU7z1m68UDsT4=");
_c = ThemeProvider;
const useThemeContext = ()=>{
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!ctx) throw new Error("useThemeContext debe usarse dentro de ThemeProvider");
    return ctx;
};
_s1(useThemeContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/config/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactContent_contact",
    ()=>contactContent_contact,
    "heroContent_hero",
    ()=>heroContent_hero,
    "metadataContent_layout",
    ()=>metadataContent_layout,
    "navbarContent_navbar",
    ()=>navbarContent_navbar,
    "projectsContent_projectList",
    ()=>projectsContent_projectList
]);
const metadataContent_layout = {
    title: "Camilo's portfolio",
    description: "Made to show my work",
    openGraph: {
        title: "Camilo's portfolio",
        description: "Explore my projects and experience",
        url: "https://miportfolio.com",
        siteName: "Camilo's portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630
            }
        ],
        locale: "es_ES",
        type: "website"
    }
};
const navbarContent_navbar = {
    logo_day: "/logo/CC-logo_day.png",
    logo_night: "/logo/CC-logo_night.png",
    spawn_animation_duration: 2
};
const heroContent_hero = {
    badge: "● Available",
    Title: "Camilo Castellanos",
    role: "Software developer",
    DescOne: "Happy since childhood. Motivated by technology and taking things apart and understanding them.",
    DescTwo: "Software developer with more than 3 years of experience in full-stack development and process automation.Expert in Java (Spring Boot, WebFlux), JavaScript - TypeScript (React, Node.js), and Python, with a mastery ofscalable architectures (Hexagonal, DDD) and DevOps practices (Docker, CI/CD, Kubernetes). Quick to learn newprogramming languages, frameworks, and tools, and passionate about creating efficient, secure, and maintainablesolutions, integrating automation and web development to optimize operations.",
    heroImage: "/images/home-photo.jpg"
};
const projectsContent_projectList = {
    projects: [
        {
            title: 'This portfolio :)',
            summary: 'Portfolio to show a little about me and my projects. Made in Next.js with React + TS and Styled-components con modelos ARIMA y visualización.',
            repo: 'https://github.com/camilo6castell/mySite',
            demo: ''
        },
        {
            title: 'CryptoMessage - Frontend',
            summary: 'Messaging app with RSA encryption in React + TS.',
            repo: 'https://github.com/camilo6castell/cryptomessage-client',
            demo: 'cryptomessage-client.vercel.app'
        },
        {
            title: 'Bingo Gran Buda - Frontend',
            summary: 'Bingo game frontend made in Next.js with React and styled components',
            repo: 'https://github.com/camilo6castell/elBingoGranBuda-Frontend',
            demo: 'https://el-bingo-gran-buda-frontend.vercel.app'
        },
        {
            title: 'Bingo Gran Buda - Backend',
            summary: 'Bingo game backend made in Express.js with Node.js and MongoDB with Mongoose',
            repo: 'https://github.com/camilo6castell/elBingoGranBuda-Backend',
            demo: ''
        },
        {
            title: 'Library provider - Frontend',
            summary: 'Library provider frontend project built with enterprise architecture, Angular with TypeScript and RXJS',
            repo: 'https://github.com/camilo6castell/library-provider-frontend',
            demo: 'https://library-provider-frontend.netlify.app'
        },
        {
            title: 'Library provider - Backend',
            summary: 'A library provider project built with hexagonal architecture, event sourcing, DDD, Springboot, and MongoDB.',
            repo: 'https://github.com/camilo6castell/library-provider-backend',
            demo: ''
        },
        {
            title: 'WaterQualityApp - Desktop application',
            summary: 'Application in Java, using OOP and using SQLite and Java Swing. Its purpose is to perform internal processing and display it to the user via a graphical interface.',
            repo: 'https://github.com/camilo6castell/water-quality-app',
            demo: ''
        },
        {
            title: 'Gevora - Fullstack (Flask)',
            summary: 'Gevora is a hotel management system web application developed using Python and the Flask library. It covers both frontend and backend, utilizing MySQL as the relational database, and is deployed on PythonAnywhere.',
            repo: 'https://github.com/camilo6castell/Gevora',
            demo: 'http://r4d3o.pythonanywhere.com/'
        },
        {
            title: 'Instaya - Frontend',
            summary: "Frontend application for managing package delivery services by email. It's built in JavaScript with Node, React, and Vite.",
            repo: 'https://github.com/camilo6castell/Instaya-frontend',
            demo: 'https://instaya-frontend-cacastellanosh-unaleduco.vercel.app/'
        },
        {
            title: 'Instaya - Backend',
            summary: "Backend application for managing package delivery services by email. It's built in Node.js with the help of Express and MongoDB as a non-relational database.",
            repo: 'https://github.com/camilo6castell/Instaya-backend',
            demo: ''
        },
        {
            title: 'health-api',
            summary: "API for centralized medical records management system.It is developed in Node, with the help of Express, MongoDB, Mongoose, BCrypt, Morgan, NodeMailer.",
            repo: 'https://github.com/camilo6castell/health-api',
            demo: ''
        }
    ]
};
const contactContent_contact = {
    name: 'Camilo Castellanos',
    role: 'Software, Web & Automation Developer',
    email: 'kml107@hotmail.com',
    location: 'Uelsen, Germany & Bogotá, Colombia',
    avatar: '/images/contact-photo.jpg',
    socials: [
        {
            label: 'Github',
            href: 'https://github.com/camilo6castell',
            color: [
                '#392031ff',
                '#8b2989ff'
            ]
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/camilocastell/',
            color: [
                '#0077b5',
                '#00a0dc'
            ]
        },
        {
            label: 'WhatsApp',
            href: 'https://wa.me/573223990733',
            color: [
                '#25D366',
                '#128C7E'
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useInView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useInView() {
    let threshold = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.2;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useInView.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting) {
                        // solo disparamos true al entrar
                        setInView(true);
                    } else {
                        // opcional: reseteamos para que se pueda volver a disparar
                        setInView(false);
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            if (ref.current) observer.observe(ref.current);
            return ({
                "useInView.useEffect": ()=>observer.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/styles/keyframes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeBox",
    ()=>FadeBox,
    "fade",
    ()=>fade,
    "pulse",
    ()=>pulse,
    "waves",
    ()=>waves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    from {\n      opacity: 0;\n      transform: translate3d(0, ",
        "rem, 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n  "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    from {\n      opacity: 0;\n      transform: translate3d(0, -",
        "rem, 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n  "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    from {\n      opacity: 0;\n      transform: translate3d(",
        "rem, 0, 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n  "
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    from {\n      opacity: 0;\n      transform: translate3d(-",
        "rem, 0, 0);\n    }\n    to {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n    }\n  "
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  "
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    /* arranca totalmente fuera a la izquierda, pasa por el centro y sale totalmente a la derecha */\n    0%   { transform: translate3d(-120%, -30%, 0) rotate(-8deg)  scale(1.05); opacity: 0.62; filter: blur(96px); }\n    15%  { transform: translate3d(-60%,  -10%, 0) rotate(-4deg)  scale(1.02); opacity: 0.70; filter: blur(90px);  }\n    30%  { transform: translate3d(-10%,   6%,   0) rotate(-1deg)  scale(1.00); opacity: 0.78; filter: blur(84px);  }\n    50%  { transform: translate3d(0%,     0%,   0) rotate(0deg)    scale(1.00); opacity: 0.82; filter: blur(80px);  }\n    65%  { transform: translate3d(40%,   -12%,   0) rotate(3deg)    scale(1.02); opacity: 0.75; filter: blur(86px);  }\n    85%  { transform: translate3d(90%,   -18%,   0) rotate(6deg)    scale(1.04); opacity: 0.68; filter: blur(92px);  }\n    100% { transform: translate3d(120%,  -28%,   0) rotate(8deg)    scale(1.06); opacity: 0.62; filter: blur(98px);  }\n  "
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n    /* recorrido contrario con trayectoria vertical distinta para dar profundidad */\n    0%   { transform: translate3d(120%,  30%, 0)    rotate(6deg)   scale(1.00); opacity: 0.60; filter: blur(110px); }\n    12%  { transform: translate3d(80%,   12%, 0)    rotate(3deg)   scale(0.99); opacity: 0.68; filter: blur(104px); }\n    28%  { transform: translate3d(30%,   -6%, 0)    rotate(1deg)   scale(1.01); opacity: 0.74; filter: blur(100px); }\n    50%  { transform: translate3d(0%,    -18%, 0)   rotate(0deg)   scale(1.03); opacity: 0.80; filter: blur(90px);  }\n    70%  { transform: translate3d(-45%,  -8%, 0)   rotate(-3deg)  scale(0.98); opacity: 0.72; filter: blur(108px); }\n    88%  { transform: translate3d(-95%,   6%, 0)    rotate(-5deg)  scale(0.96); opacity: 0.66; filter: blur(116px); }\n    100% { transform: translate3d(-120%,  28%, 0)   rotate(-7deg)  scale(0.95); opacity: 0.60; filter: blur(120px); }\n  "
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  0% {\n    box-shadow: 0 0 0 0 ",
        "66;\n  }\n  70% {\n    box-shadow: 0 0 0 8px ",
        "00;\n  }\n  100% {\n    box-shadow: 0 0 0 0 ",
        "00;\n  }\n"
    ]);
    _templateObject7 = function() {
        return data;
    };
    return data;
}
function _templateObject8() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      animation: ",
        " ",
        "s ",
        "s ease both;\n    "
    ]);
    _templateObject8 = function() {
        return data;
    };
    return data;
}
function _templateObject9() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  opacity: 0;\n  ",
        "\n"
    ]);
    _templateObject9 = function() {
        return data;
    };
    return data;
}
;
;
const fade = {
    up: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_fade_rem_traslation),
    down: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_fade_rem_traslation),
    left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject2(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_fade_rem_traslation),
    right: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject3(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_fade_rem_traslation),
    fade: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject4())
};
const waves = {
    floatA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject5()),
    floatB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject6())
};
const pulse = (color)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"])(_templateObject7(), color, color, color);
const FadeBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].div(_templateObject9(), (param)=>{
    let { $inView, $direction, $duration, $delay } = param;
    return $inView && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject8(), fade[$direction], $duration, $delay);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bs/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/providers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 60;\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  padding:1rem 2rem;\n  background: transparent;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        " display:flex; align-items:center; gap:12px; "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        " flex:1; display:flex; align-items:center; justify-content:center; gap: 3rem;"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
function _templateObject3() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        " display:flex; gap:10px; align-items:center; flex-wrap: wrap;"
    ]);
    _templateObject3 = function() {
        return data;
    };
    return data;
}
function _templateObject4() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  display: flex;\n  position:relative;   \n  width: 2rem; \n  height: 2rem; \n  display:inline-flex; \n  align-items:center; \n  justify-content:center; \n"
    ]);
    _templateObject4 = function() {
        return data;
    };
    return data;
}
function _templateObject5() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n    flex: 1;\n  inset: 0;\n  width:100%;\n  height:100%;\n  z-index: ",
        ";\n  opacity: ",
        ";\n  overflow:hidden;\n\n  svg {\n    fill: var(--text);\n    width: 100%;\n    height: 100%;\n  }\n"
    ]);
    _templateObject5 = function() {
        return data;
    };
    return data;
}
function _templateObject6() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: var(--text);\n  font-weight: 700;\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  \n  svg {\n    fill: var(--text);\n  }\n"
    ]);
    _templateObject6 = function() {
        return data;
    };
    return data;
}
function _templateObject7() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  color: var(--text);\n  font-size: 2rem;\n  padding:6px 10px;\n  background: transparent;\n  cursor:pointer;\n"
    ]);
    _templateObject7 = function() {
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
;
;
;
;
const Bar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FadeBox"])(_templateObject());
_c = Bar;
const Left = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject1());
_c1 = Left;
const Center = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject2());
_c2 = Center;
const Right = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject3());
_c3 = Right;
const IconContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a(_templateObject4());
_c4 = IconContainer;
const Layer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject5(), (p)=>p.$isDarkLayer ? 1 : 0, (p)=>p.$isDarkLayer ? p.$isDark ? 1 : 0 : p.$isDark ? 0 : 1);
_c5 = Layer;
const Social = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_templateObject6());
_c6 = Social;
const Toggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button(_templateObject7());
_c7 = Toggle;
/* Memo para evitar renders innecesarios */ const IconTransition = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(function IconTransition(param) {
    let { day, night, isDark, ariaLabel, href = '#', iconSize } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconContainer, {
        "aria-label": ariaLabel,
        href: href,
        style: iconSize ? {
            width: iconSize,
            height: iconSize
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Layer, {
                $isDarkLayer: true,
                $isDark: isDark,
                children: day
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Layer, {
                $isDarkLayer: false,
                $isDark: isDark,
                children: night
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
});
_c8 = IconTransition;
function Navbar() {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(0.3);
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"])();
    const isDark = theme === 'dark';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
        $inView: inView,
        $direction: "down",
        $duration: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.general_duration,
        $delay: 0.5,
        ref: ref,
        role: "navigation",
        "aria-label": "Main navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Left, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTransition, {
                    ariaLabel: "Ir al inicio",
                    isDark: isDark,
                    day: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarContent_navbar"].logo_day,
                        alt: "logo day",
                        fill: true,
                        style: {
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 115,
                        columnNumber: 16
                    }, void 0),
                    night: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navbarContent_navbar"].logo_night,
                        alt: "logo night",
                        fill: true,
                        style: {
                            objectFit: 'cover'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 116,
                        columnNumber: 18
                    }, void 0),
                    href: "#home",
                    iconSize: '2.6rem'
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Center, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Social, {
                        href: "#home",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHome"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            " Home"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Social, {
                        href: "#projects",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaProjectDiagram"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            " Projects"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Social, {
                        href: "#contact",
                        rel: "noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoMdContact"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            " Contact"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Right, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                    onClick: toggleTheme,
                    "aria-label": "Toggle dark mode",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTransition, {
                        isDark: isDark,
                        ariaLabel: "Cambiar tema",
                        day: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsFillSunFill"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 141,
                            columnNumber: 18
                        }, void 0),
                        night: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bs$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BsMoonStarsFill"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 142,
                            columnNumber: 20
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(Navbar, "op1aLV1tmppHtDVuk0d3AlZFWpU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$providers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useThemeContext"]
    ];
});
_c9 = Navbar;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Bar");
__turbopack_context__.k.register(_c1, "Left");
__turbopack_context__.k.register(_c2, "Center");
__turbopack_context__.k.register(_c3, "Right");
__turbopack_context__.k.register(_c4, "IconContainer");
__turbopack_context__.k.register(_c5, "Layer");
__turbopack_context__.k.register(_c6, "Social");
__turbopack_context__.k.register(_c7, "Toggle");
__turbopack_context__.k.register(_c8, "IconTransition");
__turbopack_context__.k.register(_c9, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BackgroundWaves.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundWaves
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
'use client';
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: absolute;\n  transform-origin: center;\n  mix-blend-mode: screen;\n  &.a { \n    animation: ",
        " ",
        "s ease-in-out infinite;\n    top: var(--wave-top-a);\n    left: var(--wave-left-a);\n    width: var(--wave-width-a);\n    height: var(--wave-height-a);\n    background: radial-gradient(circle at 20% 20%, var(--wave-color-a), transparent 25%),\n                radial-gradient(circle at 80% 80%, var(--wave-color-b), transparent 25%);\n    filter: blur(var(--wave-blur-a));\n    opacity: var(--wave-opacity-a);\n  }\n  &.b { \n    animation: ",
        " ",
        "s ease-in-out infinite;\n    top: var(--wave-top-b);\n    left: var(--wave-left-b);\n    width: var(--wave-width-b);\n    height: var(--wave-height-b);\n    background: radial-gradient(circle at 20% 20%, var(--wave-color-a), transparent 25%),\n                radial-gradient(circle at 80% 80%, var(--wave-color-b), transparent 25%);\n    filter: blur(var(--wave-blur-b));\n    opacity: var(--wave-opacity-b);\n    }\n"
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  transition: background-color 600ms ease, opacity 600ms ease;\n  background-color: var(--section-accent, transparent);\n  opacity: 0.14;\n  mix-blend-mode: screen;\n"
    ]);
    _templateObject2 = function() {
        return data;
    };
    return data;
}
;
;
;
;
const Wrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject());
_c = Wrap;
const Wave = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject1(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waves"].floatA, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.waves_duration.a, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waves"].floatB, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].animation.waves_duration.b);
_c1 = Wave;
const ColorOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div(_templateObject2());
_c2 = ColorOverlay;
function BackgroundWaves() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrap, {
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wave, {
                className: "a"
            }, void 0, false, {
                fileName: "[project]/src/components/BackgroundWaves.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wave, {
                className: "b"
            }, void 0, false, {
                fileName: "[project]/src/components/BackgroundWaves.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.06
                },
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "grid",
                            width: "40",
                            height: "40",
                            patternUnits: "userSpaceOnUse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M40 0 L0 0 0 40",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BackgroundWaves.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BackgroundWaves.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BackgroundWaves.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#grid)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BackgroundWaves.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BackgroundWaves.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ColorOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/BackgroundWaves.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BackgroundWaves.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c3 = BackgroundWaves;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Wrap");
__turbopack_context__.k.register(_c1, "Wave");
__turbopack_context__.k.register(_c2, "ColorOverlay");
__turbopack_context__.k.register(_c3, "BackgroundWaves");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RightNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RightNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_tagged_template_literal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/config/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/styles/keyframes.ts [app-client] (ecmascript)");
;
function _templateObject() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  position: fixed;\n  right: 24px;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 50;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: center;\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n      animation: ",
        " 1.6s infinite;\n    "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}
function _templateObject2() {
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_tagged_template_literal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])([
        "\n  width: 12px;\n  height: 12px;\n  border-radius: 999px;\n  border: 2px solid ",
        ";\n  background: ",
        ";\n  cursor: pointer;\n  transition: transform 200ms ease, background 300ms ease;\n\n  &:hover { transform: scale(1.08); }\n\n  ",
        "\n"
    ]);
    _templateObject2 = function() {
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
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].aside(_templateObject());
_c = Container;
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button(_templateObject2(), (p)=>p.$color || 'rgba(255,255,255,0.7)', (p)=>p.$active ? p.$color : 'transparent', (p)=>p.$active && p.$color && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"])(_templateObject1(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$styles$2f$keyframes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pulse"])(p.$color)));
_c1 = Dot;
const SECTIONS = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].sectionColors);
function RightNav() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(SECTIONS[0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RightNav.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "RightNav.useEffect": (entries)=>{
                    entries.forEach({
                        "RightNav.useEffect": (e)=>{
                            if (e.isIntersecting) {
                                const id = e.target.getAttribute('id') || '';
                                setActive(id);
                                const color = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].sectionColors[id] || 'transparent';
                                document.documentElement.style.setProperty('--section-accent', color);
                            }
                        }
                    }["RightNav.useEffect"]);
                }
            }["RightNav.useEffect"], {
                threshold: 0.6
            });
            SECTIONS.forEach({
                "RightNav.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (el) observer.observe(el);
                }
            }["RightNav.useEffect"]);
            return ({
                "RightNav.useEffect": ()=>observer.disconnect()
            })["RightNav.useEffect"];
        }
    }["RightNav.useEffect"], []);
    const handleClick = (id)=>{
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Container, {
        "aria-hidden": true,
        children: SECTIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                onClick: ()=>handleClick(s),
                $active: active === s,
                $color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$config$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeConfig"].sectionColors[s],
                "aria-label": s,
                "aria-pressed": active === s
            }, s, false, {
                fileName: "[project]/src/components/RightNav.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/RightNav.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(RightNav, "EcHy4AVic7iGS1xhc6YCWA+UlT8=");
_c2 = RightNav;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Container");
__turbopack_context__.k.register(_c1, "Dot");
__turbopack_context__.k.register(_c2, "RightNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0b3c4666._.js.map