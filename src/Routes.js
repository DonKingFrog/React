import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { HomePage, MarketplacePage, BlogPage, ContactPage, NewsroomPage, ProductPage, DiscordPage, AboutPage, FAQPage } from './App';


window.$docsify = {
    alias: {
        '#': "/",
    },
  };

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/react/" element={<HomePage />} />
                <Route exact path="/react/marketplace" element={<MarketplacePage />} />
                <Route exact path="/react/product/:productId" element={<ProductPage />} />
                <Route exact path="/react/blog" element={<BlogPage />} />
                <Route exact path="/react/newsroom/:postId" element={<NewsroomPage />} />
                <Route exact path="/react/contact" element={<ContactPage />} />
                <Route exact path="/react/about" element={<AboutPage />} />
                <Route exact path="/react/faq" element={<FAQPage />} />
                <Route exact path="/react/discord" element={<DiscordPage />} />
            </Switch>
        </Router>
    );
}