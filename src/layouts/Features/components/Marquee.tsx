import { useState, type ReactNode } from "react";

// styles
import styles from "./styles.module.css";

type MarqueeProps<T> = {
  elements: T[];
  renderFunction: (item: T, index: number) => ReactNode;
  getKey?: (item: T, index: number) => string | number;
  reverse?: boolean;
  className?: string;
};

function Marquee<T>({
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

  const groupClassName = `${styles.marquee__group} ${
    paused ? styles.marquee__paused : ""
  } ${className}`;

  const renderGroup = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className={groupClassName}
      {...pauseHandlers}
    >
      {elements.map((item, i) => (
        <li key={getKey(item, i)} className={`${styles.marque_item} gap-1`}>
          {renderFunction(item, i)}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.wrapper}>
      <div
        className={
          reverse
            ? `${styles.marquee} ${styles.marquee__reverse}`
            : styles.marquee
        }
      >
        {renderGroup(false)}
        {renderGroup(true)}
      </div>
    </div>
  );
}

export default Marquee;
