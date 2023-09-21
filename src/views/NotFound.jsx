import React, { Suspense } from "react";
import { Link } from "react-router-dom";

// @fortawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faBan,
  faCircleExclamation,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";

const NotFound = () => {
  const { languageState } = useLanguage();

  return (
    <div className="justify-center items-center flex-col w-full h-screen">
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
        <h2 className="">4</h2>
        <h2 className="">0</h2>
        <h2 className="">4</h2>
      </div>

      <p className="mb-10">{languageState.texts.NotFound.Body}</p>

      <a
        href="/"
        name="to-home"
        aria-label={languageState.texts.AriaLabels.toHome}
        className="submit primary"
      >
        <FontAwesomeIcon icon={faHome} />
        {languageState.texts.NotFound.GoHome}
      </a>
    </div>
  );
};

export default NotFound;
