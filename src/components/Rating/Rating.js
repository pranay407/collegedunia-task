import React from 'react'
import './Rating.css';

function Rating(props) {
    return (
        
            <div className="rating-block">
                <div className="number-rating">
                    <h2>{props.rating}<span style={{fontSize:'18px', fontWeight:'lighter'}} >/5</span></h2>
                </div>
                <h5>{props.text}</h5>
            </div>
        
    )
}

export default Rating
