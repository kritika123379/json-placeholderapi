import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './containers/Blog/Blog';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
     <Blog/>
     <Page/>
    </div>
  );
}

export default App;
