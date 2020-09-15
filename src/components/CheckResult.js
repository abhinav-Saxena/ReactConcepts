import React from 'react'

function CheckResult(props) {
    const {name, isChek} = props;
var items = isChek.map((item, index)=> ( <h6 key={index}>{item}</h6>))
    return (
        <div>
            {
                items
            }
        </div>
    )
}

export default CheckResult
