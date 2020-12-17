import React from 'react'
import './Ranking.css'

function Ranking(props) {
    return (
        <div className="ranking">
            <p>#{props.ranking}</p>
        </div>
    )
}

export default Ranking
