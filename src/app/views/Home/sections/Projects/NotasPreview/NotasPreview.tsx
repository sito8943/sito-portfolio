import type { CSSProperties } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@/shared/ui/atoms";

import { NotasMark } from "../NotasMark";
import { useThemeCycle } from "../useThemeCycle";

import {
  EDITOR_CHECKS,
  EDITOR_LINES,
  EDITOR_TOOLS,
  NOTE_COLUMNS,
  NOTE_OFFSETS,
  TAB_ACTIVE,
  TABS,
} from "./constants";

/**
 * Sito Notas shown without its notes (private): a skeleton of the app (category tabs, a grid of
 * tagged notes) with the editor in front, typing, plus its app icon. Shapes only, in the Notas
 * blue. Shares `InternalPreview`'s palette, pieces, light/dark cycle and float. Decorative.
 */
export function NotasPreview() {
  const { ref, theme, onScreen } = useThemeCycle<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="internal-preview notas-preview"
      data-theme={theme}
      data-on={onScreen}
      aria-hidden="true"
    >
      <div className="internal-preview-card notas-preview-app">
        <span className="internal-preview-bar" />
        <span className="notas-preview-body">
          <span className="notas-preview-header">
            <NotasMark className="notas-preview-logo" />
            <span className="notas-preview-search" />
            <span className="internal-preview-button" />
          </span>
          <span className="notas-preview-tabs">
            {TABS.map((width, i) => (
              <span
                key={i}
                className="notas-preview-tab"
                data-active={i === TAB_ACTIVE}
                style={{ width: `${width}cqw` }}
              />
            ))}
          </span>
          <span className="notas-preview-grid">
            {NOTE_COLUMNS.map((notes, c) => (
              <span key={c} className="notas-preview-column">
                {notes.map((note, n) => (
                  <span
                    key={n}
                    className="notas-preview-note"
                    style={
                      {
                        "--note-i": (NOTE_OFFSETS[c] ?? 0) + n,
                      } as CSSProperties
                    }
                  >
                    <span
                      className="internal-preview-line internal-preview-title"
                      style={{ width: "56%" }}
                    />
                    {note.lines.map((width, l) => (
                      <span
                        key={l}
                        className="internal-preview-line internal-preview-line-soft"
                        style={{ width: `${width}%` }}
                      />
                    ))}
                    <span className="client-preview-tag" data-tag={note.tag} />
                  </span>
                ))}
              </span>
            ))}
          </span>
        </span>
      </div>

      <div className="internal-preview-card notas-preview-editor">
        <span className="notas-preview-toolbar">
          {EDITOR_TOOLS.map((tool) => (
            <span key={tool} className="notas-preview-tool" />
          ))}
        </span>
        <span className="notas-preview-text">
          <span className="notas-preview-heading" />
          {EDITOR_LINES.map((width, i) => (
            <span
              key={i}
              className="notas-preview-typed"
              style={{ "--typed": `${width}%`, "--line-i": i } as CSSProperties}
            />
          ))}
          {EDITOR_CHECKS.map((check, i) => (
            <span
              key={i}
              className="notas-preview-check"
              data-done={check.done}
              style={{ "--check-i": i } as CSSProperties}
            >
              <span className="notas-preview-box">
                <Icon icon={faCheck} />
              </span>
              <span
                className="internal-preview-line"
                style={{ width: `${check.width}%` }}
              />
            </span>
          ))}
        </span>
      </div>

      <span className="notas-preview-icon">
        <NotasMark className="notas-preview-icon-mark" />
      </span>
    </div>
  );
}
