import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
      <p className="mt-2">{t("description")}</p>
    </div>
  );
};

export default Home;
