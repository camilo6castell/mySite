# Cambios aplicados

## Ronda 4 — limpieza de código muerto, hero y navbar en /cv

**1. Auditoría de "vestigios"**
`src/ui/components/tracks/` sí se usa — es la sección Skills que ves en el sitio (el nombre de carpeta quedó como `tracks` mientras el texto visible dice "Skills", ver ronda 2). Lo que sí estaba muerto y se eliminó:
- `src/types/content.ts`: interfaces que nadie importaba y que además ya estaban desincronizadas con la forma real de los datos en `content.ts` (ej. `HeroContent` no tenía `DescThree` ni `roles`).
- El bloque `<Badge>` comentado en `HeroSection.tsx` — nunca se renderizaba; el badge real vive en la tarjeta de Contact.
- `sectionLabel` en `tracksContent_tracks` — definido pero nunca leído por ningún componente.
- `quickContactContent_hero` — al quitar los botones del Hero (punto 2) dejó de tener consumidor.
- `src/ui/components/contact/atoms/SocialButton.tsx` (ya eliminado en ronda 3).

Lo único que dejé sin usar activamente, pero con razón explícita, es `src/config/projectsContent/libraryProvider/`: no está en la lista de proyectos mostrados, pero es contenido real y completo, fácil de reactivar agregando una línea a `projectsContent_projectList`. Si prefieres que lo borre del todo, dímelo.

**2. Hero: sin botones, roles en columna**
- Se quitó la fila de íconos de contacto rápido (quedaba desordenada). Ese contacto sigue disponible en la sección Contact, como fila de botones.
- `role` (string único) pasó a ser `roles: string[]` — cada uno se renderiza en su propia línea, en columna, con letra más pequeña (`1.05rem` desktop / `0.92rem` mobile).

**3. Navbar en `/cv`**
Home, Skills y Contact se ocultan por completo en `/cv` (no hacen nada ahí). Se mantienen el logo (ahora enlaza a `/` en vez de `#home`, que no te sacaba de `/cv`) y el toggle sol/luna. El link de CV se muestra siempre, activo cuando corresponde.

Sobre el sol/luna: funcionalmente está bien y es un patrón reconocible. Si más adelante quieres algo más refinado (un switch/slider en vez de ícono que cambia) es un cambio pequeño y aislado, pero no es necesario — se ve profesional tal como está.

---

## Ronda 3 — marca personal, contacto y navbar mobile
- Hero con headline, tagline y bio basados en tu LinkedIn (bio reescrita en dos párrafos; los botones de contacto que se agregaron aquí se quitaron en la ronda 4).
- Contact: los 4 canales (Email, LinkedIn, GitHub, WhatsApp) como botones seguidos en una fila; "View CV" separado como link de texto distinto.
- CV diferenciado en el navbar: al final, con separador visual y estilo de pill.
- Navbar mobile: solo íconos (sin texto) en pantallas ≤560px, con `aria-label`.

## Ronda 2 — modal/CV "se abrían en Home"
Causa raíz: `#snap-container` (contenedor con scroll de todo el sitio) tiene `backdrop-filter`, que crea un nuevo *containing block* para `position: fixed` — el modal de Skills se anclaba al tope de ese contenedor (= Home) en vez del viewport. Arreglado portando el modal a `document.body` vía `createPortal`. Además, `#snap-container` y `RightNav` persisten entre rutas y conservaban el scroll/estado anterior; `/cv` ahora resetea el scroll al montar y `RightNav` se oculta fuera de `/`.
- Tarjetas de Skills con chips en vez de viñetas, acento de color y hover animado.
- Competencias ampliadas desde tu CV.
- "Tracks" renombrado a "Skills" en el texto visible.
- Fondo tipo "hoja" en `/cv` (token `paper` en el theme).

## Ronda 1 — Skills + CV
- Nueva sección Skills (reemplaza el carrusel de Projects) con tarjetas + modal a pantalla completa.
- CV en Markdown en `/cv`, con descarga de PDF como acción secundaria.
- Proyectos activos: solo 3 (CryptoMessage, MyAssistant, Gymbot).
- Dependencias nuevas: `react-markdown`, `remark-gfm` — corre `pnpm install` antes de levantar el proyecto.

---

## Validado en este entorno
- `tsc --noEmit` → sin errores en las 4 rondas.
- `next build` falla únicamente por no tener acceso a Google Fonts en este sandbox (403 al pedir fonts.googleapis.com) — no es error de código. En tu máquina con internet normal debería compilar limpio.

## Pendiente de tu lado
- Colocar el PDF real en `public/cv/camilo-castellanos-cv.pdf` (hay un placeholder con instrucciones ahí).
- Decidir si quieres que borre del todo `libraryProvider` o lo dejamos como está por si lo reactivas.
- Revisar que el email mostrado (`kml107@hotmail.com`, en `contactContent_contact` dentro de `src/config/content.ts`) sea el que quieres exponer públicamente — es el mismo que ya tenías, no lo cambié.

## No implementado (ver recomendación en el chat)
- Chat con LLM en el navegador (LiteRT) — sugerido como proyecto aparte, referenciado desde el track "AI & LLM" cuando esté listo.
