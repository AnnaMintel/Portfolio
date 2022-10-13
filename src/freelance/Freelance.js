import React from 'react';
import style from './Freelance.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Title } from '../common/components/title/Title';

export const Freelance = () => {
  return (
    <div className={style.freelanceBlock}>
      <div className={` ${styleContainer.container} ${style.freelanceContainer}`}>
        <Title text={'I am available for Freelance'} />
        <button>Hire me</button>
      </div>
    </div>
  );
}

