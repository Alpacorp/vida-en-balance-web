import { Route, Routes } from "react-router-dom";
import { BodyBalance, Home } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuerpo-balance" element={<BodyBalance />} />
    </Routes>
  );
}
