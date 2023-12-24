import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faBan,
  faCircleExclamation,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <div className={`scale-animation left-[5%]`}>
        <div className="-rotate-[30deg]">
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className={`float-y text-7xl text-[#f53b3b] opacity-50 `}
          />
        </div>
      </div>
      <div className={`scale-animation w-[100px] h-[100px] right-[5%] top-20`}>
        <div className="rotate-[30deg]">
          <FontAwesomeIcon
            icon={faThumbsDown}
            className={`float-y text-7xl text-[#9494f5] opacity-50`}
          />
        </div>
      </div>
      <div
        className={`scale-animation w-[100px] h-[100px] bottom-[4%] right-[20px]`}
      >
        <FontAwesomeIcon
          icon={faBan}
          className={`float-y text-7xl text-[#d908d9] opacity-50`}
        />
      </div>

      <div className="flex justify-center w-full">
        <h2 className="text-8xl font-">4</h2>
        <h2 className="text-8xl">0</h2>
        <h2 className="text-8xl">4</h2>
      </div>

      <p className="mb-10">{t("_pages:notFound.body")}</p>

      <Link
        to="/"
        name="to-home"
        aria-label={t("_common:ariaLabels.toHome")}
        className="button submit primary flex gap-2 items-center"
      >
        <FontAwesomeIcon icon={faHome} />
        {t("_pages:notFound.goHome")}
      </Link>
    </div>
  );
};

export default NotFound;
