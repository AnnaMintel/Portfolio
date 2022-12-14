import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill';
import { Title } from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={` ${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'} />
                <div className={style.skills}>
                    <Skill title={'js'} description={'1texttextte xttextt exttett ttttttt ttttttt tttt  tttttttttt txttext'} />
                    <Skill title={'css'} description={'2texttex textte xttext textt ttttttttt tttttttttt ttttttttttt tttttttttttttttext'} />
                    <Skill title={'react'} description={'3textte extte xttextt exttttttttttt ttt tttttt ttttt tttt tttttttttttt tttttttttttt ext'} />
                    <Skill title={'react'} description={'3textte extte xttextt exttttttttttt ttt tttttt ttttt tttt tttttttttttt tttttttttttt ext'} />
                    <Skill title={'react'} description={'3textte extte xttextt exttttttttttt ttt tttttt ttttt tttt tttttttttttt tttttttttttt ext'} />
                    <Skill title={'react'} description={'3textte extte xttextt exttttttttttt ttt tttttt ttttt tttt tttttttttttt tttttttttttt ext'} />
                </div>
            </div>
        </div>
    );
}
