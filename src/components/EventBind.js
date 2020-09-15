import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // this.changeContent = this.changeContent.bind(this);
    }

    // changeContent() {
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }

    changeContent = () => {
        this.setState({
            message: 'Good Bye!'
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.changeContent().bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.changeContent()}>Click</button> */}
                <button onClick={this.changeContent}>Click</button>
            </div>
        )
    }
}

export default EventBind
