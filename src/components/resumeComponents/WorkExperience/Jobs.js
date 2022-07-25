import React, { useState } from 'react'
import { Grid } from '@material-ui/core';
import Job from './Job/Job';
import useStyles from './styles';
const Jobs = () => {
    const classes = useStyles();
    const [jobs] = useState([
        {
            "company": "Anonymous",
            "period": "August 2015 - Present",
            "position": "Web developer",
            "description": "Developing websites (HTML5, Bootsrap, Javascript, PHP, MySQL), Search engine optimization",
            "companyDescription": "Detective agency"
        },
        {
            "company": "Apptertainment",
            "period": "December 2018 - June 2021",
            "position": "Web developer",
            "description": "Developing web applications (HTML5, Bootstrap, Javascript, Php, React JS, Redux)",
            "companyDescription": "Software developing company"
        },
        {
            "company": "Digital Share",
            "period": "November 2016 - December 2017",
            "position": "iOS developer",
            "description": "Developing iOS applications (Swift)",
            "companyDescription": "Software publishing company"
        },


    ]);
    let jobsMarkup = (
        <>
            {
                jobs.map((job) => <Job job={job} key={job.company} />)
            }
        </>)
    return (
        <Grid container
            spacing={2}
            direction="row"
            justify="center"
            className={classes.root}>
            {
                jobsMarkup
            }
        </Grid>
    )
}

export default Jobs