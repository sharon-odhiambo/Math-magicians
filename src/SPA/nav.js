import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Calculator from '../components/Calculator';
import Quote from './quote';

const Nav = () => (
  <>
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default Nav;
