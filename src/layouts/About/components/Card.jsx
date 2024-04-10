import React from "react";
import { useTranslation } from "react-i18next";

// @sito/ui
import { Image as LazyImage } from "@sito/ui";

function Card({ image, alt, onClick, text, more }) {
  const { t } = useTranslation();

  return (
    <article
      name="clickable-card"
      onClick={onClick}
      aria-label={t("_common:ariaLabels.clickToDialog")}
      className="hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow/40 transition duration-300 bg-dark-background2 md:w-full md:h-auto w-[300px] h-[250px] rounded-xl border-[1px] border-placeholder-dark"
    >
      <LazyImage
        src={image}
        alt={alt}
        className="w-full md:h-[300px] h-[150px] rounded-t-xl object-cover object-bottom"
      />
      <div className="p-5">
        <p className="text-lg font-bold text-center">{text}</p>
        <p className="text-center">{more}</p>
      </div>
    </article>
  );
}

export default Card;
