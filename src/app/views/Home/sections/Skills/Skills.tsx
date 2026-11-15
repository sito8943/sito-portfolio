import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "@/features/i18n";

import { SECTIONS } from "@/shared/config";
import { InView } from "@/shared/ui/molecules";
import { Section } from "@/shared/ui/templates";

import { LOGO_ANCHOR_MOVE_EVENT, LOGO_ANCHORS } from "../../constants";

import { CAREER_START_YEAR, STACKS, TABS_ID } from "./constants";
import { SkillLogo } from "./SkillLogo";
import { nextTabIndex, yearsSince } from "./utils";

export function Skills() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  /** Last diamond the pointer touched; the logo stays there after the pointer leaves. */
  const [lastHovered, setLastHovered] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const stack = STACKS[active] ?? STACKS[0]!;
  /** Diamond the travelling logo frames: the last hovered one, else the active one. */
  const logoTarget = lastHovered ?? active;
  /** On the active diamond the logo closes in (smaller); elsewhere it hovers wider. */
  const logoLocked = logoTarget === active;

  useEffect(() => {
    window.dispatchEvent(new Event(LOGO_ANCHOR_MOVE_EVENT));
  }, [logoTarget, logoLocked]);

  const select = (index: number) => {
    setActive(index);
    setLastHovered(index);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const next = nextTabIndex(e.key, active, STACKS.length);
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <Section id={SECTIONS.skills} className="skills-section">
      <div className="skills-stack">
        <InView delay="100ms">
          <h2 className="section-title">{t("_pages:home.skills.title")}</h2>
        </InView>

        <InView delay="250ms">
          <ul className="skills-highlights">
            <li className="skills-highlight">
              <strong className="skills-highlight-number">
                {yearsSince(CAREER_START_YEAR)}
              </strong>
              {t("_pages:home.skills.experience")}
            </li>
            <li className="skills-highlight">
              {t("_pages:home.skills.production")}
            </li>
          </ul>
        </InView>

        <div
          role="tablist"
          aria-label={t("_pages:home.skills.title")}
          className="skills-tabs"
        >
          {STACKS.map((item, i) => (
            <InView
              key={item.id}
              delay={`${400 + i * 120}ms`}
              className="skills-tab-cell"
            >
              <button
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${TABS_ID}-tab-${item.id}`}
                aria-selected={i === active}
                aria-controls={`${TABS_ID}-panel`}
                tabIndex={i === active ? 0 : -1}
                className="skills-tab"
                onClick={() => select(i)}
                onMouseEnter={() => setLastHovered(i)}
                onKeyDown={onKeyDown}
              >
                <span className="skills-diamond" aria-hidden="true">
                  <span
                    className="skills-logo-anchor"
                    data-logo-anchor={
                      i === logoTarget ? LOGO_ANCHORS.skills : undefined
                    }
                    data-locked={i === logoTarget && logoLocked}
                  />
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="skills-diamond-icon"
                  />
                </span>
                <span className="skills-tab-name">
                  {t(`_pages:home.skills.stacks.${item.id}`)}
                </span>
              </button>
            </InView>
          ))}
        </div>

        <InView delay="900ms">
          <p className="skills-hint">{t("_pages:home.skills.hint")}</p>
        </InView>

        <InView delay="900ms" className="skills-panel-wrap">
          <ul
            key={stack.id}
            role="tabpanel"
            id={`${TABS_ID}-panel`}
            aria-labelledby={`${TABS_ID}-tab-${stack.id}`}
            className="skills-chips"
          >
            {stack.tools.map((tool, i) => (
              <li
                key={tool.id}
                className="skills-chip-item"
                style={
                  { "--skills-chip-delay": `${i * 60}ms` } as CSSProperties
                }
              >
                <a
                  className="skills-chip"
                  style={{ "--skill-brand": tool.brand } as CSSProperties}
                  aria-label={`${t("_common:ariaLabels.linkTo")} ${tool.id}`}
                  href={tool.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SkillLogo slug={tool.slug} monogram={tool.monogram} />
                  {tool.id}
                </a>
              </li>
            ))}
          </ul>
        </InView>
      </div>
    </Section>
  );
}
