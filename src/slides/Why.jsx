import Paper from '../components/Paper.jsx';
import { Book, Bubble, Bulb, Camera, Clapper, CurlyArrow, Film, Globe, Masks, Mic, Palette, Sparkle, Star } from '../components/Icons.jsx';

// Each fragment = one student, one passion. They start scattered, then lock into one mosaic.
// col / row describe the final placement in a 4×4 grid.
const TILES = [
  { word: 'langues', color: 'yellow', Icon: Globe, col: '1 / 3', row: '1', sx: -38, sy: -30, sr: -40 },
  { word: 'photo', color: 'turq', Icon: Camera, col: '3', row: '1', sx: 10, sy: -46, sr: 35 },
  { word: 'cinéma', color: 'coral', Icon: Clapper, col: '4', row: '1 / 3', sx: 40, sy: -20, sr: 50 },
  { word: 'théâtre', color: 'magenta', Icon: Masks, col: '1', row: '2 / 4', sx: -48, sy: 6, sr: -25 },
  { word: 'écriture', color: 'cream', Icon: Book, col: '2', row: '2', sx: -18, sy: 40, sr: 60 },
  { word: 'musique', color: 'purple', Icon: Mic, col: '3', row: '2', sx: 30, sy: 36, sr: -55 },
  { word: 'idées', color: 'turq', Icon: Bulb, col: '2 / 4', row: '3', sx: 8, sy: 50, sr: 20 },
  { word: 'dessin', color: 'yellow', Icon: Palette, col: '4', row: '3', sx: 46, sy: 24, sr: -35 },
  { word: 'culture', color: 'coral', Icon: Sparkle, col: '1', row: '4', sx: -42, sy: 44, sr: 30 },
  { word: 'voix', color: 'magenta', Icon: Bubble, col: '2', row: '4', sx: -10, sy: 60, sr: -60 },
  { word: 'vidéo', color: 'purple', Icon: Film, col: '3', row: '4', sx: 22, sy: 58, sr: 45 },
  { word: 'partage', color: 'cream', Icon: Star, col: '4', row: '4', sx: 50, sy: 50, sr: -20 },
];

const KEYWORDS = [
  { word: 'DÉCOUVRIR', color: 'turq', r: -3 },
  { word: 'PARTAGER', color: 'coral', r: 2 },
  { word: 'CRÉER', color: 'magenta', r: -2 },
];

export default function Why() {
  return (
    <div className="s2">
      <div className="s2__text">
        <p className="eyebrow">
          <span>02</span> Pourquoi Mosaïque ?
        </p>
        <h2 className="s2__title">
          <span className="line">DIFFERENT</span> <span className="line outline">PEOPLE.</span>{' '}
          <span className="line line--hl">ONE CREATIVE</span> <span className="line line--hl">SPACE.</span>
        </h2>
        <p className="s2__quote">
          « Mosaïque rassemble les étudiants autour des langues, du cinéma, de la culture, des talents et de la créativité. »
        </p>
        <ul className="s2__keywords" aria-label="Nos trois verbes">
          {KEYWORDS.map((k, i) => (
            <li key={k.word} style={{ '--i': i, '--r': `${k.r}deg` }}>
              <Paper seed={70 + i} jag={10} step={5} className="s2__kw" style={{ '--paper': `var(--${k.color})` }}>
                {k.word}
              </Paper>
              {i < KEYWORDS.length - 1 && (
                <span className="s2__dot" aria-hidden="true">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <figure className="s2__art">
        <div className="s2__mosaic" role="img" aria-label="Douze fragments colorés, chacun une passion différente, qui s’assemblent en une seule mosaïque.">
          {TILES.map(({ word, color, Icon, col, row, sx, sy, sr }, i) => (
            <Paper
              key={word}
              seed={i * 7 + 101}
              jag={5}
              step={11}
              className="s2__tile"
              style={{
                '--paper': `var(--${color})`,
                gridColumn: col,
                gridRow: row,
                '--sx': `${sx}vw`,
                '--sy': `${sy}vh`,
                '--sr': `${sr}deg`,
                '--i': i,
                '--tilt': `${((i * 37) % 7) - 3}deg`,
              }}
            >
              <Icon className="s2__tile-icon" />
              <span className="s2__tile-word">{word}</span>
            </Paper>
          ))}
          <span className="s2__seal" aria-hidden="true">
            <span>toutes les passions</span>
            <strong>= 1 espace</strong>
          </span>
        </div>
        <figcaption className="s2__note">
          <CurlyArrow className="s2__note-arrow" aria-hidden="true" />
          chaque pièce = un·e étudiant·e, une passion
        </figcaption>
      </figure>
    </div>
  );
}
