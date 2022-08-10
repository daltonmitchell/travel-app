import {useState} from 'react';

export default function ProfileForm({addProfile, setProfile}) {
    const [formData, setFormData] = useState({
      name: '',
      error: ''
    })
  
    function handleChange(evt) {
      setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        error: ''
      })
    }
  
    function handleSubmit(evt) {
      evt.preventDefault();
      addProfile(formData);
      setProfile(formData);
    }
  
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    );
  }