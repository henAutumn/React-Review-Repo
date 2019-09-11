import React from 'react';

const UserInput =(props)=>{
    return(
    <div>
        <input type="text" onChange={props.changeIt} defaultValue={props.name} value={props.name}/>
    </div>
    )
}
export default UserInput; 