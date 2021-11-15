import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Header from '../../layout/Header'
import RepoCard from '../../components/RepoCard/RepoCard'


const Repo = () => {


    const {name} = useParams()
    const [repoInfo, setRepoInfo] = useState([])

    useEffect(()=>{

        const requestApi = async ()=>{
            const urlDir = `https://api.github.com/users/${name}/repos`
            const response = await fetch (urlDir)
            const result = await response.json()
            setRepoInfo(result)
        }

        requestApi()

    }, [name])


    return (
        <div>
           <Header />

          
          {
                repoInfo?.map(data => 
                    <RepoCard 
                    
                    repoName={data.name}
                    owner={name}
                    repoPrivate={data.private}
                
                    />
                )
            }

         
        </div>
    )
}

export default Repo
