import React from 'react'

// function FRinput() {
//     return (
//         <div>
//             Ref
//         </div>
//     )
// }

const FRinput = React.forwardRef((props, ref)=>{
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
});

export default FRinput
