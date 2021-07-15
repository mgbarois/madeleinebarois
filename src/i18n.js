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
            pluri: "Multilingualism & Interculturality Master's (First year)",
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
                company: "Chacun Son Court",
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
            myProfile: 'Mon Profil',
            linkedinLink: "https://www.linkedin.com/in/madeleine-barois/fr",
            linkedinTooltip: "Suivez-moi sur Linkedin",
            githubTooltip: "Suivez-moi sur GitHub",
            codepenTooltip: "Allez voir mes Codepens",
            replitTooltip: "Allez voir mes Repls",
            langSelector: "Choix de langues",
            langs: "Langues",
          },
          indexHeader: {
            subtitle: 'Développeuse web & Ingénieure pour la Localisation'
          },
          aboutMe: {
            title: 'A PROPOS DE MOI',
            text: "Bonjour, bienvenue sur mon site web ! Je suis un développeur web avec une formation en linguistique. J'ai découvert ma passion pour le codage en travaillant comme ingénieur en localisation dans le secteur des services linguistiques, et je me suis depuis reconvertie dans le développement web full-stack. Je suis passionnée par la création, l'apprentissage de nouvelles choses et l'application de mes compétences multidisciplinaires pour analyser et résoudre des problèmes.",
            myPictureAlt: "Madeleine Barois",
            domEngName: "Analyse et résolution de problèmes",
            domEngAlt: "Ingénierie",
            domWebName: "Qualité et Rigueur",
            domWebAlt: "Web",
            domLangName: "Connaissances linguistiques et culturelles",
            domLangAlt: "Langues",
            domDesName: "Créativité et compétences design",
            domDesAlt: "Design",
          },
          skills: {
            title: "COMPÉTENCES",
            dev: "Développement",
            loc: "Localisation & Langues",
            other: "Other",
            locTasks : [
              "Manipulation/traitement de fichiers",
              "Configuration des outils de TAO",
              "Développement et gestion des connecteurs/plugins de l'API SDL",
              "Assistance technique, dépannage, débogage",
              "Documentation des processus",
            ],
            jira: "Sytème de tickets Jira",
            confluence: "Outil de documentation Confluence",
            adobe: "Suite Adobe",

          }, 
          education: {
            title: "FORMATION",
            edu: "Éducation",
            cert: "Certifications",
            caweb: "Master CAWEB",
            cawebLink: "https://mastercaweb.u-strasbg.fr/?lang=fr",
            unistra: "Université de Strasbourg",
            pluri: "Master I en Plurilingualisme & Interculturalité",
            ling: "Bacherlor en Linguistique",
            ubc: "Université de Colombie-Britannique",
            ztmCourse: "The Complete Web Developer in 2021",
            fccCert: "Certification FreeCodeCamp",
            api: "APIs and Microservices",
            frontend: "Front End Libraries",
            javascript: "JavaScript Algorithms and data Structures",
            csharp: "C# Intermediate: Classes, Interfaces and OOP",
            csharpCourse: "Cours Udemy par Mosh Hamedani"
          }, 
          experience: {
            title: "EXPÉRIENCE PROFESSIONNELLE",
            relevant: [
              {
                title: "Développeuse Web sous contrat",
                company: "Nsombou Abalghe-Dzal Association",
                location: "À distance",
                dates: "2021-Présent",
                link: "https://blogdown-poc.netlify.app/",
                logo: "NADA_logo.png"
              },
              {
                title: "Ingénieure pour la localization",
                company: "Acolad Group",
                location: "Bruxelles, Belgium",
                dates: "2018-2021",
                link: "https://www.acolad.com/",
                logo: "acolad.png"
              },
              {
                title: "Apprentie Ingénieure pour la localization",
                company: "Telelingua International",
                location: "Paris, France",
                dates: "2017-2018",
                link: "https://www.acolad.com/",
                logo: "telelingua_logo.png"
              },
              {
                title: "Rédactrice de règles sémantiques (mi-temps)",
                company: "SmartKYC",
                location: "À distance",
                dates: "2016-2017",
                link: "https://smartkyc.com/",
                logo: "smartkyc_logo.png"
              },
              {
                title: "Responsable adjointe du contenu Web",
                location: "Strasbourg, France",
                company: "Master TCLoc",
                dates: "2016-2017",
                link: "https://mastertcloc.unistra.fr/",
                logo: "tcloc_logo.png"
              },
              {
                title: "Chef de projet web",
                location: "Strasbourg, France",
                company: "Chacun Son Court",
                dates: "2016-2017",
                link: "",
                logo: "chacunsoncourt_logo.jpg"
              },
              {
                title: "Enseignante d'anglais et de français",
                company: "Berlitz",
                location: "Cologne, Germany & Strasbourg, France",
                dates: "2014-2016",
                link: "https://www.acolad.com/",
                logo: "berlitz_logo.jpg"
              },
              {
                title: "Assistante de recherche en linguistique",
                company: "Université de Colombie-Britannique",
                location: "Vancouver, Canada",
                dates: "2013-2014",
                link: "https://linguistics.ubc.ca/",
                logo: "ubc_logo.jpg"
              },
              {
                title: "Guide touristique multilingue",
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
            jan: "Janvier",
            feb: "Février",
            mar: "Mars",
            apr: "Avril",
            may: "Mai",
            jun: "Juin",
            jul: "Juillet",
            aug: "Août",
            sep: "Septembre",
            oct: "Octorbre",
            nov: "Novembre",
            dec: "Décembre"
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