import { useState } from 'react';

import './App.css';
import Hero from './Components/Hero';
import Display from './Components/Display';

function App() {
  return (
    <div className="wrapper">
      {/* hero  section*/}
      <Hero />
      {/* Display */}
      <Display />
    </div>
  );
}

export default App;
