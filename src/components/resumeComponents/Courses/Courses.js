import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Course from './Course/Course';
import useStyles from './styles';
const Courses = () => {
    const classes = useStyles();
    const [courses] = useState([
        {
            "name": "React Native internship",
            "period": "Aug 2020 - Dec 2020",
            "source": "https://freecords.com/",
            "description": "Freecords - streaming platform focused on music discovery and the showcasing of new and emerging artists."
        },
        {
            "name": "Swift programming course",
            "period": "June 2016 - Dec 2016",
            "source": "https://crossover.rs/apple-training-and-certification/app-development-training/razvoj-aplikacija-u-swift-programskom-jeziku-b2/",
            "description": "Crossover - Apple authorised training centre"
        },
        {
            "name": "Searching Engine Optimisation course",
            "period": "June 2015 - July 2015",
            "source": "http://www.obukeikursevi.com/nauci-da-optimizujes-web-sajt-seo-kurs/",
            "description": "Obuke i kursevi, Belgrade"
        },
        {
            "name": "Core PHP programming course",
            "period": "Dec 2014",
            "source": "https://www.link-elearning.com/kurs-Core-PHP-Programming_341_4",
            "description": "LINK group"
        },
        {
            "name": "Advanced PHP programming course",
            "period": "Nov 2014",
            "source": "https://www.link-elearning.com/kurs-Advanced-PHP-programming---Building-Web-Applications_374_4",
            "description": "LINK group"
        }
    ]);
    let coursesMarkup = (
        <>
            {
                courses.map((course) => <Course course={course} key={course.name} />)
            }
        </>)
    return (
        <Grid container className={classes.root}>
            {
                coursesMarkup
            }
        </Grid>
    )
}

export default Courses