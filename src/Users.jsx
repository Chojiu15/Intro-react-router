import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Users = () => {

    const [users, setUsers] = useState(null)

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    console.log(users)


    return (
        <>
            {users && users.map((user, index) => {
                return (
                    <div key={user.id}>
                        <Link to={`/user/${user.id}`}><h1>{user.name}</h1></Link>
                    </div>
                )
            })}

        </>)
}

export default Users