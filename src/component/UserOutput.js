import React from 'react';

const UserOutput = (props) =>{
    return(
        <div>
            <p onClick={props.changer}>{props.name}</p>
            <p>{props.name}</p>
        </div>
    )
}
export default UserOutput; 