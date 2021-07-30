import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Skill from './Skill/Skill';
import reactjs from '../../../images/resumeImages/react_js.png';
import nodejs from '../../../images/resumeImages/node_js.png';
import firebase from '../../../images/resumeImages/firebase_.png';
import materialui from '../../../images/resumeImages/material-ui.png';
import bootstrap from '../../../images/resumeImages/bootstrap.png';
import swift from '../../../images/resumeImages/swift.png';
import xcode from '../../../images/resumeImages/xcode.png';
import visualcode from '../../../images/resumeImages/visualstudiocode.png';
import git from '../../../images/resumeImages/git.png';
import html from '../../../images/resumeImages/html.png';
import javascript from '../../../images/resumeImages/javascript.png';
import useStyles from './styles';
const Skills = () => {
    const classes = useStyles();
    const [skills] = useState([
        {
            "name": "React JS",
            "technology": "front-end",
            "level": "4/5",
            "source": "https://reactjs.org",
            "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
            "image": reactjs,
            "relatedProjects": ["Basketball Stats", "Filip Resume", "Privatni detektiv"]
        },
        {
            "name": "React Native",
            "technology": "mobile",
            "level": "3/5",
            "source": "https://reactnative.org",
            "description": "React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React's framework along with native platform capabilities",
            "image": reactjs,
            "relatedProjects": ["Freecords"]
        },
        {
            "name": "Node JS",
            "technology": "back-end",
            "level": "2/5",
            "source": "https://nodejs.org",
            "description": "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser",
            "image": nodejs,
            "relatedProjects": ["Basketball Stats"]
        },
        {
            "name": "Firebase",
            "technology": "full-stack",
            "level": "3/5",
            "source": "https://firebase.google.com",
            "description": "Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.",
            "image": firebase,
            "relatedProjects": ["Basketball Stats", "Filip iOS Task"]
        },
        {
            "name": "Material-UI",
            "technology": "UI-design",
            "level": "5/5",
            "source": "https://material-ui.com",
            "description": "Material Design is a design language developed by Google in 2014. Expanding on the 'cards' that debuted in Google Now, Material Design uses more grid-based layouts, responsive animations and transitions, padding, and depth effects such as lighting and shadows.",
            "image": materialui,
            "relatedProjects": ["Basketball Stats", "Privatni Detektiv"]
        },
        {
            "name": "Bootstrap",
            "technology": "UI-design",
            "level": "3/5",
            "source": "https://getbootstrap.com",
            "description": "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
            "image": bootstrap,
            "relatedProjects": ["Detektivska Agencija", "White House"]
        },
        {
            "name": "Swift",
            "technology": "iOS development",
            "level": "3/5",
            "source": "https://developer.apple.com/swift",
            "description": "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS",
            "image": swift,
            "relatedProjects": ["Filip Task", "Ez Dripper", "Be Done"]
        },
        {
            "name": "XCode",
            "technology": "Development environment",
            "level": "4/5",
            "source": "https://developer.apple.com/xcode",
            "description": "Xcode is Apple's integrated development environment for macOS, used to develop software for macOS, iOS, iPadOS, watchOS, and tvOS.",
            "image": xcode,
            "relatedProjects": ["Filip Task", "Ez Dripper", "Be Done"]
        },
        {
            "name": "Visual Studio Code",
            "technology": "Development environment",
            "level": "5/5",
            "source": "https://code.visualstudio.com",
            "description": "Visual Studio Code is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
            "image": visualcode,
            "relatedProjects": ["Basketball Stats", "Freecords", "Privatni Detektiv"]
        },
        {
            "name": "Git",
            "technology": "Source control",
            "level": "4/5",
            "source": "https://git-scm.com/",
            "description": "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
            "image": git,
            "relatedProjects": ["Filip Task", "Ez Dripper", "Basketball Stats", "Freecords"]
        },
        {
            "name": "HTML",
            "technology": "frontend",
            "level": "4/5",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "description": "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
            "image": html,
            "relatedProjects": ["Detektivska Agencija", "White House"]
        },
        {
            "name": "Java Script",
            "technology": "fullstack",
            "level": "3/5",
            "source": "https://www.javascript.com",
            "description": "JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate, manipulate and validate data.",
            "image": javascript,
            "relatedProjects": ["Detektivska Agencija", "White House", "Basketball Stats", "Privatni detektiv", "Freecords"]
        }
    ]);
    let skillsMarkup = (
        <>
            {
                skills.map((skill) => <Skill skill={skill} key={skill.name} />)
            }
        </>)
    return (
        <Grid container className={classes.root}>
            {
                skillsMarkup
            }
        </Grid>
    )
}

export default Skills