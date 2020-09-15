import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '', 
             topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    addItem(e){
        if(this._inputElement.value !== "") {
            
        }
    }

    submitChange = event => {
        event.preventDefault();
        if(this.state.username === '') {
            alert('Please enter Username.');
        }

        else if(this.state.comment === '') {
            alert('Please fill the comment.')
        }

        else if(this.state.topic === '') {
            alert('Please select a value');
        }

        else {
            console.log('Finally Finished!!!')
        }
    }
    
    render() {
        return (
            <form onSubmit={this.submitChange}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                </div>
                
                <div>
                    <label>Comments:</label>
                    <textarea type='text' value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>

                <div>
                    <label>topic:</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option defaultValue> -- select an option -- </option>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
