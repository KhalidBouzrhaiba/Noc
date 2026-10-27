// Hand-drawn style line icons (original SVG). They inherit colour from `currentColor`.
const base = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 3,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
};

export const Globe = (p) => (
  <svg {...base} {...p}>
    <g className="ic-spin">
      <circle cx="32" cy="32" r="22" />
      <path d="M32 10c-9 7-12 15-12 22s3 15 12 22c9-7 12-15 12-22s-3-15-12-22z" />
      <path d="M11 30.5c7 2.5 14 3.5 21 3.5s14-1 21-3.5" />
      <path d="M15 19c5 2 11 3 17 3s12-1 17-3M15 45c5-2 11-3 17-3s12 1 17 3" />
    </g>
  </svg>
);

export const Clapper = (p) => (
  <svg {...base} {...p}>
    <path d="M9 27h46v25a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3z" />
    <g className="ic-clap">
      <path d="M8.5 26.5 7 17l45-8 2 10z" />
      <path d="m16 15.5 6 9.5M27 13.5l6 9.5M38 11.5l6 9.5" />
    </g>
    <path d="M9 35h46M18 43h18M18 48h10" />
  </svg>
);

export const Camera = (p) => (
  <svg {...base} {...p}>
    <path d="M8 22c0-2 1.5-3 3.5-3h9l4-6h14l4 6h10c2 0 3.5 1 3.5 3v26c0 2-1.5 3.5-3.5 3.5h-41C9.5 51.5 8 50 8 48z" />
    <circle cx="32" cy="35" r="10" />
    <circle className="ic-pulse" cx="32" cy="35" r="4" />
    <path d="M47 26h3" />
  </svg>
);

export const Masks = (p) => (
  <svg {...base} {...p}>
    <path d="M30 14c-7-3-15-3-22 0 0 14 3 25 11 28 8-3 11-14 11-28z" />
    <path d="M13 23c1.5-1.5 3.5-1.5 5 0M22 23c1.5-1.5 3.5-1.5 5 0M14 31c3 4 8 4 11 0" />
    <g className="ic-wobble">
      <path d="M34 22c7-3 15-3 22 0 0 14-3 25-11 28-8-3-11-14-11-28z" />
      <path d="M38 31c1.5 1 3.5 1 5 0M47 31c1.5 1 3.5 1 5 0M40 42c3-3.5 7-3.5 10 0" />
    </g>
  </svg>
);

export const Book = (p) => (
  <svg {...base} {...p}>
    <path d="M32 18c-7-5-15-6-24-4v35c9-2 17-1 24 4 7-5 15-6 24-4V14c-9-2-17-1-24 4z" />
    <path d="M32 18v35M14 22c4-.5 8 0 12 2M14 30c4-.5 8 0 12 2M38 24c4-2 8-2.5 12-2M38 32c4-2 8-2.5 12-2" />
  </svg>
);

export const Mic = (p) => (
  <svg {...base} {...p}>
    <g className="ic-wobble">
      <rect x="23" y="7" width="18" height="30" rx="9" />
      <path d="M23 18h7M23 25h7" />
    </g>
    <path d="M15 30c0 10 7.5 16 17 16s17-6 17-16M32 46v10M22 57h20" />
  </svg>
);

export const Palette = (p) => (
  <svg {...base} {...p}>
    <path d="M32 8C16 8 7 20 8 33c1 13 12 22 24 22 6 0 6-5 4-8s0-6 4-6h7c6 0 10-4 10-10C57 18 46 8 32 8z" />
    <circle cx="20" cy="30" r="3.5" fill="#ff6b4a" stroke="none" />
    <circle cx="26" cy="19" r="3.5" fill="#ffd23f" stroke="none" />
    <circle cx="38" cy="17" r="3.5" fill="#22d3c5" stroke="none" />
    <circle cx="47" cy="25" r="3.5" fill="#ff2e93" stroke="none" />
  </svg>
);

export const Bulb = (p) => (
  <svg {...base} {...p}>
    <path className="ic-glow" d="M32 10c-10 0-17 7-17 16 0 6 3 10 7 13 2 2 3 4 3 7h14c0-3 1-5 3-7 4-3 7-7 7-13 0-9-7-16-17-16z" />
    <path d="M25 51h14M27 57h10M29 36l3-7 3 7" />
    <path className="ic-rays" d="M32 2v3M8 10l2.5 2.5M56 10l-2.5 2.5M3 28h3M58 28h3" />
  </svg>
);

export const Film = (p) => (
  <svg {...base} {...p}>
    <rect x="8" y="10" width="48" height="44" rx="3" />
    <path d="M18 10v44M46 10v44M8 20h10M8 30h10M8 40h10M46 20h10M46 30h10M46 40h10" />
    <path d="m28 25 9 7-9 7z" />
  </svg>
);

export const Bubble = (p) => (
  <svg {...base} {...p}>
    <path d="M10 14h44c2 0 3 1 3 3v24c0 2-1 3-3 3H30l-11 9v-9h-9c-2 0-3-1-3-3V17c0-2 1-3 3-3z" />
    <path d="M18 25h28M18 33h18" />
  </svg>
);

export const Star = (p) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" {...p}>
    <path
      fill="currentColor"
      d="M32 4l7.6 18.4L58 24l-14 12.6L48 56 32 45.6 16 56l4-19.4L6 24l18.4-1.6z"
    />
  </svg>
);

export const Sparkle = (p) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" {...p}>
    <path fill="currentColor" d="M32 2c2 17 13 28 30 30-17 2-28 13-30 30-2-17-13-28-30-30C19 30 30 19 32 2z" />
  </svg>
);

export const Squiggle = (p) => (
  <svg viewBox="0 0 160 40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" aria-hidden="true" focusable="false" {...p}>
    <path className="draw" pathLength="1" d="M4 24c14-20 24-20 30 0s18 20 28 0 22-20 30 0 18 20 28 0 20-18 36-4" />
  </svg>
);

export const Spiral = (p) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true" focusable="false" {...p}>
    <path className="draw" pathLength="1" d="M33 33c0-2-3-3-4-1-2 3 1 7 5 6 5-1 7-7 4-11-4-5-12-4-15 1-4 7 0 16 8 17 9 2 17-5 17-14 0-11-10-19-21-17" />
  </svg>
);

export const CurlyArrow = (p) => (
  <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...p}>
    <path className="draw" pathLength="1" d="M6 10c22-6 46 2 44 22-1 12-18 14-18 2 0-14 26-20 44-6 10 8 20 22 30 40" />
    <path className="draw draw--late" pathLength="1" d="M94 52l12 18 4-21" />
  </svg>
);

export const Heart = (p) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" {...p}>
    <path fill="currentColor" d="M32 56C14 44 5 34 5 22 5 13 12 7 20 7c5 0 9 3 12 7 3-4 7-7 12-7 8 0 15 6 15 15 0 12-9 22-27 34z" />
  </svg>
);

export const ICONS = { Globe, Clapper, Camera, Masks, Book, Mic, Palette, Bulb, Film, Bubble };
