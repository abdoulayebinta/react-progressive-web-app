import React, { useState, useEffect } from 'react';
import './App.css';


const API_URL = 'https://orangevalleycaa.org/api/videos';

function App() {
  const [data, setData] = useState([])

  // UseEffect - a hook for data fetching 
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(API_URL)
          .then(response => response.json()
      )
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header>
        <h1>Art Videos</h1>
      </header>
      {data.map(video => (
        <div key={video.id}>
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} />
        </div>
      ))}
    </div>
  );
}

export default App;
