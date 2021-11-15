import React from 'react'
import "./Card.styles.css"
import { Link } from 'react-router-dom';


const Card = (props) => {

    const {userName, image, cantidadFollowing, cantidadFollowers, cantidadRepos, bio} = props
   
    return (
        <div className="card-container">

            <img src={image} alt={`image of ${userName}`} />
            <h2>{userName}</h2>
            <h4>{bio}</h4>
            
            
            <ul>
                <Link to={`/users/${userName}/followers`} className="links"> <li>Followers:<br/>{cantidadFollowers}</li> </Link>
                <Link to={`/users/${userName}/following`} className="links"> <li>Following:<br/>{cantidadFollowing}</li> </Link>
                <Link to={`/users/${userName}/repos`} className="links"> <li>Repositories:<br/>{cantidadRepos}</li> </Link>
            </ul>
            
        </div>
    )
}

export default Card
