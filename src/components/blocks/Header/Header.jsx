import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../ui/index";

import "./Header.scss";

import logoImg from "../../../assets/img/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__wrapper-left">
            <div className="header__logo">
              <Link to={"/"} className="header__logo-img">
                <img src={logoImg} alt="Logo_image" />
              </Link>
              <div className="header__logo-text">
                <div className="header__logo-text-main">Pizza site</div>
                <div className="header__logo-text-subtitle">
                  Сеть пиццерий № 1 в России
                </div>
              </div>
            </div>
            <div className="header__delivery">
              <div className="header__delivery-title">
                Доставка пиццы <span>Воронеж</span>
              </div>
              <div className="header__delivery-time">39 мин - 4.8</div>
            </div>
            <div className="header__phone">
              <div className="header__phone-title">8 800 302-00-60</div>
              <div className="header__phone-subtitle">Звонок бесплатный</div>
            </div>
          </div>
          <div className="header__wrapper-right">
            <div className="header__enter">
              <Button color="grey" text="Войти" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
