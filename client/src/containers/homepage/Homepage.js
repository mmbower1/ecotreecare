import React from 'react';
// components
import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/Sidebar';
// style
import './Homepage.scss'

const Homepage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Main />
    </div>
  )
}

export default Homepage
