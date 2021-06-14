import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Skill from './Skill';
import reactjs from '../../../images/resumeImages/react_js.png';
import nodejs from '../../../images/resumeImages/node_js.png';
import firebase from '../../../images/resumeImages/firebase_.png';
const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      backgroundColor: 'rgba(235, 235, 235)',
      shadowColor: 'rgba(255, 255, 255)'
    }
}));
const Skills = () => {
    const classes = useStyles();
    const [skills, setSkills] = useState([
        {
            "name": "React JS",
            "technology": "front-end",
            "level": "4/5",
            "source": "https://reactjs.org",
            "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
            "image": reactjs,
            "relatedProjects": ["Basketball Stats","Filip Resume","Private Detective"]
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
            "source": "https://reactjs.org",
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
            "relatedProjects": ["Basketball Stats","Filip iOS Task"]
        }
]);
    let skillsMarkup =(
        <>
        {
            skills.map((skill) => <Skill skill={skill} key={skill.name}/>)
        }
      </>)
    return(
        <Grid container className={classes.root} spacing={2}>       
            {
                skillsMarkup
            }          
        </Grid>
    )   
}

export default Skills