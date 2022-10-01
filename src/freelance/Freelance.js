import React from 'react';
import style from './Freelance.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Freelance = () => {
  return (
    <div className={style.freelanceBlock}>
      <div className={` ${styleContainer.container} ${style.freelanceContainer}`}>
        <h2 className={style.title}>I'm available for Freelance</h2>
        <button>Hire me</button>
      </div>
    </div>
  );
}

