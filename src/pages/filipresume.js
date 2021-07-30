import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    ThemeProvider,
    Divider
} from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import ContactInfo from '../components/resumeComponents/ContactInfo/ContactInfo';
import Skills from '../components/resumeComponents/ProfessionalSkills/Skills';
import Projects from '../components/resumeComponents/Projects/Projects';
import Education from '../components/resumeComponents/Education/Education';
import Courses from '../components/resumeComponents/Courses/Courses';
import Jobs from '../components/resumeComponents/WorkExperience/Jobs';
import PersonalSkills from '../components/resumeComponents/PersonalSkills/PersonalSkills';
import Other from '../components/resumeComponents/Other/Other';

let theme = createMuiTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920,
            },
        },
        palette: {
            primary: {
                light: '#757ce8',
                main: '#002884',
                dark: '#002884',
                contrastText: '#fff',
            }
        },
    }
);
theme = responsiveFontSizes(theme);
const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginTop: '67px',
        textAlign: 'center',
        backgroundColor: 'rgba(235, 235, 235)',

    },
    header: {
        padding: '20px',
        backgroundColor: 'white'
    },
    title: {
        paddingLeft: '20px',
        marginTop: '30px',
        textAlign: 'left',
        marginBottom: '30px'
    }
}));

const FilipResume = () => {
    const classes = useStyles();
    const history = useHistory();
    const skillref = useRef(null);
    const projectref = useRef(null);
    const educationref = useRef(null);
    const coursesref = useRef(null);
    const workref = useRef(null);
    const personalskillref = useRef(null);
    const otherref = useRef(null);

    const handleScroll = (event) => {
        const skillPos = skillref ? skillref.current.getBoundingClientRect().top : 0;
        const projectsPos = projectref ? projectref.current.getBoundingClientRect().top : 0;
        const educationPos = educationref ? educationref.current.getBoundingClientRect().top : 0;
        const coursesPos = coursesref ? coursesref.current.getBoundingClientRect().top : 0;
        const workPos = workref ? workref.current.getBoundingClientRect().top : 0;
        const personalskillPos = personalskillref ? personalskillref.current.getBoundingClientRect().top : 0;
        const otherPos = otherref ? otherref.current.getBoundingClientRect().top : 0;
        if (skillPos <= 70 && projectsPos > 70) {
            history.push('/skills')
        } else if (projectsPos <= 70 && educationPos > 70) {
            history.push('/projects')
        } else if (educationPos <= 70 && coursesPos > 70) {
            history.push('/education')
        } else if (coursesPos <= 70 && workPos > 70) {
            history.push('/courses')
        } else if (workPos <= 70 && personalskillPos > 70) {
            history.push('/workexperience')
        } else if (personalskillPos <= 70 && otherPos > 70) {
            history.push('/personalskills')
        } else if (otherPos <= 70) {
            history.push('/other')
        } else {
            history.push('/filipresume')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Grid container className={classes.root}>
                <Grid item>
                    <Typography variant="h3" className={classes.header} color="textSecondary">
                        Filip Babić | Software Developer
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
                    <Typography ref={educationref} variant="h4" color="primary" className={classes.title}>
                        Education
                    </Typography>
                    <Education />
                    <Typography ref={coursesref} variant="h4" color="primary" className={classes.title}>
                        Courses
                    </Typography>
                    <Courses />
                    <Typography ref={workref} variant="h4" color="primary" className={classes.title}>
                        Work Experience
                    </Typography>
                    <Jobs />
                    <Typography ref={personalskillref} variant="h4" color="primary" className={classes.title}>
                        Personal Skills
                    </Typography>
                    <PersonalSkills />
                    <Typography ref={otherref} variant="h4" color="primary" className={classes.title}>
                        Other
                    </Typography>
                    <Other />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default FilipResume;