import { checkToken } from "../../utilities/users-service";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import * as profilesAPI from '../../utilities/profiles-api';
import {useEffect} from 'react';

export default function ProfilePage({user, profile, setProfile}) {
  async function handleCheckToken(){
    const expDate = await checkToken();
    console.log(expDate);
  }  

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
  })

  console.log(profile)

  return (
      <>
        <h1>{user.name}</h1>
        <p>{profile.name}</p>
        { profile ? null : <ProfileForm user={user} setProfile={setProfile} addProfile={addProfile} /> }
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </>
    );
  }
  