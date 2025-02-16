import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import { Home, Marketplace, Blog, Contact, Newsroom, Product, Discord, About, FAQ } from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';


function App() {
  <HashRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsroom/:postId" element={<Newsroom />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/discord" element={<Discord />} />
      </Routes>
  </HashRouter>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
