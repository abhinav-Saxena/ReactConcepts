import React, { Component } from 'react'
import DataGrid from 'devextreme-react/data-grid';
import { customers } from './data.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class SimpleArray extends Component {
    render() {
        return (
            <div>
                <DataGrid
        dataSource={customers}
        defaultColumns={columns}
        showBorders={true}
      />
            </div>
        )
    }
}

export default SimpleArray
