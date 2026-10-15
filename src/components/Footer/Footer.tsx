// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// config
import { SOCIALS } from "../../config/socials";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="items-center justify-center flex px-3 min-h-[50px] py-2 bg-dark-background flex-wrap"
    >
      <div className="w-[90%] flex items-center justify-between flex-wrap gap-y-5 sm:my-5">
        <div className="flex">
          <p>{`Sito © ${new Date().getFullYear()}`}</p>
        </div>
        <div className="flex items-center sm:gap-3 gap-5">
          {SOCIALS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              rel="noreferrer"
              target="_blank"
              aria-label={item.text}
              className="transition hover:text-slight text-[25px]"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
