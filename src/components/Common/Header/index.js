// import { Switch } from "@mui/material";
import Switch from "./Switch"
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button/button";
import MobileDrawer from "./Drawer";
import "./styles.css";
import { Link } from "react-router-dom";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") == "light" ? false : true
  );

  useEffect(() => {
    if (localStorage.getItem("theme") == "dark") {
      setLight();
    } else {
      setDark();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode == "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links-flex">

        <Switch darkMode={darkMode} onChange={changeMode}/>

        {/* <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        /> */}

        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text="Dashboard"
            onClick={() => {
              console.log("btn-clicked!!!");
            }}
          />
        </Link>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
