import {useState, useEffect} from 'react';
import './PostForm.css'
import * as postsAPI from '../../utilities/posts-api';
import * as locationsAPI from '../../utilities/locations-api';

export default function PostForm({setPost, location, setLocation, postAdded, setPostAdded}) {
    const [formData, setFormData] = useState({
      body: '',
      location: '',
      error: ''
    })

    async function addPost(formData){
      await postsAPI.add(formData);
    }
  
    function handleChange(evt) {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        error: ''
      })
    }
  
    function handleSubmit(evt) {
      addPost(formData);
      setFormData({
        body: '',
        location: '',
        error: ''
      });
      if(postAdded===false){
        setPostAdded(true);
      } else {
        setPostAdded(false);
      }
    }

    useEffect (() => {
      async function getLocation(){
        const location = await locationsAPI.get();
        setLocation(location);
      }
      getLocation();
      }, [])
  
    const eachLocation = location.map((el, idx)=>{
      return (
        <option key={idx} value={el._id}>{`${el.city}, ${el.state}`}</option>
    )})

    return (
      <div>
        <div className="form-container postForm">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>New post:</label>
            <textarea type="text" name="body" value={formData.body} onChange={handleChange} required />
            <label>Location: </label>
            <select name="location" value={formData.location} onChange={handleChange} required >
              <option></option>
              {eachLocation}
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    );
  }