import {Link} from 'react-router-dom'


const NavBar = () => {
    return(
        <>
            <div className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/user'>User</Link></li>
                </ul>
            </div>
        
        </>
    )
}

export default NavBar