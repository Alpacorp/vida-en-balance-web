import { Route, Routes } from "react-router-dom";
import { Contact, Home } from "../pages";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}
