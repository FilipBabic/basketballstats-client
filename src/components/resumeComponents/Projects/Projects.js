import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Project from './Project/Project';
import useStyles from './styles';
const Projects = () => {
    const classes = useStyles();
    const [projects] = useState([
        {
            "name": "Basketball Stats client",
            "development": "front-end",
            "website": "https://basketballstats.rs",
            "status": "in Progress",
            "github": "https://github.com/FilipBabic/basketballstats-client",
            "description": "Client side of web application for gathering statistical data in a basketball game.",
            "technologies": ["React JS", "JavaScript", "Visual Studio Code", "Firebase"]
        },
        {
            "name": "Basketball Stats functions",
            "development": "back-end",
            "website": "https://basketballstats.rs",
            "status": "in Progress",
            "github": "https://github.com/FilipBabic/basketballstats-server",
            "description": "Backend API, used for user authentication, creating, updating and deleting leagues, games, teams and players.",
            "technologies": ["Node JS", "Firebase", "Visual Studio Code"]
        },
        {
            "name": "Detektivska Agencija",
            "development": "full-stack website",
            "website": "https://detektivskaagencija.rs",
            "status": "live from 2015",
            "github": "",
            "description": "Web presentation of detective agency.",
            "technologies": ["HTML", "Bootsrap", "Php", "Google Optimisation", "CPanel"]
        },
        {
            "name": "Freecords",
            "development": "mobile",
            "website": "",
            "status": "Intership Aug-Dec 2020",
            "github": "https://github.com/vinczebalazs/freecords-exchange-react-native/pull/30",
            "description": "React Native internship. Work in a team of 6 people, using Expo, figma prototype and github.",
            "technologies": ["React Native", "Expo", "Visual Studio Code"]
        },
        {
            "name": "Filip iOS Task",
            "development": "iOS development",
            "website": "",
            "status": "Finished Sep 2020",
            "github": "https://github.com/FilipBabic/Filip-Task",
            "description": "A small iOS application made for the purpose of job interviews. It read tasks from and add notes to the Google Realtime Database. The design of the application is made from a figma prototype. To create a user interface I used a combination of a storyboard and dynamic approach.",
            "technologies": ["Swift", "XCode", "Firebase-Realtime Database"]
        },
        {
            "name": "Ez Dripper",
            "development": "iOS development",
            "website": "https://ezcloudcompany.com/products/ez-dripper",
            "status": "Uploaded to the App Store at Sep 2016",
            "github": "https://gitlab.com/crossover-core/ez-dripper",
            "description": "iOS application for tracking e-juice in ez Dripper bottle",
            "technologies": ["Swift", "XCode", "iTunnesConnect"]
        }
    ]);
    let projectsMarkup = (
        <>
            {
                projects.map((project) => <Project project={project} key={project.name} />)
            }
        </>)
    return (
        <Grid container className={classes.root}>
            {
                projectsMarkup
            }
        </Grid>
    )
}

export default Projects;