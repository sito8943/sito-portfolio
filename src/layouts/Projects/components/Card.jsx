import React from "react";

// components
import LazyImage from "../../../components/LazyImage/LazyImage";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

function Card({ link, image, alt, text, more, ariaLabel }) {
  const { languageState } = useLanguage();

  return (
    <a
      href={link}
      target="blank"
      rel="noreferrer"
      name={text}
      aria-label={ariaLabel}
    >
      <article className="hover:-translate-y-2 hover:shadow-lg hover:shadow-sdark transition duration-300 bg-dark-background2 md:w-full md:h-auto w-[300px] h-[300px] rounded-xl border-[1px] border-placeholder-dark">
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
    </a>
  );
}

export default Card;
