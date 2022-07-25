import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Project from './Project/Project';
import useStyles from './styles';
const Projects = () => {
    const classes = useStyles();
    const [projects] = useState([
        {
            "name": "Basketball Stats",
            "development": "Web application",
            "website": "https://basketballstats.rs",
            "status": "in Progress",
            "github": "https://github.com/FilipBabic/basketballstats-client",
            "description": "This is a platform for managing basketball leagues. It present informations about games, teams and players. Some of them are upcoming games, league table, team and player statistics. Admins have the ability to schedule matches, as well as, manage software for recording events in the game. When the match is over, its statistics are added to the database by clicking on the button. Application then calculates the statistics and display it on the website.",
            "technologies": ["Firebase", "Express", "React JS", "Node JS", "Material-UI"]
        },
        {
            "name": "Private Detective",
            "development": "Website",
            "website": "https://privatnidetektiv.rs",
            "status": "deployed at October 2021",
            "github": "https://github.com/FilipBabic/privatni-detektiv",
            "description": "This website representing private investigator from Belgrade, with all goals, services and prices.",
            "technologies": ["Bootstrap", "HTML 5", "Php"]
        },
        {
            "name": "Detektivska Agencija",
            "development": "Website",
            "website": "https://detektivskaagencija.rs",
            "status": "live from 2015",
            "github": "",
            "description": "Web presentation of detective agency.",
            "technologies": ["HTML", "Bootsrap", "Php", "Google Optimisation", "CPanel"]
        },
        {
            "name": "Freecords",
            "development": "Mobile application",
            "website": "",
            "status": "Intership Aug-Dec 2020",
            "github": "https://github.com/vinczebalazs/freecords-exchange-react-native/pull/30",
            "description": "React Native internship. Work in a team of 6 people, using Expo, figma prototype and github.",
            "technologies": ["React Native", "Expo", "Visual Studio Code"]
        },
        {
            "name": "Filip iOS Task",
            "development": "iOS application",
            "website": "",
            "status": "Finished at Sep 2020",
            "github": "https://github.com/FilipBabic/Filip-Task",
            "description": "A small iOS application made for the purpose of job interviews. It read tasks from and add notes to the Google Realtime Database. The design of the application is made from a figma prototype. To create a user interface I used a combination of a storyboard and dynamic approach.",
            "technologies": ["Swift", "XCode", "Firebase-Realtime Database"]
        },
        {
            "name": "Ez Dripper",
            "development": "iOS application",
            "website": "https://ezcloudcompany.com/products/ez-dripper",
            "status": "Uploaded to the App Store at Sep 2016",
            "github": "https://gitlab.com/crossover-core/ez-dripper",
            "description": "iOS application for tracking e-juice in ez Dripper bottle",
            "technologies": ["Swift", "XCode", "iTunnesConnect"]
        },
        {
            "name": "Ez Dripper",
            "development": "iOS application",
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