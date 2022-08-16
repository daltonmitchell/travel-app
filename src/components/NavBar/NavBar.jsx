import {Link} from 'react-router-dom';
import './NavBar.css'
import * as userService from '../../utilities/users-service'

export default function NavBar({user, setUser, setPost, setProfile}) {
    function handleLogOut(){
      userService.logOut();
      setUser(null);
      setPost([]);
      setProfile({});
    }

    return (
      <nav className='navbar'>
        <Link to='/profile' className='navlink'>Profile</Link>
        &nbsp; | &nbsp;
        <Link to='/location' className='navlink'>Locations</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut} className='navlink'>Log Out</Link>
      </nav>
    );
  }
  