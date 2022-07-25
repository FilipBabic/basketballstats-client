import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import PersonalSkill from './PersonalSkill/PersonallSkill';
import useStyles from './styles';
const PersonalSkills = () => {
    const classes = useStyles();
    const [personalSkills] = useState([
        {
            "name": "Analytical thinking "
        },
        {
            "name": "Attention to details"
        },
        {
            "name": "Dedicated"
        },
        {
            "name": "Teamwork Skills"
        },
        {
            "name": "Time management"
        },
        {
            "name": "Problem Solving"
        }
    ]);
    let personalSkillsMarkup = (
        <>
            {
                personalSkills.map((personalSkill) => <PersonalSkill personalSkill={personalSkill} key={personalSkill.name} />)
            }
        </>)
    return (
        <Grid container className={classes.root}>
            {
                personalSkillsMarkup
            }
        </Grid>
    )
}

export default PersonalSkills