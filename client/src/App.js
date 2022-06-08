import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";

// containers
// import Homepage from './containers/homepage/Homepage';
// import AboutUs from './containers/about-us/AboutUs';
// import Services from './containers/services/Services';
// import Gallery from './containers/gallery/Gallery';
// import Review from './containers/review/Review';

// styles
import "./App.scss";
import "./scss/App.scss";
// redux
import {
  store,
  // persistor
} from "./store";
import { Provider } from "react-redux";

// react lazy - replaces the imported containers from above
const Homepage = lazy(() => import("./containers/homepage/Homepage"));
const AboutUs = lazy(() => import("./containers/about-us/AboutUs"));
const Services = lazy(() => import("./containers/services/Services"));
const Gallery = lazy(() => import("./containers/gallery/Gallery"));
const Review = lazy(() => import("./containers/review/Review"));

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Suspense fallback={<Spinner />}>
              {/* <Route exact path='/auth' component={Auth} /> */}
              <div className="App">
                <Header />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/services" component={Services} />
                <Route
                  exact
                  path="/gallery"
                  render={(props) => <Gallery {...props} />}
                />
                <Route exact path="/review" component={Review} />
                <Route exact path="/search/:keyword" component={Homepage} />
                <Footer />
              </div>
            </Suspense>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
