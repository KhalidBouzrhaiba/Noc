// Deterministic pseudo-random generator, so every torn edge looks the same on each render.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pct = (n) => `${n.toFixed(2)}%`;

// A rectangle with irregular, hand-torn edges, expressed as a CSS clip-path polygon.
export function tornPolygon(seed, { jag = 2.4, step = 7 } = {}) {
  const r = mulberry32(seed);
  const next = () => step * (0.55 + r() * 0.9);
  const j = () => r() * jag;
  const pts = [];
  for (let x = 0; x < 100; x += next()) pts.push([x, j()]);
  for (let y = 0; y < 100; y += next()) pts.push([100 - j(), y]);
  for (let x = 100; x > 0; x -= next()) pts.push([x, 100 - j()]);
  for (let y = 100; y > 0; y -= next()) pts.push([j(), y]);
  return `polygon(${pts.map(([x, y]) => `${pct(x)} ${pct(y)}`).join(', ')})`;
}

// Organic blob (paint mark / cut-out) as a polygon around the centre.
export function blobPolygon(seed, { points = 18, wobble = 0.22 } = {}) {
  const r = mulberry32(seed);
  const pts = [];
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const rad = 50 * (1 - wobble + r() * wobble);
    pts.push([50 + Math.cos(a) * rad, 50 + Math.sin(a) * rad]);
  }
  return `polygon(${pts.map(([x, y]) => `${pct(x)} ${pct(y)}`).join(', ')})`;
}
