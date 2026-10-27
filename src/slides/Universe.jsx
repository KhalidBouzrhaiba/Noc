import Paper from '../components/Paper.jsx';
import { ICONS, Sparkle, Star } from '../components/Icons.jsx';
import { TERRITORIES } from '../data/content.js';

export default function Universe({ openTerritory }) {
  return (
    <div className="s3">
      <div className="s3__head">
        <p className="eyebrow">
          <span>03</span> Notre univers créatif
        </p>
        <h2 className="s3__title">
          <span className="line outline">NOT JUST A CLUB.</span>{' '}
          <span className="line">
            A WHOLE <span className="s3__orbit">UNIVERSE.</span>
          </span>
        </h2>
        <p className="s3__hint">
          <Sparkle className="s3__hint-icon" aria-hidden="true" />
          4 territoires à explorer : choisissez-en un pour l’ouvrir
        </p>
      </div>

      <svg className="s3__constellation" viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true">
        <path className="draw" pathLength="1" d="M90 210 C 220 60, 330 330, 470 190 S 720 60, 900 220" />
      </svg>

      <ul className="s3__map">
        {TERRITORIES.map((t, i) => {
          const Icon = ICONS[t.icon];
          return (
            <li key={t.id} className={`s3__item s3__item--${t.id}`} style={{ '--i': i }}>
              <Paper
                as="button"
                type="button"
                seed={i * 17 + 211}
                jag={3}
                step={8}
                className={`terr terr--${t.id}`}
                style={{ '--paper': `var(--${t.color})` }}
                tape={i % 2 ? 'right' : 'left'}
                aria-haspopup="dialog"
                aria-label={`${t.title.join(' ')} : ${t.desc} Ouvrir le détail.`}
                onClick={() => openTerritory(i)}
              >
                <span className="terr__num" aria-hidden="true">{t.num}</span>
                <span className="terr__icon" aria-hidden="true">
                  <Icon />
                  <Star className="terr__star" />
                </span>
                <span className="terr__title">
                  {t.title[0]} <span>{t.title[1]}</span>
                </span>
                <span className="terr__reveal">
                  <span className="terr__desc">{t.desc}</span>
                </span>
                <span className="terr__more" aria-hidden="true">
                  Explorer <span>+</span>
                </span>
              </Paper>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
