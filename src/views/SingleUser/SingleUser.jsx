import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../layout/Header'
import Card from '../../components/Home/card/Card'

const SingleUser = () => {

    const {userName} = useParams()
    const [selectedUser, setSelectedUser] = useState({})

    useEffect(()=>{

        const requestApi = async ()=>{

            const urlDir = `https://api.github.com/users/${userName}`
            const response = await fetch(urlDir)
            const result = await response.json()
            setSelectedUser(result)

        }
        
        requestApi()

    }, [userName])

    return (
        <div>

            <Header />

            {
                selectedUser && 
                <Card 
                    key={selectedUser?.id}
                    userName={selectedUser?.login}
                    image={selectedUser?.avatar_url}
                    followers={selectedUser?.followers_url}
                    following={selectedUser?.following_url}
                    repositories={selectedUser?.repos_url}
                    cantidadFollowers={selectedUser?.followers}
                    cantidadFollowing={selectedUser?.following}
                    cantidadRepos={selectedUser?.public_repos}
                    bio={selectedUser?.bio}
                />
            }

        </div>

    )
}

export default SingleUser
