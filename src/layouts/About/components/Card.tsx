// components
import LazyImage from "../../../components/LazyImage/LazyImage";

type CardProps = {
  image: string;
  alt: string;
  text: string;
  more: string;
  noHover?: boolean;
};

function Card({ image, alt, text, more, noHover = false }: CardProps) {
  return (
    <article
      className={`${
        noHover
          ? "!border-0"
          : "hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow/40 transition duration-300 border-placeholder-dark"
      } bg-dark-background2 md:w-full md:h-auto w-[300px] h-[250px] rounded-xl border-[1px] `}
    >
      <LazyImage
        src={image}
        alt={alt}
        className="w-full md:h-[300px] h-[150px] rounded-t-xl object-cover object-bottom"
      />
      <div className="p-1 px-5">
        <p className="text-lg font-bold text-center">{text}</p>
        <p className="text-center mb-5">{more}</p>
      </div>
    </article>
  );
}

export default Card;
