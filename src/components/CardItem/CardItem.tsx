import style from './CardItem.module.scss';
import GreenCartIcon from '../../assets/GreenCartIcon.svg';
import React, { useState } from 'react';
import { Product } from '../../type';

interface CardItemProps {
  card: Product;
  addToCart: (product: Product, quantity: number) => void;
}

export const CardItem: React.FC<CardItemProps> = ({ card, addToCart }) => {
  const getShortName = (name: string) => {
    const spaceIndex = name.indexOf(' ');
    return spaceIndex === -1 ? name : name.substring(0, spaceIndex);
  };

  const [count, setCount] = useState<number>(1);
  const plus = () => {
    setCount((count) => (count < 10 ? count + 1 : count));
  };
  const minus = () => {
    setCount((count) => (count > 1 ? count - 1 : count));
  };

  return (
    <div className={style.container}>
      <img src={card.image} className={style.image} />
      <div className={style.nameContainer}>
        <div className={style.name}>
          {getShortName(card.name)}
          <span className={style.spanName}>1 kg</span>
        </div>
        <div className={style.counter}>
          <div className={style.minus} onClick={minus}>
            -
          </div>
          <div className={style.value}>{count}</div>
          <div className={style.plus} onClick={plus}>
            +
          </div>
        </div>
      </div>
      <div className={style.priceContainer}>
        <div className={style.price}>$ {card.price}</div>
        <button
          className={`${style.button} ${style.btn}`}
          onClick={() => addToCart(card, count)}
        >
          Add to cart
          <img src={GreenCartIcon} className={style.GreenCartIcon} />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
