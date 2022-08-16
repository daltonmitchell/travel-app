import {useState} from 'react';
import './LocationForm.css'

export default function LocationForm({addLocation, setShowForm}) {
    const states = ['','AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
    
    const [formData, setFormData] = useState({
      city: '',
      state: '',
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
      addLocation(formData);
      setFormData({
        city: '',
        state: '',
        error: ''
      });
      setShowForm(false);
    }
  
    return (
      <div>
        <div className="form-container locationForm">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>City: </label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            <label>State: </label>
            <select name="state" value={formData.state} onChange={handleChange} required>
                {states.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{formData.error}</p>
      </div>
    );
  }