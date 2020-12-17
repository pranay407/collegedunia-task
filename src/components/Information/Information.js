import React from 'react'
import './Information.css';

function Information(props) {
    return (
        <div className="info">
            <div className="leftside-info">
                <h4 className="collegeName">{props.name}</h4>
                <p className="place-distance">{props.place} <span>| {props.distance}</span></p>
                <h5 className="place"><span style={{color:'#4eb3d9'}}>93% Match:</span> {props.famous_place}</h5>
                <div className="offertag">
                    <h5>{props.offer}</h5>
                </div>
            </div>
            <div className="rightside-info">
                <div className="price">
                    <div className="og-price">₹{props.og_fees}</div>
                    <div className="discount">{props.discount}</div>
                    
                </div>
                <p className="disprice" >₹ {props.dis_fees}</p>
                <p className="fee_cycle">{props.fee_cycle}</p>
                <p className="amenities">{props.amenities[0]} + {props.amenities[1]}</p>
            </div>
        </div>
    )
}

export default Information
