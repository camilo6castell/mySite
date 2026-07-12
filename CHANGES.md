# Cambios aplicados

## Ronda 2 — fixes reportados

**1–3. "4 links, 3 vistas" / modal y CV se ven en Home**
Causa raíz encontrada: `#snap-container` (el div con scroll de todo el sitio, en `layout.tsx`) tiene `backdrop-filter: blur(10px)`. En CSS, `backdrop-filter` crea un nuevo *containing block* para descendientes `position: fixed` — así que el modal de tracks, aunque tenía `position: fixed; inset: 0`, en realidad se anclaba al tope de `#snap-container` (= Home) en vez de al viewport real. Arreglado portando el modal a `document.body` con `createPortal` (React), donde `position: fixed` sí funciona normal.

Además, `#snap-container` y `RightNav` **persisten** entre rutas (Next no los remonta al navegar a `/cv`), así que conservaban el scroll y el "dot" activo de donde venías — por eso `/cv` parecía "abrir en Home". Arreglado:
- `RightNav` ahora se oculta fuera de `/` (esos dots son solo del scroll de una página; en `/cv` no aplican y solo confundían).
- `/cv` resetea el scroll de `#snap-container` a 0 al montar.
- El link "CV" en el navbar ahora se resalta cuando estás en `/cv`.

Con esto, `/cv` queda como lo describiste: una vista propia, alcanzable desde cualquier parte, que solo se abandona con "Volver al portafolio".

**2. Tarjetas de Skills más profesionales**
- Reemplacé la lista con viñetas por chips/pills (mismo lenguaje visual que los badges del hero y del modal).
- Agregué un acento de color arriba de cada tarjeta y micro-interacción en el hover (elevación + flecha animada).
- Renombré "Tracks" a "Skills" en la navbar (el nombre interno del archivo/config se mantiene como `tracks` para no romper referencias, pero el texto visible ya no usa esa jerga).
- Completé competencias de cada track tomándolas de tu sección "Core Competencies": AI & LLM sumó *RAG Pipelines* y *Prompt Engineering*; Automation sumó *Production Systems* y *Fault-Tolerant Systems*; Fullstack sumó *Software Architecture*.

**3. Fondo tipo "hoja" en la vista CV**
Agregué un token `paper` al theme (`src/config/theme.ts`) con valores distintos para claro/oscuro, y envolví el markdown en un `Sheet` con ese fondo + sombra suave — en claro se ve un poco más oscuro que el fondo general, en oscuro un poco más claro, simulando una hoja física en ambos casos.

---

# Ronda 1 (resumen)

## 1. Home + Tracks (reemplaza la vista "Projects")
- Nueva sección `TracksSection` (`src/ui/components/tracks/`) con 3 tarjetas: **AI & LLM**, **Automation**, **Fullstack Development**, cada una con sus competencias y un modal a pantalla completa con pitch + proyectos relacionados.
- Contenido en `src/config/content.ts` → `tracksContent_tracks`.
- Se eliminó la vista `ProjectsSection` (carrusel) y sus componentes.
- Proyectos activos: solo 3 (CryptoMessage, MyAssistant, Gymbot) — Library Provider se sacó de la lista pero su archivo de contenido sigue disponible por si lo reactivas.

## 2. CV como sección navegable (Markdown)
- `src/content/cv.md`: CV maestro en Markdown, cubre todos los roles.
- `/cv`: página dedicada con la tipografía y colores del sitio, botón "Volver" y botón "Descargar PDF".
- **Pendiente de tu lado:** coloca tu PDF real en `public/cv/camilo-castellanos-cv.pdf` (hay un placeholder con instrucciones ahí).

## 3. Dependencias nuevas
`react-markdown` y `remark-gfm` en `package.json`. Corre `pnpm install` antes de levantar el proyecto.

## Validado en este entorno
- `tsc --noEmit` → sin errores (ronda 1 y ronda 2).
- `next build` falla únicamente por no tener acceso a Google Fonts en este sandbox — no es error de código.

## No implementado (ver recomendación en el chat)
- Chat con LLM en el navegador (LiteRT) — sugerido como proyecto aparte, referenciado desde el track "AI & LLM" cuando esté listo.

