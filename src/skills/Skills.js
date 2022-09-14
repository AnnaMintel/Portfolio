import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={` ${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'js'} description={'1texttextte xttexttexttett ttttttt ttttttttttt ttttttttttttt ttttttttttt tttttttttt txttext'}/>
                    <Skill title={'css'} description={'2texttex texttexttext textt ttttttttt tttttttttt ttttttttttt tttttttttttttttext'}/>
                    <Skill title={'react'} description={'3textte exttexttextt exttttttttttt ttttttttt ttttttttttt tttttttttt ttttttttttttt ttttttttt ttttttttttttttttttttttttext'}/>
                </div>
            </div>
        </div>
    );
}
