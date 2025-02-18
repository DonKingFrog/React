import { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from "./Component/Navbar.js";
import Footer from "./Component/Footer.js";
import RenderHomePage from "./Pages/Home.js";
import RenderBlogPage from './Pages/Blog.js';
import RenderContactPage from './Pages/Contact.js'
import RenderNewsPost from "./Component/Newsroom.js";
import RenderProductPage from "./Component/Products.js";
import RenderMarketplacePage from './Pages/Marketplace.js';
import RenderAboutPage from './Pages/About.js';
import RenderFAQPage from './Pages/FAQ.js';

function HomePage() {
  useEffect(() => { location.reload() })
  
  return (
    <Fragment>
      <Navbar />
      <RenderHomePage />
      <Footer />
    </Fragment>
  );
}

function MarketplacePage() {
  useEffect(() => { location.reload() })

  return (
    <Fragment>
      <Navbar />
      <RenderMarketplacePage />
      <Footer />
    </Fragment>
  );
}

function BlogPage() {
  useEffect(() => { location.reload() })
  
  return (
    <Fragment>
      <Navbar />
      <RenderBlogPage />
      <Footer />
    </Fragment>
  );
}

function ContactPage() {
  useEffect(() => { location.reload() })

  return (
    <Fragment>
      <Navbar />
      <RenderContactPage />
      <Footer />
    </Fragment>
  );
}

function NewsroomPage() {
  useEffect(() => { location.reload() })

  return (
    <Fragment>
      <Navbar />
      <RenderNewsPost />
      <Footer />
    </Fragment>
  );
}

function ProductPage() {
  useEffect(() => { location.reload() })

  return (
    <Fragment>
      <Navbar />
      <RenderProductPage />
      <Footer />
    </Fragment>
  );
}

function DiscordPage() {
  useEffect(() => { location.reload() })

  return(
    <Fragment>
      <meta http-equiv="refresh" content="0; URL=https://discord.gg/QBdH2p7QBr" />
    </Fragment>
  );
}

function AboutPage() {
  useEffect(() => { location.reload() })

  return(
    <Fragment>
      <Navbar />
      <RenderAboutPage />
      <Footer />
    </Fragment>
  )
}

function FAQPage() {
  useEffect(() => { location.reload() })
  
  return(
    <Fragment>
      <Navbar />
      <RenderFAQPage />
      <Footer />
    </Fragment>
  )
}

export {
  HomePage,
  MarketplacePage,
  BlogPage,
  ContactPage,
  NewsroomPage,
  ProductPage,
  DiscordPage,
  AboutPage,
  FAQPage,
}