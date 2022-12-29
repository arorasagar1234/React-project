import './App.css';
import Header from './components/Header.js';
import React from 'react';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';

// This is JSX - javascript XML (flavour of javascript looking like html)
// JSX is a object form html DOM which is translated by React using render function
function App() {
  return (
    <div className='font-family'>
      <Header />
      <MainContent />
      <Footer />
    </div>
    
  );
}

export default App;
