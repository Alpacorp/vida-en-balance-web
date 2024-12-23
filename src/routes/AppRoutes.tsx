import { Route, Routes } from "react-router-dom";

import {BodyBalance, BodyBalanceTest, Home, MindBalance, TipsBalance} from '@pages/index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuerpo-balance" element={<BodyBalance />} />
      <Route path="/cuerpo-balance-2" element={<BodyBalanceTest />} />
      <Route path="/mente-en-balance" element={<MindBalance />} />
      <Route path="/tips-balance" element={<TipsBalance />} />
    </Routes>
  );
}
