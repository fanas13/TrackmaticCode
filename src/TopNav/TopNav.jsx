import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import Home from '@material-ui/icons/Home';
import Board from '@material-ui/icons/Dashboard';
import Alarm from '@material-ui/icons/Alarm';
import Add from '@material-ui/icons/Add';
import Info from '@material-ui/icons/Info';

import HeaderLogo from '../img/header-logo.png';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
}));

export default class TopNav extends React.Component {
    render() {
        return (
            <Paper className={useStyles.root}>
                <Grid container xs={12}>
                    <Grid container item xs={5}>
                        <div className="topNavContainer">
                            <Button className="homeButton"><Home className="navIcons" /></Button>
                            <Button className="homeButton"><Board className="navIcons" /><Typography className="navFont">Boards</Typography></Button>
                        </div>
                    </Grid>

                    <Grid Container xs={2} justify="center" direction="row" alignItems="center">
                        <div className="topNavContainer">
                            <img src={HeaderLogo} className="headerLogo" />
                        </div>
                    </Grid>

                    <Grid container item xs={5} justify="flex-end" >
                        <div className="topNavContainer">
                            <Button className="homeButton"><Add className="navIcons" /></Button>
                            <Button className="homeButton"><Info className="navIcons" /></Button>
                            <Button className="homeButton"><Alarm className="navIcons" /></Button>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

}
