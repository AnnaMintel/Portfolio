import React from 'react';
import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from './project/Project'

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={` ${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Counter'} description={'1texttextte xttexttexttett ttttttt ttttttttttt ttttttttttttt ttttttttttt tttttttttt txttext'}/>
                    <Project title={'SocialNetwork'} description={'1texttextte xttexttexttett ttttttt ttttttttttt ttttttttttttt ttttttttttt tttttttttt txttext'}/>
                </div>
            </div>
        </div>
    );
}
