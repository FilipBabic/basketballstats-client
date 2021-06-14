import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Grid,
        Typography,
        ThemeProvider,
        Divider
    } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import noPhoto from '../images/no_photo.jpg';
import Navbar from '../components/Navbar';
import ContactInfo from '../components/resumeComponents/ContactInfo/ContactInfo';
import Skills from '../components/resumeComponents/ProfessionalSkills/Skills';
import Projects from '../components/resumeComponents/Projects/Projects';
import Education from '../components/resumeComponents/Education/Education';
import Courses from '../components/resumeComponents/Courses/Courses';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      marginTop: '67px',
      textAlign: 'center',
      backgroundColor: 'rgba(235, 235, 235)',
      shadowColor: 'rgba(255, 255, 255)'
    },
    header: {
        padding: '20px'
    },
    title: {
        paddingLeft: '20px',
        paddingTop: '20px',
        textAlign: 'left'
    }
}));

const FilipCV = () => {
    const classes = useStyles();
    const [x,setX] = useState();
    const history = useHistory();
    const skillref = useRef(null);
    const projectref = useRef(null);
    var skillPos,projectPos;
    useEffect(() =>{
        const handleScroll = (event) => {
            // let scrollTop = window.offset().top;
            if (window.pageYOffset < 500) {
                history.push('/filipresume')
            } else if (window.pageYOffset>500 && window.pageYOffset<1600){
                history.push('/skills')
            } else if (window.pageYOffset > 1600){
                history.push('/projects')
            }
        }
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
          }
    });
    // useLayoutEffect(() => {
    //     function updatePosition() {
    //     skillPos = skillref.current.getBoundingClientRect().top;
    //     projectPos = projectref.current.getBoundingClientRect().top;
    //     console.log(skillPos)
    //     console.log(projectPos)
    //     }
    //     window.addEventListener('resize', updatePosition);
    //     updatePosition();
    //     return () => window.removeEventListener('resize', updatePosition);
    //   }, []);
    return (
        <ThemeProvider theme={theme}>
        <Grid container className={classes.root}>
            <Grid item>
                <Typography variant="h3" className={classes.header} color="textSecondary">
                    Filip Babić | Software Developer {x}
                </Typography>
                <Divider />
                <Typography variant="h4" color="primary" className={classes.title}>
                Contact Info
                </Typography>
                <ContactInfo />
                <Typography ref={skillref} variant="h4" color="primary" className={classes.title}>
                Professional Skills
                </Typography>
                <Skills />
                <Typography ref={projectref} variant="h4" color="primary" className={classes.title}>
                Projects
                </Typography>
                <Projects />
                <Typography  variant="h4" color="primary" className={classes.title}>
                Education
                </Typography>
                <Education />
                <Typography variant="h4" color="primary" className={classes.title}>
                Courses
                </Typography>
                <Courses />
            </Grid>
        </Grid>
        </ThemeProvider>
        )
    }

export default FilipCV;