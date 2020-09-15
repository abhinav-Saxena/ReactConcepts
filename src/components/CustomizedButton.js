import React, { Component } from 'react'
import {Button} from 'devextreme-react/button';
import './mySass.scss';

class CustomizedButton extends Component {
    render() {
        return <Button {...this.props} className="devex-button"/>
    }
}

export default CustomizedButton

