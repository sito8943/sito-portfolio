import React from "react";

// components
import LazyImage from "../../../components/LazyImage/LazyImage";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

function Card({ image, alt, onClick, text, more }) {
  const { languageState } = useLanguage();

  return (
    <article
      name="clickable-card"
      onClick={onClick}
      aria-label={languageState.texts.AriaLabels.clickToDialog}
      className="hover:-translate-y-2 hover:shadow-lg hover:shadow-sdark transition duration-300 bg-dark-background2 md:w-full md:h-auto w-[300px] h-[250px] rounded-xl border-[1px] border-placeholder-dark"
    >
      <LazyImage
        src={image}
        alt={alt}
        className="w-full md:h-[300px] h-[150px] rounded-t-xl object-cover"
      />
      <div className="p-5">
        <p className="text-lg font-bold">{text}</p>
        <p>{more}</p>
      </div>
    </article>
  );
}

export default Card;
