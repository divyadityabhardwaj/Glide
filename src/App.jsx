import React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        {/* Other sections or components */}
      </main>
    </div>
  );
}

export default App;
