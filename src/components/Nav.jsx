const pad = (n) => String(n).padStart(2, '0');

export default function Nav({ slides, index, goTo, step }) {
  const last = slides.length - 1;
  return (
    <nav className="deck-nav" aria-label="Navigation de la présentation">
      <button
        type="button"
        className="deck-nav__arrow"
        onClick={() => step(-1)}
        disabled={index === 0}
        aria-label="Écran précédent"
      >
        <span aria-hidden="true">←</span>
      </button>

      <ol className="deck-nav__dots">
        {slides.map((s, i) => (
          <li key={s.id}>
            <button
              type="button"
              className="deck-nav__dot"
              onClick={() => goTo(i)}
              aria-current={i === index ? 'step' : undefined}
              aria-label={`Écran ${i + 1} : ${s.title}`}
              style={{ '--dot': `var(--${s.color})` }}
            >
              <span className="deck-nav__num" aria-hidden="true">{pad(i + 1)}</span>
              <span className="deck-nav__label" aria-hidden="true">{s.short}</span>
            </button>
          </li>
        ))}
      </ol>

      <p className="deck-nav__count" aria-hidden="true">
        <strong>{pad(index + 1)}</strong> / {pad(slides.length)}
      </p>

      <button
        type="button"
        className="deck-nav__arrow deck-nav__arrow--next"
        onClick={() => step(1)}
        disabled={index === last}
        aria-label="Écran suivant"
      >
        <span aria-hidden="true">→</span>
      </button>
    </nav>
  );
}
