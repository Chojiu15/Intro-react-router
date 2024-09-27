import {Routes, Route} from 'react-router-dom'
import App from './App'
import Users from './Users'
import NavBar from './components/Navbar'
import User from './User'




const MyRouter = () => {
    return(
        <>
            <NavBar />
            <Routes>
                        <Route path='/' element={<App />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/user/:id' element={<User />} />
                        <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        
        </>
    )
}

export default MyRouter