import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './SPA/nav';

const App = () => (
  <>
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  </>
);

export default App;
