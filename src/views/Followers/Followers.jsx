import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header'
import FollowersCard from '../../components/FollowersCard/FollowersCard'
import "./Followers.styles.css"


const Followers = () => {

    const {name} = useParams()
    const [followersInfo, setFollowersInfo] = useState([])

    useEffect(()=>{

        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}/followers`
            const response = await fetch (urlDir)
            const result = await response.json()
            setFollowersInfo(result)
        }

        requestApi()

    }, [])

    return (
        <div>
            <Header />
            <div className="followers-container">
                {
                    followersInfo?.map(info =>

                        <FollowersCard 
                            key={info?.id}
                            userName={info?.login}
                            image={info?.avatar_url}
                        />
                    )
                }
            </div>

        </div>
    )
}

export default Followers
