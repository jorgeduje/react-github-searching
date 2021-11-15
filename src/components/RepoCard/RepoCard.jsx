import React from 'react'
import "./RepoCard.styles.css"

const RepoCard = ({repoName, owner, repoPrivate}) => {

    const repoLink = `https://github.com/${owner}/${repoName}`


    return (
        <div className="repo-card">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
            <h4><span className="span-black">Owner:  </span>{owner}</h4>
            <h4><span className="span-black">Private:</span> {repoPrivate? "Private": "Public"}</h4>
            <h4><span className="span-black">Name :</span> {repoName}</h4>
            <a href={repoLink} target="_blank">See more about this Repo</a>
        </div>
    )
}

export default RepoCard
