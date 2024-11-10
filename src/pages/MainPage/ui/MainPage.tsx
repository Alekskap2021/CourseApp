import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("home");

  return <div>{t("mainPageTitle")}</div>;
};

export default MainPage;
