import React, { Lazy, suspense } from 'react';
// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// containers
import Homepage from './containers/homepage/Homepage';

// styles
import './App.css';
import './scss/App.scss';

// redux
import { store, 
  // persistor 
} from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
