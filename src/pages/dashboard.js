import React, { useState } from 'react';
import LeaguesPanel from '../components/basketballComponents/LeaguesPanel/LeaguesPanel';
import { Typography, Button } from '@material-ui/core';
const Dashboard = () => {
    const [language, setLanguage] = useState('eng');
    const changeLanguage = () => {
        if (language === 'eng') {
            setLanguage('srp')
        } else {
            setLanguage('eng')
        }
    }
    return (
        <div>
            <Typography variant="subtitle2" color="primary" style={{ margin: '80px auto 10px auto', textAlign: 'center' }}>
                {language === 'srp' ? "Change language => " : "Promenite Jezik => "}
                <Button style={{ backgroundColor: '#002884', color: '#fff' }} onClick={() => changeLanguage()}>
                    {language}
                </Button>
            </Typography>
            <Typography variant="h4" color="primary" align="center">
                {language === 'srp' ? "Choose league" : "Odaberite Ligu"}
            </Typography>
            <LeaguesPanel />
        </div >)
}

export default Dashboard;