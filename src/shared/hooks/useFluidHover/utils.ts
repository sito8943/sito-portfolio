import { FLUID_ITEM_ATTR } from "./constants";
import type { FluidBox, FluidItemBox } from "./types";

/** Props that make an element a landing spot for the highlight. */
export const fluidItem = (run: string) => ({ [FLUID_ITEM_ATTR]: run });

/**
 * Index of the item the highlight belongs under for a pointer at `y`, or null.
 * Over an item: that item. In a gap inside a run: the closer neighbour (the upper
 * one on a tie), so moving down a list never flickers. Between runs or outside
 * the list: null.
 */
export function pickFluidItem(y: number, items: readonly FluidItemBox[]) {
  const hit = items.findIndex((item) => y >= item.top && y <= item.bottom);
  if (hit !== -1) return hit;
  for (let index = 0; index < items.length - 1; index++) {
    const above = items[index];
    const below = items[index + 1];
    if (!above || !below) continue;
    if (y <= above.bottom || y >= below.top) continue;
    if (above.run !== below.run) return null;
    return y - above.bottom <= below.top - y ? index : index + 1;
  }
  return null;
}

/**
 * Item position in the container's content box (offsets ignore transforms such as
 * an opening animation, and scroll with the content).
 */
export function getFluidBox(
  item: HTMLElement,
  container: HTMLElement,
): FluidBox {
  let x = 0;
  let y = 0;
  let node: Element | null = item;
  while (node instanceof HTMLElement && node !== container) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent;
  }
  return { x, y, width: item.offsetWidth, height: item.offsetHeight };
}

/** Items that can take the highlight right now (skips collapsed / hidden ones). */
export function getFluidItems(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(`[${FLUID_ITEM_ATTR}]`),
  ).filter((item) => item.getBoundingClientRect().height > 0);
}
