# Cambios aplicados

## 1. Home + Tracks (reemplaza la vista "Projects")
- Nueva sección `TracksSection` (`src/ui/components/tracks/`) con 3 tarjetas: **AI & LLM**, **Automation**, **Fullstack Development**, cada una con sus competencias (tomadas de tu CV) y un modal a pantalla completa con pitch + proyectos relacionados (con tags de tecnología reutilizados de tus archivos `projectsContent/` existentes — no dupliqué data).
- Contenido de los tracks vive en `src/config/content.ts` → `tracksContent_tracks`. Edítalo ahí si cambian tus competencias o quieres reasignar proyectos a otro track.
- Se eliminó la vista `ProjectsSection` (carrusel) y sus componentes (`src/ui/components/projects/`) — ya no se usan.
- `library provider` se sacó de la lista de proyectos activos (`projectsContent_projectList.projects` ahora tiene solo 3), tal como comentaste. El archivo de contenido del proyecto sigue ahí por si lo quieres reactivar más adelante.
- Navbar y `RightNav` actualizados: `#projects` → `#tracks`, y se agregó un link a `/cv`.

## 2. CV como sección navegable (Markdown)
- `src/content/cv.md`: tu CV "maestro" en Markdown, cubre todos los roles a los que aplicas (igual que el texto que compartiste).
- `/cv` (`src/app/cv/page.tsx` + `src/ui/components/cv/CVView.tsx`): página dedicada que renderiza el markdown con la tipografía y colores del sitio (dark/light incluido), con botón "Volver al portafolio" y botón "Descargar PDF".
- El botón "View CV" del contact card ahora apunta a `/cv` en vez de forzar la descarga directa de un PDF.
- **Pendiente de tu lado:** coloca tu PDF real en `public/cv/camilo-castellanos-cv.pdf` (hay un placeholder con instrucciones en esa carpeta — bórralo después).

## 3. Dependencias nuevas
Se agregaron a `package.json`: `react-markdown` y `remark-gfm` (para renderizar el CV). Corre `pnpm install` antes de levantar el proyecto.

## Validado en este entorno
- `tsc --noEmit` → sin errores.
- `next build` falla únicamente porque este sandbox no tiene acceso a Google Fonts (red restringida) — no es un error de código. En tu máquina con internet normal debería compilar limpio; si no, avísame el error exacto.

## No implementado (ver recomendación en el chat)
- El chat con modelo LLM en el navegador (LiteRT) — te di la razón en la conversación: alto costo técnico/UX para poco impacto en la primera impresión de reclutadores. Sugerido como proyecto aparte, referenciado desde el track "AI & LLM" cuando esté listo.
