import React, { useEffect, useState } from 'react';
import './App.min.css';
import Gallery from './components/Gallery';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=12')
      .then((res) => res.json())
      .then((data) => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app'>
      <Gallery images={images} />
    </div>
  );
};

export default App;
