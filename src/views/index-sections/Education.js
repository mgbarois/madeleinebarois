import React from "react";
import { useTranslation } from 'react-i18next';

import './Education.scss';

function Education() {
    const { t } = useTranslation();
    const educationItems = [
        {
            degree: t('education.caweb'),
            institution: t('education.unistra'),
            year: "2016-2018",
            link: t('education.cawebLink'),
            icon: require("assets/img/education/master-caweb.png")
        },
        {
            degree: t('education.pluri'),
            institution: t('education.unistra'),
            link: "https://www.unistra.fr/index.php?id=19612",
            year: "2015-2016"
        },
        {
            degree: t('education.ling'),
            institution: t('education.ubc'),
            link: "https://www.ubc.ca/",
            year: "2010-2014"
        }
    ]
    return (
        <>
            <div className="education-timeline">
                {
                    educationItems.map(item => {
                        return (
                            <div className="education-item">
                                <div className="timeline-content">
                                    <p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer"><span className="degree">{item.degree}</span></a><br />
                                        <span className="institution">{item.institution}</span><br />
                                        <span className="year">{item.year}</span><br />
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );

}

function Certifications() {
    const { t } = useTranslation();
    const certifications = [
        {
            name: t('education.ztmCourse'),
            issuer: 'ZTM Academy',
            link: 'https://www.udemy.com/certificate/UC-3d31e7c1-8539-43c5-8fd3-42d877b6c6d2/',
            date: t('month.jun') + ' 2021'
        },
        {
            name: t('education.api'),
            issuer: t('education.fccCert'),
            link: 'https://www.freecodecamp.org/certification/fccf3e822e3-f846-43f8-a41f-692a6a92b2f3/apis-and-microservices',
            date: t('month.jun') + ' 2021'
        },
        {
            name: t('education.frontend'),
            issuer: t('education.fccCert'),
            link: 'https://www.freecodecamp.org/certification/fccf3e822e3-f846-43f8-a41f-692a6a92b2f3/front-end-libraries',
            date: t('month.may') + ' 2021'
        },
        {
            name: t('education.javascript'),
            issuer: t('education.fccCert'),
            link: 'https://www.freecodecamp.org/certification/fccf3e822e3-f846-43f8-a41f-692a6a92b2f3/javascript-algorithms-and-data-structures',
            date: t('month.mar') + ' 2021'
        },
        {
            name: t('education.csharp'),
            issuer: t('education.csharpCourse'),
            link: 'https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/',
            date: t('month.mar') + ' 2019'
        },
        // {
        //   name: 'C# Basics for Beginners: Learn C# Fundamentals by Coding',
        //   issuer: 'Course by Mosh Hamedani | Udemy',
        //   link: 'https://www.udemy.com/course/csharp-tutorial-for-beginners/',
        //   date: 'March 2019'
        // },
    ]
    return (
        <>
            <div className="education-timeline">
                {
                    certifications.map(cert => {
                        return (
                            <div className="education-item">
                                <div className="timeline-content">
                                    <p>
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer"><span className="degree"><i className="fas fa-certificate" /> {cert.name}</span></a><br />
                                        <span className="institution">{cert.issuer}</span><br />
                                        <span className="year">{cert.date}</span><br />
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export { Education, Certifications };