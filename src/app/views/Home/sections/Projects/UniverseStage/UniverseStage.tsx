import { useTranslation } from "@/features/i18n";

import { ROLE, UNIVERSE_PRODUCTS } from "../constants";
import { SitoUniverseDecor } from "../SitoUniverseDecor";
import { SitoUniverseLogo } from "../SitoUniverseLogo";
import { StageIntro } from "../StageIntro";
import { DeckGlobe } from "../DeckGlobe";
import { ProductPanel } from "../ProductPanel";

/** Last stage: my own products (no period), in my own brand, around the isotype. */
export function UniverseStage({ number }: { number: number }) {
  const { t } = useTranslation();
  const name = t("_pages:home.projects.universe.name");

  return (
    <div className="projects-stage">
      <StageIntro
        brand="sitoUniverse"
        label={t("_pages:home.projects.stageLabel", {
          number: String(number).padStart(2, "0"),
        })}
        logo={<SitoUniverseLogo className="stage-intro-logo" label={name} />}
        decor={<SitoUniverseDecor />}
        tagline={t("_pages:home.projects.universe.tagline")}
        about={t("_pages:home.projects.universe.about")}
        facts={[
          { label: t("_pages:home.projects.labels.role"), value: ROLE },
          {
            label: t("_pages:home.projects.labels.kind"),
            value: t("_pages:home.projects.universe.kind"),
          },
          {
            label: t("_pages:home.projects.labels.status"),
            value: t("_pages:home.projects.universe.status"),
          },
        ]}
      />
      <div className="projects-panels">
        {UNIVERSE_PRODUCTS.map((product, p) => {
          const title = t(
            `_pages:home.projects.universe.products.${product.id}.title`,
          );
          const kind = t(
            `_pages:home.projects.universe.products.${product.id}.kind`,
          );
          return (
            <ProductPanel
              key={product.id}
              index={String(p + 1).padStart(2, "0")}
              eyebrow={`${name} · ${kind}`}
              title={title}
              text={t(
                `_pages:home.projects.universe.products.${product.id}.text`,
              )}
              image={product.image}
              brand={product.brand}
              feature={product.feature === "globe" ? <DeckGlobe /> : null}
              alt={title}
              media={product.media}
              link={product.link}
              visitLabel={t("_pages:home.projects.visit")}
              facts={[
                { label: t("_pages:home.projects.labels.role"), value: ROLE },
                { label: t("_pages:home.projects.labels.kind"), value: kind },
                {
                  label: t("_pages:home.projects.labels.status"),
                  value: t("_pages:home.projects.universe.status"),
                },
              ]}
            />
          );
        })}
      </div>
    </div>
  );
}
