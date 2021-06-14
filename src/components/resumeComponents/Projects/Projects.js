import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project';
const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      backgroundColor: 'rgba(235, 235, 235)',
      shadowColor: 'rgba(255, 255, 255)'
    },
    title: {
        margin: '10px auto 10px auto',
        alignItems: 'center',
        textAlign: 'center'
    }
}));
const Projects = () => {
    const classes = useStyles();
    const [projects, setprojects] = useState([
        {
            "name": "Basketball Stats",
            "development": "full-stack website",
            "website": "https://basketballstats.rs",
            "status": "in Progress",
            "github": "https://reactjs.org",
            "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
            "technologies": ["React JS", "Node JS", "Firebase","Visual Studio Code"]
        },
        {
            "name": "Detektivska Agencija",
            "development": "full-stack website",
            "website": "https://detektivskaagencija.rs",
            "status": "live from 2015",
            "github": "",
            "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
            "technologies": ["HTML", "Bootsrap", "Php","Google Optimisation", "CPanel"]
        },
        {
            "name": "Freecords",
            "development": "mobile",
            "website": "",
            "status": "Intership Aug-Dec 2020",
            "github": "https://github.com/vinczebalazs/freecords-exchange-react-native/pull/30",
            "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
            "technologies": ["React Native", "Expo", "Visual Studio Code"]
        },
        {
            "name": "Filip iOS Task",
            "development": "iOS development",
            "website": "",
            "status": "Finished Sep 2020",
            "github": "https://github.com/FilipBabic/Filip-Task",
            "description": "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
            "technologies": ["Swift", "XCode", "Firebase-Realtime Database"]
        },
        {
            "name": "Ez Dripper",
            "development": "iOS development",
            "website": "https://ezcloudcompany.com/products/ez-dripper",
            "status": "Uploaded to App Store at Sep 2016",
            "github": "https://gitlab.com/crossover-core/ez-dripper",
            "description": "iOS application for tracking e-juice in ez Dripper bottle",
            "technologies": ["Swift", "XCode", "iTunnesConnect"]
        }
]);
    let projectsMarkup =(
        <>
        {
            projects.map((project) => <Project project={project} key={project.name}/>)
        }
      </>)
    return(
        <Grid container className={classes.root} spacing={2}>                
            {
                projectsMarkup
            }          
        </Grid>
    )   
}

export default Projects;