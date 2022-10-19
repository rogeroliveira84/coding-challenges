import {useTranslation} from "react-i18next";
import i18n from "i18next";

const ChangeLanguageButton = ({language}) => {
    const {t} = useTranslation();
    return (
        <button onClick={async () => {
            await i18n.changeLanguage(language);
        }}>{t(`changeLanguageButton.${language}`)}</button>
    )
}

export default ChangeLanguageButton;
