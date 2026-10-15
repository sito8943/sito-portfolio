import type { FeatureCardProps } from "./types";

export function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <article className="bg-dark-background w-[300px] h-[250px] p-5 rounded-xl border-[1px] border-placeholder-dark">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-balance">{body}</p>
    </article>
  );
}
