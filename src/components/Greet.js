import React from 'react';

// function Greet() {
//     return <h1>Hello Abhinav</h1>
// }

const Greet = ({name, heroName}) => {
return (
    <div>
        {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
        <h1>Hello {name} a.k.a {heroName}</h1>
        {/* {props.children} */}
    </div>
)
}
export default Greet;