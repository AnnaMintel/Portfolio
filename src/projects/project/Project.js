import React from 'react';
import style from './Project.module.css'

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.picture}>
                <button>Watch</button>
            </div>
            <div className={style.description}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    );
}