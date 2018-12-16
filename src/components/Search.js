import React, { Component } from 'react';
import data from "../data.json";
import search from '../search.svg';
import { TableCell, TableRow, Table, Paper, TextField, Button } from '@material-ui/core';

export default class Search extends Component {
    constructor(){
        super();
        this.state={name:data};
    }
    render() {
     
        let first=data.filter((item)=>{return item.first.toLowerCase().match( this.state.name ) || item.last.toLowerCase().match( this.state.name )
            ||item.first.match( this.state.name ) || item.last.match( this.state.name ) })

    let name=first.map((item)=>(<TableRow><TableCell>{item.id}</TableCell><TableCell>{item.first}</TableCell> <TableCell>{item.last}</TableCell> </TableRow>))

      return (
          <Paper>
              <TextField id="outlined-search" label="Search field" type="search" variant="outlined" onChange={e => this.setState({ name: e.target.value })}/>
              <Button variant="contained" margin="normal">
                <img src={search} alt="logo" height="40px" width="30px"/>
            </Button> 
        <Table>
           
                {name} 
           
        </Table>
        </Paper>

      );
    }
}
