import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Sentiment() {
  const [sentiment, setSentiment] = useState(null);

 useEffect(() => {
 axios.get("http://localhost:8000/sentiment") 

    .then(res => {
      console.log(res.data); 
      setData(res.data);
    })
    .catch(err => console.error(err));
}, []);


  return (
    <div>
      <h2>📰 Market Sentiment</h2>
      {sentiment ? <p>{sentiment}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Sentiment;
