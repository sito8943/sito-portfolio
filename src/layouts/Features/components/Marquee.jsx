import { useMemo, useState } from "react";
import PropTypes from "prop-types";

// styles
import styles from "./styles.module.css";

function Marquee({
  elements,
  component,
  renderFunction,
  reverse,
  className,
  height,
}) {
  const marqueeContent = useMemo(() => {
    switch (component) {
      case "array": {
        return elements?.map((item, i) => (
          <li key={i} className={`${styles.marque_item} gap-1`}>
            {renderFunction ? renderFunction(item) : item}
          </li>
        ));
      }
      default: //text
        return elements;
    }
  }, [height, elements, component]);

  const [paused, setPaused] = useState(false);

  return (
    <ul className={`${styles.wrapper}`}>
      <div
        className={
          reverse
            ? `${styles.marquee} ${styles.marquee__reverse}`
            : styles.marquee
        }
      >
        <div
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`${styles.marquee__group} ${
            paused && styles.marquee__paused
          } ${className}`}
        >
          {marqueeContent}
        </div>
        <div
          aria-hidden="true"
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={`${styles.marquee__group} ${
            paused && styles.marquee__paused
          } ${className}`}
        >
          {marqueeContent}
        </div>
      </div>
    </ul>
  );
}

Marquee.propTypes = {
  elements: PropTypes.array,
  component: PropTypes.string,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  height: "h-[450px]",
};

export default Marquee;
