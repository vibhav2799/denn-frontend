import React, {Component} from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    signup() {
        fetch('https://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then
    }

    render() {
        return (
            <div className="form">
                <h2> Sign Up</h2>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="email" onChange={event => this.setState({email : event.target.value})}/>
                    <input className="form-control" type="password" placeholder="password" onChange={event => this.setState({password: event.target.value})}/>
                    <button className="btn btn-primary" type="button" onClick={()=>this.signup()}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default SignUp;