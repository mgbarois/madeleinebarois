import React from "react";
import { useTranslation } from 'react-i18next';

import {
  Progress
} from "reactstrap";

import './SkillStackProgress.scss';
import './SkillStackBox.scss';

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
    name: "Jira Ticketing System",
    level: "90"
  },
  {
    icon: (<img src={require("assets/img/atlassian-confluence.png")} alt="Confluence logo" />),
    name: "Confluence",
    level: "90"
  },
  {
    icon: (<img src={require("assets/img/adobe.png")} alt="Adobe CC logo" />),
    name: "Adobe Suite",
    level: "50"
  }
];

const LocalizationSkills = () => {
  const { t } = useTranslation();
  console.log(t('skills.locTasks'));
  return (
    <>
      <div className="skill-stack">
        <div className="skills-col">
          {skillsLocalization.map((skill) => {
            return (
              <div className="progress-container progress-info">
                <span className="progress-badge"> <span style={{ color: "gray" }}><div className="tool-icon">{skill.icon}</div>{skill.name}</span></span>
                <Progress max="100" value={skill.level} style={{ height: "3px", backgroundColor: "#F5F5F5" }} >
                </Progress>
              </div>
            );
          })}
        </div>

        <div className="loc-tasks">
          <ul>
            {
              t('skills.locTasks').map(task => {
                return (<li><p>{task}</p></li>)
              })
            }
          </ul>
        </div>


        {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          {skillsLocalization.map((skill) => {
            return (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div className="tool-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{skill.icon}</div>
                <p className="tool-name" style={{ marginLeft: '2rem' }}>{skill.name}</p>
              </div>
            );
          })}
        </div>
        <div className="loc-tasks">
          <ul>
            {
              t('skills.locTasks').map(task => {
                return (<li><p>{task}</p></li>)
              })
            }
          </ul>
        </div> */}
      </div>
      <div class="langs">
            <h3><i class="fa fa-language"></i>Languages</h3>
            <div class="skills-soft">
              <ul>
                <li data-percent="100">
                  <p>English</p>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="30"></circle>
                    <circle class="cbar" cx="50" cy="50" r="30"></circle>
                  </svg><span>Native</span><small></small>
                </li>
                <li data-percent="90">
                  <p>French</p>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="30"></circle>
                    <circle class="cbar" cx="50" cy="50" r="30"></circle>
                  </svg><span>Native</span><small></small>
                </li>
                <li data-percent="60" float="left">
                  <p>Spanish</p>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="30"></circle>
                    <circle class="cbar" cx="50" cy="50" r="30"></circle>
                  </svg><span>B2</span><small></small>
                </li>
                <li data-percent="45" float="left">
                  <p>German</p>
                  <svg viewbox="0 0 100 100">
                    <circle cx="50" cy="50" r="30"></circle>
                    <circle class="cbar" cx="50" cy="50" r="30"></circle>
                  </svg><span>B1</span><small></small>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}

export default LocalizationSkills;