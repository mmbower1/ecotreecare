import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// containers
import Homepage from './containers/homepage/Homepage';
import AboutUs from './containers/about-us/AboutUs';
import Services from './containers/services/Services';
import Gallery from './containers/gallery/Gallery';
import Review from './containers/review/Review';


// styles
import './App.css';
import './scss/App.scss';

// redux
import { store, 
  // persistor 
} from './store';
import { Provider } from 'react-redux';

// react lazy - replaces the imported containers from above
// const Homepage = lazy(() => import('./containers/homepage/Homepage'));
// const Auth = lazy(() => import('./containers/auth/Auth'));
// const Checkout = lazy(() => import('./containers/checkout/Checkout'));
// const Edit = lazy(() => import('./containers/edit/Edit'));
// const Profile = lazy(() => import('./containers/profile/Profile'));
// const ShopPage = lazy(() => import('./containers/shop/Shop'));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            {/* <Suspense fallback={<Spinner />}> */}
              {/* <Route exact path='/auth' component={Auth} /> */}
              <div className="App">
                <Header />
                  <Route exact path='/' component={Homepage} />
                  <Route exact path='/about-us' component={AboutUs} />
                  <Route exact path='/services' component={Services} />
                  <Route exact path='/gallery' component={Gallery} />
                  <Route exact path='/review' component={Review} />
                <Footer />
              </div>
            {/* </Suspense> */}
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
