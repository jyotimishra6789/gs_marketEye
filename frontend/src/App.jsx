import React from 'react';
import RiskMetrics from './components/RiskMetrics';
import Sentiment from './components/Sentiment';
import TopMovers from './components/TopMovers';

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>📊 GS MarketEye Dashboard</h1>
      <RiskMetrics />
      <Sentiment />
      <TopMovers />
    </div>
  );
}

export default App;
