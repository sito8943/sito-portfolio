import { useState } from "react";

import type { MarqueeProps } from "./types";

/** Infinite horizontal scroller; pauses on hover/touch. */
export function Marquee<T>({
  elements,
  renderFunction,
  getKey = (_, i) => i,
  reverse = false,
  className = "",
}: MarqueeProps<T>) {
  const [paused, setPaused] = useState(false);

  const pauseHandlers = {
    onMouseDown: () => setPaused(true),
    onMouseUp: () => setPaused(false),
    onTouchStart: () => setPaused(true),
    onTouchEnd: () => setPaused(false),
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
  };

  const renderGroup = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      data-paused={paused}
      className={`marquee-group ${className}`}
      {...pauseHandlers}
    >
      {elements.map((item, i) => (
        <li key={getKey(item, i)} className="marquee-item gap-1">
          {renderFunction(item, i)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-wrapper">
      <div className="marquee" data-reverse={reverse}>
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
}
