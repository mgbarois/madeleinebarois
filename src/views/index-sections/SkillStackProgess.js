import React from "react";
import { useTranslation } from 'react-i18next';

import {
    Progress
} from "reactstrap";


import './SkillStackProgress.scss';

function SkillStackProgress() {

    const { t } = useTranslation();

    const skillsCol1 = [
        {
            icon: (<i className="fab fa-html5" />),
            name: "HTML5, Pug",
            level: "85"
        },
        {
            icon: (<i className="fab fa-css3-alt" />),
            name: "CSS3, Scss, Sass",
            level: "85"
        },
        {
            icon: (<img src={require("assets/img/bootstrap-brands.svg")} alt="Bootstrap logo" />),
            name: "Bootstrap",
            level: "80"
        },
        {
            icon: (<i className="fab fa-js" />),
            name: "Javascript (ES6+)",
            level: "70"
        },
        {
            icon: (<i className="fab fa-react" />),
            name: "React JS",
            level: "60"
        },
        {
            icon: (<i className="fas fa-server" />),
            name: "Node.js, Express.js",
            level: "50"
        },
    ];
    
    
    const skillsCol2 = [
        {
            icon: (<img src={require('assets/img/csharp_crop.png')} alt='C#' />),
            name: "C# (.NET Framework)",
            level: "60"
        },
        {
            icon: (<i className="fas fa-code" />),
            name: "XML, XPath",
            level: "90"
        },
        {
            icon: (<img src={require('assets/img/regex_crop.png')} alt='Regex' />),
            name: "Regex",
            level: "95"
        },
        {
            icon: (<i className="fas fa-database" />),
            name: "PostgreSQL, MongoDB",
            level: "50"
        },
        {
            icon: (<img src={require("assets/img/visual_studio_logo.png")} alt="Visual Studio logo" />),
            name: "VS (Community & Code)",
            level: "70"
        },
        {
            icon: (<i className="fab fa-git" />),
            name: "Git (GitHub, BitBucket)",
            level: "60"
        }
    ];
    
    // const skillsSpec = [
    //     {
    //         icon: (<img src={require('assets/img/csharp_crop.png')} alt='C#' />),
    //         name: "C# (.NET)"
    //     },
    //     {
    //         icon: (<i className="fas fa-code" />),
    //         name: "XML, XPath"
    //     },
    //     {
    //         icon: (<img src={require('assets/img/regex_crop.png')} alt='Regex' />),
    //         name: "Regex"
    //     }
    // ];
    
    // const skillsBasic = [
    //     {
    //         icon: (<img src={require('assets/img/blogdown.png')} alt='blogdown logo' />),
    //         name: "blogdown, HugoS"
    //     },
    //     {
    //         icon: (<i className="fab fa-php" />),
    //         name: "PHP"
    //     },
    //     {
    //         icon: (<i className="fab fa-python" />),
    //         name: "Python"
    //     }
    // ];

    return (
        <>
            <div className="skill-stack">
                <div className="skills-col">
                    {skillsCol1.map((skill) => {
                        return (
                            <div className="progress-container progress-success">
                                <span className="progress-badge"> <span style={{color:"gray"}}><div className="tool-icon">{skill.icon}</div>{skill.name}</span></span>
                                <Progress max="100" value={skill.level} style={{height: "3px", backgroundColor:"#F5F5F5"}} >
                                </Progress>
                            </div>
                        );
                    })}
                </div>
                <div className="skills-col">
                    {skillsCol2.map((skill) => {
                        return (
                            <div className="progress-container progress-success">
                                <span className="progress-badge"><span style={{color:"gray"}}><div className="tool-icon">{skill.icon}</div>{skill.name}</span></span>
                                <Progress max="100" value={skill.level} style={{height: "3px", backgroundColor:"#F5F5F5"}}>
                                </Progress>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default SkillStackProgress;