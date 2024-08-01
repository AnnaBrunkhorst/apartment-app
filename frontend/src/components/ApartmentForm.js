import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ApartmentForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8000/api/apartments/${id}/`)
        .then(response => {
          setName(response.data.name);
          setDescription(response.data.description);
        })
        .catch(error => console.error('Error fetching apartment details: ', error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const apartment = { name, description };
    
    const axiosCall = id ? axios.put(`http://localhost:8000/api/apartments/${id}/`, apartment)
                         : axios.post('http://localhost:8000/api/apartments/', apartment);

    axiosCall.then(() => navigate('/'))
             .catch(error => console.error('Error saving apartment: ', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ApartmentForm;
