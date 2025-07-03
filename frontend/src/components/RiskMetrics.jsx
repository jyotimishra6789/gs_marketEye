import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RiskMetrics() {
  const [data, setData] = useState(null);

 useEffect(() => {
  axios.get('http://localhost:8000/risk')
    .then(res => {
      console.log(res.data); 
      setData(res.data);
    })
    .catch(err => console.error(err));
}, []);


  return (
    <div>
      <h2>📉 Risk Metrics</h2>
      {data ? (
        <ul>
          <li><strong>VaR (95%):</strong> {data.VaR_95}</li>
          <li><strong>Sharpe Ratio:</strong> {data.Sharpe_Ratio}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RiskMetrics;
