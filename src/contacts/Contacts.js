import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Title } from '../common/components/title/Title';

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={` ${styleContainer.container} ${style.contactsContainer}`}>
        <Title text={'Contacts'} />
        <form className={style.form}>
          <input></input>
          <input></input>
          <textarea></textarea>
        </form>
        <button>Send</button>
      </div>

    </div>
  );
}

