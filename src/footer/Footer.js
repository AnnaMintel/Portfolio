import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={` ${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Hanna Mintel</h2>
        <div className={style.icons}>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
        </div>
        <h3 className={style.title}>2022</h3>
      </div>
    </div>
  );
}

