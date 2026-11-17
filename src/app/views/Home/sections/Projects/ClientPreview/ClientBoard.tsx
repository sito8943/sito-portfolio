import { COLUMNS } from "./constants";

/** Board skeleton: toolbar and task columns with tagged cards. Shapes only. */
export function ClientBoard() {
  return (
    <div className="client-preview-body">
      <span className="client-preview-toolbar">
        <span
          className="internal-preview-line internal-preview-title"
          style={{ width: "24%" }}
        />
        <span className="internal-preview-button" />
      </span>
      <span className="client-preview-columns">
        {COLUMNS.map((tasks, c) => (
          <span key={c} className="client-preview-column">
            <span className="client-preview-column-head">
              <span className="client-preview-dot" />
              <span
                className="internal-preview-line"
                style={{ width: "46%" }}
              />
              <span className="client-preview-count" />
            </span>
            {tasks.map((task) => (
              <span key={task.width} className="client-preview-task">
                <span className="client-preview-tag" data-tag={task.tag} />
                <span
                  className="internal-preview-line"
                  style={{ width: `${task.width}%` }}
                />
                <span
                  className="internal-preview-line internal-preview-line-soft"
                  style={{ width: "40%" }}
                />
                <span className="client-preview-avatars">
                  <span className="client-preview-avatar" />
                  <span className="client-preview-avatar" />
                </span>
              </span>
            ))}
          </span>
        ))}
      </span>
    </div>
  );
}
