import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Posts, Article, Home } from './components';
import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('root');

createRoot(rootContainer).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="/posts/:articleId" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// Remove the second argument from the render method.

