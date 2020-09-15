import React, { Component } from 'react'

class ClassClick extends Component {

    clickhHandler() {
        console.log("Clicked me");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
