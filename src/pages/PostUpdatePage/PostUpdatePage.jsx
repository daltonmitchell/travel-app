import {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PostUpdatePage.css';
import * as postsAPI from '../../utilities/posts-api';
import * as locationsAPI from '../../utilities/locations-api';

export default function PostUpdatePage({location, setLocation}){
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        body: '',
        location: '',
        error: ''
      })

    async function updatePost(formData){
        await postsAPI.update(formData, id);
    }

    function handleChange(evt){
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    function handleSubmit(evt){
        evt.preventDefault();
        updatePost(formData);
        navigate(-1)
    }

    useEffect (() => {
        async function getLocation(){
          const location = await locationsAPI.get();
          setLocation(location);
        }
        getLocation();
        }, [])
    
    const eachLocation = location ? location.map((el, idx)=>{
        return (
            <option key={idx} value={el._id}>{`${el.city}, ${el.state}`}</option>
        )}) : null

    return (
        <>
            <h1>Post Update</h1>
            <div className="form-container updateForm">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Post:</label>
                    <input type="text" name="body" value={formData.body} onChange={handleChange} required />
                    <label>Location: </label>
                    <select name="location" value={formData.location} onChange={handleChange} required >
                        <option></option>
                        {eachLocation}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{formData.error}</p>
        </>
    )
}