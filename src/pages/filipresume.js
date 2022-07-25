import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    ThemeProvider
} from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import ContactInfo from '../components/resumeComponents/ContactInfo/ContactInfo';
import Skills from '../components/resumeComponents/ProfessionalSkills/Skills';
// import Projects from '../components/resumeComponents/Projects/Projects';
import Education from '../components/resumeComponents/Education/Education';
import Courses from '../components/resumeComponents/Courses/Courses';
import Jobs from '../components/resumeComponents/WorkExperience/Jobs';
import PersonalSkills from '../components/resumeComponents/PersonalSkills/PersonalSkills';
// import Other from '../components/resumeComponents/Other/Other';

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
        marginTop: '64px',
        paddingTop: '10px',
        paddingLeft: '12px',
        paddingRight: '12px',
        textAlign: 'center',
        backgroundColor: 'rgba(235, 235, 235)',
    },
    title: {
        marginTop: '10px',
        textAlign: 'center',
        marginBottom: '10px'
    },
    careerObjective: {
        margin: '10px',
    }
}));

const FilipResume = () => {
    const classes = useStyles();
    const history = useHistory();
    const skillref = useRef(null);
    // const projectref = useRef(null);
    const educationref = useRef(null);
    const coursesref = useRef(null);
    const workref = useRef(null);
    const personalskillref = useRef(null);
    // const otherref = useRef(null);

    const handleScroll = (event) => {
        const skillPos = skillref ? skillref.current.getBoundingClientRect().top : 0;
        // const projectsPos = projectref ? projectref.current.getBoundingClientRect().top : 0;
        const educationPos = educationref ? educationref.current.getBoundingClientRect().top : 0;
        const coursesPos = coursesref ? coursesref.current.getBoundingClientRect().top : 0;
        const workPos = workref ? workref.current.getBoundingClientRect().top : 0;
        const personalskillPos = personalskillref ? personalskillref.current.getBoundingClientRect().top : 0;
        // const otherPos = otherref ? otherref.current.getBoundingClientRect().top : 0;
        if (educationPos <= 70 && workPos > 70) {
            history.push('/education')
        } else if (workPos <= 70 && skillPos > 70) {
            history.push('/workexperience')
        } else if (skillPos <= 70 && coursesPos > 70) {
            history.push('/skills')
        } else if (coursesPos <= 70 && personalskillPos > 70) {
            history.push('/courses')
        } else if (personalskillPos <= 70) {
            history.push('/personalskills')
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
                    <ContactInfo />
                    <Typography variant="h5" color="primary" className={classes.title}>
                        CAREER OBJECTIVE
                    </Typography>
                    <Typography variant="body1" align="justify" color="textPrimary" className={classes.careerObjective}>
                        Seeking for the position of web developer. I am interested in any way of cooperation, full-time contract, part-time or project-based.
                        My abilities are developing and deploying full-stack web applications from scratch using <b>Firebase</b> platform and <b>React JS</b> library,
                        as well as, web sites using <b>HTML, JavaScript, Php</b> and <b>MySQL</b>.
                    </Typography>
                    <Typography ref={educationref} variant="h5" color="primary" className={classes.title}>
                        EDUCATION
                    </Typography>
                    <Education />
                    <Typography ref={workref} variant="h5" color="primary" className={classes.title}>
                        WORK EXPERIENCE
                    </Typography>
                    <Jobs />
                    <Typography ref={skillref} variant="h5" color="primary" className={classes.title}>
                        PROFESSIONAL SKILLS
                    </Typography>
                    <Skills />
                    {/* <Typography ref={projectref} variant="h4" color="primary" className={classes.title}>
                        Projects
                    </Typography>
                    <Projects /> */}
                    <Typography ref={coursesref} variant="h5" color="primary" className={classes.title}>
                        COURSES
                    </Typography>
                    <Courses />
                    <Typography ref={personalskillref} variant="h5" color="primary" className={classes.title}>
                        PERSONAL SKILLS
                    </Typography>
                    <PersonalSkills />
                    {/* <Typography ref={otherref} variant="h4" color="primary" className={classes.title}>
                        Other
                    </Typography>
                    <Other /> */}
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default FilipResume;