// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SOCIALS } from "@/shared/config";

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-bar">
        <div className="footer-copy">
          <p>{`Sito © ${new Date().getFullYear()}`}</p>
        </div>
        <div className="footer-socials">
          {SOCIALS.map((item) => (
            <a
              key={item.link}
              href={item.link}
              rel="noreferrer"
              target="_blank"
              aria-label={item.text}
              className="footer-social"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
