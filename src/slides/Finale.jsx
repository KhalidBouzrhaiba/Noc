import Paper from '../components/Paper.jsx';
import Wordmark from '../components/Wordmark.jsx';
import { Bulb, Clapper, Globe, Heart, Masks, Mic, Palette, Camera, Sparkle, Star, Squiggle } from '../components/Icons.jsx';
import { OUTCOMES, WHATSAPP } from '../data/content.js';

// The fragments and symbols of the previous screens come back and gather around the wordmark.
const RETURNING = [
  { Icon: Globe, color: 'yellow', x: 4, y: 8, fx: -60, fy: -50, r: -12 },
  { Icon: Clapper, color: 'coral', x: 86, y: 2, fx: 60, fy: -60, r: 10 },
  { Icon: Masks, color: 'magenta', x: 92, y: 62, fx: 70, fy: 40, r: -8 },
  { Icon: Bulb, color: 'turq', x: 0, y: 64, fx: -70, fy: 50, r: 14 },
  { Icon: Mic, color: 'cream', x: 18, y: 86, fx: -30, fy: 80, r: -16 },
  { Icon: Palette, color: 'yellow', x: 74, y: 86, fx: 40, fy: 80, r: 12 },
  { Icon: Camera, color: 'turq', x: 70, y: 4, fx: 20, fy: -80, r: -6 },
  { Icon: Heart, color: 'coral', x: 24, y: 4, fx: -20, fy: -80, r: 18 },
];

const BITS = [
  { color: 'purple', x: 8, y: 30, w: 9, h: 22, r: -14 },
  { color: 'coral', x: 84, y: 26, w: 11, h: 16, r: 12 },
  { color: 'turq', x: 44, y: 88, w: 14, h: 9, r: -6 },
  { color: 'magenta', x: 58, y: 2, w: 8, h: 12, r: 20 },
  { color: 'yellow', x: 26, y: 78, w: 7, h: 12, r: 26 },
];

const CONFETTI = Array.from({ length: 14 }, (_, i) => ({
  a: (i / 14) * 360 + (i % 3) * 9,
  d: 120 + (i % 4) * 46,
  c: ['yellow', 'coral', 'turq', 'magenta', 'cream', 'purple'][i % 6],
}));

export default function Finale() {
  return (
    <div className="s5">
      <div className="s5__top">
        <div className="s5__headline">
          <p className="eyebrow">
            <span>05</span> L’impact
          </p>
          <h2 className="s5__title">
            <span className="line outline">MORE THAN A CLUB.</span>{' '}
            <span className="line line--accent">A CREATIVE COMMUNITY.</span>
          </h2>
        </div>
        <div className="s5__why">
          <p className="s5__quote">
            « Révéler les talents, rapprocher les étudiants et faire rayonner l’EST Ouarzazate grâce à des expériences créatives et fédératrices. »
          </p>
          <ul className="s5__outcomes">
            {OUTCOMES.map((o, i) => (
              <li key={o} style={{ '--i': i }}>
                <Star className="s5__check" aria-hidden="true" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="s5__finale">
        <div className="s5__gather" aria-hidden="true">
          {BITS.map((b, i) => (
            <Paper
              key={`b${i}`}
              seed={500 + i}
              jag={6}
              className="s5__bit"
              style={{
                '--paper': `var(--${b.color})`,
                left: `${b.x}%`,
                top: `${b.y}%`,
                width: `${b.w}%`,
                height: `${b.h * 2}%`,
                '--r': `${b.r}deg`,
                '--i': i,
              }}
            />
          ))}
          {RETURNING.map(({ Icon, color, x, y, fx, fy, r }, i) => (
            <span
              key={i}
              className="s5__sym"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                color: `var(--${color})`,
                '--fx': `${fx}vw`,
                '--fy': `${fy}vh`,
                '--r': `${r}deg`,
                '--i': i,
              }}
            >
              <Icon />
            </span>
          ))}
        </div>

        <p className="s5__make">
          <span className="s5__make-line">
            MAKE ROOM <span className="s5__for outline">FOR</span>
          </span>
          <span className="s5__mark">
            <Wordmark className="wm--finale" seed={19} />
            <span className="s5__period">.</span>
            <svg className="s5__scribble" viewBox="0 0 400 140" preserveAspectRatio="none" aria-hidden="true">
              <path
                className="draw"
                pathLength="1"
                d="M30 78C30 34 130 12 214 14c92 2 168 22 170 60 2 40-90 58-190 56C96 128 14 110 20 70 26 38 90 22 150 18"
              />
            </svg>
            <span className="s5__burst" aria-hidden="true">
              {CONFETTI.map((c, i) => (
                <span key={i} style={{ '--a': `${c.a}deg`, '--d': `${c.d}px`, '--c': `var(--${c.c})`, '--i': i }} />
              ))}
            </span>
          </span>
        </p>
      </div>

      <div className="s5__bottom">
        <p className="s5__join">
          REJOIGNEZ L’AVENTURE !
          <Squiggle className="s5__join-line" preserveAspectRatio="none" aria-hidden="true" />
        </p>
        <Paper seed={612} jag={3} className="s5__contact" style={{ '--paper': 'var(--cream)' }} tape="top">
          <p className="s5__contact-text">« Une question ? Contactez-nous pour en savoir plus. »</p>
          <a className="s5__wa" href={WHATSAPP.href} target="_blank" rel="noopener noreferrer">
            <svg className="s5__wa-icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.7 1.9 6.6L3 29l7.1-2.2c1.8 1 3.8 1.5 5.9 1.5 7 0 12.6-5.6 12.6-12.6S23 3 16 3zm0 23c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.2 1.3 1.4-4.1-.3-.4c-1.1-1.7-1.7-3.6-1.7-5.6C5.4 9.8 10.1 5.2 16 5.2s10.6 4.6 10.6 10.4S21.9 26 16 26zm5.8-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"
              />
            </svg>
            <span>
              WhatsApp — <strong>{WHATSAPP.display}</strong>
            </span>
            <span className="sr-only"> (s’ouvre dans un nouvel onglet)</span>
          </a>
        </Paper>
      </div>
    </div>
  );
}
