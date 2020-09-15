import React, { Component } from 'react'
import CheckResult from './CheckResult';

class CheckBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             chk1: 'check1',
             chk2: 'check2',
             chk3: 'check3',
             isChecked: [],
        }
    }

    checkTick = (event) => {
        console.log(event.target.checked, "==>");
            if(event.target.checked){
                this.setState({
                    isChecked: this.state.isChecked.concat(event.target.value)
                }
                )
            }
    }
    
    render() {
        return (
            <div>
                <div>
                <input type="checkbox" onChange={this.checkTick} value={this.state.chk1}/>
                <label>Checkbox 1  </label> 
                <CheckResult name={this.state.chk1} isChek={this.state.isChecked}/>
                </div>

                <div>
                <input type="checkbox" onChange={this.checkTick} value={this.state.chk2}/>
                <label>Checkbox 2  </label>
                <CheckResult name={this.state.chk2} isChek={this.state.isChecked}/>
                </div>

                <div>
                <input type="checkbox" onChange={this.checkTick} value={this.state.chk3}/>
                <label>Checkbox 3  </label>
                <CheckResult name={this.state.chk3} isChek={this.state.isChecked}/>
                </div>
                
            </div>
        )
    }
}

export default CheckBox
