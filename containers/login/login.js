import React, {Component} from 'react';
import {Router, Route, Link, RouteHandler} from 'react-router';
import './style.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:'',
            friend_email:'',
            data:null
        }
    }

    login() {
        fetch('http://127.0.0.1:5000/signin', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                friend_email: this.state.friend_email
            })}).then(response => response.json())
            .then(json =>{
               console.log(json);
               this.setState({ data: json.data })
            });
    }

    render() {
        return (
            <div className="form">
                <h2> Sign In</h2>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="email" onChange={event => this.setState({email : event.target.value})}/>
                    <input className="form-control" type="password" placeholder="password" onChange={event => this.setState({password: event.target.value})}/>
                    <input className="form-control" type="text" placeholder="friend's email" onChange={event => this.setState({friend_email: event.target.value})}/>
                    <button className="btn btn-primary" type="button" onClick={() => { this.login(); location.href="/#/youtube";}}>Sign In</button>
                    <button className="btn btn-primary" type="button" onClick={() => location.href="/#/signup"}>Sign Up</button>
                </div>
            </div>
            // <YouTubePlayer data={this.state.data} />
        )
    }
}

export default Login;