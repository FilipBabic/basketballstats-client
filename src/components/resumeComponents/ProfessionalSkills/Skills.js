import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Skill from './Skill/Skill';
import reactjs from '../../../images/resumeImages/react_js.png';
import nodejs from '../../../images/resumeImages/node_js.png';
import firebase from '../../../images/resumeImages/firebase_.png';
import materialui from '../../../images/resumeImages/material-ui.png';
import bootstrap from '../../../images/resumeImages/bootstrap.png';
import php from '../../../images/resumeImages/php.png';
import mysql from '../../../images/resumeImages/mysql.png';
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
            "level": "3/5",
            "source": "https://reactjs.org",
            "image": reactjs,
        },
        {
            "name": "React Native",
            "technology": "mobile",
            "level": "1/5",
            "source": "https://reactnative.org",
            "image": reactjs,
        },
        {
            "name": "Node JS",
            "technology": "back-end",
            "level": "2/5",
            "source": "https://nodejs.org",
            "image": nodejs
        },
        {
            "name": "Firebase",
            "technology": "web and mobile",
            "level": "4/5",
            "source": "https://firebase.google.com",
            "image": firebase
        },
        {
            "name": "Material-UI",
            "technology": "UI-design",
            "level": "4/5",
            "source": "https://material-ui.com",
            "image": materialui
        },
        {
            "name": "Bootstrap",
            "technology": "UI-design",
            "level": "5/5",
            "source": "https://getbootstrap.com",
            "image": bootstrap
        },
        {
            "name": "VS Code",
            "technology": "dev environment",
            "level": "5/5",
            "source": "https://code.visualstudio.com",
            "image": visualcode,
        },
        {
            "name": "Git",
            "technology": "version control",
            "level": "4/5",
            "source": "https://git-scm.com/",
            "image": git
        },
        {
            "name": "HTML",
            "technology": "front-end",
            "level": "5/5",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "image": html
        },
        {
            "name": "Java Script",
            "technology": "full-stack",
            "level": "4/5",
            "source": "https://www.php.net",
            "image": javascript
        },
        {
            "name": "Php",
            "technology": "back-end",
            "level": "2/5",
            "source": "https://www.javascript.com",
            "image": php
        },
        {
            "name": "MySQL",
            "technology": "database",
            "level": "2/5",
            "source": "https://www.mysql.com",
            "image": mysql
        }
    ]);
    let skillsMarkup = (
        <>
            {
                skills.map((skill) => <Skill skill={skill} key={skill.name} />)
            }
        </>)
    return (
        <Grid container spacing={2} className={classes.root}>
            {
                skillsMarkup
            }
        </Grid>
    )
}

export default Skills