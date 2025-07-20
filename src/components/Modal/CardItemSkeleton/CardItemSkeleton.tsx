import React from 'react';
import style from './CardItemSkeleton.module.scss';
import { CartItem } from '../../../type';

interface CardSkeletonProps {
  item: CartItem;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export const CardItemSkeleton = ({
  item,
  onUpdateQuantity,
}: CardSkeletonProps) => {
  return (
    <div className={style.cartContainer}>
      <img className={style.img} src={item.image} />
      <div className={style.cartContent}>
        <div className={style.productName}>{item.name}</div>
        <div className={style.priceContent}>
          <div className={style.price}>き {item.price}</div>
          <div className={style.counter}>
            <div
              className={style.minus}
              data-testid="minus-btn"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              -
            </div>
            <div className={style.value}>{item.quantity}</div>
            <div
              className={style.plus}
              data-testid="plus-btn"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              +
            </div>
          </div>
        </div>
        <div className={style.brProduct}></div>
      </div>
    </div>
  );
};

export default CardItemSkeleton;
