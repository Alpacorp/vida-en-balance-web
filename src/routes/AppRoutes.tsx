import {Route, Routes} from "react-router-dom";

import {
  Body,
  Home,
  Mind,
  SteppedTurkeyBreast,
  Tips,
  TurkeyBreastSandwichSlices,
  TurkeyBreastThinSlices,
  TurkeyBreastSausage,
  TurkeySausage
} from '@pages/index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuerpo-balance" element={<Body />} />
      <Route path="/mente-en-balance" element={<Mind />} />
      <Route path="/tips-balance" element={<Tips />} />
      <Route path="/pechuga-de-pavo-escalonada" element={<SteppedTurkeyBreast />} />
      <Route path="/pechuga-de-pavo-rebanadas-delgadas" element={<TurkeyBreastThinSlices />} />
      <Route path="/salchicha-de-pavo" element={<TurkeySausage />} />
      <Route path="/pechuga-de-pavo-rebanadas-sandwich" element={<TurkeyBreastSandwichSlices />} />
      <Route path="/salchicha-de-pechuga-de-pavo" element={<TurkeyBreastSausage />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
