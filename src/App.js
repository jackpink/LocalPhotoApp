import React from 'react';
import './App.css';
import Header from './Header';
import Filters from './Filters';
import Photos from './Photos';


function App() {
  return (
    <div className="LocalPhotoApp">
      <Header />
      <Filters />
      <Photos />
    </div>
  );
}

export default App;
