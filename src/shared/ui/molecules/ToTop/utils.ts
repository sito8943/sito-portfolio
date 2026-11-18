/**
 * How far (px) the button must rise so its centre meets `target`'s centre; 0 while the target is
 * still below the button's resting spot. `currentLift` is the rise already applied to `button`.
 */
export function getDockLift(
  button: HTMLElement,
  target: HTMLElement,
  currentLift: number,
) {
  const buttonBox = button.getBoundingClientRect();
  const targetBox = target.getBoundingClientRect();
  const restingCenter = buttonBox.top + buttonBox.height / 2 + currentLift;
  const targetCenter = targetBox.top + targetBox.height / 2;
  return Math.max(0, restingCenter - targetCenter);
}
