import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Abhi'
        }
    }

    componentDidMount(){
        // setInterval(()=>{
        //     this.setState({
        //         name: 'Abhi'
        //     })
        // }, 2000)
    }
    
    render() {
        console.log('Parent Render Comp');
        return (
            <div>
                <div>Parent Component</div>
                <MemoComp name={this.state.name}/>
                {/* <RegComp />
                <PureComp /> */}
            </div>
        )
    }
}

export default ParComp
