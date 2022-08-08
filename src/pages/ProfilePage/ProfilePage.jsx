import { checkToken } from "../../utilities/users-service";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import * as profilesAPI from '../../utilities/profiles-api';

export default function ProfilePage({user, profile, setProfile}) {
  async function handleCheckToken(){
    const expDate = await checkToken();
    console.log(expDate);
  }  

  async function addProfile(formData){
    const profile = await profilesAPI.add(formData)
    setProfile(profile);
  }
  
  return (
      <>
        <h1>{user.name}</h1>
        <p>{profile.name}</p>
        <ProfileForm user={user} addProfile={addProfile} />
        <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </>
    );
  }
  