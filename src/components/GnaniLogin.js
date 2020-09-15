import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class GnaniLogin extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             password: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();
        if(this.state.username=='a' && this.state.password=='b'){
            alert("Successfully LoggedIn...");
        }
    }

    changeHandlerUsername =event=>{
        console.log(event.target.value);
        this.setState({
           username: event.target.value
        })
    }

    changeHandlerPassword =event=>{
        console.log(event.target.value);
        this.setState({
           password: event.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="username" value={this.state.username} onChange={this.changeHandlerUsername}></input>
                    <br/>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.changeHandlerPassword}></input>
                    <br/>
                    <input type="submit"></input>
                </form>

                <Link to='/signup'>SignUp</Link>
            </div>
        )
    }
}

export default GnaniLogin
