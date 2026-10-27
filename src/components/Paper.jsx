import { useMemo } from 'react';
import { tornPolygon } from '../lib/random.js';

/**
 * A torn paper cut-out. The torn sheet is a clipped background layer, so the
 * content (and focus rings) are never clipped. Colour comes from the --paper variable.
 */
export default function Paper({
  as: Tag = 'div',
  seed = 1,
  jag,
  step,
  tape,
  className = '',
  children,
  ...rest
}) {
  const clipPath = useMemo(() => tornPolygon(seed, { jag, step }), [seed, jag, step]);
  // Phrasing-only parents (button, span, a) need a span wrapper; everything else gets a div.
  const Inner = ['button', 'span', 'a', 'p'].includes(Tag) ? 'span' : 'div';
  return (
    <Tag className={`paper ${className}`} {...rest}>
      <span className="paper__shadow" aria-hidden="true">
        <span className="paper__sheet" style={{ clipPath }} />
      </span>
      {tape && <span className={`tape tape--${tape}`} aria-hidden="true" />}
      {children != null && <Inner className="paper__content">{children}</Inner>}
    </Tag>
  );
}
