import React, { useEffect, useState } from "react";
import axios from "axios";

function TopMovers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/top-movers")
      .then(res => {
        console.log("Top Movers:", res.data);
        setData(res.data);
      })
      .catch(err => console.error("Error fetching top movers:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>📈 Top Movers</h2>
      <div>
        <h3>Top Gainers</h3>
        <ul>
          {data.gainers.map((stock, index) => (
            <li key={index}>{stock.name}: {stock.change}</li>
          ))}
        </ul>
        <h3>Top Losers</h3>
        <ul>
          {data.losers.map((stock, index) => (
            <li key={index}>{stock.name}: {stock.change}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopMovers;
