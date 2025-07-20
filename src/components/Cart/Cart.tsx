import React from 'react';
import style from './Cart.module.scss';
import CartIcon from '../../assets/CartIcon.svg';

interface CartProps {
  quantity: number;
  onClick: () => void;
}

export const Cart: React.FC<CartProps> = ({ quantity, onClick }) => {
  return (
    <>
      <button className={style.button} onClick={onClick}>
        {quantity > 0 && <div className={style.quantity}>{quantity}</div>}
        Cart
        <img src={CartIcon} className={style.iconCart} />
      </button>
    </>
  );
};

export default Cart;
