import { useTranslation } from "@/features/i18n";

import { SECTIONS } from "@/shared/config";

import { ROLE, STAGE_BRANDS, STAGES } from "./constants";
import { ProductPanel } from "./ProductPanel";
import { ClientPreview } from "./ClientPreview";
import { InternalPreview } from "./InternalPreview";
import { StageIntro } from "./StageIntro";
import { UniverseStage } from "./UniverseStage";

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
        const { Logo, Decor } = STAGE_BRANDS[stage.id];
        return (
          <div key={stage.id} className="projects-stage">
            <StageIntro
              brand={stage.id}
              label={t("_pages:home.projects.stageLabel", {
                number: String(s + 1).padStart(2, "0"),
              })}
              logo={<Logo className="stage-intro-logo" label={name} />}
              decor={<Decor />}
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
              {stage.products.map((product) => {
                const title = t(
                  `_pages:home.projects.products.${product.id}.title`,
                );
                const kind = t(
                  `_pages:home.projects.products.${product.id}.kind`,
                );
                return (
                  <ProductPanel
                    key={product.id}
                    eyebrow={`${name} · ${kind}`}
                    title={title}
                    text={t(`_pages:home.projects.products.${product.id}.text`)}
                    image={product.image}
                    video={product.video}
                    brand={product.brand}
                    feature={
                      product.feature === "internalPreview" ? (
                        <InternalPreview
                          badge={t("_pages:home.projects.privateAccess")}
                        />
                      ) : product.feature === "clientDashboard" ||
                        product.feature === "clientBoard" ? (
                        <ClientPreview
                          variant={
                            product.feature === "clientDashboard"
                              ? "dashboard"
                              : "board"
                          }
                          badge={t("_pages:home.projects.confidential")}
                        />
                      ) : null
                    }
                    hideTitle={product.hideTitle}
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
      <UniverseStage number={STAGES.length + 1} />
    </section>
  );
}
