import React, { Component } from 'react'

class BGDemo extends Component {
    userData;

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             age: '',
             gender: 'male',
             obj: {}
        }
    }

    submitChange = (event) => {
        //event.preventDefault();
    }

    handleUserName = event => {
        this.setState({
            name: event.target.value,
        })
    }

    handleAge = event => {
        this.setState({
            age: event.target.value
        })
    }

    handleGender = event => {
        this.setState({
            gender: event.target.value
        })
    }

    // componentDidMount(){
    //     this.userData = JSON.parse(localStorage.getItem('user'));
    //     if(localStorage.getItem('user')) {
    //         this.setState({
    //             name: this.userData.name,
    //             age: this.userData.age,
    //             gender: this.userData.gender
    //         })
    //     }
    // }

    // componentWillMount = (nextProps, nextstate) =>{
    //     localStorage.setItem('user',  JSON.stringify(nextstate))
    // }
    
    render() {
        return (
            <form onSubmit={this.submitChange}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.handleUserName} defaultValue={this.state.obj.name}/>
                </div>

                <div>
                    <label>Age:</label>
                    <input type="text" value={this.state.age} onChange={this.handleAge}/>
                </div>

                <div>
                    <label>Gender:</label>
                    <select value={this.state.gender} onChange={this.handleGender}>
                        <option>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default BGDemo
