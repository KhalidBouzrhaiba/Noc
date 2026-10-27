# MOSAÏQUE — Club EST Ouarzazate

An interactive, fullscreen 5-screen presentation of the **MOSAÏQUE** club, built for the student committee before the club-selection vote.
Creative direction: *creative chaos*. A hand-made collage of torn paper, tape, doodles and oversized type on a midnight-navy background.

## Launch

Requires **Node.js 18+** (tested with Node 22).

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (by default http://localhost:5173).

Production build (static files, no server required):

```bash
npm run build      # outputs to dist/
npm run preview    # serves dist/ at http://localhost:4173
```

The `dist/` folder can be hosted anywhere static. Every push to `main` is deployed to GitHub Pages by `.github/workflows/deploy.yml` (live at https://khalidbouzrhaiba.github.io/Noc/). Fonts are bundled locally, so the presentation works **offline**. Only the WhatsApp link needs the internet.

## Navigating the presentation

| Action | Controls |
| --- | --- |
| Next screen | `→` / `↓` / `Space` / `Page Down` · **→** button · swipe left |
| Previous screen | `←` / `↑` / `Shift+Space` / `Page Up` · **←** button · swipe right |
| Jump to a screen | numbered buttons 01–05 in the bottom bar · `Home` / `End` |
| Creative territories (screen 03) | click / `Enter` on a territory to open it · `Esc`, **Fermer** or a click outside to close |

The current screen is shown as `01 / 05` and by the coloured progress line at the top.

## The 5 screens

1. **La grande entrée**: the MOSAÏQUE wordmark assembles from collage fragments, with a JOIN US stamp.
2. **Pourquoi Mosaïque ?**: twelve "passion" fragments fly in and lock into a single mosaic.
3. **Notre univers créatif**: four interactive territories (hover/focus reveals them, click opens a detail panel).
4. **Du talent à l'expérience**: the 3-step process, followed by 3 proposed signature-event concepts.
5. **L'impact**: the fragments return around the wordmark; *MAKE ROOM FOR MOSAÏQUE.* and the WhatsApp contact.

## Project structure

```
index.html                  entry HTML
src/main.jsx                React entry point (imports fonts and styles)
src/App.jsx                 presentation state: navigation, keyboard, swipe, transitions
src/data/content.js         all the presentation copy (territories, steps, events, contact)
src/slides/                 one component per screen
src/components/             wordmark, mosaic "O", torn paper, SVG icons, navigation, dialog
src/styles/                 base.css (tokens, textures), deck.css (shell/nav/dialog), one file per screen
public/favicon.svg
```

To edit the text, change `src/data/content.js` (or the matching file in `src/slides/`).

## Accessibility and motion

- Real buttons and links, visible keyboard focus, labels for screen readers, live announcement of the current screen.
- Hidden screens are `inert`. The territory panel is a native modal `<dialog>` (focus trapped, `Esc`, focus restored).
- `prefers-reduced-motion` is honoured: the animations are removed and a short cross-fade replaces the transitions.
- Navigation never waits for an animation to finish.
