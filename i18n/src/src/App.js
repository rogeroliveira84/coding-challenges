import React, {Suspense} from 'react';
import Home from "./pages/Home";
import {useTranslation} from "react-i18next";
import i18nInit from "./translations/i18n";
import ChangeLanguageButton from "./components/ChangeLanguageButton";

i18nInit();

function App() {
    const {t} = useTranslation()
    return (
      <Suspense fallback={<div>Loading...</div>}>
          <header>
            <p>{t("welcome")}</p>
          </header>
          <nav>
              <ChangeLanguageButton language='en'/>
              <ChangeLanguageButton language='pt'/>
          </nav>
          <Home/>
      </Suspense>
    );
}

export default App;
