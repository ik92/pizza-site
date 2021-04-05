import React from "react";

import { Button } from "../../ui/index";

import "./Menu.scss";

function Menu() {
  const getScroll = () => {
    window.addEventListener("scroll", scrollFunction);
  };

  const scrollFunction = () => {
    const scrollPos = 100;
    const menu = document.querySelector(".menu__wrapper");

    if (
      document.body.scrollTop > scrollPos ||
      document.documentElement.scrollTop > scrollPos
    ) {
      menu.classList.add("fixed");
    } else {
      menu.classList.remove("fixed");
    }
  };

  getScroll();

  return (
    <div className="menu">
      <div className="container">
        <div className="menu__wrapper">
          <nav className="menu__nav">
            <ul className="menu__nav-list">
              <li>
                <a href="#/">Пицца</a>
              </li>
              <li>
                <a href="#/">Комбо</a>
              </li>
              <li>
                <a href="#/">Закуски</a>
              </li>
              <li>
                <a href="#/">Десерты</a>
              </li>
              <li>
                <a href="#/">Напитки</a>
              </li>
              <li>
                <a href="#/">Другие товары</a>
              </li>
              <li>
                <a href="#/">Акции</a>
              </li>
              <li>
                <a href="#/">Контакты</a>
              </li>
              <li>
                <a href="#/">О нас</a>
              </li>
            </ul>
          </nav>
          <div className="menu__basket">
            <Button color="orange" text="Корзина" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
