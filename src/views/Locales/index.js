import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../../components/text";
import { useLS } from "../../utils/local-storage";

function Locales() {
  const { t, i18n } = useTranslation();
  const { lsSet } = useLS();

  function changeLanguage(lng) {
    i18n.changeLanguage(lng);
    lsSet("lang", lng);
  };

  return (
    <>
      <h1>{t("welcome_message")}</h1>

      <span>{t("change_lang")}: </span>
      <button
        type="button"
        onClick={() => changeLanguage("pt")}
        disabled={i18n.language === "pt"}
      >
        Português do Brasil
      </button>

      <button
        type="button"
        onClick={() => changeLanguage("en")}
        disabled={i18n.language === "en"}
      >
        English
      </button>
    </>
  );
}

export { Locales };