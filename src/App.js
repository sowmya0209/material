import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import NavBar from './components/NavBar';

class App extends Component {
render() {
return (
<div className="App">
<NavBar/>
<Link to="/Display" style={{color:"black",textDecoration:"none"}}>Home</Link>
<br/>
<br/>

 <Link to="/Search" style={{color:"black",textDecoration:"none"}}>
Search
</Link> 
<br/>
</div>
);
}
}

export default App;
