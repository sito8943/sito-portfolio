import { useMemo } from "react";
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

  return (
    <ul className={`${styles.wrapper}`}>
      <div
        className={
          reverse
            ? `${styles.marquee} ${styles.marquee__reverse}`
            : styles.marquee
        }
      >
        <div className={`${styles.marquee__group} ${className}`}>
          {marqueeContent}
        </div>
        <div
          aria-hidden="true"
          className={`${styles.marquee__group} ${className}`}
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
