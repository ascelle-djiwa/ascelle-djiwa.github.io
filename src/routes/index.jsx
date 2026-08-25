import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Education = lazy(() => import('../pages/Education'));
const ExperienceProjects = lazy(() => import('../pages/ExperienceProjects'));
const AboutContact = lazy(() => import('../pages/Contact')); // NOUVELLE PAGE

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center min-vh-100 bg-white">
    <div className="spinner-border text-brand" role="status"><span className="visually-hidden">Chargement...</span></div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<Loader />}><Home /></Suspense> },
      { path: 'formation', element: <Suspense fallback={<Loader />}><Education /></Suspense> },
      { path: 'experiences-projets', element: <Suspense fallback={<Loader />}><ExperienceProjects /></Suspense> },
      { path: 'a-propos-contact', element: <Suspense fallback={<Loader />}><AboutContact /></Suspense> }, // NOUVEAU CHEMIN
    ]
  }
]);