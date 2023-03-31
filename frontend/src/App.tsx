import React from 'react';
import './App.css';
import Layout from './Layout';
import MovieList from './Movies';
import Podcast from './Podcast';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<MovieList />} />
              <Route path="podcast" element={<Podcast />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
