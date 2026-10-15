import type { FeatureCardProps } from "./types";

export function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <article className="feature-card">
      <p className="feature-card-title">{title}</p>
      <p className="feature-card-body">{body}</p>
    </article>
  );
}
