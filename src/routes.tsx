import Home from './pages/Home';
import About from './pages/About';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LovePage from './pages/LovePage';
import type { ReactNode } from 'react';

export interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  public?: boolean;
}

export const routes: RouteConfig[] = [
  { name: 'Home', path: '/', element: <Home />, public: true },
  { name: 'About', path: '/about', element: <About />, public: true },
  { name: 'Skills', path: '/skills', element: <SkillsPage />, public: true },
  { name: 'Projects', path: '/projects', element: <ProjectsPage />, public: true },
  { name: 'Blog', path: '/blog', element: <BlogPage />, public: true },
  { name: 'Contact', path: '/contact', element: <ContactPage />, public: true },
  { name: 'Love', path: '/love', element: <LovePage />, public: true },
];
