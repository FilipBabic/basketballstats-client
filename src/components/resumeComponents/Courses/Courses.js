import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Course from './Course';
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
const Courses = () => {
    const classes = useStyles();
    const [courses, setCourses] = useState([
        {
            "name": "Swift programming course",
            "period": "June 2016 - Dec 2016",
            "source": "https://crossover.rs/",
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
    let coursesMarkup =(
        <>
        {
            courses.map((course) => <Course course={course} key={course.name}/>)
        }
      </>)
    return(
        <Grid container className={classes.root} spacing={2}>       
            {
                coursesMarkup
            }          
        </Grid>
    )   
}

export default Courses