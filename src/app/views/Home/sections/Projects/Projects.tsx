import { useTranslation } from "@/features/i18n";

import { SECTIONS } from "@/shared/config";

import { ROLE, STAGES } from "./constants";
import { InmersoftDecor } from "./InmersoftDecor";
import { InmersoftLogo } from "./InmersoftLogo";
import { ProductPanel } from "./ProductPanel";
import { StageIntro } from "./StageIntro";

/**
 * Career in stages: each opens with the company's intro in its own identity, then its
 * products as full-screen panels that stack while scrolling.
 */
export function Projects() {
  const { t } = useTranslation();

  const labels = {
    role: t("_pages:home.projects.labels.role"),
    period: t("_pages:home.projects.labels.period"),
    place: t("_pages:home.projects.labels.place"),
    kind: t("_pages:home.projects.labels.kind"),
  };

  return (
    <section id={SECTIONS.projects} className="projects">
      <div className="projects-head">
        <h2 className="section-title">{t("_pages:home.projects.title")}</h2>
        <p className="body body-lg projects-lead">
          {t("_pages:home.projects.lead")}
        </p>
      </div>

      {STAGES.map((stage, s) => {
        const period = t(`_pages:home.projects.stages.${stage.id}.period`);
        const name = t(`_pages:home.projects.stages.${stage.id}.name`);
        return (
          <div key={stage.id} className="projects-stage">
            <StageIntro
              brand={stage.id}
              label={t("_pages:home.projects.stageLabel", {
                number: String(s + 1).padStart(2, "0"),
              })}
              logo={<InmersoftLogo className="stage-intro-logo" label={name} />}
              decor={<InmersoftDecor />}
              tagline={t(`_pages:home.projects.stages.${stage.id}.tagline`)}
              about={t(`_pages:home.projects.stages.${stage.id}.about`)}
              facts={[
                { label: labels.role, value: ROLE },
                { label: labels.period, value: period },
                {
                  label: labels.place,
                  value: t(`_pages:home.projects.stages.${stage.id}.place`),
                },
              ]}
            />
            <div className="projects-panels">
              {stage.products.map((product, p) => {
                const title = t(
                  `_pages:home.projects.products.${product.id}.title`,
                );
                const kind = t(
                  `_pages:home.projects.products.${product.id}.kind`,
                );
                return (
                  <ProductPanel
                    key={product.id}
                    index={String(p + 1).padStart(2, "0")}
                    eyebrow={`${name} · ${kind}`}
                    title={title}
                    text={t(`_pages:home.projects.products.${product.id}.text`)}
                    image={product.image}
                    alt={title}
                    media={product.media}
                    link={product.link}
                    visitLabel={t("_pages:home.projects.visit")}
                    facts={[
                      { label: labels.role, value: ROLE },
                      { label: labels.kind, value: kind },
                      { label: labels.period, value: period },
                    ]}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
