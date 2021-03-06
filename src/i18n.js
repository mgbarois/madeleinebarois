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
            aboutme: "About Me",
            skillset: "Skillset",
            education: "Education",
            experience: "Experience",
            portfolio: "Portfolio",
            contact: "Contact",
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
            text: "Hi there, welcome to my website! I'm a web developer with a background in linguistics. I discovered my love for coding working as a localization engineer in the language services industry, and have since transitioned into full-stack web development. I'm passionate about creating, learning new things, and applying my multidisciplinary skillset to analyze and solve problems.",
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
            locSkillsTitle :"Localization Tools:",
            locTasksTitle :"Localization Tasks:",
            locTasks : [
              "Pre- and post- processing of complex file types",
              "CAT tool configuration",
              "Development & management of SDL API connectors/plugins",
              "Technical support, troubleshooting, debugging",
              "Process documentation",
            ],
            humanLangsTitle :"Human languages:",
            eng: "English",
            fra: "French",
            spa: "Spanish",
            deu: "German",
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
            contactme: "Contact Me",
            name: "Name...",
            email: "Email...",
            message: "Message...",
            send: "Send",
            success: "Success",
            error: "Error",
            successMessage: "Thanks for your message! It has been successfully sent and I will get back to you shortly.",
            errorMessage: "Oops, something went wrong there. Please make sure you have input your name, messsage, and a valid e-mail address. Should problems persist, please contact me on ",

          },
          footer: {
            by: "by"
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
            aboutme: "?? propos",
            skillset: "Comp??tences",
            education: "Formation",
            experience: "Exp??rience",
            portfolio: "Portfolio",
            contact: "Contact",
            linkedinLink: "https://www.linkedin.com/in/madeleine-barois/fr",
            linkedinTooltip: "Suivez-moi sur Linkedin",
            githubTooltip: "Suivez-moi sur GitHub",
            codepenTooltip: "Allez voir mes Codepens",
            replitTooltip: "Allez voir mes Repls",
            langSelector: "Choix de langues",
            langs: "Langues",
          },
          indexHeader: {
            subtitle: 'D??veloppeuse web & Ing??nieure pour la localisation'
          },
          aboutMe: {
            title: '?? PROPOS',
            text: "Bonjour, bienvenue sur mon site web ! Je suis une d??veloppeuse Web avec une formation en linguistique. J'ai d??couvert ma passion pour le codage en travaillant comme ing??nieure en localisation dans le secteur des services linguistiques, et je me suis depuis reconvertie dans le d??veloppement Web full-stack. Je suis passionn??e par la cr??ation, l'apprentissage de nouvelles choses et l'application de mes comp??tences pluridisciplinaires pour analyser et r??soudre des probl??mes.",
            myPictureAlt: "Madeleine Barois",
            domEngName: "Analyse et r??solution de probl??mes",
            domEngAlt: "Ing??nierie",
            domWebName: "Qualit?? et Rigueur",
            domWebAlt: "Web",
            domLangName: "Connaissances linguistiques et culturelles",
            domLangAlt: "Langues",
            domDesName: "Cr??ativit?? et comp??tences en design",
            domDesAlt: "Design",
          },
          skills: {
            title: "COMP??TENCES",
            dev: "D??veloppement",
            loc: "Localisation & Langues",
            other: "Autres",
            locSkillsTitle :"Outils pour la localisation :",
            locTasksTitle :"T??ches de localisation:",
            locTasks : [
              "Manipulation/traitement de fichiers",
              "Configuration des outils de TAO",
              "D??veloppement et gestion des connecteurs/plugins de l'API SDL",
              "Assistance technique, d??pannage, d??bogage",
              "Documentation des processus",
            ],
            humanLangsTitle : "Langues humaines :",
            eng: "Anglais",
            fra: "Fran??ais",
            spa: "Espagnol",
            deu: "Allemand",
            jira: "Syt??me de tickets Jira",
            confluence: "Outil de documentation Confluence",
            adobe: "Suite Adobe",

          }, 
          education: {
            title: "FORMATION",
            edu: "??ducation",
            cert: "Certifications",
            caweb: "Master CAWEB",
            cawebLink: "https://mastercaweb.u-strasbg.fr/?lang=fr",
            unistra: "Universit?? de Strasbourg",
            pluri: "Master I en Plurilingualisme & Interculturalit??",
            ling: "Bacherlor en Linguistique",
            ubc: "Universit?? de Colombie-Britannique",
            ztmCourse: "The Complete Web Developer in 2021",
            fccCert: "Certification FreeCodeCamp",
            api: "APIs and Microservices",
            frontend: "Front End Libraries",
            javascript: "JavaScript Algorithms and data Structures",
            csharp: "C# Intermediate: Classes, Interfaces and OOP",
            csharpCourse: "Cours Udemy par Mosh Hamedani"
          }, 
          experience: {
            title: "EXP??RIENCE PROFESSIONNELLE",
            relevant: [
              {
                title: "D??veloppeuse Web sous contrat",
                company: "Nsombou Abalghe-Dzal Association",
                location: "?? distance",
                dates: "2021-Pr??sent",
                link: "https://blogdown-poc.netlify.app/",
                logo: "NADA_logo.png"
              },
              {
                title: "Ing??nieure pour la localization",
                company: "Acolad Group",
                location: "Bruxelles, Belgium",
                dates: "2018-2021",
                link: "https://www.acolad.com/",
                logo: "acolad.png"
              },
              {
                title: "Apprentie ing??nieure pour la localisation",
                company: "Telelingua International",
                location: "Paris, France",
                dates: "2017-2018",
                link: "https://www.acolad.com/",
                logo: "telelingua_logo.png"
              },
              {
                title: "R??dactrice de r??gles s??mantiques (mi-temps)",
                company: "SmartKYC",
                location: "?? distance",
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
                title: "Chef de projet Web",
                location: "Strasbourg, France",
                company: "Chacun Son Court",
                dates: "2016-2017",
                link: "",
                logo: "chacunsoncourt_logo.jpg"
              },
              {
                title: "Enseignante d'anglais et de fran??ais",
                company: "Berlitz",
                location: "Cologne, Allemagne & Strasbourg, France",
                dates: "2014-2016",
                link: "https://www.acolad.com/",
                logo: "berlitz_logo.jpg"
              },
              {
                title: "Assistante de recherche en linguistique",
                company: "Universit?? de Colombie-Britannique",
                location: "Vancouver, Canada",
                dates: "2013-2014",
                link: "https://linguistics.ubc.ca/",
                logo: "ubc_logo.jpg"
              },
              {
                title: "Guide touristique multilingue",
                company: "Mus??e d'anthropologie de UBC",
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
            contactme: "Contactez-moi",
            name: "Nom...",
            email: "Email...",
            message: "Message...",
            send: "Envoyer",
            success: "Envoi r??ussi",
            error: "Erreur",
            successMessage: "Merci pour votre message ! Il a bien ??t?? envoy?? et je vous recontacterai d??s que possible.",
            errorMessage: "Zut, une erreur s'est produite. Veuillez v??rifier que vous avez bien saisi votre nom, votre message, et une adresse e-mail valide. Si vous ??prouvez toujours des probl??mes, veuillez me contacter sur ",
          },
          footer: {
            by: "par"
          },
          month: {
            jan: "Janvier",
            feb: "F??vrier",
            mar: "Mars",
            apr: "Avril",
            may: "Mai",
            jun: "Juin",
            jul: "Juillet",
            aug: "Ao??t",
            sep: "Septembre",
            oct: "Octorbre",
            nov: "Novembre",
            dec: "D??cembre"
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