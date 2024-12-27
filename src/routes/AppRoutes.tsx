import { Route, Routes } from "react-router-dom";

import { Body, Home, Mind, SteppedTurkeyBreast, Tips } from '@pages/index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuerpo-balance" element={<Body />} />
      <Route path="/mente-en-balance" element={<Mind />} />
      <Route path="/tips-balance" element={<Tips />} />
      <Route path="/pechuga-de-pavo-escalonada" element={<SteppedTurkeyBreast />} />
    </Routes>
  );
}
