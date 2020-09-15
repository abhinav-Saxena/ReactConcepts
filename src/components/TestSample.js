import React, { Component } from 'react'

class TestSample extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this._inputElement = React.createRef();
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type='text' placeholder='firstname' ref={this._inputElement} />
                    <button onClick={this.clickHandler}></button>
                </form>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export default TestSample
