import React from 'react';
import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={style.logoContainer}>
      <div className={style.vegetable}>Vegetable</div>
      <div className={style.shop}>SHOP</div>
    </div>
  );
};

export default Logo;
