import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    returnObjects: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {

      en: {
        translation: {
          indexNavBar: {
            myProfile: 'My Profile',
            linkedinLink: "https://www.linkedin.com/in/madeleine-barois/en",
            linkedinTooltip: "Follow me on Linkedin",
            githubTooltip: "Follow me on GitHub",
            codepenTooltip: "Check out my Codepens",
            replitTooltip: "Check out my Repls",
            langSelector: "Language selector",
            langs: "Languages",
          },
          indexHeader: {
            subtitle: 'Web developer & Localization Engineer'
          },
          aboutMe: {
            title: 'ABOUT ME',
            text: "Hi there, welcome to my website! I'm a self-taught web developer with a background in linguistics. I discovered my love for coding working as a localization engineer in the language services industry, and have since transitioned into full-stack web developement. I'm passionate about creating, learning new things, and applying my multidisciplinary skillset to analyze and solve problems.",
            myPictureAlt: "Madeleine Barois",
            domEngName: "Analysis and problem solving",
            domEngAlt: "Engineering",
            domWebName: "Quality and meticulousness",
            domWebAlt: "Web",
            domLangName: "Linguistic and cultural knowledge",
            domLangAlt: "Langs",
            domDesName: "Creativity and design sensibility",
            domDesAlt: "Design",
          },
          skills: {
            title: "SKILLSET",
            dev: "Development",
            loc: "Localization & Languages",
            other: "Other",
            locTasks : [
              "File manipulation/processing",
              "CAT tool configuration",
              "Development & management of SDL API connectors/plugins",
              "Technical support, troubleshooting, debugging",
              "Process documentation",
            ],
            jira: "Jira Ticketing System",
            confluence: "Confluence",
            adobe: "Adobe Suite",

          }, 
          education: {
            title: "EDUCATION & TRAINING",
            edu: "Education",
            cert: "Certifications",
            caweb: "CAWEB Master's",
            cawebLink: "https://mastercaweb.u-strasbg.fr/?lang=en",
            unistra: "University of Strasbourg",
            pluri: "Plurilingualism & Interculturality Master's (First year)",
            ling: "Bacherlor's in Linguistics",
            ubc: "University of British Columbia",
            ztmCourse: "The Complete Web Developer in 2021",
            fccCert: "FreeCodeCamp Certification",
            api: "APIs and Microservices",
            frontend: "Front End Libraries",
            javascript: "JavaScript Algorithms and data Structures",
            csharp: "C# Intermediate: Classes, Interfaces and OOP",
            csharpCourse: "Udemy course by Mosh Hamedani"
          }, 
          experience: {
            title: "PROFESSIONAL EXPERIENCE",
            relevant: [
              {
                title: "Contracted Web Developer",
                company: "Nsombou Abalghe-Dzal Association",
                location: "Remote",
                dates: "2021-Present",
                link: "https://blogdown-poc.netlify.app/",
                logo: "NADA_logo.png"
              },
              {
                title: "Localization Engineer",
                company: "Acolad Group",
                location: "Brussels, Belgium",
                dates: "2018-2021",
                link: "https://www.acolad.com/",
                logo: "acolad.png"
              },
              {
                title: "Apprentice Localization Engineer",
                company: "Telelingua International",
                location: "Paris, France",
                dates: "2017-2018",
                link: "https://www.acolad.com/",
                logo: "telelingua_logo.png"
              },
              {
                title: "Semantic Rule Writer (part-time)",
                company: "SmartKYC",
                location: "Remote",
                dates: "2016-2017",
                link: "https://smartkyc.com/",
                logo: "smartkyc_logo.png"
              },
              {
                title: "Assistant Web Content Manager",
                location: "Strasbourg, France",
                company: "TCLoc Master's",
                dates: "2016-2017",
                link: "https://mastertcloc.unistra.fr/",
                logo: "tcloc_logo.png"
              },
              {
                title: "Web Project Manager",
                location: "Strasbourg, France",
                company: "Acolad Group",
                dates: "2016-2017",
                link: "https://www.acolad.com/",
                logo: "chacunsoncourt_logo.jpg"
              },
              {
                title: "English & French Instructor",
                company: "Berlitz",
                location: "Cologne, Germany & Strasbourg, France",
                dates: "2014-2016",
                link: "https://www.acolad.com/",
                logo: "berlitz_logo.jpg"
              },
              {
                title: "Linguistics Research Assistant",
                company: "University of British-Columbia",
                location: "Vancouver, Canada",
                dates: "2013-2014",
                link: "https://linguistics.ubc.ca/",
                logo: "ubc_logo.jpg"
              },
              {
                title: "Multilingual Tour Guide",
                company: "UBC Museum of Anthropology",
                location: "Vancouver, Canada",
                dates: "2012-2014",
                link: "https://www.acolad.com/",
                logo: "moa_logo.png"
              },
            ]
          },
          portfolio: {
            title: "PORTFOLIO"
          },
          contact: {

          },
          month: {
            jan: "January",
            feb: "February",
            mar: "March",
            apr: "April",
            may: "May",
            jun: "June",
            jul: "July",
            aug: "August",
            sep: "September",
            oct: "Octorber",
            nov: "November",
            dec: "December"
          }
        }
      },
      fr: {
        translation: {
          indexNavBar: {
            myProfile: 'Mon Profil'
          },
          indexHeader: {
            subtitle: "Développeuse web & ingénieure pour la localisation"
          },
          basicElements: {
            title: 'Élements basiques'
          }
        }
      },
      de: {
        translation: {
          basicElements: {
            title: 'Grundelemente'
          }
        }
      }
    }
  });

export default i18n;