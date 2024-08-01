import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

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
      <h1>Apartment List</h1>
      <SearchBar onSearch={(value) => setSearchTerm(value)} />
      {apartments.filter(apartment => apartment.name.toLowerCase().includes(searchTerm.toLowerCase())).map(apartment => (
        <div key={apartment.id}>
          <h2>{apartment.name}</h2>
          <p>{apartment.description}</p>
          <Link to={`/edit/${apartment.id}`}>Edit</Link>
          <button onClick={() => handleDelete(apartment.id)}>Delete</button>
        </div>
      ))}
      <Link to="/create">Add New Apartment</Link>
    </div>
  );
}

export default ApartmentList;
