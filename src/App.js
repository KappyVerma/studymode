import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/mainPage/mainPage";
import SecondPage from "./component/secondPage/secondPage";
import SettingPage from "./component/settingPage/settingPage";

import data from "./data/data.json";
import { useState } from "react";
import "./App.scss";

function App() {
  const [isPrivateModeOn, setIsPrivateModeOn] = useState(false);

  const clickHandler = (event) => {
    event.preventDefault();
    setIsPrivateModeOn(!isPrivateModeOn);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage data={data} isPrivateModeOn={isPrivateModeOn} />}
          />
          <Route path="create-group" element={<SecondPage data={data} />} />
          <Route
            path="setting"
            element={
              <SettingPage
                data={data}
                clickHandler={clickHandler}
                isPrivateModeOn={isPrivateModeOn}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
