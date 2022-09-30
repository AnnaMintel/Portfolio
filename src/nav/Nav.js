import React from 'react';
import style from './Nav.module.css';
import s from '../common/styles/Container.module.css';


export const Nav = () => {
  return (
    <div className={`${s.container} ${style.wrapper}`}>
      <div className={style.nav}>
        <a href="">Main</a>
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
      </div>
    </div>
  );
}

