import {Link} from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'


const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li>
                    <Link to='/'>Najnovije vesti</Link>
                </li>
                <li>
                    <Link to='/about'>Domaci fudbal</Link>
                </li>
                <li>
                    <Link to='/'>Kosarka</Link>
                </li>
               
                    <a href="#"><FaFacebook/></a> 
                    <a href="#"><FaTwitterSquare/></a> 
                    <a href="#"><FaYoutube/></a> 
            
              
            </ul>
        </div>
    )
}

export default Navbar
