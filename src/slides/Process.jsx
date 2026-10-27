import Paper from '../components/Paper.jsx';
import { Clapper, Film, Sparkle, Star } from '../components/Icons.jsx';
import { EVENTS, STEPS } from '../data/content.js';

function PosterArt({ id }) {
  if (id === 'babel')
    return (
      <span className="poster__art" aria-hidden="true">
        {['Bonjour', 'Hello', 'Azul', 'مرحبا', '¡Hola!'].map((w, i) => (
          <span key={w} className={`poster__bubble poster__bubble--${i}`} dir="auto">
            {w}
          </span>
        ))}
        <span className="poster__vs outline">VS</span>
      </span>
    );
  if (id === 'rush')
    return (
      <span className="poster__art" aria-hidden="true">
        <Film className="poster__film" />
        <Clapper className="poster__clap" />
        <span className="poster__count">3 · 2 · 1 · action !</span>
      </span>
    );
  return (
    <span className="poster__art" aria-hidden="true">
      <span className="poster__beam" />
      <Star className="poster__spot-star" />
      <Sparkle className="poster__spot-spark" />
    </span>
  );
}

export default function Process() {
  return (
    <div className="s4">
      <div className="s4__head">
        <p className="eyebrow">
          <span>04</span> Du talent à l’expérience
        </p>
        <h2 className="s4__title">
          <span className="w w--1">DISCOVER.</span> <span className="w w--2">CREATE.</span> <span className="w w--3">SHARE.</span>
        </h2>
      </div>

      <div className="s4__flow">
        <svg className="s4__path" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
          <path className="draw" pathLength="1" d="M40 70 C 160 -10, 260 130, 360 60 S 560 -5, 660 70 S 860 120, 970 50" />
        </svg>
        <ol className="s4__steps">
          {STEPS.map((s, i) => (
            <li key={s.num} className="s4__step" style={{ '--i': i }}>
              <Paper seed={300 + i * 9} jag={3} className="s4__card" style={{ '--paper': `var(--${s.color})` }}>
                <span className="s4__num" aria-hidden="true">{s.num}</span>
                <span className="s4__step-title">
                  <span className="sr-only">Étape {s.num} — </span>
                  {s.title}
                </span>
                <span className="s4__step-text">{s.text}</span>
              </Paper>
            </li>
          ))}
        </ol>
      </div>

      <section className="s4__events" aria-labelledby="s4-events-title">
        <div className="s4__events-head">
          <h3 id="s4-events-title" className="s4__events-title">
            3 idées d’événements signature
          </h3>
          <span className="s4__proposed">Concepts proposés</span>
        </div>
        <ul className="s4__posters">
          {EVENTS.map((e, i) => (
            <li key={e.id} className={`poster poster--${e.id}`} style={{ '--i': i }}>
              <Paper seed={400 + i * 5} jag={2} step={6} className="poster__paper" tape={['left', 'top', 'right'][i]}>
                <PosterArt id={e.id} />
                <span className="poster__tag">Concept</span>
                <span className="poster__name">
                  {e.name[0]} <span>{e.name[1]}</span>
                </span>
                <span className="poster__text">{e.text}</span>
              </Paper>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
