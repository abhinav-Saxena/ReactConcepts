import React, { Component } from 'react'

class ToDoList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items: []
        }
        this.inputRef =  React.createRef();
    }

    addItem = (event) => {
        if(this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState)=>{
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value= '';
        }
        console.log(this.state.items);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter Task" ref={(a) => this._inputElement = a}></input>
                    <button type="submit" >Add</button>
                </form>
        <div>{this.state.items}</div>
            </div>
        )
    }
}

export default ToDoList
