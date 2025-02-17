import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { HomePage, MarketplacePage, BlogPage, ContactPage, NewsroomPage, ProductPage, DiscordPage, AboutPage, FAQPage } from './App';


window.$docsify = {
    alias: {
        '#': "/",
    },
  };

export const Routes = () => {
    return (
        <Router basename="/react">
            <Switch>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/marketplace" element={<MarketplacePage />} />
                <Route exact path="/product/:productId" element={<ProductPage />} />
                <Route exact path="/blog" element={<BlogPage />} />
                <Route exact path="/newsroom/:postId" element={<NewsroomPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/faq" element={<FAQPage />} />
                <Route exact path="/discord" element={<DiscordPage />} />
            </Switch>
        </Router>
    );
}