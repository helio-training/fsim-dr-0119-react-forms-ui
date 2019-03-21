import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './config/Nav'
import Pages from './pages'
import './index.css'

const App = () => (
    <Router>
        Welcome!
        <Nav/>
        <Pages/>
    </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));

