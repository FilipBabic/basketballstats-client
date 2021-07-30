import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Job from './Job/Job';
import useStyles from './styles';
const Jobs = () => {
    const classes = useStyles();
    const [jobs] = useState([
        {
            "company": "Digital Share",
            "period": "November 2016 - December 2017",
            "position": "iOS developer",
            "description": ""
        },
        {
            "company": "Detektive Agency",
            "period": "August 2015 - Present",
            "position": "Web developer",
            "description": ""
        }
    ]);
    let jobsMarkup = (
        <>
            {
                jobs.map((job) => <Job job={job} key={job.company} />)
            }
        </>)
    return (
        <Grid container className={classes.root}>
            {
                jobsMarkup
            }
        </Grid>
    )
}

export default Jobs