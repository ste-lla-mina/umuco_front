import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DigitalArchive from "./components/Archive";
import CommunityGuardian from "./components/Community";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/AuthPage";

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'login', 'signup'

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0 });
  };

  if (currentView === 'login') {
    return <LoginPage onNavigate={navigateTo} />;
  }

  if (currentView === 'signup') {
    return <SignUpPage onNavigate={navigateTo} />;
  }

  return (
    <div className="w-full min-h-screen bg-[#FDFBF7] antialiased scroll-smooth">
      <Navbar onNavigate={navigateTo} />
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