import './App.css';
import {useState} from 'react'
import LocationPage from '../LocationPage/LocationPage';
import AuthPage from '../AuthPage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [profile, setProfile] = useState({});
  const [post, setPost] = useState({});
  const [location, setLocation] = useState([])

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/location" element={<LocationPage location={location} setLocation={setLocation} />} />
            <Route path="/profile" element={<ProfilePage 
              user={user} 
              profile={profile} 
              setProfile={setProfile}
              post={post}
              setPost={setPost}
              location={location} 
              setLocation={setLocation}
               />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

