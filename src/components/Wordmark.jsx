import MosaicO from './MosaicO.jsx';

// Each letter enters from its own direction (--fx/--fy/--fr) and keeps a playful tilt (--r).
const LETTERS = [
  { c: 'M', color: 'yellow', r: -4, fx: -60, fy: -40, fr: -40 },
  { c: 'O', mosaic: true, r: 3, fx: -20, fy: -80, fr: 90 },
  { c: 'S', color: 'coral', r: -2, fx: 10, fy: 70, fr: -30 },
  { c: 'A', color: 'turq', r: 4, fx: 40, fy: -70, fr: 50 },
  { c: 'Ï', color: 'magenta', r: -5, fx: -10, fy: 90, fr: -60 },
  { c: 'Q', color: 'cream', r: 3, fx: 70, fy: -30, fr: 40 },
  { c: 'U', color: 'yellow', r: -3, fx: 60, fy: 60, fr: -45 },
  { c: 'E', color: 'coral', r: 5, fx: 90, fy: 10, fr: 70 },
];

export default function Wordmark({ className = '', seed = 7 }) {
  return (
    <span className={`wm ${className}`}>
      <span className="sr-only">Mosaïque</span>
      <span className="wm__letters" aria-hidden="true">
        {LETTERS.map((l, i) => (
          <span
            key={i}
            className={`wm__l${l.mosaic ? ' wm__l--o' : ''}`}
            style={{
              '--c': l.color ? `var(--${l.color})` : undefined,
              '--r': `${l.r}deg`,
              '--fx': `${l.fx}vw`,
              '--fy': `${l.fy}vh`,
              '--fr': `${l.fr}deg`,
              '--i': i,
            }}
          >
            {l.mosaic ? <MosaicO seed={seed} /> : l.c}
          </span>
        ))}
      </span>
    </span>
  );
}
