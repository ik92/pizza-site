import React from "react";

import "./Footer.scss";

import socialImg1 from "../../assets/img/social-icon/social-icon1.png";
import socialImg2 from "../../assets/img/social-icon/social-icon2.png";
import socialImg3 from "../../assets/img/social-icon/social-icon3.png";
import socialImg4 from "../../assets/img/social-icon/social-icon4.png";
import socialImg5 from "../../assets/img/social-icon/social-icon5.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__up">
        <div className="footer__up-block">
          <h2>1 456 481 719 ₽</h2>
          <h5>
            Выручка российской сети в этом месяце. В прошлом — 2 460 305 416 ₽
          </h5>
        </div>
        <div className="footer__up-block">
          <h2>688 пиццерий</h2>
          <h5>в 14 странах, включая Китай, США и Великобританию</h5>
        </div>
        <div className="footer__up-block">
          <h2>8 800 302-00-60</h2>
          <h5>
            Звонок бесплатный
            <br /> feedback@dodopizza.com
          </h5>
        </div>
      </div>
      <div className="footer__down">
        <div className="footer__down-block">
          <ul className="footer__down-block-left">
            <li>
              <a href="/#">Pizza site © 2021</a>
            </li>
            <li>
              <a href="/#">Правовая информация</a>
            </li>
            <li>
              <a href="/#">Калорийность и состав</a>
            </li>
            <li>
              <a href="/#">Помощь</a>
            </li>
          </ul>
          <div className="footer__down-block-right">
            <div className="footer__down-block-right-img">
              <a href="/#">
                <img src={socialImg1} alt="social_img" />
              </a>
            </div>
            <div className="footer__down-block-right-img">
              <a href="/#">
                <img src={socialImg2} alt="social_img" />
              </a>
            </div>
            <div className="footer__down-block-right-img">
              <a href="/#">
                <img src={socialImg3} alt="social_img" />
              </a>
            </div>
            <div className="footer__down-block-right-img">
              <a href="/#">
                <img src={socialImg4} alt="social_img" />
              </a>
            </div>
            <div className="footer__down-block-right-img">
              <a href="/#">
                <img src={socialImg5} alt="social_img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
