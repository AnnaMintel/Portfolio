import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title';
import counterImg from './../assets/img/counter.png';

export const Projects = () => {

    const counter = {
        backgroundImage: `url(${counterImg})`
    };
    const login = {
        backgroundImage: `url(${counterImg})`
    };

    return (
        <div className={style.projectsBlock}>
            <div className={` ${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'} />
                <div className={style.projects}>
                    <Project style={counter} title={'Counter'} description={'1texttextte xttexttexttett ttttttt ttttttttttt ttttttttttttt ttttttttttt tttttttttt txttext'} />
                    <Project style={login} title={'SocialNetwork'} description={'1texttextte xttexttexttett ttttttt ttttttttttt ttttttttttttt ttttttttttt tttttttttt txttext'} />
                </div>
            </div>
        </div>
    );
}
