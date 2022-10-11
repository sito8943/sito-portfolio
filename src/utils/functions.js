// @ts-check

/**
 * Scroll to a target position, default the top of the page.
 * @param {number} [target=0] - The target position to scroll to. If a string is passed it looks for respective element with target id
 */
export const scrollTo = (target = 0) => {
  let localTarget = 0;
  if (typeof target === "string") {
    const element = document.getElementById(target);
    if (element !== null) localTarget = element.offsetTop - 100;
  }
  window.scroll({
    top: localTarget > 100 ? localTarget : target,
    left: 0,
    behavior: "smooth",
  });
};

/**
 *
 * @param {number} i
 * @param {number} delay
 * @returns
 */
export const parseDelay = (i, delay) => {
  let newDelay = delay;
  for (let j = 0; j < i; j += 1) newDelay += 0.1;
  return newDelay;
};
