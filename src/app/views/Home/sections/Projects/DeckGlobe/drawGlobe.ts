import { GLOBE_ROUTE_GAP_MS, GLOBE_ROUTE_MS, GLOBE_TILT } from "./constants";
import type { GlobeScene } from "./types";
import { routeState, shows, turn } from "./utils";

/** One frame: body, land dots (fainter towards the edge), the rim's glow, then the routes. */
export function drawGlobe(
  context: CanvasRenderingContext2D,
  size: number,
  scene: GlobeScene,
  spin: number,
  ms: number,
  still: boolean,
) {
  const { dots, routes, colors } = scene;
  const r = size * 0.34;
  const c = size / 2;
  context.clearRect(0, 0, size, size);

  const halo = context.createRadialGradient(c, c, r * 0.9, c, c, r * 1.25);
  halo.addColorStop(0, colors.rim);
  halo.addColorStop(1, "transparent");
  context.globalAlpha = 0.35;
  context.fillStyle = halo;
  context.fillRect(0, 0, size, size);
  context.globalAlpha = 1;
  const body = context.createRadialGradient(
    c - r * 0.3,
    c - r * 0.35,
    r * 0.1,
    c,
    c,
    r,
  );
  body.addColorStop(0, colors.body);
  body.addColorStop(1, "#02060f");
  context.beginPath();
  context.arc(c, c, r, 0, Math.PI * 2);
  context.fillStyle = body;
  context.fill();

  context.fillStyle = colors.dot;
  const dotSize = Math.max(1, size / 260);
  for (const dot of dots) {
    const p = turn(dot, spin, GLOBE_TILT);
    if (p.z <= 0) continue;
    context.globalAlpha = 0.15 + 0.85 * p.z;
    context.fillRect(
      c + p.x * r - dotSize / 2,
      c - p.y * r - dotSize / 2,
      dotSize,
      dotSize,
    );
  }
  context.globalAlpha = 1;

  context.save();
  context.shadowColor = colors.rim;
  context.shadowBlur = size / 22;
  context.lineWidth = Math.max(1.5, size / 220);
  context.strokeStyle = colors.rim;
  context.beginPath();
  context.arc(c, c, r, 0, Math.PI * 2);
  context.stroke();
  context.restore();

  routes.forEach(({ points, tone }, index) => {
    const { drawn, alpha } = still
      ? { drawn: 1, alpha: 1 }
      : routeState(ms - index * GLOBE_ROUTE_GAP_MS, GLOBE_ROUTE_MS);
    if (alpha <= 0) return;
    const color = colors.arcs[tone % colors.arcs.length] ?? colors.rim;
    const last = Math.round(drawn * (points.length - 1));
    const turned = points.map((p) => turn(p, spin, GLOBE_TILT));
    context.save();
    context.globalAlpha = alpha;
    context.strokeStyle = color;
    context.lineWidth = Math.max(1, size / 280);
    context.shadowColor = color;
    context.shadowBlur = size / 60;
    context.beginPath();
    let open = false;
    for (let i = 0; i <= last; i++) {
      const p = turned[i];
      if (!p || !shows(p)) {
        open = false;
        continue;
      }
      const x = c + p.x * r;
      const y = c - p.y * r;
      if (open) context.lineTo(x, y);
      else context.moveTo(x, y);
      open = true;
    }
    context.stroke();
    context.fillStyle = color;
    for (const p of [turned[0], turned[last]]) {
      if (!p || !shows(p)) continue;
      context.beginPath();
      context.arc(c + p.x * r, c - p.y * r, size / 90, 0, Math.PI * 2);
      context.fill();
    }
    context.restore();
  });
}
