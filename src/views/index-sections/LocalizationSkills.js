import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Progress,
  Badge
} from "reactstrap";

import './SkillStackProgress.scss';

const LocalizationSkills = () => {
  const { t } = useTranslation();

  const skillsLocalization = [
    {
      icon: (<img src={require('assets/img/sdl_logo.png')} alt="SDL Studio logo" />),
      name: "SDL Trados Studio",
      level: "95"
    },
    {
      icon: (<img src={require('assets/img/memsource.jpg')} alt="Memsource logo" />),
      name: "Memsource",
      level: "70"
    },
    {
      icon: (<img src={require('assets/img/memoq.svg')} alt="MemoQ logo" />),
      name: "MemoQ",
      level: "70"
    },
    {
      icon: (<img src={require('assets/img/okapi_logo.png')} alt="Okapi logo" />),
      name: "Okapi Framework",
      level: "70"
    },
    {
      icon: (<img src={require("assets/img/globalese_logo.png")} alt="Globalese logo" />),
      name: "Globalese",
      level: "80"
    },
    {
      icon: (<img src={require("assets/img/Jira_new_logo.png")} alt="Jira logo" />),
      name: t('skills.jira'),
      level: "90"
    },
    {
      icon: (<img src={require("assets/img/atlassian-confluence.png")} alt="Confluence logo" />),
      name: t('skills.confluence'),
      level: "90"
    },
    {
      icon: (<img src={require("assets/img/adobe.png")} alt="Adobe CC logo" />),
      name: t('skills.adobe'),
      level: "50"
    }
  ];

  console.log(t('skills.locTasks'));
  return (
    <>

      <div className="skill-stack">
        <div className="skills-col">
          <p className="skill-title">{t('skills.locSkillsTitle')}</p>
          {skillsLocalization.map((skill) => {
            return (
              <div className="progress-container progress-success">
                <span className="progress-badge"> <span style={{ color: "gray" }}><div className="tool-icon">{skill.icon}</div>{skill.name}</span></span>
                <Progress max="100" value={skill.level} style={{ height: "3px", backgroundColor: "#F5F5F5" }} >
                </Progress>
              </div>
            );
          })}
        </div>

        <div className="skills-col">
          <div className="loc-tasks">
          <p className="skill-title">{t('skills.locTasksTitle')}</p>
            <ul>
              {
                t('skills.locTasks').map(task => {
                  return (<li><p>{task}</p></li>)
                })
              }
            </ul>
          </div>
          <p className="skill-title">{t('skills.humanLangsTitle')}</p>
          <div className="langs">

            <div className="lang"><div>{t('skills.eng')}</div><Badge color="success">C2</Badge></div>
            <div className="lang"><div>{t('skills.fra')}</div><Badge color="success">C2</Badge></div>
            <div className="lang"><div>{t('skills.spa')}</div><Badge color="success">B2</Badge></div>
            <div className="lang"><div>{t('skills.deu')}</div><Badge color="success">B1</Badge></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocalizationSkills;