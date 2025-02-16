import { Fragment } from 'react';
import './App.css';
import Navbar from "./Component/Navbar.js";
import Footer from "./Component/Footer.js";
import RenderHomePage from "./Pages/Home.js";
import RenderBlogPage from './Pages/Blog.js';
import RenderContactPage from './Pages/Contact.js'
import NewsPost from "./Component/Newsroom.js";
import ProductPage from "./Component/Products.js";
import RenderMarketplacePage from './Pages/Marketplace.js';
import RenderAboutPage from './Pages/About.js';
import RenderFAQPage from './Pages/FAQ.js';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <RenderHomePage />
      <Footer />
    </Fragment>
  );
}

function Marketplace() {
  return (
    <Fragment>
      <Navbar />
      <RenderMarketplacePage />
      <Footer />
    </Fragment>
  );
}

function Blog() {
  return (
    <Fragment>
      <Navbar />
      <RenderBlogPage />
      <Footer />
    </Fragment>
  );
}

function Contact() {
  return (
    <Fragment>
      <Navbar />
      <RenderContactPage />
      <Footer />
    </Fragment>
  );
}

function Newsroom() {
  return (
    <Fragment>
      <Navbar />
      <NewsPost />
      <Footer />
    </Fragment>
  );
}

function Product() {
  return (
    <Fragment>
      <Navbar />
      <ProductPage />
      <Footer />
    </Fragment>
  );
}

function Discord() {
  return(
    <Fragment>
      <meta http-equiv="refresh" content="0; URL=https://discord.gg/QBdH2p7QBr" />
    </Fragment>
  );
}

function About() {
  return(
    <Fragment>
      <Navbar />
      <RenderAboutPage />
      <Footer />
    </Fragment>
  )
}

function FAQ() {
  return(
    <Fragment>
      <Navbar />
      <RenderFAQPage />
      <Footer />
    </Fragment>
  )
}

export {
  Home,
  Marketplace,
  Blog,
  Contact,
  Newsroom,
  Product,
  Discord,
  About,
  FAQ,
}