import React from 'react'
import { Link } from 'react-router-dom'
import "./FollowersCard.styles.css"

const FollowersCard = ({userName, image}) => {

    return (
        <div className="followers-card">
            <img src={image} alt={`image of ${userName}`} />
            <h4>{userName}</h4>
            <Link to={`/users/${userName}`}><button className="vermas">See more!</button></Link>
        </div>
    )
}

export default FollowersCard
