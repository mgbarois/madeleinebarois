import React from "react";
import { useTranslation } from 'react-i18next';

// import {

// } from "reactstrap";

import './SkillStackBox.scss'; 

const skillsLocalization = [
    {
        icon: (<img src={require('assets/img/sdl_logo.png')} alt="SDL Studio logo" />),
        name: "SDL Trados Studio"
    },
    {
        icon: (<img src={require('assets/img/memsource.jpg')} alt="Memsource logo" />),
        name: "Memsource"
    },
    {
        icon: (<img src={require('assets/img/memoq.svg')} alt="MemoQ logo" />),
        name: "MemoQ"
    },
    {
        icon: (<img src={require('assets/img/okapi_logo.png')} alt="Okapi logo" />),
        name: "Okapi Framework"
    },
    {
        icon: (<img src={require("assets/img/bootstrap-brands.svg")} alt="Globalese logo" />),
        name: "Globalese"
    }
];

const LocalizationSkills = () => {
    const { t } = useTranslation();
    console.log(t('skills.locTasks'));
    return (
        <>
            <div className="skill-stack">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                          {skillsLocalization.map((skill) => {
                            return (
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <div className="tool-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{skill.icon}</div>
                                <p className="tool-name" style={{ marginLeft: '2rem' }}>{skill.name}</p>
                              </div>
                            );
                          })}
                        </div>
                        {/* <div className="row row-loc-tools">
                        <div className="col-md-3 col-sm-6">
                          <div className="img sdl">
                            <img src={require('assets/img/sdl_logo.png')} alt="SDL Studio logo" />
                          </div>
                          <p>SDL Trados Studio<br /><span className="sub">Content</span></p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="img">
                            <img src={require('assets/img/memsource.jpg')} alt="Memsource logo" />
                          </div>
                          <p>Memsource<br /><span className="sub">Content</span></p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="img">
                            <img src={require('assets/img/memoq.svg')} alt="MemoQ logo" />
                          </div>
                          <p>MemoQ<br /><span className="sub">Content</span></p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="img">
                            <img src={require('assets/img/okapi_logo.png')} alt="Okapi logo" />
                          </div>
                          <p>Okapi<br /><span className="sub">Content</span></p>
                        </div>
                        <p>File manipulation/process</p>
                        <p>CAT tool configuration</p>
                        <p>Mangement/development of SDL API Connectors/plugins</p>
                        <p>Technical support</p>
                        <p>Debugging, problem analysis and solving</p>
                        <p>Process documentation</p>
                      </div> */}
                    <div className="loc-tasks">
                        <ul>
                            {
                                t('skills.locTasks').map(task => {
                                    return (<li><p>{task}</p></li>)
                                })
                            }
                        </ul>
                    </div>
            </div>
        </>
    )
}

export default LocalizationSkills;