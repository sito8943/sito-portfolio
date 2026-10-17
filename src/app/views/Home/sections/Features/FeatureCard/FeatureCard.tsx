import type { FeatureCardProps } from "./types";

export function FeatureCard({ icon, title, body, tags }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <span className="feature-card-icon">{icon}</span>
      <p className="feature-card-title">{title}</p>
      <p className="feature-card-body">{body}</p>
      <ul className="feature-card-tags">
        {tags.map((tag) => (
          <li className="feature-card-tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
      <svg className="feature-card-trace" aria-hidden="true">
        <rect pathLength={100} className="feature-card-trace-rest" />
        <rect pathLength={100} className="feature-card-trace-head" />
      </svg>
    </article>
  );
}
