import { useEffect, useRef } from 'react';
import { TERRITORIES } from '../data/content.js';
import { ICONS, Sparkle, Star } from './Icons.jsx';
import Paper from './Paper.jsx';

/**
 * Native modal <dialog>: the browser handles the focus trap, Escape and
 * restoring focus to the territory that opened it.
 */
export default function TerritoryDialog({ index, onClose, onSelect }) {
  const ref = useRef(null);
  const t = index == null ? null : TERRITORIES[index];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (t && !d.open) d.showModal();
    if (!t && d.open) d.close();
  }, [t]);

  const Icon = t ? ICONS[t.icon] : null;
  const total = TERRITORIES.length;

  return (
    <dialog
      ref={ref}
      className="tdialog"
      aria-labelledby="tdialog-title"
      aria-describedby="tdialog-desc"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {t && (
        <Paper
          seed={index * 31 + 5}
          jag={1.4}
          className={`tdialog__panel tdialog__panel--${t.id}`}
          style={{ '--paper': `var(--${t.color})` }}
          tape="top"
        >
          <button type="button" className="tdialog__close" onClick={onClose} autoFocus>
            Fermer <span aria-hidden="true">✕</span>
          </button>

          <span key={`art-${t.id}`} className="tdialog__art" aria-hidden="true">
            <Icon className="tdialog__icon" />
            <Star className="tdialog__star" />
            <Sparkle className="tdialog__sparkle" />
            {t.words.map((w, i) => (
              <span key={w} className="tdialog__word" style={{ '--i': i }} dir="auto">
                {w}
              </span>
            ))}
          </span>

          <div className="tdialog__body">
            <span className="tdialog__kicker">
              Territoire {t.num} / {String(total).padStart(2, '0')}
            </span>
            <h2 key={`title-${t.id}`} id="tdialog-title" className="tdialog__title">
              {t.title[0]} <span className="outline">{t.title[1]}</span>
            </h2>
            <p className="tdialog__pitch">{t.pitch}</p>
            <p id="tdialog-desc" className="tdialog__desc">{t.desc}</p>
            <p className="tdialog__label">Idées d’activités</p>
            <ul className="tdialog__chips">
              {t.chips.map((c, i) => (
                <li key={c} className="tdialog__chip" style={{ '--i': i }}>
                  {c}
                </li>
              ))}
            </ul>
            <div className="tdialog__pager">
              <button type="button" onClick={() => onSelect((index - 1 + total) % total)}>
                <span aria-hidden="true">←</span> Territoire précédent
              </button>
              <button type="button" onClick={() => onSelect((index + 1) % total)}>
                Territoire suivant <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </Paper>
      )}
    </dialog>
  );
}
