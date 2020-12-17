import React from 'react'
import './Ribbon.css';

function Ribbon(props) {
    let ribbon;
    if(props.ribbon === true)
         ribbon = 'Promoted';
    return (
        <div className="ribbon">
            <p>{ribbon}</p>
        </div>
    )
}

export default Ribbon
