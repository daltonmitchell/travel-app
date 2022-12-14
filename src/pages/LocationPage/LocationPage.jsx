import {useState, useEffect} from 'react';
import './LocationPage.css'
import * as locationsAPI from '../../utilities/locations-api'
import LocationForm from '../../components/LocationForm/LocationForm';

export default function LocationPage({location, setLocation}) {
  async function addLocation(formData){
    await locationsAPI.add(formData)
  }

  const [showForm, setShowForm] = useState(false);

  useEffect (() => {
    async function getLocation(){
      const location = await locationsAPI.get();
      setLocation(location);
      console.log(location)
    }
    getLocation();
    }, [showForm])

  
  function handleClick(){
    if(showForm===false){
      setShowForm(true)
    } else {
      setShowForm(false)
    }
  }
  
  const eachLocation = location.map((el, idx)=>{
    return (
      <div key={idx} className='location'>
        <p>{`${el.city}, ${el.state}`}</p>
      </div>
  )})

  return (
    <>  
      <h1 className='locHeader'>Locations</h1>
      {eachLocation}
      <button onClick={handleClick}>New Location</button>
      {showForm ? <LocationForm addLocation={addLocation} setShowForm={setShowForm} /> : null}
    </>
  );
}
  