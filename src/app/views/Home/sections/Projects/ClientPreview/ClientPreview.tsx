import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";

import { useThemeCycle } from "../useThemeCycle";

import { ClientBoard } from "./ClientBoard";
import { ClientDashboard } from "./ClientDashboard";
import { CALENDAR_BOOKED, CALENDAR_DAYS, CALENDAR_TODAY } from "./constants";
import type { ClientPreviewProps } from "./types";

/**
 * A client project under NDA shown without showing it: a skeleton app, shapes only, in
 * AOShield's blue. `dashboard` (figures, chart, feed, a toast) or `board` (task columns, a mini
 * calendar). Shares `InternalPreview`'s palette, pieces, light/dark cycle and in-use motion.
 * Decorative.
 */
export function ClientPreview({ variant, badge }: ClientPreviewProps) {
  const { ref, theme, onScreen } = useThemeCycle<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="internal-preview client-preview"
      data-variant={variant}
      data-theme={theme}
      data-on={onScreen}
      aria-hidden="true"
    >
      <div className="internal-preview-card client-preview-app">
        <span className="internal-preview-bar" />
        {variant === "dashboard" ? <ClientDashboard /> : <ClientBoard />}
      </div>
      {variant === "dashboard" ? (
        <div className="internal-preview-card client-preview-toast">
          <span className="client-preview-toast-icon">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className="internal-preview-lines">
            <span className="internal-preview-line" style={{ width: "70%" }} />
            <span
              className="internal-preview-line internal-preview-line-soft"
              style={{ width: "45%" }}
            />
          </span>
        </div>
      ) : (
        <div className="internal-preview-card client-preview-calendar">
          <span
            className="internal-preview-line internal-preview-title"
            style={{ width: "50%" }}
          />
          <span className="client-preview-days">
            {Array.from({ length: CALENDAR_DAYS }, (_, day) => (
              <span
                key={day}
                className="client-preview-day"
                style={{ "--day-i": day } as CSSProperties}
                data-booked={CALENDAR_BOOKED.some((d) => d === day)}
                data-today={day === CALENDAR_TODAY}
              />
            ))}
          </span>
        </div>
      )}
      <span className="internal-preview-badge client-preview-badge">
        <FontAwesomeIcon icon={faLock} />
        {badge}
      </span>
    </div>
  );
}
