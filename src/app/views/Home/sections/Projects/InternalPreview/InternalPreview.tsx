import type { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import {
  ADMIN_NAV,
  ADMIN_NAV_ACTIVE,
  ADMIN_ROWS,
  PORTAL_TILES,
} from "./constants";
import type { InternalPreviewProps } from "./types";

/**
 * Internal platforms shown without showing them: a skeleton admin (navigation, table with
 * statuses) in front of a skeleton portal (profile, course tiles with progress). No real text or
 * data, only shapes. Sized in container units, so it scales as one piece. Decorative.
 */
export function InternalPreview({ badge }: InternalPreviewProps) {
  return (
    <div className="internal-preview" aria-hidden="true">
      <div className="internal-preview-card internal-preview-portal">
        <span className="internal-preview-bar" />
        <div className="internal-preview-portal-head">
          <span className="internal-preview-avatar" />
          <span className="internal-preview-lines">
            <span className="internal-preview-line" style={{ width: "60%" }} />
            <span
              className="internal-preview-line internal-preview-line-soft"
              style={{ width: "36%" }}
            />
          </span>
        </div>
        <div className="internal-preview-tiles">
          {PORTAL_TILES.map((done) => (
            <span key={done} className="internal-preview-tile">
              <span className="internal-preview-tile-thumb" />
              <span
                className="internal-preview-line"
                style={{ width: "80%" }}
              />
              <span
                className="internal-preview-progress"
                style={{ "--progress": `${done}%` } as CSSProperties}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="internal-preview-card internal-preview-admin">
        <span className="internal-preview-bar" />
        <div className="internal-preview-admin-body">
          <span className="internal-preview-nav">
            <span className="internal-preview-logo" />
            {ADMIN_NAV.map((i) => (
              <span
                key={i}
                className="internal-preview-nav-item"
                data-active={i === ADMIN_NAV_ACTIVE}
              />
            ))}
          </span>
          <span className="internal-preview-main">
            <span className="internal-preview-toolbar">
              <span
                className="internal-preview-line internal-preview-title"
                style={{ width: "34%" }}
              />
              <span className="internal-preview-button" />
            </span>
            {ADMIN_ROWS.map((row, i) => (
              <span key={i} className="internal-preview-row">
                <span className="internal-preview-check" />
                <span
                  className="internal-preview-line"
                  style={{ width: `${row.width}%` }}
                />
                <span
                  className="internal-preview-status"
                  data-status={row.status}
                />
              </span>
            ))}
          </span>
        </div>
      </div>

      <span className="internal-preview-badge">
        <FontAwesomeIcon icon={faLock} />
        {badge}
      </span>
    </div>
  );
}
