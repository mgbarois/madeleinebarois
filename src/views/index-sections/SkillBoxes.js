import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
} from "reactstrap";

import './SkillBoxes.scss';

const skillsFrontent = [
    {
        icon: (<i className="fab fa-html5" />),
        name: "HTML5"
    },
    {
        icon: (<i className="fab fa-css3-alt" />),
        name: "CSS3"
    },
    {
        icon: (<i className="fab fa-sass" />),
        name: "Sass"
    },
    {
        icon: (<img src={require("assets/img/bootstrap-brands.svg")} alt="Bootstrap logo" />),
        name: "Bootstrap"
    },
    {
        icon: (<i className="fab fa-js" />),
        name: "Javascript (ES6+)"
    },
    {
        icon: (<i className="fab fa-react" />),
        name: "React JS"
    }
];

const skillsBackend = [
    {
        icon: (<i className="fas fa-server" />),
        name: "Node.js, Express.js"
    },
    {
        icon: (<i className="fas fa-database" />),
        name: "PostgreSQL, MongoDB"
    },
    {
        icon: (<img src={require("assets/img/visual_studio_logo.png")} alt="Visual Studio logo" />),
        name: "Visual Studio"
    },
    {
        icon: (<i className="fab fa-git" />),
        name: "Git (GitHub, BitBucket)"
    },
    {
        icon: (<img src={require('assets/img/csharp_crop.png')} alt='C#' />),
        name: "C# (.NET Framework)"
    },
    {
        icon: (<i className="fas fa-code" />),
        name: "XML, XPath, Regex"
    },
       
];

const skillsSpec = [
    {
        icon: (<img src={require('assets/img/csharp_crop.png')} alt='C#' />),
        name: "C# (.NET)"
    },
    {
        icon: (<i className="fas fa-code" />),
        name: "XML, XPath"
    },
    {
        icon: (<img src={require('assets/img/regex_crop.png')} alt='Regex' />),
        name: "Regex"
    }
];

const skillsBasic = [
    {
        icon: (<img src={require('assets/img/blogdown.png')} alt='blogdown logo' />),
        name: "blogdown, HugoS"
    },
    {
        icon: (<i className="fab fa-php" />),
        name: "PHP"
    },
    {
        icon: (<i className="fab fa-python" />),
        name: "Python"
    }
];

const SkillBoxes = () => {
    return (
        <>
            <div className="skill-boxes">
                <div className="skills-container frontend">
                    <div className="skills-box">
                        {
                            skillsFrontent.map(skill => {
                                return (
                                    <div className="tool-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{skill.icon}</div>
                                )
                            })
                        }
                    </div>
                    <div className="skills-text">
                        {
                            skillsFrontent.map(skill => {
                                return (
                                    <p style={{ marginLeft: '2rem' }}>{skill.name}</p>
                                )
                            })
                        }
                    </div>

                </div>
                <div className="skills-container backend">
                    <div className="skills-box">
                        {
                            skillsBackend.map(skill => {
                                return (
                                    <div className="tool-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{skill.icon}</div>
                                )
                            })
                        }
                    </div>
                    <div className="skills-text">
                        {
                            skillsBackend.map(skill => {
                                return (
                                    <p style={{ marginLeft: '2rem' }}>{skill.name}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="skills-container backend"></div>
                <div className="skills-container ide-vc"></div>

            </div>
        </>
    )
}

export default SkillBoxes;