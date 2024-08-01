import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Apartments.css';

function ApartmentList() {
  const [apartments, setApartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/apartments/')
      .then(response => setApartments(response.data))
      .catch(error => console.error('Error fetching apartments: ', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/apartments/${id}/`)
      .then(() => {
        setApartments(apartments.filter(apartment => apartment.id !== id));
      })
      .catch(error => console.error('Error deleting apartment: ', error));
  };

  return (
    <div>
      <div className="padded-container">
        <h1>Available Apartments</h1>
        <SearchBar onSearch={(value) => setSearchTerm(value)} />
        <Link to="/create" className="buttonBlu">Add New Apartment</Link>
      </div>
      {apartments.filter(apartment => apartment.name.toLowerCase().includes(searchTerm.toLowerCase())).map(apartment => (
        <div className="apartment-container">
          <div className="apartment-details">
              <h3>{apartment.name}</h3>
              <p>{apartment.description}</p>
          </div>
          <div className="apartment-actions">
              <Link to={`/edit/${apartment.id}`} className="buttonBlu">Edit</Link>
              <button onClick={() => handleDelete(apartment.id)} className="buttonRed">Delete</button>
          </div>
      </div>
      ))}
    </div>
  );
}

export default ApartmentList;
