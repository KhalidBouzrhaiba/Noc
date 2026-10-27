import { useCallback, useEffect, useRef, useState } from 'react';
import Nav from './components/Nav.jsx';
import TerritoryDialog from './components/TerritoryDialog.jsx';
import Entrance from './slides/Entrance.jsx';
import Why from './slides/Why.jsx';
import Universe from './slides/Universe.jsx';
import Process from './slides/Process.jsx';
import Finale from './slides/Finale.jsx';

const SLIDES = [
  { id: 'entree', title: 'La grande entrée', short: 'Entrée', color: 'yellow', Component: Entrance },
  { id: 'pourquoi', title: 'Pourquoi Mosaïque ?', short: 'Pourquoi', color: 'coral', Component: Why },
  { id: 'univers', title: 'Notre univers créatif', short: 'Univers', color: 'turq', Component: Universe },
  { id: 'parcours', title: 'Du talent à l’expérience', short: 'Parcours', color: 'magenta', Component: Process },
  { id: 'impact', title: 'L’impact final', short: 'Impact', color: 'purple', Component: Finale },
];
const LAST = SLIDES.length - 1;
const SWIPE_MIN = 60;

// Keys typed on these keep their native behaviour (Space/Enter activate the control).
const INTERACTIVE = 'button, a, input, textarea, select, summary, [contenteditable="true"], [role="button"]';

export default function App() {
  const [deck, setDeck] = useState({ index: 0, prev: null, dir: 0 });
  const [territory, setTerritory] = useState(null);
  const dialogOpen = useRef(false);
  dialogOpen.current = territory != null;
  const scrollers = useRef([]);

  const goTo = useCallback((target) => {
    setDeck((s) => {
      const index = Math.max(0, Math.min(LAST, target));
      if (index === s.index) return s;
      return { index, prev: s.index, dir: index > s.index ? 1 : -1 };
    });
  }, []);

  // Relative moves read the latest state, so fast repeated presses never skip or double up.
  const step = useCallback((delta) => {
    setDeck((s) => {
      const index = Math.max(0, Math.min(LAST, s.index + delta));
      if (index === s.index) return s;
      return { index, prev: s.index, dir: delta };
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (dialogOpen.current || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
      const onControl = e.target instanceof Element && e.target.closest(INTERACTIVE);
      let delta = 0;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
          delta = 1;
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          delta = -1;
          break;
        case ' ':
        case 'Spacebar':
          if (onControl) return;
          delta = e.shiftKey ? -1 : 1;
          break;
        case 'Home':
          e.preventDefault();
          goTo(0);
          return;
        case 'End':
          e.preventDefault();
          goTo(LAST);
          return;
        default:
          return;
      }
      e.preventDefault();
      if (!e.repeat) step(delta);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, step]);

  // Touch swipe (horizontal only, so vertical scrolling inside a screen still works)
  const touch = useRef(null);
  const onTouchStart = (e) => {
    if (e.touches.length !== 1) return (touch.current = null);
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e) => {
    const start = touch.current;
    touch.current = null;
    if (!start || dialogOpen.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > SWIPE_MIN && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
  };

  // Each screen starts at its top when it becomes active
  useEffect(() => {
    const el = scrollers.current[deck.index];
    if (el) el.scrollTop = 0;
  }, [deck.index]);

  const current = SLIDES[deck.index];

  return (
    <div className="deck" data-slide={current.id}>
      <a className="skip-link" href="#deck-nav-anchor">
        Aller à la navigation
      </a>
      <div className="deck__progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${(deck.index + 1) / SLIDES.length})` }} />
      </div>

      <header className="deck__brand">
        <button type="button" className="deck__home" onClick={() => goTo(0)} aria-label="Revenir au début de la présentation">
          MOSAÏQUE
        </button>
        <span className="deck__school">Club EST Ouarzazate</span>
      </header>

      <main className="deck__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {SLIDES.map(({ id, title, Component }, i) => {
          const active = i === deck.index;
          const leaving = !active && i === deck.prev;
          return (
            <section
              key={id}
              id={`ecran-${id}`}
              className={`slide slide--${id}${active ? ' is-active' : ''}${leaving ? ' is-leaving' : ''}`}
              data-dir={deck.dir}
              aria-roledescription="écran"
              aria-label={`${i + 1} sur ${SLIDES.length} : ${title}`}
              aria-hidden={!active}
              inert={!active}
            >
              <div className="slide__scroll" ref={(el) => (scrollers.current[i] = el)}>
                <Component active={active} goTo={goTo} openTerritory={setTerritory} />
              </div>
            </section>
          );
        })}
      </main>

      <span id="deck-nav-anchor" tabIndex={-1} />
      <Nav slides={SLIDES} index={deck.index} goTo={goTo} step={step} />

      <p className="sr-only" aria-live="polite">
        Écran {deck.index + 1} sur {SLIDES.length} : {current.title}
      </p>

      <TerritoryDialog index={territory} onClose={() => setTerritory(null)} onSelect={setTerritory} />
    </div>
  );
}
