import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import { LanguageProvider } from './contexts/Language';
import { AuthProvider, useAuth } from './contexts/AuthContext'; 
import DigitalArchive from "./components/landing/Archive";
import CommunityGuardian from "./components/landing/Community";
import Footer from "./components/landing/Footer";
import LoginPage from "./components/landing/LoginPage";
import SignUpPage from "./components/landing/AuthPage";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const googleClientId = "829742825170-qu62f7f662o16iv6hcpgcep8g80fotb9.apps.googleusercontent.com"
  const [currentView, setCurrentView] = useState('home'); 
  const [activeSection, setActiveSection] = useState('Home'); 

  const navigateTo = (view) => {
    setCurrentView(view);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    if (currentView !== 'home') return;

    const sections = [
      { id: 'home-section', label: 'Home' },
      { id: 'archive', label: 'About' },
      { id:'discover', label:'Discover'},
      { id: 'community', label: 'Community' }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = sections.find(sec => sec.id === entry.target.id);
          if (matched) {
            setActiveSection(matched.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [currentView]);

  const renderView = () => {
    if (currentView === 'login') {
      return <LoginPage onNavigate={navigateTo} />;
    }

    if (currentView === 'signup') {
      return <SignUpPage onNavigate={navigateTo} />;
    }

    if (currentView === 'dashboard') {
      return <Dashboard onLogout={() => navigateTo('home')} />;
    }

    return (
        
      <div className="w-full min-h-screen bg-[#FDFBF7] antialiased scroll-smooth">
        <Navbar onNavigate={navigateTo} activeSection={activeSection} />
        
        <div id="home-section">
          <Hero onNavigate={navigateTo} />
        </div>
        <div id="archive" className="scroll-mt-20">
          <DigitalArchive onNavigate={navigateTo} />
        </div>
        <div id="community" className="scroll-mt-20">
          <CommunityGuardian onNavigate={navigateTo} />
        </div>
        
        <Footer />
      </div>
    );
  };

  return (
     <GoogleOAuthProvider clientId={googleClientId}>
    <AuthProvider>
      <LanguageProvider>
        {renderView()}
      </LanguageProvider>
    </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
