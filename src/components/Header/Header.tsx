import React from 'react';
import style from './Header.module.scss';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';
import { CartItem } from '../../type';

interface HeaderProps {
  cartItems: CartItem[];
  toggleCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartItems, toggleCart }) => {
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className={style.header}>
      <Logo />
      <Cart quantity={totalQuantity} onClick={toggleCart} />
    </div>
  );
};

export default Header;
