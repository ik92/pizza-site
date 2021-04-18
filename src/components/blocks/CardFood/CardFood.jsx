import React, { useState } from "react";

import "./CardFood.scss";

import { Button, ModalWindow } from "../../ui/index";

function CardFood({
  _id,
  imageUrl,
  name,
  description,
  price,
  weight,
  onClickAddPizza,
  category,
}) {
  const sizesPizzas = ["Маленькая", "Средняя", "Большая"];
  const typesPizzas = ["Тонкое", "Традиционное"];
  const [modalActive, setModalActive] = useState(false);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      _id,
      name,
      imageUrl,
      price,
      size: sizesPizzas[activeSize],
      type: typesPizzas[activeType],
      category: setCategory(),
    };
    console.log(obj);
    onClickAddPizza(obj);
  };

  const setCategory = () => {
    for (let key in category) {
      if (category[key]) {
        return key;
      }
    }
  };

  return (
    <>
      <div className="card__food" onClick={() => setModalActive(true)}>
        <div className="card__food-img">
          <img src={imageUrl} alt="Card-foodimage" />
        </div>
        <h3>{name}</h3>
        <h5>{description}</h5>
        <div className="card__food-down">
          <div className="card__food-down-price">
            <h3>от {price} Р</h3>
          </div>
          <div className="card__food-down-btn">
            <Button color="peach" text="Выбрать" />
          </div>
        </div>
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <div className="modal__window-content">
          <div className="modal__window-img">
            <img src={imageUrl} alt="pizza-img" />
          </div>
          <div className="modal__window-wrapper">
            <div className="modal__window-description">
              <div className="modal__window-description-title">{name}</div>
              <div className="modal__window-description-subtitle">
                {`${sizesPizzas[activeSize] || sizesPizzas[0]},
                ${typesPizzas[activeType] || typesPizzas[0]}
                тесто, ${weight} г`}
              </div>
              <div className="modal__window-description-btnsize">
                {sizesPizzas.map((name, index) => (
                  <Button
                    color="grey"
                    text={name}
                    onClick={() => onSelectSize(index)}
                    active={activeSize === index}
                  />
                ))}
              </div>
              <div className="modal__window-description-btntype">
                {typesPizzas.map((type, index) => (
                  <Button
                    color="grey"
                    text={type}
                    onClick={() => onSelectType(index)}
                    active={activeType === index}
                  />
                ))}
              </div>
            </div>
            <div className="modal__window-add">
              <Button
                color="orange"
                text={`Добавить в корзину за ${745} Р`}
                onClick={onAddPizza}
              />
            </div>
          </div>
        </div>
      </ModalWindow>
    </>
  );
}

export default CardFood;
