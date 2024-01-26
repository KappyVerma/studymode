import "./settingPage.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";

export default function SettingPage({ clickHandler, isPrivateModeOn }) {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="mobile">
      <div className="mobile__header"></div>
      <div className="mobile__switch-block">
        <p className="mobile__switch">Study Mode</p>
        <Switch {...label} onClick={clickHandler} checked={isPrivateModeOn} />
      </div>
      <Link to="/" className="footer footer__settings"></Link>
    </div>
  );
}
