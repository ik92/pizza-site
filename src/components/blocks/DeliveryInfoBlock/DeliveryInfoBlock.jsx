import React from "react";

import "./DeliveryInfoBlock.scss";

function DeliveryInfoBlock() {
  return (
    <div className="delivery__block">
      <div className="delivery__block-title">
        <h2>Доставка и оплата</h2>
      </div>
      <div className="delivery__block-info">
        <div className="delivery__block-info-item">
          <h3>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h3>
          <h5>
            Если мы не успеем доставить продукты в течение 60 минут, кроме
            соусов и продуктов из раздела «Другие товары», курьер подарит вам
            сертификат или промокод на большую пиццу 35 см на традиционном
            тесте.
          </h5>
        </div>
        <div className="delivery__block-info-item">
          <h3>ДОДО ПИЦЦА — СЕТЬ ПИЦЦЕРИЙ № 1 В РОССИИ</h3>
          <h5>
            По доставке пиццы по данным из отчета Euromonitor International на
            май 2017 года. Все цены в меню указаны без учета скидок.
          </h5>
        </div>
        <div className="delivery__block-info-item">
          <div className="delivery__block-info-item-up">
            <h3>465 ₽</h3>
            <h5>
              Минимальная сумма доставки без учета товаров из категории «Другие
              товары»
            </h5>
          </div>
          <div className="delivery__block-info-item-down">
            <h3>7 000 ₽</h3>
            <h5>
              Максимальная сумма при оплате наличными Изображения продуктов
              могут отличаться от продуктов в заказе.
            </h5>
          </div>
        </div>
        <div className="delivery__block-info-item map__block">
          <h3>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h3>

          <div className="map" style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.ru/maps/193/voronezh/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Воронеж
            </a>
            <a
              href="https://yandex.ru/maps/193/voronezh/?ll=39.200269%2C51.660781&utm_medium=mapframe&utm_source=maps&z=12"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Яндекс.Карты — поиск мест и адресов, городской транспорт
            </a>
           
              <iframe
                title="1"
                src="https://yandex.ru/map-widget/v1/-/CCQlnYTJ3D"
                width="300"
                height="300"
                allowFullscreen="true"
                style={{ position: "relative" }}
              ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfoBlock;
