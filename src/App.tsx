import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LayoutWrapper } from './components/Layout';
import { ThemeProvider } from './context/ThemeContext';
import { LazyMotion, domAnimation } from 'motion/react';
import Home from './pages/Home';

const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const AutomationLab = lazy(() => import('./pages/AutomationLab'));

const LoadingSpinner = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <LazyMotion features={domAnimation}>
        <Router>
          <LayoutWrapper>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/automation-lab" element={<AutomationLab />} />
              </Routes>
            </Suspense>
          </LayoutWrapper>
        </Router>
      </LazyMotion>
    </ThemeProvider>
  );
}
