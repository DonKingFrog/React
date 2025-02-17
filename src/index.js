import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './colors.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, MarketplacePage, BlogPage, ContactPage, NewsroomPage, ProductPage, DiscordPage, AboutPage, FAQPage } from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/newsroom/:postId" element={<NewsroomPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/discord" element={<DiscordPage />} />
    </Routes>
  </Router>
);

reportWebVitals();
