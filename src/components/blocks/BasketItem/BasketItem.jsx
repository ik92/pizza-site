import React from "react";
import { useLocation } from "react-router";

import { Button } from "../../ui";

import pizzaLogo from "../../../assets/img/card-food.jpeg";
import trashSvg from "../../../assets/img/trash.svg";

import "./BasketItem.scss";

const BasketItem = ({
  count,
  _id,
  name,
  imageUrl,
  price,
  category,
  size,
  type,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="basket__item">
      <div className="basket__item-left">
        <div className="basket__item-img">
          <img src={imageUrl} alt="pizzaLogo" />
        </div>
        <div className="basket__item-descr">
          <div className="basket__item-descr-title">{name}</div>
          <div className="basket__item-descr-subtitle">
            {size}, {type} тесто
          </div>
        </div>
      </div>
      <div className="basket__item-right">
        {pathname === "/basket" ? (
          <div className="basket__item-score">
            <Button color="grey" minus="minus" />
            <div className="basket__item-num">
              <span>{count}</span>
            </div>
            <Button color="grey" plus="plus" />
          </div>
        ) : (
          <div className="basket__item-score">
            <div className="basket__item-num">
              <span>{count} шт.</span>
            </div>
          </div>
        )}

        <div className="basket__item-allprice">{count * price} ₽</div>
        {pathname === "/basket" && (
          <div className="basket__item-trash">
            <img src={trashSvg} alt="trashSvg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketItem;
