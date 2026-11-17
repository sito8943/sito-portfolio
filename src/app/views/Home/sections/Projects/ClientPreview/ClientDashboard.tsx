import { CHART_AREA, CHART_LINE, FEED, KPIS } from "./constants";

/** Dashboard skeleton: toolbar, key figures, a chart and a feed. Shapes only. */
export function ClientDashboard() {
  return (
    <div className="client-preview-body">
      <span className="client-preview-toolbar">
        <span
          className="internal-preview-line internal-preview-title"
          style={{ width: "28%" }}
        />
        <span className="internal-preview-button" />
      </span>
      <span className="client-preview-kpis">
        {KPIS.map((kpi) => (
          <span key={kpi.width} className="client-preview-kpi">
            <span
              className="internal-preview-line internal-preview-line-soft"
              style={{ width: "50%" }}
            />
            <span
              className="client-preview-figure"
              style={{ width: `${kpi.width}%` }}
            />
            <span className="client-preview-trend" data-up={kpi.up} />
          </span>
        ))}
      </span>
      <span className="client-preview-split">
        <span className="client-preview-chart">
          <svg viewBox="0 0 100 40" preserveAspectRatio="none">
            <path d={CHART_AREA} className="client-preview-chart-area" />
            <path
              d={CHART_LINE}
              className="client-preview-chart-line"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </span>
        <span className="client-preview-feed">
          {FEED.map((width) => (
            <span key={width} className="client-preview-feed-item">
              <span className="client-preview-dot" />
              <span
                className="internal-preview-line"
                style={{ width: `${width}%` }}
              />
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}
