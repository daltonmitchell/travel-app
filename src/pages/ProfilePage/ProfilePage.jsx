import './ProfilePage.css';
import {Link} from 'react-router-dom';
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import PostForm from "../../components/PostForm/PostForm";
import * as profilesAPI from '../../utilities/profiles-api';
import * as postsAPI from '../../utilities/posts-api';
import {useState, useEffect} from 'react';

export default function ProfilePage({user, profile, setProfile, post, setPost, location, setLocation}) {
  async function addProfile(formData){
    const profile = await profilesAPI.add(formData)
    setProfile(profile);
  }
  
  const [postAdded, setPostAdded] = useState(false);

  useEffect (() => {
    async function getProfile(){
      const profile = await profilesAPI.get();
      setProfile(profile);
    }
    
    if(user){
      console.log('hitting useeffect')
      getProfile();
    }
  }, [user])

  const eachPost = profile?.posts ? profile.posts.map((el, idx)=>{
    return (
      <div className='postCell' key={idx}>
        <Link to={`/post/${el._id}`} className='postLink'>
          <p>{el.body}</p>
          <p>{el.location.city}, {el.location.state}</p>
        </Link>
      </div>
  )}) : null

  return (
    <>
        { profile ? <p id='profileName'>{profile.name}</p> : null }
        { profile ? null : <ProfileForm user={user} setProfile={setProfile} addProfile={addProfile} /> }
        <PostForm setPost={setPost} location={location} setLocation={setLocation} postAdded={postAdded} setPostAdded={setPostAdded} />
        {eachPost}
      </>
    );
  }
  