import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)

        const token = localStorage.getItem('token');
        let loggedIn = true;
        if(token==null) {
            loggedIn = false;
        }
    
        this.state = {
             username: '', 
             password: '',
             loggedIn
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        if(username=='a' && password=='b') {
            localStorage.setItem("token", 'hellothistokenisvalid');
            this.setState({
                loggedIn: true
            })
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        if(this.state.loggedIn){
            return <Redirect to='/admin'/>
        }
        return (
            <div>
                <h4>Welcome to Login Page</h4>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onChange}/>
                    <br/>
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                    <br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default Login
