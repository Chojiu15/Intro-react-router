import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'



const User = () => {
    let {id}  = useParams()
    const [user, setUser] = useState(null)
    
    const fetchSingleUser = async ()  => {
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUser(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchSingleUser()
    }, [])

    return(
        <>  
        {user && (
            <>  
                    <h1>Username : {user.name}</h1>
                    <p>Email : {user.email}</p>
                    <p>Website : {user.website}</p>
            </>
        )}
        </>
    )
}


export default User