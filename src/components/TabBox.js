import React, { Component,Fragment  } from 'react'
import TagBox from 'devextreme-react/tag-box';
import ArrayStore from 'devextreme/data/array_store';

import { simpleProducts, products } from './data.js';
import './myStyles.css';
import CustomizedButton from './CustomizedButton';

class TabBox extends Component {

    clickHandler = () => {
        console.log('buttonEvent Called')
    }
    render() {
        return (
            // <React.Fragment>
            //     <div className="dx-fieldset">
            //         <div className="dx-field">
            //             <div className="dx-field-label">Default mode</div>
            //             <div className="dx-field-value">
            //                 <TagBox items={simpleProducts}/>
            //             </div>    
            //         </div>
            //     </div>
            // </React.Fragment>
            <div>
                <CustomizedButton type="danger"
                text="Delete" onClick={this.clickHandler}/>
            </div>
        )
    }
}

export default TabBox
