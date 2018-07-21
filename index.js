import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';
import Login from './containers/login/login.js'
import SignUp from './containers/signup/signup.js'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<Login />, document.getElementById('app'))

render(
    <Router>
        <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
        </div>
    </Router>,
    document.getElementById('app')
)