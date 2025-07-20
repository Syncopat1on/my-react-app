import React, { useRef, useEffect } from 'react';
import style from './CartModal.module.scss';
import cartEmpty from '../../assets/cartEmpty.svg';
import CardItemSkeleton from './CardItemSkeleton/CardItemSkeleton';
import { CartItem } from '../../type';

interface CartModalProps {
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export const CartModal = ({
  cartItems,
  onClose,
  onUpdateQuantity,
}: CartModalProps) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const cartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(`.${style.btn}`)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <>
      {cartItems.length === 0 ? (
        <div className={style.emptyCartContainer} ref={cartRef}>
          <img src={cartEmpty} className={style.imgEmpty} />
          <div className={style.titleEmpty}>Your cart is empty!</div>
        </div>
      ) : (
        <div className={style.cartContainer} ref={cartRef}>
          {cartItems.map((item) => (
            <CardItemSkeleton
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
          <div className={style.totalContainer}>
            <div className={style.brTotal}></div>
            <div className={style.totalContent}>
              <div className={style.total}>Total</div>
              <div className={style.totalPrice}>$ {totalPrice}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CartModal;
