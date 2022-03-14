import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const EnrollmentPage = lazy(() => import('../pages/Enrollment'));
const StudentsPage = lazy(() => import('../pages/Students'));
const NotFound = lazy(() => import('../navigation/NotFound'));

export const RouterConfig = () => {
  return (
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enrollment" element={<EnrollmentPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
  )
}