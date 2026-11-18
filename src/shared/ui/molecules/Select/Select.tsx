import { useId } from "react";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { FLUID_HIGHLIGHT_CLASS, fluidItem, useSelect } from "@/shared/hooks";
import { Icon } from "@/shared/ui/atoms";

import type { SelectProps } from "./types";

/**
 * Button + listbox select, ported from the presentation deck: the list matches @sito/ui menus
 * and one highlight glides between options.
 */
export function Select<T extends string>({
  value,
  options,
  onChange,
  label,
  icon,
  placement = "bottom-start",
  className = "",
}: SelectProps<T>) {
  const id = useId();
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value),
  );
  const select = useSelect({
    labels: options.map((option) => option.label),
    selectedIndex,
    onSelect: (index) => {
      const option = options[index];
      if (option) onChange(option.value);
    },
  });

  return (
    <div ref={select.rootRef} className={`select ${className}`}>
      <span id={`${id}-label`} className="sr-only">
        {label}
      </span>
      <button
        ref={select.triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={select.open}
        aria-controls={`${id}-listbox`}
        aria-labelledby={`${id}-label ${id}-value`}
        onClick={select.toggle}
        onKeyDown={select.onTriggerKeyDown}
        className="select-trigger"
      >
        {icon && <span className="select-icon">{icon}</span>}
        <span id={`${id}-value`} className="select-value">
          {options[selectedIndex]?.label}
        </span>
        <Icon icon={faChevronDown} className="select-chevron" />
      </button>
      {select.open && (
        <ul
          ref={select.listboxRef}
          id={`${id}-listbox`}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-label`}
          aria-activedescendant={`${id}-option-${select.activeIndex}`}
          onKeyDown={select.onListboxKeyDown}
          data-placement={placement}
          className="select-list"
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${id}-option-${index}`}
              role="option"
              aria-selected={index === selectedIndex}
              {...fluidItem("options")}
              onPointerMove={() => select.setActiveIndex(index)}
              onClick={() => select.choose(index)}
              className="select-option"
            >
              <Icon icon={faCheck} className="select-check" />
              {option.label}
            </li>
          ))}
          <li
            ref={select.highlightRef}
            role="presentation"
            aria-hidden
            className={FLUID_HIGHLIGHT_CLASS}
          />
        </ul>
      )}
    </div>
  );
}
