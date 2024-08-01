import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApartmentList from './components/ApartmentList';
import ApartmentForm from './components/ApartmentForm';

// Routes to elements based on path
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ApartmentList />} />
          <Route path="/edit/:id" element={<ApartmentForm />} />
          <Route path="/create" element={<ApartmentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
