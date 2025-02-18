import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, MarketplacePage, BlogPage, ContactPage, NewsroomPage, ProductPage, DiscordPage, AboutPage, FAQPage } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router basename='/react'>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/marketplace" element={<MarketplacePage />} />
      <Route exact path="/product/:productId" element={<ProductPage />} />
      <Route exact path="/blog" element={<BlogPage />} />
      <Route exact path="/newsroom/:postId" element={<NewsroomPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/faq" element={<FAQPage />} />
      <Route exact path="/discord" element={<DiscordPage />} />
    </Routes>
  </Router>
);

reportWebVitals();
