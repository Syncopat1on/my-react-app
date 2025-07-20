import React from 'react';
import { ScaleLoader } from 'react-spinners';
import style from './CardSkeleton.module.scss';

export const CardSkeleton = () => {
  return (
    <div className={style.cardSkeleton}>
      <div className={style.loaderContainer} data-testid="skeleton-loader">
        <ScaleLoader color="#CED4DA" speedMultiplier={2} />
      </div>
    </div>
  );
};

export default CardSkeleton;
