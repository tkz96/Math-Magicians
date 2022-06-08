import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Pages/Home';
import CalculatorPage from './Pages/CalculatorPage';
import Quote from './Pages/Quote';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}
