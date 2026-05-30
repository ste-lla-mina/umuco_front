import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DigitalArchive from "./components/Archive";
import CommunityGuardian from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] antialiased scroll-smooth">
      <Navbar />
      <Hero />
      <div id="archive">
        <DigitalArchive />
      </div>
      <div id="community">
        <CommunityGuardian />
      </div>
      <Footer />
    </div>
  );
}

export default App;