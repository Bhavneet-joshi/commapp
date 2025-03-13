import React, { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

// Lazy load page components
const HomePage = lazy(() => import('./components/HomePage'));
const EventsPage = lazy(() => import('./components/EventsPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));

// Loading component
const LoadingFallback = () => (
  <div className="page-loading">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'events':
        return <EventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} />
      <Suspense fallback={<LoadingFallback />}>
        {renderPage()}
      </Suspense>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
