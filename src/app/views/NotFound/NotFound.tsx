import { Link } from "react-router-dom";
import { useTranslation } from "@/features/i18n";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faBan,
  faCircleExclamation,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

// lib
import { ROUTES } from "@/shared/config";
import { buttonClassName } from "@/shared/utils";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <div className="not-found-alert scale-animation">
        <div className="not-found-alert-tilt">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className="not-found-alert-icon float-y"
          />
        </div>
      </div>
      <div className="not-found-thumb scale-animation">
        <div className="not-found-thumb-tilt">
          <FontAwesomeIcon
            icon={faThumbsDown}
            className="not-found-thumb-icon float-y"
          />
        </div>
      </div>
      <div className="not-found-ban scale-animation">
        <FontAwesomeIcon icon={faBan} className="not-found-ban-icon float-y" />
      </div>

      <div className="not-found-code">
        <h2>4</h2>
        <h2>0</h2>
        <h2>4</h2>
      </div>

      <p className="not-found-text">{t("_pages:notFound.body")}</p>

      <Link
        to={ROUTES.home}
        aria-label={t("_common:ariaLabels.toHome")}
        className={buttonClassName({ color: "primary", variant: "submit" })}
      >
        <FontAwesomeIcon icon={faHome} />
        {t("_pages:notFound.goHome")}
      </Link>
    </div>
  );
};

export default NotFound;
