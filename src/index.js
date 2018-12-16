import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Route } from "react-router-dom";
import App from './App';
import Search from './components/Search';
import * as serviceWorker from './serviceWorker';
import Display from './components/Display';

ReactDOM.render(<Router>
    <div>
        <Route path="/" component={App}/>
        <Route path="/Search" component={Search}/>
        <Route path="/Display" component={Display}/>
    </div>
</Router>, document.getElementById('root'));

serviceWorker.unregister();
