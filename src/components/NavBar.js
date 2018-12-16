import React, { Component } from 'react';
import logo from '../logo.svg';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class NavBar extends Component {
render() {
return (
<AppBar position="static">
<Toolbar>
<img src={logo} alt="logo" height="50px" width="50px"/>
&nbsp; &nbsp;
<Typography variant="title" color="inherit">
Title
</Typography>
</Toolbar> 
</AppBar>
);
}
}
