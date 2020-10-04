import React from "react";

import s from "./Style/MainPage.module.sass"

const MainPage: React.FC = () => {
  return (
    <div className={s.container}>
        <div className={s.main}>
          Main!
        </div>
    </div>
  );
}

export default MainPage
