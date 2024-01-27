import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import UlamScanPage from './pages/ulamScan.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/ulam-scan" element={<UlamScanPage />} />
    </Routes>
  );
}

export default App;
