import React, {useState} from 'react'
import Header from '../../layout/Header'
import Form from './form/Form'
import Card from './card/Card'
import "./Home.styles.css"

const Home = () => {

    const [searchValue, setSearchValue] = useState("")
    const [dataApi, setDataApi] = useState([])



    const handlerValue = ({value})=>{
        setSearchValue(value)
    }

    const handlerSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch (`https://api.github.com/users/${searchValue}`)
        const result = await response.json()
        setDataApi(result)
        
        
        
    }


    return (
        <div>
            <Header />
            <Form 
            handlerValue={handlerValue}
            handlerSubmit={handlerSubmit}
            />
            {
                searchValue === "" ?  <h3 className="text-align">Please, Input the user</h3> :
                searchValue !== dataApi.login ? <h3 className="text-align">Error 404, Not Found</h3> :

                <Card 
                    key={dataApi?.id}
                    userName={dataApi?.login}
                    image={dataApi?.avatar_url}
                    followers={dataApi?.followers_url}
                    following={dataApi?.following_url}
                    repositories={dataApi?.repos_url}
                    cantidadFollowers={dataApi?.followers}
                    cantidadFollowing={dataApi?.following}
                    cantidadRepos={dataApi?.public_repos}
                    bio={dataApi?.bio}

                />
                
            }
            
        </div>
    )
}

export default Home
