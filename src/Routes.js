import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
                <Route exact path="/react/" component={<HomePage />} />
                <Route exact path="/react/marketplace" component={<MarketplacePage />} />
                <Route path="/react/product/:productId" component={<ProductPage />} />
                <Route path="/react/blog" component={<BlogPage />} />
                <Route path="/react/newsroom/:postId" component={<NewsroomPage />} />
                <Route path="/react/contact" component={<ContactPage />} />
                <Route path="/react/about" component={<AboutPage />} />
                <Route path="/react/faq" component={<FAQPage />} />
                <Route path="/react/discord" component={<DiscordPage />} />
            </Switch>
        </Router>
    );
}