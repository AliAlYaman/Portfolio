import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '24px',
            fontWeight: 'bold'
          }} className='animate-fadeIn'>
            Loading...
          </div>
        }>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='about' element={<AboutPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
