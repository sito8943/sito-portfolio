/** Option to highlight after `key`, or `undefined` when the key does not move. */
export function getNextIndex(current: number, key: string, count: number) {
  switch (key) {
    case "ArrowDown":
      return Math.min(current + 1, count - 1);
    case "ArrowUp":
      return Math.max(current - 1, 0);
    case "Home":
      return 0;
    case "End":
      return count - 1;
    default:
      return undefined;
  }
}

/** First label after `from` that starts with `char` (wrapping), or -1. */
export function findTypeaheadIndex(
  labels: string[],
  char: string,
  from: number,
) {
  const needle = char.toLocaleLowerCase();
  for (let step = 1; step <= labels.length; step++) {
    const index = (from + step) % labels.length;
    if (labels[index]?.toLocaleLowerCase().startsWith(needle)) return index;
  }
  return -1;
}
