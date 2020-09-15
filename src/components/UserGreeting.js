import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isUserLoggedIn: true  
        }
    }
    
    render() {

        //4th approach ---->Short Circuit Operator<----
        //Particularly in this case either its show something or nothing.
        return this.state.isUserLoggedIn && <div>Welcome Abhi</div>

        //3rd approach ---->Ternary Conditional Operator<----
        // return (
        //     this.state.isUserLoggedIn ? 
        //     (<div>Welcome Abhi</div>) :
        //     (<div>Welcome Guest</div>)
        // )

        //2nd approach ---->Element JS Variables<----
        // let message
        // if(this.state.isUserLoggedIn)
        // {
        //     message = <div>Welcome Abhi</div>
        // }
        // else
        // {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        //1st approach---->Using if else Condition<----
        // if(this.state.isUserLoggedIn)
        // {
        //     return <div>Welcome Abhi</div>
        // }
        // else
        // {
        //     return <div>Welcome Guest</div>
        // }


        // return (
        //     <div>
                
        //     </div>
        // )
    }
}

export default UserGreeting
