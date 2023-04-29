import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DetailPage, HomePage } from '~/pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};
