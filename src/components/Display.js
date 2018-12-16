import React, { Component } from 'react';
import data from '../data.json'

/* import { Link } from "react-router-dom";
import search from '../search.svg'; */
import { TableBody, Table, Paper, TableRow, TableHead, TableCell } from '@material-ui/core';

export default class Display extends Component {

    render() {
    return ( 
    <Paper style={{ marginTop: "normal", overflowX: "auto", width: "100%" }}>
    <Table style={{ minWidth: 700 }}>
        <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Namw</TableCell>
            </TableRow>
        </TableHead>
{
data.map((name)=>{
return <TableBody><TableRow><TableCell>{name.id}</TableCell> <TableCell>{name.first}</TableCell><TableCell>{name.last}</TableCell></TableRow></TableBody>;
})
}
</Table>
</Paper>
);
}
}

