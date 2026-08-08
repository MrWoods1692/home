import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import IntersectObserver from '@/components/common/IntersectObserver';
import { Toaster } from '@/components/ui/sonner';
import { AppProvider } from '@/contexts/AppContextProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { routes } from './routes';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <IntersectObserver />
        <div className="flex flex-col min-h-screen relative pt-20">
          <Navbar />
          <main className="flex-grow">
            <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
        <Toaster />
      </Router>
    </AppProvider>
  );
};

export default App;
