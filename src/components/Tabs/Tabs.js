import React from 'react'
import './Tabs.css'

function Tabs(props) {
    return (
        <div>
            <div className="award">{props.award}</div>
            <div className="distance">{props.distance}</div>
        </div>
    )
}

export default Tabs
