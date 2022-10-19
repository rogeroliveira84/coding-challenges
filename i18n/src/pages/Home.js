import {useTranslation} from "react-i18next";

const Home = () => {
    const {t} = useTranslation();
    return (
        <div className='home-section'>
            <p>{t("homePage.title")}</p>
        </div>
    )
}

export default Home;
