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
  return (
    <Fragment>
      <Navbar />
      <RenderHomePage />
      <Footer />
    </Fragment>
  );
}

function MarketplacePage() {
  return (
    <Fragment>
      <Navbar />
      <RenderMarketplacePage />
      <Footer />
    </Fragment>
  );
}

function BlogPage() {
  return (
    <Fragment>
      <Navbar />
      <RenderBlogPage />
      <Footer />
    </Fragment>
  );
}

function ContactPage() {
  return (
    <Fragment>
      <Navbar />
      <RenderContactPage />
      <Footer />
    </Fragment>
  );
}

function NewsroomPage() {
  return (
    <Fragment>
      <Navbar />
      <RenderNewsPost />
      <Footer />
    </Fragment>
  );
}

function ProductPage() {
  return (
    <Fragment>
      <Navbar />
      <RenderProductPage />
      <Footer />
    </Fragment>
  );
}

function DiscordPage() {
  return(
    <Fragment>
      <meta http-equiv="refresh" content="0; URL=https://discord.gg/QBdH2p7QBr" />
    </Fragment>
  );
}

function AboutPage() {
  return(
    <Fragment>
      <Navbar />
      <RenderAboutPage />
      <Footer />
    </Fragment>
  )
}

function FAQPage() {
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