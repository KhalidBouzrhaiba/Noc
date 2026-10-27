import Paper from '../components/Paper.jsx';
import Wordmark from '../components/Wordmark.jsx';
import { Camera, Clapper, CurlyArrow, Masks, Mic, Sparkle, Spiral, Squiggle, Star, Palette } from '../components/Icons.jsx';

// Collage fragments that fly in from every side and settle behind the wordmark.
const FRAGMENTS = [
  { color: 'purple', fx: -70, fy: -30, fr: -50 },
  { color: 'purple', fx: 60, fy: -60, fr: 40 },
  { color: 'yellow', fx: -50, fy: 70, fr: 30 },
  { color: 'turq', fx: 70, fy: 50, fr: -35 },
  { color: 'magenta', fx: 10, fy: -90, fr: 60 },
  { color: 'cream', fx: -80, fy: 10, fr: -20 },
  { color: 'turq', fx: 80, fy: -10, fr: 25 },
  { color: 'magenta', fx: -20, fy: 90, fr: -45 },
];

export default function Entrance({ goTo }) {
  return (
    <div className="s1">
      <div className="s1__collage" aria-hidden="true">
        {FRAGMENTS.map((f, i) => (
          <Paper
            key={i}
            seed={i * 13 + 3}
            jag={4}
            step={9}
            className={`s1__frag s1__frag--${i}`}
            style={{
              '--paper': `var(--${f.color})`,
              '--fx': `${f.fx}vw`,
              '--fy': `${f.fy}vh`,
              '--fr': `${f.fr}deg`,
              '--d': `${i * 45}ms`,
            }}
          />
        ))}
      </div>

      <div className="s1__doodles" aria-hidden="true">
        <Star className="doodle s1__d s1__d--star1 float" />
        <Star className="doodle s1__d s1__d--star2 float float--slow" />
        <Sparkle className="doodle s1__d s1__d--spark1 float" />
        <Sparkle className="doodle s1__d s1__d--spark2" />
        <Spiral className="doodle s1__d s1__d--spiral" />
        <Squiggle className="doodle s1__d s1__d--squiggle" />
        <Camera className="doodle s1__d s1__d--camera float float--slow" />
        <Clapper className="doodle s1__d s1__d--clapper float" />
        <Masks className="doodle s1__d s1__d--masks float float--slow" />
        <Mic className="doodle s1__d s1__d--mic float" />
        <Palette className="doodle s1__d s1__d--palette float float--slow" />
      </div>

      <div className="s1__center">
        <h1 className="s1__title">
          <Wordmark className="wm--hero wm--animate" />
        </h1>

        <Paper as="p" seed={42} jag={8} step={6} className="s1__school" style={{ '--paper': 'var(--yellow)' }} tape="left">
          CLUB EST OUARZAZATE
        </Paper>

        <p className="s1__punch">
          <span className="outline">ONE CAMPUS.</span>
          <span>
            A <em>THOUSAND</em> TALENTS.
          </span>
        </p>

        <p className="s1__quote">« Un espace pour découvrir, créer et partager. »</p>

        <div className="s1__cta-wrap">
          <Paper as="button" type="button" seed={9} jag={5} className="btn btn--cta" style={{ '--paper': 'var(--coral)' }} onClick={() => goTo(1)}>
            DÉCOUVRIR LE CLUB <span className="btn__arrow" aria-hidden="true">→</span>
          </Paper>
          <span className="s1__hint" aria-hidden="true">
            <CurlyArrow className="s1__hint-arrow" />
            c’est par ici !
          </span>
        </div>
      </div>

      <div className="stamp s1__stamp" aria-hidden="true">
        <svg viewBox="0 0 200 200">
          <defs>
            <path id="s1-ring" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" />
          </defs>
          <circle cx="100" cy="100" r="96" className="stamp__disc" />
          <circle cx="100" cy="100" r="88" className="stamp__line" />
          <circle cx="100" cy="100" r="56" className="stamp__line" />
          <text className="stamp__ring">
            <textPath href="#s1-ring">JOIN US ✦ JOIN US ✦ JOIN US ✦ JOIN US ✦</textPath>
          </text>
          <text x="100" y="96" className="stamp__big">JOIN</text>
          <text x="100" y="128" className="stamp__big">US!</text>
        </svg>
      </div>
    </div>
  );
}
