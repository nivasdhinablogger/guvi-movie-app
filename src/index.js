import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Rendering from './components/Rendering';
import {BrowserRouter as Router} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Rendering />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
