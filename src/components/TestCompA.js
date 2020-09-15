import React from 'react'
import {useState} from 'react'
import TestCompB from './TestCompB'

function TestCompA() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <TestCompB count = {count}/>
    <button onClick={()=>setCount(count+1)}>Click me {count}</button>
        </div>
    )
}

export default TestCompA
