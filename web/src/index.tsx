import React from 'react';
import { App } from './App';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { reportWebVitals } from './reportWebVitals';
import RepositoryInfo from './components/Repositories/RepositoryInfo';
import NavBar from './components/NavBar/NavBar';

import './index.css';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="repository/:id" element={<RepositoryInfo />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
