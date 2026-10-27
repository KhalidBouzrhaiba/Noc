import { useId, useMemo } from 'react';
import { mulberry32 } from '../lib/random.js';

const COLORS = ['#ffd23f', '#ff6b4a', '#22d3c5', '#ff2e93', '#8b3dff', '#fff4e0'];

// The "O" of the wordmark: a ring made of irregular coloured tiles.
export default function MosaicO({ seed = 7 }) {
  const maskId = useId().replace(/:/g, '');
  const tiles = useMemo(() => {
    const r = mulberry32(seed);
    const n = 7;
    const s = 100 / n;
    const grid = [];
    for (let y = 0; y <= n; y++) {
      const row = [];
      for (let x = 0; x <= n; x++) {
        const edge = x === 0 || y === 0 || x === n || y === n;
        row.push([x * s + (edge ? 0 : (r() - 0.5) * s * 0.7), y * s + (edge ? 0 : (r() - 0.5) * s * 0.7)]);
      }
      grid.push(row);
    }
    const out = [];
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const a = grid[y][x], b = grid[y][x + 1], c = grid[y + 1][x + 1], d = grid[y + 1][x];
        const tri = r() > 0.5 ? [[a, b, c], [a, c, d]] : [[a, b, d], [b, c, d]];
        tri.forEach((t) => {
          const cx = (t[0][0] + t[1][0] + t[2][0]) / 3;
          const cy = (t[0][1] + t[1][1] + t[2][1]) / 3;
          out.push({
            d: `M${t.map((p) => p.map((v) => v.toFixed(1)).join(' ')).join('L')}Z`,
            fill: COLORS[Math.floor(r() * COLORS.length)],
            // stagger the pop-in from the centre outwards
            delay: Math.hypot(cx - 50, cy - 50) * 9 + r() * 120,
          });
        });
      }
    }
    return out;
  }, [seed]);

  return (
    <svg className="mosaic-o" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <mask id={maskId}>
          <ellipse cx="50" cy="50" rx="49" ry="49" fill="#fff" />
          <ellipse cx="50" cy="50" rx="21" ry="25" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${maskId})`}>
        {tiles.map((t, i) => (
          <path key={i} className="mosaic-o__tile" d={t.d} fill={t.fill} style={{ '--td': `${t.delay}ms` }} />
        ))}
      </g>
      <ellipse cx="50" cy="50" rx="21" ry="25" fill="none" stroke="#0d0f2e" strokeWidth="2.5" />
    </svg>
  );
}
