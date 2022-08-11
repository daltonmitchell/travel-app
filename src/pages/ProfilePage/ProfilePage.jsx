import ProfileForm from "../../components/ProfileForm/ProfileForm";
import PostForm from "../../components/PostForm/PostForm";
import * as profilesAPI from '../../utilities/profiles-api';
import * as postsAPI from '../../utilities/posts-api';
import {useEffect} from 'react';

export default function ProfilePage({user, profile, setProfile, post, setPost, location, setLocation}) {
  async function addProfile(formData){
    const profile = await profilesAPI.add(formData)
    setProfile(profile);
  }
  
  useEffect (() => {
  async function getProfile(){
    const profile = await profilesAPI.get();
    setProfile(profile);
  }
  getProfile();
  }, [])

  useEffect(() => {
    async function getPosts(){
      const posts = await postsAPI.get();
      console.log(posts)
      setPost(posts);
    }
    getPosts();
  }, [])

  return (
      <>
        <p>{profile.name}</p>
        { profile ? null : <ProfileForm user={user} setProfile={setProfile} addProfile={addProfile} /> }
        <PostForm setPost={setPost} location={location} setLocation={setLocation} />
      </>
    );
  }
  